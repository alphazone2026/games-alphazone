(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="169",Nu=0,Ul=1,ku=2,ch=1,hh=2,zn=3,Wn=0,Oe=1,te=2,Gn=0,Zi=1,ns=2,Nl=3,kl=4,Fu=5,gi=100,zu=101,Ou=102,Bu=103,Hu=104,Gu=200,Vu=201,Wu=202,Xu=203,Qo=204,ta=205,qu=206,Yu=207,$u=208,Ku=209,Zu=210,ju=211,Ju=212,Qu=213,tf=214,ea=0,na=1,ia=2,is=3,sa=4,ra=5,oa=6,aa=7,uh=0,ef=1,nf=2,ni=0,fh=1,dh=2,ph=3,Za=4,sf=5,mh=6,gh=7,_h=300,ss=301,rs=302,la=303,ca=304,Zr=306,os=1e3,xi=1001,ha=1002,tn=1003,rf=1004,er=1005,Mn=1006,co=1007,vi=1008,Xn=1009,xh=1010,vh=1011,Xs=1012,ja=1013,yi=1014,En=1015,Vn=1016,Ja=1017,Qa=1018,as=1020,yh=35902,Mh=1021,bh=1022,Sn=1023,Sh=1024,wh=1025,ji=1026,ls=1027,tl=1028,el=1029,Th=1030,nl=1031,il=1033,Dr=33776,Ur=33777,Nr=33778,kr=33779,ua=35840,fa=35841,da=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37808,va=37809,ya=37810,Ma=37811,ba=37812,Sa=37813,wa=37814,Ta=37815,Ea=37816,Aa=37817,Ca=37818,Ra=37819,Pa=37820,La=37821,Fr=36492,Ia=36494,Da=36495,Eh=36283,Ua=36284,Na=36285,ka=36286,of=3200,af=3201,Ah=0,lf=1,ei="",ln="srgb",si="srgb-linear",sl="display-p3",jr="display-p3-linear",Hr="linear",me="srgb",Gr="rec709",Vr="p3",Ai=7680,Fl=519,cf=512,hf=513,uf=514,Ch=515,ff=516,df=517,pf=518,mf=519,Fa=35044,Ji=35048,zl="300 es",Hn=2e3,Wr=2001;class ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const Os=Math.PI/180,cs=180/Math.PI;function An(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function rl(i,t){return(i%t+t)%t}function gf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _f(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function xf(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function vf(i,t=1){return t-Math.abs(rl(i,t*2)-t)}function yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sf(i,t){return i+Math.random()*(t-i)}function wf(i){return i*(.5-Math.random())}function Tf(i){i!==void 0&&(Ol=i);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ef(i){return i*Os}function Af(i){return i*cs}function Cf(i){return(i&i-1)===0&&i!==0}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const If={DEG2RAD:Os,RAD2DEG:cs,generateUUID:An,clamp:De,euclideanModulo:rl,mapLinear:gf,inverseLerp:_f,lerp:Bs,damp:xf,pingpong:vf,smoothstep:yf,smootherstep:Mf,randInt:bf,randFloat:Sf,randFloatSpread:wf,seededRandom:Tf,degToRad:Ef,radToDeg:Af,isPowerOfTwo:Cf,ceilPowerOfTwo:Rf,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:Lf,normalize:ue,denormalize:bn};class q{constructor(t=0,e=0){q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],p=s[3],g=s[6],M=s[1],v=s[4],y=s[7],R=s[2],E=s[5],T=s[8];return r[0]=o*_+a*M+l*R,r[3]=o*p+a*v+l*E,r[6]=o*g+a*y+l*T,r[1]=c*_+h*M+u*R,r[4]=c*p+h*v+u*E,r[7]=c*g+h*y+u*T,r[2]=f*_+d*M+m*R,r[5]=f*p+d*v+m*E,r[8]=f*g+d*y+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ho.makeScale(t,e)),this}rotate(t){return this.premultiply(ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new Kt;function Rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Df(){const i=Xr("canvas");return i.style.display="block",i}const Bl={};function zr(i){i in Bl||(Bl[i]=!0,console.warn(i))}function Uf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hl=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gl=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[si]:{transfer:Hr,primaries:Gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ln]:{transfer:me,primaries:Gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jr]:{transfer:Hr,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Gl),fromReference:i=>i.applyMatrix3(Hl)},[sl]:{transfer:me,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gl),fromReference:i=>i.applyMatrix3(Hl).convertLinearToSRGB()}},Ff=new Set([si,jr]),oe={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ss[t].toReference,s=Ss[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ss[i].primaries},getTransfer:function(i){return i===ei?Hr:Ss[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ss[t].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function uo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class zf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Xr("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Of=0;class Ph{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fo(s[o].image)):r.push(fo(s[o]))}else r=fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bf=0;class Ve extends ms{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=xi,s=xi,r=Mn,o=vi,a=Sn,l=Xn,c=Ve.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=An(),this.name="",this.source=new Ph(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=_h;Ve.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(d+1)/2,R=(g+1)/2,E=(h+f)/4,T=(u+_)/4,L=(m+p)/4;return v>y&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hf extends ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ph(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Hf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gf extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let p=1-a;const g=l*f+c*d+h*m+u*_,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,g*M);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const y=a*M;if(l=l*p+f*y,c=c*p+d*y,h=h*p+m*y,u=u*p+_*y,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return po.copy(this).projectOnVector(t),this.sub(po)}reflect(t){return this.sub(po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new C,Vl=new gn;class bi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ir.subVectors(this.max,ws),Ri.subVectors(t.a,ws),Pi.subVectors(t.b,ws),Li.subVectors(t.c,ws),Kn.subVectors(Pi,Ri),Zn.subVectors(Li,Pi),ai.subVectors(Ri,Li);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-ai.z,ai.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,ai.z,0,-ai.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-ai.y,ai.x,0];return!mo(e,Ri,Pi,Li,ir)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,Ri,Pi,Li,ir))?!1:(sr.crossVectors(Kn,Zn),e=[sr.x,sr.y,sr.z],mo(e,Ri,Pi,Li,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,nr=new bi,Ri=new C,Pi=new C,Li=new C,Kn=new C,Zn=new C,ai=new C,ws=new C,ir=new C,sr=new C,li=new C;function mo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Vf=new bi,Ts=new C,go=new C;class gs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(go)),this.expandByPoint(Ts.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new C,_o=new C,rr=new C,jn=new C,xo=new C,or=new C,vo=new C;class ol{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_o.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(_o);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=jn.dot(this.direction),l=-jn.dot(rr),c=jn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_o).addScaledVector(rr,f),d}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){xo.subVectors(e,t),or.subVectors(n,t),vo.crossVectors(xo,or);let o=this.direction.dot(vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(or.crossVectors(jn,or));if(l<0)return null;const c=a*this.direction.dot(xo.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(vo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Jn.crossVectors(n,sn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Jn.crossVectors(n,sn)),Jn.normalize(),ar.crossVectors(sn,Jn),s[0]=Jn.x,s[4]=ar.x,s[8]=sn.x,s[1]=Jn.y,s[5]=ar.y,s[9]=sn.y,s[2]=Jn.z,s[6]=ar.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],v=n[7],y=n[11],R=n[15],E=s[0],T=s[4],L=s[8],I=s[12],x=s[1],S=s[5],k=s[9],F=s[13],G=s[2],X=s[6],B=s[10],j=s[14],V=s[3],gt=s[7],_t=s[11],xt=s[15];return r[0]=o*E+a*x+l*G+c*V,r[4]=o*T+a*S+l*X+c*gt,r[8]=o*L+a*k+l*B+c*_t,r[12]=o*I+a*F+l*j+c*xt,r[1]=h*E+u*x+f*G+d*V,r[5]=h*T+u*S+f*X+d*gt,r[9]=h*L+u*k+f*B+d*_t,r[13]=h*I+u*F+f*j+d*xt,r[2]=m*E+_*x+p*G+g*V,r[6]=m*T+_*S+p*X+g*gt,r[10]=m*L+_*k+p*B+g*_t,r[14]=m*I+_*F+p*j+g*xt,r[3]=M*E+v*x+y*G+R*V,r[7]=M*T+v*S+y*X+R*gt,r[11]=M*L+v*k+y*B+R*_t,r[15]=M*I+v*F+y*j+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],p=t[14],g=t[15],M=u*p*c-_*f*c+_*l*d-a*p*d-u*l*g+a*f*g,v=m*f*c-h*p*c-m*l*d+o*p*d+h*l*g-o*f*g,y=h*_*c-m*u*c+m*a*d-o*_*d-h*a*g+o*u*g,R=m*u*l-h*_*l-m*a*f+o*_*f+h*a*p-o*u*p,E=e*M+n*v+s*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(_*f*r-u*p*r-_*s*d+n*p*d+u*s*g-n*f*g)*T,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*g+n*l*g)*T,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*T,t[4]=v*T,t[5]=(h*p*r-m*f*r+m*s*d-e*p*d-h*s*g+e*f*g)*T,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*T,t[8]=y*T,t[9]=(m*u*r-h*_*r-m*n*d+e*_*d+h*n*g-e*u*g)*T,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*g+e*a*g)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(h*_*s-m*u*s+m*n*f-e*_*f-h*n*p+e*u*p)*T,t[14]=(m*a*s-o*_*s-m*n*l+e*_*l+o*n*p-e*a*p)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,p=o*u,g=a*u,M=l*c,v=l*h,y=l*u,R=n.x,E=n.y,T=n.z;return s[0]=(1-(_+g))*R,s[1]=(d+y)*R,s[2]=(m-v)*R,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+g))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(m+v)*T,s[9]=(p-M)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,m;if(a===Hn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Wr)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let m,_;if(a===Hn)m=(o+r)*u,_=-2*u;else if(a===Wr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new C,vn=new Jt,Wf=new C(0,0,0),Xf=new C(1,1,1),Jn=new C,ar=new C,sn=new C,Wl=new Jt,Xl=new gn;class Ze{constructor(t=0,e=0,n=0,s=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qf=0;const ql=new C,Di=new gn,Dn=new Jt,lr=new C,Es=new C,Yf=new C,$f=new gn,Yl=new C(1,0,0),$l=new C(0,1,0),Kl=new C(0,0,1),Zl={type:"added"},Kf={type:"removed"},Ui={type:"childadded",child:null},yo={type:"childremoved",child:null};class Ce extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new C,e=new Ze,n=new gn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Kt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Es,lr,this.up):Dn.lookAt(lr,Es,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Dn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kf),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new C(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new C,Un=new C,Mo=new C,Nn=new C,Ni=new C,ki=new C,jl=new C,bo=new C,So=new C,wo=new C,To=new fe,Eo=new fe,Ao=new fe;class mn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Un.subVectors(n,e),Mo.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(Un),l=yn.dot(Mo),c=Un.dot(Un),h=Un.dot(Mo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return To.setScalar(0),Eo.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Un.subVectors(t,e),yn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),yn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,n),ki.subVectors(r,n),bo.subVectors(t,n);const l=Ni.dot(bo),c=ki.dot(bo);if(l<=0&&c<=0)return e.copy(n);So.subVectors(t,s);const h=Ni.dot(So),u=ki.dot(So);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);wo.subVectors(t,r);const d=Ni.dot(wo),m=ki.dot(wo);if(m>=0&&d<=m)return e.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ki,a);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return jl.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(jl,a);const g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Ni,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=rl(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Co(o,r,t+1/3),this.g=Co(o,r,t),this.b=Co(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return oe.fromWorkingColorSpace(Ge.copy(this),t),Math.round(De(Ge.r*255,0,255))*65536+Math.round(De(Ge.g*255,0,255))*256+Math.round(De(Ge.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ln){oe.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(cr);const n=Bs(Qn.h,cr.h,e),s=Bs(Qn.s,cr.s,e),r=Bs(Qn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new ct;ct.NAMES=Ih;let Zf=0;class Si extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Zi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ta,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Te extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new C,hr=new q;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class Dh extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uh extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jf=0;const fn=new Jt,Ro=new Ce,Fi=new C,rn=new bi,As=new bi,Fe=new C;class _e extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Uh:Dh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(rn.min,As.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,As.max),rn.expandByPoint(Fe)):(rn.expandByPoint(As.min),rn.expandByPoint(As.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),Fe.add(Fi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;const c=new C,h=new C,u=new C,f=new q,d=new q,m=new q,_=new C,p=new C;function g(L,I,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const S=1/(d.x*m.y-m.x*d.y);isFinite(S)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(S),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(S),a[L].add(_),a[I].add(_),a[x].add(_),l[L].add(p),l[I].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,I=M.length;L<I;++L){const x=M[L],S=x.start,k=x.count;for(let F=S,G=S+k;F<G;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new C,y=new C,R=new C,E=new C;function T(L){R.fromBufferAttribute(s,L),E.copy(R);const I=a[L];v.copy(I),v.sub(R.multiplyScalar(R.dot(I))).normalize(),y.crossVectors(E,I);const S=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,S)}for(let L=0,I=M.length;L<I;++L){const x=M[L],S=x.start,k=x.count;for(let F=S,G=S+k;F<G;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new Ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Jt,ci=new ol,ur=new gs,Ql=new C,fr=new C,dr=new C,pr=new C,Po=new C,mr=new C,tc=new C,gr=new C;class pt extends Ce{constructor(t=new _e,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Po.fromBufferAttribute(u,t),o?mr.addScaledVector(Po,h):mr.addScaledVector(Po.sub(e),h))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(ur.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ur,Ql)===null||ci.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){const E=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);s=_r(this,g,t,n,c,h,u,E,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const M=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=_r(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){const E=y,T=y+1,L=y+2;s=_r(this,g,t,n,c,h,u,E,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){const M=p,v=p+1,y=p+2;s=_r(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Jf(i,t,e,n,s,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wn,a),l===null)return null;gr.copy(a),gr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fr),i.getVertexPosition(l,dr),i.getVertexPosition(c,pr);const h=Jf(i,t,e,n,fr,dr,pr,tc);if(h){const u=new C;mn.getBarycoord(tc,fr,dr,pr,u),s&&(h.uv=mn.getInterpolatedAttribute(s,a,l,c,u,new q)),r&&(h.uv1=mn.getInterpolatedAttribute(r,a,l,c,u,new q)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};mn.getNormal(fr,dr,pr,f.normal),h.face=f,h.barycoord=u}return h}class Ft extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function m(_,p,g,M,v,y,R,E,T,L,I){const x=y/T,S=R/L,k=y/2,F=R/2,G=E/2,X=T+1,B=L+1;let j=0,V=0;const gt=new C;for(let _t=0;_t<B;_t++){const xt=_t*S-F;for(let Zt=0;Zt<X;Zt++){const Qt=Zt*x-k;gt[_]=Qt*M,gt[p]=xt*v,gt[g]=G,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[p]=0,gt[g]=E>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(Zt/T),u.push(1-_t/L),j+=1}}for(let _t=0;_t<L;_t++)for(let xt=0;xt<T;xt++){const Zt=f+xt+X*_t,Qt=f+xt+X*(_t+1),Y=f+(xt+1)+X*(_t+1),st=f+(xt+1)+X*_t;l.push(Zt,Qt,st),l.push(Qt,Y,st),V+=6}a.addGroup(d,V,I),d+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=hs(i[e]);for(const s in n)t[s]=n[s]}return t}function Qf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const qs={clone:hs,merge:qe};var td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ke extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new C,ec=new q,nc=new q;class Qe extends kh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Oi=1;class nd extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(zi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(zi,Oi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(zi,Oi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(zi,Oi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(zi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(zi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Fh extends Ve{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class id extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Gn});r.uniforms.tEquirect.value=e;const o=new pt(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Mn),new nd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Lo=new C,sd=new C,rd=new Kt;class pi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Lo.subVectors(n,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rd.getNormalMatrix(t),s=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new gs,xr=new C;class ll{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],_=s[10],p=s[11],g=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-g).normalize(),n[1].setComponents(l+r,f+c,p+d,y+g).normalize(),n[2].setComponents(l+o,f+h,p+m,y+M).normalize(),n[3].setComponents(l-o,f-h,p-m,y-M).normalize(),n[4].setComponents(l-a,f-u,p-_,y-v).normalize(),e===Hn)n[5].setComponents(l+a,f+u,p+_,y+v).normalize();else if(e===Wr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function od(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Re extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const M=g*f-o;for(let v=0;v<c;v++){const y=v*u-r;m.push(y,-M,0),_.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const v=M+c*g,y=M+c*(g+1),R=M+1+c*(g+1),E=M+1+c*g;d.push(v,y,E),d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.widthSegments,t.heightSegments)}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pd=`#define PI 3.141592653589793
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
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`
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
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
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
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
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
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,b0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,A0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,D0=`#define TOON
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
}`,U0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,z0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:ad,alphahash_pars_fragment:ld,alphamap_fragment:cd,alphamap_pars_fragment:hd,alphatest_fragment:ud,alphatest_pars_fragment:fd,aomap_fragment:dd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:yd,bumpmap_pars_fragment:Md,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Td,color_fragment:Ed,color_pars_fragment:Ad,color_pars_vertex:Cd,color_vertex:Rd,common:Pd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Id,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:kd,colorspace_fragment:Fd,colorspace_pars_fragment:zd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:Qd,envmap_vertex:Vd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:jd,lights_pars_begin:Jd,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:fp,map_fragment:dp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:xp,morphinstance_vertex:vp,morphcolor_vertex:yp,morphnormal_vertex:Mp,morphtarget_pars_vertex:bp,morphtarget_vertex:Sp,normal_fragment_begin:wp,normal_fragment_maps:Tp,normal_pars_fragment:Ep,normal_pars_vertex:Ap,normal_vertex:Cp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Dp,opaque_fragment:Up,packing:Np,premultiplied_alpha_fragment:kp,project_vertex:Fp,dithering_fragment:zp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Zp,specularmap_pars_fragment:jp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Qp,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:f0,depth_frag:d0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:g0,equirect_frag:_0,linedashed_vert:x0,linedashed_frag:v0,meshbasic_vert:y0,meshbasic_frag:M0,meshlambert_vert:b0,meshlambert_frag:S0,meshmatcap_vert:w0,meshmatcap_frag:T0,meshnormal_vert:E0,meshnormal_frag:A0,meshphong_vert:C0,meshphong_frag:R0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:I0,meshtoon_frag:D0,points_vert:U0,points_frag:N0,shadow_vert:k0,shadow_frag:F0,sprite_vert:z0,sprite_frag:O0},dt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Tn={basic:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ct(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ct(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:qe([dt.points,dt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:qe([dt.common,dt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:qe([dt.sprite,dt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:qe([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:qe([dt.lights,dt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Tn.physical={uniforms:qe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const vr={r:0,b:0,g:0},ui=new Ze,B0=new Jt;function H0(i,t,e,n,s,r,o){const a=new ct(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const y=m(M);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===Zr)?(h===void 0&&(h=new pt(new Ft(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:hs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(v.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(ui)),h.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new pt(new Re(2,2),new Ke({name:"BackgroundMaterial",uniforms:hs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,v){M.getRGB(vr,Nh(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:_,addToRenderList:p}}function G0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,S,k,F,G){let X=!1;const B=u(F,k,S);r!==B&&(r=B,c(r.object)),X=d(x,F,k,G),X&&m(x,F,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(x,S,k,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,S,k){const F=k.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let X=G[S.id];X===void 0&&(X={},G[S.id]=X);let B=X[F];return B===void 0&&(B=f(l()),X[F]=B),B}function f(x){const S=[],k=[],F=[];for(let G=0;G<e;G++)S[G]=0,k[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,S,k,F){const G=r.attributes,X=S.attributes;let B=0;const j=k.getAttributes();for(const V in j)if(j[V].location>=0){const _t=G[V];let xt=X[V];if(xt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),_t===void 0||_t.attribute!==xt||xt&&_t.data!==xt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function m(x,S,k,F){const G={},X=S.attributes;let B=0;const j=k.getAttributes();for(const V in j)if(j[V].location>=0){let _t=X[V];_t===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor));const xt={};xt.attribute=_t,_t&&_t.data&&(xt.data=_t.data),G[V]=xt,B++}r.attributes=G,r.attributesNum=B,r.index=F}function _(){const x=r.newAttributes;for(let S=0,k=x.length;S<k;S++)x[S]=0}function p(x){g(x,0)}function g(x,S){const k=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;k[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),G[x]!==S&&(i.vertexAttribDivisor(x,S),G[x]=S)}function M(){const x=r.newAttributes,S=r.enabledAttributes;for(let k=0,F=S.length;k<F;k++)S[k]!==x[k]&&(i.disableVertexAttribArray(k),S[k]=0)}function v(x,S,k,F,G,X,B){B===!0?i.vertexAttribIPointer(x,S,k,G,X):i.vertexAttribPointer(x,S,k,F,G,X)}function y(x,S,k,F){_();const G=F.attributes,X=k.getAttributes(),B=S.defaultAttributeValues;for(const j in X){const V=X[j];if(V.location>=0){let gt=G[j];if(gt===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),gt!==void 0){const _t=gt.normalized,xt=gt.itemSize,Zt=t.get(gt);if(Zt===void 0)continue;const Qt=Zt.buffer,Y=Zt.type,st=Zt.bytesPerElement,Et=Y===i.INT||Y===i.UNSIGNED_INT||gt.gpuType===ja;if(gt.isInterleavedBufferAttribute){const mt=gt.data,Bt=mt.stride,Ot=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)g(V.location+Xt,mt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)p(V.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Xt=0;Xt<V.locationSize;Xt++)v(V.location+Xt,xt/V.locationSize,Y,_t,Bt*st,(Ot+xt/V.locationSize*Xt)*st,Et)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<V.locationSize;mt++)g(V.location+mt,gt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<V.locationSize;mt++)p(V.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let mt=0;mt<V.locationSize;mt++)v(V.location+mt,xt/V.locationSize,Y,_t,xt*st,xt/V.locationSize*mt*st,Et)}}else if(B!==void 0){const _t=B[j];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(V.location,_t);break;case 3:i.vertexAttrib3fv(V.location,_t);break;case 4:i.vertexAttrib4fv(V.location,_t);break;default:i.vertexAttrib1fv(V.location,_t)}}}}M()}function R(){L();for(const x in n){const S=n[x];for(const k in S){const F=S[k];for(const G in F)h(F[G].object),delete F[G];delete S[k]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const k in S){const F=S[k];for(const G in F)h(F[G].object),delete F[G];delete S[k]}delete n[x.id]}function T(x){for(const S in n){const k=n[S];if(k[x.id]===void 0)continue;const F=k[x.id];for(const G in F)h(F[G].object),delete F[G];delete k[x.id]}}function L(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function V0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<f.length;_++)e.update(m,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==En&&!L)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:R,maxSamples:E}}function X0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new pi,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,v=M*4;let y=g.clippingState||null;l.value=y,y=h(m,f,v,d);for(let R=0;R!==v;++R)y[R]=e[R];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function q0(i){let t=new WeakMap;function e(o,a){return a===la?o.mapping=ss:a===ca&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new id(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class cl extends kh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,ic=[.125,.215,.35,.446,.526,.582],_i=20,Io=new cl,sc=new ct;let Do=null,Uo=0,No=0,ko=!1;const mi=(1+Math.sqrt(5))/2,Bi=1/mi,rc=[new C(-mi,Bi,0),new C(mi,Bi,0),new C(-Bi,0,mi),new C(Bi,0,mi),new C(0,mi,-Bi),new C(0,mi,Bi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class za{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,No),this._renderer.xr.enabled=ko,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Vn,format:Sn,colorSpace:si,depthBuffer:!1},s=oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(r)),this._blurMaterial=$0(r,t,e)}return s}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sc),h.toneMapping=ni,h.autoClear=!1;const d=new Te({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),m=new pt(new Ft,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(sc),_=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;yr(s,M*v,g>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rc[(s-r-1)%rc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_i-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const g=[];let M=0;for(let T=0;T<_i;++T){const L=T/_,I=Math.exp(-L*L/2);g.push(I),T===0?M+=I:T<p&&(M+=2*I)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const y=this._sizeLods[s],R=3*y*(s>v-Yi?s-v+Yi:0),E=4*(this._cubeSize-y);yr(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Io)}}function Y0(i){const t=[],e=[],n=[];let s=i;const r=i-Yi+1+ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Yi?l=ic[o-i+Yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,p=2,g=1,M=new Float32Array(_*m*d),v=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,L=E>2?0:-1,I=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];M.set(I,_*m*E),v.set(f,p*m*E);const x=[E,E,E,E,E,E];y.set(x,g*m*E)}const R=new _e;R.setAttribute("position",new Ie(M,_)),R.setAttribute("uv",new Ie(v,p)),R.setAttribute("faceIndex",new Ie(y,g)),t.push(R),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oc(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $0(i,t,e){const n=new Float32Array(_i),s=new C(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ac(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function lc(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function K0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===ca,h=l===ss||l===rs;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new za(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new za(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Z0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function j0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,y=M.length;v<y;v+=3){const R=M[v+0],E=M[v+1],T=M[v+2];f.push(R,E,E,T,T,R)}}else if(m!==void 0){const M=m.array;_=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const R=v+0,E=v+1,T=v+2;f.push(R,E,E,T,T,R)}}else return;const p=new(Rh(f)?Uh:Dh)(f,1);p.version=_;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function J0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let g=0;for(let M=0;M<m;M++)g+=d[M];for(let M=0;M<_.length;M++)e.update(g,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Q0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tm(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let R=a.attributes.position.count*y,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*E*4*u),L=new Lh(T,R,E,u);L.type=En,L.needsUpdate=!0;const I=y*4;for(let S=0;S<u;S++){const k=g[S],F=M[S],G=v[S],X=R*E*4*S;for(let B=0;B<k.count;B++){const j=B*I;m===!0&&(s.fromBufferAttribute(k,B),T[X+j+0]=s.x,T[X+j+1]=s.y,T[X+j+2]=s.z,T[X+j+3]=0),_===!0&&(s.fromBufferAttribute(F,B),T[X+j+4]=s.x,T[X+j+5]=s.y,T[X+j+6]=s.z,T[X+j+7]=0),p===!0&&(s.fromBufferAttribute(G,B),T[X+j+8]=s.x,T[X+j+9]=s.y,T[X+j+10]=s.z,T[X+j+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new q(R,E)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function em(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Oh extends Ve{constructor(t,e,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=yi),n===void 0&&h===ls&&(n=as),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bh=new Ve,cc=new Oh(1,1),Hh=new Lh,Gh=new Gf,Vh=new Fh,hc=[],uc=[],fc=new Float32Array(16),dc=new Float32Array(9),pc=new Float32Array(4);function _s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hc[s];if(r===void 0&&(r=new Float32Array(s),hc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=uc[t];e===void 0&&(e=new Int32Array(t),uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;pc.set(n),i.uniformMatrix2fv(this.addr,!1,pc),Ne(e,n)}}function am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),Ne(e,n)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),Ne(e,n)}}function cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=Ch,r=cc):r=Bh,e.setTexture2D(t||r,s)}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gh,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return ym}}function bm(i,t){i.uniform1fv(this.addr,t)}function Sm(i,t){const e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function wm(i,t){const e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){const e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function Em(i,t){const e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Am(i,t){const e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){const e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rm(i,t){i.uniform1iv(this.addr,t)}function Pm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Nm(i,t){i.uniform3uiv(this.addr,t)}function km(i,t){i.uniform4uiv(this.addr,t)}function Fm(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bh,r[o])}function zm(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gh,r[o])}function Om(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vh,r[o])}function Bm(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hh,r[o])}function Hm(i){switch(i){case 5126:return bm;case 35664:return Sm;case 35665:return wm;case 35666:return Tm;case 35674:return Em;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function mc(i,t){i.seq.push(t),i.map[t.id]=t}function Xm(i,t,e){const n=i.name,s=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),o=Fo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mc(e,c===void 0?new Gm(a,i,t):new Vm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wm(a),mc(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Xm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const qm=37297;let Ym=0;function $m(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Km(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Vr&&e===Gr?n="LinearDisplayP3ToLinearSRGB":t===Gr&&e===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case si:case jr:return[n,"LinearTransferOETF"];case ln:case sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _c(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$m(i.getShaderSource(t),o)}else return s}function Zm(i,t){const e=Km(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jm(i,t){let e;switch(t){case fh:e="Linear";break;case dh:e="Reinhard";break;case ph:e="Cineon";break;case Za:e="ACESFilmic";break;case mh:e="AgX";break;case gh:e="Neutral";break;case sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new C;function Jm(){oe.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function tg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fs(i){return i!==""}function xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(ng,sg)}const ig=new Map;function sg(i,t){let e=$t[t];if(e===void 0){const n=ig.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(i){return i.replace(rg,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case ef:t="ENVMAP_BLENDING_MIX";break;case nf:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ag(e),c=lg(e),h=cg(e),u=hg(e),f=ug(e),d=Qm(e),m=tg(r),_=s.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fs).join(`
`),g.length>0&&(g+=`
`)):(p=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),g=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?$t.tonemapping_pars_fragment:"",e.toneMapping!==ni?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Oa(o),o=xc(o,e),o=vc(o,e),a=Oa(a),a=xc(a,e),a=vc(a,e),o=yc(o),a=yc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+p+o,y=M+g+a,R=gc(s,s.VERTEX_SHADER,v),E=gc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(S){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(E).trim();let X=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,E);else{const j=_c(s,R,"vertex"),V=_c(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+j+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||G==="")&&(B=!1);B&&(S.diagnostics={runnable:X,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:g}})}s.deleteShader(R),s.deleteShader(E),L=new Or(s,_),I=eg(s,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,qm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let dg=0;class pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mg(t),e.set(t,n)),n}}class mg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function gg(i,t,e,n,s,r,o){const a=new al,l=new pg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,S,k,F,G){const X=F.fog,B=G.geometry,j=x.isMeshStandardMaterial?F.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||j),gt=V&&V.mapping===Zr?V.image.height:null,_t=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=xt!==void 0?xt.length:0;let Qt=0;B.morphAttributes.position!==void 0&&(Qt=1),B.morphAttributes.normal!==void 0&&(Qt=2),B.morphAttributes.color!==void 0&&(Qt=3);let Y,st,Et,mt;if(_t){const Je=Tn[_t];Y=Je.vertexShader,st=Je.fragmentShader}else Y=x.vertexShader,st=x.fragmentShader,l.update(x),Et=l.getVertexShaderID(x),mt=l.getFragmentShaderID(x);const Bt=i.getRenderTarget(),Ot=G.isInstancedMesh===!0,Xt=G.isBatchedMesh===!0,jt=!!x.map,J=!!x.matcap,P=!!V,ht=!!x.aoMap,at=!!x.lightMap,it=!!x.bumpMap,ut=!!x.normalMap,Dt=!!x.displacementMap,Mt=!!x.emissiveMap,A=!!x.metalnessMap,b=!!x.roughnessMap,z=x.anisotropy>0,$=x.clearcoat>0,Q=x.dispersion>0,K=x.iridescence>0,Pt=x.sheen>0,ft=x.transmission>0,wt=z&&!!x.anisotropyMap,ee=$&&!!x.clearcoatMap,rt=$&&!!x.clearcoatNormalMap,Tt=$&&!!x.clearcoatRoughnessMap,Vt=K&&!!x.iridescenceMap,Wt=K&&!!x.iridescenceThicknessMap,At=Pt&&!!x.sheenColorMap,ne=Pt&&!!x.sheenRoughnessMap,Yt=!!x.specularMap,pe=!!x.specularColorMap,D=!!x.specularIntensityMap,bt=ft&&!!x.transmissionMap,W=ft&&!!x.thicknessMap,tt=!!x.gradientMap,vt=!!x.alphaMap,St=x.alphaTest>0,se=!!x.alphaHash,Pe=!!x.extensions;let je=ni;x.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(je=i.toneMapping);const re={shaderID:_t,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:st,defines:x.defines,customVertexShaderID:Et,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Xt,batchingColor:Xt&&G._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&G.instanceColor!==null,instancingMorph:Ot&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:si,alphaToCoverage:!!x.alphaToCoverage,map:jt,matcap:J,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:gt,aoMap:ht,lightMap:at,bumpMap:it,normalMap:ut,displacementMap:d&&Dt,emissiveMap:Mt,normalMapObjectSpace:ut&&x.normalMapType===lf,normalMapTangentSpace:ut&&x.normalMapType===Ah,metalnessMap:A,roughnessMap:b,anisotropy:z,anisotropyMap:wt,clearcoat:$,clearcoatMap:ee,clearcoatNormalMap:rt,clearcoatRoughnessMap:Tt,dispersion:Q,iridescence:K,iridescenceMap:Vt,iridescenceThicknessMap:Wt,sheen:Pt,sheenColorMap:At,sheenRoughnessMap:ne,specularMap:Yt,specularColorMap:pe,specularIntensityMap:D,transmission:ft,transmissionMap:bt,thicknessMap:W,gradientMap:tt,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:St,alphaHash:se,combine:x.combine,mapUv:jt&&p(x.map.channel),aoMapUv:ht&&p(x.aoMap.channel),lightMapUv:at&&p(x.lightMap.channel),bumpMapUv:it&&p(x.bumpMap.channel),normalMapUv:ut&&p(x.normalMap.channel),displacementMapUv:Dt&&p(x.displacementMap.channel),emissiveMapUv:Mt&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:b&&p(x.roughnessMap.channel),anisotropyMapUv:wt&&p(x.anisotropyMap.channel),clearcoatMapUv:ee&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&p(x.sheenRoughnessMap.channel),specularMapUv:Yt&&p(x.specularMap.channel),specularColorMapUv:pe&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:bt&&p(x.transmissionMap.channel),thicknessMapUv:W&&p(x.thicknessMap.channel),alphaMapUv:vt&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(jt||vt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:jt&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===te,flipSided:x.side===Oe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function M(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)S.push(k),S.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const S=_[x.type];let k;if(S){const F=Tn[S];k=qs.clone(F.uniforms)}else k=x.uniforms;return k}function E(x,S){let k;for(let F=0,G=h.length;F<G;F++){const X=h[F];if(X.cacheKey===S){k=X,++k.usedTimes;break}}return k===void 0&&(k=new fg(i,S,x,r),h.push(k)),k}function T(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function L(x){l.remove(x)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:I}}function _g(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,_,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),t++,g}function a(u,f,d,m,_,p){const g=o(u,f,d,m,_,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(u,f,d,m,_,p){const g=o(u,f,d,m,_,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||xg),n.length>1&&n.sort(f||bc),s.length>1&&s.sort(f||bc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function vg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sc,i.set(n,[o])):s>=r.length?(o=new Sc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ct};break;case"SpotLight":e={position:new C,direction:new C,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let bg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i){const t=new yg,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Jt,o=new Jt;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,M=0,v=0,y=0,R=0,E=0,T=0;c.sort(Sg);for(let I=0,x=c.length;I<x;I++){const S=c[I],k=S.color,F=S.intensity,G=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=k.r*F,u+=k.g*F,f+=k.b*F;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],F);T++}else if(S.isDirectionalLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,V=e.get(S);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=S.shadow.matrix,M++}n.directional[d]=B,d++}else if(S.isSpotLight){const B=t.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(k).multiplyScalar(F),B.distance=G,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[_]=B;const j=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,j.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[_]=j.matrix,S.castShadow){const V=e.get(S);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,y++}_++}else if(S.isRectAreaLight){const B=t.get(S);B.color.copy(k).multiplyScalar(F),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=B,p++}else if(S.isPointLight){const B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){const j=S.shadow,V=e.get(S);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=S.shadow.matrix,v++}n.point[m]=B,m++}else if(S.isHemisphereLight){const B=t.get(S);B.skyColor.copy(S.color).multiplyScalar(F),B.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[g]=B,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==M||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=M,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=T,n.version=bg++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const v=c[g];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function wc(i){const t=new wg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new wc(i),t.set(s,[a])):r>=o.length?(a=new wc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Eg extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ag extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new ll;const s=new q,r=new q,o=new fe,a=new Eg({depthPacking:af}),l=new Ag,c={},h=e.maxTextureSize,u={[Wn]:Oe,[Oe]:Wn,[te]:te},f=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Cg,fragmentShader:Rg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let g=this.type;this.render=function(E,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=g!==zn&&this.type===zn,G=g===zn&&this.type!==zn;for(let X=0,B=E.length;X<B;X++){const j=E[X],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const gt=V.getFrameExtents();if(s.multiply(gt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,V.mapSize.y=r.y)),V.map===null||F===!0||G===!0){const xt=this.type!==zn?{minFilter:tn,magFilter:tn}:{};V.map!==null&&V.map.dispose(),V.map=new wn(s.x,s.y,xt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const _t=V.getViewportCount();for(let xt=0;xt<_t;xt++){const Zt=V.getViewport(xt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),k.viewport(o),V.updateMatrices(j,xt),n=V.getFrustum(),y(T,L,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&M(V,L),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,x,S)};function M(E,T){const L=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,L,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,L,d,_,null)}function v(E,T,L,I){let x=null;const S=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=x.uuid,F=T.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let X=G[F];X===void 0&&(X=x.clone(),G[F]=X,T.addEventListener("dispose",R)),x=X}if(x.visible=T.visible,x.wireframe=T.wireframe,I===zn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=L}return x}function y(E,T,L,I,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const F=t.update(E),G=E.material;if(Array.isArray(G)){const X=F.groups;for(let B=0,j=X.length;B<j;B++){const V=X[B],gt=G[V.materialIndex];if(gt&&gt.visible){const _t=v(E,gt,I,x);E.onBeforeShadow(i,E,T,L,F,_t,V),i.renderBufferDirect(L,null,F,_t,E,V),E.onAfterShadow(i,E,T,L,F,_t,V)}}}else if(G.visible){const X=v(E,G,I,x);E.onBeforeShadow(i,E,T,L,F,X,null),i.renderBufferDirect(L,null,F,X,E,null),E.onAfterShadow(i,E,T,L,F,X,null)}}const k=E.children;for(let F=0,G=k.length;F<G;F++)y(k[F],T,L,I,x)}function R(E){E.target.removeEventListener("dispose",R);for(const L in c){const I=c[L],x=E.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}const Lg={[ea]:na,[ia]:oa,[sa]:aa,[is]:ra,[na]:ea,[oa]:ia,[aa]:sa,[ra]:is};function Ig(i){function t(){let D=!1;const bt=new fe;let W=null;const tt=new fe(0,0,0,0);return{setMask:function(vt){W!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),W=vt)},setLocked:function(vt){D=vt},setClear:function(vt,St,se,Pe,je){je===!0&&(vt*=Pe,St*=Pe,se*=Pe),bt.set(vt,St,se,Pe),tt.equals(bt)===!1&&(i.clearColor(vt,St,se,Pe),tt.copy(bt))},reset:function(){D=!1,W=null,tt.set(-1,0,0,0)}}}function e(){let D=!1,bt=!1,W=null,tt=null,vt=null;return{setReversed:function(St){bt=St},setTest:function(St){St?Et(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(St){W!==St&&!D&&(i.depthMask(St),W=St)},setFunc:function(St){if(bt&&(St=Lg[St]),tt!==St){switch(St){case ea:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=St}},setLocked:function(St){D=St},setClear:function(St){vt!==St&&(i.clearDepth(St),vt=St)},reset:function(){D=!1,W=null,tt=null,vt=null}}}function n(){let D=!1,bt=null,W=null,tt=null,vt=null,St=null,se=null,Pe=null,je=null;return{setTest:function(re){D||(re?Et(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(re){bt!==re&&!D&&(i.stencilMask(re),bt=re)},setFunc:function(re,Je,Pn){(W!==re||tt!==Je||vt!==Pn)&&(i.stencilFunc(re,Je,Pn),W=re,tt=Je,vt=Pn)},setOp:function(re,Je,Pn){(St!==re||se!==Je||Pe!==Pn)&&(i.stencilOp(re,Je,Pn),St=re,se=Je,Pe=Pn)},setLocked:function(re){D=re},setClear:function(re){je!==re&&(i.clearStencil(re),je=re)},reset:function(){D=!1,bt=null,W=null,tt=null,vt=null,St=null,se=null,Pe=null,je=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,p=null,g=null,M=null,v=null,y=null,R=null,E=new ct(0,0,0),T=0,L=!1,I=null,x=null,S=null,k=null,F=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=B>=2);let V=null,gt={};const _t=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Zt=new fe().fromArray(_t),Qt=new fe().fromArray(xt);function Y(D,bt,W,tt){const vt=new Uint8Array(4),St=i.createTexture();i.bindTexture(D,St),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<W;se++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(bt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return St}const st={};st[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Et(i.DEPTH_TEST),r.setFunc(is),at(!1),it(Ul),Et(i.CULL_FACE),P(Gn);function Et(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function mt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Bt(D,bt){return h[D]!==bt?(i.bindFramebuffer(D,bt),h[D]=bt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ot(D,bt){let W=f,tt=!1;if(D){W=u.get(bt),W===void 0&&(W=[],u.set(bt,W));const vt=D.textures;if(W.length!==vt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let St=0,se=vt.length;St<se;St++)W[St]=i.COLOR_ATTACHMENT0+St;W.length=vt.length,tt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,tt=!0);tt&&i.drawBuffers(W)}function Xt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const jt={[gi]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};jt[Bu]=i.MIN,jt[Hu]=i.MAX;const J={[Gu]:i.ZERO,[Vu]:i.ONE,[Wu]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,bt,W,tt,vt,St,se,Pe,je,re){if(D===Gn){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(Et(i.BLEND),m=!0),D!==Fu){if(D!==_||re!==L){if((p!==gi||v!==gi)&&(i.blendEquation(i.FUNC_ADD),p=gi,v=gi),re)switch(D){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ns:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ns:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,M=null,y=null,R=null,E.set(0,0,0),T=0,_=D,L=re}return}vt=vt||bt,St=St||W,se=se||tt,(bt!==p||vt!==v)&&(i.blendEquationSeparate(jt[bt],jt[vt]),p=bt,v=vt),(W!==g||tt!==M||St!==y||se!==R)&&(i.blendFuncSeparate(J[W],J[tt],J[St],J[se]),g=W,M=tt,y=St,R=se),(Pe.equals(E)===!1||je!==T)&&(i.blendColor(Pe.r,Pe.g,Pe.b,je),E.copy(Pe),T=je),_=D,L=!1}function ht(D,bt){D.side===te?mt(i.CULL_FACE):Et(i.CULL_FACE);let W=D.side===Oe;bt&&(W=!W),at(W),D.blending===Zi&&D.transparent===!1?P(Gn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const tt=D.stencilWrite;o.setTest(tt),tt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function it(D){D!==Nu?(Et(i.CULL_FACE),D!==x&&(D===Ul?i.cullFace(i.BACK):D===ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),x=D}function ut(D){D!==S&&(X&&i.lineWidth(D),S=D)}function Dt(D,bt,W){D?(Et(i.POLYGON_OFFSET_FILL),(k!==bt||F!==W)&&(i.polygonOffset(bt,W),k=bt,F=W)):mt(i.POLYGON_OFFSET_FILL)}function Mt(D){D?Et(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+G-1),V!==D&&(i.activeTexture(D),V=D)}function b(D,bt,W){W===void 0&&(V===null?W=i.TEXTURE0+G-1:W=V);let tt=gt[W];tt===void 0&&(tt={type:void 0,texture:void 0},gt[W]=tt),(tt.type!==D||tt.texture!==bt)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(D,bt||st[D]),tt.type=D,tt.texture=bt)}function z(){const D=gt[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(D){Zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function At(D){Qt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Qt.copy(D))}function ne(D,bt){let W=l.get(bt);W===void 0&&(W=new WeakMap,l.set(bt,W));let tt=W.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(bt,D.name),W.set(D,tt))}function Yt(D,bt){const tt=l.get(bt).get(D);a.get(bt)!==tt&&(i.uniformBlockBinding(bt,tt,D.__bindingPointIndex),a.set(bt,tt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,gt={},h={},u=new WeakMap,f=[],d=null,m=!1,_=null,p=null,g=null,M=null,v=null,y=null,R=null,E=new ct(0,0,0),T=0,L=!1,I=null,x=null,S=null,k=null,F=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Et,disable:mt,bindFramebuffer:Bt,drawBuffers:Ot,useProgram:Xt,setBlending:P,setMaterial:ht,setFlipSided:at,setCullFace:it,setLineWidth:ut,setPolygonOffset:Dt,setScissorTest:Mt,activeTexture:A,bindTexture:b,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:Tt,texImage3D:Vt,updateUBOMapping:ne,uniformBlockBinding:Yt,texStorage2D:ee,texStorage3D:rt,texSubImage2D:K,texSubImage3D:Pt,compressedTexSubImage2D:ft,compressedTexSubImage3D:wt,scissor:Wt,viewport:At,reset:pe}}function Tc(i,t,e,n){const s=Dg(n);switch(e){case Mh:return i*t;case Sh:return i*t;case wh:return i*t*2;case tl:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Th:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case da:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Ia:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eh:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case Xn:case xh:return{byteLength:1,components:1};case Xs:case vh:case Vn:return{byteLength:2,components:1};case Ja:case Qa:return{byteLength:2,components:4};case yi:case ja:case En:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ug(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new q,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return d?new OffscreenCanvas(A,b):Xr("canvas")}function _(A,b,z){let $=1;const Q=Mt(A);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*Q.width),Pt=Math.floor($*Q.height);u===void 0&&(u=m(K,Pt));const ft=b?m(K,Pt):u;return ft.width=K,ft.height=Pt,ft.getContext("2d").drawImage(A,0,0,K,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Pt+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==tn&&A.minFilter!==Mn}function g(A){i.generateMipmap(A)}function M(A,b,z,$,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),b===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){const Pt=Q?Hr:oe.getTransfer($);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Pt===me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,b){let z;return A?b===null||b===yi||b===as?z=i.DEPTH24_STENCIL8:b===En?z=i.DEPTH32F_STENCIL8:b===Xs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===as?z=i.DEPTH_COMPONENT24:b===En?z=i.DEPTH_COMPONENT32F:b===Xs&&(z=i.DEPTH_COMPONENT16),z}function y(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),T(b),b.isVideoTexture&&h.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),I(b)}function T(A){const b=n.get(A);if(b.__webglInit===void 0)return;const z=A.source,$=f.get(z);if($){const Q=$[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(A),Object.keys($).length===0&&f.delete(z)}n.remove(A)}function L(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const z=A.source,$=f.get(z);delete $[b.__cacheKey],o.memory.textures--}function I(A){const b=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Q=0;Q<b.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=A.textures;for(let $=0,Q=z.length;$<Q;$++){const K=n.get(z[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(A)}let x=0;function S(){x=0}function k(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function F(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){const z=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(z,A,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function X(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Qt(z,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function B(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Qt(z,A,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function j(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Y(z,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const V={[os]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},gt={[tn]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},_t={[cf]:i.NEVER,[mf]:i.ALWAYS,[hf]:i.LESS,[Ch]:i.LEQUAL,[uf]:i.EQUAL,[pf]:i.GEQUAL,[ff]:i.GREATER,[df]:i.NOTEQUAL};function xt(A,b){if(b.type===En&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===co||b.magFilter===er||b.magFilter===vi||b.minFilter===Mn||b.minFilter===co||b.minFilter===er||b.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,V[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,V[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,V[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,gt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_t[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==er&&b.minFilter!==vi||b.type===En&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Zt(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const $=b.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const K=F(b);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[K].usedTimes++;const Pt=Q[A.__cacheKey];Pt!==void 0&&(Q[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&L(b)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return z}function Qt(A,b,z){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const Q=Zt(A,b),K=b.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+z);const Pt=n.get(K);if(K.version!==Pt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const ft=oe.getPrimaries(oe.workingColorSpace),wt=b.colorSpace===ei?null:oe.getPrimaries(b.colorSpace),ee=b.colorSpace===ei||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let rt=_(b.image,!1,s.maxTextureSize);rt=Dt(b,rt);const Tt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type);let Wt=M(b.internalFormat,Tt,Vt,b.colorSpace,b.isVideoTexture);xt($,b);let At;const ne=b.mipmaps,Yt=b.isVideoTexture!==!0,pe=Pt.__version===void 0||Q===!0,D=K.dataReady,bt=y(b,rt);if(b.isDepthTexture)Wt=v(b.format===ls,b.type),pe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Wt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Wt,rt.width,rt.height,0,Tt,Vt,null));else if(b.isDataTexture)if(ne.length>0){Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,bt,Wt,ne[0].width,ne[0].height);for(let W=0,tt=ne.length;W<tt;W++)At=ne[W],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,At.width,At.height,Tt,Vt,At.data):e.texImage2D(i.TEXTURE_2D,W,Wt,At.width,At.height,0,Tt,Vt,At.data);b.generateMipmaps=!1}else Yt?(pe&&e.texStorage2D(i.TEXTURE_2D,bt,Wt,rt.width,rt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Tt,Vt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,rt.width,rt.height,0,Tt,Vt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Yt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Wt,ne[0].width,ne[0].height,rt.depth);for(let W=0,tt=ne.length;W<tt;W++)if(At=ne[W],b.format!==Sn)if(Tt!==null)if(Yt){if(D)if(b.layerUpdates.size>0){const vt=Tc(At.width,At.height,b.format,b.type);for(const St of b.layerUpdates){const se=At.data.subarray(St*vt/At.data.BYTES_PER_ELEMENT,(St+1)*vt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,St,At.width,At.height,1,Tt,se,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,At.width,At.height,rt.depth,Tt,At.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Wt,At.width,At.height,rt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,At.width,At.height,rt.depth,Tt,Vt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Wt,At.width,At.height,rt.depth,0,Tt,Vt,At.data)}else{Yt&&pe&&e.texStorage2D(i.TEXTURE_2D,bt,Wt,ne[0].width,ne[0].height);for(let W=0,tt=ne.length;W<tt;W++)At=ne[W],b.format!==Sn?Tt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Wt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,At.width,At.height,Tt,Vt,At.data):e.texImage2D(i.TEXTURE_2D,W,Wt,At.width,At.height,0,Tt,Vt,At.data)}else if(b.isDataArrayTexture)if(Yt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Wt,rt.width,rt.height,rt.depth),D)if(b.layerUpdates.size>0){const W=Tc(rt.width,rt.height,b.format,b.type);for(const tt of b.layerUpdates){const vt=rt.data.subarray(tt*W/rt.data.BYTES_PER_ELEMENT,(tt+1)*W/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,Tt,Vt,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Vt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,rt.width,rt.height,rt.depth,0,Tt,Vt,rt.data);else if(b.isData3DTexture)Yt?(pe&&e.texStorage3D(i.TEXTURE_3D,bt,Wt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Vt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,rt.width,rt.height,rt.depth,0,Tt,Vt,rt.data);else if(b.isFramebufferTexture){if(pe)if(Yt)e.texStorage2D(i.TEXTURE_2D,bt,Wt,rt.width,rt.height);else{let W=rt.width,tt=rt.height;for(let vt=0;vt<bt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Wt,W,tt,0,Tt,Vt,null),W>>=1,tt>>=1}}else if(ne.length>0){if(Yt&&pe){const W=Mt(ne[0]);e.texStorage2D(i.TEXTURE_2D,bt,Wt,W.width,W.height)}for(let W=0,tt=ne.length;W<tt;W++)At=ne[W],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Tt,Vt,At):e.texImage2D(i.TEXTURE_2D,W,Wt,Tt,Vt,At);b.generateMipmaps=!1}else if(Yt){if(pe){const W=Mt(rt);e.texStorage2D(i.TEXTURE_2D,bt,Wt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Vt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Wt,Tt,Vt,rt);p(b)&&g($),Pt.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Y(A,b,z){if(b.image.length!==6)return;const $=Zt(A,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const K=n.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+z);const Pt=oe.getPrimaries(oe.workingColorSpace),ft=b.colorSpace===ei?null:oe.getPrimaries(b.colorSpace),wt=b.colorSpace===ei||Pt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!ee&&!rt?Tt[tt]=_(b.image[tt],!0,s.maxCubemapSize):Tt[tt]=rt?b.image[tt].image:b.image[tt],Tt[tt]=Dt(b,Tt[tt]);const Vt=Tt[0],Wt=r.convert(b.format,b.colorSpace),At=r.convert(b.type),ne=M(b.internalFormat,Wt,At,b.colorSpace),Yt=b.isVideoTexture!==!0,pe=K.__version===void 0||$===!0,D=Q.dataReady;let bt=y(b,Vt);xt(i.TEXTURE_CUBE_MAP,b);let W;if(ee){Yt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ne,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){W=Tt[tt].mipmaps;for(let vt=0;vt<W.length;vt++){const St=W[vt];b.format!==Sn?Wt!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,St.width,St.height,Wt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,ne,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,St.width,St.height,Wt,At,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,ne,St.width,St.height,0,Wt,At,St.data)}}}else{if(W=b.mipmaps,Yt&&pe){W.length>0&&bt++;const tt=Mt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ne,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Wt,At,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,Tt[tt].width,Tt[tt].height,0,Wt,At,Tt[tt].data);for(let vt=0;vt<W.length;vt++){const se=W[vt].image[tt].image;Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,se.width,se.height,Wt,At,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,ne,se.width,se.height,0,Wt,At,se.data)}}else{Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Wt,At,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ne,Wt,At,Tt[tt]);for(let vt=0;vt<W.length;vt++){const St=W[vt];Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,Wt,At,St.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,ne,Wt,At,St.image[tt])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),K.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,z,$,Q,K){const Pt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),wt=M(z.internalFormat,Pt,ft,z.colorSpace);if(!n.get(b).__hasExternalTextures){const rt=Math.max(1,b.width>>K),Tt=Math.max(1,b.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,wt,rt,Tt,b.depth,0,Pt,ft,null):e.texImage2D(Q,K,wt,rt,Tt,0,Pt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),it(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,n.get(z).__webglTexture,0,at(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,n.get(z).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const $=b.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=v(b.stencilBuffer,Q),Pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=at(b);it(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,K,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,A)}else{const $=b.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Pt=r.convert(K.format,K.colorSpace),ft=r.convert(K.type),wt=M(K.internalFormat,Pt,ft,K.colorSpace),ee=at(b);z&&it(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,wt,b.width,b.height):it(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,wt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,wt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const $=n.get(b.depthTexture).__webglTexture,Q=at(b);if(b.depthTexture.format===ji)it(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(b.depthTexture.format===ls)it(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const b=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=$}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),Et(b.__webglDepthbuffer[$],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Et(b.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,b,z){const $=n.get(A);b!==void 0&&st($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Bt(A)}function Xt(A){const b=A.texture,z=n.get(A),$=n.get(b);A.addEventListener("dispose",E);const Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,Pt=Q.length>1;if(Pt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let wt=0;wt<b.mipmaps.length;wt++)z.__webglFramebuffer[ft][wt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ft=0,wt=Q.length;ft<wt;ft++){const ee=n.get(Q[ft]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&it(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const wt=Q[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const ee=r.convert(wt.format,wt.colorSpace),rt=r.convert(wt.type),Tt=M(wt.internalFormat,ee,rt,wt.colorSpace,A.isXRRenderTarget===!0),Vt=at(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),xt(i.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)st(z.__webglFramebuffer[ft][wt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt);else st(z.__webglFramebuffer[ft],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ft=0,wt=Q.length;ft<wt;ft++){const ee=Q[ft],rt=n.get(ee);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),xt(i.TEXTURE_2D,ee),st(z.__webglFramebuffer,A,ee,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),p(ee)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),xt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)st(z.__webglFramebuffer[wt],A,b,i.COLOR_ATTACHMENT0,ft,wt);else st(z.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ft,0);p(b)&&g(ft),e.unbindTexture()}A.depthBuffer&&Bt(A)}function jt(A){const b=A.textures;for(let z=0,$=b.length;z<$;z++){const Q=b[z];if(p(Q)){const K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(Q).__webglTexture;e.bindTexture(K,Pt),g(K),e.unbindTexture()}}}const J=[],P=[];function ht(A){if(A.samples>0){if(it(A)===!1){const b=A.textures,z=A.width,$=A.height;let Q=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(A),ft=b.length>1;if(ft)for(let wt=0;wt<b.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[wt]);const ee=n.get(b[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,Q,i.NEAREST),l===!0&&(J.length=0,P.length=0,J.push(i.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push(K),P.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let wt=0;wt<b.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[wt]);const ee=n.get(b[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function at(A){return Math.min(s.maxSamples,A.samples)}function it(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(A){const b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Dt(A,b){const z=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==si&&z!==ei&&(oe.getTransfer(z)===me?($!==Sn||Q!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=Ot,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=it}function Ng(i,t){function e(n,s=ei){let r;const o=oe.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===vh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===bh)return i.RGB;if(n===Sn)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===wh)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Th)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===Dr||n===Ur||n===Nr||n===kr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===fa||n===da||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===va||n===ya||n===Ma||n===ba||n===Sa||n===wa||n===Ta||n===Ea||n===Aa||n===Ca||n===Ra||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Ia||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Ua||n===Na||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class kg extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ie extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fg={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ke({vertexShader:zg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Re(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hg extends ms{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const _=new Bg,p=e.getContextAttributes();let g=null,M=null;const v=[],y=[],R=new q;let E=null;const T=new Qe;T.layers.enable(1),T.viewport=new fe;const L=new Qe;L.layers.enable(2),L.viewport=new fe;const I=[T,L],x=new kg;x.layers.enable(1),x.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=v[Y];return st===void 0&&(st=new zo,v[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=v[Y];return st===void 0&&(st=new zo,v[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=v[Y];return st===void 0&&(st=new zo,v[Y]=st),st.getHandSpace()};function F(Y){const st=y.indexOf(Y.inputSource);if(st===-1)return;const Et=v[st];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,c||o),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<v.length;Y++){const st=y[Y];st!==null&&(y[Y]=null,v[Y].disconnect(st))}S=null,k=null,_.reset(),t.setRenderTarget(g),d=null,f=null,u=null,s=null,M=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new wn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,Et=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?ls:ji,Et=p.stencil?as:yi);const Bt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new wn(f.textureWidth,f.textureHeight,{format:Sn,type:Xn,depthTexture:new Oh(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let st=0;st<Y.removed.length;st++){const Et=Y.removed[st],mt=y.indexOf(Et);mt>=0&&(y[mt]=null,v[mt].disconnect(Et))}for(let st=0;st<Y.added.length;st++){const Et=Y.added[st];let mt=y.indexOf(Et);if(mt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=y.length){y.push(Et),mt=Ot;break}else if(y[Ot]===null){y[Ot]=Et,mt=Ot;break}if(mt===-1)break}const Bt=v[mt];Bt&&Bt.connect(Et)}}const B=new C,j=new C;function V(Y,st,Et){B.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const mt=B.distanceTo(j),Bt=st.projectionMatrix.elements,Ot=Et.projectionMatrix.elements,Xt=Bt[14]/(Bt[10]-1),jt=Bt[14]/(Bt[10]+1),J=(Bt[9]+1)/Bt[5],P=(Bt[9]-1)/Bt[5],ht=(Bt[8]-1)/Bt[0],at=(Ot[8]+1)/Ot[0],it=Xt*ht,ut=Xt*at,Dt=mt/(-ht+at),Mt=Dt*-ht;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(Dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Bt[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const A=Xt+Dt,b=jt+Dt,z=it-Mt,$=ut+(mt-Mt),Q=J*jt/b*A,K=P*jt/b*A;Y.projectionMatrix.makePerspective(z,$,Q,K,A,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function gt(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let st=Y.near,Et=Y.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),x.near=L.near=T.near=st,x.far=L.far=T.far=Et,(S!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,k=x.far);const mt=Y.parent,Bt=x.cameras;gt(x,mt);for(let Ot=0;Ot<Bt.length;Ot++)gt(Bt[Ot],mt);Bt.length===2?V(x,T,L):x.projectionMatrix.copy(T.projectionMatrix),_t(Y,x,mt)};function _t(Y,st,Et){Et===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function Zt(Y,st){if(h=st.getViewerPose(c||o),m=st,h!==null){const Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;Et.length!==x.cameras.length&&(x.cameras.length=0,mt=!0);for(let Ot=0;Ot<Et.length;Ot++){const Xt=Et[Ot];let jt=null;if(d!==null)jt=d.getViewport(Xt);else{const P=u.getViewSubImage(f,Xt);jt=P.viewport,Ot===0&&(t.setRenderTargetTextures(M,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let J=I[Ot];J===void 0&&(J=new Qe,J.layers.enable(Ot),J.viewport=new fe,I[Ot]=J),J.matrix.fromArray(Xt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Xt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(jt.x,jt.y,jt.width,jt.height),Ot===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),mt===!0&&x.cameras.push(J)}const Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Ot=u.getDepthInformation(Et[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let Et=0;Et<v.length;Et++){const mt=y[Et],Bt=v[Et];mt!==null&&Bt!==void 0&&Bt.update(mt,st,c||o)}xt&&xt(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Qt=new zh;Qt.setAnimationLoop(Zt),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const fi=new Ze,Gg=new Jt;function Vg(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Nh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Oe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Oe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),v=M.envMap,y=M.envMapRotation;v&&(p.envMap.value=v,fi.copy(y),fi.x*=-1,fi.y*=-1,fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),p.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(fi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Oe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(M,R);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){const v=u();M.__bindingPointIndex=v;const y=i.createBuffer(),R=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,x=L.length;I<x;I++){const S=L[I];if(d(S,E,I,R)===!0){const k=S.__offset,F=Array.isArray(S.value)?S.value:[S.value];let G=0;for(let X=0;X<F.length;X++){const B=F[X],j=_(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+G,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,R){const E=M.value,T=v+"_"+y;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const L=R[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return R[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(M){const v=M.uniforms;let y=0;const R=16;for(let T=0,L=v.length;T<L;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,S=I.length;x<S;x++){const k=I[x],F=Array.isArray(k.value)?k.value:[k.value];for(let G=0,X=F.length;G<X;G++){const B=F[G],j=_(B),V=y%R,gt=V%j.boundary,_t=V+gt;y+=gt,_t!==0&&R-_t<j.storage&&(y+=R-_t),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=j.storage}}}const E=y%R;return E>0&&(y+=R-E),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Xg{constructor(t={}){const{canvas:e=Df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let y=!1,R=0,E=0,T=null,L=-1,I=null;const x=new fe,S=new fe;let k=null;const F=new ct(0);let G=0,X=e.width,B=e.height,j=1,V=null,gt=null;const _t=new fe(0,0,X,B),xt=new fe(0,0,X,B);let Zt=!1;const Qt=new ll;let Y=!1,st=!1;const Et=new Jt,mt=new Jt,Bt=new C,Ot=new fe,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function J(){return T===null?j:1}let P=n;function ht(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",St,!1),P===null){const U="webgl2";if(P=ht(U,w),P===null)throw ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let at,it,ut,Dt,Mt,A,b,z,$,Q,K,Pt,ft,wt,ee,rt,Tt,Vt,Wt,At,ne,Yt,pe,D;function bt(){at=new Z0(P),at.init(),Yt=new Ng(P,at),it=new W0(P,at,t,Yt),ut=new Ig(P),it.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),Dt=new Q0(P),Mt=new _g,A=new Ug(P,at,ut,Mt,it,Yt,Dt),b=new q0(v),z=new K0(v),$=new od(P),pe=new G0(P,$),Q=new j0(P,$,Dt,pe),K=new em(P,Q,$,Dt),Wt=new tm(P,it,A),rt=new X0(Mt),Pt=new gg(v,b,z,at,it,pe,rt),ft=new Vg(v,Mt),wt=new vg,ee=new Tg(at),Vt=new H0(v,b,z,ut,K,f,l),Tt=new Pg(v,K,it),D=new Wg(P,Dt,it,ut),At=new V0(P,at,Dt),ne=new J0(P,at,Dt),Dt.programs=Pt.programs,v.capabilities=it,v.extensions=at,v.properties=Mt,v.renderLists=wt,v.shadowMap=Tt,v.state=ut,v.info=Dt}bt();const W=new Hg(v,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(X,B,!1))},this.getSize=function(w){return w.set(X,B)},this.setSize=function(w,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,B=U,e.width=Math.floor(w*j),e.height=Math.floor(U*j),O===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*j,B*j).floor()},this.setDrawingBufferSize=function(w,U,O){X=w,B=U,j=O,e.width=Math.floor(w*O),e.height=Math.floor(U*O),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(_t)},this.setViewport=function(w,U,O,H){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,U,O,H),ut.viewport(x.copy(_t).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,U,O,H){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,U,O,H),ut.scissor(S.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(w){ut.setScissorTest(Zt=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(w=!0,U=!0,O=!0){let H=0;if(w){let N=!1;if(T!==null){const ot=T.texture.format;N=ot===il||ot===nl||ot===el}if(N){const ot=T.texture.type,yt=ot===Xn||ot===yi||ot===Xs||ot===as||ot===Ja||ot===Qa,Rt=Vt.getClearColor(),Lt=Vt.getClearAlpha(),Ht=Rt.r,Gt=Rt.g,It=Rt.b;yt?(d[0]=Ht,d[1]=Gt,d[2]=It,d[3]=Lt,P.clearBufferuiv(P.COLOR,0,d)):(m[0]=Ht,m[1]=Gt,m[2]=It,m[3]=Lt,P.clearBufferiv(P.COLOR,0,m))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),wt.dispose(),ee.dispose(),Mt.dispose(),b.dispose(),z.dispose(),K.dispose(),pe.dispose(),D.dispose(),Pt.dispose(),W.dispose(),W.removeEventListener("sessionstart",El),W.removeEventListener("sessionend",Al),oi.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Dt.autoReset,U=Tt.enabled,O=Tt.autoUpdate,H=Tt.needsUpdate,N=Tt.type;bt(),Dt.autoReset=w,Tt.enabled=U,Tt.autoUpdate=O,Tt.needsUpdate=H,Tt.type=N}function St(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){const U=w.target;U.removeEventListener("dispose",se),Pe(U)}function Pe(w){je(w),Mt.remove(w)}function je(w){const U=Mt.get(w).programs;U!==void 0&&(U.forEach(function(O){Pt.releaseProgram(O)}),w.isShaderMaterial&&Pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,O,H,N,ot){U===null&&(U=Xt);const yt=N.isMesh&&N.matrixWorld.determinant()<0,Rt=Lu(w,U,O,H,N);ut.setMaterial(H,yt);let Lt=O.index,Ht=1;if(H.wireframe===!0){if(Lt=Q.getWireframeAttribute(O),Lt===void 0)return;Ht=2}const Gt=O.drawRange,It=O.attributes.position;let he=Gt.start*Ht,xe=(Gt.start+Gt.count)*Ht;ot!==null&&(he=Math.max(he,ot.start*Ht),xe=Math.min(xe,(ot.start+ot.count)*Ht)),Lt!==null?(he=Math.max(he,0),xe=Math.min(xe,Lt.count)):It!=null&&(he=Math.max(he,0),xe=Math.min(xe,It.count));const we=xe-he;if(we<0||we===1/0)return;pe.setup(N,H,Rt,O,Lt);let en,ae=At;if(Lt!==null&&(en=$.get(Lt),ae=ne,ae.setIndex(en)),N.isMesh)H.wireframe===!0?(ut.setLineWidth(H.wireframeLinewidth*J()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(N.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),ut.setLineWidth(Ut*J()),N.isLineSegments?ae.setMode(P.LINES):N.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else N.isPoints?ae.setMode(P.POINTS):N.isSprite&&ae.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,ze=N._multiDrawCounts,le=N._multiDrawCount,_n=Lt?$.get(Lt).bytesPerElement:1,Ei=Mt.get(H).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)Ei.setValue(P,"_gl_DrawID",nn),ae.render(Ut[nn]/_n,ze[nn])}else if(N.isInstancedMesh)ae.renderInstances(he,we,N.count);else if(O.isInstancedBufferGeometry){const Ut=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ze=Math.min(O.instanceCount,Ut);ae.renderInstances(he,we,ze)}else ae.render(he,we)};function re(w,U,O){w.transparent===!0&&w.side===te&&w.forceSinglePass===!1?(w.side=Oe,w.needsUpdate=!0,tr(w,U,O),w.side=Wn,w.needsUpdate=!0,tr(w,U,O),w.side=te):tr(w,U,O)}this.compile=function(w,U,O=null){O===null&&(O=w),p=ee.get(O),p.init(U),M.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==O&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let yt=0;yt<ot.length;yt++){const Rt=ot[yt];re(Rt,O,N),H.add(Rt)}else re(ot,O,N),H.add(ot)}),M.pop(),p=null,H},this.compileAsync=function(w,U,O=null){const H=this.compile(w,U,O);return new Promise(N=>{function ot(){if(H.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&H.delete(yt)}),H.size===0){N(w);return}setTimeout(ot,10)}at.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Je=null;function Pn(w){Je&&Je(w)}function El(){oi.stop()}function Al(){oi.start()}const oi=new zh;oi.setAnimationLoop(Pn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(w){Je=w,W.setAnimationLoop(w),w===null?oi.stop():oi.start()},W.addEventListener("sessionstart",El),W.addEventListener("sessionend",Al),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,T),p=ee.get(w,M.length),p.init(U),M.push(p),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qt.setFromProjectionMatrix(mt),st=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,st),_=wt.get(w,g.length),_.init(),g.push(_),W.enabled===!0&&W.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&ro(ot,U,-1/0,v.sortObjects)}ro(w,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,gt),jt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,jt&&Vt.addToRenderList(_,w),this.info.render.frame++,Y===!0&&rt.beginShadows();const O=p.state.shadowsArray;Tt.render(O,w,U),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(N.length>0)for(let yt=0,Rt=ot.length;yt<Rt;yt++){const Lt=ot[yt];Rl(H,N,w,Lt)}jt&&Vt.render(w);for(let yt=0,Rt=ot.length;yt<Rt;yt++){const Lt=ot[yt];Cl(_,w,Lt,Lt.viewport)}}else N.length>0&&Rl(H,N,w,U),jt&&Vt.render(w),Cl(_,w,U);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,U),pe.resetDefaultState(),L=-1,I=null,M.pop(),M.length>0?(p=M[M.length-1],Y===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function ro(w,U,O,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qt.intersectsSprite(w)){H&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);const yt=K.update(w),Rt=w.material;Rt.visible&&_.push(w,yt,Rt,O,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qt.intersectsObject(w))){const yt=K.update(w),Rt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ot.copy(yt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(Rt)){const Lt=yt.groups;for(let Ht=0,Gt=Lt.length;Ht<Gt;Ht++){const It=Lt[Ht],he=Rt[It.materialIndex];he&&he.visible&&_.push(w,yt,he,O,Ot.z,It)}}else Rt.visible&&_.push(w,yt,Rt,O,Ot.z,null)}}const ot=w.children;for(let yt=0,Rt=ot.length;yt<Rt;yt++)ro(ot[yt],U,O,H)}function Cl(w,U,O,H){const N=w.opaque,ot=w.transmissive,yt=w.transparent;p.setupLightsView(O),Y===!0&&rt.setGlobalState(v.clippingPlanes,O),H&&ut.viewport(x.copy(H)),N.length>0&&Qs(N,U,O),ot.length>0&&Qs(ot,U,O),yt.length>0&&Qs(yt,U,O),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Rl(w,U,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new wn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Vn:Xn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ot=p.state.transmissionRenderTarget[H.id],yt=H.viewport||x;ot.setSize(yt.z,yt.w);const Rt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),jt&&Vt.render(O);const Lt=v.toneMapping;v.toneMapping=ni;const Ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Y===!0&&rt.setGlobalState(v.clippingPlanes,H),Qs(w,O,H),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),at.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let It=0,he=U.length;It<he;It++){const xe=U[It],we=xe.object,en=xe.geometry,ae=xe.material,Ut=xe.group;if(ae.side===te&&we.layers.test(H.layers)){const ze=ae.side;ae.side=Oe,ae.needsUpdate=!0,Pl(we,O,H,en,ae,Ut),ae.side=ze,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}v.setRenderTarget(Rt),v.setClearColor(F,G),Ht!==void 0&&(H.viewport=Ht),v.toneMapping=Lt}function Qs(w,U,O){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=w.length;N<ot;N++){const yt=w[N],Rt=yt.object,Lt=yt.geometry,Ht=H===null?yt.material:H,Gt=yt.group;Rt.layers.test(O.layers)&&Pl(Rt,U,O,Lt,Ht,Gt)}}function Pl(w,U,O,H,N,ot){w.onBeforeRender(v,U,O,H,N,ot),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,O,H,w,ot),N.transparent===!0&&N.side===te&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,v.renderBufferDirect(O,U,H,N,w,ot),N.side=Wn,N.needsUpdate=!0,v.renderBufferDirect(O,U,H,N,w,ot),N.side=te):v.renderBufferDirect(O,U,H,N,w,ot),w.onAfterRender(v,U,O,H,N,ot)}function tr(w,U,O){U.isScene!==!0&&(U=Xt);const H=Mt.get(w),N=p.state.lights,ot=p.state.shadowsArray,yt=N.state.version,Rt=Pt.getParameters(w,N.state,ot,U,O),Lt=Pt.getProgramCacheKey(Rt);let Ht=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?z:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",se),Ht=new Map,H.programs=Ht);let Gt=Ht.get(Lt);if(Gt!==void 0){if(H.currentProgram===Gt&&H.lightsStateVersion===yt)return Il(w,Rt),Gt}else Rt.uniforms=Pt.getUniforms(w),w.onBeforeCompile(Rt,v),Gt=Pt.acquireProgram(Rt,Lt),Ht.set(Lt,Gt),H.uniforms=Rt.uniforms;const It=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=rt.uniform),Il(w,Rt),H.needsLights=Du(w),H.lightsStateVersion=yt,H.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Gt,H.uniformsList=null,Gt}function Ll(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Or.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Il(w,U){const O=Mt.get(w);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Lu(w,U,O,H,N){U.isScene!==!0&&(U=Xt),A.resetTextureUnits();const ot=U.fog,yt=H.isMeshStandardMaterial?U.environment:null,Rt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:si,Lt=(H.isMeshStandardMaterial?z:b).get(H.envMap||yt),Ht=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Gt=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!O.morphAttributes.position,he=!!O.morphAttributes.normal,xe=!!O.morphAttributes.color;let we=ni;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(we=v.toneMapping);const en=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=en!==void 0?en.length:0,Ut=Mt.get(H),ze=p.state.lights;if(Y===!0&&(st===!0||w!==I)){const un=w===I&&H.id===L;rt.setState(H,w,un)}let le=!1;H.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ze.state.version||Ut.outputColorSpace!==Rt||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==Lt||H.fog===!0&&Ut.fog!==ot||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==rt.numPlanes||Ut.numIntersection!==rt.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Gt||Ut.morphTargets!==It||Ut.morphNormals!==he||Ut.morphColors!==xe||Ut.toneMapping!==we||Ut.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ut.__version=H.version);let _n=Ut.currentProgram;le===!0&&(_n=tr(H,U,N));let Ei=!1,nn=!1,oo=!1;const Ee=_n.getUniforms(),$n=Ut.uniforms;if(ut.useProgram(_n.program)&&(Ei=!0,nn=!0,oo=!0),H.id!==L&&(L=H.id,nn=!0),Ei||I!==w){it.reverseDepthBuffer?(Et.copy(w.projectionMatrix),Nf(Et),kf(Et),Ee.setValue(P,"projectionMatrix",Et)):Ee.setValue(P,"projectionMatrix",w.projectionMatrix),Ee.setValue(P,"viewMatrix",w.matrixWorldInverse);const un=Ee.map.cameraPosition;un!==void 0&&un.setValue(P,Bt.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,nn=!0,oo=!0)}if(N.isSkinnedMesh){Ee.setOptional(P,N,"bindMatrix"),Ee.setOptional(P,N,"bindMatrixInverse");const un=N.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ee.setValue(P,"boneTexture",un.boneTexture,A))}N.isBatchedMesh&&(Ee.setOptional(P,N,"batchingTexture"),Ee.setValue(P,"batchingTexture",N._matricesTexture,A),Ee.setOptional(P,N,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",N._indirectTexture,A),Ee.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",N._colorsTexture,A));const ao=O.morphAttributes;if((ao.position!==void 0||ao.normal!==void 0||ao.color!==void 0)&&Wt.update(N,O,_n),(nn||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,Ee.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&($n.envMap.value=Lt,$n.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&($n.envMapIntensity.value=U.environmentIntensity),nn&&(Ee.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Iu($n,oo),ot&&H.fog===!0&&ft.refreshFogUniforms($n,ot),ft.refreshMaterialUniforms($n,H,j,B,p.state.transmissionRenderTarget[w.id]),Or.upload(P,Ll(Ut),$n,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Or.upload(P,Ll(Ut),$n,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(P,"center",N.center),Ee.setValue(P,"modelViewMatrix",N.modelViewMatrix),Ee.setValue(P,"normalMatrix",N.normalMatrix),Ee.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const un=H.uniformsGroups;for(let lo=0,Uu=un.length;lo<Uu;lo++){const Dl=un[lo];D.update(Dl,_n),D.bind(Dl,_n)}}return _n}function Iu(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Du(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,U,O){Mt.get(w.texture).__webglTexture=U,Mt.get(w.depthTexture).__webglTexture=O;const H=Mt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const O=Mt.get(w);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,O=0){T=w,R=U,E=O;let H=!0,N=null,ot=!1,yt=!1;if(w){const Lt=Mt.get(w);if(Lt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Lt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Lt.__hasExternalTextures)A.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const It=w.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&Mt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);const Gt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][O]:N=Gt[U],ot=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[O]:N=Gt,x.copy(w.viewport),S.copy(w.scissor),k=w.scissorTest}else x.copy(_t).multiplyScalar(j).floor(),S.copy(xt).multiplyScalar(j).floor(),k=Zt;if(ut.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&ut.drawBuffers(w,N),ut.viewport(x),ut.scissor(S),ut.setScissorTest(k),ot){const Lt=Mt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,O)}else if(yt){const Lt=Mt.get(w.texture),Ht=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.__webglTexture,O||0,Ht)}L=-1},this.readRenderTargetPixels=function(w,U,O,H,N,ot,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){ut.bindFramebuffer(P.FRAMEBUFFER,Rt);try{const Lt=w.texture,Ht=Lt.format,Gt=Lt.type;if(!it.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&O>=0&&O<=w.height-N&&P.readPixels(U,O,H,N,Yt.convert(Ht),Yt.convert(Gt),ot)}finally{const Lt=T!==null?Mt.get(T).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,U,O,H,N,ot,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){const Lt=w.texture,Ht=Lt.format,Gt=Lt.type;if(!it.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&O>=0&&O<=w.height-N){ut.bindFramebuffer(P.FRAMEBUFFER,Rt);const It=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,It),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(U,O,H,N,Yt.convert(Ht),Yt.convert(Gt),0);const he=T!==null?Mt.get(T).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,he);const xe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Uf(P,xe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,It),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(It),P.deleteSync(xe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,O=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-O),N=Math.floor(w.image.width*H),ot=Math.floor(w.image.height*H),yt=U!==null?U.x:0,Rt=U!==null?U.y:0;A.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,yt,Rt,N,ot),ut.unbindTexture()},this.copyTextureToTexture=function(w,U,O=null,H=null,N=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let ot,yt,Rt,Lt,Ht,Gt;O!==null?(ot=O.max.x-O.min.x,yt=O.max.y-O.min.y,Rt=O.min.x,Lt=O.min.y):(ot=w.image.width,yt=w.image.height,Rt=0,Lt=0),H!==null?(Ht=H.x,Gt=H.y):(Ht=0,Gt=0);const It=Yt.convert(U.format),he=Yt.convert(U.type);A.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const xe=P.getParameter(P.UNPACK_ROW_LENGTH),we=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),ae=P.getParameter(P.UNPACK_SKIP_ROWS),Ut=P.getParameter(P.UNPACK_SKIP_IMAGES),ze=w.isCompressedTexture?w.mipmaps[N]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ze.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Ht,Gt,ot,yt,It,he,ze.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Ht,Gt,ze.width,ze.height,It,ze.data):P.texSubImage2D(P.TEXTURE_2D,N,Ht,Gt,ot,yt,It,he,ze),P.pixelStorei(P.UNPACK_ROW_LENGTH,xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(w,U,O=null,H=null,N=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let ot,yt,Rt,Lt,Ht,Gt,It,he,xe;const we=w.isCompressedTexture?w.mipmaps[N]:w.image;O!==null?(ot=O.max.x-O.min.x,yt=O.max.y-O.min.y,Rt=O.max.z-O.min.z,Lt=O.min.x,Ht=O.min.y,Gt=O.min.z):(ot=we.width,yt=we.height,Rt=we.depth,Lt=0,Ht=0,Gt=0),H!==null?(It=H.x,he=H.y,xe=H.z):(It=0,he=0,xe=0);const en=Yt.convert(U.format),ae=Yt.convert(U.type);let Ut;if(U.isData3DTexture)A.setTexture3D(U,0),Ut=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Ut=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ze=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),_n=P.getParameter(P.UNPACK_SKIP_PIXELS),Ei=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,we.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ut,N,It,he,xe,ot,yt,Rt,en,ae,we.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,N,It,he,xe,ot,yt,Rt,en,we.data):P.texSubImage3D(Ut,N,It,he,xe,ot,yt,Rt,en,ae,we),P.pixelStorei(P.UNPACK_ROW_LENGTH,ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_n),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ei),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),N===0&&U.generateMipmaps&&P.generateMipmap(Ut),ut.unbindTexture()},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ut.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,ut.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===sl?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===jr?"display-p3":"srgb"}}class ul{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wh extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new C;class qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yr extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const Cs=new C,Gi=new C,Vi=new C,Wi=new q,Rs=new q,Xh=new Jt,br=new C,Ps=new C,Sr=new C,Ec=new q,Oo=new q,Ac=new q;class Ba extends Ce{constructor(t=new Yr){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qg(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new qr(n,3,0,!1)),Hi.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;wr(br.set(-.5,-.5,0),Vi,o,Gi,s,r),wr(Ps.set(.5,-.5,0),Vi,o,Gi,s,r),wr(Sr.set(.5,.5,0),Vi,o,Gi,s,r),Ec.set(0,0),Oo.set(1,0),Ac.set(1,1);let a=t.ray.intersectTriangle(br,Ps,Sr,!1,Cs);if(a===null&&(wr(Ps.set(-.5,.5,0),Vi,o,Gi,s,r),Oo.set(0,1),a=t.ray.intersectTriangle(br,Sr,Ps,!1,Cs),a===null))return;const l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||e.push({distance:l,point:Cs.clone(),uv:mn.getInterpolation(Cs,br,Ps,Sr,Ec,Oo,Ac,new q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wr(i,t,e,n,s,r){Wi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Rs.x=r*Wi.x-s*Wi.y,Rs.y=s*Wi.x+r*Wi.y):Rs.copy(Wi),i.copy(t),i.x+=Rs.x,i.y+=Rs.y,i.applyMatrix4(Xh)}class Yg extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,h=tn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new Jt,Rc=new Jt,Tr=[],Pc=new bi,$g=new Jt,Ls=new pt,Is=new gs;class us extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$g)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Pc.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),Is.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Rc.multiplyMatrices(n,Xi),Ls.matrixWorld=Rc,Ls.raycast(t,Tr);for(let o=0,a=Tr.length;o<a;o++){const l=Tr[o];l.instanceId=r,l.object=this,e.push(l)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yg(new Float32Array(s*this.count),s,this.count,tl,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qh extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new Jt,Ha=new ol,Er=new gs,Ar=new C;class Kg extends Ce{constructor(t=new _e,e=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;Lc.copy(s).invert(),Ha.copy(t.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const p=c.getX(m);Ar.fromBufferAttribute(u,p),Ic(Ar,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Ar.fromBufferAttribute(u,m),Ic(Ar,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ic(i,t,e,n,s,r,o){const a=Ha.distanceSqToPoint(i);if(a<e){const l=new C;Ha.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Zg extends Ve{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new q:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new Jt;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(De(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(De(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fl extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new q){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jg extends fl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Cr=new C,Bo=new dl,Ho=new dl,Go=new dl;class pl extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),c=Cr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Bo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,p),Ho.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,p),Go.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ho.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Go.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Bo.calc(l),Ho.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Jg(i,t){const e=1-i;return e*e*t}function Qg(i,t){return 2*(1-i)*i*t}function t_(i,t){return i*i*t}function Hs(i,t,e,n){return Jg(i,t)+Qg(i,e)+t_(i,n)}function e_(i,t){const e=1-i;return e*e*e*t}function n_(i,t){const e=1-i;return 3*e*e*i*t}function i_(i,t){return 3*(1-i)*i*i*t}function s_(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return e_(i,t)+n_(i,e)+i_(i,n)+s_(i,s)}class Yh extends Rn{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r_ extends Rn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $h extends Rn{constructor(t=new q,e=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends Rn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Rn{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ml extends Rn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y),Hs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new q){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Dc(a,l.x,c.x,h.x,u.x),Dc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this}}var $r=Object.freeze({__proto__:null,ArcCurve:jg,CatmullRomCurve3:pl,CubicBezierCurve:Yh,CubicBezierCurve3:r_,EllipseCurve:fl,LineCurve:$h,LineCurve3:Kh,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:ml,SplineCurve:jh});class o_ extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $r[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $r[s.type]().fromJSON(s))}return this}}class Ga extends o_{constructor(t){super(),this.type="Path",this.currentPoint=new q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $h(this.currentPoint.clone(),new q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Zh(this.currentPoint.clone(),new q(t,e),new q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Yh(this.currentPoint.clone(),new q(t,e),new q(n,s),new q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new jh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new fl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wi extends _e{constructor(t=[new q(0,-.5),new q(.5,0),new q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new q,d=new C,m=new C,_=new C;let p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let M=0;M<=e;M++){const v=n+M*h*s,y=Math.sin(v),R=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*R,o.push(u.x,u.y,u.z),f.x=M/e,f.y=E/(t.length-1),a.push(f.x,f.y);const T=l[3*E+0]*y,L=l[3*E+1],I=l[3*E+0]*R;c.push(T,L,I)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,R=y,E=y+t.length,T=y+t.length+1,L=y+1;r.push(R,E,L),r.push(T,L,E)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.points,t.segments,t.phiStart,t.phiLength)}}class hn extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const _=[],p=n/2;let g=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function M(){const y=new C,R=new C;let E=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const I=[],x=L/r,S=x*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,G=F*l+a,X=Math.sin(G),B=Math.cos(G);R.x=S*X,R.y=-x*n+p,R.z=S*B,u.push(R.x,R.y,R.z),y.set(X,T,B).normalize(),f.push(y.x,y.y,y.z),d.push(F,1-x),I.push(m++)}_.push(I)}for(let L=0;L<s;L++)for(let I=0;I<r;I++){const x=_[I][L],S=_[I+1][L],k=_[I+1][L+1],F=_[I][L+1];t>0&&(h.push(x,S,F),E+=3),e>0&&(h.push(S,k,F),E+=3)}c.addGroup(g,E,0),g+=E}function v(y){const R=m,E=new q,T=new C;let L=0;const I=y===!0?t:e,x=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*x,0),f.push(0,x,0),d.push(.5,.5),m++;const S=m;for(let k=0;k<=s;k++){const G=k/s*l+a,X=Math.cos(G),B=Math.sin(G);T.x=I*B,T.y=p*x,T.z=I*X,u.push(T.x,T.y,T.z),f.push(0,x,0),E.x=X*.5+.5,E.y=B*.5*x+.5,d.push(E.x,E.y),m++}for(let k=0;k<s;k++){const F=R+k,G=S+k;y===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}c.addGroup(g,L,y===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gl extends zt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new gl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _l extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new C,y=new C,R=new C;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],R),l(v,y,R,M)}function l(M,v,y,R){const E=R+1,T=[];for(let L=0;L<=E;L++){T[L]=[];const I=M.clone().lerp(y,L/E),x=v.clone().lerp(y,L/E),S=E-L;for(let k=0;k<=S;k++)k===0&&L===E?T[L][k]=I:T[L][k]=I.clone().lerp(x,k/S)}for(let L=0;L<E;L++)for(let I=0;I<2*(E-L)-1;I++){const x=Math.floor(I/2);I%2===0?(f(T[L][x+1]),f(T[L+1][x]),f(T[L][x])):(f(T[L][x+1]),f(T[L+1][x+1]),f(T[L+1][x]))}}function c(M){const v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const M=new C;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const y=p(M)/2/Math.PI+.5,R=g(M)/Math.PI+.5;o.push(y,1-R)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],R=o[M+4],E=Math.max(v,y,R),T=Math.min(v,y,R);E>.9&&T<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){const M=new C,v=new C,y=new C,R=new C,E=new q,T=new q,L=new q;for(let I=0,x=0;I<r.length;I+=9,x+=6){M.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),E.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),R.copy(M).add(v).add(y).divideScalar(3);const S=p(R);_(E,x+0,M,S),_(T,x+2,v,S),_(L,x+4,y,S)}}function _(M,v,y,R){R<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.vertices,t.indices,t.radius,t.details)}}class Ti extends Ga{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ga().fromJSON(s))}return this}}const a_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=f_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ys(r,o,e,a,l,d,0),o}};function Jh(i,t,e,n,s){let r,o;if(s===S_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Uc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Uc(r,i[r],i[r+1],o);return o&&Qr(o,o.next)&&(Ks(o),o=o.next),o}function Mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qr(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&__(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?c_(i,n,s,r):l_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ks(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=h_(Mi(i),t,e),Ys(i,t,e,n,s,r,2)):o===2&&u_(i,t,e,n,s,r):Ys(Mi(i),t,e,n,s,r,1);break}}}function l_(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&$i(s,a,r,l,o,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function c_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=Va(d,m,t,e,n),M=Va(_,p,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=g&&y&&y.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&$i(a,h,l,u,c,f,v.x,v.y)&&Se(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&$i(a,h,l,u,c,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&$i(a,h,l,u,c,f,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&$i(a,h,l,u,c,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function h_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Qr(s,r)&&Qh(s,n,n.next,r)&&$s(s,r)&&$s(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return Mi(n)}function u_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&y_(o,a)){let l=tu(o,a);o=Mi(o,o.next),l=Mi(l,l.next),Ys(o,t,e,n,s,r,0),Ys(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function f_(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Jh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(v_(c));for(s.sort(d_),r=0;r<s.length;r++)e=p_(s[r],e);return e}function d_(i,t){return i.x-t.x}function p_(i,t){const e=m_(i,t);if(!e)return t;const n=tu(e,i);return Mi(n,n.next),Mi(e,e.next)}function m_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$i(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),$s(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&g_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function g_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function __(i,t,e,n){let s=i;do s.z===0&&(s.z=Va(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,x_(s)}function x_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Va(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function v_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $i(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function y_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!M_(i,t)&&($s(i,t)&&$s(t,i)&&b_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Qr(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qr(i,t){return i.x===t.x&&i.y===t.y}function Qh(i,t,e,n){const s=Pr(Se(i,t,e)),r=Pr(Se(i,t,n)),o=Pr(Se(e,n,i)),a=Pr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Rr(i,e,t)||r===0&&Rr(i,n,t)||o===0&&Rr(e,i,n)||a===0&&Rr(e,t,n))}function Rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pr(i){return i>0?1:i<0?-1:0}function M_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function b_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tu(i,t){const e=new Wa(i.i,i.x,i.y),n=new Wa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uc(i,t,e,n){const s=new Wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ii{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ii.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Nc(t),kc(n,t);let o=t.length;e.forEach(Nc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,kc(n,e[l]);const a=a_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class to extends _e{constructor(t=new Ti([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:w_;let v,y=!1,R,E,T,L;g&&(v=g.getSpacedPoints(h),y=!0,f=!1,R=g.computeFrenetFrames(h,!1),E=new C,T=new C,L=new C),f||(p=0,d=0,m=0,_=0);const I=a.extractPoints(c);let x=I.shape;const S=I.holes;if(!ii.isClockWise(x)){x=x.reverse();for(let J=0,P=S.length;J<P;J++){const ht=S[J];ii.isClockWise(ht)&&(S[J]=ht.reverse())}}const F=ii.triangulateShape(x,S),G=x;for(let J=0,P=S.length;J<P;J++){const ht=S[J];x=x.concat(ht)}function X(J,P,ht){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(P,ht)}const B=x.length,j=F.length;function V(J,P,ht){let at,it,ut;const Dt=J.x-P.x,Mt=J.y-P.y,A=ht.x-J.x,b=ht.y-J.y,z=Dt*Dt+Mt*Mt,$=Dt*b-Mt*A;if(Math.abs($)>Number.EPSILON){const Q=Math.sqrt(z),K=Math.sqrt(A*A+b*b),Pt=P.x-Mt/Q,ft=P.y+Dt/Q,wt=ht.x-b/K,ee=ht.y+A/K,rt=((wt-Pt)*b-(ee-ft)*A)/(Dt*b-Mt*A);at=Pt+Dt*rt-J.x,it=ft+Mt*rt-J.y;const Tt=at*at+it*it;if(Tt<=2)return new q(at,it);ut=Math.sqrt(Tt/2)}else{let Q=!1;Dt>Number.EPSILON?A>Number.EPSILON&&(Q=!0):Dt<-Number.EPSILON?A<-Number.EPSILON&&(Q=!0):Math.sign(Mt)===Math.sign(b)&&(Q=!0),Q?(at=-Mt,it=Dt,ut=Math.sqrt(z)):(at=Dt,it=Mt,ut=Math.sqrt(z/2))}return new q(at/ut,it/ut)}const gt=[];for(let J=0,P=G.length,ht=P-1,at=J+1;J<P;J++,ht++,at++)ht===P&&(ht=0),at===P&&(at=0),gt[J]=V(G[J],G[ht],G[at]);const _t=[];let xt,Zt=gt.concat();for(let J=0,P=S.length;J<P;J++){const ht=S[J];xt=[];for(let at=0,it=ht.length,ut=it-1,Dt=at+1;at<it;at++,ut++,Dt++)ut===it&&(ut=0),Dt===it&&(Dt=0),xt[at]=V(ht[at],ht[ut],ht[Dt]);_t.push(xt),Zt=Zt.concat(xt)}for(let J=0;J<p;J++){const P=J/p,ht=d*Math.cos(P*Math.PI/2),at=m*Math.sin(P*Math.PI/2)+_;for(let it=0,ut=G.length;it<ut;it++){const Dt=X(G[it],gt[it],at);mt(Dt.x,Dt.y,-ht)}for(let it=0,ut=S.length;it<ut;it++){const Dt=S[it];xt=_t[it];for(let Mt=0,A=Dt.length;Mt<A;Mt++){const b=X(Dt[Mt],xt[Mt],at);mt(b.x,b.y,-ht)}}}const Qt=m+_;for(let J=0;J<B;J++){const P=f?X(x[J],Zt[J],Qt):x[J];y?(T.copy(R.normals[0]).multiplyScalar(P.x),E.copy(R.binormals[0]).multiplyScalar(P.y),L.copy(v[0]).add(T).add(E),mt(L.x,L.y,L.z)):mt(P.x,P.y,0)}for(let J=1;J<=h;J++)for(let P=0;P<B;P++){const ht=f?X(x[P],Zt[P],Qt):x[P];y?(T.copy(R.normals[J]).multiplyScalar(ht.x),E.copy(R.binormals[J]).multiplyScalar(ht.y),L.copy(v[J]).add(T).add(E),mt(L.x,L.y,L.z)):mt(ht.x,ht.y,u/h*J)}for(let J=p-1;J>=0;J--){const P=J/p,ht=d*Math.cos(P*Math.PI/2),at=m*Math.sin(P*Math.PI/2)+_;for(let it=0,ut=G.length;it<ut;it++){const Dt=X(G[it],gt[it],at);mt(Dt.x,Dt.y,u+ht)}for(let it=0,ut=S.length;it<ut;it++){const Dt=S[it];xt=_t[it];for(let Mt=0,A=Dt.length;Mt<A;Mt++){const b=X(Dt[Mt],xt[Mt],at);y?mt(b.x,b.y+v[h-1].y,v[h-1].x+ht):mt(b.x,b.y,u+ht)}}}Y(),st();function Y(){const J=s.length/3;if(f){let P=0,ht=B*P;for(let at=0;at<j;at++){const it=F[at];Bt(it[2]+ht,it[1]+ht,it[0]+ht)}P=h+p*2,ht=B*P;for(let at=0;at<j;at++){const it=F[at];Bt(it[0]+ht,it[1]+ht,it[2]+ht)}}else{for(let P=0;P<j;P++){const ht=F[P];Bt(ht[2],ht[1],ht[0])}for(let P=0;P<j;P++){const ht=F[P];Bt(ht[0]+B*h,ht[1]+B*h,ht[2]+B*h)}}n.addGroup(J,s.length/3-J,0)}function st(){const J=s.length/3;let P=0;Et(G,P),P+=G.length;for(let ht=0,at=S.length;ht<at;ht++){const it=S[ht];Et(it,P),P+=it.length}n.addGroup(J,s.length/3-J,1)}function Et(J,P){let ht=J.length;for(;--ht>=0;){const at=ht;let it=ht-1;it<0&&(it=J.length-1);for(let ut=0,Dt=h+p*2;ut<Dt;ut++){const Mt=B*ut,A=B*(ut+1),b=P+at+Mt,z=P+it+Mt,$=P+it+A,Q=P+at+A;Ot(b,z,$,Q)}}}function mt(J,P,ht){l.push(J),l.push(P),l.push(ht)}function Bt(J,P,ht){Xt(J),Xt(P),Xt(ht);const at=s.length/3,it=M.generateTopUV(n,s,at-3,at-2,at-1);jt(it[0]),jt(it[1]),jt(it[2])}function Ot(J,P,ht,at){Xt(J),Xt(P),Xt(at),Xt(P),Xt(ht),Xt(at);const it=s.length/3,ut=M.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);jt(ut[0]),jt(ut[1]),jt(ut[3]),jt(ut[1]),jt(ut[2]),jt(ut[3])}function Xt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function jt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return T_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $r[s.type]().fromJSON(s)),new to(n,t.options)}}const w_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new q(r,o),new q(a,l),new q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new q(o,1-l),new q(c,1-u),new q(f,1-m),new q(_,1-g)]:[new q(a,1-l),new q(h,1-u),new q(d,1-m),new q(p,1-g)]}};function T_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yn extends _l{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yn(t.radius,t.detail)}}class xl extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new C,m=new q;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const g=r+p/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let g=0;g<n;g++){const M=g+p,v=M,y=M+n+1,R=M+n+2,E=M+1;a.push(v,y,E),a.push(y,R,E)}}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Js extends _e{constructor(t=new Ti([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;ii.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const M=m[p];ii.isClockWise(M)===!0&&(m[p]=M.reverse())}const _=ii.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const M=m[p];d=d.concat(M)}for(let p=0,g=d.length;p<g;p++){const M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=_.length;p<g;p++){const M=_[p],v=M[0]+u,y=M[1]+u,R=M[2]+u;n.push(v,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return E_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Js(n,t.curveSegments)}}function E_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class de extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const M=[],v=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(E+y,1-v),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const v=h[g][M+1],y=h[g][M],R=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&d.push(v,y,E),(g!==n-1||l<Math.PI)&&d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cn extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const _=m/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const _=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(_,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fs extends _e{constructor(t=new ml(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new q;let h=new C;const u=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function _(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),M(),g()}function p(v){h=t.getPointAt(v/e,h);const y=o.normals[v],R=o.binormals[v];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,L=Math.sin(T),I=-Math.cos(T);l.x=I*y.x+L*R.x,l.y=I*y.y+L*R.y,l.z=I*y.z+L*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const R=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),T=(s+1)*v+y,L=(s+1)*(v-1)+y;m.push(R,E,L),m.push(E,T,L)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fs(new $r[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class A_ extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kt extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ce extends kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class eo extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class C_ extends eo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vo=new Jt,Fc=new C,zc=new C;class vl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class R_ extends vl{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Oc extends eo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new R_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Bc=new Jt,Ds=new C,Wo=new C;class P_ extends vl{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),Wo.copy(n.position),Wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wo),n.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc)}}class ds extends eo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new P_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class L_ extends vl{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I_ extends eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new L_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class D_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hc(){return performance.now()}const Gc=new Jt;class U_{constructor(t,e,n=0,s=1/0){this.ray=new ol(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,n=[]){return Xa(t,this,n,e),n.sort(Vc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xa(t[s],this,n,e);return n.sort(Vc),n}}function Vc(i,t){return i.distance-t.distance}function Xa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Xa(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const eu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const N_=new cl(-1,1,1,-1,0,1);class k_ extends _e{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const F_=new k_;class yl{constructor(t){this._mesh=new pt(F_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class z_ extends xs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qs.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wc extends xs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class O_ extends xs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class B_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new q);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new z_(eu),this.copyPass.material.blending=Gn,this.clock=new D_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wc!==void 0&&(o instanceof Wc?n=!0:o instanceof O_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class H_ extends xs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ct}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const G_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ps extends xs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new q(t.x,t.y):new q(256,256),this.clearColor=new ct(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new wn(r,o,{type:Vn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new wn(r,o,{type:Vn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=G_;this.highPassUniforms=qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=eu;this.copyUniforms=qs.clone(h.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ns,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ct,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new yl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new q(.5,.5)},direction:{value:new q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ps.BlurDirectionX=new q(1,0);ps.BlurDirectionY=new q(0,1);const V_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class W_ extends xs{constructor(){super();const t=V_;this.uniforms=qs.clone(t.uniforms),this.material=new A_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new yl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Us(i,t){return new Te({color:new ct(i).multiplyScalar(t),side:te})}function X_(){const i=new Wh;i.background=new ct(460555);const t=new de(10,32,16),e=[],n=t.attributes.position;for(let l=0;l<n.count;l++){const c=n.getY(l)/10,h=Math.max(0,1-Math.abs(c+.05)*3.2);e.push(.035+h*.1,.035+h*.075,.045+h*.05)}t.setAttribute("color",new qt(e,3)),i.add(new pt(t,new Te({vertexColors:!0,side:Oe})));const s=new pt(new Ft(1.6,.08,.14),Us(15398143,5));s.position.set(0,2.1,-.1),i.add(s);const r=new pt(new Re(3,2.2),Us(6957604,.22));r.rotation.x=Math.PI/2,r.position.y=2.3,i.add(r);for(let l=0;l<16;l++){const c=new pt(new de(.05,8,6),Us(16761978,6)),h=l/16*Math.PI*2;c.position.set(Math.cos(h)*1.6,2.05+Math.sin(l)*.05,Math.sin(h)*1.3),i.add(c)}const o=[[16726688,-2.5,2.2,-4],[3789055,2.8,2.6,-4.5],[16761402,.4,3,-5]];for(const[l,c,h,u]of o){const f=new pt(new Re(1.4,.4),Us(l,.5));f.position.set(c,h,u),f.lookAt(0,1,0),i.add(f)}const a=new pt(new Re(1,2),Us(16767392,1.6));return a.position.set(1.8,1.1,3.5),a.lookAt(0,1,0),i.add(a),i}function q_(i){const t=new za(i),e=t.fromScene(X_(),.035);return t.dispose(),e.texture}const lt={y:.9,x0:-.95,x1:.95,z0:-.52,z1:.4},Z={x:0,z:0,R:.24,rimR:.18,bottomY:.975};Z.depth=Z.R-Math.sqrt(Z.R*Z.R-Z.rimR*Z.rimR);Z.cy=Z.bottomY+Z.R;Z.rimY=Z.bottomY+Z.depth;const Ct={x:0,z:0,w:.56,d:.36,topY:lt.y+.045},Nt={x:0,z:0,cols:4,rows:3,pitch:.05,wellR:.019,topY:lt.y+.06,w:.23,d:.18},ve={x:-.53,z:.07,r:.158,h:.045};ve.topY=lt.y+ve.h;const nt={x:.53,z:.07,r:.135,wellR:.095,lip:.018};nt.wellY=lt.y+.012;const on={z:.265,r:.052,spacing:.118,portrait:{rows:[.235,.345],spacing:.112}},nu={oil:{x:-.29,z:-.265,r:.06},sauce:{x:.29,z:-.265,r:.07}},pn={x:.68,z:-.25},On={z0:-.51,z1:-.37,y1:1.24},Y_={board:{target:[ve.x,ve.topY,ve.z+.01],w:.42,h:.4,pitch:1.05,yaw:.12},wok:{target:[Z.x,Z.bottomY,.075],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[Z.x,Z.bottomY,.13],w:.52,h:.78,pitch:1.12}},teppan:{target:[Ct.x,Ct.topY,.08],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[Ct.x,Ct.topY,.13],w:.62,h:.8,pitch:1.12}},takopan:{target:[Nt.x,Nt.topY,.07],w:.7,h:.42,pitch:1.08,yaw:0,portrait:{target:[Nt.x,Nt.topY,.1],w:.4,h:.62,pitch:1.18}},plate:{target:[nt.x,nt.wellY+.02,nt.z],w:.36,h:.34,pitch:.95,yaw:-.18},beauty:{target:[nt.x+.1,nt.wellY+.03,nt.z],w:.46,h:.26,pitch:.42,yaw:0,portrait:{target:[nt.x,nt.wellY-.1,nt.z+.1],w:.36,h:.62,pitch:.62}},stall:{target:[0,lt.y+.35,0],w:3,h:2.2,pitch:.16,yaw:Math.PI,portrait:{w:2.1,h:3.2,target:[0,lt.y+.55,0]}}};function $_(i,{lowPower:t=!1}={}){const e=new Xg({canvas:i,antialias:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,t?1.25:2);e.setPixelRatio(n),e.outputColorSpace=ln,e.toneMapping=Za,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=hh;const s=new Wh;s.background=new ct(657936),s.fog=new ul(1446426,5,14),s.environment=q_(e),s.environmentIntensity=.7;const r=new Qe(42,1,.02,40),o=new C_(9082040,2759186,.35);s.add(o);const a=new I_(15660287,1.5);a.position.set(.15,2.4,.35),a.target.position.set(0,lt.y,0),a.castShadow=!0,a.shadow.mapSize.set(t?1024:2048,t?1024:2048);const l=a.shadow.camera;l.left=-1.1,l.right=1.1,l.top=.8,l.bottom=-.8,l.near=.5,l.far=3.5,a.shadow.bias=-4e-4,a.shadow.normalBias=.01,a.shadow.radius=3,s.add(a,a.target);const c=new Oc(16762250,4.5,4,.7,.6,1.6);c.position.set(-.6,1.85,.75),c.target.position.set(.1,lt.y,.05),s.add(c,c.target);const h=new ds(16738970,.18,5,1.6);h.position.set(-1.4,1.5,-1.3);const u=new ds(5949695,.2,5,1.6);u.position.set(1.5,1.4,-1.2),s.add(h,u);const f=new Oc(16769208,0,1.6,.5,.7,1.5);f.position.set(nt.x-.35,lt.y+.55,nt.z+.45),f.target.position.set(nt.x,nt.wellY,nt.z),s.add(f,f.target);const d=new B_(e);d.addPass(new H_(s,r));const m=new ps(new q(256,256),.28,.3,1.5);t||d.addPass(m),d.addPass(new W_);const _={renderer:e,scene:s,camera:r,composer:d,bloom:m,lights:{hemi:o,tube:a,key:c,rimA:h,rimB:u,plateKey:f},width:1,height:1,resize(p,g){_.width=p,_.height=g,e.setSize(p,g,!1),d.setSize(p,g),d.setPixelRatio(e.getPixelRatio()),m.setSize(Math.max(1,p/2),Math.max(1,g/2)),r.aspect=p/g,r.updateProjectionMatrix()},render(){d.render()}};return _}function K_(i,t,e,n=1){const s=i.aspect<1,r=s&&t.portrait?{...t,...t.portrait}:t,o=s?54:40;i.fov!==o&&(i.fov=o,i.updateProjectionMatrix());const a=If.degToRad(o),l=2*Math.atan(Math.tan(a/2)*i.aspect),c=Math.max(r.w*n/2/Math.tan(l/2),r.h*n/2/Math.tan(a/2)),[h,u,f]=r.target,d=Math.cos(r.pitch),m=Math.sin(r.pitch);return e.pos.set(h+Math.sin(r.yaw)*d*c,u+m*c,f+Math.cos(r.yaw)*d*c),e.look.set(h,u,f),e}const Ns={khaopad:{id:"khaopad",name:"Khao Pad",local:"ข้าวผัด",cuisine:"thai",blurb:"Thai fried rice: garlic, egg and jasmine rice, seasoned with fish sauce.",weights:{rice:1.5,egg:1,garlic:.7,scallion:.5},garnish:{cucumber:[2,6],lime:[1,2],freshScallion:[2,12]},plate:{leaf:!1,rice:!1,mould:!0},bowls:["garlic","egg","rice","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic"],say:"Garlic in",hint:"Tap to tip it in"},{verb:"cook",focus:["garlic"],minTime:1.5,say:"Fry it golden",hint:"Seconds only. Golden, not brown"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"add",items:["rice"],say:"Rice in, straight away",hint:"Tap to tip it in, before the egg sets"},{verb:"pour",liquid:"fishSauce",say:"Season with fish sauce",hint:"Hold to pour round the edge. Let go in the green"},{verb:"cook",focus:["rice","egg"],minTime:3,say:"Toss until every grain is hot",hint:"Keep it moving. Toss for wok hei"},{verb:"add",items:["scallion"],say:"Spring onions",hint:"Tap to tip it in"},{verb:"cook",focus:["scallion"],minTime:1,say:"One quick toss",hint:"Keep them bright green"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["cucumber","lime","freshScallion"],say:"Garnish",hint:"Cucumber slices, a lime wedge, spring onion"}]},krapao:{id:"krapao",name:"Pad Kra Pao",local:"ผัดกะเพรา",cuisine:"thai",blurb:"Chicken, holy basil and fiery chilli over rice, with a crisp fried egg.",weights:{mince:1.5,basil:1,garlic:.6,birdChilli:.5},garnish:{friedEgg:[1,1],cucumber:[0,5]},plate:{leaf:!1,rice:!0},bowls:["garlic","birdChilli","mince","basil"],steps:[{verb:"chop",item:"birdChilli",cuts:5,say:"Chop the bird’s eye chillies",hint:"Swipe down anywhere to chop. Careful, they bite"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","birdChilli"],say:"Garlic and chillies",hint:"Tap twice to tip both in"},{verb:"cook",focus:["garlic","birdChilli"],minTime:1.5,say:"Fry until fragrant",hint:"A few seconds. The smoke will make you cough"},{verb:"add",items:["mince"],say:"Chicken in",hint:"Tap to tip it in"},{verb:"cook",focus:["mince"],minTime:3,say:"Cook until it is no longer pink",hint:"Break it up. Keep it moving"},{verb:"pour",liquid:"krapao",say:"Pour the sauce",hint:"Oyster, soy and fish sauce. Let go in the green"},{verb:"add",items:["basil"],say:"Now the holy basil",hint:"Tap to tip it in"},{verb:"cook",focus:["basil"],minTime:1,say:"Toss until just wilted",hint:"Flame down. It only needs a moment"},{verb:"plate",say:"Spoon it over the rice",hint:"Tap anywhere"},{verb:"garnish",items:["friedEgg","cucumber"],say:"Top with a fried egg",hint:"Place the khai dao on top. Cucumber on the side"}]},padseeew:{id:"padseeew",name:"Pad See Ew",local:"ผัดซีอิ๊ว",cuisine:"thai",blurb:"Wide rice noodles, chicken and Chinese broccoli, charred in dark soy.",weights:{wideNoodles:1.5,chickenSlice:1.2,gailan:.8,egg:.8,garlic:.5},garnish:{pepper:[4,40],chilli:[0,30]},plate:{leaf:!1,rice:!1},bowls:["garlic","chickenSlice","egg","gailan","wideNoodles"],steps:[{verb:"chop",item:"gailan",cuts:5,say:"Cut the Chinese broccoli",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","chickenSlice"],say:"Garlic and chicken",hint:"Tap twice to tip both in"},{verb:"cook",focus:["chickenSlice","garlic"],minTime:3,say:"Cook the chicken through",hint:"Keep it moving"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"cook",focus:["egg"],minTime:1.5,say:"Let it half set, then scramble",hint:"A moment still, then stir"},{verb:"add",items:["gailan","wideNoodles"],say:"Broccoli and noodles",hint:"Tap twice to tip both in"},{verb:"pour",liquid:"darkSoy",say:"Pour the dark soy",hint:"It stains the noodles. Let go in the green"},{verb:"cook",focus:["wideNoodles","gailan"],minTime:4,char:!0,say:"Spread them out and let them char",hint:"Leave them a moment, then toss. Repeat"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["pepper","chilli"],say:"Season",hint:"A dusting of white pepper. Chilli if you dare"}]},yakisoba:{id:"yakisoba",name:"Yakisoba",local:"焼きそば",cuisine:"japan",cooker:"teppan",blurb:"Pork, cabbage and noodles fried on the teppan in a sweet, tangy sauce.",weights:{sobaNoodles:1.5,porkBelly:1.1,cabbage:.9,carrot:.5},garnish:{aonori:[10,60],beniShoga:[2,10],katsuobushi:[3,16]},plate:{style:"glaze"},bowls:["porkBelly","cabbage","carrot","sobaNoodles"],steps:[{verb:"chop",item:"cabbage",cuts:5,say:"Shred the cabbage",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Heat the teppan",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["porkBelly"],say:"Pork belly on the steel",hint:"Tap to lay it on"},{verb:"cook",focus:["porkBelly"],minTime:2,say:"Sear the pork",hint:"Drag anywhere to push it round. Tap FLIP to turn it"},{verb:"add",items:["cabbage","carrot"],say:"Cabbage and carrot",hint:"Tap twice to tip both on"},{verb:"cook",focus:["cabbage","carrot"],minTime:2,say:"Fry until just soft",hint:"Tap FLIP to turn it all over"},{verb:"add",items:["sobaNoodles"],say:"Now the noodles",hint:"Tap to tip them on"},{verb:"pour",liquid:"yakisobaSauce",say:"Yakisoba sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["sobaNoodles"],minTime:3,say:"Flip until every noodle is glossy",hint:"Tap FLIP. The hotter the steel, the better the sear"},{verb:"plate",say:"Heap it on the plate",hint:"Tap anywhere"},{verb:"garnish",items:["aonori","beniShoga","katsuobushi"],say:"Toppings",hint:"Aonori, red ginger, and bonito flakes that dance"}]},okonomiyaki:{id:"okonomiyaki",name:"Okonomiyaki",local:"お好み焼き",cuisine:"japan",cooker:"teppan",cake:!0,blurb:"The Osaka pancake: cabbage batter and pork belly, flipped twice, sauced and dancing with bonito.",weights:{okonomiBase:2,porkBelly:1},garnish:{aonori:[10,60],katsuobushi:[4,20],beniShoga:[0,8]},plate:{style:"flat"},bowls:["porkBelly"],steps:[{verb:"chop",item:"cabbage",cuts:5,say:"Shred the cabbage",hint:"Swipe down anywhere to chop"},{verb:"mix",strokes:[8,14],say:"Mix the batter",hint:"Swipe back and forth anywhere. Do not overmix"},{verb:"heat",liquid:"oil",say:"Heat the teppan",hint:"Push the flame up, then hold to pour the oil"},{verb:"pancake",target:[.55,.8],say:"Pour the batter",hint:"Hold to pour a round. Let go in the green"},{verb:"top",items:["porkBelly"],say:"Lay the pork on top",hint:"Tap anywhere"},{verb:"flip",say:"Cook until golden underneath",hint:"When the bar is green, tap FLIP"},{verb:"flip",say:"Crisp the pork side",hint:"Golden again? FLIP it back"},{verb:"plate",say:"Onto the plate",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.6,.85],say:"Brush on the sauce",hint:"Hold to brush. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.55,.85],say:"Zigzag the mayo",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["aonori","katsuobushi","beniShoga"],say:"Aonori and bonito",hint:"Watch the bonito flakes dance in the heat"}]},takoyaki:{id:"takoyaki",name:"Takoyaki",local:"たこ焼き",cuisine:"japan",cooker:"takopan",blurb:"Osaka’s octopus balls: turned a quarter at a time in the iron until round and golden.",weights:{takoBall:2},garnish:{aonori:[10,60],katsuobushi:[4,20]},plate:{style:"fune"},bowls:["octopus","tenkasu","beniShoga","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Heat the takoyaki pan",hint:"Push the flame up, then hold to oil the wells"},{verb:"fill",target:[.85,1.05],say:"Fill the wells",hint:"Hold to pour. A little over the top is right"},{verb:"drop",items:["octopus","tenkasu","beniShoga","scallion"],say:"Octopus in every ball",hint:"Tap anywhere, then again for each topping"},{verb:"turn",say:"Turn them a quarter at a time",hint:"When the bar is green, tap TURN. Keep going till golden all round"},{verb:"plate",say:"Eight into the boat",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.6,.85],say:"Takoyaki sauce",hint:"Hold to brush. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.5,.85],say:"Zigzag the mayo",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["aonori","katsuobushi"],say:"Aonori and bonito",hint:"Watch the bonito flakes dance"}]},padthai:{id:"padthai",name:"Pad Thai",local:"ผัดไทย",cuisine:"thai",blurb:"Rice noodles, prawns and egg, tossed hard in tamarind over a roaring flame.",weights:{prawn:1.3,noodles:1.4,egg:.9,tofu:.8,garlic:.6,shallot:.5,sprouts:.7,chives:.5},garnish:{peanuts:[12,70],chilli:[4,40],lime:[1,2],freshSprouts:[3,16],freshChives:[2,14]},plate:{leaf:!0,rice:!1},bowls:["garlic","shallot","tofu","prawn","egg","noodles","sprouts","chives"],steps:[{verb:"chop",item:"chives",cuts:6,say:"Chop the garlic chives",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","shallot","tofu"],say:"Garlic, shallot and tofu",hint:"Tap to tip each bowl in"},{verb:"cook",focus:["garlic","shallot","tofu"],minTime:3,say:"Fry until golden",hint:"Drag anywhere to stir. Tap TOSS. Do not let it sit"},{verb:"add",items:["prawn"],say:"In with the prawns",hint:"Tap to tip it in"},{verb:"cook",focus:["prawn"],minTime:3,say:"Cook the prawns until pink",hint:"Grey means raw. Toss them"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"cook",focus:["egg"],minTime:2,say:"Scramble the egg",hint:"Stir it through before it sets flat"},{verb:"add",items:["noodles"],say:"Now the noodles",hint:"Tap to tip it in"},{verb:"pour",liquid:"tamarind",say:"Pour the tamarind sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["noodles"],minTime:4,say:"Toss until the noodles drink it up",hint:"Keep them moving. Toss for wok hei"},{verb:"add",items:["sprouts","chives"],say:"Bean sprouts and chives",hint:"Tap twice to tip both in"},{verb:"cook",focus:["sprouts","chives"],minTime:1.5,say:"A quick toss, keep them crunchy",hint:"Seconds, not minutes"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["peanuts","chilli","lime","freshSprouts","freshChives"],say:"Garnish",hint:"Pick a garnish, then drag or tap on the plate"}]}},qi=[{id:"thai",name:"Thailand",place:"Bangkok night market",stall:"bangkok",judge:"Auntie Noi",hei:"Wok hei",heiGood:"Proper wok hei. Smoky, like Yaowarat at midnight.",heiNone:"Toss it! The flame is what makes it taste of the street.",dishes:["khaopad","krapao","padseeew","padthai"],soon:["Tom Yum Goong","Green Curry","Som Tam","Mango Sticky Rice"]},{id:"japan",name:"Japan",place:"Osaka yatai",stall:"osaka",judge:"Kenji-san",hei:"Teppan sear",heiGood:"That is a proper sear. You can smell it from Dotonbori.",heiNone:"Turn it more on the hot steel. It needs the sear.",dishes:["yakisoba","okonomiyaki","takoyaki"],soon:["Gyoza","Ramen","Karaage"]},{id:"italy",name:"Italy",place:"Naples",soon:["Carbonara","Margherita"]},{id:"mexico",name:"Mexico",place:"Mexico City",soon:["Tacos al Pastor"]},{id:"india",name:"India",place:"Mumbai",soon:["Pav Bhaji","Butter Chicken"]}],an={garlic:{name:"Garlic",shape:"bit",count:30,r:.0036,mass:.2,raw:15919826,cooked:14724184,over:9720350,cookTime:5.5,band:[.8,1.25],burnAt:1.7,gloss:.55,rough:.45},shallot:{name:"Shallot",shape:"ring",count:16,r:.0075,mass:.25,raw:14197428,cooked:13602124,over:8143390,cookTime:5.5,band:[.8,1.3],burnAt:1.8,gloss:.6,rough:.4},tofu:{name:"Tofu",shape:"cube",count:12,r:.0105,mass:1,raw:15852736,cooked:14457662,over:9325596,cookTime:5.5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.55},prawn:{name:"Prawns",shape:"prawn",count:7,r:.019,mass:2,raw:11778230,cooked:16298636,over:14913892,cookTime:7,band:[.9,1.25],burnAt:1.9,gloss:.8,rough:.32,shrink:.86},egg:{name:"Egg",shape:"curd",count:14,r:.0125,mass:.8,raw:15656644,cooked:16773576,over:13605458,cookTime:5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.5},noodles:{name:"Rice noodles",shape:"strand",strands:30,points:11,spacing:.019,width:.0095,r:.0062,mass:.35,raw:15920352,cooked:14260058,over:9062946,cookTime:9,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.55,rough:.38},sprouts:{name:"Bean sprouts",shape:"sprout",count:16,r:.0095,mass:.3,raw:16118494,cooked:14470030,over:9072704,cookTime:3.5,band:[.2,.7],burnAt:1.6,gloss:.45,rough:.4},chives:{name:"Garlic chives",shape:"segment",count:14,r:.0085,mass:.2,raw:4164650,cooked:3501856,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.6,bunch:{style:"blade",colour:4164650}},scallion:{name:"Spring onion",shape:"segment",count:14,r:.0085,mass:.2,raw:6466878,cooked:4950572,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.5,bunch:{style:"blade",colour:6466878,base:15659740}},rice:{name:"Jasmine rice",shape:"clump",count:100,r:.0075,mass:.4,raw:16184300,cooked:15851442,over:11565626,cookTime:6,band:[.85,1.4],burnAt:2.2,gloss:.35,rough:.5,coatTint:.3},birdChilli:{name:"Bird’s eye chillies",shape:"ring",count:16,r:.0042,mass:.1,raw:14165532,cooked:11803666,over:5903372,cookTime:4,band:[.5,1.3],burnAt:1.9,gloss:.7,rough:.35,bunch:{style:"pods",colour:14165532,base:4160038}},mince:{name:"Chicken mince",shape:"mince",count:40,r:.0078,mass:.6,raw:15511204,cooked:15391938,over:11039804,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.7},basil:{name:"Holy basil",shape:"leaf",count:22,r:.0105,mass:.1,raw:4165424,cooked:2842142,over:1979154,cookTime:2.5,band:[.3,.9],burnAt:1.5,gloss:.55,rough:.4,coatTint:.25,sheen:.7},chickenSlice:{name:"Chicken",shape:"slice",count:14,r:.0115,mass:1,raw:15775404,cooked:15851974,over:11565632,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.55},gailan:{name:"Chinese broccoli",shape:"gailan",count:12,r:.013,mass:.5,raw:8370266,cooked:5085750,over:3362846,cookTime:3.5,band:[.5,1.15],burnAt:1.8,gloss:.55,rough:.4,coatTint:.25,sheen:.4,bunch:{style:"stalk",colour:8370266,base:3111466}},wideNoodles:{name:"Wide rice noodles",shape:"strand",strands:16,points:8,spacing:.022,width:.021,r:.0095,mass:.5,raw:16117990,cooked:9064488,over:4858898,cookTime:7,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.6,rough:.35,charWant:[.08,.4]},porkBelly:{name:"Pork belly",shape:"belly",count:10,r:.013,mass:.8,raw:15910076,cooked:15189146,over:10115626,cookTime:5.5,band:[.9,1.45],burnAt:2.1,gloss:.6,rough:.4,coatTint:.45},cabbage:{name:"Cabbage",shape:"cabbage",count:18,r:.012,mass:.3,raw:14478532,cooked:13228442,over:9079370,cookTime:4,band:[.5,1.15],burnAt:1.8,gloss:.5,rough:.4,coatTint:.4,bunch:{style:"head",colour:13953208,base:10273914}},carrot:{name:"Carrot",shape:"baton",count:14,r:.0075,mass:.2,raw:15764010,cooked:15235114,over:9058836,cookTime:4,band:[.5,1.2],burnAt:1.8,gloss:.5,rough:.4,coatTint:.25},sobaNoodles:{name:"Yakisoba noodles",shape:"strand",strands:32,points:11,spacing:.018,width:.0042,r:.0052,mass:.3,raw:15257478,cooked:9062946,over:4858896,cookTime:7,band:[.85,1.35],burnAt:2.2,needsSauce:!0,gloss:.7,rough:.35},okonomiBase:{name:"Okonomiyaki",shape:"none",virtual:!0,r:.08,mass:10,count:0,raw:15919304,cooked:13666876,over:5911064,cookTime:9,band:[.85,1.35],burnAt:1.75},takoBall:{name:"Takoyaki",shape:"none",virtual:!0,r:.02,mass:2,count:0,raw:16050896,cooked:14258750,over:9062942,cookTime:5.5,band:[.8,1.4],burnAt:1.8},octopus:{name:"Octopus",shape:"octo",topping:!0,count:12,r:.0065,mass:.3,raw:16777215,cooked:16777215,over:16777215,gloss:.8,rough:.35},tenkasu:{name:"Tenkasu",shape:"bit",topping:!0,count:30,r:.004,mass:.05,raw:15782538,cooked:15782538,over:15782538,gloss:.3,rough:.6},peanuts:{name:"Crushed peanuts",shape:"peanut",count:1,r:.0042,mass:.1,garnish:!0,raw:13212252,cooked:13212252,over:13212252,gloss:.25,rough:.6},chilli:{name:"Chilli flakes",shape:"flake",count:1,r:.0026,mass:.05,garnish:!0,raw:11805210,cooked:11805210,over:11805210,gloss:.2,rough:.6},lime:{name:"Lime wedge",shape:"wedge",count:1,r:.017,colR:.008,mass:1.5,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.7,rough:.35},freshSprouts:{name:"Fresh sprouts",shape:"sprout",count:1,r:.0095,colR:.0045,mass:.3,garnish:!0,raw:16118494,cooked:16118494,over:16118494,gloss:.45,rough:.4},freshChives:{name:"Chive tips",shape:"segment",count:1,r:.0085,colR:.0035,mass:.2,garnish:!0,raw:4889136,cooked:4889136,over:4889136,gloss:.5,rough:.45,sheen:.6},cucumber:{name:"Cucumber",shape:"disc",count:1,r:.014,colR:.0055,mass:.8,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.35},freshScallion:{name:"Spring onion",shape:"segment",count:1,r:.0085,colR:.0035,mass:.2,garnish:!0,raw:7125062,cooked:7125062,over:7125062,gloss:.5,rough:.45,sheen:.5},friedEgg:{name:"Fried egg",shape:"friedEgg",count:1,r:.03,colR:.007,mass:3,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.3},pepper:{name:"White pepper",shape:"flake",count:1,r:.0016,mass:.02,garnish:!0,raw:12103072,cooked:12103072,over:12103072,gloss:.1,rough:.8},aonori:{name:"Aonori",shape:"flake",count:1,r:.0018,mass:.02,garnish:!0,raw:4160034,cooked:4160034,over:4160034,gloss:.1,rough:.8},beniShoga:{name:"Red ginger",shape:"baton",count:1,r:.0055,colR:.003,mass:.1,garnish:!0,raw:14688330,cooked:14688330,over:14688330,gloss:.8,rough:.3},katsuobushi:{name:"Bonito flakes",shape:"bonito",count:1,r:.009,colR:.004,mass:.02,garnish:!0,dances:!0,raw:14197882,cooked:14197882,over:14197882,gloss:.2,rough:.6}},kn={oil:{name:"Oil",colour:14266954,target:[.45,.68],rate:.32},tamarind:{name:"Tamarind sauce",colour:6040082,target:[.52,.74],rate:.28},fishSauce:{name:"Fish sauce",colour:11036190,target:[.36,.56],rate:.26},krapao:{name:"Kra Pao sauce",colour:4070412,target:[.46,.66],rate:.27},darkSoy:{name:"Dark soy sauce",colour:2757128,target:[.5,.7],rate:.27},yakisobaSauce:{name:"Yakisoba sauce",colour:3939340,target:[.5,.72],rate:.27}};function iu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Xc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const m=Xc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Xc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ie(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}let Z_=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};const Xo=new Map;function ye(i,t){return Z_(i,t)}function Me(i,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const s=new Zg(i);return t&&(s.colorSpace=ln),e&&(s.wrapS=s.wrapT=os),s.anisotropy=n,s}function be(i,t){return Xo.has(i)||Xo.set(i,t()),Xo.get(i)}function Be(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Kr(){return be("softDot",()=>{const i=ye(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Me(i)})}function j_(){return be("steam",()=>{const i=ye(128,128),t=i.getContext("2d"),e=Be(7);for(let n=0;n<14;n++){const s=40+e()*48,r=40+e()*48,o=14+e()*26,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill()}return Me(i)})}function J_(){return be("flame",()=>{const i=ye(64,128),t=i.getContext("2d"),e=t.createRadialGradient(32,100,2,32,80,60);return e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,190,70,0.95)"),e.addColorStop(.6,"rgba(240,90,20,0.55)"),e.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(32,4),t.bezierCurveTo(58,50,60,110,32,124),t.bezierCurveTo(4,110,6,50,32,4),t.fill(),Me(i)})}function Q_(){return be("blueFlame",()=>{const i=ye(32,64),t=i.getContext("2d"),e=t.createLinearGradient(0,64,0,0);return e.addColorStop(0,"rgba(120,170,255,0.95)"),e.addColorStop(.5,"rgba(60,110,255,0.6)"),e.addColorStop(1,"rgba(40,60,255,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,0),t.quadraticCurveTo(32,40,16,64),t.quadraticCurveTo(0,40,16,0),t.fill(),Me(i)})}function tx(){return be("board",()=>{const i=ye(512,512),t=i.getContext("2d"),e=Be(31);t.fillStyle="#a8723e",t.fillRect(0,0,512,512);const n=180,s=620;for(let o=20;o<900;o+=6+e()*7)t.strokeStyle=`rgba(${90+e()*30},${52+e()*20},24,${.18+e()*.22})`,t.lineWidth=2+e()*3,t.beginPath(),t.arc(n,s,o,0,Math.PI*2),t.stroke();for(let o=0;o<160;o++){const a=e()*512,l=e()*512,c=(e()-.5)*.6+(e()<.5?0:Math.PI/2),h=10+e()*50;t.strokeStyle=`rgba(220,180,130,${.1+e()*.12})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,l),t.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}const r=t.createRadialGradient(256,256,60,256,256,300);return r.addColorStop(0,"rgba(60,30,10,0.18)"),r.addColorStop(1,"rgba(60,30,10,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),Me(i)})}function qc(){return be("brushed",()=>{const i=ye(256,256),t=i.getContext("2d"),e=Be(11);t.fillStyle="rgb(96,96,96)",t.fillRect(0,0,256,256);for(let n=0;n<900;n++){const s=e()*256,r=70+e()*70;t.fillStyle=`rgba(${r},${r},${r},0.35)`,t.fillRect(0,s,256,1+e()*1.5)}for(let n=0;n<20;n++){const s=e()*256,r=e()*256,o=12+e()*40,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(150,150,150,0.35)"),a.addColorStop(1,"rgba(150,150,150,0)"),t.fillStyle=a,t.fillRect(s-o,r-o,o*2,o*2)}return Me(i,{srgb:!1,repeat:!0})})}function ex(){return be("wok",()=>{const i=ye(512,512),t=i.getContext("2d"),e=Be(5),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#15110e"),n.addColorStop(.22,"#201813"),n.addColorStop(.4,"#2c2a31"),n.addColorStop(.49,"#56565a"),n.addColorStop(.52,"#3a3e4c"),n.addColorStop(.7,"#1c1714"),n.addColorStop(1,"#0e0b09"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=0;s<400;s++){const r=e()*512,o=e()*512,a=20+e()*90;t.fillStyle=`rgba(${e()<.5?"90,60,30":"10,8,6"},${.05+e()*.08})`,t.fillRect(r,o,a,2+e()*3)}return Me(i,{repeat:!0})})}function nx(){return be("leaf",()=>{const i=ye(512,512),t=i.getContext("2d"),e=Be(19);t.fillStyle="#3f7d2a",t.fillRect(0,0,512,512);const n=t.createLinearGradient(0,0,512,0);n.addColorStop(0,"rgba(20,50,10,0.35)"),n.addColorStop(.5,"rgba(120,170,60,0.18)"),n.addColorStop(1,"rgba(20,50,10,0.35)"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=-40;s<560;s+=5+e()*4)t.strokeStyle=`rgba(${150+e()*40},${200+e()*30},110,${.16+e()*.16})`,t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(512,s+40),t.stroke();t.fillStyle="rgba(190,215,140,0.55)",t.fillRect(0,250,512,10);for(let s=0;s<30;s++)t.fillStyle=`rgba(110,90,40,${.15+e()*.2})`,t.fillRect(e()*512,e()*512,2+e()*4,2+e()*3);return Me(i)})}function ix(){return be("plateRim",()=>{const i=ye(512,64),t=i.getContext("2d");t.fillStyle="#f3f1ea",t.fillRect(0,0,512,64),t.fillStyle="#2f5aa0",t.fillRect(0,44,512,5),t.fillRect(0,54,512,3);for(let e=0;e<512;e+=32)t.beginPath(),t.arc(e+16,30,7,0,Math.PI*2),t.fill(),t.fillRect(e+4,28,24,3);return Me(i,{repeat:!0})})}function su(){return be("street",()=>{const i=ye(512,512),t=i.getContext("2d"),e=Be(23);t.fillStyle="#2c2b2a",t.fillRect(0,0,512,512);for(let n=0;n<512;n+=64)for(let s=0;s<512;s+=64){const r=44+e()*18;t.fillStyle=`rgb(${r},${r-2},${r-4})`,t.fillRect(s+2,n+2,60,60)}for(let n=0;n<60;n++)t.fillStyle=`rgba(0,0,0,${.1+e()*.2})`,t.beginPath(),t.arc(e()*512,e()*512,6+e()*30,0,Math.PI*2),t.fill();return Me(i,{repeat:!0})})}function sx(i="#c8322b",t="#efe6d2"){return be("canopy"+i+t,()=>{const e=ye(256,256),n=e.getContext("2d");for(let r=0;r<256;r+=32)n.fillStyle=r/32%2?t:i,n.fillRect(r,0,32,256);const s=Be(3);for(let r=0;r<40;r++)n.fillStyle=`rgba(0,0,0,${.03+s()*.05})`,n.fillRect(0,s()*256,256,2+s()*8);return Me(e,{repeat:!0})})}function ru(i,{w:t=512,h:e=256,bg:n="#10131a",fg:s="#ffd23c",glow:r="#ff7a1a",box:o=!1}={}){return be("sign"+i.join("|")+n+s,()=>{const a=ye(t,e),l=a.getContext("2d");if(l.fillStyle=n,l.fillRect(0,0,t,e),o){const h=l.createLinearGradient(0,0,0,e);h.addColorStop(0,"rgba(255,255,255,0.12)"),h.addColorStop(1,"rgba(0,0,0,0.2)"),l.fillStyle=h,l.fillRect(0,0,t,e)}l.textAlign="center",l.textBaseline="middle";const c=i.length;return i.forEach((h,u)=>{const f=Math.floor(u===0?e*(c>1?.42:.6):e*.22);l.font=`700 ${f}px "Thonburi","Leelawadee UI","Noto Sans Thai","Sukhumvit Set",sans-serif`;const d=c>1?u===0?e*.4:e*.8:e*.52;l.shadowColor=r,l.shadowBlur=o?0:18,l.fillStyle=s,l.fillText(h,t/2,d),o||(l.shadowBlur=6,l.fillText(h,t/2,d))}),Me(a)})}function rx(){return be("backdrop",()=>{const e=ye(2048,768),n=e.getContext("2d"),s=Be(41),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0b0d1a"),r.addColorStop(.55,"#1b1626"),r.addColorStop(1,"#2a1a18"),n.fillStyle=r,n.fillRect(0,0,2048,768);let o=0;for(;o<2048;){const l=160+s()*200,c=768*(.55+s()*.35);n.fillStyle=`rgb(${18+s()*14},${16+s()*12},${20+s()*14})`,n.fillRect(o,768-c,l,c);for(let h=768-c+30;h<628;h+=58)for(let u=o+16;u<o+l-30;u+=44){if(s()<.45)continue;const f=s()<.7;n.fillStyle=f?`rgba(255,${170+s()*50},${90+s()*40},${.18+s()*.25})`:`rgba(140,200,255,${.12+s()*.18})`,n.fillRect(u,h,16,22)}s()<.6&&(n.fillStyle=`rgba(255,${190+s()*40},120,${.25+s()*.25})`,n.fillRect(o+10,638,l-20,120)),o+=l+4}n.strokeStyle="rgba(0,0,0,0.7)",n.lineWidth=2;for(let l=0;l<7;l++){const c=60+s()*200;n.beginPath(),n.moveTo(0,c),n.quadraticCurveTo(2048/2,c+60+s()*60,2048,c+(s()-.5)*80),n.stroke()}const a=["255,190,90","255,150,80","255,90,170","110,200,255","255,230,170"];for(let l=0;l<90;l++){const c=s()*2048,h=768*(.35+s()*.6),u=5+s()*16,f=a[Math.floor(s()*a.length)],d=n.createRadialGradient(c,h,0,c,h,u),m=.1+s()*.22;d.addColorStop(0,`rgba(${f},${m})`),d.addColorStop(.8,`rgba(${f},${m*.8})`),d.addColorStop(1,`rgba(${f},0)`),n.fillStyle=d,n.beginPath(),n.arc(c,h,u,0,Math.PI*2),n.fill()}return Me(e)})}function ox(i){return be("cond"+i,()=>{const t=ye(64,64),e=t.getContext("2d"),n=Be(i.length*13),s={sugar:"#efe9dc",flakes:"#9c2418",fish:"#b0701e",vinegar:"#e8dfc8"}[i];e.fillStyle=s,e.fillRect(0,0,64,64);for(let r=0;r<90;r++){const o=i==="sugar"?"rgba(255,255,255,0.5)":i==="flakes"?"rgba(230,120,40,0.6)":"rgba(200,40,20,0.7)";e.fillStyle=o,e.fillRect(n()*64,n()*64,2+n()*2,2+n()*2)}return Me(t)})}const ou='"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic","Noto Sans JP","Noto Sans CJK JP",sans-serif',au='"Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif';function qo(i=!0){return be("planks"+i,()=>{const t=ye(512,512),e=t.getContext("2d"),n=Be(i?61:67),s=i?[78,48,30]:[214,178,128];for(let r=0;r<512;r+=64){const o=.88+n()*.2;e.fillStyle=`rgb(${s[0]*o|0},${s[1]*o|0},${s[2]*o|0})`,e.fillRect(0,r,512,64);for(let a=0;a<30;a++){const l=r+n()*64;e.strokeStyle=`rgba(${i?"30,16,8":"150,110,60"},${.12+n()*.18})`,e.lineWidth=2,e.beginPath(),e.moveTo(0,l),e.bezierCurveTo(170,l+(n()-.5)*8,340,l+(n()-.5)*8,512,l),e.stroke()}e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(0,r,512,2)}return Me(t,{repeat:!0})})}function lu(){return be("teppan",()=>{const i=ye(512,512),t=i.getContext("2d"),e=Be(71);t.fillStyle="#1b1a1a",t.fillRect(0,0,512,512);for(let s=0;s<260;s++){t.strokeStyle=`rgba(${e()<.5?"120,110,100":"40,30,20"},${.05+e()*.08})`,t.lineWidth=2+e()*3;const r=e()*512,o=e()*512,a=e()*Math.PI;t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(a)*60,o+Math.sin(a)*60),t.stroke()}const n=t.createRadialGradient(256,256,40,256,256,300);return n.addColorStop(0,"rgba(60,40,20,0.25)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,512,512),Me(i)})}function Yc(i){return be("noren"+i,()=>{const n=ye(1024,384),s=n.getContext("2d");s.fillStyle="#1d2e5c",s.fillRect(0,0,1024,384);const r=Be(73);for(let a=0;a<400;a++)s.fillStyle=`rgba(255,255,255,${r()*.04})`,s.fillRect(r()*1024,r()*384,2,2+r()*6);const o=i.length;s.fillStyle="rgba(0,0,0,0.5)";for(let a=1;a<o;a++)s.fillRect(1024/o*a-3,384*.25,6,384);return s.fillStyle="#f4f0e6",s.textAlign="center",s.textBaseline="middle",s.font=`700 ${384*.5}px ${au}`,[...i].forEach((a,l)=>s.fillText(a,1024/o*(l+.5),384*.58)),Me(n)})}function $c(i){return be("lantern"+i,()=>{const t=ye(256,256),e=t.getContext("2d"),n=e.createRadialGradient(128,128,20,128,128,180);n.addColorStop(0,"#ffb070"),n.addColorStop(.5,"#e8401c"),n.addColorStop(1,"#8a1a0c"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="rgba(80,10,0,0.35)",e.lineWidth=2;for(let s=8;s<256;s+=16)e.beginPath(),e.moveTo(0,s),e.lineTo(256,s),e.stroke();return e.fillStyle="#1a0a06",e.textAlign="center",e.textBaseline="middle",e.font=`700 150px ${au}`,e.fillText(i,128,136),Me(t,{repeat:!0})})}function ax(i,t="#d8261c",e="#ffffff"){return be("nobori"+i+t,()=>{const r=ye(128,512),o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,128,512),o.fillStyle="rgba(255,255,255,0.9)",o.fillRect(0,0,128,14);for(let c=30;c<512;c+=40)o.fillRect(0,c,8,6);o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";const a=i.length,l=Math.min(96,452/a);return o.font=`900 ${l}px ${ou}`,[...i].forEach((c,h)=>o.fillText(c,128/2+4,40+l*(h+.5))),Me(r)})}function lx(){return be("glaze",()=>{const i=ye(256,256),t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#2b2a3a"),e.addColorStop(.7,"#3a2e2c"),e.addColorStop(1,"#a58a66"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=Be(83);for(let s=0;s<500;s++)t.fillStyle=`rgba(${n()<.5?"200,180,150":"10,8,12"},${.2+n()*.3})`,t.fillRect(n()*256,n()*256,2,2);return Me(i,{repeat:!0})})}function cu(){return be("speckle",()=>{const i=ye(256,256),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);const e=Be(89);for(let n=0;n<700;n++)t.fillStyle=`rgba(90,60,40,${.15+e()*.35})`,t.fillRect(e()*256,e()*256,2,2);return Me(i,{repeat:!0})})}function cx(){return be("pine",()=>{const i=ye(256,256),t=i.getContext("2d");t.fillStyle="#e2c79a",t.fillRect(0,0,256,256);const e=Be(97);for(let n=0;n<26;n++){t.strokeStyle=`rgba(170,120,60,${.15+e()*.2})`,t.lineWidth=2+e()*2;const s=e()*256;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(90,s+6,170,s-6,256,s),t.stroke()}return Me(i,{repeat:!0})})}function hx(){return be("osaka",()=>{const e=ye(2048,768),n=e.getContext("2d"),s=Be(101),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#070914"),r.addColorStop(.6,"#161226"),r.addColorStop(1,"#241616"),n.fillStyle=r,n.fillRect(0,0,2048,768);const o=["たこ焼","お好み焼","ラーメン","串カツ","居酒屋","寿司","大阪","食堂","焼きそば"],a=["#ff3c6e","#ffd23c","#3ce0ff","#ff8a2a","#8aff5a","#ff5ae0"];let l=0;for(;l<2048;){const c=120+s()*160,h=768*(.6+s()*.38);n.fillStyle=`rgb(${14+s()*12},${12+s()*10},${18+s()*14})`,n.fillRect(l,768-h,c,h);for(let u=768-h+20;u<648;u+=40)for(let f=l+10;f<l+c-20;f+=30)s()<.55||(n.fillStyle=`rgba(255,${200+s()*40},${150+s()*60},${.1+s()*.2})`,n.fillRect(f,u,12,18));if(s()<.8){const u=o[Math.floor(s()*o.length)],f=a[Math.floor(s()*a.length)],d=l+c*(.2+s()*.6),m=768-h+30+s()*60,_=34+s()*16;n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(d-_*.62,m-10,_*1.24,_*u.length+20),n.font=`900 ${_}px ${ou}`,n.textAlign="center",n.textBaseline="top",n.shadowColor=f,n.shadowBlur=18,n.fillStyle=f,[...u].forEach((p,g)=>n.fillText(p,d,m+g*_)),n.shadowBlur=0}n.fillStyle=`rgba(255,${170+s()*50},110,${.18+s()*.2})`,n.fillRect(l+8,658,c-16,100),l+=c+3}for(let c=0;c<3;c++){const h=250+c*90;for(let u=0;u<40;u++){const f=u*51.2+20,d=h+Math.sin(u*.9)*10,m=n.createRadialGradient(f,d,0,f,d,14);m.addColorStop(0,"rgba(255,190,110,0.8)"),m.addColorStop(1,"rgba(255,90,40,0)"),n.fillStyle=m,n.beginPath(),n.arc(f,d,14,0,Math.PI*2),n.fill()}}for(let c=0;c<70;c++){const h=s()*2048,u=768*(.4+s()*.55),f=5+s()*14,d=n.createRadialGradient(h,u,0,h,u,f),m=.1+s()*.2;d.addColorStop(0,`rgba(255,200,140,${m})`),d.addColorStop(1,"rgba(255,200,140,0)"),n.fillStyle=d,n.beginPath(),n.arc(h,u,f,0,Math.PI*2),n.fill()}return Me(e)})}function hu(){return be("batterCabbage",()=>{const i=ye(512,512),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,512,512);const e=Be(107);for(let n=0;n<700;n++){const s=e()*512,r=e()*512,o=e()*Math.PI,a=10+e()*30,l=e();t.strokeStyle=l<.75?`rgba(${200+e()*40},${230+e()*25},${170+e()*40},0.9)`:l<.9?"rgba(90,160,60,0.9)":"rgba(220,60,90,0.9)",t.lineWidth=l<.75?3:2.5,t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()}for(let n=0;n<500;n++)t.fillStyle=`rgba(160,120,70,${e()*.25})`,t.beginPath(),t.arc(e()*512,e()*512,2+e()*5,0,Math.PI*2),t.fill();return Me(i)})}function no(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function uu(){const i={};i.steel=new kt({color:12567495,metalness:1,roughness:.38,roughnessMap:qc(),side:te}),i.bowl=new kt({color:11120050,metalness:1,roughness:.46,side:te}),i.steelDark=new kt({color:9343896,metalness:1,roughness:.42,roughnessMap:qc()}),i.iron=new kt({color:1841946,metalness:.7,roughness:.62}),i.street=new kt({color:10131604,map:su(),roughness:.3,metalness:0}),i.street.map.repeat.set(7,7),i.board=new kt({map:tx(),roughness:.78,metalness:0}),i.boardSide=new kt({color:6175262,roughness:.9,metalness:0}),i.glass=new ce({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.16,clearcoat:1,depthWrite:!1}),i.canopy=new kt({map:sx(),roughness:.85,side:te,metalness:0}),i.canopy.map.repeat.set(3,1),i.pole=new kt({color:10133670,metalness:1,roughness:.4}),i.bulb=new Te({color:new ct(16762999).multiplyScalar(3)}),i.wire=new Te({color:526344}),i.tube=new Te({color:new ct(15660799).multiplyScalar(3.2)}),i.stool=new kt({color:13116188,roughness:.45,metalness:0}),i.stoolBlue=new kt({color:2777784,roughness:.45,metalness:0}),i.gas=new kt({color:11676192,roughness:.4,metalness:0}),i.oil=new ce({color:13146666,roughness:.05,clearcoat:1,metalness:0}),i.sauce=new ce({color:4857872,roughness:.12,clearcoat:1,metalness:0}),i.lime=new ce({color:7319086,roughness:.45,clearcoat:.5,metalness:0}),i.egg=new kt({color:15255968,roughness:.6,metalness:0}),i.noodleDry=new kt({color:15524556,roughness:.7,metalness:0}),i.chilli=new ce({color:12722202,roughness:.3,clearcoat:.8,metalness:0}),i.greens=new kt({color:4033068,roughness:.55,metalness:0}),i.caseLight=new Te({color:new ct(16773328).multiplyScalar(2.2)}),i.backdrop=new Te({map:rx(),fog:!1,color:11579568}),i.backdrop.map.wrapS=os,i.backdrop.map.repeat.set(2,1),i.farStall=new kt({color:2763312,roughness:.8,metalness:0}),i.farGlow=new Te({color:new ct(16756832).multiplyScalar(1.6)});for(const t of["sugar","flakes","fish","vinegar"])i["cond_"+t]=new ce({map:ox(t),roughness:.3,clearcoat:.6,metalness:0});return i}function et(i,t,e=0,n=0,s=0,r={}){const o=new pt(i,t);return o.position.set(e,n,s),r.ry&&(o.rotation.y=r.ry),r.rx&&(o.rotation.x=r.rx),r.rz&&(o.rotation.z=r.rz),o.castShadow=r.cast??!0,o.receiveShadow=!0,r.dynamic&&(o.userData.dynamic=!0),o}function Zs(i,t=40){return new wi(i.map(([e,n])=>new q(e,n)),t)}function ux(i,t){const e=lt.y,n=lt.x1-lt.x0,s=lt.z1-lt.z0,r=(lt.z0+lt.z1)/2;i.add(et(new Ft(n,.03,s),t.steel,0,e-.015,r));const o=new zt(.012,.012,n,10);o.rotateZ(Math.PI/2),i.add(et(o,t.steel,0,e-.012,lt.z1)),i.add(et(new Ft(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,lt.z0+.02)),i.add(et(new Ft(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,lt.z1-.03));for(const a of[lt.x0+.01,lt.x1-.01])i.add(et(new Ft(.02,e-.05,s-.04),t.steelDark,a,(e-.05)/2+.02,r));for(const a of[lt.x0-.02,lt.x1+.02]){const l=new Cn(.26,.018,8,36);l.rotateY(Math.PI/2),i.add(et(l,t.iron,a,.28,r));const c=new zt(.03,.03,.05,10);c.rotateZ(Math.PI/2),i.add(et(c,t.pole,a,.28,r));for(let h=0;h<12;h++){const u=new zt(.002,.002,.5,3);u.rotateX(h/12*Math.PI),i.add(et(u,t.pole,a,.28,r,{cast:!1}))}}i.add(et(new zt(.15,.15,.5,20),t.gas,1.22,.25,.25)),i.add(et(new de(.15,20,10,0,Math.PI*2,0,Math.PI/2),t.gas,1.22,.5,.25)),i.add(et(new zt(.03,.03,.08,10),t.pole,1.22,.66,.25))}function fx(i,t){const e=lt.x0+.04,n=lt.x1-.04,s=lt.y,r=On.y1,o=On.z0,a=On.z1,l=(e+n)/2,c=(o+a)/2,h=n-e;for(const g of[e,n,l])for(const M of[o,a])i.add(et(new Ft(.018,r-s,.018),t.pole,g,(s+r)/2,M));i.add(et(new Ft(h,.02,a-o+.02),t.steel,l,r,c));for(const g of[o,a])i.add(et(new Re(h,r-s),t.glass,l,(s+r)/2,g,{cast:!1}));i.add(et(new Ft(h-.1,.008,.02),t.caseLight,l,r-.016,c,{cast:!1}));const u=no(77),f=new de(.022,12,8);f.scale(1,.9,1.15);for(let g=0;g<26;g++)i.add(et(f,t.lime,-.78+u()*.26,s+.022+(g>14?.03:0),o+.03+u()*.08,{ry:u()*6}));const d=new de(.021,12,8);d.scale(1,1.25,1);for(let g=0;g<12;g++)i.add(et(d,t.egg,-.4+g%6*.045,s+.027,o+.04+Math.floor(g/6)*.05));const m=new Ft(.16,.035,.08);for(let g=0;g<5;g++)i.add(et(m,t.noodleDry,.02+g%2*.02,s+.018+g*.036,c,{ry:(u()-.5)*.2}));const _=new zt(.004,.001,.05,6);_.rotateZ(Math.PI/2);for(let g=0;g<40;g++)i.add(et(_,t.chilli,.28+u()*.16,s+.006+u()*.02,o+.02+u()*.1,{ry:u()*6,cast:!1}));const p=new Yn(.05,1);p.scale(1.4,.5,.9);for(let g=0;g<3;g++)i.add(et(p,t.greens,.6+g*.09,s+.03,c+(u()-.5)*.04,{ry:u()*3}))}function dx(i,t){const e=new Cn(Z.rimR*.78,.011,8,40);e.rotateX(Math.PI/2),i.add(et(e,t.iron,Z.x,Z.bottomY+.018,Z.z));const n=new zt(Z.rimR*.82,Z.rimR*.9,.06,36,1,!0);i.add(et(n,t.iron,Z.x,lt.y+.03,Z.z));for(let o=0;o<3;o++){const a=o/3*Math.PI*2+.5;i.add(et(new Ft(.02,.05,.05),t.iron,Z.x+Math.cos(a)*.135,Z.bottomY+.005,Z.z+Math.sin(a)*.135,{ry:-a}))}const s=new Cn(.06,.012,8,24);s.rotateX(Math.PI/2),i.add(et(s,t.iron,Z.x,lt.y+.02,Z.z));const r=new zt(.018,.02,.02,16);r.rotateX(Math.PI/2),i.add(et(r,t.iron,Z.x+.12,lt.y-.05,lt.z1+.01))}function px(i,t){const e=new zt(ve.r,ve.r*1.01,ve.h,48,1),n=et(e,[t.boardSide,t.board,t.boardSide],ve.x,lt.y+ve.h/2,ve.z);i.add(n)}function mx(i,t){for(const[e,n]of[["oil",t.oil],["sauce",t.sauce]]){const s=nu[e],r=e==="oil"?.07:.09;i.add(et(Zs([[0,.002],[s.r-.004,.002],[s.r,.01],[s.r,r],[s.r+.004,r+.002],[s.r-.003,r]],32),t.steel,s.x,lt.y,s.z));const o=new hn(s.r-.003,32);o.rotateX(-Math.PI/2),i.add(et(o,n,s.x,lt.y+r*.78,s.z,{cast:!1}));const a=new de(.025,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2);i.add(et(a,t.steel,s.x-.015,lt.y+r*.78,s.z+.01));const l=new zt(.004,.004,.2,8);i.add(et(l,t.steel,s.x+.02,lt.y+r+.06,s.z+.03,{rz:-.45,rx:.2}))}}function gx(i,t){const e=["sugar","flakes","fish","vinegar"],n=new Ft(.2,.006,.2);i.add(et(n,t.steel,pn.x,lt.y+.003,pn.z));const s=new Cn(.035,.004,6,20,Math.PI);i.add(et(s,t.steel,pn.x,lt.y+.14,pn.z)),i.add(et(new zt(.004,.004,.14,6),t.steel,pn.x-.035,lt.y+.07,pn.z)),i.add(et(new zt(.004,.004,.14,6),t.steel,pn.x+.035,lt.y+.07,pn.z)),e.forEach((r,o)=>{const a=pn.x+(o%2?.05:-.05),l=pn.z+(o<2?-.05:.05),c=r==="sugar"||r==="flakes"?.045:.055;i.add(et(new zt(.032,.032,c,16),t["cond_"+r],a,lt.y+.006+c/2,l)),i.add(et(new zt(.036,.036,.075,16,1,!0),t.glass,a,lt.y+.044,l,{cast:!1})),i.add(et(new zt(.038,.038,.008,16),t.steel,a,lt.y+.085,l)),i.add(et(new zt(.003,.003,.08,6),t.steel,a+.012,lt.y+.1,l,{rz:.25}))})}function _x(i,t){for(const f of[-1.18,1.18])for(const d of[-.95,.85])i.add(et(new zt(.018,.018,2.2,10),t.pole,f,2.2/2,d));const o=new Re(2.7,2.1,16,12),a=o.attributes.position;for(let f=0;f<a.count;f++){const d=a.getX(f)/1.35,m=a.getY(f)/1.05;a.setZ(f,-(1-d*d)*(1-m*m)*.12)}o.rotateX(Math.PI/2),o.computeVertexNormals(),i.add(et(o,t.canopy,0,2.2+.02,(-.95+.85)/2,{cast:!1}));const l=new zt(.014,.014,1.2,12);l.rotateZ(Math.PI/2),i.add(et(l,t.tube,0,1.92,-.12,{cast:!1}));for(const f of[-.5,.5])i.add(et(new zt(.002,.002,.26,4),t.wire,f,2.05,-.12,{cast:!1}));const c=[];for(let f=0;f<=24;f++){const d=f/24,m=-1.18+d*1.18*2;c.push(new C(m,2.2-.08-Math.sin(d*Math.PI)*.22,-.95-.02))}const h=new fs(new pl(c),48,.003,4,!1);i.add(et(h,t.wire,0,0,0,{cast:!1}));const u=new de(.022,10,8);for(let f=1;f<24;f+=2)i.add(et(u,t.bulb,c[f].x,c[f].y-.03,c[f].z,{cast:!1}))}function xx(i,t){const e=new Re(16,16);e.rotateX(-Math.PI/2),i.add(et(e,t.street,0,0,0,{cast:!1}));const n=new zt(.15,.13,.03,20),s=new zt(.13,.17,.4,20,1,!0),r=no(4);[[-.7,-1.35],[-.15,-1.55],[.5,-1.3],[1,-1.7],[-1.2,-1.9]].forEach(([l,c],h)=>{const u=h===3?t.stoolBlue:t.stool;i.add(et(s,u,l,.2,c)),i.add(et(n,u,l,.415,c,{ry:r()}))}),i.add(et(new Ft(.9,.025,.6),t.steelDark,.1,.72,-2));for(const[l,c]of[[-.3,-1.75],[.5,-1.75],[-.3,-2.25],[.5,-2.25]])i.add(et(new zt(.012,.012,.72,6),t.pole,l,.36,c));const a=[[-2.6,-3.4],[2.4,-3.8],[-3.6,-6],[3.8,-6.5],[.2,-7.5]];for(const[l,c]of a){i.add(et(new Ft(1.6,.9,.8),t.farStall,l,.45,c,{cast:!1})),i.add(et(new Ft(1.9,.04,1.4),t.farGlow,l,2.1,c,{cast:!1}));for(let h=0;h<5;h++)i.add(et(new de(.035,8,6),t.bulb,l-.8+h*.4,2,c+.7,{cast:!1}))}}function vx(i){const t=[{lines:["ผัดไทย","PAD THAI"],x:-2,y:2.6,z:-3,w:1.3,h:.65,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["อร่อย"],x:2.3,y:2.9,z:-4.2,w:1.1,h:.45,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["ก๋วยเตี๋ยว"],x:3.4,y:2.2,z:-2.6,w:1.2,h:.4,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ชาเย็น","THAI ICED TEA"],x:-3.4,y:2,z:-2.2,w:1,h:.5,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#e2621c",ry:.6}];for(const e of t){const n=ru(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new Te({map:n,color:new ct(1.5,1.5,1.5),fog:!1}),r=new pt(new Re(e.w,e.h),s);r.position.set(e.x,e.y,e.z),e.ry&&(r.rotation.y=e.ry),i.add(r)}}function yx(i,t){const e=new zt(8.5,8.5,7,64,1,!0),n=new pt(e,t.backdrop);n.material.side=Oe,n.position.set(0,3.1,0),n.rotation.y=Math.PI*.5,i.add(n)}function fu(i){const t=new Map,e=[];i.updateMatrixWorld(!0);for(const s of[...i.children]){if(!s.isMesh||s.userData.dynamic||Array.isArray(s.material)||s.material.transparent){e.push(s);continue}const r=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(s.matrixWorld),o=Object.keys(r.attributes).sort().join(","),a=s.material.uuid+"|"+o+"|"+s.castShadow;t.has(a)||t.set(a,{mat:s.material,cast:s.castShadow,geos:[]}),t.get(a).geos.push(r)}const n=new ie;for(const s of e)n.add(s);for(const{mat:s,cast:r,geos:o}of t.values()){const a=iu(o),l=new pt(a,s);l.castShadow=r,l.receiveShadow=!0,n.add(l)}return n}function Mx(i=uu()){const t=new ie;ux(t,i),fx(t,i),dx(t,i),px(t,i),mx(t,i),gx(t,i),_x(t,i),xx(t,i),vx(t),yx(t,i);const e=fu(t);return e.name="stall",{group:e,materials:i}}const Vs=i=>Z.R-Math.sqrt(Z.R*Z.R-i*i);function bx(){const i=[];for(let n=0;n<=22;n++){const s=n/22*Z.rimR;i.push(new q(s,Vs(s)))}const e=Vs(Z.rimR);i.push(new q(Z.rimR+.003,e+.002)),i.push(new q(Z.rimR+.006,e-.001)),i.push(new q(Z.rimR+.004,e-.005));for(let n=22;n>=0;n--){const s=n/22*(Z.rimR+.002);i.push(new q(s,Vs(s*.99)-.0025))}return i}function Kc(i,t,e){const n=Math.asin(Math.min(.99,i/Z.R)),s=new de(Z.R-.0012,40,8,0,Math.PI*2,Math.PI-n,n),r=new ce({color:t,roughness:.06,metalness:0,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:e,depthWrite:!1}),o=new pt(s,r);return o.position.set(0,Z.R,0),o.renderOrder=1,o}class Sx{constructor(){this.group=new ie,this.body=new ie,this.group.position.set(Z.x,Z.bottomY,Z.z),this.group.add(this.body);const t=ex();this.steel=new ce({map:t,color:16777215,metalness:.55,roughness:.42,clearcoat:.35,clearcoatRoughness:.35,side:te});const e=new pt(new wi(bx(),64),this.steel);e.castShadow=!0,e.receiveShadow=!0,e.name="wokBowl",this.bowl=e,this.body.add(e);const n=new kt({color:5911576,roughness:.6,metalness:0}),s=new kt({color:2762790,roughness:.5,metalness:.8}),r=new ie,o=new pt(new zt(.008,.009,.12,10),s);o.rotation.x=Math.PI/2,o.position.z=.06;const a=new pt(new zt(.015,.013,.16,12),n);a.rotation.x=Math.PI/2,a.position.z=.19,r.add(o,a),r.position.set(0,Vs(Z.rimR)-.01,Z.rimR+.002),r.rotation.set(-.28,.5,0),r.position.applyAxisAngle(new C(0,1,0),.5);for(const f of r.children)f.castShadow=!0;this.body.add(r);const l=new pt(new Cn(.025,.005,6,16,Math.PI),s);l.position.set(0,Vs(Z.rimR)-.006,-.18-.018),l.rotation.x=-Math.PI/2+.3,this.body.add(l),this.oilPool=Kc(.07,14068026,.55),this.saucePool=Kc(.08,4857356,.9),this.oilPool.visible=this.saucePool.visible=!1,this.body.add(this.oilPool,this.saucePool),this.tongues=[];const c=new Yr({map:J_(),color:16777215,blending:ns,depthWrite:!1,transparent:!0}),h=18;for(let f=0;f<h;f++){const d=new Ba(c.clone()),m=f/h*Math.PI*2;d.userData={a:m,phase:Math.random()*10,r:Z.rimR*(.93+f%3*.04)},d.center.set(.5,.05),d.renderOrder=2,this.group.add(d),this.tongues.push(d)}this.blue=[];const u=new Yr({map:Q_(),blending:ns,depthWrite:!1,transparent:!0});for(let f=0;f<16;f++){const d=new Ba(u.clone()),m=f/16*Math.PI*2;d.position.set(Math.cos(m)*.065,lt.y+.03-Z.bottomY,Math.sin(m)*.065),d.center.set(.5,0),d.userData={phase:Math.random()*10},this.group.add(d),this.blue.push(d)}this.light=new ds(16747066,0,.9,2),this.light.position.set(0,-.045,.02),this.group.add(this.light),this.flareLight=new ds(16752714,0,.7,2),this.flareLight.position.set(0,Z.depth+.12,-.05),this.group.add(this.flareLight),this.tossT=1,this.time=0}toss(){this.tossT=0}update(t,{flame:e,flare:n,oil:s,sauce:r,T:o}){this.time+=t;const a=this.time;if(this.tossT<1){this.tossT=Math.min(1,this.tossT+t/.42);const c=this.tossT,h=Math.sin(c*Math.PI)*.035,u=Math.sin(c*Math.PI*2)*.03;this.body.position.set(0,h,-u),this.body.rotation.x=-Math.sin(c*Math.PI)*.16}else this.body.position.set(0,0,0),this.body.rotation.x=0;if(this.oilPool.visible=s>.02,this.oilPool.visible){const c=.55+Math.min(1.2,s)*.7;this.oilPool.scale.set(c,1,c);const h=o>170?1+Math.sin(a*23)*.012:1;this.oilPool.scale.x*=h}if(this.saucePool.visible=r>.01,this.saucePool.visible){const c=.35+Math.min(1,r)*1.1;this.saucePool.scale.set(c,1,c)}const l=e;for(const c of this.tongues){const h=c.userData,u=.75+Math.sin(a*17+h.phase)*.15+Math.sin(a*31+h.phase*3)*.1,f=n*(.9+Math.sin(a*40+h.phase)*.2),d=Math.max(0,(l-.4)*.09*u)+f*.12,m=h.r+f*.02;c.position.set(Math.cos(h.a)*m,-.03,Math.sin(h.a)*m),c.scale.set(.018+d*.22,d,1),c.visible=d>.01,c.material.opacity=Math.min(.75,.2+d*3+f*.45)}for(const c of this.blue){const h=.8+Math.sin(a*25+c.userData.phase)*.2;c.scale.set(.02,(.012+l*.035)*h,1),c.visible=l>.03}this.light.intensity=l*1.2,this.flareLight.intensity=n*.35}}class wx{constructor(){const t=new kt({color:12106944,metalness:1,roughness:.28,side:te}),e=new kt({color:7028510,roughness:.6,metalness:0});this.group=new ie;const n=new Ti,s=.042,r=.075,o=.014;n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,r-o),n.quadraticCurveTo(s,r,s-o,r),n.lineTo(-s+o,r),n.quadraticCurveTo(-s,r,-s,r-o),n.lineTo(-s,0);const a=new Js(n,6),l=a.attributes.position;for(let d=0;d<l.count;d++){const m=l.getX(d);l.setZ(d,m*m/(2*Z.R))}a.computeVertexNormals(),a.rotateX(-Math.PI/2);const c=new pt(a,t);c.position.set(0,.004,.035),c.castShadow=!0;const h=new pt(new Ft(s*2,.018,.002),t);h.position.set(0,.012,.035),this.group.add(h);const u=new pt(new zt(.004,.004,.12,8),t);u.position.set(0,.05,.05),u.rotation.x=.95;const f=new pt(new zt(.012,.011,.14,10),e);f.position.set(0,.13,.15),f.rotation.x=.95,u.castShadow=f.castShadow=!0,this.group.add(c,u,f),this.group.visible=!1,this.pos=new C(Z.x+.1,Z.rimY,Z.z+.12),this.yaw=0}update(t,e,n){const s=new C(Z.x+.12,Z.rimY+.01,Z.z+.13),r=e?new C(e.x,e.y,e.z):s,o=this.pos.clone();this.pos.lerp(r,1-Math.exp(-t*(e?28:8)));const a=this.pos.clone().sub(o);a.lengthSq()>1e-8&&n&&(this.yaw+=(Math.atan2(a.x,a.z)-this.yaw)*0),this.group.position.copy(this.pos);const l=(Z.x-this.pos.x)/Z.R,c=(Z.z-this.pos.z)/Z.R;this.group.rotation.set(-c*.9,0,l*.9)}}class Tx{constructor(){const t=new kt({color:12633288,metalness:1,roughness:.25,side:te});this.group=new ie;const e=new pt(new de(.03,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),t),n=new pt(new zt(.0045,.0045,.26,8),t);n.position.set(0,.1,.1),n.rotation.x=.85,this.liquidMat=new ce({color:14068026,roughness:.05,clearcoat:1,metalness:0,transparent:!0,opacity:.9}),this.fill=new pt(new hn(.027,20),this.liquidMat),this.fill.rotation.x=-Math.PI/2,this.fill.position.y=-.006,this.cupGroup=new ie,this.cupGroup.add(e,n,this.fill),this.group.add(this.cupGroup),this.stream=new pt(new zt(.0035,.005,1,10,1,!0),this.liquidMat),this.group.add(this.stream),this.group.visible=!1,this.tilt=0}setLiquid(t){this.liquidMat.color.set(t)}update(t,e,n,s=null){this.tilt+=((e?1.25:.1)-this.tilt)*Math.min(1,t*10);const r=s?s.x:Z.x,o=s?s.y:Z.rimY,a=s?s.z:Z.z;this.group.position.set(r-.05,o+.16,a+.05),this.cupGroup.rotation.z=this.tilt,this.fill.visible=n>.05;const l=-.028*Math.cos(this.tilt),c=-.028*Math.sin(this.tilt),h=s?s.y-(s.y===Z.rimY?Z.depth:0):Z.bottomY,u=this.group.position.y+c-(h+.01);this.stream.visible=e&&this.tilt>.8,this.stream.scale.set(1,u,1),this.stream.position.set(l-.004,c-u/2,0)}}const Ex=9.81,Ws=4096,ts=.03;function du(){return{type:"bowl",heated:!0,cx:Z.x,cy:Z.cy,cz:Z.z,R:Z.R,rimR:Z.rimR,rimY:Z.rimY}}function Ax(){return{type:"teppan",heated:!0,cx:Ct.x,cz:Ct.z,y:Ct.topY,hw:Ct.w/2-.02,hd:Ct.d/2-.02,rimY:Ct.topY+.05}}function qa(){return{type:"plate",cx:nt.x,cz:nt.z,y:nt.wellY,wellR:nt.wellR,r:nt.r-.012,lip:nt.lip}}function Zc(i=1200){return{n:0,cap:i,x:new Float32Array(i*3),p:new Float32Array(i*3),q:new Float32Array(i*4),w:new Float32Array(i*3),r:new Float32Array(i),inv:new Float32Array(i),kind:new Int16Array(i),strand:new Int32Array(i).fill(-1),d:new Float32Array(i),c:new Float32Array(i),coat:new Float32Array(i),still:new Float32Array(i),contact:new Uint8Array(i),speed:new Float32Array(i),seed:new Float32Array(i),flat:new Uint8Array(i),links:[],strands:0,container:du(),friction:.18,spatula:{on:!1,x:0,y:0,z:0,px:0,py:0,pz:0,r:.05},h:1/180,_hash:new Int32Array(i),_start:new Int32Array(Ws+1),_order:new Int32Array(i),_rng:625341585}}function Ae(i){let t=i._rng;return t^=t<<13,t^=t>>>17,t^=t<<5,i._rng=t>>>0,i._rng/4294967296}function zs(i,t,e,n,s,r,o,a=0,l=0,c=0){if(i.n>=i.cap)return-1;const h=i.n++,u=h*3;i.x[u]=e,i.x[u+1]=n,i.x[u+2]=s,i.p[u]=e-a*i.h,i.p[u+1]=n-l*i.h,i.p[u+2]=s-c*i.h;const f=Ae(i)*Math.PI*2,d=Math.acos(2*Ae(i)-1),m=Ae(i)*Math.PI*2,_=Math.sin(d)*Math.cos(f),p=Math.cos(d),g=Math.sin(d)*Math.sin(f),M=Math.sin(m/2);return i.q[h*4]=_*M,i.q[h*4+1]=p*M,i.q[h*4+2]=g*M,i.q[h*4+3]=Math.cos(m/2),i.w[u]=i.w[u+1]=i.w[u+2]=0,i.r[h]=r,i.inv[h]=1/Math.max(.01,o),i.kind[h]=t,i.strand[h]=-1,i.d[h]=0,i.c[h]=0,i.coat[h]=0,i.still[h]=0,i.contact[h]=0,i.speed[h]=0,i.flat[h]=0,i.seed[h]=Ae(i),h}function Cx(i,t,e,n,s,r,o,a,l){const c=i.strands++;let h=Ae(i)*Math.PI*2,u=s,f=o;const d=i.n;for(let m=0;m<e;m++){const _=zs(i,t,u,r+m*.002,f,a,l);if(_<0)break;i.strand[_]=c,h+=(Ae(i)-.5)*.7,u+=Math.cos(h)*n,f+=Math.sin(h)*n,m>0&&i.links.push([_-1,_,n,1]),m>1&&i.links.push([_-2,_,n*1.9,.12])}return d}function Rx(i,t=1){const e=i.container;if(e.type==="teppan")return Px(i,t);if(e.type!=="bowl")return 0;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*2.4+(Ae(i)-.5)*.35)*t,c=(1.25+Ae(i)*.55)*t,h=(-a*2.4+.18+(Ae(i)-.5)*.35)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Ae(i)-.5)*30,i.w[r+1]=(Ae(i)-.5)*12,i.w[r+2]=(Ae(i)-.5)*30,i.still[s]=0,n++}return n}function Px(i,t){const e=i.container;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*1.2+(Ae(i)-.5)*.25)*t,c=(.45+Ae(i)*.3)*t,h=(-a*1.2+(Ae(i)-.5)*.25)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Ae(i)-.5)*24,i.w[r+2]=(Ae(i)-.5)*24,i.still[s]=0,n++}return n}function Lx(i,t=null,e=!1,n=.36){if(i.container=qa(),e)return Ix(i);if(t){const r=(t.base*t.base+t.h*t.h)/(2*t.h);i.container.dome={x:t.x,z:t.z,R:r,cy:i.container.y+t.h-r}}i.friction=.7;const s=i.container;for(let r=0;r<i.n;r++){const o=r*3,a=(i.x[o]-Z.x)*n,l=(i.x[o+2]-Z.z)*n,c=s.y+.02+(i.x[o+1]-Z.bottomY)*2.2+Ae(i)*.03;i.x[o]=s.cx+a,i.x[o+1]=c,i.x[o+2]=s.cz+l,i.p[o]=i.x[o],i.p[o+1]=c+.002,i.p[o+2]=i.x[o+2],i.still[r]=0}}function Ix(i){const t=i.container,e=.078,n=[...Array(i.n).keys()].sort((r,o)=>i.r[o]-i.r[r]),s=[];for(const r of n){let o=null,a=-1;for(let c=0;c<80;c++){let h,u,f;do h=Ae(i)*2-1,u=Ae(i)**1.6,f=Ae(i)*2-1;while(h*h+u*u+f*f>1);const d=e-i.r[r];h=t.cx+h*d,u=t.y+i.r[r]+u*d*.9,f=t.cz+f*d;let m=1/0;for(const _ of s){const p=Math.hypot(h-i.x[_*3],u-i.x[_*3+1],f-i.x[_*3+2])-(i.r[r]+i.r[_]);p<m&&(m=p)}if(m>a&&(a=m,o=[h,u,f]),m>=0)break}const l=r*3;i.x[l]=o[0],i.x[l+1]=o[1],i.x[l+2]=o[2],i.p[l]=i.x[l],i.p[l+1]=i.x[l+1],i.p[l+2]=i.x[l+2],i.still[r]=0,s.push(r)}i.friction=.9;for(let r=0;r<i.n;r++)i.inv[r]=0}function pu(i,t,e){return(i*73856093^t*19349663^e*83492791)&Ws-1}function Dx(i){const{n:t,x:e,_hash:n,_start:s,_order:r}=i;s.fill(0);for(let a=0;a<t;a++){const l=pu(Math.floor(e[a*3]/ts),Math.floor(e[a*3+1]/ts),Math.floor(e[a*3+2]/ts));n[a]=l,s[l+1]++}for(let a=0;a<Ws;a++)s[a+1]+=s[a];const o=i._fill||(i._fill=new Int32Array(Ws));o.set(s.subarray(0,Ws));for(let a=0;a<t;a++)r[o[n[a]]++]=a}function Ux(i){const{n:t,x:e,p:n,r:s,inv:r,strand:o,_start:a,_order:l}=i,c=i.container.type==="plate"?.7:0;for(let h=0;h<t;h++){const u=Math.floor(e[h*3]/ts),f=Math.floor(e[h*3+1]/ts),d=Math.floor(e[h*3+2]/ts);for(let m=-1;m<=1;m++)for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const g=pu(u+m,f+_,d+p);for(let M=a[g];M<a[g+1];M++){const v=l[M];if(v<=h||o[h]>=0&&o[h]===o[v]&&Math.abs(h-v)<=2)continue;const y=h*3,R=v*3,E=e[R]-e[y],T=e[R+1]-e[y+1],L=e[R+2]-e[y+2],I=(s[h]+s[v])*.92,x=E*E+T*T+L*L;if(x>=I*I||x<1e-12)continue;const S=Math.sqrt(x),k=r[h]+r[v];if(k===0)continue;const F=(I-S)/S/k*.8;if(e[y]-=E*F*r[h],e[y+1]-=T*F*r[h],e[y+2]-=L*F*r[h],e[R]+=E*F*r[v],e[R+1]+=T*F*r[v],e[R+2]+=L*F*r[v],c){const G=E/S,X=T/S,B=L/S,j=e[y]-n[y]-(e[R]-n[R]),V=e[y+1]-n[y+1]-(e[R+1]-n[R+1]),gt=e[y+2]-n[y+2]-(e[R+2]-n[R+2]),_t=j*G+V*X+gt*B,xt=(j-G*_t)*c/k,Zt=(V-X*_t)*c/k,Qt=(gt-B*_t)*c/k;e[y]-=xt*r[h],e[y+1]-=Zt*r[h],e[y+2]-=Qt*r[h],e[R]+=xt*r[v],e[R+1]+=Zt*r[v],e[R+2]+=Qt*r[v]}}}}}function Nx(i){const{x:t,inv:e,links:n}=i;for(let s=0;s<n.length;s++){const[r,o,a,l]=n[s],c=r*3,h=o*3,u=t[h]-t[c],f=t[h+1]-t[c+1],d=t[h+2]-t[c+2],m=Math.sqrt(u*u+f*f+d*d)||1e-6;if(l<1&&m>a)continue;const _=e[r]+e[o];if(_===0)continue;const p=(m-a)/m/_*l;t[c]+=u*p*e[r],t[c+1]+=f*p*e[r],t[c+2]+=d*p*e[r],t[h]-=u*p*e[o],t[h+1]-=f*p*e[o],t[h+2]-=d*p*e[o]}}function kx(i){const t=i.container,{n:e,x:n,p:s,r,contact:o}=i,a=i.friction;for(let l=0;l<e;l++){if(i.inv[l]===0){o[l]=1;continue}const c=l*3;let h=!1,u=0,f=1,d=0;if(t.type==="teppan"){const m=t.y+r[l]*.7;n[c+1]<m&&(n[c+1]=m,h=!0);const _=t.hw-r[l],p=t.hd-r[l];n[c]<t.cx-_?n[c]=t.cx-_:n[c]>t.cx+_&&(n[c]=t.cx+_),n[c+2]<t.cz-p?n[c+2]=t.cz-p:n[c+2]>t.cz+p&&(n[c+2]=t.cz+p)}else if(t.type==="bowl"){const m=n[c]-t.cx,_=n[c+1]-t.cy,p=n[c+2]-t.cz,g=Math.sqrt(m*m+_*_+p*p)||1e-6,M=t.R-r[l];n[c+1]<t.rimY+r[l]&&g>M&&(n[c]=t.cx+m/g*M,n[c+1]=t.cy+_/g*M,n[c+2]=t.cz+p/g*M,u=-m/g,f=-_/g,d=-p/g,h=!0);const v=n[c]-t.cx,y=n[c+2]-t.cz,R=Math.sqrt(v*v+y*y),E=t.rimR-r[l]*1.2;n[c+1]>=t.rimY&&R>E&&(n[c]=t.cx+v/R*E,n[c+2]=t.cz+y/R*E)}else{const m=n[c]-t.cx,_=n[c+2]-t.cz,p=Math.sqrt(m*m+_*_)||1e-6,g=Math.min(1,Math.max(0,(p-t.wellR)/(t.r-t.wellR))),M=t.y+t.lip*g*g*(3-2*g)+r[l]*.7;if(n[c+1]<M){n[c+1]=M,h=!0;const y=g>0&&g<1?t.lip*6*g*(1-g)/(t.r-t.wellR):0,R=Math.sqrt(1+y*y);u=-m/p*y/R,f=1/R,d=-_/p*y/R}const v=t.r-r[l];if(p>v&&(n[c]=t.cx+m/p*v,n[c+2]=t.cz+_/p*v),t.spheres)for(const y of t.spheres){const R=n[c]-y.x,E=n[c+1]-y.cy,T=n[c+2]-y.z,L=Math.sqrt(R*R+E*E+T*T)||1e-6,I=y.R+r[l]*.7;L<I&&(n[c]=y.x+R/L*I,n[c+1]=y.cy+E/L*I,n[c+2]=y.z+T/L*I,h=!0,u=R/L,f=E/L,d=T/L)}if(t.puck){const y=t.puck,R=n[c]-y.x,E=n[c+2]-y.z;R*R+E*E<y.r*y.r&&n[c+1]<y.top+r[l]*.7&&(n[c+1]=y.top+r[l]*.7,h=!0,u=0,f=1,d=0)}if(t.dome){const y=t.dome,R=n[c]-y.x,E=n[c+1]-y.cy,T=n[c+2]-y.z,L=Math.sqrt(R*R+E*E+T*T)||1e-6,I=y.R+r[l]*.7;L<I&&n[c+1]>t.y&&(n[c]=y.x+R/L*I,n[c+1]=y.cy+E/L*I,n[c+2]=y.z+T/L*I,h=!0,u=R/L,f=E/L,d=T/L)}}if(o[l]=h?1:0,h){const m=n[c]-s[c],_=n[c+1]-s[c+1],p=n[c+2]-s[c+2],g=m*u+_*f+p*d,M=m-u*g,v=_-f*g,y=p-d*g;n[c]-=M*a,n[c+1]-=v*a,n[c+2]-=y*a}}}function Fx(i,t){const e=i.spatula;if(!e.on)return;const{n,x:s,r}=i,o=e.px+(e.x-e.px)*t,a=e.py+(e.y-e.py)*t,l=e.pz+(e.z-e.pz)*t,c=(e.x-e.px)/3;(e.y-e.py)/3;const h=(e.z-e.pz)/3,u=Math.sqrt(c*c+h*h);for(let f=0;f<n;f++){const d=f*3,m=s[d]-o,_=s[d+1]-a,p=s[d+2]-l;if(_>.06||_<-.03)continue;const g=e.r+r[f],M=m*m+p*p;if(M>g*g)continue;const y=1-(Math.sqrt(M)||1e-6)/g;s[d]+=c*(.35+y*.6),s[d+2]+=h*(.35+y*.6),s[d+1]+=u*.5*y,i.still[f]=0}}function zx(i,t){const n=Math.min(t,.03333333333333333)/3;i.h=n;const{x:s,p:r}=i,o=i.container.type==="plate"?.86:.992;for(let c=0;c<3;c++){for(let h=0;h<i.n;h++){if(i.inv[h]===0)continue;const u=h*3,f=(s[u]-r[u])*o,d=(s[u+1]-r[u+1])*o,m=(s[u+2]-r[u+2])*o;r[u]=s[u],r[u+1]=s[u+1],r[u+2]=s[u+2],s[u]+=f,s[u+1]+=d-Ex*n*n,s[u+2]+=m}Fx(i,(c+1)/3),Dx(i);for(let h=0;h<2;h++)Nx(i),Ux(i),kx(i)}const a=i.spatula;a.px=a.x,a.py=a.y,a.pz=a.z;const l=n*3;for(let c=0;c<i.n;c++){const h=c*3,u=(s[h]-r[h])/n,f=(s[h+1]-r[h+1])/n,d=(s[h+2]-r[h+2])/n,m=Math.sqrt(u*u+f*f+d*d);if(i.speed[c]=m,m<.03?i.still[c]+=l:i.still[c]=Math.max(0,i.still[c]-l*4),i.container.type==="plate"&&i.still[c]>.2&&i.inv[c]!==0&&(i.inv[c]=0),i.contact[c]){const _=i.r[c];i.w[h]+=(d/_-i.w[h])*.3,i.w[h+2]+=(-u/_-i.w[h+2])*.3,i.w[h+1]*=.8}i.w[h]*=.985,i.w[h+1]*=.985,i.w[h+2]*=.985,i.flat[c]||Ox(i.q,c*4,i.w[h],i.w[h+1],i.w[h+2],l)}}function Ox(i,t,e,n,s,r){const o=i[t],a=i[t+1],l=i[t+2],c=i[t+3],h=e*r*.5,u=n*r*.5,f=s*r*.5;let d=o+(h*c+u*l-f*a),m=a+(u*c+f*o-h*l),_=l+(f*c+h*a-u*o),p=c-(h*o+u*a+f*l);const g=Math.sqrt(d*d+m*m+_*_+p*p)||1;i[t]=d/g,i[t+1]=m/g,i[t+2]=_/g,i[t+3]=p/g}function Bx(i,t,e,n,s,r){if(Math.abs(s)<1e-5)return null;const o=(Ct.topY-t)/s;if(!(o>0))return null;let a=i+n*o,l=e+r*o;const c=Ct.w/2-.03,h=Ct.d/2-.03;return Math.abs(a-Ct.x)>c*1.5||Math.abs(l-Ct.z)>h*1.5?null:(a=Math.max(Ct.x-c,Math.min(Ct.x+c,a)),l=Math.max(Ct.z-h,Math.min(Ct.z+h,l)),{x:a,y:Ct.topY,z:l})}function Hx(i,t,e,n,s,r){const o=Z.x,a=Z.cy,l=Z.z,c=i-o,h=t-a,u=e-l,f=c*n+h*s+u*r,d=c*c+h*h+u*u-Z.R*Z.R,m=f*f-d;if(m<0)return null;const _=-f+Math.sqrt(m);let p=i+n*_,g=t+s*_,M=e+r*_;if(g>Z.rimY){const v=(Z.rimY-t)/s;if(!(v>0))return null;p=i+n*v,M=e+r*v;const y=p-o,R=M-l,E=Math.hypot(y,R);if(E>Z.rimR*1.6)return null;const T=Math.min(1,(Z.rimR-.02)/E);p=o+y*T,M=l+R*T,g=a-Math.sqrt(Math.max(0,Z.R*Z.R-(p-o)**2-(M-l)**2))}return{x:p,y:g,z:M}}class Gx{constructor(){this.wok=new Sx,this.spatula=new wx,this.group=new ie,this.group.add(this.wok.group,this.spatula.group),this.view="wok",this.tossLabel="TOSS",this.kind="wok"}container(){return du()}surfaceRay(t){const e=t.origin,n=t.direction,s=Hx(e.x,e.y,e.z,n.x,n.y,n.z);if(s)return s;if(Math.abs(n.y)<1e-5)return null;const r=(Z.rimY-e.y)/n.y;let o=e.x+n.x*r-Z.x,a=e.z+n.z*r-Z.z;const l=Math.hypot(o,a)||1,c=Z.rimR-.025;l>c&&(o*=c/l,a*=c/l);const h=Z.cy-Math.sqrt(Math.max(0,Z.R*Z.R-o*o-a*a));return{x:Z.x+o,y:h,z:Z.z+a}}dropPoint(){return new C(Z.x,Z.rimY,Z.z)}spawn(t,e,n=0){return{x:Z.x+n*.05+(Math.random()-.5)*.06,y:Z.rimY+.03+Math.random()*.04,z:Z.z+.03+(Math.random()-.5)*.06}}stirPoint(t){const e=t*4.2,n=Z.x+Math.sin(e)*.1,s=Z.z+Math.sin(e*2)*.06;return{x:n,y:Z.cy-Math.sqrt(Z.R*Z.R-(n-Z.x)**2-(s-Z.z)**2),z:s}}toss(){this.wok.toss()}update(t,e,n,s){this.wok.update(t,e),this.spatula.update(t,n,s)}}class Vx{constructor(){this.group=new ie,this.view="teppan",this.tossLabel="FLIP",this.kind="teppan";const{w:t,d:e,topY:n}=Ct,s=new ce({map:lu(),metalness:.6,roughness:.4,clearcoat:.4,clearcoatRoughness:.3});this.steel=s;const r=new pt(new Ft(t,.012,e),s);r.position.set(Ct.x,n-.006,Ct.z),r.receiveShadow=!0,r.castShadow=!0;const o=new kt({color:11054514,metalness:1,roughness:.4}),a=new pt(new Ft(t+.02,n-.012-lt.y,e+.02),o);a.position.set(Ct.x,(n-.012+lt.y)/2,Ct.z);const l=new kt({color:9343896,metalness:1,roughness:.35,side:te}),c=new pt(new Ft(t+.02,.05,.004),l);c.position.set(Ct.x,n+.025,Ct.z-e/2-.008),this.group.add(r,a,c);for(const u of[-1,1]){const f=new pt(new Ft(.004,.035,e+.02),l);f.position.set(Ct.x+u*(t/2+.008),n+.0175,Ct.z),this.group.add(f)}this.oilFilm=new pt(new hn(.12,32),new ce({color:5915684,alphaMap:Kr(),roughness:.05,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.22,depthWrite:!1,metalness:0})),this.oilFilm.rotation.x=-Math.PI/2,this.oilFilm.position.set(Ct.x,n+6e-4,Ct.z),this.oilFilm.visible=!1,this.sauceFilm=new pt(new hn(.1,32),new ce({color:3807754,alphaMap:Kr(),roughness:.1,clearcoat:1,transparent:!0,opacity:.8,depthWrite:!1,metalness:0})),this.sauceFilm.rotation.x=-Math.PI/2,this.sauceFilm.position.set(Ct.x,n+8e-4,Ct.z),this.sauceFilm.visible=!1,this.group.add(this.oilFilm,this.sauceFilm),this.vents=[];const h=new Te({color:new ct(.35,.55,1.6),transparent:!0,opacity:0,depthWrite:!1});for(let u=0;u<9;u++){const f=new pt(new Re(.028,.008),h);f.position.set(Ct.x-t/2+.05+u*((t-.1)/8),(n+lt.y)/2-.004,Ct.z+e/2+.0112),this.group.add(f),this.vents.push(f)}this.blue=h,this.light=new ds(16751178,0,.7,2),this.light.position.set(Ct.x,lt.y+.02,Ct.z+e/2+.1),this.group.add(this.light),this.spatula=new Wx,this.group.add(this.spatula.group),this.jolt=0}container(){return Ax()}surfaceRay(t){const e=t.origin,n=t.direction,s=Bx(e.x,e.y,e.z,n.x,n.y,n.z);if(s)return s;if(Math.abs(n.y)<1e-5)return null;const r=(Ct.topY-e.y)/n.y,o=Ct.w/2-.03,a=Ct.d/2-.03;return{x:Math.max(Ct.x-o,Math.min(Ct.x+o,e.x+n.x*r)),y:Ct.topY,z:Math.max(Ct.z-a,Math.min(Ct.z+a,e.z+n.z*r))}}dropPoint(){return new C(Ct.x,Ct.topY+.02,Ct.z)}spawn(t,e,n=0){const s=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*.09;return{x:Ct.x+n*.03+Math.cos(s)*r,y:Ct.topY+.03+Math.random()*.03,z:Ct.z+Math.sin(s)*r*.7}}stirPoint(t){const e=t*3.6;return{x:Ct.x+Math.sin(e)*.12,y:Ct.topY,z:Ct.z+Math.sin(e*2)*.07}}toss(){this.jolt=1}update(t,e,n,s){if(this.oilFilm.visible=e.oil>.02,this.oilFilm.visible){const r=.6+Math.min(1.2,e.oil)*.9;this.oilFilm.scale.set(r*1.3,r,1)}if(this.sauceFilm.visible=e.sauce>.01,this.sauceFilm.visible){const r=.4+Math.min(1,e.sauce)*1.1;this.sauceFilm.scale.set(r*1.3,r,1)}this.blue.opacity=Math.min(.9,e.flame*1.2),this.light.intensity=e.flame*.6,this.jolt=Math.max(0,this.jolt-t*4),this.spatula.update(t,n,s,this.jolt)}}class Wx{constructor(){const t=new kt({color:12896460,metalness:1,roughness:.28}),e=new kt({color:7028510,roughness:.6,metalness:0}),n=()=>{const s=new ie,r=new pt(new Ft(.075,.0015,.06),t);r.position.set(0,.001,-.01);const o=new pt(new Ft(.012,.002,.05),t);o.position.set(0,.012,.035),o.rotation.x=-.45;const a=new pt(new zt(.011,.012,.1,10),e);a.rotation.x=Math.PI/2-.45,a.position.set(0,.04,.1);for(const l of[r,o,a])l.castShadow=!0,s.add(l);return s};this.a=n(),this.b=n(),this.group=new ie,this.group.add(this.a,this.b),this.group.visible=!1,this.pos=new C(Ct.x+.1,Ct.topY,Ct.z+.1)}update(t,e,n,s=0){const r=e?new C(e.x,e.y,e.z):new C(Ct.x+.12,Ct.topY,Ct.z+.12);this.pos.lerp(r,1-Math.exp(-t*(e?26:8))),this.a.position.copy(this.pos),this.a.rotation.set(-s*.9,.25,0),this.b.position.set(this.pos.x-.09,this.pos.y+s*.02,this.pos.z+.02),this.b.rotation.set(-s*.9,-.3,0)}}function Xx(i=!1){const t=nt.r,e=nt.wellR,n=i?nt.lip*.55:nt.lip,s=.0015;return Zs([[0,-.01],[e*.62,-.01],[e*.66,-.006],[e*.7,-.003],[e+.01,-.002],[t-.01,n-.004],[t,n-.002],[t+.001,n],[t-.004,n+.001],[t-.012,n*.85],[e+.012,.004],[e,s],[0,s]],56)}const Yo={};function qx(){if(Yo.m)return Yo.m;const i={};return i.plate=new ce({color:15921386,roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:te}),i.plateRim=new ce({map:ix(),roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:te}),i.plateRim.map.repeat.set(10,1),i.leaf=new ce({map:nx(),roughness:.35,clearcoat:.6,clearcoatRoughness:.2,metalness:0,side:te}),i.glaze=new ce({map:lx(),roughness:.25,clearcoat:1,clearcoatRoughness:.1,metalness:0,side:te}),i.flat=new ce({color:15525594,map:cu(),roughness:.3,clearcoat:.9,clearcoatRoughness:.12,metalness:0,side:te}),i.fune=new kt({map:cx(),roughness:.75,metalness:0,side:te}),i.paper=new kt({color:16052194,roughness:.9,metalness:0}),Yo.m=i,i}function Yx(i=8){const t=[],e=i/2;for(let n=0;n<i;n++){const s=n%e,r=Math.floor(n/e);t.push([nt.x+(s-(e-1)/2)*.039,nt.z+(r-.5)*.04])}return t}const Br={w:.19,d:.105,h:.022,floor:.004};function $x(i="thai",{leaf:t=!1}={}){const e=qx(),n=new ie;n.name="plateware";const s=nt.wellY-.0015;if(i==="fune"){const{w:a,d:l,h:c,floor:h}=Br;n.add(et(new Ft(a,h,l),e.fune,nt.x,nt.wellY-.006+h/2,nt.z));const u=(f,d,m,_)=>{const p=et(new Ft(f,c,.0025),e.fune,d,nt.wellY-.006+c/2,m,{ry:_});p.rotation.x=0,n.add(p)};return u(a,nt.x,nt.z-l/2,0),u(a,nt.x,nt.z+l/2,0),u(l,nt.x-a/2,nt.z,Math.PI/2),u(l,nt.x+a/2,nt.z,Math.PI/2),n.add(et(new Re(a-.01,l-.01).rotateX(-Math.PI/2),e.paper,nt.x,nt.wellY-.0015,nt.z,{cast:!1})),n}const r=i==="flat",o=i==="glaze"?e.glaze:r?e.flat:e.plate;if(n.add(et(Xx(r),o,nt.x,s,nt.z)),i==="thai"){const a=Zs([[nt.r-.012,nt.lip*.85+7e-4],[nt.r-.004,nt.lip+.0017]],56);n.add(et(a,e.plateRim,nt.x,s,nt.z,{cast:!1}))}if(t){const a=new Ti,l=no(12);for(let f=0;f<=40;f++){const d=f/40*Math.PI*2,m=nt.wellR*(1.08+(l()-.5)*.05);f===0?a.moveTo(Math.cos(d)*m,Math.sin(d)*m):a.lineTo(Math.cos(d)*m,Math.sin(d)*m)}const c=new Js(a,1),h=c.attributes.uv,u=c.attributes.position;for(let f=0;f<h.count;f++)h.setXY(f,u.getX(f)/(nt.wellR*2.4)+.5,u.getY(f)/(nt.wellR*2.4)+.5);c.rotateX(-Math.PI/2);for(let f=0;f<u.count;f++)u.setY(f,Math.max(0,Math.hypot(u.getX(f),u.getZ(f))-nt.wellR)*.5);c.computeVertexNormals(),n.add(et(c,e.leaf,nt.x,nt.wellY+.0012,nt.z,{ry:.4,cast:!1}))}return n}function Kx(){const i=uu();return i.woodDark=new kt({map:qo(!0),roughness:.7,metalness:0}),i.woodLight=new kt({map:qo(!1),roughness:.6,metalness:0}),i.woodLight.map.repeat.set(2,1),i.roof=new kt({color:2762276,roughness:.8,metalness:0,side:te}),i.noren=new kt({map:Yc("焼きそば"),roughness:.9,metalness:0,side:te}),i.noren2=new kt({map:Yc("たこ焼"),roughness:.9,metalness:0,side:te}),i.lanternA=new Te({map:$c("祭"),color:new ct(1.5,1.4,1.3)}),i.lanternB=new Te({map:$c("焼"),color:new ct(1.5,1.4,1.3)}),i.lanternCap=new kt({color:1380880,roughness:.6,metalness:0}),i.miniLantern=new Te({color:new ct(2.2,.8,.35)}),i.backdrop=new Te({map:hx(),fog:!1,color:12105912}),i.backdrop.map.wrapS=os,i.backdrop.map.repeat.set(2,1),i.stone=new kt({color:9210502,map:su(),roughness:.32,metalness:0}),i.stone.map.repeat.set(9,9),i.sauceBottle=new ce({color:3808270,roughness:.25,clearcoat:1,metalness:0}),i.mayoBottle=new ce({color:15852464,roughness:.3,clearcoat:.8,metalness:0,transmission:0}),i.redCap=new kt({color:13116188,roughness:.4,metalness:0}),i.greenCap=new kt({color:3111466,roughness:.4,metalness:0}),i.aonori=new kt({color:4156190,roughness:.8,metalness:0}),i.ginger=new ce({color:14165578,roughness:.35,clearcoat:.8,metalness:0}),i.bonitoBox=new kt({color:13214842,roughness:.7,metalness:0}),i.bench=new kt({map:qo(!1),color:11571312,roughness:.7,metalness:0}),i}function Zx(i,t){const e=lt.y,n=lt.x1-lt.x0,s=lt.z1-lt.z0,r=(lt.z0+lt.z1)/2;i.add(et(new Ft(n,.04,s),t.woodLight,0,e-.02,r));for(const o of[lt.z0+.02,lt.z1-.03])i.add(et(new Ft(n-.02,e-.06,.03),t.woodDark,0,(e-.06)/2+.02,o));for(const o of[lt.x0+.015,lt.x1-.015])i.add(et(new Ft(.03,e-.06,s-.04),t.woodDark,o,(e-.06)/2+.02,r));for(const o of[lt.x0-.02,lt.x1+.02]){const a=new Cn(.24,.03,8,30);a.rotateY(Math.PI/2),i.add(et(a,t.woodDark,o,.25,r));for(let l=0;l<8;l++){const c=new Ft(.015,.46,.02);c.rotateX(l/8*Math.PI),i.add(et(c,t.woodDark,o,.25,r,{cast:!1}))}}i.add(et(new Ft(n-.08,.025,On.z1-On.z0),t.woodLight,0,e+.12,(On.z0+On.z1)/2));for(const o of[-n/2+.06,0,n/2-.06])i.add(et(new Ft(.03,.12,.03),t.woodDark,o,e+.06,(On.z0+On.z1)/2))}function jx(i,t){for(const h of[-1.12,1.12])for(const u of[-.62,.62])i.add(et(new Ft(.06,2.45,.06),t.woodDark,h,2.45/2,u));for(const h of[-1,1]){const u=new Ft(2.5,.025,.78),f=et(u,t.roof,0,2.45+.16,h*.34,{cast:!1});f.rotation.x=h*.38,i.add(f)}i.add(et(new Ft(2.5,.05,.05),t.woodDark,0,2.45+.3,0));const o=new Re(2.1,.42,1,1);i.add(et(o,t.noren,0,2.45-.2,-.62-.02,{ry:Math.PI,cast:!1}));const a=new de(.16,20,14);a.scale(1,1.3,1);const l=new zt(.1,.1,.05,16);for(const[h,u]of[[-1.12+.05,t.lanternA],[1.12-.05,t.lanternB]])i.add(et(a,u,h,2.45-.42,-.62-.12,{ry:Math.PI,cast:!1})),i.add(et(l,t.lanternCap,h,2.45-.2,-.62-.12,{cast:!1})),i.add(et(l,t.lanternCap,h,2.45-.64,-.62-.12,{cast:!1}));const c=new de(.035,10,8);c.scale(1,1.3,1);for(let h=0;h<11;h++){const u=h/10,f=-1.12+u*1.12*2;i.add(et(c,t.miniLantern,f,2.45-.06-Math.sin(u*Math.PI)*.1,-.62-.06,{cast:!1}))}}function Jx(i,t){i.add(et(new Ft(ve.r*2.1,ve.h,ve.r*1.55),t.woodLight,ve.x,lt.y+ve.h/2,ve.z));for(const[r,o]of[["oil",t.oil],["sauce",t.sauce]]){const a=nu[r],l=.08;i.add(et(Zs([[0,.002],[a.r-.004,.002],[a.r,.01],[a.r,l],[a.r+.004,l+.002],[a.r-.003,l]],32),t.steel,a.x,lt.y,a.z));const c=new hn(a.r-.003,32);c.rotateX(-Math.PI/2),i.add(et(c,o,a.x,lt.y+l*.78,a.z,{cast:!1})),i.add(et(new zt(.005,.005,.18,8),t.woodDark,a.x+.02,lt.y+l+.05,a.z+.02,{rz:-.4}))}const e=pn.x,n=pn.z,s=Zs([[0,0],[.028,0],[.03,.02],[.03,.13],[.018,.16],[.006,.175],[0,.18]],20);i.add(et(s,t.sauceBottle,e-.07,lt.y,n-.03)),i.add(et(s,t.mayoBottle,e-.01,lt.y,n-.05)),i.add(et(new gl(.008,.03,10),t.redCap,e-.01,lt.y+.19,n-.05)),i.add(et(new zt(.028,.028,.09,16),t.aonori,e+.06,lt.y+.045,n-.04)),i.add(et(new zt(.03,.03,.015,16),t.greenCap,e+.06,lt.y+.097,n-.04)),i.add(et(new zt(.04,.036,.05,18),t.ginger,e+.02,lt.y+.025,n+.07)),i.add(et(new Ft(.1,.06,.07),t.bonitoBox,e-.07,lt.y+.03,n+.07))}function Qx(i,t){const e=new Re(16,16);e.rotateX(-Math.PI/2),i.add(et(e,t.stone,0,0,0,{cast:!1})),i.add(et(new Ft(1.6,.05,.3),t.bench,0,.44,-1.3));for(const r of[-.7,.7])i.add(et(new Ft(.05,.42,.26),t.bench,r,.21,-1.3));const n=[["たこ焼","#d8261c","#ffffff",-1.55,-.9],["お好み焼","#f2c230","#1a1a1a",1.5,-.95],["焼きそば","#1d4fa8","#ffffff",-2.1,-1.6]];for(const[r,o,a,l,c]of n){const h=new kt({map:ax(r,o,a),roughness:.85,metalness:0,side:te});i.add(et(new Re(.34,1.3),h,l,1.4,c,{cast:!1,ry:.2})),i.add(et(new zt(.012,.012,2.2,8),t.pole,l-.18,1.1,c))}const s=no(9);for(const[r,o]of[[-2.8,-3.4],[2.6,-3.8],[-3.8,-6.2],[3.9,-6.6],[.3,-7.8]]){i.add(et(new Ft(1.5,.9,.8),t.woodDark,r,.45,o,{cast:!1})),i.add(et(new Ft(1.8,.05,1.2),t.roof,r,2,o,{cast:!1}));for(let a=0;a<4;a++)i.add(et(new de(.06,8,6),t.miniLantern,r-.6+a*.4,1.85-s()*.05,o+.6,{cast:!1}))}}function tv(i){const t=[{lines:["たこ焼き"],x:-2.1,y:2.7,z:-3.2,w:1.3,h:.45,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["お好み焼"],x:2.4,y:3,z:-4,w:1.3,h:.42,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["大阪"],x:3.5,y:2.3,z:-2.6,w:.8,h:.45,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ラーメン"],x:-3.5,y:2.1,z:-2.2,w:1,h:.4,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#c21c1c",ry:.6}];for(const e of t){const n=ru(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new pt(new Re(e.w,e.h),new Te({map:n,color:new ct(1.5,1.5,1.5),fog:!1}));s.position.set(e.x,e.y,e.z),e.ry&&(s.rotation.y=e.ry),i.add(s)}}function ev(i,t){const e=new pt(new zt(8.5,8.5,7,64,1,!0),t.backdrop);e.material.side=Oe,e.position.set(0,3.1,0),e.rotation.y=Math.PI*.5,i.add(e)}function nv(i=Kx()){const t=new ie;Zx(t,i),jx(t,i),Jx(t,i),Qx(t,i),tv(t),ev(t,i);const e=fu(t);return e.name="stall:osaka",{group:e,materials:i}}const js=24,iv=275;function jc(){return{flame:0,T:js,oil:0,sauce:0,sauceLeft:0,load:0,tosses:0,hei:0,flare:0}}function sv(i,t){const e=js+i.flame*(iv-js),n=i.flame>.05?2.6+Math.min(3,i.load*.06):10;i.T+=(e-i.T)*(1-Math.exp(-t/n)),i.flare=Math.max(0,i.flare-t*2.2),i.sauceLeft>0&&(i.sauceLeft=Math.max(0,i.sauceLeft-t*.006*vs(i.T)))}function Jc(i,t){i.load+=t,i.T-=(i.T-js)*Math.min(.45,t*.028)}function rv(i,t){i.T-=(i.T-js)*Math.min(.5,t*.35)}function vs(i){return Math.max(0,Math.min(1.45,(i-95)/125))}function ov(i,t,e,n){if(!i.container.heated)return;const s=vs(t.T),r=t.T,o=t.oil<.2,a=i.container.rimY;let l=0;for(let c=0;c<i.n;c++){const h=n[i.kind[c]];if(!h||h.garnish)continue;const u=i.x[c*3+1],f=i.contact[c]?1:u<a?.45:0;let d=s*f/h.cookTime;if(t.sauceLeft>0&&i.coat[c]<1&&u<a){const m=e*(.05+Math.min(1.2,i.speed[c])*.9)*(h.needsSauce?1:Math.min(1,(h.coatTint??.32)*1.4)),_=Math.min(m,1-i.coat[c]);i.coat[c]+=_,l+=_}h.needsSauce&&(d*=Math.min(1,i.coat[c]/.45)),i.d[c]>h.band[1]&&(d*=.12),i.d[c]+=d*e,i.contact[c]&&r>180&&i.still[c]>1.5&&(i.c[c]+=e*(r-180)/90*.08*(o?2:1)*(1-.6*Math.min(1,i.coat[c]))),i.d[c]>h.burnAt&&i.contact[c]&&(i.c[c]+=e*(i.d[c]-h.burnAt)*.08*(1-Math.min(1,i.coat[c]*1.5))),i.c[c]>1&&(i.c[c]=1)}l>0&&(t.sauceLeft=Math.max(0,t.sauceLeft-l/360))}function av(i,t){if(!i.container.heated||i.n===0)return 0;let e=0;for(let s=0;s<i.n;s++)e+=i.contact[s];const n=vs(t.T);return Math.min(1,n*(.25+Math.min(1,e/60)*.75)+(t.sauceLeft>0?n*.25:0))}function Qc(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,o=t>>16&255,a=t>>8&255,l=t&255;return[n+(o-n)*e,s+(a-s)*e,r+(l-r)*e]}const Lr=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function mu(i,t,e,n,s,r){let o;if(i.needsSauce){const l=Lr(n*.75+Math.min(1,t)*.25);o=Qc(i.raw,i.cooked,l)}else o=Qc(i.raw,i.cooked,Lr(Math.min(1,t)));const a=i.band?i.band[1]:1;if(t>a&&i.burnAt){const l=Lr((t-a)/(i.burnAt-a)),c=[i.over>>16&255,i.over>>8&255,i.over&255];o=[o[0]+(c[0]-o[0])*l,o[1]+(c[1]-o[1])*l,o[2]+(c[2]-o[2])*l]}if(!i.needsSauce&&n>0&&s!=null){const l=[s>>16&255,s>>8&255,s&255],c=i.coatTint??.32,h=Math.min(c,n*c);o=[o[0]+(l[0]-o[0])*h,o[1]+(l[1]-o[1])*h,o[2]+(l[2]-o[2])*h]}if(e>0){const l=[36,21,12],c=Lr(e);o=[o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c]}return r[0]=o[0],r[1]=o[1],r[2]=o[2],r}function Ml(i,t){const[e,n]=t;return i>=e&&i<=n?1:i<e?Math.max(0,1-(e-i)/.55):Math.max(0,1-(i-n)/.7)}function lv(i,t){if(!t.charWant)return 1-Math.min(1,i*1.6);const[e,n]=t.charWant;return i<e?.65+.35*(i/e):i<=n?1:Math.max(0,1-(i-n)*2.2)}function cv(i,t,e){const n=i.length;if(!n)return{score:0,meanD:0,meanC:0,verdict:"missing"};let s=0,r=0,o=0;for(let h=0;h<n;h++)s+=Ml(i[h],e.band)*lv(t[h],e),r+=i[h],o+=t[h];const a=r/n,l=o/n;let c="perfect";return(e.charWant?l>e.charWant[1]+.2:l>.35)?c="burnt":a<e.band[0]-.3?c="raw":a<e.band[0]?c="under":a>e.band[1]+.25?c="over":a>e.band[1]?c="bitOver":e.charWant&&l<e.charWant[0]&&(c="pale"),{score:s/n,meanD:a,meanC:l,verdict:c}}function bl(i,t){const[e,n]=t;return i>=e&&i<=n?1:Math.max(0,1-(i<e?e-i:i-n)/.3)}const hv={raw:{prawn:"The prawns are still grey in the middle. Pink, darling. Pink.",noodles:"These noodles are still stiff. They needed the sauce and a bit more time.",wideNoodles:"The noodles are still stiff. Sauce, then heat.",egg:"The egg is still runny. Let it set before you move on.",tofu:"The tofu never saw the heat. It wants a golden crust.",garlic:"Raw garlic. That bite will stay with the customer all night.",rice:"The rice is still cold in the middle. Fry it properly.",porkBelly:"The pork is still pink. Give it the heat.",sobaNoodles:"The noodles never took the sauce. Keep flipping.",mince:"That chicken is still pink. Nobody wants that.",chickenSlice:"That chicken is still pink. Nobody wants that.",basil:"The basil never went in hot. It should be just wilted.",okonomiBase:"Pale and raw in the middle. It needs longer on each side.",takoBall:"Raw batter in the middle. Keep turning them on the heat.",_:"Some of this is still raw."},under:{prawn:"The prawns needed another moment.",noodles:"Noodles a little firm. Almost there.",tofu:"Tofu could have gone a shade more golden.",rice:"The rice wanted a little longer. Crispier, please.",mince:"The chicken needed another moment.",chickenSlice:"The chicken needed another moment.",_:"A touch underdone."},over:{prawn:"Rubbery prawns. They cook in seconds, not minutes.",sprouts:"The sprouts have gone limp. They should snap.",chives:"The chives went dark and sad. In at the very end, quick toss, out.",scallion:"The spring onions went dark. In at the end, one toss.",basil:"The basil has cooked to nothing. Off the heat, just wilt it.",gailan:"The broccoli has gone soft. It should still have a crunch.",cabbage:"The cabbage has gone limp. It should still have a bite.",egg:"The egg is dry.",mince:"Dry chicken. Take it off sooner.",chickenSlice:"Dry chicken. Take it off sooner.",_:"Some of it is overcooked."},burnt:{garlic:"Burnt garlic. I can taste it from over here.",okonomiBase:"Burnt on the bottom. Flip it sooner.",takoBall:"Burnt patches. Turn them sooner.",birdChilli:"Burnt chilli. The whole market is coughing.",noodles:"The noodles stuck and scorched. Keep them moving.",wideNoodles:"Char, yes. Charcoal, no. Toss them sooner.",rice:"The rice caught on the bottom. Keep it moving.",_:"Something caught on the wok. Keep it moving."},pale:{wideNoodles:"No char on the noodles. Spread them out and let the wok kiss them.",_:"It wanted a bit of colour."}};function uv(i,t){const e=hv[i];return e?e[t]||e._:null}const fv={heiGood:"Proper wok hei. Smoky, like Yaowarat at midnight.",heiNone:"Toss it! The flame is what makes it taste of the street."};function dv(i,t,e,n,s=fv){const r=[];let o=0,a=0;const l={};for(const[I,x]of Object.entries(i.weights)){const S=n.pieces[I]||{d:[],c:[]},k=cv(S.d,S.c,t[I]);l[I]=k,a+=k.score*x,o+=x}const c=o?a/o:0,h=Object.entries(l).filter(([,I])=>I.verdict!=="perfect"&&I.verdict!=="bitOver").sort((I,x)=>I[1].score*i.weights[I[0]]-x[1].score*i.weights[x[0]]);for(const[I,x]of h.slice(0,2)){const S=x.verdict==="missing"?`Where did the ${t[I].name.toLowerCase()} go?`:uv(x.verdict,I);S&&r.push(S)}const u=n.chop??0,f=i.steps.some(I=>I.verb==="chop"),m=i.steps.filter(I=>I.liquid).map(I=>I.liquid).map(I=>{const x=n.pours?.[I]??0,S=bl(x,e[I].target);if(S<.6&&I!=="oil"){const k=e[I].name.toLowerCase();x<e[I].target[0]?r.push(`Not enough ${k}. It tastes of nothing.`):r.push(I==="tamarind"?"Swimming in sauce. Pad Thai is fried, not stewed.":`Far too much ${k}. Salty!`)}return S}),_=Object.values(n.skills||{}),p=[...f?[u]:[],...m,..._],g=p.length?p.reduce((I,x)=>I+x,0)/p.length:0;f&&u<.6&&r.push("Your cuts are all different lengths. Follow the lines.");for(const I of n.notes||[])r.unshift(I);const M=n.heiOverride!=null?Math.min(1,n.heiOverride*1.1):Math.min(1,(n.hei||0)/5)*.8+Math.min(1,(n.tosses||0)/8)*.2;M>.85?r.push(s.heiGood):n.heiOverride==null&&(n.tosses||0)<2&&r.push(s.heiNone);const v=n.garnish||{};let y=0,R=0;for(const[I,[x,S]]of Object.entries(i.garnish||{})){const k=v[I]||0;y+=k>=x&&k<=S?1:k>S?.4:k>0?.6:0,R++}for(const I of Object.values(n.finish||{}))y+=I,R++;const E=R?y/R:0;i.garnish?.lime&&!(v.lime>0)?r.push("No lime? The customer needs something to squeeze."):i.garnish?.friedEgg&&!(v.friedEgg>0)?r.push("Where is the fried egg? Kra Pao without khai dao is only half a dish."):E>.9&&r.push("Beautiful plate. I would photograph that.");const T=Math.round(c*55+g*20+M*10+E*15),L=T>=85?3:T>=65?2:T>=40?1:0;return r.length||r.push(L===3?"Perfect. You can have my stall.":"Not bad at all."),{total:T,stars:L,cooking:c,technique:g,hei:M,presentation:E,per:l,notes:r.slice(0,3)}}const $e={cookTime:9,setTime:22,band:[.85,1.35],breakBelow:.55,burnAt:1.75,porkTime:8};function pv(){return{size:0,d:[0,0],c:[0,0],down:0,set:0,flips:0,broke:0,pork:!1,porkD:0,porkC:0,flipScores:[]}}function mv(i,t,e){const n=vs(t),s=i.down;if(i.d[s]+=n*e/$e.cookTime,i.set=Math.min(1.3,i.set+n*e/$e.setTime),i.d[s]>$e.burnAt&&(i.c[s]=Math.min(1,i.c[s]+(i.d[s]-$e.burnAt)*e*.6)),i.pork){const r=s===1?1/$e.porkTime:1/($e.porkTime*6);i.porkD+=n*e*r,i.porkD>2.1&&(i.porkC=Math.min(1,i.porkC+(i.porkD-2.1)*e*.5))}}function gv(i){const t=i.d[i.down],e=t<$e.breakBelow,n=e?.15:Ml(t,$e.band)*(1-Math.min(1,i.c[i.down]*1.5));return e&&i.broke++,i.flipScores.push(n),i.down=1-i.down,i.flips++,{score:n,broke:e,face:t}}function _v(i){return{cakeD:[i.d[0],i.d[1],Math.min(1.3,i.set/1)],cakeC:[i.c[0],i.c[1],0],porkD:i.pork?[i.porkD]:[],porkC:i.pork?[i.porkC]:[],flip:i.flipScores.length?i.flipScores.reduce((t,e)=>t+e,0)/i.flipScores.length:0,broke:i.broke}}const cn={cookTime:5.5,band:[.8,1.4],burnAt:1.8,turnFloor:.5};function xv(i,t=1){const e=i.length/3;return{normals:i,d:new Float32Array(e),c:new Float32Array(e),turns:0,angle:0,rate:t,torn:0,turnScores:[]}}function gu(i,t){const e=i.normals[t*3+1],n=i.normals[t*3+2];return-(e*Math.cos(i.angle)-n*Math.sin(i.angle))}function vv(i,t,e){const n=vs(t)*i.rate,s=i.d.length;for(let r=0;r<s;r++){const o=gu(i,r);if(o<=.05)continue;const a=Math.min(1,(o-.05)*1.6);i.d[r]+=n*e*a/cn.cookTime,i.d[r]>cn.burnAt&&(i.c[r]=Math.min(1,i.c[r]+(i.d[r]-cn.burnAt)*e*.6))}}function Ya(i){let t=0,e=0;for(let n=0;n<i.d.length;n++)gu(i,n)>.6&&(t+=i.d[n],e++);return e?t/e:0}function yv(i){const t=Ya(i),e=t<cn.turnFloor;e&&i.turns<2&&i.torn++;const n=e?.3:Ml(t,cn.band);return i.turnScores.push(n),i.turns++,i.angle+=Math.PI/2,{score:n,early:e}}function Mv(i){const t=i.d.length;let e=0,n=0,s=0,r=0;for(let a=0;a<t;a++){if(Math.abs(i.normals[a*3])>.8)continue;const l=i.d[a];r+=l,i.c[a]>.3?n++:l<cn.band[0]-.3?s++:l>=cn.band[0]-.1&&e++}const o=t-[...Array(t).keys()].filter(a=>Math.abs(i.normals[a*3])>.8).length||1;return{mean:r/o,golden:e/o,burnt:n/o,raw:s/o,formed:i.turns>=2&&!i.torn,turns:i.turns}}const _u=new ct(16050896),th=new ct(14258750),bv=new ct(9062942),Sv=new ct(2758668),wv=new ct(3807756);function Tv(){const i=[];for(let t=0;t<Nt.rows;t++)for(let e=0;e<Nt.cols;e++)i.push([Nt.x+(e-(Nt.cols-1)/2)*Nt.pitch,Nt.z+(t-(Nt.rows-1)/2)*Nt.pitch]);return i}class Ev{constructor(t){this.r=t;const e=new de(t,22,16);this.geo=e;const n=e.attributes.position;this.normals=new Float32Array(n.count*3);for(let s=0;s<n.count;s++){const r=n.getX(s),o=n.getY(s),a=n.getZ(s),l=Math.hypot(r,o,a)||1;this.normals.set([r/l,o/l,a/l],s*3)}e.setAttribute("color",new Ie(new Float32Array(n.count*3),3)),n.setUsage(Ji),this.mesh=new pt(e,new ce({vertexColors:!0,roughness:.45,clearcoat:.55,clearcoatRoughness:.3,metalness:0})),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.shown=0,this._c=new ct}draw(t,e,n,s){this.shown+=(t.angle-this.shown)*Math.min(1,e*12);const r=this.shown,o=Math.cos(r),a=Math.sin(r),l=this.geo.attributes.position,c=this.geo.attributes.color,h=this.normals,u=this.r;for(let f=0;f<l.count;f++){const d=h[f*3],m=h[f*3+1],_=h[f*3+2],p=m*o-_*a,g=m*a+_*o;let M=p*u;M>n&&(M=n),l.setXYZ(f,d*u,M,g*u);const v=t.d[f],y=t.c[f],R=this._c;v<1?R.copy(_u).lerp(th,Math.max(0,v)):R.copy(th).lerp(bv,Math.min(1,(v-1)/.8)),y>0&&R.lerp(Sv,Math.min(1,y)),s>0&&p>-.1&&R.lerp(wv,Math.min(.85,s*(.5+p*.6))),c.setXYZ(f,R.r,R.g,R.b)}l.needsUpdate=!0,c.needsUpdate=!0,this.geo.computeVertexNormals()}}class Av{constructor(){this.kind="takopan",this.view="takopan",this.tossLabel="TURN",this.group=new ie;const{w:t,d:e,topY:n,wellR:s}=Nt,r=new kt({color:1841689,map:lu(),metalness:.55,roughness:.55,side:te}),o=new Ti,a=.012;o.moveTo(-t/2+a,-e/2),o.lineTo(t/2-a,-e/2),o.quadraticCurveTo(t/2,-e/2,t/2,-e/2+a),o.lineTo(t/2,e/2-a),o.quadraticCurveTo(t/2,e/2,t/2-a,e/2),o.lineTo(-t/2+a,e/2),o.quadraticCurveTo(-t/2,e/2,-t/2,e/2-a),o.lineTo(-t/2,-e/2+a),o.quadraticCurveTo(-t/2,-e/2,-t/2+a,-e/2),this.centres=Tv();for(const[f,d]of this.centres){const m=new Ga;m.absarc(f-Nt.x,d-Nt.z,s,0,Math.PI*2,!0),o.holes.push(m)}const l=new to(o,{depth:.012,bevelEnabled:!1,curveSegments:20});l.rotateX(Math.PI/2);const c=new pt(l,r);c.position.set(Nt.x,n,Nt.z),c.castShadow=c.receiveShadow=!0,this.group.add(c);const h=new de(s,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2);for(const[f,d]of this.centres){const m=new pt(h,r);m.position.set(f,n,d),m.receiveShadow=!0,this.group.add(m)}const u=new pt(new Ft(t+.04,n-.03-lt.y,e+.04),new kt({color:11054514,metalness:1,roughness:.4}));u.position.set(Nt.x,(n-.03+lt.y)/2,Nt.z),this.group.add(u),this.blue=new Te({color:new ct(.35,.55,1.6),transparent:!0,opacity:0,depthWrite:!1});for(let f=0;f<5;f++){const d=new pt(new Re(.026,.007),this.blue);d.position.set(Nt.x-t/2+.04+f*((t-.08)/4),(n+lt.y)/2-.01,Nt.z+e/2+.0205),this.group.add(d)}this.sheet=new pt(new Re(t-.012,e-.012),new ce({color:_u,map:cu(),roughness:.35,clearcoat:.6,transparent:!0,opacity:0,depthWrite:!0,metalness:0})),this.sheet.rotation.x=-Math.PI/2,this.sheet.position.set(Nt.x,n+.0012,Nt.z),this.group.add(this.sheet),this.pools=this.centres.map(([f,d])=>{const m=new pt(new hn(s*.98,20),this.sheet.material);return m.rotation.x=-Math.PI/2,m.position.set(f,n-s,d),m.visible=!1,this.group.add(m),m}),this.octo=new us(new Yn(.0065,1),new ce({color:12079194,roughness:.35,clearcoat:.8,metalness:0}),this.centres.length),this.octo.count=0,this.group.add(this.octo),this.bits={},this.views=this.centres.map(()=>new Ev(s*.98));for(const f of this.views)f.mesh.visible=!1,this.group.add(f.mesh);this.balls=[],this.fill=0,this.spatula={group:new ie,update(){}},this.light=new ds(16751178,0,.6,2),this.light.position.set(Nt.x,lt.y+.02,Nt.z+e/2+.08),this.group.add(this.light),this.plated=!1,this.finish={sauce:0,mayo:0}}reset(){this.fill=0,this.balls=this.views.map((t,e)=>xv(t.normals,.9+e*37%11/11*.22)),this.octo.count=0;for(const t of Object.keys(this.bits))this.group.remove(this.bits[t]);this.bits={},this.plated=!1,this.finish={sauce:0,mayo:0};for(const t of this.views)t.mesh.visible=!1;this.mayo?.removeFromParent(),this.mayo=null}sprinkle(t,e,n,s=40){const r=new us(e,n,s),o=new Jt,a=new gn,l=new Ze,c=new C,h=new C(1,1,1);for(let u=0;u<s;u++)c.set(Nt.x+(Math.random()-.5)*(Nt.w-.03),Nt.topY+.003,Nt.z+(Math.random()-.5)*(Nt.d-.03)),l.set(Math.random()*.4,Math.random()*6,Math.random()*.4),a.setFromEuler(l),o.compose(c,a,h),r.setMatrixAt(u,o);this.group.add(r),this.bits[t]=r}dropOcto(){const t=new Jt;this.centres.forEach(([e,n],s)=>{t.makeTranslation(e+(Math.random()-.5)*.006,Nt.topY-.004,n+(Math.random()-.5)*.006),this.octo.setMatrixAt(s,t)}),this.octo.count=this.centres.length,this.octo.instanceMatrix.needsUpdate=!0}toBoat(){this.plated=!0;const t=Yx(8);this.slots=t,this.octo.count=0;for(const e of Object.keys(this.bits))this.bits[e].visible=!1}obstacles(){const t=Nt.wellR*.98;return(this.slots||[]).map(([e,n])=>({x:e,z:n,cy:nt.wellY-.006+Br.floor+t,R:t}))}container(){return{type:"teppan",heated:!1,cx:Nt.x,cz:Nt.z,y:Nt.topY,hw:Nt.w/2,hd:Nt.d/2,rimY:Nt.topY+.05}}surfaceRay(){return null}dropPoint(){return new C(Nt.x,Nt.topY+.01,Nt.z)}spawn(){return{x:Nt.x,y:Nt.topY+.05,z:Nt.z}}stirPoint(){return{x:Nt.x,y:Nt.topY,z:Nt.z}}toss(){}update(t,e){this.blue.opacity=Math.min(.9,e.flame*1.2),this.light.intensity=e.flame*.5;const n=this.balls.length?Math.min(...this.balls.map(o=>o.turns)):0,s=this.fill;this.sheet.material.opacity=this.plated?0:s>.75?Math.min(1,(s-.75)*6)*(n>=2?0:n===1?.45:1):0,this.pools.forEach(o=>{o.visible=!this.plated&&s>.02&&s<=.99&&n===0,o.position.y=Nt.topY-Nt.wellR*(1-Math.min(1,s/.75))+8e-4});for(const o of Object.keys(this.bits))this.bits[o].visible=!this.plated&&n===0;const r=Nt.wellR*.98;this.views.forEach((o,a)=>{const l=this.balls[a],c=!!l&&s>.5&&(!this.plated||a<8);if(o.mesh.visible=c,!c)return;if(this.plated){const[u,f]=this.slots[a];o.mesh.position.lerp(new C(u,nt.wellY-.006+Br.floor+r,f),Math.min(1,t*6))}else o.mesh.position.set(this.centres[a][0],Nt.topY,this.centres[a][1]);const h=this.plated?r:l.turns===0?.001:l.turns===1?r*.55:r;o.draw(l,t,h,this.finish.sauce)})}drawMayo(t){if(!this.mayo){const n=[];for(let r=0;r<=10;r++)n.push(new C(nt.x-.08+r*.016,nt.wellY-.006+Br.floor+Nt.wellR*2+.002,nt.z+(r%2?.04:-.04)));const s=new pl(n);this.mayo=new pt(new fs(s,120,.0016,5,!1),new ce({color:16182468,roughness:.3,clearcoat:.8,metalness:0})),this.group.add(this.mayo)}const e=this.mayo.geometry.index.count;this.mayo.geometry.setDrawRange(0,Math.floor(Math.min(1,t)*e/6)*6)}}const ks=new C;function dn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ks.copy(t),ks[n]=0,ks.normalize();const c=.5*o/(o+a),h=1-ks.angleTo(i)/l;return Math.sign(ks[e])===1?h*c:a/(o+a)+c+c*(1-h)}class xu extends Ft{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new C,_=.5/s;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/d)){case 0:m.set(1,0,0),f[g+0]=dn(m,l,"z","y",r,n),f[g+1]=1-dn(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),f[g+0]=1-dn(m,l,"z","y",r,n),f[g+1]=1-dn(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),f[g+0]=1-dn(m,l,"x","z",r,t),f[g+1]=dn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[g+0]=1-dn(m,l,"x","z",r,t),f[g+1]=1-dn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[g+0]=1-dn(m,l,"x","y",r,t),f[g+1]=1-dn(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),f[g+0]=dn(m,l,"x","y",r,t),f[g+1]=1-dn(m,l,"y","x",r,e);break}}}function ys(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function ge(i,t){const e=i.attributes.position,n=new Float32Array(e.count*3),s=new C,r=[1,1,1];for(let o=0;o<e.count;o++)s.fromBufferAttribute(e,o),r[0]=r[1]=r[2]=1,t(s,r,o),n[o*3]=r[0],n[o*3+1]=r[1],n[o*3+2]=r[2];return i.setAttribute("color",new Ie(n,3)),i}function ri(i,t,e){const n=ys(e),s=i.attributes.position,r=new Map;for(let o=0;o<s.count;o++){const a=`${s.getX(o).toFixed(5)},${s.getY(o).toFixed(5)},${s.getZ(o).toFixed(5)}`;r.has(a)||r.set(a,[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t]);const l=r.get(a);s.setXYZ(o,s.getX(o)+l[0],s.getY(o)+l[1],s.getZ(o)+l[2])}return i.computeVertexNormals(),i}function ke(i){return i.index?i.toNonIndexed():i}function Ms(i){const t=i.map(e=>{const n=ke(e);for(const s of Object.keys(n.attributes))s!=="position"&&s!=="normal"&&s!=="color"&&n.deleteAttribute(s);return n.attributes.normal||n.computeVertexNormals(),n});return iu(t)}function Cv(){const n=Math.PI*1.45,s=[],r=[],o=[];for(let m=0;m<=44;m++){const _=m/44,p=-.3+_*n,g=Math.cos(p)*.0115,M=Math.sin(p)*.0115,v=Math.abs(Math.sin(_*Math.PI*6)),y=(.0078*(1-_)+.0026*_)*(.93+.1*v)*(_<.04?.75+_*6:1),R=Math.cos(p),E=Math.sin(p);for(let T=0;T<=12;T++){const L=T/12*Math.PI*2,I=Math.cos(L),x=Math.sin(L)*1.18;s.push(g+R*I*y,M+E*I*y,x*y);const S=Math.max(0,I),k=v<.25?1:0,F=1-S*.22-S*k*.25;r.push(1,F*.92+.08,F*.85+.1)}}for(let m=0;m<44;m++)for(let _=0;_<12;_++){const p=m*13+_,g=p+12+1;o.push(p,g,p+1,g,g+1,p+1)}const a=new _e;a.setAttribute("position",new qt(s,3)),a.setAttribute("color",new qt(r,3)),a.setIndex(o),a.computeVertexNormals();const l=-.3+n,c=Math.cos(l)*.0115,h=Math.sin(l)*.0115,u=new C(-Math.sin(l),Math.cos(l),0),f=[ke(a)];for(const m of[-1,1]){const _=new de(.0052,10,6);_.scale(1.4,.35,.7),_.rotateY(m*.45);const p=new gn().setFromUnitVectors(new C(1,0,0),u);_.applyQuaternion(p),_.translate(c+u.x*.006,h+u.y*.006,m*.0035),ge(_,(g,M)=>{M[0]=1,M[1]=.55,M[2]=.42}),f.push(ke(_))}const d=Ms(f);return d.center(),d}function Rv(i){const t=i*1.55,e=new xu(t,t,t,2,t*.14);return ri(e,t*.06,3),ge(ke(e),(n,s)=>{const r=Math.max(Math.abs(n.x),Math.abs(n.y),Math.abs(n.z))/(t/2);s[1]=.96+r*.04})}function Pv(i,t=1){const e=new Yn(i,0);return e.scale(1.1,.62,.85),ri(e,i*.5,t),ge(ke(e),(n,s)=>{const r=.9+n.y/i*.1;s[0]=s[1]=s[2]=r})}function Lv(i){const t=new Cn(i*.72,i*.2,5,14,Math.PI*1.6);return t.scale(1,1,.55),t.rotateX(Math.PI/2),ge(ke(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/(i*.72);n[1]=.9+(1-s)*.3,n[2]=.92+(1-s)*.3})}function Iv(i,t=5){const e=new Yn(i,1);e.scale(1.15,.5,.95),ri(e,i*.55,t);const n=ys(t*7);return ge(ke(e),(s,r)=>{Math.sin(s.x*400+s.z*260)>.35||n()<.15||(r[1]=.86,r[2]=.45)})}function Dv(i){const t=new ml(new C(-i*2.3,0,0),new C(0,i*.9,i*.4),new C(i*2.3,0,-i*.2)),e=new fs(t,10,.0021,6,!1),n=new de(.0034,8,6);n.scale(1.5,1,1),n.translate(-i*2.4,0,0),ge(e,(r,o)=>{o[0]=1,o[1]=1,o[2]=.97}),ge(n,(r,o)=>{o[0]=.98,o[1]=.9,o[2]=.45});const s=new fs(new Kh(new C(i*2.3,0,-i*.2),new C(i*3.1,-i*.2,-i*.4)),2,8e-4,4,!1);return ge(s,(r,o)=>{o[0]=.9,o[1]=.85,o[2]=.75}),Ms([e,n,s])}function Uv(i){const t=i*4,e=new zt(.0024,.0024,t,8,3,!1);return e.scale(1,1,.45),e.rotateZ(Math.PI/2),ge(ke(e),(n,s)=>{Math.abs(n.x)/(t/2)>.92&&(s[0]=1.25,s[1]=1.2,s[2]=.9)})}function Nv(i,t=9){const e=new Yn(i,0);ri(e,i*.7,t);const n=ys(t);return ge(ke(e),(s,r,o)=>{if((Math.floor(o/3)*2654435761>>>0)%3===0)r[0]=.72,r[1]=.45,r[2]=.32;else{const l=1.05+n()*.1;r[0]=l,r[1]=l,r[2]=l*.95}})}function kv(i){const t=new hn(i,5);return ri(t,i*.6,13),t.rotateX(-Math.PI/2),ge(ke(t),(e,n)=>{n[1]=1+e.x/i*.2})}function Fv(i){const t=i,e=Math.PI/3,n=new de(t,14,10,-e/2,e,.12,Math.PI-.24);ge(n,(o,a)=>{a[0]=.32,a[1]=.62,a[2]=.12});const s=[];for(const o of[-1,1]){const a=o*e/2,l=[],c=[],h=14;for(let f=0;f<h;f++){const d=.12+f/h*(Math.PI-.24),m=.12+(f+1)/h*(Math.PI-.24),_=[Math.sin(d)*t*.97,Math.cos(d)*t*.97],p=[Math.sin(m)*t*.97,Math.cos(m)*t*.97],g=T=>[T[0]*Math.cos(a),T[1],-T[0]*Math.sin(a)],M=g(_),v=g(p),y=[0,_[1]*.9,0],R=[0,p[1]*.9,0],E=o>0?[y,M,v,y,v,R]:[y,v,M,y,R,v];for(const T of E){l.push(...T);const L=Math.hypot(T[0],T[2])/t,I=f%3===0?.9:1;c.push((.72+(L>.85?.2:0))*I,.9*I,(.3+(L>.85?.45:0))*I)}}const u=new _e;u.setAttribute("position",new qt(l,3)),u.setAttribute("color",new qt(c,3)),u.computeVertexNormals(),s.push(u)}const r=Ms([n,...s]);return r.scale(1,1.45,1),r.rotateZ(Math.PI/2),r}function zv(i,t=21){const e=ys(t),n=[];for(let r=0;r<7;r++){const o=new de(.00125,7,5);o.scale(2.8,1,1.05),o.rotateY(e()*Math.PI),o.rotateZ((e()-.5)*.8),o.translate((e()-.5)*i*1.2,(e()-.5)*i*.6,(e()-.5)*i*1.2),n.push(o)}const s=Ms(n);return ge(s,(r,o)=>{const a=.94+Math.max(0,r.y/i)*.08;o[0]=o[1]=o[2]=a})}function Ov(i,t=33){const e=new Yn(i*.9,1);e.scale(1.1,.7,.95),ri(e,i*.65,t);const n=ys(t);return ge(ke(e),(s,r)=>{const o=.86+n()*.18;r[0]=o,r[1]=o*.98,r[2]=o*.95})}function Bv(i){const t=new Ti,e=i*2.2,n=i*.85;t.moveTo(0,-e/2),t.quadraticCurveTo(n,-e*.15,0,e/2),t.quadraticCurveTo(-n,-e*.15,0,-e/2);const s=new Js(t,8),r=s.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getY(o);r.setZ(o,a*a/(n*1.6)*1.2-Math.abs(l)*.08)}return s.rotateX(-Math.PI/2),s.computeVertexNormals(),ge(ke(s),(o,a)=>{const l=Math.abs(o.x)<n*.08?1.25:1;a[0]=l,a[1]=l,a[2]=l*.9})}function Hv(i,t=41){const e=new xu(i*1.9,i*.45,i*1.2,2,i*.18);return ri(e,i*.18,t),ge(ke(e),(n,s)=>{const r=.93+(n.y>0?.07:0);s[0]=s[1]=s[2]=r})}function Gv(i){const t=new zt(i*.28,i*.32,i*2.4,9);t.rotateZ(Math.PI/2),ge(t,(n,s)=>{s[0]=1.1,s[1]=1.12,s[2]=.95});const e=new de(i*.9,10,6);return e.scale(1.2,.18,.9),e.translate(i*.5,i*.25,i*.35),ge(e,(n,s)=>{s[0]=.62,s[1]=.8,s[2]=.62}),Ms([t,e])}function Vv(i){const t=new zt(i,i,i*.3,20,1);return ge(ke(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/i;s>.9||Math.abs(e.y)<i*.14&&s>.85?(n[0]=.22,n[1]=.45,n[2]=.16):s>.35&&s<.6?(n[0]=.86,n[1]=.93,n[2]=.7):(n[0]=.78,n[1]=.9,n[2]=.62)})}function Wv(i,t=57){const e=ys(t),n=new Ti;for(let a=0;a<=28;a++){const l=a/28*Math.PI*2,c=i*(.88+e()*.2);a===0?n.moveTo(Math.cos(l)*c,Math.sin(l)*c):n.lineTo(Math.cos(l)*c,Math.sin(l)*c)}const s=new to(n,{depth:.003,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.002,bevelSegments:2,curveSegments:6});s.rotateX(-Math.PI/2),ge(s,(a,l)=>{const c=Math.hypot(a.x,a.z)/i;if(c>.78){const h=Math.min(1,(c-.78)/.2);l[0]=1-h*.3,l[1]=1-h*.55,l[2]=1-h*.8}});const r=new de(i*.32,16,10,0,Math.PI*2,0,Math.PI/2);r.scale(1,.6,1),r.translate(i*.1,.0045,-i*.05),ge(r,(a,l)=>{l[0]=1,l[1]=.62,l[2]=.08});const o=Ms([s,r]);return o.translate(0,-.002,0),o}function Xv(i){const t=new Re(i*2.6,i*1.1,10,3),e=t.attributes.position;for(let n=0;n<e.count;n++)e.setZ(n,Math.sin(e.getX(n)/i*2.2)*i*.18);return t.rotateX(-Math.PI/2),t.computeVertexNormals(),ge(ke(t),(n,s)=>{Math.sin(n.z/i*7)>.2&&(s[0]=1.12,s[1]=1.14,s[2]=1.12)})}function qv(i){const t=new de(i*1.4,10,6,0,1.3,.6,1.1);return t.scale(1,.35,1),t.center(),ge(ke(t),(e,n)=>{const s=Math.min(1,Math.hypot(e.x,e.z)/(i*1.2));n[0]=1.05-s*.2,n[1]=1.05-s*.05,n[2]=1.05-s*.3})}function Yv(i){const t=new Ft(i*4.2,i*.45,i*.45);return ge(ke(t),(e,n)=>{const s=.92+(e.y>0?.1:0);n[0]=n[1]=n[2]=s})}function $v(i){const t=new Re(i*1.8,i*1.3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n);e.setZ(n,s*s/(i*1.1))}return t.rotateX(-Math.PI/2),t.computeVertexNormals(),ge(ke(t),(n,s)=>{const r=.85+Math.abs(n.x)/i*.2;s[0]=r*1.05,s[1]=r,s[2]=r*.95})}function Kv(i,t=111){const e=new Yn(i,1);return ri(e,i*.35,t),ge(ke(e),(n,s)=>{n.y>-i*.1?(s[0]=.75,s[1]=.28,s[2]=.36):(s[0]=.98,s[1]=.93,s[2]=.9)})}function vu(){const i=new de(.022,20,14),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e),s=n>0?1-n/.022*.12:1;t.setXYZ(e,t.getX(e)*s,n*1.28,t.getZ(e)*s)}return i.computeVertexNormals(),i}const yu={prawn:()=>Cv(),cube:i=>Rv(i),bit:i=>Pv(i),ring:i=>Lv(i),curd:i=>Iv(i),sprout:i=>Dv(i),segment:i=>Uv(i),peanut:i=>Nv(i),flake:i=>kv(i),wedge:i=>Fv(i),clump:i=>zv(i),mince:i=>Ov(i),leaf:i=>Bv(i),slice:i=>Hv(i),gailan:i=>Gv(i),disc:i=>Vv(i),friedEgg:i=>Wv(i),belly:i=>Xv(i),cabbage:i=>qv(i),baton:i=>Yv(i),bonito:i=>$v(i),octo:i=>Kv(i)};Object.keys(yu).concat(["strand","none"]);const $o=new Map;function bs(i){const t=i.shape+":"+i.r;if(!$o.has(t)){const e=yu[i.shape];if(!e)throw new Error(`shapes: no builder for '${i.shape}'`);const n=e(i.r);n.computeBoundingSphere(),$o.set(t,n)}return $o.get(t)}const Mu=new Float32Array(256);for(let i=0;i<256;i++){const t=i/255;Mu[i]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}const Ko=i=>Mu[Math.max(0,Math.min(255,i|0))];function qn(i){return new ce({vertexColors:!0,roughness:i.rough??.5,metalness:0,clearcoat:i.gloss??.3,clearcoatRoughness:.22,sheen:i.sheen??0,sheenRoughness:.5,sheenColor:new ct(14221232),side:["flake","wedge","leaf","belly","cabbage","bonito"].includes(i.shape)?te:Wn})}class bu{constructor(t,e,n,s){this.points=e,this.sub=2,this.per=(e-1)*this.sub+1,this.width=n,this.maxStrands=t;const r=t*this.per*2,o=new _e;this.pos=new Float32Array(r*3),this.nrm=new Float32Array(r*3),this.col=new Float32Array(r*3),o.setAttribute("position",new Ie(this.pos,3).setUsage(Ji)),o.setAttribute("normal",new Ie(this.nrm,3).setUsage(Ji)),o.setAttribute("color",new Ie(this.col,3).setUsage(Ji));const a=[];for(let l=0;l<t;l++)for(let c=0;c<this.per-1;c++){const h=(l*this.per+c)*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}o.setIndex(a),o.setDrawRange(0,0),this.geo=o,this.mesh=new pt(o,s),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this._p=new Float32Array(this.per*3),this._c=new Float32Array(this.per*3)}update(t,e,n){let s=0;for(const r of e){if(s>=this.maxStrands)break;this._build(t,r.first,r.n,n,s++)}this.geo.setDrawRange(0,s*(this.per-1)*6);for(const r of["position","normal","color"])this.geo.attributes[r].needsUpdate=!0}_build(t,e,n,s,r){const o=this._p,a=this._c,l=this.sub,c=t.x;let h=0;for(let p=0;p<n-1;p++){const g=Math.max(0,p-1),M=p,v=p+1,y=Math.min(n-1,p+2);for(let R=0;R<l;R++){const E=R/l,T=E*E,L=T*E;for(let I=0;I<3;I++){const x=c[(e+g)*3+I],S=c[(e+M)*3+I],k=c[(e+v)*3+I],F=c[(e+y)*3+I];o[h*3+I]=.5*(2*S+(-x+k)*E+(2*x-5*S+4*k-F)*T+(-x+3*S-3*k+F)*L),a[h*3+I]=s[(e+M)*3+I]*(1-E)+s[(e+v)*3+I]*E}h++}}for(let p=0;p<3;p++)o[h*3+p]=c[(e+n-1)*3+p],a[h*3+p]=s[(e+n-1)*3+p];h++;const u=this.width/2;let f=1,d=0,m=0;const _=r*this.per*2;for(let p=0;p<h;p++){const g=Math.max(0,p-1),M=Math.min(h-1,p+1);let v=o[M*3]-o[g*3],y=o[M*3+1]-o[g*3+1],R=o[M*3+2]-o[g*3+2];const E=Math.hypot(v,y,R)||1;v/=E,y/=E,R/=E;let T=-R,L=v,I=0;const x=Math.hypot(T,L);x>.2&&(T/=x,L/=x,T*f+L*m<0&&(T=-T,L=-L),f=T,d=I,m=L);const S=d*R-m*y,k=m*v-f*R,F=f*y-d*v;for(let G=0;G<2;G++){const X=(_+p*2+G)*3,B=G?1:-1;this.pos[X]=o[p*3]+f*u*B,this.pos[X+1]=o[p*3+1]+d*u*B,this.pos[X+2]=o[p*3+2]+m*u*B,this.nrm[X]=S,this.nrm[X+1]=k,this.nrm[X+2]=F;const j=.94;this.col[X]=a[p*3]*j,this.col[X+1]=a[p*3+1]*j,this.col[X+2]=a[p*3+2]*j}}}}class Zv{constructor(t,e,n){this.group=new ie,this.ings=t,this.sauceColour=n,this.meshes=[],this.noodles=null,t.forEach((s,r)=>{if(s.shape==="strand"){const a=qn(s);a.side=te,this.noodles=new bu(s.strands+2,s.points,s.width,a),this.noodleKind=r,this.group.add(this.noodles.mesh),this.meshes.push(null);return}const o=new us(bs(s),qn(s),e[r]);o.count=0,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(Ji),o.name="food:"+s.id,o.setColorAt(0,new ct(1,1,1)),this.group.add(o),this.meshes.push(o)}),this._m=new Jt,this._q=new gn,this._p=new C,this._s=new C,this._c=new ct,this._rgb=[0,0,0],this.linCol=new Float32Array(4096*3),this._w=new Ze,this._dq=new gn,this.time=0}update(t,e=1/60){this.time+=e;const n=new Int32Array(this.meshes.length),s=[];let r=-1;for(let o=0;o<t.n;o++){const a=t.kind[o],l=this.ings[a];mu(l,t.d[o],t.c[o],t.coat[o],this.sauceColour,this._rgb);const c=Ko(this._rgb[0]),h=Ko(this._rgb[1]),u=Ko(this._rgb[2]);if(t.strand[o]>=0){this.linCol[o*3]=c,this.linCol[o*3+1]=h,this.linCol[o*3+2]=u,t.strand[o]!==r&&(r=t.strand[o],s.push({first:o,n:0})),s[s.length-1].n++;continue}const f=this.meshes[a];if(!f)continue;const d=n[a]++;if(d>=f.instanceMatrix.count)continue;if(this._p.set(t.x[o*3],t.x[o*3+1]-(l.colR?l.colR*.5:0),t.x[o*3+2]),this._q.set(t.q[o*4],t.q[o*4+1],t.q[o*4+2],t.q[o*4+3]),l.dances){const p=this.time*(4+t.seed[o]*3)+t.seed[o]*20;this._w.set(Math.sin(p)*.5,Math.sin(p*.7)*.4,Math.cos(p*1.3)*.5),this._dq.setFromEuler(this._w),this._q.multiply(this._dq)}const m=l.shrink?1-(1-l.shrink)*Math.min(1,t.d[o]):1,_=(.85+t.seed[o]*.3)*m;this._s.set(_,_,_),this._m.compose(this._p,this._q,this._s),f.setMatrixAt(d,this._m),this._c.setRGB(c,h,u),f.setColorAt(d,this._c)}this.meshes.forEach((o,a)=>{o&&(o.count=Math.min(n[a],o.instanceMatrix.count),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0))}),this.noodles&&this.noodles.update(t,s,this.linCol)}}const Su=new ct(15919304),eh=new ct(13666876),jv=new ct(5911064),Jv=new ct(2364684),Ki=.02;function Qv(i,t,e){return i<1?e.copy(Su).lerp(eh,Math.max(0,i)):e.copy(eh).lerp(jv,Math.min(1,(i-1)/.9)),t>0&&e.lerp(Jv,Math.min(1,t)),e}function nh(i){const t=[];for(let o=0;o<=10;o++){const a=o/10,l=a<.2?1-(.2-a)*.6:1-(a-.2)/.8,c=a<.2?Math.sin(a/.2*Math.PI/2)*Ki/2:Ki/2+(1-l)*.004;t.push(new q(Math.max(0,l),i?c:-c))}i||t.reverse();const n=new wi(t,48),s=n.attributes.position,r=n.attributes.uv;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getZ(o),c=s.getY(o),h=(Math.sin(a*31+l*17)+Math.sin(a*13-l*29)+Math.sin((a+l)*47))*.0012;s.setY(o,c+(i?h:-h*.4)),r.setXY(o,a*.5+.5,l*.5+.5)}return n.computeVertexNormals(),n}class t1{constructor(){this.group=new ie,this.body=new ie,this.group.add(this.body);const t=hu();this.mat=[0,1].map(()=>new ce({map:t,color:Su.clone(),roughness:.55,clearcoat:.35,clearcoatRoughness:.4,metalness:0,side:te})),this.bottom=new pt(nh(!1),this.mat[0]),this.top=new pt(nh(!0),this.mat[1]);for(const n of[this.bottom,this.top])n.castShadow=!0,n.receiveShadow=!0,this.body.add(n);const e={shape:"belly",r:.013};this.porkMat=qn({gloss:.6,rough:.4}),this.pork=new ie;for(let n=0;n<4;n++){const s=new pt(bs(e),this.porkMat);s.scale.set(1.6,1,1.4),s.position.set(-.04+n*.027,Ki/2+.003,n%2?.012:-.01),s.rotation.y=.15*(n%2?1:-1),s.castShadow=!0,this.pork.add(s)}this.pork.visible=!1,this.body.add(this.pork),this.sauce=new pt(new hn(1,40),new ce({color:3807756,alphaMap:Kr(),roughness:.12,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:0,depthWrite:!1,metalness:0})),this.sauce.rotation.x=-Math.PI/2,this.group.add(this.sauce),this.mayo=this._mayo(),this.group.add(this.mayo.mesh),this.flipT=1,this.flipFrom=0,this.flips=0,this.moveT=1,this.radius=0,this._c=new ct,this._rgb=[0,0,0],this.at(Ct.x,Ct.topY,Ct.z),this.group.visible=!1}_mayo(){const t=[];for(let h=0;h<=9;h++){const u=-.8+h/9*1.6;t.push([u,h%2?.8:-.8])}const n=[];for(let h=0;h<t.length-1;h++)for(let u=0;u<8;u++){const f=u/8;n.push([t[h][0]+(t[h+1][0]-t[h][0])*f,t[h][1]+(t[h+1][1]-t[h][1])*f])}const s=n.length,r=.035,o=new Float32Array(s*2*3);for(let h=0;h<s;h++){const u=n[Math.max(0,h-1)],f=n[Math.min(s-1,h+1)];let d=f[0]-u[0],m=f[1]-u[1];const _=Math.hypot(d,m)||1;d/=_,m/=_;const p=Math.hypot(n[h][0],n[h][1]),g=p>.9?.9/p:1,M=n[h][0]*g,v=n[h][1]*g;o.set([M-m*r,0,v+d*r,M+m*r,0,v-d*r],h*6)}const a=[];for(let h=0;h<s-1;h++){const u=h*2;a.push(u,u+2,u+1,u+1,u+2,u+3)}const l=new _e;return l.setAttribute("position",new Ie(o,3)),l.setIndex(a),l.computeVertexNormals(),l.setDrawRange(0,0),{mesh:new pt(l,new ce({color:16182468,roughness:.3,clearcoat:.8,metalness:0,side:te})),segs:s-1}}at(t,e,n){this.group.position.set(t,e,n)}flip(){this.flipT=0,this.flipFrom=this.flips*Math.PI,this.flips++}toPlate(t=0){this.moveT=0,this.moveFrom=this.group.position.clone(),this.moveOff=t}topY(){return this.group.position.y+Ki/2+.003}update(t,e,n={sauce:0,mayo:0}){this.group.visible=e.size>.01;const s=.05+Math.min(1.1,e.size)*.045;this.radius=s,this.body.scale.set(s,1,s),this.pork.scale.set(1/s,1,1/s),this.pork.visible=e.pork;for(const o of[0,1])Qv(e.d[o],e.c[o],this.mat[o].color);if(mu({raw:15910076,cooked:14723184,over:9062940,band:[.9,1.45],burnAt:2.1},e.porkD,e.porkC,0,null,this._rgb),this.porkMat.color.setRGB(this._rgb[0]/255,this._rgb[1]/255,this._rgb[2]/255,ln),this.flipT<1){this.flipT=Math.min(1,this.flipT+t/.55);const o=this.flipT;this.body.position.y=Math.sin(o*Math.PI)*.1,this.body.rotation.x=this.flipFrom+o*Math.PI;const a=o>.85?1-Math.sin((o-.85)/.15*Math.PI)*.25:1;this.body.scale.y=a}else this.body.position.y=0,this.body.rotation.x=this.flips*Math.PI,this.body.scale.y=1;if(this.moveT<1){this.moveT=Math.min(1,this.moveT+t/.7);const o=this.moveT,a=o*o*(3-2*o);this.group.position.set(this.moveFrom.x+(nt.x+(this.moveOff||0)-this.moveFrom.x)*a,this.moveFrom.y+(nt.wellY+Ki/2+.001-this.moveFrom.y)*a+Math.sin(o*Math.PI)*.08,this.moveFrom.z+(nt.z-this.moveFrom.z)*a)}const r=Ki/2+.0045;this.sauce.position.y=r,this.sauce.scale.setScalar(s*(.5+Math.min(1,n.sauce)*.45)),this.sauce.material.opacity=Math.min(.95,n.sauce*1.6),this.mayo.mesh.position.y=r+.0015,this.mayo.mesh.scale.set(s,1,s),this.mayo.mesh.geometry.setDrawRange(0,Math.floor(Math.min(1,n.mayo)*this.mayo.segs)*6)}}function e1(i=1,t=0){const e=Math.max(.8,1.7-.15*(i-1)-.12*t),n=Math.max(.13,.24-.025*(i-1)-.02*t);return{period:e,width:n}}function n1(i,t){const{period:e,width:n}=e1(i,t);return{t:0,period:e,width:n,zone:[.5-n/2,.5+n/2]}}function wu(i){return(1-Math.cos(2*Math.PI*i.t/i.period))/2}function i1(i,[t,e]){if(i>=t&&i<=e)return 1;const n=i<t?t-i:i-e;return Math.max(0,1-n/.3)}function s1(i,t=.5){const e=wu(i),n=i1(e,i.zone),s=.25+t*.5;return i.zone=[s-i.width/2,s+i.width/2],{q:n,p:e}}function r1(i){const t=(i.zone[0]+i.zone[1])/2;i.t=Math.acos(1-2*t)/(2*Math.PI)*i.period}function Tu(i,t){return i*(1+t*.9)}const o1=.3;function a1(){const i=new ie,t=new kt({color:11843772,metalness:1,roughness:.35,side:te}),e=.1,n=[[0,.002],[e*.55,.002],[e*.85,.02],[e,.06],[e+.003,.062],[e-.001,.059],[e*.83,.021],[e*.52,.005],[0,.005]];i.add(new pt(new wi(n.map(([r,o])=>new q(r,o)),40),t));const s=new pt(new hn(e*.86,40),new ce({map:hu(),color:16050896,roughness:.4,clearcoat:.6,metalness:0}));s.rotation.x=-Math.PI/2,s.position.y=.035,i.add(s),i.userData.batter=s,i.position.set(ve.x,ve.topY,ve.z);for(const r of i.children)r.castShadow=!0,r.receiveShadow=!0;return i}const l1={_osakaStart(i){this.cake=i.cake?pv():null,this.finish={sauce:0,mayo:0},this.report.skills={},this.report.finish={},this.report.notes=[],this.pancakePlated=!1,this.pancake&&(this.pancake.flips=0,this.pancake.flipT=1,this.pancake.moveT=1,this.pancake.at(0,lt.y+.045,0),this.pancake.group.visible=!1),this.cooker.kind==="takopan"&&this.cooker.reset(),this.mixBowl&&(this.mixBowl.visible=!1)},_holdVerb(i){return i==="pancake"||i==="fill"||i==="drizzle"},_enter_mix(i){this.cam.go("board"),this.mixBowl||(this.mixBowl=a1(),this.scene.add(this.mixBowl)),this.mixBowl.visible=!0,this.board.bunch.visible=!1,this.st.strokes=0,this.st.anchor=null;const[t,e]=i.strokes;this.hud.showMeter("Batter",[1.3*t/e,1.3]),this.hud.setActions([{id:"next",label:"DONE",disabled:!0}])},_mixMove(){const i=this.pointer.hist,t=i[i.length-1];if(!t)return;if(!this.st.anchor){this.st.anchor=t,this.st.dir=0;return}const e=t.x-this.st.anchor.x,n=t.y-this.st.anchor.y,s=Math.abs(e)>=Math.abs(n)?e:n,r=Math.sign(s);if(Math.abs(s)>.07&&r!==this.st.dir){this.st.strokes++,this.st.dir=r,this.audio.play("sprinkle",{gain:1.2,rate:.5});const o=this.mixBowl.userData.batter;o.rotation.z+=.7,o.position.y=.035+(this.st.strokes%2?.003:0)}r===this.st.dir&&Math.abs(s)>.07&&(this.st.anchor=t)},_mixDone(i){const[t,e]=i.strokes,n=this.st.strokes,s=n<t?Math.max(0,n/t):n<=e?1:Math.max(.2,1-(n-e)/e);this.report.skills.mix=s,n>e*1.3?this.report.notes.push("You overmixed the batter. It went heavy and tough."):n<t*.6&&this.report.notes.push("The batter was barely mixed. Lumps of flour in every bite.")},_enter_pancake(i){this._enterHold(i,"HOLD<br>TO POUR",15919304)},_enter_fill(i){this._enterHold(i,"HOLD<br>TO POUR",15919304)},_enter_drizzle(i){this.cam.go("plate"),this._enterHold(i,i.what==="mayo"?"HOLD TO<br>DRIZZLE":"HOLD<br>TO BRUSH",null)},_enterHold(i,t,e){i.verb!=="drizzle"&&this.cam.go(this.cooker.view),i.verb!=="drizzle"&&this.hud.showFlame(!0),this.st.amount=0,this.st.poured=!1,this.hud.setActions([{id:"pour",label:t,cls:"pour",hold:!0}]),this.hud.showPour(i.target),e!=null&&(this.ladle.setLiquid(e),this.ladle.group.visible=!0),i.verb==="pancake"&&this.mixBowl&&(this.mixBowl.visible=!1)},_holdOsaka(i){const t=this.step;this.st.poured||(this.st.pouring=i,i&&this.audio.play(t.verb==="drizzle"?"sprinkle":"plop",{gain:.6}),!i&&this.st.amount>.03&&this._finishHold())},_finishHold(){const i=this.step;this.st.poured=!0,this.st.pouring=!1;const t=this.st.amount,e=bl(t,i.target);this.hud.toast(e>.9?"Spot on!":t<i.target[0]?"A bit light":e>.5?"A bit much":"Way too much",e<.6),this.hud.enable("pour",!1),i.verb==="pancake"&&(this.report.skills.size=e),i.verb==="fill"&&(this.report.skills.fill=e),i.verb==="drizzle"&&(this.report.finish[i.what]=e),this.st.doneT=.6},_holdTick(i){const t=this.step,e=this.st;e.poured||(e.pouring&&(e.held=(e.held||0)+i,e.amount=Math.min(1.2,e.amount+Tu(o1,e.held)*i),e.amount>=1.2&&this._finishHold()),this.hud.setPour(e.amount),t.verb==="pancake"&&(this.cake.size=e.amount),t.verb==="fill"&&(this.cooker.fill=e.amount),t.verb==="drizzle"&&(this.finish[t.what]=e.amount))},_enter_top(i){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.left=[...i.items],this.bowls.highlight(this.st.left)},_enter_drop(i){this._enter_top(i)},_tapTopping(){const i=this.st.left[0];if(!i)return;const t=this._press();t<.45?this.hud.toast("Spilled some!",!0):t>.9&&this.hud.toast("Nice!"),this.st.left.shift(),this.bowls.highlight(this.st.left);const e=an[i];this.bowls.tip(i,this.cooker.dropPoint(),()=>{if(this.step.verb==="top")this.cake.pork=!0;else if(i==="octopus")this.cooker.dropOcto();else{const n=qn(e);n.color.set(e.raw),this.cooker.sprinkle(i,bs(e),n,i==="tenkasu"?50:30)}this.audio.play("plop"),this.stove.T>150&&this.audio.play("hiss",{gain:.3}),this.st.left.length||(this.st.doneT=.7)})},_enter_flip(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.showMeter("Underside",[.9,1.3]),this.hud.setActions([{id:"flip",label:"FLIP",cls:"round"}]),this.st.flipped=!1},_doFlip(){if(this.st.flipped)return;this.st.flipped=!0;const i=gv(this.cake);this.pancake.flip(),this.audio.play("whoosh"),this.audio.play("plop",{gain:1.2}),this.stove.T>150&&this.audio.play("hiss",{gain:.6}),i.broke?(this.hud.toast("It broke!",!0),this.report.notes.some(t=>t.startsWith("It broke"))||this.report.notes.push("It broke on the flip. Wait for golden underneath before you turn it.")):this.hud.toast(i.score>.85?"Perfect flip!":i.face>$e.band[1]?"A bit dark":"A bit pale",i.score<.6),this.hud.enable("flip",!1),this.st.doneT=.8},_enter_turn(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.showMeter("Undersides",[.9,1.3]),this.hud.setActions([{id:"turn",label:"TURN",cls:"round"},{id:"next",label:"DONE",disabled:!0}]),this.st.lastTurn=-9},_doTurn(){if(this.time-this.st.lastTurn<.35)return;this.st.lastTurn=this.time;let i=0;for(const e of this.cooker.balls)yv(e).early&&i++;this.audio.play("tick",{gain:1.4}),this.audio.play("crack",{gain:.3,rate:1.4});const t=Math.min(...this.cooker.balls.map(e=>e.turns));this.hud.toast(i>6?"Too soon!":t===1?"Quarter turn":t===2?"Round now!":"Turn"),this.hud.enable("next",t>=2),this.hud.setHint(t<2?"Turn again when the bar is green":"Keep turning until they are golden all round. Then DONE")},_turnDone(){const i=this.cooker.balls.flatMap(e=>e.turnScores.slice(0,4));this.report.skills.turn=i.length?i.reduce((e,n)=>e+n,0)/i.length:0,this.cooker.balls.filter(e=>e.torn).length>3&&this.report.notes.push("Turned too soon: they tore and never rounded. Wait for a golden shell.")},_plateOsaka(){if(this.cake){this.pancake.toPlate((1-(this.st.plateQ??1))*.04),this.pancakePlated=!0;const i=qa();return i.puck={x:nt.x,z:nt.z,r:this.pancake.radius*.95,top:nt.wellY+.024},this.sim.container=i,!0}if(this.cooker.kind==="takopan"){this.cooker.toBoat();const i=qa();return i.spheres=this.cooker.obstacles(),this.sim.container=i,!0}return!1},_osakaUpdate(i){const t=this.stove.T;if((this.cake&&this.cake.size>.02&&!this.pancakePlated||this.cooker.kind==="takopan"&&this.cooker.fill>.5&&!this.cooker.plated)&&this.mode==="play"&&(this.report.ironTime=(this.report.ironTime||0)+i,t>190&&t<262&&(this.report.hotTime=(this.report.hotTime||0)+i)),this.cake&&this.cake.size>.02&&!this.pancakePlated&&mv(this.cake,t,i),this.pancake&&this.cake?this.pancake.update(i,this.cake,this.finish):this.pancake&&(this.pancake.group.visible=!1),this.cooker.kind==="takopan"){if(this.cooker.fill>.5&&!this.cooker.plated)for(const n of this.cooker.balls)vv(n,t,i);this.cooker.finish.sauce=this.finish.sauce,this.finish.mayo>0&&this.cooker.drawMayo(this.finish.mayo)}},_osakaSizzle(){const i=vs(this.stove.T);return this.cake&&this.cake.size>.05&&!this.pancakePlated?i*.75:this.cooker.kind==="takopan"&&this.cooker.fill>.3&&!this.cooker.plated?i*.65:0},_osakaStep(i){const t=this.step;if(this._holdVerb(t.verb)&&this._holdTick(i),t.verb==="mix"){const[,e]=t.strokes,n=1.3*this.st.strokes/e;this.hud.setMeter(n,n<1.3*t.strokes[0]/e?"Lumpy":n<=1.3?"Just right":"Overmixed",n>1.3?"Stop! It is getting tough":""),this.hud.enable("next",this.st.strokes>=3)}if(t.verb==="flip"){const e=this.cake.d[this.cake.down],n=.9+(e-$e.band[0])/($e.band[1]-$e.band[0])*.4;this.hud.setMeter(n,e<$e.breakBelow?"Too soft to flip":e<$e.band[0]?"Nearly":e<=$e.band[1]?"Golden: flip!":"Burning!",this.stove.T<150?"The teppan is too cool. More flame":"")}if(t.verb==="turn"){const e=this.cooker.balls,n=e.reduce((r,o)=>r+Ya(o),0)/e.length,s=.9+(n-cn.band[0])/(cn.band[1]-cn.band[0])*.4;this.hud.setMeter(s,n<cn.turnFloor?"Still setting":n<cn.band[0]?"Nearly":n<=cn.band[1]?"Golden: turn!":"Burning!",this.stove.T<150?"The pan is too cool. More flame":"")}},_osakaReport(i){if(this.cake||this.cooker.kind==="takopan"){const t=(this.report.hotTime||0)/Math.max(1,this.report.ironTime||0);this.report.heiOverride=t,t<.5&&this.report.notes.push("The iron was too cool. It needs real heat to crisp.")}if(this.cake){const t=_v(this.cake);i.okonomiBase={d:t.cakeD,c:t.cakeC},i.porkBelly={d:t.porkD,c:t.porkC},this.report.skills.flip=t.flip,this.cake.flips<2&&this.report.notes.push("It only went over once. The pork side needs its turn on the steel.")}if(this.cooker.kind==="takopan"&&this.cooker.balls.length){const t=this.cooker.balls.slice(0,8).map(e=>Mv(e));i.takoBall={d:t.map(e=>e.formed?e.mean:e.mean*.55),c:t.map(e=>e.burnt)}}},_osakaAuto(i){const t=e=>{for(let n=0;n<e;n++)this.update(.016666666666666666)};if(i.verb==="mix"){const e=Math.round((i.strokes[0]+i.strokes[1])/2);this.st.strokes=e,this.next()}else if(this._holdVerb(i.verb)){const e=(i.target[0]+i.target[1])/2;this._holdOsaka(!0);for(let n=0;n<600&&this.st.amount<e;n++)this.update(1/60);this._holdOsaka(!1),t(60)}else if(i.verb==="top"||i.verb==="drop"){for(let e=0;e<i.items.length;e++)this._tapTopping(),t(20);t(90)}else if(i.verb==="flip"){for(let e=0;e<1800&&this.cake.d[this.cake.down]<1.08;e++)this.update(1/60);this._doFlip(),t(70)}else if(i.verb==="turn"){for(let e=0;e<4;e++){for(let n=0;n<1800&&this.cooker.balls.reduce((s,r)=>s+Ya(r),0)/this.cooker.balls.length<1.05;n++)this.update(1/60);this._doTurn(),t(25)}this.next()}}},Ye=.24;class c1{constructor(t){this.ing=t,this.group=new ie,this.group.position.set(ve.x,ve.topY,ve.z),this.start=-Ye/2,this.end=Ye/2;const e=t.bunch||{style:"blade",colour:t.raw},n=(d,m={})=>new ce({color:d,roughness:.45,sheen:.5,sheenColor:new ct(14221232),clearcoat:.35,metalness:0,...m}),s=new ie,r=(d,m,_,p,g,M=0)=>{const v=new pt(d,m);v.position.set(_,p,g),v.rotation.y=M,v.castShadow=!0,v.receiveShadow=!0,s.add(v)};if(e.style==="pods"){const d=n(e.colour,{sheen:0,clearcoat:.9,roughness:.3}),m=n(e.base??4160038),_=new zt(.0038,.0012,.056,10);_.rotateZ(Math.PI/2),_.translate(.028,0,0);const p=new zt(.001,.0016,.012,6);p.rotateZ(Math.PI/2),p.translate(-.004,0,0);for(let g=0;g<3;g++)for(let M=0;M<4;M++){const v=M*.06+g%2*.012,y=(g-1)*.009;r(_,d,v,.004,y,Math.sin(g*3+M)*.05),r(p,m,v,.004,y)}}else if(e.style==="stalk"){const d=n(e.colour),m=n(e.base??3111466,{side:te}),_=new zt(.0048,.0058,Ye*.8,10);_.rotateZ(Math.PI/2),_.translate(Ye*.4,0,0);const p=new de(.03,12,8);p.scale(1.4,.12,.8);for(let g=0;g<3;g++)r(_,d,0,.005+(g===1?.004:0),(g-1)*.012),r(p,m,Ye*.86,.007+g*.002,(g-1)*.016,(g-1)*.4)}else if(e.style==="head"){n(e.colour,{sheen:.3});const d=n(e.base??10273914,{sheen:.3}),m=new de(.075,20,12,0,Math.PI*2,0,Math.PI/2);m.scale(Ye/.15*.5,.9,.95),m.translate(Ye/2,0,0),r(m,d,0,0,0);const _=new hn(.074,24);_.rotateX(-Math.PI/2),_.scale(Ye/.15*.5,1,.95),_.translate(Ye/2,.001,0)}else{const d=n(e.colour),m=e.base!=null?n(e.base,{sheen:.2}):null;for(let _=0;_<12;_++){const p=new Ft(Ye,.0022,.0055);p.translate(Ye/2,0,0),r(p,d,0,.0015+_%3*.0024,(_-5.5)*.0042+Math.sin(_*2.3)*.001,Math.sin(_*1.7)*.012)}if(m){const _=new zt(.009,.01,.045,12);_.rotateZ(Math.PI/2),_.translate(.02,.004,0),r(_,m,0,0,0)}}const o=new pt(new Cn(.03,.0025,6,20),new kt({color:13777450,roughness:.5,metalness:0}));o.rotation.y=Math.PI/2,o.scale.set(1,.3,1),o.position.set(.02,.004,0),e.style!=="pods"&&e.style!=="head"&&s.add(o),s.position.x=this.start,this.bunch=s,this.group.add(s),this.dotGeo=new hn(.0022,10),this.dotGeo.rotateX(-Math.PI/2),this.dotMat=new Te({color:new ct(1.6,1.6,1.5),transparent:!0,opacity:.9,depthWrite:!1}),this.guides=new ie,this.group.add(this.guides),this.pile=new us(bs(t),qn(t),40),this.pile.count=0,this.pile.castShadow=!0,this.pile.setColorAt(0,new ct(1,1,1)),this.group.add(this.pile);const a=new kt({color:11975357,metalness:1,roughness:.25}),l=new kt({color:4860436,roughness:.6,metalness:0}),c=new ie,h=new pt(new Ft(.0025,.07,.17),a);h.position.set(0,.035,0);const u=new pt(new Ft(.001,.008,.17),new kt({color:15265007,metalness:1,roughness:.12}));u.position.set(0,.002,0);const f=new pt(new zt(.011,.012,.11,10),l);f.rotation.x=Math.PI/2,f.position.set(0,.058,.14),c.add(h,u,f);for(const d of c.children)d.castShadow=!0;c.rotation.z=.7,this.knife=c,this.knife.position.set(.08,.06,.02),this.group.add(c),this.knifeY=.06,this.knifeDrop=0,this.knifeTarget=new C(.08,.06,.02),this._m=new Jt,this._q=new gn,this._e=new Ze,this._p=new C,this._s=new C(1,1,1),this.pieces=0}setGuides(t,e){t[e]!=null&&this.knifeTarget.set(t[e],.05,0),this.guides.clear(),t.forEach((n,s)=>{if(!(s<e))for(let r=-4;r<=4;r++){const o=new pt(this.dotGeo,this.dotMat);o.position.set(n,.0095,r*.0065),o.scale.setScalar(s===e?1.3:.8),this.guides.add(o)}})}cutAt(t,e){this.end=t,this.bunch.scale.x=Math.max(.02,(t-this.start)/Ye),this.knifeDrop=1;const n=3;for(let s=0;s<n&&this.pile.count<40;s++){const r=this.pile.count++;this._p.set(.06+Math.random()*.05,.004+r%5*.0025,.05+Math.random()*.05),this._e.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),this._q.setFromEuler(this._e);const o=Math.max(.6,Math.min(1.4,e/.034));this._s.set(o,1,1),this._m.compose(this._p,this._q,this._s),this.pile.setMatrixAt(r,this._m),this.pile.setColorAt(r,new ct(this.ing.raw))}this.pile.instanceMatrix.needsUpdate=!0,this.pile.instanceColor.needsUpdate=!0}sweep(){this.pile.count=0}reset(){this.end=Ye/2,this.bunch.scale.x=1,this.sweep(),this.bunch.visible=!0}local(t){return t?{x:t.x-ve.x,z:t.z-ve.z}:null}follow(t){t&&this.knifeTarget.set(t.x,.05,t.z*.3)}update(t){this.knifeDrop=Math.max(0,this.knifeDrop-t*5);const e=Math.sin(this.knifeDrop*Math.PI)*.05;this.knife.position.x+=(this.knifeTarget.x-this.knife.position.x)*Math.min(1,t*18),this.knife.position.z+=(this.knifeTarget.z-this.knife.position.z)*Math.min(1,t*18),this.knife.position.y=.05-e}}const ih=i=>new ct(i);function h1(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function u1(i=on.r){const t=[[0,.002],[i*.55,.002],[i*.82,.012],[i,.034],[i+.003,.0355],[i-.001,.033],[i*.8,.013],[i*.52,.0045],[0,.0045]];return new wi(t.map(([e,n])=>new q(e,n)),36)}class f1{constructor(t,e,n){this.group=new ie,this.bowls=new Map;const s=u1();this.ids=t,t.forEach((r,o)=>{const a=new ie,l=new pt(s,n);l.castShadow=!0,l.receiveShadow=!0,l.userData.bowlId=r,a.add(l);const c=new pt(new zt(on.r*1.25,on.r*1.25,.07,16),new Te({visible:!1}));c.position.y=.03,c.userData.bowlId=r,a.add(c);const h=new pt(new xl(on.r*1.08,on.r*1.28,40),new Te({color:new ct(1.6,1.25,.5),transparent:!0,opacity:0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.002,a.add(h);const u=new ie;a.add(u),this.group.add(a);const f={id:r,group:a,bowl:l,hit:c,ring:h,contents:u,full:!1,home:new C,anim:null,lit:!1};this.bowls.set(r,f),this.fill(r,e[r])}),this.layout(!1),this.time=0}layout(t){const e=this.ids.length;this.ids.forEach((n,s)=>{const r=this.bowls.get(n);if(t&&e>4){const o=Math.ceil(e/2),a=Math.floor(s/o),l=s%o;r.home.set((l-(o-1)/2)*on.portrait.spacing,lt.y,on.portrait.rows[a])}else{const o=t?on.portrait.rows[1]-.04:on.z;r.home.set((s-(e-1)/2)*(t?on.portrait.spacing:on.spacing),lt.y,o)}r.anim||r.group.position.copy(r.home)})}fill(t,e,n){const s=this.bowls.get(t);if(s.contents.clear(),s.full=!!e&&n!==0,!s.full)return;const r=h1(t.length*97+11);if(e.shape==="strand"){const p=e.points,g={x:new Float32Array(9*p*3)},M=new Float32Array(9*p*3),v=ih(e.raw),y=[];for(let T=0;T<9;T++){let L=r()*Math.PI*2;const I=on.r*(.35+r()*.4);for(let x=0;x<p;x++){const S=T*p+x;L+=.55,g.x[S*3]=Math.cos(L)*I*(.8+r()*.3),g.x[S*3+1]=.012+T*.0016+r()*.004,g.x[S*3+2]=Math.sin(L)*I*(.8+r()*.3),M[S*3]=v.r,M[S*3+1]=v.g,M[S*3+2]=v.b}y.push({first:T*p,n:p})}const R=qn(e);R.side=te;const E=new bu(9,p,e.width,R);E.update(g,y,M),s.contents.add(E.mesh);return}if(e.shape==="curd"){const _=new pt(vu(),new kt({color:15323046,roughness:.55,metalness:0}));_.position.set(0,.03,0),_.rotation.z=1.2,_.castShadow=!0,s.contents.add(_);return}const o=n??Math.min(e.count??10,26),a=qn(e),l=new us(bs(e),a,o),c=new Jt,h=new gn,u=new Ze,f=new C,d=new C,m=ih(e.raw);for(let _=0;_<o;_++){const p=r()*Math.PI*2,g=Math.sqrt(r())*on.r*.6;f.set(Math.cos(p)*g,.008+e.r*.6+_/o*.012,Math.sin(p)*g),u.set(r()*6,r()*6,r()*6),h.setFromEuler(u);const M=.85+r()*.3;d.set(M,M,M),c.compose(f,h,d),l.setMatrixAt(_,c),l.setColorAt(_,m)}l.castShadow=!0,s.contents.add(l)}highlight(t){for(const e of this.bowls.values())e.lit=t.includes(e.id)&&e.full}tip(t,e,n){const s=this.bowls.get(t);return!s||s.anim?!1:(s.anim={t:0,from:s.home,to:new C(e.x+(s.home.x>0?.07:-.07),e.y+.13,e.z+.06),fired:!1,onTip:n},!0)}pick(t){const e=t.intersectObjects([...this.bowls.values()].map(n=>n.hit),!1);return e.length?e[0].object.userData.bowlId:null}update(t){this.time+=t;for(const e of this.bowls.values()){const n=e.lit?.55+Math.sin(this.time*5)*.3:0;if(e.ring.material.opacity+=(n-e.ring.material.opacity)*Math.min(1,t*8),!e.anim)continue;const s=e.anim;if(s.t+=t,s.t<.35){const r=s.t/.35,o=r*r*(3-2*r);e.group.position.lerpVectors(s.from,s.to,o),e.group.position.y+=Math.sin(r*Math.PI)*.06,e.group.rotation.z=(e.home.x>0?1:-1)*o*.4}else if(s.t<.75){const r=(s.t-.35)/.4;e.group.position.copy(s.to),e.group.rotation.z=(e.home.x>0?1:-1)*(.4+Math.min(1,r*2)*1.5),!s.fired&&r>.15&&(s.fired=!0,e.contents.clear(),e.full=!1,s.onTip?.())}else if(s.t<1.15){const r=(s.t-.75)/.4,o=r*r*(3-2*r);e.group.position.lerpVectors(s.to,s.from,o),e.group.rotation.z=(e.home.x>0?1:-1)*1.9*(1-o)}else e.group.position.copy(s.from),e.group.rotation.z=0,e.anim=null}}}const d1=.004,p1=.03;function m1(i,t,e){const n=[],s=(e-t)/(i+1);for(let r=0;r<i;r++)n.push(e-s*(r+1));return{guides:n,next:0,end:e,start:t,acc:[],pieces:[]}}function g1(i){return i.next<i.guides.length?i.guides[i.next]:null}function _1(i,t){const e=g1(i);if(e===null)return null;const n=Math.max(i.start+.01,Math.min(i.end-.004,t)),s=Math.abs(n-e),r=Math.max(0,1-Math.max(0,s-d1)/p1),o={from:n,to:i.end,len:i.end-n};return i.acc.push(r),i.pieces.push(o),i.end=n,i.next++,{acc:r,piece:o,done:i.next>=i.guides.length}}function x1(i){return i.acc.length?i.acc.reduce((t,e)=>t+e,0)/i.guides.length:0}class v1{constructor(t=90){this.group=new ie,this.items=[];const e=j_();for(let n=0;n<t;n++){const s=new Yr({map:e,color:16777215,transparent:!0,depthWrite:!1,opacity:0}),r=new Ba(s);r.visible=!1,r.renderOrder=3,this.group.add(r),this.items.push({s:r,life:0,max:1,vx:0,vy:0,vz:0,grow:0,a:0})}this.next=0,this.spark=new y1,this.group.add(this.spark.points)}emit(t,e,n,{colour:s=16777215,size:r=.05,life:o=1.6,rise:a=.12,alpha:l=.35,spread:c=.02}={}){const h=this.items[this.next];this.next=(this.next+1)%this.items.length,h.s.position.set(t+(Math.random()-.5)*c,e,n+(Math.random()-.5)*c),h.s.material.color.set(s),h.s.material.rotation=Math.random()*Math.PI*2,h.s.scale.setScalar(r),h.life=0,h.max=o*(.8+Math.random()*.4),h.vx=(Math.random()-.5)*.03,h.vy=a*(.7+Math.random()*.6),h.vz=(Math.random()-.5)*.03,h.grow=r*1.6,h.a=l,h.s.visible=!0}update(t){for(const e of this.items){if(!e.s.visible)continue;e.life+=t;const n=e.life/e.max;if(n>=1){e.s.visible=!1;continue}e.s.position.x+=e.vx*t,e.s.position.y+=e.vy*t,e.s.position.z+=e.vz*t,e.vx+=Math.sin(e.life*3+e.a*9)*.02*t;const s=e.s.scale.x+e.grow*t;e.s.scale.setScalar(s),e.s.material.rotation+=t*.3,e.s.material.opacity=e.a*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}this.spark.update(t)}}class y1{constructor(t=160){this.max=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t);const e=new _e;e.setAttribute("position",new Ie(this.pos,3).setUsage(Ji)),this.points=new Kg(e,new qh({color:new ct(1.6,1.3,.8),size:.004,transparent:!0,opacity:.9,blending:ns,depthWrite:!1,map:Kr()})),this.points.frustumCulled=!1,this.geo=e,this.next=0}burst(t,e,n,s=20,r=.9){for(let o=0;o<s;o++){const a=this.next;this.next=(this.next+1)%this.max,this.pos[a*3]=t+(Math.random()-.5)*.08,this.pos[a*3+1]=e,this.pos[a*3+2]=n+(Math.random()-.5)*.08;const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.vel[a*3]=Math.cos(l)*c*.4,this.vel[a*3+1]=c,this.vel[a*3+2]=Math.sin(l)*c*.4,this.life[a]=.3+Math.random()*.4}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.pos[e*3+1]=-10;continue}this.life[e]-=t,this.vel[e*3+1]-=9.8*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t}this.geo.attributes.position.needsUpdate=!0}}const $a=1,sh=3,M1=["thai"];function b1(i,t,e=!1){const n=t.best||{},s=new Set([...M1,...t.opened||[]]),r=c=>(n[c]?.stars??0)>=$a;let o=0;const a=i.map(c=>{const u=(e||c.ready!==!1?c.dishes||[]:[]).map((m,_,p)=>({id:m,level:_+1,best:n[m]||null,passed:r(m),open:e||_===0||r(p[_-1]),needs:_>0?p[_-1]:null})),f=u.filter(m=>m.passed).length,d=f>=sh;return d&&o++,{id:c.id,passedCount:f,stamp:d,dishes:u,open:e||s.has(c.id),playable:u.length>0,toStamp:Math.max(0,sh-f)}}),l=Math.max(0,o-(t.spent||0));return{countries:a,stamps:l,earned:o}}function S1(i,t){const e={dishes:[],stamp:!1};return t.countries.forEach((n,s)=>{const r=i.countries[s];n.dishes.forEach((o,a)=>{o.open&&!r.dishes[a].open&&e.dishes.push(o.id)}),n.stamp&&!r.stamp&&(e.stamp=!0)}),e}const Zo=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},Xe=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class w1{constructor(t,e){this.root=t,this.h=e,t.innerHTML=`
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
      <button id="sound" aria-label="Sound">SND</button>`,this.$=n=>t.querySelector(n),this.card=this.$("#card"),this.meter=this.$("#meter"),this.flame=this.$("#flame"),this.pour=this.$("#pour"),this.garnish=this.$("#garnish"),this.actions=this.$("#actions"),this.toastEl=this.$("#toast"),this.timing=this.$("#timing"),this.gesture=this.$("#gesture"),this.menu=this.$("#menu"),this.result=this.$("#result"),this.$("#sound").addEventListener("click",()=>e.onSound?.()),this.$("#home").addEventListener("click",()=>e.onMenu?.()),this._flameDrag(),this._toastT=0}setStep(t,e,n,s,r){this.card.classList.remove("hide"),this.card.querySelector(".dn").textContent=t,this.card.querySelector(".say").textContent=e,this.card.querySelector(".hint").textContent=n||"";const o=this.card.querySelector("#dots");o.innerHTML="";for(let a=0;a<r;a++)o.appendChild(Zo("i",a<s?"done":a===s?"now":""));requestAnimationFrame(()=>{this.root.style.setProperty("--card-h",this.card.offsetHeight+"px")}),this.root.style.setProperty("--card-h",(this.card.offsetHeight||96)+"px")}setHint(t){this.card.querySelector(".hint").textContent=t}hideCard(){this.card.classList.add("hide")}showFlame(t){this.flame.classList.toggle("hide",!t)}setFlame(t,e){const n=Math.round(t*100);this.flame.querySelector(".fill").style.height=n+"%",this.flame.querySelector(".knob").style.bottom=`calc(${n}% - 7px)`;const s=this.flame.querySelector(".temp");s.textContent=Math.round(e)+"°C",s.style.color=e>230?"#ff7a4a":e>170?"#ffc55a":"#cdbfae"}_flameDrag(){const t=this.flame.querySelector(".track");let e=!1;const n=r=>{const o=t.getBoundingClientRect(),a=1-(r.clientY-o.top)/o.height;this.h.onFlame?.(Math.max(0,Math.min(1,a)))};this.flame.addEventListener("pointerdown",r=>{e=!0,this.flame.setPointerCapture(r.pointerId),n(r),r.stopPropagation()}),this.flame.addEventListener("pointermove",r=>{e&&n(r)});const s=()=>{e=!1};this.flame.addEventListener("pointerup",s),this.flame.addEventListener("pointercancel",s)}showMeter(t,e){this.meter.classList.remove("hide"),this.meter.querySelector(".what").textContent=t;const n=this.meter.querySelector(".band");n.style.left=e[0]/2*100+"%",n.style.width=(e[1]-e[0])/2*100+"%"}setMeter(t,e,n){this.meter.querySelector(".mark").style.left=Math.min(100,t/2*100)+"%",this.meter.querySelector(".state").textContent=e,this.meter.querySelector(".warn").textContent=n||""}hideMeter(){this.meter.classList.add("hide")}showPour(t){this.pour.classList.remove("hide");const e=this.pour.querySelector(".band");e.style.bottom=t[0]*100+"%",e.style.height=(t[1]-t[0])*100+"%",this.setPour(0)}setPour(t){this.pour.querySelector(".fill").style.height=Math.min(100,t*100)+"%"}hidePour(){this.pour.classList.add("hide")}setActions(t){this.actions.innerHTML="",this._btns={};for(const e of t){const n=Zo("button","btn "+(e.cls||""),e.label);if(e.disabled&&(n.disabled=!0),e.hold){const s=o=>{o.preventDefault(),n.classList.add("on"),n.setPointerCapture?.(o.pointerId),this.h.onHold?.(e.id,!0)},r=()=>{n.classList.contains("on")&&(n.classList.remove("on"),this.h.onHold?.(e.id,!1))};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("lostpointercapture",r)}else n.addEventListener("click",s=>{s.stopPropagation(),this.h.onAction?.(e.id)});this.actions.appendChild(n),this._btns[e.id]=n}}enable(t,e){this._btns?.[t]&&(this._btns[t].disabled=!e)}label(t,e){this._btns?.[t]&&(this._btns[t].innerHTML=e)}showGarnish(t,e,n){this.garnish.classList.remove("hide"),this.garnish.innerHTML="";for(const s of t){const r=Zo("button","chip"+(s.id===n?" sel":""),`<i style="background:${s.css}"></i>${Xe(s.name)} <small>${e[s.id]||0}</small>`);r.dataset.id=s.id,r.addEventListener("click",o=>{o.stopPropagation(),this.h.onGarnish?.(s.id)}),this.garnish.appendChild(r)}}hideGarnish(){this.garnish.classList.add("hide")}cue(t=[]){for(const[e,n]of Object.entries(this._btns||{}))n.classList.toggle("cue",t.includes(e)&&!n.disabled)}cueFlame(t){this.flame.querySelector(".track").classList.toggle("cue",!!t)}cueChips(t=[]){this.garnish.querySelectorAll(".chip").forEach(e=>e.classList.toggle("cue",t.includes(e.dataset.id)))}showTiming(t,e){this.timing.classList.remove("hide"),this.timing.querySelector(".lbl").textContent=t,this.setZone(e)}setZone([t,e]){const n=this.timing.querySelector(".zone");n.style.left=t*100+"%",n.style.width=(e-t)*100+"%"}setTiming(t){this.timing.querySelector(".mark").style.left=t*100+"%"}timingFlash(t){this.timing.classList.remove("hit","miss"),this.timing.offsetWidth,this.timing.classList.add(t?"hit":"miss")}hideTiming(){this.timing.classList.add("hide")}showGesture(t,e){this.gesture.className=t,this.gesture.querySelector(".t").textContent=e}hideGesture(){this.gesture.className="hide"}toast(t,e=!1){this.toastEl.textContent=t,this.toastEl.classList.toggle("bad",e),this.toastEl.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toastEl.classList.remove("on"),900)}showMenu(t,e,n){this.menu.classList.remove("hide"),this.$("#home").classList.add("hide");const s=a=>[0,1,2].map(l=>`<i class="${l<a?"on":""}">★</i>`).join(""),r=t.map((a,l)=>{const c=n.countries[l],h=c.dishes.map(m=>{const _=e[m.id];if(!c.open||!m.open){const g=c.open?`Score ${$a}★ on ${Xe(e[m.needs].name)} to unlock`:"";return`<div class="dishbtn locked"><span class="lv">${m.level}</span><span class="txt"><span class="n">${Xe(_.name)}</span> <span class="l">${Xe(_.local||"")}</span><br><span class="l">${g}</span></span><span class="b">LOCKED</span></div>`}const p=m.best?`<span class="st">${s(m.best.stars)}</span>${m.best.total}`:"COOK";return`<button class="dishbtn" data-dish="${m.id}"><span class="lv">${m.level}</span><span class="txt"><span class="n">${Xe(_.name)}</span> <span class="l">${Xe(_.local||"")}</span><br><span class="l">${Xe(_.blurb)}</span></span><span class="b">${p}</span></button>`}).join(""),u=a.soon?.length?`<div class="soonrow">Coming: ${a.soon.map(Xe).join(" · ")}</div>`:"";let f="";c.open&&c.playable&&(f=c.stamp?'<span class="stamp">Passport stamp earned</span>':`<span class="tostamp">${c.toStamp} more to earn a passport stamp</span>`);let d="";return c.open||(d=c.playable?n.stamps>0?`<button class="btn openbtn" data-open="${a.id}">Open with a passport stamp</button>`:'<div class="soonrow">Locked. Earn a passport stamp to open it</div>':'<div class="soonrow">Locked. Coming soon</div>'),`<div class="country${c.open?"":" soon"}"><div class="h"><b>${Xe(a.name)}</b><span>${Xe(a.place)}</span></div>${f?`<div class="cstat">${f}</div>`:""}${c.open&&h?`<div class="dishes">${h}</div>`:""}${d}${u}</div>`}).join(""),o=n.earned?`<div class="passport">Passport: ${n.stamps} stamp${n.stamps===1?"":"s"} to spend</div>`:"";this.menu.innerHTML=`<div class="logo"><div class="k">Wiparat’s</div><div class="t">Worldwide<br>Kitchen</div><div class="s">Cook the world’s street food</div></div><div class="list">${o}${r}</div>`,this.menu.querySelectorAll("button.dishbtn").forEach(a=>a.addEventListener("click",()=>this.h.onStart?.(a.dataset.dish))),this.menu.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",()=>this.h.onOpen?.(a.dataset.open)))}hideMenu(){this.menu.classList.add("hide"),this.$("#home").classList.remove("hide")}showResult(t,e,n,s,r={},o={}){const a=[0,1,2].map(c=>`<span class="${c<e.stars?"":"off"}">★</span>`).join(""),l=(c,h)=>`<span>${c}</span><div class="b"><i style="width:${Math.round(h*100)}%"></i></div>`;this.result.innerHTML=`
      <div class="top"><div class="stars">${a}</div><div><div class="score">${e.total}<small> / 100</small></div><div class="best">${s?"NEW BEST":n?"Best "+n.total:""}</div></div></div>
      <div class="parts">${l("Cooking",e.cooking)}${l("Technique",e.technique)}${l(Xe(o.hei||"Wok hei"),e.hei)}${l("Plating",e.presentation)}</div>
      <div class="noi"><div class="who">${Xe(o.judge||"Auntie Noi")} tastes it</div>${e.notes.map(c=>`<p>${Xe(c)}</p>`).join("")}</div>
      ${r.dishes?.length?`<div class="news good">Unlocked: <b>${r.dishes.map(Xe).join(", ")}</b></div>`:""}
      ${r.stamp?'<div class="news stamp">Passport stamp earned! Open a new country from the menu</div>':""}
      ${r.need?`<div class="news">Score ${$a}★ to unlock <b>${Xe(r.need)}</b></div>`:""}
      <div class="row"><button class="btn ghost" data-a="menu">Menu</button><button class="btn${r.next?" ghost":""}" data-a="again">Cook again</button>${r.next?`<button class="btn" data-a="go:${r.next}">Next dish</button>`:""}</div>`,this.result.classList.remove("hide"),this.result.querySelectorAll("[data-a]").forEach(c=>c.addEventListener("click",h=>{h.stopPropagation(),this.h.onAction?.(c.dataset.a)}))}hideResult(){this.result.classList.add("hide")}setSound(t){this.$("#sound").textContent=t?"SND":"OFF",this.$("#sound").style.opacity=t?1:.6}clearPlay(){this.hideMeter(),this.hidePour(),this.hideGarnish(),this.hideResult(),this.showFlame(!1),this.setActions([]),this.hideTiming(),this.hideGesture(),this.cueFlame(!1)}}const di=1e-4;class T1{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const l=r.float()*2-1;o=(o+.02*l)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,l=0,c=0,h=0,u=0,f=0;for(let d=0;d<e;d++){const m=r.float()*2-1;o=.99886*o+m*.0555179,a=.99332*a+m*.0750759,l=.969*l+m*.153852,c=.8665*c+m*.3104856,h=.55*h+m*.5329522,u=-.7616*u-m*.016898,s[d]=(o+a+l+c+h+u+f+m*.5362)*.11,f=m*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function E1(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),l=o?1/0:Math.max(.02,e.dur??.2),c=(e.peak??1)*(r.gain??1);if(c<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),m=i.createGain();m.gain.value=di,m.connect(n);let _,p=null;const g=r.rate??1;if(e.src==="noise")_=i.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=g;else{_=i.createOscillator(),_.type=e.wave||"sine";const I=e.jitter||0,x=I?1+(r.jitterRoll??0)*I:1,S=Math.max(8,(e.freq??440)*x*g);if(p=_.frequency,p.setValueAtTime(S,a),e.to!=null&&!o){const k=Math.max(8,e.to*x*g),F=a+l;e.glide==="lin"?p.linearRampToValueAtTime(k,F):p.exponentialRampToValueAtTime(k,F)}}let M=_,v=null;if(e.filter){const I=i.createBiquadFilter();I.type=e.filter.type||"lowpass",I.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);I.frequency.setValueAtTime(x,a),e.filter.to!=null&&!o&&I.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+l),v=I.frequency,M.connect(I),M=I}let y=null,R=null;if(e.lfo&&e.lfo.rate>0){y=i.createOscillator(),y.type="sine",y.frequency.value=e.lfo.rate;const I=i.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));R=i.createGain(),R.gain.value=1-x*.5,I.gain.value=x*.5,y.connect(I),I.connect(R.gain),M.connect(R),M=R}else e.lfo.target==="filter"&&v?(I.gain.value=e.lfo.depth??200,y.connect(I),I.connect(v)):p&&(I.gain.value=e.lfo.depth??20,y.connect(I),I.connect(p));y.start(a)}M.connect(m);const E=m.gain;E.setValueAtTime(di,a),E.linearRampToValueAtTime(c,a+h);const T=Math.max(di,c*f);u>0&&E.linearRampToValueAtTime(T,a+h+u);let L=1/0;if(o)_.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const I=Math.max(a+h+u,a+l-d);E.setValueAtTime(Math.max(di,u>0?T:c),I),E.linearRampToValueAtTime(di,a+l),L=a+l+.02,_.start(a,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(L),y&&y.stop(L)}return{endsAt:L,stop(I){const x=Math.max(I,i.currentTime);try{E.cancelScheduledValues(x),E.setValueAtTime(Math.max(di,E.value),x),E.linearRampToValueAtTime(di,x+d),_.stop(x+d+.02),y&&y.stop(x+d+.02)}catch{}}}}function jo(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let l=r;for(const c of e.layers||[]){const h=E1(i,t,c,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>l&&h.endsAt!==1/0&&(l=h.endsAt))}return{endsAt:o?1/0:l,stop(c=i.currentTime){for(const h of a)h.stop(c)}}}function A1(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function C1(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Sl{constructor(t="lifesim"){this.seed=String(t),this._next=C1(A1(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new Sl(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}const R1={chop:{layers:[{src:"noise",noise:"white",dur:.05,a:.001,r:.04,peak:.5,filter:{type:"bandpass",freq:3200,q:.8}},{src:"osc",wave:"sine",freq:190,to:70,dur:.12,a:.002,r:.1,peak:.55}]},clank:{layers:[{src:"osc",wave:"sine",freq:612,dur:.5,a:.002,d:.05,s:.4,r:.45,peak:.16},{src:"osc",wave:"sine",freq:1493,dur:.35,a:.002,r:.33,peak:.1},{src:"osc",wave:"sine",freq:2811,dur:.22,a:.001,r:.2,peak:.06},{src:"noise",noise:"white",dur:.03,a:.001,r:.03,peak:.25,filter:{type:"highpass",freq:2500}}]},whoosh:{layers:[{src:"noise",noise:"white",dur:.45,a:.08,r:.3,peak:.35,filter:{type:"bandpass",freq:500,to:1600,q:.7}}]},flare:{layers:[{src:"noise",noise:"white",dur:.9,a:.02,d:.2,s:.5,r:.6,peak:.55,filter:{type:"lowpass",freq:900,to:300,q:.5}}]},hiss:{layers:[{src:"noise",noise:"white",dur:1.2,a:.005,d:.3,s:.45,r:.8,peak:.5,filter:{type:"highpass",freq:2600,q:.6}}]},crack:{layers:[{src:"noise",noise:"white",dur:.035,a:.001,r:.03,peak:.6,filter:{type:"bandpass",freq:2200,q:1.2}},{src:"osc",wave:"triangle",freq:900,to:400,dur:.04,a:.001,r:.035,peak:.12}]},plop:{layers:[{src:"osc",wave:"sine",freq:320,to:120,dur:.12,a:.004,r:.1,peak:.3},{src:"noise",noise:"white",dur:.08,a:.002,r:.07,peak:.2,filter:{type:"lowpass",freq:1400}}]},tick:{layers:[{src:"osc",wave:"triangle",freq:1200,dur:.05,a:.001,r:.045,peak:.12}]},sprinkle:{layers:[{src:"noise",noise:"white",dur:.04,a:.001,r:.03,peak:.12,filter:{type:"bandpass",freq:5200,q:2}}]},scooter:{layers:[{src:"osc",wave:"sawtooth",freq:70,to:118,glide:"lin",dur:2.8,a:1.1,d:.2,s:.8,r:1.4,peak:.05,filter:{type:"lowpass",freq:420,q:.8}},{src:"noise",noise:"white",dur:2.8,a:1.2,r:1.4,peak:.03,filter:{type:"bandpass",freq:380,q:1}}]}},rh=[523.3,587.3,659.3,784,880,1046.5];class P1{constructor(){this.ctx=null,this.on=!0,this.beds=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.bank=new T1(this.ctx,new Sl("kitchen.audio")),this.master=this.ctx.createGain(),this.master.gain.value=this.on?.9:0,this.master.connect(this.ctx.destination),this._beds())}setOn(t){this.on=t,this.master&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.05)}_noiseLoop(t,e=0){const n=this.ctx.createBufferSource();n.buffer=this.bank.get("white"),n.loop=!0;let s=n;for(const o of t){const a=this.ctx.createBiquadFilter();a.type=o.type,a.frequency.value=o.freq,a.Q.value=o.q??.7,s.connect(a),s=a}const r=this.ctx.createGain();return r.gain.value=e,s.connect(r),r.connect(this.master),n.start(0,Math.random()*1.5),r}_beds(){this.ctx;const t=this._noiseLoop([{type:"highpass",freq:1800},{type:"lowpass",freq:9e3}]),e=this._noiseLoop([{type:"lowpass",freq:420,q:.6},{type:"highpass",freq:60}]),n=this._noiseLoop([{type:"bandpass",freq:520,q:.5}],.035);this.beds={sizzle:t,roar:e,street:n},this._crackleT=0,this._scooterT=6}play(t,e={}){if(!this.ctx||!this.on)return;const n=R1[t];n&&jo(this.ctx,this.bank,n,this.master,{gain:e.gain??1,rate:e.rate??.94+Math.random()*.12,noiseOffset:Math.random()*1.5})}chime(t){if(!this.ctx)return;const e=this.ctx.currentTime+.05;(t>=3?[0,2,3,5]:t===2?[0,2,3]:t===1?[0,2]:[2,0]).forEach((s,r)=>{jo(this.ctx,this.bank,{layers:[{src:"osc",wave:"triangle",freq:rh[s],dur:.5,a:.005,d:.1,s:.5,r:.35,peak:.16},{src:"osc",wave:"sine",freq:rh[s]*2,dur:.3,a:.005,r:.25,peak:.05}]},this.master,{when:e+r*.14})})}update(t,e,n){if(!this.ctx||!this.beds)return;const s=this.ctx.currentTime;this.beds.sizzle.gain.setTargetAtTime(e*.32,s,.08),this.beds.roar.gain.setTargetAtTime(n*.3,s,.12),this._crackleT-=t,e>.1&&this._crackleT<=0&&(this._crackleT=.02+Math.random()*(.18-e*.15),jo(this.ctx,this.bank,{layers:[{src:"noise",noise:"white",dur:.012+Math.random()*.02,a:.001,r:.01,peak:.08+e*.2,filter:{type:"bandpass",freq:2500+Math.random()*4e3,q:1.5}}]},this.master,{noiseOffset:Math.random()*1.5})),this._scooterT-=t,this._scooterT<=0&&(this._scooterT=9+Math.random()*14,this.play("scooter"))}}const Eu="kitchen.";function io(i,t){try{const e=localStorage.getItem(Eu+i);return e==null?t:JSON.parse(e)}catch{return t}}function wl(i,t){try{localStorage.setItem(Eu+i,JSON.stringify(t))}catch{}}function Tl(){return io("best",{})}function L1(i,t,e){const n=Tl(),s=n[i];return s&&s.total>=t?!1:(n[i]={total:t,stars:e},wl("best",n),!0)}function I1(){const i=io("progress",{});return{best:Tl(),opened:i.opened||[],spent:i.spent||0}}function D1(i,t){const e=t.countries.find(s=>s.id===i);if(!e||e.open||!e.playable||t.stamps<1)return!1;const n=io("progress",{});return wl("progress",{opened:[...n.opened||[],i],spent:(n.spent||0)+1}),!0}function U1(){return io("prefs",{sound:!0})}function N1(i){wl("prefs",i)}const k1={peanuts:"#c99a5c",chilli:"#c42a1c",lime:"#86c23a",freshSprouts:"#f5f2de",freshChives:"#4a9a30",cucumber:"#7fbf5e",freshScallion:"#6cb846",friedEgg:"#ffd54a",pepper:"#d6ccbe",aonori:"#3f7a22",beniShoga:"#e0204a",katsuobushi:"#d8a47a"},Jo={peanuts:160,chilli:110,lime:3,freshSprouts:30,freshChives:30,cucumber:8,freshScallion:30,friedEgg:1,pepper:120,aonori:140,beniShoga:20,katsuobushi:30},Ir={peanuts:3,chilli:2,pepper:2,aonori:3,katsuobushi:2},F1={lime:1,cucumber:1,friedEgg:1,freshSprouts:3,freshChives:3,freshScallion:3,beniShoga:3},oh={peanuts:14,chilli:8,pepper:10,lime:1,cucumber:2,friedEgg:1,freshSprouts:4,freshChives:4,freshScallion:4,aonori:16,beniShoga:3,katsuobushi:5},ah={chop:"SWIPE DOWN IN THE GREEN",crack:"TAP IN THE GREEN",add:"TAP IN THE GREEN TO TIP IT",top:"TAP IN THE GREEN",drop:"TAP IN THE GREEN",plate:"TAP IN THE GREEN TO PLATE"},z1={chop:["swipe","SWIPE DOWN"],crack:["tap","TAP"],add:["tap","TAP"],top:["tap","TAP"],drop:["tap","TAP"],plate:["tap","TAP"],mix:["mix","SWIPE BACK AND FORTH"],cook:["stir","DRAG TO STIR"]},Fn={dx:-.028,dz:.018,base:.056,h:.036};class O1{constructor(t){this.camera=t,this.pos=new C(0,1.6,1.4),this.look=new C(0,1,0),this.goal={pos:new C,look:new C},this.view="stall",this.t=0,this.speed=2.6}go(t,e=2.6){this.view=t,this.speed=e}snapTo(t){this.view=t,this._goal(),this.pos.copy(this.goal.pos),this.look.copy(this.goal.look),this._apply()}_goal(){const t=Y_[this.view];let e=t;this.view==="stall"&&(e={...t,yaw:t.yaw+Math.sin(this.t*.12)*.5}),this.view==="beauty"&&(e={...t,yaw:Math.sin(this.t*.25)*.6}),K_(this.camera,e,this.goal,1.08)}_apply(){this.camera.position.copy(this.pos),this.camera.lookAt(this.look)}update(t){this.t+=t,this._goal();const e=1-Math.exp(-t*this.speed);this.pos.lerp(this.goal.pos,e),this.look.lerp(this.goal.look,e),this._apply()}}class Au{constructor(t,e,n=new URLSearchParams){this.stage=t,this.scene=t.scene,this.camera=t.camera,this.cam=new O1(this.camera),this.params=n,this.stalls={},this._setStall("bangkok"),this.cookers={wok:new Gx,teppan:new Vx,takopan:new Av},this.cooker=null,this._setCooker("wok"),this.ladle=new Tx,this.puffs=new v1,this.pancake=new t1,this.scene.add(this.ladle.group,this.puffs.group,this.pancake.group),this.egg=new pt(vu(),new kt({color:15323046,roughness:.55,metalness:0})),this.egg.castShadow=!0,this.egg.visible=!1,this.scene.add(this.egg),this.audio=new P1,this.prefs=U1(),this.audio.setOn(this.prefs.sound),this.hud=new w1(e,{onStart:r=>{this.audio.unlock(),this.start(r)},onOpen:r=>{this.audio.unlock(),D1(r,this._progress())&&(this.audio.chime(3),this.menu())},onAction:r=>this.action(r),onHold:(r,o)=>this.hold(r,o),onFlame:r=>{this.audio.unlock(),this.stove.flame=r},onGarnish:r=>{this.garnishSel=r,this._garnishPortion(r)},onSound:()=>{this.audio.unlock(),this.prefs.sound=!this.prefs.sound,this.audio.setOn(this.prefs.sound),this.hud.setSound(this.prefs.sound),N1(this.prefs)},onMenu:()=>this.menu()}),this.hud.setSound(this.prefs.sound),this.raycaster=new U_,this.ndc=new q,this._bindPointer(t.renderer.domElement),this.stove=jc(),this.sim=Zc(1400),this.mode="menu",this.time=0,this.dish=null;const s=n.get("dish");s&&Ns[s]?this.start(s):this.menu(),this.cam.snapTo(this.cam.view)}menu(){this.mode="menu",this._teardown(),this.hud.clearPlay(),this.hud.hideCard(),this.hud.showMenu(qi,Ns,this._progress()),this.cam.go("stall",1.2),this._setCooker(this.stallId==="osaka"?"teppan":"wok"),this.stove.flame=.35}_setStall(t){if(this.stallId===t)return;this.stall&&this.scene.remove(this.stall),this.stalls[t]||(this.stalls[t]=t==="osaka"?nv():Mx());const{group:e,materials:n}=this.stalls[t];this.stall=e,this.M=n,this.stallId=t,this.scene.add(e)}_setCooker(t){const e=this.cookers[t];this.cooker!==e&&(this.cooker&&this.scene.remove(this.cooker.group),this.cooker=e,this.scene.add(e.group))}_progress(){return b1(qi,I1(),this.params.get("unlock")==="all")}_teardown(){this.riceDome&&(this.scene.remove(this.riceDome),this.riceDome=null),this.plateware&&(this.scene.remove(this.plateware),this.plateware=null);for(const t of["foodView","bowls","board"])this[t]&&(this.scene.remove(this[t].group),this[t]=null);this.sim=Zc(1400),this.stove=jc(),this.egg.visible=!1,this.cooker.spatula.group.visible=!1,this.ladle.group.visible=!1}start(t){const e=this._progress(),n=e.countries.flatMap(h=>h.dishes.map(u=>({...u,country:h}))).find(h=>h.id===t);if(!n||!n.open||!n.country.open){this.hud.toast("Locked");return}const s=Ns[t];this._setStall(qi.find(h=>h.id===s.cuisine)?.stall||"bangkok"),this._setCooker(s.cooker||"wok"),this._teardown(),this.sim.container=this.cooker.container(),this.dish=s,this.mode="play",this.progressBefore=e;const r=s.steps.find(h=>h.verb==="garnish")?.items||[];this.kinds=[...s.bowls,...r.filter(h=>!s.bowls.includes(h))],this.ings=this.kinds.map(h=>({...an[h],id:h}));const o=this.ings.map(h=>Jo[h.id]??Math.ceil((h.count||10)*1.6)),a=s.steps.find(h=>h.liquid&&h.liquid!=="oil")?.liquid;this.foodView=new Zv(this.ings,o,a?kn[a].colour:null),this.scene.add(this.foodView.group),this.bowls=new f1(s.bowls,an,this.M.bowl),this.bowls.layout(this.camera.aspect<1),this.scene.add(this.bowls.group);const l=s.steps.find(h=>h.verb==="chop");l&&this.bowls.bowls.has(l.item)&&this.bowls.fill(l.item,null),this.board=new c1(an[l?.item||"chives"]),this.scene.add(this.board.group),this.plateware=$x(s.plate?.style||"thai",{leaf:!!s.plate?.leaf}),this.scene.add(this.plateware),s.plate?.rice&&this._riceDome(),this.report={pieces:{},chop:0,pours:{},tosses:0,hei:0,garnish:{}},this.snapD=new Float32Array(this.sim.cap).fill(NaN),this._osakaStart(s);const c=qi.findIndex(h=>h.id===s.cuisine);this.level={dish:Math.max(1,(qi[c]?.dishes||[]).indexOf(s.id)+1),country:Math.max(0,c)},this.presses={},this.garnishSel=r[0],this.stepIndex=-1,this.hud.hideMenu(),this.hud.hideResult(),this.next()}get step(){return this.dish?.steps[this.stepIndex]}_riceDome(){const t=an.rice,e=70,n=new us(bs(t),qn(t),e),s=new Jt,r=new gn,o=new Ze,a=new C,l=new C(1,1,1),c=nt.x+Fn.dx,h=nt.z+Fn.dz,u=new ct(16250092);for(let m=0;m<e;m++){const _=(m+.5)/e,p=Math.sqrt(_)*Fn.base,g=m*2.39996,M=Fn.h*(1-(p/Fn.base)**2);a.set(c+Math.cos(g)*p,nt.wellY+.004+M,h+Math.sin(g)*p),o.set(m*1.3,m*.7,m*2.1),r.setFromEuler(o),s.compose(a,r,l),n.setMatrixAt(m,s),n.setColorAt(m,u)}const f=new pt(new de(1,24,12,0,Math.PI*2,0,Math.PI/2),qn(t));f.material.vertexColors=!1,f.material.color.set(15723488),f.scale.set(Fn.base*.94,Fn.h*.95,Fn.base*.94),f.position.set(c,nt.wellY+.002,h);const d=new ie;d.add(n,f),n.castShadow=n.receiveShadow=f.receiveShadow=!0,this.riceDome=d,this.scene.add(d)}next(){this.step?.verb==="cook"&&this._snapshot(),this._exitStep(),this.stepIndex++;const t=this.step;if(!t)return this.serve();this.stepT=0,this.st={},this.hud.setStep(this.dish.name,t.say,t.hint,this.stepIndex,this.dish.steps.length),this.hud.clearPlay(),this._cues="",this["_enter_"+t.verb].call(this,t),this.tm=ah[t.verb]?n1(this.level.dish,this.level.country):null,this.tm&&this.hud.showTiming(ah[t.verb],this.tm.zone);const n=z1[t.verb],s=t.verb==="cook"&&this.dish.steps.findIndex(r=>r.verb==="cook")===this.stepIndex;n&&(t.verb!=="cook"||s)?(this.hud.showGesture(n[0],n[1]),this.gestureT=2.6):this.hud.hideGesture()}_exitStep(){this.ladle.group.visible=!1,this.st&&(this.st.pouring=!1),this.cooker.spatula.group.visible=!1,this.sim.spatula.on=!1,this.bowls?.highlight([])}_enter_chop(t){this.cam.go("board");const e=this.board;this.st.chop=m1(t.cuts,-Ye/2,Ye/2),e.setGuides(this.st.chop.guides,0),this.hud.setHint("Swipe down anywhere to chop")}_chopSwipe(){const t=this._press(),e=this.st.chop.guides[this.st.chop.next];if(e==null)return;const n=_1(this.st.chop,e+(1-t)*.03*(Math.random()<.5?-1:1));n&&(this.board.cutAt(this.st.chop.end,n.piece.len),this.board.setGuides(this.st.chop.guides,this.st.chop.next),this.audio.play("chop"),this.hud.toast(n.acc>.85?"Perfect!":n.acc>.5?"Good":"Uneven!",n.acc<=.5),n.done&&(this.report.chop=x1(this.st.chop),this.st.doneT=.7))}_enter_heat(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.liquid=t.liquid,this.st.poured=!1,this.hud.setActions([{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0,disabled:!0}]),this.hud.showPour(kn[t.liquid].target),this.ladle.setLiquid(kn[t.liquid].colour),this.ladle.group.visible=!0,this.st.amount=0}_enter_pour(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.liquid=t.liquid,this.st.poured=!1,this.st.amount=0,this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"},{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0}]),this.hud.showPour(kn[t.liquid].target),this.ladle.setLiquid(kn[t.liquid].colour),this.ladle.group.visible=!0}hold(t,e){if(this.audio.unlock(),this._holdVerb(this.step?.verb))return this._holdOsaka(e);t!=="pour"||this.st.poured||(this.st.pouring=e,e&&this.audio.play("plop",{gain:.6}),!e&&this.st.amount>.03&&this._finishPour())}_finishPour(){const t=this.step;this.st.poured=!0,this.st.pouring=!1;const e=kn[t.liquid],n=this.st.amount;this.report.pours[t.liquid]=n;const s=bl(n,e.target);this.hud.toast(s>.9?"Spot on!":n<e.target[0]?"A bit light":s>.5?"A bit heavy":"Way too much",s<.6),t.liquid==="oil"?this.stove.oil+=n:(this.stove.sauce+=n,this.stove.sauceLeft+=n,rv(this.stove,n),this.stove.T>120&&this.audio.play("hiss",{gain:.8})),this.hud.enable("pour",!1),this.st.doneT=t.verb==="pour"?.6:null}_enter_add(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.left=[...t.items],this.bowls.highlight(this.st.left),this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"}])}_addItem(t,e=1){const n=an[t],s=this.kinds.indexOf(t),r=this.sim,a=this.bowls.bowls.get(t).home.x>0?1:-1;let l=0;if(n.shape==="strand"){const u=Math.round(n.strands*e);for(let f=0;f<u;f++){const d=this.cooker.spawn(f,u,a);Cx(r,s,n.points,n.spacing,d.x,d.y+f*.003,d.z,n.r,n.mass)}l=n.strands*n.points*n.mass*.2}else{const u=Math.round(n.count*e);for(let f=0;f<u;f++){const d=this.cooker.spawn(f,u,a);zs(r,s,d.x,d.y,d.z,n.r,n.mass,-a*1.5*Math.random(),-.3,-.2)}l=u*n.mass}Jc(this.stove,l*.4);const c=this.stove.T>140&&this.stove.oil>.1,h=this.cooker.dropPoint();c&&(this.puffs.spark.burst(h.x,h.y+.01,h.z,30),this.audio.play("hiss",{gain:.5})),this.audio.play("plop")}_enter_cook(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0);const e=t.focus;this.st.focus=e.map(s=>this.kinds.indexOf(s));const n=e.map(s=>an[s].name.split(" ").pop().toLowerCase());this.hud.showMeter(n.length>1?n.slice(0,-1).join(", ")+" and "+n.at(-1):an[e[0]].name,[.9,1.3]),this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"},{id:"next",label:"DONE",disabled:!0}])}_press(){if(!this.tm)return 1;const{q:t}=s1(this.tm,Math.random());this.hud.setZone(this.tm.zone),this.hud.timingFlash(t>.6);const e=this.step.verb;return(this.presses[e]||(this.presses[e]=[])).push(t),this.hud.hideGesture(),t}_snapshot(){const t=this.sim;for(let e=0;e<t.n;e++)this.st.focus.includes(t.kind[e])&&(this.snapD[e]=t.d[e])}_focusState(){const t=this.sim;let e=0,n=0,s=0,r=0;for(let o=0;o<t.n;o++){const a=t.kind[o];if(!this.st.focus.includes(a))continue;const l=this.ings[a],[c,h]=l.band;e+=.9+(t.d[o]-c)/(h-c)*.4,s+=t.c[o],r=Math.max(r,t.c[o]),n++}return n?{v:e/n,c:s/n,maxC:r}:{v:0,c:0,maxC:0}}_enter_crack(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.bowls.fill(t.item,null),this.egg.visible=!0;const e=this.cooker.dropPoint();this.egg.position.set(e.x+.03,e.y+.09,e.z+.03),this.st.eggY=e.y+.09,this.egg.rotation.set(0,0,1.3),this.st.taps=0,this.st.bump=0,this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"}])}_crackTap(){if(this.st.taps>=3)return;const t=this._press();if(this.st.taps++,this.st.bump=1,this.audio.play("crack",{gain:.6+this.st.taps*.2}),t<.45?(this.st.shell=!0,this.hud.toast("Shell in it!",!0)):this.hud.toast(t>.9?"Clean!":"Good"),this.st.taps<3)return;this.st.shell&&!this.report.notes.includes("There is shell in the egg. Crack it cleanly.")&&this.report.notes.push("There is shell in the egg. Crack it cleanly."),this.egg.visible=!1;const e=this.kinds.indexOf(this.step.item),n=an[this.step.item];for(let s=0;s<n.count;s++){const r=Math.random()*Math.PI*2,o=Math.random()*.03,a=this.cooker.dropPoint();zs(this.sim,e,a.x+.02+Math.cos(r)*o,a.y+.02+Math.random()*.02,a.z+.02+Math.sin(r)*o,n.r,n.mass,0,-.4,0)}Jc(this.stove,n.count*n.mass*.3),this.stove.T>140&&this.audio.play("hiss",{gain:.4}),this.st.doneT=.5}_enter_plate(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.setActions([{id:"plate",label:"TIP ONTO THE PLATE"}])}_plate(){if(this.st.plated)return;const t=this._press();if(this.report.finish.plate=t,this.st.plateQ=t,t<.5?this.hud.toast("Messy!",!0):t>.9&&this.hud.toast("Neat!"),this.st.plated=!0,this.stove.flame=0,this.hud.showFlame(!1),this.hud.setActions([]),this.cooker.spatula.group.visible=!1,this.sim.spatula.on=!1,!this._plateOsaka()){const e=this.dish.plate?.rice?Fn:null,n=this.st.plateQ??1;Lx(this.sim,e?{x:nt.x+e.dx,z:nt.z+e.dz,base:e.base,h:e.h}:null,!!this.dish.plate?.mould&&n>=.5,.36+(1-n)*.3)}this.cooker.toss(),this.audio.play("whoosh"),this.audio.play("clank",{gain:.6}),this.cam.go("plate",3),this.st.doneT=1.3,this.plateSteam=30}_enter_garnish(t){this.cam.go("plate"),this.st.items=t.items,this.hud.setHint("Tap a garnish to add it. Tap again for more"),this._garnishHud(),this.hud.setActions([{id:"serve",label:"SERVE"}]),this.st.spawnT=0}_garnishHud(){if(this.step?.verb!=="garnish")return;const t=this.step.items.map(e=>({id:e,name:an[e].name,css:k1[e]||"#ccc"}));this.hud.showGarnish(t,this.report.garnish,this.garnishSel),this._cues=""}_garnishPortion(t){const e=oh[t]||1,n=this._foodCentre();for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*(Ir[t]?.05:.035);this.st.spawnT=0,this._garnishAt(new C(n.x+Math.cos(r)*o,nt.wellY,n.z+Math.sin(r)*o),!Ir[t],!0)}}_foodCentre(){let t=0,e=0,n=0;for(let s=0;s<this.sim.n;s++)this.ings[this.sim.kind[s]].garnish||(t+=this.sim.x[s*3],e+=this.sim.x[s*3+2],n++);return n?{x:t/n,z:e/n}:{x:nt.x,z:nt.z}}_garnishAt(t,e,n=!1){const s=this.garnishSel;if(!s||!t)return;const r=t.x-nt.x,o=t.z-nt.z,a=Math.hypot(r,o);if(a>nt.r*1.15)return;const l=a>nt.r-.02?(nt.r-.02)/a:1,c=nt.x+r*l,h=nt.z+o*l,u=an[s],f=this.kinds.indexOf(s),d=this.report.garnish[s]||0;if(d>=Jo[s]){e&&this.hud.toast("That will do!");return}let m=0;const _=nt.wellY+(this.dish.plate?.rice?.12:.09);if(Ir[s]){if(!e&&this.st.spawnT>0)return;this.st.spawnT=.035,m=n?1:Ir[s];for(let p=0;p<m;p++)zs(this.sim,f,c+(Math.random()-.5)*.02,_+Math.random()*.02,h+(Math.random()-.5)*.02,u.colR??u.r,u.mass);this.audio.play("sprinkle",{gain:.8})}else if(e){m=Math.min(n?1:F1[s]||1,Jo[s]-d);for(let p=0;p<m;p++){const g=zs(this.sim,f,c+(Math.random()-.5)*.015,_-.01+p*.012,h+(Math.random()-.5)*.015,u.colR??u.r,u.mass);if(g>=0&&["friedEgg","disc","wedge"].includes(u.shape)){const M=Math.random()*Math.PI*2;this.sim.q.set([0,Math.sin(M/2),0,Math.cos(M/2)],g*4),this.sim.flat[g]=1}}this.audio.play("plop",{gain:.5})}m&&(this.report.garnish[s]=d+m,this._garnishHud())}serve(){this.mode="served",this.hud.clearPlay(),this.hud.hideCard(),this.cooker.spatula.group.visible=!1,this.ladle.group.visible=!1;const t={};for(let d=0;d<this.sim.n;d++){const m=this.ings[this.sim.kind[d]];if(m.garnish)continue;const _=t[m.id]||(t[m.id]={d:[],c:[]});this.sim.strand[d]>=0&&d>0&&this.sim.strand[d-1]===this.sim.strand[d]||(_.d.push(Number.isNaN(this.snapD[d])?this.sim.d[d]:this.snapD[d]),_.c.push(this.sim.c[d]))}this._osakaReport(t);const e=d=>d.reduce((m,_)=>m+_,0)/d.length;this.presses.crack?.length&&(this.report.skills.crack=e(this.presses.crack));const n=[...this.presses.add||[],...this.presses.top||[],...this.presses.drop||[]];n.length&&(this.report.skills.tip=e(n)),this.report.pieces=t,this.report.tosses=this.stove.tosses,this.report.hei=this.stove.hei;const s=qi.find(d=>d.id===this.dish.cuisine),r=dv(this.dish,an,kn,this.report,s);this.grade=r;const o=Tl()[this.dish.id],a=L1(this.dish.id,r.total,r.stars),l=this._progress(),c=S1(this.progressBefore,l),h=l.countries.find(d=>d.id===this.dish.cuisine),u=h?.dishes[h.dishes.findIndex(d=>d.id===this.dish.id)+1],f={dishes:c.dishes.map(d=>Ns[d].name),stamp:c.stamp,need:u&&!u.open?Ns[u.id].name:null,next:u&&u.open?u.id:null};this.cam.go("beauty",1.4),this.stage.lights.plateKey.intensity=1.8,this.plateSteam=40,this.serveT=1.6,this._pendingResult=()=>{this.hud.showResult(this.dish,r,o,a,f,s),this.audio.chime(r.stars)}}action(t){if(this.audio.unlock(),this.audio.play("tick"),t==="toss")return this.doToss();if(t==="flip")return this._doFlip();if(t==="turn")return this._doTurn();if(t==="next")return this.step?.verb==="mix"&&this._mixDone(this.step),this.step?.verb==="turn"&&this._turnDone(),this.next();if(t==="plate")return this._plate();if(t==="serve")return this.next();if(t==="again")return this.stage.lights.plateKey.intensity=0,this.start(this.dish.id);if(t==="menu")return this.stage.lights.plateKey.intensity=0,this.menu();if(t.startsWith("go:"))return this.stage.lights.plateKey.intensity=0,this.start(t.slice(3))}doToss(){if(!this.sim.container.heated||this.time-(this.lastToss||-9)<.45)return;this.lastToss=this.time;const t=Rx(this.sim,1);if(this.cooker.toss(),this.audio.play("clank",{gain:.5}),this.audio.play("whoosh",{gain:.7}),!t)return;this.stove.tosses++;const e=this.cooker.kind==="wok";this.stove.T>200&&this.stove.flame>.55?(this.stove.hei++,e?(this.stove.flare=1,this.audio.play("flare",{gain:.8})):this.audio.play("hiss",{gain:.35}),(this.stove.hei<=3||this.stove.hei%3===0)&&this.hud.toast(e?"Wok hei!":"Nice sear!")):this.stove.T>150&&e&&(this.stove.flare=.35)}_bindPointer(t){this.pointer={down:!1,x:0,y:0,t:0,hist:[]};const e=s=>{const r=t.getBoundingClientRect();return this.ndc.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),{x:s.clientX/r.width,y:s.clientY/r.height}};t.addEventListener("pointerdown",s=>{this.audio.unlock();try{t.setPointerCapture?.(s.pointerId)}catch{}const r=e(s);this.pointer.down=!0,this.pointer.hist=[{...r,t:performance.now()}],this._pointer("down")}),t.addEventListener("pointermove",s=>{const r=e(s);if(this.pointer.down){const o=this.pointer.hist;o.push({...r,t:performance.now()}),o.length>6&&o.shift(),this._flick()}this._pointer("move")});const n=()=>{this.pointer.down=!1,this._pointer("up")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}_flick(){const t=this.pointer.hist,e=this.step?.verb;if(t.length<3||!(this._wokStep()||e==="flip"||e==="turn"))return;const n=t[0],s=t[t.length-1],r=(s.t-n.t)/1e3;if(r<=0||r>.25)return;const o=(s.y-n.y)/r,a=(s.x-n.x)/r;o<-2.4&&Math.abs(o)>Math.abs(a)*1.8&&(e==="flip"?this._doFlip():e==="turn"?this._doTurn():this.doToss(),this.pointer.hist=[])}_wokStep(){const t=this.step?.verb;return this.mode==="play"&&(t==="cook"||t==="add"||t==="crack"||t==="pour"||t==="heat")}_planeHit(t){this.raycaster.setFromCamera(this.ndc,this.camera);const e=this.raycaster.ray;if(Math.abs(e.direction.y)<1e-4)return null;const n=(t-e.origin.y)/e.direction.y;return n<=0?null:e.origin.clone().addScaledVector(e.direction,n)}_swipedDown(){const t=this.pointer.hist;if(t.length<2)return!1;const e=t[0],n=t[t.length-1];return n.y-e.y>.06&&Math.abs(n.y-e.y)>Math.abs(n.x-e.x)*1.2}_pointer(t){if(this.mode!=="play")return;const e=this.step?.verb;if(this.raycaster.setFromCamera(this.ndc,this.camera),e==="chop"){t==="down"&&(this.st.swiped=!1),t==="move"&&this.pointer.down&&!this.st.swiped&&this._swipedDown()&&(this.st.swiped=!0,this._chopSwipe());return}if(e==="add"&&t==="down"){const n=this.bowls.pick(this.raycaster),s=n&&this.st.left.includes(n)?n:this.st.left[0];if(s){const r=this._press();this.st.left=this.st.left.filter(o=>o!==s),this.bowls.highlight(this.st.left),r<.45?this.hud.toast("Spilled some!",!0):r>.9&&this.hud.toast("Nice!"),this.bowls.tip(s,this.cooker.dropPoint(),()=>{this._addItem(s,r<.45?.7:1),this.st.left.length||(this.st.doneT=.8)});return}}if(e==="crack"&&t==="down"){this._crackTap();return}if(e==="mix"){t==="down"?this.st.anchor=null:t==="move"&&this.pointer.down&&this._mixMove();return}if((e==="top"||e==="drop")&&t==="down"){this._tapTopping();return}if(e==="turn"&&t==="down"){this._doTurn();return}if(e==="plate"&&t==="down"){this._plate();return}if(e==="garnish"){t==="down"?this._garnishAt(this._planeHit(nt.wellY+.035),!0):t==="move"&&this.pointer.down&&this._garnishAt(this._planeHit(nt.wellY+.035),!1);return}if(!(this.cooker?.pointer&&this.cooker.pointer(t,this))&&this._wokStep()){if(t==="up"||!this.pointer.down){this.st.stir=null,this.sim.spatula.on=!1;return}const n=this.cooker.surfaceRay(this.raycaster.ray);this.st.stir=n;const s=this.sim.spatula;n?(s.on||(s.px=n.x,s.py=n.y,s.pz=n.z),s.x=n.x,s.y=n.y+.004,s.z=n.z,s.on=!0):s.on=!1}}onResize(){this.bowls?.layout(this.camera.aspect<1)}update(t){this.time+=t;const e=this.stove,n=this.sim;sv(e,t),zx(n,t),ov(n,e,t,this.ings||[]),this.dish&&this._osakaUpdate(t),this.mode==="play"&&this._updateStep(t),this.tm&&this.mode==="play"&&(this.tm.t+=t,this.hud.setTiming(wu(this.tm))),this.gestureT>0&&(this.gestureT-=t,this.gestureT<=0&&this.hud.hideGesture()),this.mode==="served"&&this.serveT>0&&(this.serveT-=t,this.serveT<=0&&this._pendingResult&&(this._pendingResult(),this._pendingResult=null)),this.cooker.update(t,{flame:e.flame,flare:e.flare,oil:e.oil,sauce:n.container.heated?e.sauceLeft:0,T:e.T},this.sim.spatula.on?this.st?.stir:null,this.pointer.down),this.foodView&&this.foodView.update(n,t),this.bowls?.update(t),this.board?.update(t),this.mode==="play"&&this._wokStep()&&(this.cooker.spatula.group.visible=!!this.sim.spatula.on),this.ladle.update(t,!!this.st?.pouring,1-(this.st?.amount||0),this.cooker.dropPoint()),this.egg.visible&&(this.st.bump=Math.max(0,(this.st.bump||0)-t*6),this.egg.position.y=this.st.eggY-Math.sin(this.st.bump*Math.PI)*.05),this._steam(t),this.puffs.update(t),this.cam.update(t),this.hud.setFlame?.(e.flame,e.T),this.audio.update(t,Math.max(av(n,e),this.dish&&this.mode==="play"?this._osakaSizzle():0),e.flame)}_updateStep(t){this.stepT+=t;const e=this.step,n=this.st;if(this._osakaStep(t),this._cueTick(),n.doneT!=null&&(n.doneT-=t,n.doneT<=0)){n.doneT=null,e.verb==="chop"&&(this.bowls.bowls.has(e.item)&&this.bowls.fill(e.item,an[e.item],14),this.board.sweep()),this.next();return}if((e.verb==="heat"||e.verb==="pour")&&!n.poured){if(n.pouring&&(n.held=(n.held||0)+t,n.amount=Math.min(1.1,n.amount+Tu(kn[e.liquid].rate,n.held)*t),n.amount>=1.1&&this._finishPour(),e.verb==="pour"&&this.stove.T>120&&Math.random()<t*8)){const s=this.cooker.dropPoint();this.puffs.emit(s.x,s.y,s.z,{size:.05,alpha:.3})}this.hud.setPour(n.amount)}if(e.verb==="heat"&&(this.hud.enable("pour",this.stove.flame>.3&&!n.poured),n.poured?this.stove.T<165?this.hud.setHint("Wait for the oil to shimmer. Keep the flame up"):n.doneT==null&&(this.hud.toast("Smoking hot!"),n.doneT=.5):this.hud.setHint(this.stove.flame>.3?"Now hold to pour the oil. Let go in the green":e.hint)),e.verb==="cook"){const s=this._focusState(),r=s.maxC>(e.char?.6:.35)?"Burning!":s.v<.45?"Raw":s.v<.9?"Cooking":s.v<=1.3?"Perfect":s.v<1.6?"Overdone":"Way over";let o="";e.char?o=s.c<.08?"Leave them still to char":s.c<.4?"Nice char. Now toss":"Too far! Toss now":s.maxC>.12?o="It is catching! Keep it moving":this.stove.T<150&&s.v<.9&&(o="The wok is too cool. More flame"),this.hud.setMeter(s.v,r,o),this.hud.enable("next",this.stepT>(e.minTime||0))}}_cueTick(){const t=this.step,e=this.st,n=t.verb,s=[];let r=!1,o=[];const a=()=>{const c=this.hud.meter.querySelector(".mark"),h=parseFloat(c?.style.left||"0");return h>=45&&h<=65};if(n==="heat"&&(this.stove.flame<.3?r=!0:e.poured||s.push("pour")),["pour","pancake","fill","drizzle"].includes(n)&&!e.poured&&s.push("pour"),n==="cook"&&(this.stove.T<150&&(r=!0),this.stepT>(t.minTime||0)&&a()?s.push("next"):this.stove.T>200&&s.push("toss")),n==="flip"&&!e.flipped&&(a()&&s.push("flip"),this.stove.T<150&&(r=!0)),n==="turn"&&(this.cooker.balls?.length&&Math.min(...this.cooker.balls.map(c=>c.turns))>=4?s.push("next"):a()&&s.push("turn"),this.stove.T<150&&(r=!0)),n==="mix"&&a()&&s.push("next"),n==="plate"&&s.push("plate"),n==="garnish"){for(const[c,[h]]of Object.entries(this.dish.garnish||{}))(this.report.garnish[c]||0)<h&&o.push(c);o.length||s.push("serve")}const l=s.join()+"|"+r+"|"+o.join();l!==this._cues&&(this._cues=l,this.hud.cue(s),this.hud.cueFlame(r),this.hud.cueChips(o))}_steam(t){const e=this.stove,n=this.sim;if(this._steamT=(this._steamT||0)-t,!(this._steamT>0)){if(this._steamT=.06,n.container.heated&&n.n>0&&e.T>110){const s=Math.min(1,(e.T-110)/120);if(Math.random()<s*.5){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{size:.035,alpha:.08+s*.1,rise:.16})}let r=0;for(let o=0;o<n.n;o+=3)n.c[o]>.1&&n.contact[o]&&r++;if(r>2&&Math.random()<.6){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{colour:4867136,size:.05,alpha:.35,rise:.2})}}this.plateSteam>0&&(this.plateSteam-=.06,Math.random()<.5&&this.puffs.emit(nt.x+(Math.random()-.5)*.08,nt.wellY+.04,nt.z+(Math.random()-.5)*.08,{size:.03,alpha:Math.min(.16,this.plateSteam/90),rise:.09,life:2}))}}autoStir(t,e=1.2){const n=this.sim;let s=0,r=0;for(;s<t;){const{x:o,y:a,z:l}=this.cooker.stirPoint(s);n.spatula.on||(n.spatula.px=o,n.spatula.py=a,n.spatula.pz=l),n.spatula.on=!0,this.st.stir={x:o,y:a,z:l},n.spatula.x=o,n.spatula.y=a+.004,n.spatula.z=l,this.pointer.down=!0,e&&s-r>e&&(r=s,this.lastToss=-9,this.doToss()),this.update(1/60),s+=1/60}n.spatula.on=!1,this.pointer.down=!1}autoCook(t=99,{ruin:e=!1}={}){const n=o=>(...a)=>(this.tm&&r1(this.tm),o.apply(this,a)),s=this._press;this._press=n(s),this.mode!=="play"&&this.start(this.dish?.id||"padthai");let r=0;for(;this.mode==="play"&&this.stepIndex<t&&r++<60;){const o=this.step;if(["mix","pancake","fill","drizzle","top","drop","flip","turn"].includes(o.verb)){this._osakaAuto(o);continue}if(o.verb==="chop"){for(let a=0;a<o.cuts;a++)this._chopSwipe();this.st.doneT=.01,this.update(1/60),this.update(1/60)}else if(o.verb==="heat"||o.verb==="pour"){this.stove.flame=.9;const a=kn[o.liquid];this.hold("pour",!0);const l=(a.target[0]+a.target[1])/2;for(;this.st.amount<l;)this.update(1/60);this.hold("pour",!1);for(let c=0;c<400&&this.step===o;c++)this.update(1/60)}else if(o.verb==="add"){for(const a of[...this.st.left])this.st.left=this.st.left.filter(l=>l!==a),this.bowls.tip(a,this.cooker.dropPoint(),()=>{this._addItem(a),this.st.left.length||(this.st.doneT=.8)});for(let a=0;a<200&&this.step===o;a++)this.update(1/60)}else if(o.verb==="cook"){let a=0;for(;a<30;){if(o.char){this.sim.spatula.on=!1;for(let c=0;c<100;c++)this.update(1/60);a+=1.6}this.autoStir(.5),a+=.5;const l=this._focusState();if(!e&&l.v>=1&&a>=(o.minTime||0)||e&&a>20)break}this.next()}else if(o.verb==="crack"){this._crackTap(),this._crackTap(),this._crackTap();for(let a=0;a<60&&this.step===o;a++)this.update(1/60)}else if(o.verb==="plate"){this._plate();for(let a=0;a<120&&this.step===o;a++)this.update(1/60)}else if(o.verb==="garnish"){for(const[a,[l,c]]of Object.entries(this.dish.garnish||{})){const h=(l+c)/2,u=oh[a]||1,f=Math.max(h>0?1:0,Math.round(h/u));for(let d=0;d<f;d++){this._garnishPortion(a);for(let m=0;m<6;m++)this.update(1/60)}}for(let a=0;a<60;a++)this.update(1/60);t>this.stepIndex&&this.next()}}this._press=s}}Object.assign(Au.prototype,l1);const Cu=document.getElementById("view"),Ru=new URLSearchParams(location.search),B1=Ru.has("lo")||(navigator.hardwareConcurrency||8)<=4,Bn=$_(Cu,{lowPower:B1}),es=new Au(Bn,document.getElementById("ui"),Ru);function so(){const i=window.innerWidth,t=window.innerHeight;i>0&&t>0&&Bn.resize(i,t),es.onResize()}window.addEventListener("resize",so);window.addEventListener("orientationchange",()=>setTimeout(so,120));so();let lh=performance.now();function Pu(i){const t=Math.min(.05,(i-lh)/1e3);lh=i,es.update(t),Bn.render(),requestAnimationFrame(Pu)}requestAnimationFrame(Pu);const H1="http://localhost:5699/shot";window.shot=async function(t="shot",e={}){const n=e.w??390,s=e.h??844,r=Bn.renderer.getPixelRatio();Bn.renderer.setPixelRatio(e.ratio??2),Bn.resize(n,s),es.onResize(n,s),e.view&&es.cam.snapTo(e.view);const o=Math.max(1,e.settle??30);for(let l=0;l<o;l++)es.update(1/60);Bn.render();const a=Cu.toDataURL("image/png");Bn.renderer.setPixelRatio(r),window.innerWidth>0&&so();try{return await(await fetch(H1,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:a})})).json()}catch(l){return{ok:!1,error:String(l)}}};window.game=es;window.stage=Bn;
