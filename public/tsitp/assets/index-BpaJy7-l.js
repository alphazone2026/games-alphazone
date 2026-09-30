import{D as gt,a4 as Ft,a5 as Nt,a6 as Dt,C as N,a7 as it,V as S,a as te,a8 as It,B as Q,f as I,Z as re,a9 as Pt,aa as zt,e as A,ab as Le,c as Me,ac as Lt,ad as ae,ae as Ut,af as Ct,a0 as Gt,ag as Wt,ah as Bt,ai as Ht,H as qt,aj as jt,ak as $t,al as ne,am as Vt,M as Ue,an as Kt,G as Ae,ao as Ve,ap as Qt,p as se,g as Se,a3 as Yt,X as Xt,z as ot,R as Zt,aq as Jt,ar as es,as as ts,at as ss,N as is,u as de,A as os,a2 as Oe,Q as as,P as ns,au as rs,i as Z,w as ls,q as cs}from"./three.module-B2EoO__-.js";import{m as ye}from"./BufferGeometryUtils-Desa92ux.js";import{D as hs,w as mt,S as fs}from"./Wind-4THtRkpO.js";import"./Materials-CXQikzTC.js";import{W as us,N as ds}from"./weather-DTQz8MlZ.js";import{l as ps}from"./settings-9dmrdRDI.js";const gs={none:null,lawn:8034893,"dry grass":10394467,rough:6130235,fairway:7252039,green:7124306,bunker:15129011,shade:5921594,asphalt:5658715,concrete:10986392,dirt:10717535,sand:null,dune:null,marsh:null,water:3822156,"worn paving":9210499};async function oo(n,e){const t=n.groundKinds;if(!t)return null;const s=await(await fetch(e)).blob(),i=await createImageBitmap(s,{colorSpaceConversion:"none",premultiplyAlpha:"none"});if(i.width!==t.w||i.height!==t.h)throw new Error(`ground.png is ${i.width}x${i.height}, world.json says ${t.w}x${t.h}`);const o=new OffscreenCanvas(i.width,i.height).getContext("2d",{willReadFrequently:!0});o.drawImage(i,0,0);const r=o.getImageData(0,0,i.width,i.height).data,c=new Uint8Array(i.width*i.height);for(let l=0,h=0;l<c.length;l++,h+=4)c[l]=r[h];return ms(n,c)}function ms(n,e){const t=n.groundKinds,s=(i,a)=>{const o=Math.round(i-t.x0),r=Math.round(a-t.y0);return o<0||r<0||o>=t.w||r>=t.h?0:e[r*t.w+o]};return{...t,data:e,at:s,name:(i,a)=>t.kinds[s(i,a)]}}const vs={value:!0},ws=`
float gkHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float gkNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(gkHash(i), gkHash(i + vec2(1, 0)), f.x), mix(gkHash(i + vec2(0, 1)), gkHash(i + vec2(1, 1)), f.x), f.y);
}
float gkFbm(vec2 p) { return 0.55 * gkNoise(p) + 0.3 * gkNoise(p * 2.03 + 17.1) + 0.15 * gkNoise(p * 4.1 + 3.7); }
`,xs=`
vec3 gkShade(int k, vec2 p, vec3 base, float near) {
  float d = 1.0;
  if (k == 1 || k == 2) {                         // lawn, dry grass: patchy, with sun-dried spots
    d = 0.86 + 0.26 * gkFbm(p * 0.45) + 0.08 * (gkNoise(p * 3.1) - 0.5) * near;
    base = mix(base, vec3(0.42, 0.40, 0.2), 0.25 * smoothstep(0.55, 0.8, gkFbm(p * 0.06 + 9.0)));
  } else if (k == 3) {                            // rough: clumpy and darker
    d = 0.84 + 0.3 * gkFbm(p * 0.7);
  } else if (k == 4) {                            // fairway: mowing stripes, 8 m wide
    d = 0.95 + 0.07 * step(0.5, fract(dot(p, vec2(0.875, 0.485)) / 16.0)) + 0.05 * gkFbm(p * 0.3);
  } else if (k == 5) {                            // green: close-cut, fine stripes
    d = 0.97 + 0.05 * step(0.5, fract(dot(p, vec2(0.485, -0.875)) / 6.0));
  } else if (k == 6 || k == 11 || k == 12) {      // bunker, sand, dune: grain and ripples
    d = 0.94 + 0.08 * gkNoise(p * 0.4) + 0.06 * (gkHash(floor(p * 9.0)) - 0.5) * near
        + 0.03 * sin(dot(p, vec2(0.6, 0.8)) * 3.0 + gkNoise(p * 0.2) * 6.0) * near;
  } else if (k == 7) {                            // shade: leaf litter, pine straw, bare earth
    float n = gkFbm(p * 0.8);
    base = mix(base, vec3(0.16, 0.11, 0.06), 0.45 * smoothstep(0.4, 0.8, n));
    d = 0.82 + 0.3 * gkFbm(p * 2.3 + 5.0);
  } else if (k == 8 || k == 15) {                 // asphalt, worn paving: speckle, patches, oil
    d = 0.9 + 0.14 * gkFbm(p * 0.25) + 0.1 * (gkHash(floor(p * 12.0)) - 0.5) * near;
  } else if (k == 9) {                            // concrete: weathered slabs
    d = 0.92 + 0.1 * gkFbm(p * 0.5) + 0.05 * (gkHash(floor(p * 10.0)) - 0.5) * near;
  } else if (k == 10) {                           // dirt
    d = 0.85 + 0.25 * gkFbm(p * 0.6);
  } else if (k == 13) {                           // marsh: streaks of cordgrass
    d = 0.85 + 0.25 * gkFbm(vec2(p.x * 0.3, p.y * 1.2));
  } else if (k == 14) {                           // water
    d = 0.95 + 0.06 * gkNoise(p * 0.3);
  }
  return base * mix(1.0, d, 0.5 + 0.5 * near);
}
`;function ao(n,e,t){const s=t.capabilities.maxTextureSize;if(e.w>s||e.h>s)return console.warn(`ground kinds: ${e.w}x${e.h} is over this GPU's ${s}px texture limit; 4 m colours only`),null;const i=new gt(e.data,e.w,e.h,Ft,Nt);i.magFilter=i.minFilter=Dt,i.generateMipmaps=!1,i.unpackAlignment=1,i.needsUpdate=!0;const a=new N,o=e.kinds.map(r=>{const c=gs[r];return c==null?new it(0,0,0,0):(a.setHex(c),new it(a.r,a.g,a.b,1))});return n.onBeforeCompile=r=>{r.uniforms.gkMap={value:i},r.uniforms.gkOrigin={value:new S(e.x0,e.y0)},r.uniforms.gkSize={value:new S(e.w,e.h)},r.uniforms.gkDedupe=vs,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGkWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGkWorld;
uniform sampler2D gkMap;
uniform vec2 gkOrigin;
uniform vec2 gkSize;
uniform bool gkDedupe;
const vec4 gkColour[${o.length}] = vec4[](${o.map(c=>`vec4(${c.x.toFixed(4)}, ${c.y.toFixed(4)}, ${c.z.toFixed(4)}, ${c.w.toFixed(1)})`).join(", ")});
${ws}
${xs}
int gkKind(ivec2 t) {
  if (t.x < 0 || t.y < 0 || t.x >= int(gkSize.x) || t.y >= int(gkSize.y)) return 0;
  return int(texelFetch(gkMap, t, 0).r * 255.0 + 0.5);
}`).replace("#include <color_fragment>",`#include <color_fragment>
{
  vec2 wp = vec2(vGkWorld.x, -vGkWorld.z);                 // world metres, y north
  float near = 1.0 - smoothstep(120.0, 420.0, distance(vGkWorld, cameraPosition));
  // Up close the metre grid must not show: the lookup is WARPED by up to
  // ~0.55 m of smooth noise, so an edge wanders as a lawn's or a path's does,
  // and the blend between neighbouring metres is SHARPENED to a ~0.3 m band.
  // Plain bilinear read as soft 1 m squares at street level (Ben, 2026-09-26).
  // Far off, both fade out: bilinear is the anti-aliasing there.
  vec2 warp = (vec2(gkNoise(wp * 0.85), gkNoise(wp * 0.85 + 31.7)) - 0.5) * 1.1 * near
            + (vec2(gkNoise(wp * 3.1 + 7.3), gkNoise(wp * 3.1 + 19.1)) - 0.5) * 0.25 * near;
  vec2 gp = wp + warp - gkOrigin;                           // texel i sits at x0 + i
  ivec2 b = ivec2(floor(gp));
  vec2 f = gp - floor(gp);
  f = mix(f, smoothstep(0.35, 0.65, f), near);
  vec3 acc = vec3(0.0); float wsum = 0.0; float wfine = 0.0;
  // A kind's shade here depends on nothing but the kind (the point, its base
  // and \`near\` are the same for all four corners), so each kind is shaded
  // ONCE and a corner of a kind already seen reuses it: in a lawn or a road
  // all four corners are one kind, and three of the four shadings were
  // repeats (LK4, Cousins Look: the terrain measured 9 ms of a 29 ms frame at
  // 1080p). Identical pixels; gkDedupe false shades all four, for an A/B.
  int ks[4]; vec3 sh[4];
  for (int q = 0; q < 4; q++) {
    ivec2 o = ivec2(q & 1, q >> 1);
    float w = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y);
    int k = gkKind(b + o);
    int seen = -1;
    if (gkDedupe) for (int j = 0; j < q; j++) if (ks[j] == k) seen = j;
    vec3 s;
    if (seen >= 0) s = sh[seen];
    else {
      vec4 kc = gkColour[k];
      s = gkShade(k, wp, kc.w > 0.5 ? kc.rgb : diffuseColor.rgb, near);
    }
    ks[q] = k; sh[q] = s;
    acc += w * s;
    wsum += w;
    wfine += k == 0 ? 0.0 : w;
  }
  diffuseColor.rgb = mix(diffuseColor.rgb, acc / max(wsum, 1e-4), wfine);
}`)},n.customProgramCacheKey=()=>"ground-kinds-v2",n.needsUpdate=!0,i}const ys=new It(-1,1,1,-1,0,1);class bs extends Q{constructor(){super(),this.setAttribute("position",new I([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new I([0,2,0,0,2,0],2))}}const Ms=new bs;class Ss{constructor(e){this._mesh=new te(Ms,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ys)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const at={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new S(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},K=n=>Object.freeze({exposure:1,sat:1,contrast:1,shadow:[1,1,1],highlight:[1,1,1],lift:0,vignette:.22,bloom:.35,threshold:1.6,...n}),W=Object.freeze({night:K({exposure:1.9,sat:.86,contrast:1.04,shadow:[.9,.97,1.14],highlight:[1.04,1,.94],lift:.0035,vignette:.3,bloom:.6,threshold:.9}),twilight:K({exposure:1.35,sat:.95,contrast:1.04,shadow:[.94,.95,1.1],highlight:[1.1,1,.9],lift:.002,vignette:.26,bloom:.45,threshold:1.2}),golden:K({exposure:1.08,sat:1.06,contrast:1.06,shadow:[.95,.97,1.06],highlight:[1.14,1.03,.84],vignette:.24,bloom:.4,threshold:1.5}),morning:K({exposure:1,sat:1.05,contrast:1.08,shadow:[.97,.99,1.04],highlight:[1.04,1.01,.96],vignette:.2,bloom:.22,threshold:1.8}),afternoon:K({exposure:1.1,sat:1.05,contrast:1.04,shadow:[.97,.99,1.04],highlight:[1.09,1.03,.9],vignette:.22,bloom:.25,threshold:1.8})}),ks=K({vignette:0,bloom:.35,threshold:1.6}),As=n=>Math.min(1,Math.max(0,n)),pe=(n,e,t)=>{const s=As((t-n)/(e-n));return s*s*(3-2*s)},nt=(n,e,t)=>n+(e-n)*t;function V(n,e,t){const s={};for(const i of Object.keys(n))s[i]=Array.isArray(n[i])?n[i].map((a,o)=>nt(a,e[i][o],t)):nt(n[i],e[i],t);return s}function _s(n,e,t=13.33){const s=pe(10.5,15,n),i=V(W.morning,W.afternoon,s),a=n<t?V(W.golden,W.morning,.35):W.golden;return e>=.2?V(a,i,pe(.2,.35,e)):e>=.03?V(a,a,0):e>=-.04?V(W.twilight,a,pe(-.04,.03,e)):V(W.night,W.twilight,pe(-.12,-.04,e))}const _e=Object.freeze([{key:"post",label:"Post-processing",kind:"toggle",default:!0,note:"Off draws the world directly, exactly as before the look: no grade, glow, blur or smoothing below."},{key:"grade",label:"Colour grade",kind:"toggle",default:!0,note:"The summer look, graded by the hour. Off leaves the light as the sky gives it."},{key:"bloom",label:"Glow",kind:"toggle",default:!0,note:"The sun, bright water and lamps glow."},{key:"dof",label:"Depth of field",kind:"toggle",default:!0,note:"A soft background in conversations. Costs nothing outside them."},{key:"aa",label:"Anti-aliasing",kind:"choice",default:"fxaa",choices:["fxaa","msaa","off"],note:"fxaa: smooths edges for little. msaa: the cleanest edges, but it more than doubled the frame at the forecourt (91 ms against 42, measured). off: none."},{key:"shadows",label:"Shadows",kind:"choice",default:"auto",choices:["auto","high","low","off"],note:"auto: by the quality setting. high: crisp shadows near you (people, rails, porches) and soft ones far off. low: one soft map. off: none."},{key:"ao",label:"Contact shadows",kind:"toggle",default:!0,note:"Soft darkening where things meet: under eaves, round feet, along walls."},{key:"scale",label:"Render scale",kind:"choice",default:"auto",choices:["auto","1","0.85","0.7","0.5"],note:"auto: the world is drawn smaller when frames run slow, to hold 60 fps, and back up when they recover. A number fixes it."}]),vt=Object.freeze(Object.fromEntries(_e.map(n=>[n.key,n.default])));function Ce(n,e){const t=_e.find(s=>s.key===n);if(!t)throw new Error(`look: no option '${n}'`);return t.kind==="toggle"?typeof e=="boolean"?e:t.default:t.choices.includes(e)?e:t.default}function Ts(n=""){const e=new URLSearchParams(n),t={...vt};for(const s of _e){if(!e.has(s.key))continue;const i=e.get(s.key);t[s.key]=Ce(s.key,s.kind==="toggle"?!(i==="0"||i==="off"||i==="false"):i)}return t}const ge=6,rt=32,Es=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,J=(n,e,t={})=>new re({uniforms:e,vertexShader:Es,fragmentShader:n,depthTest:!1,depthWrite:!1,toneMapped:!1,...t}),Rs=`
  precision highp float;
  uniform mat4 modelViewMatrix, projectionMatrix;
  attribute vec3 position; attribute vec2 uv;
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Os=`
  uniform sampler2D src; uniform vec2 texel, uvScale, uvMax;
  uniform float threshold, knee, gain; uniform bool prefilter;
  varying vec2 vUv;
  vec3 tap(vec2 o) { return min(texture2D(src, min(vUv * uvScale + o * texel, uvMax)).rgb * gain, vec3(8.0)); }
  void main() {
    vec3 c = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
    c /= 8.0;
    if (prefilter) {
      // A soft knee under the threshold, so the glow fades in rather than
      // switching on at one brightness.
      float l = max(c.r, max(c.g, c.b));
      float s = clamp(l - threshold + knee, 0.0, 2.0 * knee);
      s = s * s / (4.0 * knee + 1e-4);
      c *= max(s, l - threshold) / max(l, 1e-4);
    }
    gl_FragColor = vec4(c, 1.0);
  }`,Fs=`
  uniform sampler2D src; uniform vec2 texel;
  varying vec2 vUv;
  vec3 tap(vec2 o) { return texture2D(src, vUv + o * texel).rgb; }
  void main() {
    vec3 c = tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0)) + tap(vec2(0.0, 2.0))
      + 2.0 * (tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)) + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)));
    gl_FragColor = vec4(c / 12.0, 1.0);
  }`,Ns=`
  uniform sampler2D tColor, tDepth; uniform vec2 texel, uvScale, uvMax;
  uniform float logFar, focus, band, maxR;
  varying vec2 vUv;
  // three's log depth: d = log2(1 + w) / log2(far + 1), w the view distance.
  float dist(vec2 uv) { return exp2(texture2D(tDepth, uv).x * logFar) - 1.0; }
  // The blur, in pixels: 0 inside the band round the focus, then as the
  // thin lens has it, |1 - focus / z|, which reaches maxR at infinity.
  float coc(float z) { return clamp((abs(1.0 - focus / max(z, 0.01)) - band) / (1.0 - band), 0.0, 1.0) * maxR; }
  void main() {
    vec2 uv0 = vUv * uvScale;
    vec3 c0 = texture2D(tColor, uv0).rgb;
    float z0 = dist(uv0), r0 = coc(z0);
    vec3 acc = c0; float wsum = 1.0;
    for (int i = 0; i < ${rt}; i++) {
      float fi = float(i) + 0.5;
      float r = sqrt(fi / ${rt}.0) * maxR;
      float a = fi * 2.39996323;
      vec2 uv = clamp(uv0 + vec2(cos(a), sin(a)) * r * texel, vec2(0.0), uvMax);
      float z = dist(uv), rc = coc(z);
      float reach = z > z0 ? min(rc, r0) : rc;
      float w = smoothstep(r - 1.0, r + 0.5, reach);
      acc += texture2D(tColor, uv).rgb * w; wsum += w;
    }
    gl_FragColor = vec4(acc / wsum, 1.0);
  }`,Fe=.9,Ds=`
  uniform sampler2D tDepth; uniform vec2 uvScale, uvMax, texel;
  uniform float logFar, tanY, aspect;
  varying vec2 vUv;
  float dist(vec2 uv) { return exp2(texture2D(tDepth, min(uv * uvScale, uvMax)).x * logFar) - 1.0; }
  vec3 viewAt(vec2 uv, float w) { vec2 n = uv * 2.0 - 1.0; return vec3(n.x * tanY * aspect * w, n.y * tanY * w, -w); }
  float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
  void main() {
    float w0 = dist(vUv);
    if (w0 > 70.0 || w0 < 0.3) { gl_FragColor = vec4(1.0); return; }
    vec3 P = viewAt(vUv, w0);
    vec2 dx = vec2(texel.x, 0.0), dy = vec2(0.0, texel.y);
    float wr = dist(vUv + dx), wl = dist(vUv - dx), wu = dist(vUv + dy), wd = dist(vUv - dy);
    vec3 ex = abs(wr - w0) < abs(wl - w0) ? viewAt(vUv + dx, wr) - P : P - viewAt(vUv - dx, wl);
    vec3 ey = abs(wu - w0) < abs(wd - w0) ? viewAt(vUv + dy, wu) - P : P - viewAt(vUv - dy, wd);
    vec3 N = normalize(cross(ex, ey));
    float rUv = ${Fe.toFixed(2)} / (2.0 * tanY * w0);            // the radius, as a fraction of the screen's height
    float a0 = ign(gl_FragCoord.xy) * 6.2832, occ = 0.0;
    for (int i = 0; i < 10; i++) {
      float fi = (float(i) + 0.5) / 10.0;
      float a = a0 + float(i) * 2.39996;
      vec2 o = vec2(cos(a) / aspect, sin(a)) * rUv * sqrt(fi);
      vec2 uv = vUv + o;
      vec3 S = viewAt(uv, dist(uv));
      vec3 v = S - P;
      float d = length(v);
      occ += max(0.0, dot(N, v / max(d, 1e-3)) - 0.15) * smoothstep(${(Fe*2).toFixed(2)}, ${(Fe*.6).toFixed(2)}, d);
    }
    float ao = 1.0 - occ / 10.0 * 1.6;
    ao = mix(ao, 1.0, smoothstep(45.0, 70.0, w0));
    gl_FragColor = vec4(vec3(clamp(ao, 0.0, 1.0)), 1.0);
  }`,Is=`
  uniform sampler2D tAO, tDepth; uniform vec2 uvScale, uvMax, texel;
  uniform float logFar;
  varying vec2 vUv;
  float dist(vec2 uv) { return exp2(texture2D(tDepth, min(uv * uvScale, uvMax)).x * logFar) - 1.0; }
  void main() {
    float w0 = dist(vUv), sum = 0.0, wsum = 0.0;
    for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) {
      vec2 uv = vUv + vec2(float(x), float(y)) * texel * 1.5;
      float wt = 1.0 / (1.0 + abs(dist(uv) - w0) * 4.0 / max(w0 * 0.05, 0.05));
      sum += texture2D(tAO, uv).r * wt; wsum += wt;
    }
    gl_FragColor = vec4(vec3(sum / wsum), 1.0);
  }`,Ps=`
  precision highp float;
  uniform sampler2D tScene, tBloom, tAO; uniform bool useBloom, useAO;
  uniform float aoStrength;
  uniform vec2 uvScale, uvMax, texel;
  uniform float bloom, exposure, sat, contrast, lift, vignette, aspect, sharpen;
  uniform vec3 shadowTint, highlightTint;
  varying vec2 vUv;
  #include <tonemapping_pars_fragment>
  #include <colorspace_pars_fragment>
  float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  void main() {
    // The world was drawn at uvScale of the screen (the adaptive scale,
    // scale.js) and is stretched to it here, bilinear, with a touch of
    // sharpening back in proportion to how far it was scaled.
    vec2 uv = min(vUv * uvScale, uvMax);
    vec3 c = texture2D(tScene, uv).rgb;
    if (sharpen > 0.0) {
      vec3 n = texture2D(tScene, min(uv + vec2(texel.x, 0.0), uvMax)).rgb + texture2D(tScene, max(uv - vec2(texel.x, 0.0), vec2(0.0))).rgb
        + texture2D(tScene, min(uv + vec2(0.0, texel.y), uvMax)).rgb + texture2D(tScene, max(uv - vec2(0.0, texel.y), vec2(0.0))).rgb;
      c = max(c + (c - n * 0.25) * sharpen, 0.0);
    }
    if (useAO) c *= mix(1.0, texture2D(tAO, vUv).r, aoStrength);
    c *= exposure;
    if (useBloom) c += texture2D(tBloom, vUv).rgb * bloom;
    // All in linear light, before the tone map.
    float l0 = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c += lift * vec3(0.7, 0.82, 1.0) * (1.0 - smoothstep(0.0, 0.05, l0));
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = max(mix(vec3(l), c, sat), 0.0);
    c *= mix(shadowTint, highlightTint, smoothstep(0.02, 0.8, l));
    c = 0.18 * pow(max(c, vec3(1e-6)) / 0.18, vec3(contrast));
    vec2 d = (vUv - 0.5) * vec2(aspect, 1.0);
    c *= 1.0 - vignette * smoothstep(0.35, 1.05, length(d));
    vec4 o = vec4(c, 1.0);
    #ifdef LINEAR_TONE_MAPPING
      o.rgb = LinearToneMapping(o.rgb);
    #elif defined(REINHARD_TONE_MAPPING)
      o.rgb = ReinhardToneMapping(o.rgb);
    #elif defined(CINEON_TONE_MAPPING)
      o.rgb = CineonToneMapping(o.rgb);
    #elif defined(ACES_FILMIC_TONE_MAPPING)
      o.rgb = ACESFilmicToneMapping(o.rgb);
    #elif defined(AGX_TONE_MAPPING)
      o.rgb = AgXToneMapping(o.rgb);
    #elif defined(NEUTRAL_TONE_MAPPING)
      o.rgb = NeutralToneMapping(o.rgb);
    #endif
    #ifdef SRGB_TRANSFER
      o = sRGBTransferOETF(o);
    #endif
    // Half a step of noise: the sky's long gradients band in 8 bits without it.
    o.rgb += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
    gl_FragColor = o;
  }`,zs=new Map([[Wt,"LINEAR_TONE_MAPPING"],[Bt,"REINHARD_TONE_MAPPING"],[Ht,"CINEON_TONE_MAPPING"],[qt,"ACES_FILMIC_TONE_MAPPING"],[jt,"AGX_TONE_MAPPING"],[$t,"NEUTRAL_TONE_MAPPING"]]),Ne=(n,e,t={})=>new Le(n,e,{type:Gt,depthBuffer:!1,minFilter:Me,magFilter:Me,...t});class Ls{constructor(e,t,s={}){this.renderer=e,this.sky=t,this.options={...vt};for(const[a,o]of Object.entries(s))this.options[a]=Ce(a,o);this.focusAt=null,this.grade=null,this.stats={passes:0},this.w=0,this.h=0;const i=this.quad=new Ss(null);this.mat={down:J(Os,{src:{value:null},texel:{value:new S},uvScale:{value:new S(1,1)},uvMax:{value:new S(1,1)},threshold:{value:1},knee:{value:.5},gain:{value:1},prefilter:{value:!1}}),up:J(Fs,{src:{value:null},texel:{value:new S}},{blending:ne,transparent:!0}),dof:J(Ns,{tColor:{value:null},tDepth:{value:null},texel:{value:new S},uvScale:{value:new S(1,1)},uvMax:{value:new S(1,1)},logFar:{value:1},focus:{value:2},band:{value:.15},maxR:{value:6}}),final:new Pt({vertexShader:Rs,fragmentShader:Ps,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:null},tBloom:{value:null},useBloom:{value:!1},bloom:{value:0},uvScale:{value:new S(1,1)},uvMax:{value:new S(1,1)},texel:{value:new S},sharpen:{value:0},tAO:{value:null},useAO:{value:!1},aoStrength:{value:.65},exposure:{value:1},sat:{value:1},contrast:{value:1},lift:{value:0},vignette:{value:0},aspect:{value:1},shadowTint:{value:new A(1,1,1)},highlightTint:{value:new A(1,1,1)},toneMappingExposure:{value:1}}}),ao:J(Ds,{tDepth:{value:null},uvScale:{value:new S(1,1)},uvMax:{value:new S(1,1)},texel:{value:new S},logFar:{value:1},tanY:{value:.47},aspect:{value:1}}),aoBlur:J(Is,{tAO:{value:null},tDepth:{value:null},uvScale:{value:new S(1,1)},uvMax:{value:new S(1,1)},texel:{value:new S},logFar:{value:1}}),fxaa:new re({...at,uniforms:zt.clone(at.uniforms),depthTest:!1,depthWrite:!1,toneMapped:!1})},this.toneKey=null,this.mips=[];for(let a=0;a<ge;a++)this.mips.push(Ne(1,1));this.dofRT=Ne(1,1),this.aoRT=[0,1].map(()=>new Le(1,1,{depthBuffer:!1,minFilter:Me,magFilter:Me})),this.ldrRT=new Le(1,1,{depthBuffer:!1}),this.sceneRT=null,i.material=this.mat.final,this.setSize()}set(e,t){const s=Ce(e,t),i=this.options[e];this.options[e]=s,e==="aa"&&s!==i&&this.buildSceneTarget(),e==="scale"&&this.scaler?.lock(s==="auto"?null:Number(s)),e==="shadows"&&this.shadows?.setLevel(s==="auto"?this.presetShadows??"high":s)}focus(e){this.focusAt=e&&e.at>0?{band:.15,maxR:6,...e}:null}setSize(){const e=this.renderer.getDrawingBufferSize(this._buf??=new S),t=Math.max(1,e.x),s=Math.max(1,e.y);if(t===this.w&&s===this.h&&this.sceneRT)return;this.w=t,this.h=s,this.buildSceneTarget(),this.dofRT.setSize(t,s),this.ldrRT.setSize(t,s);for(const o of this.aoRT)o.setSize(Math.max(1,t>>1),Math.max(1,s>>1));let i=t,a=s;for(const o of this.mips)i=Math.max(1,Math.ceil(i/2)),a=Math.max(1,Math.ceil(a/2)),o.setSize(i,a)}buildSceneTarget(){this.sceneRT?.depthTexture?.dispose(),this.sceneRT?.dispose();const e=new Lt(this.w,this.h);this.sceneRT=Ne(this.w,this.h,{depthBuffer:!0,depthTexture:e,samples:this.options.aa==="msaa"?4:0})}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.quad.render(this.renderer),this.stats.passes++}render(e,t){const s=this.renderer,i=this.options;if(this.lights?.update(t.position),this.shadows?.update(t),!i.post){s.render(e,t),this.grade=null;return}this.setSize();let a=i.grade?_s(this.sky.hour,this.sky.dirWorld[2]):ks;const o=this.weather?.now?.sat??1;o!==1&&(a={...a,sat:a.sat*o,contrast:1+(a.contrast-1)*o}),this.grade=a;const r=i.dof&&this.focusAt,c=this.scaler?.value??1,l=Math.max(1,Math.round(this.w*c)),h=Math.max(1,Math.round(this.h*c)),f=this._uvS??=new S,u=this._uvM??=new S;f.set(l/this.w,h/this.h),u.set((l-.5)/this.w,(h-.5)/this.h),this.stats.scale=+(l/this.w).toFixed(3),this.stats.passes=0;const m=s.getRenderTarget(),x=s.info.autoReset,v=!!i.ao;this.sceneRT.resolveDepthBuffer=!!r||v,this.sceneRT.viewport.set(0,0,l,h),this.dofRT.viewport.set(0,0,l,h);const y=this.probe;y?.("scene"),s.setRenderTarget(this.sceneRT),s.render(e,t),s.info.autoReset=!1;let b=this.sceneRT.texture;if(r){y?.("dof");const d=this.mat.dof.uniforms;d.tColor.value=b,d.tDepth.value=this.sceneRT.depthTexture,d.texel.value.set(1/this.w,1/this.h),d.uvScale.value.copy(f),d.uvMax.value.copy(u),d.logFar.value=Math.log2(t.far+1),d.focus.value=this.focusAt.at,d.band.value=this.focusAt.band,d.maxR.value=this.focusAt.maxR*this.h/1080,this.pass(this.mat.dof,this.dofRT),b=this.dofRT.texture}if(v){y?.("ao");const d=this.mat.ao.uniforms,_=this.mat.aoBlur.uniforms,[E,k]=this.aoRT;d.tDepth.value=this.sceneRT.depthTexture,d.uvScale.value.copy(f),d.uvMax.value.copy(u),d.texel.value.set(1/E.width,1/E.height),d.logFar.value=Math.log2(t.far+1),d.tanY.value=Math.tan(ae.degToRad(t.fov)/2),d.aspect.value=t.aspect,this.pass(this.mat.ao,E),_.tAO.value=E.texture,_.tDepth.value=this.sceneRT.depthTexture,_.uvScale.value.copy(f),_.uvMax.value.copy(u),_.texel.value.set(1/E.width,1/E.height),_.logFar.value=d.logFar.value,this.pass(this.mat.aoBlur,k)}const M=i.bloom&&a.bloom>0;if(M){y?.("bloom");const d=this.mat.down.uniforms,_=this.mat.up.uniforms;d.prefilter.value=!0,d.threshold.value=a.threshold,d.knee.value=a.threshold*.5,d.gain.value=a.exposure,d.src.value=b,d.texel.value.set(1/this.w,1/this.h),d.uvScale.value.copy(f),d.uvMax.value.copy(u),this.pass(this.mat.down,this.mips[0]),d.prefilter.value=!1,d.gain.value=1,d.uvScale.value.set(1,1),d.uvMax.value.set(1,1);for(let k=1;k<ge;k++){const D=this.mips[k-1];d.src.value=D.texture,d.texel.value.set(1/D.width,1/D.height),this.pass(this.mat.down,this.mips[k])}const E=s.autoClear;s.autoClear=!1;for(let k=ge-2;k>=0;k--){const D=this.mips[k+1];_.src.value=D.texture,_.texel.value.set(.5/D.width,.5/D.height),this.pass(this.mat.up,this.mips[k])}s.autoClear=E}y?.("final");const g=this.mat.final,p=g.uniforms,T=`${s.toneMapping}|${s.outputColorSpace}`;if(T!==this.toneKey){this.toneKey=T,g.defines={},Ut.getTransfer(s.outputColorSpace)===Ct&&(g.defines.SRGB_TRANSFER="");const d=zs.get(s.toneMapping);d&&(g.defines[d]=""),g.needsUpdate=!0}p.tScene.value=b,p.tBloom.value=this.mips[0].texture,p.useBloom.value=M,p.uvScale.value.copy(f),p.uvMax.value.copy(u),p.texel.value.set(1/this.w,1/this.h),p.sharpen.value=Math.min(.25,(1-f.y)*.6),p.useAO.value=!!v,p.tAO.value=this.aoRT[1].texture,p.bloom.value=a.bloom/ge,p.exposure.value=a.exposure,p.sat.value=a.sat,p.contrast.value=a.contrast,p.lift.value=a.lift,p.vignette.value=a.vignette,p.aspect.value=this.w/this.h,p.shadowTint.value.set(...a.shadow),p.highlightTint.value.set(...a.highlight),p.toneMappingExposure.value=s.toneMappingExposure,i.aa==="fxaa"?(this.pass(g,this.ldrRT),y?.("fxaa"),this.mat.fxaa.uniforms.tDiffuse.value=this.ldrRT.texture,this.mat.fxaa.uniforms.resolution.value.set(1/this.w,1/this.h),this.pass(this.mat.fxaa,null)):this.pass(g,null),y?.(null),s.info.autoReset=x,s.setRenderTarget(m)}dispose(){this.sceneRT?.depthTexture?.dispose(),this.sceneRT?.dispose();for(const e of this.mips)e.dispose();this.dofRT.dispose(),this.ldrRT.dispose();for(const e of this.aoRT)e.dispose();for(const e of Object.values(this.mat))e.dispose();this.quad.dispose()}}const Us=16,Cs=.001;function wt(n,e,t){const s=[];for(const a of n){if(!(a.intensity>Cs))continue;const o=a.pos.x-e.x,r=a.pos.y-e.y,c=a.pos.z-e.z;s.push({f:a,score:Math.sqrt(o*o+r*r+c*c)-a.distance})}s.sort((a,o)=>a.score-o.score);const i=[];for(let a=0;a<s.length&&a<t;a++)i.push(s[a].f);return i}class Gs{constructor(e,t=Us){this.size=t,this.lights=[],this.fixtures=[],this._byLight=new Map,this._slot=new Array(t).fill(null),this._chosen=new Set,this._held=new Set;for(let s=0;s<t;s++){const i=new Vt(16777215,0,1,2);i.name=`lightpool_${s}`,i.userData.pool=!0,e.add(i),this.lights.push(i)}}collect(e){const t=new Map,s=[];e.traverse(i=>{if(!i.isPointLight||i.userData.pool)return;let a=this._byLight.get(i);if(!a){let o=i;for(;o.parent&&o.parent!==e;)o=o.parent;a={light:i,pos:i.getWorldPosition(new A),root:o,distance:i.distance,intensity:0}}i.visible=!1,t.set(i,a),s.push(a)}),this._byLight=t,this.fixtures=s;for(let i=0;i<this.size;i++)this._slot[i]&&!t.has(this._slot[i].light)&&(this._slot[i]=null)}refresh(e){for(const t of this.fixtures)t.root===e&&t.light.getWorldPosition(t.pos)}update(e){for(const r of this.fixtures)r.intensity=r.light.intensity,r.distance=r.light.distance;const t=wt(this.fixtures,e,this.size),s=this._chosen,i=this._held;s.clear(),i.clear();for(const r of t)s.add(r);const a=this._slot;for(let r=0;r<this.size;r++)a[r]&&!s.has(a[r])&&(a[r]=null),a[r]&&i.add(a[r]);let o=0;for(const r of t)if(!i.has(r)){for(;a[o];)o++;a[o]=r}for(let r=0;r<this.size;r++){const c=this.lights[r],l=a[r];if(!l){c.intensity!==0&&(c.intensity=0);continue}const h=l.light;c.position.equals(l.pos)||c.position.copy(l.pos),c.color.equals(h.color)||c.color.copy(h.color),c.intensity!==h.intensity&&(c.intensity=h.intensity),c.distance!==h.distance&&(c.distance=h.distance),c.decay!==h.decay&&(c.decay=h.decay)}}}const xt=6,me=100,Ws=40;function Bs(n,e,t=xt){const s=new Map;for(const a of n){if(a.distance>0){const r=a.pos.x-e.x,c=a.pos.y-e.y,l=a.pos.z-e.z;if(Math.sqrt(r*r+c*c+l*l)-a.distance>Ws)continue}const o=a.priority??0;s.has(o)||s.set(o,[]),s.get(o).push(a)}const i=[];for(const a of[...s.keys()].sort((o,r)=>r-o)){if(i.length>=t)break;for(const o of wt(s.get(a),e,t-i.length))i.push(o)}return i}class Hs{constructor(e,t=xt){this.scene=e,this.size=t,this.pool=new Gs(e,t),this.requests=new Set,this._list=[],this._dirty=!0,this.stats={requests:0,lit:0},this.levels={}}request({pos:e=[0,0,0],colour:t=16770756,intensity:s=1,range:i=10,priority:a=0,decay:o=2}={}){const r={color:new N(t),intensity:s,distance:i,decay:o},c={light:r,priority:a,pos:Array.isArray(e)?new A(...e):e.clone(),distance:i,intensity:s,get colour(){return r.color},set colour(l){r.color.set(l)},set range(l){r.distance=l},get range(){return r.distance},release:()=>{this.requests.delete(c),this._dirty=!0}};return Object.defineProperty(c,"intensity",{get:()=>r.intensity,set:l=>{r.intensity=l},enumerable:!0}),this.requests.add(c),this._dirty=!0,c}requestStatic(e,t="static"){this.cells??=new Map;const s=[];for(const i of e){const a={color:new N(i.colour??16770756),intensity:0,distance:i.range??10,decay:2},o={light:a,priority:i.priority??0,pos:Array.isArray(i.pos)?new A(...i.pos):i.pos.clone(),distance:a.distance,intensity:0,base:i.intensity??1,group:t},r=`${Math.floor(o.pos.x/me)},${Math.floor(o.pos.z/me)}`;this.cells.has(r)||this.cells.set(r,[]),this.cells.get(r).push(o),s.push(o)}return s}adopt(e,{priority:t=1}={}){e.updateMatrixWorld(!0);const s=[];return e.traverse(i=>{if(!i.isPointLight||i.userData.pool)return;if(i.visible=!1,i.userData.lookRequest){i.getWorldPosition(i.userData.lookRequest.pos),s.push(i.userData.lookRequest);return}const a={light:i,priority:t,pos:i.getWorldPosition(new A),distance:i.distance,intensity:i.intensity,release:()=>{this.requests.delete(a),delete i.userData.lookRequest,this._dirty=!0}};i.userData.lookRequest=a,this.requests.add(a),s.push(a)}),this._dirty=!0,s}update(e){this._dirty&&(this._list=[...this.requests],this._dirty=!1);for(const i of this._list)i.intensity=i.light.intensity,i.distance=i.light.distance;let t=this._list;if(this.cells?.size){t=this._near??=[],t.length=0;for(const o of this._list)t.push(o);const i=Math.floor(e.x/me),a=Math.floor(e.z/me);for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const c=this.cells.get(`${i+o},${a+r}`);if(c)for(const l of c)l.light.intensity=l.base*(this.levels[l.group]??1),l.intensity=l.light.intensity,t.push(l)}}const s=Bs(t,e,this.size);this.pool.fixtures=s,this.pool.update(e),this.stats.requests=t.length,this.stats.lit=s.length}}const lt=14,qs=(n,e=0)=>.82+.1*Math.sin(n*11.3+e)+.06*Math.sin(n*23.7+e*2.1)+.05*Math.sin(n*5.1+e*.7),Ke=`
  #include <common>
  #include <logdepthbuf_pars_vertex>`,Qe=`
  #include <common>
  #include <logdepthbuf_pars_fragment>`,yt=`
  float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.07 + 13.1; a *= 0.5; } return s; }`,bt=`
  vec3 billboard(vec3 centre, vec2 corner, vec2 size) {
    vec3 right = normalize(vec3(viewMatrix[0][0], 0.0, viewMatrix[2][0]));
    return centre + right * corner.x * size.x + vec3(0.0, corner.y * size.y, 0.0);
  }`,js=`
  attribute vec2 corner; attribute vec3 centre; attribute vec3 shape;   // shape: width, height, seed
  uniform float size, strength;
  varying vec2 vUv; varying float vSeed;
  ${Ke}
  ${bt}
  void main() {
    vUv = corner * vec2(0.5, 1.0) + vec2(0.5, 0.0);
    vSeed = shape.z;
    vec3 c = (modelMatrix * vec4(centre * size, 1.0)).xyz;
    vec3 p = billboard(c, corner, shape.xy * size * mix(0.35, 1.0, strength));
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
    #include <logdepthbuf_vertex>
  }`,$s=`
  uniform float time, strength, glow;
  varying vec2 vUv; varying float vSeed;
  ${Qe}
  ${yt}
  void main() {
    #include <logdepthbuf_fragment>
    vec2 uv = vUv;
    // Tongues: noise rising faster than the flame, pinched to a point at the top.
    float n = fbm(vec2(uv.x * 3.0 + vSeed * 7.0, uv.y * 2.2 - time * 2.6 + vSeed));
    float w = (1.0 - pow(uv.y, 0.8)) * 0.5 + 0.02;
    float edge = abs(uv.x - 0.5 + (n - 0.5) * 0.35 * uv.y);
    float body = smoothstep(w, w * 0.35, edge) * smoothstep(1.0, 0.25, uv.y + (n - 0.5) * 0.5);
    body *= smoothstep(0.0, 0.08, uv.y);
    float heat = clamp(body * (0.55 + n), 0.0, 1.5);
    // Deep red at the tips, orange, yellow-white at the root: linear and over 1.
    vec3 col = mix(vec3(0.9, 0.12, 0.02), vec3(1.0, 0.45, 0.08), smoothstep(0.1, 0.5, heat));
    col = mix(col, vec3(1.0, 0.85, 0.5), smoothstep(0.7, 1.2, heat));
    float a = smoothstep(0.05, 0.4, heat) * strength;
    gl_FragColor = vec4(col * glow * a, 1.0);
  }`,Vs=`
  attribute float seed;
  uniform float time, size, strength, pxScale;
  varying float vA;
  ${Ke}
  float h(float x) { return fract(sin(x * 91.7) * 43758.5); }
  void main() {
    float life = 1.6 + 1.8 * h(seed);
    float ph = fract(time / life + h(seed + 1.0));
    float r = (0.15 + 0.5 * h(seed + 2.0)) * size;
    float a = 6.2832 * h(seed + 3.0);
    // Up on the heat, drifting, a little spiral.
    vec3 p = vec3(cos(a + ph * 2.0) * r * (0.3 + ph), ph * (2.5 + 3.5 * h(seed + 4.0)) * size, sin(a + ph * 2.0) * r * (0.3 + ph));
    p.x += ph * ph * 0.8 * size;
    vec4 mv = viewMatrix * modelMatrix * vec4(p + vec3(0.0, 0.3 * size, 0.0), 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = max(1.5, 0.05 * size * pxScale / -mv.z);
    vA = (1.0 - ph) * step(h(seed + 5.0), strength) * (0.6 + 0.4 * sin(time * 30.0 + seed));
    #include <logdepthbuf_vertex>
  }`,Ks=`
  varying float vA;
  ${Qe}
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vec3(1.0, 0.55, 0.15) * 4.0 * vA * (1.0 - d * 2.0), 1.0);
  }`,Qs=`
  attribute vec2 corner; attribute float seed;
  uniform float time, size, strength, wind; uniform vec2 windDir;
  varying vec2 vUv; varying float vPh; varying float vSeed;
  ${Ke}
  ${bt}
  float h(float x) { return fract(sin(x * 91.7) * 43758.5); }
  void main() {
    float life = 7.0;
    float ph = fract(time / life + seed);
    vPh = ph; vSeed = seed; vUv = corner * 0.5 + 0.5;
    // Rises, slows, spreads, and leans downwind: Nature's sea breeze
    // (nature/Wind.js), leaning further as the wind rises.
    vec2 lean = windDir * ph * ph * 4.0 * wind;
    vec3 c = vec3(lean.x + (h(seed) - 0.5), 1.2 + ph * 6.0 / (1.0 + wind * 0.5), lean.y + (h(seed + 1.0) - 0.5)) * size;
    c = (modelMatrix * vec4(c, 1.0)).xyz;
    float s = (0.8 + ph * 3.2) * size;
    gl_Position = projectionMatrix * viewMatrix * vec4(billboard(c, corner, vec2(s)), 1.0);
    #include <logdepthbuf_vertex>
  }`,Ys=`
  uniform float time, strength; uniform vec3 ambient, fireCol;
  varying vec2 vUv; varying float vPh; varying float vSeed;
  ${Qe}
  ${yt}
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(vUv - 0.5) * 2.0;
    float n = fbm(vUv * 2.5 + vec2(vSeed * 9.0, -time * 0.15));
    float a = smoothstep(1.0, 0.2, d + (n - 0.5) * 0.6) * smoothstep(0.0, 0.12, vPh) * (1.0 - vPh);
    // Lit by the sky, and by the fire from below while it is low.
    vec3 col = ambient * 0.55 + fireCol * (1.0 - smoothstep(0.0, 0.35, vPh)) * 0.25;
    gl_FragColor = vec4(col, a * 0.2 * strength);
  }`;function Xs(){const n=[[0,0,.75,2.1],[.28,.12,.55,1.5],[-.25,.18,.55,1.6],[.1,-.28,.5,1.35],[-.18,-.2,.5,1.25]],e=[],t=[],s=[],i=[];n.forEach(([o,r,c,l],h)=>{const f=h*4;for(const[u,m]of[[-1,0],[1,0],[1,1],[-1,1]])e.push(u,m),t.push(o,.12,r),s.push(c,l,h*1.37);i.push(f,f+1,f+2,f,f+2,f+3)});const a=new Q;return a.setAttribute("position",new I(new Array(e.length/2*3).fill(0),3)),a.setAttribute("corner",new I(e,2)),a.setAttribute("centre",new I(t,3)),a.setAttribute("shape",new I(s,3)),a.setIndex(i),a}function Zs(n=10){const e=[],t=[],s=[];for(let a=0;a<n;a++){for(const[r,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(r,c),t.push(a/n);const o=a*4;s.push(o,o+1,o+2,o,o+2,o+3)}const i=new Q;return i.setAttribute("position",new I(new Array(n*12).fill(0),3)),i.setAttribute("corner",new I(e,2)),i.setAttribute("seed",new I(t,1)),i.setIndex(s),i}function Js(){const n=[],e=new N(4863270),t=new N(1709330),s=(i,a,o)=>{const r=new se(a*.85,a,i,7,3),c=[],l=r.attributes.position;for(let h=0;h<l.count;h++){const f=l.getY(h)/i+.5;c.push(...e.clone().lerp(t,o.charTop?ae.smoothstep(f,.4,.9):1-ae.smoothstep(Math.abs(f-.5),.1,.45)).toArray())}r.setAttribute("color",new I(c,3)),o(r),n.push(r)};for(let i=0;i<6;i++){const a=i/6*Math.PI*2+.2,o=r=>{r.translate(0,.55,0),r.rotateX(.52),r.rotateY(a),r.translate(Math.sin(a)*.12,0,Math.cos(a)*.12)};o.charTop=!0,s(1.3,.07+i%3*.012,o)}for(let i=0;i<2;i++)s(1.6,.09,a=>{a.rotateZ(Math.PI/2),a.rotateY(i*Math.PI/2+.4),a.translate(0,.09,0)});return ye(n.map(i=>i.toNonIndexed()))}class ei{constructor(e,t){this.game=e,this.lights=t,this.time=0,this.list=[],this.woodMat=new Ue({vertexColors:!0,roughness:.95,metalness:0}),this.coalMat=new Ue({color:1840144,roughness:1,metalness:0,emissive:16734740,emissiveIntensity:1.5}),this.geo={flame:Xs(),smoke:Zs(),wood:Js(),coal:new Kt(.62,18).rotateX(-Math.PI/2)};const s=new Float32Array(90).map((i,a)=>a*1.618);this.geo.sparks=new Q,this.geo.sparks.setAttribute("position",new I(new Float32Array(90*3),3)),this.geo.sparks.setAttribute("seed",new I(s,1))}add({x:e,y:t,size:s=1,strength:i=1,logs:a=!0,priority:o=2}={}){const r=this.game.grid,c=(r.groundAt??r.heightAt).call(r,e,t),l=new Ae;l.name="fire",l.position.set(e,c,-t);const h={time:{value:0},size:{value:s},strength:{value:i},glow:{value:1.1},pxScale:{value:800},wind:{value:fs/.6},windDir:{value:new S(...hs)},ambient:{value:new N(.5,.5,.5)},fireCol:{value:new N(1,.45,.15)}},f=(v,y,b)=>new re({uniforms:h,vertexShader:v,fragmentShader:y,transparent:!0,depthWrite:!1,toneMapped:!1,...b}),u=(v,y)=>(v.frustumCulled=!1,v.renderOrder=y,l.add(v),v);if(a){const v=u(new te(this.geo.wood,this.woodMat),0);v.scale.setScalar(s),v.castShadow=!0,v.frustumCulled=!0;const y=u(new te(this.geo.coal,this.coalMat.clone()),0);y.scale.setScalar(s),y.position.y=.03,y.frustumCulled=!0}u(new te(this.geo.smoke,f(Qs,Ys,{blending:Qt})),2),u(new te(this.geo.flame,f(js,$s,{blending:ne})),3),u(new Ve(this.geo.sparks,f(Vs,Ks,{blending:ne})),3),this.game.scene.add(l);const m=this.lights?.request({pos:[e,c+1.9*s,-t],colour:16747068,intensity:lt*s*i,range:16*s,priority:o}),x={group:l,light:m,uniforms:h,seed:this.list.length*3.1,get strength(){return h.strength.value},set strength(v){h.strength.value=Math.max(0,Math.min(1,v))},remove:()=>{this.game.scene.remove(l);for(const v of l.children)v.material!==this.woodMat&&v.material.dispose();m?.release(),this.list.splice(this.list.indexOf(x),1)}};return this.list.push(x),x}update(e,t,s){this.time+=e;const i=this.game.sky,a=s?s.getDrawingBufferSize(new S).y/(2*Math.tan(ae.degToRad(t.fov)/2)):800;for(const o of this.list){const r=o.uniforms,c=r.strength.value,l=qs(this.time,o.seed);r.time.value=this.time,r.pxScale.value=a,i&&r.ambient.value.copy(i.hemi.color).multiplyScalar(i.hemi.intensity),r.wind.value=mt.strength/.6,o.light&&(o.light.intensity=lt*r.size.value*c*l);const h=o.group.children[1];h?.material?.emissive&&(h.material.emissiveIntensity=(.6+1.4*c)*l)}}}const Te=9.81,Ye=Object.freeze({peony:{stars:150,speed:72,k:1.3,life:2.6,gs:.5,trail:.25,flicker:0},chrysanthemum:{stars:160,speed:76,k:1.2,life:3,gs:.5,trail:1,flicker:0},willow:{stars:120,speed:58,k:1.7,life:5.5,gs:.3,trail:2.4,flicker:0,colour:"gold"},ring:{stars:90,speed:70,k:1.3,life:2.6,gs:.45,trail:.4,flicker:0,ring:!0},palm:{stars:9,speed:62,k:.9,life:3.4,gs:.8,trail:2.8,flicker:0,colour:"gold"},glitter:{stars:150,speed:70,k:1.25,life:3.2,gs:.45,trail:.6,flicker:1,colour:"silver"},salute:{stars:50,speed:95,k:3,life:.35,gs:.2,trail:0,flicker:1,colour:"white"}}),De=Object.freeze({red:[1,.1,.06],green:[.25,1,.25],blue:[.18,.32,1],gold:[1,.55,.16],silver:[.9,.92,1],purple:[.62,.2,1],white:[1,1,1]}),ct=["red","green","blue","gold","silver","purple"];function Mt(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const ti=(n,e,t,s=Te)=>-s*n/t+(e+s/t)*(1-Math.exp(-t*n))/t,St=(n,e,t=Te)=>Math.log((n+t/e)/(t/e))/e;function si(n,e,t=Te){let s=1,i=1e3;for(let a=0;a<60;a++){const o=(s+i)/2;ti(St(o,e,t),o,e,t)<n?s=o:i=o}return(s+i)/2}const ke=.25;function ii({seed:n=704,duration:e=480,rate:t=.55}={}){const s=Mt(n),i=[],a=e*.88,o=c=>c[Math.floor(s()*c.length)];let r=2;for(;r<e;){const c=r>=a,l=c?r>e-4?"salute":o(["chrysanthemum","chrysanthemum","willow","peony","glitter","palm"]):o(["peony","peony","chrysanthemum","chrysanthemum","willow","ring","palm","glitter"]),f=Ye[l].colour??o(ct),u=s()<.3?o(ct):f,m=110+s()*110,x=si(m,ke);i.push({t:+r.toFixed(3),type:l,colours:[f,u],height:m,v0:x,rise:St(x,ke),x:(s()-.5)*220,z:(s()-.5)*80,tilt:[(s()-.5)*.16,(s()-.5)*.1],size:.75+s()*.5});const v=c?.18+s()*.35:s()<.12?3+s()*3:.6+s()*(2/t);r+=v}return{shells:i,duration:e,finaleAt:a}}function oi(n,e=.25){let t=0;for(let s=0;s<n.duration+8;s+=e){let i=0;for(const a of n.shells){const o=Ye[a.type],r=a.t+a.rise;s>=r&&s<=r+o.life*1.3&&(i+=o.stars)}t=Math.max(t,i)}return t}const ve=8e3,ai=[[0,1],[.05,.6],[.1,.4],[.17,.26],[.26,.15]],ni=1.6,ri=`
  attribute vec4 aStart;   // x y z (three-space), t0 (show seconds)
  attribute vec4 aVel;     // vx vy vz, life
  attribute vec4 aCol;     // r g b, flags: 1 glitter, 2 a rising shell
  attribute vec4 aPhys;    // k, gravity scale, trail, seed
  uniform float time, lag, ghost, bright, pxScale, starM;
  varying vec3 vCol;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  float hh(float x) { return fract(sin(x * 91.7) * 43758.5); }
  void main() {
    float tau = time - aStart.w - lag * aPhys.z;
    float life = aVel.w;
    bool on = tau >= 0.0 && tau <= life && (lag == 0.0 || aPhys.z > 0.0);
    if (!on) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; vCol = vec3(0.0); return; }
    float k = aPhys.x;
    vec3 g = vec3(0.0, -9.81 * aPhys.y, 0.0);
    vec3 p = aStart.xyz + g * tau / k + (aVel.xyz - g / k) * (1.0 - exp(-k * tau)) / k;
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float rising = step(1.5, aCol.w);
    float glitter = mod(aCol.w, 2.0);
    float fade = 1.0 - smoothstep(0.55 * life, life, tau);
    float flash = 1.0 + (1.0 - rising) * 2.5 * exp(-tau * 10.0);
    float tw = mix(1.0, step(0.4, hh(floor(time * 26.0) + aPhys.w)) * 1.6, glitter);
    vCol = aCol.rgb * bright * fade * flash * tw * ghost * mix(1.0, 0.35, rising);
    gl_PointSize = max(1.5, starM * mix(1.0, 0.6, rising) * pxScale / -mv.z) * mix(1.0, 0.8, step(0.001, lag));
    #include <logdepthbuf_vertex>
  }`,li=`
  varying vec3 vCol;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    gl_FragColor = vec4(vCol * (1.0 - d * d), 1.0);
  }`;class ci{constructor(e,t){this.game=e,this.lights=t,this.time=0,this.playing=!1,this.show=null,this.flashes=[],this.cursor=0,this.lastEnd=-1;const s=ve;this.arrays={aStart:new Float32Array(s*4),aVel:new Float32Array(s*4),aCol:new Float32Array(s*4),aPhys:new Float32Array(s*4)};const i=this.geometry=new Q;i.setAttribute("position",new Se(new Float32Array(s*3),3));for(const[a,o]of Object.entries(this.arrays))i.setAttribute(a,new Se(o,4).setUsage(Yt));this.uniforms={time:{value:0},bright:{value:7},pxScale:{value:800},starM:{value:ni}},this.group=new Ae,this.group.name="fireworks",this.group.visible=!1;for(const[a,o]of ai){const r=new re({uniforms:{...this.uniforms,lag:{value:a},ghost:{value:o}},vertexShader:ri,fragmentShader:li,transparent:!0,depthWrite:!1,blending:ne,toneMapped:!1}),c=new Ve(i,r);c.frustumCulled=!1,c.renderOrder=4,this.group.add(c)}e.scene.add(this.group),this._dirty=null}defaultBarge(){return{x:-60,y:-500}}start({x:e,y:t,seed:s=704,duration:i=480,at:a=0}={}){const o=e==null?this.defaultBarge():{x:e,y:t},r=this.game.META?.seaLevel??0;this.barge=new A(o.x,r+2,-o.y),this.show=ii({seed:s,duration:i}),this.peak=oi(this.show),this.playing=!0,this.seek(a)}stop(){this.playing=!1}seek(e){for(const t of Object.values(this.arrays))t.fill(0);this._markAll(),this.cursor=0;for(const t of this.flashes)t.light.release();for(this.flashes=[],this.next=0,this.pending=[],this.lastEnd=-1,this.time=Math.max(0,e-8);this.next<this.show.shells.length&&this.show.shells[this.next].t<this.time-6;)this.next++;for(this.quiet=!0;this.time<e;)this._step(Math.min(1/30,e-this.time));this.quiet=!1}_markAll(){this._dirty=[0,ve]}_mark(e){this._dirty?(this._dirty[0]=Math.min(this._dirty[0],e),this._dirty[1]=Math.max(this._dirty[1],e+1)):this._dirty=[e,e+1]}_write(e,t,s,i,a,o,r,c,l){const h=this.cursor;this.cursor=(this.cursor+1)%ve,this.cursor===0&&this._markAll();const f=this.arrays,u=h*4;f.aStart.set([e.x,e.y,e.z,e.t],u),f.aVel.set([t.x,t.y,t.z,s],u),f.aCol.set([i[0],i[1],i[2],a],u),f.aPhys.set([o,r,c,l],u),this._mark(h),this.lastEnd=Math.max(this.lastEnd,e.t+s+.3*2.8)}_emit(e,t,s,i){this.quiet||typeof dispatchEvent!="function"||typeof CustomEvent!="function"||dispatchEvent(new CustomEvent("ts:firework",{detail:{kind:e,type:t,pos:s.toArray(),size:i}}))}_launch(e,t){const s=this.barge.clone().add(new A(e.x,0,e.z)),a=new A(e.tilt[0],1,e.tilt[1]).normalize().multiplyScalar(e.v0);this._write({x:s.x,y:s.y,z:s.z,t:e.t},a,e.rise,De.gold,2,ke,1,1.6,t*.37);const o=ke,r=new A(0,-Te,0),c=1-Math.exp(-o*e.rise),l=s.clone().addScaledVector(r,e.rise/o).addScaledVector(a.clone().addScaledVector(r,-1/o),c/o),h=a.clone().addScaledVector(r,-1/o).multiplyScalar(Math.exp(-o*e.rise)).addScaledVector(r,1/o);this.pending.push({s:e,idx:t,t:e.t+e.rise,pos:l,drift:h}),this._emit("launch",e.type,s,e.size)}_burst({s:e,idx:t,t:s,pos:i,drift:a}){const o=Ye[e.type],r=Mt(t*7919+13),c=o.stars,l=o.speed*Math.sqrt(e.size);let h=null;o.ring&&(h=new A(r()-.5,r()*.6+.2,r()-.5).normalize());const f=new A,u=new A,m=new A;h&&(u.set(1,0,0).cross(h).normalize(),m.crossVectors(h,u));for(let x=0;x<c;x++){if(h){const b=x/c*Math.PI*2+r()*.05;f.copy(u).multiplyScalar(Math.cos(b)).addScaledVector(m,Math.sin(b))}else{const b=1-2*(x+.5)/c,M=Math.sqrt(1-b*b),g=x*2.39996+r()*.2;f.set(Math.cos(g)*M,b,Math.sin(g)*M)}const v=f.clone().multiplyScalar(l*(.9+r()*.2)).addScaledVector(a,.3),y=De[x%2?e.colours[1]:e.colours[0]];this._write({x:i.x,y:i.y,z:i.z,t:s},v,o.life*(.85+r()*.3),y,o.flicker,o.k,o.gs,o.trail,x*.71+t)}if(this.lights&&this.flashes.length<2&&!this.quiet){const x=De[e.colours[0]],v=this.lights.request({pos:i,colour:new N(...x).lerp(new N(1,1,1),.5),intensity:0,range:900,priority:1});this.flashes.push({light:v,t0:s,peak:(e.type==="salute"?9e5:4e5)*e.size})}this._emit("burst",e.type,i,e.size)}_step(e){this.time+=e;const t=this.show.shells;for(;this.next<t.length&&t[this.next].t<=this.time;)this._launch(t[this.next],this.next),this.next++;for(let s=this.pending.length-1;s>=0;s--)this.pending[s].t<=this.time&&(this._burst(this.pending[s]),this.pending.splice(s,1));for(let s=this.flashes.length-1;s>=0;s--){const i=this.flashes[s],a=this.time-i.t0;a>.6?(i.light.release(),this.flashes.splice(s,1)):i.light.intensity=i.peak*Math.exp(-a*7)}}update(e,t,s){if(this.show&&(this.playing&&this._step(e),this.playing&&this.next>=this.show.shells.length&&!this.pending.length&&this.time>this.lastEnd&&(this.playing=!1),this.uniforms.time.value=this.time,s&&t&&(this.uniforms.pxScale.value=s.getDrawingBufferSize(new S).y/(2*Math.tan(ae.degToRad(t.fov)/2))),this.group.visible=this.time<=this.lastEnd,this._dirty)){const[i,a]=this._dirty;for(const o of Object.keys(this.arrays)){const r=this.geometry.attributes[o];r.updateRanges.length>8?(r.clearUpdateRanges(),r.addUpdateRange(0,ve*4)):r.addUpdateRange(i*4,(a-i)*4),r.needsUpdate=!0}this._dirty=null}}}const hi=1e3/60,ht=18.2,fi=17.5,ui=1e3/30,di=400,pi=.35,gi=.1,mi=800,vi=2500,wi=.05,xi=4e3,ft=3e3,yi=3e4,bi=3e5,ut=.08,Mi=250,ee=(n,e,t)=>Math.min(t,Math.max(e,n));class Si{constructor({min:e=.5,max:t=1,start:s}={}){this.min=e,this.max=t,this.scale=ee(s??t,e,t),this.ema=0,this.time=0,this.slowFor=0,this.fastFor=0,this.goal=null,this.settleUntil=0,this.lastDrop=-1/0,this.lastRaise=-1/0,this.raisedFrom=null,this.ceiling=1/0,this.ceilingUntil=-1/0,this.fails=0,this.cpu=0,this.cpuBound=!1,this.locked=null,this.limited=!1}setRange(e,t){this.min=e,this.max=t,this.scale=ee(this.scale,e,t),this.goal=null}lock(e){this.locked=e==null?null:ee(e,.25,1)}get value(){return this.locked??this.scale}sample(e,t=null){if(!(e>0)||e>Mi)return this.value;const s=this.time+=e,i=this.ema=this.ema?this.ema+(e-this.ema)*ut:e;if(t!=null&&t>=0&&(this.cpu=this.cpu?this.cpu+(t-this.cpu)*ut:t),this.cpuBound=this.cpu>ht,this.locked!=null)return this.locked;this.slowFor=i>ht?this.slowFor+e:0,this.fastFor=i<fi?this.fastFor+e:0;const a=this.min,o=Math.min(this.max,s<this.ceilingUntil?this.ceiling:1/0);return this.goal!=null?(this.scale=Math.max(this.goal,this.scale-pi*e/1e3),this.scale<=this.goal+1e-9&&(this.goal=null,this.settleUntil=s+mi,this.slowFor=0),this.lastDrop=s):this.slowFor>di&&s>this.settleUntil&&this.scale>a+1e-9&&!this.cpuBound?(s-this.lastRaise<ft&&this.raisedFrom!=null?(this.goal=Math.max(a,this.raisedFrom),this.ceiling=this.raisedFrom,this.ceilingUntil=s+Math.min(bi,yi*2**this.fails++),this.raisedFrom=null):this.goal=ee(Math.max(this.scale*Math.sqrt(hi/i)*.97,this.scale-gi),a,this.max),this.lastDrop=s):this.fastFor>vi&&s-this.lastDrop>xi&&this.scale<o-1e-9&&(this.raisedFrom=this.scale,this.scale=Math.min(o,this.scale+wi),this.lastRaise=s,this.fastFor=0),this.raisedFrom!=null&&s-this.lastRaise>ft&&(this.raisedFrom=null,this.fails=0),this.scale=Math.round(ee(this.scale,a,this.max)*1e3)/1e3,this.limited=this.scale<=this.min+1e-6&&i>ui,this.scale}}const ie=40,Ge=280,We=.8,ki=120,oe=Object.freeze({off:Object.freeze({maps:0}),low:Object.freeze({maps:1,size:2048,end:ki}),high:Object.freeze({maps:2,size:2048,near:ie,far:Ge})});function Ai(n,e,t,s){const i=Math.tan(n*Math.PI/360),a=(t*i)**2*(1+e*e),o=(s*i)**2*(1+e*e);let r=(s*s-t*t+o-a)/(2*(s-t));r=Math.min(s,Math.max(t,r));const c=Math.sqrt(Math.max((r-t)**2+a,(s-r)**2+o));return{dist:r,radius:c}}const Ie=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],dt=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Be=n=>{const e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]};function _i(n){const e=Be(n);let t=dt([0,1,0],e);return Math.hypot(...t)<1e-6&&(t=[1,0,0]),t=Be(t),{x:t,y:dt(e,t),z:e}}function Pe(n,e,t,s,i,a,o,r){const c=Ai(s,i,a,o),l=Math.ceil(c.radius+1),h=2*l/r,f=Be(e),u=[n[0]+f[0]*c.dist,n[1]+f[1]*c.dist,n[2]+f[2]*c.dist],m=_i(t),x=Math.round(Ie(u,m.x)/h)*h,v=Math.round(Ie(u,m.y)/h)*h,y=Ie(u,m.z);return{centre:[0,1,2].map(M=>m.x[M]*x+m.y[M]*v+m.z[M]*y),half:l,texel:h}}function Ti(n,e,t,s,i,a){const o=oe[n]??oe.high;return o.maps===0?[]:o.maps===1?[Pe(e,t,s,i,a,.5,o.end,o.size)]:[Pe(e,t,s,i,a,.5,o.near,o.size),Pe(e,t,s,i,a,o.near*We,o.far,o.size)]}const Ei="#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )",He="#pragma unroll_loop_end",Ri=`#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS == 2
	// COUSINS LOOK: the sun's two cascades (look/Shadows.js).
	float lookDepth = - geometryPosition.z;
	float lookNear = 1.0, lookFar = 1.0;
	if ( receiveShadow ) {
		DirectionalLightShadow s0 = directionalLightShadows[ 0 ];
		DirectionalLightShadow s1 = directionalLightShadows[ 1 ];
		if ( lookDepth < ${ie.toFixed(1)} ) lookNear = getShadow( directionalShadowMap[ 0 ], s0.shadowMapSize, s0.shadowIntensity, s0.shadowBias, s0.shadowRadius, vDirectionalShadowCoord[ 0 ] );
		if ( lookDepth > ${(ie*We).toFixed(1)} ) lookFar = getShadow( directionalShadowMap[ 1 ], s1.shadowMapSize, s1.shadowIntensity, s1.shadowBias, s1.shadowRadius, vDirectionalShadowCoord[ 1 ] );
	}
	float lookSun = mix( lookNear, lookFar, smoothstep( ${(ie*We).toFixed(1)}, ${ie.toFixed(1)}, lookDepth ) );
	lookSun = mix( lookSun, 1.0, smoothstep( ${(Ge*.85).toFixed(1)}, ${Ge.toFixed(1)}, lookDepth ) );
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS == 2
		#if ( UNROLLED_LOOP_INDEX == 0 )
		directLight.color *= directLight.visible ? lookSun : 1.0;
		#endif
		#elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	${He}`;function Oi(){const n=ot.lights_fragment_begin;if(n.includes("COUSINS LOOK"))return!1;const e=n.indexOf(Ei),t=n.indexOf(He,e);if(e<0||t<0||!n.slice(e,t).includes("getShadow( directionalShadowMap[ i ]"))throw new Error("look/Shadows: three's lights_fragment_begin is not r169's; the cascade patch needs a look");return ot.lights_fragment_begin=n.slice(0,e)+Ri+n.slice(t+He.length),!0}class Fi{constructor(e){this.game=e,this.sun=e.sky.sun,this.renderer=e.renderer,Oi();const t=this.twin=new Xt(16777215,0);t.name="sun:far-cascade",t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.bias=-4e-4,t.shadow.normalBias=.6,e.scene.add(t,t.target),this.level="high",this.fits=[],this.farEvery=3,this._farKey="",this._frame=0,this.cullCasters=!0,this._v=new A,this._d=new A,this.apply()}setLevel(e){!oe[e]||e===this.level||(this.level=e,this.apply())}apply(){const e=oe[this.level],t=this.renderer,s=this.sun,i=this.twin,a=e.maps>0,o=e.maps===2,r=t.shadowMap.enabled!==a||i.castShadow!==o;t.shadowMap.enabled=a,s.castShadow=!0,i.castShadow=o,i.visible=o,e.size&&s.shadow.mapSize.x!==e.size&&(s.shadow.mapSize.set(e.size,e.size),s.shadow.map?.dispose(),s.shadow.map=null),s.shadow.normalBias=o?.04:.3,s.shadow.bias=o?-2e-4:-4e-4,r&&this.game.scene.traverse(c=>{const l=c.material;if(l)for(const h of Array.isArray(l)?l:[l])h.needsUpdate=!0})}update(e){const t=oe[this.level];if(!t.maps)return;const i=this.game.sky.lightDir(this._v),a=e.getWorldDirection(this._d),o=e.position;if(this.fits=Ti(this.level,[o.x,o.y,o.z],[a.x,a.y,a.z],[i.x,i.y,i.z],e.fov,e.aspect),(t.maps===2?[this.sun,this.twin]:[this.sun]).forEach((h,f)=>{const u=this.fits[f],m=h.shadow.camera;h.target.position.set(...u.centre);const x=f===0?400:800;h.position.set(u.centre[0]+i.x*x,u.centre[1]+i.y*x,u.centre[2]+i.z*x),(m.right!==u.half||m.far!==x+u.half)&&(Object.assign(m,{left:-u.half,right:u.half,top:u.half,bottom:-u.half,near:1,far:x+u.half}),m.updateProjectionMatrix()),h.target.updateMatrixWorld(),h.updateMatrixWorld()}),t.maps===2){this.twin.color.copy(this.sun.color);const h=this.fits[1],f=`${h.centre.map(m=>m.toFixed(2)).join()}|${i.x.toFixed(3)},${i.y.toFixed(3)}`,u=this.farEvery<=1||f!==this._farKey||this._frame++%this.farEvery===0;this._farKey=f,this.twin.shadow.autoUpdate=!1,this.twin.shadow.needsUpdate=u}else this.twin.shadow.autoUpdate=!0;const c=this.sun.shadow.camera,l=this.fits[0];if(this.cullCasters&&t.maps===2){const h=Math.hypot(l.centre[0]-o.x,l.centre[1]-o.y,l.centre[2]-o.z),f=Math.max(.05,i.y),u=Math.min(150,28*Math.sqrt(1-f*f)/f);c.userData.reach=h+l.half*Math.SQRT2+u}else c.userData.reach=0}}const qe=n=>Math.max(0,Math.min(1,n)),we=(n,e,t)=>n+(e-n)*t,Ni=.3;function Di(n=32,e=.5){const t=new Uint8Array(n*n*4),s=(n-1)/2;for(let a=0;a<n;a++)for(let o=0;o<n;o++){const r=Math.hypot(o-s,a-s)/s,c=qe(1-(r-e)/(1-e)),l=(a*n+o)*4;t[l]=255,t[l+1]=255,t[l+2]=255,t[l+3]=Math.round(255*c*c)}const i=new gt(t,n,n,Zt);return i.needsUpdate=!0,i}const be=Object.freeze({clear:{kind:null,fog:null,wetness:0,temp:0,grade:{sun:1,ambient:1,hemi:1},wind:[.4,.2]},overcast:{kind:null,wetness:0,temp:-3,fog:{colour:12174025,near:40,far:320},grade:{sun:.12,ambient:1.7,hemi:1.45},wind:[1.2,.5]},drizzle:{kind:"rain",count:1400,box:[15,13,15],fall:7,length:.16,colour:13162208,opacity:.3,wind:[1.6,.7],wetness:.45,temp:-4,fog:{colour:11713732,near:28,far:220},grade:{sun:.09,ambient:1.72,hemi:1.46}},rain:{kind:"rain",count:3200,box:[16,14,16],fall:12,length:.3,colour:12767966,opacity:.4,wind:[2.6,1.1],wetness:.85,temp:-5,fog:{colour:10793145,near:20,far:150},grade:{sun:.06,ambient:1.78,hemi:1.52}},heavyRain:{kind:"rain",count:7e3,box:[17,15,17],fall:17,length:.52,colour:12372951,opacity:.48,wind:[4.2,1.8],wetness:1,temp:-6,fog:{colour:9740715,near:10,far:82},grade:{sun:.04,ambient:1.74,hemi:1.5}},storm:{kind:"rain",count:8200,box:[18,16,18],fall:19,length:.62,colour:11978452,opacity:.5,wind:[7.5,3],wetness:1,temp:-7,fog:{colour:8227477,near:8,far:64},grade:{sun:.03,ambient:1.62,hemi:1.4},flash:{every:7.5,chance:.55}},duststorm:{kind:"rain",count:5200,box:[22,13,22],fall:.6,length:.5,colour:10254922,opacity:.3,wind:[13,4],wetness:0,temp:6,fog:{colour:12557678,near:1,far:40},grade:{sun:.4,ambient:1.3,hemi:.85}},snow:{kind:"points",count:2600,box:[14,12,14],fall:1.1,size:.07,colour:16054523,opacity:.85,wind:[1.1,.6],drift:.55,wetness:.3,temp:-18,fog:{colour:14148330,near:18,far:110},grade:{sun:.1,ambient:1.7,hemi:1.8}},blizzard:{kind:"points",count:6400,box:[15,13,15],fall:2.4,size:.06,colour:16251644,opacity:.9,wind:[11,4.5],drift:1.4,wetness:.5,temp:-22,fog:{colour:14542572,near:3,far:34},grade:{sun:.05,ambient:1.72,hemi:1.55}},fog:{kind:null,wetness:.35,temp:-6,fog:{colour:12897490,near:3,far:38},grade:{sun:.08,ambient:1.6,hemi:1.38},wind:[.5,.2]},seaFog:{kind:"points",count:900,box:[40,7,40],fall:.05,size:1.8,colour:14673900,opacity:.1,wind:[2,.8],drift:.25,wetness:.4,temp:-4,fog:{colour:13621470,near:2,far:30},grade:{sun:.1,ambient:1.62,hemi:1.4}},ash:{kind:"points",count:3e3,box:[16,13,16],fall:.9,size:.1,colour:7038304,opacity:.55,wind:[2.2,1],drift:.9,wetness:0,temp:2,fog:{colour:9077888,near:6,far:60},grade:{sun:.2,ambient:1.28,hemi:.95}}});Object.freeze(Object.keys(be));const Ii=1/22,Pi=1/95;function zi(n={}){const e=n.scene??null,t=n.lights??{},s=n.fade??4,i=n.groundY??0,a=n.baseTemp??22,o={sun:t.sun?.intensity??null,ambient:t.ambient?.intensity??null,hemi:t.hemi?.intensity??null},r=e?.fog?{colour:e.fog.color.getHex(),near:e.fog.near,far:e.fog.far}:null,c=(w,R)=>({condition:w,...be.clear,...be[w]??{},...R??{}});let l=c(n.preset??"clear",n.override),h=l,f=1,u=0,m=0,x=4,v=l.wetness??0;const y=new A,b=new N,M=new Ae;M.frustumCulled=!1;let g=null,p=null,T=null,d=null;const _=Di();function E(w){if(g&&(M.remove(g),g.geometry.dispose(),g.material.dispose(),g=null,p=null,T=null,d=null),!w.kind)return;const R=w.count??2e3,[U,O,Y]=w.box??[30,18,30],C=w.kind==="rain"?2:1;p=new Float32Array(R*C*3),T=new Float32Array(R),d=new Float32Array(R*4);for(let F=0;F<R;F++){const le=(Math.random()-.5)*U,ce=Math.random()*O,he=(Math.random()-.5)*Y;T[F]=Math.random()*Math.PI*2,d[F*4]=Math.sin(T[F]),d[F*4+1]=Math.cos(T[F]),d[F*4+2]=Math.sin(T[F]*1.7),d[F*4+3]=Math.cos(T[F]*1.7);const z=F*C*3;p[z]=le,p[z+1]=ce,p[z+2]=he,C===2&&(p[z+3]=le,p[z+4]=ce-(w.length??.3),p[z+5]=he)}const G=new Q;G.setAttribute("position",new Se(p,3)),G.boundingSphere=new Jt(new A,1e6);const X=w.kind==="rain"?new es({color:w.colour,transparent:!0,opacity:w.opacity??.4,depthWrite:!1,fog:!0}):new ts({color:w.colour,size:w.size??.1,map:_,transparent:!0,opacity:w.opacity??.4,depthWrite:!1,sizeAttenuation:!0,fog:!0});g=w.kind==="rain"?new ss(G,X):new Ve(G,X),g.frustumCulled=!1,g.renderOrder=10,g.castShadow=!1,g.receiveShadow=!1,M.add(g)}E(l);const k=w=>we(h.grade?.[w]??1,l.grade?.[w]??1,f);function D(){if(t.sun&&o.sun!=null&&(t.sun.intensity=o.sun*k("sun")),t.ambient&&o.ambient!=null&&(t.ambient.intensity=o.ambient*k("ambient")),t.hemi&&o.hemi!=null&&(t.hemi.intensity=o.hemi*k("hemi")),!e)return;const w=h.fog??r,R=l.fog??r;if(!w&&!R)return;const U=w??R,O=R??w;e.fog||(e.fog=new is(O.colour,O.near,O.far)),e.fog.near=we(U.near,O.near,f),e.fog.far=we(U.far,O.far,f),e.fog.color.setHex(U.colour).lerp(b.setHex(O.colour),f),m>0&&(e.fog.color.lerp(b.setHex(16777215),.75*m),t.ambient&&o.ambient!=null&&(t.ambient.intensity*=1+2.2*m))}const P={group:M,get condition(){return l.condition},get kind(){return l.kind??null},get blending(){return f<1},get flash(){return m},get wind(){return y},get wetness(){return v},get record(){return{condition:l.condition,wetness:v,temp:a+we(h.temp??0,l.temp??0,f),wind:Math.hypot(...l.wind??[0,0]),flash:m}},set(w,R){if(!be[w])throw new Error(`weather: no preset "${w}"`);return h={...l},l=c(w,R),f=0,E(l),P},update(w,R){u+=w,f=s>0?qe(f+w/s):1;const U=l.wetness??0;v+=(U-v)*qe(w*(U>v?Ii:Pi)),l.flash&&(x-=w,x<=0&&(x=l.flash.every*(.45+Math.random()*1.3),Math.random()<(l.flash.chance??.6)&&(m=1))),m>0&&(m=Math.max(0,m-w*6.5));const O=l.wind??[0,0];if(y.set(O[0],0,O[1]),D(),!g||!p)return P;const[Y,C,G]=l.box??[30,18,30];R&&M.position.set(R.position.x,Math.max(i,R.position.y-C*Ni),R.position.z);const X=l.kind==="rain"?2:1,F=T.length,le=(l.fall??8)*w,ce=O[0]*w,he=O[1]*w,z=l.drift??0,Ee=l.length??.3,Xe=O[0],Ze=-(l.fall??8),Je=O[1],Re=Math.hypot(Xe,Ze,Je)||1,kt=Xe/Re*Ee,At=Ze/Re*Ee,_t=Je/Re*Ee,et=Y/2,tt=G/2,Tt=Math.sin(u*.8),Et=Math.cos(u*.8),Rt=Math.cos(u*.6),Ot=-Math.sin(u*.6),st=z*w;for(let fe=0;fe<F;fe++){const L=fe*X*3;let q=p[L]+ce,$=p[L+1]-le,j=p[L+2]+he;if(z){const ue=fe*4;q+=(Tt*d[ue+1]+Et*d[ue])*st,j+=(Rt*d[ue+3]+Ot*d[ue+2])*st}$<0?$+=C:$>C&&($-=C),q>et?q-=Y:q<-et&&(q+=Y),j>tt?j-=G:j<-tt&&(j+=G),p[L]=q,p[L+1]=$,p[L+2]=j,X===2&&(p[L+3]=q-kt,p[L+4]=$-At,p[L+5]=j-_t)}return g.geometry.attributes.position.needsUpdate=!0,P},setVisible(w){return M.visible=!!w,P},dispose(){g&&(g.geometry.dispose(),g.material.dispose(),g=null),_.dispose()}};return P}class Li{constructor(e,t){this.game=e,this.lights=t,this.state=new us("clear"),this.drops=zi({preset:"clear",fade:6}),e.scene.add(this.drops.group),this.dropsName="clear",this.fog=null,this.strike=null}get name(){return this.state.name}get now(){return this.state.now}get names(){return ds}set(e,{over:t=20}={}){return this.state.set(e,{over:t}),this.emit({kind:"change",name:e,over:t}),this}emit(e){typeof dispatchEvent=="function"&&typeof CustomEvent=="function"&&dispatchEvent(new CustomEvent("ts:weather",{detail:e}))}update(e,t){const s=this.state.step(e),i=this.game.sky,a=this.state.t<1||s.flash>0||s.flashes>0;(a||this._set!==this.state.name)&&(i.setWeather(s),this._set=a?null:this.state.name);const o=this.game.scene.fog;o&&((!this.fog||o.near!==this.fog.setNear||o.far!==this.fog.setFar)&&(this.fog={near:o.near,far:o.far}),o.near=Math.max(2,this.fog.near*s.fog),o.far=Math.max(60,this.fog.far*Math.max(s.fog,.03)),this.fog.setNear=o.near,this.fog.setFar=o.far),mt.strength=s.wind;const r=s.drops??"clear";if(r!==this.dropsName&&(this.drops.set(r),this.dropsName=r),this.drops.update(e,t),this.state.strike){const c=this.state.strikeDist*7.3%(Math.PI*2),l=Math.min(this.state.strikeDist,1500),h=t.position;this.strike?.release(),this.strike=this.lights?.request({pos:[h.x+Math.cos(c)*l,600,h.z+Math.sin(c)*l],colour:13621503,intensity:0,range:0,priority:3})??null,this.emit({kind:"strike",dist:this.state.strikeDist})}this.strike&&(this.strike.intensity=4e6*s.flash,s.flash<=0&&(this.strike.release(),this.strike=null))}}const Ui=n=>Math.min(1,Math.max(0,n)),je=(n,e,t)=>{const s=Ui((t-n)/(e-n));return s*s*(3-2*s)};function Ci(n,e=0){const t=n-e*.14;return 1-je(-.03,.035,t)}function Gi(n,e){const t=(n%24+24)%24,s=t<12?t+24:t,i=.42*(1-je(22.5,25.5,s)),a=.08,o=.14*Math.exp(-(((s-30)/.8)**2));return e*Math.max(a,i+a*je(22.5,25.5,s)+o)}function Wi(n,e){let t=Math.imul(n|0,374761393)+Math.imul(e|0,668265263)>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,((t^t>>>16)>>>0)/4294967296}const $e=Object.freeze({cobra:Object.freeze({height:8.2,reach:24,candela:420,colour:16763274,every:70,pool:12}),acorn:Object.freeze({height:3.9,reach:16,candela:110,colour:16766880,every:26,pool:8}),post:Object.freeze({height:2.4,reach:10,candela:24,colour:16765070,every:16,pool:5})}),Bi=new Set(["residential","tertiary","primary","unclassified","living_street","primary_link"]),xe=Object.freeze({x:0,y:0,r:420,names:["Moore","Howe","Bay"]});function Hi(n=[],e=[],t=()=>!0){const s=[],i=(o,r,c)=>{let l=r*.5;for(let h=1;h<o.length;h++){const[f,u]=o[h-1],[m,x]=o[h],v=Math.hypot(m-f,x-u);if(v<1e-6)continue;const y=(m-f)/v,b=(x-u)/v;let M=l;for(;M<=v;)c(f+y*M,u+b*M,y,b),M+=r;l=M-v}};let a=0;for(const o of n){if(o.b)continue;const r=o.n&&Math.hypot(o.p[0][0]-xe.x,o.p[0][1]-xe.y)<xe.r&&xe.names.some(u=>o.n.includes(u)),c=o.k==="footway"&&/boardwalk/i.test(o.n??""),l=r?"acorn":c?"post":Bi.has(o.k)?"cobra":null;if(!l)continue;const h=$e[l],f=(o.w??6)/2+(l==="cobra"?1.6:.9);i(o.p,h.every,(u,m,x,v)=>{const y=l==="acorn"?[1,-1]:[Wi(a,17)<.5?1:-1];for(const b of y){const M=u-v*f*b,g=m+x*f*b;t(M,g)&&s.push({x:+M.toFixed(2),y:+g.toFixed(2),dx:+(v*b).toFixed(4),dy:+(-x*b).toFixed(4),kind:l,side:b})}a++})}for(const o of e){if(o.k!=="timber"||o.p.length<2)continue;let r=0;for(let c=1;c<o.p.length;c++)r+=Math.hypot(o.p[c][0]-o.p[c-1][0],o.p[c][1]-o.p[c-1][1]);r<40||i(o.p,$e.post.every,(c,l,h,f)=>{const u=(o.w??2.5)/2-.15;s.push({x:+(c-f*u).toFixed(2),y:+(l+h*u).toFixed(2),dx:+f.toFixed(4),dy:+(-h).toFixed(4),kind:"post",side:1,pier:!0})})}return s}const ze={cobra:.4,acorn:.32,post:.24,porch:.28,car:.45},qi=7,ji=48,H=(n,e,t)=>new A(n,e,t);function B(n,e){const t=new N(e),s=n.attributes.position.count,i=new Float32Array(s*3);for(let a=0;a<s;a++)i.set([t.r,t.g,t.b],a*3);return n.setAttribute("color",new Se(i,3)),n.index?n.toNonIndexed():n}function $i(){const n=ye([B(new se(.11,.15,8.4,7).translate(0,4.2,0),4932153),B(new se(.03,.03,1.9,5).rotateZ(Math.PI/2).translate(.95,7.8,0),7040882),B(new Z(.62,.16,.3).translate(1.95,7.75,0),7040882)]),e=ye([B(new se(.07,.12,3.5,8).translate(0,1.75,0),1842978),B(new se(.18,.14,.18,8).translate(0,3.55,0),1842978),B(new ls(.12,.22,8).translate(0,4.2,0),1842978)]),t=ye([B(new Z(.14,2.3,.14).translate(0,1.15,0),6969928),B(new Z(.22,.08,.22).translate(0,2.42,0),2762274)]);return{cobra:{geo:n,lens:H(1.95,7.66,0),lensGeo:new Z(.5,.02,.24)},acorn:{geo:e,lens:H(0,3.9,0),lensGeo:new cs(.21,12,8)},post:{geo:t,lens:H(0,2.3,0),lensGeo:new Z(.16,.16,.16)}}}const Vi=`
  attribute float gain;
  varying vec2 vUv; varying float vGain; varying float vFar;
  uniform vec3 camPos;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vUv = uv * 2.0 - 1.0; vGain = gain;
    vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
    // Where the real light takes over (the pool's nearest lamps), the disc fades.
    vFar = smoothstep(45.0, 90.0, distance(w.xyz, camPos));
    gl_Position = projectionMatrix * viewMatrix * w;
    #include <logdepthbuf_vertex>
  }`,Ki=`
  uniform vec3 colour; uniform float on;
  varying vec2 vUv; varying float vGain; varying float vFar;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    float r = length(vUv);
    if (r > 1.0) discard;
    float f = (1.0 - r * r); f *= f;                            // soft to the rim, like a lamp's own falloff
    gl_FragColor = vec4(colour * f * vGain * on * vFar, 1.0);
  }`;class Qi{constructor(e,t){this.game=e,this.lights=t,this.group=new Ae,this.group.name="night",this.on=0;const{grid:s,features:i}=e,a=(g,p)=>(s.groundAt??s.heightAt).call(s,g,p),o=(g,p)=>{const T=s.surfaceName?.(g,p)??"grass";return!/sea|water|marsh|pool|building/.test(T)};this.lamps=Hi(i?.roads??[],i?.piers??[],o);const r=$i(),c=new de,l=new as,h=H(0,1,0),f=H(1,1,1),u=new Ue({vertexColors:!0,roughness:.85,metalness:0});this.lensMat=new os({color:16777215,toneMapped:!0}),this.lensMat.color.setScalar(.25);const m=[],x=[],v={};for(const g of this.lamps)(v[g.kind]??=[]).push(g);for(const[g,p]of Object.entries(v)){const T=r[g],d=$e[g],_=new Oe(T.geo,u,p.length);_.name=`night:${g}`,_.castShadow=g!=="post";const E=new Oe(T.lensGeo,this.lensMat,p.length);E.name=`night:${g}:lens`,p.forEach((k,D)=>{const P=a(k.x,k.y);l.setFromAxisAngle(h,Math.atan2(k.dy,k.dx)),c.compose(H(k.x,P,-k.y),l,f),_.setMatrixAt(D,c);const w=T.lens.clone().applyQuaternion(l).add(H(k.x,P,-k.y));c.compose(w,l,f),E.setMatrixAt(D,c),m.push({x:w.x,z:w.z,y:P+.04,r:d.pool,gain:ze[g]}),x.push({pos:[w.x,w.y-.25,w.z],colour:d.colour,intensity:d.candela,range:d.reach,priority:0})}),_.instanceMatrix.needsUpdate=E.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),E.computeBoundingSphere(),this.group.add(_,E)}this.statics=t?.requestStatic(x,"street")??[],this.poolU={colour:{value:new N(16763274)},on:{value:0},camPos:{value:new A}};const y=new re({uniforms:this.poolU,vertexShader:Vi,fragmentShader:Ki,transparent:!0,depthWrite:!1,blending:ne,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,toneMapped:!1}),b=new ns(2,2).rotateX(-Math.PI/2);this.pools=this.makePools(b,y,m,256),this.porch=[],this.carU={...this.poolU,colour:{value:new N(16773848)}};const M=y.clone();M.uniforms=this.carU,this.carPools=this.makePools(b,M,[],ji),this.cars=[],e.scene.add(this.group),this.windows=this.wrapFacades(e.buildings?.group?.children?.[0]?.material),this.stats={lamps:this.lamps.length,kinds:Object.fromEntries(Object.entries(v).map(([g,p])=>[g,p.length]))}}makePools(e,t,s,i){const a=s.length+i,o=new Oe(e,t,a);o.name="night:pools",o.geometry=e.clone();const r=new Float32Array(a);o.geometry.setAttribute("gain",new rs(r,1));const c=new de;return s.forEach((l,h)=>{c.makeScale(l.r,1,l.r).setPosition(l.x,l.y,l.z),o.setMatrixAt(h,c),r[h]=l.gain}),o.count=s.length,o.frustumCulled=!1,o.renderOrder=1,this.group.add(o),{mesh:o,gain:r,used:s.length,max:a}}add({pos:e,kind:t="porch",colour:s=16766106,intensity:i=12,range:a=8,radius:o=3.5}){const r=this.pools;if(r.used<r.max){const l=new de().makeScale(o,1,o).setPosition(e[0],e[1]-2.2,e[2]);r.mesh.setMatrixAt(r.used,l),r.gain[r.used]=ze[t]??.14,r.used++,r.mesh.count=r.used,r.mesh.instanceMatrix.needsUpdate=!0,r.mesh.geometry.attributes.gain.needsUpdate=!0}const[c]=this.lights?.requestStatic([{pos:e,colour:s,intensity:i,range:a,priority:1}],"street")??[];return this.porch.push(c),c}car(e,{front:t=H(0,0,-1),ahead:s=4.5,height:i=.8}={}){const a=this.lights?.request({pos:[0,0,0],colour:16773848,intensity:0,range:22,priority:1}),o={object:e,front:t.clone().normalize(),ahead:s,height:i,light:a,remove:()=>{a?.release(),this.cars.splice(this.cars.indexOf(o),1)}};return this.cars.push(o),o}wrapFacades(e){if(!e||e.userData.lookWindows)return null;const t={lookWinLit:{value:0},lookWinGain:{value:1.4}},s=e.onBeforeCompile,i=e.customProgramCacheKey;return e.onBeforeCompile=(a,o)=>{s?.call(e,a,o),Object.assign(a.uniforms,t),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLookW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLookW = (modelMatrix * vec4(transformed, 1.0)).xyz;`);const r="diffuseColor.rgb = mix(diffuseColor.rgb * fx.rgb, fx.rgb, fx.a);";a.fragmentShader.includes(r)&&(a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLookW;
uniform float lookWinLit, lookWinGain;
float lookGlass = 0.0;`).replace(r,`${r}
  lookGlass = fx.a * step(fx.r * 1.2 + 0.004, fx.b) * step(fx.b, 0.3);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{
  // One lit-or-not per window-sized cell of the town (2.6 m across, a storey tall).
  vec3 lc = floor(vLookW / vec3(2.6, 3.0, 2.6));
  float lh = fract(sin(dot(lc, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  vec3 warm = mix(vec3(1.0, 0.66, 0.36), vec3(0.5, 0.62, 1.0), step(0.94, fract(lh * 13.7)));
  totalEmissiveRadiance += warm * lookGlass * step(lh, lookWinLit) * lookWinGain;
}`))},e.customProgramCacheKey=()=>`${i?i.call(e):""}+look-windows`,e.userData.lookWindows=!0,e.needsUpdate=!0,t}update(e,t){const s=this.game.sky,i=s.weather??{},a=this.on=Ci(s.dirWorld[2],i.dark??0);this.poolU.on.value=a,this.poolU.camPos.value.copy(t.position),this.lensMat.color.setScalar(.25+a*qi).multiply(this._warm??=new N(16767400)),this.lights&&(this.lights.levels.street=a),this.windows&&(this.windows.lookWinLit.value=Gi(s.hour,a));const o=this.carPools,r=this._m4??=new de,c=this._f??=new A,l=this._p??=new A;let h=0;for(const f of this.cars){f.object.updateWorldMatrix(!0,!1),c.copy(f.front).transformDirection(f.object.matrixWorld),f.object.getWorldPosition(l);const u=l.x+c.x*f.ahead,m=l.z+c.z*f.ahead;if(f.light&&(f.light.pos.set(u,l.y+f.height,m),f.light.intensity=40*a),h<o.max){const x=l.y;r.makeRotationY(Math.atan2(c.x,c.z)).scale(this._s??=new A(2.6,1,7)).setPosition(l.x+c.x*(f.ahead+4),x+.05,l.z+c.z*(f.ahead+4)),o.mesh.setMatrixAt(h,r),o.gain[h]=ze.car,h++}}o.mesh.count=h,h&&(o.mesh.instanceMatrix.needsUpdate=!0,o.mesh.geometry.attributes.gain.needsUpdate=!0),this.carU.on.value=a}}const pt=Object.freeze({mobile:Object.freeze({scaleMin:.5,scaleMax:.75,aa:"fxaa",bloom:!1,dof:!1,shadows:"low",ao:!1}),low:Object.freeze({scaleMin:.5,scaleMax:.85,aa:"fxaa",bloom:!1,dof:!1,shadows:"off",ao:!1}),medium:Object.freeze({scaleMin:.6,scaleMax:1,aa:"fxaa",bloom:!0,dof:!0,shadows:"low",ao:!1}),high:Object.freeze({scaleMin:.7,scaleMax:1,aa:"fxaa",bloom:!0,dof:!0,shadows:"high",ao:!1})}),Yi=(n,e)=>n.aa==="auto"?e>=1.5?"fxaa":"msaa":n.aa,Xi=n=>pt[n]??pt.high;function no(n,e=Ts(typeof location>"u"?"":location.search)){const t=new Ls(n.renderer,n.sky,e);t.lights=new Hs(n.scene),t.lights.adopt(n.scene),t.shadows=new Fi(n),t.scaler=new Si;const s=new Set(typeof location>"u"?[]:_e.map(a=>a.key).filter(a=>new URLSearchParams(location.search).has(a)));t.setQuality=a=>{const o=Xi(a);t.quality=a,t.scaler.setRange(o.scaleMin,o.scaleMax);const r=n.renderer.getPixelRatio();s.has("aa")||t.set("aa",Yi(o,r)),s.has("bloom")||t.set("bloom",o.bloom),s.has("dof")||t.set("dof",o.dof),s.has("ao")||t.set("ao",o.ao),t.presetShadows=o.shadows,t.options.shadows==="auto"&&t.shadows.setLevel(o.shadows)},s.has("shadows")&&t.set("shadows",t.options.shadows),s.has("scale")&&t.set("scale",t.options.scale);let i=null;try{i=globalThis.localStorage??null}catch{i=null}if(t.setQuality(i?ps(i).quality:"high"),typeof addEventListener=="function"&&addEventListener("ts:settings",a=>t.setQuality(a.detail?.quality)),typeof requestAnimationFrame=="function"){let a=0;const o=r=>{a&&t.scaler.sample(r-a,performance.now()-r),a=r,requestAnimationFrame(o)};requestAnimationFrame(o)}return n.sky.attachRenderer?.(n.renderer),t.weather=new Li(n,t.lights),t.night=new Qi(n,t.lights),t.fire=new ei(n,t.lights),t.fireworks=new ci(n,t.lights),n.onUpdate?.(a=>{t.weather.update(a,n.camera),t.night.update(a,n.camera),t.fire.update(a,n.camera,n.renderer),t.fireworks.update(a,n.camera,n.renderer)}),t}export{vs as G,ao as a,oo as l,no as m};
