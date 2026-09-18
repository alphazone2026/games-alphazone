(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const X0="169",Rf=0,Hc=1,Cf=2,Qh=1,Lf=2,bi=3,Li=0,wn=1,wi=2,ji=0,ss=1,Ks=2,Gc=3,Vc=4,Pf=5,_r=100,If=101,Df=102,Uf=103,Nf=104,Ff=200,Of=201,kf=202,Bf=203,Vl=204,Wl=205,zf=206,Hf=207,Gf=208,Vf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Xl=0,ql=1,Yl=2,fs=3,$l=4,Kl=5,jl=6,Zl=7,ed=0,Kf=1,jf=2,Zi=0,Zf=1,Jf=2,Qf=3,q0=4,ep=5,tp=6,np=7,Wc="attached",ip="detached",td=300,ps=301,ms=302,Jl=303,Ql=304,da=306,ia=1e3,qi=1001,e0=1002,bn=1003,rp=1004,mo=1005,kn=1006,La=1007,Yi=1008,Pi=1009,nd=1010,id=1011,js=1012,Y0=1013,br=1014,ai=1015,no=1016,$0=1017,K0=1018,gs=1020,rd=35902,sd=1021,od=1022,Bn=1023,ad=1024,ld=1025,os=1026,_s=1027,cd=1028,j0=1029,ud=1030,Z0=1031,J0=1033,$o=33776,Ko=33777,jo=33778,Zo=33779,t0=35840,n0=35841,i0=35842,r0=35843,s0=36196,o0=37492,a0=37496,l0=37808,c0=37809,u0=37810,h0=37811,d0=37812,f0=37813,p0=37814,m0=37815,g0=37816,_0=37817,v0=37818,x0=37819,M0=37820,S0=37821,Jo=36492,y0=36494,E0=36495,hd=36283,b0=36284,w0=36285,T0=36286,sp=3200,op=3201,dd=0,ap=1,Xi="",Ln="srgb",er="srgb-linear",Q0="display-p3",fa="display-p3-linear",ra="linear",Mt="srgb",sa="rec709",oa="p3",Pr=7680,Xc=519,lp=512,cp=513,up=514,fd=515,hp=516,dp=517,fp=518,pp=519,qc=35044,Yc="300 es",Ai=2e3,aa=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const Xs=Math.PI/180,Zs=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function ec(n,e){return(n%e+e)%e}function mp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gp(n,e,t){return n!==e?(t-n)/(e-n):0}function qs(n,e,t){return(1-t)*n+t*e}function _p(n,e,t,i){return qs(n,e,1-Math.exp(-t*i))}function vp(n,e=1){return e-Math.abs(ec(n,e*2)-e)}function xp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Sp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yp(n,e){return n+Math.random()*(e-n)}function Ep(n){return n*(.5-Math.random())}function bp(n){n!==void 0&&($c=n);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(n){return n*Xs}function Tp(n){return n*Zs}function Ap(n){return(n&n-1)===0&&n!==0}function Rp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*h,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*f,a*u);break;case"YXY":n.set(l*f,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*f,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const io={DEG2RAD:Xs,RAD2DEG:Zs,generateUUID:Ar,clamp:vn,euclideanModulo:ec,mapLinear:mp,inverseLerp:gp,lerp:qs,damp:_p,pingpong:vp,smoothstep:xp,smootherstep:Mp,randInt:Sp,randFloat:yp,randFloatSpread:Ep,seededRandom:bp,degToRad:wp,radToDeg:Tp,isPowerOfTwo:Ap,ceilPowerOfTwo:Rp,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Lp,normalize:pn,denormalize:Jr};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],M=r[1],x=r[4],E=r[7],C=r[2],T=r[5],S=r[8];return s[0]=o*v+a*M+l*C,s[3]=o*m+a*x+l*T,s[6]=o*p+a*E+l*S,s[1]=u*v+c*M+h*C,s[4]=u*m+c*x+h*T,s[7]=u*p+c*E+h*S,s[2]=d*v+f*M+g*C,s[5]=d*m+f*x+g*T,s[8]=d*p+f*E+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,f=u*s-o*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Xe;function pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pp(){const n=la("canvas");return n.style.display="block",n}const Kc={};function Qo(n){n in Kc||(Kc[n]=!0,console.warn(n))}function Ip(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Dp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Up(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jc=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zc=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[er]:{transfer:ra,primaries:sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ln]:{transfer:Mt,primaries:sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fa]:{transfer:ra,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Zc),fromReference:n=>n.applyMatrix3(jc)},[Q0]:{transfer:Mt,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zc),fromReference:n=>n.applyMatrix3(jc).convertLinearToSRGB()}},Np=new Set([er,fa]),at={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Np.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Cs[e].toReference,r=Cs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Cs[n].primaries},getTransfer:function(n){return n===Xi?ra:Cs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Cs[e].luminanceCoefficients)}};function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ir;class Fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=la("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(as(t[i]/255)*255):t[i]=as(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Op=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Da(r[o].image)):s.push(Da(r[o]))}else s=Da(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class ln extends ys{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=qi,r=qi,s=kn,o=Yi,a=Bn,l=Pi,u=ln.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ar(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case e0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case e0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=td;ln.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,E=(f+1)/2,C=(p+1)/2,T=(c+d)/4,S=(h+v)/4,A=(g+m)/4;return x>E&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=S/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=A/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=S/s,r=A/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-c)*(d-c));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(d-c)/M,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bp extends ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Bp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gd extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zp extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||u!==f||c!==g){let m=1-a;const p=l*d+u*f+c*g+h*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,p*M);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const E=a*M;if(l=l*m+d*E,u=u*m+f*E,c=c*m+g*E,h=h*m+v*E,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*f-u*d,e[t+1]=l*g+c*d+u*h-a*f,e[t+2]=u*g+c*f+a*d-l*h,e[t+3]=c*g-a*h-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*f*g,this._y=u*f*h-d*c*g,this._z=u*c*g+d*f*h,this._w=u*c*h-d*f*g;break;case"YXZ":this._x=d*c*h+u*f*g,this._y=u*f*h-d*c*g,this._z=u*c*g-d*f*h,this._w=u*c*h+d*f*g;break;case"ZXY":this._x=d*c*h-u*f*g,this._y=u*f*h+d*c*g,this._z=u*c*g+d*f*h,this._w=u*c*h-d*f*g;break;case"ZYX":this._x=d*c*h-u*f*g,this._y=u*f*h+d*c*g,this._z=u*c*g-d*f*h,this._w=u*c*h+d*f*g;break;case"YZX":this._x=d*c*h+u*f*g,this._y=u*f*h+d*c*g,this._z=u*c*g-d*f*h,this._w=u*c*h-d*f*g;break;case"XZY":this._x=d*c*h-u*f*g,this._y=u*f*h-d*c*g,this._z=u*c*g+d*f*h,this._w=u*c*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-u)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(c-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+u)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new L,Jc=new zt;class Ii{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),_o.subVectors(this.max,Ls),Dr.subVectors(e.a,Ls),Ur.subVectors(e.b,Ls),Nr.subVectors(e.c,Ls),Ni.subVectors(Ur,Dr),Fi.subVectors(Nr,Ur),ir.subVectors(Dr,Nr);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ir.z,ir.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ir.z,0,-ir.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ir.y,ir.x,0];return!Na(t,Dr,Ur,Nr,_o)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Dr,Ur,Nr,_o))?!1:(vo.crossVectors(Ni,Fi),t=[vo.x,vo.y,vo.z],Na(t,Dr,Ur,Nr,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new L,new L,new L,new L,new L,new L,new L,new L],Xn=new L,go=new Ii,Dr=new L,Ur=new L,Nr=new L,Ni=new L,Fi=new L,ir=new L,Ls=new L,_o=new L,vo=new L,rr=new L;function Na(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rr.fromArray(n,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),u=t.dot(rr),c=i.dot(rr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Hp=new Ii,Ps=new L,Fa=new L;class Es{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Fa)),this.expandByPoint(Ps.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new L,Oa=new L,xo=new L,Oi=new L,ka=new L,Mo=new L,Ba=new L;class tc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oa.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Oa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Oi.dot(this.direction),l=-Oi.dot(xo),u=Oi.lengthSq(),c=Math.abs(1-o*o);let h,d,f,g;if(c>0)if(h=o*l-a,d=o*a-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const v=1/c;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oa).addScaledVector(xo,d),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,s){ka.subVectors(t,e),Mo.subVectors(i,e),Ba.crossVectors(ka,Mo);let o=this.direction.dot(Ba),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Mo.crossVectors(Oi,Mo));if(l<0)return null;const u=a*this.direction.dot(ka.cross(Oi));if(u<0||l+u>o)return null;const c=-a*Oi.dot(Ba);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,r,s,o,a,l,u,c,h,d,f,g,v,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,d,f,g,v,m)}set(e,t,i,r,s,o,a,l,u,c,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,f=o*h,g=a*c,v=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=f+g*u,t[5]=d-v*u,t[9]=-a*l,t[2]=v-d*u,t[6]=g+f*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,f=l*h,g=u*c,v=u*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,f=l*h,g=u*c,v=u*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,f=o*h,g=a*c,v=a*h;t[0]=l*c,t[4]=g*u-f,t[8]=d*u+v,t[1]=l*h,t[5]=v*u+d,t[9]=f*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,f=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+v,t[5]=o*c,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*c,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Vp)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),ki.crossVectors(i,An),ki.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ki.crossVectors(i,An)),ki.normalize(),So.crossVectors(An,ki),r[0]=ki.x,r[4]=So.x,r[8]=An.x,r[1]=ki.y,r[5]=So.y,r[9]=An.y,r[2]=ki.z,r[6]=So.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],x=i[7],E=i[11],C=i[15],T=r[0],S=r[4],A=r[8],D=r[12],_=r[1],y=r[5],P=r[9],I=r[13],k=r[2],U=r[6],N=r[10],X=r[14],G=r[3],ae=r[7],re=r[11],ie=r[15];return s[0]=o*T+a*_+l*k+u*G,s[4]=o*S+a*y+l*U+u*ae,s[8]=o*A+a*P+l*N+u*re,s[12]=o*D+a*I+l*X+u*ie,s[1]=c*T+h*_+d*k+f*G,s[5]=c*S+h*y+d*U+f*ae,s[9]=c*A+h*P+d*N+f*re,s[13]=c*D+h*I+d*X+f*ie,s[2]=g*T+v*_+m*k+p*G,s[6]=g*S+v*y+m*U+p*ae,s[10]=g*A+v*P+m*N+p*re,s[14]=g*D+v*I+m*X+p*ie,s[3]=M*T+x*_+E*k+C*G,s[7]=M*S+x*y+E*U+C*ae,s[11]=M*A+x*P+E*N+C*re,s[15]=M*D+x*I+E*X+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*f-i*l*f)+v*(+t*l*f-t*u*d+s*o*d-r*o*f+r*u*c-s*l*c)+m*(+t*u*h-t*a*f-s*o*h+i*o*f+s*a*c-i*u*c)+p*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=h*m*u-v*d*u+v*l*f-a*m*f-h*l*p+a*d*p,x=g*d*u-c*m*u-g*l*f+o*m*f+c*l*p-o*d*p,E=c*v*u-g*h*u+g*a*f-o*v*f-c*a*p+o*h*p,C=g*h*l-c*v*l-g*a*d+o*v*d+c*a*m-o*h*m,T=t*M+i*x+r*E+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=M*S,e[1]=(v*d*s-h*m*s-v*r*f+i*m*f+h*r*p-i*d*p)*S,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*p+i*l*p)*S,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*f-i*l*f)*S,e[4]=x*S,e[5]=(c*m*s-g*d*s+g*r*f-t*m*f-c*r*p+t*d*p)*S,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*S,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*f+t*l*f)*S,e[8]=E*S,e[9]=(g*h*s-c*v*s-g*i*f+t*v*f+c*i*p-t*h*p)*S,e[10]=(o*v*s-g*a*s+g*i*u-t*v*u-o*i*p+t*a*p)*S,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*f-t*a*f)*S,e[12]=C*S,e[13]=(c*v*r-g*h*r+g*i*d-t*v*d-c*i*m+t*h*m)*S,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*S,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,f=s*c,g=s*h,v=o*c,m=o*h,p=a*h,M=l*u,x=l*c,E=l*h,C=i.x,T=i.y,S=i.z;return r[0]=(1-(v+p))*C,r[1]=(f+E)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(f-E)*T,r[5]=(1-(d+p))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(g+x)*S,r[9]=(m-M)*S,r[10]=(1-(d+v))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const u=1/s,c=1/o,h=1/a;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=c,qn.elements[5]*=c,qn.elements[6]*=c,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ai){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===Ai)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===aa)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ai){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*u,f=(i+r)*c;let g,v;if(a===Ai)g=(o+s)*h,v=-2*h;else if(a===aa)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fr=new L,qn=new Ve,Gp=new L(0,0,0),Vp=new L(1,1,1),ki=new L,So=new L,An=new L,Qc=new Ve,eu=new zt;class Qt{constructor(e=0,t=0,i=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wp=0;const tu=new L,Or=new zt,xi=new Ve,yo=new L,Is=new L,Xp=new L,qp=new zt,nu=new L(1,0,0),iu=new L(0,1,0),ru=new L(0,0,1),su={type:"added"},Yp={type:"removed"},kr={type:"childadded",child:null},za={type:"childremoved",child:null};class Ht extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new L,t=new Qt,i=new zt,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Xe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yo.copy(e):yo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Is,yo,this.up):xi.lookAt(yo,Is,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(xi),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new L,Mi=new L,Ha=new L,Si=new L,Br=new L,zr=new L,ou=new L,Ga=new L,Va=new L,Wa=new L,Xa=new St,qa=new St,Ya=new St;class Jn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Mi.subVectors(i,t),Ha.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Mi),l=Yn.dot(Ha),u=Mi.dot(Mi),c=Mi.dot(Ha),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(e,t),qa.fromBufferAttribute(e,i),Ya.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xa,s.x),o.addScaledVector(qa,s.y),o.addScaledVector(Ya,s.z),o}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),zr.subVectors(s,i),Ga.subVectors(e,i);const l=Br.dot(Ga),u=zr.dot(Ga);if(l<=0&&u<=0)return t.copy(i);Va.subVectors(e,r);const c=Br.dot(Va),h=zr.dot(Va);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Br,o);Wa.subVectors(e,s);const f=Br.dot(Wa),g=zr.dot(Wa);if(g>=0&&f<=g)return t.copy(s);const v=f*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(zr,a);const m=c*g-f*h;if(m<=0&&h-c>=0&&f-g>=0)return ou.subVectors(s,r),a=(h-c)/(h-c+(f-g)),t.copy(r).addScaledVector(ou,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Br,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=ec(e,1),t=vn(t,0,1),i=vn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$a(o,s,e+1/3),this.g=$a(o,s,e),this.b=$a(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return at.fromWorkingColorSpace(nn.copy(this),e),Math.round(vn(nn.r*255,0,255))*65536+Math.round(vn(nn.g*255,0,255))*256+Math.round(vn(nn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ln){at.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Eo);const i=qs(Bi.h,Eo.h,t),r=qs(Bi.s,Eo.s,t),s=qs(Bi.l,Eo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Qe;Qe.NAMES=_d;let $p=0;class ro extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=ss,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class un extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new L,bo=new nt;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class ic extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cn extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kp=0;const Un=new Ve,Ka=new Ht,Hr=new L,Rn=new Ii,Ds=new Ii,qt=new L;class ei extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?vd:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Rn.min,Ds.min),Rn.expandByPoint(qt),qt.addVectors(Rn.max,Ds.max),Rn.expandByPoint(qt)):(Rn.expandByPoint(Ds.min),Rn.expandByPoint(Ds.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)qt.fromBufferAttribute(a,u),l&&(Hr.fromBufferAttribute(e,u),qt.add(Hr)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new L,l[A]=new L;const u=new L,c=new L,h=new L,d=new nt,f=new nt,g=new nt,v=new L,m=new L;function p(A,D,_){u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,_),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,D),g.fromBufferAttribute(s,_),c.sub(u),h.sub(u),f.sub(d),g.sub(d);const y=1/(f.x*g.y-g.x*f.y);isFinite(y)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(y),m.copy(h).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(y),a[A].add(v),a[D].add(v),a[_].add(v),l[A].add(m),l[D].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let A=0,D=M.length;A<D;++A){const _=M[A],y=_.start,P=_.count;for(let I=y,k=y+P;I<k;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new L,E=new L,C=new L,T=new L;function S(A){C.fromBufferAttribute(r,A),T.copy(C);const D=a[A];x.copy(D),x.sub(C.multiplyScalar(C.dot(D))).normalize(),E.crossVectors(T,D);const y=E.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,y)}for(let A=0,D=M.length;A<D;++A){const _=M[A],y=_.start,P=_.count;for(let I=y,k=y+P;I<k;I+=3)S(e.getX(I+0)),S(e.getX(I+1)),S(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,u=new L,c=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let p=0;p<c;p++)d[g++]=u[f++]}return new Tn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,f=h.length;d<f;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new Ve,sr=new tc,wo=new Es,lu=new L,To=new L,Ao=new L,Ro=new L,ja=new L,Co=new L,cu=new L,Lo=new L;class vt extends Ht{constructor(e=new ei,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Co.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(ja.fromBufferAttribute(h,e),o?Co.addScaledVector(ja,c):Co.addScaledVector(ja.sub(t),c))}t.add(Co)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(wo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(wo,lu)===null||sr.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(au.copy(s).invert(),sr.copy(e.ray).applyMatrix4(au),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,C=x;E<C;E+=3){const T=a.getX(E),S=a.getX(E+1),A=a.getX(E+2);r=Po(this,p,e,i,u,c,h,T,S,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);r=Po(this,o,e,i,u,c,h,M,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,C=x;E<C;E+=3){const T=E,S=E+1,A=E+2;r=Po(this,p,e,i,u,c,h,T,S,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,x=m+1,E=m+2;r=Po(this,o,e,i,u,c,h,M,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function jp(n,e,t,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Li,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Lo);return u<t.near||u>t.far?null:{distance:u,point:Lo.clone(),object:n}}function Po(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,To),n.getVertexPosition(l,Ao),n.getVertexPosition(u,Ro);const c=jp(n,e,t,i,To,Ao,Ro,cu);if(c){const h=new L;Jn.getBarycoord(cu,To,Ao,Ro,h),r&&(c.uv=Jn.getInterpolatedAttribute(r,a,l,u,h,new nt)),s&&(c.uv1=Jn.getInterpolatedAttribute(s,a,l,u,h,new nt)),o&&(c.normal=Jn.getInterpolatedAttribute(o,a,l,u,h,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new L,materialIndex:0};Jn.getNormal(To,Ao,Ro,d.normal),c.face=d,c.barycoord=h}return c}class an extends ei{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(u,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(h,2));function g(v,m,p,M,x,E,C,T,S,A,D){const _=E/S,y=C/A,P=E/2,I=C/2,k=T/2,U=S+1,N=A+1;let X=0,G=0;const ae=new L;for(let re=0;re<N;re++){const ie=re*y-I;for(let Me=0;Me<U;Me++){const Ce=Me*_-P;ae[v]=Ce*M,ae[m]=ie*x,ae[p]=k,u.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[p]=T>0?1:-1,c.push(ae.x,ae.y,ae.z),h.push(Me/S),h.push(1-re/A),X+=1}}for(let re=0;re<A;re++)for(let ie=0;ie<S;ie++){const Me=d+ie+U*re,Ce=d+ie+U*(re+1),z=d+(ie+1)+U*(re+1),Y=d+(ie+1)+U*re;l.push(Me,Ce,Y),l.push(Ce,z,Y),G+=6}a.addGroup(f,G,D),f+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const r in i)e[r]=i[r]}return e}function Zp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Jp={clone:vs,merge:mn};var Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Md extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new L,uu=new nt,hu=new nt;class xn extends Md{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,uu,hu),t.subVectors(hu,uu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Vr=1;class tm extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Gr,Vr,e,t);r.layers=this.layers,this.add(r);const s=new xn(Gr,Vr,e,t);s.layers=this.layers,this.add(s);const o=new xn(Gr,Vr,e,t);o.layers=this.layers,this.add(o);const a=new xn(Gr,Vr,e,t);a.layers=this.layers,this.add(a);const l=new xn(Gr,Vr,e,t);l.layers=this.layers,this.add(l);const u=new xn(Gr,Vr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sd extends ln{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nm extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new an(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:ji});s.uniforms.tEquirect.value=t;const o=new vt(r,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=kn),new tm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Za=new L,im=new L,rm=new Xe;class fr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Za.subVectors(i,t).cross(im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rm.getNormalMatrix(e),r=this.coplanarPoint(Za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Es,Io=new L;class rc{constructor(e=new fr,t=new fr,i=new fr,r=new fr,s=new fr,o=new fr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],M=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,d-u,m-f,E-p).normalize(),i[1].setComponents(l+s,d+u,m+f,E+p).normalize(),i[2].setComponents(l+o,d+c,m+g,E+M).normalize(),i[3].setComponents(l-o,d-c,m-g,E-M).normalize(),i[4].setComponents(l-a,d-h,m-v,E-x).normalize(),t===Ai)i[5].setComponents(l+a,d+h,m+v,E+x).normalize();else if(t===aa)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sm(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class so extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const M=p*d-o;for(let x=0;x<u;x++){const E=x*h-s;g.push(E,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+u*p,E=M+u*(p+1),C=M+1+u*(p+1),T=M+1+u*p;f.push(x,E,T),f.push(E,C,T)}this.setIndex(f),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`
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
}`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ig=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mg=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
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
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wg=`float getShadowMask() {
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
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o_=`uniform sampler2D t2D;
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`#include <common>
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
}`,d_=`#if DEPTH_PACKING == 3200
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
}`,f_=`#define DISTANCE
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
}`,p_=`#define DISTANCE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,b_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,T_=`#define NORMAL
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
}`,A_=`#define PHONG
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
}`,R_=`#define PHONG
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
}`,C_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,P_=`#define TOON
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
}`,I_=`#define TOON
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
}`,D_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,F_=`uniform vec3 color;
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
}`,O_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:um,alphatest_pars_fragment:hm,aomap_fragment:dm,aomap_pars_fragment:fm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:vm,iridescence_fragment:xm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Em,clipping_planes_vertex:bm,color_fragment:wm,color_pars_fragment:Tm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Nm,colorspace_fragment:Fm,colorspace_pars_fragment:Om,envmap_fragment:km,envmap_common_pars_fragment:Bm,envmap_pars_fragment:zm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Jm,envmap_vertex:Gm,fog_vertex:Vm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:jm,lights_pars_begin:Zm,lights_toon_fragment:Qm,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:rg,lights_fragment_begin:sg,lights_fragment_maps:og,lights_fragment_end:ag,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:hg,map_fragment:dg,map_pars_fragment:fg,map_particle_fragment:pg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:_g,morphinstance_vertex:vg,morphcolor_vertex:xg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Sg,morphtarget_vertex:yg,normal_fragment_begin:Eg,normal_fragment_maps:bg,normal_pars_fragment:wg,normal_pars_vertex:Tg,normal_vertex:Ag,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Dg,packing:Ug,premultiplied_alpha_fragment:Ng,project_vertex:Fg,dithering_fragment:Og,dithering_pars_fragment:kg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Vg,shadowmask_pars_fragment:Wg,skinbase_vertex:Xg,skinning_pars_vertex:qg,skinning_vertex:Yg,skinnormal_vertex:$g,specularmap_fragment:Kg,specularmap_pars_fragment:jg,tonemapping_fragment:Zg,tonemapping_pars_fragment:Jg,transmission_fragment:Qg,transmission_pars_fragment:e_,uv_pars_fragment:t_,uv_pars_vertex:n_,uv_vertex:i_,worldpos_vertex:r_,background_vert:s_,background_frag:o_,backgroundCube_vert:a_,backgroundCube_frag:l_,cube_vert:c_,cube_frag:u_,depth_vert:h_,depth_frag:d_,distanceRGBA_vert:f_,distanceRGBA_frag:p_,equirect_vert:m_,equirect_frag:g_,linedashed_vert:__,linedashed_frag:v_,meshbasic_vert:x_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:y_,meshmatcap_vert:E_,meshmatcap_frag:b_,meshnormal_vert:w_,meshnormal_frag:T_,meshphong_vert:A_,meshphong_frag:R_,meshphysical_vert:C_,meshphysical_frag:L_,meshtoon_vert:P_,meshtoon_frag:I_,points_vert:D_,points_frag:U_,shadow_vert:N_,shadow_frag:F_,sprite_vert:O_,sprite_frag:k_},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},si={basic:{uniforms:mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:mn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:mn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:mn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:mn([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:mn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:mn([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:mn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:mn([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:mn([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:mn([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};si.physical={uniforms:mn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Do={r:0,b:0,g:0},ar=new Qt,B_=new Ve;function z_(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const E=g(M);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===da)?(c===void 0&&(c=new vt(new an(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:vs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ar.copy(x.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B_.makeRotationFromEuler(ar)),c.material.toneMapped=at.getTransfer(E.colorSpace)!==Mt,(h!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new vt(new so(2,2),new Qi({name:"BackgroundMaterial",uniforms:vs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=at.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,x){M.getRGB(Do,xd(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m}}function H_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,y,P,I,k){let U=!1;const N=h(I,P,y);s!==N&&(s=N,u(s.object)),U=f(_,I,P,k),U&&g(_,I,P,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,E(_,y,P,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function u(_){return n.bindVertexArray(_)}function c(_){return n.deleteVertexArray(_)}function h(_,y,P){const I=P.wireframe===!0;let k=i[_.id];k===void 0&&(k={},i[_.id]=k);let U=k[y.id];U===void 0&&(U={},k[y.id]=U);let N=U[I];return N===void 0&&(N=d(l()),U[I]=N),N}function d(_){const y=[],P=[],I=[];for(let k=0;k<t;k++)y[k]=0,P[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:P,attributeDivisors:I,object:_,attributes:{},index:null}}function f(_,y,P,I){const k=s.attributes,U=y.attributes;let N=0;const X=P.getAttributes();for(const G in X)if(X[G].location>=0){const re=k[G];let ie=U[G];if(ie===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),re===void 0||re.attribute!==ie||ie&&re.data!==ie.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(_,y,P,I){const k={},U=y.attributes;let N=0;const X=P.getAttributes();for(const G in X)if(X[G].location>=0){let re=U[G];re===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));const ie={};ie.attribute=re,re&&re.data&&(ie.data=re.data),k[G]=ie,N++}s.attributes=k,s.attributesNum=N,s.index=I}function v(){const _=s.newAttributes;for(let y=0,P=_.length;y<P;y++)_[y]=0}function m(_){p(_,0)}function p(_,y){const P=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;P[_]=1,I[_]===0&&(n.enableVertexAttribArray(_),I[_]=1),k[_]!==y&&(n.vertexAttribDivisor(_,y),k[_]=y)}function M(){const _=s.newAttributes,y=s.enabledAttributes;for(let P=0,I=y.length;P<I;P++)y[P]!==_[P]&&(n.disableVertexAttribArray(P),y[P]=0)}function x(_,y,P,I,k,U,N){N===!0?n.vertexAttribIPointer(_,y,P,k,U):n.vertexAttribPointer(_,y,P,I,k,U)}function E(_,y,P,I){v();const k=I.attributes,U=P.getAttributes(),N=y.defaultAttributeValues;for(const X in U){const G=U[X];if(G.location>=0){let ae=k[X];if(ae===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ae!==void 0){const re=ae.normalized,ie=ae.itemSize,Me=e.get(ae);if(Me===void 0)continue;const Ce=Me.buffer,z=Me.type,Y=Me.bytesPerElement,K=z===n.INT||z===n.UNSIGNED_INT||ae.gpuType===Y0;if(ae.isInterleavedBufferAttribute){const Z=ae.data,ge=Z.stride,Te=ae.offset;if(Z.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,Z.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ke=0;ke<G.locationSize;ke++)x(G.location+ke,ie/G.locationSize,z,re,ge*Y,(Te+ie/G.locationSize*ke)*Y,K)}else{if(ae.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,ae.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Z=0;Z<G.locationSize;Z++)x(G.location+Z,ie/G.locationSize,z,re,ie*Y,ie/G.locationSize*Z*Y,K)}}else if(N!==void 0){const re=N[X];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(G.location,re);break;case 3:n.vertexAttrib3fv(G.location,re);break;case 4:n.vertexAttrib4fv(G.location,re);break;default:n.vertexAttrib1fv(G.location,re)}}}}M()}function C(){A();for(const _ in i){const y=i[_];for(const P in y){const I=y[P];for(const k in I)c(I[k].object),delete I[k];delete y[P]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const y=i[_.id];for(const P in y){const I=y[P];for(const k in I)c(I[k].object),delete I[k];delete y[P]}delete i[_.id]}function S(_){for(const y in i){const P=i[y];if(P[_.id]===void 0)continue;const I=P[_.id];for(const k in I)c(I[k].object),delete I[k];delete P[_.id]}}function A(){D(),o=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function G_(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let f=0;for(let g=0;g<h;g++)f+=c[g];t.update(f,i,1)}function l(u,c,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=c[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Bn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const A=S===no&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Pi&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ai&&!A)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:C,maxSamples:T}}function W_(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new fr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const M=s?0:i,x=M*4;let E=p.clippingState||null;l.value=E,E=c(g,d,x,f);for(let C=0;C!==x;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==v;++x,E+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function X_(n){let e=new WeakMap;function t(o,a){return a===Jl?o.mapping=ps:a===Ql&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new nm(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sc extends Md{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,du=[.125,.215,.35,.446,.526,.582],vr=20,Ja=new sc,fu=new Qe;let Qa=null,el=0,tl=0,nl=!1;const pr=(1+Math.sqrt(5))/2,Wr=1/pr,pu=[new L(-pr,Wr,0),new L(pr,Wr,0),new L(-Wr,0,pr),new L(Wr,0,pr),new L(0,pr,-Wr),new L(0,pr,Wr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:no,format:Bn,colorSpace:er,depthBuffer:!1},r=gu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q_(s)),this._blurMaterial=Y_(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,r){const a=new xn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(fu),c.toneMapping=Zi,c.autoClear=!1;const f=new un({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new vt(new an,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(fu),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;Uo(r,M*x,p>2?x:0,x,x),c.setRenderTarget(r),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pu[(r-s-1)%pu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new vt(this._lodPlanes[r],u),d=u.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vr-1),v=s/g,m=isFinite(s)?1+Math.floor(c*v):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const p=[];let M=0;for(let S=0;S<vr;++S){const A=S/v,D=Math.exp(-A*A/2);p.push(D),S===0?M+=D:S<m&&(M+=2*D)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const E=this._sizeLods[r],C=3*E*(r>x-es?r-x+es:0),T=4*(this._cubeSize-E);Uo(t,C,T,3*E,2*E),l.setRenderTarget(t),l.render(h,Ja)}}function q_(n){const e=[],t=[],i=[];let r=n;const s=n-es+1+du.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-es?l=du[o-n+es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let T=0;T<f;T++){const S=T%3*2/3-1,A=T>2?0:-1,D=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];M.set(D,v*g*T),x.set(d,m*g*T);const _=[T,T,T,T,T,T];E.set(_,p*g*T)}const C=new ei;C.setAttribute("position",new Tn(M,v)),C.setAttribute("uv",new Tn(x,m)),C.setAttribute("faceIndex",new Tn(E,p)),e.push(C),r>es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gu(n,e,t){const i=new wr(n,e,t);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Y_(n,e,t){const i=new Float32Array(vr),r=new L(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _u(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function vu(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function $_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jl||l===Ql,c=l===ps||l===ms;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new mu(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return u&&f&&f.height>0||c&&f&&r(f)?(t===null&&(t=new mu(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function K_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function j_(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function u(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,E=M.length;x<E;x+=3){const C=M[x+0],T=M[x+1],S=M[x+2];d.push(C,T,T,S,S,C)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const C=x+0,T=x+1,S=x+2;d.push(C,T,T,S,S,C)}}else return;const m=new(pd(d)?vd:ic)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function c(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Z_(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),t.update(f,i,g))}function c(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<v.length;M++)t.update(p,i,v[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function J_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Q_(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let _=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const S=new Float32Array(C*T*4*h),A=new gd(S,C,T,h);A.type=ai,A.needsUpdate=!0;const D=E*4;for(let y=0;y<h;y++){const P=p[y],I=M[y],k=x[y],U=C*T*4*y;for(let N=0;N<P.count;N++){const X=N*D;g===!0&&(r.fromBufferAttribute(P,N),S[U+X+0]=r.x,S[U+X+1]=r.y,S[U+X+2]=r.z,S[U+X+3]=0),v===!0&&(r.fromBufferAttribute(I,N),S[U+X+4]=r.x,S[U+X+5]=r.y,S[U+X+6]=r.z,S[U+X+7]=0),m===!0&&(r.fromBufferAttribute(k,N),S[U+X+8]=r.x,S[U+X+9]=r.y,S[U+X+10]=r.z,S[U+X+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new nt(C,T)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function e1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Ed extends ln{constructor(e,t,i,r,s,o,a,l,u,c=os){if(c!==os&&c!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===os&&(i=br),i===void 0&&c===_s&&(i=gs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bd=new ln,xu=new Ed(1,1),wd=new gd,Td=new zp,Ad=new Sd,Mu=[],Su=[],yu=new Float32Array(16),Eu=new Float32Array(9),bu=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mu[r];if(s===void 0&&(s=new Float32Array(r),Mu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function t1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function s1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;bu.set(i),n.uniformMatrix2fv(this.addr,!1,bu),Vt(t,i)}}function o1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Vt(t,i)}}function a1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;yu.set(i),n.uniformMatrix4fv(this.addr,!1,yu),Vt(t,i)}}function l1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function g1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xu.compareFunction=fd,s=xu):s=bd,t.setTexture2D(e||s,r)}function _1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Td,r)}function v1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ad,r)}function x1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wd,r)}function M1(n){switch(n){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return f1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}function S1(n,e){n.uniform1fv(this.addr,e)}function y1(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function E1(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function b1(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function w1(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T1(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A1(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R1(n,e){n.uniform1iv(this.addr,e)}function C1(n,e){n.uniform2iv(this.addr,e)}function L1(n,e){n.uniform3iv(this.addr,e)}function P1(n,e){n.uniform4iv(this.addr,e)}function I1(n,e){n.uniform1uiv(this.addr,e)}function D1(n,e){n.uniform2uiv(this.addr,e)}function U1(n,e){n.uniform3uiv(this.addr,e)}function N1(n,e){n.uniform4uiv(this.addr,e)}function F1(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bd,s[o])}function O1(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Td,s[o])}function k1(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ad,s[o])}function B1(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wd,s[o])}function z1(n){switch(n){case 5126:return S1;case 35664:return y1;case 35665:return E1;case 35666:return b1;case 35674:return w1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return L1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return D1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return B1}}class H1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M1(t.type)}}class G1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z1(t.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function wu(n,e){n.seq.push(e),n.map[e.id]=e}function W1(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),o=il.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){wu(t,u===void 0?new H1(a,n,e):new G1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new V1(a),wu(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);W1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Tu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const X1=37297;let q1=0;function Y1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $1(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===oa&&t===sa?i="LinearDisplayP3ToLinearSRGB":e===sa&&t===oa&&(i="LinearSRGBToLinearDisplayP3"),n){case er:case fa:return[i,"LinearTransferOETF"];case Ln:case Q0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y1(n.getShaderSource(e),o)}else return r}function K1(n,e){const t=$1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function j1(n,e){let t;switch(e){case Zf:t="Linear";break;case Jf:t="Reinhard";break;case Qf:t="Cineon";break;case q0:t="ACESFilmic";break;case tp:t="AgX";break;case np:t="Neutral";break;case ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new L;function Z1(){at.getLuminanceCoefficients(No);const n=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Q1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ev(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hs(n){return n!==""}function Ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function A0(n){return n.replace(tv,iv)}const nv=new Map;function iv(n,e){let t=We[e];if(t===void 0){const i=nv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return A0(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(rv,sv)}function sv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ov(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function av(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ed:e="ENVMAP_BLENDING_MULTIPLY";break;case Kf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function uv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ov(t),u=av(t),c=lv(t),h=cv(t),d=uv(t),f=J1(t),g=Q1(s),v=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?We.tonemapping_pars_fragment:"",t.toneMapping!==Zi?j1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),Z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=A0(o),o=Ru(o,t),o=Cu(o,t),a=A0(a),a=Ru(a,t),a=Cu(a,t),o=Lu(o),a=Lu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,E=M+p+a,C=Tu(r,r.VERTEX_SHADER,x),T=Tu(r,r.FRAGMENT_SHADER,E);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function S(y){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(C).trim(),k=r.getShaderInfoLog(T).trim();let U=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,T);else{const X=Au(r,C,"vertex"),G=Au(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+P+`
`+X+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||k==="")&&(N=!1);N&&(y.diagnostics={runnable:U,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(C),r.deleteShader(T),A=new ea(r,v),D=ev(r,v)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let D;this.getAttributes=function(){return D===void 0&&S(this),D};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,X1)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let dv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pv(e),t.set(e,i)),i}}class pv{constructor(e){this.id=dv++,this.code=e,this.usedTimes=0}}function mv(n,e,t,i,r,s,o){const a=new nc,l=new fv,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return u.add(_),_===0?"uv":`uv${_}`}function p(_,y,P,I,k){const U=I.fog,N=k.geometry,X=_.isMeshStandardMaterial?I.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||X),ae=G&&G.mapping===da?G.image.height:null,re=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Me=ie!==void 0?ie.length:0;let Ce=0;N.morphAttributes.position!==void 0&&(Ce=1),N.morphAttributes.normal!==void 0&&(Ce=2),N.morphAttributes.color!==void 0&&(Ce=3);let z,Y,K,Z;if(re){const Kt=si[re];z=Kt.vertexShader,Y=Kt.fragmentShader}else z=_.vertexShader,Y=_.fragmentShader,l.update(_),K=l.getVertexShaderID(_),Z=l.getFragmentShaderID(_);const ge=n.getRenderTarget(),Te=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,ze=!!_.map,qe=!!_.matcap,F=!!G,kt=!!_.aoMap,je=!!_.lightMap,Ze=!!_.bumpMap,De=!!_.normalMap,lt=!!_.displacementMap,Ne=!!_.emissiveMap,R=!!_.metalnessMap,b=!!_.roughnessMap,V=_.anisotropy>0,j=_.clearcoat>0,ne=_.dispersion>0,J=_.iridescence>0,Ae=_.sheen>0,ue=_.transmission>0,fe=V&&!!_.anisotropyMap,Ye=j&&!!_.clearcoatMap,se=j&&!!_.clearcoatNormalMap,he=j&&!!_.clearcoatRoughnessMap,Ue=J&&!!_.iridescenceMap,Fe=J&&!!_.iridescenceThicknessMap,ye=Ae&&!!_.sheenColorMap,Ke=Ae&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,dt=!!_.specularColorMap,B=!!_.specularIntensityMap,me=ue&&!!_.transmissionMap,$=ue&&!!_.thicknessMap,ee=!!_.gradientMap,_e=!!_.alphaMap,ve=_.alphaTest>0,Je=!!_.alphaHash,Lt=!!_.extensions;let Wt=Zi;_.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Wt=n.toneMapping);const $e={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:Y,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:er,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:qe,envMap:F,envMapMode:F&&G.mapping,envMapCubeUVHeight:ae,aoMap:kt,lightMap:je,bumpMap:Ze,normalMap:De,displacementMap:f&&lt,emissiveMap:Ne,normalMapObjectSpace:De&&_.normalMapType===ap,normalMapTangentSpace:De&&_.normalMapType===dd,metalnessMap:R,roughnessMap:b,anisotropy:V,anisotropyMap:fe,clearcoat:j,clearcoatMap:Ye,clearcoatNormalMap:se,clearcoatRoughnessMap:he,dispersion:ne,iridescence:J,iridescenceMap:Ue,iridescenceThicknessMap:Fe,sheen:Ae,sheenColorMap:ye,sheenRoughnessMap:Ke,specularMap:Oe,specularColorMap:dt,specularIntensityMap:B,transmission:ue,transmissionMap:me,thicknessMap:$,gradientMap:ee,opaque:_.transparent===!1&&_.blending===ss&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:ve,alphaHash:Je,combine:_.combine,mapUv:ze&&m(_.map.channel),aoMapUv:kt&&m(_.aoMap.channel),lightMapUv:je&&m(_.lightMap.channel),bumpMapUv:Ze&&m(_.bumpMap.channel),normalMapUv:De&&m(_.normalMap.channel),displacementMapUv:lt&&m(_.displacementMap.channel),emissiveMapUv:Ne&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:b&&m(_.roughnessMap.channel),anisotropyMapUv:fe&&m(_.anisotropyMap.channel),clearcoatMapUv:Ye&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&m(_.sheenRoughnessMap.channel),specularMapUv:Oe&&m(_.specularMap.channel),specularColorMapUv:dt&&m(_.specularColorMap.channel),specularIntensityMapUv:B&&m(_.specularIntensityMap.channel),transmissionMapUv:me&&m(_.transmissionMap.channel),thicknessMapUv:$&&m(_.thicknessMap.channel),alphaMapUv:_e&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(De||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(ze||_e),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wi,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Lt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&_.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function M(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)y.push(P),y.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(x(y,_),E(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function x(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function E(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const y=v[_.type];let P;if(y){const I=si[y];P=Jp.clone(I.uniforms)}else P=_.uniforms;return P}function T(_,y){let P;for(let I=0,k=c.length;I<k;I++){const U=c[I];if(U.cacheKey===y){P=U,++P.usedTimes;break}}return P===void 0&&(P=new hv(n,y,_,s),c.push(P)),P}function S(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),_.destroy()}}function A(_){l.remove(_)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:C,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:D}}function gv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function _v(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Iu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Du(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,d){t.length>1&&t.sort(h||_v),i.length>1&&i.sort(d||Iu),r.length>1&&r.sort(d||Iu)}function c(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function vv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Du,n.set(i,[o])):r>=s.length?(o=new Du,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Qe};break;case"SpotLight":t={position:new L,direction:new L,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Mv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sv=0;function yv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ev(n){const e=new xv,t=Mv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,s=new Ve,o=new Ve;function a(u){let c=0,h=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,x=0,E=0,C=0,T=0,S=0;u.sort(yv);for(let D=0,_=u.length;D<_;D++){const y=u[D],P=y.color,I=y.intensity,k=y.distance,U=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)c+=P.r*I,h+=P.g*I,d+=P.b*I;else if(y.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(y.sh.coefficients[N],I);S++}else if(y.isDirectionalLight){const N=e.get(y);if(N.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const X=y.shadow,G=t.get(y);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=y.shadow.matrix,M++}i.directional[f]=N,f++}else if(y.isSpotLight){const N=e.get(y);N.position.setFromMatrixPosition(y.matrixWorld),N.color.copy(P).multiplyScalar(I),N.distance=k,N.coneCos=Math.cos(y.angle),N.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),N.decay=y.decay,i.spot[v]=N;const X=y.shadow;if(y.map&&(i.spotLightMap[C]=y.map,C++,X.updateMatrices(y),y.castShadow&&T++),i.spotLightMatrix[v]=X.matrix,y.castShadow){const G=t.get(y);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=U,E++}v++}else if(y.isRectAreaLight){const N=e.get(y);N.color.copy(P).multiplyScalar(I),N.halfWidth.set(y.width*.5,0,0),N.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=N,m++}else if(y.isPointLight){const N=e.get(y);if(N.color.copy(y.color).multiplyScalar(y.intensity),N.distance=y.distance,N.decay=y.decay,y.castShadow){const X=y.shadow,G=t.get(y);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=y.shadow.matrix,x++}i.point[g]=N,g++}else if(y.isHemisphereLight){const N=e.get(y);N.skyColor.copy(y.color).multiplyScalar(I),N.groundColor.copy(y.groundColor).multiplyScalar(I),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==M||A.numPointShadows!==x||A.numSpotShadows!==E||A.numSpotMaps!==C||A.numLightProbes!==S)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=M,A.numPointShadows=x,A.numSpotShadows=E,A.numSpotMaps=C,A.numLightProbes=S,i.version=Sv++)}function l(u,c){let h=0,d=0,f=0,g=0,v=0;const m=c.matrixWorldInverse;for(let p=0,M=u.length;p<M;p++){const x=u[p];if(x.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(x.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Uu(n){const e=new Ev(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bv(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Uu(n),e.set(r,[a])):s>=o.length?(a=new Uu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class wv extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tv extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`;function Cv(n,e,t){let i=new rc;const r=new nt,s=new nt,o=new St,a=new wv({depthPacking:op}),l=new Tv,u={},c=t.maxTextureSize,h={[Li]:wn,[wn]:Li,[wi]:wi},d=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(T,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=n.getRenderTarget(),_=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ji),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=p!==bi&&this.type===bi,k=p===bi&&this.type!==bi;for(let U=0,N=T.length;U<N;U++){const X=T[U],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ae=G.getFrameExtents();if(r.multiply(ae),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ae.x),r.x=s.x*ae.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ae.y),r.y=s.y*ae.y,G.mapSize.y=s.y)),G.map===null||I===!0||k===!0){const ie=this.type!==bi?{minFilter:bn,magFilter:bn}:{};G.map!==null&&G.map.dispose(),G.map=new wr(r.x,r.y,ie),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const re=G.getViewportCount();for(let ie=0;ie<re;ie++){const Me=G.getViewport(ie);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),P.viewport(o),G.updateMatrices(X,ie),i=G.getFrustum(),E(S,A,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===bi&&M(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,_,y)};function M(T,S){const A=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(S,null,A,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(S,null,A,f,v,null)}function x(T,S,A,D){let _=null;const y=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)_=y;else if(_=A.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const P=_.uuid,I=S.uuid;let k=u[P];k===void 0&&(k={},u[P]=k);let U=k[I];U===void 0&&(U=_.clone(),k[I]=U,S.addEventListener("dispose",C)),_=U}if(_.visible=S.visible,_.wireframe=S.wireframe,D===bi?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:h[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=n.properties.get(_);P.light=A}return _}function E(T,S,A,D,_){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const I=e.update(T),k=T.material;if(Array.isArray(k)){const U=I.groups;for(let N=0,X=U.length;N<X;N++){const G=U[N],ae=k[G.materialIndex];if(ae&&ae.visible){const re=x(T,ae,D,_);T.onBeforeShadow(n,T,S,A,I,re,G),n.renderBufferDirect(A,null,I,re,T,G),T.onAfterShadow(n,T,S,A,I,re,G)}}}else if(k.visible){const U=x(T,k,D,_);T.onBeforeShadow(n,T,S,A,I,U,null),n.renderBufferDirect(A,null,I,U,T,null),T.onAfterShadow(n,T,S,A,I,U,null)}}const P=T.children;for(let I=0,k=P.length;I<k;I++)E(P[I],S,A,D,_)}function C(T){T.target.removeEventListener("dispose",C);for(const A in u){const D=u[A],_=T.target.uuid;_ in D&&(D[_].dispose(),delete D[_])}}}const Lv={[Xl]:ql,[Yl]:jl,[$l]:Zl,[fs]:Kl,[ql]:Xl,[jl]:Yl,[Zl]:$l,[Kl]:fs};function Pv(n){function e(){let B=!1;const me=new St;let $=null;const ee=new St(0,0,0,0);return{setMask:function(_e){$!==_e&&!B&&(n.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){B=_e},setClear:function(_e,ve,Je,Lt,Wt){Wt===!0&&(_e*=Lt,ve*=Lt,Je*=Lt),me.set(_e,ve,Je,Lt),ee.equals(me)===!1&&(n.clearColor(_e,ve,Je,Lt),ee.copy(me))},reset:function(){B=!1,$=null,ee.set(-1,0,0,0)}}}function t(){let B=!1,me=!1,$=null,ee=null,_e=null;return{setReversed:function(ve){me=ve},setTest:function(ve){ve?K(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(ve){$!==ve&&!B&&(n.depthMask(ve),$=ve)},setFunc:function(ve){if(me&&(ve=Lv[ve]),ee!==ve){switch(ve){case Xl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case Yl:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case $l:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ve}},setLocked:function(ve){B=ve},setClear:function(ve){_e!==ve&&(n.clearDepth(ve),_e=ve)},reset:function(){B=!1,$=null,ee=null,_e=null}}}function i(){let B=!1,me=null,$=null,ee=null,_e=null,ve=null,Je=null,Lt=null,Wt=null;return{setTest:function($e){B||($e?K(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function($e){me!==$e&&!B&&(n.stencilMask($e),me=$e)},setFunc:function($e,Kt,Gn){($!==$e||ee!==Kt||_e!==Gn)&&(n.stencilFunc($e,Kt,Gn),$=$e,ee=Kt,_e=Gn)},setOp:function($e,Kt,Gn){(ve!==$e||Je!==Kt||Lt!==Gn)&&(n.stencilOp($e,Kt,Gn),ve=$e,Je=Kt,Lt=Gn)},setLocked:function($e){B=$e},setClear:function($e){Wt!==$e&&(n.clearStencil($e),Wt=$e)},reset:function(){B=!1,me=null,$=null,ee=null,_e=null,ve=null,Je=null,Lt=null,Wt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,M=null,x=null,E=null,C=null,T=new Qe(0,0,0),S=0,A=!1,D=null,_=null,y=null,P=null,I=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,N=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=N>=2);let G=null,ae={};const re=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Me=new St().fromArray(re),Ce=new St().fromArray(ie);function z(B,me,$,ee){const _e=new Uint8Array(4),ve=n.createTexture();n.bindTexture(B,ve),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<$;Je++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(me+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ve}const Y={};Y[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(n.DEPTH_TEST),s.setFunc(fs),je(!1),Ze(Hc),K(n.CULL_FACE),F(ji);function K(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Z(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ge(B,me){return c[B]!==me?(n.bindFramebuffer(B,me),c[B]=me,B===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=me),B===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Te(B,me){let $=d,ee=!1;if(B){$=h.get(me),$===void 0&&($=[],h.set(me,$));const _e=B.textures;if($.length!==_e.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Je=_e.length;ve<Je;ve++)$[ve]=n.COLOR_ATTACHMENT0+ve;$.length=_e.length,ee=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ee=!0);ee&&n.drawBuffers($)}function ke(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const ze={[_r]:n.FUNC_ADD,[If]:n.FUNC_SUBTRACT,[Df]:n.FUNC_REVERSE_SUBTRACT};ze[Uf]=n.MIN,ze[Nf]=n.MAX;const qe={[Ff]:n.ZERO,[Of]:n.ONE,[kf]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Wf]:n.SRC_ALPHA_SATURATE,[Gf]:n.DST_COLOR,[zf]:n.DST_ALPHA,[Bf]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[Vf]:n.ONE_MINUS_DST_COLOR,[Hf]:n.ONE_MINUS_DST_ALPHA,[Xf]:n.CONSTANT_COLOR,[qf]:n.ONE_MINUS_CONSTANT_COLOR,[Yf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function F(B,me,$,ee,_e,ve,Je,Lt,Wt,$e){if(B===ji){g===!0&&(Z(n.BLEND),g=!1);return}if(g===!1&&(K(n.BLEND),g=!0),B!==Pf){if(B!==v||$e!==A){if((m!==_r||x!==_r)&&(n.blendEquation(n.FUNC_ADD),m=_r,x=_r),$e)switch(B){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFunc(n.ONE,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,M=null,E=null,C=null,T.set(0,0,0),S=0,v=B,A=$e}return}_e=_e||me,ve=ve||$,Je=Je||ee,(me!==m||_e!==x)&&(n.blendEquationSeparate(ze[me],ze[_e]),m=me,x=_e),($!==p||ee!==M||ve!==E||Je!==C)&&(n.blendFuncSeparate(qe[$],qe[ee],qe[ve],qe[Je]),p=$,M=ee,E=ve,C=Je),(Lt.equals(T)===!1||Wt!==S)&&(n.blendColor(Lt.r,Lt.g,Lt.b,Wt),T.copy(Lt),S=Wt),v=B,A=!1}function kt(B,me){B.side===wi?Z(n.CULL_FACE):K(n.CULL_FACE);let $=B.side===wn;me&&($=!$),je($),B.blending===ss&&B.transparent===!1?F(ji):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ee=B.stencilWrite;o.setTest(ee),ee&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(B){D!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),D=B)}function Ze(B){B!==Rf?(K(n.CULL_FACE),B!==_&&(B===Hc?n.cullFace(n.BACK):B===Cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),_=B}function De(B){B!==y&&(U&&n.lineWidth(B),y=B)}function lt(B,me,$){B?(K(n.POLYGON_OFFSET_FILL),(P!==me||I!==$)&&(n.polygonOffset(me,$),P=me,I=$)):Z(n.POLYGON_OFFSET_FILL)}function Ne(B){B?K(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function R(B){B===void 0&&(B=n.TEXTURE0+k-1),G!==B&&(n.activeTexture(B),G=B)}function b(B,me,$){$===void 0&&(G===null?$=n.TEXTURE0+k-1:$=G);let ee=ae[$];ee===void 0&&(ee={type:void 0,texture:void 0},ae[$]=ee),(ee.type!==B||ee.texture!==me)&&(G!==$&&(n.activeTexture($),G=$),n.bindTexture(B,me||Y[B]),ee.type=B,ee.texture=me)}function V(){const B=ae[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function ye(B){Ce.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function Ke(B,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ee=$.get(B);ee===void 0&&(ee=n.getUniformBlockIndex(me,B.name),$.set(B,ee))}function Oe(B,me){const ee=l.get(me).get(B);a.get(me)!==ee&&(n.uniformBlockBinding(me,ee,B.__bindingPointIndex),a.set(me,ee))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,ae={},c={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,M=null,x=null,E=null,C=null,T=new Qe(0,0,0),S=0,A=!1,D=null,_=null,y=null,P=null,I=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:K,disable:Z,bindFramebuffer:ge,drawBuffers:Te,useProgram:ke,setBlending:F,setMaterial:kt,setFlipSided:je,setCullFace:Ze,setLineWidth:De,setPolygonOffset:lt,setScissorTest:Ne,activeTexture:R,bindTexture:b,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:he,texImage3D:Ue,updateUBOMapping:Ke,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:se,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:Fe,viewport:ye,reset:dt}}function Nu(n,e,t,i){const r=Iv(i);switch(t){case sd:return n*e;case ad:return n*e;case ld:return n*e*2;case cd:return n*e/r.components*r.byteLength;case j0:return n*e/r.components*r.byteLength;case ud:return n*e*2/r.components*r.byteLength;case Z0:return n*e*2/r.components*r.byteLength;case od:return n*e*3/r.components*r.byteLength;case Bn:return n*e*4/r.components*r.byteLength;case J0:return n*e*4/r.components*r.byteLength;case $o:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jo:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case n0:case r0:return Math.max(n,16)*Math.max(e,8)/4;case t0:case i0:return Math.max(n,8)*Math.max(e,8)/2;case s0:case o0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case a0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case l0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case c0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case u0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case h0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case d0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case f0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case p0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case m0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case g0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case v0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case x0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case M0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case S0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jo:case y0:case E0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hd:case b0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case w0:case T0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iv(n){switch(n){case Pi:case nd:return{byteLength:1,components:1};case js:case id:case no:return{byteLength:2,components:1};case $0:case K0:return{byteLength:2,components:4};case br:case Y0:case ai:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Dv(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,c=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):la("canvas")}function v(R,b,V){let j=1;const ne=Ne(R);if((ne.width>V||ne.height>V)&&(j=V/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*ne.width),Ae=Math.floor(j*ne.height);h===void 0&&(h=g(J,Ae));const ue=b?g(J,Ae):h;return ue.width=J,ue.height=Ae,ue.getContext("2d").drawImage(R,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ae+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==bn&&R.minFilter!==kn}function p(R){n.generateMipmap(R)}function M(R,b,V,j,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=b;if(b===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),b===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),b===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),b===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),b===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),b===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),b===n.RGBA){const Ae=ne?ra:at.getTransfer(j);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Ae===Mt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(R,b){let V;return R?b===null||b===br||b===gs?V=n.DEPTH24_STENCIL8:b===ai?V=n.DEPTH32F_STENCIL8:b===js&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===gs?V=n.DEPTH_COMPONENT24:b===ai?V=n.DEPTH_COMPONENT32F:b===js&&(V=n.DEPTH_COMPONENT16),V}function E(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==bn&&R.minFilter!==kn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),S(b),b.isVideoTexture&&c.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),D(b)}function S(R){const b=i.get(R);if(b.__webglInit===void 0)return;const V=R.source,j=d.get(V);if(j){const ne=j[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(R),Object.keys(j).length===0&&d.delete(V)}i.remove(R)}function A(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const V=R.source,j=d.get(V);delete j[b.__cacheKey],o.memory.textures--}function D(R){const b=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ne=0;ne<b.__webglFramebuffer[j].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[j][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=R.textures;for(let j=0,ne=V.length;j<ne;j++){const J=i.get(V[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[j])}i.remove(R)}let _=0;function y(){_=0}function P(){const R=_;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),_+=1,R}function I(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const V=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,R,b);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function U(R,b){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Ce(V,R,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function N(R,b){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Ce(V,R,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function X(R,b){const V=i.get(R);if(R.version>0&&V.__version!==R.version){z(V,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}const G={[ia]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[e0]:n.MIRRORED_REPEAT},ae={[bn]:n.NEAREST,[rp]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},re={[lp]:n.NEVER,[pp]:n.ALWAYS,[cp]:n.LESS,[fd]:n.LEQUAL,[up]:n.EQUAL,[fp]:n.GEQUAL,[hp]:n.GREATER,[dp]:n.NOTEQUAL};function ie(R,b){if(b.type===ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kn||b.magFilter===La||b.magFilter===mo||b.magFilter===Yi||b.minFilter===kn||b.minFilter===La||b.minFilter===mo||b.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,G[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,G[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,G[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ae[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==mo&&b.minFilter!==Yi||b.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const j=b.source;let ne=d.get(j);ne===void 0&&(ne={},d.set(j,ne));const J=I(b);if(J!==R.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[J].usedTimes++;const Ae=ne[R.__cacheKey];Ae!==void 0&&(ne[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(b)),R.__cacheKey=J,R.__webglTexture=ne[J].texture}return V}function Ce(R,b,V){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const ne=Me(R,b),J=b.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+V);const Ae=i.get(J);if(J.version!==Ae.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const ue=at.getPrimaries(at.workingColorSpace),fe=b.colorSpace===Xi?null:at.getPrimaries(b.colorSpace),Ye=b.colorSpace===Xi||ue===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let se=v(b.image,!1,r.maxTextureSize);se=lt(b,se);const he=s.convert(b.format,b.colorSpace),Ue=s.convert(b.type);let Fe=M(b.internalFormat,he,Ue,b.colorSpace,b.isVideoTexture);ie(j,b);let ye;const Ke=b.mipmaps,Oe=b.isVideoTexture!==!0,dt=Ae.__version===void 0||ne===!0,B=J.dataReady,me=E(b,se);if(b.isDepthTexture)Fe=x(b.format===_s,b.type),dt&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Fe,se.width,se.height,0,he,Ue,null));else if(b.isDataTexture)if(Ke.length>0){Oe&&dt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,Ke[0].width,Ke[0].height);for(let $=0,ee=Ke.length;$<ee;$++)ye=Ke[$],Oe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ye.width,ye.height,he,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,$,Fe,ye.width,ye.height,0,he,Ue,ye.data);b.generateMipmaps=!1}else Oe?(dt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,se.width,se.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,he,Ue,se.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,se.width,se.height,0,he,Ue,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Fe,Ke[0].width,Ke[0].height,se.depth);for(let $=0,ee=Ke.length;$<ee;$++)if(ye=Ke[$],b.format!==Bn)if(he!==null)if(Oe){if(B)if(b.layerUpdates.size>0){const _e=Nu(ye.width,ye.height,b.format,b.type);for(const ve of b.layerUpdates){const Je=ye.data.subarray(ve*_e/ye.data.BYTES_PER_ELEMENT,(ve+1)*_e/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ve,ye.width,ye.height,1,he,Je,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,se.depth,he,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Fe,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,se.depth,he,Ue,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Fe,ye.width,ye.height,se.depth,0,he,Ue,ye.data)}else{Oe&&dt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,Ke[0].width,Ke[0].height);for(let $=0,ee=Ke.length;$<ee;$++)ye=Ke[$],b.format!==Bn?he!==null?Oe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ye.width,ye.height,he,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ye.width,ye.height,he,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,$,Fe,ye.width,ye.height,0,he,Ue,ye.data)}else if(b.isDataArrayTexture)if(Oe){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Fe,se.width,se.height,se.depth),B)if(b.layerUpdates.size>0){const $=Nu(se.width,se.height,b.format,b.type);for(const ee of b.layerUpdates){const _e=se.data.subarray(ee*$/se.data.BYTES_PER_ELEMENT,(ee+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,he,Ue,_e)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Ue,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,he,Ue,se.data);else if(b.isData3DTexture)Oe?(dt&&t.texStorage3D(n.TEXTURE_3D,me,Fe,se.width,se.height,se.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Ue,se.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,he,Ue,se.data);else if(b.isFramebufferTexture){if(dt)if(Oe)t.texStorage2D(n.TEXTURE_2D,me,Fe,se.width,se.height);else{let $=se.width,ee=se.height;for(let _e=0;_e<me;_e++)t.texImage2D(n.TEXTURE_2D,_e,Fe,$,ee,0,he,Ue,null),$>>=1,ee>>=1}}else if(Ke.length>0){if(Oe&&dt){const $=Ne(Ke[0]);t.texStorage2D(n.TEXTURE_2D,me,Fe,$.width,$.height)}for(let $=0,ee=Ke.length;$<ee;$++)ye=Ke[$],Oe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,he,Ue,ye):t.texImage2D(n.TEXTURE_2D,$,Fe,he,Ue,ye);b.generateMipmaps=!1}else if(Oe){if(dt){const $=Ne(se);t.texStorage2D(n.TEXTURE_2D,me,Fe,$.width,$.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ue,se)}else t.texImage2D(n.TEXTURE_2D,0,Fe,he,Ue,se);m(b)&&p(j),Ae.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function z(R,b,V){if(b.image.length!==6)return;const j=Me(R,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const J=i.get(ne);if(ne.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+V);const Ae=at.getPrimaries(at.workingColorSpace),ue=b.colorSpace===Xi?null:at.getPrimaries(b.colorSpace),fe=b.colorSpace===Xi||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!Ye&&!se?he[ee]=v(b.image[ee],!0,r.maxCubemapSize):he[ee]=se?b.image[ee].image:b.image[ee],he[ee]=lt(b,he[ee]);const Ue=he[0],Fe=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),Ke=M(b.internalFormat,Fe,ye,b.colorSpace),Oe=b.isVideoTexture!==!0,dt=J.__version===void 0||j===!0,B=ne.dataReady;let me=E(b,Ue);ie(n.TEXTURE_CUBE_MAP,b);let $;if(Ye){Oe&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ke,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){$=he[ee].mipmaps;for(let _e=0;_e<$.length;_e++){const ve=$[_e];b.format!==Bn?Fe!==null?Oe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,ve.width,ve.height,Fe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,ve.width,ve.height,Fe,ye,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Ke,ve.width,ve.height,0,Fe,ye,ve.data)}}}else{if($=b.mipmaps,Oe&&dt){$.length>0&&me++;const ee=Ne(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Fe,ye,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,he[ee].width,he[ee].height,0,Fe,ye,he[ee].data);for(let _e=0;_e<$.length;_e++){const Je=$[_e].image[ee].image;Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Je.width,Je.height,Fe,ye,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Ke,Je.width,Je.height,0,Fe,ye,Je.data)}}else{Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,ye,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Fe,ye,he[ee]);for(let _e=0;_e<$.length;_e++){const ve=$[_e];Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Fe,ye,ve.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Ke,Fe,ye,ve.image[ee])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),J.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Y(R,b,V,j,ne,J){const Ae=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),fe=M(V.internalFormat,Ae,ue,V.colorSpace);if(!i.get(b).__hasExternalTextures){const se=Math.max(1,b.width>>J),he=Math.max(1,b.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,fe,se,he,b.depth,0,Ae,ue,null):t.texImage2D(ne,J,fe,se,he,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ze(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ne,i.get(V).__webglTexture,0,je(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ne,i.get(V).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(R,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){const j=b.depthTexture,ne=j&&j.isDepthTexture?j.type:null,J=x(b.stencilBuffer,ne),Ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=je(b);Ze(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,J,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,J,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,R)}else{const j=b.textures;for(let ne=0;ne<j.length;ne++){const J=j[ne],Ae=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),fe=M(J.internalFormat,Ae,ue,J.colorSpace),Ye=je(b);V&&Ze(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,fe,b.width,b.height):Ze(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const j=i.get(b.depthTexture).__webglTexture,ne=je(b);if(b.depthTexture.format===os)Ze(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(b.depthTexture.format===_s)Ze(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ge(R){const b=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),K(b.__webglDepthbuffer[j],R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),K(b.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(R,b,V){const j=i.get(R);b!==void 0&&Y(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ge(R)}function ke(R){const b=R.texture,V=i.get(R),j=i.get(b);R.addEventListener("dispose",T);const ne=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let fe=0;fe<b.mipmaps.length;fe++)V.__webglFramebuffer[ue][fe]=n.createFramebuffer()}else V.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)V.__webglFramebuffer[ue]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,fe=ne.length;ue<fe;ue++){const Ye=i.get(ne[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ze(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const fe=ne[ue];V.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ye=s.convert(fe.format,fe.colorSpace),se=s.convert(fe.type),he=M(fe.internalFormat,Ye,se,fe.colorSpace,R.isXRRenderTarget===!0),Ue=je(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,he,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),K(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ie(n.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Y(V.__webglFramebuffer[ue][fe],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Y(V.__webglFramebuffer[ue],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,fe=ne.length;ue<fe;ue++){const Ye=ne[ue],se=i.get(Ye);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ie(n.TEXTURE_2D,Ye),Y(V.__webglFramebuffer,R,Ye,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ye)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),ie(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Y(V.__webglFramebuffer[fe],R,b,n.COLOR_ATTACHMENT0,ue,fe);else Y(V.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,ue,0);m(b)&&p(ue),t.unbindTexture()}R.depthBuffer&&ge(R)}function ze(R){const b=R.textures;for(let V=0,j=b.length;V<j;V++){const ne=b[V];if(m(ne)){const J=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(ne).__webglTexture;t.bindTexture(J,Ae),p(J),t.unbindTexture()}}}const qe=[],F=[];function kt(R){if(R.samples>0){if(Ze(R)===!1){const b=R.textures,V=R.width,j=R.height;let ne=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(R),ue=b.length>1;if(ue)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[fe]);const Ye=i.get(b[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,V,j,0,0,V,j,ne,n.NEAREST),l===!0&&(qe.length=0,F.length=0,qe.push(n.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(qe.push(J),F.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[fe]);const Ye=i.get(b[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function je(R){return Math.min(r.maxSamples,R.samples)}function Ze(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function De(R){const b=o.render.frame;c.get(R)!==b&&(c.set(R,b),R.update())}function lt(R,b){const V=R.colorSpace,j=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==er&&V!==Xi&&(at.getTransfer(V)===Mt?(j!==Bn||ne!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=y,this.setTexture2D=k,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=Te,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ze}function Uv(n,e){function t(i,r=Xi){let s;const o=at.getTransfer(r);if(i===Pi)return n.UNSIGNED_BYTE;if(i===$0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===K0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return n.BYTE;if(i===id)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===Y0)return n.INT;if(i===br)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===no)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===od)return n.RGB;if(i===Bn)return n.RGBA;if(i===ad)return n.LUMINANCE;if(i===ld)return n.LUMINANCE_ALPHA;if(i===os)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===cd)return n.RED;if(i===j0)return n.RED_INTEGER;if(i===ud)return n.RG;if(i===Z0)return n.RG_INTEGER;if(i===J0)return n.RGBA_INTEGER;if(i===$o||i===Ko||i===jo||i===Zo)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===t0||i===n0||i===i0||i===r0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===t0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===n0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===i0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===r0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===s0||i===o0||i===a0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===s0||i===o0)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===a0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===l0||i===c0||i===u0||i===h0||i===d0||i===f0||i===p0||i===m0||i===g0||i===_0||i===v0||i===x0||i===M0||i===S0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===l0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===c0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===u0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===h0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===d0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===f0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===p0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===m0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===g0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===v0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===x0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===M0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===S0)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===y0||i===E0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jo)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===y0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===E0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hd||i===b0||i===w0||i===T0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===b0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===w0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===T0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Nv extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fv={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),f=.02,g=.005;u.inputState.pinching&&d>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Qi({vertexShader:Ov,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zv extends ys{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,f=null,g=null;const v=new Bv,m=t.getContextAttributes();let p=null,M=null;const x=[],E=[],C=new nt;let T=null;const S=new xn;S.layers.enable(1),S.viewport=new St;const A=new xn;A.layers.enable(2),A.viewport=new St;const D=[S,A],_=new Nv;_.layers.enable(1),_.layers.enable(2);let y=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=x[z];return Y===void 0&&(Y=new rl,x[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=x[z];return Y===void 0&&(Y=new rl,x[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=x[z];return Y===void 0&&(Y=new rl,x[z]=Y),Y.getHandSpace()};function I(z){const Y=E.indexOf(z.inputSource);if(Y===-1)return;const K=x[Y];K!==void 0&&(K.update(z.inputSource,z.frame,u||o),K.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",U);for(let z=0;z<x.length;z++){const Y=E[z];Y!==null&&(E[z]=null,x[z].disconnect(Y))}y=null,P=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,M=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",k),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new wr(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,K=null,Z=null;m.depth&&(Z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?_s:os,K=m.stencil?gs:br);const ge={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new wr(d.textureWidth,d.textureHeight,{format:Bn,type:Pi,depthTexture:new Ed(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function U(z){for(let Y=0;Y<z.removed.length;Y++){const K=z.removed[Y],Z=E.indexOf(K);Z>=0&&(E[Z]=null,x[Z].disconnect(K))}for(let Y=0;Y<z.added.length;Y++){const K=z.added[Y];let Z=E.indexOf(K);if(Z===-1){for(let Te=0;Te<x.length;Te++)if(Te>=E.length){E.push(K),Z=Te;break}else if(E[Te]===null){E[Te]=K,Z=Te;break}if(Z===-1)break}const ge=x[Z];ge&&ge.connect(K)}}const N=new L,X=new L;function G(z,Y,K){N.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(K.matrixWorld);const Z=N.distanceTo(X),ge=Y.projectionMatrix.elements,Te=K.projectionMatrix.elements,ke=ge[14]/(ge[10]-1),ze=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],F=(ge[9]-1)/ge[5],kt=(ge[8]-1)/ge[0],je=(Te[8]+1)/Te[0],Ze=ke*kt,De=ke*je,lt=Z/(-kt+je),Ne=lt*-kt;if(Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ne),z.translateZ(lt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ge[10]===-1)z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const R=ke+lt,b=ze+lt,V=Ze-Ne,j=De+(Z-Ne),ne=qe*ze/b*R,J=F*ze/b*R;z.projectionMatrix.makePerspective(V,j,ne,J,R,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ae(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let Y=z.near,K=z.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(K=v.depthFar)),_.near=A.near=S.near=Y,_.far=A.far=S.far=K,(y!==_.near||P!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,P=_.far);const Z=z.parent,ge=_.cameras;ae(_,Z);for(let Te=0;Te<ge.length;Te++)ae(ge[Te],Z);ge.length===2?G(_,S,A):_.projectionMatrix.copy(S.projectionMatrix),re(z,_,Z)};function re(z,Y,K){K===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Zs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ie=null;function Me(z,Y){if(c=Y.getViewerPose(u||o),g=Y,c!==null){const K=c.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Z=!1;K.length!==_.cameras.length&&(_.cameras.length=0,Z=!0);for(let Te=0;Te<K.length;Te++){const ke=K[Te];let ze=null;if(f!==null)ze=f.getViewport(ke);else{const F=h.getViewSubImage(d,ke);ze=F.viewport,Te===0&&(e.setRenderTargetTextures(M,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(M))}let qe=D[Te];qe===void 0&&(qe=new xn,qe.layers.enable(Te),qe.viewport=new St,D[Te]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ze.x,ze.y,ze.width,ze.height),Te===0&&(_.matrix.copy(qe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Z===!0&&_.cameras.push(qe)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Te=h.getDepthInformation(K[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,r.renderState)}}for(let K=0;K<x.length;K++){const Z=E[K],ge=x[K];Z!==null&&ge!==void 0&&ge.update(Z,Y,u||o)}ie&&ie(z,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Ce=new yd;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(z){ie=z},this.dispose=function(){}}}const lr=new Qt,Hv=new Ve;function Gv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,xd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,E=M.envMapRotation;x&&(m.envMap.value=x,lr.copy(E),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(lr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vv(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const E=x.program;i.uniformBlockBinding(M,E)}function u(M,x){let E=r[M.id];E===void 0&&(g(M),E=c(M),r[M.id]=E,M.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(M,C);const T=e.render.frame;s[M.id]!==T&&(d(M),s[M.id]=T)}function c(M){const x=h();M.__bindingPointIndex=x;const E=n.createBuffer(),C=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],E=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,S=E.length;T<S;T++){const A=Array.isArray(E[T])?E[T]:[E[T]];for(let D=0,_=A.length;D<_;D++){const y=A[D];if(f(y,T,D,C)===!0){const P=y.__offset,I=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let U=0;U<I.length;U++){const N=I[U],X=v(N);typeof N=="number"||typeof N=="boolean"?(y.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+k,y.__data)):N.isMatrix3?(y.__data[0]=N.elements[0],y.__data[1]=N.elements[1],y.__data[2]=N.elements[2],y.__data[3]=0,y.__data[4]=N.elements[3],y.__data[5]=N.elements[4],y.__data[6]=N.elements[5],y.__data[7]=0,y.__data[8]=N.elements[6],y.__data[9]=N.elements[7],y.__data[10]=N.elements[8],y.__data[11]=0):(N.toArray(y.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,x,E,C){const T=M.value,S=x+"_"+E;if(C[S]===void 0)return typeof T=="number"||typeof T=="boolean"?C[S]=T:C[S]=T.clone(),!0;{const A=C[S];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[S]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(M){const x=M.uniforms;let E=0;const C=16;for(let S=0,A=x.length;S<A;S++){const D=Array.isArray(x[S])?x[S]:[x[S]];for(let _=0,y=D.length;_<y;_++){const P=D[_],I=Array.isArray(P.value)?P.value:[P.value];for(let k=0,U=I.length;k<U;k++){const N=I[k],X=v(N),G=E%C,ae=G%X.boundary,re=G+ae;E+=ae,re!==0&&C-re<X.storage&&(E+=C-re),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=X.storage}}}const T=E%C;return T>0&&(E+=C-T),M.__size=E,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class ac{constructor(e={}){const{canvas:t=Pp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=Zi,this.toneMappingExposure=1;const x=this;let E=!1,C=0,T=0,S=null,A=-1,D=null;const _=new St,y=new St;let P=null;const I=new Qe(0);let k=0,U=t.width,N=t.height,X=1,G=null,ae=null;const re=new St(0,0,U,N),ie=new St(0,0,U,N);let Me=!1;const Ce=new rc;let z=!1,Y=!1;const K=new Ve,Z=new Ve,ge=new L,Te=new St,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function qe(){return S===null?X:1}let F=i;function kt(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${X0}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const O="webgl2";if(F=kt(O,w),F===null)throw kt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Ze,De,lt,Ne,R,b,V,j,ne,J,Ae,ue,fe,Ye,se,he,Ue,Fe,ye,Ke,Oe,dt,B;function me(){je=new K_(F),je.init(),Oe=new Uv(F,je),Ze=new V_(F,je,e,Oe),De=new Pv(F),Ze.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),lt=new J_(F),Ne=new gv,R=new Dv(F,je,De,Ne,Ze,Oe,lt),b=new X_(x),V=new $_(x),j=new sm(F),dt=new H_(F,j),ne=new j_(F,j,lt,dt),J=new e1(F,ne,j,lt),Fe=new Q_(F,Ze,R),se=new W_(Ne),Ae=new mv(x,b,V,je,Ze,dt,se),ue=new Gv(x,Ne),fe=new vv,Ye=new bv(je),Ue=new z_(x,b,V,De,J,d,l),he=new Cv(x,J,Ze),B=new Vv(F,lt,Ze,De),ye=new G_(F,je,lt),Ke=new Z_(F,je,lt),lt.programs=Ae.programs,x.capabilities=Ze,x.extensions=je,x.properties=Ne,x.renderLists=fe,x.shadowMap=he,x.state=De,x.info=lt}me();const $=new zv(x,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(U,N,!1))},this.getSize=function(w){return w.set(U,N)},this.setSize=function(w,O,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,N=O,t.width=Math.floor(w*X),t.height=Math.floor(O*X),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(U*X,N*X).floor()},this.setDrawingBufferSize=function(w,O,W){U=w,N=O,X=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,O,W,q){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,O,W,q),De.viewport(_.copy(re).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,O,W,q){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,O,W,q),De.scissor(y.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){De.setScissorTest(Me=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(w=!0,O=!0,W=!0){let q=0;if(w){let H=!1;if(S!==null){const oe=S.texture.format;H=oe===J0||oe===Z0||oe===j0}if(H){const oe=S.texture.type,pe=oe===Pi||oe===br||oe===js||oe===gs||oe===$0||oe===K0,Se=Ue.getClearColor(),we=Ue.getClearAlpha(),Pe=Se.r,Ie=Se.g,Re=Se.b;pe?(f[0]=Pe,f[1]=Ie,f[2]=Re,f[3]=we,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Pe,g[1]=Ie,g[2]=Re,g[3]=we,F.clearBufferiv(F.COLOR,0,g))}else q|=F.COLOR_BUFFER_BIT}O&&(q|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),fe.dispose(),Ye.dispose(),Ne.dispose(),b.dispose(),V.dispose(),J.dispose(),dt.dispose(),B.dispose(),Ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",Vn),$.removeEventListener("sessionend",Ts),Wn.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=lt.autoReset,O=he.enabled,W=he.autoUpdate,q=he.needsUpdate,H=he.type;me(),lt.autoReset=w,he.enabled=O,he.autoUpdate=W,he.needsUpdate=q,he.type=H}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const O=w.target;O.removeEventListener("dispose",Je),Lt(O)}function Lt(w){Wt(w),Ne.remove(w)}function Wt(w){const O=Ne.get(w).programs;O!==void 0&&(O.forEach(function(W){Ae.releaseProgram(W)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,q,H,oe){O===null&&(O=ke);const pe=H.isMesh&&H.matrixWorld.determinant()<0,Se=pt(w,O,W,q,H);De.setMaterial(q,pe);let we=W.index,Pe=1;if(q.wireframe===!0){if(we=ne.getWireframeAttribute(W),we===void 0)return;Pe=2}const Ie=W.drawRange,Re=W.attributes.position;let st=Ie.start*Pe,ct=(Ie.start+Ie.count)*Pe;oe!==null&&(st=Math.max(st,oe.start*Pe),ct=Math.min(ct,(oe.start+oe.count)*Pe)),we!==null?(st=Math.max(st,0),ct=Math.min(ct,we.count)):Re!=null&&(st=Math.max(st,0),ct=Math.min(ct,Re.count));const xt=ct-st;if(xt<0||xt===1/0)return;dt.setup(H,q,Se,W,we);let jt,et=ye;if(we!==null&&(jt=j.get(we),et=Ke,et.setIndex(jt)),H.isMesh)q.wireframe===!0?(De.setLineWidth(q.wireframeLinewidth*qe()),et.setMode(F.LINES)):et.setMode(F.TRIANGLES);else if(H.isLine){let Le=q.linewidth;Le===void 0&&(Le=1),De.setLineWidth(Le*qe()),H.isLineSegments?et.setMode(F.LINES):H.isLineLoop?et.setMode(F.LINE_LOOP):et.setMode(F.LINE_STRIP)}else H.isPoints?et.setMode(F.POINTS):H.isSprite&&et.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,It=H._multiDrawCounts,Ge=H._multiDrawCount,Bt=we?j.get(we).bytesPerElement:1,Ui=Ne.get(q).currentProgram.getUniforms();for(let Ft=0;Ft<Ge;Ft++)Ui.setValue(F,"_gl_DrawID",Ft),et.render(Le[Ft]/Bt,It[Ft])}else if(H.isInstancedMesh)et.renderInstances(st,xt,H.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,It=Math.min(W.instanceCount,Le);et.renderInstances(st,xt,It)}else et.render(st,xt)};function $e(w,O,W){w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,Be(w,O,W),w.side=Li,w.needsUpdate=!0,Be(w,O,W),w.side=wi):Be(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),m=Ye.get(W),m.init(O),M.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const oe=H.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Se=oe[pe];$e(Se,W,H),q.add(Se)}else $e(oe,W,H),q.add(oe)}),M.pop(),m=null,q},this.compileAsync=function(w,O,W=null){const q=this.compile(w,O,W);return new Promise(H=>{function oe(){if(q.forEach(function(pe){Ne.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){H(w);return}setTimeout(oe,10)}je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Kt=null;function Gn(w){Kt&&Kt(w)}function Vn(){Wn.stop()}function Ts(){Wn.start()}const Wn=new yd;Wn.setAnimationLoop(Gn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){Kt=w,$.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},$.addEventListener("sessionstart",Vn),$.addEventListener("sessionend",Ts),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,S),m=Ye.get(w,M.length),m.init(O),M.push(m),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ce.setFromProjectionMatrix(Z),Y=this.localClippingEnabled,z=se.init(this.clippingPlanes,Y),v=fe.get(w,p.length),v.init(),p.push(v),$.enabled===!0&&$.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Q(oe,O,-1/0,x.sortObjects)}Q(w,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ae),ze=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ze&&Ue.addToRenderList(v,w),this.info.render.frame++,z===!0&&se.beginShadows();const W=m.state.shadowsArray;he.render(W,w,O),z===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,H=v.transmissive;if(m.setupLights(),O.isArrayCamera){const oe=O.cameras;if(H.length>0)for(let pe=0,Se=oe.length;pe<Se;pe++){const we=oe[pe];ce(q,H,w,we)}ze&&Ue.render(w);for(let pe=0,Se=oe.length;pe<Se;pe++){const we=oe[pe];te(v,w,we,we.viewport)}}else H.length>0&&ce(q,H,w,O),ze&&Ue.render(w),te(v,w,O);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(x,w,O),dt.resetDefaultState(),A=-1,D=null,M.pop(),M.length>0?(m=M[M.length-1],z===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Q(w,O,W,q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ce.intersectsSprite(w)){q&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);const pe=J.update(w),Se=w.material;Se.visible&&v.push(w,pe,Se,W,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ce.intersectsObject(w))){const pe=J.update(w),Se=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Te.copy(pe.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(Se)){const we=pe.groups;for(let Pe=0,Ie=we.length;Pe<Ie;Pe++){const Re=we[Pe],st=Se[Re.materialIndex];st&&st.visible&&v.push(w,pe,st,W,Te.z,Re)}}else Se.visible&&v.push(w,pe,Se,W,Te.z,null)}}const oe=w.children;for(let pe=0,Se=oe.length;pe<Se;pe++)Q(oe[pe],O,W,q)}function te(w,O,W,q){const H=w.opaque,oe=w.transmissive,pe=w.transparent;m.setupLightsView(W),z===!0&&se.setGlobalState(x.clippingPlanes,W),q&&De.viewport(_.copy(q)),H.length>0&&le(H,O,W),oe.length>0&&le(oe,O,W),pe.length>0&&le(pe,O,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ce(w,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new wr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?no:Pi,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const oe=m.state.transmissionRenderTarget[q.id],pe=q.viewport||_;oe.setSize(pe.z,pe.w);const Se=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(I),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),ze&&Ue.render(W);const we=x.toneMapping;x.toneMapping=Zi;const Pe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),z===!0&&se.setGlobalState(x.clippingPlanes,q),le(w,W,q),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Re=0,st=O.length;Re<st;Re++){const ct=O[Re],xt=ct.object,jt=ct.geometry,et=ct.material,Le=ct.group;if(et.side===wi&&xt.layers.test(q.layers)){const It=et.side;et.side=wn,et.needsUpdate=!0,be(xt,W,q,jt,et,Le),et.side=It,et.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}x.setRenderTarget(Se),x.setClearColor(I,k),Pe!==void 0&&(q.viewport=Pe),x.toneMapping=we}function le(w,O,W){const q=O.isScene===!0?O.overrideMaterial:null;for(let H=0,oe=w.length;H<oe;H++){const pe=w[H],Se=pe.object,we=pe.geometry,Pe=q===null?pe.material:q,Ie=pe.group;Se.layers.test(W.layers)&&be(Se,O,W,we,Pe,Ie)}}function be(w,O,W,q,H,oe){w.onBeforeRender(x,O,W,q,H,oe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(x,O,W,q,w,oe),H.transparent===!0&&H.side===wi&&H.forceSinglePass===!1?(H.side=wn,H.needsUpdate=!0,x.renderBufferDirect(W,O,q,H,w,oe),H.side=Li,H.needsUpdate=!0,x.renderBufferDirect(W,O,q,H,w,oe),H.side=wi):x.renderBufferDirect(W,O,q,H,w,oe),w.onAfterRender(x,O,W,q,H,oe)}function Be(w,O,W){O.isScene!==!0&&(O=ke);const q=Ne.get(w),H=m.state.lights,oe=m.state.shadowsArray,pe=H.state.version,Se=Ae.getParameters(w,H.state,oe,O,W),we=Ae.getProgramCacheKey(Se);let Pe=q.programs;q.environment=w.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Je),Pe=new Map,q.programs=Pe);let Ie=Pe.get(we);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===pe)return Et(w,Se),Ie}else Se.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Se,x),Ie=Ae.acquireProgram(Se,we),Pe.set(we,Ie),q.uniforms=Se.uniforms;const Re=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=se.uniform),Et(w,Se),q.needsLights=fn(w),q.lightsStateVersion=pe,q.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function ot(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Et(w,O){const W=Ne.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function pt(w,O,W,q,H){O.isScene!==!0&&(O=ke),R.resetTextureUnits();const oe=O.fog,pe=q.isMeshStandardMaterial?O.environment:null,Se=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:er,we=(q.isMeshStandardMaterial?V:b).get(q.envMap||pe),Pe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,ct=!!W.morphAttributes.color;let xt=Zi;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(xt=x.toneMapping);const jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=jt!==void 0?jt.length:0,Le=Ne.get(q),It=m.state.lights;if(z===!0&&(Y===!0||w!==D)){const Xt=w===D&&q.id===A;se.setState(q,w,Xt)}let Ge=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==It.state.version||Le.outputColorSpace!==Se||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==we||q.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==Ie||Le.morphTargets!==Re||Le.morphNormals!==st||Le.morphColors!==ct||Le.toneMapping!==xt||Le.morphTargetsCount!==et)&&(Ge=!0):(Ge=!0,Le.__version=q.version);let Bt=Le.currentProgram;Ge===!0&&(Bt=Be(q,O,H));let Ui=!1,Ft=!1,bt=!1;const wt=Bt.getUniforms(),Zt=Le.uniforms;if(De.useProgram(Bt.program)&&(Ui=!0,Ft=!0,bt=!0),q.id!==A&&(A=q.id,Ft=!0),Ui||D!==w){Ze.reverseDepthBuffer?(K.copy(w.projectionMatrix),Dp(K),Up(K),wt.setValue(F,"projectionMatrix",K)):wt.setValue(F,"projectionMatrix",w.projectionMatrix),wt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Xt=wt.map.cameraPosition;Xt!==void 0&&Xt.setValue(F,ge.setFromMatrixPosition(w.matrixWorld)),Ze.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&wt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Ft=!0,bt=!0)}if(H.isSkinnedMesh){wt.setOptional(F,H,"bindMatrix"),wt.setOptional(F,H,"bindMatrixInverse");const Xt=H.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),wt.setValue(F,"boneTexture",Xt.boneTexture,R))}H.isBatchedMesh&&(wt.setOptional(F,H,"batchingTexture"),wt.setValue(F,"batchingTexture",H._matricesTexture,R),wt.setOptional(F,H,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",H._indirectTexture,R),wt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",H._colorsTexture,R));const Rr=W.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Fe.update(H,W,Bt),(Ft||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,wt.setValue(F,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Zt.envMap.value=we,Zt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Zt.envMapIntensity.value=O.environmentIntensity),Ft&&(wt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&rt(Zt,bt),oe&&q.fog===!0&&ue.refreshFogUniforms(Zt,oe),ue.refreshMaterialUniforms(Zt,q,X,N,m.state.transmissionRenderTarget[w.id]),ea.upload(F,ot(Le),Zt,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ea.upload(F,ot(Le),Zt,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&wt.setValue(F,"center",H.center),wt.setValue(F,"modelViewMatrix",H.modelViewMatrix),wt.setValue(F,"normalMatrix",H.normalMatrix),wt.setValue(F,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Xt=q.uniformsGroups;for(let Cr=0,As=Xt.length;Cr<As;Cr++){const Dn=Xt[Cr];B.update(Dn,Bt),B.bind(Dn,Bt)}}return Bt}function rt(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function fn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,O,W){Ne.get(w.texture).__webglTexture=O,Ne.get(w.depthTexture).__webglTexture=W;const q=Ne.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const W=Ne.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){S=w,C=O,T=W;let q=!0,H=null,oe=!1,pe=!1;if(w){const we=Ne.get(w);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(we.__hasExternalTextures)R.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&Ne.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ie=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?H=Ie[O][W]:H=Ie[O],oe=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?H=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[W]:H=Ie,_.copy(w.viewport),y.copy(w.scissor),P=w.scissorTest}else _.copy(re).multiplyScalar(X).floor(),y.copy(ie).multiplyScalar(X).floor(),P=Me;if(De.bindFramebuffer(F.FRAMEBUFFER,H)&&q&&De.drawBuffers(w,H),De.viewport(_),De.scissor(y),De.setScissorTest(P),oe){const we=Ne.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,W)}else if(pe){const we=Ne.get(w.texture),Pe=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Pe)}A=-1},this.readRenderTargetPixels=function(w,O,W,q,H,oe,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){De.bindFramebuffer(F.FRAMEBUFFER,Se);try{const we=w.texture,Pe=we.format,Ie=we.type;if(!Ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-q&&W>=0&&W<=w.height-H&&F.readPixels(O,W,q,H,Oe.convert(Pe),Oe.convert(Ie),oe)}finally{const we=S!==null?Ne.get(S).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,q,H,oe,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const we=w.texture,Pe=we.format,Ie=we.type;if(!Ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-q&&W>=0&&W<=w.height-H){De.bindFramebuffer(F.FRAMEBUFFER,Se);const Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(O,W,q,H,Oe.convert(Pe),Oe.convert(Ie),0);const st=S!==null?Ne.get(S).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,st);const ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ip(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(Re),F.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,W=0){w.isTexture!==!0&&(Qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-W),H=Math.floor(w.image.width*q),oe=Math.floor(w.image.height*q),pe=O!==null?O.x:0,Se=O!==null?O.y:0;R.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,pe,Se,H,oe),De.unbindTexture()},this.copyTextureToTexture=function(w,O,W=null,q=null,H=0){w.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],O=arguments[2],H=arguments[3]||0,W=null);let oe,pe,Se,we,Pe,Ie;W!==null?(oe=W.max.x-W.min.x,pe=W.max.y-W.min.y,Se=W.min.x,we=W.min.y):(oe=w.image.width,pe=w.image.height,Se=0,we=0),q!==null?(Pe=q.x,Ie=q.y):(Pe=0,Ie=0);const Re=Oe.convert(O.format),st=Oe.convert(O.type);R.setTexture2D(O,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const ct=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),jt=F.getParameter(F.UNPACK_SKIP_PIXELS),et=F.getParameter(F.UNPACK_SKIP_ROWS),Le=F.getParameter(F.UNPACK_SKIP_IMAGES),It=w.isCompressedTexture?w.mipmaps[H]:w.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,It.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,It.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Se),F.pixelStorei(F.UNPACK_SKIP_ROWS,we),w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,Pe,Ie,oe,pe,Re,st,It.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,Pe,Ie,It.width,It.height,Re,It.data):F.texSubImage2D(F.TEXTURE_2D,H,Pe,Ie,oe,pe,Re,st,It),F.pixelStorei(F.UNPACK_ROW_LENGTH,ct),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le),H===0&&O.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W=null,q=null,H=0){w.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,w=arguments[2],O=arguments[3],H=arguments[4]||0);let oe,pe,Se,we,Pe,Ie,Re,st,ct;const xt=w.isCompressedTexture?w.mipmaps[H]:w.image;W!==null?(oe=W.max.x-W.min.x,pe=W.max.y-W.min.y,Se=W.max.z-W.min.z,we=W.min.x,Pe=W.min.y,Ie=W.min.z):(oe=xt.width,pe=xt.height,Se=xt.depth,we=0,Pe=0,Ie=0),q!==null?(Re=q.x,st=q.y,ct=q.z):(Re=0,st=0,ct=0);const jt=Oe.convert(O.format),et=Oe.convert(O.type);let Le;if(O.isData3DTexture)R.setTexture3D(O,0),Le=F.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Le=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const It=F.getParameter(F.UNPACK_ROW_LENGTH),Ge=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Bt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ui=F.getParameter(F.UNPACK_SKIP_ROWS),Ft=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ie),w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Le,H,Re,st,ct,oe,pe,Se,jt,et,xt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,H,Re,st,ct,oe,pe,Se,jt,xt.data):F.texSubImage3D(Le,H,Re,st,ct,oe,pe,Se,jt,et,xt),F.pixelStorei(F.UNPACK_ROW_LENGTH,It),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ge),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft),H===0&&O.generateMipmaps&&F.generateMipmap(Le),De.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){C=0,T=0,S=null,De.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Q0?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===fa?"display-p3":"srgb"}}class ma extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fu=new L,Ou=new St,ku=new St,Wv=new L,Bu=new Ve,Fo=new L,sl=new Es,zu=new Ve,ol=new tc;class Xv extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fo),this.boundingBox.expandByPoint(Fo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Es),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fo),this.boundingSphere.expandByPoint(Fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(r),e.ray.intersectsSphere(sl)!==!1&&(zu.copy(r).invert(),ol.copy(e.ray).applyMatrix4(zu),!(this.boundingBox!==null&&ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Ou.fromBufferAttribute(r.attributes.skinIndex,e),ku.fromBufferAttribute(r.attributes.skinWeight,e),Fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ku.getComponent(s);if(o!==0){const a=Ou.getComponent(s);Bu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Wv.copy(Fu).applyMatrix4(Bu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rd extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qv extends ln{constructor(e=null,t=1,i=1,r,s,o,a,l,u=bn,c=bn,h,d){super(null,o,a,l,u,c,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=new Ve,Yv=new Ve;class lc{constructor(e=[],t=[]){this.uuid=Ar(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Yv;Hu.multiplyMatrices(a,t[s]),Hu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new qv(t,e,e,Bn,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Rd),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class cc extends ln{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends ei{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(f,2));function M(){const E=new L,C=new L;let T=0;const S=(t-e)/i;for(let A=0;A<=s;A++){const D=[],_=A/s,y=_*(t-e)+e;for(let P=0;P<=r;P++){const I=P/r,k=I*l+a,U=Math.sin(k),N=Math.cos(k);C.x=y*U,C.y=-_*i+m,C.z=y*N,h.push(C.x,C.y,C.z),E.set(U,S,N).normalize(),d.push(E.x,E.y,E.z),f.push(I,1-_),D.push(g++)}v.push(D)}for(let A=0;A<r;A++)for(let D=0;D<s;D++){const _=v[D][A],y=v[D+1][A],P=v[D+1][A+1],I=v[D][A+1];e>0&&(c.push(_,y,I),T+=3),t>0&&(c.push(y,P,I),T+=3)}u.addGroup(p,T,0),p+=T}function x(E){const C=g,T=new nt,S=new L;let A=0;const D=E===!0?e:t,_=E===!0?1:-1;for(let P=1;P<=r;P++)h.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const y=g;for(let P=0;P<=r;P++){const k=P/r*l+a,U=Math.cos(k),N=Math.sin(k);S.x=D*N,S.y=m*_,S.z=D*U,h.push(S.x,S.y,S.z),d.push(0,_,0),T.x=U*.5+.5,T.y=N*.5*_+.5,f.push(T.x,T.y),g++}for(let P=0;P<r;P++){const I=C+P,k=y+P;E===!0?c.push(k,k+1,I):c.push(k+1,k,I),A+=3}u.addGroup(p,A,E===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uc extends oo{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new uc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hc extends ei{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new L,E=new L,C=new L;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],E),f(t[T+2],C),l(x,E,C,M)}function l(M,x,E,C){const T=C+1,S=[];for(let A=0;A<=T;A++){S[A]=[];const D=M.clone().lerp(E,A/T),_=x.clone().lerp(E,A/T),y=T-A;for(let P=0;P<=y;P++)P===0&&A===T?S[A][P]=D:S[A][P]=D.clone().lerp(_,P/y)}for(let A=0;A<T;A++)for(let D=0;D<2*(T-A)-1;D++){const _=Math.floor(D/2);D%2===0?(d(S[A][_+1]),d(S[A+1][_]),d(S[A][_])):(d(S[A][_+1]),d(S[A+1][_+1]),d(S[A+1][_]))}}function u(M){const x=new L;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(M),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function c(){const M=new L;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const E=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(E,1-C)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const x=o[M+0],E=o[M+2],C=o[M+4],T=Math.max(x,E,C),S=Math.min(x,E,C);T>.9&&S<.1&&(x<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,x){const E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){const M=new L,x=new L,E=new L,C=new L,T=new nt,S=new nt,A=new nt;for(let D=0,_=0;D<s.length;D+=9,_+=6){M.set(s[D+0],s[D+1],s[D+2]),x.set(s[D+3],s[D+4],s[D+5]),E.set(s[D+6],s[D+7],s[D+8]),T.set(o[_+0],o[_+1]),S.set(o[_+2],o[_+3]),A.set(o[_+4],o[_+5]),C.copy(M).add(x).add(E).divideScalar(3);const y=m(C);v(T,_+0,M,y),v(S,_+2,x,y),v(A,_+4,E,y)}}function v(M,x,E,C){C<0&&M.x===1&&(o[x]=M.x-1),E.x===0&&E.z===0&&(o[x]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.vertices,e.indices,e.radius,e.details)}}class dc extends hc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dc(e.radius,e.detail)}}class fc extends ei{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const M=[],x=p/i;let E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const T=C/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(T+E,1-x),M.push(u++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const x=c[p][M+1],E=c[p][M],C=c[p+1][M],T=c[p+1][M+1];(p!==0||o>0)&&f.push(x,E,T),(p!==i-1||l<Math.PI)&&f.push(E,C,T)}this.setIndex(f),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Di extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pc extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mc extends pc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const al=new Ve,Gu=new L,Vu=new L;class $v{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kv extends $v{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends pc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Kv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _c extends pc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wu=new Ve;class Cd{constructor(e,t,i=0,r=1/0){this.ray=new tc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,i=[]){return R0(e,this,i,t),i.sort(Xu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)R0(e[r],this,i,t);return i.sort(Xu),i}}function Xu(n,e){return n.distance-e.distance}function R0(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)R0(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:X0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=X0);const ui={ceiling:15525851,wall:13814974,wallUpper:14210248,trim:16249834,floorTimber:9072722,benchtop:12168342},ll=new Map,jv=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function Zv(n,e={}){let t=String(n);for(const r of jv)e[r]!==void 0&&(t+="|"+r+"="+JSON.stringify(e[r]));if(ll.has(t))return ll.get(t);const i=new Di({color:n,roughness:e.roughness??.85,metalness:e.metalness??0,flatShading:e.flat??!1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Li,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,vertexColors:e.vertexColors??!1});return ll.set(t,i),i}const ga={box:new an(1,1,1),plane:new so(1,1),cyl:new oo(.5,.5,1,10),cone:new uc(.5,1,8),sphere:new fc(.5,12,10)};function tr(n,e,t,i,r={}){const s=new vt(ga.box,r.material||Zv(i,r));return s.scale.set(n,e,t),s.castShadow=r.castShadow??!0,s.receiveShadow=r.receiveShadow??!0,s}const Jv=new Set;function Qv(n){Jv.add(n)}let Ld=8,C0=null;function ex(n){C0=n,Ld=Math.min(8,n.capabilities.getMaxAnisotropy())}let tx=n=>{const e=document.createElement("canvas");return e.width=e.height=n,e};const Pd=(n,e=n)=>{const t=tx(n);return t.width=n,t.height=e,t};let Id=0;function vc(n,e){return e&&(n.colorSpace=Ln),n.wrapS=n.wrapT=ia,n.anisotropy=Ld,n.generateMipmaps=!0,n.minFilter=Yi,n.magFilter=kn,Id+=n.image.width*n.image.height*4*4/3,C0&&C0.initTexture(n),n}function hn(n){return vc(new cc(nx(n)),!0)}function L0(n){return n.wrapS=n.wrapT=qi,n}function nx(n){const e=Pd(n.w,n.h),t=e.getContext("2d"),i=t.createImageData(n.w,n.h),r=i.data,s=n.d,o=n.w*n.h;for(let a=0,l=0,u=0;a<o;a++,l+=3,u+=4){const c=s[l],h=s[l+1],d=s[l+2];r[u]=(c<0?0:c>1?1:c)*255+.5,r[u+1]=(h<0?0:h>1?1:h)*255+.5,r[u+2]=(d<0?0:d>1?1:d)*255+.5,r[u+3]=255}return t.putImageData(i,0,0),e}const yt=n=>n<0?0:n>1?1:n,hi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function ix(n){const[e,t,i]=n,r=Math.max(e,t,i),s=Math.min(e,t,i),o=(r+s)/2;if(r===s)return[0,0,o];const a=r-s,l=o>.5?a/(2-r-s):a/(r+s);let u;return r===e?u=((t-i)/a+(t<i?6:0))/6:r===t?u=((i-e)/a+2)/6:u=((e-t)/a+4)/6,[u,l,o]}function rx(n,e,t){if(e===0)return[t,t,t];const i=t<.5?t*(1+e):t+e-t*e,r=2*t-i,s=o=>(o=(o%1+1)%1,o<1/6?r+(i-r)*6*o:o<1/2?i:o<2/3?r+(i-r)*(2/3-o)*6:r);return[s(n+1/3),s(n),s(n-1/3)]}function li(n,e=1,t=0,i=1){const[r,s,o]=ix(Array.isArray(n)?n:hi(n));return rx(r+t/360,yt(s*i),yt(o*e))}function dn(n,e){return{w:n,h:e,d:new Float32Array(n*e*3)}}function pi(n,e){const t=Array.isArray(e)?e:hi(e),i=n.d;for(let r=0;r<i.length;r+=3)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2]}function xc(n,e,t,i,r){if(r<=0)return;const s=n.w,o=n.h;let a=e,l=t;(a<0||a>=s)&&(a=(a%s+s)%s),(l<0||l>=o)&&(l=(l%o+o)%o);const u=(l*s+a)*3,c=n.d,h=1-r;c[u]=c[u]*h+i[0]*r,c[u+1]=c[u+1]*h+i[1]*r,c[u+2]=c[u+2]*h+i[2]*r}function Fn(n,e,t,i,r,s,o=1){const a=Array.isArray(s)?s:hi(s),l=Math.round(e),u=Math.round(i),c=Math.round(t),h=Math.round(r);if(o<1){for(let v=c;v<h;v++)for(let m=l;m<u;m++)xc(n,m,v,a,o);return}const d=n.w,f=n.h,g=n.d;for(let v=c;v<h;v++){let m=v;(m<0||m>=f)&&(m=(m%f+f)%f);const p=m*d;for(let M=l;M<u;M++){let x=M;(x<0||x>=d)&&(x=(x%d+d)%d);const E=(p+x)*3;g[E]=a[0],g[E+1]=a[1],g[E+2]=a[2]}}}function ao(n,e,t,i,r,s=1){const o=i+1;for(let a=Math.floor(t-o);a<=Math.ceil(t+o);a++)for(let l=Math.floor(e-o);l<=Math.ceil(e+o);l++){const u=l+.5-e,c=a+.5-t,h=yt(i-Math.sqrt(u*u+c*c)+.5);h>0&&xc(n,l,a,r,s*h)}}function P0(n,e,t,i,r=1){const s=Math.max(1,t)/2;for(let o=1;o<e.length;o++){const[a,l]=e[o-1],[u,c]=e[o],h=Math.hypot(u-a,c-l),d=Math.max(1,Math.ceil(h));for(let f=0;f<=d;f++){const g=f/d;ao(n,a+(u-a)*g,l+(c-l)*g,s,i,r)}}}function Dd(n,e,t,i,r,s,o,a){const l=n.w,u=n.h,c=n.d,h=s/2,d=o[0],f=o[1],g=o[2],v=Math.PI*2/i;for(let m=0;m<u;m++){const p=m*l,M=e+t*Math.sin(m*v+r),x=M-h,E=M+h,C=Math.floor(x),T=Math.ceil(E);for(let S=C;S<=T;S++){const A=yt(Math.min(S+1,E)-Math.max(S,x));if(A<=0)continue;const D=a*A,_=1-D;let y=S;(y<0||y>=l)&&(y=(y%l+l)%l);const P=(p+y)*3;c[P]=c[P]*_+d*D,c[P+1]=c[P+1]*_+f*D,c[P+2]=c[P+2]*_+g*D}}}const qu=n=>n*n*(3-2*n);function sx(n,e,t){const i=new Float32Array(e*t);for(let r=0;r<i.length;r++)i[r]=n.float();return i}const Yu=256;function Sn(n,e,t={}){const{p0:i=32,octaves:r=4,gain:s=.5,lacunarity:o=2,h:a=e}=t,l=t.p0x??i,u=t.p0y??i,c=new Float32Array(e*a),h=[];let d=1,f=0;for(let C=0;C<r;C++){const T=Math.min(Yu,Math.max(1,Math.round(l*o**C))),S=Math.min(Yu,Math.max(1,Math.round(u*o**C)));h.push({lat:sx(n,T,S),px:T,py:S,amp:d}),f+=d,d*=s}const g=new Float64Array(e*a),v=new Int32Array(e),m=new Int32Array(e),p=new Float64Array(e);for(let C=0;C<h.length;C++){const T=h[C],S=T.lat,A=T.px,D=T.py,_=T.amp,y=A/e,P=D/a;for(let I=0;I<e;I++){const k=I*y,U=k|0,N=U>=A?U%A:U;v[I]=N,m[I]=N+1>=A?0:N+1,p[I]=qu(k-U)}for(let I=0;I<a;I++){const k=I*P,U=k|0,N=qu(k-U),X=1-N,G=U>=D?U%D:U,ae=G*A,re=(G+1>=D?0:G+1)*A,ie=I*e;for(let Me=0;Me<e;Me++){const Ce=v[Me],z=m[Me],Y=p[Me],K=S[ae+Ce],Z=S[ae+z],ge=S[re+Ce],Te=S[re+z];g[ie+Me]+=_*((K+(Z-K)*Y)*X+(ge+(Te-ge)*Y)*N)}}}let M=1/0,x=-1/0;for(let C=0;C<c.length;C++){c[C]=g[C]/f;const T=c[C];T<M&&(M=T),T>x&&(x=T)}const E=x-M||1;for(let C=0;C<c.length;C++)c[C]=(c[C]-M)/E;return c}function nr(n,e,t,i){const r=new Float32Array(e*t),s=new Float32Array(e*t),o=2*i+1,a=new Int32Array(e),l=new Int32Array(e);for(let h=0;h<e;h++)a[h]=((h-i)%e+e)%e,l[h]=(h+i+1)%e;for(let h=0;h<t;h++){const d=h*e;let f=0;for(let g=-i;g<=i;g++)f+=n[d+(g%e+e)%e];for(let g=0;g<e;g++)r[d+g]=f/o,f-=n[d+a[g]],f+=n[d+l[g]]}const u=new Int32Array(t),c=new Int32Array(t);for(let h=0;h<t;h++)u[h]=((h-i)%t+t)%t*e,c[h]=(h+i+1)%t*e;for(let h=0;h<e;h++){let d=0;for(let f=-i;f<=i;f++)d+=r[(f%t+t)%t*e+h];for(let f=0;f<t;f++)s[f*e+h]=d/o,d-=r[u[f]+h],d+=r[c[f]+h]}return s}function ox(n,e,t=1.5,i=null){const r=i??n.length/e,s=new Uint8Array(e*r*4),o=t/8,a=new Int32Array(e),l=new Int32Array(e);for(let u=0;u<e;u++)a[u]=(u-1+e)%e,l[u]=(u+1)%e;for(let u=0;u<r;u++){const c=(u-1+r)%r*e,h=u*e,d=(u+1)%r*e;let f=h*4;for(let g=0;g<e;g++,f+=4){const v=a[g],m=l[g],p=n[c+v],M=n[c+g],x=n[c+m],E=n[h+v],C=n[h+m],T=n[d+v],S=n[d+g],A=n[d+m],D=x+2*C+A-(p+2*E+T),_=T+2*S+A-(p+2*M+x),y=-D*o,P=_*o,I=1/Math.sqrt(y*y+P*P+1);s[f]=(y*I*.5+.5)*255+.5,s[f+1]=(P*I*.5+.5)*255+.5,s[f+2]=(I*.5+.5)*255+.5,s[f+3]=255}}return s}function ti(n,e,t=1.5,i=null){const r=i??n.length/e;return vc(new cc(Ud(ox(n,e,t,r),e,r)),!1)}function Ud(n,e,t){const i=Pd(e,t),r=i.getContext("2d"),s=r.createImageData(e,t);return s.data.set(n),r.putImageData(s,0,0),i}function ax(n,e,t,i,r=null){const o=n*(r??n),a=new Uint8Array(o*4);for(let l=0,u=0;l<o;l++,u+=4){const c=e?e[l]:1,h=t?t[l]:.85,d=i?i[l]:0;a[u]=(c<0?0:c>1?1:c)*255+.5,a[u+1]=(h<0?0:h>1?1:h)*255+.5,a[u+2]=(d<0?0:d>1?1:d)*255+.5,a[u+3]=255}return a}function $t(n,e,t,i,r=null){const s=r??n;return vc(new cc(Ud(ax(n,e,t,i,s),n,s)),!1)}const Nd={},$u=new Map;function Nt(n,e){Nd[n]=e}function lx(){var n,e;for(const t of $u.values()){for(const i of["map","normalMap","ormMap"])(e=(n=t[i])==null?void 0:n.dispose)==null||e.call(n);if(t.maps)for(const i of t.maps)i.dispose()}$u.clear(),Id=0}Qv(lx);const cl={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Nt("timberFloor",(n,e={})=>{const o=1.9500000000000002,a=1024/o,l=1024/15,u=Math.max(2,Math.round(.004*a)),c=e.species||n.pick(Object.keys(cl)),h=cl[c]||cl.blackbutt,d=dn(1024,1024);pi(d,li(h.dark,.72));const f=hi(h.dark),g=li(h.base,1.25),v=[];for(let T=0;T<15;T++){const S=T*l+u/2,A=(T+1)*l-u/2,D=li(h.base,1+n.range(-.06,.06),n.range(-3,3));Fn(d,S,0,A,1024,D);const _=Math.round(n.range(.15,.85)*1024);v.push(_),Fn(d,S,_,A,_+2,li(h.dark,.8),.85),Fn(d,S,_-2,A,_,g,.25);const y=n.int(28,60);for(let P=0;P<y;P++){const I=n.range(S+1,A-1),k=n.range(1.5,4),U=1024/n.int(2,5),N=n.range(0,Math.PI*2),X=n.range(2,3),G=n.range(.04,.12),ae=n.chance(.25)?g:f;Dd(d,I,k,U,N,X,ae,G)}if(n.chance(.2)){const P=n.range(204.8,819.2),I=n.range(60,160),k=n.range(S+4,A-4);for(let U=0;U<n.int(2,4);U++){const N=(U+1)*n.range(3,7),X=[];for(let G=0;G<=16;G++){const ae=G/16;X.push([k+(ae-.5)*2*N,P-I*(1-(ae-.5)**2*4)])}P0(d,X,2,f,.06)}}}const m=Sn(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),M=new Float32Array(512*512),x=new Float32Array(512*512),E=512/15,C=u*512/1024;for(let T=0;T<512;T++)for(let S=0;S<512;S++){const A=T*512+S,D=Math.floor(S/E),_=S-D*E,y=_<C/2||_>E-C/2,P=T*1024/512,I=v[D],k=P>=I-1&&P<=I+2,U=y||k;M[A]=U?.15:.75,p[A]=yt(h.rough+(U?.1:0)+(m[A]-.5)*.1),x[A]=U?.72:1}return{map:hn(d),normalMap:ti(nr(M,512,512,1),512,1.2),ormMap:$t(512,x,p,null),uvScale:[o,o],normalScale:.5,species:c,tinted:!1}});Nt("plasterWall",(n,e={})=>{const r=e.rough??.88,s=Sn(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u;let h=r+(s[c]**1.5-.5)*.1;e.ceiling||(h+=Math.cos(u/a*Math.PI*2)*.02),o[c]=yt(h)}return{ormMap:$t(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});Nt("plasterCeiling",n=>Nd.plasterWall(n,{rough:.93,ceiling:!0}));Nt("paintedJoinery",n=>{const i=Sn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<256;s++)for(let o=0;o<256;o++){const a=s*256+o;r[a]=yt(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:$t(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Nt("carpetPile",n=>{const i=dn(512,512);pi(i,[1,1,1]);const r=Sn(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),s=i.d;for(let l=0;l<512;l++)for(let u=0;u<512;u++){const c=l*512+u,h=Math.cos(l/256*Math.PI*2)*.03,d=yt(.9+(r[c]-.5)*.16+h);s[c*3]=d,s[c*3+1]=d,s[c*3+2]=d}for(let l=0;l<1200;l++){const u=n.pick([[1.1,0],[.78,8],[.92,-10]]),c=li(16777215,u[0],u[1],1);if(u[1]!==0){const h=n.range(0,1);c[0]=c[0]*(.94+h*.12),c[2]=c[2]*(1.06-h*.12)}ao(i,n.range(0,512),n.range(0,512),n.range(1,2),c,.25)}const o=Sn(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=yt(.92+(o[l]-.5)*.06);return{map:hn(i),normalMap:ti(o,512,.6),ormMap:$t(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Nt("ceramicTile",(n,e={})=>{const i=e.tile??.3,r=2,s=i*r,o=Math.max(2,Math.round(.003*512/s)),a=3,l=512/r,u=hi(12104358),c=[];for(let m=0;m<r*r;m++)c.push({c:li(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const h=dn(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),g=new Float32Array(512*512),v=o/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const M=m*512+p,x=Math.floor(p/l),E=Math.floor(m/l),C=p-x*l,T=m-E*l,S=Math.min(C,l-C,T,l-T);if(S<v){h.d[M*3]=u[0],h.d[M*3+1]=u[1],h.d[M*3+2]=u[2],d[M]=.85,f[M]=.25,g[M]=.62;continue}const A=c[E*r+x],D=(C/l+T/l)/2,_=1.03-.06*(A.g>0?D:1-D);h.d[M*3]=yt(A.c[0]*_),h.d[M*3+1]=yt(A.c[1]*_),h.d[M*3+2]=yt(A.c[2]*_),d[M]=.08;const y=yt((S-v)/a);f[M]=.25+.75*y,g[M]=.62+.38*y}return{map:hn(h),normalMap:ti(f,512,2),ormMap:$t(512,g,d,null),uvScale:[s,s],normalScale:.8,tinted:!1}});Nt("fabricWeave",n=>{const i=dn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=128,a=new Float32Array(o*8),l=new Float32Array(o*8);for(let c=0;c<a.length;c++)a[c]=n.range(-.035,.035);for(let c=0;c<l.length;c++)l[c]=n.range(-.035,.035);const u=Sn(n,256,{p0:64,octaves:2});for(let c=0;c<256;c++)for(let h=0;h<256;h++){const d=c*256+h,f=(h>>1&1^c>>1&1)===0,g=h>>1,v=c>>1,m=f?a[(g*8+(c>>5&7))%a.length]:l[(v*8+(h>>5&7))%l.length],p=yt((f?1.06:.94)+m+(u[d]-.5)*.06);i.d[d*3]=p,i.d[d*3+1]=p,i.d[d*3+2]=p,r[d]=f?.66:.8,s[d]=f?1:.3}return{map:hn(i),normalMap:ti(nr(s,256,256,1),256,.8),ormMap:$t(256,null,r,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Nt("joineryTimber",n=>{const i=dn(512,512);pi(i,[1,1,1]);const r=Sn(n,512,{p0x:48,p0y:8,octaves:4}),s=i.d;for(let l=0;l<512*512;l++){const u=yt(.94+(r[l]-.5)*.22);s[l*3]=u,s[l*3+1]=u,s[l*3+2]=u}const o=li(16777215,.72);for(let l=0;l<220;l++){const u=n.range(0,512),c=n.range(2,6),h=512/n.int(1,2),d=n.range(0,Math.PI*2);Dd(i,u,c,h,d,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=yt(.55+(r[l]-.5)*.08);return{map:hn(i),ormMap:$t(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});Nt("vinylSheet",n=>{const i=dn(512,512);pi(i,14209732);const r=[13222578,15131093,11906460,14472902].map(hi);for(let l=0;l<3e3;l++)ao(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(r),.35);const s=Sn(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=yt(.28+(s[l]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let l=0;l<12;l++){const u=n.range(0,512),c=n.range(0,512),h=n.range(40,120),d=n.range(0,Math.PI*2),f=n.range(.6,2.2),g=[];for(let v=0;v<=24;v++){const m=d+f*(v/24);g.push([u+Math.cos(m)*h,c+Math.sin(m)*h])}P0(i,g,n.range(2,4),li(14209732,.88),.3),P0(a,g,n.range(2,4),[1,1,1],1)}for(let l=0;l<o.length;l++)o[l]=yt(o[l]+a.d[l*3]*.15);return{map:hn(i),ormMap:$t(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});Nt("laminateBench",n=>{const r=dn(512,512);pi(r,ui.benchtop);const s=[9274743,14077886,7235417].map(hi);for(let u=0;u<2e3;u++)ao(r,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(s),.3);const o=new Float32Array(512*512);for(let u=0;u<o.length;u++)o[u]=.28;const a=Math.max(2,Math.round(.006*512/.6)),l=li(ui.benchtop,.82);for(let u=0;u<512;u++)if(Math.min(u,512-u)<a)for(let h=0;h<512;h++)xc(r,h,u,l,.85),o[u*512+h]=.45;return{map:hn(r),ormMap:$t(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Nt("ceilingGrid",n=>{const r=dn(512,512);pi(r,15526370);const s=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=hi(14210509),l=hi(12434098),u=Sn(n,512,{p0:64,octaves:2}),c=new Float32Array(512*512);for(let h=0;h<512;h++)for(let d=0;d<512;d++){const f=h*512+d,g=Math.min(d,512-d),v=Math.min(h,512-h);if(g<s/2||v<o/2){const M=g>=s/2-2&&g<s/2||v>=o/2-2&&v<o/2?l:a;r.d[f*3]=M[0],r.d[f*3+1]=M[1],r.d[f*3+2]=M[2],c[f]=.55}else{const p=1+(u[f]-.5)*.04;r.d[f*3]*=p,r.d[f*3+1]*=p,r.d[f*3+2]*=p,c[f]=.9}}return{map:hn(r),ormMap:$t(512,null,c,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Nt("applianceEnamel",n=>{const i=Sn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<r.length;s++)r[s]=yt(.3+(i[s]-.5)*.04);return{ormMap:$t(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Nt("metalBrushed",n=>{const i=new Float32Array(65536),r=new Float32Array(256*256),s=Sn(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let l=0;l<256;l++){const u=o*256+l;i[u]=yt(.35+a*.6+(s[u]-.5)*.1)}}return{ormMap:$t(256,null,i,r),uvScale:[.4,.4],normalScale:0,tinted:!0}});Nt("quiltFolds",n=>{const i=[],r=n.int(5,9);for(let d=0;d<r;d++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const s=d=>{let f=0;for(const g of i)f+=g.a*Math.exp(-(((d-g.c)/g.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let o=1/0,a=-1/0;for(let d=0;d<=256;d++){const f=s(d/256);f<o&&(o=f),f>a&&(a=f)}const l=a-o||1,u=d=>(s(yt(d))-o)/l,c=dn(512,256),h=new Float32Array(512*256);for(let d=0;d<512;d++){const f=u(d/511),g=.9+.1*f;for(let v=0;v<256;v++){const m=v*512+d;c.d[m*3]=g,c.d[m*3+1]=g,c.d[m*3+2]=g,h[m]=f}}return{map:L0(hn(c)),normalMap:L0(ti(h,512,3,256)),uvScale:null,normalScale:1,field:u,folds:i,tinted:!0}});Nt("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],r=[];for(let s=0;s<5;s++){const o=i[s].map(hi),a=dn(256,256);pi(a,o[n.int(0,3)]);const l=n.int(0,2);if(l===0){let c=0;for(;c<256;){const h=n.int(12,48);Fn(a,0,c,256,Math.min(256,c+h),o[n.int(0,3)],n.range(.5,1)),c+=h}}else if(l===1)for(let c=0;c<n.int(5,11);c++){const h=n.range(0,179.2),d=n.range(0,256*.7);Fn(a,h,d,h+n.range(30,110),d+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const c=n.range(115.2,174.08);Fn(a,0,0,256,c,o[0],1),Fn(a,0,c,256,256,o[2],1);for(let h=0;h<n.int(3,7);h++){const d=n.range(c-40,c+40);Fn(a,0,d,256,d+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}ao(a,n.range(256*.2,256*.8),n.range(20,c-20),n.range(12,26),o[3],.9)}const u=li(16777215,.97);Fn(a,0,0,256,6,u),Fn(a,0,250,256,256,u),Fn(a,0,0,6,256,u),Fn(a,250,0,256,256,u),r.push(L0(hn(a)))}return{maps:r,map:r[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});Nt("garmentKnit",n=>{const i=dn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=16,a=12,l=Sn(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let c=0;c<256;c++){const h=u*256+c,d=c%o/o*2-1,f=Math.cos(d*Math.PI*.5),g=(c/o|0)%2?a/2:0,v=(u+g)%a/a,m=1-Math.abs(v*2-1)*.45,p=yt(f*.75+m*.25+(l[h]-.5)*.1),M=yt(.8+p*.28);i.d[h*3]=M,i.d[h*3+1]=M,i.d[h*3+2]=M,r[h]=.94-p*.1,s[h]=p}return{map:hn(i),normalMap:ti(nr(s,256,256,1),256,1.2),ormMap:$t(256,null,r,null),uvScale:[.16,.16],normalScale:1.1,tinted:!0}});Nt("garmentDenim",n=>{const i=dn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=Sn(n,256,{p0:96,octaves:3}),a=new Float32Array(256);for(let l=0;l<256;l++)a[l]=n.range(-.05,.05);for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u,h=(u+l)%3!==0,d=(u>>1&1)===0,g=yt((h?d?1.02:.9:.72)+a[(u+l*3)%256]+(o[c]-.5)*.07);i.d[c*3]=g,i.d[c*3+1]=g,i.d[c*3+2]=g,r[c]=h?.78:.88,s[c]=h?1:.25}return{map:hn(i),normalMap:ti(nr(s,256,256,1),256,.9),ormMap:$t(256,null,r,null),uvScale:[.12,.12],normalScale:.85,tinted:!0}});Nt("garmentCotton",n=>{const i=dn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=Sn(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++)for(let l=0;l<256;l++){const u=a*256+l,c=(l&1^a&1)===0,h=yt((c?1.02:.97)+(o[u]-.5)*.09);i.d[u*3]=h,i.d[u*3+1]=h,i.d[u*3+2]=h,r[u]=.88-(c?.03:0),s[u]=c?.7:.4}return{map:hn(i),normalMap:ti(nr(s,256,256,1),256,.45),ormMap:$t(256,null,r,null),uvScale:[.09,.09],normalScale:.4,tinted:!0}});Nt("garmentButtons",n=>{const i=dn(64,256);pi(i,[.97,.97,.97]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),o=64/2,a=5,l=64*.2;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const h=u*64+c,d=Math.abs(c-o);d<64*.3&&(s[h]=.8),d>64*.3&&d<64*.36&&(s[h]=.2)}for(let u=0;u<a;u++){const c=256*((u+.7)/(a+.4));for(let h=Math.floor(c-l-2);h<=Math.ceil(c+l+2);h++)if(!(h<0||h>=256))for(let d=0;d<64;d++){const f=Math.hypot(d-o,h-c);if(f>l)continue;const g=h*64+d,v=Math.sqrt(Math.max(0,1-(f/l)**2));s[g]=.8+v*.2;const m=.86+v*.16;i.d[g*3]=m,i.d[g*3+1]=m,i.d[g*3+2]=m,r[g]=.42,Math.abs(h-c)<l*.16&&Math.abs(Math.abs(d-o)-l*.3)<l*.14&&(s[g]=.6,i.d[g*3]=.62,i.d[g*3+1]=.62,i.d[g*3+2]=.62)}}return{map:hn(i),normalMap:ti(nr(s,64,256,1),64,1.4,256),ormMap:$t(64,null,r,null,256),uvScale:[1,1],normalScale:1,tinted:!0,noTile:!0}});Nt("garmentZip",n=>{const i=dn(64,256);pi(i,[.95,.95,.95]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),o=64/2,a=7;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const h=u*64+c,d=c-o,f=Math.abs(d);if(f<64*.34&&(s[h]=.62,r[h]=.82),f<64*.17){const g=d<0?0:a/2,m=(u+g)%a/a<.55;s[h]=m?1:.5;const p=m?1.06:.74;i.d[h*3]=p,i.d[h*3+1]=p,i.d[h*3+2]=p,r[h]=m?.3:.55}}const l=256*.14;for(let u=Math.floor(l);u<l+256*.055;u++)for(let c=Math.floor(o-64*.11);c<o+64*.11;c++){const h=u*64+c;h<0||h>=64*256||(s[h]=1,r[h]=.28,i.d[h*3]=1.1,i.d[h*3+1]=1.1,i.d[h*3+2]=1.1)}return{map:hn(i),normalMap:ti(nr(s,64,256,1),64,1.6,256),ormMap:$t(64,null,r,null,256),uvScale:[1,1],normalScale:1.2,tinted:!0,noTile:!0}});Nt("garmentPlate",n=>{const i=dn(256,256);pi(i,[1,1,1]);const r=new Float32Array(256*256).fill(.42),s=new Float32Array(256*256).fill(.72),o=Sn(n,256,{p0:64,octaves:3}),a=128;for(let u=0;u<256;u++)for(let c=0;c<256;c++){const h=u*256+c,d=Math.min(c%a,a-1-c%a),f=Math.min(u%a,a-1-u%a),g=Math.min(d,f);let v=.72,m=1,p=.42;if(g<2)v=.22,m=.93,p=.58;else if(g<5){const M=(g-2)/3;v=.22+M*.5,m=.93+M*.08,p=.58-M*.16}m+=(o[h]-.5)*.05,i.d[h*3]=m,i.d[h*3+1]=m,i.d[h*3+2]=m,r[h]=p,s[h]=v}const l=2;for(let u=0;u<256;u+=a)for(let c=0;c<256;c+=a)for(const[h,d]of[[7,7],[a-7,7],[7,a-7],[a-7,a-7]])for(let f=-l-1;f<=l+1;f++)for(let g=-l-1;g<=l+1;g++){const v=(c+h+g+256)%256,m=(u+d+f+256)%256,p=Math.hypot(g,f);if(p>l)continue;const M=m*256+v,x=Math.sqrt(Math.max(0,1-(p/l)**2));s[M]=.82+x*.18;const E=1.02+x*.1;i.d[M*3]=E,i.d[M*3+1]=E,i.d[M*3+2]=E,r[M]=.3}return{map:hn(i),normalMap:ti(nr(s,256,256,1),256,1.5),ormMap:$t(256,null,r,null),uvScale:[.34,.34],normalScale:1.45,tinted:!0}});class cx{constructor(){this._handlers=new Map,this._log=[]}on(e,t){return this._handlers.has(e)||this._handlers.set(e,new Set),this._handlers.get(e).add(t),()=>this.off(e,t)}once(e,t){const i=this.on(e,r=>{i(),t(r)});return i}off(e,t){var i;(i=this._handlers.get(e))==null||i.delete(t)}emit(e,t={}){this._log.push({type:e,payload:t,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(e);if(i)for(const a of[...i])a(t,e);const r=e.split(":")[0]+":*",s=this._handlers.get(r);if(s)for(const a of[...s])a(t,e);const o=this._handlers.get("*");if(o)for(const a of[...o])a(t,e)}recent(e=40){return this._log.slice(-e)}}const ux={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],rotate:["KeyR"],furnishDone:["KeyF"],furnishSell:["KeyX"],cancel:["Escape"]},hx=2e3;class dx{constructor(e,t){this.bus=e,this.dom=t,this.bindings={...ux},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",e=>{if(e.repeat)return;Object.values(this.bindings).some(i=>i.includes(e.code))&&e.code!=="Escape"&&e.preventDefault(),this.down.add(e.code),this.pressed.add(e.code),this.bus.emit("input:key",{code:e.code});for(const[i,r]of Object.entries(this.bindings))r.includes(e.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",e=>this._failLock(e)),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),window.addEventListener("wheel",e=>{this.bus.emit("input:wheel",{delta:Math.sign(e.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(e){const t=this.lockPending;this._settleLock(),t&&(this.locked=!1,console.warn("[input] pointer lock request refused",e||""),this.bus.emit("input:pointerlockfailed",{error:e||null}))}requestLock(){var t,i;if(this.locked||this.lockPending||!((t=this.dom)!=null&&t.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},hx);let e;try{e=this.dom.requestPointerLock()}catch(r){this._failLock(r);return}(i=e==null?void 0:e.catch)==null||i.call(e,r=>this._failLock(r))}requestLockFresh(){this.locked||(this._settleLock(),this.requestLock())}releaseLock(){var e;this._settleLock(),this.locked=!1,(e=document.exitPointerLock)==null||e.call(document)}isDown(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.pressed.has(t)):!1}axis(){let e=0,t=0;this.isDown("forward")&&(t+=1),this.isDown("back")&&(t-=1),this.isDown("right")&&(e+=1),this.isDown("left")&&(e-=1);const i=Math.hypot(e,t);return i>1?{x:e/i,y:t/i}:{x:e,y:t}}consumeMouse(){const e={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}endFrame(){this.pressed.clear()}}const I0=n=>Number.isFinite(n)&&n>0?n:0;function Mc(n={}){const e=n.max??100,t=n.shield??0;return{max:e,hp:Math.min(n.hp??e,e),shield:t,shieldMax:n.shieldMax??t,thresholds:[...n.thresholds??[]].sort((i,r)=>r-i),dead:(n.hp??e)<=0}}function fx(n,e,t){const i=[];for(const r of n.thresholds){const s=n.max*r;e>s&&t<=s&&i.push({at:r,hp:s})}return i}function Fd(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=I0(e.amount),r=e.crit?i*(e.critMul??2):i,s=e.kind??null,o=e.source??null;let{hp:a,shield:l}=n,u=r;if(l>0&&!e.ignoreShield&&u>0){const d=Math.min(l,u);l-=d,u-=d,t.push({type:"absorbed",amount:d,shield:l,kind:s,source:o}),l===0&&t.push({type:"shieldBroken",overflow:u,kind:s,source:o})}const c=a;a=Math.max(0,a-u),(u>0||r===0)&&t.push({type:"damaged",amount:u,hp:a,was:c,kind:s,source:o});for(const d of fx(n,c,a))t.push({type:"threshold",at:d.at,hp:d.hp,kind:s,source:o});const h=a<=0;return h&&t.push({type:"died",kind:s,source:o}),{state:{...n,hp:a,shield:l,dead:h},events:t}}function D0(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Math.min(n.max,n.hp+I0(e.amount)),r=Math.min(n.shieldMax,n.shield+I0(e.shield));return i!==n.hp&&t.push({type:"healed",amount:i-n.hp,hp:i,was:n.hp,source:e.source??null}),r!==n.shield&&t.push({type:"shielded",amount:r-n.shield,shield:r,source:e.source??null}),{state:{...n,hp:i,shield:r},events:t}}const Od=n=>n.max>0?n.hp/n.max:0,Sc=n=>n.shieldMax>0?n.shield/n.shieldMax:0,px=1e-9,mx=n=>n>0?60/n:0;function gx(n={}){const e=n.magazine??30;return{magazine:e,loaded:Math.min(n.loaded??e,e),reserve:n.reserve??e*6,interval:mx(n.rpm??600),reloadTime:n.reloadTime??2,burst:n.burst??0,auto:n.auto??!0,maxCatchUp:n.maxCatchUp??.25,nextShotAt:0,reloadEndsAt:0,reloading:!1,fired:!1,burstLeft:0}}const kd=(n,e)=>n.reloading&&e<n.reloadEndsAt;function _x(n,e){if(!n.reloading||e<n.reloadEndsAt)return{state:n,events:[]};const t=n.magazine-n.loaded,i=Math.min(t,n.reserve),r=n.loaded+i,s=n.reserve===1/0?1/0:n.reserve-i;return{state:{...n,loaded:r,reserve:s,reloading:!1,reloadEndsAt:0},events:[{type:"reloaded",at:e,loaded:r,reserve:s,took:i}]}}function vx(n,e,t={}){const i=[],r=[];if(kd(n,e))return t.pressed&&i.push({type:"blocked",why:"reloading",at:e}),{state:n,shots:r,events:i};if(!(n.auto?t.held||t.pressed:!!t.pressed))return{state:n,shots:r,events:i};if(n.loaded<=0)return t.pressed&&i.push({type:"dry",at:e}),{state:n,shots:r,events:i};let o=n.loaded,a=n.nextShotAt;(!n.fired||t.pressed||e-a>n.maxCatchUp)&&(a=e);const l=n.burst>0;let u=l?t.pressed?n.burst:n.burstLeft:0;for(;o>0&&a<=e+px&&(!l||u>0)&&(r.push({at:Math.min(a,e),remaining:o-1}),o--,u--,a+=n.interval,!(n.interval<=0)););return r.length&&i.push({type:"fired",count:r.length,loaded:o,at:e}),o===0&&n.loaded>0&&i.push({type:"emptied",at:e}),{state:{...n,loaded:o,nextShotAt:a,burstLeft:l?Math.max(0,u):0,fired:n.fired||r.length>0},shots:r,events:i}}function xx(n,e){return n.reloading?{state:n,events:[]}:n.loaded>=n.magazine?{state:n,events:[{type:"refused",why:"full",at:e}]}:n.reserve<=0?{state:n,events:[{type:"refused",why:"empty",at:e}]}:{state:{...n,reloading:!0,reloadEndsAt:e+n.reloadTime},events:[{type:"reloading",at:e,endsAt:e+n.reloadTime}]}}const Mx=.26,Sx=.13,yx=2.4,Xr=(n,e,t)=>n+(e-n)*t,Ku=(n,e,t,i)=>i<=0?e:Math.max(0,Math.min(1,n+(e-n)*Math.min(1,t/i))),ul={x:0,y:0,z:-.3,pitch:0,yaw:0,roll:0};function ju(n,e,t,i){return i.x=Xr(n.x,e.x,t),i.y=Xr(n.y,e.y,t),i.z=Xr(n.z,e.z,t),i.pitch=Xr(n.pitch,e.pitch,t),i.yaw=Xr(n.yaw,e.yaw,t),i.roll=Xr(n.roll,e.roll,t),i}function Ex(n={}){if(!n.model)throw new Error("makeViewmodel: needs a { model }");const e={...ul,...n.rest??{}},t={...ul,...n.aim??e},i=n.stowDrop??.23,r={...e,y:e.y-i},s=n.drawTime??Mx,o=n.aimTime??Sx,a=n.reach??6,l=n.cone??.3,u=new ma,c=new xn(n.fov??48,1,.01,1),h=new Mn;let d=n.model,f=n.emitter??null;h.add(d),u.add(h);const g=new gc(16777215,n.keyIntensity??2.2);g.position.set(.4,.8,.6),u.add(g,new _c(16777215,n.fillIntensity??.9));let v=0,m=0,p=0,M=0;const x={...r},E={...ul},C={scene:u,camera:c,model:n.model,get out(){return p===1},get drawn(){return v},get aiming(){return M===1&&v>.6},get liveReach(){return this.aiming?a*yx:a},get liveCone(){return l},channel(T="tool"){return{id:T,get radius(){return C.liveReach},get cone(){return C.liveCone},when:()=>C.aiming,filter:S=>{var A;return((A=S==null?void 0:S.data)==null?void 0:A.tool)!==!1}}},swap(T,S){const A=d;return d&&h.remove(d),d=T??null,d&&h.add(d),C.model=d,f=S??null,A},draw(){p=1},stow(){p=0,M=0},toggle(){p=p?0:1,p||(M=0)},setAim(T){M=T?1:0,T&&(p=1)},ray(T,S=new L,A=new L){return S.copy(T.position),T.getWorldDirection(A),{origin:S,dir:A}},emitterAt(T=new L){return f?(f.updateWorldMatrix(!0,!1),T.setFromMatrixPosition(f.matrixWorld)):T.set(0,0,0)},update(T){return v=Ku(v,p,T,s),m=Ku(m,M&&v>.6?1:0,T,o),ju(r,e,v,E),ju(E,t,m,x),h.position.set(x.x,x.y,x.z),h.rotation.set(x.pitch,x.yaw,x.roll,"YXZ"),h.visible=v>.001,x},pass(T,S){if(h.visible===!1)return;c.aspect=(S==null?void 0:S.aspect)??c.aspect,c.updateProjectionMatrix();const A=T.autoClear;T.autoClear=!1,T.clearDepth(),T.render(u,c),T.autoClear=A},dispose(){u.traverse(T=>{var S,A;T.isMesh&&((S=T.geometry)==null||S.dispose(),Array.isArray(T.material)?T.material.forEach(D=>D.dispose()):(A=T.material)==null||A.dispose())})}};return C.update(0),C}function yc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new ei;let u=0;for(let c=0;c<n.length;++c){const h=n[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,f,c),u+=f}}if(t){let c=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+c);c+=n[d].attributes.position.count}l.setIndex(h)}for(const c in s){const h=Zu(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<o[c].length;++v)f.push(o[c][v][d]);const g=Zu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Zu(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new Tn(o,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<t;g++){const v=c.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}const bx=12,ts=24,Bd=n=>n.startsWith("glow"),Ju=new Qt,wx=new zt,Tx=new L,Ax=new L(1,1,1),Rx=new Ve,Qu=new L;function _a(n,e=new Ve){const[,,,,t,i,r,,s=0,o=0,a=0]=n;return Ju.set(s,o,a),e.compose(Tx.set(t,i,r),wx.setFromEuler(Ju),Ax)}function lo(n,e={}){const t=Object.keys(n.bones),i={};for(const M of t){const x=n.bones[M],E=new Rd;E.name=M,E.position.set(...x.at),x.rot&&E.rotation.set(...x.rot),i[M]=E}const r=new Mn;r.name=n.id??"box-rig";for(const M of t){const x=n.bones[M].parent;if(x===void 0)r.add(i[M]);else if(i[x])i[x].add(i[M]);else throw new Error(`BoxRig '${r.name}': bone '${M}' has unknown parent '${x}'`)}r.updateMatrixWorld(!0);const s=new Map(t.map((M,x)=>[M,x])),o={solid:[],glow:[]},a=new Qe,l=new Ve;n.parts.forEach((M,x)=>{const[E,C,T,S,,,,A]=M;if(!s.has(E))throw new Error(`BoxRig '${r.name}': part ${x} rides unknown bone '${E}'`);const D=n.palette[A];if(D===void 0)throw new Error(`BoxRig '${r.name}': part ${x} has unknown colour '${A}'`);const _=new an(C,T,S);_.deleteAttribute("uv"),_.applyMatrix4(Rx.multiplyMatrices(i[E].matrixWorld,_a(M,l))),a.set(D);const y=_.attributes.position.count,P=new Float32Array(y*3),I=new Uint16Array(y*4),k=new Float32Array(y*4),U=s.get(E);for(let N=0;N<y;N++)P[N*3]=a.r,P[N*3+1]=a.g,P[N*3+2]=a.b,I[N*4]=U,k[N*4]=1;_.setAttribute("color",new Tn(P,3)),_.setAttribute("skinIndex",new ic(I,4)),_.setAttribute("skinWeight",new Tn(k,4)),o[Bd(A)?"glow":"solid"].push({g:_,part:M})});const u=new lc(t.map(M=>i[M])),c=[],h=(M,x)=>{const E=o[M];if(!E.length)return null;const C=E.length===1?E[0].g:yc(E.map(S=>S.g),!1);if(!C)throw new Error(`BoxRig '${r.name}': ${M} boxes would not merge`);E.length>1&&E.forEach(S=>S.g.dispose());const T=new Xv(C,x);return T.name=`${r.name}:${M}`,T.userData.parts=E.map(S=>S.part),r.add(T),T.bind(u),c.push(T),T},d=h("solid",e.solidMaterial??new Di({vertexColors:!0,roughness:.85,metalness:0})),f=h("glow",e.glowMaterial??new un({vertexColors:!0})),g=new Ii;for(const M of c)M.geometry.computeBoundingBox(),g.union(M.geometry.boundingBox);const v=g.clone().expandByPoint(Qu.set(0,0,0)).getBoundingSphere(new Es);v.radius=v.radius*1.25+.4;for(const M of c)M.boundingSphere=v.clone();for(const M of t){const x=i[M];x.userData.rest={p:x.position.clone(),r:x.rotation.clone()}}const m=n.scale??1;r.scale.setScalar(m);const p=f?f.geometry.attributes.color.array.slice():null;return{root:r,bones:i,skeleton:u,solid:d,glow:f,meshes:c,scale:m,reset(){for(const M of t){const x=i[M];x.position.copy(x.userData.rest.p),x.rotation.copy(x.userData.rest.r)}},partAt(M,x){var C;const E=(C=M==null?void 0:M.userData)==null?void 0:C.parts;return E&&Number.isInteger(x)?E[Math.floor(x/bx)]??null:null},bounds(M=[]){const x=new Ii;for(const E of c){const C=E.geometry.attributes.position;E.userData.parts.forEach((T,S)=>{if(!M.includes(T[0]))for(let A=S*ts;A<(S+1)*ts;A++)x.expandByPoint(Qu.fromBufferAttribute(C,A))})}return x.min.multiplyScalar(m),x.max.multiplyScalar(m),x},setGlowLit(M,x=()=>!1){if(!f)return;const E=f.geometry.attributes.color;f.userData.parts.forEach((C,T)=>{const S=M||x(C)?1:.1;for(let A=T*ts*3;A<(T+1)*ts*3;A++)E.array[A]=p[A]*S}),E.needsUpdate=!0},dispose(){for(const M of c)M.geometry.dispose();u.dispose()}}}const At=(n,e,t)=>n<e?e:n>t?t:n,Cn=(n,e,t)=>n+(e-n)*t,xs=n=>n<=0?0:n>=1?1:n*n*(3-2*n),ii=n=>{const e=1-At(n,0,1);return 1-e*e*e},xr=n=>{const e=At(n,0,1);return e*e},hl=(n,e,t,i)=>t<=0?e:n+(e-n)*(1-Math.exp(-Math.LN2*i/t));function jn(n,e,t,i){const r=2*Math.LN2/t,s=n.x-e,o=n.v+s*r,a=Math.exp(-r*i);n.x=a*(s+o*i)+e,n.v=a*(n.v-o*r*i)}const Us=(n,e)=>n*Math.E/e,eh=n=>2*Math.LN2*n;function Cx(n,e,t,i){if(i<=0)return e?1:0;if(e){if(n>=1)return 1;const s=1-Math.cbrt(1-n)+t/i;return s>=1?1:1-(1-s)**3}if(n<=0)return 0;const r=Math.cbrt(n)-t/i;return r<=0?0:r**3}function zd(n,e,t,i){if(!i)return xs(n);const r=!!i.in&&i.in.some(o=>Math.abs(o-t)<1e-9),s=!!i.out&&i.out.some(o=>Math.abs(o-e)<1e-9);return r&&s?At(n,0,1):r?xr(n):s?ii(n):xs(n)}function On(n,e,t=[],i=null){const r=n[0].length-1;if(e<=n[0][0]){for(let c=0;c<r;c++)t[c]=n[0][c+1];return t}const s=n[n.length-1];if(e>=s[0]){for(let c=0;c<r;c++)t[c]=s[c+1];return t}let o=1;for(;n[o][0]<e;)o++;const a=n[o-1],l=n[o],u=zd((e-a[0])/(l[0]-a[0]||1),a[0],l[0],i);for(let c=0;c<r;c++)t[c]=a[c+1]+(l[c+1]-a[c+1])*u;return t}function th(n,e,t=null){if(e<=n[0][0])return{from:n[0][1],to:n[0][1],w:1,extra:n[0].slice(2)};const i=n[n.length-1];if(e>=i[0])return{from:i[1],to:i[1],w:1,extra:i.slice(2)};let r=1;for(;n[r][0]<e;)r++;const s=n[r-1],o=n[r],a=zd((e-s[0])/(o[0]-s[0]||1),s[0],o[0],t);return{from:s[1],to:o[1],w:a,extra:s.slice(2).map((l,u)=>l+(o[u+2]-l)*a)}}const Mr=n=>{const e=Math.sin(n*12.9898+78.233)*43758.5453;return(e-Math.floor(e))*2-1},Lx={pelvis:{at:[0,.92,0]},spine:{parent:"pelvis",at:[0,.06,0]},chest:{parent:"spine",at:[0,.24,0]},head:{parent:"chest",at:[0,.34,0]},armL:{parent:"chest",at:[.28,.26,0]},foreL:{parent:"armL",at:[0,-.32,0]},handL:{parent:"foreL",at:[0,-.28,0]},armR:{parent:"chest",at:[-.28,.26,0]},foreR:{parent:"armR",at:[0,-.32,0]},handR:{parent:"foreR",at:[0,-.28,0]},thighL:{parent:"pelvis",at:[.1,-.04,0]},shinL:{parent:"thighL",at:[0,-.42,0]},footL:{parent:"shinL",at:[0,-.38,0]},thighR:{parent:"pelvis",at:[-.1,-.04,0]},shinR:{parent:"thighR",at:[0,-.42,0]},footR:{parent:"shinR",at:[0,-.38,0]},capeA:{parent:"chest",at:[0,.26,-.14]},capeB:{parent:"capeA",at:[0,-.52,0]},mark:{parent:"pelvis",at:[0,-.02,.13]},skirtB:{parent:"pelvis",at:[0,-.02,-.13]}},Hd=[["pelvis",.36,.16,.23,0,0,0,"suit"],["spine",.4,.26,.23,0,.12,0,"suit"],["chest",.44,.3,.25,0,.14,0,"suit"],["chest",.13,.08,.13,0,.32,0,"suit"],["head",.21,.23,.23,0,.115,0,"mask"],["armL",.12,.34,.13,0,-.16,0,"suit"],["foreL",.11,.3,.12,0,-.14,0,"suit"],["handL",.1,.1,.1,0,-.05,0,"glove"],["armR",.12,.34,.13,0,-.16,0,"suit"],["foreR",.11,.3,.12,0,-.14,0,"suit"],["handR",.1,.1,.1,0,-.05,0,"glove"],["thighL",.17,.44,.19,0,-.21,0,"suit"],["shinL",.15,.4,.17,0,-.2,0,"suit"],["footL",.18,.09,.3,0,-.035,.05,"boot"],["thighR",.17,.44,.19,0,-.21,0,"suit"],["shinR",.15,.4,.17,0,-.2,0,"suit"],["footR",.18,.09,.3,0,-.035,.05,"boot"]],Px={thighL:[-.1,0,0],thighR:[-.1,0,0],shinL:[.2,0,0],shinR:[.2,0,0],footL:[-.1,0,0],footR:[-.1,0,0],spine:[.05,0,0],chest:[.05,0,0],head:[-.1,0,0],armL:[-.35,0,.18],armR:[-.35,0,-.18],foreL:[-.8,0,0],foreR:[-.8,0,0],capeA:[.1,0,0],skirtB:[.06,0,0],mark:[-.04,0,0]},Ix=-.01,Oo=Math.PI*2;function Dx(n,e,t=1){for(const i in e){const r=e[i],s=n[i];s&&(s.rotation.x+=r[0]*t,s.rotation.y+=r[1]*t,s.rotation.z+=r[2]*t)}}function Ux(n,e,t){n.armL.rotation.z+=t,n.armR.rotation.z-=t,n.foreL.rotation.x+=-.12,n.foreR.rotation.x+=-.12,n.chest.rotation.x+=.012*Math.sin(Oo*e/3.2),n.capeA.rotation.x+=.03*Math.sin(Oo*e/2.6),n.mark.rotation.x+=.02*Math.sin(Oo*e/2.6+1),n.skirtB.rotation.x+=.02*Math.sin(Oo*e/2.6+2)}const Nx=(n,e,t)=>({id:`risen-${n}`,bones:Lx,parts:[...Hd,...e],palette:t}),Fx={titanPlate:{plate:"#595d60",plateDark:"#3a3d40",plateEdge:"#a9b3b8",gauntlet:"#595d60",cloth:"#5d6142",clothDark:"#41442e",clothTrim:"#c8bfa6",sleeve:"#2b2e31",classItem:"#5d6142",classItemMark:"#c8bfa6",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#4a3a2c",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#6fd3ff"},hunterCloak:{plate:"#7d858a",plateDark:"#4a4f53",plateEdge:"#b9c1c5",gauntlet:"#7d858a",cloth:"#3e3530",clothDark:"#2c2622",clothTrim:"#bdb29a",sleeve:"#4f6660",classItem:"#3e3530",classItemMark:"#8a4a2b",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a4a2b",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#ff8a2a"},warlockRobe:{plate:"#4a4f53",plateDark:"#33373a",plateEdge:"#8d969b",gauntlet:"#5a3e2b",cloth:"#6e6450",clothDark:"#4f483a",clothTrim:"#c8bfa6",sleeve:"#6e6450",classItem:"#c8bfa6",classItemMark:"#8a7a5a",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a7a5a",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#c9a9ff"}},mt=(n,e,t,i,r,s,o,a,l=0,u=0,c=0,h=a)=>[[n,e,t,i,r,s,o,a,l,u,c],[n.replace(/L$/,"R"),e,t,i,-r,s,o,h,l,-u,-c]],Ox={parts:[["head",.25,.12,.27,0,.215,-.01,"plate"],["head",.23,.03,.25,0,.265,-.005,"plate",-.1],["head",.266,.03,.03,0,.18,.122,"plateEdge"],...mt("head",.1,.14,.05,.066,.05,.105,"plate"),["head",.17,.022,.012,0,.14,.119,"glowVisor"],["head",.04,.1,.03,0,.12,.14,"plateEdge"],...mt("head",.03,.1,.14,.12,.1,-.02,"plateDark"),["head",.24,.2,.08,0,.1,-.14,"plate",.35],["chest",.58,.2,.32,0,.2,.005,"plate"],["chest",.46,.13,.3,0,.045,.005,"plate"],["chest",.26,.03,.02,0,.235,.172,"plateEdge"],["chest",.12,.07,.02,-.13,.155,.172,"plateEdge"],["chest",.26,.06,.24,0,.32,0,"plateDark"],["chest",.3,.03,.05,0,.315,.105,"clothTrim"],["chest",.34,.07,.12,0,.335,-.105,"cloth"],["chest",.4,.16,.02,0,.19,-.17,"plateDark"],...mt("chest",.018,.12,.1,.297,.2,0,"strap"),["spine",.3,.07,.04,0,.17,.125,"plateDark"],["spine",.28,.07,.04,0,.095,.125,"plateDark"],["spine",.42,.05,.25,0,.205,0,"clothDark"],["pelvis",.4,.06,.25,0,.06,0,"leather"],["pelvis",.07,.04,.02,0,.06,.13,"plateEdge"],...mt("pelvis",.024,.12,.18,.205,-.025,0,"plateDark"),["skirtB",.3,.14,.025,0,-.02,-.025,"plateDark"],["mark",.25,.46,.02,0,-.21,.035,"classItem",-.06],["mark",.035,.38,.02,.055,-.2091,.05,"classItemMark",-.06],["mark",.11,.05,.04,-.06,-.4546,.0497,"clothDark",-.06],["mark",.07,.07,.02,-.06,-.1193,.0446,"clothTrim",-.06],...mt("mark",.03,.08,.08,.09,.0293,.0156,"strap",-.06),...mt("armL",.25,.11,.3,.055,.005,0,"plate",0,0,-.2,"plateDark"),...mt("armL",.2,.06,.26,.08,-.075,0,"plate",0,0,-.28,"plateDark"),...mt("armL",.27,.025,.02,.049,-.0244,.155,"plateEdge",0,0,-.2),...mt("armL",.03,.09,.11,.072,-.2,0,"plate"),...mt("armL",.14,.05,.15,0,-.07,0,"clothDark"),...mt("armL",.16,.05,.17,0,-.12,0,"cloth"),...mt("armL",.14,.03,.15,0,-.26,0,"strap"),...mt("foreL",.14,.22,.15,0,-.17,0,"gauntlet"),...mt("foreL",.16,.05,.17,0,-.255,0,"plate"),...mt("foreL",.13,.055,.05,0,-.0275,-.075,"plateDark"),...mt("foreL",.16,.02,.17,0,-.08,0,"plateEdge"),...mt("handL",.018,.06,.08,.058,-.04,0,"plate"),...mt("handL",.012,.03,.04,.07,-.04,0,"plateEdge"),...mt("handL",.04,.03,.06,.059,-.075,0,"plateDark"),...mt("handL",.012,.012,.04,.082,-.075,0,"glowElement"),...mt("thighL",.15,.24,.03,.03,-.13,.108,"plate",0,.4),...mt("thighL",.19,.03,.21,0,-.28,0,"strap"),...mt("shinL",.13,.09,.05,0,-.01,.1,"plate"),...mt("shinL",.17,.28,.04,0,-.22,.095,"plate"),...mt("shinL",.19,.03,.2,0,-.3,0,"strap"),...mt("footL",.2,.056,.13,0,-.009,.145,"plate"),...mt("footL",.18,.05,.21,0,.035,0,"leather")],previewArmOut:.1,clothLimits:{mark:[-.6,0]},targets:{boxes:[60,85],topY:[1.83,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.86,.96],chestSpan:[.54,.62],waistSpanMax:.46,hemSpanMax:.46,vRatioMin:1.85,armourShare:[.7,.9],detail:{bones:["armL","foreL","handL","armR","foreR","handR","chest"],min:.4},mark:{topMin:.86,bottom:[.38,.48],width:[.22,.28]},clothNearHead:{bones:["head","chest"],above:1.45,min:1}}},kx={parts:[["head",.226,.246,.246,0,.115,0,"plateDark"],["head",.2,.03,.02,0,.178,.133,"plate"],["head",.12,.018,.008,0,.14,.127,"glowVisor"],["head",.17,.095,.025,0,.062,.1355,"plate"],["head",.19,.05,.13,0,.005,.07,"plateDark"],["head",.022,.12,.022,-.045,-.02,.17,"leather",-.35,0,-.3],["head",.07,.06,.05,0,.055,.168,"mask"],["head",.05,.05,.075,.078,.036,.168,"plate",.35,.5,0],["head",.05,.05,.075,-.078,.036,.168,"plate",.35,-.5,0],["head",.068,.068,.012,.0979,.0235,.2022,"strap",.35,.5,0],["head",.068,.068,.012,-.0979,.0235,.2022,"strap",.35,-.5,0],["head",.28,.28,.21,0,.11,-.045,"classItem"],["head",.25,.06,.21,0,.28,-.045,"classItem"],["head",.25,.04,.1,0,.26,.105,"classItem",.2,0,0],["head",.03,.21,.09,.125,.11,.1,"classItem"],["head",.03,.21,.09,-.125,.11,.1,"classItem"],["chest",.18,.06,.19,0,.32,.005,"clothTrim"],["chest",.06,.16,.02,.06,.2,.185,"clothTrim",0,0,.1],["chest",.34,.22,.03,0,.145,.14,"plateEdge"],["chest",.32,.025,.05,0,.255,.139,"plate"],["chest",.3,.22,.015,0,.15,-.1325,"plateDark"],["chest",.035,.32,.02,.12,.125,.176,"strap"],["chest",.035,.32,.02,-.12,.125,.176,"strap"],["chest",.1,.07,.04,.09,0,.145,"leather"],["chest",.1,.07,.04,-.09,0,.145,"leather"],["spine",.26,.09,.025,0,.135,.1275,"plateDark"],["armL",.15,.035,.17,.012,.022,0,"plate",0,0,-.28],["armR",.15,.035,.17,-.012,.022,0,"plate",0,0,.28],["armL",.13,.03,.15,.025,-.03,0,"plateDark",0,0,-.4],["armR",.13,.03,.15,-.025,-.03,0,"plateDark",0,0,.4],["foreL",.13,.26,.14,0,-.13,0,"sleeve"],["foreR",.13,.26,.14,0,-.13,0,"sleeve"],["foreL",.148,.02,.158,0,-.27,0,"clothTrim"],["foreR",.148,.02,.158,0,-.27,0,"clothTrim"],["foreL",.13,.02,.14,0,-.3,0,"strap"],["foreR",.13,.02,.14,0,-.3,0,"strap"],["handL",.014,.02,.07,.057,-.07,0,"gauntlet"],["handR",.014,.02,.07,-.057,-.07,0,"gauntlet"],["handL",.01,.014,.086,.055,-.089,0,"glowElement"],["handR",.01,.014,.086,-.055,-.089,0,"glowElement"],["pelvis",.42,.05,.25,0,.065,0,"leather"],["pelvis",.05,.035,.012,0,.065,.131,"plateEdge"],["thighL",.15,.28,.025,.012,-.18,.1075,"plateDark",0,.2,0],["thighR",.15,.28,.025,-.012,-.18,.1075,"plateDark",0,-.2,0],["thighL",.19,.03,.21,0,-.36,0,"strap"],["thighR",.19,.03,.21,0,-.36,0,"strap"],["thighL",.035,.17,.05,.1,-.15,.03,"leather",0,0,.15],["shinL",.13,.09,.06,0,0,.1,"plateDark"],["shinR",.13,.09,.06,0,0,.1,"plateDark"],["shinL",.12,.27,.025,0,-.19,.0975,"plateDark"],["shinR",.12,.27,.025,0,-.19,.0975,"plateEdge"],["shinL",.025,.2,.09,.0825,-.18,.03,"plateDark"],["shinR",.025,.2,.09,-.0825,-.18,.03,"plateEdge"],["shinL",.168,.025,.188,0,-.25,0,"strap"],["shinR",.168,.025,.188,0,-.25,0,"strap"],["shinL",.17,.08,.19,0,-.345,0,"boot"],["shinR",.17,.08,.19,0,-.345,0,"boot"],["footL",.196,.05,.11,0,-.005,.155,"plateDark"],["footR",.196,.05,.11,0,-.005,.155,"plateDark"],["capeA",.28,.12,.03,0,.07,-.03,"classItem",.5,0,0],["capeA",.49,.335,.02,0,-.1125,-.02,"classItem"],["capeA",.45,.29,.035,0,-.385,-.0125,"classItem"],["capeA",.11,.09,.008,-.11,-.17,-.034,"clothDark"],["capeA",.43,.025,.008,0,-.47,-.034,"classItemMark"],["capeB",.09,.39,.02,.19,-.165,-.02,"classItem",0,0,.05],["capeB",.09,.44,.02,.095,-.19,-.02,"classItem"],["capeB",.09,.47,.02,0,-.205,-.02,"classItem"],["capeB",.09,.41,.02,-.095,-.175,-.02,"classItem"],["capeB",.09,.35,.02,-.19,-.145,-.02,"classItem",0,0,-.05],["capeB",.05,.14,.012,.1425,-.36,-.037,"clothDark",0,0,.06]],previewArmOut:.12,clothLimits:{capeA:[-.05,.35],capeB:[-.4,.6]},targets:{boxes:[50,75],topY:[1.85,1.9],visorY:[1.68,1.72],visorRecess:.02,shoulderSpan:[.68,.76],chestSpan:[.46,.52],waistSpan:[.42,.48],hemSpanMax:.5,armourShare:[.4,.6],detailShareMin:.35,capeBottom:[.5,.62],capeBackZ:-.16,capeShoulderSpan:.4,hemLevels:3,hemStep:.04,caydeWidth:.06,mismatch:{bone:"shinR",key:"plateEdge",pair:"plateDark"}}},Ec=Math.PI/4,Ms=[],ft=(...n)=>Ms.push(n),en=(n,e,t,i,r,s,o,a,l=0,u=0,c=0)=>{Ms.push([n,e,t,i,r,s,o,a,l,u,c]),Ms.push([n.replace(/L$/,"R"),e,t,i,-r,s,o,a,l,-u,-c])},ws=(n,e,t,i,r,s,o,a,l=0,u=0,c=0)=>{Ms.push([n,e,t,i,r,s,o,a,l,u,c]),Ms.push([n,e,t,i,-r,s,o,a,l,-u,-c])};ft("head",.15,.128,.165,0,.234,-.0075,"plate");ft("head",.27,.088,.285,0,.194,-.0075,"plate");ws("head",.035,.125,.255,.1175,.0925,-.0225,"plate");ft("head",.2,.125,.035,0,.0925,-.1325,"plate");ws("head",.085,.03,.165,.0944,.2574,-.0075,"plate",0,0,-Ec);ft("head",.15,.03,.085,0,.2574,.0944,"plate",Ec,0,0);ft("head",.15,.03,.085,0,.2574,-.1094,"plate",-Ec,0,0);ft("head",.2,.022,.012,0,.162,.141,"plateEdge");ft("head",.14,.018,.01,0,.14,.12,"glowVisor");ft("chest",.24,.08,.04,0,.325,-.095,"cloth");ws("chest",.035,.08,.17,.1025,.325,-.01,"cloth");ft("chest",.5,.1,.28,0,.25,0,"cloth");ft("chest",.5,.22,.28,0,.09,0,"cloth");ft("chest",.2,.2,.03,0,.14,.152,"plate");ws("chest",.075,.28,.02,.105,.15,.172,"clothTrim",0,0,-.3);ft("chest",.07,.06,.012,-.17,.02,.146,"clothDark");ft("spine",.48,.28,.26,0,.12,0,"cloth");ft("spine",.52,.055,.29,0,.03,0,"clothTrim");ft("spine",.06,.045,.012,0,.03,.151,"plateEdge");ws("spine",.024,.024,.01,.065,.11,.135,"plateEdge");ws("spine",.024,.024,.01,.065,.18,.135,"plateEdge");ft("spine",.09,.08,.05,-.15,-.03,.16,"leather");ft("pelvis",.5,.185,.27,0,-.0025,0,"cloth");en("thighL",.22,.3,.03,.03,-.13,.123,"cloth");en("thighL",.26,.16,.034,.05,-.36,.125,"cloth");en("thighL",.276,.03,.05,.05,-.445,.125,"clothDark");en("thighL",.075,.35,.265,.1335,-.1493,-.0075,"cloth",0,0,.22);en("thighL",.07,.17,.29,.1852,-.3666,-.01,"cloth",0,0,.22);en("thighL",.09,.03,.316,.2027,-.4447,-.0065,"clothDark",0,0,.22);ft("skirtB",.48,.33,.03,0,-.135,-.02,"cloth");ft("skirtB",.58,.16,.034,0,-.38,-.022,"cloth");ft("skirtB",.596,.03,.05,0,-.465,-.022,"clothDark");ft("skirtB",.016,.3,.01,0,-.29,-.042,"clothDark");ft("skirtB",.3,.045,.012,0,-.06,-.041,"clothTrim");en("shinL",.12,.09,.024,0,-.03,.099,"plate");en("shinL",.166,.15,.186,0,-.18,0,"leather");en("shinL",.182,.17,.202,0,-.325,0,"boot");en("armL",.15,.37,.16,0,-.165,0,"sleeve");ft("armL",.15,.045,.19,.012,.02,0,"plate",0,0,-.25);ft("armR",.15,.045,.19,-.012,.02,0,"plateEdge",0,0,.25);en("foreL",.145,.25,.155,0,-.105,0,"sleeve");en("foreL",.161,.045,.171,0,-.2225,0,"clothDark");en("foreL",.128,.1,.138,0,-.265,0,"gauntlet");en("foreL",.144,.012,.154,0,-.26,0,"strap");en("foreL",.144,.012,.154,0,-.295,0,"strap");ft("armL",.172,.07,.182,0,-.15,0,"classItem");ft("armL",.188,.012,.198,0,-.15,0,"classItemMark");ft("armL",.02,.11,.05,.096,-.215,-.03,"classItem");ft("armL",.008,.006,.06,.09,-.175,.035,"glowElement");en("handL",.008,.05,.05,-.054,-.055,0,"glowElement");en("handL",.008,.06,.006,.054,-.055,0,"glowElement");const Bx={parts:Ms,previewArmOut:.2,clothLimits:{skirtB:[-.2,.6]},targets:{boxes:[50,75],topY:[1.82,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.7,.78],chestSpan:[.48,.54],waistSpan:[.5,.58],hemSpanMin:.6,hemOverChestMin:.08,coatBottom:[.34,.48],armourShare:[.12,.3],detailShareMin:.45,bond:{parts:[1,2],boneY:[-.22,-.1],worldY:[1.26,1.38],wrapW:.13,wrapD:.14,threadMaxArea:.01},chamfers:{min:2,rad:[.5,1]},kneelFloor:-.02}},dl=.24,bc={cameraMotion:1},U0=.15,zx=.06,co={arc:{hud:"#7bd3f7",glow:"#6fd3ff"},solar:{hud:"#f07a2a",glow:"#ff8a2a"},void:{hud:"#a57be0",glow:"#c9a9ff"}},Hn={titanPlate:{element:"arc",grenade:"titan.grenade",melee:"titan.melee",class:"titan.class",super:"titan.super"},hunterCloak:{element:"solar",grenade:"hunter.grenade",melee:"hunter.melee",class:"hunter.class",super:"hunter.super"},warlockRobe:{element:"void",grenade:"warlock.grenade",melee:"warlock.melee",class:"warlock.class",super:"warlock.super"}},fl={speed:7.5,lift:4.2,gravity:14,lifetime:2.5,floorY:.1,wallPad:.15},Zn={"titan.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"pulse",lob:fl,selfScale:.6,radius:3.2,blast:40,pulses:[[.6,30],[1.2,30],[1.8,30]]}},"hunter.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"blaze",lob:fl,selfScale:.6,radius:3.2,blast:100,burn:{seconds:3,every:.5,damage:5}}},"warlock.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"sink",lob:fl,selfScale:.6,radius:3,seconds:2.4,every:.3,ticks:8,damage:17}},"titan.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.17,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.17,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"hunter.melee":{slot:"melee",view:"fp",seconds:.93,events:[[.143,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.143,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:96,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:{seconds:3,every:.5,damage:5}}},"warlock.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.158,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.158,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"titan.class":{slot:"class",view:"fp",seconds:.7,events:[[.57,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[.643,"free"]],grounded:!0,camera:null,damageTaken:1,cooldown:38*dl,launchCooldown:38,tuning:{wall:{width:2.4,height:1.15,depth:.25,ahead:1.5,rise:.25,seconds:20,sink:.25,hp:500},zone:{near:.1,far:1.8,lateral:1.3},rearm:.5}},"hunter.class":{slot:"class",view:"tp",seconds:.5,events:[[.6,"reload"],[1,"end"]],commit:"reload",move:[[0,"driven"],[1,"free"]],grounded:!0,camera:"roll",damageTaken:1,cooldown:25*dl,launchCooldown:25,tuning:{distance:4,travel:[.04,.74],noInputBackMin:3,untargetable:!0}},"warlock.class":{slot:"class",view:"tp",seconds:2,events:[[.75,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[1,"free"]],grounded:!0,camera:"circle",damageTaken:.8,cooldown:83*dl,launchCooldown:83,tuning:{radius:3.75,seconds:15,weaponScale:1.2,heal:40,fadeIn:.2,fadeOut:.5}},"titan.super":{slot:"super",view:"tp",seconds:1.6,events:[[.5,"impact"],[1,"end"]],commit:"impact",move:[[0,"driven"],[.5375,"locked"],[1,"free"]],grounded:!1,camera:"slam",damageTaken:.4,cooldown:null,launchCooldown:null,tuning:{radius:7,centreHeight:1,damage:99999,spend:"impact",shake:{amplitude:.05,seconds:.3}}},"hunter.super":{slot:"super",view:"tp",seconds:.8,events:[[.55,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.55,"locked"],[1,"free"]],grounded:!1,camera:"throw",damageTaken:1,cooldown:null,launchCooldown:null,tuning:{speed:40,radius:.06,range:40,damage:99999,pierce:!0,hitBurst:{radius:.8,seconds:.15},spend:"release"}},"warlock.super":{slot:"super",view:"tp",seconds:1.2,events:[[.58,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.58,"locked"],[1,"free"]],grounded:!1,camera:"burst",damageTaken:.46,cooldown:null,launchCooldown:null,tuning:{diameter:.45,speed:18,lifetime:3,radius:6,damage:99999,spend:"release"}}},nh=Math.PI*2,Hx=Math.PI/4,Gx=-.01,ca={"hunter.class":{bones:{armL:[[0,0,0,0],[.12,-.55,0,-.03],[.2,-.15,0,-.13],[.5,-.15,0,-.13],[.6,-.75,0,.37],[.72,-.35,0,.42],[.85,-.2,0,.22],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.55,0,.03],[.2,-.15,0,.13],[.5,-.15,0,.13],[.6,.6,0,-.12],[.72,.5,0,-.17],[.85,.15,0,-.12],[1,0,0,0]],capeA:[[0,0,0,0],[.12,.1,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],capeB:[[0,0,0,0],[.12,0,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.12,.35,0,0],[.2,.55,0,0],[.5,.55,0,0],[.6,.25,0,0],[.72,.2,0,0],[.85,.1,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.2,0,0],[.72,-.571,0,0],[.85,-.632,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.1,0,0],[.72,1.279,0,0],[.85,-.931,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,.2,0,0],[.72,.3,0,0],[.85,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,-.1,0,0],[.72,.1,0,0],[.85,0,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.4,0,0],[.2,.8,0,0],[.5,.8,0,0],[.6,.45,0,0],[.72,.05,0,0],[.85,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.8,0,0],[.72,1.721,0,0],[.85,1.282,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.5,0,0],[.72,1.371,0,0],[.85,1.181,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,.3,0,0],[.2,.45,0,0],[.5,.45,0,0],[.6,.3,0,0],[.72,.2,0,0],[.85,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-1.05,0,.05],[.2,-2.1,0,.12],[.5,-2.1,0,.12],[.6,-1.6,0,.1],[.72,-1.15,0,.1],[.85,-.65,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-1.05,0,-.05],[.2,-2.1,0,-.12],[.5,-2.1,0,-.12],[.6,-1.4,0,-.1],[.72,.1,0,0],[.85,-.25,0,-.08],[1,0,0,0]],pelvis:[[0,0,0,0],[.12,0,0,0],[.72,nh,0,0],[1,nh,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.3,0],[.16,0,-.402,-.012],[.2,0,-.483,-.038],[.24,0,-.433,-.056],[.28,0,-.41,-.035],[.32,0,-.141,.095],[.36,0,-.012,.286],[.4,0,-.197,.337],[.44,0,-.464,.422],[.48,0,-.676,.432],[.52,0,-.566,.322],[.56,0,-.494,.072],[.6,0,-.496,-.049],[.64,0,-.265,-.013],[.68,0,-.148,-.002],[.72,0,-.36,0],[.85,0,-.2,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0]],face:"move",cloth:[[0,1],[.12,0],[.72,0],[.85,1],[1,1]]},"warlock.class":{bones:{armL:[[0,0,0,0],[.12,-.2,0,-.13],[.4,.15,0,.57],[.62,.13,0,.6],[.75,.45,0,.77],[.85,.5,0,.77],[.93,-.05,0,.42],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.2,0,.13],[.4,-2.5,0,-.07],[.62,-2.53,0,-.07],[.75,-.95,0,.06],[.85,-.97,0,.06],[.93,-.25,0,-.27],[1,0,0,0]],chest:[[0,0,0,0],[.12,-.1,0,0],[.4,-.2,.15,0],[.62,-.22,.15,0],[.75,.55,-.15,0],[.85,.58,-.15,0],[.93,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.491,0,0],[.4,-.308,0,0],[.62,-.355,0,0],[.75,-.527,0,0],[.85,-.558,0,0],[.93,-.579,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.491,0,0],[.4,-.416,0,0],[.62,-.467,0,0],[.75,-1.353,0,0],[.85,-1.393,0,0],[.93,-.859,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-1.15,0,0],[.4,.4,0,0],[.62,.38,0,0],[.75,.2,0,0],[.85,.15,0,0],[.93,.3,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-1.15,0,0],[.4,.55,0,0],[.62,.58,0,0],[.75,.75,0,0],[.85,.73,0,0],[.93,.3,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.3,0,0],[.4,-.2,0,0],[.62,-.22,0,0],[.75,.15,0,0],[.85,.18,0,0],[.93,.05,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,.741,0,0],[.4,.508,0,0],[.62,.575,0,0],[.75,1.627,0,0],[.85,1.678,0,0],[.93,1.129,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,.741,0,0],[.4,.366,0,0],[.62,.417,0,0],[.75,1.403,0,0],[.85,1.443,0,0],[.93,.959,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.12,0,0,0],[.4,0,0,0],[.62,0,0,0],[.75,.24,0,0],[.85,.24,0,0],[.93,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,0,0,0],[.4,-.1,0,0],[.62,-.11,0,0],[.75,.4,0,0],[.85,.42,0,0],[.93,.1,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-.25,0,.06],[.4,-.2,0,.1],[.62,-.22,0,.1],[.75,-1.1,0,.1],[.85,-1.12,0,.1],[.93,-.55,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-.25,0,-.06],[.4,.05,0,-.08],[.62,.05,0,-.08],[.75,-.05,0,-.06],[.85,-.05,0,-.06],[.93,-.1,0,-.06],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.08,0],[.4,0,-.04,0],[.62,0,-.05,0],[.75,0,-.33,0],[.85,0,-.345,0],[.93,0,-.16,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.4,1],[.95,0]],face:"cast",faceOffset:[[0,0],[.62,0],[.75,.436],[.85,.436],[1,0]],ease:{in:[.75],out:[],tracks:["armR","foreR"]}},"titan.super":{bones:{armL:[[0,0,0,0],[.1,1.05,0,.12],[.22,-1.65,0,-.08],[.34,-2.5,0,-.4],[.44,-2.25,0,-.38],[.5,-.7,0,-.3],[.75,-.67,0,-.3],[.88,-.2,0,.07],[1,0,0,0]],armR:[[0,0,0,0],[.1,1.05,0,-.12],[.22,-1.65,0,.08],[.34,-2.5,0,.4],[.44,-2.25,0,.38],[.5,-.7,0,.3],[.75,-.67,0,.3],[.88,-.2,0,-.07],[1,0,0,0]],chest:[[0,0,0,0],[.1,.3,0,0],[.22,-.2,0,0],[.34,-.35,0,0],[.44,0,0,0],[.5,.65,0,0],[.75,.69,0,0],[.88,.25,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,-.789,0,0],[.75,-.828,0,0],[.88,-.536,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,1.279,0,0],[.75,1.279,0,0],[.88,-1.027,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],head:[[0,0,0,0],[.1,-.2,0,0],[.22,-.1,0,0],[.34,.15,0,0],[.44,.2,0,0],[.5,.15,0,0],[.75,.2,0,0],[.88,0,0,0],[1,0,0,0]],mark:[[0,0,0,0],[.1,.24,0,0],[.22,.39,0,0],[.34,-.26,0,0],[.44,-.36,0,0],[.5,-.96,0,0],[.75,-.96,0,0],[.88,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.139,0,0],[.75,2.198,0,0],[.88,1.386,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.196,0,0],[.75,2.259,0,0],[.88,1.327,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.1,.15,0,0],[.22,-.1,0,0],[.34,-.15,0,0],[.44,-.05,0,0],[.5,.3,0,0],[.75,.32,0,0],[.88,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.1,-.85,0,.08],[.22,.15,0,.06],[.34,-1.2,0,.1],[.44,-1,0,.1],[.5,-1.35,0,.12],[.75,-1.37,0,.12],[.88,-.85,0,.1],[1,0,0,0]],thighR:[[0,0,0,0],[.1,-.85,0,-.08],[.22,.15,0,-.06],[.34,-1.2,0,-.1],[.44,-1,0,-.1],[.5,-.725,0,0],[.75,-.788,0,0],[.88,-.3,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.1,0,-.28,0],[.22,0,0,0],[.34,0,0,0],[.44,0,0,0],[.5,0,-.5,0],[.75,0,-.52,0],[.88,0,-.24,0],[1,0,0,0]],root:[[0,0,0,0],[.1,0,0,0],[.22,0,.75,0],[.34,0,1.3,0],[.44,0,1.08,0],[.5,0,0,0],[.75,0,0,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[.1,1],[.16,0],[.46,0],[.5,1],[1,1]],glow:[[0,0],[.1,1],[.8,0]],face:"cast",faceOffset:[[0,0],[.46,0],[.5,-.436],[.75,-.436],[.88,0],[1,0]],ease:{in:[.5],out:[],tracks:["root","armL","armR","foreL","foreR"]}},"hunter.super":{bones:{armL:[[0,0,0,0],[.16,.15,0,.12],[.36,-.95,0,-.98],[.48,-1.1,0,-.03],[.55,.65,0,.27],[.62,.65,0,.27],[.75,.65,0,.27],[.88,.25,0,.12],[1,0,0,0]],armR:[[0,0,0,0],[.16,-.45,0,.53],[.36,-.75,0,-.57],[.48,-1.85,0,-.42],[.55,-1.65,0,.03],[.62,-.95,0,.08],[.75,-.91,0,.08],[.88,-.6,0,-.02],[1,0,0,0]],capeA:[[0,0,0,0],[.16,0,0,0],[.36,0,0,0],[.48,.2,0,0],[.55,.15,0,0],[.62,.15,0,0],[.75,.15,0,0],[.88,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.16,.1,.2,0],[.36,-.05,-.25,0],[.48,-.15,-.3,0],[.55,.05,.1,0],[.62,.15,.2,0],[.75,.17,.22,0],[.88,0,.1,0],[1,0,0,0]],footL:[[0,0,0,0],[.16,-.427,0,0],[.36,-.425,0,0],[.48,-.409,0,0],[.55,-.408,0,0],[.62,-.408,0,0],[.75,-.408,0,0],[.88,-.299,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.16,-.467,0,0],[.36,-.514,0,0],[.48,-.583,0,0],[.55,-.649,0,0],[.62,-.649,0,0],[.75,-.649,0,0],[.88,-.363,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.16,.2,0,0],[.36,.1,0,0],[.48,.65,0,0],[.55,.3,0,0],[.62,.3,0,0],[.75,.3,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.16,-.2,0,0],[.36,-.2,0,0],[.48,-1,0,0],[.55,.6,0,0],[.62,.55,0,0],[.75,.55,0,0],[.88,.25,0,0],[1,0,0,0]],head:[[0,0,0,0],[.16,.4,.1,0],[.36,.15,-.3,0],[.48,.1,.4,0],[.55,.1,-.1,0],[.62,.1,-.1,0],[.75,.1,-.1,0],[.88,0,-.15,0],[1,0,0,0]],shinL:[[0,0,0,0],[.16,.527,0,0],[.36,.625,0,0],[.48,.759,0,0],[.55,.858,0,0],[.62,.858,0,0],[.75,.858,0,0],[.88,.419,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.16,.417,0,0],[.36,.364,0,0],[.48,.333,0,0],[.55,.349,0,0],[.62,.349,0,0],[.75,.349,0,0],[.88,.263,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.16,.05,.15,0],[.36,-.05,-.15,0],[.48,-.1,-.12,0],[.55,0,.05,0],[.62,.05,.1,0],[.75,.05,.1,0],[.88,-.02,.08,0],[1,0,0,0]],thighL:[[0,0,0,0],[.16,-.1,0,.08],[.36,-.2,0,.1],[.48,-.35,0,.1],[.55,-.45,0,.1],[.62,-.45,0,.1],[.75,-.45,0,.1],[.88,-.12,0,.06],[1,0,0,0]],thighR:[[0,0,0,0],[.16,.05,0,-.06],[.36,.15,0,-.08],[.48,.25,0,-.1],[.55,.3,0,-.1],[.62,.3,0,-.1],[.75,.3,0,-.1],[.88,.1,0,-.05],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.16,0,-.05,0],[.36,0,-.06,0],[.48,0,-.08,0],[.55,0,-.1,0],[.62,0,-.11,0],[.75,0,-.11,0],[.88,0,-.03,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.36,1],[.6,0]],face:"viewUntilRelease",ease:{in:[.55],out:[.55],tracks:["armR","foreR","chest","spine"]},props:[{kind:"knife",bone:"handR",on:[[0,0],[.16,1],[.55,0]],glow:[[0,0],[.36,1],[.55,0]]}]},"warlock.super":{bones:{armL:[[0,0,0,0],[.15,-.6,0,-.73],[.45,-.6,0,-.58],[.54,-1.1,0,-1.03],[.58,-1.5,0,-.78],[.66,-1.05,0,-.63],[.78,-1.01,0,-.63],[.88,-.45,0,-.18],[1,0,0,0]],armR:[[0,0,0,0],[.15,-.4,0,-.02],[.45,-.35,0,-.17],[.54,0,0,-.52],[.58,-1.5,0,.03],[.66,-1.1,0,.13],[.78,-1.06,0,.13],[.88,-.5,0,.08],[1,0,0,0]],chest:[[0,0,0,0],[.15,0,-.25,0],[.45,-.05,-.3,0],[.54,-.17,-.55,0],[.58,.05,-.2,0],[.66,.17,-.05,0],[.78,.19,-.03,0],[.88,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.15,-.547,0,0],[.45,-.674,0,0],[.54,-.508,0,0],[.58,-.546,0,0],[.66,-.566,0,0],[.78,-.585,0,0],[.88,-.454,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.15,-.608,0,0],[.45,-.757,0,0],[.54,-.745,0,0],[.58,-.805,0,0],[.66,-.89,0,0],[.78,-.922,0,0],[.88,-.6,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.15,.2,0,0],[.45,.1,0,0],[.54,-.3,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.15,.1,0,0],[.45,.05,0,0],[.54,-1.2,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],head:[[0,0,0,0],[.15,.35,.15,0],[.45,.35,.2,0],[.54,.2,.55,0],[.58,.15,.2,0],[.66,.15,.05,0],[.78,.16,.03,0],[.88,.1,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.15,.847,0,0],[.45,1.024,0,0],[.54,.958,0,0],[.58,1.046,0,0],[.66,1.166,0,0],[.78,1.205,0,0],[.88,.754,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.15,.808,0,0],[.45,.957,0,0],[.54,.545,0,0],[.58,.555,0,0],[.66,.59,0,0],[.78,.622,0,0],[.88,.45,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.15,0,0,0],[.45,0,0,0],[.54,0,0,0],[.58,0,0,0],[.66,.14,0,0],[.78,.14,0,0],[.88,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.15,-.05,-.1,0],[.45,-.05,-.12,0],[.54,-.1,-.2,0],[.58,0,-.1,0],[.66,.07,-.05,0],[.78,.08,-.05,0],[.88,.01,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.15,-.3,0,.08],[.45,-.35,0,.1],[.54,-.45,0,.12],[.58,-.5,0,.12],[.66,-.6,0,.12],[.78,-.62,0,.12],[.88,-.3,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.15,-.2,0,-.08],[.45,-.2,0,-.1],[.54,.2,0,-.1],[.58,.25,0,-.1],[.66,.3,0,-.1],[.78,.3,0,-.1],[.88,.15,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.15,0,-.1,0],[.45,0,-.14,0],[.54,0,-.12,0],[.58,0,-.14,0],[.66,0,-.17,0],[.78,0,-.18,0],[.88,0,-.08,0],[1,0,0,0]],root:[[0,0,0,0],[.15,0,.05,0],[.45,0,.12,0],[.54,0,.12,0],[.58,0,.1,0],[.66,0,.06,0],[.78,0,.04,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.1,1],[.7,0]],face:"viewUntilRelease",ease:{in:[.58],out:[.58],tracks:["armL","armR","foreL","foreR"]}}},Vx={knife:[["handR",.026,.05,.026,0,-.105,.01,"leather"],["handR",.03,.01,.05,0,-.135,.01,"guard"],["handR",.008,.16,.032,0,-.22,.01,"blade"],["handR",.0078,.022,.022,0,-.3,.01,"blade",Hx,0,0],["handR",.0035,.15,.004,0,-.215,.028,"edge"],["handR",.001,.14,.014,.0046,-.215,.012,"glowElement"],["handR",.001,.14,.014,-.0046,-.215,.012,"glowElement"]]},ko=Math.PI/4,ih={left:[-.24,-.28,.06]},Wx=[.01,-.048,-.066],Xx={"titan.grenade.wind":{at:[-.265,-.223,-.249],fingers:[.092,.925,.37],back:[-.447,0,.894]},"titan.grenade.high":{at:[-.238,-.005,-.32],fingers:[.095,.953,.286],back:[-.37,.092,.925]},"titan.grenade.release":{at:[-.08,.007,-.412],fingers:[.238,.19,-.952],back:[-.183,.913,.365]},"titan.grenade.follow":{at:[.116,-.205,-.4],fingers:[.29,-.677,-.677],back:[.198,.693,-.693]},"hunter.grenade.reach":{at:[-.298,-.034,-.24],fingers:[0,.894,.447],back:[-.514,0,.857]},"hunter.grenade.cock":{at:[-.257,-.027,-.316],fingers:[.089,.891,.445],back:[-.447,0,.894]},"hunter.grenade.release":{at:[-.079,.017,-.403],fingers:[.276,.276,-.921],back:[-.276,.921,.276]},"hunter.grenade.follow":{at:[.087,-.166,-.42],fingers:[.196,-.588,-.784],back:[.1,.796,-.597]},"warlock.grenade.wind":{at:[-.229,-.147,-.213],fingers:[0,-.958,.287],back:[0,.287,.958]},"warlock.grenade.swing":{at:[-.161,-.162,-.289],fingers:[.099,-.099,-.99],back:[0,-1,0]},"warlock.grenade.release":{at:[-.034,-.118,-.419],fingers:[.091,.409,-.908],back:[0,-.912,-.41]},"warlock.grenade.follow":{at:[.04,-.164,-.443],fingers:[.092,.829,-.552],back:[0,-.514,-.857]},"titan.melee.wind":{at:[-.274,-.226,-.22],fingers:[.337,.421,-.842],back:[-.432,.864,.259]},"titan.melee.hit":{at:[-.068,-.002,-.427],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.drive":{at:[-.061,-.008,-.457],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.back":{at:[-.225,-.132,-.315],fingers:[.276,.276,-.921],back:[-.44,.88,.176]},"hunter.melee.wind":{at:[-.318,-.201,-.24],fingers:[.732,.329,-.596],back:[-.607,.713,-.351]},"hunter.melee.stab":{at:[-.08,.051,-.413],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.drive":{at:[-.07,.046,-.438],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.back":{at:[-.244,-.06,-.379],fingers:[.978,-.097,-.184],back:[-.015,.85,-.527]},"warlock.melee.wind":{at:[-.292,-.205,-.22],fingers:[.095,.953,.286],back:[-.981,0,.196]},"warlock.melee.push":{at:[-.044,-.071,-.435],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.press":{at:[-.042,-.073,-.475],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.after":{at:[-.208,-.164,-.341],fingers:[.198,.693,-.693],back:[-.348,.348,.87]},"titan.class.rise":{at:[-.315,-.087,-.277],fingers:[.095,.953,.286],back:[-.958,0,.287]},"titan.class.raise":{at:[-.247,-.002,-.366],fingers:[.238,.952,.19],back:[-.514,0,.857]},"titan.class.slam":{at:[-.124,-.111,-.357],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]},"titan.class.press":{at:[-.125,-.134,-.377],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]}},rh={"titan.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.22,"titan.grenade.wind",.75],[.36,"titan.grenade.high",.75],[.48,"titan.grenade.release",.35],[.58,"titan.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.22,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-6,6,10,.6,.5,-.2],[.426,8,-6,-22,-.8,-.6,.25],[.48,5,-7,-18,-.9,-.4,.25],[.58,-3,2,6,.3,.2,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"hunter.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"hunter.grenade.reach",.75],[.26,"hunter.grenade.cock",.75],[.38,"hunter.grenade.cock",.75],[.48,"hunter.grenade.release",.35],[.58,"hunter.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-5,5,8,.5,.5,-.15],[.426,7,-5,-18,-.7,-.5,.2],[.48,4,-6,-15,-.8,-.35,.2],[.58,-3,2,5,.25,.15,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"warlock.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"warlock.grenade.wind",.7],[.34,"warlock.grenade.swing",.65],[.48,"warlock.grenade.release",.3],[.56,"warlock.grenade.follow",.25],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.34,-3,-6,6,-.4,.3,-.1],[.426,4,6,-16,.5,-.4,.15],[.48,3,5,-14,.6,-.3,.15],[.58,-2,-3,5,-.2,.1,-.05],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"titan.melee":{down:.07,ready:.48,ease:{in:[.17],out:[.17]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"titan.melee.wind",1],[.17,"titan.melee.hit",1],[.24,"titan.melee.drive",1],[.43,"titan.melee.back",1],[.465,"offLeft",.8],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-8,3,10,.4,.6,-.2],[.135,10,-6,-34,-.9,-.8,.3],[.17,6,-8,-30,-1,-.6,.3],[.26,-6,3,12,.5,.4,-.2],[.4,2,-1,-4,-.15,-.1,.05],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"hunter.melee":{down:.07,ready:.48,ease:{in:[.143],out:[.143]},left:[[0,"grip",.6],[.065,"grip",.6],[.095,"hunter.melee.wind",1],[.143,"hunter.melee.stab",1],[.22,"hunter.melee.drive",1],[.43,"hunter.melee.back",1],[.465,"offLeft",1],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.095,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.0714,-6,2,8,.3,.6,-.2],[.107,8,-4,-20,-.6,-.7,.3],[.143,5,-5,-18,-.7,-.5,.3],[.22,4,-4,-14,-.5,-.4,.2],[.3,-5,2,8,.3,.4,-.15],[.4,1,0,-2,-.1,-.1,0],[.5,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.015,1],[.46,0]],propKind:"knife",glow:[[0,0],[.015,1],[.44,0]],glowCharged:!0},"warlock.melee":{down:.07,ready:.48,ease:{in:[.158],out:[.158]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"warlock.melee.wind",.3],[.158,"warlock.melee.push",.45],[.23,"warlock.melee.press",.45],[.43,"warlock.melee.after",.3],[.465,"offLeft",.6],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-6,2,8,.3,.5,-.15],[.123,8,-3,-24,-.5,-.6,.2],[.158,5,-4,-20,-.6,-.5,.2],[.25,-4,2,8,.3,.3,-.1],[.4,1,0,-2,-.1,-.05,0],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"titan.class":{down:.1,ready:.68,ease:{in:[.57],out:[.57]},left:[[0,"grip",.6],[.13,"grip",.6],[.22,"titan.class.rise",1],[.34,"titan.class.raise",1],[.44,"titan.class.raise",1],[.57,"titan.class.slam",.25],[.63,"titan.class.press",.25],[.665,"offLeft",.6],[.68,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.13,0],[.22,1],[.665,1],[.68,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.048,0,-4,3,-.2,0,0],[.34,-4,8,6,.6,.5,-.2],[.44,-5,10,8,.7,.6,-.2],[.522,4,-30,-10,-1.2,-.3,.3],[.57,3,-35,-8,-1.3,-.2,.3],[.66,-2,6,3,.4,.1,-.1],[.8,1,-2,0,-.1,0,0],[.92,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.2,1],[.66,0]]},"hunter.class":{tp:!0,down:.1,ready:1},"warlock.class":{tp:!0,down:.1,ready:1},"titan.super":{tp:!0,down:.1,ready:1},"hunter.super":{tp:!0,down:.1,ready:1},"warlock.super":{tp:!0,down:.1,ready:1}},qx={blade:"#7d858a",edge:"#a9b3b8",leather:"#5a3e2b",cord:"#8a7a5a",guard:"#3a3d40",voidCore:"#231a30",glowCore:"#f4f1ea",glowElement:"#ffffff"},rn=.01,sn=-.048,on=-.066,sh={grenade:{arc:[["hand",.03,.03,.03,rn,sn,on,"glowCore",.6,.4,0],["hand",.072,.004,.004,rn,sn,on,"glowElement",.3,.9,.5],["hand",.072,.004,.004,rn,sn,on,"glowElement",1.2,.2,1.4],["hand",.072,.004,.004,rn,sn,on,"glowElement",.9,1.6,.2],["hand",.06,.004,.004,rn,sn,on,"glowElement",2.1,.7,2.6]],solar:[["hand",.026,.026,.026,rn,sn,on,"glowCore"],["hand",.036,.036,.036,rn,sn,on,"glowElement",ko,0,0],["hand",.036,.036,.036,rn,sn,on,"glowElement",0,ko,0],["hand",.036,.036,.036,rn,sn,on,"glowElement",0,0,ko]],void:[["hand",.026,.026,.026,rn,sn,on,"voidCore"],["hand",.004,.04,.04,rn+.024,sn,on,"glowElement"],["hand",.004,.04,.04,rn-.024,sn,on,"glowElement"],["hand",.04,.004,.04,rn,sn+.024,on,"glowElement"],["hand",.04,.004,.04,rn,sn-.024,on,"glowElement"],["hand",.04,.04,.004,rn,sn,on+.024,"glowElement"],["hand",.04,.04,.004,rn,sn,on-.024,"glowElement"]]},knife:[["hand",.1,.02,.02,0,-.037,-.08,"leather"],["hand",.06,.022,.022,.004,-.037,-.08,"cord"],["hand",.012,.026,.026,.056,-.037,-.08,"guard"],["hand",.008,.034,.03,-.054,-.037,-.08,"guard"],["hand",.142,.024,.005,-.129,-.037,-.08,"blade"],["hand",.017,.017,.0048,-.2,-.037,-.08,"blade",0,0,ko],["hand",.128,.0045,.0035,-.126,-.0475,-.08,"edge"],["hand",.112,.01,.001,-.128,-.036,-.077,"glowElement"],["hand",.112,.01,.001,-.128,-.036,-.083,"glowElement"]]},Yx=(n,e)=>n==="grenade"?sh.grenade[e]:sh[n];function Gd(n,e,t,i){const r={...qx,glowElement:co[e].glow},s=new Mn;s.name=i,s.visible=!1;const o=new Qe,a={group:s,solid:null,glow:null,rows:n};for(const l of[!1,!0]){const u=n.filter(f=>Bd(f[7])===l);if(!u.length)continue;const c=u.map(f=>{const g=r[f[7]];if(g===void 0)throw new Error(`props: '${i}' uses unknown colour '${f[7]}'`);const v=new an(f[1],f[2],f[3]);v.deleteAttribute("uv"),v.applyMatrix4(_a(f)),o.set(g);const m=v.attributes.position.count,p=new Float32Array(m*3);for(let M=0;M<m;M++)p[M*3]=o.r,p[M*3+1]=o.g,p[M*3+2]=o.b;return v.setAttribute("color",new Tn(p,3)),v}),h=c.length===1?c[0]:yc(c,!1);c.length>1&&c.forEach(f=>f.dispose());const d=new vt(h,l?t.glowMaterial:t.solidMaterial);d.name=`${i}:${l?"glow":"solid"}`,d.frustumCulled=!1,d.userData.parts=u,s.add(d),a[l?"glow":"solid"]=d}return a.dispose=()=>{for(const l of[a.solid,a.glow])l==null||l.geometry.dispose()},a}function $x(n,e,t){const i=Yx(n,e);if(!i)throw new Error(`fpProps: no prop '${n}' for '${e}'`);return Gd(i,e,t,`fp-prop-${n}-${e}`)}const $n={halflife:.12,kFwd:.05,max:.6,capeB:.5,skirtB:.8,markFwd:.3,markFall:-.8},Kx={titanPlate:Ox,hunterCloak:kx,warlockRobe:Bx},jx=[-.6,$n.max];function pl(n,e){if(!n)return 0;let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t}const Zx=new Ve,oh=new Ve,Jx=new L,Qx=new L,eM=new L,ml=[],gl=[],tM=[0,0,0],_l=(n,e)=>n.ease&&n.ease.tracks.includes(e)?n.ease:null;function va(n,e){const t=Kx[n];if(!t)throw new Error(`GuardianBody: unknown class '${n}'`);const i=Hn[n].element,r={...Fx[n],glowElement:co[i].glow},s={solidMaterial:e.solid,glowMaterial:e.glow},o=lo(Nx(n,t.parts,r),s),{root:a,bones:l}=o,u={};for(const x of Object.values(ca))for(const E of x.props??[]){if(u[E.kind])continue;const C=Gd(Vx[E.kind],i,s,`risen-${E.kind}`);l[E.bone].add(C.group),u[E.kind]=C}const c=new Qe(r.glove);function h(){if(!o.glow)return;const x=o.glow.geometry.attributes.color;o.glow.userData.parts.forEach((E,C)=>{if(E[7]==="glowElement")for(let T=C*ts*3;T<(C+1)*ts*3;T+=3)x.array[T]=c.r,x.array[T+1]=c.g,x.array[T+2]=c.b})}function d(){let x=1/0;for(const E of Hd){oh.multiplyMatrices(l[E[0]].matrixWorld,_a(E,Zx));for(const C of[-.5,.5])for(const T of[-.5,.5])for(const S of[-.5,.5])x=Math.min(x,Jx.set(C*E[1],T*E[2],S*E[3]).applyMatrix4(oh).y)}return x}const f={x:0,v:0},g={x:0,v:0};let v=null;const m=new L,p=new L;let M=null;return{root:a,rig:o,classId:n,props:u,pose(x,E={}){var re;const C=E.base??"ready",T=E.clip??null,S=E.t??0,A=E.w??1,D=E.feet??null,_=E.facing??0,y=E.dt??0,P=T?ca[T]:null;if(T&&!P)throw new Error(`GuardianBody: no third-person clip '${T}'`);const I=C==="preview";o.reset();let k=0;I?Ux(l,x,t.previewArmOut):(Dx(l,Px),k=Ix);const U=tM;if(U[0]=0,U[1]=0,U[2]=0,P){for(const ie in P.bones){const Me=l[ie];if(!Me)continue;const Ce=On(P.bones[ie],S,gl,_l(P,ie));Me.rotation.x+=Ce[0]*A,Me.rotation.y+=Ce[1]*A,Me.rotation.z+=Ce[2]*A}if(P.pelvisPos){const ie=On(P.pelvisPos,S,gl,_l(P,"pelvisPos"));l.pelvis.position.x+=ie[0]*A,l.pelvis.position.y+=ie[1]*A,l.pelvis.position.z+=ie[2]*A}if(P.root){const ie=On(P.root,S,gl,_l(P,"root"));U[0]=ie[0]*A,U[1]=ie[1]*A,U[2]=ie[2]*A}}const N=_+(P&&P.faceOffset?On(P.faceOffset,S,ml)[0]*A:0)+Math.PI,X=Math.cos(N),G=Math.sin(N);if(m.set((D?D.x:0)+X*U[0]+G*U[2],(D?D.y:0)+k+U[1],(D?D.z:0)-G*U[0]+X*U[2]),!I){if(y>0&&v){p.subVectors(m,v).divideScalar(y);const ie=p.x*-Math.sin(_)+p.z*-Math.cos(_);jn(f,At($n.kFwd*ie,0,$n.max),$n.halflife,y),jn(g,At(-.12*p.y,0,$n.max),$n.halflife,y);const Me=At(f.x+g.x,-.6,$n.max),Ce={capeA:Me,capeB:$n.capeB*Me,skirtB:$n.skirtB*Me,mark:$n.markFwd*f.x+$n.markFall*g.x},z=P&&P.cloth?On(P.cloth,S,ml)[0]:1;for(const Y in Ce){const[K,Z]=((re=t.clothLimits)==null?void 0:re[Y])??jx;l[Y].rotation.x+=At(Ce[Y],K,Z)*z}}v=(v??new L).copy(m)}if(a.position.copy(m),a.rotation.set(0,N,0),a.updateMatrixWorld(!0),P&&P.ground){const ie=On(P.ground,S,ml)[0]*A*Math.max(0,Gx-d());ie>0&&(a.position.y+=ie,a.updateMatrixWorld(!0))}const ae=I?!1:E.glow??(P?pl(P.glow,S)===1:!1);ae!==M&&(o.setGlowLit(ae,ie=>ie[7]==="glowVisor"),ae||h(),M=ae);for(const ie in u)u[ie].group.visible=!1,u[ie].glow&&(u[ie].glow.visible=!1);for(const ie of(P==null?void 0:P.props)??[]){const Me=u[ie.kind];Me.group.visible=pl(ie.on,S)===1,Me.glow&&(Me.glow.visible=pl(ie.glow,S)===1)}},headWorld(x=new L){return x.set(0,.115,0).applyMatrix4(l.head.matrixWorld)},handWorld(x,E=new L){return E.set(0,-.05,0).applyMatrix4(l[`hand${x}`].matrixWorld)},handsMid(x=new L){return x.addVectors(this.handWorld("L",Qx),this.handWorld("R",eM)).multiplyScalar(.5)},chestWorld(x=new L){return x.setFromMatrixPosition(l.chest.matrixWorld)},resetCloth(){f.x=0,f.v=0,g.x=0,g.v=0,v=null},dispose(){o.dispose();for(const x in u)u[x].dispose()}}}const ni=Math.PI/180,ah=.55,nM=.2,iM=.35,rM=.8,lh={amplitude:.05,seconds:.35},Tr={roll:{side:.35,height:1.4,distance:2.2,pitch:[-40*ni,30*ni],k0:1,blendOut:0,blendBack:0},circle:{side:.5,height:1.35,distance:3,pitch:[-50*ni,30*ni],k0:.55,blendOut:.24,blendBack:.2},slam:{side:.6,height:1.6,distance:4,pitch:[-60*ni,35*ni],k0:.55,blendOut:.32,blendBack:.28},throw:{side:.45,height:1.5,distance:2.6,pitch:[-40*ni,30*ni],k0:.55,blendOut:.2,blendBack:.18,aimed:!0},burst:{side:.55,height:1.5,distance:3.4,pitch:[-60*ni,35*ni],k0:.55,blendOut:.27,blendBack:.24,aimed:!0}},sM=30;function oM({room:n,fov:e=70,radius:t=nM,moments:i=Tr,comfort:r=bc}){let s="fp",o=null,a=ah,l=0,u=0,c=0,h=0,d=0,f=0,g=0,v=null,m=0,p=0;const M=new L,x=new zt,E=new Qt(0,0,0,"YXZ"),C=new L,T=new L,S=new zt,A=new L;function D(I,k,U,N,X,G,ae){ae.setFromEuler(E.set(N,U,0,"YXZ")),C.set(I.side,0,X).applyQuaternion(ae);const re=k.x,ie=k.y+I.height,Me=k.z;let Ce=1;return Ce=_(Ce,re,C.x,-n.halfW+t,n.halfW-t),Ce=_(Ce,ie,C.y,t,n.wallH-t),Ce=_(Ce,Me,C.z,n.far+t,n.near-t),Ce=At(Ce,0,1),G.set(re+Ce*C.x,ie+Ce*C.y,Me+Ce*C.z),C.length()*Ce}function _(I,k,U,N,X){return U>0?Math.min(I,(X-k)/U):U<0?Math.min(I,(N-k)/U):I}function y(I,k){if(k.set(0,0,0),v===null||!(p>0)||I<v||I>=v+p)return k;const U=(I-v)/p,N=m*(1-U)*(1-U)*r.cameraMotion,X=(I-v)*sM,G=Math.floor(X),ae=xs(X-G),re=ie=>Cn(Mr(G*7+ie*13),Mr((G+1)*7+ie*13),ae);return k.set(N*re(1),N*re(2),0)}const P=()=>s!=="fp";return{start(I,k,U){const N=i[I];if(!N)return!1;let X=0;if(U){const G=At(U.pitch,N.pitch[0],N.pitch[1]);if(D(N,U.feet,U.yaw,G,N.distance,T,S)<rM)return!1;X=U.pitch-G}return o=N,a=N.k0??ah,s="out",c=k,l=a,d=X,v=null,!0},finish(I){s!=="out"&&s!=="tp"||(u=l,s="back",h=I)},update(I,{feet:k,yaw:U,pitch:N}){if(g=I,s==="fp")return{mode:s,k:0};if(s==="out"&&(!(o.blendOut>0)||I>=c+o.blendOut?(s="tp",l=1):l=a+(1-a)*xs((I-c)/o.blendOut)),s==="back"){if(!(o.blendBack>0)||I>=h+o.blendBack)return s="fp",l=0,f=0,{mode:s,k:l};l=u+(a-u)*xr((I-h)/o.blendBack)}const X=At(N-d,o.pitch[0],o.pitch[1]);return f=D(o,k,U,X,o.distance*Cn(a,l,r.cameraMotion),M,x),{mode:s,k:l}},apply(I){I.position.copy(M).add(y(g,A).applyQuaternion(x)),I.quaternion.copy(x),I.fov!==e&&(I.fov=e,I.updateProjectionMatrix())},shake(I,k,U){v=I,m=Math.min(k,lh.amplitude),p=Math.min(U,lh.seconds)},clampPitch(I){return P()?At(I,o.pitch[0],o.pitch[1]):I},bodyVisible(I){return P()&&M.distanceTo(I)>=iM},reset(){s="fp",o=null,l=0,f=0,d=0,v=null},get active(){return P()},get mode(){return s},get k(){return l},get boom(){return f},get pitchLimits(){return P()?[o.pitch[0],o.pitch[1]]:null},get aimed(){return P()&&!!o.aimed},position:M,quaternion:x}}const aM=n=>n<0?0:n>1?1:n,lM=(n,e)=>{let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t},cM=()=>({move:"free",jump:!1,fire:!1,aim:!1,reload:!1,swap:!1,keys:{grenade:"start",melee:"start",class:"start",super:"start"}});function uM({abilities:n,moments:e}){let t=null;const i=o=>t&&o<t.returnAt,r=o=>aM((o-t.startAt)/t.seconds);function s(o){if(!i(o))return"start";if(t.def.view==="tp")return"ignore";const a=t.def.events.find(([,l])=>l===t.def.commit)[0];return r(o)>=a?"interrupt":"ignore"}return{get current(){return t&&{id:t.id,startAt:t.startAt,seconds:t.seconds,returnAt:t.returnAt,charged:t.charged}},start(o,a,{grounded:l=!0,charged:u=!1}={}){const c=n[o];if(!c||c.grounded&&!l||c.slot==="super"&&!u||s(a)==="ignore")return!1;const h=c.camera?e[c.camera].blendBack:0;return t={id:o,def:c,startAt:a,seconds:c.seconds,returnAt:a+c.seconds+h,charged:!!u,lastT:0},!0},reset(){t=null},update(o){if(!t)return[];const a=[],l=o>=t.returnAt?1:r(o);for(const[u,c]of t.def.events)u>t.lastT&&u<=l&&a.push({id:t.id,name:c,at:t.startAt+u*t.seconds});return t.lastT=Math.max(t.lastT,l),o>=t.returnAt&&(t=null),a},phase(o){return t?r(o):0},locks(o){if(!i(o))return cM();const a=s(o),l=lM(t.def.move,r(o)),u=t.def.view==="tp";return{move:l,jump:u||l!=="free",fire:u,aim:u,reload:!0,swap:!0,keys:{grenade:a,melee:a,class:a,super:a}}}}}const Vd={};for(const n of Object.keys(Hn)){const e=Hn[n];for(const t of["grenade","melee","class","super"])Vd[e[t]]=co[e.element].glow}const hM=(n,e)=>n.events.find(([,t])=>t===e)[0]*n.seconds;function dM(n){const{scene:e,ROOM:t,camera:i,fp:r,runner:s,moment:o,player:a,view:l,PLAYER_RADIUS:u,now:c,classId:h,body:d,moveAxis:f,ability:g,superCharge:v,weapons:m,legacy:p}=n;let M=null,x=null,E=null,C=0,T=null,S=null,A=0,D=!1,_=null;const y=new Mn;y.name="risen-effects",e&&e.add(y);const P=new L,I=(z,Y)=>{x={ev:z,spawn:Y}},k=z=>I(z,(Y,K)=>p.throwGrenade(Y,K,Vd[z.id])),U=()=>p.meleeStrike(),N=()=>p.ward(),X=()=>p.superWipe(),G={"titan.grenade":{release:k},"hunter.grenade":{release:k},"warlock.grenade":{release:k},"titan.melee":{impact:U},"hunter.melee":{impact:U},"warlock.melee":{impact:U},"titan.class":{plant:N},"hunter.class":{reload:N},"warlock.class":{plant:N},"titan.super":{impact:X},"hunter.super":{release:X},"warlock.super":{release:X}};function ae(z,Y){let K=1/0;return z>0&&(K=Math.min(K,(t.halfW-u-a.x)/z)),z<0&&(K=Math.min(K,(-t.halfW+u-a.x)/z)),Y>0&&(K=Math.min(K,(t.near-u-a.z)/Y)),Y<0&&(K=Math.min(K,(t.far+u-a.z)/Y)),K}function re(){const z=f(),Y=Math.sin(l.yaw),K=Math.cos(l.yaw),Z=-Y*z.y+K*z.x,ge=-K*z.y-Y*z.x,Te=Math.hypot(Z,ge);return Te>0?{x:Z/Te,z:ge/Te}:null}function ie(z,Y){const K=Hn[h()][z],Z=Zn[K];if(z==="super"?v.get()<1:!g.ready(z))return"refused";if(s.locks(Y).keys[z]==="ignore")return"ignored";const ge=a.y<=0;if(!s.start(K,Y,{grounded:ge,charged:!0}))return"refused";if(M=null,z!=="super"&&g.use(z),m.cancelReload(),D=!1,E=null,T=null,S=null,A=l.yaw,K==="hunter.class"){let ke=re();if(!ke){const ze={x:Math.sin(l.yaw),z:Math.cos(l.yaw)};ke=ae(ze.x,ze.z)>=Z.tuning.noInputBackMin?ze:{x:-ze.x,z:-ze.z}}E={id:K,startAt:Y,dir:ke},C=0,A=Math.atan2(-ke.x,-ke.z)}Z.slot==="super"&&(T={id:K,startAt:Y,y0:a.y,until:Y+hM(Z,Z.commit)});let Te=0;return Z.view==="tp"&&(Te=Tr[Z.camera].blendBack,o.start(Z.camera,Y,{feet:a,yaw:l.yaw,pitch:l.pitch})&&d().resetCloth()),r.act(K,Y,Z.seconds+Te,z==="melee"?{charged:!0}:{}),"started"}function Me(z){const Y=ca[z].face;return Y==="view"||Y==="viewUntilRelease"&&!D?l.yaw:A}function Ce(){}return{press(z){const Y=c(),K=ie(z,Y);return K==="ignored"&&(M={slot:z,at:Y}),K==="started"},onEvents(z){var Y,K;for(const Z of z){const ge=Zn[Z.id];Z.name==="release"&&(D=!0,ge.view==="tp"&&ca[Z.id].face==="viewUntilRelease"&&(A=l.yaw)),ge.slot==="super"&&Z.name===ge.tuning.spend&&v.set(0),(K=(Y=G[Z.id])==null?void 0:Y[Z.name])==null||K.call(Y,Z),Z.name==="end"&&ge.view==="tp"&&o.finish(Z.at)}},update(z){if(!M)return;const Y=c();(Y-M.at>U0||ie(M.slot,Y)==="started")&&(M=null)},lateUpdate(z){if(x){const{spawn:ge}=x;x=null,ge(r.leftHandWorld(i,new L),i.getWorldDirection(new L))}const Y=_===null?0:z-_;_=z;const K=d();if(!K)return;const Z=s.current;if(Z&&Zn[Z.id].view==="tp"&&o.active){const ge=At((z-Z.startAt)/Z.seconds,0,1);K.pose(z,{clip:Z.id,t:ge,feet:a,facing:Me(Z.id),dt:Y}),K.root.visible=o.bodyVisible(K.headWorld(P))}else K.root.visible=!1},drive(z,Y){const K=s.current;if(!K)return null;const Z=c();if(E&&E.id===K.id&&E.startAt===K.startAt){const[ge,Te]=Zn[K.id].tuning.travel,ke=xs(At(((Z-K.startAt)/K.seconds-ge)/(Te-ge),0,1)),ze=Zn[K.id].tuning.distance*(ke-C);return Y.x+=E.dir.x*ze,Y.z+=E.dir.z*ze,C=ke,null}return T&&T.id===K.id&&T.startAt===K.startAt&&T.y0>0?(Y.y=T.y0*(1-xs((Z-T.until)/zx)),{velY:0}):null},pushOut(){},locks(z){const Y=s.locks(z),K=s.current;return K&&Zn[K.id].slot==="melee"&&S===null&&(Y.move="free",Y.jump=!1),Y},weaponDamageScale(){return 1},buffs(){return{emboldened:{on:!1,left:0}}},get aiming(){return o.aimed&&!D},get busy(){return s.current!==null||o.active||M!==null&&c()-M.at<=U0},setClass(z){if(!Hn[z])return;s.reset(),o.reset(),M=null,x=null,E=null,T=null,S=null,D=!1;const Y=d();Y&&(Y.root.visible=!1)},clearWorld:Ce,get effectsRoot(){return y}}}const fM="Risen",pM="Character and loadout — Esc to resume",mM="Kit",gM={titanPlate:{label:"Plate"},hunterCloak:{label:"Cloak"},warlockRobe:{label:"Coat"}},_M={arc:"Arc",solar:"Solar",void:"Void"},vM={grenade:"Grenade",melee:"Melee",class:"Class ability",super:"Super"},xM={grenade:"Q",melee:"C",class:"V",super:"F"},MM={"titan.grenade":{name:"Arc Beacon"},"titan.melee":{name:"Punch",charged:"Arc Fist"},"titan.class":{name:"Wall of Light"},"titan.super":{name:"Arc Slam"},"hunter.grenade":{name:"Solar Blaze"},"hunter.melee":{name:"Knife",charged:"Solar Knife"},"hunter.class":{name:"Roll"},"hunter.super":{name:"Knife of Light"},"warlock.grenade":{name:"Void Sink"},"warlock.melee":{name:"Palm",charged:"Void Palm"},"warlock.class":{name:"Circle of Light"},"warlock.super":{name:"Void Burst"}},SM={emboldened:"Emboldened"},yM={title:"Camera motion",full:"Full",half:"Half",off:"Off"},EM={heading:fM,menuSub:pM,kitTitle:mM,classes:gM,elements:_M,slots:vM,keys:xM,abilities:MM,buffs:SM,comfort:yM};function bM({raycaster:n,strikeRay:e,getWeapon:t,setWeapon:i,cancelEngineReload:r,fp:s,now:o,getSuperCharge:a,setSuperChargeValue:l,episode:u,moment:c,pitchLimit:h}){const d=(v,m,p)=>v<m?m:v>p?p:v;let f=0,g=!1;return{strikeRaycast(v,m,p){const M=n.far;n.set(v,m),n.far=p;const x=e(n);return n.far=M,x},fillMagazine(){let v=r(t());const m=Math.min(v.magazine-v.loaded,v.reserve);v={...v,loaded:v.loaded+m,reserve:v.reserve===1/0?1/0:v.reserve-m},i(v),s.reloading&&s.cutReload(o())},setSuperCharge(v){const m=a()>=1,p=d(v,0,1);l(p),!m&&p>=1&&u.fire("flag","super-ready")},notePitch(v){c.active&&!g&&(f=v),g=c.active},pitchWindow(){if(!c.active)return[-h,h];const[v,m]=c.pitchLimits;return[Math.min(v,f),Math.max(m,f)]}}}const wM={cloth:"#8a1c1c",clothDark:"#5e1414",armour:"#3a3b40",armour2:"#4a4c52",suit:"#26262a",face:"#161618",metal:"#2a2c30",cap:"#3b2a20",rust:"#7a4a2a",bone:"#d6ccb4",mantle:"#4a3526",glowEye:"#8ec8f2",glowArc:"#9fd8ff",shell:"#261b3a",rim:"#3a2d58",shell2:"#1a1428",bezel:"#3b3550",lens:"#1a1238",glowViolet:"#b36bff",hull:"#8a2e22",under:"#4d1a14",gun:"#2a2624",glowShank:"#cfe8ff",glowExhaust:"#ff9a3c"};function Bo(n){const e={},t=[],i=(D,_,y,P,I,k,U,N,X=0,G=0,ae=0)=>t.push([D,_,y,P,I,k,U,N,X,G,ae]),r=n.leg,s=1.25,o=1.05,a=-.55,l=-.55+s,u=-.55+s-o,c=.06+r.thigh*Math.cos(a)+r.shin*Math.cos(l)+r.foot*Math.cos(u),[h,d,f]=n.pelvis;e.pelvis={at:[0,c,0]},i("pelvis",h,d,f,0,0,0,"suit");for(const D of[-1,1]){const _=D<0?"L":"R";e["thigh"+_]={parent:"pelvis",at:[D*n.hipX,-.03,0],rot:[a,0,0]},e["shin"+_]={parent:"thigh"+_,at:[0,-r.thigh,0],rot:[s,0,0]},e["foot"+_]={parent:"shin"+_,at:[0,-r.shin,0],rot:[-o,0,0]},i("thigh"+_,r.w*1.3,r.thigh+.04,r.w*1.45,0,-r.thigh/2,0,"suit"),i("shin"+_,r.w,r.shin+.03,r.w*1.05,0,-r.shin/2,0,"armour"),i("foot"+_,r.w*.85,r.foot,r.w*.85,0,-r.foot/2,0,"suit"),i("foot"+_,r.w*1.3,.05,r.w*3,0,-r.foot,r.w*.9,"armour2",-u,0,0)}const[g,v,m]=n.chest;e.chest={parent:"pelvis",at:[0,d/2+.03,0],rot:[n.hunch,0,0]},i("chest",g,v,m,0,v/2,0,"suit"),i("chest",g*1.1,v*.44,m*1.08,0,v*.74,.01,"armour"),n.rust&&i("chest",g*.42,v*.26,.03,g*.14,v*.4,m/2+.02,"rust"),i("chest",.14,.1,.13,0,v+.03,.05,"suit");const[p,M,x]=n.head;e.head={parent:"chest",at:[0,v+.07,.08],rot:[-n.hunch*.85,0,0]},i("head",p,M,x,0,M/2,0,"armour"),i("head",p*.84,M*.52,.03,0,M*.58,x/2+.012,"face");const E=n.eye;for(const D of[-1,1])for(const _ of[-1,1])i("head",E,E,.02,D*E*.95,M*.6+_*E*.9,x/2+.03,"glowEye");i("head",p*.42,M*.3,x*.36,0,M*.17,x/2+x*.13,"armour2");const C=n.horn;for(const D of[-1,1])i("head",C,.05,.055,D*(p/2+C/2-.02),M*.62,-x*.1,"armour2",0,D*.35,D*.18),i("head",C*.75,.045,.05,D*(p/2+C*.95),M*.62+C*.3,-x*.25,"armour2",0,D*.7,D*.9);if(n.hooks)for(const D of[-1,1])i("head",.05,.07,.05,D*p*.2,M+.035,-x*.1,"armour2");if(n.crownStubs)for(const D of[-1,1])i("head",.045,.14,.045,D*p*.34,M+.06,-x*.22,"bone",-.35,0,D*-.2);const T=n.arm.upper,S=n.arm.fore,A=n.arm.t;for(const D of[-1,1]){const _=D<0?"L":"R";e["arm"+_]={parent:"chest",at:[D*(g/2+A/2),v*.86,0],rot:[-n.hunch+n.armFwd,0,D*.1]},e["fore"+_]={parent:"arm"+_,at:[0,-T,0],rot:[-n.elbow,0,0]},i("arm"+_,A,T+.03,A,0,-T/2,0,"suit"),i("arm"+_,A*1.55,.11,A*1.55,0,-.03,0,"armour"),i("fore"+_,A*1.05,S,A*1.12,0,-S/2,0,"armour")}if(n.lower){const D=T*.7,_=S*.7,y=A*.62;for(const P of[-1,1]){const I=P<0?"L":"R";e["arm2"+I]={parent:"chest",at:[P*(g/2+y/2-.01),v*.34,.03],rot:[-n.hunch+n.lower.fwd,0,P*.3]},e["fore2"+I]={parent:"arm2"+I,at:[0,-D,0],rot:[-n.lower.elbow,0,0]},i("arm2"+I,y,D+.02,y,0,-D/2,0,"suit"),i("fore2"+I,y*1.05,_,y*1.12,0,-_/2,0,"armour"),n.lowerBlades&&(i("fore2"+I,.06,.07,.06,0,-_-.02,0,"metal"),i("fore2"+I,.035,.62,.07,0,-_-.36,0,"glowArc"))}}if(n.caps)for(const D of[-1,1])i("chest",.1,.1,.1,D*(g/2+.035),v*.36,.02,"cap",0,0,D*.6);if(n.pauldron){const[D,_,y]=n.pauldron;for(const P of[-1,1])i("chest",D,_,y,P*(g/2+D*.28),v*.96,0,"armour2",0,0,-P*.28),n.trim&&i("chest",D*1.04,.035,y*1.04,P*(g/2+D*.3),v*.96+_/2,0,"bone",0,0,-P*.28)}if(n.trim&&i("chest",g*.9,.04,.03,0,v*.55,m/2+.035,"bone"),n.pack&&i("chest",.28,.34,.15,0,v*.5,-m/2-.075,"armour2"),n.mantle&&i("chest",g*1.2,.13,m*1.25,0,v+.01,-.02,"mantle"),n.cowl&&(i("head",p+.05,M*.85,.05,0,M*.45,-x/2-.02,"cloth"),i("pelvis",h*.72,.36,.025,0,-.21,f/2+.02,"cloth"),i("pelvis",h*.8,.28,.025,0,-.17,-f/2-.02,"clothDark")),n.cape){const D=n.cape;e.cape={parent:"chest",at:[0,v*D.top,-m/2-.045-(n.pack?.15:0)],rot:[-n.hunch+.06,0,0]},i("cape",D.w,D.len,.03,0,-D.len/2,0,"cloth");const _=D.hem,y=D.w/(_*2);for(let P=0;P<_;P++)i("cape",y,.07+P%2*.07,.028,-D.w/2+y*(2*P+1),-D.len-.035-P%2*.035,0,"clothDark")}if(n.banner&&(e.banner={parent:"chest",at:[.12,v*.9,-m/2-.26],rot:[-n.hunch,0,0]},i("banner",.05,1.05,.05,0,.02,0,"metal"),i("banner",.46,.55,.03,.25,.24,0,"cloth"),i("banner",.46,.07,.035,.25,.04,0,"bone")),n.weapon==="pistol")i("foreR",.065,.2,.1,0,-S-.08,.02,"metal"),i("foreR",.035,.03,.035,0,-S-.19,.02,"glowArc"),i("foreL",.05,.06,.05,0,-S-.02,0,"metal"),i("foreL",.028,.28,.055,0,-S-.19,0,"glowArc");else if(n.weapon==="wire")i("foreR",.1,.32,.13,.04,-S+.06,.02,"armour2"),i("foreR",.07,1.36,.1,.04,-S-.5,.02,"metal"),i("foreR",.03,.26,.035,.04,-S-.42,.08,"glowArc");else if(n.weapon==="shock"){i("foreR",.11,.95,.15,.05,-S-.28,0,"metal");for(const D of[-1,1])i("foreR",.02,.62,.02,.05+D*.05,-S-.3,.085,"glowArc")}return{bones:e,parts:t}}function TM(){const e={core:{at:[0,2.05,0]},eye:{parent:"core",at:[0,0,.621]}},t=[],i=(a,...l)=>t.push([a,...l]);i("core",1.15,1.15*.72,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15*.72,1.15,0,0,0,"shell"),i("core",1.15*.86,1.15*.86,1.15*.6,0,0,0,"rim",0,0,Math.PI/4),i("core",1.15*.62,1.15*.62,.06,0,0,1.15/2+.02,"shell2");const r=1.15*.3,s=1.15*.05,o=1.15/2+.06;return i("core",r,s,.04,0,r/2-s/2,o,"glowViolet"),i("core",r,s,.04,0,-r/2+s/2,o,"glowViolet"),i("core",s,r,.04,-r/2+s/2,0,o,"glowViolet"),i("core",s,r,.04,r/2-s/2,0,o,"glowViolet"),i("core",r-s*2,r-s*2,.03,0,0,o-.012,"lens"),i("core",1.15*.26,.05,.06,-1.15*.13,1.15*.24,o-.005,"bezel",0,0,.35),i("core",.05,1.15*.28,.06,1.15*.25,-1.15*.02,o-.005,"bezel"),i("core",1.15*.24,.05,.06,-1.15*.05,-1.15*.24,o-.005,"bezel",0,0,-.2),{bones:e,parts:t}}function AM(){const n={hull:{at:[0,1.9,0]}},e=[],t=(...i)=>e.push(["hull",...i]);t(.9,.5,.75,0,0,0,"hull"),t(.8,.12,.66,0,-.29,0,"under"),t(.56,.3,.04,0,.02,.39,"face"),t(.1,.1,.03,0,.1,.415,"glowShank");for(const i of[-1,1])t(.065,.065,.03,i*.14,-.06,.415,"glowShank"),t(.36,.26,.42,i*.62,.16,-.02,"hull",0,0,i*.22),t(.26,.05,.26,i*.64,.31,-.02,"face",0,0,i*.22),t(.2,.04,.2,i*.6,0,-.02,"glowExhaust"),t(.05,.8,.08,i*.3,-.62,-.22,"under",.45,0,i*.35);return t(.12,.12,.46,0,-.38,.22,"gun"),t(.06,.06,.04,0,-.38,.47,"glowArc"),{bones:n,parts:e}}const ch={hunch:.18,leg:{thigh:.55,shin:.62,foot:.4,w:.12},hipX:.16,pelvis:[.44,.22,.3],chest:[.66,.6,.4],head:[.32,.3,.36],eye:.036,horn:.32,hooks:!0,arm:{upper:.46,fore:.44,t:.11},armFwd:.35,elbow:1.9,lower:{fwd:.55,elbow:1.2},pauldron:[.3,.16,.36],pack:!0,cape:{w:.78,len:1.2,top:.98,hem:4},weapon:"shock"},ri=n=>n.userData.rest,zo=(n,e,t,i,r)=>{n&&(n.rotation.x=ri(n).r.x+Math.sin(e*i+r)*t)},qr=(n,e,t={})=>({id:n,...e,palette:wM,...t}),Ho=["cape","banner"],uh={colour:"#5fb8ff",element:"arc",opacity:.22,pad:1.12,regenDelay:4,regenSeconds:1.5},RM=[{id:"dreg",name:"Dreg",faction:"fallen",rank:"minor",tier:"fodder",body:"biped",health:{max:80},crit:{bones:["head"]},noHit:Ho,ether:!0,spec:qr("dreg",Bo({hunch:.55,leg:{thigh:.34,shin:.4,foot:.27,w:.07},hipX:.1,pelvis:[.26,.16,.2],chest:[.36,.42,.26],head:[.2,.19,.28],eye:.028,horn:.14,arm:{upper:.3,fore:.3,t:.06},armFwd:.2,elbow:1.35,caps:!0,cowl:!0,rust:!0,weapon:"pistol"})),idle:(n,e,t)=>{const i=Math.floor(n*1.3+t.phase*3);e.head.rotation.y=ri(e.head).r.y+Math.sin(i*12.9898)*.55,e.pelvis.position.y=ri(e.pelvis).p.y+Math.sin(n*6+t.phase)*.012}},{id:"vandal",name:"Vandal",faction:"fallen",rank:"minor",tier:"skirmisher",body:"biped",health:{max:150},crit:{bones:["head"]},noHit:Ho,ether:!0,spec:qr("vandal",Bo({hunch:.35,leg:{thigh:.45,shin:.55,foot:.36,w:.085},hipX:.12,pelvis:[.32,.18,.24],chest:[.46,.5,.3],head:[.26,.24,.32],eye:.032,horn:.24,hooks:!0,arm:{upper:.38,fore:.36,t:.075},armFwd:.3,elbow:1.85,lower:{fwd:.15,elbow:.55},cape:{w:.42,len:.78,top:.95,hem:3},weapon:"wire"})),idle:(n,e,t)=>{e.chest.rotation.x=ri(e.chest).r.x+Math.sin(n*1.6+t.phase)*.025,zo(e.cape,n,.05,1.3,t.phase)}},{id:"captain",name:"Captain",faction:"fallen",rank:"elite",tier:"heavy",body:"biped",health:{max:320},shield:{...uh,amount:160},crit:{bones:["head"]},noHit:Ho,ether:!0,spec:qr("captain",Bo(ch)),idle:(n,e,t)=>{e.head.rotation.z=ri(e.head).r.z+Math.sin(n*.5+t.phase)*.08,zo(e.cape,n,.035,.9,t.phase)}},{id:"boss",name:"Boss Captain",faction:"fallen",rank:"boss",tier:"heavy",body:"biped",health:{max:1100},shield:{...uh,amount:400},crit:{bones:["head"]},noHit:Ho,ether:!0,spec:qr("boss",Bo({...ch,horn:.36,crownStubs:!0,trim:!0,mantle:!0,banner:!0,lowerBlades:!0,lower:{fwd:.55,elbow:1.75},cape:{w:.8,len:1.5,top:.98,hem:5}}),{scale:1.2}),idle:(n,e,t)=>{e.head.rotation.z=ri(e.head).r.z+Math.sin(n*.45+t.phase)*.07,zo(e.cape,n,.03,.8,t.phase),zo(e.banner,n,.04,1.1,t.phase+1)}},{id:"servitor",name:"Servitor",faction:"fallen",rank:"elite",tier:"heavy",body:"servitor",health:{max:500},crit:{keys:["glowViolet","lens"]},aura:{bone:"core",at:[0,0,0],r:.95,colour:"#b08cff",opacity:.12},spec:qr("servitor",TM()),idle:(n,e,t)=>{e.core.position.y=ri(e.core).p.y+Math.sin(n*Math.PI+t.phase)*.1,e.core.rotation.z=ri(e.core).r.z+Math.sin(n*.35+t.phase)*.12}},{id:"shank",name:"Shank",faction:"fallen",rank:"minor",tier:"skirmisher",body:"shank",health:{max:60},crit:null,spec:qr("shank",AM()),idle:(n,e,t)=>{e.hull.position.y=ri(e.hull).p.y+Math.sin(n*2.6+t.phase)*.05,e.hull.rotation.z=ri(e.hull).r.z+Math.sin(n*1.3+t.phase)*.06}}],hh=Math.PI/180,Wd=Math.tan(Math.PI/8),CM=Math.tan(Math.PI/6),Xd={gunmetal:"#2d3034",blued:"#252b33",iron:"#3a3d40",steel:"#7d858a",plasteel:"#a9b3b8",olive:"#5f6b4a",wood:"#6b5238",rubber:"#1f2226",leather:"#5a3e2b",cord:"#8a7a5a",cloth:"#bdb29a",brass:"#a8843c",bore:"#0d0e10",reticle:"#0d0e10",glowDot:"#ff5a36",glowBead:"#f2e6c0"},LM="#9fc4d0",yr=(n,e,t,i,r,s,o)=>[0,1,2,3].map(a=>[n,2*e,2*e*Wd,t,i,r,s,o,0,0,a*Math.PI/4]),dh=(n,e,t,i,r,s,o)=>[0,1,2].map(a=>[n,2*e*CM,2*e,t,i,r,s,o,0,0,a*Math.PI/3]);function Go(n,e,t,i,r,s,o,a){const l=[],u=e+t/2,c=2*(e+t)*Wd+6e-4;for(let h=0;h<8;h++){const d=h*Math.PI/4;l.push([n,c,t,i,r+Math.sin(d)*u,s+Math.cos(d)*u,o,a,0,0,-d])}return l}const yi=(n,e,t,i)=>({bone:n,at:e,fingers:t,back:i}),Ns=(n,e)=>({bone:n,at:e}),PM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,-.105]},bolt:{parent:"body",at:[.03,.052,-.03]}},IM=[["body",.056,.07,.26,0,.045,-.055,"gunmetal"],["body",.058,.012,.2,0,.086,-.07,"olive"],["body",.024,.008,.11,0,.096,-.03,"iron"],["body",.044,.024,.13,0,0,-.01,"gunmetal"],["body",.052,.054,.18,0,.04,-.275,"iron"],["body",.056,.058,.016,0,.04,-.22,"cord"],["body",.056,.058,.016,0,.04,-.275,"cord"],["body",.056,.058,.016,0,.04,-.33,"cord"],...yr("body",.017,.12,0,.047,-.425,"blued"),...yr("body",.02,.01,0,.047,-.395,"steel"),...yr("body",.02,.01,0,.047,-.455,"steel"),["body",.018,.018,.045,0,.047,-.5075,"iron"],["body",.024,.024,.012,0,.047,-.536,"steel"],["body",.05,.02,.07,0,0,-.105,"gunmetal"],["body",.012,.008,.06,0,-.028,-.04,"iron"],["body",.012,.03,.008,0,-.014,-.068,"iron"],["body",.006,.022,.008,0,-.008,-.035,"steel"],["body",.04,.105,.048,0,-.048,.028,"rubber",-.3,0,0],["body",.04,.068,.15,0,.028,.15,"wood"],["body",.044,.088,.018,0,.022,.234,"leather"],["body",.042,.012,.08,0,.066,.16,"cord"],["body",.002,.004,.012,-.029,.045,-.006,"steel",.5,0,0],["body",.002,.004,.012,-.029,.045,-.014,"steel",-.5,0,0],["body",.03,.012,.05,0,.106,-.01,"iron"],["body",.004,.034,.012,-.016,.129,-.03,"iron"],["body",.004,.034,.012,.016,.129,-.03,"iron"],["body",.036,.004,.012,0,.148,-.03,"iron"],["body",.038,.008,.014,0,.115,-.03,"cloth"],["body",.028,.028,.002,0,.13,-.03,"glass"],["body",.0012,.0012,8e-4,0,.13,-.0315,"glowDot"],["bolt",.006,.018,.03,0,0,0,"steel"],["mag",.034,.125,.06,0,-.062,.004,"gunmetal",.1,0,0],["mag",.04,.012,.068,0,-.128,-.003,"steel",.1,0,0],["mag",.036,.02,.062,0,-.03,.002,"olive",.1,0,0]],DM={frame:{at:[0,0,0]},crane:{parent:"frame",at:[-.017,.022,-.02]},cyl:{parent:"crane",at:[.017,.022,0]},block:{parent:"cyl",at:[0,0,.03]},hammer:{parent:"frame",at:[0,.052,.022]}},UM=[["frame",.034,.04,.24,0,.058,-.172,"blued"],["frame",.028,.03,.13,0,.023,-.227,"blued"],["frame",.04,.074,.012,0,.042,-.15,"cord"],["frame",.036,.004,.15,0,.08,-.18,"steel"],["frame",.002,.022,.11,.018,.056,-.1,"plasteel"],["frame",.002,.022,.11,-.018,.056,-.1,"plasteel"],["frame",.012,.012,.003,0,.058,-.2935,"bore"],["frame",.036,.02,.08,0,.006,-.012,"blued"],["frame",.03,.01,.064,0,.073,-.02,"blued"],["frame",.04,.06,.012,0,.04,.018,"blued"],["frame",.024,.012,.02,0,.082,.012,"iron"],["frame",.009,.009,.006,-.0075,.0925,.008,"steel"],["frame",.009,.009,.006,.0075,.0925,.008,"steel"],["frame",.0035,.016,.01,0,.086,-.283,"steel"],["frame",.003,.003,.003,0,.0955,-.281,"glowBead"],["frame",.01,.008,.045,0,-.026,-.028,"blued"],["frame",.01,.028,.008,0,-.012,-.05,"blued"],["frame",.006,.018,.008,0,-.008,-.02,"steel"],["frame",.03,.026,.026,0,.002,.02,"blued"],["frame",.034,.085,.042,0,-.04,.036,"wood",-.35,0,0],["frame",.04,.012,.05,0,-.083,.052,"iron",-.35,0,0],["frame",.004,.01,.014,-.021,.048,.012,"brass"],...dh("cyl",.022,.064,0,0,0,"iron"),["cyl",.006,.004,.058,.0235*Math.cos(Math.PI/6),.0235*Math.sin(Math.PI/6),0,"brass",0,0,-Math.PI/3],["cyl",.008,.008,.05,0,0,-.057,"steel"],["crane",.01,.018,.01,.008,.01,-.056,"blued"],...dh("block",.02,.006,0,0,.002,"brass"),["hammer",.012,.028,.012,0,.012,.004,"blued"],["hammer",.014,.008,.018,0,.026,.012,"steel"]],Nn=.124,N0=.15,NM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,.095]}},FM=[["body",.058,.08,.5,0,.045,.05,"blued"],["body",.062,.028,.44,0,.072,.04,"plasteel"],["body",.064,.04,.15,0,.022,.2,"plasteel"],["body",.064,.1,.02,0,.035,.31,"rubber"],["body",.066,.02,.09,0,.082,.23,"cloth"],["body",.05,.05,.12,0,.052,-.26,"iron"],...yr("body",.02,.26,0,.004,-.25,"blued"),...yr("body",.023,.028,0,.004,-.18,"cloth"),...yr("body",.023,.028,0,.004,-.32,"cloth"),["body",.018,.018,.07,0,.055,-.355,"iron"],["body",.034,.03,.05,0,.055,-.415,"iron"],["body",.036,.004,.008,0,.049,-.405,"bore"],["body",.036,.004,.008,0,.061,-.405,"bore"],["body",.036,.004,.008,0,.049,-.425,"bore"],["body",.036,.004,.008,0,.061,-.425,"bore"],["body",.036,.092,.046,0,-.044,.012,"rubber",-.3,0,0],["body",.01,.008,.07,0,-.024,-.036,"iron"],["body",.01,.026,.008,0,-.01,-.068,"iron"],["body",.006,.02,.008,0,-.008,-.03,"steel"],["body",.046,.016,.072,0,-.002,.095,"blued"],["body",.004,.02,.045,.031,.05,.13,"bore"],["body",.018,.008,.012,0,.09,.118,"iron"],["body",.03,.006,.01,0,.089,.098,"cord"],...Go("body",.025,.004,.006,0,Nn,N0+.003,"rubber"),...Go("body",.024,.005,.02,0,Nn,N0-.01,"blued"),...Go("body",.026,.004,.025,0,Nn,.1175,"iron"),...Go("body",.03,.006,.02,0,Nn,.095,"blued"),["body",4e-4,.012,4e-4,0,Nn-.01,.088,"reticle"],["body",.016,4e-4,4e-4,-.012,Nn,.088,"reticle"],["body",.016,4e-4,4e-4,.012,Nn,.088,"reticle"],["body",8e-4,8e-4,4e-4,0,Nn,.0877,"glowDot"],["body",.058,.058,.001,0,Nn,.0865,"glass"],...yr("body",.0302,.001,0,Nn,.085,"mask"),["mag",.03,.078,.058,0,-.04,0,"iron"],["mag",.036,.01,.064,0,-.083,0,"steel"],["mag",.032,.018,.06,0,-.016,0,"plasteel"]],xa=[{id:"auto",label:"Auto rifle",damage:21,precision:1.5,ammoType:"primary",stats:{magazine:30,rpm:600,reserve:1/0,auto:!0},spec:{id:"auto",bones:PM,parts:IM},sight:{kind:"reflex",rear:[0,.13,.012],front:[0,.13,-.0315],eyeRelief:.11},sockets:{muzzle:Ns("body",[0,.047,-.542]),port:Ns("body",[.03,.052,-.03]),rightGrip:yi("body",[.034,-.02,.093],[0,-.29,-.96],[1,0,0]),leftHold:yi("body",[-.056,-.004,-.278],[1,0,0],[0,-1,0]),leftMag:yi("mag",[0,-.15,.047],[0,0,-1],[0,-1,0])},hip:{at:[.17,-.165,-.42],rot:[0,-2,0]},zoom:1.6,adsTime:.25,readyTime:.31,stowTime:.28,adsSlide:.05,casings:!0,recoil:{aim:{pitch:.26,direction:72,climbCap:3.5,hold:.12,halflife:.1},kick:{rise:[1.2,.35],back:[6,1],roll:[.8,.15],tp:.028},flash:.09},reload:{clip:1.9,seat:.55,gun:[[0,0,0,0,0,0,0],[.12,-30,20,30,6,0,-28],[.64,-30,20,30,6,0,-28],[.82,-15,10,15,3,0,-14],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.06,"leftHold",.6],[.16,"leftMag",.9],[.3,"offLeft",.9],[.36,"offLeft",.9],[.48,"belowMag",.9],[.55,"leftMag",.9],[.6,"leftMag",.3],[.8,"leftHold",.6]],mag:[[0,0],[.16,1],[.55,0]],events:[[.16,"grab"],[.55,"seat"],[.6,"slap"],[1,"settle"]]}},{id:"hand",label:"Hand cannon",damage:55,precision:1.5,ammoType:"special",reserveCap:24,stats:{magazine:8,rpm:140,reserve:12,auto:!1},spec:{id:"hand",bones:DM,parts:UM},sight:{kind:"iron",rear:[0,.0955,.008],front:[0,.0955,-.281],eyeRelief:.25},sockets:{muzzle:Ns("frame",[0,.058,-.295]),rightGrip:yi("frame",[.034,-.011,.097],[0,-.34,-.94],[1,0,0]),cylFront:yi("cyl",[0,.045,-.06],[0,0,1],[0,1,0]),leftBlock:yi("block",[0,.05,.024],[0,-1,0],[0,0,1])},oneHanded:!0,hip:{at:[.15,-.14,-.38],rot:[1,-3,0]},zoom:1.4,adsTime:.21,readyTime:.26,stowTime:.29,adsSlide:.06,casings:!1,recoil:{aim:{pitch:1.8,direction:85,hold:.06,halflife:.05},kick:{rise:[6,2],back:[22,2],roll:[1.5,.3],tp:.045},flash:.14},reload:{clip:1.85,seat:.8,gun:[[0,0,0,0,0,0,0],[.14,20,20,0,24,0,-15],[.35,10,25,40,38,-5,-15],[.62,10,25,40,38,-5,-15],[.69,-100,20,40,10,0,-80],[.9,-100,20,40,10,0,-80],[.97,0,0,0,6,0,0],[1,0,0,0,0,0,0]],left:[[0,"offLeft",.5],[.18,"offLeft",.5],[.33,"cylFront",.4],[.52,"cylFront",.4],[.58,"offLeft",.8],[.66,"offLeft",.8],[.75,"leftBlock",.8],[.8,"leftBlock",.8],[.9,"offLeft",.3]],crane:[[0,0],[.06,0],[.14,95],[.9,95],[.95,0]],ejector:[[0,0],[.4,0],[.46,22],[.52,0]],cylTurn:[[0,0],[.9,0],[.97,60]],block:[[0,0],[.6,1],[.8,0]],events:[[.06,"latch"],[.46,"eject"],[.6,"newBlock"],[.8,"seat"],[.95,"snap"],[1,"settle"]]}},{id:"pulse",label:"Pulse rifle",damage:15,precision:1.5,ammoType:"primary",stats:{magazine:21,rpm:900,reserve:1/0,auto:!0,burst:3},burstCycle:.4,spec:{id:"pulse",bones:NM,parts:FM},sight:{kind:"scope",rear:[0,Nn,N0],front:[0,Nn,.0877],eyeRelief:.06},sockets:{muzzle:Ns("body",[0,.055,-.442]),port:Ns("body",[.031,.05,.13]),rightGrip:yi("body",[.034,-.022,.078],[0,-.29,-.96],[1,0,0]),leftHold:yi("body",[-.056,-.032,-.262],[1,0,0],[0,-1,0]),leftMag:yi("mag",[0,-.104,.05],[0,0,-1],[0,-1,0])},hip:{at:[.16,-.175,-.45],rot:[0,-2,0]},zoom:2.3,adsTime:.31,readyTime:.31,stowTime:.28,adsSlide:.08,casings:!0,recoil:{aim:{pitch:.34,direction:90,hold:.03,halflife:.045},kick:{rise:[1.6,.5],back:[7,0],roll:[.6,.15],tp:.022},flash:.06},reload:{clip:1.9,seat:.58,gun:[[0,0,0,0,0,0,0],[.16,-50,30,60,8,-14,-42],[.4,-60,20,80,10,-16,-46],[.46,-50,30,60,8,-14,-42],[.68,-50,30,60,8,-14,-42],[.84,-25,15,30,4,-7,-20],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.1,"leftHold",.6],[.26,"leftMag",.9],[.4,"offLeft",.9],[.44,"offLeft",.9],[.53,"belowMag",.9],[.58,"leftMag",.9],[.62,"leftMag",0],[.66,"leftMag",0],[.82,"leftHold",.6]],mag:[[0,0],[.26,1],[.58,0]],events:[[.26,"grab"],[.58,"seat"],[1,"settle"]]}}],fh={offLeft:{at:[-.16,-.62,-.3],fingers:[.3,.6,-1],back:[-1,0,0]},offRight:{at:[.2,-.62,-.28],fingers:[-.3,.6,-1],back:[1,0,0]}},OM=.05,kM=(n,e)=>2*Math.atan(Math.tan(n*hh/2)/e)/hh,ph=["glass","mask"],BM=new un({color:LM,transparent:!0,opacity:.12,depthWrite:!1}),zM=new un({colorWrite:!1}),mh=new L,Fs=new L,Os=new L,HM=new Ve;function F0(n,e,t=new zt){return Os.set(...n).normalize().negate(),Fs.set(...e),Fs.addScaledVector(Os,-Fs.dot(Os)).normalize(),mh.crossVectors(Fs,Os),t.setFromRotationMatrix(HM.makeBasis(mh,Fs,Os))}function GM(n,e,t){const i=new L(...n),s=new L(...e).clone().sub(i).normalize(),o=new L(0,1,0),a=o.addScaledVector(s,-o.dot(s)).normalize(),l=s.clone().negate(),u=new L().crossVectors(a,l),c=new zt().setFromRotationMatrix(new Ve().makeBasis(u,a,l)).invert(),h=new L(0,0,-t).sub(i.clone().applyQuaternion(c));return{q:c,p:h}}function qd(n,e={}){const t=n.spec,i=lo({id:t.id,bones:t.bones,parts:t.parts.filter(o=>!ph.includes(o[7])),palette:Xd},{solidMaterial:e.solidMaterial,glowMaterial:e.glowMaterial}),r=[];if(!e.icon)for(const o of ph){const a=new Map;for(const l of t.parts){if(l[7]!==o)continue;const u=new an(l[1],l[2],l[3]);u.deleteAttribute("uv"),u.applyMatrix4(_a(l)),a.has(l[0])||a.set(l[0],[]),a.get(l[0]).push(u)}for(const[l,u]of a){const c=new vt(u.length===1?u[0]:yc(u,!1),o==="mask"?zM:BM);c.name=`${t.id}:${o}`,o==="mask"&&(c.renderOrder=-1),i.bones[l].add(c),r.push(c)}}const s={};for(const[o,a]of Object.entries(n.sockets??{})){const l=new Ht;l.name=`${t.id}:${o}`,l.position.set(...a.at),a.fingers&&F0(a.fingers,a.back,l.quaternion),i.bones[a.bone].add(l),s[o]=l}for(const o of[...i.meshes,...r])o.frustumCulled=!1;return i.root.updateMatrixWorld(!0),{group:i.root,rig:i,bones:i.bones,sockets:s,extras:r,weapon:n}}const O0={glove:"#3b2f27",gloveDark:"#2a221c",plate:"#595d60",plateLight:"#a9b3b8",steel:"#7d858a",bandRust:"#8a4a2b",bandCloth:"#bdb29a",knit:"#4f6660",bracer:"#5a3e2b",cord:"#8a7a5a",sleeve:"#6e6450",sleeveDark:"#4f483a",undersuit:"#2b2e31",glowElement:"#ffffff"},VM={hand:{at:[0,0,0]},fingers:{parent:"hand",at:[.004,0,-.098]},fingersTip:{parent:"fingers",at:[0,0,-.045]},thumb:{parent:"hand",at:[-.04,-.008,-.03],rot:[0,.6,0]},thumbTip:{parent:"thumb",at:[0,0,-.045]}},WM=[["hand",.085,.032,.098,0,0,-.049,"glove"],["fingers",.08,.026,.047,0,0,-.022,"glove"],["fingersTip",.077,.024,.04,0,0,-.019,"gloveDark"],["thumb",.026,.025,.047,0,0,-.022,"glove"],["thumbTip",.023,.022,.036,0,0,-.017,"gloveDark"]],gh={titanPlate:[["hand",.092,.014,.055,0,.022,-.062,"plate"],["hand",.07,.006,.03,0,.03,-.028,"plateLight"],["hand",.112,.102,.092,0,0,.036,"plate"],["fingers",.082,.008,.04,0,.016,-.022,"plate"]],hunterCloak:[...[-.03,-.01,.01,.03].map(n=>["hand",.016,.01,.018,n,.02,-.09,"steel"]),["hand",.094,.09,.012,0,0,.02,"bandRust"],["hand",.094,.09,.012,0,0,.036,"bandCloth"]],warlockRobe:[["hand",.098,.092,.12,0,0,.07,"bracer"],["hand",.102,.096,.01,0,0,.04,"cord"],["hand",.102,.096,.01,0,0,.1,"cord"],["hand",.004,.004,.08,0,.017,-.05,"cord"]]},XM={titanPlate:[["fingers",.07,.004,.024,0,.0215,-.016,"glowElement"]],hunterCloak:[["hand",.078,.004,.008,0,.0185,-.074,"glowElement"]],warlockRobe:[["hand",.056,.004,.06,0,-.0175,-.05,"glowElement"],["hand",.004,.0025,.06,.022,.01725,-.05,"glowElement"]]},vl={titanPlate:{fore:[.105,.1,"plate"],upper:[.12,.115,"undersuit"]},hunterCloak:{fore:[.08,.076,"knit"],upper:[.105,.1,"undersuit"]},warlockRobe:{fore:[.115,.105,"sleeve"],upper:[.13,.12,"sleeveDark"]}},_h={upper:.32,fore:.3},qM={right:[.26,-.58,.02],left:[-.3,-.62,0]},YM={right:[1,-1,.5],left:[-1,-1,.5]};function $M(n,e){const t=gh[n]?n:"hunterCloak",i=[...WM,...gh[t],...XM[t]],r=e==="left",s=Object.fromEntries(Object.entries(VM).map(([o,a])=>[o,{...a,at:r?[-a.at[0],a.at[1],a.at[2]]:a.at,...a.rot?{rot:r?[a.rot[0],-a.rot[1],-a.rot[2]]:a.rot}:{}}]));return{id:`hand-${e}-${n}`,bones:s,parts:i.map(([o,a,l,u,c,h,d,f,g=0,v=0,m=0])=>r?[o,a,l,u,-c,h,d,f,g,-v,-m]:[o,a,l,u,c,h,d,f,g,v,m]),palette:O0}}const gt=Math.PI/180,vh={x:0,y:0,z:0,pitch:0,yaw:0,roll:0},k0=50,Vo=.6,xh=.12,cr=.15,Wo={y:-.22,z:.04,pitch:-30,roll:25},ks={x:.004,halflife:.07},ur={yaw:2.5*gt,pitch:2*gt,roll:4*gt,x:.012},KM=1.5,jM=4.2,ZM=.045,xl=.7,Mh=9.8;function JM(){const n=new Map;return e=>(n.has(e)||n.set(e,new Di({color:e,roughness:.85,metalness:0})),n.get(e))}function QM(n={}){const e=n.hipFov??70,t=new Mn;t.name="first-person";const i=new Mn,r=new Mn,s=new Mn;t.add(i),i.add(r),r.add(s);const o=new Di({vertexColors:!0,roughness:.7,metalness:0}),a=new un({vertexColors:!0}),l=xa.map((Q,te)=>{const ce=qd(Q,{solidMaterial:o,glowMaterial:a});ce.group.visible=te===0,s.add(ce.group);const le=GM(Q.sight.rear,Q.sight.front,Q.sight.eyeRelief);return{...ce,w:Q,aim:le,aimFwd:le.p.clone().add(new L(0,0,-Q.adsSlide)),hipP:new L(...Q.hip.at),hipQ:new zt().setFromEuler(new Qt(Q.hip.rot[0]*gt,Q.hip.rot[1]*gt,Q.hip.rot[2]*gt,"YXZ")),front:new L(...Q.sight.front)}}),u=JM(),c=new an(1,1,1);let h=n.classId??"hunterCloak";const d={};function f(){var Q;for(const te of["right","left"]){const ce=d[te];ce&&(t.remove(ce.rig.root,ce.upper,ce.fore),ce.rig.dispose());const le=$M(h,te),be=co[(Q=Hn[h])==null?void 0:Q.element];be&&(le.palette={...le.palette,glowElement:be.glow});const Be=lo(le,{solidMaterial:o,glowMaterial:a});for(const rt of Be.meshes)rt.frustumCulled=!1;Be.glow&&(Be.glow.visible=!1);const ot=vl[h]??vl.hunterCloak,Et=new vt(c,u(O0[ot.upper[2]])),pt=new vt(c,u(O0[ot.fore[2]]));t.add(Be.root,Et,pt),d[te]={rig:Be,upper:Et,fore:pt,look:ot}}}f();const g={solidMaterial:o,glowMaterial:a};let v={};function m(){var te,ce;for(const le of Object.values(v))(te=le.group.parent)==null||te.remove(le.group),le.dispose();if(v={},!n.buildProp)return;const Q=Hn[h];if(Q)for(const le of["grenade","melee","class","super"]){const be=(ce=rh[Q[le]])==null?void 0:ce.propKind;!be||v[be]||(v[be]=n.buildProp(be,Q.element,g),d.left.rig.bones.hand.add(v[be].group))}}m();const p=new Mn,M=(Q,te=1)=>new un({color:Q,transparent:!0,opacity:te,depthWrite:!1,blending:Ks,toneMapped:!1}),x=new vt(new an(.03,.03,.004),M(16773584)),E=new an(.012,.004,1).translate(0,0,-.5),C=[0,1,2,3].map(Q=>{const te=new Mn;te.rotation.z=Q*Math.PI/2;const ce=new vt(E,M(16757575,.9));return ce.rotation.y=.35,te.add(ce),{pivot:te,petal:ce}});p.add(x,...C.map(Q=>Q.pivot)),p.visible=!1,s.add(p);const T=new an(.009,.009,.024),S=new Di({color:Xd.brass,roughness:.5,metalness:0}),A=Array.from({length:16},()=>{const Q=new vt(T,S);return Q.visible=!1,Q.frustumCulled=!1,t.add(Q),{mesh:Q,age:xl,vel:new L,spin:new L}});let D=0;const _=new oo(.023,.023,.006,6).rotateX(Math.PI/2),y={mesh:new vt(_,S),age:1,vel:new L,spin:new L};y.mesh.visible=!1,y.mesh.frustumCulled=!1,t.add(y.mesh);let P=0,I=null,k=null,U=null,N=null;const X=new zt,G=new Qt(0,0,0,"YXZ"),ae=new L,re={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};let ie=0;const Me={p:new L,q:new zt,curl:.6,shoulder:0,cam:[0,0,0,0,0,0]};let Ce=!1,z=0,Y=e;const K={pitch:0,yaw:0},Z={rise:{x:0,v:0},roll:{x:0,v:0},back:{x:0,v:0}},ge={yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0},x:{x:0,v:0}},Te={x:0,v:0},ke={x:0,v:0};let ze=0,qe=0,F=-1/0,kt=0,je=-1/0,Ze=0,De=0,lt=[],Ne=0;const R={speed:0,airborne:!1},b=()=>l[P],V=Q=>U?(Q-U.at)/l[U.gun].w.reload.clip:0,j=new L,ne=new zt,J=new zt,Ae=new Qt(0,0,0,"YXZ"),ue=new L,fe=new Ve,Ye=new Ve,se=new L(1,1,1),he=[],Ue=new L,Fe=new L,ye=new zt;function Ke(Q,te,ce,le,be=0){const Be=Q.w.sockets[te],ot=Q.sockets[te],Et=Q.bones[Be.bone];if(Et.parent&&Et.parent.isBone&&(Be.bone==="mag"||Be.bone==="block")){const pt=Et.userData.rest;fe.copy(Et.parent.matrixWorld),Ue.copy(pt.p),Ue.y-=be,fe.multiply(Ye.compose(Ue,ye.setFromEuler(pt.r),se)),fe.multiply(Ye.compose(ot.position,ot.quaternion,se))}else ot.updateWorldMatrix(!1,!1),fe.copy(ot.matrixWorld);fe.decompose(ce,le,Fe)}function Oe(Q,te,ce,le){if(fh[te]){const be=fh[te];ce.set(...be.at),F0(be.fingers,be.back,le);return}if(te==="belowMag"){Ke(Q,"leftMag",ce,le,OM);return}Ke(Q,te,ce,le)}const dt=Q=>Q.w.oneHanded?"offLeft":"leftHold";function B(Q,te){return te>=Q.readyStart?1-ii((te-Q.readyStart)/b().w.readyTime):xr((te-Q.lowerAt)/Q.clip.down)}const me={p:new L,q:new zt};function $(Q,te,ce,le){if(te==="grip"){ce.copy(me.p),le.copy(me.q);return}const be=Xx[te];if(be){ce.set(...be.at),F0(be.fingers,be.back,le);return}Oe(Q,te,ce,le)}const ee={position:new L,quaternion:new zt};function _e(Q,te,ce,le){const be=Q.bones[te],Be=Q.sockets[ce];fe.compose(le.position,le.quaternion,se),Ye.compose(Be.position,Be.quaternion,se).invert(),fe.multiply(Ye),Ye.copy(be.parent.matrixWorld).invert(),Ye.multiply(fe).decompose(be.position,be.quaternion,Fe)}const ve=new L;function Je(Q,te,ce,le=0){const be=j.set(...qM[te]);le>0&&ih[te]&&be.lerp(ve.set(...ih[te]),le);const Be=_h.upper,ot=_h.fore,Et=ue.copy(ce).sub(be),pt=At(Et.length(),Math.abs(Be-ot)+.001,Be+ot-.001),rt=Et.normalize(),fn=new L(...YM[te]);fn.addScaledVector(rt,-fn.dot(rt)).normalize();const w=(Be*Be+pt*pt-ot*ot)/(2*Be*pt),O=Math.sqrt(Math.max(0,1-w*w)),W=be.clone().addScaledVector(rt,Be*w).addScaledVector(fn,Be*O);Kt(Q.upper,be,W,Q.look.upper,fn),Kt(Q.fore,W,ce,Q.look.fore,fn)}const Lt=new L,Wt=new L,$e=new L;function Kt(Q,te,ce,le,be){$e.copy(ce).sub(te);const Be=$e.length();$e.divideScalar(Be||1),Wt.copy(be).addScaledVector($e,-be.dot($e)).normalize(),Lt.crossVectors(Wt,$e),Q.quaternion.setFromRotationMatrix(fe.makeBasis(Lt,Wt,$e)),Q.position.copy(te).add(ce).multiplyScalar(.5),Q.scale.set(le[0],le[1],Be+.04)}function Gn(Q){const te=Q.sockets.port;if(!te)return;const ce=A[D];D=(D+1)%A.length,te.getWorldPosition(ce.mesh.position);const le=Mr(kt*3.1);ce.vel.set(1.6+.4*(1+le),1.2+.3*(1-le),.3+.15*(1+le)),ce.spin.set(12*le,9,14*-le),ce.mesh.quaternion.copy(i.quaternion),ce.age=0,ce.mesh.visible=!0}const Vn={rig:t,guns:l,recoil:K,get active(){return P},get adsE(){return z},get worldFov(){return Y},get magnification(){return Cn(1,b().w.zoom,z)},get swapping(){return!!I},get dipping(){return!!k},get busy(){return!!I||!!k||!!N},get acting(){return!!N},get lowered(){return ie},get actionId(){return N?N.id:null},get actionT(){return N?At((Ne-N.at)/N.seconds,0,1):0},get camOffset(){return re},get props(){return v},get reloading(){return!!U&&!U.cutAt},get classId(){return h},setAim(Q){Ce=!!Q},setClass(Q){Q===h||!vl[Q]||(h=Q,N=null,f(),m(),Vn.update(0,Ne,R))},requestSwap(Q,te){if(!l[Q])return!1;if(I){if(I.phase==="stow")return I.to=Q,!0;if(Q===P)return!1;const ce=At((te-I.at)/b().w.readyTime,0,1),le=1-ii(ce);return I={phase:"stow",at:te-Math.sqrt(le)*b().w.stowTime,to:Q},!0}return Q===P?!1:(Vn.cutReload(te),I={phase:"stow",at:te,to:Q},!0)},startReload(Q){U={at:Q,gun:P,lastT:0,cutAt:null},lt=[]},cutReload(Q){U&&U.cutAt===null&&(U.cutAt=Q)},dip(Q){Vn.cutReload(Q);let te=0;if(k){const ce=(Q-k.at)/cr;te=ce<1?xr(ce):1-ii((Q-k.at-cr)/b().w.readyTime)}k={at:Q-Math.sqrt(te)*cr}},act(Q,te,ce,le={}){const be=rh[Q];if(!be||!(ce>0))return!1;Vn.cutReload(te);let Be=0;if(k){const Et=(te-k.at)/cr;Be=Et<1?xr(Et):1-ii((te-k.at-cr)/b().w.readyTime)}N&&(Be=Math.max(Be,B(N,te)));const ot=N?{p:Me.p.clone(),q:Me.q.clone(),curl:Me.curl,shoulder:Me.shoulder,cam:Me.cam.slice()}:null;return k=null,N={id:Q,clip:be,at:te,seconds:ce,charged:!!le.charged,from:ot,lowerAt:te-Math.sqrt(At(Be,0,1))*be.down,readyStart:be.tp?Math.max(te+be.down,te+ce-b().w.readyTime):te+be.ready*ce},!0},onShot(Q){const te=b(),ce=te.w.recoil,le=Cn(1,te.w.zoom,z);kt++,F=Q,je=Q,te.w.id==="hand"&&Ze++;const be=ce.aim.pitch*gt/le,Be=K.pitch;K.pitch=ce.aim.climbCap?Math.max(Be,Math.min(Be+be,ce.aim.climbCap*gt/le)):Be+be;const ot=ce.aim.direction,Et=Math.sin((ot+5)*Math.PI/10)*(100-ot)/100,pt=(100-ot)/100;K.yaw+=-(Et+Mr(kt)*pt)*.5*be;const rt=ce.kick.tp;Z.rise.v+=Us(Cn(ce.kick.rise[0],ce.kick.rise[1],z)*gt,rt),Z.back.v+=Us(Cn(ce.kick.back[0],ce.kick.back[1],z)/1e3,rt),Z.roll.v+=Us(Cn(ce.kick.roll[0],ce.kick.roll[1],z)*gt*Mr(kt+17),rt),p.userData.at=Q,p.userData.n=kt,te.w.casings&&Gn(te)},update(Q,te,ce={}){const le=Math.max(0,Q);Ne=te,R.speed=ce.speed??0,R.airborne=!!ce.airborne;let be=0;if(I&&I.phase==="stow"){const xe=(te-I.at)/b().w.stowTime;xe>=1?(l[P].group.visible=!1,P=I.to,l[P].group.visible=!0,I={phase:"ready",at:te,to:P},Z.rise.x=Z.rise.v=Z.back.x=Z.back.v=Z.roll.x=Z.roll.v=0,be=1):be=xr(xe)}if(I&&I.phase==="ready"){const xe=(te-I.at)/b().w.readyTime;xe>=1?I=null:be=Math.max(be,1-ii(xe))}if(k){const xe=(te-k.at)/cr;if(xe<1)be=Math.max(be,xr(xe));else{const ut=(te-k.at-cr)/b().w.readyTime;ut>=1?k=null:be=Math.max(be,1-ii(ut))}}let Be=0,ot=0;if(N){const xe=N,ut=(te-xe.at)/xe.seconds;Be=At(ut,0,1),be=Math.max(be,B(xe,te)),ot=xe.from?1-ii((te-xe.at)/xh):0,te>=xe.readyStart+b().w.readyTime&&(N=null)}ie=be;let Et=0,pt=0,rt=1;if(U){const xe=l[U.gun].w.reload;if(Et=V(te),U.gun!==P)U=null;else{Ce&&Et>=xe.seat&&Vn.cutReload(te);const ut=U.cutAt===null?1/0:(U.cutAt-U.at)/xe.clip;pt=Math.min(Et,ut,1);for(const[Pt,po]of xe.events){if(Pt<=U.lastT||Pt>pt||lt.includes(po))continue;lt.push(po);const Ca={seat:[1.2,4],slap:[.4,0],settle:[.3,0],snap:[2,0],latch:[.6,0],eject:[.8,0]}[po];if(Ca){const Rs=l[U.gun].w.recoil.kick.tp;Z.rise.v+=Us(Ca[0]*gt,Rs),Z.back.v-=Us(Ca[1]/1e3,Rs)}if(po==="eject"){const Rs=b();Rs.bones.block.updateWorldMatrix(!0,!1),Rs.bones.block.matrixWorld.decompose(y.mesh.position,y.mesh.quaternion,ue),y.vel.set(-.4,-.6,.2),y.spin.set(4,7,2),y.age=0,y.mesh.visible=!0}}U.lastT=Math.max(U.lastT,pt),U.cutAt!==null&&(rt=1-ii((te-U.cutAt)/xh)),(Et>=1||rt<=0)&&(xe.cylTurn&&pt>=xe.cylTurn[1][0]&&(De=(De+60)%360),U=null)}}const fn=!!U,w=b(),O=fn?w.w.reload:null,W=fn&&Et>=O.seat,q=!I&&!k&&!N&&(!fn||W||U.cutAt!==null);if(z=Cx(z,Ce&&q,le,N?Math.min(w.w.adsTime,N.clip.down):w.w.adsTime),Y=kM(e,Cn(1,w.w.zoom,z)),z<Vo){const xe=z/Vo;i.position.lerpVectors(w.hipP,w.aimFwd,xe),i.quaternion.slerpQuaternions(w.hipQ,w.aim.q,xe)}else i.position.lerpVectors(w.aimFwd,w.aim.p,(z-Vo)/(1-Vo)),i.quaternion.copy(w.aim.q);let H=0,oe=0,pe=0,Se=0,we=0,Pe=0;fn&&(On(O.gun,pt,he),H+=he[0]/1e3*rt,oe+=he[1]/1e3*rt,pe+=he[2]/1e3*rt,Se+=he[3]*rt,we+=he[4]*rt,Pe+=he[5]*rt),be>0&&(oe+=Wo.y*be,pe+=Wo.z*be,Se+=Wo.pitch*be,Pe+=Wo.roll*be),jn(Te,ce.airborne?1:0,.1,le),ce.landed>0&&(ke.v-=Math.min(.35,.035*ce.landed)),jn(ke,0,eh(.07),le);const Ie=1-z;oe+=(.012*Te.x+ke.x)*Ie,Se+=-2.5*Te.x*Ie,i.position.x+=H,i.position.y+=oe,i.position.z+=pe,Ae.set(Se*gt,we*gt,Pe*gt,"YXZ"),i.quaternion.multiply(ne.setFromEuler(Ae));const Re=le>0?(ce.lookYaw??0)/le:0,st=le>0?(ce.lookPitch??0)/le:0;jn(ge.yaw,At(-.012*Re,-ur.yaw,ur.yaw),ks.halflife,le),jn(ge.pitch,At(-.01*st,-ur.pitch,ur.pitch),ks.halflife,le),jn(ge.roll,At(-.02*Re,-ur.roll,ur.roll),ks.halflife,le),jn(ge.x,At(ks.x*Re,-.012,ur.x),ks.halflife,le);const ct=ce.speed??0;ze+=ct*le/KM,qe=hl(qe,At(ct/jM,0,1)*(ce.airborne?0:1),.08,le);const xt=1-At(ct/.5,0,1),jt=1-.9*z;r.position.set((ge.x.x+.006*Math.sin(Math.PI*ze)*qe)*Ie,(-.004*((1-Math.cos(2*Math.PI*ze))/2)*qe+.0012*Math.sin(Math.PI*.5*te)*xt)*Ie,0),r.rotation.set((ge.pitch.x+.15*gt*Math.sin(Math.PI*.5*te+.7)*xt)*jt,ge.yaw.x*jt,(ge.roll.x+.8*gt*Math.sin(Math.PI*ze)*qe)*jt,"YXZ");const et=eh(w.w.recoil.kick.tp);jn(Z.rise,0,et,le),jn(Z.back,0,et,le),jn(Z.roll,0,et,le);const Le=j.copy(w.front).multiplyScalar(z);Ae.set(Z.rise.x,0,Z.roll.x,"YXZ"),s.quaternion.setFromEuler(Ae),s.position.copy(Le).sub(ue.copy(Le).applyQuaternion(s.quaternion)).add(ue.set(0,0,Z.back.x));const It=w.w.recoil.aim;te-F>It.hold&&(K.pitch=hl(K.pitch,0,It.halflife,le),K.yaw=hl(K.yaw,0,It.halflife,le));for(const xe of l)xe.rig.reset();const Ge=te-je,Bt=w.bones;if(w.w.id==="auto"&&Ge<.045&&(Bt.bolt.position.z+=.022*(Ge<.012?Ge/.012:1-(Ge-.012)/.033)),w.w.id==="hand"){Ge<.06&&(Bt.hammer.rotation.x+=.25*(Ge<.015?Ge/.015:1-(Ge-.015)/.045));const xe=Ge<.06?0:ii((Ge-.06)/.16);if(Bt.cyl.rotation.z+=((Math.max(0,Ze-1)+(Ze>0?xe:0))*60+De)*gt,fn){Bt.crane.rotation.z+=On(O.crane,pt,he)[0]*gt*rt;const ut=On(O.cylTurn,pt,he)[0];Bt.cyl.rotation.z+=(pt>=O.cylTurn[1][0]?Cn(60,ut,rt):ut)*gt,Bt.block.position.z+=On(O.ejector,pt,he)[0]/1e3*rt}}const Ui=p.userData.at??-1/0;if(p.visible=te-Ui<ZM&&!I,p.visible){const xe=p.userData.n??0;p.position.copy(w.sockets.muzzle.position),p.rotation.set(0,0,(Mr(xe*5.3)*.5+.5)*Math.PI*.5);const ut=(1+.15*Mr(xe*2.7))*(1-.45*z);p.scale.setScalar(ut);for(const Pt of C)Pt.petal.scale.set(1,1,w.w.recoil.flash)}t.updateMatrixWorld(!0);const Ft=d.right.rig,bt=d.left.rig;Ft.reset(),bt.reset(),Ke(w,"rightGrip",Ft.root.position,Ft.root.quaternion),Ts(Ft.bones,.85);const wt=dt(w);let Zt=.6,Rr=0;if(fn){const xe=th(O.left,pt);Oe(w,xe.from,j,ne),Oe(w,xe.to,ue,J),bt.root.position.lerpVectors(j,ue,xe.w),bt.root.quaternion.slerpQuaternions(ne,J,xe.w),ee.position.copy(bt.root.position),ee.quaternion.copy(bt.root.quaternion),Zt=xe.extra[0],rt<1&&(Oe(w,wt,j,ne),bt.root.position.lerp(j,1-rt),bt.root.quaternion.slerp(ne,1-rt),Zt=Cn(.6,Zt,rt)),Rr=Wn(O.mag??O.block,pt)}else Oe(w,wt,bt.root.position,bt.root.quaternion);let Xt=0,Cr=!1,As=!1;const Dn=Me.cam.fill(0);if(N){const xe=N.clip;if(xe.left){me.p.copy(bt.root.position),me.q.copy(bt.root.quaternion);const ut=th(xe.left,Be,xe.ease);$(w,ut.from,j,ne),$(w,ut.to,ue,J),bt.root.position.lerpVectors(j,ue,ut.w),bt.root.quaternion.slerpQuaternions(ne,J,ut.w),Zt=ut.extra[0],Xt=On(xe.shoulder,Be,he)[0],On(xe.cam,Be,he);for(let Pt=0;Pt<6;Pt++)Dn[Pt]=he[Pt];Cr=Wn(xe.prop,Be)>0,As=Wn(xe.glow,Be)>0&&(!xe.glowCharged||N.charged)}if(ot>0){const ut=N.from;bt.root.position.lerp(ut.p,ot),bt.root.quaternion.slerp(ut.q,ot),Zt=Cn(Zt,ut.curl,ot),Xt=Cn(Xt,ut.shoulder,ot);for(let Pt=0;Pt<6;Pt++)Dn[Pt]=Cn(Dn[Pt],ut.cam[Pt],ot)}}Me.p.copy(bt.root.position),Me.q.copy(bt.root.quaternion),Me.curl=Zt,Me.shoulder=Xt;const Lr=bc.cameraMotion;re.x=Dn[0]/1e3*Lr,re.y=Dn[1]/1e3*Lr,re.z=Dn[2]/1e3*Lr,re.pitch=Dn[3]*gt*Lr,re.yaw=Dn[4]*gt*Lr,re.roll=Dn[5]*gt*Lr;const Af=N==null?void 0:N.clip.propKind;for(const[xe,ut]of Object.entries(v))ut.group.visible=Cr&&xe===Af,ut.glow&&(ut.glow.visible=xe!=="knife"||As);if(d.left.rig.glow&&(d.left.rig.glow.visible=As),Ts(bt.bones,Zt),Ft.root.updateMatrixWorld(!0),bt.root.updateMatrixWorld(!0),Je(d.right,"right",Ft.root.position),Je(d.left,"left",bt.root.position,Xt),Rr>0)for(const[xe,ut]of[["mag","leftMag"],["block","leftBlock"]]){const Pt=w.bones[xe];Pt&&(j.copy(Pt.position),ne.copy(Pt.quaternion),_e(w,xe,ut,ee),rt<1&&(Pt.position.lerpVectors(j,Pt.position,rt),Pt.quaternion.slerpQuaternions(ne,Pt.quaternion,rt)))}if(w.w.id==="hand"&&fn){const xe=pt>=.46&&pt<.6&&rt>=1;Bt.block.scale.setScalar(xe?1e-4:1)}w.group.updateMatrixWorld(!0);for(const xe of A)xe.age>=xl||(xe.age+=le,xe.vel.y-=Mh*le,xe.mesh.position.addScaledVector(xe.vel,le),xe.mesh.rotation.x+=xe.spin.x*le,xe.mesh.rotation.y+=xe.spin.y*le,xe.mesh.rotation.z+=xe.spin.z*le,xe.age>=xl&&(xe.mesh.visible=!1));return y.age<1&&(y.age+=le,y.vel.y-=Mh*le,y.mesh.position.addScaledVector(y.vel,le),y.mesh.rotation.x+=y.spin.x*le,y.mesh.rotation.y+=y.spin.y*le,y.age>=1&&(y.mesh.visible=!1)),Vn},muzzleWorld(Q,te=new L){b().sockets.muzzle.getWorldPosition(te);const le=Math.tan(Q.fov*gt/2)/Math.tan(k0*gt/2);return te.x*=le,te.y*=le,te.applyQuaternion(Q.quaternion).add(Q.position)},leftHandWorld(Q,te=new L){const ce=d.left.rig.bones.hand;ce.updateWorldMatrix(!0,!1),te.set(...Wx).applyMatrix4(ce.matrixWorld);const le=Math.tan(Q.fov*gt/2)/Math.tan(k0*gt/2);return te.x*=le,te.y*=le,X.setFromEuler(G.set(re.pitch,re.yaw,re.roll,"YXZ")),te.applyQuaternion(X).add(ae.set(re.x,re.y,re.z)),te.applyQuaternion(Q.quaternion).add(Q.position)}};function Ts(Q,te){Q.fingers.rotation.x-=te*1.2,Q.fingersTip.rotation.x-=te*1,Q.thumb.rotation.x-=te*.4}function Wn(Q,te){if(!Q)return 0;let ce=Q[0][1];for(const le of Q)le[0]<=te&&(ce=le[1]);return ce}for(const Q of Object.values(d))Q.rig.reset();return Vn.update(0,0,{}),Vn}const Yd=.1,Sh=1e-9,yh=n=>n.burstLeft?{...n,burstLeft:0}:n;function eS(){let n=-1/0,e=-1/0,t=!1;return{pull(i,r,s,{held:o=!1,pressed:a=!1,blocked:l=!1}={}){if(a&&(n=s),o||(t=!1),l)return t=!1,{state:yh(i),shots:[],events:[]};const u=s-n<=Yd;let c=o,h;if(r.burstCycle>0){const g=e+r.burstCycle;h=(o||u)&&s+Sh>=g,!h&&i.burstLeft>0&&s<g&&(c=!0)}else h=u&&s+Sh>=i.nextShotAt;const d=vx(i,s,{held:c,pressed:h});let f=d.state;if(d.shots.length&&(n=-1/0,r.burstCycle>0&&h)){const g=e+r.burstCycle;e=t&&s-g<i.maxCatchUp?g:d.shots[0].at,t=o}return d.events.some(g=>g.type==="emptied")&&(f=yh(f)),{state:f,shots:d.shots,events:d.events}}}}const tS={iron:"#3a3d40",iron2:"#595d60",plasteel:"#a9b3b8",gunmetal:"#2d3034",leather:"#5a3e2b",gambeson:"#bdb29a",linen:"#9b8f78",rust:"#8a4a2b",tarp:"#4f6660",wood:"#6b5238",face:"#151719",steel:"#7d858a",oxblood:"#7a1e1e",oxbloodDark:"#4e1414",slate:"#3f5a78",slateDark:"#2a3d52",teal:"#1f5e5a",tealDark:"#143f3c",pikeHull:"#3b3a3f",ghostShell:"#cfd6da",glowArc:"#6fd3ff",glowSolar:"#ff8a2a",glowVoid:"#a76bff",glowRed:"#ff4a3a",glowGhost:"#e8f6ff"};function Gs(n={}){const e=n.scale??1,t=n.bulk??1,i=n.keys??{},r=(d,f)=>i[d]??f,s={},o=[],a=(d,f,g,v,m,p,M,x,E=0,C=0,T=0)=>o.push([d,f*e,g*e,v*e,m*e,p*e,M*e,x,E,C,T]),l=(d,f,g)=>[d*e,f*e,g*e];s.pelvis={parent:n.pelvisParent,at:n.pelvisAt??l(0,.92,0)},n.pelvisParent===void 0&&delete s.pelvis.parent,a("pelvis",.36*t,.16,.23*t,0,0,0,r("legs","linen"));const u=n.seated?1.45:0;for(const d of[-1,1]){const f=d<0?"L":"R";s["thigh"+f]={parent:"pelvis",at:l(d*.1*t,-.04,0),rot:[-u,0,d*(n.stance??0)]},s["shin"+f]={parent:"thigh"+f,at:l(0,-.42,0),rot:[u,0,0]},a("thigh"+f,.17*t,.44,.19*t,0,-.21,0,r("legs","linen")),a("shin"+f,.15*t,.42,.17*t,0,-.21,0,r("shins",r("legs","linen"))),a("shin"+f,.18*t,.08,.3*t,0,-.42,.05,r("boots","leather")),n.greaves&&a("shin"+f,.17*t,.26,.05,0,-.24,.1*t,r("greaves","iron2"))}s.chest={parent:"pelvis",at:l(0,.06,0),rot:[n.lean??0,0,0]},a("chest",.44*t,.52,.25*t,0,.26,0,r("torso","linen")),a("chest",.13,.08,.13,0,.56,0,r("neck","leather")),n.plate&&a("chest",.5*t,.32,.3*t,0,.34,.01,r("plate","iron")),n.plate2&&a("chest",.42*t,.12,.28*t,0,.1,.01,r("plate2","iron")),s.head={parent:"chest",at:l(0,.58,0)};const c=n.helm??"great";if(c==="great"?(a("head",.26,.28,.28,0,.14,0,r("helm","iron")),a("head",.19,.03,.02,0,.16,.145,r("visor","glowArc"))):c==="stepped"?(a("head",.24,.22,.26,0,.11,0,r("helm","iron")),a("head",.18,.1,.2,0,.27,-.01,r("helm","iron")),a("head",.2,.035,.02,0,.13,.135,r("visor","glowVoid"))):c==="hood"?(a("head",.21,.23,.23,0,.12,0,"face"),a("head",.12,.022,.02,0,.14,.125,r("visor","glowSolar")),a("head",.29,.3,.28,0,.15,-.035,r("hood","slate")),a("head",.12,.12,.14,0,.33,-.03,r("hood","slate"),-.55,0,0)):c==="wrap"&&(a("head",.22,.24,.24,0,.12,0,r("wrap","linen")),a("head",.28,.22,.28,.02,.17,-.03,r("hood","tarp")),a("head",.2,.03,.02,0,.13,.125,"face")),n.crown){const d=c==="stepped"?.32:.28,f=[[0,.13,.1],[-.1,.1,.075],[.1,.1,.075],[-.12,-.05,.06],[.12,-.05,.06]].slice(0,n.crown);for(const[g,v,m]of f)a("head",.035,m,.035,g,d+m/2,v,r("crown","iron2"))}for(const d of[-1,1]){const f=d<0?"L":"R",g=(n.arms??{})[f]??{};s["arm"+f]={parent:"chest",at:l(d*(.22*t+.06),.5,0),rot:[g.fwd??0,0,d*(g.out??.06)]},s["fore"+f]={parent:"arm"+f,at:l(0,-.32,0),rot:[-(g.elbow??.1),0,0]},a("arm"+f,.12*t,.34,.13*t,0,-.16,0,r("arms",r("torso","linen"))),a("fore"+f,.11*t,.3,.12*t,0,-.15,0,r("forearms",r("arms",r("torso","linen")))),a("fore"+f,.1,.1,.1,0,-.33,0,r("hands","leather")),n.gauntlets&&a("fore"+f,.13*t,.16,.14*t,0,-.19,0,r("gauntlets","iron"));const v=(n.pauldrons??{})[f];v&&a("arm"+f,v.size[0]*t,v.size[1],v.size[2]*t,d*.02,0,0,v.key,0,0,d*-.22),(n.glowHands??[]).includes(f)&&a("fore"+f,.14,.14,.14,0,-.34,.01,n.glowKey??"glowArc")}if(n.mantle&&(a("chest",.64*t,.12,.4*t,0,.5,-.02,n.mantle),a("chest",.54*t,.1,.33*t,0,.43,-.06,n.mantle)),n.tabard&&a("chest",.26*t,.78,.03,0,.02,.15*t,n.tabard),n.sash&&(a("chest",.08,.66,.27*t,0,.27,.005,n.sash,0,0,.7),a("chest",.46*t,.07,.27*t,0,.03,0,n.sash)),n.tarpCape&&a("chest",.5,.8,.02,.1,.12,-.16*t,n.tarpCape,.08,0,.18),n.cloak){const d=n.cloak;s.cape={parent:"chest",at:l(0,.5,-.14*t),rot:[-(n.lean??0)+.05,0,0]},a("cape",.46*t,d.len*.7,.03,0,-d.len*.35,0,d.key);for(const f of[-1,1])a("cape",.2*t,d.len*.34,.03,f*.12*t,-d.len*.86,0,d.dark??d.key)}if(n.coat){const d=n.coat;for(const f of[-1,1])a("pelvis",.19*t,d.len,.05,f*.1*t,-d.len/2+.06,.13*t,d.key),a("pelvis",.05,d.len*.95,.26*t,f*.2*t,-d.len/2+.06,0,d.dark);a("pelvis",.42*t,d.len,.05,0,-d.len/2+.06,-.13*t,d.key);for(const f of[.3,.6])a("pelvis",.43*t,.03,.055,0,-d.len*f,-.13*t,d.dark)}if(n.banner){s.banner={parent:"chest",at:l(.14*t,.35,-.2*t)},a("banner",.05,1.5,.05,0,.4,0,"wood"),a("banner",.5,.66,.03,.27,.8,0,n.banner.key);for(const[d,f,g,v,m]of n.banner.sigil)a("banner",d,f,.035,g,v,0,n.banner.mark,0,0,m)}n.trophy&&(a("chest",.05,.9,.08,.06,.28,-.21*t,"steel",0,0,.55),a("chest",.015,.7,.02,.06,.28,-.26*t,"glowArc",0,0,.55));const h=(d,f)=>f.forEach(g=>a(d,...g));return n.weapon==="slug"&&h("foreR",[[.1,.36,.14,0,-.44,.04,"gunmetal"],[.065,.5,.07,0,-.84,.04,"iron"],[.08,.2,.12,0,-.22,.05,"plasteel"],[.07,.12,.13,0,-.46,-.07,"plasteel"]]),n.weapon==="handcannon"&&h("foreR",[[.07,.26,.1,0,-.45,.03,"gunmetal"],[.1,.09,.1,0,-.39,.03,"iron2"]]),n.weapon==="longrifle"&&h("foreR",[[.06,1.05,.09,0,-.7,.03,"gunmetal"],[.05,.3,.06,0,-.5,.09,"plasteel"],[.08,.22,.11,0,-.24,.05,"wood"]]),n.weapon==="wrapped"&&h("foreR",[[.09,.8,.1,0,-.62,.03,"gunmetal"],[.08,.22,.12,0,-.22,.05,"wood"],[.11,.08,.12,0,-.58,.03,"linen"],[.11,.07,.12,0,-.84,.03,"linen"],[.07,.14,.12,0,-.48,-.08,"rust"]]),n.weapon==="short"&&h("foreR",[[.07,.34,.1,0,-.48,.03,"gunmetal"]]),n.blade&&h("foreL",[[.05,.12,.08,0,-.26,.02,"steel"],[.02,.45,.06,0,-.52,.02,n.blade]]),{bones:s,parts:o}}function Ml({at:n=[.5,2.1,.1],fin:e="ghostShell",size:t=1}={}){const i={ghost:{at:n}},r=[],s=(o,a,l,u,c,h,d,f=0,g=0,v=0)=>r.push(["ghost",o*t,a*t,l*t,u*t,c*t,h*t,d,f,g,v]);return s(.13,.13,.13,0,0,0,"ghostShell",.62,.78,0),s(.05,.17,.035,.11,.03,-.02,e,0,0,-.5),s(.05,.17,.035,-.11,.03,-.02,"ghostShell",0,0,.5),s(.12,.035,.08,0,-.11,-.01,"ghostShell"),s(.05,.05,.02,0,0,.125,"glowGhost"),{bones:i,parts:r}}function nS(){const n={pike:{at:[0,.72,0]}},e=[],t=(...r)=>e.push(["pike",...r]);t(.72,.3,1.3,0,0,0,"pikeHull"),t(.5,.22,.55,0,-.04,.88,"pikeHull",.22,0,0),t(.82,.46,.6,0,.08,-.85,"iron"),t(.5,.08,1,0,-.19,-.05,"iron2");for(const r of[-1,1])t(.08,.1,.75,r*.28,-.1,.95,"gunmetal"),t(.09,.05,.03,r*.16,.03,1.16,"glowRed");t(.46,.04,.46,.08,.17,.15,"plasteel",0,0,.08),t(.42,.05,.5,0,.18,-.3,"tarp"),t(.32,.26,.32,0,.44,-.85,"wood");const i=Gs({pelvisParent:"pike",pelvisAt:[0,1.02-.72,-.3],seated:!0,bulk:1.1,lean:.25,helm:"wrap",sash:"oxblood",keys:{torso:"linen",legs:"linen"},weapon:"short",arms:{R:{fwd:-.9,elbow:.5},L:{fwd:-.9,elbow:.5,out:-.1}}});return{bones:{...n,...i.bones},parts:[...e,...i.parts]}}function iS(){const n={base:{at:[0,0,0]},head:{parent:"base",at:[0,1,0]}},e=[],t=(i,...r)=>e.push([i,...r]);t("base",.55,.9,.55,0,.45,0,"iron"),t("base",.7,.08,.7,0,.92,0,"iron2"),t("head",.56,.42,.62,0,.14,0,"iron2"),t("head",.62,.05,.66,0,.37,0,"plasteel");for(const i of[-1,1])t("head",.09,.09,.75,i*.13,.12,.65,"gunmetal");return t("head",.12,.06,.03,0,.26,.325,"glowRed"),{bones:n,parts:e}}const Sl=(n,e)=>({bones:{...n.bones,...e.bones},parts:[...n.parts,...e.parts]}),mr=n=>n.userData.rest,yl=(n,e,t,i,r)=>{n&&(n.rotation.x=mr(n).r.x+Math.sin(e*i+r)*t)},Yr=(n,e)=>({id:n,...e,palette:tS}),Eh={R:{fwd:-.5,elbow:1.07},L:{fwd:-.9,elbow:.6,out:-.25}},El=["ghost","banner"],rS=[{id:"levy",name:"Levy",faction:"warlord",rank:"minor",tier:"skirmisher",body:"human",health:{max:110},crit:{bones:["head"]},noHit:["cape"],spec:Yr("levy",Gs({scale:.97,bulk:1.12,lean:.08,helm:"wrap",sash:"oxblood",tarpCape:"tarp",keys:{torso:"linen",legs:"linen",shins:"leather"},pauldrons:{L:{size:[.26,.1,.3],key:"rust"}},weapon:"wrapped",arms:Eh})),idle:(n,e,t)=>{e.pelvis.position.y=mr(e.pelvis).p.y+Math.sin(n*1.8+t.phase)*.012,e.chest.rotation.z=mr(e.chest).r.z+Math.sin(n*.9+t.phase)*.03}},{id:"outrider",name:"Pike Outrider",faction:"warlord",rank:"minor",tier:"skirmisher",body:"pike",health:{max:260},crit:{bones:["head"]},spec:Yr("outrider",nS()),idle:(n,e,t)=>{const i=Math.max(0,Math.sin(n*.7+t.phase)-.92)*.9;e.pike.position.y=mr(e.pike).p.y+Math.sin(n*3.1+t.phase)*.03-i,e.pike.rotation.x=mr(e.pike).r.x+i*.3}},{id:"champion",name:"Lesser Warlord",faction:"warlord",rank:"elite",tier:"heavy",body:"human",health:{max:520},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:El,ghost:{speed:1,hover:[0,1.45,.32]},spec:Yr("champion",Sl(Gs({scale:1.05,helm:"hood",keys:{torso:"leather",legs:"iron",shins:"iron2",hood:"slate",visor:"glowSolar"},cloak:{len:1.15,key:"slate",dark:"slateDark"},gauntlets:!0,pauldrons:{R:{size:[.2,.1,.24],key:"slate"},L:{size:[.16,.08,.2],key:"plasteel"}},weapon:"handcannon",blade:"glowSolar",glowHands:["L"],glowKey:"glowSolar",arms:{R:{fwd:-.9,elbow:.75},L:{fwd:-.35,elbow:.9,out:.05}}}),Ml({at:[.5,2.05,.05],fin:"slate",size:.85}))),idle:(n,e,t)=>{yl(e.cape,n,.05,1.2,t.phase)}},{id:"warlord",name:"Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1400},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:El,ghost:{speed:.7,hover:[0,1.6,.38]},spec:Yr("warlord",Sl(Gs({scale:1.15,bulk:1.25,helm:"great",crown:5,plate:!0,plate2:!0,greaves:!0,gauntlets:!0,keys:{torso:"gambeson",legs:"leather",shins:"iron",plate:"oxblood",plate2:"iron",arms:"iron2",forearms:"iron",visor:"glowArc"},pauldrons:{L:{size:[.3,.19,.36],key:"oxblood"},R:{size:[.17,.09,.22],key:"plasteel"}},mantle:"leather",tabard:"oxblood",trophy:!0,banner:{key:"oxblood",mark:"plasteel",sigil:[[.16,.16,.27,.86,Math.PI/4],[.36,.05,.27,.6,0]]},weapon:"slug",glowHands:["L"],glowKey:"glowArc",arms:{R:{fwd:-.5,elbow:1.07},L:{fwd:-.15,elbow:.45,out:.12}}}),Ml({at:[.62,2.3,.1],fin:"oxblood"}))),idle:(n,e,t)=>{e.head.rotation.y=mr(e.head).r.y+Math.sin(n*.4+t.phase)*.25,yl(e.banner,n,.04,1.1,t.phase)}},{id:"rival",name:"Rival Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1200},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:El,ghost:{speed:-.75,hover:[0,1.55,.36]},spec:Yr("rival",Sl(Gs({scale:1.1,helm:"stepped",crown:3,keys:{torso:"teal",legs:"leather",arms:"teal",forearms:"iron2",helm:"iron",crown:"iron2",visor:"glowVoid"},coat:{len:.95,key:"teal",dark:"tealDark"},gauntlets:!0,pauldrons:{L:{size:[.18,.1,.24],key:"iron2"}},banner:{key:"teal",mark:"gambeson",sigil:[[.08,.4,.2,.8,0],[.08,.4,.34,.8,0]]},weapon:"longrifle",glowHands:["L","R"],glowKey:"glowVoid",arms:Eh}),Ml({at:[-.6,2.2,.1],fin:"teal"}))),idle:(n,e,t)=>{yl(e.banner,n,.04,1,t.phase+1)}},{id:"turret",name:"Gate Turret",faction:"warlord",rank:"minor",tier:null,body:"turret",health:{max:240},crit:{keys:["glowRed"]},faces:!1,spec:Yr("turret",iS()),idle:(n,e,t)=>{e.head.rotation.y=mr(e.head).r.y+Math.sin(n*.6+t.phase)*.7}}],sS=Object.freeze({fodder:{sight:28,band:[1.6,4],speed:3.4,sprint:1.35,reaction:[.3,.55],cooldown:1.1,attack:5,strafe:.15,lose:4,turn:4},skirmisher:{sight:38,band:[7,14],speed:2.6,sprint:1.2,reaction:[.22,.45],cooldown:1.6,attack:20,strafe:.75,lose:6,turn:3},heavy:{sight:45,band:[10,20],speed:1.7,sprint:1.1,reaction:[.4,.7],cooldown:2.4,attack:26,strafe:.25,lose:9,turn:1.6}}),Xo=.55,Kn=3,bl=1.5,bh=.8,wl=.6,oS=.5,wh=.6,Th=.35,Tl=1,aS=.45,lS=.12,cS=.9,uS=.07,Al=Math.PI*2;let hS=0;const Ei=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)},Ti=(n,e,t)=>n+(e-n)*t,Gi=n=>n.userData.rest,dS={biped(n,e){n.pelvis.position.y=Gi(n.pelvis).p.y*(1-.5*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=.95*e,n["shin"+t].rotation.x+=1.35*e,n["foot"+t].rotation.x-=.4*e,n["arm"+t].rotation.x+=.35*e,n["arm"+t].rotation.z+=(t==="L"?-.25:.25)*e,n["arm2"+t]&&(n["arm2"+t].rotation.x+=.3*e);n.chest.rotation.x+=.85*e,n.head.rotation.x+=.45*e,n.cape&&(n.cape.rotation.x-=.35*e),n.banner&&(n.banner.rotation.x-=.25*e)},human(n,e){n.pelvis.position.y=Gi(n.pelvis).p.y*(1-.47*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=1.35*e,n["shin"+t].rotation.x+=1.9*e,n["arm"+t].rotation.x=Ti(Gi(n["arm"+t]).r.x,-.25,e),n["fore"+t].rotation.x=Ti(Gi(n["fore"+t]).r.x,-.15,e);n.chest.rotation.x+=.55*e,n.head.rotation.x+=.35*e,n.cape&&(n.cape.rotation.x-=.3*e),n.banner&&(n.banner.rotation.x-=.2*e)},servitor(n,e){n.core.position.y=Ti(Gi(n.core).p.y,.62,e),n.core.rotation.z+=.5*e,n.core.rotation.x+=.35*e},shank(n,e){n.hull.position.y=Ti(Gi(n.hull).p.y,.5,e),n.hull.rotation.z+=.7*e,n.hull.rotation.x+=.3*e},pike(n,e){n.pike.position.y=Ti(Gi(n.pike).p.y,.2,e),n.pike.rotation.z+=.2*e,n.pike.rotation.x+=.08*e,n.chest.rotation.x+=.65*e,n.head.rotation.x+=.35*e},turret(n,e){n.head.rotation.x+=.5*e,n.head.position.y-=.1*e}},Rl={biped(n,e){n.chest.rotation.x-=.22*e,n.head.rotation.x-=.18*e},human(n,e){n.chest.rotation.x-=.2*e,n.head.rotation.x-=.15*e},servitor(n,e){n.core.rotation.y+=.7*e},shank(n,e){n.hull.rotation.z+=.35*e,n.hull.position.y+=.05*e},pike(n,e){n.pike.rotation.z+=.12*e,n.chest.rotation.x-=.2*e},turret(n,e){n.head.rotation.y+=.25*e}},$d=n=>{var e;return Mc({max:n.health.max,shield:((e=n.shield)==null?void 0:e.amount)??0})},fS=new dc(1,3),pS=new an(.5,1,.5).translate(0,.5,0),mS=3.4;function Ah(n,e,t,i){const r=new un({color:n.colour,transparent:!0,opacity:n.opacity,depthWrite:!1,blending:Ks}),s=new Mn;return s.add(new vt(fS,r)),s.position.copy(i),s.scale.copy(t),e.add(s),{group:s,fillMat:r,base:n.opacity,scale:t.clone()}}function gS(n,e){var l,u;const t=new Di({vertexColors:!0,roughness:.85,metalness:0,emissive:16777215,emissiveIntensity:0}),i=new un({vertexColors:!0}),r=lo(n.spec,{solidMaterial:t,glowMaterial:i});r.root.position.set(e.x??0,0,e.z??0),r.root.rotation.y=e.yaw??0,(l=e.scene)==null||l.add(r.root);const s=r.bounds(n.measureAside??[]);let o=null;if(n.shield){const c=n.shield.pad/r.scale,h=s.getSize(new L).multiplyScalar(.5*c);o=Ah(n.shield,r.root,h,s.getCenter(new L).divideScalar(r.scale))}const a={unit:n,id:n.id,name:n.name,rank:n.rank,faction:n.faction,rig:r,root:r.root,bones:r.bones,meshes:r.meshes,phase:(e.index??0)*1.7,health:$d(n),diedAt:null,revivedAt:null,respawnAt:null,lastHitAt:-1/0,flashUntil:-1/0,shieldHitAt:-1/0,shieldBrokeAt:-1/0,flinch:0,etherClock:0,height:s.max.y-s.min.y,top:s.max.y,bottom:s.min.y,footprint:Math.min(.8,Math.max(.3,-s.min.x,s.max.x,-s.min.z)),turn:n.turn??((u=sS[n.tier])==null?void 0:u.turn)??2,shell:o,aura:n.aura?Ah(n.aura,r.bones[n.aura.bone],new L().setScalar(n.aura.r),new L(...n.aura.at)):null,column:null,scene:e.scene??null};return n.ghost&&(a.column=new vt(pS,new un({color:15136511,transparent:!0,opacity:0,blending:Ks,depthWrite:!1})),a.column.visible=!1,a.column.position.set(n.ghost.hover[0],0,n.ghost.hover[2]*.5),r.root.add(a.column)),r.root.updateMatrixWorld(!0),a}function wc(n,e=.5,t=new L){return t.set(n.root.position.x,n.root.position.y+n.bottom+n.height*e,n.root.position.z)}function _S(n,e){var s,o,a,l,u;const t=n.rig.partAt(e.object,e.faceIndex);if(!t)return null;const i=n.unit;if((s=i.noHit)!=null&&s.includes(t[0]))return null;const r=!!((a=(o=i.crit)==null?void 0:o.bones)!=null&&a.includes(t[0])||(u=(l=i.crit)==null?void 0:l.keys)!=null&&u.includes(t[7]));return{part:t,crit:r&&n.health.shield<=0}}function vS(n,{amount:e,source:t,at:i,crit:r=!1}){if(n.health.dead)return{events:[],killed:!1};const{state:s,events:o}=Fd(n.health,{amount:e,source:t});n.health=s,n.lastHitAt=i;let a=!1;for(const l of o)l.type==="absorbed"&&(n.shieldHitAt=i),l.type==="shieldBroken"&&(n.shieldBrokeAt=i),l.type==="damaged"&&(n.flashUntil=i+lS,n.flinch=Math.min(1,n.flinch+(r?.9:.55))),l.type==="died"&&(a=!0,n.diedAt=i,n.respawnAt=i+Kn,n.revivedAt=null,n.etherClock=0,n.rig.setGlowLit(!1,u=>u[0]==="ghost"));return{events:o,killed:a}}function Rh(n,e){n.health=$d(n.unit),n.diedAt=null,n.respawnAt=null,n.revivedAt=e,n.flinch=0,n.lastHitAt=-1/0,n.rig.setGlowLit(!0)}const qo=new L,xS=new L;function MS(n,e,t,i,r){const s=Gi(n).p,o=Math.hypot(s.x,s.z),a=Math.atan2(s.z,s.x)+e*i+t;return r.set(Math.cos(a)*o,s.y+Math.sin(e*2.2+t)*.05,Math.sin(a)*o),Math.PI/2-a}function SS(n,e,t,i={}){var f,g;const{unit:r,rig:s,bones:o,root:a}=n;s.reset();let l=n.health.dead,u=l?t-n.diedAt:0,c=0,h=0,d=!0;if(l&&r.ghost?u<Xo?c=Ei(u/Xo):u<Kn?c=1:u<Kn+Tl?c=1-Ei((u-Kn)/Tl):Rh(n,n.diedAt+Kn+Tl):l&&(u<Xo?c=Ei(u/Xo):u<bl?c=1:u<bl+bh?(c=1,h=Ei((u-bl)/bh)):u<Kn?(c=1,h=1,d=!1):u<Kn+wl?h=1-Ei((u-Kn)/wl):Rh(n,n.diedAt+Kn+wl)),l=n.health.dead,(!l||!r.ghost&&u>=Kn)&&((f=r.idle)==null||f.call(r,t,o,n)),n.flinch*=Math.exp(-9*e),!l&&n.flinch>.001&&((g=Rl[r.body])==null||g.call(Rl,o,n.flinch)),c>0&&dS[r.body](o,c),r.ghost&&o.ghost){const v=o.ghost,m=MS(v,t,n.phase,r.ghost.speed,qo);let p=0;l?p=Ei((u-oS)/wh):n.revivedAt!==null&&(p=1-Ei((t-n.revivedAt)/wh));const[M,x,E]=r.ghost.hover;v.position.set(Ti(qo.x,M,p),Ti(qo.y,x+Math.sin(t*2.4+n.phase)*.04,p),Ti(qo.z,E,p)),v.rotation.y=Ti(m,0,p),v.rotation.x=.55*p}if(n.column){const v=Kn-Th;let m=0;l&&u>=v?m=Ei((u-v)/Th):!l&&n.revivedAt!==null&&(m=1-Ei((t-n.revivedAt)/aS)),n.column.visible=m>.001,n.column.material.opacity=.5*m,n.column.scale.set(1.3-.3*m,mS*Math.max(m,.001),1.3-.3*m)}if(r.shield&&!l){const v=n.health;t-n.lastHitAt>=r.shield.regenDelay&&v.shield<v.shieldMax&&(n.health=D0(v,{shield:v.shieldMax/r.shield.regenSeconds*e,source:"regen"}).state)}if(n.shell){const v=n.shell,m=t-n.shieldBrokeAt;if(!l&&n.health.shield>0){const p=t-n.shieldHitAt<.1?2.2:1,M=.35+.65*Sc(n.health);v.group.visible=!0,v.group.scale.copy(v.scale),v.fillMat.opacity=v.base*M*p}else if(m>=0&&m<.3){const p=m/.3;v.group.visible=!0,v.group.scale.copy(v.scale).multiplyScalar(1+.35*p),v.fillMat.opacity=v.base*2.5*(1-p)}else v.group.visible=!1}if(n.aura&&(n.aura.group.visible=!l,n.aura.fillMat.opacity=n.aura.base*(.8+.2*Math.sin(t*2+n.phase))),!l&&i.face&&r.faces!==!1){const m=((Math.atan2(i.face.x-a.position.x,i.face.z-a.position.z)-a.rotation.y+Math.PI)%Al+Al)%Al-Math.PI,p=n.turn*e;a.rotation.y+=Math.max(-p,Math.min(p,m))}if(a.position.y=-h*(n.top+.15),a.visible=d,s.solid.material.emissiveIntensity=t<n.flashUntil?hS:0,a.updateMatrixWorld(!0),l&&r.ether&&u<cS&&o.head)for(n.etherClock-=e;n.etherClock<=0;)ES(n.scene,o.head.getWorldPosition(xS)),n.etherClock+=uS}const Kd=48,ta=1.1;let Vi=null;function yS(n){if((Vi==null?void 0:Vi.scene)===n)return Vi;const e=new an(1,1,1),t=new un({color:15791864,transparent:!0,opacity:.5,depthWrite:!1}),i=Array.from({length:Kd},()=>{const r=new vt(e,t);return r.visible=!1,n.add(r),{mesh:r,age:ta,vel:new L,spin:0}});return Vi={scene:n,items:i,next:0},Vi}function ES(n,e){if(!n)return;const t=yS(n),i=t.items[t.next];t.next=(t.next+1)%Kd,i.age=0,i.mesh.position.copy(e),i.vel.set((Math.random()-.5)*.5,.7+Math.random()*.4,(Math.random()-.5)*.5),i.spin=(Math.random()-.5)*3,i.mesh.visible=!0}function bS(n){if(Vi)for(const e of Vi.items){if(e.age>=ta)continue;if(e.age+=n,e.age>=ta){e.mesh.visible=!1;continue}const t=e.age/ta;e.mesh.position.addScaledVector(e.vel,n),e.vel.multiplyScalar(Math.exp(-1.2*n)),e.mesh.rotation.y+=e.spin*n,e.mesh.scale.setScalar((.07+.2*t)*(t<.7?1:1-(t-.7)/.3))}}const wS=Object.freeze(["now","enter","interact","flag","scan","land","talk"]),TS=Object.freeze(["now","flag"]),AS=Object.freeze(["now"]);function RS({host:n=null,say:e=null,onBeat:t=null,onCheckpoint:i=null,knows:r=null,triggers:s=wS,levelKinds:o=TS,subjectless:a=AS}={}){if(!n)throw new Error("makeEpisode: no host API");const l=[...s],u=new Set(a);let c=null,h=-1,d=!1,f=[],g=new Set;const v=S=>{var A;return r?!!r(S):!!((A=n.knows)!=null&&A.call(n,S))},m=new Map;if(Array.isArray(o))for(const S of o)m.set(S,u.has(S)?()=>!0:A=>v(A));else for(const[S,A]of Object.entries(o??{}))m.set(S,A);function p(S){var I;const A=[],D=new Set,_=[],y=[];for(const k of S.acts??[]){k.id||_.push("an act has no id");for(const U of k.scenes??[]){U.id||_.push(`act ${k.id}: a scene has no id`),y.push({act:k.id,id:U.id,title:U.title??U.id});let N=!0;for(const X of U.beats??[]){if(!X.id){_.push(`${k.id}/${U.id}: a beat has no id`);continue}D.has(X.id)&&_.push(`beat id '${X.id}' is used twice`),D.add(X.id),l.includes(X.trigger)||_.push(`beat '${X.id}': trigger '${X.trigger}' is not one of ${l.join(" | ")}`),!u.has(X.trigger)&&!X.at&&_.push(`beat '${X.id}': a '${X.trigger}' trigger needs an 'at' to name its subject`),N&&X.optional&&_.push(`beat '${X.id}' opens scene '${U.id}' and is marked optional — a scene's first beat is where its checkpoint is taken, so it must be arrived at`),X.talk&&((I=n.talk)!=null&&I.has)&&!n.talk.has(X.talk)&&_.push(`beat '${X.id}': conversation '${X.talk}' is not loaded`),A.push({...X,act:k.id,scene:U.id,sceneTitle:U.title??U.id,actTitle:k.title??k.id,opensScene:N}),N=!1}}}A.length||_.push("an episode with no beats");const P=new Set(S.teaches??[]);for(const k of A)for(const U of k.grants??[])P.add(U);for(const k of A)for(const U of k.needs??[])P.has(U)||_.push(`beat '${k.id}' needs '${U}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(_.length)throw new Error(`episode.load('${S.id}'): ${_.length} problem(s) — ${_.join("; ")}`);return{beats:A,scenes:y}}function M(){const S=T.beat;!S||!S.opensScene||g.has(S.scene)||(g.add(S.scene),i==null||i(S))}function x(S){var A,D,_;f.push(S.id),S.say&&(e==null||e(S.say));for(const y of S.grants??[])(A=n.learn)==null||A.call(n,y);S.talk&&((_=(D=n.talk)==null?void 0:D.open)==null||_.call(D,S.talk)),t==null||t(S)}function E(){if(!(d||!c)){d=!0;try{let S=0;M();const A=D=>{const _=m.get(D.trigger);return!!_&&!!_(D.at)};for(;h>=0&&h<c.beats.length&&A(c.beats[h]);){const D=c.beats[h];if((D.needs??[]).some(_=>!v(_))||(x(D),h+=1,M(),++S>c.beats.length+1))break}}finally{d=!1}}}function C(S,A){if(!c)return-1;for(let D=h;D>=0&&D<c.beats.length;D++){const _=c.beats[D];if(_.trigger===S&&_.at===A)return D;if(!_.optional)return-1}return-1}const T={get id(){return(c==null?void 0:c.id)??null},get title(){return(c==null?void 0:c.title)??null},get begun(){return h>=0},get over(){return!!c&&h>=c.beats.length},get beat(){return c&&h>=0&&h<c.beats.length?c.beats[h]:null},get act(){var S;return((S=T.beat)==null?void 0:S.actTitle)??null},get scene(){var S;return((S=T.beat)==null?void 0:S.sceneTitle)??null},get objective(){const S=T.beat;if(!S)return null;if(S.objective)return S.objective;if(!S.optional)return null;for(let A=h+1;A<c.beats.length;A++)if(!c.beats[A].optional)return c.beats[A].objective??null;return null},get note(){var S;return((S=T.beat)==null?void 0:S.note)??null},get done(){return[...f]},get beats(){return c?c.beats.map(S=>S.id):[]},load(S){if(!(S!=null&&S.id)||!S.acts)throw new Error("episode.load: needs { id, acts }");const{beats:A,scenes:D}=p(S);return c={id:S.id,title:S.title??S.id,acts:S.acts,beats:A,scenes:D},h=-1,f=[],g=new Set,T},begin(){return!c||h>=0?!1:(h=0,E(),!0)},fire(S,A){const D=C(S,A);if(D<0)return null;const _=c.beats[D],y=(_.needs??[]).filter(P=>!v(P));if(y.length){const P=_.refuse;return(typeof P=="function"?P(y):P)??"Not yet. There is a piece of this missing."}return h=D,M(),x(_),h+=1,E(),null},wants(S,A){return C(S,A)>=0},save(){var S;return{id:(c==null?void 0:c.id)??null,at:((S=T.beat)==null?void 0:S.id)??null,done:[...f]}},restore(S){if(!c||!S||S.id&&S.id!==c.id)return T;const A=c.beats.findIndex(D=>D.id===S.at);return A<0||(h=A,f=[...S.done??[]],g=new Set(c.beats.slice(0,A+1).map(D=>D.scene))),T}};return T}const Ch=90,Ma=document.getElementById("view"),di=new ac({canvas:Ma,antialias:!0});di.setPixelRatio(Math.min(devicePixelRatio||1,2));di.setSize(innerWidth||1280,innerHeight||720,!1);di.outputColorSpace=Ln;di.toneMapping=q0;di.toneMappingExposure=1;ex(di);const ht=new ma;ht.background=new Qe(1053204);const Rt=new xn(70,(innerWidth||1280)/(innerHeight||720),.05,200),jd=1.7,_n=new xn(70,(innerWidth||1280)/(innerHeight||720),.05,200);ht.add(new _c(3949127,.85));const Zd=new gc(16777215,1.6);Zd.position.set(4,8,6);ht.add(Zd);ht.add(new mc(14674158,3813928,.9));const tt={halfW:7.5,wallH:4.6,near:2,far:-24},Sa=(tt.near+tt.far)/2,ya=tt.near-tt.far,Tc=tr(tt.halfW*2,.2,ya,ui.floorTimber,{castShadow:!1});Tc.position.set(0,-.1,Sa);ht.add(Tc);const Ac=tr(tt.halfW*2+.4,.2,ya,ui.ceiling,{castShadow:!1});Ac.position.set(0,tt.wallH+.1,Sa);ht.add(Ac);const Rc=tr(.2,tt.wallH,ya,ui.wall);Rc.position.set(-tt.halfW-.1,tt.wallH/2,Sa);ht.add(Rc);const Cc=tr(.2,tt.wallH,ya,ui.wall);Cc.position.set(tt.halfW+.1,tt.wallH/2,Sa);ht.add(Cc);const Lc=tr(tt.halfW*2+.4,tt.wallH,.2,ui.wallUpper);Lc.position.set(0,tt.wallH/2,tt.far-.1);ht.add(Lc);const Pc=tr(tt.halfW*2+.4,tt.wallH,.2,ui.wallUpper);Pc.position.set(0,tt.wallH/2,tt.near+.1);ht.add(Pc);const Jd=[Rc,Cc,Lc,Pc,Tc,Ac];for(const n of[-5,-10,-20]){const e=tr(tt.halfW*2,.01,.06,ui.trim,{castShadow:!1,receiveShadow:!1});e.position.set(0,.001,n),ht.add(e)}const Qd=-2.5,ef=tr(.05,.01,Qd-tt.far,ui.trim,{castShadow:!1,receiveShadow:!1});ef.position.set(0,.001,(Qd+tt.far)/2);ht.add(ef);const Ic=Object.fromEntries([...RM,...rS].map(n=>[n.id,n])),CS=(n,e)=>e*Math.tan(io.degToRad(n)),LS=[["boss",-3.5,20],["captain",-8.5,10],["servitor",-13,20],["shank",-19,15],["vandal",-27,10],["dreg",-36,5],["warlord",4,20],["champion",8.5,10],["rival",13,20],["outrider",19,15],["turret",27,10],["levy",36,5]],fi=LS.map(([n,e,t],i)=>gS(Ic[n],{scene:ht,x:CS(e,t),z:-t,index:i})),Cl={x:0,z:0};let Ee=0;const Ea=70,mi=xa.map(n=>({id:n.id,label:n.label,damage:n.damage,precision:n.precision,ammoType:n.ammoType,reserveCap:n.reserveCap,burstCycle:n.burstCycle??0,stats:{...n.stats,reloadTime:n.reload.clip*n.reload.seat}})),Ri=mi.map(n=>gx(n.stats));let zn=0,Ct=Ri[0];const ba="hunterCloak",it=QM({hipFov:Ea,classId:ba,buildProp:$x}),gi=Ex({model:it.rig,rest:vh,aim:vh,stowDrop:0,drawTime:0,aimTime:0,fov:k0,keyIntensity:1.6,fillIntensity:.12});gi.scene.add(new mc(14674158,3813928,.9));gi.camera.far=3;gi.camera.updateProjectionMatrix();gi.draw();const Dc=n=>n.reloading?{...n,reloading:!1,reloadEndsAt:0}:n;function ls(n){n===zn||!mi[n]||_t.locks(Ee).swap||it.requestSwap(n,Ee)&&(Ri[zn]=Dc(Ct),zn=n,Ct=Ri[n],Ut.fire("switch","weapon"))}const PS=new an(.02,.02,1),tf=new un({color:16773824,transparent:!0,opacity:0}),Ys=new vt(PS,tf);Ys.frustumCulled=!1;ht.add(Ys);let nf=-1/0;const Lh=new L,Ph=new L,IS=new L(0,0,1);function DS(n,e){const t=n.distanceTo(e);Ph.copy(n).add(e).multiplyScalar(.5),Ys.position.copy(Ph),Lh.copy(e).sub(n).normalize(),Ys.quaternion.setFromUnitVectors(IS,Lh),Ys.scale.set(1,1,Math.max(t,.01)),nf=Ee+.05}const wa=new vt(ga.sphere,new un({color:16769162}));wa.scale.setScalar(1e-4);ht.add(wa);let rf=-1/0,sf=.06;function Ta(n,e=.06){wa.position.copy(n),rf=Ee+(e>.3?.28:e>.12?.18:.09),sf=e}let Ih=0;function of(n,e=!1){const t=document.getElementById("hitmarker");t&&(t.classList.remove("fade"),t.classList.toggle("kill",n),t.classList.toggle("crit",e&&!n),t.offsetWidth,t.classList.add("show"),clearTimeout(Ih),Ih=setTimeout(()=>{t.classList.remove("show"),t.classList.add("fade")},60))}const ns=new Cd;ns.far=100;const US=io.degToRad(1.4),NS=io.degToRad(.22),Dh=new L,Ll=new L,Uh=new L;function FS(n){const e=it.adsE>=.9?NS/it.magnification:US;if(e<=0)return;const t=Math.random()*Math.PI*2,i=Math.random()*e;Dh.set(Math.abs(n.y)<.99?0:1,Math.abs(n.y)<.99?1:0,0),Ll.crossVectors(n,Dh).normalize(),Uh.crossVectors(Ll,n).normalize(),n.addScaledVector(Ll,Math.cos(t)*i).addScaledVector(Uh,Math.sin(t)*i).normalize()}const OS=fi.flatMap(n=>n.meshes),kS=new Map(fi.flatMap(n=>n.meshes.map(e=>[e,n])));function Js(n){for(const e of n.intersectObjects(OS,!1)){const t=kS.get(e.object);if(t.health.dead)continue;const i=_S(t,e);if(i)return{target:t,point:e.point,crit:i.crit}}return null}function uo(n,e,t,i=!1){const r=vS(n,{amount:e,source:t,at:Ee,crit:i});return r.killed&&KS(wc(n,0),t==="player-super"?"super":"weapon"),r}function BS(n){const e=new L,t=new L;gi.ray(Rt,e,t),FS(t),ns.set(e,t);const i=Js(ns);let r;if(i){r=i.point;const s=mi[zn],o=i.crit?s.damage*s.precision:s.damage,a=(Ee<Uc?o*jS:o)*_t.weaponDamageScale(),{killed:l}=uo(i.target,a,"player",i.crit);of(l,i.crit)}else{const s=ns.intersectObjects(Jd,!1);r=s.length?s[0].point:e.clone().addScaledVector(t,ns.far)}Ta(r),DS(it.muzzleWorld(Rt),r),it.onShot((n==null?void 0:n.at)??Ee)}const zS=eS();let Yo=-1/0;function af(n=_t.locks(Ee)){const e=mi[zn],t=Dt.down.has("Mouse0")||to.fire;let i=Dt.pressed.has("Mouse0")||to.fire;const r=it.busy||n.fire;r?(i||t)&&(Yo=Ee):Yo>-1/0&&((t||Ee-Yo<=xa[zn].readyTime+Yd)&&(i=!0),Yo=-1/0),!r&&t&&it.reloading&&!kd(Ct,Ee)&&it.cutReload(Ee);const s=zS.pull(Ct,e,Ee,{held:t,pressed:i,blocked:r});Ct=s.state,s.shots.length&&it.reloading&&it.cutReload(Ee);for(const o of s.shots)BS(o);for(const o of s.events)(o.type==="dry"||o.type==="emptied")&&Qs();!r&&t&&Ct.loaded<=0&&!Ct.reloading&&Qs()}let Vs=-1/0;function Qs(){if(it.busy||_t.locks(Ee).reload)return;const n=xx(Ct,Ee);Ct=n.state,n.events.some(e=>e.type==="reloading")&&it.startReload(Ee)}const Er={melee:{cooldown:4,readyAt:0},grenade:{cooldown:14,readyAt:0},class:{cooldown:22,readyAt:0}},HS=n=>Ee>=Er[n].readyAt,GS=n=>{Er[n].readyAt=Ee+Er[n].cooldown};let In=0;const VS=.34;let $i=0;const WS=.25,Nh=8,cs=[],XS=14,qS=.7;function YS(n){const e=new vt(ga.box,new Di({color:5163386,emissive:1989684,emissiveIntensity:1.1,roughness:.55}));e.scale.set(.16,.16,.16),e.position.set(n.x,.14,n.z),ht.add(e),cs.push({mesh:e,bornAt:Ee})}function $S(n){for(let e=cs.length-1;e>=0;e--){const t=cs[e];t.mesh.rotation.y+=n*1.6,t.mesh.position.y=.14+Math.sin((Ee-t.bornAt)*3)*.03;const i=t.mesh.position.x-He.x,r=t.mesh.position.z-He.z,s=Math.hypot(i,r)<qS,o=Ee-t.bornAt>XS;s&&(mi.forEach((a,l)=>{if(a.ammoType!=="special")return;const u=a.reserveCap??1/0;l===zn?Ct={...Ct,reserve:Math.min(u,Ct.reserve+Nh)}:Ri[l]={...Ri[l],reserve:Math.min(u,Ri[l].reserve+Nh)}}),Ut.fire("pickup","special-ammo")),(s||o)&&(ht.remove(t.mesh),cs.splice(e,1))}}function KS(n,e="weapon"){if(e!=="super"){const t=In>=1;In=Math.min(1,In+VS),!t&&In>=1&&Ut.fire("flag","super-ready")}$i>=1?(n&&YS(n),$i=0):$i=Math.min(1,$i+WS),_2()}let Uc=-1/0;const jS=1.6,ZS=6;function JS(){Uc=Ee+ZS,Ut.fire("ability","class")}const QS=2.6,e2=80;function t2(){const n=new L,e=new L;gi.ray(Rt,n,e);const t=Ji.strikeRaycast(n,e,QS);if(t){const{killed:i}=uo(t.target,e2,"player-melee");Ta(t.point,.1),of(i),Ut.fire("ability","melee")}}const n2=14,Pl=3.2,Fh=120,i2=2.5,B0=new Di({color:16734780,emissive:16742972,emissiveIntensity:2,roughness:.5,metalness:0}),Ci=new vt(ga.sphere,B0);Ci.scale.setScalar(.16);Ci.visible=!1;ht.add(Ci);const z0=new L,r2=.6,Oh=new L,s2=new L;let eo=!1,lf=-1/0;function o2(n,e,t){eo&&cf(Ci.position.clone()),B0.color.set(t),B0.emissive.set(t),Ci.position.copy(n),z0.copy(e).multiplyScalar(7.5).add(new L(0,4.2,0)),Ci.visible=!0,eo=!0,lf=Ee,Ut.fire("ability","grenade")}function cf(n){Ta(n,.75),Oh.set(He.x,He.y+1,He.z);const e=Oh.distanceTo(n);e<Pl&&df(Fh*r2*(1-.5*(e/Pl)),"player-grenade");for(const t of fi)t.health.dead||wc(t,.5,s2).distanceTo(n)>Pl||uo(t,Fh,"player-grenade")}function a2(n){if(!eo)return;z0.y-=n2*n,Ci.position.addScaledVector(z0,n);const e=Ci.position;(e.y<=.1||e.x<-tt.halfW+.15||e.x>tt.halfW-.15||e.z<tt.far+.15||e.z>tt.near-.15||Ee-lf>i2)&&(cf(e.clone()),Ci.visible=!1,eo=!1)}function l2(){const n=new L,e=new L;gi.ray(Rt,n,e),Ta(n.clone().addScaledVector(e,3.5),.6);for(const t of fi)t.health.dead||uo(t,99999,"player-super");Ut.fire("ability","super")}const Nc=70,Aa=130,kh=2.75,c2=2.25,u2=Nc/2.7,h2=Aa/2.75;let Yt=Mc({max:Nc,shield:Aa}),uf=-1/0,hf=!1;function df(n,e="world"){if(Yt.dead)return;const{state:t,events:i}=Fd(Yt,{amount:n,source:e});Yt=t,uf=Ee,i.some(r=>r.type==="died")&&(Yt=Mc({max:Nc,shield:Aa}),Oc("r-down"))}function d2(n){if(Yt.dead)return;const e=Ee-uf;e>=kh&&Yt.hp<Yt.max&&(Yt=D0(Yt,{amount:u2*n,source:"regen"}).state),e>=kh+c2&&Yt.shield<Yt.shieldMax&&(Yt=D0(Yt,{shield:h2*n,source:"regen"}).state)}const ff={ghost:{name:"Ghost"}},Fc={"r-hello":{speaker:"ghost",text:"Range is live. Five, ten and twenty metres. Let's see what your hands remember."},"r-targets":{speaker:"ghost",text:"Good. They stand back up on their own. Try something else in your kit."},"r-switch":{speaker:"ghost",text:"Feel the difference? Grenade next. Lob it, and not at your own feet."},"r-grenade":{speaker:"ghost",text:"Loud. Now get in close and hit one. Your fists count too."},"r-melee":{speaker:"ghost",text:"That'll do. Your class ability now. It doesn't last, so make it count."},"r-class":{speaker:"ghost",text:"Every kill feeds your Super. Break a few more and I'll tell you when it's ready."},"r-super-ready":{speaker:"ghost",text:"There. That's your Super. Let it out."},"r-super":{speaker:"ghost",text:"That's what you are now. Kills build special ammo too. Watch for the drop."},"r-ammo":{speaker:"ghost",text:"Special ammo. The hand cannon's fed. The range is yours."},"r-down":{speaker:"ghost",text:"Up you get. Maybe keep your own grenades a bit further away."}};for(const[n,e]of Object.entries(Fc)){if(!ff[e.speaker])throw new Error(`comms: line '${n}' has unknown speaker '${e.speaker}'`);if(e.text.length>Ch)throw new Error(`comms: line '${n}' is ${e.text.length} chars, over MAX_LINE ${Ch}`)}const gn={queue:[],current:null,until:0,endedAt:-1/0},f2=.8,p2=n=>Math.max(2.4,.8+n.length*.05);function Oc(n){const e=Fc[n];if(!e)throw new Error(`comms: no line '${n}'`);gn.queue=[{id:n,...e}]}function m2(){if(gn.current&&Ee>=gn.until){const n=gn.current;gn.current=null,gn.endedAt=Ee,Ut.fire("vo",n.id)}!gn.current&&gn.queue.length&&(gn.current=gn.queue.shift(),gn.until=Ee+p2(gn.current.text))}const pf={id:"test-range",title:"Test Range",acts:[{id:"range",title:"Test Range",scenes:[{id:"drills",title:"Drills",beats:[{id:"r-01",trigger:"now",vo:"r-hello"},{id:"r-02",trigger:"kill",at:"target",count:3,progress:"kills",label:"Enemies defeated",objective:"Defeat enemies",vo:"r-targets"},{id:"r-03",trigger:"switch",at:"weapon",key:"1 2 3",objective:"Switch weapons",vo:"r-switch"},{id:"r-04",trigger:"ability",at:"grenade",key:"Q",objective:"Throw a grenade",vo:"r-grenade"},{id:"r-05",trigger:"ability",at:"melee",key:"C",objective:"Melee a target",vo:"r-melee"},{id:"r-06",trigger:"ability",at:"class",key:"V",objective:"Use your class ability",vo:"r-class"},{id:"r-07",trigger:"flag",at:"super-ready",progress:"super",label:"Super energy",objective:"Charge your Super",vo:"r-super-ready"},{id:"r-08",trigger:"ability",at:"super",key:"F",objective:"Cast your Super",vo:"r-super"},{id:"r-09",trigger:"pickup",at:"special-ammo",progress:"special",label:"Special ammo",objective:"Collect special ammo",vo:"r-ammo"}]}]}]},g2="Free fire",Il=new Set,Ut=RS({host:{knows:n=>Il.has(n),learn:n=>Il.add(n)},knows:n=>n==="super-ready"?In>=1:Il.has(n),triggers:["now","flag","vo","kill","switch","ability","pickup"],onBeat:n=>{n.vo&&Oc(n.vo)}});Ut.load(pf);for(const n of pf.acts[0].scenes[0].beats)if(n.vo&&!Fc[n.vo])throw new Error(`episode: beat '${n.id}' plays missing line '${n.vo}'`);let is={id:null,n:0};function _2(){const n=Ut.beat;!n||n.trigger!=="kill"||(is.id!==n.id&&(is={id:n.id,n:0}),is.n+=1,is.n>=(n.count??1)&&Ut.fire("kill",n.at))}const ho=new cx,Dt=new dx(ho,Ma);Ma.addEventListener("click",()=>{Dt.locked||Dt.requestLock()});Ma.addEventListener("contextmenu",n=>n.preventDefault());ho.on("input:wheel",({delta:n})=>{if(!Dt.locked)return;const e=mi.length;ls((zn+(n>0?1:-1)+e)%e)});ho.on("input:pointerlock",({locked:n})=>{var e;(e=document.getElementById("hint"))==null||e.classList.toggle("gone",n),!n&&!Qn&&Ut.begun&&(Ra(),xf=performance.now()),n&&!Ut.begun&&Ut.begin()});const v2=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight"];ho.on("input:key",({code:n})=>{if(Qn||!Dt.locked||v2.some(t=>Dt.down.has(t)))return;const e=_t.locks(Ee);n==="KeyR"&&(e.reload?Vs=Ee:Qs()),n==="KeyQ"&&_t.press("grenade"),n==="KeyC"&&_t.press("melee"),n==="KeyV"&&_t.press("class"),n==="KeyF"&&_t.press("super"),n==="Digit1"&&ls(0),n==="Digit2"&&ls(1),n==="Digit3"&&ls(2)});const Tt={yaw:0,pitch:0},x2=1.5,He={x:0,z:0,y:0},M2=4.2,gr=.35,S2=20,y2=6.4,E2=5.6,b2=1;let hr=0,Dl=0;const to={aim:!1,fire:!1},Ul=new Qt(0,0,0,"YXZ"),Bh=new L,zh=new L,$r=new L,Nl=(n,e,t)=>Math.max(e,Math.min(t,n)),us={solid:new Di({vertexColors:!0,roughness:.85,metalness:0}),glow:new un({vertexColors:!0})},Hh=new un({color:0}),w2={x:0,y:0},$s=new L;let fo=ba,na=null,yn=va(ba,us);yn.root.visible=!1;ht.add(yn.root);const En=oM({room:tt,fov:Ea,radius:.2}),kc=uM({abilities:Zn,moments:Tr}),Ji=bM({raycaster:ns,strikeRay:Js,getWeapon:()=>Ct,setWeapon:n=>{Ct=n},cancelEngineReload:Dc,fp:it,now:()=>Ee,getSuperCharge:()=>In,setSuperChargeValue:n=>{In=n},episode:Ut,moment:En,pitchLimit:x2}),_t=dM({scene:ht,ROOM:tt,camera:Rt,fp:it,runner:kc,moment:En,player:He,view:Tt,PLAYER_RADIUS:gr,strikeRaycast:Ji.strikeRaycast,now:()=>Ee,classId:()=>fo,body:()=>yn,moveAxis:()=>Dt.axis(),ability:{ready:n=>HS(n)&&!(n==="grenade"&&eo),use:GS},superCharge:{get:()=>In,set:Ji.setSuperCharge},weapons:{fillMagazine:Ji.fillMagazine,cancelReload:()=>{Ct=Dc(Ct)}},legacy:{throwGrenade:o2,meleeStrike:t2,ward:JS,superWipe:l2}});let Ki=null,hs=null,Qn=!1,mf=ba;const Wi=document.getElementById("preview-canvas");let oi=null,ci=null,ds=null,Jt=null,H0=0,ua=0,gf=!0;function Bc(n){Hn[n]&&(mf=n,ci&&(Jt&&(ci.remove(Jt.root),Jt.dispose()),Jt=va(n,us),Jt.pose(H0,{base:"preview"}),Jt.root.position.set(0,0,0),Jt.root.rotation.set(0,ua,0),Jt.root.updateMatrixWorld(!0),ci.add(Jt.root)),document.querySelectorAll("#menu-classes button").forEach(e=>e.classList.toggle("active",e.dataset.garment===n)),na=n,_f())}function _f(){if(!na||_t.busy)return;const n=na;na=null,n!==fo&&zc(n)}function zc(n){fo=n,it.setClass(n),ht.remove(yn.root),yn.dispose(),yn=va(n,us),yn.root.visible=!1,ht.add(yn.root),_t.setClass(n)}function T2(){if(oi||!Wi)return;oi=new ac({canvas:Wi,antialias:!0,alpha:!0}),oi.setPixelRatio(Math.min(devicePixelRatio||1,2)),oi.outputColorSpace=Ln,oi.toneMapping=q0,ci=new ma,ci.add(new _c(3949127,.85));const n=new gc(16777215,1.6);n.position.set(2,3,3),ci.add(n),ci.add(new mc(14674158,3813928,.9)),ds=new xn(40,1,.05,10),ds.position.set(0,1.1,3.2),ds.lookAt(0,.94,0),Bc(mf)}function vf(){const n=document.getElementById("menu-inventory");n&&(n.innerHTML=mi.map((e,t)=>{const i=t===zn?Ct:Ri[t],r=i.reserve===1/0?"∞":i.reserve;return`<div class="inv-slot${t===zn?" equipped":""}" data-index="${t}">
      <span>${e.label} &middot; ${i.loaded}/${r}</span>
      <span class="ammo-tag ${e.ammoType}">${e.ammoType}</span>
    </div>`}).join(""),n.querySelectorAll(".inv-slot").forEach(e=>{e.addEventListener("click",()=>{ls(Number(e.dataset.index)),vf()})}))}function Ra(){Qn=!Qn;const n=document.getElementById("menu");if(n&&(n.hidden=!Qn),Qn){Dt.releaseLock(),T2();const e=(Wi==null?void 0:Wi.clientWidth)||360,t=(Wi==null?void 0:Wi.clientHeight)||220;oi&&(oi.setSize(e,t,!1),ds.aspect=e/t,ds.updateProjectionMatrix()),vf()}else Dt.requestLockFresh(),In>=1&&bf()}let xf=-1/0;ho.on("action:cancel",()=>{Qn&&performance.now()-xf<300||Ra()});var Jh;(Jh=document.getElementById("menu-resume"))==null||Jh.addEventListener("click",()=>{Qn&&Ra()});document.querySelectorAll("#menu-classes button").forEach(n=>{n.addEventListener("click",()=>Bc(n.dataset.garment))});const ha=n=>Object.keys(Hn).find(e=>Object.values(Hn[e]).includes(n));function A2(n,e=0){if(n===null){Ki&&(En.finish(Ee-Tr[Zn[Ki.id].camera].blendBack-.001),En.update(Ee,{feet:$s.set(He.x,He.y,He.z),yaw:Tt.yaw,pitch:Tt.pitch})),Ki=null,yn.root.visible=En.active,Ss();return}const t=Zn[n];if(!(t!=null&&t.camera))throw new Error(`poseAt: '${n}' is not a third-person ability`);ha(n)!==fo&&zc(ha(n)),Ki={id:n,t:e},En.start(t.camera,Ee-Tr[t.camera].blendOut-.001),En.update(Ee,{feet:$s.set(He.x,He.y,He.z),yaw:Tt.yaw,pitch:Tt.pitch}),yn.root.visible=!0,yn.pose(Ee,{base:"ready",clip:n,t:e,feet:$s,facing:Tt.yaw}),Ss()}function R2(n,e=0,{charged:t=!0}={}){const i=Zn[n];if(it.swapping)throw new Error("fpAt: a swap is running");ha(n)!==fo&&zc(ha(n));const r=i.seconds+(i.camera?Tr[i.camera].blendBack:0);it.act(n,Ee-e*i.seconds,r,{charged:t}),it.update(0,Ee,{}),Ss()}function G0(n){ht.overrideMaterial=n?Hh:null,ht.background.set(n?16777215:1053204),ci&&(ci.overrideMaterial=n?Hh:null,oi.setClearColor(n?16777215:0,n?1:0))}let dr=null;function C2(n){if(dr){for(const l of dr.items)ht.remove(l.root),l.dispose();for(const[l,u]of dr.visible)l.visible=u;G0(!1),hs=null,dr=null}if(!n){Ss();return}const{bodies:e,distance:t=8,eye:i=jd,yaw:r=0,spacing:s=1.2,silhouette:o=!1}=n;dr={items:[],visible:new Map};const a=new Set;e.forEach((l,u)=>{let c;if(Hn[l])c=va(l,us),c.pose(0,{base:"ready"});else{const h=lo(Ic[l].spec,{solidMaterial:us.solid,glowMaterial:us.glow});c={root:h.root,dispose:()=>h.dispose()}}c.root.position.x=(u-(e.length-1)/2)*s,c.root.position.z=-t,c.root.rotation.y=r,c.root.updateMatrixWorld(!0),ht.add(c.root),a.add(c.root),dr.items.push(c)});for(const l of ht.children)l!==_t.effectsRoot&&(dr.visible.set(l,l.visible),l.visible=a.has(l)||!o&&(l.isLight||Jd.includes(l)));_t.clearWorld(),G0(o),hs={position:[0,i,0],target:[0,i,-t]},Ss()}function L2(n){gf=n===null,n!==null&&(ua=n)}function Mf(n){if(Qn){Jt&&(H0+=n,gf&&(ua+=n*.6),Jt.pose(H0,{base:"preview"}),Jt.root.position.set(0,0,0),Jt.root.rotation.set(0,ua,0),Jt.root.updateMatrixWorld(!0)),Dt.endFrame();return}Ee+=n,_f();const e=_t.locks(Ee),t=Dt.locked&&Dt.down.has("Mouse2")||to.aim;t&&(yf=Ee),it.setAim(t&&!e.aim);const{dx:i,dy:r}=Dt.consumeMouse();let s=0,o=0;if(Ji.notePitch(Tt.pitch),Dt.locked){const f=Dt.mouse.sensitivity*(Rt.fov/Ea);s=-i*f,o=-r*f,Tt.yaw+=s,Tt.pitch+=o;const g=it.recoil;if(g.pitch>0&&o<0){const p=Math.min(g.pitch,-o);g.pitch-=p,Tt.pitch+=p}if(g.yaw>0&&s<0){const p=Math.min(g.yaw,-s);g.yaw-=p,Tt.yaw+=p}if(g.yaw<0&&s>0){const p=Math.min(-g.yaw,s);g.yaw+=p,Tt.yaw-=p}const[v,m]=Ji.pitchWindow();Tt.pitch=Nl(Tt.pitch,v,m)}Rt.rotation.set(Tt.pitch+it.recoil.pitch,Tt.yaw+it.recoil.yaw,0,"YXZ"),Ul.set(0,Tt.yaw,0,"YXZ");const a=e.move==="free"?Dt.axis():w2;Bh.set(0,0,-1).applyEuler(Ul),zh.set(1,0,0).applyEuler(Ul),$r.set(0,0,0).addScaledVector(Bh,a.y).addScaledVector(zh,a.x),$r.lengthSq()>0&&$r.normalize();const l=$r.lengthSq()>0?M2*(1-.25*it.adsE):0;let u=null;e.move==="driven"?(u=_t.drive(n,He),u&&(hr=u.velY)):(He.x+=$r.x*l*n,He.z+=$r.z*l*n),He.x=Nl(He.x,-tt.halfW+gr,tt.halfW-gr),He.z=Nl(He.z,tt.far+gr,tt.near-gr);for(const f of fi){if(f.health.dead)continue;const g=He.x-f.root.position.x,v=He.z-f.root.position.z,m=f.footprint+gr,p=g*g+v*v;if(p>=m*m)continue;const M=Math.sqrt(p);if(M<1e-6){He.z=f.root.position.z+m;continue}He.x=f.root.position.x+g/M*m,He.z=f.root.position.z+v/M*m}_t.pushOut(He,gr);const c=He.y<=0;Dt.wasPressed("jump")&&!e.jump&&(c?(hr=y2,Dl=0):Dl<b2&&(hr=E2,Dl++));let h=0;u||(hr-=S2*n,He.y=Math.max(0,He.y+hr*n),He.y<=0&&(c||(h=Math.max(0,-hr)),He.y=0,hr=0)),Rt.position.set(He.x,jd+He.y,He.z),Ki||_t.onEvents(kc.update(Ee)),_t.update(n),Vs>-1/0&&(Ee-Vs>U0?Vs=-1/0:!_t.locks(Ee).reload&&!it.busy&&(Vs=-1/0,Qs())),a2(n),$S(n),d2(n),m2(),(Dt.locked||to.fire)&&af(e),Ct=_x(Ct,Ee).state,it.update(n,Ee,{lookYaw:s,lookPitch:o,speed:l,airborne:He.y>0,landed:h}),gi.update(n),Rt.fov=it.worldFov,Rt.updateProjectionMatrix(),Rt.rotation.set(Tt.pitch+it.recoil.pitch,Tt.yaw+it.recoil.yaw,0,"YXZ"),En.update(Ee,{feet:$s.set(He.x,He.y,He.z),yaw:Tt.yaw,pitch:Tt.pitch}),Ss(),_t.lateUpdate(Ee),Ki&&(yn.pose(Ee,{base:"ready",clip:Ki.id,t:Ki.t,feet:$s,facing:Tt.yaw}),yn.root.visible=!0),document.body.classList.toggle("third-person",En.active),document.body.classList.toggle("tp-aim",En.active&&_t.aiming),tf.opacity=Ee<nf?.9:0,wa.scale.setScalar(Ee<rf?sf:1e-4);const d=document.getElementById("cross");d&&(d.style.opacity=(1-Ef(.5,.85,it.adsE)).toFixed(3)),Cl.x=He.x,Cl.z=He.z;for(const f of fi)SS(f,n,Ee,{face:Cl});bS(n),wf(n),Dt.endFrame()}function Sf(){di.render(ht,_n),!En.active&&!hs&&gi.pass(di,_n),Qn&&oi&&Jt&&oi.render(ci,ds)}const P2=new L,I2=new zt,D2=new Qt(0,0,0,"YXZ");function Ss(){if(hs)_n.position.set(...hs.position),_n.lookAt(...hs.target),_n.fov=Ea;else if(En.active)En.apply(_n);else{const n=it.camOffset;_n.position.copy(Rt.position).add(P2.set(n.x,n.y,n.z).applyQuaternion(Rt.quaternion)),_n.quaternion.copy(Rt.quaternion).multiply(I2.setFromEuler(D2.set(n.pitch,n.yaw,n.roll,"YXZ"))),_n.fov=Rt.fov}_n.aspect=Rt.aspect,_n.updateProjectionMatrix(),_n.updateMatrixWorld()}const Gh=132,Vh=48;function U2(){const n=document.createElement("canvas");n.width=Gh,n.height=Vh;let e;try{e=new ac({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return mi.map(()=>"")}e.setClearColor(0,0);const t=new ma;t.overrideMaterial=new un({color:16777215});const i=new sc(-1,1,1,-1,.01,10),r=new L,s=new L,o=xa.map(a=>qd(a,{icon:!0})).map(({group:a})=>{const l=a;t.add(l),l.updateMatrixWorld(!0);const u=new Ii().setFromObject(l);u.getSize(r),u.getCenter(s);let c=r.z/2*1.08,h=r.y/2*1.08;const d=Gh/Vh;return c/h>d?h=c/d:c=h*d,i.left=-c,i.right=c,i.top=h,i.bottom=-h,i.position.set(s.x+2,s.y,s.z),i.lookAt(s),i.updateProjectionMatrix(),e.render(t,i),t.remove(l),n.toDataURL("image/png")});return t.overrideMaterial.dispose(),e.dispose(),e.forceContextLoss(),o}const V0=U2(),Fl=60,N2=Math.cos(io.degToRad(4)),Wh=2.5,Xh=new Map,Kr=new Cd,jr=new L,Ol=new L,kl=new L,Bl=new L;function F2(n,e){let t=Xh.get(n);return t||(t=document.createElement("div"),t.className=`plate ${n.rank}`,t.innerHTML=`<div class="col"><div class="name">${n.name}</div><div class="bar"><i class="fill"></i><i class="shield"></i></div></div>`,e.appendChild(t),Xh.set(n,t),t)}function O2(){var r;const n=document.getElementById("nameplates");if(!n)return;Rt.updateMatrixWorld(),Rt.getWorldDirection(kl),Kr.set(Rt.position,kl),Kr.far=Fl;const e=((r=Js(Kr))==null?void 0:r.target)??null,t=innerWidth||1280,i=innerHeight||720;for(const s of fi){const o=F2(s,n);wc(s,.62,Ol);const a=Ol.distanceTo(Rt.position);let l=s===e;if(!l&&a<Fl&&(Bl.copy(Ol).sub(Rt.position).divideScalar(a||1),Bl.dot(kl)>N2)){Kr.set(Rt.position,Bl),Kr.far=a;const f=Js(Kr);l=!f||f.target===s}l&&(s.plateSeenAt=Ee);const u=a<Fl&&(Ee-(s.plateSeenAt??-1/0)<Wh||Ee-s.lastHitAt<Wh);jr.set(s.root.position.x,s.root.position.y+s.top+.2,s.root.position.z).project(_n);const c=jr.z<1&&Math.abs(jr.x)<1.05&&Math.abs(jr.y)<1.05;if(o.hidden=s.health.dead||!c,o.classList.toggle("on",u),o.hidden)continue;const h=(jr.x*.5+.5)*t,d=(-jr.y*.5+.5)*i;o.style.transform=`translate(${h.toFixed(1)}px, ${d.toFixed(1)}px) translate(-50%, -100%)`,o.querySelector(".fill").style.width=`${(Od(s.health)*100).toFixed(1)}%`,o.querySelector(".shield").style.width=`${(Sc(s.health)*100).toFixed(1)}%`}}function k2(n,e,t){const i=document.getElementById(n);i&&(i.style.setProperty("--pct",`${Math.round(e*100)}%`),i.classList.toggle("ready",t))}const Ws=Math.PI*2,rs=8,zl=24,B2=48,z2=.8,Qr=92,Zr=Qr*.4,W0=[];let yf=-1/0;const H2="http://www.w3.org/2000/svg",Sr=(n,e)=>`${(100+n*Math.sin(e)).toFixed(2)} ${(100-n*Math.cos(e)).toFixed(2)}`,qh=(n,e,t)=>`M${Sr(n,e)} A${n} ${n} 0 0 1 ${Sr(n,t)}`;function Hi(n,e){const t=document.createElementNS(H2,n);for(const[i,r]of Object.entries(e))t.setAttribute(i,String(r));return t}function G2(){const n=document.getElementById("radar-svg");if(!n)return;Hi("defs",{}),n.appendChild(Hi("circle",{cx:100,cy:100,r:Qr,fill:"rgba(12,17,22,0.38)",stroke:"rgba(255,255,255,0.24)","stroke-width":1.4})),n.appendChild(Hi("circle",{cx:100,cy:100,r:Zr,fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":1.2}));const e=Ws/rs,t=io.degToRad(1.5);for(let i=0;i<rs;i++){const r=(i-.5)*e+t/2,s=(i+.5)*e-t/2,o=Hi("path",{d:`M${Sr(Zr,r)} L${Sr(Qr,r)} A${Qr} ${Qr} 0 0 1 ${Sr(Qr,s)} L${Sr(Zr,s)} A${Zr} ${Zr} 0 0 0 ${Sr(Zr,r)} Z`,fill:"#b8452f",opacity:0}),a=(r+s)/2,l=(s-r)*.3,u=Hi("g",{opacity:0});u.append(Hi("path",{d:qh(96,r,s),fill:"none",stroke:"#e04a32","stroke-width":3,opacity:.4}),Hi("path",{d:qh(96,a-l,a+l),fill:"none",stroke:"#e04a32","stroke-width":3})),n.append(o,u),W0.push({fill:o,far:u,near:0,farValue:0})}n.appendChild(Hi("path",{d:"M100 90 L107.5 109 L100 104.5 L92.5 109 Z",fill:"#4a82e6",stroke:"#a9c6f5","stroke-width":1.2,"stroke-linejoin":"round"}))}G2();const Yh=(n,e,t)=>n+(e-n)*Math.min(1,t/(e>n?.15:.4));function Ef(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function V2(n){var r;if((r=document.getElementById("radar"))==null||r.classList.toggle("ads",Ee-yf<z2),!W0.length)return;const e=new Array(rs).fill(0),t=new Array(rs).fill(0),i=Ws/rs;for(const s of fi){if(s.health.dead)continue;const o=s.root.position.x-He.x,a=s.root.position.z-He.z,l=Math.hypot(o,a);if(l>B2)continue;const u=((Math.atan2(o,-a)+Tt.yaw)%Ws+Ws)%Ws,c=Math.round(u/i)%rs;l>=zl*.7&&(t[c]=1),l<zl&&(e[c]=Math.max(e[c],1-l/zl))}W0.forEach((s,o)=>{s.near=Yh(s.near,e[o],n),s.farValue=Yh(s.farValue,t[o],n),s.fill.setAttribute("opacity",(.7*Ef(0,.75,s.near)).toFixed(2)),s.far.setAttribute("opacity",s.farValue.toFixed(2))})}function Pn(n,e){n&&n.textContent!==e&&(n.textContent=e)}const W2=.7;let Bs,zs,Hl=-1/0;function X2(n){return n!=null&&n.progress?n.progress==="kills"?`${is.id===n.id?is.n:0}/${n.count??1}`:n.progress==="super"?`${Math.round(In*100)}%`:n.progress==="special"?cs.length?"Dropped":`${Math.round($i*100)}%`:"":""}function q2(n){return(n==null?void 0:n.progress)==="kills"?`${n.count??1}/${n.count??1}`:(n==null?void 0:n.progress)==="super"?"100%":(n==null?void 0:n.progress)==="special"?"Collected":""}let Gl=null;function Y2(){const n=document.getElementById("objective");if(!n)return;const e=n.querySelector(".obj.main"),t=n.querySelector(".obj.sub"),i=n.querySelector(".obj.value"),r=Ut.begun?Ut.over?g2:Ut.objective:null;if(r!==Bs&&r!==zs&&(zs=r,Bs?(Hl=Ee+W2,n.classList.remove("fresh"),n.classList.add("complete"),Pn(e.querySelector(".key"),""),Pn(i.querySelector(".count"),q2(Gl))):Hl=Ee),zs!==void 0&&Ee>=Hl&&(Bs=zs,zs=void 0,Gl=Ut.over?null:Ut.beat,n.hidden=!Bs,Pn(e.querySelector(".text"),Bs??""),n.classList.remove("complete","fresh"),n.offsetWidth,n.classList.add("fresh")),n.classList.contains("complete"))return;const s=Gl,o=!!(s!=null&&s.progress);e.classList.toggle("step",o),Pn(e.querySelector(".key"),(s==null?void 0:s.key)??""),t.hidden=!o,i.hidden=!o,o&&(Pn(t.querySelector(".label"),s.label??""),Pn(i.querySelector(".count"),X2(s)))}function $2(){const n=document.getElementById("buff-ward");if(!n)return;const e=Uc-Ee;n.hidden=e<=0,e>0&&Pn(n.querySelector(".time"),`${Math.ceil(e)}s`)}let $h=Aa;function K2(){var s;const n=document.getElementById("vitals");if(!n)return;const e=Od(Yt),t=Sc(Yt),i=Yt.shield<=0;n.classList.toggle("shown",e<1||t<1),n.classList.toggle("broken",i&&e<1),n.classList.toggle("critical",i&&e<.5),i&&$h>0&&(n.classList.remove("shattered"),n.offsetWidth,n.classList.add("shattered")),$h=Yt.shield,n.style.setProperty("--hp",e.toFixed(3)),n.style.setProperty("--sh",t.toFixed(3)),(s=document.getElementById("zone"))==null||s.classList.toggle("on",hf);const r=document.getElementById("vignette");r&&(r.style.opacity=i?Math.min(.9,(1-e)*1.2).toFixed(2):"0")}function j2(){const n=document.getElementById("comms"),e=document.getElementById("subtitle");if(!n||!e)return;const t=gn.current,i=!!t||Ee-gn.endedAt<f2;n.classList.toggle("on",i),e.classList.toggle("on",i),t&&(Pn(n.querySelector(".speaker"),ff[t.speaker].name),Pn(e.querySelector(".line"),t.text))}let Kh=null;function Z2(){const n=document.getElementById("weapons");return n?(n.innerHTML=mi.map((e,t)=>`
    <div class="wpn">
      ${V0[t]?`<img class="icon" alt="" src="${V0[t]}">`:'<span class="icon"></span>'}
      <span class="ammo-type ${e.ammoType}"><i></i><i></i><i></i></span>
      <span class="reserve"></span>
      <span class="mag"></span>
      ${e.ammoType==="special"?'<div class="meter"><div class="fill"></div></div>':""}
    </div>`).join(""),[...n.querySelectorAll(".wpn")]):[]}let jh=!1;function bf(){const n=document.getElementById("super-flash");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}function J2(){const n=document.getElementById("super");if(n){const t=In>=1;n.style.setProperty("--charge",In.toFixed(3)),n.classList.toggle("ready",t),t&&!jh&&bf(),jh=t}for(const[t,i]of[["ab-grenade","grenade"],["ab-melee","melee"],["ab-class","class"]]){const r=Math.max(0,Er[i].readyAt-Ee),s=Er[i].cooldown>0?r/Er[i].cooldown:0;k2(t,s,r<=0)}Kh??(Kh=Z2());const e="∞";Kh.forEach((t,i)=>{const r=i===zn,s=r?Ct:Ri[i],o=s.reserve===1/0;t.classList.toggle("active",r),t.style.order=r?"0":String(i+1),r?(Pn(t.querySelector(".mag"),String(s.loaded)),Pn(t.querySelector(".reserve"),o?e:String(s.reserve))):(Pn(t.querySelector(".mag"),""),Pn(t.querySelector(".reserve"),o?e:String(s.loaded+s.reserve))),t.classList.toggle("low",s.loaded<=Math.floor(s.magazine*.2)),t.classList.toggle("empty",!o&&s.loaded+s.reserve===0);const a=t.querySelector(".meter");a&&(a.firstElementChild.style.width=`${Math.round($i*100)}%`,a.classList.toggle("full",$i>=1))})}function wf(n=0){V2(n),O2(),Y2(),$2(),K2(),j2(),J2()}addEventListener("resize",()=>{if(!(!innerWidth||!innerHeight)){di.setSize(innerWidth,innerHeight,!1);for(const n of[Rt,_n])n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()}});let Zh=performance.now();function Tf(n){const e=Math.min((n-Zh)/1e3,.25);Zh=n,Mf(e),Sf(),requestAnimationFrame(Tf)}requestAnimationFrame(Tf);window.game={scene:ht,camera:Rt,renderCamera:_n,renderer:di,view:Tt,player:He,weapon:()=>Ct,targets:fi,update:Mf,render:Sf,viewmodel:gi,units:Ic,strikeRay:Js,hitTarget:uo,input:Dt,attemptFire:af,doReload:Qs,throwGrenade:()=>_t.press("grenade"),doMelee:()=>_t.press("melee"),useClassAbility:()=>_t.press("class"),useSuper:()=>_t.press("super"),ability:()=>Er,superCharge:()=>In,setSuperCharge:Ji.setSuperCharge,switchWeapon:ls,weaponDefs:()=>mi,activeWeapon:()=>zn,fp:it,debug:to,specialMeter:()=>$i,ammoBricks:()=>cs,weaponStates:Ri,toggleMenu:Ra,menuOpen:()=>Qn,setGarment:Bc,previewBody:()=>Jt,guardian:{get body(){return yn},get previewBody(){return Jt},runner:kc,moment:En,game:_t,comfort:bc,seam:Ji,data:{ABILITIES:Zn,CLASSES:Hn,ELEMENTS:co,MOMENTS:Tr,NAMES:EM},poseAt:A2,fpAt:R2,silhouette:G0,stage:C2,previewView:L2},episode:Ut,comms:gn,sayLine:Oc,hurtPlayer:df,playerHealth:()=>Yt,updateHud:wf,weaponIcons:V0,setRestrictedZone:n=>{hf=!!n}};console.log(`PRE-DESTINY test range booted — ${fi.length} enemies in two lanes, magazine ${Ct.magazine}, reserve ${Ct.reserve}, reload ${Ct.reloadTime}s`);
