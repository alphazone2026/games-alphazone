(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uu="169",Km=0,_h=1,Zm=2,Zd=1,Jd=2,Fi=3,li=0,wn=1,mi=2,fs=0,pr=1,gh=2,xh=3,Zl=4,Jm=5,Cs=100,Qm=101,t_=102,e_=103,n_=104,i_=200,s_=201,r_=202,o_=203,Jl=204,Ql=205,a_=206,c_=207,l_=208,u_=209,h_=210,f_=211,d_=212,p_=213,m_=214,t0=0,e0=1,n0=2,yr=3,i0=4,s0=5,r0=6,o0=7,Qd=0,__=1,g_=2,ds=0,x_=1,v_=2,M_=3,tp=4,y_=5,S_=6,E_=7,ep=300,Sr=301,Er=302,a0=303,c0=304,ac=306,Us=1e3,cs=1001,l0=1002,mn=1003,w_=1004,zo=1005,Ue=1006,wc=1007,ri=1008,Wi=1009,np=1010,ip=1011,_o=1012,hu=1013,Fs=1014,gi=1015,Ir=1016,fu=1017,du=1018,wr=1020,sp=35902,rp=1021,op=1022,_n=1023,ap=1024,cp=1025,mr=1026,br=1027,pu=1028,mu=1029,lp=1030,_u=1031,gu=1033,ba=33776,Aa=33777,Ta=33778,Ra=33779,u0=35840,h0=35841,f0=35842,d0=35843,p0=36196,m0=37492,_0=37496,g0=37808,x0=37809,v0=37810,M0=37811,y0=37812,S0=37813,E0=37814,w0=37815,b0=37816,A0=37817,T0=37818,R0=37819,L0=37820,C0=37821,La=36492,I0=36494,D0=36495,up=36283,P0=36284,O0=36285,N0=36286,b_=3200,A_=3201,hp=0,T_=1,os="",sn="srgb",bi="srgb-linear",xu="display-p3",cc="display-p3-linear",Ba="linear",we="srgb",Ha="rec709",Ga="p3",Hs=7680,vh=519,R_=512,L_=513,C_=514,fp=515,I_=516,D_=517,P_=518,O_=519,Mh=35044,go=35048,yh="300 es",Hi=2e3,Wa=2001;class Dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,U0=180/Math.PI;function wo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function En(n,t,e){return Math.max(t,Math.min(e,n))}function N_(n,t){return(n%t+t)%t}function Ac(n,t,e){return(1-e)*n+e*t}function Ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(En(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],g=s[0],_=s[3],p=s[6],v=s[1],M=s[4],S=s[7],A=s[2],w=s[5],E=s[8];return r[0]=o*g+a*v+c*A,r[3]=o*_+a*M+c*w,r[6]=o*p+a*S+c*E,r[1]=l*g+u*v+h*A,r[4]=l*_+u*M+h*w,r[7]=l*p+u*S+h*E,r[2]=f*g+d*v+m*A,r[5]=f*_+d*M+m*w,r[8]=f*p+d*S+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,m=e*h+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=h*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new Kt;function dp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U_(){const n=Va("canvas");return n.style.display="block",n}const Sh={};function Ca(n){n in Sh||(Sh[n]=!0,console.warn(n))}function F_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function k_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function z_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Eh=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[bi]:{transfer:Ba,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[sn]:{transfer:we,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cc]:{transfer:Ba,primaries:Ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(wh),fromReference:n=>n.applyMatrix3(Eh)},[xu]:{transfer:we,primaries:Ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(wh),fromReference:n=>n.applyMatrix3(Eh).convertLinearToSRGB()}},B_=new Set([bi,cc]),le={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!B_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Fr[t].toReference,s=Fr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Fr[n].primaries},getTransfer:function(n){return n===os?Ba:Fr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Fr[t].luminanceCoefficients)}};function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gs;class H_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=Va("canvas")),Gs.width=t.width,Gs.height=t.height;const i=Gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Va("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_r(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_r(e[i]/255)*255):e[i]=_r(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let G_=0;class pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lc(s[o].image)):r.push(Lc(s[o]))}else r=Lc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Lc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W_=0;class gn extends Dr{constructor(t=gn.DEFAULT_IMAGE,e=gn.DEFAULT_MAPPING,i=cs,s=cs,r=Ue,o=ri,a=_n,c=Wi,l=gn.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=wo(),this.name="",this.source=new pp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ep)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case l0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case l0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=ep;gn.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],g=c[2],_=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+_)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(d+1)/2,A=(p+1)/2,w=(u+f)/4,E=(h+g)/4,L=(m+_)/4;return M>S&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=E/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=L/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=L/r),this.set(i,s,r,e),this}let v=Math.sqrt((_-m)*(_-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(_-m)/v,this.y=(h-g)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends Dr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends V_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class mp extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class q_ extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=g;return}if(h!==g||c!==f||l!==d||u!==m){let _=1-a;const p=c*f+l*d+u*m+h*g,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),w=Math.atan2(A,p*v);_=Math.sin(_*w)/A,a=Math.sin(a*w)/A}const S=a*v;if(c=c*_+f*S,l=l*_+d*S,u=u*_+m*S,h=h*_+g*S,_===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+c*d-l*f,t[e+1]=c*m+u*f+l*h-a*d,t[e+2]=l*m+u*d+a*f-c*h,t[e+3]=u*m-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cc.copy(this).projectOnVector(t),this.sub(Cc)}reflect(t){return this.sub(Cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(En(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new H,bh=new Pr;class hi{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Ho.subVectors(this.max,kr),Ws.subVectors(t.a,kr),Vs.subVectors(t.b,kr),qs.subVectors(t.c,kr),$i.subVectors(Vs,Ws),ji.subVectors(qs,Vs),vs.subVectors(Ws,qs);let e=[0,-$i.z,$i.y,0,-ji.z,ji.y,0,-vs.z,vs.y,$i.z,0,-$i.x,ji.z,0,-ji.x,vs.z,0,-vs.x,-$i.y,$i.x,0,-ji.y,ji.x,0,-vs.y,vs.x,0];return!Ic(e,Ws,Vs,qs,Ho)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Ws,Vs,qs,Ho))?!1:(Go.crossVectors($i,ji),e=[Go.x,Go.y,Go.z],Ic(e,Ws,Vs,qs,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new H,new H,new H,new H,new H,new H,new H,new H],Kn=new H,Bo=new hi,Ws=new H,Vs=new H,qs=new H,$i=new H,ji=new H,vs=new H,kr=new H,Ho=new H,Go=new H,Ms=new H;function Ic(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);const a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),c=t.dot(Ms),l=e.dot(Ms),u=i.dot(Ms);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const X_=new hi,zr=new H,Dc=new H;class bo{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):X_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Dc)),this.expandByPoint(zr.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new H,Pc=new H,Wo=new H,Ki=new H,Oc=new H,Vo=new H,Nc=new H;class Y_{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Pc.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Pc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wo),a=Ki.dot(this.direction),c=-Ki.dot(Wo),l=Ki.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pc).addScaledVector(Wo,f),d}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,r){Oc.subVectors(e,t),Vo.subVectors(i,t),Nc.crossVectors(Oc,Vo);let o=this.direction.dot(Nc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,t);const c=a*this.direction.dot(Vo.crossVectors(Ki,Vo));if(c<0)return null;const l=a*this.direction.dot(Oc.cross(Ki));if(l<0||c+l>o)return null;const u=-a*Ki.dot(Nc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,s,r,o,a,c,l,u,h,f,d,m,g,_){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,d,m,g,_)}set(t,e,i,s,r,o,a,c,l,u,h,f,d,m,g,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+m*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,m=l*u,g=l*h;e[0]=f+g*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,m=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=m*l-d,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+m,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*c,d=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($_,t,j_)}lookAt(t,e,i){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Zi.crossVectors(i,On),Zi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Zi.crossVectors(i,On)),Zi.normalize(),qo.crossVectors(On,Zi),s[0]=Zi.x,s[4]=qo.x,s[8]=On.x,s[1]=Zi.y,s[5]=qo.y,s[9]=On.y,s[2]=Zi.z,s[6]=qo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],g=i[6],_=i[10],p=i[14],v=i[3],M=i[7],S=i[11],A=i[15],w=s[0],E=s[4],L=s[8],N=s[12],x=s[1],y=s[5],T=s[9],C=s[13],O=s[2],k=s[6],R=s[10],D=s[14],F=s[3],X=s[7],K=s[11],it=s[15];return r[0]=o*w+a*x+c*O+l*F,r[4]=o*E+a*y+c*k+l*X,r[8]=o*L+a*T+c*R+l*K,r[12]=o*N+a*C+c*D+l*it,r[1]=u*w+h*x+f*O+d*F,r[5]=u*E+h*y+f*k+d*X,r[9]=u*L+h*T+f*R+d*K,r[13]=u*N+h*C+f*D+d*it,r[2]=m*w+g*x+_*O+p*F,r[6]=m*E+g*y+_*k+p*X,r[10]=m*L+g*T+_*R+p*K,r[14]=m*N+g*C+_*D+p*it,r[3]=v*w+M*x+S*O+A*F,r[7]=v*E+M*y+S*k+A*X,r[11]=v*L+M*T+S*R+A*K,r[15]=v*N+M*C+S*D+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],g=t[7],_=t[11],p=t[15];return m*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*d-i*c*d)+g*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+_*(+e*l*h-e*a*d-r*o*h+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],g=t[13],_=t[14],p=t[15],v=h*_*l-g*f*l+g*c*d-a*_*d-h*c*p+a*f*p,M=m*f*l-u*_*l-m*c*d+o*_*d+u*c*p-o*f*p,S=u*g*l-m*h*l+m*a*d-o*g*d-u*a*p+o*h*p,A=m*h*c-u*g*c-m*a*f+o*g*f+u*a*_-o*h*_,w=e*v+i*M+s*S+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=v*E,t[1]=(g*f*r-h*_*r-g*s*d+i*_*d+h*s*p-i*f*p)*E,t[2]=(a*_*r-g*c*r+g*s*l-i*_*l-a*s*p+i*c*p)*E,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*d-i*c*d)*E,t[4]=M*E,t[5]=(u*_*r-m*f*r+m*s*d-e*_*d-u*s*p+e*f*p)*E,t[6]=(m*c*r-o*_*r-m*s*l+e*_*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=S*E,t[9]=(m*h*r-u*g*r-m*i*d+e*g*d+u*i*p-e*h*p)*E,t[10]=(o*g*r-m*a*r+m*i*l-e*g*l-o*i*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*d-e*a*d)*E,t[12]=A*E,t[13]=(u*g*s-m*h*s+m*i*f-e*g*f-u*i*_+e*h*_)*E,t[14]=(m*a*s-o*g*s-m*i*c+e*g*c+o*i*_-e*a*_)*E,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,m=r*h,g=o*u,_=o*h,p=a*h,v=c*l,M=c*u,S=c*h,A=i.x,w=i.y,E=i.z;return s[0]=(1-(g+p))*A,s[1]=(d+S)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(f+p))*w,s[6]=(_+v)*w,s[7]=0,s[8]=(m+M)*E,s[9]=(_-v)*E,s[10]=(1-(f+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Zn.copy(this);const l=1/r,u=1/o,h=1/a;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,e.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Hi){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,m;if(a===Hi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Wa)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*l,d=(i+s)*u;let m,g;if(a===Hi)m=(o+r)*h,g=-2*h;else if(a===Wa)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xs=new H,Zn=new $t,$_=new H(0,0,0),j_=new H(1,1,1),Zi=new H,qo=new H,On=new H,Ah=new $t,Th=new Pr;class ui{constructor(t=0,e=0,i=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K_=0;const Rh=new H,Ys=new Pr,Di=new $t,Xo=new H,Br=new H,Z_=new H,J_=new Pr,Lh=new H(1,0,0),Ch=new H(0,1,0),Ih=new H(0,0,1),Dh={type:"added"},Q_={type:"removed"},$s={type:"childadded",child:null},Uc={type:"childremoved",child:null};class Qe extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new H,e=new ui,i=new Pr,s=new H(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Kt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xo.copy(t):Xo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Br,Xo,this.up):Di.lookAt(Xo,Br,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Di),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Q_),Uc.child=t,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,Z_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,J_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Qe.DEFAULT_UP=new H(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new H,Pi=new H,Fc=new H,Oi=new H,js=new H,Ks=new H,Ph=new H,kc=new H,zc=new H,Bc=new H,Hc=new fe,Gc=new fe,Wc=new fe;class ii{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Jn.subVectors(t,e),s.cross(Jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Jn.subVectors(s,e),Pi.subVectors(i,e),Fc.subVectors(t,e);const o=Jn.dot(Jn),a=Jn.dot(Pi),c=Jn.dot(Fc),l=Pi.dot(Pi),u=Pi.dot(Fc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Oi.x),c.addScaledVector(o,Oi.y),c.addScaledVector(a,Oi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(Wc,r.z),o}static isFrontFacing(t,e,i,s){return Jn.subVectors(i,e),Pi.subVectors(t,e),Jn.cross(Pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ii.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Ks.subVectors(r,i),kc.subVectors(t,i);const c=js.dot(kc),l=Ks.dot(kc);if(c<=0&&l<=0)return e.copy(i);zc.subVectors(t,s);const u=js.dot(zc),h=Ks.dot(zc);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(js,o);Bc.subVectors(t,r);const d=js.dot(Bc),m=Ks.dot(Bc);if(m>=0&&d<=m)return e.copy(r);const g=d*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(Ks,a);const _=u*m-d*h;if(_<=0&&h-u>=0&&d-m>=0)return Ph.subVectors(r,s),a=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(Ph,a);const p=1/(_+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(js,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Vc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=N_(t,1),e=En(e,0,1),i=En(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Vc(o,r,t+1/3),this.g=Vc(o,r,t),this.b=Vc(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const i=gp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=Rc(t.r),this.g=Rc(t.g),this.b=Rc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return le.fromWorkingColorSpace(hn.copy(this),t),Math.round(En(hn.r*255,0,255))*65536+Math.round(En(hn.g*255,0,255))*256+Math.round(En(hn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(hn.copy(this),e);const i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=sn){le.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,i=hn.g,s=hn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Yo);const i=Ac(Ji.h,Yo.h,e),s=Ac(Ji.s,Yo.s,e),r=Ac(Ji.l,Yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new zt;zt.NAMES=gp;let tg=0;class Ao extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=pr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ql&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oi extends Ao{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new H,$o=new Bt;class de{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class xp extends de{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class vp extends de{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends de{constructor(t,e,i){super(new Float32Array(t),e,i)}}let eg=0;const Hn=new $t,qc=new Qe,Zs=new H,Nn=new hi,Hr=new hi,Ke=new H;class vn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dp(t)?vp:xp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return qc.lookAt(t),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Nn.min,Hr.min),Nn.expandByPoint(Ke),Ke.addVectors(Nn.max,Hr.max),Nn.expandByPoint(Ke)):(Nn.expandByPoint(Hr.min),Nn.expandByPoint(Hr.max))}Nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ke.fromBufferAttribute(a,l),c&&(Zs.fromBufferAttribute(t,l),Ke.add(Zs)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new H,c[L]=new H;const l=new H,u=new H,h=new H,f=new Bt,d=new Bt,m=new Bt,g=new H,_=new H;function p(L,N,x){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,N),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,x),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const y=1/(d.x*m.y-m.x*d.y);isFinite(y)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(y),_.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(y),a[L].add(g),a[N].add(g),a[x].add(g),c[L].add(_),c[N].add(_),c[x].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,N=v.length;L<N;++L){const x=v[L],y=x.start,T=x.count;for(let C=y,O=y+T;C<O;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new H,S=new H,A=new H,w=new H;function E(L){A.fromBufferAttribute(s,L),w.copy(A);const N=a[L];M.copy(N),M.sub(A.multiplyScalar(A.dot(N))).normalize(),S.crossVectors(w,N);const y=S.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,y)}for(let L=0,N=v.length;L<N;++L){const x=v[L],y=x.start,T=x.count;for(let C=y,O=y+T;C<O;C+=3)E(t.getX(C+0)),E(t.getX(C+1)),E(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,c=new H,l=new H,u=new H,h=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),g=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let g=0,_=c.length;g<_;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new de(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new $t,ys=new Y_,jo=new bo,Nh=new H,Ko=new H,Zo=new H,Jo=new H,Xc=new H,Qo=new H,Uh=new H,ta=new H;class Ot extends Qe{constructor(t=new vn,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Xc.fromBufferAttribute(h,t),o?Qo.addScaledVector(Xc,u):Qo.addScaledVector(Xc.sub(e),u))}e.add(Qo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),ys.copy(t.ray).recast(t.near),!(jo.containsPoint(ys.origin)===!1&&(ys.intersectSphere(jo,Nh)===null||ys.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),ys.copy(t.ray).applyMatrix4(Oh),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const _=f[m],p=o[_.materialIndex],v=Math.max(_.start,d.start),M=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let S=v,A=M;S<A;S+=3){const w=a.getX(S),E=a.getX(S+1),L=a.getX(S+2);s=ea(this,p,t,i,l,u,h,w,E,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const v=a.getX(_),M=a.getX(_+1),S=a.getX(_+2);s=ea(this,o,t,i,l,u,h,v,M,S),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const _=f[m],p=o[_.materialIndex],v=Math.max(_.start,d.start),M=Math.min(c.count,Math.min(_.start+_.count,d.start+d.count));for(let S=v,A=M;S<A;S+=3){const w=S,E=S+1,L=S+2;s=ea(this,p,t,i,l,u,h,w,E,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const v=_,M=_+1,S=_+2;s=ea(this,o,t,i,l,u,h,v,M,S),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function ng(n,t,e,i,s,r,o,a){let c;if(t.side===wn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===li,a),c===null)return null;ta.copy(a),ta.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ta);return l<e.near||l>e.far?null:{distance:l,point:ta.clone(),object:n}}function ea(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ko),n.getVertexPosition(c,Zo),n.getVertexPosition(l,Jo);const u=ng(n,t,e,i,Ko,Zo,Jo,Uh);if(u){const h=new H;ii.getBarycoord(Uh,Ko,Zo,Jo,h),s&&(u.uv=ii.getInterpolatedAttribute(s,a,c,l,h,new Bt)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,c,l,h,new Bt)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,c,l,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new H,materialIndex:0};ii.getNormal(Ko,Zo,Jo,f.normal),u.face=f,u.barycoord=h}return u}class cn extends vn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function m(g,_,p,v,M,S,A,w,E,L,N){const x=S/E,y=A/L,T=S/2,C=A/2,O=w/2,k=E+1,R=L+1;let D=0,F=0;const X=new H;for(let K=0;K<R;K++){const it=K*y-C;for(let ft=0;ft<k;ft++){const Q=ft*x-T;X[g]=Q*v,X[_]=it*M,X[p]=O,l.push(X.x,X.y,X.z),X[g]=0,X[_]=0,X[p]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(ft/E),h.push(1-K/L),D+=1}}for(let K=0;K<L;K++)for(let it=0;it<E;it++){const ft=f+it+k*K,Q=f+it+k*(K+1),z=f+(it+1)+k*(K+1),U=f+(it+1)+k*K;c.push(ft,Q,U),c.push(Q,z,U),F+=6}a.addGroup(d,F,N),d+=F,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function yn(n){const t={};for(let e=0;e<n.length;e++){const i=Ar(n[e]);for(const s in i)t[s]=i[s]}return t}function ig(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const sg={clone:Ar,merge:yn};var rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Ao{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=ig(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class yp extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new H,Fh=new Bt,kh=new Bt;class rn extends yp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=U0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return U0*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Fh,kh),e.subVectors(kh,Fh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class ag extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Js,Qs,t,e);s.layers=this.layers,this.add(s);const r=new rn(Js,Qs,t,e);r.layers=this.layers,this.add(r);const o=new rn(Js,Qs,t,e);o.layers=this.layers,this.add(o);const a=new rn(Js,Qs,t,e);a.layers=this.layers,this.add(a);const c=new rn(Js,Qs,t,e);c.layers=this.layers,this.add(c);const l=new rn(Js,Qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Sp extends gn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cg extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:fs});r.uniforms.tEquirect.value=e;const o=new Ot(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Ue),new ag(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Yc=new H,lg=new H,ug=new Kt;class zi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Yc.subVectors(i,e).cross(lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Yc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ug.getNormalMatrix(t),s=this.coplanarPoint(Yc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new bo,na=new H;class To{constructor(t=new zi,e=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],m=s[9],g=s[10],_=s[11],p=s[12],v=s[13],M=s[14],S=s[15];if(i[0].setComponents(c-r,f-l,_-d,S-p).normalize(),i[1].setComponents(c+r,f+l,_+d,S+p).normalize(),i[2].setComponents(c+o,f+u,_+m,S+v).normalize(),i[3].setComponents(c-o,f-u,_-m,S-v).normalize(),i[4].setComponents(c-a,f-h,_-g,S-M).normalize(),e===Hi)i[5].setComponents(c+a,f+h,_+g,S+M).normalize();else if(e===Wa)i[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ep(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hg(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const g=h[d];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ai extends vn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],m=[],g=[],_=[];for(let p=0;p<u;p++){const v=p*f-o;for(let M=0;M<l;M++){const S=M*h-r;m.push(S,-v,0),g.push(0,0,1),_.push(M/a),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,S=v+l*(p+1),A=v+1+l*(p+1),w=v+1+l*p;d.push(M,S,w),d.push(S,A,w)}this.setIndex(d),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dg=`#ifdef USE_ALPHAHASH
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
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
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
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ng=`#define PI 3.141592653589793
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
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`
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
}`,Vg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
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
#endif`,u1=`struct PhysicalMaterial {
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
}`,h1=`
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,R1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
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
#endif`,N1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,vx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,Rx=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Cx=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Dx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Ox=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Ux=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,kx=`#define TOON
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
}`,zx=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Wx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:fg,alphahash_pars_fragment:dg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:_g,alphatest_pars_fragment:gg,aomap_fragment:xg,aomap_pars_fragment:vg,batching_pars_vertex:Mg,batching_vertex:yg,begin_vertex:Sg,beginnormal_vertex:Eg,bsdfs:wg,iridescence_fragment:bg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Tg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Cg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Pg,color_vertex:Og,common:Ng,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Fg,displacementmap_pars_vertex:kg,displacementmap_vertex:zg,emissivemap_fragment:Bg,emissivemap_pars_fragment:Hg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:Vg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Xg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:s1,envmap_vertex:$g,fog_vertex:jg,fog_pars_vertex:Kg,fog_fragment:Zg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:t1,lights_lambert_fragment:e1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:r1,lights_toon_pars_fragment:o1,lights_phong_fragment:a1,lights_phong_pars_fragment:c1,lights_physical_fragment:l1,lights_physical_pars_fragment:u1,lights_fragment_begin:h1,lights_fragment_maps:f1,lights_fragment_end:d1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:g1,map_fragment:x1,map_pars_fragment:v1,map_particle_fragment:M1,map_particle_pars_fragment:y1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:E1,morphinstance_vertex:w1,morphcolor_vertex:b1,morphnormal_vertex:A1,morphtarget_pars_vertex:T1,morphtarget_vertex:R1,normal_fragment_begin:L1,normal_fragment_maps:C1,normal_pars_fragment:I1,normal_pars_vertex:D1,normal_vertex:P1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:N1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:k1,opaque_fragment:z1,packing:B1,premultiplied_alpha_fragment:H1,project_vertex:G1,dithering_fragment:W1,dithering_pars_fragment:V1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:$1,shadowmap_vertex:j1,shadowmask_pars_fragment:K1,skinbase_vertex:Z1,skinning_pars_vertex:J1,skinning_vertex:Q1,skinnormal_vertex:tx,specularmap_fragment:ex,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:cx,uv_vertex:lx,worldpos_vertex:ux,background_vert:hx,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:_x,depth_vert:gx,depth_frag:xx,distanceRGBA_vert:vx,distanceRGBA_frag:Mx,equirect_vert:yx,equirect_frag:Sx,linedashed_vert:Ex,linedashed_frag:wx,meshbasic_vert:bx,meshbasic_frag:Ax,meshlambert_vert:Tx,meshlambert_frag:Rx,meshmatcap_vert:Lx,meshmatcap_frag:Cx,meshnormal_vert:Ix,meshnormal_frag:Dx,meshphong_vert:Px,meshphong_frag:Ox,meshphysical_vert:Nx,meshphysical_frag:Ux,meshtoon_vert:Fx,meshtoon_frag:kx,points_vert:zx,points_frag:Bx,shadow_vert:Hx,shadow_frag:Gx,sprite_vert:Wx,sprite_frag:Vx},gt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},pi={basic:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:yn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:yn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:yn([gt.points,gt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:yn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:yn([gt.common,gt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:yn([gt.sprite,gt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:yn([gt.common,gt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:yn([gt.lights,gt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};pi.physical={uniforms:yn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ia={r:0,b:0,g:0},Es=new ui,qx=new $t;function Xx(n,t,e,i,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function g(v){let M=!1;const S=m(v);S===null?p(a,c):S&&S.isColor&&(p(S,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===ac)?(u===void 0&&(u=new Ot(new cn(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ar(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Es.copy(M.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qx.makeRotationFromEuler(Es)),u.material.toneMapped=le.getTransfer(S.colorSpace)!==we,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ot(new Ai(2,2),new yi({name:"BackgroundMaterial",uniforms:Ar(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=le.getTransfer(S.colorSpace)!==we,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(ia,Mp(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:_}}function Yx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,y,T,C,O){let k=!1;const R=h(C,T,y);r!==R&&(r=R,l(r.object)),k=d(x,C,T,O),k&&m(x,C,T,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(x,y,T,C),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,y,T){const C=T.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let k=O[y.id];k===void 0&&(k={},O[y.id]=k);let R=k[C];return R===void 0&&(R=f(c()),k[C]=R),R}function f(x){const y=[],T=[],C=[];for(let O=0;O<e;O++)y[O]=0,T[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:T,attributeDivisors:C,object:x,attributes:{},index:null}}function d(x,y,T,C){const O=r.attributes,k=y.attributes;let R=0;const D=T.getAttributes();for(const F in D)if(D[F].location>=0){const K=O[F];let it=k[F];if(it===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),K===void 0||K.attribute!==it||it&&K.data!==it.data)return!0;R++}return r.attributesNum!==R||r.index!==C}function m(x,y,T,C){const O={},k=y.attributes;let R=0;const D=T.getAttributes();for(const F in D)if(D[F].location>=0){let K=k[F];K===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const it={};it.attribute=K,K&&K.data&&(it.data=K.data),O[F]=it,R++}r.attributes=O,r.attributesNum=R,r.index=C}function g(){const x=r.newAttributes;for(let y=0,T=x.length;y<T;y++)x[y]=0}function _(x){p(x,0)}function p(x,y){const T=r.newAttributes,C=r.enabledAttributes,O=r.attributeDivisors;T[x]=1,C[x]===0&&(n.enableVertexAttribArray(x),C[x]=1),O[x]!==y&&(n.vertexAttribDivisor(x,y),O[x]=y)}function v(){const x=r.newAttributes,y=r.enabledAttributes;for(let T=0,C=y.length;T<C;T++)y[T]!==x[T]&&(n.disableVertexAttribArray(T),y[T]=0)}function M(x,y,T,C,O,k,R){R===!0?n.vertexAttribIPointer(x,y,T,O,k):n.vertexAttribPointer(x,y,T,C,O,k)}function S(x,y,T,C){g();const O=C.attributes,k=T.getAttributes(),R=y.defaultAttributeValues;for(const D in k){const F=k[D];if(F.location>=0){let X=O[D];if(X===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const K=X.normalized,it=X.itemSize,ft=t.get(X);if(ft===void 0)continue;const Q=ft.buffer,z=ft.type,U=ft.bytesPerElement,Y=z===n.INT||z===n.UNSIGNED_INT||X.gpuType===hu;if(X.isInterleavedBufferAttribute){const J=X.data,ut=J.stride,lt=X.offset;if(J.isInstancedInterleavedBuffer){for(let ht=0;ht<F.locationSize;ht++)p(F.location+ht,J.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<F.locationSize;ht++)_(F.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let ht=0;ht<F.locationSize;ht++)M(F.location+ht,it/F.locationSize,z,K,ut*U,(lt+it/F.locationSize*ht)*U,Y)}else{if(X.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)p(F.location+J,X.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let J=0;J<F.locationSize;J++)_(F.location+J);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let J=0;J<F.locationSize;J++)M(F.location+J,it/F.locationSize,z,K,it*U,it/F.locationSize*J*U,Y)}}else if(R!==void 0){const K=R[D];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(F.location,K);break;case 3:n.vertexAttrib3fv(F.location,K);break;case 4:n.vertexAttrib4fv(F.location,K);break;default:n.vertexAttrib1fv(F.location,K)}}}}v()}function A(){L();for(const x in i){const y=i[x];for(const T in y){const C=y[T];for(const O in C)u(C[O].object),delete C[O];delete y[T]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const y=i[x.id];for(const T in y){const C=y[T];for(const O in C)u(C[O].object),delete C[O];delete y[T]}delete i[x.id]}function E(x){for(const y in i){const T=i[y];if(T[x.id]===void 0)continue;const C=T[x.id];for(const O in C)u(C[O].object),delete C[O];delete T[x.id]}}function L(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:_,disableUnusedAttributes:v}}function $x(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];for(let g=0;g<f.length;g++)e.update(m,i,f[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==_n&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Wi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==gi&&!L)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:A,maxSamples:w}}function Kx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new zi,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!_)r?u(null):l();else{const v=r?0:i,M=v*4;let S=p.clippingState||null;c.value=S,S=u(m,f,M,d);for(let A=0;A!==M;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,m){const g=h!==null?h.length:0;let _=null;if(g!==0){if(_=c.value,m!==!0||_===null){const p=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<p)&&(_=new Float32Array(p));for(let M=0,S=d;M!==g;++M,S+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function Zx(n){let t=new WeakMap;function e(o,a){return a===a0?o.mapping=Sr:a===c0&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===a0||a===c0)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cg(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class wp extends yp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fr=4,zh=[.125,.215,.35,.446,.526,.582],Is=20,$c=new wp,Bh=new zt;let jc=null,Kc=0,Zc=0,Jc=!1;const Ls=(1+Math.sqrt(5))/2,tr=1/Ls,Hh=[new H(-Ls,tr,0),new H(Ls,tr,0),new H(-tr,0,Ls),new H(tr,0,Ls),new H(0,Ls,-tr),new H(0,Ls,tr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jc,Kc,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Ir,format:_n,colorSpace:bi,depthBuffer:!1},s=Wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=Qx(r,t,e)}return s}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,$c)}_sceneToCubeUV(t,e,i,s){const a=new rn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bh),u.toneMapping=ds,u.autoClear=!1;const d=new oi({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),m=new Ot(new cn,d);let g=!1;const _=t.background;_?_.isColor&&(d.color.copy(_),t.background=null,g=!0):(d.color.copy(Bh),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;sa(s,v*M,p>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Sr||t.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;sa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,$c)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hh[(s-r-1)%Hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),g=r/m,_=isFinite(r)?1+Math.floor(u*g):Is;_>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Is}`);const p=[];let v=0;for(let E=0;E<Is;++E){const L=E/g,N=Math.exp(-L*L/2);p.push(N),E===0?v+=N:E<_&&(v+=2*N)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const S=this._sizeLods[s],A=3*S*(s>M-fr?s-M+fr:0),w=4*(this._cubeSize-S);sa(e,A,w,3*S,2*S),c.setRenderTarget(e),c.render(h,$c)}}function Jx(n){const t=[],e=[],i=[];let s=n;const r=n-fr+1+zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-fr?c=zh[o-n+fr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,_=2,p=1,v=new Float32Array(g*m*d),M=new Float32Array(_*m*d),S=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,N=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];v.set(N,g*m*w),M.set(f,_*m*w);const x=[w,w,w,w,w,w];S.set(x,p*m*w)}const A=new vn;A.setAttribute("position",new de(v,g)),A.setAttribute("uv",new de(M,_)),A.setAttribute("faceIndex",new de(S,p)),t.push(A),s>fr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wh(n,t,e){const i=new Vi(n,t,e);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Qx(n,t,e){const i=new Float32Array(Is),s=new H(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Vh(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function qh(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function tv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===a0||c===c0,u=c===Sr||c===Er;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Gh(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Gh(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ev(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ca("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function nv(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const g=f.morphAttributes[m];for(let _=0,p=g.length;_<p;_++)t.remove(g[_])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const g=d[m];for(let _=0,p=g.length;_<p;_++)t.update(g[_],n.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,m=h.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let M=0,S=v.length;M<S;M+=3){const A=v[M+0],w=v[M+1],E=v[M+2];f.push(A,w,w,E,E,A)}}else if(m!==void 0){const v=m.array;g=m.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const A=M+0,w=M+1,E=M+2;f.push(A,w,w,E,E,A)}}else return;const _=new(dp(f)?vp:xp)(f,1);_.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,_)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function iv(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let _=0;for(let p=0;p<m;p++)_+=d[p];e.update(_,i,1)}function h(f,d,m,g){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v];for(let v=0;v<g.length;v++)e.update(p,i,g[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function rv(n,t,e){const i=new WeakMap,s=new fe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*h),L=new mp(E,A,w,h);L.type=gi,L.needsUpdate=!0;const N=S*4;for(let y=0;y<h;y++){const T=p[y],C=v[y],O=M[y],k=A*w*4*y;for(let R=0;R<T.count;R++){const D=R*N;m===!0&&(s.fromBufferAttribute(T,R),E[k+D+0]=s.x,E[k+D+1]=s.y,E[k+D+2]=s.z,E[k+D+3]=0),g===!0&&(s.fromBufferAttribute(C,R),E[k+D+4]=s.x,E[k+D+5]=s.y,E[k+D+6]=s.z,E[k+D+7]=0),_===!0&&(s.fromBufferAttribute(O,R),E[k+D+8]=s.x,E[k+D+9]=s.y,E[k+D+10]=s.z,E[k+D+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new Bt(A,w)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ov(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class bp extends gn{constructor(t,e,i,s,r,o,a,c,l,u=mr){if(u!==mr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mr&&(i=Fs),i===void 0&&u===br&&(i=wr),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ap=new gn,Xh=new bp(1,1),Tp=new mp,Rp=new q_,Lp=new Sp,Yh=[],$h=[],jh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function Or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function lc(n,t){let e=$h[t];e===void 0&&(e=new Int32Array(t),$h[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function av(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function hv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if($e(e,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),je(e,i)}}function fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if($e(e,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),je(e,i)}}function dv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if($e(e,i))return;jh.set(i),n.uniformMatrix4fv(this.addr,!1,jh),je(e,i)}}function pv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function xv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function Mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function Sv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xh.compareFunction=fp,r=Xh):r=Ap,e.setTexture2D(t||r,s)}function Ev(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rp,s)}function wv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Lp,s)}function bv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tp,s)}function Av(n){switch(n){case 5126:return av;case 35664:return cv;case 35665:return lv;case 35666:return uv;case 35674:return hv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return _v;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return vv;case 36295:return Mv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return bv}}function Tv(n,t){n.uniform1fv(this.addr,t)}function Rv(n,t){const e=Or(t,this.size,2);n.uniform2fv(this.addr,e)}function Lv(n,t){const e=Or(t,this.size,3);n.uniform3fv(this.addr,e)}function Cv(n,t){const e=Or(t,this.size,4);n.uniform4fv(this.addr,e)}function Iv(n,t){const e=Or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dv(n,t){const e=Or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pv(n,t){const e=Or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ov(n,t){n.uniform1iv(this.addr,t)}function Nv(n,t){n.uniform2iv(this.addr,t)}function Uv(n,t){n.uniform3iv(this.addr,t)}function Fv(n,t){n.uniform4iv(this.addr,t)}function kv(n,t){n.uniform1uiv(this.addr,t)}function zv(n,t){n.uniform2uiv(this.addr,t)}function Bv(n,t){n.uniform3uiv(this.addr,t)}function Hv(n,t){n.uniform4uiv(this.addr,t)}function Gv(n,t,e){const i=this.cache,s=t.length,r=lc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ap,r[o])}function Wv(n,t,e){const i=this.cache,s=t.length,r=lc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rp,r[o])}function Vv(n,t,e){const i=this.cache,s=t.length,r=lc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lp,r[o])}function qv(n,t,e){const i=this.cache,s=t.length,r=lc(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Tp,r[o])}function Xv(n){switch(n){case 5126:return Tv;case 35664:return Rv;case 35665:return Lv;case 35666:return Cv;case 35674:return Iv;case 35675:return Dv;case 35676:return Pv;case 5124:case 35670:return Ov;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Fv;case 5125:return kv;case 36294:return zv;case 36295:return Bv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return qv}}class Yv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Av(e.type)}}class $v{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xv(e.type)}}class jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function Jh(n,t){n.seq.push(t),n.map[t.id]=t}function Kv(n,t,e){const i=n.name,s=i.length;for(Qc.lastIndex=0;;){const r=Qc.exec(i),o=Qc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jh(e,l===void 0?new Yv(a,n,t):new $v(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new jv(a),Jh(e,h)),e=h}}}class Ia{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Kv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Qh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Zv=37297;let Jv=0;function Qv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function tM(n){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(n);let i;switch(t===e?i="":t===Ga&&e===Ha?i="LinearDisplayP3ToLinearSRGB":t===Ha&&e===Ga&&(i="LinearSRGBToLinearDisplayP3"),n){case bi:case cc:return[i,"LinearTransferOETF"];case sn:case xu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function tf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qv(n.getShaderSource(t),o)}else return s}function eM(n,t){const e=tM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function nM(n,t){let e;switch(t){case x_:e="Linear";break;case v_:e="Reinhard";break;case M_:e="Cineon";break;case tp:e="ACESFilmic";break;case S_:e="AgX";break;case E_:e="Neutral";break;case y_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ra=new H;function iM(){le.getLuminanceCoefficients(ra);const n=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function rM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function oM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function io(n){return n!==""}function ef(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function F0(n){return n.replace(aM,lM)}const cM=new Map;function lM(n,t){let e=Jt[t];if(e===void 0){const i=cM.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return F0(e)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(uM,hM)}function hM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function fM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function dM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Er:t="ENVMAP_TYPE_CUBE";break;case ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function mM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qd:t="ENVMAP_BLENDING_MULTIPLY";break;case __:t="ENVMAP_BLENDING_MIX";break;case g_:t="ENVMAP_BLENDING_ADD";break}return t}function _M(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function gM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=fM(e),l=dM(e),u=pM(e),h=mM(e),f=_M(e),d=sM(e),m=rM(r),g=s.createProgram();let _,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(io).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(io).join(`
`),p.length>0&&(p+=`
`)):(_=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ds?"#define TONE_MAPPING":"",e.toneMapping!==ds?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ds?nM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,eM("linearToOutputTexel",e.outputColorSpace),iM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=F0(o),o=ef(o,e),o=nf(o,e),a=F0(a),a=ef(a,e),a=nf(a,e),o=sf(o),a=sf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+_+o,S=v+p+a,A=Qh(s,s.VERTEX_SHADER,M),w=Qh(s,s.FRAGMENT_SHADER,S);s.attachShader(g,A),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(y){if(n.debug.checkShaderErrors){const T=s.getProgramInfoLog(g).trim(),C=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(w).trim();let k=!0,R=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,A,w);else{const D=tf(s,A,"vertex"),F=tf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+T+`
`+D+`
`+F)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(C===""||O==="")&&(R=!1);R&&(y.diagnostics={runnable:k,programLog:T,vertexShader:{log:C,prefix:_},fragmentShader:{log:O,prefix:p}})}s.deleteShader(A),s.deleteShader(w),L=new Ia(s,g),N=oM(s,g)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let N;this.getAttributes=function(){return N===void 0&&E(this),N};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,Zv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let xM=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new MM(t),e.set(t,i)),i}}class MM{constructor(t){this.id=xM++,this.code=t,this.usedTimes=0}}function yM(n,t,e,i,s,r,o){const a=new _p,c=new vM,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,T,C,O){const k=C.fog,R=O.geometry,D=x.isMeshStandardMaterial?C.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||D),X=F&&F.mapping===ac?F.image.height:null,K=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const it=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ft=it!==void 0?it.length:0;let Q=0;R.morphAttributes.position!==void 0&&(Q=1),R.morphAttributes.normal!==void 0&&(Q=2),R.morphAttributes.color!==void 0&&(Q=3);let z,U,Y,J;if(K){const An=pi[K];z=An.vertexShader,U=An.fragmentShader}else z=x.vertexShader,U=x.fragmentShader,c.update(x),Y=c.getVertexShaderID(x),J=c.getFragmentShaderID(x);const ut=n.getRenderTarget(),lt=O.isInstancedMesh===!0,ht=O.isBatchedMesh===!0,_t=!!x.map,xt=!!x.matcap,B=!!F,ie=!!x.aoMap,Ct=!!x.lightMap,Nt=!!x.bumpMap,It=!!x.normalMap,rt=!!x.displacementMap,ot=!!x.emissiveMap,I=!!x.metalnessMap,b=!!x.roughnessMap,G=x.anisotropy>0,tt=x.clearcoat>0,at=x.dispersion>0,nt=x.iridescence>0,Mt=x.sheen>0,dt=x.transmission>0,vt=G&&!!x.anisotropyMap,Zt=tt&&!!x.clearcoatMap,pt=tt&&!!x.clearcoatNormalMap,Tt=tt&&!!x.clearcoatRoughnessMap,qt=nt&&!!x.iridescenceMap,Xt=nt&&!!x.iridescenceThicknessMap,Lt=Mt&&!!x.sheenColorMap,ne=Mt&&!!x.sheenRoughnessMap,jt=!!x.specularMap,ve=!!x.specularColorMap,W=!!x.specularIntensityMap,wt=dt&&!!x.transmissionMap,st=dt&&!!x.thicknessMap,ct=!!x.gradientMap,St=!!x.alphaMap,bt=x.alphaTest>0,se=!!x.alphaHash,ke=!!x.extensions;let bn=ds;x.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(bn=n.toneMapping);const re={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:U,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ht,batchingColor:ht&&O._colorsTexture!==null,instancing:lt,instancingColor:lt&&O.instanceColor!==null,instancingMorph:lt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:bi,alphaToCoverage:!!x.alphaToCoverage,map:_t,matcap:xt,envMap:B,envMapMode:B&&F.mapping,envMapCubeUVHeight:X,aoMap:ie,lightMap:Ct,bumpMap:Nt,normalMap:It,displacementMap:d&&rt,emissiveMap:ot,normalMapObjectSpace:It&&x.normalMapType===T_,normalMapTangentSpace:It&&x.normalMapType===hp,metalnessMap:I,roughnessMap:b,anisotropy:G,anisotropyMap:vt,clearcoat:tt,clearcoatMap:Zt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Tt,dispersion:at,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:Xt,sheen:Mt,sheenColorMap:Lt,sheenRoughnessMap:ne,specularMap:jt,specularColorMap:ve,specularIntensityMap:W,transmission:dt,transmissionMap:wt,thicknessMap:st,gradientMap:ct,opaque:x.transparent===!1&&x.blending===pr&&x.alphaToCoverage===!1,alphaMap:St,alphaTest:bt,alphaHash:se,combine:x.combine,mapUv:_t&&_(x.map.channel),aoMapUv:ie&&_(x.aoMap.channel),lightMapUv:Ct&&_(x.lightMap.channel),bumpMapUv:Nt&&_(x.bumpMap.channel),normalMapUv:It&&_(x.normalMap.channel),displacementMapUv:rt&&_(x.displacementMap.channel),emissiveMapUv:ot&&_(x.emissiveMap.channel),metalnessMapUv:I&&_(x.metalnessMap.channel),roughnessMapUv:b&&_(x.roughnessMap.channel),anisotropyMapUv:vt&&_(x.anisotropyMap.channel),clearcoatMapUv:Zt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&_(x.sheenRoughnessMap.channel),specularMapUv:jt&&_(x.specularMap.channel),specularColorMapUv:ve&&_(x.specularColorMap.channel),specularIntensityMapUv:W&&_(x.specularIntensityMap.channel),transmissionMapUv:wt&&_(x.transmissionMap.channel),thicknessMapUv:st&&_(x.thicknessMap.channel),alphaMapUv:St&&_(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(It||G),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!R.attributes.uv&&(_t||St),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:bn,decodeVideoTexture:_t&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===we,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mi,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ke&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&x.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function v(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)y.push(T),y.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(M(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const y=g[x.type];let T;if(y){const C=pi[y];T=sg.clone(C.uniforms)}else T=x.uniforms;return T}function w(x,y){let T;for(let C=0,O=u.length;C<O;C++){const k=u[C];if(k.cacheKey===y){T=k,++T.usedTimes;break}}return T===void 0&&(T=new gM(n,y,x,r),u.push(T)),T}function E(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function L(x){c.remove(x)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:L,programs:u,dispose:N}}function SM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function EM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function of(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function af(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,m,g,_){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:g,group:_},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=_),t++,p}function a(h,f,d,m,g,_){const p=o(h,f,d,m,g,_);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,m,g,_){const p=o(h,f,d,m,g,_);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||EM),i.length>1&&i.sort(f||of),s.length>1&&s.sort(f||of)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function wM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new af,n.set(i,[o])):s>=r.length?(o=new af,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function bM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new zt};break;case"SpotLight":e={position:new H,direction:new H,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function AM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let TM=0;function RM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function LM(n){const t=new bM,e=AM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const s=new H,r=new $t,o=new $t;function a(l){let u=0,h=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,m=0,g=0,_=0,p=0,v=0,M=0,S=0,A=0,w=0,E=0;l.sort(RM);for(let N=0,x=l.length;N<x;N++){const y=l[N],T=y.color,C=y.intensity,O=y.distance,k=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=T.r*C,h+=T.g*C,f+=T.b*C;else if(y.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(y.sh.coefficients[R],C);E++}else if(y.isDirectionalLight){const R=t.get(y);if(R.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const D=y.shadow,F=e.get(y);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=y.shadow.matrix,v++}i.directional[d]=R,d++}else if(y.isSpotLight){const R=t.get(y);R.position.setFromMatrixPosition(y.matrixWorld),R.color.copy(T).multiplyScalar(C),R.distance=O,R.coneCos=Math.cos(y.angle),R.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),R.decay=y.decay,i.spot[g]=R;const D=y.shadow;if(y.map&&(i.spotLightMap[A]=y.map,A++,D.updateMatrices(y),y.castShadow&&w++),i.spotLightMatrix[g]=D.matrix,y.castShadow){const F=e.get(y);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.spotShadow[g]=F,i.spotShadowMap[g]=k,S++}g++}else if(y.isRectAreaLight){const R=t.get(y);R.color.copy(T).multiplyScalar(C),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),i.rectArea[_]=R,_++}else if(y.isPointLight){const R=t.get(y);if(R.color.copy(y.color).multiplyScalar(y.intensity),R.distance=y.distance,R.decay=y.decay,y.castShadow){const D=y.shadow,F=e.get(y);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=y.shadow.matrix,M++}i.point[m]=R,m++}else if(y.isHemisphereLight){const R=t.get(y);R.skyColor.copy(y.color).multiplyScalar(C),R.groundColor.copy(y.groundColor).multiplyScalar(C),i.hemi[p]=R,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==_||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,L.directionalLength=d,L.pointLength=m,L.spotLength=g,L.rectAreaLength=_,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=E,i.version=TM++)}function c(l,u){let h=0,f=0,d=0,m=0,g=0;const _=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),h++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),d++}else if(M.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),o.identity(),r.copy(M.matrixWorld),r.premultiply(_),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:c,state:i}}function cf(n){const t=new LM(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function CM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cf(n),t.set(s,[a])):r>=o.length?(a=new cf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class IM extends Ao{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends Ao{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`;function NM(n,t,e){let i=new To;const s=new Bt,r=new Bt,o=new fe,a=new IM({depthPacking:A_}),c=new DM,l={},u=e.maxTextureSize,h={[li]:wn,[wn]:li,[mi]:mi},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:PM,fragmentShader:OM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new vn;m.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ot(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let p=this.type;this.render=function(w,E,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const N=n.getRenderTarget(),x=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),T=n.state;T.setBlending(fs),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const C=p!==Fi&&this.type===Fi,O=p===Fi&&this.type!==Fi;for(let k=0,R=w.length;k<R;k++){const D=w[k],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const X=F.getFrameExtents();if(s.multiply(X),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,F.mapSize.y=r.y)),F.map===null||C===!0||O===!0){const it=this.type!==Fi?{minFilter:mn,magFilter:mn}:{};F.map!==null&&F.map.dispose(),F.map=new Vi(s.x,s.y,it),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const K=F.getViewportCount();for(let it=0;it<K;it++){const ft=F.getViewport(it);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),T.viewport(o),F.updateMatrices(D,it),i=F.getFrustum(),S(E,L,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===Fi&&v(F,L),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(N,x,y)};function v(w,E){const L=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,L,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,L,d,g,null)}function M(w,E,L,N){let x=null;const y=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)x=y;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const T=x.uuid,C=E.uuid;let O=l[T];O===void 0&&(O={},l[T]=O);let k=O[C];k===void 0&&(k=x.clone(),O[C]=k,E.addEventListener("dispose",A)),x=k}if(x.visible=E.visible,x.wireframe=E.wireframe,N===Fi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const T=n.properties.get(x);T.light=L}return x}function S(w,E,L,N,x){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Fi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const C=t.update(w),O=w.material;if(Array.isArray(O)){const k=C.groups;for(let R=0,D=k.length;R<D;R++){const F=k[R],X=O[F.materialIndex];if(X&&X.visible){const K=M(w,X,N,x);w.onBeforeShadow(n,w,E,L,C,K,F),n.renderBufferDirect(L,null,C,K,w,F),w.onAfterShadow(n,w,E,L,C,K,F)}}}else if(O.visible){const k=M(w,O,N,x);w.onBeforeShadow(n,w,E,L,C,k,null),n.renderBufferDirect(L,null,C,k,w,null),w.onAfterShadow(n,w,E,L,C,k,null)}}const T=w.children;for(let C=0,O=T.length;C<O;C++)S(T[C],E,L,N,x)}function A(w){w.target.removeEventListener("dispose",A);for(const L in l){const N=l[L],x=w.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}const UM={[t0]:e0,[n0]:r0,[i0]:o0,[yr]:s0,[e0]:t0,[r0]:n0,[o0]:i0,[s0]:yr};function FM(n){function t(){let W=!1;const wt=new fe;let st=null;const ct=new fe(0,0,0,0);return{setMask:function(St){st!==St&&!W&&(n.colorMask(St,St,St,St),st=St)},setLocked:function(St){W=St},setClear:function(St,bt,se,ke,bn){bn===!0&&(St*=ke,bt*=ke,se*=ke),wt.set(St,bt,se,ke),ct.equals(wt)===!1&&(n.clearColor(St,bt,se,ke),ct.copy(wt))},reset:function(){W=!1,st=null,ct.set(-1,0,0,0)}}}function e(){let W=!1,wt=!1,st=null,ct=null,St=null;return{setReversed:function(bt){wt=bt},setTest:function(bt){bt?Y(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(bt){st!==bt&&!W&&(n.depthMask(bt),st=bt)},setFunc:function(bt){if(wt&&(bt=UM[bt]),ct!==bt){switch(bt){case t0:n.depthFunc(n.NEVER);break;case e0:n.depthFunc(n.ALWAYS);break;case n0:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case i0:n.depthFunc(n.EQUAL);break;case s0:n.depthFunc(n.GEQUAL);break;case r0:n.depthFunc(n.GREATER);break;case o0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=bt}},setLocked:function(bt){W=bt},setClear:function(bt){St!==bt&&(n.clearDepth(bt),St=bt)},reset:function(){W=!1,st=null,ct=null,St=null}}}function i(){let W=!1,wt=null,st=null,ct=null,St=null,bt=null,se=null,ke=null,bn=null;return{setTest:function(re){W||(re?Y(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(re){wt!==re&&!W&&(n.stencilMask(re),wt=re)},setFunc:function(re,An,Li){(st!==re||ct!==An||St!==Li)&&(n.stencilFunc(re,An,Li),st=re,ct=An,St=Li)},setOp:function(re,An,Li){(bt!==re||se!==An||ke!==Li)&&(n.stencilOp(re,An,Li),bt=re,se=An,ke=Li)},setLocked:function(re){W=re},setClear:function(re){bn!==re&&(n.clearStencil(re),bn=re)},reset:function(){W=!1,wt=null,st=null,ct=null,St=null,bt=null,se=null,ke=null,bn=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,m=!1,g=null,_=null,p=null,v=null,M=null,S=null,A=null,w=new zt(0,0,0),E=0,L=!1,N=null,x=null,y=null,T=null,C=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,R=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=R>=1):D.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=R>=2);let F=null,X={};const K=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),ft=new fe().fromArray(K),Q=new fe().fromArray(it);function z(W,wt,st,ct){const St=new Uint8Array(4),bt=n.createTexture();n.bindTexture(W,bt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<st;se++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(wt+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return bt}const U={};U[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),r.setFunc(yr),Ct(!1),Nt(_h),Y(n.CULL_FACE),B(fs);function Y(W){l[W]!==!0&&(n.enable(W),l[W]=!0)}function J(W){l[W]!==!1&&(n.disable(W),l[W]=!1)}function ut(W,wt){return u[W]!==wt?(n.bindFramebuffer(W,wt),u[W]=wt,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=wt),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function lt(W,wt){let st=f,ct=!1;if(W){st=h.get(wt),st===void 0&&(st=[],h.set(wt,st));const St=W.textures;if(st.length!==St.length||st[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,se=St.length;bt<se;bt++)st[bt]=n.COLOR_ATTACHMENT0+bt;st.length=St.length,ct=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,ct=!0);ct&&n.drawBuffers(st)}function ht(W){return d!==W?(n.useProgram(W),d=W,!0):!1}const _t={[Cs]:n.FUNC_ADD,[Qm]:n.FUNC_SUBTRACT,[t_]:n.FUNC_REVERSE_SUBTRACT};_t[e_]=n.MIN,_t[n_]=n.MAX;const xt={[i_]:n.ZERO,[s_]:n.ONE,[r_]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[h_]:n.SRC_ALPHA_SATURATE,[l_]:n.DST_COLOR,[a_]:n.DST_ALPHA,[o_]:n.ONE_MINUS_SRC_COLOR,[Ql]:n.ONE_MINUS_SRC_ALPHA,[u_]:n.ONE_MINUS_DST_COLOR,[c_]:n.ONE_MINUS_DST_ALPHA,[f_]:n.CONSTANT_COLOR,[d_]:n.ONE_MINUS_CONSTANT_COLOR,[p_]:n.CONSTANT_ALPHA,[m_]:n.ONE_MINUS_CONSTANT_ALPHA};function B(W,wt,st,ct,St,bt,se,ke,bn,re){if(W===fs){m===!0&&(J(n.BLEND),m=!1);return}if(m===!1&&(Y(n.BLEND),m=!0),W!==Jm){if(W!==g||re!==L){if((_!==Cs||M!==Cs)&&(n.blendEquation(n.FUNC_ADD),_=Cs,M=Cs),re)switch(W){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.ONE,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}p=null,v=null,S=null,A=null,w.set(0,0,0),E=0,g=W,L=re}return}St=St||wt,bt=bt||st,se=se||ct,(wt!==_||St!==M)&&(n.blendEquationSeparate(_t[wt],_t[St]),_=wt,M=St),(st!==p||ct!==v||bt!==S||se!==A)&&(n.blendFuncSeparate(xt[st],xt[ct],xt[bt],xt[se]),p=st,v=ct,S=bt,A=se),(ke.equals(w)===!1||bn!==E)&&(n.blendColor(ke.r,ke.g,ke.b,bn),w.copy(ke),E=bn),g=W,L=!1}function ie(W,wt){W.side===mi?J(n.CULL_FACE):Y(n.CULL_FACE);let st=W.side===wn;wt&&(st=!st),Ct(st),W.blending===pr&&W.transparent===!1?B(fs):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),s.setMask(W.colorWrite);const ct=W.stencilWrite;o.setTest(ct),ct&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(W){N!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),N=W)}function Nt(W){W!==Km?(Y(n.CULL_FACE),W!==x&&(W===_h?n.cullFace(n.BACK):W===Zm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),x=W}function It(W){W!==y&&(k&&n.lineWidth(W),y=W)}function rt(W,wt,st){W?(Y(n.POLYGON_OFFSET_FILL),(T!==wt||C!==st)&&(n.polygonOffset(wt,st),T=wt,C=st)):J(n.POLYGON_OFFSET_FILL)}function ot(W){W?Y(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function I(W){W===void 0&&(W=n.TEXTURE0+O-1),F!==W&&(n.activeTexture(W),F=W)}function b(W,wt,st){st===void 0&&(F===null?st=n.TEXTURE0+O-1:st=F);let ct=X[st];ct===void 0&&(ct={type:void 0,texture:void 0},X[st]=ct),(ct.type!==W||ct.texture!==wt)&&(F!==st&&(n.activeTexture(st),F=st),n.bindTexture(W,wt||U[W]),ct.type=W,ct.texture=wt)}function G(){const W=X[F];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(W){ft.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ft.copy(W))}function Lt(W){Q.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function ne(W,wt){let st=c.get(wt);st===void 0&&(st=new WeakMap,c.set(wt,st));let ct=st.get(W);ct===void 0&&(ct=n.getUniformBlockIndex(wt,W.name),st.set(W,ct))}function jt(W,wt){const ct=c.get(wt).get(W);a.get(wt)!==ct&&(n.uniformBlockBinding(wt,ct,W.__bindingPointIndex),a.set(wt,ct))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},F=null,X={},u={},h=new WeakMap,f=[],d=null,m=!1,g=null,_=null,p=null,v=null,M=null,S=null,A=null,w=new zt(0,0,0),E=0,L=!1,N=null,x=null,y=null,T=null,C=null,ft.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Y,disable:J,bindFramebuffer:ut,drawBuffers:lt,useProgram:ht,setBlending:B,setMaterial:ie,setFlipSided:Ct,setCullFace:Nt,setLineWidth:It,setPolygonOffset:rt,setScissorTest:ot,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:at,texImage2D:Tt,texImage3D:qt,updateUBOMapping:ne,uniformBlockBinding:jt,texStorage2D:Zt,texStorage3D:pt,texSubImage2D:nt,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Xt,viewport:Lt,reset:ve}}function lf(n,t,e,i){const s=kM(i);switch(e){case rp:return n*t;case ap:return n*t;case cp:return n*t*2;case pu:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case lp:return n*t*2/s.components*s.byteLength;case _u:return n*t*2/s.components*s.byteLength;case op:return n*t*3/s.components*s.byteLength;case _n:return n*t*4/s.components*s.byteLength;case gu:return n*t*4/s.components*s.byteLength;case ba:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case h0:case d0:return Math.max(n,16)*Math.max(t,8)/4;case u0:case f0:return Math.max(n,8)*Math.max(t,8)/2;case p0:case m0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case g0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case x0:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case v0:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case M0:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case y0:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case S0:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case E0:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case w0:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case b0:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case A0:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case T0:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case R0:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case L0:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case C0:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case La:case I0:case D0:return Math.ceil(n/4)*Math.ceil(t/4)*16;case up:case P0:return Math.ceil(n/4)*Math.ceil(t/4)*8;case O0:case N0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kM(n){switch(n){case Wi:case np:return{byteLength:1,components:1};case _o:case ip:case Ir:return{byteLength:2,components:1};case fu:case du:return{byteLength:2,components:4};case Fs:case hu:case gi:return{byteLength:4,components:1};case sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,b){return d?new OffscreenCanvas(I,b):Va("canvas")}function g(I,b,G){let tt=1;const at=ot(I);if((at.width>G||at.height>G)&&(tt=G/Math.max(at.width,at.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const nt=Math.floor(tt*at.width),Mt=Math.floor(tt*at.height);h===void 0&&(h=m(nt,Mt));const dt=b?m(nt,Mt):h;return dt.width=nt,dt.height=Mt,dt.getContext("2d").drawImage(I,0,0,nt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+nt+"x"+Mt+")."),dt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function _(I){return I.generateMipmaps&&I.minFilter!==mn&&I.minFilter!==Ue}function p(I){n.generateMipmap(I)}function v(I,b,G,tt,at=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=b;if(b===n.RED&&(G===n.FLOAT&&(nt=n.R32F),G===n.HALF_FLOAT&&(nt=n.R16F),G===n.UNSIGNED_BYTE&&(nt=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.R8UI),G===n.UNSIGNED_SHORT&&(nt=n.R16UI),G===n.UNSIGNED_INT&&(nt=n.R32UI),G===n.BYTE&&(nt=n.R8I),G===n.SHORT&&(nt=n.R16I),G===n.INT&&(nt=n.R32I)),b===n.RG&&(G===n.FLOAT&&(nt=n.RG32F),G===n.HALF_FLOAT&&(nt=n.RG16F),G===n.UNSIGNED_BYTE&&(nt=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RG8UI),G===n.UNSIGNED_SHORT&&(nt=n.RG16UI),G===n.UNSIGNED_INT&&(nt=n.RG32UI),G===n.BYTE&&(nt=n.RG8I),G===n.SHORT&&(nt=n.RG16I),G===n.INT&&(nt=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),G===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),G===n.UNSIGNED_INT&&(nt=n.RGB32UI),G===n.BYTE&&(nt=n.RGB8I),G===n.SHORT&&(nt=n.RGB16I),G===n.INT&&(nt=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),G===n.UNSIGNED_INT&&(nt=n.RGBA32UI),G===n.BYTE&&(nt=n.RGBA8I),G===n.SHORT&&(nt=n.RGBA16I),G===n.INT&&(nt=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),b===n.RGBA){const Mt=at?Ba:le.getTransfer(tt);G===n.FLOAT&&(nt=n.RGBA32F),G===n.HALF_FLOAT&&(nt=n.RGBA16F),G===n.UNSIGNED_BYTE&&(nt=Mt===we?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(I,b){let G;return I?b===null||b===Fs||b===wr?G=n.DEPTH24_STENCIL8:b===gi?G=n.DEPTH32F_STENCIL8:b===_o&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fs||b===wr?G=n.DEPTH_COMPONENT24:b===gi?G=n.DEPTH_COMPONENT32F:b===_o&&(G=n.DEPTH_COMPONENT16),G}function S(I,b){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==mn&&I.minFilter!==Ue?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function A(I){const b=I.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&u.delete(b)}function w(I){const b=I.target;b.removeEventListener("dispose",w),N(b)}function E(I){const b=i.get(I);if(b.__webglInit===void 0)return;const G=I.source,tt=f.get(G);if(tt){const at=tt[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&L(I),Object.keys(tt).length===0&&f.delete(G)}i.remove(I)}function L(I){const b=i.get(I);n.deleteTexture(b.__webglTexture);const G=I.source,tt=f.get(G);delete tt[b.__cacheKey],o.memory.textures--}function N(I){const b=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let at=0;at<b.__webglFramebuffer[tt].length;at++)n.deleteFramebuffer(b.__webglFramebuffer[tt][at]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=I.textures;for(let tt=0,at=G.length;tt<at;tt++){const nt=i.get(G[tt]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(G[tt])}i.remove(I)}let x=0;function y(){x=0}function T(){const I=x;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),x+=1,I}function C(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function O(I,b){const G=i.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,I,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function k(I,b){const G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function R(I,b){const G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function D(I,b){const G=i.get(I);if(I.version>0&&G.__version!==I.version){z(G,I,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const F={[Us]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[l0]:n.MIRRORED_REPEAT},X={[mn]:n.NEAREST,[w_]:n.NEAREST_MIPMAP_NEAREST,[zo]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[wc]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},K={[R_]:n.NEVER,[O_]:n.ALWAYS,[L_]:n.LESS,[fp]:n.LEQUAL,[C_]:n.EQUAL,[P_]:n.GEQUAL,[I_]:n.GREATER,[D_]:n.NOTEQUAL};function it(I,b){if(b.type===gi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ue||b.magFilter===wc||b.magFilter===zo||b.magFilter===ri||b.minFilter===Ue||b.minFilter===wc||b.minFilter===zo||b.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,F[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,F[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,F[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,X[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mn||b.minFilter!==zo&&b.minFilter!==ri||b.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ft(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",A));const tt=b.source;let at=f.get(tt);at===void 0&&(at={},f.set(tt,at));const nt=C(b);if(nt!==I.__cacheKey){at[nt]===void 0&&(at[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),at[nt].usedTimes++;const Mt=at[I.__cacheKey];Mt!==void 0&&(at[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&L(b)),I.__cacheKey=nt,I.__webglTexture=at[nt].texture}return G}function Q(I,b,G){let tt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=n.TEXTURE_3D);const at=ft(I,b),nt=b.source;e.bindTexture(tt,I.__webglTexture,n.TEXTURE0+G);const Mt=i.get(nt);if(nt.version!==Mt.__version||at===!0){e.activeTexture(n.TEXTURE0+G);const dt=le.getPrimaries(le.workingColorSpace),vt=b.colorSpace===os?null:le.getPrimaries(b.colorSpace),Zt=b.colorSpace===os||dt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let pt=g(b.image,!1,s.maxTextureSize);pt=rt(b,pt);const Tt=r.convert(b.format,b.colorSpace),qt=r.convert(b.type);let Xt=v(b.internalFormat,Tt,qt,b.colorSpace,b.isVideoTexture);it(tt,b);let Lt;const ne=b.mipmaps,jt=b.isVideoTexture!==!0,ve=Mt.__version===void 0||at===!0,W=nt.dataReady,wt=S(b,pt);if(b.isDepthTexture)Xt=M(b.format===br,b.type),ve&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Xt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Xt,pt.width,pt.height,0,Tt,qt,null));else if(b.isDataTexture)if(ne.length>0){jt&&ve&&e.texStorage2D(n.TEXTURE_2D,wt,Xt,ne[0].width,ne[0].height);for(let st=0,ct=ne.length;st<ct;st++)Lt=ne[st],jt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Lt.width,Lt.height,Tt,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,st,Xt,Lt.width,Lt.height,0,Tt,qt,Lt.data);b.generateMipmaps=!1}else jt?(ve&&e.texStorage2D(n.TEXTURE_2D,wt,Xt,pt.width,pt.height),W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Tt,qt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,pt.width,pt.height,0,Tt,qt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Xt,ne[0].width,ne[0].height,pt.depth);for(let st=0,ct=ne.length;st<ct;st++)if(Lt=ne[st],b.format!==_n)if(Tt!==null)if(jt){if(W)if(b.layerUpdates.size>0){const St=lf(Lt.width,Lt.height,b.format,b.type);for(const bt of b.layerUpdates){const se=Lt.data.subarray(bt*St/Lt.data.BYTES_PER_ELEMENT,(bt+1)*St/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,bt,Lt.width,Lt.height,1,Tt,se,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Lt.width,Lt.height,pt.depth,Tt,Lt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Xt,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Lt.width,Lt.height,pt.depth,Tt,qt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Xt,Lt.width,Lt.height,pt.depth,0,Tt,qt,Lt.data)}else{jt&&ve&&e.texStorage2D(n.TEXTURE_2D,wt,Xt,ne[0].width,ne[0].height);for(let st=0,ct=ne.length;st<ct;st++)Lt=ne[st],b.format!==_n?Tt!==null?jt?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Lt.width,Lt.height,Tt,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Lt.width,Lt.height,Tt,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,st,Xt,Lt.width,Lt.height,0,Tt,qt,Lt.data)}else if(b.isDataArrayTexture)if(jt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Xt,pt.width,pt.height,pt.depth),W)if(b.layerUpdates.size>0){const st=lf(pt.width,pt.height,b.format,b.type);for(const ct of b.layerUpdates){const St=pt.data.subarray(ct*st/pt.data.BYTES_PER_ELEMENT,(ct+1)*st/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Tt,qt,St)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Tt,qt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,pt.width,pt.height,pt.depth,0,Tt,qt,pt.data);else if(b.isData3DTexture)jt?(ve&&e.texStorage3D(n.TEXTURE_3D,wt,Xt,pt.width,pt.height,pt.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Tt,qt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,pt.width,pt.height,pt.depth,0,Tt,qt,pt.data);else if(b.isFramebufferTexture){if(ve)if(jt)e.texStorage2D(n.TEXTURE_2D,wt,Xt,pt.width,pt.height);else{let st=pt.width,ct=pt.height;for(let St=0;St<wt;St++)e.texImage2D(n.TEXTURE_2D,St,Xt,st,ct,0,Tt,qt,null),st>>=1,ct>>=1}}else if(ne.length>0){if(jt&&ve){const st=ot(ne[0]);e.texStorage2D(n.TEXTURE_2D,wt,Xt,st.width,st.height)}for(let st=0,ct=ne.length;st<ct;st++)Lt=ne[st],jt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Tt,qt,Lt):e.texImage2D(n.TEXTURE_2D,st,Xt,Tt,qt,Lt);b.generateMipmaps=!1}else if(jt){if(ve){const st=ot(pt);e.texStorage2D(n.TEXTURE_2D,wt,Xt,st.width,st.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,qt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Xt,Tt,qt,pt);_(b)&&p(tt),Mt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function z(I,b,G){if(b.image.length!==6)return;const tt=ft(I,b),at=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);const nt=i.get(at);if(at.version!==nt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const Mt=le.getPrimaries(le.workingColorSpace),dt=b.colorSpace===os?null:le.getPrimaries(b.colorSpace),vt=b.colorSpace===os||Mt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let ct=0;ct<6;ct++)!Zt&&!pt?Tt[ct]=g(b.image[ct],!0,s.maxCubemapSize):Tt[ct]=pt?b.image[ct].image:b.image[ct],Tt[ct]=rt(b,Tt[ct]);const qt=Tt[0],Xt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),ne=v(b.internalFormat,Xt,Lt,b.colorSpace),jt=b.isVideoTexture!==!0,ve=nt.__version===void 0||tt===!0,W=at.dataReady;let wt=S(b,qt);it(n.TEXTURE_CUBE_MAP,b);let st;if(Zt){jt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ne,qt.width,qt.height);for(let ct=0;ct<6;ct++){st=Tt[ct].mipmaps;for(let St=0;St<st.length;St++){const bt=st[St];b.format!==_n?Xt!==null?jt?W&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,0,0,bt.width,bt.height,Xt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,ne,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,0,0,bt.width,bt.height,Xt,Lt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,ne,bt.width,bt.height,0,Xt,Lt,bt.data)}}}else{if(st=b.mipmaps,jt&&ve){st.length>0&&wt++;const ct=ot(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ne,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){jt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt[ct].width,Tt[ct].height,Xt,Lt,Tt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ne,Tt[ct].width,Tt[ct].height,0,Xt,Lt,Tt[ct].data);for(let St=0;St<st.length;St++){const se=st[St].image[ct].image;jt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,0,0,se.width,se.height,Xt,Lt,se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,ne,se.width,se.height,0,Xt,Lt,se.data)}}else{jt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Xt,Lt,Tt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ne,Xt,Lt,Tt[ct]);for(let St=0;St<st.length;St++){const bt=st[St];jt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,0,0,Xt,Lt,bt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,ne,Xt,Lt,bt.image[ct])}}}_(b)&&p(n.TEXTURE_CUBE_MAP),nt.__version=at.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function U(I,b,G,tt,at,nt){const Mt=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),vt=v(G.internalFormat,Mt,dt,G.colorSpace);if(!i.get(b).__hasExternalTextures){const pt=Math.max(1,b.width>>nt),Tt=Math.max(1,b.height>>nt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,vt,pt,Tt,b.depth,0,Mt,dt,null):e.texImage2D(at,nt,vt,pt,Tt,0,Mt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,at,i.get(G).__webglTexture,0,Ct(b)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,at,i.get(G).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(I,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){const tt=b.depthTexture,at=tt&&tt.isDepthTexture?tt.type:null,nt=M(b.stencilBuffer,at),Mt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=Ct(b);Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,nt,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,nt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,nt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,I)}else{const tt=b.textures;for(let at=0;at<tt.length;at++){const nt=tt[at],Mt=r.convert(nt.format,nt.colorSpace),dt=r.convert(nt.type),vt=v(nt.internalFormat,Mt,dt,nt.colorSpace),Zt=Ct(b);G&&Nt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,vt,b.width,b.height):Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,vt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,vt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function J(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const tt=i.get(b.depthTexture).__webglTexture,at=Ct(b);if(b.depthTexture.format===mr)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(b.depthTexture.format===br)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ut(I){const b=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const tt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",at)};tt.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=tt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");J(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=n.createRenderbuffer(),Y(b.__webglDepthbuffer[tt],I,!1);else{const at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Y(b.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(I,b,G){const tt=i.get(I);b!==void 0&&U(tt.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ut(I)}function ht(I){const b=I.texture,G=i.get(I),tt=i.get(b);I.addEventListener("dispose",w);const at=I.textures,nt=I.isWebGLCubeRenderTarget===!0,Mt=at.length>1;if(Mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=b.version,o.memory.textures++),nt){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)G.__webglFramebuffer[dt][vt]=n.createFramebuffer()}else G.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)G.__webglFramebuffer[dt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let dt=0,vt=at.length;dt<vt;dt++){const Zt=i.get(at[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Nt(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<at.length;dt++){const vt=at[dt];G.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const Zt=r.convert(vt.format,vt.colorSpace),pt=r.convert(vt.type),Tt=v(vt.internalFormat,Zt,pt,vt.colorSpace,I.isXRRenderTarget===!0),qt=Ct(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Tt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),it(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)U(G.__webglFramebuffer[dt][vt],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else U(G.__webglFramebuffer[dt],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);_(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let dt=0,vt=at.length;dt<vt;dt++){const Zt=at[dt],pt=i.get(Zt);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),it(n.TEXTURE_2D,Zt),U(G.__webglFramebuffer,I,Zt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),_(Zt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(dt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),it(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)U(G.__webglFramebuffer[vt],I,b,n.COLOR_ATTACHMENT0,dt,vt);else U(G.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,dt,0);_(b)&&p(dt),e.unbindTexture()}I.depthBuffer&&ut(I)}function _t(I){const b=I.textures;for(let G=0,tt=b.length;G<tt;G++){const at=b[G];if(_(at)){const nt=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Mt=i.get(at).__webglTexture;e.bindTexture(nt,Mt),p(nt),e.unbindTexture()}}}const xt=[],B=[];function ie(I){if(I.samples>0){if(Nt(I)===!1){const b=I.textures,G=I.width,tt=I.height;let at=n.COLOR_BUFFER_BIT;const nt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(I),dt=b.length>1;if(dt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const Zt=i.get(b[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,G,tt,0,0,G,tt,at,n.NEAREST),c===!0&&(xt.length=0,B.length=0,xt.push(n.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(nt),B.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);const Zt=i.get(b[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ct(I){return Math.min(s.maxSamples,I.samples)}function Nt(I){const b=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(I){const b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function rt(I,b){const G=I.colorSpace,tt=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==bi&&G!==os&&(le.getTransfer(G)===we?(tt!==_n||at!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=T,this.resetTextureUnits=y,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=R,this.setTextureCube=D,this.rebindTextures=lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=U,this.useMultisampledRTT=Nt}function BM(n,t){function e(i,s=os){let r;const o=le.getTransfer(s);if(i===Wi)return n.UNSIGNED_BYTE;if(i===fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===du)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.BYTE;if(i===ip)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===hu)return n.INT;if(i===Fs)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Ir)return n.HALF_FLOAT;if(i===rp)return n.ALPHA;if(i===op)return n.RGB;if(i===_n)return n.RGBA;if(i===ap)return n.LUMINANCE;if(i===cp)return n.LUMINANCE_ALPHA;if(i===mr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===pu)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===lp)return n.RG;if(i===_u)return n.RG_INTEGER;if(i===gu)return n.RGBA_INTEGER;if(i===ba||i===Aa||i===Ta||i===Ra)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===u0||i===h0||i===f0||i===d0)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===u0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===h0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===f0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===d0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===p0||i===m0||i===_0)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===p0||i===m0)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===g0||i===x0||i===v0||i===M0||i===y0||i===S0||i===E0||i===w0||i===b0||i===A0||i===T0||i===R0||i===L0||i===C0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===g0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===x0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===v0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===M0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===y0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===S0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===E0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===w0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===b0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===A0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===T0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===R0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===L0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===C0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===I0||i===D0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===La)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===I0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===D0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===P0||i===O0||i===N0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===La)return r.COMPRESSED_RED_RGTC1_EXT;if(i===P0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===O0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===N0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class HM extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ge extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,i),p=this._getHandJoint(l,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ge;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new gn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yi({vertexShader:WM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XM extends Dr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const g=new qM,_=e.getContextAttributes();let p=null,v=null;const M=[],S=[],A=new Bt;let w=null;const E=new rn;E.layers.enable(1),E.viewport=new fe;const L=new rn;L.layers.enable(2),L.viewport=new fe;const N=[E,L],x=new HM;x.layers.enable(1),x.layers.enable(2);let y=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let U=M[z];return U===void 0&&(U=new tl,M[z]=U),U.getTargetRaySpace()},this.getControllerGrip=function(z){let U=M[z];return U===void 0&&(U=new tl,M[z]=U),U.getGripSpace()},this.getHand=function(z){let U=M[z];return U===void 0&&(U=new tl,M[z]=U),U.getHandSpace()};function C(z){const U=S.indexOf(z.inputSource);if(U===-1)return;const Y=M[U];Y!==void 0&&(Y.update(z.inputSource,z.frame,l||o),Y.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let z=0;z<M.length;z++){const U=S[z];U!==null&&(S[z]=null,M[z].disconnect(U))}y=null,T=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,v=null,Q.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const U={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Vi(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let U=null,Y=null,J=null;_.depth&&(J=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=_.stencil?br:mr,Y=_.stencil?wr:Fs);const ut={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Vi(f.textureWidth,f.textureHeight,{format:_n,type:Wi,depthTexture:new bp(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(z){for(let U=0;U<z.removed.length;U++){const Y=z.removed[U],J=S.indexOf(Y);J>=0&&(S[J]=null,M[J].disconnect(Y))}for(let U=0;U<z.added.length;U++){const Y=z.added[U];let J=S.indexOf(Y);if(J===-1){for(let lt=0;lt<M.length;lt++)if(lt>=S.length){S.push(Y),J=lt;break}else if(S[lt]===null){S[lt]=Y,J=lt;break}if(J===-1)break}const ut=M[J];ut&&ut.connect(Y)}}const R=new H,D=new H;function F(z,U,Y){R.setFromMatrixPosition(U.matrixWorld),D.setFromMatrixPosition(Y.matrixWorld);const J=R.distanceTo(D),ut=U.projectionMatrix.elements,lt=Y.projectionMatrix.elements,ht=ut[14]/(ut[10]-1),_t=ut[14]/(ut[10]+1),xt=(ut[9]+1)/ut[5],B=(ut[9]-1)/ut[5],ie=(ut[8]-1)/ut[0],Ct=(lt[8]+1)/lt[0],Nt=ht*ie,It=ht*Ct,rt=J/(-ie+Ct),ot=rt*-ie;if(U.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(rt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ut[10]===-1)z.projectionMatrix.copy(U.projectionMatrix),z.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const I=ht+rt,b=_t+rt,G=Nt-ot,tt=It+(J-ot),at=xt*_t/b*I,nt=B*_t/b*I;z.projectionMatrix.makePerspective(G,tt,at,nt,I,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function X(z,U){U===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(U.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let U=z.near,Y=z.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),x.near=L.near=E.near=U,x.far=L.far=E.far=Y,(y!==x.near||T!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,T=x.far);const J=z.parent,ut=x.cameras;X(x,J);for(let lt=0;lt<ut.length;lt++)X(ut[lt],J);ut.length===2?F(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),K(z,x,J)};function K(z,U,Y){Y===null?z.matrix.copy(U.matrixWorld):(z.matrix.copy(Y.matrixWorld),z.matrix.invert(),z.matrix.multiply(U.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(U.projectionMatrix),z.projectionMatrixInverse.copy(U.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=U0*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let it=null;function ft(z,U){if(u=U.getViewerPose(l||o),m=U,u!==null){const Y=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let J=!1;Y.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let lt=0;lt<Y.length;lt++){const ht=Y[lt];let _t=null;if(d!==null)_t=d.getViewport(ht);else{const B=h.getViewSubImage(f,ht);_t=B.viewport,lt===0&&(t.setRenderTargetTextures(v,B.colorTexture,f.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(v))}let xt=N[lt];xt===void 0&&(xt=new rn,xt.layers.enable(lt),xt.viewport=new fe,N[lt]=xt),xt.matrix.fromArray(ht.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ht.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(_t.x,_t.y,_t.width,_t.height),lt===0&&(x.matrix.copy(xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),J===!0&&x.cameras.push(xt)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const lt=h.getDepthInformation(Y[0]);lt&&lt.isValid&&lt.texture&&g.init(t,lt,s.renderState)}}for(let Y=0;Y<M.length;Y++){const J=S[Y],ut=M[Y];J!==null&&ut!==void 0&&ut.update(J,U,l||o)}it&&it(z,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),m=null}const Q=new Ep;Q.setAnimationLoop(ft),this.setAnimationLoop=function(z){it=z},this.dispose=function(){}}}const ws=new ui,YM=new $t;function $M(n,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,Mp(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,v,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(_,p):p.isMeshToonMaterial?(r(_,p),h(_,p)):p.isMeshPhongMaterial?(r(_,p),u(_,p)):p.isMeshStandardMaterial?(r(_,p),f(_,p),p.isMeshPhysicalMaterial&&d(_,p,S)):p.isMeshMatcapMaterial?(r(_,p),m(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),g(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?c(_,p,v,M):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===wn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===wn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,S=v.envMapRotation;M&&(_.envMap.value=M,ws.copy(S),ws.x*=-1,ws.y*=-1,ws.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),_.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(ws)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,v,M){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*v,_.scale.value=M*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,v){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const v=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const S=M.program;i.uniformBlockBinding(v,S)}function l(v,M){let S=s[v.id];S===void 0&&(m(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",_));const A=M.program;i.updateUBOMapping(v,A);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function u(v){const M=h();v.__bindingPointIndex=M;const S=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,E=S.length;w<E;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,x=L.length;N<x;N++){const y=L[N];if(d(y,w,N,A)===!0){const T=y.__offset,C=Array.isArray(y.value)?y.value:[y.value];let O=0;for(let k=0;k<C.length;k++){const R=C[k],D=g(R);typeof R=="number"||typeof R=="boolean"?(y.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,T+O,y.__data)):R.isMatrix3?(y.__data[0]=R.elements[0],y.__data[1]=R.elements[1],y.__data[2]=R.elements[2],y.__data[3]=0,y.__data[4]=R.elements[3],y.__data[5]=R.elements[4],y.__data[6]=R.elements[5],y.__data[7]=0,y.__data[8]=R.elements[6],y.__data[9]=R.elements[7],y.__data[10]=R.elements[8],y.__data[11]=0):(R.toArray(y.__data,O),O+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,M,S,A){const w=v.value,E=M+"_"+S;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const L=A[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(v){const M=v.uniforms;let S=0;const A=16;for(let E=0,L=M.length;E<L;E++){const N=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,y=N.length;x<y;x++){const T=N[x],C=Array.isArray(T.value)?T.value:[T.value];for(let O=0,k=C.length;O<k;O++){const R=C[O],D=g(R),F=S%A,X=F%D.boundary,K=F+X;S+=X,K!==0&&A-K<D.storage&&(S+=A-K),T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,S+=D.storage}}}const w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){const M=v.target;M.removeEventListener("dispose",_);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class KM{constructor(t={}){const{canvas:e=U_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),m=new Int32Array(4);let g=null,_=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ds,this.toneMappingExposure=1;const M=this;let S=!1,A=0,w=0,E=null,L=-1,N=null;const x=new fe,y=new fe;let T=null;const C=new zt(0);let O=0,k=e.width,R=e.height,D=1,F=null,X=null;const K=new fe(0,0,k,R),it=new fe(0,0,k,R);let ft=!1;const Q=new To;let z=!1,U=!1;const Y=new $t,J=new $t,ut=new H,lt=new fe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function xt(){return E===null?D:1}let B=i;function ie(P,V){return e.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),B===null){const V="webgl2";if(B=ie(V,P),B===null)throw ie(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ct,Nt,It,rt,ot,I,b,G,tt,at,nt,Mt,dt,vt,Zt,pt,Tt,qt,Xt,Lt,ne,jt,ve,W;function wt(){Ct=new ev(B),Ct.init(),jt=new BM(B,Ct),Nt=new jx(B,Ct,t,jt),It=new FM(B),Nt.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),rt=new sv(B),ot=new SM,I=new zM(B,Ct,It,ot,Nt,jt,rt),b=new Zx(M),G=new tv(M),tt=new hg(B),ve=new Yx(B,tt),at=new nv(B,tt,rt,ve),nt=new ov(B,at,tt,rt),Xt=new rv(B,Nt,I),pt=new Kx(ot),Mt=new yM(M,b,G,Ct,Nt,ve,pt),dt=new $M(M,ot),vt=new wM,Zt=new CM(Ct),qt=new Xx(M,b,G,It,nt,f,c),Tt=new NM(M,nt,Nt),W=new jM(B,rt,Nt,It),Lt=new $x(B,Ct,rt),ne=new iv(B,Ct,rt),rt.programs=Mt.programs,M.capabilities=Nt,M.extensions=Ct,M.properties=ot,M.renderLists=vt,M.shadowMap=Tt,M.state=It,M.info=rt}wt();const st=new XM(M,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=Ct.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ct.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(k,R,!1))},this.getSize=function(P){return P.set(k,R)},this.setSize=function(P,V,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,R=V,e.width=Math.floor(P*D),e.height=Math.floor(V*D),$===!0&&(e.style.width=P+"px",e.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(k*D,R*D).floor()},this.setDrawingBufferSize=function(P,V,$){k=P,R=V,D=$,e.width=Math.floor(P*$),e.height=Math.floor(V*$),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(x)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,V,$,j){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,V,$,j),It.viewport(x.copy(K).multiplyScalar(D).round())},this.getScissor=function(P){return P.copy(it)},this.setScissor=function(P,V,$,j){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,V,$,j),It.scissor(y.copy(it).multiplyScalar(D).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(P){It.setScissorTest(ft=P)},this.setOpaqueSort=function(P){F=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(P=!0,V=!0,$=!0){let j=0;if(P){let q=!1;if(E!==null){const mt=E.texture.format;q=mt===gu||mt===_u||mt===mu}if(q){const mt=E.texture.type,Et=mt===Wi||mt===Fs||mt===_o||mt===wr||mt===fu||mt===du,Dt=qt.getClearColor(),Pt=qt.getClearAlpha(),Wt=Dt.r,Vt=Dt.g,Ut=Dt.b;Et?(d[0]=Wt,d[1]=Vt,d[2]=Ut,d[3]=Pt,B.clearBufferuiv(B.COLOR,0,d)):(m[0]=Wt,m[1]=Vt,m[2]=Ut,m[3]=Pt,B.clearBufferiv(B.COLOR,0,m))}else j|=B.COLOR_BUFFER_BIT}V&&(j|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),Zt.dispose(),ot.dispose(),b.dispose(),G.dispose(),nt.dispose(),ve.dispose(),W.dispose(),Mt.dispose(),st.dispose(),st.removeEventListener("sessionstart",ch),st.removeEventListener("sessionend",lh),xs.stop()};function ct(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=rt.autoReset,V=Tt.enabled,$=Tt.autoUpdate,j=Tt.needsUpdate,q=Tt.type;wt(),rt.autoReset=P,Tt.enabled=V,Tt.autoUpdate=$,Tt.needsUpdate=j,Tt.type=q}function bt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function se(P){const V=P.target;V.removeEventListener("dispose",se),ke(V)}function ke(P){bn(P),ot.remove(P)}function bn(P){const V=ot.get(P).programs;V!==void 0&&(V.forEach(function($){Mt.releaseProgram($)}),P.isShaderMaterial&&Mt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,$,j,q,mt){V===null&&(V=ht);const Et=q.isMesh&&q.matrixWorld.determinant()<0,Dt=Xm(P,V,$,j,q);It.setMaterial(j,Et);let Pt=$.index,Wt=1;if(j.wireframe===!0){if(Pt=at.getWireframeAttribute($),Pt===void 0)return;Wt=2}const Vt=$.drawRange,Ut=$.attributes.position;let pe=Vt.start*Wt,Se=(Vt.start+Vt.count)*Wt;mt!==null&&(pe=Math.max(pe,mt.start*Wt),Se=Math.min(Se,(mt.start+mt.count)*Wt)),Pt!==null?(pe=Math.max(pe,0),Se=Math.min(Se,Pt.count)):Ut!=null&&(pe=Math.max(pe,0),Se=Math.min(Se,Ut.count));const Ie=Se-pe;if(Ie<0||Ie===1/0)return;ve.setup(q,j,Dt,$,Pt);let Dn,ae=Lt;if(Pt!==null&&(Dn=tt.get(Pt),ae=ne,ae.setIndex(Dn)),q.isMesh)j.wireframe===!0?(It.setLineWidth(j.wireframeLinewidth*xt()),ae.setMode(B.LINES)):ae.setMode(B.TRIANGLES);else if(q.isLine){let Ft=j.linewidth;Ft===void 0&&(Ft=1),It.setLineWidth(Ft*xt()),q.isLineSegments?ae.setMode(B.LINES):q.isLineLoop?ae.setMode(B.LINE_LOOP):ae.setMode(B.LINE_STRIP)}else q.isPoints?ae.setMode(B.POINTS):q.isSprite&&ae.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ae.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))ae.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ft=q._multiDrawStarts,tn=q._multiDrawCounts,ce=q._multiDrawCount,jn=Pt?tt.get(Pt).bytesPerElement:1,Bs=ot.get(j).currentProgram.getUniforms();for(let Pn=0;Pn<ce;Pn++)Bs.setValue(B,"_gl_DrawID",Pn),ae.render(Ft[Pn]/jn,tn[Pn])}else if(q.isInstancedMesh)ae.renderInstances(pe,Ie,q.count);else if($.isInstancedBufferGeometry){const Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,tn=Math.min($.instanceCount,Ft);ae.renderInstances(pe,Ie,tn)}else ae.render(pe,Ie)};function re(P,V,$){P.transparent===!0&&P.side===mi&&P.forceSinglePass===!1?(P.side=wn,P.needsUpdate=!0,ko(P,V,$),P.side=li,P.needsUpdate=!0,ko(P,V,$),P.side=mi):ko(P,V,$)}this.compile=function(P,V,$=null){$===null&&($=P),_=Zt.get($),_.init(V),v.push(_),$.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),P!==$&&P.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const j=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const mt=q.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Dt=mt[Et];re(Dt,$,q),j.add(Dt)}else re(mt,$,q),j.add(mt)}),v.pop(),_=null,j},this.compileAsync=function(P,V,$=null){const j=this.compile(P,V,$);return new Promise(q=>{function mt(){if(j.forEach(function(Et){ot.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){q(P);return}setTimeout(mt,10)}Ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let An=null;function Li(P){An&&An(P)}function ch(){xs.stop()}function lh(){xs.start()}const xs=new Ep;xs.setAnimationLoop(Li),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(P){An=P,st.setAnimationLoop(P),P===null?xs.stop():xs.start()},st.addEventListener("sessionstart",ch),st.addEventListener("sessionend",lh),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(V),V=st.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,V,E),_=Zt.get(P,v.length),_.init(V),v.push(_),J.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(J),U=this.localClippingEnabled,z=pt.init(this.clippingPlanes,U),g=vt.get(P,p.length),g.init(),p.push(g),st.enabled===!0&&st.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&Mc(mt,V,-1/0,M.sortObjects)}Mc(P,V,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(F,X),_t=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,_t&&qt.addToRenderList(g,P),this.info.render.frame++,z===!0&&pt.beginShadows();const $=_.state.shadowsArray;Tt.render($,P,V),z===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,q=g.transmissive;if(_.setupLights(),V.isArrayCamera){const mt=V.cameras;if(q.length>0)for(let Et=0,Dt=mt.length;Et<Dt;Et++){const Pt=mt[Et];hh(j,q,P,Pt)}_t&&qt.render(P);for(let Et=0,Dt=mt.length;Et<Dt;Et++){const Pt=mt[Et];uh(g,P,Pt,Pt.viewport)}}else q.length>0&&hh(j,q,P,V),_t&&qt.render(P),uh(g,P,V);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(M,P,V),ve.resetDefaultState(),L=-1,N=null,v.pop(),v.length>0?(_=v[v.length-1],z===!0&&pt.setGlobalState(M.clippingPlanes,_.state.camera)):_=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Mc(P,V,$,j){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){j&&lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(J);const Et=nt.update(P),Dt=P.material;Dt.visible&&g.push(P,Et,Dt,$,lt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const Et=nt.update(P),Dt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),lt.copy(P.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),lt.copy(Et.boundingSphere.center)),lt.applyMatrix4(P.matrixWorld).applyMatrix4(J)),Array.isArray(Dt)){const Pt=Et.groups;for(let Wt=0,Vt=Pt.length;Wt<Vt;Wt++){const Ut=Pt[Wt],pe=Dt[Ut.materialIndex];pe&&pe.visible&&g.push(P,Et,pe,$,lt.z,Ut)}}else Dt.visible&&g.push(P,Et,Dt,$,lt.z,null)}}const mt=P.children;for(let Et=0,Dt=mt.length;Et<Dt;Et++)Mc(mt[Et],V,$,j)}function uh(P,V,$,j){const q=P.opaque,mt=P.transmissive,Et=P.transparent;_.setupLightsView($),z===!0&&pt.setGlobalState(M.clippingPlanes,$),j&&It.viewport(x.copy(j)),q.length>0&&Fo(q,V,$),mt.length>0&&Fo(mt,V,$),Et.length>0&&Fo(Et,V,$),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function hh(P,V,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new Vi(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?Ir:Wi,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const mt=_.state.transmissionRenderTarget[j.id],Et=j.viewport||x;mt.setSize(Et.z,Et.w);const Dt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(C),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),_t&&qt.render($);const Pt=M.toneMapping;M.toneMapping=ds;const Wt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),z===!0&&pt.setGlobalState(M.clippingPlanes,j),Fo(P,$,j),I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ut=0,pe=V.length;Ut<pe;Ut++){const Se=V[Ut],Ie=Se.object,Dn=Se.geometry,ae=Se.material,Ft=Se.group;if(ae.side===mi&&Ie.layers.test(j.layers)){const tn=ae.side;ae.side=wn,ae.needsUpdate=!0,fh(Ie,$,j,Dn,ae,Ft),ae.side=tn,ae.needsUpdate=!0,Vt=!0}}Vt===!0&&(I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt))}M.setRenderTarget(Dt),M.setClearColor(C,O),Wt!==void 0&&(j.viewport=Wt),M.toneMapping=Pt}function Fo(P,V,$){const j=V.isScene===!0?V.overrideMaterial:null;for(let q=0,mt=P.length;q<mt;q++){const Et=P[q],Dt=Et.object,Pt=Et.geometry,Wt=j===null?Et.material:j,Vt=Et.group;Dt.layers.test($.layers)&&fh(Dt,V,$,Pt,Wt,Vt)}}function fh(P,V,$,j,q,mt){P.onBeforeRender(M,V,$,j,q,mt),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(M,V,$,j,P,mt),q.transparent===!0&&q.side===mi&&q.forceSinglePass===!1?(q.side=wn,q.needsUpdate=!0,M.renderBufferDirect($,V,j,q,P,mt),q.side=li,q.needsUpdate=!0,M.renderBufferDirect($,V,j,q,P,mt),q.side=mi):M.renderBufferDirect($,V,j,q,P,mt),P.onAfterRender(M,V,$,j,q,mt)}function ko(P,V,$){V.isScene!==!0&&(V=ht);const j=ot.get(P),q=_.state.lights,mt=_.state.shadowsArray,Et=q.state.version,Dt=Mt.getParameters(P,q.state,mt,V,$),Pt=Mt.getProgramCacheKey(Dt);let Wt=j.programs;j.environment=P.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(P.isMeshStandardMaterial?G:b).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Wt===void 0&&(P.addEventListener("dispose",se),Wt=new Map,j.programs=Wt);let Vt=Wt.get(Pt);if(Vt!==void 0){if(j.currentProgram===Vt&&j.lightsStateVersion===Et)return ph(P,Dt),Vt}else Dt.uniforms=Mt.getUniforms(P),P.onBeforeCompile(Dt,M),Vt=Mt.acquireProgram(Dt,Pt),Wt.set(Pt,Vt),j.uniforms=Dt.uniforms;const Ut=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ut.clippingPlanes=pt.uniform),ph(P,Dt),j.needsLights=$m(P),j.lightsStateVersion=Et,j.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.directionalShadowMap.value=q.state.directionalShadowMap,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotShadowMap.value=q.state.spotShadowMap,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMap.value=q.state.pointShadowMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Vt,j.uniformsList=null,Vt}function dh(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Ia.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function ph(P,V){const $=ot.get(P);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Xm(P,V,$,j,q){V.isScene!==!0&&(V=ht),I.resetTextureUnits();const mt=V.fog,Et=j.isMeshStandardMaterial?V.environment:null,Dt=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:bi,Pt=(j.isMeshStandardMaterial?G:b).get(j.envMap||Et),Wt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ut=!!$.morphAttributes.position,pe=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color;let Ie=ds;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ie=M.toneMapping);const Dn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ae=Dn!==void 0?Dn.length:0,Ft=ot.get(j),tn=_.state.lights;if(z===!0&&(U===!0||P!==N)){const Bn=P===N&&j.id===L;pt.setState(j,P,Bn)}let ce=!1;j.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==tn.state.version||Ft.outputColorSpace!==Dt||q.isBatchedMesh&&Ft.batching===!1||!q.isBatchedMesh&&Ft.batching===!0||q.isBatchedMesh&&Ft.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ft.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ft.instancing===!1||!q.isInstancedMesh&&Ft.instancing===!0||q.isSkinnedMesh&&Ft.skinning===!1||!q.isSkinnedMesh&&Ft.skinning===!0||q.isInstancedMesh&&Ft.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ft.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ft.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ft.instancingMorph===!1&&q.morphTexture!==null||Ft.envMap!==Pt||j.fog===!0&&Ft.fog!==mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==pt.numPlanes||Ft.numIntersection!==pt.numIntersection)||Ft.vertexAlphas!==Wt||Ft.vertexTangents!==Vt||Ft.morphTargets!==Ut||Ft.morphNormals!==pe||Ft.morphColors!==Se||Ft.toneMapping!==Ie||Ft.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Ft.__version=j.version);let jn=Ft.currentProgram;ce===!0&&(jn=ko(j,V,q));let Bs=!1,Pn=!1,yc=!1;const Oe=jn.getUniforms(),Yi=Ft.uniforms;if(It.useProgram(jn.program)&&(Bs=!0,Pn=!0,yc=!0),j.id!==L&&(L=j.id,Pn=!0),Bs||N!==P){Nt.reverseDepthBuffer?(Y.copy(P.projectionMatrix),k_(Y),z_(Y),Oe.setValue(B,"projectionMatrix",Y)):Oe.setValue(B,"projectionMatrix",P.projectionMatrix),Oe.setValue(B,"viewMatrix",P.matrixWorldInverse);const Bn=Oe.map.cameraPosition;Bn!==void 0&&Bn.setValue(B,ut.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Oe.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Oe.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),N!==P&&(N=P,Pn=!0,yc=!0)}if(q.isSkinnedMesh){Oe.setOptional(B,q,"bindMatrix"),Oe.setOptional(B,q,"bindMatrixInverse");const Bn=q.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Oe.setValue(B,"boneTexture",Bn.boneTexture,I))}q.isBatchedMesh&&(Oe.setOptional(B,q,"batchingTexture"),Oe.setValue(B,"batchingTexture",q._matricesTexture,I),Oe.setOptional(B,q,"batchingIdTexture"),Oe.setValue(B,"batchingIdTexture",q._indirectTexture,I),Oe.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Oe.setValue(B,"batchingColorTexture",q._colorsTexture,I));const Sc=$.morphAttributes;if((Sc.position!==void 0||Sc.normal!==void 0||Sc.color!==void 0)&&Xt.update(q,$,jn),(Pn||Ft.receiveShadow!==q.receiveShadow)&&(Ft.receiveShadow=q.receiveShadow,Oe.setValue(B,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yi.envMap.value=Pt,Yi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Yi.envMapIntensity.value=V.environmentIntensity),Pn&&(Oe.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&Ym(Yi,yc),mt&&j.fog===!0&&dt.refreshFogUniforms(Yi,mt),dt.refreshMaterialUniforms(Yi,j,D,R,_.state.transmissionRenderTarget[P.id]),Ia.upload(B,dh(Ft),Yi,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ia.upload(B,dh(Ft),Yi,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Oe.setValue(B,"center",q.center),Oe.setValue(B,"modelViewMatrix",q.modelViewMatrix),Oe.setValue(B,"normalMatrix",q.normalMatrix),Oe.setValue(B,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bn=j.uniformsGroups;for(let Ec=0,jm=Bn.length;Ec<jm;Ec++){const mh=Bn[Ec];W.update(mh,jn),W.bind(mh,jn)}}return jn}function Ym(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function $m(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,V,$){ot.get(P.texture).__webglTexture=V,ot.get(P.depthTexture).__webglTexture=$;const j=ot.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const $=ot.get(P);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,$=0){E=P,A=V,w=$;let j=!0,q=null,mt=!1,Et=!1;if(P){const Pt=ot.get(P);if(Pt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Pt.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Pt.__hasExternalTextures)I.rebindTextures(P,ot.get(P.texture).__webglTexture,ot.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ut=P.depthTexture;if(Pt.__boundDepthTexture!==Ut){if(Ut!==null&&ot.has(Ut)&&(P.width!==Ut.image.width||P.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const Wt=P.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Et=!0);const Vt=ot.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Vt[V])?q=Vt[V][$]:q=Vt[V],mt=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?q=ot.get(P).__webglMultisampledFramebuffer:Array.isArray(Vt)?q=Vt[$]:q=Vt,x.copy(P.viewport),y.copy(P.scissor),T=P.scissorTest}else x.copy(K).multiplyScalar(D).floor(),y.copy(it).multiplyScalar(D).floor(),T=ft;if(It.bindFramebuffer(B.FRAMEBUFFER,q)&&j&&It.drawBuffers(P,q),It.viewport(x),It.scissor(y),It.setScissorTest(T),mt){const Pt=ot.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pt.__webglTexture,$)}else if(Et){const Pt=ot.get(P.texture),Wt=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.__webglTexture,$||0,Wt)}L=-1},this.readRenderTargetPixels=function(P,V,$,j,q,mt,Et){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){It.bindFramebuffer(B.FRAMEBUFFER,Dt);try{const Pt=P.texture,Wt=Pt.format,Vt=Pt.type;if(!Nt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-j&&$>=0&&$<=P.height-q&&B.readPixels(V,$,j,q,jt.convert(Wt),jt.convert(Vt),mt)}finally{const Pt=E!==null?ot.get(E).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(P,V,$,j,q,mt,Et){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){const Pt=P.texture,Wt=Pt.format,Vt=Pt.type;if(!Nt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-j&&$>=0&&$<=P.height-q){It.bindFramebuffer(B.FRAMEBUFFER,Dt);const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,mt.byteLength,B.STREAM_READ),B.readPixels(V,$,j,q,jt.convert(Wt),jt.convert(Vt),0);const pe=E!==null?ot.get(E).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,pe);const Se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await F_(B,Se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,mt),B.deleteBuffer(Ut),B.deleteSync(Se),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,$=0){P.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-$),q=Math.floor(P.image.width*j),mt=Math.floor(P.image.height*j),Et=V!==null?V.x:0,Dt=V!==null?V.y:0;I.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Et,Dt,q,mt),It.unbindTexture()},this.copyTextureToTexture=function(P,V,$=null,j=null,q=0){P.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],V=arguments[2],q=arguments[3]||0,$=null);let mt,Et,Dt,Pt,Wt,Vt;$!==null?(mt=$.max.x-$.min.x,Et=$.max.y-$.min.y,Dt=$.min.x,Pt=$.min.y):(mt=P.image.width,Et=P.image.height,Dt=0,Pt=0),j!==null?(Wt=j.x,Vt=j.y):(Wt=0,Vt=0);const Ut=jt.convert(V.format),pe=jt.convert(V.type);I.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Se=B.getParameter(B.UNPACK_ROW_LENGTH),Ie=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Dn=B.getParameter(B.UNPACK_SKIP_PIXELS),ae=B.getParameter(B.UNPACK_SKIP_ROWS),Ft=B.getParameter(B.UNPACK_SKIP_IMAGES),tn=P.isCompressedTexture?P.mipmaps[q]:P.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,tn.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tn.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pt),P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,Wt,Vt,mt,Et,Ut,pe,tn.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,Wt,Vt,tn.width,tn.height,Ut,tn.data):B.texSubImage2D(B.TEXTURE_2D,q,Wt,Vt,mt,Et,Ut,pe,tn),B.pixelStorei(B.UNPACK_ROW_LENGTH,Se),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ae),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft),q===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(P,V,$=null,j=null,q=0){P.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,P=arguments[2],V=arguments[3],q=arguments[4]||0);let mt,Et,Dt,Pt,Wt,Vt,Ut,pe,Se;const Ie=P.isCompressedTexture?P.mipmaps[q]:P.image;$!==null?(mt=$.max.x-$.min.x,Et=$.max.y-$.min.y,Dt=$.max.z-$.min.z,Pt=$.min.x,Wt=$.min.y,Vt=$.min.z):(mt=Ie.width,Et=Ie.height,Dt=Ie.depth,Pt=0,Wt=0,Vt=0),j!==null?(Ut=j.x,pe=j.y,Se=j.z):(Ut=0,pe=0,Se=0);const Dn=jt.convert(V.format),ae=jt.convert(V.type);let Ft;if(V.isData3DTexture)I.setTexture3D(V,0),Ft=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)I.setTexture2DArray(V,0),Ft=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const tn=B.getParameter(B.UNPACK_ROW_LENGTH),ce=B.getParameter(B.UNPACK_IMAGE_HEIGHT),jn=B.getParameter(B.UNPACK_SKIP_PIXELS),Bs=B.getParameter(B.UNPACK_SKIP_ROWS),Pn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt),P.isDataTexture||P.isData3DTexture?B.texSubImage3D(Ft,q,Ut,pe,Se,mt,Et,Dt,Dn,ae,Ie.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,q,Ut,pe,Se,mt,Et,Dt,Dn,Ie.data):B.texSubImage3D(Ft,q,Ut,pe,Se,mt,Et,Dt,Dn,ae,Ie),B.pixelStorei(B.UNPACK_ROW_LENGTH,tn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pn),q===0&&V.generateMipmaps&&B.generateMipmap(Ft),It.unbindTexture()},this.initRenderTarget=function(P){ot.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,It.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xu?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===cc?"display-p3":"srgb"}}class Mu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=i}clone(){return new Mu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yu extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ro extends gn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=mn,u=mn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uf extends de{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const er=new $t,hf=new $t,oa=[],ff=new hi,ZM=new $t,Gr=new Ot,Wr=new bo;class qa extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ZM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,er),ff.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(ff)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,er),Wr.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),t.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),hf.multiplyMatrices(i,er),Gr.matrixWorld=hf,Gr.raycast(t,oa);for(let o=0,a=oa.length;o<a;o++){const c=oa[o];c.instanceId=r,c.object=this,e.push(c)}oa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,pu,gi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lo extends gn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ms extends vn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new H,u=new Bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends vn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const g=[],_=i/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(d,2));function v(){const S=new H,A=new H;let w=0;const E=(e-t)/i;for(let L=0;L<=r;L++){const N=[],x=L/r,y=x*(e-t)+t;for(let T=0;T<=s;T++){const C=T/s,O=C*c+a,k=Math.sin(O),R=Math.cos(O);A.x=y*k,A.y=-x*i+_,A.z=y*R,h.push(A.x,A.y,A.z),S.set(k,E,R).normalize(),f.push(S.x,S.y,S.z),d.push(C,1-x),N.push(m++)}g.push(N)}for(let L=0;L<s;L++)for(let N=0;N<r;N++){const x=g[N][L],y=g[N+1][L],T=g[N+1][L+1],C=g[N][L+1];t>0&&(u.push(x,y,C),w+=3),e>0&&(u.push(y,T,C),w+=3)}l.addGroup(p,w,0),p+=w}function M(S){const A=m,w=new Bt,E=new H;let L=0;const N=S===!0?t:e,x=S===!0?1:-1;for(let T=1;T<=s;T++)h.push(0,_*x,0),f.push(0,x,0),d.push(.5,.5),m++;const y=m;for(let T=0;T<=s;T++){const O=T/s*c+a,k=Math.cos(O),R=Math.sin(O);E.x=N*R,E.y=_*x,E.z=N*k,h.push(E.x,E.y,E.z),f.push(0,x,0),w.x=k*.5+.5,w.y=R*.5*x+.5,d.push(w.x,w.y),m++}for(let T=0;T<s;T++){const C=A+T,O=y+T;S===!0?u.push(O,O+1,C):u.push(O+1,O,C),L+=3}l.addGroup(p,L,S===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Su extends ee{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Su(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eu extends vn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new H,S=new H,A=new H;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],S),d(e[w+2],A),c(M,S,A,v)}function c(v,M,S,A){const w=A+1,E=[];for(let L=0;L<=w;L++){E[L]=[];const N=v.clone().lerp(S,L/w),x=M.clone().lerp(S,L/w),y=w-L;for(let T=0;T<=y;T++)T===0&&L===w?E[L][T]=N:E[L][T]=N.clone().lerp(x,T/y)}for(let L=0;L<w;L++)for(let N=0;N<2*(w-L)-1;N++){const x=Math.floor(N/2);N%2===0?(f(E[L][x+1]),f(E[L+1][x]),f(E[L][x])):(f(E[L][x+1]),f(E[L+1][x+1]),f(E[L+1][x]))}}function l(v){const M=new H;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(v),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function u(){const v=new H;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const S=_(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(S,1-A)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],S=o[v+2],A=o[v+4],w=Math.max(M,S,A),E=Math.min(M,S,A);w>.9&&E<.1&&(M<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const S=v*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function m(){const v=new H,M=new H,S=new H,A=new H,w=new Bt,E=new Bt,L=new Bt;for(let N=0,x=0;N<r.length;N+=9,x+=6){v.set(r[N+0],r[N+1],r[N+2]),M.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),w.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),A.copy(v).add(M).add(S).divideScalar(3);const y=_(A);g(w,x+0,v,y),g(E,x+2,M,y),g(L,x+4,S,y)}}function g(v,M,S,A){A<0&&v.x===1&&(o[M]=v.x-1),S.x===0&&S.z===0&&(o[M]=A/2/Math.PI+.5)}function _(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eu(t.vertices,t.indices,t.radius,t.details)}}class wu extends Eu{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wu(t.radius,t.detail)}}class uc extends vn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,d=new H,m=new Bt;for(let g=0;g<=s;g++){for(let _=0;_<=i;_++){const p=r+_/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let g=0;g<s;g++){const _=g*(i+1);for(let p=0;p<i;p++){const v=p+_,M=v,S=v+i+1,A=v+i+2,w=v+1;a.push(M,S,w),a.push(S,A,w)}}this.setIndex(a),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qi extends vn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new H,f=new H,d=[],m=[],g=[],_=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let S=0;p===0&&o===0?S=.5/e:p===i&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),_.push(w+S,1-M),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=u[p][v+1],S=u[p][v],A=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&d.push(M,S,w),(p!==i-1||c<Math.PI)&&d.push(S,A,w)}this.setIndex(d),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class an extends Ao{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hc extends an{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fc extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Cp extends fc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const el=new $t,df=new H,pf=new H;class Ip{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pf),e.updateMatrixWorld(),el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mf=new $t,Vr=new H,nl=new H;class JM extends Ip{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vr),nl.copy(i.position),nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(nl),i.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}}class xo extends fc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new JM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class QM extends Ip{constructor(){super(new wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k0 extends fc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bu extends fc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);const Tr={glass:6453644,metal:9146777,metalDark:4870231},kn={ceiling:15525851,wall:13814974,trim:16249834,floorTimber:9072722,benchtop:12168342,tile:13622754,tileFloor:12104358,metalDull:9146777};function t2(n){const t=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,e=t((n>>16&255)/255),i=t((n>>8&255)/255),s=t((n&255)/255),r=.2126*e+.7152*i+.0722*s;return r>.008856?116*Math.cbrt(r)-16:903.3*r}const _f=86,e2=new Set([kn.ceiling,kn.tile]);function dc(n,t){if(t<=2||e2.has(n))return n;const e=t2(n);if(e>_f)throw new Error(`value plan: ${t.toFixed(1)} m2 of #${n.toString(16).padStart(6,"0")} is L* ${e.toFixed(0)}, above the ${_f} cap for large areas`);return n}const gr=new Map,n2=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function i2(n,t={}){let e=String(n);for(const s of n2)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(gr.has(e))return gr.get(e);const i=new an({color:n,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??li,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return gr.set(e,i),i}function Au(n,t){if(gr.has(n))return gr.get(n);const e=t();return gr.set(n,e),e}const s2=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function Co(n){return n.onBeforeCompile=s2,n}function r2(){return Au("window",()=>Co(new an({color:Tr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new zt(16767392),emissiveIntensity:0})))}function o2(){return Au("windowinner",()=>Co(new an({color:Tr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function Dp(){return Au("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgb(140,140,140)"),i.addColorStop(.55,"rgb(196,196,196)"),i.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Lo(t);s.colorSpace=sn;const r=new oi({map:s,blending:Zl,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new cn(1,1,1),new Ai(1,1),new ee(.5,.5,1,10),new Su(.5,1,8),new qi(.5,12,10);const a2=new Set;function Tu(n){a2.add(n)}function c2(n){let t=1779033703^n.length;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function l2(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Io{constructor(t="lifesim"){this.seed=String(t),this._next=l2(c2(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new Io(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const i=this.shuffle([...t]);return i.slice(0,Math.min(e,i.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(this._next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let i=0;for(const r of e)i+=Math.max(0,r.weight??1);if(i<=0)return e[0];let s=this._next()*i;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(t,e,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(t,e))))}}let Pp=8,z0=null;function u2(n){z0=n,Pp=Math.min(8,n.capabilities.getMaxAnisotropy())}let h2=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};const Op=(n,t=n)=>{const e=h2(n);return e.width=n,e.height=t,e};let Np=0;function Ru(n,t){return t&&(n.colorSpace=sn),n.wrapS=n.wrapT=Us,n.anisotropy=Pp,n.generateMipmaps=!0,n.minFilter=ri,n.magFilter=Ue,Np+=n.image.width*n.image.height*4*4/3,z0&&z0.initTexture(n),n}function Ti(n){return Ru(new Lo(f2(n)),!0)}function B0(n){return n.wrapS=n.wrapT=cs,n}function f2(n){const t=Op(n.w,n.h),e=t.getContext("2d"),i=e.createImageData(n.w,n.h),s=i.data,r=n.d,o=n.w*n.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const u=r[c],h=r[c+1],f=r[c+2];s[l]=(u<0?0:u>1?1:u)*255+.5,s[l+1]=(h<0?0:h>1?1:h)*255+.5,s[l+2]=(f<0?0:f>1?1:f)*255+.5,s[l+3]=255}return e.putImageData(i,0,0),t}const Fe=n=>n<0?0:n>1?1:n,Si=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function d2(n){const[t,e,i]=n,s=Math.max(t,e,i),r=Math.min(t,e,i),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-i)/a+(e<i?6:0))/6:s===e?l=((i-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function p2(n,t,e){if(t===0)return[e,e,e];const i=e<.5?e*(1+t):e+t-e*t,s=2*e-i,r=o=>(o=(o%1+1)%1,o<1/6?s+(i-s)*6*o:o<1/2?i:o<2/3?s+(i-s)*(2/3-o)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function xi(n,t=1,e=0,i=1){const[s,r,o]=d2(Array.isArray(n)?n:Si(n));return p2(s+e/360,Fe(r*i),Fe(o*t))}function Ri(n,t){return{w:n,h:t,d:new Float32Array(n*t*3)}}function zs(n,t){const e=Array.isArray(t)?t:Si(t),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=e[0],i[s+1]=e[1],i[s+2]=e[2]}function Lu(n,t,e,i,s){if(s<=0)return;const r=n.w,o=n.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,u=n.d,h=1-s;u[l]=u[l]*h+i[0]*s,u[l+1]=u[l+1]*h+i[1]*s,u[l+2]=u[l+2]*h+i[2]*s}function Gn(n,t,e,i,s,r,o=1){const a=Array.isArray(r)?r:Si(r),c=Math.round(t),l=Math.round(i),u=Math.round(e),h=Math.round(s);if(o<1){for(let g=u;g<h;g++)for(let _=c;_<l;_++)Lu(n,_,g,a,o);return}const f=n.w,d=n.h,m=n.d;for(let g=u;g<h;g++){let _=g;(_<0||_>=d)&&(_=(_%d+d)%d);const p=_*f;for(let v=c;v<l;v++){let M=v;(M<0||M>=f)&&(M=(M%f+f)%f);const S=(p+M)*3;m[S]=a[0],m[S+1]=a[1],m[S+2]=a[2]}}}function Do(n,t,e,i,s,r=1){const o=i+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,u=a+.5-e,h=Fe(i-Math.sqrt(l*l+u*u)+.5);h>0&&Lu(n,c,a,s,r*h)}}function H0(n,t,e,i,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,u]=t[o],h=Math.hypot(l-a,u-c),f=Math.max(1,Math.ceil(h));for(let d=0;d<=f;d++){const m=d/f;Do(n,a+(l-a)*m,c+(u-c)*m,r,i,s)}}}function Up(n,t,e,i,s,r,o,a){const c=n.w,l=n.h,u=n.d,h=r/2,f=o[0],d=o[1],m=o[2],g=Math.PI*2/i;for(let _=0;_<l;_++){const p=_*c,v=t+e*Math.sin(_*g+s),M=v-h,S=v+h,A=Math.floor(M),w=Math.ceil(S);for(let E=A;E<=w;E++){const L=Fe(Math.min(E+1,S)-Math.max(E,M));if(L<=0)continue;const N=a*L,x=1-N;let y=E;(y<0||y>=c)&&(y=(y%c+c)%c);const T=(p+y)*3;u[T]=u[T]*x+f*N,u[T+1]=u[T+1]*x+d*N,u[T+2]=u[T+2]*x+m*N}}}const gf=n=>n*n*(3-2*n);function m2(n,t,e){const i=new Float32Array(t*e);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const xf=256;function ue(n,t,e={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??i,l=e.p0y??i,u=new Float32Array(t*a),h=[];let f=1,d=0;for(let A=0;A<s;A++){const w=Math.min(xf,Math.max(1,Math.round(c*o**A))),E=Math.min(xf,Math.max(1,Math.round(l*o**A)));h.push({lat:m2(n,w,E),px:w,py:E,amp:f}),d+=f,f*=r}const m=new Float64Array(t*a),g=new Int32Array(t),_=new Int32Array(t),p=new Float64Array(t);for(let A=0;A<h.length;A++){const w=h[A],E=w.lat,L=w.px,N=w.py,x=w.amp,y=L/t,T=N/a;for(let C=0;C<t;C++){const O=C*y,k=O|0,R=k>=L?k%L:k;g[C]=R,_[C]=R+1>=L?0:R+1,p[C]=gf(O-k)}for(let C=0;C<a;C++){const O=C*T,k=O|0,R=gf(O-k),D=1-R,F=k>=N?k%N:k,X=F*L,K=(F+1>=N?0:F+1)*L,it=C*t;for(let ft=0;ft<t;ft++){const Q=g[ft],z=_[ft],U=p[ft],Y=E[X+Q],J=E[X+z],ut=E[K+Q],lt=E[K+z];m[it+ft]+=x*((Y+(J-Y)*U)*D+(ut+(lt-ut)*U)*R)}}}let v=1/0,M=-1/0;for(let A=0;A<u.length;A++){u[A]=m[A]/d;const w=u[A];w<v&&(v=w),w>M&&(M=w)}const S=M-v||1;for(let A=0;A<u.length;A++)u[A]=(u[A]-v)/S;return u}function Fp(n,t,e,i){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*i+1,a=new Int32Array(t),c=new Int32Array(t);for(let h=0;h<t;h++)a[h]=((h-i)%t+t)%t,c[h]=(h+i+1)%t;for(let h=0;h<e;h++){const f=h*t;let d=0;for(let m=-i;m<=i;m++)d+=n[f+(m%t+t)%t];for(let m=0;m<t;m++)s[f+m]=d/o,d-=n[f+a[m]],d+=n[f+c[m]]}const l=new Int32Array(e),u=new Int32Array(e);for(let h=0;h<e;h++)l[h]=((h-i)%e+e)%e*t,u[h]=(h+i+1)%e*t;for(let h=0;h<t;h++){let f=0;for(let d=-i;d<=i;d++)f+=s[(d%e+e)%e*t+h];for(let d=0;d<e;d++)r[d*t+h]=f/o,f-=s[l[d]+h],f+=s[u[d]+h]}return r}function _2(n,t,e=1.5,i=null){const s=i??n.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const u=(l-1+s)%s*t,h=l*t,f=(l+1)%s*t;let d=h*4;for(let m=0;m<t;m++,d+=4){const g=a[m],_=c[m],p=n[u+g],v=n[u+m],M=n[u+_],S=n[h+g],A=n[h+_],w=n[f+g],E=n[f+m],L=n[f+_],N=M+2*A+L-(p+2*S+w),x=w+2*E+L-(p+2*v+M),y=-N*o,T=x*o,C=1/Math.sqrt(y*y+T*T+1);r[d]=(y*C*.5+.5)*255+.5,r[d+1]=(T*C*.5+.5)*255+.5,r[d+2]=(C*.5+.5)*255+.5,r[d+3]=255}}return r}function Vn(n,t,e=1.5,i=null){const s=i??n.length/t;return Ru(new Lo(kp(_2(n,t,e,s),t,s)),!1)}function kp(n,t,e){const i=Op(t,e),s=i.getContext("2d"),r=s.createImageData(t,e);return r.data.set(n),s.putImageData(r,0,0),i}function g2(n,t,e,i,s=null){const o=n*(s??n),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const u=t?t[c]:1,h=e?e[c]:.85,f=i?i[c]:0;a[l]=(u<0?0:u>1?1:u)*255+.5,a[l+1]=(h<0?0:h>1?1:h)*255+.5,a[l+2]=(f<0?0:f>1?1:f)*255+.5,a[l+3]=255}return a}function Ve(n,t,e,i,s=null){const r=s??n;return Ru(new Lo(kp(g2(n,t,e,i,r),n,r)),!1)}const Cu={},ho=new Map;let zp=null;function Le(n,t){Cu[n]=t}const x2=n=>{const t=Object.keys(n).sort();return t.length?t.map(e=>e+"="+JSON.stringify(n[e])).join(","):""};function ls(n,t=null,e={}){const i=Cu[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=x2(e),r=s?n+"#"+s:n;if(ho.has(r))return ho.get(r);const o=t||(zp||new Io("textures")).child("tex."+r),a=i(o,e);return a.name=n,ho.set(r,a),a}function v2(){var n,t;for(const e of ho.values()){for(const i of["map","normalMap","ormMap"])(t=(n=e[i])==null?void 0:n.dispose)==null||t.call(n);if(e.maps)for(const i of e.maps)i.dispose()}ho.clear(),Np=0,zp=null}Tu(v2);const il={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Le("timberFloor",(n,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),u=t.species||n.pick(Object.keys(il)),h=il[u]||il.blackbutt,f=Ri(1024,1024);zs(f,xi(h.dark,.72));const d=Si(h.dark),m=xi(h.base,1.25),g=[];for(let w=0;w<15;w++){const E=w*c+l/2,L=(w+1)*c-l/2,N=xi(h.base,1+n.range(-.06,.06),n.range(-3,3));Gn(f,E,0,L,1024,N);const x=Math.round(n.range(.15,.85)*1024);g.push(x),Gn(f,E,x,L,x+2,xi(h.dark,.8),.85),Gn(f,E,x-2,L,x,m,.25);const y=n.int(28,60);for(let T=0;T<y;T++){const C=n.range(E+1,L-1),O=n.range(1.5,4),k=1024/n.int(2,5),R=n.range(0,Math.PI*2),D=n.range(2,3),F=n.range(.04,.12),X=n.chance(.25)?m:d;Up(f,C,O,k,R,D,X,F)}if(n.chance(.2)){const T=n.range(204.8,819.2),C=n.range(60,160),O=n.range(E+4,L-4);for(let k=0;k<n.int(2,4);k++){const R=(k+1)*n.range(3,7),D=[];for(let F=0;F<=16;F++){const X=F/16;D.push([O+(X-.5)*2*R,T-C*(1-(X-.5)**2*4)])}H0(f,D,2,d,.06)}}}const _=ue(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),v=new Float32Array(512*512),M=new Float32Array(512*512),S=512/15,A=l*512/1024;for(let w=0;w<512;w++)for(let E=0;E<512;E++){const L=w*512+E,N=Math.floor(E/S),x=E-N*S,y=x<A/2||x>S-A/2,T=w*1024/512,C=g[N],O=T>=C-1&&T<=C+2,k=y||O;v[L]=k?.15:.75,p[L]=Fe(h.rough+(k?.1:0)+(_[L]-.5)*.1),M[L]=k?.72:1}return{map:Ti(f),normalMap:Vn(Fp(v,512,512,1),512,1.2),ormMap:Ve(512,M,p,null),uvScale:[o,o],normalScale:.5,species:u,tinted:!1}});Le("plasterWall",(n,t={})=>{const s=t.rough??.88,r=ue(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const u=c*256+l;let h=s+(r[u]**1.5-.5)*.1;t.ceiling||(h+=Math.cos(l/a*Math.PI*2)*.02),o[u]=Fe(h)}return{ormMap:Ve(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});Le("plasterCeiling",n=>Cu.plasterWall(n,{rough:.93,ceiling:!0}));Le("paintedJoinery",n=>{const i=ue(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Fe(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Ve(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Le("carpetPile",n=>{const i=Ri(512,512);zs(i,[1,1,1]);const s=ue(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const u=c*512+l,h=Math.cos(c/256*Math.PI*2)*.03,f=Fe(.9+(s[u]-.5)*.16+h);r[u*3]=f,r[u*3+1]=f,r[u*3+2]=f}for(let c=0;c<1200;c++){const l=n.pick([[1.1,0],[.78,8],[.92,-10]]),u=xi(16777215,l[0],l[1],1);if(l[1]!==0){const h=n.range(0,1);u[0]=u[0]*(.94+h*.12),u[2]=u[2]*(1.06-h*.12)}Do(i,n.range(0,512),n.range(0,512),n.range(1,2),u,.25)}const o=ue(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Fe(.92+(o[c]-.5)*.06);return{map:Ti(i),normalMap:Vn(o,512,.6),ormMap:Ve(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Le("ceramicTile",(n,t={})=>{const i=t.tile??.3,s=2,r=i*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=Si(12104358),u=[];for(let _=0;_<s*s;_++)u.push({c:xi(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const h=Ri(512,512),f=new Float32Array(512*512),d=new Float32Array(512*512),m=new Float32Array(512*512),g=o/2;for(let _=0;_<512;_++)for(let p=0;p<512;p++){const v=_*512+p,M=Math.floor(p/c),S=Math.floor(_/c),A=p-M*c,w=_-S*c,E=Math.min(A,c-A,w,c-w);if(E<g){h.d[v*3]=l[0],h.d[v*3+1]=l[1],h.d[v*3+2]=l[2],f[v]=.85,d[v]=.25,m[v]=.62;continue}const L=u[S*s+M],N=(A/c+w/c)/2,x=1.03-.06*(L.g>0?N:1-N);h.d[v*3]=Fe(L.c[0]*x),h.d[v*3+1]=Fe(L.c[1]*x),h.d[v*3+2]=Fe(L.c[2]*x),f[v]=.08;const y=Fe((E-g)/a);d[v]=.25+.75*y,m[v]=.62+.38*y}return{map:Ti(h),normalMap:Vn(d,512,2),ormMap:Ve(512,m,f,null),uvScale:[r,r],normalScale:.8,tinted:!1}});Le("fabricWeave",n=>{const i=Ri(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let u=0;u<a.length;u++)a[u]=n.range(-.035,.035);for(let u=0;u<c.length;u++)c[u]=n.range(-.035,.035);const l=ue(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let h=0;h<256;h++){const f=u*256+h,d=(h>>1&1^u>>1&1)===0,m=h>>1,g=u>>1,_=d?a[(m*8+(u>>5&7))%a.length]:c[(g*8+(h>>5&7))%c.length],p=Fe((d?1.06:.94)+_+(l[f]-.5)*.06);i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,s[f]=d?.66:.8,r[f]=d?1:.3}return{map:Ti(i),normalMap:Vn(Fp(r,256,256,1),256,.8),ormMap:Ve(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Le("joineryTimber",n=>{const i=Ri(512,512);zs(i,[1,1,1]);const s=ue(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let c=0;c<512*512;c++){const l=Fe(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=xi(16777215,.72);for(let c=0;c<220;c++){const l=n.range(0,512),u=n.range(2,6),h=512/n.int(1,2),f=n.range(0,Math.PI*2);Up(i,l,u,h,f,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Fe(.55+(s[c]-.5)*.08);return{map:Ti(i),ormMap:Ve(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});Le("vinylSheet",n=>{const i=Ri(512,512);zs(i,14209732);const s=[13222578,15131093,11906460,14472902].map(Si);for(let c=0;c<3e3;c++)Do(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=ue(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Fe(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=n.range(0,512),u=n.range(0,512),h=n.range(40,120),f=n.range(0,Math.PI*2),d=n.range(.6,2.2),m=[];for(let g=0;g<=24;g++){const _=f+d*(g/24);m.push([l+Math.cos(_)*h,u+Math.sin(_)*h])}H0(i,m,n.range(2,4),xi(14209732,.88),.3),H0(a,m,n.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Fe(o[c]+a.d[c*3]*.15);return{map:Ti(i),ormMap:Ve(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});Le("laminateBench",n=>{const s=Ri(512,512);zs(s,kn.benchtop);const r=[9274743,14077886,7235417].map(Si);for(let l=0;l<2e3;l++)Do(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=xi(kn.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let h=0;h<512;h++)Lu(s,h,l,c,.85),o[l*512+h]=.45;return{map:Ti(s),ormMap:Ve(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Le("ceilingGrid",n=>{const s=Ri(512,512);zs(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=Si(14210509),c=Si(12434098),l=ue(n,512,{p0:64,octaves:2}),u=new Float32Array(512*512);for(let h=0;h<512;h++)for(let f=0;f<512;f++){const d=h*512+f,m=Math.min(f,512-f),g=Math.min(h,512-h);if(m<r/2||g<o/2){const v=m>=r/2-2&&m<r/2||g>=o/2-2&&g<o/2?c:a;s.d[d*3]=v[0],s.d[d*3+1]=v[1],s.d[d*3+2]=v[2],u[d]=.55}else{const p=1+(l[d]-.5)*.04;s.d[d*3]*=p,s.d[d*3+1]*=p,s.d[d*3+2]*=p,u[d]=.9}}return{map:Ti(s),ormMap:Ve(512,null,u,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Le("applianceEnamel",n=>{const i=ue(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Fe(.3+(i[r]-.5)*.04);return{ormMap:Ve(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Le("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=ue(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;i[l]=Fe(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:Ve(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});Le("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let f=0;f<s;f++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=f=>{let d=0;for(const m of i)d+=m.a*Math.exp(-(((f-m.c)/m.w)**2));return d+=.5*Math.exp(-((f/.04)**2))+.5*Math.exp(-(((1-f)/.04)**2)),d};let o=1/0,a=-1/0;for(let f=0;f<=256;f++){const d=r(f/256);d<o&&(o=d),d>a&&(a=d)}const c=a-o||1,l=f=>(r(Fe(f))-o)/c,u=Ri(512,256),h=new Float32Array(512*256);for(let f=0;f<512;f++){const d=l(f/511),m=.9+.1*d;for(let g=0;g<256;g++){const _=g*512+f;u.d[_*3]=m,u.d[_*3+1]=m,u.d[_*3+2]=m,h[_]=d}}return{map:B0(Ti(u)),normalMap:B0(Vn(h,512,3,256)),uvScale:null,normalScale:1,field:l,folds:i,tinted:!0}});Le("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=i[r].map(Si),a=Ri(256,256);zs(a,o[n.int(0,3)]);const c=n.int(0,2);if(c===0){let u=0;for(;u<256;){const h=n.int(12,48);Gn(a,0,u,256,Math.min(256,u+h),o[n.int(0,3)],n.range(.5,1)),u+=h}}else if(c===1)for(let u=0;u<n.int(5,11);u++){const h=n.range(0,179.2),f=n.range(0,256*.7);Gn(a,h,f,h+n.range(30,110),f+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const u=n.range(115.2,174.08);Gn(a,0,0,256,u,o[0],1),Gn(a,0,u,256,256,o[2],1);for(let h=0;h<n.int(3,7);h++){const f=n.range(u-40,u+40);Gn(a,0,f,256,f+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}Do(a,n.range(256*.2,256*.8),n.range(20,u-20),n.range(12,26),o[3],.9)}const l=xi(16777215,.97);Gn(a,0,0,256,6,l),Gn(a,0,250,256,256,l),Gn(a,0,0,6,256,l),Gn(a,250,0,256,256,l),s.push(B0(Ti(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const M2={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},dr=new Map;function ki(n,t=16777215,e=null,i={}){const s=M2[n];if(!s)throw new Error(`Surfaces: no surface named '${n}'`);const r=Object.keys(i).sort().map(u=>u+"="+JSON.stringify(i[u])).join(","),o=n+"|"+t+"|"+r;if(dr.has(o))return dr.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=u=>s.alpha!==void 0?Co(u):u;if(s.recipe){const{print:u,...h}=i,f=Object.keys(h).sort().map(p=>p+"="+JSON.stringify(h[p])).join(","),d=e?e.child("tex."+s.recipe+(f?"#"+f:"")):null,m=ls(s.recipe,d,h),g=m.maps?m.maps[Math.min(m.maps.length-1,u??0)]:m.map;if(g&&(a.map=g),m.normalMap){a.normalMap=m.normalMap;const p=m.normalScale??1;a.normalScale=new Bt(p,p)}m.ormMap?(a.aoMap=m.ormMap,a.roughnessMap=m.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=m.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const _=c(new an(a));return m.uvScale&&(_.userData.uvScale=m.uvScale),_.userData.cast=s.cast,_.userData.surface=n,dr.set(o,_),_}const l=c(new an(a));return l.userData.cast=s.cast,l.userData.surface=n,dr.set(o,l),l}function y2(){for(const n of dr.values())n.dispose();dr.clear()}Tu(y2);const Yt={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,switchH:1.05,gpoH:.3},ti={thin:.002,furniture:.003,joinery:.005},vf=new Set;function G0(n,t,e={}){if(e.material)return e.material;try{return ki(n,t,null,e.recipe||{})}catch(i){vf.has(n)||(vf.add(n),console.error(`RoomKit: surface '${n}' unavailable, falling back to flat colour`,i))}return i2(t,e)}function At(n,t,e,i,s,r={}){var l;const o=G0(n,s,r),a=r.chamfer?ks(t,e,i,r.chamfer):r.graded?S2(t,e,i,r.gradeEdge):new cn(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),c=new Ot(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const Rr=new Map,us=n=>Math.round(n*1e3);function Bp(n,t,e){const i=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(i[s*2]=n[r],i[s*2+1]=n[r+2]):o>=c?(i[s*2]=n[r+2],i[s*2+1]=n[r+1]):(i[s*2]=n[r],i[s*2+1]=n[r+1])}return i}function Hp(n){const t=n.length*3,e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const o of n){const[a,c,l]=o;let u=c[0]-a[0],h=c[1]-a[1],f=c[2]-a[2],d=l[0]-a[0],m=l[1]-a[1],g=l[2]-a[2],_=h*g-f*m,p=f*d-u*g,v=u*m-h*d;const M=(a[0]+c[0]+l[0])/3,S=(a[1]+c[1]+l[1])/3,A=(a[2]+c[2]+l[2])/3;let w=c,E=l;_*M+p*S+v*A<0&&(w=l,E=c,_=-_,p=-p,v=-v);const L=Math.hypot(_,p,v)||1;_/=L,p/=L,v/=L;for(const N of[a,w,E])e[s*3]=N[0],e[s*3+1]=N[1],e[s*3+2]=N[2],i[s*3]=_,i[s*3+1]=p,i[s*3+2]=v,s++}const r=new vn;return r.setAttribute("position",new de(e,3)),r.setAttribute("normal",new de(i,3)),r.setAttribute("uv",new de(Bp(e,i,t),2)),r.setAttribute("color",new de(new Float32Array(t*3).fill(1),3)),r}function ks(n,t,e,i=ti.furniture){n=Math.max(n,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(i,Math.min(n,t,e)/2-5e-4);if(!(s>2e-4))return new cn(n,t,e);const r=`c${us(n)},${us(t)},${us(e)},${us(s)}`,o=Rr.get(r);if(o)return o;const a=n/2,c=t/2,l=e/2,u=[a-s,c-s,l-s],h=[a,c,l],f=(p,v)=>[(v===0?h[0]:u[0])*p[0],(v===1?h[1]:u[1])*p[1],(v===2?h[2]:u[2])*p[2]],d=[];for(const p of[-1,1])for(const v of[-1,1])for(const M of[-1,1])d.push([p,v,M]);const m=[],g=(p,v,M,S)=>{m.push([p,v,M]),m.push([p,M,S])};for(let p=0;p<3;p++){const v=(p+1)%3,M=(p+2)%3;for(const S of[-1,1]){const A=(w,E)=>{const L=[0,0,0];return L[p]=S,L[v]=w,L[M]=E,f(L,p)};g(A(-1,-1),A(1,-1),A(1,1),A(-1,1))}}for(let p=0;p<3;p++)for(let v=p+1;v<3;v++){const M=3-p-v;for(const S of[-1,1])for(const A of[-1,1]){const w=[0,0,0];w[p]=S,w[v]=A,w[M]=-1;const E=[0,0,0];E[p]=S,E[v]=A,E[M]=1,g(f(w,p),f(w,v),f(E,v),f(E,p))}}for(const p of d)m.push([f(p,0),f(p,1),f(p,2)]);const _=Hp(m);return Rr.set(r,_),_}const aa=[0,.05,.18,.55];function Mf(n,t=.12){const e=t/.12,i=[0];for(let s=1;s<aa.length;s++){const r=aa[s]*e;r<n/2-1e-4&&i.push(r)}i.push(n/2);for(let s=aa.length-1;s>=1;s--){const r=n-aa[s]*e;r>n/2+1e-4&&i.push(r)}return i.push(n),i}function yf(n,t,e,i,s,r){const o=(a,c)=>[t[0]+e[0]*a+i[0]*c,t[1]+e[1]*a+i[1]*c,t[2]+e[2]*a+i[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),u=o(s[a+1],r[c]),h=o(s[a+1],r[c+1]),f=o(s[a],r[c+1]);n.push([l,u,h]),n.push([l,h,f])}}function S2(n,t,e,i=.12){const s=`g${us(n)},${us(t)},${us(e)},${us(i)}`,r=Rr.get(s);if(r)return r;const o=e<=n&&e<=t?2:t<=n?1:0,[a,c,l]=o===2?[n,t,e]:o===1?[n,e,t]:[e,t,n],u=a/2,h=c/2,f=l/2,d=Mf(a,i),m=Mf(c,i),g=[];yf(g,[-u,-h,f],[1,0,0],[0,1,0],d,m),yf(g,[-u,-h,-f],[1,0,0],[0,1,0],d,m);const _=(v,M,S,A)=>{g.push([v,M,S]),g.push([v,S,A])};_([u,-h,-f],[u,h,-f],[u,h,f],[u,-h,f]),_([-u,-h,-f],[-u,h,-f],[-u,h,f],[-u,-h,f]),_([-u,h,-f],[u,h,-f],[u,h,f],[-u,h,f]),_([-u,-h,-f],[u,-h,-f],[u,-h,f],[-u,-h,f]);const p=Hp(g);if(o===1?p.rotateX(-Math.PI/2):o===0&&p.rotateY(Math.PI/2),o!==2){const v=p.attributes.position.array,M=p.attributes.normal.array;p.setAttribute("uv",new de(Bp(v,M,p.attributes.position.count),2))}return Rr.set(s,p),p}Tu(()=>{for(const n of Rr.values())n.dispose();Rr.clear()});class Iu{constructor(){this.group=new ge,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,i,s,r,o,a=!1){this.colliders.push({min:new H(t-s/2,e,i-o/2),max:new H(t+s/2,e+r,i+o/2),walkable:a})}spot(t,e,i,s){return this.spots[t]=new H(e,i,s),this.spots[t]}interact(t,e,i,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new H(i,s,r),action:o,data:a,radius:c})}light(t,e,i,s=16770756,r=9,o=13){const a=new xo(s,r,o,2);return a.position.set(t,e,i),this.group.add(a),this.lights.push(a),a}}function E2(n,t,e,i,s,r,o=kn.floorTimber,a={}){const c=a.thickness??.16,l=At(a.surface??"floorTimber",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),n.add(l),n.solid(t,r-c,e,i,c,s,!0),l}function w2(n,t,e,i,s,r,o=kn.ceiling,a={}){const c=a.thickness??Yt.cornice,l=At(a.surface??"ceiling",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),n.add(l),l}function b2(n,t,e,i,s=0,r={}){const o=At("trim",.075,.115,.01,r.colour??kn.trim,{});o.position.set(t,e,i),o.rotation.y=s,n.add(o);const a=At("trim",.03,.055,.004,r.colour??kn.trim,{});return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(.007),n.add(a),o}function A2(n,t,e,i,s=0,r={}){const o=At("trim",.115,.075,.01,r.colour??kn.trim,{});return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function nr(n,t,e,i,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,u=e-r/2-a,h=e+r/2+a;const f=t-s/2,d=t+s/2,m=e-r/2,g=e+r/2;for(const M of n.decals){if(l<=M.x0||c>=M.x1||h<=M.z0||u>=M.z1)continue;const S=Math.min(l-M.x0,M.x1-c),A=Math.min(h-M.z0,M.z1-u);if(S<=A?t<(M.x0+M.x1)/2?l=Math.max(d,Math.min(l,M.x0)):c=Math.min(f,Math.max(c,M.x1)):e<(M.z0+M.z1)/2?h=Math.max(g,Math.min(h,M.z0)):u=Math.min(m,Math.max(u,M.z1)),l>M.x0+1e-4&&c<M.x1-1e-4&&h>M.z0+1e-4&&u<M.z1-1e-4)return null}const _=l-c,p=h-u;if(_<.05||p<.05)return null;const v=new Ot(new Ai(_,p),Dp());return v.rotation.x=-Math.PI/2,v.position.set((c+l)/2,i+.006,(u+h)/2),n.add(v),n.decals.push({x0:c,x1:l,z0:u,z1:h}),v}new hi;function T2(n,t,e,i){if(n.door===!1||n.leaf===!1||n.door===void 0&&n.leaf===void 0&&t<=1.005)return null;const s=n.door||{},r=t>=1.25,o=s.style??(n.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??i,colour:s.colour??n.leaf??(o==="glazed"?Tr.metal:e),surfaceName:s.surface??n.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function Me(n,t,e,i,s,r={}){const{y0:o=0,height:a=Yt.storey,thickness:c=Yt.wallThick,colour:l=kn.wall,innerColour:u=null,outerColour:h=null,openings:f=[],skirting:d=!0,skirtStyle:m="timber",cornice:g=!0,corniceStyle:_="cove",autoServices:p=!0,inner:v=null,surface:M="wall",trimColour:S=kn.trim,graded:A=!0,name:w=null}=r,E=u??h,L=i-t,N=s-e,x=Math.hypot(L,N);if(x<.01)return;const y=L/x,T=N/x,C=Math.atan2(-T,y),O=-T,k=y,R=c/2,D=(U,Y,J,ut=0,lt=0)=>(U.position.set(t+y*Y+O*ut,J,e+T*Y+k*ut),U.rotation.y=C+lt,n.add(U),U),F=(U,Y,J,ut={})=>At("trim",U,Y,J,ut.colour??S,ut),X=v===null?[-1,1]:[v],K=(U,Y,J,ut)=>{const lt=Y-U,ht=ut-J;if(lt<=.005||ht<=.005)return;const _t=(U+Y)/2,xt=g&&_==="shadowline"&&Math.abs(ut-(o+a))<.02,B=xt?ht-.01:ht,ie=lt>=1.2&&B>=1.2,Ct=At(M,lt,B,c,l,{graded:A&&ie,cast:!0});if(D(Ct,_t,J+B/2),xt){const I=At(M,lt,.01,c-.02,l,{});D(I,_t,ut-.005)}const Nt=Math.abs(y)*lt+Math.abs(T)*c,It=Math.abs(T)*lt+Math.abs(y)*c,rt=t+y*_t,ot=e+T*_t;if(n.solid(rt,J,ot,Nt,ht,It),E)for(const I of X){const b=At(M,lt,B,.02,E,{graded:A&&ie});D(b,_t,J+B/2,I*(R+.01))}if(d&&m&&J-o<.02)if(m==="commercial"){const I=F(lt,Yt.skirtCommercial,c+.04,{colour:kn.tileFloor,chamfer:ti.thin});D(I,_t,J+Yt.skirtCommercial/2)}else{const I=[[.112,Yt.skirtProud,0,ti.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[b,G,tt,at]of I){const nt=F(lt,b,c+G*2,{chamfer:at});D(nt,_t,J+tt+b/2)}}if(g&&_==="cove"&&Math.abs(ut-(o+a))<.02){const I=Yt.corniceGirth/Math.SQRT2;for(const b of X){const G=F(lt,Yt.corniceGirth,.008,{chamfer:0});D(G,_t,ut-I/2,b*(R+I/2)),G.rotation.order="YXZ",G.rotation.set(-b*Math.PI/4,C,0)}}},it=(U,Y,J,ut)=>{const lt=ut-J;for(const _t of[-1,1]){const xt=F(Yt.reveal,lt,c,{});D(xt,U+_t*(Y/2-Yt.reveal/2),J+lt/2)}const ht=F(Y,Yt.reveal,c,{});D(ht,U,ut-Yt.reveal/2)},ft=(U,Y,J,ut)=>{const lt=Y-2*Yt.reveal,ht=lt/2+Yt.archQuirk,_t=ut+Yt.archQuirk;for(const xt of[-1,1])for(const B of[-1,1]){const ie=F(Yt.archW,_t-J+.002,Yt.archProud,{chamfer:ti.joinery});if(D(ie,U+xt*(ht+Yt.archW/2),J+(_t-J)/2,B*(R+Yt.archProud/2)),J-o<.02){const Ct=F(Yt.archW+.02,.15,.032,{});D(Ct,U+xt*(ht+Yt.archW/2),J+.075,B*(R+.016))}}for(const xt of[-1,1]){const B=F(lt+2*(Yt.archW+Yt.archQuirk),Yt.archW,Yt.archProud,{chamfer:ti.joinery});D(B,U,_t+Yt.archW/2,xt*(R+Yt.archProud/2))}},Q=[...f].sort((U,Y)=>U.at-Y.at);let z=0;for(const U of Q){const Y=U.width/2,J=Math.max(0,U.at-Y),ut=Math.min(x,U.at+Y),lt=U.kind==="window"?U.sill??Yt.winSill:0,ht=U.kind==="window"?U.head??Yt.winHead:U.head??(U.kind==="arch"?2.25:Yt.doorH);if(K(z,J,o,o+a),lt>0&&K(J,ut,o,o+lt),K(J,ut,o+ht,o+a),z=ut,U.kind==="window"){const _t=ht-lt,xt=o+(lt+ht)/2,B=v===null?1:-v,ie=new Ot(new cn(U.width-2*Yt.reveal-.002,_t-.002,.006),r2());ie.castShadow=!1,ie.receiveShadow=!0,D(ie,U.at,xt,B*.015);const Ct=new Ot(new cn(U.width-2*Yt.reveal-.002,_t-.002,.006),o2());Ct.castShadow=!1,Ct.receiveShadow=!0,D(Ct,U.at,xt,-B*.015),it(U.at,U.width,o+lt,o+ht),ft(U.at,U.width,o+lt,o+ht);const Nt=Math.max(1,Math.round((U.width-2*Yt.reveal)/.9)),It=U.width-2*Yt.reveal;for(let ot=1;ot<Nt;ot++){const I=F(.04,_t,.05,{chamfer:ti.joinery});D(I,U.at-It/2+It/Nt*ot,xt)}const rt=U.restrictor?Math.min(o+1.7,o+ht-.1):o+lt+_t/3;if(_t>.55){const ot=F(It,.04,.05,{chamfer:ti.joinery});D(ot,U.at,rt)}if(U.restrictor){const ot=F(.06,.02,.03,{colour:kn.metalDull,chamfer:ti.thin});D(ot,U.at+It/4,o+lt+.02,0)}for(const ot of X){const I=F(U.width+.09,.025,c/2+.03,{chamfer:ti.joinery});D(I,U.at,o+lt-.0125,ot*(c/4+.015))}if(v!==null){const ot=F(U.width+.12,.04,.09,{chamfer:ti.joinery});D(ot,U.at,o+lt-.02,-v*(R+.045)),ot.rotation.order="YXZ",ot.rotation.set(v*.1,C,0)}if(U.curtains){R2(n,t+y*U.at,o+ht+.15,e+T*U.at,C,U.width+.4,{offset:(v??1)*(R+.09)});const ot=[.3,.22],I=v??1;for(const G of[-1,1]){const tt=ot[G<0?0:1],at=U.width*tt,nt=6;for(let Mt=0;Mt<nt;Mt++){const dt=at/nt,vt=At("fabric",dt*1.35,_t+.35,.045,U.curtains,{cast:!0}),Zt=U.at+G*(U.width/2-at+(Mt+.5)*dt);D(vt,Zt,xt+.1,I*(R+.075),Mt%2?.175:-.175)}}const b=F(U.width+.44,.12,.09,{chamfer:ti.joinery});D(b,U.at,o+ht+.21,I*(R+.055))}}else if((U.kind==="door"||U.kind==="arch")&&(it(U.at,U.width,o,o+ht),ft(U.at,U.width,o,o+ht),U.kind==="door")){const _t=U.swing??1,xt=U.width/2-Yt.reveal,B=R-.045;for(const Nt of[-1,1]){const It=F(.013,ht-.02,.03,{});D(It,U.at+Nt*(xt-.0055),o+(ht-.02)/2,_t*B)}const ie=F(U.width-2*Yt.reveal,.014,.03,{});D(ie,U.at,o+ht-.025,_t*B);const Ct=T2(U,U.width,S,_t);if(Ct){const Nt=B+.015+Yt.leafT,It=ht-Yt.reveal-.02,rt=Ct.pair?xt-.006:2*xt-.006,ot=Ct.face,I=Ct.pair?[1,-1]:[ot];for(const b of I){const G=U.at+b*(xt-.003),tt=ot*Nt;Ct.leaves.push({hx:t+y*G+O*tt,hz:e+T*G+k*tt,y:o,baseRot:C,phiOpen:b*ot*Math.PI/2,leafRot:b>0?0:Math.PI,dx:-b*rt/2,dz:-ot*Yt.leafT/2,lw:rt,lh:It});for(const at of[.15,1.02,1.89]){if(at>It-.1)continue;const nt=At("chrome",.016,.1,.016,Tr.metal,{chamfer:.001,cast:!1});D(nt,G,o+.015+at,tt)}}Ct.centre={x:t+y*U.at,z:e+T*U.at},Ct.y0=o,n.doors.push(Ct)}}if(p&&U.kind==="door"){const _t=-(U.swing??1);for(const xt of[-1,1])b2(n,t+y*(U.at+_t*(U.width/2+Yt.archW+.15))+O*xt*(R+.006),o+Yt.switchH,e+T*(U.at+_t*(U.width/2+Yt.archW+.15))+k*xt*(R+.006),C+(xt<0?Math.PI:0))}}if(K(z,x,o,o+a),p&&v!==null&&o+Yt.gpoH<o+a){const U=Math.max(1,Math.floor(x/3.5));for(let Y=0;Y<U;Y++){const J=(Y+.5)*(x/U);Q.some(ut=>Math.abs(ut.at-J)<ut.width/2+.25)||A2(n,t+y*J+O*v*(R+.006),o+Yt.gpoH,e+T*J+k*v*(R+.006),C+(v<0?Math.PI:0))}}w&&(n.faces[w]={a:{x:t,z:e},b:{x:i,z:s},u:{x:y,z:T},n:{x:O,z:k},angle:C,thickness:c,y0:o,height:a,length:x,face:U=>({x:(t+i)/2+O*U*(c/2),z:(e+s)/2+k*U*(c/2),nx:O*U,nz:k*U,rotY:C+(U<0?Math.PI:0)})})}function R2(n,t,e,i,s=0,r=1.6,o={}){const a=new ge,c=new Ot(new ee(.0125,.0125,r,8),G0("chrome",o.colour??Tr.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const u=new Ot(new qi(.0175,8,6),G0("chrome",o.colour??Tr.metalDark));u.position.x=l*r/2,a.add(u)}return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(o.offset??0),n.add(a),a}function Du(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new vn;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Sf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);const m=Sf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Sf(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new de(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){const g=u.getComponent(f,m);a.setComponent(f+h,m,g)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const L2=new Set(["position","normal","uv","color"]);function pc(n,t={}){var a,c;n.updateMatrixWorld(!0);const e=new Map,i=[],s=new Set;n.traverse(l=>{var m,g;if(l===n)return;for(let _=l.parent;_&&_!==n;_=_.parent)if(s.has(_))return;if(l.isInstancedMesh||l.userData.isSign||l.isLight){i.push(l),s.add(l);return}if(!l.isMesh||!((g=(m=l.geometry)==null?void 0:m.attributes)!=null&&g.position))return;const u=l.material.uuid;e.has(u)||e.set(u,{material:l.material,geos:[],cast:!1});const h=l.geometry.clone();h.applyMatrix4(l.matrixWorld);for(const _ of Object.keys(h.attributes))L2.has(_)||h.deleteAttribute(_);const f=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new de(new Float32Array(f*2),2)),h.attributes.color||h.setAttribute("color",new de(new Float32Array(f*3).fill(1),3));const d=e.get(u);d.geos.push(h.index?h.toNonIndexed():h),d.cast=d.cast||l.castShadow});const r=t.colliders?new Xa(t.colliders,1):null,o=new ge;for(const{material:l,geos:u,cast:h}of e.values()){if(!u.length)continue;const f=u.length===1?u[0]:Du(u,!1);if(!f){console.error("bakeGroup: merge returned null (mismatched attributes)",l);continue}const d=((a=l.userData)==null?void 0:a.decal)===!0,m=(c=l.userData)==null?void 0:c.uvScale;m&&!d&&mc(f,m[0],m[1]),r&&!d&&Gp(f,r);const g=new Ot(f,l);g.castShadow=d?!1:h,g.receiveShadow=!d,d&&(g.renderOrder=2),o.add(g)}for(const l of i)o.add(l);return o}function mc(n,t,e=t){const i=n.attributes.position.count,s=n.attributes.position.array,r=n.attributes.normal.array,o=new Float32Array(i*2);for(let a=0;a<i;a++){const c=a*3,l=Math.abs(r[c]),u=Math.abs(r[c+1]),h=Math.abs(r[c+2]);let f,d;u>=l&&u>=h?(f=s[c],d=s[c+2]):l>=h?(f=s[c+2],d=s[c+1]):(f=s[c],d=s[c+1]),o[a*2]=f/t,o[a*2+1]=d/e}n.setAttribute("uv",new de(o,2))}const sl=512,Ef=1024;function wf(n,t,e){return((n+sl)*Ef+(t+sl))*Ef+(e+sl)}class Xa{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let i=0;i<t.length;i++){const s=t[i],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),u=Math.floor(s.max.z/e);for(let h=r;h<=o;h++)for(let f=a;f<=c;f++)for(let d=l;d<=u;d++){const m=wf(h,f,d);let g=this.bins.get(m);g||(g=[],this.bins.set(m,g)),g.push(i)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,i,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),u=Math.floor((e-s)/r),h=Math.floor((e+s)/r),f=Math.floor((i-s)/r),d=Math.floor((i+s)/r);for(let m=c;m<=l;m++)for(let g=u;g<=h;g++)for(let _=f;_<=d;_++){const p=this.bins.get(wf(m,g,_));if(p)for(let v=0;v<p.length;v++){const M=p[v];this._stamp[M]!==a&&(this._stamp[M]=a,o.push(this.boxes[M]))}}return o}}const C2=.18,I2=.55,bf=.75,D2=.3,Af=.55,P2=1.2;function Gp(n,t){const e=t instanceof Xa?t:new Xa(t,1),i=Array.isArray(n)?n:[n];for(const s of i)O2(s,e)}function O2(n,t){const e=n.attributes.color;if(!e||e.itemSize!==3||e.normalized||!n.attributes.normal)return;const i=n.attributes.position.array,s=n.attributes.normal.array,r=e.array,o=n.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],u=s[c+1],h=s[c+2],f=i[c]+l*.01,d=i[c+1]+u*.01,m=i[c+2]+h*.01;let g=0;const _=t.near(f,d,m,P2);for(let v=0;v<_.length;v++){const M=_[v],S=Math.max(M.min.x-f,0,f-M.max.x),A=Math.max(M.min.y-d,0,d-M.max.y),w=Math.max(M.min.z-m,0,m-M.max.z),E=Math.sqrt(S*S+A*A+w*w);if(E>bf*3)continue;const L=(M.min.x+M.max.x)/2-f,N=(M.min.y+M.max.y)/2-d,x=(M.min.z+M.max.z)/2-m;l*L+u*N+h*x<=0||(g+=I2*Math.exp(-E/C2)+D2*Math.exp(-E/bf))}const p=Math.max(Af,1-Math.min(1-Af,g));r[c]*=p,r[c+1]*=p,r[c+2]*=p}e.needsUpdate=!0}const et=Object.freeze({CEIL_H:3.3,FLAT_FACE:3.15,STRUCT_FACE:3.166,CANT_FACE:3.511346,CANT_LEN:1.932113,CORNER_X:1.799792,VERTEX:Object.freeze([1.835,3.251]),BAND_TOP:2.7,TILE:.9,BAY_CENTRE:2.362686,BAY_FRONT:3.171346,BAY_W:1.4,BAY_D:.34,BAY_H:2.2,RIM:1.13,PANEL_OUT:1.1,PANEL_IN:.56,PANEL_Y0:.9,PANEL_Y1:1.16,RIM_TOP:.96,DAIS_A:1.75,COFFER_IN:1.6,COFFER_OUT:2.3,SPAWN:Object.freeze([0,0,2.3]),SPAWN_YAW:Math.PI,HEX_THETA:Math.PI/6}),Ei=Object.freeze({TILE:.9,PER_TILE:1,DIA:.72,LIP_DIA:.69,COVE_DIA:.6,DISH_DIA:.51,RECESS:.055,PROUD:.006,DISC_R:.25,DISC_PROUD:.001,COLUMNS:Object.freeze([-1.35,-.45,.45,1.35]),ROWS:Object.freeze([.45,1.35,2.25]),LIT_ROW:1.35}),kt=Object.freeze({ROUNDEL:12303029,BAND:9474188,CEIL:11118498,DECK:5198935,DAIS:7765124,CONSOLE:13947592,PANEL:6973799,DARK:2764339,CHROME:13225682,JOINERY:7034951,GLOW_W:12960958,GLOW_C:12371148,GLASS:13227742}),Tf=Object.freeze({ROUNDEL:38.718,BAND:26.288,CEIL:40.657,DECK:25.752,DAIS:10.227,CONSOLE:13.965,PANEL:9.566,DARK:9.034,CHROME:4.338,JOINERY:2.8,GLOW_W:6.463,GLOW_C:2.8,GLASS:2.239}),N2=16772301,U2=1.05,F2=12376319,k2=1.25,Da=n=>n<0?0:n>1?1:n,Wp=n=>n*n*(3-2*n);function _c(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new de(new Float32Array(t*3).fill(1),3))}return n}const Mn=512,Po=Mn/Ei.TILE,ca=Ei.DISH_DIA/2*Po,Rf=Ei.COVE_DIA/2*Po,rl=Ei.LIP_DIA/2*Po,Lf=Ei.DIA/2*Po,Cf=1,ol=1+Ei.PROUD/Ei.RECESS,If=1.5,z2=Ei.RECESS*Po,B2=(n,t)=>1-Wp(Da((n-t+If*.5)/If));let Df=!1;function Vp(){Df||(Df=!0,Le("roundel",n=>{const t=new Float32Array(Mn*Mn),e=new Float32Array(Mn*Mn),i=new Float32Array(Mn*Mn),s=ue(n,Mn,{p0:32,octaves:3});for(let r=0;r<Mn;r++)for(let o=0;o<Mn;o++){const a=r*Mn+o,c=o+.5-Mn/2,l=r+.5-Mn/2,u=Math.hypot(c,l);let h,f,d;if(u<=ca){const v=u/ca;h=0,f=.62-.2*v,d=.52}else{const v=Wp(Da((u-ca)/(Rf-ca)));h=v,f=.42+.36*v,d=.52+.22*v}let m,g,_;if(u<=rl)m=ol,g=1,_=.74;else if(u<=Lf){const v=(u-rl)/(Lf-rl);m=ol-(ol-Cf)*v,g=1,_=.74+.08*v}else m=Cf,g=1,_=.82;const p=1-B2(u,Rf);t[a]=h+(m-h)*p,e[a]=f+(g-f)*p,i[a]=Da(d+(_-d)*p+(s[a]-.5)*.06)}return{normalMap:Vn(t,Mn,z2),ormMap:Ve(Mn,e,i,null),uvScale:[Ei.TILE,Ei.TILE],normalScale:1,tinted:!0}}),Le("consolePanel",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=ue(n,256,{p0x:10,p0y:256,octaves:2}),o=ue(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++){const c=n.range(-.06,.06);for(let l=0;l<256;l++){const u=a*256+l;i[u]=Da(.42+c+(r[u]-.5)*.09+(o[u]-.5)*.06)}}return{ormMap:Ve(256,null,i,s),uvScale:[.32,.32],normalScale:0,tinted:!0}}))}let al=null;function qp(n=null){if(al)return al;Vp();for(const s of Object.keys(Tf))dc(kt[s],Tf[s]);const t={},e=ls("roundel",n?n.child("tex.roundel"):null);t.ROUNDEL=new an({color:kt.ROUNDEL,roughness:1,metalness:0,normalMap:e.normalMap,normalScale:new Bt(e.normalScale,e.normalScale),aoMap:e.ormMap,roughnessMap:e.ormMap,aoMapIntensity:1,vertexColors:!0}),t.ROUNDEL.userData.uvScale=e.uvScale,t.ROUNDEL.userData.cast=!0,t.ROUNDEL.userData.surface="roundel",t.BAND=ki("trim",kt.BAND,n),t.CEIL=ki("ceiling",kt.CEIL,n),t.DECK=ki("vinyl",kt.DECK,n),t.DAIS=ki("metal",kt.DAIS,n),t.CONSOLE=ki("appliance",kt.CONSOLE,n),t.DARK=ki("metal",kt.DARK,n),t.CHROME=ki("chrome",kt.CHROME,n),t.JOINERY=ki("joinery",kt.JOINERY,n);const i=ls("consolePanel",n?n.child("tex.consolePanel"):null);return t.PANEL=new an({color:kt.PANEL,roughness:1,metalness:0,aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),t.PANEL.userData.uvScale=i.uvScale,t.PANEL.userData.cast=!0,t.PANEL.userData.surface="consolePanel",t.GLOW_W=new an({color:kt.GLOW_W,roughness:.55,metalness:0,emissive:N2,emissiveIntensity:U2,vertexColors:!0}),t.GLOW_W.userData.cast=!0,t.GLOW_C=new an({color:kt.GLOW_C,roughness:.2,metalness:0,emissive:F2,emissiveIntensity:k2,vertexColors:!0}),t.GLOW_C.userData.cast=!0,t.GLASS=Co(new an({color:kt.GLASS,roughness:.1,metalness:0,transparent:!0,opacity:.3,depthWrite:!1,side:mi,vertexColors:!0})),t.GLASS.userData.cast=!1,t.SHADOW=Dp(),al=t,t}const ts=Math.SQRT1_2,cl=n=>2*n*Math.tan(Math.PI/6),qr=n=>2*Math.sqrt(3)*n*n,Pf=n=>n/Math.cos(Math.PI/6),la=7.2,Pu=.02,Ds=et.BAND_TOP,ir=3.16,ua=et.BAND_TOP,ll=.03,ul=.06,H2=.026,hl=.1,G2=.02,ei=1.8,Be=2.61,W0=.9,Ya=.045,fo=et.FLAT_FACE+Ya/2,Of=.05,Nf=3.311,sr=.09,V0=.05,Uf=3.14+V0/2,po=.25,Xp=.001,$a=1.35,W2=3.1,fl=.2,dl=.1,V2=.006;function Ou(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new de(new Float32Array(t*3).fill(1),3))}return n}function q2(n,t,e){const i=new ee(Pf(n),Pf(n),t,6,1,!1,e).toNonIndexed();return i.computeVertexNormals(),Ou(i)}const X2=["CEIL_H","FLAT_FACE","STRUCT_FACE","CANT_FACE","CORNER_X","BAND_TOP","DAIS_A","COFFER_IN","COFFER_OUT","HEX_THETA"],Y2=["ROUNDEL","BAND","CEIL","DAIS","DARK","CHROME","GLOW_W","GLOW_C"];function $2(n){for(const t of X2)if(!Number.isFinite(et[t]))throw new Error(`Shell: ROOM.${t} is not a number (got ${et[t]})`);if(!Array.isArray(et.SPAWN)||et.SPAWN.length!==3)throw new Error("Shell: ROOM.SPAWN must be [x, y, z]");if(!n)throw new Error("Shell: shell(b, P) needs the palette from roundels.js");for(const t of Y2)if(!n[t]||!n[t].isMaterial)throw new Error(`Shell: palette is missing ${t}`)}function j2(n,t){var s;const e=Ou(new cn(W0,Be,Ya).toNonIndexed());e.applyMatrix4(new $t().makeTranslation(n*.45,Be/2,fo));const i=(s=t.ROUNDEL.userData)==null?void 0:s.uvScale;if(!i)throw new Error("Shell: P.ROUNDEL carries no uvScale — the leaf UVs cannot be projected");return mc(e,i[0],i[1]),e.applyMatrix4(new $t().makeTranslation(n*(ei/2),0,fo).invert()),e.computeVertexNormals(),e}const Xr=Object.freeze({H:Ds,T:Pu,DISC_Y:$a,DISC_R:po,DISC_PROUD:Xp});function Yr(n,t,e,i,s,r){const o=At("wall",e,Ds,Pu,kt.ROUNDEL,{material:t.ROUNDEL,cast:!0});return o.position.set(i,Ds/2,s),o.rotation.y=r,n.add(o)}function Ff(n,t,e,i,s){const r=new Ot(new ms(po,40),t.GLOW_W);return r.position.set(e,$a,i),r.rotation.y=s,r.castShadow=!1,r.receiveShadow=!1,n.add(r)}function K2(n,t,e={}){$2(t);const i=e.liveDoors!==!1,s=Object.create(null),r=(z,U,Y)=>(s[z]=(s[z]??0)+Y,dc(U,s[z]),U),o=6.332*6.332-4*(1.366208*1.366208/2);r("DECK",kt.DECK,o-qr(et.DAIS_A)),E2(n,0,0,la,la,0,kt.DECK,{surface:"vinyl",thickness:.16});const a=n.colliders.length;r("CEIL",kt.CEIL,o),w2(n,0,0,la,la,et.CEIL_H,kt.CEIL,{surface:"ceiling",thickness:.09});const c={height:et.CEIL_H,thickness:Yt.wallThick,colour:kt.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},l=1.835,u=3.251,h=.7,f=2.2;e.archS?(Me(n,-l,-u,-h,-u,{...c,name:"archJambL"}),Me(n,-h,-u,h,-u,{...c,y0:f,height:et.CEIL_H-f,name:"archLintel"}),Me(n,h,-u,l,-u,{...c,name:"archJambR"})):Me(n,-l,-u,l,-u,{...c,name:"flatS"}),Me(n,l,-u,u,-l,{...c,name:"baySE"}),Me(n,u,-l,u,l,{...c,name:"flatE"}),Me(n,u,l,l,u,{...c,name:"bayNE"}),Me(n,l,u,.9,u,{...c,name:"pierR"}),Me(n,.9,u,-.9,u,{...c,y0:Be,height:et.CEIL_H-Be,name:"lintel"}),Me(n,-.9,u,-l,u,{...c,name:"pierL"}),Me(n,-l,u,-u,l,{...c,name:"bayNW"}),Me(n,-u,l,-u,-l,{...c,name:"flatW"}),Me(n,-u,-l,-l,-u,{...c,name:"baySW"}),n.colliders.length=a;const d=(et.STRUCT_FACE-et.CORNER_X)*Math.SQRT2,m=2*et.CORNER_X,g=4*m+4*d;r("BAND",kt.BAND,4*d*et.CEIL_H+4*m*(et.CEIL_H-2.8)-ei*(et.CEIL_H-2.8));const _={material:t.ROUNDEL,cast:!0},p=(z,U,Y,J)=>{const ut=At("wall",z,Ds,Pu,kt.ROUNDEL,_);return ut.position.set(U,Ds/2,Y),ut.rotation.y=J,n.add(ut)};if(r("ROUNDEL",kt.ROUNDEL,3*3.6*Ds+2*.9*Ds),e.archS){const z=(l-h)/1;for(const U of[-1,1])p(z,U*(h+z/2),-ir,0)}else p(3.6,0,-ir,0);p(3.6,ir,0,-Math.PI/2),p(3.6,-ir,0,Math.PI/2),p(.9,1.35,ir,Math.PI),p(.9,-1.35,ir,Math.PI),r("ROUNDEL",kt.ROUNDEL,2*W0*Be);const v=new ge;v.name="doorPivots";const M=[];if(i)for(const z of[1,-1]){const U=new Qe;U.position.set(z*(ei/2),0,fo),U.userData.side=z;const Y=new Ot(j2(z,t),t.ROUNDEL);Y.name="doorLeaf",Y.castShadow=!0,Y.receiveShadow=!0,Y.frustumCulled=!1,U.add(Y),v.add(U),M.push(U)}else for(const z of[-1,1]){const U=At("doorLeaf",W0,Be,Ya,kt.ROUNDEL,_);U.position.set(z*.45,Be/2,fo),n.add(U)}r("DARK",kt.DARK,ei*Be);const S={material:t.DARK,cast:!1},A=.575,w=2.11,E=.14,L=3.266;if(i){for(const Y of[-1,1]){const J=At("metal",ei/2-A,Be,E,kt.DARK,S);J.position.set(Y*(A+(ei/2-A)/2),Be/2,L),n.add(J)}const z=At("metal",2*A,Be-w,E,kt.DARK,S);z.position.set(0,(w+Be)/2,L),n.add(z);const U=At("metal",2*A,w,Of,kt.DARK,S);U.position.set(0,w/2,Nf),n.add(U)}else{const z=At("metal",ei,Be,Of,kt.DARK,S);z.position.set(0,Be/2,Nf),n.add(z)}const N={material:t.BAND,cast:!0};r("BAND",kt.BAND,2*sr*(Be+.045)+(ei+2*sr)*sr);for(const z of[-1,1]){const U=At("trim",sr,Be+.045,V0,kt.BAND,N);U.position.set(z*(ei/2+sr/2),(Be+.045)/2,Uf),n.add(U)}const x=At("trim",ei+2*sr,ua-Be,V0,kt.BAND,N);x.position.set(0,(Be+ua)/2,Uf),n.add(x),r("GLOW_W",kt.GLOW_W,16*Math.PI*po*po);const y=Ou(new ms(po,40)),T=[],C=(z,U,Y)=>{const J=new Ot(y,t.GLOW_W);return J.position.set(z,$a,U),J.rotation.y=Y,J.castShadow=!1,J.receiveShadow=!1,T.push(J),n.add(J)},O=et.FLAT_FACE-Xp;for(const z of[-1.35,-.45,.45,1.35])e.archS&&Math.abs(z)<h||C(z,-O,0),C(O,z,-Math.PI/2),C(-O,z,Math.PI/2);let k=null;for(const z of[-1.35,1.35])C(z,O,Math.PI);if(i){k=new qa(y,t.GLOW_W,2),k.name="doorDiscs",k.castShadow=!1,k.receiveShadow=!1,k.frustumCulled=!1,k.instanceMatrix.setUsage(go);const z=new $t;[.45,-.45].forEach((U,Y)=>{z.makeRotationY(Math.PI).setPosition(U,$a,O),k.setMatrixAt(Y,z)}),k.instanceMatrix.needsUpdate=!0,n.add(k)}else for(const z of[-.45,.45])C(z,O,Math.PI);const R=et.CORNER_X,D=et.STRUCT_FACE,F=[[-R,-D,R,-D],[R,-D,D,-R],[D,-R,D,R],[D,R,R,D],[R,D,-R,D],[-R,D,-D,R],[-D,R,-D,-R],[-D,-R,-R,-D]].map(([z,U,Y,J])=>{const ut=Y-z,lt=J-U,ht=Math.hypot(ut,lt),_t=ut/ht,xt=lt/ht;return{len:ht,nx:-xt,nz:_t,mx:(z+Y)/2,mz:(U+J)/2,angle:Math.atan2(-xt,_t)}}),X=(z,U,Y,J)=>(z.position.set(U.mx+U.nx*J,Y,U.mz+U.nz*J),z.rotation.y=U.angle,n.add(z));r("CHROME",kt.CHROME,g*(ll+ul)),r("GLOW_W",kt.GLOW_W,g*hl);for(const z of F)X(At("chrome",z.len,ll,ul,kt.CHROME,{material:t.CHROME,cast:!1}),z,ua+ll/2,H2-ul/2),X(At("trim",z.len,hl,G2,kt.GLOW_W,{material:t.GLOW_W,cast:!1}),z,ua+hl/2,0);const K=(et.COFFER_IN+et.COFFER_OUT)/2,it=cl(et.COFFER_OUT),ft=et.COFFER_OUT-et.COFFER_IN;r("CEIL",kt.CEIL,qr(et.COFFER_OUT)-qr(et.COFFER_IN)+6*it*fl),r("GLOW_C",kt.GLOW_C,6*cl(et.COFFER_IN)*dl);for(let z=0;z<6;z++){const U=z*Math.PI/3,Y=Math.sin(U),J=Math.cos(U),ut=At("ceiling",it,fl,ft,kt.CEIL,{material:t.CEIL,cast:!1});ut.position.set(K*Y,W2+fl/2,K*J),ut.rotation.y=U,n.add(ut);const lt=At("trim",cl(et.COFFER_IN),dl,.02,kt.GLOW_C,{material:t.GLOW_C,cast:!1});lt.position.set(et.COFFER_IN*Y,et.CEIL_H-dl/2,et.COFFER_IN*J),lt.rotation.y=U,n.add(lt)}r("DAIS",kt.DAIS,qr(et.DAIS_A)-qr(.62));const Q=new Ot(q2(et.DAIS_A,V2*2,et.HEX_THETA),t.DAIS);return Q.position.set(0,0,0),Q.castShadow=!1,Q.receiveShadow=!0,n.add(Q),n.userData??(n.userData={}),n.userData.collision={planes:[{nx:0,nz:1,d:et.FLAT_FACE},{nx:1,nz:0,d:et.FLAT_FACE},{nx:0,nz:-1,d:et.FLAT_FACE},{nx:-1,nz:0,d:et.FLAT_FACE},{nx:ts,nz:ts,d:et.CANT_FACE},{nx:ts,nz:-ts,d:et.CANT_FACE},{nx:-ts,nz:-ts,d:et.CANT_FACE},{nx:-ts,nz:ts,d:et.CANT_FACE}],hulls:[],boxes:[{x:0,z:fo,hw:ei/2,hd:Ya/2,rotY:0,y0:0,y1:Be}]},n.spot("spawn",et.SPAWN[0],et.SPAWN[1],et.SPAWN[2]),n.spot("doors",0,0,2.25),n.interact("doors","Doors",0,1.2,et.FLAT_FACE,"doors",{},1.4),{litDiscs:T,areas:s,doorGroup:v,leaves:M,discs:k}}for(const n of["HEX_THETA","RIM","PANEL_OUT","PANEL_IN","PANEL_Y0","PANEL_Y1","RIM_TOP"])if(typeof et[n]!="number")throw new Error(`Console.js: ROOM.${n} is missing or not a number`);const Nu=Math.PI/3,Yp=Math.tan(Math.PI/6),q0=1/Math.cos(Math.PI/6),kf=.62,pl=.7,ha=et.PANEL_IN,Z2=0,zf=.1,Bf=.72,Ni=1.32,$p=et.PANEL_Y1-et.PANEL_Y0,jp=et.PANEL_OUT-et.PANEL_IN,J2=Math.atan2($p,jp),Gi=Math.hypot($p,jp),Hf=(et.PANEL_OUT+et.PANEL_IN)/2,Gf=(et.PANEL_Y0+et.PANEL_Y1)/2,vo=et.PANEL_OUT*Yp,ja=et.PANEL_IN*Yp,Wf=J2-Math.PI/2,Kp=n=>vo+(n+Gi/2)/Gi*(ja-vo),Vf=-Gi/2+.1246,_s=-.17,Lr=_s+.34,Q2=.05,ty=Math.hypot(vo-ja,Gi),Zp=Q2/(Gi/ty),Mo=Kp(_s)-Zp,Ka=Kp(Lr)-Zp,Ee=-.012,Jp=Math.hypot(Ka-Mo,Lr-_s),ey=-.34/Jp,ny=(Ka-Mo)/Jp,fa=(n,t)=>(Math.abs(n)-Mo)*ey+(t-_s)*ny,oe=-.086,De=.05,fn=.14,es=.006,ns=.084,X0=new cn(1,1,1);X0.setAttribute("color",new de(new Float32Array(X0.attributes.position.count*3).fill(1),3));const Uu=.008,so=.005,Qp=Ee+so+Uu/2,iy=Ee-.006-Uu/2,Sn=new cn(1,1,1),ml=new ee(.5,.5,1,16),sy=new ee(.5,.5,1,8),qf=new qi(.5,10,8);function Fu(n,t,e,i,s,r,o){let a=(i[1]-e[1])*(s[2]-e[2])-(i[2]-e[2])*(s[1]-e[1]),c=(i[2]-e[2])*(s[0]-e[0])-(i[0]-e[0])*(s[2]-e[2]),l=(i[0]-e[0])*(s[1]-e[1])-(i[1]-e[1])*(s[0]-e[0]),u=e,h=i,f=s,d=r;a*o[0]+c*o[1]+l*o[2]<0&&(u=r,h=s,f=i,d=e,a=-a,c=-c,l=-l);const m=Math.hypot(a,c,l)||1;a/=m,c/=m,l/=m;for(const g of[u,h,f,u,f,d])n.push(g[0],g[1],g[2]),t.push(a,c,l)}function ku(n,t){const e=new vn;return e.setAttribute("position",new de(new Float32Array(n),3)),e.setAttribute("normal",new de(new Float32Array(t),3)),e}function Xf(n,t){const e=n*q0,i=[];for(let s=0;s<6;s++){const r=et.HEX_THETA+s*Nu;i.push([e*Math.sin(r),t,e*Math.cos(r)])}return i}function Qn(n,t,e,i,s){const r=Xf(n,t),o=Xf(e,i),a=[],c=[];for(let l=0;l<6;l++){const u=(l+1)%6,h=et.HEX_THETA+(l+.5)*Nu,f=s==="up"?[0,1,0]:s==="down"?[0,-1,0]:s==="out"?[Math.sin(h),0,Math.cos(h)]:[-Math.sin(h),0,-Math.cos(h)];Fu(a,c,r[l],r[u],o[u],o[l],f)}return ku(a,c)}function da(n,t,e,i){const s=new ee(t*q0,n*q0,i-e,6,1,!1,et.HEX_THETA).toNonIndexed();return s.computeVertexNormals(),s.translate(0,(e+i)/2,0),s}function tm(n,t,e){const i=[],s=[];for(const[r,o,a,c]of n)Fu(i,s,[r[0],r[1],t],[o[0],o[1],t],[a[0],a[1],t],[c[0],c[1],t],e);return ku(i,s)}const is=[[-vo,-Gi/2],[vo,-Gi/2],[ja,Gi/2],[-ja,Gi/2]],Rn=[[-Mo,_s],[Mo,_s],[Ka,Lr],[-Ka,Lr]],ry=tm([[is[0],is[1],Rn[1],Rn[0]],[is[1],is[2],Rn[2],Rn[1]],[is[2],is[3],Rn[3],Rn[2]],[is[3],is[0],Rn[0],Rn[3]]],0,[0,0,1]),oy=(()=>{const n=[],t=[];for(let e=0;e<4;e++){const i=Rn[e],s=Rn[(e+1)%4],r=(i[0]+s[0])/2,o=(i[1]+s[1])/2;Fu(n,t,[i[0],i[1],0],[s[0],s[1],0],[s[0],s[1],Ee],[i[0],i[1],Ee],[-r,-o,0])}return ku(n,t)})(),ay=tm([[Rn[0],Rn[1],Rn[2],Rn[3]]],Ee,[0,0,1]),cy=[{n:1,lamp:"doors",name:"DOOR CONTROL",ctl:[["lever",-.3,oe,{len:.13,lean:.35,slot:.13}],["dial",-.13,oe,{r:.07,needle:.1,rate:.2}],["dial",.045,oe,{r:.046}],["toggle",.18,oe,{tilt:.55}],["toggle",.25,oe,{tilt:-.55}],["toggle",.32,oe,{tilt:.55}],["button",-.32,De,{r:.02}],["button",-.255,De,{r:.02}],["toggle",-.16,De,{tilt:.55}],["toggle",-.1,De,{tilt:-.55}],["toggle",-.04,De,{tilt:.55}],["bar",.21,es,{w:.13,h:ns}],["lamps",-.2,fn,{n:3,pitch:.075}],["readout",.17,fn,{w:.17,h:.042,seg:3}]]},{n:2,lamp:"scanner",name:"SCANNER",ctl:[["lever",-.32,oe,{len:.115,lean:-.35,slot:.12}],["lever",-.235,oe,{len:.115,lean:.35,slot:.12}],["dial",-.08,oe,{r:.07,needle:.1,rate:.28}],["dial",.09,oe,{r:.052,needle:.066,rate:-.44}],["button",.23,oe,{r:.022}],["button",.3,oe,{r:.022}],["toggle",-.33,De,{tilt:.55}],["toggle",-.27,De,{tilt:.55}],["toggle",-.21,De,{tilt:-.55}],["bar",-.06,es,{w:.12,h:ns}],["bar",.1,es,{w:.12,h:ns}],["lamps",-.23,fn,{n:4,pitch:.07}],["readout",.19,fn,{w:.14,h:.042,seg:2}]]},{n:3,lamp:"life",name:"LIFE SUPPORT",ctl:[["dial",-.31,oe,{r:.058,needle:.078,rate:.16}],["dial",-.16,oe,{r:.058,needle:.078,rate:-.13}],["dial",-.01,oe,{r:.058,needle:.078,rate:.11}],["lever",.16,oe,{len:.13,lean:.35,slot:.13}],["button",.29,oe,{r:.024}],["button",.36,oe,{r:.018}],["toggle",-.33,De,{tilt:.55}],["toggle",-.27,De,{tilt:-.55}],["toggle",-.21,De,{tilt:.55}],["toggle",-.15,De,{tilt:-.55}],["bar",0,es,{w:.11,h:ns}],["bar",.15,es,{w:.11,h:ns}],["lamps",-.23,fn,{n:4,pitch:.07}],["readout",.19,fn,{w:.14,h:.042,seg:3}]]},{n:4,lamp:"nav",name:"NAVIGATION",ctl:[["dial",-.3,oe,{r:.058,needle:.078,rate:.24}],["dial",-.16,oe,{r:.058,needle:.078,rate:-.19}],["dial",-.02,oe,{r:.058,needle:.078,rate:.31}],["dial",.14,oe,{r:.07,needle:.1,rate:.09}],["guarded",.31,oe,{tilt:-.6}],["lamps",-.25,De,{n:6,pitch:.078}],["toggle",.26,De,{tilt:.55}],["toggle",.32,De,{tilt:-.55}],["readout",-.28,fn,{w:.085,h:.042,seg:2}],["readout",-.168,fn,{w:.085,h:.042,seg:2}],["readout",-.056,fn,{w:.085,h:.042,seg:2}],["readout",.056,fn,{w:.085,h:.042,seg:2}],["readout",.168,fn,{w:.085,h:.042,seg:2}],["readout",.28,fn,{w:.085,h:.042,seg:2}]]},{n:5,lamp:"flight",name:"FLIGHT",ctl:[["lever",-.3,oe,{len:.15,lean:.3,slot:.15,big:!0}],["lever",-.17,oe,{len:.13,lean:-.35,slot:.13}],["dial",0,oe,{r:.07,needle:.1,rate:.36}],["dial",.17,oe,{r:.052,needle:.066,rate:-.22}],["button",.3,oe,{r:.022}],["bar",-.3,es,{w:.11,h:ns}],["bar",-.165,es,{w:.11,h:ns}],["toggle",.03,De,{tilt:.55}],["toggle",.09,De,{tilt:-.55}],["toggle",.15,De,{tilt:.55}],["lamps",-.22,fn,{n:4,pitch:.074}],["readout",.19,fn,{w:.14,h:.042,seg:2}]]},{n:6,lamp:"diag",name:"DIAGNOSTIC",ctl:[["button",-.31,oe,{r:.038,lamp:!0}],["dial",-.17,oe,{r:.062,needle:.084,rate:.26}],["dial",-.01,oe,{r:.062,needle:.084,rate:-.17}],["column",.29,-.1,{n:8,pitch:.03}],["toggle",-.33,De,{tilt:.55}],["toggle",-.27,De,{tilt:-.55}],["button",-.18,De,{r:.02}],["button",-.115,De,{r:.02}],["bar",.02,es,{w:.11,h:ns}],["lamps",-.23,fn,{n:3,pitch:.074}],["readout",.07,fn,{w:.11,h:.042,seg:2}]]}];function ly(n,t,e={}){if(!t||!t.CONSOLE||!t.PANEL||!t.DARK||!t.CHROME||!t.GLOW_C)throw new Error("Console.js: consoleUnit(b, P) needs the palette from roundels.js");const i=new ge;i.name="console",n.add(i);const s=(C,O,k,R,D,F,X,K)=>{const it=new Ot(O,k);return it.position.set(R,D,F),X&&it.scale.set(X[0],X[1],X[2]),K&&it.rotation.set(K[0],K[1],K[2]),it.castShadow=!1,it.receiveShadow=!0,C.add(it),it};s(i,da(kf,kf,Z2,zf),t.CONSOLE,0,0,0),s(i,da(pl,pl,zf,Bf),t.CONSOLE,0,0,0),s(i,da(pl,et.PANEL_OUT,Bf,et.PANEL_Y0),t.CONSOLE,0,0,0),e.collar!==!1&&s(i,da(ha,ha,et.PANEL_Y1,Ni),t.CONSOLE,0,0,0),s(i,Qn(et.PANEL_OUT,et.PANEL_Y0,et.PANEL_OUT,et.RIM_TOP,"in"),t.CONSOLE,0,0,0),s(i,Qn(et.PANEL_OUT,et.PANEL_Y0,et.RIM,et.RIM_TOP,"out"),t.CONSOLE,0,0,0),s(i,Qn(et.PANEL_OUT,et.RIM_TOP,et.RIM,et.RIM_TOP,"up"),t.CONSOLE,0,0,0);const r=et.PANEL_OUT-.008,o=et.RIM,a=et.RIM_TOP-.002,c=et.RIM_TOP+.014;s(i,Qn(o,a,o,c,"out"),t.CHROME,0,0,0),s(i,Qn(r,a,r,c,"in"),t.CHROME,0,0,0),s(i,Qn(r,c,o,c,"up"),t.CHROME,0,0,0),s(i,Qn(r,a,o,a,"down"),t.CHROME,0,0,0);const l=ha-.006,u=ha+.01;s(i,Qn(u,Ni-.01,u,Ni+.004,"out"),t.CHROME,0,0,0),s(i,Qn(l,Ni-.01,l,Ni+.004,"in"),t.CHROME,0,0,0),s(i,Qn(l,Ni+.004,u,Ni+.004,"up"),t.CHROME,0,0,0),s(i,Qn(l,Ni-.01,u,Ni-.01,"down"),t.CHROME,0,0,0);const h=[],f=[],d=[];let m=1/0;for(let C=0;C<6;C++){const O=C*Nu,k=cy[C],R=new ge;R.rotation.y=O,i.add(R);const D=new ge;D.position.set(0,Gf,Hf),D.rotation.x=Wf,R.add(D),d.push(new $t().makeRotationY(O).multiply(new $t().makeTranslation(0,Gf,Hf)).multiply(new $t().makeRotationX(Wf))),s(D,ry,t.PANEL,0,0,0),s(D,oy,t.PANEL,0,0,0),s(D,ay,t.DARK,0,0,0),m=Math.min(m,uy(D,C,k,t,s,h));const F=et.RIM*Math.sin(O),X=et.RIM*Math.cos(O),K=(O+Math.PI)%(Math.PI*2),it=(et.RIM+.9)*Math.sin(O),ft=(et.RIM+.9)*Math.cos(O);n.spot(`panel${k.n}`,it,0,ft),n.interact(`panel${k.n}`,k.name,F,et.RIM_TOP,X,"panel",{panel:k.n},1.2),f.push({id:`panel${k.n}`,panel:k.n,lamp:k.lamp,name:k.name,azimuth:O,azimuthDeg:C*60,anchor:[F,et.RIM_TOP,X],stand:[it,ft],yaw:K})}m<Vf&&console.error(`Console.js: a control reaches v ${m.toFixed(4)}, outboard of the sightline limit ${Vf.toFixed(4)} — the rim upstand hides it from a standing player (§6.3)`);const g=new qa(X0,t.GLOW_C,Math.max(h.length,1));g.name="consoleLamps",g.instanceMatrix.setUsage(go),g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!1,n.add(g);const _=f.map(()=>({active:!1,blinkLeft:0,blinkT:0})),p=new Map;f.forEach((C,O)=>{p.set(C.id,O),p.set(C.lamp,O),p.set(C.panel,O),p.set(String(C.panel),O)});let v=0;const M=new $t,S=new Pr,A=new ui,w=new H,E=new H;function L(C,O){return O.blinkLeft>0?(O.blinkLeft&1)===1:O.active?!0:(Math.floor(v/.55)+C.slot)%3===0}function N(C,O){const k=_[O.pi];let R=O.x,D=O.v,F=O.z,X=O.sy,K=O.rz;if(O.kind==="lamp")F=L(O,k)?Qp:iy;else if(O.kind==="needle")K=O.rz+O.spin;else if(O.kind==="bar"){const it=.18+.82*(.5+.5*Math.sin(v*O.rate+O.phase));X=O.sy*it,D=O.v+X/2}A.set(0,0,K),S.setFromEuler(A),w.set(R,D,F),E.set(O.sx,X,O.sz),M.compose(w,S,E).premultiply(d[O.pi]),g.setMatrixAt(C,M)}function x(){for(let C=0;C<h.length;C++)N(C,h[C]);g.instanceMatrix.needsUpdate=!0}x(),n.userData=n.userData||{};const y=n.userData.collision=n.userData.collision||{planes:[],hulls:[],boxes:[]};y.hulls=y.hulls||[];const T={apothem:et.RIM,y1:1.2};return y.hulls.push(T),{panels:f,setLamp(C,O){const k=p.get(C);k!==void 0&&(_[k].active=!!O)},blink(C,O=1){const k=p.get(C);k!==void 0&&(_[k].blinkLeft=Math.max(1,Math.round(O)*2),_[k].blinkT=0)},update(C){if(C>0){v+=C;for(let O=0;O<_.length;O++){const k=_[O];if(k.blinkLeft>0)for(k.blinkT+=C;k.blinkT>=.085&&k.blinkLeft>0;)k.blinkT-=.085,k.blinkLeft--}for(const O of h)O.kind==="needle"&&(O.spin+=O.rate*C*(_[O.pi].active?3.2:1));x()}},hull:T}}function Yf(n,t,e,i){const s=n+Math.cos(Math.PI/2+t)*e;return[Math.min(n,s-i),Math.max(n,s+i)]}const _l=.03,gl=.036,pa=.013;function $f(n,t,e){const i=Math.cos(t),s=Math.sin(t);if(Math.abs(Math.cos(e)-i)>1e-9||Math.abs(Math.sin(e)-s)>1e-9){const r=((e-t)*180/Math.PI).toFixed(1);console.error(`Console.js: ${n}'s shaft is rotated ${r} degrees away from the direction its own position maths uses — it will be drawn lying where it is placed standing`)}}function uy(n,t,e,i,s,r){let o=1/0;const a=(h,f,d,m)=>console.error(`Console.js: panel ${e.n} ${h} at x ${f.toFixed(3)} v ${d.toFixed(3)} ${m}`),c=(h,f,d,m,g)=>{o=Math.min(o,m),m<_s-1e-9&&a(h,f,d,`overhangs the recess lip (v0 ${m.toFixed(4)} < ${_s})`),g>Lr+1e-9&&a(h,f,d,`overhangs the inner lip (v1 ${g.toFixed(4)} > ${Lr.toFixed(3)})`)},l=(h,f,d,m,g,_)=>{c(h,f,d,g,_);const p=Math.abs(f)+m;Math.min(fa(p,g),fa(p,_))<-1e-9&&a(h,f,d,"runs off the field")},u=(h,f,d,m)=>{c(h,f,d,d-m,d+m),fa(f,d)<m-1e-9&&a(h,f,d,`runs off the field (clear ${fa(f,d).toFixed(4)} < r ${m})`)};for(const[h,f,d,m={}]of e.ctl)switch(h){case"toggle":case"guarded":{const g=h==="guarded",[_,p]=Yf(d,m.tilt,gl,pa),v=g?.0225:.017;l(h,f,d,g?.0265:.017,Math.min(_,d-v),Math.max(p,d+v)),s(n,Sn,i.CHROME,f,d,Ee+.0025,[.032,.03,.005]);const M=Math.PI/2+m.tilt,S=Math.cos(M),A=Math.sin(M);$f(h,M,M),s(n,Sn,i.CHROME,f,d+S*(_l/2+.004),Ee+.005+A*(_l/2+.004),[.008,_l,.008],[M,0,0]),s(n,qf,i.CHROME,f,d+S*gl,Ee+.005+A*gl,[pa*2,pa*2,pa*2]),g&&(s(n,Sn,i.CHROME,f-.024,d,Ee+.02,[.005,.044,.04]),s(n,Sn,i.CHROME,f+.024,d,Ee+.02,[.005,.044,.04]),s(n,Sn,i.CHROME,f,d-.02,Ee+.02,[.053,.005,.04]));break}case"button":{u("button",f,d,m.r+.004),s(n,ml,i.CHROME,f,d,Ee+.004,[m.r*2+.008,.008,m.r*2+.008],[Math.PI/2,0,0]),m.lamp?r.push(xl(t,f,d,m.r*1.55,m.r*1.55,r.length)):s(n,ml,i.CHROME,f,d,Ee+.012,[m.r*2,.016,m.r*2],[Math.PI/2,0,0]);break}case"dial":{u("dial",f,d,Math.max(m.r+.012,(m.needle||0)/2)),s(n,ml,i.CHROME,f,d,Ee+.006,[m.r*2,.012,m.r*2],[Math.PI/2,0,0]);const g=m.r+.008;for(let _=0;_<8;_++){const p=_*Math.PI/4;s(n,Sn,i.CHROME,f+g*Math.cos(p),d+g*Math.sin(p),Ee+.003,[.004,.011,.006],[0,0,p-Math.PI/2])}s(n,sy,i.CHROME,f,d,Ee+.016,[m.r*.42,.018,m.r*.42],[Math.PI/2,0,0]),m.needle&&r.push({pi:t,kind:"needle",x:f,v:d,z:Ee+.016,sx:.006,sy:m.needle,sz:.005,rz:0,spin:(t*1.7+m.needle*37)%(Math.PI*2),rate:m.rate??.2});break}case"lever":{const g=Math.PI/2+m.lean,_=Math.cos(g),p=Math.sin(g),v=m.big?.038:.03,M=m.big?.03:.022,S=d-Math.sign(_)*(m.slot/2-.012),A=.034,w=.044,E=Ee+A/2,L=Ee+.024,[N,x]=Yf(S,m.lean,m.len+.01,M);l("lever",f,d,Math.max(v,w)/2+.007,Math.min(N,d-m.slot/2,S-w/2),Math.max(x,d+m.slot/2,S+w/2)),s(n,Sn,i.DARK,f,d,Ee+.0015,[v,m.slot,.003]),s(n,Sn,i.CHROME,f,S,E,[v+.02,w,A]),$f("lever",g,g),s(n,Sn,i.CHROME,f,S+_*(m.len/2),L+p*(m.len/2),[m.big?.016:.012,m.len,m.big?.016:.012],[g,0,0]),s(n,qf,i.CHROME,f,S+_*(m.len+.01),L+p*(m.len+.01),[M*2,M*2,M*2]);break}case"bar":{l("bar",f,d,m.w/2+.005,d-.005,d+m.h+.005),jf(n,i,s,f,d+m.h/2,m.w,m.h);const g=Math.max(1,Math.round(m.w/.052)),_=(m.w-.012)/g;for(let p=0;p<g;p++)r.push({pi:t,kind:"bar",x:f-m.w/2+.006+_*(p+.5),v:d+.004,z:Ee+.005,sx:_*.72,sy:m.h-.01,sz:.006,rz:0,rate:.7+p*.23,phase:p*1.7+t});break}case"readout":{l("readout",f,d,m.w/2+.005,d-m.h/2-.005,d+m.h/2+.005),jf(n,i,s,f,d,m.w,m.h);const g=m.seg??2,_=(m.w-.012)/g;for(let p=0;p<g;p++)r.push({pi:t,kind:"bar",x:f-m.w/2+.006+_*(p+.5),v:d-m.h/2+.005,z:Ee+.005,sx:_*.66,sy:m.h-.012,sz:.006,rz:0,rate:1.4+p*.6+t*.11,phase:p*2.3+t*.8});break}case"lamps":{for(let g=0;g<m.n;g++){const _=f+g*m.pitch;l("lamp",_,d,.02,d-.016,d+.016),s(n,Sn,i.CHROME,_,d,Ee+so/2,[.04,.032,so]),r.push(xl(t,_,d,.03,.022,r.length))}break}case"column":{for(let g=0;g<m.n;g++){const _=d+g*m.pitch;l("column lamp",f,_,.017,_-.012,_+.012),s(n,Sn,i.CHROME,f,_,Ee+so/2,[.034,.024,so]),r.push(xl(t,f,_,.024,.015,r.length))}break}default:console.error(`Console.js: panel ${e.n} has an unknown control kind '${h}'`)}return o}function jf(n,t,e,i,s,r,o){const c=Ee+.003;e(n,Sn,t.CHROME,i,s+o/2,c,[r+.005*2,.005,.007]),e(n,Sn,t.CHROME,i,s-o/2,c,[r+.005*2,.005,.007]),e(n,Sn,t.CHROME,i-r/2-.005/2,s,c,[.005,o,.007]),e(n,Sn,t.CHROME,i+r/2+.005/2,s,c,[.005,o,.007])}function xl(n,t,e,i,s,r){return{pi:n,kind:"lamp",x:t,v:e,z:Qp,sx:i,sy:s,sz:Uu,rz:0,slot:r}}const hy=1/Math.cos(Math.PI/6),$r={y0:1.16,y1:1.32,apothem:.56},jr={y0:2.36,y1:2.48,apothem:.3},Un={y0:1.32,y1:2.36,r:.26,segments:24},fy=.008,He={y0:1.4,y1:2.32,h:.62,r:.2,ringR:.214,ringH:.03,pistonR:.038,pistonH:.42},dy=He.y1-He.y0-He.h,vl=He.y0+He.h/2,py=He.y1-He.h/2,Kr={count:6,radius:.31,section:.028},my=3.2,_y=1.6,gy=2.4;function Kf(n,t){const e=n*hy,i=new ee(e,e,t,6,1,!1,et.HEX_THETA).toNonIndexed();return i.computeVertexNormals(),i}function xy(n){const t=n.getIndex();for(let i=0;i<t.count;i+=3){const s=t.getX(i+1);t.setX(i+1,t.getX(i+2)),t.setX(i+2,s)}t.needsUpdate=!0;const e=n.getAttribute("normal");for(let i=0;i<e.count;i++)e.setXYZ(i,-e.getX(i),-e.getY(i),-e.getZ(i));return e.needsUpdate=!0,n}function vy(n,t){Co(t.GLASS);const e=Un.y1-Un.y0,i=(Un.y0+Un.y1)/2,s=new Ot(new ee(Un.r,Un.r,e,Un.segments,1,!0),t.GLASS);if(s.position.y=i,n.add(s),t.GLASS.side===li){const r=Un.r-fy,o=new Ot(xy(new ee(r,r,e,Un.segments,1,!0)),t.GLASS);o.position.y=i,n.add(o)}}function My(n){const t=new ge,e=He.h/3,i=e-He.ringH,s=new ee(He.ringR,He.ringR,He.ringH,20,1,!1),r=new ee(He.r,He.r,i,20,1,!1);for(let c=0;c<3;c++){const l=-.31+c*e,u=new Ot(s,n.CHROME);u.position.y=l+He.ringH/2,t.add(u);const h=new Ot(r,n.GLOW_C);h.position.y=l+He.ringH+i/2,t.add(h)}const o=new Ot(new ee(He.pistonR,He.pistonR,He.pistonH,12,1,!1),n.CHROME);o.position.y=-.62/2-He.pistonH/2,t.add(o);const a=pc(t);return a.name="rotorCarriage",a}function yy(n,t,e={}){const i=e.period??my,s=e.stroke??dy,r=Math.PI*2/i;if(e.collar!==!1){const g=new Ot(Kf($r.apothem,$r.y1-$r.y0),t.CONSOLE);g.position.y=($r.y0+$r.y1)/2,n.add(g)}vy(n,t);const o=new cn(Kr.section,Un.y1-Un.y0,Kr.section);for(let g=0;g<Kr.count;g++){const _=et.HEX_THETA+g*Math.PI/3,p=new Ot(o,t.DAIS);p.position.set(Math.sin(_)*Kr.radius,(Un.y0+Un.y1)/2,Math.cos(_)*Kr.radius),p.rotation.y=_,n.add(p)}if(e.cap!==!1){const g=new Ot(Kf(jr.apothem,jr.y1-jr.y0),t.CONSOLE);g.position.y=(jr.y0+jr.y1)/2,n.add(g)}n.interactables.some(g=>g.id==="rotor")||n.interact("rotor","Time Rotor",0,1.84,0,"rotor",{},2.4);const a=new ge;a.name="timeRotor";const c=My(t);a.add(c);let l=e.running?1:0,u=l,h=l,f=0,d=vl+s*h*.5*(1-Math.cos(f));c.position.y=d;function m(g){g>0&&(g>.1&&(g=.1),u>l?l=Math.min(1,l+g/_y):u<l&&(l=Math.max(0,l-g/gy)),h=l*l*(3-2*l),l===0?f=0:f=(f+r*(.45+.55*h)*g)%(Math.PI*2),d=vl+s*h*.5*(1-Math.cos(f)),c.position.y=d)}return{group:a,setRunning(g){u=g?1:0},update:m,get height(){return d},get drive(){return h},get running(){return u===1},parked:vl,apex:py}}const Ze=(et==null?void 0:et.BAY_CENTRE)??2.362686,ro=(et==null?void 0:et.BAY_W)??1.4,Os=(et==null?void 0:et.BAY_D)??.34,Wn=(et==null?void 0:et.BAY_H)??2.2;et==null||et.CANT_LEN;const xr=ro/2,vr=Os/2,Zf={scanner:{x:Ze,z:Ze,rotY:-2.356194},fault:{x:-Ze,z:Ze,rotY:2.356194},food:{x:Ze,z:-Ze,rotY:-.785398}},ps=vr,si=.05,Jf=.052,Sy=.076,Y0=.095,Ml=.6,$0=.78,Qf=.018,Ey=.35,wy=1.2,j0=1.785,Ns=8,Za=6,em=.1375,nm=.15,by=.02,im=1.55,yo=Ns*Za,Ay=4,Ty=2,Ry=0,Ly=1,Cy=2,Iy=3,Dy=yo,Py=yo+1,Oy=yo+2,Ny=n=>n*n*(3-2*n),qe={unitBox:td(new cn(1,1,1)),unitDisc:td(new ms(1,20)),rotary:new ee(.034,.038,.03,12),rotaryCap:new ee(.012,.012,.014,8),pilot:new ee(.014,.014,.01,10),hook:new ee(.009,.009,.1,8),hookBall:new qi(.016,8,6),finial:new qi(.044,10,8),standBase:new ee(.12,.28,.045,16),standTaper:new ee(.046,.12,.16,12),standPole:new ee(.028,.034,1.42,12),standCollar:new ee(.056,.056,.052,12),hatCrown:new ee(.088,.094,.105,12),hatBrim:new ee(.15,.15,.012,16),dial:new ee(.128,.128,.022,20),clockFinial:new ee(.024,.034,.052,10),packet:new ee(.028,.028,.11,8)};function td(n){const t=n.attributes.position.count;return n.setAttribute("color",new de(new Float32Array(t*3).fill(1),3)),n}function Gt(n,t,e,i,s,r,o,a,c={}){const l=new Ot(c.chamfer===0?new cn(Math.max(e,.001),Math.max(i,.001),Math.max(s,.001)):ks(e,i,s,c.chamfer??.003),t);return l.position.set(r,o,a),c.rotX&&(l.rotation.x=c.rotX),c.rotY&&(l.rotation.y=c.rotY),c.rotZ&&(l.rotation.z=c.rotZ),l.receiveShadow=!0,n.add(l),l}function en(n,t,e,i,s,r,o={}){const a=new Ot(t,e);return a.position.set(i,s,r),o.rotX&&(a.rotation.x=o.rotX),o.rotY&&(a.rotation.y=o.rotY),o.rotZ&&(a.rotation.z=o.rotZ),o.scale&&a.scale.set(o.scale[0],o.scale[1],o.scale[2]),a.receiveShadow=!0,n.add(a),a}function zu(n,t,e,i,s,r,o,a,c){const l=c-a/2;Gt(n,t,e,o,a,s,r+i/2-o/2,l,{chamfer:.002}),Gt(n,t,e,o,a,s,r-i/2+o/2,l,{chamfer:.002});const u=i-o*2;Gt(n,t,o,u,a,s-e/2+o/2,r,l,{chamfer:.002}),Gt(n,t,o,u,a,s+e/2-o/2,r,l,{chamfer:.002})}function Bu(n,t,e){Gt(n,t.DAIS,ro-.06,.1,Os-.06,0,.05,0,{chamfer:.004}),Gt(n,t.CONSOLE,ro,Wn-.1,.06,0,1.15,-vr+.03);for(const a of[-1,1])Gt(n,t.CONSOLE,.11,Wn-.1,Os,a*(xr-.055),1.15,0,{chamfer:.005});Gt(n,t.CONSOLE,ro,.03,Os,0,Wn-.015,0,{chamfer:.005});const i=ro-.22,s=(ps+si)/2,r=ps-si;let o=.1;for(const a of e){a[0]>o+.001&&Gt(n,t.CONSOLE,i,a[0]-o,r,0,(o+a[0])/2,s,{chamfer:.004});const c=a[2]??si;if(Gt(n,t.DARK,i,a[1]-a[0],.014,0,(a[0]+a[1])/2,c-.007,{chamfer:0}),c<si-.001){const l=si-c;for(const u of[-1,1])Gt(n,t.DARK,.014,a[1]-a[0],l,u*(i/2-.007),(a[0]+a[1])/2,c+l/2,{chamfer:0});for(const u of[-1,1])Gt(n,t.DARK,i,.014,l,0,a[u>0?1:0]-u*.007,c+l/2,{chamfer:0})}o=a[1]}return o<Wn-.031&&Gt(n,t.CONSOLE,i,Wn-.03-o,r,0,(o+Wn-.03)/2,s,{chamfer:.004}),{innerW:i,zA:s,dA:r}}function sm(n,t,e,i,s){return Gt(n,t.PANEL,e,i,.016,0,s,ps-.028,{chamfer:.003})}function Uy(n,t){Bu(n,t,[[1.4,2.17]]),zu(n,t.CHROME,1.16,.75,0,1.795,.03,.024,Sy);const e=.962,i=e-xr,s=.245,r=1.34;for(const a of[-1,1]){const c=a*(xr+i/2);Gt(n,t.DAIS,i-.03,.1,Os-.06,c,.05,0,{chamfer:.004}),Gt(n,t.CONSOLE,i,r-.1,Os,c,(.1+r)/2,0,{chamfer:.005}),Gt(n,t.CONSOLE,i,Wn-r,s,c,(r+Wn)/2,-vr+s/2,{chamfer:.005})}Gt(n,t.CONSOLE,e*2,.03,Os,0,Wn+.015,0,{chamfer:.005});for(const a of[-1,1])Gt(n,t.CHROME,e*2-.012,.016,.022,0,j0+a*($0/2+.012),Y0,{chamfer:.002});const o=new ge;o.position.set(0,1.07,.118),o.rotation.x=-.436,n.add(o),Gt(o,t.PANEL,1.18,.2,.02,0,0,0,{chamfer:.004});for(let a=0;a<3;a++){const c=-.36+a*.36;en(o,qe.rotary,t.CHROME,c,.03,.025,{rotX:Math.PI/2}),en(o,qe.rotaryCap,t.CHROME,c,.03,.046,{rotX:Math.PI/2})}for(let a=0;a<2;a++){const c=-.18+a*.36;Gt(o,t.DARK,.07,.034,.014,c,-.052,.014,{chamfer:.002}),Gt(o,t.CHROME,.018,.04,.014,c,-.046,.016,{rotZ:.35,chamfer:.002})}for(const a of[-1,1])en(o,qe.pilot,t.GLOW_C,a*.52,.03,.014,{rotX:Math.PI/2})}function Fy(n,t){Bu(n,t,[[1.1,2.06]]);const e=im,i=si+.008;for(let s=0;s<=Ns-2;s++)Gt(n,t.CHROME,.006,.9,.016,(s-3)*em,e,i,{chamfer:0});for(let s=0;s<=Za-2;s++)Gt(n,t.CHROME,1.1,.006,.016,0,e+(s-2)*nm,i,{chamfer:0});zu(n,t.CHROME,1.16,.96,0,e,.028,.02,si+.02),sm(n,t,1.18,.14,1.03),Gt(n,t.DARK,.9,.05,.02,0,1.05,ps-.04,{chamfer:0}),Gt(n,t.CHROME,.94,.014,.024,0,1.016,ps-.018,{chamfer:.002});for(let s=0;s<6;s++)Gt(n,t.DAIS,.15,.036,.014,-.475+s*.19,2.115,ps-.02,{chamfer:.002})}function ky(n,t){Bu(n,t,[[.74,.98,0],[1.27,1.93,-.1]]),Gt(n,t.DAIS,.47,.014,.17,0,.793,.082,{chamfer:.002}),Gt(n,t.DAIS,.47,.03,.014,0,.812,.15,{chamfer:.002}),Gt(n,t.DARK,.44,.04,.016,0,.95,si-.03,{chamfer:0}),Gt(n,t.CHROME,.48,.014,.02,0,.926,si-.014,{chamfer:.002}),sm(n,t,1.18,.2,1.2);for(let i=0;i<4;i++)for(let s=0;s<3;s++)Gt(n,t.CHROME,.09,.028,.014,-.4125+i*.275,1.14+s*.05,ps-.013,{chamfer:.002});const e=new Ot(new Ai(.9,.6),t.GLASS);e.position.set(0,1.6,.1),e.receiveShadow=!0,n.add(e),zu(n,t.CHROME,.96,.66,0,1.6,.03,.026,.126);for(const i of[1.42,1.68]){Gt(n,t.DAIS,.86,.014,.18,0,i,0,{chamfer:0});for(let s=0;s<3;s++)en(n,qe.packet,t.DAIS,-.26+s*.26,i+.062,.01)}for(let i=0;i<5;i++)Gt(n,t.DAIS,.6,.014,.02,0,2.01+i*.03,ps-.016,{rotX:-.35,chamfer:0})}function zy(n,t){en(n,qe.standBase,t.JOINERY,0,.0225,0),en(n,qe.standTaper,t.JOINERY,0,.125,0),en(n,qe.standPole,t.JOINERY,0,.915,0),en(n,qe.standCollar,t.JOINERY,0,1.62,0),en(n,qe.finial,t.JOINERY,0,1.676,0);for(let i=0;i<4;i++){const s=new ge;s.rotation.y=Math.PI/4+i*Math.PI/2,n.add(s),en(s,qe.hook,t.CHROME,0,1.64,.075,{rotX:1.05}),en(s,qe.hookBall,t.CHROME,0,1.665,.118)}const e=new ge;e.position.set(.098,1.612,.098),e.rotation.set(.3,Math.PI/4,.1),n.add(e),en(e,qe.hatCrown,t.JOINERY,0,.052,0),en(e,qe.hatBrim,t.JOINERY,0,.006,0)}function By(n,t){Gt(n,t.JOINERY,.56,.055,.52,0,.44-.028,.02,{chamfer:.008});for(const i of[-1,1])Gt(n,t.JOINERY,.05,.44-.055,.05,i*.255,(.44-.055)/2,.23,{chamfer:.005}),Gt(n,t.JOINERY,.052,1.15,.052,i*.255,.575,-.222,{rotX:-.06,chamfer:.005});Gt(n,t.JOINERY,.46,.52,.038,0,.81,-.202,{rotX:-.06,chamfer:.006}),Gt(n,t.JOINERY,.59,.105,.062,0,1.098,-.24,{rotX:-.06,chamfer:.008});for(let i=0;i<3;i++)for(let s=0;s<2;s++)en(n,qe.rotaryCap,t.CHROME,-.14+i*.14,.72+s*.18,-.18+(.72+s*.18-.81)*.06,{rotX:Math.PI/2-.06});Gt(n,t.JOINERY,.56,.07,.04,0,.377,.255,{chamfer:.004}),Gt(n,t.JOINERY,.5,.028,.028,0,.15,.03,{chamfer:.003})}function Hy(n,t){Gt(n,t.JOINERY,.52,.06,.42,0,.03,0,{chamfer:.006}),Gt(n,t.JOINERY,.44,.63,.34,0,.375,0,{chamfer:.005}),Gt(n,t.JOINERY,.52,.06,.42,0,.72,0,{chamfer:.006}),Gt(n,t.JOINERY,.36,.48,.24,0,.99,0,{chamfer:.006}),Gt(n,t.JOINERY,.4,.07,.28,0,1.265,0,{chamfer:.006}),en(n,qe.clockFinial,t.JOINERY,0,1.326,0),en(n,qe.dial,t.CHROME,0,1.01,.125,{rotX:Math.PI/2}),Gt(n,t.DARK,.014,.088,.01,0,1.048,.14,{chamfer:0}),Gt(n,t.DARK,.062,.012,.01,.025,1.01,.14,{rotZ:.35,chamfer:0});for(const e of[-1,1])en(n,qe.rotaryCap,t.CHROME,e*.19,1.265,.1)}const Zr=new $t,Gy=new $t,Wy=new H;function rr(n,t,e,i,s,r,o,a,c,l=0){l?(Zr.makeRotationX(l),Zr.scale(Wy.set(o,a,c))):Zr.makeScale(o,a,c),Zr.setPosition(i,s,r),n.setMatrixAt(t,Gy.multiplyMatrices(e,Zr))}const rm=[];for(let n=0;n<Za;n++)for(let t=0;t<Ns;t++)rm.push({x:(t-(Ns-1)/2)*em,y:im+(n-(Za-1)/2)*nm});const or=.001,Vy=n=>Math.imul(n+1,2654435761)>>>0;function qy(n,t,e){const i=Vy(n);if(e){const s=n%Ns,r=Math.floor(t*9)%Ns;return s===r||s===(r+4)%Ns?!0:(i>>>(Math.floor(t*6)&15)&1)===1}return((i>>>3)+Math.floor(t/.9))%11<2}function Xy(n,t){const e=t||qp(),i={};for(const x of Object.keys(Zf)){const y=Zf[x],T=new ge;T.name=`bay.${x}`,T.position.set(y.x,0,y.z),T.rotation.y=y.rotY,n.add(T),i[x]=new $t().makeRotationY(y.rotY).setPosition(y.x,0,y.z),x==="scanner"?Uy(T,e):x==="fault"?Fy(T,e):ky(T,e)}const s=[{name:"hatStand",x:-1.525,z:-2.6413,rotY:0,build:zy},{name:"chair",x:-2.5115,z:-1.45,rotY:1.047198,build:By},{name:"clock",x:-2.192,z:-2.192,rotY:.785398,build:Hy}];for(const x of s){const y=new ge;y.name=x.name,y.position.set(x.x,0,x.z),y.rotation.y=x.rotY,n.add(y),x.build(y,e)}const r=new ge;r.name="fittings.live";const o=new Ot(new Ai(1.1,.72),new oi({color:855826,toneMapped:!1}));o.name="scannerScreen",o.matrixAutoUpdate=!1,o.matrix.copy(i.scanner).multiply(new $t().setPosition(0,1.8,Jf+.01)),o.matrixWorldNeedsUpdate=!0,r.add(o);const a=new qa(qe.unitBox,e.DARK,Iy),c=new qa(qe.unitDisc,e.GLOW_C,Oy);for(const x of[a,c])x.instanceMatrix.setUsage(go),x.frustumCulled=!1,x.castShadow=!1,x.receiveShadow=!0,r.add(x);let l=0,u=0,h=!0,f=-1,d=-1,m=0;const g=new Uint8Array(yo).fill(255);function _(){const x=Ny(l)*Ey;rr(a,Ry,i.scanner,-.3-x,j0,Y0,Ml,$0,Qf),rr(a,Ly,i.scanner,Ml/2+x,j0,Y0,Ml,$0,Qf);const y=h?or:1;rr(a,Cy,i.scanner,0,1.8,Jf+.006,1.1*y,.72*y,.006),a.instanceMatrix.needsUpdate=!0}function p(){const x=d>=0&&d<.9&&(Math.floor(d*14)&1)===0;rr(c,Dy,i.food,0,.95,si-.018,x?.22:or,x?.014:or,1);const y=d;let T=-1;if(y>=.15&&y<1.75){const O=Math.min((y-.15)/.4,1);T=.945+(.805-.945)*(O*O)}const C=T>0;rr(c,Py,i.food,0,C?T:.805,.07,C?.05:or,C?.013:or,1,-Math.PI/2)}function v(x){const y=f>=0;let T=x;for(let C=0;C<yo;C++){const O=qy(C,m,y)?1:0;if(O===g[C]&&!x)continue;g[C]=O;const k=rm[C],R=O?by:or;rr(c,C,i.fault,k.x,k.y,si+.006,R,R,1),T=!0}return T}_(),p(),v(!0),c.instanceMatrix.needsUpdate=!0;const M=n.userData.collision||(n.userData.collision={planes:[],hulls:[],boxes:[]});M.boxes||(M.boxes=[]),M.boxes.push({x:Ze,z:Ze,hw:xr,hd:vr,rotY:-2.356194,y0:0,y1:Wn},{x:-Ze,z:Ze,hw:xr,hd:vr,rotY:2.356194,y0:0,y1:Wn},{x:Ze,z:-Ze,hw:xr,hd:vr,rotY:-.785398,y0:0,y1:Wn},{x:-1.525,z:-2.6413,hw:.28,hd:.28,rotY:3.665191,y0:0,y1:1.72},{x:-2.5115,z:-1.45,hw:.31,hd:.34,rotY:1.047198,y0:0,y1:1.15},{x:-2.192,z:-2.192,hw:.25,hd:.2,rotY:.785398,y0:0,y1:1.35}),nr(n,Ze,Ze,0,1.1,1.1,{margin:.06}),nr(n,-Ze,Ze,0,1.1,1.1,{margin:.06}),nr(n,Ze,-Ze,0,1.1,1.1,{margin:.06}),nr(n,-2.192,-2.192,0,.58,.58,{margin:.05}),nr(n,-1.525,-2.6413,0,.56,.56,{margin:.08}),nr(n,-2.5115,-1.45,0,.66,.66,{margin:.05});const S=[["scanner","Scanner",2.242455,1.8,2.242455,1.535348,1.535348,1.2],["faultLocator","Fault Locator",-2.242455,1.55,2.242455,-1.535348,1.535348,1.2],["foodMachine","Food Machine",2.242455,1.2,-2.242455,1.535348,-1.535348,1.2],["hatStand","Hat Stand",-1.385,1.55,-2.3988,-.935,-1.619,1.05],["chair","Chair",-2.2171,.45,-1.28,-1.438,-.83,1.05],["clock","Ormolu Clock",-2.050579,1.1,-2.050579,-1.414182,-1.414183,1.05]];for(const[x,y,T,C,O,k,R,D]of S)n.spot(x,k,0,R),n.interact(x,y,T,C,O,x,{},D);function A(x){u=x?1:0}function w(x){h=!!x,o.visible=h,_()}function E(){f=0}function L(){d=0}function N(x){const y=Math.min(Math.max(x||0,0),.1);if(m+=y,l!==u){const T=y/wy;l=u>l?Math.min(u,l+T):Math.max(u,l-T),_()}f>=0&&(f+=y,f>=Ay&&(f=-1)),v(!1)&&(c.instanceMatrix.needsUpdate=!0),d>=0&&(d+=y,d>=Ty&&(d=-1),p(),c.instanceMatrix.needsUpdate=!0)}return{group:r,screen:o,setShutters:A,setScanner:w,pulseFault:E,dispense:L,update:N,get shuttersOpen(){return u===1},get scannerOn(){return h},get faultRunning(){return f>=0}}}const Yy=n=>.6*Math.pow(n/100,.6),om={candle1900:16764860,cool5000:16774121},am={fov:-6,rate:2.6},ed=16,cm=600,Hu=Yy(cm),lm=.9,Gu=et.CEIL_H-.15,gc=2*Math.hypot(et.CORNER_X,et.STRUCT_FACE),nd=Hu*(Gu-lm)**2/.88,um=.22*Hu*(gc/2),hm=2.2*(gc/2),fm=gc,Ja=2.8469,K0=um/2,Pa=1.2,dm=2.6,pm=2.2,$y=1.84,yl=[0,1.1,2.7],jy=3.4,Ky=2.1,Zy=15265525,id=2.8,sd=3.2,Z0=16776681,J0=om.cool5000,Jy=13625599,Qy=Object.freeze({lux:cm,E:Hu,planeY:lm,keyY:Gu,diagonal:gc,keyRef:nd,key:Ja,keyShare:Ja/nd,fillTotal:um,fill:K0,keyDist:hm,fillDist:fm,keyColour:J0,fillColour:Z0,rotorIdle:Pa,rotorFlight:dm,rotorDist:pm}),Xn=Object.freeze({hemisphere:Object.freeze({sky:16773344,ground:8092794,intensity:.5955}),ambient:Object.freeze({colour:16774116,intensity:.3767}),bounce:null,fog:null,shadows:!1,background:1316634,toneMapping:"ACESFilmicToneMapping",toneMappingExposure:1.4,outputColorSpace:"SRGBColorSpace",camera:Object.freeze({fov:64+am.fov,near:.2,far:60})}),So=.21,Wu=.06,Vu=24,Q0=et.CEIL_H-Wu,tS=Q0+.0015,eS=new ee(So,So,Wu,Vu,1,!0),nS=new uc(So-.025,So,Vu),iS=new ms(So-.025,Vu),rd=Math.PI/2,Qa=n=>Math.abs(n)<1e-9?0:Math.round(n*1e9)/1e9,tc=[];for(let n=0;n<4;n++){const t=n*Math.PI/2;tc.push([Qa(Math.sin(t)*id),Qa(Math.cos(t)*id)])}for(let n=0;n<4;n++){const t=Math.PI/4+n*Math.PI/2;tc.push([Qa(Math.sin(t)*sd),Qa(Math.cos(t)*sd)])}const od=.02,ad=4,mm=am.rate,sS=3.2,rS=.05,oS=1.4,aS=.4,cd=.55,cS=.25,lS=.6;function uS(n,t,e){const i=Math.min(1,e*mm);return n<=1e-6?t*i:n*Math.pow(t/n,i)}function hS(n,t,e={}){if(!t||!t.CHROME||!t.GLOW_W)throw new Error("lighting(): needs the palette from src/engine/roundels.js (P.CHROME and P.GLOW_W). Call palette() first, or use buildLighting(b).");const i=[];for(const[N,x]of tc){const y=new Ot(eS,t.CHROME);y.position.set(N,Q0+Wu/2,x),y.name="panTube",i.push(n.add(y));const T=new Ot(nS,t.CHROME);T.position.set(N,Q0,x),T.rotation.x=rd,T.name="panBezel",i.push(n.add(T));const C=new Ot(iS,t.GLOW_W);C.position.set(N,tS,x),C.rotation.x=rd,C.name="panFace",i.push(n.add(C))}const s=tc.map(([N,x],y)=>{const T=n.light(N,Gu,x,J0,Ja,hm);return T.name=`key${y}`,T}),r=new xo(Z0,K0,fm,1);r.position.set(0,1.1,0),r.name="fill",n.group.add(r),n.lights.push(r);const o=n.light(0,$y,0,Jy,Pa,pm);o.name="rotorPractical";const a=n.light(yl[0],yl[1],yl[2],Zy,0,jy);a.name="doorSpill",n.lights.length>ed&&console.warn(`lighting(): ${n.lights.length} fixtures against POOL_SIZE ${ed}; the room is planned for 10 and the count is meant to be frozen.`);const c=t.GLOW_W.emissiveIntensity??1;let l=ma(e.level??1,od,ad),u=l,h=ma(e.rotorDrive??0,0,1),f=h,d=0,m=0,g=0,_=0,p=6,v=0,M=0;const S=new zt(J0),A=new zt(Z0),w=new zt(om.candle1900),E=new zt;function L(){const N=d>0?1-aS*d*(.5-.5*Math.cos(2*Math.PI*M/oS)):1,x=l*N;for(const T of s)T.intensity=Ja*x,d>0?T.color.copy(E.copy(S).lerp(w,cd*d)):T.color.copy(S);r.intensity=K0*x,d>0?r.color.copy(E.copy(A).lerp(w,cd*d)):r.color.copy(A);const y=h>0?1+rS*h*Math.sin(2*Math.PI*M/sS):1;o.intensity=(Pa+(dm-Pa)*h)*l*y,a.intensity=Ky*v,_>0&&(t.GLOW_W.emissiveIntensity=c*(1+_*Math.sin(2*Math.PI*M/p)))}return L(),{keys:s,fill:r,rotor:o,spill:a,pans:i,plan:Qy,scene:Xn,get level(){return l},setLevel(N){u=ma(N,od,ad)},setRotorDrive(N){f=ma(N,0,1)},setDoorSpill(N){v=N>0?N<1?N:1:0},setDoorSpillColour(N){return N!=null&&a.color.set(N),this},setAlert(N){m=N?1:0,g=N?1/0:0},pulseAlert(N=4){m=1,g=N},setGlowBreath(N,x=6){_=Math.max(0,Math.min(.6,N||0)),p=Math.max(.5,x),_===0&&(t.GLOW_W.emissiveIntensity=c)},update(N){const x=Math.min(Math.max(N||0,0),.25);M+=x,g!==1/0&&g>0&&(g-=x,g<=0&&(g=0,m=0)),l=uS(l,u,x),Math.abs(l-u)<1e-4&&(l=u),h+=(f-h)*Math.min(1,x*mm),Math.abs(h-f)<1e-4&&(h=f);const y=m>d?x/cS:x/lS;d+=Math.sign(m-d)*Math.min(Math.abs(m-d),y),L()},dispose(){t.GLOW_W.emissiveIntensity=c}}}function ma(n,t,e){return n<t?t:n>e?e:n}const Te={RADIUS:.34,HEIGHT:1.75,EYE:1.62,STEP:.42,GRAVITY:22,SPEED:2.6,RUN:4.2},fS=14,dS=3,ld=.0022,ud=Math.PI/2-.05,pS=.72,mS=6,_S=.06,gS=.1,xS=1500,Oa=[];for(let n=0;n<6;n++){const t=n*Math.PI/3;Oa.push({nx:Math.sin(t),nz:Math.cos(t)})}const _i=[],tu={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],interact:["KeyE"]},vS=new Set(Object.values(tu).flat());function MS(n,t,e,i,s,r){if(n.y0!==void 0&&(s+r<=n.y0||s>=n.y1))return!1;const o=n.planes;for(let a=0;a<o.length;a++){const c=o[a];if(t*c.nx+e*c.nz>c.d-i)return!1}return!0}function qu(n,t,e,i={}){const s=i.radius??Te.RADIUS,r=i.y??0,o=i.height??Te.HEIGHT,a=i.onPush||null;let c=0;const l=(n==null?void 0:n.zones)||_i;if(l.length){let d=!1;for(let m=0;m<l.length&&!d;m++)d=MS(l[m],t,e,s,r,o);if(!d){let m=t,g=e,_=1/0;for(let p=0;p<l.length;p++){const v=l[p];if(v.y0!==void 0&&(r+o<=v.y0||r>=v.y1))continue;let M=t,S=e;for(const w of v.planes){const E=M*w.nx+S*w.nz,L=w.d-s;E<=L||(M-=w.nx*(E-L),S-=w.nz*(E-L))}const A=(M-t)*(M-t)+(S-e)*(S-e);A<_&&(_=A,m=M,g=S)}if(_<1/0){if(a&&_>0){const p=Math.sqrt(_)||1;a((m-t)/p,(g-e)/p)}t=m,e=g,c++}}}const u=l.length?_i:(n==null?void 0:n.planes)||_i;for(let d=0;d<u.length;d++){const m=u[d],g=t*m.nx+e*m.nz,_=m.d-s;if(g<=_)continue;const p=g-_;t-=m.nx*p,e-=m.nz*p,c++,a&&a(-m.nx,-m.nz)}const h=(n==null?void 0:n.hulls)||_i;for(let d=0;d<h.length;d++){const m=h[d],g=m.y0??0;if(r+o<=g||r>=m.y1)continue;let _=0,p=-1/0;for(let A=0;A<6;A++){const w=t*Oa[A].nx+e*Oa[A].nz;w>p&&(p=w,_=A)}const v=m.apothem+s;if(p>=v)continue;const M=Oa[_],S=v-p;t+=M.nx*S,e+=M.nz*S,c++,a&&a(M.nx,M.nz)}const f=(n==null?void 0:n.boxes)||_i;for(let d=0;d<f.length;d++){const m=f[d],g=m.y0??0;if(r+o<=g||r>=m.y1)continue;const _=Math.cos(m.rotY),p=Math.sin(m.rotY),v=t-m.x,M=e-m.z,S=v*_-M*p,A=v*p+M*_,w=m.hw+s,E=m.hd+s,L=w-Math.abs(S),N=E-Math.abs(A);if(L<=0||N<=0)continue;let x=0,y=0,T;L<N?(x=S>=0?1:-1,T=L):(y=A>=0?1:-1,T=N);const C=x*_+y*p,O=-x*p+y*_;t+=C*T,e+=O*T,c++,a&&a(C,O)}return{x:t,z:e,contacts:c}}function yS(n,t,e,i={}){const s=(i.radius??Te.RADIUS)-(i.tolerance??_S);return qu(n,t,e,{radius:s,y:i.y,height:i.height}).contacts>0}class SS{constructor(t,e,i={}){var c,l;this.camera=t,this.build=e,this.dom=i.dom||(typeof document<"u"?document.body:null),this.collision=((c=e==null?void 0:e.userData)==null?void 0:c.collision)||null,this.collision||(console.warn("[walker] build.userData.collision is missing — the player will walk through the walls. Shell.js publishes it (CONSOLEROOM.md §8.7)."),this.collision={planes:_i,hulls:_i,boxes:_i}),this.position=new H,this.velocity=new H,this.yaw=0,this.pitch=0,this.onGround=!0,this.horizontalSpeed=0,this.prompt=null,this.driveCamera=!0,this._locked=!1,this._lockPending=!1,this._lockTimer=0,this._down=new Set,this._pressed=new Set,this._mouseDX=0,this._mouseDY=0,this._target=null,this._targetLabel=null,this._interactFns=[],this._pauseFns=[],this._bob=0,this._lastSafe=new H,this._warnedFloor=!1,this._fwd=new H,this._dir=new H,this._killInto=(u,h)=>{const f=this.velocity.x*u+this.velocity.z*h;f<0&&(this.velocity.x-=u*f,this.velocity.z-=h*f)};const s=i.spawn||((l=e==null?void 0:e.spots)==null?void 0:l.spawn)||et.SPAWN,r=s.x??s[0]??0,o=s.y??s[1]??0,a=s.z??s[2]??0;this.teleport(r,o,a,i.yaw??et.SPAWN_YAW),this._attach()}_attach(){var t;typeof window>"u"||(this._h={keydown:e=>{e.repeat||(this._locked&&vS.has(e.code)&&e.preventDefault(),this._down.add(e.code),this._pressed.add(e.code))},keyup:e=>this._down.delete(e.code),blur:()=>this._clearHeld(),focus:()=>this._clearHeld(),visibility:()=>{document.hidden&&this._clearHeld()},mousemove:e=>{this._locked&&(this._mouseDX+=e.movementX,this._mouseDY+=e.movementY)},mousedown:e=>{this._pressed.add("Mouse"+e.button),this._down.add("Mouse"+e.button)},mouseup:e=>this._down.delete("Mouse"+e.button),domdown:()=>{this._locked||this.requestLock()},lockchange:()=>{this._settleLock(),this._setLocked(document.pointerLockElement===this.dom)},lockerror:e=>this._failLock(e)},window.addEventListener("keydown",this._h.keydown),window.addEventListener("keyup",this._h.keyup),window.addEventListener("blur",this._h.blur),window.addEventListener("focus",this._h.focus),document.addEventListener("visibilitychange",this._h.visibility),window.addEventListener("mousemove",this._h.mousemove),window.addEventListener("mousedown",this._h.mousedown),window.addEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.addEventListener("mousedown",this._h.domdown),document.addEventListener("pointerlockchange",this._h.lockchange),document.addEventListener("pointerlockerror",this._h.lockerror))}dispose(){var t;this._settleLock(),!(typeof window>"u"||!this._h)&&(window.removeEventListener("keydown",this._h.keydown),window.removeEventListener("keyup",this._h.keyup),window.removeEventListener("blur",this._h.blur),window.removeEventListener("focus",this._h.focus),document.removeEventListener("visibilitychange",this._h.visibility),window.removeEventListener("mousemove",this._h.mousemove),window.removeEventListener("mousedown",this._h.mousedown),window.removeEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.removeEventListener("mousedown",this._h.domdown),document.removeEventListener("pointerlockchange",this._h.lockchange),document.removeEventListener("pointerlockerror",this._h.lockerror),this._h=null,this._interactFns.length=0,this._pauseFns.length=0,this._locked&&this.releaseLock())}releaseKeys(){return this._down.clear(),this._pressed.clear(),this}get locked(){return this._locked}get paused(){return!this._locked}get stepPhase(){return this._bob}onPause(t){return t&&this._pauseFns.push(t),this}requestLock(){var e,i;if(this._locked||this._lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this._lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this._lockPending=!1},xS);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=t==null?void 0:t.catch)==null||i.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this._setLocked(!1),typeof document<"u"&&((t=document.exitPointerLock)==null||t.call(document))}_settleLock(){this._lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this._lockPending;this._settleLock(),e&&(this._setLocked(!1),console.warn("[walker] pointer lock refused; staying paused",t||""))}_setLocked(t){if(this._locked!==t){this._locked=t,this._clearHeld(),t||this._setTarget(null);for(const e of this._pauseFns)e(!t)}}_clearHeld(){this._down.clear(),this._pressed.clear(),this._mouseDX=0,this._mouseDY=0}_isDown(t){return tu[t].some(e=>this._down.has(e))}_wasPressed(t){return tu[t].some(e=>this._pressed.has(e))}update(t){if(t=Math.min(t,gS),!(t>0)){this._pressed.clear();return}if(this._locked&&(this.yaw-=this._mouseDX*ld,this.pitch-=this._mouseDY*ld,this.pitch=Math.max(-ud,Math.min(ud,this.pitch))),this._mouseDX=0,this._mouseDY=0,this._locked?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this._applyGravity(t)),this.driveCamera&&this._commitCamera(t),this._updateTarget(),this._target&&(this._wasPressed("interact")||this._pressed.has("Mouse0"))){const e=this._target;for(const i of this._interactFns)i(e)}this._pressed.clear()}_move(t){let e=0,i=0;this._isDown("forward")&&(i+=1),this._isDown("back")&&(i-=1),this._isDown("right")&&(e+=1),this._isDown("left")&&(e-=1);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this._dir.set(r*i+-o*e,0,o*i+r*e);a.lengthSq()>0&&a.normalize();const c=this._isDown("run")?Te.RUN:Te.SPEED,l=this.onGround?fS:dS,u=Math.min(1,l*t);this.velocity.x+=(a.x*c-this.velocity.x)*u,this.velocity.z+=(a.z*c-this.velocity.z)*u,this._applyGravity(t),this._collide(t);const h=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<h&&(this.position.y=h,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_applyGravity(t){this.velocity.y-=Te.GRAVITY*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<=e?(this.position.y=e,this.velocity.y=0,this.onGround=!0):this.onGround=!1}_floorUnder(t,e,i){var a;const s=Te.RADIUS;let r=-1/0;const o=((a=this.build)==null?void 0:a.colliders)||_i;for(let c=0;c<o.length;c++){const l=o[c];l.walkable&&(t<l.min.x-s||t>l.max.x+s||e<l.min.z-s||e>l.max.z+s||l.max.y<=i+Te.STEP&&l.max.y>r&&(r=l.max.y))}return r===-1/0?(this._warnedFloor||(this._warnedFloor=!0,console.warn("[walker] no walkable collider under the player — holding at y = 0. floor() is the only thing that makes one.")),0):r}_collide(t){this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let e=0;e<mS;e++){const i=qu(this.collision,this.position.x,this.position.z,{y:this.position.y,onPush:this._killInto});if(this.position.x=i.x,this.position.z=i.z,!i.contacts)break}yS(this.collision,this.position.x,this.position.z,{y:this.position.y})?(this.position.x=this._lastSafe.x,this.position.z=this._lastSafe.z,this.velocity.x=0,this.velocity.z=0):this._lastSafe.copy(this.position)}_commitCamera(t){const e=this.position.y+Te.EYE;let i=0,s=0;this.horizontalSpeed>.3?(this._bob+=t*this.horizontalSpeed*1.9,s=Math.sin(this._bob*2)*.035,i=Math.cos(this._bob)*.014):this._bob=0,this.camera.position.set(this.position.x+i,e+s,this.position.z),this.camera.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ")}get target(){return this._target}onInteract(t){return t&&this._interactFns.push(t),this}_updateTarget(){var a;if(!this._locked){this._setTarget(null);return}const t=((a=this.build)==null?void 0:a.interactables)||_i;if(!t.length){this._setTarget(null);return}this.camera.getWorldDirection(this._fwd);const e=this.camera.position,i=this.position.x,s=this.position.z;let r=null,o=1/0;for(let c=0;c<t.length;c++){const l=t[c],u=l.pos.x-i,h=l.pos.z-s,f=Math.hypot(u,h);if(f>=(l.radius||1.8))continue;const d=l.pos.x-e.x,m=l.pos.y-e.y,g=l.pos.z-e.z,_=Math.hypot(d,m,g)||1,p=(d*this._fwd.x+m*this._fwd.y+g*this._fwd.z)/_,v=Math.acos(Math.min(1,Math.max(-1,p)));if(v>pS)continue;const M=v+f*.1;M>=o||(o=M,r=l)}this._setTarget(r)}_setTarget(t){const e=t?t.label:null;this._target===t&&this._targetLabel===e||(this._target=t,this._targetLabel=e,this.prompt=t?{id:t.id,label:t.label}:null)}teleport(t,e=0,i=0,s){if(t&&typeof t=="object"){const r=t;s=typeof e=="number"?e:void 0,t=r.x??r[0]??0,i=r.z??r[2]??0,e=r.y??r[1]??0}return this.position.set(t,e,i),this.position.y=Math.max(e,this._floorUnder(t,i,e)),this.velocity.set(0,0,0),this.horizontalSpeed=0,this.onGround=!0,this._bob=0,typeof s=="number"&&(this.yaw=s),this._lastSafe.copy(this.position),this.driveCamera&&this._commitCamera(0),this.position}setWorld(t){var e,i;if(!t)throw new Error("Walker.setWorld: no world");return this.world=t,this.build=t.build??this.build,this.collision=t.collision??((i=(e=t.build)==null?void 0:e.userData)==null?void 0:i.collision)??this.collision,this.surface=t.surface??null,this._warnedFloor=!1,this._lastSafe.copy(this.position),this._setTarget(null),this}crossTo(t,e=0){return this.position.applyMatrix4(t),hd.setFromMatrix4(t),this.velocity.applyMatrix3(hd),this.yaw+=e,this.yaw>Math.PI?this.yaw-=2*Math.PI:this.yaw<=-Math.PI&&(this.yaw+=2*Math.PI),this._lastSafe.copy(this.position),this.position}}const hd=new Kt,Ae=Object.freeze({length:.175,shaftR:.0072,collarR:.0086,tipR:.0055,tipL:.02,capL:.016,rest:Object.freeze({x:.118,y:-.132,z:-.33,pitch:.4,yaw:-.22,roll:.16}),aim:Object.freeze({x:.055,y:-.062,z:-.235,pitch:.16,yaw:-.3,roll:.08}),stowDrop:.23}),ES=.26,wS=.13,bS=2.4,Mr={},ar=(n,t)=>Mr[n]||(Mr[n]=t()),fd=n=>1-(1-n)*(1-n)*(1-n);function AS(){const n=new ge;n.name="sonic.markI";const t=new an({color:12172738,roughness:.28,metalness:0}),e=new an({color:1776928,roughness:.62,metalness:0}),i=new oi({color:9425151,toneMapped:!1}),s=Ae.length,r=-s/2,o=16,a=s-Ae.tipL-Ae.capL,c=new Ot(ar("sonic.shaft",()=>new ee(Ae.shaftR,Ae.shaftR,1,o)),t);c.scale.y=a,c.rotation.x=Math.PI/2,c.position.z=r+Ae.tipL+a/2,n.add(c);const l=new Ot(ar("sonic.collar",()=>new ee(Ae.collarR,Ae.collarR,1,o)),t);l.scale.y=.011,l.rotation.x=Math.PI/2,l.position.z=r+Ae.tipL+.0055,n.add(l);const u=new Ot(ar("sonic.band",()=>new ee(Ae.shaftR+9e-4,Ae.shaftR+9e-4,1,o)),e);u.scale.y=.004,u.rotation.x=Math.PI/2,u.position.z=r+Ae.tipL+a*.62,n.add(u);const h=new Ot(ar("sonic.tip",()=>new ee(Ae.tipR,Ae.shaftR,1,o)),e);h.scale.y=Ae.tipL,h.rotation.x=-Math.PI/2,h.position.z=r+Ae.tipL/2,n.add(h);const f=new Ot(ar("sonic.cap",()=>new qi(1,o,8,0,Math.PI*2,0,Math.PI/2)),e);f.scale.set(Ae.shaftR,Ae.capL,Ae.shaftR),f.rotation.x=Math.PI/2,f.position.z=s/2-Ae.capL,n.add(f);const d=new Ot(ar("sonic.lamp",()=>new qi(1,12,8)),i);return d.scale.setScalar(Ae.tipR*.92),d.position.z=r-.002,d.visible=!1,n.add(d),{group:n,lamp:d,materials:[t,e,i]}}function TS({reach:n=6,cone:t=.3}={}){const{group:e,lamp:i,materials:s}=AS(),r=new yu;r.name="viewmodel";const o=new rn(48,1,.01,1);r.add(e);const a=new k0(16774374,2.3);a.position.set(-.55,.8,.6);const c=new bu(13162239,.55);r.add(a,c);const l=a.intensity,u=c.intensity;let h=0,f=0,d=0,m=0,g=-1,_=0,p=1;const v=new H,M=new H;function S(){const w=fd(d),E=Ae.rest,L=Ae.aim,N=(k,R)=>k+(R-k)*w,x=1-w*.85,y=Math.sin(_*.83)*.0032*x,T=Math.sin(_*1.27+1.1)*.004*x,C=Math.sin(_*.61+.4)*.016*x,O=(1-fd(h))*Ae.stowDrop;e.position.set(N(E.x,L.x)+y,N(E.y,L.y)+T-O,N(E.z,L.z)),e.rotation.set(N(E.pitch,L.pitch),N(E.yaw,L.yaw),N(E.roll,L.roll)+C)}const A={group:e,scene:r,camera:o,materials:s,get out(){return f===1},get drawn(){return h},get aiming(){return m===1&&h>.6},get firing(){return g>=0},reach:n,cone:t,get liveReach(){return this.aiming?n*bS:n},get liveCone(){return t},toggle(){return f=f?0:1,f||(m=0,g=-1,i.visible=!1),!!f},draw(){return f=1,!0},stow(){f=0,m=0,g=-1,i.visible=!1},setAim(w){return m=w&&f?1:0,!!m},fire(){return!f||h<.6?!1:(g=0,!0)},setMood(w){p=Math.min(1,Math.max(.12,w)),a.intensity=l*p,c.intensity=u*(.45+.55*p)},beam(w,E=new H,L=new H){return E.copy(w.position),w.getWorldDirection(L),{origin:E,dir:L}},target(w,E){if(!f||h<.6)return null;const L=(E==null?void 0:E.interactables)||[];if(!L.length)return null;const{origin:N,dir:x}=this.beam(w,v,M);let y=null,T=1/0;for(const C of L){if(C.sonic===!1)continue;const O=C.pos.x-N.x,k=C.pos.y-N.y,R=C.pos.z-N.z,D=Math.hypot(O,k,R)||1;if(D>this.liveReach)continue;const F=(O*x.x+k*x.y+R*x.z)/D;if(F<=0)continue;const X=Math.acos(Math.min(1,F));if(X>this.liveCone)continue;const K=X+D*.02;K>=T||(T=K,y=C)}return y},update(w){const E=Math.min(Math.max(w||0,0),.1);_+=E;const L=(N,x,y)=>{const T=E/y;return x>N?Math.min(x,N+T):Math.max(x,N-T)};if(h=L(h,f,ES),d=L(d,m&&h>.6?1:0,wS),g>=0){g+=E;const N=g<.42&&Math.sin(g*54)>-.35;i.visible=N,g>=.42&&(g=-1,i.visible=!1)}S()},pass(w,E){if(h<=.001&&f===0)return!1;E&&o.aspect!==E.aspect&&(o.aspect=E.aspect,o.updateProjectionMatrix());const L=w.autoClear;return w.autoClear=!1,w.clearDepth(),w.render(r,o),w.autoClear=L,!0},dispose(){for(const w of s)w.dispose();for(const w of Object.keys(Mr))Mr[w].dispose(),delete Mr[w]}};return A.setMood(1),S(),A}function RS({landings:n,sites:t,known:e=null}={}){if(!n)throw new Error("makeNav: no landings table");if(!t)throw new Error("makeNav: no sites table");const i=Object.freeze(Object.keys(n));for(const l of i)if(!t[n[l].site])throw new Error(`makeNav: landing '${l}' names site '${n[l].site}', which does not ship`);const s=new Map;for(const l of i)s.set(l,{known:e?e.includes(l):!0,locked:null,note:null});let r=null,o=null;const a=l=>{var u;return n[l].name??((u=t[n[l].site])==null?void 0:u.name)??n[l].site},c={get keys(){return i},get objective(){return r},get objectiveNote(){return r?s.get(r).note:null},get selected(){return o},list(l=null){const u=[];for(const h of i){const f=s.get(h);f.known&&u.push({key:h,name:a(h),site:n[h].site,here:h===l,locked:f.locked,objective:h===r,note:f.note,selectable:!f.locked&&h!==l})}return u},move(l,u=null){const h=c.list(u).filter(d=>d.selectable);if(!h.length)return o=null,null;let f=h.findIndex(d=>d.key===o);return f<0?f=0:f=(f+l+h.length*2)%h.length,o=h[f].key,o},clear(){return o=null,c},select(l,u=null){if(!s.has(l))return`unknown coordinates: ${l}`;const h=s.get(l);return h.known?h.locked?h.locked:l===u?"The ship is already there.":(o=l,null):`unknown coordinates: ${l}`},selectObjective(l=null){return r&&!c.select(r,l)?r:c.move(0,l)},setKnown(l,u=!0){if(!s.has(l))throw new Error(`nav.setKnown: no landing '${l}'`);return s.get(l).known=!!u,!u&&o===l&&(o=null),!u&&r===l&&(r=null),c},setLocked(l,u=null){if(!s.has(l))throw new Error(`nav.setLocked: no landing '${l}'`);if(u!==null&&typeof u!="string")throw new Error("nav.setLocked: the second argument is the REASON, as a string — a bare true gives the player a destination that refuses and says nothing, which is the one thing worse than no destination");return s.get(l).locked=u,u&&o===l&&(o=null),c},setObjective(l,u=null){if(l===null)return r=null,c;if(!s.has(l))throw new Error(`nav.setObjective: no landing '${l}'`);return s.get(l).known=!0,s.get(l).note=u,r=l,c},save(){const l={objective:r,selected:o,dest:{}};for(const[u,h]of s)l.dest[u]={known:h.known,locked:h.locked,note:h.note};return l},restore(l){if(!l)return c;for(const[u,h]of Object.entries(l.dest||{}))s.has(u)&&Object.assign(s.get(u),h);return r=s.has(l.objective)?l.objective:null,o=s.has(l.selected)?l.selected:null,c}};return c}const dd=Object.freeze(["Ordinary. Depressingly so.","Nothing. Which is itself mildly interesting.","Local manufacture. Local everything.","Inert. No field, no trace, no fun at all.","It is exactly what it looks like."]),LS=n=>{let t=0;for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)|0;return Math.abs(t)};function CS({onGrant:n=null}={}){const t=new Map,e=new Set,i=new Set;function s(o){return o?typeof o=="string"?{id:o,title:o}:o.id?{id:o.id,title:o.label||o.id}:null:null}const r={get known(){return[...e]},has:o=>e.has(o),register(o,a){if(!o)throw new Error("analyse.register: no id");if(!a||!Array.isArray(a.lines)||!a.lines.length)throw new Error(`analyse.register('${o}'): a report needs at least one line`);const c=a.lines.filter(l=>l.length>36);if(c.length)throw new Error(`analyse.register('${o}'): ${c.length} line(s) over 36 characters. Only the middle 0.700 of the scanner is visible — the parked shutters cover the rest — so a longer line does not wrap, it goes behind a steel leaf: `+JSON.stringify(c[0]));return t.set(o,{title:a.title??null,lines:a.lines.slice(),grants:(a.grants??[]).slice(),again:a.again?a.again.slice():null}),r},forget(o){return t.delete(o),r},read(o){const a=s(o);if(!a)return{title:"NO SUBJECT",lines:["Point it at something."],grants:[],known:!1};const c=t.get(a.id),l=i.has(a.id);if(i.add(a.id),!c)return{title:(a.title||a.id).toUpperCase(),lines:[dd[LS(a.id)%dd.length]],grants:[],known:!1};const u=c.grants.filter(h=>!e.has(h));for(const h of u)e.add(h),n==null||n(h);return{title:(c.title??a.title??a.id).toUpperCase(),lines:l&&c.again?c.again.slice():c.lines.slice(),grants:u,known:!0}},save(){return{known:[...e],seen:[...i]}},restore(o){if(!o)return r;for(const a of o.known??[])e.add(a);for(const a of o.seen??[])i.add(a);return r}};return r}const _a=90;function IS({character:n="doctor",trait:t=null,onFlag:e=null,knows:i=null}={}){const s=new Map,r=new Set;let o=null,a=null,c=0,l=[];const u=n==="doctor";function h(m){return!(m.only&&m.only!==n||m.trait&&!(u||m.trait===t)||m.if&&!(r.has(m.if)||i!=null&&i(m.if))||m.unless&&(r.has(m.unless)||i!=null&&i(m.unless)))}function f(m){for(const g of m??[])r.has(g)||(r.add(g),e==null||e(g))}const d={get active(){return!!a},get node(){return a},get who(){return(a==null?void 0:a.who)??null},get text(){return(a==null?void 0:a.text)??null},get cursor(){return c},get flags(){return[...r]},get history(){return[...l]},get options(){return((a==null?void 0:a.options)??[]).filter(h)},load(m,g){if(!(g!=null&&g.nodes)||!g.start)throw new Error(`dialogue.load('${m}'): a graph needs { start, nodes }`);if(!g.nodes[g.start])throw new Error(`dialogue.load('${m}'): start node '${g.start}' is not in the graph`);const _=[];for(const[M,S]of Object.entries(g.nodes)){typeof S.text!="string"||!S.text.length?_.push(`${M} has no text`):S.text.length>_a&&_.push(`${M} is ${S.text.length} characters, over the ${_a} a subtitle can hold`);for(const A of S.options??[])typeof A.text!="string"||!A.text.length?_.push(`${M}: an option has no text`):A.text.length>_a&&_.push(`${M}: an option is over ${_a} characters`),A.goto!==void 0&&A.goto!==null&&!g.nodes[A.goto]&&_.push(`${M} -> '${A.goto}', which is not a node in this graph`)}const p=new Set([g.start]),v=[g.start];for(;v.length;){const M=g.nodes[v.pop()];for(const S of M.options??[])S.goto&&!p.has(S.goto)&&(p.add(S.goto),v.push(S.goto))}for(const M of Object.keys(g.nodes))p.has(M)||_.push(`${M} is unreachable from '${g.start}'`);if(_.length)throw new Error(`dialogue.load('${m}'): ${_.length} problem(s) — ${_.join("; ")}`);return s.set(m,g),d},has:m=>s.has(m),start(m){const g=s.get(m);return g?(o={id:m,graph:g},a=g.nodes[g.start],l=[g.start],c=0,f(a.grants),!0):!1},move(m){const g=d.options.length;return g?(c=(c+m+g*2)%g,c):(c=0,0)},choose(){if(!a)return"idle";const m=d.options;if(!m.length)return d.end(),"ended";const g=m[Math.min(c,m.length-1)];return f(g.grants),g.trait&&g.trait===t&&f(g.bonus),g.goto?(a=o.graph.nodes[g.goto],l.push(g.goto),c=0,f(a.grants),"moved"):(d.end(),"ended")},end(){o=null,a=null,c=0},save(){return{flags:[...r],history:[...l]}},restore(m){for(const g of(m==null?void 0:m.flags)??[])r.add(g);return m!=null&&m.history&&(l=[...m.history]),d}};return d}const vi=Object.freeze({ORIGIN:"knows.origin",PATTERN:"knows.pattern",CARRIER:"knows.carrier",INTENT:"knows.intent",CHOSE_RECORDS:"chose.records",CHOSE_LIGHTS:"chose.lights",BIOELECTRIC:"knows.bioelectric"}),DS={start:"doc-01",nodes:{"doc-01":{who:"SYSTEM",text:"The doors unseal. The air smells of ozone and burnt copper.",options:[{text:"Listen to the stairwell.",goto:"doc-02"},{text:"Run a frequency sweep first.",only:"doctor",goto:"doc-sweep"}]},"doc-sweep":{who:"THE DOCTOR",text:"Rule one of telecommunications: never answer a wire that sings.",grants:[vi.BIOELECTRIC],options:[{text:"It is drawn to living things. Bio-electric fields.",only:"doctor",goto:"doc-02"}]},"doc-02":{who:"THE PHONE",text:"Click. Four five five. Static. The audio junction is overloading.",options:[{text:"Divert the surge into the phone line. Save the records.",goto:"doc-records",grants:[vi.CHOSE_RECORDS]},{text:"Sever the exchange ground. Keep the lights.",goto:"doc-lights",grants:[vi.CHOSE_LIGHTS]}]},"doc-records":{who:"SYSTEM",text:"The records hold. Every emergency light in the stairwell dies.",options:[{text:"Go down in the dark.",goto:"doc-origin"}]},"doc-lights":{who:"SYSTEM",text:'The lights hold. A chime: "Index forty per cent complete."',options:[{text:"Go down, and listen to it work.",goto:"doc-origin"}]},"doc-origin":{who:"THE DOCTOR",text:"It is not broadcasting from out there. It hatched in the wiring.",grants:[vi.ORIGIN],options:[]}}},PS={start:"echo-pol-01",nodes:{"echo-pol-01":{who:"SYSTEM",text:"A police receiver hangs from the rail, still warm, still looping.",options:[{text:"Listen to the loop.",goto:"echo-pol-02"}]},"echo-pol-02":{who:"DISPATCH",text:"Unit four, report. It cycles every twelve minutes. Do not—",options:[{text:"Twelve minutes. Somebody timed it before I got here.",goto:"echo-pol-03"}]},"echo-pol-03":{who:"THE DOCTOR",text:"And then put the receiver down. Which is the part I mind.",grants:[vi.PATTERN],options:[]}}},OS={start:"echo-nur-01",nodes:{"echo-nur-01":{who:"SYSTEM",text:"A triage printer is still going. The floor is deep in paper.",options:[{text:"Read the last sheet.",goto:"echo-nur-02"}]},"echo-nur-02":{who:"SYSTEM",text:"Acute acoustic trauma. Blue scarring inside the auditory canal.",options:[{text:"Through the air?",goto:"echo-nur-03"},{text:"Scarring that deep is contact, not air.",trait:"MEDIC",goto:"echo-nur-03",bonus:[vi.CARRIER]}]},"echo-nur-03":{who:"THE DOCTOR",text:"Copper and speaker coils. It goes where the wire goes.",grants:[vi.CARRIER],options:[]}}},NS={start:"echo-tch-01",nodes:{"echo-tch-01":{who:"SYSTEM",text:"A terminal at the desk is jammed mid-print, one line repeating.",options:[{text:"Read it.",goto:"echo-tch-02"}]},"echo-tch-02":{who:"TERMINAL",text:"PATIENT_FILES -> AUDIO_STREAM. 41%. 42%. 42%. 42%.",options:[{text:"It is not deleting them. It is reading them.",goto:"echo-tch-03"}]},"echo-tch-03":{who:"THE DOCTOR",text:"An index. It is learning who everyone in this building is.",grants:[vi.INTENT],options:[]}}},US={start:"sol-01",nodes:{"sol-01":{who:"SYSTEM",text:"The lobby. The security desk is abandoned. Ward B is shut.",options:[{text:"Twelve minutes. 455 hertz. An index. Born in the wiring.",if:vi.INTENT,goto:"sol-full"},{text:"Not enough of it yet. Go back and look again.",goto:null}]},"sol-full":{who:"THE DOCTOR",text:"Pattern, carrier, intent, origin. That is a whole shape.",options:[{text:"Set the sonic to 455 and open Ward B.",only:"doctor",goto:"sol-open"}]},"sol-open":{who:"SYSTEM",text:"The sonic shrieks at 455. Ward B unlatches and rolls back.",options:[]}}};function FS(n){if(!n)throw new Error("frequency: no ship API");return n.talk.load("stairwell",DS),n.talk.load("echo.police",PS),n.talk.load("echo.nurse",OS),n.talk.load("echo.tech",NS),n.talk.load("lobby",US),n.analyse.register("site.alley",{title:"THE ALLEY",lines:["Terrestrial. Early 21st century.","Artron trace in the drain.","Something left in a hurry."]}),{FLAGS:vi,conversations:["stairwell","echo.police","echo.nurse","echo.tech","lobby"]}}const kS=Object.freeze({ARCH_HW:.7,ARCH_H:2.2,HALL_HW:1.1,HALL_Z0:-et.STRUCT_FACE,HALL_Z1:-et.STRUCT_FACE-8.1,SIDE_W:4.05,SIDE_HL:1.8,SIDE_MID:-et.STRUCT_FACE-5.4,SIDE_ARCH_HL:.6,LIV_HW:3.6,LIV_D:5.4,CEIL_H:et.CEIL_H}),zS=.8;function Jr(n,t,e,i,s){if(!(i>t&&s>e))throw new Error(`rectZone('${n}'): corners are the wrong way round`);return{id:n,planes:[{nx:1,nz:0,d:i},{nx:-1,nz:0,d:-t},{nx:0,nz:1,d:s},{nx:0,nz:-1,d:-e}],rect:[t,e,i,s]}}function BS(n,t){if(!n.rect||!t.rect)return 1/0;const[e,i,s,r]=n.rect,[o,a,c,l]=t.rect,u=Math.min(s,c)-Math.max(e,o),h=Math.min(r,l)-Math.max(i,a);return u<=0||h<=0?0:Math.min(u,h)}function HS(n,{minOverlap:t=zS}={}){const e=[];for(const i of n){let s=0;for(const r of n)r!==i&&(s=Math.max(s,BS(i,r)));s<t&&e.push(`${i.id} (widest overlap ${s.toFixed(3)})`)}if(e.length&&n.length>1)throw new Error(`interior zones: ${e.join(", ")} — every zone must overlap another by at least ${t} m, which is the player's own diameter plus a margin. A narrower overlap is a doorway that looks open and traps the player in it`);return n}function GS(n,t){const e=kS,i=e.ARCH_HW,s={height:e.CEIL_H,thickness:.14,colour:kt.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},r=e.HALL_HW,o=e.SIDE_MID+e.SIDE_ARCH_HL,a=e.SIDE_MID-e.SIDE_ARCH_HL;for(const rt of[-1,1]){const ot=rt*r;Me(n,ot,e.HALL_Z0,ot,o,{...s,inner:-rt,name:`hallW${rt>0?"E":"W"}1`}),Me(n,ot,o,ot,a,{...s,inner:-rt,y0:e.ARCH_H,height:e.CEIL_H-e.ARCH_H,name:`hallLintel${rt>0?"E":"W"}`}),Me(n,ot,a,ot,e.HALL_Z1,{...s,inner:-rt,name:`hallW${rt>0?"E":"W"}2`})}Me(n,-r,e.HALL_Z1,-i,e.HALL_Z1,{...s,inner:-1,name:"endJambL"}),Me(n,-i,e.HALL_Z1,i,e.HALL_Z1,{...s,inner:-1,y0:e.ARCH_H,height:e.CEIL_H-e.ARCH_H,name:"endLintel"}),Me(n,i,e.HALL_Z1,r,e.HALL_Z1,{...s,inner:-1,name:"endJambR"});const c=e.HALL_Z1,l=e.HALL_Z1-e.LIV_D,u=e.LIV_HW;Me(n,-u,c,-u,l,{...s,inner:-1,name:"livW"}),Me(n,-u,l,u,l,{...s,inner:-1,name:"livEnd"}),Me(n,u,l,u,c,{...s,inner:-1,name:"livE"});for(const rt of[-1,1])Me(n,rt*r,c,rt*u,c,{...s,inner:-1,name:`livReturn${rt>0?"E":"W"}`});const h=e.SIDE_MID-e.SIDE_HL,f=e.SIDE_MID+e.SIDE_HL;for(const rt of[-1,1]){const ot=rt*r,I=rt*(r+e.SIDE_W),b=rt>0?"store":"wardrobe";Me(n,ot,h,I,h,{...s,inner:rt,name:`${b}S`}),Me(n,I,h,I,f,{...s,inner:-rt,name:`${b}End`}),Me(n,I,f,ot,f,{...s,inner:-rt,name:`${b}N`})}const d=-3.6,m=d,g=e.HALL_Z1-e.LIV_D-.3,_=2*Math.max(e.HALL_HW+e.SIDE_W,e.LIV_HW)+.3,p=Math.abs(g-m),v=(m+g)/2,M=At("dais",_,.3,p,kt.DAIS,{material:t.DAIS,cast:!1});M.position.set(0,-.15,v),n.add(M);const S=At("ceil",_,.3,p,kt.CEIL,{material:t.CEIL,cast:!1});S.position.set(0,e.CEIL_H+.15,v),n.add(S);const A=et.BAND_TOP,w=.03,E=.06,L=.09,N=(rt,ot,I,b,G,tt)=>{const at=Math.hypot(I-rt,b-ot),nt=Math.atan2(-(b-ot)/at,(I-rt)/at),Mt=(rt+I)/2,dt=(ot+b)/2,vt=At("chrome",at,w,E,kt.CHROME,{material:t.CHROME,cast:!1});vt.position.set(Mt+G*.026,A+w/2,dt+tt*.026),vt.rotation.y=nt,n.add(vt);const Zt=At("trim",at,L,.014,kt.GLOW_W,{material:t.GLOW_W,cast:!1});Zt.position.set(Mt+G*.007,A+L/2,dt+tt*.007),Zt.rotation.y=nt,n.add(Zt)};for(const rt of[-1,1])N(rt*r,e.HALL_Z0,rt*r,e.HALL_Z1,-rt,0),N(rt*(r+e.SIDE_W),h,rt*(r+e.SIDE_W),f,-rt,0);N(-r,e.HALL_Z1,r,e.HALL_Z1,0,1);const x=et.TILE,y=rt=>(Math.floor(rt/x)+.5)*x,T=[],C=(rt,ot,I,b)=>{T.push(b),Ff(n,t,rt,ot,I)},O=Xr.T,k=s.thickness,R=r-k/2,D=r+e.SIDE_W-k/2,F=e.HALL_Z1+k/2;for(const rt of[-1,1]){const ot=rt*(R-O/2),I=rt>0?-Math.PI/2:Math.PI/2;for(const[b,G]of[[e.HALL_Z0,o],[a,e.HALL_Z1]]){const tt=Math.abs(G-b);if(tt<.5)continue;Yr(n,t,tt,ot,(b+G)/2,I);const at=Math.min(b,G)+.45,nt=Math.max(b,G)-.45;let Mt=0;for(let dt=y(at);dt<=nt;dt+=x,Mt++)Mt%2||C(rt*(R-O-Xr.DISC_PROUD),dt,I,dt)}}for(const rt of[-1,1]){const ot=R-i;ot>.1&&Yr(n,t,ot,rt*(i+ot/2),F+O/2,0)}const X=e.HALL_Z1,K=e.HALL_Z1-e.LIV_D,it=e.LIV_HW,ft=K+k/2,Q=it-k/2;Yr(n,t,2*Q,0,ft+O/2,0);for(const rt of[y(-1.8),y(1.8)])C(rt,ft+O+Xr.DISC_PROUD,0,rt);for(const rt of[-1,1]){const ot=rt*(Q-O/2),I=rt>0?-Math.PI/2:Math.PI/2;Yr(n,t,e.LIV_D-k,ot,(K+X)/2,I);for(const b of[-1.8,1.8]){const G=y((K+X)/2+b);C(rt*(Q-O-Xr.DISC_PROUD),G,I,G)}}for(const rt of[-1,1]){const ot=rt*(D-O/2),I=rt>0?Math.PI/2:-Math.PI/2;Yr(n,t,2*e.SIDE_HL,ot,e.SIDE_MID,I);for(const b of[-.9,.9])Ff(n,t,rt*(D-O-Xr.DISC_PROUD),e.SIDE_MID+b,I)}const z=e.CEIL_H-.1,U=(rt,ot)=>{n.light(rt,z,ot,16773596,5.2,7);const I=At("trim",.44,.03,.44,kt.GLOW_W,{material:t.GLOW_W,chamfer:.01,cast:!1});I.position.set(rt,e.CEIL_H-.015,ot),n.add(I)};for(const rt of[e.HALL_Z0-1.5,e.SIDE_MID,e.HALL_Z1+1.6])U(0,rt);for(const rt of[-1,1])U(rt*(r+e.SIDE_W/2),e.SIDE_MID);for(const rt of[-1,1])U(rt*1.7,e.HALL_Z1-e.LIV_D/2);const Y=t.CONSOLE,J=[];let ut=null;const lt=(rt,ot,I,b)=>{const G=new ge;return G.position.set(rt,0,ot),G.rotation.y=I,n.add(G),J.push([rt,ot,ut]),b((tt,at,nt,Mt,dt,vt,Zt,pt=.006)=>{const Tt=At("trim",at,nt,Mt,kt.BAND,{material:tt,chamfer:pt,cast:!0});Tt.position.set(dt,vt,Zt),G.add(Tt)}),G},ht=(rt,ot,I,b,G,tt,at,nt=0,Mt=.006)=>{const dt=At("trim",ot,I,b,kt.BAND,{material:rt,chamfer:Mt,cast:!0});return dt.position.set(G,tt,at),dt.rotation.y=nt,J.push([G,at,ut]),n.add(dt)};for(const rt of[-1,1]){ut=rt>0?"store":"wardrobe";const ot=rt*(r-k/2+.02),I=rt*(D-O),b=(ot+I)/2,G=f-1.1;ht(t.JOINERY,2,.32,.9,b,.16,G,Math.PI/2),ht(Y,1.88,.14,.78,b,.39,G,Math.PI/2),ht(Y,.56,.12,.74,b,.52,G+.66,Math.PI/2),ht(t.JOINERY,.12,.76,.9,b,.38,f-.14,Math.PI/2),ht(t.JOINERY,.52,.62,.44,I-rt*.26,.31,G-1.28),ht(t.CHROME,.09,.24,.09,I-rt*.26,.74,G-1.28),ht(t.GLOW_W,.2,.12,.2,I-rt*.26,.905,G-1.28,0,.04),ht(t.JOINERY,1.1,2.05,.56,b+rt*.5,1.025,h+.32,Math.PI/2),ht(t.CHROME,.03,.03,.03,b+rt*.5-rt*.02,1.1,h+.6,0,.014),lt(ot+rt*.72,e.SIDE_MID-1.1,rt*.5,tt=>{tt(t.JOINERY,.44,.055,.42,0,.425,0),tt(t.JOINERY,.42,.56,.05,0,.73,-.185);for(const at of[-.18,.18])for(const nt of[-.17,.17])tt(t.JOINERY,.042,.4,.042,at,.2,nt,.004)})}ut="living";const _t=e.HALL_Z1-e.LIV_D/2,xt=(rt,ot,I,b=.9)=>{ht(t.JOINERY,b,.3,.86,rt,.15,ot,I),ht(Y,b-.12,.2,.74,rt,.4,ot,I),ht(Y,b-.12,.48,.18,rt-Math.sin(I)*.34,.54,ot-Math.cos(I)*.34,I);for(const G of[-1,1])ht(t.JOINERY,.11,.42,.78,rt+Math.cos(I)*G*(b/2-.055),.51,ot-Math.sin(I)*G*(b/2-.055),I)};xt(0,_t-1.45,0,2.1),xt(-1.55,_t+.15,Math.PI/2),xt(1.55,_t+.15,-Math.PI/2),ht(t.JOINERY,1.3,.07,.74,0,.43,_t+.15);for(const rt of[-.56,.56])for(const ot of[-.28,.28])ht(t.JOINERY,.07,.4,.07,rt,.2,_t+.15+ot,0,.006);ht(t.DECK,3.4,.014,2.6,0,.007,_t+.05,0,.004);const B=.3,ie=2.25,Ct=3.6,Nt=.036;return lt(-(Q-O-B/2),_t,Math.PI/2,rt=>{rt(t.JOINERY,Ct,ie,Nt,0,ie/2,-B/2+Nt/2);for(const ot of[-1,1])rt(t.JOINERY,Nt,ie,B,ot*(Ct/2-Nt/2),ie/2,0);rt(t.JOINERY,Ct,Nt,B,0,ie-Nt/2,0),rt(t.JOINERY,Ct,Nt,B,0,Nt/2,0);for(let ot=0;ot<4;ot++){const I=.42+ot*.47;rt(t.JOINERY,Ct-2*Nt,Nt,B-.02,0,I,0),rt(t.DARK,Ct-2*Nt-.06,.28,B-.1,0,I+.14+Nt/2,-.02,.004)}}),{zones:[Jr("arch",-i,e.HALL_Z0-.7,i,e.HALL_Z0+1.1),Jr("hall",-(R-O),F+O,R-O,e.HALL_Z0+.2),Jr("wardrobe",-(D-O),h,-(r-.9),f),Jr("store",r-.9,h,D-O,f),Jr("living",-(e.LIV_HW-k/2-O),e.HALL_Z1-e.LIV_D+k/2+O,e.LIV_HW-k/2-O,e.HALL_Z1+1.1)],PLAN:e,placed:J,discAt:T,slab:Object.freeze({near:Math.max(m,g),far:Math.min(m,g),edge:d}),spots:Object.freeze({arch:[0,e.HALL_Z0+.4],hall:[0,e.SIDE_MID],hallEnd:[0,e.HALL_Z1+1],living:[0,e.HALL_Z1-e.LIV_D/2],wardrobe:[-(r+e.SIDE_W/2),e.SIDE_MID],store:[r+e.SIDE_W/2,e.SIDE_MID]})}}function WS(n,t){var s,r,o;const e=(s=n.userData)==null?void 0:s.collision;if(!e)throw new Error("foldCollision: no collision bag — run shell() first");if(!((r=e.planes)!=null&&r.length)&&!((o=e.zones)!=null&&o.length))throw new Error("foldCollision: the console room published no planes. Either shell() did not run or its contract has changed, and either way the ship is about to have no walls");const i={id:"console",get planes(){return e.planes}};return e.zones=[i,...t],e}const bs=1e-4;function VS(n,t,e,i,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const u=Math.max(.001,e.a??.005),h=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),m=n.createGain();m.gain.value=bs,m.connect(i);let g,_=null;const p=r.rate??1;if(e.src==="noise")g=n.createBufferSource(),g.buffer=t.get(e.noise||"white"),g.loop=!0,g.loopStart=0,g.playbackRate.value=p;else{g=n.createOscillator(),g.type=e.wave||"sine";const N=e.jitter||0,x=N?1+(r.jitterRoll??0)*N:1,y=Math.max(8,(e.freq??440)*x*p);if(_=g.frequency,_.setValueAtTime(y,a),e.to!=null&&!o){const T=Math.max(8,e.to*x*p),C=a+c;e.glide==="lin"?_.linearRampToValueAtTime(T,C):_.exponentialRampToValueAtTime(T,C)}}let v=g,M=null;if(e.filter){const N=n.createBiquadFilter();N.type=e.filter.type||"lowpass",N.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);N.frequency.setValueAtTime(x,a),e.filter.to!=null&&!o&&N.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),M=N.frequency,v.connect(N),v=N}let S=null,A=null;if(e.lfo&&e.lfo.rate>0){S=n.createOscillator(),S.type="sine",S.frequency.value=e.lfo.rate;const N=n.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));A=n.createGain(),A.gain.value=1-x*.5,N.gain.value=x*.5,S.connect(N),N.connect(A.gain),v.connect(A),v=A}else e.lfo.target==="filter"&&M?(N.gain.value=e.lfo.depth??200,S.connect(N),N.connect(M)):_&&(N.gain.value=e.lfo.depth??20,S.connect(N),N.connect(_));S.start(a)}v.connect(m);const w=m.gain;w.setValueAtTime(bs,a),w.linearRampToValueAtTime(l,a+u);const E=Math.max(bs,l*f);h>0&&w.linearRampToValueAtTime(E,a+u+h);let L=1/0;if(o)g.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const N=Math.max(a+u+h,a+c-d);w.setValueAtTime(Math.max(bs,h>0?E:l),N),w.linearRampToValueAtTime(bs,a+c),L=a+c+.02,g.start(a,e.src==="noise"?r.noiseOffset??0:void 0),g.stop(L),S&&S.stop(L)}return{endsAt:L,stop(N){const x=Math.max(N,n.currentTime);try{w.cancelScheduledValues(x),w.setValueAtTime(Math.max(bs,w.value),x),w.linearRampToValueAtTime(bs,x+d),g.stop(x+d+.02),S&&S.stop(x+d+.02)}catch{}}}}function pd(n,t,e,i,s={}){const r=Math.max(s.when??n.currentTime,n.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const u=VS(n,t,l,i,r,{...s,loop:o});u&&(a.push(u),u.endsAt>c&&u.endsAt!==1/0&&(c=u.endsAt))}return{endsAt:o?1/0:c,stop(l=n.currentTime){for(const u of a)u.stop(l)}}}const md="dw.audio",qS=16,XS="KeyN",YS={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},$S=["step_a","step_b"];function jS(n,t){const e=t.elements,i=n.x,s=n.y??0,r=n.z,o=e[3]*i+e[7]*s+e[11]*r+e[15]||1;return{x:(e[0]*i+e[4]*s+e[8]*r+e[12])/o,y:(e[1]*i+e[5]*s+e[9]*r+e[13])/o,z:(e[2]*i+e[6]*s+e[10]*r+e[14])/o}}const KS={volume:.55,muted:!1},ZS={hatStand:1.14,chair:.86,clock:.72},JS={scanner:.92,faultLocator:.84,foodMachine:1.12},_m=8,QS=.4,tE=18;function _d(n,t,e){const i=t.length;if(n==="brown"){let s=0;for(let r=0;r<i;r++){const o=e.float()*2-1;s=(s+.02*o)/1.02,t[r]=s*3.5}}else if(n==="pink"){let s=0,r=0,o=0,a=0,c=0,l=0,u=0;for(let h=0;h<i;h++){const f=e.float()*2-1;s=.99886*s+f*.0555179,r=.99332*r+f*.0750759,o=.969*o+f*.153852,a=.8665*a+f*.3104856,c=.55*c+f*.5329522,l=-.7616*l-f*.016898,t[h]=(s+r+o+a+c+l+u+f*.5362)*.11,u=f*.115926}}else for(let s=0;s<i;s++)t[s]=e.float()*2-1;return t}function eE(n,t){const e=Math.exp(-2*Math.PI*tE/t);let i=0,s=0;for(let r=0;r<n.length;r++){const o=n[r];i=o-s+e*i,s=o,n[r]=i}return n}class nE{constructor(t,e,i={}){this.ctx=t,this.rng=e,this.len=i.len??_m,this.xfade=i.xfade??QS,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=this.ctx.sampleRate,i=Math.floor(e*this.len),s=this.ctx.createBuffer(1,i,e),r=s.getChannelData(0);if(t==="white")_d("white",r,this.rng);else{const o=Math.max(1,Math.floor(e*this.xfade)),a=eE(_d(t,new Float32Array(i+o),this.rng),e);r.set(a.subarray(0,i));for(let c=0;c<o;c++){const l=(c+.5)/o;r[c]=a[c]*Math.sin(l*Math.PI/2)+a[i+c]*Math.cos(l*Math.PI/2)}}return this.cache.set(t,s),s}}const iE=Math.PI/2,sE=3.4,rE=.15,ga=1,gd=6.5;class oE{constructor(t={}){var r;this.sounds=t.sounds||{},this.busDefs=t.buses||{},this.dist={...YS,...t.distance||{}},this.roomBeds=t.roomBeds||[],this.propRate={...ZS,...t.propRate||{}},this.ctlRate={...JS,...t.ctlRate||{}};const e={...KS,...t.defaults||{}};this.anchors=t.anchors||{},this.surface=t.surface||null,this.surfaceSteps=t.surfaceSteps||{vinyl:["step_a","step_b"]},this._interiorAnchors=null,this.siteBeds=t.siteBeds||[],this._bedMix=0,this._doorT=0,this._roomBedOff=null,this._siteBedOff=null,this.listener=t.listener||null,this.say=typeof t.say=="function"?t.say:null;const i=t.rng;this.rng=i!=null&&i.child?i.child("audio"):i||null,this._stepRng=(r=this.rng)!=null&&r.child?this.rng.child("step"):this.rng,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this._bankFactory=t.bankFactory||((o,a)=>new nE(o,a)),this._defaultBus=null,this._voices=[],this._loops=new Map,this._handled=new Map,this._duckDepth=1,this._duckUntil=0,this._ducking=!1,this._paused=!1,this._replaceAccum=0,this._told=!1;const s=this._loadPrefs(e);this.volume=s.volume,this.muted=s.muted,this.room=null,this._flying=!1,this._s=0,this._ds=1,this._shutters=null,this._scanner=null,this._stepIx=0,this._air=0,this._wasGround=!0,this._nextTick=0,this._tock=!1,this._Ctx&&(this._wireUnlock(),this._wireKey())}get available(){return!!this.ctx}_loadPrefs(t){const e={...t};try{const i=localStorage.getItem(md);if(i){const s=JSON.parse(i);typeof s.volume=="number"&&(e.volume=Math.min(1,Math.max(0,s.volume))),typeof s.muted=="boolean"&&(e.muted=s.muted)}}catch{}return e}_savePrefs(){try{localStorage.setItem(md,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx&&this.ctx.state!=="suspended")for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,i;document.hidden||(i=(e=this.ctx)==null?void 0:e.resume)==null||i.call(e).catch(()=>{})})}unlock(){var e,i,s;if(this.ctx){(i=(e=this.ctx).resume)==null||i.call(e).catch(()=>{});return}if(!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=this._bankFactory(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this._masterTarget(),this.master.connect(t.destination);for(const[r,o]of Object.entries(this.busDefs)){const a=t.createGain();a.gain.value=o.gain,a.connect(this.master),this.buses[r]={node:a,base:o.gain,duckable:o.duckable!==!1},this._defaultBus||(this._defaultBus=this.buses[r])}this._defaultBus=this.buses.machine||this._defaultBus,(s=t.resume)==null||s.call(t).catch(()=>{}),this._nextTick=t.currentTime+ga,this._resumeBeds(),this.announce()}_resumeBeds(){var t,e;return!this.ctx||this.muted?this:(this.startBeds(this.roomBeds),(e=(t=this.room)==null?void 0:t.fittings)!=null&&e.scannerOn&&this.startLoop("scanner_bed"),this._flying&&(this.startLoop("flight_bed"),this.startLoop("flight_grind")),this)}announce(){this._told||!this.ctx||!this.say||(this._told=!0,this.say(this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==XS||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e;return this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(e=this.say)==null||e.call(this,this.muted?"Sound muted.":"Sound on."),this.muted||(this.play("mute_off"),this._resumeBeds()),this}toggleMute(){return this.setMuted(!this.muted)}setVolume(t){return this.volume=Math.min(1,Math.max(0,Number(t)||0)),this._savePrefs(),this._applyMaster(),this}setPaused(t){return this._paused=!!t,this._applyMaster(.08),this}_masterTarget(){return this.muted?1e-4:Math.max(1e-4,this.volume*(this._paused?.2:1))}_applyMaster(t=.08){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime,i=this._masterTarget();this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(i,e+t)}play(t,e={}){const i=this.sounds[t];if(!i||!this.ctx||this.muted)return null;if(i.loop)return this.startLoop(t,e.handle||t,e);if(e.handle&&this._stopHandled(e.handle),this._voices.length>=qS)return null;const s=this._chainFor(i,e,!1);if(!s)return null;const r=pd(this.ctx,this.bank,i,s.node,{gain:(i.gain??1)*(e.gain??1),rate:(i.rate??1)*(e.rate??1),when:e.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),o={v:r,endsAt:r.endsAt,handle:e.handle||null};return this._voices.push(o),e.handle&&this._handled.set(e.handle,o),i.ducks&&this.duck(i.ducks.depth??.45,i.ducks.hold??1),r}_stopHandled(t){const e=this._handled.get(t);if(!e)return;this._handled.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}const i=this._voices.indexOf(e);i>=0&&this._voices.splice(i,1)}startLoop(t,e=t,i={}){const s=this.sounds[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._chainFor(s,i,!0);if(!r)return null;const a={v:pd(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(i.gain??1),rate:(s.rate??1)*(i.rate??1),when:i.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:i.spot??s.spot??null,at:i.at??null,level:1};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);if(!e||!this.ctx)return this;this._loops.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}return this}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t);return this}setLoopLevel(t,e,i=.12){var a;const s=this._loops.get(t);if(!s||!this.ctx||!((a=s.chain)!=null&&a.level))return this;const r=Math.max(0,Number(e)||0);if(Math.abs(r-s.level)<.002)return this;s.level=r;const o=this.ctx.currentTime;return i>0?s.chain.level.gain.setTargetAtTime(r,o,i):s.chain.level.gain.setValueAtTime(r,o),this}startBeds(t=this.roomBeds){for(const e of t||[])this.startLoop(e);return this}stopBeds(t=this.roomBeds){for(const e of t||[])this.stopLoop(e);return this}duck(t=.45,e=1){if(!this.ctx)return this;const i=this.ctx.currentTime,s=Math.min(1,Math.max(0,t));this._duckDepth=this._ducking?Math.min(this._duckDepth,s):s,this._duckUntil=Math.max(this._duckUntil,i+e),this._ducking=!0;for(const r of Object.values(this.buses))r.duckable&&(r.node.gain.cancelScheduledValues(i),r.node.gain.setTargetAtTime(r.base*this._duckDepth,i,.04));return this}_unduck(){const t=this.ctx.currentTime;this._ducking=!1,this._duckDepth=1;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_chainFor(t,e,i){const s=this.buses[t.bus]||this._defaultBus;if(!s)return null;let r=s.node,o=null,a=null,c=null;const l=this._resolve(e.at??null,e.spot??t.spot??null);if(l){const u=this._place(l,t.minGain??0);if(u.gain<=.004&&!t.loop)return null;this.ctx.createStereoPanner&&(o=this.ctx.createStereoPanner(),o.pan.value=u.pan,o.connect(r),r=o),a=this.ctx.createGain(),a.gain.value=u.gain,a.connect(r),r=a}return i&&(c=this.ctx.createGain(),c.gain.value=1,c.connect(r),r=c),{node:r,chain:{pan:o,dist:a,level:c},pos:l}}_resolve(t,e){if(t&&typeof t.x=="number")return t;if(!e)return null;const i=this.anchors[e];return i&&typeof i.x=="number"?i:null}_listener(){var r;const t=this.listener;if(!t)return null;const e=typeof t=="function"?t():t;if(!e)return null;const i=((r=e.camera)==null?void 0:r.position)||e.position||(typeof e.x=="number"?e:null);if(!i||typeof i.x!="number")return null;const s=e.yaw??0;return{x:i.x,y:i.y,z:i.z,rx:-Math.cos(s),rz:Math.sin(s)}}_place(t,e){const i=this._listener();if(!i)return{gain:1,pan:0};const s=t.x-i.x,r=t.z-i.z,o=(t.y??i.y)-i.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,fade:u,panWidth:h,panNear:f}=this.dist;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));u>0&&a>l-u&&(d*=(l-a)/u),d=Math.max(d,e);const m=Math.sqrt(s*s+r*r)||1,g=Math.min(1,m/f),_=(s*i.rx+r*i.rz)/m*h*g;return{gain:d,pan:Math.max(-1,Math.min(1,_))}}update(t){var s;let e=Number(t)||0;if(e<0&&(e=0),e>.1&&(e=.1),this._followRotor(),this._followFittings(),this._footsteps(e),!this.ctx)return this;const i=this.ctx.currentTime;for(let r=this._voices.length-1;r>=0;r--){const o=this._voices[r];o.endsAt>i||(o.handle&&this._handled.get(o.handle)===o&&this._handled.delete(o.handle),this._voices.splice(r,1))}if(this._ducking&&i>=this._duckUntil&&this._unduck(),this._clock(i),this._replaceAccum+=e,this._replaceAccum<.1)return this;this._replaceAccum=0;for(const r of this._loops.values()){const o=this._resolve(r.at,r.spot);if(!o||!((s=r.chain)!=null&&s.dist))continue;const a=this._place(o,r.recipe.minGain??0);r.chain.dist.gain.setTargetAtTime(a.gain,i,.06),r.chain.pan&&r.chain.pan.pan.setTargetAtTime(a.pan,i,.08)}return this}setWorld(t,e=null){var r;if(!t)return this;if(t.dist&&(this.dist={...this.dist,...t.dist}),this.surface=t.surface??null,!this._interiorAnchors){this._interiorAnchors=Object.create(null);for(const[o,a]of Object.entries(this.anchors))this._interiorAnchors[o]=a}const i=t.id==="interior"||!e?null:e.M_IE||null,s=Object.create(null);if((r=t.build)!=null&&r.interactables)for(const o of t.build.interactables)o!=null&&o.id&&o.pos&&(s[o.id]=o.pos);for(const[o,a]of Object.entries(this._interiorAnchors))s[o]||(s[o]=i?jS(a,i):a);return this.anchors=s,this}setLoopSpot(t,e){const i=this._loops.get(t);return i&&(i.spot=e??null,i.at=null),this}setBedMix(t,e){const i=t<=0?0:t>=1?1:t,s=e===void 0?this._doorT??1:e,r=s<=0?0:s>=1?1:s;this._bedMix=i;const o=1-i+i*.06*r,a=i*(.3+.7*(1-.6*(1-r)));return this._driveBedSet(this.roomBeds,o,"_roomBedOff"),this._driveBedSet(this.siteBeds,a,"_siteBedOff"),this}_driveBedSet(t,e,i){if(!t||!t.length)return;const s=t.map(r=>Array.isArray(r)?r[0]:r);if(e<=0){const r=this.ctx?this.ctx.currentTime:0;(this[i]===void 0||this[i]===null)&&(this[i]=r);for(const o of s)this.setLoopLevel(o,0);if(r-this[i]>2)for(const o of s)this.stopLoop(o);return}this[i]=null;for(const r of t){const o=Array.isArray(r)?r[0]:r;if(!this._loops.has(o)){const a=Array.isArray(r)&&r[1]?{...r[1]}:{};this.startLoop(o,o,a)&&this.setLoopLevel(o,0,0)}this.setLoopLevel(o,e)}}setDoorFraction(t){return this._doorT=t<=0?0:t>=1?1:t,this}setSiteBeds(t){return this.siteBeds=t||[],this}get bedMix(){return this._bedMix??0}bindRoom({build:t,rotor:e,fittings:i,walker:s,room:r}={}){var o,a;if(this.room={build:t||null,rotor:e||null,fittings:i||null,walker:s||null},t!=null&&t.interactables)for(const c of t.interactables)c!=null&&c.id&&c.pos&&(this.anchors[c.id]=c.pos);return this.anchors.console=this.anchors.console||{x:0,y:(r==null?void 0:r.PANEL_Y0)??.9,z:0},s&&(this.listener||(this.listener=s),(o=s.onPause)==null||o.call(s,c=>this.setPaused(c)),(a=s.onInteract)==null||a.call(s,c=>this._onInteract(c)),this.setPaused(!!s.paused)),i&&(this._shutters=!!i.shuttersOpen,this._scanner=!!i.scannerOn),e&&(this._flying=!!e.running),this.startBeds(this.roomBeds),i!=null&&i.scannerOn&&this.startLoop("scanner_bed"),this}_onInteract(t){var e;if(t)switch(t.action){case"panel":{const i=(e=t.data)==null?void 0:e.panel,s=`panel${i}`;this.play("panel_wake",{spot:s});const r={1:"ctl_lever",2:"ctl_lever",3:"ctl_dial",4:"ctl_guard",5:"ctl_lever_big",6:"ctl_button"};r[i]&&this.play(r[i],{spot:s}),i===1&&this.play("ctl_refuse",{spot:s}),i===3&&this.play("food_dispense",{handle:"food"}),i===6&&this.play("fault_query",{handle:"fault"});break}case"doors":this.play("door_locked"),this.play("panel_wake",{spot:"panel1",gain:.5});break;case"scanner":this.play("ctl_toggle",{spot:"scanner",rate:this.ctlRate.scanner});break;case"faultLocator":this.play("ctl_button",{spot:"faultLocator",rate:this.ctlRate.faultLocator}),this.play("fault_query",{handle:"fault"});break;case"foodMachine":this.play("ctl_button",{spot:"foodMachine",rate:this.ctlRate.foodMachine}),this.play("food_dispense",{handle:"food"});break;case"hatStand":this.play("prop_wood",{spot:"hatStand",rate:this.propRate.hatStand});break;case"chair":this.play("prop_wood",{spot:"chair",rate:this.propRate.chair});break;case"clock":this.play("prop_wood",{spot:"clock",rate:this.propRate.clock}),this.ctx&&this.play("clock_tick",{when:this.ctx.currentTime+.3});break;case"rotor":this.play("ctl_lever_big",{spot:"panel5"});break}}_followRotor(){var s;const t=(s=this.room)==null?void 0:s.rotor;if(!t)return;const e=!!t.running;e&&!this._flying?(this.play("demat_launch"),this.startLoop("flight_bed"),this.startLoop("flight_grind"),this.setLoopLevel("flight_bed",0,0),this.setLoopLevel("flight_grind",0,0),this._flying=!0,this._s=0,this._ds=1):!e&&this._flying&&(this.stopLoop("flight_bed"),this.stopLoop("flight_grind"),this.play("remat_land"),this._flying=!1);const i=t.drive??0;if(this.setLoopLevel("flight_bed",i),this.setLoopLevel("flight_grind",i),i>.05){const r=(t.apex??0)-(t.parked??0);if(r>0){const o=((t.height??0)-t.parked)/(r*i),a=o-this._s;this._ds<0&&a>=0?this.play("demat_rise"):this._ds>0&&a<=0&&this.play("demat_fall"),a!==0&&(this._ds=a),this._s=o}}else this._s=0,this._ds=1}_followFittings(){var s;const t=(s=this.room)==null?void 0:s.fittings;if(!t)return;const e=!!t.shuttersOpen;this._shutters!==null&&e!==this._shutters&&this.play(e?"shutter_open":"shutter_close",{handle:"shutter"}),this._shutters=e;const i=!!t.scannerOn;this._scanner!==null&&i!==this._scanner&&(i?this.startLoop("scanner_bed"):this.stopLoop("scanner_bed")),this._scanner=i}_footsteps(t){var l;const e=(l=this.room)==null?void 0:l.walker;if(!e)return;const i=e.onGround!==!1;i?(this._wasGround===!1&&this._air>rE&&this.play("step_land",{rate:this._stepRate(1)}),this._air=0):this._air+=t,this._wasGround=i;const s=e.horizontalSpeed??0;if(s<=.3){this._stepIx=0;return}const r=(e.stepPhase!==void 0?e.stepPhase:e._bob)??0,o=Math.floor(r/iE);if(o===this._stepIx||(this._stepIx=o,o<=0))return;const a=s>sE?1.06:1,c=this.surface&&this.surfaceSteps[this.surface]||$S;this.play(c[o&1],{rate:this._stepRate(a)})}_stepRate(t){const e=this._stepRng;return t*(1+.055*(e?e.range(-1,1):0))}_clock(t){if(!this.sounds.clock_tick)return;const e=this.anchors.clock;if(e){const i=this._listener();if(i){const s=e.x-i.x,r=e.z-i.z,o=(e.y??i.y)-i.y;if(s*s+o*o+r*r>gd*gd){this._nextTick=t+ga;return}}}for(this._nextTick<t&&(this._nextTick=t+ga);this._nextTick<t+.5;)this.play(this._tock?"clock_tock":"clock_tick",{when:this._nextTick}),this._tock=!this._tock,this._nextTick+=ga}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,_m):0}}const aE={room:{gain:.34,duckable:!1},machine:{gain:.85,duckable:!0},control:{gain:.95,duckable:!1},body:{gain:.6,duckable:!0},flight:{gain:.95,duckable:!1}},gm={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},cE={volume:.55,muted:!1},Na={room_tone:{bus:"room",gain:.55,loop:!0,layers:[{src:"noise",noise:"brown",at:0,a:2.6,s:1,r:2,peak:.85,filter:{type:"lowpass",freq:110,q:.7},lfo:{rate:.043478,depth:40,target:"filter"}},{src:"tone",wave:"sine",freq:49.5,at:0,a:3,s:1,r:2.4,peak:.26},{src:"tone",wave:"sine",freq:99,at:0,a:3.2,s:1,r:2.4,peak:.3},{src:"tone",wave:"sine",freq:99.4,at:0,a:3.6,s:1,r:2.4,peak:.24,lfo:{rate:.027027,depth:.6,target:"freq"}},{src:"noise",noise:"white",at:2.41,a:5,s:1,r:3,peak:.1,filter:{type:"bandpass",freq:6400,q:2.4},lfo:{rate:.018868,depth:900,target:"filter"}}]},room_air:{bus:"room",gain:.7,loop:!0,rate:.618,layers:[{src:"noise",noise:"pink",at:0,a:3.4,s:1,r:2.2,peak:.52,filter:{type:"bandpass",freq:300,q:.9},lfo:{rate:.034483,depth:130,target:"filter"}},{src:"noise",noise:"brown",at:1.13,a:4,s:1,r:2.4,peak:.4,filter:{type:"lowpass",freq:210,q:1.1},lfo:{rate:.02439,depth:55,target:"filter"}}]},console_hum:{bus:"room",gain:.6,loop:!0,spot:"console",minGain:.14,layers:[{src:"tone",wave:"sine",freq:148.5,at:0,a:2,s:1,r:1.6,peak:.22},{src:"tone",wave:"sine",freq:297,at:0,a:2.2,s:1,r:1.6,peak:.09,lfo:{rate:.071,depth:.24,target:"gain"}},{src:"tone",wave:"sawtooth",freq:220,at:0,a:2.8,s:1,r:2,peak:.1,filter:{type:"lowpass",freq:640,q:1.4}},{src:"noise",noise:"white",at:.53,a:2.6,s:1,r:2,peak:.26,filter:{type:"bandpass",freq:6200,q:2.6},lfo:{rate:.1129,depth:.36,target:"gain"}}]},scanner_bed:{bus:"room",gain:.62,loop:!0,spot:"scanner",minGain:0,layers:[{src:"tone",wave:"sawtooth",freq:50,at:0,a:1.35,s:1,r:.28,peak:.28,filter:{type:"lowpass",freq:320,q:1.4}},{src:"tone",wave:"sine",freq:150,at:0,a:1.4,s:1,r:.28,peak:.1},{src:"tone",wave:"sine",freq:10125,at:0,a:1.4,s:1,r:.28,peak:.028,lfo:{rate:.37,depth:.3,target:"gain"}},{src:"noise",noise:"white",at:.77,a:1.5,s:1,r:.28,peak:.14,filter:{type:"highpass",freq:4800,q:.7}}]},fault_idle:{bus:"machine",gain:.34,loop:!0,rate:.618,spot:"faultLocator",minGain:0,layers:[{src:"noise",noise:"white",at:0,a:1.2,s:1,r:.8,peak:.34,filter:{type:"bandpass",freq:2900,q:6},lfo:{rate:1.1111,depth:.92,target:"gain"}}]},flight_bed:{bus:"flight",gain:.19,loop:!0,spot:"rotor",minGain:.55,layers:[{src:"tone",wave:"sine",freq:41,at:0,a:.9,s:1,r:2.4,peak:.3,lfo:{rate:.173,depth:6,target:"freq"}},{src:"noise",noise:"brown",at:0,a:1.1,s:1,r:2.4,peak:.8,filter:{type:"lowpass",freq:230,q:1.1},lfo:{rate:.173,depth:110,target:"filter"}},{src:"tone",wave:"sawtooth",freq:32.7,at:0,a:1.2,s:1,r:2.4,peak:.34,filter:{type:"lowpass",freq:260,q:3},lfo:{rate:.29,depth:90,target:"filter"}},{src:"tone",wave:"sawtooth",freq:33.6,at:0,a:1.4,s:1,r:2.4,peak:.28,filter:{type:"lowpass",freq:300,q:2.6},lfo:{rate:.23,depth:70,target:"filter"}},{src:"tone",wave:"sine",freq:99,at:0,a:1.5,s:1,r:2.4,peak:.1,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:7.9,depth:22,target:"freq"}}]},flight_grind:{bus:"flight",gain:.2,loop:!0,rate:.618,spot:"rotor",minGain:.55,layers:[{src:"noise",noise:"pink",at:0,a:1.4,s:1,r:2.4,peak:.58,filter:{type:"bandpass",freq:470,q:1.3},lfo:{rate:.2311,depth:200,target:"filter"}},{src:"noise",noise:"white",at:.61,a:1,s:1,r:2.4,peak:.52,filter:{type:"bandpass",freq:1750,q:3},lfo:{rate:6.1,depth:.45,target:"gain"}},{src:"noise",noise:"brown",at:1.13,a:1.2,s:1,r:2.4,peak:.46,filter:{type:"lowpass",freq:400,q:1.4},lfo:{rate:.1274,depth:130,target:"filter"}}]},demat_launch:{bus:"flight",gain:.54,ducks:{depth:.45,hold:2.6},layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.14,r:.08,peak:.72,filter:{type:"lowpass",freq:1400,to:240,q:1.5}},{src:"tone",wave:"square",freq:128,to:47,at:0,dur:.22,a:.002,d:.06,s:.2,r:.1,peak:.24,filter:{type:"lowpass",freq:700,to:300,q:1}},{src:"tone",wave:"sawtooth",freq:38,to:96,at:.08,dur:1.9,a:.4,d:.3,s:.8,r:.55,peak:.36,jitter:.012,filter:{type:"lowpass",freq:300,to:1500,q:1.2}},{src:"tone",wave:"sawtooth",freq:39.1,to:99.1,at:.11,dur:1.88,a:.44,d:.3,s:.78,r:.55,peak:.3,jitter:-.012,filter:{type:"lowpass",freq:340,to:1650,q:1.1}},{src:"noise",noise:"white",at:.3,dur:2,a:.55,d:.35,s:.62,r:.6,peak:.7,filter:{type:"bandpass",freq:220,to:1750,q:.75}},{src:"tone",wave:"triangle",freq:210,to:690,at:.2,dur:2.1,a:.5,d:.4,s:.55,r:.75,peak:.2,filter:{type:"bandpass",freq:900,q:8},lfo:{rate:.8,depth:400,target:"filter"}},{src:"tone",wave:"sine",freq:148,at:.15,dur:2.1,a:.3,d:.5,s:.5,r:.8,peak:.16,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:6.7,depth:34,target:"freq"}},{src:"tone",wave:"sine",freq:41,to:31,at:0,dur:2.4,a:.03,d:.9,s:.35,r:1.1,peak:.28},{src:"noise",noise:"pink",at:1.13,dur:1.45,a:.3,d:.3,s:.55,r:.55,peak:.42,filter:{type:"bandpass",freq:900,to:2600,q:1.6}},{src:"noise",noise:"brown",at:2.033,dur:.34,a:.004,d:.12,s:.2,r:.18,peak:.4,filter:{type:"lowpass",freq:560,to:170,q:1.3}},{src:"tone",wave:"sine",freq:62,to:41,at:2.033,dur:.38,a:.004,d:.14,s:.24,r:.2,peak:.3}]},demat_rise:{bus:"flight",gain:.5,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:58,to:96,at:0,dur:1.58,a:.1,d:.3,s:.62,r:.55,peak:.42,jitter:.015,filter:{type:"lowpass",freq:900,to:320,q:2.6},lfo:{rate:5.4,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:60.3,to:99.6,at:0,dur:1.58,a:.13,d:.3,s:.6,r:.58,peak:.34,jitter:-.015,filter:{type:"lowpass",freq:1200,to:400,q:2.2},lfo:{rate:5.15,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.08,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:700,to:2400,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.1,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:420,to:1300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.35,d:.35,s:.7,r:.7,peak:.78,filter:{type:"lowpass",freq:130,to:260,q:.9}},{src:"tone",wave:"square",freq:232,to:384,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1400,q:6},lfo:{rate:.9,depth:320,target:"filter"}},{src:"tone",wave:"sine",freq:92,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:400,q:.9},lfo:{rate:7.3,depth:24,target:"freq"}},{src:"noise",noise:"brown",at:1.44,dur:.3,a:.004,d:.11,s:.2,r:.16,peak:.34,filter:{type:"lowpass",freq:520,to:170,q:1.2}}]},demat_fall:{bus:"flight",gain:.51,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:96,to:54,at:0,dur:1.58,a:.09,d:.3,s:.6,r:.55,peak:.4,jitter:.015,filter:{type:"lowpass",freq:1e3,to:300,q:2.6},lfo:{rate:5.05,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:99.4,to:56.2,at:0,dur:1.58,a:.12,d:.3,s:.58,r:.58,peak:.33,jitter:-.015,filter:{type:"lowpass",freq:1300,to:380,q:2.2},lfo:{rate:4.85,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.06,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:2300,to:560,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.08,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:1240,to:300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.3,d:.35,s:.7,r:.7,peak:.8,filter:{type:"lowpass",freq:250,to:110,q:.9}},{src:"tone",wave:"square",freq:216,to:168,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1300,q:6},lfo:{rate:.9,depth:300,target:"filter"}},{src:"tone",wave:"sine",freq:84,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:380,q:.9},lfo:{rate:6.9,depth:22,target:"freq"}},{src:"noise",noise:"brown",at:1.36,dur:.34,a:.003,d:.12,s:.2,r:.18,peak:.42,filter:{type:"lowpass",freq:400,to:130,q:1.4}},{src:"tone",wave:"sine",freq:58,to:38,at:1.36,dur:.36,a:.004,d:.13,s:.22,r:.19,peak:.24}]},remat_land:{bus:"flight",gain:.56,ducks:{depth:.45,hold:3.2},layers:[{src:"tone",wave:"sawtooth",freq:92,to:70,at:0,dur:.95,a:.05,d:.3,s:.8,r:.45,peak:.32,filter:{type:"lowpass",freq:880,to:560,q:1.3},lfo:{rate:9,depth:.62,target:"gain"}},{src:"tone",wave:"sawtooth",freq:71,to:50,at:.85,dur:.95,a:.2,d:.3,s:.8,r:.5,peak:.36,filter:{type:"lowpass",freq:570,to:330,q:1.3},lfo:{rate:6,depth:.64,target:"gain"}},{src:"tone",wave:"sawtooth",freq:50,to:31,at:1.7,dur:.8,a:.24,d:.28,s:.75,r:.52,peak:.34,filter:{type:"lowpass",freq:340,to:170,q:1.4},lfo:{rate:3.4,depth:.66,target:"gain"}},{src:"noise",noise:"white",at:0,dur:2.4,a:.1,d:.6,s:.5,r:1,peak:.26,filter:{type:"bandpass",freq:1800,to:300,q:.7}},{src:"noise",noise:"pink",at:.6,dur:1.7,a:1.35,d:.18,s:.92,r:.3,peak:.55,filter:{type:"bandpass",freq:300,to:2100,q:5}},{src:"noise",noise:"brown",at:2.4,dur:.55,a:.003,d:.18,s:.18,r:.3,peak:.9,filter:{type:"lowpass",freq:1600,to:110,q:1.5}},{src:"tone",wave:"sine",freq:74,to:34,at:2.4,dur:.62,a:.004,d:.22,s:.22,r:.32,peak:.42},{src:"tone",wave:"triangle",freq:131,at:2.418,dur:.95,a:.008,d:.3,s:.2,r:.55,peak:.14,filter:{type:"bandpass",freq:300,q:5}},{src:"tone",wave:"triangle",freq:133.4,at:2.433,dur:.92,a:.008,d:.3,s:.2,r:.55,peak:.12,filter:{type:"bandpass",freq:300,q:5}},{src:"noise",noise:"pink",at:2.44,dur:.9,a:.02,d:.35,s:.15,r:.42,peak:.36,filter:{type:"lowpass",freq:2200,to:400,q:.8}},{src:"tone",wave:"triangle",freq:196,to:99,at:2.46,dur:1.75,a:.02,d:.45,s:.28,r:1.1,peak:.18,filter:{type:"lowpass",freq:800,to:340,q:1}}]},ctl_toggle:{bus:"control",gain:.74,minGain:.1,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.008,s:0,r:.01,peak:.44,filter:{type:"bandpass",freq:2600,to:1900,q:4}},{src:"tone",wave:"square",freq:1860,at:0,dur:.024,a:.001,d:.008,s:0,r:.01,peak:.18,jitter:.05,filter:{type:"lowpass",freq:5200,q:.7}},{src:"noise",noise:"pink",at:.042,dur:.045,a:.001,d:.016,s:0,r:.02,peak:.3,filter:{type:"bandpass",freq:1750,to:1150,q:3.2}},{src:"tone",wave:"triangle",freq:430,to:300,at:.042,dur:.06,a:.002,d:.02,s:.1,r:.03,peak:.22,jitter:.05},{src:"noise",noise:"brown",at:.056,dur:.055,a:.003,d:.02,s:.1,r:.028,peak:.18,filter:{type:"lowpass",freq:480,q:.9}}]},ctl_button:{bus:"control",gain:.52,minGain:.1,layers:[{src:"noise",noise:"brown",at:0,dur:.04,a:.0015,d:.015,s:.1,r:.018,peak:.62,filter:{type:"lowpass",freq:1400,to:520,q:1.1}},{src:"tone",wave:"sine",freq:1244,to:900,at:0,dur:.055,a:.002,d:.018,s:.14,r:.028,peak:.22,jitter:.05},{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.01,peak:.24,filter:{type:"bandpass",freq:1150,q:2.4}},{src:"noise",noise:"brown",at:.078,dur:.028,a:.001,d:.011,s:.06,r:.013,peak:.34,filter:{type:"lowpass",freq:900,to:400,q:1}}]},ctl_dial:{bus:"control",gain:.85,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.19,a:.01,d:.05,s:.6,r:.06,peak:.3,filter:{type:"bandpass",freq:2200,q:1.1}},{src:"noise",noise:"white",at:0,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.5,filter:{type:"bandpass",freq:3400,q:2.2}},{src:"noise",noise:"white",at:.068,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.52,filter:{type:"bandpass",freq:3150,q:2.2}},{src:"noise",noise:"white",at:.136,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.48,filter:{type:"bandpass",freq:3550,q:2.2}},{src:"noise",noise:"brown",at:0,dur:.2,a:.012,d:.06,s:.5,r:.07,peak:.26,filter:{type:"lowpass",freq:620,to:380,q:1}}]},ctl_lever:{bus:"control",gain:.62,minGain:.12,layers:[{src:"noise",noise:"brown",at:0,dur:.05,a:.002,d:.018,s:.1,r:.024,peak:.36,filter:{type:"lowpass",freq:1100,to:420,q:1.2}},{src:"noise",noise:"white",at:.02,dur:.28,a:.028,d:.07,s:.55,r:.13,peak:.4,filter:{type:"bandpass",freq:2400,to:900,q:1.3},lfo:{rate:17,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:196,to:124,at:.02,dur:.28,a:.02,d:.07,s:.5,r:.12,peak:.16},{src:"noise",noise:"brown",at:.28,dur:.19,a:.002,d:.065,s:.18,r:.095,peak:.44,filter:{type:"lowpass",freq:720,to:190,q:1.5}},{src:"tone",wave:"sine",freq:96,to:58,at:.28,dur:.23,a:.003,d:.085,s:.2,r:.11,peak:.28,jitter:.04},{src:"noise",noise:"white",at:.28,dur:.03,a:.001,d:.01,s:0,r:.014,peak:.2,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"sawtooth",freq:74,to:148,at:.3,dur:.34,a:.05,d:.1,s:.68,r:.19,peak:.18,filter:{type:"lowpass",freq:420,to:1050,q:1.1}}]},ctl_lever_big:{bus:"control",gain:.72,minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.06,a:.002,d:.022,s:.1,r:.028,peak:.42,filter:{type:"lowpass",freq:820,to:300,q:1.2}},{src:"noise",noise:"white",at:.024,dur:.43,a:.04,d:.1,s:.6,r:.18,peak:.44,filter:{type:"bandpass",freq:1900,to:640,q:1.2},lfo:{rate:13,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:140,to:78,at:.024,dur:.43,a:.036,d:.1,s:.58,r:.175,peak:.22},{src:"noise",noise:"brown",at:.44,dur:.23,a:.002,d:.085,s:.18,r:.115,peak:.52,filter:{type:"lowpass",freq:640,to:150,q:1.6}},{src:"tone",wave:"sine",freq:128,to:62,at:.44,dur:.28,a:.003,d:.1,s:.2,r:.135,peak:.32},{src:"noise",noise:"white",at:.44,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"highpass",freq:2e3,q:.9}},{src:"tone",wave:"sawtooth",freq:62,to:132,at:.47,dur:.4,a:.06,d:.11,s:.7,r:.21,peak:.22,filter:{type:"lowpass",freq:380,to:980,q:1.1}}]},ctl_guard:{bus:"control",gain:.66,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.13,a:.02,d:.04,s:.55,r:.06,peak:.46,filter:{type:"bandpass",freq:1100,q:12},lfo:{rate:13,depth:380,target:"filter"}},{src:"noise",noise:"brown",at:.13,dur:.05,a:.001,d:.018,s:.1,r:.024,peak:.4,filter:{type:"lowpass",freq:700,to:300,q:1.2}},{src:"noise",noise:"white",at:.148,dur:.026,a:.001,d:.009,s:0,r:.012,peak:.44,filter:{type:"bandpass",freq:3400,to:2400,q:3.4}},{src:"noise",noise:"pink",at:.19,dur:.044,a:.001,d:.016,s:0,r:.02,peak:.48,filter:{type:"bandpass",freq:2100,to:1400,q:3.6}},{src:"tone",wave:"square",freq:1180,at:.19,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"lowpass",freq:4400,q:.7}},{src:"tone",wave:"triangle",freq:330,to:210,at:.225,dur:.16,a:.002,d:.05,s:.14,r:.08,peak:.24,jitter:.05}]},sonic_use:{bus:"control",gain:.58,minGain:.12,layers:[{src:"tone",wave:"square",freq:742,to:968,at:0,dur:.46,a:.01,d:.06,s:.72,r:.09,peak:.58,filter:{type:"bandpass",freq:1500,to:2300,q:3.2},lfo:{rate:16.5,depth:130,target:"freq"}},{src:"tone",wave:"square",freq:751,to:977,at:0,dur:.46,a:.012,d:.06,s:.68,r:.09,peak:.4,filter:{type:"bandpass",freq:1500,to:2300,q:3.2},lfo:{rate:13.2,depth:110,target:"freq"}},{src:"noise",noise:"white",at:0,dur:.46,a:.02,d:.08,s:.5,r:.1,peak:.16,filter:{type:"bandpass",freq:3400,to:5200,q:2},lfo:{rate:16.5,depth:900,target:"filter"}}]},sonic_draw:{bus:"control",gain:.46,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.11,a:.006,d:.05,s:.1,r:.05,peak:.62,filter:{type:"bandpass",freq:2200,to:1100,q:1.1}},{src:"tone",wave:"triangle",freq:1860,to:1520,at:.055,dur:.07,a:.001,d:.02,s:.08,r:.035,peak:.3,jitter:.04}]},sonic_stow:{bus:"control",gain:.42,minGain:.1,layers:[{src:"tone",wave:"triangle",freq:1460,to:1180,at:0,dur:.06,a:.001,d:.018,s:.06,r:.03,peak:.26,jitter:.04},{src:"noise",noise:"pink",at:.03,dur:.13,a:.008,d:.06,s:.08,r:.06,peak:.52,filter:{type:"lowpass",freq:1500,to:600,q:.9}}]},ctl_refuse:{bus:"control",gain:.62,minGain:.4,layers:[{src:"tone",wave:"sawtooth",freq:233.08,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.3,filter:{type:"bandpass",freq:480,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.26,filter:{type:"bandpass",freq:360,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:233.08,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.28,filter:{type:"bandpass",freq:460,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.24,filter:{type:"bandpass",freq:340,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"noise",noise:"brown",at:0,dur:.52,a:.006,d:.12,s:.3,r:.24,peak:.26,filter:{type:"lowpass",freq:700,to:300,q:1.2}}]},panel_wake:{bus:"machine",gain:.76,minGain:.08,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.56,filter:{type:"bandpass",freq:1600,to:1100,q:3}},{src:"noise",noise:"pink",at:.052,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.72,filter:{type:"bandpass",freq:1850,to:1250,q:3}},{src:"noise",noise:"white",at:.118,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.52,filter:{type:"bandpass",freq:1420,to:980,q:3}},{src:"noise",noise:"pink",at:.166,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.62,filter:{type:"bandpass",freq:2050,to:1400,q:3}},{src:"tone",wave:"sine",freq:660,at:.2,dur:.22,a:.004,d:.07,s:.16,r:.12,peak:.2}]},shutter_open:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sawtooth",freq:118,to:132,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:120.4,to:134.7,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:620,to:1350,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.44,filter:{type:"lowpass",freq:340,to:520,q:1}},{src:"noise",noise:"white",at:1.2,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.34,filter:{type:"highpass",freq:1500,q:.8}},{src:"noise",noise:"white",at:1.25,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.3,filter:{type:"highpass",freq:1700,q:.8}},{src:"tone",wave:"sine",freq:1180,to:3140,at:1.21,dur:.34,a:.006,d:.1,s:.24,r:.18,peak:.16},{src:"noise",noise:"white",at:1.21,dur:.2,a:.004,d:.06,s:.2,r:.1,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}}]},shutter_close:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sine",freq:3140,to:1180,at:0,dur:.3,a:.006,d:.09,s:.24,r:.15,peak:.16},{src:"noise",noise:"white",at:0,dur:.18,a:.004,d:.055,s:.18,r:.09,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}},{src:"tone",wave:"sawtooth",freq:132,to:118,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:134.7,to:120.4,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:1350,to:620,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.46,filter:{type:"lowpass",freq:520,to:340,q:1}},{src:"noise",noise:"brown",at:1.2,dur:.15,a:.002,d:.055,s:.08,r:.075,peak:.52,filter:{type:"lowpass",freq:800,to:150,q:1.4}},{src:"tone",wave:"sine",freq:196,to:104,at:1.2,dur:.17,a:.002,d:.062,s:.09,r:.085,peak:.38},{src:"noise",noise:"white",at:1.214,dur:.05,a:.002,d:.018,s:.05,r:.024,peak:.26,filter:{type:"bandpass",freq:2600,q:7}}]},fault_query:{bus:"machine",gain:.54,spot:"faultLocator",minGain:.18,layers:[{src:"noise",noise:"white",at:0,dur:3.96,a:.03,d:.12,s:.88,r:.24,peak:.5,filter:{type:"bandpass",freq:1550,q:6},lfo:{rate:9,depth:.95,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:3.96,a:.04,d:.14,s:.84,r:.26,peak:.46,filter:{type:"bandpass",freq:3100,q:4.5},lfo:{rate:6,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:112,at:0,dur:3.98,a:.05,d:.15,s:.8,r:.3,peak:.16,filter:{type:"lowpass",freq:380,q:1}},{src:"tone",wave:"sine",freq:98.5,at:0,dur:3.98,a:.06,d:.15,s:.82,r:.3,peak:.14},{src:"tone",wave:"sine",freq:100,at:.02,dur:3.96,a:.07,d:.15,s:.82,r:.3,peak:.12},{src:"noise",noise:"brown",at:.03,dur:3.95,a:.2,d:.4,s:.6,r:.6,peak:.4,filter:{type:"lowpass",freq:420,q:1}},{src:"noise",noise:"white",at:3.96,dur:.07,a:.002,d:.026,s:.05,r:.036,peak:.26,filter:{type:"bandpass",freq:1200,to:640,q:2.6}}]},food_dispense:{bus:"machine",gain:.66,spot:"foodMachine",minGain:.16,layers:[{src:"noise",noise:"pink",at:0,dur:.9,a:.03,d:.1,s:.75,r:.16,peak:.44,filter:{type:"bandpass",freq:1250,q:2.2},lfo:{rate:7,depth:.9,target:"gain"}},{src:"tone",wave:"sawtooth",freq:154,to:196,at:0,dur:.7,a:.06,d:.12,s:.68,r:.2,peak:.24,filter:{type:"lowpass",freq:420,to:600,q:1.3},lfo:{rate:11,depth:.4,target:"gain"}},{src:"noise",noise:"white",at:.15,dur:.07,a:.002,d:.026,s:.06,r:.036,peak:.32,filter:{type:"bandpass",freq:2400,to:1500,q:3}},{src:"noise",noise:"white",at:.55,dur:.075,a:.001,d:.028,s:.05,r:.038,peak:.42,filter:{type:"bandpass",freq:1750,to:820,q:2}},{src:"noise",noise:"brown",at:.552,dur:.095,a:.002,d:.035,s:.08,r:.048,peak:.36,filter:{type:"lowpass",freq:600,to:180,q:1.2}},{src:"tone",wave:"triangle",freq:213,at:.552,dur:.3,a:.002,d:.09,s:.18,r:.18,peak:.28,jitter:.04,filter:{type:"bandpass",freq:640,q:9}},{src:"tone",wave:"triangle",freq:341,at:.552,dur:.22,a:.002,d:.07,s:.16,r:.14,peak:.15,jitter:-.04,filter:{type:"bandpass",freq:900,q:8}},{src:"tone",wave:"sawtooth",freq:196,to:120,at:.7,dur:.6,a:.02,d:.16,s:.4,r:.34,peak:.18,filter:{type:"lowpass",freq:600,to:260,q:1.2}}]},door_locked:{bus:"control",gain:.56,spot:"doors",minGain:.28,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.72,filter:{type:"lowpass",freq:1e3,to:180,q:1.6}},{src:"tone",wave:"sine",freq:118,to:64,at:0,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.42},{src:"noise",noise:"brown",at:.13,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.66,filter:{type:"lowpass",freq:900,to:170,q:1.6}},{src:"tone",wave:"sine",freq:112,to:60,at:.13,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.38},{src:"tone",wave:"sawtooth",freq:96,at:.14,dur:.42,a:.01,d:.06,s:.7,r:.19,peak:.2,filter:{type:"bandpass",freq:480,q:7},lfo:{rate:50,depth:.9,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:.48,a:.004,d:.14,s:.22,r:.28,peak:.28,filter:{type:"bandpass",freq:520,to:230,q:1.6}}]},clock_tick:{bus:"machine",gain:.56,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.011,peak:.95,filter:{type:"bandpass",freq:3400,to:2300,q:5}},{src:"noise",noise:"brown",at:0,dur:.045,a:.001,d:.018,s:.1,r:.024,peak:.42,filter:{type:"lowpass",freq:700,to:300,q:1.4}},{src:"tone",wave:"triangle",freq:386,at:.002,dur:.12,a:.002,d:.04,s:.1,r:.07,peak:.2,jitter:.012,filter:{type:"bandpass",freq:430,q:8}}]},clock_tock:{bus:"machine",gain:.88,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"pink",at:0,dur:.024,a:.001,d:.009,s:0,r:.012,peak:1,filter:{type:"bandpass",freq:2600,to:1750,q:2.4}},{src:"noise",noise:"brown",at:0,dur:.048,a:.001,d:.019,s:.1,r:.026,peak:.42,filter:{type:"lowpass",freq:640,to:280,q:1.4}},{src:"tone",wave:"triangle",freq:368,at:.002,dur:.126,a:.002,d:.042,s:.1,r:.074,peak:.2,jitter:.012,filter:{type:"bandpass",freq:410,q:8}}]},prop_wood:{bus:"machine",gain:.62,minGain:.06,layers:[{src:"noise",noise:"brown",at:0,dur:.07,a:.002,d:.026,s:.1,r:.034,peak:.56,filter:{type:"lowpass",freq:1200,to:420,q:1.3}},{src:"tone",wave:"triangle",freq:196,at:0,dur:.18,a:.002,d:.06,s:.12,r:.11,peak:.22,jitter:.06,filter:{type:"bandpass",freq:196,q:8}},{src:"tone",wave:"triangle",freq:311,at:.004,dur:.14,a:.002,d:.048,s:.1,r:.086,peak:.14,jitter:-.06,filter:{type:"bandpass",freq:311,q:9}},{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.2,filter:{type:"bandpass",freq:2200,q:2.2}}]},step_a:{bus:"body",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.034,s:.1,r:.046,peak:.62,filter:{type:"lowpass",freq:820,to:190,q:1.3}},{src:"tone",wave:"sine",freq:148,to:76,at:0,dur:.1,a:.002,d:.036,s:.08,r:.05,peak:.34,jitter:.09},{src:"tone",wave:"triangle",freq:268,at:0,dur:.13,a:.002,d:.045,s:.14,r:.08,peak:.16,jitter:-.09,filter:{type:"bandpass",freq:300,q:7}},{src:"noise",noise:"white",at:0,dur:.04,a:.001,d:.015,s:0,r:.019,peak:.22,filter:{type:"bandpass",freq:2300,to:1400,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.22,filter:{type:"bandpass",freq:520,to:300,q:1.4}}]},step_b:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.086,a:.002,d:.032,s:.1,r:.044,peak:.58,filter:{type:"lowpass",freq:900,to:210,q:1.3}},{src:"tone",wave:"sine",freq:162,to:84,at:0,dur:.096,a:.002,d:.034,s:.08,r:.048,peak:.31,jitter:.09},{src:"tone",wave:"triangle",freq:279,at:0,dur:.126,a:.002,d:.043,s:.14,r:.078,peak:.15,jitter:-.09,filter:{type:"bandpass",freq:312,q:7}},{src:"noise",noise:"white",at:0,dur:.038,a:.001,d:.014,s:0,r:.018,peak:.2,filter:{type:"bandpass",freq:2650,to:1600,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.2,filter:{type:"bandpass",freq:580,to:330,q:1.4}}]},step_land:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.12,r:.08,peak:.82,filter:{type:"lowpass",freq:980,to:150,q:1.5}},{src:"tone",wave:"sine",freq:128,to:58,at:0,dur:.18,a:.002,d:.066,s:.1,r:.09,peak:.46},{src:"noise",noise:"white",at:0,dur:.048,a:.001,d:.018,s:0,r:.024,peak:.28,filter:{type:"bandpass",freq:2e3,to:1100,q:2}},{src:"noise",noise:"pink",at:.021,dur:.3,a:.006,d:.09,s:.18,r:.17,peak:.28,filter:{type:"bandpass",freq:470,to:260,q:1.3}}]},door_bolt:{bus:"control",gain:.6,spot:"doors",minGain:.26,layers:[{src:"tone",wave:"sawtooth",freq:96,at:0,dur:.23,a:.006,d:.07,s:.55,r:.11,peak:.22,filter:{type:"bandpass",freq:480,to:620,q:7},lfo:{rate:50,depth:.9,to:.1,target:"gain"}},{src:"noise",noise:"brown",at:.19,dur:.14,a:.002,d:.05,s:.1,r:.07,peak:.8,filter:{type:"lowpass",freq:1100,to:160,q:1.6}},{src:"tone",wave:"sine",freq:104,to:52,at:.19,dur:.15,a:.002,d:.054,s:.08,r:.076,peak:.44},{src:"noise",noise:"pink",at:.211,dur:.2,a:.004,d:.06,s:.16,r:.11,peak:.24,filter:{type:"bandpass",freq:500,to:290,q:1.4}}]},door_swing:{bus:"room",gain:.5,loop:!0,spot:"doors",minGain:.1,layers:[{src:"noise",noise:"brown",at:0,a:.18,s:1,r:.3,peak:.72,filter:{type:"lowpass",freq:220,q:1.1},lfo:{rate:.6,depth:40,target:"filter"}},{src:"noise",noise:"pink",at:0,a:.24,s:1,r:.34,peak:.3,filter:{type:"bandpass",freq:1300,q:1.3},lfo:{rate:.45,depth:600,target:"filter"}}]},door_stop:{bus:"machine",gain:.54,spot:"doors",minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.15,a:.002,d:.056,s:.08,r:.072,peak:.86,filter:{type:"lowpass",freq:700,to:240,q:1.4}},{src:"tone",wave:"sine",freq:92,to:46,at:0,dur:.16,a:.002,d:.058,s:.06,r:.074,peak:.4},{src:"tone",wave:"triangle",freq:4800,at:.002,dur:.3,a:.001,d:.11,s:.1,r:.17,peak:.14,filter:{type:"bandpass",freq:4800,q:9}},{src:"noise",noise:"pink",at:.021,dur:.19,a:.004,d:.058,s:.14,r:.1,peak:.2,filter:{type:"bandpass",freq:480,to:280,q:1.4}}]},door_shut:{bus:"machine",gain:.56,spot:"doors",minGain:.16,layers:[{src:"noise",noise:"brown",at:0,dur:.13,a:.002,d:.048,s:.1,r:.066,peak:.76,filter:{type:"lowpass",freq:860,to:200,q:1.4}},{src:"tone",wave:"sine",freq:134,to:68,at:0,dur:.14,a:.002,d:.05,s:.08,r:.07,peak:.38},{src:"noise",noise:"brown",at:.14,dur:.12,a:.002,d:.044,s:.08,r:.06,peak:.88,filter:{type:"lowpass",freq:620,to:150,q:1.7}},{src:"tone",wave:"sine",freq:86,to:42,at:.14,dur:.13,a:.002,d:.046,s:.06,r:.064,peak:.46},{src:"noise",noise:"pink",at:.161,dur:.21,a:.004,d:.064,s:.15,r:.115,peak:.22,filter:{type:"bandpass",freq:460,to:270,q:1.4}}]},ext_wind:{bus:"room",gain:.62,loop:!0,rate:.809,layers:[{src:"noise",noise:"brown",at:0,a:3,s:1,r:2.4,peak:.9,filter:{type:"lowpass",freq:120,q:.7},lfo:{rate:.037037,depth:45,target:"filter"}},{src:"noise",noise:"pink",at:0,a:3.6,s:1,r:2.6,peak:.44,filter:{type:"bandpass",freq:900,q:.8},lfo:{rate:.052632,depth:450,target:"filter"}},{src:"noise",noise:"white",at:1.7,a:4.4,s:1,r:3,peak:.09,filter:{type:"bandpass",freq:5200,q:1.8},lfo:{rate:.021277,depth:800,target:"filter"}}]},ext_grit:{bus:"room",gain:.46,loop:!0,rate:.5236,layers:[{src:"noise",noise:"pink",at:0,a:2.8,s:1,r:2.2,peak:.34,filter:{type:"bandpass",freq:1800,q:1.1},lfo:{rate:.043478,depth:500,target:"filter"}},{src:"noise",noise:"white",at:.9,a:3.2,s:1,r:2.4,peak:.16,filter:{type:"highpass",freq:3400,q:.9},lfo:{rate:.028571,depth:700,target:"filter"}}]},step_grit_a:{bus:"body",gain:.52,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.003,d:.042,s:.12,r:.058,peak:.54,filter:{type:"lowpass",freq:560,to:150,q:1.1}},{src:"tone",wave:"sine",freq:124,to:62,at:0,dur:.11,a:.003,d:.04,s:.08,r:.054,peak:.26,jitter:.09},{src:"noise",noise:"white",at:0,dur:.09,a:.002,d:.034,s:.06,r:.046,peak:.26,filter:{type:"bandpass",freq:1500,to:780,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.13,filter:{type:"lowpass",freq:420,to:240,q:.8}}]},step_grit_b:{bus:"body",gain:.5,layers:[{src:"noise",noise:"brown",at:0,dur:.104,a:.003,d:.04,s:.12,r:.056,peak:.5,filter:{type:"lowpass",freq:620,to:168,q:1.1}},{src:"tone",wave:"sine",freq:138,to:70,at:0,dur:.104,a:.003,d:.038,s:.08,r:.052,peak:.24,jitter:.09},{src:"noise",noise:"white",at:0,dur:.086,a:.002,d:.032,s:.06,r:.044,peak:.24,filter:{type:"bandpass",freq:1700,to:880,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.12,filter:{type:"lowpass",freq:460,to:260,q:.8}}]},mute_off:{bus:"control",gain:.55,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.13,a:.004,d:.04,s:.2,r:.07,peak:.28},{src:"tone",wave:"sine",freq:990,at:.07,dur:.16,a:.004,d:.05,s:.22,r:.09,peak:.22},{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.011,s:0,r:.015,peak:.2,filter:{type:"bandpass",freq:2400,q:3}}]}},xm=["room_tone","room_air","console_hum","fault_idle"],lE={hatStand:1.14,chair:.86,clock:.72},uE={scanner:.92,faultLocator:.84,foodMachine:1.12},hE={vinyl:["step_a","step_b"],grit:["step_grit_a","step_grit_b"]},fE=2.4,dE=Math.PI/2,vm=1.8,Mm=2.61,pE=.9,ym=.045,ec=et.FLAT_FACE+ym/2,eu=vm/2,Sm=pE/2,Em=3.284,wm=3.674;if(Math.abs(wm-(Em+Te.RADIUS+.05))>1e-12)throw new Error(`doors: the backstop plane no longer derives — WALK.RADIUS is ${Te.RADIUS}`);const mE=[1,-1].map(n=>Object.freeze({x:n*2.4,z:4.15,hw:1.5,hd:1,rotY:0,y0:0,y1:et.CEIL_H})),_E=[1,-1].map(n=>Object.freeze({x:n*.7375,z:3.2655,hw:.1625,hd:.0705,rotY:0,y0:0,y1:Mm})),xd=Object.freeze({nx:0,nz:1,d:wm}),gE=Object.freeze({opening:"The bolts draw back, and the doors swing inward.",closing:"The doors swing shut, and the bolts drive home.",alreadyOpen:"The doors are already open.",alreadyShut:"The doors are already shut.",busyOpening:"The doors are already opening.",busyClosing:"The doors are already closing.",shutters:"Door control: interlock — the scanner shutters are shut.",flight:"Door control: interlock — the ship is in flight.",remote:"Door control: no answer from the shell.",onYou:"Door control: the doors will not close on you.",locked:"The doors are locked.",lockOnOpen:"Door control: the doors must be shut before they can be locked.",didLock:"Door control: the doors are locked.",didUnlock:"Door control: the doors are unlocked.",unlockInFlight:"Door control: the ship is in flight."}),xE=et.FLAT_FACE-Te.RADIUS,vE=Em+.615+Te.RADIUS;function bm(n){const t=n<=0?0:n>=1?1:n;return t*t*(3-2*t)}function vd(n){return dE*bm(n)}function Ua(n,t){const e=n>=0?1:-1,i=-e*t,s=-e*Sm;return{side:e,rotY:i,hingeX:e*eu,hingeZ:ec,x:e*eu+s*Math.cos(i),z:ec-s*Math.sin(i)}}function ME(n,t){const e=Ua(n,t);return{x:e.x,z:e.z,hw:Sm,hd:ym/2,rotY:e.rotY,y0:0,y1:Mm}}function yE(n){const t=n<=0?0:n>=1?1:n;return 4*t*(1-t)}const Sl=new $t,Md=new $t,yd=new $t;function El(n,t){const e=Array.isArray(n)?n:Array.isArray(n==null?void 0:n.leaves)?n.leaves:Array.isArray(n==null?void 0:n.pivots)?n.pivots:null;if(!e||e.length!==2)throw new Error(`doors: ${t} must hand over exactly two leaf pivots (got ${e?e.length:typeof n})`);const i=e.map((s,r)=>{var a,c;if(!s||!s.isObject3D)throw new Error(`doors: ${t} leaf ${r} is not an Object3D`);let o=((a=s.userData)==null?void 0:a.side)??((c=s.userData)==null?void 0:c.hingeSign)??0;return o||(o=Math.sign(s.position.x)),o||(o=r===0?1:-1,console.warn(`doors: ${t} leaf ${r} publishes no side and sits at x = 0 — assuming ${o>0?"right":"left"} from index order.`)),{obj:s,side:o}});if(i[0].side===i[1].side)throw new Error(`doors: ${t} hands over two leaves on the same side`);return i[0].side>0?i:[i[1],i[0]]}const Sd=.015,Ed=new hi,Qr=new hi;function wd(n,t){for(const{obj:e,side:i}of n){Qr.makeEmpty();for(const s of e.children){const r=s.isMesh?s.geometry:null;r&&(r.boundingBox||r.computeBoundingBox(),r.boundingBox&&(s.updateMatrix(),Ed.copy(r.boundingBox).applyMatrix4(s.matrix),Qr.union(Ed)))}Qr.isEmpty()||Qr.min.z<-Sd&&console.warn(`[doors] ${t} ${i>0?"right":"left"} leaf reaches ${Qr.min.z.toFixed(4)} m BEHIND its hinge, past the ${Sd} m inner-face budget. The hinge looks to be on the leaf's OUTER face, and this module now drives it INWARD (-side * theta) — the leaf will sweep through its own jamb. Box.js must hang it at DOOR_Z - LEAF_T = 0.646 (docs/BOX.md §1.1).`)}}function SE(n,t,e={}){var ft;const i=e.shellDoors;if(!i)throw new Error("doors: needs shellDoors from shell(b, P, { liveDoors: true })");const s=(ft=n==null?void 0:n.userData)==null?void 0:ft.collision;if(!s||!Array.isArray(s.planes)||!Array.isArray(s.boxes))throw new Error("doors: b.userData.collision is missing — shell() must run first (Shell.js:457)");let r=e.audio||null,o=e.console||e.consoleUnit||null;const a=i.group||i.doorGroup||new ge;a.name=a.name||"doors";const c=El(i,"shellDoors");for(const{obj:Q}of c)Q.parent||a.add(Q);let l=e.boxDoors?El(e.boxDoors,"boxDoors"):null;l&&wd(l,"boxDoors");const u=i.discs||null,h=[];if(u){if(!u.isInstancedMesh||u.count!==2)throw new Error(`doors: shellDoors.discs must be an InstancedMesh of 2 (got ${u.isInstancedMesh?u.count:typeof u})`);u.instanceMatrix.usage!==go&&u.instanceMatrix.setUsage(go);for(let Q=0;Q<2;Q++){u.getMatrixAt(Q,Sl);const U=(Math.sign(Sl.elements[12])||(Q===0?1:-1))>0?c[0]:c[1];yd.makeTranslation(U.side*eu,0,ec).invert(),h.push({index:Q,leaf:U,m:yd.multiply(Sl).clone()})}}const f=s.planes.findIndex(Q=>Q.nx===0&&Q.nz===1&&Q.d===et.FLAT_FACE);if(f<0)throw new Error("doors: the +Z half-plane is not in b.userData.collision.planes");const d=s.planes[f],m=s.boxes.findIndex(Q=>Q.rotY===0&&Q.z===ec&&Q.hw===vm/2);if(m<0)throw new Error("doors: Shell's shut leaf box is not in b.userData.collision.boxes");const g=s.boxes[m],_=c.map(({side:Q})=>({...ME(Q,0)})),p=[...mE,..._E,..._];let v=!1;function M(Q){if(Q!==v)if(v=!!Q,v)s.planes.splice(f,1),s.planes.push(xd),s.boxes.splice(m,1),s.boxes.push(...p),S();else{const z=s.planes.indexOf(xd);z>=0&&s.planes.splice(z,1),s.planes.splice(f,0,d);for(const U of p){const Y=s.boxes.indexOf(U);Y>=0&&s.boxes.splice(Y,1)}s.boxes.splice(m,0,g)}}function S(){for(let Q=0;Q<2;Q++){const z=Ua(c[Q].side,L),U=_[Q];U.x=z.x,U.z=z.z,U.rotY=z.rotY}}let A=0,w=!1,E=0,L=0,N="noop",x=!1,y=!0;function T(){for(let Q=0;Q<2;Q++){const z=Ua(c[Q].side,L);c[Q].obj.rotation.y=z.rotY}if(l)for(const{obj:Q,side:z}of l)Q.rotation.y=-z*L;if(u){for(const Q of h){const z=Ua(Q.leaf.side,L);Md.makeRotationY(z.rotY).setPosition(z.hingeX,0,z.hingeZ),u.setMatrixAt(Q.index,Md.multiply(Q.m))}u.instanceMatrix.needsUpdate=!0}}function C(Q){var z;(z=o==null?void 0:o.setLamp)==null||z.call(o,"doors",Q)}function O(Q){return gE[Q]}function k(Q,z){var U;(U=r==null?void 0:r.play)==null||U.call(r,Q,{handle:"door",spot:"doors",...z})}function R(Q){Q!==x&&(x=Q,D())}function D(){var Q,z,U,Y;r&&(x?((Q=r.startLoop)==null||Q.call(r,"door_swing","doorSwing",{spot:"doors"}),(z=r.setLoopLevel)==null||z.call(r,"doorSwing",0,0)):((U=r.setLoopLevel)==null||U.call(r,"doorSwing",0,.06),(Y=r.stopLoop)==null||Y.call(r,"doorSwing")))}let F=!1;function X(Q,z={}){var J,ut,lt;const U=!!Q,Y=z.running??((J=z.rotor)==null?void 0:J.running);return!U&&Y===!0?((ut=o==null?void 0:o.blink)==null||ut.call(o,"doors",1),O("unlockInFlight")):U&&A!==0?((lt=o==null?void 0:o.blink)==null||lt.call(o,"doors",1),O("lockOnOpen")):(U===w||(w=U,C(!0),k(w?"door_bolt":"door_stop")),O(w?"didLock":"didUnlock"))}function K(Q,z={}){var ht,_t,xt,B,ie,Ct,Nt,It,rt;z.audio&&!r&&(r=z.audio),z.console&&!o&&(o=z.console);const U=Q?1:0,Y=z.shuttersOpen??((ht=z.fittings)==null?void 0:ht.shuttersOpen),J=z.running??((_t=z.rotor)==null?void 0:_t.running),ut=z.worldId??((B=(xt=z.walker)==null?void 0:xt.world)==null?void 0:B.id),lt=z.playerZ??((Ct=(ie=z.walker)==null?void 0:ie.position)==null?void 0:Ct.z);if(!z.force&&Y===void 0&&J===void 0&&ut===void 0&&lt===void 0&&!F&&(F=!0,console.warn("[doors] request() was given no interlock context — every interlock is off. Pass { fittings, rotor, walker } (THRESHOLD §3.5).")),U===E)return N="noop",O(A===E?E?"alreadyOpen":"alreadyShut":E?"busyOpening":"busyClosing");if(!z.force){if(U===1&&w)return N="refused",(Nt=o==null?void 0:o.blink)==null||Nt.call(o,"doors",1),O("locked");if(U===0&&!z.atShell&&ut!==void 0&&ut!=="interior")return N="refused",(It=o==null?void 0:o.blink)==null||It.call(o,"doors",1),O("remote");if(U===0&&lt!==void 0&&lt>xE&&lt<vE)return N="refused",(rt=o==null?void 0:o.blink)==null||rt.call(o,"doors",1),O("onYou")}return U===1&&A===0&&k("door_bolt"),E=U,N=U?"open":"close",C(!0),A!==E&&R(!0),O(U?"opening":"closing")}function it(Q){var U;const z=Number.isFinite(Q)?Q:0;if(z>0&&A!==E){const Y=z/fE;A=E>A?Math.min(E,A+Y):Math.max(E,A-Y),Math.abs(E-A)<1e-9&&(A=E),L=vd(A),y=!0,A>0&&M(!0),v&&S(),A===E?(R(!1),A===1&&k("door_stop"),A===0&&(k("door_shut"),M(!1),C(!1))):(U=r==null?void 0:r.setLoopLevel)==null||U.call(r,"doorSwing",yE(A))}y&&(T(),y=!1)}return T(),{group:a,leaves:c.map(Q=>Q.obj),discs:u,get t(){return A},get eased(){return bm(A)},get angle(){return L},get open(){return A>0},get moving(){return A!==E},get state(){return A===0?"shut":A===1?"open":E?"opening":"closing"},get lastAction(){return N},get boxes(){return _},request:K,setLocked:X,get locked(){return w},get flightReady(){return A===0&&w},update:it,collisionFor:M,setBoxDoors(Q){return l=Q?El(Q,"boxDoors"):null,l&&wd(l,"boxDoors"),T(),y=!1,this},setAudio(Q){return r=Q||null,D(),this},setConsole(Q){return o=Q||null,this},force(Q){return this.forceT(Q?1:0)},forceT(Q){return A=Math.min(1,Math.max(0,+Q||0)),E=A,L=vd(A),R(!1),M(A>0),v&&S(),C(A>0),y=!0,T(),this},dispose(){R(!1)}}}const Ln=3.284,Oo=.071,In=Object.freeze({w:1.15,h:2.11}),EE=In.w/2,Mi=Object.freeze({footprint:1.372,half:.686,height:2.9,plinth:1.452,post:.111,bodyTop:2.28,planeZ:Oo}),wE=Object.freeze([Object.freeze({x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:Mi.bodyTop}),Object.freeze({x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:Mi.bodyTop}),Object.freeze({x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:Mi.bodyTop})]),bd=1.4,me="interior",Fa="exterior";function bE(n,t){const e=typeof n=="string"?n:n==null?void 0:n.id;if(e===me)return me;if(e===Fa||t&&e===t)return Fa;throw new Error(`link: unknown world id ${JSON.stringify(e)} — expected '${me}', '${Fa}' or '${t}'`)}function AE(n,t){var c;if(!t||typeof t!="object")throw new Error("link: landing must be a record { site, x, z, yaw }");for(const l of["x","z","yaw"])if(!Number.isFinite(t[l]))throw new Error(`link: landing.${l} must be a finite number, got ${t[l]}`);if(!n||typeof n!="object")throw new Error(`link: no site record for landing.site ${JSON.stringify(t.site)}`);if(n.id&&t.site&&n.id!==t.site)throw new Error(`link: landing names site '${t.site}' but was handed site '${n.id}'`);const e=typeof n.groundY=="function"?n.groundY.bind(n):null,i=Mi.plinth/2,s=Math.cos(t.yaw),r=Math.sin(t.yaw),o=[[0,0],[+i,+i],[+i,-i],[-i,+i],[-i,-i]];for(const[l,u]of o){const h=t.x+l*s+u*r,f=t.z-l*r+u*s,d=e?e(h,f):((c=n.ground)==null?void 0:c.padY)??0;if(!Number.isFinite(d)||Math.abs(d)>.001)throw new Error(`link: landing '${t.site}' (${t.x}, ${t.z}) is not a level pad — ground is ${d} at (${h.toFixed(3)}, ${f.toFixed(3)}), and the link has no y offset to spend`)}const a=n.bounds;if(!a)throw new Error(`link: site '${n.id}' publishes no bounds`);if(Number.isFinite(a.apothem)){const l=Math.hypot(t.x,t.z),u=a.apothem-Te.RADIUS-bd;if(l>u)throw new Error(`link: landing '${t.site}' sits ${l.toFixed(3)} m from the site centre; the box cannot be walked round past ${u.toFixed(3)} m (apothem ${a.apothem} - WALK.RADIUS ${Te.RADIUS} - walk-round ${bd})`)}}function Xu(n,t){const e=typeof n=="string"?ln[n]:n;if(!e)throw new Error(`link: unknown landing ${JSON.stringify(n)} — known: ${Object.keys(ln).join(", ")}`);const i=t&&typeof t=="object"&&t[e.site]?t[e.site]:t&&t.id===e.site?t:null;AE(i,e);const s=e.yaw,r=new $t().makeTranslation(e.x,0,e.z).multiply(new $t().makeRotationY(s)).multiply(new $t().makeTranslation(0,0,Oo-Ln)),o=r.clone().invert(),a=new H(0,0,1),c=new H(0,0,Ln),l=new H(Math.sin(s),0,Math.cos(s)),u=c.clone().applyMatrix4(r),h=new zi(new H(0,0,-1),Ln),f=new zi(l.clone(),-l.dot(u)),d=new rn;d.name="portalCam",d.matrixAutoUpdate=!1,d.matrixWorldAutoUpdate=!1;const m=i.id||e.site,g=v=>bE(v,m),_=v=>g(v)===me?1:-1,p=(v,M,S,A=new H)=>A.set(e.x+v*to(s)+S*eo(s),M,e.z-v*eo(s)+S*to(s));return{site:i,landing:Object.freeze({...e}),siteId:m,M_IE:r,M_EI:o,yaw:s,nI:a,pI:c,nE:l,pE:u,keepI:h,keepE:f,portalCam:d,M(v){return g(v)===me?r:o},keepFor(v){return g(v)===me?h:f},planeFor(v){return g(v)===me?{point:c,normal:a}:{point:u,normal:l}},distanceTo(v,M){return g(v)===me?M.z-Ln:(M.x-u.x)*l.x+(M.z-u.z)*l.z},signFor:_,crossed(v,M,S){const A=_(v);return A*M<0&&A*S>=0},dYaw(v){return g(v)===me?s:-s},other(v){return g(v)===me?Fa:me},boxCollision(){return wE.map(v=>({x:e.x+v.x*to(s)+v.z*eo(s),z:e.z-v.x*eo(s)+v.z*to(s),hw:v.hw,hd:v.hd,rotY:v.rotY+s,y0:v.y0,y1:v.y1}))},capPose(v){const M=In.h/2;return g(v)===me?{position:new H(0,M,Ln),rotY:Math.PI,normal:a.clone().negate()}:{position:new H(u.x,M,u.z),rotY:s,normal:l.clone()}},apertureCorners(v){const M=g(v)===me,S=[];for(const[A,w]of[[1,0],[-1,0],[-1,1],[1,1]]){const E=A*EE,L=w*In.h;S.push(M?new H(E,L,Ln):new H(u.x+E*to(s),L,u.z-E*eo(s)))}return S},toSite:p,toExterior(v,M=new H){return M.copy(v).applyMatrix4(r)},toInterior(v,M=new H){return M.copy(v).applyMatrix4(o)},doorSpillPoint(v=new H){return p(0,1.5,Mi.half,v)},outsideSpawn(v=2.2,M=new H){return p(0,0,Mi.half+v,M)}}}function to(n){return Math.cos(n)}function eo(n){return Math.sin(n)}const ln=Object.freeze({ashfall_pan:Object.freeze({site:"ashfall",name:"the Ashfall — the pan",x:0,z:-4.2,yaw:0}),ashfall_rim:Object.freeze({site:"ashfall",name:"the Ashfall — the rim",x:6.4,z:-4.9,yaw:2.356194}),verge_shelf:Object.freeze({site:"verge",name:"the Verge — the shelf",x:-3.1,z:5.8,yaw:-1.047198}),alley_kerb:Object.freeze({site:"alley",name:"the alley",x:-1.05,z:8.2,yaw:Math.PI,start:Object.freeze({x:-.15,z:-10.4,yaw:0}),boot:"exterior"})}),TE="alley_kerb";function RE(n,{landings:t=ln,fallback:e=TE}={}){const i=o=>n?typeof n=="string"?new URLSearchParams(n).get(o):typeof n.get=="function"?n.get(o):Object.prototype.hasOwnProperty.call(n,o)?String(n[o]):null:null,s=i("landing");if(s){const o=t[s];if(!o)throw new Error(`link: ?landing=${s} is not a known landing — known: ${Object.keys(t).join(", ")}`);return o}const r=i("site");if(r){const o=a=>{const c=i(a);if(c===null||c==="")return 0;const l=Number(c);if(!Number.isFinite(l))throw new Error(`link: ?${a}=${c} is not a number`);return l};return Object.freeze({site:r,x:o("x"),z:o("z"),yaw:o("yaw")})}return t[e]}const be=Math.PI*2,nc=Math.PI/180,dn=n=>n<0?0:n>1?1:n,Yu=n=>n*n*(3-2*n),As=(n,t,e)=>n+(t-n)*e;function wl(n,t=0){const e=n*nc,i=t*nc,s=Math.cos(i);return new H(Math.sin(e)*s,Math.sin(i),Math.cos(e)*s)}function LE(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function CE(n){let t=LE(n)||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Am(n){for(const t of Object.values(n))t&&typeof t=="object"&&Am(t);return Object.freeze(n)}const bl=Object.freeze(["id","name","sky","suns","sun","bounce","hemi","ambient","fog","ground","grit","rock","horizon","bounds","beds","ambience","props","extras","lamps"]),IE=Object.freeze(["distance","camera","area"]),DE=1.4,PE=.8,OE=1.1,NE=.2968,UE=.796;function Al(n){const t=n/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function FE(n){return .2126*Al(n>>16&255)+.7152*Al(n>>8&255)+.0722*Al(n&255)}function kE(n){if(Number.isFinite(n.sun.gain))return n.sun.gain;const t=Math.max(.05,Math.sin(n.sun.elevationDeg*Math.PI/180)),e=Math.max(1e-4,FE(n.ground.colour)*n.sun.intensity*t);return NE/e**UE}function $u(n){if(n==null||typeof n!="object")throw new Error("SITE_SHAPE: not a record");if("exposure"in n)throw new Error(`SITE_SHAPE '${n.id}': there is no 'exposure' key in a site record. toneMappingExposure is renderer-global (main.js:83) and both render passes happen inside one frame, so an exterior exposure would change the console room's look through the portal in the same frame. Brightness comes from light intensities and albedo. THRESHOLD.md §4.2.`);for(const c of bl)if(!(c in n))throw new Error(`SITE_SHAPE '${n.id}': missing key '${c}'`);for(const c of Object.keys(n))if(!bl.includes(c))throw IE.includes(c)?new Error(`SITE_SHAPE '${n.id}': '${c}' is DERIVED here, not typed in the record`):new Error(`SITE_SHAPE '${n.id}': unknown key '${c}' (keys: ${bl.join(", ")})`);const t=Object.keys(nu);if(!t.includes(n.horizon.silhouette))throw new Error(`SITE_SHAPE '${n.id}': horizon.silhouette '${n.horizon.silhouette}' is not a shipped kind (${t.join(" | ")}). A new shape is ~25 lines in SITE_KIND_BUILDERS and is then shared by every site from then on.`);for(const c of n.props)if(!t.includes(c.kind))throw new Error(`SITE_SHAPE '${n.id}': prop kind '${c.kind}' is not a shipped kind (${t.join(" | ")})`);const e=iu[n.bounds.kind];if(!e)throw new Error(`SITE_SHAPE '${n.id}': bounds.kind '${n.bounds.kind}' is not a shipped kind (${Object.keys(iu).join(" | ")}). A new shape is a row in BOUNDS_KINDS and is then shared by every site from then on.`);e.validate(n.bounds,n.id);const i=e.metrics(n.bounds),s=i.area,r=i.max,o={ref:DE,max:r,fade:.25*r,panWidth:PE,panNear:OE},a={far:Math.ceil(n.sky.radius*1.1/10)*10};return Am({...n,area:s,distance:o,camera:a})}const yt=512,no=n=>n*yt,zE=.06,Tl=.055,BE=.035;let Ad=!1;function Tm(){Ad||(Ad=!0,Le("ashField",(n,t={})=>{const e=t.p0??48,i=t.amp??.28,s=t.ripple??2.2,r=ue(n,yt,{p0:e,octaves:4}),o=ue(n,yt,{p0:Math.max(4,Math.round(e/6)),octaves:2}),a=.38,c=Math.max(1,Math.round(s*Math.cos(a))),l=Math.round(s*Math.sin(a)),u=new Float32Array(yt*yt),h=new Float32Array(yt*yt),f=new Float32Array(yt*yt);for(let d=0;d<yt;d++){const m=d/yt;for(let g=0;g<yt;g++){const _=d*yt+g,p=g/yt,v=be*(c*p+l*m)+(o[_]-.5)*2.4,M=.5-.5*Math.cos(v),S=dn(.58*M*(.55+.45*r[_])+.42*r[_]);u[_]=S,h[_]=.7+.3*S,f[_]=.94-.13*S}}return{normalMap:Vn(u,yt,no(i*zE)),ormMap:Ve(yt,h,f,null),normalScale:1,uvScale:[1,1]}}),Le("siteRock",(n,t={})=>{const e=t.p0??24,i=t.amp??1,s=ue(n,yt,{p0:e,octaves:5}),r=ue(n,yt,{p0:e*2,octaves:3}),o=new Float32Array(yt*yt),a=new Float32Array(yt*yt),c=new Float32Array(yt*yt);for(let l=0;l<yt*yt;l++){const u=1-Math.abs(2*r[l]-1),h=dn(.58*s[l]+.42*u);o[l]=h,a[l]=.62+.38*h,c[l]=.92-.2*u}return{normalMap:Vn(o,yt,no(i*Tl)),ormMap:Ve(yt,a,c,null),normalScale:1,uvScale:[1,1]}}),Le("brick",(n,t={})=>{const e=t.rows??8,i=t.cols??4,s=t.joint??.075,r=t.amp??1;if(e%2!==0)throw new Error(`brick: rows must be EVEN (got ${e}) — alternate courses are offset by half a brick, so an odd count faults the bond at the tile seam`);if(i!==Math.round(i)||i<1)throw new Error(`brick: cols must be a whole number of bricks (got ${i}) or the bond does not close horizontally`);const o=ue(n,yt,{p0:128,octaves:4}),a=ue(n,yt,{p0:16,octaves:3}),c=new Float32Array(yt*yt),l=new Float32Array(yt*yt),u=new Float32Array(yt*yt),h=(f,d)=>{const m=Math.sin(f*127.1+d*311.7)*43758.5453;return m-Math.floor(m)};for(let f=0;f<yt;f++){const d=f/yt*e,m=Math.floor(d),g=d-m,_=m&1?.5:0;for(let p=0;p<yt;p++){const v=f*yt+p,M=p/yt*i+_,S=Math.floor(M),A=M-S,w=Math.min(g,1-g)/s,E=Math.min(A,1-A)/(s*.66*(e/i)/2.5),L=Math.min(w,E),N=dn(L*1.6-.15),x=h(m,S),y=.3+.7*N;c[v]=dn(y+.045*(o[v]-.5)+.05*(a[v]-.5)*N),l[v]=(.55+.45*N)*(.91+.18*x),u[v]=.96-.16*N-.05*x}}return{normalMap:Vn(c,yt,no(r*Tl*.55)),ormMap:Ve(yt,l,u,null),normalScale:1,uvScale:[1,1]}}),Le("asphalt",(n,t={})=>{const e=t.p0??112,i=t.amp??1,s=t.wet??.55,r=ue(n,yt,{p0:e,octaves:4}),o=ue(n,yt,{p0:9,octaves:3}),a=ue(n,yt,{p0:5,octaves:2}),c=new Float32Array(yt*yt),l=new Float32Array(yt*yt),u=new Float32Array(yt*yt);for(let h=0;h<yt*yt;h++){const f=r[h];c[h]=dn(.5+.42*(f-.5)+.16*(a[h]-.5)),l[h]=.74+.26*dn(.55+.9*(f-.5));const d=dn((.52-a[h])*3.4)*s;u[h]=dn(.94-.09*o[h]-.72*d)}return{normalMap:Vn(c,yt,no(i*Tl*.3)),ormMap:Ve(yt,l,u,null),normalScale:1,uvScale:[1,1]}}),Le("policePanel",(n,t={})=>{const e=t.inset??.15,i=t.bead??.045,s=t.depth??1,r=t.plain===!0,o=ue(n,yt,{p0:96,octaves:3}),a=ue(n,yt,{p0x:6,p0y:200,octaves:2}),c=new Float32Array(yt*yt),l=new Float32Array(yt*yt),u=new Float32Array(yt*yt),h=e-i,f=e;for(let d=0;d<yt;d++){const m=d/yt;for(let g=0;g<yt;g++){const _=d*yt+g,p=g/yt,v=Math.min(p,1-p,m,1-m),M=r?1:Yu(dn((v-h)/(f-h))),S=.015*(o[_]-.5)+.008*(a[_]-.5);c[_]=dn(M+S),l[_]=.72+.28*M,u[_]=.34+.14*(1-M)+.05*o[_]}}return{normalMap:Vn(c,yt,no(s*BE)),ormMap:Ve(yt,l,u,null),normalScale:1,uvScale:[1,1]}}))}const Rl=new Map;function HE(n,t=null){if(Rl.has(n.id))return Rl.get(n.id);Tm();const e={},i=ls(n.ground.recipe,t?t.child("tex."+n.ground.recipe+"."+n.id):null,{p0:n.ground.relief.p0,amp:n.ground.relief.amp,ripple:n.ground.relief.ripple});e.GROUND=new hc({color:n.ground.colour,roughness:1,metalness:0,specularIntensity:n.ground.specular??.15,normalMap:i.normalMap,normalScale:new Bt(i.normalScale,i.normalScale),aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),e.GROUND.userData.uvScale=[n.ground.uvScale,n.ground.uvScale],e.GROUND.userData.cast=!1,e.GROUND.userData.surface=n.ground.recipe;const s=n.rock.recipe??"siteRock",r=ls(s,t?t.child("tex."+s+"."+n.id):null,n.rock.opts??{}),o=s==="siteRock"?r:ls("siteRock",t?t.child("tex.siteRock."+n.id):null,{}),a=n.rock.tile??n.ground.uvScale*.8,c=n.ground.uvScale*.25,l=(u,h,f)=>{const d=new an({color:u,roughness:1,metalness:0,normalMap:f.normalMap,normalScale:new Bt(f.normalScale,f.normalScale),aoMap:f.ormMap,roughnessMap:f.ormMap,aoMapIntensity:1,vertexColors:!0});return d.userData.uvScale=[h,h],d.userData.cast=!0,d.userData.surface="siteRock",d};e.ROCK=l(n.rock.colour,a,r),e.GRIT=l(n.grit.colour,c,o);for(const[u,h]of Object.entries(n.extras??{})){const f=h.recipe??"siteRock",d=f===s?r:f==="siteRock"?o:ls(f,t?t.child("tex."+f+"."+n.id):null,h.opts??{}),m=new an({color:h.colour,roughness:h.roughness??1,metalness:0,normalMap:d.normalMap,normalScale:new Bt(d.normalScale*(h.relief??1),d.normalScale*(h.relief??1)),aoMap:d.ormMap,aoMapIntensity:1,vertexColors:!0});h.roughness===void 0&&(m.roughnessMap=d.ormMap),m.userData.uvScale=[h.tile??.5,h.tile??.5],m.userData.cast=!0,m.userData.surface="siteRock",e[u]=m}e.SKY=new oi({color:16777215,vertexColors:!0,side:wn,depthWrite:!1,fog:!1}),e.SUNS=new Map;for(const u of n.suns)e.SUNS.has(u.colour)||e.SUNS.set(u.colour,new oi({color:u.colour,fog:!1}));return e.HORIZON=new oi({color:16777215,vertexColors:!0,fog:!1}),e.DECAL=new oi({map:GE(),color:new zt(n.ground.colour).multiplyScalar(.42),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e.DECAL.userData.decal=!0,Rl.set(n.id,e),e}let Ll=null;function GE(){if(Ll)return Ll;const n=64,t=(n-1)/2,e=new Uint8Array(n*n*4);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=(s*n+r)*4,a=Math.hypot(r-t,s-t)/t,c=1-Yu(dn((a-.35)/.65));e[o]=255,e[o+1]=255,e[o+2]=255,e[o+3]=c*255+.5|0}const i=new Ro(e,n,n,_n);return i.minFilter=Ue,i.magFilter=Ue,i.generateMipmaps=!1,i.needsUpdate=!0,Ll=i,i}function ss(n,t,e,i,s,r,o,a,c=0,l=.035){const u=At("siteRock",t,e,i,0,{material:n.ROCK,chamfer:l,cast:!0});return u.position.set(s,r,o),u.rotation.set(c,a,c*.6),u}const Qt=(n,t,e)=>2*(n*t+n*e+t*e),Ui=180;function Cl(n,t,e){const{M:i,distance:s,height:r,base:o,tint:a,haze:c}=t;let l=0;for(let E=0;E<Ui;E++)l=Math.max(l,e(E/Ui));const u=E=>e(E)/(l||1),h=new Float32Array(Ui*6*3),f=new Float32Array(Ui*6*3),d=new Float32Array(Ui*6*3);let m=0;const g=new zt(c),_=new zt(a),p=new zt,v=(E,L,N,x)=>{h[m*3]=E,h[m*3+1]=L,h[m*3+2]=N;const y=Math.pow(dn(L/Math.max(x,1e-6)),.6);p.copy(g).lerp(_,y),f[m*3]=p.r,f[m*3+1]=p.g,f[m*3+2]=p.b;const T=1/Math.max(Math.hypot(E,N),1e-6);d[m*3]=-E*T,d[m*3+1]=0,d[m*3+2]=-N*T,m++},M=(E,L,N,x)=>{const y=L[0]-E[0],T=L[1]-E[1],C=L[2]-E[2],O=N[0]-E[0],k=N[1]-E[1],R=N[2]-E[2],D=T*R-C*k,F=y*k-T*O,X=(E[0]+L[0]+N[0])/3,K=(E[2]+L[2]+N[2])/3,it=D*X+F*K>0?N:L,ft=D*X+F*K>0?L:N;v(E[0],E[1],E[2],x),v(it[0],it[1],it[2],x),v(ft[0],ft[1],ft[2],x)};let S=0;const A=o+r;for(let E=0;E<Ui;E++){const L=E/Ui,N=(E+1)/Ui,x=L*be,y=N*be,T=Math.sin(x)*s,C=Math.cos(x)*s,O=Math.sin(y)*s,k=Math.cos(y)*s,R=o+r*u(L),D=o+r*u(N),F=-14;M([T,F,C],[O,F,k],[O,D,k],A),M([T,F,C],[O,D,k],[T,R,C],A),S+=s*be/Ui*((R+D)/2)}const w=new vn;return w.setAttribute("position",new de(h,3)),w.setAttribute("normal",new de(d,3)),w.setAttribute("color",new de(f,3)),n.add(new Ot(w,i.HORIZON)),{w:s*2,d:s*2,h:A,area:S}}function Il(n,t,e){const i=t.map(()=>n()*be),s=e.reduce((r,o)=>r+o,0);return r=>{let o=0;for(let a=0;a<t.length;a++)o+=e[a]*Math.sin(t[a]*be*r+i[a]);return .5+.5*(o/s)}}const nu=Object.freeze({ridge(n,t){const e=Il(t.rand,[1,2,3,5,8],[1,.62,.38,.22,.11]);return Cl(n,t,i=>.24+.76*e(i))},spires(n,t){const e=Il(t.rand,[2,3,5],[1,.5,.3]),i=t.rand()*be,s=t.rand()*be,r=t.rand()*be,o=a=>Math.max(Math.pow(.5+.5*Math.sin(13*be*a+i),14),Math.max(Math.pow(.5+.5*Math.sin(17*be*a+s),14),Math.pow(.5+.5*Math.sin(23*be*a+r),14)));return Cl(n,t,a=>dn(.16+.34*e(a)+.62*o(a)))},dunes(n,t){const e=Il(t.rand,[1,2,3],[1,.45,.2]);return Cl(n,t,i=>.3+.7*Math.min(1,Yu(e(i))*1.35))},outcrop(n,t){const{M:e,rand:i}=t,s=()=>i()-.5;return n.add(ss(e,1.3,.46,1.05,0,.21,0,0+.2*s(),.03)),n.add(ss(e,.96,1.04,.82,.06*s(),.7,.05*s(),.34+.3*s(),.04)),n.add(ss(e,.64,.72,.58,.1+.1*s(),1.32,-.08+.1*s(),-.48+.3*s(),.05)),n.add(ss(e,.4,.34,.36,.16,1.62,-.04,.9+.4*s(),.08)),n.add(ss(e,.52,.19,.44,.74,.08,-.38,1.2+.5*s(),.06)),{w:1.3,d:1.05,h:1.72,area:Qt(1.3,.46,1.05)+Qt(.96,1.04,.82)+Qt(.64,.72,.58)+Qt(.4,.34,.36)+Qt(.52,.19,.44)}},shard(n,t){const{M:e,rand:i}=t,s=2.6,r=new Ot(new ee(.07,.4,s,5,1),e.ROCK);r.position.set(0,s/2-.1,0),r.rotation.set(.17+.06*i(),i()*be,.06*(i()-.5)),r.castShadow=!0,n.add(r),n.add(ss(e,.86,.3,.78,.04,.13,.02,i()*be,.02)),n.add(ss(e,.4,.22,.34,-.58,.09,.26,i()*be,.05));const o=Math.hypot(s,.33);return{w:.9,d:.82,h:s,area:Math.PI*(.07+.4)*o+Qt(.86,.3,.78)+Qt(.4,.22,.34)}},marker(n,t){const{M:e,rand:i}=t,s=.34,r=1.86,o=new ge;o.position.set(0,-s,0),o.rotation.set(-.2,.04*(i()-.5),0),n.add(o);const a=At("siteRock",.62,r,.22,0,{material:e.ROCK,chamfer:.03,cast:!0});a.position.y=r/2,o.add(a);let c=Qt(.62,r,.22);for(let l=0;l<6;l++){const u=.66-l*.02,h=.058-l*.004,f=At("siteRock",u,h,.26,0,{material:e.ROCK,chamfer:.012,cast:!0});f.position.set(0,.3+l*.26,0),o.add(f),c+=Qt(u,h,.26)}return n.add(ss(e,.46,.2,.4,.34,.07,-.22,i()*be,.04)),c+=Qt(.46,.2,.4),{w:.8,d:.62,h:(r-s)*Math.cos(.2),area:c}},bin(n,t){const{M:e,rand:i}=t,s=.58,r=.72,o=1.06;let a=0;const c=new ge;c.rotation.x=-.055,c.position.y=.075,n.add(c);const l=At("siteRock",s,o,r*.86,0,{material:e.PLASTIC,chamfer:.025,cast:!0});l.position.y=o/2,c.add(l),a+=Qt(s,o,r*.86);const u=At("siteRock",s+.04,.075,r*.86+.05,0,{material:e.PLASTIC,chamfer:.02,cast:!0});u.position.set(0,o+.035,.01),u.rotation.x=-.07*i(),c.add(u),a+=Qt(s+.04,.075,r*.86+.05);const h=At("siteRock",s*.82,.045,.045,0,{material:e.METAL,chamfer:.015,cast:!0});h.position.set(0,o-.06,-r*.43-.03),c.add(h),a+=Qt(s*.82,.045,.045);const f=At("siteRock",s*.9,.05,.07,0,{material:e.METAL,chamfer:.012,cast:!0});f.position.set(0,o*.74,r*.43+.02),c.add(f),a+=Qt(s*.9,.05,.07);for(const d of[-1,1]){const m=At("siteRock",.055,.16,.16,0,{material:e.METAL,chamfer:.05,cast:!0});m.position.set(d*(s/2-.04),.08,-r*.34),n.add(m),a+=Qt(.055,.16,.16)}return{w:s+.06,d:r,h:o+.11,area:a}},skip(n,t){const{M:e,rand:i}=t,s=2.6,r=1.52,o=1.02,a=.035;let c=0;const l=At("siteRock",s,a*2,r,0,{material:e.METAL,chamfer:.01,cast:!0});l.position.y=.09,n.add(l),c+=Qt(s,a*2,r);for(const p of[-1,1]){const v=At("siteRock",s+.1,.09,.1,0,{material:e.METAL,chamfer:.012,cast:!0});v.position.set(0,.045,p*(r/2-.16)),n.add(v),c+=Qt(s+.1,.09,.1)}const u=.3;for(const p of[-1,1]){const v=At("siteRock",s,o,a,0,{material:e.METAL,chamfer:.008,cast:!0});v.position.set(0,.09+o/2*Math.cos(u),p*(r/2+o/2*Math.sin(u))),v.rotation.x=p*u,n.add(v),c+=Qt(s,o,a)}const h=.38;for(const p of[-1,1]){const v=At("siteRock",a,o,r,0,{material:e.METAL,chamfer:.008,cast:!0});v.position.set(p*(s/2+o/2*Math.sin(h)),.09+o/2*Math.cos(h),0),v.rotation.z=-p*h,n.add(v),c+=Qt(a,o,r)}const f=.09+o*Math.cos(u),d=r/2+o*Math.sin(u),m=s/2+o*Math.sin(h);for(const p of[-1,1]){const v=At("siteRock",m*2,.06,.075,0,{material:e.METAL,chamfer:.02,cast:!0});v.position.set(0,f,p*d),n.add(v),c+=Qt(m*2,.06,.075)}for(const p of[-1,1]){const v=At("siteRock",.075,.06,d*2,0,{material:e.METAL,chamfer:.02,cast:!0});v.position.set(p*m,f,0),n.add(v),c+=Qt(.075,.06,d*2)}for(const p of[-1,1])for(const v of[-1,1]){const M=At("siteRock",.1,.2,.05,0,{material:e.METAL,chamfer:.015,cast:!0});M.position.set(p*s*.3,f-.14,v*(d+.03)),n.add(M),c+=Qt(.1,.2,.05)}const g=.09+a,_=(p,v,M,S,A,w)=>{const E=At("siteRock",v,M,S,0,{material:p,chamfer:A,cast:!0});E.position.set((i()-.5)*s*.8,g+M/2-.01,(i()-.5)*r*.64),E.rotation.set(w*(i()-.5),i()*be,w*(i()-.5)),n.add(E),c+=Qt(v,M,S)};for(let p=0;p<4;p++)_(e.ROCK,.1+i()*.12,.065,.102,.006,.3);for(let p=0;p<3;p++){const v=.4+i()*.16;_(e.PLASTIC,v,.3+i()*.1,v*.8,.11,.16)}for(let p=0;p<2;p++)_(e.ROCK,.8+i()*.35,.022,.14,.004,.1);return _(e.METAL,.9,.048,.048,.018,.08),{w:m*2,d:d*2,h:f+.1,area:c}},pipe(n,t){const{M:e}=t,i=6.2,s=.055;let r=0;const o=At("siteRock",s*2,i,s*2,0,{material:e.METAL,chamfer:s*.8,cast:!0});o.position.set(0,i/2,s),n.add(o),r+=Qt(s*2,i,s*2);for(let l=.9;l<i;l+=1.55){const u=At("siteRock",s*2.5,.07,s*2.5,0,{material:e.METAL,chamfer:.02,cast:!0});u.position.set(0,l,s),n.add(u),r+=Qt(s*2.5,.07,s*2.5)}const a=At("siteRock",.24,.26,.17,0,{material:e.METAL,chamfer:.02,cast:!0});a.position.set(0,i-.05,.085),n.add(a),r+=Qt(.24,.26,.17);const c=At("siteRock",s*2.2,.22,.2,0,{material:e.METAL,chamfer:.03,cast:!0});return c.position.set(0,.16,.14),c.rotation.x=.42,n.add(c),r+=Qt(s*2.2,.22,.2),{w:.26,d:.22,h:.4,cz:.11,area:r}},wallLamp(n,t){const{M:e}=t,i=3.05;let s=0;const r=At("siteRock",.05,.05,.42,0,{material:e.METAL,chamfer:.012,cast:!0});r.position.set(0,i,.21),n.add(r),s+=Qt(.05,.05,.42);const o=At("siteRock",.14,.2,.03,0,{material:e.METAL,chamfer:.01,cast:!0});o.position.set(0,i,.015),n.add(o),s+=Qt(.14,.2,.03);const a=At("siteRock",.34,.07,.26,0,{material:e.METAL,chamfer:.02,cast:!0});a.position.set(0,i+.01,.42),n.add(a),s+=Qt(.34,.07,.26);const c=At("siteRock",.26,.02,.19,0,{material:e.HORIZON,chamfer:.008,cast:!1});return c.position.set(0,i-.035,.42),n.add(c),s+=Qt(.26,.02,.19),{w:.36,d:.56,h:.42,y0:2.8,cz:.28,area:s}},crate(n,t){const{M:e,rand:i}=t;let s=0,r=0;for(let a=0;a<3;a++){const c=At("siteRock",1.2,.14,.8,0,{material:e.ROCK,chamfer:.01,cast:!0});c.position.set(.04*(i()-.5),r+.07,.05*(i()-.5)),c.rotation.y=.06*(i()-.5),n.add(c),s+=Qt(1.2,.14,.8),r+=.14}const o=At("siteRock",.62,.5,.54,0,{material:e.ROCK,chamfer:.015,cast:!0});return o.position.set(.12,r+.25,-.04),o.rotation.y=.22,n.add(o),s+=Qt(.62,.5,.54),{w:1.26,d:.86,h:r+.5,area:s}},fireDoor(n,t){const{M:e}=t;let i=0;const s=.92,r=2.05,o=At("siteRock",s+.1,r+.1,.02,0,{material:e.METAL,chamfer:0,cast:!1});o.position.set(0,(r+.1)/2,.02),n.add(o),i+=Qt(s+.1,r+.1,.02);const a=At("siteRock",s,r,.055,0,{material:e.METAL,chamfer:.008,cast:!0});a.position.set(0,r/2,.055),n.add(a),i+=Qt(s,r,.055);const c=At("siteRock",s*.76,.06,.06,0,{material:e.METAL,chamfer:.02,cast:!0});c.position.set(0,1.02,.11),n.add(c),i+=Qt(s*.76,.06,.06);const l=At("siteRock",s+.22,.09,.3,0,{material:e.ROCK,chamfer:.015,cast:!0});return l.position.set(0,.045,.17),n.add(l),i+=Qt(s+.22,.09,.3),{w:s+.22,d:.34,h:.14,cz:.17,area:i}}}),iu=Object.freeze({polygon:{validate(n,t){if(!(n.sides>=5))throw new Error(`SITE_SHAPE '${t}': bounds.sides must be >= 5`);if(!(n.apothem>0))throw new Error(`SITE_SHAPE '${t}': bounds.apothem must be > 0`)},metrics(n){const t=n.sides,e=n.apothem;return{area:t*e*e*Math.tan(Math.PI/t),longest:2*e/Math.cos(Math.PI/t),reach:e/Math.cos(Math.PI/t),max:1.25*2*e/Math.cos(Math.PI/t)}},sample(n,t){const e=Math.sqrt(n())*t.apothem*.97,i=n()*be;return{x:Math.sin(i)*e,z:Math.cos(i)*e}},rim(n,t){const{SITE:e,M:i,boxArea:s}=t,r=e.bounds.sides,o=e.bounds.apothem,a=2*o*Math.tan(Math.PI/r),c=[],l=.58,u=.34,h=Math.min(.55,e.bounds.rimH*.48),f=e.bounds.rimH-h,d=2*l*Math.tan(Math.PI/r)+.06;let m=0;for(let g=0;g<r;g++){const _=g*be/r,p=Math.sin(_),v=Math.cos(_),M=At("siteRock",a+d,h,l,0,{material:i.ROCK,chamfer:.05,cast:!0});M.position.set(p*(o+l/2),h/2,v*(o+l/2)),M.rotation.y=_,n.add(M);const S=At("siteRock",a+d*.6,f,u,0,{material:i.ROCK,chamfer:.07,cast:!0});S.position.set(p*(o+l+u/2-.08),h+f/2,v*(o+l+u/2-.08)),S.rotation.y=_,n.add(S),m+=s(a+d,h,l)+s(a+d*.6,f,u),c.push({nx:p,nz:v,d:o})}return{planes:c,area:m}}},corridor:{validate(n,t){if(!(n.width>0))throw new Error(`SITE_SHAPE '${t}': bounds.width must be > 0`);if(!(n.length>0))throw new Error(`SITE_SHAPE '${t}': bounds.length must be > 0`);if(!(n.wallH>0))throw new Error(`SITE_SHAPE '${t}': bounds.wallH must be > 0`);if(n.width>n.length)throw new Error(`SITE_SHAPE '${t}': bounds.width ${n.width} exceeds length ${n.length} — a corridor is long and thin, and the two are almost certainly the wrong way round`)},metrics(n){const t=n.width,e=n.length;return{area:t*e,longest:Math.sqrt(t*t+e*e),reach:Math.sqrt(t*t+e*e)/2,max:1.25*Math.sqrt(n.width*n.width+n.length*n.length)}},sample(n,t){return{x:(n()-.5)*t.width*.97,z:(n()-.5)*t.length*.97}},rim(n,t){const{SITE:e,M:i,boxArea:s}=t,r=e.bounds,o=r.width/2,a=r.length/2,c=r.wallH,l=r.wallT??.45,u=[];let h=0;const f=(p,v,M,S,A,w,E)=>{const L=At("siteRock",p,v,M,0,{material:i.ROCK,chamfer:.02,cast:!0});L.position.set(S,A,w),L.rotation.y=E,n.add(L),h+=s(p,v,M)};for(const p of[-1,1])f(l,c,r.length+2*l,p*(o+l/2),c/2,0,0),u.push({nx:p,nz:0,d:o});for(const p of[-1,1])f(r.width,c,l,0,c/2,p*(a+l/2),0),u.push({nx:0,nz:p,d:a});const d=.06,m=.09;for(const p of[-1,1])f(l+2*d,m,r.length+2*l,p*(o+l/2),c+m/2,0,0);const g=.11,_=.16;for(const p of[-1,1])f(_,g,r.length,p*(o-_/2),g/2,0,0);return{planes:u,area:h}}}}),Td=2.2,Rd=.02;function WE(n,t,e={}){if(!Object.isFrozen(t))throw new Error("buildSite: pass a record that has been through SITE_SHAPE()");if(e.camera&&e.camera.far<t.sky.radius*1.02)throw new Error(`buildSite '${t.id}': camera.far is ${e.camera.far} but the sky dome is at ${t.sky.radius} m and the horizon at ${t.horizon.distance} m. Set the exterior camera.far to SITE.camera.far (${t.camera.far}) — see SITE_SHAPE's derivation.`);const i=(e.keepOut||[]).map((D,F)=>{if(!Number.isFinite(D.x)||!Number.isFinite(D.z)||!Number.isFinite(D.r)||D.r<=0)throw new Error(`buildSite '${t.id}': keepOut[${F}] is { x: ${D.x}, z: ${D.z}, r: ${D.r} } — every field must be a finite number and r must be positive. A NaN radius disables the keep-out silently, because NaN fails every comparison.`);return{x:D.x,z:D.z,r:D.r}}),s=t.grit.scale[1]*.7,r=Math.hypot(4.2/2,2.1/2),o=(D,F,X,K)=>{for(const it of X)if(Math.hypot(D-it.x,F-it.z)<it.r+K)return!1;return!0};let a=0;const c=HE(t,e.rng??null),l=CE("site."+t.id),u=new ge;u.name="siteLive";const h=Object.create(null),f=Object.create(null),d=(D,F,X)=>(h[D]=(h[D]??0)+X,f[F]=(f[F]??0)+X,dc(F,f[F]),F),m=iu[t.bounds.kind],_=m.metrics(t.bounds).reach;{const D=t.sky.radius,F=new wu(D,12),X=F.getAttribute("position"),K=new Float32Array(X.count*3),it=new zt(t.sky.zenith),ft=new zt(t.sky.horizon),Q=new zt;for(let U=0;U<X.count;U++){const Y=Math.pow(dn(X.getY(U)/D),t.sky.gradPower);Q.copy(ft).lerp(it,Y),K[U*3]=Q.r,K[U*3+1]=Q.g,K[U*3+2]=Q.b}F.setAttribute("color",new de(K,3)),n.add(new Ot(F,c.SKY));const z=be*D*D;d("SKY_ZENITH",t.sky.zenith,z),d("SKY_HORIZON",t.sky.horizon,z)}for(const D of t.suns){const F=t.sky.radius*Math.tan(D.angularDeg*.5*nc),X=new ms(F,28),K=new Ot(X,c.SUNS.get(D.colour));K.position.copy(wl(D.azimuthDeg,D.elevationDeg)).multiplyScalar(t.sky.radius-.5),K.lookAt(0,0,0),n.add(K),d("SUN",D.colour,Math.PI*F*F)}{const D=t.horizon.distance*Math.tan(t.horizon.heightDeg*nc),F=nu[t.horizon.silhouette](n.group,{M:c,rand:l,distance:t.horizon.distance,height:D,base:0,tint:t.horizon.colour,haze:t.fog.colour});d("HORIZON",t.horizon.colour,F.area)}const p=t.ground.discR,v=Math.max(1.8,t.bounds.rimH*1.8),M=Math.max(p+20,t.fog.far*1.25);{const D=new Ot(new ms(p,96),c.GROUND);D.rotation.x=-Math.PI/2,D.receiveShadow=!0,n.add(D);const F=new Ot(new ee(p,p,v,96,1,!0),c.GROUND);F.position.y=-v/2,n.add(F);const X=new Ot(new uc(p,M,96,1),c.GROUND);X.rotation.x=-Math.PI/2,X.position.y=-v,n.add(X),d("GROUND",t.ground.colour,Math.PI*p*p),d("GROUND",t.ground.colour,be*p*v),d("GROUND",t.ground.colour,Math.PI*(M*M-p*p))}const S=1;n.solid(0,-.3,0,2*(_+S),.3,2*(_+S),!0);const{planes:A,area:w}=m.rim(n,{SITE:t,M:c,boxArea:Qt});d("ROCK",t.rock.colour,w);const E=[],L=e.propCollision!==!1,N=wl(t.sun.azimuthDeg,t.sun.elevationDeg),x=new Bt(-N.x,-N.z).normalize().multiplyScalar(.28);let y=0;for(const D of t.props){const F=new ge;F.position.set(D.x,0,D.z),F.rotation.y=D.yaw,F.scale.setScalar(D.scale),n.add(F);const X=nu[D.kind](F,{M:c,rand:l,scale:D.scale});y+=X.area*D.scale*D.scale;const K=X.w*D.scale,it=X.d*D.scale,ft=X.h*D.scale;if(L){const Q=(X.y0??0)*D.scale,z=(X.cz??0)*D.scale;E.push({x:D.x+Math.sin(D.yaw)*z,z:D.z+Math.cos(D.yaw)*z,hw:K/2,hd:it/2,rotY:D.yaw,y0:Q,y1:Q+ft})}VE(n,c,D.x+x.x,D.z+x.y,K,it),D.kind==="marker"&&n.spot("marker",D.x+Math.sin(D.yaw)*1.3,0,D.z+Math.cos(D.yaw)*1.3)}d("ROCK",t.rock.colour,y);{const[D,F]=t.grit.scale;let X=0,K=0;for(let Q=0;Q<t.grit.count;Q++){let z,U,Y;for(let xt=0;;xt++){const B=m.sample(l,t.bounds);if(z=1,U=B.x,Y=B.z,o(U,Y,i,s))break;if(xt>=24){K+=1,z=NaN;break}}if(Number.isNaN(z))continue;const J=As(D,F,l()),ut=J*As(.8,1.4,l()),lt=J*As(.8,1.4,l()),ht=J*As(.4,.9,l()),_t=At("siteRock",ut,ht,lt,0,{material:c.GRIT,chamfer:.012,cast:!1});_t.position.set(U,ht*.05,Y),_t.rotation.set(.1*(l()-.5),l()*be,.1*(l()-.5)),n.add(_t),X+=Qt(ut,ht,lt)}d("GRIT",t.grit.colour,X),a=K;let it=0;const ft=t.ground.drifts??3;for(let Q=0;Q<ft;Q++){let z,U,Y;for(let _t=0;;_t++){const xt=m.sample(l,t.bounds);if(z=1,U=xt.x*.82+Math.sign(xt.x)*1.1,Y=xt.z*.82,o(U,Y,i,r))break;if(_t>=24){z=NaN;break}}if(Number.isNaN(z))continue;const J=As(2.4,4.2,l()),ut=As(1.2,2.1,l()),lt=As(.09,.14,l()),ht=At("ashField",J,lt,ut,0,{material:c.GROUND,chamfer:.055,cast:!1});ht.position.set(U,lt/2-.02,Y),ht.rotation.y=l()*be,n.add(ht),it+=J*ut+2*(J+ut)*lt}d("GROUND",t.ground.colour,it)}const T={};{const D=kE(t),F=new k0(t.sun.colour,t.sun.intensity*D);F.position.copy(N).multiplyScalar(120),T.key=F;const X=new k0(t.bounce.colour,t.bounce.intensity*D);X.position.copy(wl(t.bounce.azimuthDeg,23.962)).multiplyScalar(98.4),T.bounce=X,T.hemi=new Cp(t.hemi.sky,t.hemi.ground,t.hemi.intensity*D),T.ambient=new bu(t.ambient.colour,t.ambient.intensity*D);const K=new xo(16774121,Td*Rd,9,2);K.position.set(0,1.1,0),T.doorSpill=K,T.lamps=(t.lamps??[]).map(it=>{const ft=new xo(it.colour,it.intensity,it.distance??14,2);return ft.position.set(it.x,it.y,it.z),ft.castShadow=!1,ft});for(const it of[T.key,T.bounce,T.hemi,T.ambient,T.doorSpill,...T.lamps])n.group.add(it),n.lights.push(it)}n.userData??(n.userData={}),n.userData.collision={planes:A,hulls:[],boxes:E},n.spot("centre",0,0,0);let C=l()*be,O=0;const k=D=>{C+=D*t.ambience.gustRate*be;const F=Math.sin(C),X=Math.sin(C*.3716+1.7);O=dn(.5+.36*F+.2*X)};k(0);const R=t.beds.map(([D])=>D);return{group:n.group,live:u,areas:h,update:k,SITE:t,keepOut:i,gritRejected:a,fog:new Mu(t.fog.colour,t.fog.near,t.fog.far),distance:t.distance,surface:t.ground.surface,beds:t.beds,bedIds:R,collision:n.userData.collision,lights:T,doorSpill:T.doorSpill,sunDir:N,setDoorSpill(D){T.doorSpill.intensity=Td*Math.max(Rd,dn(D))},contact(D,F){return Lm(c,D,F)},placeContact(D,F,X){D.position.set(F+x.x,.006,X+x.y)},get gust(){return O},get windLevel(){return t.ambience.windGain*(.62+.38*O)},buckets:7}}function VE(n,t,e,i,s,r){const o=Lm(t,s,r),a=Rm(s,r);return o.position.set(e,.006,i),n.add(o),n.decals.push({x0:e-s/2-a,x1:e+s/2+a,z0:i-r/2-a,z1:i+r/2+a}),o}function Rm(n,t){return Math.min(Math.max(Math.min(n,t)*.3,.05),.3)}function Lm(n,t,e){const i=Rm(t,e),s=new Ot(new Ai(t+2*i,e+2*i),n.DECAL);return s.rotation.x=-Math.PI/2,s.name="boxContact",s.renderOrder=2,s}const qE=$u({id:"ashfall",name:"the Ashfall",sky:{zenith:3095895,horizon:11567189,gradPower:2.2,radius:180},suns:[{colour:16771528,angularDeg:.5,azimuthDeg:214,elevationDeg:13}],sun:{colour:16771528,intensity:1.65,azimuthDeg:214,elevationDeg:13,gain:9.667},bounce:{colour:10463428,intensity:.263,azimuthDeg:34},hemi:{sky:11567189,ground:4866104,intensity:.675},ambient:{colour:14734528,intensity:.263},fog:{colour:11567189,near:11,far:84},ground:{colour:4866104,recipe:"ashField",surface:"grit",uvScale:1.1,discR:14,relief:{p0:48,amp:.28,ripple:2.2}},grit:{colour:4143674,count:160,scale:[.08,.3]},rock:{colour:6179644},horizon:{silhouette:"ridge",colour:4143674,heightDeg:3.4,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:1.15},extras:{},lamps:[],beds:[["ext_wind",{rate:1}],["ext_grit",{rate:1}]],ambience:{windGain:.34,gustRate:.14},props:[{kind:"outcrop",x:2.9,z:1.6,yaw:.9,scale:1},{kind:"outcrop",x:-5.1,z:-3.4,yaw:2.6,scale:1.45},{kind:"marker",x:4.8,z:-5.9,yaw:4.1,scale:1},{kind:"shard",x:-1.2,z:6.3,yaw:.3,scale:1.2}]}),XE=$u({id:"verge",name:"the Verge",sky:{zenith:3820126,horizon:11057348,gradPower:1.6,radius:180},suns:[{colour:15398655,angularDeg:.4,azimuthDeg:96,elevationDeg:41}],sun:{colour:15398655,intensity:2.18,azimuthDeg:96,elevationDeg:41,gain:.56},bounce:{colour:10465469,intensity:.31,azimuthDeg:276},hemi:{sky:11057348,ground:7174788,intensity:.94},ambient:{colour:15134975,intensity:.34},fog:{colour:11057348,near:9,far:64},ground:{colour:9345699,recipe:"ashField",surface:"grit",uvScale:1.6,discR:14,relief:{p0:62,amp:.14,ripple:4}},grit:{colour:5596014,count:210,scale:[.06,.22]},rock:{colour:7174788},horizon:{silhouette:"spires",colour:5596014,heightDeg:5.1,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:.9},extras:{},lamps:[],beds:[["ext_wind",{rate:1.34}],["ext_grit",{rate:.78}]],ambience:{windGain:.22,gustRate:.09},props:[{kind:"shard",x:3.6,z:-1.1,yaw:.6,scale:1.3},{kind:"shard",x:-4.8,z:2.4,yaw:2.1,scale:.85},{kind:"outcrop",x:1.9,z:4.1,yaw:1.05,scale:1},{kind:"marker",x:-2.2,z:-5.6,yaw:3.9,scale:1.45}]}),YE=$u({id:"alley",name:"the alley",sky:{zenith:724760,horizon:3810838,gradPower:1.4,radius:180},suns:[{colour:13161184,angularDeg:.54,azimuthDeg:38,elevationDeg:58}],sun:{colour:12570856,intensity:.32,azimuthDeg:38,elevationDeg:58,gain:1},bounce:{colour:11565120,intensity:.18,azimuthDeg:218},hemi:{sky:2761752,ground:1316378,intensity:.43},ambient:{colour:7040890,intensity:.175},fog:{colour:1316124,near:4,far:46},ground:{colour:3026996,recipe:"asphalt",surface:"grit",uvScale:2.4,discR:16,relief:{p0:112,amp:1,ripple:0},drifts:0},grit:{colour:3816254,count:120,scale:[.05,.16]},rock:{colour:6176824,recipe:"brick",tile:.6,opts:{rows:8,cols:4,joint:.075}},horizon:{silhouette:"ridge",colour:921622,heightDeg:.1,distance:150},bounds:{kind:"corridor",width:4,length:24,wallH:7.5,wallT:.45},beds:[["ext_wind",{rate:.55}]],ambience:{windGain:.16,gustRate:.07},extras:{METAL:{colour:4212043,roughness:.54,relief:.35,tile:.55},PLASTIC:{colour:2305062,roughness:.78,relief:.25,tile:.4}},lamps:[{x:-1.58,y:3.02,z:-2,colour:16757847,intensity:26,distance:22},{x:1.58,y:3.02,z:6.4,colour:14674175,intensity:15,distance:17}],props:[{kind:"wallLamp",x:-2,z:-2,yaw:Math.PI/2,scale:1},{kind:"wallLamp",x:2,z:6.4,yaw:-Math.PI/2,scale:.85},{kind:"pipe",x:-2,z:4.6,yaw:Math.PI/2,scale:1},{kind:"pipe",x:2,z:-6.2,yaw:-Math.PI/2,scale:1},{kind:"skip",x:.74,z:2.05,yaw:Math.PI/2+.03,scale:1},{kind:"bin",x:1.5,z:5.1,yaw:-1.63,scale:1},{kind:"bin",x:1.48,z:5.82,yaw:-1.52,scale:1},{kind:"bin",x:1.26,z:-8.4,yaw:-1.2,scale:1},{kind:"fireDoor",x:2,z:1.9,yaw:-Math.PI/2,scale:1},{kind:"crate",x:1.2,z:10.6,yaw:.28,scale:1},{kind:"crate",x:-1.32,z:-10.2,yaw:-.16,scale:.9}]}),Yn=Object.freeze({ashfall:qE,verge:XE,alley:YE}),$E=n=>n<0?0:n>1?1:n,ni=Object.freeze({S:512,TILE:.45,SKIN:15e-5,ROUGH:.44,ROUGH_PEEL:.06,ROUGH_BRUSH:.05,SPECULAR:.02,NORMAL_SCALE:1}),jE=1,KE=.6,ZE=2.4,JE=400,QE=6,tw=512,ew=3;let Ld=!1;function nw(){Ld||(Ld=!0,Le("policePaint",n=>{const t=ni.S,e=t*t,i=ue(n,t,{p0:96,octaves:3}),s=ue(n,t,{p0x:JE,p0y:QE,octaves:2}),r=ue(n,t,{p0x:tw,p0y:ew,octaves:2}),o=new Float32Array(e),a=new Float32Array(e);for(let c=0;c<e;c++)o[c]=jE*(i[c]-.5)+KE*(s[c]-.5)+ZE*(r[c]-.5),a[c]=$E(ni.ROUGH+ni.ROUGH_PEEL*(i[c]-.5)*2-ni.ROUGH_BRUSH*(s[c]-.5)*2);return{normalMap:Vn(o,t,ni.SKIN*(ni.S/ni.TILE)),ormMap:Ve(t,null,a,null),uvScale:[ni.TILE,ni.TILE],normalScale:ni.NORMAL_SCALE,tinted:!0}}))}function iw(n=null){return nw(),ls("policePaint",n)}function ju(n,t){if(!n.defines||!("PHYSICAL"in n.defines)||!("STANDARD"in n.defines))throw new Error(`boxpaint: ${t} lost its PHYSICAL define, so specularIntensity is dead - something copied a Standard material over it (docs/BOX.md 4.1)`);return n}function Dl(n,t,e={}){const i=new hc({color:n,roughness:1,metalness:0,specularIntensity:e.specularIntensity??ni.SPECULAR,normalMap:t.normalMap,normalScale:new Bt(t.normalScale,t.normalScale),aoMap:t.ormMap,roughnessMap:t.ormMap,aoMapIntensity:1,vertexColors:!0});return i.userData.uvScale=t.uvScale,i.userData.cast=!0,i.userData.surface="policePaint",ju(i,"paintMaterial")}const Ts=Object.freeze({S:256,ETCH_P0:32,DRAW_FINE_X:200,DRAW_LONG_Y:4,A_ETCH:.085,A_DRAW:.045,SEED:"tex.frostedGlass"}),sw=n=>n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055;let xa=null;function rw(){if(xa)return xa;const n=Ts.S,t=n*n,e=new Io(Ts.SEED),i=ue(e,n,{p0:Ts.ETCH_P0,octaves:3}),s=ue(e,n,{p0x:Ts.DRAW_FINE_X,p0y:Ts.DRAW_LONG_Y,octaves:2}),r=new Uint8Array(t*4);let o=0,a=2,c=-1;for(let u=0;u<t;u++){const h=1-Ts.A_ETCH*(1-i[u])-Ts.A_DRAW*(1-s[u]),f=Math.round(sw(h)*255);r[u*4]=f,r[u*4+1]=f,r[u*4+2]=f,r[u*4+3]=255,o+=h,h<a&&(a=h),h>c&&(c=h)}const l=new Ro(r,n,n,_n);return l.colorSpace=sn,l.wrapS=l.wrapT=Us,l.magFilter=Ue,l.minFilter=ri,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,xa={map:l,data:r,width:n,height:n,mulMin:a,mulMax:c,mulMean:o/t},xa}const rs=Object.freeze({TILE:.22,NORMAL_SCALE:.35,ROUGHNESS:.9,SPECULAR:.1,GLOW:16773850,GLOW_I:.09});function ow(n,t,e={}){const i=rw(),s=new hc({color:n,map:i.map,emissiveMap:i.map,roughness:e.roughness??rs.ROUGHNESS,metalness:0,specularIntensity:e.specularIntensity??rs.SPECULAR,emissive:e.emissive??rs.GLOW,emissiveIntensity:e.emissiveIntensity??rs.GLOW_I,normalMap:t.normalMap,normalScale:new Bt(rs.NORMAL_SCALE,rs.NORMAL_SCALE),vertexColors:!0});return s.userData.uvScale=[rs.TILE,rs.TILE],s.userData.cast=!1,s.userData.surface="policePaint",ju(s,"glazingMaterial")}function aw(n,t={}){const e=fw(),i=new an({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,emissive:t.emissive??16772301,emissiveMap:e.map,emissiveIntensity:t.emissiveIntensity??.55,vertexColors:!0});return i.userData.cast=!0,i}function cw(n,t={}){const e=new hc({color:n,roughness:t.roughness??.45,metalness:0,specularIntensity:t.specularIntensity??.2,emissive:t.emissive??16773850,emissiveIntensity:t.emissiveIntensity??.95,vertexColors:!0});return e.userData.cast=!1,ju(e,"lensMaterial")}const te=Object.freeze({W:1024,H:128,BOARD_W:1.15,BOARD_H:.13,FIELD:Object.freeze([228,224,210]),INK:Object.freeze([26,29,36]),L1_TEXT:"POLICE",L1_CAP:60,L1_TOP:34,L1_X0:62,L1_X1:402,L1_WEIGHT:.13,L3_TEXT:"BOX",L3_CAP:60,L3_TOP:34,L3_X0:660,L3_X1:960,L3_WEIGHT:.13,L2_TEXT:"PUBLIC",L2_CAP:24,L2_TOP:28,L2_X0:452,L2_X1:622,L2_WEIGHT:.165,L4_TEXT:"CALL",L4_CAP:24,L4_TOP:68,L4_X0:452,L4_X1:622,L4_WEIGHT:.165}),lw=te.W/te.BOARD_W/(te.H/te.BOARD_H),uw={A:[[[0,10],[3,0],[6,10]],[[1.4,5.4],[4.6,5.4]]],B:[[[0,0],[0,10]],[[0,0],[3.4,0],[4.7,.5],[5.4,1.6],[5.4,3.4],[4.7,4.5],[3.4,5],[0,5]],[[0,5],[3.8,5],[5.2,5.6],[6,6.8],[6,8.2],[5.2,9.4],[3.8,10],[0,10]]],C:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.15,9.25],[5.12,8.25]]],D:[[[0,0],[0,10]],[[0,0],[3,0],[4.6,.55],[5.6,1.9],[6,3.6],[6,6.4],[5.6,8.1],[4.6,9.45],[3,10],[0,10]]],E:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]],[[0,10],[5.8,10]]],F:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]]],G:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.5,9.1],[5.6,7.9],[6,6.2]],[[3.3,5.7],[6,5.7]]],H:[[[0,0],[0,10]],[[6,0],[6,10]],[[0,5],[6,5]]],I:[[[2,0],[2,10]]],J:[[[5,0],[5,7.3],[4.6,8.7],[3.6,9.45],[2.3,9.6],[1.1,9.3],[.25,8.5],[0,7.6]]],K:[[[0,0],[0,10]],[[5.8,0],[.4,5.4]],[[2.3,3.6],[6,10]]],L:[[[0,0],[0,10]],[[0,10],[5.6,10]]],M:[[[0,10],[0,0],[3,6],[6,0],[6,10]]],N:[[[0,10],[0,0],[6,10],[6,0]]],O:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]]],P:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]]],Q:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]],[[3.7,7.4],[6,10]]],R:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]],[[2.6,5.6],[6,10]]],S:[[[5.9,2.1],[5.2,.95],[3.9,.35],[2.3,.4],[1,1],[.25,2.1],[.35,3.3],[1.1,4.15],[2.4,4.7],[3.9,5.3],[5.1,5.9],[5.85,6.9],[5.9,8.1],[5.1,9.2],[3.7,9.65],[2.1,9.6],[.8,9.1],[.1,8]]],T:[[[0,0],[6,0]],[[3,0],[3,10]]],U:[[[0,0],[0,6.8],[.4,8.2],[1.5,9.23],[3,9.6],[4.5,9.23],[5.6,8.2],[6,6.8],[6,0]]],V:[[[0,0],[3,10],[6,0]]],W:[[[0,0],[1.5,10],[3,3.4],[4.5,10],[6,0]]],X:[[[0,0],[6,10]],[[6,0],[0,10]]],Y:[[[0,0],[3,5.2],[6,0]],[[3,5.2],[3,10]]],Z:[[[0,0],[6,0]],[[6,0],[0,10]],[[0,10],[6,10]]],"&":[[[6,8.6],[4.4,6.4],[3,4.6],[2,3.2],[1.7,1.9],[2.5,.6],[3.7,.5],[4.5,1.4],[4.3,2.7],[3.2,4],[1.9,5.3],[.8,6.7],[.5,8.2],[1.2,9.3],[2.6,9.7],[4.1,9.2],[5.2,8],[6,6.6]]]," ":[]},hw={I:4," ":3.4},va=n=>hw[n]??6,Cd=2.2;let Ma=null;function fw(){if(Ma)return Ma;const n=te.W,t=te.H,e=new Float32Array(n*t),i=v=>t-1-v,s=oo(e,n,t,te.L1_TEXT,te.L1_CAP,te.L1_TOP,te.L1_X0,te.L1_X1,te.L1_WEIGHT),r=oo(e,n,t,te.L2_TEXT,te.L2_CAP,te.L2_TOP,te.L2_X0,te.L2_X1,te.L2_WEIGHT),o=oo(e,n,t,te.L3_TEXT,te.L3_CAP,te.L3_TOP,te.L3_X0,te.L3_X1,te.L3_WEIGHT),a=oo(e,n,t,te.L4_TEXT,te.L4_CAP,te.L4_TOP,te.L4_X0,te.L4_X1,te.L4_WEIGHT),c=new Uint8Array(n*t*4),[l,u,h]=te.FIELD,[f,d,m]=te.INK;let g=0,_=0;for(let v=0;v<t;v++){const M=v*n,S=i(v)*n,A=1-(v+.5)/t;for(let w=0;w<n;w++){const E=e[M+w],L=(S+w)*4;c[L]=l+(f-l)*E+.5,c[L+1]=u+(d-u)*E+.5,c[L+2]=h+(m-h)*E+.5,c[L+3]=255,g+=E,_+=E*A}}const p=new Ro(c,n,t,_n);return p.colorSpace=sn,p.wrapS=p.wrapT=Us,p.magFilter=Ue,p.minFilter=ri,p.generateMipmaps=!0,p.anisotropy=8,p.needsUpdate=!0,Ma={map:p,data:c,width:n,height:t,lines:[s,r,o,a],headlineBand:[te.L1_TOP,te.L1_TOP+te.L1_CAP],inkCentroidV:g>0?_/g:.5},Ma}function oo(n,t,e,i,s,r,o,a,c,l=lw){const u=i.split(" ").filter(N=>N.length),h=u.reduce((N,x)=>N+x.length,0),f=u.length-1,d=h-u.length,m=s/10,g=m*l;let _=0;for(const N of u)for(const x of N)_+=va(x);const p=.5*c*s,v=(a-o-2*p)/g,M=d+f*Cd,S=M>0?(v-_-f*va(" "))/M:0,A=va(" ")+Cd*S;let w=(o+p)/g,E=1/0,L=-1/0;for(let N=0;N<u.length;N++){const x=u[N];for(let y=0;y<x.length;y++){const T=x[y],C=uw[T];if(C===void 0)throw new Error(`boxpaint: no glyph for '${T}'`);for(const O of C){for(const k of O){const R=(w+k[0])*g;R-p<E&&(E=R-p),R+p>L&&(L=R+p)}dw(n,t,e,O,g,m,w,r,p)}w+=va(T),y<x.length-1&&(w+=S)}N<u.length-1&&(w+=A)}return{text:i,cap:s,topY:r,x0:o,x1:a,track:S,wordGap:A,stem:2*p,left:E,right:L}}function dw(n,t,e,i,s,r,o,a,c){for(let l=0;l<i.length-1;l++){const u=(o+i[l][0])*s,h=a+i[l][1]*r,f=(o+i[l+1][0])*s,d=a+i[l+1][1]*r,m=f-u,g=d-h,_=m*m+g*g,p=c+1,v=Math.max(0,Math.floor(Math.min(u,f)-p)),M=Math.min(t-1,Math.ceil(Math.max(u,f)+p)),S=Math.max(0,Math.floor(Math.min(h,d)-p)),A=Math.min(e-1,Math.ceil(Math.max(h,d)+p));for(let w=S;w<=A;w++){const E=w+.5,L=w*t;for(let N=v;N<=M;N++){const x=N+.5;let y=_>0?((x-u)*m+(E-h)*g)/_:0;y=y<0?0:y>1?1:y;const T=x-(u+y*m),C=E-(h+y*g),O=c+.5-Math.sqrt(T*T+C*C);if(O<=0)continue;const k=O>1?1:O;k>n[L+N]&&(n[L+N]=k)}}}}const ao=Object.freeze({W:192,H:256,PLATE_W:.288,PLATE_H:.384,FIELD:te.FIELD,INK:te.INK,BORDER_IN:4,BORDER_T:8,L1_TEXT:"POLICE TELEPHONE",L1_CAP:15,L1_TOP:22,L1_X0:18,L1_X1:174,L1_WEIGHT:.15,L2_TEXT:"FREE",L2_CAP:28,L2_TOP:44,L2_X0:52,L2_X1:140,L2_WEIGHT:.13,L3_TEXT:"FOR USE OF",L3_CAP:14,L3_TOP:78,L3_X0:36,L3_X1:156,L3_WEIGHT:.17,L4_TEXT:"PUBLIC",L4_CAP:28,L4_TOP:96,L4_X0:44,L4_X1:148,L4_WEIGHT:.13,L5_TEXT:"ADVICE & ASSISTANCE",L5_CAP:12,L5_TOP:140,L5_X0:16,L5_X1:176,L5_WEIGHT:.175,L6_TEXT:"OBTAINABLE IMMEDIATELY",L6_CAP:12,L6_TOP:156,L6_X0:12,L6_X1:180,L6_WEIGHT:.175,L7_TEXT:"OFFICERS & CARS",L7_CAP:12,L7_TOP:180,L7_X0:30,L7_X1:162,L7_WEIGHT:.175,L8_TEXT:"RESPOND TO ALL CALLS",L8_CAP:12,L8_TOP:196,L8_X0:18,L8_X1:174,L8_WEIGHT:.175,L9_TEXT:"PULL TO OPEN",L9_CAP:20,L9_TOP:218,L9_X0:22,L9_X1:170,L9_WEIGHT:.13}),pw=ao.W/ao.PLATE_W/(ao.H/ao.PLATE_H);let ya=null;function mw(){if(ya)return ya;const n=ao,t=n.W,e=n.H,i=new Float32Array(t*e),s=M=>e-1-M;{const M=n.BORDER_IN,S=n.BORDER_IN+n.BORDER_T;for(let A=M;A<e-M;A++){const w=A>=S&&A<e-S;for(let E=M;E<t-M;E++)w&&E>=S&&E<t-S||(i[A*t+E]=1)}}const r=[];for(let M=1;M<=9;M++)r.push(oo(i,t,e,n["L"+M+"_TEXT"],n["L"+M+"_CAP"],n["L"+M+"_TOP"],n["L"+M+"_X0"],n["L"+M+"_X1"],n["L"+M+"_WEIGHT"],pw));const[o,a,c]=r,l=new Uint8Array(t*e*4),[u,h,f]=n.FIELD,[d,m,g]=n.INK;let _=0,p=0;for(let M=0;M<e;M++){const S=M*t,A=s(M)*t,w=1-(M+.5)/e;for(let E=0;E<t;E++){const L=i[S+E],N=(A+E)*4;l[N]=u+(d-u)*L+.5,l[N+1]=h+(m-h)*L+.5,l[N+2]=f+(g-f)*L+.5,l[N+3]=255,_+=L,p+=L*w}}const v=new Ro(l,t,e,_n);return v.colorSpace=sn,v.wrapS=v.wrapT=Us,v.magFilter=Ue,v.minFilter=ri,v.generateMipmaps=!0,v.anisotropy=8,v.needsUpdate=!0,ya={map:v,data:l,width:t,height:e,lines:r,inkCentroidV:_>0?p/_:.5,inkFraction:_/(t*e)},ya}function _w(n,t={}){const e=mw(),i=new an({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,vertexColors:!0});return i.userData.cast=!1,i}const Ne=Object.freeze({FOOT:1.372,HALF:.686,WALL_T:.07,FRONT_T:.1,P_E:.071,DOOR_Z:.686,HINGE_Z:.646,FRONT_BACK:.586,APER_W:1.15,APER_HW:.575,APER_H:2.11,POST:.111,PROUD:.02,BODY_H:2.28,PLINTH_W:1.452,PLINTH_H:.12,PLINTH_PROUD:.04,SIGN_W:1.452,SIGN_Y0:2.28,SIGN_Y1:2.5,SIGN_BOARD_H:.13,SIGN_BOARD_T:.014,ROOF:Object.freeze([Object.freeze({w:1.412,y0:2.5,y1:2.57}),Object.freeze({w:1.312,y0:2.57,y1:2.63}),Object.freeze({w:1.212,y0:2.63,y1:2.68})]),HEAD_D:.615,REVEAL_D:.515,REVEAL_CLEAR:.02,FRAME_T:.02,FRAME_H:2.153,STILE_W:.075,MUNTIN_W:.07,STILE_AT:.5575,BAY_AT:.2775,PANEL_W:.52,PANEL_T:.01,PANEL_LO_H:.52,PANEL_LO_Y:.49,PANEL_HI_H:.58,PANEL_HI_Y:1.11,LEAF_W:.575,LEAF_H:2.11,LEAF_T:.04,OPEN_ANGLE:Math.PI/2,LEAF_PROUD_OUT:.025,LEAF_PROUD_IN:.015,INNER_SETBACK:.06,TOP:3.07,CHAMFER:.004}),Id=Object.freeze([Object.freeze({id:"postR",x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"postL",x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"block",x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:2.28})]),cr=(n,t,e,i,s,r)=>({min:new H(n,t,e),max:new H(i,s,r)}),Cm=Object.freeze([cr(-.686,0,-.686,.686,2.28,-.616),cr(.616,0,-.686,.686,2.28,.686),cr(-.686,0,-.686,-.616,2.28,.686),cr(-.726,2.28,-.726,.726,2.5,.726),cr(.575,0,.586,.686,2.28,.686),cr(-.686,0,.586,-.575,2.28,.686)]);let Pl=null;function gw(){return Pl||(Pl=new Xa(Cm,1)),Pl}const Rs=Object.freeze({BLUE:1519185,TRIM:991545,SIGN:13223090,LENS:15985366,GLASS:10196622,NOTICE:13223090,BRASS:11044671}),Sa=Object.freeze({colour:16773332,intensity:.55,distance:2.6,decay:2});let Ol=null;function Im(n=null){if(Ol)return Ol;const t=iw(n),e={BLUE:Dl(Rs.BLUE,t),TRIM:Dl(Rs.TRIM,t),GLASS:ow(Rs.GLASS,t),SIGN:aw(Rs.SIGN),LENS:cw(Rs.LENS),NOTICE:_w(Rs.NOTICE),BRASS:Dl(Rs.BRASS,t)};for(const i of hr){const s=e[i];if(s.metalness!==0)throw new Error(`boxPalette: ${i}.metalness is ${s.metalness}; there is no envMap in either scene, so metalness above 0 only scales diffuse down (THRESHOLD 10 I)`);if(s.metalnessMap)throw new Error(`boxPalette: ${i} carries a metalnessMap; see the metalness rule above`)}return Ol=e,e}let Nl=null,Ul=null;function xw(){if(Nl)return Nl;const n=ks(Ne.APER_W,Ne.SIGN_BOARD_H,Ne.SIGN_BOARD_T,Ne.CHAMFER).clone(),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,Nl=n,n}const Bi=Object.freeze({SIDE:1,X:.135,ESC_Y:1.25,ESC_R:.024,ESC_T:.006,ESC_Z:.009,KEY_W:.007,KEY_H:.015,PULL_Y:1.07,PULL_W:.014,PULL_H:.12,BOSS:.016,BOSS_D:.006,BOSS_Z:.009,PULL_D:.006,PULL_Z:.011}),vw=(()=>{const n=Bi,t=(e,i,s)=>2*(e*i+e*s+i*s);return t(n.ESC_R*2,n.ESC_R*2,n.ESC_T)+t(n.PULL_W,n.PULL_H,n.PULL_D)+2*t(n.BOSS,n.BOSS,n.BOSS_D)})();let Ea=null;function Mw(){if(Ea)return Ea;const n=Bi,t=[],e=(r,o,a,c)=>{const l=_c(r.index?r.toNonIndexed():r);return l.translate(o,a,c),t.push(l),l},i=new ee(n.ESC_R,n.ESC_R,n.ESC_T,20).toNonIndexed();i.rotateX(Math.PI/2),e(i,0,n.ESC_Y,n.ESC_Z),e(ks(n.PULL_W,n.PULL_H,n.PULL_D,Ne.CHAMFER).clone(),0,n.PULL_Y,n.PULL_Z);for(const r of[-1,1])e(ks(n.BOSS,n.BOSS,n.BOSS_D,Ne.CHAMFER).clone(),0,n.PULL_Y+r*(n.PULL_H/2-n.BOSS/2),n.BOSS_Z);const s=Du(t,!1);if(!s)throw new Error("policeBox: the door furniture merged to null — mismatched attributes");return Ea=s,Ea}const Fn=Object.freeze({W:.288,H:.384,T:.004,CX:.305,CY:1.145,CZ:.696,SIDE:-1}),yw=2*(Fn.W*Fn.H+Fn.W*Fn.T+Fn.H*Fn.T);function Sw(){if(Ul)return Ul;const n=_c(ks(Fn.W,Fn.H,Fn.T,Ne.CHAMFER).clone()),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,Ul=n,n}const nn=Object.freeze((()=>{const s=.17066666666666666;return{BAR:.024,H:.56,Y:1.76,ROWS:3,LIGHT_H:s,DY:(s+.024)/2}})()),on=Object.freeze({W:.395,H:nn.H,T:.004,X:.2875,Y:nn.Y,Z:.688}),Ew=2*(on.W*on.H+on.W*on.T+on.H*on.T),hr=["BLUE","TRIM","GLASS","SIGN","LENS","NOTICE","BRASS"];function ww(n,t=Im()){var k;for(const R of hr)if(!(t!=null&&t[R]))throw new Error(`policeBox: palette is missing '${R}' (needs ${hr.join(", ")})`);const e=Ne,i=new Set,s={};let r=0;const o=R=>hr.find(D=>t[D]===R)||"UNKNOWN",a=(R,D)=>{const F=o(R);s[F]=(s[F]||0)+D},c=(R,D,F,X,K,it,ft,Q,z=0,U=null)=>{var J;let Y;return U?(Y=new Ot(U,R),Y.castShadow=((J=R.userData)==null?void 0:J.cast)??!1,Y.receiveShadow=!0):Y=At("appliance",F,X,K,0,{material:R,chamfer:e.CHAMFER}),Y.position.set(it,ft,Q),z&&(Y.rotation.y=z),Y.name=D,n.add(Y),i.add(Y.geometry.uuid),r++,a(R,2*(F*X+F*K+X*K)),Y},l=Math.PI/2,u=Object.freeze([{r:0,ax:0,az:-1},{r:l,ax:1,az:0},{r:l,ax:-1,az:0}]),h=(R,D,F)=>R.ax?[R.ax*F,D]:[D,R.az*F];for(const[R,D,F]of[[0,-.706,0],[.706,0,l],[-.706,0,l]])c(t.TRIM,"plinth",e.PLINTH_W,e.PLINTH_H,e.PLINTH_PROUD,R,e.PLINTH_H/2,D,F);for(const[R,D,F]of[[0,-.651,0],[.651,0,l],[-.651,0,l]])c(t.BLUE,"bodyWall",e.FOOT,e.BODY_H,e.WALL_T,R,e.BODY_H/2,D,F);for(const R of[-1,1])for(const D of[-1,1])c(t.TRIM,"cornerPost",e.POST,e.BODY_H,e.POST,R*.6505,e.BODY_H/2,D*.6505);for(const R of[-1,1])c(t.BLUE,"doorJamb",e.POST,e.BODY_H,e.FRONT_T,R*.6305,e.BODY_H/2,e.DOOR_Z-e.FRONT_T/2);c(t.BLUE,"headLining",e.APER_W,e.BODY_H-e.APER_H,e.HEAD_D,0,(e.APER_H+e.BODY_H)/2,e.P_E+e.HEAD_D/2);const f=e.HALF-e.WALL_T-e.APER_HW-e.REVEAL_CLEAR;for(const R of[-1,1])c(t.BLUE,"revealSide",f,e.APER_H,e.REVEAL_D,R*(e.APER_HW+e.REVEAL_CLEAR+f/2),e.APER_H/2,e.P_E+e.REVEAL_D/2);c(t.TRIM,"sillPlate",2*(e.HALF-e.WALL_T),.004,e.REVEAL_D,0,.002,e.P_E+e.REVEAL_D/2);const d=[{y:.185,h:.07},{y:.785,h:.05},{y:1.445,h:.07},{y:2.075,h:.07}],m=e.HALF+e.FRAME_T/2;for(const R of u){for(const K of d){const[it,ft]=h(R,0,m);c(t.TRIM,"rail",e.FOOT,K.h,e.FRAME_T,it,K.y,ft,R.r)}for(const K of[-1,1]){const[it,ft]=h(R,K*e.STILE_AT,m);c(t.TRIM,"faceStile",e.STILE_W,e.FRAME_H,e.FRAME_T,it,e.BODY_H-e.FRAME_H/2,ft,R.r)}const[D,F]=h(R,0,m);c(t.TRIM,"faceMuntin",e.MUNTIN_W,e.FRAME_H,e.FRAME_T,D,e.BODY_H-e.FRAME_H/2,F,R.r);const X=e.HALF+e.PANEL_T/2;for(const K of[-1,1])for(const it of[{h:e.PANEL_LO_H,y:e.PANEL_LO_Y},{h:e.PANEL_HI_H,y:e.PANEL_HI_Y}]){const[ft,Q]=h(R,K*e.BAY_AT,X);c(t.BLUE,"panelField",e.PANEL_W,it.h,e.PANEL_T,ft,it.y,Q,R.r)}}const g=e.HALF+e.PROUD-e.APER_HW;for(const R of[-1,1])c(t.TRIM,"archSide",g,e.FRAME_H,e.FRAME_T,R*(e.APER_HW+g/2),e.BODY_H-e.FRAME_H/2,e.DOOR_Z+e.FRAME_T/2);c(t.TRIM,"archHead",2*(e.HALF+e.PROUD),.17,e.FRAME_T,0,e.BODY_H-.085,e.DOOR_Z+e.FRAME_T/2);const _=.79,p=nn.H,v=nn.BAR,M=e.HALF+.006;for(const R of u){const[D,F]=h(R,0,M);c(t.GLASS,"window",_,p,.012,D,nn.Y,F,R.r);const[X,K]=h(R,0,m);for(const it of[-1,1]){const[ft,Q]=h(R,it*.1975,m);c(t.TRIM,"glazingBar",v,p,v,ft,nn.Y,Q,R.r)}for(const it of[-1,1])c(t.TRIM,"glazingBar",_,v,v,X,nn.Y+it*nn.DY,K,R.r)}c(t.TRIM,"entablature",e.SIGN_W,e.SIGN_Y1-e.SIGN_Y0,e.SIGN_W,0,(e.SIGN_Y0+e.SIGN_Y1)/2,0);const S=(e.SIGN_Y0+e.SIGN_Y1)/2,A=xw();for(const[R,D,F]of[[0,1,0],[0,-1,Math.PI],[1,0,l],[-1,0,-l]])c(t.TRIM,"signCase",1.21,.15,.01,R*.728,S,D*.728,F),c(t.SIGN,"signBoard",e.APER_W,e.SIGN_BOARD_H,e.SIGN_BOARD_T,R*.733,S,D*.733,F,A);for(const R of e.ROOF)c(t.TRIM,"roofTier",R.w,R.y1-R.y0,R.w,0,(R.y0+R.y1)/2,0);const w=[["lampPlinth",.2,2.68,2.72],["lampStalk",.09,2.72,2.87],["lampGallery",.15,2.87,2.9],["lampCowl",.15,3.01,3.034],["lampFinial",.045,3.034,3.07]];for(const[R,D,F,X]of w)c(t.TRIM,R,D,X-F,D,0,(F+X)/2,0);const E=.072,L=2.9,N=3.01;for(const[R,D]of[[1,0],[-1,0],[0,1],[0,-1]])c(t.TRIM,"lampRib",.016,N-L,.016,R*.068,(L+N)/2,D*.068);{const R=N-L,D=new ee(E,E,R,12),F=new Ot(D,t.LENS);F.position.set(0,(L+N)/2,0),F.name="lampLens",F.castShadow=!1,F.receiveShadow=!0,n.add(F),i.add(D.uuid),r++,a(t.LENS,2*Math.PI*E*R+2*Math.PI*E*E)}const x=new ge;x.name="boxLeaves";const y=[],T=gw();for(const R of[1,-1]){const D=new ge;D.name=R>0?"boxDoor.R":"boxDoor.L",D.position.set(R*e.APER_HW,0,e.HINGE_Z),D.userData.side=R,D.userData.hinge=new H(R*e.APER_HW,0,e.HINGE_Z),D.userData.openSign=R;const F=bw(R,t,T);i.add(F.uuid);const X=new Ot(F,t.BLUE);X.name=R>0?"boxLeaf.R":"boxLeaf.L",X.castShadow=!0,X.receiveShadow=!0,D.add(X),r++,a(t.BLUE,2*(e.LEAF_W*e.LEAF_H+e.LEAF_W*e.LEAF_T+e.LEAF_H*e.LEAF_T));const K=Aw(t,R);i.add(K.uuid);const it=new Ot(K,t.GLASS);if(it.position.set(-R*on.X,on.Y,on.Z-e.HINGE_Z),it.name=R>0?"boxPane.R":"boxPane.L",it.castShadow=!1,it.receiveShadow=!0,D.add(it),r++,a(t.GLASS,Ew),R===Bi.SIDE){const ft=new Ot(Mw(),t.BRASS);ft.position.set(-R*(e.APER_HW-Bi.X),0,e.DOOR_Z-e.HINGE_Z),ft.name="boxFurniture",ft.castShadow=!1,ft.receiveShadow=!0,D.add(ft),r++,a(t.BRASS,vw)}if(R===Fn.SIDE){const ft=new Ot(Sw(),t.NOTICE);ft.position.set(-R*(e.APER_HW-Fn.CX),Fn.CY,Fn.CZ-e.HINGE_Z),ft.name="boxNotice",ft.castShadow=((k=t.NOTICE.userData)==null?void 0:k.cast)??!1,ft.receiveShadow=!0,D.add(ft),i.add(ft.geometry.uuid),r++,a(t.NOTICE,yw)}x.add(D),y.push(D)}for(const R of Id)n.solid(R.x,R.y0,R.z,R.hw*2,R.y1-R.y0,R.hd*2,!1);const C=new xo(Sa.colour,Sa.intensity,Sa.distance,Sa.decay);C.position.set(0,(L+N)/2,0),C.name="boxLamp",C.userData.boxLocal=C.position.clone();for(const R of hr)s[R]&&dc(t[R].color.getHex(),s[R]);const O=R=>{const D=Math.max(0,Math.min(1,R))*e.OPEN_ANGLE;for(const F of y)F.rotation.y=-F.userData.side*D};return O(0),x.userData.setOpen=O,{group:n.group,leaves:x,lamp:C,areas:s,collision:Id,aoVolumes:Cm,setOpen:O,pivots:y,materials:t,counts:{meshes:r,geometries:i.size,materials:hr.length}}}function bw(n,t,e){var g;const i=Ne,s=i.DOOR_Z-i.LEAF_T/2,r=i.DOOR_Z+.006,o=i.DOOR_Z+.005;i.DOOR_Z+.0055;const a=i.HINGE_Z-.005,c=i.HINGE_Z-.007,l=i.LEAF_H/2,u=[["blank",i.LEAF_W,i.LEAF_H,i.LEAF_T,.2875,l,s],["stile",.06,i.LEAF_H,.012,.545,l,r],["stile",.06,i.LEAF_H,.012,.03,l,r],["rail",.455,.1,.012,.2875,.05,r],["rail",.455,.07,.012,.2875,.845,r],["rail",.455,.07,.012,.2875,1.445,r],["rail",.455,.07,.012,.2875,2.075,r],["panel",.395,.69,.01,.2875,.455,o],["panel",.395,.51,.01,.2875,1.145,o],...n===Bi.SIDE?[["keyhole",Bi.KEY_W,Bi.KEY_H,.004,Bi.X,Bi.ESC_Y,i.DOOR_Z+.01]]:[],["glazingBar",nn.BAR,nn.H,.012,.2875,nn.Y,r],["glazingBar",on.W,nn.BAR,.012,.2875,nn.Y-nn.DY,r],["glazingBar",on.W,nn.BAR,.012,.2875,nn.Y+nn.DY,r],["backStile",.06,i.LEAF_H,.01,.48,l,a],["backStile",.06,i.LEAF_H,.01,.03,l,a],["backLedge",.39,.07,.01,.255,.845,a],["backLedge",.39,.07,.01,.255,2.075,a],["pull",.03,.22,.014,.1,1.01,c]];for(const[_,p,,v,M,,S]of u){const A=S+v/2,w=S-v/2;if(A>i.DOOR_Z+i.LEAF_PROUD_OUT)throw new Error(`policeBox: leaf '${_}' stands ${((A-i.DOOR_Z)*1e3).toFixed(0)} mm proud of the outer face, over the ${i.LEAF_PROUD_OUT*1e3} mm budget`);if(w<i.HINGE_Z-i.LEAF_PROUD_IN)throw new Error(`policeBox: leaf '${_}' stands ${((i.HINGE_Z-w)*1e3).toFixed(0)} mm proud of the inner face, over the ${i.LEAF_PROUD_IN*1e3} mm budget`);if(w<i.HINGE_Z&&M+p/2>i.APER_HW-i.INNER_SETBACK)throw new Error(`policeBox: leaf '${_}' reaches x ${(M+p/2).toFixed(3)} behind the inner face; anything there must stay inboard of ${(i.APER_HW-i.INNER_SETBACK).toFixed(3)} or it sweeps into the jamb`)}const h=_=>n*_,f=u.map(([,_,p,v,M,S,A])=>{const w=ks(_,p,v,i.CHAMFER).clone();return w.translate(h(M),S,A),_c(w)}),d=f.length===1?f[0]:Du(f,!1);if(!d)throw new Error("policeBox: leaf merge returned null (mismatched attributes)");const m=(g=t.BLUE.userData)==null?void 0:g.uvScale;return m&&mc(d,m[0],m[1]),e&&Gp(d,e),d.translate(-h(i.APER_HW),0,-i.HINGE_Z),d}function Aw(n,t){var s;const e=_c(new cn(on.W,on.H,on.T).toNonIndexed()),i=(s=n.GLASS.userData)==null?void 0:s.uvScale;if(i){const r=e.clone();r.translate(t*on.X,on.Y,on.Z),mc(r,i[0],i[1]),e.setAttribute("uv",r.attributes.uv)}return e}const Tw=.02,Rw=new H;function Dd(n,t){if(!n)throw new Error(`worlds(): no ${t} world`);if(!n.id)throw new Error(`worlds(): the ${t} world has no id — link.js keys every accessor on it`);if(!n.scene||!n.scene.isScene)throw new Error(`worlds(): the ${t} world '${n.id}' has no THREE.Scene`);const e={id:n.id,scene:n.scene,build:n.build??null,surface:n.surface??null,beds:n.beds??null,dist:n.dist??null,cap:n.cap??null,update:typeof n.update=="function"?n.update:()=>{},collisionSrc:n.collision??null,get collision(){var i,s;return e.collisionSrc??((s=(i=e.build)==null?void 0:i.userData)==null?void 0:s.collision)??null}};return e}function Lw({interior:n,exterior:t,link:e,startWorld:i=null}={}){const s=Dd(n,"interior"),r=Dd(t,"exterior");if(!e)throw new Error("worlds(): no link — makeLink(landing, SITES) builds one");let o=e;const a=[s,r];let c=0;if(i&&i!==s.id){if(i!==r.id&&i!=="exterior")throw new Error(`worlds(): startWorld '${i}' is neither '${s.id}' nor '${r.id}'`);c=1}let l=!1;const u=new To,h=new $t;function f(m){return h.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse),u.setFromProjectionMatrix(h)}const d={get near(){return a[c]},get far(){return a[1-c]},get link(){return o},get interior(){return s},get exterior(){return r},swap(){return c=1-c,d.near},remountExterior(m){if(!m||!m.id)throw new Error("worlds.remountExterior: no world record, or no id");if(m.scene&&m.scene!==r.scene)throw new Error("worlds.remountExterior: the exterior SCENE is fixed for the session — swap its contents, not the scene");if(c===1)throw new Error(`worlds.remountExterior: the player is standing in '${r.id}'. Fly with the doors shut — a remount under somebody's feet leaves the Walker solving against a Build that no longer exists.`);return r.id=m.id,r.build=m.build??null,r.collisionSrc=m.collision??null,r.surface=m.surface??null,r.beds=m.beds??null,r.dist=m.dist??null,r.update=typeof m.update=="function"?m.update:()=>{},o=null,r},setLink(m){if(m===null)return o=null,null;if(!m)throw new Error('worlds.setLink: no link (pass null deliberately for "the box is away")');if(m.siteId&&r.id!=="exterior"&&m.siteId!==r.id)throw new Error(`worlds.setLink: the new link is at site '${m.siteId}' but the exterior world is '${r.id}'. A different site needs its contents remounted first — call remountExterior with that site's build, then setLink.`);return o=m,o},liveLink(m,g,_=null){if(!o||!g||!(g.t>Tw))return null;const p=a[c].cap;return p?!m||p.normalWorld.dot(Rw.copy(m.position).sub(p.centreWorld))<=0||!(_||f(m)).intersectsBox(p.aabbInflated)?null:o:(l||(l=!0,console.warn(`[worlds] the '${a[c].id}' world has no portal cap, so the doors open onto its own background. portal.makeCap() mints one (THRESHOLD.md §4.4).`)),null)},frustumOf:f};return d}const lr="interior",Pd=In.w/2,Cw=.02,Iw=3*(Te.RUN/60+.014),Dw=Te.RADIUS,Pw=1e-6,Ow=.001,Nw=6,Fl=Ln-(et.FLAT_FACE-Te.RADIUS),Uw=1.2,Fw=.6,kw=.002,Od=new H(0,1,0),kl=new H,wa=new H,Nd=new H,ur=new H;function zw({worlds:n,walker:t,audio:e,portal:i,camera:s,doors:r=null}){let o=0,a=0,c=-1,l=!1,u=!1,h=!1,f=!1,d=!1,m=!1;function g(){return!n||!n.near||!n.far||!n.link?(d||(d=!0,console.warn("[threshold] no live link — the crossing is disabled. makeLink() builds one (THRESHOLD.md §1.3); a build with no exterior is expected to land here.")),!1):!0}function _(){return s&&t.driveCamera!==!1?kl.copy(s.position):kl.set(t.position.x,t.position.y+Te.EYE,t.position.z)}function p(x,y){const T=n.link,C=x.id===lr,O=C?T.pI:T.pE,k=C?T.nI:T.nE;wa.copy(y).sub(O);const R=wa.dot(k);Nd.copy(Od).cross(k);const D=wa.dot(Nd),F=wa.dot(Od),X=Math.abs(D)-Pd,K=F>In.h?F-In.h:F<0?-F:0;return{d:R,lat:D,h:F,s:C?1:-1,inRect:X<=0&&K===0,r:Math.hypot(R,X>0?X:0,K)}}function v(x){return x.inRect}function M(x){return r?r.t>Cw:(f||(f=!0,console.warn("[threshold] no `doors` passed to threshold(): crossing without checking that they are open. The exterior collision set has no shut-door blocker (THRESHOLD.md §1.1, §7.1), so the box is enterable through shut leaves.")),!0)}function S(x,y){const T=x&&x.collision;if(!T)return!0;ur.copy(t.position).applyMatrix4(y);let C=ur.x,O=ur.z;for(let k=0;k<Nw;k++){const R=qu(T,C,O,{y:ur.y});if(C=R.x,O=R.z,!R.contacts)break}return Math.hypot(C-ur.x,O-ur.z)<=Ow}function A(x){const y=n.link,T=n.near,C=n.far,k=T.id===lr?y.M_IE:y.M_EI;if(typeof t.crossTo!="function"||typeof t.setWorld!="function")return m||(m=!0,console.warn("[threshold] walker.crossTo / walker.setWorld are missing — refusing to cross. §2 adds both to Walker.js; without them a swap would leave the player in one world holding the other one's colliders.")),!1;if(!S(C,k))return l=!0,h||(h=!0,console.warn(`[threshold] holding the crossing into '${C.id}': M puts the player inside something there. Expected while a door leaf is still swinging — MEASURED, the way in clears at t = 0.68 on the door axis and t = 0.83 at the edge of the band (see CROSS_CLEAR). The crossing retries every sub-step and fires the moment that line is clear.`)),!1;l=!1;const R=k.elements,D=Math.atan2(R[8],R[10]);return t.crossTo(k,D),n.swap(),t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,y),t.driveCamera!==!1&&typeof t._commitCamera=="function"&&t._commitCamera(0),o=x.d,a++,!0}function w(x,y){const T=x.s*x.d;if(!(x.inRect&&T>Pw&&T<=Dw)||!M())return l=!1,!1;const C=l,O=n.near.id;return A(x)?(!y&&!C&&!u&&(u=!0,console.warn(`[threshold] the player was ${T.toFixed(3)} m past the '${O}' aperture plane and still in it — the crossing edge missed, or the doors opened around someone already standing in the doorway. Reconciled. §5.4: the backstops park a misfire at 0.050 m, so this is recoverable, but a sub-step running without step() would look exactly like this.`)),!0):!1}function E(x,y){let C=((x.id===lr?-1:1)*y.r+Fw)/Uw;C=C<0?0:C>1?1:C;const O=C===0||C===1;c>=0&&C!==c&&Math.abs(C-c)<kw&&!O||C!==c&&(c=C,e&&typeof e.setBedMix=="function"&&e.setBedMix(C))}function L(x){const y=p(x,_());return o=y.d,y}const N={step(){if(!g())return;let x=n.near;const y=p(x,_());if(Math.abs(y.d-o)>Iw){o=y.d,w(y,!0)&&(x=n.near),E(x,y);return}const T=y.s;T*o<0&&T*y.d>=0&&v(y)&&M()?A(y)?x=n.near:o=y.d:(o=y.d,w(y,!1)&&(x=n.near)),E(x,y)},seed(x={}){if(!g())return;let y=n.near;const T=L(y);x.reconcile!==!1&&w(T,!0)&&(y=n.near),E(y,T)},force(x){if(!g())return!1;const y=T=>T.id===x||x==="interior"&&T.id===lr||x==="exterior"&&T.id!==lr;return y(n.near)?(N.seed({reconcile:!1}),!1):y(n.far)?(n.swap(),typeof t.setWorld=="function"&&t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,n.link),N.seed({reconcile:!1}),!0):(console.warn(`[threshold] force('${x}'): no such world. near is '${n.near.id}', far is '${n.far&&n.far.id}'.`),!1)},get inAperture(){if(!g())return!1;const x=n.near,y=p(x,kl.copy(t.position)),T=y.s*y.d;return x.id===lr?T>-Fl:Math.abs(y.lat)<=Pd+Te.RADIUS&&T>-Fl&&T<Fl&&y.h>=0&&y.h<=In.h},get crossings(){return a},get held(){return l},get bedMix(){return c}};return N}const Dm=Object.freeze({w:1.15,h:2.11}),Bw=.014,Ud=.035,Fd=16,zl=1920*1080,Hw=.75,Bl=4,Gw=2,kd=1.5,zd=45,Ww=.2,Vw=.95,qw=.002,Bd="interior",Xw=Math.PI/180,Hl=new Bt,Yw=new Bt,$w=new H,Hd=new $t;function Gd(n,t={}){const e=t.fov??58,i=t.apertureH??Dm.h,s=Number.isFinite(n)&&n>0?n:16/9,r=Math.tan(e*Xw/2),o=r*s,a=Math.sqrt(1+o*o+r*r),c=Te.RADIUS-Bw,l=i-Te.EYE-Ud,u=Te.EYE-Ud,h=Math.min(c/o,l/r,u/r)/a,f=Math.min(Ww,Vw*h),d=f*a;return{aspect:s,fov:e,tx:o,ty:r,K:a,limit:h,near:f,skin:d,gapLat:c,gapUp:l,gapDown:u,marginLat:c-d*o,marginUp:l-d*r,marginDown:u-d*r}}function jw(n,t){n.updateMatrixWorld(!0);const e=t.clone().applyMatrix4(n.matrixWorldInverse);if(e.constant>0)return!1;const i=new fe(e.normal.x,e.normal.y,e.normal.z,e.constant),s=n.projectionMatrix.elements,r=new fe((Math.sign(i.x)+s[8])/s[0],(Math.sign(i.y)+s[9])/s[5],-1,(1+s[10])/s[14]),o=i.multiplyScalar(2/i.dot(r));return s[2]=o.x,s[6]=o.y,s[10]=o.z+1,s[14]=o.w,n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),!0}const Kw=`
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
  float pull = uNear * ${(1+qw).toFixed(6)};
  float vz = -mv.z;
  if (vz > 0.0 && vz < pull) mv.xyz *= pull / vz;

  gl_Position = projectionMatrix * mv;
}`,Zw=`
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
}`;function Jw({renderer:n,camera:t,aperture:e=Dm,pixelRatioCap:i=!0,driveCameraNear:s=!0}={}){if(!n)throw new Error("portal(): no renderer");if(!t)throw new Error("portal(): no camera");n.info&&(n.info.autoReset=!1);const r=new Vi(1,1,{type:Ir,format:_n,depthBuffer:!0,stencilBuffer:!1,samples:Bl});r.texture.name="portalTarget",r.texture.colorSpace=bi,r.texture.minFilter=Ue,r.texture.magFilter=Ue,r.texture.generateMipmaps=!1;const o=new rn;o.name="portalCamera",o.matrixAutoUpdate=!1,o.matrixWorldAutoUpdate=!1;const a=[];let c=Gd(t.aspect,{fov:t.fov,apertureH:e.h}),l=1,u=Bl,h=null,f=zd,d=!1;const m={passes:0,skipped:0,rebuilds:0,ratioChanges:0};let g=!1;function _(){n.getDrawingBufferSize(Hl);const T=Math.max(1,Math.floor(Hl.x)),C=Math.max(1,Math.floor(Hl.y)),O=T*C,k=O>zl?Hw:1,R=O>zl?Gw:Bl;R!==u&&(u=R,r.samples=R,r.dispose(),m.rebuilds++),l=k,r.setSize(Math.max(1,Math.round(T*l)),Math.max(1,Math.round(C*l))),c=Gd(t.aspect,{fov:t.fov,apertureH:e.h});for(const D of a){const F=D.material.uniforms;F.uRes.value.set(T,C),F.uNear.value=c.near}s&&Math.abs(t.near-c.near)>1e-12&&(t.near=c.near,t.updateProjectionMatrix())}function p(){return Math.min((typeof devicePixelRatio=="number"?devicePixelRatio:1)||1,2)}function v(){if(!i)return;const T=p(),C=n.getSize(Yw),O=C.x*T*C.y*T,k=d&&T>kd&&O>zl?kd:T,R=n.getPixelRatio();if(!(h!==null&&Math.abs(R-h)<1e-9||Math.abs(R-T)<1e-9)){h=null;return}if(Math.abs(R-k)<1e-9){h=k;return}n.setPixelRatio(k),h=k,m.ratioChanges++,_()}function M(T){if(T){d=!0,f=0,v();return}++f>=zd&&d&&(d=!1,v())}function S(T,C,O={}){const k=new Ai(T,C,Fd,Fd);k.computeBoundingBox();const R=new yi({name:"portalCap",side:li,fog:!1,toneMapped:!0,uniforms:{tPortal:{value:r.texture},uRes:{value:new Bt(1,1)},uNear:{value:c.near}},vertexShader:Kw,fragmentShader:Zw}),D=new Ot(k,R);D.name=O.name||"portalCap",D.isPortalCap=!0,D.frustumCulled=!1,O.faceMinusZ&&(D.rotation.y=Math.PI);const F=new H,X=new H,K=new hi;return Object.defineProperties(D,{normalWorld:{get(){return this.updateWorldMatrix(!0,!1),F.set(0,0,1).transformDirection(this.matrixWorld)}},centreWorld:{get(){return this.updateWorldMatrix(!0,!1),X.setFromMatrixPosition(this.matrixWorld)}},aabbInflated:{get(){return this.updateWorldMatrix(!0,!1),K.copy(this.geometry.boundingBox).applyMatrix4(this.matrixWorld).expandByScalar(c.skin)}}}),a.push(D),_(),D}function A(T,C,O=t){return!(!T||!T.isPortalCap||T.normalWorld.dot($w.copy(O.position).sub(T.centreWorld))<=0||C&&!C.intersectsBox(T.aabbInflated))}const w=new To;function E(T=t){return T.updateMatrixWorld(),Hd.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),w.setFromProjectionMatrix(Hd)}function L(T,C){if(typeof T.M=="function")return T.M(C.id);const O=C.id===Bd?T.M_IE:T.M_EI;if(!O)throw new Error(`portal.pass(): link exposes no transform for "${C.id}"`);return O}function N(T,C){if(typeof T.keepFor=="function")return T.keepFor(C.id);const O=C.id===Bd?T.keepI:T.keepE;if(!O)throw new Error(`portal.pass(): link exposes no clip plane for "${C.id}"`);return O}function x(T,C,O){if(!T||!C||!O||!O.scene){m.skipped++;return}M(!0);const k=T.portalCam||o;k.projectionMatrix.copy(t.projectionMatrix),k.projectionMatrixInverse.copy(t.projectionMatrixInverse),k.fov=t.fov,k.aspect=t.aspect,k.near=t.near,k.far=t.far,k.layers.mask=t.layers.mask,k.matrixAutoUpdate=!1,k.matrixWorldAutoUpdate=!1,k.matrixWorld.multiplyMatrices(L(T,C),t.matrixWorld),k.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),!g&&(Math.abs(k.scale.x-1)>1e-6||Math.abs(k.scale.y-1)>1e-6||Math.abs(k.scale.z-1)>1e-6)&&(g=!0,console.warn("[portal] the link is not rigid: portal camera scale",k.scale.x,k.scale.y,k.scale.z,"- the far world will be the wrong size.")),jw(k,N(T,O));const R=O.cap,D=R?R.visible:!1;R&&(R.visible=!1);const F=n.getRenderTarget();n.setRenderTarget(r),n.clear(),n.render(O.scene,k),n.setRenderTarget(F),R&&(R.visible=D),m.passes++}function y(){r.dispose();for(const T of a)T.geometry.dispose(),T.material.dispose();a.length=0,h!==null&&Math.abs(n.getPixelRatio()-h)<1e-9&&Math.abs(h-p())>1e-9&&n.setPixelRatio(p()),h=null}return _(),{rt:r,portalCam:o,makeCap:S,resize:_,pass:x,setLive:M,capOnScreen:A,frustum:E,dispose:y,stats:m,get near(){return c.near},get skin(){return c.skin},get plan(){return c},get scale(){return l},get samples(){return u},get live(){return d},get caps(){return a.slice()}}}function Qw({renderer:n,size:t=[512,336]}={}){if(!n)throw new Error("screenFeed(): no renderer");const e=new Vi(t[0],t[1],{depthBuffer:!0,stencilBuffer:!1,samples:0});e.texture.colorSpace=bi,e.texture.minFilter=Ue,e.texture.magFilter=Ue,e.texture.generateMipmaps=!1;const i=new oi({map:e.texture,toneMapped:!1});let s=!1;return{rt:e,material:i,get painted(){return s},render(r,o){const a=n.getRenderTarget();n.setRenderTarget(e),n.render(r,o),n.setRenderTarget(a),s=!0},dispose(){e.dispose(),i.dispose()}}}function tb({size:n=[512,336]}={}){const[t,e]=n,i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return{texture:null,material:null,showing:!1,show(){return!1},clear(){},update(){},dispose(){}};i.width=t,i.height=e;const s=i.getContext("2d"),r=new Lo(i);r.minFilter=mn,r.magFilter=mn,r.generateMipmaps=!1,r.colorSpace=sn;const o=new oi({map:r,toneMapped:!1}),a=Math.round(t*.182),c=Math.round(t*.636),l=15,u="#0b0d10",h="#c8e6c0";let f=!1,d=0,m=null;function g(){var v;if(s.fillStyle=u,s.fillRect(0,0,t,e),!m){r.needsUpdate=!0;return}s.fillStyle="rgba(255,255,255,.028)";for(let M=0;M<e;M+=4)s.fillRect(0,M,t,2);s.textBaseline="top",s.fillStyle=h,s.font="bold 18px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",s.fillText(m.title,a,52),s.globalAlpha=.42,s.fillRect(a,80,c,2),s.globalAlpha=1;const _=Math.floor(d*44);let p=0;s.font=`${l}px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`,m.lines.forEach((M,S)=>{const A=Math.max(0,_-p),w=M.slice(0,A);p+=M.length,s.fillStyle=h,s.globalAlpha=.88,s.fillText(w,a,108+S*26),w.length&&w.length<M.length&&d*3%1<.6&&(s.globalAlpha=1,s.fillRect(a+s.measureText(w).width+2,108+S*26+2,9,15)),s.globalAlpha=1}),(v=m.grants)!=null&&v.length&&_>p&&(s.font="bold 13px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",s.fillStyle="#ffb457",s.fillText("LOGGED: "+m.grants.join(", ").toUpperCase(),a,e-62)),r.needsUpdate=!0}return{texture:r,material:o,get showing(){return f},show(_){return _?(m=_,f=!0,d=0,g(),!0):!1},clear(){f=!1,m=null},update(_){if(!f)return;const p=Math.floor(d*44);d+=Math.min(Math.max(_||0,0),.1);const v=m.lines.reduce((M,S)=>M+S.length,0);(Math.floor(d*44)!==p||Math.floor(d*44)<v+44)&&g()},dispose(){o.dispose(),r.dispose()}}}const Wd=Object.freeze({howlaround:Object.freeze({ink:657930,glow:15921906,echoA:12,echoR:3.6,speed:.42,soft:.26,core:.15,churn:.3,vig:[2.4,.7]})});function eb(n="howlaround"){const t=typeof n=="string"?Wd[n]:n;if(!t)throw new Error("vortexMaterial: unknown era "+n+" ("+Object.keys(Wd).join(", ")+")");if(t.echoA!==Math.round(t.echoA))throw new Error("vortexMaterial: echoA must be a whole number — it is the noise tile period, and a fraction puts a seam down the screen at the atan2 cut");return new yi({uniforms:{uTime:{value:0},uInk:{value:new zt(t.ink)},uGlow:{value:new zt(t.glow)},uEchoA:{value:t.echoA},uEchoR:{value:t.echoR},uSpeed:{value:t.speed},uSoft:{value:t.soft},uCore:{value:t.core},uChurn:{value:t.churn},uVig:{value:new Bt(t.vig[0],t.vig[1])}},toneMapped:!1,vertexShader:`
`+["varying vec2 vUv;","void main() {","  vUv = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:`
`+["precision highp float;","uniform float uTime, uEchoA, uEchoR, uSpeed, uSoft, uCore, uChurn;","uniform vec2  uVig;","uniform vec3  uInk, uGlow;","varying vec2  vUv;","","float hash(vec2 p) {","  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);","}","","// Value noise TILED IN X with period per. The x axis is the ANGLE, which","// is circular: without the wrap every octave shows atan2 s cut as a hard","// radial seam straight down the screen, and on a blobby field that seam is","// the only straight line in the picture and the eye goes to it at once.","float vnoise(vec2 p, float per) {","  vec2 i = floor(p), f = fract(p);","  f = f * f * (3.0 - 2.0 * f);","  float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);","  float a = hash(vec2(x0, i.y));","  float b = hash(vec2(x1, i.y));","  float c = hash(vec2(x0, i.y + 1.0));","  float d = hash(vec2(x1, i.y + 1.0));","  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);","}","","// Four octaves, period doubling with them so every octave stays seamless.","float fbm(vec2 p, float per) {","  float s = 0.0, amp = 0.5, pr = per;","  for (int k = 0; k < 4; k++) {","    s += amp * vnoise(p, pr);","    p *= 2.0; pr *= 2.0; amp *= 0.5;","  }","  return s;","}","","void main() {","  vec2  p = vUv * 2.0 - 1.0;","  float r = length(p);","  float a = atan(p.y, p.x);","  float t = uTime;","","  // LOG-POLAR. The one line that makes this howlaround and not a tunnel:","  // feedback reproduces the frame SCALED each pass, so its echoes are","  // evenly spaced in log r. Travelling is then a CONSTANT drift along this","  // axis, which is also why nothing here needs a per-band phase.","  float lr = log(max(r, 0.015));","  vec2  q  = vec2((a / 6.2831853 + 0.5) * uEchoA, -lr * uEchoR + t * uSpeed);","","  // The field boils as well as drifting. Without this the picture is a","  // still being zoomed, which reads as a screensaver.","  float n = fbm(q + vec2(0.0, sin(t * 0.21) * uChurn), uEchoA);","","  // THE VIDICON S-CURVE. 405-line video clipped hard at both ends, and the","  // blown blacks and whites are most of what makes the reference image","  // read as 1963 rather than as grey cloud.","  float v = smoothstep(0.5 - uSoft, 0.5 + uSoft, n);","","  // ALIASING. Toward the centre log r runs away and q.y sweeps hundreds of","  // cycles across a handful of texels. Ask the hardware how fast the phase","  // is actually moving and FADE TO THE MEAN where it cannot be resolved —","  // the same analytic antialias the banded cut needed, and the reason this","  // still holds up filmed by the door camera or seen through the portal at","  // an angle. 0.5 is this S-curve s own mean.","  float aa = 1.0 - smoothstep(0.35, 0.95, fwidth(q.y));","  v = mix(0.5, v, aa);","","  // THE BRIGHT HOLE. Feedback runs away to WHITE where the loop gain is","  // highest, so the centre blows out rather than going dark. Its edge is","  // pushed around by the same noise field, because a round one reads as a","  // spotlight and the reference image s is anything but round.","  float coreR = uCore * (0.80 + 0.55 * n);","  float core  = 1.0 - smoothstep(coreR * 0.55, coreR, r);","  v = max(v, core);","","  // A little bloom off the hole, which is the tube overloading around it.","  v += 0.35 * (1.0 - smoothstep(coreR, coreR * 3.2, r)) * (1.0 - core);","","  // The corners fall away, gently. A CRT of this age had a vignette and","  // the scanner face is a rectangle cut out of a round field — but the","  // reference card is busy to its corners, so this only takes the edge off.","  v *= smoothstep(uVig.x, uVig.y, r);","","  gl_FragColor = vec4(mix(uInk, uGlow, clamp(v, 0.0, 1.0)), 1.0);","}"].join(`
`)})}const Pm=document.getElementById("scene"),ic=new URLSearchParams(location.search),nb=ic.get("seed")||"tardis",pn=RE(ic);let Ge=Yn[pn.site];const _e=new KM({canvas:Pm,antialias:!0,powerPreference:"high-performance"});_e.setPixelRatio(Math.min(devicePixelRatio||1,2));_e.setSize(innerWidth||1280,innerHeight||720,!1);_e.outputColorSpace=sn;_e.toneMapping=tp;const ib=Xn.toneMappingExposure;_e.toneMappingExposure=ib;_e.shadowMap.type=Jd;_e.shadowMap.enabled=!!Xn.shadows;u2(_e);const fi=new yu;fi.background=new zt(Xn.background);Xn.fog&&(fi.fog=Xn.fog);const sb=new Cp(Xn.hemisphere.sky,Xn.hemisphere.ground,Xn.hemisphere.intensity);fi.add(sb);const rb=new bu(Xn.ambient.colour,Xn.ambient.intensity);fi.add(rb);const Gl=Xn.camera,ye=new rn(Gl.fov,(innerWidth||1280)/(innerHeight||720),Gl.near,Math.max(Gl.far,Ge.camera.far)),xc=new Io(nb);Vp();const gs=qp(xc.child("tex.roundel")),xn=new Iu,Z={};Z.shell=K2(xn,gs,{liveDoors:!0,archS:!0});Z.interior=GS(xn,gs);HS(Z.interior.zones);WS(xn,Z.interior.zones);Z.console=ly(xn,gs);Z.rotor=yy(xn,gs,{collar:!1});Z.fittings=Xy(xn,gs);Z.lighting=hS(xn,gs);Z.doors=SE(xn,gs,{shellDoors:Z.shell,console:Z.console});Z.fittings.setScanner(Z.fittings.shuttersOpen);const Om=pc(xn.group);fi.add(Om);fi.add(Z.rotor.group);fi.add(Z.fittings.group);fi.add(Z.doors.group);const ci=new yu;ci.name="site";Tm();function Nm(n,t){const e=new Iu,i=Object.values(ln).filter(a=>a.site===n.id).map(a=>({x:a.x,z:a.z,r:Mi.plinth/2*Math.SQRT2+.06})),s=WE(e,n,{camera:ye,rng:xc.child(`site.${n.id}`),keepOut:i}),r=s.contact(1.9,1.9);s.placeContact(r,t.x,t.z);const o=pc(e.group);return{bSite:e,site:s,bakedSite:o,boxContact:r}}let{bSite:Xi,site:Re,bakedSite:co,boxContact:as}=Nm(Ge,pn);ci.fog=Re.fog;const Ku=new Iu,Xe=ww(Ku,Im(xc.child("tex.box")));ci.add(co);ci.add(Re.live);const Cn=pc(Ku.group,{colliders:Xe.aoVolumes});Cn.position.set(pn.x,0,pn.z);Cn.rotation.y=pn.yaw;Xe.leaves.position.copy(Cn.position);Xe.leaves.rotation.y=pn.yaw;Xe.lamp.position.set(pn.x,Xe.lamp.position.y,pn.z);ci.add(Cn,Xe.leaves,Xe.lamp,as);Z.doors.setBoxDoors(Xe.pivots);Z.lighting.setDoorSpillColour(Ge.sun.colour);const Nr=Xu(pn,Yn);let su=Object.freeze([...Xi.userData.collision.boxes||[]]);function ob(){su=Object.freeze([...Xi.userData.collision.boxes||[]])}function No(n){Xi.userData.collision.boxes=n?[...su,...n.boxCollision()]:[...su]}No(Nr);sh(Nr);const wi=Jw({renderer:_e,camera:ye,aperture:In}),Zu=wi.makeCap(In.w,In.h,{name:"capInterior",faceMinusZ:!0});Zu.position.set(0,In.h/2,Ln);fi.add(Zu);const Ju=wi.makeCap(In.w,In.h,{name:"capExterior"});Ju.position.set(0,In.h/2,Oo);Cn.add(Ju);const Ht=Lw({interior:{id:me,scene:fi,build:xn,surface:"vinyl",dist:gm,beds:xm,cap:Zu},exterior:{id:Ge.id,scene:ci,build:Xi,surface:Re.surface,dist:Re.distance,beds:Re.bedIds,cap:Ju,update:Re.update},link:Nr,startWorld:ic.get("world")==="exterior"?Ge.id:ic.get("world")||(pn.boot==="exterior"?Ge.id:null)}),Rt=new SS(ye,xn,{spawn:et.SPAWN,yaw:et.SPAWN_YAW});Rt.setWorld(Ht.near);if(Ht.near.id!==me)if(pn.start)Rt.teleport(pn.start.x,0,pn.start.z,pn.start.yaw);else{const n=Nr.outsideSpawn();Rt.teleport(n.x,0,n.z,pn.yaw+Math.PI)}const Ce=new oE({sounds:Na,buses:aE,distance:gm,defaults:cE,roomBeds:xm,propRate:lE,ctlRate:uE,siteBeds:Re.beds,surfaceSteps:hE,rng:xc,say:n=>he(n)});Ce.bindRoom({build:xn,rotor:Z.rotor,fittings:Z.fittings,walker:Rt,room:et});Z.doors.setAudio(Ce);Ce.setWorld(Ht.near,Nr);const qn=TS({reach:6});window.sonic=qn;const ab=.675+.263;function cb(n){if(!n||n.id===me)return 1;const t=Yn[n.id];return t?(t.hemi.intensity+t.ambient.intensity)/ab:1}const di=CS({onGrant:n=>{he(`Logged: ${n}.`)}}),We=IS({character:"doctor",trait:null,knows:n=>di.has(n),onFlag:n=>{he(`Logged: ${n}.`)}}),Cr=tb();let Ps=-1;const ka=Qw({renderer:_e}),sc=eb(),lo=Object.freeze({x:0,y:2.4,z:.9,pitch:-.384,fov:52}),mo=new rn(lo.fov,1.1/.72,.2,Ge.camera.far);function Um(n=Ht.link){if(!n)return!1;const t=n.toSite(lo.x,lo.y,lo.z);return mo.position.copy(t),mo.rotation.set(lo.pitch,n.yaw+Math.PI,0,"YXZ"),mo.updateMatrixWorld(!0),!0}const xe=zw({worlds:Ht,walker:Rt,audio:Ce,portal:wi,camera:ye,doors:Z.doors}),Qu=9,lb=Object.freeze(Object.keys(ln));let ai=lb.find(n=>ln[n]===pn)??null,hs=-1,ru=null;const Je=RS({landings:ln,sites:Yn}),th=()=>Je.selected,rc=()=>hs>=0;function Fm(){return rc()?"Navigation: the ship is already between places.":Je.list(ai).some(t=>t.selectable)?(mb(),"Navigation: coordinates."):"Navigation: no coordinates the ship can reach from here."}function ub(){var e;const n=th();ru=n,hs=0,Eo(!1),No(null),Ht.setLink(null),xe.seed();const t=ln[n];return`The ship dematerialises. Next stop: ${((e=Yn[t.site])==null?void 0:e.name)??t.site}.`}function hb(n){var e;const t=ln[n];ah(t.site,t,{present:!1}),ai=n,Je.clear(),Je.objective===n&&Je.setObjective(null),Z.console.setLamp(4,!1),Z.rotor.setRunning(!1),he(`The ship settles. Outside is ${((e=Yn[t.site])==null?void 0:e.name)??t.site}.`)}const Wl={1:()=>{he(fb())},2:()=>{he(km())},3:()=>{he(zm())},4:()=>{he(Fm())},5:()=>{he(vc())},6:()=>{he(eh())}};function km(){const n=!Z.fittings.shuttersOpen;return Z.fittings.setShutters(n),Z.fittings.setScanner(n),n?"The scanner shutters grind open. The screen lights, and shows nothing.":"The scanner shutters close over the screen."}function zm(){return Z.fittings.dispense(),"The food machine delivers a bar. It is, allegedly, bacon and eggs."}function vc(){if(!Z.rotor.running&&!Z.doors.flightReady)return Z.doors.state!=="shut"?"Flight: the doors are open.":"Flight: the doors must be locked before the ship will move.";if(rc()){const n=Math.max(0,Qu-hs);return`The ship is in flight. It will land when it lands — about ${Math.ceil(n)} seconds.`}return!Z.rotor.running&&!th()?"Flight: no coordinates set. The navigation panel first.":(Z.rotor.setRunning(!Z.rotor.running),Z.rotor.running?`The time rotor begins to rise and fall. ${ub()}`:"The rotor settles, and the room goes quiet.")}function ou(n){const t=di.read(n);return Cr.show(t),Ps=0,!Z.fittings.shuttersOpen||!Z.fittings.scannerOn?`${t.title}: ${t.lines[0]} (the scanner is shut)`:`${t.title}: ${t.lines[0]}`}function eh(){var i;Z.fittings.pulseFault(),Z.lighting.pulseAlert(4);const n=Ht.link?`site.${Ht.exterior.id}`:"site.vortex",t=Ht.link?((i=Yn[Ht.exterior.id])==null?void 0:i.name)??Ht.exterior.id:"the vortex",e=di.read({id:n,label:t});return Cr.show(e),Ps=0,`The fault locator runs a query. ${e.title}: ${e.lines[0]}`}function nh(n){return n===Rt}const Vl=new H;function Vd(){if(Rt.world.id===me)return Rt.position.z;const n=Ht.link;if(n)return Vl.copy(Rt.position),n.toInterior(Vl,Vl).z}function Bm(){if(!nh(Rt))return"There is a keyhole. You do not have a key.";if(Z.doors.open)return"Door control: the doors must be shut before they will lock.";if(Z.rotor.running)return"Door control: the ship is in flight.";const n=!Z.doors.locked,t=Z.doors.setLocked(n,{running:Z.rotor.running});return Z.doors.locked!==n?t:n?"The key turns, and the bolts drive home.":"The key turns, and the bolts draw back."}function au(n=!1){if(n&&Z.doors.locked&&!Z.doors.open&&nh(Rt)){const t=Z.doors.setLocked(!1,{running:Z.rotor.running});return Z.doors.locked?t:`The key turns. ${Z.doors.request(!0,{fittings:Z.fittings,rotor:Z.rotor,walker:Rt,atShell:n,playerZ:Vd()})}`}return n&&Z.doors.locked&&!Z.doors.open?"The doors are locked, and you do not have a key.":Z.doors.request(!Z.doors.open,{fittings:Z.fittings,rotor:Z.rotor,walker:Rt,atShell:n,playerZ:Vd()})}function fb(){return Z.doors.setLocked(!Z.doors.locked,{rotor:Z.rotor})}const qd={hatStand:"A hat stand. There is a hat on it.",chair:"A high-backed hall chair, out of a house that is nowhere near here.",clock:"An ormolu clock. It keeps perfect time, which proves nothing."};Rt.onInteract(n=>{var t;switch(n.action){case"panel":{const e=n.data.panel;Z.console.setLamp(e,!0),he(n.label),(t=Wl[e])==null||t.call(Wl);break}case"doors":he(au());break;case"shellDoors":he(au(!0));break;case"shellLock":he(Bm());break;case"scanner":he(km());break;case"faultLocator":he(eh());break;case"foodMachine":he(zm());break;case"rotor":he(vc());break;default:qd[n.action]&&he(qd[n.action])}});const $n=document.createElement("div");$n.style.cssText="position:fixed;inset:0;pointer-events:none;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:#e8e6df;text-shadow:0 1px 3px rgba(0,0,0,.9)";$n.innerHTML=`
<div id="x" style="position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;
     border-radius:50%;background:rgba(232,230,223,.55);box-shadow:0 0 2px #000"></div>
<div id="prompt" style="position:absolute;left:50%;top:calc(50% + 26px);transform:translateX(-50%);
     white-space:nowrap;opacity:0"></div>
<div id="say" style="position:absolute;left:50%;bottom:11%;transform:translateX(-50%);
     white-space:nowrap;opacity:0;transition:opacity .25s"></div>
<div id="lock" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
     background:rgba(6,8,10,.55);letter-spacing:.06em;text-align:center">
  <div>CLICK TO LOOK AROUND &nbsp;·&nbsp; WASD, E, ESC</div></div>
<div id="dlg" style="position:absolute;left:50%;bottom:8%;transform:translateX(-50%);display:none;
     width:min(760px,86vw);padding:16px 20px 14px;background:rgba(10,13,16,.9);
     border:1px solid rgba(232,230,223,.20);border-radius:3px">
  <div id="dlgWho" style="letter-spacing:.15em;font-size:10px;opacity:.55;margin-bottom:7px"></div>
  <div id="dlgText" style="font-size:16px;line-height:1.45"></div>
  <div id="dlgOpts" style="margin-top:13px"></div>
</div>
<div id="nav" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:none;
     min-width:340px;padding:18px 22px 14px;background:rgba(10,13,16,.88);
     border:1px solid rgba(232,230,223,.22);border-radius:3px">
  <div style="letter-spacing:.16em;font-size:11px;opacity:.62;margin-bottom:12px">NAVIGATION</div>
  <div id="navRows"></div>
  <div style="margin-top:13px;padding-top:9px;border-top:1px solid rgba(232,230,223,.13);
       font-size:11px;opacity:.5;letter-spacing:.05em">W / S &nbsp; SELECT &nbsp;·&nbsp; E &nbsp; SET COURSE &nbsp;·&nbsp; ESC &nbsp; CLOSE</div>
</div>`;document.body.appendChild($n);const ql=$n.querySelector("#prompt"),cu=$n.querySelector("#say"),ih=$n.querySelector("#lock"),Xd=$n.querySelector("#dlg"),db=$n.querySelector("#dlgWho"),Xl=$n.querySelector("#dlgText"),Yd=$n.querySelector("#dlgOpts");function uo(){if(!We.active){Xd.style.display="none";return}Xd.style.display="block";const n=We.who;db.textContent=n&&n!=="SYSTEM"?n:"",Xl.textContent=We.text,Xl.style.fontStyle=!n||n==="SYSTEM"?"italic":"normal",Xl.style.opacity=!n||n==="SYSTEM"?".82":"1";const t=We.options;if(!t.length){Yd.innerHTML='<div style="font-size:11px;opacity:.5;letter-spacing:.05em">E &nbsp; CONTINUE</div>';return}Yd.innerHTML=t.map((e,i)=>{const s=i===We.cursor,r=e.only==="doctor"?"DOCTOR":e.trait||null,o=s?"#ffb457":"rgba(232,230,223,.72)",a=r?`<span style="font-size:9px;letter-spacing:.12em;opacity:.8">&nbsp;&nbsp;[${r}]</span>`:"";return`<div style="padding:2px 0;color:${o};${s?"font-weight:600":""}"><span style="display:inline-block;width:14px;opacity:.8">${s?"›":" "}</span>${e.text}${a}</div>`}).join("")+'<div style="margin-top:9px;font-size:11px;opacity:.5;letter-spacing:.05em">W / S &nbsp; CHOOSE &nbsp;·&nbsp; E &nbsp; SAY IT</div>'}function Hm(n){return We.active?"Already talking.":We.has(n)?(Rt.releaseKeys(),We.start(n),uo(),null):`Nothing to say (${n}).`}addEventListener("keydown",n=>{if(!We.active)return;const t=n.code;if(!(t!=="KeyW"&&t!=="KeyS"&&t!=="ArrowUp"&&t!=="ArrowDown"&&t!=="KeyE"&&t!=="Enter"&&t!=="Escape")){if(n.preventDefault(),n.stopPropagation(),t==="Escape"){We.options.length||(We.end(),uo());return}if(t==="KeyW"||t==="ArrowUp"){We.move(-1),uo();return}if(t==="KeyS"||t==="ArrowDown"){We.move(1),uo();return}We.choose(),uo()}},!0);const Gm=$n.querySelector("#nav"),pb=$n.querySelector("#navRows");let oc=!1;function lu(){const n=Je.list(ai);pb.innerHTML=n.map(t=>{const e=t.key===Je.selected,i=t.here?"rgba(232,230,223,.34)":t.locked?"rgba(232,230,223,.30)":t.objective?"#ffb457":"#e8e6df",s=e?"›":" ",r=t.here?'<span style="opacity:.7">&nbsp;— you are here</span>':t.locked?`<span style="opacity:.7">&nbsp;— ${t.locked}</span>`:t.objective?'<span style="letter-spacing:.14em;font-size:10px;opacity:.85">&nbsp;&nbsp;NEXT</span>':"",o=t.objective&&t.note?`<div style="margin:1px 0 4px 20px;font-size:11px;opacity:.62;font-style:italic">${t.note}</div>`:"";return`<div style="padding:3px 0;color:${i};${e?"font-weight:600":""}"><span style="display:inline-block;width:14px;opacity:.8">${s}</span>${t.name}${r}</div>${o}`}).join("")}function mb(){oc||(oc=!0,Je.selectObjective(ai),Rt.releaseKeys(),lu(),Gm.style.display="block")}function $d(){oc=!1,Gm.style.display="none"}addEventListener("keydown",n=>{var s;if(!oc)return;const t=n.code;if(t!=="KeyW"&&t!=="KeyS"&&t!=="ArrowUp"&&t!=="ArrowDown"&&t!=="KeyE"&&t!=="Enter"&&t!=="Escape")return;if(n.preventDefault(),n.stopPropagation(),t==="Escape"){$d(),he("Navigation: no course set.");return}if(t==="KeyW"||t==="ArrowUp"){Je.move(-1,ai),lu();return}if(t==="KeyS"||t==="ArrowDown"){Je.move(1,ai),lu();return}const e=Je.selected;if($d(),!e){he("Navigation: no coordinates the ship can reach from here.");return}const i=ln[e];Z.console.setLamp(4,!0),he(`Navigation: coordinates set for ${((s=Yn[i.site])==null?void 0:s.name)??i.site}.`)},!0);let za=0;function he(n){cu.textContent=n,cu.style.opacity="1",za=4}Rt.onPause(n=>{ih.style.display=n?"flex":"none"});ih.style.display=Rt.paused?"flex":"none";document.addEventListener("pointerlockerror",()=>{Rt.paused&&(ih.innerHTML='<div>POINTER LOCK REFUSED BY THIS FRAME<div style="opacity:.7;font-size:12px;letter-spacing:0;margin-top:8px">Open http://localhost:5290 in a real browser tab, or drive it from the console:<br>game.update(dt) &nbsp;·&nbsp; shot(name, pose)</div></div>')},{once:!0});let jd=null;function _b(n){const t=qn.aiming?qn.target(ye,Ht.near.build):null,e=t||Rt.prompt,i=t?`sonic:${t.id}`:e?e.id:null;i!==jd&&(jd=i,ql.textContent=t?`▸  ${t.label}`:e?`[E]  ${e.label}`:"",ql.style.opacity=e?"1":"0",ql.style.color=t?"#8fd0ff":""),za>0&&(za-=n,za<=0&&(cu.style.opacity="0"))}const Yl=1/60,gb=.25;let $l=0;function Ye(n){const t=Math.min(Math.max(n||0,0),gb);$l+=t;let e=0;for(;$l+1e-9>=Yl&&e<8;)Rt.update(Yl),xe.step(),$l-=Yl,e++;if(Z.doors.update(t),Z.rotor.update(t),Z.fittings.update(t),Z.console.update(t),We.active&&Rt.releaseKeys(),qn.update(t),qn.setMood(cb(Ht.near)),hs>=0&&(hs+=t,hs>=Qu)){const i=ru;hs=-1,ru=null,hb(i)}Z.lighting.setRotorDrive(Z.rotor.drive),sc.uniforms.uTime.value+=t*(.25+1.75*Z.rotor.drive),Cr.update(t),Ps>=0&&(Ps+=t,Ps>=9&&(Ps=-1,Cr.clear())),Z.lighting.setDoorSpill(Z.doors.t),Z.lighting.update(t),Eb(),Re.update(t),Re.setDoorSpill(Z.doors.t),Ce.setDoorFraction(Z.doors.t),Ce.update(t),_b(t)}const jl=new H,xb=new H,vb=6;function Wm(){return!Z.fittings.shuttersOpen||!Z.fittings.scannerOn||Rt.world.id!==me?null:Ps>=0?"readout":Ht.link?"feed":"vortex"}function Mb(){const n=Wm(),t=Z.fittings.screen;if(n==="readout"){t.material!==Cr.material&&(t.material=Cr.material);return}if(n==="vortex"){t.material!==sc&&(t.material=sc);return}if(n==="feed"){t.material!==ka.material&&(t.material=ka.material),t.getWorldPosition(jl),jl.distanceTo(ye.position)<vb&&ye.getWorldDirection(xb).dot(jl.sub(ye.position).normalize())>.2&&Um()&&ka.render(ci,mo);return}}function zn(){_e.info.reset(),ye.updateMatrixWorld(!0),Mb();const n=Ht.liveLink(ye,Z.doors);n&&wi.pass(n,Ht.near,Ht.far),Ht.near.cap.visible=!!n,wi.setLive(!!n),_e.render(Ht.near.scene,ye),qn.pass(_e,ye)}const yb="KeyQ";addEventListener("keydown",n=>{var e;if(n.code!==yb||n.repeat||!Rt.locked)return;n.preventDefault();const t=qn.toggle();(e=Ce==null?void 0:Ce.play)==null||e.call(Ce,t?"sonic_draw":"sonic_stow")});addEventListener("mousedown",n=>{var t;if(!(!Rt.locked||!qn.out)){if(n.button===2){qn.setAim(!0);return}if(n.button===0){if(!qn.fire())return;const e=qn.target(ye,Ht.near.build);(t=Ce==null?void 0:Ce.play)==null||t.call(Ce,"sonic_use"),e&&typeof e.use=="function"?e.use({by:"sonic",at:e}):he(ou(e||null))}}});addEventListener("mouseup",n=>{n.button===2&&qn.setAim(!1)});addEventListener("contextmenu",n=>{Rt.locked&&n.preventDefault()});let Kd=performance.now();function Vm(n){requestAnimationFrame(Vm);const t=(n-Kd)/1e3;Kd=n,Ye(t),zn()}requestAnimationFrame(Vm);addEventListener("resize",()=>{const n=innerWidth,t=innerHeight;!n||!t||(_e.setPixelRatio(Math.min(devicePixelRatio||1,2)),_e.setSize(n,t,!1),ye.aspect=n/t,ye.updateProjectionMatrix(),wi.resize())});const Sb={renderer:_e,scene:fi,camera:ye,build:xn,palette:gs,walker:Rt,api:Z,audio:Ce,siteScene:ci,site:Re,box:Xe,worlds:Ht,portal:wi,threshold:xe,SITE:Ge,buildSite:Xi,buildBox:Ku,get link(){return Ht.link},get landing(){return Ht.link.landing},update:Ye,render:zn,get drawCalls(){return _e.info.render.calls},get world(){return Ht.near.id}};window.scanner={feed:ka,vortex:sc,scanCam:mo,aimScanCam:Um,get src(){return Wm()}};window.game=Sb;window.audio=Ce;window.doors=function(t,e={}){if(e.now)return Z.doors.force(t===void 0?!Z.doors.open:!!t),`doors ${Z.doors.state} (forced)`;const i=e.force?Z.doors.request(t===void 0?!Z.doors.open:!!t,{fittings:Z.fittings,rotor:Z.rotor,walker:Rt,force:!0}):au(!!e.atShell);return`${Z.doors.lastAction}: ${i}`};window.step=function(t=1){const e=Math.max(1,Math.round(t*60));for(let i=0;i<e;i++)Ye(1/60);return zn(),{world:Ht.near.id,doors:Z.doors.state,t:+Z.doors.t.toFixed(3),drawCalls:_e.info.render.calls,crossings:xe.crossings}};window.walk=function(t=1,e={}){const i=t>=0?"KeyW":"KeyS",s=Math.abs(t),r=xe.crossings,o=Rt._locked;Rt._locked=!0,Rt._down.add(i),e.run&&Rt._down.add("ShiftLeft");let a=0;const c=Rt.position.clone();let l=0;for(;a<s&&l++<1800;){const u=Ht.near;Ye(1/60),Ht.near===u&&(a+=c.distanceTo(Rt.position)),c.copy(Rt.position)}Rt._down.delete(i),Rt._down.delete("ShiftLeft"),Rt._locked=o;for(let u=0;u<20;u++)Ye(1/60);return zn(),{world:Ht.near.id,pos:[+Rt.position.x.toFixed(3),+Rt.position.y.toFixed(3),+Rt.position.z.toFixed(3)],moved:+a.toFixed(3),crossed:xe.crossings-r,drawCalls:_e.info.render.calls}};window.look=function(t,e){return t!==void 0&&(Rt.yaw=t),e!==void 0&&(Rt.pitch=e),Ye(1/60),zn(),{yaw:+Rt.yaw.toFixed(4),pitch:+Rt.pitch.toFixed(4)}};window.go=function(t,e,i){return Rt.teleport(t,0,e,i),xe.seed(),Ye(1/60),zn(),window.where()};window.cross=function(){const t=Ht.near.id;return xe.force(Ht.far.id),Ye(1/60),zn(),`${t} -> ${Ht.near.id}`};window.atDoor=function(t=2.2){const e=Ht.link,i=t>=0;i!==(Ht.near.id!==me)&&xe.force(i?Ge.id:me);const s=new H(0,0,Ln+t),r=i?e.toExterior(s):s,o=i?e.landing.yaw+Math.PI:0;return Rt.teleport(r.x,0,r.z,o),Rt.pitch=.02,xe.seed(),Ye(1/60),zn(),window.where()};window.atDoorOff=function(t=1.6,e=1.1,i=1.2){const s=Ht.link;Ht.near.id===me&&xe.force(Ge.id);const r=s.toExterior(new H(e,0,Ln+t)),o=s.toExterior(new H(0,0,Ln-i)),a=Math.atan2(o.x-r.x,o.z-r.z);return Rt.teleport(r.x,0,r.z,a),Rt.pitch=.04,xe.seed(),Ye(1/60),zn(),window.where()};window.where=function(){const t=Rt.position;return{world:Ht.near.id,pos:[+t.x.toFixed(3),+t.y.toFixed(3),+t.z.toFixed(3)],yaw:+Rt.yaw.toFixed(4),doors:Z.doors.state,portalLive:!!Ht.liveLink(ye,Z.doors),drawCalls:_e.info.render.calls,near:+wi.near.toFixed(4),bedMix:+xe.bedMix.toFixed(3),crossings:xe.crossings}};function sh(n=Ht.link){const t=n.toExterior(new H(0,0,Ln-.25));Re.doorSpill.position.set(t.x,1.1,t.z)}const Uo={id:"shellDoors",label:"Doors",pos:new H,action:"shellDoors",data:{},radius:1.6};Xi.interactables.push(Uo);const rh={id:"shellLock",label:"Keyhole",pos:new H,action:"shellLock",data:{},radius:1.1};Xi.interactables.push(rh);function oh(n=Ht.link){n.toSite(0,1.2,.95,Uo.pos),n.toSite(.135,1.25,.82,rh.pos)}function Eb(){Uo.label=Z.doors.locked?"Doors — locked":Z.doors.moving?"Doors":Z.doors.open?"Close the doors":"Open the doors",rh.label=nh(Rt)?Z.doors.open?"Keyhole":Z.doors.locked?"Unlock the doors":"Lock the doors":"Keyhole"}oh(Nr);const wb=Uo.radius;function Eo(n){Cn.visible=n,Xe.leaves.visible=n,Xe.lamp.visible=n,as.visible=n,Uo.radius=n?wb:-1}window.nav=function(){const t=Fm();return he(t),t};window.ship=Object.freeze({nav:Object.freeze({known:(n,t=!0)=>(Je.setKnown(n,t),`nav: ${n} ${t?"known":"forgotten"}`),lock:(n,t)=>(Je.setLocked(n,t),`nav: ${n} ${t?"locked — "+t:"unlocked"}`),objective:(n,t=null)=>(Je.setObjective(n,t),`nav: next beat is ${n??"none"}`),list:()=>Je.list(ai),get here(){return ai}}),fly:n=>{if(n){const t=Je.select(n,ai);if(t)return`nav: ${t}`}return vc()},talk:Object.freeze({load:(n,t)=>(We.load(n,t),`dialogue: ${n} loaded`),open:n=>Hm(n)??`dialogue: ${n}`,get active(){return We.active},get flags(){return We.flags}}),analyse:Object.freeze({register:(n,t)=>(di.register(n,t),`analyse: ${n} registered`),forget:n=>(di.forget(n),`analyse: ${n} forgotten`),read:n=>di.read(n),knows:n=>di.has(n),get known(){return di.known}}),save:()=>({here:ai,nav:Je.save(),analyse:di.save(),dialogue:We.save(),doors:{locked:Z.doors.locked}}),restore:n=>(n!=null&&n.nav&&Je.restore(n.nav),n!=null&&n.analyse&&di.restore(n.analyse),n!=null&&n.dialogue&&We.restore(n.dialogue),"ship: restored")});const bb=FS(window.ship);window.episode=bb;window.talk=function(t){const e=Hm(t);return e&&he(e),e??t};window.keyhole=function(){const t=Bm();return he(t),t};window.diagnose=function(){const t=eh();return he(t),t};window.analyse=function(t){const e=ou(t);return he(e),e};window.fly=function(){const t=vc();return he(t),t};window.plan=function(){return{here:ai,dest:th(),inFlight:rc(),secondsLeft:rc()?+(Qu-hs).toFixed(1):null}};window.depart=function(){return Ht.link?(Z.doors.forceT(0),Z.doors.setLocked(!0,{running:!1}),Eo(!1),No(null),Ht.setLink(null),xe.seed(),Ye(1/60),zn(),`the box has left ${Ge.id} — ${Rt.world.id===me?"you are aboard":"you are not"}`):"the box is already away"};function Kl(n){const t=new Set;n.traverse(e=>{e.geometry&&e.geometry.dispose();const i=e.material;i&&(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))});for(const e of t){for(const i of["map","normalMap","roughnessMap","aoMap","alphaMap","emissiveMap","bumpMap"])e[i]&&e[i].dispose&&e[i].dispose();e.dispose()}return t.size}function ah(n,t=null,{present:e=!0}={}){const i=Yn[n];if(!i)return`unknown site: ${n} (${Object.keys(Yn).join(", ")})`;if(Rt.world.id!==me)return"travelTo: you are standing outside. Come in and shut the doors first.";const s=(typeof t=="string"?ln[t]:t)??Object.values(ln).find(o=>o.site===n);if(!s)return`travelTo: site '${n}' has no landing in LANDINGS`;if(s.site!==n)return`travelTo: landing is at '${s.site}', not '${n}'`;Ht.remountExterior({id:i.id}),Eo(!1),ci.remove(co,Re.live,as),Kl(co),Kl(Re.live),Kl(as),Ge=i,{bSite:Xi,site:Re,bakedSite:co,boxContact:as}=Nm(Ge,s),ci.fog=Re.fog,ci.add(co,Re.live,as),Cn.position.set(s.x,0,s.z),Cn.rotation.y=s.yaw,Xe.leaves.position.copy(Cn.position),Xe.leaves.rotation.y=s.yaw,Xe.lamp.position.set(s.x,Xe.lamp.position.y,s.z),Cn.updateMatrixWorld(!0),Re.placeContact(as,s.x,s.z),ob(),Ht.remountExterior({id:Ge.id,build:Xi,surface:Re.surface,beds:Re.bedIds,dist:Re.distance,update:Re.update});const r=Xu(s,Yn);return No(r),Eo(!0),Ht.setLink(r),sh(r),oh(r),Z.lighting.setDoorSpillColour(Ge.sun.colour),xe.seed(),Ce.setSiteBeds(Re.beds),e&&(Ye(1/60),zn()),`arrived at ${Ge.name} (${Ge.id}) — ${s.x}, ${s.z}`}window.travel=ah;window.arrive=function(t){const e=typeof t=="string"?ln[t]:t;if(!e)return`unknown landing: ${t} (${Object.keys(ln).join(", ")})`;if(e.site!==Ge.id)return ah(e.site,e);Cn.position.set(e.x,0,e.z),Cn.rotation.y=e.yaw,Xe.leaves.position.copy(Cn.position),Xe.leaves.rotation.y=e.yaw,Xe.lamp.position.set(e.x,Xe.lamp.position.y,e.z),Cn.updateMatrixWorld(!0),Re.placeContact(as,e.x,e.z);const i=Xu(e,Yn);return No(i),Eo(!0),Ht.setLink(i),sh(i),oh(i),xe.seed(),Ye(1/60),zn(),`box at ${e.x}, ${e.z} yaw ${e.yaw} — ${window.where().world}`};window.place=window.arrive;window.help=function(){return["doors(open?, {now})  open/shut the doors (now: instant, no interlock)","step(seconds)        advance the clock; rAF is frozen in this pane","walk(metres, {run})  walk through the real solver AND the real threshold","look(yaw, pitch)     yaw 0 = +Z = the doors from inside","go(x, z, yaw)        teleport within the current world","cross()              step through the threshold without walking","place(landing)       move the TARDIS. "+Object.keys(ln).join(" / "),"atDoor(m)            stand m metres out on the door axis, facing the doors","                     (+ outside on the plain, - inside the room)","where()              world, pose, doors, portal state, draw calls","shot(name, pose)     pose takes {world, landing, doors, pos, yaw, pitch, free}","shotAll()            the interior suite; shotThreshold() the new one","sfx(id)              fire one sound. sfx() lists all 41."].join(`
`)};window.sfx=function(t,e){if(t===void 0)return Object.keys(Na);if(!Na[t])return`no such sound: ${t} (${Object.keys(Na).length} in the catalogue)`;if(Ce.unlock(),!Ce.available)return"no AudioContext — click the page once, then try again";if(Ce.muted)return"muted — press N, or audio.setMuted(false)";const i=Ce.play(t,e||{});return i?i.endsAt??i:`dropped: ${t} (voice limit, or no anchor for its spot)`};window.shot=async function(t="shot",e=null){e&&(e.world&&e.world!==Ht.near.id&&xe.force(e.world),e.doors!==void 0&&Z.doors.force(e.doors>0),e.pos&&Rt.teleport(e.pos[0],e.pos[1]??0,e.pos[2],e.yaw),e.yaw!==void 0&&(Rt.yaw=e.yaw),e.pitch!==void 0&&(Rt.pitch=e.pitch),xe.seed());const i=1280,s=720,r=_e.getPixelRatio(),o=_e.getSize(new Bt),a=ye.aspect;r!==1&&_e.setPixelRatio(1),_e.setSize(i,s,!1),ye.aspect=i/s,ye.updateProjectionMatrix(),wi.resize();const c=Math.max(1,(e==null?void 0:e.settle)??90);for(let h=0;h<c;h++)Ye(1/60);e!=null&&e.free&&(Rt.driveCamera=!1,ye.position.set(...e.free.pos),ye.lookAt(...e.free.look),ye.updateMatrixWorld(!0)),zn(),e!=null&&e.free&&(Rt.driveCamera=!0);const l=Pm.toDataURL("image/png");return r!==1&&_e.setPixelRatio(r),o.x>0&&o.y>0&&(_e.setSize(o.x,o.y,!1),ye.aspect=a,ye.updateProjectionMatrix()),wi.resize(),(await fetch("http://localhost:5299/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:l})})).json()};window.shotAll=async function(){const t=[["entry",{pos:[0,0,2.3],yaw:Math.PI,pitch:-.04}],["console-axis",{pos:[0,0,-2.03],yaw:0,pitch:-.16}],["rotor",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34}],["roundels",{pos:[0,0,-1.7],yaw:Math.PI,pitch:.06}],["doors",{pos:[0,0,.6],yaw:0,pitch:.1}],["scanner",{pos:[1.535,0,1.535],yaw:.785398,pitch:.1}],["fault",{pos:[-1.535,0,1.535],yaw:-.785398,pitch:.02}],["victorian",{pos:[-.75,0,-.75],yaw:3.926991,pitch:-.18}],["aerial",{pos:[0,0,2.3],yaw:Math.PI,settle:90,free:{pos:[2.3,2.95,2.3],look:[0,.95,0]}}]],e=[];for(const[r,o]of t)e.push(r+":"+((await shot(r,o)).ok?"ok":"FAIL"));const i=Z.fittings,s=Z.rotor;i.setShutters(!0),i.setScanner(!0),e.push("scanner-open:"+((await shot("scanner-open",{pos:[1.05,0,1.05],yaw:.785398,pitch:.1})).ok?"ok":"FAIL")),i.setShutters(!1),i.setScanner(!1);for(let r=0;r<120;r++)Ye(1/60);s.setRunning(!0);for(let r=0;r<600&&(Ye(1/60),!(s.height>s.parked+.12));r++);e.push("rotor-flight:"+((await shot("rotor-flight",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34,settle:1})).ok?"ok":"FAIL")),s.setRunning(!1);for(let r=0;r<400;r++)Ye(1/60);return e};function qm(){const n=Mi.half-Oo,t=c=>atDoor(c+n),e=(c,l,u)=>{const h=Math.hypot(c,l),f=(h+n)/h;return atDoorOff(c*f,l*f,u)},i=(c,l,u,h)=>{const f=Math.hypot(c,l),d=(h+n)/f;return atDoorOff(c*d,l*d,u)},s=Math.tan(ye.fov*Math.PI/180/2),r=.3,o=(Ne.TOP/2+r)/s;return{FACE_D:n,atFace:t,atFaceOff:e,atFaceR:i,HALF_V:s,FIT_MARGIN:r,FIT_D:o,aimAt:(c,l)=>Math.atan((c-Te.EYE)/l)}}window.shotThreshold=async function(){const t=[],e=async(h,f)=>{const d=await shot(h,f);t.push(`${h}:${d.ok?"ok":"FAIL"}:${_e.info.render.calls}`)};Ht.near.id!==me&&xe.force(me);const{FACE_D:i,atFace:s,atFaceR:r,FIT_D:o,aimAt:a}=qm();Z.fittings.setShutters(!0),Z.fittings.setScanner(!0),await e("doors",{doors:0,pos:[0,0,.6],yaw:0,pitch:.1}),await e("doors-open",{doors:1,pos:[0,0,.6],yaw:0,pitch:.1}),Z.doors.forceT(.45),await e("doors-swing",{pos:[0,0,.6],yaw:0,pitch:.1,settle:1}),await e("doors-funnel",{doors:1,pos:[.5,0,2.2],yaw:0,pitch:.02}),await e("portal-out",{doors:1,pos:[0,0,1.4],yaw:0,pitch:.02}),await e("portal-near",{doors:1,pos:[0,0,3.18],yaw:0,pitch:0}),await e("threshold-a",{doors:1,pos:[0,0,3.283],yaw:0,pitch:0}),await e("threshold-b",{doors:1,pos:[0,0,3.285],yaw:0,pitch:0});const c=Ge.id,l=()=>Ht.link;await e("site-sky",{world:c,doors:0,pos:[4,0,4],yaw:2.356194,pitch:.42}),await e("site-wide",{world:c,doors:0,pos:[0,0,5],yaw:Math.PI,pitch:-.06,free:{pos:[l().landing.x,6,l().landing.z+6],look:[l().landing.x,1.4,l().landing.z]}}),atDoor(10.8),await e("site-eye",{pitch:.02}),Z.doors.force(!1),s(o),await e("box-front",{pitch:a(Ne.TOP/2,o)}),Z.doors.force(!1),r(1.6,1.9,.085,o),await e("box-corner",{pitch:a(Ne.TOP/2,o)}),Z.doors.force(!1),r(1.6,1.9,.085,1.6),await e("box-band",{pitch:a(1.76,1.6)}),Z.doors.force(!1),atDoorOff(.9+i,-.305,0),await e("box-notice",{pitch:a(1.145,.9)});{const h=(Ne.SIGN_Y0+Ne.SIGN_Y1)/2;Z.doors.force(!1),s(1.3),await e("box-sign",{pitch:a(h,1.3)})}{const h=(Ne.TOP+2.9)/2;Z.doors.force(!1),s(2.1),await e("box-lamp",{pitch:a(h,2.1+Mi.half)})}Z.doors.force(!0),atDoor(2.715),await e("portal-in",{}),Z.doors.force(!0),s(o),await e("box-open",{pitch:a(Ne.TOP/2,o)}),Z.doors.force(!0),atDoorOff(1.6,1.1,1.2),await e("portal-in-offaxis",{}),Z.doors.force(!0),r(1.697,1.697,.085,o),await e("box-grazing",{pitch:a(Ne.TOP/2,o)}),Z.doors.force(!0),r(1.24,2.66,.085,o),await e("box-raking",{pitch:a(Ne.TOP/2,o)}),Z.doors.force(!1),atDoor(.7),await e("box-vestibule",{}),Z.doors.force(!0),atDoorOff(1.1,.62,.085),await e("box-reveal",{}),Z.doors.forceT(.45),atDoor(2.715),await e("box-swing",{settle:1});{const h=l().landing;Z.doors.force(!1),await e("box-plan",{free:{pos:[h.x,7.2,h.z-.001],look:[h.x,1,h.z]}})}{const h=l();Z.doors.force(!0);const f=Oo+Mi.half+o,d=h.toExterior(new H(0,0,Ln-f)),m=h.toExterior(new H(0,0,Ln));Rt.teleport(d.x,0,d.z,Math.atan2(m.x-d.x,m.z-d.z)),Rt.pitch=a(Ne.TOP/2,o),xe.seed()}await e("box-behind",{}),Z.doors.force(!0),atDoor(5.8),await e("box-behind-ish",{});const u=l().landing;ln.ashfall_rim&&ln.ashfall_rim.site===c&&(place("ashfall_rim"),Z.doors.force(!0),atDoor(2.715),await e("box-placed",{}),place({...u})),xe.force(me),Z.doors.force(!1),Z.fittings.setShutters(!1),Z.fittings.setScanner(!1),Rt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),xe.seed();for(let h=0;h<90;h++)Ye(1/60);return t};window.shotLanding=async function(t="landing"){const{atFace:e,FIT_D:i,aimAt:s}=qm(),r=[],o=async(a,c)=>{const l=await shot(a,c);r.push(`${a}:${l.ok?"ok":"FAIL"}:${_e.info.render.calls}`)};Ht.near.id!==me&&xe.force(me),Z.fittings.setShutters(!0),Z.fittings.setScanner(!0),xe.force(Ge.id),Z.doors.force(!0),atDoor(2.715),await o(`${t}-portal-in`,{}),Z.doors.force(!1),e(i),await o(`${t}-box-front`,{pitch:s(Ne.TOP/2,i)}),Z.doors.force(!0),e(i),await o(`${t}-box-open`,{pitch:s(Ne.TOP/2,i)}),xe.force(me),Z.doors.force(!1),Z.fittings.setShutters(!1),Z.fittings.setScanner(!1),Rt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),xe.seed();for(let a=0;a<90;a++)Ye(1/60);return r};console.info(`[room] built. ${Om.children.length} baked meshes, ${xn.lights.length} lights, ${xn.interactables.length} interactables, ${xn.colliders.length} collider(s).`);
