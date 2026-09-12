(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const y0="169",$p=0,gh=1,jp=2,$f=1,jf=2,Mi=3,$n=0,un=1,ei=2,Ki=0,Js=1,xh=2,vh=3,_l=4,Kp=5,fs=100,Zp=101,Jp=102,Qp=103,tm=104,em=200,nm=201,im=202,sm=203,gl=204,xl=205,rm=206,om=207,am=208,cm=209,lm=210,hm=211,um=212,fm=213,dm=214,vl=0,Ml=1,Sl=2,sr=3,yl=4,El=5,wl=6,Al=7,Kf=0,pm=1,mm=2,Zi=0,_m=1,gm=2,xm=3,Zf=4,vm=5,Mm=6,Sm=7,Jf=300,rr=301,or=302,bl=303,Tl=304,Ra=306,gs=1e3,$i=1001,Rl=1002,gn=1003,ym=1004,uo=1005,Ue=1006,Ya=1007,Yn=1008,Ti=1009,Qf=1010,td=1011,Xr=1012,E0=1013,xs=1014,ni=1015,mr=1016,w0=1017,A0=1018,ar=1020,ed=35902,nd=1021,id=1022,Qe=1023,sd=1024,rd=1025,Qs=1026,cr=1027,b0=1028,T0=1029,od=1030,R0=1031,L0=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,Ll=35840,Cl=35841,Il=35842,Pl=35843,Dl=36196,Ol=37492,Nl=37496,Ul=37808,Fl=37809,kl=37810,Bl=37811,zl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,ql=37817,Xl=37818,Yl=37819,$l=37820,jl=37821,na=36492,Kl=36494,Zl=36495,ad=36283,Jl=36284,Ql=36285,t0=36286,Em=3200,wm=3201,cd=0,Am=1,Xi="",Je="srgb",Ci="srgb-linear",C0="display-p3",La="display-p3-linear",fa="linear",_e="srgb",da="rec709",pa="p3",Ts=7680,Mh=519,bm=512,Tm=513,Rm=514,ld=515,Lm=516,Cm=517,Im=518,Pm=519,Sh=35044,Yr=35048,yh="300 es",wi=2e3,ma=2001;class _r{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,e0=180/Math.PI;function Jr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Dm(n,t){return(n%t+t)%t}function ja(n,t,e){return(1-e)*n+e*t}function Sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,o,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],x=s[0],m=s[3],p=s[6],v=s[1],M=s[4],y=s[7],R=s[2],A=s[5],E=s[8];return r[0]=o*x+a*v+c*R,r[3]=o*m+a*M+c*A,r[6]=o*p+a*y+c*E,r[1]=l*x+h*v+u*R,r[4]=l*m+h*M+u*A,r[7]=l*p+h*y+u*E,r[2]=f*x+d*v+_*R,r[5]=f*m+d*M+_*A,r[8]=f*p+d*y+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Yt;function hd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Om(){const n=_a("canvas");return n.style.display="block",n}const Eh={};function ia(n){n in Eh||(Eh[n]=!0,console.warn(n))}function Nm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Um(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wh=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ah=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yr={[Ci]:{transfer:fa,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Je]:{transfer:_e,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[La]:{transfer:fa,primaries:pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ah),fromReference:n=>n.applyMatrix3(wh)},[C0]:{transfer:_e,primaries:pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ah),fromReference:n=>n.applyMatrix3(wh).convertLinearToSRGB()}},km=new Set([Ci,La]),ae={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!km.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=yr[t].toReference,s=yr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return yr[n].primaries},getTransfer:function(n){return n===Xi?fa:yr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(yr[t].luminanceCoefficients)}};function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Za(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class Bm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=_a("canvas")),Rs.width=t.width,Rs.height=t.height;const i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=tr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tr(e[i]/255)*255):e[i]=tr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zm=0;class ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hm=0;class tn extends _r{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=$i,s=$i,r=Ue,o=Yn,a=Qe,c=Ti,l=tn.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Jr(),this.name="",this.source=new ud(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Jf;tn.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(d+1)/2,R=(p+1)/2,A=(h+f)/4,E=(u+x)/4,P=(_+m)/4;return M>y&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=E/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=P/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gm extends _r{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ud(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Gm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fd extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vm extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const y=a*v;if(c=c*m+f*y,l=l*m+d*y,h=h*m+_*y,u=u*m+x*y,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new z,bh=new gr;class Zn{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),po.subVectors(this.max,Er),Ls.subVectors(t.a,Er),Cs.subVectors(t.b,Er),Is.subVectors(t.c,Er),Di.subVectors(Cs,Ls),Oi.subVectors(Is,Cs),ns.subVectors(Ls,Is);let e=[0,-Di.z,Di.y,0,-Oi.z,Oi.y,0,-ns.z,ns.y,Di.z,0,-Di.x,Oi.z,0,-Oi.x,ns.z,0,-ns.x,-Di.y,Di.x,0,-Oi.y,Oi.x,0,-ns.y,ns.x,0];return!tc(e,Ls,Cs,Is,po)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,Ls,Cs,Is,po))?!1:(mo.crossVectors(Di,Oi),e=[mo.x,mo.y,mo.z],tc(e,Ls,Cs,Is,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,fo=new Zn,Ls=new z,Cs=new z,Is=new z,Di=new z,Oi=new z,ns=new z,Er=new z,po=new z,mo=new z,is=new z;function tc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=i.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wm=new Zn,wr=new z,ec=new z;class Qr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Wm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(ec)),this.expandByPoint(wr.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new z,nc=new z,_o=new z,Ni=new z,ic=new z,go=new z,sc=new z;class qm{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nc.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(nc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=Ni.dot(this.direction),c=-Ni.dot(_o),l=Ni.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nc).addScaledVector(_o,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){ic.subVectors(e,t),go.subVectors(i,t),sc.crossVectors(ic,go);let o=this.direction.dot(sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);const c=a*this.direction.dot(go.crossVectors(Ni,go));if(c<0)return null;const l=a*this.direction.dot(ic.cross(Ni));if(l<0||c+l>o)return null;const h=-a*Ni.dot(sc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,_,x,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,_,x,m)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,x=l*u;e[0]=f+x*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xm,t,Ym)}lookAt(t,e,i){const s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Ui.crossVectors(i,En),Ui.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ui.crossVectors(i,En)),Ui.normalize(),xo.crossVectors(En,Ui),s[0]=Ui.x,s[4]=xo.x,s[8]=En.x,s[1]=Ui.y,s[5]=xo.y,s[9]=En.y,s[2]=Ui.z,s[6]=xo.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],v=i[3],M=i[7],y=i[11],R=i[15],A=s[0],E=s[4],P=s[8],C=s[12],g=s[1],S=s[5],b=s[9],L=s[13],O=s[2],k=s[6],I=s[10],D=s[14],U=s[3],Y=s[7],Z=s[11],tt=s[15];return r[0]=o*A+a*g+c*O+l*U,r[4]=o*E+a*S+c*k+l*Y,r[8]=o*P+a*b+c*I+l*Z,r[12]=o*C+a*L+c*D+l*tt,r[1]=h*A+u*g+f*O+d*U,r[5]=h*E+u*S+f*k+d*Y,r[9]=h*P+u*b+f*I+d*Z,r[13]=h*C+u*L+f*D+d*tt,r[2]=_*A+x*g+m*O+p*U,r[6]=_*E+x*S+m*k+p*Y,r[10]=_*P+x*b+m*I+p*Z,r[14]=_*C+x*L+m*D+p*tt,r[3]=v*A+M*g+y*O+R*U,r[7]=v*E+M*S+y*k+R*Y,r[11]=v*P+M*b+y*I+R*Z,r[15]=v*C+M*L+y*D+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+x*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],x=t[13],m=t[14],p=t[15],v=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,M=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,y=h*x*l-_*u*l+_*a*d-o*x*d-h*a*p+o*u*p,R=_*u*c-h*x*c-_*a*f+o*x*f+h*a*m-o*u*m,A=e*v+i*M+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=v*E,t[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*E,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*p+i*c*p)*E,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*E,t[4]=M*E,t[5]=(h*m*r-_*f*r+_*s*d-e*m*d-h*s*p+e*f*p)*E,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=y*E,t[9]=(_*u*r-h*x*r-_*i*d+e*x*d+h*i*p-e*u*p)*E,t[10]=(o*x*r-_*a*r+_*i*l-e*x*l-o*i*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*E,t[12]=R*E,t[13]=(h*x*s-_*u*s+_*i*f-e*x*f-h*i*m+e*u*m)*E,t[14]=(_*a*s-o*x*s-_*i*c+e*x*c+o*i*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,x=o*h,m=o*u,p=a*u,v=c*l,M=c*h,y=c*u,R=i.x,A=i.y,E=i.z;return s[0]=(1-(x+p))*R,s[1]=(d+y)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(_+M)*E,s[9]=(m-v)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);const l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wi){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===wi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ma)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wi){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h;let _,x;if(a===wi)_=(o+r)*u,x=-2*u;else if(a===ma)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ps=new z,Bn=new Vt,Xm=new z(0,0,0),Ym=new z(1,1,1),Ui=new z,xo=new z,En=new z,Th=new Vt,Rh=new gr;class jn{constructor(t=0,e=0,i=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $m=0;const Lh=new z,Ds=new gr,mi=new Vt,vo=new z,Ar=new z,jm=new z,Km=new gr,Ch=new z(1,0,0),Ih=new z(0,1,0),Ph=new z(0,0,1),Dh={type:"added"},Zm={type:"removed"},Os={type:"childadded",child:null},rc={type:"childremoved",child:null};class He extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new z,e=new jn,i=new gr,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Yt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vo.copy(t):vo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ar,vo,this.up):mi.lookAt(vo,Ar,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(mi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zm),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Km,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}He.DEFAULT_UP=new z(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new z,_i=new z,oc=new z,gi=new z,Ns=new z,Us=new z,Oh=new z,ac=new z,cc=new z,lc=new z,hc=new ce,uc=new ce,fc=new ce;class qn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){zn.subVectors(s,e),_i.subVectors(i,e),oc.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(_i),c=zn.dot(oc),l=_i.dot(_i),h=_i.dot(oc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return hc.setScalar(0),uc.setScalar(0),fc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,i),fc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(t,e,i,s){return zn.subVectors(i,e),_i.subVectors(t,e),zn.cross(_i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),zn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return qn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,i),Us.subVectors(r,i),ac.subVectors(t,i);const c=Ns.dot(ac),l=Us.dot(ac);if(c<=0&&l<=0)return e.copy(i);cc.subVectors(t,s);const h=Ns.dot(cc),u=Us.dot(cc);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Ns,o);lc.subVectors(t,r);const d=Ns.dot(lc),_=Us.dot(lc);if(_>=0&&d<=_)return e.copy(r);const x=d*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Us,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Oh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(Oh,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function dc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Dm(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=dc(o,r,t+1/3),this.g=dc(o,r,t),this.b=dc(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=Za(t.r),this.g=Za(t.g),this.b=Za(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ae.fromWorkingColorSpace(Ke.copy(this),t),Math.round(an(Ke.r*255,0,255))*65536+Math.round(an(Ke.g*255,0,255))*256+Math.round(an(Ke.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Je){ae.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Mo);const i=ja(Fi.h,Mo.h,e),s=ja(Fi.s,Mo.s,e),r=ja(Fi.l,Mo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Ot;Ot.NAMES=pd;let Jm=0;class to extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=Js,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=xl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==xl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ps extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new z,So=new Nt;class le{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sh&&(t.usage=this.usage),t}}class md extends le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _d extends le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Qm=0;const In=new Vt,pc=new He,Fs=new z,wn=new Zn,br=new Zn,Be=new z;class en extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?_d:md)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,i){return In.makeTranslation(t,e,i),this.applyMatrix4(In),this}scale(t,e,i){return In.makeScale(t,e,i),this.applyMatrix4(In),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(wn.min,br.min),wn.expandByPoint(Be),Be.addVectors(wn.max,br.max),wn.expandByPoint(Be)):(wn.expandByPoint(br.min),wn.expandByPoint(br.max))}wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),Be.add(Fs)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new z,c[P]=new z;const l=new z,h=new z,u=new z,f=new Nt,d=new Nt,_=new Nt,x=new z,m=new z;function p(P,C,g){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,g),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,C),_.fromBufferAttribute(r,g),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const S=1/(d.x*_.y-_.x*d.y);isFinite(S)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(S),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(S),a[P].add(x),a[C].add(x),a[g].add(x),c[P].add(m),c[C].add(m),c[g].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,C=v.length;P<C;++P){const g=v[P],S=g.start,b=g.count;for(let L=S,O=S+b;L<O;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new z,y=new z,R=new z,A=new z;function E(P){R.fromBufferAttribute(s,P),A.copy(R);const C=a[P];M.copy(C),M.sub(R.multiplyScalar(R.dot(C))).normalize(),y.crossVectors(A,C);const S=y.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,S)}for(let P=0,C=v.length;P<C;++P){const g=v[P],S=g.start,b=g.count;for(let L=S,O=S+b;L<O;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new Vt,ss=new qm,yo=new Qr,Uh=new z,Eo=new z,wo=new z,Ao=new z,mc=new z,bo=new z,Fh=new z,To=new z;class Dt extends He{constructor(t=new en,e=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(mc.fromBufferAttribute(u,t),o?bo.addScaledVector(mc,h):bo.addScaledVector(mc.sub(e),h))}e.add(bo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(yo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(yo,Uh)===null||ss.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,R=M;y<R;y+=3){const A=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);s=Ro(this,p,t,i,l,h,u,A,E,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Ro(this,o,t,i,l,h,u,v,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,R=M;y<R;y+=3){const A=y,E=y+1,P=y+2;s=Ro(this,p,t,i,l,h,u,A,E,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const v=m,M=m+1,y=m+2;s=Ro(this,o,t,i,l,h,u,v,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function t_(n,t,e,i,s,r,o,a){let c;if(t.side===un?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===$n,a),c===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(To);return l<e.near||l>e.far?null:{distance:l,point:To.clone(),object:n}}function Ro(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Eo),n.getVertexPosition(c,wo),n.getVertexPosition(l,Ao);const h=t_(n,t,e,i,Eo,wo,Ao,Fh);if(h){const u=new z;qn.getBarycoord(Fh,Eo,wo,Ao,u),s&&(h.uv=qn.getInterpolatedAttribute(s,a,c,l,u,new Nt)),r&&(h.uv1=qn.getInterpolatedAttribute(r,a,c,l,u,new Nt)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};qn.getNormal(Eo,wo,Ao,f.normal),h.face=f,h.barycoord=u}return h}class $e extends en{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function _(x,m,p,v,M,y,R,A,E,P,C){const g=y/E,S=R/P,b=y/2,L=R/2,O=A/2,k=E+1,I=P+1;let D=0,U=0;const Y=new z;for(let Z=0;Z<I;Z++){const tt=Z*S-L;for(let K=0;K<k;K++){const q=K*g-b;Y[x]=q*v,Y[m]=tt*M,Y[p]=O,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(K/E),u.push(1-Z/P),D+=1}}for(let Z=0;Z<P;Z++)for(let tt=0;tt<E;tt++){const K=f+tt+k*Z,q=f+tt+k*(Z+1),H=f+(tt+1)+k*(Z+1),F=f+(tt+1)+k*Z;c.push(K,q,F),c.push(q,H,F),U+=6}a.addGroup(d,U,C),d+=U,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function sn(n){const t={};for(let e=0;e<n.length;e++){const i=lr(n[e]);for(const s in i)t[s]=i[s]}return t}function e_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const n_={clone:lr,merge:sn};var i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=e_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xd extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new z,kh=new Nt,Bh=new Nt;class cn extends xd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=e0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return e0*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Bh),e.subVectors(Bh,kh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($a*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class r_ extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(ks,Bs,t,e);s.layers=this.layers,this.add(s);const r=new cn(ks,Bs,t,e);r.layers=this.layers,this.add(r);const o=new cn(ks,Bs,t,e);o.layers=this.layers,this.add(o);const a=new cn(ks,Bs,t,e);a.layers=this.layers,this.add(a);const c=new cn(ks,Bs,t,e);c.layers=this.layers,this.add(c);const l=new cn(ks,Bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class vd extends tn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class o_ extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new vd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ki});r.uniforms.tEquirect.value=e;const o=new Dt(s,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Ue),new r_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const _c=new z,a_=new z,c_=new Yt;class yi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=_c.subVectors(i,e).cross(a_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_c),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||c_.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Qr,Lo=new z;class eo{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],x=s[10],m=s[11],p=s[12],v=s[13],M=s[14],y=s[15];if(i[0].setComponents(c-r,f-l,m-d,y-p).normalize(),i[1].setComponents(c+r,f+l,m+d,y+p).normalize(),i[2].setComponents(c+o,f+h,m+_,y+v).normalize(),i[3].setComponents(c-o,f-h,m-_,y-v).normalize(),i[4].setComponents(c-a,f-u,m-x,y-M).normalize(),e===wi)i[5].setComponents(c+a,f+u,m+x,y+M).normalize();else if(e===ma)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function l_(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],x=u[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ii extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let M=0;M<l;M++){const y=M*u-r;_.push(y,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,y=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;d.push(M,y,A),d.push(y,R,A)}this.setIndex(d),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
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
#endif`,f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
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
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
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
#endif`,v_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,w_=`#ifdef USE_BUMPMAP
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,O_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`
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
}`,G_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z_=`#ifdef USE_GRADIENTMAP
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
}`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,cg=`struct PhysicalMaterial {
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
}`,lg=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,_1=`#if DEPTH_PACKING == 3200
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
}`,g1=`#define DISTANCE
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
}`,x1=`#define DISTANCE
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`uniform float scale;
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
}`,y1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,b1=`#define LAMBERT
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
}`,T1=`#define MATCAP
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
}`,R1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,C1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,P1=`#define PHONG
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
}`,D1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,N1=`#define TOON
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
}`,U1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,k1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,z1=`uniform vec3 color;
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
}`,H1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:h_,alphahash_pars_fragment:u_,alphamap_fragment:f_,alphamap_pars_fragment:d_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:__,aomap_pars_fragment:g_,batching_pars_vertex:x_,batching_vertex:v_,begin_vertex:M_,beginnormal_vertex:S_,bsdfs:y_,iridescence_fragment:E_,bumpmap_pars_fragment:w_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:R_,color_fragment:L_,color_pars_fragment:C_,color_pars_vertex:I_,color_vertex:P_,common:D_,cube_uv_reflection_fragment:O_,defaultnormal_vertex:N_,displacementmap_pars_vertex:U_,displacementmap_vertex:F_,emissivemap_fragment:k_,emissivemap_pars_fragment:B_,colorspace_fragment:z_,colorspace_pars_fragment:H_,envmap_fragment:G_,envmap_common_pars_fragment:V_,envmap_pars_fragment:W_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:ng,envmap_vertex:X_,fog_vertex:Y_,fog_pars_vertex:$_,fog_fragment:j_,fog_pars_fragment:K_,gradientmap_pars_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:cg,lights_fragment_begin:lg,lights_fragment_maps:hg,lights_fragment_end:ug,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:_g,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:vg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:yg,morphcolor_vertex:Eg,morphnormal_vertex:wg,morphtarget_pars_vertex:Ag,morphtarget_vertex:bg,normal_fragment_begin:Tg,normal_fragment_maps:Rg,normal_pars_fragment:Lg,normal_pars_vertex:Cg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:kg,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Hg,dithering_pars_fragment:Gg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Xg,shadowmap_vertex:Yg,shadowmask_pars_fragment:$g,skinbase_vertex:jg,skinning_pars_vertex:Kg,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:Qg,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:o1,uv_vertex:a1,worldpos_vertex:c1,background_vert:l1,background_frag:h1,backgroundCube_vert:u1,backgroundCube_frag:f1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:_1,distanceRGBA_vert:g1,distanceRGBA_frag:x1,equirect_vert:v1,equirect_frag:M1,linedashed_vert:S1,linedashed_frag:y1,meshbasic_vert:E1,meshbasic_frag:w1,meshlambert_vert:A1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:R1,meshnormal_vert:L1,meshnormal_frag:C1,meshphong_vert:I1,meshphong_frag:P1,meshphysical_vert:D1,meshphysical_frag:O1,meshtoon_vert:N1,meshtoon_frag:U1,points_vert:F1,points_frag:k1,shadow_vert:B1,shadow_frag:z1,sprite_vert:H1,sprite_frag:G1},dt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ti={basic:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:sn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:sn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:sn([dt.points,dt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:sn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:sn([dt.common,dt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:sn([dt.sprite,dt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:sn([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:sn([dt.lights,dt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ti.physical={uniforms:sn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Co={r:0,b:0,g:0},os=new jn,V1=new Vt;function W1(n,t,e,i,s,r,o){const a=new Ot(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1;const y=_(v);y===null?p(a,c):y&&y.isColor&&(p(y,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,M){const y=_(M);y&&(y.isCubeTexture||y.mapping===Ra)?(h===void 0&&(h=new Dt(new $e(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:lr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(M.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(os)),h.material.toneMapped=ae.getTransfer(y.colorSpace)!==_e,(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Dt(new Ii(2,2),new Ri({name:"BackgroundMaterial",uniforms:lr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Co,gd(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function q1(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(g,S,b,L,O){let k=!1;const I=u(L,b,S);r!==I&&(r=I,l(r.object)),k=d(g,L,b,O),k&&_(g,L,b,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(g,S,b,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(g){return n.bindVertexArray(g)}function h(g){return n.deleteVertexArray(g)}function u(g,S,b){const L=b.wireframe===!0;let O=i[g.id];O===void 0&&(O={},i[g.id]=O);let k=O[S.id];k===void 0&&(k={},O[S.id]=k);let I=k[L];return I===void 0&&(I=f(c()),k[L]=I),I}function f(g){const S=[],b=[],L=[];for(let O=0;O<e;O++)S[O]=0,b[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:b,attributeDivisors:L,object:g,attributes:{},index:null}}function d(g,S,b,L){const O=r.attributes,k=S.attributes;let I=0;const D=b.getAttributes();for(const U in D)if(D[U].location>=0){const Z=O[U];let tt=k[U];if(tt===void 0&&(U==="instanceMatrix"&&g.instanceMatrix&&(tt=g.instanceMatrix),U==="instanceColor"&&g.instanceColor&&(tt=g.instanceColor)),Z===void 0||Z.attribute!==tt||tt&&Z.data!==tt.data)return!0;I++}return r.attributesNum!==I||r.index!==L}function _(g,S,b,L){const O={},k=S.attributes;let I=0;const D=b.getAttributes();for(const U in D)if(D[U].location>=0){let Z=k[U];Z===void 0&&(U==="instanceMatrix"&&g.instanceMatrix&&(Z=g.instanceMatrix),U==="instanceColor"&&g.instanceColor&&(Z=g.instanceColor));const tt={};tt.attribute=Z,Z&&Z.data&&(tt.data=Z.data),O[U]=tt,I++}r.attributes=O,r.attributesNum=I,r.index=L}function x(){const g=r.newAttributes;for(let S=0,b=g.length;S<b;S++)g[S]=0}function m(g){p(g,0)}function p(g,S){const b=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;b[g]=1,L[g]===0&&(n.enableVertexAttribArray(g),L[g]=1),O[g]!==S&&(n.vertexAttribDivisor(g,S),O[g]=S)}function v(){const g=r.newAttributes,S=r.enabledAttributes;for(let b=0,L=S.length;b<L;b++)S[b]!==g[b]&&(n.disableVertexAttribArray(b),S[b]=0)}function M(g,S,b,L,O,k,I){I===!0?n.vertexAttribIPointer(g,S,b,O,k):n.vertexAttribPointer(g,S,b,L,O,k)}function y(g,S,b,L){x();const O=L.attributes,k=b.getAttributes(),I=S.defaultAttributeValues;for(const D in k){const U=k[D];if(U.location>=0){let Y=O[D];if(Y===void 0&&(D==="instanceMatrix"&&g.instanceMatrix&&(Y=g.instanceMatrix),D==="instanceColor"&&g.instanceColor&&(Y=g.instanceColor)),Y!==void 0){const Z=Y.normalized,tt=Y.itemSize,K=t.get(Y);if(K===void 0)continue;const q=K.buffer,H=K.type,F=K.bytesPerElement,J=H===n.INT||H===n.UNSIGNED_INT||Y.gpuType===E0;if(Y.isInterleavedBufferAttribute){const nt=Y.data,lt=nt.stride,ct=Y.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<U.locationSize;pt++)p(U.location+pt,nt.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<U.locationSize;pt++)m(U.location+pt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let pt=0;pt<U.locationSize;pt++)M(U.location+pt,tt/U.locationSize,H,Z,lt*F,(ct+tt/U.locationSize*pt)*F,J)}else{if(Y.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt,Y.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let nt=0;nt<U.locationSize;nt++)M(U.location+nt,tt/U.locationSize,H,Z,tt*F,tt/U.locationSize*nt*F,J)}}else if(I!==void 0){const Z=I[D];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(U.location,Z);break;case 3:n.vertexAttrib3fv(U.location,Z);break;case 4:n.vertexAttrib4fv(U.location,Z);break;default:n.vertexAttrib1fv(U.location,Z)}}}}v()}function R(){P();for(const g in i){const S=i[g];for(const b in S){const L=S[b];for(const O in L)h(L[O].object),delete L[O];delete S[b]}delete i[g]}}function A(g){if(i[g.id]===void 0)return;const S=i[g.id];for(const b in S){const L=S[b];for(const O in L)h(L[O].object),delete L[O];delete S[b]}delete i[g.id]}function E(g){for(const S in i){const b=i[S];if(b[g.id]===void 0)continue;const L=b[g.id];for(const O in L)h(L[O].object),delete L[O];delete b[g.id]}}function P(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function X1(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)e.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Y1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Qe&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ti&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ni&&!P)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function $1(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new yi,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const v=r?0:i,M=v*4;let y=p.clippingState||null;c.value=y,y=h(_,f,M,d);for(let R=0;R!==M;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==x;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function j1(n){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=rr:a===Tl&&(o.mapping=or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===Tl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new o_(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Sd extends xd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,zh=[.125,.215,.35,.446,.526,.582],ds=20,gc=new Sd,Hh=new Ot;let xc=null,vc=0,Mc=0,Sc=!1;const us=(1+Math.sqrt(5))/2,zs=1/us,Gh=[new z(-us,zs,0),new z(us,zs,0),new z(-zs,0,us),new z(zs,0,us),new z(0,us,-zs),new z(0,us,zs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){xc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,vc,Mc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:mr,format:Qe,colorSpace:Ci,depthBuffer:!1},s=Wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K1(r)),this._blurMaterial=Z1(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,i,s){const a=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Hh),h.toneMapping=Zi,h.autoClear=!1;const d=new ps({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new Dt(new $e,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Hh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Io(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Io(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,gc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gh[(s-r-1)%Gh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let v=0;for(let E=0;E<ds;++E){const P=E/x,C=Math.exp(-P*P/2);p.push(C),E===0?v+=C:E<m&&(v+=2*C)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const y=this._sizeLods[s],R=3*y*(s>M-Ks?s-M+Ks:0),A=4*(this._cubeSize-y);Io(e,R,A,3*y,2*y),c.setRenderTarget(e),c.render(u,gc)}}function K1(n){const t=[],e=[],i=[];let s=n;const r=n-Ks+1+zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Ks?c=zh[o-n+Ks-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,x=3,m=2,p=1,v=new Float32Array(x*_*d),M=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,P=A>2?0:-1,C=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(C,x*_*A),M.set(f,m*_*A);const g=[A,A,A,A,A,A];y.set(g,p*_*A)}const R=new en;R.setAttribute("position",new le(v,x)),R.setAttribute("uv",new le(M,m)),R.setAttribute("faceIndex",new le(y,p)),t.push(R),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wh(n,t,e){const i=new Qi(n,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Z1(n,t,e){const i=new Float32Array(ds),s=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:I0(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function qh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:I0(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Xh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:I0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function I0(){return`

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
	`}function J1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===bl||c===Tl,h=c===rr||c===or;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vh(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Vh(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Q1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ia("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tx(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const x=d[_];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let M=0,y=v.length;M<y;M+=3){const R=v[M+0],A=v[M+1],E=v[M+2];f.push(R,A,A,E,E,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const R=M+0,A=M+1,E=M+2;f.push(R,A,A,E,E,R)}}else return;const m=new(hd(f)?_d:md)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ex(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function u(f,d,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v];for(let v=0;v<x.length;v++)e.update(p,i,x[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ix(n,t,e){const i=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let g=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",g)};var d=g;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*A*4*u),P=new fd(E,R,A,u);P.type=ni,P.needsUpdate=!0;const C=y*4;for(let S=0;S<u;S++){const b=p[S],L=v[S],O=M[S],k=R*A*4*S;for(let I=0;I<b.count;I++){const D=I*C;_===!0&&(s.fromBufferAttribute(b,I),E[k+D+0]=s.x,E[k+D+1]=s.y,E[k+D+2]=s.z,E[k+D+3]=0),x===!0&&(s.fromBufferAttribute(L,I),E[k+D+4]=s.x,E[k+D+5]=s.y,E[k+D+6]=s.z,E[k+D+7]=0),m===!0&&(s.fromBufferAttribute(O,I),E[k+D+8]=s.x,E[k+D+9]=s.y,E[k+D+10]=s.z,E[k+D+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new Nt(R,A)},i.set(a,f),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function sx(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class yd extends tn{constructor(t,e,i,s,r,o,a,c,l,h=Qs){if(h!==Qs&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qs&&(i=xs),i===void 0&&h===cr&&(i=ar),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ed=new tn,Yh=new yd(1,1),wd=new fd,Ad=new Vm,bd=new vd,$h=[],jh=[],Kh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ca(n,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function lx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),ke(e,i)}}function hx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),ke(e,i)}}function ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;Kh.set(i),n.uniformMatrix4fv(this.addr,!1,Kh),ke(e,i)}}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function _x(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function Mx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yh.compareFunction=ld,r=Yh):r=Ed,e.setTexture2D(t||r,s)}function Sx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ad,s)}function yx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bd,s)}function Ex(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wd,s)}function wx(n){switch(n){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return cx;case 35674:return lx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return _x;case 36294:return gx;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Ax(n,t){n.uniform1fv(this.addr,t)}function bx(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Tx(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Rx(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Lx(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cx(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ix(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Px(n,t){n.uniform1iv(this.addr,t)}function Dx(n,t){n.uniform2iv(this.addr,t)}function Ox(n,t){n.uniform3iv(this.addr,t)}function Nx(n,t){n.uniform4iv(this.addr,t)}function Ux(n,t){n.uniform1uiv(this.addr,t)}function Fx(n,t){n.uniform2uiv(this.addr,t)}function kx(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function zx(n,t,e){const i=this.cache,s=t.length,r=Ca(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ed,r[o])}function Hx(n,t,e){const i=this.cache,s=t.length,r=Ca(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ad,r[o])}function Gx(n,t,e){const i=this.cache,s=t.length,r=Ca(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bd,r[o])}function Vx(n,t,e){const i=this.cache,s=t.length,r=Ca(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wd,r[o])}function Wx(n){switch(n){case 5126:return Ax;case 35664:return bx;case 35665:return Tx;case 35666:return Rx;case 35674:return Lx;case 35675:return Cx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Dx;case 35668:case 35672:return Ox;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return Fx;case 36295:return kx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}class qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wx(e.type)}}class Xx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wx(e.type)}}class Yx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function Qh(n,t){n.seq.push(t),n.map[t.id]=t}function $x(n,t,e){const i=n.name,s=i.length;for(yc.lastIndex=0;;){const r=yc.exec(i),o=yc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qh(e,l===void 0?new qx(a,n,t):new Xx(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Yx(a),Qh(e,u)),e=u}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$x(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function tu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jx=37297;let Kx=0;function Zx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Jx(n){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n);let i;switch(t===e?i="":t===pa&&e===da?i="LinearDisplayP3ToLinearSRGB":t===da&&e===pa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case La:return[i,"LinearTransferOETF"];case Je:case C0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function eu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zx(n.getShaderSource(t),o)}else return s}function Qx(n,t){const e=Jx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tv(n,t){let e;switch(t){case _m:e="Linear";break;case gm:e="Reinhard";break;case xm:e="Cineon";break;case Zf:e="ACESFilmic";break;case Mm:e="AgX";break;case Sm:e="Neutral";break;case vm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new z;function ev(){ae.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function iv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Br(n){return n!==""}function nu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function n0(n){return n.replace(rv,av)}const ov=new Map;function av(n,t){let e=$t[t];if(e===void 0){const i=ov.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return n0(e)}const cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(n){return n.replace(cv,lv)}function lv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function hv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function uv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function dv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kf:t="ENVMAP_BLENDING_MULTIPLY";break;case pm:t="ENVMAP_BLENDING_MIX";break;case mm:t="ENVMAP_BLENDING_ADD";break}return t}function pv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hv(e),l=uv(e),h=fv(e),u=dv(e),f=pv(e),d=nv(e),_=iv(r),x=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Zi?tv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Qx("linearToOutputTexel",e.outputColorSpace),ev(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=n0(o),o=nu(o,e),o=iu(o,e),a=n0(a),a=nu(a,e),a=iu(a,e),o=su(o),a=su(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,y=v+p+a,R=tu(s,s.VERTEX_SHADER,M),A=tu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(S){if(n.debug.checkShaderErrors){const b=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(R).trim(),O=s.getShaderInfoLog(A).trim();let k=!0,I=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,A);else{const D=eu(s,R,"vertex"),U=eu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+b+`
`+D+`
`+U)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||O==="")&&(I=!1);I&&(S.diagnostics={runnable:k,programLog:b,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(R),s.deleteShader(A),P=new sa(s,x),C=sv(s,x)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,jx)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let _v=0;class gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new xv(t),e.set(t,i)),i}}class xv{constructor(t){this.id=_v++,this.code=t,this.usedTimes=0}}function vv(n,t,e,i,s,r,o){const a=new dd,c=new gv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,S,b,L,O){const k=L.fog,I=O.geometry,D=g.isMeshStandardMaterial?L.environment:null,U=(g.isMeshStandardMaterial?e:t).get(g.envMap||D),Y=U&&U.mapping===Ra?U.image.height:null,Z=x[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=tt!==void 0?tt.length:0;let q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let H,F,J,nt;if(Z){const dn=ti[Z];H=dn.vertexShader,F=dn.fragmentShader}else H=g.vertexShader,F=g.fragmentShader,c.update(g),J=c.getVertexShaderID(g),nt=c.getFragmentShaderID(g);const lt=n.getRenderTarget(),ct=O.isInstancedMesh===!0,pt=O.isBatchedMesh===!0,gt=!!g.map,yt=!!g.matcap,B=!!U,ue=!!g.aoMap,It=!!g.lightMap,Gt=!!g.bumpMap,Tt=!!g.normalMap,Kt=!!g.displacementMap,xt=!!g.emissiveMap,N=!!g.metalnessMap,w=!!g.roughnessMap,X=g.anisotropy>0,it=g.clearcoat>0,at=g.dispersion>0,st=g.iridescence>0,At=g.sheen>0,ft=g.transmission>0,St=X&&!!g.anisotropyMap,Jt=it&&!!g.clearcoatMap,ht=it&&!!g.clearcoatNormalMap,Et=it&&!!g.clearcoatRoughnessMap,Bt=st&&!!g.iridescenceMap,zt=st&&!!g.iridescenceThicknessMap,wt=At&&!!g.sheenColorMap,Qt=At&&!!g.sheenRoughnessMap,qt=!!g.specularMap,fe=!!g.specularColorMap,G=!!g.specularIntensityMap,vt=ft&&!!g.transmissionMap,Q=ft&&!!g.thicknessMap,rt=!!g.gradientMap,mt=!!g.alphaMap,Mt=g.alphaTest>0,te=!!g.alphaHash,Ce=!!g.extensions;let fn=Zi;g.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(fn=n.toneMapping);const ne={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:H,fragmentShader:F,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:nt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:pt,batchingColor:pt&&O._colorsTexture!==null,instancing:ct,instancingColor:ct&&O.instanceColor!==null,instancingMorph:ct&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ci,alphaToCoverage:!!g.alphaToCoverage,map:gt,matcap:yt,envMap:B,envMapMode:B&&U.mapping,envMapCubeUVHeight:Y,aoMap:ue,lightMap:It,bumpMap:Gt,normalMap:Tt,displacementMap:d&&Kt,emissiveMap:xt,normalMapObjectSpace:Tt&&g.normalMapType===Am,normalMapTangentSpace:Tt&&g.normalMapType===cd,metalnessMap:N,roughnessMap:w,anisotropy:X,anisotropyMap:St,clearcoat:it,clearcoatMap:Jt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Et,dispersion:at,iridescence:st,iridescenceMap:Bt,iridescenceThicknessMap:zt,sheen:At,sheenColorMap:wt,sheenRoughnessMap:Qt,specularMap:qt,specularColorMap:fe,specularIntensityMap:G,transmission:ft,transmissionMap:vt,thicknessMap:Q,gradientMap:rt,opaque:g.transparent===!1&&g.blending===Js&&g.alphaToCoverage===!1,alphaMap:mt,alphaTest:Mt,alphaHash:te,combine:g.combine,mapUv:gt&&m(g.map.channel),aoMapUv:ue&&m(g.aoMap.channel),lightMapUv:It&&m(g.lightMap.channel),bumpMapUv:Gt&&m(g.bumpMap.channel),normalMapUv:Tt&&m(g.normalMap.channel),displacementMapUv:Kt&&m(g.displacementMap.channel),emissiveMapUv:xt&&m(g.emissiveMap.channel),metalnessMapUv:N&&m(g.metalnessMap.channel),roughnessMapUv:w&&m(g.roughnessMap.channel),anisotropyMapUv:St&&m(g.anisotropyMap.channel),clearcoatMapUv:Jt&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&m(g.sheenRoughnessMap.channel),specularMapUv:qt&&m(g.specularMap.channel),specularColorMapUv:fe&&m(g.specularColorMap.channel),specularIntensityMapUv:G&&m(g.specularIntensityMap.channel),transmissionMapUv:vt&&m(g.transmissionMap.channel),thicknessMapUv:Q&&m(g.thicknessMap.channel),alphaMapUv:mt&&m(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Tt||X),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(gt||mt),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:fn,decodeVideoTexture:gt&&g.map.isVideoTexture===!0&&ae.getTransfer(g.map.colorSpace)===_e,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ei,flipSided:g.side===un,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ce&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&g.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function v(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const b in g.defines)S.push(b),S.push(g.defines[b]);return g.isRawShaderMaterial===!1&&(M(S,g),y(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function M(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function y(g,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),g.push(a.mask)}function R(g){const S=x[g.type];let b;if(S){const L=ti[S];b=n_.clone(L.uniforms)}else b=g.uniforms;return b}function A(g,S){let b;for(let L=0,O=h.length;L<O;L++){const k=h[L];if(k.cacheKey===S){b=k,++b.usedTimes;break}}return b===void 0&&(b=new mv(n,S,g,r),h.push(b)),b}function E(g){if(--g.usedTimes===0){const S=h.indexOf(g);h[S]=h[h.length-1],h.pop(),g.destroy()}}function P(g){c.remove(g)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:R,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:C}}function Mv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ou(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function au(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,_,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,_,x,m){const p=o(u,f,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,_,x,m){const p=o(u,f,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Sv),i.length>1&&i.sort(f||ou),s.length>1&&s.sort(f||ou)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function yv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new au,n.set(i,[o])):s>=r.length?(o=new au,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ev(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ot};break;case"SpotLight":e={position:new z,direction:new z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function wv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Av=0;function bv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Tv(n){const t=new Ev,e=wv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const s=new z,r=new Vt,o=new Vt;function a(l){let h=0,u=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,v=0,M=0,y=0,R=0,A=0,E=0;l.sort(bv);for(let C=0,g=l.length;C<g;C++){const S=l[C],b=S.color,L=S.intensity,O=S.distance,k=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=b.r*L,u+=b.g*L,f+=b.b*L;else if(S.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(S.sh.coefficients[I],L);E++}else if(S.isDirectionalLight){const I=t.get(S);if(I.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const D=S.shadow,U=e.get(S);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=S.shadow.matrix,v++}i.directional[d]=I,d++}else if(S.isSpotLight){const I=t.get(S);I.position.setFromMatrixPosition(S.matrixWorld),I.color.copy(b).multiplyScalar(L),I.distance=O,I.coneCos=Math.cos(S.angle),I.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),I.decay=S.decay,i.spot[x]=I;const D=S.shadow;if(S.map&&(i.spotLightMap[R]=S.map,R++,D.updateMatrices(S),S.castShadow&&A++),i.spotLightMatrix[x]=D.matrix,S.castShadow){const U=e.get(S);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=k,y++}x++}else if(S.isRectAreaLight){const I=t.get(S);I.color.copy(b).multiplyScalar(L),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=I,m++}else if(S.isPointLight){const I=t.get(S);if(I.color.copy(S.color).multiplyScalar(S.intensity),I.distance=S.distance,I.decay=S.decay,S.castShadow){const D=S.shadow,U=e.get(S);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,U.shadowCameraNear=D.camera.near,U.shadowCameraFar=D.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=S.shadow.matrix,M++}i.point[_]=I,_++}else if(S.isHemisphereLight){const I=t.get(S);I.skyColor.copy(S.color).multiplyScalar(L),I.groundColor.copy(S.groundColor).multiplyScalar(L),i.hemi[p]=I,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,P.directionalLength=d,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=E,i.version=Av++)}function c(l,h){let u=0,f=0,d=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(M.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function cu(n){const t=new Tv(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Rv(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cu(n),t.set(s,[a])):r>=o.length?(a=new cu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Lv extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cv extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
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
}`;function Dv(n,t,e){let i=new eo;const s=new Nt,r=new Nt,o=new ce,a=new Lv({depthPacking:wm}),c=new Cv,l={},h=e.maxTextureSize,u={[$n]:un,[un]:$n,[ei]:ei},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Iv,fragmentShader:Pv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(A,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const C=n.getRenderTarget(),g=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),b=n.state;b.setBlending(Ki),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const L=p!==Mi&&this.type===Mi,O=p===Mi&&this.type!==Mi;for(let k=0,I=A.length;k<I;k++){const D=A[k],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();if(s.multiply(Y),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null||L===!0||O===!0){const tt=this.type!==Mi?{minFilter:gn,magFilter:gn}:{};U.map!==null&&U.map.dispose(),U.map=new Qi(s.x,s.y,tt),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const Z=U.getViewportCount();for(let tt=0;tt<Z;tt++){const K=U.getViewport(tt);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),b.viewport(o),U.updateMatrices(D,tt),i=U.getFrustum(),y(E,P,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===Mi&&v(U,P),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,g,S)};function v(A,E){const P=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,P,d,x,null)}function M(A,E,P,C){let g=null;const S=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)g=S;else if(g=P.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const b=g.uuid,L=E.uuid;let O=l[b];O===void 0&&(O={},l[b]=O);let k=O[L];k===void 0&&(k=g.clone(),O[L]=k,E.addEventListener("dispose",R)),g=k}if(g.visible=E.visible,g.wireframe=E.wireframe,C===Mi?g.side=E.shadowSide!==null?E.shadowSide:E.side:g.side=E.shadowSide!==null?E.shadowSide:u[E.side],g.alphaMap=E.alphaMap,g.alphaTest=E.alphaTest,g.map=E.map,g.clipShadows=E.clipShadows,g.clippingPlanes=E.clippingPlanes,g.clipIntersection=E.clipIntersection,g.displacementMap=E.displacementMap,g.displacementScale=E.displacementScale,g.displacementBias=E.displacementBias,g.wireframeLinewidth=E.wireframeLinewidth,g.linewidth=E.linewidth,P.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const b=n.properties.get(g);b.light=P}return g}function y(A,E,P,C,g){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===Mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=t.update(A),O=A.material;if(Array.isArray(O)){const k=L.groups;for(let I=0,D=k.length;I<D;I++){const U=k[I],Y=O[U.materialIndex];if(Y&&Y.visible){const Z=M(A,Y,C,g);A.onBeforeShadow(n,A,E,P,L,Z,U),n.renderBufferDirect(P,null,L,Z,A,U),A.onAfterShadow(n,A,E,P,L,Z,U)}}}else if(O.visible){const k=M(A,O,C,g);A.onBeforeShadow(n,A,E,P,L,k,null),n.renderBufferDirect(P,null,L,k,A,null),A.onAfterShadow(n,A,E,P,L,k,null)}}const b=A.children;for(let L=0,O=b.length;L<O;L++)y(b[L],E,P,C,g)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const C=l[P],g=A.target.uuid;g in C&&(C[g].dispose(),delete C[g])}}}const Ov={[vl]:Ml,[Sl]:wl,[yl]:Al,[sr]:El,[Ml]:vl,[wl]:Sl,[Al]:yl,[El]:sr};function Nv(n){function t(){let G=!1;const vt=new ce;let Q=null;const rt=new ce(0,0,0,0);return{setMask:function(mt){Q!==mt&&!G&&(n.colorMask(mt,mt,mt,mt),Q=mt)},setLocked:function(mt){G=mt},setClear:function(mt,Mt,te,Ce,fn){fn===!0&&(mt*=Ce,Mt*=Ce,te*=Ce),vt.set(mt,Mt,te,Ce),rt.equals(vt)===!1&&(n.clearColor(mt,Mt,te,Ce),rt.copy(vt))},reset:function(){G=!1,Q=null,rt.set(-1,0,0,0)}}}function e(){let G=!1,vt=!1,Q=null,rt=null,mt=null;return{setReversed:function(Mt){vt=Mt},setTest:function(Mt){Mt?J(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!G&&(n.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(vt&&(Mt=Ov[Mt]),rt!==Mt){switch(Mt){case vl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case yl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case wl:n.depthFunc(n.GREATER);break;case Al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=Mt}},setLocked:function(Mt){G=Mt},setClear:function(Mt){mt!==Mt&&(n.clearDepth(Mt),mt=Mt)},reset:function(){G=!1,Q=null,rt=null,mt=null}}}function i(){let G=!1,vt=null,Q=null,rt=null,mt=null,Mt=null,te=null,Ce=null,fn=null;return{setTest:function(ne){G||(ne?J(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(ne){vt!==ne&&!G&&(n.stencilMask(ne),vt=ne)},setFunc:function(ne,dn,fi){(Q!==ne||rt!==dn||mt!==fi)&&(n.stencilFunc(ne,dn,fi),Q=ne,rt=dn,mt=fi)},setOp:function(ne,dn,fi){(Mt!==ne||te!==dn||Ce!==fi)&&(n.stencilOp(ne,dn,fi),Mt=ne,te=dn,Ce=fi)},setLocked:function(ne){G=ne},setClear:function(ne){fn!==ne&&(n.clearStencil(ne),fn=ne)},reset:function(){G=!1,vt=null,Q=null,rt=null,mt=null,Mt=null,te=null,Ce=null,fn=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,_=!1,x=null,m=null,p=null,v=null,M=null,y=null,R=null,A=new Ot(0,0,0),E=0,P=!1,C=null,g=null,S=null,b=null,L=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,I=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=I>=2);let U=null,Y={};const Z=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),K=new ce().fromArray(Z),q=new ce().fromArray(tt);function H(G,vt,Q,rt){const mt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(G,Mt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<Q;te++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(vt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return Mt}const F={};F[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),J(n.DEPTH_TEST),r.setFunc(sr),It(!1),Gt(gh),J(n.CULL_FACE),B(Ki);function J(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function nt(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function lt(G,vt){return h[G]!==vt?(n.bindFramebuffer(G,vt),h[G]=vt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ct(G,vt){let Q=f,rt=!1;if(G){Q=u.get(vt),Q===void 0&&(Q=[],u.set(vt,Q));const mt=G.textures;if(Q.length!==mt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,te=mt.length;Mt<te;Mt++)Q[Mt]=n.COLOR_ATTACHMENT0+Mt;Q.length=mt.length,rt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,rt=!0);rt&&n.drawBuffers(Q)}function pt(G){return d!==G?(n.useProgram(G),d=G,!0):!1}const gt={[fs]:n.FUNC_ADD,[Zp]:n.FUNC_SUBTRACT,[Jp]:n.FUNC_REVERSE_SUBTRACT};gt[Qp]=n.MIN,gt[tm]=n.MAX;const yt={[em]:n.ZERO,[nm]:n.ONE,[im]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[lm]:n.SRC_ALPHA_SATURATE,[am]:n.DST_COLOR,[rm]:n.DST_ALPHA,[sm]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[cm]:n.ONE_MINUS_DST_COLOR,[om]:n.ONE_MINUS_DST_ALPHA,[hm]:n.CONSTANT_COLOR,[um]:n.ONE_MINUS_CONSTANT_COLOR,[fm]:n.CONSTANT_ALPHA,[dm]:n.ONE_MINUS_CONSTANT_ALPHA};function B(G,vt,Q,rt,mt,Mt,te,Ce,fn,ne){if(G===Ki){_===!0&&(nt(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),G!==Kp){if(G!==x||ne!==P){if((m!==fs||M!==fs)&&(n.blendEquation(n.FUNC_ADD),m=fs,M=fs),ne)switch(G){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xh:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _l:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,v=null,y=null,R=null,A.set(0,0,0),E=0,x=G,P=ne}return}mt=mt||vt,Mt=Mt||Q,te=te||rt,(vt!==m||mt!==M)&&(n.blendEquationSeparate(gt[vt],gt[mt]),m=vt,M=mt),(Q!==p||rt!==v||Mt!==y||te!==R)&&(n.blendFuncSeparate(yt[Q],yt[rt],yt[Mt],yt[te]),p=Q,v=rt,y=Mt,R=te),(Ce.equals(A)===!1||fn!==E)&&(n.blendColor(Ce.r,Ce.g,Ce.b,fn),A.copy(Ce),E=fn),x=G,P=!1}function ue(G,vt){G.side===ei?nt(n.CULL_FACE):J(n.CULL_FACE);let Q=G.side===un;vt&&(Q=!Q),It(Q),G.blending===Js&&G.transparent===!1?B(Ki):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const rt=G.stencilWrite;o.setTest(rt),rt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Kt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(G){C!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),C=G)}function Gt(G){G!==$p?(J(n.CULL_FACE),G!==g&&(G===gh?n.cullFace(n.BACK):G===jp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),g=G}function Tt(G){G!==S&&(k&&n.lineWidth(G),S=G)}function Kt(G,vt,Q){G?(J(n.POLYGON_OFFSET_FILL),(b!==vt||L!==Q)&&(n.polygonOffset(vt,Q),b=vt,L=Q)):nt(n.POLYGON_OFFSET_FILL)}function xt(G){G?J(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function N(G){G===void 0&&(G=n.TEXTURE0+O-1),U!==G&&(n.activeTexture(G),U=G)}function w(G,vt,Q){Q===void 0&&(U===null?Q=n.TEXTURE0+O-1:Q=U);let rt=Y[Q];rt===void 0&&(rt={type:void 0,texture:void 0},Y[Q]=rt),(rt.type!==G||rt.texture!==vt)&&(U!==Q&&(n.activeTexture(Q),U=Q),n.bindTexture(G,vt||F[G]),rt.type=G,rt.texture=vt)}function X(){const G=Y[U];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(G){K.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),K.copy(G))}function wt(G){q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function Qt(G,vt){let Q=c.get(vt);Q===void 0&&(Q=new WeakMap,c.set(vt,Q));let rt=Q.get(G);rt===void 0&&(rt=n.getUniformBlockIndex(vt,G.name),Q.set(G,rt))}function qt(G,vt){const rt=c.get(vt).get(G);a.get(vt)!==rt&&(n.uniformBlockBinding(vt,rt,G.__bindingPointIndex),a.set(vt,rt))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},U=null,Y={},h={},u=new WeakMap,f=[],d=null,_=!1,x=null,m=null,p=null,v=null,M=null,y=null,R=null,A=new Ot(0,0,0),E=0,P=!1,C=null,g=null,S=null,b=null,L=null,K.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:J,disable:nt,bindFramebuffer:lt,drawBuffers:ct,useProgram:pt,setBlending:B,setMaterial:ue,setFlipSided:It,setCullFace:Gt,setLineWidth:Tt,setPolygonOffset:Kt,setScissorTest:xt,activeTexture:N,bindTexture:w,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:at,texImage2D:Et,texImage3D:Bt,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:ht,texSubImage2D:st,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:St,scissor:zt,viewport:wt,reset:fe}}function lu(n,t,e,i){const s=Uv(i);switch(e){case nd:return n*t;case sd:return n*t;case rd:return n*t*2;case b0:return n*t/s.components*s.byteLength;case T0:return n*t/s.components*s.byteLength;case od:return n*t*2/s.components*s.byteLength;case R0:return n*t*2/s.components*s.byteLength;case id:return n*t*3/s.components*s.byteLength;case Qe:return n*t*4/s.components*s.byteLength;case L0:return n*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Pl:return Math.max(n,16)*Math.max(t,8)/4;case Ll:case Il:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case na:case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ad:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ql:case t0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uv(n){switch(n){case Ti:case Qf:return{byteLength:1,components:1};case Xr:case td:case mr:return{byteLength:2,components:1};case w0:case A0:return{byteLength:2,components:4};case xs:case E0:case ni:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Fv(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,w){return d?new OffscreenCanvas(N,w):_a("canvas")}function x(N,w,X){let it=1;const at=xt(N);if((at.width>X||at.height>X)&&(it=X/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const st=Math.floor(it*at.width),At=Math.floor(it*at.height);u===void 0&&(u=_(st,At));const ft=w?_(st,At):u;return ft.width=st,ft.height=At,ft.getContext("2d").drawImage(N,0,0,st,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+st+"x"+At+")."),ft}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==gn&&N.minFilter!==Ue}function p(N){n.generateMipmap(N)}function v(N,w,X,it,at=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let st=w;if(w===n.RED&&(X===n.FLOAT&&(st=n.R32F),X===n.HALF_FLOAT&&(st=n.R16F),X===n.UNSIGNED_BYTE&&(st=n.R8)),w===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.R8UI),X===n.UNSIGNED_SHORT&&(st=n.R16UI),X===n.UNSIGNED_INT&&(st=n.R32UI),X===n.BYTE&&(st=n.R8I),X===n.SHORT&&(st=n.R16I),X===n.INT&&(st=n.R32I)),w===n.RG&&(X===n.FLOAT&&(st=n.RG32F),X===n.HALF_FLOAT&&(st=n.RG16F),X===n.UNSIGNED_BYTE&&(st=n.RG8)),w===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RG8UI),X===n.UNSIGNED_SHORT&&(st=n.RG16UI),X===n.UNSIGNED_INT&&(st=n.RG32UI),X===n.BYTE&&(st=n.RG8I),X===n.SHORT&&(st=n.RG16I),X===n.INT&&(st=n.RG32I)),w===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RGB8UI),X===n.UNSIGNED_SHORT&&(st=n.RGB16UI),X===n.UNSIGNED_INT&&(st=n.RGB32UI),X===n.BYTE&&(st=n.RGB8I),X===n.SHORT&&(st=n.RGB16I),X===n.INT&&(st=n.RGB32I)),w===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),X===n.UNSIGNED_INT&&(st=n.RGBA32UI),X===n.BYTE&&(st=n.RGBA8I),X===n.SHORT&&(st=n.RGBA16I),X===n.INT&&(st=n.RGBA32I)),w===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),w===n.RGBA){const At=at?fa:ae.getTransfer(it);X===n.FLOAT&&(st=n.RGBA32F),X===n.HALF_FLOAT&&(st=n.RGBA16F),X===n.UNSIGNED_BYTE&&(st=At===_e?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(N,w){let X;return N?w===null||w===xs||w===ar?X=n.DEPTH24_STENCIL8:w===ni?X=n.DEPTH32F_STENCIL8:w===Xr&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===xs||w===ar?X=n.DEPTH_COMPONENT24:w===ni?X=n.DEPTH_COMPONENT32F:w===Xr&&(X=n.DEPTH_COMPONENT16),X}function y(N,w){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==Ue?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function R(N){const w=N.target;w.removeEventListener("dispose",R),E(w),w.isVideoTexture&&h.delete(w)}function A(N){const w=N.target;w.removeEventListener("dispose",A),C(w)}function E(N){const w=i.get(N);if(w.__webglInit===void 0)return;const X=N.source,it=f.get(X);if(it){const at=it[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&P(N),Object.keys(it).length===0&&f.delete(X)}i.remove(N)}function P(N){const w=i.get(N);n.deleteTexture(w.__webglTexture);const X=N.source,it=f.get(X);delete it[w.__cacheKey],o.memory.textures--}function C(N){const w=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(w.__webglFramebuffer[it]))for(let at=0;at<w.__webglFramebuffer[it].length;at++)n.deleteFramebuffer(w.__webglFramebuffer[it][at]);else n.deleteFramebuffer(w.__webglFramebuffer[it]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[it])}else{if(Array.isArray(w.__webglFramebuffer))for(let it=0;it<w.__webglFramebuffer.length;it++)n.deleteFramebuffer(w.__webglFramebuffer[it]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let it=0;it<w.__webglColorRenderbuffer.length;it++)w.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[it]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=N.textures;for(let it=0,at=X.length;it<at;it++){const st=i.get(X[it]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(X[it])}i.remove(N)}let g=0;function S(){g=0}function b(){const N=g;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),g+=1,N}function L(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function O(N,w){const X=i.get(N);if(N.isVideoTexture&&Tt(N),N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){const it=N.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(X,N,w);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+w)}function k(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){q(X,N,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+w)}function I(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){q(X,N,w);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+w)}function D(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){H(X,N,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+w)}const U={[gs]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},Y={[gn]:n.NEAREST,[ym]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[Yn]:n.LINEAR_MIPMAP_LINEAR},Z={[bm]:n.NEVER,[Pm]:n.ALWAYS,[Tm]:n.LESS,[ld]:n.LEQUAL,[Rm]:n.EQUAL,[Im]:n.GEQUAL,[Lm]:n.GREATER,[Cm]:n.NOTEQUAL};function tt(N,w){if(w.type===ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ue||w.magFilter===Ya||w.magFilter===uo||w.magFilter===Yn||w.minFilter===Ue||w.minFilter===Ya||w.minFilter===uo||w.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,U[w.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,U[w.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,U[w.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Y[w.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gn||w.minFilter!==uo&&w.minFilter!==Yn||w.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function K(N,w){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",R));const it=w.source;let at=f.get(it);at===void 0&&(at={},f.set(it,at));const st=L(w);if(st!==N.__cacheKey){at[st]===void 0&&(at[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[st].usedTimes++;const At=at[N.__cacheKey];At!==void 0&&(at[N.__cacheKey].usedTimes--,At.usedTimes===0&&P(w)),N.__cacheKey=st,N.__webglTexture=at[st].texture}return X}function q(N,w,X){let it=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=n.TEXTURE_3D);const at=K(N,w),st=w.source;e.bindTexture(it,N.__webglTexture,n.TEXTURE0+X);const At=i.get(st);if(st.version!==At.__version||at===!0){e.activeTexture(n.TEXTURE0+X);const ft=ae.getPrimaries(ae.workingColorSpace),St=w.colorSpace===Xi?null:ae.getPrimaries(w.colorSpace),Jt=w.colorSpace===Xi||ft===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ht=x(w.image,!1,s.maxTextureSize);ht=Kt(w,ht);const Et=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type);let zt=v(w.internalFormat,Et,Bt,w.colorSpace,w.isVideoTexture);tt(it,w);let wt;const Qt=w.mipmaps,qt=w.isVideoTexture!==!0,fe=At.__version===void 0||at===!0,G=st.dataReady,vt=y(w,ht);if(w.isDepthTexture)zt=M(w.format===cr,w.type),fe&&(qt?e.texStorage2D(n.TEXTURE_2D,1,zt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,zt,ht.width,ht.height,0,Et,Bt,null));else if(w.isDataTexture)if(Qt.length>0){qt&&fe&&e.texStorage2D(n.TEXTURE_2D,vt,zt,Qt[0].width,Qt[0].height);for(let Q=0,rt=Qt.length;Q<rt;Q++)wt=Qt[Q],qt?G&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Et,Bt,wt.data):e.texImage2D(n.TEXTURE_2D,Q,zt,wt.width,wt.height,0,Et,Bt,wt.data);w.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(n.TEXTURE_2D,vt,zt,ht.width,ht.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,Et,Bt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,zt,ht.width,ht.height,0,Et,Bt,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,zt,Qt[0].width,Qt[0].height,ht.depth);for(let Q=0,rt=Qt.length;Q<rt;Q++)if(wt=Qt[Q],w.format!==Qe)if(Et!==null)if(qt){if(G)if(w.layerUpdates.size>0){const mt=lu(wt.width,wt.height,w.format,w.type);for(const Mt of w.layerUpdates){const te=wt.data.subarray(Mt*mt/wt.data.BYTES_PER_ELEMENT,(Mt+1)*mt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Mt,wt.width,wt.height,1,Et,te,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,ht.depth,Et,wt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,zt,wt.width,wt.height,ht.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,ht.depth,Et,Bt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,zt,wt.width,wt.height,ht.depth,0,Et,Bt,wt.data)}else{qt&&fe&&e.texStorage2D(n.TEXTURE_2D,vt,zt,Qt[0].width,Qt[0].height);for(let Q=0,rt=Qt.length;Q<rt;Q++)wt=Qt[Q],w.format!==Qe?Et!==null?qt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Et,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,zt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?G&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Et,Bt,wt.data):e.texImage2D(n.TEXTURE_2D,Q,zt,wt.width,wt.height,0,Et,Bt,wt.data)}else if(w.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,zt,ht.width,ht.height,ht.depth),G)if(w.layerUpdates.size>0){const Q=lu(ht.width,ht.height,w.format,w.type);for(const rt of w.layerUpdates){const mt=ht.data.subarray(rt*Q/ht.data.BYTES_PER_ELEMENT,(rt+1)*Q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ht.width,ht.height,1,Et,Bt,mt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Et,Bt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,ht.width,ht.height,ht.depth,0,Et,Bt,ht.data);else if(w.isData3DTexture)qt?(fe&&e.texStorage3D(n.TEXTURE_3D,vt,zt,ht.width,ht.height,ht.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Et,Bt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,zt,ht.width,ht.height,ht.depth,0,Et,Bt,ht.data);else if(w.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(n.TEXTURE_2D,vt,zt,ht.width,ht.height);else{let Q=ht.width,rt=ht.height;for(let mt=0;mt<vt;mt++)e.texImage2D(n.TEXTURE_2D,mt,zt,Q,rt,0,Et,Bt,null),Q>>=1,rt>>=1}}else if(Qt.length>0){if(qt&&fe){const Q=xt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,vt,zt,Q.width,Q.height)}for(let Q=0,rt=Qt.length;Q<rt;Q++)wt=Qt[Q],qt?G&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Et,Bt,wt):e.texImage2D(n.TEXTURE_2D,Q,zt,Et,Bt,wt);w.generateMipmaps=!1}else if(qt){if(fe){const Q=xt(ht);e.texStorage2D(n.TEXTURE_2D,vt,zt,Q.width,Q.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Bt,ht)}else e.texImage2D(n.TEXTURE_2D,0,zt,Et,Bt,ht);m(w)&&p(it),At.__version=st.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function H(N,w,X){if(w.image.length!==6)return;const it=K(N,w),at=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+X);const st=i.get(at);if(at.version!==st.__version||it===!0){e.activeTexture(n.TEXTURE0+X);const At=ae.getPrimaries(ae.workingColorSpace),ft=w.colorSpace===Xi?null:ae.getPrimaries(w.colorSpace),St=w.colorSpace===Xi||At===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,Et=[];for(let rt=0;rt<6;rt++)!Jt&&!ht?Et[rt]=x(w.image[rt],!0,s.maxCubemapSize):Et[rt]=ht?w.image[rt].image:w.image[rt],Et[rt]=Kt(w,Et[rt]);const Bt=Et[0],zt=r.convert(w.format,w.colorSpace),wt=r.convert(w.type),Qt=v(w.internalFormat,zt,wt,w.colorSpace),qt=w.isVideoTexture!==!0,fe=st.__version===void 0||it===!0,G=at.dataReady;let vt=y(w,Bt);tt(n.TEXTURE_CUBE_MAP,w);let Q;if(Jt){qt&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Qt,Bt.width,Bt.height);for(let rt=0;rt<6;rt++){Q=Et[rt].mipmaps;for(let mt=0;mt<Q.length;mt++){const Mt=Q[mt];w.format!==Qe?zt!==null?qt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,Mt.width,Mt.height,zt,wt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,Qt,Mt.width,Mt.height,0,zt,wt,Mt.data)}}}else{if(Q=w.mipmaps,qt&&fe){Q.length>0&&vt++;const rt=xt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ht){qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Et[rt].width,Et[rt].height,zt,wt,Et[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Et[rt].width,Et[rt].height,0,zt,wt,Et[rt].data);for(let mt=0;mt<Q.length;mt++){const te=Q[mt].image[rt].image;qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,te.width,te.height,zt,wt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,Qt,te.width,te.height,0,zt,wt,te.data)}}else{qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,wt,Et[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,zt,wt,Et[rt]);for(let mt=0;mt<Q.length;mt++){const Mt=Q[mt];qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,zt,wt,Mt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,Qt,zt,wt,Mt.image[rt])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),st.__version=at.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function F(N,w,X,it,at,st){const At=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),St=v(X.internalFormat,At,ft,X.colorSpace);if(!i.get(w).__hasExternalTextures){const ht=Math.max(1,w.width>>st),Et=Math.max(1,w.height>>st);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,st,St,ht,Et,w.depth,0,At,ft,null):e.texImage2D(at,st,St,ht,Et,0,At,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Gt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,at,i.get(X).__webglTexture,0,It(w)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,at,i.get(X).__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(N,w,X){if(n.bindRenderbuffer(n.RENDERBUFFER,N),w.depthBuffer){const it=w.depthTexture,at=it&&it.isDepthTexture?it.type:null,st=M(w.stencilBuffer,at),At=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=It(w);Gt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,st,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,st,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,st,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,N)}else{const it=w.textures;for(let at=0;at<it.length;at++){const st=it[at],At=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),St=v(st.internalFormat,At,ft,st.colorSpace),Jt=It(w);X&&Gt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,St,w.width,w.height):Gt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,St,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,St,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const it=i.get(w.depthTexture).__webglTexture,at=It(w);if(w.depthTexture.format===Qs)Gt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(w.depthTexture.format===cr)Gt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function lt(N){const w=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const it=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){const at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=it}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,N)}else if(X){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=n.createRenderbuffer(),J(w.__webglDepthbuffer[it],N,!1);else{const at=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,st)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),J(w.__webglDepthbuffer,N,!1);else{const it=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(N,w,X){const it=i.get(N);w!==void 0&&F(it.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&lt(N)}function pt(N){const w=N.texture,X=i.get(N),it=i.get(w);N.addEventListener("dispose",A);const at=N.textures,st=N.isWebGLCubeRenderTarget===!0,At=at.length>1;if(At||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=w.version,o.memory.textures++),st){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let St=0;St<w.mipmaps.length;St++)X.__webglFramebuffer[ft][St]=n.createFramebuffer()}else X.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)X.__webglFramebuffer[ft]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(At)for(let ft=0,St=at.length;ft<St;ft++){const Jt=i.get(at[ft]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Gt(N)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<at.length;ft++){const St=at[ft];X.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const Jt=r.convert(St.format,St.colorSpace),ht=r.convert(St.type),Et=v(St.internalFormat,Jt,ht,St.colorSpace,N.isXRRenderTarget===!0),Bt=It(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Et,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),J(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),tt(n.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)F(X.__webglFramebuffer[ft][St],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St);else F(X.__webglFramebuffer[ft],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,St=at.length;ft<St;ft++){const Jt=at[ft],ht=i.get(Jt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),tt(n.TEXTURE_2D,Jt),F(X.__webglFramebuffer,N,Jt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),m(Jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),tt(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)F(X.__webglFramebuffer[St],N,w,n.COLOR_ATTACHMENT0,ft,St);else F(X.__webglFramebuffer,N,w,n.COLOR_ATTACHMENT0,ft,0);m(w)&&p(ft),e.unbindTexture()}N.depthBuffer&&lt(N)}function gt(N){const w=N.textures;for(let X=0,it=w.length;X<it;X++){const at=w[X];if(m(at)){const st=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,At=i.get(at).__webglTexture;e.bindTexture(st,At),p(st),e.unbindTexture()}}}const yt=[],B=[];function ue(N){if(N.samples>0){if(Gt(N)===!1){const w=N.textures,X=N.width,it=N.height;let at=n.COLOR_BUFFER_BIT;const st=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(N),ft=w.length>1;if(ft)for(let St=0;St<w.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let St=0;St<w.length;St++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[St]);const Jt=i.get(w[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,X,it,0,0,X,it,at,n.NEAREST),c===!0&&(yt.length=0,B.length=0,yt.push(n.COLOR_ATTACHMENT0+St),N.depthBuffer&&N.resolveDepthBuffer===!1&&(yt.push(st),B.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let St=0;St<w.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,At.__webglColorRenderbuffer[St]);const Jt=i.get(w[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const w=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function It(N){return Math.min(s.maxSamples,N.samples)}function Gt(N){const w=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(N){const w=o.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function Kt(N,w){const X=N.colorSpace,it=N.format,at=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==Ci&&X!==Xi&&(ae.getTransfer(X)===_e?(it!==Qe||at!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=b,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=I,this.setTextureCube=D,this.rebindTextures=ct,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Gt}function kv(n,t){function e(i,s=Xi){let r;const o=ae.getTransfer(s);if(i===Ti)return n.UNSIGNED_BYTE;if(i===w0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===A0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qf)return n.BYTE;if(i===td)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===E0)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===nd)return n.ALPHA;if(i===id)return n.RGB;if(i===Qe)return n.RGBA;if(i===sd)return n.LUMINANCE;if(i===rd)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===b0)return n.RED;if(i===T0)return n.RED_INTEGER;if(i===od)return n.RG;if(i===R0)return n.RG_INTEGER;if(i===L0)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===ta||i===ea)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Cl||i===Il||i===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ol||i===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Ol)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ul||i===Fl||i===kl||i===Bl||i===zl||i===Hl||i===Gl||i===Vl||i===Wl||i===ql||i===Xl||i===Yl||i===$l||i===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===Kl||i===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===Jl||i===Ql||i===t0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===t0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Bv extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zv={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ri({vertexShader:Hv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends _r{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const x=new Vv,m=e.getContextAttributes();let p=null,v=null;const M=[],y=[],R=new Nt;let A=null;const E=new cn;E.layers.enable(1),E.viewport=new ce;const P=new cn;P.layers.enable(2),P.viewport=new ce;const C=[E,P],g=new Bv;g.layers.enable(1),g.layers.enable(2);let S=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let F=M[H];return F===void 0&&(F=new Ec,M[H]=F),F.getTargetRaySpace()},this.getControllerGrip=function(H){let F=M[H];return F===void 0&&(F=new Ec,M[H]=F),F.getGripSpace()},this.getHand=function(H){let F=M[H];return F===void 0&&(F=new Ec,M[H]=F),F.getHandSpace()};function L(H){const F=y.indexOf(H.inputSource);if(F===-1)return;const J=M[F];J!==void 0&&(J.update(H.inputSource,H.frame,l||o),J.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let H=0;H<M.length;H++){const F=y[H];F!==null&&(y[H]=null,M[H].disconnect(F))}S=null,b=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,q.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const F={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Qi(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let F=null,J=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=m.stencil?cr:Qs,J=m.stencil?ar:xs);const lt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Qi(f.textureWidth,f.textureHeight,{format:Qe,type:Ti,depthTexture:new yd(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(H){for(let F=0;F<H.removed.length;F++){const J=H.removed[F],nt=y.indexOf(J);nt>=0&&(y[nt]=null,M[nt].disconnect(J))}for(let F=0;F<H.added.length;F++){const J=H.added[F];let nt=y.indexOf(J);if(nt===-1){for(let ct=0;ct<M.length;ct++)if(ct>=y.length){y.push(J),nt=ct;break}else if(y[ct]===null){y[ct]=J,nt=ct;break}if(nt===-1)break}const lt=M[nt];lt&&lt.connect(J)}}const I=new z,D=new z;function U(H,F,J){I.setFromMatrixPosition(F.matrixWorld),D.setFromMatrixPosition(J.matrixWorld);const nt=I.distanceTo(D),lt=F.projectionMatrix.elements,ct=J.projectionMatrix.elements,pt=lt[14]/(lt[10]-1),gt=lt[14]/(lt[10]+1),yt=(lt[9]+1)/lt[5],B=(lt[9]-1)/lt[5],ue=(lt[8]-1)/lt[0],It=(ct[8]+1)/ct[0],Gt=pt*ue,Tt=pt*It,Kt=nt/(-ue+It),xt=Kt*-ue;if(F.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(xt),H.translateZ(Kt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),lt[10]===-1)H.projectionMatrix.copy(F.projectionMatrix),H.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const N=pt+Kt,w=gt+Kt,X=Gt-xt,it=Tt+(nt-xt),at=yt*gt/w*N,st=B*gt/w*N;H.projectionMatrix.makePerspective(X,it,at,st,N,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,F){F===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(F.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let F=H.near,J=H.far;x.texture!==null&&(x.depthNear>0&&(F=x.depthNear),x.depthFar>0&&(J=x.depthFar)),g.near=P.near=E.near=F,g.far=P.far=E.far=J,(S!==g.near||b!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,b=g.far);const nt=H.parent,lt=g.cameras;Y(g,nt);for(let ct=0;ct<lt.length;ct++)Y(lt[ct],nt);lt.length===2?U(g,E,P):g.projectionMatrix.copy(E.projectionMatrix),Z(H,g,nt)};function Z(H,F,J){J===null?H.matrix.copy(F.matrixWorld):(H.matrix.copy(J.matrixWorld),H.matrix.invert(),H.matrix.multiply(F.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(F.projectionMatrix),H.projectionMatrixInverse.copy(F.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=e0*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let tt=null;function K(H,F){if(h=F.getViewerPose(l||o),_=F,h!==null){const J=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let nt=!1;J.length!==g.cameras.length&&(g.cameras.length=0,nt=!0);for(let ct=0;ct<J.length;ct++){const pt=J[ct];let gt=null;if(d!==null)gt=d.getViewport(pt);else{const B=u.getViewSubImage(f,pt);gt=B.viewport,ct===0&&(t.setRenderTargetTextures(v,B.colorTexture,f.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(v))}let yt=C[ct];yt===void 0&&(yt=new cn,yt.layers.enable(ct),yt.viewport=new ce,C[ct]=yt),yt.matrix.fromArray(pt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(pt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(gt.x,gt.y,gt.width,gt.height),ct===0&&(g.matrix.copy(yt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),nt===!0&&g.cameras.push(yt)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ct=u.getDepthInformation(J[0]);ct&&ct.isValid&&ct.texture&&x.init(t,ct,s.renderState)}}for(let J=0;J<M.length;J++){const nt=y[J],lt=M[J];nt!==null&&lt!==void 0&&lt.update(nt,F,l||o)}tt&&tt(H,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}const q=new Md;q.setAnimationLoop(K),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}const as=new jn,qv=new Vt;function Xv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(as)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;i.uniformBlockBinding(v,y)}function l(v,M){let y=s[v.id];y===void 0&&(_(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(v,R);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){const M=u();v.__bindingPointIndex=M;const y=n.createBuffer(),R=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],y=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,E=y.length;A<E;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let C=0,g=P.length;C<g;C++){const S=P[C];if(d(S,A,C,R)===!0){const b=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let O=0;for(let k=0;k<L.length;k++){const I=L[k],D=x(I);typeof I=="number"||typeof I=="boolean"?(S.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,b+O,S.__data)):I.isMatrix3?(S.__data[0]=I.elements[0],S.__data[1]=I.elements[1],S.__data[2]=I.elements[2],S.__data[3]=0,S.__data[4]=I.elements[3],S.__data[5]=I.elements[4],S.__data[6]=I.elements[5],S.__data[7]=0,S.__data[8]=I.elements[6],S.__data[9]=I.elements[7],S.__data[10]=I.elements[8],S.__data[11]=0):(I.toArray(S.__data,O),O+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,M,y,R){const A=v.value,E=M+"_"+y;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const P=R[E];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[E]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const M=v.uniforms;let y=0;const R=16;for(let E=0,P=M.length;E<P;E++){const C=Array.isArray(M[E])?M[E]:[M[E]];for(let g=0,S=C.length;g<S;g++){const b=C[g],L=Array.isArray(b.value)?b.value:[b.value];for(let O=0,k=L.length;O<k;O++){const I=L[O],D=x(I),U=y%R,Y=U%D.boundary,Z=U+Y;y+=Y,Z!==0&&R-Z<D.storage&&(y+=R-Z),b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,y+=D.storage}}}const A=y%R;return A>0&&(y+=R-A),v.__size=y,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class $v{constructor(t={}){const{canvas:e=Om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Zi,this.toneMappingExposure=1;const M=this;let y=!1,R=0,A=0,E=null,P=-1,C=null;const g=new ce,S=new ce;let b=null;const L=new Ot(0);let O=0,k=e.width,I=e.height,D=1,U=null,Y=null;const Z=new ce(0,0,k,I),tt=new ce(0,0,k,I);let K=!1;const q=new eo;let H=!1,F=!1;const J=new Vt,nt=new Vt,lt=new z,ct=new ce,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function yt(){return E===null?D:1}let B=i;function ue(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${y0}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),B===null){const V="webgl2";if(B=ue(V,T),B===null)throw ue(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,Gt,Tt,Kt,xt,N,w,X,it,at,st,At,ft,St,Jt,ht,Et,Bt,zt,wt,Qt,qt,fe,G;function vt(){It=new Q1(B),It.init(),qt=new kv(B,It),Gt=new Y1(B,It,t,qt),Tt=new Nv(B),Gt.reverseDepthBuffer&&Tt.buffers.depth.setReversed(!0),Kt=new nx(B),xt=new Mv,N=new Fv(B,It,Tt,xt,Gt,qt,Kt),w=new j1(M),X=new J1(M),it=new l_(B),fe=new q1(B,it),at=new tx(B,it,Kt,fe),st=new sx(B,at,it,Kt),zt=new ix(B,Gt,N),ht=new $1(xt),At=new vv(M,w,X,It,Gt,fe,ht),ft=new Xv(M,xt),St=new yv,Jt=new Rv(It),Bt=new W1(M,w,X,Tt,st,f,c),Et=new Dv(M,st,Gt),G=new Yv(B,Kt,Gt,Tt),wt=new X1(B,It,Kt),Qt=new ex(B,It,Kt),Kt.programs=At.programs,M.capabilities=Gt,M.extensions=It,M.properties=xt,M.renderLists=St,M.shadowMap=Et,M.state=Tt,M.info=Kt}vt();const Q=new Wv(M,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(k,I,!1))},this.getSize=function(T){return T.set(k,I)},this.setSize=function(T,V,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,I=V,e.width=Math.floor(T*D),e.height=Math.floor(V*D),$===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(k*D,I*D).floor()},this.setDrawingBufferSize=function(T,V,$){k=T,I=V,D=$,e.width=Math.floor(T*$),e.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(g)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,V,$,j){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,V,$,j),Tt.viewport(g.copy(Z).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,V,$,j){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,V,$,j),Tt.scissor(S.copy(tt).multiplyScalar(D).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(T){Tt.setScissorTest(K=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(T=!0,V=!0,$=!0){let j=0;if(T){let W=!1;if(E!==null){const ut=E.texture.format;W=ut===L0||ut===R0||ut===T0}if(W){const ut=E.texture.type,_t=ut===Ti||ut===xs||ut===Xr||ut===ar||ut===w0||ut===A0,bt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),Ut=bt.r,kt=bt.g,Lt=bt.b;_t?(d[0]=Ut,d[1]=kt,d[2]=Lt,d[3]=Rt,B.clearBufferuiv(B.COLOR,0,d)):(_[0]=Ut,_[1]=kt,_[2]=Lt,_[3]=Rt,B.clearBufferiv(B.COLOR,0,_))}else j|=B.COLOR_BUFFER_BIT}V&&(j|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),Jt.dispose(),xt.dispose(),w.dispose(),X.dispose(),st.dispose(),fe.dispose(),G.dispose(),At.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",lh),Q.removeEventListener("sessionend",hh),es.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Kt.autoReset,V=Et.enabled,$=Et.autoUpdate,j=Et.needsUpdate,W=Et.type;vt(),Kt.autoReset=T,Et.enabled=V,Et.autoUpdate=$,Et.needsUpdate=j,Et.type=W}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const V=T.target;V.removeEventListener("dispose",te),Ce(V)}function Ce(T){fn(T),xt.remove(T)}function fn(T){const V=xt.get(T).programs;V!==void 0&&(V.forEach(function($){At.releaseProgram($)}),T.isShaderMaterial&&At.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,j,W,ut){V===null&&(V=pt);const _t=W.isMesh&&W.matrixWorld.determinant()<0,bt=Wp(T,V,$,j,W);Tt.setMaterial(j,_t);let Rt=$.index,Ut=1;if(j.wireframe===!0){if(Rt=at.getWireframeAttribute($),Rt===void 0)return;Ut=2}const kt=$.drawRange,Lt=$.attributes.position;let he=kt.start*Ut,pe=(kt.start+kt.count)*Ut;ut!==null&&(he=Math.max(he,ut.start*Ut),pe=Math.min(pe,(ut.start+ut.count)*Ut)),Rt!==null?(he=Math.max(he,0),pe=Math.min(pe,Rt.count)):Lt!=null&&(he=Math.max(he,0),pe=Math.min(pe,Lt.count));const Ee=pe-he;if(Ee<0||Ee===1/0)return;fe.setup(W,j,bt,$,Rt);let Sn,re=wt;if(Rt!==null&&(Sn=it.get(Rt),re=Qt,re.setIndex(Sn)),W.isMesh)j.wireframe===!0?(Tt.setLineWidth(j.wireframeLinewidth*yt()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(W.isLine){let Ct=j.linewidth;Ct===void 0&&(Ct=1),Tt.setLineWidth(Ct*yt()),W.isLineSegments?re.setMode(B.LINES):W.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else W.isPoints?re.setMode(B.POINTS):W.isSprite&&re.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)re.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ct=W._multiDrawStarts,We=W._multiDrawCounts,oe=W._multiDrawCount,Fn=Rt?it.get(Rt).bytesPerElement:1,bs=xt.get(j).currentProgram.getUniforms();for(let yn=0;yn<oe;yn++)bs.setValue(B,"_gl_DrawID",yn),re.render(Ct[yn]/Fn,We[yn])}else if(W.isInstancedMesh)re.renderInstances(he,Ee,W.count);else if($.isInstancedBufferGeometry){const Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,We=Math.min($.instanceCount,Ct);re.renderInstances(he,Ee,We)}else re.render(he,Ee)};function ne(T,V,$){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,ho(T,V,$),T.side=$n,T.needsUpdate=!0,ho(T,V,$),T.side=ei):ho(T,V,$)}this.compile=function(T,V,$=null){$===null&&($=T),m=Jt.get($),m.init(V),v.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==$&&T.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const j=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ut=W.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){const bt=ut[_t];ne(bt,$,W),j.add(bt)}else ne(ut,$,W),j.add(ut)}),v.pop(),m=null,j},this.compileAsync=function(T,V,$=null){const j=this.compile(T,V,$);return new Promise(W=>{function ut(){if(j.forEach(function(_t){xt.get(_t).currentProgram.isReady()&&j.delete(_t)}),j.size===0){W(T);return}setTimeout(ut,10)}It.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let dn=null;function fi(T){dn&&dn(T)}function lh(){es.stop()}function hh(){es.start()}const es=new Md;es.setAnimationLoop(fi),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(T){dn=T,Q.setAnimationLoop(T),T===null?es.stop():es.start()},Q.addEventListener("sessionstart",lh),Q.addEventListener("sessionend",hh),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,V,E),m=Jt.get(T,v.length),m.init(V),v.push(m),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(nt),F=this.localClippingEnabled,H=ht.init(this.clippingPlanes,F),x=St.get(T,p.length),x.init(),p.push(x),Q.enabled===!0&&Q.isPresenting===!0){const ut=M.xr.getDepthSensingMesh();ut!==null&&Va(ut,V,-1/0,M.sortObjects)}Va(T,V,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(U,Y),gt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,gt&&Bt.addToRenderList(x,T),this.info.render.frame++,H===!0&&ht.beginShadows();const $=m.state.shadowsArray;Et.render($,T,V),H===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,W=x.transmissive;if(m.setupLights(),V.isArrayCamera){const ut=V.cameras;if(W.length>0)for(let _t=0,bt=ut.length;_t<bt;_t++){const Rt=ut[_t];fh(j,W,T,Rt)}gt&&Bt.render(T);for(let _t=0,bt=ut.length;_t<bt;_t++){const Rt=ut[_t];uh(x,T,Rt,Rt.viewport)}}else W.length>0&&fh(j,W,T,V),gt&&Bt.render(T),uh(x,T,V);E!==null&&(N.updateMultisampleRenderTarget(E),N.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(M,T,V),fe.resetDefaultState(),P=-1,C=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Va(T,V,$,j){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){j&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);const _t=st.update(T),bt=T.material;bt.visible&&x.push(T,_t,bt,$,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const _t=st.update(T),bt=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ct.copy(_t.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(nt)),Array.isArray(bt)){const Rt=_t.groups;for(let Ut=0,kt=Rt.length;Ut<kt;Ut++){const Lt=Rt[Ut],he=bt[Lt.materialIndex];he&&he.visible&&x.push(T,_t,he,$,ct.z,Lt)}}else bt.visible&&x.push(T,_t,bt,$,ct.z,null)}}const ut=T.children;for(let _t=0,bt=ut.length;_t<bt;_t++)Va(ut[_t],V,$,j)}function uh(T,V,$,j){const W=T.opaque,ut=T.transmissive,_t=T.transparent;m.setupLightsView($),H===!0&&ht.setGlobalState(M.clippingPlanes,$),j&&Tt.viewport(g.copy(j)),W.length>0&&lo(W,V,$),ut.length>0&&lo(ut,V,$),_t.length>0&&lo(_t,V,$),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function fh(T,V,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Qi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?mr:Ti,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ut=m.state.transmissionRenderTarget[j.id],_t=j.viewport||g;ut.setSize(_t.z,_t.w);const bt=M.getRenderTarget();M.setRenderTarget(ut),M.getClearColor(L),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),gt&&Bt.render($);const Rt=M.toneMapping;M.toneMapping=Zi;const Ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),H===!0&&ht.setGlobalState(M.clippingPlanes,j),lo(T,$,j),N.updateMultisampleRenderTarget(ut),N.updateRenderTargetMipmap(ut),It.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,he=V.length;Lt<he;Lt++){const pe=V[Lt],Ee=pe.object,Sn=pe.geometry,re=pe.material,Ct=pe.group;if(re.side===ei&&Ee.layers.test(j.layers)){const We=re.side;re.side=un,re.needsUpdate=!0,dh(Ee,$,j,Sn,re,Ct),re.side=We,re.needsUpdate=!0,kt=!0}}kt===!0&&(N.updateMultisampleRenderTarget(ut),N.updateRenderTargetMipmap(ut))}M.setRenderTarget(bt),M.setClearColor(L,O),Ut!==void 0&&(j.viewport=Ut),M.toneMapping=Rt}function lo(T,V,$){const j=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ut=T.length;W<ut;W++){const _t=T[W],bt=_t.object,Rt=_t.geometry,Ut=j===null?_t.material:j,kt=_t.group;bt.layers.test($.layers)&&dh(bt,V,$,Rt,Ut,kt)}}function dh(T,V,$,j,W,ut){T.onBeforeRender(M,V,$,j,W,ut),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(M,V,$,j,T,ut),W.transparent===!0&&W.side===ei&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,M.renderBufferDirect($,V,j,W,T,ut),W.side=$n,W.needsUpdate=!0,M.renderBufferDirect($,V,j,W,T,ut),W.side=ei):M.renderBufferDirect($,V,j,W,T,ut),T.onAfterRender(M,V,$,j,W,ut)}function ho(T,V,$){V.isScene!==!0&&(V=pt);const j=xt.get(T),W=m.state.lights,ut=m.state.shadowsArray,_t=W.state.version,bt=At.getParameters(T,W.state,ut,V,$),Rt=At.getProgramCacheKey(bt);let Ut=j.programs;j.environment=T.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(T.isMeshStandardMaterial?X:w).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",te),Ut=new Map,j.programs=Ut);let kt=Ut.get(Rt);if(kt!==void 0){if(j.currentProgram===kt&&j.lightsStateVersion===_t)return mh(T,bt),kt}else bt.uniforms=At.getUniforms(T),T.onBeforeCompile(bt,M),kt=At.acquireProgram(bt,Rt),Ut.set(Rt,kt),j.uniforms=bt.uniforms;const Lt=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),mh(T,bt),j.needsLights=Xp(T),j.lightsStateVersion=_t,j.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.directionalShadowMap.value=W.state.directionalShadowMap,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotShadowMap.value=W.state.spotShadowMap,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMap.value=W.state.pointShadowMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=kt,j.uniformsList=null,kt}function ph(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=sa.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function mh(T,V){const $=xt.get(T);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Wp(T,V,$,j,W){V.isScene!==!0&&(V=pt),N.resetTextureUnits();const ut=V.fog,_t=j.isMeshStandardMaterial?V.environment:null,bt=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ci,Rt=(j.isMeshStandardMaterial?X:w).get(j.envMap||_t),Ut=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,kt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,pe=!!$.morphAttributes.color;let Ee=Zi;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ee=M.toneMapping);const Sn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=Sn!==void 0?Sn.length:0,Ct=xt.get(j),We=m.state.lights;if(H===!0&&(F===!0||T!==C)){const Cn=T===C&&j.id===P;ht.setState(j,T,Cn)}let oe=!1;j.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==We.state.version||Ct.outputColorSpace!==bt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Rt||j.fog===!0&&Ct.fog!==ut||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ht.numPlanes||Ct.numIntersection!==ht.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==kt||Ct.morphTargets!==Lt||Ct.morphNormals!==he||Ct.morphColors!==pe||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ct.__version=j.version);let Fn=Ct.currentProgram;oe===!0&&(Fn=ho(j,V,W));let bs=!1,yn=!1,Wa=!1;const be=Fn.getUniforms(),Pi=Ct.uniforms;if(Tt.useProgram(Fn.program)&&(bs=!0,yn=!0,Wa=!0),j.id!==P&&(P=j.id,yn=!0),bs||C!==T){Gt.reverseDepthBuffer?(J.copy(T.projectionMatrix),Um(J),Fm(J),be.setValue(B,"projectionMatrix",J)):be.setValue(B,"projectionMatrix",T.projectionMatrix),be.setValue(B,"viewMatrix",T.matrixWorldInverse);const Cn=be.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,lt.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,yn=!0,Wa=!0)}if(W.isSkinnedMesh){be.setOptional(B,W,"bindMatrix"),be.setOptional(B,W,"bindMatrixInverse");const Cn=W.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),be.setValue(B,"boneTexture",Cn.boneTexture,N))}W.isBatchedMesh&&(be.setOptional(B,W,"batchingTexture"),be.setValue(B,"batchingTexture",W._matricesTexture,N),be.setOptional(B,W,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",W._indirectTexture,N),be.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",W._colorsTexture,N));const qa=$.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&zt.update(W,$,Fn),(yn||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,be.setValue(B,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Pi.envMap.value=Rt,Pi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Pi.envMapIntensity.value=V.environmentIntensity),yn&&(be.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&qp(Pi,Wa),ut&&j.fog===!0&&ft.refreshFogUniforms(Pi,ut),ft.refreshMaterialUniforms(Pi,j,D,I,m.state.transmissionRenderTarget[T.id]),sa.upload(B,ph(Ct),Pi,N)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(sa.upload(B,ph(Ct),Pi,N),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(B,"center",W.center),be.setValue(B,"modelViewMatrix",W.modelViewMatrix),be.setValue(B,"normalMatrix",W.normalMatrix),be.setValue(B,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Cn=j.uniformsGroups;for(let Xa=0,Yp=Cn.length;Xa<Yp;Xa++){const _h=Cn[Xa];G.update(_h,Fn),G.bind(_h,Fn)}}return Fn}function qp(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Xp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,V,$){xt.get(T.texture).__webglTexture=V,xt.get(T.depthTexture).__webglTexture=$;const j=xt.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const $=xt.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){E=T,R=V,A=$;let j=!0,W=null,ut=!1,_t=!1;if(T){const Rt=xt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Rt.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Rt.__hasExternalTextures)N.rebindTextures(T,xt.get(T.texture).__webglTexture,xt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&xt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const kt=xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[V])?W=kt[V][$]:W=kt[V],ut=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?W=xt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[$]:W=kt,g.copy(T.viewport),S.copy(T.scissor),b=T.scissorTest}else g.copy(Z).multiplyScalar(D).floor(),S.copy(tt).multiplyScalar(D).floor(),b=K;if(Tt.bindFramebuffer(B.FRAMEBUFFER,W)&&j&&Tt.drawBuffers(T,W),Tt.viewport(g),Tt.scissor(S),Tt.setScissorTest(b),ut){const Rt=xt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,$)}else if(_t){const Rt=xt.get(T.texture),Ut=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,$||0,Ut)}P=-1},this.readRenderTargetPixels=function(T,V,$,j,W,ut,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){Tt.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Rt=T.texture,Ut=Rt.format,kt=Rt.type;if(!Gt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-j&&$>=0&&$<=T.height-W&&B.readPixels(V,$,j,W,qt.convert(Ut),qt.convert(kt),ut)}finally{const Rt=E!==null?xt.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(T,V,$,j,W,ut,_t){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const Rt=T.texture,Ut=Rt.format,kt=Rt.type;if(!Gt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-j&&$>=0&&$<=T.height-W){Tt.bindFramebuffer(B.FRAMEBUFFER,bt);const Lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.bufferData(B.PIXEL_PACK_BUFFER,ut.byteLength,B.STREAM_READ),B.readPixels(V,$,j,W,qt.convert(Ut),qt.convert(kt),0);const he=E!==null?xt.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,he);const pe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Nm(B,pe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ut),B.deleteBuffer(Lt),B.deleteSync(pe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,$=0){T.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-$),W=Math.floor(T.image.width*j),ut=Math.floor(T.image.height*j),_t=V!==null?V.x:0,bt=V!==null?V.y:0;N.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,_t,bt,W,ut),Tt.unbindTexture()},this.copyTextureToTexture=function(T,V,$=null,j=null,W=0){T.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],V=arguments[2],W=arguments[3]||0,$=null);let ut,_t,bt,Rt,Ut,kt;$!==null?(ut=$.max.x-$.min.x,_t=$.max.y-$.min.y,bt=$.min.x,Rt=$.min.y):(ut=T.image.width,_t=T.image.height,bt=0,Rt=0),j!==null?(Ut=j.x,kt=j.y):(Ut=0,kt=0);const Lt=qt.convert(V.format),he=qt.convert(V.type);N.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const pe=B.getParameter(B.UNPACK_ROW_LENGTH),Ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Sn=B.getParameter(B.UNPACK_SKIP_PIXELS),re=B.getParameter(B.UNPACK_SKIP_ROWS),Ct=B.getParameter(B.UNPACK_SKIP_IMAGES),We=T.isCompressedTexture?T.mipmaps[W]:T.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,We.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,We.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rt),T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Ut,kt,ut,_t,Lt,he,We.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Ut,kt,We.width,We.height,Lt,We.data):B.texSubImage2D(B.TEXTURE_2D,W,Ut,kt,ut,_t,Lt,he,We),B.pixelStorei(B.UNPACK_ROW_LENGTH,pe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Sn),B.pixelStorei(B.UNPACK_SKIP_ROWS,re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ct),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$=null,j=null,W=0){T.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,T=arguments[2],V=arguments[3],W=arguments[4]||0);let ut,_t,bt,Rt,Ut,kt,Lt,he,pe;const Ee=T.isCompressedTexture?T.mipmaps[W]:T.image;$!==null?(ut=$.max.x-$.min.x,_t=$.max.y-$.min.y,bt=$.max.z-$.min.z,Rt=$.min.x,Ut=$.min.y,kt=$.min.z):(ut=Ee.width,_t=Ee.height,bt=Ee.depth,Rt=0,Ut=0,kt=0),j!==null?(Lt=j.x,he=j.y,pe=j.z):(Lt=0,he=0,pe=0);const Sn=qt.convert(V.format),re=qt.convert(V.type);let Ct;if(V.isData3DTexture)N.setTexture3D(V,0),Ct=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)N.setTexture2DArray(V,0),Ct=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const We=B.getParameter(B.UNPACK_ROW_LENGTH),oe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Fn=B.getParameter(B.UNPACK_SKIP_PIXELS),bs=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt),T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ct,W,Lt,he,pe,ut,_t,bt,Sn,re,Ee.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,W,Lt,he,pe,ut,_t,bt,Sn,Ee.data):B.texSubImage3D(Ct,W,Lt,he,pe,ut,_t,bt,Sn,re,Ee),B.pixelStorei(B.UNPACK_ROW_LENGTH,We),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Fn),B.pixelStorei(B.UNPACK_SKIP_ROWS,bs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),W===0&&V.generateMipmaps&&B.generateMipmap(Ct),Tt.unbindTexture()},this.initRenderTarget=function(T){xt.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,Tt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===C0?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===La?"display-p3":"srgb"}}class P0{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new P0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Td extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class no extends tn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=gn,h=gn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hu extends le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new Vt,uu=new Vt,Do=[],fu=new Zn,jv=new Vt,Tr=new Dt,Rr=new Qr;class ga extends Dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hs),fu.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(fu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hs),Rr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),uu.multiplyMatrices(i,Hs),Tr.matrixWorld=uu,Tr.raycast(t,Do);for(let o=0,a=Do.length;o<a;o++){const c=Do[o];c.instanceId=r,c.object=this,e.push(c)}Do.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new no(new Float32Array(s*this.count),s,this.count,b0,ni));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ia extends tn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends en{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new z,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends en{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const x=[],m=i/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function v(){const y=new z,R=new z;let A=0;const E=(e-t)/i;for(let P=0;P<=r;P++){const C=[],g=P/r,S=g*(e-t)+t;for(let b=0;b<=s;b++){const L=b/s,O=L*c+a,k=Math.sin(O),I=Math.cos(O);R.x=S*k,R.y=-g*i+m,R.z=S*I,u.push(R.x,R.y,R.z),y.set(k,E,I).normalize(),f.push(y.x,y.y,y.z),d.push(L,1-g),C.push(_++)}x.push(C)}for(let P=0;P<s;P++)for(let C=0;C<r;C++){const g=x[C][P],S=x[C+1][P],b=x[C+1][P+1],L=x[C][P+1];t>0&&(h.push(g,S,L),A+=3),e>0&&(h.push(S,b,L),A+=3)}l.addGroup(p,A,0),p+=A}function M(y){const R=_,A=new Nt,E=new z;let P=0;const C=y===!0?t:e,g=y===!0?1:-1;for(let b=1;b<=s;b++)u.push(0,m*g,0),f.push(0,g,0),d.push(.5,.5),_++;const S=_;for(let b=0;b<=s;b++){const O=b/s*c+a,k=Math.cos(O),I=Math.sin(O);E.x=C*I,E.y=m*g,E.z=C*k,u.push(E.x,E.y,E.z),f.push(0,g,0),A.x=k*.5+.5,A.y=I*.5*g+.5,d.push(A.x,A.y),_++}for(let b=0;b<s;b++){const L=R+b,O=S+b;y===!0?h.push(O,O+1,L):h.push(O+1,O,L),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class D0 extends ee{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new D0(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class O0 extends en{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new z,y=new z,R=new z;for(let A=0;A<e.length;A+=3)d(e[A+0],M),d(e[A+1],y),d(e[A+2],R),c(M,y,R,v)}function c(v,M,y,R){const A=R+1,E=[];for(let P=0;P<=A;P++){E[P]=[];const C=v.clone().lerp(y,P/A),g=M.clone().lerp(y,P/A),S=A-P;for(let b=0;b<=S;b++)b===0&&P===A?E[P][b]=C:E[P][b]=C.clone().lerp(g,b/S)}for(let P=0;P<A;P++)for(let C=0;C<2*(A-P)-1;C++){const g=Math.floor(C/2);C%2===0?(f(E[P][g+1]),f(E[P+1][g]),f(E[P][g])):(f(E[P][g+1]),f(E[P+1][g+1]),f(E[P+1][g]))}}function l(v){const M=new z;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){const v=new z;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const y=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(y,1-R)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],y=o[v+2],R=o[v+4],A=Math.max(M,y,R),E=Math.min(M,y,R);A>.9&&E<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const y=v*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function _(){const v=new z,M=new z,y=new z,R=new z,A=new Nt,E=new Nt,P=new Nt;for(let C=0,g=0;C<r.length;C+=9,g+=6){v.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),A.set(o[g+0],o[g+1]),E.set(o[g+2],o[g+3]),P.set(o[g+4],o[g+5]),R.copy(v).add(M).add(y).divideScalar(3);const S=m(R);x(A,g+0,v,S),x(E,g+2,M,S),x(P,g+4,y,S)}}function x(v,M,y,R){R<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O0(t.vertices,t.indices,t.radius,t.details)}}class N0 extends O0{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new N0(t.radius,t.detail)}}class Pa extends en{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new z,_=new Nt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const v=p+m,M=v,y=v+i+1,R=v+i+2,A=v+1;a.push(M,y,A),a.push(y,R,A)}}this.setIndex(a),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ms extends en{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new z,f=new z,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+y,1-M),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=h[p][v+1],y=h[p][v],R=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&d.push(M,y,A),(p!==i-1||c<Math.PI)&&d.push(y,R,A)}this.setIndex(d),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Da extends _n{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Oa extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Rd extends Oa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wc=new Vt,du=new z,pu=new z;class Ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mu=new Vt,Lr=new z,Ac=new z;class Kv extends Ld{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lr),Ac.copy(i.position),Ac.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ac),i.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),mu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}}class Na extends Oa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zv extends Ld{constructor(){super(new Sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _u extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Zv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cd extends Oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:y0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=y0);const hr={glass:6453644,metal:9146777,metalDark:4870231},Rn={ceiling:15525851,wall:13814974,trim:16249834,floorTimber:9072722,benchtop:12168342,tile:13622754,tileFloor:12104358,metalDull:9146777};function Jv(n){const t=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,e=t((n>>16&255)/255),i=t((n>>8&255)/255),s=t((n&255)/255),r=.2126*e+.7152*i+.0722*s;return r>.008856?116*Math.cbrt(r)-16:903.3*r}const gu=86,Qv=new Set([Rn.ceiling,Rn.tile]);function Ua(n,t){if(t<=2||Qv.has(n))return n;const e=Jv(n);if(e>gu)throw new Error(`value plan: ${t.toFixed(1)} m2 of #${n.toString(16).padStart(6,"0")} is L* ${e.toFixed(0)}, above the ${gu} cap for large areas`);return n}const er=new Map,tM=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function eM(n,t={}){let e=String(n);for(const s of tM)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(er.has(e))return er.get(e);const i=new _n({color:n,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??$n,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return er.set(e,i),i}function U0(n,t){if(er.has(n))return er.get(n);const e=t();return er.set(n,e),e}const nM=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function io(n){return n.onBeforeCompile=nM,n}function iM(){return U0("window",()=>io(new _n({color:hr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new Ot(16767392),emissiveIntensity:0})))}function sM(){return U0("windowinner",()=>io(new _n({color:hr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function Id(){return U0("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgb(140,140,140)"),i.addColorStop(.55,"rgb(196,196,196)"),i.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Ia(t);s.colorSpace=Je;const r=new ps({map:s,blending:_l,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new $e(1,1,1),new Ii(1,1),new ee(.5,.5,1,10),new D0(.5,1,8),new Ms(.5,12,10);const rM=new Set;function F0(n){rM.add(n)}function oM(n){let t=1779033703^n.length;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function aM(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class so{constructor(t="lifesim"){this.seed=String(t),this._next=aM(oM(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new so(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const i=this.shuffle([...t]);return i.slice(0,Math.min(e,i.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(this._next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let i=0;for(const r of e)i+=Math.max(0,r.weight??1);if(i<=0)return e[0];let s=this._next()*i;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(t,e,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(t,e))))}}let Pd=8,i0=null;function cM(n){i0=n,Pd=Math.min(8,n.capabilities.getMaxAnisotropy())}let lM=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};const Dd=(n,t=n)=>{const e=lM(n);return e.width=n,e.height=t,e};let Od=0;function k0(n,t){return t&&(n.colorSpace=Je),n.wrapS=n.wrapT=gs,n.anisotropy=Pd,n.generateMipmaps=!0,n.minFilter=Yn,n.magFilter=Ue,Od+=n.image.width*n.image.height*4*4/3,i0&&i0.initTexture(n),n}function hi(n){return k0(new Ia(hM(n)),!0)}function s0(n){return n.wrapS=n.wrapT=$i,n}function hM(n){const t=Dd(n.w,n.h),e=t.getContext("2d"),i=e.createImageData(n.w,n.h),s=i.data,r=n.d,o=n.w*n.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const h=r[c],u=r[c+1],f=r[c+2];s[l]=(h<0?0:h>1?1:h)*255+.5,s[l+1]=(u<0?0:u>1?1:u)*255+.5,s[l+2]=(f<0?0:f>1?1:f)*255+.5,s[l+3]=255}return e.putImageData(i,0,0),t}const Re=n=>n<0?0:n>1?1:n,ai=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function uM(n){const[t,e,i]=n,s=Math.max(t,e,i),r=Math.min(t,e,i),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-i)/a+(e<i?6:0))/6:s===e?l=((i-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function fM(n,t,e){if(t===0)return[e,e,e];const i=e<.5?e*(1+t):e+t-e*t,s=2*e-i,r=o=>(o=(o%1+1)%1,o<1/6?s+(i-s)*6*o:o<1/2?i:o<2/3?s+(i-s)*(2/3-o)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function ii(n,t=1,e=0,i=1){const[s,r,o]=uM(Array.isArray(n)?n:ai(n));return fM(s+e/360,Re(r*i),Re(o*t))}function ui(n,t){return{w:n,h:t,d:new Float32Array(n*t*3)}}function ys(n,t){const e=Array.isArray(t)?t:ai(t),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=e[0],i[s+1]=e[1],i[s+2]=e[2]}function B0(n,t,e,i,s){if(s<=0)return;const r=n.w,o=n.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,h=n.d,u=1-s;h[l]=h[l]*u+i[0]*s,h[l+1]=h[l+1]*u+i[1]*s,h[l+2]=h[l+2]*u+i[2]*s}function Pn(n,t,e,i,s,r,o=1){const a=Array.isArray(r)?r:ai(r),c=Math.round(t),l=Math.round(i),h=Math.round(e),u=Math.round(s);if(o<1){for(let x=h;x<u;x++)for(let m=c;m<l;m++)B0(n,m,x,a,o);return}const f=n.w,d=n.h,_=n.d;for(let x=h;x<u;x++){let m=x;(m<0||m>=d)&&(m=(m%d+d)%d);const p=m*f;for(let v=c;v<l;v++){let M=v;(M<0||M>=f)&&(M=(M%f+f)%f);const y=(p+M)*3;_[y]=a[0],_[y+1]=a[1],_[y+2]=a[2]}}}function ro(n,t,e,i,s,r=1){const o=i+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,h=a+.5-e,u=Re(i-Math.sqrt(l*l+h*h)+.5);u>0&&B0(n,c,a,s,r*u)}}function r0(n,t,e,i,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,h]=t[o],u=Math.hypot(l-a,h-c),f=Math.max(1,Math.ceil(u));for(let d=0;d<=f;d++){const _=d/f;ro(n,a+(l-a)*_,c+(h-c)*_,r,i,s)}}}function Nd(n,t,e,i,s,r,o,a){const c=n.w,l=n.h,h=n.d,u=r/2,f=o[0],d=o[1],_=o[2],x=Math.PI*2/i;for(let m=0;m<l;m++){const p=m*c,v=t+e*Math.sin(m*x+s),M=v-u,y=v+u,R=Math.floor(M),A=Math.ceil(y);for(let E=R;E<=A;E++){const P=Re(Math.min(E+1,y)-Math.max(E,M));if(P<=0)continue;const C=a*P,g=1-C;let S=E;(S<0||S>=c)&&(S=(S%c+c)%c);const b=(p+S)*3;h[b]=h[b]*g+f*C,h[b+1]=h[b+1]*g+d*C,h[b+2]=h[b+2]*g+_*C}}}const xu=n=>n*n*(3-2*n);function dM(n,t,e){const i=new Float32Array(t*e);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const vu=256;function ve(n,t,e={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??i,l=e.p0y??i,h=new Float32Array(t*a),u=[];let f=1,d=0;for(let R=0;R<s;R++){const A=Math.min(vu,Math.max(1,Math.round(c*o**R))),E=Math.min(vu,Math.max(1,Math.round(l*o**R)));u.push({lat:dM(n,A,E),px:A,py:E,amp:f}),d+=f,f*=r}const _=new Float64Array(t*a),x=new Int32Array(t),m=new Int32Array(t),p=new Float64Array(t);for(let R=0;R<u.length;R++){const A=u[R],E=A.lat,P=A.px,C=A.py,g=A.amp,S=P/t,b=C/a;for(let L=0;L<t;L++){const O=L*S,k=O|0,I=k>=P?k%P:k;x[L]=I,m[L]=I+1>=P?0:I+1,p[L]=xu(O-k)}for(let L=0;L<a;L++){const O=L*b,k=O|0,I=xu(O-k),D=1-I,U=k>=C?k%C:k,Y=U*P,Z=(U+1>=C?0:U+1)*P,tt=L*t;for(let K=0;K<t;K++){const q=x[K],H=m[K],F=p[K],J=E[Y+q],nt=E[Y+H],lt=E[Z+q],ct=E[Z+H];_[tt+K]+=g*((J+(nt-J)*F)*D+(lt+(ct-lt)*F)*I)}}}let v=1/0,M=-1/0;for(let R=0;R<h.length;R++){h[R]=_[R]/d;const A=h[R];A<v&&(v=A),A>M&&(M=A)}const y=M-v||1;for(let R=0;R<h.length;R++)h[R]=(h[R]-v)/y;return h}function Ud(n,t,e,i){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*i+1,a=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)a[u]=((u-i)%t+t)%t,c[u]=(u+i+1)%t;for(let u=0;u<e;u++){const f=u*t;let d=0;for(let _=-i;_<=i;_++)d+=n[f+(_%t+t)%t];for(let _=0;_<t;_++)s[f+_]=d/o,d-=n[f+a[_]],d+=n[f+c[_]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-i)%e+e)%e*t,h[u]=(u+i+1)%e*t;for(let u=0;u<t;u++){let f=0;for(let d=-i;d<=i;d++)f+=s[(d%e+e)%e*t+u];for(let d=0;d<e;d++)r[d*t+u]=f/o,f-=s[l[d]+u],f+=s[h[d]+u]}return r}function pM(n,t,e=1.5,i=null){const s=i??n.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const h=(l-1+s)%s*t,u=l*t,f=(l+1)%s*t;let d=u*4;for(let _=0;_<t;_++,d+=4){const x=a[_],m=c[_],p=n[h+x],v=n[h+_],M=n[h+m],y=n[u+x],R=n[u+m],A=n[f+x],E=n[f+_],P=n[f+m],C=M+2*R+P-(p+2*y+A),g=A+2*E+P-(p+2*v+M),S=-C*o,b=g*o,L=1/Math.sqrt(S*S+b*b+1);r[d]=(S*L*.5+.5)*255+.5,r[d+1]=(b*L*.5+.5)*255+.5,r[d+2]=(L*.5+.5)*255+.5,r[d+3]=255}}return r}function oi(n,t,e=1.5,i=null){const s=i??n.length/t;return k0(new Ia(Fd(pM(n,t,e,s),t,s)),!1)}function Fd(n,t,e){const i=Dd(t,e),s=i.getContext("2d"),r=s.createImageData(t,e);return r.data.set(n),s.putImageData(r,0,0),i}function mM(n,t,e,i,s=null){const o=n*(s??n),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,f=i?i[c]:0;a[l]=(h<0?0:h>1?1:h)*255+.5,a[l+1]=(u<0?0:u>1?1:u)*255+.5,a[l+2]=(f<0?0:f>1?1:f)*255+.5,a[l+3]=255}return a}function Ge(n,t,e,i,s=null){const r=s??n;return k0(new Ia(Fd(mM(n,t,e,i,r),n,r)),!1)}const z0={},Wr=new Map;let kd=null;function Le(n,t){z0[n]=t}const _M=n=>{const t=Object.keys(n).sort();return t.length?t.map(e=>e+"="+JSON.stringify(n[e])).join(","):""};function ur(n,t=null,e={}){const i=z0[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=_M(e),r=s?n+"#"+s:n;if(Wr.has(r))return Wr.get(r);const o=t||(kd||new so("textures")).child("tex."+r),a=i(o,e);return a.name=n,Wr.set(r,a),a}function gM(){var n,t;for(const e of Wr.values()){for(const i of["map","normalMap","ormMap"])(t=(n=e[i])==null?void 0:n.dispose)==null||t.call(n);if(e.maps)for(const i of e.maps)i.dispose()}Wr.clear(),Od=0,kd=null}F0(gM);const bc={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Le("timberFloor",(n,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),h=t.species||n.pick(Object.keys(bc)),u=bc[h]||bc.blackbutt,f=ui(1024,1024);ys(f,ii(u.dark,.72));const d=ai(u.dark),_=ii(u.base,1.25),x=[];for(let A=0;A<15;A++){const E=A*c+l/2,P=(A+1)*c-l/2,C=ii(u.base,1+n.range(-.06,.06),n.range(-3,3));Pn(f,E,0,P,1024,C);const g=Math.round(n.range(.15,.85)*1024);x.push(g),Pn(f,E,g,P,g+2,ii(u.dark,.8),.85),Pn(f,E,g-2,P,g,_,.25);const S=n.int(28,60);for(let b=0;b<S;b++){const L=n.range(E+1,P-1),O=n.range(1.5,4),k=1024/n.int(2,5),I=n.range(0,Math.PI*2),D=n.range(2,3),U=n.range(.04,.12),Y=n.chance(.25)?_:d;Nd(f,L,O,k,I,D,Y,U)}if(n.chance(.2)){const b=n.range(204.8,819.2),L=n.range(60,160),O=n.range(E+4,P-4);for(let k=0;k<n.int(2,4);k++){const I=(k+1)*n.range(3,7),D=[];for(let U=0;U<=16;U++){const Y=U/16;D.push([O+(Y-.5)*2*I,b-L*(1-(Y-.5)**2*4)])}r0(f,D,2,d,.06)}}}const m=ve(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),v=new Float32Array(512*512),M=new Float32Array(512*512),y=512/15,R=l*512/1024;for(let A=0;A<512;A++)for(let E=0;E<512;E++){const P=A*512+E,C=Math.floor(E/y),g=E-C*y,S=g<R/2||g>y-R/2,b=A*1024/512,L=x[C],O=b>=L-1&&b<=L+2,k=S||O;v[P]=k?.15:.75,p[P]=Re(u.rough+(k?.1:0)+(m[P]-.5)*.1),M[P]=k?.72:1}return{map:hi(f),normalMap:oi(Ud(v,512,512,1),512,1.2),ormMap:Ge(512,M,p,null),uvScale:[o,o],normalScale:.5,species:h,tinted:!1}});Le("plasterWall",(n,t={})=>{const s=t.rough??.88,r=ve(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=s+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/a*Math.PI*2)*.02),o[h]=Re(u)}return{ormMap:Ge(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});Le("plasterCeiling",n=>z0.plasterWall(n,{rough:.93,ceiling:!0}));Le("paintedJoinery",n=>{const i=ve(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Re(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Ge(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Le("carpetPile",n=>{const i=ui(512,512);ys(i,[1,1,1]);const s=ve(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,f=Re(.9+(s[h]-.5)*.16+u);r[h*3]=f,r[h*3+1]=f,r[h*3+2]=f}for(let c=0;c<1200;c++){const l=n.pick([[1.1,0],[.78,8],[.92,-10]]),h=ii(16777215,l[0],l[1],1);if(l[1]!==0){const u=n.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}ro(i,n.range(0,512),n.range(0,512),n.range(1,2),h,.25)}const o=ve(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Re(.92+(o[c]-.5)*.06);return{map:hi(i),normalMap:oi(o,512,.6),ormMap:Ge(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Le("ceramicTile",(n,t={})=>{const i=t.tile??.3,s=2,r=i*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=ai(12104358),h=[];for(let m=0;m<s*s;m++)h.push({c:ii(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const u=ui(512,512),f=new Float32Array(512*512),d=new Float32Array(512*512),_=new Float32Array(512*512),x=o/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const v=m*512+p,M=Math.floor(p/c),y=Math.floor(m/c),R=p-M*c,A=m-y*c,E=Math.min(R,c-R,A,c-A);if(E<x){u.d[v*3]=l[0],u.d[v*3+1]=l[1],u.d[v*3+2]=l[2],f[v]=.85,d[v]=.25,_[v]=.62;continue}const P=h[y*s+M],C=(R/c+A/c)/2,g=1.03-.06*(P.g>0?C:1-C);u.d[v*3]=Re(P.c[0]*g),u.d[v*3+1]=Re(P.c[1]*g),u.d[v*3+2]=Re(P.c[2]*g),f[v]=.08;const S=Re((E-x)/a);d[v]=.25+.75*S,_[v]=.62+.38*S}return{map:hi(u),normalMap:oi(d,512,2),ormMap:Ge(512,_,f,null),uvScale:[r,r],normalScale:.8,tinted:!1}});Le("fabricWeave",n=>{const i=ui(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let h=0;h<a.length;h++)a[h]=n.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=n.range(-.035,.035);const l=ve(n,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const f=h*256+u,d=(u>>1&1^h>>1&1)===0,_=u>>1,x=h>>1,m=d?a[(_*8+(h>>5&7))%a.length]:c[(x*8+(u>>5&7))%c.length],p=Re((d?1.06:.94)+m+(l[f]-.5)*.06);i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,s[f]=d?.66:.8,r[f]=d?1:.3}return{map:hi(i),normalMap:oi(Ud(r,256,256,1),256,.8),ormMap:Ge(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Le("joineryTimber",n=>{const i=ui(512,512);ys(i,[1,1,1]);const s=ve(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let c=0;c<512*512;c++){const l=Re(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=ii(16777215,.72);for(let c=0;c<220;c++){const l=n.range(0,512),h=n.range(2,6),u=512/n.int(1,2),f=n.range(0,Math.PI*2);Nd(i,l,h,u,f,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Re(.55+(s[c]-.5)*.08);return{map:hi(i),ormMap:Ge(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});Le("vinylSheet",n=>{const i=ui(512,512);ys(i,14209732);const s=[13222578,15131093,11906460,14472902].map(ai);for(let c=0;c<3e3;c++)ro(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=ve(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Re(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=n.range(0,512),h=n.range(0,512),u=n.range(40,120),f=n.range(0,Math.PI*2),d=n.range(.6,2.2),_=[];for(let x=0;x<=24;x++){const m=f+d*(x/24);_.push([l+Math.cos(m)*u,h+Math.sin(m)*u])}r0(i,_,n.range(2,4),ii(14209732,.88),.3),r0(a,_,n.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Re(o[c]+a.d[c*3]*.15);return{map:hi(i),ormMap:Ge(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});Le("laminateBench",n=>{const s=ui(512,512);ys(s,Rn.benchtop);const r=[9274743,14077886,7235417].map(ai);for(let l=0;l<2e3;l++)ro(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=ii(Rn.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let u=0;u<512;u++)B0(s,u,l,c,.85),o[l*512+u]=.45;return{map:hi(s),ormMap:Ge(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Le("ceilingGrid",n=>{const s=ui(512,512);ys(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=ai(14210509),c=ai(12434098),l=ve(n,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let f=0;f<512;f++){const d=u*512+f,_=Math.min(f,512-f),x=Math.min(u,512-u);if(_<r/2||x<o/2){const v=_>=r/2-2&&_<r/2||x>=o/2-2&&x<o/2?c:a;s.d[d*3]=v[0],s.d[d*3+1]=v[1],s.d[d*3+2]=v[2],h[d]=.55}else{const p=1+(l[d]-.5)*.04;s.d[d*3]*=p,s.d[d*3+1]*=p,s.d[d*3+2]*=p,h[d]=.9}}return{map:hi(s),ormMap:Ge(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Le("applianceEnamel",n=>{const i=ve(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Re(.3+(i[r]-.5)*.04);return{ormMap:Ge(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Le("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=ve(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;i[l]=Re(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:Ge(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});Le("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let f=0;f<s;f++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=f=>{let d=0;for(const _ of i)d+=_.a*Math.exp(-(((f-_.c)/_.w)**2));return d+=.5*Math.exp(-((f/.04)**2))+.5*Math.exp(-(((1-f)/.04)**2)),d};let o=1/0,a=-1/0;for(let f=0;f<=256;f++){const d=r(f/256);d<o&&(o=d),d>a&&(a=d)}const c=a-o||1,l=f=>(r(Re(f))-o)/c,h=ui(512,256),u=new Float32Array(512*256);for(let f=0;f<512;f++){const d=l(f/511),_=.9+.1*d;for(let x=0;x<256;x++){const m=x*512+f;h.d[m*3]=_,h.d[m*3+1]=_,h.d[m*3+2]=_,u[m]=d}}return{map:s0(hi(h)),normalMap:s0(oi(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:i,tinted:!0}});Le("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=i[r].map(ai),a=ui(256,256);ys(a,o[n.int(0,3)]);const c=n.int(0,2);if(c===0){let h=0;for(;h<256;){const u=n.int(12,48);Pn(a,0,h,256,Math.min(256,h+u),o[n.int(0,3)],n.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<n.int(5,11);h++){const u=n.range(0,179.2),f=n.range(0,256*.7);Pn(a,u,f,u+n.range(30,110),f+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const h=n.range(115.2,174.08);Pn(a,0,0,256,h,o[0],1),Pn(a,0,h,256,256,o[2],1);for(let u=0;u<n.int(3,7);u++){const f=n.range(h-40,h+40);Pn(a,0,f,256,f+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}ro(a,n.range(256*.2,256*.8),n.range(20,h-20),n.range(12,26),o[3],.9)}const l=ii(16777215,.97);Pn(a,0,0,256,6,l),Pn(a,0,250,256,256,l),Pn(a,0,0,6,256,l),Pn(a,250,0,256,256,l),s.push(s0(hi(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const xM={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},Zs=new Map;function Si(n,t=16777215,e=null,i={}){const s=xM[n];if(!s)throw new Error(`Surfaces: no surface named '${n}'`);const r=Object.keys(i).sort().map(h=>h+"="+JSON.stringify(i[h])).join(","),o=n+"|"+t+"|"+r;if(Zs.has(o))return Zs.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=h=>s.alpha!==void 0?io(h):h;if(s.recipe){const{print:h,...u}=i,f=Object.keys(u).sort().map(p=>p+"="+JSON.stringify(u[p])).join(","),d=e?e.child("tex."+s.recipe+(f?"#"+f:"")):null,_=ur(s.recipe,d,u),x=_.maps?_.maps[Math.min(_.maps.length-1,h??0)]:_.map;if(x&&(a.map=x),_.normalMap){a.normalMap=_.normalMap;const p=_.normalScale??1;a.normalScale=new Nt(p,p)}_.ormMap?(a.aoMap=_.ormMap,a.roughnessMap=_.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=_.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const m=c(new _n(a));return _.uvScale&&(m.userData.uvScale=_.uvScale),m.userData.cast=s.cast,m.userData.surface=n,Zs.set(o,m),m}const l=c(new _n(a));return l.userData.cast=s.cast,l.userData.surface=n,Zs.set(o,l),l}function vM(){for(const n of Zs.values())n.dispose();Zs.clear()}F0(vM);const Ht={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,switchH:1.05,gpoH:.3},Gn={thin:.002,furniture:.003,joinery:.005},Mu=new Set;function o0(n,t,e={}){if(e.material)return e.material;try{return Si(n,t,null,e.recipe||{})}catch(i){Mu.has(n)||(Mu.add(n),console.error(`RoomKit: surface '${n}' unavailable, falling back to flat colour`,i))}return eM(t,e)}function se(n,t,e,i,s,r={}){var l;const o=o0(n,s,r),a=r.chamfer?Ss(t,e,i,r.chamfer):r.graded?MM(t,e,i,r.gradeEdge):new $e(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),c=new Dt(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const fr=new Map,ji=n=>Math.round(n*1e3);function Bd(n,t,e){const i=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(i[s*2]=n[r],i[s*2+1]=n[r+2]):o>=c?(i[s*2]=n[r+2],i[s*2+1]=n[r+1]):(i[s*2]=n[r],i[s*2+1]=n[r+1])}return i}function zd(n){const t=n.length*3,e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const o of n){const[a,c,l]=o;let h=c[0]-a[0],u=c[1]-a[1],f=c[2]-a[2],d=l[0]-a[0],_=l[1]-a[1],x=l[2]-a[2],m=u*x-f*_,p=f*d-h*x,v=h*_-u*d;const M=(a[0]+c[0]+l[0])/3,y=(a[1]+c[1]+l[1])/3,R=(a[2]+c[2]+l[2])/3;let A=c,E=l;m*M+p*y+v*R<0&&(A=l,E=c,m=-m,p=-p,v=-v);const P=Math.hypot(m,p,v)||1;m/=P,p/=P,v/=P;for(const C of[a,A,E])e[s*3]=C[0],e[s*3+1]=C[1],e[s*3+2]=C[2],i[s*3]=m,i[s*3+1]=p,i[s*3+2]=v,s++}const r=new en;return r.setAttribute("position",new le(e,3)),r.setAttribute("normal",new le(i,3)),r.setAttribute("uv",new le(Bd(e,i,t),2)),r.setAttribute("color",new le(new Float32Array(t*3).fill(1),3)),r}function Ss(n,t,e,i=Gn.furniture){n=Math.max(n,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(i,Math.min(n,t,e)/2-5e-4);if(!(s>2e-4))return new $e(n,t,e);const r=`c${ji(n)},${ji(t)},${ji(e)},${ji(s)}`,o=fr.get(r);if(o)return o;const a=n/2,c=t/2,l=e/2,h=[a-s,c-s,l-s],u=[a,c,l],f=(p,v)=>[(v===0?u[0]:h[0])*p[0],(v===1?u[1]:h[1])*p[1],(v===2?u[2]:h[2])*p[2]],d=[];for(const p of[-1,1])for(const v of[-1,1])for(const M of[-1,1])d.push([p,v,M]);const _=[],x=(p,v,M,y)=>{_.push([p,v,M]),_.push([p,M,y])};for(let p=0;p<3;p++){const v=(p+1)%3,M=(p+2)%3;for(const y of[-1,1]){const R=(A,E)=>{const P=[0,0,0];return P[p]=y,P[v]=A,P[M]=E,f(P,p)};x(R(-1,-1),R(1,-1),R(1,1),R(-1,1))}}for(let p=0;p<3;p++)for(let v=p+1;v<3;v++){const M=3-p-v;for(const y of[-1,1])for(const R of[-1,1]){const A=[0,0,0];A[p]=y,A[v]=R,A[M]=-1;const E=[0,0,0];E[p]=y,E[v]=R,E[M]=1,x(f(A,p),f(A,v),f(E,v),f(E,p))}}for(const p of d)_.push([f(p,0),f(p,1),f(p,2)]);const m=zd(_);return fr.set(r,m),m}const Oo=[0,.05,.18,.55];function Su(n,t=.12){const e=t/.12,i=[0];for(let s=1;s<Oo.length;s++){const r=Oo[s]*e;r<n/2-1e-4&&i.push(r)}i.push(n/2);for(let s=Oo.length-1;s>=1;s--){const r=n-Oo[s]*e;r>n/2+1e-4&&i.push(r)}return i.push(n),i}function yu(n,t,e,i,s,r){const o=(a,c)=>[t[0]+e[0]*a+i[0]*c,t[1]+e[1]*a+i[1]*c,t[2]+e[2]*a+i[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),h=o(s[a+1],r[c]),u=o(s[a+1],r[c+1]),f=o(s[a],r[c+1]);n.push([l,h,u]),n.push([l,u,f])}}function MM(n,t,e,i=.12){const s=`g${ji(n)},${ji(t)},${ji(e)},${ji(i)}`,r=fr.get(s);if(r)return r;const o=e<=n&&e<=t?2:t<=n?1:0,[a,c,l]=o===2?[n,t,e]:o===1?[n,e,t]:[e,t,n],h=a/2,u=c/2,f=l/2,d=Su(a,i),_=Su(c,i),x=[];yu(x,[-h,-u,f],[1,0,0],[0,1,0],d,_),yu(x,[-h,-u,-f],[1,0,0],[0,1,0],d,_);const m=(v,M,y,R)=>{x.push([v,M,y]),x.push([v,y,R])};m([h,-u,-f],[h,u,-f],[h,u,f],[h,-u,f]),m([-h,-u,-f],[-h,u,-f],[-h,u,f],[-h,-u,f]),m([-h,u,-f],[h,u,-f],[h,u,f],[-h,u,f]),m([-h,-u,-f],[h,-u,-f],[h,-u,f],[-h,-u,f]);const p=zd(x);if(o===1?p.rotateX(-Math.PI/2):o===0&&p.rotateY(Math.PI/2),o!==2){const v=p.attributes.position.array,M=p.attributes.normal.array;p.setAttribute("uv",new le(Bd(v,M,p.attributes.position.count),2))}return fr.set(s,p),p}F0(()=>{for(const n of fr.values())n.dispose();fr.clear()});class H0{constructor(){this.group=new Me,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,i,s,r,o,a=!1){this.colliders.push({min:new z(t-s/2,e,i-o/2),max:new z(t+s/2,e+r,i+o/2),walkable:a})}spot(t,e,i,s){return this.spots[t]=new z(e,i,s),this.spots[t]}interact(t,e,i,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new z(i,s,r),action:o,data:a,radius:c})}light(t,e,i,s=16770756,r=9,o=13){const a=new Na(s,r,o,2);return a.position.set(t,e,i),this.group.add(a),this.lights.push(a),a}}function SM(n,t,e,i,s,r,o=Rn.floorTimber,a={}){const c=a.thickness??.16,l=se(a.surface??"floorTimber",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),n.add(l),n.solid(t,r-c,e,i,c,s,!0),l}function yM(n,t,e,i,s,r,o=Rn.ceiling,a={}){const c=a.thickness??Ht.cornice,l=se(a.surface??"ceiling",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),n.add(l),l}function EM(n,t,e,i,s=0,r={}){const o=se("trim",.075,.115,.01,r.colour??Rn.trim,{});o.position.set(t,e,i),o.rotation.y=s,n.add(o);const a=se("trim",.03,.055,.004,r.colour??Rn.trim,{});return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(.007),n.add(a),o}function wM(n,t,e,i,s=0,r={}){const o=se("trim",.115,.075,.01,r.colour??Rn.trim,{});return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function Gs(n,t,e,i,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,h=e-r/2-a,u=e+r/2+a;const f=t-s/2,d=t+s/2,_=e-r/2,x=e+r/2;for(const M of n.decals){if(l<=M.x0||c>=M.x1||u<=M.z0||h>=M.z1)continue;const y=Math.min(l-M.x0,M.x1-c),R=Math.min(u-M.z0,M.z1-h);if(y<=R?t<(M.x0+M.x1)/2?l=Math.max(d,Math.min(l,M.x0)):c=Math.min(f,Math.max(c,M.x1)):e<(M.z0+M.z1)/2?u=Math.max(x,Math.min(u,M.z0)):h=Math.min(_,Math.max(h,M.z1)),l>M.x0+1e-4&&c<M.x1-1e-4&&u>M.z0+1e-4&&h<M.z1-1e-4)return null}const m=l-c,p=u-h;if(m<.05||p<.05)return null;const v=new Dt(new Ii(m,p),Id());return v.rotation.x=-Math.PI/2,v.position.set((c+l)/2,i+.006,(h+u)/2),n.add(v),n.decals.push({x0:c,x1:l,z0:h,z1:u}),v}new Zn;function AM(n,t,e,i){if(n.door===!1||n.leaf===!1||n.door===void 0&&n.leaf===void 0&&t<=1.005)return null;const s=n.door||{},r=t>=1.25,o=s.style??(n.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??i,colour:s.colour??n.leaf??(o==="glazed"?hr.metal:e),surfaceName:s.surface??n.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function Qn(n,t,e,i,s,r={}){const{y0:o=0,height:a=Ht.storey,thickness:c=Ht.wallThick,colour:l=Rn.wall,innerColour:h=null,outerColour:u=null,openings:f=[],skirting:d=!0,skirtStyle:_="timber",cornice:x=!0,corniceStyle:m="cove",autoServices:p=!0,inner:v=null,surface:M="wall",trimColour:y=Rn.trim,graded:R=!0,name:A=null}=r,E=h??u,P=i-t,C=s-e,g=Math.hypot(P,C);if(g<.01)return;const S=P/g,b=C/g,L=Math.atan2(-b,S),O=-b,k=S,I=c/2,D=(F,J,nt,lt=0,ct=0)=>(F.position.set(t+S*J+O*lt,nt,e+b*J+k*lt),F.rotation.y=L+ct,n.add(F),F),U=(F,J,nt,lt={})=>se("trim",F,J,nt,lt.colour??y,lt),Y=v===null?[-1,1]:[v],Z=(F,J,nt,lt)=>{const ct=J-F,pt=lt-nt;if(ct<=.005||pt<=.005)return;const gt=(F+J)/2,yt=x&&m==="shadowline"&&Math.abs(lt-(o+a))<.02,B=yt?pt-.01:pt,ue=ct>=1.2&&B>=1.2,It=se(M,ct,B,c,l,{graded:R&&ue,cast:!0});if(D(It,gt,nt+B/2),yt){const N=se(M,ct,.01,c-.02,l,{});D(N,gt,lt-.005)}const Gt=Math.abs(S)*ct+Math.abs(b)*c,Tt=Math.abs(b)*ct+Math.abs(S)*c,Kt=t+S*gt,xt=e+b*gt;if(n.solid(Kt,nt,xt,Gt,pt,Tt),E)for(const N of Y){const w=se(M,ct,B,.02,E,{graded:R&&ue});D(w,gt,nt+B/2,N*(I+.01))}if(d&&_&&nt-o<.02)if(_==="commercial"){const N=U(ct,Ht.skirtCommercial,c+.04,{colour:Rn.tileFloor,chamfer:Gn.thin});D(N,gt,nt+Ht.skirtCommercial/2)}else{const N=[[.112,Ht.skirtProud,0,Gn.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[w,X,it,at]of N){const st=U(ct,w,c+X*2,{chamfer:at});D(st,gt,nt+it+w/2)}}if(x&&m==="cove"&&Math.abs(lt-(o+a))<.02){const N=Ht.corniceGirth/Math.SQRT2;for(const w of Y){const X=U(ct,Ht.corniceGirth,.008,{chamfer:0});D(X,gt,lt-N/2,w*(I+N/2)),X.rotation.order="YXZ",X.rotation.set(-w*Math.PI/4,L,0)}}},tt=(F,J,nt,lt)=>{const ct=lt-nt;for(const gt of[-1,1]){const yt=U(Ht.reveal,ct,c,{});D(yt,F+gt*(J/2-Ht.reveal/2),nt+ct/2)}const pt=U(J,Ht.reveal,c,{});D(pt,F,lt-Ht.reveal/2)},K=(F,J,nt,lt)=>{const ct=J-2*Ht.reveal,pt=ct/2+Ht.archQuirk,gt=lt+Ht.archQuirk;for(const yt of[-1,1])for(const B of[-1,1]){const ue=U(Ht.archW,gt-nt+.002,Ht.archProud,{chamfer:Gn.joinery});if(D(ue,F+yt*(pt+Ht.archW/2),nt+(gt-nt)/2,B*(I+Ht.archProud/2)),nt-o<.02){const It=U(Ht.archW+.02,.15,.032,{});D(It,F+yt*(pt+Ht.archW/2),nt+.075,B*(I+.016))}}for(const yt of[-1,1]){const B=U(ct+2*(Ht.archW+Ht.archQuirk),Ht.archW,Ht.archProud,{chamfer:Gn.joinery});D(B,F,gt+Ht.archW/2,yt*(I+Ht.archProud/2))}},q=[...f].sort((F,J)=>F.at-J.at);let H=0;for(const F of q){const J=F.width/2,nt=Math.max(0,F.at-J),lt=Math.min(g,F.at+J),ct=F.kind==="window"?F.sill??Ht.winSill:0,pt=F.kind==="window"?F.head??Ht.winHead:F.head??(F.kind==="arch"?2.25:Ht.doorH);if(Z(H,nt,o,o+a),ct>0&&Z(nt,lt,o,o+ct),Z(nt,lt,o+pt,o+a),H=lt,F.kind==="window"){const gt=pt-ct,yt=o+(ct+pt)/2,B=v===null?1:-v,ue=new Dt(new $e(F.width-2*Ht.reveal-.002,gt-.002,.006),iM());ue.castShadow=!1,ue.receiveShadow=!0,D(ue,F.at,yt,B*.015);const It=new Dt(new $e(F.width-2*Ht.reveal-.002,gt-.002,.006),sM());It.castShadow=!1,It.receiveShadow=!0,D(It,F.at,yt,-B*.015),tt(F.at,F.width,o+ct,o+pt),K(F.at,F.width,o+ct,o+pt);const Gt=Math.max(1,Math.round((F.width-2*Ht.reveal)/.9)),Tt=F.width-2*Ht.reveal;for(let xt=1;xt<Gt;xt++){const N=U(.04,gt,.05,{chamfer:Gn.joinery});D(N,F.at-Tt/2+Tt/Gt*xt,yt)}const Kt=F.restrictor?Math.min(o+1.7,o+pt-.1):o+ct+gt/3;if(gt>.55){const xt=U(Tt,.04,.05,{chamfer:Gn.joinery});D(xt,F.at,Kt)}if(F.restrictor){const xt=U(.06,.02,.03,{colour:Rn.metalDull,chamfer:Gn.thin});D(xt,F.at+Tt/4,o+ct+.02,0)}for(const xt of Y){const N=U(F.width+.09,.025,c/2+.03,{chamfer:Gn.joinery});D(N,F.at,o+ct-.0125,xt*(c/4+.015))}if(v!==null){const xt=U(F.width+.12,.04,.09,{chamfer:Gn.joinery});D(xt,F.at,o+ct-.02,-v*(I+.045)),xt.rotation.order="YXZ",xt.rotation.set(v*.1,L,0)}if(F.curtains){bM(n,t+S*F.at,o+pt+.15,e+b*F.at,L,F.width+.4,{offset:(v??1)*(I+.09)});const xt=[.3,.22],N=v??1;for(const X of[-1,1]){const it=xt[X<0?0:1],at=F.width*it,st=6;for(let At=0;At<st;At++){const ft=at/st,St=se("fabric",ft*1.35,gt+.35,.045,F.curtains,{cast:!0}),Jt=F.at+X*(F.width/2-at+(At+.5)*ft);D(St,Jt,yt+.1,N*(I+.075),At%2?.175:-.175)}}const w=U(F.width+.44,.12,.09,{chamfer:Gn.joinery});D(w,F.at,o+pt+.21,N*(I+.055))}}else if((F.kind==="door"||F.kind==="arch")&&(tt(F.at,F.width,o,o+pt),K(F.at,F.width,o,o+pt),F.kind==="door")){const gt=F.swing??1,yt=F.width/2-Ht.reveal,B=I-.045;for(const Gt of[-1,1]){const Tt=U(.013,pt-.02,.03,{});D(Tt,F.at+Gt*(yt-.0055),o+(pt-.02)/2,gt*B)}const ue=U(F.width-2*Ht.reveal,.014,.03,{});D(ue,F.at,o+pt-.025,gt*B);const It=AM(F,F.width,y,gt);if(It){const Gt=B+.015+Ht.leafT,Tt=pt-Ht.reveal-.02,Kt=It.pair?yt-.006:2*yt-.006,xt=It.face,N=It.pair?[1,-1]:[xt];for(const w of N){const X=F.at+w*(yt-.003),it=xt*Gt;It.leaves.push({hx:t+S*X+O*it,hz:e+b*X+k*it,y:o,baseRot:L,phiOpen:w*xt*Math.PI/2,leafRot:w>0?0:Math.PI,dx:-w*Kt/2,dz:-xt*Ht.leafT/2,lw:Kt,lh:Tt});for(const at of[.15,1.02,1.89]){if(at>Tt-.1)continue;const st=se("chrome",.016,.1,.016,hr.metal,{chamfer:.001,cast:!1});D(st,X,o+.015+at,it)}}It.centre={x:t+S*F.at,z:e+b*F.at},It.y0=o,n.doors.push(It)}}if(p&&F.kind==="door"){const gt=-(F.swing??1);for(const yt of[-1,1])EM(n,t+S*(F.at+gt*(F.width/2+Ht.archW+.15))+O*yt*(I+.006),o+Ht.switchH,e+b*(F.at+gt*(F.width/2+Ht.archW+.15))+k*yt*(I+.006),L+(yt<0?Math.PI:0))}}if(Z(H,g,o,o+a),p&&v!==null&&o+Ht.gpoH<o+a){const F=Math.max(1,Math.floor(g/3.5));for(let J=0;J<F;J++){const nt=(J+.5)*(g/F);q.some(lt=>Math.abs(lt.at-nt)<lt.width/2+.25)||wM(n,t+S*nt+O*v*(I+.006),o+Ht.gpoH,e+b*nt+k*v*(I+.006),L+(v<0?Math.PI:0))}}A&&(n.faces[A]={a:{x:t,z:e},b:{x:i,z:s},u:{x:S,z:b},n:{x:O,z:k},angle:L,thickness:c,y0:o,height:a,length:g,face:F=>({x:(t+i)/2+O*F*(c/2),z:(e+s)/2+k*F*(c/2),nx:O*F,nz:k*F,rotY:L+(F<0?Math.PI:0)})})}function bM(n,t,e,i,s=0,r=1.6,o={}){const a=new Me,c=new Dt(new ee(.0125,.0125,r,8),o0("chrome",o.colour??hr.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const h=new Dt(new Ms(.0175,8,6),o0("chrome",o.colour??hr.metalDark));h.position.x=l*r/2,a.add(h)}return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(o.offset??0),n.add(a),a}function G0(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new en;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let _=0;_<d.count;++_)u.push(d.getX(_)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Eu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const _=Eu(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}return c}function Eu(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new le(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let _=0;_<e;_++){const x=h.getComponent(f,_);a.setComponent(f+u,_,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const TM=new Set(["position","normal","uv","color"]);function Fa(n,t={}){var a,c;n.updateMatrixWorld(!0);const e=new Map,i=[],s=new Set;n.traverse(l=>{var _,x;if(l===n)return;for(let m=l.parent;m&&m!==n;m=m.parent)if(s.has(m))return;if(l.isInstancedMesh||l.userData.isSign||l.isLight){i.push(l),s.add(l);return}if(!l.isMesh||!((x=(_=l.geometry)==null?void 0:_.attributes)!=null&&x.position))return;const h=l.material.uuid;e.has(h)||e.set(h,{material:l.material,geos:[],cast:!1});const u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);for(const m of Object.keys(u.attributes))TM.has(m)||u.deleteAttribute(m);const f=u.attributes.position.count;u.attributes.uv||u.setAttribute("uv",new le(new Float32Array(f*2),2)),u.attributes.color||u.setAttribute("color",new le(new Float32Array(f*3).fill(1),3));const d=e.get(h);d.geos.push(u.index?u.toNonIndexed():u),d.cast=d.cast||l.castShadow});const r=t.colliders?new xa(t.colliders,1):null,o=new Me;for(const{material:l,geos:h,cast:u}of e.values()){if(!h.length)continue;const f=h.length===1?h[0]:G0(h,!1);if(!f){console.error("bakeGroup: merge returned null (mismatched attributes)",l);continue}const d=((a=l.userData)==null?void 0:a.decal)===!0,_=(c=l.userData)==null?void 0:c.uvScale;_&&!d&&ka(f,_[0],_[1]),r&&!d&&Hd(f,r);const x=new Dt(f,l);x.castShadow=d?!1:u,x.receiveShadow=!d,d&&(x.renderOrder=2),o.add(x)}for(const l of i)o.add(l);return o}function ka(n,t,e=t){const i=n.attributes.position.count,s=n.attributes.position.array,r=n.attributes.normal.array,o=new Float32Array(i*2);for(let a=0;a<i;a++){const c=a*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let f,d;h>=l&&h>=u?(f=s[c],d=s[c+2]):l>=u?(f=s[c+2],d=s[c+1]):(f=s[c],d=s[c+1]),o[a*2]=f/t,o[a*2+1]=d/e}n.setAttribute("uv",new le(o,2))}const Tc=512,wu=1024;function Au(n,t,e){return((n+Tc)*wu+(t+Tc))*wu+(e+Tc)}class xa{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let i=0;i<t.length;i++){const s=t[i],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),h=Math.floor(s.max.z/e);for(let u=r;u<=o;u++)for(let f=a;f<=c;f++)for(let d=l;d<=h;d++){const _=Au(u,f,d);let x=this.bins.get(_);x||(x=[],this.bins.set(_,x)),x.push(i)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,i,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),h=Math.floor((e-s)/r),u=Math.floor((e+s)/r),f=Math.floor((i-s)/r),d=Math.floor((i+s)/r);for(let _=c;_<=l;_++)for(let x=h;x<=u;x++)for(let m=f;m<=d;m++){const p=this.bins.get(Au(_,x,m));if(p)for(let v=0;v<p.length;v++){const M=p[v];this._stamp[M]!==a&&(this._stamp[M]=a,o.push(this.boxes[M]))}}return o}}const RM=.18,LM=.55,bu=.75,CM=.3,Tu=.55,IM=1.2;function Hd(n,t){const e=t instanceof xa?t:new xa(t,1),i=Array.isArray(n)?n:[n];for(const s of i)PM(s,e)}function PM(n,t){const e=n.attributes.color;if(!e||e.itemSize!==3||e.normalized||!n.attributes.normal)return;const i=n.attributes.position.array,s=n.attributes.normal.array,r=e.array,o=n.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],h=s[c+1],u=s[c+2],f=i[c]+l*.01,d=i[c+1]+h*.01,_=i[c+2]+u*.01;let x=0;const m=t.near(f,d,_,IM);for(let v=0;v<m.length;v++){const M=m[v],y=Math.max(M.min.x-f,0,f-M.max.x),R=Math.max(M.min.y-d,0,d-M.max.y),A=Math.max(M.min.z-_,0,_-M.max.z),E=Math.sqrt(y*y+R*R+A*A);if(E>bu*3)continue;const P=(M.min.x+M.max.x)/2-f,C=(M.min.y+M.max.y)/2-d,g=(M.min.z+M.max.z)/2-_;l*P+h*C+u*g<=0||(x+=LM*Math.exp(-E/RM)+CM*Math.exp(-E/bu))}const p=Math.max(Tu,1-Math.min(1-Tu,x));r[c]*=p,r[c+1]*=p,r[c+2]*=p}e.needsUpdate=!0}const et=Object.freeze({CEIL_H:3.3,FLAT_FACE:3.15,STRUCT_FACE:3.166,CANT_FACE:3.511346,CANT_LEN:1.932113,CORNER_X:1.799792,VERTEX:Object.freeze([1.835,3.251]),BAND_TOP:2.7,TILE:.9,BAY_CENTRE:2.362686,BAY_FRONT:3.171346,BAY_W:1.4,BAY_D:.34,BAY_H:2.2,RIM:1.13,PANEL_OUT:1.1,PANEL_IN:.56,PANEL_Y0:.9,PANEL_Y1:1.16,RIM_TOP:.96,DAIS_A:1.75,COFFER_IN:1.6,COFFER_OUT:2.3,SPAWN:Object.freeze([0,0,2.3]),SPAWN_YAW:Math.PI,HEX_THETA:Math.PI/6}),ci=Object.freeze({TILE:.9,PER_TILE:1,DIA:.72,LIP_DIA:.69,COVE_DIA:.6,DISH_DIA:.51,RECESS:.055,PROUD:.006,DISC_R:.25,DISC_PROUD:.001,COLUMNS:Object.freeze([-1.35,-.45,.45,1.35]),ROWS:Object.freeze([.45,1.35,2.25]),LIT_ROW:1.35}),Xt=Object.freeze({ROUNDEL:12303029,BAND:9474188,CEIL:11118498,DECK:5198935,DAIS:7765124,CONSOLE:13947592,PANEL:6973799,DARK:2764339,CHROME:13225682,JOINERY:7034951,GLOW_W:12960958,GLOW_C:12371148,GLASS:13227742}),Ru=Object.freeze({ROUNDEL:38.718,BAND:26.288,CEIL:40.657,DECK:25.752,DAIS:10.227,CONSOLE:13.965,PANEL:9.566,DARK:9.034,CHROME:4.338,JOINERY:2.8,GLOW_W:6.463,GLOW_C:2.8,GLASS:2.239}),DM=16772301,OM=1.05,NM=12376319,UM=1.25,ra=n=>n<0?0:n>1?1:n,Gd=n=>n*n*(3-2*n);function Ba(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new le(new Float32Array(t*3).fill(1),3))}return n}const nn=512,oo=nn/ci.TILE,No=ci.DISH_DIA/2*oo,Lu=ci.COVE_DIA/2*oo,Rc=ci.LIP_DIA/2*oo,Cu=ci.DIA/2*oo,Iu=1,Lc=1+ci.PROUD/ci.RECESS,Pu=1.5,FM=ci.RECESS*oo,kM=(n,t)=>1-Gd(ra((n-t+Pu*.5)/Pu));let Du=!1;function Vd(){Du||(Du=!0,Le("roundel",n=>{const t=new Float32Array(nn*nn),e=new Float32Array(nn*nn),i=new Float32Array(nn*nn),s=ve(n,nn,{p0:32,octaves:3});for(let r=0;r<nn;r++)for(let o=0;o<nn;o++){const a=r*nn+o,c=o+.5-nn/2,l=r+.5-nn/2,h=Math.hypot(c,l);let u,f,d;if(h<=No){const v=h/No;u=0,f=.62-.2*v,d=.52}else{const v=Gd(ra((h-No)/(Lu-No)));u=v,f=.42+.36*v,d=.52+.22*v}let _,x,m;if(h<=Rc)_=Lc,x=1,m=.74;else if(h<=Cu){const v=(h-Rc)/(Cu-Rc);_=Lc-(Lc-Iu)*v,x=1,m=.74+.08*v}else _=Iu,x=1,m=.82;const p=1-kM(h,Lu);t[a]=u+(_-u)*p,e[a]=f+(x-f)*p,i[a]=ra(d+(m-d)*p+(s[a]-.5)*.06)}return{normalMap:oi(t,nn,FM),ormMap:Ge(nn,e,i,null),uvScale:[ci.TILE,ci.TILE],normalScale:1,tinted:!0}}),Le("consolePanel",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=ve(n,256,{p0x:10,p0y:256,octaves:2}),o=ve(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++){const c=n.range(-.06,.06);for(let l=0;l<256;l++){const h=a*256+l;i[h]=ra(.42+c+(r[h]-.5)*.09+(o[h]-.5)*.06)}}return{ormMap:Ge(256,null,i,s),uvScale:[.32,.32],normalScale:0,tinted:!0}}))}let Cc=null;function Wd(n=null){if(Cc)return Cc;Vd();for(const s of Object.keys(Ru))Ua(Xt[s],Ru[s]);const t={},e=ur("roundel",n?n.child("tex.roundel"):null);t.ROUNDEL=new _n({color:Xt.ROUNDEL,roughness:1,metalness:0,normalMap:e.normalMap,normalScale:new Nt(e.normalScale,e.normalScale),aoMap:e.ormMap,roughnessMap:e.ormMap,aoMapIntensity:1,vertexColors:!0}),t.ROUNDEL.userData.uvScale=e.uvScale,t.ROUNDEL.userData.cast=!0,t.ROUNDEL.userData.surface="roundel",t.BAND=Si("trim",Xt.BAND,n),t.CEIL=Si("ceiling",Xt.CEIL,n),t.DECK=Si("vinyl",Xt.DECK,n),t.DAIS=Si("metal",Xt.DAIS,n),t.CONSOLE=Si("appliance",Xt.CONSOLE,n),t.DARK=Si("metal",Xt.DARK,n),t.CHROME=Si("chrome",Xt.CHROME,n),t.JOINERY=Si("joinery",Xt.JOINERY,n);const i=ur("consolePanel",n?n.child("tex.consolePanel"):null);return t.PANEL=new _n({color:Xt.PANEL,roughness:1,metalness:0,aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),t.PANEL.userData.uvScale=i.uvScale,t.PANEL.userData.cast=!0,t.PANEL.userData.surface="consolePanel",t.GLOW_W=new _n({color:Xt.GLOW_W,roughness:.55,metalness:0,emissive:DM,emissiveIntensity:OM,vertexColors:!0}),t.GLOW_W.userData.cast=!0,t.GLOW_C=new _n({color:Xt.GLOW_C,roughness:.2,metalness:0,emissive:NM,emissiveIntensity:UM,vertexColors:!0}),t.GLOW_C.userData.cast=!0,t.GLASS=io(new _n({color:Xt.GLASS,roughness:.1,metalness:0,transparent:!0,opacity:.3,depthWrite:!1,side:ei,vertexColors:!0})),t.GLASS.userData.cast=!1,t.SHADOW=Id(),Cc=t,t}const Bi=Math.SQRT1_2,Ic=n=>2*n*Math.tan(Math.PI/6),Cr=n=>2*Math.sqrt(3)*n*n,Ou=n=>n/Math.cos(Math.PI/6),Uo=7.2,BM=.02,Fo=et.BAND_TOP,Ir=3.16,ko=et.BAND_TOP,Pc=.03,Dc=.06,zM=.026,Oc=.1,HM=.02,Vn=1.8,Pe=2.61,a0=.9,va=.045,qr=et.FLAT_FACE+va/2,Nu=.05,Uu=3.311,Vs=.09,c0=.05,Fu=3.14+c0/2,Nc=.25,GM=.001,ku=1.35,VM=3.1,Uc=.2,Fc=.1,WM=.006;function V0(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new le(new Float32Array(t*3).fill(1),3))}return n}function qM(n,t,e){const i=new ee(Ou(n),Ou(n),t,6,1,!1,e).toNonIndexed();return i.computeVertexNormals(),V0(i)}const XM=["CEIL_H","FLAT_FACE","STRUCT_FACE","CANT_FACE","CORNER_X","BAND_TOP","DAIS_A","COFFER_IN","COFFER_OUT","HEX_THETA"],YM=["ROUNDEL","BAND","CEIL","DAIS","DARK","CHROME","GLOW_W","GLOW_C"];function $M(n){for(const t of XM)if(!Number.isFinite(et[t]))throw new Error(`Shell: ROOM.${t} is not a number (got ${et[t]})`);if(!Array.isArray(et.SPAWN)||et.SPAWN.length!==3)throw new Error("Shell: ROOM.SPAWN must be [x, y, z]");if(!n)throw new Error("Shell: shell(b, P) needs the palette from roundels.js");for(const t of YM)if(!n[t]||!n[t].isMaterial)throw new Error(`Shell: palette is missing ${t}`)}function jM(n,t){var s;const e=V0(new $e(a0,Pe,va).toNonIndexed());e.applyMatrix4(new Vt().makeTranslation(n*.45,Pe/2,qr));const i=(s=t.ROUNDEL.userData)==null?void 0:s.uvScale;if(!i)throw new Error("Shell: P.ROUNDEL carries no uvScale — the leaf UVs cannot be projected");return ka(e,i[0],i[1]),e.applyMatrix4(new Vt().makeTranslation(n*(Vn/2),0,qr).invert()),e.computeVertexNormals(),e}function KM(n,t,e={}){$M(t);const i=e.liveDoors!==!1,s=Object.create(null),r=(K,q,H)=>(s[K]=(s[K]??0)+H,Ua(q,s[K]),q),o=6.332*6.332-4*(1.366208*1.366208/2);r("DECK",Xt.DECK,o-Cr(et.DAIS_A)),SM(n,0,0,Uo,Uo,0,Xt.DECK,{surface:"vinyl",thickness:.16});const a=n.colliders.length;r("CEIL",Xt.CEIL,o),yM(n,0,0,Uo,Uo,et.CEIL_H,Xt.CEIL,{surface:"ceiling",thickness:.09});const c={height:et.CEIL_H,thickness:Ht.wallThick,colour:Xt.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},l=1.835,h=3.251;Qn(n,-l,-h,l,-h,{...c,name:"flatS"}),Qn(n,l,-h,h,-l,{...c,name:"baySE"}),Qn(n,h,-l,h,l,{...c,name:"flatE"}),Qn(n,h,l,l,h,{...c,name:"bayNE"}),Qn(n,l,h,.9,h,{...c,name:"pierR"}),Qn(n,.9,h,-.9,h,{...c,y0:Pe,height:et.CEIL_H-Pe,name:"lintel"}),Qn(n,-.9,h,-l,h,{...c,name:"pierL"}),Qn(n,-l,h,-h,l,{...c,name:"bayNW"}),Qn(n,-h,l,-h,-l,{...c,name:"flatW"}),Qn(n,-h,-l,-l,-h,{...c,name:"baySW"}),n.colliders.length=a;const u=(et.STRUCT_FACE-et.CORNER_X)*Math.SQRT2,f=2*et.CORNER_X,d=4*f+4*u;r("BAND",Xt.BAND,4*u*et.CEIL_H+4*f*(et.CEIL_H-2.8)-Vn*(et.CEIL_H-2.8));const _={material:t.ROUNDEL,cast:!0},x=(K,q,H,F)=>{const J=se("wall",K,Fo,BM,Xt.ROUNDEL,_);return J.position.set(q,Fo/2,H),J.rotation.y=F,n.add(J)};r("ROUNDEL",Xt.ROUNDEL,3*3.6*Fo+2*.9*Fo),x(3.6,0,-Ir,0),x(3.6,Ir,0,-Math.PI/2),x(3.6,-Ir,0,Math.PI/2),x(.9,1.35,Ir,Math.PI),x(.9,-1.35,Ir,Math.PI),r("ROUNDEL",Xt.ROUNDEL,2*a0*Pe);const m=new Me;m.name="doorPivots";const p=[];if(i)for(const K of[1,-1]){const q=new He;q.position.set(K*(Vn/2),0,qr),q.userData.side=K;const H=new Dt(jM(K,t),t.ROUNDEL);H.name="doorLeaf",H.castShadow=!0,H.receiveShadow=!0,H.frustumCulled=!1,q.add(H),m.add(q),p.push(q)}else for(const K of[-1,1]){const q=se("doorLeaf",a0,Pe,va,Xt.ROUNDEL,_);q.position.set(K*.45,Pe/2,qr),n.add(q)}r("DARK",Xt.DARK,Vn*Pe);const v={material:t.DARK,cast:!1},M=.575,y=2.11,R=.14,A=3.266;if(i){for(const H of[-1,1]){const F=se("metal",Vn/2-M,Pe,R,Xt.DARK,v);F.position.set(H*(M+(Vn/2-M)/2),Pe/2,A),n.add(F)}const K=se("metal",2*M,Pe-y,R,Xt.DARK,v);K.position.set(0,(y+Pe)/2,A),n.add(K);const q=se("metal",2*M,y,Nu,Xt.DARK,v);q.position.set(0,y/2,Uu),n.add(q)}else{const K=se("metal",Vn,Pe,Nu,Xt.DARK,v);K.position.set(0,Pe/2,Uu),n.add(K)}const E={material:t.BAND,cast:!0};r("BAND",Xt.BAND,2*Vs*(Pe+.045)+(Vn+2*Vs)*Vs);for(const K of[-1,1]){const q=se("trim",Vs,Pe+.045,c0,Xt.BAND,E);q.position.set(K*(Vn/2+Vs/2),(Pe+.045)/2,Fu),n.add(q)}const P=se("trim",Vn+2*Vs,ko-Pe,c0,Xt.BAND,E);P.position.set(0,(Pe+ko)/2,Fu),n.add(P),r("GLOW_W",Xt.GLOW_W,16*Math.PI*Nc*Nc);const C=V0(new vs(Nc,40)),g=[],S=(K,q,H)=>{const F=new Dt(C,t.GLOW_W);return F.position.set(K,ku,q),F.rotation.y=H,F.castShadow=!1,F.receiveShadow=!1,g.push(F),n.add(F)},b=et.FLAT_FACE-GM;for(const K of[-1.35,-.45,.45,1.35])S(K,-b,0),S(b,K,-Math.PI/2),S(-b,K,Math.PI/2);let L=null;for(const K of[-1.35,1.35])S(K,b,Math.PI);if(i){L=new ga(C,t.GLOW_W,2),L.name="doorDiscs",L.castShadow=!1,L.receiveShadow=!1,L.frustumCulled=!1,L.instanceMatrix.setUsage(Yr);const K=new Vt;[.45,-.45].forEach((q,H)=>{K.makeRotationY(Math.PI).setPosition(q,ku,b),L.setMatrixAt(H,K)}),L.instanceMatrix.needsUpdate=!0,n.add(L)}else for(const K of[-.45,.45])S(K,b,Math.PI);const O=et.CORNER_X,k=et.STRUCT_FACE,I=[[-O,-k,O,-k],[O,-k,k,-O],[k,-O,k,O],[k,O,O,k],[O,k,-O,k],[-O,k,-k,O],[-k,O,-k,-O],[-k,-O,-O,-k]].map(([K,q,H,F])=>{const J=H-K,nt=F-q,lt=Math.hypot(J,nt),ct=J/lt,pt=nt/lt;return{len:lt,nx:-pt,nz:ct,mx:(K+H)/2,mz:(q+F)/2,angle:Math.atan2(-pt,ct)}}),D=(K,q,H,F)=>(K.position.set(q.mx+q.nx*F,H,q.mz+q.nz*F),K.rotation.y=q.angle,n.add(K));r("CHROME",Xt.CHROME,d*(Pc+Dc)),r("GLOW_W",Xt.GLOW_W,d*Oc);for(const K of I)D(se("chrome",K.len,Pc,Dc,Xt.CHROME,{material:t.CHROME,cast:!1}),K,ko+Pc/2,zM-Dc/2),D(se("trim",K.len,Oc,HM,Xt.GLOW_W,{material:t.GLOW_W,cast:!1}),K,ko+Oc/2,0);const U=(et.COFFER_IN+et.COFFER_OUT)/2,Y=Ic(et.COFFER_OUT),Z=et.COFFER_OUT-et.COFFER_IN;r("CEIL",Xt.CEIL,Cr(et.COFFER_OUT)-Cr(et.COFFER_IN)+6*Y*Uc),r("GLOW_C",Xt.GLOW_C,6*Ic(et.COFFER_IN)*Fc);for(let K=0;K<6;K++){const q=K*Math.PI/3,H=Math.sin(q),F=Math.cos(q),J=se("ceiling",Y,Uc,Z,Xt.CEIL,{material:t.CEIL,cast:!1});J.position.set(U*H,VM+Uc/2,U*F),J.rotation.y=q,n.add(J);const nt=se("trim",Ic(et.COFFER_IN),Fc,.02,Xt.GLOW_C,{material:t.GLOW_C,cast:!1});nt.position.set(et.COFFER_IN*H,et.CEIL_H-Fc/2,et.COFFER_IN*F),nt.rotation.y=q,n.add(nt)}r("DAIS",Xt.DAIS,Cr(et.DAIS_A)-Cr(.62));const tt=new Dt(qM(et.DAIS_A,WM*2,et.HEX_THETA),t.DAIS);return tt.position.set(0,0,0),tt.castShadow=!1,tt.receiveShadow=!0,n.add(tt),n.userData??(n.userData={}),n.userData.collision={planes:[{nx:0,nz:1,d:et.FLAT_FACE},{nx:1,nz:0,d:et.FLAT_FACE},{nx:0,nz:-1,d:et.FLAT_FACE},{nx:-1,nz:0,d:et.FLAT_FACE},{nx:Bi,nz:Bi,d:et.CANT_FACE},{nx:Bi,nz:-Bi,d:et.CANT_FACE},{nx:-Bi,nz:-Bi,d:et.CANT_FACE},{nx:-Bi,nz:Bi,d:et.CANT_FACE}],hulls:[],boxes:[{x:0,z:qr,hw:Vn/2,hd:va/2,rotY:0,y0:0,y1:Pe}]},n.spot("spawn",et.SPAWN[0],et.SPAWN[1],et.SPAWN[2]),n.spot("doors",0,0,2.25),n.interact("doors","Doors",0,1.2,et.FLAT_FACE,"doors",{},1.4),{litDiscs:g,areas:s,doorGroup:m,leaves:p,discs:L}}for(const n of["HEX_THETA","RIM","PANEL_OUT","PANEL_IN","PANEL_Y0","PANEL_Y1","RIM_TOP"])if(typeof et[n]!="number")throw new Error(`Console.js: ROOM.${n} is missing or not a number`);const W0=Math.PI/3,qd=Math.tan(Math.PI/6),l0=1/Math.cos(Math.PI/6),Bu=.62,kc=.7,Bo=et.PANEL_IN,ZM=0,zu=.1,Hu=.72,xi=1.32,Xd=et.PANEL_Y1-et.PANEL_Y0,Yd=et.PANEL_OUT-et.PANEL_IN,JM=Math.atan2(Xd,Yd),Ai=Math.hypot(Xd,Yd),Gu=(et.PANEL_OUT+et.PANEL_IN)/2,Vu=(et.PANEL_Y0+et.PANEL_Y1)/2,$r=et.PANEL_OUT*qd,Ma=et.PANEL_IN*qd,Wu=JM-Math.PI/2,$d=n=>$r+(n+Ai/2)/Ai*(Ma-$r),qu=-Ai/2+.1246,ts=-.17,dr=ts+.34,QM=.05,tS=Math.hypot($r-Ma,Ai),jd=QM/(Ai/tS),jr=$d(ts)-jd,Sa=$d(dr)-jd,me=-.012,Kd=Math.hypot(Sa-jr,dr-ts),eS=-.34/Kd,nS=(Sa-jr)/Kd,zo=(n,t)=>(Math.abs(n)-jr)*eS+(t-ts)*nS,ie=-.086,we=.05,Ze=.14,zi=.006,Hi=.084,h0=new $e(1,1,1);h0.setAttribute("color",new le(new Float32Array(h0.attributes.position.count*3).fill(1),3));const q0=.008,zr=.005,Zd=me+zr+q0/2,iS=me-.006-q0/2,rn=new $e(1,1,1),Bc=new ee(.5,.5,1,16),sS=new ee(.5,.5,1,8),Xu=new Ms(.5,10,8);function X0(n,t,e,i,s,r,o){let a=(i[1]-e[1])*(s[2]-e[2])-(i[2]-e[2])*(s[1]-e[1]),c=(i[2]-e[2])*(s[0]-e[0])-(i[0]-e[0])*(s[2]-e[2]),l=(i[0]-e[0])*(s[1]-e[1])-(i[1]-e[1])*(s[0]-e[0]),h=e,u=i,f=s,d=r;a*o[0]+c*o[1]+l*o[2]<0&&(h=r,u=s,f=i,d=e,a=-a,c=-c,l=-l);const _=Math.hypot(a,c,l)||1;a/=_,c/=_,l/=_;for(const x of[h,u,f,h,f,d])n.push(x[0],x[1],x[2]),t.push(a,c,l)}function Y0(n,t){const e=new en;return e.setAttribute("position",new le(new Float32Array(n),3)),e.setAttribute("normal",new le(new Float32Array(t),3)),e}function Yu(n,t){const e=n*l0,i=[];for(let s=0;s<6;s++){const r=et.HEX_THETA+s*W0;i.push([e*Math.sin(r),t,e*Math.cos(r)])}return i}function Hn(n,t,e,i,s){const r=Yu(n,t),o=Yu(e,i),a=[],c=[];for(let l=0;l<6;l++){const h=(l+1)%6,u=et.HEX_THETA+(l+.5)*W0,f=s==="up"?[0,1,0]:s==="down"?[0,-1,0]:s==="out"?[Math.sin(u),0,Math.cos(u)]:[-Math.sin(u),0,-Math.cos(u)];X0(a,c,r[l],r[h],o[h],o[l],f)}return Y0(a,c)}function Ho(n,t,e,i){const s=new ee(t*l0,n*l0,i-e,6,1,!1,et.HEX_THETA).toNonIndexed();return s.computeVertexNormals(),s.translate(0,(e+i)/2,0),s}function Jd(n,t,e){const i=[],s=[];for(const[r,o,a,c]of n)X0(i,s,[r[0],r[1],t],[o[0],o[1],t],[a[0],a[1],t],[c[0],c[1],t],e);return Y0(i,s)}const Gi=[[-$r,-Ai/2],[$r,-Ai/2],[Ma,Ai/2],[-Ma,Ai/2]],mn=[[-jr,ts],[jr,ts],[Sa,dr],[-Sa,dr]],rS=Jd([[Gi[0],Gi[1],mn[1],mn[0]],[Gi[1],Gi[2],mn[2],mn[1]],[Gi[2],Gi[3],mn[3],mn[2]],[Gi[3],Gi[0],mn[0],mn[3]]],0,[0,0,1]),oS=(()=>{const n=[],t=[];for(let e=0;e<4;e++){const i=mn[e],s=mn[(e+1)%4],r=(i[0]+s[0])/2,o=(i[1]+s[1])/2;X0(n,t,[i[0],i[1],0],[s[0],s[1],0],[s[0],s[1],me],[i[0],i[1],me],[-r,-o,0])}return Y0(n,t)})(),aS=Jd([[mn[0],mn[1],mn[2],mn[3]]],me,[0,0,1]),cS=[{n:1,lamp:"doors",name:"DOOR CONTROL",ctl:[["lever",-.3,ie,{len:.13,lean:.35,slot:.13}],["dial",-.13,ie,{r:.07,needle:.1,rate:.2}],["dial",.045,ie,{r:.046}],["toggle",.18,ie,{tilt:.55}],["toggle",.25,ie,{tilt:-.55}],["toggle",.32,ie,{tilt:.55}],["button",-.32,we,{r:.02}],["button",-.255,we,{r:.02}],["toggle",-.16,we,{tilt:.55}],["toggle",-.1,we,{tilt:-.55}],["toggle",-.04,we,{tilt:.55}],["bar",.21,zi,{w:.13,h:Hi}],["lamps",-.2,Ze,{n:3,pitch:.075}],["readout",.17,Ze,{w:.17,h:.042,seg:3}]]},{n:2,lamp:"scanner",name:"SCANNER",ctl:[["lever",-.32,ie,{len:.115,lean:-.35,slot:.12}],["lever",-.235,ie,{len:.115,lean:.35,slot:.12}],["dial",-.08,ie,{r:.07,needle:.1,rate:.28}],["dial",.09,ie,{r:.052,needle:.066,rate:-.44}],["button",.23,ie,{r:.022}],["button",.3,ie,{r:.022}],["toggle",-.33,we,{tilt:.55}],["toggle",-.27,we,{tilt:.55}],["toggle",-.21,we,{tilt:-.55}],["bar",-.06,zi,{w:.12,h:Hi}],["bar",.1,zi,{w:.12,h:Hi}],["lamps",-.23,Ze,{n:4,pitch:.07}],["readout",.19,Ze,{w:.14,h:.042,seg:2}]]},{n:3,lamp:"life",name:"LIFE SUPPORT",ctl:[["dial",-.31,ie,{r:.058,needle:.078,rate:.16}],["dial",-.16,ie,{r:.058,needle:.078,rate:-.13}],["dial",-.01,ie,{r:.058,needle:.078,rate:.11}],["lever",.16,ie,{len:.13,lean:.35,slot:.13}],["button",.29,ie,{r:.024}],["button",.36,ie,{r:.018}],["toggle",-.33,we,{tilt:.55}],["toggle",-.27,we,{tilt:-.55}],["toggle",-.21,we,{tilt:.55}],["toggle",-.15,we,{tilt:-.55}],["bar",0,zi,{w:.11,h:Hi}],["bar",.15,zi,{w:.11,h:Hi}],["lamps",-.23,Ze,{n:4,pitch:.07}],["readout",.19,Ze,{w:.14,h:.042,seg:3}]]},{n:4,lamp:"nav",name:"NAVIGATION",ctl:[["dial",-.3,ie,{r:.058,needle:.078,rate:.24}],["dial",-.16,ie,{r:.058,needle:.078,rate:-.19}],["dial",-.02,ie,{r:.058,needle:.078,rate:.31}],["dial",.14,ie,{r:.07,needle:.1,rate:.09}],["guarded",.31,ie,{tilt:-.6}],["lamps",-.25,we,{n:6,pitch:.078}],["toggle",.26,we,{tilt:.55}],["toggle",.32,we,{tilt:-.55}],["readout",-.28,Ze,{w:.085,h:.042,seg:2}],["readout",-.168,Ze,{w:.085,h:.042,seg:2}],["readout",-.056,Ze,{w:.085,h:.042,seg:2}],["readout",.056,Ze,{w:.085,h:.042,seg:2}],["readout",.168,Ze,{w:.085,h:.042,seg:2}],["readout",.28,Ze,{w:.085,h:.042,seg:2}]]},{n:5,lamp:"flight",name:"FLIGHT",ctl:[["lever",-.3,ie,{len:.15,lean:.3,slot:.15,big:!0}],["lever",-.17,ie,{len:.13,lean:-.35,slot:.13}],["dial",0,ie,{r:.07,needle:.1,rate:.36}],["dial",.17,ie,{r:.052,needle:.066,rate:-.22}],["button",.3,ie,{r:.022}],["bar",-.3,zi,{w:.11,h:Hi}],["bar",-.165,zi,{w:.11,h:Hi}],["toggle",.03,we,{tilt:.55}],["toggle",.09,we,{tilt:-.55}],["toggle",.15,we,{tilt:.55}],["lamps",-.22,Ze,{n:4,pitch:.074}],["readout",.19,Ze,{w:.14,h:.042,seg:2}]]},{n:6,lamp:"diag",name:"DIAGNOSTIC",ctl:[["button",-.31,ie,{r:.038,lamp:!0}],["dial",-.17,ie,{r:.062,needle:.084,rate:.26}],["dial",-.01,ie,{r:.062,needle:.084,rate:-.17}],["column",.29,-.1,{n:8,pitch:.03}],["toggle",-.33,we,{tilt:.55}],["toggle",-.27,we,{tilt:-.55}],["button",-.18,we,{r:.02}],["button",-.115,we,{r:.02}],["bar",.02,zi,{w:.11,h:Hi}],["lamps",-.23,Ze,{n:3,pitch:.074}],["readout",.07,Ze,{w:.11,h:.042,seg:2}]]}];function lS(n,t,e={}){if(!t||!t.CONSOLE||!t.PANEL||!t.DARK||!t.CHROME||!t.GLOW_C)throw new Error("Console.js: consoleUnit(b, P) needs the palette from roundels.js");const i=new Me;i.name="console",n.add(i);const s=(L,O,k,I,D,U,Y,Z)=>{const tt=new Dt(O,k);return tt.position.set(I,D,U),Y&&tt.scale.set(Y[0],Y[1],Y[2]),Z&&tt.rotation.set(Z[0],Z[1],Z[2]),tt.castShadow=!1,tt.receiveShadow=!0,L.add(tt),tt};s(i,Ho(Bu,Bu,ZM,zu),t.CONSOLE,0,0,0),s(i,Ho(kc,kc,zu,Hu),t.CONSOLE,0,0,0),s(i,Ho(kc,et.PANEL_OUT,Hu,et.PANEL_Y0),t.CONSOLE,0,0,0),e.collar!==!1&&s(i,Ho(Bo,Bo,et.PANEL_Y1,xi),t.CONSOLE,0,0,0),s(i,Hn(et.PANEL_OUT,et.PANEL_Y0,et.PANEL_OUT,et.RIM_TOP,"in"),t.CONSOLE,0,0,0),s(i,Hn(et.PANEL_OUT,et.PANEL_Y0,et.RIM,et.RIM_TOP,"out"),t.CONSOLE,0,0,0),s(i,Hn(et.PANEL_OUT,et.RIM_TOP,et.RIM,et.RIM_TOP,"up"),t.CONSOLE,0,0,0);const r=et.PANEL_OUT-.008,o=et.RIM,a=et.RIM_TOP-.002,c=et.RIM_TOP+.014;s(i,Hn(o,a,o,c,"out"),t.CHROME,0,0,0),s(i,Hn(r,a,r,c,"in"),t.CHROME,0,0,0),s(i,Hn(r,c,o,c,"up"),t.CHROME,0,0,0),s(i,Hn(r,a,o,a,"down"),t.CHROME,0,0,0);const l=Bo-.006,h=Bo+.01;s(i,Hn(h,xi-.01,h,xi+.004,"out"),t.CHROME,0,0,0),s(i,Hn(l,xi-.01,l,xi+.004,"in"),t.CHROME,0,0,0),s(i,Hn(l,xi+.004,h,xi+.004,"up"),t.CHROME,0,0,0),s(i,Hn(l,xi-.01,h,xi-.01,"down"),t.CHROME,0,0,0);const u=[],f=[],d=[];let _=1/0;for(let L=0;L<6;L++){const O=L*W0,k=cS[L],I=new Me;I.rotation.y=O,i.add(I);const D=new Me;D.position.set(0,Vu,Gu),D.rotation.x=Wu,I.add(D),d.push(new Vt().makeRotationY(O).multiply(new Vt().makeTranslation(0,Vu,Gu)).multiply(new Vt().makeRotationX(Wu))),s(D,rS,t.PANEL,0,0,0),s(D,oS,t.PANEL,0,0,0),s(D,aS,t.DARK,0,0,0),_=Math.min(_,hS(D,L,k,t,s,u));const U=et.RIM*Math.sin(O),Y=et.RIM*Math.cos(O),Z=(O+Math.PI)%(Math.PI*2),tt=(et.RIM+.9)*Math.sin(O),K=(et.RIM+.9)*Math.cos(O);n.spot(`panel${k.n}`,tt,0,K),n.interact(`panel${k.n}`,k.name,U,et.RIM_TOP,Y,"panel",{panel:k.n},1.2),f.push({id:`panel${k.n}`,panel:k.n,lamp:k.lamp,name:k.name,azimuth:O,azimuthDeg:L*60,anchor:[U,et.RIM_TOP,Y],stand:[tt,K],yaw:Z})}_<qu&&console.error(`Console.js: a control reaches v ${_.toFixed(4)}, outboard of the sightline limit ${qu.toFixed(4)} — the rim upstand hides it from a standing player (§6.3)`);const x=new ga(h0,t.GLOW_C,Math.max(u.length,1));x.name="consoleLamps",x.instanceMatrix.setUsage(Yr),x.castShadow=!1,x.receiveShadow=!1,x.frustumCulled=!1,n.add(x);const m=f.map(()=>({active:!1,blinkLeft:0,blinkT:0})),p=new Map;f.forEach((L,O)=>{p.set(L.id,O),p.set(L.lamp,O),p.set(L.panel,O),p.set(String(L.panel),O)});let v=0;const M=new Vt,y=new gr,R=new jn,A=new z,E=new z;function P(L,O){return O.blinkLeft>0?(O.blinkLeft&1)===1:O.active?!0:(Math.floor(v/.55)+L.slot)%3===0}function C(L,O){const k=m[O.pi];let I=O.x,D=O.v,U=O.z,Y=O.sy,Z=O.rz;if(O.kind==="lamp")U=P(O,k)?Zd:iS;else if(O.kind==="needle")Z=O.rz+O.spin;else if(O.kind==="bar"){const tt=.18+.82*(.5+.5*Math.sin(v*O.rate+O.phase));Y=O.sy*tt,D=O.v+Y/2}R.set(0,0,Z),y.setFromEuler(R),A.set(I,D,U),E.set(O.sx,Y,O.sz),M.compose(A,y,E).premultiply(d[O.pi]),x.setMatrixAt(L,M)}function g(){for(let L=0;L<u.length;L++)C(L,u[L]);x.instanceMatrix.needsUpdate=!0}g(),n.userData=n.userData||{};const S=n.userData.collision=n.userData.collision||{planes:[],hulls:[],boxes:[]};S.hulls=S.hulls||[];const b={apothem:et.RIM,y1:1.2};return S.hulls.push(b),{panels:f,setLamp(L,O){const k=p.get(L);k!==void 0&&(m[k].active=!!O)},blink(L,O=1){const k=p.get(L);k!==void 0&&(m[k].blinkLeft=Math.max(1,Math.round(O)*2),m[k].blinkT=0)},update(L){if(L>0){v+=L;for(let O=0;O<m.length;O++){const k=m[O];if(k.blinkLeft>0)for(k.blinkT+=L;k.blinkT>=.085&&k.blinkLeft>0;)k.blinkT-=.085,k.blinkLeft--}for(const O of u)O.kind==="needle"&&(O.spin+=O.rate*L*(m[O.pi].active?3.2:1));g()}},hull:b}}function $u(n,t,e,i){const s=n+Math.cos(Math.PI/2+t)*e;return[Math.min(n,s-i),Math.max(n,s+i)]}const zc=.03,Hc=.036,Go=.013;function ju(n,t,e){const i=Math.cos(t),s=Math.sin(t);if(Math.abs(Math.cos(e)-i)>1e-9||Math.abs(Math.sin(e)-s)>1e-9){const r=((e-t)*180/Math.PI).toFixed(1);console.error(`Console.js: ${n}'s shaft is rotated ${r} degrees away from the direction its own position maths uses — it will be drawn lying where it is placed standing`)}}function hS(n,t,e,i,s,r){let o=1/0;const a=(u,f,d,_)=>console.error(`Console.js: panel ${e.n} ${u} at x ${f.toFixed(3)} v ${d.toFixed(3)} ${_}`),c=(u,f,d,_,x)=>{o=Math.min(o,_),_<ts-1e-9&&a(u,f,d,`overhangs the recess lip (v0 ${_.toFixed(4)} < ${ts})`),x>dr+1e-9&&a(u,f,d,`overhangs the inner lip (v1 ${x.toFixed(4)} > ${dr.toFixed(3)})`)},l=(u,f,d,_,x,m)=>{c(u,f,d,x,m);const p=Math.abs(f)+_;Math.min(zo(p,x),zo(p,m))<-1e-9&&a(u,f,d,"runs off the field")},h=(u,f,d,_)=>{c(u,f,d,d-_,d+_),zo(f,d)<_-1e-9&&a(u,f,d,`runs off the field (clear ${zo(f,d).toFixed(4)} < r ${_})`)};for(const[u,f,d,_={}]of e.ctl)switch(u){case"toggle":case"guarded":{const x=u==="guarded",[m,p]=$u(d,_.tilt,Hc,Go),v=x?.0225:.017;l(u,f,d,x?.0265:.017,Math.min(m,d-v),Math.max(p,d+v)),s(n,rn,i.CHROME,f,d,me+.0025,[.032,.03,.005]);const M=Math.PI/2+_.tilt,y=Math.cos(M),R=Math.sin(M);ju(u,M,M),s(n,rn,i.CHROME,f,d+y*(zc/2+.004),me+.005+R*(zc/2+.004),[.008,zc,.008],[M,0,0]),s(n,Xu,i.CHROME,f,d+y*Hc,me+.005+R*Hc,[Go*2,Go*2,Go*2]),x&&(s(n,rn,i.CHROME,f-.024,d,me+.02,[.005,.044,.04]),s(n,rn,i.CHROME,f+.024,d,me+.02,[.005,.044,.04]),s(n,rn,i.CHROME,f,d-.02,me+.02,[.053,.005,.04]));break}case"button":{h("button",f,d,_.r+.004),s(n,Bc,i.CHROME,f,d,me+.004,[_.r*2+.008,.008,_.r*2+.008],[Math.PI/2,0,0]),_.lamp?r.push(Gc(t,f,d,_.r*1.55,_.r*1.55,r.length)):s(n,Bc,i.CHROME,f,d,me+.012,[_.r*2,.016,_.r*2],[Math.PI/2,0,0]);break}case"dial":{h("dial",f,d,Math.max(_.r+.012,(_.needle||0)/2)),s(n,Bc,i.CHROME,f,d,me+.006,[_.r*2,.012,_.r*2],[Math.PI/2,0,0]);const x=_.r+.008;for(let m=0;m<8;m++){const p=m*Math.PI/4;s(n,rn,i.CHROME,f+x*Math.cos(p),d+x*Math.sin(p),me+.003,[.004,.011,.006],[0,0,p-Math.PI/2])}s(n,sS,i.CHROME,f,d,me+.016,[_.r*.42,.018,_.r*.42],[Math.PI/2,0,0]),_.needle&&r.push({pi:t,kind:"needle",x:f,v:d,z:me+.016,sx:.006,sy:_.needle,sz:.005,rz:0,spin:(t*1.7+_.needle*37)%(Math.PI*2),rate:_.rate??.2});break}case"lever":{const x=Math.PI/2+_.lean,m=Math.cos(x),p=Math.sin(x),v=_.big?.038:.03,M=_.big?.03:.022,y=d-Math.sign(m)*(_.slot/2-.012),R=.034,A=.044,E=me+R/2,P=me+.024,[C,g]=$u(y,_.lean,_.len+.01,M);l("lever",f,d,Math.max(v,A)/2+.007,Math.min(C,d-_.slot/2,y-A/2),Math.max(g,d+_.slot/2,y+A/2)),s(n,rn,i.DARK,f,d,me+.0015,[v,_.slot,.003]),s(n,rn,i.CHROME,f,y,E,[v+.02,A,R]),ju("lever",x,x),s(n,rn,i.CHROME,f,y+m*(_.len/2),P+p*(_.len/2),[_.big?.016:.012,_.len,_.big?.016:.012],[x,0,0]),s(n,Xu,i.CHROME,f,y+m*(_.len+.01),P+p*(_.len+.01),[M*2,M*2,M*2]);break}case"bar":{l("bar",f,d,_.w/2+.005,d-.005,d+_.h+.005),Ku(n,i,s,f,d+_.h/2,_.w,_.h);const x=Math.max(1,Math.round(_.w/.052)),m=(_.w-.012)/x;for(let p=0;p<x;p++)r.push({pi:t,kind:"bar",x:f-_.w/2+.006+m*(p+.5),v:d+.004,z:me+.005,sx:m*.72,sy:_.h-.01,sz:.006,rz:0,rate:.7+p*.23,phase:p*1.7+t});break}case"readout":{l("readout",f,d,_.w/2+.005,d-_.h/2-.005,d+_.h/2+.005),Ku(n,i,s,f,d,_.w,_.h);const x=_.seg??2,m=(_.w-.012)/x;for(let p=0;p<x;p++)r.push({pi:t,kind:"bar",x:f-_.w/2+.006+m*(p+.5),v:d-_.h/2+.005,z:me+.005,sx:m*.66,sy:_.h-.012,sz:.006,rz:0,rate:1.4+p*.6+t*.11,phase:p*2.3+t*.8});break}case"lamps":{for(let x=0;x<_.n;x++){const m=f+x*_.pitch;l("lamp",m,d,.02,d-.016,d+.016),s(n,rn,i.CHROME,m,d,me+zr/2,[.04,.032,zr]),r.push(Gc(t,m,d,.03,.022,r.length))}break}case"column":{for(let x=0;x<_.n;x++){const m=d+x*_.pitch;l("column lamp",f,m,.017,m-.012,m+.012),s(n,rn,i.CHROME,f,m,me+zr/2,[.034,.024,zr]),r.push(Gc(t,f,m,.024,.015,r.length))}break}default:console.error(`Console.js: panel ${e.n} has an unknown control kind '${u}'`)}return o}function Ku(n,t,e,i,s,r,o){const c=me+.003;e(n,rn,t.CHROME,i,s+o/2,c,[r+.005*2,.005,.007]),e(n,rn,t.CHROME,i,s-o/2,c,[r+.005*2,.005,.007]),e(n,rn,t.CHROME,i-r/2-.005/2,s,c,[.005,o,.007]),e(n,rn,t.CHROME,i+r/2+.005/2,s,c,[.005,o,.007])}function Gc(n,t,e,i,s,r){return{pi:n,kind:"lamp",x:t,v:e,z:Zd,sx:i,sy:s,sz:q0,rz:0,slot:r}}const uS=1/Math.cos(Math.PI/6),Pr={y0:1.16,y1:1.32,apothem:.56},Dr={y0:2.36,y1:2.48,apothem:.3},bn={y0:1.32,y1:2.36,r:.26,segments:24},fS=.008,De={y0:1.4,y1:2.32,h:.62,r:.2,ringR:.214,ringH:.03,pistonR:.038,pistonH:.42},dS=De.y1-De.y0-De.h,Vc=De.y0+De.h/2,pS=De.y1-De.h/2,Or={count:6,radius:.31,section:.028},mS=3.2,_S=1.6,gS=2.4;function Zu(n,t){const e=n*uS,i=new ee(e,e,t,6,1,!1,et.HEX_THETA).toNonIndexed();return i.computeVertexNormals(),i}function xS(n){const t=n.getIndex();for(let i=0;i<t.count;i+=3){const s=t.getX(i+1);t.setX(i+1,t.getX(i+2)),t.setX(i+2,s)}t.needsUpdate=!0;const e=n.getAttribute("normal");for(let i=0;i<e.count;i++)e.setXYZ(i,-e.getX(i),-e.getY(i),-e.getZ(i));return e.needsUpdate=!0,n}function vS(n,t){io(t.GLASS);const e=bn.y1-bn.y0,i=(bn.y0+bn.y1)/2,s=new Dt(new ee(bn.r,bn.r,e,bn.segments,1,!0),t.GLASS);if(s.position.y=i,n.add(s),t.GLASS.side===$n){const r=bn.r-fS,o=new Dt(xS(new ee(r,r,e,bn.segments,1,!0)),t.GLASS);o.position.y=i,n.add(o)}}function MS(n){const t=new Me,e=De.h/3,i=e-De.ringH,s=new ee(De.ringR,De.ringR,De.ringH,20,1,!1),r=new ee(De.r,De.r,i,20,1,!1);for(let c=0;c<3;c++){const l=-.31+c*e,h=new Dt(s,n.CHROME);h.position.y=l+De.ringH/2,t.add(h);const u=new Dt(r,n.GLOW_C);u.position.y=l+De.ringH+i/2,t.add(u)}const o=new Dt(new ee(De.pistonR,De.pistonR,De.pistonH,12,1,!1),n.CHROME);o.position.y=-.62/2-De.pistonH/2,t.add(o);const a=Fa(t);return a.name="rotorCarriage",a}function SS(n,t,e={}){const i=e.period??mS,s=e.stroke??dS,r=Math.PI*2/i;if(e.collar!==!1){const x=new Dt(Zu(Pr.apothem,Pr.y1-Pr.y0),t.CONSOLE);x.position.y=(Pr.y0+Pr.y1)/2,n.add(x)}vS(n,t);const o=new $e(Or.section,bn.y1-bn.y0,Or.section);for(let x=0;x<Or.count;x++){const m=et.HEX_THETA+x*Math.PI/3,p=new Dt(o,t.DAIS);p.position.set(Math.sin(m)*Or.radius,(bn.y0+bn.y1)/2,Math.cos(m)*Or.radius),p.rotation.y=m,n.add(p)}if(e.cap!==!1){const x=new Dt(Zu(Dr.apothem,Dr.y1-Dr.y0),t.CONSOLE);x.position.y=(Dr.y0+Dr.y1)/2,n.add(x)}n.interactables.some(x=>x.id==="rotor")||n.interact("rotor","Time Rotor",0,1.84,0,"rotor",{},2.4);const a=new Me;a.name="timeRotor";const c=MS(t);a.add(c);let l=e.running?1:0,h=l,u=l,f=0,d=Vc+s*u*.5*(1-Math.cos(f));c.position.y=d;function _(x){x>0&&(x>.1&&(x=.1),h>l?l=Math.min(1,l+x/_S):h<l&&(l=Math.max(0,l-x/gS)),u=l*l*(3-2*l),l===0?f=0:f=(f+r*(.45+.55*u)*x)%(Math.PI*2),d=Vc+s*u*.5*(1-Math.cos(f)),c.position.y=d)}return{group:a,setRunning(x){h=x?1:0},update:_,get height(){return d},get drive(){return u},get running(){return h===1},parked:Vc,apex:pS}}const ze=(et==null?void 0:et.BAY_CENTRE)??2.362686,Hr=(et==null?void 0:et.BAY_W)??1.4,ms=(et==null?void 0:et.BAY_D)??.34,Dn=(et==null?void 0:et.BAY_H)??2.2;et==null||et.CANT_LEN;const nr=Hr/2,ir=ms/2,Ju={scanner:{x:ze,z:ze,rotY:-2.356194},fault:{x:-ze,z:ze,rotY:2.356194},food:{x:ze,z:-ze,rotY:-.785398}},Ji=ir,Xn=.05,Qd=.052,yS=.076,u0=.095,Wc=.6,f0=.78,Qu=.018,ES=.35,wS=1.2,d0=1.785,_s=8,ya=6,tp=.1375,ep=.15,AS=.02,np=1.55,Kr=_s*ya,bS=4,TS=2,RS=0,LS=1,CS=2,IS=3,PS=Kr,DS=Kr+1,OS=Kr+2,NS=n=>n*n*(3-2*n),Ne={unitBox:tf(new $e(1,1,1)),unitDisc:tf(new vs(1,20)),rotary:new ee(.034,.038,.03,12),rotaryCap:new ee(.012,.012,.014,8),pilot:new ee(.014,.014,.01,10),hook:new ee(.009,.009,.1,8),hookBall:new Ms(.016,8,6),finial:new Ms(.044,10,8),standBase:new ee(.12,.28,.045,16),standTaper:new ee(.046,.12,.16,12),standPole:new ee(.028,.034,1.42,12),standCollar:new ee(.056,.056,.052,12),hatCrown:new ee(.088,.094,.105,12),hatBrim:new ee(.15,.15,.012,16),dial:new ee(.128,.128,.022,20),clockFinial:new ee(.024,.034,.052,10),packet:new ee(.028,.028,.11,8)};function tf(n){const t=n.attributes.position.count;return n.setAttribute("color",new le(new Float32Array(t*3).fill(1),3)),n}function Pt(n,t,e,i,s,r,o,a,c={}){const l=new Dt(c.chamfer===0?new $e(Math.max(e,.001),Math.max(i,.001),Math.max(s,.001)):Ss(e,i,s,c.chamfer??.003),t);return l.position.set(r,o,a),c.rotX&&(l.rotation.x=c.rotX),c.rotY&&(l.rotation.y=c.rotY),c.rotZ&&(l.rotation.z=c.rotZ),l.receiveShadow=!0,n.add(l),l}function qe(n,t,e,i,s,r,o={}){const a=new Dt(t,e);return a.position.set(i,s,r),o.rotX&&(a.rotation.x=o.rotX),o.rotY&&(a.rotation.y=o.rotY),o.rotZ&&(a.rotation.z=o.rotZ),o.scale&&a.scale.set(o.scale[0],o.scale[1],o.scale[2]),a.receiveShadow=!0,n.add(a),a}function $0(n,t,e,i,s,r,o,a,c){const l=c-a/2;Pt(n,t,e,o,a,s,r+i/2-o/2,l,{chamfer:.002}),Pt(n,t,e,o,a,s,r-i/2+o/2,l,{chamfer:.002});const h=i-o*2;Pt(n,t,o,h,a,s-e/2+o/2,r,l,{chamfer:.002}),Pt(n,t,o,h,a,s+e/2-o/2,r,l,{chamfer:.002})}function j0(n,t,e){Pt(n,t.DAIS,Hr-.06,.1,ms-.06,0,.05,0,{chamfer:.004}),Pt(n,t.CONSOLE,Hr,Dn-.1,.06,0,1.15,-ir+.03);for(const a of[-1,1])Pt(n,t.CONSOLE,.11,Dn-.1,ms,a*(nr-.055),1.15,0,{chamfer:.005});Pt(n,t.CONSOLE,Hr,.03,ms,0,Dn-.015,0,{chamfer:.005});const i=Hr-.22,s=(Ji+Xn)/2,r=Ji-Xn;let o=.1;for(const a of e){a[0]>o+.001&&Pt(n,t.CONSOLE,i,a[0]-o,r,0,(o+a[0])/2,s,{chamfer:.004});const c=a[2]??Xn;if(Pt(n,t.DARK,i,a[1]-a[0],.014,0,(a[0]+a[1])/2,c-.007,{chamfer:0}),c<Xn-.001){const l=Xn-c;for(const h of[-1,1])Pt(n,t.DARK,.014,a[1]-a[0],l,h*(i/2-.007),(a[0]+a[1])/2,c+l/2,{chamfer:0});for(const h of[-1,1])Pt(n,t.DARK,i,.014,l,0,a[h>0?1:0]-h*.007,c+l/2,{chamfer:0})}o=a[1]}return o<Dn-.031&&Pt(n,t.CONSOLE,i,Dn-.03-o,r,0,(o+Dn-.03)/2,s,{chamfer:.004}),{innerW:i,zA:s,dA:r}}function ip(n,t,e,i,s){return Pt(n,t.PANEL,e,i,.016,0,s,Ji-.028,{chamfer:.003})}function US(n,t){j0(n,t,[[1.4,2.17]]),Pt(n,t.GLOW_C,1.1,.72,.01,0,1.8,Qd-.005,{chamfer:0});const e=.0535,i=1.495;Pt(n,t.DARK,1.1,i-1.442,.003,0,(i+1.442)/2,e,{chamfer:0});for(const[l,h,u]of[[-.34,.42,.018],[.05,.32,.031],[.38,.34,.012]])Pt(n,t.DARK,h,u,.003,l,i+u/2,e,{chamfer:0});$0(n,t.CHROME,1.16,.75,0,1.795,.03,.024,yS);const s=.962,r=s-nr,o=.245,a=1.34;for(const l of[-1,1]){const h=l*(nr+r/2);Pt(n,t.DAIS,r-.03,.1,ms-.06,h,.05,0,{chamfer:.004}),Pt(n,t.CONSOLE,r,a-.1,ms,h,(.1+a)/2,0,{chamfer:.005}),Pt(n,t.CONSOLE,r,Dn-a,o,h,(a+Dn)/2,-ir+o/2,{chamfer:.005})}Pt(n,t.CONSOLE,s*2,.03,ms,0,Dn+.015,0,{chamfer:.005});for(const l of[-1,1])Pt(n,t.CHROME,s*2-.012,.016,.022,0,d0+l*(f0/2+.012),u0,{chamfer:.002});const c=new Me;c.position.set(0,1.07,.118),c.rotation.x=-.436,n.add(c),Pt(c,t.PANEL,1.18,.2,.02,0,0,0,{chamfer:.004});for(let l=0;l<3;l++){const h=-.36+l*.36;qe(c,Ne.rotary,t.CHROME,h,.03,.025,{rotX:Math.PI/2}),qe(c,Ne.rotaryCap,t.CHROME,h,.03,.046,{rotX:Math.PI/2})}for(let l=0;l<2;l++){const h=-.18+l*.36;Pt(c,t.DARK,.07,.034,.014,h,-.052,.014,{chamfer:.002}),Pt(c,t.CHROME,.018,.04,.014,h,-.046,.016,{rotZ:.35,chamfer:.002})}for(const l of[-1,1])qe(c,Ne.pilot,t.GLOW_C,l*.52,.03,.014,{rotX:Math.PI/2})}function FS(n,t){j0(n,t,[[1.1,2.06]]);const e=np,i=Xn+.008;for(let s=0;s<=_s-2;s++)Pt(n,t.CHROME,.006,.9,.016,(s-3)*tp,e,i,{chamfer:0});for(let s=0;s<=ya-2;s++)Pt(n,t.CHROME,1.1,.006,.016,0,e+(s-2)*ep,i,{chamfer:0});$0(n,t.CHROME,1.16,.96,0,e,.028,.02,Xn+.02),ip(n,t,1.18,.14,1.03),Pt(n,t.DARK,.9,.05,.02,0,1.05,Ji-.04,{chamfer:0}),Pt(n,t.CHROME,.94,.014,.024,0,1.016,Ji-.018,{chamfer:.002});for(let s=0;s<6;s++)Pt(n,t.DAIS,.15,.036,.014,-.475+s*.19,2.115,Ji-.02,{chamfer:.002})}function kS(n,t){j0(n,t,[[.74,.98,0],[1.27,1.93,-.1]]),Pt(n,t.DAIS,.47,.014,.17,0,.793,.082,{chamfer:.002}),Pt(n,t.DAIS,.47,.03,.014,0,.812,.15,{chamfer:.002}),Pt(n,t.DARK,.44,.04,.016,0,.95,Xn-.03,{chamfer:0}),Pt(n,t.CHROME,.48,.014,.02,0,.926,Xn-.014,{chamfer:.002}),ip(n,t,1.18,.2,1.2);for(let i=0;i<4;i++)for(let s=0;s<3;s++)Pt(n,t.CHROME,.09,.028,.014,-.4125+i*.275,1.14+s*.05,Ji-.013,{chamfer:.002});const e=new Dt(new Ii(.9,.6),t.GLASS);e.position.set(0,1.6,.1),e.receiveShadow=!0,n.add(e),$0(n,t.CHROME,.96,.66,0,1.6,.03,.026,.126);for(const i of[1.42,1.68]){Pt(n,t.DAIS,.86,.014,.18,0,i,0,{chamfer:0});for(let s=0;s<3;s++)qe(n,Ne.packet,t.DAIS,-.26+s*.26,i+.062,.01)}for(let i=0;i<5;i++)Pt(n,t.DAIS,.6,.014,.02,0,2.01+i*.03,Ji-.016,{rotX:-.35,chamfer:0})}function BS(n,t){qe(n,Ne.standBase,t.JOINERY,0,.0225,0),qe(n,Ne.standTaper,t.JOINERY,0,.125,0),qe(n,Ne.standPole,t.JOINERY,0,.915,0),qe(n,Ne.standCollar,t.JOINERY,0,1.62,0),qe(n,Ne.finial,t.JOINERY,0,1.676,0);for(let i=0;i<4;i++){const s=new Me;s.rotation.y=Math.PI/4+i*Math.PI/2,n.add(s),qe(s,Ne.hook,t.CHROME,0,1.64,.075,{rotX:1.05}),qe(s,Ne.hookBall,t.CHROME,0,1.665,.118)}const e=new Me;e.position.set(.098,1.612,.098),e.rotation.set(.3,Math.PI/4,.1),n.add(e),qe(e,Ne.hatCrown,t.JOINERY,0,.052,0),qe(e,Ne.hatBrim,t.JOINERY,0,.006,0)}function zS(n,t){Pt(n,t.JOINERY,.56,.055,.52,0,.44-.028,.02,{chamfer:.008});for(const i of[-1,1])Pt(n,t.JOINERY,.05,.44-.055,.05,i*.255,(.44-.055)/2,.23,{chamfer:.005}),Pt(n,t.JOINERY,.052,1.15,.052,i*.255,.575,-.222,{rotX:-.06,chamfer:.005});Pt(n,t.JOINERY,.46,.52,.038,0,.81,-.202,{rotX:-.06,chamfer:.006}),Pt(n,t.JOINERY,.59,.105,.062,0,1.098,-.24,{rotX:-.06,chamfer:.008});for(let i=0;i<3;i++)for(let s=0;s<2;s++)qe(n,Ne.rotaryCap,t.CHROME,-.14+i*.14,.72+s*.18,-.18+(.72+s*.18-.81)*.06,{rotX:Math.PI/2-.06});Pt(n,t.JOINERY,.56,.07,.04,0,.377,.255,{chamfer:.004}),Pt(n,t.JOINERY,.5,.028,.028,0,.15,.03,{chamfer:.003})}function HS(n,t){Pt(n,t.JOINERY,.52,.06,.42,0,.03,0,{chamfer:.006}),Pt(n,t.JOINERY,.44,.63,.34,0,.375,0,{chamfer:.005}),Pt(n,t.JOINERY,.52,.06,.42,0,.72,0,{chamfer:.006}),Pt(n,t.JOINERY,.36,.48,.24,0,.99,0,{chamfer:.006}),Pt(n,t.JOINERY,.4,.07,.28,0,1.265,0,{chamfer:.006}),qe(n,Ne.clockFinial,t.JOINERY,0,1.326,0),qe(n,Ne.dial,t.CHROME,0,1.01,.125,{rotX:Math.PI/2}),Pt(n,t.DARK,.014,.088,.01,0,1.048,.14,{chamfer:0}),Pt(n,t.DARK,.062,.012,.01,.025,1.01,.14,{rotZ:.35,chamfer:0});for(const e of[-1,1])qe(n,Ne.rotaryCap,t.CHROME,e*.19,1.265,.1)}const Nr=new Vt,GS=new Vt,VS=new z;function Ws(n,t,e,i,s,r,o,a,c,l=0){l?(Nr.makeRotationX(l),Nr.scale(VS.set(o,a,c))):Nr.makeScale(o,a,c),Nr.setPosition(i,s,r),n.setMatrixAt(t,GS.multiplyMatrices(e,Nr))}const sp=[];for(let n=0;n<ya;n++)for(let t=0;t<_s;t++)sp.push({x:(t-(_s-1)/2)*tp,y:np+(n-(ya-1)/2)*ep});const qs=.001,WS=n=>Math.imul(n+1,2654435761)>>>0;function qS(n,t,e){const i=WS(n);if(e){const s=n%_s,r=Math.floor(t*9)%_s;return s===r||s===(r+4)%_s?!0:(i>>>(Math.floor(t*6)&15)&1)===1}return((i>>>3)+Math.floor(t/.9))%11<2}function XS(n,t){const e=t||Wd(),i={};for(const C of Object.keys(Ju)){const g=Ju[C],S=new Me;S.name=`bay.${C}`,S.position.set(g.x,0,g.z),S.rotation.y=g.rotY,n.add(S),i[C]=new Vt().makeRotationY(g.rotY).setPosition(g.x,0,g.z),C==="scanner"?US(S,e):C==="fault"?FS(S,e):kS(S,e)}const s=[{name:"hatStand",x:-1.525,z:-2.6413,rotY:0,build:BS},{name:"chair",x:-2.5115,z:-1.45,rotY:1.047198,build:zS},{name:"clock",x:-2.192,z:-2.192,rotY:.785398,build:HS}];for(const C of s){const g=new Me;g.name=C.name,g.position.set(C.x,0,C.z),g.rotation.y=C.rotY,n.add(g),C.build(g,e)}const r=new Me;r.name="fittings.live";const o=new ga(Ne.unitBox,e.DARK,IS),a=new ga(Ne.unitDisc,e.GLOW_C,OS);for(const C of[o,a])C.instanceMatrix.setUsage(Yr),C.frustumCulled=!1,C.castShadow=!1,C.receiveShadow=!0,r.add(C);let c=0,l=0,h=!0,u=-1,f=-1,d=0;const _=new Uint8Array(Kr).fill(255);function x(){const C=NS(c)*ES;Ws(o,RS,i.scanner,-.3-C,d0,u0,Wc,f0,Qu),Ws(o,LS,i.scanner,Wc/2+C,d0,u0,Wc,f0,Qu);const g=h?qs:1;Ws(o,CS,i.scanner,0,1.8,Qd+.006,1.1*g,.72*g,.006),o.instanceMatrix.needsUpdate=!0}function m(){const C=f>=0&&f<.9&&(Math.floor(f*14)&1)===0;Ws(a,PS,i.food,0,.95,Xn-.018,C?.22:qs,C?.014:qs,1);const g=f;let S=-1;if(g>=.15&&g<1.75){const L=Math.min((g-.15)/.4,1);S=.945+(.805-.945)*(L*L)}const b=S>0;Ws(a,DS,i.food,0,b?S:.805,.07,b?.05:qs,b?.013:qs,1,-Math.PI/2)}function p(C){const g=u>=0;let S=C;for(let b=0;b<Kr;b++){const L=qS(b,d,g)?1:0;if(L===_[b]&&!C)continue;_[b]=L;const O=sp[b],k=L?AS:qs;Ws(a,b,i.fault,O.x,O.y,Xn+.006,k,k,1),S=!0}return S}x(),m(),p(!0),a.instanceMatrix.needsUpdate=!0;const v=n.userData.collision||(n.userData.collision={planes:[],hulls:[],boxes:[]});v.boxes||(v.boxes=[]),v.boxes.push({x:ze,z:ze,hw:nr,hd:ir,rotY:-2.356194,y0:0,y1:Dn},{x:-ze,z:ze,hw:nr,hd:ir,rotY:2.356194,y0:0,y1:Dn},{x:ze,z:-ze,hw:nr,hd:ir,rotY:-.785398,y0:0,y1:Dn},{x:-1.525,z:-2.6413,hw:.28,hd:.28,rotY:3.665191,y0:0,y1:1.72},{x:-2.5115,z:-1.45,hw:.31,hd:.34,rotY:1.047198,y0:0,y1:1.15},{x:-2.192,z:-2.192,hw:.25,hd:.2,rotY:.785398,y0:0,y1:1.35}),Gs(n,ze,ze,0,1.1,1.1,{margin:.06}),Gs(n,-ze,ze,0,1.1,1.1,{margin:.06}),Gs(n,ze,-ze,0,1.1,1.1,{margin:.06}),Gs(n,-2.192,-2.192,0,.58,.58,{margin:.05}),Gs(n,-1.525,-2.6413,0,.56,.56,{margin:.08}),Gs(n,-2.5115,-1.45,0,.66,.66,{margin:.05});const M=[["scanner","Scanner",2.242455,1.8,2.242455,1.535348,1.535348,1.2],["faultLocator","Fault Locator",-2.242455,1.55,2.242455,-1.535348,1.535348,1.2],["foodMachine","Food Machine",2.242455,1.2,-2.242455,1.535348,-1.535348,1.2],["hatStand","Hat Stand",-1.385,1.55,-2.3988,-.935,-1.619,1.05],["chair","Chair",-2.2171,.45,-1.28,-1.438,-.83,1.05],["clock","Ormolu Clock",-2.050579,1.1,-2.050579,-1.414182,-1.414183,1.05]];for(const[C,g,S,b,L,O,k,I]of M)n.spot(C,O,0,k),n.interact(C,g,S,b,L,C,{},I);function y(C){l=C?1:0}function R(C){h=!!C,x()}function A(){u=0}function E(){f=0}function P(C){const g=Math.min(Math.max(C||0,0),.1);if(d+=g,c!==l){const S=g/wS;c=l>c?Math.min(l,c+S):Math.max(l,c-S),x()}u>=0&&(u+=g,u>=bS&&(u=-1)),p(!1)&&(a.instanceMatrix.needsUpdate=!0),f>=0&&(f+=g,f>=TS&&(f=-1),m(),a.instanceMatrix.needsUpdate=!0)}return{group:r,setShutters:y,setScanner:R,pulseFault:A,dispense:E,update:P,get shuttersOpen(){return l===1},get scannerOn(){return h},get faultRunning(){return u>=0}}}const YS=n=>.6*Math.pow(n/100,.6),rp={candle1900:16764860,cool5000:16774121},op={fov:-6,rate:2.6},ef=16,ap=600,K0=YS(ap),cp=.9,Z0=et.CEIL_H-.15,za=2*Math.hypot(et.CORNER_X,et.STRUCT_FACE),nf=K0*(Z0-cp)**2/.88,lp=.22*K0*(za/2),hp=2.2*(za/2),up=za,Ea=2.8469,p0=lp/2,oa=1.2,fp=2.6,dp=2.2,$S=1.84,qc=[0,1.1,2.7],jS=3.4,KS=2.1,ZS=15265525,sf=2.8,rf=3.2,m0=16776681,_0=rp.cool5000,JS=13625599,QS=Object.freeze({lux:ap,E:K0,planeY:cp,keyY:Z0,diagonal:za,keyRef:nf,key:Ea,keyShare:Ea/nf,fillTotal:lp,fill:p0,keyDist:hp,fillDist:up,keyColour:_0,fillColour:m0,rotorIdle:oa,rotorFlight:fp,rotorDist:dp}),Nn=Object.freeze({hemisphere:Object.freeze({sky:16773344,ground:8092794,intensity:.5955}),ambient:Object.freeze({colour:16774116,intensity:.3767}),bounce:null,fog:null,shadows:!1,background:1316634,toneMapping:"ACESFilmicToneMapping",toneMappingExposure:1.4,outputColorSpace:"SRGBColorSpace",camera:Object.freeze({fov:64+op.fov,near:.2,far:60})}),Zr=.21,J0=.06,Q0=24,g0=et.CEIL_H-J0,ty=g0+.0015,ey=new ee(Zr,Zr,J0,Q0,1,!0),ny=new Pa(Zr-.025,Zr,Q0),iy=new vs(Zr-.025,Q0),of=Math.PI/2,wa=n=>Math.abs(n)<1e-9?0:Math.round(n*1e9)/1e9,Aa=[];for(let n=0;n<4;n++){const t=n*Math.PI/2;Aa.push([wa(Math.sin(t)*sf),wa(Math.cos(t)*sf)])}for(let n=0;n<4;n++){const t=Math.PI/4+n*Math.PI/2;Aa.push([wa(Math.sin(t)*rf),wa(Math.cos(t)*rf)])}const af=.02,cf=4,pp=op.rate,sy=3.2,ry=.05,oy=1.4,ay=.4,lf=.55,cy=.25,ly=.6;function hy(n,t,e){const i=Math.min(1,e*pp);return n<=1e-6?t*i:n*Math.pow(t/n,i)}function uy(n,t,e={}){if(!t||!t.CHROME||!t.GLOW_W)throw new Error("lighting(): needs the palette from src/engine/roundels.js (P.CHROME and P.GLOW_W). Call palette() first, or use buildLighting(b).");const i=[];for(const[C,g]of Aa){const S=new Dt(ey,t.CHROME);S.position.set(C,g0+J0/2,g),S.name="panTube",i.push(n.add(S));const b=new Dt(ny,t.CHROME);b.position.set(C,g0,g),b.rotation.x=of,b.name="panBezel",i.push(n.add(b));const L=new Dt(iy,t.GLOW_W);L.position.set(C,ty,g),L.rotation.x=of,L.name="panFace",i.push(n.add(L))}const s=Aa.map(([C,g],S)=>{const b=n.light(C,Z0,g,_0,Ea,hp);return b.name=`key${S}`,b}),r=new Na(m0,p0,up,1);r.position.set(0,1.1,0),r.name="fill",n.group.add(r),n.lights.push(r);const o=n.light(0,$S,0,JS,oa,dp);o.name="rotorPractical";const a=n.light(qc[0],qc[1],qc[2],ZS,0,jS);a.name="doorSpill",n.lights.length>ef&&console.warn(`lighting(): ${n.lights.length} fixtures against POOL_SIZE ${ef}; the room is planned for 10 and the count is meant to be frozen.`);const c=t.GLOW_W.emissiveIntensity??1;let l=Vo(e.level??1,af,cf),h=l,u=Vo(e.rotorDrive??0,0,1),f=u,d=0,_=0,x=0,m=0,p=6,v=0,M=0;const y=new Ot(_0),R=new Ot(m0),A=new Ot(rp.candle1900),E=new Ot;function P(){const C=d>0?1-ay*d*(.5-.5*Math.cos(2*Math.PI*M/oy)):1,g=l*C;for(const b of s)b.intensity=Ea*g,d>0?b.color.copy(E.copy(y).lerp(A,lf*d)):b.color.copy(y);r.intensity=p0*g,d>0?r.color.copy(E.copy(R).lerp(A,lf*d)):r.color.copy(R);const S=u>0?1+ry*u*Math.sin(2*Math.PI*M/sy):1;o.intensity=(oa+(fp-oa)*u)*l*S,a.intensity=KS*v,m>0&&(t.GLOW_W.emissiveIntensity=c*(1+m*Math.sin(2*Math.PI*M/p)))}return P(),{keys:s,fill:r,rotor:o,spill:a,pans:i,plan:QS,scene:Nn,get level(){return l},setLevel(C){h=Vo(C,af,cf)},setRotorDrive(C){f=Vo(C,0,1)},setDoorSpill(C){v=C>0?C<1?C:1:0},setDoorSpillColour(C){return C!=null&&a.color.set(C),this},setAlert(C){_=C?1:0,x=C?1/0:0},pulseAlert(C=4){_=1,x=C},setGlowBreath(C,g=6){m=Math.max(0,Math.min(.6,C||0)),p=Math.max(.5,g),m===0&&(t.GLOW_W.emissiveIntensity=c)},update(C){const g=Math.min(Math.max(C||0,0),.25);M+=g,x!==1/0&&x>0&&(x-=g,x<=0&&(x=0,_=0)),l=hy(l,h,g),Math.abs(l-h)<1e-4&&(l=h),u+=(f-u)*Math.min(1,g*pp),Math.abs(u-f)<1e-4&&(u=f);const S=_>d?g/cy:g/ly;d+=Math.sign(_-d)*Math.min(Math.abs(_-d),S),P()},dispose(){t.GLOW_W.emissiveIntensity=c}}}function Vo(n,t,e){return n<t?t:n>e?e:n}const ye={RADIUS:.34,HEIGHT:1.75,EYE:1.62,STEP:.42,GRAVITY:22,SPEED:2.6,RUN:4.2},fy=14,dy=3,hf=.0022,uf=Math.PI/2-.05,py=.72,my=6,_y=.06,gy=.1,xy=1500,aa=[];for(let n=0;n<6;n++){const t=n*Math.PI/3;aa.push({nx:Math.sin(t),nz:Math.cos(t)})}const Yi=[],x0={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],interact:["KeyE"]},vy=new Set(Object.values(x0).flat());function th(n,t,e,i={}){const s=i.radius??ye.RADIUS,r=i.y??0,o=i.height??ye.HEIGHT,a=i.onPush||null;let c=0;const l=(n==null?void 0:n.planes)||Yi;for(let f=0;f<l.length;f++){const d=l[f],_=t*d.nx+e*d.nz,x=d.d-s;if(_<=x)continue;const m=_-x;t-=d.nx*m,e-=d.nz*m,c++,a&&a(-d.nx,-d.nz)}const h=(n==null?void 0:n.hulls)||Yi;for(let f=0;f<h.length;f++){const d=h[f],_=d.y0??0;if(r+o<=_||r>=d.y1)continue;let x=0,m=-1/0;for(let y=0;y<6;y++){const R=t*aa[y].nx+e*aa[y].nz;R>m&&(m=R,x=y)}const p=d.apothem+s;if(m>=p)continue;const v=aa[x],M=p-m;t+=v.nx*M,e+=v.nz*M,c++,a&&a(v.nx,v.nz)}const u=(n==null?void 0:n.boxes)||Yi;for(let f=0;f<u.length;f++){const d=u[f],_=d.y0??0;if(r+o<=_||r>=d.y1)continue;const x=Math.cos(d.rotY),m=Math.sin(d.rotY),p=t-d.x,v=e-d.z,M=p*x-v*m,y=p*m+v*x,R=d.hw+s,A=d.hd+s,E=R-Math.abs(M),P=A-Math.abs(y);if(E<=0||P<=0)continue;let C=0,g=0,S;E<P?(C=M>=0?1:-1,S=E):(g=y>=0?1:-1,S=P);const b=C*x+g*m,L=-C*m+g*x;t+=b*S,e+=L*S,c++,a&&a(b,L)}return{x:t,z:e,contacts:c}}function My(n,t,e,i={}){const s=(i.radius??ye.RADIUS)-(i.tolerance??_y);return th(n,t,e,{radius:s,y:i.y,height:i.height}).contacts>0}class Sy{constructor(t,e,i={}){var c,l;this.camera=t,this.build=e,this.dom=i.dom||(typeof document<"u"?document.body:null),this.collision=((c=e==null?void 0:e.userData)==null?void 0:c.collision)||null,this.collision||(console.warn("[walker] build.userData.collision is missing — the player will walk through the walls. Shell.js publishes it (CONSOLEROOM.md §8.7)."),this.collision={planes:Yi,hulls:Yi,boxes:Yi}),this.position=new z,this.velocity=new z,this.yaw=0,this.pitch=0,this.onGround=!0,this.horizontalSpeed=0,this.prompt=null,this.driveCamera=!0,this._locked=!1,this._lockPending=!1,this._lockTimer=0,this._down=new Set,this._pressed=new Set,this._mouseDX=0,this._mouseDY=0,this._target=null,this._targetLabel=null,this._interactFns=[],this._pauseFns=[],this._bob=0,this._lastSafe=new z,this._warnedFloor=!1,this._fwd=new z,this._dir=new z,this._killInto=(h,u)=>{const f=this.velocity.x*h+this.velocity.z*u;f<0&&(this.velocity.x-=h*f,this.velocity.z-=u*f)};const s=i.spawn||((l=e==null?void 0:e.spots)==null?void 0:l.spawn)||et.SPAWN,r=s.x??s[0]??0,o=s.y??s[1]??0,a=s.z??s[2]??0;this.teleport(r,o,a,i.yaw??et.SPAWN_YAW),this._attach()}_attach(){var t;typeof window>"u"||(this._h={keydown:e=>{e.repeat||(this._locked&&vy.has(e.code)&&e.preventDefault(),this._down.add(e.code),this._pressed.add(e.code))},keyup:e=>this._down.delete(e.code),blur:()=>this._clearHeld(),focus:()=>this._clearHeld(),visibility:()=>{document.hidden&&this._clearHeld()},mousemove:e=>{this._locked&&(this._mouseDX+=e.movementX,this._mouseDY+=e.movementY)},mousedown:e=>{this._pressed.add("Mouse"+e.button),this._down.add("Mouse"+e.button)},mouseup:e=>this._down.delete("Mouse"+e.button),domdown:()=>{this._locked||this.requestLock()},lockchange:()=>{this._settleLock(),this._setLocked(document.pointerLockElement===this.dom)},lockerror:e=>this._failLock(e)},window.addEventListener("keydown",this._h.keydown),window.addEventListener("keyup",this._h.keyup),window.addEventListener("blur",this._h.blur),window.addEventListener("focus",this._h.focus),document.addEventListener("visibilitychange",this._h.visibility),window.addEventListener("mousemove",this._h.mousemove),window.addEventListener("mousedown",this._h.mousedown),window.addEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.addEventListener("mousedown",this._h.domdown),document.addEventListener("pointerlockchange",this._h.lockchange),document.addEventListener("pointerlockerror",this._h.lockerror))}dispose(){var t;this._settleLock(),!(typeof window>"u"||!this._h)&&(window.removeEventListener("keydown",this._h.keydown),window.removeEventListener("keyup",this._h.keyup),window.removeEventListener("blur",this._h.blur),window.removeEventListener("focus",this._h.focus),document.removeEventListener("visibilitychange",this._h.visibility),window.removeEventListener("mousemove",this._h.mousemove),window.removeEventListener("mousedown",this._h.mousedown),window.removeEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.removeEventListener("mousedown",this._h.domdown),document.removeEventListener("pointerlockchange",this._h.lockchange),document.removeEventListener("pointerlockerror",this._h.lockerror),this._h=null,this._interactFns.length=0,this._pauseFns.length=0,this._locked&&this.releaseLock())}get locked(){return this._locked}get paused(){return!this._locked}get stepPhase(){return this._bob}onPause(t){return t&&this._pauseFns.push(t),this}requestLock(){var e,i;if(this._locked||this._lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this._lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this._lockPending=!1},xy);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=t==null?void 0:t.catch)==null||i.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this._setLocked(!1),typeof document<"u"&&((t=document.exitPointerLock)==null||t.call(document))}_settleLock(){this._lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this._lockPending;this._settleLock(),e&&(this._setLocked(!1),console.warn("[walker] pointer lock refused; staying paused",t||""))}_setLocked(t){if(this._locked!==t){this._locked=t,this._clearHeld(),t||this._setTarget(null);for(const e of this._pauseFns)e(!t)}}_clearHeld(){this._down.clear(),this._pressed.clear(),this._mouseDX=0,this._mouseDY=0}_isDown(t){return x0[t].some(e=>this._down.has(e))}_wasPressed(t){return x0[t].some(e=>this._pressed.has(e))}update(t){if(t=Math.min(t,gy),!(t>0)){this._pressed.clear();return}if(this._locked&&(this.yaw-=this._mouseDX*hf,this.pitch-=this._mouseDY*hf,this.pitch=Math.max(-uf,Math.min(uf,this.pitch))),this._mouseDX=0,this._mouseDY=0,this._locked?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this._applyGravity(t)),this.driveCamera&&this._commitCamera(t),this._updateTarget(),this._target&&(this._wasPressed("interact")||this._pressed.has("Mouse0"))){const e=this._target;for(const i of this._interactFns)i(e)}this._pressed.clear()}_move(t){let e=0,i=0;this._isDown("forward")&&(i+=1),this._isDown("back")&&(i-=1),this._isDown("right")&&(e+=1),this._isDown("left")&&(e-=1);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this._dir.set(r*i+-o*e,0,o*i+r*e);a.lengthSq()>0&&a.normalize();const c=this._isDown("run")?ye.RUN:ye.SPEED,l=this.onGround?fy:dy,h=Math.min(1,l*t);this.velocity.x+=(a.x*c-this.velocity.x)*h,this.velocity.z+=(a.z*c-this.velocity.z)*h,this._applyGravity(t),this._collide(t);const u=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<u&&(this.position.y=u,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_applyGravity(t){this.velocity.y-=ye.GRAVITY*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<=e?(this.position.y=e,this.velocity.y=0,this.onGround=!0):this.onGround=!1}_floorUnder(t,e,i){var a;const s=ye.RADIUS;let r=-1/0;const o=((a=this.build)==null?void 0:a.colliders)||Yi;for(let c=0;c<o.length;c++){const l=o[c];l.walkable&&(t<l.min.x-s||t>l.max.x+s||e<l.min.z-s||e>l.max.z+s||l.max.y<=i+ye.STEP&&l.max.y>r&&(r=l.max.y))}return r===-1/0?(this._warnedFloor||(this._warnedFloor=!0,console.warn("[walker] no walkable collider under the player — holding at y = 0. floor() is the only thing that makes one.")),0):r}_collide(t){this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let e=0;e<my;e++){const i=th(this.collision,this.position.x,this.position.z,{y:this.position.y,onPush:this._killInto});if(this.position.x=i.x,this.position.z=i.z,!i.contacts)break}My(this.collision,this.position.x,this.position.z,{y:this.position.y})?(this.position.x=this._lastSafe.x,this.position.z=this._lastSafe.z,this.velocity.x=0,this.velocity.z=0):this._lastSafe.copy(this.position)}_commitCamera(t){const e=this.position.y+ye.EYE;let i=0,s=0;this.horizontalSpeed>.3?(this._bob+=t*this.horizontalSpeed*1.9,s=Math.sin(this._bob*2)*.035,i=Math.cos(this._bob)*.014):this._bob=0,this.camera.position.set(this.position.x+i,e+s,this.position.z),this.camera.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ")}get target(){return this._target}onInteract(t){return t&&this._interactFns.push(t),this}_updateTarget(){var a;if(!this._locked){this._setTarget(null);return}const t=((a=this.build)==null?void 0:a.interactables)||Yi;if(!t.length){this._setTarget(null);return}this.camera.getWorldDirection(this._fwd);const e=this.camera.position,i=this.position.x,s=this.position.z;let r=null,o=1/0;for(let c=0;c<t.length;c++){const l=t[c],h=l.pos.x-i,u=l.pos.z-s,f=Math.hypot(h,u);if(f>=(l.radius||1.8))continue;const d=l.pos.x-e.x,_=l.pos.y-e.y,x=l.pos.z-e.z,m=Math.hypot(d,_,x)||1,p=(d*this._fwd.x+_*this._fwd.y+x*this._fwd.z)/m,v=Math.acos(Math.min(1,Math.max(-1,p)));if(v>py)continue;const M=v+f*.1;M>=o||(o=M,r=l)}this._setTarget(r)}_setTarget(t){const e=t?t.label:null;this._target===t&&this._targetLabel===e||(this._target=t,this._targetLabel=e,this.prompt=t?{id:t.id,label:t.label}:null)}teleport(t,e=0,i=0,s){if(t&&typeof t=="object"){const r=t;s=typeof e=="number"?e:void 0,t=r.x??r[0]??0,i=r.z??r[2]??0,e=r.y??r[1]??0}return this.position.set(t,e,i),this.position.y=Math.max(e,this._floorUnder(t,i,e)),this.velocity.set(0,0,0),this.horizontalSpeed=0,this.onGround=!0,this._bob=0,typeof s=="number"&&(this.yaw=s),this._lastSafe.copy(this.position),this.driveCamera&&this._commitCamera(0),this.position}setWorld(t){var e,i;if(!t)throw new Error("Walker.setWorld: no world");return this.world=t,this.build=t.build??this.build,this.collision=t.collision??((i=(e=t.build)==null?void 0:e.userData)==null?void 0:i.collision)??this.collision,this.surface=t.surface??null,this._warnedFloor=!1,this._lastSafe.copy(this.position),this._setTarget(null),this}crossTo(t,e=0){return this.position.applyMatrix4(t),ff.setFromMatrix4(t),this.velocity.applyMatrix3(ff),this.yaw+=e,this.yaw>Math.PI?this.yaw-=2*Math.PI:this.yaw<=-Math.PI&&(this.yaw+=2*Math.PI),this._lastSafe.copy(this.position),this.position}}const ff=new Yt,cs=1e-4;function yy(n,t,e,i,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),_=n.createGain();_.gain.value=cs,_.connect(i);let x,m=null;const p=r.rate??1;if(e.src==="noise")x=n.createBufferSource(),x.buffer=t.get(e.noise||"white"),x.loop=!0,x.loopStart=0,x.playbackRate.value=p;else{x=n.createOscillator(),x.type=e.wave||"sine";const C=e.jitter||0,g=C?1+(r.jitterRoll??0)*C:1,S=Math.max(8,(e.freq??440)*g*p);if(m=x.frequency,m.setValueAtTime(S,a),e.to!=null&&!o){const b=Math.max(8,e.to*g*p),L=a+c;e.glide==="lin"?m.linearRampToValueAtTime(b,L):m.exponentialRampToValueAtTime(b,L)}}let v=x,M=null;if(e.filter){const C=n.createBiquadFilter();C.type=e.filter.type||"lowpass",C.Q.value=e.filter.q??1;const g=Math.max(20,e.filter.freq??1e3);C.frequency.setValueAtTime(g,a),e.filter.to!=null&&!o&&C.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),M=C.frequency,v.connect(C),v=C}let y=null,R=null;if(e.lfo&&e.lfo.rate>0){y=n.createOscillator(),y.type="sine",y.frequency.value=e.lfo.rate;const C=n.createGain();if(e.lfo.target==="gain"){const g=Math.min(1,Math.max(0,e.lfo.depth??.5));R=n.createGain(),R.gain.value=1-g*.5,C.gain.value=g*.5,y.connect(C),C.connect(R.gain),v.connect(R),v=R}else e.lfo.target==="filter"&&M?(C.gain.value=e.lfo.depth??200,y.connect(C),C.connect(M)):m&&(C.gain.value=e.lfo.depth??20,y.connect(C),C.connect(m));y.start(a)}v.connect(_);const A=_.gain;A.setValueAtTime(cs,a),A.linearRampToValueAtTime(l,a+h);const E=Math.max(cs,l*f);u>0&&A.linearRampToValueAtTime(E,a+h+u);let P=1/0;if(o)x.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const C=Math.max(a+h+u,a+c-d);A.setValueAtTime(Math.max(cs,u>0?E:l),C),A.linearRampToValueAtTime(cs,a+c),P=a+c+.02,x.start(a,e.src==="noise"?r.noiseOffset??0:void 0),x.stop(P),y&&y.stop(P)}return{endsAt:P,stop(C){const g=Math.max(C,n.currentTime);try{A.cancelScheduledValues(g),A.setValueAtTime(Math.max(cs,A.value),g),A.linearRampToValueAtTime(cs,g+d),x.stop(g+d+.02),y&&y.stop(g+d+.02)}catch{}}}}function df(n,t,e,i,s={}){const r=Math.max(s.when??n.currentTime,n.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const h=yy(n,t,l,i,r,{...s,loop:o});h&&(a.push(h),h.endsAt>c&&h.endsAt!==1/0&&(c=h.endsAt))}return{endsAt:o?1/0:c,stop(l=n.currentTime){for(const h of a)h.stop(l)}}}const pf="dw.audio",Ey=16,wy="KeyN",Ay={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},by=["step_a","step_b"];function Ty(n,t){const e=t.elements,i=n.x,s=n.y??0,r=n.z,o=e[3]*i+e[7]*s+e[11]*r+e[15]||1;return{x:(e[0]*i+e[4]*s+e[8]*r+e[12])/o,y:(e[1]*i+e[5]*s+e[9]*r+e[13])/o,z:(e[2]*i+e[6]*s+e[10]*r+e[14])/o}}const Ry={volume:.55,muted:!1},Ly={hatStand:1.14,chair:.86,clock:.72},Cy={scanner:.92,faultLocator:.84,foodMachine:1.12},mp=8,Iy=.4,Py=18;function mf(n,t,e){const i=t.length;if(n==="brown"){let s=0;for(let r=0;r<i;r++){const o=e.float()*2-1;s=(s+.02*o)/1.02,t[r]=s*3.5}}else if(n==="pink"){let s=0,r=0,o=0,a=0,c=0,l=0,h=0;for(let u=0;u<i;u++){const f=e.float()*2-1;s=.99886*s+f*.0555179,r=.99332*r+f*.0750759,o=.969*o+f*.153852,a=.8665*a+f*.3104856,c=.55*c+f*.5329522,l=-.7616*l-f*.016898,t[u]=(s+r+o+a+c+l+h+f*.5362)*.11,h=f*.115926}}else for(let s=0;s<i;s++)t[s]=e.float()*2-1;return t}function Dy(n,t){const e=Math.exp(-2*Math.PI*Py/t);let i=0,s=0;for(let r=0;r<n.length;r++){const o=n[r];i=o-s+e*i,s=o,n[r]=i}return n}class Oy{constructor(t,e,i={}){this.ctx=t,this.rng=e,this.len=i.len??mp,this.xfade=i.xfade??Iy,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=this.ctx.sampleRate,i=Math.floor(e*this.len),s=this.ctx.createBuffer(1,i,e),r=s.getChannelData(0);if(t==="white")mf("white",r,this.rng);else{const o=Math.max(1,Math.floor(e*this.xfade)),a=Dy(mf(t,new Float32Array(i+o),this.rng),e);r.set(a.subarray(0,i));for(let c=0;c<o;c++){const l=(c+.5)/o;r[c]=a[c]*Math.sin(l*Math.PI/2)+a[i+c]*Math.cos(l*Math.PI/2)}}return this.cache.set(t,s),s}}const Ny=Math.PI/2,Uy=3.4,Fy=.15,Wo=1,_f=6.5;class ky{constructor(t={}){var r;this.sounds=t.sounds||{},this.busDefs=t.buses||{},this.dist={...Ay,...t.distance||{}},this.roomBeds=t.roomBeds||[],this.propRate={...Ly,...t.propRate||{}},this.ctlRate={...Cy,...t.ctlRate||{}};const e={...Ry,...t.defaults||{}};this.anchors=t.anchors||{},this.surface=t.surface||null,this.surfaceSteps=t.surfaceSteps||{vinyl:["step_a","step_b"]},this._interiorAnchors=null,this.siteBeds=t.siteBeds||[],this._bedMix=0,this._doorT=0,this._roomBedOff=null,this._siteBedOff=null,this.listener=t.listener||null,this.say=typeof t.say=="function"?t.say:null;const i=t.rng;this.rng=i!=null&&i.child?i.child("audio"):i||null,this._stepRng=(r=this.rng)!=null&&r.child?this.rng.child("step"):this.rng,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this._bankFactory=t.bankFactory||((o,a)=>new Oy(o,a)),this._defaultBus=null,this._voices=[],this._loops=new Map,this._handled=new Map,this._duckDepth=1,this._duckUntil=0,this._ducking=!1,this._paused=!1,this._replaceAccum=0,this._told=!1;const s=this._loadPrefs(e);this.volume=s.volume,this.muted=s.muted,this.room=null,this._flying=!1,this._s=0,this._ds=1,this._shutters=null,this._scanner=null,this._stepIx=0,this._air=0,this._wasGround=!0,this._nextTick=0,this._tock=!1,this._Ctx&&(this._wireUnlock(),this._wireKey())}get available(){return!!this.ctx}_loadPrefs(t){const e={...t};try{const i=localStorage.getItem(pf);if(i){const s=JSON.parse(i);typeof s.volume=="number"&&(e.volume=Math.min(1,Math.max(0,s.volume))),typeof s.muted=="boolean"&&(e.muted=s.muted)}}catch{}return e}_savePrefs(){try{localStorage.setItem(pf,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx&&this.ctx.state!=="suspended")for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,i;document.hidden||(i=(e=this.ctx)==null?void 0:e.resume)==null||i.call(e).catch(()=>{})})}unlock(){var e,i,s;if(this.ctx){(i=(e=this.ctx).resume)==null||i.call(e).catch(()=>{});return}if(!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=this._bankFactory(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this._masterTarget(),this.master.connect(t.destination);for(const[r,o]of Object.entries(this.busDefs)){const a=t.createGain();a.gain.value=o.gain,a.connect(this.master),this.buses[r]={node:a,base:o.gain,duckable:o.duckable!==!1},this._defaultBus||(this._defaultBus=this.buses[r])}this._defaultBus=this.buses.machine||this._defaultBus,(s=t.resume)==null||s.call(t).catch(()=>{}),this._nextTick=t.currentTime+Wo,this._resumeBeds(),this.announce()}_resumeBeds(){var t,e;return!this.ctx||this.muted?this:(this.startBeds(this.roomBeds),(e=(t=this.room)==null?void 0:t.fittings)!=null&&e.scannerOn&&this.startLoop("scanner_bed"),this._flying&&(this.startLoop("flight_bed"),this.startLoop("flight_grind")),this)}announce(){this._told||!this.ctx||!this.say||(this._told=!0,this.say(this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==wy||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e;return this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(e=this.say)==null||e.call(this,this.muted?"Sound muted.":"Sound on."),this.muted||(this.play("mute_off"),this._resumeBeds()),this}toggleMute(){return this.setMuted(!this.muted)}setVolume(t){return this.volume=Math.min(1,Math.max(0,Number(t)||0)),this._savePrefs(),this._applyMaster(),this}setPaused(t){return this._paused=!!t,this._applyMaster(.08),this}_masterTarget(){return this.muted?1e-4:Math.max(1e-4,this.volume*(this._paused?.2:1))}_applyMaster(t=.08){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime,i=this._masterTarget();this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(i,e+t)}play(t,e={}){const i=this.sounds[t];if(!i||!this.ctx||this.muted)return null;if(i.loop)return this.startLoop(t,e.handle||t,e);if(e.handle&&this._stopHandled(e.handle),this._voices.length>=Ey)return null;const s=this._chainFor(i,e,!1);if(!s)return null;const r=df(this.ctx,this.bank,i,s.node,{gain:(i.gain??1)*(e.gain??1),rate:(i.rate??1)*(e.rate??1),when:e.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),o={v:r,endsAt:r.endsAt,handle:e.handle||null};return this._voices.push(o),e.handle&&this._handled.set(e.handle,o),i.ducks&&this.duck(i.ducks.depth??.45,i.ducks.hold??1),r}_stopHandled(t){const e=this._handled.get(t);if(!e)return;this._handled.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}const i=this._voices.indexOf(e);i>=0&&this._voices.splice(i,1)}startLoop(t,e=t,i={}){const s=this.sounds[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._chainFor(s,i,!0);if(!r)return null;const a={v:df(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(i.gain??1),rate:(s.rate??1)*(i.rate??1),when:i.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:i.spot??s.spot??null,at:i.at??null,level:1};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);if(!e||!this.ctx)return this;this._loops.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}return this}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t);return this}setLoopLevel(t,e,i=.12){var a;const s=this._loops.get(t);if(!s||!this.ctx||!((a=s.chain)!=null&&a.level))return this;const r=Math.max(0,Number(e)||0);if(Math.abs(r-s.level)<.002)return this;s.level=r;const o=this.ctx.currentTime;return i>0?s.chain.level.gain.setTargetAtTime(r,o,i):s.chain.level.gain.setValueAtTime(r,o),this}startBeds(t=this.roomBeds){for(const e of t||[])this.startLoop(e);return this}stopBeds(t=this.roomBeds){for(const e of t||[])this.stopLoop(e);return this}duck(t=.45,e=1){if(!this.ctx)return this;const i=this.ctx.currentTime,s=Math.min(1,Math.max(0,t));this._duckDepth=this._ducking?Math.min(this._duckDepth,s):s,this._duckUntil=Math.max(this._duckUntil,i+e),this._ducking=!0;for(const r of Object.values(this.buses))r.duckable&&(r.node.gain.cancelScheduledValues(i),r.node.gain.setTargetAtTime(r.base*this._duckDepth,i,.04));return this}_unduck(){const t=this.ctx.currentTime;this._ducking=!1,this._duckDepth=1;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_chainFor(t,e,i){const s=this.buses[t.bus]||this._defaultBus;if(!s)return null;let r=s.node,o=null,a=null,c=null;const l=this._resolve(e.at??null,e.spot??t.spot??null);if(l){const h=this._place(l,t.minGain??0);if(h.gain<=.004&&!t.loop)return null;this.ctx.createStereoPanner&&(o=this.ctx.createStereoPanner(),o.pan.value=h.pan,o.connect(r),r=o),a=this.ctx.createGain(),a.gain.value=h.gain,a.connect(r),r=a}return i&&(c=this.ctx.createGain(),c.gain.value=1,c.connect(r),r=c),{node:r,chain:{pan:o,dist:a,level:c},pos:l}}_resolve(t,e){if(t&&typeof t.x=="number")return t;if(!e)return null;const i=this.anchors[e];return i&&typeof i.x=="number"?i:null}_listener(){var r;const t=this.listener;if(!t)return null;const e=typeof t=="function"?t():t;if(!e)return null;const i=((r=e.camera)==null?void 0:r.position)||e.position||(typeof e.x=="number"?e:null);if(!i||typeof i.x!="number")return null;const s=e.yaw??0;return{x:i.x,y:i.y,z:i.z,rx:-Math.cos(s),rz:Math.sin(s)}}_place(t,e){const i=this._listener();if(!i)return{gain:1,pan:0};const s=t.x-i.x,r=t.z-i.z,o=(t.y??i.y)-i.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,fade:h,panWidth:u,panNear:f}=this.dist;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));h>0&&a>l-h&&(d*=(l-a)/h),d=Math.max(d,e);const _=Math.sqrt(s*s+r*r)||1,x=Math.min(1,_/f),m=(s*i.rx+r*i.rz)/_*u*x;return{gain:d,pan:Math.max(-1,Math.min(1,m))}}update(t){var s;let e=Number(t)||0;if(e<0&&(e=0),e>.1&&(e=.1),this._followRotor(),this._followFittings(),this._footsteps(e),!this.ctx)return this;const i=this.ctx.currentTime;for(let r=this._voices.length-1;r>=0;r--){const o=this._voices[r];o.endsAt>i||(o.handle&&this._handled.get(o.handle)===o&&this._handled.delete(o.handle),this._voices.splice(r,1))}if(this._ducking&&i>=this._duckUntil&&this._unduck(),this._clock(i),this._replaceAccum+=e,this._replaceAccum<.1)return this;this._replaceAccum=0;for(const r of this._loops.values()){const o=this._resolve(r.at,r.spot);if(!o||!((s=r.chain)!=null&&s.dist))continue;const a=this._place(o,r.recipe.minGain??0);r.chain.dist.gain.setTargetAtTime(a.gain,i,.06),r.chain.pan&&r.chain.pan.pan.setTargetAtTime(a.pan,i,.08)}return this}setWorld(t,e=null){var r;if(!t)return this;if(t.dist&&(this.dist={...this.dist,...t.dist}),this.surface=t.surface??null,!this._interiorAnchors){this._interiorAnchors=Object.create(null);for(const[o,a]of Object.entries(this.anchors))this._interiorAnchors[o]=a}const i=t.id==="interior"||!e?null:e.M_IE||null,s=Object.create(null);if((r=t.build)!=null&&r.interactables)for(const o of t.build.interactables)o!=null&&o.id&&o.pos&&(s[o.id]=o.pos);for(const[o,a]of Object.entries(this._interiorAnchors))s[o]||(s[o]=i?Ty(a,i):a);return this.anchors=s,this}setLoopSpot(t,e){const i=this._loops.get(t);return i&&(i.spot=e??null,i.at=null),this}setBedMix(t,e){const i=t<=0?0:t>=1?1:t,s=e===void 0?this._doorT??1:e,r=s<=0?0:s>=1?1:s;this._bedMix=i;const o=1-i+i*.06*r,a=i*(.3+.7*(1-.6*(1-r)));return this._driveBedSet(this.roomBeds,o,"_roomBedOff"),this._driveBedSet(this.siteBeds,a,"_siteBedOff"),this}_driveBedSet(t,e,i){if(!t||!t.length)return;const s=t.map(r=>Array.isArray(r)?r[0]:r);if(e<=0){const r=this.ctx?this.ctx.currentTime:0;(this[i]===void 0||this[i]===null)&&(this[i]=r);for(const o of s)this.setLoopLevel(o,0);if(r-this[i]>2)for(const o of s)this.stopLoop(o);return}this[i]=null;for(const r of t){const o=Array.isArray(r)?r[0]:r;if(!this._loops.has(o)){const a=Array.isArray(r)&&r[1]?{...r[1]}:{};this.startLoop(o,o,a)&&this.setLoopLevel(o,0,0)}this.setLoopLevel(o,e)}}setDoorFraction(t){return this._doorT=t<=0?0:t>=1?1:t,this}setSiteBeds(t){return this.siteBeds=t||[],this}get bedMix(){return this._bedMix??0}bindRoom({build:t,rotor:e,fittings:i,walker:s,room:r}={}){var o,a;if(this.room={build:t||null,rotor:e||null,fittings:i||null,walker:s||null},t!=null&&t.interactables)for(const c of t.interactables)c!=null&&c.id&&c.pos&&(this.anchors[c.id]=c.pos);return this.anchors.console=this.anchors.console||{x:0,y:(r==null?void 0:r.PANEL_Y0)??.9,z:0},s&&(this.listener||(this.listener=s),(o=s.onPause)==null||o.call(s,c=>this.setPaused(c)),(a=s.onInteract)==null||a.call(s,c=>this._onInteract(c)),this.setPaused(!!s.paused)),i&&(this._shutters=!!i.shuttersOpen,this._scanner=!!i.scannerOn),e&&(this._flying=!!e.running),this.startBeds(this.roomBeds),i!=null&&i.scannerOn&&this.startLoop("scanner_bed"),this}_onInteract(t){var e;if(t)switch(t.action){case"panel":{const i=(e=t.data)==null?void 0:e.panel,s=`panel${i}`;this.play("panel_wake",{spot:s});const r={1:"ctl_lever",2:"ctl_lever",3:"ctl_dial",4:"ctl_guard",5:"ctl_lever_big",6:"ctl_button"};r[i]&&this.play(r[i],{spot:s}),i===1&&this.play("ctl_refuse",{spot:s}),i===3&&this.play("food_dispense",{handle:"food"}),i===6&&this.play("fault_query",{handle:"fault"});break}case"doors":this.play("door_locked"),this.play("panel_wake",{spot:"panel1",gain:.5});break;case"scanner":this.play("ctl_toggle",{spot:"scanner",rate:this.ctlRate.scanner});break;case"faultLocator":this.play("ctl_button",{spot:"faultLocator",rate:this.ctlRate.faultLocator}),this.play("fault_query",{handle:"fault"});break;case"foodMachine":this.play("ctl_button",{spot:"foodMachine",rate:this.ctlRate.foodMachine}),this.play("food_dispense",{handle:"food"});break;case"hatStand":this.play("prop_wood",{spot:"hatStand",rate:this.propRate.hatStand});break;case"chair":this.play("prop_wood",{spot:"chair",rate:this.propRate.chair});break;case"clock":this.play("prop_wood",{spot:"clock",rate:this.propRate.clock}),this.ctx&&this.play("clock_tick",{when:this.ctx.currentTime+.3});break;case"rotor":this.play("ctl_lever_big",{spot:"panel5"});break}}_followRotor(){var s;const t=(s=this.room)==null?void 0:s.rotor;if(!t)return;const e=!!t.running;e&&!this._flying?(this.play("demat_launch"),this.startLoop("flight_bed"),this.startLoop("flight_grind"),this.setLoopLevel("flight_bed",0,0),this.setLoopLevel("flight_grind",0,0),this._flying=!0,this._s=0,this._ds=1):!e&&this._flying&&(this.stopLoop("flight_bed"),this.stopLoop("flight_grind"),this.play("remat_land"),this._flying=!1);const i=t.drive??0;if(this.setLoopLevel("flight_bed",i),this.setLoopLevel("flight_grind",i),i>.05){const r=(t.apex??0)-(t.parked??0);if(r>0){const o=((t.height??0)-t.parked)/(r*i),a=o-this._s;this._ds<0&&a>=0?this.play("demat_rise"):this._ds>0&&a<=0&&this.play("demat_fall"),a!==0&&(this._ds=a),this._s=o}}else this._s=0,this._ds=1}_followFittings(){var s;const t=(s=this.room)==null?void 0:s.fittings;if(!t)return;const e=!!t.shuttersOpen;this._shutters!==null&&e!==this._shutters&&this.play(e?"shutter_open":"shutter_close",{handle:"shutter"}),this._shutters=e;const i=!!t.scannerOn;this._scanner!==null&&i!==this._scanner&&(i?this.startLoop("scanner_bed"):this.stopLoop("scanner_bed")),this._scanner=i}_footsteps(t){var l;const e=(l=this.room)==null?void 0:l.walker;if(!e)return;const i=e.onGround!==!1;i?(this._wasGround===!1&&this._air>Fy&&this.play("step_land",{rate:this._stepRate(1)}),this._air=0):this._air+=t,this._wasGround=i;const s=e.horizontalSpeed??0;if(s<=.3){this._stepIx=0;return}const r=(e.stepPhase!==void 0?e.stepPhase:e._bob)??0,o=Math.floor(r/Ny);if(o===this._stepIx||(this._stepIx=o,o<=0))return;const a=s>Uy?1.06:1,c=this.surface&&this.surfaceSteps[this.surface]||by;this.play(c[o&1],{rate:this._stepRate(a)})}_stepRate(t){const e=this._stepRng;return t*(1+.055*(e?e.range(-1,1):0))}_clock(t){if(!this.sounds.clock_tick)return;const e=this.anchors.clock;if(e){const i=this._listener();if(i){const s=e.x-i.x,r=e.z-i.z,o=(e.y??i.y)-i.y;if(s*s+o*o+r*r>_f*_f){this._nextTick=t+Wo;return}}}for(this._nextTick<t&&(this._nextTick=t+Wo);this._nextTick<t+.5;)this.play(this._tock?"clock_tock":"clock_tick",{when:this._nextTick}),this._tock=!this._tock,this._nextTick+=Wo}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,mp):0}}const By={room:{gain:.34,duckable:!1},machine:{gain:.85,duckable:!0},control:{gain:.95,duckable:!1},body:{gain:.6,duckable:!0},flight:{gain:.95,duckable:!1}},_p={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},zy={volume:.55,muted:!1},ca={room_tone:{bus:"room",gain:.55,loop:!0,layers:[{src:"noise",noise:"brown",at:0,a:2.6,s:1,r:2,peak:.85,filter:{type:"lowpass",freq:110,q:.7},lfo:{rate:.043478,depth:40,target:"filter"}},{src:"tone",wave:"sine",freq:49.5,at:0,a:3,s:1,r:2.4,peak:.26},{src:"tone",wave:"sine",freq:99,at:0,a:3.2,s:1,r:2.4,peak:.3},{src:"tone",wave:"sine",freq:99.4,at:0,a:3.6,s:1,r:2.4,peak:.24,lfo:{rate:.027027,depth:.6,target:"freq"}},{src:"noise",noise:"white",at:2.41,a:5,s:1,r:3,peak:.1,filter:{type:"bandpass",freq:6400,q:2.4},lfo:{rate:.018868,depth:900,target:"filter"}}]},room_air:{bus:"room",gain:.7,loop:!0,rate:.618,layers:[{src:"noise",noise:"pink",at:0,a:3.4,s:1,r:2.2,peak:.52,filter:{type:"bandpass",freq:300,q:.9},lfo:{rate:.034483,depth:130,target:"filter"}},{src:"noise",noise:"brown",at:1.13,a:4,s:1,r:2.4,peak:.4,filter:{type:"lowpass",freq:210,q:1.1},lfo:{rate:.02439,depth:55,target:"filter"}}]},console_hum:{bus:"room",gain:.6,loop:!0,spot:"console",minGain:.14,layers:[{src:"tone",wave:"sine",freq:148.5,at:0,a:2,s:1,r:1.6,peak:.22},{src:"tone",wave:"sine",freq:297,at:0,a:2.2,s:1,r:1.6,peak:.09,lfo:{rate:.071,depth:.24,target:"gain"}},{src:"tone",wave:"sawtooth",freq:220,at:0,a:2.8,s:1,r:2,peak:.1,filter:{type:"lowpass",freq:640,q:1.4}},{src:"noise",noise:"white",at:.53,a:2.6,s:1,r:2,peak:.26,filter:{type:"bandpass",freq:6200,q:2.6},lfo:{rate:.1129,depth:.36,target:"gain"}}]},scanner_bed:{bus:"room",gain:.62,loop:!0,spot:"scanner",minGain:0,layers:[{src:"tone",wave:"sawtooth",freq:50,at:0,a:1.35,s:1,r:.28,peak:.28,filter:{type:"lowpass",freq:320,q:1.4}},{src:"tone",wave:"sine",freq:150,at:0,a:1.4,s:1,r:.28,peak:.1},{src:"tone",wave:"sine",freq:10125,at:0,a:1.4,s:1,r:.28,peak:.028,lfo:{rate:.37,depth:.3,target:"gain"}},{src:"noise",noise:"white",at:.77,a:1.5,s:1,r:.28,peak:.14,filter:{type:"highpass",freq:4800,q:.7}}]},fault_idle:{bus:"machine",gain:.34,loop:!0,rate:.618,spot:"faultLocator",minGain:0,layers:[{src:"noise",noise:"white",at:0,a:1.2,s:1,r:.8,peak:.34,filter:{type:"bandpass",freq:2900,q:6},lfo:{rate:1.1111,depth:.92,target:"gain"}}]},flight_bed:{bus:"flight",gain:.19,loop:!0,spot:"rotor",minGain:.55,layers:[{src:"tone",wave:"sine",freq:41,at:0,a:.9,s:1,r:2.4,peak:.3,lfo:{rate:.173,depth:6,target:"freq"}},{src:"noise",noise:"brown",at:0,a:1.1,s:1,r:2.4,peak:.8,filter:{type:"lowpass",freq:230,q:1.1},lfo:{rate:.173,depth:110,target:"filter"}},{src:"tone",wave:"sawtooth",freq:32.7,at:0,a:1.2,s:1,r:2.4,peak:.34,filter:{type:"lowpass",freq:260,q:3},lfo:{rate:.29,depth:90,target:"filter"}},{src:"tone",wave:"sawtooth",freq:33.6,at:0,a:1.4,s:1,r:2.4,peak:.28,filter:{type:"lowpass",freq:300,q:2.6},lfo:{rate:.23,depth:70,target:"filter"}},{src:"tone",wave:"sine",freq:99,at:0,a:1.5,s:1,r:2.4,peak:.1,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:7.9,depth:22,target:"freq"}}]},flight_grind:{bus:"flight",gain:.2,loop:!0,rate:.618,spot:"rotor",minGain:.55,layers:[{src:"noise",noise:"pink",at:0,a:1.4,s:1,r:2.4,peak:.58,filter:{type:"bandpass",freq:470,q:1.3},lfo:{rate:.2311,depth:200,target:"filter"}},{src:"noise",noise:"white",at:.61,a:1,s:1,r:2.4,peak:.52,filter:{type:"bandpass",freq:1750,q:3},lfo:{rate:6.1,depth:.45,target:"gain"}},{src:"noise",noise:"brown",at:1.13,a:1.2,s:1,r:2.4,peak:.46,filter:{type:"lowpass",freq:400,q:1.4},lfo:{rate:.1274,depth:130,target:"filter"}}]},demat_launch:{bus:"flight",gain:.54,ducks:{depth:.45,hold:2.6},layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.14,r:.08,peak:.72,filter:{type:"lowpass",freq:1400,to:240,q:1.5}},{src:"tone",wave:"square",freq:128,to:47,at:0,dur:.22,a:.002,d:.06,s:.2,r:.1,peak:.24,filter:{type:"lowpass",freq:700,to:300,q:1}},{src:"tone",wave:"sawtooth",freq:38,to:96,at:.08,dur:1.9,a:.4,d:.3,s:.8,r:.55,peak:.36,jitter:.012,filter:{type:"lowpass",freq:300,to:1500,q:1.2}},{src:"tone",wave:"sawtooth",freq:39.1,to:99.1,at:.11,dur:1.88,a:.44,d:.3,s:.78,r:.55,peak:.3,jitter:-.012,filter:{type:"lowpass",freq:340,to:1650,q:1.1}},{src:"noise",noise:"white",at:.3,dur:2,a:.55,d:.35,s:.62,r:.6,peak:.7,filter:{type:"bandpass",freq:220,to:1750,q:.75}},{src:"tone",wave:"triangle",freq:210,to:690,at:.2,dur:2.1,a:.5,d:.4,s:.55,r:.75,peak:.2,filter:{type:"bandpass",freq:900,q:8},lfo:{rate:.8,depth:400,target:"filter"}},{src:"tone",wave:"sine",freq:148,at:.15,dur:2.1,a:.3,d:.5,s:.5,r:.8,peak:.16,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:6.7,depth:34,target:"freq"}},{src:"tone",wave:"sine",freq:41,to:31,at:0,dur:2.4,a:.03,d:.9,s:.35,r:1.1,peak:.28},{src:"noise",noise:"pink",at:1.13,dur:1.45,a:.3,d:.3,s:.55,r:.55,peak:.42,filter:{type:"bandpass",freq:900,to:2600,q:1.6}},{src:"noise",noise:"brown",at:2.033,dur:.34,a:.004,d:.12,s:.2,r:.18,peak:.4,filter:{type:"lowpass",freq:560,to:170,q:1.3}},{src:"tone",wave:"sine",freq:62,to:41,at:2.033,dur:.38,a:.004,d:.14,s:.24,r:.2,peak:.3}]},demat_rise:{bus:"flight",gain:.5,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:58,to:96,at:0,dur:1.58,a:.1,d:.3,s:.62,r:.55,peak:.42,jitter:.015,filter:{type:"lowpass",freq:900,to:320,q:2.6},lfo:{rate:5.4,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:60.3,to:99.6,at:0,dur:1.58,a:.13,d:.3,s:.6,r:.58,peak:.34,jitter:-.015,filter:{type:"lowpass",freq:1200,to:400,q:2.2},lfo:{rate:5.15,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.08,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:700,to:2400,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.1,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:420,to:1300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.35,d:.35,s:.7,r:.7,peak:.78,filter:{type:"lowpass",freq:130,to:260,q:.9}},{src:"tone",wave:"square",freq:232,to:384,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1400,q:6},lfo:{rate:.9,depth:320,target:"filter"}},{src:"tone",wave:"sine",freq:92,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:400,q:.9},lfo:{rate:7.3,depth:24,target:"freq"}},{src:"noise",noise:"brown",at:1.44,dur:.3,a:.004,d:.11,s:.2,r:.16,peak:.34,filter:{type:"lowpass",freq:520,to:170,q:1.2}}]},demat_fall:{bus:"flight",gain:.51,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:96,to:54,at:0,dur:1.58,a:.09,d:.3,s:.6,r:.55,peak:.4,jitter:.015,filter:{type:"lowpass",freq:1e3,to:300,q:2.6},lfo:{rate:5.05,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:99.4,to:56.2,at:0,dur:1.58,a:.12,d:.3,s:.58,r:.58,peak:.33,jitter:-.015,filter:{type:"lowpass",freq:1300,to:380,q:2.2},lfo:{rate:4.85,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.06,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:2300,to:560,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.08,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:1240,to:300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.3,d:.35,s:.7,r:.7,peak:.8,filter:{type:"lowpass",freq:250,to:110,q:.9}},{src:"tone",wave:"square",freq:216,to:168,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1300,q:6},lfo:{rate:.9,depth:300,target:"filter"}},{src:"tone",wave:"sine",freq:84,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:380,q:.9},lfo:{rate:6.9,depth:22,target:"freq"}},{src:"noise",noise:"brown",at:1.36,dur:.34,a:.003,d:.12,s:.2,r:.18,peak:.42,filter:{type:"lowpass",freq:400,to:130,q:1.4}},{src:"tone",wave:"sine",freq:58,to:38,at:1.36,dur:.36,a:.004,d:.13,s:.22,r:.19,peak:.24}]},remat_land:{bus:"flight",gain:.56,ducks:{depth:.45,hold:3.2},layers:[{src:"tone",wave:"sawtooth",freq:92,to:70,at:0,dur:.95,a:.05,d:.3,s:.8,r:.45,peak:.32,filter:{type:"lowpass",freq:880,to:560,q:1.3},lfo:{rate:9,depth:.62,target:"gain"}},{src:"tone",wave:"sawtooth",freq:71,to:50,at:.85,dur:.95,a:.2,d:.3,s:.8,r:.5,peak:.36,filter:{type:"lowpass",freq:570,to:330,q:1.3},lfo:{rate:6,depth:.64,target:"gain"}},{src:"tone",wave:"sawtooth",freq:50,to:31,at:1.7,dur:.8,a:.24,d:.28,s:.75,r:.52,peak:.34,filter:{type:"lowpass",freq:340,to:170,q:1.4},lfo:{rate:3.4,depth:.66,target:"gain"}},{src:"noise",noise:"white",at:0,dur:2.4,a:.1,d:.6,s:.5,r:1,peak:.26,filter:{type:"bandpass",freq:1800,to:300,q:.7}},{src:"noise",noise:"pink",at:.6,dur:1.7,a:1.35,d:.18,s:.92,r:.3,peak:.55,filter:{type:"bandpass",freq:300,to:2100,q:5}},{src:"noise",noise:"brown",at:2.4,dur:.55,a:.003,d:.18,s:.18,r:.3,peak:.9,filter:{type:"lowpass",freq:1600,to:110,q:1.5}},{src:"tone",wave:"sine",freq:74,to:34,at:2.4,dur:.62,a:.004,d:.22,s:.22,r:.32,peak:.42},{src:"tone",wave:"triangle",freq:131,at:2.418,dur:.95,a:.008,d:.3,s:.2,r:.55,peak:.14,filter:{type:"bandpass",freq:300,q:5}},{src:"tone",wave:"triangle",freq:133.4,at:2.433,dur:.92,a:.008,d:.3,s:.2,r:.55,peak:.12,filter:{type:"bandpass",freq:300,q:5}},{src:"noise",noise:"pink",at:2.44,dur:.9,a:.02,d:.35,s:.15,r:.42,peak:.36,filter:{type:"lowpass",freq:2200,to:400,q:.8}},{src:"tone",wave:"triangle",freq:196,to:99,at:2.46,dur:1.75,a:.02,d:.45,s:.28,r:1.1,peak:.18,filter:{type:"lowpass",freq:800,to:340,q:1}}]},ctl_toggle:{bus:"control",gain:.74,minGain:.1,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.008,s:0,r:.01,peak:.44,filter:{type:"bandpass",freq:2600,to:1900,q:4}},{src:"tone",wave:"square",freq:1860,at:0,dur:.024,a:.001,d:.008,s:0,r:.01,peak:.18,jitter:.05,filter:{type:"lowpass",freq:5200,q:.7}},{src:"noise",noise:"pink",at:.042,dur:.045,a:.001,d:.016,s:0,r:.02,peak:.3,filter:{type:"bandpass",freq:1750,to:1150,q:3.2}},{src:"tone",wave:"triangle",freq:430,to:300,at:.042,dur:.06,a:.002,d:.02,s:.1,r:.03,peak:.22,jitter:.05},{src:"noise",noise:"brown",at:.056,dur:.055,a:.003,d:.02,s:.1,r:.028,peak:.18,filter:{type:"lowpass",freq:480,q:.9}}]},ctl_button:{bus:"control",gain:.52,minGain:.1,layers:[{src:"noise",noise:"brown",at:0,dur:.04,a:.0015,d:.015,s:.1,r:.018,peak:.62,filter:{type:"lowpass",freq:1400,to:520,q:1.1}},{src:"tone",wave:"sine",freq:1244,to:900,at:0,dur:.055,a:.002,d:.018,s:.14,r:.028,peak:.22,jitter:.05},{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.01,peak:.24,filter:{type:"bandpass",freq:1150,q:2.4}},{src:"noise",noise:"brown",at:.078,dur:.028,a:.001,d:.011,s:.06,r:.013,peak:.34,filter:{type:"lowpass",freq:900,to:400,q:1}}]},ctl_dial:{bus:"control",gain:.85,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.19,a:.01,d:.05,s:.6,r:.06,peak:.3,filter:{type:"bandpass",freq:2200,q:1.1}},{src:"noise",noise:"white",at:0,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.5,filter:{type:"bandpass",freq:3400,q:2.2}},{src:"noise",noise:"white",at:.068,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.52,filter:{type:"bandpass",freq:3150,q:2.2}},{src:"noise",noise:"white",at:.136,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.48,filter:{type:"bandpass",freq:3550,q:2.2}},{src:"noise",noise:"brown",at:0,dur:.2,a:.012,d:.06,s:.5,r:.07,peak:.26,filter:{type:"lowpass",freq:620,to:380,q:1}}]},ctl_lever:{bus:"control",gain:.62,minGain:.12,layers:[{src:"noise",noise:"brown",at:0,dur:.05,a:.002,d:.018,s:.1,r:.024,peak:.36,filter:{type:"lowpass",freq:1100,to:420,q:1.2}},{src:"noise",noise:"white",at:.02,dur:.28,a:.028,d:.07,s:.55,r:.13,peak:.4,filter:{type:"bandpass",freq:2400,to:900,q:1.3},lfo:{rate:17,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:196,to:124,at:.02,dur:.28,a:.02,d:.07,s:.5,r:.12,peak:.16},{src:"noise",noise:"brown",at:.28,dur:.19,a:.002,d:.065,s:.18,r:.095,peak:.44,filter:{type:"lowpass",freq:720,to:190,q:1.5}},{src:"tone",wave:"sine",freq:96,to:58,at:.28,dur:.23,a:.003,d:.085,s:.2,r:.11,peak:.28,jitter:.04},{src:"noise",noise:"white",at:.28,dur:.03,a:.001,d:.01,s:0,r:.014,peak:.2,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"sawtooth",freq:74,to:148,at:.3,dur:.34,a:.05,d:.1,s:.68,r:.19,peak:.18,filter:{type:"lowpass",freq:420,to:1050,q:1.1}}]},ctl_lever_big:{bus:"control",gain:.72,minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.06,a:.002,d:.022,s:.1,r:.028,peak:.42,filter:{type:"lowpass",freq:820,to:300,q:1.2}},{src:"noise",noise:"white",at:.024,dur:.43,a:.04,d:.1,s:.6,r:.18,peak:.44,filter:{type:"bandpass",freq:1900,to:640,q:1.2},lfo:{rate:13,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:140,to:78,at:.024,dur:.43,a:.036,d:.1,s:.58,r:.175,peak:.22},{src:"noise",noise:"brown",at:.44,dur:.23,a:.002,d:.085,s:.18,r:.115,peak:.52,filter:{type:"lowpass",freq:640,to:150,q:1.6}},{src:"tone",wave:"sine",freq:128,to:62,at:.44,dur:.28,a:.003,d:.1,s:.2,r:.135,peak:.32},{src:"noise",noise:"white",at:.44,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"highpass",freq:2e3,q:.9}},{src:"tone",wave:"sawtooth",freq:62,to:132,at:.47,dur:.4,a:.06,d:.11,s:.7,r:.21,peak:.22,filter:{type:"lowpass",freq:380,to:980,q:1.1}}]},ctl_guard:{bus:"control",gain:.66,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.13,a:.02,d:.04,s:.55,r:.06,peak:.46,filter:{type:"bandpass",freq:1100,q:12},lfo:{rate:13,depth:380,target:"filter"}},{src:"noise",noise:"brown",at:.13,dur:.05,a:.001,d:.018,s:.1,r:.024,peak:.4,filter:{type:"lowpass",freq:700,to:300,q:1.2}},{src:"noise",noise:"white",at:.148,dur:.026,a:.001,d:.009,s:0,r:.012,peak:.44,filter:{type:"bandpass",freq:3400,to:2400,q:3.4}},{src:"noise",noise:"pink",at:.19,dur:.044,a:.001,d:.016,s:0,r:.02,peak:.48,filter:{type:"bandpass",freq:2100,to:1400,q:3.6}},{src:"tone",wave:"square",freq:1180,at:.19,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"lowpass",freq:4400,q:.7}},{src:"tone",wave:"triangle",freq:330,to:210,at:.225,dur:.16,a:.002,d:.05,s:.14,r:.08,peak:.24,jitter:.05}]},ctl_refuse:{bus:"control",gain:.62,minGain:.4,layers:[{src:"tone",wave:"sawtooth",freq:233.08,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.3,filter:{type:"bandpass",freq:480,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.26,filter:{type:"bandpass",freq:360,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:233.08,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.28,filter:{type:"bandpass",freq:460,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.24,filter:{type:"bandpass",freq:340,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"noise",noise:"brown",at:0,dur:.52,a:.006,d:.12,s:.3,r:.24,peak:.26,filter:{type:"lowpass",freq:700,to:300,q:1.2}}]},panel_wake:{bus:"machine",gain:.76,minGain:.08,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.56,filter:{type:"bandpass",freq:1600,to:1100,q:3}},{src:"noise",noise:"pink",at:.052,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.72,filter:{type:"bandpass",freq:1850,to:1250,q:3}},{src:"noise",noise:"white",at:.118,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.52,filter:{type:"bandpass",freq:1420,to:980,q:3}},{src:"noise",noise:"pink",at:.166,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.62,filter:{type:"bandpass",freq:2050,to:1400,q:3}},{src:"tone",wave:"sine",freq:660,at:.2,dur:.22,a:.004,d:.07,s:.16,r:.12,peak:.2}]},shutter_open:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sawtooth",freq:118,to:132,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:120.4,to:134.7,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:620,to:1350,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.44,filter:{type:"lowpass",freq:340,to:520,q:1}},{src:"noise",noise:"white",at:1.2,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.34,filter:{type:"highpass",freq:1500,q:.8}},{src:"noise",noise:"white",at:1.25,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.3,filter:{type:"highpass",freq:1700,q:.8}},{src:"tone",wave:"sine",freq:1180,to:3140,at:1.21,dur:.34,a:.006,d:.1,s:.24,r:.18,peak:.16},{src:"noise",noise:"white",at:1.21,dur:.2,a:.004,d:.06,s:.2,r:.1,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}}]},shutter_close:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sine",freq:3140,to:1180,at:0,dur:.3,a:.006,d:.09,s:.24,r:.15,peak:.16},{src:"noise",noise:"white",at:0,dur:.18,a:.004,d:.055,s:.18,r:.09,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}},{src:"tone",wave:"sawtooth",freq:132,to:118,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:134.7,to:120.4,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:1350,to:620,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.46,filter:{type:"lowpass",freq:520,to:340,q:1}},{src:"noise",noise:"brown",at:1.2,dur:.15,a:.002,d:.055,s:.08,r:.075,peak:.52,filter:{type:"lowpass",freq:800,to:150,q:1.4}},{src:"tone",wave:"sine",freq:196,to:104,at:1.2,dur:.17,a:.002,d:.062,s:.09,r:.085,peak:.38},{src:"noise",noise:"white",at:1.214,dur:.05,a:.002,d:.018,s:.05,r:.024,peak:.26,filter:{type:"bandpass",freq:2600,q:7}}]},fault_query:{bus:"machine",gain:.54,spot:"faultLocator",minGain:.18,layers:[{src:"noise",noise:"white",at:0,dur:3.96,a:.03,d:.12,s:.88,r:.24,peak:.5,filter:{type:"bandpass",freq:1550,q:6},lfo:{rate:9,depth:.95,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:3.96,a:.04,d:.14,s:.84,r:.26,peak:.46,filter:{type:"bandpass",freq:3100,q:4.5},lfo:{rate:6,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:112,at:0,dur:3.98,a:.05,d:.15,s:.8,r:.3,peak:.16,filter:{type:"lowpass",freq:380,q:1}},{src:"tone",wave:"sine",freq:98.5,at:0,dur:3.98,a:.06,d:.15,s:.82,r:.3,peak:.14},{src:"tone",wave:"sine",freq:100,at:.02,dur:3.96,a:.07,d:.15,s:.82,r:.3,peak:.12},{src:"noise",noise:"brown",at:.03,dur:3.95,a:.2,d:.4,s:.6,r:.6,peak:.4,filter:{type:"lowpass",freq:420,q:1}},{src:"noise",noise:"white",at:3.96,dur:.07,a:.002,d:.026,s:.05,r:.036,peak:.26,filter:{type:"bandpass",freq:1200,to:640,q:2.6}}]},food_dispense:{bus:"machine",gain:.66,spot:"foodMachine",minGain:.16,layers:[{src:"noise",noise:"pink",at:0,dur:.9,a:.03,d:.1,s:.75,r:.16,peak:.44,filter:{type:"bandpass",freq:1250,q:2.2},lfo:{rate:7,depth:.9,target:"gain"}},{src:"tone",wave:"sawtooth",freq:154,to:196,at:0,dur:.7,a:.06,d:.12,s:.68,r:.2,peak:.24,filter:{type:"lowpass",freq:420,to:600,q:1.3},lfo:{rate:11,depth:.4,target:"gain"}},{src:"noise",noise:"white",at:.15,dur:.07,a:.002,d:.026,s:.06,r:.036,peak:.32,filter:{type:"bandpass",freq:2400,to:1500,q:3}},{src:"noise",noise:"white",at:.55,dur:.075,a:.001,d:.028,s:.05,r:.038,peak:.42,filter:{type:"bandpass",freq:1750,to:820,q:2}},{src:"noise",noise:"brown",at:.552,dur:.095,a:.002,d:.035,s:.08,r:.048,peak:.36,filter:{type:"lowpass",freq:600,to:180,q:1.2}},{src:"tone",wave:"triangle",freq:213,at:.552,dur:.3,a:.002,d:.09,s:.18,r:.18,peak:.28,jitter:.04,filter:{type:"bandpass",freq:640,q:9}},{src:"tone",wave:"triangle",freq:341,at:.552,dur:.22,a:.002,d:.07,s:.16,r:.14,peak:.15,jitter:-.04,filter:{type:"bandpass",freq:900,q:8}},{src:"tone",wave:"sawtooth",freq:196,to:120,at:.7,dur:.6,a:.02,d:.16,s:.4,r:.34,peak:.18,filter:{type:"lowpass",freq:600,to:260,q:1.2}}]},door_locked:{bus:"control",gain:.56,spot:"doors",minGain:.28,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.72,filter:{type:"lowpass",freq:1e3,to:180,q:1.6}},{src:"tone",wave:"sine",freq:118,to:64,at:0,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.42},{src:"noise",noise:"brown",at:.13,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.66,filter:{type:"lowpass",freq:900,to:170,q:1.6}},{src:"tone",wave:"sine",freq:112,to:60,at:.13,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.38},{src:"tone",wave:"sawtooth",freq:96,at:.14,dur:.42,a:.01,d:.06,s:.7,r:.19,peak:.2,filter:{type:"bandpass",freq:480,q:7},lfo:{rate:50,depth:.9,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:.48,a:.004,d:.14,s:.22,r:.28,peak:.28,filter:{type:"bandpass",freq:520,to:230,q:1.6}}]},clock_tick:{bus:"machine",gain:.56,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.011,peak:.95,filter:{type:"bandpass",freq:3400,to:2300,q:5}},{src:"noise",noise:"brown",at:0,dur:.045,a:.001,d:.018,s:.1,r:.024,peak:.42,filter:{type:"lowpass",freq:700,to:300,q:1.4}},{src:"tone",wave:"triangle",freq:386,at:.002,dur:.12,a:.002,d:.04,s:.1,r:.07,peak:.2,jitter:.012,filter:{type:"bandpass",freq:430,q:8}}]},clock_tock:{bus:"machine",gain:.88,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"pink",at:0,dur:.024,a:.001,d:.009,s:0,r:.012,peak:1,filter:{type:"bandpass",freq:2600,to:1750,q:2.4}},{src:"noise",noise:"brown",at:0,dur:.048,a:.001,d:.019,s:.1,r:.026,peak:.42,filter:{type:"lowpass",freq:640,to:280,q:1.4}},{src:"tone",wave:"triangle",freq:368,at:.002,dur:.126,a:.002,d:.042,s:.1,r:.074,peak:.2,jitter:.012,filter:{type:"bandpass",freq:410,q:8}}]},prop_wood:{bus:"machine",gain:.62,minGain:.06,layers:[{src:"noise",noise:"brown",at:0,dur:.07,a:.002,d:.026,s:.1,r:.034,peak:.56,filter:{type:"lowpass",freq:1200,to:420,q:1.3}},{src:"tone",wave:"triangle",freq:196,at:0,dur:.18,a:.002,d:.06,s:.12,r:.11,peak:.22,jitter:.06,filter:{type:"bandpass",freq:196,q:8}},{src:"tone",wave:"triangle",freq:311,at:.004,dur:.14,a:.002,d:.048,s:.1,r:.086,peak:.14,jitter:-.06,filter:{type:"bandpass",freq:311,q:9}},{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.2,filter:{type:"bandpass",freq:2200,q:2.2}}]},step_a:{bus:"body",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.034,s:.1,r:.046,peak:.62,filter:{type:"lowpass",freq:820,to:190,q:1.3}},{src:"tone",wave:"sine",freq:148,to:76,at:0,dur:.1,a:.002,d:.036,s:.08,r:.05,peak:.34,jitter:.09},{src:"tone",wave:"triangle",freq:268,at:0,dur:.13,a:.002,d:.045,s:.14,r:.08,peak:.16,jitter:-.09,filter:{type:"bandpass",freq:300,q:7}},{src:"noise",noise:"white",at:0,dur:.04,a:.001,d:.015,s:0,r:.019,peak:.22,filter:{type:"bandpass",freq:2300,to:1400,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.22,filter:{type:"bandpass",freq:520,to:300,q:1.4}}]},step_b:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.086,a:.002,d:.032,s:.1,r:.044,peak:.58,filter:{type:"lowpass",freq:900,to:210,q:1.3}},{src:"tone",wave:"sine",freq:162,to:84,at:0,dur:.096,a:.002,d:.034,s:.08,r:.048,peak:.31,jitter:.09},{src:"tone",wave:"triangle",freq:279,at:0,dur:.126,a:.002,d:.043,s:.14,r:.078,peak:.15,jitter:-.09,filter:{type:"bandpass",freq:312,q:7}},{src:"noise",noise:"white",at:0,dur:.038,a:.001,d:.014,s:0,r:.018,peak:.2,filter:{type:"bandpass",freq:2650,to:1600,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.2,filter:{type:"bandpass",freq:580,to:330,q:1.4}}]},step_land:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.12,r:.08,peak:.82,filter:{type:"lowpass",freq:980,to:150,q:1.5}},{src:"tone",wave:"sine",freq:128,to:58,at:0,dur:.18,a:.002,d:.066,s:.1,r:.09,peak:.46},{src:"noise",noise:"white",at:0,dur:.048,a:.001,d:.018,s:0,r:.024,peak:.28,filter:{type:"bandpass",freq:2e3,to:1100,q:2}},{src:"noise",noise:"pink",at:.021,dur:.3,a:.006,d:.09,s:.18,r:.17,peak:.28,filter:{type:"bandpass",freq:470,to:260,q:1.3}}]},door_bolt:{bus:"control",gain:.6,spot:"doors",minGain:.26,layers:[{src:"tone",wave:"sawtooth",freq:96,at:0,dur:.23,a:.006,d:.07,s:.55,r:.11,peak:.22,filter:{type:"bandpass",freq:480,to:620,q:7},lfo:{rate:50,depth:.9,to:.1,target:"gain"}},{src:"noise",noise:"brown",at:.19,dur:.14,a:.002,d:.05,s:.1,r:.07,peak:.8,filter:{type:"lowpass",freq:1100,to:160,q:1.6}},{src:"tone",wave:"sine",freq:104,to:52,at:.19,dur:.15,a:.002,d:.054,s:.08,r:.076,peak:.44},{src:"noise",noise:"pink",at:.211,dur:.2,a:.004,d:.06,s:.16,r:.11,peak:.24,filter:{type:"bandpass",freq:500,to:290,q:1.4}}]},door_swing:{bus:"room",gain:.5,loop:!0,spot:"doors",minGain:.1,layers:[{src:"noise",noise:"brown",at:0,a:.18,s:1,r:.3,peak:.72,filter:{type:"lowpass",freq:220,q:1.1},lfo:{rate:.6,depth:40,target:"filter"}},{src:"noise",noise:"pink",at:0,a:.24,s:1,r:.34,peak:.3,filter:{type:"bandpass",freq:1300,q:1.3},lfo:{rate:.45,depth:600,target:"filter"}}]},door_stop:{bus:"machine",gain:.54,spot:"doors",minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.15,a:.002,d:.056,s:.08,r:.072,peak:.86,filter:{type:"lowpass",freq:700,to:240,q:1.4}},{src:"tone",wave:"sine",freq:92,to:46,at:0,dur:.16,a:.002,d:.058,s:.06,r:.074,peak:.4},{src:"tone",wave:"triangle",freq:4800,at:.002,dur:.3,a:.001,d:.11,s:.1,r:.17,peak:.14,filter:{type:"bandpass",freq:4800,q:9}},{src:"noise",noise:"pink",at:.021,dur:.19,a:.004,d:.058,s:.14,r:.1,peak:.2,filter:{type:"bandpass",freq:480,to:280,q:1.4}}]},door_shut:{bus:"machine",gain:.56,spot:"doors",minGain:.16,layers:[{src:"noise",noise:"brown",at:0,dur:.13,a:.002,d:.048,s:.1,r:.066,peak:.76,filter:{type:"lowpass",freq:860,to:200,q:1.4}},{src:"tone",wave:"sine",freq:134,to:68,at:0,dur:.14,a:.002,d:.05,s:.08,r:.07,peak:.38},{src:"noise",noise:"brown",at:.14,dur:.12,a:.002,d:.044,s:.08,r:.06,peak:.88,filter:{type:"lowpass",freq:620,to:150,q:1.7}},{src:"tone",wave:"sine",freq:86,to:42,at:.14,dur:.13,a:.002,d:.046,s:.06,r:.064,peak:.46},{src:"noise",noise:"pink",at:.161,dur:.21,a:.004,d:.064,s:.15,r:.115,peak:.22,filter:{type:"bandpass",freq:460,to:270,q:1.4}}]},ext_wind:{bus:"room",gain:.62,loop:!0,rate:.809,layers:[{src:"noise",noise:"brown",at:0,a:3,s:1,r:2.4,peak:.9,filter:{type:"lowpass",freq:120,q:.7},lfo:{rate:.037037,depth:45,target:"filter"}},{src:"noise",noise:"pink",at:0,a:3.6,s:1,r:2.6,peak:.44,filter:{type:"bandpass",freq:900,q:.8},lfo:{rate:.052632,depth:450,target:"filter"}},{src:"noise",noise:"white",at:1.7,a:4.4,s:1,r:3,peak:.09,filter:{type:"bandpass",freq:5200,q:1.8},lfo:{rate:.021277,depth:800,target:"filter"}}]},ext_grit:{bus:"room",gain:.46,loop:!0,rate:.5236,layers:[{src:"noise",noise:"pink",at:0,a:2.8,s:1,r:2.2,peak:.34,filter:{type:"bandpass",freq:1800,q:1.1},lfo:{rate:.043478,depth:500,target:"filter"}},{src:"noise",noise:"white",at:.9,a:3.2,s:1,r:2.4,peak:.16,filter:{type:"highpass",freq:3400,q:.9},lfo:{rate:.028571,depth:700,target:"filter"}}]},step_grit_a:{bus:"body",gain:.52,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.003,d:.042,s:.12,r:.058,peak:.54,filter:{type:"lowpass",freq:560,to:150,q:1.1}},{src:"tone",wave:"sine",freq:124,to:62,at:0,dur:.11,a:.003,d:.04,s:.08,r:.054,peak:.26,jitter:.09},{src:"noise",noise:"white",at:0,dur:.09,a:.002,d:.034,s:.06,r:.046,peak:.26,filter:{type:"bandpass",freq:1500,to:780,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.13,filter:{type:"lowpass",freq:420,to:240,q:.8}}]},step_grit_b:{bus:"body",gain:.5,layers:[{src:"noise",noise:"brown",at:0,dur:.104,a:.003,d:.04,s:.12,r:.056,peak:.5,filter:{type:"lowpass",freq:620,to:168,q:1.1}},{src:"tone",wave:"sine",freq:138,to:70,at:0,dur:.104,a:.003,d:.038,s:.08,r:.052,peak:.24,jitter:.09},{src:"noise",noise:"white",at:0,dur:.086,a:.002,d:.032,s:.06,r:.044,peak:.24,filter:{type:"bandpass",freq:1700,to:880,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.12,filter:{type:"lowpass",freq:460,to:260,q:.8}}]},mute_off:{bus:"control",gain:.55,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.13,a:.004,d:.04,s:.2,r:.07,peak:.28},{src:"tone",wave:"sine",freq:990,at:.07,dur:.16,a:.004,d:.05,s:.22,r:.09,peak:.22},{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.011,s:0,r:.015,peak:.2,filter:{type:"bandpass",freq:2400,q:3}}]}},gp=["room_tone","room_air","console_hum","fault_idle"],Hy={hatStand:1.14,chair:.86,clock:.72},Gy={scanner:.92,faultLocator:.84,foodMachine:1.12},Vy={vinyl:["step_a","step_b"],grit:["step_grit_a","step_grit_b"]},Wy=2.4,qy=Math.PI/2,xp=1.8,vp=2.61,Xy=.9,Mp=.045,ba=et.FLAT_FACE+Mp/2,v0=xp/2,Sp=Xy/2,Yy=3.284,yp=3.674;if(Math.abs(yp-(Yy+ye.RADIUS+.05))>1e-12)throw new Error(`doors: the backstop plane no longer derives — WALK.RADIUS is ${ye.RADIUS}`);const $y=[1,-1].map(n=>Object.freeze({x:n*2.4,z:4.15,hw:1.5,hd:1,rotY:0,y0:0,y1:et.CEIL_H})),jy=[1,-1].map(n=>Object.freeze({x:n*.7375,z:3.2655,hw:.1625,hd:.0705,rotY:0,y0:0,y1:vp})),gf=Object.freeze({nx:0,nz:1,d:yp}),Ky=Object.freeze({opening:"The bolts draw back, and the doors swing inward.",closing:"The doors swing shut, and the bolts drive home.",alreadyOpen:"The doors are already open.",alreadyShut:"The doors are already shut.",busyOpening:"The doors are already opening.",busyClosing:"The doors are already closing.",shutters:"Door control: interlock — the scanner shutters are shut.",flight:"Door control: interlock — the ship is in flight.",remote:"Door control: no answer from the shell.",onYou:"Door control: the doors will not close on you.",locked:"The doors are locked.",lockOnOpen:"Door control: the doors must be shut before they can be locked.",didLock:"Door control: the doors are locked.",didUnlock:"Door control: the doors are unlocked.",unlockInFlight:"Door control: the ship is in flight."}),Zy=et.FLAT_FACE-ye.RADIUS;function Ep(n){const t=n<=0?0:n>=1?1:n;return t*t*(3-2*t)}function xf(n){return qy*Ep(n)}function la(n,t){const e=n>=0?1:-1,i=-e*t,s=-e*Sp;return{side:e,rotY:i,hingeX:e*v0,hingeZ:ba,x:e*v0+s*Math.cos(i),z:ba-s*Math.sin(i)}}function Jy(n,t){const e=la(n,t);return{x:e.x,z:e.z,hw:Sp,hd:Mp/2,rotY:e.rotY,y0:0,y1:vp}}function Qy(n){const t=n<=0?0:n>=1?1:n;return 4*t*(1-t)}const Xc=new Vt,vf=new Vt,Mf=new Vt;function Yc(n,t){const e=Array.isArray(n)?n:Array.isArray(n==null?void 0:n.leaves)?n.leaves:Array.isArray(n==null?void 0:n.pivots)?n.pivots:null;if(!e||e.length!==2)throw new Error(`doors: ${t} must hand over exactly two leaf pivots (got ${e?e.length:typeof n})`);const i=e.map((s,r)=>{var a,c;if(!s||!s.isObject3D)throw new Error(`doors: ${t} leaf ${r} is not an Object3D`);let o=((a=s.userData)==null?void 0:a.side)??((c=s.userData)==null?void 0:c.hingeSign)??0;return o||(o=Math.sign(s.position.x)),o||(o=r===0?1:-1,console.warn(`doors: ${t} leaf ${r} publishes no side and sits at x = 0 — assuming ${o>0?"right":"left"} from index order.`)),{obj:s,side:o}});if(i[0].side===i[1].side)throw new Error(`doors: ${t} hands over two leaves on the same side`);return i[0].side>0?i:[i[1],i[0]]}const Sf=.015,yf=new Zn,Ur=new Zn;function Ef(n,t){for(const{obj:e,side:i}of n){Ur.makeEmpty();for(const s of e.children){const r=s.isMesh?s.geometry:null;r&&(r.boundingBox||r.computeBoundingBox(),r.boundingBox&&(s.updateMatrix(),yf.copy(r.boundingBox).applyMatrix4(s.matrix),Ur.union(yf)))}Ur.isEmpty()||Ur.min.z<-Sf&&console.warn(`[doors] ${t} ${i>0?"right":"left"} leaf reaches ${Ur.min.z.toFixed(4)} m BEHIND its hinge, past the ${Sf} m inner-face budget. The hinge looks to be on the leaf's OUTER face, and this module now drives it INWARD (-side * theta) — the leaf will sweep through its own jamb. Box.js must hang it at DOOR_Z - LEAF_T = 0.646 (docs/BOX.md §1.1).`)}}function t2(n,t,e={}){var K;const i=e.shellDoors;if(!i)throw new Error("doors: needs shellDoors from shell(b, P, { liveDoors: true })");const s=(K=n==null?void 0:n.userData)==null?void 0:K.collision;if(!s||!Array.isArray(s.planes)||!Array.isArray(s.boxes))throw new Error("doors: b.userData.collision is missing — shell() must run first (Shell.js:457)");let r=e.audio||null,o=e.console||e.consoleUnit||null;const a=i.group||i.doorGroup||new Me;a.name=a.name||"doors";const c=Yc(i,"shellDoors");for(const{obj:q}of c)q.parent||a.add(q);let l=e.boxDoors?Yc(e.boxDoors,"boxDoors"):null;l&&Ef(l,"boxDoors");const h=i.discs||null,u=[];if(h){if(!h.isInstancedMesh||h.count!==2)throw new Error(`doors: shellDoors.discs must be an InstancedMesh of 2 (got ${h.isInstancedMesh?h.count:typeof h})`);h.instanceMatrix.usage!==Yr&&h.instanceMatrix.setUsage(Yr);for(let q=0;q<2;q++){h.getMatrixAt(q,Xc);const F=(Math.sign(Xc.elements[12])||(q===0?1:-1))>0?c[0]:c[1];Mf.makeTranslation(F.side*v0,0,ba).invert(),u.push({index:q,leaf:F,m:Mf.multiply(Xc).clone()})}}const f=s.planes.findIndex(q=>q.nx===0&&q.nz===1&&q.d===et.FLAT_FACE);if(f<0)throw new Error("doors: the +Z half-plane is not in b.userData.collision.planes");const d=s.planes[f],_=s.boxes.findIndex(q=>q.rotY===0&&q.z===ba&&q.hw===xp/2);if(_<0)throw new Error("doors: Shell's shut leaf box is not in b.userData.collision.boxes");const x=s.boxes[_],m=c.map(({side:q})=>({...Jy(q,0)})),p=[...$y,...jy,...m];let v=!1;function M(q){if(q!==v)if(v=!!q,v)s.planes.splice(f,1),s.planes.push(gf),s.boxes.splice(_,1),s.boxes.push(...p),y();else{const H=s.planes.indexOf(gf);H>=0&&s.planes.splice(H,1),s.planes.splice(f,0,d);for(const F of p){const J=s.boxes.indexOf(F);J>=0&&s.boxes.splice(J,1)}s.boxes.splice(_,0,x)}}function y(){for(let q=0;q<2;q++){const H=la(c[q].side,P),F=m[q];F.x=H.x,F.z=H.z,F.rotY=H.rotY}}let R=0,A=!1,E=0,P=0,C="noop",g=!1,S=!0;function b(){for(let q=0;q<2;q++){const H=la(c[q].side,P);c[q].obj.rotation.y=H.rotY}if(l)for(const{obj:q,side:H}of l)q.rotation.y=-H*P;if(h){for(const q of u){const H=la(q.leaf.side,P);vf.makeRotationY(H.rotY).setPosition(H.hingeX,0,H.hingeZ),h.setMatrixAt(q.index,vf.multiply(q.m))}h.instanceMatrix.needsUpdate=!0}}function L(q){var H;(H=o==null?void 0:o.setLamp)==null||H.call(o,"doors",q)}function O(q){return Ky[q]}function k(q,H){var F;(F=r==null?void 0:r.play)==null||F.call(r,q,{handle:"door",spot:"doors",...H})}function I(q){q!==g&&(g=q,D())}function D(){var q,H,F,J;r&&(g?((q=r.startLoop)==null||q.call(r,"door_swing","doorSwing",{spot:"doors"}),(H=r.setLoopLevel)==null||H.call(r,"doorSwing",0,0)):((F=r.setLoopLevel)==null||F.call(r,"doorSwing",0,.06),(J=r.stopLoop)==null||J.call(r,"doorSwing")))}let U=!1;function Y(q,H={}){var nt,lt,ct;const F=!!q,J=H.running??((nt=H.rotor)==null?void 0:nt.running);return!F&&J===!0?((lt=o==null?void 0:o.blink)==null||lt.call(o,"doors",1),O("unlockInFlight")):F&&R!==0?((ct=o==null?void 0:o.blink)==null||ct.call(o,"doors",1),O("lockOnOpen")):(F===A||(A=F,L(!0),k(A?"door_bolt":"door_stop")),O(A?"didLock":"didUnlock"))}function Z(q,H={}){var pt,gt,yt,B,ue,It,Gt,Tt,Kt;H.audio&&!r&&(r=H.audio),H.console&&!o&&(o=H.console);const F=q?1:0,J=H.shuttersOpen??((pt=H.fittings)==null?void 0:pt.shuttersOpen),nt=H.running??((gt=H.rotor)==null?void 0:gt.running),lt=H.worldId??((B=(yt=H.walker)==null?void 0:yt.world)==null?void 0:B.id),ct=H.playerZ??((It=(ue=H.walker)==null?void 0:ue.position)==null?void 0:It.z);if(!H.force&&J===void 0&&nt===void 0&&lt===void 0&&ct===void 0&&!U&&(U=!0,console.warn("[doors] request() was given no interlock context — every interlock is off. Pass { fittings, rotor, walker } (THRESHOLD §3.5).")),F===E)return C="noop",O(R===E?E?"alreadyOpen":"alreadyShut":E?"busyOpening":"busyClosing");if(!H.force){if(F===1&&A)return C="refused",(Gt=o==null?void 0:o.blink)==null||Gt.call(o,"doors",1),O("locked");if(F===0&&!H.atShell&&lt!==void 0&&lt!=="interior")return C="refused",(Tt=o==null?void 0:o.blink)==null||Tt.call(o,"doors",1),O("remote");if(F===0&&ct!==void 0&&ct>Zy)return C="refused",(Kt=o==null?void 0:o.blink)==null||Kt.call(o,"doors",1),O("onYou")}return F===1&&R===0&&k("door_bolt"),E=F,C=F?"open":"close",L(!0),R!==E&&I(!0),O(F?"opening":"closing")}function tt(q){var F;const H=Number.isFinite(q)?q:0;if(H>0&&R!==E){const J=H/Wy;R=E>R?Math.min(E,R+J):Math.max(E,R-J),Math.abs(E-R)<1e-9&&(R=E),P=xf(R),S=!0,R>0&&M(!0),v&&y(),R===E?(I(!1),R===1&&k("door_stop"),R===0&&(k("door_shut"),M(!1),L(!1))):(F=r==null?void 0:r.setLoopLevel)==null||F.call(r,"doorSwing",Qy(R))}S&&(b(),S=!1)}return b(),{group:a,leaves:c.map(q=>q.obj),discs:h,get t(){return R},get eased(){return Ep(R)},get angle(){return P},get open(){return R>0},get moving(){return R!==E},get state(){return R===0?"shut":R===1?"open":E?"opening":"closing"},get lastAction(){return C},get boxes(){return m},request:Z,setLocked:Y,get locked(){return A},get flightReady(){return R===0&&A},update:tt,collisionFor:M,setBoxDoors(q){return l=q?Yc(q,"boxDoors"):null,l&&Ef(l,"boxDoors"),b(),S=!1,this},setAudio(q){return r=q||null,D(),this},setConsole(q){return o=q||null,this},force(q){return this.forceT(q?1:0)},forceT(q){return R=Math.min(1,Math.max(0,+q||0)),E=R,P=xf(R),I(!1),M(R>0),v&&y(),L(R>0),S=!0,b(),this},dispose(){I(!1)}}}const ln=3.284,ao=.071,vn=Object.freeze({w:1.15,h:2.11}),e2=vn.w/2,bi=Object.freeze({footprint:1.372,half:.686,height:2.9,plinth:1.452,post:.111,bodyTop:2.28,planeZ:ao}),n2=Object.freeze([Object.freeze({x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:bi.bodyTop}),Object.freeze({x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:bi.bodyTop}),Object.freeze({x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:bi.bodyTop})]),wf=1.4,ge="interior",ha="exterior";function i2(n,t){const e=typeof n=="string"?n:n==null?void 0:n.id;if(e===ge)return ge;if(e===ha||t&&e===t)return ha;throw new Error(`link: unknown world id ${JSON.stringify(e)} — expected '${ge}', '${ha}' or '${t}'`)}function s2(n,t){var c;if(!t||typeof t!="object")throw new Error("link: landing must be a record { site, x, z, yaw }");for(const l of["x","z","yaw"])if(!Number.isFinite(t[l]))throw new Error(`link: landing.${l} must be a finite number, got ${t[l]}`);if(!n||typeof n!="object")throw new Error(`link: no site record for landing.site ${JSON.stringify(t.site)}`);if(n.id&&t.site&&n.id!==t.site)throw new Error(`link: landing names site '${t.site}' but was handed site '${n.id}'`);const e=typeof n.groundY=="function"?n.groundY.bind(n):null,i=bi.plinth/2,s=Math.cos(t.yaw),r=Math.sin(t.yaw),o=[[0,0],[+i,+i],[+i,-i],[-i,+i],[-i,-i]];for(const[l,h]of o){const u=t.x+l*s+h*r,f=t.z-l*r+h*s,d=e?e(u,f):((c=n.ground)==null?void 0:c.padY)??0;if(!Number.isFinite(d)||Math.abs(d)>.001)throw new Error(`link: landing '${t.site}' (${t.x}, ${t.z}) is not a level pad — ground is ${d} at (${u.toFixed(3)}, ${f.toFixed(3)}), and the link has no y offset to spend`)}const a=n.bounds;if(!a)throw new Error(`link: site '${n.id}' publishes no bounds`);if(Number.isFinite(a.apothem)){const l=Math.hypot(t.x,t.z),h=a.apothem-ye.RADIUS-wf;if(l>h)throw new Error(`link: landing '${t.site}' sits ${l.toFixed(3)} m from the site centre; the box cannot be walked round past ${h.toFixed(3)} m (apothem ${a.apothem} - WALK.RADIUS ${ye.RADIUS} - walk-round ${wf})`)}}function wp(n,t){const e=typeof n=="string"?Li[n]:n;if(!e)throw new Error(`link: unknown landing ${JSON.stringify(n)} — known: ${Object.keys(Li).join(", ")}`);const i=t&&typeof t=="object"&&t[e.site]?t[e.site]:t&&t.id===e.site?t:null;s2(i,e);const s=e.yaw,r=new Vt().makeTranslation(e.x,0,e.z).multiply(new Vt().makeRotationY(s)).multiply(new Vt().makeTranslation(0,0,ao-ln)),o=r.clone().invert(),a=new z(0,0,1),c=new z(0,0,ln),l=new z(Math.sin(s),0,Math.cos(s)),h=c.clone().applyMatrix4(r),u=new yi(new z(0,0,-1),ln),f=new yi(l.clone(),-l.dot(h)),d=new cn;d.name="portalCam",d.matrixAutoUpdate=!1,d.matrixWorldAutoUpdate=!1;const _=i.id||e.site,x=v=>i2(v,_),m=v=>x(v)===ge?1:-1,p=(v,M,y,R=new z)=>R.set(e.x+v*Fr(s)+y*kr(s),M,e.z-v*kr(s)+y*Fr(s));return{site:i,landing:Object.freeze({...e}),siteId:_,M_IE:r,M_EI:o,yaw:s,nI:a,pI:c,nE:l,pE:h,keepI:u,keepE:f,portalCam:d,M(v){return x(v)===ge?r:o},keepFor(v){return x(v)===ge?u:f},planeFor(v){return x(v)===ge?{point:c,normal:a}:{point:h,normal:l}},distanceTo(v,M){return x(v)===ge?M.z-ln:(M.x-h.x)*l.x+(M.z-h.z)*l.z},signFor:m,crossed(v,M,y){const R=m(v);return R*M<0&&R*y>=0},dYaw(v){return x(v)===ge?s:-s},other(v){return x(v)===ge?ha:ge},boxCollision(){return n2.map(v=>({x:e.x+v.x*Fr(s)+v.z*kr(s),z:e.z-v.x*kr(s)+v.z*Fr(s),hw:v.hw,hd:v.hd,rotY:v.rotY+s,y0:v.y0,y1:v.y1}))},capPose(v){const M=vn.h/2;return x(v)===ge?{position:new z(0,M,ln),rotY:Math.PI,normal:a.clone().negate()}:{position:new z(h.x,M,h.z),rotY:s,normal:l.clone()}},apertureCorners(v){const M=x(v)===ge,y=[];for(const[R,A]of[[1,0],[-1,0],[-1,1],[1,1]]){const E=R*e2,P=A*vn.h;y.push(M?new z(E,P,ln):new z(h.x+E*Fr(s),P,h.z-E*kr(s)))}return y},toSite:p,toExterior(v,M=new z){return M.copy(v).applyMatrix4(r)},toInterior(v,M=new z){return M.copy(v).applyMatrix4(o)},doorSpillPoint(v=new z){return p(0,1.5,bi.half,v)}}}function Fr(n){return Math.cos(n)}function kr(n){return Math.sin(n)}const Li=Object.freeze({ashfall_pan:Object.freeze({site:"ashfall",x:0,z:-4.2,yaw:0}),ashfall_rim:Object.freeze({site:"ashfall",x:6.4,z:-4.9,yaw:2.356194}),verge_shelf:Object.freeze({site:"verge",x:-3.1,z:5.8,yaw:-1.047198})}),r2="ashfall_pan";function o2(n,{landings:t=Li,fallback:e=r2}={}){const i=o=>n?typeof n=="string"?new URLSearchParams(n).get(o):typeof n.get=="function"?n.get(o):Object.prototype.hasOwnProperty.call(n,o)?String(n[o]):null:null,s=i("landing");if(s){const o=t[s];if(!o)throw new Error(`link: ?landing=${s} is not a known landing — known: ${Object.keys(t).join(", ")}`);return o}const r=i("site");if(r){const o=a=>{const c=i(a);if(c===null||c==="")return 0;const l=Number(c);if(!Number.isFinite(l))throw new Error(`link: ?${a}=${c} is not a number`);return l};return Object.freeze({site:r,x:o("x"),z:o("z"),yaw:o("yaw")})}return t[e]}const xe=Math.PI*2,Ta=Math.PI/180,si=n=>n<0?0:n>1?1:n,eh=n=>n*n*(3-2*n),Vi=(n,t,e)=>n+(t-n)*e;function $c(n,t=0){const e=n*Ta,i=t*Ta,s=Math.cos(i);return new z(Math.sin(e)*s,Math.sin(i),Math.cos(e)*s)}function a2(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function c2(n){let t=a2(n)||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Ap(n){for(const t of Object.values(n))t&&typeof t=="object"&&Ap(t);return Object.freeze(n)}const jc=Object.freeze(["id","name","sky","suns","sun","bounce","hemi","ambient","fog","ground","grit","rock","horizon","bounds","beds","ambience","props"]),l2=Object.freeze(["distance","camera","area"]),h2=1.4,u2=.8,f2=1.1,d2=.2968,p2=.796;function Kc(n){const t=n/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function m2(n){return .2126*Kc(n>>16&255)+.7152*Kc(n>>8&255)+.0722*Kc(n&255)}function _2(n){if(Number.isFinite(n.sun.gain))return n.sun.gain;const t=Math.max(.05,Math.sin(n.sun.elevationDeg*Math.PI/180)),e=Math.max(1e-4,m2(n.ground.colour)*n.sun.intensity*t);return d2/e**p2}function bp(n){if(n==null||typeof n!="object")throw new Error("SITE_SHAPE: not a record");if("exposure"in n)throw new Error(`SITE_SHAPE '${n.id}': there is no 'exposure' key in a site record. toneMappingExposure is renderer-global (main.js:83) and both render passes happen inside one frame, so an exterior exposure would change the console room's look through the portal in the same frame. Brightness comes from light intensities and albedo. THRESHOLD.md §4.2.`);for(const c of jc)if(!(c in n))throw new Error(`SITE_SHAPE '${n.id}': missing key '${c}'`);for(const c of Object.keys(n))if(!jc.includes(c))throw l2.includes(c)?new Error(`SITE_SHAPE '${n.id}': '${c}' is DERIVED here, not typed in the record`):new Error(`SITE_SHAPE '${n.id}': unknown key '${c}' (keys: ${jc.join(", ")})`);const t=Object.keys(M0);if(!t.includes(n.horizon.silhouette))throw new Error(`SITE_SHAPE '${n.id}': horizon.silhouette '${n.horizon.silhouette}' is not a shipped kind (${t.join(" | ")}). A new shape is ~25 lines in SITE_KIND_BUILDERS and is then shared by every site from then on.`);for(const c of n.props)if(!t.includes(c.kind))throw new Error(`SITE_SHAPE '${n.id}': prop kind '${c.kind}' is not a shipped kind (${t.join(" | ")})`);if(n.bounds.kind!=="polygon")throw new Error(`SITE_SHAPE '${n.id}': bounds.kind must be 'polygon'`);if(!(n.bounds.sides>=5))throw new Error(`SITE_SHAPE '${n.id}': bounds.sides must be >= 5`);if(!(n.bounds.apothem>0))throw new Error(`SITE_SHAPE '${n.id}': bounds.apothem must be > 0`);const e=n.bounds.sides,i=n.bounds.apothem,s=e*i*i*Math.tan(Math.PI/e),r=1.25*2*i/Math.cos(Math.PI/e),o={ref:h2,max:r,fade:.25*r,panWidth:u2,panNear:f2},a={far:Math.ceil(n.sky.radius*1.1/10)*10};return Ap({...n,area:s,distance:o,camera:a})}const Wt=512,Zc=n=>n*Wt,g2=.06,x2=.055,v2=.035;let Af=!1;function Tp(){Af||(Af=!0,Le("ashField",(n,t={})=>{const e=t.p0??48,i=t.amp??.28,s=t.ripple??2.2,r=ve(n,Wt,{p0:e,octaves:4}),o=ve(n,Wt,{p0:Math.max(4,Math.round(e/6)),octaves:2}),a=.38,c=Math.max(1,Math.round(s*Math.cos(a))),l=Math.round(s*Math.sin(a)),h=new Float32Array(Wt*Wt),u=new Float32Array(Wt*Wt),f=new Float32Array(Wt*Wt);for(let d=0;d<Wt;d++){const _=d/Wt;for(let x=0;x<Wt;x++){const m=d*Wt+x,p=x/Wt,v=xe*(c*p+l*_)+(o[m]-.5)*2.4,M=.5-.5*Math.cos(v),y=si(.58*M*(.55+.45*r[m])+.42*r[m]);h[m]=y,u[m]=.7+.3*y,f[m]=.94-.13*y}}return{normalMap:oi(h,Wt,Zc(i*g2)),ormMap:Ge(Wt,u,f,null),normalScale:1,uvScale:[1,1]}}),Le("siteRock",(n,t={})=>{const e=t.p0??24,i=t.amp??1,s=ve(n,Wt,{p0:e,octaves:5}),r=ve(n,Wt,{p0:e*2,octaves:3}),o=new Float32Array(Wt*Wt),a=new Float32Array(Wt*Wt),c=new Float32Array(Wt*Wt);for(let l=0;l<Wt*Wt;l++){const h=1-Math.abs(2*r[l]-1),u=si(.58*s[l]+.42*h);o[l]=u,a[l]=.62+.38*u,c[l]=.92-.2*h}return{normalMap:oi(o,Wt,Zc(i*x2)),ormMap:Ge(Wt,a,c,null),normalScale:1,uvScale:[1,1]}}),Le("policePanel",(n,t={})=>{const e=t.inset??.15,i=t.bead??.045,s=t.depth??1,r=t.plain===!0,o=ve(n,Wt,{p0:96,octaves:3}),a=ve(n,Wt,{p0x:6,p0y:200,octaves:2}),c=new Float32Array(Wt*Wt),l=new Float32Array(Wt*Wt),h=new Float32Array(Wt*Wt),u=e-i,f=e;for(let d=0;d<Wt;d++){const _=d/Wt;for(let x=0;x<Wt;x++){const m=d*Wt+x,p=x/Wt,v=Math.min(p,1-p,_,1-_),M=r?1:eh(si((v-u)/(f-u))),y=.015*(o[m]-.5)+.008*(a[m]-.5);c[m]=si(M+y),l[m]=.72+.28*M,h[m]=.34+.14*(1-M)+.05*o[m]}}return{normalMap:oi(c,Wt,Zc(s*v2)),ormMap:Ge(Wt,l,h,null),normalScale:1,uvScale:[1,1]}}))}const Jc=new Map;function M2(n,t=null){if(Jc.has(n.id))return Jc.get(n.id);Tp();const e={},i=ur(n.ground.recipe,t?t.child("tex."+n.ground.recipe+"."+n.id):null,{p0:n.ground.relief.p0,amp:n.ground.relief.amp,ripple:n.ground.relief.ripple});e.GROUND=new Da({color:n.ground.colour,roughness:1,metalness:0,specularIntensity:n.ground.specular??.15,normalMap:i.normalMap,normalScale:new Nt(i.normalScale,i.normalScale),aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),e.GROUND.userData.uvScale=[n.ground.uvScale,n.ground.uvScale],e.GROUND.userData.cast=!1,e.GROUND.userData.surface=n.ground.recipe;const s=ur("siteRock",t?t.child("tex.siteRock."+n.id):null,{}),r=n.ground.uvScale*.8,o=n.ground.uvScale*.25,a=(c,l)=>{const h=new _n({color:c,roughness:1,metalness:0,normalMap:s.normalMap,normalScale:new Nt(s.normalScale,s.normalScale),aoMap:s.ormMap,roughnessMap:s.ormMap,aoMapIntensity:1,vertexColors:!0});return h.userData.uvScale=[l,l],h.userData.cast=!0,h.userData.surface="siteRock",h};e.ROCK=a(n.rock.colour,r),e.GRIT=a(n.grit.colour,o),e.SKY=new ps({color:16777215,vertexColors:!0,side:un,depthWrite:!1,fog:!1}),e.SUNS=new Map;for(const c of n.suns)e.SUNS.has(c.colour)||e.SUNS.set(c.colour,new ps({color:c.colour,fog:!1}));return e.HORIZON=new ps({color:16777215,vertexColors:!0,fog:!1}),e.DECAL=new ps({map:S2(),color:new Ot(n.ground.colour).multiplyScalar(.42),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e.DECAL.userData.decal=!0,Jc.set(n.id,e),e}let Qc=null;function S2(){if(Qc)return Qc;const n=64,t=(n-1)/2,e=new Uint8Array(n*n*4);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=(s*n+r)*4,a=Math.hypot(r-t,s-t)/t,c=1-eh(si((a-.35)/.65));e[o]=255,e[o+1]=255,e[o+2]=255,e[o+3]=c*255+.5|0}const i=new no(e,n,n,Qe);return i.minFilter=Ue,i.magFilter=Ue,i.generateMipmaps=!1,i.needsUpdate=!0,Qc=i,i}function Wi(n,t,e,i,s,r,o,a,c=0,l=.035){const h=se("siteRock",t,e,i,0,{material:n.ROCK,chamfer:l,cast:!0});return h.position.set(s,r,o),h.rotation.set(c,a,c*.6),h}const An=(n,t,e)=>2*(n*t+n*e+t*e),vi=180;function tl(n,t,e){const{M:i,distance:s,height:r,base:o,tint:a,haze:c}=t;let l=0;for(let E=0;E<vi;E++)l=Math.max(l,e(E/vi));const h=E=>e(E)/(l||1),u=new Float32Array(vi*6*3),f=new Float32Array(vi*6*3),d=new Float32Array(vi*6*3);let _=0;const x=new Ot(c),m=new Ot(a),p=new Ot,v=(E,P,C,g)=>{u[_*3]=E,u[_*3+1]=P,u[_*3+2]=C;const S=Math.pow(si(P/Math.max(g,1e-6)),.6);p.copy(x).lerp(m,S),f[_*3]=p.r,f[_*3+1]=p.g,f[_*3+2]=p.b;const b=1/Math.max(Math.hypot(E,C),1e-6);d[_*3]=-E*b,d[_*3+1]=0,d[_*3+2]=-C*b,_++},M=(E,P,C,g)=>{const S=P[0]-E[0],b=P[1]-E[1],L=P[2]-E[2],O=C[0]-E[0],k=C[1]-E[1],I=C[2]-E[2],D=b*I-L*k,U=S*k-b*O,Y=(E[0]+P[0]+C[0])/3,Z=(E[2]+P[2]+C[2])/3,tt=D*Y+U*Z>0?C:P,K=D*Y+U*Z>0?P:C;v(E[0],E[1],E[2],g),v(tt[0],tt[1],tt[2],g),v(K[0],K[1],K[2],g)};let y=0;const R=o+r;for(let E=0;E<vi;E++){const P=E/vi,C=(E+1)/vi,g=P*xe,S=C*xe,b=Math.sin(g)*s,L=Math.cos(g)*s,O=Math.sin(S)*s,k=Math.cos(S)*s,I=o+r*h(P),D=o+r*h(C),U=-14;M([b,U,L],[O,U,k],[O,D,k],R),M([b,U,L],[O,D,k],[b,I,L],R),y+=s*xe/vi*((I+D)/2)}const A=new en;return A.setAttribute("position",new le(u,3)),A.setAttribute("normal",new le(d,3)),A.setAttribute("color",new le(f,3)),n.add(new Dt(A,i.HORIZON)),{w:s*2,d:s*2,h:R,area:y}}function el(n,t,e){const i=t.map(()=>n()*xe),s=e.reduce((r,o)=>r+o,0);return r=>{let o=0;for(let a=0;a<t.length;a++)o+=e[a]*Math.sin(t[a]*xe*r+i[a]);return .5+.5*(o/s)}}const M0=Object.freeze({ridge(n,t){const e=el(t.rand,[1,2,3,5,8],[1,.62,.38,.22,.11]);return tl(n,t,i=>.24+.76*e(i))},spires(n,t){const e=el(t.rand,[2,3,5],[1,.5,.3]),i=t.rand()*xe,s=t.rand()*xe,r=t.rand()*xe,o=a=>Math.max(Math.pow(.5+.5*Math.sin(13*xe*a+i),14),Math.max(Math.pow(.5+.5*Math.sin(17*xe*a+s),14),Math.pow(.5+.5*Math.sin(23*xe*a+r),14)));return tl(n,t,a=>si(.16+.34*e(a)+.62*o(a)))},dunes(n,t){const e=el(t.rand,[1,2,3],[1,.45,.2]);return tl(n,t,i=>.3+.7*Math.min(1,eh(e(i))*1.35))},outcrop(n,t){const{M:e,rand:i}=t,s=()=>i()-.5;return n.add(Wi(e,1.3,.46,1.05,0,.21,0,0+.2*s(),.03)),n.add(Wi(e,.96,1.04,.82,.06*s(),.7,.05*s(),.34+.3*s(),.04)),n.add(Wi(e,.64,.72,.58,.1+.1*s(),1.32,-.08+.1*s(),-.48+.3*s(),.05)),n.add(Wi(e,.4,.34,.36,.16,1.62,-.04,.9+.4*s(),.08)),n.add(Wi(e,.52,.19,.44,.74,.08,-.38,1.2+.5*s(),.06)),{w:1.3,d:1.05,h:1.72,area:An(1.3,.46,1.05)+An(.96,1.04,.82)+An(.64,.72,.58)+An(.4,.34,.36)+An(.52,.19,.44)}},shard(n,t){const{M:e,rand:i}=t,s=2.6,r=new Dt(new ee(.07,.4,s,5,1),e.ROCK);r.position.set(0,s/2-.1,0),r.rotation.set(.17+.06*i(),i()*xe,.06*(i()-.5)),r.castShadow=!0,n.add(r),n.add(Wi(e,.86,.3,.78,.04,.13,.02,i()*xe,.02)),n.add(Wi(e,.4,.22,.34,-.58,.09,.26,i()*xe,.05));const o=Math.hypot(s,.33);return{w:.9,d:.82,h:s,area:Math.PI*(.07+.4)*o+An(.86,.3,.78)+An(.4,.22,.34)}},marker(n,t){const{M:e,rand:i}=t,s=.34,r=1.86,o=new Me;o.position.set(0,-s,0),o.rotation.set(-.2,.04*(i()-.5),0),n.add(o);const a=se("siteRock",.62,r,.22,0,{material:e.ROCK,chamfer:.03,cast:!0});a.position.y=r/2,o.add(a);let c=An(.62,r,.22);for(let l=0;l<6;l++){const h=.66-l*.02,u=.058-l*.004,f=se("siteRock",h,u,.26,0,{material:e.ROCK,chamfer:.012,cast:!0});f.position.set(0,.3+l*.26,0),o.add(f),c+=An(h,u,.26)}return n.add(Wi(e,.46,.2,.4,.34,.07,-.22,i()*xe,.04)),c+=An(.46,.2,.4),{w:.8,d:.62,h:(r-s)*Math.cos(.2),area:c}}}),bf=2.2,Tf=.02;function y2(n,t,e={}){if(!Object.isFrozen(t))throw new Error("buildSite: pass a record that has been through SITE_SHAPE()");if(e.camera&&e.camera.far<t.sky.radius*1.02)throw new Error(`buildSite '${t.id}': camera.far is ${e.camera.far} but the sky dome is at ${t.sky.radius} m and the horizon at ${t.horizon.distance} m. Set the exterior camera.far to SITE.camera.far (${t.camera.far}) — see SITE_SHAPE's derivation.`);const i=(e.keepOut||[]).map((D,U)=>{if(!Number.isFinite(D.x)||!Number.isFinite(D.z)||!Number.isFinite(D.r)||D.r<=0)throw new Error(`buildSite '${t.id}': keepOut[${U}] is { x: ${D.x}, z: ${D.z}, r: ${D.r} } — every field must be a finite number and r must be positive. A NaN radius disables the keep-out silently, because NaN fails every comparison.`);return{x:D.x,z:D.z,r:D.r}}),s=t.grit.scale[1]*.7,r=Math.hypot(4.2/2,2.1/2),o=(D,U,Y,Z)=>{for(const tt of Y)if(Math.hypot(D-tt.x,U-tt.z)<tt.r+Z)return!1;return!0};let a=0;const c=M2(t,e.rng??null),l=c2("site."+t.id),h=new Me;h.name="siteLive";const u=Object.create(null),f=Object.create(null),d=(D,U,Y)=>(u[D]=(u[D]??0)+Y,f[U]=(f[U]??0)+Y,Ua(U,f[U]),U),_=t.bounds.sides,x=t.bounds.apothem,m=x/Math.cos(Math.PI/_),p=2*x*Math.tan(Math.PI/_);{const D=t.sky.radius,U=new N0(D,12),Y=U.getAttribute("position"),Z=new Float32Array(Y.count*3),tt=new Ot(t.sky.zenith),K=new Ot(t.sky.horizon),q=new Ot;for(let F=0;F<Y.count;F++){const J=Math.pow(si(Y.getY(F)/D),t.sky.gradPower);q.copy(K).lerp(tt,J),Z[F*3]=q.r,Z[F*3+1]=q.g,Z[F*3+2]=q.b}U.setAttribute("color",new le(Z,3)),n.add(new Dt(U,c.SKY));const H=xe*D*D;d("SKY_ZENITH",t.sky.zenith,H),d("SKY_HORIZON",t.sky.horizon,H)}for(const D of t.suns){const U=t.sky.radius*Math.tan(D.angularDeg*.5*Ta),Y=new vs(U,28),Z=new Dt(Y,c.SUNS.get(D.colour));Z.position.copy($c(D.azimuthDeg,D.elevationDeg)).multiplyScalar(t.sky.radius-.5),Z.lookAt(0,0,0),n.add(Z),d("SUN",D.colour,Math.PI*U*U)}{const D=t.horizon.distance*Math.tan(t.horizon.heightDeg*Ta),U=M0[t.horizon.silhouette](n.group,{M:c,rand:l,distance:t.horizon.distance,height:D,base:0,tint:t.horizon.colour,haze:t.fog.colour});d("HORIZON",t.horizon.colour,U.area)}const v=t.ground.discR,M=Math.max(1.8,t.bounds.rimH*1.8),y=Math.max(v+20,t.fog.far*1.25);{const D=new Dt(new vs(v,96),c.GROUND);D.rotation.x=-Math.PI/2,D.receiveShadow=!0,n.add(D);const U=new Dt(new ee(v,v,M,96,1,!0),c.GROUND);U.position.y=-M/2,n.add(U);const Y=new Dt(new Pa(v,y,96,1),c.GROUND);Y.rotation.x=-Math.PI/2,Y.position.y=-M,n.add(Y),d("GROUND",t.ground.colour,Math.PI*v*v),d("GROUND",t.ground.colour,xe*v*M),d("GROUND",t.ground.colour,Math.PI*(y*y-v*v))}const R=1;n.solid(0,-.3,0,2*(m+R),.3,2*(m+R),!0);const A=[];{const Y=Math.min(.55,t.bounds.rimH*.48),Z=t.bounds.rimH-Y,tt=2*.58*Math.tan(Math.PI/_)+.06;let K=0;for(let q=0;q<_;q++){const H=q*xe/_,F=Math.sin(H),J=Math.cos(H),nt=se("siteRock",p+tt,Y,.58,0,{material:c.ROCK,chamfer:.05,cast:!0});nt.position.set(F*(x+.58/2),Y/2,J*(x+.58/2)),nt.rotation.y=H,n.add(nt);const lt=se("siteRock",p+tt*.6,Z,.34,0,{material:c.ROCK,chamfer:.07,cast:!0});lt.position.set(F*(x+.58+.34/2-.08),Y+Z/2,J*(x+.58+.34/2-.08)),lt.rotation.y=H,n.add(lt),K+=An(p+tt,Y,.58)+An(p+tt*.6,Z,.34),A.push({nx:F,nz:J,d:x})}d("ROCK",t.rock.colour,K)}const E=[],P=e.propCollision!==!1,C=$c(t.sun.azimuthDeg,t.sun.elevationDeg),g=new Nt(-C.x,-C.z).normalize().multiplyScalar(.28);let S=0;for(const D of t.props){const U=new Me;U.position.set(D.x,0,D.z),U.rotation.y=D.yaw,U.scale.setScalar(D.scale),n.add(U);const Y=M0[D.kind](U,{M:c,rand:l,scale:D.scale});S+=Y.area*D.scale*D.scale;const Z=Y.w*D.scale,tt=Y.d*D.scale,K=Y.h*D.scale;P&&E.push({x:D.x,z:D.z,hw:Z/2,hd:tt/2,rotY:D.yaw,y0:0,y1:K}),E2(n,c,D.x+g.x,D.z+g.y,Z,tt),D.kind==="marker"&&n.spot("marker",D.x+Math.sin(D.yaw)*1.3,0,D.z+Math.cos(D.yaw)*1.3)}d("ROCK",t.rock.colour,S);{const[D,U]=t.grit.scale;let Y=0,Z=0;for(let K=0;K<t.grit.count;K++){let q,H,F,J;for(let yt=0;q=Math.sqrt(l())*x*.97,H=l()*xe,F=Math.sin(H)*q,J=Math.cos(H)*q,!o(F,J,i,s);yt++)if(yt>=24){Z+=1,q=NaN;break}if(Number.isNaN(q))continue;const nt=Vi(D,U,l()),lt=nt*Vi(.8,1.4,l()),ct=nt*Vi(.8,1.4,l()),pt=nt*Vi(.4,.9,l()),gt=se("siteRock",lt,pt,ct,0,{material:c.GRIT,chamfer:.012,cast:!1});gt.position.set(F,pt*.05,J),gt.rotation.set(.1*(l()-.5),l()*xe,.1*(l()-.5)),n.add(gt),Y+=An(lt,pt,ct)}d("GRIT",t.grit.colour,Y),a=Z;let tt=0;for(let K=0;K<3;K++){let q,H,F,J;for(let gt=0;q=Vi(4.5,x*.82,l()),H=l()*xe,F=Math.sin(H)*q,J=Math.cos(H)*q,!o(F,J,i,r);gt++)if(gt>=24){q=NaN;break}if(Number.isNaN(q))continue;const nt=Vi(2.4,4.2,l()),lt=Vi(1.2,2.1,l()),ct=Vi(.09,.14,l()),pt=se("ashField",nt,ct,lt,0,{material:c.GROUND,chamfer:.055,cast:!1});pt.position.set(F,ct/2-.02,J),pt.rotation.y=l()*xe,n.add(pt),tt+=nt*lt+2*(nt+lt)*ct}d("GROUND",t.ground.colour,tt)}const b={};{const D=_2(t),U=new _u(t.sun.colour,t.sun.intensity*D);U.position.copy(C).multiplyScalar(120),b.key=U;const Y=new _u(t.bounce.colour,t.bounce.intensity*D);Y.position.copy($c(t.bounce.azimuthDeg,23.962)).multiplyScalar(98.4),b.bounce=Y,b.hemi=new Rd(t.hemi.sky,t.hemi.ground,t.hemi.intensity*D),b.ambient=new Cd(t.ambient.colour,t.ambient.intensity*D);const Z=new Na(16774121,bf*Tf,9,2);Z.position.set(0,1.1,0),b.doorSpill=Z;for(const tt of[b.key,b.bounce,b.hemi,b.ambient,b.doorSpill])n.group.add(tt),n.lights.push(tt)}n.userData??(n.userData={}),n.userData.collision={planes:A,hulls:[],boxes:E},n.spot("centre",0,0,0);let L=l()*xe,O=0;const k=D=>{L+=D*t.ambience.gustRate*xe;const U=Math.sin(L),Y=Math.sin(L*.3716+1.7);O=si(.5+.36*U+.2*Y)};k(0);const I=t.beds.map(([D])=>D);return{group:n.group,live:h,areas:u,update:k,SITE:t,keepOut:i,gritRejected:a,fog:new P0(t.fog.colour,t.fog.near,t.fog.far),distance:t.distance,surface:t.ground.surface,beds:t.beds,bedIds:I,collision:n.userData.collision,lights:b,doorSpill:b.doorSpill,sunDir:C,setDoorSpill(D){b.doorSpill.intensity=bf*Math.max(Tf,si(D))},contact(D,U){return Lp(c,D,U)},placeContact(D,U,Y){D.position.set(U+g.x,.006,Y+g.y)},get gust(){return O},get windLevel(){return t.ambience.windGain*(.62+.38*O)},buckets:7}}function E2(n,t,e,i,s,r){const o=Lp(t,s,r),a=Rp(s,r);return o.position.set(e,.006,i),n.add(o),n.decals.push({x0:e-s/2-a,x1:e+s/2+a,z0:i-r/2-a,z1:i+r/2+a}),o}function Rp(n,t){return Math.min(Math.max(Math.min(n,t)*.3,.05),.3)}function Lp(n,t,e){const i=Rp(t,e),s=new Dt(new Ii(t+2*i,e+2*i),n.DECAL);return s.rotation.x=-Math.PI/2,s.name="boxContact",s.renderOrder=2,s}const w2=bp({id:"ashfall",name:"the Ashfall",sky:{zenith:3095895,horizon:11567189,gradPower:2.2,radius:180},suns:[{colour:16771528,angularDeg:.5,azimuthDeg:214,elevationDeg:13}],sun:{colour:16771528,intensity:1.65,azimuthDeg:214,elevationDeg:13,gain:9.667},bounce:{colour:10463428,intensity:.263,azimuthDeg:34},hemi:{sky:11567189,ground:4866104,intensity:.675},ambient:{colour:14734528,intensity:.263},fog:{colour:11567189,near:11,far:84},ground:{colour:4866104,recipe:"ashField",surface:"grit",uvScale:1.1,discR:14,relief:{p0:48,amp:.28,ripple:2.2}},grit:{colour:4143674,count:160,scale:[.08,.3]},rock:{colour:6179644},horizon:{silhouette:"ridge",colour:4143674,heightDeg:3.4,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:1.15},beds:[["ext_wind",{rate:1}],["ext_grit",{rate:1}]],ambience:{windGain:.34,gustRate:.14},props:[{kind:"outcrop",x:2.9,z:1.6,yaw:.9,scale:1},{kind:"outcrop",x:-5.1,z:-3.4,yaw:2.6,scale:1.45},{kind:"marker",x:4.8,z:-5.9,yaw:4.1,scale:1},{kind:"shard",x:-1.2,z:6.3,yaw:.3,scale:1.2}]}),A2=bp({id:"verge",name:"the Verge",sky:{zenith:3820126,horizon:11057348,gradPower:1.6,radius:180},suns:[{colour:15398655,angularDeg:.4,azimuthDeg:96,elevationDeg:41}],sun:{colour:15398655,intensity:2.18,azimuthDeg:96,elevationDeg:41,gain:.56},bounce:{colour:10465469,intensity:.31,azimuthDeg:276},hemi:{sky:11057348,ground:7174788,intensity:.94},ambient:{colour:15134975,intensity:.34},fog:{colour:11057348,near:9,far:64},ground:{colour:9345699,recipe:"ashField",surface:"grit",uvScale:1.6,discR:14,relief:{p0:62,amp:.14,ripple:4}},grit:{colour:5596014,count:210,scale:[.06,.22]},rock:{colour:7174788},horizon:{silhouette:"spires",colour:5596014,heightDeg:5.1,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:.9},beds:[["ext_wind",{rate:1.34}],["ext_grit",{rate:.78}]],ambience:{windGain:.22,gustRate:.09},props:[{kind:"shard",x:3.6,z:-1.1,yaw:.6,scale:1.3},{kind:"shard",x:-4.8,z:2.4,yaw:2.1,scale:.85},{kind:"outcrop",x:1.9,z:4.1,yaw:1.05,scale:1},{kind:"marker",x:-2.2,z:-5.6,yaw:3.9,scale:1.45}]}),nh=Object.freeze({ashfall:w2,verge:A2}),b2=n=>n<0?0:n>1?1:n,Wn=Object.freeze({S:512,TILE:.45,SKIN:15e-5,ROUGH:.44,ROUGH_PEEL:.06,ROUGH_BRUSH:.05,SPECULAR:.02,NORMAL_SCALE:1}),T2=1,R2=.6,L2=2.4,C2=400,I2=6,P2=512,D2=3;let Rf=!1;function O2(){Rf||(Rf=!0,Le("policePaint",n=>{const t=Wn.S,e=t*t,i=ve(n,t,{p0:96,octaves:3}),s=ve(n,t,{p0x:C2,p0y:I2,octaves:2}),r=ve(n,t,{p0x:P2,p0y:D2,octaves:2}),o=new Float32Array(e),a=new Float32Array(e);for(let c=0;c<e;c++)o[c]=T2*(i[c]-.5)+R2*(s[c]-.5)+L2*(r[c]-.5),a[c]=b2(Wn.ROUGH+Wn.ROUGH_PEEL*(i[c]-.5)*2-Wn.ROUGH_BRUSH*(s[c]-.5)*2);return{normalMap:oi(o,t,Wn.SKIN*(Wn.S/Wn.TILE)),ormMap:Ge(t,null,a,null),uvScale:[Wn.TILE,Wn.TILE],normalScale:Wn.NORMAL_SCALE,tinted:!0}}))}function N2(n=null){return O2(),ur("policePaint",n)}function ih(n,t){if(!n.defines||!("PHYSICAL"in n.defines)||!("STANDARD"in n.defines))throw new Error(`boxpaint: ${t} lost its PHYSICAL define, so specularIntensity is dead - something copied a Standard material over it (docs/BOX.md 4.1)`);return n}function nl(n,t,e={}){const i=new Da({color:n,roughness:1,metalness:0,specularIntensity:e.specularIntensity??Wn.SPECULAR,normalMap:t.normalMap,normalScale:new Nt(t.normalScale,t.normalScale),aoMap:t.ormMap,roughnessMap:t.ormMap,aoMapIntensity:1,vertexColors:!0});return i.userData.uvScale=t.uvScale,i.userData.cast=!0,i.userData.surface="policePaint",ih(i,"paintMaterial")}const ls=Object.freeze({S:256,ETCH_P0:32,DRAW_FINE_X:200,DRAW_LONG_Y:4,A_ETCH:.085,A_DRAW:.045,SEED:"tex.frostedGlass"}),U2=n=>n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055;let qo=null;function F2(){if(qo)return qo;const n=ls.S,t=n*n,e=new so(ls.SEED),i=ve(e,n,{p0:ls.ETCH_P0,octaves:3}),s=ve(e,n,{p0x:ls.DRAW_FINE_X,p0y:ls.DRAW_LONG_Y,octaves:2}),r=new Uint8Array(t*4);let o=0,a=2,c=-1;for(let h=0;h<t;h++){const u=1-ls.A_ETCH*(1-i[h])-ls.A_DRAW*(1-s[h]),f=Math.round(U2(u)*255);r[h*4]=f,r[h*4+1]=f,r[h*4+2]=f,r[h*4+3]=255,o+=u,u<a&&(a=u),u>c&&(c=u)}const l=new no(r,n,n,Qe);return l.colorSpace=Je,l.wrapS=l.wrapT=gs,l.magFilter=Ue,l.minFilter=Yn,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,qo={map:l,data:r,width:n,height:n,mulMin:a,mulMax:c,mulMean:o/t},qo}const qi=Object.freeze({TILE:.22,NORMAL_SCALE:.35,ROUGHNESS:.9,SPECULAR:.1,GLOW:16773850,GLOW_I:.09});function k2(n,t,e={}){const i=F2(),s=new Da({color:n,map:i.map,emissiveMap:i.map,roughness:e.roughness??qi.ROUGHNESS,metalness:0,specularIntensity:e.specularIntensity??qi.SPECULAR,emissive:e.emissive??qi.GLOW,emissiveIntensity:e.emissiveIntensity??qi.GLOW_I,normalMap:t.normalMap,normalScale:new Nt(qi.NORMAL_SCALE,qi.NORMAL_SCALE),vertexColors:!0});return s.userData.uvScale=[qi.TILE,qi.TILE],s.userData.cast=!1,s.userData.surface="policePaint",ih(s,"glazingMaterial")}function B2(n,t={}){const e=W2(),i=new _n({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,emissive:t.emissive??16772301,emissiveMap:e.map,emissiveIntensity:t.emissiveIntensity??.55,vertexColors:!0});return i.userData.cast=!0,i}function z2(n,t={}){const e=new Da({color:n,roughness:t.roughness??.45,metalness:0,specularIntensity:t.specularIntensity??.2,emissive:t.emissive??16773850,emissiveIntensity:t.emissiveIntensity??.95,vertexColors:!0});return e.userData.cast=!1,ih(e,"lensMaterial")}const jt=Object.freeze({W:1024,H:128,BOARD_W:1.15,BOARD_H:.13,FIELD:Object.freeze([228,224,210]),INK:Object.freeze([26,29,36]),L1_TEXT:"POLICE",L1_CAP:60,L1_TOP:34,L1_X0:62,L1_X1:402,L1_WEIGHT:.13,L3_TEXT:"BOX",L3_CAP:60,L3_TOP:34,L3_X0:660,L3_X1:960,L3_WEIGHT:.13,L2_TEXT:"PUBLIC",L2_CAP:24,L2_TOP:28,L2_X0:452,L2_X1:622,L2_WEIGHT:.165,L4_TEXT:"CALL",L4_CAP:24,L4_TOP:68,L4_X0:452,L4_X1:622,L4_WEIGHT:.165}),H2=jt.W/jt.BOARD_W/(jt.H/jt.BOARD_H),G2={A:[[[0,10],[3,0],[6,10]],[[1.4,5.4],[4.6,5.4]]],B:[[[0,0],[0,10]],[[0,0],[3.4,0],[4.7,.5],[5.4,1.6],[5.4,3.4],[4.7,4.5],[3.4,5],[0,5]],[[0,5],[3.8,5],[5.2,5.6],[6,6.8],[6,8.2],[5.2,9.4],[3.8,10],[0,10]]],C:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.15,9.25],[5.12,8.25]]],D:[[[0,0],[0,10]],[[0,0],[3,0],[4.6,.55],[5.6,1.9],[6,3.6],[6,6.4],[5.6,8.1],[4.6,9.45],[3,10],[0,10]]],E:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]],[[0,10],[5.8,10]]],F:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]]],G:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.5,9.1],[5.6,7.9],[6,6.2]],[[3.3,5.7],[6,5.7]]],H:[[[0,0],[0,10]],[[6,0],[6,10]],[[0,5],[6,5]]],I:[[[2,0],[2,10]]],J:[[[5,0],[5,7.3],[4.6,8.7],[3.6,9.45],[2.3,9.6],[1.1,9.3],[.25,8.5],[0,7.6]]],K:[[[0,0],[0,10]],[[5.8,0],[.4,5.4]],[[2.3,3.6],[6,10]]],L:[[[0,0],[0,10]],[[0,10],[5.6,10]]],M:[[[0,10],[0,0],[3,6],[6,0],[6,10]]],N:[[[0,10],[0,0],[6,10],[6,0]]],O:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]]],P:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]]],Q:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]],[[3.7,7.4],[6,10]]],R:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]],[[2.6,5.6],[6,10]]],S:[[[5.9,2.1],[5.2,.95],[3.9,.35],[2.3,.4],[1,1],[.25,2.1],[.35,3.3],[1.1,4.15],[2.4,4.7],[3.9,5.3],[5.1,5.9],[5.85,6.9],[5.9,8.1],[5.1,9.2],[3.7,9.65],[2.1,9.6],[.8,9.1],[.1,8]]],T:[[[0,0],[6,0]],[[3,0],[3,10]]],U:[[[0,0],[0,6.8],[.4,8.2],[1.5,9.23],[3,9.6],[4.5,9.23],[5.6,8.2],[6,6.8],[6,0]]],V:[[[0,0],[3,10],[6,0]]],W:[[[0,0],[1.5,10],[3,3.4],[4.5,10],[6,0]]],X:[[[0,0],[6,10]],[[6,0],[0,10]]],Y:[[[0,0],[3,5.2],[6,0]],[[3,5.2],[3,10]]],Z:[[[0,0],[6,0]],[[6,0],[0,10]],[[0,10],[6,10]]],"&":[[[6,8.6],[4.4,6.4],[3,4.6],[2,3.2],[1.7,1.9],[2.5,.6],[3.7,.5],[4.5,1.4],[4.3,2.7],[3.2,4],[1.9,5.3],[.8,6.7],[.5,8.2],[1.2,9.3],[2.6,9.7],[4.1,9.2],[5.2,8],[6,6.6]]]," ":[]},V2={I:4," ":3.4},Xo=n=>V2[n]??6,Lf=2.2;let Yo=null;function W2(){if(Yo)return Yo;const n=jt.W,t=jt.H,e=new Float32Array(n*t),i=v=>t-1-v,s=Gr(e,n,t,jt.L1_TEXT,jt.L1_CAP,jt.L1_TOP,jt.L1_X0,jt.L1_X1,jt.L1_WEIGHT),r=Gr(e,n,t,jt.L2_TEXT,jt.L2_CAP,jt.L2_TOP,jt.L2_X0,jt.L2_X1,jt.L2_WEIGHT),o=Gr(e,n,t,jt.L3_TEXT,jt.L3_CAP,jt.L3_TOP,jt.L3_X0,jt.L3_X1,jt.L3_WEIGHT),a=Gr(e,n,t,jt.L4_TEXT,jt.L4_CAP,jt.L4_TOP,jt.L4_X0,jt.L4_X1,jt.L4_WEIGHT),c=new Uint8Array(n*t*4),[l,h,u]=jt.FIELD,[f,d,_]=jt.INK;let x=0,m=0;for(let v=0;v<t;v++){const M=v*n,y=i(v)*n,R=1-(v+.5)/t;for(let A=0;A<n;A++){const E=e[M+A],P=(y+A)*4;c[P]=l+(f-l)*E+.5,c[P+1]=h+(d-h)*E+.5,c[P+2]=u+(_-u)*E+.5,c[P+3]=255,x+=E,m+=E*R}}const p=new no(c,n,t,Qe);return p.colorSpace=Je,p.wrapS=p.wrapT=gs,p.magFilter=Ue,p.minFilter=Yn,p.generateMipmaps=!0,p.anisotropy=8,p.needsUpdate=!0,Yo={map:p,data:c,width:n,height:t,lines:[s,r,o,a],headlineBand:[jt.L1_TOP,jt.L1_TOP+jt.L1_CAP],inkCentroidV:x>0?m/x:.5},Yo}function Gr(n,t,e,i,s,r,o,a,c,l=H2){const h=i.split(" ").filter(C=>C.length),u=h.reduce((C,g)=>C+g.length,0),f=h.length-1,d=u-h.length,_=s/10,x=_*l;let m=0;for(const C of h)for(const g of C)m+=Xo(g);const p=.5*c*s,v=(a-o-2*p)/x,M=d+f*Lf,y=M>0?(v-m-f*Xo(" "))/M:0,R=Xo(" ")+Lf*y;let A=(o+p)/x,E=1/0,P=-1/0;for(let C=0;C<h.length;C++){const g=h[C];for(let S=0;S<g.length;S++){const b=g[S],L=G2[b];if(L===void 0)throw new Error(`boxpaint: no glyph for '${b}'`);for(const O of L){for(const k of O){const I=(A+k[0])*x;I-p<E&&(E=I-p),I+p>P&&(P=I+p)}q2(n,t,e,O,x,_,A,r,p)}A+=Xo(b),S<g.length-1&&(A+=y)}C<h.length-1&&(A+=R)}return{text:i,cap:s,topY:r,x0:o,x1:a,track:y,wordGap:R,stem:2*p,left:E,right:P}}function q2(n,t,e,i,s,r,o,a,c){for(let l=0;l<i.length-1;l++){const h=(o+i[l][0])*s,u=a+i[l][1]*r,f=(o+i[l+1][0])*s,d=a+i[l+1][1]*r,_=f-h,x=d-u,m=_*_+x*x,p=c+1,v=Math.max(0,Math.floor(Math.min(h,f)-p)),M=Math.min(t-1,Math.ceil(Math.max(h,f)+p)),y=Math.max(0,Math.floor(Math.min(u,d)-p)),R=Math.min(e-1,Math.ceil(Math.max(u,d)+p));for(let A=y;A<=R;A++){const E=A+.5,P=A*t;for(let C=v;C<=M;C++){const g=C+.5;let S=m>0?((g-h)*_+(E-u)*x)/m:0;S=S<0?0:S>1?1:S;const b=g-(h+S*_),L=E-(u+S*x),O=c+.5-Math.sqrt(b*b+L*L);if(O<=0)continue;const k=O>1?1:O;k>n[P+C]&&(n[P+C]=k)}}}}const Vr=Object.freeze({W:192,H:256,PLATE_W:.288,PLATE_H:.384,FIELD:jt.FIELD,INK:jt.INK,BORDER_IN:4,BORDER_T:8,L1_TEXT:"POLICE TELEPHONE",L1_CAP:15,L1_TOP:22,L1_X0:18,L1_X1:174,L1_WEIGHT:.15,L2_TEXT:"FREE",L2_CAP:28,L2_TOP:44,L2_X0:52,L2_X1:140,L2_WEIGHT:.13,L3_TEXT:"FOR USE OF",L3_CAP:14,L3_TOP:78,L3_X0:36,L3_X1:156,L3_WEIGHT:.17,L4_TEXT:"PUBLIC",L4_CAP:28,L4_TOP:96,L4_X0:44,L4_X1:148,L4_WEIGHT:.13,L5_TEXT:"ADVICE & ASSISTANCE",L5_CAP:12,L5_TOP:140,L5_X0:16,L5_X1:176,L5_WEIGHT:.175,L6_TEXT:"OBTAINABLE IMMEDIATELY",L6_CAP:12,L6_TOP:156,L6_X0:12,L6_X1:180,L6_WEIGHT:.175,L7_TEXT:"OFFICERS & CARS",L7_CAP:12,L7_TOP:180,L7_X0:30,L7_X1:162,L7_WEIGHT:.175,L8_TEXT:"RESPOND TO ALL CALLS",L8_CAP:12,L8_TOP:196,L8_X0:18,L8_X1:174,L8_WEIGHT:.175,L9_TEXT:"PULL TO OPEN",L9_CAP:20,L9_TOP:218,L9_X0:22,L9_X1:170,L9_WEIGHT:.13}),X2=Vr.W/Vr.PLATE_W/(Vr.H/Vr.PLATE_H);let $o=null;function Y2(){if($o)return $o;const n=Vr,t=n.W,e=n.H,i=new Float32Array(t*e),s=M=>e-1-M;{const M=n.BORDER_IN,y=n.BORDER_IN+n.BORDER_T;for(let R=M;R<e-M;R++){const A=R>=y&&R<e-y;for(let E=M;E<t-M;E++)A&&E>=y&&E<t-y||(i[R*t+E]=1)}}const r=[];for(let M=1;M<=9;M++)r.push(Gr(i,t,e,n["L"+M+"_TEXT"],n["L"+M+"_CAP"],n["L"+M+"_TOP"],n["L"+M+"_X0"],n["L"+M+"_X1"],n["L"+M+"_WEIGHT"],X2));const[o,a,c]=r,l=new Uint8Array(t*e*4),[h,u,f]=n.FIELD,[d,_,x]=n.INK;let m=0,p=0;for(let M=0;M<e;M++){const y=M*t,R=s(M)*t,A=1-(M+.5)/e;for(let E=0;E<t;E++){const P=i[y+E],C=(R+E)*4;l[C]=h+(d-h)*P+.5,l[C+1]=u+(_-u)*P+.5,l[C+2]=f+(x-f)*P+.5,l[C+3]=255,m+=P,p+=P*A}}const v=new no(l,t,e,Qe);return v.colorSpace=Je,v.wrapS=v.wrapT=gs,v.magFilter=Ue,v.minFilter=Yn,v.generateMipmaps=!0,v.anisotropy=8,v.needsUpdate=!0,$o={map:v,data:l,width:t,height:e,lines:r,inkCentroidV:m>0?p/m:.5,inkFraction:m/(t*e)},$o}function $2(n,t={}){const e=Y2(),i=new _n({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,vertexColors:!0});return i.userData.cast=!1,i}const Te=Object.freeze({FOOT:1.372,HALF:.686,WALL_T:.07,FRONT_T:.1,P_E:.071,DOOR_Z:.686,HINGE_Z:.646,FRONT_BACK:.586,APER_W:1.15,APER_HW:.575,APER_H:2.11,POST:.111,PROUD:.02,BODY_H:2.28,PLINTH_W:1.452,PLINTH_H:.12,PLINTH_PROUD:.04,SIGN_W:1.452,SIGN_Y0:2.28,SIGN_Y1:2.5,SIGN_BOARD_H:.13,SIGN_BOARD_T:.014,ROOF:Object.freeze([Object.freeze({w:1.412,y0:2.5,y1:2.57}),Object.freeze({w:1.312,y0:2.57,y1:2.63}),Object.freeze({w:1.212,y0:2.63,y1:2.68})]),HEAD_D:.615,REVEAL_D:.515,REVEAL_CLEAR:.02,FRAME_T:.02,FRAME_H:2.153,STILE_W:.075,MUNTIN_W:.07,STILE_AT:.5575,BAY_AT:.2775,PANEL_W:.52,PANEL_T:.01,PANEL_LO_H:.52,PANEL_LO_Y:.49,PANEL_HI_H:.58,PANEL_HI_Y:1.11,LEAF_W:.575,LEAF_H:2.11,LEAF_T:.04,OPEN_ANGLE:Math.PI/2,LEAF_PROUD_OUT:.025,LEAF_PROUD_IN:.015,INNER_SETBACK:.06,TOP:3.07,CHAMFER:.004}),Cf=Object.freeze([Object.freeze({id:"postR",x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"postL",x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"block",x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:2.28})]),Xs=(n,t,e,i,s,r)=>({min:new z(n,t,e),max:new z(i,s,r)}),Cp=Object.freeze([Xs(-.686,0,-.686,.686,2.28,-.616),Xs(.616,0,-.686,.686,2.28,.686),Xs(-.686,0,-.686,-.616,2.28,.686),Xs(-.726,2.28,-.726,.726,2.5,.726),Xs(.575,0,.586,.686,2.28,.686),Xs(-.686,0,.586,-.575,2.28,.686)]);let il=null;function j2(){return il||(il=new xa(Cp,1)),il}const hs=Object.freeze({BLUE:1519185,TRIM:991545,SIGN:13223090,LENS:15985366,GLASS:10196622,NOTICE:13223090,BRASS:11044671}),jo=Object.freeze({colour:16773332,intensity:.55,distance:2.6,decay:2});let sl=null;function Ip(n=null){if(sl)return sl;const t=N2(n),e={BLUE:nl(hs.BLUE,t),TRIM:nl(hs.TRIM,t),GLASS:k2(hs.GLASS,t),SIGN:B2(hs.SIGN),LENS:z2(hs.LENS),NOTICE:$2(hs.NOTICE),BRASS:nl(hs.BRASS,t)};for(const i of js){const s=e[i];if(s.metalness!==0)throw new Error(`boxPalette: ${i}.metalness is ${s.metalness}; there is no envMap in either scene, so metalness above 0 only scales diffuse down (THRESHOLD 10 I)`);if(s.metalnessMap)throw new Error(`boxPalette: ${i} carries a metalnessMap; see the metalness rule above`)}return sl=e,e}let rl=null,ol=null;function K2(){if(rl)return rl;const n=Ss(Te.APER_W,Te.SIGN_BOARD_H,Te.SIGN_BOARD_T,Te.CHAMFER).clone(),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,rl=n,n}const Ei=Object.freeze({SIDE:1,X:.135,ESC_Y:1.25,ESC_R:.024,ESC_T:.006,ESC_Z:.009,KEY_W:.007,KEY_H:.015,PULL_Y:1.07,PULL_W:.014,PULL_H:.12,BOSS:.016,BOSS_D:.006,BOSS_Z:.009,PULL_D:.006,PULL_Z:.011}),Z2=(()=>{const n=Ei,t=(e,i,s)=>2*(e*i+e*s+i*s);return t(n.ESC_R*2,n.ESC_R*2,n.ESC_T)+t(n.PULL_W,n.PULL_H,n.PULL_D)+2*t(n.BOSS,n.BOSS,n.BOSS_D)})();let Ko=null;function J2(){if(Ko)return Ko;const n=Ei,t=[],e=(r,o,a,c)=>{const l=Ba(r.index?r.toNonIndexed():r);return l.translate(o,a,c),t.push(l),l},i=new ee(n.ESC_R,n.ESC_R,n.ESC_T,20).toNonIndexed();i.rotateX(Math.PI/2),e(i,0,n.ESC_Y,n.ESC_Z),e(Ss(n.PULL_W,n.PULL_H,n.PULL_D,Te.CHAMFER).clone(),0,n.PULL_Y,n.PULL_Z);for(const r of[-1,1])e(Ss(n.BOSS,n.BOSS,n.BOSS_D,Te.CHAMFER).clone(),0,n.PULL_Y+r*(n.PULL_H/2-n.BOSS/2),n.BOSS_Z);const s=G0(t,!1);if(!s)throw new Error("policeBox: the door furniture merged to null — mismatched attributes");return Ko=s,Ko}const Tn=Object.freeze({W:.288,H:.384,T:.004,CX:.305,CY:1.145,CZ:.696,SIDE:-1}),Q2=2*(Tn.W*Tn.H+Tn.W*Tn.T+Tn.H*Tn.T);function tE(){if(ol)return ol;const n=Ba(Ss(Tn.W,Tn.H,Tn.T,Te.CHAMFER).clone()),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,ol=n,n}const Xe=Object.freeze((()=>{const s=.17066666666666666;return{BAR:.024,H:.56,Y:1.76,ROWS:3,LIGHT_H:s,DY:(s+.024)/2}})()),Ye=Object.freeze({W:.395,H:Xe.H,T:.004,X:.2875,Y:Xe.Y,Z:.688}),eE=2*(Ye.W*Ye.H+Ye.W*Ye.T+Ye.H*Ye.T),js=["BLUE","TRIM","GLASS","SIGN","LENS","NOTICE","BRASS"];function nE(n,t=Ip()){var k;for(const I of js)if(!(t!=null&&t[I]))throw new Error(`policeBox: palette is missing '${I}' (needs ${js.join(", ")})`);const e=Te,i=new Set,s={};let r=0;const o=I=>js.find(D=>t[D]===I)||"UNKNOWN",a=(I,D)=>{const U=o(I);s[U]=(s[U]||0)+D},c=(I,D,U,Y,Z,tt,K,q,H=0,F=null)=>{var nt;let J;return F?(J=new Dt(F,I),J.castShadow=((nt=I.userData)==null?void 0:nt.cast)??!1,J.receiveShadow=!0):J=se("appliance",U,Y,Z,0,{material:I,chamfer:e.CHAMFER}),J.position.set(tt,K,q),H&&(J.rotation.y=H),J.name=D,n.add(J),i.add(J.geometry.uuid),r++,a(I,2*(U*Y+U*Z+Y*Z)),J},l=Math.PI/2,h=Object.freeze([{r:0,ax:0,az:-1},{r:l,ax:1,az:0},{r:l,ax:-1,az:0}]),u=(I,D,U)=>I.ax?[I.ax*U,D]:[D,I.az*U];for(const[I,D,U]of[[0,-.706,0],[.706,0,l],[-.706,0,l]])c(t.TRIM,"plinth",e.PLINTH_W,e.PLINTH_H,e.PLINTH_PROUD,I,e.PLINTH_H/2,D,U);for(const[I,D,U]of[[0,-.651,0],[.651,0,l],[-.651,0,l]])c(t.BLUE,"bodyWall",e.FOOT,e.BODY_H,e.WALL_T,I,e.BODY_H/2,D,U);for(const I of[-1,1])for(const D of[-1,1])c(t.TRIM,"cornerPost",e.POST,e.BODY_H,e.POST,I*.6505,e.BODY_H/2,D*.6505);for(const I of[-1,1])c(t.BLUE,"doorJamb",e.POST,e.BODY_H,e.FRONT_T,I*.6305,e.BODY_H/2,e.DOOR_Z-e.FRONT_T/2);c(t.BLUE,"headLining",e.APER_W,e.BODY_H-e.APER_H,e.HEAD_D,0,(e.APER_H+e.BODY_H)/2,e.P_E+e.HEAD_D/2);const f=e.HALF-e.WALL_T-e.APER_HW-e.REVEAL_CLEAR;for(const I of[-1,1])c(t.BLUE,"revealSide",f,e.APER_H,e.REVEAL_D,I*(e.APER_HW+e.REVEAL_CLEAR+f/2),e.APER_H/2,e.P_E+e.REVEAL_D/2);c(t.TRIM,"sillPlate",2*(e.HALF-e.WALL_T),.004,e.REVEAL_D,0,.002,e.P_E+e.REVEAL_D/2);const d=[{y:.185,h:.07},{y:.785,h:.05},{y:1.445,h:.07},{y:2.075,h:.07}],_=e.HALF+e.FRAME_T/2;for(const I of h){for(const Z of d){const[tt,K]=u(I,0,_);c(t.TRIM,"rail",e.FOOT,Z.h,e.FRAME_T,tt,Z.y,K,I.r)}for(const Z of[-1,1]){const[tt,K]=u(I,Z*e.STILE_AT,_);c(t.TRIM,"faceStile",e.STILE_W,e.FRAME_H,e.FRAME_T,tt,e.BODY_H-e.FRAME_H/2,K,I.r)}const[D,U]=u(I,0,_);c(t.TRIM,"faceMuntin",e.MUNTIN_W,e.FRAME_H,e.FRAME_T,D,e.BODY_H-e.FRAME_H/2,U,I.r);const Y=e.HALF+e.PANEL_T/2;for(const Z of[-1,1])for(const tt of[{h:e.PANEL_LO_H,y:e.PANEL_LO_Y},{h:e.PANEL_HI_H,y:e.PANEL_HI_Y}]){const[K,q]=u(I,Z*e.BAY_AT,Y);c(t.BLUE,"panelField",e.PANEL_W,tt.h,e.PANEL_T,K,tt.y,q,I.r)}}const x=e.HALF+e.PROUD-e.APER_HW;for(const I of[-1,1])c(t.TRIM,"archSide",x,e.FRAME_H,e.FRAME_T,I*(e.APER_HW+x/2),e.BODY_H-e.FRAME_H/2,e.DOOR_Z+e.FRAME_T/2);c(t.TRIM,"archHead",2*(e.HALF+e.PROUD),.17,e.FRAME_T,0,e.BODY_H-.085,e.DOOR_Z+e.FRAME_T/2);const m=.79,p=Xe.H,v=Xe.BAR,M=e.HALF+.006;for(const I of h){const[D,U]=u(I,0,M);c(t.GLASS,"window",m,p,.012,D,Xe.Y,U,I.r);const[Y,Z]=u(I,0,_);for(const tt of[-1,1]){const[K,q]=u(I,tt*.1975,_);c(t.TRIM,"glazingBar",v,p,v,K,Xe.Y,q,I.r)}for(const tt of[-1,1])c(t.TRIM,"glazingBar",m,v,v,Y,Xe.Y+tt*Xe.DY,Z,I.r)}c(t.TRIM,"entablature",e.SIGN_W,e.SIGN_Y1-e.SIGN_Y0,e.SIGN_W,0,(e.SIGN_Y0+e.SIGN_Y1)/2,0);const y=(e.SIGN_Y0+e.SIGN_Y1)/2,R=K2();for(const[I,D,U]of[[0,1,0],[0,-1,Math.PI],[1,0,l],[-1,0,-l]])c(t.TRIM,"signCase",1.21,.15,.01,I*.728,y,D*.728,U),c(t.SIGN,"signBoard",e.APER_W,e.SIGN_BOARD_H,e.SIGN_BOARD_T,I*.733,y,D*.733,U,R);for(const I of e.ROOF)c(t.TRIM,"roofTier",I.w,I.y1-I.y0,I.w,0,(I.y0+I.y1)/2,0);const A=[["lampPlinth",.2,2.68,2.72],["lampStalk",.09,2.72,2.87],["lampGallery",.15,2.87,2.9],["lampCowl",.15,3.01,3.034],["lampFinial",.045,3.034,3.07]];for(const[I,D,U,Y]of A)c(t.TRIM,I,D,Y-U,D,0,(U+Y)/2,0);const E=.072,P=2.9,C=3.01;for(const[I,D]of[[1,0],[-1,0],[0,1],[0,-1]])c(t.TRIM,"lampRib",.016,C-P,.016,I*.068,(P+C)/2,D*.068);{const I=C-P,D=new ee(E,E,I,12),U=new Dt(D,t.LENS);U.position.set(0,(P+C)/2,0),U.name="lampLens",U.castShadow=!1,U.receiveShadow=!0,n.add(U),i.add(D.uuid),r++,a(t.LENS,2*Math.PI*E*I+2*Math.PI*E*E)}const g=new Me;g.name="boxLeaves";const S=[],b=j2();for(const I of[1,-1]){const D=new Me;D.name=I>0?"boxDoor.R":"boxDoor.L",D.position.set(I*e.APER_HW,0,e.HINGE_Z),D.userData.side=I,D.userData.hinge=new z(I*e.APER_HW,0,e.HINGE_Z),D.userData.openSign=I;const U=iE(I,t,b);i.add(U.uuid);const Y=new Dt(U,t.BLUE);Y.name=I>0?"boxLeaf.R":"boxLeaf.L",Y.castShadow=!0,Y.receiveShadow=!0,D.add(Y),r++,a(t.BLUE,2*(e.LEAF_W*e.LEAF_H+e.LEAF_W*e.LEAF_T+e.LEAF_H*e.LEAF_T));const Z=sE(t,I);i.add(Z.uuid);const tt=new Dt(Z,t.GLASS);if(tt.position.set(-I*Ye.X,Ye.Y,Ye.Z-e.HINGE_Z),tt.name=I>0?"boxPane.R":"boxPane.L",tt.castShadow=!1,tt.receiveShadow=!0,D.add(tt),r++,a(t.GLASS,eE),I===Ei.SIDE){const K=new Dt(J2(),t.BRASS);K.position.set(-I*(e.APER_HW-Ei.X),0,e.DOOR_Z-e.HINGE_Z),K.name="boxFurniture",K.castShadow=!1,K.receiveShadow=!0,D.add(K),r++,a(t.BRASS,Z2)}if(I===Tn.SIDE){const K=new Dt(tE(),t.NOTICE);K.position.set(-I*(e.APER_HW-Tn.CX),Tn.CY,Tn.CZ-e.HINGE_Z),K.name="boxNotice",K.castShadow=((k=t.NOTICE.userData)==null?void 0:k.cast)??!1,K.receiveShadow=!0,D.add(K),i.add(K.geometry.uuid),r++,a(t.NOTICE,Q2)}g.add(D),S.push(D)}for(const I of Cf)n.solid(I.x,I.y0,I.z,I.hw*2,I.y1-I.y0,I.hd*2,!1);const L=new Na(jo.colour,jo.intensity,jo.distance,jo.decay);L.position.set(0,(P+C)/2,0),L.name="boxLamp",L.userData.boxLocal=L.position.clone();for(const I of js)s[I]&&Ua(t[I].color.getHex(),s[I]);const O=I=>{const D=Math.max(0,Math.min(1,I))*e.OPEN_ANGLE;for(const U of S)U.rotation.y=-U.userData.side*D};return O(0),g.userData.setOpen=O,{group:n.group,leaves:g,lamp:L,areas:s,collision:Cf,aoVolumes:Cp,setOpen:O,pivots:S,materials:t,counts:{meshes:r,geometries:i.size,materials:js.length}}}function iE(n,t,e){var x;const i=Te,s=i.DOOR_Z-i.LEAF_T/2,r=i.DOOR_Z+.006,o=i.DOOR_Z+.005;i.DOOR_Z+.0055;const a=i.HINGE_Z-.005,c=i.HINGE_Z-.007,l=i.LEAF_H/2,h=[["blank",i.LEAF_W,i.LEAF_H,i.LEAF_T,.2875,l,s],["stile",.06,i.LEAF_H,.012,.545,l,r],["stile",.06,i.LEAF_H,.012,.03,l,r],["rail",.455,.1,.012,.2875,.05,r],["rail",.455,.07,.012,.2875,.845,r],["rail",.455,.07,.012,.2875,1.445,r],["rail",.455,.07,.012,.2875,2.075,r],["panel",.395,.69,.01,.2875,.455,o],["panel",.395,.51,.01,.2875,1.145,o],...n===Ei.SIDE?[["keyhole",Ei.KEY_W,Ei.KEY_H,.004,Ei.X,Ei.ESC_Y,i.DOOR_Z+.01]]:[],["glazingBar",Xe.BAR,Xe.H,.012,.2875,Xe.Y,r],["glazingBar",Ye.W,Xe.BAR,.012,.2875,Xe.Y-Xe.DY,r],["glazingBar",Ye.W,Xe.BAR,.012,.2875,Xe.Y+Xe.DY,r],["backStile",.06,i.LEAF_H,.01,.48,l,a],["backStile",.06,i.LEAF_H,.01,.03,l,a],["backLedge",.39,.07,.01,.255,.845,a],["backLedge",.39,.07,.01,.255,2.075,a],["pull",.03,.22,.014,.1,1.01,c]];for(const[m,p,,v,M,,y]of h){const R=y+v/2,A=y-v/2;if(R>i.DOOR_Z+i.LEAF_PROUD_OUT)throw new Error(`policeBox: leaf '${m}' stands ${((R-i.DOOR_Z)*1e3).toFixed(0)} mm proud of the outer face, over the ${i.LEAF_PROUD_OUT*1e3} mm budget`);if(A<i.HINGE_Z-i.LEAF_PROUD_IN)throw new Error(`policeBox: leaf '${m}' stands ${((i.HINGE_Z-A)*1e3).toFixed(0)} mm proud of the inner face, over the ${i.LEAF_PROUD_IN*1e3} mm budget`);if(A<i.HINGE_Z&&M+p/2>i.APER_HW-i.INNER_SETBACK)throw new Error(`policeBox: leaf '${m}' reaches x ${(M+p/2).toFixed(3)} behind the inner face; anything there must stay inboard of ${(i.APER_HW-i.INNER_SETBACK).toFixed(3)} or it sweeps into the jamb`)}const u=m=>n*m,f=h.map(([,m,p,v,M,y,R])=>{const A=Ss(m,p,v,i.CHAMFER).clone();return A.translate(u(M),y,R),Ba(A)}),d=f.length===1?f[0]:G0(f,!1);if(!d)throw new Error("policeBox: leaf merge returned null (mismatched attributes)");const _=(x=t.BLUE.userData)==null?void 0:x.uvScale;return _&&ka(d,_[0],_[1]),e&&Hd(d,e),d.translate(-u(i.APER_HW),0,-i.HINGE_Z),d}function sE(n,t){var s;const e=Ba(new $e(Ye.W,Ye.H,Ye.T).toNonIndexed()),i=(s=n.GLASS.userData)==null?void 0:s.uvScale;if(i){const r=e.clone();r.translate(t*Ye.X,Ye.Y,Ye.Z),ka(r,i[0],i[1]),e.setAttribute("uv",r.attributes.uv)}return e}const rE=.02,oE=new z;function If(n,t){if(!n)throw new Error(`worlds(): no ${t} world`);if(!n.id)throw new Error(`worlds(): the ${t} world has no id — link.js keys every accessor on it`);if(!n.scene||!n.scene.isScene)throw new Error(`worlds(): the ${t} world '${n.id}' has no THREE.Scene`);return{id:n.id,scene:n.scene,build:n.build??null,surface:n.surface??null,beds:n.beds??null,dist:n.dist??null,cap:n.cap??null,update:typeof n.update=="function"?n.update:()=>{},get collision(){var i,s;return n.collision??((s=(i=n.build)==null?void 0:i.userData)==null?void 0:s.collision)??null}}}function aE({interior:n,exterior:t,link:e,startWorld:i=null}={}){const s=If(n,"interior"),r=If(t,"exterior");if(!e)throw new Error("worlds(): no link — makeLink(landing, SITES) builds one");let o=e;const a=[s,r];let c=0;if(i&&i!==s.id){if(i!==r.id&&i!=="exterior")throw new Error(`worlds(): startWorld '${i}' is neither '${s.id}' nor '${r.id}'`);c=1}let l=!1;const h=new eo,u=new Vt;function f(_){return u.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),h.setFromProjectionMatrix(u)}const d={get near(){return a[c]},get far(){return a[1-c]},get link(){return o},get interior(){return s},get exterior(){return r},swap(){return c=1-c,d.near},setLink(_){if(_===null)return o=null,null;if(!_)throw new Error('worlds.setLink: no link (pass null deliberately for "the box is away")');if(_.siteId&&r.id!=="exterior"&&_.siteId!==r.id)throw new Error(`worlds.setLink: the new link is at site '${_.siteId}' but the exterior world is '${r.id}'. A different site needs a different scene — reload.`);return o=_,o},liveLink(_,x,m=null){if(!o||!x||!(x.t>rE))return null;const p=a[c].cap;return p?!_||p.normalWorld.dot(oE.copy(_.position).sub(p.centreWorld))<=0||!(m||f(_)).intersectsBox(p.aabbInflated)?null:o:(l||(l=!0,console.warn(`[worlds] the '${a[c].id}' world has no portal cap, so the doors open onto its own background. portal.makeCap() mints one (THRESHOLD.md §4.4).`)),null)},frustumOf:f};return d}const Ys="interior",Pf=vn.w/2,cE=.02,lE=3*(ye.RUN/60+.014),hE=ye.RADIUS,uE=1e-6,fE=.001,dE=6,al=ln-(et.FLAT_FACE-ye.RADIUS),pE=1.2,mE=.6,_E=.002,Df=new z(0,1,0),cl=new z,Zo=new z,Of=new z,$s=new z;function gE({worlds:n,walker:t,audio:e,portal:i,camera:s,doors:r=null}){let o=0,a=0,c=-1,l=!1,h=!1,u=!1,f=!1,d=!1,_=!1;function x(){return!n||!n.near||!n.far||!n.link?(d||(d=!0,console.warn("[threshold] no live link — the crossing is disabled. makeLink() builds one (THRESHOLD.md §1.3); a build with no exterior is expected to land here.")),!1):!0}function m(){return s&&t.driveCamera!==!1?cl.copy(s.position):cl.set(t.position.x,t.position.y+ye.EYE,t.position.z)}function p(g,S){const b=n.link,L=g.id===Ys,O=L?b.pI:b.pE,k=L?b.nI:b.nE;Zo.copy(S).sub(O);const I=Zo.dot(k);Of.copy(Df).cross(k);const D=Zo.dot(Of),U=Zo.dot(Df),Y=Math.abs(D)-Pf,Z=U>vn.h?U-vn.h:U<0?-U:0;return{d:I,lat:D,h:U,s:L?1:-1,inRect:Y<=0&&Z===0,r:Math.hypot(I,Y>0?Y:0,Z)}}function v(g){return g.inRect}function M(g){return r?r.t>cE:(f||(f=!0,console.warn("[threshold] no `doors` passed to threshold(): crossing without checking that they are open. The exterior collision set has no shut-door blocker (THRESHOLD.md §1.1, §7.1), so the box is enterable through shut leaves.")),!0)}function y(g,S){const b=g&&g.collision;if(!b)return!0;$s.copy(t.position).applyMatrix4(S);let L=$s.x,O=$s.z;for(let k=0;k<dE;k++){const I=th(b,L,O,{y:$s.y});if(L=I.x,O=I.z,!I.contacts)break}return Math.hypot(L-$s.x,O-$s.z)<=fE}function R(g){const S=n.link,b=n.near,L=n.far,k=b.id===Ys?S.M_IE:S.M_EI;if(typeof t.crossTo!="function"||typeof t.setWorld!="function")return _||(_=!0,console.warn("[threshold] walker.crossTo / walker.setWorld are missing — refusing to cross. §2 adds both to Walker.js; without them a swap would leave the player in one world holding the other one's colliders.")),!1;if(!y(L,k))return l=!0,u||(u=!0,console.warn(`[threshold] holding the crossing into '${L.id}': M puts the player inside something there. Expected while a door leaf is still swinging — MEASURED, the way in clears at t = 0.68 on the door axis and t = 0.83 at the edge of the band (see CROSS_CLEAR). The crossing retries every sub-step and fires the moment that line is clear.`)),!1;l=!1;const I=k.elements,D=Math.atan2(I[8],I[10]);return t.crossTo(k,D),n.swap(),t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,S),t.driveCamera!==!1&&typeof t._commitCamera=="function"&&t._commitCamera(0),o=g.d,a++,!0}function A(g,S){const b=g.s*g.d;if(!(g.inRect&&b>uE&&b<=hE)||!M())return l=!1,!1;const L=l,O=n.near.id;return R(g)?(!S&&!L&&!h&&(h=!0,console.warn(`[threshold] the player was ${b.toFixed(3)} m past the '${O}' aperture plane and still in it — the crossing edge missed, or the doors opened around someone already standing in the doorway. Reconciled. §5.4: the backstops park a misfire at 0.050 m, so this is recoverable, but a sub-step running without step() would look exactly like this.`)),!0):!1}function E(g,S){let L=((g.id===Ys?-1:1)*S.r+mE)/pE;L=L<0?0:L>1?1:L;const O=L===0||L===1;c>=0&&L!==c&&Math.abs(L-c)<_E&&!O||L!==c&&(c=L,e&&typeof e.setBedMix=="function"&&e.setBedMix(L))}function P(g){const S=p(g,m());return o=S.d,S}const C={step(){if(!x())return;let g=n.near;const S=p(g,m());if(Math.abs(S.d-o)>lE){o=S.d,A(S,!0)&&(g=n.near),E(g,S);return}const b=S.s;b*o<0&&b*S.d>=0&&v(S)&&M()?R(S)?g=n.near:o=S.d:(o=S.d,A(S,!1)&&(g=n.near)),E(g,S)},seed(g={}){if(!x())return;let S=n.near;const b=P(S);g.reconcile!==!1&&A(b,!0)&&(S=n.near),E(S,b)},force(g){if(!x())return!1;const S=b=>b.id===g||g==="interior"&&b.id===Ys||g==="exterior"&&b.id!==Ys;return S(n.near)?(C.seed({reconcile:!1}),!1):S(n.far)?(n.swap(),typeof t.setWorld=="function"&&t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,n.link),C.seed({reconcile:!1}),!0):(console.warn(`[threshold] force('${g}'): no such world. near is '${n.near.id}', far is '${n.far&&n.far.id}'.`),!1)},get inAperture(){if(!x())return!1;const g=n.near,S=p(g,cl.copy(t.position)),b=S.s*S.d;return g.id===Ys?b>-al:Math.abs(S.lat)<=Pf+ye.RADIUS&&b>-al&&b<al&&S.h>=0&&S.h<=vn.h},get crossings(){return a},get held(){return l},get bedMix(){return c}};return C}const Pp=Object.freeze({w:1.15,h:2.11}),xE=.014,Nf=.035,Uf=16,ll=1920*1080,vE=.75,hl=4,ME=2,Ff=1.5,kf=45,SE=.2,yE=.95,EE=.002,Bf="interior",wE=Math.PI/180,ul=new Nt,AE=new Nt,bE=new z,zf=new Vt;function Hf(n,t={}){const e=t.fov??58,i=t.apertureH??Pp.h,s=Number.isFinite(n)&&n>0?n:16/9,r=Math.tan(e*wE/2),o=r*s,a=Math.sqrt(1+o*o+r*r),c=ye.RADIUS-xE,l=i-ye.EYE-Nf,h=ye.EYE-Nf,u=Math.min(c/o,l/r,h/r)/a,f=Math.min(SE,yE*u),d=f*a;return{aspect:s,fov:e,tx:o,ty:r,K:a,limit:u,near:f,skin:d,gapLat:c,gapUp:l,gapDown:h,marginLat:c-d*o,marginUp:l-d*r,marginDown:h-d*r}}function TE(n,t){n.updateMatrixWorld(!0);const e=t.clone().applyMatrix4(n.matrixWorldInverse);if(e.constant>0)return!1;const i=new ce(e.normal.x,e.normal.y,e.normal.z,e.constant),s=n.projectionMatrix.elements,r=new ce((Math.sign(i.x)+s[8])/s[0],(Math.sign(i.y)+s[9])/s[5],-1,(1+s[10])/s[14]),o=i.multiplyScalar(2/i.dot(r));return s[2]=o.x,s[6]=o.y,s[10]=o.z+1,s[14]=o.w,n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),!0}const RE=`
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
  float pull = uNear * ${(1+EE).toFixed(6)};
  float vz = -mv.z;
  if (vz > 0.0 && vz < pull) mv.xyz *= pull / vz;

  gl_Position = projectionMatrix * mv;
}`,LE=`
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
}`;function CE({renderer:n,camera:t,aperture:e=Pp,pixelRatioCap:i=!0,driveCameraNear:s=!0}={}){if(!n)throw new Error("portal(): no renderer");if(!t)throw new Error("portal(): no camera");n.info&&(n.info.autoReset=!1);const r=new Qi(1,1,{type:mr,format:Qe,depthBuffer:!0,stencilBuffer:!1,samples:hl});r.texture.name="portalTarget",r.texture.colorSpace=Ci,r.texture.minFilter=Ue,r.texture.magFilter=Ue,r.texture.generateMipmaps=!1;const o=new cn;o.name="portalCamera",o.matrixAutoUpdate=!1,o.matrixWorldAutoUpdate=!1;const a=[];let c=Hf(t.aspect,{fov:t.fov,apertureH:e.h}),l=1,h=hl,u=null,f=kf,d=!1;const _={passes:0,skipped:0,rebuilds:0,ratioChanges:0};let x=!1;function m(){n.getDrawingBufferSize(ul);const b=Math.max(1,Math.floor(ul.x)),L=Math.max(1,Math.floor(ul.y)),O=b*L,k=O>ll?vE:1,I=O>ll?ME:hl;I!==h&&(h=I,r.samples=I,r.dispose(),_.rebuilds++),l=k,r.setSize(Math.max(1,Math.round(b*l)),Math.max(1,Math.round(L*l))),c=Hf(t.aspect,{fov:t.fov,apertureH:e.h});for(const D of a){const U=D.material.uniforms;U.uRes.value.set(b,L),U.uNear.value=c.near}s&&Math.abs(t.near-c.near)>1e-12&&(t.near=c.near,t.updateProjectionMatrix())}function p(){return Math.min((typeof devicePixelRatio=="number"?devicePixelRatio:1)||1,2)}function v(){if(!i)return;const b=p(),L=n.getSize(AE),O=L.x*b*L.y*b,k=d&&b>Ff&&O>ll?Ff:b,I=n.getPixelRatio();if(!(u!==null&&Math.abs(I-u)<1e-9||Math.abs(I-b)<1e-9)){u=null;return}if(Math.abs(I-k)<1e-9){u=k;return}n.setPixelRatio(k),u=k,_.ratioChanges++,m()}function M(b){if(b){d=!0,f=0,v();return}++f>=kf&&d&&(d=!1,v())}function y(b,L,O={}){const k=new Ii(b,L,Uf,Uf);k.computeBoundingBox();const I=new Ri({name:"portalCap",side:$n,fog:!1,toneMapped:!0,uniforms:{tPortal:{value:r.texture},uRes:{value:new Nt(1,1)},uNear:{value:c.near}},vertexShader:RE,fragmentShader:LE}),D=new Dt(k,I);D.name=O.name||"portalCap",D.isPortalCap=!0,D.frustumCulled=!1,O.faceMinusZ&&(D.rotation.y=Math.PI);const U=new z,Y=new z,Z=new Zn;return Object.defineProperties(D,{normalWorld:{get(){return this.updateWorldMatrix(!0,!1),U.set(0,0,1).transformDirection(this.matrixWorld)}},centreWorld:{get(){return this.updateWorldMatrix(!0,!1),Y.setFromMatrixPosition(this.matrixWorld)}},aabbInflated:{get(){return this.updateWorldMatrix(!0,!1),Z.copy(this.geometry.boundingBox).applyMatrix4(this.matrixWorld).expandByScalar(c.skin)}}}),a.push(D),m(),D}function R(b,L,O=t){return!(!b||!b.isPortalCap||b.normalWorld.dot(bE.copy(O.position).sub(b.centreWorld))<=0||L&&!L.intersectsBox(b.aabbInflated))}const A=new eo;function E(b=t){return b.updateMatrixWorld(),zf.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),A.setFromProjectionMatrix(zf)}function P(b,L){if(typeof b.M=="function")return b.M(L.id);const O=L.id===Bf?b.M_IE:b.M_EI;if(!O)throw new Error(`portal.pass(): link exposes no transform for "${L.id}"`);return O}function C(b,L){if(typeof b.keepFor=="function")return b.keepFor(L.id);const O=L.id===Bf?b.keepI:b.keepE;if(!O)throw new Error(`portal.pass(): link exposes no clip plane for "${L.id}"`);return O}function g(b,L,O){if(!b||!L||!O||!O.scene){_.skipped++;return}M(!0);const k=b.portalCam||o;k.projectionMatrix.copy(t.projectionMatrix),k.projectionMatrixInverse.copy(t.projectionMatrixInverse),k.fov=t.fov,k.aspect=t.aspect,k.near=t.near,k.far=t.far,k.layers.mask=t.layers.mask,k.matrixAutoUpdate=!1,k.matrixWorldAutoUpdate=!1,k.matrixWorld.multiplyMatrices(P(b,L),t.matrixWorld),k.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),!x&&(Math.abs(k.scale.x-1)>1e-6||Math.abs(k.scale.y-1)>1e-6||Math.abs(k.scale.z-1)>1e-6)&&(x=!0,console.warn("[portal] the link is not rigid: portal camera scale",k.scale.x,k.scale.y,k.scale.z,"- the far world will be the wrong size.")),TE(k,C(b,O));const I=O.cap,D=I?I.visible:!1;I&&(I.visible=!1);const U=n.getRenderTarget();n.setRenderTarget(r),n.clear(),n.render(O.scene,k),n.setRenderTarget(U),I&&(I.visible=D),_.passes++}function S(){r.dispose();for(const b of a)b.geometry.dispose(),b.material.dispose();a.length=0,u!==null&&Math.abs(n.getPixelRatio()-u)<1e-9&&Math.abs(u-p())>1e-9&&n.setPixelRatio(p()),u=null}return m(),{rt:r,portalCam:o,makeCap:y,resize:m,pass:g,setLive:M,capOnScreen:R,frustum:E,dispose:S,stats:_,get near(){return c.near},get skin(){return c.skin},get plan(){return c},get scale(){return l},get samples(){return h},get live(){return d},get caps(){return a.slice()}}}const Dp=document.getElementById("scene"),pr=new URLSearchParams(location.search),IE=pr.get("seed")||"tardis",Kn=o2(pr),Ln=nh[Kn.site],de=new $v({canvas:Dp,antialias:!0,powerPreference:"high-performance"});de.setPixelRatio(Math.min(devicePixelRatio||1,2));de.setSize(innerWidth||1280,innerHeight||720,!1);de.outputColorSpace=Je;de.toneMapping=Zf;const PE=Nn.toneMappingExposure;de.toneMappingExposure=PE;de.shadowMap.type=jf;de.shadowMap.enabled=!!Nn.shadows;cM(de);const Jn=new Td;Jn.background=new Ot(Nn.background);Nn.fog&&(Jn.fog=Nn.fog);const DE=new Rd(Nn.hemisphere.sky,Nn.hemisphere.ground,Nn.hemisphere.intensity);Jn.add(DE);const OE=new Cd(Nn.ambient.colour,Nn.ambient.intensity);Jn.add(OE);const fl=Nn.camera,Oe=new cn(fl.fov,(innerWidth||1280)/(innerHeight||720),fl.near,Math.max(fl.far,Ln.camera.far)),Ha=new so(IE);Vd();const Es=Wd(Ha.child("tex.roundel")),Mn=new H0,ot={};ot.shell=KM(Mn,Es,{liveDoors:!0});ot.console=lS(Mn,Es);ot.rotor=SS(Mn,Es,{collar:!1});ot.fittings=XS(Mn,Es);ot.lighting=uy(Mn,Es);ot.doors=t2(Mn,Es,{shellDoors:ot.shell,console:ot.console});ot.fittings.setScanner(ot.fittings.shuttersOpen);const Op=Fa(Mn.group);Jn.add(Op);Jn.add(ot.rotor.group);Jn.add(ot.fittings.group);Jn.add(ot.doors.group);const ws=new Td;ws.name="site";Tp();const As=new H0,NE=Object.values(Li).filter(n=>n.site===Ln.id).map(n=>({x:n.x,z:n.z,r:bi.plinth/2*Math.SQRT2+.06})),xn=y2(As,Ln,{camera:Oe,rng:Ha.child("site"),keepOut:NE});ws.fog=xn.fog;const sh=new H0,hn=nE(sh,Ip(Ha.child("tex.box"))),Ga=xn.contact(1.9,1.9);xn.placeContact(Ga,Kn.x,Kn.z);const UE=Fa(As.group);ws.add(UE);ws.add(xn.live);const ri=Fa(sh.group,{colliders:hn.aoVolumes});ri.position.set(Kn.x,0,Kn.z);ri.rotation.y=Kn.yaw;hn.leaves.position.copy(ri.position);hn.leaves.rotation.y=Kn.yaw;hn.lamp.position.set(Kn.x,hn.lamp.position.y,Kn.z);ws.add(ri,hn.leaves,hn.lamp,Ga);ot.doors.setBoxDoors(hn.pivots);ot.lighting.setDoorSpillColour(Ln.sun.colour);const vr=wp(Kn,nh),Gf=Object.freeze([...As.userData.collision.boxes||[]]);function rh(n){As.userData.collision.boxes=n?[...Gf,...n.boxCollision()]:[...Gf]}rh(vr);zp(vr);const li=CE({renderer:de,camera:Oe,aperture:vn}),oh=li.makeCap(vn.w,vn.h,{name:"capInterior",faceMinusZ:!0});oh.position.set(0,vn.h/2,ln);Jn.add(oh);const ah=li.makeCap(vn.w,vn.h,{name:"capExterior"});ah.position.set(0,vn.h/2,ao);ri.add(ah);const Zt=aE({interior:{id:ge,scene:Jn,build:Mn,surface:"vinyl",dist:_p,beds:gp,cap:oh},exterior:{id:Ln.id,scene:ws,build:As,surface:xn.surface,dist:xn.distance,beds:xn.bedIds,cap:ah,update:xn.update},link:vr,startWorld:pr.get("world")==="exterior"?Ln.id:pr.get("world")||null}),Ft=new Sy(Oe,Mn,{spawn:et.SPAWN,yaw:et.SPAWN_YAW});Ft.setWorld(Zt.near);if(Zt.near.id!==ge){const n=vr.toExterior(new z(0,0,ln-2.2));Ft.teleport(n.x,0,n.z,Kn.yaw+Math.PI)}const On=new ky({sounds:ca,buses:By,distance:_p,defaults:zy,roomBeds:gp,propRate:Hy,ctlRate:Gy,siteBeds:xn.beds,surfaceSteps:Vy,rng:Ha,say:n=>on(n)});On.bindRoom({build:Mn,rotor:ot.rotor,fittings:ot.fittings,walker:Ft,room:et});ot.doors.setAudio(On);On.setWorld(Zt.near,vr);const Se=gE({worlds:Zt,walker:Ft,audio:On,portal:li,camera:Oe,doors:ot.doors}),dl={1:()=>{on(FE())},2:()=>{on(Np())},3:()=>{on(Up())},4:()=>{on("Navigation: the coordinates read as gibberish.")},5:()=>{on(Fp())},6:()=>{on(kp())}};function Np(){const n=!ot.fittings.shuttersOpen;return ot.fittings.setShutters(n),ot.fittings.setScanner(n),n?"The scanner shutters grind open. The screen lights, and shows nothing.":"The scanner shutters close over the screen."}function Up(){return ot.fittings.dispense(),"The food machine delivers a bar. It is, allegedly, bacon and eggs."}function Fp(){return!ot.rotor.running&&!ot.doors.flightReady?ot.doors.state!=="shut"?"Flight: the doors are open.":"Flight: the doors must be locked before the ship will move.":(ot.rotor.setRunning(!ot.rotor.running),ot.rotor.running?"The time rotor begins to rise and fall.":"The rotor settles, and the room goes quiet.")}function kp(){return ot.fittings.pulseFault(),ot.lighting.pulseAlert(4),"The fault locator runs a query. Forty-eight lamps have opinions."}function Vf(n=!1){return ot.doors.request(!ot.doors.open,{fittings:ot.fittings,rotor:ot.rotor,walker:Ft,atShell:n})}function FE(){return ot.doors.setLocked(!ot.doors.locked,{rotor:ot.rotor})}const Wf={hatStand:"A hat stand. There is a hat on it.",chair:"A high-backed hall chair, out of a house that is nowhere near here.",clock:"An ormolu clock. It keeps perfect time, which proves nothing."};Ft.onInteract(n=>{var t;switch(n.action){case"panel":{const e=n.data.panel;ot.console.setLamp(e,!0),on(n.label),(t=dl[e])==null||t.call(dl);break}case"doors":on(Vf());break;case"shellDoors":on(Vf(!0));break;case"scanner":on(Np());break;case"faultLocator":on(kp());break;case"foodMachine":on(Up());break;case"rotor":on(Fp());break;default:Wf[n.action]&&on(Wf[n.action])}});const Mr=document.createElement("div");Mr.style.cssText="position:fixed;inset:0;pointer-events:none;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:#e8e6df;text-shadow:0 1px 3px rgba(0,0,0,.9)";Mr.innerHTML=`
<div id="x" style="position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;
     border-radius:50%;background:rgba(232,230,223,.55);box-shadow:0 0 2px #000"></div>
<div id="prompt" style="position:absolute;left:50%;top:calc(50% + 26px);transform:translateX(-50%);
     white-space:nowrap;opacity:0"></div>
<div id="say" style="position:absolute;left:50%;bottom:11%;transform:translateX(-50%);
     white-space:nowrap;opacity:0;transition:opacity .25s"></div>
<div id="lock" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
     background:rgba(6,8,10,.55);letter-spacing:.06em;text-align:center">
  <div>CLICK TO LOOK AROUND &nbsp;·&nbsp; WASD, E, ESC</div></div>`;document.body.appendChild(Mr);const qf=Mr.querySelector("#prompt"),S0=Mr.querySelector("#say"),ch=Mr.querySelector("#lock");let ua=0;function on(n){S0.textContent=n,S0.style.opacity="1",ua=4}Ft.onPause(n=>{ch.style.display=n?"flex":"none"});ch.style.display=Ft.paused?"flex":"none";document.addEventListener("pointerlockerror",()=>{Ft.paused&&(ch.innerHTML='<div>POINTER LOCK REFUSED BY THIS FRAME<div style="opacity:.7;font-size:12px;letter-spacing:0;margin-top:8px">Open http://localhost:5290 in a real browser tab, or drive it from the console:<br>game.update(dt) &nbsp;·&nbsp; shot(name, pose)</div></div>')},{once:!0});let Xf=null;function kE(n){const t=Ft.prompt,e=t?t.id:null;e!==Xf&&(Xf=e,qf.textContent=t?`[E]  ${t.label}`:"",qf.style.opacity=t?"1":"0"),ua>0&&(ua-=n,ua<=0&&(S0.style.opacity="0"))}const pl=1/60,BE=.25;let ml=0;function Ve(n){const t=Math.min(Math.max(n||0,0),BE);ml+=t;let e=0;for(;ml+1e-9>=pl&&e<8;)Ft.update(pl),Se.step(),ml-=pl,e++;ot.doors.update(t),ot.rotor.update(t),ot.fittings.update(t),ot.console.update(t),ot.lighting.setRotorDrive(ot.rotor.drive),ot.lighting.setDoorSpill(ot.doors.t),ot.lighting.update(t),HE(),xn.update(t),xn.setDoorSpill(ot.doors.t),On.setDoorFraction(ot.doors.t),On.update(t),kE(t)}function Un(){de.info.reset(),Oe.updateMatrixWorld(!0);const n=Zt.liveLink(Oe,ot.doors);n&&li.pass(n,Zt.near,Zt.far),Zt.near.cap.visible=!!n,li.setLive(!!n),de.render(Zt.near.scene,Oe)}let Yf=performance.now();function Bp(n){requestAnimationFrame(Bp);const t=(n-Yf)/1e3;Yf=n,Ve(t),Un()}requestAnimationFrame(Bp);addEventListener("resize",()=>{const n=innerWidth,t=innerHeight;!n||!t||(de.setPixelRatio(Math.min(devicePixelRatio||1,2)),de.setSize(n,t,!1),Oe.aspect=n/t,Oe.updateProjectionMatrix(),li.resize())});const zE={renderer:de,scene:Jn,camera:Oe,build:Mn,palette:Es,walker:Ft,api:ot,audio:On,siteScene:ws,site:xn,box:hn,worlds:Zt,portal:li,threshold:Se,SITE:Ln,buildSite:As,buildBox:sh,get link(){return Zt.link},get landing(){return Zt.link.landing},update:Ve,render:Un,get drawCalls(){return de.info.render.calls},get world(){return Zt.near.id}};window.game=zE;window.audio=On;window.doors=function(t,e={}){const i=t===void 0?!ot.doors.open:!!t;if(e.now)return ot.doors.force(i),`doors ${ot.doors.state} (forced)`;const s=ot.doors.request(i,{fittings:ot.fittings,rotor:ot.rotor,walker:Ft,force:!!e.force});return`${ot.doors.lastAction}: ${s}`};window.step=function(t=1){const e=Math.max(1,Math.round(t*60));for(let i=0;i<e;i++)Ve(1/60);return Un(),{world:Zt.near.id,doors:ot.doors.state,t:+ot.doors.t.toFixed(3),drawCalls:de.info.render.calls,crossings:Se.crossings}};window.walk=function(t=1,e={}){const i=t>=0?"KeyW":"KeyS",s=Math.abs(t),r=Se.crossings,o=Ft._locked;Ft._locked=!0,Ft._down.add(i),e.run&&Ft._down.add("ShiftLeft");let a=0;const c=Ft.position.clone();let l=0;for(;a<s&&l++<1800;){const h=Zt.near;Ve(1/60),Zt.near===h&&(a+=c.distanceTo(Ft.position)),c.copy(Ft.position)}Ft._down.delete(i),Ft._down.delete("ShiftLeft"),Ft._locked=o;for(let h=0;h<20;h++)Ve(1/60);return Un(),{world:Zt.near.id,pos:[+Ft.position.x.toFixed(3),+Ft.position.y.toFixed(3),+Ft.position.z.toFixed(3)],moved:+a.toFixed(3),crossed:Se.crossings-r,drawCalls:de.info.render.calls}};window.look=function(t,e){return t!==void 0&&(Ft.yaw=t),e!==void 0&&(Ft.pitch=e),Ve(1/60),Un(),{yaw:+Ft.yaw.toFixed(4),pitch:+Ft.pitch.toFixed(4)}};window.go=function(t,e,i){return Ft.teleport(t,0,e,i),Se.seed(),Ve(1/60),Un(),window.where()};window.cross=function(){const t=Zt.near.id;return Se.force(Zt.far.id),Ve(1/60),Un(),`${t} -> ${Zt.near.id}`};window.atDoor=function(t=2.2){const e=Zt.link,i=t>=0;i!==(Zt.near.id!==ge)&&Se.force(i?Ln.id:ge);const s=new z(0,0,ln+t),r=i?e.toExterior(s):s,o=i?e.landing.yaw+Math.PI:0;return Ft.teleport(r.x,0,r.z,o),Ft.pitch=.02,Se.seed(),Ve(1/60),Un(),window.where()};window.atDoorOff=function(t=1.6,e=1.1,i=1.2){const s=Zt.link;Zt.near.id===ge&&Se.force(Ln.id);const r=s.toExterior(new z(e,0,ln+t)),o=s.toExterior(new z(0,0,ln-i)),a=Math.atan2(o.x-r.x,o.z-r.z);return Ft.teleport(r.x,0,r.z,a),Ft.pitch=.04,Se.seed(),Ve(1/60),Un(),window.where()};window.where=function(){const t=Ft.position;return{world:Zt.near.id,pos:[+t.x.toFixed(3),+t.y.toFixed(3),+t.z.toFixed(3)],yaw:+Ft.yaw.toFixed(4),doors:ot.doors.state,portalLive:!!Zt.liveLink(Oe,ot.doors),drawCalls:de.info.render.calls,near:+li.near.toFixed(4),bedMix:+Se.bedMix.toFixed(3),crossings:Se.crossings}};function zp(n=Zt.link){const t=n.toExterior(new z(0,0,ln-.25));xn.doorSpill.position.set(t.x,1.1,t.z)}const co={id:"shellDoors",label:"Doors",pos:new z,action:"shellDoors",data:{},radius:1.6};As.interactables.push(co);function Hp(n=Zt.link){n.toSite(0,1.2,.95,co.pos)}function HE(){co.label=ot.doors.locked?"Doors — locked":ot.doors.moving?"Doors":ot.doors.open?"Close the doors":"Open the doors"}Hp(vr);const GE=co.radius;function Gp(n){ri.visible=n,hn.leaves.visible=n,hn.lamp.visible=n,Ga.visible=n,co.radius=n?GE:-1}window.depart=function(){return Zt.link?(ot.doors.forceT(0),ot.doors.setLocked(!0,{running:!1}),Gp(!1),rh(null),Zt.setLink(null),Se.seed(),Ve(1/60),Un(),`the box has left ${Ln.id} — ${Ft.world.id===ge?"you are aboard":"you are not"}`):"the box is already away"};window.arrive=function(t){const e=typeof t=="string"?Li[t]:t;if(!e)return`unknown landing: ${t} (${Object.keys(Li).join(", ")})`;if(e.site!==Ln.id){const s=typeof t=="string"?t:"";return location.search=s?`?landing=${s}`+(pr.get("seed")?`&seed=${pr.get("seed")}`:""):`?site=${e.site}&x=${e.x}&z=${e.z}&yaw=${e.yaw}`,`reloading into ${e.site}…`}ri.position.set(e.x,0,e.z),ri.rotation.y=e.yaw,hn.leaves.position.copy(ri.position),hn.leaves.rotation.y=e.yaw,hn.lamp.position.set(e.x,hn.lamp.position.y,e.z),ri.updateMatrixWorld(!0),xn.placeContact(Ga,e.x,e.z);const i=wp(e,nh);return rh(i),Gp(!0),Zt.setLink(i),zp(i),Hp(i),Se.seed(),Ve(1/60),Un(),`box at ${e.x}, ${e.z} yaw ${e.yaw} — ${window.where().world}`};window.place=window.arrive;window.help=function(){return["doors(open?, {now})  open/shut the doors (now: instant, no interlock)","step(seconds)        advance the clock; rAF is frozen in this pane","walk(metres, {run})  walk through the real solver AND the real threshold","look(yaw, pitch)     yaw 0 = +Z = the doors from inside","go(x, z, yaw)        teleport within the current world","cross()              step through the threshold without walking","place(landing)       move the TARDIS. "+Object.keys(Li).join(" / "),"atDoor(m)            stand m metres out on the door axis, facing the doors","                     (+ outside on the plain, - inside the room)","where()              world, pose, doors, portal state, draw calls","shot(name, pose)     pose takes {world, landing, doors, pos, yaw, pitch, free}","shotAll()            the interior suite; shotThreshold() the new one","sfx(id)              fire one sound. sfx() lists all 41."].join(`
`)};window.sfx=function(t,e){if(t===void 0)return Object.keys(ca);if(!ca[t])return`no such sound: ${t} (${Object.keys(ca).length} in the catalogue)`;if(On.unlock(),!On.available)return"no AudioContext — click the page once, then try again";if(On.muted)return"muted — press N, or audio.setMuted(false)";const i=On.play(t,e||{});return i?i.endsAt??i:`dropped: ${t} (voice limit, or no anchor for its spot)`};window.shot=async function(t="shot",e=null){e&&(e.world&&e.world!==Zt.near.id&&Se.force(e.world),e.doors!==void 0&&ot.doors.force(e.doors>0),e.pos&&Ft.teleport(e.pos[0],e.pos[1]??0,e.pos[2],e.yaw),e.yaw!==void 0&&(Ft.yaw=e.yaw),e.pitch!==void 0&&(Ft.pitch=e.pitch),Se.seed());const i=1280,s=720,r=de.getPixelRatio(),o=de.getSize(new Nt),a=Oe.aspect;r!==1&&de.setPixelRatio(1),de.setSize(i,s,!1),Oe.aspect=i/s,Oe.updateProjectionMatrix(),li.resize();const c=Math.max(1,(e==null?void 0:e.settle)??90);for(let u=0;u<c;u++)Ve(1/60);e!=null&&e.free&&(Ft.driveCamera=!1,Oe.position.set(...e.free.pos),Oe.lookAt(...e.free.look),Oe.updateMatrixWorld(!0)),Un(),e!=null&&e.free&&(Ft.driveCamera=!0);const l=Dp.toDataURL("image/png");return r!==1&&de.setPixelRatio(r),o.x>0&&o.y>0&&(de.setSize(o.x,o.y,!1),Oe.aspect=a,Oe.updateProjectionMatrix()),li.resize(),(await fetch("http://localhost:5299/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:l})})).json()};window.shotAll=async function(){const t=[["entry",{pos:[0,0,2.3],yaw:Math.PI,pitch:-.04}],["console-axis",{pos:[0,0,-2.03],yaw:0,pitch:-.16}],["rotor",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34}],["roundels",{pos:[0,0,-1.7],yaw:Math.PI,pitch:.06}],["doors",{pos:[0,0,.6],yaw:0,pitch:.1}],["scanner",{pos:[1.535,0,1.535],yaw:.785398,pitch:.1}],["fault",{pos:[-1.535,0,1.535],yaw:-.785398,pitch:.02}],["victorian",{pos:[-.75,0,-.75],yaw:3.926991,pitch:-.18}],["aerial",{pos:[0,0,2.3],yaw:Math.PI,settle:90,free:{pos:[2.3,2.95,2.3],look:[0,.95,0]}}]],e=[];for(const[r,o]of t)e.push(r+":"+((await shot(r,o)).ok?"ok":"FAIL"));const i=ot.fittings,s=ot.rotor;i.setShutters(!0),i.setScanner(!0),e.push("scanner-open:"+((await shot("scanner-open",{pos:[1.05,0,1.05],yaw:.785398,pitch:.1})).ok?"ok":"FAIL")),i.setShutters(!1),i.setScanner(!1);for(let r=0;r<120;r++)Ve(1/60);s.setRunning(!0);for(let r=0;r<600&&(Ve(1/60),!(s.height>s.parked+.12));r++);e.push("rotor-flight:"+((await shot("rotor-flight",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34,settle:1})).ok?"ok":"FAIL")),s.setRunning(!1);for(let r=0;r<400;r++)Ve(1/60);return e};function Vp(){const n=bi.half-ao,t=c=>atDoor(c+n),e=(c,l,h)=>{const u=Math.hypot(c,l),f=(u+n)/u;return atDoorOff(c*f,l*f,h)},i=(c,l,h,u)=>{const f=Math.hypot(c,l),d=(u+n)/f;return atDoorOff(c*d,l*d,h)},s=Math.tan(Oe.fov*Math.PI/180/2),r=.3,o=(Te.TOP/2+r)/s;return{FACE_D:n,atFace:t,atFaceOff:e,atFaceR:i,HALF_V:s,FIT_MARGIN:r,FIT_D:o,aimAt:(c,l)=>Math.atan((c-ye.EYE)/l)}}window.shotThreshold=async function(){const t=[],e=async(u,f)=>{const d=await shot(u,f);t.push(`${u}:${d.ok?"ok":"FAIL"}:${de.info.render.calls}`)};Zt.near.id!==ge&&Se.force(ge);const{FACE_D:i,atFace:s,atFaceR:r,FIT_D:o,aimAt:a}=Vp();ot.fittings.setShutters(!0),ot.fittings.setScanner(!0),await e("doors",{doors:0,pos:[0,0,.6],yaw:0,pitch:.1}),await e("doors-open",{doors:1,pos:[0,0,.6],yaw:0,pitch:.1}),ot.doors.forceT(.45),await e("doors-swing",{pos:[0,0,.6],yaw:0,pitch:.1,settle:1}),await e("doors-funnel",{doors:1,pos:[.5,0,2.2],yaw:0,pitch:.02}),await e("portal-out",{doors:1,pos:[0,0,1.4],yaw:0,pitch:.02}),await e("portal-near",{doors:1,pos:[0,0,3.18],yaw:0,pitch:0}),await e("threshold-a",{doors:1,pos:[0,0,3.283],yaw:0,pitch:0}),await e("threshold-b",{doors:1,pos:[0,0,3.285],yaw:0,pitch:0});const c=Ln.id,l=()=>Zt.link;await e("site-sky",{world:c,doors:0,pos:[4,0,4],yaw:2.356194,pitch:.42}),await e("site-wide",{world:c,doors:0,pos:[0,0,5],yaw:Math.PI,pitch:-.06,free:{pos:[l().landing.x,6,l().landing.z+6],look:[l().landing.x,1.4,l().landing.z]}}),atDoor(10.8),await e("site-eye",{pitch:.02}),ot.doors.force(!1),s(o),await e("box-front",{pitch:a(Te.TOP/2,o)}),ot.doors.force(!1),r(1.6,1.9,.085,o),await e("box-corner",{pitch:a(Te.TOP/2,o)}),ot.doors.force(!1),r(1.6,1.9,.085,1.6),await e("box-band",{pitch:a(1.76,1.6)}),ot.doors.force(!1),atDoorOff(.9+i,-.305,0),await e("box-notice",{pitch:a(1.145,.9)});{const u=(Te.SIGN_Y0+Te.SIGN_Y1)/2;ot.doors.force(!1),s(1.3),await e("box-sign",{pitch:a(u,1.3)})}{const u=(Te.TOP+2.9)/2;ot.doors.force(!1),s(2.1),await e("box-lamp",{pitch:a(u,2.1+bi.half)})}ot.doors.force(!0),atDoor(2.715),await e("portal-in",{}),ot.doors.force(!0),s(o),await e("box-open",{pitch:a(Te.TOP/2,o)}),ot.doors.force(!0),atDoorOff(1.6,1.1,1.2),await e("portal-in-offaxis",{}),ot.doors.force(!0),r(1.697,1.697,.085,o),await e("box-grazing",{pitch:a(Te.TOP/2,o)}),ot.doors.force(!0),r(1.24,2.66,.085,o),await e("box-raking",{pitch:a(Te.TOP/2,o)}),ot.doors.force(!1),atDoor(.7),await e("box-vestibule",{}),ot.doors.force(!0),atDoorOff(1.1,.62,.085),await e("box-reveal",{}),ot.doors.forceT(.45),atDoor(2.715),await e("box-swing",{settle:1});{const u=l().landing;ot.doors.force(!1),await e("box-plan",{free:{pos:[u.x,7.2,u.z-.001],look:[u.x,1,u.z]}})}{const u=l();ot.doors.force(!0);const f=ao+bi.half+o,d=u.toExterior(new z(0,0,ln-f)),_=u.toExterior(new z(0,0,ln));Ft.teleport(d.x,0,d.z,Math.atan2(_.x-d.x,_.z-d.z)),Ft.pitch=a(Te.TOP/2,o),Se.seed()}await e("box-behind",{}),ot.doors.force(!0),atDoor(5.8),await e("box-behind-ish",{});const h=l().landing;Li.ashfall_rim&&Li.ashfall_rim.site===c&&(place("ashfall_rim"),ot.doors.force(!0),atDoor(2.715),await e("box-placed",{}),place({...h})),Se.force(ge),ot.doors.force(!1),ot.fittings.setShutters(!1),ot.fittings.setScanner(!1),Ft.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),Se.seed();for(let u=0;u<90;u++)Ve(1/60);return t};window.shotLanding=async function(t="landing"){const{atFace:e,FIT_D:i,aimAt:s}=Vp(),r=[],o=async(a,c)=>{const l=await shot(a,c);r.push(`${a}:${l.ok?"ok":"FAIL"}:${de.info.render.calls}`)};Zt.near.id!==ge&&Se.force(ge),ot.fittings.setShutters(!0),ot.fittings.setScanner(!0),Se.force(Ln.id),ot.doors.force(!0),atDoor(2.715),await o(`${t}-portal-in`,{}),ot.doors.force(!1),e(i),await o(`${t}-box-front`,{pitch:s(Te.TOP/2,i)}),ot.doors.force(!0),e(i),await o(`${t}-box-open`,{pitch:s(Te.TOP/2,i)}),Se.force(ge),ot.doors.force(!1),ot.fittings.setShutters(!1),ot.fittings.setScanner(!1),Ft.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),Se.seed();for(let a=0;a<90;a++)Ve(1/60);return r};console.info(`[room] built. ${Op.children.length} baked meshes, ${Mn.lights.length} lights, ${Mn.interactables.length} interactables, ${Mn.colliders.length} collider(s).`);
