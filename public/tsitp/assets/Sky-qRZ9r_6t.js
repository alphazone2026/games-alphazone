import{e as u,C as h,V as v,Z as p,_ as w,a as m,q as x,$ as y,a0 as g,a1 as M,K as z}from"./three.module-BGuaSsWU.js";import{P as k,w as C,s as D}from"./weather-DTQz8MlZ.js";const b=34,T=21.3,H=13.33,E=15.5,d=Math.PI/180;function P(l,t=b,e=T){const o=(l-H)*15*d,i=t*d,s=e*d,n=-Math.cos(s)*Math.sin(o),a=Math.sin(s)*Math.cos(i)-Math.cos(s)*Math.cos(o)*Math.sin(i),r=Math.sin(s)*Math.sin(i)+Math.cos(s)*Math.cos(o)*Math.cos(i);return[n,a,r]}function S(l){const t=(i,s,n)=>{const a=new h(i),r=new h(s);return a.lerp(r,Math.min(1,Math.max(0,n))).getHex()},e=Math.min(1,Math.max(0,(l-.02)/.35)),o=Math.min(1,Math.max(0,(l+.12)/.14));return{zenith:e>0?t(4156072,5211846,e):t(660004,4156072,o),horizon:e>0?t(15774330,12901612,e):t(1713208,15774330,o),sun:t(16751186,16773596,e),sunI:2.6*Math.min(1,Math.max(0,(l+.02)/.2)),skyFill:e>0?t(15911328,13624050,e):t(3820144,15911328,o),groundFill:t(2237998,7236178,e),fillI:.5+.55*Math.max(o*.6,e),skyLum:.12+.88*Math.max(o*.55,e)}}class U{constructor(t,e,o,i=[]){this.scene=t,this.sun=e,this.hemi=o,this.waters=i,this.weather={...k.clear,flash:0},this.uniforms={zenith:{value:new h},horizon:{value:new h},sunDir:{value:new u(0,1,0)},sunCol:{value:new h},moonDir:{value:f.clone()},night:{value:0},cloudTime:{value:0},cover:{value:.2},dark:{value:0},flash:{value:0},envPass:{value:0},wind:{value:new v(-.8,-.6)}};const s=new p({uniforms:this.uniforms,side:w,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          #ifdef USE_REVERSEDEPTHBUF
          gl_Position.z = gl_Position.w * 0.000001;         // always at the back (reversed depth: far is 0)
          #else
          gl_Position.z = gl_Position.w * 0.99999;          // always at the back
          #endif
        }`,fragmentShader:`
        uniform vec3 zenith, horizon, sunCol, sunDir, moonDir;
        uniform vec2 wind;
        uniform float night, cloudTime, cover, dark, flash, envPass;
        varying vec3 vDir;
        float h2(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
        float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s / 0.9375; }
        void main() {
          vec3 d = normalize(vDir);
          float up = max(d.y, 0.0), day = 1.0 - night;
          float mu = max(dot(d, sunDir), 0.0);
          // Sky: horizon to zenith, the horizon band widest near the sun.
          vec3 col = mix(horizon, zenith, pow(up, 0.45));
          col = mix(col, mix(horizon, sunCol, 0.35), pow(mu, 6.0) * (1.0 - up) * 0.6);
          // The haze along the horizon: paler, a band a few degrees deep.
          col = mix(col, mix(horizon, vec3(1.0), 0.18 * day), exp(-up * 22.0) * 0.4 * (1.0 - dark));

          // CLOUDS, on a flat deck: the sky's own fair-weather cumulus (the
          // cover rises through a July afternoon, look/weather.js dayCover) or
          // a weather's deck. They drift with the wind and slowly change shape
          // (two noises crossing over a few minutes).
          float cloudA = 0.0;
          if (d.y > 0.0) {
            vec2 cp = d.xz / (d.y + 0.12) * 1.3 + wind * cloudTime * 0.0035;
            // The shapes change by the noise drifting slowly under the drift
            // of the wind. (The first build crossed over between two noises:
            // an average of two is flatter than either, it seldom reached the
            // cover threshold, and the GPU slot's sky had almost no clouds.)
            vec2 morph = vec2(sin(cloudTime * 0.0023), cos(cloudTime * 0.0017)) * 1.5;
            float n = fbm(cp + morph);
            float th = mix(0.78, 0.22, cover);
            float dens = smoothstep(th, th + 0.2, n);
            // Toward the horizon one looks through more of the deck: banks.
            dens = clamp(dens * (1.0 + 1.4 * (1.0 - smoothstep(0.02, 0.22, d.y))), 0.0, 1.0);
            dens *= smoothstep(0.0, 0.05, d.y);
            // Lit from the sun's side: a step toward it on the deck, and the
            // denser that is, the more this cloud is in its own shade.
            vec2 toward = normalize(sunDir.xz + vec2(1e-4)) * 0.07;
            float n3 = fbm(cp + morph + toward);
            float lit = 1.0 - 0.6 * smoothstep(th - 0.05, th + 0.35, n3);
            vec3 shade = mix(horizon, zenith, 0.35) * 0.7;
            vec3 sunlit = mix(vec3(1.0), sunCol, 0.55);
            vec3 cCol = mix(shade, sunlit, lit * day);
            cCol += sunCol * pow(mu, 10.0) * 0.7 * (1.0 - dens) * day;            // the silver lining
            cCol *= 1.0 - dark * 0.6;
            cCol = mix(cCol, vec3(0.07, 0.085, 0.12), night * 0.85);
            cloudA = dens * mix(0.82, 1.0, cover);
            // High cirrus, streaked along the wind, on fair days only.
            float ci = fbm(vec2(cp.x * 0.22 + cp.y * 0.1, cp.y * 1.6) * 0.8 + wind * cloudTime * 0.002);
            float ciA = smoothstep(0.55, 0.85, ci) * 0.35 * (1.0 - cover) * day * smoothstep(0.05, 0.3, d.y);
            col = mix(col, mix(vec3(1.0), sunCol, 0.3), ciA);
            col = mix(col, cCol, cloudA);
          }
          // Below the horizon: the haze colour, so the edge of the world is soft.
          col = mix(col, horizon, smoothstep(0.02, -0.05, d.y));
          // The sun (not in the water's cube: the sea's own sun glint is the
          // light's specular, and a second one there would double it).
          float seen = 1.0 - cloudA * 0.92;
          col += sunCol * (smoothstep(0.99955, 0.99975, mu) * 6.0 * (1.0 - envPass) + pow(mu, 180.0) * 0.8 + pow(mu, 12.0) * 0.08) * day * seen;
          // The moon, and the stars, where the cloud lets them through.
          float mm = max(dot(d, moonDir), 0.0);
          col += vec3(0.9, 0.93, 1.0) * (smoothstep(0.99966, 0.9998, mm) * 2.4 + pow(mm, 600.0) * 0.25) * night * (1.0 - cloudA);
          float star = step(0.9985, h2(floor(d.xz / (d.y + 0.3) * 300.0))) * night * smoothstep(0.05, 0.3, d.y);
          star *= 0.7 + 0.3 * sin(cloudTime * 3.0 + h2(floor(d.xz / (d.y + 0.3) * 300.0) + 7.0) * 40.0);
          col += vec3(star) * (1.0 - cloudA);
          // Lightning: the whole cloud deck lights at once.
          col += vec3(0.75, 0.8, 1.0) * flash * (0.35 + 0.65 * cloudA);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new m(new x(12e3,48,24),s),this.mesh.name="sky",this.mesh.frustumCulled=!1,this.drawLast=!0,t.add(this.mesh),this.dirWorld=[0,0,1],this.dir3=new u(0,1,0),this.env=null,this.setHour(E)}setWeather(t){this.weather=t,this.setHour(this.hour)}setHour(t){this.hour=(t%24+24)%24;const[e,o,i]=P(this.hour);this.dirWorld=[e,o,i],this.dir3.set(e,i,-o).normalize();const s=this.weather,n=C(S(i),s);this.palette=n;const a=this.uniforms;a.zenith.value.setHex(n.zenith),a.horizon.value.setHex(n.horizon),a.sunCol.value.setHex(n.sun),a.sunDir.value.copy(this.dir3),a.night.value=Math.min(1,Math.max(0,-i*8)),a.cover.value=D(this.hour,s),a.dark.value=s.dark;const r=a.night.value;this.sun.color.setHex(n.sun).lerp(_,r),this.sun.intensity=Math.max(n.sunI,.45*r*s.sun),this.moonDir=r>0?f.clone():null;for(const c of this.waters)c.userData.skyEnv==null&&(c.userData.skyEnv=c.envMapIntensity),c.envMapIntensity=c.userData.skyEnv*(this.env?1:n.skyLum);this.hemi.color.setHex(n.skyFill),this.hemi.groundColor.setHex(n.groundFill),this.hemi.intensity=n.fillI+(s.flash??0)*1.5,this.scene.fog&&this.scene.fog.color.setHex(n.horizon),this.scene.background=(this.scene.background?.isColor?this.scene.background:new h).setHex(n.horizon),this.envDirty=!0}lightDir(t=new u){return this.moonDir&&this.dir3.y<0?t.copy(this.moonDir):(t.copy(this.dir3),t.y<.05&&(t.y=.05,t.normalize()),t)}attachRenderer(t){const e=new y(64,{type:g,generateMipmaps:!1}),o=new M(1,13e3,e),i=new z,s=new m(this.mesh.geometry,this.mesh.material);s.frustumCulled=!1,i.add(s,o),this.env={rt:e,cam:o,scene:i,renderer:t,age:1/0};for(const n of this.waters)n.envMap=e.texture;this.envDirty=!0,this.setHour(this.hour)}refreshEnv(t=0){const e=this.env;if(!e)return;e.age+=t;for(const s of this.waters)s.envMap!==e.rt.texture&&(s.envMap=e.rt.texture,s.needsUpdate=!0);if(!this.envDirty||e.age<A)return;const o=this.uniforms,i=o.flash.value;o.envPass.value=1,o.flash.value=0,e.cam.update(e.renderer,e.scene),o.envPass.value=0,o.flash.value=i,e.rt.texture.needsPMREMUpdate=!0,this.envDirty=!1,e.age=0}update(t,e){const o=this.uniforms,i=this.weather;o.cloudTime.value+=t*(.6+(i.wind??.6)),o.flash.value=i.flash??0,Math.floor(o.cloudTime.value/30)!==Math.floor((o.cloudTime.value-t)/30)&&(this.envDirty=!0),this.mesh.position.copy(e.position),this.mesh.renderOrder=this.drawLast?1e6:-10,this.refreshEnv(t)}}const f=new u(.45,.8,.4).normalize(),_=new h(12110079),A=2;export{U as S,P as s};
