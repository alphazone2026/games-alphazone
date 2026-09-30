import{a as tt,a9 as Re,B as Q,f as N,V as A,a3 as nt,aa as Oe,ab as Fe,e as _,ac as zt,c as Mt,ad as De,ae as ot,af as Ne,ag as Ie,a6 as Pe,ah as Le,ai as ze,aj as Ue,X as Ce,ak as Ge,al as We,am as at,an as Be,C as D,M as Ut,ao as He,G as _t,ap as $t,aq as Ve,p as et,g as St,a8 as je,a1 as qe,z as ie,D as $e,R as Qe,ar as Ye,as as Xe,at as Ke,au as Ze,_ as Je,u as dt,O as ts,A as Ot,Q as es,P as ss,H as is,i as K,w as os,q as as}from"./three.module-BijjCszr.js";import{m as yt}from"./BufferGeometryUtils-BMuxd-XA.js";import{D as ns,w as pe,S as rs}from"./Wind-4THtRkpO.js";import"./Materials-vB9MdW9N.js";import{W as ls,N as cs}from"./weather-DTQz8MlZ.js";import{l as hs}from"./settings-9dmrdRDI.js";const fs=new Re(-1,1,1,-1,0,1);class us extends Q{constructor(){super(),this.setAttribute("position",new N([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new N([0,2,0,0,2,0],2))}}const ds=new us;class ps{constructor(t){this._mesh=new tt(ds,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fs)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const oe={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new A(1/1024,1/512)}},vertexShader:`

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
	`},$=n=>Object.freeze({exposure:1,sat:1,contrast:1,shadow:[1,1,1],highlight:[1,1,1],lift:0,vignette:.22,bloom:.35,threshold:1.6,...n}),G=Object.freeze({night:$({exposure:1.9,sat:.86,contrast:1.04,shadow:[.9,.97,1.14],highlight:[1.04,1,.94],lift:.0035,vignette:.3,bloom:.6,threshold:.9}),twilight:$({exposure:1.35,sat:.95,contrast:1.04,shadow:[.94,.95,1.1],highlight:[1.1,1,.9],lift:.002,vignette:.26,bloom:.45,threshold:1.2}),golden:$({exposure:1.08,sat:1.06,contrast:1.06,shadow:[.95,.97,1.06],highlight:[1.14,1.03,.84],vignette:.24,bloom:.4,threshold:1.5}),morning:$({exposure:1,sat:1.05,contrast:1.08,shadow:[.97,.99,1.04],highlight:[1.04,1.01,.96],vignette:.2,bloom:.22,threshold:1.8}),afternoon:$({exposure:1.1,sat:1.05,contrast:1.04,shadow:[.97,.99,1.04],highlight:[1.09,1.03,.9],vignette:.22,bloom:.25,threshold:1.8})}),gs=$({vignette:0,bloom:.35,threshold:1.6}),vs=n=>Math.min(1,Math.max(0,n)),pt=(n,t,e)=>{const s=vs((e-n)/(t-n));return s*s*(3-2*s)},ae=(n,t,e)=>n+(t-n)*e;function q(n,t,e){const s={};for(const a of Object.keys(n))s[a]=Array.isArray(n[a])?n[a].map((o,i)=>ae(o,t[a][i],e)):ae(n[a],t[a],e);return s}function ms(n,t,e=13.33){const s=pt(10.5,15,n),a=q(G.morning,G.afternoon,s),o=n<e?q(G.golden,G.morning,.35):G.golden;return t>=.2?q(o,a,pt(.2,.35,t)):t>=.03?q(o,o,0):t>=-.04?q(G.twilight,o,pt(-.04,.03,t)):q(G.night,G.twilight,pt(-.12,-.04,t))}const Tt=Object.freeze([{key:"post",label:"Post-processing",kind:"toggle",default:!0,note:"Off draws the world directly, exactly as before the look: no grade, glow, blur or smoothing below."},{key:"grade",label:"Colour grade",kind:"toggle",default:!0,note:"The summer look, graded by the hour. Off leaves the light as the sky gives it."},{key:"bloom",label:"Glow",kind:"toggle",default:!0,note:"The sun, bright water and lamps glow."},{key:"dof",label:"Depth of field",kind:"toggle",default:!0,note:"A soft background in conversations. Costs nothing outside them."},{key:"aa",label:"Anti-aliasing",kind:"choice",default:"fxaa",choices:["fxaa","msaa","off"],note:"fxaa: smooths edges for little. msaa: the cleanest edges, but it more than doubled the frame at the forecourt (91 ms against 42, measured). off: none."},{key:"shadows",label:"Shadows",kind:"choice",default:"auto",choices:["auto","high","low","off"],note:"auto: by the quality setting. high: crisp shadows near you (people, rails, porches) and soft ones far off. low: one soft map. off: none."},{key:"ao",label:"Contact shadows",kind:"toggle",default:!0,note:"Soft darkening where things meet: under eaves, round feet, along walls."},{key:"scale",label:"Render scale",kind:"choice",default:"auto",choices:["auto","1","0.85","0.7","0.5"],note:"auto: the world is drawn smaller when frames run slow, to hold 60 fps, and back up when they recover. A number fixes it."}]),ge=Object.freeze(Object.fromEntries(Tt.map(n=>[n.key,n.default])));function Ct(n,t){const e=Tt.find(s=>s.key===n);if(!e)throw new Error(`look: no option '${n}'`);return e.kind==="toggle"?typeof t=="boolean"?t:e.default:e.choices.includes(t)?t:e.default}function ws(n=""){const t=new URLSearchParams(n),e={...ge};for(const s of Tt){if(!t.has(s.key))continue;const a=t.get(s.key);e[s.key]=Ct(s.key,s.kind==="toggle"?!(a==="0"||a==="off"||a==="false"):a)}return e}const gt=6,ne=32,xs=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Z=(n,t,e={})=>new nt({uniforms:t,vertexShader:xs,fragmentShader:n,depthTest:!1,depthWrite:!1,toneMapped:!1,...e}),ys=`
  precision highp float;
  uniform mat4 modelViewMatrix, projectionMatrix;
  attribute vec3 position; attribute vec2 uv;
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,bs=`
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
  }`,Ms=`
  uniform sampler2D src; uniform vec2 texel;
  varying vec2 vUv;
  vec3 tap(vec2 o) { return texture2D(src, vUv + o * texel).rgb; }
  void main() {
    vec3 c = tap(vec2(-2.0, 0.0)) + tap(vec2(2.0, 0.0)) + tap(vec2(0.0, -2.0)) + tap(vec2(0.0, 2.0))
      + 2.0 * (tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)) + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)));
    gl_FragColor = vec4(c / 12.0, 1.0);
  }`,Ss=`
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
    for (int i = 0; i < ${ne}; i++) {
      float fi = float(i) + 0.5;
      float r = sqrt(fi / ${ne}.0) * maxR;
      float a = fi * 2.39996323;
      vec2 uv = clamp(uv0 + vec2(cos(a), sin(a)) * r * texel, vec2(0.0), uvMax);
      float z = dist(uv), rc = coc(z);
      float reach = z > z0 ? min(rc, r0) : rc;
      float w = smoothstep(r - 1.0, r + 0.5, reach);
      acc += texture2D(tColor, uv).rgb * w; wsum += w;
    }
    gl_FragColor = vec4(acc / wsum, 1.0);
  }`,Ft=.9,As=`
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
    float rUv = ${Ft.toFixed(2)} / (2.0 * tanY * w0);            // the radius, as a fraction of the screen's height
    float a0 = ign(gl_FragCoord.xy) * 6.2832, occ = 0.0;
    for (int i = 0; i < 10; i++) {
      float fi = (float(i) + 0.5) / 10.0;
      float a = a0 + float(i) * 2.39996;
      vec2 o = vec2(cos(a) / aspect, sin(a)) * rUv * sqrt(fi);
      vec2 uv = vUv + o;
      vec3 S = viewAt(uv, dist(uv));
      vec3 v = S - P;
      float d = length(v);
      occ += max(0.0, dot(N, v / max(d, 1e-3)) - 0.15) * smoothstep(${(Ft*2).toFixed(2)}, ${(Ft*.6).toFixed(2)}, d);
    }
    float ao = 1.0 - occ / 10.0 * 1.6;
    ao = mix(ao, 1.0, smoothstep(45.0, 70.0, w0));
    gl_FragColor = vec4(vec3(clamp(ao, 0.0, 1.0)), 1.0);
  }`,_s=`
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
  }`,Ts=`
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
  }`,Es=new Map([[Le,"LINEAR_TONE_MAPPING"],[ze,"REINHARD_TONE_MAPPING"],[Ue,"CINEON_TONE_MAPPING"],[Ce,"ACES_FILMIC_TONE_MAPPING"],[Ge,"AGX_TONE_MAPPING"],[We,"NEUTRAL_TONE_MAPPING"]]),Dt=(n,t,e={})=>new zt(n,t,{type:Pe,depthBuffer:!1,minFilter:Mt,magFilter:Mt,...e});class ks{constructor(t,e,s={}){this.renderer=t,this.sky=e,this.options={...ge};for(const[o,i]of Object.entries(s))this.options[o]=Ct(o,i);this.focusAt=null,this.grade=null,this.stats={passes:0},this.w=0,this.h=0;const a=this.quad=new ps(null);this.mat={down:Z(bs,{src:{value:null},texel:{value:new A},uvScale:{value:new A(1,1)},uvMax:{value:new A(1,1)},threshold:{value:1},knee:{value:.5},gain:{value:1},prefilter:{value:!1}}),up:Z(Ms,{src:{value:null},texel:{value:new A}},{blending:at,transparent:!0}),dof:Z(Ss,{tColor:{value:null},tDepth:{value:null},texel:{value:new A},uvScale:{value:new A(1,1)},uvMax:{value:new A(1,1)},logFar:{value:1},focus:{value:2},band:{value:.15},maxR:{value:6}}),final:new Oe({vertexShader:ys,fragmentShader:Ts,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:null},tBloom:{value:null},useBloom:{value:!1},bloom:{value:0},uvScale:{value:new A(1,1)},uvMax:{value:new A(1,1)},texel:{value:new A},sharpen:{value:0},tAO:{value:null},useAO:{value:!1},aoStrength:{value:.65},exposure:{value:1},sat:{value:1},contrast:{value:1},lift:{value:0},vignette:{value:0},aspect:{value:1},shadowTint:{value:new _(1,1,1)},highlightTint:{value:new _(1,1,1)},toneMappingExposure:{value:1}}}),ao:Z(As,{tDepth:{value:null},uvScale:{value:new A(1,1)},uvMax:{value:new A(1,1)},texel:{value:new A},logFar:{value:1},tanY:{value:.47},aspect:{value:1}}),aoBlur:Z(_s,{tAO:{value:null},tDepth:{value:null},uvScale:{value:new A(1,1)},uvMax:{value:new A(1,1)},texel:{value:new A},logFar:{value:1}}),fxaa:new nt({...oe,uniforms:Fe.clone(oe.uniforms),depthTest:!1,depthWrite:!1,toneMapped:!1})},this.toneKey=null,this.mips=[];for(let o=0;o<gt;o++)this.mips.push(Dt(1,1));this.dofRT=Dt(1,1),this.aoRT=[0,1].map(()=>new zt(1,1,{depthBuffer:!1,minFilter:Mt,magFilter:Mt})),this.ldrRT=new zt(1,1,{depthBuffer:!1}),this.sceneRT=null,a.material=this.mat.final,this.setSize()}set(t,e){const s=Ct(t,e),a=this.options[t];this.options[t]=s,t==="aa"&&s!==a&&this.buildSceneTarget(),t==="scale"&&this.scaler?.lock(s==="auto"?null:Number(s)),t==="shadows"&&this.shadows?.setLevel(s==="auto"?this.presetShadows??"high":s)}focus(t){this.focusAt=t&&t.at>0?{band:.15,maxR:6,...t}:null}setSize(){const t=this.renderer.getDrawingBufferSize(this._buf??=new A),e=Math.max(1,t.x),s=Math.max(1,t.y);if(e===this.w&&s===this.h&&this.sceneRT)return;this.w=e,this.h=s,this.buildSceneTarget(),this.dofRT.setSize(e,s),this.ldrRT.setSize(e,s);for(const i of this.aoRT)i.setSize(Math.max(1,e>>1),Math.max(1,s>>1));let a=e,o=s;for(const i of this.mips)a=Math.max(1,Math.ceil(a/2)),o=Math.max(1,Math.ceil(o/2)),i.setSize(a,o)}buildSceneTarget(){this.sceneRT?.depthTexture?.dispose(),this.sceneRT?.dispose();const t=new De(this.w,this.h);this.sceneRT=Dt(this.w,this.h,{depthBuffer:!0,depthTexture:t,samples:this.options.aa==="msaa"?4:0})}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.quad.render(this.renderer),this.stats.passes++}render(t,e){const s=this.renderer,a=this.options;if(this.lights?.update(e.position),this.shadows?.update(e),!a.post){s.render(t,e),this.grade=null;return}this.setSize();let o=a.grade?ms(this.sky.hour,this.sky.dirWorld[2]):gs;const i=this.weather?.now?.sat??1;i!==1&&(o={...o,sat:o.sat*i,contrast:1+(o.contrast-1)*i}),this.grade=o;const r=a.dof&&this.focusAt,c=this.scaler?.value??1,l=Math.max(1,Math.round(this.w*c)),h=Math.max(1,Math.round(this.h*c)),f=this._uvS??=new A,d=this._uvM??=new A;f.set(l/this.w,h/this.h),d.set((l-.5)/this.w,(h-.5)/this.h),this.stats.scale=+(l/this.w).toFixed(3),this.stats.passes=0;const m=s.getRenderTarget(),w=s.info.autoReset,g=!!a.ao;this.sceneRT.resolveDepthBuffer=!!r||g,this.sceneRT.viewport.set(0,0,l,h),this.dofRT.viewport.set(0,0,l,h),s.setRenderTarget(this.sceneRT),s.render(t,e),s.info.autoReset=!1;let b=this.sceneRT.texture;if(r){const p=this.mat.dof.uniforms;p.tColor.value=b,p.tDepth.value=this.sceneRT.depthTexture,p.texel.value.set(1/this.w,1/this.h),p.uvScale.value.copy(f),p.uvMax.value.copy(d),p.logFar.value=Math.log2(e.far+1),p.focus.value=this.focusAt.at,p.band.value=this.focusAt.band,p.maxR.value=this.focusAt.maxR*this.h/1080,this.pass(this.mat.dof,this.dofRT),b=this.dofRT.texture}if(g){const p=this.mat.ao.uniforms,S=this.mat.aoBlur.uniforms,[k,T]=this.aoRT;p.tDepth.value=this.sceneRT.depthTexture,p.uvScale.value.copy(f),p.uvMax.value.copy(d),p.texel.value.set(1/k.width,1/k.height),p.logFar.value=Math.log2(e.far+1),p.tanY.value=Math.tan(ot.degToRad(e.fov)/2),p.aspect.value=e.aspect,this.pass(this.mat.ao,k),S.tAO.value=k.texture,S.tDepth.value=this.sceneRT.depthTexture,S.uvScale.value.copy(f),S.uvMax.value.copy(d),S.texel.value.set(1/k.width,1/k.height),S.logFar.value=p.logFar.value,this.pass(this.mat.aoBlur,T)}const M=a.bloom&&o.bloom>0;if(M){const p=this.mat.down.uniforms,S=this.mat.up.uniforms;p.prefilter.value=!0,p.threshold.value=o.threshold,p.knee.value=o.threshold*.5,p.gain.value=o.exposure,p.src.value=b,p.texel.value.set(1/this.w,1/this.h),p.uvScale.value.copy(f),p.uvMax.value.copy(d),this.pass(this.mat.down,this.mips[0]),p.prefilter.value=!1,p.gain.value=1,p.uvScale.value.set(1,1),p.uvMax.value.set(1,1);for(let T=1;T<gt;T++){const E=this.mips[T-1];p.src.value=E.texture,p.texel.value.set(1/E.width,1/E.height),this.pass(this.mat.down,this.mips[T])}const k=s.autoClear;s.autoClear=!1;for(let T=gt-2;T>=0;T--){const E=this.mips[T+1];S.src.value=E.texture,S.texel.value.set(.5/E.width,.5/E.height),this.pass(this.mat.up,this.mips[T])}s.autoClear=k}const x=this.mat.final,u=x.uniforms,y=`${s.toneMapping}|${s.outputColorSpace}`;if(y!==this.toneKey){this.toneKey=y,x.defines={},Ne.getTransfer(s.outputColorSpace)===Ie&&(x.defines.SRGB_TRANSFER="");const p=Es.get(s.toneMapping);p&&(x.defines[p]=""),x.needsUpdate=!0}u.tScene.value=b,u.tBloom.value=this.mips[0].texture,u.useBloom.value=M,u.uvScale.value.copy(f),u.uvMax.value.copy(d),u.texel.value.set(1/this.w,1/this.h),u.sharpen.value=Math.min(.25,(1-f.y)*.6),u.useAO.value=!!g,u.tAO.value=this.aoRT[1].texture,u.bloom.value=o.bloom/gt,u.exposure.value=o.exposure,u.sat.value=o.sat,u.contrast.value=o.contrast,u.lift.value=o.lift,u.vignette.value=o.vignette,u.aspect.value=this.w/this.h,u.shadowTint.value.set(...o.shadow),u.highlightTint.value.set(...o.highlight),u.toneMappingExposure.value=s.toneMappingExposure,a.aa==="fxaa"?(this.pass(x,this.ldrRT),this.mat.fxaa.uniforms.tDiffuse.value=this.ldrRT.texture,this.mat.fxaa.uniforms.resolution.value.set(1/this.w,1/this.h),this.pass(this.mat.fxaa,null)):this.pass(x,null),s.info.autoReset=w,s.setRenderTarget(m)}dispose(){this.sceneRT?.depthTexture?.dispose(),this.sceneRT?.dispose();for(const t of this.mips)t.dispose();this.dofRT.dispose(),this.ldrRT.dispose();for(const t of this.aoRT)t.dispose();for(const t of Object.values(this.mat))t.dispose();this.quad.dispose()}}const Rs=16,Os=.001;function ve(n,t,e){const s=[];for(const o of n){if(!(o.intensity>Os))continue;const i=o.pos.x-t.x,r=o.pos.y-t.y,c=o.pos.z-t.z;s.push({f:o,score:Math.sqrt(i*i+r*r+c*c)-o.distance})}s.sort((o,i)=>o.score-i.score);const a=[];for(let o=0;o<s.length&&o<e;o++)a.push(s[o].f);return a}class Fs{constructor(t,e=Rs){this.size=e,this.lights=[],this.fixtures=[],this._byLight=new Map,this._slot=new Array(e).fill(null),this._chosen=new Set,this._held=new Set;for(let s=0;s<e;s++){const a=new Be(16777215,0,1,2);a.name=`lightpool_${s}`,a.userData.pool=!0,t.add(a),this.lights.push(a)}}collect(t){const e=new Map,s=[];t.traverse(a=>{if(!a.isPointLight||a.userData.pool)return;let o=this._byLight.get(a);if(!o){let i=a;for(;i.parent&&i.parent!==t;)i=i.parent;o={light:a,pos:a.getWorldPosition(new _),root:i,distance:a.distance,intensity:0}}a.visible=!1,e.set(a,o),s.push(o)}),this._byLight=e,this.fixtures=s;for(let a=0;a<this.size;a++)this._slot[a]&&!e.has(this._slot[a].light)&&(this._slot[a]=null)}refresh(t){for(const e of this.fixtures)e.root===t&&e.light.getWorldPosition(e.pos)}update(t){for(const r of this.fixtures)r.intensity=r.light.intensity,r.distance=r.light.distance;const e=ve(this.fixtures,t,this.size),s=this._chosen,a=this._held;s.clear(),a.clear();for(const r of e)s.add(r);const o=this._slot;for(let r=0;r<this.size;r++)o[r]&&!s.has(o[r])&&(o[r]=null),o[r]&&a.add(o[r]);let i=0;for(const r of e)if(!a.has(r)){for(;o[i];)i++;o[i]=r}for(let r=0;r<this.size;r++){const c=this.lights[r],l=o[r];if(!l){c.intensity!==0&&(c.intensity=0);continue}const h=l.light;c.position.equals(l.pos)||c.position.copy(l.pos),c.color.equals(h.color)||c.color.copy(h.color),c.intensity!==h.intensity&&(c.intensity=h.intensity),c.distance!==h.distance&&(c.distance=h.distance),c.decay!==h.decay&&(c.decay=h.decay)}}}const me=6,vt=100,Ds=40;function Ns(n,t,e=me){const s=new Map;for(const o of n){if(o.distance>0){const r=o.pos.x-t.x,c=o.pos.y-t.y,l=o.pos.z-t.z;if(Math.sqrt(r*r+c*c+l*l)-o.distance>Ds)continue}const i=o.priority??0;s.has(i)||s.set(i,[]),s.get(i).push(o)}const a=[];for(const o of[...s.keys()].sort((i,r)=>r-i)){if(a.length>=e)break;for(const i of ve(s.get(o),t,e-a.length))a.push(i)}return a}class Is{constructor(t,e=me){this.scene=t,this.size=e,this.pool=new Fs(t,e),this.requests=new Set,this._list=[],this._dirty=!0,this.stats={requests:0,lit:0},this.levels={}}request({pos:t=[0,0,0],colour:e=16770756,intensity:s=1,range:a=10,priority:o=0,decay:i=2}={}){const r={color:new D(e),intensity:s,distance:a,decay:i},c={light:r,priority:o,pos:Array.isArray(t)?new _(...t):t.clone(),distance:a,intensity:s,get colour(){return r.color},set colour(l){r.color.set(l)},set range(l){r.distance=l},get range(){return r.distance},release:()=>{this.requests.delete(c),this._dirty=!0}};return Object.defineProperty(c,"intensity",{get:()=>r.intensity,set:l=>{r.intensity=l},enumerable:!0}),this.requests.add(c),this._dirty=!0,c}requestStatic(t,e="static"){this.cells??=new Map;const s=[];for(const a of t){const o={color:new D(a.colour??16770756),intensity:0,distance:a.range??10,decay:2},i={light:o,priority:a.priority??0,pos:Array.isArray(a.pos)?new _(...a.pos):a.pos.clone(),distance:o.distance,intensity:0,base:a.intensity??1,group:e},r=`${Math.floor(i.pos.x/vt)},${Math.floor(i.pos.z/vt)}`;this.cells.has(r)||this.cells.set(r,[]),this.cells.get(r).push(i),s.push(i)}return s}adopt(t,{priority:e=1}={}){t.updateMatrixWorld(!0);const s=[];return t.traverse(a=>{if(!a.isPointLight||a.userData.pool)return;if(a.visible=!1,a.userData.lookRequest){a.getWorldPosition(a.userData.lookRequest.pos),s.push(a.userData.lookRequest);return}const o={light:a,priority:e,pos:a.getWorldPosition(new _),distance:a.distance,intensity:a.intensity,release:()=>{this.requests.delete(o),delete a.userData.lookRequest,this._dirty=!0}};a.userData.lookRequest=o,this.requests.add(o),s.push(o)}),this._dirty=!0,s}update(t){this._dirty&&(this._list=[...this.requests],this._dirty=!1);for(const a of this._list)a.intensity=a.light.intensity,a.distance=a.light.distance;let e=this._list;if(this.cells?.size){e=this._near??=[],e.length=0;for(const i of this._list)e.push(i);const a=Math.floor(t.x/vt),o=Math.floor(t.z/vt);for(let i=-1;i<=1;i++)for(let r=-1;r<=1;r++){const c=this.cells.get(`${a+i},${o+r}`);if(c)for(const l of c)l.light.intensity=l.base*(this.levels[l.group]??1),l.intensity=l.light.intensity,e.push(l)}}const s=Ns(e,t,this.size);this.pool.fixtures=s,this.pool.update(t),this.stats.requests=e.length,this.stats.lit=s.length}}const re=14,Ps=(n,t=0)=>.82+.1*Math.sin(n*11.3+t)+.06*Math.sin(n*23.7+t*2.1)+.05*Math.sin(n*5.1+t*.7),Qt=`
  #include <common>
  #include <logdepthbuf_pars_vertex>`,Yt=`
  #include <common>
  #include <logdepthbuf_pars_fragment>`,we=`
  float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.07 + 13.1; a *= 0.5; } return s; }`,xe=`
  vec3 billboard(vec3 centre, vec2 corner, vec2 size) {
    vec3 right = normalize(vec3(viewMatrix[0][0], 0.0, viewMatrix[2][0]));
    return centre + right * corner.x * size.x + vec3(0.0, corner.y * size.y, 0.0);
  }`,Ls=`
  attribute vec2 corner; attribute vec3 centre; attribute vec3 shape;   // shape: width, height, seed
  uniform float size, strength;
  varying vec2 vUv; varying float vSeed;
  ${Qt}
  ${xe}
  void main() {
    vUv = corner * vec2(0.5, 1.0) + vec2(0.5, 0.0);
    vSeed = shape.z;
    vec3 c = (modelMatrix * vec4(centre * size, 1.0)).xyz;
    vec3 p = billboard(c, corner, shape.xy * size * mix(0.35, 1.0, strength));
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
    #include <logdepthbuf_vertex>
  }`,zs=`
  uniform float time, strength, glow;
  varying vec2 vUv; varying float vSeed;
  ${Yt}
  ${we}
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
  }`,Us=`
  attribute float seed;
  uniform float time, size, strength, pxScale;
  varying float vA;
  ${Qt}
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
  }`,Cs=`
  varying float vA;
  ${Yt}
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vec3(1.0, 0.55, 0.15) * 4.0 * vA * (1.0 - d * 2.0), 1.0);
  }`,Gs=`
  attribute vec2 corner; attribute float seed;
  uniform float time, size, strength, wind; uniform vec2 windDir;
  varying vec2 vUv; varying float vPh; varying float vSeed;
  ${Qt}
  ${xe}
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
  }`,Ws=`
  uniform float time, strength; uniform vec3 ambient, fireCol;
  varying vec2 vUv; varying float vPh; varying float vSeed;
  ${Yt}
  ${we}
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(vUv - 0.5) * 2.0;
    float n = fbm(vUv * 2.5 + vec2(vSeed * 9.0, -time * 0.15));
    float a = smoothstep(1.0, 0.2, d + (n - 0.5) * 0.6) * smoothstep(0.0, 0.12, vPh) * (1.0 - vPh);
    // Lit by the sky, and by the fire from below while it is low.
    vec3 col = ambient * 0.55 + fireCol * (1.0 - smoothstep(0.0, 0.35, vPh)) * 0.25;
    gl_FragColor = vec4(col, a * 0.2 * strength);
  }`;function Bs(){const n=[[0,0,.75,2.1],[.28,.12,.55,1.5],[-.25,.18,.55,1.6],[.1,-.28,.5,1.35],[-.18,-.2,.5,1.25]],t=[],e=[],s=[],a=[];n.forEach(([i,r,c,l],h)=>{const f=h*4;for(const[d,m]of[[-1,0],[1,0],[1,1],[-1,1]])t.push(d,m),e.push(i,.12,r),s.push(c,l,h*1.37);a.push(f,f+1,f+2,f,f+2,f+3)});const o=new Q;return o.setAttribute("position",new N(new Array(t.length/2*3).fill(0),3)),o.setAttribute("corner",new N(t,2)),o.setAttribute("centre",new N(e,3)),o.setAttribute("shape",new N(s,3)),o.setIndex(a),o}function Hs(n=10){const t=[],e=[],s=[];for(let o=0;o<n;o++){for(const[r,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(r,c),e.push(o/n);const i=o*4;s.push(i,i+1,i+2,i,i+2,i+3)}const a=new Q;return a.setAttribute("position",new N(new Array(n*12).fill(0),3)),a.setAttribute("corner",new N(t,2)),a.setAttribute("seed",new N(e,1)),a.setIndex(s),a}function Vs(){const n=[],t=new D(4863270),e=new D(1709330),s=(a,o,i)=>{const r=new et(o*.85,o,a,7,3),c=[],l=r.attributes.position;for(let h=0;h<l.count;h++){const f=l.getY(h)/a+.5;c.push(...t.clone().lerp(e,i.charTop?ot.smoothstep(f,.4,.9):1-ot.smoothstep(Math.abs(f-.5),.1,.45)).toArray())}r.setAttribute("color",new N(c,3)),i(r),n.push(r)};for(let a=0;a<6;a++){const o=a/6*Math.PI*2+.2,i=r=>{r.translate(0,.55,0),r.rotateX(.52),r.rotateY(o),r.translate(Math.sin(o)*.12,0,Math.cos(o)*.12)};i.charTop=!0,s(1.3,.07+a%3*.012,i)}for(let a=0;a<2;a++)s(1.6,.09,o=>{o.rotateZ(Math.PI/2),o.rotateY(a*Math.PI/2+.4),o.translate(0,.09,0)});return yt(n.map(a=>a.toNonIndexed()))}class js{constructor(t,e){this.game=t,this.lights=e,this.time=0,this.list=[],this.woodMat=new Ut({vertexColors:!0,roughness:.95,metalness:0}),this.coalMat=new Ut({color:1840144,roughness:1,metalness:0,emissive:16734740,emissiveIntensity:1.5}),this.geo={flame:Bs(),smoke:Hs(),wood:Vs(),coal:new He(.62,18).rotateX(-Math.PI/2)};const s=new Float32Array(90).map((a,o)=>o*1.618);this.geo.sparks=new Q,this.geo.sparks.setAttribute("position",new N(new Float32Array(90*3),3)),this.geo.sparks.setAttribute("seed",new N(s,1))}add({x:t,y:e,size:s=1,strength:a=1,logs:o=!0,priority:i=2}={}){const r=this.game.grid,c=(r.groundAt??r.heightAt).call(r,t,e),l=new _t;l.name="fire",l.position.set(t,c,-e);const h={time:{value:0},size:{value:s},strength:{value:a},glow:{value:1.1},pxScale:{value:800},wind:{value:rs/.6},windDir:{value:new A(...ns)},ambient:{value:new D(.5,.5,.5)},fireCol:{value:new D(1,.45,.15)}},f=(g,b,M)=>new nt({uniforms:h,vertexShader:g,fragmentShader:b,transparent:!0,depthWrite:!1,toneMapped:!1,...M}),d=(g,b)=>(g.frustumCulled=!1,g.renderOrder=b,l.add(g),g);if(o){const g=d(new tt(this.geo.wood,this.woodMat),0);g.scale.setScalar(s),g.castShadow=!0,g.frustumCulled=!0;const b=d(new tt(this.geo.coal,this.coalMat.clone()),0);b.scale.setScalar(s),b.position.y=.03,b.frustumCulled=!0}d(new tt(this.geo.smoke,f(Gs,Ws,{blending:Ve})),2),d(new tt(this.geo.flame,f(Ls,zs,{blending:at})),3),d(new $t(this.geo.sparks,f(Us,Cs,{blending:at})),3),this.game.scene.add(l);const m=this.lights?.request({pos:[t,c+1.9*s,-e],colour:16747068,intensity:re*s*a,range:16*s,priority:i}),w={group:l,light:m,uniforms:h,seed:this.list.length*3.1,get strength(){return h.strength.value},set strength(g){h.strength.value=Math.max(0,Math.min(1,g))},remove:()=>{this.game.scene.remove(l);for(const g of l.children)g.material!==this.woodMat&&g.material.dispose();m?.release(),this.list.splice(this.list.indexOf(w),1)}};return this.list.push(w),w}update(t,e,s){this.time+=t;const a=this.game.sky,o=s?s.getDrawingBufferSize(new A).y/(2*Math.tan(ot.degToRad(e.fov)/2)):800;for(const i of this.list){const r=i.uniforms,c=r.strength.value,l=Ps(this.time,i.seed);r.time.value=this.time,r.pxScale.value=o,a&&r.ambient.value.copy(a.hemi.color).multiplyScalar(a.hemi.intensity),r.wind.value=pe.strength/.6,i.light&&(i.light.intensity=re*r.size.value*c*l);const h=i.group.children[1];h?.material?.emissive&&(h.material.emissiveIntensity=(.6+1.4*c)*l)}}}const Et=9.81,Xt=Object.freeze({peony:{stars:150,speed:72,k:1.3,life:2.6,gs:.5,trail:.25,flicker:0},chrysanthemum:{stars:160,speed:76,k:1.2,life:3,gs:.5,trail:1,flicker:0},willow:{stars:120,speed:58,k:1.7,life:5.5,gs:.3,trail:2.4,flicker:0,colour:"gold"},ring:{stars:90,speed:70,k:1.3,life:2.6,gs:.45,trail:.4,flicker:0,ring:!0},palm:{stars:9,speed:62,k:.9,life:3.4,gs:.8,trail:2.8,flicker:0,colour:"gold"},glitter:{stars:150,speed:70,k:1.25,life:3.2,gs:.45,trail:.6,flicker:1,colour:"silver"},salute:{stars:50,speed:95,k:3,life:.35,gs:.2,trail:0,flicker:1,colour:"white"}}),Nt=Object.freeze({red:[1,.1,.06],green:[.25,1,.25],blue:[.18,.32,1],gold:[1,.55,.16],silver:[.9,.92,1],purple:[.62,.2,1],white:[1,1,1]}),le=["red","green","blue","gold","silver","purple"];function ye(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const qs=(n,t,e,s=Et)=>-s*n/e+(t+s/e)*(1-Math.exp(-e*n))/e,be=(n,t,e=Et)=>Math.log((n+e/t)/(e/t))/t;function $s(n,t,e=Et){let s=1,a=1e3;for(let o=0;o<60;o++){const i=(s+a)/2;qs(be(i,t,e),i,t,e)<n?s=i:a=i}return(s+a)/2}const At=.25;function Qs({seed:n=704,duration:t=480,rate:e=.55}={}){const s=ye(n),a=[],o=t*.88,i=c=>c[Math.floor(s()*c.length)];let r=2;for(;r<t;){const c=r>=o,l=c?r>t-4?"salute":i(["chrysanthemum","chrysanthemum","willow","peony","glitter","palm"]):i(["peony","peony","chrysanthemum","chrysanthemum","willow","ring","palm","glitter"]),f=Xt[l].colour??i(le),d=s()<.3?i(le):f,m=110+s()*110,w=$s(m,At);a.push({t:+r.toFixed(3),type:l,colours:[f,d],height:m,v0:w,rise:be(w,At),x:(s()-.5)*220,z:(s()-.5)*80,tilt:[(s()-.5)*.16,(s()-.5)*.1],size:.75+s()*.5});const g=c?.18+s()*.35:s()<.12?3+s()*3:.6+s()*(2/e);r+=g}return{shells:a,duration:t,finaleAt:o}}function Ys(n,t=.25){let e=0;for(let s=0;s<n.duration+8;s+=t){let a=0;for(const o of n.shells){const i=Xt[o.type],r=o.t+o.rise;s>=r&&s<=r+i.life*1.3&&(a+=i.stars)}e=Math.max(e,a)}return e}const mt=8e3,Xs=[[0,1],[.05,.6],[.1,.4],[.17,.26],[.26,.15]],Ks=1.6,Zs=`
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
  }`,Js=`
  varying vec3 vCol;
  #include <common>
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    gl_FragColor = vec4(vCol * (1.0 - d * d), 1.0);
  }`;class ti{constructor(t,e){this.game=t,this.lights=e,this.time=0,this.playing=!1,this.show=null,this.flashes=[],this.cursor=0,this.lastEnd=-1;const s=mt;this.arrays={aStart:new Float32Array(s*4),aVel:new Float32Array(s*4),aCol:new Float32Array(s*4),aPhys:new Float32Array(s*4)};const a=this.geometry=new Q;a.setAttribute("position",new St(new Float32Array(s*3),3));for(const[o,i]of Object.entries(this.arrays))a.setAttribute(o,new St(i,4).setUsage(je));this.uniforms={time:{value:0},bright:{value:7},pxScale:{value:800},starM:{value:Ks}},this.group=new _t,this.group.name="fireworks",this.group.visible=!1;for(const[o,i]of Xs){const r=new nt({uniforms:{...this.uniforms,lag:{value:o},ghost:{value:i}},vertexShader:Zs,fragmentShader:Js,transparent:!0,depthWrite:!1,blending:at,toneMapped:!1}),c=new $t(a,r);c.frustumCulled=!1,c.renderOrder=4,this.group.add(c)}t.scene.add(this.group),this._dirty=null}defaultBarge(){return{x:-60,y:-500}}start({x:t,y:e,seed:s=704,duration:a=480,at:o=0}={}){const i=t==null?this.defaultBarge():{x:t,y:e},r=this.game.META?.seaLevel??0;this.barge=new _(i.x,r+2,-i.y),this.show=Qs({seed:s,duration:a}),this.peak=Ys(this.show),this.playing=!0,this.seek(o)}stop(){this.playing=!1}seek(t){for(const e of Object.values(this.arrays))e.fill(0);this._markAll(),this.cursor=0;for(const e of this.flashes)e.light.release();for(this.flashes=[],this.next=0,this.pending=[],this.lastEnd=-1,this.time=Math.max(0,t-8);this.next<this.show.shells.length&&this.show.shells[this.next].t<this.time-6;)this.next++;for(this.quiet=!0;this.time<t;)this._step(Math.min(1/30,t-this.time));this.quiet=!1}_markAll(){this._dirty=[0,mt]}_mark(t){this._dirty?(this._dirty[0]=Math.min(this._dirty[0],t),this._dirty[1]=Math.max(this._dirty[1],t+1)):this._dirty=[t,t+1]}_write(t,e,s,a,o,i,r,c,l){const h=this.cursor;this.cursor=(this.cursor+1)%mt,this.cursor===0&&this._markAll();const f=this.arrays,d=h*4;f.aStart.set([t.x,t.y,t.z,t.t],d),f.aVel.set([e.x,e.y,e.z,s],d),f.aCol.set([a[0],a[1],a[2],o],d),f.aPhys.set([i,r,c,l],d),this._mark(h),this.lastEnd=Math.max(this.lastEnd,t.t+s+.3*2.8)}_emit(t,e,s,a){this.quiet||typeof dispatchEvent!="function"||typeof CustomEvent!="function"||dispatchEvent(new CustomEvent("ts:firework",{detail:{kind:t,type:e,pos:s.toArray(),size:a}}))}_launch(t,e){const s=this.barge.clone().add(new _(t.x,0,t.z)),o=new _(t.tilt[0],1,t.tilt[1]).normalize().multiplyScalar(t.v0);this._write({x:s.x,y:s.y,z:s.z,t:t.t},o,t.rise,Nt.gold,2,At,1,1.6,e*.37);const i=At,r=new _(0,-Et,0),c=1-Math.exp(-i*t.rise),l=s.clone().addScaledVector(r,t.rise/i).addScaledVector(o.clone().addScaledVector(r,-1/i),c/i),h=o.clone().addScaledVector(r,-1/i).multiplyScalar(Math.exp(-i*t.rise)).addScaledVector(r,1/i);this.pending.push({s:t,idx:e,t:t.t+t.rise,pos:l,drift:h}),this._emit("launch",t.type,s,t.size)}_burst({s:t,idx:e,t:s,pos:a,drift:o}){const i=Xt[t.type],r=ye(e*7919+13),c=i.stars,l=i.speed*Math.sqrt(t.size);let h=null;i.ring&&(h=new _(r()-.5,r()*.6+.2,r()-.5).normalize());const f=new _,d=new _,m=new _;h&&(d.set(1,0,0).cross(h).normalize(),m.crossVectors(h,d));for(let w=0;w<c;w++){if(h){const M=w/c*Math.PI*2+r()*.05;f.copy(d).multiplyScalar(Math.cos(M)).addScaledVector(m,Math.sin(M))}else{const M=1-2*(w+.5)/c,x=Math.sqrt(1-M*M),u=w*2.39996+r()*.2;f.set(Math.cos(u)*x,M,Math.sin(u)*x)}const g=f.clone().multiplyScalar(l*(.9+r()*.2)).addScaledVector(o,.3),b=Nt[w%2?t.colours[1]:t.colours[0]];this._write({x:a.x,y:a.y,z:a.z,t:s},g,i.life*(.85+r()*.3),b,i.flicker,i.k,i.gs,i.trail,w*.71+e)}if(this.lights&&this.flashes.length<2&&!this.quiet){const w=Nt[t.colours[0]],g=this.lights.request({pos:a,colour:new D(...w).lerp(new D(1,1,1),.5),intensity:0,range:900,priority:1});this.flashes.push({light:g,t0:s,peak:(t.type==="salute"?9e5:4e5)*t.size})}this._emit("burst",t.type,a,t.size)}_step(t){this.time+=t;const e=this.show.shells;for(;this.next<e.length&&e[this.next].t<=this.time;)this._launch(e[this.next],this.next),this.next++;for(let s=this.pending.length-1;s>=0;s--)this.pending[s].t<=this.time&&(this._burst(this.pending[s]),this.pending.splice(s,1));for(let s=this.flashes.length-1;s>=0;s--){const a=this.flashes[s],o=this.time-a.t0;o>.6?(a.light.release(),this.flashes.splice(s,1)):a.light.intensity=a.peak*Math.exp(-o*7)}}update(t,e,s){if(this.show&&(this.playing&&this._step(t),this.playing&&this.next>=this.show.shells.length&&!this.pending.length&&this.time>this.lastEnd&&(this.playing=!1),this.uniforms.time.value=this.time,s&&e&&(this.uniforms.pxScale.value=s.getDrawingBufferSize(new A).y/(2*Math.tan(ot.degToRad(e.fov)/2))),this.group.visible=this.time<=this.lastEnd,this._dirty)){const[a,o]=this._dirty;for(const i of Object.keys(this.arrays)){const r=this.geometry.attributes[i];r.updateRanges.length>8?(r.clearUpdateRanges(),r.addUpdateRange(0,mt*4)):r.addUpdateRange(a*4,(o-a)*4),r.needsUpdate=!0}this._dirty=null}}}const ei=1e3/60,ce=18.2,si=17.5,ii=1e3/30,oi=400,ai=.35,ni=.1,ri=800,li=2500,ci=.05,hi=4e3,he=3e3,fi=3e4,ui=3e5,fe=.08,di=250,J=(n,t,e)=>Math.min(e,Math.max(t,n));class pi{constructor({min:t=.5,max:e=1,start:s}={}){this.min=t,this.max=e,this.scale=J(s??e,t,e),this.ema=0,this.time=0,this.slowFor=0,this.fastFor=0,this.goal=null,this.settleUntil=0,this.lastDrop=-1/0,this.lastRaise=-1/0,this.raisedFrom=null,this.ceiling=1/0,this.ceilingUntil=-1/0,this.fails=0,this.cpu=0,this.cpuBound=!1,this.locked=null,this.limited=!1}setRange(t,e){this.min=t,this.max=e,this.scale=J(this.scale,t,e),this.goal=null}lock(t){this.locked=t==null?null:J(t,.25,1)}get value(){return this.locked??this.scale}sample(t,e=null){if(!(t>0)||t>di)return this.value;const s=this.time+=t,a=this.ema=this.ema?this.ema+(t-this.ema)*fe:t;if(e!=null&&e>=0&&(this.cpu=this.cpu?this.cpu+(e-this.cpu)*fe:e),this.cpuBound=this.cpu>ce,this.locked!=null)return this.locked;this.slowFor=a>ce?this.slowFor+t:0,this.fastFor=a<si?this.fastFor+t:0;const o=this.min,i=Math.min(this.max,s<this.ceilingUntil?this.ceiling:1/0);return this.goal!=null?(this.scale=Math.max(this.goal,this.scale-ai*t/1e3),this.scale<=this.goal+1e-9&&(this.goal=null,this.settleUntil=s+ri,this.slowFor=0),this.lastDrop=s):this.slowFor>oi&&s>this.settleUntil&&this.scale>o+1e-9&&!this.cpuBound?(s-this.lastRaise<he&&this.raisedFrom!=null?(this.goal=Math.max(o,this.raisedFrom),this.ceiling=this.raisedFrom,this.ceilingUntil=s+Math.min(ui,fi*2**this.fails++),this.raisedFrom=null):this.goal=J(Math.max(this.scale*Math.sqrt(ei/a)*.97,this.scale-ni),o,this.max),this.lastDrop=s):this.fastFor>li&&s-this.lastDrop>hi&&this.scale<i-1e-9&&(this.raisedFrom=this.scale,this.scale=Math.min(i,this.scale+ci),this.lastRaise=s,this.fastFor=0),this.raisedFrom!=null&&s-this.lastRaise>he&&(this.raisedFrom=null,this.fails=0),this.scale=Math.round(J(this.scale,o,this.max)*1e3)/1e3,this.limited=this.scale<=this.min+1e-6&&a>ii,this.scale}}const st=40,Gt=280,Wt=.8,gi=120,it=Object.freeze({off:Object.freeze({maps:0}),low:Object.freeze({maps:1,size:2048,end:gi}),high:Object.freeze({maps:2,size:2048,near:st,far:Gt})});function vi(n,t,e,s){const a=Math.tan(n*Math.PI/360),o=(e*a)**2*(1+t*t),i=(s*a)**2*(1+t*t);let r=(s*s-e*e+i-o)/(2*(s-e));r=Math.min(s,Math.max(e,r));const c=Math.sqrt(Math.max((r-e)**2+o,(s-r)**2+i));return{dist:r,radius:c}}const It=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],ue=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Bt=n=>{const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]};function mi(n){const t=Bt(n);let e=ue([0,1,0],t);return Math.hypot(...e)<1e-6&&(e=[1,0,0]),e=Bt(e),{x:e,y:ue(t,e),z:t}}function Pt(n,t,e,s,a,o,i,r){const c=vi(s,a,o,i),l=Math.ceil(c.radius+1),h=2*l/r,f=Bt(t),d=[n[0]+f[0]*c.dist,n[1]+f[1]*c.dist,n[2]+f[2]*c.dist],m=mi(e),w=Math.round(It(d,m.x)/h)*h,g=Math.round(It(d,m.y)/h)*h,b=It(d,m.z);return{centre:[0,1,2].map(x=>m.x[x]*w+m.y[x]*g+m.z[x]*b),half:l,texel:h}}function wi(n,t,e,s,a,o){const i=it[n]??it.high;return i.maps===0?[]:i.maps===1?[Pt(t,e,s,a,o,.5,i.end,i.size)]:[Pt(t,e,s,a,o,.5,i.near,i.size),Pt(t,e,s,a,o,i.near*Wt,i.far,i.size)]}const xi="#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )",Ht="#pragma unroll_loop_end",yi=`#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

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
		if ( lookDepth < ${st.toFixed(1)} ) lookNear = getShadow( directionalShadowMap[ 0 ], s0.shadowMapSize, s0.shadowIntensity, s0.shadowBias, s0.shadowRadius, vDirectionalShadowCoord[ 0 ] );
		if ( lookDepth > ${(st*Wt).toFixed(1)} ) lookFar = getShadow( directionalShadowMap[ 1 ], s1.shadowMapSize, s1.shadowIntensity, s1.shadowBias, s1.shadowRadius, vDirectionalShadowCoord[ 1 ] );
	}
	float lookSun = mix( lookNear, lookFar, smoothstep( ${(st*Wt).toFixed(1)}, ${st.toFixed(1)}, lookDepth ) );
	lookSun = mix( lookSun, 1.0, smoothstep( ${(Gt*.85).toFixed(1)}, ${Gt.toFixed(1)}, lookDepth ) );
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
	${Ht}`;function bi(){const n=ie.lights_fragment_begin;if(n.includes("COUSINS LOOK"))return!1;const t=n.indexOf(xi),e=n.indexOf(Ht,t);if(t<0||e<0||!n.slice(t,e).includes("getShadow( directionalShadowMap[ i ]"))throw new Error("look/Shadows: three's lights_fragment_begin is not r169's; the cascade patch needs a look");return ie.lights_fragment_begin=n.slice(0,t)+yi+n.slice(e+Ht.length),!0}class Mi{constructor(t){this.game=t,this.sun=t.sky.sun,this.renderer=t.renderer,bi();const e=this.twin=new qe(16777215,0);e.name="sun:far-cascade",e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.6,t.scene.add(e,e.target),this.level="high",this.fits=[],this._v=new _,this._d=new _,this.apply()}setLevel(t){!it[t]||t===this.level||(this.level=t,this.apply())}apply(){const t=it[this.level],e=this.renderer,s=this.sun,a=this.twin,o=t.maps>0,i=t.maps===2,r=e.shadowMap.enabled!==o||a.castShadow!==i;e.shadowMap.enabled=o,s.castShadow=!0,a.castShadow=i,a.visible=i,t.size&&s.shadow.mapSize.x!==t.size&&(s.shadow.mapSize.set(t.size,t.size),s.shadow.map?.dispose(),s.shadow.map=null),s.shadow.normalBias=i?.04:.3,s.shadow.bias=i?-2e-4:-4e-4,r&&this.game.scene.traverse(c=>{const l=c.material;if(l)for(const h of Array.isArray(l)?l:[l])h.needsUpdate=!0})}update(t){const e=it[this.level];if(!e.maps)return;const a=this.game.sky.lightDir(this._v),o=t.getWorldDirection(this._d),i=t.position;this.fits=wi(this.level,[i.x,i.y,i.z],[o.x,o.y,o.z],[a.x,a.y,a.z],t.fov,t.aspect),(e.maps===2?[this.sun,this.twin]:[this.sun]).forEach((c,l)=>{const h=this.fits[l],f=c.shadow.camera;c.target.position.set(...h.centre);const d=l===0?400:800;c.position.set(h.centre[0]+a.x*d,h.centre[1]+a.y*d,h.centre[2]+a.z*d),(f.right!==h.half||f.far!==d+h.half)&&(Object.assign(f,{left:-h.half,right:h.half,top:h.half,bottom:-h.half,near:1,far:d+h.half}),f.updateProjectionMatrix()),c.target.updateMatrixWorld(),c.updateMatrixWorld()}),e.maps===2&&this.twin.color.copy(this.sun.color)}}const Vt=n=>Math.max(0,Math.min(1,n)),wt=(n,t,e)=>n+(t-n)*e,Si=.3;function Ai(n=32,t=.5){const e=new Uint8Array(n*n*4),s=(n-1)/2;for(let o=0;o<n;o++)for(let i=0;i<n;i++){const r=Math.hypot(i-s,o-s)/s,c=Vt(1-(r-t)/(1-t)),l=(o*n+i)*4;e[l]=255,e[l+1]=255,e[l+2]=255,e[l+3]=Math.round(255*c*c)}const a=new $e(e,n,n,Qe);return a.needsUpdate=!0,a}const bt=Object.freeze({clear:{kind:null,fog:null,wetness:0,temp:0,grade:{sun:1,ambient:1,hemi:1},wind:[.4,.2]},overcast:{kind:null,wetness:0,temp:-3,fog:{colour:12174025,near:40,far:320},grade:{sun:.12,ambient:1.7,hemi:1.45},wind:[1.2,.5]},drizzle:{kind:"rain",count:1400,box:[15,13,15],fall:7,length:.16,colour:13162208,opacity:.3,wind:[1.6,.7],wetness:.45,temp:-4,fog:{colour:11713732,near:28,far:220},grade:{sun:.09,ambient:1.72,hemi:1.46}},rain:{kind:"rain",count:3200,box:[16,14,16],fall:12,length:.3,colour:12767966,opacity:.4,wind:[2.6,1.1],wetness:.85,temp:-5,fog:{colour:10793145,near:20,far:150},grade:{sun:.06,ambient:1.78,hemi:1.52}},heavyRain:{kind:"rain",count:7e3,box:[17,15,17],fall:17,length:.52,colour:12372951,opacity:.48,wind:[4.2,1.8],wetness:1,temp:-6,fog:{colour:9740715,near:10,far:82},grade:{sun:.04,ambient:1.74,hemi:1.5}},storm:{kind:"rain",count:8200,box:[18,16,18],fall:19,length:.62,colour:11978452,opacity:.5,wind:[7.5,3],wetness:1,temp:-7,fog:{colour:8227477,near:8,far:64},grade:{sun:.03,ambient:1.62,hemi:1.4},flash:{every:7.5,chance:.55}},duststorm:{kind:"rain",count:5200,box:[22,13,22],fall:.6,length:.5,colour:10254922,opacity:.3,wind:[13,4],wetness:0,temp:6,fog:{colour:12557678,near:1,far:40},grade:{sun:.4,ambient:1.3,hemi:.85}},snow:{kind:"points",count:2600,box:[14,12,14],fall:1.1,size:.07,colour:16054523,opacity:.85,wind:[1.1,.6],drift:.55,wetness:.3,temp:-18,fog:{colour:14148330,near:18,far:110},grade:{sun:.1,ambient:1.7,hemi:1.8}},blizzard:{kind:"points",count:6400,box:[15,13,15],fall:2.4,size:.06,colour:16251644,opacity:.9,wind:[11,4.5],drift:1.4,wetness:.5,temp:-22,fog:{colour:14542572,near:3,far:34},grade:{sun:.05,ambient:1.72,hemi:1.55}},fog:{kind:null,wetness:.35,temp:-6,fog:{colour:12897490,near:3,far:38},grade:{sun:.08,ambient:1.6,hemi:1.38},wind:[.5,.2]},seaFog:{kind:"points",count:900,box:[40,7,40],fall:.05,size:1.8,colour:14673900,opacity:.1,wind:[2,.8],drift:.25,wetness:.4,temp:-4,fog:{colour:13621470,near:2,far:30},grade:{sun:.1,ambient:1.62,hemi:1.4}},ash:{kind:"points",count:3e3,box:[16,13,16],fall:.9,size:.1,colour:7038304,opacity:.55,wind:[2.2,1],drift:.9,wetness:0,temp:2,fog:{colour:9077888,near:6,far:60},grade:{sun:.2,ambient:1.28,hemi:.95}}});Object.freeze(Object.keys(bt));const _i=1/22,Ti=1/95;function Ei(n={}){const t=n.scene??null,e=n.lights??{},s=n.fade??4,a=n.groundY??0,o=n.baseTemp??22,i={sun:e.sun?.intensity??null,ambient:e.ambient?.intensity??null,hemi:e.hemi?.intensity??null},r=t?.fog?{colour:t.fog.color.getHex(),near:t.fog.near,far:t.fog.far}:null,c=(v,R)=>({condition:v,...bt.clear,...bt[v]??{},...R??{}});let l=c(n.preset??"clear",n.override),h=l,f=1,d=0,m=0,w=4,g=l.wetness??0;const b=new _,M=new D,x=new _t;x.frustumCulled=!1;let u=null,y=null,p=null,S=null;const k=Ai();function T(v){if(u&&(x.remove(u),u.geometry.dispose(),u.material.dispose(),u=null,y=null,p=null,S=null),!v.kind)return;const R=v.count??2e3,[z,O,Y]=v.box??[30,18,30],U=v.kind==="rain"?2:1;y=new Float32Array(R*U*3),p=new Float32Array(R),S=new Float32Array(R*4);for(let F=0;F<R;F++){const lt=(Math.random()-.5)*z,ct=Math.random()*O,ht=(Math.random()-.5)*Y;p[F]=Math.random()*Math.PI*2,S[F*4]=Math.sin(p[F]),S[F*4+1]=Math.cos(p[F]),S[F*4+2]=Math.sin(p[F]*1.7),S[F*4+3]=Math.cos(p[F]*1.7);const P=F*U*3;y[P]=lt,y[P+1]=ct,y[P+2]=ht,U===2&&(y[P+3]=lt,y[P+4]=ct-(v.length??.3),y[P+5]=ht)}const C=new Q;C.setAttribute("position",new St(y,3)),C.boundingSphere=new Ye(new _,1e6);const X=v.kind==="rain"?new Xe({color:v.colour,transparent:!0,opacity:v.opacity??.4,depthWrite:!1,fog:!0}):new Ke({color:v.colour,size:v.size??.1,map:k,transparent:!0,opacity:v.opacity??.4,depthWrite:!1,sizeAttenuation:!0,fog:!0});u=v.kind==="rain"?new Ze(C,X):new $t(C,X),u.frustumCulled=!1,u.renderOrder=10,u.castShadow=!1,u.receiveShadow=!1,x.add(u)}T(l);const E=v=>wt(h.grade?.[v]??1,l.grade?.[v]??1,f);function rt(){if(e.sun&&i.sun!=null&&(e.sun.intensity=i.sun*E("sun")),e.ambient&&i.ambient!=null&&(e.ambient.intensity=i.ambient*E("ambient")),e.hemi&&i.hemi!=null&&(e.hemi.intensity=i.hemi*E("hemi")),!t)return;const v=h.fog??r,R=l.fog??r;if(!v&&!R)return;const z=v??R,O=R??v;t.fog||(t.fog=new Je(O.colour,O.near,O.far)),t.fog.near=wt(z.near,O.near,f),t.fog.far=wt(z.far,O.far,f),t.fog.color.setHex(z.colour).lerp(M.setHex(O.colour),f),m>0&&(t.fog.color.lerp(M.setHex(16777215),.75*m),e.ambient&&i.ambient!=null&&(e.ambient.intensity*=1+2.2*m))}const I={group:x,get condition(){return l.condition},get kind(){return l.kind??null},get blending(){return f<1},get flash(){return m},get wind(){return b},get wetness(){return g},get record(){return{condition:l.condition,wetness:g,temp:o+wt(h.temp??0,l.temp??0,f),wind:Math.hypot(...l.wind??[0,0]),flash:m}},set(v,R){if(!bt[v])throw new Error(`weather: no preset "${v}"`);return h={...l},l=c(v,R),f=0,T(l),I},update(v,R){d+=v,f=s>0?Vt(f+v/s):1;const z=l.wetness??0;g+=(z-g)*Vt(v*(z>g?_i:Ti)),l.flash&&(w-=v,w<=0&&(w=l.flash.every*(.45+Math.random()*1.3),Math.random()<(l.flash.chance??.6)&&(m=1))),m>0&&(m=Math.max(0,m-v*6.5));const O=l.wind??[0,0];if(b.set(O[0],0,O[1]),rt(),!u||!y)return I;const[Y,U,C]=l.box??[30,18,30];R&&x.position.set(R.position.x,Math.max(a,R.position.y-U*Si),R.position.z);const X=l.kind==="rain"?2:1,F=p.length,lt=(l.fall??8)*v,ct=O[0]*v,ht=O[1]*v,P=l.drift??0,kt=l.length??.3,Kt=O[0],Zt=-(l.fall??8),Jt=O[1],Rt=Math.hypot(Kt,Zt,Jt)||1,Me=Kt/Rt*kt,Se=Zt/Rt*kt,Ae=Jt/Rt*kt,te=Y/2,ee=C/2,_e=Math.sin(d*.8),Te=Math.cos(d*.8),Ee=Math.cos(d*.6),ke=-Math.sin(d*.6),se=P*v;for(let ft=0;ft<F;ft++){const L=ft*X*3;let H=y[L]+ct,j=y[L+1]-lt,V=y[L+2]+ht;if(P){const ut=ft*4;H+=(_e*S[ut+1]+Te*S[ut])*se,V+=(Ee*S[ut+3]+ke*S[ut+2])*se}j<0?j+=U:j>U&&(j-=U),H>te?H-=Y:H<-te&&(H+=Y),V>ee?V-=C:V<-ee&&(V+=C),y[L]=H,y[L+1]=j,y[L+2]=V,X===2&&(y[L+3]=H-Me,y[L+4]=j-Se,y[L+5]=V-Ae)}return u.geometry.attributes.position.needsUpdate=!0,I},setVisible(v){return x.visible=!!v,I},dispose(){u&&(u.geometry.dispose(),u.material.dispose(),u=null),k.dispose()}};return I}class ki{constructor(t,e){this.game=t,this.lights=e,this.state=new ls("clear"),this.drops=Ei({preset:"clear",fade:6}),t.scene.add(this.drops.group),this.dropsName="clear",this.fog=null,this.strike=null}get name(){return this.state.name}get now(){return this.state.now}get names(){return cs}set(t,{over:e=20}={}){return this.state.set(t,{over:e}),this.emit({kind:"change",name:t,over:e}),this}emit(t){typeof dispatchEvent=="function"&&typeof CustomEvent=="function"&&dispatchEvent(new CustomEvent("ts:weather",{detail:t}))}update(t,e){const s=this.state.step(t),a=this.game.sky,o=this.state.t<1||s.flash>0||s.flashes>0;(o||this._set!==this.state.name)&&(a.setWeather(s),this._set=o?null:this.state.name);const i=this.game.scene.fog;i&&((!this.fog||i.near!==this.fog.setNear||i.far!==this.fog.setFar)&&(this.fog={near:i.near,far:i.far}),i.near=Math.max(2,this.fog.near*s.fog),i.far=Math.max(60,this.fog.far*Math.max(s.fog,.03)),this.fog.setNear=i.near,this.fog.setFar=i.far),pe.strength=s.wind;const r=s.drops??"clear";if(r!==this.dropsName&&(this.drops.set(r),this.dropsName=r),this.drops.update(t,e),this.state.strike){const c=this.state.strikeDist*7.3%(Math.PI*2),l=Math.min(this.state.strikeDist,1500),h=e.position;this.strike?.release(),this.strike=this.lights?.request({pos:[h.x+Math.cos(c)*l,600,h.z+Math.sin(c)*l],colour:13621503,intensity:0,range:0,priority:3})??null,this.emit({kind:"strike",dist:this.state.strikeDist})}this.strike&&(this.strike.intensity=4e6*s.flash,s.flash<=0&&(this.strike.release(),this.strike=null))}}const Ri=n=>Math.min(1,Math.max(0,n)),jt=(n,t,e)=>{const s=Ri((e-n)/(t-n));return s*s*(3-2*s)};function Oi(n,t=0){const e=n-t*.14;return 1-jt(-.03,.035,e)}function Fi(n,t){const e=(n%24+24)%24,s=e<12?e+24:e,a=.42*(1-jt(22.5,25.5,s)),o=.08,i=.14*Math.exp(-(((s-30)/.8)**2));return t*Math.max(o,a+o*jt(22.5,25.5,s)+i)}function Di(n,t){let e=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)>>>0;return e=Math.imul(e^e>>>13,1274126177)>>>0,((e^e>>>16)>>>0)/4294967296}const qt=Object.freeze({cobra:Object.freeze({height:8.2,reach:24,candela:420,colour:16763274,every:70,pool:12}),acorn:Object.freeze({height:3.9,reach:16,candela:110,colour:16766880,every:26,pool:8}),post:Object.freeze({height:2.4,reach:10,candela:24,colour:16765070,every:16,pool:5})}),Ni=new Set(["residential","tertiary","primary","unclassified","living_street","primary_link"]),xt=Object.freeze({x:0,y:0,r:420,names:["Moore","Howe","Bay"]});function Ii(n=[],t=[],e=()=>!0){const s=[],a=(i,r,c)=>{let l=r*.5;for(let h=1;h<i.length;h++){const[f,d]=i[h-1],[m,w]=i[h],g=Math.hypot(m-f,w-d);if(g<1e-6)continue;const b=(m-f)/g,M=(w-d)/g;let x=l;for(;x<=g;)c(f+b*x,d+M*x,b,M),x+=r;l=x-g}};let o=0;for(const i of n){if(i.b)continue;const r=i.n&&Math.hypot(i.p[0][0]-xt.x,i.p[0][1]-xt.y)<xt.r&&xt.names.some(d=>i.n.includes(d)),c=i.k==="footway"&&/boardwalk/i.test(i.n??""),l=r?"acorn":c?"post":Ni.has(i.k)?"cobra":null;if(!l)continue;const h=qt[l],f=(i.w??6)/2+(l==="cobra"?1.6:.9);a(i.p,h.every,(d,m,w,g)=>{const b=l==="acorn"?[1,-1]:[Di(o,17)<.5?1:-1];for(const M of b){const x=d-g*f*M,u=m+w*f*M;e(x,u)&&s.push({x:+x.toFixed(2),y:+u.toFixed(2),dx:+(g*M).toFixed(4),dy:+(-w*M).toFixed(4),kind:l,side:M})}o++})}for(const i of t){if(i.k!=="timber"||i.p.length<2)continue;let r=0;for(let c=1;c<i.p.length;c++)r+=Math.hypot(i.p[c][0]-i.p[c-1][0],i.p[c][1]-i.p[c-1][1]);r<40||a(i.p,qt.post.every,(c,l,h,f)=>{const d=(i.w??2.5)/2-.15;s.push({x:+(c-f*d).toFixed(2),y:+(l+h*d).toFixed(2),dx:+f.toFixed(4),dy:+(-h).toFixed(4),kind:"post",side:1,pier:!0})})}return s}const Lt={cobra:.4,acorn:.32,post:.24,porch:.28,car:.45},Pi=7,Li=48,B=(n,t,e)=>new _(n,t,e);function W(n,t){const e=new D(t),s=n.attributes.position.count,a=new Float32Array(s*3);for(let o=0;o<s;o++)a.set([e.r,e.g,e.b],o*3);return n.setAttribute("color",new St(a,3)),n.index?n.toNonIndexed():n}function zi(){const n=yt([W(new et(.11,.15,8.4,7).translate(0,4.2,0),4932153),W(new et(.03,.03,1.9,5).rotateZ(Math.PI/2).translate(.95,7.8,0),7040882),W(new K(.62,.16,.3).translate(1.95,7.75,0),7040882)]),t=yt([W(new et(.07,.12,3.5,8).translate(0,1.75,0),1842978),W(new et(.18,.14,.18,8).translate(0,3.55,0),1842978),W(new os(.12,.22,8).translate(0,4.2,0),1842978)]),e=yt([W(new K(.14,2.3,.14).translate(0,1.15,0),6969928),W(new K(.22,.08,.22).translate(0,2.42,0),2762274)]);return{cobra:{geo:n,lens:B(1.95,7.66,0),lensGeo:new K(.5,.02,.24)},acorn:{geo:t,lens:B(0,3.9,0),lensGeo:new as(.21,12,8)},post:{geo:e,lens:B(0,2.3,0),lensGeo:new K(.16,.16,.16)}}}const Ui=`
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
  }`,Ci=`
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
  }`;class Gi{constructor(t,e){this.game=t,this.lights=e,this.group=new _t,this.group.name="night",this.on=0;const{grid:s,features:a}=t,o=(u,y)=>(s.groundAt??s.heightAt).call(s,u,y),i=(u,y)=>{const p=s.surfaceName?.(u,y)??"grass";return!/sea|water|marsh|pool|building/.test(p)};this.lamps=Ii(a?.roads??[],a?.piers??[],i);const r=zi(),c=new dt,l=new es,h=B(0,1,0),f=B(1,1,1),d=new Ut({vertexColors:!0,roughness:.85,metalness:0});this.lensMat=new ts({color:16777215,toneMapped:!0}),this.lensMat.color.setScalar(.25);const m=[],w=[],g={};for(const u of this.lamps)(g[u.kind]??=[]).push(u);for(const[u,y]of Object.entries(g)){const p=r[u],S=qt[u],k=new Ot(p.geo,d,y.length);k.name=`night:${u}`,k.castShadow=u!=="post";const T=new Ot(p.lensGeo,this.lensMat,y.length);T.name=`night:${u}:lens`,y.forEach((E,rt)=>{const I=o(E.x,E.y);l.setFromAxisAngle(h,Math.atan2(E.dy,E.dx)),c.compose(B(E.x,I,-E.y),l,f),k.setMatrixAt(rt,c);const v=p.lens.clone().applyQuaternion(l).add(B(E.x,I,-E.y));c.compose(v,l,f),T.setMatrixAt(rt,c),m.push({x:v.x,z:v.z,y:I+.04,r:S.pool,gain:Lt[u]}),w.push({pos:[v.x,v.y-.25,v.z],colour:S.colour,intensity:S.candela,range:S.reach,priority:0})}),k.instanceMatrix.needsUpdate=T.instanceMatrix.needsUpdate=!0,k.computeBoundingSphere(),T.computeBoundingSphere(),this.group.add(k,T)}this.statics=e?.requestStatic(w,"street")??[],this.poolU={colour:{value:new D(16763274)},on:{value:0},camPos:{value:new _}};const b=new nt({uniforms:this.poolU,vertexShader:Ui,fragmentShader:Ci,transparent:!0,depthWrite:!1,blending:at,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,toneMapped:!1}),M=new ss(2,2).rotateX(-Math.PI/2);this.pools=this.makePools(M,b,m,256),this.porch=[],this.carU={...this.poolU,colour:{value:new D(16773848)}};const x=b.clone();x.uniforms=this.carU,this.carPools=this.makePools(M,x,[],Li),this.cars=[],t.scene.add(this.group),this.windows=this.wrapFacades(t.buildings?.group?.children?.[0]?.material),this.stats={lamps:this.lamps.length,kinds:Object.fromEntries(Object.entries(g).map(([u,y])=>[u,y.length]))}}makePools(t,e,s,a){const o=s.length+a,i=new Ot(t,e,o);i.name="night:pools",i.geometry=t.clone();const r=new Float32Array(o);i.geometry.setAttribute("gain",new is(r,1));const c=new dt;return s.forEach((l,h)=>{c.makeScale(l.r,1,l.r).setPosition(l.x,l.y,l.z),i.setMatrixAt(h,c),r[h]=l.gain}),i.count=s.length,i.frustumCulled=!1,i.renderOrder=1,this.group.add(i),{mesh:i,gain:r,used:s.length,max:o}}add({pos:t,kind:e="porch",colour:s=16766106,intensity:a=12,range:o=8,radius:i=3.5}){const r=this.pools;if(r.used<r.max){const l=new dt().makeScale(i,1,i).setPosition(t[0],t[1]-2.2,t[2]);r.mesh.setMatrixAt(r.used,l),r.gain[r.used]=Lt[e]??.14,r.used++,r.mesh.count=r.used,r.mesh.instanceMatrix.needsUpdate=!0,r.mesh.geometry.attributes.gain.needsUpdate=!0}const[c]=this.lights?.requestStatic([{pos:t,colour:s,intensity:a,range:o,priority:1}],"street")??[];return this.porch.push(c),c}car(t,{front:e=B(0,0,-1),ahead:s=4.5,height:a=.8}={}){const o=this.lights?.request({pos:[0,0,0],colour:16773848,intensity:0,range:22,priority:1}),i={object:t,front:e.clone().normalize(),ahead:s,height:a,light:o,remove:()=>{o?.release(),this.cars.splice(this.cars.indexOf(i),1)}};return this.cars.push(i),i}wrapFacades(t){if(!t||t.userData.lookWindows)return null;const e={lookWinLit:{value:0},lookWinGain:{value:1.4}},s=t.onBeforeCompile,a=t.customProgramCacheKey;return t.onBeforeCompile=(o,i)=>{s?.call(t,o,i),Object.assign(o.uniforms,e),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
}`))},t.customProgramCacheKey=()=>`${a?a.call(t):""}+look-windows`,t.userData.lookWindows=!0,t.needsUpdate=!0,e}update(t,e){const s=this.game.sky,a=s.weather??{},o=this.on=Oi(s.dirWorld[2],a.dark??0);this.poolU.on.value=o,this.poolU.camPos.value.copy(e.position),this.lensMat.color.setScalar(.25+o*Pi).multiply(this._warm??=new D(16767400)),this.lights&&(this.lights.levels.street=o),this.windows&&(this.windows.lookWinLit.value=Fi(s.hour,o));const i=this.carPools,r=this._m4??=new dt,c=this._f??=new _,l=this._p??=new _;let h=0;for(const f of this.cars){f.object.updateWorldMatrix(!0,!1),c.copy(f.front).transformDirection(f.object.matrixWorld),f.object.getWorldPosition(l);const d=l.x+c.x*f.ahead,m=l.z+c.z*f.ahead;if(f.light&&(f.light.pos.set(d,l.y+f.height,m),f.light.intensity=40*o),h<i.max){const w=l.y;r.makeRotationY(Math.atan2(c.x,c.z)).scale(this._s??=new _(2.6,1,7)).setPosition(l.x+c.x*(f.ahead+4),w+.05,l.z+c.z*(f.ahead+4)),i.mesh.setMatrixAt(h,r),i.gain[h]=Lt.car,h++}}i.mesh.count=h,h&&(i.mesh.instanceMatrix.needsUpdate=!0,i.mesh.geometry.attributes.gain.needsUpdate=!0),this.carU.on.value=o}}const de=Object.freeze({mobile:Object.freeze({scaleMin:.5,scaleMax:.75,aa:"fxaa",bloom:!1,dof:!1,shadows:"low",ao:!1}),low:Object.freeze({scaleMin:.5,scaleMax:.85,aa:"fxaa",bloom:!1,dof:!1,shadows:"off",ao:!1}),medium:Object.freeze({scaleMin:.6,scaleMax:1,aa:"fxaa",bloom:!0,dof:!0,shadows:"low",ao:!1}),high:Object.freeze({scaleMin:.7,scaleMax:1,aa:"fxaa",bloom:!0,dof:!0,shadows:"high",ao:!1})}),Wi=(n,t)=>n.aa==="auto"?t>=1.5?"fxaa":"msaa":n.aa,Bi=n=>de[n]??de.high;function Yi(n,t=ws(typeof location>"u"?"":location.search)){const e=new ks(n.renderer,n.sky,t);e.lights=new Is(n.scene),e.lights.adopt(n.scene),e.shadows=new Mi(n),e.scaler=new pi;const s=new Set(typeof location>"u"?[]:Tt.map(o=>o.key).filter(o=>new URLSearchParams(location.search).has(o)));e.setQuality=o=>{const i=Bi(o);e.quality=o,e.scaler.setRange(i.scaleMin,i.scaleMax);const r=n.renderer.getPixelRatio();s.has("aa")||e.set("aa",Wi(i,r)),s.has("bloom")||e.set("bloom",i.bloom),s.has("dof")||e.set("dof",i.dof),s.has("ao")||e.set("ao",i.ao),e.presetShadows=i.shadows,e.options.shadows==="auto"&&e.shadows.setLevel(i.shadows)},s.has("shadows")&&e.set("shadows",e.options.shadows),s.has("scale")&&e.set("scale",e.options.scale);let a=null;try{a=globalThis.localStorage??null}catch{a=null}if(e.setQuality(a?hs(a).quality:"high"),typeof addEventListener=="function"&&addEventListener("ts:settings",o=>e.setQuality(o.detail?.quality)),typeof requestAnimationFrame=="function"){let o=0;const i=r=>{o&&e.scaler.sample(r-o,performance.now()-r),o=r,requestAnimationFrame(i)};requestAnimationFrame(i)}return n.sky.attachRenderer?.(n.renderer),e.weather=new ki(n,e.lights),e.night=new Gi(n,e.lights),e.fire=new js(n,e.lights),e.fireworks=new ti(n,e.lights),n.onUpdate?.(o=>{e.weather.update(o,n.camera),e.night.update(o,n.camera),e.fire.update(o,n.camera,n.renderer),e.fireworks.update(o,n.camera,n.renderer)}),e}export{Yi as m};
