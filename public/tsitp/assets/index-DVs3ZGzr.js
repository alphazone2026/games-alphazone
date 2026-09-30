import{d as it}from"./memory-Bok-Xqur.js";import{c as rt,d as ct,o as V,e as b,p as J,i as lt,f as dt,k as ft,W as pt,b as ut}from"./layers-LBLJEXAs.js";import{Q as X,l as ht,t as gt,s as mt,C as P,b as bt,R as z}from"./settings-9dmrdRDI.js";const vt=`
.cf {
  position: fixed; inset: 0; z-index: 30; font-family: var(--body); color: var(--ink);
  -webkit-font-smoothing: antialiased; user-select: none; overflow: hidden;
}
.cf * { box-sizing: border-box; }
.cf :where(button) { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; text-align: left; }
.cf-gone { display: none !important; }

/* The picture behind: darkened only where the words are (the left, the foot),
   so the town stays the town. */
.cf-shade {
  position: absolute; inset: 0; pointer-events: none;
  background:
    linear-gradient(90deg, rgba(14, 18, 26, .78) 0%, rgba(14, 18, 26, .5) 30%, rgba(14, 18, 26, 0) 58%),
    linear-gradient(0deg, rgba(20, 16, 18, .55) 0%, rgba(20, 16, 18, 0) 26%),
    radial-gradient(ellipse at 85% 10%, rgba(246, 207, 115, .18), rgba(246, 207, 115, 0) 45%);
}
.cf-veil { position: absolute; inset: 0; background: #120d0c; opacity: 1; pointer-events: none; transition: opacity var(--slow) ease; }
.cf.cf-panel-open .cf-shade { background: rgba(10, 14, 20, .55); }

/* ------------------------------------------------------------ the title */
.cf-title {
  position: absolute; left: 7vw; top: 0; bottom: 0; width: min(640px, 86vw);
  display: flex; flex-direction: column; justify-content: center; gap: 5vh; padding-bottom: 6vh;
  transition: opacity var(--mid) ease, transform var(--mid) var(--ease);
}
.cf.cf-panel-open .cf-title { opacity: 0; transform: translateX(calc(var(--rise) * -3)); pointer-events: none; }
.cf-kicker { font: 400 26px/1 var(--hand); color: var(--sun); letter-spacing: .01em; transform: rotate(-2deg); transform-origin: left; }
:root.ts-nohand .cf-kicker { font: 600 13px/1 var(--body); letter-spacing: .28em; text-transform: uppercase; transform: none; }
.cf-name {
  margin: 10px 0 0; font: 400 var(--t-title)/.95 var(--serif); letter-spacing: -.01em;
  text-shadow: 0 2px 30px rgba(0, 0, 0, .4);
}
.cf-name em { font-style: italic; color: #fff4dc; }
.cf-under { display: block; width: min(440px, 70vw); height: 22px; margin: 6px 0 0 4px; color: var(--coral); }
.cf-under svg { width: 100%; height: 100%; display: block; }

.cf-menu { display: flex; flex-direction: column; gap: 2px; align-items: flex-start; }
.cf-item {
  position: relative; display: grid; grid-template-columns: 30px auto; align-items: baseline; column-gap: 10px;
  padding: 9px 22px 9px 6px; border-radius: var(--r-m);
  font-size: var(--t-menu); font-weight: 600; letter-spacing: .005em; color: var(--ink-dim);
  text-shadow: 0 1px 12px rgba(0, 0, 0, .45);
  transition: color var(--fast), background var(--fast), transform var(--fast) var(--ease);
}
.cf-item .cf-mark { width: 26px; height: 16px; color: var(--sun); opacity: 0; transform: translateX(-6px); transition: opacity var(--fast), transform var(--fast) var(--ease); align-self: center; }
.cf-item .cf-mark svg { width: 26px; height: 16px; display: block; }
.cf-item small { grid-column: 2; font: 400 19px/1.2 var(--hand); color: var(--sun); margin-top: 2px; opacity: .9; }
:root.ts-nohand .cf-item small { font: 500 14px/1.3 var(--body); }
.cf-item.cf-focus { color: var(--ink); background: linear-gradient(90deg, rgba(251, 246, 236, .1), rgba(251, 246, 236, 0)); transform: translateX(var(--rise)); }
.cf-item.cf-focus .cf-mark { opacity: 1; transform: none; }
.cf-item[disabled] { opacity: .45; cursor: default; }

/* ------------------------------------------------------------ the foot */
.cf-foot {
  position: absolute; left: 7vw; right: 16px; bottom: 16px; display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;
  pointer-events: none;
}
.cf-hints { display: flex; gap: 18px; font-size: var(--t-hint); color: var(--ink-dim); white-space: nowrap; }
.cf-hints span { display: inline-flex; align-items: center; gap: 7px; }
.cf-key {
  display: inline-grid; place-items: center; min-width: 24px; height: 22px; padding: 0 6px; border-radius: 6px;
  background: rgba(251, 246, 236, .12); box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .25); font: 700 12px/1 var(--body); color: var(--ink);
}
.cf-key.cf-pad { min-width: 22px; width: 22px; padding: 0; border-radius: 50%; }
.cf-credit {
  max-width: 54ch; text-align: right; font-size: 11px; line-height: 1.35; color: var(--ink-faint); pointer-events: auto;
}
.cf-credit a { color: inherit; }

/* ------------------------------------------------------------ panels */
.cf-sheet {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 5vh 16px 60px; pointer-events: none;
}
/* The panel never outgrows the screen: its body scrolls instead. Settings is
   one fixed height, so changing tab never makes the panel jump. */
.cf-panel {
  pointer-events: auto; width: min(900px, 100%); max-height: calc(100vh - 5vh - 60px); display: flex; flex-direction: column;
  background: linear-gradient(170deg, rgba(24, 32, 44, .9), rgba(14, 19, 28, .94));
  border: 1px solid var(--line); border-radius: var(--r-l); box-shadow: 0 30px 80px rgba(0, 0, 0, .45);
  -webkit-backdrop-filter: blur(14px) saturate(.9); backdrop-filter: blur(14px) saturate(.9);
  animation: cf-in var(--mid) var(--ease) both;
}
@keyframes cf-in { from { opacity: 0; transform: translateY(var(--rise)); } to { opacity: 1; transform: none; } }
.cf-panel > header { padding: 30px 36px 18px; }
.cf-panel h2 { margin: 8px 0 0; font: 400 var(--t-h2)/1.1 var(--serif); }
.cf-panel .cf-lede { margin: 8px 0 0; font-size: var(--t-small); color: var(--ink-dim); max-width: 60ch; line-height: 1.45; }
.cf-body { padding: 4px 36px 32px; overflow: auto; min-height: 0; flex: 1 1 auto; }
.cf-panel.cf-tall { height: min(700px, calc(100vh - 5vh - 60px)); }

/* the slots */
.cf-slots { display: grid; gap: 12px; }
.cf-slot {
  width: 100%; display: grid; grid-template-columns: 58px 1fr auto; align-items: center; gap: 18px; padding: 16px 20px;
  border-radius: var(--r-m); background: var(--wash); border: 2px solid var(--line);
  transition: border-color var(--fast), background var(--fast);
}
.cf-slot b { font: 400 34px/1 var(--serif); color: var(--sun); text-align: center; }
.cf-slot-t { font-size: 19px; font-weight: 650; } .cf-slot-s { margin-top: 3px; font-size: var(--t-small); color: var(--ink-dim); }
.cf-slot-who { text-align: right; font: 400 22px/1.1 var(--hand); color: var(--sun); }
.cf-slot-who span { display: block; margin-top: 4px; font: 500 13px/1 var(--body); color: var(--ink-dim); }
:root.ts-nohand .cf-slot-who { font: 600 17px/1.1 var(--body); }
.cf-slot.cf-empty .cf-slot-t { color: var(--ink-dim); font-weight: 500; font-style: italic; }
.cf-slot.cf-damaged .cf-slot-t { color: var(--coral); }
.cf-slot.cf-focus { border-color: var(--sun); background: rgba(246, 207, 115, .08); }
.cf-slot[disabled] { cursor: default; opacity: .55; }

.cf-confirm { display: grid; gap: 18px; }
.cf-confirm p { margin: 0; font-size: var(--t-body); line-height: 1.5; max-width: 52ch; }
.cf-btns { display: flex; flex-wrap: wrap; gap: 12px; }
.cf-btn {
  padding: 13px 24px; border-radius: var(--r-m); font-size: 17px; font-weight: 700; background: var(--wash); border: 2px solid var(--line) !important;
  transition: border-color var(--fast), background var(--fast);
}
.cf-btn.cf-go { background: var(--sun); color: var(--on-sun) !important; border-color: var(--sun) !important; }
.cf-btn.cf-focus { border-color: var(--sun) !important; }
.cf-btn.cf-go.cf-focus { box-shadow: 0 0 0 3px rgba(246, 207, 115, .35); }

/* the settings */
.cf-tabs { display: flex; gap: 4px; padding: 0 36px; border-bottom: 1px solid var(--line); }
.cf-tab {
  position: relative; padding: 12px 14px 14px; font-size: 16px; font-weight: 600; color: var(--ink-dim) !important;
  transition: color var(--fast);
}
.cf-tab::after { content: ''; position: absolute; left: 14px; right: 14px; bottom: -1px; height: 3px; border-radius: 2px; background: var(--sun); transform: scaleX(0); transition: transform var(--fast) var(--ease); }
.cf-tab.cf-on { color: var(--ink) !important; } .cf-tab.cf-on::after { transform: none; }
.cf-tab-keys { margin-left: auto; align-self: center; display: flex; gap: 6px; }
.cf-rows { display: grid; gap: 8px; padding-top: 18px; }
.cf-row {
  display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 24px; padding: 13px 18px; border-radius: var(--r-m);
  background: var(--wash); border: 2px solid transparent; transition: border-color var(--fast), background var(--fast);
}
.cf-row.cf-focus { border-color: var(--sun); background: rgba(246, 207, 115, .07); }
.cf-row-t { font-size: 17px; font-weight: 650; } .cf-row-s { margin-top: 3px; font-size: 14px; color: var(--ink-dim); line-height: 1.4; max-width: 52ch; }
.cf-seg { display: inline-flex; padding: 3px; border-radius: 10px; background: rgba(0, 0, 0, .3); }
.cf-seg button { padding: 7px 13px; border-radius: 7px; font-size: 15px; color: var(--ink-dim) !important; transition: background var(--fast), color var(--fast); }
.cf-seg button.cf-on { background: var(--sea-deep); color: var(--ink) !important; }
.cf-range { display: flex; align-items: center; gap: 14px; }
.cf-range output { min-width: 4ch; text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--ink); }
.cf-range input { -webkit-appearance: none; appearance: none; width: 220px; height: 6px; border-radius: 3px; background: linear-gradient(90deg, var(--sea) var(--p, 50%), rgba(251, 246, 236, .16) var(--p, 50%)); outline: none; cursor: pointer; }
.cf-range input::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--ink); box-shadow: 0 1px 6px rgba(0, 0, 0, .4); }
.cf-range input::-moz-range-thumb { width: 20px; height: 20px; border: 0; border-radius: 50%; background: var(--ink); }
.cf-sample { margin: 14px 0 4px; text-align: center; font-size: calc(clamp(19px, 2vw, 26px) * var(--ts)); line-height: 1.5; font-weight: 500; }
.cf-sample span { background: var(--plate); padding: .12em .5em; border-radius: 6px; -webkit-box-decoration-break: clone; box-decoration-break: clone; }
.cf-sample-bg { padding: 22px 16px; border-radius: var(--r-m); background: linear-gradient(180deg, #9cc6dc 0%, #e8d8b6 62%, #d9c49c 100%); }
.cf-keys { display: grid; grid-template-columns: 1fr auto auto; gap: 8px 22px; margin-top: 18px; padding: 16px 18px; border-radius: var(--r-m); background: var(--wash); font-size: 15px; }
.cf-keys > div:nth-child(3n+1) { color: var(--ink-dim); }
.cf-keys h4 { grid-column: 1 / -1; margin: 0 0 4px; font: 600 12px/1 var(--body); letter-spacing: .2em; text-transform: uppercase; color: var(--sun); }

/* the settings page's tabs, inside a panel's body */
.cf-body > .cf-tabs { padding: 0; margin: 0 0 2px; }

/* the credits */
.cf-credits { display: grid; gap: 22px; font-size: var(--t-small); line-height: 1.55; color: var(--ink-dim); max-width: 64ch; }
.cf-credits h4 { margin: 0 0 6px; font: 600 12px/1 var(--body); letter-spacing: .2em; text-transform: uppercase; color: var(--sun); }
.cf-credits p { margin: 0; } .cf-credits a { color: var(--ink); }
.cf-sign { font: 400 26px/1.2 var(--hand); color: var(--sun); transform: rotate(-1.5deg); transform-origin: left; }

.cf-toast {
  position: absolute; left: 50%; top: 5vh; transform: translateX(-50%); padding: 11px 20px; border-radius: 10px; background: var(--plate-hi);
  font-weight: 600; animation: cf-in var(--mid) var(--ease) both;
}

@media (max-width: 760px) {
  .cf-title { left: 20px; }
  .cf-foot { left: 16px; flex-direction: column; align-items: flex-start; }
  .cf-credit { text-align: left; }
  .cf-row { grid-template-columns: 1fr; }
  .cf-range input { width: 100%; }
  .cf-panel > header, .cf-body { padding-left: 20px; padding-right: 20px; } .cf-tabs { overflow-x: auto; }
}
`;function R(n){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n=="string"&&/^\d{4}-\d\d-\d\d/.test(n)){const e=Date.parse(n);return Number.isFinite(e)?e:null}return null}function Y(n){const e=n.filter(o=>!o.empty&&!o.reason);if(!e.length)return null;let t=null,r=-1/0;for(const o of e){const s=R(o.at)??R(o.when);s!=null&&s>r&&(t=o,r=s)}return(t??e[0]).n}function xt(n){const e=R(n);return e==null?n?String(n):"":new Date(e).toLocaleString("en-AU",{day:"numeric",month:"short",hour:"numeric",minute:"2-digit"})}function G(n,e={}){return n.map(t=>{if(t.empty)return{n:t.n,state:"empty",title:"Empty",detail:""};if(t.reason)return{n:t.n,state:"damaged",title:"This save can’t be opened",detail:t.reason};const r=e.episodeTitle?.(t.ep)??null,o=/^e(\d+)$/.exec(t.ep??"")?.[1],s=e.sceneTitle?.(t.ep,t.scene)??null,d=o?`Episode ${o}${r?`: ${r}`:""}`:r??"Not started";return{n:t.n,state:"full",title:d,detail:s??"",name:t.name??null,when:xt(t.at??t.when)}})}function yt(n){const{T:e,U:t,N:r}=n.island,o=(k,L)=>({x:e[0]+k*t[0]+L*r[0],y:e[1]+k*t[1]+L*r[1]}),s=Math.atan2(-r[0],-r[1]),d=Math.atan2(t[0],t[1]),p=Math.atan2(-t[0],-t[1]),u=n.fisherHouse.s;return[{name:"the beach",secs:32,from:{...o(u+70,246),dist:60,yaw:p+.5,pitch:.1},to:{...o(u+10,246),dist:56,yaw:p+.4,pitch:.09}},{name:"the houses from the sand",secs:30,from:{...o(u-30,232),dist:130,yaw:s-.08,pitch:.15},to:{...o(u+20,232),dist:105,yaw:s+.06,pitch:.13}},{name:"up the shore",secs:30,from:{...o(u-110,246),dist:50,yaw:d-.5,pitch:.09},to:{...o(u-170,246),dist:54,yaw:d-.4,pitch:.1}}]}const wt=19,K=1.4,kt=n=>n*n*(3-2*n),St=(n,e,t)=>n+(e-n)*t;function $t(n,{veil:e=()=>{},still:t=()=>!1}={}){const r=yt(n.META);let o=!1,s=0,d=0,p=null,u=null;function k(){const c=r[d],h=t()?.5:kt(Math.min(1,s/c.secs)),l={};for(const g of["x","y","dist","yaw","pitch"])l[g]=St(c.from[g],c.to[g],h);Object.assign(n.view,l);const m=t()?K:Math.min(s,c.secs-s);e(Math.max(0,1-m/K))}function L(c){o&&(t()||(s+=c,s>=r[d].secs&&(s=0,d=(d+1)%r.length)),k())}return{moments:r,get on(){return o},start(){o||(o=!0,u={mode:n.mode,hour:n.sky.hour,view:{...n.view}},n.setMode("fly"),n.sky.setHour(wt),s=0,d=0,k(),p=n.onUpdate(L))},stop(){if(o)return o=!1,p?.(),p=null,e(0),n.sky.setHour(u.hour),Object.assign(n.view,u.view),n.setMode(u.mode),u},seek(c,h=.5){d=(c%r.length+r.length)%r.length,s=r[d].secs*h,k()}}}function Lt(n,e){const t=X[e.quality]??X.high,{renderer:r,scene:o,sky:s}=n,d=Math.min(globalThis.devicePixelRatio||1,t.ratio);r.getPixelRatio()!==d&&r.setPixelRatio(d);const p=s.sun;p.shadow.mapSize.x!==t.shadowMap&&(p.shadow.mapSize.set(t.shadowMap,t.shadowMap),p.shadow.map?.dispose(),p.shadow.map=null),r.shadowMap.enabled!==t.shadows&&(r.shadowMap.enabled=t.shadows,o.traverse(u=>{const k=u.material;if(k)for(const L of Array.isArray(k)?k:[k])L.needsUpdate=!0}))}const j=new WeakMap;function Tt(n,e=globalThis.localStorage){if(j.has(n))return j.get(n);let t=ht(e);const r=globalThis.document;function o(){r?.documentElement.style.setProperty("--ts",String(gt(t))),r&&rt(t,r),n?.renderer&&Lt(n,t)}const s={store:e,get settings(){return{...t}},get(d){return t[d]},set(d,p){t[d]!==p&&(t={...t,[d]:p},mt(e,t),o(),dispatchEvent(new CustomEvent("ts:settings",{detail:{...t}})))},apply:o};return o(),j.set(n,s),s}function _(n){let e=[],t=0;const r={get index(){return t},get el(){return e[t]??null},get items(){return e},set(o){t=o;for(const s of n.querySelectorAll(".cf-focus"))e.includes(s)||s.classList.remove("cf-focus");e.forEach((s,d)=>s.classList.toggle("cf-focus",d===o)),e[o]?.scrollIntoView?.({block:"nearest"})},bind(o,s=!1){const d=t;e=o,e.forEach((p,u)=>p.addEventListener("pointerenter",()=>{p.disabled||r.set(u)})),s&&d<e.length?r.set(d):r.set(Math.max(0,e.findIndex(p=>!p.disabled)))},move(o){if(!e.length)return;let s=t;for(let d=0;d<e.length&&(s=ct(s,e.length,o),!!e[s].disabled);d++);r.set(s)},clear(){e.forEach(o=>o.classList.remove("cf-focus")),e=[],t=0}};return r}const Et={textSize:{s:"Small",m:"Medium",l:"Large",xl:"Largest"},autoAdvance:{true:"On",false:"Off"},timers:{normal:"Normal",relaxed:"Relaxed",off:"Off"},invertY:{false:"Off",true:"On"},run:{hold:"Hold",toggle:"Toggle"},quality:{low:"Low",medium:"Medium",high:"High"},reduceMotion:{false:"Off",true:"On"},plates:{soft:"Soft",solid:"Solid"},handwriting:{true:"On",false:"Off"},markers:{true:"Show",false:"Hide"},answers:{choices:"Choices",custom:"Custom"},locks:{false:"Off",true:"On"},clockPace:{.5:"Slow",1:"Normal",2:"Fast"}},Mt={low:"For older laptops: no shadows, and the picture at its plain size.",medium:"Softer shadows and a lighter picture.",high:"The sharpest picture, with long evening shadows."},N=[{id:"controls",label:"Controls",rows:[["lookSpeed","Mouse look speed","How far the view turns as the mouse moves."],["invertY","Invert looking up and down",null],["padLookSpeed","Controller look speed","The right stick."],["run","Running","Hold Shift to run, or press it once to start and again to stop."]]},{id:"story",label:"Story",rows:[["textSize","Text size","Subtitles, choices and the phone."],["autoAdvance","Lines move on by themselves","Off: press Space or click for each line."],["timers","Choice timers","Relaxed gives you twice as long. Off takes the clock away, and staying quiet is still a choice."],["answers","Answers","Custom: type your own replies at big moments. Choices: pick from options."],["locks","Show locked answers","See the answers you can’t pick yet, greyed out, with what they need."],["markers","Story markers on the map","Hide them to find your own way. Home is always on the map."],["clockPace","Time of day","How fast the town’s day goes by: 48, 24 or 12 minutes."]]},{id:"audio",label:"Audio",rows:[["master","Everything",null],["music","Music",null],["effects","The world","The sea, the town, footsteps, doors."],["voices","Voices",null]]},{id:"graphics",label:"Graphics",rows:[["quality","Quality",null]]},{id:"access",label:"Accessibility",rows:[["reduceMotion","Reduce motion","The title holds still, and screens fade rather than slide."],["plates","Text backgrounds","Solid makes the plate behind every line darker."],["handwriting","Handwritten touches","Off sets the handwritten notes in the plain face."]]}],Ct=[["Walk","W A S D","Left stick"],["Look","Mouse (click first)","Right stick"],["Run","Shift","Left stick click"],["Jump","Space","A"],["Talk, use","E","X"],["Phone (the menu)","Tab or Esc","View or Start"],["Map","M",""]],Q=(n,e)=>n.endsWith("Speed")?`${Math.round(e*100)}%`:String(e);function At(n){let e=0;return{id:"settings",label:"Settings",get tab(){return e},set tab(t){e=t},mount(t,r={}){const o=_(t),s=()=>n.settings;function d(c){const h=s()[c];if(c in z){const l=z[c],m=(h-l.min)/(l.max-l.min)*100;return`<span class="cf-range"><input type="range" min="${l.min}" max="${l.max}" step="${l.step}" value="${h}" style="--p:${m}%" tabindex="-1"><output>${Q(c,h)}</output></span>`}return`<span class="cf-seg">${P[c].map(l=>`<button data-v="${b(JSON.stringify(l))}" class="${h===l?"cf-on":""}" tabindex="-1">${b(Et[c][String(l)])}</button>`).join("")}</span>`}function p(c=!1){const h=N[e],l=J();let m=`<div class="cf-tabs">${N.map((x,S)=>`<button class="cf-tab${S===e?" cf-on":""}" data-t="${S}">${b(x.label)}</button>`).join("")}
          <span class="cf-tab-keys">${l?'<span class="cf-key">LB</span><span class="cf-key">RB</span>':'<span class="cf-key">Q</span><span class="cf-key">E</span>'}</span></div>`;m+=`<div class="cf-rows">${h.rows.map(([x,S,T])=>{const E=x==="quality"?Mt[s().quality]:T;return`<div class="cf-row" data-k="${x}"><div><div class="cf-row-t">${b(S)}</div>${E?`<div class="cf-row-s">${b(E)}</div>`:""}</div>${d(x)}</div>`}).join("")}</div>`,h.id==="story"&&(m+='<div class="cf-sample-bg"><p class="cf-sample"><span>A sample line, the size your subtitles will be.</span></p></div>'),h.id==="controls"&&(m+=`<div class="cf-keys"><h4>Keys and controller</h4>${Ct.map(([x,S,T])=>`<div>${b(x)}</div><div>${b(S)}</div><div>${b(T)}</div>`).join("")}</div>`),r.back&&(m+='<div class="cf-btns" style="margin-top:18px"><button class="cf-btn" data-a="back">Done</button></div>'),t.innerHTML=m;for(const x of t.querySelectorAll(".cf-tab"))x.addEventListener("click",()=>{e=Number(x.dataset.t),p()});const g=[...t.querySelectorAll(".cf-row")];for(const x of g){const S=x.dataset.k;for(const E of x.querySelectorAll(".cf-seg button"))E.addEventListener("click",()=>{n.set(S,JSON.parse(E.dataset.v)),p(!0)});const T=x.querySelector("input");T&&T.addEventListener("input",()=>{n.set(S,Number(T.value)),u(x,S)})}const y=t.querySelector('[data-a="back"]');y?.addEventListener("click",()=>r.back()),o.bind(y?[...g,y]:g,c)}function u(c,h){const l=c.querySelector("input"),m=c.querySelector("output"),g=z[h],y=s()[h];l.value=String(y),l.style.setProperty("--p",`${(y-g.min)/(g.max-g.min)*100}%`),m.textContent=Q(h,y)}function k(c){const h=o.el,l=h?.dataset?.k;return l?(n.set(l,bt(s(),l,c)),l in z?u(h,l):p(!0),!0):!1}const L=V(()=>p(!0));return p(),{intent(c){if(c==="up")return o.move(-1),!0;if(c==="down")return o.move(1),!0;if(c==="left"||c==="right")return k(c==="left"?-1:1);if(c==="tabPrev"||c==="tabNext")return e=(e+(c==="tabNext"?1:-1)+N.length)%N.length,p(),!0;if(c==="ok"||c==="start"){const h=o.el?.dataset?.k;if(h in P){const l=P[h];return n.set(h,l[(l.indexOf(s()[h])+1)%l.length]),p(!0),!0}return h||o.el?.click(),!0}return c==="back"&&r.back?(r.back(),!0):!1},tab(c){e=c,p()},destroy(){L(),o.clear(),t.innerHTML=""}}}}}function Ot(n,{host:e={},store:t=globalThis.localStorage,parent:r=document.body}={}){const o=r.ownerDocument;lt("ts-front-css",vt,o);const s=o.createElement("div");s.className="cf cf-gone",s.innerHTML=`
    <div class="cf-shade"></div>
    <section class="cf-title">
      <div class="cf-brand">
        <div class="cf-kicker">a summer next door</div>
        <h1 class="cf-name">Cousins <em>Beach</em></h1>
        <span class="cf-under">${dt(440)}</span>
      </div>
      <nav class="cf-menu"></nav>
    </section>
    <section class="cf-sheet"></section>
    <footer class="cf-foot"><div class="cf-hints"></div><div class="cf-credit"></div></footer>
    <div class="cf-veil"></div>`,r.appendChild(s);const d=a=>s.querySelector(a),p=d(".cf-menu"),u=d(".cf-sheet"),k=d(".cf-hints"),L=d(".cf-veil");d(".cf-credit").innerHTML=o.getElementById("credits")?.innerHTML??"";const c=Tt(n,t),h=At(c),l=_(s);let m=!1,g=null,y=null,x=null;const S=[],T=$t(n,{veil:a=>{L.style.opacity=String(a)},still:()=>c.get("reduceMotion")}),E=()=>it(t);function A(){y?.destroy(),y=null;const a=E(),f=Y(a),i=G(a,e).find($=>$.n===f),v=[...f?[["continue","Continue",[i.name,i.title].filter(Boolean).join(" · ")]]:[],["new","New game",null],["load","Load",null,!a.some($=>!$.empty&&!$.reason)],["settings","Settings",null],["credits","Credits",null]];p.innerHTML=v.map(([$,ot,W,st])=>`
      <button class="cf-item" data-go="${$}"${st?" disabled":""}>
        <span class="cf-mark">${pt}</span><span>${b(ot)}</span>${W?`<small>${b(W)}</small>`:""}
      </button>`).join("");const w=[...p.querySelectorAll(".cf-item")];for(const $ of w)$.addEventListener("click",()=>{$.disabled||Z($.dataset.go)});l.bind(w),s.classList.remove("cf-panel-open"),u.innerHTML="",g="title",q()}function Z(a){if(a==="continue"){const f=Y(E());f&&H(()=>e.onContinue?.(f))}else C(a)}function M(a,f,i,v,w=""){return`<div class="cf-panel ${w}" role="dialog" aria-label="${b(f)}">
      <header><div class="cf-kicker">${b(a)}</div><h2>${b(f)}</h2>${i?`<p class="cf-lede">${b(i)}</p>`:""}</header>
      <div class="cf-body">${v}</div></div>`}function B(a,f){return`<div class="cf-slots">${a.map(i=>{const v=i.state==="damaged"||i.state==="empty"&&!f;return`<button class="cf-slot cf-${i.state}" data-n="${i.n}"${v?" disabled":""}>
        <b>${i.n}</b>
        <div><div class="cf-slot-t">${b(i.title)}</div>${i.detail?`<div class="cf-slot-s">${b(i.detail)}</div>`:""}</div>
        <div class="cf-slot-who">${i.name?b(i.name):""}${i.when?`<span>${b(i.when)}</span>`:""}</div>
      </button>`}).join("")}</div>`}function C(a,f){if(y?.destroy(),y=null,s.classList.add("cf-panel-open"),g=a,a==="new"||a==="load"){const i=G(E(),e);u.innerHTML=a==="new"?M("a fresh start","New game","Choose where to keep this summer. Each slot holds one playthrough.",B(i,!0)):M("pick up where you were","Load",null,B(i,!1));const v=[...u.querySelectorAll(".cf-slot")];for(const w of v)w.addEventListener("click",()=>{w.disabled||tt(a,Number(w.dataset.n),i)});l.bind(v)}else if(a==="confirm"){const i=f;u.innerHTML=M(`slot ${i.n}`,"Start over in this slot?",null,`<div class="cf-confirm"><p>Slot ${i.n} holds ${i.name?`${b(i.name)}’s summer`:"a summer"} (${b(i.title)}). A new game here replaces it, and it can’t be brought back.</p>
         <div class="cf-btns"><button class="cf-btn">Choose another slot</button><button class="cf-btn cf-go">Start over</button></div></div>`);const v=[...u.querySelectorAll(".cf-btn")];v[0].addEventListener("click",()=>C("new")),v[1].addEventListener("click",()=>H(()=>e.onNewGame?.(i.n))),l.bind(v)}else if(a==="settings")u.innerHTML=M("make it yours","Settings",null,"","cf-tall"),l.clear(),y=h.mount(u.querySelector(".cf-body"),{back:A});else if(a==="credits"){u.innerHTML=M("with thanks","Credits",null,`<div class="cf-credits">
        <div><h4>The game</h4><p>Cousins Beach is a fan-made game set in the world of <i>The Summer I Turned Pretty</i>. Every word, choice and scene in it is written for the game.</p></div>
        <div><h4>Made in code</h4><p>Every building, tree, wave, face and sound is drawn or played by the game itself: there are no pictures, models or recordings in it.</p></div>
        <div><h4>The town</h4><p>${o.getElementById("credits")?.innerHTML??""}</p><p>Southport and Pleasure Island, North Carolina, laid out from that data.</p></div>
        <div class="cf-sign">see you on the sand</div>
        <div class="cf-btns"><button class="cf-btn">Back</button></div></div>`);const i=u.querySelector(".cf-btn");i.addEventListener("click",D),l.bind([i])}q()}function tt(a,f,i){const v=i.find(w=>w.n===f);if(a==="load"){v.state==="full"&&H(()=>e.onLoad?.(f));return}v.state==="full"?C("confirm",v):H(()=>e.onNewGame?.(f))}function D(){g==="confirm"?C("new"):g!=="title"&&A()}function O(a){return m?(y?.intent(a)||(a==="up"?l.move(-1):a==="down"?l.move(1):a==="back"?D():a==="ok"||a==="start"?l.el?.click():g==="confirm"&&(a==="left"||a==="right")&&l.move(a==="left"?-1:1)),!0):!1}const et=ft({prio:100,modal:()=>m,key(a){if(!m||a.metaKey||a.ctrlKey||a.altKey)return!1;const f=ut(a.key);return f?(a.preventDefault(),O(f)):!1},intent:O},n),nt=V(()=>q());function q(){const a=J(),f=w=>`<span class="cf-key">${w}</span>`,i=w=>`<span class="cf-key cf-pad">${w}</span>`,v=a?[[i("↕"),"Choose"],[i("A"),"Select"],...g!=="title"?[[i("B"),"Back"]]:[]]:[[f("↑")+f("↓"),"Choose"],[f("Enter"),"Select"],...g!=="title"?[[f("Esc"),"Back"]]:[]];g==="settings"&&v.splice(1,0,[a?i("↔"):f("←")+f("→"),"Change"]),k.innerHTML=v.map(([w,$])=>`<span>${w}${$}</span>`).join("")}function F(a){if(a)for(const f of["hud","credits","ts-hud"]){const i=o.getElementById(f);i&&(S.push([i,i.style.display]),i.style.display="none")}else for(const[f,i]of S.splice(0))f.style.display=i}function H(a){I(),a?.()}function I(){m&&(m=!1,y?.destroy(),y=null,s.classList.add("cf-gone"),T.stop(),F(!1))}function at(a,f=2.6){const i=o.createElement("div");i.className="cf-toast",i.textContent=a,i.style.zIndex="40",s.parentNode.appendChild(i),clearTimeout(x),x=setTimeout(()=>i.remove(),f*1e3)}const U={root:s,drift:T,prefs:c,get settings(){return c.settings},get isOpen(){return m},get screen(){return g},showTitle(){m||(m=!0,s.classList.remove("cf-gone"),F(!0),T.start(),L.style.opacity="1"),A()},open(a,f){m||U.showTitle(),a==="title"?A():C(a,f)},close:I,intent:O,setSetting:(a,f)=>c.set(a,f),tab(a){h.tab=a,g==="settings"&&y?.tab(a)},toast:at,destroy(){I(),et(),nt(),s.remove()}};return U}export{_ as a,Ot as m,Tt as p,At as s};
