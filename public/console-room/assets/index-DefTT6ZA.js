(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const X0="169",Sm=0,ju=1,Em=2,Td=1,Rd=2,Ci=3,ei=0,vn=1,ai=2,rs=0,or=1,Ku=2,Zu=3,Ul=4,wm=5,Ss=100,bm=101,Am=102,Tm=103,Rm=104,Lm=200,Cm=201,Im=202,Pm=203,Fl=204,kl=205,Dm=206,Om=207,Nm=208,Um=209,Fm=210,km=211,zm=212,Bm=213,Hm=214,zl=0,Bl=1,Hl=2,dr=3,Gl=4,Vl=5,Wl=6,ql=7,Ld=0,Gm=1,Vm=2,os=0,Wm=1,qm=2,Xm=3,Cd=4,Ym=5,$m=6,jm=7,Id=300,pr=301,mr=302,Xl=303,Yl=304,Ya=306,As=1e3,es=1001,$l=1002,bn=1003,Km=1004,To=1005,Oe=1006,hc=1007,Qn=1008,Ui=1009,Pd=1010,Dd=1011,io=1012,Y0=1013,Ts=1014,ci=1015,Sr=1016,$0=1017,j0=1018,_r=1020,Od=35902,Nd=1021,Ud=1022,hn=1023,Fd=1024,kd=1025,ar=1026,gr=1027,K0=1028,Z0=1029,zd=1030,J0=1031,Q0=1033,da=33776,pa=33777,ma=33778,_a=33779,jl=35840,Kl=35841,Zl=35842,Jl=35843,Ql=36196,t0=37492,e0=37496,n0=37808,i0=37809,s0=37810,r0=37811,o0=37812,a0=37813,c0=37814,l0=37815,u0=37816,h0=37817,f0=37818,d0=37819,p0=37820,m0=37821,ga=36492,_0=36494,g0=36495,Bd=36283,x0=36284,v0=36285,M0=36286,Zm=3200,Jm=3201,Hd=0,Qm=1,Ji="",ln="srgb",xi="srgb-linear",tu="display-p3",$a="display-p3-linear",Ra="linear",ye="srgb",La="rec709",Ca="p3",Ds=7680,Ju=519,t_=512,e_=513,n_=514,Gd=515,i_=516,s_=517,r_=518,o_=519,Qu=35044,so=35048,th="300 es",Oi=2e3,Ia=2001;class Er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,y0=180/Math.PI;function fo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function xn(n,t,e){return Math.max(t,Math.min(e,n))}function a_(n,t){return(n%t+t)%t}function dc(n,t,e){return(1-e)*n+e*t}function Rr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],v=s[1],M=s[4],E=s[7],T=s[2],w=s[5],S=s[8];return r[0]=o*g+a*v+c*T,r[3]=o*m+a*M+c*w,r[6]=o*p+a*E+c*S,r[1]=l*g+u*v+h*T,r[4]=l*m+u*M+h*w,r[7]=l*p+u*E+h*S,r[2]=f*g+d*v+_*T,r[5]=f*m+d*M+_*w,r[8]=f*p+d*E+_*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=e*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pc.makeScale(t,e)),this}rotate(t){return this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new jt;function Vd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function c_(){const n=Pa("canvas");return n.style.display="block",n}const eh={};function xa(n){n in eh||(eh[n]=!0,console.warn(n))}function l_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function u_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nh=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lr={[xi]:{transfer:Ra,primaries:La,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:ye,primaries:La,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$a]:{transfer:Ra,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh)},[tu]:{transfer:ye,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ih),fromReference:n=>n.applyMatrix3(nh).convertLinearToSRGB()}},f_=new Set([xi,$a]),ce={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!f_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Lr[t].toReference,s=Lr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Lr[n].primaries},getTransfer:function(n){return n===Ji?Ra:Lr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Lr[t].luminanceCoefficients)}};function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class d_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=Pa("canvas")),Os.width=t.width,Os.height=t.height;const i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cr(e[i]/255)*255):e[i]=cr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let p_=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_c(s[o].image)):r.push(_c(s[o]))}else r=_c(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function _c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?d_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class fn extends Er{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,i=es,s=es,r=Oe,o=Qn,a=hn,c=Ui,l=fn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=fo(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Id;fn.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,E=(d+1)/2,T=(p+1)/2,w=(u+f)/4,S=(h+g)/4,R=(_+m)/4;return M>E&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=S/i):E>T?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=R/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=S/r,s=R/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends Er{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends __{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class qd extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-a;const p=c*f+l*d+u*_+h*g,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,p*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const E=a*v;if(c=c*m+f*E,l=l*m+d*E,u=u*m+_*E,h=h*m+g*E,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+u*h+c*d-l*f,t[e+1]=c*_+u*f+l*h-a*d,t[e+2]=l*_+u*d+a*f-c*h,t[e+3]=u*_-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new z,sh=new wr;class ii{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),Lo.subVectors(this.max,Cr),Ns.subVectors(t.a,Cr),Us.subVectors(t.b,Cr),Fs.subVectors(t.c,Cr),Bi.subVectors(Us,Ns),Hi.subVectors(Fs,Us),hs.subVectors(Ns,Fs);let e=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-hs.z,hs.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,hs.z,0,-hs.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-hs.y,hs.x,0];return!xc(e,Ns,Us,Fs,Lo)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,Ns,Us,Fs,Lo))?!1:(Co.crossVectors(Bi,Hi),e=[Co.x,Co.y,Co.z],xc(e,Ns,Us,Fs,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,Ro=new ii,Ns=new z,Us=new z,Fs=new z,Bi=new z,Hi=new z,hs=new z,Cr=new z,Lo=new z,Co=new z,fs=new z;function xc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),c=t.dot(fs),l=e.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const x_=new ii,Ir=new z,vc=new z;class po{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):x_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);const e=Ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(vc)),this.expandByPoint(Ir.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new z,Mc=new z,Io=new z,Gi=new z,yc=new z,Po=new z,Sc=new z;class v_{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Mc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=Gi.dot(this.direction),c=-Gi.dot(Io),l=Gi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mc).addScaledVector(Io,f),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){yc.subVectors(e,t),Po.subVectors(i,t),Sc.crossVectors(yc,Po);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,t);const c=a*this.direction.dot(Po.crossVectors(Gi,Po));if(c<0)return null;const l=a*this.direction.dot(yc.cross(Gi));if(l<0||c+l>o)return null;const u=-a*Gi.dot(Sc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m)}set(t,e,i,s,r,o,a,c,l,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M_,t,y_)}lookAt(t,e,i){const s=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Vi.crossVectors(i,In),Vi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Vi.crossVectors(i,In)),Vi.normalize(),Do.crossVectors(In,Vi),s[0]=Vi.x,s[4]=Do.x,s[8]=In.x,s[1]=Vi.y,s[5]=Do.y,s[9]=In.y,s[2]=Vi.z,s[6]=Do.z,s[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],v=i[3],M=i[7],E=i[11],T=i[15],w=s[0],S=s[4],R=s[8],D=s[12],x=s[1],y=s[5],A=s[9],L=s[13],O=s[2],F=s[6],I=s[10],P=s[14],U=s[3],Y=s[7],K=s[11],Q=s[15];return r[0]=o*w+a*x+c*O+l*U,r[4]=o*S+a*y+c*F+l*Y,r[8]=o*R+a*A+c*I+l*K,r[12]=o*D+a*L+c*P+l*Q,r[1]=u*w+h*x+f*O+d*U,r[5]=u*S+h*y+f*F+d*Y,r[9]=u*R+h*A+f*I+d*K,r[13]=u*D+h*L+f*P+d*Q,r[2]=_*w+g*x+m*O+p*U,r[6]=_*S+g*y+m*F+p*Y,r[10]=_*R+g*A+m*I+p*K,r[14]=_*D+g*L+m*P+p*Q,r[3]=v*w+M*x+E*O+T*U,r[7]=v*S+M*y+E*F+T*Y,r[11]=v*R+M*A+E*I+T*K,r[15]=v*D+M*L+E*P+T*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*d-i*c*d)+g*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,M=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,E=u*g*l-_*h*l+_*a*d-o*g*d-u*a*p+o*h*p,T=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,w=e*v+i*M+s*E+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=v*S,t[1]=(g*f*r-h*m*r-g*s*d+i*m*d+h*s*p-i*f*p)*S,t[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*S,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*d-i*c*d)*S,t[4]=M*S,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*S,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*S,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*S,t[8]=E*S,t[9]=(_*h*r-u*g*r-_*i*d+e*g*d+u*i*p-e*h*p)*S,t[10]=(o*g*r-_*a*r+_*i*l-e*g*l-o*i*p+e*a*p)*S,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*d-e*a*d)*S,t[12]=T*S,t[13]=(u*g*s-_*h*s+_*i*f-e*g*f-u*i*m+e*h*m)*S,t[14]=(_*a*s-o*g*s-_*i*c+e*g*c+o*i*m-e*a*m)*S,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*S,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,g=o*u,m=o*h,p=a*h,v=c*l,M=c*u,E=c*h,T=i.x,w=i.y,S=i.z;return s[0]=(1-(g+p))*T,s[1]=(d+E)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(d-E)*w,s[5]=(1-(f+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(_+M)*S,s[9]=(m-v)*S,s[10]=(1-(f+g))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ks.set(s[0],s[1],s[2]).length();const o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);const l=1/r,u=1/o,h=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,e.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Oi){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Oi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ia)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Oi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*l,d=(i+s)*u;let _,g;if(a===Oi)_=(o+r)*h,g=-2*h;else if(a===Ia)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ks=new z,qn=new Wt,M_=new z(0,0,0),y_=new z(1,1,1),Vi=new z,Do=new z,In=new z,rh=new Wt,oh=new wr;class ni{constructor(t=0,e=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S_=0;const ah=new z,zs=new wr,bi=new Wt,Oo=new z,Pr=new z,E_=new z,w_=new wr,ch=new z(1,0,0),lh=new z(0,1,0),uh=new z(0,0,1),hh={type:"added"},b_={type:"removed"},Bs={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Ke extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new z,e=new ni,i=new wr,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new jt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oo.copy(t):Oo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Pr,Oo,this.up):bi.lookAt(Oo,Pr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(bi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(b_),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,E_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,w_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new z(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new z,Ai=new z,wc=new z,Ti=new z,Hs=new z,Gs=new z,fh=new z,bc=new z,Ac=new z,Tc=new z,Rc=new ue,Lc=new ue,Cc=new ue;class Zn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Xn.subVectors(s,e),Ai.subVectors(i,e),wc.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(Ai),c=Xn.dot(wc),l=Ai.dot(Ai),u=Ai.dot(wc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Rc.setScalar(0),Lc.setScalar(0),Cc.setScalar(0),Rc.fromBufferAttribute(t,e),Lc.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Lc,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(t,e,i,s){return Xn.subVectors(i,e),Ai.subVectors(t,e),Xn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Xn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Zn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Hs.subVectors(s,i),Gs.subVectors(r,i),bc.subVectors(t,i);const c=Hs.dot(bc),l=Gs.dot(bc);if(c<=0&&l<=0)return e.copy(i);Ac.subVectors(t,s);const u=Hs.dot(Ac),h=Gs.dot(Ac);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Hs,o);Tc.subVectors(t,r);const d=Hs.dot(Tc),_=Gs.dot(Tc);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Gs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return fh.subVectors(r,s),a=(h-u)/(h-u+(d-_)),e.copy(s).addScaledVector(fh,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},No={h:0,s:0,l:0};function Ic(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=a_(t,1),e=xn(e,0,1),i=xn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ic(o,r,t+1/3),this.g=Ic(o,r,t),this.b=Ic(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const i=Yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=mc(t.r),this.g=mc(t.g),this.b=mc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ce.fromWorkingColorSpace(on.copy(this),t),Math.round(xn(on.r*255,0,255))*65536+Math.round(xn(on.g*255,0,255))*256+Math.round(xn(on.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(on.copy(this),e);const i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=ln){ce.fromWorkingColorSpace(on.copy(this),t);const e=on.r,i=on.g,s=on.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(No);const i=dc(Wi.h,No.h,e),s=dc(Wi.s,No.s,e),r=dc(Wi.l,No.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Ut;Ut.NAMES=Yd;let A_=0;class mo extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=or,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=kl,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class li extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new z,Uo=new Ft;class he{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qu&&(t.usage=this.usage),t}}class $d extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class jd extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ie extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}}let T_=0;const kn=new Wt,Pc=new Ke,Vs=new z,Pn=new ii,Dr=new ii,Ye=new z;class pn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vd(t)?jd:$d)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,i){return kn.makeTranslation(t,e,i),this.applyMatrix4(kn),this}scale(t,e,i){return kn.makeScale(t,e,i),this.applyMatrix4(kn),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Pn.min,Dr.min),Pn.expandByPoint(Ye),Ye.addVectors(Pn.max,Dr.max),Pn.expandByPoint(Ye)):(Pn.expandByPoint(Dr.min),Pn.expandByPoint(Dr.max))}Pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),Ye.add(Vs)),s=Math.max(s,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new z,c[R]=new z;const l=new z,u=new z,h=new z,f=new Ft,d=new Ft,_=new Ft,g=new z,m=new z;function p(R,D,x){l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,D),_.fromBufferAttribute(r,x),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const y=1/(d.x*_.y-_.x*d.y);isFinite(y)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(y),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(y),a[R].add(g),a[D].add(g),a[x].add(g),c[R].add(m),c[D].add(m),c[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,D=v.length;R<D;++R){const x=v[R],y=x.start,A=x.count;for(let L=y,O=y+A;L<O;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new z,E=new z,T=new z,w=new z;function S(R){T.fromBufferAttribute(s,R),w.copy(T);const D=a[R];M.copy(D),M.sub(T.multiplyScalar(T.dot(D))).normalize(),E.crossVectors(w,D);const y=E.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,y)}for(let R=0,D=v.length;R<D;++R){const x=v[R],y=x.start,A=x.count;for(let L=y,O=y+A;L<O;L+=3)S(t.getX(L+0)),S(t.getX(L+1)),S(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new he(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new Wt,ds=new v_,Fo=new po,ph=new z,ko=new z,zo=new z,Bo=new z,Dc=new z,Ho=new z,mh=new z,Go=new z;class It extends Ke{constructor(t=new pn,e=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Dc.fromBufferAttribute(h,t),o?Ho.addScaledVector(Dc,u):Ho.addScaledVector(Dc.sub(e),u))}e.add(Ho)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(Fo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Fo,ph)===null||ds.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(dh.copy(r).invert(),ds.copy(t.ray).applyMatrix4(dh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=v,T=M;E<T;E+=3){const w=a.getX(E),S=a.getX(E+1),R=a.getX(E+2);s=Vo(this,p,t,i,l,u,h,w,S,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);s=Vo(this,o,t,i,l,u,h,v,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let E=v,T=M;E<T;E+=3){const w=E,S=E+1,R=E+2;s=Vo(this,p,t,i,l,u,h,w,S,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const v=m,M=m+1,E=m+2;s=Vo(this,o,t,i,l,u,h,v,M,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function R_(n,t,e,i,s,r,o,a){let c;if(t.side===vn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ei,a),c===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Go);return l<e.near||l>e.far?null:{distance:l,point:Go.clone(),object:n}}function Vo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ko),n.getVertexPosition(c,zo),n.getVertexPosition(l,Bo);const u=R_(n,t,e,i,ko,zo,Bo,mh);if(u){const h=new z;Zn.getBarycoord(mh,ko,zo,Bo,h),s&&(u.uv=Zn.getInterpolatedAttribute(s,a,c,l,h,new Ft)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,c,l,h,new Ft)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};Zn.getNormal(ko,zo,Bo,f.normal),u.face=f,u.barycoord=h}return u}class sn extends pn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function _(g,m,p,v,M,E,T,w,S,R,D){const x=E/S,y=T/R,A=E/2,L=T/2,O=w/2,F=S+1,I=R+1;let P=0,U=0;const Y=new z;for(let K=0;K<I;K++){const Q=K*y-L;for(let Z=0;Z<F;Z++){const q=Z*x-A;Y[g]=q*v,Y[m]=Q*M,Y[p]=O,l.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Z/S),h.push(1-K/R),P+=1}}for(let K=0;K<R;K++)for(let Q=0;Q<S;Q++){const Z=f+Q+F*K,q=f+Q+F*(K+1),H=f+(Q+1)+F*(K+1),k=f+(Q+1)+F*K;c.push(Z,q,k),c.push(q,H,k),U+=6}a.addGroup(d,U,D),d+=U,f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _n(n){const t={};for(let e=0;e<n.length;e++){const i=xr(n[e]);for(const s in i)t[s]=i[s]}return t}function L_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const C_={clone:xr,merge:_n};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=L_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zd extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new z,_h=new Ft,gh=new Ft;class tn extends Zd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=y0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return y0*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,_h,gh),e.subVectors(gh,_h)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ws=-90,qs=1;class D_ extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Ws,qs,t,e);s.layers=this.layers,this.add(s);const r=new tn(Ws,qs,t,e);r.layers=this.layers,this.add(r);const o=new tn(Ws,qs,t,e);o.layers=this.layers,this.add(o);const a=new tn(Ws,qs,t,e);a.layers=this.layers,this.add(a);const c=new tn(Ws,qs,t,e);c.layers=this.layers,this.add(c);const l=new tn(Ws,qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jd extends fn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class O_ extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:rs});r.uniforms.tEquirect.value=e;const o=new It(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Oe),new D_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Oc=new z,N_=new z,U_=new jt;class Pi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oc.subVectors(i,e).cross(N_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||U_.getNormalMatrix(t),s=this.coplanarPoint(Oc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new po,Wo=new z;class _o{constructor(t=new Pi,e=new Pi,i=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],v=s[13],M=s[14],E=s[15];if(i[0].setComponents(c-r,f-l,m-d,E-p).normalize(),i[1].setComponents(c+r,f+l,m+d,E+p).normalize(),i[2].setComponents(c+o,f+u,m+_,E+v).normalize(),i[3].setComponents(c-o,f-u,m-_,E-v).normalize(),i[4].setComponents(c-a,f-h,m-g,E-M).normalize(),e===Oi)i[5].setComponents(c+a,f+h,m+g,E+M).normalize();else if(e===Ia)i[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Wo.x=s.normal.x>0?t.max.x:t.min.x,Wo.y=s.normal.y>0?t.max.y:t.min.y,Wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function F_(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class vi extends pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let M=0;M<l;M++){const E=M*h-r;_.push(E,-v,0),g.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,E=v+l*(p+1),T=v+1+l*(p+1),w=v+1+l*p;d.push(M,E,w),d.push(E,T,w)}this.setIndex(d),this.setAttribute("position",new Ie(_,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
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
#endif`,B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
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
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
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
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z_=`#ifdef USE_IRIDESCENCE
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
#endif`,J_=`#ifdef USE_BUMPMAP
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`
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
}`,_g=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lg=`uniform bool receiveShadow;
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
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Ug=`struct PhysicalMaterial {
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
}`,Fg=`
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
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
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S1=`float getShadowMask() {
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
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#ifdef USE_TRANSMISSION
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,W1=`#if DEPTH_PACKING == 3200
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
}`,q1=`#define DISTANCE
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
}`,X1=`#define DISTANCE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,Q1=`#define LAMBERT
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
}`,tx=`#define LAMBERT
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
}`,ex=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,rx=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,ax=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,ux=`#define TOON
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
}`,hx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:k_,alphahash_pars_fragment:z_,alphamap_fragment:B_,alphamap_pars_fragment:H_,alphatest_fragment:G_,alphatest_pars_fragment:V_,aomap_fragment:W_,aomap_pars_fragment:q_,batching_pars_vertex:X_,batching_vertex:Y_,begin_vertex:$_,beginnormal_vertex:j_,bsdfs:K_,iridescence_fragment:Z_,bumpmap_pars_fragment:J_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:eg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,cube_uv_reflection_fragment:cg,defaultnormal_vertex:lg,displacementmap_pars_vertex:ug,displacementmap_vertex:hg,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:_g,envmap_common_pars_fragment:gg,envmap_pars_fragment:xg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Cg,envmap_vertex:Mg,fog_vertex:yg,fog_pars_vertex:Sg,fog_fragment:Eg,fog_pars_fragment:wg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Lg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Pg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Og,lights_physical_fragment:Ng,lights_physical_pars_fragment:Ug,lights_fragment_begin:Fg,lights_fragment_maps:kg,lights_fragment_end:zg,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:qg,map_particle_fragment:Xg,map_particle_pars_fragment:Yg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:jg,morphinstance_vertex:Kg,morphcolor_vertex:Zg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:s1,normal_vertex:r1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:u1,opaque_fragment:h1,packing:f1,premultiplied_alpha_fragment:d1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:_1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:M1,shadowmap_vertex:y1,shadowmask_pars_fragment:S1,skinbase_vertex:E1,skinning_pars_vertex:w1,skinning_vertex:b1,skinnormal_vertex:A1,specularmap_fragment:T1,specularmap_pars_fragment:R1,tonemapping_fragment:L1,tonemapping_pars_fragment:C1,transmission_fragment:I1,transmission_pars_fragment:P1,uv_pars_fragment:D1,uv_pars_vertex:O1,uv_vertex:N1,worldpos_vertex:U1,background_vert:F1,background_frag:k1,backgroundCube_vert:z1,backgroundCube_frag:B1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:W1,distanceRGBA_vert:q1,distanceRGBA_frag:X1,equirect_vert:Y1,equirect_frag:$1,linedashed_vert:j1,linedashed_frag:K1,meshbasic_vert:Z1,meshbasic_frag:J1,meshlambert_vert:Q1,meshlambert_frag:tx,meshmatcap_vert:ex,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:cx,meshtoon_vert:lx,meshtoon_frag:ux,points_vert:hx,points_frag:fx,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:_x},dt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},oi={basic:{uniforms:_n([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:_n([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:_n([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:_n([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:_n([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:_n([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:_n([dt.points,dt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:_n([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:_n([dt.common,dt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:_n([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:_n([dt.sprite,dt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:_n([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:_n([dt.lights,dt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};oi.physical={uniforms:_n([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const qo={r:0,b:0,g:0},ms=new ni,gx=new Wt;function xx(n,t,e,i,s,r,o){const a=new Ut(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function g(v){let M=!1;const E=_(v);E===null?p(a,c):E&&E.isColor&&(p(E,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===Ya)?(u===void 0&&(u=new It(new sn(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:xr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ms.copy(M.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(ms)),u.material.toneMapped=ce.getTransfer(E.colorSpace)!==ye,(h!==E||f!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new It(new vi(2,2),new pi({name:"BackgroundMaterial",uniforms:xr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(E.colorSpace)!==ye,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(qo,Kd(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:m}}function vx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,y,A,L,O){let F=!1;const I=h(L,A,y);r!==I&&(r=I,l(r.object)),F=d(x,L,A,O),F&&_(x,L,A,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,E(x,y,A,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,y,A){const L=A.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let F=O[y.id];F===void 0&&(F={},O[y.id]=F);let I=F[L];return I===void 0&&(I=f(c()),F[L]=I),I}function f(x){const y=[],A=[],L=[];for(let O=0;O<e;O++)y[O]=0,A[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:A,attributeDivisors:L,object:x,attributes:{},index:null}}function d(x,y,A,L){const O=r.attributes,F=y.attributes;let I=0;const P=A.getAttributes();for(const U in P)if(P[U].location>=0){const K=O[U];let Q=F[U];if(Q===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;I++}return r.attributesNum!==I||r.index!==L}function _(x,y,A,L){const O={},F=y.attributes;let I=0;const P=A.getAttributes();for(const U in P)if(P[U].location>=0){let K=F[U];K===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),O[U]=Q,I++}r.attributes=O,r.attributesNum=I,r.index=L}function g(){const x=r.newAttributes;for(let y=0,A=x.length;y<A;y++)x[y]=0}function m(x){p(x,0)}function p(x,y){const A=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;A[x]=1,L[x]===0&&(n.enableVertexAttribArray(x),L[x]=1),O[x]!==y&&(n.vertexAttribDivisor(x,y),O[x]=y)}function v(){const x=r.newAttributes,y=r.enabledAttributes;for(let A=0,L=y.length;A<L;A++)y[A]!==x[A]&&(n.disableVertexAttribArray(A),y[A]=0)}function M(x,y,A,L,O,F,I){I===!0?n.vertexAttribIPointer(x,y,A,O,F):n.vertexAttribPointer(x,y,A,L,O,F)}function E(x,y,A,L){g();const O=L.attributes,F=A.getAttributes(),I=y.defaultAttributeValues;for(const P in F){const U=F[P];if(U.location>=0){let Y=O[P];if(Y===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const K=Y.normalized,Q=Y.itemSize,Z=t.get(Y);if(Z===void 0)continue;const q=Z.buffer,H=Z.type,k=Z.bytesPerElement,J=H===n.INT||H===n.UNSIGNED_INT||Y.gpuType===Y0;if(Y.isInterleavedBufferAttribute){const nt=Y.data,lt=nt.stride,ct=Y.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<U.locationSize;pt++)p(U.location+pt,nt.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<U.locationSize;pt++)m(U.location+pt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let pt=0;pt<U.locationSize;pt++)M(U.location+pt,Q/U.locationSize,H,K,lt*k,(ct+Q/U.locationSize*pt)*k,J)}else{if(Y.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt,Y.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let nt=0;nt<U.locationSize;nt++)M(U.location+nt,Q/U.locationSize,H,K,Q*k,Q/U.locationSize*nt*k,J)}}else if(I!==void 0){const K=I[P];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(U.location,K);break;case 3:n.vertexAttrib3fv(U.location,K);break;case 4:n.vertexAttrib4fv(U.location,K);break;default:n.vertexAttrib1fv(U.location,K)}}}}v()}function T(){R();for(const x in i){const y=i[x];for(const A in y){const L=y[A];for(const O in L)u(L[O].object),delete L[O];delete y[A]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const y=i[x.id];for(const A in y){const L=y[A];for(const O in L)u(L[O].object),delete L[O];delete y[A]}delete i[x.id]}function S(x){for(const y in i){const A=i[y];if(A[x.id]===void 0)continue;const L=A[x.id];for(const O in L)u(L[O].object),delete L[O];delete A[x.id]}}function R(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Mx(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)e.update(_,i,f[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==hn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const R=S===Sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Ui&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ci&&!R)}function c(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:T,maxSamples:w}}function Sx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Pi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,M=v*4;let E=p.clippingState||null;c.value=E,E=u(_,f,M,d);for(let T=0;T!==M;++T)E[T]=e[T];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=d;M!==g;++M,E+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ex(n){let t=new WeakMap;function e(o,a){return a===Xl?o.mapping=pr:a===Yl&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xl||a===Yl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new O_(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class tp extends Zd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,xh=[.125,.215,.35,.446,.526,.582],Es=20,Nc=new tp,vh=new Ut;let Uc=null,Fc=0,kc=0,zc=!1;const ys=(1+Math.sqrt(5))/2,Xs=1/ys,Mh=[new z(-ys,Xs,0),new z(ys,Xs,0),new z(-Xs,0,ys),new z(Xs,0,ys),new z(0,ys,-Xs),new z(0,ys,Xs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uc,Fc,kc),this._renderer.xr.enabled=zc,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Sr,format:hn,colorSpace:xi,depthBuffer:!1},s=Sh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(r)),this._blurMaterial=bx(r,t,e)}return s}_compileMaterial(t){const e=new It(this._lodPlanes[0],t);this._renderer.compile(e,Nc)}_sceneToCubeUV(t,e,i,s){const a=new tn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(vh),u.toneMapping=os,u.autoClear=!1;const d=new li({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new It(new sn,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(vh),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Xo(s,v*M,p>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===pr||t.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Xo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Nc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mh[(s-r-1)%Mh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);const p=[];let v=0;for(let S=0;S<Es;++S){const R=S/g,D=Math.exp(-R*R/2);p.push(D),S===0?v+=D:S<m&&(v+=2*D)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const E=this._sizeLods[s],T=3*E*(s>M-ir?s-M+ir:0),w=4*(this._cubeSize-E);Xo(e,T,w,3*E,2*E),c.setRenderTarget(e),c.render(h,Nc)}}function wx(n){const t=[],e=[],i=[];let s=n;const r=n-ir+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ir?c=xh[o-n+ir-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),M=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,R=w>2?0:-1,D=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];v.set(D,g*_*w),M.set(f,m*_*w);const x=[w,w,w,w,w,w];E.set(x,p*_*w)}const T=new pn;T.setAttribute("position",new he(v,g)),T.setAttribute("uv",new he(M,m)),T.setAttribute("faceIndex",new he(E,p)),t.push(T),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sh(n,t,e){const i=new Fi(n,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bx(n,t,e){const i=new Float32Array(Es),s=new z(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Eh(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function wh(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function Ax(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xl||c===Yl,u=c===pr||c===mr;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yh(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new yh(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Tx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&xa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Rx(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let M=0,E=v.length;M<E;M+=3){const T=v[M+0],w=v[M+1],S=v[M+2];f.push(T,w,w,S,S,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let M=0,E=v.length/3-1;M<E;M+=3){const T=M+0,w=M+1,S=M+2;f.push(T,w,w,S,S,T)}}else return;const m=new(Vd(f)?jd:$d)(f,1);m.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Lx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v];for(let v=0;v<g.length;v++)e.update(p,i,g[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ix(n,t,e){const i=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let T=a.attributes.position.count*E,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const S=new Float32Array(T*w*4*h),R=new qd(S,T,w,h);R.type=ci,R.needsUpdate=!0;const D=E*4;for(let y=0;y<h;y++){const A=p[y],L=v[y],O=M[y],F=T*w*4*y;for(let I=0;I<A.count;I++){const P=I*D;_===!0&&(s.fromBufferAttribute(A,I),S[F+P+0]=s.x,S[F+P+1]=s.y,S[F+P+2]=s.z,S[F+P+3]=0),g===!0&&(s.fromBufferAttribute(L,I),S[F+P+4]=s.x,S[F+P+5]=s.y,S[F+P+6]=s.z,S[F+P+7]=0),m===!0&&(s.fromBufferAttribute(O,I),S[F+P+8]=s.x,S[F+P+9]=s.y,S[F+P+10]=s.z,S[F+P+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Ft(T,w)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Px(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ep extends fn{constructor(t,e,i,s,r,o,a,c,l,u=ar){if(u!==ar&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ar&&(i=Ts),i===void 0&&u===gr&&(i=_r),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const np=new fn,bh=new ep(1,1),ip=new qd,sp=new g_,rp=new Jd,Ah=[],Th=[],Rh=new Float32Array(16),Lh=new Float32Array(9),Ch=new Float32Array(4);function br(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ja(n,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Dx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function Fx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Ch.set(i),n.uniformMatrix2fv(this.addr,!1,Ch),Xe(e,i)}}function kx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),Xe(e,i)}}function zx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Xe(e,i)}}function Bx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function Vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function Wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function $x(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bh.compareFunction=Gd,r=bh):r=np,e.setTexture2D(t||r,s)}function jx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sp,s)}function Kx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||rp,s)}function Zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ip,s)}function Jx(n){switch(n){case 5126:return Dx;case 35664:return Ox;case 35665:return Nx;case 35666:return Ux;case 35674:return Fx;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Bx;case 35667:case 35671:return Hx;case 35668:case 35672:return Gx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return qx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Qx(n,t){n.uniform1fv(this.addr,t)}function tv(n,t){const e=br(t,this.size,2);n.uniform2fv(this.addr,e)}function ev(n,t){const e=br(t,this.size,3);n.uniform3fv(this.addr,e)}function nv(n,t){const e=br(t,this.size,4);n.uniform4fv(this.addr,e)}function iv(n,t){const e=br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function sv(n,t){const e=br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rv(n,t){const e=br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ov(n,t){n.uniform1iv(this.addr,t)}function av(n,t){n.uniform2iv(this.addr,t)}function cv(n,t){n.uniform3iv(this.addr,t)}function lv(n,t){n.uniform4iv(this.addr,t)}function uv(n,t){n.uniform1uiv(this.addr,t)}function hv(n,t){n.uniform2uiv(this.addr,t)}function fv(n,t){n.uniform3uiv(this.addr,t)}function dv(n,t){n.uniform4uiv(this.addr,t)}function pv(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||np,r[o])}function mv(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sp,r[o])}function _v(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rp,r[o])}function gv(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ip,r[o])}function xv(n){switch(n){case 5126:return Qx;case 35664:return tv;case 35665:return ev;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return cv;case 35669:case 35673:return lv;case 5125:return uv;case 36294:return hv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return gv}}class vv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jx(e.type)}}class Mv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}}class yv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function Ih(n,t){n.seq.push(t),n.map[t.id]=t}function Sv(n,t,e){const i=n.name,s=i.length;for(Bc.lastIndex=0;;){const r=Bc.exec(i),o=Bc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ih(e,l===void 0?new vv(a,n,t):new Mv(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new yv(a),Ih(e,h)),e=h}}}class va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ph(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ev=37297;let wv=0;function bv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Av(n){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(n);let i;switch(t===e?i="":t===Ca&&e===La?i="LinearDisplayP3ToLinearSRGB":t===La&&e===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case xi:case $a:return[i,"LinearTransferOETF"];case ln:case tu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bv(n.getShaderSource(t),o)}else return s}function Tv(n,t){const e=Av(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rv(n,t){let e;switch(t){case Wm:e="Linear";break;case qm:e="Reinhard";break;case Xm:e="Cineon";break;case Cd:e="ACESFilmic";break;case $m:e="AgX";break;case jm:e="Neutral";break;case Ym:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yo=new z;function Lv(){ce.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),t=Yo.y.toFixed(4),e=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Iv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Pv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Yr(n){return n!==""}function Oh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function S0(n){return n.replace(Dv,Nv)}const Ov=new Map;function Nv(n,t){let e=Kt[t];if(e===void 0){const i=Ov.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return S0(e)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(Uv,Fv)}function Fv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function kv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function zv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function Hv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case Gm:t="ENVMAP_BLENDING_MIX";break;case Vm:t="ENVMAP_BLENDING_ADD";break}return t}function Gv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Vv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=kv(e),l=zv(e),u=Bv(e),h=Hv(e),f=Gv(e),d=Cv(e),_=Iv(r),g=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?Kt.tonemapping_pars_fragment:"",e.toneMapping!==os?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),Lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=S0(o),o=Oh(o,e),o=Nh(o,e),a=S0(a),a=Oh(a,e),a=Nh(a,e),o=Uh(o),a=Uh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,E=v+p+a,T=Ph(s,s.VERTEX_SHADER,M),w=Ph(s,s.FRAGMENT_SHADER,E);s.attachShader(g,T),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(y){if(n.debug.checkShaderErrors){const A=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(w).trim();let F=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,w);else{const P=Dh(s,T,"vertex"),U=Dh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+A+`
`+P+`
`+U)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||O==="")&&(I=!1);I&&(y.diagnostics={runnable:F,programLog:A,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(T),s.deleteShader(w),R=new va(s,g),D=Pv(s,g)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let D;this.getAttributes=function(){return D===void 0&&S(this),D};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,Ev)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let Wv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Xv(t),e.set(t,i)),i}}class Xv{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}}function Yv(n,t,e,i,s,r,o){const a=new Xd,c=new qv,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,A,L,O){const F=L.fog,I=O.geometry,P=x.isMeshStandardMaterial?L.environment:null,U=(x.isMeshStandardMaterial?e:t).get(x.envMap||P),Y=U&&U.mapping===Ya?U.image.height:null,K=g[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=Q!==void 0?Q.length:0;let q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let H,k,J,nt;if(K){const yn=oi[K];H=yn.vertexShader,k=yn.fragmentShader}else H=x.vertexShader,k=x.fragmentShader,c.update(x),J=c.getVertexShaderID(x),nt=c.getFragmentShaderID(x);const lt=n.getRenderTarget(),ct=O.isInstancedMesh===!0,pt=O.isBatchedMesh===!0,xt=!!x.map,vt=!!x.matcap,B=!!U,me=!!x.aoMap,Nt=!!x.lightMap,qt=!!x.bumpMap,Rt=!!x.normalMap,te=!!x.displacementMap,Mt=!!x.emissiveMap,N=!!x.metalnessMap,b=!!x.roughnessMap,X=x.anisotropy>0,it=x.clearcoat>0,at=x.dispersion>0,st=x.iridescence>0,At=x.sheen>0,ft=x.transmission>0,Et=X&&!!x.anisotropyMap,ee=it&&!!x.clearcoatMap,ut=it&&!!x.clearcoatNormalMap,wt=it&&!!x.clearcoatRoughnessMap,Ht=st&&!!x.iridescenceMap,Gt=st&&!!x.iridescenceThicknessMap,bt=At&&!!x.sheenColorMap,ne=At&&!!x.sheenRoughnessMap,Yt=!!x.specularMap,xe=!!x.specularColorMap,G=!!x.specularIntensityMap,yt=ft&&!!x.transmissionMap,tt=ft&&!!x.thicknessMap,ot=!!x.gradientMap,_t=!!x.alphaMap,St=x.alphaTest>0,ie=!!x.alphaHash,Ue=!!x.extensions;let Mn=os;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Mn=n.toneMapping);const se={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:k,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:pt,batchingColor:pt&&O._colorsTexture!==null,instancing:ct,instancingColor:ct&&O.instanceColor!==null,instancingMorph:ct&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:xi,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:vt,envMap:B,envMapMode:B&&U.mapping,envMapCubeUVHeight:Y,aoMap:me,lightMap:Nt,bumpMap:qt,normalMap:Rt,displacementMap:d&&te,emissiveMap:Mt,normalMapObjectSpace:Rt&&x.normalMapType===Qm,normalMapTangentSpace:Rt&&x.normalMapType===Hd,metalnessMap:N,roughnessMap:b,anisotropy:X,anisotropyMap:Et,clearcoat:it,clearcoatMap:ee,clearcoatNormalMap:ut,clearcoatRoughnessMap:wt,dispersion:at,iridescence:st,iridescenceMap:Ht,iridescenceThicknessMap:Gt,sheen:At,sheenColorMap:bt,sheenRoughnessMap:ne,specularMap:Yt,specularColorMap:xe,specularIntensityMap:G,transmission:ft,transmissionMap:yt,thicknessMap:tt,gradientMap:ot,opaque:x.transparent===!1&&x.blending===or&&x.alphaToCoverage===!1,alphaMap:_t,alphaTest:St,alphaHash:ie,combine:x.combine,mapUv:xt&&m(x.map.channel),aoMapUv:me&&m(x.aoMap.channel),lightMapUv:Nt&&m(x.lightMap.channel),bumpMapUv:qt&&m(x.bumpMap.channel),normalMapUv:Rt&&m(x.normalMap.channel),displacementMapUv:te&&m(x.displacementMap.channel),emissiveMapUv:Mt&&m(x.emissiveMap.channel),metalnessMapUv:N&&m(x.metalnessMap.channel),roughnessMapUv:b&&m(x.roughnessMap.channel),anisotropyMapUv:Et&&m(x.anisotropyMap.channel),clearcoatMapUv:ee&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&m(x.sheenRoughnessMap.channel),specularMapUv:Yt&&m(x.specularMap.channel),specularColorMapUv:xe&&m(x.specularColorMap.channel),specularIntensityMapUv:G&&m(x.specularIntensityMap.channel),transmissionMapUv:yt&&m(x.transmissionMap.channel),thicknessMapUv:tt&&m(x.thicknessMap.channel),alphaMapUv:_t&&m(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Rt||X),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(xt||_t),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mn,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ai,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&x.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function v(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)y.push(A),y.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(M(y,x),E(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),x.push(a.mask)}function T(x){const y=g[x.type];let A;if(y){const L=oi[y];A=C_.clone(L.uniforms)}else A=x.uniforms;return A}function w(x,y){let A;for(let L=0,O=u.length;L<O;L++){const F=u[L];if(F.cacheKey===y){A=F,++A.usedTimes;break}}return A===void 0&&(A=new Vv(n,y,x,r),u.push(A)),A}function S(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function R(x){c.remove(x)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:T,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:u,dispose:D}}function $v(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,_,g,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||jv),i.length>1&&i.sort(f||kh),s.length>1&&s.sort(f||kh)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Kv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new zh,n.set(i,[o])):s>=r.length?(o=new zh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ut};break;case"SpotLight":e={position:new z,direction:new z,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function Jv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Qv=0;function tM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eM(n){const t=new Zv,e=Jv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const s=new z,r=new Wt,o=new Wt;function a(l){let u=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,M=0,E=0,T=0,w=0,S=0;l.sort(tM);for(let D=0,x=l.length;D<x;D++){const y=l[D],A=y.color,L=y.intensity,O=y.distance,F=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=A.r*L,h+=A.g*L,f+=A.b*L;else if(y.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(y.sh.coefficients[I],L);S++}else if(y.isDirectionalLight){const I=t.get(y);if(I.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const P=y.shadow,U=e.get(y);U.shadowIntensity=P.intensity,U.shadowBias=P.bias,U.shadowNormalBias=P.normalBias,U.shadowRadius=P.radius,U.shadowMapSize=P.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=y.shadow.matrix,v++}i.directional[d]=I,d++}else if(y.isSpotLight){const I=t.get(y);I.position.setFromMatrixPosition(y.matrixWorld),I.color.copy(A).multiplyScalar(L),I.distance=O,I.coneCos=Math.cos(y.angle),I.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),I.decay=y.decay,i.spot[g]=I;const P=y.shadow;if(y.map&&(i.spotLightMap[T]=y.map,T++,P.updateMatrices(y),y.castShadow&&w++),i.spotLightMatrix[g]=P.matrix,y.castShadow){const U=e.get(y);U.shadowIntensity=P.intensity,U.shadowBias=P.bias,U.shadowNormalBias=P.normalBias,U.shadowRadius=P.radius,U.shadowMapSize=P.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=F,E++}g++}else if(y.isRectAreaLight){const I=t.get(y);I.color.copy(A).multiplyScalar(L),I.halfWidth.set(y.width*.5,0,0),I.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=I,m++}else if(y.isPointLight){const I=t.get(y);if(I.color.copy(y.color).multiplyScalar(y.intensity),I.distance=y.distance,I.decay=y.decay,y.castShadow){const P=y.shadow,U=e.get(y);U.shadowIntensity=P.intensity,U.shadowBias=P.bias,U.shadowNormalBias=P.normalBias,U.shadowRadius=P.radius,U.shadowMapSize=P.mapSize,U.shadowCameraNear=P.camera.near,U.shadowCameraFar=P.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=y.shadow.matrix,M++}i.point[_]=I,_++}else if(y.isHemisphereLight){const I=t.get(y);I.skyColor.copy(y.color).multiplyScalar(L),I.groundColor.copy(y.groundColor).multiplyScalar(L),i.hemi[p]=I,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==T||R.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=S,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=T,R.numLightProbes=S,i.version=Qv++)}function c(l,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(M.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function Bh(n){const t=new eM(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function nM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bh(n),t.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class iM extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sM extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`;function aM(n,t,e){let i=new _o;const s=new Ft,r=new Ft,o=new ue,a=new iM({depthPacking:Jm}),c=new sM,l={},u=e.maxTextureSize,h={[ei]:vn,[vn]:ei,[ai]:ai},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:rM,fragmentShader:oM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let p=this.type;this.render=function(w,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const D=n.getRenderTarget(),x=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),A=n.state;A.setBlending(rs),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const L=p!==Ci&&this.type===Ci,O=p===Ci&&this.type!==Ci;for(let F=0,I=w.length;F<I;F++){const P=w[F],U=P.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();if(s.multiply(Y),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null||L===!0||O===!0){const Q=this.type!==Ci?{minFilter:bn,magFilter:bn}:{};U.map!==null&&U.map.dispose(),U.map=new Fi(s.x,s.y,Q),U.map.texture.name=P.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const K=U.getViewportCount();for(let Q=0;Q<K;Q++){const Z=U.getViewport(Q);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),A.viewport(o),U.updateMatrices(P,Q),i=U.getFrustum(),E(S,R,U.camera,P,this.type)}U.isPointLightShadow!==!0&&this.type===Ci&&v(U,R),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,x,y)};function v(w,S){const R=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(S,null,R,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(S,null,R,d,g,null)}function M(w,S,R,D){let x=null;const y=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)x=y;else if(x=R.isPointLight===!0?c:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const A=x.uuid,L=S.uuid;let O=l[A];O===void 0&&(O={},l[A]=O);let F=O[L];F===void 0&&(F=x.clone(),O[L]=F,S.addEventListener("dispose",T)),x=F}if(x.visible=S.visible,x.wireframe=S.wireframe,D===Ci?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:h[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const A=n.properties.get(x);A.light=R}return x}function E(w,S,R,D,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ci)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const L=t.update(w),O=w.material;if(Array.isArray(O)){const F=L.groups;for(let I=0,P=F.length;I<P;I++){const U=F[I],Y=O[U.materialIndex];if(Y&&Y.visible){const K=M(w,Y,D,x);w.onBeforeShadow(n,w,S,R,L,K,U),n.renderBufferDirect(R,null,L,K,w,U),w.onAfterShadow(n,w,S,R,L,K,U)}}}else if(O.visible){const F=M(w,O,D,x);w.onBeforeShadow(n,w,S,R,L,F,null),n.renderBufferDirect(R,null,L,F,w,null),w.onAfterShadow(n,w,S,R,L,F,null)}}const A=w.children;for(let L=0,O=A.length;L<O;L++)E(A[L],S,R,D,x)}function T(w){w.target.removeEventListener("dispose",T);for(const R in l){const D=l[R],x=w.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}const cM={[zl]:Bl,[Hl]:Wl,[Gl]:ql,[dr]:Vl,[Bl]:zl,[Wl]:Hl,[ql]:Gl,[Vl]:dr};function lM(n){function t(){let G=!1;const yt=new ue;let tt=null;const ot=new ue(0,0,0,0);return{setMask:function(_t){tt!==_t&&!G&&(n.colorMask(_t,_t,_t,_t),tt=_t)},setLocked:function(_t){G=_t},setClear:function(_t,St,ie,Ue,Mn){Mn===!0&&(_t*=Ue,St*=Ue,ie*=Ue),yt.set(_t,St,ie,Ue),ot.equals(yt)===!1&&(n.clearColor(_t,St,ie,Ue),ot.copy(yt))},reset:function(){G=!1,tt=null,ot.set(-1,0,0,0)}}}function e(){let G=!1,yt=!1,tt=null,ot=null,_t=null;return{setReversed:function(St){yt=St},setTest:function(St){St?J(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(St){tt!==St&&!G&&(n.depthMask(St),tt=St)},setFunc:function(St){if(yt&&(St=cM[St]),ot!==St){switch(St){case zl:n.depthFunc(n.NEVER);break;case Bl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=St}},setLocked:function(St){G=St},setClear:function(St){_t!==St&&(n.clearDepth(St),_t=St)},reset:function(){G=!1,tt=null,ot=null,_t=null}}}function i(){let G=!1,yt=null,tt=null,ot=null,_t=null,St=null,ie=null,Ue=null,Mn=null;return{setTest:function(se){G||(se?J(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(se){yt!==se&&!G&&(n.stencilMask(se),yt=se)},setFunc:function(se,yn,Si){(tt!==se||ot!==yn||_t!==Si)&&(n.stencilFunc(se,yn,Si),tt=se,ot=yn,_t=Si)},setOp:function(se,yn,Si){(St!==se||ie!==yn||Ue!==Si)&&(n.stencilOp(se,yn,Si),St=se,ie=yn,Ue=Si)},setLocked:function(se){G=se},setClear:function(se){Mn!==se&&(n.clearStencil(se),Mn=se)},reset:function(){G=!1,yt=null,tt=null,ot=null,_t=null,St=null,ie=null,Ue=null,Mn=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,m=null,p=null,v=null,M=null,E=null,T=null,w=new Ut(0,0,0),S=0,R=!1,D=null,x=null,y=null,A=null,L=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,I=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(P)[1]),F=I>=1):P.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),F=I>=2);let U=null,Y={};const K=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),Z=new ue().fromArray(K),q=new ue().fromArray(Q);function H(G,yt,tt,ot){const _t=new Uint8Array(4),St=n.createTexture();n.bindTexture(G,St),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ie=0;ie<tt;ie++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(yt+ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return St}const k={};k[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),J(n.DEPTH_TEST),r.setFunc(dr),Nt(!1),qt(ju),J(n.CULL_FACE),B(rs);function J(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function nt(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function lt(G,yt){return u[G]!==yt?(n.bindFramebuffer(G,yt),u[G]=yt,G===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),G===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function ct(G,yt){let tt=f,ot=!1;if(G){tt=h.get(yt),tt===void 0&&(tt=[],h.set(yt,tt));const _t=G.textures;if(tt.length!==_t.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let St=0,ie=_t.length;St<ie;St++)tt[St]=n.COLOR_ATTACHMENT0+St;tt.length=_t.length,ot=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ot=!0);ot&&n.drawBuffers(tt)}function pt(G){return d!==G?(n.useProgram(G),d=G,!0):!1}const xt={[Ss]:n.FUNC_ADD,[bm]:n.FUNC_SUBTRACT,[Am]:n.FUNC_REVERSE_SUBTRACT};xt[Tm]=n.MIN,xt[Rm]=n.MAX;const vt={[Lm]:n.ZERO,[Cm]:n.ONE,[Im]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[Fm]:n.SRC_ALPHA_SATURATE,[Nm]:n.DST_COLOR,[Dm]:n.DST_ALPHA,[Pm]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[Um]:n.ONE_MINUS_DST_COLOR,[Om]:n.ONE_MINUS_DST_ALPHA,[km]:n.CONSTANT_COLOR,[zm]:n.ONE_MINUS_CONSTANT_COLOR,[Bm]:n.CONSTANT_ALPHA,[Hm]:n.ONE_MINUS_CONSTANT_ALPHA};function B(G,yt,tt,ot,_t,St,ie,Ue,Mn,se){if(G===rs){_===!0&&(nt(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),G!==wm){if(G!==g||se!==R){if((m!==Ss||M!==Ss)&&(n.blendEquation(n.FUNC_ADD),m=Ss,M=Ss),se)switch(G){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,v=null,E=null,T=null,w.set(0,0,0),S=0,g=G,R=se}return}_t=_t||yt,St=St||tt,ie=ie||ot,(yt!==m||_t!==M)&&(n.blendEquationSeparate(xt[yt],xt[_t]),m=yt,M=_t),(tt!==p||ot!==v||St!==E||ie!==T)&&(n.blendFuncSeparate(vt[tt],vt[ot],vt[St],vt[ie]),p=tt,v=ot,E=St,T=ie),(Ue.equals(w)===!1||Mn!==S)&&(n.blendColor(Ue.r,Ue.g,Ue.b,Mn),w.copy(Ue),S=Mn),g=G,R=!1}function me(G,yt){G.side===ai?nt(n.CULL_FACE):J(n.CULL_FACE);let tt=G.side===vn;yt&&(tt=!tt),Nt(tt),G.blending===or&&G.transparent===!1?B(rs):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const ot=G.stencilWrite;o.setTest(ot),ot&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),te(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(G){D!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),D=G)}function qt(G){G!==Sm?(J(n.CULL_FACE),G!==x&&(G===ju?n.cullFace(n.BACK):G===Em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),x=G}function Rt(G){G!==y&&(F&&n.lineWidth(G),y=G)}function te(G,yt,tt){G?(J(n.POLYGON_OFFSET_FILL),(A!==yt||L!==tt)&&(n.polygonOffset(yt,tt),A=yt,L=tt)):nt(n.POLYGON_OFFSET_FILL)}function Mt(G){G?J(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function N(G){G===void 0&&(G=n.TEXTURE0+O-1),U!==G&&(n.activeTexture(G),U=G)}function b(G,yt,tt){tt===void 0&&(U===null?tt=n.TEXTURE0+O-1:tt=U);let ot=Y[tt];ot===void 0&&(ot={type:void 0,texture:void 0},Y[tt]=ot),(ot.type!==G||ot.texture!==yt)&&(U!==tt&&(n.activeTexture(tt),U=tt),n.bindTexture(G,yt||k[G]),ot.type=G,ot.texture=yt)}function X(){const G=Y[U];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(G){Z.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Z.copy(G))}function bt(G){q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function ne(G,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let ot=tt.get(G);ot===void 0&&(ot=n.getUniformBlockIndex(yt,G.name),tt.set(G,ot))}function Yt(G,yt){const ot=c.get(yt).get(G);a.get(yt)!==ot&&(n.uniformBlockBinding(yt,ot,G.__bindingPointIndex),a.set(yt,ot))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},U=null,Y={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,m=null,p=null,v=null,M=null,E=null,T=null,w=new Ut(0,0,0),S=0,R=!1,D=null,x=null,y=null,A=null,L=null,Z.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:J,disable:nt,bindFramebuffer:lt,drawBuffers:ct,useProgram:pt,setBlending:B,setMaterial:me,setFlipSided:Nt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:te,setScissorTest:Mt,activeTexture:N,bindTexture:b,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:at,texImage2D:wt,texImage3D:Ht,updateUBOMapping:ne,uniformBlockBinding:Yt,texStorage2D:ee,texStorage3D:ut,texSubImage2D:st,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:Et,scissor:Gt,viewport:bt,reset:xe}}function Hh(n,t,e,i){const s=uM(i);switch(e){case Nd:return n*t;case Fd:return n*t;case kd:return n*t*2;case K0:return n*t/s.components*s.byteLength;case Z0:return n*t/s.components*s.byteLength;case zd:return n*t*2/s.components*s.byteLength;case J0:return n*t*2/s.components*s.byteLength;case Ud:return n*t*3/s.components*s.byteLength;case hn:return n*t*4/s.components*s.byteLength;case Q0:return n*t*4/s.components*s.byteLength;case da:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ma:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:case Jl:return Math.max(n,16)*Math.max(t,8)/4;case jl:case Zl:return Math.max(n,8)*Math.max(t,8)/2;case Ql:case t0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case e0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case n0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case i0:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case s0:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case r0:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case o0:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case a0:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case c0:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case l0:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case u0:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case h0:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case f0:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case d0:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case p0:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case m0:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ga:case _0:case g0:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bd:case x0:return Math.ceil(n/4)*Math.ceil(t/4)*8;case v0:case M0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uM(n){switch(n){case Ui:case Pd:return{byteLength:1,components:1};case io:case Dd:case Sr:return{byteLength:2,components:1};case $0:case j0:return{byteLength:2,components:4};case Ts:case Y0:case ci:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,b){return d?new OffscreenCanvas(N,b):Pa("canvas")}function g(N,b,X){let it=1;const at=Mt(N);if((at.width>X||at.height>X)&&(it=X/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const st=Math.floor(it*at.width),At=Math.floor(it*at.height);h===void 0&&(h=_(st,At));const ft=b?_(st,At):h;return ft.width=st,ft.height=At,ft.getContext("2d").drawImage(N,0,0,st,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+st+"x"+At+")."),ft}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==bn&&N.minFilter!==Oe}function p(N){n.generateMipmap(N)}function v(N,b,X,it,at=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let st=b;if(b===n.RED&&(X===n.FLOAT&&(st=n.R32F),X===n.HALF_FLOAT&&(st=n.R16F),X===n.UNSIGNED_BYTE&&(st=n.R8)),b===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.R8UI),X===n.UNSIGNED_SHORT&&(st=n.R16UI),X===n.UNSIGNED_INT&&(st=n.R32UI),X===n.BYTE&&(st=n.R8I),X===n.SHORT&&(st=n.R16I),X===n.INT&&(st=n.R32I)),b===n.RG&&(X===n.FLOAT&&(st=n.RG32F),X===n.HALF_FLOAT&&(st=n.RG16F),X===n.UNSIGNED_BYTE&&(st=n.RG8)),b===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RG8UI),X===n.UNSIGNED_SHORT&&(st=n.RG16UI),X===n.UNSIGNED_INT&&(st=n.RG32UI),X===n.BYTE&&(st=n.RG8I),X===n.SHORT&&(st=n.RG16I),X===n.INT&&(st=n.RG32I)),b===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RGB8UI),X===n.UNSIGNED_SHORT&&(st=n.RGB16UI),X===n.UNSIGNED_INT&&(st=n.RGB32UI),X===n.BYTE&&(st=n.RGB8I),X===n.SHORT&&(st=n.RGB16I),X===n.INT&&(st=n.RGB32I)),b===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),X===n.UNSIGNED_INT&&(st=n.RGBA32UI),X===n.BYTE&&(st=n.RGBA8I),X===n.SHORT&&(st=n.RGBA16I),X===n.INT&&(st=n.RGBA32I)),b===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),b===n.RGBA){const At=at?Ra:ce.getTransfer(it);X===n.FLOAT&&(st=n.RGBA32F),X===n.HALF_FLOAT&&(st=n.RGBA16F),X===n.UNSIGNED_BYTE&&(st=At===ye?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(N,b){let X;return N?b===null||b===Ts||b===_r?X=n.DEPTH24_STENCIL8:b===ci?X=n.DEPTH32F_STENCIL8:b===io&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ts||b===_r?X=n.DEPTH_COMPONENT24:b===ci?X=n.DEPTH_COMPONENT32F:b===io&&(X=n.DEPTH_COMPONENT16),X}function E(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==bn&&N.minFilter!==Oe?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function T(N){const b=N.target;b.removeEventListener("dispose",T),S(b),b.isVideoTexture&&u.delete(b)}function w(N){const b=N.target;b.removeEventListener("dispose",w),D(b)}function S(N){const b=i.get(N);if(b.__webglInit===void 0)return;const X=N.source,it=f.get(X);if(it){const at=it[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&R(N),Object.keys(it).length===0&&f.delete(X)}i.remove(N)}function R(N){const b=i.get(N);n.deleteTexture(b.__webglTexture);const X=N.source,it=f.get(X);delete it[b.__cacheKey],o.memory.textures--}function D(N){const b=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let at=0;at<b.__webglFramebuffer[it].length;at++)n.deleteFramebuffer(b.__webglFramebuffer[it][at]);else n.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)n.deleteFramebuffer(b.__webglFramebuffer[it]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=N.textures;for(let it=0,at=X.length;it<at;it++){const st=i.get(X[it]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(X[it])}i.remove(N)}let x=0;function y(){x=0}function A(){const N=x;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),x+=1,N}function L(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function O(N,b){const X=i.get(N);if(N.isVideoTexture&&Rt(N),N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){const it=N.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(X,N,b);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+b)}function F(N,b){const X=i.get(N);if(N.version>0&&X.__version!==N.version){q(X,N,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+b)}function I(N,b){const X=i.get(N);if(N.version>0&&X.__version!==N.version){q(X,N,b);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+b)}function P(N,b){const X=i.get(N);if(N.version>0&&X.__version!==N.version){H(X,N,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+b)}const U={[As]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},Y={[bn]:n.NEAREST,[Km]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[hc]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},K={[t_]:n.NEVER,[o_]:n.ALWAYS,[e_]:n.LESS,[Gd]:n.LEQUAL,[n_]:n.EQUAL,[r_]:n.GEQUAL,[i_]:n.GREATER,[s_]:n.NOTEQUAL};function Q(N,b){if(b.type===ci&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Oe||b.magFilter===hc||b.magFilter===To||b.magFilter===Qn||b.minFilter===Oe||b.minFilter===hc||b.minFilter===To||b.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,U[b.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,U[b.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,U[b.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Y[b.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Y[b.minFilter]),b.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==To&&b.minFilter!==Qn||b.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Z(N,b){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",T));const it=b.source;let at=f.get(it);at===void 0&&(at={},f.set(it,at));const st=L(b);if(st!==N.__cacheKey){at[st]===void 0&&(at[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[st].usedTimes++;const At=at[N.__cacheKey];At!==void 0&&(at[N.__cacheKey].usedTimes--,At.usedTimes===0&&R(b)),N.__cacheKey=st,N.__webglTexture=at[st].texture}return X}function q(N,b,X){let it=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=n.TEXTURE_3D);const at=Z(N,b),st=b.source;e.bindTexture(it,N.__webglTexture,n.TEXTURE0+X);const At=i.get(st);if(st.version!==At.__version||at===!0){e.activeTexture(n.TEXTURE0+X);const ft=ce.getPrimaries(ce.workingColorSpace),Et=b.colorSpace===Ji?null:ce.getPrimaries(b.colorSpace),ee=b.colorSpace===Ji||ft===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ut=g(b.image,!1,s.maxTextureSize);ut=te(b,ut);const wt=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type);let Gt=v(b.internalFormat,wt,Ht,b.colorSpace,b.isVideoTexture);Q(it,b);let bt;const ne=b.mipmaps,Yt=b.isVideoTexture!==!0,xe=At.__version===void 0||at===!0,G=st.dataReady,yt=E(b,ut);if(b.isDepthTexture)Gt=M(b.format===gr,b.type),xe&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Gt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Gt,ut.width,ut.height,0,wt,Ht,null));else if(b.isDataTexture)if(ne.length>0){Yt&&xe&&e.texStorage2D(n.TEXTURE_2D,yt,Gt,ne[0].width,ne[0].height);for(let tt=0,ot=ne.length;tt<ot;tt++)bt=ne[tt],Yt?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,wt,Ht,bt.data):e.texImage2D(n.TEXTURE_2D,tt,Gt,bt.width,bt.height,0,wt,Ht,bt.data);b.generateMipmaps=!1}else Yt?(xe&&e.texStorage2D(n.TEXTURE_2D,yt,Gt,ut.width,ut.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,wt,Ht,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,ut.width,ut.height,0,wt,Ht,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Yt&&xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Gt,ne[0].width,ne[0].height,ut.depth);for(let tt=0,ot=ne.length;tt<ot;tt++)if(bt=ne[tt],b.format!==hn)if(wt!==null)if(Yt){if(G)if(b.layerUpdates.size>0){const _t=Hh(bt.width,bt.height,b.format,b.type);for(const St of b.layerUpdates){const ie=bt.data.subarray(St*_t/bt.data.BYTES_PER_ELEMENT,(St+1)*_t/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,St,bt.width,bt.height,1,wt,ie,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,bt.width,bt.height,ut.depth,wt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Gt,bt.width,bt.height,ut.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,bt.width,bt.height,ut.depth,wt,Ht,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Gt,bt.width,bt.height,ut.depth,0,wt,Ht,bt.data)}else{Yt&&xe&&e.texStorage2D(n.TEXTURE_2D,yt,Gt,ne[0].width,ne[0].height);for(let tt=0,ot=ne.length;tt<ot;tt++)bt=ne[tt],b.format!==hn?wt!==null?Yt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Gt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,wt,Ht,bt.data):e.texImage2D(n.TEXTURE_2D,tt,Gt,bt.width,bt.height,0,wt,Ht,bt.data)}else if(b.isDataArrayTexture)if(Yt){if(xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Gt,ut.width,ut.height,ut.depth),G)if(b.layerUpdates.size>0){const tt=Hh(ut.width,ut.height,b.format,b.type);for(const ot of b.layerUpdates){const _t=ut.data.subarray(ot*tt/ut.data.BYTES_PER_ELEMENT,(ot+1)*tt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ut.width,ut.height,1,wt,Ht,_t)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,wt,Ht,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,ut.width,ut.height,ut.depth,0,wt,Ht,ut.data);else if(b.isData3DTexture)Yt?(xe&&e.texStorage3D(n.TEXTURE_3D,yt,Gt,ut.width,ut.height,ut.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,wt,Ht,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,ut.width,ut.height,ut.depth,0,wt,Ht,ut.data);else if(b.isFramebufferTexture){if(xe)if(Yt)e.texStorage2D(n.TEXTURE_2D,yt,Gt,ut.width,ut.height);else{let tt=ut.width,ot=ut.height;for(let _t=0;_t<yt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Gt,tt,ot,0,wt,Ht,null),tt>>=1,ot>>=1}}else if(ne.length>0){if(Yt&&xe){const tt=Mt(ne[0]);e.texStorage2D(n.TEXTURE_2D,yt,Gt,tt.width,tt.height)}for(let tt=0,ot=ne.length;tt<ot;tt++)bt=ne[tt],Yt?G&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,wt,Ht,bt):e.texImage2D(n.TEXTURE_2D,tt,Gt,wt,Ht,bt);b.generateMipmaps=!1}else if(Yt){if(xe){const tt=Mt(ut);e.texStorage2D(n.TEXTURE_2D,yt,Gt,tt.width,tt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Ht,ut)}else e.texImage2D(n.TEXTURE_2D,0,Gt,wt,Ht,ut);m(b)&&p(it),At.__version=st.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function H(N,b,X){if(b.image.length!==6)return;const it=Z(N,b),at=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+X);const st=i.get(at);if(at.version!==st.__version||it===!0){e.activeTexture(n.TEXTURE0+X);const At=ce.getPrimaries(ce.workingColorSpace),ft=b.colorSpace===Ji?null:ce.getPrimaries(b.colorSpace),Et=b.colorSpace===Ji||At===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let ot=0;ot<6;ot++)!ee&&!ut?wt[ot]=g(b.image[ot],!0,s.maxCubemapSize):wt[ot]=ut?b.image[ot].image:b.image[ot],wt[ot]=te(b,wt[ot]);const Ht=wt[0],Gt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),ne=v(b.internalFormat,Gt,bt,b.colorSpace),Yt=b.isVideoTexture!==!0,xe=st.__version===void 0||it===!0,G=at.dataReady;let yt=E(b,Ht);Q(n.TEXTURE_CUBE_MAP,b);let tt;if(ee){Yt&&xe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ne,Ht.width,Ht.height);for(let ot=0;ot<6;ot++){tt=wt[ot].mipmaps;for(let _t=0;_t<tt.length;_t++){const St=tt[_t];b.format!==hn?Gt!==null?Yt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t,0,0,St.width,St.height,Gt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t,ne,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t,0,0,St.width,St.height,Gt,bt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t,ne,St.width,St.height,0,Gt,bt,St.data)}}}else{if(tt=b.mipmaps,Yt&&xe){tt.length>0&&yt++;const ot=Mt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ne,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ut){Yt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,wt[ot].width,wt[ot].height,Gt,bt,wt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ne,wt[ot].width,wt[ot].height,0,Gt,bt,wt[ot].data);for(let _t=0;_t<tt.length;_t++){const ie=tt[_t].image[ot].image;Yt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t+1,0,0,ie.width,ie.height,Gt,bt,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t+1,ne,ie.width,ie.height,0,Gt,bt,ie.data)}}else{Yt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Gt,bt,wt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ne,Gt,bt,wt[ot]);for(let _t=0;_t<tt.length;_t++){const St=tt[_t];Yt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t+1,0,0,Gt,bt,St.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t+1,ne,Gt,bt,St.image[ot])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),st.__version=at.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function k(N,b,X,it,at,st){const At=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),Et=v(X.internalFormat,At,ft,X.colorSpace);if(!i.get(b).__hasExternalTextures){const ut=Math.max(1,b.width>>st),wt=Math.max(1,b.height>>st);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,st,Et,ut,wt,b.depth,0,At,ft,null):e.texImage2D(at,st,Et,ut,wt,0,At,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),qt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,at,i.get(X).__webglTexture,0,Nt(b)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,at,i.get(X).__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(N,b,X){if(n.bindRenderbuffer(n.RENDERBUFFER,N),b.depthBuffer){const it=b.depthTexture,at=it&&it.isDepthTexture?it.type:null,st=M(b.stencilBuffer,at),At=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=Nt(b);qt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,st,b.width,b.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,st,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,st,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,N)}else{const it=b.textures;for(let at=0;at<it.length;at++){const st=it[at],At=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),Et=v(st.internalFormat,At,ft,st.colorSpace),ee=Nt(b);X&&qt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Et,b.width,b.height):qt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Et,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Et,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const it=i.get(b.depthTexture).__webglTexture,at=Nt(b);if(b.depthTexture.format===ar)qt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(b.depthTexture.format===gr)qt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function lt(N){const b=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const it=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=it}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");nt(b.__webglFramebuffer,N)}else if(X){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=n.createRenderbuffer(),J(b.__webglDepthbuffer[it],N,!1);else{const at=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,st)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),J(b.__webglDepthbuffer,N,!1);else{const it=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(N,b,X){const it=i.get(N);b!==void 0&&k(it.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&lt(N)}function pt(N){const b=N.texture,X=i.get(N),it=i.get(b);N.addEventListener("dispose",w);const at=N.textures,st=N.isWebGLCubeRenderTarget===!0,At=at.length>1;if(At||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=b.version,o.memory.textures++),st){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let Et=0;Et<b.mipmaps.length;Et++)X.__webglFramebuffer[ft][Et]=n.createFramebuffer()}else X.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)X.__webglFramebuffer[ft]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(At)for(let ft=0,Et=at.length;ft<Et;ft++){const ee=i.get(at[ft]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&qt(N)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<at.length;ft++){const Et=at[ft];X.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const ee=r.convert(Et.format,Et.colorSpace),ut=r.convert(Et.type),wt=v(Et.internalFormat,ee,ut,Et.colorSpace,N.isXRRenderTarget===!0),Ht=Nt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,wt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),J(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Q(n.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)k(X.__webglFramebuffer[ft][Et],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Et);else k(X.__webglFramebuffer[ft],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,Et=at.length;ft<Et;ft++){const ee=at[ft],ut=i.get(ee);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),Q(n.TEXTURE_2D,ee),k(X.__webglFramebuffer,N,ee,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),m(ee)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),Q(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)k(X.__webglFramebuffer[Et],N,b,n.COLOR_ATTACHMENT0,ft,Et);else k(X.__webglFramebuffer,N,b,n.COLOR_ATTACHMENT0,ft,0);m(b)&&p(ft),e.unbindTexture()}N.depthBuffer&&lt(N)}function xt(N){const b=N.textures;for(let X=0,it=b.length;X<it;X++){const at=b[X];if(m(at)){const st=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,At=i.get(at).__webglTexture;e.bindTexture(st,At),p(st),e.unbindTexture()}}}const vt=[],B=[];function me(N){if(N.samples>0){if(qt(N)===!1){const b=N.textures,X=N.width,it=N.height;let at=n.COLOR_BUFFER_BIT;const st=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(N),ft=b.length>1;if(ft)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const ee=i.get(b[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,X,it,0,0,X,it,at,n.NEAREST),c===!0&&(vt.length=0,B.length=0,vt.push(n.COLOR_ATTACHMENT0+Et),N.depthBuffer&&N.resolveDepthBuffer===!1&&(vt.push(st),B.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const ee=i.get(b[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const b=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Nt(N){return Math.min(s.maxSamples,N.samples)}function qt(N){const b=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(N){const b=o.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function te(N,b){const X=N.colorSpace,it=N.format,at=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==xi&&X!==Ji&&(ce.getTransfer(X)===ye?(it!==hn||at!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Mt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=A,this.resetTextureUnits=y,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=P,this.rebindTextures=ct,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=qt}function fM(n,t){function e(i,s=Ji){let r;const o=ce.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===$0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===j0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pd)return n.BYTE;if(i===Dd)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===Y0)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Sr)return n.HALF_FLOAT;if(i===Nd)return n.ALPHA;if(i===Ud)return n.RGB;if(i===hn)return n.RGBA;if(i===Fd)return n.LUMINANCE;if(i===kd)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===K0)return n.RED;if(i===Z0)return n.RED_INTEGER;if(i===zd)return n.RG;if(i===J0)return n.RG_INTEGER;if(i===Q0)return n.RGBA_INTEGER;if(i===da||i===pa||i===ma||i===_a)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Kl||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===t0||i===e0)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===t0)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===e0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===n0||i===i0||i===s0||i===r0||i===o0||i===a0||i===c0||i===l0||i===u0||i===h0||i===f0||i===d0||i===p0||i===m0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===n0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===i0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===s0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===r0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===o0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===a0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===c0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===l0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===u0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===h0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===f0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===d0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===p0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===m0)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ga||i===_0||i===g0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ga)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===g0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===x0||i===v0||i===M0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===x0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===v0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===M0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class dM extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`;class gM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pi({vertexShader:mM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xM extends Er{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const g=new gM,m=e.getContextAttributes();let p=null,v=null;const M=[],E=[],T=new Ft;let w=null;const S=new tn;S.layers.enable(1),S.viewport=new ue;const R=new tn;R.layers.enable(2),R.viewport=new ue;const D=[S,R],x=new dM;x.layers.enable(1),x.layers.enable(2);let y=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let k=M[H];return k===void 0&&(k=new Hc,M[H]=k),k.getTargetRaySpace()},this.getControllerGrip=function(H){let k=M[H];return k===void 0&&(k=new Hc,M[H]=k),k.getGripSpace()},this.getHand=function(H){let k=M[H];return k===void 0&&(k=new Hc,M[H]=k),k.getHandSpace()};function L(H){const k=E.indexOf(H.inputSource);if(k===-1)return;const J=M[k];J!==void 0&&(J.update(H.inputSource,H.frame,l||o),J.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",F);for(let H=0;H<M.length;H++){const k=E[H];k!==null&&(E[H]=null,M[H].disconnect(k))}y=null,A=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,v=null,q.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Fi(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,J=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?gr:ar,J=m.stencil?_r:Ts);const lt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Fi(f.textureWidth,f.textureHeight,{format:hn,type:Ui,depthTexture:new ep(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(H){for(let k=0;k<H.removed.length;k++){const J=H.removed[k],nt=E.indexOf(J);nt>=0&&(E[nt]=null,M[nt].disconnect(J))}for(let k=0;k<H.added.length;k++){const J=H.added[k];let nt=E.indexOf(J);if(nt===-1){for(let ct=0;ct<M.length;ct++)if(ct>=E.length){E.push(J),nt=ct;break}else if(E[ct]===null){E[ct]=J,nt=ct;break}if(nt===-1)break}const lt=M[nt];lt&&lt.connect(J)}}const I=new z,P=new z;function U(H,k,J){I.setFromMatrixPosition(k.matrixWorld),P.setFromMatrixPosition(J.matrixWorld);const nt=I.distanceTo(P),lt=k.projectionMatrix.elements,ct=J.projectionMatrix.elements,pt=lt[14]/(lt[10]-1),xt=lt[14]/(lt[10]+1),vt=(lt[9]+1)/lt[5],B=(lt[9]-1)/lt[5],me=(lt[8]-1)/lt[0],Nt=(ct[8]+1)/ct[0],qt=pt*me,Rt=pt*Nt,te=nt/(-me+Nt),Mt=te*-me;if(k.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Mt),H.translateZ(te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),lt[10]===-1)H.projectionMatrix.copy(k.projectionMatrix),H.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const N=pt+te,b=xt+te,X=qt-Mt,it=Rt+(nt-Mt),at=vt*xt/b*N,st=B*xt/b*N;H.projectionMatrix.makePerspective(X,it,at,st,N,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,k){k===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(k.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let k=H.near,J=H.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(J=g.depthFar)),x.near=R.near=S.near=k,x.far=R.far=S.far=J,(y!==x.near||A!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,A=x.far);const nt=H.parent,lt=x.cameras;Y(x,nt);for(let ct=0;ct<lt.length;ct++)Y(lt[ct],nt);lt.length===2?U(x,S,R):x.projectionMatrix.copy(S.projectionMatrix),K(H,x,nt)};function K(H,k,J){J===null?H.matrix.copy(k.matrixWorld):(H.matrix.copy(J.matrixWorld),H.matrix.invert(),H.matrix.multiply(k.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(k.projectionMatrix),H.projectionMatrixInverse.copy(k.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=y0*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let Q=null;function Z(H,k){if(u=k.getViewerPose(l||o),_=k,u!==null){const J=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let nt=!1;J.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let ct=0;ct<J.length;ct++){const pt=J[ct];let xt=null;if(d!==null)xt=d.getViewport(pt);else{const B=h.getViewSubImage(f,pt);xt=B.viewport,ct===0&&(t.setRenderTargetTextures(v,B.colorTexture,f.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(v))}let vt=D[ct];vt===void 0&&(vt=new tn,vt.layers.enable(ct),vt.viewport=new ue,D[ct]=vt),vt.matrix.fromArray(pt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(pt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),ct===0&&(x.matrix.copy(vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(vt)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ct=h.getDepthInformation(J[0]);ct&&ct.isValid&&ct.texture&&g.init(t,ct,s.renderState)}}for(let J=0;J<M.length;J++){const nt=E[J],lt=M[J];nt!==null&&lt!==void 0&&lt.update(nt,k,l||o)}Q&&Q(H,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const q=new Qd;q.setAnimationLoop(Z),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}}const _s=new ni,vM=new Wt;function MM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Kd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,E=v.envMapRotation;M&&(m.envMap.value=M,_s.copy(E),_s.x*=-1,_s.y*=-1,_s.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(_s)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const E=M.program;i.uniformBlockBinding(v,E)}function l(v,M){let E=s[v.id];E===void 0&&(_(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",m));const T=M.program;i.updateUBOMapping(v,T);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function u(v){const M=h();v.__bindingPointIndex=M;const E=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],E=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,S=E.length;w<S;w++){const R=Array.isArray(E[w])?E[w]:[E[w]];for(let D=0,x=R.length;D<x;D++){const y=R[D];if(d(y,w,D,T)===!0){const A=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let O=0;for(let F=0;F<L.length;F++){const I=L[F],P=g(I);typeof I=="number"||typeof I=="boolean"?(y.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,A+O,y.__data)):I.isMatrix3?(y.__data[0]=I.elements[0],y.__data[1]=I.elements[1],y.__data[2]=I.elements[2],y.__data[3]=0,y.__data[4]=I.elements[3],y.__data[5]=I.elements[4],y.__data[6]=I.elements[5],y.__data[7]=0,y.__data[8]=I.elements[6],y.__data[9]=I.elements[7],y.__data[10]=I.elements[8],y.__data[11]=0):(I.toArray(y.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,M,E,T){const w=v.value,S=M+"_"+E;if(T[S]===void 0)return typeof w=="number"||typeof w=="boolean"?T[S]=w:T[S]=w.clone(),!0;{const R=T[S];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return T[S]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(v){const M=v.uniforms;let E=0;const T=16;for(let S=0,R=M.length;S<R;S++){const D=Array.isArray(M[S])?M[S]:[M[S]];for(let x=0,y=D.length;x<y;x++){const A=D[x],L=Array.isArray(A.value)?A.value:[A.value];for(let O=0,F=L.length;O<F;O++){const I=L[O],P=g(I),U=E%T,Y=U%P.boundary,K=U+Y;E+=Y,K!==0&&T-K<P.storage&&(E+=T-K),A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,E+=P.storage}}}const w=E%T;return w>0&&(E+=T-w),v.__size=E,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class SM{constructor(t={}){const{canvas:e=c_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=os,this.toneMappingExposure=1;const M=this;let E=!1,T=0,w=0,S=null,R=-1,D=null;const x=new ue,y=new ue;let A=null;const L=new Ut(0);let O=0,F=e.width,I=e.height,P=1,U=null,Y=null;const K=new ue(0,0,F,I),Q=new ue(0,0,F,I);let Z=!1;const q=new _o;let H=!1,k=!1;const J=new Wt,nt=new Wt,lt=new z,ct=new ue,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function vt(){return S===null?P:1}let B=i;function me(C,V){return e.getContext(C,V)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${X0}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",St,!1),B===null){const V="webgl2";if(B=me(V,C),B===null)throw me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Nt,qt,Rt,te,Mt,N,b,X,it,at,st,At,ft,Et,ee,ut,wt,Ht,Gt,bt,ne,Yt,xe,G;function yt(){Nt=new Tx(B),Nt.init(),Yt=new fM(B,Nt),qt=new yx(B,Nt,t,Yt),Rt=new lM(B),qt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),te=new Cx(B),Mt=new $v,N=new hM(B,Nt,Rt,Mt,qt,Yt,te),b=new Ex(M),X=new Ax(M),it=new F_(B),xe=new vx(B,it),at=new Rx(B,it,te,xe),st=new Px(B,at,it,te),Gt=new Ix(B,qt,N),ut=new Sx(Mt),At=new Yv(M,b,X,Nt,qt,xe,ut),ft=new MM(M,Mt),Et=new Kv,ee=new nM(Nt),Ht=new xx(M,b,X,Rt,st,f,c),wt=new aM(M,st,qt),G=new yM(B,te,qt,Rt),bt=new Mx(B,Nt,te),ne=new Lx(B,Nt,te),te.programs=At.programs,M.capabilities=qt,M.extensions=Nt,M.properties=Mt,M.renderLists=Et,M.shadowMap=wt,M.state=Rt,M.info=te}yt();const tt=new xM(M,B);this.xr=tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(C){C!==void 0&&(P=C,this.setSize(F,I,!1))},this.getSize=function(C){return C.set(F,I)},this.setSize=function(C,V,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,I=V,e.width=Math.floor(C*P),e.height=Math.floor(V*P),$===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(F*P,I*P).floor()},this.setDrawingBufferSize=function(C,V,$){F=C,I=V,P=$,e.width=Math.floor(C*$),e.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,V,$,j){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,V,$,j),Rt.viewport(x.copy(K).multiplyScalar(P).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,V,$,j){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,V,$,j),Rt.scissor(y.copy(Q).multiplyScalar(P).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){Rt.setScissorTest(Z=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(C=!0,V=!0,$=!0){let j=0;if(C){let W=!1;if(S!==null){const ht=S.texture.format;W=ht===Q0||ht===J0||ht===Z0}if(W){const ht=S.texture.type,gt=ht===Ui||ht===Ts||ht===io||ht===_r||ht===$0||ht===j0,Tt=Ht.getClearColor(),Lt=Ht.getClearAlpha(),zt=Tt.r,Bt=Tt.g,Pt=Tt.b;gt?(d[0]=zt,d[1]=Bt,d[2]=Pt,d[3]=Lt,B.clearBufferuiv(B.COLOR,0,d)):(_[0]=zt,_[1]=Bt,_[2]=Pt,_[3]=Lt,B.clearBufferiv(B.COLOR,0,_))}else j|=B.COLOR_BUFFER_BIT}V&&(j|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),ee.dispose(),Mt.dispose(),b.dispose(),X.dispose(),st.dispose(),xe.dispose(),G.dispose(),At.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Hu),tt.removeEventListener("sessionend",Gu),us.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=te.autoReset,V=wt.enabled,$=wt.autoUpdate,j=wt.needsUpdate,W=wt.type;yt(),te.autoReset=C,wt.enabled=V,wt.autoUpdate=$,wt.needsUpdate=j,wt.type=W}function St(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const V=C.target;V.removeEventListener("dispose",ie),Ue(V)}function Ue(C){Mn(C),Mt.remove(C)}function Mn(C){const V=Mt.get(C).programs;V!==void 0&&(V.forEach(function($){At.releaseProgram($)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,j,W,ht){V===null&&(V=pt);const gt=W.isMesh&&W.matrixWorld.determinant()<0,Tt=xm(C,V,$,j,W);Rt.setMaterial(j,gt);let Lt=$.index,zt=1;if(j.wireframe===!0){if(Lt=at.getWireframeAttribute($),Lt===void 0)return;zt=2}const Bt=$.drawRange,Pt=$.attributes.position;let fe=Bt.start*zt,ve=(Bt.start+Bt.count)*zt;ht!==null&&(fe=Math.max(fe,ht.start*zt),ve=Math.min(ve,(ht.start+ht.count)*zt)),Lt!==null?(fe=Math.max(fe,0),ve=Math.min(ve,Lt.count)):Pt!=null&&(fe=Math.max(fe,0),ve=Math.min(ve,Pt.count));const Le=ve-fe;if(Le<0||Le===1/0)return;xe.setup(W,j,Tt,$,Lt);let Ln,oe=bt;if(Lt!==null&&(Ln=it.get(Lt),oe=ne,oe.setIndex(Ln)),W.isMesh)j.wireframe===!0?(Rt.setLineWidth(j.wireframeLinewidth*vt()),oe.setMode(B.LINES)):oe.setMode(B.TRIANGLES);else if(W.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),Rt.setLineWidth(Ot*vt()),W.isLineSegments?oe.setMode(B.LINES):W.isLineLoop?oe.setMode(B.LINE_LOOP):oe.setMode(B.LINE_STRIP)}else W.isPoints?oe.setMode(B.POINTS):W.isSprite&&oe.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)oe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ot=W._multiDrawStarts,Ze=W._multiDrawCounts,ae=W._multiDrawCount,Vn=Lt?it.get(Lt).bytesPerElement:1,Ps=Mt.get(j).currentProgram.getUniforms();for(let Cn=0;Cn<ae;Cn++)Ps.setValue(B,"_gl_DrawID",Cn),oe.render(Ot[Cn]/Vn,Ze[Cn])}else if(W.isInstancedMesh)oe.renderInstances(fe,Le,W.count);else if($.isInstancedBufferGeometry){const Ot=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ze=Math.min($.instanceCount,Ot);oe.renderInstances(fe,Le,Ze)}else oe.render(fe,Le)};function se(C,V,$){C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=vn,C.needsUpdate=!0,Ao(C,V,$),C.side=ei,C.needsUpdate=!0,Ao(C,V,$),C.side=ai):Ao(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),m=ee.get($),m.init(V),v.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==$&&C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const j=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ht=W.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const Tt=ht[gt];se(Tt,$,W),j.add(Tt)}else se(ht,$,W),j.add(ht)}),v.pop(),m=null,j},this.compileAsync=function(C,V,$=null){const j=this.compile(C,V,$);return new Promise(W=>{function ht(){if(j.forEach(function(gt){Mt.get(gt).currentProgram.isReady()&&j.delete(gt)}),j.size===0){W(C);return}setTimeout(ht,10)}Nt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let yn=null;function Si(C){yn&&yn(C)}function Hu(){us.stop()}function Gu(){us.start()}const us=new Qd;us.setAnimationLoop(Si),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(C){yn=C,tt.setAnimationLoop(C),C===null?us.stop():us.start()},tt.addEventListener("sessionstart",Hu),tt.addEventListener("sessionend",Gu),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(V),V=tt.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,V,S),m=ee.get(C,v.length),m.init(V),v.push(m),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(nt),k=this.localClippingEnabled,H=ut.init(this.clippingPlanes,k),g=Et.get(C,p.length),g.init(),p.push(g),tt.enabled===!0&&tt.isPresenting===!0){const ht=M.xr.getDepthSensingMesh();ht!==null&&ac(ht,V,-1/0,M.sortObjects)}ac(C,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(U,Y),xt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,xt&&Ht.addToRenderList(g,C),this.info.render.frame++,H===!0&&ut.beginShadows();const $=m.state.shadowsArray;wt.render($,C,V),H===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,W=g.transmissive;if(m.setupLights(),V.isArrayCamera){const ht=V.cameras;if(W.length>0)for(let gt=0,Tt=ht.length;gt<Tt;gt++){const Lt=ht[gt];Wu(j,W,C,Lt)}xt&&Ht.render(C);for(let gt=0,Tt=ht.length;gt<Tt;gt++){const Lt=ht[gt];Vu(g,C,Lt,Lt.viewport)}}else W.length>0&&Wu(j,W,C,V),xt&&Ht.render(C),Vu(g,C,V);S!==null&&(N.updateMultisampleRenderTarget(S),N.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(M,C,V),xe.resetDefaultState(),R=-1,D=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&ut.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ac(C,V,$,j){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){j&&ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);const gt=st.update(C),Tt=C.material;Tt.visible&&g.push(C,gt,Tt,$,ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const gt=st.update(C),Tt=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ct.copy(C.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ct.copy(gt.boundingSphere.center)),ct.applyMatrix4(C.matrixWorld).applyMatrix4(nt)),Array.isArray(Tt)){const Lt=gt.groups;for(let zt=0,Bt=Lt.length;zt<Bt;zt++){const Pt=Lt[zt],fe=Tt[Pt.materialIndex];fe&&fe.visible&&g.push(C,gt,fe,$,ct.z,Pt)}}else Tt.visible&&g.push(C,gt,Tt,$,ct.z,null)}}const ht=C.children;for(let gt=0,Tt=ht.length;gt<Tt;gt++)ac(ht[gt],V,$,j)}function Vu(C,V,$,j){const W=C.opaque,ht=C.transmissive,gt=C.transparent;m.setupLightsView($),H===!0&&ut.setGlobalState(M.clippingPlanes,$),j&&Rt.viewport(x.copy(j)),W.length>0&&bo(W,V,$),ht.length>0&&bo(ht,V,$),gt.length>0&&bo(gt,V,$),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Wu(C,V,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Fi(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Sr:Ui,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const ht=m.state.transmissionRenderTarget[j.id],gt=j.viewport||x;ht.setSize(gt.z,gt.w);const Tt=M.getRenderTarget();M.setRenderTarget(ht),M.getClearColor(L),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),xt&&Ht.render($);const Lt=M.toneMapping;M.toneMapping=os;const zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),H===!0&&ut.setGlobalState(M.clippingPlanes,j),bo(C,$,j),N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Pt=0,fe=V.length;Pt<fe;Pt++){const ve=V[Pt],Le=ve.object,Ln=ve.geometry,oe=ve.material,Ot=ve.group;if(oe.side===ai&&Le.layers.test(j.layers)){const Ze=oe.side;oe.side=vn,oe.needsUpdate=!0,qu(Le,$,j,Ln,oe,Ot),oe.side=Ze,oe.needsUpdate=!0,Bt=!0}}Bt===!0&&(N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht))}M.setRenderTarget(Tt),M.setClearColor(L,O),zt!==void 0&&(j.viewport=zt),M.toneMapping=Lt}function bo(C,V,$){const j=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ht=C.length;W<ht;W++){const gt=C[W],Tt=gt.object,Lt=gt.geometry,zt=j===null?gt.material:j,Bt=gt.group;Tt.layers.test($.layers)&&qu(Tt,V,$,Lt,zt,Bt)}}function qu(C,V,$,j,W,ht){C.onBeforeRender(M,V,$,j,W,ht),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(M,V,$,j,C,ht),W.transparent===!0&&W.side===ai&&W.forceSinglePass===!1?(W.side=vn,W.needsUpdate=!0,M.renderBufferDirect($,V,j,W,C,ht),W.side=ei,W.needsUpdate=!0,M.renderBufferDirect($,V,j,W,C,ht),W.side=ai):M.renderBufferDirect($,V,j,W,C,ht),C.onAfterRender(M,V,$,j,W,ht)}function Ao(C,V,$){V.isScene!==!0&&(V=pt);const j=Mt.get(C),W=m.state.lights,ht=m.state.shadowsArray,gt=W.state.version,Tt=At.getParameters(C,W.state,ht,V,$),Lt=At.getProgramCacheKey(Tt);let zt=j.programs;j.environment=C.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(C.isMeshStandardMaterial?X:b).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",ie),zt=new Map,j.programs=zt);let Bt=zt.get(Lt);if(Bt!==void 0){if(j.currentProgram===Bt&&j.lightsStateVersion===gt)return Yu(C,Tt),Bt}else Tt.uniforms=At.getUniforms(C),C.onBeforeCompile(Tt,M),Bt=At.acquireProgram(Tt,Lt),zt.set(Lt,Bt),j.uniforms=Tt.uniforms;const Pt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pt.clippingPlanes=ut.uniform),Yu(C,Tt),j.needsLights=Mm(C),j.lightsStateVersion=gt,j.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.directionalShadowMap.value=W.state.directionalShadowMap,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotShadowMap.value=W.state.spotShadowMap,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMap.value=W.state.pointShadowMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Bt,j.uniformsList=null,Bt}function Xu(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=va.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Yu(C,V){const $=Mt.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function xm(C,V,$,j,W){V.isScene!==!0&&(V=pt),N.resetTextureUnits();const ht=V.fog,gt=j.isMeshStandardMaterial?V.environment:null,Tt=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:xi,Lt=(j.isMeshStandardMaterial?X:b).get(j.envMap||gt),zt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Bt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pt=!!$.morphAttributes.position,fe=!!$.morphAttributes.normal,ve=!!$.morphAttributes.color;let Le=os;j.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Le=M.toneMapping);const Ln=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Ln!==void 0?Ln.length:0,Ot=Mt.get(j),Ze=m.state.lights;if(H===!0&&(k===!0||C!==D)){const Fn=C===D&&j.id===R;ut.setState(j,C,Fn)}let ae=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ze.state.version||Ot.outputColorSpace!==Tt||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==Lt||j.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ut.numPlanes||Ot.numIntersection!==ut.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Bt||Ot.morphTargets!==Pt||Ot.morphNormals!==fe||Ot.morphColors!==ve||Ot.toneMapping!==Le||Ot.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ot.__version=j.version);let Vn=Ot.currentProgram;ae===!0&&(Vn=Ao(j,V,W));let Ps=!1,Cn=!1,cc=!1;const Pe=Vn.getUniforms(),zi=Ot.uniforms;if(Rt.useProgram(Vn.program)&&(Ps=!0,Cn=!0,cc=!0),j.id!==R&&(R=j.id,Cn=!0),Ps||D!==C){qt.reverseDepthBuffer?(J.copy(C.projectionMatrix),u_(J),h_(J),Pe.setValue(B,"projectionMatrix",J)):Pe.setValue(B,"projectionMatrix",C.projectionMatrix),Pe.setValue(B,"viewMatrix",C.matrixWorldInverse);const Fn=Pe.map.cameraPosition;Fn!==void 0&&Fn.setValue(B,lt.setFromMatrixPosition(C.matrixWorld)),qt.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Cn=!0,cc=!0)}if(W.isSkinnedMesh){Pe.setOptional(B,W,"bindMatrix"),Pe.setOptional(B,W,"bindMatrixInverse");const Fn=W.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Pe.setValue(B,"boneTexture",Fn.boneTexture,N))}W.isBatchedMesh&&(Pe.setOptional(B,W,"batchingTexture"),Pe.setValue(B,"batchingTexture",W._matricesTexture,N),Pe.setOptional(B,W,"batchingIdTexture"),Pe.setValue(B,"batchingIdTexture",W._indirectTexture,N),Pe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(B,"batchingColorTexture",W._colorsTexture,N));const lc=$.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0)&&Gt.update(W,$,Vn),(Cn||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,Pe.setValue(B,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(zi.envMap.value=Lt,zi.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(zi.envMapIntensity.value=V.environmentIntensity),Cn&&(Pe.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&vm(zi,cc),ht&&j.fog===!0&&ft.refreshFogUniforms(zi,ht),ft.refreshMaterialUniforms(zi,j,P,I,m.state.transmissionRenderTarget[C.id]),va.upload(B,Xu(Ot),zi,N)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(va.upload(B,Xu(Ot),zi,N),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pe.setValue(B,"center",W.center),Pe.setValue(B,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(B,"normalMatrix",W.normalMatrix),Pe.setValue(B,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Fn=j.uniformsGroups;for(let uc=0,ym=Fn.length;uc<ym;uc++){const $u=Fn[uc];G.update($u,Vn),G.bind($u,Vn)}}return Vn}function vm(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Mm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,V,$){Mt.get(C.texture).__webglTexture=V,Mt.get(C.depthTexture).__webglTexture=$;const j=Mt.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const $=Mt.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,$=0){S=C,T=V,w=$;let j=!0,W=null,ht=!1,gt=!1;if(C){const Lt=Mt.get(C);if(Lt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Lt.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Lt.__hasExternalTextures)N.rebindTextures(C,Mt.get(C.texture).__webglTexture,Mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Pt=C.depthTexture;if(Lt.__boundDepthTexture!==Pt){if(Pt!==null&&Mt.has(Pt)&&(C.width!==Pt.image.width||C.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);const Bt=Mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?W=Bt[V][$]:W=Bt[V],ht=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?W=Mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Bt)?W=Bt[$]:W=Bt,x.copy(C.viewport),y.copy(C.scissor),A=C.scissorTest}else x.copy(K).multiplyScalar(P).floor(),y.copy(Q).multiplyScalar(P).floor(),A=Z;if(Rt.bindFramebuffer(B.FRAMEBUFFER,W)&&j&&Rt.drawBuffers(C,W),Rt.viewport(x),Rt.scissor(y),Rt.setScissorTest(A),ht){const Lt=Mt.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,$)}else if(gt){const Lt=Mt.get(C.texture),zt=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.__webglTexture,$||0,zt)}R=-1},this.readRenderTargetPixels=function(C,V,$,j,W,ht,gt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){Rt.bindFramebuffer(B.FRAMEBUFFER,Tt);try{const Lt=C.texture,zt=Lt.format,Bt=Lt.type;if(!qt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-j&&$>=0&&$<=C.height-W&&B.readPixels(V,$,j,W,Yt.convert(zt),Yt.convert(Bt),ht)}finally{const Lt=S!==null?Mt.get(S).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(C,V,$,j,W,ht,gt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const Lt=C.texture,zt=Lt.format,Bt=Lt.type;if(!qt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-j&&$>=0&&$<=C.height-W){Rt.bindFramebuffer(B.FRAMEBUFFER,Tt);const Pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Pt),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),B.readPixels(V,$,j,W,Yt.convert(zt),Yt.convert(Bt),0);const fe=S!==null?Mt.get(S).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,fe);const ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await l_(B,ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(Pt),B.deleteSync(ve),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,$=0){C.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);const j=Math.pow(2,-$),W=Math.floor(C.image.width*j),ht=Math.floor(C.image.height*j),gt=V!==null?V.x:0,Tt=V!==null?V.y:0;N.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,gt,Tt,W,ht),Rt.unbindTexture()},this.copyTextureToTexture=function(C,V,$=null,j=null,W=0){C.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1],V=arguments[2],W=arguments[3]||0,$=null);let ht,gt,Tt,Lt,zt,Bt;$!==null?(ht=$.max.x-$.min.x,gt=$.max.y-$.min.y,Tt=$.min.x,Lt=$.min.y):(ht=C.image.width,gt=C.image.height,Tt=0,Lt=0),j!==null?(zt=j.x,Bt=j.y):(zt=0,Bt=0);const Pt=Yt.convert(V.format),fe=Yt.convert(V.type);N.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const ve=B.getParameter(B.UNPACK_ROW_LENGTH),Le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=B.getParameter(B.UNPACK_SKIP_PIXELS),oe=B.getParameter(B.UNPACK_SKIP_ROWS),Ot=B.getParameter(B.UNPACK_SKIP_IMAGES),Ze=C.isCompressedTexture?C.mipmaps[W]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ze.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Lt),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,zt,Bt,ht,gt,Pt,fe,Ze.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,zt,Bt,Ze.width,Ze.height,Pt,Ze.data):B.texSubImage2D(B.TEXTURE_2D,W,zt,Bt,ht,gt,Pt,fe,Ze),B.pixelStorei(B.UNPACK_ROW_LENGTH,ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(C,V,$=null,j=null,W=0){C.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,C=arguments[2],V=arguments[3],W=arguments[4]||0);let ht,gt,Tt,Lt,zt,Bt,Pt,fe,ve;const Le=C.isCompressedTexture?C.mipmaps[W]:C.image;$!==null?(ht=$.max.x-$.min.x,gt=$.max.y-$.min.y,Tt=$.max.z-$.min.z,Lt=$.min.x,zt=$.min.y,Bt=$.min.z):(ht=Le.width,gt=Le.height,Tt=Le.depth,Lt=0,zt=0,Bt=0),j!==null?(Pt=j.x,fe=j.y,ve=j.z):(Pt=0,fe=0,ve=0);const Ln=Yt.convert(V.format),oe=Yt.convert(V.type);let Ot;if(V.isData3DTexture)N.setTexture3D(V,0),Ot=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)N.setTexture2DArray(V,0),Ot=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Ze=B.getParameter(B.UNPACK_ROW_LENGTH),ae=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Vn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ps=B.getParameter(B.UNPACK_SKIP_ROWS),Cn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Bt),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ot,W,Pt,fe,ve,ht,gt,Tt,Ln,oe,Le.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,W,Pt,fe,ve,ht,gt,Tt,Ln,Le.data):B.texSubImage3D(Ot,W,Pt,fe,ve,ht,gt,Tt,Ln,oe,Le),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Vn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ps),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Cn),W===0&&V.generateMipmaps&&B.generateMipmap(Ot),Rt.unbindTexture()},this.initRenderTarget=function(C){Mt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){T=0,w=0,S=null,Rt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===tu?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===$a?"display-p3":"srgb"}}class nu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iu extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class go extends fn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=bn,u=bn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends he{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new Wt,Vh=new Wt,$o=[],Wh=new ii,EM=new Wt,Or=new It,Nr=new po;class Da extends It{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,EM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Wh.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Wh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new po),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Nr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(i),t.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Vh.multiplyMatrices(i,Ys),Or.matrixWorld=Vh,Or.raycast(t,$o);for(let o=0,a=$o.length;o<a;o++){const c=$o[o];c.instanceId=r,c.object=this,e.push(c)}$o.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(s*this.count),s,this.count,K0,ci));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ka extends fn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rs extends pn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new z,u=new Ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends pn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=i/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function v(){const E=new z,T=new z;let w=0;const S=(e-t)/i;for(let R=0;R<=r;R++){const D=[],x=R/r,y=x*(e-t)+t;for(let A=0;A<=s;A++){const L=A/s,O=L*c+a,F=Math.sin(O),I=Math.cos(O);T.x=y*F,T.y=-x*i+m,T.z=y*I,h.push(T.x,T.y,T.z),E.set(F,S,I).normalize(),f.push(E.x,E.y,E.z),d.push(L,1-x),D.push(_++)}g.push(D)}for(let R=0;R<s;R++)for(let D=0;D<r;D++){const x=g[D][R],y=g[D+1][R],A=g[D+1][R+1],L=g[D][R+1];t>0&&(u.push(x,y,L),w+=3),e>0&&(u.push(y,A,L),w+=3)}l.addGroup(p,w,0),p+=w}function M(E){const T=_,w=new Ft,S=new z;let R=0;const D=E===!0?t:e,x=E===!0?1:-1;for(let A=1;A<=s;A++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),_++;const y=_;for(let A=0;A<=s;A++){const O=A/s*c+a,F=Math.cos(O),I=Math.sin(O);S.x=D*I,S.y=m*x,S.z=D*F,h.push(S.x,S.y,S.z),f.push(0,x,0),w.x=F*.5+.5,w.y=I*.5*x+.5,d.push(w.x,w.y),_++}for(let A=0;A<s;A++){const L=T+A,O=y+A;E===!0?u.push(O,O+1,L):u.push(O+1,O,L),R+=3}l.addGroup(p,R,E===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class su extends Qt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new su(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ru extends pn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new z,E=new z,T=new z;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],E),d(e[w+2],T),c(M,E,T,v)}function c(v,M,E,T){const w=T+1,S=[];for(let R=0;R<=w;R++){S[R]=[];const D=v.clone().lerp(E,R/w),x=M.clone().lerp(E,R/w),y=w-R;for(let A=0;A<=y;A++)A===0&&R===w?S[R][A]=D:S[R][A]=D.clone().lerp(x,A/y)}for(let R=0;R<w;R++)for(let D=0;D<2*(w-R)-1;D++){const x=Math.floor(D/2);D%2===0?(f(S[R][x+1]),f(S[R+1][x]),f(S[R][x])):(f(S[R][x+1]),f(S[R+1][x+1]),f(S[R+1][x]))}}function l(v){const M=new z;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(v),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function u(){const v=new z;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const E=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(E,1-T)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],E=o[v+2],T=o[v+4],w=Math.max(M,E,T),S=Math.min(M,E,T);w>.9&&S<.1&&(M<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const E=v*3;M.x=t[E+0],M.y=t[E+1],M.z=t[E+2]}function _(){const v=new z,M=new z,E=new z,T=new z,w=new Ft,S=new Ft,R=new Ft;for(let D=0,x=0;D<r.length;D+=9,x+=6){v.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),E.set(r[D+6],r[D+7],r[D+8]),w.set(o[x+0],o[x+1]),S.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),T.copy(v).add(M).add(E).divideScalar(3);const y=m(T);g(w,x+0,v,y),g(S,x+2,M,y),g(R,x+4,E,y)}}function g(v,M,E,T){T<0&&v.x===1&&(o[M]=v.x-1),E.x===0&&E.z===0&&(o[M]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.vertices,t.indices,t.radius,t.details)}}class ou extends ru{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ou(t.radius,t.detail)}}class Za extends pn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new z,_=new Ft;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const v=p+m,M=v,E=v+i+1,T=v+i+2,w=v+1;a.push(M,E,w),a.push(E,T,w)}}this.setIndex(a),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ki extends pn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new z,f=new z,d=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let E=0;p===0&&o===0?E=.5/e:p===i&&c===Math.PI&&(E=-.5/e);for(let T=0;T<=e;T++){const w=T/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(w+E,1-M),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=u[p][v+1],E=u[p][v],T=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&d.push(M,E,w),(p!==i-1||c<Math.PI)&&d.push(E,T,w)}this.setIndex(d),this.setAttribute("position",new Ie(_,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nn extends mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ja extends nn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qa extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class op extends Qa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Gc=new Wt,qh=new z,Xh=new z;class ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yh=new Wt,Ur=new z,Vc=new z;class wM extends ap{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ur),Vc.copy(i.position),Vc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vc),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}}class ro extends Qa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bM extends ap{constructor(){super(new tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends Qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new bM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class au extends Qa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:X0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=X0);const vr={glass:6453644,metal:9146777,metalDark:4870231},Nn={ceiling:15525851,wall:13814974,trim:16249834,floorTimber:9072722,benchtop:12168342,tile:13622754,tileFloor:12104358,metalDull:9146777};function AM(n){const t=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,e=t((n>>16&255)/255),i=t((n>>8&255)/255),s=t((n&255)/255),r=.2126*e+.7152*i+.0722*s;return r>.008856?116*Math.cbrt(r)-16:903.3*r}const $h=86,TM=new Set([Nn.ceiling,Nn.tile]);function tc(n,t){if(t<=2||TM.has(n))return n;const e=AM(n);if(e>$h)throw new Error(`value plan: ${t.toFixed(1)} m2 of #${n.toString(16).padStart(6,"0")} is L* ${e.toFixed(0)}, above the ${$h} cap for large areas`);return n}const lr=new Map,RM=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function LM(n,t={}){let e=String(n);for(const s of RM)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(lr.has(e))return lr.get(e);const i=new nn({color:n,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??ei,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return lr.set(e,i),i}function cu(n,t){if(lr.has(n))return lr.get(n);const e=t();return lr.set(n,e),e}const CM=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function xo(n){return n.onBeforeCompile=CM,n}function IM(){return cu("window",()=>xo(new nn({color:vr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new Ut(16767392),emissiveIntensity:0})))}function PM(){return cu("windowinner",()=>xo(new nn({color:vr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function cp(){return cu("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgb(140,140,140)"),i.addColorStop(.55,"rgb(196,196,196)"),i.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Ka(t);s.colorSpace=ln;const r=new li({map:s,blending:Ul,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new sn(1,1,1),new vi(1,1),new Qt(.5,.5,1,10),new su(.5,1,8),new ki(.5,12,10);const DM=new Set;function lu(n){DM.add(n)}function OM(n){let t=1779033703^n.length;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function NM(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class vo{constructor(t="lifesim"){this.seed=String(t),this._next=NM(OM(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new vo(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const i=this.shuffle([...t]);return i.slice(0,Math.min(e,i.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(this._next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let i=0;for(const r of e)i+=Math.max(0,r.weight??1);if(i<=0)return e[0];let s=this._next()*i;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(t,e,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(t,e))))}}let lp=8,w0=null;function UM(n){w0=n,lp=Math.min(8,n.capabilities.getMaxAnisotropy())}let FM=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};const up=(n,t=n)=>{const e=FM(n);return e.width=n,e.height=t,e};let hp=0;function uu(n,t){return t&&(n.colorSpace=ln),n.wrapS=n.wrapT=As,n.anisotropy=lp,n.generateMipmaps=!0,n.minFilter=Qn,n.magFilter=Oe,hp+=n.image.width*n.image.height*4*4/3,w0&&w0.initTexture(n),n}function Mi(n){return uu(new Ka(kM(n)),!0)}function b0(n){return n.wrapS=n.wrapT=es,n}function kM(n){const t=up(n.w,n.h),e=t.getContext("2d"),i=e.createImageData(n.w,n.h),s=i.data,r=n.d,o=n.w*n.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const u=r[c],h=r[c+1],f=r[c+2];s[l]=(u<0?0:u>1?1:u)*255+.5,s[l+1]=(h<0?0:h>1?1:h)*255+.5,s[l+2]=(f<0?0:f>1?1:f)*255+.5,s[l+3]=255}return e.putImageData(i,0,0),t}const Ne=n=>n<0?0:n>1?1:n,mi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function zM(n){const[t,e,i]=n,s=Math.max(t,e,i),r=Math.min(t,e,i),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-i)/a+(e<i?6:0))/6:s===e?l=((i-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function BM(n,t,e){if(t===0)return[e,e,e];const i=e<.5?e*(1+t):e+t-e*t,s=2*e-i,r=o=>(o=(o%1+1)%1,o<1/6?s+(i-s)*6*o:o<1/2?i:o<2/3?s+(i-s)*(2/3-o)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function ui(n,t=1,e=0,i=1){const[s,r,o]=zM(Array.isArray(n)?n:mi(n));return BM(s+e/360,Ne(r*i),Ne(o*t))}function yi(n,t){return{w:n,h:t,d:new Float32Array(n*t*3)}}function Cs(n,t){const e=Array.isArray(t)?t:mi(t),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=e[0],i[s+1]=e[1],i[s+2]=e[2]}function hu(n,t,e,i,s){if(s<=0)return;const r=n.w,o=n.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,u=n.d,h=1-s;u[l]=u[l]*h+i[0]*s,u[l+1]=u[l+1]*h+i[1]*s,u[l+2]=u[l+2]*h+i[2]*s}function zn(n,t,e,i,s,r,o=1){const a=Array.isArray(r)?r:mi(r),c=Math.round(t),l=Math.round(i),u=Math.round(e),h=Math.round(s);if(o<1){for(let g=u;g<h;g++)for(let m=c;m<l;m++)hu(n,m,g,a,o);return}const f=n.w,d=n.h,_=n.d;for(let g=u;g<h;g++){let m=g;(m<0||m>=d)&&(m=(m%d+d)%d);const p=m*f;for(let v=c;v<l;v++){let M=v;(M<0||M>=f)&&(M=(M%f+f)%f);const E=(p+M)*3;_[E]=a[0],_[E+1]=a[1],_[E+2]=a[2]}}}function Mo(n,t,e,i,s,r=1){const o=i+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,u=a+.5-e,h=Ne(i-Math.sqrt(l*l+u*u)+.5);h>0&&hu(n,c,a,s,r*h)}}function A0(n,t,e,i,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,u]=t[o],h=Math.hypot(l-a,u-c),f=Math.max(1,Math.ceil(h));for(let d=0;d<=f;d++){const _=d/f;Mo(n,a+(l-a)*_,c+(u-c)*_,r,i,s)}}}function fp(n,t,e,i,s,r,o,a){const c=n.w,l=n.h,u=n.d,h=r/2,f=o[0],d=o[1],_=o[2],g=Math.PI*2/i;for(let m=0;m<l;m++){const p=m*c,v=t+e*Math.sin(m*g+s),M=v-h,E=v+h,T=Math.floor(M),w=Math.ceil(E);for(let S=T;S<=w;S++){const R=Ne(Math.min(S+1,E)-Math.max(S,M));if(R<=0)continue;const D=a*R,x=1-D;let y=S;(y<0||y>=c)&&(y=(y%c+c)%c);const A=(p+y)*3;u[A]=u[A]*x+f*D,u[A+1]=u[A+1]*x+d*D,u[A+2]=u[A+2]*x+_*D}}}const jh=n=>n*n*(3-2*n);function HM(n,t,e){const i=new Float32Array(t*e);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const Kh=256;function le(n,t,e={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??i,l=e.p0y??i,u=new Float32Array(t*a),h=[];let f=1,d=0;for(let T=0;T<s;T++){const w=Math.min(Kh,Math.max(1,Math.round(c*o**T))),S=Math.min(Kh,Math.max(1,Math.round(l*o**T)));h.push({lat:HM(n,w,S),px:w,py:S,amp:f}),d+=f,f*=r}const _=new Float64Array(t*a),g=new Int32Array(t),m=new Int32Array(t),p=new Float64Array(t);for(let T=0;T<h.length;T++){const w=h[T],S=w.lat,R=w.px,D=w.py,x=w.amp,y=R/t,A=D/a;for(let L=0;L<t;L++){const O=L*y,F=O|0,I=F>=R?F%R:F;g[L]=I,m[L]=I+1>=R?0:I+1,p[L]=jh(O-F)}for(let L=0;L<a;L++){const O=L*A,F=O|0,I=jh(O-F),P=1-I,U=F>=D?F%D:F,Y=U*R,K=(U+1>=D?0:U+1)*R,Q=L*t;for(let Z=0;Z<t;Z++){const q=g[Z],H=m[Z],k=p[Z],J=S[Y+q],nt=S[Y+H],lt=S[K+q],ct=S[K+H];_[Q+Z]+=x*((J+(nt-J)*k)*P+(lt+(ct-lt)*k)*I)}}}let v=1/0,M=-1/0;for(let T=0;T<u.length;T++){u[T]=_[T]/d;const w=u[T];w<v&&(v=w),w>M&&(M=w)}const E=M-v||1;for(let T=0;T<u.length;T++)u[T]=(u[T]-v)/E;return u}function dp(n,t,e,i){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*i+1,a=new Int32Array(t),c=new Int32Array(t);for(let h=0;h<t;h++)a[h]=((h-i)%t+t)%t,c[h]=(h+i+1)%t;for(let h=0;h<e;h++){const f=h*t;let d=0;for(let _=-i;_<=i;_++)d+=n[f+(_%t+t)%t];for(let _=0;_<t;_++)s[f+_]=d/o,d-=n[f+a[_]],d+=n[f+c[_]]}const l=new Int32Array(e),u=new Int32Array(e);for(let h=0;h<e;h++)l[h]=((h-i)%e+e)%e*t,u[h]=(h+i+1)%e*t;for(let h=0;h<t;h++){let f=0;for(let d=-i;d<=i;d++)f+=s[(d%e+e)%e*t+h];for(let d=0;d<e;d++)r[d*t+h]=f/o,f-=s[l[d]+h],f+=s[u[d]+h]}return r}function GM(n,t,e=1.5,i=null){const s=i??n.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const u=(l-1+s)%s*t,h=l*t,f=(l+1)%s*t;let d=h*4;for(let _=0;_<t;_++,d+=4){const g=a[_],m=c[_],p=n[u+g],v=n[u+_],M=n[u+m],E=n[h+g],T=n[h+m],w=n[f+g],S=n[f+_],R=n[f+m],D=M+2*T+R-(p+2*E+w),x=w+2*S+R-(p+2*v+M),y=-D*o,A=x*o,L=1/Math.sqrt(y*y+A*A+1);r[d]=(y*L*.5+.5)*255+.5,r[d+1]=(A*L*.5+.5)*255+.5,r[d+2]=(L*.5+.5)*255+.5,r[d+3]=255}}return r}function Hn(n,t,e=1.5,i=null){const s=i??n.length/t;return uu(new Ka(pp(GM(n,t,e,s),t,s)),!1)}function pp(n,t,e){const i=up(t,e),s=i.getContext("2d"),r=s.createImageData(t,e);return r.data.set(n),s.putImageData(r,0,0),i}function VM(n,t,e,i,s=null){const o=n*(s??n),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const u=t?t[c]:1,h=e?e[c]:.85,f=i?i[c]:0;a[l]=(u<0?0:u>1?1:u)*255+.5,a[l+1]=(h<0?0:h>1?1:h)*255+.5,a[l+2]=(f<0?0:f>1?1:f)*255+.5,a[l+3]=255}return a}function He(n,t,e,i,s=null){const r=s??n;return uu(new Ka(pp(VM(n,t,e,i,r),n,r)),!1)}const fu={},to=new Map;let mp=null;function Te(n,t){fu[n]=t}const WM=n=>{const t=Object.keys(n).sort();return t.length?t.map(e=>e+"="+JSON.stringify(n[e])).join(","):""};function ns(n,t=null,e={}){const i=fu[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=WM(e),r=s?n+"#"+s:n;if(to.has(r))return to.get(r);const o=t||(mp||new vo("textures")).child("tex."+r),a=i(o,e);return a.name=n,to.set(r,a),a}function qM(){var n,t;for(const e of to.values()){for(const i of["map","normalMap","ormMap"])(t=(n=e[i])==null?void 0:n.dispose)==null||t.call(n);if(e.maps)for(const i of e.maps)i.dispose()}to.clear(),hp=0,mp=null}lu(qM);const Wc={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Te("timberFloor",(n,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),u=t.species||n.pick(Object.keys(Wc)),h=Wc[u]||Wc.blackbutt,f=yi(1024,1024);Cs(f,ui(h.dark,.72));const d=mi(h.dark),_=ui(h.base,1.25),g=[];for(let w=0;w<15;w++){const S=w*c+l/2,R=(w+1)*c-l/2,D=ui(h.base,1+n.range(-.06,.06),n.range(-3,3));zn(f,S,0,R,1024,D);const x=Math.round(n.range(.15,.85)*1024);g.push(x),zn(f,S,x,R,x+2,ui(h.dark,.8),.85),zn(f,S,x-2,R,x,_,.25);const y=n.int(28,60);for(let A=0;A<y;A++){const L=n.range(S+1,R-1),O=n.range(1.5,4),F=1024/n.int(2,5),I=n.range(0,Math.PI*2),P=n.range(2,3),U=n.range(.04,.12),Y=n.chance(.25)?_:d;fp(f,L,O,F,I,P,Y,U)}if(n.chance(.2)){const A=n.range(204.8,819.2),L=n.range(60,160),O=n.range(S+4,R-4);for(let F=0;F<n.int(2,4);F++){const I=(F+1)*n.range(3,7),P=[];for(let U=0;U<=16;U++){const Y=U/16;P.push([O+(Y-.5)*2*I,A-L*(1-(Y-.5)**2*4)])}A0(f,P,2,d,.06)}}}const m=le(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),v=new Float32Array(512*512),M=new Float32Array(512*512),E=512/15,T=l*512/1024;for(let w=0;w<512;w++)for(let S=0;S<512;S++){const R=w*512+S,D=Math.floor(S/E),x=S-D*E,y=x<T/2||x>E-T/2,A=w*1024/512,L=g[D],O=A>=L-1&&A<=L+2,F=y||O;v[R]=F?.15:.75,p[R]=Ne(h.rough+(F?.1:0)+(m[R]-.5)*.1),M[R]=F?.72:1}return{map:Mi(f),normalMap:Hn(dp(v,512,512,1),512,1.2),ormMap:He(512,M,p,null),uvScale:[o,o],normalScale:.5,species:u,tinted:!1}});Te("plasterWall",(n,t={})=>{const s=t.rough??.88,r=le(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const u=c*256+l;let h=s+(r[u]**1.5-.5)*.1;t.ceiling||(h+=Math.cos(l/a*Math.PI*2)*.02),o[u]=Ne(h)}return{ormMap:He(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});Te("plasterCeiling",n=>fu.plasterWall(n,{rough:.93,ceiling:!0}));Te("paintedJoinery",n=>{const i=le(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Ne(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:He(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Te("carpetPile",n=>{const i=yi(512,512);Cs(i,[1,1,1]);const s=le(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const u=c*512+l,h=Math.cos(c/256*Math.PI*2)*.03,f=Ne(.9+(s[u]-.5)*.16+h);r[u*3]=f,r[u*3+1]=f,r[u*3+2]=f}for(let c=0;c<1200;c++){const l=n.pick([[1.1,0],[.78,8],[.92,-10]]),u=ui(16777215,l[0],l[1],1);if(l[1]!==0){const h=n.range(0,1);u[0]=u[0]*(.94+h*.12),u[2]=u[2]*(1.06-h*.12)}Mo(i,n.range(0,512),n.range(0,512),n.range(1,2),u,.25)}const o=le(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Ne(.92+(o[c]-.5)*.06);return{map:Mi(i),normalMap:Hn(o,512,.6),ormMap:He(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Te("ceramicTile",(n,t={})=>{const i=t.tile??.3,s=2,r=i*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=mi(12104358),u=[];for(let m=0;m<s*s;m++)u.push({c:ui(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const h=yi(512,512),f=new Float32Array(512*512),d=new Float32Array(512*512),_=new Float32Array(512*512),g=o/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const v=m*512+p,M=Math.floor(p/c),E=Math.floor(m/c),T=p-M*c,w=m-E*c,S=Math.min(T,c-T,w,c-w);if(S<g){h.d[v*3]=l[0],h.d[v*3+1]=l[1],h.d[v*3+2]=l[2],f[v]=.85,d[v]=.25,_[v]=.62;continue}const R=u[E*s+M],D=(T/c+w/c)/2,x=1.03-.06*(R.g>0?D:1-D);h.d[v*3]=Ne(R.c[0]*x),h.d[v*3+1]=Ne(R.c[1]*x),h.d[v*3+2]=Ne(R.c[2]*x),f[v]=.08;const y=Ne((S-g)/a);d[v]=.25+.75*y,_[v]=.62+.38*y}return{map:Mi(h),normalMap:Hn(d,512,2),ormMap:He(512,_,f,null),uvScale:[r,r],normalScale:.8,tinted:!1}});Te("fabricWeave",n=>{const i=yi(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let u=0;u<a.length;u++)a[u]=n.range(-.035,.035);for(let u=0;u<c.length;u++)c[u]=n.range(-.035,.035);const l=le(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let h=0;h<256;h++){const f=u*256+h,d=(h>>1&1^u>>1&1)===0,_=h>>1,g=u>>1,m=d?a[(_*8+(u>>5&7))%a.length]:c[(g*8+(h>>5&7))%c.length],p=Ne((d?1.06:.94)+m+(l[f]-.5)*.06);i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,s[f]=d?.66:.8,r[f]=d?1:.3}return{map:Mi(i),normalMap:Hn(dp(r,256,256,1),256,.8),ormMap:He(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Te("joineryTimber",n=>{const i=yi(512,512);Cs(i,[1,1,1]);const s=le(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let c=0;c<512*512;c++){const l=Ne(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=ui(16777215,.72);for(let c=0;c<220;c++){const l=n.range(0,512),u=n.range(2,6),h=512/n.int(1,2),f=n.range(0,Math.PI*2);fp(i,l,u,h,f,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Ne(.55+(s[c]-.5)*.08);return{map:Mi(i),ormMap:He(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});Te("vinylSheet",n=>{const i=yi(512,512);Cs(i,14209732);const s=[13222578,15131093,11906460,14472902].map(mi);for(let c=0;c<3e3;c++)Mo(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=le(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Ne(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=n.range(0,512),u=n.range(0,512),h=n.range(40,120),f=n.range(0,Math.PI*2),d=n.range(.6,2.2),_=[];for(let g=0;g<=24;g++){const m=f+d*(g/24);_.push([l+Math.cos(m)*h,u+Math.sin(m)*h])}A0(i,_,n.range(2,4),ui(14209732,.88),.3),A0(a,_,n.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Ne(o[c]+a.d[c*3]*.15);return{map:Mi(i),ormMap:He(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});Te("laminateBench",n=>{const s=yi(512,512);Cs(s,Nn.benchtop);const r=[9274743,14077886,7235417].map(mi);for(let l=0;l<2e3;l++)Mo(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=ui(Nn.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let h=0;h<512;h++)hu(s,h,l,c,.85),o[l*512+h]=.45;return{map:Mi(s),ormMap:He(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Te("ceilingGrid",n=>{const s=yi(512,512);Cs(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=mi(14210509),c=mi(12434098),l=le(n,512,{p0:64,octaves:2}),u=new Float32Array(512*512);for(let h=0;h<512;h++)for(let f=0;f<512;f++){const d=h*512+f,_=Math.min(f,512-f),g=Math.min(h,512-h);if(_<r/2||g<o/2){const v=_>=r/2-2&&_<r/2||g>=o/2-2&&g<o/2?c:a;s.d[d*3]=v[0],s.d[d*3+1]=v[1],s.d[d*3+2]=v[2],u[d]=.55}else{const p=1+(l[d]-.5)*.04;s.d[d*3]*=p,s.d[d*3+1]*=p,s.d[d*3+2]*=p,u[d]=.9}}return{map:Mi(s),ormMap:He(512,null,u,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Te("applianceEnamel",n=>{const i=le(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Ne(.3+(i[r]-.5)*.04);return{ormMap:He(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Te("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=le(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;i[l]=Ne(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:He(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});Te("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let f=0;f<s;f++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=f=>{let d=0;for(const _ of i)d+=_.a*Math.exp(-(((f-_.c)/_.w)**2));return d+=.5*Math.exp(-((f/.04)**2))+.5*Math.exp(-(((1-f)/.04)**2)),d};let o=1/0,a=-1/0;for(let f=0;f<=256;f++){const d=r(f/256);d<o&&(o=d),d>a&&(a=d)}const c=a-o||1,l=f=>(r(Ne(f))-o)/c,u=yi(512,256),h=new Float32Array(512*256);for(let f=0;f<512;f++){const d=l(f/511),_=.9+.1*d;for(let g=0;g<256;g++){const m=g*512+f;u.d[m*3]=_,u.d[m*3+1]=_,u.d[m*3+2]=_,h[m]=d}}return{map:b0(Mi(u)),normalMap:b0(Hn(h,512,3,256)),uvScale:null,normalScale:1,field:l,folds:i,tinted:!0}});Te("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=i[r].map(mi),a=yi(256,256);Cs(a,o[n.int(0,3)]);const c=n.int(0,2);if(c===0){let u=0;for(;u<256;){const h=n.int(12,48);zn(a,0,u,256,Math.min(256,u+h),o[n.int(0,3)],n.range(.5,1)),u+=h}}else if(c===1)for(let u=0;u<n.int(5,11);u++){const h=n.range(0,179.2),f=n.range(0,256*.7);zn(a,h,f,h+n.range(30,110),f+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const u=n.range(115.2,174.08);zn(a,0,0,256,u,o[0],1),zn(a,0,u,256,256,o[2],1);for(let h=0;h<n.int(3,7);h++){const f=n.range(u-40,u+40);zn(a,0,f,256,f+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}Mo(a,n.range(256*.2,256*.8),n.range(20,u-20),n.range(12,26),o[3],.9)}const l=ui(16777215,.97);zn(a,0,0,256,6,l),zn(a,0,250,256,256,l),zn(a,0,0,6,256,l),zn(a,250,0,256,256,l),s.push(b0(Mi(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const XM={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},sr=new Map;function Ii(n,t=16777215,e=null,i={}){const s=XM[n];if(!s)throw new Error(`Surfaces: no surface named '${n}'`);const r=Object.keys(i).sort().map(u=>u+"="+JSON.stringify(i[u])).join(","),o=n+"|"+t+"|"+r;if(sr.has(o))return sr.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=u=>s.alpha!==void 0?xo(u):u;if(s.recipe){const{print:u,...h}=i,f=Object.keys(h).sort().map(p=>p+"="+JSON.stringify(h[p])).join(","),d=e?e.child("tex."+s.recipe+(f?"#"+f:"")):null,_=ns(s.recipe,d,h),g=_.maps?_.maps[Math.min(_.maps.length-1,u??0)]:_.map;if(g&&(a.map=g),_.normalMap){a.normalMap=_.normalMap;const p=_.normalScale??1;a.normalScale=new Ft(p,p)}_.ormMap?(a.aoMap=_.ormMap,a.roughnessMap=_.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=_.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const m=c(new nn(a));return _.uvScale&&(m.userData.uvScale=_.uvScale),m.userData.cast=s.cast,m.userData.surface=n,sr.set(o,m),m}const l=c(new nn(a));return l.userData.cast=s.cast,l.userData.surface=n,sr.set(o,l),l}function YM(){for(const n of sr.values())n.dispose();sr.clear()}lu(YM);const Vt={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,switchH:1.05,gpoH:.3},$n={thin:.002,furniture:.003,joinery:.005},Zh=new Set;function T0(n,t,e={}){if(e.material)return e.material;try{return Ii(n,t,null,e.recipe||{})}catch(i){Zh.has(n)||(Zh.add(n),console.error(`RoomKit: surface '${n}' unavailable, falling back to flat colour`,i))}return LM(t,e)}function Ct(n,t,e,i,s,r={}){var l;const o=T0(n,s,r),a=r.chamfer?Ls(t,e,i,r.chamfer):r.graded?$M(t,e,i,r.gradeEdge):new sn(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),c=new It(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const Mr=new Map,is=n=>Math.round(n*1e3);function _p(n,t,e){const i=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(i[s*2]=n[r],i[s*2+1]=n[r+2]):o>=c?(i[s*2]=n[r+2],i[s*2+1]=n[r+1]):(i[s*2]=n[r],i[s*2+1]=n[r+1])}return i}function gp(n){const t=n.length*3,e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const o of n){const[a,c,l]=o;let u=c[0]-a[0],h=c[1]-a[1],f=c[2]-a[2],d=l[0]-a[0],_=l[1]-a[1],g=l[2]-a[2],m=h*g-f*_,p=f*d-u*g,v=u*_-h*d;const M=(a[0]+c[0]+l[0])/3,E=(a[1]+c[1]+l[1])/3,T=(a[2]+c[2]+l[2])/3;let w=c,S=l;m*M+p*E+v*T<0&&(w=l,S=c,m=-m,p=-p,v=-v);const R=Math.hypot(m,p,v)||1;m/=R,p/=R,v/=R;for(const D of[a,w,S])e[s*3]=D[0],e[s*3+1]=D[1],e[s*3+2]=D[2],i[s*3]=m,i[s*3+1]=p,i[s*3+2]=v,s++}const r=new pn;return r.setAttribute("position",new he(e,3)),r.setAttribute("normal",new he(i,3)),r.setAttribute("uv",new he(_p(e,i,t),2)),r.setAttribute("color",new he(new Float32Array(t*3).fill(1),3)),r}function Ls(n,t,e,i=$n.furniture){n=Math.max(n,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(i,Math.min(n,t,e)/2-5e-4);if(!(s>2e-4))return new sn(n,t,e);const r=`c${is(n)},${is(t)},${is(e)},${is(s)}`,o=Mr.get(r);if(o)return o;const a=n/2,c=t/2,l=e/2,u=[a-s,c-s,l-s],h=[a,c,l],f=(p,v)=>[(v===0?h[0]:u[0])*p[0],(v===1?h[1]:u[1])*p[1],(v===2?h[2]:u[2])*p[2]],d=[];for(const p of[-1,1])for(const v of[-1,1])for(const M of[-1,1])d.push([p,v,M]);const _=[],g=(p,v,M,E)=>{_.push([p,v,M]),_.push([p,M,E])};for(let p=0;p<3;p++){const v=(p+1)%3,M=(p+2)%3;for(const E of[-1,1]){const T=(w,S)=>{const R=[0,0,0];return R[p]=E,R[v]=w,R[M]=S,f(R,p)};g(T(-1,-1),T(1,-1),T(1,1),T(-1,1))}}for(let p=0;p<3;p++)for(let v=p+1;v<3;v++){const M=3-p-v;for(const E of[-1,1])for(const T of[-1,1]){const w=[0,0,0];w[p]=E,w[v]=T,w[M]=-1;const S=[0,0,0];S[p]=E,S[v]=T,S[M]=1,g(f(w,p),f(w,v),f(S,v),f(S,p))}}for(const p of d)_.push([f(p,0),f(p,1),f(p,2)]);const m=gp(_);return Mr.set(r,m),m}const jo=[0,.05,.18,.55];function Jh(n,t=.12){const e=t/.12,i=[0];for(let s=1;s<jo.length;s++){const r=jo[s]*e;r<n/2-1e-4&&i.push(r)}i.push(n/2);for(let s=jo.length-1;s>=1;s--){const r=n-jo[s]*e;r>n/2+1e-4&&i.push(r)}return i.push(n),i}function Qh(n,t,e,i,s,r){const o=(a,c)=>[t[0]+e[0]*a+i[0]*c,t[1]+e[1]*a+i[1]*c,t[2]+e[2]*a+i[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),u=o(s[a+1],r[c]),h=o(s[a+1],r[c+1]),f=o(s[a],r[c+1]);n.push([l,u,h]),n.push([l,h,f])}}function $M(n,t,e,i=.12){const s=`g${is(n)},${is(t)},${is(e)},${is(i)}`,r=Mr.get(s);if(r)return r;const o=e<=n&&e<=t?2:t<=n?1:0,[a,c,l]=o===2?[n,t,e]:o===1?[n,e,t]:[e,t,n],u=a/2,h=c/2,f=l/2,d=Jh(a,i),_=Jh(c,i),g=[];Qh(g,[-u,-h,f],[1,0,0],[0,1,0],d,_),Qh(g,[-u,-h,-f],[1,0,0],[0,1,0],d,_);const m=(v,M,E,T)=>{g.push([v,M,E]),g.push([v,E,T])};m([u,-h,-f],[u,h,-f],[u,h,f],[u,-h,f]),m([-u,-h,-f],[-u,h,-f],[-u,h,f],[-u,-h,f]),m([-u,h,-f],[u,h,-f],[u,h,f],[-u,h,f]),m([-u,-h,-f],[u,-h,-f],[u,-h,f],[-u,-h,f]);const p=gp(g);if(o===1?p.rotateX(-Math.PI/2):o===0&&p.rotateY(Math.PI/2),o!==2){const v=p.attributes.position.array,M=p.attributes.normal.array;p.setAttribute("uv",new he(_p(v,M,p.attributes.position.count),2))}return Mr.set(s,p),p}lu(()=>{for(const n of Mr.values())n.dispose();Mr.clear()});class du{constructor(){this.group=new _e,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,i,s,r,o,a=!1){this.colliders.push({min:new z(t-s/2,e,i-o/2),max:new z(t+s/2,e+r,i+o/2),walkable:a})}spot(t,e,i,s){return this.spots[t]=new z(e,i,s),this.spots[t]}interact(t,e,i,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new z(i,s,r),action:o,data:a,radius:c})}light(t,e,i,s=16770756,r=9,o=13){const a=new ro(s,r,o,2);return a.position.set(t,e,i),this.group.add(a),this.lights.push(a),a}}function jM(n,t,e,i,s,r,o=Nn.floorTimber,a={}){const c=a.thickness??.16,l=Ct(a.surface??"floorTimber",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),n.add(l),n.solid(t,r-c,e,i,c,s,!0),l}function KM(n,t,e,i,s,r,o=Nn.ceiling,a={}){const c=a.thickness??Vt.cornice,l=Ct(a.surface??"ceiling",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),n.add(l),l}function ZM(n,t,e,i,s=0,r={}){const o=Ct("trim",.075,.115,.01,r.colour??Nn.trim,{});o.position.set(t,e,i),o.rotation.y=s,n.add(o);const a=Ct("trim",.03,.055,.004,r.colour??Nn.trim,{});return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(.007),n.add(a),o}function JM(n,t,e,i,s=0,r={}){const o=Ct("trim",.115,.075,.01,r.colour??Nn.trim,{});return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function $s(n,t,e,i,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,u=e-r/2-a,h=e+r/2+a;const f=t-s/2,d=t+s/2,_=e-r/2,g=e+r/2;for(const M of n.decals){if(l<=M.x0||c>=M.x1||h<=M.z0||u>=M.z1)continue;const E=Math.min(l-M.x0,M.x1-c),T=Math.min(h-M.z0,M.z1-u);if(E<=T?t<(M.x0+M.x1)/2?l=Math.max(d,Math.min(l,M.x0)):c=Math.min(f,Math.max(c,M.x1)):e<(M.z0+M.z1)/2?h=Math.max(g,Math.min(h,M.z0)):u=Math.min(_,Math.max(u,M.z1)),l>M.x0+1e-4&&c<M.x1-1e-4&&h>M.z0+1e-4&&u<M.z1-1e-4)return null}const m=l-c,p=h-u;if(m<.05||p<.05)return null;const v=new It(new vi(m,p),cp());return v.rotation.x=-Math.PI/2,v.position.set((c+l)/2,i+.006,(u+h)/2),n.add(v),n.decals.push({x0:c,x1:l,z0:u,z1:h}),v}new ii;function QM(n,t,e,i){if(n.door===!1||n.leaf===!1||n.door===void 0&&n.leaf===void 0&&t<=1.005)return null;const s=n.door||{},r=t>=1.25,o=s.style??(n.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??i,colour:s.colour??n.leaf??(o==="glazed"?vr.metal:e),surfaceName:s.surface??n.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function ri(n,t,e,i,s,r={}){const{y0:o=0,height:a=Vt.storey,thickness:c=Vt.wallThick,colour:l=Nn.wall,innerColour:u=null,outerColour:h=null,openings:f=[],skirting:d=!0,skirtStyle:_="timber",cornice:g=!0,corniceStyle:m="cove",autoServices:p=!0,inner:v=null,surface:M="wall",trimColour:E=Nn.trim,graded:T=!0,name:w=null}=r,S=u??h,R=i-t,D=s-e,x=Math.hypot(R,D);if(x<.01)return;const y=R/x,A=D/x,L=Math.atan2(-A,y),O=-A,F=y,I=c/2,P=(k,J,nt,lt=0,ct=0)=>(k.position.set(t+y*J+O*lt,nt,e+A*J+F*lt),k.rotation.y=L+ct,n.add(k),k),U=(k,J,nt,lt={})=>Ct("trim",k,J,nt,lt.colour??E,lt),Y=v===null?[-1,1]:[v],K=(k,J,nt,lt)=>{const ct=J-k,pt=lt-nt;if(ct<=.005||pt<=.005)return;const xt=(k+J)/2,vt=g&&m==="shadowline"&&Math.abs(lt-(o+a))<.02,B=vt?pt-.01:pt,me=ct>=1.2&&B>=1.2,Nt=Ct(M,ct,B,c,l,{graded:T&&me,cast:!0});if(P(Nt,xt,nt+B/2),vt){const N=Ct(M,ct,.01,c-.02,l,{});P(N,xt,lt-.005)}const qt=Math.abs(y)*ct+Math.abs(A)*c,Rt=Math.abs(A)*ct+Math.abs(y)*c,te=t+y*xt,Mt=e+A*xt;if(n.solid(te,nt,Mt,qt,pt,Rt),S)for(const N of Y){const b=Ct(M,ct,B,.02,S,{graded:T&&me});P(b,xt,nt+B/2,N*(I+.01))}if(d&&_&&nt-o<.02)if(_==="commercial"){const N=U(ct,Vt.skirtCommercial,c+.04,{colour:Nn.tileFloor,chamfer:$n.thin});P(N,xt,nt+Vt.skirtCommercial/2)}else{const N=[[.112,Vt.skirtProud,0,$n.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[b,X,it,at]of N){const st=U(ct,b,c+X*2,{chamfer:at});P(st,xt,nt+it+b/2)}}if(g&&m==="cove"&&Math.abs(lt-(o+a))<.02){const N=Vt.corniceGirth/Math.SQRT2;for(const b of Y){const X=U(ct,Vt.corniceGirth,.008,{chamfer:0});P(X,xt,lt-N/2,b*(I+N/2)),X.rotation.order="YXZ",X.rotation.set(-b*Math.PI/4,L,0)}}},Q=(k,J,nt,lt)=>{const ct=lt-nt;for(const xt of[-1,1]){const vt=U(Vt.reveal,ct,c,{});P(vt,k+xt*(J/2-Vt.reveal/2),nt+ct/2)}const pt=U(J,Vt.reveal,c,{});P(pt,k,lt-Vt.reveal/2)},Z=(k,J,nt,lt)=>{const ct=J-2*Vt.reveal,pt=ct/2+Vt.archQuirk,xt=lt+Vt.archQuirk;for(const vt of[-1,1])for(const B of[-1,1]){const me=U(Vt.archW,xt-nt+.002,Vt.archProud,{chamfer:$n.joinery});if(P(me,k+vt*(pt+Vt.archW/2),nt+(xt-nt)/2,B*(I+Vt.archProud/2)),nt-o<.02){const Nt=U(Vt.archW+.02,.15,.032,{});P(Nt,k+vt*(pt+Vt.archW/2),nt+.075,B*(I+.016))}}for(const vt of[-1,1]){const B=U(ct+2*(Vt.archW+Vt.archQuirk),Vt.archW,Vt.archProud,{chamfer:$n.joinery});P(B,k,xt+Vt.archW/2,vt*(I+Vt.archProud/2))}},q=[...f].sort((k,J)=>k.at-J.at);let H=0;for(const k of q){const J=k.width/2,nt=Math.max(0,k.at-J),lt=Math.min(x,k.at+J),ct=k.kind==="window"?k.sill??Vt.winSill:0,pt=k.kind==="window"?k.head??Vt.winHead:k.head??(k.kind==="arch"?2.25:Vt.doorH);if(K(H,nt,o,o+a),ct>0&&K(nt,lt,o,o+ct),K(nt,lt,o+pt,o+a),H=lt,k.kind==="window"){const xt=pt-ct,vt=o+(ct+pt)/2,B=v===null?1:-v,me=new It(new sn(k.width-2*Vt.reveal-.002,xt-.002,.006),IM());me.castShadow=!1,me.receiveShadow=!0,P(me,k.at,vt,B*.015);const Nt=new It(new sn(k.width-2*Vt.reveal-.002,xt-.002,.006),PM());Nt.castShadow=!1,Nt.receiveShadow=!0,P(Nt,k.at,vt,-B*.015),Q(k.at,k.width,o+ct,o+pt),Z(k.at,k.width,o+ct,o+pt);const qt=Math.max(1,Math.round((k.width-2*Vt.reveal)/.9)),Rt=k.width-2*Vt.reveal;for(let Mt=1;Mt<qt;Mt++){const N=U(.04,xt,.05,{chamfer:$n.joinery});P(N,k.at-Rt/2+Rt/qt*Mt,vt)}const te=k.restrictor?Math.min(o+1.7,o+pt-.1):o+ct+xt/3;if(xt>.55){const Mt=U(Rt,.04,.05,{chamfer:$n.joinery});P(Mt,k.at,te)}if(k.restrictor){const Mt=U(.06,.02,.03,{colour:Nn.metalDull,chamfer:$n.thin});P(Mt,k.at+Rt/4,o+ct+.02,0)}for(const Mt of Y){const N=U(k.width+.09,.025,c/2+.03,{chamfer:$n.joinery});P(N,k.at,o+ct-.0125,Mt*(c/4+.015))}if(v!==null){const Mt=U(k.width+.12,.04,.09,{chamfer:$n.joinery});P(Mt,k.at,o+ct-.02,-v*(I+.045)),Mt.rotation.order="YXZ",Mt.rotation.set(v*.1,L,0)}if(k.curtains){ty(n,t+y*k.at,o+pt+.15,e+A*k.at,L,k.width+.4,{offset:(v??1)*(I+.09)});const Mt=[.3,.22],N=v??1;for(const X of[-1,1]){const it=Mt[X<0?0:1],at=k.width*it,st=6;for(let At=0;At<st;At++){const ft=at/st,Et=Ct("fabric",ft*1.35,xt+.35,.045,k.curtains,{cast:!0}),ee=k.at+X*(k.width/2-at+(At+.5)*ft);P(Et,ee,vt+.1,N*(I+.075),At%2?.175:-.175)}}const b=U(k.width+.44,.12,.09,{chamfer:$n.joinery});P(b,k.at,o+pt+.21,N*(I+.055))}}else if((k.kind==="door"||k.kind==="arch")&&(Q(k.at,k.width,o,o+pt),Z(k.at,k.width,o,o+pt),k.kind==="door")){const xt=k.swing??1,vt=k.width/2-Vt.reveal,B=I-.045;for(const qt of[-1,1]){const Rt=U(.013,pt-.02,.03,{});P(Rt,k.at+qt*(vt-.0055),o+(pt-.02)/2,xt*B)}const me=U(k.width-2*Vt.reveal,.014,.03,{});P(me,k.at,o+pt-.025,xt*B);const Nt=QM(k,k.width,E,xt);if(Nt){const qt=B+.015+Vt.leafT,Rt=pt-Vt.reveal-.02,te=Nt.pair?vt-.006:2*vt-.006,Mt=Nt.face,N=Nt.pair?[1,-1]:[Mt];for(const b of N){const X=k.at+b*(vt-.003),it=Mt*qt;Nt.leaves.push({hx:t+y*X+O*it,hz:e+A*X+F*it,y:o,baseRot:L,phiOpen:b*Mt*Math.PI/2,leafRot:b>0?0:Math.PI,dx:-b*te/2,dz:-Mt*Vt.leafT/2,lw:te,lh:Rt});for(const at of[.15,1.02,1.89]){if(at>Rt-.1)continue;const st=Ct("chrome",.016,.1,.016,vr.metal,{chamfer:.001,cast:!1});P(st,X,o+.015+at,it)}}Nt.centre={x:t+y*k.at,z:e+A*k.at},Nt.y0=o,n.doors.push(Nt)}}if(p&&k.kind==="door"){const xt=-(k.swing??1);for(const vt of[-1,1])ZM(n,t+y*(k.at+xt*(k.width/2+Vt.archW+.15))+O*vt*(I+.006),o+Vt.switchH,e+A*(k.at+xt*(k.width/2+Vt.archW+.15))+F*vt*(I+.006),L+(vt<0?Math.PI:0))}}if(K(H,x,o,o+a),p&&v!==null&&o+Vt.gpoH<o+a){const k=Math.max(1,Math.floor(x/3.5));for(let J=0;J<k;J++){const nt=(J+.5)*(x/k);q.some(lt=>Math.abs(lt.at-nt)<lt.width/2+.25)||JM(n,t+y*nt+O*v*(I+.006),o+Vt.gpoH,e+A*nt+F*v*(I+.006),L+(v<0?Math.PI:0))}}w&&(n.faces[w]={a:{x:t,z:e},b:{x:i,z:s},u:{x:y,z:A},n:{x:O,z:F},angle:L,thickness:c,y0:o,height:a,length:x,face:k=>({x:(t+i)/2+O*k*(c/2),z:(e+s)/2+F*k*(c/2),nx:O*k,nz:F*k,rotY:L+(k<0?Math.PI:0)})})}function ty(n,t,e,i,s=0,r=1.6,o={}){const a=new _e,c=new It(new Qt(.0125,.0125,r,8),T0("chrome",o.colour??vr.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const u=new It(new ki(.0175,8,6),T0("chrome",o.colour??vr.metalDark));u.position.x=l*r/2,a.add(u)}return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(o.offset??0),n.add(a),a}function pu(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new pn;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let _=0;_<d.count;++_)h.push(d.getX(_)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=tf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);const _=tf(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}return c}function tf(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new he(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let _=0;_<e;_++){const g=u.getComponent(f,_);a.setComponent(f+h,_,g)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const ey=new Set(["position","normal","uv","color"]);function ec(n,t={}){var a,c;n.updateMatrixWorld(!0);const e=new Map,i=[],s=new Set;n.traverse(l=>{var _,g;if(l===n)return;for(let m=l.parent;m&&m!==n;m=m.parent)if(s.has(m))return;if(l.isInstancedMesh||l.userData.isSign||l.isLight){i.push(l),s.add(l);return}if(!l.isMesh||!((g=(_=l.geometry)==null?void 0:_.attributes)!=null&&g.position))return;const u=l.material.uuid;e.has(u)||e.set(u,{material:l.material,geos:[],cast:!1});const h=l.geometry.clone();h.applyMatrix4(l.matrixWorld);for(const m of Object.keys(h.attributes))ey.has(m)||h.deleteAttribute(m);const f=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new he(new Float32Array(f*2),2)),h.attributes.color||h.setAttribute("color",new he(new Float32Array(f*3).fill(1),3));const d=e.get(u);d.geos.push(h.index?h.toNonIndexed():h),d.cast=d.cast||l.castShadow});const r=t.colliders?new Oa(t.colliders,1):null,o=new _e;for(const{material:l,geos:u,cast:h}of e.values()){if(!u.length)continue;const f=u.length===1?u[0]:pu(u,!1);if(!f){console.error("bakeGroup: merge returned null (mismatched attributes)",l);continue}const d=((a=l.userData)==null?void 0:a.decal)===!0,_=(c=l.userData)==null?void 0:c.uvScale;_&&!d&&nc(f,_[0],_[1]),r&&!d&&xp(f,r);const g=new It(f,l);g.castShadow=d?!1:h,g.receiveShadow=!d,d&&(g.renderOrder=2),o.add(g)}for(const l of i)o.add(l);return o}function nc(n,t,e=t){const i=n.attributes.position.count,s=n.attributes.position.array,r=n.attributes.normal.array,o=new Float32Array(i*2);for(let a=0;a<i;a++){const c=a*3,l=Math.abs(r[c]),u=Math.abs(r[c+1]),h=Math.abs(r[c+2]);let f,d;u>=l&&u>=h?(f=s[c],d=s[c+2]):l>=h?(f=s[c+2],d=s[c+1]):(f=s[c],d=s[c+1]),o[a*2]=f/t,o[a*2+1]=d/e}n.setAttribute("uv",new he(o,2))}const qc=512,ef=1024;function nf(n,t,e){return((n+qc)*ef+(t+qc))*ef+(e+qc)}class Oa{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let i=0;i<t.length;i++){const s=t[i],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),u=Math.floor(s.max.z/e);for(let h=r;h<=o;h++)for(let f=a;f<=c;f++)for(let d=l;d<=u;d++){const _=nf(h,f,d);let g=this.bins.get(_);g||(g=[],this.bins.set(_,g)),g.push(i)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,i,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),u=Math.floor((e-s)/r),h=Math.floor((e+s)/r),f=Math.floor((i-s)/r),d=Math.floor((i+s)/r);for(let _=c;_<=l;_++)for(let g=u;g<=h;g++)for(let m=f;m<=d;m++){const p=this.bins.get(nf(_,g,m));if(p)for(let v=0;v<p.length;v++){const M=p[v];this._stamp[M]!==a&&(this._stamp[M]=a,o.push(this.boxes[M]))}}return o}}const ny=.18,iy=.55,sf=.75,sy=.3,rf=.55,ry=1.2;function xp(n,t){const e=t instanceof Oa?t:new Oa(t,1),i=Array.isArray(n)?n:[n];for(const s of i)oy(s,e)}function oy(n,t){const e=n.attributes.color;if(!e||e.itemSize!==3||e.normalized||!n.attributes.normal)return;const i=n.attributes.position.array,s=n.attributes.normal.array,r=e.array,o=n.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],u=s[c+1],h=s[c+2],f=i[c]+l*.01,d=i[c+1]+u*.01,_=i[c+2]+h*.01;let g=0;const m=t.near(f,d,_,ry);for(let v=0;v<m.length;v++){const M=m[v],E=Math.max(M.min.x-f,0,f-M.max.x),T=Math.max(M.min.y-d,0,d-M.max.y),w=Math.max(M.min.z-_,0,_-M.max.z),S=Math.sqrt(E*E+T*T+w*w);if(S>sf*3)continue;const R=(M.min.x+M.max.x)/2-f,D=(M.min.y+M.max.y)/2-d,x=(M.min.z+M.max.z)/2-_;l*R+u*D+h*x<=0||(g+=iy*Math.exp(-S/ny)+sy*Math.exp(-S/sf))}const p=Math.max(rf,1-Math.min(1-rf,g));r[c]*=p,r[c+1]*=p,r[c+2]*=p}e.needsUpdate=!0}const et=Object.freeze({CEIL_H:3.3,FLAT_FACE:3.15,STRUCT_FACE:3.166,CANT_FACE:3.511346,CANT_LEN:1.932113,CORNER_X:1.799792,VERTEX:Object.freeze([1.835,3.251]),BAND_TOP:2.7,TILE:.9,BAY_CENTRE:2.362686,BAY_FRONT:3.171346,BAY_W:1.4,BAY_D:.34,BAY_H:2.2,RIM:1.13,PANEL_OUT:1.1,PANEL_IN:.56,PANEL_Y0:.9,PANEL_Y1:1.16,RIM_TOP:.96,DAIS_A:1.75,COFFER_IN:1.6,COFFER_OUT:2.3,SPAWN:Object.freeze([0,0,2.3]),SPAWN_YAW:Math.PI,HEX_THETA:Math.PI/6}),_i=Object.freeze({TILE:.9,PER_TILE:1,DIA:.72,LIP_DIA:.69,COVE_DIA:.6,DISH_DIA:.51,RECESS:.055,PROUD:.006,DISC_R:.25,DISC_PROUD:.001,COLUMNS:Object.freeze([-1.35,-.45,.45,1.35]),ROWS:Object.freeze([.45,1.35,2.25]),LIT_ROW:1.35}),$t=Object.freeze({ROUNDEL:12303029,BAND:9474188,CEIL:11118498,DECK:5198935,DAIS:7765124,CONSOLE:13947592,PANEL:6973799,DARK:2764339,CHROME:13225682,JOINERY:7034951,GLOW_W:12960958,GLOW_C:12371148,GLASS:13227742}),of=Object.freeze({ROUNDEL:38.718,BAND:26.288,CEIL:40.657,DECK:25.752,DAIS:10.227,CONSOLE:13.965,PANEL:9.566,DARK:9.034,CHROME:4.338,JOINERY:2.8,GLOW_W:6.463,GLOW_C:2.8,GLASS:2.239}),ay=16772301,cy=1.05,ly=12376319,uy=1.25,Ma=n=>n<0?0:n>1?1:n,vp=n=>n*n*(3-2*n);function ic(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new he(new Float32Array(t*3).fill(1),3))}return n}const mn=512,yo=mn/_i.TILE,Ko=_i.DISH_DIA/2*yo,af=_i.COVE_DIA/2*yo,Xc=_i.LIP_DIA/2*yo,cf=_i.DIA/2*yo,lf=1,Yc=1+_i.PROUD/_i.RECESS,uf=1.5,hy=_i.RECESS*yo,fy=(n,t)=>1-vp(Ma((n-t+uf*.5)/uf));let hf=!1;function Mp(){hf||(hf=!0,Te("roundel",n=>{const t=new Float32Array(mn*mn),e=new Float32Array(mn*mn),i=new Float32Array(mn*mn),s=le(n,mn,{p0:32,octaves:3});for(let r=0;r<mn;r++)for(let o=0;o<mn;o++){const a=r*mn+o,c=o+.5-mn/2,l=r+.5-mn/2,u=Math.hypot(c,l);let h,f,d;if(u<=Ko){const v=u/Ko;h=0,f=.62-.2*v,d=.52}else{const v=vp(Ma((u-Ko)/(af-Ko)));h=v,f=.42+.36*v,d=.52+.22*v}let _,g,m;if(u<=Xc)_=Yc,g=1,m=.74;else if(u<=cf){const v=(u-Xc)/(cf-Xc);_=Yc-(Yc-lf)*v,g=1,m=.74+.08*v}else _=lf,g=1,m=.82;const p=1-fy(u,af);t[a]=h+(_-h)*p,e[a]=f+(g-f)*p,i[a]=Ma(d+(m-d)*p+(s[a]-.5)*.06)}return{normalMap:Hn(t,mn,hy),ormMap:He(mn,e,i,null),uvScale:[_i.TILE,_i.TILE],normalScale:1,tinted:!0}}),Te("consolePanel",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=le(n,256,{p0x:10,p0y:256,octaves:2}),o=le(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++){const c=n.range(-.06,.06);for(let l=0;l<256;l++){const u=a*256+l;i[u]=Ma(.42+c+(r[u]-.5)*.09+(o[u]-.5)*.06)}}return{ormMap:He(256,null,i,s),uvScale:[.32,.32],normalScale:0,tinted:!0}}))}let $c=null;function yp(n=null){if($c)return $c;Mp();for(const s of Object.keys(of))tc($t[s],of[s]);const t={},e=ns("roundel",n?n.child("tex.roundel"):null);t.ROUNDEL=new nn({color:$t.ROUNDEL,roughness:1,metalness:0,normalMap:e.normalMap,normalScale:new Ft(e.normalScale,e.normalScale),aoMap:e.ormMap,roughnessMap:e.ormMap,aoMapIntensity:1,vertexColors:!0}),t.ROUNDEL.userData.uvScale=e.uvScale,t.ROUNDEL.userData.cast=!0,t.ROUNDEL.userData.surface="roundel",t.BAND=Ii("trim",$t.BAND,n),t.CEIL=Ii("ceiling",$t.CEIL,n),t.DECK=Ii("vinyl",$t.DECK,n),t.DAIS=Ii("metal",$t.DAIS,n),t.CONSOLE=Ii("appliance",$t.CONSOLE,n),t.DARK=Ii("metal",$t.DARK,n),t.CHROME=Ii("chrome",$t.CHROME,n),t.JOINERY=Ii("joinery",$t.JOINERY,n);const i=ns("consolePanel",n?n.child("tex.consolePanel"):null);return t.PANEL=new nn({color:$t.PANEL,roughness:1,metalness:0,aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),t.PANEL.userData.uvScale=i.uvScale,t.PANEL.userData.cast=!0,t.PANEL.userData.surface="consolePanel",t.GLOW_W=new nn({color:$t.GLOW_W,roughness:.55,metalness:0,emissive:ay,emissiveIntensity:cy,vertexColors:!0}),t.GLOW_W.userData.cast=!0,t.GLOW_C=new nn({color:$t.GLOW_C,roughness:.2,metalness:0,emissive:ly,emissiveIntensity:uy,vertexColors:!0}),t.GLOW_C.userData.cast=!0,t.GLASS=xo(new nn({color:$t.GLASS,roughness:.1,metalness:0,transparent:!0,opacity:.3,depthWrite:!1,side:ai,vertexColors:!0})),t.GLASS.userData.cast=!1,t.SHADOW=cp(),$c=t,t}const Xi=Math.SQRT1_2,jc=n=>2*n*Math.tan(Math.PI/6),Fr=n=>2*Math.sqrt(3)*n*n,ff=n=>n/Math.cos(Math.PI/6),Zo=7.2,dy=.02,Jo=et.BAND_TOP,kr=3.16,Qo=et.BAND_TOP,Kc=.03,Zc=.06,py=.026,Jc=.1,my=.02,jn=1.8,ke=2.61,R0=.9,Na=.045,eo=et.FLAT_FACE+Na/2,df=.05,pf=3.311,js=.09,L0=.05,mf=3.14+L0/2,Qc=.25,_y=.001,_f=1.35,gy=3.1,tl=.2,el=.1,xy=.006;function mu(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new he(new Float32Array(t*3).fill(1),3))}return n}function vy(n,t,e){const i=new Qt(ff(n),ff(n),t,6,1,!1,e).toNonIndexed();return i.computeVertexNormals(),mu(i)}const My=["CEIL_H","FLAT_FACE","STRUCT_FACE","CANT_FACE","CORNER_X","BAND_TOP","DAIS_A","COFFER_IN","COFFER_OUT","HEX_THETA"],yy=["ROUNDEL","BAND","CEIL","DAIS","DARK","CHROME","GLOW_W","GLOW_C"];function Sy(n){for(const t of My)if(!Number.isFinite(et[t]))throw new Error(`Shell: ROOM.${t} is not a number (got ${et[t]})`);if(!Array.isArray(et.SPAWN)||et.SPAWN.length!==3)throw new Error("Shell: ROOM.SPAWN must be [x, y, z]");if(!n)throw new Error("Shell: shell(b, P) needs the palette from roundels.js");for(const t of yy)if(!n[t]||!n[t].isMaterial)throw new Error(`Shell: palette is missing ${t}`)}function Ey(n,t){var s;const e=mu(new sn(R0,ke,Na).toNonIndexed());e.applyMatrix4(new Wt().makeTranslation(n*.45,ke/2,eo));const i=(s=t.ROUNDEL.userData)==null?void 0:s.uvScale;if(!i)throw new Error("Shell: P.ROUNDEL carries no uvScale — the leaf UVs cannot be projected");return nc(e,i[0],i[1]),e.applyMatrix4(new Wt().makeTranslation(n*(jn/2),0,eo).invert()),e.computeVertexNormals(),e}function wy(n,t,e={}){Sy(t);const i=e.liveDoors!==!1,s=Object.create(null),r=(Z,q,H)=>(s[Z]=(s[Z]??0)+H,tc(q,s[Z]),q),o=6.332*6.332-4*(1.366208*1.366208/2);r("DECK",$t.DECK,o-Fr(et.DAIS_A)),jM(n,0,0,Zo,Zo,0,$t.DECK,{surface:"vinyl",thickness:.16});const a=n.colliders.length;r("CEIL",$t.CEIL,o),KM(n,0,0,Zo,Zo,et.CEIL_H,$t.CEIL,{surface:"ceiling",thickness:.09});const c={height:et.CEIL_H,thickness:Vt.wallThick,colour:$t.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},l=1.835,u=3.251;ri(n,-l,-u,l,-u,{...c,name:"flatS"}),ri(n,l,-u,u,-l,{...c,name:"baySE"}),ri(n,u,-l,u,l,{...c,name:"flatE"}),ri(n,u,l,l,u,{...c,name:"bayNE"}),ri(n,l,u,.9,u,{...c,name:"pierR"}),ri(n,.9,u,-.9,u,{...c,y0:ke,height:et.CEIL_H-ke,name:"lintel"}),ri(n,-.9,u,-l,u,{...c,name:"pierL"}),ri(n,-l,u,-u,l,{...c,name:"bayNW"}),ri(n,-u,l,-u,-l,{...c,name:"flatW"}),ri(n,-u,-l,-l,-u,{...c,name:"baySW"}),n.colliders.length=a;const h=(et.STRUCT_FACE-et.CORNER_X)*Math.SQRT2,f=2*et.CORNER_X,d=4*f+4*h;r("BAND",$t.BAND,4*h*et.CEIL_H+4*f*(et.CEIL_H-2.8)-jn*(et.CEIL_H-2.8));const _={material:t.ROUNDEL,cast:!0},g=(Z,q,H,k)=>{const J=Ct("wall",Z,Jo,dy,$t.ROUNDEL,_);return J.position.set(q,Jo/2,H),J.rotation.y=k,n.add(J)};r("ROUNDEL",$t.ROUNDEL,3*3.6*Jo+2*.9*Jo),g(3.6,0,-kr,0),g(3.6,kr,0,-Math.PI/2),g(3.6,-kr,0,Math.PI/2),g(.9,1.35,kr,Math.PI),g(.9,-1.35,kr,Math.PI),r("ROUNDEL",$t.ROUNDEL,2*R0*ke);const m=new _e;m.name="doorPivots";const p=[];if(i)for(const Z of[1,-1]){const q=new Ke;q.position.set(Z*(jn/2),0,eo),q.userData.side=Z;const H=new It(Ey(Z,t),t.ROUNDEL);H.name="doorLeaf",H.castShadow=!0,H.receiveShadow=!0,H.frustumCulled=!1,q.add(H),m.add(q),p.push(q)}else for(const Z of[-1,1]){const q=Ct("doorLeaf",R0,ke,Na,$t.ROUNDEL,_);q.position.set(Z*.45,ke/2,eo),n.add(q)}r("DARK",$t.DARK,jn*ke);const v={material:t.DARK,cast:!1},M=.575,E=2.11,T=.14,w=3.266;if(i){for(const H of[-1,1]){const k=Ct("metal",jn/2-M,ke,T,$t.DARK,v);k.position.set(H*(M+(jn/2-M)/2),ke/2,w),n.add(k)}const Z=Ct("metal",2*M,ke-E,T,$t.DARK,v);Z.position.set(0,(E+ke)/2,w),n.add(Z);const q=Ct("metal",2*M,E,df,$t.DARK,v);q.position.set(0,E/2,pf),n.add(q)}else{const Z=Ct("metal",jn,ke,df,$t.DARK,v);Z.position.set(0,ke/2,pf),n.add(Z)}const S={material:t.BAND,cast:!0};r("BAND",$t.BAND,2*js*(ke+.045)+(jn+2*js)*js);for(const Z of[-1,1]){const q=Ct("trim",js,ke+.045,L0,$t.BAND,S);q.position.set(Z*(jn/2+js/2),(ke+.045)/2,mf),n.add(q)}const R=Ct("trim",jn+2*js,Qo-ke,L0,$t.BAND,S);R.position.set(0,(ke+Qo)/2,mf),n.add(R),r("GLOW_W",$t.GLOW_W,16*Math.PI*Qc*Qc);const D=mu(new Rs(Qc,40)),x=[],y=(Z,q,H)=>{const k=new It(D,t.GLOW_W);return k.position.set(Z,_f,q),k.rotation.y=H,k.castShadow=!1,k.receiveShadow=!1,x.push(k),n.add(k)},A=et.FLAT_FACE-_y;for(const Z of[-1.35,-.45,.45,1.35])y(Z,-A,0),y(A,Z,-Math.PI/2),y(-A,Z,Math.PI/2);let L=null;for(const Z of[-1.35,1.35])y(Z,A,Math.PI);if(i){L=new Da(D,t.GLOW_W,2),L.name="doorDiscs",L.castShadow=!1,L.receiveShadow=!1,L.frustumCulled=!1,L.instanceMatrix.setUsage(so);const Z=new Wt;[.45,-.45].forEach((q,H)=>{Z.makeRotationY(Math.PI).setPosition(q,_f,A),L.setMatrixAt(H,Z)}),L.instanceMatrix.needsUpdate=!0,n.add(L)}else for(const Z of[-.45,.45])y(Z,A,Math.PI);const O=et.CORNER_X,F=et.STRUCT_FACE,I=[[-O,-F,O,-F],[O,-F,F,-O],[F,-O,F,O],[F,O,O,F],[O,F,-O,F],[-O,F,-F,O],[-F,O,-F,-O],[-F,-O,-O,-F]].map(([Z,q,H,k])=>{const J=H-Z,nt=k-q,lt=Math.hypot(J,nt),ct=J/lt,pt=nt/lt;return{len:lt,nx:-pt,nz:ct,mx:(Z+H)/2,mz:(q+k)/2,angle:Math.atan2(-pt,ct)}}),P=(Z,q,H,k)=>(Z.position.set(q.mx+q.nx*k,H,q.mz+q.nz*k),Z.rotation.y=q.angle,n.add(Z));r("CHROME",$t.CHROME,d*(Kc+Zc)),r("GLOW_W",$t.GLOW_W,d*Jc);for(const Z of I)P(Ct("chrome",Z.len,Kc,Zc,$t.CHROME,{material:t.CHROME,cast:!1}),Z,Qo+Kc/2,py-Zc/2),P(Ct("trim",Z.len,Jc,my,$t.GLOW_W,{material:t.GLOW_W,cast:!1}),Z,Qo+Jc/2,0);const U=(et.COFFER_IN+et.COFFER_OUT)/2,Y=jc(et.COFFER_OUT),K=et.COFFER_OUT-et.COFFER_IN;r("CEIL",$t.CEIL,Fr(et.COFFER_OUT)-Fr(et.COFFER_IN)+6*Y*tl),r("GLOW_C",$t.GLOW_C,6*jc(et.COFFER_IN)*el);for(let Z=0;Z<6;Z++){const q=Z*Math.PI/3,H=Math.sin(q),k=Math.cos(q),J=Ct("ceiling",Y,tl,K,$t.CEIL,{material:t.CEIL,cast:!1});J.position.set(U*H,gy+tl/2,U*k),J.rotation.y=q,n.add(J);const nt=Ct("trim",jc(et.COFFER_IN),el,.02,$t.GLOW_C,{material:t.GLOW_C,cast:!1});nt.position.set(et.COFFER_IN*H,et.CEIL_H-el/2,et.COFFER_IN*k),nt.rotation.y=q,n.add(nt)}r("DAIS",$t.DAIS,Fr(et.DAIS_A)-Fr(.62));const Q=new It(vy(et.DAIS_A,xy*2,et.HEX_THETA),t.DAIS);return Q.position.set(0,0,0),Q.castShadow=!1,Q.receiveShadow=!0,n.add(Q),n.userData??(n.userData={}),n.userData.collision={planes:[{nx:0,nz:1,d:et.FLAT_FACE},{nx:1,nz:0,d:et.FLAT_FACE},{nx:0,nz:-1,d:et.FLAT_FACE},{nx:-1,nz:0,d:et.FLAT_FACE},{nx:Xi,nz:Xi,d:et.CANT_FACE},{nx:Xi,nz:-Xi,d:et.CANT_FACE},{nx:-Xi,nz:-Xi,d:et.CANT_FACE},{nx:-Xi,nz:Xi,d:et.CANT_FACE}],hulls:[],boxes:[{x:0,z:eo,hw:jn/2,hd:Na/2,rotY:0,y0:0,y1:ke}]},n.spot("spawn",et.SPAWN[0],et.SPAWN[1],et.SPAWN[2]),n.spot("doors",0,0,2.25),n.interact("doors","Doors",0,1.2,et.FLAT_FACE,"doors",{},1.4),{litDiscs:x,areas:s,doorGroup:m,leaves:p,discs:L}}for(const n of["HEX_THETA","RIM","PANEL_OUT","PANEL_IN","PANEL_Y0","PANEL_Y1","RIM_TOP"])if(typeof et[n]!="number")throw new Error(`Console.js: ROOM.${n} is missing or not a number`);const _u=Math.PI/3,Sp=Math.tan(Math.PI/6),C0=1/Math.cos(Math.PI/6),gf=.62,nl=.7,ta=et.PANEL_IN,by=0,xf=.1,vf=.72,Ri=1.32,Ep=et.PANEL_Y1-et.PANEL_Y0,wp=et.PANEL_OUT-et.PANEL_IN,Ay=Math.atan2(Ep,wp),Ni=Math.hypot(Ep,wp),Mf=(et.PANEL_OUT+et.PANEL_IN)/2,yf=(et.PANEL_Y0+et.PANEL_Y1)/2,oo=et.PANEL_OUT*Sp,Ua=et.PANEL_IN*Sp,Sf=Ay-Math.PI/2,bp=n=>oo+(n+Ni/2)/Ni*(Ua-oo),Ef=-Ni/2+.1246,cs=-.17,yr=cs+.34,Ty=.05,Ry=Math.hypot(oo-Ua,Ni),Ap=Ty/(Ni/Ry),ao=bp(cs)-Ap,Fa=bp(yr)-Ap,Me=-.012,Tp=Math.hypot(Fa-ao,yr-cs),Ly=-.34/Tp,Cy=(Fa-ao)/Tp,ea=(n,t)=>(Math.abs(n)-ao)*Ly+(t-cs)*Cy,re=-.086,Ce=.05,an=.14,Yi=.006,$i=.084,I0=new sn(1,1,1);I0.setAttribute("color",new he(new Float32Array(I0.attributes.position.count*3).fill(1),3));const gu=.008,$r=.005,Rp=Me+$r+gu/2,Iy=Me-.006-gu/2,gn=new sn(1,1,1),il=new Qt(.5,.5,1,16),Py=new Qt(.5,.5,1,8),wf=new ki(.5,10,8);function xu(n,t,e,i,s,r,o){let a=(i[1]-e[1])*(s[2]-e[2])-(i[2]-e[2])*(s[1]-e[1]),c=(i[2]-e[2])*(s[0]-e[0])-(i[0]-e[0])*(s[2]-e[2]),l=(i[0]-e[0])*(s[1]-e[1])-(i[1]-e[1])*(s[0]-e[0]),u=e,h=i,f=s,d=r;a*o[0]+c*o[1]+l*o[2]<0&&(u=r,h=s,f=i,d=e,a=-a,c=-c,l=-l);const _=Math.hypot(a,c,l)||1;a/=_,c/=_,l/=_;for(const g of[u,h,f,u,f,d])n.push(g[0],g[1],g[2]),t.push(a,c,l)}function vu(n,t){const e=new pn;return e.setAttribute("position",new he(new Float32Array(n),3)),e.setAttribute("normal",new he(new Float32Array(t),3)),e}function bf(n,t){const e=n*C0,i=[];for(let s=0;s<6;s++){const r=et.HEX_THETA+s*_u;i.push([e*Math.sin(r),t,e*Math.cos(r)])}return i}function Yn(n,t,e,i,s){const r=bf(n,t),o=bf(e,i),a=[],c=[];for(let l=0;l<6;l++){const u=(l+1)%6,h=et.HEX_THETA+(l+.5)*_u,f=s==="up"?[0,1,0]:s==="down"?[0,-1,0]:s==="out"?[Math.sin(h),0,Math.cos(h)]:[-Math.sin(h),0,-Math.cos(h)];xu(a,c,r[l],r[u],o[u],o[l],f)}return vu(a,c)}function na(n,t,e,i){const s=new Qt(t*C0,n*C0,i-e,6,1,!1,et.HEX_THETA).toNonIndexed();return s.computeVertexNormals(),s.translate(0,(e+i)/2,0),s}function Lp(n,t,e){const i=[],s=[];for(const[r,o,a,c]of n)xu(i,s,[r[0],r[1],t],[o[0],o[1],t],[a[0],a[1],t],[c[0],c[1],t],e);return vu(i,s)}const ji=[[-oo,-Ni/2],[oo,-Ni/2],[Ua,Ni/2],[-Ua,Ni/2]],En=[[-ao,cs],[ao,cs],[Fa,yr],[-Fa,yr]],Dy=Lp([[ji[0],ji[1],En[1],En[0]],[ji[1],ji[2],En[2],En[1]],[ji[2],ji[3],En[3],En[2]],[ji[3],ji[0],En[0],En[3]]],0,[0,0,1]),Oy=(()=>{const n=[],t=[];for(let e=0;e<4;e++){const i=En[e],s=En[(e+1)%4],r=(i[0]+s[0])/2,o=(i[1]+s[1])/2;xu(n,t,[i[0],i[1],0],[s[0],s[1],0],[s[0],s[1],Me],[i[0],i[1],Me],[-r,-o,0])}return vu(n,t)})(),Ny=Lp([[En[0],En[1],En[2],En[3]]],Me,[0,0,1]),Uy=[{n:1,lamp:"doors",name:"DOOR CONTROL",ctl:[["lever",-.3,re,{len:.13,lean:.35,slot:.13}],["dial",-.13,re,{r:.07,needle:.1,rate:.2}],["dial",.045,re,{r:.046}],["toggle",.18,re,{tilt:.55}],["toggle",.25,re,{tilt:-.55}],["toggle",.32,re,{tilt:.55}],["button",-.32,Ce,{r:.02}],["button",-.255,Ce,{r:.02}],["toggle",-.16,Ce,{tilt:.55}],["toggle",-.1,Ce,{tilt:-.55}],["toggle",-.04,Ce,{tilt:.55}],["bar",.21,Yi,{w:.13,h:$i}],["lamps",-.2,an,{n:3,pitch:.075}],["readout",.17,an,{w:.17,h:.042,seg:3}]]},{n:2,lamp:"scanner",name:"SCANNER",ctl:[["lever",-.32,re,{len:.115,lean:-.35,slot:.12}],["lever",-.235,re,{len:.115,lean:.35,slot:.12}],["dial",-.08,re,{r:.07,needle:.1,rate:.28}],["dial",.09,re,{r:.052,needle:.066,rate:-.44}],["button",.23,re,{r:.022}],["button",.3,re,{r:.022}],["toggle",-.33,Ce,{tilt:.55}],["toggle",-.27,Ce,{tilt:.55}],["toggle",-.21,Ce,{tilt:-.55}],["bar",-.06,Yi,{w:.12,h:$i}],["bar",.1,Yi,{w:.12,h:$i}],["lamps",-.23,an,{n:4,pitch:.07}],["readout",.19,an,{w:.14,h:.042,seg:2}]]},{n:3,lamp:"life",name:"LIFE SUPPORT",ctl:[["dial",-.31,re,{r:.058,needle:.078,rate:.16}],["dial",-.16,re,{r:.058,needle:.078,rate:-.13}],["dial",-.01,re,{r:.058,needle:.078,rate:.11}],["lever",.16,re,{len:.13,lean:.35,slot:.13}],["button",.29,re,{r:.024}],["button",.36,re,{r:.018}],["toggle",-.33,Ce,{tilt:.55}],["toggle",-.27,Ce,{tilt:-.55}],["toggle",-.21,Ce,{tilt:.55}],["toggle",-.15,Ce,{tilt:-.55}],["bar",0,Yi,{w:.11,h:$i}],["bar",.15,Yi,{w:.11,h:$i}],["lamps",-.23,an,{n:4,pitch:.07}],["readout",.19,an,{w:.14,h:.042,seg:3}]]},{n:4,lamp:"nav",name:"NAVIGATION",ctl:[["dial",-.3,re,{r:.058,needle:.078,rate:.24}],["dial",-.16,re,{r:.058,needle:.078,rate:-.19}],["dial",-.02,re,{r:.058,needle:.078,rate:.31}],["dial",.14,re,{r:.07,needle:.1,rate:.09}],["guarded",.31,re,{tilt:-.6}],["lamps",-.25,Ce,{n:6,pitch:.078}],["toggle",.26,Ce,{tilt:.55}],["toggle",.32,Ce,{tilt:-.55}],["readout",-.28,an,{w:.085,h:.042,seg:2}],["readout",-.168,an,{w:.085,h:.042,seg:2}],["readout",-.056,an,{w:.085,h:.042,seg:2}],["readout",.056,an,{w:.085,h:.042,seg:2}],["readout",.168,an,{w:.085,h:.042,seg:2}],["readout",.28,an,{w:.085,h:.042,seg:2}]]},{n:5,lamp:"flight",name:"FLIGHT",ctl:[["lever",-.3,re,{len:.15,lean:.3,slot:.15,big:!0}],["lever",-.17,re,{len:.13,lean:-.35,slot:.13}],["dial",0,re,{r:.07,needle:.1,rate:.36}],["dial",.17,re,{r:.052,needle:.066,rate:-.22}],["button",.3,re,{r:.022}],["bar",-.3,Yi,{w:.11,h:$i}],["bar",-.165,Yi,{w:.11,h:$i}],["toggle",.03,Ce,{tilt:.55}],["toggle",.09,Ce,{tilt:-.55}],["toggle",.15,Ce,{tilt:.55}],["lamps",-.22,an,{n:4,pitch:.074}],["readout",.19,an,{w:.14,h:.042,seg:2}]]},{n:6,lamp:"diag",name:"DIAGNOSTIC",ctl:[["button",-.31,re,{r:.038,lamp:!0}],["dial",-.17,re,{r:.062,needle:.084,rate:.26}],["dial",-.01,re,{r:.062,needle:.084,rate:-.17}],["column",.29,-.1,{n:8,pitch:.03}],["toggle",-.33,Ce,{tilt:.55}],["toggle",-.27,Ce,{tilt:-.55}],["button",-.18,Ce,{r:.02}],["button",-.115,Ce,{r:.02}],["bar",.02,Yi,{w:.11,h:$i}],["lamps",-.23,an,{n:3,pitch:.074}],["readout",.07,an,{w:.11,h:.042,seg:2}]]}];function Fy(n,t,e={}){if(!t||!t.CONSOLE||!t.PANEL||!t.DARK||!t.CHROME||!t.GLOW_C)throw new Error("Console.js: consoleUnit(b, P) needs the palette from roundels.js");const i=new _e;i.name="console",n.add(i);const s=(L,O,F,I,P,U,Y,K)=>{const Q=new It(O,F);return Q.position.set(I,P,U),Y&&Q.scale.set(Y[0],Y[1],Y[2]),K&&Q.rotation.set(K[0],K[1],K[2]),Q.castShadow=!1,Q.receiveShadow=!0,L.add(Q),Q};s(i,na(gf,gf,by,xf),t.CONSOLE,0,0,0),s(i,na(nl,nl,xf,vf),t.CONSOLE,0,0,0),s(i,na(nl,et.PANEL_OUT,vf,et.PANEL_Y0),t.CONSOLE,0,0,0),e.collar!==!1&&s(i,na(ta,ta,et.PANEL_Y1,Ri),t.CONSOLE,0,0,0),s(i,Yn(et.PANEL_OUT,et.PANEL_Y0,et.PANEL_OUT,et.RIM_TOP,"in"),t.CONSOLE,0,0,0),s(i,Yn(et.PANEL_OUT,et.PANEL_Y0,et.RIM,et.RIM_TOP,"out"),t.CONSOLE,0,0,0),s(i,Yn(et.PANEL_OUT,et.RIM_TOP,et.RIM,et.RIM_TOP,"up"),t.CONSOLE,0,0,0);const r=et.PANEL_OUT-.008,o=et.RIM,a=et.RIM_TOP-.002,c=et.RIM_TOP+.014;s(i,Yn(o,a,o,c,"out"),t.CHROME,0,0,0),s(i,Yn(r,a,r,c,"in"),t.CHROME,0,0,0),s(i,Yn(r,c,o,c,"up"),t.CHROME,0,0,0),s(i,Yn(r,a,o,a,"down"),t.CHROME,0,0,0);const l=ta-.006,u=ta+.01;s(i,Yn(u,Ri-.01,u,Ri+.004,"out"),t.CHROME,0,0,0),s(i,Yn(l,Ri-.01,l,Ri+.004,"in"),t.CHROME,0,0,0),s(i,Yn(l,Ri+.004,u,Ri+.004,"up"),t.CHROME,0,0,0),s(i,Yn(l,Ri-.01,u,Ri-.01,"down"),t.CHROME,0,0,0);const h=[],f=[],d=[];let _=1/0;for(let L=0;L<6;L++){const O=L*_u,F=Uy[L],I=new _e;I.rotation.y=O,i.add(I);const P=new _e;P.position.set(0,yf,Mf),P.rotation.x=Sf,I.add(P),d.push(new Wt().makeRotationY(O).multiply(new Wt().makeTranslation(0,yf,Mf)).multiply(new Wt().makeRotationX(Sf))),s(P,Dy,t.PANEL,0,0,0),s(P,Oy,t.PANEL,0,0,0),s(P,Ny,t.DARK,0,0,0),_=Math.min(_,ky(P,L,F,t,s,h));const U=et.RIM*Math.sin(O),Y=et.RIM*Math.cos(O),K=(O+Math.PI)%(Math.PI*2),Q=(et.RIM+.9)*Math.sin(O),Z=(et.RIM+.9)*Math.cos(O);n.spot(`panel${F.n}`,Q,0,Z),n.interact(`panel${F.n}`,F.name,U,et.RIM_TOP,Y,"panel",{panel:F.n},1.2),f.push({id:`panel${F.n}`,panel:F.n,lamp:F.lamp,name:F.name,azimuth:O,azimuthDeg:L*60,anchor:[U,et.RIM_TOP,Y],stand:[Q,Z],yaw:K})}_<Ef&&console.error(`Console.js: a control reaches v ${_.toFixed(4)}, outboard of the sightline limit ${Ef.toFixed(4)} — the rim upstand hides it from a standing player (§6.3)`);const g=new Da(I0,t.GLOW_C,Math.max(h.length,1));g.name="consoleLamps",g.instanceMatrix.setUsage(so),g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!1,n.add(g);const m=f.map(()=>({active:!1,blinkLeft:0,blinkT:0})),p=new Map;f.forEach((L,O)=>{p.set(L.id,O),p.set(L.lamp,O),p.set(L.panel,O),p.set(String(L.panel),O)});let v=0;const M=new Wt,E=new wr,T=new ni,w=new z,S=new z;function R(L,O){return O.blinkLeft>0?(O.blinkLeft&1)===1:O.active?!0:(Math.floor(v/.55)+L.slot)%3===0}function D(L,O){const F=m[O.pi];let I=O.x,P=O.v,U=O.z,Y=O.sy,K=O.rz;if(O.kind==="lamp")U=R(O,F)?Rp:Iy;else if(O.kind==="needle")K=O.rz+O.spin;else if(O.kind==="bar"){const Q=.18+.82*(.5+.5*Math.sin(v*O.rate+O.phase));Y=O.sy*Q,P=O.v+Y/2}T.set(0,0,K),E.setFromEuler(T),w.set(I,P,U),S.set(O.sx,Y,O.sz),M.compose(w,E,S).premultiply(d[O.pi]),g.setMatrixAt(L,M)}function x(){for(let L=0;L<h.length;L++)D(L,h[L]);g.instanceMatrix.needsUpdate=!0}x(),n.userData=n.userData||{};const y=n.userData.collision=n.userData.collision||{planes:[],hulls:[],boxes:[]};y.hulls=y.hulls||[];const A={apothem:et.RIM,y1:1.2};return y.hulls.push(A),{panels:f,setLamp(L,O){const F=p.get(L);F!==void 0&&(m[F].active=!!O)},blink(L,O=1){const F=p.get(L);F!==void 0&&(m[F].blinkLeft=Math.max(1,Math.round(O)*2),m[F].blinkT=0)},update(L){if(L>0){v+=L;for(let O=0;O<m.length;O++){const F=m[O];if(F.blinkLeft>0)for(F.blinkT+=L;F.blinkT>=.085&&F.blinkLeft>0;)F.blinkT-=.085,F.blinkLeft--}for(const O of h)O.kind==="needle"&&(O.spin+=O.rate*L*(m[O.pi].active?3.2:1));x()}},hull:A}}function Af(n,t,e,i){const s=n+Math.cos(Math.PI/2+t)*e;return[Math.min(n,s-i),Math.max(n,s+i)]}const sl=.03,rl=.036,ia=.013;function Tf(n,t,e){const i=Math.cos(t),s=Math.sin(t);if(Math.abs(Math.cos(e)-i)>1e-9||Math.abs(Math.sin(e)-s)>1e-9){const r=((e-t)*180/Math.PI).toFixed(1);console.error(`Console.js: ${n}'s shaft is rotated ${r} degrees away from the direction its own position maths uses — it will be drawn lying where it is placed standing`)}}function ky(n,t,e,i,s,r){let o=1/0;const a=(h,f,d,_)=>console.error(`Console.js: panel ${e.n} ${h} at x ${f.toFixed(3)} v ${d.toFixed(3)} ${_}`),c=(h,f,d,_,g)=>{o=Math.min(o,_),_<cs-1e-9&&a(h,f,d,`overhangs the recess lip (v0 ${_.toFixed(4)} < ${cs})`),g>yr+1e-9&&a(h,f,d,`overhangs the inner lip (v1 ${g.toFixed(4)} > ${yr.toFixed(3)})`)},l=(h,f,d,_,g,m)=>{c(h,f,d,g,m);const p=Math.abs(f)+_;Math.min(ea(p,g),ea(p,m))<-1e-9&&a(h,f,d,"runs off the field")},u=(h,f,d,_)=>{c(h,f,d,d-_,d+_),ea(f,d)<_-1e-9&&a(h,f,d,`runs off the field (clear ${ea(f,d).toFixed(4)} < r ${_})`)};for(const[h,f,d,_={}]of e.ctl)switch(h){case"toggle":case"guarded":{const g=h==="guarded",[m,p]=Af(d,_.tilt,rl,ia),v=g?.0225:.017;l(h,f,d,g?.0265:.017,Math.min(m,d-v),Math.max(p,d+v)),s(n,gn,i.CHROME,f,d,Me+.0025,[.032,.03,.005]);const M=Math.PI/2+_.tilt,E=Math.cos(M),T=Math.sin(M);Tf(h,M,M),s(n,gn,i.CHROME,f,d+E*(sl/2+.004),Me+.005+T*(sl/2+.004),[.008,sl,.008],[M,0,0]),s(n,wf,i.CHROME,f,d+E*rl,Me+.005+T*rl,[ia*2,ia*2,ia*2]),g&&(s(n,gn,i.CHROME,f-.024,d,Me+.02,[.005,.044,.04]),s(n,gn,i.CHROME,f+.024,d,Me+.02,[.005,.044,.04]),s(n,gn,i.CHROME,f,d-.02,Me+.02,[.053,.005,.04]));break}case"button":{u("button",f,d,_.r+.004),s(n,il,i.CHROME,f,d,Me+.004,[_.r*2+.008,.008,_.r*2+.008],[Math.PI/2,0,0]),_.lamp?r.push(ol(t,f,d,_.r*1.55,_.r*1.55,r.length)):s(n,il,i.CHROME,f,d,Me+.012,[_.r*2,.016,_.r*2],[Math.PI/2,0,0]);break}case"dial":{u("dial",f,d,Math.max(_.r+.012,(_.needle||0)/2)),s(n,il,i.CHROME,f,d,Me+.006,[_.r*2,.012,_.r*2],[Math.PI/2,0,0]);const g=_.r+.008;for(let m=0;m<8;m++){const p=m*Math.PI/4;s(n,gn,i.CHROME,f+g*Math.cos(p),d+g*Math.sin(p),Me+.003,[.004,.011,.006],[0,0,p-Math.PI/2])}s(n,Py,i.CHROME,f,d,Me+.016,[_.r*.42,.018,_.r*.42],[Math.PI/2,0,0]),_.needle&&r.push({pi:t,kind:"needle",x:f,v:d,z:Me+.016,sx:.006,sy:_.needle,sz:.005,rz:0,spin:(t*1.7+_.needle*37)%(Math.PI*2),rate:_.rate??.2});break}case"lever":{const g=Math.PI/2+_.lean,m=Math.cos(g),p=Math.sin(g),v=_.big?.038:.03,M=_.big?.03:.022,E=d-Math.sign(m)*(_.slot/2-.012),T=.034,w=.044,S=Me+T/2,R=Me+.024,[D,x]=Af(E,_.lean,_.len+.01,M);l("lever",f,d,Math.max(v,w)/2+.007,Math.min(D,d-_.slot/2,E-w/2),Math.max(x,d+_.slot/2,E+w/2)),s(n,gn,i.DARK,f,d,Me+.0015,[v,_.slot,.003]),s(n,gn,i.CHROME,f,E,S,[v+.02,w,T]),Tf("lever",g,g),s(n,gn,i.CHROME,f,E+m*(_.len/2),R+p*(_.len/2),[_.big?.016:.012,_.len,_.big?.016:.012],[g,0,0]),s(n,wf,i.CHROME,f,E+m*(_.len+.01),R+p*(_.len+.01),[M*2,M*2,M*2]);break}case"bar":{l("bar",f,d,_.w/2+.005,d-.005,d+_.h+.005),Rf(n,i,s,f,d+_.h/2,_.w,_.h);const g=Math.max(1,Math.round(_.w/.052)),m=(_.w-.012)/g;for(let p=0;p<g;p++)r.push({pi:t,kind:"bar",x:f-_.w/2+.006+m*(p+.5),v:d+.004,z:Me+.005,sx:m*.72,sy:_.h-.01,sz:.006,rz:0,rate:.7+p*.23,phase:p*1.7+t});break}case"readout":{l("readout",f,d,_.w/2+.005,d-_.h/2-.005,d+_.h/2+.005),Rf(n,i,s,f,d,_.w,_.h);const g=_.seg??2,m=(_.w-.012)/g;for(let p=0;p<g;p++)r.push({pi:t,kind:"bar",x:f-_.w/2+.006+m*(p+.5),v:d-_.h/2+.005,z:Me+.005,sx:m*.66,sy:_.h-.012,sz:.006,rz:0,rate:1.4+p*.6+t*.11,phase:p*2.3+t*.8});break}case"lamps":{for(let g=0;g<_.n;g++){const m=f+g*_.pitch;l("lamp",m,d,.02,d-.016,d+.016),s(n,gn,i.CHROME,m,d,Me+$r/2,[.04,.032,$r]),r.push(ol(t,m,d,.03,.022,r.length))}break}case"column":{for(let g=0;g<_.n;g++){const m=d+g*_.pitch;l("column lamp",f,m,.017,m-.012,m+.012),s(n,gn,i.CHROME,f,m,Me+$r/2,[.034,.024,$r]),r.push(ol(t,f,m,.024,.015,r.length))}break}default:console.error(`Console.js: panel ${e.n} has an unknown control kind '${h}'`)}return o}function Rf(n,t,e,i,s,r,o){const c=Me+.003;e(n,gn,t.CHROME,i,s+o/2,c,[r+.005*2,.005,.007]),e(n,gn,t.CHROME,i,s-o/2,c,[r+.005*2,.005,.007]),e(n,gn,t.CHROME,i-r/2-.005/2,s,c,[.005,o,.007]),e(n,gn,t.CHROME,i+r/2+.005/2,s,c,[.005,o,.007])}function ol(n,t,e,i,s,r){return{pi:n,kind:"lamp",x:t,v:e,z:Rp,sx:i,sy:s,sz:gu,rz:0,slot:r}}const zy=1/Math.cos(Math.PI/6),zr={y0:1.16,y1:1.32,apothem:.56},Br={y0:2.36,y1:2.48,apothem:.3},Dn={y0:1.32,y1:2.36,r:.26,segments:24},By=.008,ze={y0:1.4,y1:2.32,h:.62,r:.2,ringR:.214,ringH:.03,pistonR:.038,pistonH:.42},Hy=ze.y1-ze.y0-ze.h,al=ze.y0+ze.h/2,Gy=ze.y1-ze.h/2,Hr={count:6,radius:.31,section:.028},Vy=3.2,Wy=1.6,qy=2.4;function Lf(n,t){const e=n*zy,i=new Qt(e,e,t,6,1,!1,et.HEX_THETA).toNonIndexed();return i.computeVertexNormals(),i}function Xy(n){const t=n.getIndex();for(let i=0;i<t.count;i+=3){const s=t.getX(i+1);t.setX(i+1,t.getX(i+2)),t.setX(i+2,s)}t.needsUpdate=!0;const e=n.getAttribute("normal");for(let i=0;i<e.count;i++)e.setXYZ(i,-e.getX(i),-e.getY(i),-e.getZ(i));return e.needsUpdate=!0,n}function Yy(n,t){xo(t.GLASS);const e=Dn.y1-Dn.y0,i=(Dn.y0+Dn.y1)/2,s=new It(new Qt(Dn.r,Dn.r,e,Dn.segments,1,!0),t.GLASS);if(s.position.y=i,n.add(s),t.GLASS.side===ei){const r=Dn.r-By,o=new It(Xy(new Qt(r,r,e,Dn.segments,1,!0)),t.GLASS);o.position.y=i,n.add(o)}}function $y(n){const t=new _e,e=ze.h/3,i=e-ze.ringH,s=new Qt(ze.ringR,ze.ringR,ze.ringH,20,1,!1),r=new Qt(ze.r,ze.r,i,20,1,!1);for(let c=0;c<3;c++){const l=-.31+c*e,u=new It(s,n.CHROME);u.position.y=l+ze.ringH/2,t.add(u);const h=new It(r,n.GLOW_C);h.position.y=l+ze.ringH+i/2,t.add(h)}const o=new It(new Qt(ze.pistonR,ze.pistonR,ze.pistonH,12,1,!1),n.CHROME);o.position.y=-.62/2-ze.pistonH/2,t.add(o);const a=ec(t);return a.name="rotorCarriage",a}function jy(n,t,e={}){const i=e.period??Vy,s=e.stroke??Hy,r=Math.PI*2/i;if(e.collar!==!1){const g=new It(Lf(zr.apothem,zr.y1-zr.y0),t.CONSOLE);g.position.y=(zr.y0+zr.y1)/2,n.add(g)}Yy(n,t);const o=new sn(Hr.section,Dn.y1-Dn.y0,Hr.section);for(let g=0;g<Hr.count;g++){const m=et.HEX_THETA+g*Math.PI/3,p=new It(o,t.DAIS);p.position.set(Math.sin(m)*Hr.radius,(Dn.y0+Dn.y1)/2,Math.cos(m)*Hr.radius),p.rotation.y=m,n.add(p)}if(e.cap!==!1){const g=new It(Lf(Br.apothem,Br.y1-Br.y0),t.CONSOLE);g.position.y=(Br.y0+Br.y1)/2,n.add(g)}n.interactables.some(g=>g.id==="rotor")||n.interact("rotor","Time Rotor",0,1.84,0,"rotor",{},2.4);const a=new _e;a.name="timeRotor";const c=$y(t);a.add(c);let l=e.running?1:0,u=l,h=l,f=0,d=al+s*h*.5*(1-Math.cos(f));c.position.y=d;function _(g){g>0&&(g>.1&&(g=.1),u>l?l=Math.min(1,l+g/Wy):u<l&&(l=Math.max(0,l-g/qy)),h=l*l*(3-2*l),l===0?f=0:f=(f+r*(.45+.55*h)*g)%(Math.PI*2),d=al+s*h*.5*(1-Math.cos(f)),c.position.y=d)}return{group:a,setRunning(g){u=g?1:0},update:_,get height(){return d},get drive(){return h},get running(){return u===1},parked:al,apex:Gy}}const $e=(et==null?void 0:et.BAY_CENTRE)??2.362686,jr=(et==null?void 0:et.BAY_W)??1.4,ws=(et==null?void 0:et.BAY_D)??.34,Bn=(et==null?void 0:et.BAY_H)??2.2;et==null||et.CANT_LEN;const ur=jr/2,hr=ws/2,Cf={scanner:{x:$e,z:$e,rotY:-2.356194},fault:{x:-$e,z:$e,rotY:2.356194},food:{x:$e,z:-$e,rotY:-.785398}},as=hr,Jn=.05,If=.052,Ky=.076,P0=.095,cl=.6,D0=.78,Pf=.018,Zy=.35,Jy=1.2,O0=1.785,bs=8,ka=6,Cp=.1375,Ip=.15,Qy=.02,Pp=1.55,co=bs*ka,t2=4,e2=2,n2=0,i2=1,s2=2,r2=3,o2=co,a2=co+1,c2=co+2,l2=n=>n*n*(3-2*n),Ge={unitBox:Df(new sn(1,1,1)),unitDisc:Df(new Rs(1,20)),rotary:new Qt(.034,.038,.03,12),rotaryCap:new Qt(.012,.012,.014,8),pilot:new Qt(.014,.014,.01,10),hook:new Qt(.009,.009,.1,8),hookBall:new ki(.016,8,6),finial:new ki(.044,10,8),standBase:new Qt(.12,.28,.045,16),standTaper:new Qt(.046,.12,.16,12),standPole:new Qt(.028,.034,1.42,12),standCollar:new Qt(.056,.056,.052,12),hatCrown:new Qt(.088,.094,.105,12),hatBrim:new Qt(.15,.15,.012,16),dial:new Qt(.128,.128,.022,20),clockFinial:new Qt(.024,.034,.052,10),packet:new Qt(.028,.028,.11,8)};function Df(n){const t=n.attributes.position.count;return n.setAttribute("color",new he(new Float32Array(t*3).fill(1),3)),n}function kt(n,t,e,i,s,r,o,a,c={}){const l=new It(c.chamfer===0?new sn(Math.max(e,.001),Math.max(i,.001),Math.max(s,.001)):Ls(e,i,s,c.chamfer??.003),t);return l.position.set(r,o,a),c.rotX&&(l.rotation.x=c.rotX),c.rotY&&(l.rotation.y=c.rotY),c.rotZ&&(l.rotation.z=c.rotZ),l.receiveShadow=!0,n.add(l),l}function Je(n,t,e,i,s,r,o={}){const a=new It(t,e);return a.position.set(i,s,r),o.rotX&&(a.rotation.x=o.rotX),o.rotY&&(a.rotation.y=o.rotY),o.rotZ&&(a.rotation.z=o.rotZ),o.scale&&a.scale.set(o.scale[0],o.scale[1],o.scale[2]),a.receiveShadow=!0,n.add(a),a}function Mu(n,t,e,i,s,r,o,a,c){const l=c-a/2;kt(n,t,e,o,a,s,r+i/2-o/2,l,{chamfer:.002}),kt(n,t,e,o,a,s,r-i/2+o/2,l,{chamfer:.002});const u=i-o*2;kt(n,t,o,u,a,s-e/2+o/2,r,l,{chamfer:.002}),kt(n,t,o,u,a,s+e/2-o/2,r,l,{chamfer:.002})}function yu(n,t,e){kt(n,t.DAIS,jr-.06,.1,ws-.06,0,.05,0,{chamfer:.004}),kt(n,t.CONSOLE,jr,Bn-.1,.06,0,1.15,-hr+.03);for(const a of[-1,1])kt(n,t.CONSOLE,.11,Bn-.1,ws,a*(ur-.055),1.15,0,{chamfer:.005});kt(n,t.CONSOLE,jr,.03,ws,0,Bn-.015,0,{chamfer:.005});const i=jr-.22,s=(as+Jn)/2,r=as-Jn;let o=.1;for(const a of e){a[0]>o+.001&&kt(n,t.CONSOLE,i,a[0]-o,r,0,(o+a[0])/2,s,{chamfer:.004});const c=a[2]??Jn;if(kt(n,t.DARK,i,a[1]-a[0],.014,0,(a[0]+a[1])/2,c-.007,{chamfer:0}),c<Jn-.001){const l=Jn-c;for(const u of[-1,1])kt(n,t.DARK,.014,a[1]-a[0],l,u*(i/2-.007),(a[0]+a[1])/2,c+l/2,{chamfer:0});for(const u of[-1,1])kt(n,t.DARK,i,.014,l,0,a[u>0?1:0]-u*.007,c+l/2,{chamfer:0})}o=a[1]}return o<Bn-.031&&kt(n,t.CONSOLE,i,Bn-.03-o,r,0,(o+Bn-.03)/2,s,{chamfer:.004}),{innerW:i,zA:s,dA:r}}function Dp(n,t,e,i,s){return kt(n,t.PANEL,e,i,.016,0,s,as-.028,{chamfer:.003})}function u2(n,t){yu(n,t,[[1.4,2.17]]),Mu(n,t.CHROME,1.16,.75,0,1.795,.03,.024,Ky);const e=.962,i=e-ur,s=.245,r=1.34;for(const a of[-1,1]){const c=a*(ur+i/2);kt(n,t.DAIS,i-.03,.1,ws-.06,c,.05,0,{chamfer:.004}),kt(n,t.CONSOLE,i,r-.1,ws,c,(.1+r)/2,0,{chamfer:.005}),kt(n,t.CONSOLE,i,Bn-r,s,c,(r+Bn)/2,-hr+s/2,{chamfer:.005})}kt(n,t.CONSOLE,e*2,.03,ws,0,Bn+.015,0,{chamfer:.005});for(const a of[-1,1])kt(n,t.CHROME,e*2-.012,.016,.022,0,O0+a*(D0/2+.012),P0,{chamfer:.002});const o=new _e;o.position.set(0,1.07,.118),o.rotation.x=-.436,n.add(o),kt(o,t.PANEL,1.18,.2,.02,0,0,0,{chamfer:.004});for(let a=0;a<3;a++){const c=-.36+a*.36;Je(o,Ge.rotary,t.CHROME,c,.03,.025,{rotX:Math.PI/2}),Je(o,Ge.rotaryCap,t.CHROME,c,.03,.046,{rotX:Math.PI/2})}for(let a=0;a<2;a++){const c=-.18+a*.36;kt(o,t.DARK,.07,.034,.014,c,-.052,.014,{chamfer:.002}),kt(o,t.CHROME,.018,.04,.014,c,-.046,.016,{rotZ:.35,chamfer:.002})}for(const a of[-1,1])Je(o,Ge.pilot,t.GLOW_C,a*.52,.03,.014,{rotX:Math.PI/2})}function h2(n,t){yu(n,t,[[1.1,2.06]]);const e=Pp,i=Jn+.008;for(let s=0;s<=bs-2;s++)kt(n,t.CHROME,.006,.9,.016,(s-3)*Cp,e,i,{chamfer:0});for(let s=0;s<=ka-2;s++)kt(n,t.CHROME,1.1,.006,.016,0,e+(s-2)*Ip,i,{chamfer:0});Mu(n,t.CHROME,1.16,.96,0,e,.028,.02,Jn+.02),Dp(n,t,1.18,.14,1.03),kt(n,t.DARK,.9,.05,.02,0,1.05,as-.04,{chamfer:0}),kt(n,t.CHROME,.94,.014,.024,0,1.016,as-.018,{chamfer:.002});for(let s=0;s<6;s++)kt(n,t.DAIS,.15,.036,.014,-.475+s*.19,2.115,as-.02,{chamfer:.002})}function f2(n,t){yu(n,t,[[.74,.98,0],[1.27,1.93,-.1]]),kt(n,t.DAIS,.47,.014,.17,0,.793,.082,{chamfer:.002}),kt(n,t.DAIS,.47,.03,.014,0,.812,.15,{chamfer:.002}),kt(n,t.DARK,.44,.04,.016,0,.95,Jn-.03,{chamfer:0}),kt(n,t.CHROME,.48,.014,.02,0,.926,Jn-.014,{chamfer:.002}),Dp(n,t,1.18,.2,1.2);for(let i=0;i<4;i++)for(let s=0;s<3;s++)kt(n,t.CHROME,.09,.028,.014,-.4125+i*.275,1.14+s*.05,as-.013,{chamfer:.002});const e=new It(new vi(.9,.6),t.GLASS);e.position.set(0,1.6,.1),e.receiveShadow=!0,n.add(e),Mu(n,t.CHROME,.96,.66,0,1.6,.03,.026,.126);for(const i of[1.42,1.68]){kt(n,t.DAIS,.86,.014,.18,0,i,0,{chamfer:0});for(let s=0;s<3;s++)Je(n,Ge.packet,t.DAIS,-.26+s*.26,i+.062,.01)}for(let i=0;i<5;i++)kt(n,t.DAIS,.6,.014,.02,0,2.01+i*.03,as-.016,{rotX:-.35,chamfer:0})}function d2(n,t){Je(n,Ge.standBase,t.JOINERY,0,.0225,0),Je(n,Ge.standTaper,t.JOINERY,0,.125,0),Je(n,Ge.standPole,t.JOINERY,0,.915,0),Je(n,Ge.standCollar,t.JOINERY,0,1.62,0),Je(n,Ge.finial,t.JOINERY,0,1.676,0);for(let i=0;i<4;i++){const s=new _e;s.rotation.y=Math.PI/4+i*Math.PI/2,n.add(s),Je(s,Ge.hook,t.CHROME,0,1.64,.075,{rotX:1.05}),Je(s,Ge.hookBall,t.CHROME,0,1.665,.118)}const e=new _e;e.position.set(.098,1.612,.098),e.rotation.set(.3,Math.PI/4,.1),n.add(e),Je(e,Ge.hatCrown,t.JOINERY,0,.052,0),Je(e,Ge.hatBrim,t.JOINERY,0,.006,0)}function p2(n,t){kt(n,t.JOINERY,.56,.055,.52,0,.44-.028,.02,{chamfer:.008});for(const i of[-1,1])kt(n,t.JOINERY,.05,.44-.055,.05,i*.255,(.44-.055)/2,.23,{chamfer:.005}),kt(n,t.JOINERY,.052,1.15,.052,i*.255,.575,-.222,{rotX:-.06,chamfer:.005});kt(n,t.JOINERY,.46,.52,.038,0,.81,-.202,{rotX:-.06,chamfer:.006}),kt(n,t.JOINERY,.59,.105,.062,0,1.098,-.24,{rotX:-.06,chamfer:.008});for(let i=0;i<3;i++)for(let s=0;s<2;s++)Je(n,Ge.rotaryCap,t.CHROME,-.14+i*.14,.72+s*.18,-.18+(.72+s*.18-.81)*.06,{rotX:Math.PI/2-.06});kt(n,t.JOINERY,.56,.07,.04,0,.377,.255,{chamfer:.004}),kt(n,t.JOINERY,.5,.028,.028,0,.15,.03,{chamfer:.003})}function m2(n,t){kt(n,t.JOINERY,.52,.06,.42,0,.03,0,{chamfer:.006}),kt(n,t.JOINERY,.44,.63,.34,0,.375,0,{chamfer:.005}),kt(n,t.JOINERY,.52,.06,.42,0,.72,0,{chamfer:.006}),kt(n,t.JOINERY,.36,.48,.24,0,.99,0,{chamfer:.006}),kt(n,t.JOINERY,.4,.07,.28,0,1.265,0,{chamfer:.006}),Je(n,Ge.clockFinial,t.JOINERY,0,1.326,0),Je(n,Ge.dial,t.CHROME,0,1.01,.125,{rotX:Math.PI/2}),kt(n,t.DARK,.014,.088,.01,0,1.048,.14,{chamfer:0}),kt(n,t.DARK,.062,.012,.01,.025,1.01,.14,{rotZ:.35,chamfer:0});for(const e of[-1,1])Je(n,Ge.rotaryCap,t.CHROME,e*.19,1.265,.1)}const Gr=new Wt,_2=new Wt,g2=new z;function Ks(n,t,e,i,s,r,o,a,c,l=0){l?(Gr.makeRotationX(l),Gr.scale(g2.set(o,a,c))):Gr.makeScale(o,a,c),Gr.setPosition(i,s,r),n.setMatrixAt(t,_2.multiplyMatrices(e,Gr))}const Op=[];for(let n=0;n<ka;n++)for(let t=0;t<bs;t++)Op.push({x:(t-(bs-1)/2)*Cp,y:Pp+(n-(ka-1)/2)*Ip});const Zs=.001,x2=n=>Math.imul(n+1,2654435761)>>>0;function v2(n,t,e){const i=x2(n);if(e){const s=n%bs,r=Math.floor(t*9)%bs;return s===r||s===(r+4)%bs?!0:(i>>>(Math.floor(t*6)&15)&1)===1}return((i>>>3)+Math.floor(t/.9))%11<2}function M2(n,t){const e=t||yp(),i={};for(const x of Object.keys(Cf)){const y=Cf[x],A=new _e;A.name=`bay.${x}`,A.position.set(y.x,0,y.z),A.rotation.y=y.rotY,n.add(A),i[x]=new Wt().makeRotationY(y.rotY).setPosition(y.x,0,y.z),x==="scanner"?u2(A,e):x==="fault"?h2(A,e):f2(A,e)}const s=[{name:"hatStand",x:-1.525,z:-2.6413,rotY:0,build:d2},{name:"chair",x:-2.5115,z:-1.45,rotY:1.047198,build:p2},{name:"clock",x:-2.192,z:-2.192,rotY:.785398,build:m2}];for(const x of s){const y=new _e;y.name=x.name,y.position.set(x.x,0,x.z),y.rotation.y=x.rotY,n.add(y),x.build(y,e)}const r=new _e;r.name="fittings.live";const o=new It(new vi(1.1,.72),new li({color:855826,toneMapped:!1}));o.name="scannerScreen",o.matrixAutoUpdate=!1,o.matrix.copy(i.scanner).multiply(new Wt().setPosition(0,1.8,If+.01)),o.matrixWorldNeedsUpdate=!0,r.add(o);const a=new Da(Ge.unitBox,e.DARK,r2),c=new Da(Ge.unitDisc,e.GLOW_C,c2);for(const x of[a,c])x.instanceMatrix.setUsage(so),x.frustumCulled=!1,x.castShadow=!1,x.receiveShadow=!0,r.add(x);let l=0,u=0,h=!0,f=-1,d=-1,_=0;const g=new Uint8Array(co).fill(255);function m(){const x=l2(l)*Zy;Ks(a,n2,i.scanner,-.3-x,O0,P0,cl,D0,Pf),Ks(a,i2,i.scanner,cl/2+x,O0,P0,cl,D0,Pf);const y=h?Zs:1;Ks(a,s2,i.scanner,0,1.8,If+.006,1.1*y,.72*y,.006),a.instanceMatrix.needsUpdate=!0}function p(){const x=d>=0&&d<.9&&(Math.floor(d*14)&1)===0;Ks(c,o2,i.food,0,.95,Jn-.018,x?.22:Zs,x?.014:Zs,1);const y=d;let A=-1;if(y>=.15&&y<1.75){const O=Math.min((y-.15)/.4,1);A=.945+(.805-.945)*(O*O)}const L=A>0;Ks(c,a2,i.food,0,L?A:.805,.07,L?.05:Zs,L?.013:Zs,1,-Math.PI/2)}function v(x){const y=f>=0;let A=x;for(let L=0;L<co;L++){const O=v2(L,_,y)?1:0;if(O===g[L]&&!x)continue;g[L]=O;const F=Op[L],I=O?Qy:Zs;Ks(c,L,i.fault,F.x,F.y,Jn+.006,I,I,1),A=!0}return A}m(),p(),v(!0),c.instanceMatrix.needsUpdate=!0;const M=n.userData.collision||(n.userData.collision={planes:[],hulls:[],boxes:[]});M.boxes||(M.boxes=[]),M.boxes.push({x:$e,z:$e,hw:ur,hd:hr,rotY:-2.356194,y0:0,y1:Bn},{x:-$e,z:$e,hw:ur,hd:hr,rotY:2.356194,y0:0,y1:Bn},{x:$e,z:-$e,hw:ur,hd:hr,rotY:-.785398,y0:0,y1:Bn},{x:-1.525,z:-2.6413,hw:.28,hd:.28,rotY:3.665191,y0:0,y1:1.72},{x:-2.5115,z:-1.45,hw:.31,hd:.34,rotY:1.047198,y0:0,y1:1.15},{x:-2.192,z:-2.192,hw:.25,hd:.2,rotY:.785398,y0:0,y1:1.35}),$s(n,$e,$e,0,1.1,1.1,{margin:.06}),$s(n,-$e,$e,0,1.1,1.1,{margin:.06}),$s(n,$e,-$e,0,1.1,1.1,{margin:.06}),$s(n,-2.192,-2.192,0,.58,.58,{margin:.05}),$s(n,-1.525,-2.6413,0,.56,.56,{margin:.08}),$s(n,-2.5115,-1.45,0,.66,.66,{margin:.05});const E=[["scanner","Scanner",2.242455,1.8,2.242455,1.535348,1.535348,1.2],["faultLocator","Fault Locator",-2.242455,1.55,2.242455,-1.535348,1.535348,1.2],["foodMachine","Food Machine",2.242455,1.2,-2.242455,1.535348,-1.535348,1.2],["hatStand","Hat Stand",-1.385,1.55,-2.3988,-.935,-1.619,1.05],["chair","Chair",-2.2171,.45,-1.28,-1.438,-.83,1.05],["clock","Ormolu Clock",-2.050579,1.1,-2.050579,-1.414182,-1.414183,1.05]];for(const[x,y,A,L,O,F,I,P]of E)n.spot(x,F,0,I),n.interact(x,y,A,L,O,x,{},P);function T(x){u=x?1:0}function w(x){h=!!x,o.visible=h,m()}function S(){f=0}function R(){d=0}function D(x){const y=Math.min(Math.max(x||0,0),.1);if(_+=y,l!==u){const A=y/Jy;l=u>l?Math.min(u,l+A):Math.max(u,l-A),m()}f>=0&&(f+=y,f>=t2&&(f=-1)),v(!1)&&(c.instanceMatrix.needsUpdate=!0),d>=0&&(d+=y,d>=e2&&(d=-1),p(),c.instanceMatrix.needsUpdate=!0)}return{group:r,screen:o,setShutters:T,setScanner:w,pulseFault:S,dispense:R,update:D,get shuttersOpen(){return u===1},get scannerOn(){return h},get faultRunning(){return f>=0}}}const y2=n=>.6*Math.pow(n/100,.6),Np={candle1900:16764860,cool5000:16774121},Up={fov:-6,rate:2.6},Of=16,Fp=600,Su=y2(Fp),kp=.9,Eu=et.CEIL_H-.15,sc=2*Math.hypot(et.CORNER_X,et.STRUCT_FACE),Nf=Su*(Eu-kp)**2/.88,zp=.22*Su*(sc/2),Bp=2.2*(sc/2),Hp=sc,za=2.8469,N0=zp/2,ya=1.2,Gp=2.6,Vp=2.2,S2=1.84,ll=[0,1.1,2.7],E2=3.4,w2=2.1,b2=15265525,Uf=2.8,Ff=3.2,U0=16776681,F0=Np.cool5000,A2=13625599,T2=Object.freeze({lux:Fp,E:Su,planeY:kp,keyY:Eu,diagonal:sc,keyRef:Nf,key:za,keyShare:za/Nf,fillTotal:zp,fill:N0,keyDist:Bp,fillDist:Hp,keyColour:F0,fillColour:U0,rotorIdle:ya,rotorFlight:Gp,rotorDist:Vp}),Gn=Object.freeze({hemisphere:Object.freeze({sky:16773344,ground:8092794,intensity:.5955}),ambient:Object.freeze({colour:16774116,intensity:.3767}),bounce:null,fog:null,shadows:!1,background:1316634,toneMapping:"ACESFilmicToneMapping",toneMappingExposure:1.4,outputColorSpace:"SRGBColorSpace",camera:Object.freeze({fov:64+Up.fov,near:.2,far:60})}),lo=.21,wu=.06,bu=24,k0=et.CEIL_H-wu,R2=k0+.0015,L2=new Qt(lo,lo,wu,bu,1,!0),C2=new Za(lo-.025,lo,bu),I2=new Rs(lo-.025,bu),kf=Math.PI/2,Ba=n=>Math.abs(n)<1e-9?0:Math.round(n*1e9)/1e9,Ha=[];for(let n=0;n<4;n++){const t=n*Math.PI/2;Ha.push([Ba(Math.sin(t)*Uf),Ba(Math.cos(t)*Uf)])}for(let n=0;n<4;n++){const t=Math.PI/4+n*Math.PI/2;Ha.push([Ba(Math.sin(t)*Ff),Ba(Math.cos(t)*Ff)])}const zf=.02,Bf=4,Wp=Up.rate,P2=3.2,D2=.05,O2=1.4,N2=.4,Hf=.55,U2=.25,F2=.6;function k2(n,t,e){const i=Math.min(1,e*Wp);return n<=1e-6?t*i:n*Math.pow(t/n,i)}function z2(n,t,e={}){if(!t||!t.CHROME||!t.GLOW_W)throw new Error("lighting(): needs the palette from src/engine/roundels.js (P.CHROME and P.GLOW_W). Call palette() first, or use buildLighting(b).");const i=[];for(const[D,x]of Ha){const y=new It(L2,t.CHROME);y.position.set(D,k0+wu/2,x),y.name="panTube",i.push(n.add(y));const A=new It(C2,t.CHROME);A.position.set(D,k0,x),A.rotation.x=kf,A.name="panBezel",i.push(n.add(A));const L=new It(I2,t.GLOW_W);L.position.set(D,R2,x),L.rotation.x=kf,L.name="panFace",i.push(n.add(L))}const s=Ha.map(([D,x],y)=>{const A=n.light(D,Eu,x,F0,za,Bp);return A.name=`key${y}`,A}),r=new ro(U0,N0,Hp,1);r.position.set(0,1.1,0),r.name="fill",n.group.add(r),n.lights.push(r);const o=n.light(0,S2,0,A2,ya,Vp);o.name="rotorPractical";const a=n.light(ll[0],ll[1],ll[2],b2,0,E2);a.name="doorSpill",n.lights.length>Of&&console.warn(`lighting(): ${n.lights.length} fixtures against POOL_SIZE ${Of}; the room is planned for 10 and the count is meant to be frozen.`);const c=t.GLOW_W.emissiveIntensity??1;let l=sa(e.level??1,zf,Bf),u=l,h=sa(e.rotorDrive??0,0,1),f=h,d=0,_=0,g=0,m=0,p=6,v=0,M=0;const E=new Ut(F0),T=new Ut(U0),w=new Ut(Np.candle1900),S=new Ut;function R(){const D=d>0?1-N2*d*(.5-.5*Math.cos(2*Math.PI*M/O2)):1,x=l*D;for(const A of s)A.intensity=za*x,d>0?A.color.copy(S.copy(E).lerp(w,Hf*d)):A.color.copy(E);r.intensity=N0*x,d>0?r.color.copy(S.copy(T).lerp(w,Hf*d)):r.color.copy(T);const y=h>0?1+D2*h*Math.sin(2*Math.PI*M/P2):1;o.intensity=(ya+(Gp-ya)*h)*l*y,a.intensity=w2*v,m>0&&(t.GLOW_W.emissiveIntensity=c*(1+m*Math.sin(2*Math.PI*M/p)))}return R(),{keys:s,fill:r,rotor:o,spill:a,pans:i,plan:T2,scene:Gn,get level(){return l},setLevel(D){u=sa(D,zf,Bf)},setRotorDrive(D){f=sa(D,0,1)},setDoorSpill(D){v=D>0?D<1?D:1:0},setDoorSpillColour(D){return D!=null&&a.color.set(D),this},setAlert(D){_=D?1:0,g=D?1/0:0},pulseAlert(D=4){_=1,g=D},setGlowBreath(D,x=6){m=Math.max(0,Math.min(.6,D||0)),p=Math.max(.5,x),m===0&&(t.GLOW_W.emissiveIntensity=c)},update(D){const x=Math.min(Math.max(D||0,0),.25);M+=x,g!==1/0&&g>0&&(g-=x,g<=0&&(g=0,_=0)),l=k2(l,u,x),Math.abs(l-u)<1e-4&&(l=u),h+=(f-h)*Math.min(1,x*Wp),Math.abs(h-f)<1e-4&&(h=f);const y=_>d?x/U2:x/F2;d+=Math.sign(_-d)*Math.min(Math.abs(_-d),y),R()},dispose(){t.GLOW_W.emissiveIntensity=c}}}function sa(n,t,e){return n<t?t:n>e?e:n}const Ae={RADIUS:.34,HEIGHT:1.75,EYE:1.62,STEP:.42,GRAVITY:22,SPEED:2.6,RUN:4.2},B2=14,H2=3,Gf=.0022,Vf=Math.PI/2-.05,G2=.72,V2=6,W2=.06,q2=.1,X2=1500,Sa=[];for(let n=0;n<6;n++){const t=n*Math.PI/3;Sa.push({nx:Math.sin(t),nz:Math.cos(t)})}const Qi=[],z0={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],interact:["KeyE"]},Y2=new Set(Object.values(z0).flat());function Au(n,t,e,i={}){const s=i.radius??Ae.RADIUS,r=i.y??0,o=i.height??Ae.HEIGHT,a=i.onPush||null;let c=0;const l=(n==null?void 0:n.planes)||Qi;for(let f=0;f<l.length;f++){const d=l[f],_=t*d.nx+e*d.nz,g=d.d-s;if(_<=g)continue;const m=_-g;t-=d.nx*m,e-=d.nz*m,c++,a&&a(-d.nx,-d.nz)}const u=(n==null?void 0:n.hulls)||Qi;for(let f=0;f<u.length;f++){const d=u[f],_=d.y0??0;if(r+o<=_||r>=d.y1)continue;let g=0,m=-1/0;for(let E=0;E<6;E++){const T=t*Sa[E].nx+e*Sa[E].nz;T>m&&(m=T,g=E)}const p=d.apothem+s;if(m>=p)continue;const v=Sa[g],M=p-m;t+=v.nx*M,e+=v.nz*M,c++,a&&a(v.nx,v.nz)}const h=(n==null?void 0:n.boxes)||Qi;for(let f=0;f<h.length;f++){const d=h[f],_=d.y0??0;if(r+o<=_||r>=d.y1)continue;const g=Math.cos(d.rotY),m=Math.sin(d.rotY),p=t-d.x,v=e-d.z,M=p*g-v*m,E=p*m+v*g,T=d.hw+s,w=d.hd+s,S=T-Math.abs(M),R=w-Math.abs(E);if(S<=0||R<=0)continue;let D=0,x=0,y;S<R?(D=M>=0?1:-1,y=S):(x=E>=0?1:-1,y=R);const A=D*g+x*m,L=-D*m+x*g;t+=A*y,e+=L*y,c++,a&&a(A,L)}return{x:t,z:e,contacts:c}}function $2(n,t,e,i={}){const s=(i.radius??Ae.RADIUS)-(i.tolerance??W2);return Au(n,t,e,{radius:s,y:i.y,height:i.height}).contacts>0}class j2{constructor(t,e,i={}){var c,l;this.camera=t,this.build=e,this.dom=i.dom||(typeof document<"u"?document.body:null),this.collision=((c=e==null?void 0:e.userData)==null?void 0:c.collision)||null,this.collision||(console.warn("[walker] build.userData.collision is missing — the player will walk through the walls. Shell.js publishes it (CONSOLEROOM.md §8.7)."),this.collision={planes:Qi,hulls:Qi,boxes:Qi}),this.position=new z,this.velocity=new z,this.yaw=0,this.pitch=0,this.onGround=!0,this.horizontalSpeed=0,this.prompt=null,this.driveCamera=!0,this._locked=!1,this._lockPending=!1,this._lockTimer=0,this._down=new Set,this._pressed=new Set,this._mouseDX=0,this._mouseDY=0,this._target=null,this._targetLabel=null,this._interactFns=[],this._pauseFns=[],this._bob=0,this._lastSafe=new z,this._warnedFloor=!1,this._fwd=new z,this._dir=new z,this._killInto=(u,h)=>{const f=this.velocity.x*u+this.velocity.z*h;f<0&&(this.velocity.x-=u*f,this.velocity.z-=h*f)};const s=i.spawn||((l=e==null?void 0:e.spots)==null?void 0:l.spawn)||et.SPAWN,r=s.x??s[0]??0,o=s.y??s[1]??0,a=s.z??s[2]??0;this.teleport(r,o,a,i.yaw??et.SPAWN_YAW),this._attach()}_attach(){var t;typeof window>"u"||(this._h={keydown:e=>{e.repeat||(this._locked&&Y2.has(e.code)&&e.preventDefault(),this._down.add(e.code),this._pressed.add(e.code))},keyup:e=>this._down.delete(e.code),blur:()=>this._clearHeld(),focus:()=>this._clearHeld(),visibility:()=>{document.hidden&&this._clearHeld()},mousemove:e=>{this._locked&&(this._mouseDX+=e.movementX,this._mouseDY+=e.movementY)},mousedown:e=>{this._pressed.add("Mouse"+e.button),this._down.add("Mouse"+e.button)},mouseup:e=>this._down.delete("Mouse"+e.button),domdown:()=>{this._locked||this.requestLock()},lockchange:()=>{this._settleLock(),this._setLocked(document.pointerLockElement===this.dom)},lockerror:e=>this._failLock(e)},window.addEventListener("keydown",this._h.keydown),window.addEventListener("keyup",this._h.keyup),window.addEventListener("blur",this._h.blur),window.addEventListener("focus",this._h.focus),document.addEventListener("visibilitychange",this._h.visibility),window.addEventListener("mousemove",this._h.mousemove),window.addEventListener("mousedown",this._h.mousedown),window.addEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.addEventListener("mousedown",this._h.domdown),document.addEventListener("pointerlockchange",this._h.lockchange),document.addEventListener("pointerlockerror",this._h.lockerror))}dispose(){var t;this._settleLock(),!(typeof window>"u"||!this._h)&&(window.removeEventListener("keydown",this._h.keydown),window.removeEventListener("keyup",this._h.keyup),window.removeEventListener("blur",this._h.blur),window.removeEventListener("focus",this._h.focus),document.removeEventListener("visibilitychange",this._h.visibility),window.removeEventListener("mousemove",this._h.mousemove),window.removeEventListener("mousedown",this._h.mousedown),window.removeEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.removeEventListener("mousedown",this._h.domdown),document.removeEventListener("pointerlockchange",this._h.lockchange),document.removeEventListener("pointerlockerror",this._h.lockerror),this._h=null,this._interactFns.length=0,this._pauseFns.length=0,this._locked&&this.releaseLock())}get locked(){return this._locked}get paused(){return!this._locked}get stepPhase(){return this._bob}onPause(t){return t&&this._pauseFns.push(t),this}requestLock(){var e,i;if(this._locked||this._lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this._lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this._lockPending=!1},X2);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=t==null?void 0:t.catch)==null||i.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this._setLocked(!1),typeof document<"u"&&((t=document.exitPointerLock)==null||t.call(document))}_settleLock(){this._lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this._lockPending;this._settleLock(),e&&(this._setLocked(!1),console.warn("[walker] pointer lock refused; staying paused",t||""))}_setLocked(t){if(this._locked!==t){this._locked=t,this._clearHeld(),t||this._setTarget(null);for(const e of this._pauseFns)e(!t)}}_clearHeld(){this._down.clear(),this._pressed.clear(),this._mouseDX=0,this._mouseDY=0}_isDown(t){return z0[t].some(e=>this._down.has(e))}_wasPressed(t){return z0[t].some(e=>this._pressed.has(e))}update(t){if(t=Math.min(t,q2),!(t>0)){this._pressed.clear();return}if(this._locked&&(this.yaw-=this._mouseDX*Gf,this.pitch-=this._mouseDY*Gf,this.pitch=Math.max(-Vf,Math.min(Vf,this.pitch))),this._mouseDX=0,this._mouseDY=0,this._locked?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this._applyGravity(t)),this.driveCamera&&this._commitCamera(t),this._updateTarget(),this._target&&(this._wasPressed("interact")||this._pressed.has("Mouse0"))){const e=this._target;for(const i of this._interactFns)i(e)}this._pressed.clear()}_move(t){let e=0,i=0;this._isDown("forward")&&(i+=1),this._isDown("back")&&(i-=1),this._isDown("right")&&(e+=1),this._isDown("left")&&(e-=1);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this._dir.set(r*i+-o*e,0,o*i+r*e);a.lengthSq()>0&&a.normalize();const c=this._isDown("run")?Ae.RUN:Ae.SPEED,l=this.onGround?B2:H2,u=Math.min(1,l*t);this.velocity.x+=(a.x*c-this.velocity.x)*u,this.velocity.z+=(a.z*c-this.velocity.z)*u,this._applyGravity(t),this._collide(t);const h=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<h&&(this.position.y=h,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_applyGravity(t){this.velocity.y-=Ae.GRAVITY*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<=e?(this.position.y=e,this.velocity.y=0,this.onGround=!0):this.onGround=!1}_floorUnder(t,e,i){var a;const s=Ae.RADIUS;let r=-1/0;const o=((a=this.build)==null?void 0:a.colliders)||Qi;for(let c=0;c<o.length;c++){const l=o[c];l.walkable&&(t<l.min.x-s||t>l.max.x+s||e<l.min.z-s||e>l.max.z+s||l.max.y<=i+Ae.STEP&&l.max.y>r&&(r=l.max.y))}return r===-1/0?(this._warnedFloor||(this._warnedFloor=!0,console.warn("[walker] no walkable collider under the player — holding at y = 0. floor() is the only thing that makes one.")),0):r}_collide(t){this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let e=0;e<V2;e++){const i=Au(this.collision,this.position.x,this.position.z,{y:this.position.y,onPush:this._killInto});if(this.position.x=i.x,this.position.z=i.z,!i.contacts)break}$2(this.collision,this.position.x,this.position.z,{y:this.position.y})?(this.position.x=this._lastSafe.x,this.position.z=this._lastSafe.z,this.velocity.x=0,this.velocity.z=0):this._lastSafe.copy(this.position)}_commitCamera(t){const e=this.position.y+Ae.EYE;let i=0,s=0;this.horizontalSpeed>.3?(this._bob+=t*this.horizontalSpeed*1.9,s=Math.sin(this._bob*2)*.035,i=Math.cos(this._bob)*.014):this._bob=0,this.camera.position.set(this.position.x+i,e+s,this.position.z),this.camera.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ")}get target(){return this._target}onInteract(t){return t&&this._interactFns.push(t),this}_updateTarget(){var a;if(!this._locked){this._setTarget(null);return}const t=((a=this.build)==null?void 0:a.interactables)||Qi;if(!t.length){this._setTarget(null);return}this.camera.getWorldDirection(this._fwd);const e=this.camera.position,i=this.position.x,s=this.position.z;let r=null,o=1/0;for(let c=0;c<t.length;c++){const l=t[c],u=l.pos.x-i,h=l.pos.z-s,f=Math.hypot(u,h);if(f>=(l.radius||1.8))continue;const d=l.pos.x-e.x,_=l.pos.y-e.y,g=l.pos.z-e.z,m=Math.hypot(d,_,g)||1,p=(d*this._fwd.x+_*this._fwd.y+g*this._fwd.z)/m,v=Math.acos(Math.min(1,Math.max(-1,p)));if(v>G2)continue;const M=v+f*.1;M>=o||(o=M,r=l)}this._setTarget(r)}_setTarget(t){const e=t?t.label:null;this._target===t&&this._targetLabel===e||(this._target=t,this._targetLabel=e,this.prompt=t?{id:t.id,label:t.label}:null)}teleport(t,e=0,i=0,s){if(t&&typeof t=="object"){const r=t;s=typeof e=="number"?e:void 0,t=r.x??r[0]??0,i=r.z??r[2]??0,e=r.y??r[1]??0}return this.position.set(t,e,i),this.position.y=Math.max(e,this._floorUnder(t,i,e)),this.velocity.set(0,0,0),this.horizontalSpeed=0,this.onGround=!0,this._bob=0,typeof s=="number"&&(this.yaw=s),this._lastSafe.copy(this.position),this.driveCamera&&this._commitCamera(0),this.position}setWorld(t){var e,i;if(!t)throw new Error("Walker.setWorld: no world");return this.world=t,this.build=t.build??this.build,this.collision=t.collision??((i=(e=t.build)==null?void 0:e.userData)==null?void 0:i.collision)??this.collision,this.surface=t.surface??null,this._warnedFloor=!1,this._lastSafe.copy(this.position),this._setTarget(null),this}crossTo(t,e=0){return this.position.applyMatrix4(t),Wf.setFromMatrix4(t),this.velocity.applyMatrix3(Wf),this.yaw+=e,this.yaw>Math.PI?this.yaw-=2*Math.PI:this.yaw<=-Math.PI&&(this.yaw+=2*Math.PI),this._lastSafe.copy(this.position),this.position}}const Wf=new jt,we=Object.freeze({length:.175,shaftR:.0072,collarR:.0086,tipR:.0055,tipL:.02,capL:.016,rest:Object.freeze({x:.132,y:-.118,z:-.34,pitch:.26,yaw:-1.18,roll:.34}),aim:Object.freeze({x:.062,y:-.068,z:-.25,pitch:.05,yaw:-.95,roll:.14}),stowDrop:.23}),K2=.26,Z2=.13,fr={},Js=(n,t)=>fr[n]||(fr[n]=t()),qf=n=>1-(1-n)*(1-n)*(1-n);function J2(){const n=new _e;n.name="sonic.markI";const t=new nn({color:12172738,roughness:.28,metalness:0}),e=new nn({color:1776928,roughness:.62,metalness:0}),i=new li({color:9425151,toneMapped:!1}),s=we.length,r=-s/2,o=16,a=s-we.tipL-we.capL,c=new It(Js("sonic.shaft",()=>new Qt(we.shaftR,we.shaftR,1,o)),t);c.scale.y=a,c.rotation.x=Math.PI/2,c.position.z=r+we.tipL+a/2,n.add(c);const l=new It(Js("sonic.collar",()=>new Qt(we.collarR,we.collarR,1,o)),t);l.scale.y=.011,l.rotation.x=Math.PI/2,l.position.z=r+we.tipL+.0055,n.add(l);const u=new It(Js("sonic.band",()=>new Qt(we.shaftR+9e-4,we.shaftR+9e-4,1,o)),e);u.scale.y=.004,u.rotation.x=Math.PI/2,u.position.z=r+we.tipL+a*.62,n.add(u);const h=new It(Js("sonic.tip",()=>new Qt(we.tipR,we.shaftR,1,o)),e);h.scale.y=we.tipL,h.rotation.x=-Math.PI/2,h.position.z=r+we.tipL/2,n.add(h);const f=new It(Js("sonic.cap",()=>new ki(1,o,8,0,Math.PI*2,0,Math.PI/2)),e);f.scale.set(we.shaftR,we.capL,we.shaftR),f.rotation.x=Math.PI/2,f.position.z=s/2-we.capL,n.add(f);const d=new It(Js("sonic.lamp",()=>new ki(1,12,8)),i);return d.scale.setScalar(we.tipR*.92),d.position.z=r-.002,d.visible=!1,n.add(d),{group:n,lamp:d,materials:[t,e,i]}}function Q2({reach:n=6,cone:t=.16}={}){const{group:e,lamp:i,materials:s}=J2(),r=new iu;r.name="viewmodel";const o=new tn(48,1,.01,1);r.add(e);const a=new E0(16774374,2.3);a.position.set(-.55,.8,.6);const c=new au(13162239,.55);r.add(a,c);const l=a.intensity,u=c.intensity;let h=0,f=0,d=0,_=0,g=-1,m=0,p=1;const v=new z,M=new z;function E(){const w=qf(d),S=we.rest,R=we.aim,D=(F,I)=>F+(I-F)*w,x=1-w*.85,y=Math.sin(m*.83)*.0032*x,A=Math.sin(m*1.27+1.1)*.004*x,L=Math.sin(m*.61+.4)*.016*x,O=(1-qf(h))*we.stowDrop;e.position.set(D(S.x,R.x)+y,D(S.y,R.y)+A-O,D(S.z,R.z)),e.rotation.set(D(S.pitch,R.pitch),D(S.yaw,R.yaw),D(S.roll,R.roll)+L)}const T={group:e,scene:r,camera:o,materials:s,get out(){return f===1},get drawn(){return h},get aiming(){return _===1&&h>.6},get firing(){return g>=0},reach:n,cone:t,toggle(){return f=f?0:1,f||(_=0,g=-1,i.visible=!1),!!f},draw(){return f=1,!0},stow(){f=0,_=0,g=-1,i.visible=!1},setAim(w){return _=w&&f?1:0,!!_},fire(){return!f||h<.6?!1:(g=0,!0)},setMood(w){p=Math.min(1,Math.max(.12,w)),a.intensity=l*p,c.intensity=u*(.45+.55*p)},beam(w,S=new z,R=new z){return S.copy(w.position),w.getWorldDirection(R),{origin:S,dir:R}},target(w,S){if(!this.aiming)return null;const R=(S==null?void 0:S.interactables)||[];if(!R.length)return null;const{origin:D,dir:x}=this.beam(w,v,M);let y=null,A=1/0;for(const L of R){if(L.sonic===!1)continue;const O=L.pos.x-D.x,F=L.pos.y-D.y,I=L.pos.z-D.z,P=Math.hypot(O,F,I)||1;if(P>n)continue;const U=(O*x.x+F*x.y+I*x.z)/P;if(U<=0)continue;const Y=Math.acos(Math.min(1,U));if(Y>t)continue;const K=Y+P*.02;K>=A||(A=K,y=L)}return y},update(w){const S=Math.min(Math.max(w||0,0),.1);m+=S;const R=(D,x,y)=>{const A=S/y;return x>D?Math.min(x,D+A):Math.max(x,D-A)};if(h=R(h,f,K2),d=R(d,_&&h>.6?1:0,Z2),g>=0){g+=S;const D=g<.42&&Math.sin(g*54)>-.35;i.visible=D,g>=.42&&(g=-1,i.visible=!1)}E()},pass(w,S){if(h<=.001&&f===0)return!1;S&&o.aspect!==S.aspect&&(o.aspect=S.aspect,o.updateProjectionMatrix());const R=w.autoClear;return w.autoClear=!1,w.clearDepth(),w.render(r,o),w.autoClear=R,!0},dispose(){for(const w of s)w.dispose();for(const w of Object.keys(fr))fr[w].dispose(),delete fr[w]}};return T.setMood(1),E(),T}const gs=1e-4;function tS(n,t,e,i,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const u=Math.max(.001,e.a??.005),h=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),_=n.createGain();_.gain.value=gs,_.connect(i);let g,m=null;const p=r.rate??1;if(e.src==="noise")g=n.createBufferSource(),g.buffer=t.get(e.noise||"white"),g.loop=!0,g.loopStart=0,g.playbackRate.value=p;else{g=n.createOscillator(),g.type=e.wave||"sine";const D=e.jitter||0,x=D?1+(r.jitterRoll??0)*D:1,y=Math.max(8,(e.freq??440)*x*p);if(m=g.frequency,m.setValueAtTime(y,a),e.to!=null&&!o){const A=Math.max(8,e.to*x*p),L=a+c;e.glide==="lin"?m.linearRampToValueAtTime(A,L):m.exponentialRampToValueAtTime(A,L)}}let v=g,M=null;if(e.filter){const D=n.createBiquadFilter();D.type=e.filter.type||"lowpass",D.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);D.frequency.setValueAtTime(x,a),e.filter.to!=null&&!o&&D.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),M=D.frequency,v.connect(D),v=D}let E=null,T=null;if(e.lfo&&e.lfo.rate>0){E=n.createOscillator(),E.type="sine",E.frequency.value=e.lfo.rate;const D=n.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));T=n.createGain(),T.gain.value=1-x*.5,D.gain.value=x*.5,E.connect(D),D.connect(T.gain),v.connect(T),v=T}else e.lfo.target==="filter"&&M?(D.gain.value=e.lfo.depth??200,E.connect(D),D.connect(M)):m&&(D.gain.value=e.lfo.depth??20,E.connect(D),D.connect(m));E.start(a)}v.connect(_);const w=_.gain;w.setValueAtTime(gs,a),w.linearRampToValueAtTime(l,a+u);const S=Math.max(gs,l*f);h>0&&w.linearRampToValueAtTime(S,a+u+h);let R=1/0;if(o)g.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const D=Math.max(a+u+h,a+c-d);w.setValueAtTime(Math.max(gs,h>0?S:l),D),w.linearRampToValueAtTime(gs,a+c),R=a+c+.02,g.start(a,e.src==="noise"?r.noiseOffset??0:void 0),g.stop(R),E&&E.stop(R)}return{endsAt:R,stop(D){const x=Math.max(D,n.currentTime);try{w.cancelScheduledValues(x),w.setValueAtTime(Math.max(gs,w.value),x),w.linearRampToValueAtTime(gs,x+d),g.stop(x+d+.02),E&&E.stop(x+d+.02)}catch{}}}}function Xf(n,t,e,i,s={}){const r=Math.max(s.when??n.currentTime,n.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const u=tS(n,t,l,i,r,{...s,loop:o});u&&(a.push(u),u.endsAt>c&&u.endsAt!==1/0&&(c=u.endsAt))}return{endsAt:o?1/0:c,stop(l=n.currentTime){for(const u of a)u.stop(l)}}}const Yf="dw.audio",eS=16,nS="KeyN",iS={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},sS=["step_a","step_b"];function rS(n,t){const e=t.elements,i=n.x,s=n.y??0,r=n.z,o=e[3]*i+e[7]*s+e[11]*r+e[15]||1;return{x:(e[0]*i+e[4]*s+e[8]*r+e[12])/o,y:(e[1]*i+e[5]*s+e[9]*r+e[13])/o,z:(e[2]*i+e[6]*s+e[10]*r+e[14])/o}}const oS={volume:.55,muted:!1},aS={hatStand:1.14,chair:.86,clock:.72},cS={scanner:.92,faultLocator:.84,foodMachine:1.12},qp=8,lS=.4,uS=18;function $f(n,t,e){const i=t.length;if(n==="brown"){let s=0;for(let r=0;r<i;r++){const o=e.float()*2-1;s=(s+.02*o)/1.02,t[r]=s*3.5}}else if(n==="pink"){let s=0,r=0,o=0,a=0,c=0,l=0,u=0;for(let h=0;h<i;h++){const f=e.float()*2-1;s=.99886*s+f*.0555179,r=.99332*r+f*.0750759,o=.969*o+f*.153852,a=.8665*a+f*.3104856,c=.55*c+f*.5329522,l=-.7616*l-f*.016898,t[h]=(s+r+o+a+c+l+u+f*.5362)*.11,u=f*.115926}}else for(let s=0;s<i;s++)t[s]=e.float()*2-1;return t}function hS(n,t){const e=Math.exp(-2*Math.PI*uS/t);let i=0,s=0;for(let r=0;r<n.length;r++){const o=n[r];i=o-s+e*i,s=o,n[r]=i}return n}class fS{constructor(t,e,i={}){this.ctx=t,this.rng=e,this.len=i.len??qp,this.xfade=i.xfade??lS,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=this.ctx.sampleRate,i=Math.floor(e*this.len),s=this.ctx.createBuffer(1,i,e),r=s.getChannelData(0);if(t==="white")$f("white",r,this.rng);else{const o=Math.max(1,Math.floor(e*this.xfade)),a=hS($f(t,new Float32Array(i+o),this.rng),e);r.set(a.subarray(0,i));for(let c=0;c<o;c++){const l=(c+.5)/o;r[c]=a[c]*Math.sin(l*Math.PI/2)+a[i+c]*Math.cos(l*Math.PI/2)}}return this.cache.set(t,s),s}}const dS=Math.PI/2,pS=3.4,mS=.15,ra=1,jf=6.5;class _S{constructor(t={}){var r;this.sounds=t.sounds||{},this.busDefs=t.buses||{},this.dist={...iS,...t.distance||{}},this.roomBeds=t.roomBeds||[],this.propRate={...aS,...t.propRate||{}},this.ctlRate={...cS,...t.ctlRate||{}};const e={...oS,...t.defaults||{}};this.anchors=t.anchors||{},this.surface=t.surface||null,this.surfaceSteps=t.surfaceSteps||{vinyl:["step_a","step_b"]},this._interiorAnchors=null,this.siteBeds=t.siteBeds||[],this._bedMix=0,this._doorT=0,this._roomBedOff=null,this._siteBedOff=null,this.listener=t.listener||null,this.say=typeof t.say=="function"?t.say:null;const i=t.rng;this.rng=i!=null&&i.child?i.child("audio"):i||null,this._stepRng=(r=this.rng)!=null&&r.child?this.rng.child("step"):this.rng,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this._bankFactory=t.bankFactory||((o,a)=>new fS(o,a)),this._defaultBus=null,this._voices=[],this._loops=new Map,this._handled=new Map,this._duckDepth=1,this._duckUntil=0,this._ducking=!1,this._paused=!1,this._replaceAccum=0,this._told=!1;const s=this._loadPrefs(e);this.volume=s.volume,this.muted=s.muted,this.room=null,this._flying=!1,this._s=0,this._ds=1,this._shutters=null,this._scanner=null,this._stepIx=0,this._air=0,this._wasGround=!0,this._nextTick=0,this._tock=!1,this._Ctx&&(this._wireUnlock(),this._wireKey())}get available(){return!!this.ctx}_loadPrefs(t){const e={...t};try{const i=localStorage.getItem(Yf);if(i){const s=JSON.parse(i);typeof s.volume=="number"&&(e.volume=Math.min(1,Math.max(0,s.volume))),typeof s.muted=="boolean"&&(e.muted=s.muted)}}catch{}return e}_savePrefs(){try{localStorage.setItem(Yf,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx&&this.ctx.state!=="suspended")for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,i;document.hidden||(i=(e=this.ctx)==null?void 0:e.resume)==null||i.call(e).catch(()=>{})})}unlock(){var e,i,s;if(this.ctx){(i=(e=this.ctx).resume)==null||i.call(e).catch(()=>{});return}if(!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=this._bankFactory(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this._masterTarget(),this.master.connect(t.destination);for(const[r,o]of Object.entries(this.busDefs)){const a=t.createGain();a.gain.value=o.gain,a.connect(this.master),this.buses[r]={node:a,base:o.gain,duckable:o.duckable!==!1},this._defaultBus||(this._defaultBus=this.buses[r])}this._defaultBus=this.buses.machine||this._defaultBus,(s=t.resume)==null||s.call(t).catch(()=>{}),this._nextTick=t.currentTime+ra,this._resumeBeds(),this.announce()}_resumeBeds(){var t,e;return!this.ctx||this.muted?this:(this.startBeds(this.roomBeds),(e=(t=this.room)==null?void 0:t.fittings)!=null&&e.scannerOn&&this.startLoop("scanner_bed"),this._flying&&(this.startLoop("flight_bed"),this.startLoop("flight_grind")),this)}announce(){this._told||!this.ctx||!this.say||(this._told=!0,this.say(this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==nS||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e;return this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(e=this.say)==null||e.call(this,this.muted?"Sound muted.":"Sound on."),this.muted||(this.play("mute_off"),this._resumeBeds()),this}toggleMute(){return this.setMuted(!this.muted)}setVolume(t){return this.volume=Math.min(1,Math.max(0,Number(t)||0)),this._savePrefs(),this._applyMaster(),this}setPaused(t){return this._paused=!!t,this._applyMaster(.08),this}_masterTarget(){return this.muted?1e-4:Math.max(1e-4,this.volume*(this._paused?.2:1))}_applyMaster(t=.08){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime,i=this._masterTarget();this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(i,e+t)}play(t,e={}){const i=this.sounds[t];if(!i||!this.ctx||this.muted)return null;if(i.loop)return this.startLoop(t,e.handle||t,e);if(e.handle&&this._stopHandled(e.handle),this._voices.length>=eS)return null;const s=this._chainFor(i,e,!1);if(!s)return null;const r=Xf(this.ctx,this.bank,i,s.node,{gain:(i.gain??1)*(e.gain??1),rate:(i.rate??1)*(e.rate??1),when:e.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),o={v:r,endsAt:r.endsAt,handle:e.handle||null};return this._voices.push(o),e.handle&&this._handled.set(e.handle,o),i.ducks&&this.duck(i.ducks.depth??.45,i.ducks.hold??1),r}_stopHandled(t){const e=this._handled.get(t);if(!e)return;this._handled.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}const i=this._voices.indexOf(e);i>=0&&this._voices.splice(i,1)}startLoop(t,e=t,i={}){const s=this.sounds[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._chainFor(s,i,!0);if(!r)return null;const a={v:Xf(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(i.gain??1),rate:(s.rate??1)*(i.rate??1),when:i.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:i.spot??s.spot??null,at:i.at??null,level:1};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);if(!e||!this.ctx)return this;this._loops.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}return this}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t);return this}setLoopLevel(t,e,i=.12){var a;const s=this._loops.get(t);if(!s||!this.ctx||!((a=s.chain)!=null&&a.level))return this;const r=Math.max(0,Number(e)||0);if(Math.abs(r-s.level)<.002)return this;s.level=r;const o=this.ctx.currentTime;return i>0?s.chain.level.gain.setTargetAtTime(r,o,i):s.chain.level.gain.setValueAtTime(r,o),this}startBeds(t=this.roomBeds){for(const e of t||[])this.startLoop(e);return this}stopBeds(t=this.roomBeds){for(const e of t||[])this.stopLoop(e);return this}duck(t=.45,e=1){if(!this.ctx)return this;const i=this.ctx.currentTime,s=Math.min(1,Math.max(0,t));this._duckDepth=this._ducking?Math.min(this._duckDepth,s):s,this._duckUntil=Math.max(this._duckUntil,i+e),this._ducking=!0;for(const r of Object.values(this.buses))r.duckable&&(r.node.gain.cancelScheduledValues(i),r.node.gain.setTargetAtTime(r.base*this._duckDepth,i,.04));return this}_unduck(){const t=this.ctx.currentTime;this._ducking=!1,this._duckDepth=1;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_chainFor(t,e,i){const s=this.buses[t.bus]||this._defaultBus;if(!s)return null;let r=s.node,o=null,a=null,c=null;const l=this._resolve(e.at??null,e.spot??t.spot??null);if(l){const u=this._place(l,t.minGain??0);if(u.gain<=.004&&!t.loop)return null;this.ctx.createStereoPanner&&(o=this.ctx.createStereoPanner(),o.pan.value=u.pan,o.connect(r),r=o),a=this.ctx.createGain(),a.gain.value=u.gain,a.connect(r),r=a}return i&&(c=this.ctx.createGain(),c.gain.value=1,c.connect(r),r=c),{node:r,chain:{pan:o,dist:a,level:c},pos:l}}_resolve(t,e){if(t&&typeof t.x=="number")return t;if(!e)return null;const i=this.anchors[e];return i&&typeof i.x=="number"?i:null}_listener(){var r;const t=this.listener;if(!t)return null;const e=typeof t=="function"?t():t;if(!e)return null;const i=((r=e.camera)==null?void 0:r.position)||e.position||(typeof e.x=="number"?e:null);if(!i||typeof i.x!="number")return null;const s=e.yaw??0;return{x:i.x,y:i.y,z:i.z,rx:-Math.cos(s),rz:Math.sin(s)}}_place(t,e){const i=this._listener();if(!i)return{gain:1,pan:0};const s=t.x-i.x,r=t.z-i.z,o=(t.y??i.y)-i.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,fade:u,panWidth:h,panNear:f}=this.dist;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));u>0&&a>l-u&&(d*=(l-a)/u),d=Math.max(d,e);const _=Math.sqrt(s*s+r*r)||1,g=Math.min(1,_/f),m=(s*i.rx+r*i.rz)/_*h*g;return{gain:d,pan:Math.max(-1,Math.min(1,m))}}update(t){var s;let e=Number(t)||0;if(e<0&&(e=0),e>.1&&(e=.1),this._followRotor(),this._followFittings(),this._footsteps(e),!this.ctx)return this;const i=this.ctx.currentTime;for(let r=this._voices.length-1;r>=0;r--){const o=this._voices[r];o.endsAt>i||(o.handle&&this._handled.get(o.handle)===o&&this._handled.delete(o.handle),this._voices.splice(r,1))}if(this._ducking&&i>=this._duckUntil&&this._unduck(),this._clock(i),this._replaceAccum+=e,this._replaceAccum<.1)return this;this._replaceAccum=0;for(const r of this._loops.values()){const o=this._resolve(r.at,r.spot);if(!o||!((s=r.chain)!=null&&s.dist))continue;const a=this._place(o,r.recipe.minGain??0);r.chain.dist.gain.setTargetAtTime(a.gain,i,.06),r.chain.pan&&r.chain.pan.pan.setTargetAtTime(a.pan,i,.08)}return this}setWorld(t,e=null){var r;if(!t)return this;if(t.dist&&(this.dist={...this.dist,...t.dist}),this.surface=t.surface??null,!this._interiorAnchors){this._interiorAnchors=Object.create(null);for(const[o,a]of Object.entries(this.anchors))this._interiorAnchors[o]=a}const i=t.id==="interior"||!e?null:e.M_IE||null,s=Object.create(null);if((r=t.build)!=null&&r.interactables)for(const o of t.build.interactables)o!=null&&o.id&&o.pos&&(s[o.id]=o.pos);for(const[o,a]of Object.entries(this._interiorAnchors))s[o]||(s[o]=i?rS(a,i):a);return this.anchors=s,this}setLoopSpot(t,e){const i=this._loops.get(t);return i&&(i.spot=e??null,i.at=null),this}setBedMix(t,e){const i=t<=0?0:t>=1?1:t,s=e===void 0?this._doorT??1:e,r=s<=0?0:s>=1?1:s;this._bedMix=i;const o=1-i+i*.06*r,a=i*(.3+.7*(1-.6*(1-r)));return this._driveBedSet(this.roomBeds,o,"_roomBedOff"),this._driveBedSet(this.siteBeds,a,"_siteBedOff"),this}_driveBedSet(t,e,i){if(!t||!t.length)return;const s=t.map(r=>Array.isArray(r)?r[0]:r);if(e<=0){const r=this.ctx?this.ctx.currentTime:0;(this[i]===void 0||this[i]===null)&&(this[i]=r);for(const o of s)this.setLoopLevel(o,0);if(r-this[i]>2)for(const o of s)this.stopLoop(o);return}this[i]=null;for(const r of t){const o=Array.isArray(r)?r[0]:r;if(!this._loops.has(o)){const a=Array.isArray(r)&&r[1]?{...r[1]}:{};this.startLoop(o,o,a)&&this.setLoopLevel(o,0,0)}this.setLoopLevel(o,e)}}setDoorFraction(t){return this._doorT=t<=0?0:t>=1?1:t,this}setSiteBeds(t){return this.siteBeds=t||[],this}get bedMix(){return this._bedMix??0}bindRoom({build:t,rotor:e,fittings:i,walker:s,room:r}={}){var o,a;if(this.room={build:t||null,rotor:e||null,fittings:i||null,walker:s||null},t!=null&&t.interactables)for(const c of t.interactables)c!=null&&c.id&&c.pos&&(this.anchors[c.id]=c.pos);return this.anchors.console=this.anchors.console||{x:0,y:(r==null?void 0:r.PANEL_Y0)??.9,z:0},s&&(this.listener||(this.listener=s),(o=s.onPause)==null||o.call(s,c=>this.setPaused(c)),(a=s.onInteract)==null||a.call(s,c=>this._onInteract(c)),this.setPaused(!!s.paused)),i&&(this._shutters=!!i.shuttersOpen,this._scanner=!!i.scannerOn),e&&(this._flying=!!e.running),this.startBeds(this.roomBeds),i!=null&&i.scannerOn&&this.startLoop("scanner_bed"),this}_onInteract(t){var e;if(t)switch(t.action){case"panel":{const i=(e=t.data)==null?void 0:e.panel,s=`panel${i}`;this.play("panel_wake",{spot:s});const r={1:"ctl_lever",2:"ctl_lever",3:"ctl_dial",4:"ctl_guard",5:"ctl_lever_big",6:"ctl_button"};r[i]&&this.play(r[i],{spot:s}),i===1&&this.play("ctl_refuse",{spot:s}),i===3&&this.play("food_dispense",{handle:"food"}),i===6&&this.play("fault_query",{handle:"fault"});break}case"doors":this.play("door_locked"),this.play("panel_wake",{spot:"panel1",gain:.5});break;case"scanner":this.play("ctl_toggle",{spot:"scanner",rate:this.ctlRate.scanner});break;case"faultLocator":this.play("ctl_button",{spot:"faultLocator",rate:this.ctlRate.faultLocator}),this.play("fault_query",{handle:"fault"});break;case"foodMachine":this.play("ctl_button",{spot:"foodMachine",rate:this.ctlRate.foodMachine}),this.play("food_dispense",{handle:"food"});break;case"hatStand":this.play("prop_wood",{spot:"hatStand",rate:this.propRate.hatStand});break;case"chair":this.play("prop_wood",{spot:"chair",rate:this.propRate.chair});break;case"clock":this.play("prop_wood",{spot:"clock",rate:this.propRate.clock}),this.ctx&&this.play("clock_tick",{when:this.ctx.currentTime+.3});break;case"rotor":this.play("ctl_lever_big",{spot:"panel5"});break}}_followRotor(){var s;const t=(s=this.room)==null?void 0:s.rotor;if(!t)return;const e=!!t.running;e&&!this._flying?(this.play("demat_launch"),this.startLoop("flight_bed"),this.startLoop("flight_grind"),this.setLoopLevel("flight_bed",0,0),this.setLoopLevel("flight_grind",0,0),this._flying=!0,this._s=0,this._ds=1):!e&&this._flying&&(this.stopLoop("flight_bed"),this.stopLoop("flight_grind"),this.play("remat_land"),this._flying=!1);const i=t.drive??0;if(this.setLoopLevel("flight_bed",i),this.setLoopLevel("flight_grind",i),i>.05){const r=(t.apex??0)-(t.parked??0);if(r>0){const o=((t.height??0)-t.parked)/(r*i),a=o-this._s;this._ds<0&&a>=0?this.play("demat_rise"):this._ds>0&&a<=0&&this.play("demat_fall"),a!==0&&(this._ds=a),this._s=o}}else this._s=0,this._ds=1}_followFittings(){var s;const t=(s=this.room)==null?void 0:s.fittings;if(!t)return;const e=!!t.shuttersOpen;this._shutters!==null&&e!==this._shutters&&this.play(e?"shutter_open":"shutter_close",{handle:"shutter"}),this._shutters=e;const i=!!t.scannerOn;this._scanner!==null&&i!==this._scanner&&(i?this.startLoop("scanner_bed"):this.stopLoop("scanner_bed")),this._scanner=i}_footsteps(t){var l;const e=(l=this.room)==null?void 0:l.walker;if(!e)return;const i=e.onGround!==!1;i?(this._wasGround===!1&&this._air>mS&&this.play("step_land",{rate:this._stepRate(1)}),this._air=0):this._air+=t,this._wasGround=i;const s=e.horizontalSpeed??0;if(s<=.3){this._stepIx=0;return}const r=(e.stepPhase!==void 0?e.stepPhase:e._bob)??0,o=Math.floor(r/dS);if(o===this._stepIx||(this._stepIx=o,o<=0))return;const a=s>pS?1.06:1,c=this.surface&&this.surfaceSteps[this.surface]||sS;this.play(c[o&1],{rate:this._stepRate(a)})}_stepRate(t){const e=this._stepRng;return t*(1+.055*(e?e.range(-1,1):0))}_clock(t){if(!this.sounds.clock_tick)return;const e=this.anchors.clock;if(e){const i=this._listener();if(i){const s=e.x-i.x,r=e.z-i.z,o=(e.y??i.y)-i.y;if(s*s+o*o+r*r>jf*jf){this._nextTick=t+ra;return}}}for(this._nextTick<t&&(this._nextTick=t+ra);this._nextTick<t+.5;)this.play(this._tock?"clock_tock":"clock_tick",{when:this._nextTick}),this._tock=!this._tock,this._nextTick+=ra}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,qp):0}}const gS={room:{gain:.34,duckable:!1},machine:{gain:.85,duckable:!0},control:{gain:.95,duckable:!1},body:{gain:.6,duckable:!0},flight:{gain:.95,duckable:!1}},Xp={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},xS={volume:.55,muted:!1},Ea={room_tone:{bus:"room",gain:.55,loop:!0,layers:[{src:"noise",noise:"brown",at:0,a:2.6,s:1,r:2,peak:.85,filter:{type:"lowpass",freq:110,q:.7},lfo:{rate:.043478,depth:40,target:"filter"}},{src:"tone",wave:"sine",freq:49.5,at:0,a:3,s:1,r:2.4,peak:.26},{src:"tone",wave:"sine",freq:99,at:0,a:3.2,s:1,r:2.4,peak:.3},{src:"tone",wave:"sine",freq:99.4,at:0,a:3.6,s:1,r:2.4,peak:.24,lfo:{rate:.027027,depth:.6,target:"freq"}},{src:"noise",noise:"white",at:2.41,a:5,s:1,r:3,peak:.1,filter:{type:"bandpass",freq:6400,q:2.4},lfo:{rate:.018868,depth:900,target:"filter"}}]},room_air:{bus:"room",gain:.7,loop:!0,rate:.618,layers:[{src:"noise",noise:"pink",at:0,a:3.4,s:1,r:2.2,peak:.52,filter:{type:"bandpass",freq:300,q:.9},lfo:{rate:.034483,depth:130,target:"filter"}},{src:"noise",noise:"brown",at:1.13,a:4,s:1,r:2.4,peak:.4,filter:{type:"lowpass",freq:210,q:1.1},lfo:{rate:.02439,depth:55,target:"filter"}}]},console_hum:{bus:"room",gain:.6,loop:!0,spot:"console",minGain:.14,layers:[{src:"tone",wave:"sine",freq:148.5,at:0,a:2,s:1,r:1.6,peak:.22},{src:"tone",wave:"sine",freq:297,at:0,a:2.2,s:1,r:1.6,peak:.09,lfo:{rate:.071,depth:.24,target:"gain"}},{src:"tone",wave:"sawtooth",freq:220,at:0,a:2.8,s:1,r:2,peak:.1,filter:{type:"lowpass",freq:640,q:1.4}},{src:"noise",noise:"white",at:.53,a:2.6,s:1,r:2,peak:.26,filter:{type:"bandpass",freq:6200,q:2.6},lfo:{rate:.1129,depth:.36,target:"gain"}}]},scanner_bed:{bus:"room",gain:.62,loop:!0,spot:"scanner",minGain:0,layers:[{src:"tone",wave:"sawtooth",freq:50,at:0,a:1.35,s:1,r:.28,peak:.28,filter:{type:"lowpass",freq:320,q:1.4}},{src:"tone",wave:"sine",freq:150,at:0,a:1.4,s:1,r:.28,peak:.1},{src:"tone",wave:"sine",freq:10125,at:0,a:1.4,s:1,r:.28,peak:.028,lfo:{rate:.37,depth:.3,target:"gain"}},{src:"noise",noise:"white",at:.77,a:1.5,s:1,r:.28,peak:.14,filter:{type:"highpass",freq:4800,q:.7}}]},fault_idle:{bus:"machine",gain:.34,loop:!0,rate:.618,spot:"faultLocator",minGain:0,layers:[{src:"noise",noise:"white",at:0,a:1.2,s:1,r:.8,peak:.34,filter:{type:"bandpass",freq:2900,q:6},lfo:{rate:1.1111,depth:.92,target:"gain"}}]},flight_bed:{bus:"flight",gain:.19,loop:!0,spot:"rotor",minGain:.55,layers:[{src:"tone",wave:"sine",freq:41,at:0,a:.9,s:1,r:2.4,peak:.3,lfo:{rate:.173,depth:6,target:"freq"}},{src:"noise",noise:"brown",at:0,a:1.1,s:1,r:2.4,peak:.8,filter:{type:"lowpass",freq:230,q:1.1},lfo:{rate:.173,depth:110,target:"filter"}},{src:"tone",wave:"sawtooth",freq:32.7,at:0,a:1.2,s:1,r:2.4,peak:.34,filter:{type:"lowpass",freq:260,q:3},lfo:{rate:.29,depth:90,target:"filter"}},{src:"tone",wave:"sawtooth",freq:33.6,at:0,a:1.4,s:1,r:2.4,peak:.28,filter:{type:"lowpass",freq:300,q:2.6},lfo:{rate:.23,depth:70,target:"filter"}},{src:"tone",wave:"sine",freq:99,at:0,a:1.5,s:1,r:2.4,peak:.1,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:7.9,depth:22,target:"freq"}}]},flight_grind:{bus:"flight",gain:.2,loop:!0,rate:.618,spot:"rotor",minGain:.55,layers:[{src:"noise",noise:"pink",at:0,a:1.4,s:1,r:2.4,peak:.58,filter:{type:"bandpass",freq:470,q:1.3},lfo:{rate:.2311,depth:200,target:"filter"}},{src:"noise",noise:"white",at:.61,a:1,s:1,r:2.4,peak:.52,filter:{type:"bandpass",freq:1750,q:3},lfo:{rate:6.1,depth:.45,target:"gain"}},{src:"noise",noise:"brown",at:1.13,a:1.2,s:1,r:2.4,peak:.46,filter:{type:"lowpass",freq:400,q:1.4},lfo:{rate:.1274,depth:130,target:"filter"}}]},demat_launch:{bus:"flight",gain:.54,ducks:{depth:.45,hold:2.6},layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.14,r:.08,peak:.72,filter:{type:"lowpass",freq:1400,to:240,q:1.5}},{src:"tone",wave:"square",freq:128,to:47,at:0,dur:.22,a:.002,d:.06,s:.2,r:.1,peak:.24,filter:{type:"lowpass",freq:700,to:300,q:1}},{src:"tone",wave:"sawtooth",freq:38,to:96,at:.08,dur:1.9,a:.4,d:.3,s:.8,r:.55,peak:.36,jitter:.012,filter:{type:"lowpass",freq:300,to:1500,q:1.2}},{src:"tone",wave:"sawtooth",freq:39.1,to:99.1,at:.11,dur:1.88,a:.44,d:.3,s:.78,r:.55,peak:.3,jitter:-.012,filter:{type:"lowpass",freq:340,to:1650,q:1.1}},{src:"noise",noise:"white",at:.3,dur:2,a:.55,d:.35,s:.62,r:.6,peak:.7,filter:{type:"bandpass",freq:220,to:1750,q:.75}},{src:"tone",wave:"triangle",freq:210,to:690,at:.2,dur:2.1,a:.5,d:.4,s:.55,r:.75,peak:.2,filter:{type:"bandpass",freq:900,q:8},lfo:{rate:.8,depth:400,target:"filter"}},{src:"tone",wave:"sine",freq:148,at:.15,dur:2.1,a:.3,d:.5,s:.5,r:.8,peak:.16,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:6.7,depth:34,target:"freq"}},{src:"tone",wave:"sine",freq:41,to:31,at:0,dur:2.4,a:.03,d:.9,s:.35,r:1.1,peak:.28},{src:"noise",noise:"pink",at:1.13,dur:1.45,a:.3,d:.3,s:.55,r:.55,peak:.42,filter:{type:"bandpass",freq:900,to:2600,q:1.6}},{src:"noise",noise:"brown",at:2.033,dur:.34,a:.004,d:.12,s:.2,r:.18,peak:.4,filter:{type:"lowpass",freq:560,to:170,q:1.3}},{src:"tone",wave:"sine",freq:62,to:41,at:2.033,dur:.38,a:.004,d:.14,s:.24,r:.2,peak:.3}]},demat_rise:{bus:"flight",gain:.5,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:58,to:96,at:0,dur:1.58,a:.1,d:.3,s:.62,r:.55,peak:.42,jitter:.015,filter:{type:"lowpass",freq:900,to:320,q:2.6},lfo:{rate:5.4,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:60.3,to:99.6,at:0,dur:1.58,a:.13,d:.3,s:.6,r:.58,peak:.34,jitter:-.015,filter:{type:"lowpass",freq:1200,to:400,q:2.2},lfo:{rate:5.15,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.08,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:700,to:2400,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.1,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:420,to:1300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.35,d:.35,s:.7,r:.7,peak:.78,filter:{type:"lowpass",freq:130,to:260,q:.9}},{src:"tone",wave:"square",freq:232,to:384,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1400,q:6},lfo:{rate:.9,depth:320,target:"filter"}},{src:"tone",wave:"sine",freq:92,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:400,q:.9},lfo:{rate:7.3,depth:24,target:"freq"}},{src:"noise",noise:"brown",at:1.44,dur:.3,a:.004,d:.11,s:.2,r:.16,peak:.34,filter:{type:"lowpass",freq:520,to:170,q:1.2}}]},demat_fall:{bus:"flight",gain:.51,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:96,to:54,at:0,dur:1.58,a:.09,d:.3,s:.6,r:.55,peak:.4,jitter:.015,filter:{type:"lowpass",freq:1e3,to:300,q:2.6},lfo:{rate:5.05,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:99.4,to:56.2,at:0,dur:1.58,a:.12,d:.3,s:.58,r:.58,peak:.33,jitter:-.015,filter:{type:"lowpass",freq:1300,to:380,q:2.2},lfo:{rate:4.85,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.06,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:2300,to:560,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.08,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:1240,to:300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.3,d:.35,s:.7,r:.7,peak:.8,filter:{type:"lowpass",freq:250,to:110,q:.9}},{src:"tone",wave:"square",freq:216,to:168,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1300,q:6},lfo:{rate:.9,depth:300,target:"filter"}},{src:"tone",wave:"sine",freq:84,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:380,q:.9},lfo:{rate:6.9,depth:22,target:"freq"}},{src:"noise",noise:"brown",at:1.36,dur:.34,a:.003,d:.12,s:.2,r:.18,peak:.42,filter:{type:"lowpass",freq:400,to:130,q:1.4}},{src:"tone",wave:"sine",freq:58,to:38,at:1.36,dur:.36,a:.004,d:.13,s:.22,r:.19,peak:.24}]},remat_land:{bus:"flight",gain:.56,ducks:{depth:.45,hold:3.2},layers:[{src:"tone",wave:"sawtooth",freq:92,to:70,at:0,dur:.95,a:.05,d:.3,s:.8,r:.45,peak:.32,filter:{type:"lowpass",freq:880,to:560,q:1.3},lfo:{rate:9,depth:.62,target:"gain"}},{src:"tone",wave:"sawtooth",freq:71,to:50,at:.85,dur:.95,a:.2,d:.3,s:.8,r:.5,peak:.36,filter:{type:"lowpass",freq:570,to:330,q:1.3},lfo:{rate:6,depth:.64,target:"gain"}},{src:"tone",wave:"sawtooth",freq:50,to:31,at:1.7,dur:.8,a:.24,d:.28,s:.75,r:.52,peak:.34,filter:{type:"lowpass",freq:340,to:170,q:1.4},lfo:{rate:3.4,depth:.66,target:"gain"}},{src:"noise",noise:"white",at:0,dur:2.4,a:.1,d:.6,s:.5,r:1,peak:.26,filter:{type:"bandpass",freq:1800,to:300,q:.7}},{src:"noise",noise:"pink",at:.6,dur:1.7,a:1.35,d:.18,s:.92,r:.3,peak:.55,filter:{type:"bandpass",freq:300,to:2100,q:5}},{src:"noise",noise:"brown",at:2.4,dur:.55,a:.003,d:.18,s:.18,r:.3,peak:.9,filter:{type:"lowpass",freq:1600,to:110,q:1.5}},{src:"tone",wave:"sine",freq:74,to:34,at:2.4,dur:.62,a:.004,d:.22,s:.22,r:.32,peak:.42},{src:"tone",wave:"triangle",freq:131,at:2.418,dur:.95,a:.008,d:.3,s:.2,r:.55,peak:.14,filter:{type:"bandpass",freq:300,q:5}},{src:"tone",wave:"triangle",freq:133.4,at:2.433,dur:.92,a:.008,d:.3,s:.2,r:.55,peak:.12,filter:{type:"bandpass",freq:300,q:5}},{src:"noise",noise:"pink",at:2.44,dur:.9,a:.02,d:.35,s:.15,r:.42,peak:.36,filter:{type:"lowpass",freq:2200,to:400,q:.8}},{src:"tone",wave:"triangle",freq:196,to:99,at:2.46,dur:1.75,a:.02,d:.45,s:.28,r:1.1,peak:.18,filter:{type:"lowpass",freq:800,to:340,q:1}}]},ctl_toggle:{bus:"control",gain:.74,minGain:.1,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.008,s:0,r:.01,peak:.44,filter:{type:"bandpass",freq:2600,to:1900,q:4}},{src:"tone",wave:"square",freq:1860,at:0,dur:.024,a:.001,d:.008,s:0,r:.01,peak:.18,jitter:.05,filter:{type:"lowpass",freq:5200,q:.7}},{src:"noise",noise:"pink",at:.042,dur:.045,a:.001,d:.016,s:0,r:.02,peak:.3,filter:{type:"bandpass",freq:1750,to:1150,q:3.2}},{src:"tone",wave:"triangle",freq:430,to:300,at:.042,dur:.06,a:.002,d:.02,s:.1,r:.03,peak:.22,jitter:.05},{src:"noise",noise:"brown",at:.056,dur:.055,a:.003,d:.02,s:.1,r:.028,peak:.18,filter:{type:"lowpass",freq:480,q:.9}}]},ctl_button:{bus:"control",gain:.52,minGain:.1,layers:[{src:"noise",noise:"brown",at:0,dur:.04,a:.0015,d:.015,s:.1,r:.018,peak:.62,filter:{type:"lowpass",freq:1400,to:520,q:1.1}},{src:"tone",wave:"sine",freq:1244,to:900,at:0,dur:.055,a:.002,d:.018,s:.14,r:.028,peak:.22,jitter:.05},{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.01,peak:.24,filter:{type:"bandpass",freq:1150,q:2.4}},{src:"noise",noise:"brown",at:.078,dur:.028,a:.001,d:.011,s:.06,r:.013,peak:.34,filter:{type:"lowpass",freq:900,to:400,q:1}}]},ctl_dial:{bus:"control",gain:.85,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.19,a:.01,d:.05,s:.6,r:.06,peak:.3,filter:{type:"bandpass",freq:2200,q:1.1}},{src:"noise",noise:"white",at:0,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.5,filter:{type:"bandpass",freq:3400,q:2.2}},{src:"noise",noise:"white",at:.068,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.52,filter:{type:"bandpass",freq:3150,q:2.2}},{src:"noise",noise:"white",at:.136,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.48,filter:{type:"bandpass",freq:3550,q:2.2}},{src:"noise",noise:"brown",at:0,dur:.2,a:.012,d:.06,s:.5,r:.07,peak:.26,filter:{type:"lowpass",freq:620,to:380,q:1}}]},ctl_lever:{bus:"control",gain:.62,minGain:.12,layers:[{src:"noise",noise:"brown",at:0,dur:.05,a:.002,d:.018,s:.1,r:.024,peak:.36,filter:{type:"lowpass",freq:1100,to:420,q:1.2}},{src:"noise",noise:"white",at:.02,dur:.28,a:.028,d:.07,s:.55,r:.13,peak:.4,filter:{type:"bandpass",freq:2400,to:900,q:1.3},lfo:{rate:17,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:196,to:124,at:.02,dur:.28,a:.02,d:.07,s:.5,r:.12,peak:.16},{src:"noise",noise:"brown",at:.28,dur:.19,a:.002,d:.065,s:.18,r:.095,peak:.44,filter:{type:"lowpass",freq:720,to:190,q:1.5}},{src:"tone",wave:"sine",freq:96,to:58,at:.28,dur:.23,a:.003,d:.085,s:.2,r:.11,peak:.28,jitter:.04},{src:"noise",noise:"white",at:.28,dur:.03,a:.001,d:.01,s:0,r:.014,peak:.2,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"sawtooth",freq:74,to:148,at:.3,dur:.34,a:.05,d:.1,s:.68,r:.19,peak:.18,filter:{type:"lowpass",freq:420,to:1050,q:1.1}}]},ctl_lever_big:{bus:"control",gain:.72,minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.06,a:.002,d:.022,s:.1,r:.028,peak:.42,filter:{type:"lowpass",freq:820,to:300,q:1.2}},{src:"noise",noise:"white",at:.024,dur:.43,a:.04,d:.1,s:.6,r:.18,peak:.44,filter:{type:"bandpass",freq:1900,to:640,q:1.2},lfo:{rate:13,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:140,to:78,at:.024,dur:.43,a:.036,d:.1,s:.58,r:.175,peak:.22},{src:"noise",noise:"brown",at:.44,dur:.23,a:.002,d:.085,s:.18,r:.115,peak:.52,filter:{type:"lowpass",freq:640,to:150,q:1.6}},{src:"tone",wave:"sine",freq:128,to:62,at:.44,dur:.28,a:.003,d:.1,s:.2,r:.135,peak:.32},{src:"noise",noise:"white",at:.44,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"highpass",freq:2e3,q:.9}},{src:"tone",wave:"sawtooth",freq:62,to:132,at:.47,dur:.4,a:.06,d:.11,s:.7,r:.21,peak:.22,filter:{type:"lowpass",freq:380,to:980,q:1.1}}]},ctl_guard:{bus:"control",gain:.66,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.13,a:.02,d:.04,s:.55,r:.06,peak:.46,filter:{type:"bandpass",freq:1100,q:12},lfo:{rate:13,depth:380,target:"filter"}},{src:"noise",noise:"brown",at:.13,dur:.05,a:.001,d:.018,s:.1,r:.024,peak:.4,filter:{type:"lowpass",freq:700,to:300,q:1.2}},{src:"noise",noise:"white",at:.148,dur:.026,a:.001,d:.009,s:0,r:.012,peak:.44,filter:{type:"bandpass",freq:3400,to:2400,q:3.4}},{src:"noise",noise:"pink",at:.19,dur:.044,a:.001,d:.016,s:0,r:.02,peak:.48,filter:{type:"bandpass",freq:2100,to:1400,q:3.6}},{src:"tone",wave:"square",freq:1180,at:.19,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"lowpass",freq:4400,q:.7}},{src:"tone",wave:"triangle",freq:330,to:210,at:.225,dur:.16,a:.002,d:.05,s:.14,r:.08,peak:.24,jitter:.05}]},sonic_use:{bus:"control",gain:.58,minGain:.12,layers:[{src:"tone",wave:"square",freq:742,to:968,at:0,dur:.46,a:.01,d:.06,s:.72,r:.09,peak:.58,filter:{type:"bandpass",freq:1500,to:2300,q:3.2},lfo:{rate:16.5,depth:130,target:"freq"}},{src:"tone",wave:"square",freq:751,to:977,at:0,dur:.46,a:.012,d:.06,s:.68,r:.09,peak:.4,filter:{type:"bandpass",freq:1500,to:2300,q:3.2},lfo:{rate:13.2,depth:110,target:"freq"}},{src:"noise",noise:"white",at:0,dur:.46,a:.02,d:.08,s:.5,r:.1,peak:.16,filter:{type:"bandpass",freq:3400,to:5200,q:2},lfo:{rate:16.5,depth:900,target:"filter"}}]},sonic_draw:{bus:"control",gain:.46,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.11,a:.006,d:.05,s:.1,r:.05,peak:.62,filter:{type:"bandpass",freq:2200,to:1100,q:1.1}},{src:"tone",wave:"triangle",freq:1860,to:1520,at:.055,dur:.07,a:.001,d:.02,s:.08,r:.035,peak:.3,jitter:.04}]},sonic_stow:{bus:"control",gain:.42,minGain:.1,layers:[{src:"tone",wave:"triangle",freq:1460,to:1180,at:0,dur:.06,a:.001,d:.018,s:.06,r:.03,peak:.26,jitter:.04},{src:"noise",noise:"pink",at:.03,dur:.13,a:.008,d:.06,s:.08,r:.06,peak:.52,filter:{type:"lowpass",freq:1500,to:600,q:.9}}]},ctl_refuse:{bus:"control",gain:.62,minGain:.4,layers:[{src:"tone",wave:"sawtooth",freq:233.08,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.3,filter:{type:"bandpass",freq:480,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.26,filter:{type:"bandpass",freq:360,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:233.08,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.28,filter:{type:"bandpass",freq:460,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.24,filter:{type:"bandpass",freq:340,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"noise",noise:"brown",at:0,dur:.52,a:.006,d:.12,s:.3,r:.24,peak:.26,filter:{type:"lowpass",freq:700,to:300,q:1.2}}]},panel_wake:{bus:"machine",gain:.76,minGain:.08,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.56,filter:{type:"bandpass",freq:1600,to:1100,q:3}},{src:"noise",noise:"pink",at:.052,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.72,filter:{type:"bandpass",freq:1850,to:1250,q:3}},{src:"noise",noise:"white",at:.118,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.52,filter:{type:"bandpass",freq:1420,to:980,q:3}},{src:"noise",noise:"pink",at:.166,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.62,filter:{type:"bandpass",freq:2050,to:1400,q:3}},{src:"tone",wave:"sine",freq:660,at:.2,dur:.22,a:.004,d:.07,s:.16,r:.12,peak:.2}]},shutter_open:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sawtooth",freq:118,to:132,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:120.4,to:134.7,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:620,to:1350,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.44,filter:{type:"lowpass",freq:340,to:520,q:1}},{src:"noise",noise:"white",at:1.2,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.34,filter:{type:"highpass",freq:1500,q:.8}},{src:"noise",noise:"white",at:1.25,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.3,filter:{type:"highpass",freq:1700,q:.8}},{src:"tone",wave:"sine",freq:1180,to:3140,at:1.21,dur:.34,a:.006,d:.1,s:.24,r:.18,peak:.16},{src:"noise",noise:"white",at:1.21,dur:.2,a:.004,d:.06,s:.2,r:.1,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}}]},shutter_close:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sine",freq:3140,to:1180,at:0,dur:.3,a:.006,d:.09,s:.24,r:.15,peak:.16},{src:"noise",noise:"white",at:0,dur:.18,a:.004,d:.055,s:.18,r:.09,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}},{src:"tone",wave:"sawtooth",freq:132,to:118,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:134.7,to:120.4,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:1350,to:620,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.46,filter:{type:"lowpass",freq:520,to:340,q:1}},{src:"noise",noise:"brown",at:1.2,dur:.15,a:.002,d:.055,s:.08,r:.075,peak:.52,filter:{type:"lowpass",freq:800,to:150,q:1.4}},{src:"tone",wave:"sine",freq:196,to:104,at:1.2,dur:.17,a:.002,d:.062,s:.09,r:.085,peak:.38},{src:"noise",noise:"white",at:1.214,dur:.05,a:.002,d:.018,s:.05,r:.024,peak:.26,filter:{type:"bandpass",freq:2600,q:7}}]},fault_query:{bus:"machine",gain:.54,spot:"faultLocator",minGain:.18,layers:[{src:"noise",noise:"white",at:0,dur:3.96,a:.03,d:.12,s:.88,r:.24,peak:.5,filter:{type:"bandpass",freq:1550,q:6},lfo:{rate:9,depth:.95,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:3.96,a:.04,d:.14,s:.84,r:.26,peak:.46,filter:{type:"bandpass",freq:3100,q:4.5},lfo:{rate:6,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:112,at:0,dur:3.98,a:.05,d:.15,s:.8,r:.3,peak:.16,filter:{type:"lowpass",freq:380,q:1}},{src:"tone",wave:"sine",freq:98.5,at:0,dur:3.98,a:.06,d:.15,s:.82,r:.3,peak:.14},{src:"tone",wave:"sine",freq:100,at:.02,dur:3.96,a:.07,d:.15,s:.82,r:.3,peak:.12},{src:"noise",noise:"brown",at:.03,dur:3.95,a:.2,d:.4,s:.6,r:.6,peak:.4,filter:{type:"lowpass",freq:420,q:1}},{src:"noise",noise:"white",at:3.96,dur:.07,a:.002,d:.026,s:.05,r:.036,peak:.26,filter:{type:"bandpass",freq:1200,to:640,q:2.6}}]},food_dispense:{bus:"machine",gain:.66,spot:"foodMachine",minGain:.16,layers:[{src:"noise",noise:"pink",at:0,dur:.9,a:.03,d:.1,s:.75,r:.16,peak:.44,filter:{type:"bandpass",freq:1250,q:2.2},lfo:{rate:7,depth:.9,target:"gain"}},{src:"tone",wave:"sawtooth",freq:154,to:196,at:0,dur:.7,a:.06,d:.12,s:.68,r:.2,peak:.24,filter:{type:"lowpass",freq:420,to:600,q:1.3},lfo:{rate:11,depth:.4,target:"gain"}},{src:"noise",noise:"white",at:.15,dur:.07,a:.002,d:.026,s:.06,r:.036,peak:.32,filter:{type:"bandpass",freq:2400,to:1500,q:3}},{src:"noise",noise:"white",at:.55,dur:.075,a:.001,d:.028,s:.05,r:.038,peak:.42,filter:{type:"bandpass",freq:1750,to:820,q:2}},{src:"noise",noise:"brown",at:.552,dur:.095,a:.002,d:.035,s:.08,r:.048,peak:.36,filter:{type:"lowpass",freq:600,to:180,q:1.2}},{src:"tone",wave:"triangle",freq:213,at:.552,dur:.3,a:.002,d:.09,s:.18,r:.18,peak:.28,jitter:.04,filter:{type:"bandpass",freq:640,q:9}},{src:"tone",wave:"triangle",freq:341,at:.552,dur:.22,a:.002,d:.07,s:.16,r:.14,peak:.15,jitter:-.04,filter:{type:"bandpass",freq:900,q:8}},{src:"tone",wave:"sawtooth",freq:196,to:120,at:.7,dur:.6,a:.02,d:.16,s:.4,r:.34,peak:.18,filter:{type:"lowpass",freq:600,to:260,q:1.2}}]},door_locked:{bus:"control",gain:.56,spot:"doors",minGain:.28,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.72,filter:{type:"lowpass",freq:1e3,to:180,q:1.6}},{src:"tone",wave:"sine",freq:118,to:64,at:0,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.42},{src:"noise",noise:"brown",at:.13,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.66,filter:{type:"lowpass",freq:900,to:170,q:1.6}},{src:"tone",wave:"sine",freq:112,to:60,at:.13,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.38},{src:"tone",wave:"sawtooth",freq:96,at:.14,dur:.42,a:.01,d:.06,s:.7,r:.19,peak:.2,filter:{type:"bandpass",freq:480,q:7},lfo:{rate:50,depth:.9,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:.48,a:.004,d:.14,s:.22,r:.28,peak:.28,filter:{type:"bandpass",freq:520,to:230,q:1.6}}]},clock_tick:{bus:"machine",gain:.56,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.011,peak:.95,filter:{type:"bandpass",freq:3400,to:2300,q:5}},{src:"noise",noise:"brown",at:0,dur:.045,a:.001,d:.018,s:.1,r:.024,peak:.42,filter:{type:"lowpass",freq:700,to:300,q:1.4}},{src:"tone",wave:"triangle",freq:386,at:.002,dur:.12,a:.002,d:.04,s:.1,r:.07,peak:.2,jitter:.012,filter:{type:"bandpass",freq:430,q:8}}]},clock_tock:{bus:"machine",gain:.88,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"pink",at:0,dur:.024,a:.001,d:.009,s:0,r:.012,peak:1,filter:{type:"bandpass",freq:2600,to:1750,q:2.4}},{src:"noise",noise:"brown",at:0,dur:.048,a:.001,d:.019,s:.1,r:.026,peak:.42,filter:{type:"lowpass",freq:640,to:280,q:1.4}},{src:"tone",wave:"triangle",freq:368,at:.002,dur:.126,a:.002,d:.042,s:.1,r:.074,peak:.2,jitter:.012,filter:{type:"bandpass",freq:410,q:8}}]},prop_wood:{bus:"machine",gain:.62,minGain:.06,layers:[{src:"noise",noise:"brown",at:0,dur:.07,a:.002,d:.026,s:.1,r:.034,peak:.56,filter:{type:"lowpass",freq:1200,to:420,q:1.3}},{src:"tone",wave:"triangle",freq:196,at:0,dur:.18,a:.002,d:.06,s:.12,r:.11,peak:.22,jitter:.06,filter:{type:"bandpass",freq:196,q:8}},{src:"tone",wave:"triangle",freq:311,at:.004,dur:.14,a:.002,d:.048,s:.1,r:.086,peak:.14,jitter:-.06,filter:{type:"bandpass",freq:311,q:9}},{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.2,filter:{type:"bandpass",freq:2200,q:2.2}}]},step_a:{bus:"body",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.034,s:.1,r:.046,peak:.62,filter:{type:"lowpass",freq:820,to:190,q:1.3}},{src:"tone",wave:"sine",freq:148,to:76,at:0,dur:.1,a:.002,d:.036,s:.08,r:.05,peak:.34,jitter:.09},{src:"tone",wave:"triangle",freq:268,at:0,dur:.13,a:.002,d:.045,s:.14,r:.08,peak:.16,jitter:-.09,filter:{type:"bandpass",freq:300,q:7}},{src:"noise",noise:"white",at:0,dur:.04,a:.001,d:.015,s:0,r:.019,peak:.22,filter:{type:"bandpass",freq:2300,to:1400,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.22,filter:{type:"bandpass",freq:520,to:300,q:1.4}}]},step_b:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.086,a:.002,d:.032,s:.1,r:.044,peak:.58,filter:{type:"lowpass",freq:900,to:210,q:1.3}},{src:"tone",wave:"sine",freq:162,to:84,at:0,dur:.096,a:.002,d:.034,s:.08,r:.048,peak:.31,jitter:.09},{src:"tone",wave:"triangle",freq:279,at:0,dur:.126,a:.002,d:.043,s:.14,r:.078,peak:.15,jitter:-.09,filter:{type:"bandpass",freq:312,q:7}},{src:"noise",noise:"white",at:0,dur:.038,a:.001,d:.014,s:0,r:.018,peak:.2,filter:{type:"bandpass",freq:2650,to:1600,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.2,filter:{type:"bandpass",freq:580,to:330,q:1.4}}]},step_land:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.12,r:.08,peak:.82,filter:{type:"lowpass",freq:980,to:150,q:1.5}},{src:"tone",wave:"sine",freq:128,to:58,at:0,dur:.18,a:.002,d:.066,s:.1,r:.09,peak:.46},{src:"noise",noise:"white",at:0,dur:.048,a:.001,d:.018,s:0,r:.024,peak:.28,filter:{type:"bandpass",freq:2e3,to:1100,q:2}},{src:"noise",noise:"pink",at:.021,dur:.3,a:.006,d:.09,s:.18,r:.17,peak:.28,filter:{type:"bandpass",freq:470,to:260,q:1.3}}]},door_bolt:{bus:"control",gain:.6,spot:"doors",minGain:.26,layers:[{src:"tone",wave:"sawtooth",freq:96,at:0,dur:.23,a:.006,d:.07,s:.55,r:.11,peak:.22,filter:{type:"bandpass",freq:480,to:620,q:7},lfo:{rate:50,depth:.9,to:.1,target:"gain"}},{src:"noise",noise:"brown",at:.19,dur:.14,a:.002,d:.05,s:.1,r:.07,peak:.8,filter:{type:"lowpass",freq:1100,to:160,q:1.6}},{src:"tone",wave:"sine",freq:104,to:52,at:.19,dur:.15,a:.002,d:.054,s:.08,r:.076,peak:.44},{src:"noise",noise:"pink",at:.211,dur:.2,a:.004,d:.06,s:.16,r:.11,peak:.24,filter:{type:"bandpass",freq:500,to:290,q:1.4}}]},door_swing:{bus:"room",gain:.5,loop:!0,spot:"doors",minGain:.1,layers:[{src:"noise",noise:"brown",at:0,a:.18,s:1,r:.3,peak:.72,filter:{type:"lowpass",freq:220,q:1.1},lfo:{rate:.6,depth:40,target:"filter"}},{src:"noise",noise:"pink",at:0,a:.24,s:1,r:.34,peak:.3,filter:{type:"bandpass",freq:1300,q:1.3},lfo:{rate:.45,depth:600,target:"filter"}}]},door_stop:{bus:"machine",gain:.54,spot:"doors",minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.15,a:.002,d:.056,s:.08,r:.072,peak:.86,filter:{type:"lowpass",freq:700,to:240,q:1.4}},{src:"tone",wave:"sine",freq:92,to:46,at:0,dur:.16,a:.002,d:.058,s:.06,r:.074,peak:.4},{src:"tone",wave:"triangle",freq:4800,at:.002,dur:.3,a:.001,d:.11,s:.1,r:.17,peak:.14,filter:{type:"bandpass",freq:4800,q:9}},{src:"noise",noise:"pink",at:.021,dur:.19,a:.004,d:.058,s:.14,r:.1,peak:.2,filter:{type:"bandpass",freq:480,to:280,q:1.4}}]},door_shut:{bus:"machine",gain:.56,spot:"doors",minGain:.16,layers:[{src:"noise",noise:"brown",at:0,dur:.13,a:.002,d:.048,s:.1,r:.066,peak:.76,filter:{type:"lowpass",freq:860,to:200,q:1.4}},{src:"tone",wave:"sine",freq:134,to:68,at:0,dur:.14,a:.002,d:.05,s:.08,r:.07,peak:.38},{src:"noise",noise:"brown",at:.14,dur:.12,a:.002,d:.044,s:.08,r:.06,peak:.88,filter:{type:"lowpass",freq:620,to:150,q:1.7}},{src:"tone",wave:"sine",freq:86,to:42,at:.14,dur:.13,a:.002,d:.046,s:.06,r:.064,peak:.46},{src:"noise",noise:"pink",at:.161,dur:.21,a:.004,d:.064,s:.15,r:.115,peak:.22,filter:{type:"bandpass",freq:460,to:270,q:1.4}}]},ext_wind:{bus:"room",gain:.62,loop:!0,rate:.809,layers:[{src:"noise",noise:"brown",at:0,a:3,s:1,r:2.4,peak:.9,filter:{type:"lowpass",freq:120,q:.7},lfo:{rate:.037037,depth:45,target:"filter"}},{src:"noise",noise:"pink",at:0,a:3.6,s:1,r:2.6,peak:.44,filter:{type:"bandpass",freq:900,q:.8},lfo:{rate:.052632,depth:450,target:"filter"}},{src:"noise",noise:"white",at:1.7,a:4.4,s:1,r:3,peak:.09,filter:{type:"bandpass",freq:5200,q:1.8},lfo:{rate:.021277,depth:800,target:"filter"}}]},ext_grit:{bus:"room",gain:.46,loop:!0,rate:.5236,layers:[{src:"noise",noise:"pink",at:0,a:2.8,s:1,r:2.2,peak:.34,filter:{type:"bandpass",freq:1800,q:1.1},lfo:{rate:.043478,depth:500,target:"filter"}},{src:"noise",noise:"white",at:.9,a:3.2,s:1,r:2.4,peak:.16,filter:{type:"highpass",freq:3400,q:.9},lfo:{rate:.028571,depth:700,target:"filter"}}]},step_grit_a:{bus:"body",gain:.52,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.003,d:.042,s:.12,r:.058,peak:.54,filter:{type:"lowpass",freq:560,to:150,q:1.1}},{src:"tone",wave:"sine",freq:124,to:62,at:0,dur:.11,a:.003,d:.04,s:.08,r:.054,peak:.26,jitter:.09},{src:"noise",noise:"white",at:0,dur:.09,a:.002,d:.034,s:.06,r:.046,peak:.26,filter:{type:"bandpass",freq:1500,to:780,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.13,filter:{type:"lowpass",freq:420,to:240,q:.8}}]},step_grit_b:{bus:"body",gain:.5,layers:[{src:"noise",noise:"brown",at:0,dur:.104,a:.003,d:.04,s:.12,r:.056,peak:.5,filter:{type:"lowpass",freq:620,to:168,q:1.1}},{src:"tone",wave:"sine",freq:138,to:70,at:0,dur:.104,a:.003,d:.038,s:.08,r:.052,peak:.24,jitter:.09},{src:"noise",noise:"white",at:0,dur:.086,a:.002,d:.032,s:.06,r:.044,peak:.24,filter:{type:"bandpass",freq:1700,to:880,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.12,filter:{type:"lowpass",freq:460,to:260,q:.8}}]},mute_off:{bus:"control",gain:.55,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.13,a:.004,d:.04,s:.2,r:.07,peak:.28},{src:"tone",wave:"sine",freq:990,at:.07,dur:.16,a:.004,d:.05,s:.22,r:.09,peak:.22},{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.011,s:0,r:.015,peak:.2,filter:{type:"bandpass",freq:2400,q:3}}]}},Yp=["room_tone","room_air","console_hum","fault_idle"],vS={hatStand:1.14,chair:.86,clock:.72},MS={scanner:.92,faultLocator:.84,foodMachine:1.12},yS={vinyl:["step_a","step_b"],grit:["step_grit_a","step_grit_b"]},SS=2.4,ES=Math.PI/2,$p=1.8,jp=2.61,wS=.9,Kp=.045,Ga=et.FLAT_FACE+Kp/2,B0=$p/2,Zp=wS/2,bS=3.284,Jp=3.674;if(Math.abs(Jp-(bS+Ae.RADIUS+.05))>1e-12)throw new Error(`doors: the backstop plane no longer derives — WALK.RADIUS is ${Ae.RADIUS}`);const AS=[1,-1].map(n=>Object.freeze({x:n*2.4,z:4.15,hw:1.5,hd:1,rotY:0,y0:0,y1:et.CEIL_H})),TS=[1,-1].map(n=>Object.freeze({x:n*.7375,z:3.2655,hw:.1625,hd:.0705,rotY:0,y0:0,y1:jp})),Kf=Object.freeze({nx:0,nz:1,d:Jp}),RS=Object.freeze({opening:"The bolts draw back, and the doors swing inward.",closing:"The doors swing shut, and the bolts drive home.",alreadyOpen:"The doors are already open.",alreadyShut:"The doors are already shut.",busyOpening:"The doors are already opening.",busyClosing:"The doors are already closing.",shutters:"Door control: interlock — the scanner shutters are shut.",flight:"Door control: interlock — the ship is in flight.",remote:"Door control: no answer from the shell.",onYou:"Door control: the doors will not close on you.",locked:"The doors are locked.",lockOnOpen:"Door control: the doors must be shut before they can be locked.",didLock:"Door control: the doors are locked.",didUnlock:"Door control: the doors are unlocked.",unlockInFlight:"Door control: the ship is in flight."}),LS=et.FLAT_FACE-Ae.RADIUS;function Qp(n){const t=n<=0?0:n>=1?1:n;return t*t*(3-2*t)}function Zf(n){return ES*Qp(n)}function wa(n,t){const e=n>=0?1:-1,i=-e*t,s=-e*Zp;return{side:e,rotY:i,hingeX:e*B0,hingeZ:Ga,x:e*B0+s*Math.cos(i),z:Ga-s*Math.sin(i)}}function CS(n,t){const e=wa(n,t);return{x:e.x,z:e.z,hw:Zp,hd:Kp/2,rotY:e.rotY,y0:0,y1:jp}}function IS(n){const t=n<=0?0:n>=1?1:n;return 4*t*(1-t)}const ul=new Wt,Jf=new Wt,Qf=new Wt;function hl(n,t){const e=Array.isArray(n)?n:Array.isArray(n==null?void 0:n.leaves)?n.leaves:Array.isArray(n==null?void 0:n.pivots)?n.pivots:null;if(!e||e.length!==2)throw new Error(`doors: ${t} must hand over exactly two leaf pivots (got ${e?e.length:typeof n})`);const i=e.map((s,r)=>{var a,c;if(!s||!s.isObject3D)throw new Error(`doors: ${t} leaf ${r} is not an Object3D`);let o=((a=s.userData)==null?void 0:a.side)??((c=s.userData)==null?void 0:c.hingeSign)??0;return o||(o=Math.sign(s.position.x)),o||(o=r===0?1:-1,console.warn(`doors: ${t} leaf ${r} publishes no side and sits at x = 0 — assuming ${o>0?"right":"left"} from index order.`)),{obj:s,side:o}});if(i[0].side===i[1].side)throw new Error(`doors: ${t} hands over two leaves on the same side`);return i[0].side>0?i:[i[1],i[0]]}const td=.015,ed=new ii,Vr=new ii;function nd(n,t){for(const{obj:e,side:i}of n){Vr.makeEmpty();for(const s of e.children){const r=s.isMesh?s.geometry:null;r&&(r.boundingBox||r.computeBoundingBox(),r.boundingBox&&(s.updateMatrix(),ed.copy(r.boundingBox).applyMatrix4(s.matrix),Vr.union(ed)))}Vr.isEmpty()||Vr.min.z<-td&&console.warn(`[doors] ${t} ${i>0?"right":"left"} leaf reaches ${Vr.min.z.toFixed(4)} m BEHIND its hinge, past the ${td} m inner-face budget. The hinge looks to be on the leaf's OUTER face, and this module now drives it INWARD (-side * theta) — the leaf will sweep through its own jamb. Box.js must hang it at DOOR_Z - LEAF_T = 0.646 (docs/BOX.md §1.1).`)}}function PS(n,t,e={}){var Z;const i=e.shellDoors;if(!i)throw new Error("doors: needs shellDoors from shell(b, P, { liveDoors: true })");const s=(Z=n==null?void 0:n.userData)==null?void 0:Z.collision;if(!s||!Array.isArray(s.planes)||!Array.isArray(s.boxes))throw new Error("doors: b.userData.collision is missing — shell() must run first (Shell.js:457)");let r=e.audio||null,o=e.console||e.consoleUnit||null;const a=i.group||i.doorGroup||new _e;a.name=a.name||"doors";const c=hl(i,"shellDoors");for(const{obj:q}of c)q.parent||a.add(q);let l=e.boxDoors?hl(e.boxDoors,"boxDoors"):null;l&&nd(l,"boxDoors");const u=i.discs||null,h=[];if(u){if(!u.isInstancedMesh||u.count!==2)throw new Error(`doors: shellDoors.discs must be an InstancedMesh of 2 (got ${u.isInstancedMesh?u.count:typeof u})`);u.instanceMatrix.usage!==so&&u.instanceMatrix.setUsage(so);for(let q=0;q<2;q++){u.getMatrixAt(q,ul);const k=(Math.sign(ul.elements[12])||(q===0?1:-1))>0?c[0]:c[1];Qf.makeTranslation(k.side*B0,0,Ga).invert(),h.push({index:q,leaf:k,m:Qf.multiply(ul).clone()})}}const f=s.planes.findIndex(q=>q.nx===0&&q.nz===1&&q.d===et.FLAT_FACE);if(f<0)throw new Error("doors: the +Z half-plane is not in b.userData.collision.planes");const d=s.planes[f],_=s.boxes.findIndex(q=>q.rotY===0&&q.z===Ga&&q.hw===$p/2);if(_<0)throw new Error("doors: Shell's shut leaf box is not in b.userData.collision.boxes");const g=s.boxes[_],m=c.map(({side:q})=>({...CS(q,0)})),p=[...AS,...TS,...m];let v=!1;function M(q){if(q!==v)if(v=!!q,v)s.planes.splice(f,1),s.planes.push(Kf),s.boxes.splice(_,1),s.boxes.push(...p),E();else{const H=s.planes.indexOf(Kf);H>=0&&s.planes.splice(H,1),s.planes.splice(f,0,d);for(const k of p){const J=s.boxes.indexOf(k);J>=0&&s.boxes.splice(J,1)}s.boxes.splice(_,0,g)}}function E(){for(let q=0;q<2;q++){const H=wa(c[q].side,R),k=m[q];k.x=H.x,k.z=H.z,k.rotY=H.rotY}}let T=0,w=!1,S=0,R=0,D="noop",x=!1,y=!0;function A(){for(let q=0;q<2;q++){const H=wa(c[q].side,R);c[q].obj.rotation.y=H.rotY}if(l)for(const{obj:q,side:H}of l)q.rotation.y=-H*R;if(u){for(const q of h){const H=wa(q.leaf.side,R);Jf.makeRotationY(H.rotY).setPosition(H.hingeX,0,H.hingeZ),u.setMatrixAt(q.index,Jf.multiply(q.m))}u.instanceMatrix.needsUpdate=!0}}function L(q){var H;(H=o==null?void 0:o.setLamp)==null||H.call(o,"doors",q)}function O(q){return RS[q]}function F(q,H){var k;(k=r==null?void 0:r.play)==null||k.call(r,q,{handle:"door",spot:"doors",...H})}function I(q){q!==x&&(x=q,P())}function P(){var q,H,k,J;r&&(x?((q=r.startLoop)==null||q.call(r,"door_swing","doorSwing",{spot:"doors"}),(H=r.setLoopLevel)==null||H.call(r,"doorSwing",0,0)):((k=r.setLoopLevel)==null||k.call(r,"doorSwing",0,.06),(J=r.stopLoop)==null||J.call(r,"doorSwing")))}let U=!1;function Y(q,H={}){var nt,lt,ct;const k=!!q,J=H.running??((nt=H.rotor)==null?void 0:nt.running);return!k&&J===!0?((lt=o==null?void 0:o.blink)==null||lt.call(o,"doors",1),O("unlockInFlight")):k&&T!==0?((ct=o==null?void 0:o.blink)==null||ct.call(o,"doors",1),O("lockOnOpen")):(k===w||(w=k,L(!0),F(w?"door_bolt":"door_stop")),O(w?"didLock":"didUnlock"))}function K(q,H={}){var pt,xt,vt,B,me,Nt,qt,Rt,te;H.audio&&!r&&(r=H.audio),H.console&&!o&&(o=H.console);const k=q?1:0,J=H.shuttersOpen??((pt=H.fittings)==null?void 0:pt.shuttersOpen),nt=H.running??((xt=H.rotor)==null?void 0:xt.running),lt=H.worldId??((B=(vt=H.walker)==null?void 0:vt.world)==null?void 0:B.id),ct=H.playerZ??((Nt=(me=H.walker)==null?void 0:me.position)==null?void 0:Nt.z);if(!H.force&&J===void 0&&nt===void 0&&lt===void 0&&ct===void 0&&!U&&(U=!0,console.warn("[doors] request() was given no interlock context — every interlock is off. Pass { fittings, rotor, walker } (THRESHOLD §3.5).")),k===S)return D="noop",O(T===S?S?"alreadyOpen":"alreadyShut":S?"busyOpening":"busyClosing");if(!H.force){if(k===1&&w)return D="refused",(qt=o==null?void 0:o.blink)==null||qt.call(o,"doors",1),O("locked");if(k===0&&!H.atShell&&lt!==void 0&&lt!=="interior")return D="refused",(Rt=o==null?void 0:o.blink)==null||Rt.call(o,"doors",1),O("remote");if(k===0&&ct!==void 0&&ct>LS)return D="refused",(te=o==null?void 0:o.blink)==null||te.call(o,"doors",1),O("onYou")}return k===1&&T===0&&F("door_bolt"),S=k,D=k?"open":"close",L(!0),T!==S&&I(!0),O(k?"opening":"closing")}function Q(q){var k;const H=Number.isFinite(q)?q:0;if(H>0&&T!==S){const J=H/SS;T=S>T?Math.min(S,T+J):Math.max(S,T-J),Math.abs(S-T)<1e-9&&(T=S),R=Zf(T),y=!0,T>0&&M(!0),v&&E(),T===S?(I(!1),T===1&&F("door_stop"),T===0&&(F("door_shut"),M(!1),L(!1))):(k=r==null?void 0:r.setLoopLevel)==null||k.call(r,"doorSwing",IS(T))}y&&(A(),y=!1)}return A(),{group:a,leaves:c.map(q=>q.obj),discs:u,get t(){return T},get eased(){return Qp(T)},get angle(){return R},get open(){return T>0},get moving(){return T!==S},get state(){return T===0?"shut":T===1?"open":S?"opening":"closing"},get lastAction(){return D},get boxes(){return m},request:K,setLocked:Y,get locked(){return w},get flightReady(){return T===0&&w},update:Q,collisionFor:M,setBoxDoors(q){return l=q?hl(q,"boxDoors"):null,l&&nd(l,"boxDoors"),A(),y=!1,this},setAudio(q){return r=q||null,P(),this},setConsole(q){return o=q||null,this},force(q){return this.forceT(q?1:0)},forceT(q){return T=Math.min(1,Math.max(0,+q||0)),S=T,R=Zf(T),I(!1),M(T>0),v&&E(),L(T>0),y=!0,A(),this},dispose(){I(!1)}}}const wn=3.284,So=.071,Tn=Object.freeze({w:1.15,h:2.11}),DS=Tn.w/2,fi=Object.freeze({footprint:1.372,half:.686,height:2.9,plinth:1.452,post:.111,bodyTop:2.28,planeZ:So}),OS=Object.freeze([Object.freeze({x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:fi.bodyTop}),Object.freeze({x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:fi.bodyTop}),Object.freeze({x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:fi.bodyTop})]),id=1.4,de="interior",ba="exterior";function NS(n,t){const e=typeof n=="string"?n:n==null?void 0:n.id;if(e===de)return de;if(e===ba||t&&e===t)return ba;throw new Error(`link: unknown world id ${JSON.stringify(e)} — expected '${de}', '${ba}' or '${t}'`)}function US(n,t){var c;if(!t||typeof t!="object")throw new Error("link: landing must be a record { site, x, z, yaw }");for(const l of["x","z","yaw"])if(!Number.isFinite(t[l]))throw new Error(`link: landing.${l} must be a finite number, got ${t[l]}`);if(!n||typeof n!="object")throw new Error(`link: no site record for landing.site ${JSON.stringify(t.site)}`);if(n.id&&t.site&&n.id!==t.site)throw new Error(`link: landing names site '${t.site}' but was handed site '${n.id}'`);const e=typeof n.groundY=="function"?n.groundY.bind(n):null,i=fi.plinth/2,s=Math.cos(t.yaw),r=Math.sin(t.yaw),o=[[0,0],[+i,+i],[+i,-i],[-i,+i],[-i,-i]];for(const[l,u]of o){const h=t.x+l*s+u*r,f=t.z-l*r+u*s,d=e?e(h,f):((c=n.ground)==null?void 0:c.padY)??0;if(!Number.isFinite(d)||Math.abs(d)>.001)throw new Error(`link: landing '${t.site}' (${t.x}, ${t.z}) is not a level pad — ground is ${d} at (${h.toFixed(3)}, ${f.toFixed(3)}), and the link has no y offset to spend`)}const a=n.bounds;if(!a)throw new Error(`link: site '${n.id}' publishes no bounds`);if(Number.isFinite(a.apothem)){const l=Math.hypot(t.x,t.z),u=a.apothem-Ae.RADIUS-id;if(l>u)throw new Error(`link: landing '${t.site}' sits ${l.toFixed(3)} m from the site centre; the box cannot be walked round past ${u.toFixed(3)} m (apothem ${a.apothem} - WALK.RADIUS ${Ae.RADIUS} - walk-round ${id})`)}}function Tu(n,t){const e=typeof n=="string"?dn[n]:n;if(!e)throw new Error(`link: unknown landing ${JSON.stringify(n)} — known: ${Object.keys(dn).join(", ")}`);const i=t&&typeof t=="object"&&t[e.site]?t[e.site]:t&&t.id===e.site?t:null;US(i,e);const s=e.yaw,r=new Wt().makeTranslation(e.x,0,e.z).multiply(new Wt().makeRotationY(s)).multiply(new Wt().makeTranslation(0,0,So-wn)),o=r.clone().invert(),a=new z(0,0,1),c=new z(0,0,wn),l=new z(Math.sin(s),0,Math.cos(s)),u=c.clone().applyMatrix4(r),h=new Pi(new z(0,0,-1),wn),f=new Pi(l.clone(),-l.dot(u)),d=new tn;d.name="portalCam",d.matrixAutoUpdate=!1,d.matrixWorldAutoUpdate=!1;const _=i.id||e.site,g=v=>NS(v,_),m=v=>g(v)===de?1:-1,p=(v,M,E,T=new z)=>T.set(e.x+v*Wr(s)+E*qr(s),M,e.z-v*qr(s)+E*Wr(s));return{site:i,landing:Object.freeze({...e}),siteId:_,M_IE:r,M_EI:o,yaw:s,nI:a,pI:c,nE:l,pE:u,keepI:h,keepE:f,portalCam:d,M(v){return g(v)===de?r:o},keepFor(v){return g(v)===de?h:f},planeFor(v){return g(v)===de?{point:c,normal:a}:{point:u,normal:l}},distanceTo(v,M){return g(v)===de?M.z-wn:(M.x-u.x)*l.x+(M.z-u.z)*l.z},signFor:m,crossed(v,M,E){const T=m(v);return T*M<0&&T*E>=0},dYaw(v){return g(v)===de?s:-s},other(v){return g(v)===de?ba:de},boxCollision(){return OS.map(v=>({x:e.x+v.x*Wr(s)+v.z*qr(s),z:e.z-v.x*qr(s)+v.z*Wr(s),hw:v.hw,hd:v.hd,rotY:v.rotY+s,y0:v.y0,y1:v.y1}))},capPose(v){const M=Tn.h/2;return g(v)===de?{position:new z(0,M,wn),rotY:Math.PI,normal:a.clone().negate()}:{position:new z(u.x,M,u.z),rotY:s,normal:l.clone()}},apertureCorners(v){const M=g(v)===de,E=[];for(const[T,w]of[[1,0],[-1,0],[-1,1],[1,1]]){const S=T*DS,R=w*Tn.h;E.push(M?new z(S,R,wn):new z(u.x+S*Wr(s),R,u.z-S*qr(s)))}return E},toSite:p,toExterior(v,M=new z){return M.copy(v).applyMatrix4(r)},toInterior(v,M=new z){return M.copy(v).applyMatrix4(o)},doorSpillPoint(v=new z){return p(0,1.5,fi.half,v)},outsideSpawn(v=2.2,M=new z){return p(0,0,fi.half+v,M)}}}function Wr(n){return Math.cos(n)}function qr(n){return Math.sin(n)}const dn=Object.freeze({ashfall_pan:Object.freeze({site:"ashfall",x:0,z:-4.2,yaw:0}),ashfall_rim:Object.freeze({site:"ashfall",x:6.4,z:-4.9,yaw:2.356194}),verge_shelf:Object.freeze({site:"verge",x:-3.1,z:5.8,yaw:-1.047198}),alley_kerb:Object.freeze({site:"alley",x:-1.05,z:8.2,yaw:Math.PI,start:Object.freeze({x:-.15,z:-10.4,yaw:0}),boot:"exterior"})}),FS="alley_kerb";function kS(n,{landings:t=dn,fallback:e=FS}={}){const i=o=>n?typeof n=="string"?new URLSearchParams(n).get(o):typeof n.get=="function"?n.get(o):Object.prototype.hasOwnProperty.call(n,o)?String(n[o]):null:null,s=i("landing");if(s){const o=t[s];if(!o)throw new Error(`link: ?landing=${s} is not a known landing — known: ${Object.keys(t).join(", ")}`);return o}const r=i("site");if(r){const o=a=>{const c=i(a);if(c===null||c==="")return 0;const l=Number(c);if(!Number.isFinite(l))throw new Error(`link: ?${a}=${c} is not a number`);return l};return Object.freeze({site:r,x:o("x"),z:o("z"),yaw:o("yaw")})}return t[e]}const Se=Math.PI*2,Va=Math.PI/180,cn=n=>n<0?0:n>1?1:n,Ru=n=>n*n*(3-2*n),xs=(n,t,e)=>n+(t-n)*e;function fl(n,t=0){const e=n*Va,i=t*Va,s=Math.cos(i);return new z(Math.sin(e)*s,Math.sin(i),Math.cos(e)*s)}function zS(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function BS(n){let t=zS(n)||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function tm(n){for(const t of Object.values(n))t&&typeof t=="object"&&tm(t);return Object.freeze(n)}const dl=Object.freeze(["id","name","sky","suns","sun","bounce","hemi","ambient","fog","ground","grit","rock","horizon","bounds","beds","ambience","props","extras","lamps"]),HS=Object.freeze(["distance","camera","area"]),GS=1.4,VS=.8,WS=1.1,qS=.2968,XS=.796;function pl(n){const t=n/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function YS(n){return .2126*pl(n>>16&255)+.7152*pl(n>>8&255)+.0722*pl(n&255)}function $S(n){if(Number.isFinite(n.sun.gain))return n.sun.gain;const t=Math.max(.05,Math.sin(n.sun.elevationDeg*Math.PI/180)),e=Math.max(1e-4,YS(n.ground.colour)*n.sun.intensity*t);return qS/e**XS}function Lu(n){if(n==null||typeof n!="object")throw new Error("SITE_SHAPE: not a record");if("exposure"in n)throw new Error(`SITE_SHAPE '${n.id}': there is no 'exposure' key in a site record. toneMappingExposure is renderer-global (main.js:83) and both render passes happen inside one frame, so an exterior exposure would change the console room's look through the portal in the same frame. Brightness comes from light intensities and albedo. THRESHOLD.md §4.2.`);for(const c of dl)if(!(c in n))throw new Error(`SITE_SHAPE '${n.id}': missing key '${c}'`);for(const c of Object.keys(n))if(!dl.includes(c))throw HS.includes(c)?new Error(`SITE_SHAPE '${n.id}': '${c}' is DERIVED here, not typed in the record`):new Error(`SITE_SHAPE '${n.id}': unknown key '${c}' (keys: ${dl.join(", ")})`);const t=Object.keys(H0);if(!t.includes(n.horizon.silhouette))throw new Error(`SITE_SHAPE '${n.id}': horizon.silhouette '${n.horizon.silhouette}' is not a shipped kind (${t.join(" | ")}). A new shape is ~25 lines in SITE_KIND_BUILDERS and is then shared by every site from then on.`);for(const c of n.props)if(!t.includes(c.kind))throw new Error(`SITE_SHAPE '${n.id}': prop kind '${c.kind}' is not a shipped kind (${t.join(" | ")})`);const e=G0[n.bounds.kind];if(!e)throw new Error(`SITE_SHAPE '${n.id}': bounds.kind '${n.bounds.kind}' is not a shipped kind (${Object.keys(G0).join(" | ")}). A new shape is a row in BOUNDS_KINDS and is then shared by every site from then on.`);e.validate(n.bounds,n.id);const i=e.metrics(n.bounds),s=i.area,r=i.max,o={ref:GS,max:r,fade:.25*r,panWidth:VS,panNear:WS},a={far:Math.ceil(n.sky.radius*1.1/10)*10};return tm({...n,area:s,distance:o,camera:a})}const mt=512,Xr=n=>n*mt,jS=.06,ml=.055,KS=.035;let sd=!1;function em(){sd||(sd=!0,Te("ashField",(n,t={})=>{const e=t.p0??48,i=t.amp??.28,s=t.ripple??2.2,r=le(n,mt,{p0:e,octaves:4}),o=le(n,mt,{p0:Math.max(4,Math.round(e/6)),octaves:2}),a=.38,c=Math.max(1,Math.round(s*Math.cos(a))),l=Math.round(s*Math.sin(a)),u=new Float32Array(mt*mt),h=new Float32Array(mt*mt),f=new Float32Array(mt*mt);for(let d=0;d<mt;d++){const _=d/mt;for(let g=0;g<mt;g++){const m=d*mt+g,p=g/mt,v=Se*(c*p+l*_)+(o[m]-.5)*2.4,M=.5-.5*Math.cos(v),E=cn(.58*M*(.55+.45*r[m])+.42*r[m]);u[m]=E,h[m]=.7+.3*E,f[m]=.94-.13*E}}return{normalMap:Hn(u,mt,Xr(i*jS)),ormMap:He(mt,h,f,null),normalScale:1,uvScale:[1,1]}}),Te("siteRock",(n,t={})=>{const e=t.p0??24,i=t.amp??1,s=le(n,mt,{p0:e,octaves:5}),r=le(n,mt,{p0:e*2,octaves:3}),o=new Float32Array(mt*mt),a=new Float32Array(mt*mt),c=new Float32Array(mt*mt);for(let l=0;l<mt*mt;l++){const u=1-Math.abs(2*r[l]-1),h=cn(.58*s[l]+.42*u);o[l]=h,a[l]=.62+.38*h,c[l]=.92-.2*u}return{normalMap:Hn(o,mt,Xr(i*ml)),ormMap:He(mt,a,c,null),normalScale:1,uvScale:[1,1]}}),Te("brick",(n,t={})=>{const e=t.rows??8,i=t.cols??4,s=t.joint??.075,r=t.amp??1;if(e%2!==0)throw new Error(`brick: rows must be EVEN (got ${e}) — alternate courses are offset by half a brick, so an odd count faults the bond at the tile seam`);if(i!==Math.round(i)||i<1)throw new Error(`brick: cols must be a whole number of bricks (got ${i}) or the bond does not close horizontally`);const o=le(n,mt,{p0:128,octaves:4}),a=le(n,mt,{p0:16,octaves:3}),c=new Float32Array(mt*mt),l=new Float32Array(mt*mt),u=new Float32Array(mt*mt),h=(f,d)=>{const _=Math.sin(f*127.1+d*311.7)*43758.5453;return _-Math.floor(_)};for(let f=0;f<mt;f++){const d=f/mt*e,_=Math.floor(d),g=d-_,m=_&1?.5:0;for(let p=0;p<mt;p++){const v=f*mt+p,M=p/mt*i+m,E=Math.floor(M),T=M-E,w=Math.min(g,1-g)/s,S=Math.min(T,1-T)/(s*.66*(e/i)/2.5),R=Math.min(w,S),D=cn(R*1.6-.15),x=h(_,E),y=.3+.7*D;c[v]=cn(y+.045*(o[v]-.5)+.05*(a[v]-.5)*D),l[v]=(.55+.45*D)*(.91+.18*x),u[v]=.96-.16*D-.05*x}}return{normalMap:Hn(c,mt,Xr(r*ml*.55)),ormMap:He(mt,l,u,null),normalScale:1,uvScale:[1,1]}}),Te("asphalt",(n,t={})=>{const e=t.p0??112,i=t.amp??1,s=t.wet??.55,r=le(n,mt,{p0:e,octaves:4}),o=le(n,mt,{p0:9,octaves:3}),a=le(n,mt,{p0:5,octaves:2}),c=new Float32Array(mt*mt),l=new Float32Array(mt*mt),u=new Float32Array(mt*mt);for(let h=0;h<mt*mt;h++){const f=r[h];c[h]=cn(.5+.42*(f-.5)+.16*(a[h]-.5)),l[h]=.74+.26*cn(.55+.9*(f-.5));const d=cn((.52-a[h])*3.4)*s;u[h]=cn(.94-.09*o[h]-.72*d)}return{normalMap:Hn(c,mt,Xr(i*ml*.3)),ormMap:He(mt,l,u,null),normalScale:1,uvScale:[1,1]}}),Te("policePanel",(n,t={})=>{const e=t.inset??.15,i=t.bead??.045,s=t.depth??1,r=t.plain===!0,o=le(n,mt,{p0:96,octaves:3}),a=le(n,mt,{p0x:6,p0y:200,octaves:2}),c=new Float32Array(mt*mt),l=new Float32Array(mt*mt),u=new Float32Array(mt*mt),h=e-i,f=e;for(let d=0;d<mt;d++){const _=d/mt;for(let g=0;g<mt;g++){const m=d*mt+g,p=g/mt,v=Math.min(p,1-p,_,1-_),M=r?1:Ru(cn((v-h)/(f-h))),E=.015*(o[m]-.5)+.008*(a[m]-.5);c[m]=cn(M+E),l[m]=.72+.28*M,u[m]=.34+.14*(1-M)+.05*o[m]}}return{normalMap:Hn(c,mt,Xr(s*KS)),ormMap:He(mt,l,u,null),normalScale:1,uvScale:[1,1]}}))}const _l=new Map;function ZS(n,t=null){if(_l.has(n.id))return _l.get(n.id);em();const e={},i=ns(n.ground.recipe,t?t.child("tex."+n.ground.recipe+"."+n.id):null,{p0:n.ground.relief.p0,amp:n.ground.relief.amp,ripple:n.ground.relief.ripple});e.GROUND=new Ja({color:n.ground.colour,roughness:1,metalness:0,specularIntensity:n.ground.specular??.15,normalMap:i.normalMap,normalScale:new Ft(i.normalScale,i.normalScale),aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),e.GROUND.userData.uvScale=[n.ground.uvScale,n.ground.uvScale],e.GROUND.userData.cast=!1,e.GROUND.userData.surface=n.ground.recipe;const s=n.rock.recipe??"siteRock",r=ns(s,t?t.child("tex."+s+"."+n.id):null,n.rock.opts??{}),o=s==="siteRock"?r:ns("siteRock",t?t.child("tex.siteRock."+n.id):null,{}),a=n.rock.tile??n.ground.uvScale*.8,c=n.ground.uvScale*.25,l=(u,h,f)=>{const d=new nn({color:u,roughness:1,metalness:0,normalMap:f.normalMap,normalScale:new Ft(f.normalScale,f.normalScale),aoMap:f.ormMap,roughnessMap:f.ormMap,aoMapIntensity:1,vertexColors:!0});return d.userData.uvScale=[h,h],d.userData.cast=!0,d.userData.surface="siteRock",d};e.ROCK=l(n.rock.colour,a,r),e.GRIT=l(n.grit.colour,c,o);for(const[u,h]of Object.entries(n.extras??{})){const f=h.recipe??"siteRock",d=f===s?r:f==="siteRock"?o:ns(f,t?t.child("tex."+f+"."+n.id):null,h.opts??{}),_=new nn({color:h.colour,roughness:h.roughness??1,metalness:0,normalMap:d.normalMap,normalScale:new Ft(d.normalScale*(h.relief??1),d.normalScale*(h.relief??1)),aoMap:d.ormMap,aoMapIntensity:1,vertexColors:!0});h.roughness===void 0&&(_.roughnessMap=d.ormMap),_.userData.uvScale=[h.tile??.5,h.tile??.5],_.userData.cast=!0,_.userData.surface="siteRock",e[u]=_}e.SKY=new li({color:16777215,vertexColors:!0,side:vn,depthWrite:!1,fog:!1}),e.SUNS=new Map;for(const u of n.suns)e.SUNS.has(u.colour)||e.SUNS.set(u.colour,new li({color:u.colour,fog:!1}));return e.HORIZON=new li({color:16777215,vertexColors:!0,fog:!1}),e.DECAL=new li({map:JS(),color:new Ut(n.ground.colour).multiplyScalar(.42),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e.DECAL.userData.decal=!0,_l.set(n.id,e),e}let gl=null;function JS(){if(gl)return gl;const n=64,t=(n-1)/2,e=new Uint8Array(n*n*4);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=(s*n+r)*4,a=Math.hypot(r-t,s-t)/t,c=1-Ru(cn((a-.35)/.65));e[o]=255,e[o+1]=255,e[o+2]=255,e[o+3]=c*255+.5|0}const i=new go(e,n,n,hn);return i.minFilter=Oe,i.magFilter=Oe,i.generateMipmaps=!1,i.needsUpdate=!0,gl=i,i}function Ki(n,t,e,i,s,r,o,a,c=0,l=.035){const u=Ct("siteRock",t,e,i,0,{material:n.ROCK,chamfer:l,cast:!0});return u.position.set(s,r,o),u.rotation.set(c,a,c*.6),u}const Zt=(n,t,e)=>2*(n*t+n*e+t*e),Li=180;function xl(n,t,e){const{M:i,distance:s,height:r,base:o,tint:a,haze:c}=t;let l=0;for(let S=0;S<Li;S++)l=Math.max(l,e(S/Li));const u=S=>e(S)/(l||1),h=new Float32Array(Li*6*3),f=new Float32Array(Li*6*3),d=new Float32Array(Li*6*3);let _=0;const g=new Ut(c),m=new Ut(a),p=new Ut,v=(S,R,D,x)=>{h[_*3]=S,h[_*3+1]=R,h[_*3+2]=D;const y=Math.pow(cn(R/Math.max(x,1e-6)),.6);p.copy(g).lerp(m,y),f[_*3]=p.r,f[_*3+1]=p.g,f[_*3+2]=p.b;const A=1/Math.max(Math.hypot(S,D),1e-6);d[_*3]=-S*A,d[_*3+1]=0,d[_*3+2]=-D*A,_++},M=(S,R,D,x)=>{const y=R[0]-S[0],A=R[1]-S[1],L=R[2]-S[2],O=D[0]-S[0],F=D[1]-S[1],I=D[2]-S[2],P=A*I-L*F,U=y*F-A*O,Y=(S[0]+R[0]+D[0])/3,K=(S[2]+R[2]+D[2])/3,Q=P*Y+U*K>0?D:R,Z=P*Y+U*K>0?R:D;v(S[0],S[1],S[2],x),v(Q[0],Q[1],Q[2],x),v(Z[0],Z[1],Z[2],x)};let E=0;const T=o+r;for(let S=0;S<Li;S++){const R=S/Li,D=(S+1)/Li,x=R*Se,y=D*Se,A=Math.sin(x)*s,L=Math.cos(x)*s,O=Math.sin(y)*s,F=Math.cos(y)*s,I=o+r*u(R),P=o+r*u(D),U=-14;M([A,U,L],[O,U,F],[O,P,F],T),M([A,U,L],[O,P,F],[A,I,L],T),E+=s*Se/Li*((I+P)/2)}const w=new pn;return w.setAttribute("position",new he(h,3)),w.setAttribute("normal",new he(d,3)),w.setAttribute("color",new he(f,3)),n.add(new It(w,i.HORIZON)),{w:s*2,d:s*2,h:T,area:E}}function vl(n,t,e){const i=t.map(()=>n()*Se),s=e.reduce((r,o)=>r+o,0);return r=>{let o=0;for(let a=0;a<t.length;a++)o+=e[a]*Math.sin(t[a]*Se*r+i[a]);return .5+.5*(o/s)}}const H0=Object.freeze({ridge(n,t){const e=vl(t.rand,[1,2,3,5,8],[1,.62,.38,.22,.11]);return xl(n,t,i=>.24+.76*e(i))},spires(n,t){const e=vl(t.rand,[2,3,5],[1,.5,.3]),i=t.rand()*Se,s=t.rand()*Se,r=t.rand()*Se,o=a=>Math.max(Math.pow(.5+.5*Math.sin(13*Se*a+i),14),Math.max(Math.pow(.5+.5*Math.sin(17*Se*a+s),14),Math.pow(.5+.5*Math.sin(23*Se*a+r),14)));return xl(n,t,a=>cn(.16+.34*e(a)+.62*o(a)))},dunes(n,t){const e=vl(t.rand,[1,2,3],[1,.45,.2]);return xl(n,t,i=>.3+.7*Math.min(1,Ru(e(i))*1.35))},outcrop(n,t){const{M:e,rand:i}=t,s=()=>i()-.5;return n.add(Ki(e,1.3,.46,1.05,0,.21,0,0+.2*s(),.03)),n.add(Ki(e,.96,1.04,.82,.06*s(),.7,.05*s(),.34+.3*s(),.04)),n.add(Ki(e,.64,.72,.58,.1+.1*s(),1.32,-.08+.1*s(),-.48+.3*s(),.05)),n.add(Ki(e,.4,.34,.36,.16,1.62,-.04,.9+.4*s(),.08)),n.add(Ki(e,.52,.19,.44,.74,.08,-.38,1.2+.5*s(),.06)),{w:1.3,d:1.05,h:1.72,area:Zt(1.3,.46,1.05)+Zt(.96,1.04,.82)+Zt(.64,.72,.58)+Zt(.4,.34,.36)+Zt(.52,.19,.44)}},shard(n,t){const{M:e,rand:i}=t,s=2.6,r=new It(new Qt(.07,.4,s,5,1),e.ROCK);r.position.set(0,s/2-.1,0),r.rotation.set(.17+.06*i(),i()*Se,.06*(i()-.5)),r.castShadow=!0,n.add(r),n.add(Ki(e,.86,.3,.78,.04,.13,.02,i()*Se,.02)),n.add(Ki(e,.4,.22,.34,-.58,.09,.26,i()*Se,.05));const o=Math.hypot(s,.33);return{w:.9,d:.82,h:s,area:Math.PI*(.07+.4)*o+Zt(.86,.3,.78)+Zt(.4,.22,.34)}},marker(n,t){const{M:e,rand:i}=t,s=.34,r=1.86,o=new _e;o.position.set(0,-s,0),o.rotation.set(-.2,.04*(i()-.5),0),n.add(o);const a=Ct("siteRock",.62,r,.22,0,{material:e.ROCK,chamfer:.03,cast:!0});a.position.y=r/2,o.add(a);let c=Zt(.62,r,.22);for(let l=0;l<6;l++){const u=.66-l*.02,h=.058-l*.004,f=Ct("siteRock",u,h,.26,0,{material:e.ROCK,chamfer:.012,cast:!0});f.position.set(0,.3+l*.26,0),o.add(f),c+=Zt(u,h,.26)}return n.add(Ki(e,.46,.2,.4,.34,.07,-.22,i()*Se,.04)),c+=Zt(.46,.2,.4),{w:.8,d:.62,h:(r-s)*Math.cos(.2),area:c}},bin(n,t){const{M:e,rand:i}=t,s=.58,r=.72,o=1.06;let a=0;const c=new _e;c.rotation.x=-.055,c.position.y=.075,n.add(c);const l=Ct("siteRock",s,o,r*.86,0,{material:e.PLASTIC,chamfer:.025,cast:!0});l.position.y=o/2,c.add(l),a+=Zt(s,o,r*.86);const u=Ct("siteRock",s+.04,.075,r*.86+.05,0,{material:e.PLASTIC,chamfer:.02,cast:!0});u.position.set(0,o+.035,.01),u.rotation.x=-.07*i(),c.add(u),a+=Zt(s+.04,.075,r*.86+.05);const h=Ct("siteRock",s*.82,.045,.045,0,{material:e.METAL,chamfer:.015,cast:!0});h.position.set(0,o-.06,-r*.43-.03),c.add(h),a+=Zt(s*.82,.045,.045);const f=Ct("siteRock",s*.9,.05,.07,0,{material:e.METAL,chamfer:.012,cast:!0});f.position.set(0,o*.74,r*.43+.02),c.add(f),a+=Zt(s*.9,.05,.07);for(const d of[-1,1]){const _=Ct("siteRock",.055,.16,.16,0,{material:e.METAL,chamfer:.05,cast:!0});_.position.set(d*(s/2-.04),.08,-r*.34),n.add(_),a+=Zt(.055,.16,.16)}return{w:s+.06,d:r,h:o+.11,area:a}},skip(n,t){const{M:e,rand:i}=t,s=2.6,r=1.52,o=1.02,a=.035;let c=0;const l=Ct("siteRock",s,a*2,r,0,{material:e.METAL,chamfer:.01,cast:!0});l.position.y=.09,n.add(l),c+=Zt(s,a*2,r);for(const g of[-1,1]){const m=Ct("siteRock",s+.1,.09,.1,0,{material:e.METAL,chamfer:.012,cast:!0});m.position.set(0,.045,g*(r/2-.16)),n.add(m),c+=Zt(s+.1,.09,.1)}const u=.3;for(const g of[-1,1]){const m=Ct("siteRock",s,o,a,0,{material:e.METAL,chamfer:.008,cast:!0});m.position.set(0,.09+o/2*Math.cos(u),g*(r/2+o/2*Math.sin(u))),m.rotation.x=-g*u,n.add(m),c+=Zt(s,o,a)}const h=.38;for(const g of[-1,1]){const m=Ct("siteRock",a,o,r,0,{material:e.METAL,chamfer:.008,cast:!0});m.position.set(g*(s/2+o/2*Math.sin(h)),.09+o/2*Math.cos(h),0),m.rotation.z=g*h,n.add(m),c+=Zt(a,o,r)}const f=.09+o*Math.cos(u),d=r/2+o*Math.sin(u),_=s/2+o*Math.sin(h);for(const g of[-1,1]){const m=Ct("siteRock",_*2,.06,.075,0,{material:e.METAL,chamfer:.02,cast:!0});m.position.set(0,f,g*d),n.add(m),c+=Zt(_*2,.06,.075)}for(const g of[-1,1]){const m=Ct("siteRock",.075,.06,d*2,0,{material:e.METAL,chamfer:.02,cast:!0});m.position.set(g*_,f,0),n.add(m),c+=Zt(.075,.06,d*2)}for(const g of[-1,1])for(const m of[-1,1]){const p=Ct("siteRock",.1,.2,.05,0,{material:e.METAL,chamfer:.015,cast:!0});p.position.set(g*s*.3,f-.14,m*(d+.03)),n.add(p),c+=Zt(.1,.2,.05)}for(let g=0;g<5;g++){const m=.3+i()*.45,p=.24+i()*.35,v=.12+i()*.2,M=Ct("siteRock",m,v,p,0,{material:e.ROCK,chamfer:.02,cast:!0});M.position.set((i()-.5)*s*.7,f-.06+v/2*i(),(i()-.5)*r*.6),M.rotation.set(.2*(i()-.5),i()*Se,.2*(i()-.5)),n.add(M),c+=Zt(m,v,p)}return{w:_*2,d:d*2,h:f+.1,area:c}},pipe(n,t){const{M:e}=t,i=6.2,s=.055;let r=0;const o=Ct("siteRock",s*2,i,s*2,0,{material:e.METAL,chamfer:s*.8,cast:!0});o.position.set(0,i/2,s),n.add(o),r+=Zt(s*2,i,s*2);for(let l=.9;l<i;l+=1.55){const u=Ct("siteRock",s*2.5,.07,s*2.5,0,{material:e.METAL,chamfer:.02,cast:!0});u.position.set(0,l,s),n.add(u),r+=Zt(s*2.5,.07,s*2.5)}const a=Ct("siteRock",.24,.26,.17,0,{material:e.METAL,chamfer:.02,cast:!0});a.position.set(0,i-.05,.085),n.add(a),r+=Zt(.24,.26,.17);const c=Ct("siteRock",s*2.2,.22,.2,0,{material:e.METAL,chamfer:.03,cast:!0});return c.position.set(0,.16,.14),c.rotation.x=.42,n.add(c),r+=Zt(s*2.2,.22,.2),{w:.26,d:.22,h:.4,area:r}},wallLamp(n,t){const{M:e}=t,i=3.05;let s=0;const r=Ct("siteRock",.05,.05,.42,0,{material:e.METAL,chamfer:.012,cast:!0});r.position.set(0,i,.21),n.add(r),s+=Zt(.05,.05,.42);const o=Ct("siteRock",.14,.2,.03,0,{material:e.METAL,chamfer:.01,cast:!0});o.position.set(0,i,.015),n.add(o),s+=Zt(.14,.2,.03);const a=Ct("siteRock",.34,.07,.26,0,{material:e.METAL,chamfer:.02,cast:!0});a.position.set(0,i+.01,.42),n.add(a),s+=Zt(.34,.07,.26);const c=Ct("siteRock",.26,.02,.19,0,{material:e.HORIZON,chamfer:.008,cast:!1});return c.position.set(0,i-.035,.42),n.add(c),s+=Zt(.26,.02,.19),{w:.36,d:.56,h:.42,y0:2.8,area:s}},crate(n,t){const{M:e,rand:i}=t;let s=0,r=0;for(let a=0;a<3;a++){const c=Ct("siteRock",1.2,.14,.8,0,{material:e.ROCK,chamfer:.01,cast:!0});c.position.set(.04*(i()-.5),r+.07,.05*(i()-.5)),c.rotation.y=.06*(i()-.5),n.add(c),s+=Zt(1.2,.14,.8),r+=.14}const o=Ct("siteRock",.62,.5,.54,0,{material:e.ROCK,chamfer:.015,cast:!0});return o.position.set(.12,r+.25,-.04),o.rotation.y=.22,n.add(o),s+=Zt(.62,.5,.54),{w:1.26,d:.86,h:r+.5,area:s}},fireDoor(n,t){const{M:e}=t;let i=0;const s=.92,r=2.05,o=Ct("siteRock",s+.1,r+.1,.02,0,{material:e.METAL,chamfer:0,cast:!1});o.position.set(0,(r+.1)/2,.02),n.add(o),i+=Zt(s+.1,r+.1,.02);const a=Ct("siteRock",s,r,.055,0,{material:e.METAL,chamfer:.008,cast:!0});a.position.set(0,r/2,.055),n.add(a),i+=Zt(s,r,.055);const c=Ct("siteRock",s*.76,.06,.06,0,{material:e.METAL,chamfer:.02,cast:!0});c.position.set(0,1.02,.11),n.add(c),i+=Zt(s*.76,.06,.06);const l=Ct("siteRock",s+.22,.09,.3,0,{material:e.ROCK,chamfer:.015,cast:!0});return l.position.set(0,.045,.17),n.add(l),i+=Zt(s+.22,.09,.3),{w:s+.22,d:.34,h:.14,area:i}}}),G0=Object.freeze({polygon:{validate(n,t){if(!(n.sides>=5))throw new Error(`SITE_SHAPE '${t}': bounds.sides must be >= 5`);if(!(n.apothem>0))throw new Error(`SITE_SHAPE '${t}': bounds.apothem must be > 0`)},metrics(n){const t=n.sides,e=n.apothem;return{area:t*e*e*Math.tan(Math.PI/t),longest:2*e/Math.cos(Math.PI/t),reach:e/Math.cos(Math.PI/t),max:1.25*2*e/Math.cos(Math.PI/t)}},sample(n,t){const e=Math.sqrt(n())*t.apothem*.97,i=n()*Se;return{x:Math.sin(i)*e,z:Math.cos(i)*e}},rim(n,t){const{SITE:e,M:i,boxArea:s}=t,r=e.bounds.sides,o=e.bounds.apothem,a=2*o*Math.tan(Math.PI/r),c=[],l=.58,u=.34,h=Math.min(.55,e.bounds.rimH*.48),f=e.bounds.rimH-h,d=2*l*Math.tan(Math.PI/r)+.06;let _=0;for(let g=0;g<r;g++){const m=g*Se/r,p=Math.sin(m),v=Math.cos(m),M=Ct("siteRock",a+d,h,l,0,{material:i.ROCK,chamfer:.05,cast:!0});M.position.set(p*(o+l/2),h/2,v*(o+l/2)),M.rotation.y=m,n.add(M);const E=Ct("siteRock",a+d*.6,f,u,0,{material:i.ROCK,chamfer:.07,cast:!0});E.position.set(p*(o+l+u/2-.08),h+f/2,v*(o+l+u/2-.08)),E.rotation.y=m,n.add(E),_+=s(a+d,h,l)+s(a+d*.6,f,u),c.push({nx:p,nz:v,d:o})}return{planes:c,area:_}}},corridor:{validate(n,t){if(!(n.width>0))throw new Error(`SITE_SHAPE '${t}': bounds.width must be > 0`);if(!(n.length>0))throw new Error(`SITE_SHAPE '${t}': bounds.length must be > 0`);if(!(n.wallH>0))throw new Error(`SITE_SHAPE '${t}': bounds.wallH must be > 0`);if(n.width>n.length)throw new Error(`SITE_SHAPE '${t}': bounds.width ${n.width} exceeds length ${n.length} — a corridor is long and thin, and the two are almost certainly the wrong way round`)},metrics(n){const t=n.width,e=n.length;return{area:t*e,longest:Math.sqrt(t*t+e*e),reach:Math.sqrt(t*t+e*e)/2,max:1.25*Math.sqrt(n.width*n.width+n.length*n.length)}},sample(n,t){return{x:(n()-.5)*t.width*.97,z:(n()-.5)*t.length*.97}},rim(n,t){const{SITE:e,M:i,boxArea:s}=t,r=e.bounds,o=r.width/2,a=r.length/2,c=r.wallH,l=r.wallT??.45,u=[];let h=0;const f=(p,v,M,E,T,w,S)=>{const R=Ct("siteRock",p,v,M,0,{material:i.ROCK,chamfer:.02,cast:!0});R.position.set(E,T,w),R.rotation.y=S,n.add(R),h+=s(p,v,M)};for(const p of[-1,1])f(l,c,r.length+2*l,p*(o+l/2),c/2,0,0),u.push({nx:p,nz:0,d:o});for(const p of[-1,1])f(r.width,c,l,0,c/2,p*(a+l/2),0),u.push({nx:0,nz:p,d:a});const d=.06,_=.09;for(const p of[-1,1])f(l+2*d,_,r.length+2*l,p*(o+l/2),c+_/2,0,0);const g=.11,m=.16;for(const p of[-1,1])f(m,g,r.length,p*(o-m/2),g/2,0,0);return{planes:u,area:h}}}}),rd=2.2,od=.02;function QS(n,t,e={}){if(!Object.isFrozen(t))throw new Error("buildSite: pass a record that has been through SITE_SHAPE()");if(e.camera&&e.camera.far<t.sky.radius*1.02)throw new Error(`buildSite '${t.id}': camera.far is ${e.camera.far} but the sky dome is at ${t.sky.radius} m and the horizon at ${t.horizon.distance} m. Set the exterior camera.far to SITE.camera.far (${t.camera.far}) — see SITE_SHAPE's derivation.`);const i=(e.keepOut||[]).map((P,U)=>{if(!Number.isFinite(P.x)||!Number.isFinite(P.z)||!Number.isFinite(P.r)||P.r<=0)throw new Error(`buildSite '${t.id}': keepOut[${U}] is { x: ${P.x}, z: ${P.z}, r: ${P.r} } — every field must be a finite number and r must be positive. A NaN radius disables the keep-out silently, because NaN fails every comparison.`);return{x:P.x,z:P.z,r:P.r}}),s=t.grit.scale[1]*.7,r=Math.hypot(4.2/2,2.1/2),o=(P,U,Y,K)=>{for(const Q of Y)if(Math.hypot(P-Q.x,U-Q.z)<Q.r+K)return!1;return!0};let a=0;const c=ZS(t,e.rng??null),l=BS("site."+t.id),u=new _e;u.name="siteLive";const h=Object.create(null),f=Object.create(null),d=(P,U,Y)=>(h[P]=(h[P]??0)+Y,f[U]=(f[U]??0)+Y,tc(U,f[U]),U),_=G0[t.bounds.kind],m=_.metrics(t.bounds).reach;{const P=t.sky.radius,U=new ou(P,12),Y=U.getAttribute("position"),K=new Float32Array(Y.count*3),Q=new Ut(t.sky.zenith),Z=new Ut(t.sky.horizon),q=new Ut;for(let k=0;k<Y.count;k++){const J=Math.pow(cn(Y.getY(k)/P),t.sky.gradPower);q.copy(Z).lerp(Q,J),K[k*3]=q.r,K[k*3+1]=q.g,K[k*3+2]=q.b}U.setAttribute("color",new he(K,3)),n.add(new It(U,c.SKY));const H=Se*P*P;d("SKY_ZENITH",t.sky.zenith,H),d("SKY_HORIZON",t.sky.horizon,H)}for(const P of t.suns){const U=t.sky.radius*Math.tan(P.angularDeg*.5*Va),Y=new Rs(U,28),K=new It(Y,c.SUNS.get(P.colour));K.position.copy(fl(P.azimuthDeg,P.elevationDeg)).multiplyScalar(t.sky.radius-.5),K.lookAt(0,0,0),n.add(K),d("SUN",P.colour,Math.PI*U*U)}{const P=t.horizon.distance*Math.tan(t.horizon.heightDeg*Va),U=H0[t.horizon.silhouette](n.group,{M:c,rand:l,distance:t.horizon.distance,height:P,base:0,tint:t.horizon.colour,haze:t.fog.colour});d("HORIZON",t.horizon.colour,U.area)}const p=t.ground.discR,v=Math.max(1.8,t.bounds.rimH*1.8),M=Math.max(p+20,t.fog.far*1.25);{const P=new It(new Rs(p,96),c.GROUND);P.rotation.x=-Math.PI/2,P.receiveShadow=!0,n.add(P);const U=new It(new Qt(p,p,v,96,1,!0),c.GROUND);U.position.y=-v/2,n.add(U);const Y=new It(new Za(p,M,96,1),c.GROUND);Y.rotation.x=-Math.PI/2,Y.position.y=-v,n.add(Y),d("GROUND",t.ground.colour,Math.PI*p*p),d("GROUND",t.ground.colour,Se*p*v),d("GROUND",t.ground.colour,Math.PI*(M*M-p*p))}const E=1;n.solid(0,-.3,0,2*(m+E),.3,2*(m+E),!0);const{planes:T,area:w}=_.rim(n,{SITE:t,M:c,boxArea:Zt});d("ROCK",t.rock.colour,w);const S=[],R=e.propCollision!==!1,D=fl(t.sun.azimuthDeg,t.sun.elevationDeg),x=new Ft(-D.x,-D.z).normalize().multiplyScalar(.28);let y=0;for(const P of t.props){const U=new _e;U.position.set(P.x,0,P.z),U.rotation.y=P.yaw,U.scale.setScalar(P.scale),n.add(U);const Y=H0[P.kind](U,{M:c,rand:l,scale:P.scale});y+=Y.area*P.scale*P.scale;const K=Y.w*P.scale,Q=Y.d*P.scale,Z=Y.h*P.scale;if(R){const q=(Y.y0??0)*P.scale;S.push({x:P.x,z:P.z,hw:K/2,hd:Q/2,rotY:P.yaw,y0:q,y1:q+Z})}tE(n,c,P.x+x.x,P.z+x.y,K,Q),P.kind==="marker"&&n.spot("marker",P.x+Math.sin(P.yaw)*1.3,0,P.z+Math.cos(P.yaw)*1.3)}d("ROCK",t.rock.colour,y);{const[P,U]=t.grit.scale;let Y=0,K=0;for(let q=0;q<t.grit.count;q++){let H,k,J;for(let vt=0;;vt++){const B=_.sample(l,t.bounds);if(H=1,k=B.x,J=B.z,o(k,J,i,s))break;if(vt>=24){K+=1,H=NaN;break}}if(Number.isNaN(H))continue;const nt=xs(P,U,l()),lt=nt*xs(.8,1.4,l()),ct=nt*xs(.8,1.4,l()),pt=nt*xs(.4,.9,l()),xt=Ct("siteRock",lt,pt,ct,0,{material:c.GRIT,chamfer:.012,cast:!1});xt.position.set(k,pt*.05,J),xt.rotation.set(.1*(l()-.5),l()*Se,.1*(l()-.5)),n.add(xt),Y+=Zt(lt,pt,ct)}d("GRIT",t.grit.colour,Y),a=K;let Q=0;const Z=t.ground.drifts??3;for(let q=0;q<Z;q++){let H,k,J;for(let xt=0;;xt++){const vt=_.sample(l,t.bounds);if(H=1,k=vt.x*.82+Math.sign(vt.x)*1.1,J=vt.z*.82,o(k,J,i,r))break;if(xt>=24){H=NaN;break}}if(Number.isNaN(H))continue;const nt=xs(2.4,4.2,l()),lt=xs(1.2,2.1,l()),ct=xs(.09,.14,l()),pt=Ct("ashField",nt,ct,lt,0,{material:c.GROUND,chamfer:.055,cast:!1});pt.position.set(k,ct/2-.02,J),pt.rotation.y=l()*Se,n.add(pt),Q+=nt*lt+2*(nt+lt)*ct}d("GROUND",t.ground.colour,Q)}const A={};{const P=$S(t),U=new E0(t.sun.colour,t.sun.intensity*P);U.position.copy(D).multiplyScalar(120),A.key=U;const Y=new E0(t.bounce.colour,t.bounce.intensity*P);Y.position.copy(fl(t.bounce.azimuthDeg,23.962)).multiplyScalar(98.4),A.bounce=Y,A.hemi=new op(t.hemi.sky,t.hemi.ground,t.hemi.intensity*P),A.ambient=new au(t.ambient.colour,t.ambient.intensity*P);const K=new ro(16774121,rd*od,9,2);K.position.set(0,1.1,0),A.doorSpill=K,A.lamps=(t.lamps??[]).map(Q=>{const Z=new ro(Q.colour,Q.intensity,Q.distance??14,2);return Z.position.set(Q.x,Q.y,Q.z),Z.castShadow=!1,Z});for(const Q of[A.key,A.bounce,A.hemi,A.ambient,A.doorSpill,...A.lamps])n.group.add(Q),n.lights.push(Q)}n.userData??(n.userData={}),n.userData.collision={planes:T,hulls:[],boxes:S},n.spot("centre",0,0,0);let L=l()*Se,O=0;const F=P=>{L+=P*t.ambience.gustRate*Se;const U=Math.sin(L),Y=Math.sin(L*.3716+1.7);O=cn(.5+.36*U+.2*Y)};F(0);const I=t.beds.map(([P])=>P);return{group:n.group,live:u,areas:h,update:F,SITE:t,keepOut:i,gritRejected:a,fog:new nu(t.fog.colour,t.fog.near,t.fog.far),distance:t.distance,surface:t.ground.surface,beds:t.beds,bedIds:I,collision:n.userData.collision,lights:A,doorSpill:A.doorSpill,sunDir:D,setDoorSpill(P){A.doorSpill.intensity=rd*Math.max(od,cn(P))},contact(P,U){return im(c,P,U)},placeContact(P,U,Y){P.position.set(U+x.x,.006,Y+x.y)},get gust(){return O},get windLevel(){return t.ambience.windGain*(.62+.38*O)},buckets:7}}function tE(n,t,e,i,s,r){const o=im(t,s,r),a=nm(s,r);return o.position.set(e,.006,i),n.add(o),n.decals.push({x0:e-s/2-a,x1:e+s/2+a,z0:i-r/2-a,z1:i+r/2+a}),o}function nm(n,t){return Math.min(Math.max(Math.min(n,t)*.3,.05),.3)}function im(n,t,e){const i=nm(t,e),s=new It(new vi(t+2*i,e+2*i),n.DECAL);return s.rotation.x=-Math.PI/2,s.name="boxContact",s.renderOrder=2,s}const eE=Lu({id:"ashfall",name:"the Ashfall",sky:{zenith:3095895,horizon:11567189,gradPower:2.2,radius:180},suns:[{colour:16771528,angularDeg:.5,azimuthDeg:214,elevationDeg:13}],sun:{colour:16771528,intensity:1.65,azimuthDeg:214,elevationDeg:13,gain:9.667},bounce:{colour:10463428,intensity:.263,azimuthDeg:34},hemi:{sky:11567189,ground:4866104,intensity:.675},ambient:{colour:14734528,intensity:.263},fog:{colour:11567189,near:11,far:84},ground:{colour:4866104,recipe:"ashField",surface:"grit",uvScale:1.1,discR:14,relief:{p0:48,amp:.28,ripple:2.2}},grit:{colour:4143674,count:160,scale:[.08,.3]},rock:{colour:6179644},horizon:{silhouette:"ridge",colour:4143674,heightDeg:3.4,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:1.15},extras:{},lamps:[],beds:[["ext_wind",{rate:1}],["ext_grit",{rate:1}]],ambience:{windGain:.34,gustRate:.14},props:[{kind:"outcrop",x:2.9,z:1.6,yaw:.9,scale:1},{kind:"outcrop",x:-5.1,z:-3.4,yaw:2.6,scale:1.45},{kind:"marker",x:4.8,z:-5.9,yaw:4.1,scale:1},{kind:"shard",x:-1.2,z:6.3,yaw:.3,scale:1.2}]}),nE=Lu({id:"verge",name:"the Verge",sky:{zenith:3820126,horizon:11057348,gradPower:1.6,radius:180},suns:[{colour:15398655,angularDeg:.4,azimuthDeg:96,elevationDeg:41}],sun:{colour:15398655,intensity:2.18,azimuthDeg:96,elevationDeg:41,gain:.56},bounce:{colour:10465469,intensity:.31,azimuthDeg:276},hemi:{sky:11057348,ground:7174788,intensity:.94},ambient:{colour:15134975,intensity:.34},fog:{colour:11057348,near:9,far:64},ground:{colour:9345699,recipe:"ashField",surface:"grit",uvScale:1.6,discR:14,relief:{p0:62,amp:.14,ripple:4}},grit:{colour:5596014,count:210,scale:[.06,.22]},rock:{colour:7174788},horizon:{silhouette:"spires",colour:5596014,heightDeg:5.1,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:.9},extras:{},lamps:[],beds:[["ext_wind",{rate:1.34}],["ext_grit",{rate:.78}]],ambience:{windGain:.22,gustRate:.09},props:[{kind:"shard",x:3.6,z:-1.1,yaw:.6,scale:1.3},{kind:"shard",x:-4.8,z:2.4,yaw:2.1,scale:.85},{kind:"outcrop",x:1.9,z:4.1,yaw:1.05,scale:1},{kind:"marker",x:-2.2,z:-5.6,yaw:3.9,scale:1.45}]}),iE=Lu({id:"alley",name:"the alley",sky:{zenith:724760,horizon:3810838,gradPower:1.4,radius:180},suns:[{colour:13161184,angularDeg:.54,azimuthDeg:38,elevationDeg:58}],sun:{colour:12570856,intensity:.32,azimuthDeg:38,elevationDeg:58,gain:1},bounce:{colour:11565120,intensity:.18,azimuthDeg:218},hemi:{sky:2761752,ground:1316378,intensity:.43},ambient:{colour:7040890,intensity:.175},fog:{colour:1316124,near:4,far:46},ground:{colour:3026996,recipe:"asphalt",surface:"grit",uvScale:2.4,discR:16,relief:{p0:112,amp:1,ripple:0},drifts:0},grit:{colour:3816254,count:120,scale:[.05,.16]},rock:{colour:6176824,recipe:"brick",tile:.6,opts:{rows:8,cols:4,joint:.075}},horizon:{silhouette:"ridge",colour:921622,heightDeg:.1,distance:150},bounds:{kind:"corridor",width:4,length:24,wallH:7.5,wallT:.45},beds:[["ext_wind",{rate:.55}]],ambience:{windGain:.16,gustRate:.07},extras:{METAL:{colour:4212043,roughness:.54,relief:.35,tile:.55},PLASTIC:{colour:2305062,roughness:.78,relief:.25,tile:.4}},lamps:[{x:-1.58,y:3.02,z:-2,colour:16757847,intensity:26,distance:22},{x:1.58,y:3.02,z:6.4,colour:14674175,intensity:15,distance:17}],props:[{kind:"wallLamp",x:-2,z:-2,yaw:Math.PI/2,scale:1},{kind:"wallLamp",x:2,z:6.4,yaw:-Math.PI/2,scale:.85},{kind:"pipe",x:-2,z:4.6,yaw:Math.PI/2,scale:1},{kind:"pipe",x:2,z:-6.2,yaw:-Math.PI/2,scale:1},{kind:"skip",x:1.04,z:2.05,yaw:.045,scale:1},{kind:"bin",x:1.58,z:5.1,yaw:-1.63,scale:1},{kind:"bin",x:1.56,z:5.82,yaw:-1.52,scale:1},{kind:"bin",x:1.3,z:-8.4,yaw:-1.2,scale:1},{kind:"fireDoor",x:2,z:1.9,yaw:-Math.PI/2,scale:1},{kind:"crate",x:1.2,z:10.6,yaw:.28,scale:1},{kind:"crate",x:-1.4,z:-10.2,yaw:-.16,scale:.9}]}),di=Object.freeze({ashfall:eE,verge:nE,alley:iE}),sE=n=>n<0?0:n>1?1:n,Kn=Object.freeze({S:512,TILE:.45,SKIN:15e-5,ROUGH:.44,ROUGH_PEEL:.06,ROUGH_BRUSH:.05,SPECULAR:.02,NORMAL_SCALE:1}),rE=1,oE=.6,aE=2.4,cE=400,lE=6,uE=512,hE=3;let ad=!1;function fE(){ad||(ad=!0,Te("policePaint",n=>{const t=Kn.S,e=t*t,i=le(n,t,{p0:96,octaves:3}),s=le(n,t,{p0x:cE,p0y:lE,octaves:2}),r=le(n,t,{p0x:uE,p0y:hE,octaves:2}),o=new Float32Array(e),a=new Float32Array(e);for(let c=0;c<e;c++)o[c]=rE*(i[c]-.5)+oE*(s[c]-.5)+aE*(r[c]-.5),a[c]=sE(Kn.ROUGH+Kn.ROUGH_PEEL*(i[c]-.5)*2-Kn.ROUGH_BRUSH*(s[c]-.5)*2);return{normalMap:Hn(o,t,Kn.SKIN*(Kn.S/Kn.TILE)),ormMap:He(t,null,a,null),uvScale:[Kn.TILE,Kn.TILE],normalScale:Kn.NORMAL_SCALE,tinted:!0}}))}function dE(n=null){return fE(),ns("policePaint",n)}function Cu(n,t){if(!n.defines||!("PHYSICAL"in n.defines)||!("STANDARD"in n.defines))throw new Error(`boxpaint: ${t} lost its PHYSICAL define, so specularIntensity is dead - something copied a Standard material over it (docs/BOX.md 4.1)`);return n}function Ml(n,t,e={}){const i=new Ja({color:n,roughness:1,metalness:0,specularIntensity:e.specularIntensity??Kn.SPECULAR,normalMap:t.normalMap,normalScale:new Ft(t.normalScale,t.normalScale),aoMap:t.ormMap,roughnessMap:t.ormMap,aoMapIntensity:1,vertexColors:!0});return i.userData.uvScale=t.uvScale,i.userData.cast=!0,i.userData.surface="policePaint",Cu(i,"paintMaterial")}const vs=Object.freeze({S:256,ETCH_P0:32,DRAW_FINE_X:200,DRAW_LONG_Y:4,A_ETCH:.085,A_DRAW:.045,SEED:"tex.frostedGlass"}),pE=n=>n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055;let oa=null;function mE(){if(oa)return oa;const n=vs.S,t=n*n,e=new vo(vs.SEED),i=le(e,n,{p0:vs.ETCH_P0,octaves:3}),s=le(e,n,{p0x:vs.DRAW_FINE_X,p0y:vs.DRAW_LONG_Y,octaves:2}),r=new Uint8Array(t*4);let o=0,a=2,c=-1;for(let u=0;u<t;u++){const h=1-vs.A_ETCH*(1-i[u])-vs.A_DRAW*(1-s[u]),f=Math.round(pE(h)*255);r[u*4]=f,r[u*4+1]=f,r[u*4+2]=f,r[u*4+3]=255,o+=h,h<a&&(a=h),h>c&&(c=h)}const l=new go(r,n,n,hn);return l.colorSpace=ln,l.wrapS=l.wrapT=As,l.magFilter=Oe,l.minFilter=Qn,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,oa={map:l,data:r,width:n,height:n,mulMin:a,mulMax:c,mulMean:o/t},oa}const Zi=Object.freeze({TILE:.22,NORMAL_SCALE:.35,ROUGHNESS:.9,SPECULAR:.1,GLOW:16773850,GLOW_I:.09});function _E(n,t,e={}){const i=mE(),s=new Ja({color:n,map:i.map,emissiveMap:i.map,roughness:e.roughness??Zi.ROUGHNESS,metalness:0,specularIntensity:e.specularIntensity??Zi.SPECULAR,emissive:e.emissive??Zi.GLOW,emissiveIntensity:e.emissiveIntensity??Zi.GLOW_I,normalMap:t.normalMap,normalScale:new Ft(Zi.NORMAL_SCALE,Zi.NORMAL_SCALE),vertexColors:!0});return s.userData.uvScale=[Zi.TILE,Zi.TILE],s.userData.cast=!1,s.userData.surface="policePaint",Cu(s,"glazingMaterial")}function gE(n,t={}){const e=SE(),i=new nn({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,emissive:t.emissive??16772301,emissiveMap:e.map,emissiveIntensity:t.emissiveIntensity??.55,vertexColors:!0});return i.userData.cast=!0,i}function xE(n,t={}){const e=new Ja({color:n,roughness:t.roughness??.45,metalness:0,specularIntensity:t.specularIntensity??.2,emissive:t.emissive??16773850,emissiveIntensity:t.emissiveIntensity??.95,vertexColors:!0});return e.userData.cast=!1,Cu(e,"lensMaterial")}const Jt=Object.freeze({W:1024,H:128,BOARD_W:1.15,BOARD_H:.13,FIELD:Object.freeze([228,224,210]),INK:Object.freeze([26,29,36]),L1_TEXT:"POLICE",L1_CAP:60,L1_TOP:34,L1_X0:62,L1_X1:402,L1_WEIGHT:.13,L3_TEXT:"BOX",L3_CAP:60,L3_TOP:34,L3_X0:660,L3_X1:960,L3_WEIGHT:.13,L2_TEXT:"PUBLIC",L2_CAP:24,L2_TOP:28,L2_X0:452,L2_X1:622,L2_WEIGHT:.165,L4_TEXT:"CALL",L4_CAP:24,L4_TOP:68,L4_X0:452,L4_X1:622,L4_WEIGHT:.165}),vE=Jt.W/Jt.BOARD_W/(Jt.H/Jt.BOARD_H),ME={A:[[[0,10],[3,0],[6,10]],[[1.4,5.4],[4.6,5.4]]],B:[[[0,0],[0,10]],[[0,0],[3.4,0],[4.7,.5],[5.4,1.6],[5.4,3.4],[4.7,4.5],[3.4,5],[0,5]],[[0,5],[3.8,5],[5.2,5.6],[6,6.8],[6,8.2],[5.2,9.4],[3.8,10],[0,10]]],C:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.15,9.25],[5.12,8.25]]],D:[[[0,0],[0,10]],[[0,0],[3,0],[4.6,.55],[5.6,1.9],[6,3.6],[6,6.4],[5.6,8.1],[4.6,9.45],[3,10],[0,10]]],E:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]],[[0,10],[5.8,10]]],F:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]]],G:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.5,9.1],[5.6,7.9],[6,6.2]],[[3.3,5.7],[6,5.7]]],H:[[[0,0],[0,10]],[[6,0],[6,10]],[[0,5],[6,5]]],I:[[[2,0],[2,10]]],J:[[[5,0],[5,7.3],[4.6,8.7],[3.6,9.45],[2.3,9.6],[1.1,9.3],[.25,8.5],[0,7.6]]],K:[[[0,0],[0,10]],[[5.8,0],[.4,5.4]],[[2.3,3.6],[6,10]]],L:[[[0,0],[0,10]],[[0,10],[5.6,10]]],M:[[[0,10],[0,0],[3,6],[6,0],[6,10]]],N:[[[0,10],[0,0],[6,10],[6,0]]],O:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]]],P:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]]],Q:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]],[[3.7,7.4],[6,10]]],R:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]],[[2.6,5.6],[6,10]]],S:[[[5.9,2.1],[5.2,.95],[3.9,.35],[2.3,.4],[1,1],[.25,2.1],[.35,3.3],[1.1,4.15],[2.4,4.7],[3.9,5.3],[5.1,5.9],[5.85,6.9],[5.9,8.1],[5.1,9.2],[3.7,9.65],[2.1,9.6],[.8,9.1],[.1,8]]],T:[[[0,0],[6,0]],[[3,0],[3,10]]],U:[[[0,0],[0,6.8],[.4,8.2],[1.5,9.23],[3,9.6],[4.5,9.23],[5.6,8.2],[6,6.8],[6,0]]],V:[[[0,0],[3,10],[6,0]]],W:[[[0,0],[1.5,10],[3,3.4],[4.5,10],[6,0]]],X:[[[0,0],[6,10]],[[6,0],[0,10]]],Y:[[[0,0],[3,5.2],[6,0]],[[3,5.2],[3,10]]],Z:[[[0,0],[6,0]],[[6,0],[0,10]],[[0,10],[6,10]]],"&":[[[6,8.6],[4.4,6.4],[3,4.6],[2,3.2],[1.7,1.9],[2.5,.6],[3.7,.5],[4.5,1.4],[4.3,2.7],[3.2,4],[1.9,5.3],[.8,6.7],[.5,8.2],[1.2,9.3],[2.6,9.7],[4.1,9.2],[5.2,8],[6,6.6]]]," ":[]},yE={I:4," ":3.4},aa=n=>yE[n]??6,cd=2.2;let ca=null;function SE(){if(ca)return ca;const n=Jt.W,t=Jt.H,e=new Float32Array(n*t),i=v=>t-1-v,s=Kr(e,n,t,Jt.L1_TEXT,Jt.L1_CAP,Jt.L1_TOP,Jt.L1_X0,Jt.L1_X1,Jt.L1_WEIGHT),r=Kr(e,n,t,Jt.L2_TEXT,Jt.L2_CAP,Jt.L2_TOP,Jt.L2_X0,Jt.L2_X1,Jt.L2_WEIGHT),o=Kr(e,n,t,Jt.L3_TEXT,Jt.L3_CAP,Jt.L3_TOP,Jt.L3_X0,Jt.L3_X1,Jt.L3_WEIGHT),a=Kr(e,n,t,Jt.L4_TEXT,Jt.L4_CAP,Jt.L4_TOP,Jt.L4_X0,Jt.L4_X1,Jt.L4_WEIGHT),c=new Uint8Array(n*t*4),[l,u,h]=Jt.FIELD,[f,d,_]=Jt.INK;let g=0,m=0;for(let v=0;v<t;v++){const M=v*n,E=i(v)*n,T=1-(v+.5)/t;for(let w=0;w<n;w++){const S=e[M+w],R=(E+w)*4;c[R]=l+(f-l)*S+.5,c[R+1]=u+(d-u)*S+.5,c[R+2]=h+(_-h)*S+.5,c[R+3]=255,g+=S,m+=S*T}}const p=new go(c,n,t,hn);return p.colorSpace=ln,p.wrapS=p.wrapT=As,p.magFilter=Oe,p.minFilter=Qn,p.generateMipmaps=!0,p.anisotropy=8,p.needsUpdate=!0,ca={map:p,data:c,width:n,height:t,lines:[s,r,o,a],headlineBand:[Jt.L1_TOP,Jt.L1_TOP+Jt.L1_CAP],inkCentroidV:g>0?m/g:.5},ca}function Kr(n,t,e,i,s,r,o,a,c,l=vE){const u=i.split(" ").filter(D=>D.length),h=u.reduce((D,x)=>D+x.length,0),f=u.length-1,d=h-u.length,_=s/10,g=_*l;let m=0;for(const D of u)for(const x of D)m+=aa(x);const p=.5*c*s,v=(a-o-2*p)/g,M=d+f*cd,E=M>0?(v-m-f*aa(" "))/M:0,T=aa(" ")+cd*E;let w=(o+p)/g,S=1/0,R=-1/0;for(let D=0;D<u.length;D++){const x=u[D];for(let y=0;y<x.length;y++){const A=x[y],L=ME[A];if(L===void 0)throw new Error(`boxpaint: no glyph for '${A}'`);for(const O of L){for(const F of O){const I=(w+F[0])*g;I-p<S&&(S=I-p),I+p>R&&(R=I+p)}EE(n,t,e,O,g,_,w,r,p)}w+=aa(A),y<x.length-1&&(w+=E)}D<u.length-1&&(w+=T)}return{text:i,cap:s,topY:r,x0:o,x1:a,track:E,wordGap:T,stem:2*p,left:S,right:R}}function EE(n,t,e,i,s,r,o,a,c){for(let l=0;l<i.length-1;l++){const u=(o+i[l][0])*s,h=a+i[l][1]*r,f=(o+i[l+1][0])*s,d=a+i[l+1][1]*r,_=f-u,g=d-h,m=_*_+g*g,p=c+1,v=Math.max(0,Math.floor(Math.min(u,f)-p)),M=Math.min(t-1,Math.ceil(Math.max(u,f)+p)),E=Math.max(0,Math.floor(Math.min(h,d)-p)),T=Math.min(e-1,Math.ceil(Math.max(h,d)+p));for(let w=E;w<=T;w++){const S=w+.5,R=w*t;for(let D=v;D<=M;D++){const x=D+.5;let y=m>0?((x-u)*_+(S-h)*g)/m:0;y=y<0?0:y>1?1:y;const A=x-(u+y*_),L=S-(h+y*g),O=c+.5-Math.sqrt(A*A+L*L);if(O<=0)continue;const F=O>1?1:O;F>n[R+D]&&(n[R+D]=F)}}}}const Zr=Object.freeze({W:192,H:256,PLATE_W:.288,PLATE_H:.384,FIELD:Jt.FIELD,INK:Jt.INK,BORDER_IN:4,BORDER_T:8,L1_TEXT:"POLICE TELEPHONE",L1_CAP:15,L1_TOP:22,L1_X0:18,L1_X1:174,L1_WEIGHT:.15,L2_TEXT:"FREE",L2_CAP:28,L2_TOP:44,L2_X0:52,L2_X1:140,L2_WEIGHT:.13,L3_TEXT:"FOR USE OF",L3_CAP:14,L3_TOP:78,L3_X0:36,L3_X1:156,L3_WEIGHT:.17,L4_TEXT:"PUBLIC",L4_CAP:28,L4_TOP:96,L4_X0:44,L4_X1:148,L4_WEIGHT:.13,L5_TEXT:"ADVICE & ASSISTANCE",L5_CAP:12,L5_TOP:140,L5_X0:16,L5_X1:176,L5_WEIGHT:.175,L6_TEXT:"OBTAINABLE IMMEDIATELY",L6_CAP:12,L6_TOP:156,L6_X0:12,L6_X1:180,L6_WEIGHT:.175,L7_TEXT:"OFFICERS & CARS",L7_CAP:12,L7_TOP:180,L7_X0:30,L7_X1:162,L7_WEIGHT:.175,L8_TEXT:"RESPOND TO ALL CALLS",L8_CAP:12,L8_TOP:196,L8_X0:18,L8_X1:174,L8_WEIGHT:.175,L9_TEXT:"PULL TO OPEN",L9_CAP:20,L9_TOP:218,L9_X0:22,L9_X1:170,L9_WEIGHT:.13}),wE=Zr.W/Zr.PLATE_W/(Zr.H/Zr.PLATE_H);let la=null;function bE(){if(la)return la;const n=Zr,t=n.W,e=n.H,i=new Float32Array(t*e),s=M=>e-1-M;{const M=n.BORDER_IN,E=n.BORDER_IN+n.BORDER_T;for(let T=M;T<e-M;T++){const w=T>=E&&T<e-E;for(let S=M;S<t-M;S++)w&&S>=E&&S<t-E||(i[T*t+S]=1)}}const r=[];for(let M=1;M<=9;M++)r.push(Kr(i,t,e,n["L"+M+"_TEXT"],n["L"+M+"_CAP"],n["L"+M+"_TOP"],n["L"+M+"_X0"],n["L"+M+"_X1"],n["L"+M+"_WEIGHT"],wE));const[o,a,c]=r,l=new Uint8Array(t*e*4),[u,h,f]=n.FIELD,[d,_,g]=n.INK;let m=0,p=0;for(let M=0;M<e;M++){const E=M*t,T=s(M)*t,w=1-(M+.5)/e;for(let S=0;S<t;S++){const R=i[E+S],D=(T+S)*4;l[D]=u+(d-u)*R+.5,l[D+1]=h+(_-h)*R+.5,l[D+2]=f+(g-f)*R+.5,l[D+3]=255,m+=R,p+=R*w}}const v=new go(l,t,e,hn);return v.colorSpace=ln,v.wrapS=v.wrapT=As,v.magFilter=Oe,v.minFilter=Qn,v.generateMipmaps=!0,v.anisotropy=8,v.needsUpdate=!0,la={map:v,data:l,width:t,height:e,lines:r,inkCentroidV:m>0?p/m:.5,inkFraction:m/(t*e)},la}function AE(n,t={}){const e=bE(),i=new nn({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,vertexColors:!0});return i.userData.cast=!1,i}const De=Object.freeze({FOOT:1.372,HALF:.686,WALL_T:.07,FRONT_T:.1,P_E:.071,DOOR_Z:.686,HINGE_Z:.646,FRONT_BACK:.586,APER_W:1.15,APER_HW:.575,APER_H:2.11,POST:.111,PROUD:.02,BODY_H:2.28,PLINTH_W:1.452,PLINTH_H:.12,PLINTH_PROUD:.04,SIGN_W:1.452,SIGN_Y0:2.28,SIGN_Y1:2.5,SIGN_BOARD_H:.13,SIGN_BOARD_T:.014,ROOF:Object.freeze([Object.freeze({w:1.412,y0:2.5,y1:2.57}),Object.freeze({w:1.312,y0:2.57,y1:2.63}),Object.freeze({w:1.212,y0:2.63,y1:2.68})]),HEAD_D:.615,REVEAL_D:.515,REVEAL_CLEAR:.02,FRAME_T:.02,FRAME_H:2.153,STILE_W:.075,MUNTIN_W:.07,STILE_AT:.5575,BAY_AT:.2775,PANEL_W:.52,PANEL_T:.01,PANEL_LO_H:.52,PANEL_LO_Y:.49,PANEL_HI_H:.58,PANEL_HI_Y:1.11,LEAF_W:.575,LEAF_H:2.11,LEAF_T:.04,OPEN_ANGLE:Math.PI/2,LEAF_PROUD_OUT:.025,LEAF_PROUD_IN:.015,INNER_SETBACK:.06,TOP:3.07,CHAMFER:.004}),ld=Object.freeze([Object.freeze({id:"postR",x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"postL",x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"block",x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:2.28})]),Qs=(n,t,e,i,s,r)=>({min:new z(n,t,e),max:new z(i,s,r)}),sm=Object.freeze([Qs(-.686,0,-.686,.686,2.28,-.616),Qs(.616,0,-.686,.686,2.28,.686),Qs(-.686,0,-.686,-.616,2.28,.686),Qs(-.726,2.28,-.726,.726,2.5,.726),Qs(.575,0,.586,.686,2.28,.686),Qs(-.686,0,.586,-.575,2.28,.686)]);let yl=null;function TE(){return yl||(yl=new Oa(sm,1)),yl}const Ms=Object.freeze({BLUE:1519185,TRIM:991545,SIGN:13223090,LENS:15985366,GLASS:10196622,NOTICE:13223090,BRASS:11044671}),ua=Object.freeze({colour:16773332,intensity:.55,distance:2.6,decay:2});let Sl=null;function rm(n=null){if(Sl)return Sl;const t=dE(n),e={BLUE:Ml(Ms.BLUE,t),TRIM:Ml(Ms.TRIM,t),GLASS:_E(Ms.GLASS,t),SIGN:gE(Ms.SIGN),LENS:xE(Ms.LENS),NOTICE:AE(Ms.NOTICE),BRASS:Ml(Ms.BRASS,t)};for(const i of nr){const s=e[i];if(s.metalness!==0)throw new Error(`boxPalette: ${i}.metalness is ${s.metalness}; there is no envMap in either scene, so metalness above 0 only scales diffuse down (THRESHOLD 10 I)`);if(s.metalnessMap)throw new Error(`boxPalette: ${i} carries a metalnessMap; see the metalness rule above`)}return Sl=e,e}let El=null,wl=null;function RE(){if(El)return El;const n=Ls(De.APER_W,De.SIGN_BOARD_H,De.SIGN_BOARD_T,De.CHAMFER).clone(),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,El=n,n}const Di=Object.freeze({SIDE:1,X:.135,ESC_Y:1.25,ESC_R:.024,ESC_T:.006,ESC_Z:.009,KEY_W:.007,KEY_H:.015,PULL_Y:1.07,PULL_W:.014,PULL_H:.12,BOSS:.016,BOSS_D:.006,BOSS_Z:.009,PULL_D:.006,PULL_Z:.011}),LE=(()=>{const n=Di,t=(e,i,s)=>2*(e*i+e*s+i*s);return t(n.ESC_R*2,n.ESC_R*2,n.ESC_T)+t(n.PULL_W,n.PULL_H,n.PULL_D)+2*t(n.BOSS,n.BOSS,n.BOSS_D)})();let ha=null;function CE(){if(ha)return ha;const n=Di,t=[],e=(r,o,a,c)=>{const l=ic(r.index?r.toNonIndexed():r);return l.translate(o,a,c),t.push(l),l},i=new Qt(n.ESC_R,n.ESC_R,n.ESC_T,20).toNonIndexed();i.rotateX(Math.PI/2),e(i,0,n.ESC_Y,n.ESC_Z),e(Ls(n.PULL_W,n.PULL_H,n.PULL_D,De.CHAMFER).clone(),0,n.PULL_Y,n.PULL_Z);for(const r of[-1,1])e(Ls(n.BOSS,n.BOSS,n.BOSS_D,De.CHAMFER).clone(),0,n.PULL_Y+r*(n.PULL_H/2-n.BOSS/2),n.BOSS_Z);const s=pu(t,!1);if(!s)throw new Error("policeBox: the door furniture merged to null — mismatched attributes");return ha=s,ha}const On=Object.freeze({W:.288,H:.384,T:.004,CX:.305,CY:1.145,CZ:.696,SIDE:-1}),IE=2*(On.W*On.H+On.W*On.T+On.H*On.T);function PE(){if(wl)return wl;const n=ic(Ls(On.W,On.H,On.T,De.CHAMFER).clone()),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,wl=n,n}const Qe=Object.freeze((()=>{const s=.17066666666666666;return{BAR:.024,H:.56,Y:1.76,ROWS:3,LIGHT_H:s,DY:(s+.024)/2}})()),en=Object.freeze({W:.395,H:Qe.H,T:.004,X:.2875,Y:Qe.Y,Z:.688}),DE=2*(en.W*en.H+en.W*en.T+en.H*en.T),nr=["BLUE","TRIM","GLASS","SIGN","LENS","NOTICE","BRASS"];function OE(n,t=rm()){var F;for(const I of nr)if(!(t!=null&&t[I]))throw new Error(`policeBox: palette is missing '${I}' (needs ${nr.join(", ")})`);const e=De,i=new Set,s={};let r=0;const o=I=>nr.find(P=>t[P]===I)||"UNKNOWN",a=(I,P)=>{const U=o(I);s[U]=(s[U]||0)+P},c=(I,P,U,Y,K,Q,Z,q,H=0,k=null)=>{var nt;let J;return k?(J=new It(k,I),J.castShadow=((nt=I.userData)==null?void 0:nt.cast)??!1,J.receiveShadow=!0):J=Ct("appliance",U,Y,K,0,{material:I,chamfer:e.CHAMFER}),J.position.set(Q,Z,q),H&&(J.rotation.y=H),J.name=P,n.add(J),i.add(J.geometry.uuid),r++,a(I,2*(U*Y+U*K+Y*K)),J},l=Math.PI/2,u=Object.freeze([{r:0,ax:0,az:-1},{r:l,ax:1,az:0},{r:l,ax:-1,az:0}]),h=(I,P,U)=>I.ax?[I.ax*U,P]:[P,I.az*U];for(const[I,P,U]of[[0,-.706,0],[.706,0,l],[-.706,0,l]])c(t.TRIM,"plinth",e.PLINTH_W,e.PLINTH_H,e.PLINTH_PROUD,I,e.PLINTH_H/2,P,U);for(const[I,P,U]of[[0,-.651,0],[.651,0,l],[-.651,0,l]])c(t.BLUE,"bodyWall",e.FOOT,e.BODY_H,e.WALL_T,I,e.BODY_H/2,P,U);for(const I of[-1,1])for(const P of[-1,1])c(t.TRIM,"cornerPost",e.POST,e.BODY_H,e.POST,I*.6505,e.BODY_H/2,P*.6505);for(const I of[-1,1])c(t.BLUE,"doorJamb",e.POST,e.BODY_H,e.FRONT_T,I*.6305,e.BODY_H/2,e.DOOR_Z-e.FRONT_T/2);c(t.BLUE,"headLining",e.APER_W,e.BODY_H-e.APER_H,e.HEAD_D,0,(e.APER_H+e.BODY_H)/2,e.P_E+e.HEAD_D/2);const f=e.HALF-e.WALL_T-e.APER_HW-e.REVEAL_CLEAR;for(const I of[-1,1])c(t.BLUE,"revealSide",f,e.APER_H,e.REVEAL_D,I*(e.APER_HW+e.REVEAL_CLEAR+f/2),e.APER_H/2,e.P_E+e.REVEAL_D/2);c(t.TRIM,"sillPlate",2*(e.HALF-e.WALL_T),.004,e.REVEAL_D,0,.002,e.P_E+e.REVEAL_D/2);const d=[{y:.185,h:.07},{y:.785,h:.05},{y:1.445,h:.07},{y:2.075,h:.07}],_=e.HALF+e.FRAME_T/2;for(const I of u){for(const K of d){const[Q,Z]=h(I,0,_);c(t.TRIM,"rail",e.FOOT,K.h,e.FRAME_T,Q,K.y,Z,I.r)}for(const K of[-1,1]){const[Q,Z]=h(I,K*e.STILE_AT,_);c(t.TRIM,"faceStile",e.STILE_W,e.FRAME_H,e.FRAME_T,Q,e.BODY_H-e.FRAME_H/2,Z,I.r)}const[P,U]=h(I,0,_);c(t.TRIM,"faceMuntin",e.MUNTIN_W,e.FRAME_H,e.FRAME_T,P,e.BODY_H-e.FRAME_H/2,U,I.r);const Y=e.HALF+e.PANEL_T/2;for(const K of[-1,1])for(const Q of[{h:e.PANEL_LO_H,y:e.PANEL_LO_Y},{h:e.PANEL_HI_H,y:e.PANEL_HI_Y}]){const[Z,q]=h(I,K*e.BAY_AT,Y);c(t.BLUE,"panelField",e.PANEL_W,Q.h,e.PANEL_T,Z,Q.y,q,I.r)}}const g=e.HALF+e.PROUD-e.APER_HW;for(const I of[-1,1])c(t.TRIM,"archSide",g,e.FRAME_H,e.FRAME_T,I*(e.APER_HW+g/2),e.BODY_H-e.FRAME_H/2,e.DOOR_Z+e.FRAME_T/2);c(t.TRIM,"archHead",2*(e.HALF+e.PROUD),.17,e.FRAME_T,0,e.BODY_H-.085,e.DOOR_Z+e.FRAME_T/2);const m=.79,p=Qe.H,v=Qe.BAR,M=e.HALF+.006;for(const I of u){const[P,U]=h(I,0,M);c(t.GLASS,"window",m,p,.012,P,Qe.Y,U,I.r);const[Y,K]=h(I,0,_);for(const Q of[-1,1]){const[Z,q]=h(I,Q*.1975,_);c(t.TRIM,"glazingBar",v,p,v,Z,Qe.Y,q,I.r)}for(const Q of[-1,1])c(t.TRIM,"glazingBar",m,v,v,Y,Qe.Y+Q*Qe.DY,K,I.r)}c(t.TRIM,"entablature",e.SIGN_W,e.SIGN_Y1-e.SIGN_Y0,e.SIGN_W,0,(e.SIGN_Y0+e.SIGN_Y1)/2,0);const E=(e.SIGN_Y0+e.SIGN_Y1)/2,T=RE();for(const[I,P,U]of[[0,1,0],[0,-1,Math.PI],[1,0,l],[-1,0,-l]])c(t.TRIM,"signCase",1.21,.15,.01,I*.728,E,P*.728,U),c(t.SIGN,"signBoard",e.APER_W,e.SIGN_BOARD_H,e.SIGN_BOARD_T,I*.733,E,P*.733,U,T);for(const I of e.ROOF)c(t.TRIM,"roofTier",I.w,I.y1-I.y0,I.w,0,(I.y0+I.y1)/2,0);const w=[["lampPlinth",.2,2.68,2.72],["lampStalk",.09,2.72,2.87],["lampGallery",.15,2.87,2.9],["lampCowl",.15,3.01,3.034],["lampFinial",.045,3.034,3.07]];for(const[I,P,U,Y]of w)c(t.TRIM,I,P,Y-U,P,0,(U+Y)/2,0);const S=.072,R=2.9,D=3.01;for(const[I,P]of[[1,0],[-1,0],[0,1],[0,-1]])c(t.TRIM,"lampRib",.016,D-R,.016,I*.068,(R+D)/2,P*.068);{const I=D-R,P=new Qt(S,S,I,12),U=new It(P,t.LENS);U.position.set(0,(R+D)/2,0),U.name="lampLens",U.castShadow=!1,U.receiveShadow=!0,n.add(U),i.add(P.uuid),r++,a(t.LENS,2*Math.PI*S*I+2*Math.PI*S*S)}const x=new _e;x.name="boxLeaves";const y=[],A=TE();for(const I of[1,-1]){const P=new _e;P.name=I>0?"boxDoor.R":"boxDoor.L",P.position.set(I*e.APER_HW,0,e.HINGE_Z),P.userData.side=I,P.userData.hinge=new z(I*e.APER_HW,0,e.HINGE_Z),P.userData.openSign=I;const U=NE(I,t,A);i.add(U.uuid);const Y=new It(U,t.BLUE);Y.name=I>0?"boxLeaf.R":"boxLeaf.L",Y.castShadow=!0,Y.receiveShadow=!0,P.add(Y),r++,a(t.BLUE,2*(e.LEAF_W*e.LEAF_H+e.LEAF_W*e.LEAF_T+e.LEAF_H*e.LEAF_T));const K=UE(t,I);i.add(K.uuid);const Q=new It(K,t.GLASS);if(Q.position.set(-I*en.X,en.Y,en.Z-e.HINGE_Z),Q.name=I>0?"boxPane.R":"boxPane.L",Q.castShadow=!1,Q.receiveShadow=!0,P.add(Q),r++,a(t.GLASS,DE),I===Di.SIDE){const Z=new It(CE(),t.BRASS);Z.position.set(-I*(e.APER_HW-Di.X),0,e.DOOR_Z-e.HINGE_Z),Z.name="boxFurniture",Z.castShadow=!1,Z.receiveShadow=!0,P.add(Z),r++,a(t.BRASS,LE)}if(I===On.SIDE){const Z=new It(PE(),t.NOTICE);Z.position.set(-I*(e.APER_HW-On.CX),On.CY,On.CZ-e.HINGE_Z),Z.name="boxNotice",Z.castShadow=((F=t.NOTICE.userData)==null?void 0:F.cast)??!1,Z.receiveShadow=!0,P.add(Z),i.add(Z.geometry.uuid),r++,a(t.NOTICE,IE)}x.add(P),y.push(P)}for(const I of ld)n.solid(I.x,I.y0,I.z,I.hw*2,I.y1-I.y0,I.hd*2,!1);const L=new ro(ua.colour,ua.intensity,ua.distance,ua.decay);L.position.set(0,(R+D)/2,0),L.name="boxLamp",L.userData.boxLocal=L.position.clone();for(const I of nr)s[I]&&tc(t[I].color.getHex(),s[I]);const O=I=>{const P=Math.max(0,Math.min(1,I))*e.OPEN_ANGLE;for(const U of y)U.rotation.y=-U.userData.side*P};return O(0),x.userData.setOpen=O,{group:n.group,leaves:x,lamp:L,areas:s,collision:ld,aoVolumes:sm,setOpen:O,pivots:y,materials:t,counts:{meshes:r,geometries:i.size,materials:nr.length}}}function NE(n,t,e){var g;const i=De,s=i.DOOR_Z-i.LEAF_T/2,r=i.DOOR_Z+.006,o=i.DOOR_Z+.005;i.DOOR_Z+.0055;const a=i.HINGE_Z-.005,c=i.HINGE_Z-.007,l=i.LEAF_H/2,u=[["blank",i.LEAF_W,i.LEAF_H,i.LEAF_T,.2875,l,s],["stile",.06,i.LEAF_H,.012,.545,l,r],["stile",.06,i.LEAF_H,.012,.03,l,r],["rail",.455,.1,.012,.2875,.05,r],["rail",.455,.07,.012,.2875,.845,r],["rail",.455,.07,.012,.2875,1.445,r],["rail",.455,.07,.012,.2875,2.075,r],["panel",.395,.69,.01,.2875,.455,o],["panel",.395,.51,.01,.2875,1.145,o],...n===Di.SIDE?[["keyhole",Di.KEY_W,Di.KEY_H,.004,Di.X,Di.ESC_Y,i.DOOR_Z+.01]]:[],["glazingBar",Qe.BAR,Qe.H,.012,.2875,Qe.Y,r],["glazingBar",en.W,Qe.BAR,.012,.2875,Qe.Y-Qe.DY,r],["glazingBar",en.W,Qe.BAR,.012,.2875,Qe.Y+Qe.DY,r],["backStile",.06,i.LEAF_H,.01,.48,l,a],["backStile",.06,i.LEAF_H,.01,.03,l,a],["backLedge",.39,.07,.01,.255,.845,a],["backLedge",.39,.07,.01,.255,2.075,a],["pull",.03,.22,.014,.1,1.01,c]];for(const[m,p,,v,M,,E]of u){const T=E+v/2,w=E-v/2;if(T>i.DOOR_Z+i.LEAF_PROUD_OUT)throw new Error(`policeBox: leaf '${m}' stands ${((T-i.DOOR_Z)*1e3).toFixed(0)} mm proud of the outer face, over the ${i.LEAF_PROUD_OUT*1e3} mm budget`);if(w<i.HINGE_Z-i.LEAF_PROUD_IN)throw new Error(`policeBox: leaf '${m}' stands ${((i.HINGE_Z-w)*1e3).toFixed(0)} mm proud of the inner face, over the ${i.LEAF_PROUD_IN*1e3} mm budget`);if(w<i.HINGE_Z&&M+p/2>i.APER_HW-i.INNER_SETBACK)throw new Error(`policeBox: leaf '${m}' reaches x ${(M+p/2).toFixed(3)} behind the inner face; anything there must stay inboard of ${(i.APER_HW-i.INNER_SETBACK).toFixed(3)} or it sweeps into the jamb`)}const h=m=>n*m,f=u.map(([,m,p,v,M,E,T])=>{const w=Ls(m,p,v,i.CHAMFER).clone();return w.translate(h(M),E,T),ic(w)}),d=f.length===1?f[0]:pu(f,!1);if(!d)throw new Error("policeBox: leaf merge returned null (mismatched attributes)");const _=(g=t.BLUE.userData)==null?void 0:g.uvScale;return _&&nc(d,_[0],_[1]),e&&xp(d,e),d.translate(-h(i.APER_HW),0,-i.HINGE_Z),d}function UE(n,t){var s;const e=ic(new sn(en.W,en.H,en.T).toNonIndexed()),i=(s=n.GLASS.userData)==null?void 0:s.uvScale;if(i){const r=e.clone();r.translate(t*en.X,en.Y,en.Z),nc(r,i[0],i[1]),e.setAttribute("uv",r.attributes.uv)}return e}const FE=.02,kE=new z;function ud(n,t){if(!n)throw new Error(`worlds(): no ${t} world`);if(!n.id)throw new Error(`worlds(): the ${t} world has no id — link.js keys every accessor on it`);if(!n.scene||!n.scene.isScene)throw new Error(`worlds(): the ${t} world '${n.id}' has no THREE.Scene`);const e={id:n.id,scene:n.scene,build:n.build??null,surface:n.surface??null,beds:n.beds??null,dist:n.dist??null,cap:n.cap??null,update:typeof n.update=="function"?n.update:()=>{},collisionSrc:n.collision??null,get collision(){var i,s;return e.collisionSrc??((s=(i=e.build)==null?void 0:i.userData)==null?void 0:s.collision)??null}};return e}function zE({interior:n,exterior:t,link:e,startWorld:i=null}={}){const s=ud(n,"interior"),r=ud(t,"exterior");if(!e)throw new Error("worlds(): no link — makeLink(landing, SITES) builds one");let o=e;const a=[s,r];let c=0;if(i&&i!==s.id){if(i!==r.id&&i!=="exterior")throw new Error(`worlds(): startWorld '${i}' is neither '${s.id}' nor '${r.id}'`);c=1}let l=!1;const u=new _o,h=new Wt;function f(_){return h.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),u.setFromProjectionMatrix(h)}const d={get near(){return a[c]},get far(){return a[1-c]},get link(){return o},get interior(){return s},get exterior(){return r},swap(){return c=1-c,d.near},remountExterior(_){if(!_||!_.id)throw new Error("worlds.remountExterior: no world record, or no id");if(_.scene&&_.scene!==r.scene)throw new Error("worlds.remountExterior: the exterior SCENE is fixed for the session — swap its contents, not the scene");if(c===1)throw new Error(`worlds.remountExterior: the player is standing in '${r.id}'. Fly with the doors shut — a remount under somebody's feet leaves the Walker solving against a Build that no longer exists.`);return r.id=_.id,r.build=_.build??null,r.collisionSrc=_.collision??null,r.surface=_.surface??null,r.beds=_.beds??null,r.dist=_.dist??null,r.update=typeof _.update=="function"?_.update:()=>{},o=null,r},setLink(_){if(_===null)return o=null,null;if(!_)throw new Error('worlds.setLink: no link (pass null deliberately for "the box is away")');if(_.siteId&&r.id!=="exterior"&&_.siteId!==r.id)throw new Error(`worlds.setLink: the new link is at site '${_.siteId}' but the exterior world is '${r.id}'. A different site needs its contents remounted first — call remountExterior with that site's build, then setLink.`);return o=_,o},liveLink(_,g,m=null){if(!o||!g||!(g.t>FE))return null;const p=a[c].cap;return p?!_||p.normalWorld.dot(kE.copy(_.position).sub(p.centreWorld))<=0||!(m||f(_)).intersectsBox(p.aabbInflated)?null:o:(l||(l=!0,console.warn(`[worlds] the '${a[c].id}' world has no portal cap, so the doors open onto its own background. portal.makeCap() mints one (THRESHOLD.md §4.4).`)),null)},frustumOf:f};return d}const tr="interior",hd=Tn.w/2,BE=.02,HE=3*(Ae.RUN/60+.014),GE=Ae.RADIUS,VE=1e-6,WE=.001,qE=6,bl=wn-(et.FLAT_FACE-Ae.RADIUS),XE=1.2,YE=.6,$E=.002,fd=new z(0,1,0),Al=new z,fa=new z,dd=new z,er=new z;function jE({worlds:n,walker:t,audio:e,portal:i,camera:s,doors:r=null}){let o=0,a=0,c=-1,l=!1,u=!1,h=!1,f=!1,d=!1,_=!1;function g(){return!n||!n.near||!n.far||!n.link?(d||(d=!0,console.warn("[threshold] no live link — the crossing is disabled. makeLink() builds one (THRESHOLD.md §1.3); a build with no exterior is expected to land here.")),!1):!0}function m(){return s&&t.driveCamera!==!1?Al.copy(s.position):Al.set(t.position.x,t.position.y+Ae.EYE,t.position.z)}function p(x,y){const A=n.link,L=x.id===tr,O=L?A.pI:A.pE,F=L?A.nI:A.nE;fa.copy(y).sub(O);const I=fa.dot(F);dd.copy(fd).cross(F);const P=fa.dot(dd),U=fa.dot(fd),Y=Math.abs(P)-hd,K=U>Tn.h?U-Tn.h:U<0?-U:0;return{d:I,lat:P,h:U,s:L?1:-1,inRect:Y<=0&&K===0,r:Math.hypot(I,Y>0?Y:0,K)}}function v(x){return x.inRect}function M(x){return r?r.t>BE:(f||(f=!0,console.warn("[threshold] no `doors` passed to threshold(): crossing without checking that they are open. The exterior collision set has no shut-door blocker (THRESHOLD.md §1.1, §7.1), so the box is enterable through shut leaves.")),!0)}function E(x,y){const A=x&&x.collision;if(!A)return!0;er.copy(t.position).applyMatrix4(y);let L=er.x,O=er.z;for(let F=0;F<qE;F++){const I=Au(A,L,O,{y:er.y});if(L=I.x,O=I.z,!I.contacts)break}return Math.hypot(L-er.x,O-er.z)<=WE}function T(x){const y=n.link,A=n.near,L=n.far,F=A.id===tr?y.M_IE:y.M_EI;if(typeof t.crossTo!="function"||typeof t.setWorld!="function")return _||(_=!0,console.warn("[threshold] walker.crossTo / walker.setWorld are missing — refusing to cross. §2 adds both to Walker.js; without them a swap would leave the player in one world holding the other one's colliders.")),!1;if(!E(L,F))return l=!0,h||(h=!0,console.warn(`[threshold] holding the crossing into '${L.id}': M puts the player inside something there. Expected while a door leaf is still swinging — MEASURED, the way in clears at t = 0.68 on the door axis and t = 0.83 at the edge of the band (see CROSS_CLEAR). The crossing retries every sub-step and fires the moment that line is clear.`)),!1;l=!1;const I=F.elements,P=Math.atan2(I[8],I[10]);return t.crossTo(F,P),n.swap(),t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,y),t.driveCamera!==!1&&typeof t._commitCamera=="function"&&t._commitCamera(0),o=x.d,a++,!0}function w(x,y){const A=x.s*x.d;if(!(x.inRect&&A>VE&&A<=GE)||!M())return l=!1,!1;const L=l,O=n.near.id;return T(x)?(!y&&!L&&!u&&(u=!0,console.warn(`[threshold] the player was ${A.toFixed(3)} m past the '${O}' aperture plane and still in it — the crossing edge missed, or the doors opened around someone already standing in the doorway. Reconciled. §5.4: the backstops park a misfire at 0.050 m, so this is recoverable, but a sub-step running without step() would look exactly like this.`)),!0):!1}function S(x,y){let L=((x.id===tr?-1:1)*y.r+YE)/XE;L=L<0?0:L>1?1:L;const O=L===0||L===1;c>=0&&L!==c&&Math.abs(L-c)<$E&&!O||L!==c&&(c=L,e&&typeof e.setBedMix=="function"&&e.setBedMix(L))}function R(x){const y=p(x,m());return o=y.d,y}const D={step(){if(!g())return;let x=n.near;const y=p(x,m());if(Math.abs(y.d-o)>HE){o=y.d,w(y,!0)&&(x=n.near),S(x,y);return}const A=y.s;A*o<0&&A*y.d>=0&&v(y)&&M()?T(y)?x=n.near:o=y.d:(o=y.d,w(y,!1)&&(x=n.near)),S(x,y)},seed(x={}){if(!g())return;let y=n.near;const A=R(y);x.reconcile!==!1&&w(A,!0)&&(y=n.near),S(y,A)},force(x){if(!g())return!1;const y=A=>A.id===x||x==="interior"&&A.id===tr||x==="exterior"&&A.id!==tr;return y(n.near)?(D.seed({reconcile:!1}),!1):y(n.far)?(n.swap(),typeof t.setWorld=="function"&&t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,n.link),D.seed({reconcile:!1}),!0):(console.warn(`[threshold] force('${x}'): no such world. near is '${n.near.id}', far is '${n.far&&n.far.id}'.`),!1)},get inAperture(){if(!g())return!1;const x=n.near,y=p(x,Al.copy(t.position)),A=y.s*y.d;return x.id===tr?A>-bl:Math.abs(y.lat)<=hd+Ae.RADIUS&&A>-bl&&A<bl&&y.h>=0&&y.h<=Tn.h},get crossings(){return a},get held(){return l},get bedMix(){return c}};return D}const om=Object.freeze({w:1.15,h:2.11}),KE=.014,pd=.035,md=16,Tl=1920*1080,ZE=.75,Rl=4,JE=2,_d=1.5,gd=45,QE=.2,tw=.95,ew=.002,xd="interior",nw=Math.PI/180,Ll=new Ft,iw=new Ft,sw=new z,vd=new Wt;function Md(n,t={}){const e=t.fov??58,i=t.apertureH??om.h,s=Number.isFinite(n)&&n>0?n:16/9,r=Math.tan(e*nw/2),o=r*s,a=Math.sqrt(1+o*o+r*r),c=Ae.RADIUS-KE,l=i-Ae.EYE-pd,u=Ae.EYE-pd,h=Math.min(c/o,l/r,u/r)/a,f=Math.min(QE,tw*h),d=f*a;return{aspect:s,fov:e,tx:o,ty:r,K:a,limit:h,near:f,skin:d,gapLat:c,gapUp:l,gapDown:u,marginLat:c-d*o,marginUp:l-d*r,marginDown:u-d*r}}function rw(n,t){n.updateMatrixWorld(!0);const e=t.clone().applyMatrix4(n.matrixWorldInverse);if(e.constant>0)return!1;const i=new ue(e.normal.x,e.normal.y,e.normal.z,e.constant),s=n.projectionMatrix.elements,r=new ue((Math.sign(i.x)+s[8])/s[0],(Math.sign(i.y)+s[9])/s[5],-1,(1+s[10])/s[14]),o=i.multiplyScalar(2/i.dot(r));return s[2]=o.x,s[6]=o.y,s[10]=o.z+1,s[14]=o.w,n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),!0}const ow=`
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
  float pull = uNear * ${(1+ew).toFixed(6)};
  float vz = -mv.z;
  if (vz > 0.0 && vz < pull) mv.xyz *= pull / vz;

  gl_Position = projectionMatrix * mv;
}`,aw=`
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
}`;function cw({renderer:n,camera:t,aperture:e=om,pixelRatioCap:i=!0,driveCameraNear:s=!0}={}){if(!n)throw new Error("portal(): no renderer");if(!t)throw new Error("portal(): no camera");n.info&&(n.info.autoReset=!1);const r=new Fi(1,1,{type:Sr,format:hn,depthBuffer:!0,stencilBuffer:!1,samples:Rl});r.texture.name="portalTarget",r.texture.colorSpace=xi,r.texture.minFilter=Oe,r.texture.magFilter=Oe,r.texture.generateMipmaps=!1;const o=new tn;o.name="portalCamera",o.matrixAutoUpdate=!1,o.matrixWorldAutoUpdate=!1;const a=[];let c=Md(t.aspect,{fov:t.fov,apertureH:e.h}),l=1,u=Rl,h=null,f=gd,d=!1;const _={passes:0,skipped:0,rebuilds:0,ratioChanges:0};let g=!1;function m(){n.getDrawingBufferSize(Ll);const A=Math.max(1,Math.floor(Ll.x)),L=Math.max(1,Math.floor(Ll.y)),O=A*L,F=O>Tl?ZE:1,I=O>Tl?JE:Rl;I!==u&&(u=I,r.samples=I,r.dispose(),_.rebuilds++),l=F,r.setSize(Math.max(1,Math.round(A*l)),Math.max(1,Math.round(L*l))),c=Md(t.aspect,{fov:t.fov,apertureH:e.h});for(const P of a){const U=P.material.uniforms;U.uRes.value.set(A,L),U.uNear.value=c.near}s&&Math.abs(t.near-c.near)>1e-12&&(t.near=c.near,t.updateProjectionMatrix())}function p(){return Math.min((typeof devicePixelRatio=="number"?devicePixelRatio:1)||1,2)}function v(){if(!i)return;const A=p(),L=n.getSize(iw),O=L.x*A*L.y*A,F=d&&A>_d&&O>Tl?_d:A,I=n.getPixelRatio();if(!(h!==null&&Math.abs(I-h)<1e-9||Math.abs(I-A)<1e-9)){h=null;return}if(Math.abs(I-F)<1e-9){h=F;return}n.setPixelRatio(F),h=F,_.ratioChanges++,m()}function M(A){if(A){d=!0,f=0,v();return}++f>=gd&&d&&(d=!1,v())}function E(A,L,O={}){const F=new vi(A,L,md,md);F.computeBoundingBox();const I=new pi({name:"portalCap",side:ei,fog:!1,toneMapped:!0,uniforms:{tPortal:{value:r.texture},uRes:{value:new Ft(1,1)},uNear:{value:c.near}},vertexShader:ow,fragmentShader:aw}),P=new It(F,I);P.name=O.name||"portalCap",P.isPortalCap=!0,P.frustumCulled=!1,O.faceMinusZ&&(P.rotation.y=Math.PI);const U=new z,Y=new z,K=new ii;return Object.defineProperties(P,{normalWorld:{get(){return this.updateWorldMatrix(!0,!1),U.set(0,0,1).transformDirection(this.matrixWorld)}},centreWorld:{get(){return this.updateWorldMatrix(!0,!1),Y.setFromMatrixPosition(this.matrixWorld)}},aabbInflated:{get(){return this.updateWorldMatrix(!0,!1),K.copy(this.geometry.boundingBox).applyMatrix4(this.matrixWorld).expandByScalar(c.skin)}}}),a.push(P),m(),P}function T(A,L,O=t){return!(!A||!A.isPortalCap||A.normalWorld.dot(sw.copy(O.position).sub(A.centreWorld))<=0||L&&!L.intersectsBox(A.aabbInflated))}const w=new _o;function S(A=t){return A.updateMatrixWorld(),vd.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),w.setFromProjectionMatrix(vd)}function R(A,L){if(typeof A.M=="function")return A.M(L.id);const O=L.id===xd?A.M_IE:A.M_EI;if(!O)throw new Error(`portal.pass(): link exposes no transform for "${L.id}"`);return O}function D(A,L){if(typeof A.keepFor=="function")return A.keepFor(L.id);const O=L.id===xd?A.keepI:A.keepE;if(!O)throw new Error(`portal.pass(): link exposes no clip plane for "${L.id}"`);return O}function x(A,L,O){if(!A||!L||!O||!O.scene){_.skipped++;return}M(!0);const F=A.portalCam||o;F.projectionMatrix.copy(t.projectionMatrix),F.projectionMatrixInverse.copy(t.projectionMatrixInverse),F.fov=t.fov,F.aspect=t.aspect,F.near=t.near,F.far=t.far,F.layers.mask=t.layers.mask,F.matrixAutoUpdate=!1,F.matrixWorldAutoUpdate=!1,F.matrixWorld.multiplyMatrices(R(A,L),t.matrixWorld),F.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),!g&&(Math.abs(F.scale.x-1)>1e-6||Math.abs(F.scale.y-1)>1e-6||Math.abs(F.scale.z-1)>1e-6)&&(g=!0,console.warn("[portal] the link is not rigid: portal camera scale",F.scale.x,F.scale.y,F.scale.z,"- the far world will be the wrong size.")),rw(F,D(A,O));const I=O.cap,P=I?I.visible:!1;I&&(I.visible=!1);const U=n.getRenderTarget();n.setRenderTarget(r),n.clear(),n.render(O.scene,F),n.setRenderTarget(U),I&&(I.visible=P),_.passes++}function y(){r.dispose();for(const A of a)A.geometry.dispose(),A.material.dispose();a.length=0,h!==null&&Math.abs(n.getPixelRatio()-h)<1e-9&&Math.abs(h-p())>1e-9&&n.setPixelRatio(p()),h=null}return m(),{rt:r,portalCam:o,makeCap:E,resize:m,pass:x,setLive:M,capOnScreen:T,frustum:S,dispose:y,stats:_,get near(){return c.near},get skin(){return c.skin},get plan(){return c},get scale(){return l},get samples(){return u},get live(){return d},get caps(){return a.slice()}}}function lw({renderer:n,size:t=[512,336]}={}){if(!n)throw new Error("screenFeed(): no renderer");const e=new Fi(t[0],t[1],{depthBuffer:!0,stencilBuffer:!1,samples:0});e.texture.colorSpace=xi,e.texture.minFilter=Oe,e.texture.magFilter=Oe,e.texture.generateMipmaps=!1;const i=new li({map:e.texture,toneMapped:!1});let s=!1;return{rt:e,material:i,get painted(){return s},render(r,o){const a=n.getRenderTarget();n.setRenderTarget(e),n.render(r,o),n.setRenderTarget(a),s=!0},dispose(){e.dispose(),i.dispose()}}}const yd=Object.freeze({howlaround:Object.freeze({ink:657930,glow:15921906,echoA:12,echoR:3.6,speed:.42,soft:.26,core:.15,churn:.3,vig:[2.4,.7]})});function uw(n="howlaround"){const t=typeof n=="string"?yd[n]:n;if(!t)throw new Error("vortexMaterial: unknown era "+n+" ("+Object.keys(yd).join(", ")+")");if(t.echoA!==Math.round(t.echoA))throw new Error("vortexMaterial: echoA must be a whole number — it is the noise tile period, and a fraction puts a seam down the screen at the atan2 cut");return new pi({uniforms:{uTime:{value:0},uInk:{value:new Ut(t.ink)},uGlow:{value:new Ut(t.glow)},uEchoA:{value:t.echoA},uEchoR:{value:t.echoR},uSpeed:{value:t.speed},uSoft:{value:t.soft},uCore:{value:t.core},uChurn:{value:t.churn},uVig:{value:new Ft(t.vig[0],t.vig[1])}},toneMapped:!1,vertexShader:`
`+["varying vec2 vUv;","void main() {","  vUv = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:`
`+["precision highp float;","uniform float uTime, uEchoA, uEchoR, uSpeed, uSoft, uCore, uChurn;","uniform vec2  uVig;","uniform vec3  uInk, uGlow;","varying vec2  vUv;","","float hash(vec2 p) {","  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);","}","","// Value noise TILED IN X with period per. The x axis is the ANGLE, which","// is circular: without the wrap every octave shows atan2 s cut as a hard","// radial seam straight down the screen, and on a blobby field that seam is","// the only straight line in the picture and the eye goes to it at once.","float vnoise(vec2 p, float per) {","  vec2 i = floor(p), f = fract(p);","  f = f * f * (3.0 - 2.0 * f);","  float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);","  float a = hash(vec2(x0, i.y));","  float b = hash(vec2(x1, i.y));","  float c = hash(vec2(x0, i.y + 1.0));","  float d = hash(vec2(x1, i.y + 1.0));","  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);","}","","// Four octaves, period doubling with them so every octave stays seamless.","float fbm(vec2 p, float per) {","  float s = 0.0, amp = 0.5, pr = per;","  for (int k = 0; k < 4; k++) {","    s += amp * vnoise(p, pr);","    p *= 2.0; pr *= 2.0; amp *= 0.5;","  }","  return s;","}","","void main() {","  vec2  p = vUv * 2.0 - 1.0;","  float r = length(p);","  float a = atan(p.y, p.x);","  float t = uTime;","","  // LOG-POLAR. The one line that makes this howlaround and not a tunnel:","  // feedback reproduces the frame SCALED each pass, so its echoes are","  // evenly spaced in log r. Travelling is then a CONSTANT drift along this","  // axis, which is also why nothing here needs a per-band phase.","  float lr = log(max(r, 0.015));","  vec2  q  = vec2((a / 6.2831853 + 0.5) * uEchoA, -lr * uEchoR + t * uSpeed);","","  // The field boils as well as drifting. Without this the picture is a","  // still being zoomed, which reads as a screensaver.","  float n = fbm(q + vec2(0.0, sin(t * 0.21) * uChurn), uEchoA);","","  // THE VIDICON S-CURVE. 405-line video clipped hard at both ends, and the","  // blown blacks and whites are most of what makes the reference image","  // read as 1963 rather than as grey cloud.","  float v = smoothstep(0.5 - uSoft, 0.5 + uSoft, n);","","  // ALIASING. Toward the centre log r runs away and q.y sweeps hundreds of","  // cycles across a handful of texels. Ask the hardware how fast the phase","  // is actually moving and FADE TO THE MEAN where it cannot be resolved —","  // the same analytic antialias the banded cut needed, and the reason this","  // still holds up filmed by the door camera or seen through the portal at","  // an angle. 0.5 is this S-curve s own mean.","  float aa = 1.0 - smoothstep(0.35, 0.95, fwidth(q.y));","  v = mix(0.5, v, aa);","","  // THE BRIGHT HOLE. Feedback runs away to WHITE where the loop gain is","  // highest, so the centre blows out rather than going dark. Its edge is","  // pushed around by the same noise field, because a round one reads as a","  // spotlight and the reference image s is anything but round.","  float coreR = uCore * (0.80 + 0.55 * n);","  float core  = 1.0 - smoothstep(coreR * 0.55, coreR, r);","  v = max(v, core);","","  // A little bloom off the hole, which is the tube overloading around it.","  v += 0.35 * (1.0 - smoothstep(coreR, coreR * 3.2, r)) * (1.0 - core);","","  // The corners fall away, gently. A CRT of this age had a vignette and","  // the scanner face is a rectangle cut out of a round field — but the","  // reference card is busy to its corners, so this only takes the edge off.","  v *= smoothstep(uVig.x, uVig.y, r);","","  gl_FragColor = vec4(mix(uInk, uGlow, clamp(v, 0.0, 1.0)), 1.0);","}"].join(`
`)})}const am=document.getElementById("scene"),Wa=new URLSearchParams(location.search),hw=Wa.get("seed")||"tardis",un=kS(Wa);let Be=di[un.site];const pe=new SM({canvas:am,antialias:!0,powerPreference:"high-performance"});pe.setPixelRatio(Math.min(devicePixelRatio||1,2));pe.setSize(innerWidth||1280,innerHeight||720,!1);pe.outputColorSpace=ln;pe.toneMapping=Cd;const fw=Gn.toneMappingExposure;pe.toneMappingExposure=fw;pe.shadowMap.type=Rd;pe.shadowMap.enabled=!!Gn.shadows;UM(pe);const si=new iu;si.background=new Ut(Gn.background);Gn.fog&&(si.fog=Gn.fog);const dw=new op(Gn.hemisphere.sky,Gn.hemisphere.ground,Gn.hemisphere.intensity);si.add(dw);const pw=new au(Gn.ambient.colour,Gn.ambient.intensity);si.add(pw);const Cl=Gn.camera,Ee=new tn(Cl.fov,(innerWidth||1280)/(innerHeight||720),Cl.near,Math.max(Cl.far,Be.camera.far)),rc=new vo(hw);Mp();const Is=yp(rc.child("tex.roundel")),Rn=new du,rt={};rt.shell=wy(Rn,Is,{liveDoors:!0});rt.console=Fy(Rn,Is);rt.rotor=jy(Rn,Is,{collar:!1});rt.fittings=M2(Rn,Is);rt.lighting=z2(Rn,Is);rt.doors=PS(Rn,Is,{shellDoors:rt.shell,console:rt.console});rt.fittings.setScanner(rt.fittings.shuttersOpen);const cm=ec(Rn.group);si.add(cm);si.add(rt.rotor.group);si.add(rt.fittings.group);si.add(rt.doors.group);const ti=new iu;ti.name="site";em();function lm(n,t){const e=new du,i=Object.values(dn).filter(a=>a.site===n.id).map(a=>({x:a.x,z:a.z,r:fi.plinth/2*Math.SQRT2+.06})),s=QS(e,n,{camera:Ee,rng:rc.child(`site.${n.id}`),keepOut:i}),r=s.contact(1.9,1.9);s.placeContact(r,t.x,t.z);const o=ec(e.group);return{bSite:e,site:s,bakedSite:o,boxContact:r}}let{bSite:ls,site:be,bakedSite:Jr,boxContact:ts}=lm(Be,un);ti.fog=be.fog;const Iu=new du,Ve=OE(Iu,rm(rc.child("tex.box")));ti.add(Jr);ti.add(be.live);const An=ec(Iu.group,{colliders:Ve.aoVolumes});An.position.set(un.x,0,un.z);An.rotation.y=un.yaw;Ve.leaves.position.copy(An.position);Ve.leaves.rotation.y=un.yaw;Ve.lamp.position.set(un.x,Ve.lamp.position.y,un.z);ti.add(An,Ve.leaves,Ve.lamp,ts);rt.doors.setBoxDoors(Ve.pivots);rt.lighting.setDoorSpillColour(Be.sun.colour);const Ar=Tu(un,di);let V0=Object.freeze([...ls.userData.collision.boxes||[]]);function mw(){V0=Object.freeze([...ls.userData.collision.boxes||[]])}function Eo(n){ls.userData.collision.boxes=n?[...V0,...n.boxCollision()]:[...V0]}Eo(Ar);ku(Ar);const gi=cw({renderer:pe,camera:Ee,aperture:Tn}),Pu=gi.makeCap(Tn.w,Tn.h,{name:"capInterior",faceMinusZ:!0});Pu.position.set(0,Tn.h/2,wn);si.add(Pu);const Du=gi.makeCap(Tn.w,Tn.h,{name:"capExterior"});Du.position.set(0,Tn.h/2,So);An.add(Du);const Xt=zE({interior:{id:de,scene:si,build:Rn,surface:"vinyl",dist:Xp,beds:Yp,cap:Pu},exterior:{id:Be.id,scene:ti,build:ls,surface:be.surface,dist:be.distance,beds:be.bedIds,cap:Du,update:be.update},link:Ar,startWorld:Wa.get("world")==="exterior"?Be.id:Wa.get("world")||(un.boot==="exterior"?Be.id:null)}),Dt=new j2(Ee,Rn,{spawn:et.SPAWN,yaw:et.SPAWN_YAW});Dt.setWorld(Xt.near);if(Xt.near.id!==de)if(un.start)Dt.teleport(un.start.x,0,un.start.z,un.start.yaw);else{const n=Ar.outsideSpawn();Dt.teleport(n.x,0,n.z,un.yaw+Math.PI)}const Re=new _S({sounds:Ea,buses:gS,distance:Xp,defaults:xS,roomBeds:Yp,propRate:vS,ctlRate:MS,siteBeds:be.beds,surfaceSteps:yS,rng:rc,say:n=>je(n)});Re.bindRoom({build:Rn,rotor:rt.rotor,fittings:rt.fittings,walker:Dt,room:et});rt.doors.setAudio(Re);Re.setWorld(Xt.near,Ar);const hi=Q2({reach:6});window.sonic=hi;const _w=.675+.263;function gw(n){if(!n||n.id===de)return 1;const t=di[n.id];return t?(t.hemi.intensity+t.ambient.intensity)/_w:1}const Aa=lw({renderer:pe}),qa=uw(),Qr=Object.freeze({x:0,y:2.4,z:.9,pitch:-.384,fov:52}),no=new tn(Qr.fov,1.1/.72,.2,Be.camera.far);function um(n=Xt.link){if(!n)return!1;const t=n.toSite(Qr.x,Qr.y,Qr.z);return no.position.copy(t),no.rotation.set(Qr.pitch,n.yaw+Math.PI,0,"YXZ"),no.updateMatrixWorld(!0),!0}const ge=jE({worlds:Xt,walker:Dt,audio:Re,portal:gi,camera:Ee,doors:rt.doors}),Ou=9,rr=Object.freeze(Object.keys(dn));let Nu=rr.find(n=>dn[n]===un)??null,uo=-1,ss=-1,W0=null;const oc=()=>uo>=0?rr[uo]:null,Xa=()=>ss>=0;function hm(){var e;if(Xa())return"Navigation: the ship is already between places.";for(let i=1;i<=rr.length;i++){const s=rr[(Math.max(0,uo)+i)%rr.length];if(s!==Nu){uo=rr.indexOf(s);break}}const n=dn[oc()],t=((e=di[n.site])==null?void 0:e.name)??n.site;return rt.console.setLamp(4,!0),`Navigation: coordinates set for ${t}.`}function xw(){var e;const n=oc();W0=n,ss=0,ho(!1),Eo(null),Xt.setLink(null),ge.seed();const t=dn[n];return`The ship dematerialises. Next stop: ${((e=di[t.site])==null?void 0:e.name)??t.site}.`}function vw(n){var e;const t=dn[n];Bu(t.site,t,{present:!1}),Nu=n,uo=-1,rt.console.setLamp(4,!1),rt.rotor.setRunning(!1),je(`The ship settles. Outside is ${((e=di[t.site])==null?void 0:e.name)??t.site}.`)}const Il={1:()=>{je(Mw())},2:()=>{je(fm())},3:()=>{je(dm())},4:()=>{je(hm())},5:()=>{je(Uu())},6:()=>{je(pm())}};function fm(){const n=!rt.fittings.shuttersOpen;return rt.fittings.setShutters(n),rt.fittings.setScanner(n),n?"The scanner shutters grind open. The screen lights, and shows nothing.":"The scanner shutters close over the screen."}function dm(){return rt.fittings.dispense(),"The food machine delivers a bar. It is, allegedly, bacon and eggs."}function Uu(){if(!rt.rotor.running&&!rt.doors.flightReady)return rt.doors.state!=="shut"?"Flight: the doors are open.":"Flight: the doors must be locked before the ship will move.";if(Xa()){const n=Math.max(0,Ou-ss);return`The ship is in flight. It will land when it lands — about ${Math.ceil(n)} seconds.`}return!rt.rotor.running&&!oc()?"Flight: no coordinates set. The navigation panel first.":(rt.rotor.setRunning(!rt.rotor.running),rt.rotor.running?`The time rotor begins to rise and fall. ${xw()}`:"The rotor settles, and the room goes quiet.")}function pm(){return rt.fittings.pulseFault(),rt.lighting.pulseAlert(4),"The fault locator runs a query. Forty-eight lamps have opinions."}function Sd(n=!1){return rt.doors.request(!rt.doors.open,{fittings:rt.fittings,rotor:rt.rotor,walker:Dt,atShell:n})}function Mw(){return rt.doors.setLocked(!rt.doors.locked,{rotor:rt.rotor})}const Ed={hatStand:"A hat stand. There is a hat on it.",chair:"A high-backed hall chair, out of a house that is nowhere near here.",clock:"An ormolu clock. It keeps perfect time, which proves nothing."};Dt.onInteract(n=>{var t;switch(n.action){case"panel":{const e=n.data.panel;rt.console.setLamp(e,!0),je(n.label),(t=Il[e])==null||t.call(Il);break}case"doors":je(Sd());break;case"shellDoors":je(Sd(!0));break;case"scanner":je(fm());break;case"faultLocator":je(pm());break;case"foodMachine":je(dm());break;case"rotor":je(Uu());break;default:Ed[n.action]&&je(Ed[n.action])}});const Tr=document.createElement("div");Tr.style.cssText="position:fixed;inset:0;pointer-events:none;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:#e8e6df;text-shadow:0 1px 3px rgba(0,0,0,.9)";Tr.innerHTML=`
<div id="x" style="position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;
     border-radius:50%;background:rgba(232,230,223,.55);box-shadow:0 0 2px #000"></div>
<div id="prompt" style="position:absolute;left:50%;top:calc(50% + 26px);transform:translateX(-50%);
     white-space:nowrap;opacity:0"></div>
<div id="say" style="position:absolute;left:50%;bottom:11%;transform:translateX(-50%);
     white-space:nowrap;opacity:0;transition:opacity .25s"></div>
<div id="lock" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
     background:rgba(6,8,10,.55);letter-spacing:.06em;text-align:center">
  <div>CLICK TO LOOK AROUND &nbsp;·&nbsp; WASD, E, ESC</div></div>`;document.body.appendChild(Tr);const wd=Tr.querySelector("#prompt"),q0=Tr.querySelector("#say"),Fu=Tr.querySelector("#lock");let Ta=0;function je(n){q0.textContent=n,q0.style.opacity="1",Ta=4}Dt.onPause(n=>{Fu.style.display=n?"flex":"none"});Fu.style.display=Dt.paused?"flex":"none";document.addEventListener("pointerlockerror",()=>{Dt.paused&&(Fu.innerHTML='<div>POINTER LOCK REFUSED BY THIS FRAME<div style="opacity:.7;font-size:12px;letter-spacing:0;margin-top:8px">Open http://localhost:5290 in a real browser tab, or drive it from the console:<br>game.update(dt) &nbsp;·&nbsp; shot(name, pose)</div></div>')},{once:!0});let bd=null;function yw(n){const t=Dt.prompt,e=t?t.id:null;e!==bd&&(bd=e,wd.textContent=t?`[E]  ${t.label}`:"",wd.style.opacity=t?"1":"0"),Ta>0&&(Ta-=n,Ta<=0&&(q0.style.opacity="0"))}const Pl=1/60,Sw=.25;let Dl=0;function We(n){const t=Math.min(Math.max(n||0,0),Sw);Dl+=t;let e=0;for(;Dl+1e-9>=Pl&&e<8;)Dt.update(Pl),ge.step(),Dl-=Pl,e++;if(rt.doors.update(t),rt.rotor.update(t),rt.fittings.update(t),rt.console.update(t),hi.update(t),hi.setMood(gw(Xt.near)),ss>=0&&(ss+=t,ss>=Ou)){const i=W0;ss=-1,W0=null,vw(i)}rt.lighting.setRotorDrive(rt.rotor.drive),qa.uniforms.uTime.value+=t*(.25+1.75*rt.rotor.drive),rt.lighting.setDoorSpill(rt.doors.t),rt.lighting.update(t),Rw(),be.update(t),be.setDoorSpill(rt.doors.t),Re.setDoorFraction(rt.doors.t),Re.update(t),yw(t)}const Ol=new z,Ew=new z,ww=6;function mm(){return!rt.fittings.shuttersOpen||!rt.fittings.scannerOn||Dt.world.id!==de?null:Xt.link?"feed":"vortex"}function bw(){const n=mm(),t=rt.fittings.screen;if(n==="vortex"){t.material!==qa&&(t.material=qa);return}if(n==="feed"){t.material!==Aa.material&&(t.material=Aa.material),t.getWorldPosition(Ol),Ol.distanceTo(Ee.position)<ww&&Ee.getWorldDirection(Ew).dot(Ol.sub(Ee.position).normalize())>.2&&um()&&Aa.render(ti,no);return}}function Un(){pe.info.reset(),Ee.updateMatrixWorld(!0),bw();const n=Xt.liveLink(Ee,rt.doors);n&&gi.pass(n,Xt.near,Xt.far),Xt.near.cap.visible=!!n,gi.setLive(!!n),pe.render(Xt.near.scene,Ee),hi.pass(pe,Ee)}const Aw="KeyQ";addEventListener("keydown",n=>{var e;if(n.code!==Aw||n.repeat||!Dt.locked)return;n.preventDefault();const t=hi.toggle();(e=Re==null?void 0:Re.play)==null||e.call(Re,t?"sonic_draw":"sonic_stow")});addEventListener("mousedown",n=>{var t,e;if(!(!Dt.locked||!hi.out)){if(n.button===2){hi.setAim(!0);return}if(n.button===0){if(!hi.fire())return;const i=hi.target(Ee,Xt.near.build);(t=Re==null?void 0:Re.play)==null||t.call(Re,"sonic_use"),i&&typeof i.use=="function"?i.use({by:"sonic",at:i}):i&&((e=Dt.useTarget)==null||e.call(Dt,i))}}});addEventListener("mouseup",n=>{n.button===2&&hi.setAim(!1)});addEventListener("contextmenu",n=>{Dt.locked&&n.preventDefault()});let Ad=performance.now();function _m(n){requestAnimationFrame(_m);const t=(n-Ad)/1e3;Ad=n,We(t),Un()}requestAnimationFrame(_m);addEventListener("resize",()=>{const n=innerWidth,t=innerHeight;!n||!t||(pe.setPixelRatio(Math.min(devicePixelRatio||1,2)),pe.setSize(n,t,!1),Ee.aspect=n/t,Ee.updateProjectionMatrix(),gi.resize())});const Tw={renderer:pe,scene:si,camera:Ee,build:Rn,palette:Is,walker:Dt,api:rt,audio:Re,siteScene:ti,site:be,box:Ve,worlds:Xt,portal:gi,threshold:ge,SITE:Be,buildSite:ls,buildBox:Iu,get link(){return Xt.link},get landing(){return Xt.link.landing},update:We,render:Un,get drawCalls(){return pe.info.render.calls},get world(){return Xt.near.id}};window.scanner={feed:Aa,vortex:qa,scanCam:no,aimScanCam:um,get src(){return mm()}};window.game=Tw;window.audio=Re;window.doors=function(t,e={}){const i=t===void 0?!rt.doors.open:!!t;if(e.now)return rt.doors.force(i),`doors ${rt.doors.state} (forced)`;const s=rt.doors.request(i,{fittings:rt.fittings,rotor:rt.rotor,walker:Dt,force:!!e.force});return`${rt.doors.lastAction}: ${s}`};window.step=function(t=1){const e=Math.max(1,Math.round(t*60));for(let i=0;i<e;i++)We(1/60);return Un(),{world:Xt.near.id,doors:rt.doors.state,t:+rt.doors.t.toFixed(3),drawCalls:pe.info.render.calls,crossings:ge.crossings}};window.walk=function(t=1,e={}){const i=t>=0?"KeyW":"KeyS",s=Math.abs(t),r=ge.crossings,o=Dt._locked;Dt._locked=!0,Dt._down.add(i),e.run&&Dt._down.add("ShiftLeft");let a=0;const c=Dt.position.clone();let l=0;for(;a<s&&l++<1800;){const u=Xt.near;We(1/60),Xt.near===u&&(a+=c.distanceTo(Dt.position)),c.copy(Dt.position)}Dt._down.delete(i),Dt._down.delete("ShiftLeft"),Dt._locked=o;for(let u=0;u<20;u++)We(1/60);return Un(),{world:Xt.near.id,pos:[+Dt.position.x.toFixed(3),+Dt.position.y.toFixed(3),+Dt.position.z.toFixed(3)],moved:+a.toFixed(3),crossed:ge.crossings-r,drawCalls:pe.info.render.calls}};window.look=function(t,e){return t!==void 0&&(Dt.yaw=t),e!==void 0&&(Dt.pitch=e),We(1/60),Un(),{yaw:+Dt.yaw.toFixed(4),pitch:+Dt.pitch.toFixed(4)}};window.go=function(t,e,i){return Dt.teleport(t,0,e,i),ge.seed(),We(1/60),Un(),window.where()};window.cross=function(){const t=Xt.near.id;return ge.force(Xt.far.id),We(1/60),Un(),`${t} -> ${Xt.near.id}`};window.atDoor=function(t=2.2){const e=Xt.link,i=t>=0;i!==(Xt.near.id!==de)&&ge.force(i?Be.id:de);const s=new z(0,0,wn+t),r=i?e.toExterior(s):s,o=i?e.landing.yaw+Math.PI:0;return Dt.teleport(r.x,0,r.z,o),Dt.pitch=.02,ge.seed(),We(1/60),Un(),window.where()};window.atDoorOff=function(t=1.6,e=1.1,i=1.2){const s=Xt.link;Xt.near.id===de&&ge.force(Be.id);const r=s.toExterior(new z(e,0,wn+t)),o=s.toExterior(new z(0,0,wn-i)),a=Math.atan2(o.x-r.x,o.z-r.z);return Dt.teleport(r.x,0,r.z,a),Dt.pitch=.04,ge.seed(),We(1/60),Un(),window.where()};window.where=function(){const t=Dt.position;return{world:Xt.near.id,pos:[+t.x.toFixed(3),+t.y.toFixed(3),+t.z.toFixed(3)],yaw:+Dt.yaw.toFixed(4),doors:rt.doors.state,portalLive:!!Xt.liveLink(Ee,rt.doors),drawCalls:pe.info.render.calls,near:+gi.near.toFixed(4),bedMix:+ge.bedMix.toFixed(3),crossings:ge.crossings}};function ku(n=Xt.link){const t=n.toExterior(new z(0,0,wn-.25));be.doorSpill.position.set(t.x,1.1,t.z)}const wo={id:"shellDoors",label:"Doors",pos:new z,action:"shellDoors",data:{},radius:1.6};ls.interactables.push(wo);function zu(n=Xt.link){n.toSite(0,1.2,.95,wo.pos)}function Rw(){wo.label=rt.doors.locked?"Doors — locked":rt.doors.moving?"Doors":rt.doors.open?"Close the doors":"Open the doors"}zu(Ar);const Lw=wo.radius;function ho(n){An.visible=n,Ve.leaves.visible=n,Ve.lamp.visible=n,ts.visible=n,wo.radius=n?Lw:-1}window.nav=function(){const t=hm();return je(t),t};window.fly=function(){const t=Uu();return je(t),t};window.plan=function(){return{here:Nu,dest:oc(),inFlight:Xa(),secondsLeft:Xa()?+(Ou-ss).toFixed(1):null}};window.depart=function(){return Xt.link?(rt.doors.forceT(0),rt.doors.setLocked(!0,{running:!1}),ho(!1),Eo(null),Xt.setLink(null),ge.seed(),We(1/60),Un(),`the box has left ${Be.id} — ${Dt.world.id===de?"you are aboard":"you are not"}`):"the box is already away"};function Nl(n){const t=new Set;n.traverse(e=>{e.geometry&&e.geometry.dispose();const i=e.material;i&&(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))});for(const e of t){for(const i of["map","normalMap","roughnessMap","aoMap","alphaMap","emissiveMap","bumpMap"])e[i]&&e[i].dispose&&e[i].dispose();e.dispose()}return t.size}function Bu(n,t=null,{present:e=!0}={}){const i=di[n];if(!i)return`unknown site: ${n} (${Object.keys(di).join(", ")})`;if(Dt.world.id!==de)return"travelTo: you are standing outside. Come in and shut the doors first.";const s=(typeof t=="string"?dn[t]:t)??Object.values(dn).find(o=>o.site===n);if(!s)return`travelTo: site '${n}' has no landing in LANDINGS`;if(s.site!==n)return`travelTo: landing is at '${s.site}', not '${n}'`;Xt.remountExterior({id:i.id}),ho(!1),ti.remove(Jr,be.live,ts),Nl(Jr),Nl(be.live),Nl(ts),Be=i,{bSite:ls,site:be,bakedSite:Jr,boxContact:ts}=lm(Be,s),ti.fog=be.fog,ti.add(Jr,be.live,ts),An.position.set(s.x,0,s.z),An.rotation.y=s.yaw,Ve.leaves.position.copy(An.position),Ve.leaves.rotation.y=s.yaw,Ve.lamp.position.set(s.x,Ve.lamp.position.y,s.z),An.updateMatrixWorld(!0),be.placeContact(ts,s.x,s.z),mw(),Xt.remountExterior({id:Be.id,build:ls,surface:be.surface,beds:be.bedIds,dist:be.distance,update:be.update});const r=Tu(s,di);return Eo(r),ho(!0),Xt.setLink(r),ku(r),zu(r),rt.lighting.setDoorSpillColour(Be.sun.colour),ge.seed(),Re.setSiteBeds(be.beds),e&&(We(1/60),Un()),`arrived at ${Be.name} (${Be.id}) — ${s.x}, ${s.z}`}window.travel=Bu;window.arrive=function(t){const e=typeof t=="string"?dn[t]:t;if(!e)return`unknown landing: ${t} (${Object.keys(dn).join(", ")})`;if(e.site!==Be.id)return Bu(e.site,e);An.position.set(e.x,0,e.z),An.rotation.y=e.yaw,Ve.leaves.position.copy(An.position),Ve.leaves.rotation.y=e.yaw,Ve.lamp.position.set(e.x,Ve.lamp.position.y,e.z),An.updateMatrixWorld(!0),be.placeContact(ts,e.x,e.z);const i=Tu(e,di);return Eo(i),ho(!0),Xt.setLink(i),ku(i),zu(i),ge.seed(),We(1/60),Un(),`box at ${e.x}, ${e.z} yaw ${e.yaw} — ${window.where().world}`};window.place=window.arrive;window.help=function(){return["doors(open?, {now})  open/shut the doors (now: instant, no interlock)","step(seconds)        advance the clock; rAF is frozen in this pane","walk(metres, {run})  walk through the real solver AND the real threshold","look(yaw, pitch)     yaw 0 = +Z = the doors from inside","go(x, z, yaw)        teleport within the current world","cross()              step through the threshold without walking","place(landing)       move the TARDIS. "+Object.keys(dn).join(" / "),"atDoor(m)            stand m metres out on the door axis, facing the doors","                     (+ outside on the plain, - inside the room)","where()              world, pose, doors, portal state, draw calls","shot(name, pose)     pose takes {world, landing, doors, pos, yaw, pitch, free}","shotAll()            the interior suite; shotThreshold() the new one","sfx(id)              fire one sound. sfx() lists all 41."].join(`
`)};window.sfx=function(t,e){if(t===void 0)return Object.keys(Ea);if(!Ea[t])return`no such sound: ${t} (${Object.keys(Ea).length} in the catalogue)`;if(Re.unlock(),!Re.available)return"no AudioContext — click the page once, then try again";if(Re.muted)return"muted — press N, or audio.setMuted(false)";const i=Re.play(t,e||{});return i?i.endsAt??i:`dropped: ${t} (voice limit, or no anchor for its spot)`};window.shot=async function(t="shot",e=null){e&&(e.world&&e.world!==Xt.near.id&&ge.force(e.world),e.doors!==void 0&&rt.doors.force(e.doors>0),e.pos&&Dt.teleport(e.pos[0],e.pos[1]??0,e.pos[2],e.yaw),e.yaw!==void 0&&(Dt.yaw=e.yaw),e.pitch!==void 0&&(Dt.pitch=e.pitch),ge.seed());const i=1280,s=720,r=pe.getPixelRatio(),o=pe.getSize(new Ft),a=Ee.aspect;r!==1&&pe.setPixelRatio(1),pe.setSize(i,s,!1),Ee.aspect=i/s,Ee.updateProjectionMatrix(),gi.resize();const c=Math.max(1,(e==null?void 0:e.settle)??90);for(let h=0;h<c;h++)We(1/60);e!=null&&e.free&&(Dt.driveCamera=!1,Ee.position.set(...e.free.pos),Ee.lookAt(...e.free.look),Ee.updateMatrixWorld(!0)),Un(),e!=null&&e.free&&(Dt.driveCamera=!0);const l=am.toDataURL("image/png");return r!==1&&pe.setPixelRatio(r),o.x>0&&o.y>0&&(pe.setSize(o.x,o.y,!1),Ee.aspect=a,Ee.updateProjectionMatrix()),gi.resize(),(await fetch("http://localhost:5299/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:l})})).json()};window.shotAll=async function(){const t=[["entry",{pos:[0,0,2.3],yaw:Math.PI,pitch:-.04}],["console-axis",{pos:[0,0,-2.03],yaw:0,pitch:-.16}],["rotor",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34}],["roundels",{pos:[0,0,-1.7],yaw:Math.PI,pitch:.06}],["doors",{pos:[0,0,.6],yaw:0,pitch:.1}],["scanner",{pos:[1.535,0,1.535],yaw:.785398,pitch:.1}],["fault",{pos:[-1.535,0,1.535],yaw:-.785398,pitch:.02}],["victorian",{pos:[-.75,0,-.75],yaw:3.926991,pitch:-.18}],["aerial",{pos:[0,0,2.3],yaw:Math.PI,settle:90,free:{pos:[2.3,2.95,2.3],look:[0,.95,0]}}]],e=[];for(const[r,o]of t)e.push(r+":"+((await shot(r,o)).ok?"ok":"FAIL"));const i=rt.fittings,s=rt.rotor;i.setShutters(!0),i.setScanner(!0),e.push("scanner-open:"+((await shot("scanner-open",{pos:[1.05,0,1.05],yaw:.785398,pitch:.1})).ok?"ok":"FAIL")),i.setShutters(!1),i.setScanner(!1);for(let r=0;r<120;r++)We(1/60);s.setRunning(!0);for(let r=0;r<600&&(We(1/60),!(s.height>s.parked+.12));r++);e.push("rotor-flight:"+((await shot("rotor-flight",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34,settle:1})).ok?"ok":"FAIL")),s.setRunning(!1);for(let r=0;r<400;r++)We(1/60);return e};function gm(){const n=fi.half-So,t=c=>atDoor(c+n),e=(c,l,u)=>{const h=Math.hypot(c,l),f=(h+n)/h;return atDoorOff(c*f,l*f,u)},i=(c,l,u,h)=>{const f=Math.hypot(c,l),d=(h+n)/f;return atDoorOff(c*d,l*d,u)},s=Math.tan(Ee.fov*Math.PI/180/2),r=.3,o=(De.TOP/2+r)/s;return{FACE_D:n,atFace:t,atFaceOff:e,atFaceR:i,HALF_V:s,FIT_MARGIN:r,FIT_D:o,aimAt:(c,l)=>Math.atan((c-Ae.EYE)/l)}}window.shotThreshold=async function(){const t=[],e=async(h,f)=>{const d=await shot(h,f);t.push(`${h}:${d.ok?"ok":"FAIL"}:${pe.info.render.calls}`)};Xt.near.id!==de&&ge.force(de);const{FACE_D:i,atFace:s,atFaceR:r,FIT_D:o,aimAt:a}=gm();rt.fittings.setShutters(!0),rt.fittings.setScanner(!0),await e("doors",{doors:0,pos:[0,0,.6],yaw:0,pitch:.1}),await e("doors-open",{doors:1,pos:[0,0,.6],yaw:0,pitch:.1}),rt.doors.forceT(.45),await e("doors-swing",{pos:[0,0,.6],yaw:0,pitch:.1,settle:1}),await e("doors-funnel",{doors:1,pos:[.5,0,2.2],yaw:0,pitch:.02}),await e("portal-out",{doors:1,pos:[0,0,1.4],yaw:0,pitch:.02}),await e("portal-near",{doors:1,pos:[0,0,3.18],yaw:0,pitch:0}),await e("threshold-a",{doors:1,pos:[0,0,3.283],yaw:0,pitch:0}),await e("threshold-b",{doors:1,pos:[0,0,3.285],yaw:0,pitch:0});const c=Be.id,l=()=>Xt.link;await e("site-sky",{world:c,doors:0,pos:[4,0,4],yaw:2.356194,pitch:.42}),await e("site-wide",{world:c,doors:0,pos:[0,0,5],yaw:Math.PI,pitch:-.06,free:{pos:[l().landing.x,6,l().landing.z+6],look:[l().landing.x,1.4,l().landing.z]}}),atDoor(10.8),await e("site-eye",{pitch:.02}),rt.doors.force(!1),s(o),await e("box-front",{pitch:a(De.TOP/2,o)}),rt.doors.force(!1),r(1.6,1.9,.085,o),await e("box-corner",{pitch:a(De.TOP/2,o)}),rt.doors.force(!1),r(1.6,1.9,.085,1.6),await e("box-band",{pitch:a(1.76,1.6)}),rt.doors.force(!1),atDoorOff(.9+i,-.305,0),await e("box-notice",{pitch:a(1.145,.9)});{const h=(De.SIGN_Y0+De.SIGN_Y1)/2;rt.doors.force(!1),s(1.3),await e("box-sign",{pitch:a(h,1.3)})}{const h=(De.TOP+2.9)/2;rt.doors.force(!1),s(2.1),await e("box-lamp",{pitch:a(h,2.1+fi.half)})}rt.doors.force(!0),atDoor(2.715),await e("portal-in",{}),rt.doors.force(!0),s(o),await e("box-open",{pitch:a(De.TOP/2,o)}),rt.doors.force(!0),atDoorOff(1.6,1.1,1.2),await e("portal-in-offaxis",{}),rt.doors.force(!0),r(1.697,1.697,.085,o),await e("box-grazing",{pitch:a(De.TOP/2,o)}),rt.doors.force(!0),r(1.24,2.66,.085,o),await e("box-raking",{pitch:a(De.TOP/2,o)}),rt.doors.force(!1),atDoor(.7),await e("box-vestibule",{}),rt.doors.force(!0),atDoorOff(1.1,.62,.085),await e("box-reveal",{}),rt.doors.forceT(.45),atDoor(2.715),await e("box-swing",{settle:1});{const h=l().landing;rt.doors.force(!1),await e("box-plan",{free:{pos:[h.x,7.2,h.z-.001],look:[h.x,1,h.z]}})}{const h=l();rt.doors.force(!0);const f=So+fi.half+o,d=h.toExterior(new z(0,0,wn-f)),_=h.toExterior(new z(0,0,wn));Dt.teleport(d.x,0,d.z,Math.atan2(_.x-d.x,_.z-d.z)),Dt.pitch=a(De.TOP/2,o),ge.seed()}await e("box-behind",{}),rt.doors.force(!0),atDoor(5.8),await e("box-behind-ish",{});const u=l().landing;dn.ashfall_rim&&dn.ashfall_rim.site===c&&(place("ashfall_rim"),rt.doors.force(!0),atDoor(2.715),await e("box-placed",{}),place({...u})),ge.force(de),rt.doors.force(!1),rt.fittings.setShutters(!1),rt.fittings.setScanner(!1),Dt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),ge.seed();for(let h=0;h<90;h++)We(1/60);return t};window.shotLanding=async function(t="landing"){const{atFace:e,FIT_D:i,aimAt:s}=gm(),r=[],o=async(a,c)=>{const l=await shot(a,c);r.push(`${a}:${l.ok?"ok":"FAIL"}:${pe.info.render.calls}`)};Xt.near.id!==de&&ge.force(de),rt.fittings.setShutters(!0),rt.fittings.setScanner(!0),ge.force(Be.id),rt.doors.force(!0),atDoor(2.715),await o(`${t}-portal-in`,{}),rt.doors.force(!1),e(i),await o(`${t}-box-front`,{pitch:s(De.TOP/2,i)}),rt.doors.force(!0),e(i),await o(`${t}-box-open`,{pitch:s(De.TOP/2,i)}),ge.force(de),rt.doors.force(!1),rt.fittings.setShutters(!1),rt.fittings.setScanner(!1),Dt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),ge.seed();for(let a=0;a<90;a++)We(1/60);return r};console.info(`[room] built. ${cm.children.length} baked meshes, ${Rn.lights.length} lights, ${Rn.interactables.length} interactables, ${Rn.colliders.length} collider(s).`);
