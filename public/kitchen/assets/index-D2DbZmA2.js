(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="169",Ku=0,Wl=1,ju=2,Th=1,Eh=2,zn=3,Wn=0,Be=1,Zt=2,Gn=0,is=1,cs=2,Xl=3,ql=4,Zu=5,vi=100,Ju=101,Qu=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,aa=204,la=205,af=206,lf=207,cf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,ca=0,ha=1,ua=2,hs=3,fa=4,da=5,pa=6,ma=7,Ah=0,gf=1,xf=2,ii=0,Ch=1,Rh=2,Ph=3,sl=4,vf=5,Lh=6,Ih=7,Dh=300,us=301,fs=302,ga=303,xa=304,io=306,wi=1e3,yi=1001,va=1002,sn=1003,_f=1004,lr=1005,yn=1006,xo=1007,Mi=1008,Xn=1009,Uh=1010,Nh=1011,js=1012,rl=1013,bi=1014,Tn=1015,Vn=1016,ol=1017,al=1018,ds=1020,kh=35902,Fh=1021,zh=1022,wn=1023,Oh=1024,Bh=1025,ss=1026,ps=1027,ll=1028,cl=1029,Hh=1030,hl=1031,ul=1033,Br=33776,Hr=33777,Gr=33778,Vr=33779,_a=35840,ya=35841,Ma=35842,wa=35843,ba=36196,Sa=37492,Ta=37496,Ea=37808,Aa=37809,Ca=37810,Ra=37811,Pa=37812,La=37813,Ia=37814,Da=37815,Ua=37816,Na=37817,ka=37818,Fa=37819,za=37820,Oa=37821,Wr=36492,Ba=36494,Ha=36495,Gh=36283,Ga=36284,Va=36285,Wa=36286,yf=3200,Mf=3201,Vh=0,wf=1,ei="",hn="srgb",oi="srgb-linear",fl="display-p3",so="display-p3-linear",$r="linear",Me="srgb",Kr="rec709",jr="p3",Di=7680,Yl=519,bf=512,Sf=513,Tf=514,Wh=515,Ef=516,Af=517,Cf=518,Rf=519,Xa=35044,rs=35048,$l="300 es",Hn=2e3,Zr=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const Ws=Math.PI/180,ms=180/Math.PI;function En(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function Pf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lf(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function If(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function Df(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function Uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ff(i,t){return i+Math.random()*(t-i)}function zf(i){return i*(.5-Math.random())}function Of(i){i!==void 0&&(Kl=i);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bf(i){return i*Ws}function Hf(i){return i*ms}function Gf(i){return(i&i-1)===0&&i!==0}function Vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qf={DEG2RAD:Ws,RAD2DEG:ms,generateUUID:En,clamp:ke,euclideanModulo:dl,mapLinear:Pf,inverseLerp:Lf,lerp:Xs,damp:If,pingpong:Df,smoothstep:Uf,smootherstep:Nf,randInt:kf,randFloat:Ff,randFloatSpread:zf,seededRandom:Of,degToRad:Bf,radToDeg:Hf,isPowerOfTwo:Gf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:ge,denormalize:Mn};class Y{constructor(t=0,e=0){Y.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],M=s[1],v=s[4],y=s[7],R=s[2],E=s[5],T=s[8];return r[0]=o*x+a*M+l*R,r[3]=o*p+a*v+l*E,r[6]=o*g+a*y+l*T,r[1]=c*x+h*M+f*R,r[4]=c*p+h*v+f*E,r[7]=c*g+h*y+f*T,r[2]=u*x+d*M+m*R,r[5]=u*p+d*v+m*E,r[8]=u*g+d*y+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new jt;function Xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){const i=Jr("canvas");return i.style.display="block",i}const jl={};function Xr(i){i in jl||(jl[i]=!0,console.warn(i))}function $f(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Kf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[oi]:{transfer:$r,primaries:Kr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[hn]:{transfer:Me,primaries:Kr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[so]:{transfer:$r,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Jl),fromReference:i=>i.applyMatrix3(Zl)},[fl]:{transfer:Me,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jl),fromReference:i=>i.applyMatrix3(Zl).convertLinearToSRGB()}},Zf=new Set([oi,so]),le={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Cs[t].toReference,s=Cs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Cs[i].primaries},getTransfer:function(i){return i===ei?$r:Cs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Cs[t].luminanceCoefficients)}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Jf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Jr("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=os(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qf=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;class We extends _s{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=yi,s=yi,r=yn,o=Mi,a=wn,l=Xn,c=We.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=En(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wi:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wi:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Dh;We.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(d+1)/2,R=(g+1)/2,E=(h+u)/4,T=(f+x)/4,L=(m+p)/4;return v>y&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ed extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends ed{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nd extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(f!==x||l!==u||c!==d||h!==m){let p=1-a;const g=l*u+c*d+h*m+f*x,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,g*M);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const y=a*M;if(l=l*p+u*y,c=c*p+d*y,h=h*p+m*y,f=f*p+x*y,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new C,Ql=new un;class Ci{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),hr.subVectors(this.max,Rs),Ni.subVectors(t.a,Rs),ki.subVectors(t.b,Rs),Fi.subVectors(t.c,Rs),$n.subVectors(ki,Ni),Kn.subVectors(Fi,ki),ci.subVectors(Ni,Fi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-ci.z,ci.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,ci.z,0,-ci.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-ci.y,ci.x,0];return!wo(e,Ni,ki,Fi,hr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,Ni,ki,Fi,hr))?!1:(ur.crossVectors($n,Kn),e=[ur.x,ur.y,ur.z],wo(e,Ni,ki,Fi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,cr=new Ci,Ni=new C,ki=new C,Fi=new C,$n=new C,Kn=new C,ci=new C,Rs=new C,hr=new C,ur=new C,hi=new C;function wo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hi.fromArray(i,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const id=new Ci,Ps=new C,bo=new C;class ys{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(bo)),this.expandByPoint(Ps.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new C,So=new C,fr=new C,jn=new C,To=new C,dr=new C,Eo=new C;class pl{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){So.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(So);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=jn.dot(this.direction),l=-jn.dot(fr),c=jn.lengthSq(),h=Math.abs(1-o*o);let f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(So).addScaledVector(fr,u),d}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),dr.subVectors(n,t),Eo.crossVectors(To,dr);let o=this.direction.dot(Eo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(dr.crossVectors(jn,dr));if(l<0)return null;const c=a*this.direction.dot(To.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(Eo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,m,x,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,m,x,p)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){const u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,rd)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Zn.crossVectors(n,an),Zn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Zn.crossVectors(n,an)),Zn.normalize(),pr.crossVectors(an,Zn),s[0]=Zn.x,s[4]=pr.x,s[8]=an.x,s[1]=Zn.y,s[5]=pr.y,s[9]=an.y,s[2]=Zn.z,s[6]=pr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],M=n[3],v=n[7],y=n[11],R=n[15],E=s[0],T=s[4],L=s[8],I=s[12],_=s[1],b=s[5],k=s[9],F=s[13],G=s[2],X=s[6],B=s[10],J=s[14],V=s[3],gt=s[7],xt=s[11],vt=s[15];return r[0]=o*E+a*_+l*G+c*V,r[4]=o*T+a*b+l*X+c*gt,r[8]=o*L+a*k+l*B+c*xt,r[12]=o*I+a*F+l*J+c*vt,r[1]=h*E+f*_+u*G+d*V,r[5]=h*T+f*b+u*X+d*gt,r[9]=h*L+f*k+u*B+d*xt,r[13]=h*I+f*F+u*J+d*vt,r[2]=m*E+x*_+p*G+g*V,r[6]=m*T+x*b+p*X+g*gt,r[10]=m*L+x*k+p*B+g*xt,r[14]=m*I+x*F+p*J+g*vt,r[3]=M*E+v*_+y*G+R*V,r[7]=M*T+v*b+y*X+R*gt,r[11]=M*L+v*k+y*B+R*xt,r[15]=M*I+v*F+y*J+R*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*d-n*l*d)+x*(+e*l*d-e*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+p*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*h-n*c*h)+g*(-s*a*h-e*l*f+e*a*u+s*o*f-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=f*p*c-x*u*c+x*l*d-a*p*d-f*l*g+a*u*g,v=m*u*c-h*p*c-m*l*d+o*p*d+h*l*g-o*u*g,y=h*x*c-m*f*c+m*a*d-o*x*d-h*a*g+o*f*g,R=m*f*l-h*x*l-m*a*u+o*x*u+h*a*p-o*f*p,E=e*M+n*v+s*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(x*u*r-f*p*r-x*s*d+n*p*d+f*s*g-n*u*g)*T,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*g+n*l*g)*T,t[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*d-n*l*d)*T,t[4]=v*T,t[5]=(h*p*r-m*u*r+m*s*d-e*p*d-h*s*g+e*u*g)*T,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*T,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*d+e*l*d)*T,t[8]=y*T,t[9]=(m*f*r-h*x*r-m*n*d+e*x*d+h*n*g-e*f*g)*T,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*g+e*a*g)*T,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(h*x*s-m*f*s+m*n*u-e*x*u-h*n*p+e*f*p)*T,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*p-e*a*p)*T,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,x=o*h,p=o*f,g=a*f,M=l*c,v=l*h,y=l*f,R=n.x,E=n.y,T=n.z;return s[0]=(1-(x+g))*R,s[1]=(d+y)*R,s[2]=(m-v)*R,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+g))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(m+v)*T,s[9]=(p-M)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/r,h=1/o,f=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,m;if(a===Hn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Zr)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*c,d=(n+s)*h;let m,x;if(a===Hn)m=(o+r)*f,x=-2*f;else if(a===Zr)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new C,vn=new ee,sd=new C(0,0,0),rd=new C(1,1,1),Zn=new C,pr=new C,an=new C,tc=new ee,ec=new un;class Xe{constructor(t=0,e=0,n=0,s=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let od=0;const nc=new C,Oi=new un,Dn=new ee,mr=new C,Ls=new C,ad=new C,ld=new un,ic=new C(1,0,0),sc=new C(0,1,0),rc=new C(0,0,1),oc={type:"added"},cd={type:"removed"},Bi={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Pe extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new C,e=new Xe,n=new un,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ls,mr,this.up):Dn.lookAt(mr,Ls,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new C(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new C,Un=new C,Co=new C,Nn=new C,Hi=new C,Gi=new C,ac=new C,Ro=new C,Po=new C,Lo=new C,Io=new ve,Do=new ve,Uo=new ve;class mn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Un.subVectors(n,e),Co.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Un),l=_n.dot(Co),c=Un.dot(Un),h=Un.dot(Co),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Io.setScalar(0),Do.setScalar(0),Uo.setScalar(0),Io.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Io,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Un.subVectors(t,e),_n.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),_n.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),Ro.subVectors(t,n);const l=Hi.dot(Ro),c=Gi.dot(Ro);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,s);const h=Hi.dot(Po),f=Gi.dot(Po);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Hi,o);Lo.subVectors(t,r);const d=Hi.dot(Lo),m=Gi.dot(Lo);if(m>=0&&d<=m)return e.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Gi,a);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return ac.subVectors(r,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(ac,a);const g=1/(p+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function No(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=dl(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return le.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ke(Ve.r*255,0,255))*65536+Math.round(ke(Ve.g*255,0,255))*256+Math.round(ke(Ve.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=hn){le.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(gr);const n=Xs(Jn.h,gr.h,e),s=Xs(Jn.s,gr.s,e),r=Xs(Jn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new st;st.NAMES=$h;let hd=0;class Ri extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=En(),this.name="",this.type="Material",this.blending=is,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Te extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new C,xr=new Y;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class Kh extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ud=0;const dn=new ee,ko=new Pe,Vi=new C,ln=new Ci,Is=new Ci,Oe=new C;class be extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xh(t)?jh:Kh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(ln.min,Is.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,Is.max),ln.expandByPoint(Oe)):(ln.expandByPoint(Is.min),ln.expandByPoint(Is.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(t,c),Oe.add(Vi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;const c=new C,h=new C,f=new C,u=new Y,d=new Y,m=new Y,x=new C,p=new C;function g(L,I,_){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,_),u.fromBufferAttribute(r,L),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,_),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const b=1/(d.x*m.y-m.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(b),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(b),a[L].add(x),a[I].add(x),a[_].add(x),l[L].add(p),l[I].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,I=M.length;L<I;++L){const _=M[L],b=_.start,k=_.count;for(let F=b,G=b+k;F<G;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new C,y=new C,R=new C,E=new C;function T(L){R.fromBufferAttribute(s,L),E.copy(R);const I=a[L];v.copy(I),v.sub(R.multiplyScalar(R.dot(I))).normalize(),y.crossVectors(E,I);const b=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,b)}for(let L=0,I=M.length;L<I;++L){const _=M[L],b=_.start,k=_.count;for(let F=b,G=b+k;F<G;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new Le(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new ee,ui=new pl,vr=new ys,cc=new C,_r=new C,yr=new C,Mr=new C,Fo=new C,wr=new C,hc=new C,br=new C;class lt extends Pe{constructor(t=new be,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(Fo.fromBufferAttribute(f,t),o?wr.addScaledVector(Fo,h):wr.addScaledVector(Fo.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(vr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(vr,cc)===null||ui.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){const E=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);s=Sr(this,g,t,n,c,h,f,E,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const M=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=Sr(this,o,t,n,c,h,f,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const p=u[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){const E=y,T=y+1,L=y+2;s=Sr(this,g,t,n,c,h,f,E,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const M=p,v=p+1,y=p+2;s=Sr(this,o,t,n,c,h,f,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function fd(i,t,e,n,s,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wn,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function Sr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,_r),i.getVertexPosition(l,yr),i.getVertexPosition(c,Mr);const h=fd(i,t,e,n,_r,yr,Mr,hc);if(h){const f=new C;mn.getBarycoord(hc,_r,yr,Mr,f),s&&(h.uv=mn.getInterpolatedAttribute(s,a,l,c,f,new Y)),r&&(h.uv1=mn.getInterpolatedAttribute(r,a,l,c,f,new Y)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};mn.getNormal(_r,yr,Mr,u.normal),h.face=u,h.barycoord=f}return h}class Ut extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function m(x,p,g,M,v,y,R,E,T,L,I){const _=y/T,b=R/L,k=y/2,F=R/2,G=E/2,X=T+1,B=L+1;let J=0,V=0;const gt=new C;for(let xt=0;xt<B;xt++){const vt=xt*b-F;for(let Jt=0;Jt<X;Jt++){const ne=Jt*_-k;gt[x]=ne*M,gt[p]=vt*v,gt[g]=G,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[p]=0,gt[g]=E>0?1:-1,h.push(gt.x,gt.y,gt.z),f.push(Jt/T),f.push(1-xt/L),J+=1}}for(let xt=0;xt<L;xt++)for(let vt=0;vt<T;vt++){const Jt=u+vt+X*xt,ne=u+vt+X*(xt+1),$=u+(vt+1)+X*(xt+1),ot=u+(vt+1)+X*xt;l.push(Jt,ne,ot),l.push(ne,$,ot),V+=6}a.addGroup(d,V,I),d+=V,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=gs(i[e]);for(const s in n)t[s]=n[s]}return t}function dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Zs={clone:gs,merge:Ke};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new C,uc=new Y,fc=new Y;class nn extends Jh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,fc),e.subVectors(fc,uc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class gd extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new nn(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new nn(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new nn(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new nn(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const c=new nn(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qh extends We{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xd extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Gn});r.uniforms.tEquirect.value=e;const o=new lt(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=yn),new gd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const zo=new C,vd=new C,_d=new jt;class gi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=zo.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_d.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new ys,Tr=new C;class gl{constructor(t=new gi,e=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],x=s[10],p=s[11],g=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,p-d,y-g).normalize(),n[1].setComponents(l+r,u+c,p+d,y+g).normalize(),n[2].setComponents(l+o,u+h,p+m,y+M).normalize(),n[3].setComponents(l-o,u-h,p-m,y-M).normalize(),n[4].setComponents(l-a,u-f,p-x,y-v).normalize(),e===Hn)n[5].setComponents(l+a,u+f,p+x,y+v).normalize();else if(e===Zr)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class we extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const M=g*u-o;for(let v=0;v<c;v++){const y=v*f-r;m.push(y,-M,0),x.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const v=M+c*g,y=M+c*(g+1),R=M+1+c*(g+1),E=M+1+c*g;d.push(v,y,E),d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
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
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,Nd=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
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
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,_p=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,F0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,V0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,X0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,Y0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Md,alphahash_pars_fragment:wd,alphamap_fragment:bd,alphamap_pars_fragment:Sd,alphatest_fragment:Td,alphatest_pars_fragment:Ed,aomap_fragment:Ad,aomap_pars_fragment:Cd,batching_pars_vertex:Rd,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Id,bsdfs:Dd,iridescence_fragment:Ud,bumpmap_pars_fragment:Nd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Yd,displacementmap_vertex:$d,emissivemap_fragment:Kd,emissivemap_pars_fragment:jd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:vp,lights_physical_pars_fragment:_p,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:wp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ep,map_fragment:Ap,map_pars_fragment:Cp,map_particle_fragment:Rp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:kp,morphtarget_vertex:Fp,normal_fragment_begin:zp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:Hp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:$p,packing:Kp,premultiplied_alpha_fragment:jp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:o0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:h0,specularmap_pars_fragment:u0,tonemapping_fragment:f0,tonemapping_pars_fragment:d0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:x0,uv_vertex:v0,worldpos_vertex:_0,background_vert:y0,background_frag:M0,backgroundCube_vert:w0,backgroundCube_frag:b0,cube_vert:S0,cube_frag:T0,depth_vert:E0,depth_frag:A0,distanceRGBA_vert:C0,distanceRGBA_frag:R0,equirect_vert:P0,equirect_frag:L0,linedashed_vert:I0,linedashed_frag:D0,meshbasic_vert:U0,meshbasic_frag:N0,meshlambert_vert:k0,meshlambert_frag:F0,meshmatcap_vert:z0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:H0,meshphong_vert:G0,meshphong_frag:V0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:$0,points_frag:K0,shadow_vert:j0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:Q0},pt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new st(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ke([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ke([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new st(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ke([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ke([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ke([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ke([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ke([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ke([pt.lights,pt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Sn.physical={uniforms:Ke([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Er={r:0,b:0,g:0},di=new Xe,tm=new ee;function em(i,t,e,n,s,r,o){const a=new st(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const y=m(M);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===io)?(h===void 0&&(h=new lt(new Ut(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:gs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(v.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(di)),h.material.toneMapped=le.getTransfer(y.colorSpace)!==Me,(f!==y||u!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new we(2,2),new Ze({name:"BackgroundMaterial",uniforms:gs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,v){M.getRGB(Er,Zh(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:x,addToRenderList:p}}function nm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(_,b,k,F,G){let X=!1;const B=f(F,k,b);r!==B&&(r=B,c(r.object)),X=d(_,F,k,G),X&&m(_,F,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(_,b,k,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,b,k){const F=k.wireframe===!0;let G=n[_.id];G===void 0&&(G={},n[_.id]=G);let X=G[b.id];X===void 0&&(X={},G[b.id]=X);let B=X[F];return B===void 0&&(B=u(l()),X[F]=B),B}function u(_){const b=[],k=[],F=[];for(let G=0;G<e;G++)b[G]=0,k[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:k,attributeDivisors:F,object:_,attributes:{},index:null}}function d(_,b,k,F){const G=r.attributes,X=b.attributes;let B=0;const J=k.getAttributes();for(const V in J)if(J[V].location>=0){const xt=G[V];let vt=X[V];if(vt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),xt===void 0||xt.attribute!==vt||vt&&xt.data!==vt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function m(_,b,k,F){const G={},X=b.attributes;let B=0;const J=k.getAttributes();for(const V in J)if(J[V].location>=0){let xt=X[V];xt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor));const vt={};vt.attribute=xt,xt&&xt.data&&(vt.data=xt.data),G[V]=vt,B++}r.attributes=G,r.attributesNum=B,r.index=F}function x(){const _=r.newAttributes;for(let b=0,k=_.length;b<k;b++)_[b]=0}function p(_){g(_,0)}function g(_,b){const k=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;k[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),G[_]!==b&&(i.vertexAttribDivisor(_,b),G[_]=b)}function M(){const _=r.newAttributes,b=r.enabledAttributes;for(let k=0,F=b.length;k<F;k++)b[k]!==_[k]&&(i.disableVertexAttribArray(k),b[k]=0)}function v(_,b,k,F,G,X,B){B===!0?i.vertexAttribIPointer(_,b,k,G,X):i.vertexAttribPointer(_,b,k,F,G,X)}function y(_,b,k,F){x();const G=F.attributes,X=k.getAttributes(),B=b.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let gt=G[J];if(gt===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),gt!==void 0){const xt=gt.normalized,vt=gt.itemSize,Jt=t.get(gt);if(Jt===void 0)continue;const ne=Jt.buffer,$=Jt.type,ot=Jt.bytesPerElement,At=$===i.INT||$===i.UNSIGNED_INT||gt.gpuType===rl;if(gt.isInterleavedBufferAttribute){const mt=gt.data,Bt=mt.stride,Ot=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)g(V.location+Xt,mt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)p(V.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Xt=0;Xt<V.locationSize;Xt++)v(V.location+Xt,vt/V.locationSize,$,xt,Bt*ot,(Ot+vt/V.locationSize*Xt)*ot,At)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<V.locationSize;mt++)g(V.location+mt,gt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<V.locationSize;mt++)p(V.location+mt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let mt=0;mt<V.locationSize;mt++)v(V.location+mt,vt/V.locationSize,$,xt,vt*ot,vt/V.locationSize*mt*ot,At)}}else if(B!==void 0){const xt=B[J];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(V.location,xt);break;case 3:i.vertexAttrib3fv(V.location,xt);break;case 4:i.vertexAttrib4fv(V.location,xt);break;default:i.vertexAttrib1fv(V.location,xt)}}}}M()}function R(){L();for(const _ in n){const b=n[_];for(const k in b){const F=b[k];for(const G in F)h(F[G].object),delete F[G];delete b[k]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const k in b){const F=b[k];for(const G in F)h(F[G].object),delete F[G];delete b[k]}delete n[_.id]}function T(_){for(const b in n){const k=n[b];if(k[_.id]===void 0)continue;const F=k[_.id];for(const G in F)h(F[G].object),delete F[G];delete k[_.id]}}function L(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function im(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];for(let x=0;x<u.length;x++)e.update(m,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!L)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:R,maxSamples:E}}function rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new gi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,v=M*4;let y=g.clippingState||null;l.value=y,y=h(m,u,v,d);for(let R=0;R!==v;++R)y[R]=e[R];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=d+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function om(i){let t=new WeakMap;function e(o,a){return a===ga?o.mapping=us:a===xa&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ga||a===xa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xl extends Jh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,dc=[.125,.215,.35,.446,.526,.582],_i=20,Oo=new xl,pc=new st;let Bo=null,Ho=0,Go=0,Vo=!1;const xi=(1+Math.sqrt(5))/2,qi=1/xi,mc=[new C(-xi,qi,0),new C(xi,qi,0),new C(-qi,0,xi),new C(qi,0,xi),new C(0,xi,-qi),new C(0,xi,qi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,Ho,Go),this._renderer.xr.enabled=Vo,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Vn,format:wn,colorSpace:oi,depthBuffer:!1},s=gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(r)),this._blurMaterial=lm(r,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(pc),h.toneMapping=ii,h.autoClear=!1;const d=new Te({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new lt(new Ut,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(pc),x=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Ar(s,M*v,g>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===us||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mc[(s-r-1)%mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new lt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_i-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const g=[];let M=0;for(let T=0;T<_i;++T){const L=T/x,I=Math.exp(-L*L/2);g.push(I),T===0?M+=I:T<p&&(M+=2*I)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const y=this._sizeLods[s],R=3*y*(s>v-Qi?s-v+Qi:0),E=4*(this._cubeSize-y);Ar(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(f,Oo)}}function am(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=dc[o-i+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,x=3,p=2,g=1,M=new Float32Array(x*m*d),v=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,L=E>2?0:-1,I=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];M.set(I,x*m*E),v.set(u,p*m*E);const _=[E,E,E,E,E,E];y.set(_,g*m*E)}const R=new be;R.setAttribute("position",new Le(M,x)),R.setAttribute("uv",new Le(v,p)),R.setAttribute("faceIndex",new Le(y,g)),t.push(R),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gc(i,t,e){const n=new bn(i,t,e);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lm(i,t,e){const n=new Float32Array(_i),s=new C(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ga||l===xa,h=l===us||l===fs;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new qa(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new qa(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function um(i,t,e,n){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const x=d[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,m=f.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let v=0,y=M.length;v<y;v+=3){const R=M[v+0],E=M[v+1],T=M[v+2];u.push(R,E,E,T,T,R)}}else if(m!==void 0){const M=m.array;x=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const R=v+0,E=v+1,T=v+2;u.push(R,E,E,T,T,R)}}else return;const p=new(Xh(u)?jh:Kh)(u,1);p.version=x;const g=r.get(f);g&&t.remove(g),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function fm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,u*o,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function f(u,d,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)c(u[g]/o,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,x,0,m);let g=0;for(let M=0;M<m;M++)g+=d[M];for(let M=0;M<x.length;M++)e.update(g,n,x[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function dm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pm(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let _=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var d=_;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let R=a.attributes.position.count*y,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*E*4*f),L=new Yh(T,R,E,f);L.type=Tn,L.needsUpdate=!0;const I=y*4;for(let b=0;b<f;b++){const k=g[b],F=M[b],G=v[b],X=R*E*4*b;for(let B=0;B<k.count;B++){const J=B*I;m===!0&&(s.fromBufferAttribute(k,B),T[X+J+0]=s.x,T[X+J+1]=s.y,T[X+J+2]=s.z,T[X+J+3]=0),x===!0&&(s.fromBufferAttribute(F,B),T[X+J+4]=s.x,T[X+J+5]=s.y,T[X+J+6]=s.z,T[X+J+7]=0),p===!0&&(s.fromBufferAttribute(G,B),T[X+J+8]=s.x,T[X+J+9]=s.y,T[X+J+10]=s.z,T[X+J+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:L,size:new Y(R,E)},n.set(a,u),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function mm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class eu extends We{constructor(t,e,n,s,r,o,a,l,c,h=ss){if(h!==ss&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=bi),n===void 0&&h===ps&&(n=ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nu=new We,_c=new eu(1,1),iu=new Yh,su=new nd,ru=new Qh,yc=[],Mc=[],wc=new Float32Array(16),bc=new Float32Array(9),Sc=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),ze(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),ze(e,n)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),ze(e,n)}}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=Wh,r=_c):r=nu,e.setTexture2D(t||r,s)}function Im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ru,s)}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function Nm(i){switch(i){case 5126:return gm;case 35664:return xm;case 35665:return vm;case 35666:return _m;case 35674:return ym;case 35675:return Mm;case 35676:return wm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return Tm;case 35669:case 35673:return Em;case 5125:return Am;case 36294:return Cm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}function km(i,t){i.uniform1fv(this.addr,t)}function Fm(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function zm(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Om(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Bm(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hm(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gm(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vm(i,t){i.uniform1iv(this.addr,t)}function Wm(i,t){i.uniform2iv(this.addr,t)}function Xm(i,t){i.uniform3iv(this.addr,t)}function qm(i,t){i.uniform4iv(this.addr,t)}function Ym(i,t){i.uniform1uiv(this.addr,t)}function $m(i,t){i.uniform2uiv(this.addr,t)}function Km(i,t){i.uniform3uiv(this.addr,t)}function jm(i,t){i.uniform4uiv(this.addr,t)}function Zm(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nu,r[o])}function Jm(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||su,r[o])}function Qm(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ru,r[o])}function tg(i,t,e){const n=this.cache,s=t.length,r=ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||iu,r[o])}function eg(i){switch(i){case 5126:return km;case 35664:return Fm;case 35665:return zm;case 35666:return Om;case 35674:return Bm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return $m;case 36295:return Km;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return tg}}class ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nm(e.type)}}class ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eg(e.type)}}class sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function rg(i,t,e){const n=i.name,s=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),o=Wo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tc(e,c===void 0?new ng(a,i,t):new ig(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new sg(a),Tc(e,f)),e=f}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);rg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const og=37297;let ag=0;function lg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function cg(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===jr&&e===Kr?n="LinearDisplayP3ToLinearSRGB":t===Kr&&e===jr&&(n="LinearSRGBToLinearDisplayP3"),i){case oi:case so:return[n,"LinearTransferOETF"];case hn:case fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ac(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lg(i.getShaderSource(t),o)}else return s}function hg(i,t){const e=cg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ug(i,t){let e;switch(t){case Ch:e="Linear";break;case Rh:e="Reinhard";break;case Ph:e="Cineon";break;case sl:e="ACESFilmic";break;case Lh:e="AgX";break;case Ih:e="Neutral";break;case vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new C;function fg(){le.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function pg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function Cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(gg,vg)}const xg=new Map;function vg(i,t){let e=Kt[t];if(e===void 0){const n=xg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(_g,yg)}function yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Mg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case xf:t="ENVMAP_BLENDING_ADD";break}return t}function Tg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Eg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Mg(e),c=wg(e),h=bg(e),f=Sg(e),u=Tg(e),d=dg(e),m=pg(r),x=s.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`)):(p=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),g=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ii?ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,hg("linearToOutputTexel",e.outputColorSpace),fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Ya(o),o=Cc(o,e),o=Rc(o,e),a=Ya(a),a=Cc(a,e),a=Rc(a,e),o=Pc(o),a=Pc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+p+o,y=M+g+a,R=Ec(s,s.VERTEX_SHADER,v),E=Ec(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(b){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(E).trim();let X=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,E);else{const J=Ac(s,R,"vertex"),V=Ac(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+J+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||G==="")&&(B=!1);B&&(b.diagnostics={runnable:X,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:g}})}s.deleteShader(R),s.deleteShader(E),L=new qr(s,x),I=mg(s,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,og)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ag++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}let Ag=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rg(t),e.set(t,n)),n}}class Rg{constructor(t){this.id=Ag++,this.code=t,this.usedTimes=0}}function Pg(i,t,e,n,s,r,o){const a=new ml,l=new Cg,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,k,F,G){const X=F.fog,B=G.geometry,J=_.isMeshStandardMaterial?F.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),gt=V&&V.mapping===io?V.image.height:null,xt=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Jt=vt!==void 0?vt.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let $,ot,At,mt;if(xt){const Qe=Sn[xt];$=Qe.vertexShader,ot=Qe.fragmentShader}else $=_.vertexShader,ot=_.fragmentShader,l.update(_),At=l.getVertexShaderID(_),mt=l.getFragmentShaderID(_);const Bt=i.getRenderTarget(),Ot=G.isInstancedMesh===!0,Xt=G.isBatchedMesh===!0,te=!!_.map,tt=!!_.matcap,P=!!V,ut=!!_.aoMap,ht=!!_.lightMap,rt=!!_.bumpMap,ft=!!_.normalMap,kt=!!_.displacementMap,Mt=!!_.emissiveMap,A=!!_.metalnessMap,w=!!_.roughnessMap,z=_.anisotropy>0,K=_.clearcoat>0,et=_.dispersion>0,j=_.iridescence>0,It=_.sheen>0,dt=_.transmission>0,St=z&&!!_.anisotropyMap,se=K&&!!_.clearcoatMap,at=K&&!!_.clearcoatNormalMap,Tt=K&&!!_.clearcoatRoughnessMap,Vt=j&&!!_.iridescenceMap,Wt=j&&!!_.iridescenceThicknessMap,Ct=It&&!!_.sheenColorMap,re=It&&!!_.sheenRoughnessMap,Yt=!!_.specularMap,ye=!!_.specularColorMap,D=!!_.specularIntensityMap,wt=dt&&!!_.transmissionMap,W=dt&&!!_.thicknessMap,nt=!!_.gradientMap,_t=!!_.alphaMap,bt=_.alphaTest>0,oe=!!_.alphaHash,Ue=!!_.extensions;let Je=ii;_.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(Je=i.toneMapping);const ae={shaderID:xt,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:ot,defines:_.defines,customVertexShaderID:At,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Xt,batchingColor:Xt&&G._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&G.instanceColor!==null,instancingMorph:Ot&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:oi,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:tt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:gt,aoMap:ut,lightMap:ht,bumpMap:rt,normalMap:ft,displacementMap:d&&kt,emissiveMap:Mt,normalMapObjectSpace:ft&&_.normalMapType===wf,normalMapTangentSpace:ft&&_.normalMapType===Vh,metalnessMap:A,roughnessMap:w,anisotropy:z,anisotropyMap:St,clearcoat:K,clearcoatMap:se,clearcoatNormalMap:at,clearcoatRoughnessMap:Tt,dispersion:et,iridescence:j,iridescenceMap:Vt,iridescenceThicknessMap:Wt,sheen:It,sheenColorMap:Ct,sheenRoughnessMap:re,specularMap:Yt,specularColorMap:ye,specularIntensityMap:D,transmission:dt,transmissionMap:wt,thicknessMap:W,gradientMap:nt,opaque:_.transparent===!1&&_.blending===is&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:bt,alphaHash:oe,combine:_.combine,mapUv:te&&p(_.map.channel),aoMapUv:ut&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:rt&&p(_.bumpMap.channel),normalMapUv:ft&&p(_.normalMap.channel),displacementMapUv:kt&&p(_.displacementMap.channel),emissiveMapUv:Mt&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:w&&p(_.roughnessMap.channel),anisotropyMapUv:St&&p(_.anisotropyMap.channel),clearcoatMapUv:se&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:re&&p(_.sheenRoughnessMap.channel),specularMapUv:Yt&&p(_.specularMap.channel),specularColorMapUv:ye&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:wt&&p(_.transmissionMap.channel),thicknessMapUv:W&&p(_.thicknessMap.channel),alphaMapUv:_t&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||z),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(te||_t),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zt,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&_.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function M(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)b.push(k),b.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(b,_),y(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function v(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),_.push(a.mask)}function R(_){const b=x[_.type];let k;if(b){const F=Sn[b];k=Zs.clone(F.uniforms)}else k=_.uniforms;return k}function E(_,b){let k;for(let F=0,G=h.length;F<G;F++){const X=h[F];if(X.cacheKey===b){k=X,++k.usedTimes;break}}return k===void 0&&(k=new Eg(i,b,_,r),h.push(k)),k}function T(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function L(_){l.remove(_)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:I}}function Lg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ic(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,d,m,x,p){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:p},i[t]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=d,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=x,g.group=p),t++,g}function a(f,u,d,m,x,p){const g=o(f,u,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(f,u,d,m,x,p){const g=o(f,u,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(f,u){e.length>1&&e.sort(f||Ig),n.length>1&&n.sort(u||Ic),s.length>1&&s.sort(u||Ic)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Dg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dc,i.set(n,[o])):s>=r.length?(o=new Dc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new st};break;case"SpotLight":e={position:new C,direction:new C,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let kg=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){const t=new Ug,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new ee,o=new ee;function a(c){let h=0,f=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,M=0,v=0,y=0,R=0,E=0,T=0;c.sort(Fg);for(let I=0,_=c.length;I<_;I++){const b=c[I],k=b.color,F=b.intensity,G=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=k.r*F,f+=k.g*F,u+=k.b*F;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],F);T++}else if(b.isDirectionalLight){const B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,V=e.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=b.shadow.matrix,M++}n.directional[d]=B,d++}else if(b.isSpotLight){const B=t.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(k).multiplyScalar(F),B.distance=G,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[x]=B;const J=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,J.updateMatrices(b),b.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,b.castShadow){const V=e.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=X,y++}x++}else if(b.isRectAreaLight){const B=t.get(b);B.color.copy(k).multiplyScalar(F),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=B,p++}else if(b.isPointLight){const B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){const J=b.shadow,V=e.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=b.shadow.matrix,v++}n.point[m]=B,m++}else if(b.isHemisphereLight){const B=t.get(b);B.skyColor.copy(b.color).multiplyScalar(F),B.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[g]=B,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==M||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,L.directionalLength=d,L.pointLength=m,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=M,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=T,n.version=kg++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0;const p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const v=c[g];if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Uc(i){const t=new zg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Og(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Uc(i),t.set(s,[a])):r>=o.length?(a=new Uc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bg extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hg extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Wg(i,t,e){let n=new gl;const s=new Y,r=new Y,o=new ve,a=new Bg({depthPacking:Mf}),l=new Hg,c={},h=e.maxTextureSize,f={[Wn]:Be,[Be]:Wn,[Zt]:Zt},u=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:Gg,fragmentShader:Vg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let g=this.type;this.render=function(E,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const I=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=g!==zn&&this.type===zn,G=g===zn&&this.type!==zn;for(let X=0,B=E.length;X<B;X++){const J=E[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const gt=V.getFrameExtents();if(s.multiply(gt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,V.mapSize.y=r.y)),V.map===null||F===!0||G===!0){const vt=this.type!==zn?{minFilter:sn,magFilter:sn}:{};V.map!==null&&V.map.dispose(),V.map=new bn(s.x,s.y,vt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const xt=V.getViewportCount();for(let vt=0;vt<xt;vt++){const Jt=V.getViewport(vt);o.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),k.viewport(o),V.updateMatrices(J,vt),n=V.getFrustum(),y(T,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&M(V,L),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,_,b)};function M(E,T){const L=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,L,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,L,d,x,null)}function v(E,T,L,I){let _=null;const b=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)_=b;else if(_=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=_.uuid,F=T.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let X=G[F];X===void 0&&(X=_.clone(),G[F]=X,T.addEventListener("dispose",R)),_=X}if(_.visible=T.visible,_.wireframe=T.wireframe,I===zn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=i.properties.get(_);k.light=L}return _}function y(E,T,L,I,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const F=t.update(E),G=E.material;if(Array.isArray(G)){const X=F.groups;for(let B=0,J=X.length;B<J;B++){const V=X[B],gt=G[V.materialIndex];if(gt&&gt.visible){const xt=v(E,gt,I,_);E.onBeforeShadow(i,E,T,L,F,xt,V),i.renderBufferDirect(L,null,F,xt,E,V),E.onAfterShadow(i,E,T,L,F,xt,V)}}}else if(G.visible){const X=v(E,G,I,_);E.onBeforeShadow(i,E,T,L,F,X,null),i.renderBufferDirect(L,null,F,X,E,null),E.onAfterShadow(i,E,T,L,F,X,null)}}const k=E.children;for(let F=0,G=k.length;F<G;F++)y(k[F],T,L,I,_)}function R(E){E.target.removeEventListener("dispose",R);for(const L in c){const I=c[L],_=E.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}const Xg={[ca]:ha,[ua]:pa,[fa]:ma,[hs]:da,[ha]:ca,[pa]:ua,[ma]:fa,[da]:hs};function qg(i){function t(){let D=!1;const wt=new ve;let W=null;const nt=new ve(0,0,0,0);return{setMask:function(_t){W!==_t&&!D&&(i.colorMask(_t,_t,_t,_t),W=_t)},setLocked:function(_t){D=_t},setClear:function(_t,bt,oe,Ue,Je){Je===!0&&(_t*=Ue,bt*=Ue,oe*=Ue),wt.set(_t,bt,oe,Ue),nt.equals(wt)===!1&&(i.clearColor(_t,bt,oe,Ue),nt.copy(wt))},reset:function(){D=!1,W=null,nt.set(-1,0,0,0)}}}function e(){let D=!1,wt=!1,W=null,nt=null,_t=null;return{setReversed:function(bt){wt=bt},setTest:function(bt){bt?At(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(bt){W!==bt&&!D&&(i.depthMask(bt),W=bt)},setFunc:function(bt){if(wt&&(bt=Xg[bt]),nt!==bt){switch(bt){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=bt}},setLocked:function(bt){D=bt},setClear:function(bt){_t!==bt&&(i.clearDepth(bt),_t=bt)},reset:function(){D=!1,W=null,nt=null,_t=null}}}function n(){let D=!1,wt=null,W=null,nt=null,_t=null,bt=null,oe=null,Ue=null,Je=null;return{setTest:function(ae){D||(ae?At(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ae){wt!==ae&&!D&&(i.stencilMask(ae),wt=ae)},setFunc:function(ae,Qe,Pn){(W!==ae||nt!==Qe||_t!==Pn)&&(i.stencilFunc(ae,Qe,Pn),W=ae,nt=Qe,_t=Pn)},setOp:function(ae,Qe,Pn){(bt!==ae||oe!==Qe||Ue!==Pn)&&(i.stencilOp(ae,Qe,Pn),bt=ae,oe=Qe,Ue=Pn)},setLocked:function(ae){D=ae},setClear:function(ae){Je!==ae&&(i.clearStencil(ae),Je=ae)},reset:function(){D=!1,wt=null,W=null,nt=null,_t=null,bt=null,oe=null,Ue=null,Je=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,m=!1,x=null,p=null,g=null,M=null,v=null,y=null,R=null,E=new st(0,0,0),T=0,L=!1,I=null,_=null,b=null,k=null,F=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=B>=2);let V=null,gt={};const xt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Jt=new ve().fromArray(xt),ne=new ve().fromArray(vt);function $(D,wt,W,nt){const _t=new Uint8Array(4),bt=i.createTexture();i.bindTexture(D,bt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<W;oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(wt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return bt}const ot={};ot[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),At(i.DEPTH_TEST),r.setFunc(hs),ht(!1),rt(Wl),At(i.CULL_FACE),P(Gn);function At(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function mt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Bt(D,wt){return h[D]!==wt?(i.bindFramebuffer(D,wt),h[D]=wt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=wt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ot(D,wt){let W=u,nt=!1;if(D){W=f.get(wt),W===void 0&&(W=[],f.set(wt,W));const _t=D.textures;if(W.length!==_t.length||W[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,oe=_t.length;bt<oe;bt++)W[bt]=i.COLOR_ATTACHMENT0+bt;W.length=_t.length,nt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,nt=!0);nt&&i.drawBuffers(W)}function Xt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const te={[vi]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};te[tf]=i.MIN,te[ef]=i.MAX;const tt={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[ff]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,wt,W,nt,_t,bt,oe,Ue,Je,ae){if(D===Gn){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(At(i.BLEND),m=!0),D!==Zu){if(D!==x||ae!==L){if((p!==vi||v!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,v=vi),ae)switch(D){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,M=null,y=null,R=null,E.set(0,0,0),T=0,x=D,L=ae}return}_t=_t||wt,bt=bt||W,oe=oe||nt,(wt!==p||_t!==v)&&(i.blendEquationSeparate(te[wt],te[_t]),p=wt,v=_t),(W!==g||nt!==M||bt!==y||oe!==R)&&(i.blendFuncSeparate(tt[W],tt[nt],tt[bt],tt[oe]),g=W,M=nt,y=bt,R=oe),(Ue.equals(E)===!1||Je!==T)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Je),E.copy(Ue),T=Je),x=D,L=!1}function ut(D,wt){D.side===Zt?mt(i.CULL_FACE):At(i.CULL_FACE);let W=D.side===Be;wt&&(W=!W),ht(W),D.blending===is&&D.transparent===!1?P(Gn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const nt=D.stencilWrite;o.setTest(nt),nt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),kt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function rt(D){D!==Ku?(At(i.CULL_FACE),D!==_&&(D===Wl?i.cullFace(i.BACK):D===ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),_=D}function ft(D){D!==b&&(X&&i.lineWidth(D),b=D)}function kt(D,wt,W){D?(At(i.POLYGON_OFFSET_FILL),(k!==wt||F!==W)&&(i.polygonOffset(wt,W),k=wt,F=W)):mt(i.POLYGON_OFFSET_FILL)}function Mt(D){D?At(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+G-1),V!==D&&(i.activeTexture(D),V=D)}function w(D,wt,W){W===void 0&&(V===null?W=i.TEXTURE0+G-1:W=V);let nt=gt[W];nt===void 0&&(nt={type:void 0,texture:void 0},gt[W]=nt),(nt.type!==D||nt.texture!==wt)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(D,wt||ot[D]),nt.type=D,nt.texture=wt)}function z(){const D=gt[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(D){Jt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Jt.copy(D))}function Ct(D){ne.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function re(D,wt){let W=l.get(wt);W===void 0&&(W=new WeakMap,l.set(wt,W));let nt=W.get(D);nt===void 0&&(nt=i.getUniformBlockIndex(wt,D.name),W.set(D,nt))}function Yt(D,wt){const nt=l.get(wt).get(D);a.get(wt)!==nt&&(i.uniformBlockBinding(wt,nt,D.__bindingPointIndex),a.set(wt,nt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,gt={},h={},f=new WeakMap,u=[],d=null,m=!1,x=null,p=null,g=null,M=null,v=null,y=null,R=null,E=new st(0,0,0),T=0,L=!1,I=null,_=null,b=null,k=null,F=null,Jt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:At,disable:mt,bindFramebuffer:Bt,drawBuffers:Ot,useProgram:Xt,setBlending:P,setMaterial:ut,setFlipSided:ht,setCullFace:rt,setLineWidth:ft,setPolygonOffset:kt,setScissorTest:Mt,activeTexture:A,bindTexture:w,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:Tt,texImage3D:Vt,updateUBOMapping:re,uniformBlockBinding:Yt,texStorage2D:se,texStorage3D:at,texSubImage2D:j,texSubImage3D:It,compressedTexSubImage2D:dt,compressedTexSubImage3D:St,scissor:Wt,viewport:Ct,reset:ye}}function Nc(i,t,e,n){const s=Yg(n);switch(e){case Fh:return i*t;case Oh:return i*t;case Bh:return i*t*2;case ll:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case Hh:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case zh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case Br:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case wa:return Math.max(i,16)*Math.max(t,8)/4;case _a:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wr:case Ba:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gh:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(i){switch(i){case Xn:case Uh:return{byteLength:1,components:1};case js:case Nh:case Vn:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case bi:case rl:case Tn:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $g(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return d?new OffscreenCanvas(A,w):Jr("canvas")}function x(A,w,z){let K=1;const et=Mt(A);if((et.width>z||et.height>z)&&(K=z/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*et.width),It=Math.floor(K*et.height);f===void 0&&(f=m(j,It));const dt=w?m(j,It):f;return dt.width=j,dt.height=It,dt.getContext("2d").drawImage(A,0,0,j,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+It+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==sn&&A.minFilter!==yn}function g(A){i.generateMipmap(A)}function M(A,w,z,K,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=w;if(w===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),w===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),w===i.RGBA){const It=et?$r:le.getTransfer(K);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=It===Me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(A,w){let z;return A?w===null||w===bi||w===ds?z=i.DEPTH24_STENCIL8:w===Tn?z=i.DEPTH32F_STENCIL8:w===js&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===bi||w===ds?z=i.DEPTH_COMPONENT24:w===Tn?z=i.DEPTH_COMPONENT32F:w===js&&(z=i.DEPTH_COMPONENT16),z}function y(A,w){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function R(A){const w=A.target;w.removeEventListener("dispose",R),T(w),w.isVideoTexture&&h.delete(w)}function E(A){const w=A.target;w.removeEventListener("dispose",E),I(w)}function T(A){const w=n.get(A);if(w.__webglInit===void 0)return;const z=A.source,K=u.get(z);if(K){const et=K[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&L(A),Object.keys(K).length===0&&u.delete(z)}n.remove(A)}function L(A){const w=n.get(A);i.deleteTexture(w.__webglTexture);const z=A.source,K=u.get(z);delete K[w.__cacheKey],o.memory.textures--}function I(A){const w=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let et=0;et<w.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(w.__webglFramebuffer[K][et]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=A.textures;for(let K=0,et=z.length;K<et;K++){const j=n.get(z[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(A)}let _=0;function b(){_=0}function k(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function F(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function G(A,w){const z=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(z,A,w);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function X(A,w){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ne(z,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function B(A,w){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ne(z,A,w);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function J(A,w){const z=n.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const V={[wi]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},gt={[sn]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},xt={[bf]:i.NEVER,[Rf]:i.ALWAYS,[Sf]:i.LESS,[Wh]:i.LEQUAL,[Tf]:i.EQUAL,[Cf]:i.GEQUAL,[Ef]:i.GREATER,[Af]:i.NOTEQUAL};function vt(A,w){if(w.type===Tn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===xo||w.magFilter===lr||w.magFilter===Mi||w.minFilter===yn||w.minFilter===xo||w.minFilter===lr||w.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,V[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,V[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,V[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,gt[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,gt[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sn||w.minFilter!==lr&&w.minFilter!==Mi||w.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Jt(A,w){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",R));const K=w.source;let et=u.get(K);et===void 0&&(et={},u.set(K,et));const j=F(w);if(j!==A.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[j].usedTimes++;const It=et[A.__cacheKey];It!==void 0&&(et[A.__cacheKey].usedTimes--,It.usedTimes===0&&L(w)),A.__cacheKey=j,A.__webglTexture=et[j].texture}return z}function ne(A,w,z){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);const et=Jt(A,w),j=w.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+z);const It=n.get(j);if(j.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const dt=le.getPrimaries(le.workingColorSpace),St=w.colorSpace===ei?null:le.getPrimaries(w.colorSpace),se=w.colorSpace===ei||dt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let at=x(w.image,!1,s.maxTextureSize);at=kt(w,at);const Tt=r.convert(w.format,w.colorSpace),Vt=r.convert(w.type);let Wt=M(w.internalFormat,Tt,Vt,w.colorSpace,w.isVideoTexture);vt(K,w);let Ct;const re=w.mipmaps,Yt=w.isVideoTexture!==!0,ye=It.__version===void 0||et===!0,D=j.dataReady,wt=y(w,at);if(w.isDepthTexture)Wt=v(w.format===ps,w.type),ye&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Wt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Wt,at.width,at.height,0,Tt,Vt,null));else if(w.isDataTexture)if(re.length>0){Yt&&ye&&e.texStorage2D(i.TEXTURE_2D,wt,Wt,re[0].width,re[0].height);for(let W=0,nt=re.length;W<nt;W++)Ct=re[W],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ct.width,Ct.height,Tt,Vt,Ct.data):e.texImage2D(i.TEXTURE_2D,W,Wt,Ct.width,Ct.height,0,Tt,Vt,Ct.data);w.generateMipmaps=!1}else Yt?(ye&&e.texStorage2D(i.TEXTURE_2D,wt,Wt,at.width,at.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Tt,Vt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,at.width,at.height,0,Tt,Vt,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Yt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Wt,re[0].width,re[0].height,at.depth);for(let W=0,nt=re.length;W<nt;W++)if(Ct=re[W],w.format!==wn)if(Tt!==null)if(Yt){if(D)if(w.layerUpdates.size>0){const _t=Nc(Ct.width,Ct.height,w.format,w.type);for(const bt of w.layerUpdates){const oe=Ct.data.subarray(bt*_t/Ct.data.BYTES_PER_ELEMENT,(bt+1)*_t/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,bt,Ct.width,Ct.height,1,Tt,oe,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ct.width,Ct.height,at.depth,Tt,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Wt,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ct.width,Ct.height,at.depth,Tt,Vt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Wt,Ct.width,Ct.height,at.depth,0,Tt,Vt,Ct.data)}else{Yt&&ye&&e.texStorage2D(i.TEXTURE_2D,wt,Wt,re[0].width,re[0].height);for(let W=0,nt=re.length;W<nt;W++)Ct=re[W],w.format!==wn?Tt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Ct.width,Ct.height,Tt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Ct.width,Ct.height,Tt,Vt,Ct.data):e.texImage2D(i.TEXTURE_2D,W,Wt,Ct.width,Ct.height,0,Tt,Vt,Ct.data)}else if(w.isDataArrayTexture)if(Yt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Wt,at.width,at.height,at.depth),D)if(w.layerUpdates.size>0){const W=Nc(at.width,at.height,w.format,w.type);for(const nt of w.layerUpdates){const _t=at.data.subarray(nt*W/at.data.BYTES_PER_ELEMENT,(nt+1)*W/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,Tt,Vt,_t)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Tt,Vt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,at.width,at.height,at.depth,0,Tt,Vt,at.data);else if(w.isData3DTexture)Yt?(ye&&e.texStorage3D(i.TEXTURE_3D,wt,Wt,at.width,at.height,at.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Tt,Vt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,at.width,at.height,at.depth,0,Tt,Vt,at.data);else if(w.isFramebufferTexture){if(ye)if(Yt)e.texStorage2D(i.TEXTURE_2D,wt,Wt,at.width,at.height);else{let W=at.width,nt=at.height;for(let _t=0;_t<wt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Wt,W,nt,0,Tt,Vt,null),W>>=1,nt>>=1}}else if(re.length>0){if(Yt&&ye){const W=Mt(re[0]);e.texStorage2D(i.TEXTURE_2D,wt,Wt,W.width,W.height)}for(let W=0,nt=re.length;W<nt;W++)Ct=re[W],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Tt,Vt,Ct):e.texImage2D(i.TEXTURE_2D,W,Wt,Tt,Vt,Ct);w.generateMipmaps=!1}else if(Yt){if(ye){const W=Mt(at);e.texStorage2D(i.TEXTURE_2D,wt,Wt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Vt,at)}else e.texImage2D(i.TEXTURE_2D,0,Wt,Tt,Vt,at);p(w)&&g(K),It.__version=j.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function $(A,w,z){if(w.image.length!==6)return;const K=Jt(A,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const j=n.get(et);if(et.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const It=le.getPrimaries(le.workingColorSpace),dt=w.colorSpace===ei?null:le.getPrimaries(w.colorSpace),St=w.colorSpace===ei||It===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const se=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let nt=0;nt<6;nt++)!se&&!at?Tt[nt]=x(w.image[nt],!0,s.maxCubemapSize):Tt[nt]=at?w.image[nt].image:w.image[nt],Tt[nt]=kt(w,Tt[nt]);const Vt=Tt[0],Wt=r.convert(w.format,w.colorSpace),Ct=r.convert(w.type),re=M(w.internalFormat,Wt,Ct,w.colorSpace),Yt=w.isVideoTexture!==!0,ye=j.__version===void 0||K===!0,D=et.dataReady;let wt=y(w,Vt);vt(i.TEXTURE_CUBE_MAP,w);let W;if(se){Yt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,re,Vt.width,Vt.height);for(let nt=0;nt<6;nt++){W=Tt[nt].mipmaps;for(let _t=0;_t<W.length;_t++){const bt=W[_t];w.format!==wn?Wt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,bt.width,bt.height,Wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,re,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,bt.width,bt.height,Wt,Ct,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,re,bt.width,bt.height,0,Wt,Ct,bt.data)}}}else{if(W=w.mipmaps,Yt&&ye){W.length>0&&wt++;const nt=Mt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,re,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt[nt].width,Tt[nt].height,Wt,Ct,Tt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,re,Tt[nt].width,Tt[nt].height,0,Wt,Ct,Tt[nt].data);for(let _t=0;_t<W.length;_t++){const oe=W[_t].image[nt].image;Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,oe.width,oe.height,Wt,Ct,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,re,oe.width,oe.height,0,Wt,Ct,oe.data)}}else{Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Wt,Ct,Tt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,re,Wt,Ct,Tt[nt]);for(let _t=0;_t<W.length;_t++){const bt=W[_t];Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,Wt,Ct,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,re,Wt,Ct,bt.image[nt])}}}p(w)&&g(i.TEXTURE_CUBE_MAP),j.__version=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ot(A,w,z,K,et,j){const It=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),St=M(z.internalFormat,It,dt,z.colorSpace);if(!n.get(w).__hasExternalTextures){const at=Math.max(1,w.width>>j),Tt=Math.max(1,w.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,St,at,Tt,w.depth,0,It,dt,null):e.texImage2D(et,j,St,at,Tt,0,It,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),rt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,n.get(z).__webglTexture,0,ht(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,n.get(z).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){const K=w.depthTexture,et=K&&K.isDepthTexture?K.type:null,j=v(w.stencilBuffer,et),It=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=ht(w);rt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,j,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{const K=w.textures;for(let et=0;et<K.length;et++){const j=K[et],It=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),St=M(j.internalFormat,It,dt,j.colorSpace),se=ht(w);z&&rt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,St,w.width,w.height):rt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,St,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,St,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const K=n.get(w.depthTexture).__webglTexture,et=ht(w);if(w.depthTexture.format===ss)rt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(w.depthTexture.format===ps)rt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const w=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=K}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,A)}else if(z){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),At(w.__webglDepthbuffer[K],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),At(w.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,w,z){const K=n.get(A);w!==void 0&&ot(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Bt(A)}function Xt(A){const w=A.texture,z=n.get(A),K=n.get(w);A.addEventListener("dispose",E);const et=A.textures,j=A.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let St=0;St<w.mipmaps.length;St++)z.__webglFramebuffer[dt][St]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(It)for(let dt=0,St=et.length;dt<St;dt++){const se=n.get(et[dt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&rt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const St=et[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const se=r.convert(St.format,St.colorSpace),at=r.convert(St.type),Tt=M(St.internalFormat,se,at,St.colorSpace,A.isXRRenderTarget===!0),Vt=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),At(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),vt(i.TEXTURE_CUBE_MAP,w);for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)ot(z.__webglFramebuffer[dt][St],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,St);else ot(z.__webglFramebuffer[dt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(w)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let dt=0,St=et.length;dt<St;dt++){const se=et[dt],at=n.get(se);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),vt(i.TEXTURE_2D,se),ot(z.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p(se)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),vt(dt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)ot(z.__webglFramebuffer[St],A,w,i.COLOR_ATTACHMENT0,dt,St);else ot(z.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,dt,0);p(w)&&g(dt),e.unbindTexture()}A.depthBuffer&&Bt(A)}function te(A){const w=A.textures;for(let z=0,K=w.length;z<K;z++){const et=w[z];if(p(et)){const j=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(et).__webglTexture;e.bindTexture(j,It),g(j),e.unbindTexture()}}}const tt=[],P=[];function ut(A){if(A.samples>0){if(rt(A)===!1){const w=A.textures,z=A.width,K=A.height;let et=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),dt=w.length>1;if(dt)for(let St=0;St<w.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let St=0;St<w.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[St]);const se=n.get(w[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,et,i.NEAREST),l===!0&&(tt.length=0,P.length=0,tt.push(i.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tt.push(j),P.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let St=0;St<w.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,It.__webglColorRenderbuffer[St]);const se=n.get(w[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function rt(A){const w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(A){const w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function kt(A,w){const z=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==oi&&z!==ei&&(le.getTransfer(z)===Me?(K!==wn||et!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=Ot,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=rt}function Kg(i,t){function e(n,s=ei){let r;const o=le.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===zh)return i.RGB;if(n===wn)return i.RGBA;if(n===Oh)return i.LUMINANCE;if(n===Bh)return i.LUMINANCE_ALPHA;if(n===ss)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===Br||n===Hr||n===Gr||n===Vr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===ya||n===Ma||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Sa||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Sa)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na||n===ka||n===Fa||n===za||n===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===Ba||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gh||n===Ga||n===Va||n===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class jg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zg={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ex extends _s{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const x=new tx,p=e.getContextAttributes();let g=null,M=null;const v=[],y=[],R=new Y;let E=null;const T=new nn;T.layers.enable(1),T.viewport=new ve;const L=new nn;L.layers.enable(2),L.viewport=new ve;const I=[T,L],_=new jg;_.layers.enable(1),_.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=v[$];return ot===void 0&&(ot=new Xo,v[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=v[$];return ot===void 0&&(ot=new Xo,v[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=v[$];return ot===void 0&&(ot=new Xo,v[$]=ot),ot.getHandSpace()};function F($){const ot=y.indexOf($.inputSource);if(ot===-1)return;const At=v[ot];At!==void 0&&(At.update($.inputSource,$.frame,c||o),At.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let $=0;$<v.length;$++){const ot=y[$];ot!==null&&(y[$]=null,v[$].disconnect(ot))}b=null,k=null,x.reset(),t.setRenderTarget(g),d=null,u=null,f=null,s=null,M=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new bn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,At=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?ps:ss,At=p.stencil?ds:bi);const Bt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new bn(u.textureWidth,u.textureHeight,{format:wn,type:Xn,depthTexture:new eu(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X($){for(let ot=0;ot<$.removed.length;ot++){const At=$.removed[ot],mt=y.indexOf(At);mt>=0&&(y[mt]=null,v[mt].disconnect(At))}for(let ot=0;ot<$.added.length;ot++){const At=$.added[ot];let mt=y.indexOf(At);if(mt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=y.length){y.push(At),mt=Ot;break}else if(y[Ot]===null){y[Ot]=At,mt=Ot;break}if(mt===-1)break}const Bt=v[mt];Bt&&Bt.connect(At)}}const B=new C,J=new C;function V($,ot,At){B.setFromMatrixPosition(ot.matrixWorld),J.setFromMatrixPosition(At.matrixWorld);const mt=B.distanceTo(J),Bt=ot.projectionMatrix.elements,Ot=At.projectionMatrix.elements,Xt=Bt[14]/(Bt[10]-1),te=Bt[14]/(Bt[10]+1),tt=(Bt[9]+1)/Bt[5],P=(Bt[9]-1)/Bt[5],ut=(Bt[8]-1)/Bt[0],ht=(Ot[8]+1)/Ot[0],rt=Xt*ut,ft=Xt*ht,kt=mt/(-ut+ht),Mt=kt*-ut;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Mt),$.translateZ(kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Bt[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const A=Xt+kt,w=te+kt,z=rt-Mt,K=ft+(mt-Mt),et=tt*te/w*A,j=P*te/w*A;$.projectionMatrix.makePerspective(z,K,et,j,A,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function gt($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ot=$.near,At=$.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(At=x.depthFar)),_.near=L.near=T.near=ot,_.far=L.far=T.far=At,(b!==_.near||k!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,k=_.far);const mt=$.parent,Bt=_.cameras;gt(_,mt);for(let Ot=0;Ot<Bt.length;Ot++)gt(Bt[Ot],mt);Bt.length===2?V(_,T,L):_.projectionMatrix.copy(T.projectionMatrix),xt($,_,mt)};function xt($,ot,At){At===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ms*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let vt=null;function Jt($,ot){if(h=ot.getViewerPose(c||o),m=ot,h!==null){const At=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;At.length!==_.cameras.length&&(_.cameras.length=0,mt=!0);for(let Ot=0;Ot<At.length;Ot++){const Xt=At[Ot];let te=null;if(d!==null)te=d.getViewport(Xt);else{const P=f.getViewSubImage(u,Xt);te=P.viewport,Ot===0&&(t.setRenderTargetTextures(M,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let tt=I[Ot];tt===void 0&&(tt=new nn,tt.layers.enable(Ot),tt.viewport=new ve,I[Ot]=tt),tt.matrix.fromArray(Xt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Xt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(_.matrix.copy(tt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),mt===!0&&_.cameras.push(tt)}const Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Ot=f.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let At=0;At<v.length;At++){const mt=y[At],Bt=v[At];mt!==null&&Bt!==void 0&&Bt.update(mt,ot,c||o)}vt&&vt($,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),m=null}const ne=new tu;ne.setAnimationLoop(Jt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const pi=new Xe,nx=new ee;function ix(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Zh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Be&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Be&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),v=M.envMap,y=M.envMapRotation;v&&(p.envMap.value=v,pi.copy(y),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),p.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(pi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Be&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(M,R);const E=t.render.frame;r[M.id]!==E&&(u(M),r[M.id]=E)}function h(M){const v=f();M.__bindingPointIndex=v;const y=i.createBuffer(),R=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,_=L.length;I<_;I++){const b=L[I];if(d(b,E,I,R)===!0){const k=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let G=0;for(let X=0;X<F.length;X++){const B=F[X],J=x(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+G,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,R){const E=M.value,T=v+"_"+y;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const L=R[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return R[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(M){const v=M.uniforms;let y=0;const R=16;for(let T=0,L=v.length;T<L;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,b=I.length;_<b;_++){const k=I[_],F=Array.isArray(k.value)?k.value:[k.value];for(let G=0,X=F.length;G<X;G++){const B=F[G],J=x(B),V=y%R,gt=V%J.boundary,xt=V+gt;y+=gt,xt!==0&&R-xt<J.storage&&(y+=R-xt),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=J.storage}}}const E=y%R;return E>0&&(y+=R-E),M.__size=y,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class rx{constructor(t={}){const{canvas:e=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const d=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let y=!1,R=0,E=0,T=null,L=-1,I=null;const _=new ve,b=new ve;let k=null;const F=new st(0);let G=0,X=e.width,B=e.height,J=1,V=null,gt=null;const xt=new ve(0,0,X,B),vt=new ve(0,0,X,B);let Jt=!1;const ne=new gl;let $=!1,ot=!1;const At=new ee,mt=new ee,Bt=new C,Ot=new ve,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function tt(){return T===null?J:1}let P=n;function ut(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){const U="webgl2";if(P=ut(U,S),P===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ht,rt,ft,kt,Mt,A,w,z,K,et,j,It,dt,St,se,at,Tt,Vt,Wt,Ct,re,Yt,ye,D;function wt(){ht=new hm(P),ht.init(),Yt=new Kg(P,ht),rt=new sm(P,ht,t,Yt),ft=new qg(P),rt.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),kt=new dm(P),Mt=new Lg,A=new $g(P,ht,ft,Mt,rt,Yt,kt),w=new om(v),z=new cm(v),K=new yd(P),ye=new nm(P,K),et=new um(P,K,kt,ye),j=new mm(P,et,K,kt),Wt=new pm(P,rt,A),at=new rm(Mt),It=new Pg(v,w,z,ht,rt,ye,at),dt=new ix(v,Mt),St=new Dg,se=new Og(ht),Vt=new em(v,w,z,ft,j,u,l),Tt=new Wg(v,j,rt),D=new sx(P,kt,rt,ft),Ct=new im(P,ht,kt),re=new fm(P,ht,kt),kt.programs=It.programs,v.capabilities=rt,v.extensions=ht,v.properties=Mt,v.renderLists=St,v.shadowMap=Tt,v.state=ft,v.info=kt}wt();const W=new ex(v,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(X,B,!1))},this.getSize=function(S){return S.set(X,B)},this.setSize=function(S,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,B=U,e.width=Math.floor(S*J),e.height=Math.floor(U*J),O===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(X*J,B*J).floor()},this.setDrawingBufferSize=function(S,U,O){X=S,B=U,J=O,e.width=Math.floor(S*O),e.height=Math.floor(U*O),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,U,O,H){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,U,O,H),ft.viewport(_.copy(xt).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(vt)},this.setScissor=function(S,U,O,H){S.isVector4?vt.set(S.x,S.y,S.z,S.w):vt.set(S,U,O,H),ft.scissor(b.copy(vt).multiplyScalar(J).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){ft.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(S=!0,U=!0,O=!0){let H=0;if(S){let N=!1;if(T!==null){const ct=T.texture.format;N=ct===ul||ct===hl||ct===cl}if(N){const ct=T.texture.type,yt=ct===Xn||ct===bi||ct===js||ct===ds||ct===ol||ct===al,Pt=Vt.getClearColor(),Dt=Vt.getClearAlpha(),Ht=Pt.r,Gt=Pt.g,Nt=Pt.b;yt?(d[0]=Ht,d[1]=Gt,d[2]=Nt,d[3]=Dt,P.clearBufferuiv(P.COLOR,0,d)):(m[0]=Ht,m[1]=Gt,m[2]=Nt,m[3]=Dt,P.clearBufferiv(P.COLOR,0,m))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),St.dispose(),se.dispose(),Mt.dispose(),w.dispose(),z.dispose(),j.dispose(),ye.dispose(),D.dispose(),It.dispose(),W.dispose(),W.removeEventListener("sessionstart",kl),W.removeEventListener("sessionend",Fl),li.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=kt.autoReset,U=Tt.enabled,O=Tt.autoUpdate,H=Tt.needsUpdate,N=Tt.type;wt(),kt.autoReset=S,Tt.enabled=U,Tt.autoUpdate=O,Tt.needsUpdate=H,Tt.type=N}function bt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const U=S.target;U.removeEventListener("dispose",oe),Ue(U)}function Ue(S){Je(S),Mt.remove(S)}function Je(S){const U=Mt.get(S).programs;U!==void 0&&(U.forEach(function(O){It.releaseProgram(O)}),S.isShaderMaterial&&It.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,O,H,N,ct){U===null&&(U=Xt);const yt=N.isMesh&&N.matrixWorld.determinant()<0,Pt=Xu(S,U,O,H,N);ft.setMaterial(H,yt);let Dt=O.index,Ht=1;if(H.wireframe===!0){if(Dt=et.getWireframeAttribute(O),Dt===void 0)return;Ht=2}const Gt=O.drawRange,Nt=O.attributes.position;let me=Gt.start*Ht,Se=(Gt.start+Gt.count)*Ht;ct!==null&&(me=Math.max(me,ct.start*Ht),Se=Math.min(Se,(ct.start+ct.count)*Ht)),Dt!==null?(me=Math.max(me,0),Se=Math.min(Se,Dt.count)):Nt!=null&&(me=Math.max(me,0),Se=Math.min(Se,Nt.count));const Ae=Se-me;if(Ae<0||Ae===1/0)return;ye.setup(N,H,Pt,O,Dt);let rn,he=Ct;if(Dt!==null&&(rn=K.get(Dt),he=re,he.setIndex(rn)),N.isMesh)H.wireframe===!0?(ft.setLineWidth(H.wireframeLinewidth*tt()),he.setMode(P.LINES)):he.setMode(P.TRIANGLES);else if(N.isLine){let Ft=H.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*tt()),N.isLineSegments?he.setMode(P.LINES):N.isLineLoop?he.setMode(P.LINE_LOOP):he.setMode(P.LINE_STRIP)}else N.isPoints?he.setMode(P.POINTS):N.isSprite&&he.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)he.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))he.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ft=N._multiDrawStarts,He=N._multiDrawCounts,ue=N._multiDrawCount,gn=Dt?K.get(Dt).bytesPerElement:1,Ii=Mt.get(H).currentProgram.getUniforms();for(let on=0;on<ue;on++)Ii.setValue(P,"_gl_DrawID",on),he.render(Ft[on]/gn,He[on])}else if(N.isInstancedMesh)he.renderInstances(me,Ae,N.count);else if(O.isInstancedBufferGeometry){const Ft=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,He=Math.min(O.instanceCount,Ft);he.renderInstances(me,Ae,He)}else he.render(me,Ae)};function ae(S,U,O){S.transparent===!0&&S.side===Zt&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,ar(S,U,O),S.side=Wn,S.needsUpdate=!0,ar(S,U,O),S.side=Zt):ar(S,U,O)}this.compile=function(S,U,O=null){O===null&&(O=S),p=se.get(O),p.init(U),M.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==O&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){const Pt=ct[yt];ae(Pt,O,N),H.add(Pt)}else ae(ct,O,N),H.add(ct)}),M.pop(),p=null,H},this.compileAsync=function(S,U,O=null){const H=this.compile(S,U,O);return new Promise(N=>{function ct(){if(H.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&H.delete(yt)}),H.size===0){N(S);return}setTimeout(ct,10)}ht.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Qe=null;function Pn(S){Qe&&Qe(S)}function kl(){li.stop()}function Fl(){li.start()}const li=new tu;li.setAnimationLoop(Pn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(S){Qe=S,W.setAnimationLoop(S),S===null?li.stop():li.start()},W.addEventListener("sessionstart",kl),W.addEventListener("sessionend",Fl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,T),p=se.get(S,M.length),p.init(U),M.push(p),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(mt),ot=this.localClippingEnabled,$=at.init(this.clippingPlanes,ot),x=St.get(S,g.length),x.init(),g.push(x),W.enabled===!0&&W.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&fo(ct,U,-1/0,v.sortObjects)}fo(S,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(V,gt),te=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,te&&Vt.addToRenderList(x,S),this.info.render.frame++,$===!0&&at.beginShadows();const O=p.state.shadowsArray;Tt.render(O,S,U),$===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,N=x.transmissive;if(p.setupLights(),U.isArrayCamera){const ct=U.cameras;if(N.length>0)for(let yt=0,Pt=ct.length;yt<Pt;yt++){const Dt=ct[yt];Ol(H,N,S,Dt)}te&&Vt.render(S);for(let yt=0,Pt=ct.length;yt<Pt;yt++){const Dt=ct[yt];zl(x,S,Dt,Dt.viewport)}}else N.length>0&&Ol(H,N,S,U),te&&Vt.render(S),zl(x,S,U);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,U),ye.resetDefaultState(),L=-1,I=null,M.pop(),M.length>0?(p=M[M.length-1],$===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function fo(S,U,O,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ne.intersectsSprite(S)){H&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);const yt=j.update(S),Pt=S.material;Pt.visible&&x.push(S,yt,Pt,O,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ne.intersectsObject(S))){const yt=j.update(S),Pt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ot.copy(yt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(Pt)){const Dt=yt.groups;for(let Ht=0,Gt=Dt.length;Ht<Gt;Ht++){const Nt=Dt[Ht],me=Pt[Nt.materialIndex];me&&me.visible&&x.push(S,yt,me,O,Ot.z,Nt)}}else Pt.visible&&x.push(S,yt,Pt,O,Ot.z,null)}}const ct=S.children;for(let yt=0,Pt=ct.length;yt<Pt;yt++)fo(ct[yt],U,O,H)}function zl(S,U,O,H){const N=S.opaque,ct=S.transmissive,yt=S.transparent;p.setupLightsView(O),$===!0&&at.setGlobalState(v.clippingPlanes,O),H&&ft.viewport(_.copy(H)),N.length>0&&or(N,U,O),ct.length>0&&or(ct,U,O),yt.length>0&&or(yt,U,O),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Ol(S,U,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Vn:Xn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ct=p.state.transmissionRenderTarget[H.id],yt=H.viewport||_;ct.setSize(yt.z,yt.w);const Pt=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),te&&Vt.render(O);const Dt=v.toneMapping;v.toneMapping=ii;const Ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),$===!0&&at.setGlobalState(v.clippingPlanes,H),or(S,O,H),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Nt=0,me=U.length;Nt<me;Nt++){const Se=U[Nt],Ae=Se.object,rn=Se.geometry,he=Se.material,Ft=Se.group;if(he.side===Zt&&Ae.layers.test(H.layers)){const He=he.side;he.side=Be,he.needsUpdate=!0,Bl(Ae,O,H,rn,he,Ft),he.side=He,he.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct))}v.setRenderTarget(Pt),v.setClearColor(F,G),Ht!==void 0&&(H.viewport=Ht),v.toneMapping=Dt}function or(S,U,O){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=S.length;N<ct;N++){const yt=S[N],Pt=yt.object,Dt=yt.geometry,Ht=H===null?yt.material:H,Gt=yt.group;Pt.layers.test(O.layers)&&Bl(Pt,U,O,Dt,Ht,Gt)}}function Bl(S,U,O,H,N,ct){S.onBeforeRender(v,U,O,H,N,ct),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,O,H,S,ct),N.transparent===!0&&N.side===Zt&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,v.renderBufferDirect(O,U,H,N,S,ct),N.side=Wn,N.needsUpdate=!0,v.renderBufferDirect(O,U,H,N,S,ct),N.side=Zt):v.renderBufferDirect(O,U,H,N,S,ct),S.onAfterRender(v,U,O,H,N,ct)}function ar(S,U,O){U.isScene!==!0&&(U=Xt);const H=Mt.get(S),N=p.state.lights,ct=p.state.shadowsArray,yt=N.state.version,Pt=It.getParameters(S,N.state,ct,U,O),Dt=It.getProgramCacheKey(Pt);let Ht=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?z:w).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",oe),Ht=new Map,H.programs=Ht);let Gt=Ht.get(Dt);if(Gt!==void 0){if(H.currentProgram===Gt&&H.lightsStateVersion===yt)return Gl(S,Pt),Gt}else Pt.uniforms=It.getUniforms(S),S.onBeforeCompile(Pt,v),Gt=It.acquireProgram(Pt,Dt),Ht.set(Dt,Gt),H.uniforms=Pt.uniforms;const Nt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=at.uniform),Gl(S,Pt),H.needsLights=Yu(S),H.lightsStateVersion=yt,H.needsLights&&(Nt.ambientLightColor.value=N.state.ambient,Nt.lightProbe.value=N.state.probe,Nt.directionalLights.value=N.state.directional,Nt.directionalLightShadows.value=N.state.directionalShadow,Nt.spotLights.value=N.state.spot,Nt.spotLightShadows.value=N.state.spotShadow,Nt.rectAreaLights.value=N.state.rectArea,Nt.ltc_1.value=N.state.rectAreaLTC1,Nt.ltc_2.value=N.state.rectAreaLTC2,Nt.pointLights.value=N.state.point,Nt.pointLightShadows.value=N.state.pointShadow,Nt.hemisphereLights.value=N.state.hemi,Nt.directionalShadowMap.value=N.state.directionalShadowMap,Nt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Nt.spotShadowMap.value=N.state.spotShadowMap,Nt.spotLightMatrix.value=N.state.spotLightMatrix,Nt.spotLightMap.value=N.state.spotLightMap,Nt.pointShadowMap.value=N.state.pointShadowMap,Nt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Gt,H.uniformsList=null,Gt}function Hl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=qr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Gl(S,U){const O=Mt.get(S);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Xu(S,U,O,H,N){U.isScene!==!0&&(U=Xt),A.resetTextureUnits();const ct=U.fog,yt=H.isMeshStandardMaterial?U.environment:null,Pt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:oi,Dt=(H.isMeshStandardMaterial?z:w).get(H.envMap||yt),Ht=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Gt=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!O.morphAttributes.position,me=!!O.morphAttributes.normal,Se=!!O.morphAttributes.color;let Ae=ii;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const rn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=rn!==void 0?rn.length:0,Ft=Mt.get(H),He=p.state.lights;if($===!0&&(ot===!0||S!==I)){const fn=S===I&&H.id===L;at.setState(H,S,fn)}let ue=!1;H.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==He.state.version||Ft.outputColorSpace!==Pt||N.isBatchedMesh&&Ft.batching===!1||!N.isBatchedMesh&&Ft.batching===!0||N.isBatchedMesh&&Ft.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ft.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ft.instancing===!1||!N.isInstancedMesh&&Ft.instancing===!0||N.isSkinnedMesh&&Ft.skinning===!1||!N.isSkinnedMesh&&Ft.skinning===!0||N.isInstancedMesh&&Ft.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ft.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ft.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ft.instancingMorph===!1&&N.morphTexture!==null||Ft.envMap!==Dt||H.fog===!0&&Ft.fog!==ct||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==at.numPlanes||Ft.numIntersection!==at.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==Gt||Ft.morphTargets!==Nt||Ft.morphNormals!==me||Ft.morphColors!==Se||Ft.toneMapping!==Ae||Ft.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Ft.__version=H.version);let gn=Ft.currentProgram;ue===!0&&(gn=ar(H,U,N));let Ii=!1,on=!1,po=!1;const Ce=gn.getUniforms(),Yn=Ft.uniforms;if(ft.useProgram(gn.program)&&(Ii=!0,on=!0,po=!0),H.id!==L&&(L=H.id,on=!0),Ii||I!==S){rt.reverseDepthBuffer?(At.copy(S.projectionMatrix),Kf(At),jf(At),Ce.setValue(P,"projectionMatrix",At)):Ce.setValue(P,"projectionMatrix",S.projectionMatrix),Ce.setValue(P,"viewMatrix",S.matrixWorldInverse);const fn=Ce.map.cameraPosition;fn!==void 0&&fn.setValue(P,Bt.setFromMatrixPosition(S.matrixWorld)),rt.logarithmicDepthBuffer&&Ce.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ce.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),I!==S&&(I=S,on=!0,po=!0)}if(N.isSkinnedMesh){Ce.setOptional(P,N,"bindMatrix"),Ce.setOptional(P,N,"bindMatrixInverse");const fn=N.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ce.setValue(P,"boneTexture",fn.boneTexture,A))}N.isBatchedMesh&&(Ce.setOptional(P,N,"batchingTexture"),Ce.setValue(P,"batchingTexture",N._matricesTexture,A),Ce.setOptional(P,N,"batchingIdTexture"),Ce.setValue(P,"batchingIdTexture",N._indirectTexture,A),Ce.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Ce.setValue(P,"batchingColorTexture",N._colorsTexture,A));const mo=O.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&Wt.update(N,O,gn),(on||Ft.receiveShadow!==N.receiveShadow)&&(Ft.receiveShadow=N.receiveShadow,Ce.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Yn.envMap.value=Dt,Yn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Yn.envMapIntensity.value=U.environmentIntensity),on&&(Ce.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&qu(Yn,po),ct&&H.fog===!0&&dt.refreshFogUniforms(Yn,ct),dt.refreshMaterialUniforms(Yn,H,J,B,p.state.transmissionRenderTarget[S.id]),qr.upload(P,Hl(Ft),Yn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qr.upload(P,Hl(Ft),Yn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ce.setValue(P,"center",N.center),Ce.setValue(P,"modelViewMatrix",N.modelViewMatrix),Ce.setValue(P,"normalMatrix",N.normalMatrix),Ce.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const fn=H.uniformsGroups;for(let go=0,$u=fn.length;go<$u;go++){const Vl=fn[go];D.update(Vl,gn),D.bind(Vl,gn)}}return gn}function qu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Yu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,U,O){Mt.get(S.texture).__webglTexture=U,Mt.get(S.depthTexture).__webglTexture=O;const H=Mt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const O=Mt.get(S);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,O=0){T=S,R=U,E=O;let H=!0,N=null,ct=!1,yt=!1;if(S){const Dt=Mt.get(S);if(Dt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Dt.__hasExternalTextures)A.rebindTextures(S,Mt.get(S.texture).__webglTexture,Mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Nt=S.depthTexture;if(Dt.__boundDepthTexture!==Nt){if(Nt!==null&&Mt.has(Nt)&&(S.width!==Nt.image.width||S.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);const Gt=Mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][O]:N=Gt[U],ct=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?N=Mt.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[O]:N=Gt,_.copy(S.viewport),b.copy(S.scissor),k=S.scissorTest}else _.copy(xt).multiplyScalar(J).floor(),b.copy(vt).multiplyScalar(J).floor(),k=Jt;if(ft.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&ft.drawBuffers(S,N),ft.viewport(_),ft.scissor(b),ft.setScissorTest(k),ct){const Dt=Mt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt.__webglTexture,O)}else if(yt){const Dt=Mt.get(S.texture),Ht=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,O||0,Ht)}L=-1},this.readRenderTargetPixels=function(S,U,O,H,N,ct,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Pt=Pt[yt]),Pt){ft.bindFramebuffer(P.FRAMEBUFFER,Pt);try{const Dt=S.texture,Ht=Dt.format,Gt=Dt.type;if(!rt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&O>=0&&O<=S.height-N&&P.readPixels(U,O,H,N,Yt.convert(Ht),Yt.convert(Gt),ct)}finally{const Dt=T!==null?Mt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,U,O,H,N,ct,yt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Pt=Pt[yt]),Pt){const Dt=S.texture,Ht=Dt.format,Gt=Dt.type;if(!rt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-H&&O>=0&&O<=S.height-N){ft.bindFramebuffer(P.FRAMEBUFFER,Pt);const Nt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Nt),P.bufferData(P.PIXEL_PACK_BUFFER,ct.byteLength,P.STREAM_READ),P.readPixels(U,O,H,N,Yt.convert(Ht),Yt.convert(Gt),0);const me=T!==null?Mt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,me);const Se=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $f(P,Se,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Nt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ct),P.deleteBuffer(Nt),P.deleteSync(Se),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,O=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-O),N=Math.floor(S.image.width*H),ct=Math.floor(S.image.height*H),yt=U!==null?U.x:0,Pt=U!==null?U.y:0;A.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,yt,Pt,N,ct),ft.unbindTexture()},this.copyTextureToTexture=function(S,U,O=null,H=null,N=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let ct,yt,Pt,Dt,Ht,Gt;O!==null?(ct=O.max.x-O.min.x,yt=O.max.y-O.min.y,Pt=O.min.x,Dt=O.min.y):(ct=S.image.width,yt=S.image.height,Pt=0,Dt=0),H!==null?(Ht=H.x,Gt=H.y):(Ht=0,Gt=0);const Nt=Yt.convert(U.format),me=Yt.convert(U.type);A.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Se=P.getParameter(P.UNPACK_ROW_LENGTH),Ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=P.getParameter(P.UNPACK_SKIP_PIXELS),he=P.getParameter(P.UNPACK_SKIP_ROWS),Ft=P.getParameter(P.UNPACK_SKIP_IMAGES),He=S.isCompressedTexture?S.mipmaps[N]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,He.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,He.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Ht,Gt,ct,yt,Nt,me,He.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Ht,Gt,He.width,He.height,Nt,He.data):P.texSubImage2D(P.TEXTURE_2D,N,Ht,Gt,ct,yt,Nt,me,He),P.pixelStorei(P.UNPACK_ROW_LENGTH,Se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,he),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ft),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(S,U,O=null,H=null,N=0){S.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,H=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0);let ct,yt,Pt,Dt,Ht,Gt,Nt,me,Se;const Ae=S.isCompressedTexture?S.mipmaps[N]:S.image;O!==null?(ct=O.max.x-O.min.x,yt=O.max.y-O.min.y,Pt=O.max.z-O.min.z,Dt=O.min.x,Ht=O.min.y,Gt=O.min.z):(ct=Ae.width,yt=Ae.height,Pt=Ae.depth,Dt=0,Ht=0,Gt=0),H!==null?(Nt=H.x,me=H.y,Se=H.z):(Nt=0,me=0,Se=0);const rn=Yt.convert(U.format),he=Yt.convert(U.type);let Ft;if(U.isData3DTexture)A.setTexture3D(U,0),Ft=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Ft=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const He=P.getParameter(P.UNPACK_ROW_LENGTH),ue=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ii=P.getParameter(P.UNPACK_SKIP_ROWS),on=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ft,N,Nt,me,Se,ct,yt,Pt,rn,he,Ae.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ft,N,Nt,me,Se,ct,yt,Pt,rn,Ae.data):P.texSubImage3D(Ft,N,Nt,me,Se,ct,yt,Pt,rn,he,Ae),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ii),P.pixelStorei(P.UNPACK_SKIP_IMAGES,on),N===0&&U.generateMipmaps&&P.generateMipmap(Ft),ft.unbindTexture()},this.initRenderTarget=function(S){Mt.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),ft.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,ft.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fl?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===so?"display-p3":"srgb"}}class _l{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(t),this.near=e,this.far=n}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ou extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ox{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new C;class Qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class to extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const Ds=new C,$i=new C,Ki=new C,ji=new Y,Us=new Y,au=new ee,Rr=new C,Ns=new C,Pr=new C,kc=new Y,qo=new Y,Fc=new Y;class $a extends Pe{constructor(t=new to){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ox(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Qr(n,3,0,!1)),Yi.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new Y(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Lr(Rr.set(-.5,-.5,0),Ki,o,$i,s,r),Lr(Ns.set(.5,-.5,0),Ki,o,$i,s,r),Lr(Pr.set(.5,.5,0),Ki,o,$i,s,r),kc.set(0,0),qo.set(1,0),Fc.set(1,1);let a=t.ray.intersectTriangle(Rr,Ns,Pr,!1,Ds);if(a===null&&(Lr(Ns.set(-.5,.5,0),Ki,o,$i,s,r),qo.set(0,1),a=t.ray.intersectTriangle(Rr,Pr,Ns,!1,Ds),a===null))return;const l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:mn.getInterpolation(Ds,Rr,Ns,Pr,kc,qo,Fc,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lr(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*ji.x-s*ji.y,Us.y=s*ji.x+r*ji.y):Us.copy(ji),i.copy(t),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(au)}class ax extends We{constructor(t=null,e=1,n=1,s,r,o,a,l,c=sn,h=sn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new ee,Oc=new ee,Ir=[],Bc=new Ci,lx=new ee,ks=new lt,Fs=new ys;class Si extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Bc.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Bc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Fs.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Oc.multiplyMatrices(n,Zi),ks.matrixWorld=Oc,ks.raycast(t,Ir);for(let o=0,a=Ir.length;o<a;o++){const l=Ir[o];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ax(new Float32Array(s*this.count),s,this.count,ll,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class lu extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hc=new ee,Ka=new pl,Dr=new ys,Ur=new C;class cx extends Pe{constructor(t=new be,e=new lu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Hc.copy(s).invert(),Ka.copy(t.ray).applyMatrix4(Hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,x=d;m<x;m++){const p=c.getX(m);Ur.fromBufferAttribute(f,p),Gc(Ur,p,l,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,x=d;m<x;m++)Ur.fromBufferAttribute(f,m),Gc(Ur,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gc(i,t,e,n,s,r,o){const a=Ka.distanceSqToPoint(i);if(a<e){const l=new C;Ka.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hx extends We{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Y:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new ee;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ke(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yl extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Y){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ux extends yl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ml(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Nr=new C,Yo=new Ml,$o=new Ml,Ko=new Ml;class ir extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),c=Nr);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Yo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,p),$o.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,p),Ko.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$o.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ko.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Yo.calc(l),$o.calc(l),Ko.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function fx(i,t){const e=1-i;return e*e*t}function dx(i,t){return 2*(1-i)*i*t}function px(i,t){return i*i*t}function qs(i,t,e,n){return fx(i,t)+dx(i,e)+px(i,n)}function mx(i,t){const e=1-i;return e*e*e*t}function gx(i,t){const e=1-i;return 3*e*e*i*t}function xx(i,t){return 3*(1-i)*i*i*t}function vx(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return mx(i,t)+gx(i,e)+xx(i,n)+vx(i,s)}class cu extends Cn{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _x extends Cn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y),Ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hu extends Cn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends Cn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fu extends Cn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wl extends Cn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y),qs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Vc(a,l.x,c.x,h.x,f.x),Vc(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Y().fromArray(s))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:ux,CatmullRomCurve3:ir,CubicBezierCurve:cu,CubicBezierCurve3:_x,EllipseCurve:yl,LineCurve:hu,LineCurve3:uu,QuadraticBezierCurve:fu,QuadraticBezierCurve3:wl,SplineCurve:du});class yx extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new eo[s.type]().fromJSON(s))}return this}}class ja extends yx{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hu(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new fu(this.currentPoint.clone(),new Y(t,e),new Y(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new cu(this.currentPoint.clone(),new Y(t,e),new Y(n,s),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new du(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new yl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pi extends be{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,f=new C,u=new Y,d=new C,m=new C,x=new C;let p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=e;M++){const v=n+M*h*s,y=Math.sin(v),R=Math.cos(v);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*y,f.y=t[E].y,f.z=t[E].x*R,o.push(f.x,f.y,f.z),u.x=M/e,u.y=E/(t.length-1),a.push(u.x,u.y);const T=l[3*E+0]*y,L=l[3*E+1],I=l[3*E+0]*R;c.push(T,L,I)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,R=y,E=y+t.length,T=y+t.length+1,L=y+1;r.push(R,E,L),r.push(T,L,E)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.points,t.segments,t.phiStart,t.phiLength)}}class qe extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new Y;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rt extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const x=[],p=n/2;let g=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function M(){const y=new C,R=new C;let E=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const I=[],_=L/r,b=_*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,G=F*l+a,X=Math.sin(G),B=Math.cos(G);R.x=b*X,R.y=-_*n+p,R.z=b*B,f.push(R.x,R.y,R.z),y.set(X,T,B).normalize(),u.push(y.x,y.y,y.z),d.push(F,1-_),I.push(m++)}x.push(I)}for(let L=0;L<s;L++)for(let I=0;I<r;I++){const _=x[I][L],b=x[I+1][L],k=x[I+1][L+1],F=x[I][L+1];t>0&&(h.push(_,b,F),E+=3),e>0&&(h.push(b,k,F),E+=3)}c.addGroup(g,E,0),g+=E}function v(y){const R=m,E=new Y,T=new C;let L=0;const I=y===!0?t:e,_=y===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*_,0),u.push(0,_,0),d.push(.5,.5),m++;const b=m;for(let k=0;k<=s;k++){const G=k/s*l+a,X=Math.cos(G),B=Math.sin(G);T.x=I*B,T.y=p*_,T.z=I*X,f.push(T.x,T.y,T.z),u.push(0,_,0),E.x=X*.5+.5,E.y=B*.5*_+.5,d.push(E.x,E.y),m++}for(let k=0;k<s;k++){const F=R+k,G=b+k;y===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}c.addGroup(g,L,y===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sr extends Rt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new sr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bl extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new C,y=new C,R=new C;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],R),l(v,y,R,M)}function l(M,v,y,R){const E=R+1,T=[];for(let L=0;L<=E;L++){T[L]=[];const I=M.clone().lerp(y,L/E),_=v.clone().lerp(y,L/E),b=E-L;for(let k=0;k<=b;k++)k===0&&L===E?T[L][k]=I:T[L][k]=I.clone().lerp(_,k/b)}for(let L=0;L<E;L++)for(let I=0;I<2*(E-L)-1;I++){const _=Math.floor(I/2);I%2===0?(u(T[L][_+1]),u(T[L+1][_]),u(T[L][_])):(u(T[L][_+1]),u(T[L+1][_+1]),u(T[L+1][_]))}}function c(M){const v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const M=new C;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const y=p(M)/2/Math.PI+.5,R=g(M)/Math.PI+.5;o.push(y,1-R)}m(),f()}function f(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],R=o[M+4],E=Math.max(v,y,R),T=Math.min(v,y,R);E>.9&&T<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){const M=new C,v=new C,y=new C,R=new C,E=new Y,T=new Y,L=new Y;for(let I=0,_=0;I<r.length;I+=9,_+=6){M.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),E.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),R.copy(M).add(v).add(y).divideScalar(3);const b=p(R);x(E,_+0,M,b),x(T,_+2,v,b),x(L,_+4,y,b)}}function x(M,v,y,R){R<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.vertices,t.indices,t.radius,t.details)}}class Li extends ja{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ja().fromJSON(s))}return this}}const Mx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=pu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(n&&(r=Ex(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)f=i[m],u=i[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Js(r,o,e,a,l,d,0),o}};function pu(i,t,e,n,s){let r,o;if(s===Fx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Wc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Wc(r,i[r],i[r+1],o);return o&&oo(o,o.next)&&(tr(o),o=o.next),o}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(oo(e,e.next)||Ee(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Lx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?bx(i,n,s,r):wx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sx(Ti(i),t,e),Js(i,t,e,n,s,r,2)):o===2&&Tx(i,t,e,n,s,r):Js(Ti(i),t,e,n,s,r,1);break}}}function wx(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&ts(s,a,r,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,g=Za(d,m,t,e,n),M=Za(x,p,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=g&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&ts(a,h,l,f,c,u,v.x,v.y)&&Ee(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&ts(a,h,l,f,c,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&ts(a,h,l,f,c,u,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&ts(a,h,l,f,c,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Sx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!oo(s,r)&&mu(s,n,n.next,r)&&Qs(s,r)&&Qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),tr(n),tr(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function Tx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ux(o,a)){let l=gu(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Js(o,t,e,n,s,r,0),Js(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ex(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=pu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Dx(c));for(s.sort(Ax),r=0;r<s.length;r++)e=Cx(s[r],e);return e}function Ax(i,t){return i.x-t.x}function Cx(i,t){const e=Rx(i,t);if(!e)return t;const n=gu(e,i);return Ti(n,n.next),Ti(e,e.next)}function Rx(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ts(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Qs(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Px(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function Px(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Lx(i,t,e,n){let s=i;do s.z===0&&(s.z=Za(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ix(s)}function Ix(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Za(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ux(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nx(i,t)&&(Qs(i,t)&&Qs(t,i)&&kx(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||oo(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function oo(i,t){return i.x===t.x&&i.y===t.y}function mu(i,t,e,n){const s=Fr(Ee(i,t,e)),r=Fr(Ee(i,t,n)),o=Fr(Ee(e,n,i)),a=Fr(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&kr(i,e,t)||r===0&&kr(i,n,t)||o===0&&kr(e,i,n)||a===0&&kr(e,t,n))}function kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fr(i){return i>0?1:i<0?-1:0}function Nx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function kx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gu(i,t){const e=new Ja(i.i,i.x,i.y),n=new Ja(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wc(i,t,e,n){const s=new Ja(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ja(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class si{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return si.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Xc(t),qc(n,t);let o=t.length;e.forEach(Xc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,qc(n,e[l]);const a=Mx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ao extends be{constructor(t=new Li([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:zx;let v,y=!1,R,E,T,L;g&&(v=g.getSpacedPoints(h),y=!0,u=!1,R=g.computeFrenetFrames(h,!1),E=new C,T=new C,L=new C),u||(p=0,d=0,m=0,x=0);const I=a.extractPoints(c);let _=I.shape;const b=I.holes;if(!si.isClockWise(_)){_=_.reverse();for(let tt=0,P=b.length;tt<P;tt++){const ut=b[tt];si.isClockWise(ut)&&(b[tt]=ut.reverse())}}const F=si.triangulateShape(_,b),G=_;for(let tt=0,P=b.length;tt<P;tt++){const ut=b[tt];_=_.concat(ut)}function X(tt,P,ut){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(P,ut)}const B=_.length,J=F.length;function V(tt,P,ut){let ht,rt,ft;const kt=tt.x-P.x,Mt=tt.y-P.y,A=ut.x-tt.x,w=ut.y-tt.y,z=kt*kt+Mt*Mt,K=kt*w-Mt*A;if(Math.abs(K)>Number.EPSILON){const et=Math.sqrt(z),j=Math.sqrt(A*A+w*w),It=P.x-Mt/et,dt=P.y+kt/et,St=ut.x-w/j,se=ut.y+A/j,at=((St-It)*w-(se-dt)*A)/(kt*w-Mt*A);ht=It+kt*at-tt.x,rt=dt+Mt*at-tt.y;const Tt=ht*ht+rt*rt;if(Tt<=2)return new Y(ht,rt);ft=Math.sqrt(Tt/2)}else{let et=!1;kt>Number.EPSILON?A>Number.EPSILON&&(et=!0):kt<-Number.EPSILON?A<-Number.EPSILON&&(et=!0):Math.sign(Mt)===Math.sign(w)&&(et=!0),et?(ht=-Mt,rt=kt,ft=Math.sqrt(z)):(ht=kt,rt=Mt,ft=Math.sqrt(z/2))}return new Y(ht/ft,rt/ft)}const gt=[];for(let tt=0,P=G.length,ut=P-1,ht=tt+1;tt<P;tt++,ut++,ht++)ut===P&&(ut=0),ht===P&&(ht=0),gt[tt]=V(G[tt],G[ut],G[ht]);const xt=[];let vt,Jt=gt.concat();for(let tt=0,P=b.length;tt<P;tt++){const ut=b[tt];vt=[];for(let ht=0,rt=ut.length,ft=rt-1,kt=ht+1;ht<rt;ht++,ft++,kt++)ft===rt&&(ft=0),kt===rt&&(kt=0),vt[ht]=V(ut[ht],ut[ft],ut[kt]);xt.push(vt),Jt=Jt.concat(vt)}for(let tt=0;tt<p;tt++){const P=tt/p,ut=d*Math.cos(P*Math.PI/2),ht=m*Math.sin(P*Math.PI/2)+x;for(let rt=0,ft=G.length;rt<ft;rt++){const kt=X(G[rt],gt[rt],ht);mt(kt.x,kt.y,-ut)}for(let rt=0,ft=b.length;rt<ft;rt++){const kt=b[rt];vt=xt[rt];for(let Mt=0,A=kt.length;Mt<A;Mt++){const w=X(kt[Mt],vt[Mt],ht);mt(w.x,w.y,-ut)}}}const ne=m+x;for(let tt=0;tt<B;tt++){const P=u?X(_[tt],Jt[tt],ne):_[tt];y?(T.copy(R.normals[0]).multiplyScalar(P.x),E.copy(R.binormals[0]).multiplyScalar(P.y),L.copy(v[0]).add(T).add(E),mt(L.x,L.y,L.z)):mt(P.x,P.y,0)}for(let tt=1;tt<=h;tt++)for(let P=0;P<B;P++){const ut=u?X(_[P],Jt[P],ne):_[P];y?(T.copy(R.normals[tt]).multiplyScalar(ut.x),E.copy(R.binormals[tt]).multiplyScalar(ut.y),L.copy(v[tt]).add(T).add(E),mt(L.x,L.y,L.z)):mt(ut.x,ut.y,f/h*tt)}for(let tt=p-1;tt>=0;tt--){const P=tt/p,ut=d*Math.cos(P*Math.PI/2),ht=m*Math.sin(P*Math.PI/2)+x;for(let rt=0,ft=G.length;rt<ft;rt++){const kt=X(G[rt],gt[rt],ht);mt(kt.x,kt.y,f+ut)}for(let rt=0,ft=b.length;rt<ft;rt++){const kt=b[rt];vt=xt[rt];for(let Mt=0,A=kt.length;Mt<A;Mt++){const w=X(kt[Mt],vt[Mt],ht);y?mt(w.x,w.y+v[h-1].y,v[h-1].x+ut):mt(w.x,w.y,f+ut)}}}$(),ot();function $(){const tt=s.length/3;if(u){let P=0,ut=B*P;for(let ht=0;ht<J;ht++){const rt=F[ht];Bt(rt[2]+ut,rt[1]+ut,rt[0]+ut)}P=h+p*2,ut=B*P;for(let ht=0;ht<J;ht++){const rt=F[ht];Bt(rt[0]+ut,rt[1]+ut,rt[2]+ut)}}else{for(let P=0;P<J;P++){const ut=F[P];Bt(ut[2],ut[1],ut[0])}for(let P=0;P<J;P++){const ut=F[P];Bt(ut[0]+B*h,ut[1]+B*h,ut[2]+B*h)}}n.addGroup(tt,s.length/3-tt,0)}function ot(){const tt=s.length/3;let P=0;At(G,P),P+=G.length;for(let ut=0,ht=b.length;ut<ht;ut++){const rt=b[ut];At(rt,P),P+=rt.length}n.addGroup(tt,s.length/3-tt,1)}function At(tt,P){let ut=tt.length;for(;--ut>=0;){const ht=ut;let rt=ut-1;rt<0&&(rt=tt.length-1);for(let ft=0,kt=h+p*2;ft<kt;ft++){const Mt=B*ft,A=B*(ft+1),w=P+ht+Mt,z=P+rt+Mt,K=P+rt+A,et=P+ht+A;Ot(w,z,K,et)}}}function mt(tt,P,ut){l.push(tt),l.push(P),l.push(ut)}function Bt(tt,P,ut){Xt(tt),Xt(P),Xt(ut);const ht=s.length/3,rt=M.generateTopUV(n,s,ht-3,ht-2,ht-1);te(rt[0]),te(rt[1]),te(rt[2])}function Ot(tt,P,ut,ht){Xt(tt),Xt(P),Xt(ht),Xt(P),Xt(ut),Xt(ht);const rt=s.length/3,ft=M.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);te(ft[0]),te(ft[1]),te(ft[3]),te(ft[1]),te(ft[2]),te(ft[3])}function Xt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function te(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ox(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new eo[s.type]().fromJSON(s)),new ao(n,t.options)}}const zx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Y(r,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-f),new Y(u,1-m),new Y(x,1-g)]:[new Y(a,1-l),new Y(h,1-f),new Y(d,1-m),new Y(p,1-g)]}};function Ox(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Rn extends bl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rn(t.radius,t.detail)}}class Sl extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new C,m=new Y;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const g=r+p/n*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<s;x++){const p=x*(n+1);for(let g=0;g<n;g++){const M=g+p,v=M,y=M+n+1,R=M+n+2,E=M+1;a.push(v,y,E),a.push(y,R,E)}}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rr extends be{constructor(t=new Li([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function c(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const m=u.holes;si.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const M=m[p];si.isClockWise(M)===!0&&(m[p]=M.reverse())}const x=si.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const M=m[p];d=d.concat(M)}for(let p=0,g=d.length;p<g;p++){const M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=x.length;p<g;p++){const M=x[p],v=M[0]+f,y=M[1]+f,R=M[2]+f;n.push(v,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new rr(n,t.curveSegments)}}function Bx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class xe extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new C,u=new C,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const M=[],v=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const E=R/e;f.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(E+y,1-v),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const v=h[g][M+1],y=h[g][M],R=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&d.push(v,y,E),(g!==n-1||l<Math.PI)&&d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class An extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,f=new C,u=new C;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ri extends be{constructor(t=new wl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new Y;let h=new C;const f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function x(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),M(),g()}function p(v){h=t.getPointAt(v/e,h);const y=o.normals[v],R=o.binormals[v];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,L=Math.sin(T),I=-Math.cos(T);l.x=I*y.x+L*R.x,l.y=I*y.y+L*R.y,l.z=I*y.z+L*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const R=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),T=(s+1)*v+y,L=(s+1)*(v-1)+y;m.push(R,E,L),m.push(E,T,L)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ri(new eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Hx extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lt extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qt extends Lt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lo extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Gx extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jo=new ee,Yc=new C,$c=new C;class Tl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vx extends Tl{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ms*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Kc extends lo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const jc=new ee,zs=new C,Zo=new C;class Wx extends Tl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),Zo.copy(n.position),Zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zo),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class Ei extends lo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xx extends Tl{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qx extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Xx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zc(){return performance.now()}const Jc=new ee;class $x{constructor(t,e,n=0,s=1/0){this.ray=new pl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(t,e=!0,n=[]){return Qa(t,this,n,e),n.sort(Qc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Qa(t[s],this,n,e);return n.sort(Qc),n}}function Qc(i,t){return i.distance-t.distance}function Qa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Qa(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);const xu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kx=new xl(-1,1,1,-1,0,1);class jx extends be{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const Zx=new jx;class El{constructor(t){this._mesh=new lt(Zx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Jx extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Zs.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new El(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Qx extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class tv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Y);this._width=n.width,this._height=n.height,e=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jx(xu),this.copyPass.material.blending=Gn,this.clock=new Yx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(o instanceof th?n=!0:o instanceof Qx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ev extends ws{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const nv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xs extends ws{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Y(t.x,t.y):new Y(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new bn(r,o,{type:Vn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new bn(r,o,{type:Vn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=nv;this.highPassUniforms=Zs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Y(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=xu;this.copyUniforms=Zs.clone(h.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:cs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new El(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Y(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Y(.5,.5)},direction:{value:new Y(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}xs.BlurDirectionX=new Y(1,0);xs.BlurDirectionY=new Y(0,1);const iv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sv extends ws{constructor(){super();const t=iv;this.uniforms=Zs.clone(t.uniforms),this.material=new Hx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new El(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ih&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Os(i,t){return new Te({color:new st(i).multiplyScalar(t),side:Zt})}function rv(){const i=new ou;i.background=new st(460555);const t=new xe(10,32,16),e=[],n=t.attributes.position;for(let l=0;l<n.count;l++){const c=n.getY(l)/10,h=Math.max(0,1-Math.abs(c+.05)*3.2);e.push(.035+h*.1,.035+h*.075,.045+h*.05)}t.setAttribute("color",new qt(e,3)),i.add(new lt(t,new Te({vertexColors:!0,side:Be})));const s=new lt(new Ut(1.6,.08,.14),Os(15398143,5));s.position.set(0,2.1,-.1),i.add(s);const r=new lt(new we(3,2.2),Os(6957604,.22));r.rotation.x=Math.PI/2,r.position.y=2.3,i.add(r);for(let l=0;l<16;l++){const c=new lt(new xe(.05,8,6),Os(16761978,6)),h=l/16*Math.PI*2;c.position.set(Math.cos(h)*1.6,2.05+Math.sin(l)*.05,Math.sin(h)*1.3),i.add(c)}const o=[[16726688,-2.5,2.2,-4],[3789055,2.8,2.6,-4.5],[16761402,.4,3,-5]];for(const[l,c,h,f]of o){const u=new lt(new we(1.4,.4),Os(l,.5));u.position.set(c,h,f),u.lookAt(0,1,0),i.add(u)}const a=new lt(new we(1,2),Os(16767392,1.6));return a.position.set(1.8,1.1,3.5),a.lookAt(0,1,0),i.add(a),i}function ov(i){const t=new qa(i),e=t.fromScene(rv(),.035);return t.dispose(),e.texture}const Q={y:.9,x0:-.95,x1:.95,z0:-.52,z1:.4},Z={x:0,z:0,R:.24,rimR:.18,bottomY:.975};Z.depth=Z.R-Math.sqrt(Z.R*Z.R-Z.rimR*Z.rimR);Z.cy=Z.bottomY+Z.R;Z.rimY=Z.bottomY+Z.depth;const Et={x:0,z:0,w:.56,d:.36,topY:Q.y+.045},zt={x:0,z:0,cols:4,rows:3,pitch:.05,wellR:.019,topY:Q.y+.06,w:.23,d:.18},Vs={x:-.5,z:-.3,baseY:Q.y+.12,h:.34,r:.085},ie={x:0,z:0,w:.46,d:.3,grateY:Q.y+.1},ce={x:-.53,z:.07,r:.158,h:.045};ce.topY=Q.y+ce.h;const it={x:.53,z:.07,r:.135,wellR:.095,lip:.018};it.wellY=Q.y+.012;const cn={z:.265,r:.052,spacing:.118,portrait:{rows:[.235,.345],spacing:.112}},vu={oil:{x:-.29,z:-.265,r:.06},sauce:{x:.29,z:-.265,r:.07}},en={x:.68,z:-.25},On={z0:-.51,z1:-.37,y1:1.24},av={board:{target:[ce.x,ce.topY,ce.z+.01],w:.42,h:.4,pitch:1.05,yaw:.12},wok:{target:[Z.x,Z.bottomY,.075],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[Z.x,Z.bottomY,.13],w:.52,h:.78,pitch:1.12}},teppan:{target:[Et.x,Et.topY,.08],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[Et.x,Et.topY,.13],w:.62,h:.8,pitch:1.12}},takopan:{target:[zt.x,zt.topY,.07],w:.7,h:.42,pitch:1.08,yaw:0,portrait:{target:[zt.x,zt.topY,.1],w:.4,h:.62,pitch:1.18}},trompo:{target:[Vs.x,Vs.baseY+Vs.h*.45,Vs.z],w:.5,h:.5,pitch:.35,yaw:.35,portrait:{w:.42,h:.62}},grill:{target:[ie.x,ie.grateY,.08],w:.8,h:.46,pitch:1,yaw:0,portrait:{target:[ie.x,ie.grateY,.12],w:.5,h:.7,pitch:1.12}},plate:{target:[it.x,it.wellY+.02,it.z],w:.36,h:.34,pitch:.95,yaw:-.18},beauty:{target:[it.x+.1,it.wellY+.03,it.z],w:.46,h:.26,pitch:.42,yaw:0,portrait:{target:[it.x,it.wellY-.1,it.z+.1],w:.36,h:.62,pitch:.62}},stall:{target:[0,Q.y+.35,0],w:3,h:2.2,pitch:.16,yaw:Math.PI,portrait:{w:2.1,h:3.2,target:[0,Q.y+.55,0]}}};function lv(i,{lowPower:t=!1}={}){const e=new rx({canvas:i,antialias:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,t?1.25:2);e.setPixelRatio(n),e.outputColorSpace=hn,e.toneMapping=sl,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Eh;const s=new ou;s.background=new st(657936),s.fog=new _l(1446426,5,14),s.environment=ov(e),s.environmentIntensity=.7;const r=new nn(42,1,.02,40),o=new Gx(9082040,2759186,.35);s.add(o);const a=new qx(15660287,1.5);a.position.set(.15,2.4,.35),a.target.position.set(0,Q.y,0),a.castShadow=!0,a.shadow.mapSize.set(t?1024:2048,t?1024:2048);const l=a.shadow.camera;l.left=-1.1,l.right=1.1,l.top=.8,l.bottom=-.8,l.near=.5,l.far=3.5,a.shadow.bias=-4e-4,a.shadow.normalBias=.01,a.shadow.radius=3,s.add(a,a.target);const c=new Kc(16762250,4.5,4,.7,.6,1.6);c.position.set(-.6,1.85,.75),c.target.position.set(.1,Q.y,.05),s.add(c,c.target);const h=new Ei(16738970,.18,5,1.6);h.position.set(-1.4,1.5,-1.3);const f=new Ei(5949695,.2,5,1.6);f.position.set(1.5,1.4,-1.2),s.add(h,f);const u=new Kc(16769208,0,1.6,.5,.7,1.5);u.position.set(it.x-.35,Q.y+.55,it.z+.45),u.target.position.set(it.x,it.wellY,it.z),s.add(u,u.target);const d=new tv(e);d.addPass(new ev(s,r));const m=new xs(new Y(256,256),.28,.3,1.5);t||d.addPass(m),d.addPass(new sv);const x={renderer:e,scene:s,camera:r,composer:d,bloom:m,lights:{hemi:o,tube:a,key:c,rimA:h,rimB:f,plateKey:u},width:1,height:1,resize(p,g){x.width=p,x.height=g,e.setSize(p,g,!1),d.setSize(p,g),d.setPixelRatio(e.getPixelRatio()),m.setSize(Math.max(1,p/2),Math.max(1,g/2)),r.aspect=p/g,r.updateProjectionMatrix()},render(){d.render()}};return x}function cv(i,t,e,n=1){const s=i.aspect<1,r=s&&t.portrait?{...t,...t.portrait}:t,o=s?54:40;i.fov!==o&&(i.fov=o,i.updateProjectionMatrix());const a=qf.degToRad(o),l=2*Math.atan(Math.tan(a/2)*i.aspect),c=Math.max(r.w*n/2/Math.tan(l/2),r.h*n/2/Math.tan(a/2)),[h,f,u]=r.target,d=Math.cos(r.pitch),m=Math.sin(r.pitch);return e.pos.set(h+Math.sin(r.yaw)*d*c,f+m*c,u+Math.cos(r.yaw)*d*c),e.look.set(h,f,u),e}const Bs={khaopad:{id:"khaopad",name:"Khao Pad",local:"ข้าวผัด",cuisine:"thai",blurb:"Thai fried rice: garlic, egg and jasmine rice, seasoned with fish sauce.",weights:{rice:1.5,egg:1,garlic:.7,scallion:.5},garnish:{cucumber:[2,6],lime:[1,2],freshScallion:[2,12]},plate:{leaf:!1,rice:!1,mould:!0},bowls:["garlic","egg","rice","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic"],say:"Garlic in",hint:"Tap to tip it in"},{verb:"cook",focus:["garlic"],minTime:1.5,say:"Fry it golden",hint:"Seconds only. Golden, not brown"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"add",items:["rice"],say:"Rice in, straight away",hint:"Tap to tip it in, before the egg sets"},{verb:"pour",liquid:"fishSauce",say:"Season with fish sauce",hint:"Hold to pour round the edge. Let go in the green"},{verb:"cook",focus:["rice","egg"],minTime:3,say:"Toss until every grain is hot",hint:"Keep it moving. Toss for wok hei"},{verb:"add",items:["scallion"],say:"Spring onions",hint:"Tap to tip it in"},{verb:"cook",focus:["scallion"],minTime:1,say:"One quick toss",hint:"Keep them bright green"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["cucumber","lime","freshScallion"],say:"Garnish",hint:"Cucumber slices, a lime wedge, spring onion"}]},krapao:{id:"krapao",name:"Pad Kra Pao",local:"ผัดกะเพรา",cuisine:"thai",blurb:"Chicken, holy basil and fiery chilli over rice, with a crisp fried egg.",weights:{mince:1.5,basil:1,garlic:.6,birdChilli:.5},garnish:{friedEgg:[1,1],cucumber:[0,5]},plate:{leaf:!1,rice:!0},bowls:["garlic","birdChilli","mince","basil"],steps:[{verb:"chop",item:"birdChilli",cuts:5,say:"Chop the bird’s eye chillies",hint:"Swipe down anywhere to chop. Careful, they bite"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","birdChilli"],say:"Garlic and chillies",hint:"Tap twice to tip both in"},{verb:"cook",focus:["garlic","birdChilli"],minTime:1.5,say:"Fry until fragrant",hint:"A few seconds. The smoke will make you cough"},{verb:"add",items:["mince"],say:"Chicken in",hint:"Tap to tip it in"},{verb:"cook",focus:["mince"],minTime:3,say:"Cook until it is no longer pink",hint:"Break it up. Keep it moving"},{verb:"pour",liquid:"krapao",say:"Pour the sauce",hint:"Oyster, soy and fish sauce. Let go in the green"},{verb:"add",items:["basil"],say:"Now the holy basil",hint:"Tap to tip it in"},{verb:"cook",focus:["basil"],minTime:1,say:"Toss until just wilted",hint:"Flame down. It only needs a moment"},{verb:"plate",say:"Spoon it over the rice",hint:"Tap anywhere"},{verb:"garnish",items:["friedEgg","cucumber"],say:"Top with a fried egg",hint:"Place the khai dao on top. Cucumber on the side"}]},padseeew:{id:"padseeew",name:"Pad See Ew",local:"ผัดซีอิ๊ว",cuisine:"thai",blurb:"Wide rice noodles, chicken and Chinese broccoli, charred in dark soy.",weights:{wideNoodles:1.5,chickenSlice:1.2,gailan:.8,egg:.8,garlic:.5},garnish:{pepper:[4,40],chilli:[0,30]},plate:{leaf:!1,rice:!1},bowls:["garlic","chickenSlice","egg","gailan","wideNoodles"],steps:[{verb:"chop",item:"gailan",cuts:5,say:"Cut the Chinese broccoli",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","chickenSlice"],say:"Garlic and chicken",hint:"Tap twice to tip both in"},{verb:"cook",focus:["chickenSlice","garlic"],minTime:3,say:"Cook the chicken through",hint:"Keep it moving"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"cook",focus:["egg"],minTime:1.5,say:"Let it half set, then scramble",hint:"A moment still, then stir"},{verb:"add",items:["gailan","wideNoodles"],say:"Broccoli and noodles",hint:"Tap twice to tip both in"},{verb:"pour",liquid:"darkSoy",say:"Pour the dark soy",hint:"It stains the noodles. Let go in the green"},{verb:"cook",focus:["wideNoodles","gailan"],minTime:4,char:!0,say:"Spread them out and let them char",hint:"Leave them a moment, then toss. Repeat"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["pepper","chilli"],say:"Season",hint:"A dusting of white pepper. Chilli if you dare"}]},yakisoba:{id:"yakisoba",name:"Yakisoba",local:"焼きそば",cuisine:"japan",cooker:"teppan",blurb:"Pork, cabbage and noodles fried on the teppan in a sweet, tangy sauce.",weights:{sobaNoodles:1.5,porkBelly:1.1,cabbage:.9,carrot:.5},garnish:{aonori:[10,60],beniShoga:[2,10],katsuobushi:[3,16]},plate:{style:"glaze"},bowls:["porkBelly","cabbage","carrot","sobaNoodles"],steps:[{verb:"chop",item:"cabbage",cuts:5,say:"Shred the cabbage",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Heat the teppan",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["porkBelly"],say:"Pork belly on the steel",hint:"Tap to lay it on"},{verb:"cook",focus:["porkBelly"],minTime:2,say:"Sear the pork",hint:"Drag anywhere to push it round. Tap FLIP to turn it"},{verb:"add",items:["cabbage","carrot"],say:"Cabbage and carrot",hint:"Tap twice to tip both on"},{verb:"cook",focus:["cabbage","carrot"],minTime:2,say:"Fry until just soft",hint:"Tap FLIP to turn it all over"},{verb:"add",items:["sobaNoodles"],say:"Now the noodles",hint:"Tap to tip them on"},{verb:"pour",liquid:"yakisobaSauce",say:"Yakisoba sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["sobaNoodles"],minTime:3,say:"Flip until every noodle is glossy",hint:"Tap FLIP. The hotter the steel, the better the sear"},{verb:"plate",say:"Heap it on the plate",hint:"Tap anywhere"},{verb:"garnish",items:["aonori","beniShoga","katsuobushi"],say:"Toppings",hint:"Aonori, red ginger, and bonito flakes that dance"}]},okonomiyaki:{id:"okonomiyaki",name:"Okonomiyaki",local:"お好み焼き",cuisine:"japan",cooker:"teppan",cake:!0,blurb:"The Osaka pancake: cabbage batter and pork belly, flipped twice, sauced and dancing with bonito.",weights:{okonomiBase:2,porkBelly:1},garnish:{aonori:[10,60],katsuobushi:[4,20],beniShoga:[0,8]},plate:{style:"flat"},bowls:["porkBelly"],steps:[{verb:"chop",item:"cabbage",cuts:5,say:"Shred the cabbage",hint:"Swipe down anywhere to chop"},{verb:"mix",strokes:[8,14],say:"Mix the batter",hint:"Swipe back and forth anywhere. Do not overmix"},{verb:"heat",liquid:"oil",say:"Heat the teppan",hint:"Push the flame up, then hold to pour the oil"},{verb:"pancake",target:[.55,.8],say:"Pour the batter",hint:"Hold to pour a round. Let go in the green"},{verb:"top",items:["porkBelly"],say:"Lay the pork on top",hint:"Tap anywhere"},{verb:"flip",say:"Cook until golden underneath",hint:"When the bar is green, tap FLIP"},{verb:"flip",say:"Crisp the pork side",hint:"Golden again? FLIP it back"},{verb:"plate",say:"Onto the plate",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.6,.85],say:"Brush on the sauce",hint:"Hold to brush. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.55,.85],say:"Zigzag the mayo",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["aonori","katsuobushi","beniShoga"],say:"Aonori and bonito",hint:"Watch the bonito flakes dance in the heat"}]},takoyaki:{id:"takoyaki",name:"Takoyaki",local:"たこ焼き",cuisine:"japan",cooker:"takopan",blurb:"Osaka’s octopus balls: turned a quarter at a time in the iron until round and golden.",weights:{takoBall:2},garnish:{aonori:[10,60],katsuobushi:[4,20]},plate:{style:"fune"},bowls:["octopus","tenkasu","beniShoga","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Heat the takoyaki pan",hint:"Push the flame up, then hold to oil the wells"},{verb:"fill",target:[.85,1.05],say:"Fill the wells",hint:"Hold to pour. A little over the top is right"},{verb:"drop",items:["octopus","tenkasu","beniShoga","scallion"],say:"Octopus in every ball",hint:"Tap anywhere, then again for each topping"},{verb:"turn",say:"Turn them a quarter at a time",hint:"When the bar is green, tap TURN. Keep going till golden all round"},{verb:"plate",say:"Eight into the boat",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.6,.85],say:"Takoyaki sauce",hint:"Hold to brush. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.5,.85],say:"Zigzag the mayo",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["aonori","katsuobushi"],say:"Aonori and bonito",hint:"Watch the bonito flakes dance"}]},quesadilla:{id:"quesadilla",name:"Quesadilla",local:"Quesadilla",cuisine:"mexico",cooker:"teppan",cake:"tortilla",cakeRow:"quesaBase",blurb:"A corn tortilla folded over melting Oaxaca cheese, toasted on the comal.",weights:{quesaBase:2},garnish:{cilantro:[4,20],onionBits:[0,20]},finishColours:{sauce:10101264,mayo:16052454},plate:{style:"fiesta"},bowls:["tortilla","cheese"],steps:[{verb:"heat",say:"Heat the comal",hint:"Push the flame up and wait for it to get hot"},{verb:"top",items:["tortilla"],say:"Tortilla on the comal",hint:"Tap anywhere"},{verb:"top",items:["cheese"],say:"Oaxaca cheese on one half",hint:"Tap anywhere"},{verb:"fold",say:"Fold it when the cheese melts",hint:"When the bar is green, tap FOLD"},{verb:"flip",say:"Toast it golden underneath",hint:"When the bar is green, tap FLIP"},{verb:"flip",say:"Now the other side",hint:"Golden again? FLIP it back"},{verb:"plate",say:"Onto the plate",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.55,.85],say:"Salsa roja",hint:"Hold to spoon it on. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.5,.85],say:"A drizzle of crema",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["cilantro","onionBits"],say:"Coriander and onion",hint:"Tap a garnish to add it"}]},elote:{id:"elote",name:"Elote",local:"Elote asado",cuisine:"mexico",cooker:"grill",blurb:"Corn charred over the coals, rolled in mayo, cotija and chilli, with lime.",weights:{elote:2},garnish:{cotija:[16,80],chilli:[6,40],lime:[1,2]},finishColours:{sauce:10101264,mayo:16183516},plate:{style:"fiesta"},bowls:["corn"],steps:[{verb:"heat",say:"Fan the coals",hint:"Push the flame up until the coals glow"},{verb:"top",items:["corn"],say:"Corn on the grill",hint:"Tap anywhere"},{verb:"turn",say:"Char it all round",hint:"When the bar is green, tap TURN. A little black is good"},{verb:"plate",say:"Off the grill",hint:"Tap anywhere"},{verb:"drizzle",what:"mayo",target:[.55,.85],say:"Brush on the mayo",hint:"Hold to brush. Let go in the green"},{verb:"garnish",items:["cotija","chilli","lime"],say:"Cotija, chilli and lime",hint:"Tap a garnish to add it"}]},pastor:{id:"pastor",name:"Tacos al Pastor",local:"Tacos al pastor",cuisine:"mexico",cooker:"teppan",blurb:"Pork shaved off the trompo, crisped on the plancha, with pineapple and salsa verde.",weights:{pastor:2},garnish:{pineapple:[3,12],onionBits:[8,40],cilantro:[8,40],salsaVerde:[6,40],lime:[1,2]},plate:{style:"tacos"},bowls:[],steps:[{verb:"heat",liquid:"oil",say:"Heat the plancha",hint:"Push the flame up, then hold to pour a little oil"},{verb:"shave",cuts:6,item:"pastor",say:"Shave the pork off the trompo",hint:"Swipe down anywhere, in the green"},{verb:"cook",focus:["pastor"],minTime:2,say:"Crisp it on the plancha",hint:"Let it catch a little, then FLIP"},{verb:"plate",say:"Onto the tortillas",hint:"Tap anywhere"},{verb:"garnish",items:["pineapple","onionBits","cilantro","salsaVerde","lime"],say:"Pineapple, onion, coriander, salsa",hint:"Tap a garnish to add it"}]},padthai:{id:"padthai",name:"Pad Thai",local:"ผัดไทย",cuisine:"thai",blurb:"Rice noodles, prawns and egg, tossed hard in tamarind over a roaring flame.",weights:{prawn:1.3,noodles:1.4,egg:.9,tofu:.8,garlic:.6,shallot:.5,sprouts:.7,chives:.5},garnish:{peanuts:[12,70],chilli:[4,40],lime:[1,2],freshSprouts:[3,16],freshChives:[2,14]},plate:{leaf:!0,rice:!1},bowls:["garlic","shallot","tofu","prawn","egg","noodles","sprouts","chives"],steps:[{verb:"chop",item:"chives",cuts:6,say:"Chop the garlic chives",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","shallot","tofu"],say:"Garlic, shallot and tofu",hint:"Tap to tip each bowl in"},{verb:"cook",focus:["garlic","shallot","tofu"],minTime:3,say:"Fry until golden",hint:"Drag anywhere to stir. Tap TOSS. Do not let it sit"},{verb:"add",items:["prawn"],say:"In with the prawns",hint:"Tap to tip it in"},{verb:"cook",focus:["prawn"],minTime:3,say:"Cook the prawns until pink",hint:"Grey means raw. Toss them"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"cook",focus:["egg"],minTime:2,say:"Scramble the egg",hint:"Stir it through before it sets flat"},{verb:"add",items:["noodles"],say:"Now the noodles",hint:"Tap to tip it in"},{verb:"pour",liquid:"tamarind",say:"Pour the tamarind sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["noodles"],minTime:4,say:"Toss until the noodles drink it up",hint:"Keep them moving. Toss for wok hei"},{verb:"add",items:["sprouts","chives"],say:"Bean sprouts and chives",hint:"Tap twice to tip both in"},{verb:"cook",focus:["sprouts","chives"],minTime:1.5,say:"A quick toss, keep them crunchy",hint:"Seconds, not minutes"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["peanuts","chilli","lime","freshSprouts","freshChives"],say:"Garnish",hint:"Pick a garnish, then drag or tap on the plate"}]}},Ji=[{id:"thai",name:"Thailand",place:"Bangkok night market",stall:"bangkok",judge:"Auntie Noi",hei:"Wok hei",heiGood:"Proper wok hei. Smoky, like Yaowarat at midnight.",heiNone:"Toss it! The flame is what makes it taste of the street.",dishes:["khaopad","krapao","padseeew","padthai"],soon:["Tom Yum Goong","Green Curry","Som Tam","Mango Sticky Rice"]},{id:"japan",name:"Japan",place:"Osaka yatai",stall:"osaka",judge:"Kenji-san",hei:"Teppan sear",heiGood:"That is a proper sear. You can smell it from Dotonbori.",heiNone:"Turn it more on the hot steel. It needs the sear.",dishes:["yakisoba","okonomiyaki","takoyaki"],soon:["Gyoza","Ramen","Karaage"]},{id:"italy",name:"Italy",place:"Naples",soon:["Carbonara","Margherita"]},{id:"mexico",name:"Mexico",place:"Mexico City",stall:"cdmx",judge:"Doña Lupe",hei:"Plancha sear",heiGood:"That char is perfect. Like the stands in Coyoacán.",heiNone:"Hotter! The plancha has to sing.",dishes:["quesadilla","elote","pastor"],soon:["Tamales","Churros","Pozole"]},{id:"india",name:"India",place:"Mumbai",soon:["Pav Bhaji","Butter Chicken"]}],tn={garlic:{name:"Garlic",shape:"bit",count:30,r:.0036,mass:.2,raw:15919826,cooked:14724184,over:9720350,cookTime:5.5,band:[.8,1.25],burnAt:1.7,gloss:.55,rough:.45},shallot:{name:"Shallot",shape:"ring",count:16,r:.0075,mass:.25,raw:14197428,cooked:13602124,over:8143390,cookTime:5.5,band:[.8,1.3],burnAt:1.8,gloss:.6,rough:.4},tofu:{name:"Tofu",shape:"cube",count:12,r:.0105,mass:1,raw:15852736,cooked:14457662,over:9325596,cookTime:5.5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.55},prawn:{name:"Prawns",shape:"prawn",count:7,r:.019,mass:2,raw:11778230,cooked:16298636,over:14913892,cookTime:7,band:[.9,1.25],burnAt:1.9,gloss:.8,rough:.32,shrink:.86},egg:{name:"Egg",shape:"curd",count:14,r:.0125,mass:.8,raw:15656644,cooked:16773576,over:13605458,cookTime:5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.5},noodles:{name:"Rice noodles",shape:"strand",strands:30,points:11,spacing:.019,width:.0095,r:.0062,mass:.35,raw:15920352,cooked:14260058,over:9062946,cookTime:9,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.55,rough:.38},sprouts:{name:"Bean sprouts",shape:"sprout",count:16,r:.0095,mass:.3,raw:16118494,cooked:14470030,over:9072704,cookTime:3.5,band:[.2,.7],burnAt:1.6,gloss:.45,rough:.4},chives:{name:"Garlic chives",shape:"segment",count:14,r:.0085,mass:.2,raw:4164650,cooked:3501856,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.6,bunch:{style:"blade",colour:4164650}},scallion:{name:"Spring onion",shape:"segment",count:14,r:.0085,mass:.2,raw:6466878,cooked:4950572,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.5,bunch:{style:"blade",colour:6466878,base:15659740}},rice:{name:"Jasmine rice",shape:"clump",count:100,r:.0075,mass:.4,raw:16184300,cooked:15851442,over:11565626,cookTime:6,band:[.85,1.4],burnAt:2.2,gloss:.35,rough:.5,coatTint:.3},birdChilli:{name:"Bird’s eye chillies",shape:"ring",count:16,r:.0042,mass:.1,raw:14165532,cooked:11803666,over:5903372,cookTime:4,band:[.5,1.3],burnAt:1.9,gloss:.7,rough:.35,bunch:{style:"pods",colour:14165532,base:4160038}},mince:{name:"Chicken mince",shape:"mince",count:40,r:.0078,mass:.6,raw:15511204,cooked:15391938,over:11039804,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.7},basil:{name:"Holy basil",shape:"leaf",count:22,r:.0105,mass:.1,raw:4165424,cooked:2842142,over:1979154,cookTime:2.5,band:[.3,.9],burnAt:1.5,gloss:.55,rough:.4,coatTint:.25,sheen:.7},chickenSlice:{name:"Chicken",shape:"slice",count:14,r:.0115,mass:1,raw:15775404,cooked:15851974,over:11565632,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.55},gailan:{name:"Chinese broccoli",shape:"gailan",count:12,r:.013,mass:.5,raw:8370266,cooked:5085750,over:3362846,cookTime:3.5,band:[.5,1.15],burnAt:1.8,gloss:.55,rough:.4,coatTint:.25,sheen:.4,bunch:{style:"stalk",colour:8370266,base:3111466}},wideNoodles:{name:"Wide rice noodles",shape:"strand",strands:16,points:8,spacing:.022,width:.021,r:.0095,mass:.5,raw:16117990,cooked:9064488,over:4858898,cookTime:7,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.6,rough:.35,charWant:[.08,.4]},porkBelly:{name:"Pork belly",shape:"belly",count:10,r:.013,mass:.8,raw:15910076,cooked:15189146,over:10115626,cookTime:5.5,band:[.9,1.45],burnAt:2.1,gloss:.6,rough:.4,coatTint:.45},cabbage:{name:"Cabbage",shape:"cabbage",count:18,r:.012,mass:.3,raw:14478532,cooked:13228442,over:9079370,cookTime:4,band:[.5,1.15],burnAt:1.8,gloss:.5,rough:.4,coatTint:.4,bunch:{style:"head",colour:13953208,base:10273914}},carrot:{name:"Carrot",shape:"baton",count:14,r:.0075,mass:.2,raw:15764010,cooked:15235114,over:9058836,cookTime:4,band:[.5,1.2],burnAt:1.8,gloss:.5,rough:.4,coatTint:.25},sobaNoodles:{name:"Yakisoba noodles",shape:"strand",strands:32,points:11,spacing:.018,width:.0042,r:.0052,mass:.3,raw:15257478,cooked:9062946,over:4858896,cookTime:7,band:[.85,1.35],burnAt:2.2,needsSauce:!0,gloss:.7,rough:.35},okonomiBase:{name:"Okonomiyaki",shape:"none",virtual:!0,r:.08,mass:10,count:0,raw:15919304,cooked:13666876,over:5911064,cookTime:9,band:[.85,1.35],burnAt:1.75},takoBall:{name:"Takoyaki",shape:"none",virtual:!0,r:.02,mass:2,count:0,raw:16050896,cooked:14258750,over:9062942,cookTime:5.5,band:[.8,1.4],burnAt:1.8},quesaBase:{name:"Quesadilla",shape:"none",virtual:!0,r:.08,mass:5,count:0,raw:16048808,cooked:14196816,over:8014364,cookTime:5.5,band:[.8,1.3],burnAt:1.7},elote:{name:"Elote",shape:"none",virtual:!0,r:.03,mass:3,count:0,raw:16179328,cooked:15249472,over:6965786,cookTime:5.5,band:[.8,1.45],burnAt:1.8,charWant:[.06,.4]},pastor:{name:"Al pastor",shape:"slice",count:1,r:.0115,mass:.5,raw:15755830,cooked:13781532,over:5904906,cookTime:5,band:[.9,1.45],burnAt:2.1,gloss:.7,rough:.35,charWant:[.04,.35]},tortilla:{name:"Tortilla",shape:"tortillaDisc",topping:!0,count:3,r:.035,mass:1,raw:16048808,cooked:16048808,over:16048808,gloss:.1,rough:.75},cheese:{name:"Oaxaca cheese",shape:"baton",topping:!0,count:22,r:.006,mass:.1,raw:16182988,cooked:16182988,over:16182988,gloss:.3,rough:.5},corn:{name:"Corn cobs",shape:"cob",topping:!0,count:2,r:.02,mass:2,raw:16777215,cooked:16777215,over:16777215,gloss:.4,rough:.45},octopus:{name:"Octopus",shape:"octo",topping:!0,count:12,r:.0065,mass:.3,raw:16777215,cooked:16777215,over:16777215,gloss:.8,rough:.35},tenkasu:{name:"Tenkasu",shape:"bit",topping:!0,count:30,r:.004,mass:.05,raw:15782538,cooked:15782538,over:15782538,gloss:.3,rough:.6},peanuts:{name:"Crushed peanuts",shape:"peanut",count:1,r:.0042,mass:.1,garnish:!0,raw:13212252,cooked:13212252,over:13212252,gloss:.25,rough:.6},chilli:{name:"Chilli flakes",shape:"flake",count:1,r:.0026,mass:.05,garnish:!0,raw:11805210,cooked:11805210,over:11805210,gloss:.2,rough:.6},lime:{name:"Lime wedge",shape:"wedge",count:1,r:.017,colR:.008,mass:1.5,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.7,rough:.35},freshSprouts:{name:"Fresh sprouts",shape:"sprout",count:1,r:.0095,colR:.0045,mass:.3,garnish:!0,raw:16118494,cooked:16118494,over:16118494,gloss:.45,rough:.4},freshChives:{name:"Chive tips",shape:"segment",count:1,r:.0085,colR:.0035,mass:.2,garnish:!0,raw:4889136,cooked:4889136,over:4889136,gloss:.5,rough:.45,sheen:.6},cucumber:{name:"Cucumber",shape:"disc",count:1,r:.014,colR:.0055,mass:.8,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.35},freshScallion:{name:"Spring onion",shape:"segment",count:1,r:.0085,colR:.0035,mass:.2,garnish:!0,raw:7125062,cooked:7125062,over:7125062,gloss:.5,rough:.45,sheen:.5},friedEgg:{name:"Fried egg",shape:"friedEgg",count:1,r:.03,colR:.007,mass:3,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.3},pepper:{name:"White pepper",shape:"flake",count:1,r:.0016,mass:.02,garnish:!0,raw:12103072,cooked:12103072,over:12103072,gloss:.1,rough:.8},aonori:{name:"Aonori",shape:"flake",count:1,r:.0018,mass:.02,garnish:!0,raw:4160034,cooked:4160034,over:4160034,gloss:.1,rough:.8},beniShoga:{name:"Red ginger",shape:"baton",count:1,r:.0055,colR:.003,mass:.1,garnish:!0,raw:14688330,cooked:14688330,over:14688330,gloss:.8,rough:.3},katsuobushi:{name:"Bonito flakes",shape:"bonito",count:1,r:.009,colR:.004,mass:.02,garnish:!0,dances:!0,raw:14197882,cooked:14197882,over:14197882,gloss:.2,rough:.6},onionBits:{name:"Onion",shape:"bit",count:1,r:.0035,mass:.05,garnish:!0,raw:16052468,cooked:16052468,over:16052468,gloss:.5,rough:.4},cilantro:{name:"Coriander",shape:"leaf",count:1,r:.0055,colR:.003,mass:.02,garnish:!0,raw:4168238,cooked:4168238,over:4168238,gloss:.4,rough:.45,sheen:.6},pineapple:{name:"Pineapple",shape:"cube",count:1,r:.007,mass:.3,garnish:!0,raw:15912e3,cooked:15912e3,over:15912e3,gloss:.8,rough:.3},salsaVerde:{name:"Salsa verde",shape:"curd",count:1,r:.004,colR:.0025,mass:.05,garnish:!0,raw:5937712,cooked:5937712,over:5937712,gloss:1,rough:.15},cotija:{name:"Cotija",shape:"bit",count:1,r:.003,mass:.03,garnish:!0,raw:16184038,cooked:16184038,over:16184038,gloss:.1,rough:.7}},kn={oil:{name:"Oil",colour:14266954,target:[.45,.68],rate:.32},tamarind:{name:"Tamarind sauce",colour:6040082,target:[.52,.74],rate:.28},fishSauce:{name:"Fish sauce",colour:11036190,target:[.36,.56],rate:.26},krapao:{name:"Kra Pao sauce",colour:4070412,target:[.46,.66],rate:.27},darkSoy:{name:"Dark soy sauce",colour:2757128,target:[.5,.7],rate:.27},yakisobaSauce:{name:"Yakisoba sauce",colour:3939340,target:[.5,.72],rate:.27}};function _u(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new be;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=eh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);const m=eh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function eh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Le(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const x=h.getComponent(u,m);a.setComponent(u+f,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}let hv=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};const Jo=new Map;function fe(i,t){return hv(i,t)}function de(i,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const s=new hx(i);return t&&(s.colorSpace=hn),e&&(s.wrapS=s.wrapT=wi),s.anisotropy=n,s}function pe(i,t){return Jo.has(i)||Jo.set(i,t()),Jo.get(i)}function De(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function er(){return pe("softDot",()=>{const i=fe(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),de(i)})}function uv(){return pe("steam",()=>{const i=fe(128,128),t=i.getContext("2d"),e=De(7);for(let n=0;n<14;n++){const s=40+e()*48,r=40+e()*48,o=14+e()*26,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill()}return de(i)})}function fv(){return pe("flame",()=>{const i=fe(64,128),t=i.getContext("2d"),e=t.createRadialGradient(32,100,2,32,80,60);return e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,190,70,0.95)"),e.addColorStop(.6,"rgba(240,90,20,0.55)"),e.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(32,4),t.bezierCurveTo(58,50,60,110,32,124),t.bezierCurveTo(4,110,6,50,32,4),t.fill(),de(i)})}function dv(){return pe("blueFlame",()=>{const i=fe(32,64),t=i.getContext("2d"),e=t.createLinearGradient(0,64,0,0);return e.addColorStop(0,"rgba(120,170,255,0.95)"),e.addColorStop(.5,"rgba(60,110,255,0.6)"),e.addColorStop(1,"rgba(40,60,255,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,0),t.quadraticCurveTo(32,40,16,64),t.quadraticCurveTo(0,40,16,0),t.fill(),de(i)})}function pv(){return pe("board",()=>{const i=fe(512,512),t=i.getContext("2d"),e=De(31);t.fillStyle="#a8723e",t.fillRect(0,0,512,512);const n=180,s=620;for(let o=20;o<900;o+=6+e()*7)t.strokeStyle=`rgba(${90+e()*30},${52+e()*20},24,${.18+e()*.22})`,t.lineWidth=2+e()*3,t.beginPath(),t.arc(n,s,o,0,Math.PI*2),t.stroke();for(let o=0;o<160;o++){const a=e()*512,l=e()*512,c=(e()-.5)*.6+(e()<.5?0:Math.PI/2),h=10+e()*50;t.strokeStyle=`rgba(220,180,130,${.1+e()*.12})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,l),t.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}const r=t.createRadialGradient(256,256,60,256,256,300);return r.addColorStop(0,"rgba(60,30,10,0.18)"),r.addColorStop(1,"rgba(60,30,10,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),de(i)})}function nh(){return pe("brushed",()=>{const i=fe(256,256),t=i.getContext("2d"),e=De(11);t.fillStyle="rgb(96,96,96)",t.fillRect(0,0,256,256);for(let n=0;n<900;n++){const s=e()*256,r=70+e()*70;t.fillStyle=`rgba(${r},${r},${r},0.35)`,t.fillRect(0,s,256,1+e()*1.5)}for(let n=0;n<20;n++){const s=e()*256,r=e()*256,o=12+e()*40,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(150,150,150,0.35)"),a.addColorStop(1,"rgba(150,150,150,0)"),t.fillStyle=a,t.fillRect(s-o,r-o,o*2,o*2)}return de(i,{srgb:!1,repeat:!0})})}function mv(){return pe("wok",()=>{const i=fe(512,512),t=i.getContext("2d"),e=De(5),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#15110e"),n.addColorStop(.22,"#201813"),n.addColorStop(.4,"#2c2a31"),n.addColorStop(.49,"#56565a"),n.addColorStop(.52,"#3a3e4c"),n.addColorStop(.7,"#1c1714"),n.addColorStop(1,"#0e0b09"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=0;s<400;s++){const r=e()*512,o=e()*512,a=20+e()*90;t.fillStyle=`rgba(${e()<.5?"90,60,30":"10,8,6"},${.05+e()*.08})`,t.fillRect(r,o,a,2+e()*3)}return de(i,{repeat:!0})})}function gv(){return pe("leaf",()=>{const i=fe(512,512),t=i.getContext("2d"),e=De(19);t.fillStyle="#3f7d2a",t.fillRect(0,0,512,512);const n=t.createLinearGradient(0,0,512,0);n.addColorStop(0,"rgba(20,50,10,0.35)"),n.addColorStop(.5,"rgba(120,170,60,0.18)"),n.addColorStop(1,"rgba(20,50,10,0.35)"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=-40;s<560;s+=5+e()*4)t.strokeStyle=`rgba(${150+e()*40},${200+e()*30},110,${.16+e()*.16})`,t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(512,s+40),t.stroke();t.fillStyle="rgba(190,215,140,0.55)",t.fillRect(0,250,512,10);for(let s=0;s<30;s++)t.fillStyle=`rgba(110,90,40,${.15+e()*.2})`,t.fillRect(e()*512,e()*512,2+e()*4,2+e()*3);return de(i)})}function xv(){return pe("plateRim",()=>{const i=fe(512,64),t=i.getContext("2d");t.fillStyle="#f3f1ea",t.fillRect(0,0,512,64),t.fillStyle="#2f5aa0",t.fillRect(0,44,512,5),t.fillRect(0,54,512,3);for(let e=0;e<512;e+=32)t.beginPath(),t.arc(e+16,30,7,0,Math.PI*2),t.fill(),t.fillRect(e+4,28,24,3);return de(i,{repeat:!0})})}function yu(){return pe("street",()=>{const i=fe(512,512),t=i.getContext("2d"),e=De(23);t.fillStyle="#2c2b2a",t.fillRect(0,0,512,512);for(let n=0;n<512;n+=64)for(let s=0;s<512;s+=64){const r=44+e()*18;t.fillStyle=`rgb(${r},${r-2},${r-4})`,t.fillRect(s+2,n+2,60,60)}for(let n=0;n<60;n++)t.fillStyle=`rgba(0,0,0,${.1+e()*.2})`,t.beginPath(),t.arc(e()*512,e()*512,6+e()*30,0,Math.PI*2),t.fill();return de(i,{repeat:!0})})}function vv(i="#c8322b",t="#efe6d2"){return pe("canopy"+i+t,()=>{const e=fe(256,256),n=e.getContext("2d");for(let r=0;r<256;r+=32)n.fillStyle=r/32%2?t:i,n.fillRect(r,0,32,256);const s=De(3);for(let r=0;r<40;r++)n.fillStyle=`rgba(0,0,0,${.03+s()*.05})`,n.fillRect(0,s()*256,256,2+s()*8);return de(e,{repeat:!0})})}function Al(i,{w:t=512,h:e=256,bg:n="#10131a",fg:s="#ffd23c",glow:r="#ff7a1a",box:o=!1}={}){return pe("sign"+i.join("|")+n+s,()=>{const a=fe(t,e),l=a.getContext("2d");if(l.fillStyle=n,l.fillRect(0,0,t,e),o){const h=l.createLinearGradient(0,0,0,e);h.addColorStop(0,"rgba(255,255,255,0.12)"),h.addColorStop(1,"rgba(0,0,0,0.2)"),l.fillStyle=h,l.fillRect(0,0,t,e)}l.textAlign="center",l.textBaseline="middle";const c=i.length;return i.forEach((h,f)=>{const u=Math.floor(f===0?e*(c>1?.42:.6):e*.22);l.font=`700 ${u}px "Thonburi","Leelawadee UI","Noto Sans Thai","Sukhumvit Set",sans-serif`;const d=c>1?f===0?e*.4:e*.8:e*.52;l.shadowColor=r,l.shadowBlur=o?0:18,l.fillStyle=s,l.fillText(h,t/2,d),o||(l.shadowBlur=6,l.fillText(h,t/2,d))}),de(a)})}function _v(){return pe("backdrop",()=>{const e=fe(2048,768),n=e.getContext("2d"),s=De(41),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0b0d1a"),r.addColorStop(.55,"#1b1626"),r.addColorStop(1,"#2a1a18"),n.fillStyle=r,n.fillRect(0,0,2048,768);let o=0;for(;o<2048;){const l=160+s()*200,c=768*(.55+s()*.35);n.fillStyle=`rgb(${18+s()*14},${16+s()*12},${20+s()*14})`,n.fillRect(o,768-c,l,c);for(let h=768-c+30;h<628;h+=58)for(let f=o+16;f<o+l-30;f+=44){if(s()<.45)continue;const u=s()<.7;n.fillStyle=u?`rgba(255,${170+s()*50},${90+s()*40},${.18+s()*.25})`:`rgba(140,200,255,${.12+s()*.18})`,n.fillRect(f,h,16,22)}s()<.6&&(n.fillStyle=`rgba(255,${190+s()*40},120,${.25+s()*.25})`,n.fillRect(o+10,638,l-20,120)),o+=l+4}n.strokeStyle="rgba(0,0,0,0.7)",n.lineWidth=2;for(let l=0;l<7;l++){const c=60+s()*200;n.beginPath(),n.moveTo(0,c),n.quadraticCurveTo(2048/2,c+60+s()*60,2048,c+(s()-.5)*80),n.stroke()}const a=["255,190,90","255,150,80","255,90,170","110,200,255","255,230,170"];for(let l=0;l<90;l++){const c=s()*2048,h=768*(.35+s()*.6),f=5+s()*16,u=a[Math.floor(s()*a.length)],d=n.createRadialGradient(c,h,0,c,h,f),m=.1+s()*.22;d.addColorStop(0,`rgba(${u},${m})`),d.addColorStop(.8,`rgba(${u},${m*.8})`),d.addColorStop(1,`rgba(${u},0)`),n.fillStyle=d,n.beginPath(),n.arc(c,h,f,0,Math.PI*2),n.fill()}return de(e)})}function yv(i){return pe("cond"+i,()=>{const t=fe(64,64),e=t.getContext("2d"),n=De(i.length*13),s={sugar:"#efe9dc",flakes:"#9c2418",fish:"#b0701e",vinegar:"#e8dfc8"}[i];e.fillStyle=s,e.fillRect(0,0,64,64);for(let r=0;r<90;r++){const o=i==="sugar"?"rgba(255,255,255,0.5)":i==="flakes"?"rgba(230,120,40,0.6)":"rgba(200,40,20,0.7)";e.fillStyle=o,e.fillRect(n()*64,n()*64,2+n()*2,2+n()*2)}return de(t)})}const Mu='"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic","Noto Sans JP","Noto Sans CJK JP",sans-serif',wu='"Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif';function Qo(i=!0){return pe("planks"+i,()=>{const t=fe(512,512),e=t.getContext("2d"),n=De(i?61:67),s=i?[78,48,30]:[214,178,128];for(let r=0;r<512;r+=64){const o=.88+n()*.2;e.fillStyle=`rgb(${s[0]*o|0},${s[1]*o|0},${s[2]*o|0})`,e.fillRect(0,r,512,64);for(let a=0;a<30;a++){const l=r+n()*64;e.strokeStyle=`rgba(${i?"30,16,8":"150,110,60"},${.12+n()*.18})`,e.lineWidth=2,e.beginPath(),e.moveTo(0,l),e.bezierCurveTo(170,l+(n()-.5)*8,340,l+(n()-.5)*8,512,l),e.stroke()}e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(0,r,512,2)}return de(t,{repeat:!0})})}function bu(){return pe("teppan",()=>{const i=fe(512,512),t=i.getContext("2d"),e=De(71);t.fillStyle="#1b1a1a",t.fillRect(0,0,512,512);for(let s=0;s<260;s++){t.strokeStyle=`rgba(${e()<.5?"120,110,100":"40,30,20"},${.05+e()*.08})`,t.lineWidth=2+e()*3;const r=e()*512,o=e()*512,a=e()*Math.PI;t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(a)*60,o+Math.sin(a)*60),t.stroke()}const n=t.createRadialGradient(256,256,40,256,256,300);return n.addColorStop(0,"rgba(60,40,20,0.25)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,512,512),de(i)})}function ih(i){return pe("noren"+i,()=>{const n=fe(1024,384),s=n.getContext("2d");s.fillStyle="#1d2e5c",s.fillRect(0,0,1024,384);const r=De(73);for(let a=0;a<400;a++)s.fillStyle=`rgba(255,255,255,${r()*.04})`,s.fillRect(r()*1024,r()*384,2,2+r()*6);const o=i.length;s.fillStyle="rgba(0,0,0,0.5)";for(let a=1;a<o;a++)s.fillRect(1024/o*a-3,384*.25,6,384);return s.fillStyle="#f4f0e6",s.textAlign="center",s.textBaseline="middle",s.font=`700 ${384*.5}px ${wu}`,[...i].forEach((a,l)=>s.fillText(a,1024/o*(l+.5),384*.58)),de(n)})}function sh(i){return pe("lantern"+i,()=>{const t=fe(256,256),e=t.getContext("2d"),n=e.createRadialGradient(128,128,20,128,128,180);n.addColorStop(0,"#ffb070"),n.addColorStop(.5,"#e8401c"),n.addColorStop(1,"#8a1a0c"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="rgba(80,10,0,0.35)",e.lineWidth=2;for(let s=8;s<256;s+=16)e.beginPath(),e.moveTo(0,s),e.lineTo(256,s),e.stroke();return e.fillStyle="#1a0a06",e.textAlign="center",e.textBaseline="middle",e.font=`700 150px ${wu}`,e.fillText(i,128,136),de(t,{repeat:!0})})}function Mv(i,t="#d8261c",e="#ffffff"){return pe("nobori"+i+t,()=>{const r=fe(128,512),o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,128,512),o.fillStyle="rgba(255,255,255,0.9)",o.fillRect(0,0,128,14);for(let c=30;c<512;c+=40)o.fillRect(0,c,8,6);o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";const a=i.length,l=Math.min(96,452/a);return o.font=`900 ${l}px ${Mu}`,[...i].forEach((c,h)=>o.fillText(c,128/2+4,40+l*(h+.5))),de(r)})}function wv(){return pe("glaze",()=>{const i=fe(256,256),t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#2b2a3a"),e.addColorStop(.7,"#3a2e2c"),e.addColorStop(1,"#a58a66"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=De(83);for(let s=0;s<500;s++)t.fillStyle=`rgba(${n()<.5?"200,180,150":"10,8,12"},${.2+n()*.3})`,t.fillRect(n()*256,n()*256,2,2);return de(i,{repeat:!0})})}function no(){return pe("speckle",()=>{const i=fe(256,256),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);const e=De(89);for(let n=0;n<700;n++)t.fillStyle=`rgba(90,60,40,${.15+e()*.35})`,t.fillRect(e()*256,e()*256,2,2);return de(i,{repeat:!0})})}function bv(){return pe("pine",()=>{const i=fe(256,256),t=i.getContext("2d");t.fillStyle="#e2c79a",t.fillRect(0,0,256,256);const e=De(97);for(let n=0;n<26;n++){t.strokeStyle=`rgba(170,120,60,${.15+e()*.2})`,t.lineWidth=2+e()*2;const s=e()*256;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(90,s+6,170,s-6,256,s),t.stroke()}return de(i,{repeat:!0})})}function Sv(){return pe("osaka",()=>{const e=fe(2048,768),n=e.getContext("2d"),s=De(101),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#070914"),r.addColorStop(.6,"#161226"),r.addColorStop(1,"#241616"),n.fillStyle=r,n.fillRect(0,0,2048,768);const o=["たこ焼","お好み焼","ラーメン","串カツ","居酒屋","寿司","大阪","食堂","焼きそば"],a=["#ff3c6e","#ffd23c","#3ce0ff","#ff8a2a","#8aff5a","#ff5ae0"];let l=0;for(;l<2048;){const c=120+s()*160,h=768*(.6+s()*.38);n.fillStyle=`rgb(${14+s()*12},${12+s()*10},${18+s()*14})`,n.fillRect(l,768-h,c,h);for(let f=768-h+20;f<648;f+=40)for(let u=l+10;u<l+c-20;u+=30)s()<.55||(n.fillStyle=`rgba(255,${200+s()*40},${150+s()*60},${.1+s()*.2})`,n.fillRect(u,f,12,18));if(s()<.8){const f=o[Math.floor(s()*o.length)],u=a[Math.floor(s()*a.length)],d=l+c*(.2+s()*.6),m=768-h+30+s()*60,x=34+s()*16;n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(d-x*.62,m-10,x*1.24,x*f.length+20),n.font=`900 ${x}px ${Mu}`,n.textAlign="center",n.textBaseline="top",n.shadowColor=u,n.shadowBlur=18,n.fillStyle=u,[...f].forEach((p,g)=>n.fillText(p,d,m+g*x)),n.shadowBlur=0}n.fillStyle=`rgba(255,${170+s()*50},110,${.18+s()*.2})`,n.fillRect(l+8,658,c-16,100),l+=c+3}for(let c=0;c<3;c++){const h=250+c*90;for(let f=0;f<40;f++){const u=f*51.2+20,d=h+Math.sin(f*.9)*10,m=n.createRadialGradient(u,d,0,u,d,14);m.addColorStop(0,"rgba(255,190,110,0.8)"),m.addColorStop(1,"rgba(255,90,40,0)"),n.fillStyle=m,n.beginPath(),n.arc(u,d,14,0,Math.PI*2),n.fill()}}for(let c=0;c<70;c++){const h=s()*2048,f=768*(.4+s()*.55),u=5+s()*14,d=n.createRadialGradient(h,f,0,h,f,u),m=.1+s()*.2;d.addColorStop(0,`rgba(255,200,140,${m})`),d.addColorStop(1,"rgba(255,200,140,0)"),n.fillStyle=d,n.beginPath(),n.arc(h,f,u,0,Math.PI*2),n.fill()}return de(e)})}function Su(){return pe("batterCabbage",()=>{const i=fe(512,512),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,512,512);const e=De(107);for(let n=0;n<700;n++){const s=e()*512,r=e()*512,o=e()*Math.PI,a=10+e()*30,l=e();t.strokeStyle=l<.75?`rgba(${200+e()*40},${230+e()*25},${170+e()*40},0.9)`:l<.9?"rgba(90,160,60,0.9)":"rgba(220,60,90,0.9)",t.lineWidth=l<.75?3:2.5,t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()}for(let n=0;n<500;n++)t.fillStyle=`rgba(160,120,70,${e()*.25})`,t.beginPath(),t.arc(e()*512,e()*512,2+e()*5,0,Math.PI*2),t.fill();return de(i)})}function Tv(i){return pe("papel"+i,()=>{const t=fe(128,160),e=t.getContext("2d");e.fillStyle=i,e.fillRect(0,0,128,160),e.globalCompositeOperation="destination-out";for(let n=10;n<128;n+=18)e.beginPath(),e.moveTo(n,14),e.lineTo(n+5,20),e.lineTo(n,26),e.lineTo(n-5,20),e.fill();for(let n=0;n<8;n++){const s=n/8*Math.PI*2;e.beginPath(),e.ellipse(64+Math.cos(s)*18,78+Math.sin(s)*18,9,5,s,0,Math.PI*2),e.fill()}e.beginPath(),e.arc(64,78,7,0,Math.PI*2),e.fill();for(let n=8;n<128;n+=16)e.beginPath(),e.arc(n,160,7,0,Math.PI*2),e.fill();for(let n=16;n<116;n+=25)e.fillRect(n,118,10,10);return e.globalCompositeOperation="source-over",de(t)})}function Ev(i="#e8307a",t="#f0a8c8"){return pe("lona"+i,()=>{const e=fe(256,256),n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,256,256);const s=De(113);for(let r=0;r<256;r+=32)n.fillStyle=t,n.globalAlpha=.35,n.fillRect(0,r,256,6),n.globalAlpha=1;for(let r=0;r<60;r++)n.fillStyle=`rgba(255,255,255,${s()*.06})`,n.fillRect(s()*256,s()*256,30+s()*60,2+s()*10);return de(e,{repeat:!0})})}function Cl(){return pe("tortilla",()=>{const i=fe(256,256),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);const e=De(127);for(let n=0;n<220;n++)t.fillStyle=`rgba(180,130,60,${.08+e()*.22})`,t.beginPath(),t.arc(e()*256,e()*256,2+e()*7,0,Math.PI*2),t.fill();for(let n=0;n<400;n++)t.fillStyle=`rgba(120,90,40,${e()*.2})`,t.fillRect(e()*256,e()*256,2,2);return de(i)})}function Av(){return pe("corn",()=>{const i=fe(256,256),t=i.getContext("2d");t.fillStyle="#b8902a",t.fillRect(0,0,256,256);for(let e=0;e<256;e+=16)for(let n=e/16%2?8:0;n<256;n+=16){const s=t.createRadialGradient(n+7,e+6,1,n+8,e+8,9);s.addColorStop(0,"#fff2a0"),s.addColorStop(.7,"#f0c840"),s.addColorStop(1,"#b8902a"),t.fillStyle=s,t.beginPath(),t.ellipse(n+8,e+8,7,7.5,0,0,Math.PI*2),t.fill()}return de(i,{repeat:!0})})}function Cv(){return pe("pastor",()=>{const i=fe(256,256),t=i.getContext("2d"),e=De(131);for(let n=0;n<256;n+=6+e()*6)t.fillStyle=`rgb(${190+e()*40},${60+e()*30},${20+e()*20})`,t.fillRect(0,n,256,12),t.fillStyle=`rgba(60,16,6,${.3+e()*.4})`,t.fillRect(0,n,256,2);for(let n=0;n<90;n++)t.fillStyle=`rgba(40,12,4,${.3+e()*.4})`,t.beginPath(),t.arc(e()*256,e()*256,2+e()*6,0,Math.PI*2),t.fill();return de(i,{repeat:!0})})}function Rv(){return pe("cdmx",()=>{const e=fe(2048,768),n=e.getContext("2d"),s=De(137),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0a0c1c"),r.addColorStop(.6,"#1c1830"),r.addColorStop(1,"#2a1c1a"),n.fillStyle=r,n.fillRect(0,0,2048,768);const o=["#b8487a","#c89a3a","#3a6aa8","#3a9a7a","#c86a3a","#8a4ab0"],a=["TACOS","AL PASTOR","ABIERTO","ELOTES","TORTILLERÍA","QUESADILLAS","MERCADO","LA ESQUINA"],l=["#ffd23c","#ff5aa0","#5ae0ff","#8aff6a","#ff8a3a"];let c=0;for(;c<2048;){const h=170+s()*190,f=768*(.42+s()*.25),u=o[Math.floor(s()*o.length)];n.fillStyle=u,n.globalAlpha=.55,n.fillRect(c,768-f,h,f),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(c,768-f,h,f);for(let d=768-f+25;d<618;d+=55)for(let m=c+18;m<c+h-30;m+=48)s()<.5||(n.fillStyle=`rgba(255,${190+s()*50},${120+s()*60},${.15+s()*.3})`,n.fillRect(m,d,20,28));if(n.fillStyle=`rgba(255,${180+s()*50},110,${.2+s()*.25})`,n.fillRect(c+10,648,h-20,110),s()<.85){const d=a[Math.floor(s()*a.length)],m=l[Math.floor(s()*l.length)];n.font=`900 ${26+s()*10}px "Arial Rounded MT Bold","Helvetica Neue",Arial,sans-serif`,n.textAlign="center",n.textBaseline="middle",n.shadowColor=m,n.shadowBlur=16,n.fillStyle=m,n.fillText(d,c+h/2,628),n.shadowBlur=0}c+=h+4}for(let h=0;h<3;h++){const f=200+h*80;for(let u=0;u<44;u++){const d=u*46.54545454545455+10,m=f+Math.sin(u*.8+h)*14,x=n.createRadialGradient(d,m,0,d,m,10);x.addColorStop(0,"rgba(255,230,160,0.9)"),x.addColorStop(1,"rgba(255,200,120,0)"),n.fillStyle=x,n.beginPath(),n.arc(d,m,10,0,Math.PI*2),n.fill()}}return de(e)})}function bs(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Rl(){const i={};i.steel=new Lt({color:12567495,metalness:1,roughness:.38,roughnessMap:nh(),side:Zt}),i.bowl=new Lt({color:10133155,metalness:1,roughness:.58,side:Zt}),i.steelDark=new Lt({color:9343896,metalness:1,roughness:.42,roughnessMap:nh()}),i.iron=new Lt({color:1841946,metalness:.7,roughness:.62}),i.street=new Lt({color:10131604,map:yu(),roughness:.3,metalness:0}),i.street.map.repeat.set(7,7),i.board=new Lt({map:pv(),roughness:.78,metalness:0}),i.boardSide=new Lt({color:6175262,roughness:.9,metalness:0}),i.glass=new Qt({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.16,clearcoat:1,depthWrite:!1}),i.canopy=new Lt({map:vv(),roughness:.85,side:Zt,metalness:0}),i.canopy.map.repeat.set(3,1),i.pole=new Lt({color:10133670,metalness:1,roughness:.4}),i.bulb=new Te({color:new st(16762999).multiplyScalar(3)}),i.wire=new Te({color:526344}),i.tube=new Te({color:new st(15660799).multiplyScalar(3.2)}),i.stool=new Lt({color:13116188,roughness:.45,metalness:0}),i.stoolBlue=new Lt({color:2777784,roughness:.45,metalness:0}),i.gas=new Lt({color:11676192,roughness:.4,metalness:0}),i.oil=new Qt({color:13146666,roughness:.05,clearcoat:1,metalness:0}),i.sauce=new Qt({color:4857872,roughness:.12,clearcoat:1,metalness:0}),i.lime=new Qt({color:7319086,roughness:.45,clearcoat:.5,metalness:0}),i.egg=new Lt({color:15255968,roughness:.6,metalness:0}),i.noodleDry=new Lt({color:15524556,roughness:.7,metalness:0}),i.chilli=new Qt({color:12722202,roughness:.3,clearcoat:.8,metalness:0}),i.greens=new Lt({color:4033068,roughness:.55,metalness:0}),i.caseLight=new Te({color:new st(16773328).multiplyScalar(2.2)}),i.backdrop=new Te({map:_v(),fog:!1,color:11579568}),i.backdrop.map.wrapS=wi,i.backdrop.map.repeat.set(-2,1),i.farStall=new Lt({color:2763312,roughness:.8,metalness:0}),i.farGlow=new Te({color:new st(16756832).multiplyScalar(1.6)});for(const t of["sugar","flakes","fish","vinegar"])i["cond_"+t]=new Qt({map:yv(t),roughness:.3,clearcoat:.6,metalness:0});return i}function q(i,t,e=0,n=0,s=0,r={}){const o=new lt(i,t);return o.position.set(e,n,s),r.ry&&(o.rotation.y=r.ry),r.rx&&(o.rotation.x=r.rx),r.rz&&(o.rotation.z=r.rz),o.castShadow=r.cast??!0,o.receiveShadow=!0,r.dynamic&&(o.userData.dynamic=!0),o}function Ai(i,t=40){return new Pi(i.map(([e,n])=>new Y(e,n)),t)}function Pv(i,t){const e=Q.y,n=Q.x1-Q.x0,s=Q.z1-Q.z0,r=(Q.z0+Q.z1)/2;i.add(q(new Ut(n,.03,s),t.steel,0,e-.015,r));const o=new Rt(.012,.012,n,10);o.rotateZ(Math.PI/2),i.add(q(o,t.steel,0,e-.012,Q.z1)),i.add(q(new Ut(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,Q.z0+.02)),i.add(q(new Ut(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,Q.z1-.03));for(const a of[Q.x0+.01,Q.x1-.01])i.add(q(new Ut(.02,e-.05,s-.04),t.steelDark,a,(e-.05)/2+.02,r));for(const a of[Q.x0-.02,Q.x1+.02]){const l=new An(.26,.018,8,36);l.rotateY(Math.PI/2),i.add(q(l,t.iron,a,.28,r));const c=new Rt(.03,.03,.05,10);c.rotateZ(Math.PI/2),i.add(q(c,t.pole,a,.28,r));for(let h=0;h<12;h++){const f=new Rt(.002,.002,.5,3);f.rotateX(h/12*Math.PI),i.add(q(f,t.pole,a,.28,r,{cast:!1}))}}i.add(q(new Rt(.15,.15,.5,20),t.gas,1.22,.25,.25)),i.add(q(new xe(.15,20,10,0,Math.PI*2,0,Math.PI/2),t.gas,1.22,.5,.25)),i.add(q(new Rt(.03,.03,.08,10),t.pole,1.22,.66,.25))}function Lv(i,t){const e=Q.x0+.04,n=Q.x1-.04,s=Q.y,r=On.y1,o=On.z0,a=On.z1,l=(e+n)/2,c=(o+a)/2,h=n-e;for(const g of[e,n,l])for(const M of[o,a])i.add(q(new Ut(.018,r-s,.018),t.pole,g,(s+r)/2,M));i.add(q(new Ut(h,.02,a-o+.02),t.steel,l,r,c));for(const g of[o,a])i.add(q(new we(h,r-s),t.glass,l,(s+r)/2,g,{cast:!1}));i.add(q(new Ut(h-.1,.008,.02),t.caseLight,l,r-.016,c,{cast:!1}));const f=bs(77),u=new xe(.022,12,8);u.scale(1,.9,1.15);for(let g=0;g<26;g++)i.add(q(u,t.lime,-.78+f()*.26,s+.022+(g>14?.03:0),o+.03+f()*.08,{ry:f()*6}));const d=new xe(.021,12,8);d.scale(1,1.25,1);for(let g=0;g<12;g++)i.add(q(d,t.egg,-.4+g%6*.045,s+.027,o+.04+Math.floor(g/6)*.05));const m=new Ut(.16,.035,.08);for(let g=0;g<5;g++)i.add(q(m,t.noodleDry,.02+g%2*.02,s+.018+g*.036,c,{ry:(f()-.5)*.2}));const x=new Rt(.004,.001,.05,6);x.rotateZ(Math.PI/2);for(let g=0;g<40;g++)i.add(q(x,t.chilli,.28+f()*.16,s+.006+f()*.02,o+.02+f()*.1,{ry:f()*6,cast:!1}));const p=new Rn(.05,1);p.scale(1.4,.5,.9);for(let g=0;g<3;g++)i.add(q(p,t.greens,.6+g*.09,s+.03,c+(f()-.5)*.04,{ry:f()*3}))}function Iv(i,t){const e=new An(Z.rimR*.78,.011,8,40);e.rotateX(Math.PI/2),i.add(q(e,t.iron,Z.x,Z.bottomY+.018,Z.z));const n=new Rt(Z.rimR*.82,Z.rimR*.9,.06,36,1,!0);i.add(q(n,t.iron,Z.x,Q.y+.03,Z.z));for(let o=0;o<3;o++){const a=o/3*Math.PI*2+.5;i.add(q(new Ut(.02,.05,.05),t.iron,Z.x+Math.cos(a)*.135,Z.bottomY+.005,Z.z+Math.sin(a)*.135,{ry:-a}))}const s=new An(.06,.012,8,24);s.rotateX(Math.PI/2),i.add(q(s,t.iron,Z.x,Q.y+.02,Z.z));const r=new Rt(.018,.02,.02,16);r.rotateX(Math.PI/2),i.add(q(r,t.iron,Z.x+.12,Q.y-.05,Q.z1+.01))}function Dv(i,t){const e=new Rt(ce.r,ce.r*1.01,ce.h,48,1),n=q(e,[t.boardSide,t.board,t.boardSide],ce.x,Q.y+ce.h/2,ce.z);i.add(n)}function Uv(i,t){for(const[e,n]of[["oil",t.oil],["sauce",t.sauce]]){const s=vu[e],r=e==="oil"?.07:.09;i.add(q(Ai([[0,.002],[s.r-.004,.002],[s.r,.01],[s.r,r],[s.r+.004,r+.002],[s.r-.003,r]],32),t.steel,s.x,Q.y,s.z));const o=new qe(s.r-.003,32);o.rotateX(-Math.PI/2),i.add(q(o,n,s.x,Q.y+r*.78,s.z,{cast:!1}));const a=new xe(.025,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2);i.add(q(a,t.steel,s.x-.015,Q.y+r*.78,s.z+.01));const l=new Rt(.004,.004,.2,8);i.add(q(l,t.steel,s.x+.02,Q.y+r+.06,s.z+.03,{rz:-.45,rx:.2}))}}function Nv(i,t){const e=["sugar","flakes","fish","vinegar"],n=new Ut(.2,.006,.2);i.add(q(n,t.steel,en.x,Q.y+.003,en.z));const s=new An(.035,.004,6,20,Math.PI);i.add(q(s,t.steel,en.x,Q.y+.14,en.z)),i.add(q(new Rt(.004,.004,.14,6),t.steel,en.x-.035,Q.y+.07,en.z)),i.add(q(new Rt(.004,.004,.14,6),t.steel,en.x+.035,Q.y+.07,en.z)),e.forEach((r,o)=>{const a=en.x+(o%2?.05:-.05),l=en.z+(o<2?-.05:.05),c=r==="sugar"||r==="flakes"?.045:.055;i.add(q(new Rt(.032,.032,c,16),t["cond_"+r],a,Q.y+.006+c/2,l)),i.add(q(new Rt(.036,.036,.075,16,1,!0),t.glass,a,Q.y+.044,l,{cast:!1})),i.add(q(new Rt(.038,.038,.008,16),t.steel,a,Q.y+.085,l)),i.add(q(new Rt(.003,.003,.08,6),t.steel,a+.012,Q.y+.1,l,{rz:.25}))})}function kv(i,t){for(const u of[-1.18,1.18])for(const d of[-.95,.85])i.add(q(new Rt(.018,.018,2.2,10),t.pole,u,2.2/2,d));const o=new we(2.7,2.1,16,12),a=o.attributes.position;for(let u=0;u<a.count;u++){const d=a.getX(u)/1.35,m=a.getY(u)/1.05;a.setZ(u,-(1-d*d)*(1-m*m)*.12)}o.rotateX(Math.PI/2),o.computeVertexNormals(),i.add(q(o,t.canopy,0,2.2+.02,(-.95+.85)/2,{cast:!1}));const l=new Rt(.014,.014,1.2,12);l.rotateZ(Math.PI/2),i.add(q(l,t.tube,0,1.92,-.12,{cast:!1}));for(const u of[-.5,.5])i.add(q(new Rt(.002,.002,.26,4),t.wire,u,2.05,-.12,{cast:!1}));const c=[];for(let u=0;u<=24;u++){const d=u/24,m=-1.18+d*1.18*2;c.push(new C(m,2.2-.08-Math.sin(d*Math.PI)*.22,-.95-.02))}const h=new ri(new ir(c),48,.003,4,!1);i.add(q(h,t.wire,0,0,0,{cast:!1}));const f=new xe(.022,10,8);for(let u=1;u<24;u+=2)i.add(q(f,t.bulb,c[u].x,c[u].y-.03,c[u].z,{cast:!1}))}function Fv(i,t){const e=new we(16,16);e.rotateX(-Math.PI/2),i.add(q(e,t.street,0,0,0,{cast:!1}));const n=new Rt(.15,.13,.03,20),s=new Rt(.13,.17,.4,20,1,!0),r=bs(4);[[-.7,-1.35],[-.15,-1.55],[.5,-1.3],[1,-1.7],[-1.2,-1.9]].forEach(([l,c],h)=>{const f=h===3?t.stoolBlue:t.stool;i.add(q(s,f,l,.2,c)),i.add(q(n,f,l,.415,c,{ry:r()}))}),i.add(q(new Ut(.9,.025,.6),t.steelDark,.1,.72,-2));for(const[l,c]of[[-.3,-1.75],[.5,-1.75],[-.3,-2.25],[.5,-2.25]])i.add(q(new Rt(.012,.012,.72,6),t.pole,l,.36,c));const a=[[-2.6,-3.4],[2.4,-3.8],[-3.6,-6],[3.8,-6.5],[.2,-7.5]];for(const[l,c]of a){i.add(q(new Ut(1.6,.9,.8),t.farStall,l,.45,c,{cast:!1})),i.add(q(new Ut(1.9,.04,1.4),t.farGlow,l,2.1,c,{cast:!1}));for(let h=0;h<5;h++)i.add(q(new xe(.035,8,6),t.bulb,l-.8+h*.4,2,c+.7,{cast:!1}))}}function zv(i){const t=[{lines:["ผัดไทย","PAD THAI"],x:-2,y:2.6,z:-3,w:1.3,h:.65,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["อร่อย"],x:2.3,y:2.9,z:-4.2,w:1.1,h:.45,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["ก๋วยเตี๋ยว"],x:3.4,y:2.2,z:-2.6,w:1.2,h:.4,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ชาเย็น","THAI ICED TEA"],x:-3.4,y:2,z:-2.2,w:1,h:.5,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#e2621c",ry:.6}];for(const e of t){const n=Al(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new Te({map:n,color:new st(1.5,1.5,1.5),fog:!1}),r=new lt(new we(e.w,e.h),s);r.position.set(e.x,e.y,e.z),e.ry&&(r.rotation.y=e.ry),i.add(r)}}function Ov(i,t){const e=new Rt(8.5,8.5,7,64,1,!0),n=new lt(e,t.backdrop);n.material.side=Be,n.position.set(0,3.1,0),n.rotation.y=Math.PI*.5,i.add(n)}function Pl(i){const t=new Map,e=[];i.updateMatrixWorld(!0);for(const s of[...i.children]){if(!s.isMesh||s.userData.dynamic||Array.isArray(s.material)||s.material.transparent){e.push(s);continue}const r=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(s.matrixWorld),o=Object.keys(r.attributes).sort().join(","),a=s.material.uuid+"|"+o+"|"+s.castShadow;t.has(a)||t.set(a,{mat:s.material,cast:s.castShadow,geos:[]}),t.get(a).geos.push(r)}const n=new $t;for(const s of e)n.add(s);for(const{mat:s,cast:r,geos:o}of t.values()){const a=_u(o),l=new lt(a,s);l.castShadow=r,l.receiveShadow=!0,n.add(l)}return n}function rh(i=Rl()){const t=new $t;Pv(t,i),Lv(t,i),Iv(t,i),Dv(t,i),Uv(t,i),Nv(t,i),kv(t,i),Fv(t,i),zv(t),Ov(t,i);const e=Pl(t);return e.name="stall",{group:e,materials:i}}const $s=i=>Z.R-Math.sqrt(Z.R*Z.R-i*i);function Bv(){const i=[];for(let n=0;n<=22;n++){const s=n/22*Z.rimR;i.push(new Y(s,$s(s)))}const e=$s(Z.rimR);i.push(new Y(Z.rimR+.003,e+.002)),i.push(new Y(Z.rimR+.006,e-.001)),i.push(new Y(Z.rimR+.004,e-.005));for(let n=22;n>=0;n--){const s=n/22*(Z.rimR+.002);i.push(new Y(s,$s(s*.99)-.0025))}return i}function oh(i,t,e){const n=Math.asin(Math.min(.99,i/Z.R)),s=new xe(Z.R-.0012,40,8,0,Math.PI*2,Math.PI-n,n),r=new Qt({color:t,roughness:.06,metalness:0,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:e,depthWrite:!1}),o=new lt(s,r);return o.position.set(0,Z.R,0),o.renderOrder=1,o}class Hv{constructor(){this.group=new $t,this.body=new $t,this.group.position.set(Z.x,Z.bottomY,Z.z),this.group.add(this.body);const t=mv();this.steel=new Qt({map:t,color:16777215,metalness:.55,roughness:.42,clearcoat:.35,clearcoatRoughness:.35,side:Zt});const e=new lt(new Pi(Bv(),64),this.steel);e.castShadow=!0,e.receiveShadow=!0,e.name="wokBowl",this.bowl=e,this.body.add(e);const n=new Lt({color:5911576,roughness:.6,metalness:0}),s=new Lt({color:2762790,roughness:.5,metalness:.8}),r=new $t,o=new lt(new Rt(.008,.009,.12,10),s);o.rotation.x=Math.PI/2,o.position.z=.06;const a=new lt(new Rt(.015,.013,.16,12),n);a.rotation.x=Math.PI/2,a.position.z=.19,r.add(o,a),r.position.set(0,$s(Z.rimR)-.01,Z.rimR+.002),r.rotation.set(-.28,.5,0),r.position.applyAxisAngle(new C(0,1,0),.5);for(const u of r.children)u.castShadow=!0;this.body.add(r);const l=new lt(new An(.025,.005,6,16,Math.PI),s);l.position.set(0,$s(Z.rimR)-.006,-.18-.018),l.rotation.x=-Math.PI/2+.3,this.body.add(l),this.oilPool=oh(.07,14068026,.55),this.saucePool=oh(.08,4857356,.9),this.oilPool.visible=this.saucePool.visible=!1,this.body.add(this.oilPool,this.saucePool),this.tongues=[];const c=new to({map:fv(),color:16777215,blending:cs,depthWrite:!1,transparent:!0}),h=18;for(let u=0;u<h;u++){const d=new $a(c.clone()),m=u/h*Math.PI*2;d.userData={a:m,phase:Math.random()*10,r:Z.rimR*(.93+u%3*.04)},d.center.set(.5,.05),d.renderOrder=2,this.group.add(d),this.tongues.push(d)}this.blue=[];const f=new to({map:dv(),blending:cs,depthWrite:!1,transparent:!0});for(let u=0;u<16;u++){const d=new $a(f.clone()),m=u/16*Math.PI*2;d.position.set(Math.cos(m)*.065,Q.y+.03-Z.bottomY,Math.sin(m)*.065),d.center.set(.5,0),d.userData={phase:Math.random()*10},this.group.add(d),this.blue.push(d)}this.light=new Ei(16747066,0,.9,2),this.light.position.set(0,-.045,.02),this.group.add(this.light),this.flareLight=new Ei(16752714,0,.7,2),this.flareLight.position.set(0,Z.depth+.12,-.05),this.group.add(this.flareLight),this.tossT=1,this.time=0}toss(){this.tossT=0}update(t,{flame:e,flare:n,oil:s,sauce:r,T:o}){this.time+=t;const a=this.time;if(this.tossT<1){this.tossT=Math.min(1,this.tossT+t/.42);const c=this.tossT,h=Math.sin(c*Math.PI)*.035,f=Math.sin(c*Math.PI*2)*.03;this.body.position.set(0,h,-f),this.body.rotation.x=-Math.sin(c*Math.PI)*.16}else this.body.position.set(0,0,0),this.body.rotation.x=0;if(this.oilPool.visible=s>.02,this.oilPool.visible){const c=.55+Math.min(1.2,s)*.7;this.oilPool.scale.set(c,1,c);const h=o>170?1+Math.sin(a*23)*.012:1;this.oilPool.scale.x*=h}if(this.saucePool.visible=r>.01,this.saucePool.visible){const c=.35+Math.min(1,r)*1.1;this.saucePool.scale.set(c,1,c)}const l=e;for(const c of this.tongues){const h=c.userData,f=.75+Math.sin(a*17+h.phase)*.15+Math.sin(a*31+h.phase*3)*.1,u=n*(.9+Math.sin(a*40+h.phase)*.2),d=Math.max(0,(l-.4)*.09*f)+u*.12,m=h.r+u*.02;c.position.set(Math.cos(h.a)*m,-.03,Math.sin(h.a)*m),c.scale.set(.018+d*.22,d,1),c.visible=d>.01,c.material.opacity=Math.min(.75,.2+d*3+u*.45)}for(const c of this.blue){const h=.8+Math.sin(a*25+c.userData.phase)*.2;c.scale.set(.02,(.012+l*.035)*h,1),c.visible=l>.03}this.light.intensity=l*1.2,this.flareLight.intensity=n*.35}}class Gv{constructor(){const t=new Lt({color:12106944,metalness:1,roughness:.28,side:Zt}),e=new Lt({color:7028510,roughness:.6,metalness:0});this.group=new $t;const n=new Li,s=.042,r=.075,o=.014;n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,r-o),n.quadraticCurveTo(s,r,s-o,r),n.lineTo(-s+o,r),n.quadraticCurveTo(-s,r,-s,r-o),n.lineTo(-s,0);const a=new rr(n,6),l=a.attributes.position;for(let d=0;d<l.count;d++){const m=l.getX(d);l.setZ(d,m*m/(2*Z.R))}a.computeVertexNormals(),a.rotateX(-Math.PI/2);const c=new lt(a,t);c.position.set(0,.004,.035),c.castShadow=!0;const h=new lt(new Ut(s*2,.018,.002),t);h.position.set(0,.012,.035),this.group.add(h);const f=new lt(new Rt(.004,.004,.12,8),t);f.position.set(0,.05,.05),f.rotation.x=.95;const u=new lt(new Rt(.012,.011,.14,10),e);u.position.set(0,.13,.15),u.rotation.x=.95,f.castShadow=u.castShadow=!0,this.group.add(c,f,u),this.group.visible=!1,this.pos=new C(Z.x+.1,Z.rimY,Z.z+.12),this.yaw=0}update(t,e,n){const s=new C(Z.x+.12,Z.rimY+.01,Z.z+.13),r=e?new C(e.x,e.y,e.z):s,o=this.pos.clone();this.pos.lerp(r,1-Math.exp(-t*(e?28:8)));const a=this.pos.clone().sub(o);a.lengthSq()>1e-8&&n&&(this.yaw+=(Math.atan2(a.x,a.z)-this.yaw)*0),this.group.position.copy(this.pos);const l=(Z.x-this.pos.x)/Z.R,c=(Z.z-this.pos.z)/Z.R;this.group.rotation.set(-c*.9,0,l*.9)}}class Vv{constructor(){const t=new Lt({color:12633288,metalness:1,roughness:.25,side:Zt});this.group=new $t;const e=new lt(new xe(.03,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),t),n=new lt(new Rt(.0045,.0045,.26,8),t);n.position.set(0,.1,.1),n.rotation.x=.85,this.liquidMat=new Qt({color:14068026,roughness:.05,clearcoat:1,metalness:0,transparent:!0,opacity:.9}),this.fill=new lt(new qe(.027,20),this.liquidMat),this.fill.rotation.x=-Math.PI/2,this.fill.position.y=-.006,this.cupGroup=new $t,this.cupGroup.add(e,n,this.fill),this.group.add(this.cupGroup),this.stream=new lt(new Rt(.0035,.005,1,10,1,!0),this.liquidMat),this.group.add(this.stream),this.group.visible=!1,this.tilt=0}setLiquid(t){this.liquidMat.color.set(t)}update(t,e,n,s=null){this.tilt+=((e?1.25:.1)-this.tilt)*Math.min(1,t*10);const r=s?s.x:Z.x,o=s?s.y:Z.rimY,a=s?s.z:Z.z;this.group.position.set(r-.05,o+.16,a+.05),this.cupGroup.rotation.z=this.tilt,this.fill.visible=n>.05;const l=-.028*Math.cos(this.tilt),c=-.028*Math.sin(this.tilt),h=s?s.y-(s.y===Z.rimY?Z.depth:0):Z.bottomY,f=this.group.position.y+c-(h+.01);this.stream.visible=e&&this.tilt>.8,this.stream.scale.set(1,f,1),this.stream.position.set(l-.004,c-f/2,0)}}const Wv=9.81,Ks=4096,as=.03;function Tu(){return{type:"bowl",heated:!0,cx:Z.x,cy:Z.cy,cz:Z.z,R:Z.R,rimR:Z.rimR,rimY:Z.rimY}}function Xv(){return{type:"teppan",heated:!0,cx:Et.x,cz:Et.z,y:Et.topY,hw:Et.w/2-.02,hd:Et.d/2-.02,rimY:Et.topY+.05}}function tl(){return{type:"plate",cx:it.x,cz:it.z,y:it.wellY,wellR:it.wellR,r:it.r-.012,lip:it.lip}}function ah(i=1200){return{n:0,cap:i,x:new Float32Array(i*3),p:new Float32Array(i*3),q:new Float32Array(i*4),w:new Float32Array(i*3),r:new Float32Array(i),inv:new Float32Array(i),kind:new Int16Array(i),strand:new Int32Array(i).fill(-1),d:new Float32Array(i),c:new Float32Array(i),coat:new Float32Array(i),still:new Float32Array(i),contact:new Uint8Array(i),speed:new Float32Array(i),seed:new Float32Array(i),flat:new Uint8Array(i),links:[],strands:0,container:Tu(),friction:.18,spatula:{on:!1,x:0,y:0,z:0,px:0,py:0,pz:0,r:.05},h:1/180,_hash:new Int32Array(i),_start:new Int32Array(Ks+1),_order:new Int32Array(i),_rng:625341585}}function Re(i){let t=i._rng;return t^=t<<13,t^=t>>>17,t^=t<<5,i._rng=t>>>0,i._rng/4294967296}function es(i,t,e,n,s,r,o,a=0,l=0,c=0){if(i.n>=i.cap)return-1;const h=i.n++,f=h*3;i.x[f]=e,i.x[f+1]=n,i.x[f+2]=s,i.p[f]=e-a*i.h,i.p[f+1]=n-l*i.h,i.p[f+2]=s-c*i.h;const u=Re(i)*Math.PI*2,d=Math.acos(2*Re(i)-1),m=Re(i)*Math.PI*2,x=Math.sin(d)*Math.cos(u),p=Math.cos(d),g=Math.sin(d)*Math.sin(u),M=Math.sin(m/2);return i.q[h*4]=x*M,i.q[h*4+1]=p*M,i.q[h*4+2]=g*M,i.q[h*4+3]=Math.cos(m/2),i.w[f]=i.w[f+1]=i.w[f+2]=0,i.r[h]=r,i.inv[h]=1/Math.max(.01,o),i.kind[h]=t,i.strand[h]=-1,i.d[h]=0,i.c[h]=0,i.coat[h]=0,i.still[h]=0,i.contact[h]=0,i.speed[h]=0,i.flat[h]=0,i.seed[h]=Re(i),h}function qv(i,t,e,n,s,r,o,a,l){const c=i.strands++;let h=Re(i)*Math.PI*2,f=s,u=o;const d=i.n;for(let m=0;m<e;m++){const x=es(i,t,f,r+m*.002,u,a,l);if(x<0)break;i.strand[x]=c,h+=(Re(i)-.5)*.7,f+=Math.cos(h)*n,u+=Math.sin(h)*n,m>0&&i.links.push([x-1,x,n,1]),m>1&&i.links.push([x-2,x,n*1.9,.12])}return d}function Yv(i,t=1){const e=i.container;if(e.type==="teppan")return $v(i,t);if(e.type!=="bowl")return 0;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*2.4+(Re(i)-.5)*.35)*t,c=(1.25+Re(i)*.55)*t,h=(-a*2.4+.18+(Re(i)-.5)*.35)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Re(i)-.5)*30,i.w[r+1]=(Re(i)-.5)*12,i.w[r+2]=(Re(i)-.5)*30,i.still[s]=0,n++}return n}function $v(i,t){const e=i.container;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*1.2+(Re(i)-.5)*.25)*t,c=(.45+Re(i)*.3)*t,h=(-a*1.2+(Re(i)-.5)*.25)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Re(i)-.5)*24,i.w[r+2]=(Re(i)-.5)*24,i.still[s]=0,n++}return n}function Kv(i,t=null,e=!1,n=.36){if(i.container=tl(),e)return jv(i);if(t){const r=(t.base*t.base+t.h*t.h)/(2*t.h);i.container.dome={x:t.x,z:t.z,R:r,cy:i.container.y+t.h-r}}i.friction=.7;const s=i.container;for(let r=0;r<i.n;r++){const o=r*3,a=(i.x[o]-Z.x)*n,l=(i.x[o+2]-Z.z)*n,c=s.y+.02+(i.x[o+1]-Z.bottomY)*2.2+Re(i)*.03;i.x[o]=s.cx+a,i.x[o+1]=c,i.x[o+2]=s.cz+l,i.p[o]=i.x[o],i.p[o+1]=c+.002,i.p[o+2]=i.x[o+2],i.still[r]=0}}function jv(i){const t=i.container,e=.078,n=[...Array(i.n).keys()].sort((r,o)=>i.r[o]-i.r[r]),s=[];for(const r of n){let o=null,a=-1;for(let c=0;c<80;c++){let h,f,u;do h=Re(i)*2-1,f=Re(i)**1.6,u=Re(i)*2-1;while(h*h+f*f+u*u>1);const d=e-i.r[r];h=t.cx+h*d,f=t.y+i.r[r]+f*d*.9,u=t.cz+u*d;let m=1/0;for(const x of s){const p=Math.hypot(h-i.x[x*3],f-i.x[x*3+1],u-i.x[x*3+2])-(i.r[r]+i.r[x]);p<m&&(m=p)}if(m>a&&(a=m,o=[h,f,u]),m>=0)break}const l=r*3;i.x[l]=o[0],i.x[l+1]=o[1],i.x[l+2]=o[2],i.p[l]=i.x[l],i.p[l+1]=i.x[l+1],i.p[l+2]=i.x[l+2],i.still[r]=0,s.push(r)}i.friction=.9;for(let r=0;r<i.n;r++)i.inv[r]=0}function Eu(i,t,e){return(i*73856093^t*19349663^e*83492791)&Ks-1}function Zv(i){const{n:t,x:e,_hash:n,_start:s,_order:r}=i;s.fill(0);for(let a=0;a<t;a++){const l=Eu(Math.floor(e[a*3]/as),Math.floor(e[a*3+1]/as),Math.floor(e[a*3+2]/as));n[a]=l,s[l+1]++}for(let a=0;a<Ks;a++)s[a+1]+=s[a];const o=i._fill||(i._fill=new Int32Array(Ks));o.set(s.subarray(0,Ks));for(let a=0;a<t;a++)r[o[n[a]]++]=a}function Jv(i){const{n:t,x:e,p:n,r:s,inv:r,strand:o,_start:a,_order:l}=i,c=i.container.type==="plate"?.7:0;for(let h=0;h<t;h++){const f=Math.floor(e[h*3]/as),u=Math.floor(e[h*3+1]/as),d=Math.floor(e[h*3+2]/as);for(let m=-1;m<=1;m++)for(let x=-1;x<=1;x++)for(let p=-1;p<=1;p++){const g=Eu(f+m,u+x,d+p);for(let M=a[g];M<a[g+1];M++){const v=l[M];if(v<=h||o[h]>=0&&o[h]===o[v]&&Math.abs(h-v)<=2)continue;const y=h*3,R=v*3,E=e[R]-e[y],T=e[R+1]-e[y+1],L=e[R+2]-e[y+2],I=(s[h]+s[v])*.92,_=E*E+T*T+L*L;if(_>=I*I||_<1e-12)continue;const b=Math.sqrt(_),k=r[h]+r[v];if(k===0)continue;const F=(I-b)/b/k*.8;if(e[y]-=E*F*r[h],e[y+1]-=T*F*r[h],e[y+2]-=L*F*r[h],e[R]+=E*F*r[v],e[R+1]+=T*F*r[v],e[R+2]+=L*F*r[v],c){const G=E/b,X=T/b,B=L/b,J=e[y]-n[y]-(e[R]-n[R]),V=e[y+1]-n[y+1]-(e[R+1]-n[R+1]),gt=e[y+2]-n[y+2]-(e[R+2]-n[R+2]),xt=J*G+V*X+gt*B,vt=(J-G*xt)*c/k,Jt=(V-X*xt)*c/k,ne=(gt-B*xt)*c/k;e[y]-=vt*r[h],e[y+1]-=Jt*r[h],e[y+2]-=ne*r[h],e[R]+=vt*r[v],e[R+1]+=Jt*r[v],e[R+2]+=ne*r[v]}}}}}function Qv(i){const{x:t,inv:e,links:n}=i;for(let s=0;s<n.length;s++){const[r,o,a,l]=n[s],c=r*3,h=o*3,f=t[h]-t[c],u=t[h+1]-t[c+1],d=t[h+2]-t[c+2],m=Math.sqrt(f*f+u*u+d*d)||1e-6;if(l<1&&m>a)continue;const x=e[r]+e[o];if(x===0)continue;const p=(m-a)/m/x*l;t[c]+=f*p*e[r],t[c+1]+=u*p*e[r],t[c+2]+=d*p*e[r],t[h]-=f*p*e[o],t[h+1]-=u*p*e[o],t[h+2]-=d*p*e[o]}}function t_(i){const t=i.container,{n:e,x:n,p:s,r,contact:o}=i,a=i.friction;for(let l=0;l<e;l++){if(i.inv[l]===0){o[l]=1;continue}const c=l*3;let h=!1,f=0,u=1,d=0;if(t.type==="teppan"){const m=t.y+r[l]*.7;n[c+1]<m&&(n[c+1]=m,h=!0);const x=t.hw-r[l],p=t.hd-r[l];n[c]<t.cx-x?n[c]=t.cx-x:n[c]>t.cx+x&&(n[c]=t.cx+x),n[c+2]<t.cz-p?n[c+2]=t.cz-p:n[c+2]>t.cz+p&&(n[c+2]=t.cz+p)}else if(t.type==="bowl"){const m=n[c]-t.cx,x=n[c+1]-t.cy,p=n[c+2]-t.cz,g=Math.sqrt(m*m+x*x+p*p)||1e-6,M=t.R-r[l];n[c+1]<t.rimY+r[l]&&g>M&&(n[c]=t.cx+m/g*M,n[c+1]=t.cy+x/g*M,n[c+2]=t.cz+p/g*M,f=-m/g,u=-x/g,d=-p/g,h=!0);const v=n[c]-t.cx,y=n[c+2]-t.cz,R=Math.sqrt(v*v+y*y),E=t.rimR-r[l]*1.2;n[c+1]>=t.rimY&&R>E&&(n[c]=t.cx+v/R*E,n[c+2]=t.cz+y/R*E)}else{const m=n[c]-t.cx,x=n[c+2]-t.cz,p=Math.sqrt(m*m+x*x)||1e-6,g=Math.min(1,Math.max(0,(p-t.wellR)/(t.r-t.wellR))),M=t.y+t.lip*g*g*(3-2*g)+r[l]*.7;if(n[c+1]<M){n[c+1]=M,h=!0;const y=g>0&&g<1?t.lip*6*g*(1-g)/(t.r-t.wellR):0,R=Math.sqrt(1+y*y);f=-m/p*y/R,u=1/R,d=-x/p*y/R}const v=t.r-r[l];if(p>v&&(n[c]=t.cx+m/p*v,n[c+2]=t.cz+x/p*v),t.spheres)for(const y of t.spheres){const R=n[c]-y.x,E=n[c+1]-y.cy,T=n[c+2]-y.z,L=Math.sqrt(R*R+E*E+T*T)||1e-6,I=y.R+r[l]*.7;L<I&&(n[c]=y.x+R/L*I,n[c+1]=y.cy+E/L*I,n[c+2]=y.z+T/L*I,h=!0,f=R/L,u=E/L,d=T/L)}if(t.puck){const y=t.puck,R=n[c]-y.x,E=n[c+2]-y.z;R*R+E*E<y.r*y.r&&n[c+1]<y.top+r[l]*.7&&(n[c+1]=y.top+r[l]*.7,h=!0,f=0,u=1,d=0)}if(t.dome){const y=t.dome,R=n[c]-y.x,E=n[c+1]-y.cy,T=n[c+2]-y.z,L=Math.sqrt(R*R+E*E+T*T)||1e-6,I=y.R+r[l]*.7;L<I&&n[c+1]>t.y&&(n[c]=y.x+R/L*I,n[c+1]=y.cy+E/L*I,n[c+2]=y.z+T/L*I,h=!0,f=R/L,u=E/L,d=T/L)}}if(o[l]=h?1:0,h){const m=n[c]-s[c],x=n[c+1]-s[c+1],p=n[c+2]-s[c+2],g=m*f+x*u+p*d,M=m-f*g,v=x-u*g,y=p-d*g;n[c]-=M*a,n[c+1]-=v*a,n[c+2]-=y*a}}}function e_(i,t){const e=i.spatula;if(!e.on)return;const{n,x:s,r}=i,o=e.px+(e.x-e.px)*t,a=e.py+(e.y-e.py)*t,l=e.pz+(e.z-e.pz)*t,c=(e.x-e.px)/3;(e.y-e.py)/3;const h=(e.z-e.pz)/3,f=Math.sqrt(c*c+h*h);for(let u=0;u<n;u++){const d=u*3,m=s[d]-o,x=s[d+1]-a,p=s[d+2]-l;if(x>.06||x<-.03)continue;const g=e.r+r[u],M=m*m+p*p;if(M>g*g)continue;const y=1-(Math.sqrt(M)||1e-6)/g;s[d]+=c*(.35+y*.6),s[d+2]+=h*(.35+y*.6),s[d+1]+=f*.5*y,i.still[u]=0}}function n_(i,t){const n=Math.min(t,.03333333333333333)/3;i.h=n;const{x:s,p:r}=i,o=i.container.type==="plate"?.86:.992;for(let c=0;c<3;c++){for(let h=0;h<i.n;h++){if(i.inv[h]===0)continue;const f=h*3,u=(s[f]-r[f])*o,d=(s[f+1]-r[f+1])*o,m=(s[f+2]-r[f+2])*o;r[f]=s[f],r[f+1]=s[f+1],r[f+2]=s[f+2],s[f]+=u,s[f+1]+=d-Wv*n*n,s[f+2]+=m}e_(i,(c+1)/3),Zv(i);for(let h=0;h<2;h++)Qv(i),Jv(i),t_(i)}const a=i.spatula;a.px=a.x,a.py=a.y,a.pz=a.z;const l=n*3;for(let c=0;c<i.n;c++){const h=c*3,f=(s[h]-r[h])/n,u=(s[h+1]-r[h+1])/n,d=(s[h+2]-r[h+2])/n,m=Math.sqrt(f*f+u*u+d*d);if(i.speed[c]=m,m<.03?i.still[c]+=l:i.still[c]=Math.max(0,i.still[c]-l*4),i.container.type==="plate"&&i.still[c]>.2&&i.inv[c]!==0&&(i.inv[c]=0),i.contact[c]){const x=i.r[c];i.w[h]+=(d/x-i.w[h])*.3,i.w[h+2]+=(-f/x-i.w[h+2])*.3,i.w[h+1]*=.8}i.w[h]*=.985,i.w[h+1]*=.985,i.w[h+2]*=.985,i.flat[c]||i_(i.q,c*4,i.w[h],i.w[h+1],i.w[h+2],l)}}function i_(i,t,e,n,s,r){const o=i[t],a=i[t+1],l=i[t+2],c=i[t+3],h=e*r*.5,f=n*r*.5,u=s*r*.5;let d=o+(h*c+f*l-u*a),m=a+(f*c+u*o-h*l),x=l+(u*c+h*a-f*o),p=c-(h*o+f*a+u*l);const g=Math.sqrt(d*d+m*m+x*x+p*p)||1;i[t]=d/g,i[t+1]=m/g,i[t+2]=x/g,i[t+3]=p/g}function s_(i,t,e,n,s,r){if(Math.abs(s)<1e-5)return null;const o=(Et.topY-t)/s;if(!(o>0))return null;let a=i+n*o,l=e+r*o;const c=Et.w/2-.03,h=Et.d/2-.03;return Math.abs(a-Et.x)>c*1.5||Math.abs(l-Et.z)>h*1.5?null:(a=Math.max(Et.x-c,Math.min(Et.x+c,a)),l=Math.max(Et.z-h,Math.min(Et.z+h,l)),{x:a,y:Et.topY,z:l})}function r_(i,t,e,n,s,r){const o=Z.x,a=Z.cy,l=Z.z,c=i-o,h=t-a,f=e-l,u=c*n+h*s+f*r,d=c*c+h*h+f*f-Z.R*Z.R,m=u*u-d;if(m<0)return null;const x=-u+Math.sqrt(m);let p=i+n*x,g=t+s*x,M=e+r*x;if(g>Z.rimY){const v=(Z.rimY-t)/s;if(!(v>0))return null;p=i+n*v,M=e+r*v;const y=p-o,R=M-l,E=Math.hypot(y,R);if(E>Z.rimR*1.6)return null;const T=Math.min(1,(Z.rimR-.02)/E);p=o+y*T,M=l+R*T,g=a-Math.sqrt(Math.max(0,Z.R*Z.R-(p-o)**2-(M-l)**2))}return{x:p,y:g,z:M}}class o_{constructor(){this.wok=new Hv,this.spatula=new Gv,this.group=new $t,this.group.add(this.wok.group,this.spatula.group),this.view="wok",this.tossLabel="TOSS",this.kind="wok"}container(){return Tu()}surfaceRay(t){const e=t.origin,n=t.direction,s=r_(e.x,e.y,e.z,n.x,n.y,n.z);if(s)return s;if(Math.abs(n.y)<1e-5)return null;const r=(Z.rimY-e.y)/n.y;let o=e.x+n.x*r-Z.x,a=e.z+n.z*r-Z.z;const l=Math.hypot(o,a)||1,c=Z.rimR-.025;l>c&&(o*=c/l,a*=c/l);const h=Z.cy-Math.sqrt(Math.max(0,Z.R*Z.R-o*o-a*a));return{x:Z.x+o,y:h,z:Z.z+a}}dropPoint(){return new C(Z.x,Z.rimY,Z.z)}spawn(t,e,n=0){return{x:Z.x+n*.05+(Math.random()-.5)*.06,y:Z.rimY+.03+Math.random()*.04,z:Z.z+.03+(Math.random()-.5)*.06}}stirPoint(t){const e=t*4.2,n=Z.x+Math.sin(e)*.1,s=Z.z+Math.sin(e*2)*.06;return{x:n,y:Z.cy-Math.sqrt(Z.R*Z.R-(n-Z.x)**2-(s-Z.z)**2),z:s}}toss(){this.wok.toss()}update(t,e,n,s){this.wok.update(t,e),this.spatula.update(t,n,s)}}class a_{constructor(){this.group=new $t,this.view="teppan",this.tossLabel="FLIP",this.kind="teppan";const{w:t,d:e,topY:n}=Et,s=new Qt({map:bu(),metalness:.6,roughness:.4,clearcoat:.4,clearcoatRoughness:.3});this.steel=s;const r=new lt(new Ut(t,.012,e),s);r.position.set(Et.x,n-.006,Et.z),r.receiveShadow=!0,r.castShadow=!0;const o=new Lt({color:11054514,metalness:1,roughness:.4}),a=new lt(new Ut(t+.02,n-.012-Q.y,e+.02),o);a.position.set(Et.x,(n-.012+Q.y)/2,Et.z);const l=new Lt({color:9343896,metalness:1,roughness:.35,side:Zt}),c=new lt(new Ut(t+.02,.05,.004),l);c.position.set(Et.x,n+.025,Et.z-e/2-.008),this.group.add(r,a,c);for(const f of[-1,1]){const u=new lt(new Ut(.004,.035,e+.02),l);u.position.set(Et.x+f*(t/2+.008),n+.0175,Et.z),this.group.add(u)}this.oilFilm=new lt(new qe(.12,32),new Qt({color:5915684,alphaMap:er(),roughness:.05,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.12,depthWrite:!1,metalness:0})),this.oilFilm.rotation.x=-Math.PI/2,this.oilFilm.position.set(Et.x,n+6e-4,Et.z),this.oilFilm.visible=!1,this.sauceFilm=new lt(new qe(.1,32),new Qt({color:3807754,alphaMap:er(),roughness:.1,clearcoat:1,transparent:!0,opacity:.8,depthWrite:!1,metalness:0})),this.sauceFilm.rotation.x=-Math.PI/2,this.sauceFilm.position.set(Et.x,n+8e-4,Et.z),this.sauceFilm.visible=!1,this.group.add(this.oilFilm,this.sauceFilm),this.vents=[];const h=new Te({color:new st(.35,.55,1.6),transparent:!0,opacity:0,depthWrite:!1});for(let f=0;f<9;f++){const u=new lt(new we(.028,.008),h);u.position.set(Et.x-t/2+.05+f*((t-.1)/8),(n+Q.y)/2-.004,Et.z+e/2+.0112),this.group.add(u),this.vents.push(u)}this.blue=h,this.light=new Ei(16751178,0,.7,2),this.light.position.set(Et.x,Q.y+.02,Et.z+e/2+.1),this.group.add(this.light),this.spatula=new l_,this.group.add(this.spatula.group),this.jolt=0}container(){return Xv()}surfaceRay(t){const e=t.origin,n=t.direction,s=s_(e.x,e.y,e.z,n.x,n.y,n.z);if(s)return s;if(Math.abs(n.y)<1e-5)return null;const r=(Et.topY-e.y)/n.y,o=Et.w/2-.03,a=Et.d/2-.03;return{x:Math.max(Et.x-o,Math.min(Et.x+o,e.x+n.x*r)),y:Et.topY,z:Math.max(Et.z-a,Math.min(Et.z+a,e.z+n.z*r))}}dropPoint(){return new C(Et.x,Et.topY+.02,Et.z)}spawn(t,e,n=0){const s=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*.09;return{x:Et.x+n*.03+Math.cos(s)*r,y:Et.topY+.03+Math.random()*.03,z:Et.z+Math.sin(s)*r*.7}}stirPoint(t){const e=t*3.6;return{x:Et.x+Math.sin(e)*.12,y:Et.topY,z:Et.z+Math.sin(e*2)*.07}}toss(){this.jolt=1}update(t,e,n,s){if(this.oilFilm.visible=e.oil>.02,this.oilFilm.visible){const r=.5+Math.min(1.2,e.oil)*.5;this.oilFilm.scale.set(r*1.3,r,1)}if(this.sauceFilm.visible=e.sauce>.01,this.sauceFilm.visible){const r=.4+Math.min(1,e.sauce)*1.1;this.sauceFilm.scale.set(r*1.3,r,1)}this.blue.opacity=Math.min(.9,e.flame*1.2),this.light.intensity=e.flame*.6,this.jolt=Math.max(0,this.jolt-t*4),this.spatula.update(t,n,s,this.jolt)}}class l_{constructor(){const t=new Lt({color:12896460,metalness:1,roughness:.28}),e=new Lt({color:7028510,roughness:.6,metalness:0}),n=()=>{const s=new $t,r=new lt(new Ut(.075,.0015,.06),t);r.position.set(0,.001,-.01);const o=new lt(new Ut(.012,.002,.05),t);o.position.set(0,.012,.035),o.rotation.x=-.45;const a=new lt(new Rt(.011,.012,.1,10),e);a.rotation.x=Math.PI/2-.45,a.position.set(0,.04,.1);for(const l of[r,o,a])l.castShadow=!0,s.add(l);return s};this.a=n(),this.b=n(),this.group=new $t,this.group.add(this.a,this.b),this.group.visible=!1,this.pos=new C(Et.x+.1,Et.topY,Et.z+.1)}update(t,e,n,s=0){const r=e?new C(e.x,e.y,e.z):new C(Et.x+.12,Et.topY,Et.z+.12);this.pos.lerp(r,1-Math.exp(-t*(e?26:8))),this.a.position.copy(this.pos),this.a.rotation.set(-s*.9,.25,0),this.b.position.set(this.pos.x-.09,this.pos.y+s*.02,this.pos.z+.02),this.b.rotation.set(-s*.9,-.3,0)}}function c_(i=!1){const t=it.r,e=it.wellR,n=i?it.lip*.55:it.lip,s=.0015;return Ai([[0,-.01],[e*.62,-.01],[e*.66,-.006],[e*.7,-.003],[e+.01,-.002],[t-.01,n-.004],[t,n-.002],[t+.001,n],[t-.004,n+.001],[t-.012,n*.85],[e+.012,.004],[e,s],[0,s]],56)}const ta={};function h_(){if(ta.m)return ta.m;const i={};return i.plate=new Qt({color:15921386,roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:Zt}),i.plateRim=new Qt({map:xv(),roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:Zt}),i.plateRim.map.repeat.set(10,1),i.leaf=new Qt({map:gv(),roughness:.35,clearcoat:.6,clearcoatRoughness:.2,metalness:0,side:Zt}),i.glaze=new Qt({map:wv(),roughness:.25,clearcoat:1,clearcoatRoughness:.1,metalness:0,side:Zt}),i.flat=new Qt({color:15525594,map:no(),roughness:.3,clearcoat:.9,clearcoatRoughness:.12,metalness:0,side:Zt}),i.fune=new Lt({map:bv(),roughness:.75,metalness:0,side:Zt}),i.paper=new Lt({color:16052194,roughness:.9,metalness:0}),i.fiesta=new Qt({color:3121072,map:no(),roughness:.3,clearcoat:.9,clearcoatRoughness:.15,metalness:0,side:Zt}),i.tortilla=new Lt({map:Cl(),color:15783578,roughness:.75,metalness:0}),ta.m=i,i}function u_(i=8){const t=[],e=i/2;for(let n=0;n<i;n++){const s=n%e,r=Math.floor(n/e);t.push([it.x+(s-(e-1)/2)*.039,it.z+(r-.5)*.04])}return t}const Yr={w:.19,d:.105,h:.022,floor:.004};function f_(i="thai",{leaf:t=!1}={}){const e=h_(),n=new $t;n.name="plateware";const s=it.wellY-.0015;if(i==="fune"){const{w:a,d:l,h:c,floor:h}=Yr;n.add(q(new Ut(a,h,l),e.fune,it.x,it.wellY-.006+h/2,it.z));const f=(u,d,m,x)=>{const p=q(new Ut(u,c,.0025),e.fune,d,it.wellY-.006+c/2,m,{ry:x});p.rotation.x=0,n.add(p)};return f(a,it.x,it.z-l/2,0),f(a,it.x,it.z+l/2,0),f(l,it.x-a/2,it.z,Math.PI/2),f(l,it.x+a/2,it.z,Math.PI/2),n.add(q(new we(a-.01,l-.01).rotateX(-Math.PI/2),e.paper,it.x,it.wellY-.0015,it.z,{cast:!1})),n}const r=i==="flat"||i==="fiesta"||i==="tacos",o=i==="glaze"?e.glaze:i==="fiesta"||i==="tacos"?e.fiesta:r?e.flat:e.plate;if(n.add(q(c_(r),o,it.x,s,it.z)),i==="tacos")for(let a=0;a<3;a++){const l=a/3*Math.PI*2+.4;for(let c=0;c<2;c++){const h=q(new Rt(.052,.052,.0025,28),e.tortilla,it.x+Math.cos(l)*.04+c*.004,it.wellY+.0015+a*.0026+c*.0025,it.z+Math.sin(l)*.04,{cast:!1});n.add(h)}}if(i==="thai"){const a=Ai([[it.r-.012,it.lip*.85+7e-4],[it.r-.004,it.lip+.0017]],56);n.add(q(a,e.plateRim,it.x,s,it.z,{cast:!1}))}if(t){const a=new Li,l=bs(12);for(let u=0;u<=40;u++){const d=u/40*Math.PI*2,m=it.wellR*(1.08+(l()-.5)*.05);u===0?a.moveTo(Math.cos(d)*m,Math.sin(d)*m):a.lineTo(Math.cos(d)*m,Math.sin(d)*m)}const c=new rr(a,1),h=c.attributes.uv,f=c.attributes.position;for(let u=0;u<h.count;u++)h.setXY(u,f.getX(u)/(it.wellR*2.4)+.5,f.getY(u)/(it.wellR*2.4)+.5);c.rotateX(-Math.PI/2);for(let u=0;u<f.count;u++)f.setY(u,Math.max(0,Math.hypot(f.getX(u),f.getZ(u))-it.wellR)*.5);c.computeVertexNormals(),n.add(q(c,e.leaf,it.x,it.wellY+.0012,it.z,{ry:.4,cast:!1}))}return n}function d_(){const i=Rl();return i.woodDark=new Lt({map:Qo(!0),roughness:.7,metalness:0}),i.woodLight=new Lt({map:Qo(!1),roughness:.6,metalness:0}),i.woodLight.map.repeat.set(2,1),i.roof=new Lt({color:2762276,roughness:.8,metalness:0,side:Zt}),i.noren=new Lt({map:ih("焼きそば"),roughness:.9,metalness:0,side:Zt}),i.noren2=new Lt({map:ih("たこ焼"),roughness:.9,metalness:0,side:Zt}),i.lanternA=new Te({map:sh("祭"),color:new st(1.5,1.4,1.3)}),i.lanternB=new Te({map:sh("焼"),color:new st(1.5,1.4,1.3)}),i.lanternCap=new Lt({color:1380880,roughness:.6,metalness:0}),i.miniLantern=new Te({color:new st(2.2,.8,.35)}),i.backdrop=new Te({map:Sv(),fog:!1,color:12105912}),i.backdrop.map.wrapS=wi,i.backdrop.map.repeat.set(-2,1),i.stone=new Lt({color:9210502,map:yu(),roughness:.32,metalness:0}),i.stone.map.repeat.set(9,9),i.sauceBottle=new Qt({color:3808270,roughness:.25,clearcoat:1,metalness:0}),i.mayoBottle=new Qt({color:15852464,roughness:.3,clearcoat:.8,metalness:0,transmission:0}),i.redCap=new Lt({color:13116188,roughness:.4,metalness:0}),i.greenCap=new Lt({color:3111466,roughness:.4,metalness:0}),i.aonori=new Lt({color:4156190,roughness:.8,metalness:0}),i.ginger=new Qt({color:14165578,roughness:.35,clearcoat:.8,metalness:0}),i.bonitoBox=new Lt({color:13214842,roughness:.7,metalness:0}),i.bench=new Lt({map:Qo(!1),color:11571312,roughness:.7,metalness:0}),i}function p_(i,t){const e=Q.y,n=Q.x1-Q.x0,s=Q.z1-Q.z0,r=(Q.z0+Q.z1)/2;i.add(q(new Ut(n,.04,s),t.woodLight,0,e-.02,r));for(const o of[Q.z0+.02,Q.z1-.03])i.add(q(new Ut(n-.02,e-.06,.03),t.woodDark,0,(e-.06)/2+.02,o));for(const o of[Q.x0+.015,Q.x1-.015])i.add(q(new Ut(.03,e-.06,s-.04),t.woodDark,o,(e-.06)/2+.02,r));for(const o of[Q.x0-.02,Q.x1+.02]){const a=new An(.24,.03,8,30);a.rotateY(Math.PI/2),i.add(q(a,t.woodDark,o,.25,r));for(let l=0;l<8;l++){const c=new Ut(.015,.46,.02);c.rotateX(l/8*Math.PI),i.add(q(c,t.woodDark,o,.25,r,{cast:!1}))}}i.add(q(new Ut(n-.08,.025,On.z1-On.z0),t.woodLight,0,e+.12,(On.z0+On.z1)/2));for(const o of[-n/2+.06,0,n/2-.06])i.add(q(new Ut(.03,.12,.03),t.woodDark,o,e+.06,(On.z0+On.z1)/2))}function m_(i,t){for(const h of[-1.12,1.12])for(const f of[-.62,.62])i.add(q(new Ut(.06,2.45,.06),t.woodDark,h,2.45/2,f));for(const h of[-1,1]){const f=new Ut(2.5,.025,.78),u=q(f,t.roof,0,2.45+.16,h*.34,{cast:!1});u.rotation.x=h*.38,i.add(u)}i.add(q(new Ut(2.5,.05,.05),t.woodDark,0,2.45+.3,0));const o=new we(2.1,.42,1,1);i.add(q(o,t.noren,0,2.45-.2,-.62-.02,{ry:Math.PI,cast:!1}));const a=new xe(.16,20,14);a.scale(1,1.3,1);const l=new Rt(.1,.1,.05,16);for(const[h,f]of[[-1.12+.05,t.lanternA],[1.12-.05,t.lanternB]])i.add(q(a,f,h,2.45-.42,-.62-.12,{ry:Math.PI,cast:!1})),i.add(q(l,t.lanternCap,h,2.45-.2,-.62-.12,{cast:!1})),i.add(q(l,t.lanternCap,h,2.45-.64,-.62-.12,{cast:!1}));const c=new xe(.035,10,8);c.scale(1,1.3,1);for(let h=0;h<11;h++){const f=h/10,u=-1.12+f*1.12*2;i.add(q(c,t.miniLantern,u,2.45-.06-Math.sin(f*Math.PI)*.1,-.62-.06,{cast:!1}))}}function g_(i,t){i.add(q(new Ut(ce.r*2.1,ce.h,ce.r*1.55),t.woodLight,ce.x,Q.y+ce.h/2,ce.z));for(const[r,o]of[["oil",t.oil],["sauce",t.sauce]]){const a=vu[r],l=.08;i.add(q(Ai([[0,.002],[a.r-.004,.002],[a.r,.01],[a.r,l],[a.r+.004,l+.002],[a.r-.003,l]],32),t.steel,a.x,Q.y,a.z));const c=new qe(a.r-.003,32);c.rotateX(-Math.PI/2),i.add(q(c,o,a.x,Q.y+l*.78,a.z,{cast:!1})),i.add(q(new Rt(.005,.005,.18,8),t.woodDark,a.x+.02,Q.y+l+.05,a.z+.02,{rz:-.4}))}const e=en.x,n=en.z,s=Ai([[0,0],[.028,0],[.03,.02],[.03,.13],[.018,.16],[.006,.175],[0,.18]],20);i.add(q(s,t.sauceBottle,e-.07,Q.y,n-.03)),i.add(q(s,t.mayoBottle,e-.01,Q.y,n-.05)),i.add(q(new sr(.008,.03,10),t.redCap,e-.01,Q.y+.19,n-.05)),i.add(q(new Rt(.028,.028,.09,16),t.aonori,e+.06,Q.y+.045,n-.04)),i.add(q(new Rt(.03,.03,.015,16),t.greenCap,e+.06,Q.y+.097,n-.04)),i.add(q(new Rt(.04,.036,.05,18),t.ginger,e+.02,Q.y+.025,n+.07)),i.add(q(new Ut(.1,.06,.07),t.bonitoBox,e-.07,Q.y+.03,n+.07))}function x_(i,t){const e=new we(16,16);e.rotateX(-Math.PI/2),i.add(q(e,t.stone,0,0,0,{cast:!1})),i.add(q(new Ut(1.6,.05,.3),t.bench,0,.44,-1.3));for(const r of[-.7,.7])i.add(q(new Ut(.05,.42,.26),t.bench,r,.21,-1.3));const n=[["たこ焼","#d8261c","#ffffff",-1.55,-.9],["お好み焼","#f2c230","#1a1a1a",1.5,-.95],["焼きそば","#1d4fa8","#ffffff",-2.1,-1.6]];for(const[r,o,a,l,c]of n){const h=new Lt({map:Mv(r,o,a),roughness:.85,metalness:0,side:Zt});i.add(q(new we(.34,1.3),h,l,1.4,c,{cast:!1,ry:.2})),i.add(q(new Rt(.012,.012,2.2,8),t.pole,l-.18,1.1,c))}const s=bs(9);for(const[r,o]of[[-2.8,-3.4],[2.6,-3.8],[-3.8,-6.2],[3.9,-6.6],[.3,-7.8]]){i.add(q(new Ut(1.5,.9,.8),t.woodDark,r,.45,o,{cast:!1})),i.add(q(new Ut(1.8,.05,1.2),t.roof,r,2,o,{cast:!1}));for(let a=0;a<4;a++)i.add(q(new xe(.06,8,6),t.miniLantern,r-.6+a*.4,1.85-s()*.05,o+.6,{cast:!1}))}}function v_(i){const t=[{lines:["たこ焼き"],x:-2.1,y:2.7,z:-3.2,w:1.3,h:.45,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["お好み焼"],x:2.4,y:3,z:-4,w:1.3,h:.42,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["大阪"],x:3.5,y:2.3,z:-2.6,w:.8,h:.45,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ラーメン"],x:-3.5,y:2.1,z:-2.2,w:1,h:.4,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#c21c1c",ry:.6}];for(const e of t){const n=Al(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new lt(new we(e.w,e.h),new Te({map:n,color:new st(1.5,1.5,1.5),fog:!1}));s.position.set(e.x,e.y,e.z),e.ry&&(s.rotation.y=e.ry),i.add(s)}}function __(i,t){const e=new lt(new Rt(8.5,8.5,7,64,1,!0),t.backdrop);e.material.side=Be,e.position.set(0,3.1,0),e.rotation.y=Math.PI*.5,i.add(e)}function y_(i=d_()){const t=new $t;p_(t,i),m_(t,i),g_(t,i),x_(t,i),v_(t),__(t,i);const e=Pl(t);return e.name="stall:osaka",{group:e,materials:i}}const nr=24,M_=275;function lh(){return{flame:0,T:nr,oil:0,sauce:0,sauceLeft:0,load:0,tosses:0,hei:0,flare:0}}function w_(i,t){const e=nr+i.flame*(M_-nr),n=i.flame>.05?2.6+Math.min(3,i.load*.06):10;i.T+=(e-i.T)*(1-Math.exp(-t/n)),i.flare=Math.max(0,i.flare-t*2.2),i.sauceLeft>0&&(i.sauceLeft=Math.max(0,i.sauceLeft-t*.006*Ss(i.T)))}function ch(i,t){i.load+=t,i.T-=(i.T-nr)*Math.min(.45,t*.028)}function b_(i,t){i.T-=(i.T-nr)*Math.min(.5,t*.35)}function Ss(i){return Math.max(0,Math.min(1.45,(i-95)/125))}function S_(i,t,e,n){if(!i.container.heated)return;const s=Ss(t.T),r=t.T,o=t.oil<.2,a=i.container.rimY;let l=0;for(let c=0;c<i.n;c++){const h=n[i.kind[c]];if(!h||h.garnish)continue;const f=i.x[c*3+1],u=i.contact[c]?1:f<a?.45:0;let d=s*u/h.cookTime;if(t.sauceLeft>0&&i.coat[c]<1&&f<a){const m=e*(.05+Math.min(1.2,i.speed[c])*.9)*(h.needsSauce?1:Math.min(1,(h.coatTint??.32)*1.4)),x=Math.min(m,1-i.coat[c]);i.coat[c]+=x,l+=x}h.needsSauce&&(d*=Math.min(1,i.coat[c]/.45)),i.d[c]>h.band[1]&&(d*=.12),i.d[c]+=d*e,i.contact[c]&&r>180&&i.still[c]>1.5&&(i.c[c]+=e*(r-180)/90*.08*(o?2:1)*(1-.6*Math.min(1,i.coat[c]))),i.d[c]>h.burnAt&&i.contact[c]&&(i.c[c]+=e*(i.d[c]-h.burnAt)*.08*(1-Math.min(1,i.coat[c]*1.5))),i.c[c]>1&&(i.c[c]=1)}l>0&&(t.sauceLeft=Math.max(0,t.sauceLeft-l/360))}function T_(i,t){if(!i.container.heated||i.n===0)return 0;let e=0;for(let s=0;s<i.n;s++)e+=i.contact[s];const n=Ss(t.T);return Math.min(1,n*(.25+Math.min(1,e/60)*.75)+(t.sauceLeft>0?n*.25:0))}function hh(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,o=t>>16&255,a=t>>8&255,l=t&255;return[n+(o-n)*e,s+(a-s)*e,r+(l-r)*e]}const zr=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function Au(i,t,e,n,s,r){let o;if(i.needsSauce){const l=zr(n*.75+Math.min(1,t)*.25);o=hh(i.raw,i.cooked,l)}else o=hh(i.raw,i.cooked,zr(Math.min(1,t)));const a=i.band?i.band[1]:1;if(t>a&&i.burnAt){const l=zr((t-a)/(i.burnAt-a)),c=[i.over>>16&255,i.over>>8&255,i.over&255];o=[o[0]+(c[0]-o[0])*l,o[1]+(c[1]-o[1])*l,o[2]+(c[2]-o[2])*l]}if(!i.needsSauce&&n>0&&s!=null){const l=[s>>16&255,s>>8&255,s&255],c=i.coatTint??.32,h=Math.min(c,n*c);o=[o[0]+(l[0]-o[0])*h,o[1]+(l[1]-o[1])*h,o[2]+(l[2]-o[2])*h]}if(e>0){const l=[36,21,12],c=zr(e);o=[o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c]}return r[0]=o[0],r[1]=o[1],r[2]=o[2],r}function co(i,t){const[e,n]=t;return i>=e&&i<=n?1:i<e?Math.max(0,1-(e-i)/.55):Math.max(0,1-(i-n)/.7)}function E_(i,t){if(!t.charWant)return 1-Math.min(1,i*1.6);const[e,n]=t.charWant;return i<e?.65+.35*(i/e):i<=n?1:Math.max(0,1-(i-n)*2.2)}function A_(i,t,e){const n=i.length;if(!n)return{score:0,meanD:0,meanC:0,verdict:"missing"};let s=0,r=0,o=0;for(let h=0;h<n;h++)s+=co(i[h],e.band)*E_(t[h],e),r+=i[h],o+=t[h];const a=r/n,l=o/n;let c="perfect";return(e.charWant?l>e.charWant[1]+.2:l>.35)?c="burnt":a<e.band[0]-.3?c="raw":a<e.band[0]?c="under":a>e.band[1]+.25?c="over":a>e.band[1]?c="bitOver":e.charWant&&l<e.charWant[0]&&(c="pale"),{score:s/n,meanD:a,meanC:l,verdict:c}}function Ll(i,t){const[e,n]=t;return i>=e&&i<=n?1:Math.max(0,1-(i<e?e-i:i-n)/.3)}const C_={raw:{prawn:"The prawns are still grey in the middle. Pink, darling. Pink.",noodles:"These noodles are still stiff. They needed the sauce and a bit more time.",wideNoodles:"The noodles are still stiff. Sauce, then heat.",egg:"The egg is still runny. Let it set before you move on.",tofu:"The tofu never saw the heat. It wants a golden crust.",garlic:"Raw garlic. That bite will stay with the customer all night.",rice:"The rice is still cold in the middle. Fry it properly.",porkBelly:"The pork is still pink. Give it the heat.",sobaNoodles:"The noodles never took the sauce. Keep flipping.",mince:"That chicken is still pink. Nobody wants that.",chickenSlice:"That chicken is still pink. Nobody wants that.",basil:"The basil never went in hot. It should be just wilted.",okonomiBase:"Pale and raw in the middle. It needs longer on each side.",takoBall:"Raw batter in the middle. Keep turning them on the heat.",_:"Some of this is still raw."},under:{prawn:"The prawns needed another moment.",noodles:"Noodles a little firm. Almost there.",tofu:"Tofu could have gone a shade more golden.",rice:"The rice wanted a little longer. Crispier, please.",mince:"The chicken needed another moment.",chickenSlice:"The chicken needed another moment.",_:"A touch underdone."},over:{prawn:"Rubbery prawns. They cook in seconds, not minutes.",sprouts:"The sprouts have gone limp. They should snap.",chives:"The chives went dark and sad. In at the very end, quick toss, out.",scallion:"The spring onions went dark. In at the end, one toss.",basil:"The basil has cooked to nothing. Off the heat, just wilt it.",gailan:"The broccoli has gone soft. It should still have a crunch.",cabbage:"The cabbage has gone limp. It should still have a bite.",egg:"The egg is dry.",mince:"Dry chicken. Take it off sooner.",chickenSlice:"Dry chicken. Take it off sooner.",_:"Some of it is overcooked."},burnt:{garlic:"Burnt garlic. I can taste it from over here.",okonomiBase:"Burnt on the bottom. Flip it sooner.",takoBall:"Burnt patches. Turn them sooner.",birdChilli:"Burnt chilli. The whole market is coughing.",noodles:"The noodles stuck and scorched. Keep them moving.",wideNoodles:"Char, yes. Charcoal, no. Toss them sooner.",rice:"The rice caught on the bottom. Keep it moving.",_:"Something caught on the wok. Keep it moving."},pale:{wideNoodles:"No char on the noodles. Spread them out and let the wok kiss them.",_:"It wanted a bit of colour."}};function R_(i,t){const e=C_[i];return e?e[t]||e._:null}const P_={heiGood:"Proper wok hei. Smoky, like Yaowarat at midnight.",heiNone:"Toss it! The flame is what makes it taste of the street."};function L_(i,t,e,n,s=P_){const r=[];let o=0,a=0;const l={};for(const[I,_]of Object.entries(i.weights)){const b=n.pieces[I]||{d:[],c:[]},k=A_(b.d,b.c,t[I]);l[I]=k,a+=k.score*_,o+=_}const c=o?a/o:0,h=Object.entries(l).filter(([,I])=>I.verdict!=="perfect"&&I.verdict!=="bitOver").sort((I,_)=>I[1].score*i.weights[I[0]]-_[1].score*i.weights[_[0]]);for(const[I,_]of h.slice(0,2)){const b=_.verdict==="missing"?`Where did the ${t[I].name.toLowerCase()} go?`:R_(_.verdict,I);b&&r.push(b)}const f=n.chop??0,u=i.steps.some(I=>I.verb==="chop"),m=i.steps.filter(I=>I.liquid).map(I=>I.liquid).map(I=>{const _=n.pours?.[I]??0,b=Ll(_,e[I].target);if(b<.6&&I!=="oil"){const k=e[I].name.toLowerCase();_<e[I].target[0]?r.push(`Not enough ${k}. It tastes of nothing.`):r.push(I==="tamarind"?"Swimming in sauce. Pad Thai is fried, not stewed.":`Far too much ${k}. Salty!`)}return b}),x=Object.values(n.skills||{}),p=[...u?[f]:[],...m,...x],g=p.length?p.reduce((I,_)=>I+_,0)/p.length:0;u&&f<.6&&r.push("Your cuts are all different lengths. Follow the lines.");for(const I of n.notes||[])r.unshift(I);const M=n.heiOverride!=null?Math.min(1,n.heiOverride*1.1):Math.min(1,(n.hei||0)/5)*.8+Math.min(1,(n.tosses||0)/8)*.2;M>.85?r.push(s.heiGood):n.heiOverride==null&&(n.tosses||0)<2&&r.push(s.heiNone);const v=n.garnish||{};let y=0,R=0;for(const[I,[_,b]]of Object.entries(i.garnish||{})){const k=v[I]||0;y+=k>=_&&k<=b?1:k>b?.4:k>0?.6:0,R++}for(const I of Object.values(n.finish||{}))y+=I,R++;const E=R?y/R:0;i.garnish?.lime&&!(v.lime>0)?r.push("No lime? The customer needs something to squeeze."):i.garnish?.friedEgg&&!(v.friedEgg>0)?r.push("Where is the fried egg? Kra Pao without khai dao is only half a dish."):E>.9&&r.push("Beautiful plate. I would photograph that.");const T=Math.round(c*55+g*20+M*10+E*15),L=T>=85?3:T>=65?2:T>=40?1:0;return r.length||r.push(L===3?"Perfect. You can have my stall.":"Not bad at all."),{total:T,stars:L,cooking:c,technique:g,hei:M,presentation:E,per:l,notes:r.slice(0,3)}}const Cu={cookTime:9,setTime:22,band:[.85,1.35],breakBelow:.55,burnAt:1.75,porkTime:8},I_={cookTime:8,setTime:7,band:[.8,1.3],breakBelow:0,burnAt:1.7,porkTime:8,meltBand:[.55,1.05]};function D_(i=Cu){return{p:i,size:0,d:[0,0],c:[0,0],down:0,set:0,flips:0,broke:0,pork:!1,porkD:0,porkC:0,flipScores:[],folded:!1,foldScore:null}}function U_(i){return i.folded=!0,i.foldScore=co(i.set,i.p.meltBand||[.55,1.05]),i.foldScore}function N_(i,t,e){const n=i.p,s=Ss(t),r=i.down;if(i.d[r]+=s*e/n.cookTime,i.set=Math.min(1.3,i.set+s*e/n.setTime),i.d[r]>n.burnAt&&(i.c[r]=Math.min(1,i.c[r]+(i.d[r]-n.burnAt)*e*.6)),i.pork){const o=r===1?1/n.porkTime:1/(n.porkTime*6);i.porkD+=s*e*o,i.porkD>2.1&&(i.porkC=Math.min(1,i.porkC+(i.porkD-2.1)*e*.5))}}function k_(i){const t=i.p,e=i.d[i.down],n=e<t.breakBelow,s=n?.15:co(e,t.band)*(1-Math.min(1,i.c[i.down]*1.5));return n&&i.broke++,i.flipScores.push(s),i.down=1-i.down,i.flips++,{score:s,broke:n,face:e}}function F_(i){return{cakeD:[i.d[0],i.d[1],Math.min(1.3,i.set/1)],cakeC:[i.c[0],i.c[1],0],porkD:i.pork?[i.porkD]:[],porkC:i.pork?[i.porkC]:[],flip:i.flipScores.length?i.flipScores.reduce((t,e)=>t+e,0)/i.flipScores.length:0,broke:i.broke}}const vs={cookTime:5.5,band:[.8,1.4],burnAt:1.8,turnFloor:.5};function Ru(i,t=1,e=vs){const n=i.length/3;return{p:e,normals:i,d:new Float32Array(n),c:new Float32Array(n),turns:0,angle:0,rate:t,torn:0,turnScores:[]}}const z_={cookTime:5,band:[.8,1.45],burnAt:1.05,charRate:.5,turnFloor:.4};function Pu(i,t){const e=i.normals[t*3+1],n=i.normals[t*3+2];return-(e*Math.cos(i.angle)-n*Math.sin(i.angle))}function O_(i,t,e){const n=Ss(t)*i.rate,s=i.d.length;for(let r=0;r<s;r++){const o=Pu(i,r);if(o<=.05)continue;const a=Math.min(1,(o-.05)*1.6),l=i.p||vs;i.d[r]+=n*e*a/l.cookTime,i.d[r]>l.burnAt&&(i.c[r]=Math.min(1,i.c[r]+(i.d[r]-l.burnAt)*e*(l.charRate??.6)))}}function el(i){let t=0,e=0;for(let n=0;n<i.d.length;n++)Pu(i,n)>.6&&(t+=i.d[n],e++);return e?t/e:0}function B_(i){const t=i.p||vs,e=el(i),n=e<t.turnFloor;n&&i.turns<2&&i.torn++;const s=n?.3:co(e,t.band);return i.turnScores.push(s),i.turns++,i.angle+=Math.PI/2,{score:s,early:n}}function uh(i){const t=i.d.length;let e=0,n=0,s=0,r=0,o=0;for(let l=0;l<t;l++){if(Math.abs(i.normals[l*3])>.8)continue;const c=i.d[l];r+=c,o+=i.c[l],i.c[l]>.3?n++:c<vs.band[0]-.3?s++:c>=vs.band[0]-.1&&e++}const a=t-[...Array(t).keys()].filter(l=>Math.abs(i.normals[l*3])>.8).length||1;return{mean:r/a,meanC:o/a,golden:e/a,burnt:n/a,raw:s/a,formed:i.turns>=2&&!i.torn,turns:i.turns}}const Lu=new st(16050896),fh=new st(14258750),H_=new st(9062942),G_=new st(2758668),V_=new st(3807756);function W_(){const i=[];for(let t=0;t<zt.rows;t++)for(let e=0;e<zt.cols;e++)i.push([zt.x+(e-(zt.cols-1)/2)*zt.pitch,zt.z+(t-(zt.rows-1)/2)*zt.pitch]);return i}class X_{constructor(t){this.r=t;const e=new xe(t,22,16);this.geo=e;const n=e.attributes.position;this.normals=new Float32Array(n.count*3);for(let s=0;s<n.count;s++){const r=n.getX(s),o=n.getY(s),a=n.getZ(s),l=Math.hypot(r,o,a)||1;this.normals.set([r/l,o/l,a/l],s*3)}e.setAttribute("color",new Le(new Float32Array(n.count*3),3)),n.setUsage(rs),this.mesh=new lt(e,new Qt({vertexColors:!0,roughness:.45,clearcoat:.55,clearcoatRoughness:.3,metalness:0})),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.shown=0,this._c=new st}draw(t,e,n,s){this.shown+=(t.angle-this.shown)*Math.min(1,e*12);const r=this.shown,o=Math.cos(r),a=Math.sin(r),l=this.geo.attributes.position,c=this.geo.attributes.color,h=this.normals,f=this.r;for(let u=0;u<l.count;u++){const d=h[u*3],m=h[u*3+1],x=h[u*3+2],p=m*o-x*a,g=m*a+x*o;let M=p*f;M>n&&(M=n),l.setXYZ(u,d*f,M,g*f);const v=t.d[u],y=t.c[u],R=this._c;v<1?R.copy(Lu).lerp(fh,Math.max(0,v)):R.copy(fh).lerp(H_,Math.min(1,(v-1)/.8)),y>0&&R.lerp(G_,Math.min(1,y)),s>0&&p>-.1&&R.lerp(V_,Math.min(.85,s*(.5+p*.6))),c.setXYZ(u,R.r,R.g,R.b)}l.needsUpdate=!0,c.needsUpdate=!0,this.geo.computeVertexNormals()}}class q_{constructor(){this.kind="takopan",this.view="takopan",this.tossLabel="TURN",this.group=new $t;const{w:t,d:e,topY:n,wellR:s}=zt,r=new Lt({color:1841689,map:bu(),metalness:.55,roughness:.55,side:Zt}),o=new Li,a=.012;o.moveTo(-t/2+a,-e/2),o.lineTo(t/2-a,-e/2),o.quadraticCurveTo(t/2,-e/2,t/2,-e/2+a),o.lineTo(t/2,e/2-a),o.quadraticCurveTo(t/2,e/2,t/2-a,e/2),o.lineTo(-t/2+a,e/2),o.quadraticCurveTo(-t/2,e/2,-t/2,e/2-a),o.lineTo(-t/2,-e/2+a),o.quadraticCurveTo(-t/2,-e/2,-t/2+a,-e/2),this.centres=W_();for(const[u,d]of this.centres){const m=new ja;m.absarc(u-zt.x,d-zt.z,s,0,Math.PI*2,!0),o.holes.push(m)}const l=new ao(o,{depth:.012,bevelEnabled:!1,curveSegments:20});l.rotateX(Math.PI/2);const c=new lt(l,r);c.position.set(zt.x,n,zt.z),c.castShadow=c.receiveShadow=!0,this.group.add(c);const h=new xe(s,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2);for(const[u,d]of this.centres){const m=new lt(h,r);m.position.set(u,n,d),m.receiveShadow=!0,this.group.add(m)}const f=new lt(new Ut(t+.04,n-.03-Q.y,e+.04),new Lt({color:11054514,metalness:1,roughness:.4}));f.position.set(zt.x,(n-.03+Q.y)/2,zt.z),this.group.add(f),this.blue=new Te({color:new st(.35,.55,1.6),transparent:!0,opacity:0,depthWrite:!1});for(let u=0;u<5;u++){const d=new lt(new we(.026,.007),this.blue);d.position.set(zt.x-t/2+.04+u*((t-.08)/4),(n+Q.y)/2-.01,zt.z+e/2+.0205),this.group.add(d)}this.sheet=new lt(new we(t-.012,e-.012),new Qt({color:Lu,map:no(),roughness:.35,clearcoat:.6,transparent:!0,opacity:0,depthWrite:!0,metalness:0})),this.sheet.rotation.x=-Math.PI/2,this.sheet.position.set(zt.x,n+.0012,zt.z),this.group.add(this.sheet),this.pools=this.centres.map(([u,d])=>{const m=new lt(new qe(s*.98,20),this.sheet.material);return m.rotation.x=-Math.PI/2,m.position.set(u,n-s,d),m.visible=!1,this.group.add(m),m}),this.octo=new Si(new Rn(.0065,1),new Qt({color:12079194,roughness:.35,clearcoat:.8,metalness:0}),this.centres.length),this.octo.count=0,this.group.add(this.octo),this.bits={},this.views=this.centres.map(()=>new X_(s*.98));for(const u of this.views)u.mesh.visible=!1,this.group.add(u.mesh);this.balls=[],this.fill=0,this.spatula={group:new $t,update(){}},this.light=new Ei(16751178,0,.6,2),this.light.position.set(zt.x,Q.y+.02,zt.z+e/2+.08),this.group.add(this.light),this.plated=!1,this.finish={sauce:0,mayo:0}}reset(){this.fill=0,this.balls=this.views.map((t,e)=>Ru(t.normals,.9+e*37%11/11*.22)),this.octo.count=0;for(const t of Object.keys(this.bits))this.group.remove(this.bits[t]);this.bits={},this.plated=!1,this.finish={sauce:0,mayo:0};for(const t of this.views)t.mesh.visible=!1;this.mayo?.removeFromParent(),this.mayo=null}sprinkle(t,e,n,s=40){const r=new Si(e,n,s),o=new ee,a=new un,l=new Xe,c=new C,h=new C(1,1,1);for(let f=0;f<s;f++)c.set(zt.x+(Math.random()-.5)*(zt.w-.03),zt.topY+.003,zt.z+(Math.random()-.5)*(zt.d-.03)),l.set(Math.random()*.4,Math.random()*6,Math.random()*.4),a.setFromEuler(l),o.compose(c,a,h),r.setMatrixAt(f,o);this.group.add(r),this.bits[t]=r}dropOcto(){const t=new ee;this.centres.forEach(([e,n],s)=>{t.makeTranslation(e+(Math.random()-.5)*.006,zt.topY-.004,n+(Math.random()-.5)*.006),this.octo.setMatrixAt(s,t)}),this.octo.count=this.centres.length,this.octo.instanceMatrix.needsUpdate=!0}toBoat(){this.plated=!0;const t=u_(8);this.slots=t,this.octo.count=0;for(const e of Object.keys(this.bits))this.bits[e].visible=!1}obstacles(){const t=zt.wellR*.98;return(this.slots||[]).map(([e,n])=>({x:e,z:n,cy:it.wellY-.006+Yr.floor+t,R:t}))}container(){return{type:"teppan",heated:!1,cx:zt.x,cz:zt.z,y:zt.topY,hw:zt.w/2,hd:zt.d/2,rimY:zt.topY+.05}}surfaceRay(){return null}dropPoint(){return new C(zt.x,zt.topY+.01,zt.z)}spawn(){return{x:zt.x,y:zt.topY+.05,z:zt.z}}stirPoint(){return{x:zt.x,y:zt.topY,z:zt.z}}toss(){}update(t,e){this.blue.opacity=Math.min(.9,e.flame*1.2),this.light.intensity=e.flame*.5;const n=this.balls.length?Math.min(...this.balls.map(o=>o.turns)):0,s=this.fill;this.sheet.material.opacity=this.plated?0:s>.75?Math.min(1,(s-.75)*6)*(n>=2?0:n===1?.45:1):0,this.pools.forEach(o=>{o.visible=!this.plated&&s>.02&&s<=.99&&n===0,o.position.y=zt.topY-zt.wellR*(1-Math.min(1,s/.75))+8e-4});for(const o of Object.keys(this.bits))this.bits[o].visible=!this.plated&&n===0;const r=zt.wellR*.98;this.views.forEach((o,a)=>{const l=this.balls[a],c=!!l&&s>.5&&(!this.plated||a<8);if(o.mesh.visible=c,!c)return;if(this.plated){const[f,u]=this.slots[a];o.mesh.position.lerp(new C(f,it.wellY-.006+Yr.floor+r,u),Math.min(1,t*6))}else o.mesh.position.set(this.centres[a][0],zt.topY,this.centres[a][1]);const h=this.plated?r:l.turns===0?.001:l.turns===1?r*.55:r;o.draw(l,t,h,this.finish.sauce)})}drawMayo(t){if(!this.mayo){const n=[];for(let r=0;r<=10;r++)n.push(new C(it.x-.08+r*.016,it.wellY-.006+Yr.floor+zt.wellR*2+.002,it.z+(r%2?.04:-.04)));const s=new ir(n);this.mayo=new lt(new ri(s,120,.0016,5,!1),new Qt({color:16182468,roughness:.3,clearcoat:.8,metalness:0})),this.group.add(this.mayo)}const e=this.mayo.geometry.index.count;this.mayo.geometry.setDrawRange(0,Math.floor(Math.min(1,t)*e/6)*6)}}const Hs=new C;function pn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Hs.copy(t),Hs[n]=0,Hs.normalize();const c=.5*o/(o+a),h=1-Hs.angleTo(i)/l;return Math.sign(Hs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Iu extends Ut{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,m=new C,x=.5/s;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/d)){case 0:m.set(1,0,0),u[g+0]=pn(m,l,"z","y",r,n),u[g+1]=1-pn(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),u[g+0]=1-pn(m,l,"z","y",r,n),u[g+1]=1-pn(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),u[g+0]=1-pn(m,l,"x","z",r,t),u[g+1]=pn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),u[g+0]=1-pn(m,l,"x","z",r,t),u[g+1]=1-pn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),u[g+0]=1-pn(m,l,"x","y",r,t),u[g+1]=1-pn(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),u[g+0]=pn(m,l,"x","y",r,t),u[g+1]=1-pn(m,l,"y","x",r,e);break}}}function Ts(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function _e(i,t){const e=i.attributes.position,n=new Float32Array(e.count*3),s=new C,r=[1,1,1];for(let o=0;o<e.count;o++)s.fromBufferAttribute(e,o),r[0]=r[1]=r[2]=1,t(s,r,o),n[o*3]=r[0],n[o*3+1]=r[1],n[o*3+2]=r[2];return i.setAttribute("color",new Le(n,3)),i}function ai(i,t,e){const n=Ts(e),s=i.attributes.position,r=new Map;for(let o=0;o<s.count;o++){const a=`${s.getX(o).toFixed(5)},${s.getY(o).toFixed(5)},${s.getZ(o).toFixed(5)}`;r.has(a)||r.set(a,[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t]);const l=r.get(a);s.setXYZ(o,s.getX(o)+l[0],s.getY(o)+l[1],s.getZ(o)+l[2])}return i.computeVertexNormals(),i}function Ie(i){return i.index?i.toNonIndexed():i}function Es(i){const t=i.map(e=>{const n=Ie(e);for(const s of Object.keys(n.attributes))s!=="position"&&s!=="normal"&&s!=="color"&&n.deleteAttribute(s);return n.attributes.normal||n.computeVertexNormals(),n});return _u(t)}function Y_(){const n=Math.PI*1.45,s=[],r=[],o=[];for(let m=0;m<=44;m++){const x=m/44,p=-.3+x*n,g=Math.cos(p)*.0115,M=Math.sin(p)*.0115,v=Math.abs(Math.sin(x*Math.PI*6)),y=(.0078*(1-x)+.0026*x)*(.93+.1*v)*(x<.04?.75+x*6:1),R=Math.cos(p),E=Math.sin(p);for(let T=0;T<=12;T++){const L=T/12*Math.PI*2,I=Math.cos(L),_=Math.sin(L)*1.18;s.push(g+R*I*y,M+E*I*y,_*y);const b=Math.max(0,I),k=v<.25?1:0,F=1-b*.22-b*k*.25;r.push(1,F*.92+.08,F*.85+.1)}}for(let m=0;m<44;m++)for(let x=0;x<12;x++){const p=m*13+x,g=p+12+1;o.push(p,g,p+1,g,g+1,p+1)}const a=new be;a.setAttribute("position",new qt(s,3)),a.setAttribute("color",new qt(r,3)),a.setIndex(o),a.computeVertexNormals();const l=-.3+n,c=Math.cos(l)*.0115,h=Math.sin(l)*.0115,f=new C(-Math.sin(l),Math.cos(l),0),u=[Ie(a)];for(const m of[-1,1]){const x=new xe(.0052,10,6);x.scale(1.4,.35,.7),x.rotateY(m*.45);const p=new un().setFromUnitVectors(new C(1,0,0),f);x.applyQuaternion(p),x.translate(c+f.x*.006,h+f.y*.006,m*.0035),_e(x,(g,M)=>{M[0]=1,M[1]=.55,M[2]=.42}),u.push(Ie(x))}const d=Es(u);return d.center(),d}function $_(i){const t=i*1.55,e=new Iu(t,t,t,2,t*.14);return ai(e,t*.06,3),_e(Ie(e),(n,s)=>{const r=Math.max(Math.abs(n.x),Math.abs(n.y),Math.abs(n.z))/(t/2);s[1]=.96+r*.04})}function K_(i,t=1){const e=new Rn(i,0);return e.scale(1.1,.62,.85),ai(e,i*.5,t),_e(Ie(e),(n,s)=>{const r=.9+n.y/i*.1;s[0]=s[1]=s[2]=r})}function j_(i){const t=new An(i*.72,i*.2,5,14,Math.PI*1.6);return t.scale(1,1,.55),t.rotateX(Math.PI/2),_e(Ie(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/(i*.72);n[1]=.9+(1-s)*.3,n[2]=.92+(1-s)*.3})}function Z_(i,t=5){const e=new Rn(i,1);e.scale(1.15,.5,.95),ai(e,i*.55,t);const n=Ts(t*7);return _e(Ie(e),(s,r)=>{Math.sin(s.x*400+s.z*260)>.35||n()<.15||(r[1]=.86,r[2]=.45)})}function J_(i){const t=new wl(new C(-i*2.3,0,0),new C(0,i*.9,i*.4),new C(i*2.3,0,-i*.2)),e=new ri(t,10,.0021,6,!1),n=new xe(.0034,8,6);n.scale(1.5,1,1),n.translate(-i*2.4,0,0),_e(e,(r,o)=>{o[0]=1,o[1]=1,o[2]=.97}),_e(n,(r,o)=>{o[0]=.98,o[1]=.9,o[2]=.45});const s=new ri(new uu(new C(i*2.3,0,-i*.2),new C(i*3.1,-i*.2,-i*.4)),2,8e-4,4,!1);return _e(s,(r,o)=>{o[0]=.9,o[1]=.85,o[2]=.75}),Es([e,n,s])}function Q_(i){const t=i*4,e=new Rt(.0024,.0024,t,8,3,!1);return e.scale(1,1,.45),e.rotateZ(Math.PI/2),_e(Ie(e),(n,s)=>{Math.abs(n.x)/(t/2)>.92&&(s[0]=1.25,s[1]=1.2,s[2]=.9)})}function t1(i,t=9){const e=new Rn(i,0);ai(e,i*.7,t);const n=Ts(t);return _e(Ie(e),(s,r,o)=>{if((Math.floor(o/3)*2654435761>>>0)%3===0)r[0]=.72,r[1]=.45,r[2]=.32;else{const l=1.05+n()*.1;r[0]=l,r[1]=l,r[2]=l*.95}})}function e1(i){const t=new qe(i,5);return ai(t,i*.6,13),t.rotateX(-Math.PI/2),_e(Ie(t),(e,n)=>{n[1]=1+e.x/i*.2})}function n1(i){const t=i,e=Math.PI/3,n=new xe(t,14,10,-e/2,e,.12,Math.PI-.24);_e(n,(o,a)=>{a[0]=.32,a[1]=.62,a[2]=.12});const s=[];for(const o of[-1,1]){const a=o*e/2,l=[],c=[],h=14;for(let u=0;u<h;u++){const d=.12+u/h*(Math.PI-.24),m=.12+(u+1)/h*(Math.PI-.24),x=[Math.sin(d)*t*.97,Math.cos(d)*t*.97],p=[Math.sin(m)*t*.97,Math.cos(m)*t*.97],g=T=>[T[0]*Math.cos(a),T[1],-T[0]*Math.sin(a)],M=g(x),v=g(p),y=[0,x[1]*.9,0],R=[0,p[1]*.9,0],E=o>0?[y,M,v,y,v,R]:[y,v,M,y,R,v];for(const T of E){l.push(...T);const L=Math.hypot(T[0],T[2])/t,I=u%3===0?.9:1;c.push((.72+(L>.85?.2:0))*I,.9*I,(.3+(L>.85?.45:0))*I)}}const f=new be;f.setAttribute("position",new qt(l,3)),f.setAttribute("color",new qt(c,3)),f.computeVertexNormals(),s.push(f)}const r=Es([n,...s]);return r.scale(1,1.45,1),r.rotateZ(Math.PI/2),r}function i1(i,t=21){const e=Ts(t),n=[];for(let r=0;r<7;r++){const o=new xe(.00125,7,5);o.scale(2.8,1,1.05),o.rotateY(e()*Math.PI),o.rotateZ((e()-.5)*.8),o.translate((e()-.5)*i*1.2,(e()-.5)*i*.6,(e()-.5)*i*1.2),n.push(o)}const s=Es(n);return _e(s,(r,o)=>{const a=.94+Math.max(0,r.y/i)*.08;o[0]=o[1]=o[2]=a})}function s1(i,t=33){const e=new Rn(i*.9,1);e.scale(1.1,.7,.95),ai(e,i*.65,t);const n=Ts(t);return _e(Ie(e),(s,r)=>{const o=.86+n()*.18;r[0]=o,r[1]=o*.98,r[2]=o*.95})}function r1(i){const t=new Li,e=i*2.2,n=i*.85;t.moveTo(0,-e/2),t.quadraticCurveTo(n,-e*.15,0,e/2),t.quadraticCurveTo(-n,-e*.15,0,-e/2);const s=new rr(t,8),r=s.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getY(o);r.setZ(o,a*a/(n*1.6)*1.2-Math.abs(l)*.08)}return s.rotateX(-Math.PI/2),s.computeVertexNormals(),_e(Ie(s),(o,a)=>{const l=Math.abs(o.x)<n*.08?1.25:1;a[0]=l,a[1]=l,a[2]=l*.9})}function o1(i,t=41){const e=new Iu(i*1.9,i*.45,i*1.2,2,i*.18);return ai(e,i*.18,t),_e(Ie(e),(n,s)=>{const r=.93+(n.y>0?.07:0);s[0]=s[1]=s[2]=r})}function a1(i){const t=new Rt(i*.28,i*.32,i*2.4,9);t.rotateZ(Math.PI/2),_e(t,(n,s)=>{s[0]=1.1,s[1]=1.12,s[2]=.95});const e=new xe(i*.9,10,6);return e.scale(1.2,.18,.9),e.translate(i*.5,i*.25,i*.35),_e(e,(n,s)=>{s[0]=.62,s[1]=.8,s[2]=.62}),Es([t,e])}function l1(i){const t=new Rt(i,i,i*.3,20,1);return _e(Ie(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/i;s>.9||Math.abs(e.y)<i*.14&&s>.85?(n[0]=.22,n[1]=.45,n[2]=.16):s>.35&&s<.6?(n[0]=.86,n[1]=.93,n[2]=.7):(n[0]=.78,n[1]=.9,n[2]=.62)})}function c1(i,t=57){const e=Ts(t),n=new Li;for(let a=0;a<=28;a++){const l=a/28*Math.PI*2,c=i*(.88+e()*.2);a===0?n.moveTo(Math.cos(l)*c,Math.sin(l)*c):n.lineTo(Math.cos(l)*c,Math.sin(l)*c)}const s=new ao(n,{depth:.003,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.002,bevelSegments:2,curveSegments:6});s.rotateX(-Math.PI/2),_e(s,(a,l)=>{const c=Math.hypot(a.x,a.z)/i;if(c>.78){const h=Math.min(1,(c-.78)/.2);l[0]=1-h*.3,l[1]=1-h*.55,l[2]=1-h*.8}});const r=new xe(i*.32,16,10,0,Math.PI*2,0,Math.PI/2);r.scale(1,.6,1),r.translate(i*.1,.0045,-i*.05),_e(r,(a,l)=>{l[0]=1,l[1]=.62,l[2]=.08});const o=Es([s,r]);return o.translate(0,-.002,0),o}function h1(i){const t=new we(i*2.6,i*1.1,10,3),e=t.attributes.position;for(let n=0;n<e.count;n++)e.setZ(n,Math.sin(e.getX(n)/i*2.2)*i*.18);return t.rotateX(-Math.PI/2),t.computeVertexNormals(),_e(Ie(t),(n,s)=>{Math.sin(n.z/i*7)>.2&&(s[0]=1.12,s[1]=1.14,s[2]=1.12)})}function u1(i){const t=new xe(i*1.4,10,6,0,1.3,.6,1.1);return t.scale(1,.35,1),t.center(),_e(Ie(t),(e,n)=>{const s=Math.min(1,Math.hypot(e.x,e.z)/(i*1.2));n[0]=1.05-s*.2,n[1]=1.05-s*.05,n[2]=1.05-s*.3})}function f1(i){const t=new Ut(i*4.2,i*.45,i*.45);return _e(Ie(t),(e,n)=>{const s=.92+(e.y>0?.1:0);n[0]=n[1]=n[2]=s})}function d1(i){const t=new we(i*1.8,i*1.3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n);e.setZ(n,s*s/(i*1.1))}return t.rotateX(-Math.PI/2),t.computeVertexNormals(),_e(Ie(t),(n,s)=>{const r=.85+Math.abs(n.x)/i*.2;s[0]=r*1.05,s[1]=r,s[2]=r*.95})}function p1(i,t=111){const e=new Rn(i,1);return ai(e,i*.35,t),_e(Ie(e),(n,s)=>{n.y>-i*.1?(s[0]=.75,s[1]=.28,s[2]=.36):(s[0]=.98,s[1]=.93,s[2]=.9)})}function m1(i){const t=new Rt(i,i,.003,24);return _e(Ie(t),(e,n)=>{n[0]=1,n[1]=.95,n[2]=.8})}function g1(i){const t=new Rt(i*.5,i*.45,i*3,12);return t.rotateZ(Math.PI/2),_e(Ie(t),(e,n)=>{n[0]=1,n[1]=.85,n[2]=.3})}function Du(){const i=new xe(.022,20,14),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e),s=n>0?1-n/.022*.12:1;t.setXYZ(e,t.getX(e)*s,n*1.28,t.getZ(e)*s)}return i.computeVertexNormals(),i}const Uu={prawn:()=>Y_(),cube:i=>$_(i),bit:i=>K_(i),ring:i=>j_(i),curd:i=>Z_(i),sprout:i=>J_(i),segment:i=>Q_(i),peanut:i=>t1(i),flake:i=>e1(i),wedge:i=>n1(i),clump:i=>i1(i),mince:i=>s1(i),leaf:i=>r1(i),slice:i=>o1(i),gailan:i=>a1(i),disc:i=>l1(i),friedEgg:i=>c1(i),belly:i=>h1(i),cabbage:i=>u1(i),baton:i=>f1(i),bonito:i=>d1(i),octo:i=>p1(i),tortillaDisc:i=>m1(i),cob:i=>g1(i)};Object.keys(Uu).concat(["strand","none"]);const ea=new Map;function As(i){const t=i.shape+":"+i.r;if(!ea.has(t)){const e=Uu[i.shape];if(!e)throw new Error(`shapes: no builder for '${i.shape}'`);const n=e(i.r);n.computeBoundingSphere(),ea.set(t,n)}return ea.get(t)}const Nu=new Float32Array(256);for(let i=0;i<256;i++){const t=i/255;Nu[i]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}const na=i=>Nu[Math.max(0,Math.min(255,i|0))];function qn(i){return new Qt({vertexColors:!0,roughness:i.rough??.5,metalness:0,clearcoat:i.gloss??.3,clearcoatRoughness:.22,sheen:i.sheen??0,sheenRoughness:.5,sheenColor:new st(14221232),side:["flake","wedge","leaf","belly","cabbage","bonito"].includes(i.shape)?Zt:Wn})}class ku{constructor(t,e,n,s){this.points=e,this.sub=2,this.per=(e-1)*this.sub+1,this.width=n,this.maxStrands=t;const r=t*this.per*2,o=new be;this.pos=new Float32Array(r*3),this.nrm=new Float32Array(r*3),this.col=new Float32Array(r*3),o.setAttribute("position",new Le(this.pos,3).setUsage(rs)),o.setAttribute("normal",new Le(this.nrm,3).setUsage(rs)),o.setAttribute("color",new Le(this.col,3).setUsage(rs));const a=[];for(let l=0;l<t;l++)for(let c=0;c<this.per-1;c++){const h=(l*this.per+c)*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}o.setIndex(a),o.setDrawRange(0,0),this.geo=o,this.mesh=new lt(o,s),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this._p=new Float32Array(this.per*3),this._c=new Float32Array(this.per*3)}update(t,e,n){let s=0;for(const r of e){if(s>=this.maxStrands)break;this._build(t,r.first,r.n,n,s++)}this.geo.setDrawRange(0,s*(this.per-1)*6);for(const r of["position","normal","color"])this.geo.attributes[r].needsUpdate=!0}_build(t,e,n,s,r){const o=this._p,a=this._c,l=this.sub,c=t.x;let h=0;for(let p=0;p<n-1;p++){const g=Math.max(0,p-1),M=p,v=p+1,y=Math.min(n-1,p+2);for(let R=0;R<l;R++){const E=R/l,T=E*E,L=T*E;for(let I=0;I<3;I++){const _=c[(e+g)*3+I],b=c[(e+M)*3+I],k=c[(e+v)*3+I],F=c[(e+y)*3+I];o[h*3+I]=.5*(2*b+(-_+k)*E+(2*_-5*b+4*k-F)*T+(-_+3*b-3*k+F)*L),a[h*3+I]=s[(e+M)*3+I]*(1-E)+s[(e+v)*3+I]*E}h++}}for(let p=0;p<3;p++)o[h*3+p]=c[(e+n-1)*3+p],a[h*3+p]=s[(e+n-1)*3+p];h++;const f=this.width/2;let u=1,d=0,m=0;const x=r*this.per*2;for(let p=0;p<h;p++){const g=Math.max(0,p-1),M=Math.min(h-1,p+1);let v=o[M*3]-o[g*3],y=o[M*3+1]-o[g*3+1],R=o[M*3+2]-o[g*3+2];const E=Math.hypot(v,y,R)||1;v/=E,y/=E,R/=E;let T=-R,L=v,I=0;const _=Math.hypot(T,L);_>.2&&(T/=_,L/=_,T*u+L*m<0&&(T=-T,L=-L),u=T,d=I,m=L);const b=d*R-m*y,k=m*v-u*R,F=u*y-d*v;for(let G=0;G<2;G++){const X=(x+p*2+G)*3,B=G?1:-1;this.pos[X]=o[p*3]+u*f*B,this.pos[X+1]=o[p*3+1]+d*f*B,this.pos[X+2]=o[p*3+2]+m*f*B,this.nrm[X]=b,this.nrm[X+1]=k,this.nrm[X+2]=F;const J=.94;this.col[X]=a[p*3]*J,this.col[X+1]=a[p*3+1]*J,this.col[X+2]=a[p*3+2]*J}}}}class x1{constructor(t,e,n){this.group=new $t,this.ings=t,this.sauceColour=n,this.meshes=[],this.noodles=null,t.forEach((s,r)=>{if(s.shape==="strand"){const a=qn(s);a.side=Zt,this.noodles=new ku(s.strands+2,s.points,s.width,a),this.noodleKind=r,this.group.add(this.noodles.mesh),this.meshes.push(null);return}const o=new Si(As(s),qn(s),e[r]);o.count=0,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(rs),o.name="food:"+s.id,o.setColorAt(0,new st(1,1,1)),this.group.add(o),this.meshes.push(o)}),this._m=new ee,this._q=new un,this._p=new C,this._s=new C,this._c=new st,this._rgb=[0,0,0],this.linCol=new Float32Array(4096*3),this._w=new Xe,this._dq=new un,this.time=0}update(t,e=1/60){this.time+=e;const n=new Int32Array(this.meshes.length),s=[];let r=-1;for(let o=0;o<t.n;o++){const a=t.kind[o],l=this.ings[a];Au(l,t.d[o],t.c[o],t.coat[o],this.sauceColour,this._rgb);const c=na(this._rgb[0]),h=na(this._rgb[1]),f=na(this._rgb[2]);if(t.strand[o]>=0){this.linCol[o*3]=c,this.linCol[o*3+1]=h,this.linCol[o*3+2]=f,t.strand[o]!==r&&(r=t.strand[o],s.push({first:o,n:0})),s[s.length-1].n++;continue}const u=this.meshes[a];if(!u)continue;const d=n[a]++;if(d>=u.instanceMatrix.count)continue;if(this._p.set(t.x[o*3],t.x[o*3+1]-(l.colR?l.colR*.5:0),t.x[o*3+2]),this._q.set(t.q[o*4],t.q[o*4+1],t.q[o*4+2],t.q[o*4+3]),l.dances){const p=this.time*(4+t.seed[o]*3)+t.seed[o]*20;this._w.set(Math.sin(p)*.5,Math.sin(p*.7)*.4,Math.cos(p*1.3)*.5),this._dq.setFromEuler(this._w),this._q.multiply(this._dq)}const m=l.shrink?1-(1-l.shrink)*Math.min(1,t.d[o]):1,x=(.85+t.seed[o]*.3)*m;this._s.set(x,x,x),this._m.compose(this._p,this._q,this._s),u.setMatrixAt(d,this._m),this._c.setRGB(c,h,f),u.setColorAt(d,this._c)}this.meshes.forEach((o,a)=>{o&&(o.count=Math.min(n[a],o.instanceMatrix.count),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0))}),this.noodles&&this.noodles.update(t,s,this.linCol)}}const Fu=new st(15919304),dh=new st(13666876),v1=new st(5911064),_1=new st(2364684),ns=.02;function y1(i,t,e){return i<1?e.copy(Fu).lerp(dh,Math.max(0,i)):e.copy(dh).lerp(v1,Math.min(1,(i-1)/.9)),t>0&&e.lerp(_1,Math.min(1,t)),e}function ph(i){const t=[];for(let o=0;o<=10;o++){const a=o/10,l=a<.2?1-(.2-a)*.6:1-(a-.2)/.8,c=a<.2?Math.sin(a/.2*Math.PI/2)*ns/2:ns/2+(1-l)*.004;t.push(new Y(Math.max(0,l),i?c:-c))}i||t.reverse();const n=new Pi(t,48),s=n.attributes.position,r=n.attributes.uv;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getZ(o),c=s.getY(o),h=(Math.sin(a*31+l*17)+Math.sin(a*13-l*29)+Math.sin((a+l)*47))*.0012;s.setY(o,c+(i?h:-h*.4)),r.setXY(o,a*.5+.5,l*.5+.5)}return n.computeVertexNormals(),n}class M1{constructor(){this.group=new $t,this.body=new $t,this.group.add(this.body);const t=Su();this.mat=[0,1].map(()=>new Qt({map:t,color:Fu.clone(),roughness:.55,clearcoat:.35,clearcoatRoughness:.4,metalness:0,side:Zt})),this.bottom=new lt(ph(!1),this.mat[0]),this.top=new lt(ph(!0),this.mat[1]);for(const n of[this.bottom,this.top])n.castShadow=!0,n.receiveShadow=!0,this.body.add(n);const e={shape:"belly",r:.013};this.porkMat=qn({gloss:.6,rough:.4}),this.pork=new $t;for(let n=0;n<4;n++){const s=new lt(As(e),this.porkMat);s.scale.set(1.6,1,1.4),s.position.set(-.04+n*.027,ns/2+.003,n%2?.012:-.01),s.rotation.y=.15*(n%2?1:-1),s.castShadow=!0,this.pork.add(s)}this.pork.visible=!1,this.body.add(this.pork),this.sauce=new lt(new qe(1,40),new Qt({color:3807756,alphaMap:er(),roughness:.12,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:0,depthWrite:!1,metalness:0})),this.sauce.rotation.x=-Math.PI/2,this.group.add(this.sauce),this.mayo=this._mayo(),this.group.add(this.mayo.mesh),this.flipT=1,this.flipFrom=0,this.flips=0,this.moveT=1,this.radius=0,this._c=new st,this._rgb=[0,0,0],this.at(Et.x,Et.topY,Et.z),this.group.visible=!1}_mayo(){const t=[];for(let h=0;h<=9;h++){const f=-.8+h/9*1.6;t.push([f,h%2?.8:-.8])}const n=[];for(let h=0;h<t.length-1;h++)for(let f=0;f<8;f++){const u=f/8;n.push([t[h][0]+(t[h+1][0]-t[h][0])*u,t[h][1]+(t[h+1][1]-t[h][1])*u])}const s=n.length,r=.035,o=new Float32Array(s*2*3);for(let h=0;h<s;h++){const f=n[Math.max(0,h-1)],u=n[Math.min(s-1,h+1)];let d=u[0]-f[0],m=u[1]-f[1];const x=Math.hypot(d,m)||1;d/=x,m/=x;const p=Math.hypot(n[h][0],n[h][1]),g=p>.9?.9/p:1,M=n[h][0]*g,v=n[h][1]*g;o.set([M-m*r,0,v+d*r,M+m*r,0,v-d*r],h*6)}const a=[];for(let h=0;h<s-1;h++){const f=h*2;a.push(f,f+2,f+1,f+1,f+2,f+3)}const l=new be;return l.setAttribute("position",new Le(o,3)),l.setIndex(a),l.computeVertexNormals(),l.setDrawRange(0,0),{mesh:new lt(l,new Qt({color:16182468,roughness:.3,clearcoat:.8,metalness:0,side:Zt})),segs:s-1}}at(t,e,n){this.group.position.set(t,e,n)}flip(){this.flipT=0,this.flipFrom=this.flips*Math.PI,this.flips++}toPlate(t=0){this.moveT=0,this.moveFrom=this.group.position.clone(),this.moveOff=t}topY(){return this.group.position.y+ns/2+.003}update(t,e,n={sauce:0,mayo:0}){this.group.visible=e.size>.01;const s=.05+Math.min(1.1,e.size)*.045;this.radius=s,this.body.scale.set(s,1,s),this.pork.scale.set(1/s,1,1/s),this.pork.visible=e.pork;for(const o of[0,1])y1(e.d[o],e.c[o],this.mat[o].color);if(Au({raw:15910076,cooked:14723184,over:9062940,band:[.9,1.45],burnAt:2.1},e.porkD,e.porkC,0,null,this._rgb),this.porkMat.color.setRGB(this._rgb[0]/255,this._rgb[1]/255,this._rgb[2]/255,hn),this.flipT<1){this.flipT=Math.min(1,this.flipT+t/.55);const o=this.flipT;this.body.position.y=Math.sin(o*Math.PI)*.1,this.body.rotation.x=this.flipFrom+o*Math.PI;const a=o>.85?1-Math.sin((o-.85)/.15*Math.PI)*.25:1;this.body.scale.y=a}else this.body.position.y=0,this.body.rotation.x=this.flips*Math.PI,this.body.scale.y=1;if(this.moveT<1){this.moveT=Math.min(1,this.moveT+t/.7);const o=this.moveT,a=o*o*(3-2*o);this.group.position.set(this.moveFrom.x+(it.x+(this.moveOff||0)-this.moveFrom.x)*a,this.moveFrom.y+(it.wellY+ns/2+.001-this.moveFrom.y)*a+Math.sin(o*Math.PI)*.08,this.moveFrom.z+(it.z-this.moveFrom.z)*a)}const r=ns/2+.0045;this.sauce.position.y=r,this.sauce.scale.setScalar(s*(.5+Math.min(1,n.sauce)*.45)),this.sauce.material.opacity=Math.min(.95,n.sauce*1.6),this.mayo.mesh.position.y=r+.0015,this.mayo.mesh.scale.set(s,1,s),this.mayo.mesh.geometry.setDrawRange(0,Math.floor(Math.min(1,n.mayo)*this.mayo.segs)*6)}}function w1(i=1,t=0){const e=Math.max(.8,1.7-.15*(i-1)-.12*t),n=Math.max(.13,.24-.025*(i-1)-.02*t);return{period:e,width:n}}function b1(i,t){const{period:e,width:n}=w1(i,t);return{t:0,period:e,width:n,zone:[.5-n/2,.5+n/2]}}function zu(i){return(1-Math.cos(2*Math.PI*i.t/i.period))/2}function S1(i,[t,e]){if(i>=t&&i<=e)return 1;const n=i<t?t-i:i-e;return Math.max(0,1-n/.3)}function T1(i,t=.5){const e=zu(i),n=S1(e,i.zone),s=.25+t*.5;return i.zone=[s-i.width/2,s+i.width/2],{q:n,p:e}}function E1(i){const t=(i.zone[0]+i.zone[1])/2;i.t=Math.acos(1-2*t)/(2*Math.PI)*i.period}function Ou(i,t){return i*(1+t*.9)}const A1=.3;function C1(){const i=new $t,t=new Lt({color:11843772,metalness:1,roughness:.35,side:Zt}),e=.1,n=[[0,.002],[e*.55,.002],[e*.85,.02],[e,.06],[e+.003,.062],[e-.001,.059],[e*.83,.021],[e*.52,.005],[0,.005]];i.add(new lt(new Pi(n.map(([r,o])=>new Y(r,o)),40),t));const s=new lt(new qe(e*.86,40),new Qt({map:Su(),color:16050896,roughness:.4,clearcoat:.6,metalness:0}));s.rotation.x=-Math.PI/2,s.position.y=.035,i.add(s),i.userData.batter=s,i.position.set(ce.x,ce.topY,ce.z);for(const r of i.children)r.castShadow=!0,r.receiveShadow=!0;return i}const R1={_osakaStart(i){this.cake=i.cake?D_(i.cake==="tortilla"?I_:Cu):null,this.flat=i.cake==="tortilla"?this.tortilla:this.pancake;for(const t of[this.pancake,this.tortilla])t&&(t.group.visible=!1,t.flips=0,t.flipT=1,t.moveT=1,t.foldT=1,t.folded=!1);i.cake==="tortilla"&&(this.tortilla.at(0,Q.y+.045+.00175,0),this.tortilla.sauce.material.color.set(i.finishColours?.sauce??10101264)),this.finish={sauce:0,mayo:0},this.report.skills={},this.report.finish={},this.report.notes=[],this.pancakePlated=!1,this.pancake&&this.pancake.at(0,Q.y+.045,0),this.cooker.reset&&this.cooker.reset(),this.mixBowl&&(this.mixBowl.visible=!1)},_holdVerb(i){return i==="pancake"||i==="fill"||i==="drizzle"},_enter_mix(i){this.cam.go("board"),this.mixBowl||(this.mixBowl=C1(),this.scene.add(this.mixBowl)),this.mixBowl.visible=!0,this.board.bunch.visible=!1,this.st.strokes=0,this.st.anchor=null;const[t,e]=i.strokes;this.hud.showMeter("Batter",[1.3*t/e,1.3]),this.hud.setActions([{id:"next",label:"DONE",disabled:!0}])},_mixMove(){const i=this.pointer.hist,t=i[i.length-1];if(!t)return;if(!this.st.anchor){this.st.anchor=t,this.st.dir=0;return}const e=t.x-this.st.anchor.x,n=t.y-this.st.anchor.y,s=Math.abs(e)>=Math.abs(n)?e:n,r=Math.sign(s);if(Math.abs(s)>.07&&r!==this.st.dir){this.st.strokes++,this.st.dir=r,this.audio.play("sprinkle",{gain:1.2,rate:.5});const o=this.mixBowl.userData.batter;o.rotation.z+=.7,o.position.y=.035+(this.st.strokes%2?.003:0)}r===this.st.dir&&Math.abs(s)>.07&&(this.st.anchor=t)},_mixDone(i){const[t,e]=i.strokes,n=this.st.strokes,s=n<t?Math.max(0,n/t):n<=e?1:Math.max(.2,1-(n-e)/e);this.report.skills.mix=s,n>e*1.3?this.report.notes.push("You overmixed the batter. It went heavy and tough."):n<t*.6&&this.report.notes.push("The batter was barely mixed. Lumps of flour in every bite.")},_enter_pancake(i){this._enterHold(i,"HOLD<br>TO POUR",15919304)},_enter_fill(i){this._enterHold(i,"HOLD<br>TO POUR",15919304)},_enter_drizzle(i){this.cam.go("plate"),this._enterHold(i,i.what==="mayo"?"HOLD TO<br>DRIZZLE":"HOLD<br>TO BRUSH",null)},_enterHold(i,t,e){i.verb!=="drizzle"&&this.cam.go(this.cooker.view),i.verb!=="drizzle"&&this.hud.showFlame(!0),this.st.amount=0,this.st.poured=!1,this.hud.setActions([{id:"pour",label:t,cls:"pour",hold:!0}]),this.hud.showPour(i.target),e!=null&&(this.ladle.setLiquid(e),this.ladle.group.visible=!0),i.verb==="pancake"&&this.mixBowl&&(this.mixBowl.visible=!1)},_holdOsaka(i){const t=this.step;this.st.poured||(this.st.pouring=i,i&&this.audio.play(t.verb==="drizzle"?"sprinkle":"plop",{gain:.6}),!i&&this.st.amount>.03&&this._finishHold())},_finishHold(){const i=this.step;this.st.poured=!0,this.st.pouring=!1;const t=this.st.amount,e=Ll(t,i.target);this.hud.toast(e>.9?"Spot on!":t<i.target[0]?"A bit light":e>.5?"A bit much":"Way too much",e<.6),this.hud.enable("pour",!1),i.verb==="pancake"&&(this.report.skills.size=e),i.verb==="fill"&&(this.report.skills.fill=e),i.verb==="drizzle"&&(this.report.finish[i.what]=e),this.st.doneT=.6},_holdTick(i){const t=this.step,e=this.st;e.poured||(e.pouring&&(e.held=(e.held||0)+i,e.amount=Math.min(1.2,e.amount+Ou(A1,e.held)*i),e.amount>=1.2&&this._finishHold()),this.hud.setPour(e.amount),t.verb==="pancake"&&(this.cake.size=e.amount),t.verb==="fill"&&(this.cooker.fill=e.amount),t.verb==="drizzle"&&(this.finish[t.what]=e.amount))},_enter_top(i){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.left=[...i.items],this.bowls.highlight(this.st.left)},_enter_drop(i){this._enter_top(i)},_tapTopping(){const i=this.st.left[0];if(!i)return;const t=this._press();t<.45?this.hud.toast("Spilled some!",!0):t>.9&&this.hud.toast("Nice!"),this.st.left.shift(),this.bowls.highlight(this.st.left);const e=tn[i];this.bowls.tip(i,this.cooker.dropPoint(),()=>{if(this.step.verb==="top")i==="tortilla"?this.cake.size=.65:i==="cheese"?this.cake.cheese=1:i==="corn"?this.cooker.placeCobs():this.cake.pork=!0;else if(i==="octopus")this.cooker.dropOcto();else{const n=qn(e);n.color.set(e.raw),this.cooker.sprinkle(i,As(e),n,i==="tenkasu"?50:30)}this.audio.play("plop"),this.stove.T>150&&this.audio.play("hiss",{gain:.3}),this.st.left.length||(this.st.doneT=.7)})},_enter_flip(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.showMeter("Underside",[.9,1.3]),this.hud.setActions([{id:"flip",label:"FLIP",cls:"round"}]),this.st.flipped=!1},_doFlip(){if(this.st.flipped)return;this.st.flipped=!0;const i=k_(this.cake);this.flat.flip(),this.audio.play("whoosh"),this.audio.play("plop",{gain:1.2}),this.stove.T>150&&this.audio.play("hiss",{gain:.6}),i.broke?(this.hud.toast("It broke!",!0),this.report.notes.some(t=>t.startsWith("It broke"))||this.report.notes.push("It broke on the flip. Wait for golden underneath before you turn it.")):this.hud.toast(i.score>.85?"Perfect flip!":i.face>this.cake.p.band[1]?"A bit dark":"A bit pale",i.score<.6),this.hud.enable("flip",!1),this.st.doneT=.8},_enter_turn(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.showMeter("Undersides",[.9,1.3]),this.hud.setActions([{id:"turn",label:"TURN",cls:"round"},{id:"next",label:"DONE",disabled:!0}]),this.st.lastTurn=-9},_doTurn(){if(this.time-this.st.lastTurn<.35)return;this.st.lastTurn=this.time;let i=0;for(const e of this.cooker.balls)B_(e).early&&i++;this.audio.play("tick",{gain:1.4}),this.audio.play("crack",{gain:.3,rate:1.4});const t=Math.min(...this.cooker.balls.map(e=>e.turns));this.hud.toast(i>6?"Too soon!":t===1?"Quarter turn":t===2?"Round now!":"Turn"),this.hud.enable("next",t>=2),this.hud.setHint(t<2?"Turn again when the bar is green":"Keep turning until they are golden all round. Then DONE")},_turnDone(){const i=this.cooker.balls.flatMap(e=>e.turnScores.slice(0,4));this.report.skills.turn=i.length?i.reduce((e,n)=>e+n,0)/i.length:0,this.cooker.balls.filter(e=>e.torn).length>3&&this.report.notes.push("Turned too soon: they tore and never rounded. Wait for a golden shell.")},_plateOsaka(){if(this.cake){this.flat.toPlate((1-(this.st.plateQ??1))*.04),this.pancakePlated=!0;const i=tl();return i.puck={x:it.x,z:it.z,r:this.flat.radius*.95,top:this.flat===this.tortilla?it.wellY+.01:it.wellY+.024},this.sim.container=i,!0}if(this.cooker.kind==="takopan"||this.cooker.kind==="grill"){this.cooker.toBoat();const i=tl();return i.spheres=this.cooker.obstacles(),this.sim.container=i,!0}return!1},_osakaUpdate(i){const t=this.stove.T,e=this.cooker.kind==="takopan"||this.cooker.kind==="grill";if((this.cake&&this.cake.size>.02&&!this.pancakePlated||e&&this.cooker.fill>.5&&!this.cooker.plated)&&this.mode==="play"&&(this.report.ironTime=(this.report.ironTime||0)+i,t>190&&t<262&&(this.report.hotTime=(this.report.hotTime||0)+i)),this.cake&&this.cake.size>.02&&!this.pancakePlated&&N_(this.cake,t,i),this.flat&&this.cake&&this.flat.update(i,this.cake,this.finish),e){if(this.cooker.fill>.5&&!this.cooker.plated)for(const s of this.cooker.balls)O_(s,t,i);this.cooker.finish.sauce=this.finish.sauce,this.cooker.finish.mayo=this.finish.mayo,this.finish.mayo>0&&this.cooker.drawMayo&&this.cooker.drawMayo(this.finish.mayo)}},_osakaSizzle(){const i=Ss(this.stove.T);return this.cake&&this.cake.size>.05&&!this.pancakePlated?i*.75:(this.cooker.kind==="takopan"||this.cooker.kind==="grill")&&this.cooker.fill>.3&&!this.cooker.plated?i*.65:0},_osakaStep(i){const t=this.step;if(this._holdVerb(t.verb)&&this._holdTick(i),t.verb==="mix"){const[,e]=t.strokes,n=1.3*this.st.strokes/e;this.hud.setMeter(n,n<1.3*t.strokes[0]/e?"Lumpy":n<=1.3?"Just right":"Overmixed",n>1.3?"Stop! It is getting tough":""),this.hud.enable("next",this.st.strokes>=3)}if(t.verb==="flip"){const e=this.cake.p,n=this.cake.d[this.cake.down],s=.9+(n-e.band[0])/(e.band[1]-e.band[0])*.4;this.hud.setMeter(s,n<e.breakBelow?"Too soft to flip":n<e.band[0]?"Nearly":n<=e.band[1]?"Golden: flip!":"Burning!",this.stove.T<150?"Too cool. More flame":"")}if(t.verb==="turn"){const e=this.cooker.balls,n=e.reduce((o,a)=>o+el(a),0)/e.length,s=e[0]?.p||vs,r=.9+(n-s.band[0])/(s.band[1]-s.band[0])*.4;this.hud.setMeter(r,n<s.turnFloor?"Still setting":n<s.band[0]?"Nearly":n<=s.band[1]?this.cooker.kind==="grill"?"Charred: turn!":"Golden: turn!":"Burning!",this.stove.T<150?"Too cool. More heat":"")}},_osakaReport(i){if(this.cake||this.cooker.kind==="takopan"||this.cooker.kind==="grill"){const t=(this.report.hotTime||0)/Math.max(1,this.report.ironTime||0);this.report.heiOverride=t,t<.5&&this.report.notes.push("The iron was too cool. It needs real heat to crisp.")}if(this.cake){const t=F_(this.cake);i[this.dish.cakeRow||"okonomiBase"]={d:t.cakeD,c:t.cakeC},i.porkBelly={d:t.porkD,c:t.porkC},this.report.skills.flip=t.flip,this.cake.flips<2&&this.report.notes.push("It only went over once. The pork side needs its turn on the steel.")}if(this.cooker.kind==="takopan"&&this.cooker.balls.length){const t=this.cooker.balls.slice(0,8).map(e=>uh(e));i.takoBall={d:t.map(e=>e.formed?e.mean:e.mean*.55),c:t.map(e=>e.burnt)}}if(this.cooker.kind==="grill"&&this.cooker.balls.length){const t=this.cooker.balls.map(e=>uh(e));i.elote={d:t.map(e=>e.mean),c:t.map(e=>e.meanC)}}},_osakaAuto(i){const t=e=>{for(let n=0;n<e;n++)this.update(.016666666666666666)};if(i.verb==="mix"){const e=Math.round((i.strokes[0]+i.strokes[1])/2);this.st.strokes=e,this.next()}else if(this._holdVerb(i.verb)){const e=(i.target[0]+i.target[1])/2;this._holdOsaka(!0);for(let n=0;n<600&&this.st.amount<e;n++)this.update(1/60);this._holdOsaka(!1),t(60)}else if(i.verb==="top"||i.verb==="drop"){for(let e=0;e<i.items.length;e++)this._tapTopping(),t(20);t(90)}else if(i.verb==="flip"){for(let e=0;e<1800&&this.cake.d[this.cake.down]<1.08;e++)this.update(1/60);this._doFlip(),t(70)}else if(i.verb==="turn"){for(let e=0;e<4;e++){for(let n=0;n<1800&&this.cooker.balls.reduce((s,r)=>s+el(r),0)/this.cooker.balls.length<1.05;n++)this.update(1/60);this._doTurn(),t(25)}this.next()}}},P1={_enter_fold(){this.cam.go(this.cooker.view),this.hud.showFlame(!0);const[i,t]=this.cake.p.meltBand;this.hud.showMeter("Cheese",[.9,1.3]),this.st.meltBand=[i,t],this.hud.setActions([{id:"fold",label:"FOLD",cls:"round"}])},_doFold(){if(this.st.folded)return;this.st.folded=!0;const i=U_(this.cake);this.flat.fold(),this.report.skills.fold=i,this.audio.play("whoosh",{gain:.6}),this.hud.toast(i>.85?"Perfect fold!":this.cake.set<this.st.meltBand[0]?"Cheese not melted":"Cheese went oily",i<.6),i<.6&&this.report.notes.push(this.cake.set<this.st.meltBand[0]?"You folded it before the cheese melted. Cold cheese in a quesadilla!":"The cheese split and went oily. Fold it sooner."),this.hud.enable("fold",!1),this.st.doneT=.7},_foldMeter(){const[i,t]=this.st.meltBand,e=this.cake.set,n=.9+(e-i)/(t-i)*.4;this.hud.setMeter(n,e<i?"Still melting":e<=t?"Melted: fold!":"Going oily!",this.stove.T<150?"The comal is too cool. More flame":"")},_enter_shave(i){this.cam.go("trompo"),this.hud.showFlame(!0),this.st.shaves=0,this.st.kind=this.kinds.indexOf(i.item)},_shave(){const i=this.step;if(this.st.shaves>=i.cuts)return;const t=this._press();this.st.shaves++;const e=tn[i.item],n=Math.round(8*(.5+.5*t));for(let s=0;s<n;s++){const r=this.cooker.spawn(s,n,-1);es(this.sim,this.st.kind,r.x,r.y+.02,r.z,e.r,e.mass,.3,-.2,.1)}this.trompoShaved=(this.trompoShaved||0)+1,this.audio.play("chop",{gain:.7,rate:1.3}),this.stove.T>150&&this.audio.play("hiss",{gain:.4}),this.hud.toast(t>.9?"Clean slice!":t>.5?"Good":"Scraps!",t<=.5),this.st.shaves>=i.cuts&&(this.st.doneT=.6)},_trompoTick(i){const t=this.stall?.getObjectByName?.("trompoMeat");if(!t)return;t.rotation.y+=i*.6;const e=1-Math.min(.15,(this.trompoShaved||0)*.012);t.scale.set(e,1,e)}};function L1(){const i=Rl();return i.lona=new Lt({map:Ev(),roughness:.6,metalness:0,side:Zt}),i.lona.map.repeat.set(2,1),i.papel=["#e8307a","#3aa8e8","#f2c230","#6ac83a","#f07a2a","#9a4ae8"].map(t=>new Lt({map:Tv(t),alphaTest:.5,side:Zt,roughness:.8,metalness:0,emissive:new st(t),emissiveIntensity:.25})),i.backdrop=new Te({map:Rv(),fog:!1,color:12105912}),i.backdrop.map.wrapS=wi,i.backdrop.map.repeat.set(-2,1),i.pastor=new Qt({map:Cv(),roughness:.45,clearcoat:.6,clearcoatRoughness:.3,metalness:0}),i.pastor.map.repeat.set(3,2),i.pineapple=new Qt({color:15910976,roughness:.4,clearcoat:.6,metalness:0}),i.pineRind=new Lt({color:9071146,roughness:.8,metalness:0}),i.heater=new Te({color:new st(2.4,.7,.2)}),i.salsaRoja=new Qt({color:10101264,roughness:.2,clearcoat:1,metalness:0}),i.salsaVerde=new Qt({color:4885034,roughness:.2,clearcoat:1,metalness:0}),i.clay=new Lt({color:11031594,roughness:.75,metalness:0}),i.tortillaStack=new Lt({map:Cl(),color:15784080,roughness:.8,metalness:0}),i.cloth=new Lt({color:15261904,roughness:.9,metalness:0}),i}function I1(i,t){const e=Q.y,n=Q.x1-Q.x0,s=Q.z1-Q.z0,r=(Q.z0+Q.z1)/2;i.add(q(new Ut(n,.03,s),t.steel,0,e-.015,r));for(const o of[Q.z0+.02,Q.z1-.03])i.add(q(new Ut(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,o));for(const o of[Q.x0+.01,Q.x1-.01])i.add(q(new Ut(.02,e-.05,s-.04),t.steelDark,o,(e-.05)/2+.02,r));i.add(q(new Ut(ce.r*2.1,ce.h*.8,ce.r*1.5),t.board,ce.x,Q.y+ce.h*.4,ce.z,{}))}function D1(i,t){const{x:e,z:n,baseY:s,h:r,r:o}=Vs;i.add(q(new Rt(.1,.12,.02,20),t.steel,e,Q.y+.01,n)),i.add(q(new Rt(.006,.006,r+.2,8),t.pole,e,s+r/2+.02,n));const a=Ai([[.012,0],[o*.55,.01],[o*.8,r*.35],[o,r*.8],[o*.92,r],[.012,r+.005]],28),l=q(a,t.pastor,e,s,n,{dynamic:!0});l.name="trompoMeat",i.add(l);const c=q(new Rt(.035,.04,.06,16),t.pineapple,e,s+r+.035,n,{dynamic:!0});c.name="trompoPine",i.add(c),i.add(q(new sr(.03,.06,8),t.greens,e,s+r+.09,n)),i.add(q(new Ut(.16,r*1.05,.02),t.steelDark,e,s+r/2,n-.14)),i.add(q(new we(.12,r*.95),t.heater,e,s+r/2,n-.128,{cast:!1}))}function U1(i,t){const e=en.x,n=en.z,s=Ai([[0,0],[.035,0],[.05,.03],[.052,.035],[.046,.033],[.03,.006],[0,.006]],20);for(const[a,l]of[[-.07,t.salsaRoja],[.05,t.salsaVerde]]){i.add(q(s,t.clay,e+a,Q.y,n));const c=new qe(.044,20);c.rotateX(-Math.PI/2),i.add(q(c,l,e+a,Q.y+.026,n,{cast:!1}))}const r=new xe(.02,12,8);r.scale(1,.9,1.15);const o=bs(21);for(let a=0;a<9;a++)i.add(q(r,t.lime,e-.1+o()*.2,Q.y+.02,n+.08+o()*.05,{ry:o()*6}));for(let a=0;a<12;a++)i.add(q(new Rt(.075,.075,.003,28),t.tortillaStack,.3,Q.y+.004+a*.0035,-.28));i.add(q(new Ut(.2,.004,.13),t.cloth,.3,Q.y+.05,-.33,{rz:.1}))}function N1(i,t){for(const c of[-1.12,1.12])for(const h of[-.7,.7])i.add(q(new Rt(.02,.02,2.4,10),t.pole,c,2.4/2,h));const o=new we(2.6,1.8,12,8),a=o.attributes.position;for(let c=0;c<a.count;c++){const h=a.getX(c)/1.3,f=a.getY(c)/.9;a.setZ(c,-(1-h*h)*(1-f*f)*.1)}o.rotateX(Math.PI/2),o.computeVertexNormals(),i.add(q(o,t.lona,0,2.4+.02,0,{cast:!1}));const l=bs(5);for(const c of[-.7-.02,-.1,.7-.2]){for(let f=0;f<14;f++){const u=f/13,d=-1.12+u*1.12*2,m=2.4-.12-Math.sin(u*Math.PI)*.16,x=q(new we(.13,.16),t.papel[f%t.papel.length],d,m-.08,c,{cast:!1,ry:(l()-.5)*.3});i.add(x)}const h=[];for(let f=0;f<=14;f++){const u=f/14;h.push(new C(-1.12+u*1.12*2,2.4-.12-Math.sin(u*Math.PI)*.16+.002,c))}i.add(q(new ri(new ir(h),40,.002,4,!1),t.wire,0,0,0,{cast:!1}))}}function k1(i,t){const e=new we(16,16);e.rotateX(-Math.PI/2),i.add(q(e,t.street,0,0,0,{cast:!1}));const n=new Rt(.15,.13,.03,20),s=new Rt(.13,.17,.4,20,1,!0);for(const[r,o,a]of[[-.6,-1.3,t.stool],[.1,-1.45,t.stoolBlue],[.8,-1.3,t.stool]])i.add(q(s,a,r,.2,o)),i.add(q(n,a,r,.415,o));for(const[r,o]of[[-2.6,-3.4],[2.5,-3.9],[-3.8,-6.2],[3.8,-6.6]])i.add(q(new Ut(1.5,.9,.8),t.farStall,r,.45,o,{cast:!1})),i.add(q(new Ut(1.8,.04,1.3),t.farGlow,r,2.1,o,{cast:!1}))}function F1(i){const t=[{lines:["TACOS","AL PASTOR"],x:-2.1,y:2.6,z:-3.1,w:1.3,h:.6,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["ABIERTO"],x:2.4,y:2.9,z:-4,w:1.1,h:.4,fg:"#ff5aa0",glow:"#ff1a8c"},{lines:["ELOTES"],x:3.4,y:2.2,z:-2.6,w:1,h:.4,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["QUESADILLAS"],x:-3.4,y:2,z:-2.2,w:1.3,h:.4,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#2a8a4a",ry:.6}];for(const e of t){const n=Al(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new lt(new we(e.w,e.h),new Te({map:n,color:new st(1.5,1.5,1.5),fog:!1}));s.position.set(e.x,e.y,e.z),e.ry&&(s.rotation.y=e.ry),i.add(s)}}function z1(i,t){const e=new lt(new Rt(8.5,8.5,7,64,1,!0),t.backdrop);e.material.side=Be,e.position.set(0,3.1,0),e.rotation.y=Math.PI*.5,i.add(e)}function O1(i=L1()){const t=new $t;I1(t,i),D1(t,i),U1(t,i),N1(t,i),k1(t,i),F1(t),z1(t,i);const e=Pl(t);return e.name="stall:cdmx",{group:e,materials:i}}const B1=new st(1,1,1),mh=new st(.95,.72,.4),gh=new st(.2,.13,.08),H1=new st(1.1,1.08,.98);class xh{constructor(){const n=new Rt(.023,.02116,.16,24,14,!1);n.rotateZ(Math.PI/2),this.geo=n;const s=n.attributes.position,r=n.attributes.normal;this.normals=new Float32Array(s.count*3);for(let l=0;l<s.count;l++)this.normals.set([r.getX(l),r.getY(l),r.getZ(l)],l*3);n.setAttribute("color",new Le(new Float32Array(s.count*3).fill(1),3));const o=Av().clone();o.needsUpdate=!0,o.repeat.set(1,1.8),this.mat=new Qt({map:o,vertexColors:!0,roughness:.45,clearcoat:.5,metalness:0}),this.mesh=new lt(n,this.mat),this.mesh.castShadow=!0;const a=new Lt({color:14207120,roughness:.8,metalness:0,side:Zt});for(let l=0;l<3;l++){const c=new lt(new sr(.02,.09,6,1,!0),a);c.rotation.z=Math.PI/2+(l-1)*.25,c.position.set(.16/2+.04,(l-1)*.006,(l-1)*.008),this.mesh.add(c)}this.shown=0,this._c=new st}draw(t,e,n){this.shown+=(t.angle-this.shown)*Math.min(1,e*10),this.mesh.rotation.x=this.shown;const s=this.geo.attributes.color,r=this.normals,o=Math.cos(t.angle),a=Math.sin(t.angle);for(let l=0;l<s.count;l++){const c=t.d[l],h=t.c[l],f=this._c;if(c<1?f.copy(B1).lerp(mh,Math.max(0,c)*.6):f.copy(mh).lerp(gh,Math.min(.7,(c-1)*.6)),h>0&&f.lerp(gh,Math.min(1,h)),n>0){const u=r[l*3+1]*o-r[l*3+2]*a;u>-.2&&f.lerp(H1,Math.min(.85,n*(.4+u*.5)))}s.setXYZ(l,f.r,f.g,f.b)}s.needsUpdate=!0}}class G1{constructor(){this.kind="grill",this.view="grill",this.tossLabel="TURN",this.group=new $t;const{w:t,d:e,grateY:n}=ie,s=new Lt({color:2762790,metalness:.7,roughness:.55,side:Zt}),r=n-Q.y,o=new $t,a=(M,v,y,R)=>{const E=new lt(new Ut(M,r,v),s);E.position.set(ie.x+y,Q.y+r/2,ie.z+R),E.castShadow=!0,o.add(E)};a(t,.01,0,-e/2),a(t,.01,0,e/2),a(.01,e,-t/2,0),a(.01,e,t/2,0);const l=new lt(new Ut(t,.01,e),s);l.position.set(ie.x,Q.y+.005,ie.z),o.add(l),this.group.add(o),this.coalMat=new Lt({color:1314832,roughness:.95,metalness:0,emissive:new st(.9,.16,.02),emissiveIntensity:.4});const c=new Si(new Rn(.018,0),this.coalMat,60),h=new ee,f=new un,u=new Xe,d=new C,m=new C;let x=7;const p=()=>(x=x*16807%2147483647,x/2147483647);for(let M=0;M<60;M++){d.set(ie.x+(p()-.5)*(t-.04),Q.y+.02+p()*.02,ie.z+(p()-.5)*(e-.04)),u.set(p()*6,p()*6,p()*6),f.setFromEuler(u);const v=.7+p()*.6;m.set(v,v*.7,v),h.compose(d,f,m),c.setMatrixAt(M,h)}this.group.add(c);const g=new Rt(.003,.003,t-.02,6);g.rotateZ(Math.PI/2);for(let M=0;M<11;M++){const v=new lt(g,s);v.position.set(ie.x,n,ie.z-e/2+.02+M*((e-.04)/10)),this.group.add(v)}this.light=new Ei(16738858,0,.6,2),this.light.position.set(ie.x,Q.y+.05,ie.z),this.group.add(this.light),this.views=[new xh,new xh],this.views.forEach((M,v)=>{M.mesh.position.set(ie.x-.02,n+.026,ie.z+(v-.5)*.09),M.mesh.visible=!1,this.group.add(M.mesh)}),this.balls=[],this.fill=0,this.plated=!1,this.finish={sauce:0,mayo:0},this.spatula={group:new $t,update(){}},this.time=0}reset(){this.balls=[],this.fill=0,this.plated=!1,this.finish={sauce:0,mayo:0},this.views.forEach((t,e)=>{t.mesh.visible=!1,t.shown=0,t.mesh.position.set(ie.x-.02,ie.grateY+.026,ie.z+(e-.5)*.09)})}placeCobs(){this.balls=this.views.map((t,e)=>Ru(t.normals,e?1.05:.95,z_)),this.fill=1,this.views.forEach(t=>{t.mesh.visible=!0})}toBoat(){this.plated=!0,this.slots=[[it.x-.01,it.z-.028],[it.x+.01,it.z+.028]]}obstacles(){const t=[];for(const[e,n]of this.slots||[])for(let s=0;s<4;s++)t.push({x:e-.06+s*.04,z:n,cy:it.wellY+.024,R:.023});return t}container(){return{type:"teppan",heated:!1,cx:ie.x,cz:ie.z,y:ie.grateY,hw:ie.w/2,hd:ie.d/2,rimY:ie.grateY+.05}}surfaceRay(){return null}dropPoint(){return new C(ie.x,ie.grateY+.02,ie.z)}spawn(){return{x:ie.x,y:ie.grateY+.05,z:ie.z}}stirPoint(){return{x:ie.x,y:ie.grateY,z:ie.z}}toss(){}update(t,e){this.time+=t,this.coalMat.emissiveIntensity=.15+e.flame*.55*(.85+Math.sin(this.time*3.1)*.1+Math.sin(this.time*7.3)*.05),this.light.intensity=e.flame*.8,this.views.forEach((n,s)=>{const r=this.balls[s];r&&(this.plated&&n.mesh.position.lerp(new C(this.slots[s][0],it.wellY+.024,this.slots[s][1]),Math.min(1,t*6)),n.draw(r,t,this.finish.mayo))})}}const Bu=new st(16048808),vh=new st(14196816),V1=new st(8014364),W1=new st(2364684),ni=.08,ti=.0035;function X1(i,t,e){return i<1?e.copy(Bu).lerp(vh,Math.max(0,i)):e.copy(vh).lerp(V1,Math.min(1,(i-1)/.9)),t>0&&e.lerp(W1,Math.min(1,t)),e}function ia(i,t){const e=new qe(ni,32,Math.PI/2,Math.PI);e.rotateX(t?-Math.PI/2:Math.PI/2),e.translate(0,i,0);const n=e.attributes.position,s=e.attributes.uv;for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/(2*ni)+.5,n.getZ(r)/(2*ni)+.5);return e}class q1{constructor(t={sauce:10101264,mayo:16052454}){this.group=new $t,this.body=new $t,this.group.add(this.body);const e=Cl();this.mat=[0,1].map(()=>new Lt({map:e,color:Bu.clone(),roughness:.75,metalness:0}));const n=()=>{const o=new $t,a=new lt(ia(ti/2,!0),this.mat[1]),l=new lt(ia(-ti/2,!1),this.mat[0]);for(const c of[a,l])c.castShadow=!0,c.receiveShadow=!0,o.add(c);return o};this.left=n(),this.hinge=new $t;const s=n();s.rotation.y=Math.PI,this.hinge.add(s),this.body.add(this.left,this.hinge),this.cheeseMat=new Qt({map:no(),color:16182464,roughness:.6,clearcoat:0,metalness:0,transparent:!0,opacity:0}),this.cheese=new lt(ia(ti/2+.0015,!0),this.cheeseMat),this.cheese.scale.set(.88,1,.88),this.body.add(this.cheese),this.sauce=new lt(new qe(ni*.85,32,Math.PI/2,Math.PI),new Qt({color:t.sauce,alphaMap:er(),roughness:.15,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1,metalness:0})),this.sauce.rotation.x=-Math.PI/2,this.group.add(this.sauce);const r=[];for(let o=0;o<=7;o++)r.push(new C(-ni*.1-o/7*ni*.75,0,(o%2?1:-1)*ni*.6*Math.sqrt(1-(o/7*.8)**2)));this.crema=new lt(new ri(new ir(r),90,.0017,5,!1),new Qt({color:t.mayo,roughness:.3,clearcoat:.8,metalness:0})),this.group.add(this.crema),this.radius=ni*.7,this.flipT=1,this.flips=0,this.flipFrom=0,this.foldT=1,this.folded=!1,this.moveT=1,this.at(Et.x,Et.topY+ti/2,Et.z),this.group.visible=!1}at(t,e,n){this.group.position.set(t,e,n)}flip(){this.flipT=0,this.flipFrom=this.flips*Math.PI,this.flips++}fold(){this.foldT=0,this.folded=!0}toPlate(t=0){this.moveT=0,this.moveFrom=this.group.position.clone(),this.moveOff=t}topY(){return this.group.position.y+ti*2+.002}update(t,e,n={sauce:0,mayo:0}){this.group.visible=e.size>.01;for(const l of[0,1])X1(e.d[l],e.c[l],this.mat[l].color);const s=Math.min(1,e.set);this.cheeseMat.opacity=e.cheese?1:0,this.cheeseMat.color.setRGB(.97-s*.05,.93-s*.12,.75-s*.35),this.cheeseMat.clearcoat=s,this.foldT<1&&(this.foldT=Math.min(1,this.foldT+t/.45));const r=this.folded?this.foldT:0;if(this.hinge.rotation.z=r*Math.PI,this.hinge.position.y=Math.sin(r*Math.PI)*.03+r*(ti+.002),this.flipT<1?(this.flipT=Math.min(1,this.flipT+t/.5),this.body.position.y=Math.sin(this.flipT*Math.PI)*.07,this.body.rotation.x=this.flipFrom+this.flipT*Math.PI):(this.body.position.y=0,this.body.rotation.x=this.flips*Math.PI),this.moveT<1){this.moveT=Math.min(1,this.moveT+t/.7);const l=this.moveT,c=l*l*(3-2*l);this.group.position.set(this.moveFrom.x+(it.x+.02+(this.moveOff||0)-this.moveFrom.x)*c,this.moveFrom.y+(it.wellY+ti-this.moveFrom.y)*c+Math.sin(l*Math.PI)*.08,this.moveFrom.z+(it.z-this.moveFrom.z)*c)}const o=ti*2+.0035;this.sauce.position.y=o,this.sauce.material.opacity=Math.min(.9,n.sauce*1.5),this.sauce.scale.setScalar(.5+Math.min(1,n.sauce)*.5),this.crema.position.y=o+.0015;const a=this.crema.geometry.index.count;this.crema.geometry.setDrawRange(0,Math.floor(Math.min(1,n.mayo)*a/6)*6)}}const je=.24;class Y1{constructor(t){this.ing=t,this.group=new $t,this.group.position.set(ce.x,ce.topY,ce.z),this.start=-je/2,this.end=je/2;const e=t.bunch||{style:"blade",colour:t.raw},n=(d,m={})=>new Qt({color:d,roughness:.45,sheen:.5,sheenColor:new st(14221232),clearcoat:.35,metalness:0,...m}),s=new $t,r=(d,m,x,p,g,M=0)=>{const v=new lt(d,m);v.position.set(x,p,g),v.rotation.y=M,v.castShadow=!0,v.receiveShadow=!0,s.add(v)};if(e.style==="pods"){const d=n(e.colour,{sheen:0,clearcoat:.9,roughness:.3}),m=n(e.base??4160038),x=new Rt(.0038,.0012,.056,10);x.rotateZ(Math.PI/2),x.translate(.028,0,0);const p=new Rt(.001,.0016,.012,6);p.rotateZ(Math.PI/2),p.translate(-.004,0,0);for(let g=0;g<3;g++)for(let M=0;M<4;M++){const v=M*.06+g%2*.012,y=(g-1)*.009;r(x,d,v,.004,y,Math.sin(g*3+M)*.05),r(p,m,v,.004,y)}}else if(e.style==="stalk"){const d=n(e.colour),m=n(e.base??3111466,{side:Zt}),x=new Rt(.0048,.0058,je*.8,10);x.rotateZ(Math.PI/2),x.translate(je*.4,0,0);const p=new xe(.03,12,8);p.scale(1.4,.12,.8);for(let g=0;g<3;g++)r(x,d,0,.005+(g===1?.004:0),(g-1)*.012),r(p,m,je*.86,.007+g*.002,(g-1)*.016,(g-1)*.4)}else if(e.style==="head"){n(e.colour,{sheen:.3});const d=n(e.base??10273914,{sheen:.3}),m=new xe(.075,20,12,0,Math.PI*2,0,Math.PI/2);m.scale(je/.15*.5,.9,.95),m.translate(je/2,0,0),r(m,d,0,0,0);const x=new qe(.074,24);x.rotateX(-Math.PI/2),x.scale(je/.15*.5,1,.95),x.translate(je/2,.001,0)}else{const d=n(e.colour),m=e.base!=null?n(e.base,{sheen:.2}):null;for(let x=0;x<12;x++){const p=new Ut(je,.0022,.0055);p.translate(je/2,0,0),r(p,d,0,.0015+x%3*.0024,(x-5.5)*.0042+Math.sin(x*2.3)*.001,Math.sin(x*1.7)*.012)}if(m){const x=new Rt(.009,.01,.045,12);x.rotateZ(Math.PI/2),x.translate(.02,.004,0),r(x,m,0,0,0)}}const o=new lt(new An(.03,.0025,6,20),new Lt({color:13777450,roughness:.5,metalness:0}));o.rotation.y=Math.PI/2,o.scale.set(1,.3,1),o.position.set(.02,.004,0),e.style!=="pods"&&e.style!=="head"&&s.add(o),s.position.x=this.start,this.bunch=s,this.group.add(s),this.dotGeo=new qe(.0022,10),this.dotGeo.rotateX(-Math.PI/2),this.dotMat=new Te({color:new st(1.6,1.6,1.5),transparent:!0,opacity:.9,depthWrite:!1}),this.guides=new $t,this.group.add(this.guides),this.pile=new Si(As(t),qn(t),40),this.pile.count=0,this.pile.castShadow=!0,this.pile.setColorAt(0,new st(1,1,1)),this.group.add(this.pile);const a=new Lt({color:11975357,metalness:1,roughness:.25}),l=new Lt({color:4860436,roughness:.6,metalness:0}),c=new $t,h=new lt(new Ut(.0025,.07,.17),a);h.position.set(0,.035,0);const f=new lt(new Ut(.001,.008,.17),new Lt({color:15265007,metalness:1,roughness:.12}));f.position.set(0,.002,0);const u=new lt(new Rt(.011,.012,.11,10),l);u.rotation.x=Math.PI/2,u.position.set(0,.058,.14),c.add(h,f,u);for(const d of c.children)d.castShadow=!0;c.rotation.z=.7,this.knife=c,this.knife.position.set(.08,.06,.02),this.group.add(c),this.knifeY=.06,this.knifeDrop=0,this.knifeTarget=new C(.08,.06,.02),this._m=new ee,this._q=new un,this._e=new Xe,this._p=new C,this._s=new C(1,1,1),this.pieces=0}setGuides(t,e){t[e]!=null&&this.knifeTarget.set(t[e],.05,0),this.guides.clear(),t.forEach((n,s)=>{if(!(s<e))for(let r=-4;r<=4;r++){const o=new lt(this.dotGeo,this.dotMat);o.position.set(n,.0095,r*.0065),o.scale.setScalar(s===e?1.3:.8),this.guides.add(o)}})}cutAt(t,e){this.end=t,this.bunch.scale.x=Math.max(.02,(t-this.start)/je),this.knifeDrop=1;const n=3;for(let s=0;s<n&&this.pile.count<40;s++){const r=this.pile.count++;this._p.set(.06+Math.random()*.05,.004+r%5*.0025,.05+Math.random()*.05),this._e.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),this._q.setFromEuler(this._e);const o=Math.max(.6,Math.min(1.4,e/.034));this._s.set(o,1,1),this._m.compose(this._p,this._q,this._s),this.pile.setMatrixAt(r,this._m),this.pile.setColorAt(r,new st(this.ing.raw))}this.pile.instanceMatrix.needsUpdate=!0,this.pile.instanceColor.needsUpdate=!0}sweep(){this.pile.count=0}reset(){this.end=je/2,this.bunch.scale.x=1,this.sweep(),this.bunch.visible=!0}local(t){return t?{x:t.x-ce.x,z:t.z-ce.z}:null}follow(t){t&&this.knifeTarget.set(t.x,.05,t.z*.3)}update(t){this.knifeDrop=Math.max(0,this.knifeDrop-t*5);const e=Math.sin(this.knifeDrop*Math.PI)*.05;this.knife.position.x+=(this.knifeTarget.x-this.knife.position.x)*Math.min(1,t*18),this.knife.position.z+=(this.knifeTarget.z-this.knife.position.z)*Math.min(1,t*18),this.knife.position.y=.05-e}}const _h=i=>new st(i);function $1(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function K1(i=cn.r){const t=[[0,.002],[i*.55,.002],[i*.82,.012],[i,.034],[i+.003,.0355],[i-.001,.033],[i*.8,.013],[i*.52,.0045],[0,.0045]];return new Pi(t.map(([e,n])=>new Y(e,n)),36)}class j1{constructor(t,e,n){this.group=new $t,this.bowls=new Map;const s=K1();this.ids=t,t.forEach((r,o)=>{const a=new $t,l=new lt(s,n);l.castShadow=!0,l.receiveShadow=!0,l.userData.bowlId=r,a.add(l);const c=new lt(new Rt(cn.r*1.25,cn.r*1.25,.07,16),new Te({visible:!1}));c.position.y=.03,c.userData.bowlId=r,a.add(c);const h=new lt(new Sl(cn.r*1.08,cn.r*1.28,40),new Te({color:new st(1.6,1.25,.5),transparent:!0,opacity:0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.002,a.add(h);const f=new $t;a.add(f),this.group.add(a);const u={id:r,group:a,bowl:l,hit:c,ring:h,contents:f,full:!1,home:new C,anim:null,lit:!1};this.bowls.set(r,u),this.fill(r,e[r])}),this.layout(!1),this.time=0}layout(t){const e=this.ids.length;this.ids.forEach((n,s)=>{const r=this.bowls.get(n);if(t&&e>4){const o=Math.ceil(e/2),a=Math.floor(s/o),l=s%o;r.home.set((l-(o-1)/2)*cn.portrait.spacing,Q.y,cn.portrait.rows[a])}else{const o=t?cn.portrait.rows[1]-.04:cn.z;r.home.set((s-(e-1)/2)*(t?cn.portrait.spacing:cn.spacing),Q.y,o)}r.anim||r.group.position.copy(r.home)})}fill(t,e,n){const s=this.bowls.get(t);if(s.contents.clear(),s.full=!!e&&n!==0,!s.full)return;const r=$1(t.length*97+11);if(e.shape==="strand"){const p=e.points,g={x:new Float32Array(9*p*3)},M=new Float32Array(9*p*3),v=_h(e.raw),y=[];for(let T=0;T<9;T++){let L=r()*Math.PI*2;const I=cn.r*(.35+r()*.4);for(let _=0;_<p;_++){const b=T*p+_;L+=.55,g.x[b*3]=Math.cos(L)*I*(.8+r()*.3),g.x[b*3+1]=.012+T*.0016+r()*.004,g.x[b*3+2]=Math.sin(L)*I*(.8+r()*.3),M[b*3]=v.r,M[b*3+1]=v.g,M[b*3+2]=v.b}y.push({first:T*p,n:p})}const R=qn(e);R.side=Zt;const E=new ku(9,p,e.width,R);E.update(g,y,M),s.contents.add(E.mesh);return}if(e.shape==="curd"){const x=new lt(Du(),new Lt({color:15323046,roughness:.55,metalness:0}));x.position.set(0,.03,0),x.rotation.z=1.2,x.castShadow=!0,s.contents.add(x);return}const o=n??Math.min(e.count??10,26),a=qn(e),l=new Si(As(e),a,o),c=new ee,h=new un,f=new Xe,u=new C,d=new C,m=_h(e.raw);for(let x=0;x<o;x++){const p=r()*Math.PI*2,g=Math.sqrt(r())*cn.r*.6;u.set(Math.cos(p)*g,.008+e.r*.6+x/o*.012,Math.sin(p)*g),f.set(r()*6,r()*6,r()*6),h.setFromEuler(f);const M=.85+r()*.3;d.set(M,M,M),c.compose(u,h,d),l.setMatrixAt(x,c),l.setColorAt(x,m)}l.castShadow=!0,s.contents.add(l)}highlight(t){for(const e of this.bowls.values())e.lit=t.includes(e.id)&&e.full}tip(t,e,n){const s=this.bowls.get(t);return!s||s.anim?!1:(s.anim={t:0,from:s.home,to:new C(e.x+(s.home.x>0?.07:-.07),e.y+.13,e.z+.06),fired:!1,onTip:n},!0)}pick(t){const e=t.intersectObjects([...this.bowls.values()].map(n=>n.hit),!1);return e.length?e[0].object.userData.bowlId:null}update(t){this.time+=t;for(const e of this.bowls.values()){const n=e.lit?.55+Math.sin(this.time*5)*.3:0;if(e.ring.material.opacity+=(n-e.ring.material.opacity)*Math.min(1,t*8),!e.anim)continue;const s=e.anim;if(s.t+=t,s.t<.35){const r=s.t/.35,o=r*r*(3-2*r);e.group.position.lerpVectors(s.from,s.to,o),e.group.position.y+=Math.sin(r*Math.PI)*.06,e.group.rotation.z=(e.home.x>0?1:-1)*o*.4}else if(s.t<.75){const r=(s.t-.35)/.4;e.group.position.copy(s.to),e.group.rotation.z=(e.home.x>0?1:-1)*(.4+Math.min(1,r*2)*1.5),!s.fired&&r>.15&&(s.fired=!0,e.contents.clear(),e.full=!1,s.onTip?.())}else if(s.t<1.15){const r=(s.t-.75)/.4,o=r*r*(3-2*r);e.group.position.lerpVectors(s.to,s.from,o),e.group.rotation.z=(e.home.x>0?1:-1)*1.9*(1-o)}else e.group.position.copy(s.from),e.group.rotation.z=0,e.anim=null}}}const Z1=.004,J1=.03;function Q1(i,t,e){const n=[],s=(e-t)/(i+1);for(let r=0;r<i;r++)n.push(e-s*(r+1));return{guides:n,next:0,end:e,start:t,acc:[],pieces:[]}}function ty(i){return i.next<i.guides.length?i.guides[i.next]:null}function ey(i,t){const e=ty(i);if(e===null)return null;const n=Math.max(i.start+.01,Math.min(i.end-.004,t)),s=Math.abs(n-e),r=Math.max(0,1-Math.max(0,s-Z1)/J1),o={from:n,to:i.end,len:i.end-n};return i.acc.push(r),i.pieces.push(o),i.end=n,i.next++,{acc:r,piece:o,done:i.next>=i.guides.length}}function ny(i){return i.acc.length?i.acc.reduce((t,e)=>t+e,0)/i.guides.length:0}class iy{constructor(t=90){this.group=new $t,this.items=[];const e=uv();for(let n=0;n<t;n++){const s=new to({map:e,color:16777215,transparent:!0,depthWrite:!1,opacity:0}),r=new $a(s);r.visible=!1,r.renderOrder=3,this.group.add(r),this.items.push({s:r,life:0,max:1,vx:0,vy:0,vz:0,grow:0,a:0})}this.next=0,this.spark=new sy,this.group.add(this.spark.points)}emit(t,e,n,{colour:s=16777215,size:r=.05,life:o=1.6,rise:a=.12,alpha:l=.35,spread:c=.02}={}){const h=this.items[this.next];this.next=(this.next+1)%this.items.length,h.s.position.set(t+(Math.random()-.5)*c,e,n+(Math.random()-.5)*c),h.s.material.color.set(s),h.s.material.rotation=Math.random()*Math.PI*2,h.s.scale.setScalar(r),h.life=0,h.max=o*(.8+Math.random()*.4),h.vx=(Math.random()-.5)*.03,h.vy=a*(.7+Math.random()*.6),h.vz=(Math.random()-.5)*.03,h.grow=r*1.6,h.a=l,h.s.visible=!0}update(t){for(const e of this.items){if(!e.s.visible)continue;e.life+=t;const n=e.life/e.max;if(n>=1){e.s.visible=!1;continue}e.s.position.x+=e.vx*t,e.s.position.y+=e.vy*t,e.s.position.z+=e.vz*t,e.vx+=Math.sin(e.life*3+e.a*9)*.02*t;const s=e.s.scale.x+e.grow*t;e.s.scale.setScalar(s),e.s.material.rotation+=t*.3,e.s.material.opacity=e.a*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}this.spark.update(t)}}class sy{constructor(t=160){this.max=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t);const e=new be;e.setAttribute("position",new Le(this.pos,3).setUsage(rs)),this.points=new cx(e,new lu({color:new st(1.6,1.3,.8),size:.004,transparent:!0,opacity:.9,blending:cs,depthWrite:!1,map:er()})),this.points.frustumCulled=!1,this.geo=e,this.next=0}burst(t,e,n,s=20,r=.9){for(let o=0;o<s;o++){const a=this.next;this.next=(this.next+1)%this.max,this.pos[a*3]=t+(Math.random()-.5)*.08,this.pos[a*3+1]=e,this.pos[a*3+2]=n+(Math.random()-.5)*.08;const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.vel[a*3]=Math.cos(l)*c*.4,this.vel[a*3+1]=c,this.vel[a*3+2]=Math.sin(l)*c*.4,this.life[a]=.3+Math.random()*.4}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.pos[e*3+1]=-10;continue}this.life[e]-=t,this.vel[e*3+1]-=9.8*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t}this.geo.attributes.position.needsUpdate=!0}}const nl=1,yh=3,ry=["thai"];function oy(i,t,e=!1){const n=t.best||{},s=new Set([...ry,...t.opened||[]]),r=c=>(n[c]?.stars??0)>=nl;let o=0;const a=i.map(c=>{const f=(e||c.ready!==!1?c.dishes||[]:[]).map((m,x,p)=>({id:m,level:x+1,best:n[m]||null,passed:r(m),open:e||x===0||r(p[x-1]),needs:x>0?p[x-1]:null})),u=f.filter(m=>m.passed).length,d=u>=yh;return d&&o++,{id:c.id,passedCount:u,stamp:d,dishes:f,open:e||s.has(c.id),playable:f.length>0,toStamp:Math.max(0,yh-u)}}),l=Math.max(0,o-(t.spent||0));return{countries:a,stamps:l,earned:o}}function ay(i,t){const e={dishes:[],stamp:!1};return t.countries.forEach((n,s)=>{const r=i.countries[s];n.dishes.forEach((o,a)=>{o.open&&!r.dishes[a].open&&e.dishes.push(o.id)}),n.stamp&&!r.stamp&&(e.stamp=!0)}),e}const sa=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},$e=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class ly{constructor(t,e){this.root=t,this.h=e,t.innerHTML=`
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
      <button id="sound" aria-label="Sound">SND</button>`,this.$=n=>t.querySelector(n),this.card=this.$("#card"),this.meter=this.$("#meter"),this.flame=this.$("#flame"),this.pour=this.$("#pour"),this.garnish=this.$("#garnish"),this.actions=this.$("#actions"),this.toastEl=this.$("#toast"),this.timing=this.$("#timing"),this.gesture=this.$("#gesture"),this.menu=this.$("#menu"),this.result=this.$("#result"),this.$("#sound").addEventListener("click",()=>e.onSound?.()),this.$("#home").addEventListener("click",()=>e.onMenu?.()),this._flameDrag(),this._toastT=0}setStep(t,e,n,s,r){this.card.classList.remove("hide"),this.card.querySelector(".dn").textContent=t,this.card.querySelector(".say").textContent=e,this.card.querySelector(".hint").textContent=n||"";const o=this.card.querySelector("#dots");o.innerHTML="";for(let a=0;a<r;a++)o.appendChild(sa("i",a<s?"done":a===s?"now":""));requestAnimationFrame(()=>{this.root.style.setProperty("--card-h",this.card.offsetHeight+"px")}),this.root.style.setProperty("--card-h",(this.card.offsetHeight||96)+"px")}setHint(t){this.card.querySelector(".hint").textContent=t}hideCard(){this.card.classList.add("hide")}showFlame(t){this.flame.classList.toggle("hide",!t)}setFlame(t,e){const n=Math.round(t*100);this.flame.querySelector(".fill").style.height=n+"%",this.flame.querySelector(".knob").style.bottom=`calc(${n}% - 7px)`;const s=this.flame.querySelector(".temp");s.textContent=Math.round(e)+"°C",s.style.color=e>230?"#ff7a4a":e>170?"#ffc55a":"#cdbfae"}_flameDrag(){const t=this.flame.querySelector(".track");let e=!1;const n=r=>{const o=t.getBoundingClientRect(),a=1-(r.clientY-o.top)/o.height;this.h.onFlame?.(Math.max(0,Math.min(1,a)))};this.flame.addEventListener("pointerdown",r=>{e=!0,this.flame.setPointerCapture(r.pointerId),n(r),r.stopPropagation()}),this.flame.addEventListener("pointermove",r=>{e&&n(r)});const s=()=>{e=!1};this.flame.addEventListener("pointerup",s),this.flame.addEventListener("pointercancel",s)}showMeter(t,e){this.meter.classList.remove("hide"),this.meter.querySelector(".what").textContent=t;const n=this.meter.querySelector(".band");n.style.left=e[0]/2*100+"%",n.style.width=(e[1]-e[0])/2*100+"%"}setMeter(t,e,n){this.meter.querySelector(".mark").style.left=Math.min(100,t/2*100)+"%",this.meter.querySelector(".state").textContent=e,this.meter.querySelector(".warn").textContent=n||""}hideMeter(){this.meter.classList.add("hide")}showPour(t){this.pour.classList.remove("hide");const e=this.pour.querySelector(".band");e.style.bottom=t[0]*100+"%",e.style.height=(t[1]-t[0])*100+"%",this.setPour(0)}setPour(t){this.pour.querySelector(".fill").style.height=Math.min(100,t*100)+"%"}hidePour(){this.pour.classList.add("hide")}setActions(t){this.actions.innerHTML="",this._btns={};for(const e of t){const n=sa("button","btn "+(e.cls||""),e.label);if(e.disabled&&(n.disabled=!0),e.hold){const s=o=>{o.preventDefault(),n.classList.add("on"),n.setPointerCapture?.(o.pointerId),this.h.onHold?.(e.id,!0)},r=()=>{n.classList.contains("on")&&(n.classList.remove("on"),this.h.onHold?.(e.id,!1))};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("lostpointercapture",r)}else n.addEventListener("click",s=>{s.stopPropagation(),this.h.onAction?.(e.id)});this.actions.appendChild(n),this._btns[e.id]=n}}enable(t,e){this._btns?.[t]&&(this._btns[t].disabled=!e)}label(t,e){this._btns?.[t]&&(this._btns[t].innerHTML=e)}showGarnish(t,e,n){this.garnish.classList.remove("hide"),this.garnish.innerHTML="";for(const s of t){const r=sa("button","chip"+(s.id===n?" sel":""),`<i style="background:${s.css}"></i>${$e(s.name)} <small>${e[s.id]||0}</small>`);r.dataset.id=s.id,r.addEventListener("click",o=>{o.stopPropagation(),this.h.onGarnish?.(s.id)}),this.garnish.appendChild(r)}}hideGarnish(){this.garnish.classList.add("hide")}cue(t=[]){for(const[e,n]of Object.entries(this._btns||{}))n.classList.toggle("cue",t.includes(e)&&!n.disabled)}cueFlame(t){this.flame.querySelector(".track").classList.toggle("cue",!!t)}cueChips(t=[]){this.garnish.querySelectorAll(".chip").forEach(e=>e.classList.toggle("cue",t.includes(e.dataset.id)))}showTiming(t,e){this.timing.classList.remove("hide"),this.timing.querySelector(".lbl").textContent=t,this.setZone(e)}setZone([t,e]){const n=this.timing.querySelector(".zone");n.style.left=t*100+"%",n.style.width=(e-t)*100+"%"}setTiming(t){this.timing.querySelector(".mark").style.left=t*100+"%"}timingFlash(t){this.timing.classList.remove("hit","miss"),this.timing.offsetWidth,this.timing.classList.add(t?"hit":"miss")}hideTiming(){this.timing.classList.add("hide")}showGesture(t,e){this.gesture.className=t,this.gesture.querySelector(".t").textContent=e}hideGesture(){this.gesture.className="hide"}toast(t,e=!1){this.toastEl.textContent=t,this.toastEl.classList.toggle("bad",e),this.toastEl.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toastEl.classList.remove("on"),900)}showMenu(t,e,n){this.menu.classList.remove("hide"),this.$("#home").classList.add("hide");const s=a=>[0,1,2].map(l=>`<i class="${l<a?"on":""}">★</i>`).join(""),r=t.map((a,l)=>{const c=n.countries[l],h=c.dishes.map(m=>{const x=e[m.id];if(!c.open||!m.open){const g=c.open?`Score ${nl}★ on ${$e(e[m.needs].name)} to unlock`:"";return`<div class="dishbtn locked"><span class="lv">${m.level}</span><span class="txt"><span class="n">${$e(x.name)}</span> <span class="l">${$e(x.local||"")}</span><br><span class="l">${g}</span></span><span class="b">LOCKED</span></div>`}const p=m.best?`<span class="st">${s(m.best.stars)}</span>${m.best.total}`:"COOK";return`<button class="dishbtn" data-dish="${m.id}"><span class="lv">${m.level}</span><span class="txt"><span class="n">${$e(x.name)}</span> <span class="l">${$e(x.local||"")}</span><br><span class="l">${$e(x.blurb)}</span></span><span class="b">${p}</span></button>`}).join(""),f=a.soon?.length?`<div class="soonrow">Coming: ${a.soon.map($e).join(" · ")}</div>`:"";let u="";c.open&&c.playable&&(u=c.stamp?'<span class="stamp">Passport stamp earned</span>':`<span class="tostamp">${c.toStamp} more to earn a passport stamp</span>`);let d="";return c.open||(d=c.playable?n.stamps>0?`<button class="btn openbtn" data-open="${a.id}">Open with a passport stamp</button>`:'<div class="soonrow">Locked. Earn a passport stamp to open it</div>':'<div class="soonrow">Locked. Coming soon</div>'),`<div class="country${c.open?"":" soon"}"><div class="h"><b>${$e(a.name)}</b><span>${$e(a.place)}</span></div>${u?`<div class="cstat">${u}</div>`:""}${c.open&&h?`<div class="dishes">${h}</div>`:""}${d}${f}</div>`}).join(""),o=n.earned?`<div class="passport">Passport: ${n.stamps} stamp${n.stamps===1?"":"s"} to spend</div>`:"";this.menu.innerHTML=`<div class="logo"><div class="k">Wiparat’s</div><div class="t">Worldwide<br>Kitchen</div><div class="s">Cook the world’s street food</div></div><div class="list">${o}${r}</div>`,this.menu.querySelectorAll("button.dishbtn").forEach(a=>a.addEventListener("click",()=>this.h.onStart?.(a.dataset.dish))),this.menu.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",()=>this.h.onOpen?.(a.dataset.open)))}hideMenu(){this.menu.classList.add("hide"),this.$("#home").classList.remove("hide")}showResult(t,e,n,s,r={},o={}){const a=[0,1,2].map(c=>`<span class="${c<e.stars?"":"off"}">★</span>`).join(""),l=(c,h)=>`<span>${c}</span><div class="b"><i style="width:${Math.round(h*100)}%"></i></div>`;this.result.innerHTML=`
      <div class="top"><div class="stars">${a}</div><div><div class="score">${e.total}<small> / 100</small></div><div class="best">${s?"NEW BEST":n?"Best "+n.total:""}</div></div></div>
      <div class="parts">${l("Cooking",e.cooking)}${l("Technique",e.technique)}${l($e(o.hei||"Wok hei"),e.hei)}${l("Plating",e.presentation)}</div>
      <div class="noi"><div class="who">${$e(o.judge||"Auntie Noi")} tastes it</div>${e.notes.map(c=>`<p>${$e(c)}</p>`).join("")}</div>
      ${r.dishes?.length?`<div class="news good">Unlocked: <b>${r.dishes.map($e).join(", ")}</b></div>`:""}
      ${r.stamp?'<div class="news stamp">Passport stamp earned! Open a new country from the menu</div>':""}
      ${r.need?`<div class="news">Score ${nl}★ to unlock <b>${$e(r.need)}</b></div>`:""}
      <div class="row"><button class="btn ghost" data-a="menu">Menu</button><button class="btn${r.next?" ghost":""}" data-a="again">Cook again</button>${r.next?`<button class="btn" data-a="go:${r.next}">Next dish</button>`:""}</div>`,this.result.classList.remove("hide"),this.result.querySelectorAll("[data-a]").forEach(c=>c.addEventListener("click",h=>{h.stopPropagation(),this.h.onAction?.(c.dataset.a)}))}hideResult(){this.result.classList.add("hide")}setSound(t){this.$("#sound").textContent=t?"SND":"OFF",this.$("#sound").style.opacity=t?1:.6}clearPlay(){this.hideMeter(),this.hidePour(),this.hideGarnish(),this.hideResult(),this.showFlame(!1),this.setActions([]),this.hideTiming(),this.hideGesture(),this.cueFlame(!1)}}const mi=1e-4;class cy{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const l=r.float()*2-1;o=(o+.02*l)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,l=0,c=0,h=0,f=0,u=0;for(let d=0;d<e;d++){const m=r.float()*2-1;o=.99886*o+m*.0555179,a=.99332*a+m*.0750759,l=.969*l+m*.153852,c=.8665*c+m*.3104856,h=.55*h+m*.5329522,f=-.7616*f-m*.016898,s[d]=(o+a+l+c+h+f+u+m*.5362)*.11,u=m*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function hy(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),l=o?1/0:Math.max(.02,e.dur??.2),c=(e.peak??1)*(r.gain??1);if(c<=0)return null;const h=Math.max(.001,e.a??.005),f=Math.max(0,e.d??0),u=e.s??1,d=Math.max(.005,e.r??.05),m=i.createGain();m.gain.value=mi,m.connect(n);let x,p=null;const g=r.rate??1;if(e.src==="noise")x=i.createBufferSource(),x.buffer=t.get(e.noise||"white"),x.loop=!0,x.loopStart=0,x.playbackRate.value=g;else{x=i.createOscillator(),x.type=e.wave||"sine";const I=e.jitter||0,_=I?1+(r.jitterRoll??0)*I:1,b=Math.max(8,(e.freq??440)*_*g);if(p=x.frequency,p.setValueAtTime(b,a),e.to!=null&&!o){const k=Math.max(8,e.to*_*g),F=a+l;e.glide==="lin"?p.linearRampToValueAtTime(k,F):p.exponentialRampToValueAtTime(k,F)}}let M=x,v=null;if(e.filter){const I=i.createBiquadFilter();I.type=e.filter.type||"lowpass",I.Q.value=e.filter.q??1;const _=Math.max(20,e.filter.freq??1e3);I.frequency.setValueAtTime(_,a),e.filter.to!=null&&!o&&I.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+l),v=I.frequency,M.connect(I),M=I}let y=null,R=null;if(e.lfo&&e.lfo.rate>0){y=i.createOscillator(),y.type="sine",y.frequency.value=e.lfo.rate;const I=i.createGain();if(e.lfo.target==="gain"){const _=Math.min(1,Math.max(0,e.lfo.depth??.5));R=i.createGain(),R.gain.value=1-_*.5,I.gain.value=_*.5,y.connect(I),I.connect(R.gain),M.connect(R),M=R}else e.lfo.target==="filter"&&v?(I.gain.value=e.lfo.depth??200,y.connect(I),I.connect(v)):p&&(I.gain.value=e.lfo.depth??20,y.connect(I),I.connect(p));y.start(a)}M.connect(m);const E=m.gain;E.setValueAtTime(mi,a),E.linearRampToValueAtTime(c,a+h);const T=Math.max(mi,c*u);f>0&&E.linearRampToValueAtTime(T,a+h+f);let L=1/0;if(o)x.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const I=Math.max(a+h+f,a+l-d);E.setValueAtTime(Math.max(mi,f>0?T:c),I),E.linearRampToValueAtTime(mi,a+l),L=a+l+.02,x.start(a,e.src==="noise"?r.noiseOffset??0:void 0),x.stop(L),y&&y.stop(L)}return{endsAt:L,stop(I){const _=Math.max(I,i.currentTime);try{E.cancelScheduledValues(_),E.setValueAtTime(Math.max(mi,E.value),_),E.linearRampToValueAtTime(mi,_+d),x.stop(_+d+.02),y&&y.stop(_+d+.02)}catch{}}}}function ra(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let l=r;for(const c of e.layers||[]){const h=hy(i,t,c,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>l&&h.endsAt!==1/0&&(l=h.endsAt))}return{endsAt:o?1/0:l,stop(c=i.currentTime){for(const h of a)h.stop(c)}}}function uy(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function fy(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Il{constructor(t="lifesim"){this.seed=String(t),this._next=fy(uy(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new Il(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}const dy={chop:{layers:[{src:"noise",noise:"white",dur:.05,a:.001,r:.04,peak:.5,filter:{type:"bandpass",freq:3200,q:.8}},{src:"osc",wave:"sine",freq:190,to:70,dur:.12,a:.002,r:.1,peak:.55}]},clank:{layers:[{src:"osc",wave:"sine",freq:612,dur:.5,a:.002,d:.05,s:.4,r:.45,peak:.16},{src:"osc",wave:"sine",freq:1493,dur:.35,a:.002,r:.33,peak:.1},{src:"osc",wave:"sine",freq:2811,dur:.22,a:.001,r:.2,peak:.06},{src:"noise",noise:"white",dur:.03,a:.001,r:.03,peak:.25,filter:{type:"highpass",freq:2500}}]},whoosh:{layers:[{src:"noise",noise:"white",dur:.45,a:.08,r:.3,peak:.35,filter:{type:"bandpass",freq:500,to:1600,q:.7}}]},flare:{layers:[{src:"noise",noise:"white",dur:.9,a:.02,d:.2,s:.5,r:.6,peak:.55,filter:{type:"lowpass",freq:900,to:300,q:.5}}]},hiss:{layers:[{src:"noise",noise:"white",dur:1.2,a:.005,d:.3,s:.45,r:.8,peak:.5,filter:{type:"highpass",freq:2600,q:.6}}]},crack:{layers:[{src:"noise",noise:"white",dur:.035,a:.001,r:.03,peak:.6,filter:{type:"bandpass",freq:2200,q:1.2}},{src:"osc",wave:"triangle",freq:900,to:400,dur:.04,a:.001,r:.035,peak:.12}]},plop:{layers:[{src:"osc",wave:"sine",freq:320,to:120,dur:.12,a:.004,r:.1,peak:.3},{src:"noise",noise:"white",dur:.08,a:.002,r:.07,peak:.2,filter:{type:"lowpass",freq:1400}}]},tick:{layers:[{src:"osc",wave:"triangle",freq:1200,dur:.05,a:.001,r:.045,peak:.12}]},sprinkle:{layers:[{src:"noise",noise:"white",dur:.04,a:.001,r:.03,peak:.12,filter:{type:"bandpass",freq:5200,q:2}}]},scooter:{layers:[{src:"osc",wave:"sawtooth",freq:70,to:118,glide:"lin",dur:2.8,a:1.1,d:.2,s:.8,r:1.4,peak:.05,filter:{type:"lowpass",freq:420,q:.8}},{src:"noise",noise:"white",dur:2.8,a:1.2,r:1.4,peak:.03,filter:{type:"bandpass",freq:380,q:1}}]}},Mh=[523.3,587.3,659.3,784,880,1046.5];class py{constructor(){this.ctx=null,this.on=!0,this.beds=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.bank=new cy(this.ctx,new Il("kitchen.audio")),this.master=this.ctx.createGain(),this.master.gain.value=this.on?.9:0,this.master.connect(this.ctx.destination),this._beds())}setOn(t){this.on=t,this.master&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.05)}_noiseLoop(t,e=0){const n=this.ctx.createBufferSource();n.buffer=this.bank.get("white"),n.loop=!0;let s=n;for(const o of t){const a=this.ctx.createBiquadFilter();a.type=o.type,a.frequency.value=o.freq,a.Q.value=o.q??.7,s.connect(a),s=a}const r=this.ctx.createGain();return r.gain.value=e,s.connect(r),r.connect(this.master),n.start(0,Math.random()*1.5),r}_beds(){this.ctx;const t=this._noiseLoop([{type:"highpass",freq:1800},{type:"lowpass",freq:9e3}]),e=this._noiseLoop([{type:"lowpass",freq:420,q:.6},{type:"highpass",freq:60}]),n=this._noiseLoop([{type:"bandpass",freq:520,q:.5}],.035);this.beds={sizzle:t,roar:e,street:n},this._crackleT=0,this._scooterT=6}play(t,e={}){if(!this.ctx||!this.on)return;const n=dy[t];n&&ra(this.ctx,this.bank,n,this.master,{gain:e.gain??1,rate:e.rate??.94+Math.random()*.12,noiseOffset:Math.random()*1.5})}chime(t){if(!this.ctx)return;const e=this.ctx.currentTime+.05;(t>=3?[0,2,3,5]:t===2?[0,2,3]:t===1?[0,2]:[2,0]).forEach((s,r)=>{ra(this.ctx,this.bank,{layers:[{src:"osc",wave:"triangle",freq:Mh[s],dur:.5,a:.005,d:.1,s:.5,r:.35,peak:.16},{src:"osc",wave:"sine",freq:Mh[s]*2,dur:.3,a:.005,r:.25,peak:.05}]},this.master,{when:e+r*.14})})}update(t,e,n){if(!this.ctx||!this.beds)return;const s=this.ctx.currentTime;this.beds.sizzle.gain.setTargetAtTime(e*.32,s,.08),this.beds.roar.gain.setTargetAtTime(n*.3,s,.12),this._crackleT-=t,e>.1&&this._crackleT<=0&&(this._crackleT=.02+Math.random()*(.18-e*.15),ra(this.ctx,this.bank,{layers:[{src:"noise",noise:"white",dur:.012+Math.random()*.02,a:.001,r:.01,peak:.08+e*.2,filter:{type:"bandpass",freq:2500+Math.random()*4e3,q:1.5}}]},this.master,{noiseOffset:Math.random()*1.5})),this._scooterT-=t,this._scooterT<=0&&(this._scooterT=9+Math.random()*14,this.play("scooter"))}}const Hu="kitchen.";function ho(i,t){try{const e=localStorage.getItem(Hu+i);return e==null?t:JSON.parse(e)}catch{return t}}function Dl(i,t){try{localStorage.setItem(Hu+i,JSON.stringify(t))}catch{}}function Ul(){return ho("best",{})}function my(i,t,e){const n=Ul(),s=n[i];return s&&s.total>=t?!1:(n[i]={total:t,stars:e},Dl("best",n),!0)}function gy(){const i=ho("progress",{});return{best:Ul(),opened:i.opened||[],spent:i.spent||0}}function xy(i,t){const e=t.countries.find(s=>s.id===i);if(!e||e.open||!e.playable||t.stamps<1)return!1;const n=ho("progress",{});return Dl("progress",{opened:[...n.opened||[],i],spent:(n.spent||0)+1}),!0}function vy(){return ho("prefs",{sound:!0})}function _y(i){Dl("prefs",i)}const yy={peanuts:"#c99a5c",chilli:"#c42a1c",lime:"#86c23a",freshSprouts:"#f5f2de",freshChives:"#4a9a30",cucumber:"#7fbf5e",freshScallion:"#6cb846",friedEgg:"#ffd54a",pepper:"#d6ccbe",aonori:"#3f7a22",beniShoga:"#e0204a",katsuobushi:"#d8a47a",onionBits:"#f4eef4",cilantro:"#3f9a2e",pineapple:"#f2cc40",salsaVerde:"#5a9a30",cotija:"#f6f2e6"},oa={peanuts:160,chilli:110,lime:3,freshSprouts:30,freshChives:30,cucumber:8,freshScallion:30,friedEgg:1,pepper:120,aonori:140,beniShoga:20,katsuobushi:30,onionBits:80,cilantro:60,pineapple:16,salsaVerde:60,cotija:140},Or={peanuts:3,chilli:2,pepper:2,aonori:3,katsuobushi:2,onionBits:3,cilantro:2,salsaVerde:2,cotija:3},My={lime:1,cucumber:1,friedEgg:1,freshSprouts:3,freshChives:3,freshScallion:3,beniShoga:3,pineapple:2},wh={peanuts:14,chilli:8,pepper:10,lime:1,cucumber:2,friedEgg:1,freshSprouts:4,freshChives:4,freshScallion:4,aonori:16,beniShoga:3,katsuobushi:5,onionBits:10,cilantro:8,pineapple:3,salsaVerde:8,cotija:18},bh={shave:"SWIPE DOWN IN THE GREEN",chop:"SWIPE DOWN IN THE GREEN",crack:"TAP IN THE GREEN",add:"TAP IN THE GREEN TO TIP IT",top:"TAP IN THE GREEN",drop:"TAP IN THE GREEN",plate:"TAP IN THE GREEN TO PLATE"},wy={shave:["swipe","SWIPE DOWN"],chop:["swipe","SWIPE DOWN"],crack:["tap","TAP"],add:["tap","TAP"],top:["tap","TAP"],drop:["tap","TAP"],plate:["tap","TAP"],mix:["mix","SWIPE BACK AND FORTH"],cook:["stir","DRAG TO STIR"]},Fn={dx:-.028,dz:.018,base:.056,h:.036};class by{constructor(t){this.camera=t,this.pos=new C(0,1.6,1.4),this.look=new C(0,1,0),this.goal={pos:new C,look:new C},this.view="stall",this.t=0,this.speed=2.6}go(t,e=2.6){this.view=t,this.speed=e}snapTo(t){this.view=t,this._goal(),this.pos.copy(this.goal.pos),this.look.copy(this.goal.look),this._apply()}_goal(){const t=av[this.view];let e=t;this.view==="stall"&&(e={...t,yaw:t.yaw+Math.sin(this.t*.12)*.5}),this.view==="beauty"&&(e={...t,yaw:Math.sin(this.t*.25)*.6}),cv(this.camera,e,this.goal,1.08)}_apply(){this.camera.position.copy(this.pos),this.camera.lookAt(this.look)}update(t){this.t+=t,this._goal();const e=1-Math.exp(-t*this.speed);this.pos.lerp(this.goal.pos,e),this.look.lerp(this.goal.look,e),this._apply()}}class Nl{constructor(t,e,n=new URLSearchParams){this.stage=t,this.scene=t.scene,this.camera=t.camera,this.cam=new by(this.camera),this.params=n,this.stalls={},this._setStall("bangkok"),this.cookers={wok:new o_,teppan:new a_,takopan:new q_,grill:new G1},this.cooker=null,this._setCooker("wok"),this.ladle=new Vv,this.puffs=new iy,this.pancake=new M1,this.tortilla=new q1,this.scene.add(this.ladle.group,this.puffs.group,this.pancake.group,this.tortilla.group),this.egg=new lt(Du(),new Lt({color:15323046,roughness:.55,metalness:0})),this.egg.castShadow=!0,this.egg.visible=!1,this.scene.add(this.egg),this.audio=new py,this.prefs=vy(),this.audio.setOn(this.prefs.sound),this.hud=new ly(e,{onStart:r=>{this.audio.unlock(),this.start(r)},onOpen:r=>{this.audio.unlock(),xy(r,this._progress())&&(this.audio.chime(3),this.menu())},onAction:r=>this.action(r),onHold:(r,o)=>this.hold(r,o),onFlame:r=>{this.audio.unlock(),this.stove.flame=r},onGarnish:r=>{this.garnishSel=r,this._garnishPortion(r)},onSound:()=>{this.audio.unlock(),this.prefs.sound=!this.prefs.sound,this.audio.setOn(this.prefs.sound),this.hud.setSound(this.prefs.sound),_y(this.prefs)},onMenu:()=>this.menu()}),this.hud.setSound(this.prefs.sound),this.raycaster=new $x,this.ndc=new Y,this._bindPointer(t.renderer.domElement),this.stove=lh(),this.sim=ah(1400),this.mode="menu",this.time=0,this.dish=null;const s=n.get("dish");s&&Bs[s]?this.start(s):this.menu(),this.cam.snapTo(this.cam.view)}menu(){this.mode="menu",this._teardown(),this.hud.clearPlay(),this.hud.hideCard(),this.hud.showMenu(Ji,Bs,this._progress()),this.cam.go("stall",1.2),this._setCooker({osaka:"teppan",cdmx:"teppan"}[this.stallId]||"wok"),this.stove.flame=.35}_setStall(t){if(this.stallId===t)return;this.stall&&this.scene.remove(this.stall);const e={bangkok:rh,osaka:y_,cdmx:O1};this.stalls[t]||(this.stalls[t]=(e[t]||rh)());const{group:n,materials:s}=this.stalls[t];this.stall=n,this.M=s,this.stallId=t,this.scene.add(n)}_setCooker(t){const e=this.cookers[t];this.cooker!==e&&(this.cooker&&this.scene.remove(this.cooker.group),this.cooker=e,this.scene.add(e.group))}_progress(){return oy(Ji,gy(),this.params.get("unlock")==="all")}_teardown(){this.riceDome&&(this.scene.remove(this.riceDome),this.riceDome=null),this.plateware&&(this.scene.remove(this.plateware),this.plateware=null);for(const t of["foodView","bowls","board"])this[t]&&(this.scene.remove(this[t].group),this[t]=null);this.sim=ah(1400),this.stove=lh(),this.egg.visible=!1,this.cooker.spatula.group.visible=!1,this.ladle.group.visible=!1}start(t){const e=this._progress(),n=e.countries.flatMap(u=>u.dishes.map(d=>({...d,country:u}))).find(u=>u.id===t);if(!n||!n.open||!n.country.open){this.hud.toast("Locked");return}const s=Bs[t];this._setStall(Ji.find(u=>u.id===s.cuisine)?.stall||"bangkok"),this._setCooker(s.cooker||"wok"),this._teardown(),this.sim.container=this.cooker.container(),this.dish=s,this.mode="play",this.progressBefore=e;const r=s.steps.find(u=>u.verb==="garnish")?.items||[],o=s.steps.filter(u=>u.verb==="shave").map(u=>u.item);this.kinds=[...new Set([...s.bowls,...o,...r])],this.ings=this.kinds.map(u=>({...tn[u],id:u}));const a=s.steps.filter(u=>u.verb==="shave").reduce((u,d)=>u+d.cuts,0),l=this.ings.map(u=>oa[u.id]??(o.includes(u.id)?a*8+8:Math.ceil((u.count||10)*1.6))),c=s.steps.find(u=>u.liquid&&u.liquid!=="oil")?.liquid;this.foodView=new x1(this.ings,l,c?kn[c].colour:null),this.scene.add(this.foodView.group),this.bowls=new j1(s.bowls,tn,this.M.bowl),this.bowls.layout(this.camera.aspect<1),this.scene.add(this.bowls.group);const h=s.steps.find(u=>u.verb==="chop");h&&this.bowls.bowls.has(h.item)&&this.bowls.fill(h.item,null),this.board=new Y1(tn[h?.item||"chives"]),this.scene.add(this.board.group),this.plateware=f_(s.plate?.style||"thai",{leaf:!!s.plate?.leaf}),this.scene.add(this.plateware),s.plate?.rice&&this._riceDome(),this.report={pieces:{},chop:0,pours:{},tosses:0,hei:0,garnish:{}},this.snapD=new Float32Array(this.sim.cap).fill(NaN),this._osakaStart(s);const f=Ji.findIndex(u=>u.id===s.cuisine);this.level={dish:Math.max(1,(Ji[f]?.dishes||[]).indexOf(s.id)+1),country:Math.max(0,f)},this.presses={},this.garnishSel=r[0],this.stepIndex=-1,this.hud.hideMenu(),this.hud.hideResult(),this.next()}get step(){return this.dish?.steps[this.stepIndex]}_riceDome(){const t=tn.rice,e=70,n=new Si(As(t),qn(t),e),s=new ee,r=new un,o=new Xe,a=new C,l=new C(1,1,1),c=it.x+Fn.dx,h=it.z+Fn.dz,f=new st(16250092);for(let m=0;m<e;m++){const x=(m+.5)/e,p=Math.sqrt(x)*Fn.base,g=m*2.39996,M=Fn.h*(1-(p/Fn.base)**2);a.set(c+Math.cos(g)*p,it.wellY+.004+M,h+Math.sin(g)*p),o.set(m*1.3,m*.7,m*2.1),r.setFromEuler(o),s.compose(a,r,l),n.setMatrixAt(m,s),n.setColorAt(m,f)}const u=new lt(new xe(1,24,12,0,Math.PI*2,0,Math.PI/2),qn(t));u.material.vertexColors=!1,u.material.color.set(15723488),u.scale.set(Fn.base*.94,Fn.h*.95,Fn.base*.94),u.position.set(c,it.wellY+.002,h);const d=new $t;d.add(n,u),n.castShadow=n.receiveShadow=u.receiveShadow=!0,this.riceDome=d,this.scene.add(d)}next(){this.step?.verb==="cook"&&this._snapshot(),this._exitStep(),this.stepIndex++;const t=this.step;if(!t)return this.serve();this.stepT=0,this.st={},this.hud.setStep(this.dish.name,t.say,t.hint,this.stepIndex,this.dish.steps.length),this.hud.clearPlay(),this._cues="",this["_enter_"+t.verb].call(this,t),this.tm=bh[t.verb]?b1(this.level.dish,this.level.country):null,this.tm&&this.hud.showTiming(bh[t.verb],this.tm.zone);const n=wy[t.verb],s=t.verb==="cook"&&this.dish.steps.findIndex(r=>r.verb==="cook")===this.stepIndex;n&&(t.verb!=="cook"||s)?(this.hud.showGesture(n[0],n[1]),this.gestureT=2.6):this.hud.hideGesture()}_exitStep(){this.ladle.group.visible=!1,this.st&&(this.st.pouring=!1),this.cooker.spatula.group.visible=!1,this.sim.spatula.on=!1,this.bowls?.highlight([])}_enter_chop(t){this.cam.go("board");const e=this.board;this.st.chop=Q1(t.cuts,-je/2,je/2),e.setGuides(this.st.chop.guides,0),this.hud.setHint("Swipe down anywhere to chop")}_chopSwipe(){const t=this._press(),e=this.st.chop.guides[this.st.chop.next];if(e==null)return;const n=ey(this.st.chop,e+(1-t)*.03*(Math.random()<.5?-1:1));n&&(this.board.cutAt(this.st.chop.end,n.piece.len),this.board.setGuides(this.st.chop.guides,this.st.chop.next),this.audio.play("chop"),this.hud.toast(n.acc>.85?"Perfect!":n.acc>.5?"Good":"Uneven!",n.acc<=.5),n.done&&(this.report.chop=ny(this.st.chop),this.st.doneT=.7))}_enter_heat(t){if(this.cam.go(this.cooker.view),this.hud.showFlame(!0),!t.liquid){this.st.dry=!0,this.st.poured=!0;return}this.st.liquid=t.liquid,this.st.poured=!1,this.hud.setActions([{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0,disabled:!0}]),this.hud.showPour(kn[t.liquid].target),this.ladle.setLiquid(kn[t.liquid].colour),this.ladle.group.visible=!0,this.st.amount=0}_enter_pour(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.liquid=t.liquid,this.st.poured=!1,this.st.amount=0,this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"},{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0}]),this.hud.showPour(kn[t.liquid].target),this.ladle.setLiquid(kn[t.liquid].colour),this.ladle.group.visible=!0}hold(t,e){if(this.audio.unlock(),this._holdVerb(this.step?.verb))return this._holdOsaka(e);t!=="pour"||this.st.poured||(this.st.pouring=e,e&&this.audio.play("plop",{gain:.6}),!e&&this.st.amount>.03&&this._finishPour())}_finishPour(){const t=this.step;this.st.poured=!0,this.st.pouring=!1;const e=kn[t.liquid],n=this.st.amount;this.report.pours[t.liquid]=n;const s=Ll(n,e.target);this.hud.toast(s>.9?"Spot on!":n<e.target[0]?"A bit light":s>.5?"A bit heavy":"Way too much",s<.6),t.liquid==="oil"?this.stove.oil+=n:(this.stove.sauce+=n,this.stove.sauceLeft+=n,b_(this.stove,n),this.stove.T>120&&this.audio.play("hiss",{gain:.8})),this.hud.enable("pour",!1),this.st.doneT=t.verb==="pour"?.6:null}_enter_add(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.left=[...t.items],this.bowls.highlight(this.st.left),this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"}])}_addItem(t,e=1){const n=tn[t],s=this.kinds.indexOf(t),r=this.sim,a=this.bowls.bowls.get(t).home.x>0?1:-1;let l=0;if(n.shape==="strand"){const f=Math.round(n.strands*e);for(let u=0;u<f;u++){const d=this.cooker.spawn(u,f,a);qv(r,s,n.points,n.spacing,d.x,d.y+u*.003,d.z,n.r,n.mass)}l=n.strands*n.points*n.mass*.2}else{const f=Math.round(n.count*e);for(let u=0;u<f;u++){const d=this.cooker.spawn(u,f,a);es(r,s,d.x,d.y,d.z,n.r,n.mass,-a*1.5*Math.random(),-.3,-.2)}l=f*n.mass}ch(this.stove,l*.4);const c=this.stove.T>140&&this.stove.oil>.1,h=this.cooker.dropPoint();c&&(this.puffs.spark.burst(h.x,h.y+.01,h.z,30),this.audio.play("hiss",{gain:.5})),this.audio.play("plop")}_enter_cook(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0);const e=t.focus;this.st.focus=e.map(s=>this.kinds.indexOf(s));const n=e.map(s=>tn[s].name.split(" ").pop().toLowerCase());this.hud.showMeter(n.length>1?n.slice(0,-1).join(", ")+" and "+n.at(-1):tn[e[0]].name,[.9,1.3]),this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"},{id:"next",label:"DONE",disabled:!0}])}_press(){if(!this.tm)return 1;const{q:t}=T1(this.tm,Math.random());this.hud.setZone(this.tm.zone),this.hud.timingFlash(t>.6);const e=this.step.verb;return(this.presses[e]||(this.presses[e]=[])).push(t),this.hud.hideGesture(),t}_snapshot(){const t=this.sim;for(let e=0;e<t.n;e++)this.st.focus.includes(t.kind[e])&&(this.snapD[e]=t.d[e])}_focusState(){const t=this.sim;let e=0,n=0,s=0,r=0;for(let o=0;o<t.n;o++){const a=t.kind[o];if(!this.st.focus.includes(a))continue;const l=this.ings[a],[c,h]=l.band;e+=.9+(t.d[o]-c)/(h-c)*.4,s+=t.c[o],r=Math.max(r,t.c[o]),n++}return n?{v:e/n,c:s/n,maxC:r}:{v:0,c:0,maxC:0}}_enter_crack(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.bowls.fill(t.item,null),this.egg.visible=!0;const e=this.cooker.dropPoint();this.egg.position.set(e.x+.03,e.y+.09,e.z+.03),this.st.eggY=e.y+.09,this.egg.rotation.set(0,0,1.3),this.st.taps=0,this.st.bump=0,this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"}])}_crackTap(){if(this.st.taps>=3)return;const t=this._press();if(this.st.taps++,this.st.bump=1,this.audio.play("crack",{gain:.6+this.st.taps*.2}),t<.45?(this.st.shell=!0,this.hud.toast("Shell in it!",!0)):this.hud.toast(t>.9?"Clean!":"Good"),this.st.taps<3)return;this.st.shell&&!this.report.notes.includes("There is shell in the egg. Crack it cleanly.")&&this.report.notes.push("There is shell in the egg. Crack it cleanly."),this.egg.visible=!1;const e=this.kinds.indexOf(this.step.item),n=tn[this.step.item];for(let s=0;s<n.count;s++){const r=Math.random()*Math.PI*2,o=Math.random()*.03,a=this.cooker.dropPoint();es(this.sim,e,a.x+.02+Math.cos(r)*o,a.y+.02+Math.random()*.02,a.z+.02+Math.sin(r)*o,n.r,n.mass,0,-.4,0)}ch(this.stove,n.count*n.mass*.3),this.stove.T>140&&this.audio.play("hiss",{gain:.4}),this.st.doneT=.5}_enter_plate(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.setActions([{id:"plate",label:"TIP ONTO THE PLATE"}])}_plate(){if(this.st.plated)return;const t=this._press();if(this.report.finish.plate=t,this.st.plateQ=t,t<.5?this.hud.toast("Messy!",!0):t>.9&&this.hud.toast("Neat!"),this.st.plated=!0,this.stove.flame=0,this.hud.showFlame(!1),this.hud.setActions([]),this.cooker.spatula.group.visible=!1,this.sim.spatula.on=!1,!this._plateOsaka()){const e=this.dish.plate?.rice?Fn:null,n=this.st.plateQ??1;Kv(this.sim,e?{x:it.x+e.dx,z:it.z+e.dz,base:e.base,h:e.h}:null,!!this.dish.plate?.mould&&n>=.5,.36+(1-n)*.3)}this.cooker.toss(),this.audio.play("whoosh"),this.audio.play("clank",{gain:.6}),this.cam.go("plate",3),this.st.doneT=1.3,this.plateSteam=30}_enter_garnish(t){this.cam.go("plate"),this.st.items=t.items,this.hud.setHint("Tap a garnish to add it. Tap again for more"),this._garnishHud(),this.hud.setActions([{id:"serve",label:"SERVE"}]),this.st.spawnT=0}_garnishHud(){if(this.step?.verb!=="garnish")return;const t=this.step.items.map(e=>({id:e,name:tn[e].name,css:yy[e]||"#ccc"}));this.hud.showGarnish(t,this.report.garnish,this.garnishSel),this._cues=""}_garnishPortion(t){this.garnishSel=t;const e=wh[t]||1,n=this._foodCentre();for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*(Or[t]?.05:.035);this.st.spawnT=0,this._garnishAt(new C(n.x+Math.cos(r)*o,it.wellY,n.z+Math.sin(r)*o),!Or[t],!0)}}_foodCentre(){let t=0,e=0,n=0;for(let s=0;s<this.sim.n;s++)this.ings[this.sim.kind[s]].garnish||(t+=this.sim.x[s*3],e+=this.sim.x[s*3+2],n++);return n?{x:t/n,z:e/n}:{x:it.x,z:it.z}}_garnishAt(t,e,n=!1){const s=this.garnishSel;if(!s||!t)return;const r=t.x-it.x,o=t.z-it.z,a=Math.hypot(r,o);if(a>it.r*1.15)return;const l=a>it.r-.02?(it.r-.02)/a:1,c=it.x+r*l,h=it.z+o*l,f=tn[s],u=this.kinds.indexOf(s),d=this.report.garnish[s]||0;if(d>=oa[s]){e&&this.hud.toast("That will do!");return}let m=0;const x=it.wellY+(this.dish.plate?.rice?.12:.09);if(Or[s]){if(!e&&this.st.spawnT>0)return;this.st.spawnT=.035,m=n?1:Or[s];for(let p=0;p<m;p++)es(this.sim,u,c+(Math.random()-.5)*.02,x+Math.random()*.02,h+(Math.random()-.5)*.02,f.colR??f.r,f.mass);this.audio.play("sprinkle",{gain:.8})}else if(e){m=Math.min(n?1:My[s]||1,oa[s]-d);for(let p=0;p<m;p++){const g=es(this.sim,u,c+(Math.random()-.5)*.015,x-.01+p*.012,h+(Math.random()-.5)*.015,f.colR??f.r,f.mass);if(g>=0&&["friedEgg","disc","wedge"].includes(f.shape)){const M=Math.random()*Math.PI*2;this.sim.q.set([0,Math.sin(M/2),0,Math.cos(M/2)],g*4),this.sim.flat[g]=1}}this.audio.play("plop",{gain:.5})}m&&(this.report.garnish[s]=d+m,this._garnishHud())}serve(){this.mode="served",this.hud.clearPlay(),this.hud.hideCard(),this.cooker.spatula.group.visible=!1,this.ladle.group.visible=!1;const t={};for(let d=0;d<this.sim.n;d++){const m=this.ings[this.sim.kind[d]];if(m.garnish)continue;const x=t[m.id]||(t[m.id]={d:[],c:[]});this.sim.strand[d]>=0&&d>0&&this.sim.strand[d-1]===this.sim.strand[d]||(x.d.push(Number.isNaN(this.snapD[d])?this.sim.d[d]:this.snapD[d]),x.c.push(this.sim.c[d]))}this._osakaReport(t);const e=d=>d.reduce((m,x)=>m+x,0)/d.length;this.presses.crack?.length&&(this.report.skills.crack=e(this.presses.crack));const n=[...this.presses.add||[],...this.presses.top||[],...this.presses.drop||[]];n.length&&(this.report.skills.tip=e(n)),this.report.pieces=t,this.report.tosses=this.stove.tosses,this.report.hei=this.stove.hei;const s=Ji.find(d=>d.id===this.dish.cuisine),r=L_(this.dish,tn,kn,this.report,s);this.grade=r;const o=Ul()[this.dish.id],a=my(this.dish.id,r.total,r.stars),l=this._progress(),c=ay(this.progressBefore,l),h=l.countries.find(d=>d.id===this.dish.cuisine),f=h?.dishes[h.dishes.findIndex(d=>d.id===this.dish.id)+1],u={dishes:c.dishes.map(d=>Bs[d].name),stamp:c.stamp,need:f&&!f.open?Bs[f.id].name:null,next:f&&f.open?f.id:null};this.cam.go("beauty",1.4),this.stage.lights.plateKey.intensity=1.8,this.plateSteam=40,this.serveT=1.6,this._pendingResult=()=>{this.hud.showResult(this.dish,r,o,a,u,s),this.audio.chime(r.stars)}}action(t){if(this.audio.unlock(),this.audio.play("tick"),t==="toss")return this.doToss();if(t==="flip")return this._doFlip();if(t==="fold")return this._doFold();if(t==="turn")return this._doTurn();if(t==="next")return this.step?.verb==="mix"&&this._mixDone(this.step),this.step?.verb==="turn"&&this._turnDone(),this.next();if(t==="plate")return this._plate();if(t==="serve")return this.next();if(t==="again")return this.stage.lights.plateKey.intensity=0,this.start(this.dish.id);if(t==="menu")return this.stage.lights.plateKey.intensity=0,this.menu();if(t.startsWith("go:"))return this.stage.lights.plateKey.intensity=0,this.start(t.slice(3))}doToss(){if(!this.sim.container.heated||this.time-(this.lastToss||-9)<.45)return;this.lastToss=this.time;const t=Yv(this.sim,1);if(this.cooker.toss(),this.audio.play("clank",{gain:.5}),this.audio.play("whoosh",{gain:.7}),!t)return;this.stove.tosses++;const e=this.cooker.kind==="wok";this.stove.T>200&&this.stove.flame>.55?(this.stove.hei++,e?(this.stove.flare=1,this.audio.play("flare",{gain:.8})):this.audio.play("hiss",{gain:.35}),(this.stove.hei<=3||this.stove.hei%3===0)&&this.hud.toast(e?"Wok hei!":"Nice sear!")):this.stove.T>150&&e&&(this.stove.flare=.35)}_bindPointer(t){this.pointer={down:!1,x:0,y:0,t:0,hist:[]};const e=s=>{const r=t.getBoundingClientRect();return this.ndc.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),{x:s.clientX/r.width,y:s.clientY/r.height}};t.addEventListener("pointerdown",s=>{this.audio.unlock();try{t.setPointerCapture?.(s.pointerId)}catch{}const r=e(s);this.pointer.down=!0,this.pointer.hist=[{...r,t:performance.now()}],this._pointer("down")}),t.addEventListener("pointermove",s=>{const r=e(s);if(this.pointer.down){const o=this.pointer.hist;o.push({...r,t:performance.now()}),o.length>6&&o.shift(),this._flick()}this._pointer("move")});const n=()=>{this.pointer.down=!1,this._pointer("up")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}_flick(){const t=this.pointer.hist,e=this.step?.verb;if(t.length<3||!(this._wokStep()||e==="flip"||e==="turn"))return;const n=t[0],s=t[t.length-1],r=(s.t-n.t)/1e3;if(r<=0||r>.25)return;const o=(s.y-n.y)/r,a=(s.x-n.x)/r;o<-2.4&&Math.abs(o)>Math.abs(a)*1.8&&(e==="flip"?this._doFlip():e==="turn"?this._doTurn():this.doToss(),this.pointer.hist=[])}_wokStep(){const t=this.step?.verb;return this.mode==="play"&&(t==="cook"||t==="add"||t==="crack"||t==="pour"||t==="heat")}_planeHit(t){this.raycaster.setFromCamera(this.ndc,this.camera);const e=this.raycaster.ray;if(Math.abs(e.direction.y)<1e-4)return null;const n=(t-e.origin.y)/e.direction.y;return n<=0?null:e.origin.clone().addScaledVector(e.direction,n)}_swipedDown(){const t=this.pointer.hist;if(t.length<2)return!1;const e=t[0],n=t[t.length-1];return n.y-e.y>.06&&Math.abs(n.y-e.y)>Math.abs(n.x-e.x)*1.2}_pointer(t){if(this.mode!=="play")return;const e=this.step?.verb;if(this.raycaster.setFromCamera(this.ndc,this.camera),e==="chop"){t==="down"&&(this.st.swiped=!1),t==="move"&&this.pointer.down&&!this.st.swiped&&this._swipedDown()&&(this.st.swiped=!0,this._chopSwipe());return}if(e==="add"&&t==="down"){const n=this.bowls.pick(this.raycaster),s=n&&this.st.left.includes(n)?n:this.st.left[0];if(s){const r=this._press();this.st.left=this.st.left.filter(o=>o!==s),this.bowls.highlight(this.st.left),r<.45?this.hud.toast("Spilled some!",!0):r>.9&&this.hud.toast("Nice!"),this.bowls.tip(s,this.cooker.dropPoint(),()=>{this._addItem(s,r<.45?.7:1),this.st.left.length||(this.st.doneT=.8)});return}}if(e==="crack"&&t==="down"){this._crackTap();return}if(e==="mix"){t==="down"?this.st.anchor=null:t==="move"&&this.pointer.down&&this._mixMove();return}if((e==="top"||e==="drop")&&t==="down"){this._tapTopping();return}if(e==="turn"&&t==="down"){this._doTurn();return}if(e==="shave"){t==="down"&&(this.st.swiped=!1),t==="move"&&this.pointer.down&&!this.st.swiped&&this._swipedDown()&&(this.st.swiped=!0,this._shave());return}if(e==="plate"&&t==="down"){this._plate();return}if(e==="garnish"){t==="down"?this._garnishAt(this._planeHit(it.wellY+.035),!0):t==="move"&&this.pointer.down&&this._garnishAt(this._planeHit(it.wellY+.035),!1);return}if(!(this.cooker?.pointer&&this.cooker.pointer(t,this))&&this._wokStep()){if(t==="up"||!this.pointer.down){this.st.stir=null,this.sim.spatula.on=!1;return}const n=this.cooker.surfaceRay(this.raycaster.ray);this.st.stir=n;const s=this.sim.spatula;n?(s.on||(s.px=n.x,s.py=n.y,s.pz=n.z),s.x=n.x,s.y=n.y+.004,s.z=n.z,s.on=!0):s.on=!1}}onResize(){this.bowls?.layout(this.camera.aspect<1)}update(t){this.time+=t;const e=this.stove,n=this.sim;w_(e,t),n_(n,t),S_(n,e,t,this.ings||[]),this.dish&&this._osakaUpdate(t),this._trompoTick(t),this.mode==="play"&&this._updateStep(t),this.tm&&this.mode==="play"&&(this.tm.t+=t,this.hud.setTiming(zu(this.tm))),this.gestureT>0&&(this.gestureT-=t,this.gestureT<=0&&this.hud.hideGesture()),this.mode==="served"&&this.serveT>0&&(this.serveT-=t,this.serveT<=0&&this._pendingResult&&(this._pendingResult(),this._pendingResult=null)),this.cooker.update(t,{flame:e.flame,flare:e.flare,oil:e.oil,sauce:n.container.heated?e.sauceLeft:0,T:e.T},this.sim.spatula.on?this.st?.stir:null,this.pointer.down),this.foodView&&this.foodView.update(n,t),this.bowls?.update(t),this.board?.update(t),this.mode==="play"&&this._wokStep()&&(this.cooker.spatula.group.visible=!!this.sim.spatula.on),this.ladle.update(t,!!this.st?.pouring,1-(this.st?.amount||0),this.cooker.dropPoint()),this.egg.visible&&(this.st.bump=Math.max(0,(this.st.bump||0)-t*6),this.egg.position.y=this.st.eggY-Math.sin(this.st.bump*Math.PI)*.05),this._steam(t),this.puffs.update(t),this.cam.update(t),this.hud.setFlame?.(e.flame,e.T),this.audio.update(t,Math.max(T_(n,e),this.dish&&this.mode==="play"?this._osakaSizzle():0),e.flame)}_updateStep(t){this.stepT+=t;const e=this.step,n=this.st;if(this._osakaStep(t),e.verb==="fold"&&!n.folded&&this._foldMeter(),this._cueTick(),n.doneT!=null&&(n.doneT-=t,n.doneT<=0)){n.doneT=null,e.verb==="chop"&&(this.bowls.bowls.has(e.item)&&this.bowls.fill(e.item,tn[e.item],14),this.board.sweep()),this.next();return}if((e.verb==="heat"||e.verb==="pour")&&!n.poured){if(n.pouring&&(n.held=(n.held||0)+t,n.amount=Math.min(1.1,n.amount+Ou(kn[e.liquid].rate,n.held)*t),n.amount>=1.1&&this._finishPour(),e.verb==="pour"&&this.stove.T>120&&Math.random()<t*8)){const s=this.cooker.dropPoint();this.puffs.emit(s.x,s.y,s.z,{size:.05,alpha:.3})}this.hud.setPour(n.amount)}if(e.verb==="heat"&&n.dry?this.stove.T>170&&n.doneT==null?(this.hud.toast("Hot!"),n.doneT=.5):this.stove.T<170&&this.hud.setHint(this.stove.flame>.5?"Nearly there...":e.hint):e.verb==="heat"&&(this.hud.enable("pour",this.stove.flame>.3&&!n.poured),n.poured?this.stove.T<165?this.hud.setHint("Wait for the oil to shimmer. Keep the flame up"):n.doneT==null&&(this.hud.toast("Smoking hot!"),n.doneT=.5):this.hud.setHint(this.stove.flame>.3?"Now hold to pour the oil. Let go in the green":e.hint)),e.verb==="cook"){const s=this._focusState(),r=s.maxC>(e.char?.6:.35)?"Burning!":s.v<.45?"Raw":s.v<.9?"Cooking":s.v<=1.3?"Perfect":s.v<1.6?"Overdone":"Way over";let o="";e.char?o=s.c<.08?"Leave them still to char":s.c<.4?"Nice char. Now toss":"Too far! Toss now":s.maxC>.12?o="It is catching! Keep it moving":this.stove.T<150&&s.v<.9&&(o="The wok is too cool. More flame"),this.hud.setMeter(s.v,r,o),this.hud.enable("next",this.stepT>(e.minTime||0))}}_cueTick(){const t=this.step,e=this.st,n=t.verb,s=[];let r=!1,o=[];const a=()=>{const c=this.hud.meter.querySelector(".mark"),h=parseFloat(c?.style.left||"0");return h>=45&&h<=65};if(n==="heat"&&(this.stove.flame<.3?r=!0:e.poured||s.push("pour")),["pour","pancake","fill","drizzle"].includes(n)&&!e.poured&&s.push("pour"),n==="cook"&&(this.stove.T<150&&(r=!0),this.stepT>(t.minTime||0)&&a()?s.push("next"):this.stove.T>200&&s.push("toss")),n==="flip"&&!e.flipped&&(a()&&s.push("flip"),this.stove.T<150&&(r=!0)),n==="turn"&&(this.cooker.balls?.length&&Math.min(...this.cooker.balls.map(c=>c.turns))>=4?s.push("next"):a()&&s.push("turn"),this.stove.T<150&&(r=!0)),n==="mix"&&a()&&s.push("next"),n==="fold"&&!e.folded&&a()&&s.push("fold"),n==="plate"&&s.push("plate"),n==="garnish"){for(const[c,[h]]of Object.entries(this.dish.garnish||{}))(this.report.garnish[c]||0)<h&&o.push(c);o.length||s.push("serve")}const l=s.join()+"|"+r+"|"+o.join();l!==this._cues&&(this._cues=l,this.hud.cue(s),this.hud.cueFlame(r),this.hud.cueChips(o))}_steam(t){const e=this.stove,n=this.sim;if(this._steamT=(this._steamT||0)-t,!(this._steamT>0)){if(this._steamT=.06,n.container.heated&&n.n>0&&e.T>110){const s=Math.min(1,(e.T-110)/120);if(Math.random()<s*.5){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{size:.035,alpha:.08+s*.1,rise:.16})}let r=0;for(let o=0;o<n.n;o+=3)n.c[o]>.1&&n.contact[o]&&r++;if(r>2&&Math.random()<.6){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{colour:4867136,size:.05,alpha:.35,rise:.2})}}this.plateSteam>0&&(this.plateSteam-=.06,Math.random()<.5&&this.puffs.emit(it.x+(Math.random()-.5)*.08,it.wellY+.04,it.z+(Math.random()-.5)*.08,{size:.03,alpha:Math.min(.16,this.plateSteam/90),rise:.09,life:2}))}}autoStir(t,e=1.2){const n=this.sim;let s=0,r=0;for(;s<t;){const{x:o,y:a,z:l}=this.cooker.stirPoint(s);n.spatula.on||(n.spatula.px=o,n.spatula.py=a,n.spatula.pz=l),n.spatula.on=!0,this.st.stir={x:o,y:a,z:l},n.spatula.x=o,n.spatula.y=a+.004,n.spatula.z=l,this.pointer.down=!0,e&&s-r>e&&(r=s,this.lastToss=-9,this.doToss()),this.update(1/60),s+=1/60}n.spatula.on=!1,this.pointer.down=!1}autoCook(t=99,{ruin:e=!1}={}){const n=o=>(...a)=>(this.tm&&E1(this.tm),o.apply(this,a)),s=this._press;this._press=n(s),this.mode!=="play"&&this.start(this.dish?.id||"padthai");let r=0;for(;this.mode==="play"&&this.stepIndex<t&&r++<60;){const o=this.step;if(["mix","pancake","fill","drizzle","top","drop","flip","turn"].includes(o.verb)){this._osakaAuto(o);continue}if(o.verb==="fold"){for(let a=0;a<1800&&this.cake.set<(this.cake.p.meltBand[0]+this.cake.p.meltBand[1])/2;a++)this.update(1/60);this._doFold();for(let a=0;a<60;a++)this.update(1/60);continue}if(o.verb==="shave"){for(let a=0;a<o.cuts;a++){this._shave();for(let l=0;l<12;l++)this.update(1/60)}for(let a=0;a<60;a++)this.update(1/60);continue}if(o.verb==="chop"){for(let a=0;a<o.cuts;a++)this._chopSwipe();this.st.doneT=.01,this.update(1/60),this.update(1/60)}else if(o.verb==="heat"&&!o.liquid){this.stove.flame=.9;for(let a=0;a<900&&this.step===o;a++)this.update(1/60)}else if(o.verb==="heat"||o.verb==="pour"){this.stove.flame=.9;const a=kn[o.liquid];this.hold("pour",!0);const l=(a.target[0]+a.target[1])/2;for(;this.st.amount<l;)this.update(1/60);this.hold("pour",!1);for(let c=0;c<400&&this.step===o;c++)this.update(1/60)}else if(o.verb==="add"){for(const a of[...this.st.left])this.st.left=this.st.left.filter(l=>l!==a),this.bowls.tip(a,this.cooker.dropPoint(),()=>{this._addItem(a),this.st.left.length||(this.st.doneT=.8)});for(let a=0;a<200&&this.step===o;a++)this.update(1/60)}else if(o.verb==="cook"){let a=0;for(;a<30;){if(o.char){this.sim.spatula.on=!1;for(let c=0;c<100;c++)this.update(1/60);a+=1.6}this.autoStir(.5),a+=.5;const l=this._focusState();if(!e&&l.v>=1&&a>=(o.minTime||0)||e&&a>20)break}this.next()}else if(o.verb==="crack"){this._crackTap(),this._crackTap(),this._crackTap();for(let a=0;a<60&&this.step===o;a++)this.update(1/60)}else if(o.verb==="plate"){this._plate();for(let a=0;a<120&&this.step===o;a++)this.update(1/60)}else if(o.verb==="garnish"){for(const[a,[l,c]]of Object.entries(this.dish.garnish||{})){const h=(l+c)/2,f=wh[a]||1,u=Math.max(h>0?1:0,Math.round(h/f));for(let d=0;d<u;d++){this._garnishPortion(a);for(let m=0;m<6;m++)this.update(1/60)}}for(let a=0;a<60;a++)this.update(1/60);t>this.stepIndex&&this.next()}}this._press=s}}Object.assign(Nl.prototype,R1);Object.assign(Nl.prototype,P1);const Gu=document.getElementById("view"),Vu=new URLSearchParams(location.search),Sy=Vu.has("lo")||(navigator.hardwareConcurrency||8)<=4,Bn=lv(Gu,{lowPower:Sy}),ls=new Nl(Bn,document.getElementById("ui"),Vu);function uo(){const i=window.innerWidth,t=window.innerHeight;i>0&&t>0&&Bn.resize(i,t),ls.onResize()}window.addEventListener("resize",uo);window.addEventListener("orientationchange",()=>setTimeout(uo,120));uo();let Sh=performance.now();function Wu(i){const t=Math.min(.05,(i-Sh)/1e3);Sh=i,ls.update(t),Bn.render(),requestAnimationFrame(Wu)}requestAnimationFrame(Wu);const Ty="http://localhost:5699/shot";window.shot=async function(t="shot",e={}){const n=e.w??390,s=e.h??844,r=Bn.renderer.getPixelRatio();Bn.renderer.setPixelRatio(e.ratio??2),Bn.resize(n,s),ls.onResize(n,s),e.view&&ls.cam.snapTo(e.view);const o=Math.max(1,e.settle??30);for(let l=0;l<o;l++)ls.update(1/60);Bn.render();const a=Gu.toDataURL("image/png");Bn.renderer.setPixelRatio(r),window.innerWidth>0&&uo();try{return await(await fetch(Ty,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:a})})).json()}catch(l){return{ok:!1,error:String(l)}}};window.game=ls;window.stage=Bn;
