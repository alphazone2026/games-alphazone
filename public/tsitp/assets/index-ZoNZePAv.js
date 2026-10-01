import{D as gt,a4 as Ot,a5 as Nt,a6 as Dt,C as D,a7 as at,V as M,a as te,a8 as Pt,B as Q,f as P,Z as re,a9 as It,aa as Lt,e as A,ab as ze,c as Se,ac as zt,ad as Ct,ae as oe,af as Ut,ag as Gt,a0 as Wt,ah as Bt,ai as Ht,aj as jt,H as qt,ak as $t,al as Vt,am as ne,an as Kt,M as Ce,ao as Qt,G as Ae,ap as Ve,aq as Yt,p as se,g as Me,a3 as Xt,X as Zt,z as it,ar as Jt,R as es,as as ts,at as ss,au as as,av as is,N as os,u as ue,A as ns,a2 as Re,Q as rs,P as ls,aw as cs,i as Z,w as hs,q as fs}from"./three.module-BGuaSsWU.js";import{m as ye}from"./BufferGeometryUtils-5X3byhb5.js";import{D as ds,w as mt,S as us}from"./Wind-4THtRkpO.js";import"./Materials-CJtKQf7x.js";import{W as ps,N as gs}from"./weather-DTQz8MlZ.js";import{l as ms}from"./settings-9dmrdRDI.js";const vs={none:null,lawn:8034893,"dry grass":10394467,rough:6130235,fairway:7252039,green:7124306,bunker:15129011,shade:5921594,asphalt:5658715,concrete:10986392,dirt:10717535,sand:null,dune:null,marsh:null,water:3822156,"worn paving":9210499};async function ri(n,e){const t=n.groundKinds;if(!t)return null;const s=await(await fetch(e)).blob(),i=await createImageBitmap(s,{colorSpaceConversion:"none",premultiplyAlpha:"none"});if(i.width!==t.w||i.height!==t.h)throw new Error(`ground.png is ${i.width}x${i.height}, world.json says ${t.w}x${t.h}`);const a=new OffscreenCanvas(i.width,i.height).getContext("2d",{willReadFrequently:!0});a.drawImage(i,0,0);const r=a.getImageData(0,0,i.width,i.height).data,c=new Uint8Array(i.width*i.height);for(let l=0,h=0;l<c.length;l++,h+=4)c[l]=r[h];return ws(n,c)}function ws(n,e){const t=n.groundKinds,s=(i,o)=>{const a=Math.round(i-t.x0),r=Math.round(o-t.y0);return a<0||r<0||a>=t.w||r>=t.h?0:e[r*t.w+a]};return{...t,data:e,at:s,name:(i,o)=>t.kinds[s(i,o)]}}const xs={value:!0},ys=`
float gkHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float gkNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(gkHash(i), gkHash(i + vec2(1, 0)), f.x), mix(gkHash(i + vec2(0, 1)), gkHash(i + vec2(1, 1)), f.x), f.y);
}
float gkFbm(vec2 p) { return 0.55 * gkNoise(p) + 0.3 * gkNoise(p * 2.03 + 17.1) + 0.15 * gkNoise(p * 4.1 + 3.7); }
`,bs=`
vec3 gkShade(int k, vec2 p, vec3 base, float near) {
  float d = 1.0;
  if (k == 1 || k == 2) {                         // lawn, dry grass: patchy, with sun-dried spots
    d = 0.86 + 0.26 * gkFbm(p * 0.45) + (near > 0.0 ? 0.08 * (gkNoise(p * 3.1) - 0.5) * near : 0.0);
    base = mix(base, vec3(0.42, 0.40, 0.2), 0.25 * smoothstep(0.55, 0.8, gkFbm(p * 0.06 + 9.0)));
  } else if (k == 3) {                            // rough: clumpy and darker
    d = 0.84 + 0.3 * gkFbm(p * 0.7);
  } else if (k == 4) {                            // fairway: mowing stripes, 8 m wide
    d = 0.95 + 0.07 * step(0.5, fract(dot(p, vec2(0.875, 0.485)) / 16.0)) + 0.05 * gkFbm(p * 0.3);
  } else if (k == 5) {                            // green: close-cut, fine stripes
    d = 0.97 + 0.05 * step(0.5, fract(dot(p, vec2(0.485, -0.875)) / 6.0));
  } else if (k == 6 || k == 11 || k == 12) {      // bunker, sand, dune: grain and ripples
    d = 0.94 + 0.08 * gkNoise(p * 0.4) + (near > 0.0 ? 0.06 * (gkHash(floor(p * 9.0)) - 0.5) * near
        + 0.03 * sin(dot(p, vec2(0.6, 0.8)) * 3.0 + gkNoise(p * 0.2) * 6.0) * near : 0.0);
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
`;function li(n,e,t){const s=t.capabilities.maxTextureSize;if(e.w>s||e.h>s)return console.warn(`ground kinds: ${e.w}x${e.h} is over this GPU's ${s}px texture limit; 4 m colours only`),null;const i=new gt(e.data,e.w,e.h,Ot,Nt);i.magFilter=i.minFilter=Dt,i.generateMipmaps=!1,i.unpackAlignment=1,i.needsUpdate=!0;const o=new D,a=e.kinds.map(r=>{const c=vs[r];return c==null?new at(0,0,0,0):(o.setHex(c),new at(o.r,o.g,o.b,1))});return n.onBeforeCompile=r=>{r.uniforms.gkMap={value:i},r.uniforms.gkOrigin={value:new M(e.x0,e.y0)},r.uniforms.gkSize={value:new M(e.w,e.h)},r.uniforms.gkDedupe=xs,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGkWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vGkWorld;
uniform sampler2D gkMap;
uniform vec2 gkOrigin;
uniform vec2 gkSize;
uniform bool gkDedupe;
const vec4 gkColour[${a.length}] = vec4[](${a.map(c=>`vec4(${c.x.toFixed(4)}, ${c.y.toFixed(4)}, ${c.z.toFixed(4)}, ${c.w.toFixed(1)})`).join(", ")});
${ys}
${bs}
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
  // (Past 420 m \`near\` is 0 and the warp is 0 whatever the noise says, so the
  // four lookups are skipped there: LK5, the same pixels for less.)
  vec2 warp = near > 0.0 ? (vec2(gkNoise(wp * 0.85), gkNoise(wp * 0.85 + 31.7)) - 0.5) * 1.1 * near
            + (vec2(gkNoise(wp * 3.1 + 7.3), gkNoise(wp * 3.1 + 19.1)) - 0.5) * 0.25 * near : vec2(0.0);
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
}`)},n.customProgramCacheKey=()=>"ground-kinds-v2",n.needsUpdate=!0,i}const Ss=new Pt(-1,1,1,-1,0,1);class Ms extends Q{constructor(){super(),this.setAttribute("position",new P([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new P([0,2,0,0,2,0],2))}}const ks=new Ms;class As{constructor(e){this._mesh=new te(ks,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ss)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const ot={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new M(1/1024,1/512)}},vertexShader:`

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
	`},K=n=>Object.freeze({exposure:1,sat:1,contrast:1,shadow:[1,1,1],highlight:[1,1,1],lift:0,vignette:.22,bloom:.35,threshold:1.6,...n}),W=Object.freeze({night:K({exposure:1.9,sat:.86,contrast:1.04,shadow:[.9,.97,1.14],highlight:[1.04,1,.94],lift:.0035,vignette:.3,bloom:.6,threshold:.9}),twilight:K({exposure:1.35,sat:.95,contrast:1.04,shadow:[.94,.95,1.1],highlight:[1.1,1,.9],lift:.002,vignette:.26,bloom:.45,threshold:1.2}),golden:K({exposure:1.08,sat:1.06,contrast:1.06,shadow:[.95,.97,1.06],highlight:[1.14,1.03,.84],vignette:.24,bloom:.4,threshold:1.5}),morning:K({exposure:1,sat:1.05,contrast:1.08,shadow:[.97,.99,1.04],highlight:[1.04,1.01,.96],vignette:.2,bloom:.22,threshold:1.8}),afternoon:K({exposure:1.1,sat:1.05,contrast:1.04,shadow:[.97,.99,1.04],highlight:[1.09,1.03,.9],vignette:.22,bloom:.25,threshold:1.8})}),_s=K({vignette:0,bloom:.35,threshold:1.6}),Ts=n=>Math.min(1,Math.max(0,n)),pe=(n,e,t)=>{const s=Ts((t-n)/(e-n));return s*s*(3-2*s)},nt=(n,e,t)=>n+(e-n)*t;function V(n,e,t){const s={};for(const i of Object.keys(n))s[i]=Array.isArray(n[i])?n[i].map((o,a)=>nt(o,e[i][a],t)):nt(n[i],e[i],t);return s}function Es(n,e,t=13.33){const s=pe(10.5,15,n),i=V(W.morning,W.afternoon,s),o=n<t?V(W.golden,W.morning,.35):W.golden;return e>=.2?V(o,i,pe(.2,.35,e)):e>=.03?V(o,o,0):e>=-.04?V(W.twilight,o,pe(-.04,.03,e)):V(W.night,W.twilight,pe(-.12,-.04,e))}const _e=Object.freeze([{key:"post",label:"Post-processing",kind:"toggle",default:!0,note:"Off draws the world directly, exactly as before the look: no grade, glow, blur or smoothing below."},{key:"grade",label:"Colour grade",kind:"toggle",default:!0,note:"The summer look, graded by the hour. Off leaves the light as the sky gives it."},{key:"bloom",label:"Glow",kind:"toggle",default:!0,note:"The sun, bright water and lamps glow."},{key:"dof",label:"Depth of field",kind:"toggle",default:!0,note:"A soft background in conversations. Costs nothing outside them."},{key:"aa",label:"Anti-aliasing",kind:"choice",default:"fxaa",choices:["fxaa","msaa","off"],note:"fxaa: smooths edges for little. msaa: the cleanest edges, but it more than doubled the frame at the forecourt (91 ms against 42, measured). off: none."},{key:"shadows",label:"Shadows",kind:"choice",default:"auto",choices:["auto","high","low","off"],note:"auto: by the quality setting. high: crisp shadows near you (people, rails, porches) and soft ones far off. low: one soft map. off: none."},{key:"ao",label:"Contact shadows",kind:"toggle",default:!0,note:"Soft darkening where things meet: under eaves, round feet, along walls."},{key:"scale",label:"Render scale",kind:"choice",default:"auto",choices:["auto","1","0.85","0.7","0.5"],note:"auto: the world is drawn smaller when frames run slow, to hold 60 fps, and back up when they recover. A number fixes it."}]),vt=Object.freeze(Object.fromEntries(_e.map(n=>[n.key,n.default])));function Ue(n,e){const t=_e.find(s=>s.key===n);if(!t)throw new Error(`look: no option '${n}'`);return t.kind==="toggle"?typeof e=="boolean"?e:t.default:t.choices.includes(e)?e:t.default}function Fs(n=""){const e=new URLSearchParams(n),t={...vt};for(const s of _e){if(!e.has(s.key))continue;const i=e.get(s.key);t[s.key]=Ue(s.key,s.kind==="toggle"?!(i==="0"||i==="off"||i==="false"):i)}return t}const ge=6,rt=32,Rs=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,J=(n,e,t={})=>new re({uniforms:e,vertexShader:Rs,fragmentShader:n,depthTest:!1,depthWrite:!1,toneMapped:!1,...t}),Os=`
  precision highp float;
  uniform mat4 modelViewMatrix, projectionMatrix;
  attribute vec3 position; attribute vec2 uv;
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Ns=`
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
  }`,Ds=`
  uniform sampler2D src; uniform vec2 texel;
  varying vec2 vUv;
  vec3 tap(vec2 o) { return texture2D(src, vUv + o * texel).rgb; }
  void main() {
    vec3 c = tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0)) + tap(vec2(0.0, 2.0))
      + 2.0 * (tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)) + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)));
    gl_FragColor = vec4(c / 12.0, 1.0);
  }`,Ps=`
  uniform sampler2D tColor, tDepth; uniform vec2 texel, uvScale, uvMax;
  uniform float logFar, focus, band, maxR, camNear, camFar; uniform bool revDepth;
  varying vec2 vUv;
  // three's log depth: d = log2(1 + w) / log2(far + 1), w the view distance;
  // or, with a reversed depth buffer, d = near (far - w) / (w (far - near)).
  float dist(vec2 uv) { float d = texture2D(tDepth, uv).x; return revDepth ? camNear * camFar / (d * (camFar - camNear) + camNear) : exp2(d * logFar) - 1.0; }
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
  }`,Oe=.9,Is=`
  uniform sampler2D tDepth; uniform vec2 uvScale, uvMax, texel;
  uniform float logFar, tanY, aspect, camNear, camFar; uniform bool revDepth;
  varying vec2 vUv;
  float dist(vec2 uv) { float d = texture2D(tDepth, min(uv * uvScale, uvMax)).x; return revDepth ? camNear * camFar / (d * (camFar - camNear) + camNear) : exp2(d * logFar) - 1.0; }
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
    float rUv = ${Oe.toFixed(2)} / (2.0 * tanY * w0);            // the radius, as a fraction of the screen's height
    float a0 = ign(gl_FragCoord.xy) * 6.2832, occ = 0.0;
    for (int i = 0; i < 10; i++) {
      float fi = (float(i) + 0.5) / 10.0;
      float a = a0 + float(i) * 2.39996;
      vec2 o = vec2(cos(a) / aspect, sin(a)) * rUv * sqrt(fi);
      vec2 uv = vUv + o;
      vec3 S = viewAt(uv, dist(uv));
      vec3 v = S - P;
      float d = length(v);
      occ += max(0.0, dot(N, v / max(d, 1e-3)) - 0.15) * smoothstep(${(Oe*2).toFixed(2)}, ${(Oe*.6).toFixed(2)}, d);
    }
    float ao = 1.0 - occ / 10.0 * 1.6;
    ao = mix(ao, 1.0, smoothstep(45.0, 70.0, w0));
    gl_FragColor = vec4(vec3(clamp(ao, 0.0, 1.0)), 1.0);
  }`,Ls=`
  uniform sampler2D tAO, tDepth; uniform vec2 uvScale, uvMax, texel;
  uniform float logFar, camNear, camFar; uniform bool revDepth;
  varying vec2 vUv;
  float dist(vec2 uv) { float d = texture2D(tDepth, min(uv * uvScale, uvMax)).x; return revDepth ? camNear * camFar / (d * (camFar - camNear) + camNear) : exp2(d * logFar) - 1.0; }
  void main() {
    float w0 = dist(vUv), sum = 0.0, wsum = 0.0;
    for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) {
      vec2 uv = vUv + vec2(float(x), float(y)) * texel * 1.5;
      float wt = 1.0 / (1.0 + abs(dist(uv) - w0) * 4.0 / max(w0 * 0.05, 0.05));
      sum += texture2D(tAO, uv).r * wt; wsum += wt;
    }
    gl_FragColor = vec4(vec3(sum / wsum), 1.0);
  }`,zs=`
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
  }`,Cs=new Map([[Bt,"LINEAR_TONE_MAPPING"],[Ht,"REINHARD_TONE_MAPPING"],[jt,"CINEON_TONE_MAPPING"],[qt,"ACES_FILMIC_TONE_MAPPING"],[$t,"AGX_TONE_MAPPING"],[Vt,"NEUTRAL_TONE_MAPPING"]]),Ne=(n,e,t={})=>new ze(n,e,{type:Wt,depthBuffer:!1,minFilter:Se,magFilter:Se,...t});class Us{constructor(e,t,s={}){this.renderer=e,this.sky=t,this.options={...vt};for(const[o,a]of Object.entries(s))this.options[o]=Ue(o,a);this.focusAt=null,this.grade=null,this.stats={passes:0},this.w=0,this.h=0;const i=this.quad=new As(null);this.mat={down:J(Ns,{src:{value:null},texel:{value:new M},uvScale:{value:new M(1,1)},uvMax:{value:new M(1,1)},threshold:{value:1},knee:{value:.5},gain:{value:1},prefilter:{value:!1}}),up:J(Ds,{src:{value:null},texel:{value:new M}},{blending:ne,transparent:!0}),dof:J(Ps,{camNear:{value:.5},camFar:{value:14e3},revDepth:{value:!1},tColor:{value:null},tDepth:{value:null},texel:{value:new M},uvScale:{value:new M(1,1)},uvMax:{value:new M(1,1)},logFar:{value:1},focus:{value:2},band:{value:.15},maxR:{value:6}}),final:new It({vertexShader:Os,fragmentShader:zs,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:null},tBloom:{value:null},useBloom:{value:!1},bloom:{value:0},uvScale:{value:new M(1,1)},uvMax:{value:new M(1,1)},texel:{value:new M},sharpen:{value:0},tAO:{value:null},useAO:{value:!1},aoStrength:{value:.65},exposure:{value:1},sat:{value:1},contrast:{value:1},lift:{value:0},vignette:{value:0},aspect:{value:1},shadowTint:{value:new A(1,1,1)},highlightTint:{value:new A(1,1,1)},toneMappingExposure:{value:1}}}),ao:J(Is,{camNear:{value:.5},camFar:{value:14e3},revDepth:{value:!1},tDepth:{value:null},uvScale:{value:new M(1,1)},uvMax:{value:new M(1,1)},texel:{value:new M},logFar:{value:1},tanY:{value:.47},aspect:{value:1}}),aoBlur:J(Ls,{camNear:{value:.5},camFar:{value:14e3},revDepth:{value:!1},tAO:{value:null},tDepth:{value:null},uvScale:{value:new M(1,1)},uvMax:{value:new M(1,1)},texel:{value:new M},logFar:{value:1}}),fxaa:new re({...ot,uniforms:Lt.clone(ot.uniforms),depthTest:!1,depthWrite:!1,toneMapped:!1})},this.toneKey=null,this.mips=[];for(let o=0;o<ge;o++)this.mips.push(Ne(1,1));this.dofRT=Ne(1,1),this.aoRT=[0,1].map(()=>new ze(1,1,{depthBuffer:!1,minFilter:Se,magFilter:Se})),this.ldrRT=new ze(1,1,{depthBuffer:!1}),this.sceneRT=null,i.material=this.mat.final,this.setSize()}set(e,t){const s=Ue(e,t),i=this.options[e];this.options[e]=s,e==="aa"&&s!==i&&this.buildSceneTarget(),e==="scale"&&this.scaler?.lock(s==="auto"?null:Number(s)),e==="shadows"&&this.shadows?.setLevel(s==="auto"?this.presetShadows??"high":s)}focus(e){this.focusAt=e&&e.at>0?{band:.15,maxR:6,...e}:null}setSize(){const e=this.renderer.getDrawingBufferSize(this._buf??=new M),t=Math.max(1,e.x),s=Math.max(1,e.y);if(t===this.w&&s===this.h&&this.sceneRT)return;this.w=t,this.h=s,this.buildSceneTarget(),this.dofRT.setSize(t,s),this.ldrRT.setSize(t,s);for(const a of this.aoRT)a.setSize(Math.max(1,t>>1),Math.max(1,s>>1));let i=t,o=s;for(const a of this.mips)i=Math.max(1,Math.ceil(i/2)),o=Math.max(1,Math.ceil(o/2)),a.setSize(i,o)}buildSceneTarget(){this.sceneRT?.depthTexture?.dispose(),this.sceneRT?.dispose();const e=new zt(this.w,this.h);this.renderer.capabilities.reverseDepthBuffer&&(e.type=Ct),this.sceneRT=Ne(this.w,this.h,{depthBuffer:!0,depthTexture:e,samples:this.options.aa==="msaa"?4:0})}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.quad.render(this.renderer),this.stats.passes++}render(e,t){const s=this.renderer,i=this.options;if(this.lights?.update(t.position),this.shadows?.update(t),!i.post){s.render(e,t),this.grade=null;return}this.setSize();let o=i.grade?Es(this.sky.hour,this.sky.dirWorld[2]):_s;const a=this.weather?.now?.sat??1;a!==1&&(o={...o,sat:o.sat*a,contrast:1+(o.contrast-1)*a}),this.grade=o;const r=i.dof&&this.focusAt,c=this.scaler?.value??1,l=Math.max(1,Math.round(this.w*c)),h=Math.max(1,Math.round(this.h*c)),f=this._uvS??=new M,d=this._uvM??=new M;f.set(l/this.w,h/this.h),d.set((l-.5)/this.w,(h-.5)/this.h),this.stats.scale=+(l/this.w).toFixed(3),this.stats.passes=0;const m=s.getRenderTarget(),x=s.info.autoReset,v=!!i.ao;this.sceneRT.resolveDepthBuffer=!!r||v,this.sceneRT.viewport.set(0,0,l,h),this.dofRT.viewport.set(0,0,l,h);const y=this.probe;y?.("scene"),s.setRenderTarget(this.sceneRT),s.render(e,t),s.info.autoReset=!1;let b=this.sceneRT.texture;if(r){y?.("dof");const u=this.mat.dof.uniforms;u.tColor.value=b,u.tDepth.value=this.sceneRT.depthTexture,u.texel.value.set(1/this.w,1/this.h),u.uvScale.value.copy(f),u.uvMax.value.copy(d),u.logFar.value=Math.log2(t.far+1),u.camNear.value=t.near,u.camFar.value=t.far,u.revDepth.value=!!s.capabilities.reverseDepthBuffer,u.focus.value=this.focusAt.at,u.band.value=this.focusAt.band,u.maxR.value=this.focusAt.maxR*this.h/1080,this.pass(this.mat.dof,this.dofRT),b=this.dofRT.texture}if(v){y?.("ao");const u=this.mat.ao.uniforms,_=this.mat.aoBlur.uniforms,[E,k]=this.aoRT;u.tDepth.value=this.sceneRT.depthTexture,u.uvScale.value.copy(f),u.uvMax.value.copy(d),u.texel.value.set(1/E.width,1/E.height),u.logFar.value=Math.log2(t.far+1),u.tanY.value=Math.tan(oe.degToRad(t.fov)/2),u.aspect.value=t.aspect;for(const R of[u,this.mat.aoBlur.uniforms])R.camNear.value=t.near,R.camFar.value=t.far,R.revDepth.value=!!s.capabilities.reverseDepthBuffer;this.pass(this.mat.ao,E),_.tAO.value=E.texture,_.tDepth.value=this.sceneRT.depthTexture,_.uvScale.value.copy(f),_.uvMax.value.copy(d),_.texel.value.set(1/E.width,1/E.height),_.logFar.value=u.logFar.value,this.pass(this.mat.aoBlur,k)}const S=i.bloom&&o.bloom>0;if(S){y?.("bloom");const u=this.mat.down.uniforms,_=this.mat.up.uniforms;u.prefilter.value=!0,u.threshold.value=o.threshold,u.knee.value=o.threshold*.5,u.gain.value=o.exposure,u.src.value=b,u.texel.value.set(1/this.w,1/this.h),u.uvScale.value.copy(f),u.uvMax.value.copy(d),this.pass(this.mat.down,this.mips[0]),u.prefilter.value=!1,u.gain.value=1,u.uvScale.value.set(1,1),u.uvMax.value.set(1,1);for(let k=1;k<ge;k++){const R=this.mips[k-1];u.src.value=R.texture,u.texel.value.set(1/R.width,1/R.height),this.pass(this.mat.down,this.mips[k])}const E=s.autoClear;s.autoClear=!1;for(let k=ge-2;k>=0;k--){const R=this.mips[k+1];_.src.value=R.texture,_.texel.value.set(.5/R.width,.5/R.height),this.pass(this.mat.up,this.mips[k])}s.autoClear=E}y?.("final");const g=this.mat.final,p=g.uniforms,T=`${s.toneMapping}|${s.outputColorSpace}`;if(T!==this.toneKey){this.toneKey=T,g.defines={},Ut.getTransfer(s.outputColorSpace)===Gt&&(g.defines.SRGB_TRANSFER="");const u=Cs.get(s.toneMapping);u&&(g.defines[u]=""),g.needsUpdate=!0}p.tScene.value=b,p.tBloom.value=this.mips[0].texture,p.useBloom.value=S,p.uvScale.value.copy(f),p.uvMax.value.copy(d),p.texel.value.set(1/this.w,1/this.h),p.sharpen.value=Math.min(.25,(1-f.y)*.6),p.useAO.value=!!v,p.tAO.value=this.aoRT[1].texture,p.bloom.value=o.bloom/ge,p.exposure.value=o.exposure,p.sat.value=o.sat,p.contrast.value=o.contrast,p.lift.value=o.lift,p.vignette.value=o.vignette,p.aspect.value=this.w/this.h,p.shadowTint.value.set(...o.shadow),p.highlightTint.value.set(...o.highlight),p.toneMappingExposure.value=s.toneMappingExposure,i.aa==="fxaa"?(this.pass(g,this.ldrRT),y?.("fxaa"),this.mat.fxaa.uniforms.tDiffuse.value=this.ldrRT.texture,this.mat.fxaa.uniforms.resolution.value.set(1/this.w,1/this.h),this.pass(this.mat.fxaa,null)):this.pass(g,null),y?.(null),s.info.autoReset=x,s.setRenderTarget(m)}dispose(){this.sceneRT?.depthTexture?.dispose(),this.sceneRT?.dispose();for(const e of this.mips)e.dispose();this.dofRT.dispose(),this.ldrRT.dispose();for(const e of this.aoRT)e.dispose();for(const e of Object.values(this.mat))e.dispose();this.quad.dispose()}}const Gs=16,Ws=.001;function wt(n,e,t){const s=[];for(const o of n){if(!(o.intensity>Ws))continue;const a=o.pos.x-e.x,r=o.pos.y-e.y,c=o.pos.z-e.z;s.push({f:o,score:Math.sqrt(a*a+r*r+c*c)-o.distance})}s.sort((o,a)=>o.score-a.score);const i=[];for(let o=0;o<s.length&&o<t;o++)i.push(s[o].f);return i}class Bs{constructor(e,t=Gs){this.size=t,this.lights=[],this.fixtures=[],this._byLight=new Map,this._slot=new Array(t).fill(null),this._chosen=new Set,this._held=new Set;for(let s=0;s<t;s++){const i=new Kt(16777215,0,1,2);i.name=`lightpool_${s}`,i.userData.pool=!0,e.add(i),this.lights.push(i)}}collect(e){const t=new Map,s=[];e.traverse(i=>{if(!i.isPointLight||i.userData.pool)return;let o=this._byLight.get(i);if(!o){let a=i;for(;a.parent&&a.parent!==e;)a=a.parent;o={light:i,pos:i.getWorldPosition(new A),root:a,distance:i.distance,intensity:0}}i.visible=!1,t.set(i,o),s.push(o)}),this._byLight=t,this.fixtures=s;for(let i=0;i<this.size;i++)this._slot[i]&&!t.has(this._slot[i].light)&&(this._slot[i]=null)}refresh(e){for(const t of this.fixtures)t.root===e&&t.light.getWorldPosition(t.pos)}update(e){for(const r of this.fixtures)r.intensity=r.light.intensity,r.distance=r.light.distance;const t=wt(this.fixtures,e,this.size),s=this._chosen,i=this._held;s.clear(),i.clear();for(const r of t)s.add(r);const o=this._slot;for(let r=0;r<this.size;r++)o[r]&&!s.has(o[r])&&(o[r]=null),o[r]&&i.add(o[r]);let a=0;for(const r of t)if(!i.has(r)){for(;o[a];)a++;o[a]=r}for(let r=0;r<this.size;r++){const c=this.lights[r],l=o[r];if(!l){c.intensity!==0&&(c.intensity=0);continue}const h=l.light;c.position.equals(l.pos)||c.position.copy(l.pos),c.color.equals(h.color)||c.color.copy(h.color),c.intensity!==h.intensity&&(c.intensity=h.intensity),c.distance!==h.distance&&(c.distance=h.distance),c.decay!==h.decay&&(c.decay=h.decay)}}}const xt=6,me=100,Hs=40;function js(n,e,t=xt){const s=new Map;for(const o of n){if(o.distance>0){const r=o.pos.x-e.x,c=o.pos.y-e.y,l=o.pos.z-e.z;if(Math.sqrt(r*r+c*c+l*l)-o.distance>Hs)continue}const a=o.priority??0;s.has(a)||s.set(a,[]),s.get(a).push(o)}const i=[];for(const o of[...s.keys()].sort((a,r)=>r-a)){if(i.length>=t)break;for(const a of wt(s.get(o),e,t-i.length))i.push(a)}return i}class qs{constructor(e,t=xt){this.scene=e,this.size=t,this.pool=new Bs(e,t),this.requests=new Set,this._list=[],this._dirty=!0,this.stats={requests:0,lit:0},this.levels={}}request({pos:e=[0,0,0],colour:t=16770756,intensity:s=1,range:i=10,priority:o=0,decay:a=2}={}){const r={color:new D(t),intensity:s,distance:i,decay:a},c={light:r,priority:o,pos:Array.isArray(e)?new A(...e):e.clone(),distance:i,intensity:s,get colour(){return r.color},set colour(l){r.color.set(l)},set range(l){r.distance=l},get range(){return r.distance},release:()=>{this.requests.delete(c),this._dirty=!0}};return Object.defineProperty(c,"intensity",{get:()=>r.intensity,set:l=>{r.intensity=l},enumerable:!0}),this.requests.add(c),this._dirty=!0,c}requestStatic(e,t="static"){this.cells??=new Map;const s=[];for(const i of e){const o={color:new D(i.colour??16770756),intensity:0,distance:i.range??10,decay:2},a={light:o,priority:i.priority??0,pos:Array.isArray(i.pos)?new A(...i.pos):i.pos.clone(),distance:o.distance,intensity:0,base:i.intensity??1,group:t},r=`${Math.floor(a.pos.x/me)},${Math.floor(a.pos.z/me)}`;this.cells.has(r)||this.cells.set(r,[]),this.cells.get(r).push(a),s.push(a)}return s}adopt(e,{priority:t=1}={}){e.updateMatrixWorld(!0);const s=[];return e.traverse(i=>{if(!i.isPointLight||i.userData.pool)return;if(i.visible=!1,i.userData.lookRequest){i.getWorldPosition(i.userData.lookRequest.pos),s.push(i.userData.lookRequest);return}const o={light:i,priority:t,pos:i.getWorldPosition(new A),distance:i.distance,intensity:i.intensity,release:()=>{this.requests.delete(o),delete i.userData.lookRequest,this._dirty=!0}};i.userData.lookRequest=o,this.requests.add(o),s.push(o)}),this._dirty=!0,s}update(e){this._dirty&&(this._list=[...this.requests],this._dirty=!1);for(const i of this._list)i.intensity=i.light.intensity,i.distance=i.light.distance;let t=this._list;if(this.cells?.size){t=this._near??=[],t.length=0;for(const a of this._list)t.push(a);const i=Math.floor(e.x/me),o=Math.floor(e.z/me);for(let a=-1;a<=1;a++)for(let r=-1;r<=1;r++){const c=this.cells.get(`${i+a},${o+r}`);if(c)for(const l of c)l.light.intensity=l.base*(this.levels[l.group]??1),l.intensity=l.light.intensity,t.push(l)}}const s=js(t,e,this.size);this.pool.fixtures=s,this.pool.update(e),this.stats.requests=t.length,this.stats.lit=s.length}}const lt=14,$s=(n,e=0)=>.82+.1*Math.sin(n*11.3+e)+.06*Math.sin(n*23.7+e*2.1)+.05*Math.sin(n*5.1+e*.7),Ke=`
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
  }`,Vs=`
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
  }`,Ks=`
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
  }`,Qs=`
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
  }`,Ys=`
  varying float vA;
  ${Qe}
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vec3(1.0, 0.55, 0.15) * 4.0 * vA * (1.0 - d * 2.0), 1.0);
  }`,Xs=`
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
  }`,Zs=`
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
  }`;function Js(){const n=[[0,0,.75,2.1],[.28,.12,.55,1.5],[-.25,.18,.55,1.6],[.1,-.28,.5,1.35],[-.18,-.2,.5,1.25]],e=[],t=[],s=[],i=[];n.forEach(([a,r,c,l],h)=>{const f=h*4;for(const[d,m]of[[-1,0],[1,0],[1,1],[-1,1]])e.push(d,m),t.push(a,.12,r),s.push(c,l,h*1.37);i.push(f,f+1,f+2,f,f+2,f+3)});const o=new Q;return o.setAttribute("position",new P(new Array(e.length/2*3).fill(0),3)),o.setAttribute("corner",new P(e,2)),o.setAttribute("centre",new P(t,3)),o.setAttribute("shape",new P(s,3)),o.setIndex(i),o}function ea(n=10){const e=[],t=[],s=[];for(let o=0;o<n;o++){for(const[r,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(r,c),t.push(o/n);const a=o*4;s.push(a,a+1,a+2,a,a+2,a+3)}const i=new Q;return i.setAttribute("position",new P(new Array(n*12).fill(0),3)),i.setAttribute("corner",new P(e,2)),i.setAttribute("seed",new P(t,1)),i.setIndex(s),i}function ta(){const n=[],e=new D(4863270),t=new D(1709330),s=(i,o,a)=>{const r=new se(o*.85,o,i,7,3),c=[],l=r.attributes.position;for(let h=0;h<l.count;h++){const f=l.getY(h)/i+.5;c.push(...e.clone().lerp(t,a.charTop?oe.smoothstep(f,.4,.9):1-oe.smoothstep(Math.abs(f-.5),.1,.45)).toArray())}r.setAttribute("color",new P(c,3)),a(r),n.push(r)};for(let i=0;i<6;i++){const o=i/6*Math.PI*2+.2,a=r=>{r.translate(0,.55,0),r.rotateX(.52),r.rotateY(o),r.translate(Math.sin(o)*.12,0,Math.cos(o)*.12)};a.charTop=!0,s(1.3,.07+i%3*.012,a)}for(let i=0;i<2;i++)s(1.6,.09,o=>{o.rotateZ(Math.PI/2),o.rotateY(i*Math.PI/2+.4),o.translate(0,.09,0)});return ye(n.map(i=>i.toNonIndexed()))}class sa{constructor(e,t){this.game=e,this.lights=t,this.time=0,this.list=[],this.woodMat=new Ce({vertexColors:!0,roughness:.95,metalness:0}),this.coalMat=new Ce({color:1840144,roughness:1,metalness:0,emissive:16734740,emissiveIntensity:1.5}),this.geo={flame:Js(),smoke:ea(),wood:ta(),coal:new Qt(.62,18).rotateX(-Math.PI/2)};const s=new Float32Array(90).map((i,o)=>o*1.618);this.geo.sparks=new Q,this.geo.sparks.setAttribute("position",new P(new Float32Array(90*3),3)),this.geo.sparks.setAttribute("seed",new P(s,1))}add({x:e,y:t,size:s=1,strength:i=1,logs:o=!0,priority:a=2}={}){const r=this.game.grid,c=(r.groundAt??r.heightAt).call(r,e,t),l=new Ae;l.name="fire",l.position.set(e,c,-t);const h={time:{value:0},size:{value:s},strength:{value:i},glow:{value:1.1},pxScale:{value:800},wind:{value:us/.6},windDir:{value:new M(...ds)},ambient:{value:new D(.5,.5,.5)},fireCol:{value:new D(1,.45,.15)}},f=(v,y,b)=>new re({uniforms:h,vertexShader:v,fragmentShader:y,transparent:!0,depthWrite:!1,toneMapped:!1,...b}),d=(v,y)=>(v.frustumCulled=!1,v.renderOrder=y,l.add(v),v);if(o){const v=d(new te(this.geo.wood,this.woodMat),0);v.scale.setScalar(s),v.castShadow=!0,v.frustumCulled=!0;const y=d(new te(this.geo.coal,this.coalMat.clone()),0);y.scale.setScalar(s),y.position.y=.03,y.frustumCulled=!0}d(new te(this.geo.smoke,f(Xs,Zs,{blending:Yt})),2),d(new te(this.geo.flame,f(Vs,Ks,{blending:ne})),3),d(new Ve(this.geo.sparks,f(Qs,Ys,{blending:ne})),3),this.game.scene.add(l);const m=this.lights?.request({pos:[e,c+1.9*s,-t],colour:16747068,intensity:lt*s*i,range:16*s,priority:a}),x={group:l,light:m,uniforms:h,seed:this.list.length*3.1,get strength(){return h.strength.value},set strength(v){h.strength.value=Math.max(0,Math.min(1,v))},remove:()=>{this.game.scene.remove(l);for(const v of l.children)v.material!==this.woodMat&&v.material.dispose();m?.release(),this.list.splice(this.list.indexOf(x),1)}};return this.list.push(x),x}update(e,t,s){this.time+=e;const i=this.game.sky,o=s?s.getDrawingBufferSize(new M).y/(2*Math.tan(oe.degToRad(t.fov)/2)):800;for(const a of this.list){const r=a.uniforms,c=r.strength.value,l=$s(this.time,a.seed);r.time.value=this.time,r.pxScale.value=o,i&&r.ambient.value.copy(i.hemi.color).multiplyScalar(i.hemi.intensity),r.wind.value=mt.strength/.6,a.light&&(a.light.intensity=lt*r.size.value*c*l);const h=a.group.children[1];h?.material?.emissive&&(h.material.emissiveIntensity=(.6+1.4*c)*l)}}}const Te=9.81,Ye=Object.freeze({peony:{stars:150,speed:72,k:1.3,life:2.6,gs:.5,trail:.25,flicker:0},chrysanthemum:{stars:160,speed:76,k:1.2,life:3,gs:.5,trail:1,flicker:0},willow:{stars:120,speed:58,k:1.7,life:5.5,gs:.3,trail:2.4,flicker:0,colour:"gold"},ring:{stars:90,speed:70,k:1.3,life:2.6,gs:.45,trail:.4,flicker:0,ring:!0},palm:{stars:9,speed:62,k:.9,life:3.4,gs:.8,trail:2.8,flicker:0,colour:"gold"},glitter:{stars:150,speed:70,k:1.25,life:3.2,gs:.45,trail:.6,flicker:1,colour:"silver"},salute:{stars:50,speed:95,k:3,life:.35,gs:.2,trail:0,flicker:1,colour:"white"}}),De=Object.freeze({red:[1,.1,.06],green:[.25,1,.25],blue:[.18,.32,1],gold:[1,.55,.16],silver:[.9,.92,1],purple:[.62,.2,1],white:[1,1,1]}),ct=["red","green","blue","gold","silver","purple"];function St(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const aa=(n,e,t,s=Te)=>-s*n/t+(e+s/t)*(1-Math.exp(-t*n))/t,Mt=(n,e,t=Te)=>Math.log((n+t/e)/(t/e))/e;function ia(n,e,t=Te){let s=1,i=1e3;for(let o=0;o<60;o++){const a=(s+i)/2;aa(Mt(a,e,t),a,e,t)<n?s=a:i=a}return(s+i)/2}const ke=.25;function oa({seed:n=704,duration:e=480,rate:t=.55}={}){const s=St(n),i=[],o=e*.88,a=c=>c[Math.floor(s()*c.length)];let r=2;for(;r<e;){const c=r>=o,l=c?r>e-4?"salute":a(["chrysanthemum","chrysanthemum","willow","peony","glitter","palm"]):a(["peony","peony","chrysanthemum","chrysanthemum","willow","ring","palm","glitter"]),f=Ye[l].colour??a(ct),d=s()<.3?a(ct):f,m=110+s()*110,x=ia(m,ke);i.push({t:+r.toFixed(3),type:l,colours:[f,d],height:m,v0:x,rise:Mt(x,ke),x:(s()-.5)*220,z:(s()-.5)*80,tilt:[(s()-.5)*.16,(s()-.5)*.1],size:.75+s()*.5});const v=c?.18+s()*.35:s()<.12?3+s()*3:.6+s()*(2/t);r+=v}return{shells:i,duration:e,finaleAt:o}}function na(n,e=.25){let t=0;for(let s=0;s<n.duration+8;s+=e){let i=0;for(const o of n.shells){const a=Ye[o.type],r=o.t+o.rise;s>=r&&s<=r+a.life*1.3&&(i+=a.stars)}t=Math.max(t,i)}return t}const ve=8e3,ra=[[0,1],[.05,.6],[.1,.4],[.17,.26],[.26,.15]],la=1.6,ca=`
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
  }`,ha=`
  varying vec3 vCol;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    gl_FragColor = vec4(vCol * (1.0 - d * d), 1.0);
  }`;class fa{constructor(e,t){this.game=e,this.lights=t,this.time=0,this.playing=!1,this.show=null,this.flashes=[],this.cursor=0,this.lastEnd=-1;const s=ve;this.arrays={aStart:new Float32Array(s*4),aVel:new Float32Array(s*4),aCol:new Float32Array(s*4),aPhys:new Float32Array(s*4)};const i=this.geometry=new Q;i.setAttribute("position",new Me(new Float32Array(s*3),3));for(const[o,a]of Object.entries(this.arrays))i.setAttribute(o,new Me(a,4).setUsage(Xt));this.uniforms={time:{value:0},bright:{value:7},pxScale:{value:800},starM:{value:la}},this.group=new Ae,this.group.name="fireworks",this.group.visible=!1;for(const[o,a]of ra){const r=new re({uniforms:{...this.uniforms,lag:{value:o},ghost:{value:a}},vertexShader:ca,fragmentShader:ha,transparent:!0,depthWrite:!1,blending:ne,toneMapped:!1}),c=new Ve(i,r);c.frustumCulled=!1,c.renderOrder=4,this.group.add(c)}e.scene.add(this.group),this._dirty=null}defaultBarge(){return{x:-60,y:-500}}start({x:e,y:t,seed:s=704,duration:i=480,at:o=0}={}){const a=e==null?this.defaultBarge():{x:e,y:t},r=this.game.META?.seaLevel??0;this.barge=new A(a.x,r+2,-a.y),this.show=oa({seed:s,duration:i}),this.peak=na(this.show),this.playing=!0,this.seek(o)}stop(){this.playing=!1}seek(e){for(const t of Object.values(this.arrays))t.fill(0);this._markAll(),this.cursor=0;for(const t of this.flashes)t.light.release();for(this.flashes=[],this.next=0,this.pending=[],this.lastEnd=-1,this.time=Math.max(0,e-8);this.next<this.show.shells.length&&this.show.shells[this.next].t<this.time-6;)this.next++;for(this.quiet=!0;this.time<e;)this._step(Math.min(1/30,e-this.time));this.quiet=!1}_markAll(){this._dirty=[0,ve]}_mark(e){this._dirty?(this._dirty[0]=Math.min(this._dirty[0],e),this._dirty[1]=Math.max(this._dirty[1],e+1)):this._dirty=[e,e+1]}_write(e,t,s,i,o,a,r,c,l){const h=this.cursor;this.cursor=(this.cursor+1)%ve,this.cursor===0&&this._markAll();const f=this.arrays,d=h*4;f.aStart.set([e.x,e.y,e.z,e.t],d),f.aVel.set([t.x,t.y,t.z,s],d),f.aCol.set([i[0],i[1],i[2],o],d),f.aPhys.set([a,r,c,l],d),this._mark(h),this.lastEnd=Math.max(this.lastEnd,e.t+s+.3*2.8)}_emit(e,t,s,i){this.quiet||typeof dispatchEvent!="function"||typeof CustomEvent!="function"||dispatchEvent(new CustomEvent("ts:firework",{detail:{kind:e,type:t,pos:s.toArray(),size:i}}))}_launch(e,t){const s=this.barge.clone().add(new A(e.x,0,e.z)),o=new A(e.tilt[0],1,e.tilt[1]).normalize().multiplyScalar(e.v0);this._write({x:s.x,y:s.y,z:s.z,t:e.t},o,e.rise,De.gold,2,ke,1,1.6,t*.37);const a=ke,r=new A(0,-Te,0),c=1-Math.exp(-a*e.rise),l=s.clone().addScaledVector(r,e.rise/a).addScaledVector(o.clone().addScaledVector(r,-1/a),c/a),h=o.clone().addScaledVector(r,-1/a).multiplyScalar(Math.exp(-a*e.rise)).addScaledVector(r,1/a);this.pending.push({s:e,idx:t,t:e.t+e.rise,pos:l,drift:h}),this._emit("launch",e.type,s,e.size)}_burst({s:e,idx:t,t:s,pos:i,drift:o}){const a=Ye[e.type],r=St(t*7919+13),c=a.stars,l=a.speed*Math.sqrt(e.size);let h=null;a.ring&&(h=new A(r()-.5,r()*.6+.2,r()-.5).normalize());const f=new A,d=new A,m=new A;h&&(d.set(1,0,0).cross(h).normalize(),m.crossVectors(h,d));for(let x=0;x<c;x++){if(h){const b=x/c*Math.PI*2+r()*.05;f.copy(d).multiplyScalar(Math.cos(b)).addScaledVector(m,Math.sin(b))}else{const b=1-2*(x+.5)/c,S=Math.sqrt(1-b*b),g=x*2.39996+r()*.2;f.set(Math.cos(g)*S,b,Math.sin(g)*S)}const v=f.clone().multiplyScalar(l*(.9+r()*.2)).addScaledVector(o,.3),y=De[x%2?e.colours[1]:e.colours[0]];this._write({x:i.x,y:i.y,z:i.z,t:s},v,a.life*(.85+r()*.3),y,a.flicker,a.k,a.gs,a.trail,x*.71+t)}if(this.lights&&this.flashes.length<2&&!this.quiet){const x=De[e.colours[0]],v=this.lights.request({pos:i,colour:new D(...x).lerp(new D(1,1,1),.5),intensity:0,range:900,priority:1});this.flashes.push({light:v,t0:s,peak:(e.type==="salute"?9e5:4e5)*e.size})}this._emit("burst",e.type,i,e.size)}_step(e){this.time+=e;const t=this.show.shells;for(;this.next<t.length&&t[this.next].t<=this.time;)this._launch(t[this.next],this.next),this.next++;for(let s=this.pending.length-1;s>=0;s--)this.pending[s].t<=this.time&&(this._burst(this.pending[s]),this.pending.splice(s,1));for(let s=this.flashes.length-1;s>=0;s--){const i=this.flashes[s],o=this.time-i.t0;o>.6?(i.light.release(),this.flashes.splice(s,1)):i.light.intensity=i.peak*Math.exp(-o*7)}}update(e,t,s){if(this.show&&(this.playing&&this._step(e),this.playing&&this.next>=this.show.shells.length&&!this.pending.length&&this.time>this.lastEnd&&(this.playing=!1),this.uniforms.time.value=this.time,s&&t&&(this.uniforms.pxScale.value=s.getDrawingBufferSize(new M).y/(2*Math.tan(oe.degToRad(t.fov)/2))),this.group.visible=this.time<=this.lastEnd,this._dirty)){const[i,o]=this._dirty;for(const a of Object.keys(this.arrays)){const r=this.geometry.attributes[a];r.updateRanges.length>8?(r.clearUpdateRanges(),r.addUpdateRange(0,ve*4)):r.addUpdateRange(i*4,(o-i)*4),r.needsUpdate=!0}this._dirty=null}}}const da=1e3/60,ht=18.2,ua=17.5,pa=1e3/30,ga=400,ma=.35,va=.1,wa=800,xa=2500,ya=.05,ba=4e3,ft=3e3,Sa=3e4,Ma=3e5,dt=.08,ka=250,ee=(n,e,t)=>Math.min(t,Math.max(e,n));class Aa{constructor({min:e=.5,max:t=1,start:s}={}){this.min=e,this.max=t,this.scale=ee(s??t,e,t),this.ema=0,this.time=0,this.slowFor=0,this.fastFor=0,this.goal=null,this.settleUntil=0,this.lastDrop=-1/0,this.lastRaise=-1/0,this.raisedFrom=null,this.ceiling=1/0,this.ceilingUntil=-1/0,this.fails=0,this.cpu=0,this.cpuBound=!1,this.locked=null,this.limited=!1}setRange(e,t){this.min=e,this.max=t,this.scale=ee(this.scale,e,t),this.goal=null}lock(e){this.locked=e==null?null:ee(e,.25,1)}get value(){return this.locked??this.scale}sample(e,t=null){if(!(e>0)||e>ka)return this.value;const s=this.time+=e,i=this.ema=this.ema?this.ema+(e-this.ema)*dt:e;if(t!=null&&t>=0&&(this.cpu=this.cpu?this.cpu+(t-this.cpu)*dt:t),this.cpuBound=this.cpu>ht,this.locked!=null)return this.locked;this.slowFor=i>ht?this.slowFor+e:0,this.fastFor=i<ua?this.fastFor+e:0;const o=this.min,a=Math.min(this.max,s<this.ceilingUntil?this.ceiling:1/0);return this.goal!=null?(this.scale=Math.max(this.goal,this.scale-ma*e/1e3),this.scale<=this.goal+1e-9&&(this.goal=null,this.settleUntil=s+wa,this.slowFor=0),this.lastDrop=s):this.slowFor>ga&&s>this.settleUntil&&this.scale>o+1e-9&&!this.cpuBound?(s-this.lastRaise<ft&&this.raisedFrom!=null?(this.goal=Math.max(o,this.raisedFrom),this.ceiling=this.raisedFrom,this.ceilingUntil=s+Math.min(Ma,Sa*2**this.fails++),this.raisedFrom=null):this.goal=ee(Math.max(this.scale*Math.sqrt(da/i)*.97,this.scale-va),o,this.max),this.lastDrop=s):this.fastFor>xa&&s-this.lastDrop>ba&&this.scale<a-1e-9&&(this.raisedFrom=this.scale,this.scale=Math.min(a,this.scale+ya),this.lastRaise=s,this.fastFor=0),this.raisedFrom!=null&&s-this.lastRaise>ft&&(this.raisedFrom=null,this.fails=0),this.scale=Math.round(ee(this.scale,o,this.max)*1e3)/1e3,this.limited=this.scale<=this.min+1e-6&&i>pa,this.scale}}const ae=40,Ge=280,We=.8,_a=120,ie=Object.freeze({off:Object.freeze({maps:0}),low:Object.freeze({maps:1,size:2048,end:_a}),high:Object.freeze({maps:2,size:2048,near:ae,far:Ge})});function Ta(n,e,t,s){const i=Math.tan(n*Math.PI/360),o=(t*i)**2*(1+e*e),a=(s*i)**2*(1+e*e);let r=(s*s-t*t+a-o)/(2*(s-t));r=Math.min(s,Math.max(t,r));const c=Math.sqrt(Math.max((r-t)**2+o,(s-r)**2+a));return{dist:r,radius:c}}const Pe=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],ut=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Be=n=>{const e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]};function Ea(n){const e=Be(n);let t=ut([0,1,0],e);return Math.hypot(...t)<1e-6&&(t=[1,0,0]),t=Be(t),{x:t,y:ut(e,t),z:e}}function Ie(n,e,t,s,i,o,a,r){const c=Ta(s,i,o,a),l=Math.ceil(c.radius+1),h=2*l/r,f=Be(e),d=[n[0]+f[0]*c.dist,n[1]+f[1]*c.dist,n[2]+f[2]*c.dist],m=Ea(t),x=Math.round(Pe(d,m.x)/h)*h,v=Math.round(Pe(d,m.y)/h)*h,y=Pe(d,m.z);return{centre:[0,1,2].map(S=>m.x[S]*x+m.y[S]*v+m.z[S]*y),half:l,texel:h}}function Fa(n,e,t,s,i,o){const a=ie[n]??ie.high;return a.maps===0?[]:a.maps===1?[Ie(e,t,s,i,o,.5,a.end,a.size)]:[Ie(e,t,s,i,o,.5,a.near,a.size),Ie(e,t,s,i,o,a.near*We,a.far,a.size)]}const Ra="#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )",He="#pragma unroll_loop_end",Oa=`#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

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
		if ( lookDepth < ${ae.toFixed(1)} ) lookNear = getShadow( directionalShadowMap[ 0 ], s0.shadowMapSize, s0.shadowIntensity, s0.shadowBias, s0.shadowRadius, vDirectionalShadowCoord[ 0 ] );
		if ( lookDepth > ${(ae*We).toFixed(1)} ) lookFar = getShadow( directionalShadowMap[ 1 ], s1.shadowMapSize, s1.shadowIntensity, s1.shadowBias, s1.shadowRadius, vDirectionalShadowCoord[ 1 ] );
	}
	float lookSun = mix( lookNear, lookFar, smoothstep( ${(ae*We).toFixed(1)}, ${ae.toFixed(1)}, lookDepth ) );
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
	${He}`;function Na(){const n=it.lights_fragment_begin;if(n.includes("COUSINS LOOK"))return!1;const e=n.indexOf(Ra),t=n.indexOf(He,e);if(e<0||t<0||!n.slice(e,t).includes("getShadow( directionalShadowMap[ i ]"))throw new Error("look/Shadows: three's lights_fragment_begin is not r169's; the cascade patch needs a look");let s=n.slice(0,e)+Oa+n.slice(t+He.length);const i="RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",o=s.split(i).length-1;if(o<3)throw new Error(`look/Shadows: expected three's 3 RE_Direct calls, found ${o}`);return s=s.split(i).join(`#ifndef LOOK_NO_SKIP
		if ( directLight.color != vec3( 0.0 ) )
		#endif
		${i}`),it.lights_fragment_begin=s,!0}function Da(n){if(!n)return!1;const e=Jt.depth,t="float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;";if(e.fragmentShader.includes("COUSINS LOOK"))return!1;if(!e.fragmentShader.includes(t))throw new Error("look/Shadows: three's depth fragment is not r169's; the reversed-depth patch needs a look");return e.fragmentShader=e.fragmentShader.replace(t,`// COUSINS LOOK (LK5b): the standard depth, under reversed depth too
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = 1.0 - vHighPrecisionZW[0] / vHighPrecisionZW[1];
	#else
		${t}
	#endif`),!0}class Pa{constructor(e){this.game=e,this.sun=e.sky.sun,this.renderer=e.renderer,Na(),Da(e.renderer.capabilities?.reverseDepthBuffer);const t=this.twin=new Zt(16777215,0);t.name="sun:far-cascade",t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.bias=-4e-4,t.shadow.normalBias=.6,e.scene.add(t,t.target),this.level="high",this.fits=[],this.farEvery=3,this._farKey="",this._frame=0,this.cullCasters=!0,this._v=new A,this._d=new A,this.apply()}setLevel(e){!ie[e]||e===this.level||(this.level=e,this.apply())}apply(){const e=ie[this.level],t=this.renderer,s=this.sun,i=this.twin,o=e.maps>0,a=e.maps===2,r=t.shadowMap.enabled!==o||i.castShadow!==a;t.shadowMap.enabled=o,s.castShadow=!0,i.castShadow=a,i.visible=a,e.size&&s.shadow.mapSize.x!==e.size&&(s.shadow.mapSize.set(e.size,e.size),s.shadow.map?.dispose(),s.shadow.map=null),s.shadow.normalBias=a?.04:.3,s.shadow.bias=a?-2e-4:-4e-4,r&&this.game.scene.traverse(c=>{const l=c.material;if(l)for(const h of Array.isArray(l)?l:[l])h.needsUpdate=!0})}update(e){const t=ie[this.level];if(!t.maps)return;const i=this.game.sky.lightDir(this._v),o=e.getWorldDirection(this._d),a=e.position;if(this.fits=Fa(this.level,[a.x,a.y,a.z],[o.x,o.y,o.z],[i.x,i.y,i.z],e.fov,e.aspect),(t.maps===2?[this.sun,this.twin]:[this.sun]).forEach((h,f)=>{const d=this.fits[f],m=h.shadow.camera;h.target.position.set(...d.centre);const x=f===0?400:800;h.position.set(d.centre[0]+i.x*x,d.centre[1]+i.y*x,d.centre[2]+i.z*x),(m.right!==d.half||m.far!==x+d.half)&&(Object.assign(m,{left:-d.half,right:d.half,top:d.half,bottom:-d.half,near:1,far:x+d.half}),m.updateProjectionMatrix()),h.target.updateMatrixWorld(),h.updateMatrixWorld()}),t.maps===2){this.twin.color.copy(this.sun.color);const h=this.fits[1],f=`${h.centre.map(m=>m.toFixed(2)).join()}|${i.x.toFixed(3)},${i.y.toFixed(3)}`,d=this.farEvery<=1||f!==this._farKey||this._frame++%this.farEvery===0;this._farKey=f,this.twin.shadow.autoUpdate=!1,this.twin.shadow.needsUpdate=d}else this.twin.shadow.autoUpdate=!0;const c=this.sun.shadow.camera,l=this.fits[0];if(this.cullCasters&&t.maps===2){const h=Math.hypot(l.centre[0]-a.x,l.centre[1]-a.y,l.centre[2]-a.z),f=Math.max(.05,i.y),d=Math.min(150,28*Math.sqrt(1-f*f)/f);c.userData.reach=h+l.half*Math.SQRT2+d}else c.userData.reach=0}}const je=n=>Math.max(0,Math.min(1,n)),we=(n,e,t)=>n+(e-n)*t,Ia=.3;function La(n=32,e=.5){const t=new Uint8Array(n*n*4),s=(n-1)/2;for(let o=0;o<n;o++)for(let a=0;a<n;a++){const r=Math.hypot(a-s,o-s)/s,c=je(1-(r-e)/(1-e)),l=(o*n+a)*4;t[l]=255,t[l+1]=255,t[l+2]=255,t[l+3]=Math.round(255*c*c)}const i=new gt(t,n,n,es);return i.needsUpdate=!0,i}const be=Object.freeze({clear:{kind:null,fog:null,wetness:0,temp:0,grade:{sun:1,ambient:1,hemi:1},wind:[.4,.2]},overcast:{kind:null,wetness:0,temp:-3,fog:{colour:12174025,near:40,far:320},grade:{sun:.12,ambient:1.7,hemi:1.45},wind:[1.2,.5]},drizzle:{kind:"rain",count:1400,box:[15,13,15],fall:7,length:.16,colour:13162208,opacity:.3,wind:[1.6,.7],wetness:.45,temp:-4,fog:{colour:11713732,near:28,far:220},grade:{sun:.09,ambient:1.72,hemi:1.46}},rain:{kind:"rain",count:3200,box:[16,14,16],fall:12,length:.3,colour:12767966,opacity:.4,wind:[2.6,1.1],wetness:.85,temp:-5,fog:{colour:10793145,near:20,far:150},grade:{sun:.06,ambient:1.78,hemi:1.52}},heavyRain:{kind:"rain",count:7e3,box:[17,15,17],fall:17,length:.52,colour:12372951,opacity:.48,wind:[4.2,1.8],wetness:1,temp:-6,fog:{colour:9740715,near:10,far:82},grade:{sun:.04,ambient:1.74,hemi:1.5}},storm:{kind:"rain",count:8200,box:[18,16,18],fall:19,length:.62,colour:11978452,opacity:.5,wind:[7.5,3],wetness:1,temp:-7,fog:{colour:8227477,near:8,far:64},grade:{sun:.03,ambient:1.62,hemi:1.4},flash:{every:7.5,chance:.55}},duststorm:{kind:"rain",count:5200,box:[22,13,22],fall:.6,length:.5,colour:10254922,opacity:.3,wind:[13,4],wetness:0,temp:6,fog:{colour:12557678,near:1,far:40},grade:{sun:.4,ambient:1.3,hemi:.85}},snow:{kind:"points",count:2600,box:[14,12,14],fall:1.1,size:.07,colour:16054523,opacity:.85,wind:[1.1,.6],drift:.55,wetness:.3,temp:-18,fog:{colour:14148330,near:18,far:110},grade:{sun:.1,ambient:1.7,hemi:1.8}},blizzard:{kind:"points",count:6400,box:[15,13,15],fall:2.4,size:.06,colour:16251644,opacity:.9,wind:[11,4.5],drift:1.4,wetness:.5,temp:-22,fog:{colour:14542572,near:3,far:34},grade:{sun:.05,ambient:1.72,hemi:1.55}},fog:{kind:null,wetness:.35,temp:-6,fog:{colour:12897490,near:3,far:38},grade:{sun:.08,ambient:1.6,hemi:1.38},wind:[.5,.2]},seaFog:{kind:"points",count:900,box:[40,7,40],fall:.05,size:1.8,colour:14673900,opacity:.1,wind:[2,.8],drift:.25,wetness:.4,temp:-4,fog:{colour:13621470,near:2,far:30},grade:{sun:.1,ambient:1.62,hemi:1.4}},ash:{kind:"points",count:3e3,box:[16,13,16],fall:.9,size:.1,colour:7038304,opacity:.55,wind:[2.2,1],drift:.9,wetness:0,temp:2,fog:{colour:9077888,near:6,far:60},grade:{sun:.2,ambient:1.28,hemi:.95}}});Object.freeze(Object.keys(be));const za=1/22,Ca=1/95;function Ua(n={}){const e=n.scene??null,t=n.lights??{},s=n.fade??4,i=n.groundY??0,o=n.baseTemp??22,a={sun:t.sun?.intensity??null,ambient:t.ambient?.intensity??null,hemi:t.hemi?.intensity??null},r=e?.fog?{colour:e.fog.color.getHex(),near:e.fog.near,far:e.fog.far}:null,c=(w,F)=>({condition:w,...be.clear,...be[w]??{},...F??{}});let l=c(n.preset??"clear",n.override),h=l,f=1,d=0,m=0,x=4,v=l.wetness??0;const y=new A,b=new D,S=new Ae;S.frustumCulled=!1;let g=null,p=null,T=null,u=null;const _=La();function E(w){if(g&&(S.remove(g),g.geometry.dispose(),g.material.dispose(),g=null,p=null,T=null,u=null),!w.kind)return;const F=w.count??2e3,[C,O,Y]=w.box??[30,18,30],U=w.kind==="rain"?2:1;p=new Float32Array(F*U*3),T=new Float32Array(F),u=new Float32Array(F*4);for(let N=0;N<F;N++){const le=(Math.random()-.5)*C,ce=Math.random()*O,he=(Math.random()-.5)*Y;T[N]=Math.random()*Math.PI*2,u[N*4]=Math.sin(T[N]),u[N*4+1]=Math.cos(T[N]),u[N*4+2]=Math.sin(T[N]*1.7),u[N*4+3]=Math.cos(T[N]*1.7);const L=N*U*3;p[L]=le,p[L+1]=ce,p[L+2]=he,U===2&&(p[L+3]=le,p[L+4]=ce-(w.length??.3),p[L+5]=he)}const G=new Q;G.setAttribute("position",new Me(p,3)),G.boundingSphere=new ts(new A,1e6);const X=w.kind==="rain"?new ss({color:w.colour,transparent:!0,opacity:w.opacity??.4,depthWrite:!1,fog:!0}):new as({color:w.colour,size:w.size??.1,map:_,transparent:!0,opacity:w.opacity??.4,depthWrite:!1,sizeAttenuation:!0,fog:!0});g=w.kind==="rain"?new is(G,X):new Ve(G,X),g.frustumCulled=!1,g.renderOrder=10,g.castShadow=!1,g.receiveShadow=!1,S.add(g)}E(l);const k=w=>we(h.grade?.[w]??1,l.grade?.[w]??1,f);function R(){if(t.sun&&a.sun!=null&&(t.sun.intensity=a.sun*k("sun")),t.ambient&&a.ambient!=null&&(t.ambient.intensity=a.ambient*k("ambient")),t.hemi&&a.hemi!=null&&(t.hemi.intensity=a.hemi*k("hemi")),!e)return;const w=h.fog??r,F=l.fog??r;if(!w&&!F)return;const C=w??F,O=F??w;e.fog||(e.fog=new os(O.colour,O.near,O.far)),e.fog.near=we(C.near,O.near,f),e.fog.far=we(C.far,O.far,f),e.fog.color.setHex(C.colour).lerp(b.setHex(O.colour),f),m>0&&(e.fog.color.lerp(b.setHex(16777215),.75*m),t.ambient&&a.ambient!=null&&(t.ambient.intensity*=1+2.2*m))}const I={group:S,get condition(){return l.condition},get kind(){return l.kind??null},get blending(){return f<1},get flash(){return m},get wind(){return y},get wetness(){return v},get record(){return{condition:l.condition,wetness:v,temp:o+we(h.temp??0,l.temp??0,f),wind:Math.hypot(...l.wind??[0,0]),flash:m}},set(w,F){if(!be[w])throw new Error(`weather: no preset "${w}"`);return h={...l},l=c(w,F),f=0,E(l),I},update(w,F){d+=w,f=s>0?je(f+w/s):1;const C=l.wetness??0;v+=(C-v)*je(w*(C>v?za:Ca)),l.flash&&(x-=w,x<=0&&(x=l.flash.every*(.45+Math.random()*1.3),Math.random()<(l.flash.chance??.6)&&(m=1))),m>0&&(m=Math.max(0,m-w*6.5));const O=l.wind??[0,0];if(y.set(O[0],0,O[1]),R(),!g||!p)return I;const[Y,U,G]=l.box??[30,18,30];F&&S.position.set(F.position.x,Math.max(i,F.position.y-U*Ia),F.position.z);const X=l.kind==="rain"?2:1,N=T.length,le=(l.fall??8)*w,ce=O[0]*w,he=O[1]*w,L=l.drift??0,Ee=l.length??.3,Xe=O[0],Ze=-(l.fall??8),Je=O[1],Fe=Math.hypot(Xe,Ze,Je)||1,kt=Xe/Fe*Ee,At=Ze/Fe*Ee,_t=Je/Fe*Ee,et=Y/2,tt=G/2,Tt=Math.sin(d*.8),Et=Math.cos(d*.8),Ft=Math.cos(d*.6),Rt=-Math.sin(d*.6),st=L*w;for(let fe=0;fe<N;fe++){const z=fe*X*3;let j=p[z]+ce,$=p[z+1]-le,q=p[z+2]+he;if(L){const de=fe*4;j+=(Tt*u[de+1]+Et*u[de])*st,q+=(Ft*u[de+3]+Rt*u[de+2])*st}$<0?$+=U:$>U&&($-=U),j>et?j-=Y:j<-et&&(j+=Y),q>tt?q-=G:q<-tt&&(q+=G),p[z]=j,p[z+1]=$,p[z+2]=q,X===2&&(p[z+3]=j-kt,p[z+4]=$-At,p[z+5]=q-_t)}return g.geometry.attributes.position.needsUpdate=!0,I},setVisible(w){return S.visible=!!w,I},dispose(){g&&(g.geometry.dispose(),g.material.dispose(),g=null),_.dispose()}};return I}class Ga{constructor(e,t){this.game=e,this.lights=t,this.state=new ps("clear"),this.drops=Ua({preset:"clear",fade:6}),e.scene.add(this.drops.group),this.dropsName="clear",this.fog=null,this.strike=null}get name(){return this.state.name}get now(){return this.state.now}get names(){return gs}set(e,{over:t=20}={}){return this.state.set(e,{over:t}),this.emit({kind:"change",name:e,over:t}),this}emit(e){typeof dispatchEvent=="function"&&typeof CustomEvent=="function"&&dispatchEvent(new CustomEvent("ts:weather",{detail:e}))}update(e,t){const s=this.state.step(e),i=this.game.sky,o=this.state.t<1||s.flash>0||s.flashes>0;(o||this._set!==this.state.name)&&(i.setWeather(s),this._set=o?null:this.state.name);const a=this.game.scene.fog;a&&((!this.fog||a.near!==this.fog.setNear||a.far!==this.fog.setFar)&&(this.fog={near:a.near,far:a.far}),a.near=Math.max(2,this.fog.near*s.fog),a.far=Math.max(60,this.fog.far*Math.max(s.fog,.03)),this.fog.setNear=a.near,this.fog.setFar=a.far),mt.strength=s.wind;const r=s.drops??"clear";if(r!==this.dropsName&&(this.drops.set(r),this.dropsName=r),this.drops.update(e,t),this.state.strike){const c=this.state.strikeDist*7.3%(Math.PI*2),l=Math.min(this.state.strikeDist,1500),h=t.position;this.strike?.release(),this.strike=this.lights?.request({pos:[h.x+Math.cos(c)*l,600,h.z+Math.sin(c)*l],colour:13621503,intensity:0,range:0,priority:3})??null,this.emit({kind:"strike",dist:this.state.strikeDist})}this.strike&&(this.strike.intensity=4e6*s.flash,s.flash<=0&&(this.strike.release(),this.strike=null))}}const Wa=n=>Math.min(1,Math.max(0,n)),qe=(n,e,t)=>{const s=Wa((t-n)/(e-n));return s*s*(3-2*s)};function Ba(n,e=0){const t=n-e*.14;return 1-qe(-.03,.035,t)}function Ha(n,e){const t=(n%24+24)%24,s=t<12?t+24:t,i=.42*(1-qe(22.5,25.5,s)),o=.08,a=.14*Math.exp(-(((s-30)/.8)**2));return e*Math.max(o,i+o*qe(22.5,25.5,s)+a)}function ja(n,e){let t=Math.imul(n|0,374761393)+Math.imul(e|0,668265263)>>>0;return t=Math.imul(t^t>>>13,1274126177)>>>0,((t^t>>>16)>>>0)/4294967296}const $e=Object.freeze({cobra:Object.freeze({height:8.2,reach:24,candela:420,colour:16763274,every:70,pool:12}),acorn:Object.freeze({height:3.9,reach:16,candela:110,colour:16766880,every:26,pool:8}),post:Object.freeze({height:2.4,reach:10,candela:24,colour:16765070,every:16,pool:5})}),qa=new Set(["residential","tertiary","primary","unclassified","living_street","primary_link"]),xe=Object.freeze({x:0,y:0,r:420,names:["Moore","Howe","Bay"]});function $a(n=[],e=[],t=()=>!0){const s=[],i=(a,r,c)=>{let l=r*.5;for(let h=1;h<a.length;h++){const[f,d]=a[h-1],[m,x]=a[h],v=Math.hypot(m-f,x-d);if(v<1e-6)continue;const y=(m-f)/v,b=(x-d)/v;let S=l;for(;S<=v;)c(f+y*S,d+b*S,y,b),S+=r;l=S-v}};let o=0;for(const a of n){if(a.b)continue;const r=a.n&&Math.hypot(a.p[0][0]-xe.x,a.p[0][1]-xe.y)<xe.r&&xe.names.some(d=>a.n.includes(d)),c=a.k==="footway"&&/boardwalk/i.test(a.n??""),l=r?"acorn":c?"post":qa.has(a.k)?"cobra":null;if(!l)continue;const h=$e[l],f=(a.w??6)/2+(l==="cobra"?1.6:.9);i(a.p,h.every,(d,m,x,v)=>{const y=l==="acorn"?[1,-1]:[ja(o,17)<.5?1:-1];for(const b of y){const S=d-v*f*b,g=m+x*f*b;t(S,g)&&s.push({x:+S.toFixed(2),y:+g.toFixed(2),dx:+(v*b).toFixed(4),dy:+(-x*b).toFixed(4),kind:l,side:b})}o++})}for(const a of e){if(a.k!=="timber"||a.p.length<2)continue;let r=0;for(let c=1;c<a.p.length;c++)r+=Math.hypot(a.p[c][0]-a.p[c-1][0],a.p[c][1]-a.p[c-1][1]);r<40||i(a.p,$e.post.every,(c,l,h,f)=>{const d=(a.w??2.5)/2-.15;s.push({x:+(c-f*d).toFixed(2),y:+(l+h*d).toFixed(2),dx:+f.toFixed(4),dy:+(-h).toFixed(4),kind:"post",side:1,pier:!0})})}return s}const Le={cobra:.4,acorn:.32,post:.24,porch:.28,car:.45},Va=7,Ka=48,H=(n,e,t)=>new A(n,e,t);function B(n,e){const t=new D(e),s=n.attributes.position.count,i=new Float32Array(s*3);for(let o=0;o<s;o++)i.set([t.r,t.g,t.b],o*3);return n.setAttribute("color",new Me(i,3)),n.index?n.toNonIndexed():n}function Qa(){const n=ye([B(new se(.11,.15,8.4,7).translate(0,4.2,0),4932153),B(new se(.03,.03,1.9,5).rotateZ(Math.PI/2).translate(.95,7.8,0),7040882),B(new Z(.62,.16,.3).translate(1.95,7.75,0),7040882)]),e=ye([B(new se(.07,.12,3.5,8).translate(0,1.75,0),1842978),B(new se(.18,.14,.18,8).translate(0,3.55,0),1842978),B(new hs(.12,.22,8).translate(0,4.2,0),1842978)]),t=ye([B(new Z(.14,2.3,.14).translate(0,1.15,0),6969928),B(new Z(.22,.08,.22).translate(0,2.42,0),2762274)]);return{cobra:{geo:n,lens:H(1.95,7.66,0),lensGeo:new Z(.5,.02,.24)},acorn:{geo:e,lens:H(0,3.9,0),lensGeo:new fs(.21,12,8)},post:{geo:t,lens:H(0,2.3,0),lensGeo:new Z(.16,.16,.16)}}}const Ya=`
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
  }`,Xa=`
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
  }`;class Za{constructor(e,t){this.game=e,this.lights=t,this.group=new Ae,this.group.name="night",this.on=0;const{grid:s,features:i}=e,o=(g,p)=>(s.groundAt??s.heightAt).call(s,g,p),a=(g,p)=>{const T=s.surfaceName?.(g,p)??"grass";return!/sea|water|marsh|pool|building/.test(T)};this.lamps=$a(i?.roads??[],i?.piers??[],a);const r=Qa(),c=new ue,l=new rs,h=H(0,1,0),f=H(1,1,1),d=new Ce({vertexColors:!0,roughness:.85,metalness:0});this.lensMat=new ns({color:16777215,toneMapped:!0}),this.lensMat.color.setScalar(.25);const m=[],x=[],v={};for(const g of this.lamps)(v[g.kind]??=[]).push(g);for(const[g,p]of Object.entries(v)){const T=r[g],u=$e[g],_=new Re(T.geo,d,p.length);_.name=`night:${g}`,_.castShadow=g!=="post";const E=new Re(T.lensGeo,this.lensMat,p.length);E.name=`night:${g}:lens`,p.forEach((k,R)=>{const I=o(k.x,k.y);l.setFromAxisAngle(h,Math.atan2(k.dy,k.dx)),c.compose(H(k.x,I,-k.y),l,f),_.setMatrixAt(R,c);const w=T.lens.clone().applyQuaternion(l).add(H(k.x,I,-k.y));c.compose(w,l,f),E.setMatrixAt(R,c),m.push({x:w.x,z:w.z,y:I+.04,r:u.pool,gain:Le[g]}),x.push({pos:[w.x,w.y-.25,w.z],colour:u.colour,intensity:u.candela,range:u.reach,priority:0})}),_.instanceMatrix.needsUpdate=E.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),E.computeBoundingSphere(),this.group.add(_,E)}this.statics=t?.requestStatic(x,"street")??[],this.poolU={colour:{value:new D(16763274)},on:{value:0},camPos:{value:new A}};const y=new re({uniforms:this.poolU,vertexShader:Ya,fragmentShader:Xa,transparent:!0,depthWrite:!1,blending:ne,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,toneMapped:!1}),b=new ls(2,2).rotateX(-Math.PI/2);this.pools=this.makePools(b,y,m,256),this.porch=[],this.carU={...this.poolU,colour:{value:new D(16773848)}};const S=y.clone();S.uniforms=this.carU,this.carPools=this.makePools(b,S,[],Ka),this.cars=[],e.scene.add(this.group),this.windows=this.wrapFacades(e.buildings?.group?.children?.[0]?.material),this.stats={lamps:this.lamps.length,kinds:Object.fromEntries(Object.entries(v).map(([g,p])=>[g,p.length]))}}makePools(e,t,s,i){const o=s.length+i,a=new Re(e,t,o);a.name="night:pools",a.geometry=e.clone();const r=new Float32Array(o);a.geometry.setAttribute("gain",new cs(r,1));const c=new ue;return s.forEach((l,h)=>{c.makeScale(l.r,1,l.r).setPosition(l.x,l.y,l.z),a.setMatrixAt(h,c),r[h]=l.gain}),a.count=s.length,a.frustumCulled=!1,a.renderOrder=1,this.group.add(a),{mesh:a,gain:r,used:s.length,max:o}}add({pos:e,kind:t="porch",colour:s=16766106,intensity:i=12,range:o=8,radius:a=3.5}){const r=this.pools;if(r.used<r.max){const l=new ue().makeScale(a,1,a).setPosition(e[0],e[1]-2.2,e[2]);r.mesh.setMatrixAt(r.used,l),r.gain[r.used]=Le[t]??.14,r.used++,r.mesh.count=r.used,r.mesh.instanceMatrix.needsUpdate=!0,r.mesh.geometry.attributes.gain.needsUpdate=!0}const[c]=this.lights?.requestStatic([{pos:e,colour:s,intensity:i,range:o,priority:1}],"street")??[];return this.porch.push(c),c}car(e,{front:t=H(0,0,-1),ahead:s=4.5,height:i=.8}={}){const o=this.lights?.request({pos:[0,0,0],colour:16773848,intensity:0,range:22,priority:1}),a={object:e,front:t.clone().normalize(),ahead:s,height:i,light:o,remove:()=>{o?.release(),this.cars.splice(this.cars.indexOf(a),1)}};return this.cars.push(a),a}wrapFacades(e){if(!e||e.userData.lookWindows)return null;const t={lookWinLit:{value:0},lookWinGain:{value:1.4}},s=e.onBeforeCompile,i=e.customProgramCacheKey;return e.onBeforeCompile=(o,a)=>{s?.call(e,o,a),Object.assign(o.uniforms,t),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLookW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLookW = (modelMatrix * vec4(transformed, 1.0)).xyz;`);const r="diffuseColor.rgb = mix(diffuseColor.rgb * fx.rgb, fx.rgb, fx.a);";o.fragmentShader.includes(r)&&(o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
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
}`))},e.customProgramCacheKey=()=>`${i?i.call(e):""}+look-windows`,e.userData.lookWindows=!0,e.needsUpdate=!0,t}update(e,t){const s=this.game.sky,i=s.weather??{},o=this.on=Ba(s.dirWorld[2],i.dark??0);this.poolU.on.value=o,this.poolU.camPos.value.copy(t.position),this.lensMat.color.setScalar(.25+o*Va).multiply(this._warm??=new D(16767400)),this.lights&&(this.lights.levels.street=o),this.windows&&(this.windows.lookWinLit.value=Ha(s.hour,o));const a=this.carPools,r=this._m4??=new ue,c=this._f??=new A,l=this._p??=new A;let h=0;for(const f of this.cars){f.object.updateWorldMatrix(!0,!1),c.copy(f.front).transformDirection(f.object.matrixWorld),f.object.getWorldPosition(l);const d=l.x+c.x*f.ahead,m=l.z+c.z*f.ahead;if(f.light&&(f.light.pos.set(d,l.y+f.height,m),f.light.intensity=40*o),h<a.max){const x=l.y;r.makeRotationY(Math.atan2(c.x,c.z)).scale(this._s??=new A(2.6,1,7)).setPosition(l.x+c.x*(f.ahead+4),x+.05,l.z+c.z*(f.ahead+4)),a.mesh.setMatrixAt(h,r),a.gain[h]=Le.car,h++}}a.mesh.count=h,h&&(a.mesh.instanceMatrix.needsUpdate=!0,a.mesh.geometry.attributes.gain.needsUpdate=!0),this.carU.on.value=o}}const pt=Object.freeze({mobile:Object.freeze({scaleMin:.5,scaleMax:.75,aa:"fxaa",bloom:!1,dof:!1,shadows:"low",ao:!1}),low:Object.freeze({scaleMin:.5,scaleMax:.85,aa:"fxaa",bloom:!1,dof:!1,shadows:"off",ao:!1}),medium:Object.freeze({scaleMin:.6,scaleMax:1,aa:"fxaa",bloom:!0,dof:!0,shadows:"low",ao:!1}),high:Object.freeze({scaleMin:.7,scaleMax:1,aa:"fxaa",bloom:!0,dof:!0,shadows:"high",ao:!1})}),Ja=(n,e)=>n.aa==="auto"?e>=1.5?"fxaa":"msaa":n.aa,ei=n=>pt[n]??pt.high;function ci(n,e=Fs(typeof location>"u"?"":location.search)){const t=new Us(n.renderer,n.sky,e);if(n.renderer.capabilities.reverseDepthBuffer){const a=n.renderer.getContext(),r=a.polygonOffset.bind(a);a.polygonOffset=(c,l)=>r(-c,-l)}t.lights=new qs(n.scene),t.lights.adopt(n.scene),t.shadows=new Pa(n),t.scaler=new Aa;const s=new Set(typeof location>"u"?[]:_e.map(a=>a.key).filter(a=>new URLSearchParams(location.search).has(a)));t.setQuality=a=>{const r=ei(a);t.quality=a,t.scaler.setRange(r.scaleMin,r.scaleMax);const c=n.renderer.getPixelRatio();s.has("aa")||t.set("aa",Ja(r,c)),s.has("bloom")||t.set("bloom",r.bloom),s.has("dof")||t.set("dof",r.dof),s.has("ao")||t.set("ao",r.ao),t.presetShadows=r.shadows,t.options.shadows==="auto"&&t.shadows.setLevel(r.shadows)},s.has("shadows")&&t.set("shadows",t.options.shadows),s.has("scale")&&t.set("scale",t.options.scale);let i=null;try{i=globalThis.localStorage??null}catch{i=null}if(t.setQuality(i?ms(i).quality:"high"),typeof addEventListener=="function"&&addEventListener("ts:settings",a=>t.setQuality(a.detail?.quality)),typeof requestAnimationFrame=="function"){let a=0;const r=c=>{a&&t.scaler.sample(c-a,performance.now()-c),a=c,requestAnimationFrame(r)};requestAnimationFrame(r)}n.sky.attachRenderer?.(n.renderer),t.weather=new Ga(n,t.lights),t.night=new Za(n,t.lights),t.fire=new sa(n,t.lights),t.fireworks=new fa(n,t.lights),t.viewCull=!0;const o=()=>{const a=t.viewCull?n.camera:null;n.plants&&(n.plants.camera=a),n.nature?.draw&&(n.nature.draw.camera=a)};return n.onUpdate?.(a=>{o(),t.weather.update(a,n.camera),t.night.update(a,n.camera),t.fire.update(a,n.camera,n.renderer),t.fireworks.update(a,n.camera,n.renderer)}),t}export{xs as G,li as a,ri as l,ci as m};
