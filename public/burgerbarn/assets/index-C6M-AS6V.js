var If=Object.defineProperty;var Df=(i,t,e)=>t in i?If(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ch=(i,t,e)=>Df(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Uf(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function Nf(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class oa{constructor(t="lifesim"){this.seed=String(t),this._next=Nf(Uf(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new oa(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}class kf{constructor(){this._handlers=new Map,this._log=[]}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this.off(t,e)}once(t,e){const n=this.on(t,s=>{n(),e(s)});return n}off(t,e){var n;(n=this._handlers.get(t))==null||n.delete(e)}emit(t,e={}){this._log.push({type:t,payload:e,at:performance.now()}),this._log.length>400&&this._log.shift();const n=this._handlers.get(t);if(n)for(const a of[...n])a(e,t);const s=t.split(":")[0]+":*",r=this._handlers.get(s);if(r)for(const a of[...r])a(e,t);const o=this._handlers.get("*");if(o)for(const a of[...o])a(e,t)}recent(t=40){return this._log.slice(-t)}}class Of{constructor(t,e={}){this.bus=t,this.minuteOfDay=e.minuteOfDay??10*60+30,this.dayIndex=e.dayIndex??0,this.scale=e.scale??.3,this.paused=!1,this.playtimeSeconds=0,this._lastHour=Math.floor(this.minuteOfDay/60)}get hour(){return Math.floor(this.minuteOfDay/60)}get minute(){return Math.floor(this.minuteOfDay%60)}get dayFraction(){return this.minuteOfDay/1440}get dayOfYear(){return this.dayIndex%364}get timeLabel(){const t=this.hour,e=this.minute,n=t<12?"am":"pm";return(t%12===0?12:t%12)+":"+String(e).padStart(2,"0")+n}update(t){this.paused||(this.playtimeSeconds+=t,this.advance(t*this.scale))}advance(t){if(t<=0)return;let e=t;for(;e>0;){const n=60-this.minuteOfDay%60,s=Math.min(e,n);this.minuteOfDay+=s,e-=s,this.minuteOfDay>=1440&&(this.minuteOfDay-=1440,this.dayIndex++,this.bus.emit("time:day",{dayIndex:this.dayIndex,clock:this}));const r=Math.floor(this.minuteOfDay/60)%24;r!==this._lastHour&&(this._lastHour=r,this.bus.emit("time:hour",{hour:r,clock:this}))}this.bus.emit("time:minute",{clock:this})}skipTo(t,e=0){const n=t*60+e,s=n>this.minuteOfDay?n-this.minuteOfDay:1440-this.minuteOfDay+n;return this.advance(s),s}serialize(){return{minuteOfDay:this.minuteOfDay,dayIndex:this.dayIndex,playtimeSeconds:this.playtimeSeconds}}load(t){t&&(this.minuteOfDay=t.minuteOfDay,this.dayIndex=t.dayIndex,this.playtimeSeconds=t.playtimeSeconds||0,this._lastHour=this.hour)}}const zf={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],cancel:["Escape"]},Ff=2e3;class Bf{constructor(t,e){this.bus=t,this.dom=e,this.bindings={...zf},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",t=>{if(t.repeat)return;Object.values(this.bindings).some(n=>n.includes(t.code))&&t.code!=="Escape"&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code),this.bus.emit("input:key",{code:t.code});for(const[n,s]of Object.entries(this.bindings))s.includes(t.code)&&this.bus.emit("action:"+n,{})}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",t=>this._failLock(t)),window.addEventListener("mousemove",t=>{this.locked&&(this.mouse.dx+=t.movementX,this.mouse.dy+=t.movementY)}),window.addEventListener("mousedown",t=>{this.pressed.add("Mouse"+t.button),this.down.add("Mouse"+t.button)}),window.addEventListener("mouseup",t=>this.down.delete("Mouse"+t.button)),window.addEventListener("wheel",t=>{this.bus.emit("input:wheel",{delta:Math.sign(t.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this.lockPending;this._settleLock(),e&&(this.locked=!1,console.warn("[input] pointer lock request refused",t||""),this.bus.emit("input:pointerlockfailed",{error:t||null}))}requestLock(){var e,n;if(this.locked||this.lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},Ff);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(n=t==null?void 0:t.catch)==null||n.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this.locked=!1,(t=document.exitPointerLock)==null||t.call(document)}isDown(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.down.has(e)):!1}wasPressed(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.pressed.has(e)):!1}axis(){let t=0,e=0;this.isDown("forward")&&(e+=1),this.isDown("back")&&(e-=1),this.isDown("right")&&(t+=1),this.isDown("left")&&(t-=1);const n=Math.hypot(t,e);return n>1?{x:t/n,y:e/n}:{x:t,y:e}}consumeMouse(){const t={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,t}endFrame(){this.pressed.clear()}}const Hf={ui:{gain:.8,duckable:!0},world:{gain:.9,duckable:!0},ambient:{gain:.45,duckable:!0},warn:{gain:1,duckable:!1}},Gf={ref:2,max:26,panWidth:.8,panNear:1.6},Vf={volume:.5,muted:!1},lh={preshift:{bus:"ui",gain:.45,layers:[{src:"tone",wave:"sine",freq:440,at:0,dur:.5,a:.08,d:.1,s:.6,r:.28,peak:.7},{src:"tone",wave:"sine",freq:660,at:.18,dur:.55,a:.08,d:.1,s:.6,r:.32,peak:.5}]},clock_on:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"square",freq:1760,at:0,dur:.05,a:.002,d:.02,s:0,r:.02,peak:.25,filter:{type:"lowpass",freq:4e3,q:.7}},{src:"tone",wave:"sine",freq:523.25,at:.1,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:659.25,at:.21,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:783.99,at:.32,dur:.42,a:.006,d:.08,s:.5,r:.3,peak:.8}]},clock_off:{bus:"ui",gain:.55,layers:[{src:"tone",wave:"sine",freq:783.99,at:0,dur:.24,a:.008,d:.08,s:.5,r:.14,peak:.7},{src:"tone",wave:"sine",freq:523.25,at:.16,dur:.6,a:.01,d:.12,s:.4,r:.44,peak:.7},{src:"tone",wave:"triangle",freq:261.63,at:.16,dur:.62,a:.01,d:.12,s:.4,r:.46,peak:.25}]},door_chime:{bus:"ui",gain:.55,spot:"queue",minGain:.35,layers:[{src:"tone",wave:"sine",freq:587.33,at:0,dur:.85,a:.004,d:.2,s:.3,r:.55,peak:.75},{src:"tone",wave:"sine",freq:783.99,at:.16,dur:1.05,a:.004,d:.22,s:.3,r:.7,peak:.7},{src:"tone",wave:"sine",freq:1567.98,at:.16,dur:.6,a:.004,d:.18,s:.1,r:.36,peak:.1}]},ticket_print:{bus:"world",gain:.8,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.34,a:.004,d:.02,s:.9,r:.05,peak:.55,filter:{type:"bandpass",freq:2600,q:3},lfo:{rate:26,depth:.9,target:"gain"}},{src:"tone",wave:"square",freq:1318.5,at:.34,dur:.07,a:.003,d:.03,s:0,r:.03,peak:.16}]},kiosk_order:{bus:"ui",gain:.75,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.06,a:.002,d:.03,s:0,r:.02,peak:.36,filter:{type:"lowpass",freq:3200,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.09,dur:.1,a:.002,d:.04,s:0,r:.05,peak:.33,filter:{type:"lowpass",freq:3200,q:.7}}]},order_taken:{bus:"world",gain:.6,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.01,s:0,r:.015,peak:.3,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"triangle",freq:659.25,to:987.77,at:.02,dur:.14,a:.004,d:.05,s:.4,r:.08,peak:.45}]},item_place:{bus:"world",gain:.7,layers:[{src:"noise",noise:"brown",at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.3,filter:{type:"lowpass",freq:900,to:320,q:.9}},{src:"tone",wave:"sine",freq:190,to:130,at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.22,jitter:.06}]},item_pickup:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:620,to:880,at:0,dur:.09,a:.003,d:.04,s:.2,r:.04,peak:.4,jitter:.04},{src:"noise",noise:"white",at:0,dur:.05,a:.002,d:.03,s:0,r:.02,peak:.14,filter:{type:"highpass",freq:1800,q:.8}}]},item_drop:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:520,to:330,at:0,dur:.11,a:.003,d:.05,s:.2,r:.05,peak:.36,jitter:.04}]},wrong_item:{bus:"warn",gain:.62,layers:[{src:"tone",wave:"sawtooth",freq:146.83,at:0,dur:.22,a:.004,d:.04,s:.7,r:.1,peak:.35,filter:{type:"lowpass",freq:900,to:500,q:1.2},lfo:{rate:22,depth:.5,target:"gain"}}]},order_complete:{bus:"ui",gain:.85,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.28,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"square",freq:1567.98,at:.08,dur:.07,a:.002,d:.03,s:0,r:.04,peak:.24,filter:{type:"lowpass",freq:4200,q:.7}},{src:"noise",noise:"brown",at:.17,dur:.2,a:.004,d:.09,s:.15,r:.1,peak:.4,filter:{type:"lowpass",freq:1400,to:380,q:.9}},{src:"tone",wave:"sine",freq:140,to:78,at:.17,dur:.22,a:.003,d:.1,s:.1,r:.1,peak:.35}]},order_lost:{bus:"warn",gain:.55,layers:[{src:"tone",wave:"triangle",freq:392,to:293.66,at:0,dur:.55,a:.008,d:.12,s:.5,r:.36,peak:.55,filter:{type:"lowpass",freq:1600,to:700,q:.9}},{src:"tone",wave:"sine",freq:196,to:146.83,at:0,dur:.58,a:.01,d:.14,s:.5,r:.38,peak:.3}]},grill_lay:{bus:"world",gain:.6,spot:"grill",layers:[{src:"noise",noise:"white",at:0,dur:.9,a:.03,d:.22,s:.35,r:.55,peak:.55,filter:{type:"bandpass",freq:3400,to:1500,q:.8}},{src:"noise",noise:"brown",at:0,dur:.35,a:.004,d:.12,s:.1,r:.18,peak:.3,filter:{type:"lowpass",freq:700,q:1}}]},fryer_drop:{bus:"world",gain:.65,spot:"fryer",layers:[{src:"noise",noise:"brown",at:0,dur:.14,a:.002,d:.06,s:.1,r:.07,peak:.45,filter:{type:"lowpass",freq:1100,to:300,q:1.4}},{src:"tone",wave:"sine",freq:130,to:82,at:0,dur:.16,a:.002,d:.07,s:.1,r:.08,peak:.3},{src:"noise",noise:"white",at:.05,dur:1.2,a:.1,d:.3,s:.4,r:.7,peak:.55,filter:{type:"bandpass",freq:1400,to:3e3,q:.7}}]},fryer_bed:{bus:"ambient",gain:.9,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"pink",a:1.6,d:0,s:1,r:1.2,peak:.9,filter:{type:"bandpass",freq:1900,q:.55}},{src:"noise",noise:"brown",a:2,d:0,s:1,r:1.2,peak:.5,filter:{type:"lowpass",freq:420,q:.7}}]},fryer_active:{bus:"ambient",gain:.85,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"white",a:.7,d:0,s:1,r:.6,peak:.62,filter:{type:"bandpass",freq:2900,q:.8},lfo:{rate:5.5,depth:.35,target:"gain"}}]},grill_bed:{bus:"ambient",gain:.7,spot:"grill",loop:!0,layers:[{src:"noise",noise:"brown",a:1.8,d:0,s:1,r:1.4,peak:.85,filter:{type:"lowpass",freq:300,q:.8}},{src:"tone",wave:"sine",freq:96,a:2,d:0,s:1,r:1.4,peak:.16}]},grill_active:{bus:"ambient",gain:.75,spot:"grill",loop:!0,layers:[{src:"noise",noise:"white",a:.6,d:0,s:1,r:.55,peak:.5,filter:{type:"bandpass",freq:3600,q:.7},lfo:{rate:8.5,depth:.45,target:"gain"}}]},cook_ready:{bus:"world",gain:.7,minGain:.28,layers:[{src:"tone",wave:"sine",freq:2093,at:0,dur:.28,a:.002,d:.09,s:.1,r:.18,peak:.45},{src:"tone",wave:"sine",freq:3136,at:0,dur:.18,a:.002,d:.07,s:.05,r:.1,peak:.16},{src:"tone",wave:"sine",freq:2093,at:.19,dur:.42,a:.002,d:.11,s:.1,r:.3,peak:.45},{src:"tone",wave:"sine",freq:3136,at:.19,dur:.24,a:.002,d:.08,s:.05,r:.14,peak:.16}]},cook_burnt:{bus:"warn",gain:.85,minGain:.7,ducks:{depth:.35,hold:1.1},layers:[{src:"tone",wave:"square",freq:466.16,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.34,filter:{type:"bandpass",freq:1500,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"tone",wave:"square",freq:311.13,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.22,filter:{type:"bandpass",freq:900,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.2,a:.04,d:.3,s:.45,r:.55,peak:.28,filter:{type:"bandpass",freq:5200,to:2600,q:.6}}]},warmer_expired:{bus:"warn",gain:.4,minGain:.22,layers:[{src:"tone",wave:"sine",freq:116,to:92,at:0,dur:.4,a:.006,d:.14,s:.3,r:.24,peak:.45},{src:"noise",noise:"brown",at:0,dur:.3,a:.006,d:.12,s:.1,r:.16,peak:.22,filter:{type:"lowpass",freq:500,to:200,q:1}}]},mop_swish:{bus:"world",gain:.9,layers:[{src:"noise",noise:"pink",at:0,dur:.42,a:.05,d:.1,s:.55,r:.24,peak:.72,filter:{type:"bandpass",freq:1200,to:380,q:.9}},{src:"noise",noise:"pink",at:.4,dur:.44,a:.06,d:.1,s:.55,r:.26,peak:.64,filter:{type:"bandpass",freq:420,to:1100,q:.9}}]},wipe_down:{bus:"world",gain:.8,layers:[{src:"noise",noise:"white",at:0,dur:.26,a:.03,d:.08,s:.5,r:.14,peak:.5,filter:{type:"bandpass",freq:2600,to:1200,q:1.1}},{src:"noise",noise:"white",at:.24,dur:.24,a:.03,d:.08,s:.5,r:.13,peak:.42,filter:{type:"bandpass",freq:1300,to:2400,q:1.1}}]},mess_made:{bus:"world",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.04,s:.1,r:.05,peak:.55,filter:{type:"lowpass",freq:640,to:240,q:1}}]},delivery_call:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.14,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:880,at:.32,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.46,dur:.18,a:.004,d:.02,s:.9,r:.08,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}}]},delivery_taken:{bus:"world",gain:.55,spot:"delivery_desk",layers:[{src:"noise",noise:"white",at:0,dur:.38,a:.02,d:.08,s:.6,r:.22,peak:.34,filter:{type:"highpass",freq:1600,q:.8},lfo:{rate:17,depth:.75,target:"gain"}},{src:"tone",wave:"triangle",freq:740,to:988,at:.3,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.3}]},delivery_done:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"triangle",freq:523.25,at:0,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:659.25,at:.12,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:880,at:.24,dur:.42,a:.005,d:.09,s:.4,r:.3,peak:.6},{src:"tone",wave:"sine",freq:1760,at:.24,dur:.3,a:.005,d:.08,s:.2,r:.2,peak:.12}]},violation:{bus:"warn",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:110,at:0,dur:.28,a:.004,d:.04,s:.8,r:.12,peak:.38,filter:{type:"lowpass",freq:700,q:1.4},lfo:{rate:14,depth:.6,target:"gain"}}]},scooter_start:{bus:"world",gain:.55,layers:[{src:"noise",noise:"white",at:0,dur:.3,a:.01,d:.1,s:.3,r:.16,peak:.3,filter:{type:"bandpass",freq:1800,to:700,q:1.2}},{src:"tone",wave:"sawtooth",freq:52,to:128,at:.05,dur:.85,a:.06,d:.1,s:.75,r:.35,peak:.34,filter:{type:"lowpass",freq:620,to:1100,q:1},lfo:{rate:9,depth:.3,target:"gain"}}]},scooter_stop:{bus:"world",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:122,to:44,at:0,dur:.55,a:.006,d:.1,s:.6,r:.34,peak:.34,filter:{type:"lowpass",freq:900,to:300,q:1},lfo:{rate:7,depth:.35,target:"gain"}}]},promoted:{bus:"ui",gain:.7,layers:[{src:"tone",wave:"square",freq:523.25,at:0,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:659.25,at:.11,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:783.99,at:.22,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:1046.5,at:.33,dur:.6,a:.004,d:.12,s:.4,r:.42,peak:.3,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"sine",freq:261.63,at:.33,dur:.65,a:.006,d:.14,s:.4,r:.46,peak:.28}]},purchase:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.26,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"triangle",freq:2093,at:.12,dur:.16,a:.002,d:.06,s:.1,r:.1,peak:.22},{src:"tone",wave:"triangle",freq:2637,at:.19,dur:.2,a:.002,d:.07,s:.1,r:.13,peak:.18}]},mute_off:{bus:"ui",gain:.5,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.5},{src:"tone",wave:"sine",freq:990,at:.1,dur:.22,a:.004,d:.07,s:.3,r:.14,peak:.42}]}},hh=["fryer_bed","grill_bed"],Zi=1e-4;class Wf{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const c=r.float()*2-1;o=(o+.02*c)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,c=0,l=0,h=0,u=0,d=0;for(let f=0;f<e;f++){const m=r.float()*2-1;o=.99886*o+m*.0555179,a=.99332*a+m*.0750759,c=.969*c+m*.153852,l=.8665*l+m*.3104856,h=.55*h+m*.5329522,u=-.7616*u-m*.016898,s[f]=(o+a+c+l+h+u+d+m*.5362)*.11,d=m*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function Xf(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),d=e.s??1,f=Math.max(.005,e.r??.05),m=i.createGain();m.gain.value=Zi,m.connect(n);let _,p=null;const g=r.rate??1;if(e.src==="noise")_=i.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=g;else{_=i.createOscillator(),_.type=e.wave||"sine";const D=e.jitter||0,y=D?1+(r.jitterRoll??0)*D:1,w=Math.max(8,(e.freq??440)*y*g);if(p=_.frequency,p.setValueAtTime(w,a),e.to!=null&&!o){const U=Math.max(8,e.to*y*g),N=a+c;e.glide==="lin"?p.linearRampToValueAtTime(U,N):p.exponentialRampToValueAtTime(U,N)}}let v=_,x=null;if(e.filter){const D=i.createBiquadFilter();D.type=e.filter.type||"lowpass",D.Q.value=e.filter.q??1;const y=Math.max(20,e.filter.freq??1e3);D.frequency.setValueAtTime(y,a),e.filter.to!=null&&!o&&D.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),x=D.frequency,v.connect(D),v=D}let M=null,A=null;if(e.lfo&&e.lfo.rate>0){M=i.createOscillator(),M.type="sine",M.frequency.value=e.lfo.rate;const D=i.createGain();if(e.lfo.target==="gain"){const y=Math.min(1,Math.max(0,e.lfo.depth??.5));A=i.createGain(),A.gain.value=1-y*.5,D.gain.value=y*.5,M.connect(D),D.connect(A.gain),v.connect(A),v=A}else e.lfo.target==="filter"&&x?(D.gain.value=e.lfo.depth??200,M.connect(D),D.connect(x)):p&&(D.gain.value=e.lfo.depth??20,M.connect(D),D.connect(p));M.start(a)}v.connect(m);const b=m.gain;b.setValueAtTime(Zi,a),b.linearRampToValueAtTime(l,a+h);const E=Math.max(Zi,l*d);u>0&&b.linearRampToValueAtTime(E,a+h+u);let P=1/0;if(o)_.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const D=Math.max(a+h+u,a+c-f);b.setValueAtTime(Math.max(Zi,u>0?E:l),D),b.linearRampToValueAtTime(Zi,a+c),P=a+c+.02,_.start(a,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(P),M&&M.stop(P)}return{endsAt:P,stop(D){const y=Math.max(D,i.currentTime);try{b.cancelScheduledValues(y),b.setValueAtTime(Math.max(Zi,b.value),y),b.linearRampToValueAtTime(Zi,y+f),_.stop(y+f+.02),M&&M.stop(y+f+.02)}catch{}}}}function uh(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const h=Xf(i,t,l,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>c&&h.endsAt!==1/0&&(c=h.endsAt))}return{endsAt:o?1/0:c,stop(l=i.currentTime){for(const h of a)h.stop(l)}}}const dh="lifesim.audio",qf=28,Yf="KeyN";class jf{constructor(t){var n,s,r,o;this.game=t,this.bus=(t==null?void 0:t.bus)||null,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this.rng=(n=t==null?void 0:t.rng)!=null&&n.child?t.rng.child("audio"):null,this._voices=[],this._loops=new Map,this._duckUntil=0,this._duckDepth=0,this._paused=!1,this._replaceAccum=0,this._told=!1;const e=this._loadPrefs();this.volume=e.volume,this.muted=e.muted,this._Ctx&&(this._wireUnlock(),this._wireKey()),(o=(r=(s=this.game)==null?void 0:s.slice)==null?void 0:r.bindSounds)==null||o.call(r,this)}get available(){return!!this.ctx}_loadPrefs(){const t={...Vf};try{const e=localStorage.getItem(dh);if(e){const n=JSON.parse(e);typeof n.volume=="number"&&(t.volume=Math.min(1,Math.max(0,n.volume))),typeof n.muted=="boolean"&&(t.muted=n.muted)}}catch{}return t}_savePrefs(){try{localStorage.setItem(dh,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx)for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,n;document.hidden||(n=(e=this.ctx)==null?void 0:e.resume)==null||n.call(e).catch(()=>{})})}unlock(){var e,n;if(this.ctx||!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=new Wf(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this.muted?1e-4:this.volume*(this._paused?.2:1),this.master.connect(t.destination);for(const[s,r]of Object.entries(Hf)){const o=t.createGain();o.gain.value=r.gain,o.connect(this.master),this.buses[s]={node:o,base:r.gain,duckable:r.duckable!==!1}}(e=t.resume)==null||e.call(t).catch(()=>{}),this.announce(),(n=this.bus)==null||n.emit("audio:ready",{muted:this.muted,volume:this.volume})}announce(){var e,n;if(this._told||!this.ctx)return;const t=(n=(e=this.game)==null?void 0:e.ui)==null?void 0:n.toast;t&&(this._told=!0,t.call(this.game.ui,this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==Yf||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e,n,s,r,o,a,c;this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(s=(n=(e=this.game)==null?void 0:e.ui)==null?void 0:n.toast)==null||s.call(n,this.muted?"Sound muted.":"Sound on."),(r=this.bus)==null||r.emit("audio:muted",{muted:this.muted}),this.muted||(this.play("mute_off"),(c=(a=(o=this.game)==null?void 0:o.slice)==null?void 0:a.isWorking)!=null&&c.call(a)&&this.startShiftBeds())}toggleMute(){this.setMuted(!this.muted)}setPaused(t){this._paused=!!t,this._applyMaster(.08)}_applyMaster(t=.08){if(!this.master)return;const e=this.ctx.currentTime,n=this.muted?1e-4:this.volume*(this._paused?.2:1);this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(Math.max(1e-4,n),e+t)}setVolume(t){var e;this.volume=Math.min(1,Math.max(0,t)),this._savePrefs(),this._applyMaster(),(e=this.bus)==null||e.emit("audio:volume",{volume:this.volume})}play(t,e={}){const n=lh[t];if(!n||!this.ctx||this.muted)return null;if(n.loop)return this.startLoop(t,t,e);if(this._voices.length>=qf)return null;const s=this._destFor(n,e);if(!s)return null;const r=uh(this.ctx,this.bank,n,s.node,{gain:(n.gain??1)*(e.gain??1),rate:e.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()});return this._voices.push({v:r,endsAt:r.endsAt,chain:s.chain}),n.ducks&&this.duck(n.ducks.depth??.3,n.ducks.hold??.8),r}startLoop(t,e=t,n={}){const s=lh[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._destFor(s,n);if(!r)return null;const a={v:uh(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(n.gain??1),rate:n.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:n.spot??s.spot??null,at:n.at??null,gain:(s.gain??1)*(n.gain??1)};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);!e||!this.ctx||(this._loops.delete(t),e.v.stop(this.ctx.currentTime))}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t)}startShiftBeds(){for(const t of hh)this.startLoop(t)}stopShiftBeds(){for(const t of hh)this.stopLoop(t)}duck(t=.3,e=.8){if(!this.ctx)return;const n=this.ctx.currentTime;this._duckDepth=Math.max(this._duckDepth,t),this._duckUntil=Math.max(this._duckUntil,n+e);for(const s of Object.values(this.buses))s.duckable&&(s.node.gain.cancelScheduledValues(n),s.node.gain.setTargetAtTime(s.base*this._duckDepth,n,.04))}_unduck(){const t=this.ctx.currentTime;this._duckDepth=0;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_destFor(t,e){const n=this.buses[t.bus]||this.buses.world||this.buses.ui;if(!n)return null;const s=this._resolve(e.at??null,e.spot??t.spot??null);if(!s)return{node:n.node,chain:null};const{gain:r,pan:o}=this._place(s,t.minGain??0);if(r<=.004&&!t.loop)return null;let a=n.node,c=null;this.ctx.createStereoPanner&&(c=this.ctx.createStereoPanner(),c.pan.value=o,c.connect(a),a=c);const l=this.ctx.createGain();return l.gain.value=r,l.connect(a),{node:l,chain:{pan:c,dist:l}}}_resolve(t,e){var s,r,o;if(t&&typeof t.x=="number")return t;if(!e)return null;const n=(o=(r=(s=this.game)==null?void 0:s.shift)==null?void 0:r.spot)==null?void 0:o.call(r,e);return n&&typeof n.x=="number"?n:null}_listener(){var s,r;const t=(s=this.game)==null?void 0:s.camera,e=(r=t==null?void 0:t.active)==null?void 0:r.position;if(!e)return null;const n=t.yaw??0;return{x:e.x,y:e.y,z:e.z,rx:-Math.cos(n),rz:Math.sin(n)}}_place(t,e){const n=this._listener();if(!n)return{gain:1,pan:0};const s=t.x-n.x,r=t.z-n.z,o=(t.y??n.y)-n.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,panWidth:h,panNear:u}=Gf;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));a>l-4&&(d*=(l-a)/4),d=Math.max(d,e);const f=Math.sqrt(s*s+r*r)||1,m=Math.min(1,f/u),_=(s*n.rx+r*n.rz)/f*h*m;return{gain:d,pan:Math.max(-1,Math.min(1,_))}}update(t){if(!this.ctx)return;const e=this.ctx.currentTime;for(let n=this._voices.length-1;n>=0;n--)this._voices[n].endsAt<=e&&this._voices.splice(n,1);if(this._duckDepth>0&&e>=this._duckUntil&&this._unduck(),this._replaceAccum=(this._replaceAccum||0)+t,!(this._replaceAccum<.1)){this._replaceAccum=0;for(const n of this._loops.values()){const s=this._resolve(n.at,n.spot);if(!s||!n.chain)continue;const{gain:r,pan:o}=this._place(s,n.recipe.minGain??0);n.chain.dist.gain.setTargetAtTime(r,e,.06),n.chain.pan&&n.chain.pan.pan.setTargetAtTime(o,e,.08)}}}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,1.8):0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="169",$f=0,fh=1,Kf=2,hd=1,ud=2,Si=3,ui=0,dn=1,$n=2,qi=0,js=1,Yo=2,ph=3,Mc=4,Zf=5,cs=100,Jf=101,Qf=102,t0=103,e0=104,n0=200,i0=201,s0=202,r0=203,Sc=204,wc=205,o0=206,a0=207,c0=208,l0=209,h0=210,u0=211,d0=212,f0=213,p0=214,bc=0,Ec=1,Tc=2,tr=3,Ac=4,Rc=5,Cc=6,Pc=7,Al=0,m0=1,g0=2,Yi=0,_0=1,x0=2,v0=3,dd=4,y0=5,M0=6,S0=7,fd=300,er=301,nr=302,Lc=303,Ic=304,aa=306,jo=1e3,Hi=1001,Dc=1002,Bn=1003,w0=1004,Gr=1005,Fn=1006,Sa=1007,Gi=1008,Ri=1009,pd=1010,md=1011,Pr=1012,Rl=1013,us=1014,bi=1015,Ur=1016,Cl=1017,Pl=1018,ir=1020,gd=35902,_d=1021,xd=1022,Zn=1023,vd=1024,yd=1025,$s=1026,sr=1027,Md=1028,Ll=1029,Sd=1030,Il=1031,Dl=1033,No=33776,ko=33777,Oo=33778,zo=33779,Uc=35840,Nc=35841,kc=35842,Oc=35843,zc=36196,Fc=37492,Bc=37496,Hc=37808,Gc=37809,Vc=37810,Wc=37811,Xc=37812,qc=37813,Yc=37814,jc=37815,$c=37816,Kc=37817,Zc=37818,Jc=37819,Qc=37820,tl=37821,Fo=36492,el=36494,nl=36495,wd=36283,il=36284,sl=36285,rl=36286,b0=3200,E0=3201,Ul=0,T0=1,Bi="",qe="srgb",Ki="srgb-linear",Nl="display-p3",ca="display-p3-linear",$o="linear",Me="srgb",Ko="rec709",Zo="p3",ys=7680,mh=519,A0=512,R0=513,C0=514,bd=515,P0=516,L0=517,I0=518,D0=519,gh=35044,_h="300 es",Ei=2e3,Jo=2001;class cr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const br=Math.PI/180,rr=180/Math.PI;function ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function kl(i,t){return(i%t+t)%t}function U0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function N0(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function k0(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function O0(i,t=1){return t-Math.abs(kl(i,t*2)-t)}function z0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function F0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function B0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function H0(i,t){return i+Math.random()*(t-i)}function G0(i){return i*(.5-Math.random())}function V0(i){i!==void 0&&(xh=i);let t=xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function W0(i){return i*br}function X0(i){return i*rr}function q0(i){return(i&i-1)===0&&i!==0}function Y0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function j0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vn={DEG2RAD:br,RAD2DEG:rr,generateUUID:ms,clamp:rn,euclideanModulo:kl,mapLinear:U0,inverseLerp:N0,lerp:Er,damp:k0,pingpong:O0,smoothstep:z0,smootherstep:F0,randInt:B0,randFloat:H0,randFloatSpread:G0,seededRandom:V0,degToRad:W0,radToDeg:X0,isPowerOfTwo:q0,ceilPowerOfTwo:Y0,floorPowerOfTwo:j0,setQuaternionFromProperEuler:$0,normalize:ln,denormalize:Fs};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],v=s[1],x=s[4],M=s[7],A=s[2],b=s[5],E=s[8];return r[0]=o*_+a*v+c*A,r[3]=o*p+a*x+c*b,r[6]=o*g+a*M+c*E,r[1]=l*_+h*v+u*A,r[4]=l*p+h*x+u*b,r[7]=l*g+h*M+u*E,r[2]=d*_+f*v+m*A,r[5]=d*p+f*x+m*b,r[8]=d*g+f*M+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new te;function Ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function K0(){const i=Qo("canvas");return i.style.display="block",i}const vh={};function Bo(i){i in vh||(vh[i]=!0,console.warn(i))}function Z0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function J0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Q0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yh=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fr={[Ki]:{transfer:$o,primaries:Ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[qe]:{transfer:Me,primaries:Ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ca]:{transfer:$o,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(yh)},[Nl]:{transfer:Me,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(yh).convertLinearToSRGB()}},tp=new Set([Ki,ca]),de={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=fr[t].toReference,s=fr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fr[i].primaries},getTransfer:function(i){return i===Bi?$o:fr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(fr[t].luminanceCoefficients)}};function Ks(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ms;class ep{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=Qo("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ks(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ks(e[n]/255)*255):e[n]=Ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let np=0;class Td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ea(s[o].image)):r.push(Ea(s[o]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ep.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ip=0;class fn extends cr{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=Hi,s=Hi,r=Fn,o=Gi,a=Zn,c=Ri,l=fn.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ms(),this.name="",this.source=new Td(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=fd;fn.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(f+1)/2,A=(g+1)/2,b=(h+d)/4,E=(u+_)/4,P=(m+p)/4;return x>M&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=E/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends cr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Td(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends sp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ad extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let p=1-a;const g=c*d+l*f+h*m+u*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,g*v);p=Math.sin(p*b)/A,a=Math.sin(a*b)/A}const M=a*v;if(c=c*p+d*M,l=l*p+f*M,h=h*p+m*M,u=u*p+_*M,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new I,Sh=new lr;class Ci{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),Wr.subVectors(this.max,pr),Ss.subVectors(t.a,pr),ws.subVectors(t.b,pr),bs.subVectors(t.c,pr),Ii.subVectors(ws,Ss),Di.subVectors(bs,ws),Ji.subVectors(Ss,bs);let e=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-Ji.z,Ji.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,Ji.z,0,-Ji.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-Ji.y,Ji.x,0];return!Aa(e,Ss,ws,bs,Wr)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Ss,ws,bs,Wr))?!1:(Xr.crossVectors(Ii,Di),e=[Xr.x,Xr.y,Xr.z],Aa(e,Ss,ws,bs,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,Vr=new Ci,Ss=new I,ws=new I,bs=new I,Ii=new I,Di=new I,Ji=new I,pr=new I,Wr=new I,Xr=new I,Qi=new I;function Aa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const op=new Ci,mr=new I,Ra=new I;class la{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):op.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);const e=mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(Ra)),this.expandByPoint(mr.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new I,Ca=new I,qr=new I,Ui=new I,Pa=new I,Yr=new I,La=new I;class Ol{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ca.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(Ca);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=Ui.dot(this.direction),c=-Ui.dot(qr),l=Ui.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ca).addScaledVector(qr,d),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){Pa.subVectors(e,t),Yr.subVectors(n,t),La.crossVectors(Pa,Yr);let o=this.direction.dot(La),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);const c=a*this.direction.dot(Yr.crossVectors(Ui,Yr));if(c<0)return null;const l=a*this.direction.dot(Pa.cross(Ui));if(l<0||c+l>o)return null;const h=-a*Ui.dot(La);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ap,t,cp)}lookAt(t,e,n){const s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ni.crossVectors(n,wn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ni.crossVectors(n,wn)),Ni.normalize(),jr.crossVectors(wn,Ni),s[0]=Ni.x,s[4]=jr.x,s[8]=wn.x,s[1]=Ni.y,s[5]=jr.y,s[9]=wn.y,s[2]=Ni.z,s[6]=jr.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],x=n[7],M=n[11],A=n[15],b=s[0],E=s[4],P=s[8],D=s[12],y=s[1],w=s[5],U=s[9],N=s[13],X=s[2],Y=s[6],H=s[10],K=s[14],z=s[3],ut=s[7],dt=s[11],at=s[15];return r[0]=o*b+a*y+c*X+l*z,r[4]=o*E+a*w+c*Y+l*ut,r[8]=o*P+a*U+c*H+l*dt,r[12]=o*D+a*N+c*K+l*at,r[1]=h*b+u*y+d*X+f*z,r[5]=h*E+u*w+d*Y+f*ut,r[9]=h*P+u*U+d*H+f*dt,r[13]=h*D+u*N+d*K+f*at,r[2]=m*b+_*y+p*X+g*z,r[6]=m*E+_*w+p*Y+g*ut,r[10]=m*P+_*U+p*H+g*dt,r[14]=m*D+_*N+p*K+g*at,r[3]=v*b+x*y+M*X+A*z,r[7]=v*E+x*w+M*Y+A*ut,r[11]=v*P+x*U+M*H+A*dt,r[15]=v*D+x*N+M*K+A*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+g*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=u*p*l-_*d*l+_*c*f-a*p*f-u*c*g+a*d*g,x=m*d*l-h*p*l-m*c*f+o*p*f+h*c*g-o*d*g,M=h*_*l-m*u*l+m*a*f-o*_*f-h*a*g+o*u*g,A=m*u*c-h*_*c-m*a*d+o*_*d+h*a*p-o*u*p,b=e*v+n*x+s*M+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=v*E,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*g-n*d*g)*E,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*g+n*c*g)*E,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=x*E,t[5]=(h*p*r-m*d*r+m*s*f-e*p*f-h*s*g+e*d*g)*E,t[6]=(m*c*r-o*p*r-m*s*l+e*p*l+o*s*g-e*c*g)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=M*E,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*g-e*u*g)*E,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*g+e*a*g)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=A*E,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*p+e*u*p)*E,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*p-e*a*p)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,p=o*u,g=a*u,v=c*l,x=c*h,M=c*u,A=n.x,b=n.y,E=n.z;return s[0]=(1-(_+g))*A,s[1]=(f+M)*A,s[2]=(m-x)*A,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(d+g))*b,s[6]=(p+v)*b,s[7]=0,s[8]=(m+x)*E,s[9]=(p-v)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const l=1/r,h=1/o,u=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ei){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===Ei)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Jo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ei){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let m,_;if(a===Ei)m=(o+r)*u,_=-2*u;else if(a===Jo)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Es=new I,Wn=new we,ap=new I(0,0,0),cp=new I(1,1,1),Ni=new I,jr=new I,wn=new I,wh=new we,bh=new lr;class Jn{constructor(t=0,e=0,n=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lp=0;const Eh=new I,Ts=new lr,xi=new we,$r=new I,gr=new I,hp=new I,up=new lr,Th=new I(1,0,0),Ah=new I(0,1,0),Rh=new I(0,0,1),Ch={type:"added"},dp={type:"removed"},As={type:"childadded",child:null},Ia={type:"childremoved",child:null};class He extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new I,e=new Jn,n=new lr,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new te}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Rh,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(gr,$r,this.up):xi.lookAt($r,gr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(xi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ch),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dp),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ch),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new I,vi=new I,Da=new I,yi=new I,Rs=new I,Cs=new I,Ph=new I,Ua=new I,Na=new I,ka=new I,Oa=new me,za=new me,Fa=new me;class Kn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),vi.subVectors(n,e),Da.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(vi),c=Xn.dot(Da),l=vi.dot(vi),h=vi.dot(Da),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Oa.setScalar(0),za.setScalar(0),Fa.setScalar(0),Oa.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Fa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Oa,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Fa,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),vi.subVectors(t,e),Xn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,n),Cs.subVectors(r,n),Ua.subVectors(t,n);const c=Rs.dot(Ua),l=Cs.dot(Ua);if(c<=0&&l<=0)return e.copy(n);Na.subVectors(t,s);const h=Rs.dot(Na),u=Cs.dot(Na);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Rs,o);ka.subVectors(t,r);const f=Rs.dot(ka),m=Cs.dot(ka);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Cs,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Ph.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Ph,a);const g=1/(p+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=kl(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ba(o,r,t+1/3),this.g=Ba(o,r,t),this.b=Ba(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}copyLinearToSRGB(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return de.fromWorkingColorSpace(cn.copy(this),t),Math.round(rn(cn.r*255,0,255))*65536+Math.round(rn(cn.g*255,0,255))*256+Math.round(rn(cn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=qe){de.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,s=cn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Kr);const n=Er(ki.h,Kr.h,e),s=Er(ki.s,Kr.s,e),r=Er(ki.l,Kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new kt;kt.NAMES=Cd;let fp=0;class gs extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=js,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=wc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ye extends gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new I,Zr=new wt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gh&&(t.usage=this.usage),t}}class Pd extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ld extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pp=0;const Pn=new we,Ha=new He,Ps=new I,bn=new Ci,_r=new Ci,Je=new I;class on extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?Ld:Pd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new la);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(bn.min,_r.min),bn.expandByPoint(Je),Je.addVectors(bn.max,_r.max),bn.expandByPoint(Je)):(bn.expandByPoint(_r.min),bn.expandByPoint(_r.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Je.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(t,l),Je.add(Ps)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new wt,f=new wt,m=new wt,_=new I,p=new I;function g(P,D,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),a[P].add(_),a[D].add(_),a[y].add(_),c[P].add(p),c[D].add(p),c[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,D=v.length;P<D;++P){const y=v[P],w=y.start,U=y.count;for(let N=w,X=w+U;N<X;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new I,M=new I,A=new I,b=new I;function E(P){A.fromBufferAttribute(s,P),b.copy(A);const D=a[P];x.copy(D),x.sub(A.multiplyScalar(A.dot(D))).normalize(),M.crossVectors(b,D);const w=M.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,D=v.length;P<D;++P){const y=v[P],w=y.start,U=y.count;for(let N=w,X=w+U;N<X;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)d[m++]=l[f++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new we,ts=new Ol,Jr=new la,Ih=new I,Qr=new I,to=new I,eo=new I,Ga=new I,no=new I,Dh=new I,io=new I;class et extends He{constructor(t=new on,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ga.fromBufferAttribute(u,t),o?no.addScaledVector(Ga,h):no.addScaledVector(Ga.sub(e),h))}e.add(no)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Jr.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Jr,Ih)===null||ts.origin.distanceToSquared(Ih)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,A=x;M<A;M+=3){const b=a.getX(M),E=a.getX(M+1),P=a.getX(M+2);s=so(this,g,t,n,l,h,u,b,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=so(this,o,t,n,l,h,u,v,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,A=x;M<A;M+=3){const b=M,E=M+1,P=M+2;s=so(this,g,t,n,l,h,u,b,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=p,x=p+1,M=p+2;s=so(this,o,t,n,l,h,u,v,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function mp(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ui,a),c===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(io);return l<e.near||l>e.far?null:{distance:l,point:io.clone(),object:i}}function so(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Qr),i.getVertexPosition(c,to),i.getVertexPosition(l,eo);const h=mp(i,t,e,n,Qr,to,eo,Dh);if(h){const u=new I;Kn.getBarycoord(Dh,Qr,to,eo,u),s&&(h.uv=Kn.getInterpolatedAttribute(s,a,c,l,u,new wt)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,c,l,u,new wt)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Kn.getNormal(Qr,to,eo,d.normal),h.face=d,h.barycoord=u}return h}class It extends on{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function m(_,p,g,v,x,M,A,b,E,P,D){const y=M/E,w=A/P,U=M/2,N=A/2,X=b/2,Y=E+1,H=P+1;let K=0,z=0;const ut=new I;for(let dt=0;dt<H;dt++){const at=dt*w-N;for(let Ot=0;Ot<Y;Ot++){const Yt=Ot*y-U;ut[_]=Yt*v,ut[p]=at*x,ut[g]=X,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[p]=0,ut[g]=b>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Ot/E),u.push(1-dt/P),K+=1}}for(let dt=0;dt<P;dt++)for(let at=0;at<E;at++){const Ot=d+at+Y*dt,Yt=d+at+Y*(dt+1),Q=d+(at+1)+Y*(dt+1),O=d+(at+1)+Y*dt;c.push(Ot,Yt,O),c.push(Yt,Q,O),z+=6}a.addGroup(f,z,D),f+=z,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new It(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=or(i[e]);for(const s in n)t[s]=n[s]}return t}function gp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Id(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const _p={clone:or,merge:hn};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dd extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new I,Uh=new wt,Nh=new wt;class xn extends Dd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Nh),e.subVectors(Nh,Uh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Is=1;class yp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Ls,Is,t,e);s.layers=this.layers,this.add(s);const r=new xn(Ls,Is,t,e);r.layers=this.layers,this.add(r);const o=new xn(Ls,Is,t,e);o.layers=this.layers,this.add(o);const a=new xn(Ls,Is,t,e);a.layers=this.layers,this.add(a);const c=new xn(Ls,Is,t,e);c.layers=this.layers,this.add(c);const l=new xn(Ls,Is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ud extends fn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mp extends ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ud(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:qi});r.uniforms.tEquirect.value=e;const o=new et(s,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Fn),new yp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Va=new I,Sp=new I,wp=new te;class os{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Va.subVectors(n,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new la,ro=new I;class zl{constructor(t=new os,e=new os,n=new os,s=new os,r=new os,o=new os){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],p=s[11],g=s[12],v=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,p-f,M-g).normalize(),n[1].setComponents(c+r,d+l,p+f,M+g).normalize(),n[2].setComponents(c+o,d+h,p+m,M+v).normalize(),n[3].setComponents(c-o,d-h,p-m,M-v).normalize(),n[4].setComponents(c-a,d-u,p-_,M-x).normalize(),e===Ei)n[5].setComponents(c+a,d+u,p+_,M+x).normalize();else if(e===Jo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ro.x=s.normal.x>0?t.max.x:t.min.x,ro.y=s.normal.y>0?t.max.y:t.min.y,ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class be extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const v=g*d-o;for(let x=0;x<l;x++){const M=x*u-r;m.push(M,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){const x=v+l*g,M=v+l*(g+1),A=v+1+l*(g+1),b=v+1+l*g;f.push(x,M,b),f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`
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
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,bm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Ig=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Bg=`#define LAMBERT
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,e_=`uniform vec3 color;
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
}`,n_=`uniform float rotation;
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
}`,i_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Ep,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:Dp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:kp,bsdfs:Op,iridescence_fragment:zp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Vp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:Qp,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:om,envmap_physical_pars_fragment:_m,envmap_vertex:am,fog_vertex:cm,fog_pars_vertex:lm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:xm,lights_toon_pars_fragment:vm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:Sm,lights_physical_pars_fragment:wm,lights_fragment_begin:bm,lights_fragment_maps:Em,lights_fragment_end:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Im,map_particle_fragment:Dm,map_particle_pars_fragment:Um,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:km,morphinstance_vertex:Om,morphcolor_vertex:zm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Bm,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Vm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Zm,opaque_fragment:Jm,packing:Qm,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:og,shadowmap_pars_vertex:ag,shadowmap_vertex:cg,shadowmask_pars_fragment:lg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:_g,transmission_fragment:xg,transmission_pars_fragment:vg,uv_pars_fragment:yg,uv_pars_vertex:Mg,uv_vertex:Sg,worldpos_vertex:wg,background_vert:bg,background_frag:Eg,backgroundCube_vert:Tg,backgroundCube_frag:Ag,cube_vert:Rg,cube_frag:Cg,depth_vert:Pg,depth_frag:Lg,distanceRGBA_vert:Ig,distanceRGBA_frag:Dg,equirect_vert:Ug,equirect_frag:Ng,linedashed_vert:kg,linedashed_frag:Og,meshbasic_vert:zg,meshbasic_frag:Fg,meshlambert_vert:Bg,meshlambert_frag:Hg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:jg,meshphysical_frag:$g,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:Jg,points_frag:Qg,shadow_vert:t_,shadow_frag:e_,sprite_vert:n_,sprite_frag:i_},Tt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ai={basic:{uniforms:hn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:hn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:hn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:hn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:hn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:hn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:hn([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:hn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:hn([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:hn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:hn([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:hn([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:hn([Tt.lights,Tt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ai.physical={uniforms:hn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const oo={r:0,b:0,g:0},ns=new Jn,s_=new we;function r_(i,t,e,n,s,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const M=m(v);M===null?g(a,c):M&&M.isColor&&(g(M,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===aa)?(h===void 0&&(h=new et(new It(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:or(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(x.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(ns)),h.material.toneMapped=de.getTransfer(M.colorSpace)!==Me,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new et(new be(2,2),new Pi({name:"BackgroundMaterial",uniforms:or(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=de.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){v.getRGB(oo,Id(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(a,c)},render:_,addToRenderList:p}}function o_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,w,U,N,X){let Y=!1;const H=u(N,U,w);r!==H&&(r=H,l(r.object)),Y=f(y,N,U,X),Y&&m(y,N,U,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(y,w,U,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,w,U){const N=U.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let Y=X[w.id];Y===void 0&&(Y={},X[w.id]=Y);let H=Y[N];return H===void 0&&(H=d(c()),Y[N]=H),H}function d(y){const w=[],U=[],N=[];for(let X=0;X<e;X++)w[X]=0,U[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,w,U,N){const X=r.attributes,Y=w.attributes;let H=0;const K=U.getAttributes();for(const z in K)if(K[z].location>=0){const dt=X[z];let at=Y[z];if(at===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),dt===void 0||dt.attribute!==at||at&&dt.data!==at.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function m(y,w,U,N){const X={},Y=w.attributes;let H=0;const K=U.getAttributes();for(const z in K)if(K[z].location>=0){let dt=Y[z];dt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const at={};at.attribute=dt,dt&&dt.data&&(at.data=dt.data),X[z]=at,H++}r.attributes=X,r.attributesNum=H,r.index=N}function _(){const y=r.newAttributes;for(let w=0,U=y.length;w<U;w++)y[w]=0}function p(y){g(y,0)}function g(y,w){const U=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;U[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),X[y]!==w&&(i.vertexAttribDivisor(y,w),X[y]=w)}function v(){const y=r.newAttributes,w=r.enabledAttributes;for(let U=0,N=w.length;U<N;U++)w[U]!==y[U]&&(i.disableVertexAttribArray(U),w[U]=0)}function x(y,w,U,N,X,Y,H){H===!0?i.vertexAttribIPointer(y,w,U,X,Y):i.vertexAttribPointer(y,w,U,N,X,Y)}function M(y,w,U,N){_();const X=N.attributes,Y=U.getAttributes(),H=w.defaultAttributeValues;for(const K in Y){const z=Y[K];if(z.location>=0){let ut=X[K];if(ut===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const dt=ut.normalized,at=ut.itemSize,Ot=t.get(ut);if(Ot===void 0)continue;const Yt=Ot.buffer,Q=Ot.type,O=Ot.bytesPerElement,ct=Q===i.INT||Q===i.UNSIGNED_INT||ut.gpuType===Rl;if(ut.isInterleavedBufferAttribute){const nt=ut.data,_t=nt.stride,ft=ut.offset;if(nt.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)g(z.location+St,nt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<z.locationSize;St++)p(z.location+St);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let St=0;St<z.locationSize;St++)x(z.location+St,at/z.locationSize,Q,dt,_t*O,(ft+at/z.locationSize*St)*O,ct)}else{if(ut.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)g(z.location+nt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let nt=0;nt<z.locationSize;nt++)x(z.location+nt,at/z.locationSize,Q,dt,at*O,at/z.locationSize*nt*O,ct)}}else if(H!==void 0){const dt=H[K];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(z.location,dt);break;case 3:i.vertexAttrib3fv(z.location,dt);break;case 4:i.vertexAttrib4fv(z.location,dt);break;default:i.vertexAttrib1fv(z.location,dt)}}}}v()}function A(){P();for(const y in n){const w=n[y];for(const U in w){const N=w[U];for(const X in N)h(N[X].object),delete N[X];delete w[U]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const U in w){const N=w[U];for(const X in N)h(N[X].object),delete N[X];delete w[U]}delete n[y.id]}function E(y){for(const w in n){const U=n[w];if(U[y.id]===void 0)continue;const N=U[y.id];for(const X in N)h(N[X].object),delete N[X];delete U[y.id]}}function P(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function a_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<d.length;_++)e.update(m,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function c_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ri&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==bi&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:b}}function l_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new os,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{const v=r?0:n,x=v*4;let M=g.clippingState||null;c.value=M,M=h(m,d,x,f);for(let A=0;A!==x;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function h_(i){let t=new WeakMap;function e(o,a){return a===Lc?o.mapping=er:a===Ic&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class kd extends Dd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hs=4,kh=[.125,.215,.35,.446,.526,.582],ls=20,Wa=new kd,Oh=new kt;let Xa=null,qa=0,Ya=0,ja=!1;const as=(1+Math.sqrt(5))/2,Ds=1/as,zh=[new I(-as,Ds,0),new I(as,Ds,0),new I(-Ds,0,as),new I(Ds,0,as),new I(0,as,-Ds),new I(0,as,Ds),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ur,format:Zn,colorSpace:Ki,depthBuffer:!1},s=Bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u_(r)),this._blurMaterial=d_(r,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,s){const a=new xn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oh),h.toneMapping=Yi,h.autoClear=!1;const f=new Ye({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new et(new It,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Oh),_=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):v===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;ao(s,v*x,g>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===er||t.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ao(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(s-r-1)%zh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new et(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):ls;p>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);const g=[];let v=0;for(let E=0;E<ls;++E){const P=E/_,D=Math.exp(-P*P/2);g.push(D),E===0?v+=D:E<p&&(v+=2*D)}for(let E=0;E<g.length;E++)g[E]=g[E]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const M=this._sizeLods[s],A=3*M*(s>x-Hs?s-x+Hs:0),b=4*(this._cubeSize-M);ao(e,A,b,3*M,2*M),c.setRenderTarget(e),c.render(u,Wa)}}function u_(i){const t=[],e=[],n=[];let s=i;const r=i-Hs+1+kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Hs?c=kh[o-i+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,v=new Float32Array(_*m*f),x=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,P=b>2?0:-1,D=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(D,_*m*b),x.set(d,p*m*b);const y=[b,b,b,b,b,b];M.set(y,g*m*b)}const A=new on;A.setAttribute("position",new Fe(v,_)),A.setAttribute("uv",new Fe(x,p)),A.setAttribute("faceIndex",new Fe(M,g)),t.push(A),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bh(i,t,e){const n=new ds(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function d_(i,t,e){const n=new Float32Array(ls),s=new I(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Hh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Gh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function f_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Lc||c===Ic,h=c===er||c===nr;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Fh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function p_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const A=v[x+0],b=v[x+1],E=v[x+2];d.push(A,b,b,E,E,A)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const A=x+0,b=x+1,E=x+2;d.push(A,b,b,E,E,A)}}else return;const p=new(Ed(d)?Ld:Pd)(d,1);p.version=_;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)l(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let v=0;v<m;v++)g+=f[v];for(let v=0;v<_.length;v++)e.update(g,n,_[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function __(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x_(i,t,e){const n=new WeakMap,s=new me;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let D=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*A*4*u),E=new Ad(b,M,A,u);E.type=bi,E.needsUpdate=!0;const P=x*4;for(let y=0;y<u;y++){const w=p[y],U=g[y],N=v[y],X=M*A*4*y;for(let Y=0;Y<w.count;Y++){const H=Y*P;f===!0&&(s.fromBufferAttribute(w,Y),b[X+H+0]=s.x,b[X+H+1]=s.y,b[X+H+2]=s.z,b[X+H+3]=0),m===!0&&(s.fromBufferAttribute(U,Y),b[X+H+4]=s.x,b[X+H+5]=s.y,b[X+H+6]=s.z,b[X+H+7]=0),_===!0&&(s.fromBufferAttribute(N,Y),b[X+H+8]=s.x,b[X+H+9]=s.y,b[X+H+10]=s.z,b[X+H+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new wt(M,A)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function v_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Od extends fn{constructor(t,e,n,s,r,o,a,c,l,h=$s){if(h!==$s&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$s&&(n=us),n===void 0&&h===sr&&(n=ir),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=c!==void 0?c:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zd=new fn,Vh=new Od(1,1),Fd=new Ad,Bd=new rp,Hd=new Ud,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),jh=new Float32Array(4);function hr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function w_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function b_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Ze(e,n)}}function E_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),Ze(e,n)}}function T_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),Ze(e,n)}}function A_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function C_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function L_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function N_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=bd,r=Vh):r=zd,e.setTexture2D(t||r,s)}function k_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bd,s)}function O_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hd,s)}function z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fd,s)}function F_(i){switch(i){case 5126:return y_;case 35664:return M_;case 35665:return S_;case 35666:return w_;case 35674:return b_;case 35675:return E_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return I_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return z_}}function B_(i,t){i.uniform1fv(this.addr,t)}function H_(i,t){const e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function G_(i,t){const e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function V_(i,t){const e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function W_(i,t){const e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function X_(i,t){const e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function q_(i,t){const e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Y_(i,t){i.uniform1iv(this.addr,t)}function j_(i,t){i.uniform2iv(this.addr,t)}function $_(i,t){i.uniform3iv(this.addr,t)}function K_(i,t){i.uniform4iv(this.addr,t)}function Z_(i,t){i.uniform1uiv(this.addr,t)}function J_(i,t){i.uniform2uiv(this.addr,t)}function Q_(i,t){i.uniform3uiv(this.addr,t)}function tx(i,t){i.uniform4uiv(this.addr,t)}function ex(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zd,r[o])}function nx(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bd,r[o])}function ix(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hd,r[o])}function sx(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function rx(i){switch(i){case 5126:return B_;case 35664:return H_;case 35665:return G_;case 35666:return V_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return j_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return Z_;case 36294:return J_;case 36295:return Q_;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}class ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F_(e.type)}}class ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rx(e.type)}}class cx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function lx(i,t,e){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),o=$a.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$h(e,l===void 0?new ox(a,i,t):new ax(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cx(a),$h(e,u)),e=u}}}class Ho{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);lx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hx=37297;let ux=0;function dx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function fx(i){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i);let n;switch(t===e?n="":t===Zo&&e===Ko?n="LinearDisplayP3ToLinearSRGB":t===Ko&&e===Zo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ki:case ca:return[n,"LinearTransferOETF"];case qe:case Nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Zh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dx(i.getShaderSource(t),o)}else return s}function px(i,t){const e=fx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mx(i,t){let e;switch(t){case _0:e="Linear";break;case x0:e="Reinhard";break;case v0:e="Cineon";break;case dd:e="ACESFilmic";break;case M0:e="AgX";break;case S0:e="Neutral";break;case y0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const co=new I;function gx(){de.getLuminanceCoefficients(co);const i=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function xx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Sr(i){return i!==""}function Jh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(yx,Sx)}const Mx=new Map;function Sx(i,t){let e=Qt[t];if(e===void 0){const n=Mx.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}const wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(wx,bx)}function bx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ex(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function Tx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ax(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function Rx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case m0:t="ENVMAP_BLENDING_MIX";break;case g0:t="ENVMAP_BLENDING_ADD";break}return t}function Cx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Px(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ex(e),l=Tx(e),h=Ax(e),u=Rx(e),d=Cx(e),f=_x(e),m=xx(r),_=s.createProgram();let p,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Sr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Sr).join(`
`),g.length>0&&(g+=`
`)):(p=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),g=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Yi?mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,px("linearToOutputTexel",e.outputColorSpace),gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=ol(o),o=Jh(o,e),o=Qh(o,e),a=ol(a),a=Jh(a,e),a=Qh(a,e),o=tu(o),a=tu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,M=v+g+a,A=Kh(s,s.VERTEX_SHADER,x),b=Kh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(w){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(b).trim();let Y=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,b);else{const K=Zh(s,A,"vertex"),z=Zh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+K+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||X==="")&&(H=!1);H&&(w.diagnostics={runnable:Y,programLog:U,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:g}})}s.deleteShader(A),s.deleteShader(b),P=new Ho(s,_),D=vx(s,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let D;this.getAttributes=function(){return D===void 0&&E(this),D};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,hx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ux++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let Lx=0;class Ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dx(t),e.set(t,n)),n}}class Dx{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}}function Ux(i,t,e,n,s,r,o){const a=new Rd,c=new Ix,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,U,N,X){const Y=N.fog,H=X.geometry,K=y.isMeshStandardMaterial?N.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),ut=z&&z.mapping===aa?z.image.height:null,dt=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ot=at!==void 0?at.length:0;let Yt=0;H.morphAttributes.position!==void 0&&(Yt=1),H.morphAttributes.normal!==void 0&&(Yt=2),H.morphAttributes.color!==void 0&&(Yt=3);let Q,O,ct,nt;if(dt){const tn=ai[dt];Q=tn.vertexShader,O=tn.fragmentShader}else Q=y.vertexShader,O=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),nt=c.getFragmentShaderID(y);const _t=i.getRenderTarget(),ft=X.isInstancedMesh===!0,St=X.isBatchedMesh===!0,At=!!y.map,Z=!!y.matcap,T=!!z,gt=!!y.aoMap,rt=!!y.lightMap,st=!!y.bumpMap,lt=!!y.normalMap,Pt=!!y.displacementMap,ot=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,B=y.anisotropy>0,J=y.clearcoat>0,it=y.dispersion>0,tt=y.iridescence>0,Lt=y.sheen>0,mt=y.transmission>0,Mt=B&&!!y.anisotropyMap,Kt=J&&!!y.clearcoatMap,pt=J&&!!y.clearcoatNormalMap,Rt=J&&!!y.clearcoatRoughnessMap,Ht=tt&&!!y.iridescenceMap,Gt=tt&&!!y.iridescenceThicknessMap,Et=Lt&&!!y.sheenColorMap,ee=Lt&&!!y.sheenRoughnessMap,jt=!!y.specularMap,ae=!!y.specularColorMap,F=!!y.specularIntensityMap,L=mt&&!!y.transmissionMap,k=mt&&!!y.thicknessMap,q=!!y.gradientMap,ht=!!y.alphaMap,bt=y.alphaTest>0,Jt=!!y.alphaHash,Ce=!!y.extensions;let Ae=Yi;y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const ne={shaderID:dt,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:O,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:nt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:St,batchingColor:St&&X._colorsTexture!==null,instancing:ft,instancingColor:ft&&X.instanceColor!==null,instancingMorph:ft&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ki,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:Z,envMap:T,envMapMode:T&&z.mapping,envMapCubeUVHeight:ut,aoMap:gt,lightMap:rt,bumpMap:st,normalMap:lt,displacementMap:f&&Pt,emissiveMap:ot,normalMapObjectSpace:lt&&y.normalMapType===T0,normalMapTangentSpace:lt&&y.normalMapType===Ul,metalnessMap:C,roughnessMap:S,anisotropy:B,anisotropyMap:Mt,clearcoat:J,clearcoatMap:Kt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,dispersion:it,iridescence:tt,iridescenceMap:Ht,iridescenceThicknessMap:Gt,sheen:Lt,sheenColorMap:Et,sheenRoughnessMap:ee,specularMap:jt,specularColorMap:ae,specularIntensityMap:F,transmission:mt,transmissionMap:L,thicknessMap:k,gradientMap:q,opaque:y.transparent===!1&&y.blending===js&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:bt,alphaHash:Jt,combine:y.combine,mapUv:At&&p(y.map.channel),aoMapUv:gt&&p(y.aoMap.channel),lightMapUv:rt&&p(y.lightMap.channel),bumpMapUv:st&&p(y.bumpMap.channel),normalMapUv:lt&&p(y.normalMap.channel),displacementMapUv:Pt&&p(y.displacementMap.channel),emissiveMapUv:ot&&p(y.emissiveMap.channel),metalnessMapUv:C&&p(y.metalnessMap.channel),roughnessMapUv:S&&p(y.roughnessMap.channel),anisotropyMapUv:Mt&&p(y.anisotropyMap.channel),clearcoatMapUv:Kt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(y.sheenRoughnessMap.channel),specularMapUv:jt&&p(y.specularMap.channel),specularColorMapUv:ae&&p(y.specularColorMap.channel),specularIntensityMapUv:F&&p(y.specularIntensityMap.channel),transmissionMapUv:L&&p(y.transmissionMap.channel),thicknessMapUv:k&&p(y.thicknessMap.channel),alphaMapUv:ht&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(lt||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(At||ht),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$n,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ce&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&y.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function v(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)w.push(U),w.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(w,y),M(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const w=_[y.type];let U;if(w){const N=ai[w];U=_p.clone(N.uniforms)}else U=y.uniforms;return U}function b(y,w){let U;for(let N=0,X=h.length;N<X;N++){const Y=h[N];if(Y.cacheKey===w){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new Px(i,w,y,r),h.push(U)),U}function E(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function P(y){c.remove(y)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:A,acquireProgram:b,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:D}}function Nx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function iu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),t++,g}function a(u,d,f,m,_,p){const g=o(u,d,f,m,_,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function c(u,d,f,m,_,p){const g=o(u,d,f,m,_,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||kx),n.length>1&&n.sort(d||nu),s.length>1&&s.sort(d||nu)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ox(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new iu,i.set(n,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Fx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Bx=0;function Hx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gx(i){const t=new zx,e=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new we,o=new we;function a(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,x=0,M=0,A=0,b=0,E=0;l.sort(Hx);for(let D=0,y=l.length;D<y;D++){const w=l[D],U=w.color,N=w.intensity,X=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=U.r*N,u+=U.g*N,d+=U.b*N;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],N);E++}else if(w.isDirectionalLight){const H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,z=e.get(w);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=w.shadow.matrix,v++}n.directional[f]=H,f++}else if(w.isSpotLight){const H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(U).multiplyScalar(N),H.distance=X,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[_]=H;const K=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,K.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[_]=K.matrix,w.castShadow){const z=e.get(w);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,M++}_++}else if(w.isRectAreaLight){const H=t.get(w);H.color.copy(U).multiplyScalar(N),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=H,p++}else if(w.isPointLight){const H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const K=w.shadow,z=e.get(w);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=w.shadow.matrix,x++}n.point[m]=H,m++}else if(w.isHemisphereLight){const H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(N),H.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[g]=H,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==g||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==M||P.numSpotMaps!==A||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=g,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=M,P.numSpotMaps=A,P.numLightProbes=E,n.version=Bx++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,v=l.length;g<v;g++){const x=l[g];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function su(i){const t=new Gx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Vx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new su(i),t.set(s,[a])):r>=o.length?(a=new su(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Wx extends gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xx extends gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
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
}`;function jx(i,t,e){let n=new zl;const s=new wt,r=new wt,o=new me,a=new Wx({depthPacking:E0}),c=new Xx,l={},h=e.maxTextureSize,u={[ui]:dn,[dn]:ui,[$n]:$n},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:qx,fragmentShader:Yx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let g=this.type;this.render=function(b,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const D=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),U=i.state;U.setBlending(qi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=g!==Si&&this.type===Si,X=g===Si&&this.type!==Si;for(let Y=0,H=b.length;Y<H;Y++){const K=b[Y],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ut=z.getFrameExtents();if(s.multiply(ut),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,z.mapSize.y=r.y)),z.map===null||N===!0||X===!0){const at=this.type!==Si?{minFilter:Bn,magFilter:Bn}:{};z.map!==null&&z.map.dispose(),z.map=new ds(s.x,s.y,at),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const dt=z.getViewportCount();for(let at=0;at<dt;at++){const Ot=z.getViewport(at);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),U.viewport(o),z.updateMatrices(K,at),n=z.getFrustum(),M(E,P,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===Si&&v(z,P),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(D,y,w)};function v(b,E){const P=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ds(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,P,f,_,null)}function x(b,E,P,D){let y=null;const w=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=y.uuid,N=E.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let Y=X[N];Y===void 0&&(Y=y.clone(),X[N]=Y,E.addEventListener("dispose",A)),y=Y}if(y.visible=E.visible,y.wireframe=E.wireframe,D===Si?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=P}return y}function M(b,E,P,D,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Si)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const N=t.update(b),X=b.material;if(Array.isArray(X)){const Y=N.groups;for(let H=0,K=Y.length;H<K;H++){const z=Y[H],ut=X[z.materialIndex];if(ut&&ut.visible){const dt=x(b,ut,D,y);b.onBeforeShadow(i,b,E,P,N,dt,z),i.renderBufferDirect(P,null,N,dt,b,z),b.onAfterShadow(i,b,E,P,N,dt,z)}}}else if(X.visible){const Y=x(b,X,D,y);b.onBeforeShadow(i,b,E,P,N,Y,null),i.renderBufferDirect(P,null,N,Y,b,null),b.onAfterShadow(i,b,E,P,N,Y,null)}}const U=b.children;for(let N=0,X=U.length;N<X;N++)M(U[N],E,P,D,y)}function A(b){b.target.removeEventListener("dispose",A);for(const P in l){const D=l[P],y=b.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}const $x={[bc]:Ec,[Tc]:Cc,[Ac]:Pc,[tr]:Rc,[Ec]:bc,[Cc]:Tc,[Pc]:Ac,[Rc]:tr};function Kx(i){function t(){let F=!1;const L=new me;let k=null;const q=new me(0,0,0,0);return{setMask:function(ht){k!==ht&&!F&&(i.colorMask(ht,ht,ht,ht),k=ht)},setLocked:function(ht){F=ht},setClear:function(ht,bt,Jt,Ce,Ae){Ae===!0&&(ht*=Ce,bt*=Ce,Jt*=Ce),L.set(ht,bt,Jt,Ce),q.equals(L)===!1&&(i.clearColor(ht,bt,Jt,Ce),q.copy(L))},reset:function(){F=!1,k=null,q.set(-1,0,0,0)}}}function e(){let F=!1,L=!1,k=null,q=null,ht=null;return{setReversed:function(bt){L=bt},setTest:function(bt){bt?ct(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(bt){k!==bt&&!F&&(i.depthMask(bt),k=bt)},setFunc:function(bt){if(L&&(bt=$x[bt]),q!==bt){switch(bt){case bc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case Tc:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Cc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=bt}},setLocked:function(bt){F=bt},setClear:function(bt){ht!==bt&&(i.clearDepth(bt),ht=bt)},reset:function(){F=!1,k=null,q=null,ht=null}}}function n(){let F=!1,L=null,k=null,q=null,ht=null,bt=null,Jt=null,Ce=null,Ae=null;return{setTest:function(ne){F||(ne?ct(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ne){L!==ne&&!F&&(i.stencilMask(ne),L=ne)},setFunc:function(ne,tn,Rn){(k!==ne||q!==tn||ht!==Rn)&&(i.stencilFunc(ne,tn,Rn),k=ne,q=tn,ht=Rn)},setOp:function(ne,tn,Rn){(bt!==ne||Jt!==tn||Ce!==Rn)&&(i.stencilOp(ne,tn,Rn),bt=ne,Jt=tn,Ce=Rn)},setLocked:function(ne){F=ne},setClear:function(ne){Ae!==ne&&(i.clearStencil(ne),Ae=ne)},reset:function(){F=!1,L=null,k=null,q=null,ht=null,bt=null,Jt=null,Ce=null,Ae=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,v=null,x=null,M=null,A=null,b=new kt(0,0,0),E=0,P=!1,D=null,y=null,w=null,U=null,N=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=H>=2);let z=null,ut={};const dt=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Ot=new me().fromArray(dt),Yt=new me().fromArray(at);function Q(F,L,k,q){const ht=new Uint8Array(4),bt=i.createTexture();i.bindTexture(F,bt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<k;Jt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(L+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return bt}const O={};O[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),r.setFunc(tr),rt(!1),st(fh),ct(i.CULL_FACE),T(qi);function ct(F){l[F]!==!0&&(i.enable(F),l[F]=!0)}function nt(F){l[F]!==!1&&(i.disable(F),l[F]=!1)}function _t(F,L){return h[F]!==L?(i.bindFramebuffer(F,L),h[F]=L,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=L),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=L),!0):!1}function ft(F,L){let k=d,q=!1;if(F){k=u.get(L),k===void 0&&(k=[],u.set(L,k));const ht=F.textures;if(k.length!==ht.length||k[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Jt=ht.length;bt<Jt;bt++)k[bt]=i.COLOR_ATTACHMENT0+bt;k.length=ht.length,q=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,q=!0);q&&i.drawBuffers(k)}function St(F){return f!==F?(i.useProgram(F),f=F,!0):!1}const At={[cs]:i.FUNC_ADD,[Jf]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};At[t0]=i.MIN,At[e0]=i.MAX;const Z={[n0]:i.ZERO,[i0]:i.ONE,[s0]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[h0]:i.SRC_ALPHA_SATURATE,[c0]:i.DST_COLOR,[o0]:i.DST_ALPHA,[r0]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[l0]:i.ONE_MINUS_DST_COLOR,[a0]:i.ONE_MINUS_DST_ALPHA,[u0]:i.CONSTANT_COLOR,[d0]:i.ONE_MINUS_CONSTANT_COLOR,[f0]:i.CONSTANT_ALPHA,[p0]:i.ONE_MINUS_CONSTANT_ALPHA};function T(F,L,k,q,ht,bt,Jt,Ce,Ae,ne){if(F===qi){m===!0&&(nt(i.BLEND),m=!1);return}if(m===!1&&(ct(i.BLEND),m=!0),F!==Zf){if(F!==_||ne!==P){if((p!==cs||x!==cs)&&(i.blendEquation(i.FUNC_ADD),p=cs,x=cs),ne)switch(F){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,v=null,M=null,A=null,b.set(0,0,0),E=0,_=F,P=ne}return}ht=ht||L,bt=bt||k,Jt=Jt||q,(L!==p||ht!==x)&&(i.blendEquationSeparate(At[L],At[ht]),p=L,x=ht),(k!==g||q!==v||bt!==M||Jt!==A)&&(i.blendFuncSeparate(Z[k],Z[q],Z[bt],Z[Jt]),g=k,v=q,M=bt,A=Jt),(Ce.equals(b)===!1||Ae!==E)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ae),b.copy(Ce),E=Ae),_=F,P=!1}function gt(F,L){F.side===$n?nt(i.CULL_FACE):ct(i.CULL_FACE);let k=F.side===dn;L&&(k=!k),rt(k),F.blending===js&&F.transparent===!1?T(qi):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const q=F.stencilWrite;o.setTest(q),q&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function st(F){F!==$f?(ct(i.CULL_FACE),F!==y&&(F===fh?i.cullFace(i.BACK):F===Kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),y=F}function lt(F){F!==w&&(Y&&i.lineWidth(F),w=F)}function Pt(F,L,k){F?(ct(i.POLYGON_OFFSET_FILL),(U!==L||N!==k)&&(i.polygonOffset(L,k),U=L,N=k)):nt(i.POLYGON_OFFSET_FILL)}function ot(F){F?ct(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function C(F){F===void 0&&(F=i.TEXTURE0+X-1),z!==F&&(i.activeTexture(F),z=F)}function S(F,L,k){k===void 0&&(z===null?k=i.TEXTURE0+X-1:k=z);let q=ut[k];q===void 0&&(q={type:void 0,texture:void 0},ut[k]=q),(q.type!==F||q.texture!==L)&&(z!==k&&(i.activeTexture(k),z=k),i.bindTexture(F,L||O[F]),q.type=F,q.texture=L)}function B(){const F=ut[z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(F){Ot.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ot.copy(F))}function Et(F){Yt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Yt.copy(F))}function ee(F,L){let k=c.get(L);k===void 0&&(k=new WeakMap,c.set(L,k));let q=k.get(F);q===void 0&&(q=i.getUniformBlockIndex(L,F.name),k.set(F,q))}function jt(F,L){const q=c.get(L).get(F);a.get(L)!==q&&(i.uniformBlockBinding(L,q,F.__bindingPointIndex),a.set(L,q))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},z=null,ut={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,v=null,x=null,M=null,A=null,b=new kt(0,0,0),E=0,P=!1,D=null,y=null,w=null,U=null,N=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ct,disable:nt,bindFramebuffer:_t,drawBuffers:ft,useProgram:St,setBlending:T,setMaterial:gt,setFlipSided:rt,setCullFace:st,setLineWidth:lt,setPolygonOffset:Pt,setScissorTest:ot,activeTexture:C,bindTexture:S,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:Rt,texImage3D:Ht,updateUBOMapping:ee,uniformBlockBinding:jt,texStorage2D:Kt,texStorage3D:pt,texSubImage2D:tt,texSubImage3D:Lt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Gt,viewport:Et,reset:ae}}function ru(i,t,e,n){const s=Zx(n);switch(e){case _d:return i*t;case vd:return i*t;case yd:return i*t*2;case Md:return i*t/s.components*s.byteLength;case Ll:return i*t/s.components*s.byteLength;case Sd:return i*t*2/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case xd:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Dl:return i*t*4/s.components*s.byteLength;case No:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Oc:return Math.max(i,16)*Math.max(t,8)/4;case Uc:case kc:return Math.max(i,8)*Math.max(t,8)/2;case zc:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fo:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wd:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zx(i){switch(i){case Ri:case pd:return{byteLength:1,components:1};case Pr:case md:case Ur:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case us:case Rl:case bi:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):Qo("canvas")}function _(C,S,B){let J=1;const it=ot(C);if((it.width>B||it.height>B)&&(J=B/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(J*it.width),Lt=Math.floor(J*it.height);u===void 0&&(u=m(tt,Lt));const mt=S?m(tt,Lt):u;return mt.width=tt,mt.height=Lt,mt.getContext("2d").drawImage(C,0,0,tt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+Lt+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Bn&&C.minFilter!==Fn}function g(C){i.generateMipmap(C)}function v(C,S,B,J,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=S;if(S===i.RED&&(B===i.FLOAT&&(tt=i.R32F),B===i.HALF_FLOAT&&(tt=i.R16F),B===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.R8UI),B===i.UNSIGNED_SHORT&&(tt=i.R16UI),B===i.UNSIGNED_INT&&(tt=i.R32UI),B===i.BYTE&&(tt=i.R8I),B===i.SHORT&&(tt=i.R16I),B===i.INT&&(tt=i.R32I)),S===i.RG&&(B===i.FLOAT&&(tt=i.RG32F),B===i.HALF_FLOAT&&(tt=i.RG16F),B===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.RG8UI),B===i.UNSIGNED_SHORT&&(tt=i.RG16UI),B===i.UNSIGNED_INT&&(tt=i.RG32UI),B===i.BYTE&&(tt=i.RG8I),B===i.SHORT&&(tt=i.RG16I),B===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),B===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),B===i.UNSIGNED_INT&&(tt=i.RGB32UI),B===i.BYTE&&(tt=i.RGB8I),B===i.SHORT&&(tt=i.RGB16I),B===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),B===i.UNSIGNED_INT&&(tt=i.RGBA32UI),B===i.BYTE&&(tt=i.RGBA8I),B===i.SHORT&&(tt=i.RGBA16I),B===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){const Lt=it?$o:de.getTransfer(J);B===i.FLOAT&&(tt=i.RGBA32F),B===i.HALF_FLOAT&&(tt=i.RGBA16F),B===i.UNSIGNED_BYTE&&(tt=Lt===Me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(C,S){let B;return C?S===null||S===us||S===ir?B=i.DEPTH24_STENCIL8:S===bi?B=i.DEPTH32F_STENCIL8:S===Pr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===us||S===ir?B=i.DEPTH_COMPONENT24:S===bi?B=i.DEPTH_COMPONENT32F:S===Pr&&(B=i.DEPTH_COMPONENT16),B}function M(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&h.delete(S)}function b(C){const S=C.target;S.removeEventListener("dispose",b),D(S)}function E(C){const S=n.get(C);if(S.__webglInit===void 0)return;const B=C.source,J=d.get(B);if(J){const it=J[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(C),Object.keys(J).length===0&&d.delete(B)}n.remove(C)}function P(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const B=C.source,J=d.get(B);delete J[S.__cacheKey],o.memory.textures--}function D(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let it=0;it<S.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[J][it]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let J=0,it=B.length;J<it;J++){const tt=n.get(B[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(C)}let y=0;function w(){y=0}function U(){const C=y;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),y+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const B=n.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(B,C,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function Y(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Yt(B,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function H(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Yt(B,C,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function K(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Q(B,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const z={[jo]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},ut={[Bn]:i.NEAREST,[w0]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},dt={[A0]:i.NEVER,[D0]:i.ALWAYS,[R0]:i.LESS,[bd]:i.LEQUAL,[C0]:i.EQUAL,[I0]:i.GEQUAL,[P0]:i.GREATER,[L0]:i.NOTEQUAL};function at(C,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===Sa||S.magFilter===Gr||S.magFilter===Gi||S.minFilter===Fn||S.minFilter===Sa||S.minFilter===Gr||S.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,z[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,z[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,z[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ut[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bn||S.minFilter!==Gr&&S.minFilter!==Gi||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ot(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let it=d.get(J);it===void 0&&(it={},d.set(J,it));const tt=N(S);if(tt!==C.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),it[tt].usedTimes++;const Lt=it[C.__cacheKey];Lt!==void 0&&(it[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&P(S)),C.__cacheKey=tt,C.__webglTexture=it[tt].texture}return B}function Yt(C,S,B){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const it=Ot(C,S),tt=S.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+B);const Lt=n.get(tt);if(tt.version!==Lt.__version||it===!0){e.activeTexture(i.TEXTURE0+B);const mt=de.getPrimaries(de.workingColorSpace),Mt=S.colorSpace===Bi?null:de.getPrimaries(S.colorSpace),Kt=S.colorSpace===Bi||mt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let pt=_(S.image,!1,s.maxTextureSize);pt=Pt(S,pt);const Rt=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type);let Gt=v(S.internalFormat,Rt,Ht,S.colorSpace,S.isVideoTexture);at(J,S);let Et;const ee=S.mipmaps,jt=S.isVideoTexture!==!0,ae=Lt.__version===void 0||it===!0,F=tt.dataReady,L=M(S,pt);if(S.isDepthTexture)Gt=x(S.format===sr,S.type),ae&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Gt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,pt.width,pt.height,0,Rt,Ht,null));else if(S.isDataTexture)if(ee.length>0){jt&&ae&&e.texStorage2D(i.TEXTURE_2D,L,Gt,ee[0].width,ee[0].height);for(let k=0,q=ee.length;k<q;k++)Et=ee[k],jt?F&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,Et.width,Et.height,Rt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,k,Gt,Et.width,Et.height,0,Rt,Ht,Et.data);S.generateMipmaps=!1}else jt?(ae&&e.texStorage2D(i.TEXTURE_2D,L,Gt,pt.width,pt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Rt,Ht,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,pt.width,pt.height,0,Rt,Ht,pt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Gt,ee[0].width,ee[0].height,pt.depth);for(let k=0,q=ee.length;k<q;k++)if(Et=ee[k],S.format!==Zn)if(Rt!==null)if(jt){if(F)if(S.layerUpdates.size>0){const ht=ru(Et.width,Et.height,S.format,S.type);for(const bt of S.layerUpdates){const Jt=Et.data.subarray(bt*ht/Et.data.BYTES_PER_ELEMENT,(bt+1)*ht/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,bt,Et.width,Et.height,1,Rt,Jt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Et.width,Et.height,pt.depth,Rt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Gt,Et.width,Et.height,pt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Et.width,Et.height,pt.depth,Rt,Ht,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Gt,Et.width,Et.height,pt.depth,0,Rt,Ht,Et.data)}else{jt&&ae&&e.texStorage2D(i.TEXTURE_2D,L,Gt,ee[0].width,ee[0].height);for(let k=0,q=ee.length;k<q;k++)Et=ee[k],S.format!==Zn?Rt!==null?jt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,Et.width,Et.height,Rt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?F&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,Et.width,Et.height,Rt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,k,Gt,Et.width,Et.height,0,Rt,Ht,Et.data)}else if(S.isDataArrayTexture)if(jt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Gt,pt.width,pt.height,pt.depth),F)if(S.layerUpdates.size>0){const k=ru(pt.width,pt.height,S.format,S.type);for(const q of S.layerUpdates){const ht=pt.data.subarray(q*k/pt.data.BYTES_PER_ELEMENT,(q+1)*k/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,pt.width,pt.height,1,Rt,Ht,ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Ht,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,pt.width,pt.height,pt.depth,0,Rt,Ht,pt.data);else if(S.isData3DTexture)jt?(ae&&e.texStorage3D(i.TEXTURE_3D,L,Gt,pt.width,pt.height,pt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Ht,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,pt.width,pt.height,pt.depth,0,Rt,Ht,pt.data);else if(S.isFramebufferTexture){if(ae)if(jt)e.texStorage2D(i.TEXTURE_2D,L,Gt,pt.width,pt.height);else{let k=pt.width,q=pt.height;for(let ht=0;ht<L;ht++)e.texImage2D(i.TEXTURE_2D,ht,Gt,k,q,0,Rt,Ht,null),k>>=1,q>>=1}}else if(ee.length>0){if(jt&&ae){const k=ot(ee[0]);e.texStorage2D(i.TEXTURE_2D,L,Gt,k.width,k.height)}for(let k=0,q=ee.length;k<q;k++)Et=ee[k],jt?F&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,Rt,Ht,Et):e.texImage2D(i.TEXTURE_2D,k,Gt,Rt,Ht,Et);S.generateMipmaps=!1}else if(jt){if(ae){const k=ot(pt);e.texStorage2D(i.TEXTURE_2D,L,Gt,k.width,k.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ht,pt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Rt,Ht,pt);p(S)&&g(J),Lt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,B){if(S.image.length!==6)return;const J=Ot(C,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const tt=n.get(it);if(it.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+B);const Lt=de.getPrimaries(de.workingColorSpace),mt=S.colorSpace===Bi?null:de.getPrimaries(S.colorSpace),Mt=S.colorSpace===Bi||Lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,pt=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let q=0;q<6;q++)!Kt&&!pt?Rt[q]=_(S.image[q],!0,s.maxCubemapSize):Rt[q]=pt?S.image[q].image:S.image[q],Rt[q]=Pt(S,Rt[q]);const Ht=Rt[0],Gt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),ee=v(S.internalFormat,Gt,Et,S.colorSpace),jt=S.isVideoTexture!==!0,ae=tt.__version===void 0||J===!0,F=it.dataReady;let L=M(S,Ht);at(i.TEXTURE_CUBE_MAP,S);let k;if(Kt){jt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,ee,Ht.width,Ht.height);for(let q=0;q<6;q++){k=Rt[q].mipmaps;for(let ht=0;ht<k.length;ht++){const bt=k[ht];S.format!==Zn?Gt!==null?jt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,0,0,bt.width,bt.height,Gt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,ee,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,0,0,bt.width,bt.height,Gt,Et,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht,ee,bt.width,bt.height,0,Gt,Et,bt.data)}}}else{if(k=S.mipmaps,jt&&ae){k.length>0&&L++;const q=ot(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,ee,q.width,q.height)}for(let q=0;q<6;q++)if(pt){jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Rt[q].width,Rt[q].height,Gt,Et,Rt[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ee,Rt[q].width,Rt[q].height,0,Gt,Et,Rt[q].data);for(let ht=0;ht<k.length;ht++){const Jt=k[ht].image[q].image;jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,0,0,Jt.width,Jt.height,Gt,Et,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,ee,Jt.width,Jt.height,0,Gt,Et,Jt.data)}}else{jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Gt,Et,Rt[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ee,Gt,Et,Rt[q]);for(let ht=0;ht<k.length;ht++){const bt=k[ht];jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,0,0,Gt,Et,bt.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ht+1,ee,Gt,Et,bt.image[q])}}}p(S)&&g(i.TEXTURE_CUBE_MAP),tt.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function O(C,S,B,J,it,tt){const Lt=r.convert(B.format,B.colorSpace),mt=r.convert(B.type),Mt=v(B.internalFormat,Lt,mt,B.colorSpace);if(!n.get(S).__hasExternalTextures){const pt=Math.max(1,S.width>>tt),Rt=Math.max(1,S.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,Mt,pt,Rt,S.depth,0,Lt,mt,null):e.texImage2D(it,tt,Mt,pt,Rt,0,Lt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,n.get(B).__webglTexture,0,rt(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,n.get(B).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const J=S.depthTexture,it=J&&J.isDepthTexture?J.type:null,tt=x(S.stencilBuffer,it),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=rt(S);st(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,tt,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,C)}else{const J=S.textures;for(let it=0;it<J.length;it++){const tt=J[it],Lt=r.convert(tt.format,tt.colorSpace),mt=r.convert(tt.type),Mt=v(tt.internalFormat,Lt,mt,tt.colorSpace),Kt=rt(S);B&&st(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Mt,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,it=rt(S);if(S.depthTexture.format===$s)st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===sr)st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function _t(C){const S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[J],C,!1);else{const it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,S,B){const J=n.get(C);S!==void 0&&O(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_t(C)}function St(C){const S=C.texture,B=n.get(C),J=n.get(S);C.addEventListener("dispose",b);const it=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),tt){B.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)B.__webglFramebuffer[mt][Mt]=i.createFramebuffer()}else B.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)B.__webglFramebuffer[mt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let mt=0,Mt=it.length;mt<Mt;mt++){const Kt=n.get(it[mt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&st(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const Mt=it[mt];B.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[mt]);const Kt=r.convert(Mt.format,Mt.colorSpace),pt=r.convert(Mt.type),Rt=v(Mt.internalFormat,Kt,pt,Mt.colorSpace,C.isXRRenderTarget===!0),Ht=rt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,B.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),at(i.TEXTURE_CUBE_MAP,S);for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)O(B.__webglFramebuffer[mt][Mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else O(B.__webglFramebuffer[mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(S)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,Mt=it.length;mt<Mt;mt++){const Kt=it[mt],pt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),at(i.TEXTURE_2D,Kt),O(B.__webglFramebuffer,C,Kt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),p(Kt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),at(mt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)O(B.__webglFramebuffer[Mt],C,S,i.COLOR_ATTACHMENT0,mt,Mt);else O(B.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,mt,0);p(S)&&g(mt),e.unbindTexture()}C.depthBuffer&&_t(C)}function At(C){const S=C.textures;for(let B=0,J=S.length;B<J;B++){const it=S[B];if(p(it)){const tt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(it).__webglTexture;e.bindTexture(tt,Lt),g(tt),e.unbindTexture()}}}const Z=[],T=[];function gt(C){if(C.samples>0){if(st(C)===!1){const S=C.textures,B=C.width,J=C.height;let it=i.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(C),mt=S.length>1;if(mt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Mt]);const Kt=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,it,i.NEAREST),c===!0&&(Z.length=0,T.length=0,Z.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Z.push(tt),T.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Mt]);const Kt=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function rt(C){return Math.min(s.maxSamples,C.samples)}function st(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Pt(C,S){const B=C.colorSpace,J=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ki&&B!==Bi&&(de.getTransfer(B)===Me?(J!==Zn||it!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=ft,this.setupRenderTarget=St,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=O,this.useMultisampledRTT=st}function Qx(i,t){function e(n,s=Bi){let r;const o=de.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return i.BYTE;if(n===md)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===us)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Ur)return i.HALF_FLOAT;if(n===_d)return i.ALPHA;if(n===xd)return i.RGB;if(n===Zn)return i.RGBA;if(n===vd)return i.LUMINANCE;if(n===yd)return i.LUMINANCE_ALPHA;if(n===$s)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===Md)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===Sd)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===No||n===ko||n===Oo||n===zo)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Nc||n===kc||n===Oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===Fc||n===Bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===Fc)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===jc||n===$c||n===Kc||n===Zc||n===Jc||n===Qc||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wd||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class t1 extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
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

}`;class s1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r1 extends cr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new s1,p=e.getContextAttributes();let g=null,v=null;const x=[],M=[],A=new wt;let b=null;const E=new xn;E.layers.enable(1),E.viewport=new me;const P=new xn;P.layers.enable(2),P.viewport=new me;const D=[E,P],y=new t1;y.layers.enable(1),y.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let O=x[Q];return O===void 0&&(O=new Ka,x[Q]=O),O.getTargetRaySpace()},this.getControllerGrip=function(Q){let O=x[Q];return O===void 0&&(O=new Ka,x[Q]=O),O.getGripSpace()},this.getHand=function(Q){let O=x[Q];return O===void 0&&(O=new Ka,x[Q]=O),O.getHandSpace()};function N(Q){const O=M.indexOf(Q.inputSource);if(O===-1)return;const ct=x[O];ct!==void 0&&(ct.update(Q.inputSource,Q.frame,l||o),ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<x.length;Q++){const O=M[Q];O!==null&&(M[Q]=null,x[Q].disconnect(O))}w=null,U=null,_.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,O),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ds(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,ct=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=p.stencil?sr:$s,ct=p.stencil?ir:us);const _t={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ds(d.textureWidth,d.textureHeight,{format:Zn,type:Ri,depthTexture:new Od(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Q){for(let O=0;O<Q.removed.length;O++){const ct=Q.removed[O],nt=M.indexOf(ct);nt>=0&&(M[nt]=null,x[nt].disconnect(ct))}for(let O=0;O<Q.added.length;O++){const ct=Q.added[O];let nt=M.indexOf(ct);if(nt===-1){for(let ft=0;ft<x.length;ft++)if(ft>=M.length){M.push(ct),nt=ft;break}else if(M[ft]===null){M[ft]=ct,nt=ft;break}if(nt===-1)break}const _t=x[nt];_t&&_t.connect(ct)}}const H=new I,K=new I;function z(Q,O,ct){H.setFromMatrixPosition(O.matrixWorld),K.setFromMatrixPosition(ct.matrixWorld);const nt=H.distanceTo(K),_t=O.projectionMatrix.elements,ft=ct.projectionMatrix.elements,St=_t[14]/(_t[10]-1),At=_t[14]/(_t[10]+1),Z=(_t[9]+1)/_t[5],T=(_t[9]-1)/_t[5],gt=(_t[8]-1)/_t[0],rt=(ft[8]+1)/ft[0],st=St*gt,lt=St*rt,Pt=nt/(-gt+rt),ot=Pt*-gt;if(O.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(Pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_t[10]===-1)Q.projectionMatrix.copy(O.projectionMatrix),Q.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const C=St+Pt,S=At+Pt,B=st-ot,J=lt+(nt-ot),it=Z*At/S*C,tt=T*At/S*C;Q.projectionMatrix.makePerspective(B,J,it,tt,C,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ut(Q,O){O===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(O.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let O=Q.near,ct=Q.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),y.near=P.near=E.near=O,y.far=P.far=E.far=ct,(w!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,U=y.far);const nt=Q.parent,_t=y.cameras;ut(y,nt);for(let ft=0;ft<_t.length;ft++)ut(_t[ft],nt);_t.length===2?z(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),dt(Q,y,nt)};function dt(Q,O,ct){ct===null?Q.matrix.copy(O.matrixWorld):(Q.matrix.copy(ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(O.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(O.projectionMatrix),Q.projectionMatrixInverse.copy(O.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=rr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let at=null;function Ot(Q,O){if(h=O.getViewerPose(l||o),m=O,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let nt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let ft=0;ft<ct.length;ft++){const St=ct[ft];let At=null;if(f!==null)At=f.getViewport(St);else{const T=u.getViewSubImage(d,St);At=T.viewport,ft===0&&(t.setRenderTargetTextures(v,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(v))}let Z=D[ft];Z===void 0&&(Z=new xn,Z.layers.enable(ft),Z.viewport=new me,D[ft]=Z),Z.matrix.fromArray(St.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(St.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(At.x,At.y,At.width,At.height),ft===0&&(y.matrix.copy(Z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(Z)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const ft=u.getDepthInformation(ct[0]);ft&&ft.isValid&&ft.texture&&_.init(t,ft,s.renderState)}}for(let ct=0;ct<x.length;ct++){const nt=M[ct],_t=x[ct];nt!==null&&_t!==void 0&&_t.update(nt,O,l||o)}at&&at(Q,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),m=null}const Yt=new Nd;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(Q){at=Q},this.dispose=function(){}}}const is=new Jn,o1=new we;function a1(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Id(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,x,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,v,x):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===dn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===dn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=t.get(g),x=v.envMap,M=v.envMapRotation;x&&(p.envMap.value=x,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(is)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(v,A);const b=t.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function h(v){const x=u();v.__bindingPointIndex=x;const M=i.createBuffer(),A=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,E=M.length;b<E;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,y=P.length;D<y;D++){const w=P[D];if(f(w,b,D,A)===!0){const U=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let Y=0;Y<N.length;Y++){const H=N[Y],K=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+X,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,M,A){const b=v.value,E=x+"_"+M;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:A[E]=b.clone(),!0;{const P=A[E];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[E]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function m(v){const x=v.uniforms;let M=0;const A=16;for(let E=0,P=x.length;E<P;E++){const D=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,w=D.length;y<w;y++){const U=D[y],N=Array.isArray(U.value)?U.value:[U.value];for(let X=0,Y=N.length;X<Y;X++){const H=N[X],K=_(H),z=M%A,ut=z%K.boundary,dt=z+ut;M+=ut,dt!==0&&A-dt<K.storage&&(M+=A-dt),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=K.storage}}}const b=M%A;return b>0&&(M+=A-b),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class l1{constructor(t={}){const{canvas:e=K0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Yi,this.toneMappingExposure=1;const x=this;let M=!1,A=0,b=0,E=null,P=-1,D=null;const y=new me,w=new me;let U=null;const N=new kt(0);let X=0,Y=e.width,H=e.height,K=1,z=null,ut=null;const dt=new me(0,0,Y,H),at=new me(0,0,Y,H);let Ot=!1;const Yt=new zl;let Q=!1,O=!1;const ct=new we,nt=new we,_t=new I,ft=new me,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Z(){return E===null?K:1}let T=n;function gt(R,G){return e.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",bt,!1),T===null){const G="webgl2";if(T=gt(G,R),T===null)throw gt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let rt,st,lt,Pt,ot,C,S,B,J,it,tt,Lt,mt,Mt,Kt,pt,Rt,Ht,Gt,Et,ee,jt,ae,F;function L(){rt=new p_(T),rt.init(),jt=new Qx(T,rt),st=new c_(T,rt,t,jt),lt=new Kx(T),st.reverseDepthBuffer&&lt.buffers.depth.setReversed(!0),Pt=new __(T),ot=new Nx,C=new Jx(T,rt,lt,ot,st,jt,Pt),S=new h_(x),B=new f_(x),J=new bp(T),ae=new o_(T,J),it=new m_(T,J,Pt,ae),tt=new v_(T,it,J,Pt),Gt=new x_(T,st,C),pt=new l_(ot),Lt=new Ux(x,S,B,rt,st,ae,pt),mt=new a1(x,ot),Mt=new Ox,Kt=new Vx(rt),Ht=new r_(x,S,B,lt,tt,d,c),Rt=new jx(x,tt,st),F=new c1(T,Pt,st,lt),Et=new a_(T,rt,Pt),ee=new g_(T,rt,Pt),Pt.programs=Lt.programs,x.capabilities=st,x.extensions=rt,x.properties=ot,x.renderLists=Mt,x.shadowMap=Rt,x.state=lt,x.info=Pt}L();const k=new r1(x,T);this.xr=k,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const R=rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(Y,H,!1))},this.getSize=function(R){return R.set(Y,H)},this.setSize=function(R,G,j=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,H=G,e.width=Math.floor(R*K),e.height=Math.floor(G*K),j===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(Y*K,H*K).floor()},this.setDrawingBufferSize=function(R,G,j){Y=R,H=G,K=j,e.width=Math.floor(R*j),e.height=Math.floor(G*j),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,G,j,$){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,G,j,$),lt.viewport(y.copy(dt).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,G,j,$){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,G,j,$),lt.scissor(w.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){lt.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(R=!0,G=!0,j=!0){let $=0;if(R){let V=!1;if(E!==null){const yt=E.texture.format;V=yt===Dl||yt===Il||yt===Ll}if(V){const yt=E.texture.type,Ct=yt===Ri||yt===us||yt===Pr||yt===ir||yt===Cl||yt===Pl,Dt=Ht.getClearColor(),Nt=Ht.getClearAlpha(),Xt=Dt.r,$t=Dt.g,Ft=Dt.b;Ct?(f[0]=Xt,f[1]=$t,f[2]=Ft,f[3]=Nt,T.clearBufferuiv(T.COLOR,0,f)):(m[0]=Xt,m[1]=$t,m[2]=Ft,m[3]=Nt,T.clearBufferiv(T.COLOR,0,m))}else $|=T.COLOR_BUFFER_BIT}G&&($|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Mt.dispose(),Kt.dispose(),ot.dispose(),S.dispose(),B.dispose(),tt.dispose(),ae.dispose(),F.dispose(),Lt.dispose(),k.dispose(),k.removeEventListener("sessionstart",ur),k.removeEventListener("sessionend",dr),ni.stop()};function q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Pt.autoReset,G=Rt.enabled,j=Rt.autoUpdate,$=Rt.needsUpdate,V=Rt.type;L(),Pt.autoReset=R,Rt.enabled=G,Rt.autoUpdate=j,Rt.needsUpdate=$,Rt.type=V}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Jt(R){const G=R.target;G.removeEventListener("dispose",Jt),Ce(G)}function Ce(R){Ae(R),ot.remove(R)}function Ae(R){const G=ot.get(R).programs;G!==void 0&&(G.forEach(function(j){Lt.releaseProgram(j)}),R.isShaderMaterial&&Lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,j,$,V,yt){G===null&&(G=St);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Dt=Rf(R,G,j,$,V);lt.setMaterial($,Ct);let Nt=j.index,Xt=1;if($.wireframe===!0){if(Nt=it.getWireframeAttribute(j),Nt===void 0)return;Xt=2}const $t=j.drawRange,Ft=j.attributes.position;let fe=$t.start*Xt,ye=($t.start+$t.count)*Xt;yt!==null&&(fe=Math.max(fe,yt.start*Xt),ye=Math.min(ye,(yt.start+yt.count)*Xt)),Nt!==null?(fe=Math.max(fe,0),ye=Math.min(ye,Nt.count)):Ft!=null&&(fe=Math.max(fe,0),ye=Math.min(ye,Ft.count));const Pe=ye-fe;if(Pe<0||Pe===1/0)return;ae.setup(V,$,Dt,j,Nt);let Mn,ce=Et;if(Nt!==null&&(Mn=J.get(Nt),ce=ee,ce.setIndex(Mn)),V.isMesh)$.wireframe===!0?(lt.setLineWidth($.wireframeLinewidth*Z()),ce.setMode(T.LINES)):ce.setMode(T.TRIANGLES);else if(V.isLine){let Bt=$.linewidth;Bt===void 0&&(Bt=1),lt.setLineWidth(Bt*Z()),V.isLineSegments?ce.setMode(T.LINES):V.isLineLoop?ce.setMode(T.LINE_LOOP):ce.setMode(T.LINE_STRIP)}else V.isPoints?ce.setMode(T.POINTS):V.isSprite&&ce.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ce.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,en=V._multiDrawCounts,le=V._multiDrawCount,Gn=Nt?J.get(Nt).bytesPerElement:1,vs=ot.get($).currentProgram.getUniforms();for(let Sn=0;Sn<le;Sn++)vs.setValue(T,"_gl_DrawID",Sn),ce.render(Bt[Sn]/Gn,en[Sn])}else if(V.isInstancedMesh)ce.renderInstances(fe,Pe,V.count);else if(j.isInstancedBufferGeometry){const Bt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,en=Math.min(j.instanceCount,Bt);ce.renderInstances(fe,Pe,en)}else ce.render(fe,Pe)};function ne(R,G,j){R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Hr(R,G,j),R.side=ui,R.needsUpdate=!0,Hr(R,G,j),R.side=$n):Hr(R,G,j)}this.compile=function(R,G,j=null){j===null&&(j=R),p=Kt.get(j),p.init(G),v.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==j&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const yt=V.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const Dt=yt[Ct];ne(Dt,j,V),$.add(Dt)}else ne(yt,j,V),$.add(yt)}),v.pop(),p=null,$},this.compileAsync=function(R,G,j=null){const $=this.compile(R,G,j);return new Promise(V=>{function yt(){if($.forEach(function(Ct){ot.get(Ct).currentProgram.isReady()&&$.delete(Ct)}),$.size===0){V(R);return}setTimeout(yt,10)}rt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let tn=null;function Rn(R){tn&&tn(R)}function ur(){ni.stop()}function dr(){ni.start()}const ni=new Nd;ni.setAnimationLoop(Rn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(R){tn=R,k.setAnimationLoop(R),R===null?ni.stop():ni.start()},k.addEventListener("sessionstart",ur),k.addEventListener("sessionend",dr),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(G),G=k.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,E),p=Kt.get(R,v.length),p.init(G),v.push(p),nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Yt.setFromProjectionMatrix(nt),O=this.localClippingEnabled,Q=pt.init(this.clippingPlanes,O),_=Mt.get(R,g.length),_.init(),g.push(_),k.enabled===!0&&k.isPresenting===!0){const yt=x.xr.getDepthSensingMesh();yt!==null&&xa(yt,G,-1/0,x.sortObjects)}xa(R,G,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(z,ut),At=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,At&&Ht.addToRenderList(_,R),this.info.render.frame++,Q===!0&&pt.beginShadows();const j=p.state.shadowsArray;Rt.render(j,R,G),Q===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,V=_.transmissive;if(p.setupLights(),G.isArrayCamera){const yt=G.cameras;if(V.length>0)for(let Ct=0,Dt=yt.length;Ct<Dt;Ct++){const Nt=yt[Ct];ih($,V,R,Nt)}At&&Ht.render(R);for(let Ct=0,Dt=yt.length;Ct<Dt;Ct++){const Nt=yt[Ct];nh(_,R,Nt,Nt.viewport)}}else V.length>0&&ih($,V,R,G),At&&Ht.render(R),nh(_,R,G);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,G),ae.resetDefaultState(),P=-1,D=null,v.pop(),v.length>0?(p=v[v.length-1],Q===!0&&pt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function xa(R,G,j,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Yt.intersectsSprite(R)){$&&ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nt);const Ct=tt.update(R),Dt=R.material;Dt.visible&&_.push(R,Ct,Dt,j,ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Yt.intersectsObject(R))){const Ct=tt.update(R),Dt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ft.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ft.copy(Ct.boundingSphere.center)),ft.applyMatrix4(R.matrixWorld).applyMatrix4(nt)),Array.isArray(Dt)){const Nt=Ct.groups;for(let Xt=0,$t=Nt.length;Xt<$t;Xt++){const Ft=Nt[Xt],fe=Dt[Ft.materialIndex];fe&&fe.visible&&_.push(R,Ct,fe,j,ft.z,Ft)}}else Dt.visible&&_.push(R,Ct,Dt,j,ft.z,null)}}const yt=R.children;for(let Ct=0,Dt=yt.length;Ct<Dt;Ct++)xa(yt[Ct],G,j,$)}function nh(R,G,j,$){const V=R.opaque,yt=R.transmissive,Ct=R.transparent;p.setupLightsView(j),Q===!0&&pt.setGlobalState(x.clippingPlanes,j),$&&lt.viewport(y.copy($)),V.length>0&&Br(V,G,j),yt.length>0&&Br(yt,G,j),Ct.length>0&&Br(Ct,G,j),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ih(R,G,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ds(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Ur:Ri,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const yt=p.state.transmissionRenderTarget[$.id],Ct=$.viewport||y;yt.setSize(Ct.z,Ct.w);const Dt=x.getRenderTarget();x.setRenderTarget(yt),x.getClearColor(N),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),At&&Ht.render(j);const Nt=x.toneMapping;x.toneMapping=Yi;const Xt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Q===!0&&pt.setGlobalState(x.clippingPlanes,$),Br(R,j,$),C.updateMultisampleRenderTarget(yt),C.updateRenderTargetMipmap(yt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ft=0,fe=G.length;Ft<fe;Ft++){const ye=G[Ft],Pe=ye.object,Mn=ye.geometry,ce=ye.material,Bt=ye.group;if(ce.side===$n&&Pe.layers.test($.layers)){const en=ce.side;ce.side=dn,ce.needsUpdate=!0,sh(Pe,j,$,Mn,ce,Bt),ce.side=en,ce.needsUpdate=!0,$t=!0}}$t===!0&&(C.updateMultisampleRenderTarget(yt),C.updateRenderTargetMipmap(yt))}x.setRenderTarget(Dt),x.setClearColor(N,X),Xt!==void 0&&($.viewport=Xt),x.toneMapping=Nt}function Br(R,G,j){const $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,yt=R.length;V<yt;V++){const Ct=R[V],Dt=Ct.object,Nt=Ct.geometry,Xt=$===null?Ct.material:$,$t=Ct.group;Dt.layers.test(j.layers)&&sh(Dt,G,j,Nt,Xt,$t)}}function sh(R,G,j,$,V,yt){R.onBeforeRender(x,G,j,$,V,yt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,G,j,$,R,yt),V.transparent===!0&&V.side===$n&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,x.renderBufferDirect(j,G,$,V,R,yt),V.side=ui,V.needsUpdate=!0,x.renderBufferDirect(j,G,$,V,R,yt),V.side=$n):x.renderBufferDirect(j,G,$,V,R,yt),R.onAfterRender(x,G,j,$,V,yt)}function Hr(R,G,j){G.isScene!==!0&&(G=St);const $=ot.get(R),V=p.state.lights,yt=p.state.shadowsArray,Ct=V.state.version,Dt=Lt.getParameters(R,V.state,yt,G,j),Nt=Lt.getProgramCacheKey(Dt);let Xt=$.programs;$.environment=R.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(R.isMeshStandardMaterial?B:S).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Jt),Xt=new Map,$.programs=Xt);let $t=Xt.get(Nt);if($t!==void 0){if($.currentProgram===$t&&$.lightsStateVersion===Ct)return oh(R,Dt),$t}else Dt.uniforms=Lt.getUniforms(R),R.onBeforeCompile(Dt,x),$t=Lt.acquireProgram(Dt,Nt),Xt.set(Nt,$t),$.uniforms=Dt.uniforms;const Ft=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ft.clippingPlanes=pt.uniform),oh(R,Dt),$.needsLights=Pf(R),$.lightsStateVersion=Ct,$.needsLights&&(Ft.ambientLightColor.value=V.state.ambient,Ft.lightProbe.value=V.state.probe,Ft.directionalLights.value=V.state.directional,Ft.directionalLightShadows.value=V.state.directionalShadow,Ft.spotLights.value=V.state.spot,Ft.spotLightShadows.value=V.state.spotShadow,Ft.rectAreaLights.value=V.state.rectArea,Ft.ltc_1.value=V.state.rectAreaLTC1,Ft.ltc_2.value=V.state.rectAreaLTC2,Ft.pointLights.value=V.state.point,Ft.pointLightShadows.value=V.state.pointShadow,Ft.hemisphereLights.value=V.state.hemi,Ft.directionalShadowMap.value=V.state.directionalShadowMap,Ft.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ft.spotShadowMap.value=V.state.spotShadowMap,Ft.spotLightMatrix.value=V.state.spotLightMatrix,Ft.spotLightMap.value=V.state.spotLightMap,Ft.pointShadowMap.value=V.state.pointShadowMap,Ft.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=$t,$.uniformsList=null,$t}function rh(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Ho.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function oh(R,G){const j=ot.get(R);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Rf(R,G,j,$,V){G.isScene!==!0&&(G=St),C.resetTextureUnits();const yt=G.fog,Ct=$.isMeshStandardMaterial?G.environment:null,Dt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ki,Nt=($.isMeshStandardMaterial?B:S).get($.envMap||Ct),Xt=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$t=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!j.morphAttributes.position,fe=!!j.morphAttributes.normal,ye=!!j.morphAttributes.color;let Pe=Yi;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pe=x.toneMapping);const Mn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ce=Mn!==void 0?Mn.length:0,Bt=ot.get($),en=p.state.lights;if(Q===!0&&(O===!0||R!==D)){const Cn=R===D&&$.id===P;pt.setState($,R,Cn)}let le=!1;$.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==en.state.version||Bt.outputColorSpace!==Dt||V.isBatchedMesh&&Bt.batching===!1||!V.isBatchedMesh&&Bt.batching===!0||V.isBatchedMesh&&Bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Bt.instancing===!1||!V.isInstancedMesh&&Bt.instancing===!0||V.isSkinnedMesh&&Bt.skinning===!1||!V.isSkinnedMesh&&Bt.skinning===!0||V.isInstancedMesh&&Bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Bt.instancingMorph===!1&&V.morphTexture!==null||Bt.envMap!==Nt||$.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==pt.numPlanes||Bt.numIntersection!==pt.numIntersection)||Bt.vertexAlphas!==Xt||Bt.vertexTangents!==$t||Bt.morphTargets!==Ft||Bt.morphNormals!==fe||Bt.morphColors!==ye||Bt.toneMapping!==Pe||Bt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Bt.__version=$.version);let Gn=Bt.currentProgram;le===!0&&(Gn=Hr($,G,V));let vs=!1,Sn=!1,va=!1;const De=Gn.getUniforms(),Li=Bt.uniforms;if(lt.useProgram(Gn.program)&&(vs=!0,Sn=!0,va=!0),$.id!==P&&(P=$.id,Sn=!0),vs||D!==R){st.reverseDepthBuffer?(ct.copy(R.projectionMatrix),J0(ct),Q0(ct),De.setValue(T,"projectionMatrix",ct)):De.setValue(T,"projectionMatrix",R.projectionMatrix),De.setValue(T,"viewMatrix",R.matrixWorldInverse);const Cn=De.map.cameraPosition;Cn!==void 0&&Cn.setValue(T,_t.setFromMatrixPosition(R.matrixWorld)),st.logarithmicDepthBuffer&&De.setValue(T,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&De.setValue(T,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,Sn=!0,va=!0)}if(V.isSkinnedMesh){De.setOptional(T,V,"bindMatrix"),De.setOptional(T,V,"bindMatrixInverse");const Cn=V.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),De.setValue(T,"boneTexture",Cn.boneTexture,C))}V.isBatchedMesh&&(De.setOptional(T,V,"batchingTexture"),De.setValue(T,"batchingTexture",V._matricesTexture,C),De.setOptional(T,V,"batchingIdTexture"),De.setValue(T,"batchingIdTexture",V._indirectTexture,C),De.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&De.setValue(T,"batchingColorTexture",V._colorsTexture,C));const ya=j.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&Gt.update(V,j,Gn),(Sn||Bt.receiveShadow!==V.receiveShadow)&&(Bt.receiveShadow=V.receiveShadow,De.setValue(T,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Li.envMap.value=Nt,Li.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(Li.envMapIntensity.value=G.environmentIntensity),Sn&&(De.setValue(T,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Cf(Li,va),yt&&$.fog===!0&&mt.refreshFogUniforms(Li,yt),mt.refreshMaterialUniforms(Li,$,K,H,p.state.transmissionRenderTarget[R.id]),Ho.upload(T,rh(Bt),Li,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ho.upload(T,rh(Bt),Li,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&De.setValue(T,"center",V.center),De.setValue(T,"modelViewMatrix",V.modelViewMatrix),De.setValue(T,"normalMatrix",V.normalMatrix),De.setValue(T,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Cn=$.uniformsGroups;for(let Ma=0,Lf=Cn.length;Ma<Lf;Ma++){const ah=Cn[Ma];F.update(ah,Gn),F.bind(ah,Gn)}}return Gn}function Cf(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Pf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,G,j){ot.get(R.texture).__webglTexture=G,ot.get(R.depthTexture).__webglTexture=j;const $=ot.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const j=ot.get(R);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,j=0){E=R,A=G,b=j;let $=!0,V=null,yt=!1,Ct=!1;if(R){const Nt=ot.get(R);if(Nt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Nt.__hasExternalTextures)C.rebindTextures(R,ot.get(R.texture).__webglTexture,ot.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ft=R.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&ot.has(Ft)&&(R.width!==Ft.image.width||R.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const $t=ot.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[G])?V=$t[G][j]:V=$t[G],yt=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?V=ot.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?V=$t[j]:V=$t,y.copy(R.viewport),w.copy(R.scissor),U=R.scissorTest}else y.copy(dt).multiplyScalar(K).floor(),w.copy(at).multiplyScalar(K).floor(),U=Ot;if(lt.bindFramebuffer(T.FRAMEBUFFER,V)&&$&&lt.drawBuffers(R,V),lt.viewport(y),lt.scissor(w),lt.setScissorTest(U),yt){const Nt=ot.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,Nt.__webglTexture,j)}else if(Ct){const Nt=ot.get(R.texture),Xt=G||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nt.__webglTexture,j||0,Xt)}P=-1},this.readRenderTargetPixels=function(R,G,j,$,V,yt,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){lt.bindFramebuffer(T.FRAMEBUFFER,Dt);try{const Nt=R.texture,Xt=Nt.format,$t=Nt.type;if(!st.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&j>=0&&j<=R.height-V&&T.readPixels(G,j,$,V,jt.convert(Xt),jt.convert($t),yt)}finally{const Nt=E!==null?ot.get(E).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,G,j,$,V,yt,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){const Nt=R.texture,Xt=Nt.format,$t=Nt.type;if(!st.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-$&&j>=0&&j<=R.height-V){lt.bindFramebuffer(T.FRAMEBUFFER,Dt);const Ft=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ft),T.bufferData(T.PIXEL_PACK_BUFFER,yt.byteLength,T.STREAM_READ),T.readPixels(G,j,$,V,jt.convert(Xt),jt.convert($t),0);const fe=E!==null?ot.get(E).__webglFramebuffer:null;lt.bindFramebuffer(T.FRAMEBUFFER,fe);const ye=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Z0(T,ye,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ft),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,yt),T.deleteBuffer(Ft),T.deleteSync(ye),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,j=0){R.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-j),V=Math.floor(R.image.width*$),yt=Math.floor(R.image.height*$),Ct=G!==null?G.x:0,Dt=G!==null?G.y:0;C.setTexture2D(R,0),T.copyTexSubImage2D(T.TEXTURE_2D,j,0,0,Ct,Dt,V,yt),lt.unbindTexture()},this.copyTextureToTexture=function(R,G,j=null,$=null,V=0){R.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,j=null);let yt,Ct,Dt,Nt,Xt,$t;j!==null?(yt=j.max.x-j.min.x,Ct=j.max.y-j.min.y,Dt=j.min.x,Nt=j.min.y):(yt=R.image.width,Ct=R.image.height,Dt=0,Nt=0),$!==null?(Xt=$.x,$t=$.y):(Xt=0,$t=0);const Ft=jt.convert(G.format),fe=jt.convert(G.type);C.setTexture2D(G,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const ye=T.getParameter(T.UNPACK_ROW_LENGTH),Pe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Mn=T.getParameter(T.UNPACK_SKIP_PIXELS),ce=T.getParameter(T.UNPACK_SKIP_ROWS),Bt=T.getParameter(T.UNPACK_SKIP_IMAGES),en=R.isCompressedTexture?R.mipmaps[V]:R.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,en.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,en.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nt),R.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,Xt,$t,yt,Ct,Ft,fe,en.data):R.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,Xt,$t,en.width,en.height,Ft,en.data):T.texSubImage2D(T.TEXTURE_2D,V,Xt,$t,yt,Ct,Ft,fe,en),T.pixelStorei(T.UNPACK_ROW_LENGTH,ye),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Mn),T.pixelStorei(T.UNPACK_SKIP_ROWS,ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Bt),V===0&&G.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(R,G,j=null,$=null,V=0){R.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0);let yt,Ct,Dt,Nt,Xt,$t,Ft,fe,ye;const Pe=R.isCompressedTexture?R.mipmaps[V]:R.image;j!==null?(yt=j.max.x-j.min.x,Ct=j.max.y-j.min.y,Dt=j.max.z-j.min.z,Nt=j.min.x,Xt=j.min.y,$t=j.min.z):(yt=Pe.width,Ct=Pe.height,Dt=Pe.depth,Nt=0,Xt=0,$t=0),$!==null?(Ft=$.x,fe=$.y,ye=$.z):(Ft=0,fe=0,ye=0);const Mn=jt.convert(G.format),ce=jt.convert(G.type);let Bt;if(G.isData3DTexture)C.setTexture3D(G,0),Bt=T.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)C.setTexture2DArray(G,0),Bt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const en=T.getParameter(T.UNPACK_ROW_LENGTH),le=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Gn=T.getParameter(T.UNPACK_SKIP_PIXELS),vs=T.getParameter(T.UNPACK_SKIP_ROWS),Sn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Pe.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pe.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Nt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,$t),R.isDataTexture||R.isData3DTexture?T.texSubImage3D(Bt,V,Ft,fe,ye,yt,Ct,Dt,Mn,ce,Pe.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(Bt,V,Ft,fe,ye,yt,Ct,Dt,Mn,Pe.data):T.texSubImage3D(Bt,V,Ft,fe,ye,yt,Ct,Dt,Mn,ce,Pe),T.pixelStorei(T.UNPACK_ROW_LENGTH,en),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gn),T.pixelStorei(T.UNPACK_SKIP_ROWS,vs),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Sn),V===0&&G.generateMipmaps&&T.generateMipmap(Bt),lt.unbindTexture()},this.initRenderTarget=function(R){ot.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),lt.unbindTexture()},this.resetState=function(){A=0,b=0,E=null,lt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Nl?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===ca?"display-p3":"srgb"}}class Bl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class h1 extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gd extends gs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ou=new we,al=new Ol,lo=new la,ho=new I;class u1 extends He{constructor(t=new on,e=new Gd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;ou.copy(s).invert(),al.copy(t.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=l.getX(m);ho.fromBufferAttribute(u,p),au(ho,p,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)ho.fromBufferAttribute(u,m),au(ho,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function au(i,t,e,n,s,r,o){const a=al.distanceSqToPoint(i);if(a<e){const c=new I;al.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Qn extends fn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new wt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new we;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(rn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(rn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hl extends fi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new wt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class d1 extends Hl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const uo=new I,Za=new Gl,Ja=new Gl,Qa=new Gl;class f1 extends fi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),l=uo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Za.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,p),Ja.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,p),Qa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ja.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Qa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Za.calc(c),Ja.calc(c),Qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function p1(i,t){const e=1-i;return e*e*t}function m1(i,t){return 2*(1-i)*i*t}function g1(i,t){return i*i*t}function Tr(i,t,e,n){return p1(i,t)+m1(i,e)+g1(i,n)}function _1(i,t){const e=1-i;return e*e*e*t}function x1(i,t){const e=1-i;return 3*e*e*i*t}function v1(i,t){return 3*(1-i)*i*i*t}function y1(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return _1(i,t)+x1(i,e)+v1(i,n)+y1(i,s)}class Vd extends fi{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class M1 extends fi{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y),Ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wd extends fi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S1 extends fi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xd extends fi{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w1 extends fi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y),Tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qd extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cu(a,c.x,l.x,h.x,u.x),cu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new wt().fromArray(s))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:d1,CatmullRomCurve3:f1,CubicBezierCurve:Vd,CubicBezierCurve3:M1,EllipseCurve:Hl,LineCurve:Wd,LineCurve3:S1,QuadraticBezierCurve:Xd,QuadraticBezierCurve3:w1,SplineCurve:qd});class b1 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}}class lu extends b1{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wd(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Xd(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Vd(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Hl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ua extends on{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ge extends on{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function v(){const M=new I,A=new I;let b=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const D=[],y=P/r,w=y*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,X=N*c+a,Y=Math.sin(X),H=Math.cos(X);A.x=w*Y,A.y=-y*n+p,A.z=w*H,u.push(A.x,A.y,A.z),M.set(Y,E,H).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-y),D.push(m++)}_.push(D)}for(let P=0;P<s;P++)for(let D=0;D<r;D++){const y=_[D][P],w=_[D+1][P],U=_[D+1][P+1],N=_[D][P+1];t>0&&(h.push(y,w,N),b+=3),e>0&&(h.push(w,U,N),b+=3)}l.addGroup(g,b,0),g+=b}function x(M){const A=m,b=new wt,E=new I;let P=0;const D=M===!0?t:e,y=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),m++;const w=m;for(let U=0;U<=s;U++){const X=U/s*c+a,Y=Math.cos(X),H=Math.sin(X);E.x=D*H,E.y=p*y,E.z=D*Y,u.push(E.x,E.y,E.z),d.push(0,y,0),b.x=Y*.5+.5,b.y=H*.5*y+.5,f.push(b.x,b.y),m++}for(let U=0;U<s;U++){const N=A+U,X=w+U;M===!0?h.push(X,X+1,N):h.push(X+1,X,N),P+=3}l.addGroup(g,P,M===!0?1:2),g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends Ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new da(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vl extends on{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new I,M=new I,A=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],M),f(e[b+2],A),c(x,M,A,v)}function c(v,x,M,A){const b=A+1,E=[];for(let P=0;P<=b;P++){E[P]=[];const D=v.clone().lerp(M,P/b),y=x.clone().lerp(M,P/b),w=b-P;for(let U=0;U<=w;U++)U===0&&P===b?E[P][U]=D:E[P][U]=D.clone().lerp(y,U/w)}for(let P=0;P<b;P++)for(let D=0;D<2*(b-P)-1;D++){const y=Math.floor(D/2);D%2===0?(d(E[P][y+1]),d(E[P+1][y]),d(E[P][y])):(d(E[P][y+1]),d(E[P+1][y+1]),d(E[P+1][y]))}}function l(v){const x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const v=new I;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const M=p(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;o.push(M,1-A)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],A=o[v+4],b=Math.max(x,M,A),E=Math.min(x,M,A);b>.9&&E<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function m(){const v=new I,x=new I,M=new I,A=new I,b=new wt,E=new wt,P=new wt;for(let D=0,y=0;D<r.length;D+=9,y+=6){v.set(r[D+0],r[D+1],r[D+2]),x.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),b.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),A.copy(v).add(x).add(M).divideScalar(3);const w=p(A);_(b,y+0,v,w),_(E,y+2,x,w),_(P,y+4,M,w)}}function _(v,x,M,A){A<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.vertices,t.indices,t.radius,t.details)}}class Yd extends lu{constructor(t){super(t),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new lu().fromJSON(s))}return this}}const E1={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=jd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=P1(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Lr(r,o,e,a,c,f,0),o}};function jd(i,t,e,n,s){let r,o;if(s===H1(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hu(r,i[r],i[r+1],o);return o&&fa(o,o.next)&&(Dr(o),o=o.next),o}function fs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fa(e,e.next)||Re(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&N1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?A1(i,n,s,r):T1(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=R1(fs(i),t,e),Lr(i,t,e,n,s,r,2)):o===2&&C1(i,t,e,n,s,r):Lr(fs(i),t,e,n,s,r,1);break}}}function T1(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Gs(s,a,r,c,o,l,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function A1(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Re(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,g=ll(f,m,t,e,n),v=ll(_,p,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=g&&M&&M.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Gs(a,h,c,u,l,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Gs(a,h,c,u,l,d,M.x,M.y)&&Re(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Gs(a,h,c,u,l,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Gs(a,h,c,u,l,d,M.x,M.y)&&Re(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function R1(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!fa(s,r)&&$d(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return fs(n)}function C1(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z1(o,a)){let c=Kd(o,a);o=fs(o,o.next),c=fs(c,c.next),Lr(o,t,e,n,s,r,0),Lr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function P1(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=jd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(O1(l));for(s.sort(L1),r=0;r<s.length;r++)e=I1(s[r],e);return e}function L1(i,t){return i.x-t.x}function I1(i,t){const e=D1(i,t);if(!e)return t;const n=Kd(e,i);return fs(n,n.next),fs(e,e.next)}function D1(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Gs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ir(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&U1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function U1(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function N1(i,t,e,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k1(s)}function k1(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function z1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!F1(i,t)&&(Ir(i,t)&&Ir(t,i)&&B1(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||fa(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fa(i,t){return i.x===t.x&&i.y===t.y}function $d(i,t,e,n){const s=po(Re(i,t,e)),r=po(Re(i,t,n)),o=po(Re(e,n,i)),a=po(Re(e,n,t));return!!(s!==r&&o!==a||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||o===0&&fo(e,i,n)||a===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function F1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$d(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function B1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kd(i,t){const e=new hl(i.i,i.x,i.y),n=new hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hu(i,t,e,n){const s=new hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function H1(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Rr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uu(t),du(n,t);let o=t.length;e.forEach(uu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,du(n,e[c]);const a=E1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function uu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Wl extends on{constructor(t=new Yd([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:G1;let x,M=!1,A,b,E,P;g&&(x=g.getSpacedPoints(h),M=!0,d=!1,A=g.computeFrenetFrames(h,!1),b=new I,E=new I,P=new I),d||(p=0,f=0,m=0,_=0);const D=a.extractPoints(l);let y=D.shape;const w=D.holes;if(!Rr.isClockWise(y)){y=y.reverse();for(let Z=0,T=w.length;Z<T;Z++){const gt=w[Z];Rr.isClockWise(gt)&&(w[Z]=gt.reverse())}}const N=Rr.triangulateShape(y,w),X=y;for(let Z=0,T=w.length;Z<T;Z++){const gt=w[Z];y=y.concat(gt)}function Y(Z,T,gt){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(T,gt)}const H=y.length,K=N.length;function z(Z,T,gt){let rt,st,lt;const Pt=Z.x-T.x,ot=Z.y-T.y,C=gt.x-Z.x,S=gt.y-Z.y,B=Pt*Pt+ot*ot,J=Pt*S-ot*C;if(Math.abs(J)>Number.EPSILON){const it=Math.sqrt(B),tt=Math.sqrt(C*C+S*S),Lt=T.x-ot/it,mt=T.y+Pt/it,Mt=gt.x-S/tt,Kt=gt.y+C/tt,pt=((Mt-Lt)*S-(Kt-mt)*C)/(Pt*S-ot*C);rt=Lt+Pt*pt-Z.x,st=mt+ot*pt-Z.y;const Rt=rt*rt+st*st;if(Rt<=2)return new wt(rt,st);lt=Math.sqrt(Rt/2)}else{let it=!1;Pt>Number.EPSILON?C>Number.EPSILON&&(it=!0):Pt<-Number.EPSILON?C<-Number.EPSILON&&(it=!0):Math.sign(ot)===Math.sign(S)&&(it=!0),it?(rt=-ot,st=Pt,lt=Math.sqrt(B)):(rt=Pt,st=ot,lt=Math.sqrt(B/2))}return new wt(rt/lt,st/lt)}const ut=[];for(let Z=0,T=X.length,gt=T-1,rt=Z+1;Z<T;Z++,gt++,rt++)gt===T&&(gt=0),rt===T&&(rt=0),ut[Z]=z(X[Z],X[gt],X[rt]);const dt=[];let at,Ot=ut.concat();for(let Z=0,T=w.length;Z<T;Z++){const gt=w[Z];at=[];for(let rt=0,st=gt.length,lt=st-1,Pt=rt+1;rt<st;rt++,lt++,Pt++)lt===st&&(lt=0),Pt===st&&(Pt=0),at[rt]=z(gt[rt],gt[lt],gt[Pt]);dt.push(at),Ot=Ot.concat(at)}for(let Z=0;Z<p;Z++){const T=Z/p,gt=f*Math.cos(T*Math.PI/2),rt=m*Math.sin(T*Math.PI/2)+_;for(let st=0,lt=X.length;st<lt;st++){const Pt=Y(X[st],ut[st],rt);nt(Pt.x,Pt.y,-gt)}for(let st=0,lt=w.length;st<lt;st++){const Pt=w[st];at=dt[st];for(let ot=0,C=Pt.length;ot<C;ot++){const S=Y(Pt[ot],at[ot],rt);nt(S.x,S.y,-gt)}}}const Yt=m+_;for(let Z=0;Z<H;Z++){const T=d?Y(y[Z],Ot[Z],Yt):y[Z];M?(E.copy(A.normals[0]).multiplyScalar(T.x),b.copy(A.binormals[0]).multiplyScalar(T.y),P.copy(x[0]).add(E).add(b),nt(P.x,P.y,P.z)):nt(T.x,T.y,0)}for(let Z=1;Z<=h;Z++)for(let T=0;T<H;T++){const gt=d?Y(y[T],Ot[T],Yt):y[T];M?(E.copy(A.normals[Z]).multiplyScalar(gt.x),b.copy(A.binormals[Z]).multiplyScalar(gt.y),P.copy(x[Z]).add(E).add(b),nt(P.x,P.y,P.z)):nt(gt.x,gt.y,u/h*Z)}for(let Z=p-1;Z>=0;Z--){const T=Z/p,gt=f*Math.cos(T*Math.PI/2),rt=m*Math.sin(T*Math.PI/2)+_;for(let st=0,lt=X.length;st<lt;st++){const Pt=Y(X[st],ut[st],rt);nt(Pt.x,Pt.y,u+gt)}for(let st=0,lt=w.length;st<lt;st++){const Pt=w[st];at=dt[st];for(let ot=0,C=Pt.length;ot<C;ot++){const S=Y(Pt[ot],at[ot],rt);M?nt(S.x,S.y+x[h-1].y,x[h-1].x+gt):nt(S.x,S.y,u+gt)}}}Q(),O();function Q(){const Z=s.length/3;if(d){let T=0,gt=H*T;for(let rt=0;rt<K;rt++){const st=N[rt];_t(st[2]+gt,st[1]+gt,st[0]+gt)}T=h+p*2,gt=H*T;for(let rt=0;rt<K;rt++){const st=N[rt];_t(st[0]+gt,st[1]+gt,st[2]+gt)}}else{for(let T=0;T<K;T++){const gt=N[T];_t(gt[2],gt[1],gt[0])}for(let T=0;T<K;T++){const gt=N[T];_t(gt[0]+H*h,gt[1]+H*h,gt[2]+H*h)}}n.addGroup(Z,s.length/3-Z,0)}function O(){const Z=s.length/3;let T=0;ct(X,T),T+=X.length;for(let gt=0,rt=w.length;gt<rt;gt++){const st=w[gt];ct(st,T),T+=st.length}n.addGroup(Z,s.length/3-Z,1)}function ct(Z,T){let gt=Z.length;for(;--gt>=0;){const rt=gt;let st=gt-1;st<0&&(st=Z.length-1);for(let lt=0,Pt=h+p*2;lt<Pt;lt++){const ot=H*lt,C=H*(lt+1),S=T+rt+ot,B=T+st+ot,J=T+st+C,it=T+rt+C;ft(S,B,J,it)}}}function nt(Z,T,gt){c.push(Z),c.push(T),c.push(gt)}function _t(Z,T,gt){St(Z),St(T),St(gt);const rt=s.length/3,st=v.generateTopUV(n,s,rt-3,rt-2,rt-1);At(st[0]),At(st[1]),At(st[2])}function ft(Z,T,gt,rt){St(Z),St(T),St(rt),St(T),St(gt),St(rt);const st=s.length/3,lt=v.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);At(lt[0]),At(lt[1]),At(lt[3]),At(lt[1]),At(lt[2]),At(lt[3])}function St(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function At(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return V1(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new Wl(n,t.options)}}const G1={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new wt(r,o),new wt(a,c),new wt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new wt(o,1-c),new wt(l,1-u),new wt(d,1-m),new wt(_,1-g)]:[new wt(a,1-c),new wt(h,1-u),new wt(f,1-m),new wt(p,1-g)]}};function V1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pa extends Vl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pa(t.radius,t.detail)}}class ma extends on{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,m=new wt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const g=r+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let g=0;g<n;g++){const v=g+p,x=v,M=v+n+1,A=v+n+2,b=v+1;a.push(x,M,b),a.push(M,A,b)}}this.setIndex(a),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ji extends on{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const v=[],x=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(b+M,1-x),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const x=h[g][v+1],M=h[g][v],A=h[g+1][v],b=h[g+1][v+1];(g!==0||o>0)&&f.push(x,M,b),(g!==n-1||c<Math.PI)&&f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yn extends gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class un extends gs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nr extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class W1 extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tc=new we,fu=new I,pu=new I;class Xl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class X1 extends Xl{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=rr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class q1 extends Nr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new X1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const mu=new we,xr=new I,ec=new I;class Y1 extends Xl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),ec.copy(n.position),ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ec),n.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}}class j1 extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $1 extends Xl{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new $1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class K1 extends Nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);const Z1={clear:0,overcast:.88,rain:1,storm:1},J1=i=>Z1[i==null?void 0:i.condition]??0,si={hemi:.44,ambient:.48,bounce:.34,exposure:.15,fov:-6,shadowSpan:18,shadowBias:-25e-5,shadowNormalBias:.01,rate:2.6},mo={shadowSpan:55,shadowBias:-4e-4,shadowNormalBias:.035},_u=.45,Q1=6;class tv{constructor(t){this.spot=new q1(16767392,0,9,1.15,.7,2),this.spot.castShadow=!0,this.spot.shadow.mapSize.set(1024,1024),this.spot.shadow.camera.near=.3,this.spot.shadow.camera.far=9,this.spot.shadow.bias=-8e-4,this.spot.shadow.normalBias=.012,this.spot.shadow.autoUpdate=!1,this.spot.target=new He,t.add(this.spot,this.spot.target),this._base=new WeakMap,this._roomLights=new WeakMap,this._tmp=new I}base(t){let e=this._base.get(t);return e===void 0&&(e=t.intensity,this._base.set(t,e)),e}lightsFor(t,e){var o;const n=this._roomLights.get(e);if(n!==void 0)return n;let s=e.lights;if(!s){const a=(o=t.buildings)==null?void 0:o.find(c=>c.lights&&Math.abs(c.x-e.x)<.01&&Math.abs(c.z-e.z)<.01&&Math.abs(c.rotY-e.rotY)<.01);s=a==null?void 0:a.lights}if(!s||!s.length)return this._roomLights.set(e,null),null;const r=e.interiorBounds;if(r){const a=Math.cos(e.rotY),c=Math.sin(e.rotY),l=s.filter(h=>{h.updateWorldMatrix(!0,!1),h.getWorldPosition(this._tmp);const u=this._tmp.x-e.x,d=this._tmp.z-e.z,f=u*a-d*c,m=u*c+d*a;return f>r.minX&&f<r.maxX&&m>r.minZ&&m<r.maxZ});l.length&&(s=l)}return this._roomLights.set(e,s),s}update(t,e,n){const s=t.currentBuilding,r=s?this.lightsFor(t,s):null;let o=null,a=Q1;if(r&&e>.02&&n)for(const c of r){const l=c.getWorldPosition(this._tmp).distanceTo(n.position);l<a&&(o=c,a=l)}for(const c of t.enterable){const l=c===s?r:this.lightsFor(t,c);if(!l)continue;const h=c===s?e:0;for(const u of l){const d=h*this.base(u)*(u===o?1-_u:1);u.intensity!==d&&(u.intensity=d)}}o?(o.getWorldPosition(this._tmp),this.spot.position.copy(this._tmp),this.spot.target.position.set(this._tmp.x,this._floorY(s,n),this._tmp.z),this.spot.target.updateMatrixWorld(),this.spot.color.copy(o.color),this.spot.intensity=e*this.base(o)*_u,this.spot.shadow.autoUpdate=!0):(this.spot.intensity!==0||this.spot.shadow.autoUpdate)&&(this.spot.intensity=0,this.spot.shadow.autoUpdate=!1)}_floorY(t,e){const n=e.position.y,s=(t==null?void 0:t.padY)??n;return n-s>.5?n:s}}const qt={grass:7311194,glass:6453644,trunk:6047282,foliage:5208645,foliageLight:6984789,foliageDeep:4154168,metal:9146777,metalDark:4870231,concrete:12039083,skinTones:[15914685,15253915,13803636,11104575,8014374,5517852],hairTones:[2825494,4861726,8014374,12159818,14270346,9276813,2763310,8141370],carBodies:[11680571,3104140,14737632,2764083,5929546,14263361,9080726,7031418]},xt={ceiling:15525851,wall:13814974,trim:16249834,joineryDark:7034951,joineryLight:9073760,floorTimber:9072722,benchtop:12168342,tileFloor:12104358,metalDull:9146777,shadowDark:2764339},Zs=new Map,ev=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function Se(i,t={}){let e=String(i);for(const s of ev)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(Zs.has(e))return Zs.get(e);const n=new yn({color:i,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??ui,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return Zs.set(e,n),n}function ei(i,t){if(Zs.has(i))return Zs.get(i);const e=t();return Zs.set(i,e),e}const nv=i=>{i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function ql(i){return i.onBeforeCompile=nv,i}function _s(){return ei("window",()=>ql(new yn({color:qt.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new kt(16767392),emissiveIntensity:0})))}function iv(){return ei("windowinner",()=>ql(new yn({color:qt.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function sv(){return ei("bulb",()=>new yn({color:16774365,emissive:new kt(16770744),emissiveIntensity:1.6}))}function Zd(){return ei("carglass",()=>new yn({color:2831680,roughness:.2,metalness:.3}))}function Yl(){return ei("headlight",()=>new yn({color:15787727,emissive:new kt(16771512),emissiveIntensity:0}))}function Jd(){return ei("taillight",()=>new yn({color:9186091,emissive:new kt(16726843),emissiveIntensity:.2}))}function Qd(){return ei("headlight-driving",()=>new yn({color:15787727,emissive:new kt(16771512),emissiveIntensity:0}))}function tf(){return ei("streetlamp",()=>new yn({color:15262932,emissive:new kt(16769702),emissiveIntensity:0}))}function ef(){return ei("lamppool",()=>new Ye({color:16768926,transparent:!0,opacity:0,blending:Yo,depthWrite:!1}))}function rv(){return ei("troffer",()=>new yn({color:16185074,roughness:.5,emissive:new kt(14477567),emissiveIntensity:.9}))}function ov(){return ei("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgb(140,140,140)"),n.addColorStop(.55,"rgb(196,196,196)"),n.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new Qn(t);s.colorSpace=qe;const r=new Ye({map:s,blending:Mc,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new It(1,1,1),new be(1,1),new Ge(.5,.5,1,10),new da(.5,1,8),new ji(.5,12,10);const av=new Set;function kr(i){av.add(i)}const cv=`
  varying vec3 vWorld;
  void main() {
    vWorld = normalize((modelMatrix * vec4(position, 1.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,lv=`
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uBottom;
  uniform float uSunY;
  uniform vec3 uSunDir;
  uniform vec3 uSunColour;
  uniform float uExposure;
  varying vec3 vWorld;

  // Deliberately NOT called RRTAndODTFit. Once toneMapping is enabled, three.js
  // injects its own <tonemapping_pars_fragment> chunk — which defines a function
  // of exactly that name — into every ShaderMaterial, including this one. Two
  // bodies for one name is a compile error, and a raw ShaderMaterial that fails
  // to compile takes the whole sky with it: measured as "function already has a
  // body" at fragment line 182, with no sky rendered at all.
  vec3 skyRRTAndODTFit(vec3 v) {
    vec3 a = v * (v + 0.0245786) - 0.000090537;
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
  }

  void main() {
    float h = clamp(vWorld.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = mix(uBottom, uMid, smoothstep(0.35, 0.52, h));
    col = mix(col, uTop, smoothstep(0.5, 0.95, h));
    // Sun glow, strongest when the sun is near the horizon.
    float d = max(dot(normalize(vWorld), normalize(uSunDir)), 0.0);
    float glow = pow(d, 64.0) * 0.9 + pow(d, 8.0) * 0.25;
    col += uSunColour * glow * clamp(uSunY + 0.35, 0.0, 1.0);

    // sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
    const mat3 ACESInputMat = mat3(
      vec3(0.59719, 0.07600, 0.02840),
      vec3(0.35458, 0.90834, 0.13383),
      vec3(0.04823, 0.01566, 0.83777)
    );
    // ODT_SAT => XYZ => D60_2_D65 => sRGB
    const mat3 ACESOutputMat = mat3(
      vec3( 1.60475, -0.10208, -0.00327),
      vec3(-0.53108,  1.10813, -0.07276),
      vec3(-0.07367, -0.00605,  1.07602)
    );
    col *= uExposure / 0.6;
    col = ACESOutputMat * skyRRTAndODTFit(ACESInputMat * col);

    // The renderer writes sRGB, and a raw ShaderMaterial bypasses its output
    // conversion — so encode here or the sky renders far darker than authored.
    gl_FragColor = vec4(pow(clamp(col, 0.0, 1.0), vec3(0.4545)), 1.0);
  }
`,zi=[{t:0,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05},{t:.22,top:1779520,mid:5329002,bot:10123890,sun:16751964,amb:4868704,int:.3},{t:.27,top:5208752,mid:10466511,bot:15778714,sun:16761479,amb:9082024,int:.75},{t:.4,top:4884168,mid:10339044,bot:14214898,sun:16774109,amb:11058384,int:1},{t:.52,top:4161476,mid:9682402,bot:13886450,sun:16777215,amb:11453142,int:1.05},{t:.72,top:4882360,mid:11058388,bot:14734013,sun:16771524,amb:10530496,int:.85},{t:.8,top:2902642,mid:9072512,bot:14256732,sun:16747082,amb:6969960,int:.42},{t:.86,top:1186350,mid:2962768,bot:5917272,sun:9067114,amb:2764872,int:.14},{t:1,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05}];function hv(i){let t=zi[0],e=zi[zi.length-1];for(let o=0;o<zi.length-1;o++)if(i>=zi[o].t&&i<=zi[o+1].t){t=zi[o],e=zi[o+1];break}const n=e.t-t.t||1,s=(i-t.t)/n,r=(o,a)=>new kt(o).lerp(new kt(a),s);return{top:r(t.top,e.top),mid:r(t.mid,e.mid),bot:r(t.bot,e.bot),sun:r(t.sun,e.sun),amb:r(t.amb,e.amb),int:t.int+(e.int-t.int)*s}}class uv{constructor(t,e){this.game=e,this.canvas=t,this.renderer=new l1({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ud,this.renderer.outputColorSpace=qe,this.renderer.toneMapping=dd,this.renderer.toneMappingExposure=1.05,this.scene=new h1,this.scene.fog=new Bl(11059416,60,340),this._buildSky(),this._buildLights(),this.indoorFactor=0,this.interiorLights=new tv(this.scene),this.quality={shadows:!0,drawDistance:340},addEventListener("resize",()=>this.resize())}_buildSky(){this.skyUniforms={uTop:{value:new kt(4884168)},uMid:{value:new kt(10339044)},uBottom:{value:new kt(14214898)},uSunY:{value:.6},uSunDir:{value:new I(0,1,0)},uSunColour:{value:new kt(16777215)},uExposure:{value:1.05}};const t=new et(new ji(900,32,20),new Pi({uniforms:this.skyUniforms,vertexShader:cv,fragmentShader:lv,side:dn,depthWrite:!1,fog:!1}));t.frustumCulled=!1,this.scene.add(t),this.sky=t;const e=900,n=new Float32Array(e*3);for(let r=0;r<e;r++){const o=new I().randomDirection().multiplyScalar(850);o.y<40&&(o.y=Math.abs(o.y)+40),n.set([o.x,o.y,o.z],r*3)}const s=new on;s.setAttribute("position",new Fe(n,3)),this.stars=new u1(s,new Gd({color:16777215,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.moon=new et(new ji(18,16,12),new Ye({color:14673648,fog:!1})),this.scene.add(this.moon)}_buildLights(){this.hemi=new W1(12374760,5918784,.9),this.scene.add(this.hemi),this.sun=new gu(16774109,2.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=420,this.shadowSpan=mo.shadowSpan,this._applyShadowSpan(0),this.scene.add(this.sun),this.scene.add(this.sun.target),this.bounce=new gu(10467020,.35),this.scene.add(this.bounce),this.scene.add(this.bounce.target),this.ambient=new K1(11058384,.35),this.scene.add(this.ambient)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}_applyShadowSpan(t){const e=vn.lerp(mo.shadowSpan,si.shadowSpan,t);if(Math.abs(e-this.shadowSpan)>1e-4||!this._spanApplied){this.shadowSpan=e;const n=this.sun.shadow.camera;n.left=-e,n.right=e,n.top=e,n.bottom=-e,n.updateProjectionMatrix(),this._spanApplied=!0}this.sun.shadow.bias=vn.lerp(mo.shadowBias,si.shadowBias,t),this.sun.shadow.normalBias=vn.lerp(mo.shadowNormalBias,si.shadowNormalBias,t)}_skyDelta(t){const e=performance.now(),n=(e-(this._lastSky??e))/1e3;return this._lastSky=e,t>0?Math.min(t,.25):n>.001?Math.min(n,.25):this.game.fixedStep||1/60}updateSky(t,e,n=0,s=0){var U,N;const r=this._skyDelta(s),o=(U=this.game.world)==null?void 0:U.weather,a=J1(o),c=(N=this.game.world)!=null&&N.isIndoors?1:0;this.indoorFactor+=(c-this.indoorFactor)*Math.min(1,r*si.rate);const l=this.indoorFactor;this._applyShadowSpan(l);const h=hv(t);this.skyUniforms.uTop.value.copy(h.top),this.skyUniforms.uMid.value.copy(h.mid),this.skyUniforms.uBottom.value.copy(h.bot),this.skyUniforms.uSunColour.value.copy(h.sun);const u=(t-.25)*Math.PI*2,d=Math.sin(n/364*Math.PI*2)*.3,f=new I(Math.cos(u),Math.sin(u)+d,-.35).normalize();this.skyUniforms.uSunDir.value.copy(f),this.skyUniforms.uSunY.value=f.y;const m=(e==null?void 0:e.x)||0,_=(e==null?void 0:e.z)||0,p=(e==null?void 0:e.y)||0,g=this.shadowSpan*2/this.sun.shadow.mapSize.x,v=Math.round(m/g)*g,x=Math.round(_/g)*g;this.sun.position.set(v+f.x*160,p+Math.max(f.y,.08)*160,x+f.z*160),this.sun.target.position.set(v,p,x),this.sun.target.updateMatrixWorld();const M=Math.max(0,f.y),A=vn.smoothstep(f.y,-.005,.03);this.sun.intensity=Math.pow(M,.65)*3*(1-a)*A,this.sun.color.copy(h.sun).lerp(new kt(15265524),a),this.sun.shadow.autoUpdate=this.sun.intensity>.01,this.bounce.position.set(v-f.x*90,p+40,x-f.z*90),this.bounce.target.position.set(v,p,x),this.bounce.target.updateMatrixWorld(),this.bounce.intensity=.15+h.int*.4,this.bounce.color.copy(h.mid),this.moon.position.set(m-f.x*600,-f.y*600,_-f.z*600),this.moon.visible=f.y<.08;const b=vn.clamp((.06-f.y)*6,0,1),E=o!=null&&o.wetness?1:0;this.hemi.intensity=.25+h.int*.8+b*.5+a*.5*(1-E*.5),this.hemi.color.copy(h.mid).lerp(new kt(5992332),b*.7).lerp(new kt(13161180),a*.6),this.ambient.intensity=.12+h.int*.3+b*.38+a*.05,this.ambient.color.copy(h.amb).lerp(new kt(6978201),b*.8),this.stars.material.opacity=b*.9,this.hemi.intensity*=Math.pow(si.hemi,l),this.ambient.intensity*=Math.pow(si.ambient,l),this.bounce.intensity*=Math.pow(si.bounce,l),this.scene.fog.color.copy(h.mid).lerp(h.bot,.45);const P=o!=null&&o.wetness?.45:0,D=o&&["overcast","rain","storm"].includes(o.condition)?.25:0;this.scene.fog.near=60-(P+D)*40,this.scene.fog.far=this.quality.drawDistance*(1-P*.35-D*.15-b*.3);const y=1+b*.45+(1-Math.min(1,h.int))*.2+a*.12+E*.03+l*si.exposure;this.renderer.toneMappingExposure+=(y-this.renderer.toneMappingExposure)*Math.min(1,r*si.rate),this.skyUniforms.uExposure.value=this.renderer.toneMappingExposure,this.nightFactor=b,tf().emissiveIntensity=b*2.6,ef().opacity=b*.32,Qd().emissiveIntensity=b*2.2;const w=this.game.world;if(w!=null&&w.enterable){const X=.34+a*.26;this.interiorLights.update(w,Math.max(X,b),this.game.player)}this.sky&&this.sky.position.set(m,0,_),this.stars.position.set(m,0,_)}resize(){var e;this.renderer.setSize(innerWidth,innerHeight,!1);const t=(e=this.game.camera)==null?void 0:e.active;t&&(t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix())}render(t){this.sky.position.copy(t.position),this.renderer.render(this.scene,t)}}const Us=[{id:"first",label:"First person",distance:0,height:0,fov:64},{id:"third",label:"Third person",distance:3.6,height:.35,shoulder:.55,fov:52},{id:"thirdFar",label:"Third person (wide)",distance:6.5,height:.9,shoulder:0,fov:50},{id:"ride",label:"Behind the van",distance:7,height:1.7,shoulder:0,fov:54,hidden:!0}],dv=si.fov;class fv{constructor(t){this.game=t,this.modeIndex=1,this.active=new xn(Us[1].fov,innerWidth/innerHeight,.25,1e3),this.yaw=0,this.pitch=-.05,this.distance=Us[1].distance,this._targetDistance=this.distance,this._pos=new I,this._look=new I,this._ray2=new Ol,this._box=new Ci,this._hit=new I,this.shakeAmount=0,this.bob=0,this.fovBoost=0}get mode(){return Us[this.modeIndex]}get isFirstPerson(){return this.mode.id==="first"}cycle(){do this.modeIndex=(this.modeIndex+1)%Us.length;while(Us[this.modeIndex].hidden);return this.game.bus.emit("camera:mode",{mode:this.mode}),this.mode}setMode(t){const e=Us.findIndex(n=>n.id===t);e>=0&&(this.modeIndex=e)}addShake(t){this.shakeAmount=Math.min(1.2,this.shakeAmount+t)}update(t){const{input:e,player:n}=this.game;if(e.locked&&e.enabled){const c=e.consumeMouse();this.yaw-=c.dx*e.mouse.sensitivity,this.pitch-=(e.mouse.invertY?-c.dy:c.dy)*e.mouse.sensitivity;const l=Math.PI/2-.05;this.pitch=vn.clamp(this.pitch,-l,l)}else e.consumeMouse();const s=this.mode,r=n.position.clone();r.y+=n.eyeHeight;const o=n.horizontalSpeed;if(o>.3){this.bob+=t*o*1.9;const c=this.isFirstPerson?.035:.012;r.y+=Math.sin(this.bob*2)*c,r.x+=Math.cos(this.bob)*c*.4}else this.bob+=t*1.1,r.y+=Math.sin(this.bob)*.006;const a=new I(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch));if(s.distance===0)this._pos.copy(r),this._look.copy(r).addScaledVector(a,10);else{const c=n.position.clone();c.y+=n.eyeHeight*.92+s.height;const l=new I(-Math.cos(this.yaw),0,Math.sin(this.yaw));c.addScaledVector(l,s.shoulder||0);const h=this.game.world,u=h.isIndoors,d=u?.35:.7;let f=u?Math.min(s.distance,2.2):s.distance;const m=a.clone().negate();this._ray2.set(c,m);const _=c.clone().addScaledVector(m,f*.5);let p=f+.45;for(const g of h.query(_,f+1.5)){this._box.set(g.min,g.max);const v=this._ray2.intersectBox(this._box,this._hit);if(!v)continue;const x=c.distanceTo(v);x<p&&(p=x)}if(f=Math.max(d,Math.min(f,p-.45)),f<.65){this._pos.copy(r),this._look.copy(r).addScaledVector(a,10),this.distance=0,this._targetDistance=f,this._applyShake(t),this._commit(t,s,n);return}if(this._targetDistance+=(f-this._targetDistance)*(f<this._targetDistance?1:Math.min(1,t*5)),this.distance=this._targetDistance,this._pos.copy(c).addScaledVector(m,this.distance),this._look.copy(c).addScaledVector(a,4),u){const g=h.currentBuilding,v=g.interiorBounds;this._pos.y=Math.min(this._pos.y,g.padY+v.maxY-.2),this._pos.y=Math.max(this._pos.y,g.padY+.3)}}this._applyShake(t),this._commit(t,s,n)}_applyShake(t){if(this.shakeAmount<=.001)return;const e=this.shakeAmount;this._pos.x+=(Math.random()-.5)*.06*e,this._pos.y+=(Math.random()-.5)*.06*e,this._look.x+=(Math.random()-.5)*.5*e,this._look.y+=(Math.random()-.5)*.5*e,this.shakeAmount*=Math.pow(.06,t)}_commit(t,e,n){var o;this.active.position.copy(this._pos),this.active.lookAt(this._look);const s=(o=this.game.world)!=null&&o.isIndoors?1:0,r=e.fov+this.fovBoost+s*dv;this.active.fov+=(r-this.active.fov)*Math.min(1,t*6),this.active.updateProjectionMatrix(),n.avatar&&n.avatar.setFirstPerson(this.isFirstPerson||this.distance===0)}basis(){const t=new I(Math.sin(this.yaw),0,Math.cos(this.yaw)).normalize(),e=new I(-t.z,0,t.x);return{forward:t,right:e}}}function pv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new on;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=xu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const m=xu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function xu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Fe(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const mv=new Set(["position","normal","uv","color"]);function nf(i,t={}){var o,a;i.updateMatrixWorld(!0);const e=new Map,n=[];i.traverse(c=>{var f,m;if(c===i)return;if(c.isInstancedMesh||c.userData.isSign||c.isLight){n.push(c);return}if(!c.isMesh||!((m=(f=c.geometry)==null?void 0:f.attributes)!=null&&m.position))return;const l=c.material.uuid;e.has(l)||e.set(l,{material:c.material,geos:[],cast:!1});const h=c.geometry.clone();h.applyMatrix4(c.matrixWorld);for(const _ of Object.keys(h.attributes))mv.has(_)||h.deleteAttribute(_);const u=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new Fe(new Float32Array(u*2),2)),h.attributes.color||h.setAttribute("color",new Fe(new Float32Array(u*3).fill(1),3));const d=e.get(l);d.geos.push(h.index?h.toNonIndexed():h),d.cast=d.cast||c.castShadow});const s=t.colliders?new ul(t.colliders,1):null,r=new Wt;for(const{material:c,geos:l,cast:h}of e.values()){if(!l.length)continue;const u=l.length===1?l[0]:pv(l,!1);if(!u){console.error("bakeGroup: merge returned null (mismatched attributes)",c);continue}const d=((o=c.userData)==null?void 0:o.decal)===!0,f=(a=c.userData)==null?void 0:a.uvScale;f&&!d&&gv(u,f[0],f[1]),s&&!d&&Mv(u,s);const m=new et(u,c);m.castShadow=d?!1:h,m.receiveShadow=!d,d&&(m.renderOrder=2),r.add(m)}for(const c of n)r.add(c);return r}function gv(i,t,e=t){const n=i.attributes.position.count,s=i.attributes.position.array,r=i.attributes.normal.array,o=new Float32Array(n*2);for(let a=0;a<n;a++){const c=a*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let d,f;h>=l&&h>=u?(d=s[c],f=s[c+2]):l>=u?(d=s[c+2],f=s[c+1]):(d=s[c],f=s[c+1]),o[a*2]=d/t,o[a*2+1]=f/e}i.setAttribute("uv",new Fe(o,2))}const nc=512,vu=1024;function yu(i,t,e){return((i+nc)*vu+(t+nc))*vu+(e+nc)}class ul{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let n=0;n<t.length;n++){const s=t[n],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),h=Math.floor(s.max.z/e);for(let u=r;u<=o;u++)for(let d=a;d<=c;d++)for(let f=l;f<=h;f++){const m=yu(u,d,f);let _=this.bins.get(m);_||(_=[],this.bins.set(m,_)),_.push(n)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,n,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),h=Math.floor((e-s)/r),u=Math.floor((e+s)/r),d=Math.floor((n-s)/r),f=Math.floor((n+s)/r);for(let m=c;m<=l;m++)for(let _=h;_<=u;_++)for(let p=d;p<=f;p++){const g=this.bins.get(yu(m,_,p));if(g)for(let v=0;v<g.length;v++){const x=g[v];this._stamp[x]!==a&&(this._stamp[x]=a,o.push(this.boxes[x]))}}return o}}const _v=.18,xv=.55,Mu=.75,vv=.3,Su=.55,yv=1.2;function Mv(i,t){const e=t instanceof ul?t:new ul(t,1),n=Array.isArray(i)?i:[i];for(const s of n)Sv(s,e)}function Sv(i,t){const e=i.attributes.color;if(!e||e.itemSize!==3||e.normalized||!i.attributes.normal)return;const n=i.attributes.position.array,s=i.attributes.normal.array,r=e.array,o=i.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],h=s[c+1],u=s[c+2],d=n[c]+l*.01,f=n[c+1]+h*.01,m=n[c+2]+u*.01;let _=0;const p=t.near(d,f,m,yv);for(let v=0;v<p.length;v++){const x=p[v],M=Math.max(x.min.x-d,0,d-x.max.x),A=Math.max(x.min.y-f,0,f-x.max.y),b=Math.max(x.min.z-m,0,m-x.max.z),E=Math.sqrt(M*M+A*A+b*b);if(E>Mu*3)continue;const P=(x.min.x+x.max.x)/2-d,D=(x.min.y+x.max.y)/2-f,y=(x.min.z+x.max.z)/2-m;l*P+h*D+u*y<=0||(_+=xv*Math.exp(-E/_v)+vv*Math.exp(-E/Mu))}const g=Math.max(Su,1-Math.min(1-Su,_));r[c]*=g,r[c+1]*=g,r[c+2]*=g}e.needsUpdate=!0}let wv=8,bv=i=>{const t=document.createElement("canvas");return t.width=t.height=i,t};const sf=(i,t=i)=>{const e=bv(i);return e.width=i,e.height=t,e};let rf=0;function jl(i,t){return t&&(i.colorSpace=qe),i.wrapS=i.wrapT=jo,i.anisotropy=wv,i.generateMipmaps=!0,i.minFilter=Gi,i.magFilter=Fn,rf+=i.image.width*i.image.height*4*4/3,i}function pi(i){return jl(new Qn(Ev(i)),!0)}function dl(i){return i.wrapS=i.wrapT=Hi,i}function Ev(i){const t=sf(i.w,i.h),e=t.getContext("2d"),n=e.createImageData(i.w,i.h),s=n.data,r=i.d,o=i.w*i.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const h=r[c],u=r[c+1],d=r[c+2];s[l]=(h<0?0:h>1?1:h)*255+.5,s[l+1]=(u<0?0:u>1?1:u)*255+.5,s[l+2]=(d<0?0:d>1?1:d)*255+.5,s[l+3]=255}return e.putImageData(n,0,0),t}const Be=i=>i<0?0:i>1?1:i,di=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255];function Tv(i){const[t,e,n]=i,s=Math.max(t,e,n),r=Math.min(t,e,n),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-n)/a+(e<n?6:0))/6:s===e?l=((n-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function Av(i,t,e){if(t===0)return[e,e,e];const n=e<.5?e*(1+t):e+t-e*t,s=2*e-n,r=o=>(o=(o%1+1)%1,o<1/6?s+(n-s)*6*o:o<1/2?n:o<2/3?s+(n-s)*(2/3-o)*6:s);return[r(i+1/3),r(i),r(i-1/3)]}function li(i,t=1,e=0,n=1){const[s,r,o]=Tv(Array.isArray(i)?i:di(i));return Av(s+e/360,Be(r*n),Be(o*t))}function mi(i,t){return{w:i,h:t,d:new Float32Array(i*t*3)}}function xs(i,t){const e=Array.isArray(t)?t:di(t),n=i.d;for(let s=0;s<n.length;s+=3)n[s]=e[0],n[s+1]=e[1],n[s+2]=e[2]}function $l(i,t,e,n,s){if(s<=0)return;const r=i.w,o=i.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,h=i.d,u=1-s;h[l]=h[l]*u+n[0]*s,h[l+1]=h[l+1]*u+n[1]*s,h[l+2]=h[l+2]*u+n[2]*s}function Nn(i,t,e,n,s,r,o=1){const a=Array.isArray(r)?r:di(r),c=Math.round(t),l=Math.round(n),h=Math.round(e),u=Math.round(s);if(o<1){for(let _=h;_<u;_++)for(let p=c;p<l;p++)$l(i,p,_,a,o);return}const d=i.w,f=i.h,m=i.d;for(let _=h;_<u;_++){let p=_;(p<0||p>=f)&&(p=(p%f+f)%f);const g=p*d;for(let v=c;v<l;v++){let x=v;(x<0||x>=d)&&(x=(x%d+d)%d);const M=(g+x)*3;m[M]=a[0],m[M+1]=a[1],m[M+2]=a[2]}}}function Or(i,t,e,n,s,r=1){const o=n+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,h=a+.5-e,u=Be(n-Math.sqrt(l*l+h*h)+.5);u>0&&$l(i,c,a,s,r*u)}}function fl(i,t,e,n,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,h]=t[o],u=Math.hypot(l-a,h-c),d=Math.max(1,Math.ceil(u));for(let f=0;f<=d;f++){const m=f/d;Or(i,a+(l-a)*m,c+(h-c)*m,r,n,s)}}}function of(i,t,e,n,s,r,o,a){const c=i.w,l=i.h,h=i.d,u=r/2,d=o[0],f=o[1],m=o[2],_=Math.PI*2/n;for(let p=0;p<l;p++){const g=p*c,v=t+e*Math.sin(p*_+s),x=v-u,M=v+u,A=Math.floor(x),b=Math.ceil(M);for(let E=A;E<=b;E++){const P=Be(Math.min(E+1,M)-Math.max(E,x));if(P<=0)continue;const D=a*P,y=1-D;let w=E;(w<0||w>=c)&&(w=(w%c+c)%c);const U=(g+w)*3;h[U]=h[U]*y+d*D,h[U+1]=h[U+1]*y+f*D,h[U+2]=h[U+2]*y+m*D}}}const wu=i=>i*i*(3-2*i);function Rv(i,t,e){const n=new Float32Array(t*e);for(let s=0;s<n.length;s++)n[s]=i.float();return n}const bu=256;function ti(i,t,e={}){const{p0:n=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??n,l=e.p0y??n,h=new Float32Array(t*a),u=[];let d=1,f=0;for(let A=0;A<s;A++){const b=Math.min(bu,Math.max(1,Math.round(c*o**A))),E=Math.min(bu,Math.max(1,Math.round(l*o**A)));u.push({lat:Rv(i,b,E),px:b,py:E,amp:d}),f+=d,d*=r}const m=new Float64Array(t*a),_=new Int32Array(t),p=new Int32Array(t),g=new Float64Array(t);for(let A=0;A<u.length;A++){const b=u[A],E=b.lat,P=b.px,D=b.py,y=b.amp,w=P/t,U=D/a;for(let N=0;N<t;N++){const X=N*w,Y=X|0,H=Y>=P?Y%P:Y;_[N]=H,p[N]=H+1>=P?0:H+1,g[N]=wu(X-Y)}for(let N=0;N<a;N++){const X=N*U,Y=X|0,H=wu(X-Y),K=1-H,z=Y>=D?Y%D:Y,ut=z*P,dt=(z+1>=D?0:z+1)*P,at=N*t;for(let Ot=0;Ot<t;Ot++){const Yt=_[Ot],Q=p[Ot],O=g[Ot],ct=E[ut+Yt],nt=E[ut+Q],_t=E[dt+Yt],ft=E[dt+Q];m[at+Ot]+=y*((ct+(nt-ct)*O)*K+(_t+(ft-_t)*O)*H)}}}let v=1/0,x=-1/0;for(let A=0;A<h.length;A++){h[A]=m[A]/f;const b=h[A];b<v&&(v=b),b>x&&(x=b)}const M=x-v||1;for(let A=0;A<h.length;A++)h[A]=(h[A]-v)/M;return h}function af(i,t,e,n){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*n+1,a=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)a[u]=((u-n)%t+t)%t,c[u]=(u+n+1)%t;for(let u=0;u<e;u++){const d=u*t;let f=0;for(let m=-n;m<=n;m++)f+=i[d+(m%t+t)%t];for(let m=0;m<t;m++)s[d+m]=f/o,f-=i[d+a[m]],f+=i[d+c[m]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-n)%e+e)%e*t,h[u]=(u+n+1)%e*t;for(let u=0;u<t;u++){let d=0;for(let f=-n;f<=n;f++)d+=s[(f%e+e)%e*t+u];for(let f=0;f<e;f++)r[f*t+u]=d/o,d-=s[l[f]+u],d+=s[h[f]+u]}return r}function Cv(i,t,e=1.5,n=null){const s=n??i.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const h=(l-1+s)%s*t,u=l*t,d=(l+1)%s*t;let f=u*4;for(let m=0;m<t;m++,f+=4){const _=a[m],p=c[m],g=i[h+_],v=i[h+m],x=i[h+p],M=i[u+_],A=i[u+p],b=i[d+_],E=i[d+m],P=i[d+p],D=x+2*A+P-(g+2*M+b),y=b+2*E+P-(g+2*v+x),w=-D*o,U=y*o,N=1/Math.sqrt(w*w+U*U+1);r[f]=(w*N*.5+.5)*255+.5,r[f+1]=(U*N*.5+.5)*255+.5,r[f+2]=(N*.5+.5)*255+.5,r[f+3]=255}}return r}function zr(i,t,e=1.5,n=null){const s=n??i.length/t;return jl(new Qn(cf(Cv(i,t,e,s),t,s)),!1)}function cf(i,t,e){const n=sf(t,e),s=n.getContext("2d"),r=s.createImageData(t,e);return r.data.set(i),s.putImageData(r,0,0),n}function Pv(i,t,e,n,s=null){const o=i*(s??i),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,d=n?n[c]:0;a[l]=(h<0?0:h>1?1:h)*255+.5,a[l+1]=(u<0?0:u>1?1:u)*255+.5,a[l+2]=(d<0?0:d>1?1:d)*255+.5,a[l+3]=255}return a}function Hn(i,t,e,n,s=null){const r=s??i;return jl(new Qn(cf(Pv(i,t,e,n,r),i,r)),!1)}const Kl={},Cr=new Map;let lf=null;function pn(i,t){Kl[i]=t}const Lv=i=>{const t=Object.keys(i).sort();return t.length?t.map(e=>e+"="+JSON.stringify(i[e])).join(","):""};function Iv(i,t=null,e={}){const n=Kl[i];if(!n)throw new Error(`Textures: no recipe named '${i}'`);const s=Lv(e),r=s?i+"#"+s:i;if(Cr.has(r))return Cr.get(r);const o=t||(lf||new oa("textures")).child("tex."+r),a=n(o,e);return a.name=i,Cr.set(r,a),a}function Dv(){var i,t;for(const e of Cr.values()){for(const n of["map","normalMap","ormMap"])(t=(i=e[n])==null?void 0:i.dispose)==null||t.call(i);if(e.maps)for(const n of e.maps)n.dispose()}Cr.clear(),rf=0,lf=null}kr(Dv);const ic={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};pn("timberFloor",(i,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),h=t.species||i.pick(Object.keys(ic)),u=ic[h]||ic.blackbutt,d=mi(1024,1024);xs(d,li(u.dark,.72));const f=di(u.dark),m=li(u.base,1.25),_=[];for(let b=0;b<15;b++){const E=b*c+l/2,P=(b+1)*c-l/2,D=li(u.base,1+i.range(-.06,.06),i.range(-3,3));Nn(d,E,0,P,1024,D);const y=Math.round(i.range(.15,.85)*1024);_.push(y),Nn(d,E,y,P,y+2,li(u.dark,.8),.85),Nn(d,E,y-2,P,y,m,.25);const w=i.int(28,60);for(let U=0;U<w;U++){const N=i.range(E+1,P-1),X=i.range(1.5,4),Y=1024/i.int(2,5),H=i.range(0,Math.PI*2),K=i.range(2,3),z=i.range(.04,.12),ut=i.chance(.25)?m:f;of(d,N,X,Y,H,K,ut,z)}if(i.chance(.2)){const U=i.range(204.8,819.2),N=i.range(60,160),X=i.range(E+4,P-4);for(let Y=0;Y<i.int(2,4);Y++){const H=(Y+1)*i.range(3,7),K=[];for(let z=0;z<=16;z++){const ut=z/16;K.push([X+(ut-.5)*2*H,U-N*(1-(ut-.5)**2*4)])}fl(d,K,2,f,.06)}}}const p=ti(i,512,{p0:64,octaves:3}),g=new Float32Array(512*512),v=new Float32Array(512*512),x=new Float32Array(512*512),M=512/15,A=l*512/1024;for(let b=0;b<512;b++)for(let E=0;E<512;E++){const P=b*512+E,D=Math.floor(E/M),y=E-D*M,w=y<A/2||y>M-A/2,U=b*1024/512,N=_[D],X=U>=N-1&&U<=N+2,Y=w||X;v[P]=Y?.15:.75,g[P]=Be(u.rough+(Y?.1:0)+(p[P]-.5)*.1),x[P]=Y?.72:1}return{map:pi(d),normalMap:zr(af(v,512,512,1),512,1.2),ormMap:Hn(512,x,g,null),uvScale:[o,o],normalScale:.5,species:h,tinted:!1}});pn("plasterWall",(i,t={})=>{const s=t.rough??.88,r=ti(i,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=s+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/a*Math.PI*2)*.02),o[h]=Be(u)}return{ormMap:Hn(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});pn("plasterCeiling",i=>Kl.plasterWall(i,{rough:.93,ceiling:!0}));pn("paintedJoinery",i=>{const n=ti(i,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Be(.42+(n[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Hn(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});pn("carpetPile",i=>{const n=mi(512,512);xs(n,[1,1,1]);const s=ti(i,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=n.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,d=Be(.9+(s[h]-.5)*.16+u);r[h*3]=d,r[h*3+1]=d,r[h*3+2]=d}for(let c=0;c<1200;c++){const l=i.pick([[1.1,0],[.78,8],[.92,-10]]),h=li(16777215,l[0],l[1],1);if(l[1]!==0){const u=i.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}Or(n,i.range(0,512),i.range(0,512),i.range(1,2),h,.25)}const o=ti(i,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Be(.92+(o[c]-.5)*.06);return{map:pi(n),normalMap:zr(o,512,.6),ormMap:Hn(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});pn("ceramicTile",(i,t={})=>{const n=t.tile??.3,s=2,r=n*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=di(12104358),h=[];for(let p=0;p<s*s;p++)h.push({c:li(14473423,1+i.range(-.03,.03),i.range(-2,2)),g:i.range(-1,1)});const u=mi(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),m=new Float32Array(512*512),_=o/2;for(let p=0;p<512;p++)for(let g=0;g<512;g++){const v=p*512+g,x=Math.floor(g/c),M=Math.floor(p/c),A=g-x*c,b=p-M*c,E=Math.min(A,c-A,b,c-b);if(E<_){u.d[v*3]=l[0],u.d[v*3+1]=l[1],u.d[v*3+2]=l[2],d[v]=.85,f[v]=.25,m[v]=.62;continue}const P=h[M*s+x],D=(A/c+b/c)/2,y=1.03-.06*(P.g>0?D:1-D);u.d[v*3]=Be(P.c[0]*y),u.d[v*3+1]=Be(P.c[1]*y),u.d[v*3+2]=Be(P.c[2]*y),d[v]=.08;const w=Be((E-_)/a);f[v]=.25+.75*w,m[v]=.62+.38*w}return{map:pi(u),normalMap:zr(f,512,2),ormMap:Hn(512,m,d,null),uvScale:[r,r],normalScale:.8,tinted:!1}});pn("fabricWeave",i=>{const n=mi(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let h=0;h<a.length;h++)a[h]=i.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=i.range(-.035,.035);const l=ti(i,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const d=h*256+u,f=(u>>1&1^h>>1&1)===0,m=u>>1,_=h>>1,p=f?a[(m*8+(h>>5&7))%a.length]:c[(_*8+(u>>5&7))%c.length],g=Be((f?1.06:.94)+p+(l[d]-.5)*.06);n.d[d*3]=g,n.d[d*3+1]=g,n.d[d*3+2]=g,s[d]=f?.66:.8,r[d]=f?1:.3}return{map:pi(n),normalMap:zr(af(r,256,256,1),256,.8),ormMap:Hn(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});pn("joineryTimber",i=>{const n=mi(512,512);xs(n,[1,1,1]);const s=ti(i,512,{p0x:48,p0y:8,octaves:4}),r=n.d;for(let c=0;c<512*512;c++){const l=Be(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=li(16777215,.72);for(let c=0;c<220;c++){const l=i.range(0,512),h=i.range(2,6),u=512/i.int(1,2),d=i.range(0,Math.PI*2);of(n,l,h,u,d,i.range(2,3.5),o,i.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Be(.55+(s[c]-.5)*.08);return{map:pi(n),ormMap:Hn(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});pn("vinylSheet",i=>{const n=mi(512,512);xs(n,14209732);const s=[13222578,15131093,11906460,14472902].map(di);for(let c=0;c<3e3;c++)Or(n,i.range(0,512),i.range(0,512),i.range(1,3),i.pick(s),.35);const r=ti(i,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Be(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=i.range(0,512),h=i.range(0,512),u=i.range(40,120),d=i.range(0,Math.PI*2),f=i.range(.6,2.2),m=[];for(let _=0;_<=24;_++){const p=d+f*(_/24);m.push([l+Math.cos(p)*u,h+Math.sin(p)*u])}fl(n,m,i.range(2,4),li(14209732,.88),.3),fl(a,m,i.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Be(o[c]+a.d[c*3]*.15);return{map:pi(n),ormMap:Hn(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});pn("laminateBench",i=>{const s=mi(512,512);xs(s,xt.benchtop);const r=[9274743,14077886,7235417].map(di);for(let l=0;l<2e3;l++)Or(s,i.range(0,512),i.range(0,512),i.range(1,2.5),i.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=li(xt.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let u=0;u<512;u++)$l(s,u,l,c,.85),o[l*512+u]=.45;return{map:pi(s),ormMap:Hn(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});pn("ceilingGrid",i=>{const s=mi(512,512);xs(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=di(14210509),c=di(12434098),l=ti(i,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let d=0;d<512;d++){const f=u*512+d,m=Math.min(d,512-d),_=Math.min(u,512-u);if(m<r/2||_<o/2){const v=m>=r/2-2&&m<r/2||_>=o/2-2&&_<o/2?c:a;s.d[f*3]=v[0],s.d[f*3+1]=v[1],s.d[f*3+2]=v[2],h[f]=.55}else{const g=1+(l[f]-.5)*.04;s.d[f*3]*=g,s.d[f*3+1]*=g,s.d[f*3+2]*=g,h[f]=.9}}return{map:pi(s),ormMap:Hn(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});pn("applianceEnamel",i=>{const n=ti(i,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Be(.3+(n[r]-.5)*.04);return{ormMap:Hn(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});pn("metalBrushed",i=>{const n=new Float32Array(65536),s=new Float32Array(256*256),r=ti(i,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=i.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;n[l]=Be(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:Hn(256,null,n,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});pn("quiltFolds",i=>{const n=[],s=i.int(5,9);for(let d=0;d<s;d++)n.push({a:i.range(.4,1),c:i.range(.05,.95),w:i.range(.06,.14)});const r=d=>{let f=0;for(const m of n)f+=m.a*Math.exp(-(((d-m.c)/m.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let o=1/0,a=-1/0;for(let d=0;d<=256;d++){const f=r(d/256);f<o&&(o=f),f>a&&(a=f)}const c=a-o||1,l=d=>(r(Be(d))-o)/c,h=mi(512,256),u=new Float32Array(512*256);for(let d=0;d<512;d++){const f=l(d/511),m=.9+.1*f;for(let _=0;_<256;_++){const p=_*512+d;h.d[p*3]=m,h.d[p*3+1]=m,h.d[p*3+2]=m,u[p]=f}}return{map:dl(pi(h)),normalMap:dl(zr(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:n,tinted:!0}});pn("pictureArt",i=>{const n=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=n[r].map(di),a=mi(256,256);xs(a,o[i.int(0,3)]);const c=i.int(0,2);if(c===0){let h=0;for(;h<256;){const u=i.int(12,48);Nn(a,0,h,256,Math.min(256,h+u),o[i.int(0,3)],i.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<i.int(5,11);h++){const u=i.range(0,179.2),d=i.range(0,256*.7);Nn(a,u,d,u+i.range(30,110),d+i.range(30,110),o[i.int(0,3)],i.range(.55,.95))}else{const h=i.range(115.2,174.08);Nn(a,0,0,256,h,o[0],1),Nn(a,0,h,256,256,o[2],1);for(let u=0;u<i.int(3,7);u++){const d=i.range(h-40,h+40);Nn(a,0,d,256,d+i.range(3,10),o[i.int(0,3)],i.range(.3,.7))}Or(a,i.range(256*.2,256*.8),i.range(20,h-20),i.range(12,26),o[3],.9)}const l=li(16777215,.97);Nn(a,0,0,256,6,l),Nn(a,0,250,256,256,l),Nn(a,0,0,6,256,l),Nn(a,250,0,256,256,l),s.push(dl(pi(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const Uv={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},Vs=new Map;function Zl(i,t=16777215,e=null,n={}){const s=Uv[i];if(!s)throw new Error(`Surfaces: no surface named '${i}'`);const r=Object.keys(n).sort().map(h=>h+"="+JSON.stringify(n[h])).join(","),o=i+"|"+t+"|"+r;if(Vs.has(o))return Vs.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=h=>s.alpha!==void 0?ql(h):h;if(s.recipe){const{print:h,...u}=n,d=Object.keys(u).sort().map(g=>g+"="+JSON.stringify(u[g])).join(","),f=e?e.child("tex."+s.recipe+(d?"#"+d:"")):null,m=Iv(s.recipe,f,u),_=m.maps?m.maps[Math.min(m.maps.length-1,h??0)]:m.map;if(_&&(a.map=_),m.normalMap){a.normalMap=m.normalMap;const g=m.normalScale??1;a.normalScale=new wt(g,g)}m.ormMap?(a.aoMap=m.ormMap,a.roughnessMap=m.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=m.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const p=c(new yn(a));return m.uvScale&&(p.userData.uvScale=m.uvScale),p.userData.cast=s.cast,p.userData.surface=i,Vs.set(o,p),p}const l=c(new yn(a));return l.userData.cast=s.cast,l.userData.surface=i,Vs.set(o,l),l}function Nv(){for(const i of Vs.values())i.dispose();Vs.clear()}kr(Nv);const Ut={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,intWall:.11,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,headDatum:2.1,benchH:.9,toeKickH:.15,toeKickD:.05,cabinetModules:[.3,.45,.6,.75,.9,1,1.2],handleH:1,switchH:1.05,gpoH:.3},Ie={thin:.002,furniture:.003,joinery:.005},Eu=new Set;function pl(i,t,e={}){if(e.material)return e.material;try{return Zl(i,t,null,e.recipe||{})}catch(n){Eu.has(i)||(Eu.add(i),console.error(`RoomKit: surface '${i}' unavailable, falling back to flat colour`,n))}return Se(t,e)}function re(i,t,e,n,s,r={}){var l;const o=pl(i,s,r),a=r.chamfer?df(t,e,n,r.chamfer):r.graded?kv(t,e,n,r.gradeEdge):new It(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),c=new et(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const ar=new Map,Vi=i=>Math.round(i*1e3);function hf(i,t,e){const n=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(n[s*2]=i[r],n[s*2+1]=i[r+2]):o>=c?(n[s*2]=i[r+2],n[s*2+1]=i[r+1]):(n[s*2]=i[r],n[s*2+1]=i[r+1])}return n}function uf(i){const t=i.length*3,e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const o of i){const[a,c,l]=o;let h=c[0]-a[0],u=c[1]-a[1],d=c[2]-a[2],f=l[0]-a[0],m=l[1]-a[1],_=l[2]-a[2],p=u*_-d*m,g=d*f-h*_,v=h*m-u*f;const x=(a[0]+c[0]+l[0])/3,M=(a[1]+c[1]+l[1])/3,A=(a[2]+c[2]+l[2])/3;let b=c,E=l;p*x+g*M+v*A<0&&(b=l,E=c,p=-p,g=-g,v=-v);const P=Math.hypot(p,g,v)||1;p/=P,g/=P,v/=P;for(const D of[a,b,E])e[s*3]=D[0],e[s*3+1]=D[1],e[s*3+2]=D[2],n[s*3]=p,n[s*3+1]=g,n[s*3+2]=v,s++}const r=new on;return r.setAttribute("position",new Fe(e,3)),r.setAttribute("normal",new Fe(n,3)),r.setAttribute("uv",new Fe(hf(e,n,t),2)),r.setAttribute("color",new Fe(new Float32Array(t*3).fill(1),3)),r}function df(i,t,e,n=Ie.furniture){i=Math.max(i,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(n,Math.min(i,t,e)/2-5e-4);if(!(s>2e-4))return new It(i,t,e);const r=`c${Vi(i)},${Vi(t)},${Vi(e)},${Vi(s)}`,o=ar.get(r);if(o)return o;const a=i/2,c=t/2,l=e/2,h=[a-s,c-s,l-s],u=[a,c,l],d=(g,v)=>[(v===0?u[0]:h[0])*g[0],(v===1?u[1]:h[1])*g[1],(v===2?u[2]:h[2])*g[2]],f=[];for(const g of[-1,1])for(const v of[-1,1])for(const x of[-1,1])f.push([g,v,x]);const m=[],_=(g,v,x,M)=>{m.push([g,v,x]),m.push([g,x,M])};for(let g=0;g<3;g++){const v=(g+1)%3,x=(g+2)%3;for(const M of[-1,1]){const A=(b,E)=>{const P=[0,0,0];return P[g]=M,P[v]=b,P[x]=E,d(P,g)};_(A(-1,-1),A(1,-1),A(1,1),A(-1,1))}}for(let g=0;g<3;g++)for(let v=g+1;v<3;v++){const x=3-g-v;for(const M of[-1,1])for(const A of[-1,1]){const b=[0,0,0];b[g]=M,b[v]=A,b[x]=-1;const E=[0,0,0];E[g]=M,E[v]=A,E[x]=1,_(d(b,g),d(b,v),d(E,v),d(E,g))}}for(const g of f)m.push([d(g,0),d(g,1),d(g,2)]);const p=uf(m);return ar.set(r,p),p}const go=[0,.05,.18,.55];function Tu(i,t=.12){const e=t/.12,n=[0];for(let s=1;s<go.length;s++){const r=go[s]*e;r<i/2-1e-4&&n.push(r)}n.push(i/2);for(let s=go.length-1;s>=1;s--){const r=i-go[s]*e;r>i/2+1e-4&&n.push(r)}return n.push(i),n}function Au(i,t,e,n,s,r){const o=(a,c)=>[t[0]+e[0]*a+n[0]*c,t[1]+e[1]*a+n[1]*c,t[2]+e[2]*a+n[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),h=o(s[a+1],r[c]),u=o(s[a+1],r[c+1]),d=o(s[a],r[c+1]);i.push([l,h,u]),i.push([l,u,d])}}function kv(i,t,e,n=.12){const s=`g${Vi(i)},${Vi(t)},${Vi(e)},${Vi(n)}`,r=ar.get(s);if(r)return r;const o=e<=i&&e<=t?2:t<=i?1:0,[a,c,l]=o===2?[i,t,e]:o===1?[i,e,t]:[e,t,i],h=a/2,u=c/2,d=l/2,f=Tu(a,n),m=Tu(c,n),_=[];Au(_,[-h,-u,d],[1,0,0],[0,1,0],f,m),Au(_,[-h,-u,-d],[1,0,0],[0,1,0],f,m);const p=(v,x,M,A)=>{_.push([v,x,M]),_.push([v,M,A])};p([h,-u,-d],[h,u,-d],[h,u,d],[h,-u,d]),p([-h,-u,-d],[-h,u,-d],[-h,u,d],[-h,-u,d]),p([-h,u,-d],[h,u,-d],[h,u,d],[-h,u,d]),p([-h,-u,-d],[h,-u,-d],[h,-u,d],[-h,-u,d]);const g=uf(_);if(o===1?g.rotateX(-Math.PI/2):o===0&&g.rotateY(Math.PI/2),o!==2){const v=g.attributes.position.array,x=g.attributes.normal.array;g.setAttribute("uv",new Fe(hf(v,x,g.attributes.position.count),2))}return ar.set(s,g),g}kr(()=>{for(const i of ar.values())i.dispose();ar.clear()});class Ov{constructor(){this.group=new Wt,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,n,s,r,o,a=!1){this.colliders.push({min:new I(t-s/2,e,n-o/2),max:new I(t+s/2,e+r,n+o/2),walkable:a})}spot(t,e,n,s){return this.spots[t]=new I(e,n,s),this.spots[t]}interact(t,e,n,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new I(n,s,r),action:o,data:a,radius:c})}light(t,e,n,s=16770756,r=9,o=13){const a=new j1(s,r,o,2);return a.position.set(t,e,n),this.group.add(a),this.lights.push(a),a}}function zv(i,t,e,n,s,r,o=xt.floorTimber,a={}){const c=a.thickness??.16,l=re(a.surface??"floorTimber",n,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),i.add(l),i.solid(t,r-c,e,n,c,s,!0),l}function Ru(i,t,e,n,s,r,o=xt.ceiling,a={}){const c=a.thickness??Ut.cornice,l=re(a.surface??"ceiling",n,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),i.add(l),l}function Fv(i,t,e,n,s=0,r={}){const o=re("trim",.075,.115,.01,r.colour??xt.trim,{});o.position.set(t,e,n),o.rotation.y=s,i.add(o);const a=re("trim",.03,.055,.004,r.colour??xt.trim,{});return a.rotation.y=s,a.position.set(t,e,n),a.translateZ(.007),i.add(a),o}function Bv(i,t,e,n,s=0,r={}){const o=re("trim",.115,.075,.01,r.colour??xt.trim,{});return o.position.set(t,e,n),o.rotation.y=s,i.add(o),o}function oi(i,t,e,n,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,h=e-r/2-a,u=e+r/2+a;const d=t-s/2,f=t+s/2,m=e-r/2,_=e+r/2;for(const x of i.decals){if(l<=x.x0||c>=x.x1||u<=x.z0||h>=x.z1)continue;const M=Math.min(l-x.x0,x.x1-c),A=Math.min(u-x.z0,x.z1-h);if(M<=A?t<(x.x0+x.x1)/2?l=Math.max(f,Math.min(l,x.x0)):c=Math.min(d,Math.max(c,x.x1)):e<(x.z0+x.z1)/2?u=Math.max(_,Math.min(u,x.z0)):h=Math.min(m,Math.max(h,x.z1)),l>x.x0+1e-4&&c<x.x1-1e-4&&u>x.z0+1e-4&&h<x.z1-1e-4)return null}const p=l-c,g=u-h;if(p<.05||g<.05)return null;const v=new et(new be(p,g),ov());return v.rotation.x=-Math.PI/2,v.position.set((c+l)/2,n+.006,(h+u)/2),i.add(v),i.decals.push({x0:c,x1:l,z0:h,z1:u}),v}const Mi=new Ci;function ff(i,t,e,n){Mi.setFromObject(t);const s=Mi.max.x-Mi.min.x,r=Mi.max.z-Mi.min.z;return i.solid((Mi.min.x+Mi.max.x)/2,e,(Mi.min.z+Mi.max.z)/2,s,n,r),[s,r]}function Hv(i,t,e,n){if(i.door===!1||i.leaf===!1||i.door===void 0&&i.leaf===void 0&&t<=1.005)return null;const s=i.door||{},r=t>=1.25,o=s.style??(i.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??n,colour:s.colour??i.leaf??(o==="glazed"?qt.metal:e),surfaceName:s.surface??i.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function hs(i,t,e,n,s,r={}){const{y0:o=0,height:a=Ut.storey,thickness:c=Ut.wallThick,colour:l=xt.wall,innerColour:h=null,outerColour:u=null,openings:d=[],skirting:f=!0,skirtStyle:m="timber",cornice:_=!0,corniceStyle:p="cove",autoServices:g=!0,inner:v=null,surface:x="wall",trimColour:M=xt.trim,graded:A=!0,name:b=null}=r,E=h??u,P=n-t,D=s-e,y=Math.hypot(P,D);if(y<.01)return;const w=P/y,U=D/y,N=Math.atan2(-U,w),X=-U,Y=w,H=c/2,K=(O,ct,nt,_t=0,ft=0)=>(O.position.set(t+w*ct+X*_t,nt,e+U*ct+Y*_t),O.rotation.y=N+ft,i.add(O),O),z=(O,ct,nt,_t={})=>re("trim",O,ct,nt,_t.colour??M,_t),ut=v===null?[-1,1]:[v],dt=(O,ct,nt,_t)=>{const ft=ct-O,St=_t-nt;if(ft<=.005||St<=.005)return;const At=(O+ct)/2,Z=_&&p==="shadowline"&&Math.abs(_t-(o+a))<.02,T=Z?St-.01:St,gt=ft>=1.2&&T>=1.2,rt=re(x,ft,T,c,l,{graded:A&&gt,cast:!0});if(K(rt,At,nt+T/2),Z){const C=re(x,ft,.01,c-.02,l,{});K(C,At,_t-.005)}const st=Math.abs(w)*ft+Math.abs(U)*c,lt=Math.abs(U)*ft+Math.abs(w)*c,Pt=t+w*At,ot=e+U*At;if(i.solid(Pt,nt,ot,st,St,lt),E)for(const C of ut){const S=re(x,ft,T,.02,E,{graded:A&&gt});K(S,At,nt+T/2,C*(H+.01))}if(f&&m&&nt-o<.02)if(m==="commercial"){const C=z(ft,Ut.skirtCommercial,c+.04,{colour:xt.tileFloor,chamfer:Ie.thin});K(C,At,nt+Ut.skirtCommercial/2)}else{const C=[[.112,Ut.skirtProud,0,Ie.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[S,B,J,it]of C){const tt=z(ft,S,c+B*2,{chamfer:it});K(tt,At,nt+J+S/2)}}if(_&&p==="cove"&&Math.abs(_t-(o+a))<.02){const C=Ut.corniceGirth/Math.SQRT2;for(const S of ut){const B=z(ft,Ut.corniceGirth,.008,{chamfer:0});K(B,At,_t-C/2,S*(H+C/2)),B.rotation.order="YXZ",B.rotation.set(-S*Math.PI/4,N,0)}}},at=(O,ct,nt,_t)=>{const ft=_t-nt;for(const At of[-1,1]){const Z=z(Ut.reveal,ft,c,{});K(Z,O+At*(ct/2-Ut.reveal/2),nt+ft/2)}const St=z(ct,Ut.reveal,c,{});K(St,O,_t-Ut.reveal/2)},Ot=(O,ct,nt,_t)=>{const ft=ct-2*Ut.reveal,St=ft/2+Ut.archQuirk,At=_t+Ut.archQuirk;for(const Z of[-1,1])for(const T of[-1,1]){const gt=z(Ut.archW,At-nt+.002,Ut.archProud,{chamfer:Ie.joinery});if(K(gt,O+Z*(St+Ut.archW/2),nt+(At-nt)/2,T*(H+Ut.archProud/2)),nt-o<.02){const rt=z(Ut.archW+.02,.15,.032,{});K(rt,O+Z*(St+Ut.archW/2),nt+.075,T*(H+.016))}}for(const Z of[-1,1]){const T=z(ft+2*(Ut.archW+Ut.archQuirk),Ut.archW,Ut.archProud,{chamfer:Ie.joinery});K(T,O,At+Ut.archW/2,Z*(H+Ut.archProud/2))}},Yt=[...d].sort((O,ct)=>O.at-ct.at);let Q=0;for(const O of Yt){const ct=O.width/2,nt=Math.max(0,O.at-ct),_t=Math.min(y,O.at+ct),ft=O.kind==="window"?O.sill??Ut.winSill:0,St=O.kind==="window"?O.head??Ut.winHead:O.head??(O.kind==="arch"?2.25:Ut.doorH);if(dt(Q,nt,o,o+a),ft>0&&dt(nt,_t,o,o+ft),dt(nt,_t,o+St,o+a),Q=_t,O.kind==="window"){const At=St-ft,Z=o+(ft+St)/2,T=v===null?1:-v,gt=new et(new It(O.width-2*Ut.reveal-.002,At-.002,.006),_s());gt.castShadow=!1,gt.receiveShadow=!0,K(gt,O.at,Z,T*.015);const rt=new et(new It(O.width-2*Ut.reveal-.002,At-.002,.006),iv());rt.castShadow=!1,rt.receiveShadow=!0,K(rt,O.at,Z,-T*.015),at(O.at,O.width,o+ft,o+St),Ot(O.at,O.width,o+ft,o+St);const st=Math.max(1,Math.round((O.width-2*Ut.reveal)/.9)),lt=O.width-2*Ut.reveal;for(let ot=1;ot<st;ot++){const C=z(.04,At,.05,{chamfer:Ie.joinery});K(C,O.at-lt/2+lt/st*ot,Z)}const Pt=O.restrictor?Math.min(o+1.7,o+St-.1):o+ft+At/3;if(At>.55){const ot=z(lt,.04,.05,{chamfer:Ie.joinery});K(ot,O.at,Pt)}if(O.restrictor){const ot=z(.06,.02,.03,{colour:xt.metalDull,chamfer:Ie.thin});K(ot,O.at+lt/4,o+ft+.02,0)}for(const ot of ut){const C=z(O.width+.09,.025,c/2+.03,{chamfer:Ie.joinery});K(C,O.at,o+ft-.0125,ot*(c/4+.015))}if(v!==null){const ot=z(O.width+.12,.04,.09,{chamfer:Ie.joinery});K(ot,O.at,o+ft-.02,-v*(H+.045)),ot.rotation.order="YXZ",ot.rotation.set(v*.1,N,0)}if(O.curtains){Gv(i,t+w*O.at,o+St+.15,e+U*O.at,N,O.width+.4,{offset:(v??1)*(H+.09)});const ot=[.3,.22],C=v??1;for(const B of[-1,1]){const J=ot[B<0?0:1],it=O.width*J,tt=6;for(let Lt=0;Lt<tt;Lt++){const mt=it/tt,Mt=re("fabric",mt*1.35,At+.35,.045,O.curtains,{cast:!0}),Kt=O.at+B*(O.width/2-it+(Lt+.5)*mt);K(Mt,Kt,Z+.1,C*(H+.075),Lt%2?.175:-.175)}}const S=z(O.width+.44,.12,.09,{chamfer:Ie.joinery});K(S,O.at,o+St+.21,C*(H+.055))}}else if((O.kind==="door"||O.kind==="arch")&&(at(O.at,O.width,o,o+St),Ot(O.at,O.width,o,o+St),O.kind==="door")){const At=O.swing??1,Z=O.width/2-Ut.reveal,T=H-.045;for(const st of[-1,1]){const lt=z(.013,St-.02,.03,{});K(lt,O.at+st*(Z-.0055),o+(St-.02)/2,At*T)}const gt=z(O.width-2*Ut.reveal,.014,.03,{});K(gt,O.at,o+St-.025,At*T);const rt=Hv(O,O.width,M,At);if(rt){const st=T+.015+Ut.leafT,lt=St-Ut.reveal-.02,Pt=rt.pair?Z-.006:2*Z-.006,ot=rt.face,C=rt.pair?[1,-1]:[ot];for(const S of C){const B=O.at+S*(Z-.003),J=ot*st;rt.leaves.push({hx:t+w*B+X*J,hz:e+U*B+Y*J,y:o,baseRot:N,phiOpen:S*ot*Math.PI/2,leafRot:S>0?0:Math.PI,dx:-S*Pt/2,dz:-ot*Ut.leafT/2,lw:Pt,lh:lt});for(const it of[.15,1.02,1.89]){if(it>lt-.1)continue;const tt=re("chrome",.016,.1,.016,qt.metal,{chamfer:.001,cast:!1});K(tt,B,o+.015+it,J)}}rt.centre={x:t+w*O.at,z:e+U*O.at},rt.y0=o,i.doors.push(rt)}}if(g&&O.kind==="door"){const At=-(O.swing??1);for(const Z of[-1,1])Fv(i,t+w*(O.at+At*(O.width/2+Ut.archW+.15))+X*Z*(H+.006),o+Ut.switchH,e+U*(O.at+At*(O.width/2+Ut.archW+.15))+Y*Z*(H+.006),N+(Z<0?Math.PI:0))}}if(dt(Q,y,o,o+a),g&&v!==null&&o+Ut.gpoH<o+a){const O=Math.max(1,Math.floor(y/3.5));for(let ct=0;ct<O;ct++){const nt=(ct+.5)*(y/O);Yt.some(_t=>Math.abs(_t.at-nt)<_t.width/2+.25)||Bv(i,t+w*nt+X*v*(H+.006),o+Ut.gpoH,e+U*nt+Y*v*(H+.006),N+(v<0?Math.PI:0))}}b&&(i.faces[b]={a:{x:t,z:e},b:{x:n,z:s},u:{x:w,z:U},n:{x:X,z:Y},angle:N,thickness:c,y0:o,height:a,length:y,face:O=>({x:(t+n)/2+X*O*(c/2),z:(e+s)/2+Y*O*(c/2),nx:X*O,nz:Y*O,rotY:N+(O<0?Math.PI:0)})})}function Gv(i,t,e,n,s=0,r=1.6,o={}){const a=new Wt,c=new et(new Ge(.0125,.0125,r,8),pl("chrome",o.colour??qt.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const h=new et(new ji(.0175,8,6),pl("chrome",o.colour??qt.metalDark));h.position.x=l*r/2,a.add(h)}return a.rotation.y=s,a.position.set(t,e,n),a.translateZ(o.offset??0),i.add(a),a}function Vv(i,t,e,n,s=!0){const r=re("chrome",s?.128:.018,s?.018:.128,.018,qt.metal,{chamfer:.001,cast:!1});r.position.set(t,e,n+.032),i.add(r);for(const o of[-1,1]){const a=re("chrome",.01,.01,.032,qt.metal,{cast:!1});a.position.set(t+(s?o*.064:0),e+(s?0:o*.064),n+.016),i.add(a)}return r}function ml(i,t,e,n,s=0,r=xt.joineryLight){const o=typeof r=="object"&&r!==null?r:{colour:r},{colour:a=xt.joineryLight,frame:c=xt.joineryDark,collide:l=!0,seatH:h=.45}=o,u=new Wt,d=.44,f=re("joinery",d,.018,d,a,{chamfer:.02,cast:!0});f.position.y=h-.009,u.add(f);const m=.42,_=re("joinery",d,m,.018,a,{chamfer:Ie.furniture});_.position.set(0,h+.04+m/2,-d/2+.02),_.rotation.x=.14,u.add(_);for(const p of[-1,1]){const g=re("joinery",.03,m+.07,.03,c,{chamfer:Ie.furniture});g.position.set(p*(d/2-.02),h+.02+(m+.07)/2,-d/2+.02),g.rotation.x=.14,u.add(g)}for(const p of[-1,1])for(const g of[-1,1]){const v=re("joinery",.032,h-.018,.032,c,{chamfer:Ie.furniture});v.position.set(p*(d/2-.024),(h-.018)/2,g*(d/2-.024)),g<0&&(v.rotation.x=-.105),u.add(v)}for(const p of[-1,1]){const g=re("joinery",d-.07,.045,.016,c,{chamfer:Ie.thin});g.position.set(0,h-.045,p*(d/2-.026)),u.add(g);const v=re("joinery",d-.07,.02,.02,c,{chamfer:Ie.thin});v.position.set(0,.18,p*(d/2-.026)),u.add(v)}return u.position.set(t,n,e),u.rotation.y=s,i.add(u),l&&i.solid(t,n,e,.45,.45,.45),u}function Wv(i,t,e,n,s,r,o=0,a=xt.benchtop,c=xt.joineryLight,l={}){const{shadow:h=!0,handle:u=!0}=l,d=new Wt,f=Ut.toeKickH,m=Ut.toeKickD,_=.72,p=.038,g=re("joinery",s-.1,f,r-m,xt.shadowDark,{});g.position.set(0,f/2,-m/2),d.add(g);const v=re("joinery",s,_,r,c,{chamfer:Ie.furniture,cast:!0});v.position.set(0,f+_/2,0),d.add(v);const x=re("bench",s+.04,p,r+.02,a,{chamfer:Ie.joinery,cast:!0});x.position.set(0,Ut.benchH-p/2,.01),d.add(x);const M=[];let A=s;for(;A>.02;){let D=Ut.cabinetModules[0];for(const y of Ut.cabinetModules)y<=A+.001&&(D=y);(A-D<.02||M.length>12)&&(D=A),M.push(D),A-=D}let b=-s/2;for(const D of M){const y=re("joinery",D-.003,_-.006,.018,c,{chamfer:Ie.thin,cast:!1});y.position.set(b+D/2,f+_/2,r/2+.009),d.add(y),u&&Vv(d,b+D/2,f+_-.05,r/2+.018),b+=D}d.position.set(t,n,e),d.rotation.y=o,i.add(d);const[E,P]=ff(i,d,n,Ut.benchH);return h&&oi(i,t,e,n,E,P),d}function pf(i,t,e,n,s,r,o=0,a=xt.joineryLight,c={}){const{frame:l=xt.joineryDark,height:h=.74,shadow:u=!0}=c,d=new Wt,f=.03,m=re("joinery",s,f,r,a,{chamfer:Ie.joinery,cast:!0});m.position.y=h-f/2,d.add(m);for(const g of[-1,1])for(const v of[-1,1]){const x=re("joinery",.06,h-f,.06,l,{chamfer:Ie.furniture});x.position.set(g*(s/2-.09),(h-f)/2,v*(r/2-.09)),d.add(x)}for(const[g,v,x,M]of[[s-.24,.02,0,r/2-.09],[s-.24,.02,0,-r/2+.09],[.02,r-.24,s/2-.09,0],[.02,r-.24,-s/2+.09,0]]){const A=re("joinery",g,.07,v,l,{chamfer:Ie.furniture});A.position.set(x,h-f-.035,M),d.add(A)}d.position.set(t,n,e),d.rotation.y=o,i.add(d);const[_,p]=ff(i,d,n,h);return u&&oi(i,t,e,n,_,p),d}function Xv(i,t,e,n,s,r,o={}){const{tileW:a=1.2,tileD:c=.6,colour:l=xt.ceiling,tee:h=xt.metalDull}=o,u=new Wt,d=Math.max(1,Math.round(n/a)),f=Math.max(1,Math.round(s/c)),m=n/d,_=s/f;for(let p=0;p<d;p++)for(let g=0;g<f;g++){const v=re("ceilingGrid",m-.02,.014,_-.02,l,{cast:!1});v.position.set(-n/2+(p+.5)*m,-.007,-s/2+(g+.5)*_),u.add(v)}for(let p=0;p<=d;p++){const g=re("chrome",.024,.024,s,h,{chamfer:.001});g.position.set(-n/2+p*m,-.012,0),u.add(g)}for(let p=0;p<=f;p++){const g=re("chrome",n,.024,.024,h,{chamfer:.001});g.position.set(0,-.012,-s/2+p*_),u.add(g)}return u.position.set(t,r,e),i.add(u),u}const qv=.38,Yv=.44,jv=2.4,$v=1.8,Kv=.95,Zv=2.4,Cu=70,_o=.38,Pu=i=>i<0?0:i>1?1:i,Jv=i=>i*i*(3-2*i);function Qv(i,t,e,n="doorLeaf"){const s=new Wt,r=Ut.leafT,o=.105,a=.175,c=.105,l=.14,h=Math.min(Ut.handleH+.01,t-c-l),u=(g,v,x,M,A=r,b=.005)=>{const E=re(n,g,v,A,e,{chamfer:b,cast:!0});return E.position.set(x,M,0),s.add(E),E};u(o,t,i/2-o/2,0),u(o,t,-i/2+o/2,0);const d=i-2*o;u(d,a,0,-t/2+a/2),u(d,c,0,t/2-c/2),u(d,l,0,-t/2+h);const f=a,m=h-l/2,_=h+l/2,p=t-c;m-f>.05&&u(d-.004,m-f-.004,0,-t/2+(f+m)/2,r-.016,.002),p-_>.05&&u(d-.004,p-_-.004,0,-t/2+(_+p)/2,r-.016,.002);for(const g of[-1,1]){const v=re("chrome",.052,.052,.01,qt.metal,{chamfer:.002,cast:!1});v.position.set(-i/2+.06,-t/2+Ut.handleH,g*(r/2+.005)),s.add(v);const x=re("chrome",.02,.02,.045,qt.metal,{chamfer:.001,cast:!1});x.position.set(-i/2+.06,-t/2+Ut.handleH,g*(r/2+.0275)),s.add(x);const M=re("chrome",.11,.02,.02,qt.metal,{chamfer:.001,cast:!1});M.position.set(-i/2+.115,-t/2+Ut.handleH,g*(r/2+.05)),s.add(M)}return s}function ty(i,t,e=qt.metal){const n=new Wt,s=.048,r=.085,o=.07,a=.21,c=.07,l=Math.min(1.02,t-o-c-.2),h=(f,m,_,p,g=s,v=.003)=>{const x=re("chrome",f,m,g,e,{chamfer:v,cast:!0});return x.position.set(_,p,0),n.add(x),x};h(r,t,i/2-r/2,0),h(r,t,-i/2+r/2,0);const u=i-2*r;h(u,a,0,-t/2+a/2),h(u,o,0,t/2-o/2),h(u,c,0,-t/2+l);const d=[[-t/2+a,-t/2+l-c/2],[-t/2+l+c/2,t/2-o]];for(const[f,m]of d){const _=m-f;if(_<.08)continue;const p=new et(new It(u-.004,_-.004,.008),_s());p.castShadow=!1,p.receiveShadow=!0,p.position.set(0,(f+m)/2,0),n.add(p)}for(const f of[-1,1]){const m=re("chrome",u,a-.03,.004,e,{chamfer:.001,cast:!1});m.position.set(0,-t/2+a/2,f*(s/2+.003)),n.add(m);const _=-t/2+1.05,p=re("chrome",i-.17,.038,.038,e,{chamfer:.002,cast:!1});p.position.set(0,_,f*(s/2+.062)),n.add(p);for(const g of[-1,1]){const v=re("chrome",.026,.026,.062,e,{chamfer:.001,cast:!1});v.position.set(g*(i/2-.115),_,f*(s/2+.031)),n.add(v)}}return n}class ey{constructor(t,e,n,s){this.system=t,this.id=s,this.name=e.label||"door",this.auto=!!e.auto,this.triggerR=e.triggerR??(this.auto?jv:Kv),this.dwell=e.dwell??(this.auto?$v:Zv),this.openTime=e.openTime??qv,this.closeTime=e.closeTime??Yv,this.state=e.startsShut===!1?"open":"shut",this.phase=this.state==="open"?1:0,this._hold=0,this.isDoor=!0,this.action="door",this.data={door:this},this.radius=2,this.leaves=[];for(const c of e.leaves){const l=new Wt;l.position.set(c.hx,c.y,c.hz),l.rotation.y=c.baseRot;const h=e.style==="glazed"?ty(c.lw,c.lh,e.colour):Qv(c.lw,c.lh,e.colour,e.surfaceName),u=nf(h);u.position.set(c.dx,c.lh/2+.015,c.dz),u.rotation.y=c.leafRot,l.add(u),n.add(l),this.leaves.push({pivot:l,baked:u,baseRot:c.baseRot,phiOpen:c.phiOpen})}for(const c of this.leaves)c.pivot.rotation.y=c.baseRot;n.updateMatrixWorld(!0);const r=new Ci,o=new Ci;for(const c of this.leaves)r.union(o.setFromObject(c.baked));r.min.y-=.05,this.collider={min:r.min.clone(),max:r.max.clone(),walkable:!1,door:this};const a=new I(e.centre.x,e.y0+1,e.centre.z);n.localToWorld(a),this.pos=a,this._trigger2=this.triggerR*this.triggerR,this._apply()}get open(){return this.state==="open"}get blocking(){return this.state==="shut"}get label(){return this.state==="shut"||this.state==="closing"?`Open the ${this.name}`:`Close the ${this.name}`}requestOpen(){if(this.state==="open"||this.state==="opening"){this._hold=this.dwell;return}this.state="opening",this.system._dirty=!0}requestClose(){return this.state==="shut"||this.state==="closing"?!0:this._occupied()?!1:(this.state="closing",!0)}toggle(){return this.state==="shut"||this.state==="closing"?(this.requestOpen(),!0):this.requestClose()}_occupied(t=null){var o;const e=this.collider,n=a=>a.x>e.min.x-_o&&a.x<e.max.x+_o&&a.z>e.min.z-_o&&a.z<e.max.z+_o,s=(o=this.system.game.player)==null?void 0:o.position;if(s&&n(s))return!0;const r=t||this.system._movers();for(const a of r)if(n(a))return!0;return!1}update(t,e,n){let s=!1;if(this.auto&&n){const r=n.x-this.pos.x,o=n.z-this.pos.z;s=r*r+o*o<this._trigger2}if(!s)for(const r of e){const o=r.x-this.pos.x,a=r.z-this.pos.z;if(o*o+a*a<this._trigger2){s=!0;break}}switch(s&&(this._hold=this.dwell,(this.state==="shut"||this.state==="closing")&&(this.state="opening",this.system._dirty=!0)),this.state){case"opening":this.phase=Pu(this.phase+t/this.openTime),this.phase>=1&&(this.phase=1,this.state="open");break;case"open":this._hold>0&&(this._hold-=t,this._hold<=0&&!this._occupied(e)&&(this.state="closing"));break;case"closing":if(this._occupied(e)){this.state="opening",this._hold=this.dwell;break}this.phase=Pu(this.phase-t/this.closeTime),this.phase<=0&&(this.phase=0,this.state="shut",this.system._dirty=!0);break}this._apply()}_apply(){const t=Jv(this.phase);for(const e of this.leaves)e.pivot.rotation.y=e.baseRot+e.phiOpen*t}setVisible(t){for(const e of this.leaves)e.pivot.visible!==t&&(e.pivot.visible=t)}dispose(){var t;for(const e of this.leaves)(t=e.pivot.parent)==null||t.remove(e.pivot),e.baked.traverse(n=>{n.isMesh&&n.geometry.dispose()});this.leaves.length=0}}class ny{constructor(t){this.game=t,this.list=[],this._blocking=[],this._dirty=!0,this._moverBuf=[],this._moverFrame=-1,this._frame=0,this.scanned=0}install(t,e){if(!t||!t.length)return[];const n=[];for(const s of t){const r=new ey(this,s,e,this.list.length);this.list.push(r),n.push(r)}return this._dirty=!0,n}get count(){return this.list.length}_movers(){var r,o,a;if(this._moverFrame===this._frame)return this._moverBuf;this._moverFrame=this._frame;const t=this._moverBuf;t.length=0;const e=this.game,n=(o=(r=e.slice)==null?void 0:r.bodies)==null?void 0:o.call(r);if(n)for(const c of n)t.push(c.pos);const s=(a=e.npcs)==null?void 0:a.list;if(s)for(const c of s)c.visible&&t.push(c.position);return t}update(t){var r;if(!this.list.length)return;this._frame++;const e=this._movers(),n=(r=this.game.player)==null?void 0:r.position,s=Cu*Cu;for(const o of this.list)if(o.update(t,e,n),n){const a=n.x-o.pos.x,c=n.z-o.pos.z;o.setVisible(a*a+c*c<s)}}collect(t,e,n){if(this._dirty){this._blocking.length=0;for(const l of this.list)l.blocking&&this._blocking.push(l.collider);this._dirty=!1}const s=this._blocking.length;if(!s)return n;this.scanned+=s;const r=t.x-e,o=t.x+e,a=t.z-e,c=t.z+e;for(let l=0;l<s;l++){const h=this._blocking[l];h.max.x<r||h.min.x>o||h.max.z<a||h.min.z>c||n.push(h)}return n}nearest(t,e=2){let n=null,s=e;for(const r of this.list){if(r.auto)continue;const o=r.pos.distanceTo(t);o<s&&(s=o,n=r)}return n}clear(){for(const t of this.list)t.dispose();this.list.length=0,this._blocking.length=0,this._dirty=!0}}const ue=(i,t,e,n,s={})=>{const r=new et(new It(i,t,e),s.material||Se(n,s));return r.castShadow=s.cast!==!1,r.receiveShadow=!0,r};function Ai(i,t={}){var f;const{width:e=3,height:n=.8,bg:s="#1f2933",fg:r="#f4efe4",font:o="bold 64px Georgia, serif",pad:a=24}=t,c=document.createElement("canvas");c.width=512,c.height=Math.max(32,Math.round(512*(n/e)));const l=c.getContext("2d");l.fillStyle=s,l.fillRect(0,0,c.width,c.height),t.border&&(l.strokeStyle=t.border,l.lineWidth=8,l.strokeRect(6,6,c.width-12,c.height-12)),l.fillStyle=r,l.font=o,l.textAlign="center",l.textBaseline="middle";let h=parseInt(((f=o.match(/(\d+)px/))==null?void 0:f[1])||"64",10);for(;l.measureText(i).width>c.width-a*2&&h>12;)h-=2,l.font=o.replace(/\d+px/,h+"px");l.fillText(i,c.width/2,c.height/2);const u=new Qn(c);u.colorSpace=qe,u.anisotropy=4;const d=new et(new be(e,n),new Ye({map:u,transparent:!0,side:$n}));return d.userData.isSign=!0,d}function ta(i,t=1){const e=new Wt,n=i.range(2.6,4.4)*t,s=new et(new Ge(.2*t,.3*t,n,6),Se(qt.trunk,{flat:!0}));s.position.y=n/2,s.castShadow=!0,e.add(s);const r=i.weighted([{value:qt.foliage,weight:4},{value:qt.foliageLight,weight:3},{value:qt.foliageDeep,weight:2}]).value,o=i.int(2,4);for(let a=0;a<o;a++){const c=i.range(1.3,2.2)*t,l=new et(new pa(c,0),Se(r,{flat:!0}));l.position.set(i.range(-.7,.7)*t,n+i.range(-.2,.9)*t,i.range(-.7,.7)*t),l.rotation.set(i.range(0,3),i.range(0,3),i.range(0,3)),l.castShadow=!0,l.receiveShadow=!0,e.add(l)}return e}function ga(i,t){const e=new Wt,n=i.pick(qt.carBodies),s=ue(1.9,.72,4.3,n);s.position.y=.78,e.add(s);const r=ue(1.72,.62,2.2,0,{material:Zd()});r.position.set(0,1.4,-.15),e.add(r);const o=ue(1.78,.09,2,n);o.position.set(0,1.75,-.15),e.add(o);for(const l of[-1,1]){const h=ue(.09,.12,.24,n);h.position.set(l,1.26,.88),e.add(h)}const a=ue(1.95,.34,4.35,qt.metalDark);a.position.y=.45,e.add(a);for(const l of[-.86,.86])for(const h of[1.42,-1.42]){const u=new et(new Ge(.34,.34,.26,10),Se(1579292));u.rotation.z=Math.PI/2,u.position.set(l,.34,h),u.castShadow=!0,e.add(u)}const c=Yl();for(const l of[-.62,.62]){const h=new et(new It(.34,.16,.08),c);h.position.set(l,.86,2.16),e.add(h);const u=new et(new It(.3,.14,.08),Jd());u.position.set(l,.86,-2.16),e.add(u)}return e.userData.headlights=c,e}function iy(){const i=new Wt;i.rotation.order="YXZ";const t=ue(1.9,.72,4.1,15262418);t.position.y=.78,i.add(t);const e=ue(1.86,1.15,2.3,15262418);e.position.set(0,1.62,-.85),i.add(e);const n=ue(1.92,.28,2.32,11026479);n.position.set(0,1.55,-.85),i.add(n);const s=ue(1.72,.62,1.3,0,{material:Zd()});s.position.set(0,1.4,.9),i.add(s);const r=ue(1.95,.34,4.15,qt.metalDark);r.position.y=.45,i.add(r);for(const a of[-.86,.86])for(const c of[1.3,-1.3]){const l=new et(new Ge(.36,.36,.26,10),Se(1579292));l.rotation.z=Math.PI/2,l.position.set(a,.36,c),l.castShadow=!0,i.add(l)}const o=Yl();for(const a of[-.62,.62]){const c=new et(new It(.34,.16,.08),o);c.position.set(a,.86,2.06),i.add(c);const l=new et(new It(.3,.14,.08),Jd());l.position.set(a,.86,-2.06),i.add(l)}return i}function sy(i){const t=new Wt,e=i.pick([13616564,12109001,13220004,11187616,14209732,10321770,11577792,9413544]),n=i.pick([7035472,5266020,7626571,9063482,4147024]),s=i.chance(.35)?2:1,r=i.pick(["gable","gable","skillion","parapet"]),o=i.chance(.4),a=i.range(6.4,8.4),c=i.range(5,6.4),l=s===2?5.3:2.9,h=o?3.1:0,u=a+h,d=-h/2,f=ue(a,l,c,e);if(f.position.set(d,l/2,0),t.add(f),s===2){const v=ue(a+.06,.18,c+.06,ea(n));v.position.set(d,2.95,0),t.add(v)}if(r==="gable"){for(const A of[-1,1]){const b=ue(a+.7,.12,c*.62,n);b.position.set(d,l+.62,A*c*.235),b.rotation.x=A*.42,t.add(b)}const v=ue(a+.8,.14,.3,n);v.position.set(d,l+1.2,0),t.add(v);const x=new Yd;x.moveTo(-c/2,0),x.lineTo(c/2,0),x.lineTo(0,1.12),x.closePath();const M=new Wl(x,{depth:.16,bevelEnabled:!1});for(const A of[-1,1]){const b=new et(M,Se(e));b.rotation.y=Math.PI/2,b.position.set(d+(A===1?a/2-.16:-a/2),l,0),b.castShadow=!0,t.add(b)}}else if(r==="skillion"){const v=ue(a+.8,.14,c+.9,n);v.position.set(d,l+.42,0),v.rotation.x=.16,v.castShadow=!0,t.add(v);const x=ue(a+.8,.3,.12,ea(e));x.position.set(d,l+.3,c/2+.3),t.add(x)}else{const v=ue(a+.3,.14,c+.3,n);v.position.set(d,l+.06,0),t.add(v);const x=ue(a+.3,.42,.14,e);x.position.set(d,l+.24,c/2+.08),t.add(x)}if(r!=="parapet"&&i.chance(.5)){const v=ue(.5,1.3,.5,9072736);v.position.set(d+a*.28,l+.8,-.6),t.add(v)}if(o){const v=a/2,x=Math.min(c,5.2),M=c/2-x/2,A=ue(h,2.5,x,e);A.position.set(v,1.25,M),t.add(A);const b=ue(h+.24,.12,x+.24,n);b.position.set(v,2.56,M),t.add(b);const E=ue(h-.5,2,.08,14276043);E.position.set(v,1.05,c/2+.02),t.add(E);for(let P=0;P<4;P++){const D=ue(h-.5,.03,.09,12170667);D.position.set(v,.45+P*.44,c/2+.03),t.add(D)}}const m=new Wt;m.position.set(-.475,0,c/2+.04);const _=ue(.95,2,.1,i.pick([5916210,8007458,3099222]));_.position.set(.475,1,0),m.add(_),t.add(m);const p=ue(1.4,.16,.7,qt.concrete);p.position.set(0,.08,c/2+.4),t.add(p);const g=(v,x)=>{const M=ue(1.15,1.1,.08,0,{material:_s(),cast:!1});M.position.set(v,x,c/2+.03),t.add(M);const A=ue(1.3,1.25,.05,16777215);A.position.set(v,x,c/2+.01),t.add(A)};return g(d-a*.28,1.5),o||g(d+a*.28,1.5),s===2&&(g(d-a*.28,4.15),g(d+a*.28,4.15),g(d,4.15)),{group:t,size:{w:u,d:c,h:l},door:m}}function ea(i){const t=new kt(i);return t.multiplyScalar(.72),t.getHex()}function ry(i,t=10129274){const e=new Wt,n=ue(i,1.05,.05,t);n.position.y=.58,n.castShadow=!0,e.add(n);const s=ue(i,.08,.08,ea(t));s.position.y=1.12,e.add(s);const r=Math.max(2,Math.round(i/2.2));for(let o=0;o<=r;o++){const a=ue(.1,1.25,.1,ea(t));a.position.set(-i/2+i/r*o,.62,0),e.add(a)}return{group:e}}function mf(i){const t=Yl(),e=Qd();i.traverse(n=>{n.material===t&&(n.material=e)})}const oy=.42,ay=.34,Ti=ay+.03,gl=.7,_l=.6,mn=.55,je=11026479,vr=3.2,qn=2.8,vt={x0:-5.4,x1:-1.8,z0:-3.65,z1:-2.35,cx:-3.6,cz:-3,w:3.6,d:1.3,benchH:.9},ve={x0:-1.72,z0:-2.45,x1:-.9,z1:-.55,w:.36},Ws={x:-1.93,z:-2.51},xo={x:vt.cx,y:1.78,z:vt.z0+.176,tilt:-.16,w:.48,h:.28},Js={x0:-1.7,y:.97,z:0},Yn={x0:vt.x0+.35,x1:-2.3,z:vt.z1+.55,facing:Math.PI},Lu={x:-8,screen:{y:1.22,z:1.721,w:.3,h:.22,rotY:Math.PI}},cy={x:-5.2,y:2.3,z:1.934,w:.62,h:.34,rotY:0},ss={x:-8,z:.85,facing:0},We={x:5.2,z:0,pitch:.34,flavours:[["cola",3877412],["lemonade",14673106],["orange",14256683]]},Oe={grill:{top:1.06,z:-6.54,plates:{patty:-2.95,fillet:-1.65}},fryer:{top:1.12,z:-6.54,wells:[-8.85,-8.38]},dump:{x:-7.2,y:1.11,z:-6.54}},Ln={uhc:{x:-2.2,z:-2.615,rows:{patty:1.3,fillet:1.06}},bins:{x0:-3.48,pitch:.19,y:.975,z:-3.08},buns:{x:-5.95,y:1.02,z:-3}},ly=.04,hy=.004,uy=.012,dy=(i,t,e)=>{const n=Math.min(i,t,e);return n<ly?0:Math.min(uy,Math.max(hy,n/12))},fy=[["tile",16777215,"kitchen floor overlay, splashbacks, partition linings"],["metal",xt.metalDull,"all stainless: pod, benches, pass, hood, shelving"],["bench",xt.benchtop,"front counter top (RoomKit counter())"],["joinery",xt.joineryLight,"tables, chairs, booths, gate, door leaves"],["joinery",xt.joineryDark,"chair frames, bins, kiosk plinths"],["joinery",xt.shadowDark,"toe kicks, recesses, coved skirting, screens off"],["trim",je,"counter fascia, kiosk pedestals, menu board, signage"],["(basic)","signAtlas","ONE canvas atlas: every label in the shop"],["(shared)","troffer emissive","luminaire faces — one material town-wide"],["(shared)","contact shadow","fixture footprint decals — one town-wide"],["trim",5208634,"cold bin: lettuce (legibility is a design requirement)"],["trim",10236968,"cold bin: tomato"],["trim",13210159,"cold bin: cheese + UHC hold slots"],["trim",8030778,"cold bin: pickle"],["trim",15261904,"cold bin: onion + mayo gun band"]],Iu=new Set;function gf(i,t,e={}){if(e.material)return e.material;try{return Zl(i,t,null,e.recipe||{})}catch(n){return Iu.has(i)||(Iu.add(i),console.error(`Fitout: surface '${i}' unavailable, flat colour instead`,n)),Se(t,e)}}function py(i,t,e,n,s,r={}){var h;const o=gf(i,s,r),a=r.chamfer??dy(t,e,n),c=a>0?df(t,e,n,a):new It(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),l=new et(c,o);return l.castShadow=r.cast??((h=o.userData)==null?void 0:h.cast)??!1,l.receiveShadow=!0,l}function W(i,t,e,n,s,r,o,a,c,l={}){const h=py(t,o,a,c,e,l);return h.position.set(n,s,r),l.rotY&&(h.rotation.y=l.rotY),i.add(h),h}const _f=i=>({x:Math.sin(i),z:Math.cos(i)});function yr(i,t,e,n,s){const r=(t+n)/2,o=(e+s)/2;W(i,"joinery",xt.shadowDark,r,.0375,o,Math.max(Math.abs(n-t),.024),.075,Math.max(Math.abs(s-e),.024))}function vo(i,t,e,n,s,r,o,a){const c=n-t,l=s-e;for(let h=0;h<o;h++)for(let u=0;u<a;u++){const d=t+(h+.5)*(c/o),f=e+(u+.5)*(l/a);W(i,"metal",xt.metalDull,d,r+.035,f,1.2,.07,.6);const m=new et(new It(1.16,.012,.56),rv());m.position.set(d,r-.006,f),i.add(m)}}function my(i,t,e,n=0,s=.62,r=.48){const a=_f(n);W(i,"joinery",xt.joineryDark,t,.9/2,e,s,.9,r,{rotY:n,cast:!0}),W(i,"joinery",xt.shadowDark,t,.075,e,s-.06,.15,r-.06,{rotY:n}),W(i,"joinery",xt.shadowDark,t+a.x*(r/2-.03),.6,e+a.z*(r/2-.03),s-.16,.34,.04,{rotY:n});const c=W(i,"joinery",xt.joineryLight,t+a.x*(r/2+.01),.64,e+a.z*(r/2+.01),s-.2,.26,.016,{rotY:n,cast:!0});c.rotation.x=-.22,W(i,"metal",xt.metalDull,t,.9+.02,e,s+.06,.04,r+.06,{rotY:n,cast:!0}),W(i,"trim",je,t,.9-.07,e,s+.005,.09,r+.005,{rotY:n}),i.solid(t,0,e,Math.abs(a.z)*s+Math.abs(a.x)*r,.9+.05,Math.abs(a.z)*r+Math.abs(a.x)*s)}function Du(i,t,e,n,s=0){const r={rotY:s};W(i,"joinery",xt.joineryDark,t,n+.021,e,.17,.042,.115,r),W(i,"trim",je,t-.045,n+.1,e,.052,.15,.052,{...r,cast:!0}),W(i,"joinery",xt.shadowDark,t+.03,n+.075,e-.02,.038,.1,.038,{...r,cast:!0}),W(i,"joinery",xt.joineryLight,t+.038,n+.058,e+.028,.055,.065,.055,r)}function Uu(i,t,e,n,s=7,r=.4,o=.3,a=0){for(let c=0;c<s;c++)W(i,"trim",je,t,e+.01+c*.014,n,r,.012,o,{rotY:a,cast:c===s-1});W(i,"joinery",xt.shadowDark,t,e+.004,n,r+.03,.008,o+.03,{rotY:a})}const xl=4,vl=8;function Ns(){return"#"+je.toString(16).padStart(6,"0")}const xf={fries:[0,0,"FRIES","#20262e"],grill:[1,0,"GRILL","#20262e"],pod:[2,0,"BUILD","#20262e"],pack:[3,0,"PACK-OUT","#20262e"],drivethru:[0,1,"DRIVE-THRU",Ns()],staff:[1,1,"STAFF ONLY","#20262e"],collect:[2,1,"COLLECT",Ns()],order:[3,1,"ORDER HERE",Ns()],drinks:[0,2,"DRINKS","#20262e"],mccafe:[1,2,"BARN CAFE","#4b2e22"],barn:[2,2,"BURGER BARN",Ns()],uhc:[3,2,"UHC","#20262e"],lettuce:[0,3,"LETTUCE","#4f7a3a"],tomato:[1,3,"TOMATO","#9c3428"],cheese:[2,3,"CHEESE","#c9922f"],pickle:[3,3,"PICKLE","#7a8a3a"],onion:[0,4,"ONION","#8f9784","#20262e"],ketchup:[1,4,"KETCHUP","#9c2b1f"],mustard:[2,4,"MUSTARD","#c9922f"],mayo:[3,4,"MAYO","#e6dcc4","#20262e"],bbq:[0,5,"BBQ","#5a3a26"],buns:[1,5,"BUNS","#a8763f"],wrap:[2,5,"WRAP","#20262e"],dry:[3,5,"DRY STORE","#2f5d6b"],pay:[0,6,"PAY",Ns()],present:[1,6,"PRESENT",Ns()],toaster:[2,6,"TOASTER","#20262e"],sauce:[3,6,"SAUCE","#20262e"]};let jn=null;function vf(){if(jn!==null)return jn||null;if(typeof document>"u"||!document.createElement)return jn=!1,null;const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d");if(!t)return jn=!1,null;const e=i.width/xl,n=i.height/vl;t.clearRect(0,0,i.width,i.height);for(const[,r]of Object.entries(xf)){const[o,a,c,l,h="#f4efe4"]=r,u=o*e,d=a*n;t.fillStyle=l,t.fillRect(u+3,d+3,e-6,n-6),t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=3,t.strokeRect(u+3,d+3,e-6,n-6),t.fillStyle=h,t.textAlign="center",t.textBaseline="middle";let f=44;for(t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.measureText(c).width>e-34&&f>12;)f-=2,t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.fillText(c,u+e/2,d+n/2)}const s=new Qn(i);return s.colorSpace=qe,s.anisotropy=4,jn=new yn({map:s,roughness:.9,metalness:0,emissive:2763306,emissiveMap:s,side:ui,transparent:!1}),jn}kr(()=>{var i;jn&&jn.dispose&&((i=jn.map)==null||i.dispose(),jn.dispose()),jn=null});let wi=null;function yo(){return wi||(wi=new yn({color:856342,roughness:.3,metalness:0,emissive:1454666,emissiveIntensity:.55})),wi}kr(()=>{var i;(i=wi==null?void 0:wi.dispose)==null||i.call(wi),wi=null});function xe(i,t,e,n,s,r,o,a=0){const c=vf(),l=xf[t];if(!c||!l)return null;const[h,u]=l,d=new be(r,o),f=h/xl,m=(h+1)/xl,_=1-(u+1)/vl,p=1-u/vl;d.setAttribute("uv",new Fe(new Float32Array([f,p,m,p,f,_,m,_]),2));const g=new et(d,c);return g.position.set(e,n,s),g.rotation.y=a,i.add(g),g}const na=i=>!i.walkable&&i.max.y>oy&&i.min.y<1.7;function gy(i,t,e){let n=t,s=e,r=0;for(let o=0;o<4;o++){let a=!1;for(const c of i){if(!na(c))continue;const l=c.min.x-Ti,h=c.max.x+Ti,u=c.min.z-Ti,d=c.max.z+Ti;if(n<=l||n>=h||s<=u||s>=d)continue;const f=[[n-l,-1,0],[h-n,1,0],[s-u,0,-1],[d-s,0,1]];f.sort((g,v)=>g[0]-v[0]);const[m,_,p]=f[0];n+=_*m,s+=p*m,r+=m,a=!0}if(!a)break}return{x:n,z:s,moved:r}}function _y(i,t,e){let n=1/0;for(const s of i){if(!na(s))continue;const r=Math.max(s.min.x-t,0,t-s.max.x),o=Math.max(s.min.z-e,0,e-s.max.z),a=r===0&&o===0?-Math.min(t-s.min.x,s.max.x-t,e-s.min.z,s.max.z-e):Math.hypot(r,o);a<n&&(n=a)}return n===1/0?99:n}function xy(i,t){const e=[],n=[];for(const s of t){const r=[];for(const m of i)na(m)&&s.x>m.min.x-Ti&&s.x<m.max.x+Ti&&s.z>m.min.z-Ti&&s.z<m.max.z+Ti&&r.push([+m.min.x.toFixed(2),+m.min.z.toFixed(2),+m.max.x.toFixed(2),+m.max.z.toFixed(2)]);if(r.length&&e.push({id:s.id,why:"point inside a blocking collider",boxes:r}),n.push({id:s.id,clear:+_y(i,s.x,s.z).toFixed(3)}),s.facing==null||s.standoff==null)continue;const o=_f(s.facing),a=[s.standoff-.01,s.standoff-_l],c=[s.x+o.x*a[0],s.x+o.x*a[1]],l=[s.z+o.z*a[0],s.z+o.z*a[1]],h=gl/2,u=[Math.min(...c)-Math.abs(o.z)*h,Math.max(...c)+Math.abs(o.z)*h],d=[Math.min(...l)-Math.abs(o.x)*h,Math.max(...l)+Math.abs(o.x)*h],f=[];for(const m of i)na(m)&&(m.max.x<=u[0]+1e-6||m.min.x>=u[1]-1e-6||m.max.z<=d[0]+1e-6||m.min.z>=d[1]-1e-6||f.push([+m.min.x.toFixed(2),+m.min.z.toFixed(2),+m.max.x.toFixed(2),+m.max.z.toFixed(2)]));f.length&&e.push({id:s.id,why:`clear floor ${gl} x ${_l} obstructed`,rect:[+u[0].toFixed(2),+d[0].toFixed(2),+u[1].toFixed(2),+d[1].toFixed(2)],boxes:f})}return n.sort((s,r)=>s.clear-r.clear),{failures:e,tightest:n.slice(0,8)}}function vy(i,t={}){const e=t.width??20,n=t.depth??14,s=e/2,r=n/2,o=s-Ut.wallThick/2,a=r-Ut.wallThick/2,c=xt.metalDull,l=xt.joineryLight,h=xt.joineryDark,u=xt.shadowDark,d=[],f=(L,k,q,ht=null,bt=null,Jt={})=>{d.push({name:L,x:k,z:q,facing:ht,standoff:bt,noClamp:!!Jt.noClamp})},m=1.4;W(i,"tile",16777215,(-o+7.9)/2,.003,(-a+m)/2,o+7.9,.006,m+a,{cast:!1,chamfer:0}),W(i,"tile",16777215,(7.9+o)/2,.003,(-5+m)/2,o-7.9,.006,m+5,{cast:!1,chamfer:0}),yr(i,-o+.02,-a+.04,-6.35,-a+.04),yr(i,-4.45,-a+.04,3.25,-a+.04),yr(i,-o+.04,-a,-o+.04,m),yr(i,o-.04,-5,o-.04,m);const _=-a+.375,p=-a+.75,g=-9.6,v=-6.7,x=(g+v)/2,M=v-g;W(i,"metal",c,x,.45,_,M,.9,.75,{cast:!0}),W(i,"joinery",u,x,.075,_+.02,M-.1,.15,.66),i.solid(x,0,_,M,.9,.75);const A=1.12;W(i,"tile",16777215,x,1.5,-a+.02,M+.4,1.2,.02,{cast:!1,chamfer:0}),W(i,"metal",c,x,1.01,_,2.1,.22,.62,{cast:!0});for(const L of[-.7,-.23,.24])W(i,"joinery",u,x+L,A,_,.32,.03,.42),W(i,"trim",13210159,x+L,A-.03,_,.28,.01,.38,{chamfer:0}),W(i,"metal",c,x+L,A+.16,_-.26,.03,.3,.03),W(i,"metal",c,x+L,A+.3,_-.2,.03,.03,.16);W(i,"metal",c,x+.95,1.06,_,.75,.1,.62,{cast:!0}),W(i,"metal",c,x+.95,1.24,_-.26,.7,.04,.04),W(i,"trim",je,x+.95,1.14,_+.1,.3,.06,.22),xe(i,"fries",x,1.62,-a+.05,.9,.26,0),W(i,"metal",c,x,2.24,_+.15,M+.3,.42,1,{cast:!0});const b=1.06,E=-4.3,P=-.3,D=(E+P)/2,y=P-E;W(i,"metal",c,D,.45,_,y,.9,.75,{cast:!0}),W(i,"joinery",u,D,.075,_+.02,y-.1,.15,.66),i.solid(D,0,_,y,.9,.75),W(i,"tile",16777215,D,1.5,-a+.02,y+.4,1.2,.02,{cast:!1,chamfer:0}),W(i,"metal",c,D,.98,_,2.6,.16,.62,{cast:!0});for(const L of[-.65,.65])W(i,"joinery",u,D+L,b,_,1.1,.02,.5);W(i,"metal",c,D,b+.1,_-.3,2.6,.2,.03,{cast:!0}),W(i,"metal",c,D+1.35,b+.02,_+.16,.1,.02,.16),W(i,"joinery",u,D+1.35,b+.06,_+.24,.03,.07,.1),xe(i,"grill",D,1.62,-a+.05,.9,.26,0),W(i,"metal",c,D,2.24,_+.15,y+.4,.42,1,{cast:!0}),W(i,"metal",c,D,2.62,_+.15,.34,.36,.34),W(i,"metal",c,1.35,1,_+.02,1.6,2,.7,{cast:!0}),i.solid(1.35,0,_+.02,1.6,2,.7);for(const L of[-.4,.4])W(i,"joinery",u,1.35+L,1,_+.38,.72,1.86,.02),W(i,"metal",c,1.35+L-.3,1.05,_+.4,.04,.6,.04);const w=Ut.intWall,U=3.3,N=-4.55,X={height:qn,surface:"tile",colour:16777215,thickness:w,skirting:!1,cornice:!1,trimColour:xt.trim};hs(i,U,-a,U,N,{...X,inner:-1,autoServices:!1,name:"dryWest"}),hs(i,U,N,o,N,{...X,inner:1,autoServices:!1,openings:[{at:.95,width:1,kind:"door",head:Ut.headDatum,door:{startsShut:!1,style:"panel",label:"dry store",swing:-1}}],name:"drySouth"}),xe(i,"staff",U+.006+w/2,1.85,-5.7,.7,.22,Math.PI/2),xe(i,"dry",U+1.85,2.3,N+w/2+.006,.9,.26,0);const Y={x0:5.55,x1:7.85,z0:-a+.05,z1:-5.35},H=(Y.x0+Y.x1)/2,K=(Y.z0+Y.z1)/2;W(i,"metal",c,H,1.2,K,Y.x1-Y.x0,2.4,Y.z1-Y.z0,{cast:!0}),i.solid(H,0,K,Y.x1-Y.x0,2.4,Y.z1-Y.z0);for(const L of[-.5,.28])W(i,"joinery",u,Y.x0-.008,1.2,K+L,.012,2.3,.014,{chamfer:0});for(const L of[-.75,0,.75])W(i,"joinery",u,H+L,1.2,Y.z1+.008,.014,2.3,.012,{chamfer:0});W(i,"metal",c,Y.x0-.03,1.02,K+.3,.04,1.84,.78,{cast:!0});for(const[L,k,q,ht]of[[.3,1.94,.8,.02],[.3,.1,.8,.02],[-.09,1.02,.02,1.86],[.69,1.02,.02,1.86]])W(i,"joinery",u,Y.x0-.052,k,K+L,.008,ht,q,{chamfer:0});W(i,"metal",c,Y.x0-.07,1.05,K+.62,.05,.34,.06,{cast:!0}),W(i,"joinery",u,Y.x0-.045,.35,K-.25,.01,.26,.44,{chamfer:0});for(let L=0;L<4;L++)W(i,"metal",c,Y.x0-.052,.26+L*.055,K-.25,.006,.018,.4,{chamfer:0});W(i,"metal",c,H,2.55,K,.9,.3,.7,{cast:!0});for(let L=0;L<4;L++)W(i,"metal",c,4.45,.15+L*.44,-a+.25,1.7,.03,.45),L>0&&(W(i,"joinery",l,4.1,.29+L*.44,-a+.25,.55,.24,.38,{cast:!0}),W(i,"joinery",h,4.9,.27+L*.44,-a+.25,.55,.21,.36));i.solid(4.45,0,-a+.25,1.7,1.6,.45),W(i,"joinery",l,6.95,.16,-4.95,.55,.32,.42,{cast:!0}),W(i,"joinery",h,6.85,.44,-4.98,.42,.24,.36,{cast:!0}),yr(i,U+w/2,-a,U+w/2,N),vo(i,U,-a,o-1,N,qn,2,1);const z={cx:4.7,cz:-2.5,w:3,d:.75};W(i,"metal",c,z.cx,.45,z.cz,z.w,.9,z.d,{cast:!0}),W(i,"joinery",u,z.cx,.075,z.cz,z.w-.1,.15,z.d-.08),i.solid(z.cx,0,z.cz,z.w,.9,z.d),oi(i,z.cx,z.cz,0,z.w,z.d);for(let L=0;L<3;L++)W(i,"trim",je,z.cx-1.05,.98+L*.09,z.cz,.34,.08,.26);Uu(i,z.cx-.3,.9,z.cz,7);for(let L=0;L<4;L++)W(i,"joinery",l,z.cx+.6,.96+L*.11,z.cz,.42,.1,.42,{cast:L===3});W(i,"joinery",l,z.cx+1.2,.97,z.cz,.36,.14,.36,{cast:!0}),xe(i,"pack",z.cx,1.6,z.cz-z.d/2-.02,.9,.26,Math.PI);const ut=o-.375;W(i,"metal",c,ut,.45,-2.7,.75,.9,4.5,{cast:!0}),W(i,"joinery",u,ut,.075,-2.7,.66,.15,4.4),i.solid(ut,0,-2.7,.75,.9,4.5),oi(i,ut,-2.7,0,.75,4.5),W(i,"joinery",u,ut-.05,1.02,-4.2,.3,.2,.36,{cast:!0}),W(i,"joinery",u,ut-.11,1.22,-4.2,.03,.24,.32,{cast:!0}),W(i,"metal",c,ut,.94,-1,.6,.04,.8),W(i,"metal",c,o-.06,1.55,-2.7,.05,.22,.05,{cast:!0}),W(i,"joinery",u,o-.1,1.62,-2.7,.14,.14,.1,{cast:!0}),W(i,"joinery",u,o-.05,1.75,-2.7,.05,.4,.6,{cast:!0});{const L=new et(new be(.52,.32),yo());L.position.set(o-.07,1.75,-2.7),L.rotation.y=-Math.PI/2,i.add(L)}W(i,"metal",c,o-.25,1.25,-2.7,.45,.03,1.1),W(i,"trim",je,o-.25,1.32,-2.35,.3,.1,.22,{cast:!0}),W(i,"joinery",l,o-.25,1.34,-3,.28,.14,.3,{cast:!0}),xe(i,"pay",o-.02,2.3,-4.2,.6,.2,-Math.PI/2),xe(i,"present",o-.02,2.3,-1,.75,.2,-Math.PI/2),xe(i,"drivethru",o-.02,2.58,-2.6,1.1,.26,-Math.PI/2),i.interact("dt_window_out","hand the bag out",o-.25,1.1,-1,"service",{op:"deliver",when:"window_handout"},1.8);const dt=-.5;W(i,"metal",c,-o+.35,.45,dt,.7,.9,1.7,{cast:!0}),W(i,"joinery",u,-o+.35,.075,dt,.62,.15,1.6),i.solid(-o+.35,0,dt,.7,.9,1.7),oi(i,-o+.35,dt,0,.7,1.7),W(i,"joinery",u,-o+.32,1.02,dt-.45,.3,.2,.36,{cast:!0}),W(i,"joinery",u,-o+.26,1.22,dt-.45,.03,.24,.32,{cast:!0}),W(i,"metal",c,-o+.06,1.55,dt+.55,.05,.22,.05,{cast:!0}),W(i,"joinery",u,-o+.1,1.62,dt+.55,.1,.14,.14,{cast:!0}),W(i,"joinery",u,-o+.03,1.45,dt,.03,.14,.14),xe(i,"drivethru",-o+.02,2.35,dt,1.1,.26,Math.PI/2),xe(i,"order",-o+.02,2.05,dt,.8,.22,Math.PI/2),i.interact("dt_window_take","take the drive-thru order",-o+.3,1.1,dt,"service",{op:"dt_take",when:"dt_order"},1.8);const at=vt.benchH;W(i,"metal",c,vt.cx,.45,vt.cz,vt.w,.9,vt.d,{cast:!0}),W(i,"joinery",u,vt.cx,.075,vt.cz,vt.w-.1,.15,vt.d-.1),i.solid(vt.cx,0,vt.cz,vt.w,.9,vt.d),oi(i,vt.cx,vt.cz,0,vt.w,vt.d);for(const[L,k]of[[0,je],[1,13210159],[2,5208634],[3,l]]){const q=vt.x0+.55+L*.85;for(let ht=0;ht<4;ht++)W(i,"trim",k,q,.24+ht*.13,vt.z1-.16,.4,.11,.26,{chamfer:0})}const Ot=-4.9;W(i,"metal",c,Ot,at+.31,vt.cz-.1,.85,.62,.62,{cast:!0}),W(i,"joinery",u,Ot,at+.63,vt.cz-.1,.6,.03,.3),W(i,"joinery",u,Ot,at+.18,vt.cz+.215,.52,.09,.02),W(i,"metal",c,Ot,at+.12,vt.cz+.26,.56,.025,.1,{cast:!0}),W(i,"trim",je,Ot,at+.5,vt.cz+.22,.6,.08,.02),xe(i,"toaster",Ot,at+.36,vt.cz+.225,.44,.14,0),W(i,"metal",c,vt.x0-.55,.6,vt.cz,.7,1.2,.9,{cast:!0}),i.solid(vt.x0-.55,0,vt.cz,.7,1.2,.9);for(let L=0;L<3;L++)W(i,"joinery",l,vt.x0-.55,.35+L*.32,vt.cz,.62,.16,.8);xe(i,"buns",vt.x0-.55,1.32,vt.cz+.46,.5,.16,0);const Yt=-4;W(i,"metal",c,Yt,at+.1,vt.cz-.25,.7,.2,.45,{cast:!0});const Q=[["ketchup",10236968],["mustard",13210159],["mayo",15261904],["bbq",8030778]];Q.forEach(([L,k],q)=>{const ht=Yt-.255+q*.17;W(i,"metal",c,ht,at+.3,vt.cz-.25,.06,.22,.06,{cast:!0}),W(i,"trim",k,ht,at+.43,vt.cz-.25,.05,.05,.05,{chamfer:0}),xe(i,L,ht,at+.135,vt.cz-.02,.15,.06,0)});const O=-3.58;W(i,"joinery",u,-3.1,at+.015,vt.cz-.08,1,.05,.6);const ct=[["pickle",8030778],["onion",15261904],["lettuce",5208634],["tomato",10236968],["cheese",13210159]];ct.forEach(([L,k],q)=>{const ht=O+.1+q*.19;W(i,"metal",c,ht,at+.045,vt.cz-.08,.165,.09,.54),W(i,"trim",k,ht,at+.075,vt.cz-.08,.13,.05,.48,{chamfer:0}),xe(i,L,ht,at-.1,vt.z1+.006,.17,.075,0)});const nt=-2.2;W(i,"metal",c,nt,at+.38,vt.cz,.78,.76,.68,{cast:!0});for(let L=0;L<3;L++)for(const k of[1,-1])W(i,"joinery",u,nt,at+.14+L*.24,vt.cz+k*.345,.64,.16,.02),W(i,"trim",13210159,nt,at+.11+L*.24,vt.cz+k*.3,.56,.03,.06,{chamfer:0});xe(i,"uhc",nt,at+.86,vt.cz+.01,.4,.16,0),W(i,"joinery",l,Ws.x,at+.02,Ws.z,.3,.04,.34,{cast:!0}),xe(i,"wrap",-1.95,at-.1,vt.z1+.006,.3,.1,0);{const L=ve.x1-ve.x0,k=ve.z1-ve.z0,q=Math.hypot(L,k),ht=Math.atan2(-k,L)+Math.PI/2,bt=(ve.x0+ve.x1)/2,Jt=(ve.z0+ve.z1)/2,Ce=W(i,"metal",c,bt,.965,Jt,ve.w,.03,q,{rotY:ht,cast:!0});Ce.rotation.x=-.045;for(const Ae of[-1,1]){const ne=W(i,"metal",c,bt,.995,Jt,.03,.06,q,{rotY:ht});ne.translateX(Ae*(ve.w/2-.015)),ne.rotation.x=-.045}for(const[Ae,ne]of[[ve.x0+.1,ve.z0+.22],[ve.x1-.1,ve.z1-.25]])W(i,"metal",c,Ae,.47,ne,.05,.94,.05);for(let Ae=0;Ae<3;Ae++){const ne=Ae/3,tn=(Ae+1)/3,Rn=ve.x0+L*ne,ur=ve.x0+L*tn,dr=ve.z0+k*ne,ni=ve.z0+k*tn;i.solid((Rn+ur)/2,.6,(dr+ni)/2,Math.abs(ur-Rn)+ve.w,.5,Math.abs(ni-dr)+.06)}}W(i,"metal",c,vt.cx,1.28,vt.z0+.06,.05,.8,.05,{cast:!0}),W(i,"metal",c,vt.cx,1.66,vt.z0+.09,.06,.05,.1);{const L=W(i,"joinery",u,vt.cx,1.78,vt.z0+.14,.56,.36,.035,{cast:!0});L.rotation.x=-.16;const k=W(i,"joinery",u,vt.cx,1.78,vt.z0+.165,.5,.3,.008,{chamfer:0});k.rotation.x=-.16;const q=new et(new be(.48,.28),yo());q.position.set(vt.cx,1.78,vt.z0+.172),q.rotation.x=-.16,i.add(q)}xe(i,"pod",vt.cx,2.05,vt.z0+.1,.6,.2,0);const _t=.6,ft=2.45,St=3.55,At=-2.65,Z=-1.95;for(const[L,k]of[[-o,At],[Z,ft],[St,o]]){const q=(L+k)/2,ht=k-L;W(i,"metal",c,q,.45,0,ht,.9,_t,{cast:!0}),W(i,"joinery",u,q,.075,0,ht-.1,.15,_t-.08),i.solid(q,0,0,ht,.9,_t)}oi(i,(-o+At)/2,0,0,At+o,_t);{const L=W(i,"metal",c,At+.03,1.24,0,.05,Z-At,_t-.04,{cast:!0});L.rotation.z=.2}W(i,"metal",c,-.9,.945,0,1.6,.05,_t+.06,{cast:!0});for(const L of[-.7,.7])W(i,"metal",c,-.9+L,1.22,0,.04,.5,.04);W(i,"metal",c,-.9,1.44,0,1.56,.04,.05);for(const L of[-.4,.2]){W(i,"trim",je,-.9+L,1.38,0,.28,.1,.2,{cast:!0});const k=new et(new It(.2,.02,.14),sv());k.position.set(-.9+L,1.325,0),i.add(k)}W(i,"metal",c,We.x,.9+.36,We.z+.02,1.04,.72,.34,{cast:!0}),W(i,"joinery",u,We.x,1.44,We.z-.145,.96,.34,.03,{chamfer:0}),We.flavours.forEach(([,L],k)=>{const q=We.x+(k-1)*We.pitch;W(i,"trim",L,q,1.44,We.z-.165,.22,.26,.02,{chamfer:0}),W(i,"metal",c,q,1.18,We.z-.16,.05,.16,.06,{cast:!0}),W(i,"joinery",u,q,1.1,We.z-.175,.03,.05,.03,{chamfer:0})}),W(i,"joinery",u,We.x,.925,We.z-.16,.9,.03,.24);for(let L=0;L<6;L++)W(i,"joinery",l,We.x+.72,.955+L*.055,We.z-.05,.115,.055,.115,{chamfer:0});xe(i,"drinks",We.x,1.86,We.z-.1,.6,.2,Math.PI),i.doors.push({label:"staff gate",style:"panel",pair:!1,auto:!0,startsShut:!0,face:-1,colour:l,surfaceName:"joinery",triggerR:1.2,dwell:1,leaves:[{hx:St-.003,hz:0,y:0,baseRot:0,phiOpen:-Math.PI/2,leafRot:0,dx:-1.0939999999999996/2,dz:Ut.leafT/2,lw:St-ft-.006,lh:1}],centre:{x:(ft+St)/2,z:0},y0:0});const T={z:1.8,d:.8,x0:-o,x1:ft},gt=(T.x0+T.x1)/2,rt=T.x1-T.x0;Wv(i,gt,T.z,0,rt,T.d,0,xt.benchtop,l,{handle:!1}),W(i,"trim",je,gt,.52,T.z+T.d/2+.03,rt,.6,.02),xe(i,"barn",T.x0+1.6,.62,T.z+T.d/2+.05,1.4,.34,0);const st=-8;W(i,"joinery",u,st,1.02,T.z,.36,.2,.3,{cast:!0}),W(i,"joinery",u,st,1.22,T.z-.06,.32,.24,.03,{cast:!0}),W(i,"metal",c,st,.98,T.z+.3,.14,.16,.1),xe(i,"order",st,1.42,T.z+T.d/2+.01,.8,.22,0);const lt=-5.2;W(i,"metal",c,lt,1.06,T.z,1.6,.04,T.d+.1);for(const L of[-.72,.72])W(i,"metal",c,lt+L,.98,T.z,.05,.16,.05);xe(i,"collect",lt,1.28,T.z+.12,.9,.24,0),W(i,"metal",c,lt,2.62,T.z+.1,.05,.36,.05),W(i,"joinery",u,lt,2.3,T.z+.1,.72,.44,.05,{cast:!0});{const L=new et(new be(.64,.36),yo());L.position.set(lt,2.3,T.z+.13),i.add(L)}xe(i,"collect",lt,2.62,T.z+.135,.6,.2,0);const Pt=.2;W(i,"metal",c,Pt,1.12,T.z-.1,.72,.44,.5,{cast:!0}),W(i,"joinery",u,Pt,1.1,T.z+.16,.6,.24,.04);for(const L of[-.18,.1])W(i,"metal",c,Pt+L,.96,T.z+.12,.05,.12,.05);W(i,"joinery",l,Pt+.55,.99,T.z-.15,.28,.18,.28);const ot=1.55;W(i,"joinery",h,ot,.96,T.z,1.2,.1,.7,{cast:!0}),W(i,"metal",c,ot,1.46,T.z,1.2,.05,.7,{cast:!0});for(const L of[-1,1])W(i,"metal",c,ot+L*.575,1.21,T.z,.05,.45,.66);const C=new et(new It(1.1,.42,.62),gf("glass",13623528));C.position.set(ot,1.215,T.z),i.add(C),W(i,"joinery",l,ot,1.19,T.z,1.06,.02,.56);for(const[L,k,q]of[[-.35,-.12,je],[0,.1,13210159],[.33,-.08,l]])W(i,"trim",q,ot+L,1.06+.035,T.z+k,.16,.07,.16,{chamfer:0}),W(i,"trim",q,ot+L*.7,1.23,T.z-k,.14,.06,.14,{chamfer:0});xe(i,"mccafe",Pt+1.15,.62,T.z+T.d/2+.05,.9,.26,0),W(i,"trim",je,-3.6,2.44,T.z-.55,5.8,.58,.06,{cast:!0}),xe(i,"barn",-5.6,2.44,T.z-.51,1.6,.4,0),xe(i,"order",-1.8,2.44,T.z-.51,1.5,.36,0);const S={x:o-.35,z0:.9,z1:2.5},B=(S.z0+S.z1)/2;W(i,"metal",c,S.x,.45,B,.7,.9,S.z1-S.z0,{cast:!0}),i.solid(S.x,0,B,.7,.9,S.z1-S.z0),oi(i,S.x,B,0,.7,S.z1-S.z0),W(i,"metal",c,S.x+.1,1.24,B-.25,.3,.68,.86,{cast:!0}),W(i,"joinery",u,S.x-.075,1.34,B-.25,.02,.4,.74);for(let L=0;L<3;L++){const k=B-.51+L*.26;W(i,"trim",[10236968,8030778,13210159][L],S.x-.085,1.34,k,.01,.3,.19,{chamfer:0}),W(i,"metal",c,S.x-.1,1.02,k,.05,.14,.05,{cast:!0}),W(i,"metal",c,S.x-.15,1.11,k,.1,.03,.03)}W(i,"metal",c,S.x-.11,.925,B-.25,.24,.02,.8),W(i,"joinery",u,S.x-.11,.935,B-.25,.18,.01,.74);for(const[L,k]of[[B+.42,6],[B+.6,5]])for(let q=0;q<k;q++)W(i,"joinery",13620957,S.x,.95+q*.055,L,.115,.055,.115,{cast:q===k-1,chamfer:0});xe(i,"drinks",o-.02,1.85,B,.9,.26,-Math.PI/2),my(i,o-.42,3.3,-Math.PI/2);const J=-9.55;for(const L of[4.3,5.45]){W(i,"metal",c,J,.05,L,.44,.1,.38),W(i,"trim",je,J,.62,L,.38,1.04,.3,{cast:!0}),W(i,"metal",c,J,1.16,L,.42,.05,.34);const k=W(i,"joinery",u,J+.13,1.42,L,.035,.56,.44,{cast:!0});k.rotation.z=.26;const q=new et(new It(.02,.48,.37),yo());q.position.set(J+.165,1.42,L),q.rotation.z=.26,i.add(q),W(i,"metal",c,J+.1,1.08,L+.22,.11,.13,.09),i.solid(J,0,L,.44,1.7,.42),oi(i,J,L,0,.48,.44)}xe(i,"order",-o+.02,1.62,4.88,.6,.2,Math.PI/2);const tt=a-.03-.03,Lt=[{x:-6.9,z:3.8},{x:-4.3,z:3.8},{x:-6.9,z:5.55},{x:-4.3,z:5.55},{x:2.9,z:3.8},{x:5.7,z:3.8},{x:8.3,z:3.8}];Lt.forEach((L,k)=>{const q=k+1;pf(i,L.x,L.z,0,.8,.8),ml(i,L.x-.72,L.z,0,Math.PI/2),ml(i,L.x+.72,L.z,0,-Math.PI/2),W(i,"metal",c,L.x,.86,L.z,.035,.24,.035),Du(i,L.x+.22,L.z+.16,.74),f(`table_${q}`,L.x,L.z,null,null,{noClamp:!0}),f(`seat_${q}`,L.x+.72,L.z,null,null,{noClamp:!0}),i.interact(`table_serve_${q}`,"set the tray down",L.x,.85,L.z,"service",{op:"deliver",table:q,when:"carrying_for"},1.7)});const mt=tt,Mt=mt-1.7,Kt=2.6,pt=9.4,Rt=2,Ht=(pt-Kt)/Rt;for(let L=0;L<Rt;L++){const k=Kt+(L+.5)*Ht;for(const[q,ht,bt]of[[Mt+.265,Mt+.06,.95],[mt-.265,mt-.06,.55]])W(i,"joinery",l,k,.23,q,Ht-.1,.46,.53,{cast:!0}),W(i,"joinery",u,k,.075,q,Ht-.2,.15,.43),W(i,"joinery",l,k,bt/2,ht,Ht-.1,bt,.12,{cast:!0});W(i,"joinery",l,k,.725,(Mt+mt)/2,Ht-.2,.03,.7,{cast:!0}),W(i,"joinery",h,k,.36,(Mt+mt)/2,.09,.71,.09),Du(i,k+.28,(Mt+mt)/2,.74),i.solid(k,0,(Mt+mt)/2,Ht,.95,mt-Mt)}for(const L of[0,Ht,Ht*Rt]){const k=Kt+L;W(i,"joinery",l,k,.675,(Mt+mt)/2,.07,1.35,mt-Mt-.06,{cast:!0}),W(i,"trim",je,k,1.32,(Mt+mt)/2,.086,.06,mt-Mt-.06)}oi(i,(Kt+pt)/2,(Mt+mt)/2,0,pt-Kt,mt-Mt,{margin:.028}),W(i,"trim",je,(Kt+pt)/2,.985,Mt+.06,pt-Kt,.06,.13);const Gt=tt-.35;W(i,"joinery",l,-6.3,1.03,Gt,6.2,.05,.64,{cast:!0}),W(i,"joinery",u,-6.3,.505,Gt+.1,6,1,.4,{cast:!0}),W(i,"trim",je,-6.3,.955,Gt-.285,6.2,.09,.045),i.solid(-6.3,0,Gt,6.2,1.05,.64);for(const L of[-8.5,-7.2,-5.9,-4.6])W(i,"joinery",l,L,.72,Gt-.68,.36,.04,.36,{cast:!0}),W(i,"metal",c,L,.36,Gt-.68,.07,.68,.07),W(i,"metal",c,L,.02,Gt-.68,.34,.04,.34),i.solid(L,0,Gt-.68,.4,.75,.4);const Et=16772056;i.light(-6.5,vr-.15,4.2,Et,10,13),i.light(-2,vr-.15,4.6,Et,10,13),i.light(2.5,vr-.15,4.2,Et,10,13),i.light(7,vr-.15,4.4,Et,10,13),i.light(-3.7,qn-.15,1,Et,10,12),i.light(-7.5,qn-.15,-4.8,Et,10,12),i.light(-.5,qn-.15,-5,Et,10,12),i.light(-3.6,qn-.15,-2.6,Et,12,12),i.light(4.9,qn-.3,-5.15,Et,8,9),i.light(8.8,qn-.15,-2.6,Et,9,10),i.light(5,qn-.15,-1.6,Et,8,10);for(const[L,k,q,ht,bt]of[[-1.5,1.9,-3.2,2.4,15],[-3,2.1,4.2,3.4,16],[5.5,2.1,4,2.8,13],[-7.6,2,4.9,2.2,11],[-4,1.9,1,1.6,12]]){const Jt=i.light(L,k,q,15260876,ht,bt);Jt.decay=1}vo(i,-9.4,-6.6,3.1,.2,qn,4,3),vo(i,3.6,-4.3,9.6,-.2,qn,2,2),vo(i,-9,2.4,9.4,6.4,vr,4,2),f("spawn",-1,12.6,null,null,{noClamp:!0}),f("station_pod",vt.cx,vt.z1+mn,Math.PI,mn),f("station_fries",x,p+mn,Math.PI,mn),f("station_grill",D,p+mn,Math.PI,mn),f("station_counter",st,T.z-T.d/2-mn,0,mn),f("station_runner",lt,T.z-T.d/2-mn,0,mn),f("station_drivethru",ut-.375-mn,-2.7,Math.PI/2,mn),f("restock",4.45,-5.65,Math.PI,mn),f("gate",(ft+St)/2,0,null,null,{noClamp:!0}),f("entry_out",-1,8.3,null,null,{noClamp:!0}),f("entry",-1,6),f("aisle",-2,2.9),f("queue_1",-8,2.8),f("queue_2",-7.25,2.95),f("queue_3",-6.5,3),f("queue_4",-5.9,3.15),f("collect_wait",-5.2,3.1),f("collect_pickup",-5.2,2.65),f("kiosk_gate",-8.9,2.9),f("kiosk_1",-8.78,4.3),f("kiosk_2",-8.85,5.15),i.interact("station_pod","work the pod",vt.cx,.95,vt.z1,"station",{station:"pod",zone:{minZ:vt.z1}},2),i.interact("pod_toaster","toast a bun",Ot,1.25,vt.cz+.21,"pod",{op:"token",token:"bun",podOnly:!0},1.8),Q.forEach(([L],k)=>{const q=Yt-.255+k*.17;i.interact("pod_gun_"+L,L==="bbq"?"dose BBQ":"dose "+L,q,1.25,vt.cz-.25,"pod",{op:"token",token:L,podOnly:!0},1.7)}),ct.forEach(([L],k)=>{const q=O+.1+k*.19;i.interact("pod_bin_"+L,"add "+L,q,.98,vt.cz-.08,"pod",{op:"token",token:L,podOnly:!0},1.7)}),i.interact("pod_uhc","pull from the cabinet",nt,1.28,vt.cz+.345,"pod",{op:"uhc",podOnly:!0},1.6),i.interact("pod_wrap","wrap the order",Ws.x,.95,Ws.z,"pod",{op:"wrap",podOnly:!0},1.4),i.interact("pod_chute","send it down",ve.x0+.05,1.05,ve.z0,"pod",{op:"send",podOnly:!0},1.4),Uu(i,.42,.94,0,6);for(let L=0;L<3;L++)W(i,"joinery",14272934,1.08+L*.13,.975,-.04+L%2*.08,.11,.15,.065,{cast:L===0,chamfer:0}),W(i,"joinery",14272934,1.08+L*.13,1.06,-.04+L%2*.08,.115,.022,.03,{chamfer:0});for(let L=0;L<3;L++)W(i,"joinery",14272934,1.62+L*.13,.975,-.02+L%2*.07,.11,.15,.065,{cast:!1,chamfer:0}),W(i,"trim",je,1.62+L*.13,.955,-.02+L%2*.07,.112,.03,.067,{chamfer:0});i.interact("counter_tray","take a tray for table service",.42,1.02,0,"service",{op:"tray",when:"tray_ready"},1.6),i.interact("counter_bag","bag the next takeaway",1.18,1.02,0,"service",{op:"bag",when:"bag_ready"},1.6),i.interact("dt_bag","bag the drive-thru order",1.68,1.02,0,"service",{op:"dt_bag",when:"dt_bag_ready"},1.6),i.interact("dlv_bag","bag the delivery",1.18,1.02,-.28,"service",{op:"dlv_bag",when:"dlv_bag_ready"},1.6),i.interact("station_counter","work the counter",st,.95,T.z-T.d/2,"station",{station:"counter",zone:{maxZ:T.z-T.d/2}},1.8),i.interact("till_order","take their order",st,1.3,T.z+.95,"counter",{op:"take_order",when:"queue_head"},2.4),i.interact("till_payment","take payment",st,1,T.z+.3,"counter",{op:"take_payment",when:"payment_due"},1.6),i.interact("grill_on_patty","lay patties on",Oe.grill.plates.patty,1.12,-6.18,"kitchen",{op:"grill_on",item:"patty",when:"grill_free_patty"},1.7),i.interact("grill_pull_patty","pull the patties",Oe.grill.plates.patty,1.12,-6.18,"kitchen",{op:"grill_pull",item:"patty",when:"grill_ready_patty"},1.7),i.interact("grill_on_fillet","lay chicken on",Oe.grill.plates.fillet,1.12,-6.18,"kitchen",{op:"grill_on",item:"fillet",when:"grill_free_fillet"},1.7),i.interact("grill_pull_fillet","pull the chicken",Oe.grill.plates.fillet,1.12,-6.18,"kitchen",{op:"grill_pull",item:"fillet",when:"grill_ready_fillet"},1.7),i.interact("fry_on","drop a basket of fries",-8.6,1.18,-6.18,"kitchen",{op:"fry_on",when:"fry_free"},1.7),i.interact("fry_pull","pull the basket",-8.6,1.18,-6.18,"kitchen",{op:"fry_pull",when:"fry_ready"},1.7),i.interact("fry_take","take fries",Oe.dump.x,1.2,-6.25,"kitchen",{op:"take_fries",when:"fries_takeable"},1.6),We.flavours.forEach(([L],k)=>{i.interact("drink_"+L,"fill a "+L,We.x+(k-1)*We.pitch,1.25,We.z-.25,"kitchen",{op:"fill",flavour:L,when:"drink_wanted",zone:{maxZ:0}},1.5)}),i.interact("landing_side","set it down with the order",-1.35,1,-.32,"kitchen",{op:"add_side",when:"side_addable",zone:{maxZ:0}},1.6),i.interact("crew_bin","bin what you are holding",-3.1,.95,-.32,"kitchen",{op:"drop_held",when:"held_unwanted",zone:{maxZ:0}},1.4),i.interact("box_buns","take a box of buns",4.1,1.05,-6.4,"kitchen",{op:"take_box",box:"buns",when:"box_buns_avail"},1.6),i.interact("box_produce","take a box of produce",4.9,1.05,-6.4,"kitchen",{op:"take_box",box:"produce",when:"box_produce_avail"},1.6),i.interact("restock_buns","load the buns",-4.9,1.05,vt.z0-.1,"kitchen",{op:"restock",when:"held_box_buns",zone:{maxZ:vt.z0}},1.5),i.interact("restock_bins","refill the bins",-3.1,1.05,vt.z0-.1,"kitchen",{op:"restock",when:"held_box_produce",zone:{maxZ:vt.z0}},1.5);const ee=[];for(const L of d){const k=L.noClamp?{x:L.x,z:L.z,moved:0}:gy(i.colliders,L.x,L.z);i.spot(L.name,k.x,0,k.z),k.moved>.005&&ee.push({name:L.name,from:[L.x,L.z],to:[+k.x.toFixed(3),+k.z.toFixed(3)],moved:+k.moved.toFixed(3)})}const jt=xy(i.colliders,d.filter(L=>!L.noClamp).map(L=>({id:L.name,x:L.x,z:L.z,facing:L.facing,standoff:L.standoff}))),ae={rule:`spot = fixture face + normal * standoff; clear floor ${gl} x ${_l}; hard floor ${Ti}`,checked:d.length,failures:jt.failures,clamped:ee,tightest:jt.tightest,ok:jt.failures.length===0&&ee.length===0};ae.ok||console.error("Fitout: CLEARANCE FAILURES — a published point is unreachable",ae.failures,ee);const F=[{where:"pod face to the pass",m:+(-_t/2-vt.z1).toFixed(2)},{where:"pod back to the grill front",m:+(vt.z0-p).toFixed(2)},{where:"pod east end to the pack-out",m:+(z.cx-z.w/2-vt.x1).toFixed(2)},{where:"crew aisle, pass to counter",m:+(T.z-T.d/2-_t/2).toFixed(2)},{where:"staff gate",m:+(St-ft).toFixed(2)},{where:"pass flap by the landing",m:+(Z-At).toFixed(2)},{where:"counter face to dining tables",m:+(Lt[0].z-.4-(T.z+T.d/2)).toFixed(2)},{where:"restock straight line, pod spot to dry store door",m:+Math.hypot(4.15-vt.cx,-4.55-(vt.z1+mn)).toFixed(2)},{where:"front door opening",m:1.8}];return{workplace:"burger_barn",clearance:ae,walkways:F,spots:i.spots,materials:fy.map(L=>typeof L[1]=="number"?`${L[0]}@${L[1].toString(16)}`:`${L[0]}:${L[1]}`),labels:vf()!==null}}const kn={width:20,depth:14,height:4.2},Zt=kn.width/2,Vt=kn.depth/2,ii=kn.height,_a=Ut.wallThick,Fi=Zt-_a/2,ks=Vt-_a/2,In=2,sc=4.9,Mo=.15,Nu=6.4,rc=3.2,So=2.8,yy=.45,My=2.7,Le=-1,rs=1.8,ku=2.6,oc=.9,ac=.85,cc=2.05,Ou=-4.2,zu=-1,lc=-5.4,Sy=1.8,On=11026479,Xs=13224902,Fu=new Set;function yf(i,t,e={}){if(e.material)return e.material;try{return Zl(i,t,null,e.recipe||{})}catch(n){return Fu.has(i)||(Fu.add(i),console.error(`Shell: surface '${i}' unavailable, flat colour instead`,n)),Se(t,e)}}function zt(i,t,e,n,s,r,o,a,c,l={}){var d;const h=yf(t,e,l),u=new et(new It(Math.max(o,.001),Math.max(a,.001),Math.max(c,.001)),h);return u.castShadow=l.cast??((d=h.userData)==null?void 0:d.cast)??!1,u.receiveShadow=!0,u.position.set(n,s,r),l.rotY&&(u.rotation.y=l.rotY),i.add(u),u}const ci=()=>Se(qt.concrete);function En(i,t,e,n,s,r=0){const o=(t+n)/2,a=(e+s)/2,c=Math.abs(n-t),l=Math.abs(s-e);zt(i,"(concrete)",0,o,r-.06,a,c,.12,l,{material:ci(),cast:!1}),i.solid(o,r-1.2,a,c,1.2,l,!0)}function Bu(i,t,e,n,s,r,o){const a=new ma(n,s,28,2,r,Math.PI/2);a.rotateX(-Math.PI/2);const c=new et(a,ci());return c.receiveShadow=!0,c.position.set(t,o,e),i.add(c),c}function Dn(i,t,e,n,s,r=0,o=.15){const a=(t+n)/2,c=(e+s)/2;zt(i,"(concrete)",0,a,r+o/2,c,Math.max(Math.abs(n-t),.15),o,Math.max(Math.abs(s-e),.15),{material:ci()})}function wo(i,t,e,n,s,r,o=0,a=.15){for(let l=0;l<8;l++){const h=s+(r-s)*(l/8),u=s+(r-s)*((l+1)/8),d=t+Math.cos(h)*n,f=e+Math.sin(h)*n,m=t+Math.cos(u)*n,_=e+Math.sin(u)*n,p=Math.hypot(m-d,_-f)+.04;zt(i,"(concrete)",0,(d+m)/2,o+a/2,(f+_)/2,p,a,.16,{material:ci(),rotY:Math.atan2(-(_-f),m-d)})}}function Qe(i,t,e,n,s,r=0){const o=(t+n)/2,a=(e+s)/2;zt(i,"trim",xt.trim,o,r+.008,a,Math.max(Math.abs(n-t),.1),.012,Math.max(Math.abs(s-e),.1))}function Go(i,t,e,n=0,s=1){const r=new et(new Ge(.07,.07,s,8),yf("metal",xt.metalDull));r.castShadow=!0,r.position.set(t,n+s/2,e),i.add(r)}function bo(i,t,e,n,s,r,o=0){const a=n-t,c=s-e,l=Math.hypot(a,c);if(l<.5)return;const h=a/l,u=c/l,d=-u,f=h,m=Math.atan2(-u,h),_=_a/2+.006;for(let p=1.2;p<r-.2;p+=1.2)zt(i,"joinery",xt.shadowDark,t+h*(l/2)+d*_,o+p,e+u*(l/2)+f*_,l,.02,.012,{rotY:m});for(let p=1.2;p<l-.3;p+=1.2)zt(i,"joinery",xt.shadowDark,t+h*p+d*_,o+r/2,e+u*p+f*_,.02,r,.012,{rotY:m})}const Jl={lane:{width:3.5,surface:0,legs:[{name:"entry",from:{x:-15,z:15.9},to:{x:-15,z:-6.5},forward:{x:0,z:-1}},{name:"rear",from:{x:-9,z:-12.5},to:{x:6.15,z:-12.5},forward:{x:1,z:0}},{name:"service",from:{x:12.15,z:-6.5},to:{x:12.15,z:29.5},forward:{x:0,z:1}}]}},pe=Jl.lane.surface,Os=Jl.lane.width/2;function wy(i,t){En(i,-Zt,Vt,Zt,10.5),En(i,-11,10.5,10.4,27.5),En(i,-17.75,15.9,-11,29.5),En(i,9.65,27.5,14.65,29.5),En(i,-13.25,-6.5,-10,Vt),En(i,-12.9,-Vt,-10,-6.5),En(i,-7,-10.75,1.5,-8.6),En(i,-6.9,-10,-3.9,-Vt),En(i,2,-10.2,5,-8.2),En(i,-15-Os,-6.5,-15+Os,15.9,pe),En(i,-9,-12.5-Os,6.15,-12.5+Os,pe),En(i,12.15-Os,-6.5,12.15+Os,29.5,pe),Bu(i,-9,-6.5,4.25,7.75,Math.PI/2,pe),Bu(i,6.15,-6.5,4.25,7.75,0,pe),Dn(i,-16.75,-6.5,-16.75,15.9,pe),Dn(i,-13.25,-6.5,-13.25,15.9,pe),Dn(i,-9,-14.25,6.15,-14.25,pe),Dn(i,-9,-10.75,.5,-10.75,pe),Dn(i,13.9,-6.5,13.9,29.5,pe),Dn(i,10.4,-6.5,10.4,-5.6,pe),Dn(i,10.4,.6,10.4,29.5,pe),Dn(i,10.4,-5.2,10.4,.2,pe,.1),wo(i,-9,-6.5,4.25,Math.PI,Math.PI*1.5,pe),wo(i,-9,-6.5,7.75,Math.PI,Math.PI*1.5,pe),wo(i,6.15,-6.5,4.25,Math.PI*1.5,Math.PI*2,pe),wo(i,6.15,-6.5,7.75,Math.PI*1.5,Math.PI*2,pe);for(const c of[-16.6,-13.4])Qe(i,c,-6.5,c,15,pe);for(const c of[-14.1,-10.9])Qe(i,-9,c,.4,c,pe);Qe(i,13.75,-6.5,13.75,27.5,pe),Qe(i,.5,-14.25,.5,-10.75,pe);for(let c=1;c<6.4;c+=.8)Qe(i,c,-14.25,c+.4,-14.25,pe);for(const[c,l]of[[-11.2,-8.6],[-10.2,-9.4],[8.6,-8.8],[9.4,-7.8]])Go(i,c,l);for(let c=0;c<=2;c++)Qe(i,-11+c*2.6,10.5,-11+c*2.6,15.9);for(let c=0;c<=3;c++)Qe(i,1.4+c*2.6,10.5,1.4+c*2.6,15.9);for(let c=0;c<=8;c++)Qe(i,-11+c*2.6,22.1,-11+c*2.6,27.5);for(let c=0;c<2;c++)zt(i,"(concrete)",0,-11+(c+.5)*2.6,.06,11.4,1.65,.12,.18,{material:ci()});for(let c=0;c<3;c++)zt(i,"(concrete)",0,1.4+(c+.5)*2.6,.06,11.4,1.65,.12,.18,{material:ci()});for(let c=0;c<8;c++)zt(i,"(concrete)",0,-11+(c+.5)*2.6,.06,26.6,1.65,.12,.18,{material:ci()});for(const c of[Le-2.4,Le,Le+2.4])Qe(i,c,10.5,c,15.9);for(let c=11;c<15.9;c+=.7)Qe(i,Le-2.4,c,Le,c+.24);Go(i,Le-1.2,13.2,0,1.3),Qe(i,Le,13.2,Le+2.4,13.44);for(let c=11;c<15.6;c+=.8)Qe(i,-5.6,c,-3.6,c+.3);Dn(i,-Zt,10.5,Zt,10.5),Dn(i,-11,10.5,-11,27.5),Dn(i,-11,27.5,9.8,27.5);for(let c=16.1;c<22.1;c+=.8)Qe(i,-5.2,c,-3.2,c+.3);Qe(i,-11.25,15.9,-11.25,22.1);for(let c=10.6;c<13.9;c+=.8)Qe(i,c,18,c+.3,20,pe);for(let c=-9.2;c<=9.2;c+=1.5)c>Le-1.7&&c<Le+1.7||Go(i,c,Vt+.6);zt(i,"metal",xt.metalDull,Le,3.07,Vt+1.5,6,.14,3,{cast:!0});for(const c of[-2.7,2.7])zt(i,"metal",xt.metalDull,Le+c,1.5,Vt+2.8,.12,3,.12,{cast:!0});for(const c of[3.4,6.6]){pf(i,c,9.3,0,.9,.9);for(const[l,h,u]of[[-.78,0,Math.PI/2],[.78,0,-Math.PI/2],[0,-.78,0],[0,.78,Math.PI]])ml(i,c+l,9.3+h,0,u)}Qe(i,-9.8,8.2,-9.8,10.4),Qe(i,-8.6,8.2,-8.6,10.4),Qe(i,-7.4,8.2,-7.4,10.4);for(const c of[-9.2,-8])zt(i,"metal",xt.metalDull,c-.35,.38,10.1,.06,.76,.06,{cast:!0}),zt(i,"metal",xt.metalDull,c+.35,.38,10.1,.06,.76,.06,{cast:!0}),zt(i,"metal",xt.metalDull,c,.74,10.1,.76,.06,.06,{cast:!0});const e=Math.PI/2+.209,n=-12.3,s=7.4,r=(c,l,h,u,d,f,m,_,p={})=>{zt(i,c,l,n+h*Math.cos(e)+d*Math.sin(e),u,s-h*Math.sin(e)+d*Math.cos(e),f,m,_,{rotY:e,...p})};zt(i,"metal",xt.metalDull,-12.1,.55,10.8,.1,1.1,.1,{cast:!0}),zt(i,"trim",On,-12.1,1.6,10.8,.9,1.4,.1,{cast:!0,rotY:e+.4}),r("(concrete)",0,0,.12,.22,2.1,.25,.6,{material:ci()}),r("trim",On,0,1.7,0,1.96,1.66,.16,{cast:!0}),r("trim",xt.trim,0,1.7,-.07,1.8,1.5,.06);const o=(c,l,h,u,d,f="trim",m=0)=>r(f,d,c,l,-.11-m,h,u,.02);o(0,2.28,1.64,.22,On);for(let c=0;c<5;c++)for(const l of[-.42,.44])o(l,2.02-c*.14,.68,.035,xt.shadowDark,"joinery");for(const c of[-.55,0,.55])o(c,1.18,.4,.3,On),o(c,1.12,.28,.12,xt.joineryLight,"joinery",.01);r("metal",xt.metalDull,1.6,.9,-.1,.25,1.8,.25,{cast:!0}),r("joinery",xt.shadowDark,1.6,1.35,-.24,.2,.2,.04),r("joinery",xt.shadowDark,1.6,1.62,-.24,.55,.35,.04),zt(i,"metal",xt.metalDull,-12.55,2.92,7.1,3.2,.14,3,{cast:!0});for(const c of[5.85,8.45])zt(i,"metal",xt.metalDull,-11.45,1.4,c,.12,2.8,.12,{cast:!0});for(const c of[-17.05,-12.95])zt(i,"metal",xt.metalDull,c,pe+1.3,14,.09,2.6,.09,{cast:!0});zt(i,"trim",On,-15,pe+2.5,14,4.3,.2,.12,{cast:!0}),zt(i,"wall",Xs,1.7,1,-9.2,.14,2,2,{cast:!0}),i.solid(1.7,0,-9.2,.14,2,2);for(const c of[-9.6,-8.7])zt(i,"metal",xt.metalDull,3.5,.45,c,1.2,.9,.7,{cast:!0}),i.solid(3.5,0,c,1.2,.9,.7);const a={x0:-12.8,x1:-10.2,z0:-Vt,z1:-5};for(const[c,l,h,u]of[[a.x0,a.z0,a.x1,a.z0+.2],[a.x0,a.z0,a.x0+.2,a.z1],[a.x1-.2,a.z0,a.x1,a.z1]]){const d=(c+h)/2,f=(l+u)/2;zt(i,"wall",Xs,d,.9,f,h-c,1.8,u-l,{cast:!0}),i.solid(d,0,f,h-c,1.8,u-l)}zt(i,"metal",xt.metalDull,(a.x0+a.x1)/2,1.2,a.z1,2.4,2.4,.08,{cast:!0}),zt(i,"metal",xt.metalDull,(a.x0+a.x1)/2,1.94,(a.z0+a.z1)/2,a.x1-a.x0+.2,.1,a.z1-a.z0+.1,{cast:!0});for(const[c,l,h]of[[-12.1,-6.2,1.2],[-10.85,-6.2,1.2],[-12.1,-5.55,1.2],[-10.9,-5.55,.6]])zt(i,"joinery",xt.joineryDark,c,.55,l,h,1.1,.55,{cast:!0}),zt(i,"joinery",xt.shadowDark,c,1.13,l,h+.04,.06,.59),i.solid(c,0,l,h,1.16,.55);En(i,-13,-4.8,-11.5,-3.3);for(const[c,l,h,u]of[[-13,-4.8,-11.5,-4.68],[-13,-3.42,-11.5,-3.3],[-13,-4.8,-12.88,-3.3],[-11.62,-4.8,-11.5,-3.3]])Dn(i,c,l,h,u,0,.2);for(const[c,l]of[[-12.55,-4.1],[-11.95,-4.1]])zt(i,"metal",xt.metalDull,c,.42,l,.5,.84,.5,{cast:!0});if(zt(i,"(concrete)",0,-10.6,.1,28.3,1.1,.2,1.1,{material:ci()}),zt(i,"trim",On,-10.6,3,28.3,.55,6,.55,{cast:!0}),i.solid(-10.6,0,28.3,.7,6,.7),t){const c=t.clone();c.scale.set(.62,1.9,1),c.position.set(-10.6,4.3,28.62),i.add(c);const l=t.clone();l.scale.set(.62,1.9,1),l.position.set(-10.6,4.3,27.98),l.rotation.y=Math.PI,i.add(l)}}function by(i,t={}){const e=new Ov;zv(e,0,0,kn.width,kn.depth,0,xt.tileFloor,{surface:"vinyl"});const n={height:ii,colour:Xs,surface:"wall",skirting:!1,cornice:!1,autoServices:!1,inner:-1},s=[],r=(_,p)=>{const g=p-_,v=Math.max(1,Math.round(g/1.565)),x=g/v;for(let M=0;M<v;M++)s.push({at:_+(M+.5)*x+Zt,width:Math.min(1.375,x-.19),kind:"window",sill:yy,head:My})};r(-Fi,Le-rs/2-.15),r(Le+rs/2+.15,9.6),s.push({at:Le+Zt,width:rs,kind:"door",head:ku,door:{pair:!0,style:"glazed",auto:!0,startsShut:!0,swing:1,label:"entrance"}}),hs(e,-Zt,Vt,Zt,Vt,{...n,openings:s,name:"front"}),hs(e,Zt,Vt,Zt,-Vt+In,{...n,openings:[{at:Vt-4,width:1.2,kind:"window",sill:1.8,head:2.7},{at:Vt-zu,width:oc,kind:"window",sill:ac,head:cc},{at:Vt-Ou,width:oc,kind:"window",sill:ac,head:cc}],name:"east"}),hs(e,Zt,-Vt+In,Zt-In,-Vt,{...n,name:"splay"}),hs(e,Zt-In,-Vt,-Zt,-Vt,{...n,openings:[{at:Vt-lc,width:Sy,kind:"door",head:ku,door:{style:"panel",pair:!1,startsShut:!1,swing:1,colour:xt.metalDull,label:"goods door"}}],name:"rear"}),hs(e,-Zt,-Vt,-Zt,Vt,{...n,openings:[{at:Vt-.5,width:oc,kind:"window",sill:ac,head:cc}],name:"west"});const o=1.4;Xv(e,0,(o+ks)/2,Fi*2,ks-o,rc),Ru(e,0,(o-5)/2,Fi*2,o+5,So),Ru(e,(-Fi+7.9)/2,(-ks-5)/2,Fi+7.9,ks-5,So),zt(e,"wall",Xs,0,(So+rc+.12)/2,o,Fi*2,rc-So+.16,.12,{cast:!0}),zt(e,"wall",Xs,0,ii+.1,0,kn.width,.2,kn.depth,{cast:!0});const a=[[-Zt,Vt,Zt,Vt],[Zt,Vt,Zt,-Vt+In],[Zt,-Vt+In,Zt-In,-Vt],[Zt-In,-Vt,-Zt,-Vt],[-Zt,-Vt,-Zt,Vt]];for(const[_,p,g,v]of a){const x=Math.hypot(g-_,v-p)+.36,M=Math.atan2(-(v-p),g-_),A=(_+g)/2,b=(p+v)/2;zt(e,"wall",Xs,A,(ii+sc-Mo)/2,b,x,sc-Mo-ii,.35,{rotY:M,cast:!0}),zt(e,"trim",xt.trim,A,sc-Mo/2,b,x+.06,Mo,.47,{rotY:M,cast:!0})}const c=Vt+_a/2;zt(e,"trim",On,0,3.475,c+.05,kn.width,.85,.1,{cast:!0});const l=3.2,h=Le-1.2,u=h+l;for(const[_,p]of[[(-Zt+h)/2,h+Zt],[(u+Zt)/2,Zt-u]])zt(e,"metal",xt.metalDull,_,2.93,c+.6,p,.16,1.2,{cast:!0}),zt(e,"trim",On,_,2.79,c+1.18,p,.14,.06);const d=(h+u)/2;zt(e,"trim",On,d,(2.4+Nu)/2,c+.2,l,Nu-2.4,.4,{cast:!0});for(const[_,p]of[[(h+Le-rs/2)/2,Le-rs/2-h],[(Le+rs/2+u)/2,u-Le-rs/2]])zt(e,"trim",On,_,1.2,c+.2,p,2.4,.4,{cast:!0});zt(e,"joinery",xt.shadowDark,d,4.3,c+.41,l,3.4,.02);for(let _=0;_<18;_++)zt(e,"joinery",xt.joineryLight,h+.0875+_*.175,4.3,c+.44,.15,3.4,.04,{cast:!0});let f=null;typeof document<"u"&&document.createElement&&(f=Ai(t.name||"BURGER BARN",{width:7.2,height:.62,bg:"rgba(0,0,0,0)",fg:t.signFg??"#f6efe0",font:"bold 84px Georgia, serif"}),f.position.set(4.9,3.46,c+.12),e.add(f));for(const _ of[Ou,zu]){zt(e,"metal",xt.metalDull,Zt+.53,pe+2.66,_,.9,.12,1.6,{cast:!0});for(const p of[-.75,.75])Go(e,Zt+.6,_+p,pe)}zt(e,"metal",xt.metalDull,-Zt-.53,pe+2.66,-.5,.9,.12,1.6,{cast:!0}),zt(e,"trim",On,-Zt-.1,2.35,-.5,.1,.45,1.7,{cast:!0}),zt(e,"(concrete)",0,-12.85,.12,-1.9,1.3,.25,.45,{material:ci()}),zt(e,"trim",On,-12.85,1.55,-1.9,1.24,1.3,.14,{cast:!0}),zt(e,"trim",xt.trim,-12.85,1.55,-1.97,1.1,1.16,.05);for(let _=0;_<4;_++)zt(e,"joinery",xt.shadowDark,-12.85,1.86-_*.17,-2,.88,.032,.02);zt(e,"metal",xt.metalDull,-12.85,.85,-.95,.2,1.7,.2,{cast:!0}),zt(e,"joinery",xt.shadowDark,-12.85,1.3,-1.06,.16,.16,.04),zt(e,"metal",xt.metalDull,6.2,2.3,-Vt-.4,.8,4.2,.6,{cast:!0}),zt(e,"metal",xt.metalDull,6.2,4.55,-Vt-.4,1,.35,.8,{cast:!0});for(const _ of[-1,.5]){zt(e,"metal",xt.metalDull,_,2.6,-Vt-.06,.6,.6,.06);for(let p=0;p<5;p++)zt(e,"joinery",xt.shadowDark,_,2.36+p*.12,-Vt-.1,.54,.05,.04)}zt(e,"metal",xt.metalDull,lc,2.86,-Vt-1,3,.14,2,{cast:!0});for(const _ of[-1.3,1.3])zt(e,"metal",xt.metalDull,lc+_,1.43,-Vt-1.85,.12,2.86,.12,{cast:!0});bo(e,Zt,Vt,Zt,-Vt+In,ii),bo(e,Zt,-Vt+In,Zt-In,-Vt,ii),bo(e,Zt-In,-Vt,-Zt,-Vt,ii),bo(e,-Zt,-Vt,-Zt,Vt,ii),wy(e,f);const m=vy(e,{width:kn.width,depth:kn.depth});return{group:nf(e.group),colliders:e.colliders,doorSpecs:e.doors,interactables:e.interactables,spots:e.spots,lights:e.lights,report:m,width:kn.width,depth:kn.depth,height:ii,door:{x:Le,z:Vt+1.6},doors:[{x:Le,z:Vt+1.6}],interiorBounds:{minX:-Fi,maxX:Fi,minZ:-ks,maxZ:ks,maxY:ii}}}const oe=(i,t,e,n,s=null)=>{const r=new et(new It(i,t,e),s||Se(n));return r.castShadow=!0,r.receiveShadow=!0,r};function Ey(i){const t=i.root,e=i.rng.child("places"),n=i.colliders,s=(a,c,l,h,u)=>n.push({min:new I(a-l/2,0,c-u/2),max:new I(a+l/2,h,c+u/2),walkable:!1}),r=(a,c,l,h,u=-.045,d=qt.concrete)=>{const f=new et(new It(Math.abs(l-a),.1,Math.abs(h-c)),Se(d));f.position.set((a+l)/2,u,(c+h)/2),f.receiveShadow=!0,t.add(f)},o=(a,c,l,h,u=0)=>(a.position.set(c,l,h),a.rotation.y=u,t.add(a),a);Ty(t,s,o,r),Ay(t,s,o,r,e),Ry(t,s,o,r),Cy(t,s,o,r),Py(t,s,o,r,e)}function Ty(i,t,e,n){e(oe(7.2,3.1,5.4,15262424),5,1.55,44.5),e(oe(7.4,.5,5.6,12597547),5,3.2,44.5),e(oe(7.4,.16,5.9,10104864),5,3.5,44.5),t(5,44.5,7.2,3.4,5.4);const o=Ai("POST OFFICE",{width:3.4,height:.6,bg:"#c0392b"});e(o,5,3.2,44.5-2.96,Math.PI),e(oe(1,2.1,.08,5916210),5+2.1,1.05,44.5-2.74);for(const a of[-2,0])e(oe(1.6,1.3,.08,0,_s()),5+a,1.6,44.5-2.74);e(oe(.6,1.1,.6,12597547),5-4.6,.55,40),t(5-4.6,40,.7,1.2,.7),n(3,41.8,5+3.6,39.2,-.036)}function Ay(i,t,e,n,s){e(oe(34,5.4,15,13620184),0,2.7,-53),e(oe(34.4,.9,15.4,9063482),0,5.6,-53),t(0,-53,34,6.2,15);const a=Ai("BARNSIDE MALL",{width:7.5,height:1.1,bg:"#8a4c3a"});e(a,0,4.4,-53+7.58),e(oe(30,2.6,.1,0,_s()),0,1.4,-53+7.52),["GROCER","CHEMIST","BAKERY"].forEach((l,h)=>{const u=-10+h*10;e(Ai(l,{width:2.6,height:.5,bg:"#20262e"}),u,3.15,-53+7.56),e(oe(1.1,2.2,.1,3817544),u+3,1.1,-53+7.54)}),n(-16,-53+8.5,16,-53+14.5);for(let l=0;l<7;l++){const h=-13+l*4.4;if(n(h-.06,-44,h+.06,-53+13.6,-.03,15262938),l<6&&s.chance(.55)){const u=ga(s);e(u,h+2.2,0,-53+11.4,Math.PI+s.range(-.04,.04)),t(h+2.2,-53+11.4,2,1.6,4.4)}}}function Ry(i,t,e,n){e(oe(8,3.4,16,14272936),-72,1.7,-5),e(oe(8.6,.14,16.8,5266020),-72,3.5,-5),e(oe(8.6,.4,16.8,4476991),-72,3.32,-5),t(-72,-5,8,3.8,16),e(Ai("BARNSIDE PRIMARY",{width:4.6,height:.7,bg:"#44503f"}),-72+4.08,2.6,-5,Math.PI/2),e(oe(1.1,2.1,.1,8007458),-72+4.05,1.05,1);for(const a of[-6,-3,0,3])e(oe(.08,1.2,2.2,0,_s()),-72+4.04,1.7,-5+a);n(-68,0,-58,2,-.036),n(-74,-19,-62,-14,-.03,12173510);const o=(a,c,l,h)=>{e(oe(Math.max(l,.08),1,Math.max(h,.08),9080982),a,.5,c),t(a,c,Math.max(l,.2),1.1,Math.max(h,.2))};o(-72,-5-16.5,16,.08),o(-80,-5-6.5,.08,20),o(-64,-5-12.5,.08,8)}function Cy(i,t,e,n){n(-66,64,-50,77),e(oe(13,.35,8,14344164),-58,4.4,70),e(oe(13.2,.5,8.2,12597547),-58,4.75,70);for(const o of[-5.4,5.4])for(const a of[-2.8,2.8])e(oe(.3,4.3,.3,11186874),-58+o,2.15,70+a),t(-58+o,70+a,.4,4.3,.4);for(const o of[-1.7,1.7]){n(-58-2.4,70+o-.55,-58+2.4,70+o+.55,.06,14209734);for(const a of[-1.4,1.4])e(oe(.7,1.5,.5,12597547),-58+a,.85,70+o),t(-58+a,70+o,.8,1.6,.6)}e(oe(7,3,4.5,14999766),-58-10.5,1.5,70+.5),t(-58-10.5,70+.5,7,3.2,4.5),e(Ai("BARN FUEL",{width:2.4,height:.55,bg:"#c0392b"}),-58-10.5,3.15,70+2.78),e(oe(.5,3.6,.5,11186874),-58+6.8,1.8,70+2.5),e(Ai("FUEL  189.9",{width:1.9,height:.9,bg:"#20262e"}),-58+6.8,3,70+2.53),e(Ai("FUEL  189.9",{width:1.9,height:.9,bg:"#20262e"}),-58+6.8,3,70+2.47,Math.PI),t(-58+6.8,70+2.5,.6,3.8,.6)}function Py(i,t,e,n,s){n(48.5,-7.4,70,-8.6,-.036),n(58,-8.6,59.2,13,-.036);const r=new et(new ua(5.2,22),new un({color:4881812}));r.rotation.x=-Math.PI/2,r.position.set(64,-.02,14),i.add(r);const o=new et(new ma(5.2,5.7,22),Se(12169892));o.rotation.x=-Math.PI/2,o.position.set(64,.012,14),o.receiveShadow=!0,i.add(o);for(let u=0;u<7;u++){const d=s.range(0,Math.PI*2),f=oe(.08,s.range(.5,.9),.08,6123586);e(f,64+Math.cos(d)*s.range(4.6,5.4),.35,14+Math.sin(d)*s.range(4.6,5.4))}const a=60,c=-2;n(a-4.5,c-3.5,a+4.5,c+3.5,-.03,13213802);for(const u of[-2.2,2.2])e(oe(.14,2.2,1.6,4157322),a+u,1.1,c-1.8);e(oe(4.4,.14,.14,4157322),a,2.2,c-1.8);for(const u of[-1,1])e(oe(.04,.9,.04,3159098),a+u-.2,1.7,c-1.8),e(oe(.04,.9,.04,3159098),a+u+.2,1.7,c-1.8),e(oe(.5,.06,.24,12597547),a+u,1.22,c-1.8);t(a,c-1.8,4.6,2.3,.5);const l=oe(.7,.1,2.6,12597547);l.rotation.x=.55,e(l,a+1.6,.85,c+1.4),e(oe(.8,1.5,.8,4157322),a+1.6,.75,c+2.7),t(a+1.6,c+2,1,1.6,2.6),e(oe(.4,.5,.9,13216097),a-2.4,.62,c+1.8),e(oe(.1,.5,.1,3159098),a-2.4,.25,c+1.8);for(const[u,d,f]of[[56,-6.6,0],[66,-6.6,0],[60.5,8,Math.PI/2]]){const m=new Wt,_=oe(1.7,.09,.45,10129274);_.position.y=.48,m.add(_);const p=oe(1.7,.4,.08,10129274);p.position.set(0,.78,-.2),m.add(p);for(const g of[-.7,.7]){const v=oe(.08,.48,.4,5593696);v.position.set(g,.24,0),m.add(v)}e(m,u,0,d,f),t(u,d,1.8,.9,.6)}const h=[[52,20],[56,26],[70,24],[78,8],[80,-4],[62,-22],[52,-26],[78,-26]];for(const[u,d]of h)e(ta(s,s.range(.9,1.5)),u,0,d)}const se=6,he=34.5,Ue=-34,Ne=-46,ke=44,nn={front:he,back:Ue,west:Ne,east:ke},hi={front:78,back:-78,west:-90,east:88},ps=[],Mf=[],qs=se/2+1.2;function Ly(i){const t=i.root,e=i.rng.child("town"),n=i.colliders,s=()=>Se(qt.concrete),r=(M,A,b,E)=>{const P=(M+b)/2,D=(A+E)/2,y=new et(new It(Math.abs(b-M),.1,Math.abs(E-A)),s());y.position.set(P,-.045,D),y.receiveShadow=!0,t.add(y)},o=(M,A,b,E)=>{const P=Math.abs(b-M)>Math.abs(E-A)?"x":"z",D=Math.abs(P==="x"?b-M:E-A);for(let y=0;y<D;y+=4){const w=y/D,U=new et(new It(P==="x"?1.6:.12,.02,P==="x"?.12:1.6),Se(xt.trim));U.position.set(M+(b-M)*w,.012,A+(E-A)*w),t.add(U)}};r(Ne-se/2,he-se/2,ke+se/2,he+se/2),r(Ne-se/2,Ue-se/2,ke+se/2,Ue+se/2),r(Ne-se/2,Ue-se/2,Ne+se/2,he+se/2),r(ke-se/2,Ue-se/2,ke+se/2,he+se/2),o(Ne+4,he,ke-4,he),o(Ne+4,Ue,ke-4,Ue),o(Ne,Ue+4,Ne,he-4),o(ke,Ue+4,ke,he-4),r(-17.75,29.5,-11,he-se/2),r(9.65,29.5,14.65,he-se/2);const{front:a,back:c,west:l,east:h}=hi;r(l-se/2,a-se/2,h+se/2,a+se/2),r(l-se/2,c-se/2,h+se/2,c+se/2),r(l-se/2,c-se/2,l+se/2,a+se/2),r(h-se/2,c-se/2,h+se/2,a+se/2),o(l+4,a,h-4,a),o(l+4,c,h-4,c),o(l,c+4,l,a-4),o(h,c+4,h,a-4);for(const M of[Ne,ke])r(M-3,he+3,M+3,a-3),r(M-3,c+3,M+3,Ue-3),o(M,he+5,M,a-5),o(M,c+5,M,Ue-5);for(const M of[he,Ue])r(l+3,M-3,Ne-3,M+3),r(ke+3,M-3,h-3,M+3),o(l+5,M,Ne-5,M),o(ke+5,M,h-5,M);r(-10,-16,-1,-22.5),r(-8,-22.5,-3,Ue+se/2),r(-23,-22.5,-19,he-se/2),r(-23,-16,-10,-22.5);const u=(M,A,b,E)=>{const P=new et(new It(Math.max(.12,Math.abs(b-M)),.02,Math.max(.12,Math.abs(E-A))),Se(xt.trim));P.position.set((M+b)/2,.012,(A+E)/2),t.add(P)};u(-9.4,-16.4,-9.4,-21.2),u(-6.4,-16.4,-6.4,-21.2),u(-1.6,-16.4,-1.6,-21.2),u(-9.4,-16.4,-1.6,-16.4);const d=Ai("DELIVERIES",{width:2.4,height:.55,bg:"#a8402f"});d.position.set(-5.5,2.15,-15.95),d.rotation.y=Math.PI,t.add(d);for(const M of[-6.5,-4.5]){const A=new et(new It(.12,2.1,.12),Se(qt.metalDark));A.position.set(M,1.05,-15.95),A.castShadow=!0,t.add(A)}const f=(M,A,b,E)=>{const{group:P,size:D,door:y}=sy(e);P.position.set(A,0,b),P.rotation.y=E,t.add(P);const w=Math.abs(Math.sin(E))>.5,U=(w?D.d:D.w)/2+.1,N=(w?D.w:D.d)/2+.1;n.push({min:new I(A-U,0,b-N),max:new I(A+U,D.h+1.2,b+N),walkable:!1});const X=new lr().setFromAxisAngle(new I(0,1,0),E),Y=new I(0,0,D.d/2+1).applyQuaternion(X),H={x:A+Y.x,z:b+Y.z};Mf.push({hinge:y,rotY:E,at:H});const K=new et(new It(1.1,.06,2.6),s()),z=new I(0,0,D.d/2+1.6).applyQuaternion(X);K.position.set(A+z.x,-.02,b+z.z),K.rotation.y=E,K.receiveShadow=!0,t.add(K);const ut=D.w/2+2.3,dt=-(D.d/2+2.4),at=D.d/2-.6,Ot=at-dt,Yt=(Q,O,ct,nt)=>{const{group:_t}=ry(ct),ft=new I(Q,0,O).applyQuaternion(X);_t.position.set(A+ft.x,0,b+ft.z),_t.rotation.y=E+(nt?0:Math.PI/2),t.add(_t);const St=Math.abs(Math.sin(_t.rotation.y))<.5;n.push({min:new I(A+ft.x-(St?ct/2:.08),0,b+ft.z-(St?.08:ct/2)),max:new I(A+ft.x+(St?ct/2:.08),1.15,b+ft.z+(St?.08:ct/2)),walkable:!1})};Yt(-ut,(at+dt)/2,Ot,!1),Yt(ut,(at+dt)/2,Ot,!1),Yt(0,dt,ut*2,!0),ps.push({name:M,x:A,z:b,rotY:E,door:H})};f("1 Barn Road",-34,he+8.5,Math.PI),f("2 Barn Road",-8,he+8.5,Math.PI),f("3 Barn Road",18,he+8.5,Math.PI),f("4 Barn Road",38,he+8.5,Math.PI),f("1 Millet Street",Ne-8.5,8,Math.PI/2),f("2 Millet Street",Ne-8.5,-18,Math.PI/2),f("1 Sunset Avenue",ke+8.5,4,-Math.PI/2),f("2 Sunset Avenue",ke+8.5,-22,-Math.PI/2),f("5 Barn Road",-70,he+8.5,Math.PI),f("6 Barn Road",64,he+8.5,Math.PI),f("3 Millet Street",Ne-8.5,54,Math.PI/2),f("4 Millet Street",Ne-8.5,-52,Math.PI/2),f("3 Sunset Avenue",ke+8.5,52,-Math.PI/2),f("4 Sunset Avenue",ke+8.5,-54,-Math.PI/2),f("1 Kookaburra Drive",-24,c-8.5,0),f("2 Kookaburra Drive",20,c-8.5,0),f("3 Kookaburra Drive",-30,a+8.5,Math.PI),f("4 Kookaburra Drive",26,a+8.5,Math.PI);const m=(M,A,b,E)=>{const P=new et(new It(Math.max(1.2,Math.abs(b-M)),.07,Math.max(1.2,Math.abs(E-A))),s());P.position.set((M+b)/2,-.036,(A+E)/2),P.receiveShadow=!0,t.add(P)};for(const M of[{w:Ne,e:ke,n:Ue,f:he},{w:l,e:h,n:c,f:a}])for(const A of[qs,-qs])m(M.w-Math.abs(A),M.f+A-.6,M.e+Math.abs(A),M.f+A+.6),m(M.w-Math.abs(A),M.n-A-.6,M.e+Math.abs(A),M.n-A+.6),m(M.w+A-.6,M.n-Math.abs(A),M.w+A+.6,M.f+Math.abs(A)),m(M.e-A-.6,M.n-Math.abs(A),M.e-A+.6,M.f+Math.abs(A));const _=tf(),p=ef(),g=Se(qt.metalDark),v=(M,A,b)=>{const E=new Wt,P=new et(new It(.16,4.6,.16),g);P.position.y=2.3,P.castShadow=!0,E.add(P);const D=new et(new It(.12,.12,1.3),g);D.position.set(0,4.5,.62),E.add(D);const y=new et(new It(.3,.14,.62),_);y.position.set(0,4.38,1.1),E.add(y);const w=new et(new ua(2.6,14),p);w.rotation.x=-Math.PI/2,w.position.set(0,.02,1.1),E.add(w),E.position.set(M,0,A),E.rotation.y=b,t.add(E)};for(const[M,A,b]of[[-1,he+4.2,Math.PI],[-30,he-4.2,0],[22,he-4.2,0],[-1,Ue-4.2,0],[-30,Ue+4.2,Math.PI],[22,Ue+4.2,Math.PI],[Ne+4.2,12,-Math.PI/2],[Ne-4.2,-14,Math.PI/2],[ke-4.2,8,Math.PI/2],[ke+4.2,-18,-Math.PI/2],[-42,he+4.2,Math.PI],[40,he+4.2,Math.PI],[-42,Ue-4.2,0],[40,Ue-4.2,0],[-1,a-4.2,0],[-1,c+4.2,Math.PI],[l+4.2,-1,-Math.PI/2],[h-4.2,-1,Math.PI/2]])v(M,A,b);const x=[[-30,he-8],[8,he-8.5],[30,he-8],[Ne+8,20],[Ne+8,-8],[ke-8,16],[ke-8,-14],[-24,Ue+8],[12,Ue+8],[-62,20],[-60,-24],[56,24],[58,-30],[-20,60],[30,58],[-16,-56],[26,-58]];for(const[M,A]of x){const b=ta(e,e.range(.9,1.4));b.position.set(M,0,A),t.add(b)}Ey(i);for(const[M,A]of[[-120,40],[-135,-30],[125,60],[140,-20],[-60,120],[40,128],[-30,-125],[90,-120],[130,120],[-125,-115]]){const b=ta(e,e.range(1.1,1.7));b.position.set(M,i.groundHeight(M,A)-.06,A),t.add(b)}}class Iy{constructor(t){this.game=t,this.rng=t.rng.child("world"),this.scene=t.renderer.scene,this.root=new Wt,this.scene.add(this.root),this.colliders=[],this.interactables=[],this.buildings=[],this.enterable=[],this.currentBuilding=null,this.spots={},this.doors=new ny(t),this._grid=new Map,this.cellSize=5,this.weather={condition:"clear",wetness:0,temp:24,wind:.3},this._nightState=!1}generate(){this._ground(),this._shop(),this._dressing(),Ly(this),ps.forEach((t,e)=>{this.addInteractable({id:`house_${e}`,label:"hand over the delivery",pos:new I(t.door.x,1,t.door.z),action:"service",data:{op:"deliver",house:e,when:"at_house"},radius:2.2})}),this._rebuildSpatialHash(),this.game.bus.emit("world:generated",{world:this})}_ground(){const t=new be(400,400,100,100),e=t.attributes.position;for(let s=0;s<e.count;s++)e.setZ(s,this.groundHeight(e.getX(s),-e.getY(s)));t.computeVertexNormals();const n=new et(t,Se(qt.grass));n.rotation.x=-Math.PI/2,n.position.y=-.06,n.receiveShadow=!0,this.root.add(n)}_shop(){var n;const t=by(this.rng.child("shop"));this.report=t.report,t.group.position.set(0,0,0),this.root.add(t.group);for(const s of t.interactables||[])this.interactables.push(s);this.spots=t.spots||{};for(const s of t.colliders)this.colliders.push(s);(n=t.doorSpecs)!=null&&n.length&&(t.group.updateMatrixWorld(!0),this.doors.install(t.doorSpecs,t.group));const e={x:0,z:0,rotY:0,padY:0,shopId:"fastfood",built:t,lights:t.lights,interiorBounds:t.interiorBounds};this.buildings.push(e),this.enterable.push(e)}_dressing(){const t=this.rng.child("dressing"),e=[[-16.5,25],[-16.8,8],[-16.2,-2],[16.5,12],[16.8,-4],[15.8,24],[-6,32.5],[4,32.8],[12,32]];for(const[s,r]of e){const o=ta(t,t.range(.9,1.3));o.position.set(s,0,r),this.root.add(o)}const n=[{x:-9.7,z:24.8,rotY:0},{x:-2,z:24.8,rotY:0},{x:5.8,z:24.8,rotY:0},{x:5.3,z:13.2,rotY:Math.PI}];for(const s of n){const r=ga(t);r.position.set(s.x,0,s.z),r.rotation.y=s.rotY,this.root.add(r),this.colliders.push({min:new I(s.x-1,0,s.z-2.2),max:new I(s.x+1,1.5,s.z+2.2),walkable:!1})}}_rebuildSpatialHash(){this._grid.clear(),this.colliders.forEach((t,e)=>{const n=Math.floor(t.min.x/this.cellSize),s=Math.floor(t.max.x/this.cellSize),r=Math.floor(t.min.z/this.cellSize),o=Math.floor(t.max.z/this.cellSize);for(let a=n;a<=s;a++)for(let c=r;c<=o;c++){const l=a+","+c;this._grid.has(l)||this._grid.set(l,[]),this._grid.get(l).push(e)}})}query(t,e){const n=[],s=Math.floor((t.x-e)/this.cellSize),r=Math.floor((t.x+e)/this.cellSize),o=Math.floor((t.z-e)/this.cellSize),a=Math.floor((t.z+e)/this.cellSize),c=new Set;for(let l=s;l<=r;l++)for(let h=o;h<=a;h++){const u=this._grid.get(l+","+h);if(u)for(const d of u)c.has(d)||(c.add(d),n.push(this.colliders[d]))}return this.doors.collect(t,e,n),n}sightBlocked(t,e,{eye:n=1.15,backOff:s=.45}={}){const r=t.x,o=t.z,a=(t.y??0)+n;let c=e.x-r,l=e.z-o;const h=Math.hypot(c,l);if(h<.05)return!1;const u=Math.max(0,h-s);if(u<.05)return!1;c/=h,l/=h;const d=r+c*u/2,f=o+l*u/2;for(const m of this.query({x:d,z:f},u/2+1)){if(m.walkable||a<m.min.y||a>m.max.y||r>=m.min.x&&r<=m.max.x&&o>=m.min.z&&o<=m.max.z)continue;let _=0,p=u,g=!0;for(const[v,x,M,A]of[[r,c,m.min.x,m.max.x],[o,l,m.min.z,m.max.z]]){if(Math.abs(x)<1e-9){if(v<M||v>A){g=!1;break}continue}let b=(M-v)/x,E=(A-v)/x;if(b>E){const P=b;b=E,E=P}if(b>_&&(_=b),E<p&&(p=E),_>p){g=!1;break}}if(g)return!0}return!1}groundHeight(t,e){let n=0;const s=Math.hypot(t-72,e+14);s<13&&(n+=2.4*(.5+.5*Math.cos(Math.PI*s/13))**1.3);const r=Math.max(0,Math.abs(t)-100),o=Math.max(0,Math.abs(e)-92),a=Math.hypot(r,o);if(a>0){const c=Math.min(1,a/45),l=1.6+Math.sin(t*.041)*Math.cos(e*.053)+.6*Math.sin(t*.013+e*.017);n+=c*c*Math.max(0,l)*3.4}return n}addInteractable(t){return this.interactables.push(t),t}activeInteractables(){return this.interactables}get isIndoors(){return this.currentBuilding!==null}_updateOccupancy(){var n;const t=(n=this.game.player)==null?void 0:n.position;if(!t)return;let e=null;for(const s of this.enterable){const r=s.interiorBounds;if(r&&t.x>r.minX&&t.x<r.maxX&&t.z>r.minZ&&t.z<r.maxZ&&t.y>s.padY-1.5&&t.y<s.padY+r.maxY){e=s;break}}e!==this.currentBuilding&&(this.currentBuilding=e,this.game.bus.emit("world:occupancy",{building:e}))}update(t){var s;this._updateOccupancy(),this.doors.update(t);const e=this.game.clock;this.game.renderer.updateSky(e.dayFraction,(s=this.game.player)==null?void 0:s.position,e.dayOfYear,t);const n=this.game.renderer.nightFactor>.25;n!==this._nightState&&(this._nightState=n,_s().emissiveIntensity=n?.45:0,this.game.bus.emit("world:daynight",{night:n}))}}const Dy=.72;class Uy{constructor(t){this.game=t,this.target=null,this._label=null,this._fwd=new I(0,0,-1)}update(){var h,u,d,f,m,_;const t=this.game;if(t.mode!==$e.PLAY){this._setTarget(null);return}if(t.player.vehicle){this._setTarget({label:"get out",action:"vehicle_exit",pos:t.player.position}),t.input.wasPressed("interact")&&t.player.vehicle.dismount();return}const e=t.player.position,n=t.camera.active,s=n.position;n.getWorldDirection(this._fwd);const r=((h=t.shift)==null?void 0:h.station)||null;let o=null,a=1/0;const c=(p,g)=>{var U,N;const v=p.pos.x-e.x,x=p.pos.z-e.z,M=Math.hypot(v,x);if(M>=(p.radius||1.8))return;const A=p.pos.x-s.x,b=p.pos.y-s.y,E=p.pos.z-s.z,P=Math.hypot(A,b,E)||1,D=(A*this._fwd.x+b*this._fwd.y+E*this._fwd.z)/P,y=Math.acos(Math.min(1,Math.max(-1,D)));if(y>Dy)return;const w=y+M*.1;w>=a||(N=(U=t.world).sightBlocked)!=null&&N.call(U,e,p.pos,g)||(a=w,o=p)};for(const p of t.world.activeInteractables()){const g=(u=p.data)==null?void 0:u.zone;g&&(g.minZ!==void 0&&e.z<g.minZ||g.maxZ!==void 0&&e.z>g.maxZ||g.minX!==void 0&&e.x<g.minX||g.maxX!==void 0&&e.x>g.maxX)||p.action==="station"&&r||(d=p.data)!=null&&d.podOnly&&r!=="pod"||(f=p.data)!=null&&f.when&&!((m=t.shift)!=null&&m.available(p.data.when,p.data))||c(p,void 0)}const l=(_=t.world.doors)==null?void 0:_.nearest(e,2);l&&!r&&c(l,{backOff:.7}),this._setTarget(o),t.input.wasPressed("interact")&&this.activate()}_setTarget(t){const e=t?t.label:null;this.target===t&&this._label===e||(this.target=t,this._label=e,this.game.bus.emit("interaction:target",{label:e,interactable:t}))}activate(){this.target&&this.run(this.target.action,this.target.data||{})}run(t,e){var s;const n=this.game;switch(t){case"door":{e.door.toggle()||n.ui.toast("You are standing in the doorway.");return}case"station":return void n.shift.lockIn(e.station);case"pod":return void n.shift.podPress(e);case"counter":return void n.shift.counterPress(e);case"service":return void n.shift.servicePress(e);case"kitchen":return void n.shift.kitchenPress(e);case"vehicle":return void((s=n.deliveryCar)==null?void 0:s.mount());case"note":return void n.ui.toast(e.text);default:console.warn("[interaction] no handler for action:",t,e),n.ui.toast("Nothing happens.")}}}const ie={ORDER_OFFERED:"order:offered",ORDER_STARTED:"order:started",ORDER_STEP:"order:step",ORDER_BUILT:"order:built",ORDER_WRAPPED:"order:wrapped",ORDER_READY:"order:ready",ORDER_BAGGED:"order:bagged",ORDER_TRAY:"order:tray",ORDER_SERVED:"order:served",ORDER_LOST:"order:lost",COUNTER_TAKEN:"counter:order_taken",COUNTER_PAID:"counter:paid",DT_TAKEN:"dt:order_taken",DT_BAGGED:"dt:bagged",DLV_BAGGED:"dlv:bagged",COOK_STARTED:"cook:started",COOK_READY:"cook:ready",COOK_PULLED:"cook:pulled",COOK_BURNT:"cook:burnt",HOLD_EXPIRED:"hold:expired",RESTOCKED:"supply:restocked",ORDER_LANDED:"order:landed",SIDE_ADDED:"side:added",POD_REFUSED:"pod:refused"},zn={bun:{label:"toasted bun",station:"toaster",colour:13210159,shape:"heel"},ketchup:{label:"ketchup",station:"guns",colour:10236968,shape:"smear"},mustard:{label:"mustard",station:"guns",colour:13210159,shape:"smear"},mayo:{label:"mayo",station:"guns",colour:15261904,shape:"smear"},bbq:{label:"BBQ sauce",station:"guns",colour:5913126,shape:"smear"},pickle:{label:"pickles",station:"bins",colour:8030778,shape:"chips"},onion:{label:"onion",station:"bins",colour:15261904,shape:"chips"},lettuce:{label:"lettuce",station:"bins",colour:5208634,shape:"leaf"},tomato:{label:"tomato",station:"bins",colour:10236968,shape:"slice"},cheese:{label:"cheese",station:"bins",colour:13210159,shape:"flat"},patty:{label:"beef patty",station:"uhc",colour:7031349,shape:"disc"},fillet:{label:"chicken fillet",station:"uhc",colour:13216097,shape:"disc"}},Wi={classic:{label:"Barn Classic",value:7.5,sequence:["bun","ketchup","mustard","pickle","onion","patty"]},cheese:{label:"Cheese Barn",value:8,sequence:["bun","ketchup","pickle","cheese","patty"]},smokehouse:{label:"Smokehouse",value:9,sequence:["bun","bbq","onion","cheese","patty"]},garden_chook:{label:"Garden Chook",value:8.5,sequence:["bun","mayo","lettuce","tomato","fillet"]}},Hu=Object.keys(Wi),yl={double_patty:{label:"double beef",dupe:"patty",value:2.5},double_fillet:{label:"double chook",dupe:"fillet",value:2.5},extra_cheese:{label:"extra cheese",dupe:"cheese",value:1},extra_pickles:{label:"extra pickles",dupe:"pickle",value:.5},extra_onion:{label:"extra onion",dupe:"onion",value:.5},extra_sauce_bbq:{label:"extra BBQ",dupe:"bbq",value:.5}},Ny=Object.keys(yl),Xi={fries:{label:"fries",value:4,station:"fryer",shape:"carton",colour:14726213},cola:{label:"cola",value:3.5,station:"drinks",shape:"cup",colour:3877412},lemonade:{label:"lemonade",value:3.5,station:"drinks",shape:"cup",colour:14673106},orange:{label:"orange fizz",value:3.5,station:"drinks",shape:"cup",colour:14256683}},Ml=["cola","lemonade","orange"],Vo={patty:{station:"grill",batch:4,cookMin:24,pullWindowMin:20,graceMin:16},fillet:{station:"grill",batch:2,cookMin:28,pullWindowMin:20,graceMin:16},fries:{station:"fryer",batch:3,cookMin:18,pullWindowMin:12,graceMin:12}},ky={grill:2,fryer:2},sn={bins:{start:8,cap:10},buns:{start:8,cap:12},hold:{patty:{start:4,cap:6,expiryMin:45},fillet:{start:2,cap:4,expiryMin:45},fries:{start:3,cap:5,expiryMin:25}},boxes:{buns:["buns"],produce:["pickle","onion","lettuce","tomato","cheese"]}},Xe={intervalMin:7,intervalJitter:.35,maxLive:4,queueCapacity:3,secondItemChance:.25,sourceMix:{kiosk:.34,counter:.3,drivethru:.21},deliveryHouses:18,laneCapacity:3,modifierChance:.3,queuePatienceMin:12,dtOrderPatienceMin:10,servePatienceMin:26,dtServePatienceMin:22,deliveryDueMin:40,patienceJitter:.25,tipMax:.16,dineInChance:.45,friesChance:.55,drinkChance:.5},$i=[{skin:0,hair:0,height:1,build:1,hairStyle:"short",top:4877194,bottom:3884626},{skin:1,hair:2,height:.94,build:.92,hairStyle:"long",top:9067115,bottom:3027256},{skin:2,hair:4,height:1.05,build:1.12,hairStyle:"short",top:5929554,bottom:4866619},{skin:3,hair:1,height:.98,build:1,hairStyle:"bun",top:11569738,bottom:3884626},{skin:4,hair:6,height:1.02,build:.95,hairStyle:"short",top:7035530,bottom:3027256},{skin:5,hair:3,height:.9,build:.9,hairStyle:"long",top:9071434,bottom:5392702},{skin:1,hair:5,height:1.07,build:1.05,hairStyle:"short",top:4885123,bottom:3884626},{skin:3,hair:7,height:.96,build:1.08,hairStyle:"bun",top:10242626,bottom:3027256}];class Oy{constructor({emit:t,rng:e,now:n=0}){this.emit=t,this.rng=e,this.now=n,this.orders=new Map,this._nextId=11,this._nextOfferAt=null,this.stats={offered:0,served:0,balked:0,bySource:{},takings:0,tips:0,lost:0,lostValue:0}}_fuse(t,e){return t+e*(1+this.rng.range(-.25,Xe.patienceJitter))}live(){return[...this.orders.values()].filter(t=>t.state!=="served"&&t.state!=="lost"&&t.state!=="queued"&&t.state!=="ordering"&&t.state!=="driveup").sort((t,e)=>t.id-e.id)}carQueue(){return[...this.orders.values()].filter(t=>t.state==="driveup").sort((t,e)=>t.id-e.id)}all(){return[...this.orders.values()].sort((t,e)=>t.id-e.id)}counterQueue(){return[...this.orders.values()].filter(t=>t.state==="queued").sort((t,e)=>t.id-e.id)}ordering(){return[...this.orders.values()].find(t=>t.state==="ordering")||null}active(){return this.live().find(t=>t.state==="active"||t.state==="building"||t.state==="built"||t.state==="wrapped")||null}ready(){return this.live().filter(t=>t.state==="ready")}readyFor(t){return this.ready().filter(e=>e.service===t&&e.source!=="drivethru")}bagged(){return this.live().filter(t=>t.state==="bagged")}landed(){return this.live().filter(t=>t.state==="landed")}needingSide(t){return this.live().find(e=>{var n;return(n=e.sides)==null?void 0:n.some(s=>s.id===t&&!s.done)})||null}nextSideWanted(t=null){var e;for(const n of this.live()){const s=(e=n.sides)==null?void 0:e.find(r=>!r.done&&(t===null||Xi[r.id].station===t));if(s)return{order:n,side:s}}return null}addSide(t,e,n="player"){const s=this.needingSide(t);if(!s)return{ok:!1,reason:"nobody_wants"};const r=s.sides.find(a=>a.id===t&&!a.done);r.done=!0;const o=s.sides.filter(a=>!a.done).map(a=>a.id);return this.emit(ie.SIDE_ADDED,{id:s.id,side:t,remaining:o,by:n}),s.state==="landed"&&o.length===0&&(s.state="ready",s.readyAt=e,this.emit(ie.ORDER_READY,{id:s.id})),{ok:!0,id:s.id,remaining:o}}carriedBy(t){return this.live().find(e=>e.state==="carried"&&e.carrier===t)||null}get(t){return this.orders.get(t)||null}offer(t){const e=this.rng.float(),n=Xe.sourceMix,s=e<n.kiosk?"kiosk":e<n.kiosk+n.counter?"counter":e<n.kiosk+n.counter+n.drivethru?"drivethru":"delivery";if(s==="counter"&&this.counterQueue().length>=Xe.queueCapacity)return this.stats.balked+=1,null;if(s==="drivethru"&&this.carQueue().length>=Xe.laneCapacity)return this.stats.balked+=1,null;if((s==="kiosk"||s==="delivery")&&this.live().length>=Xe.maxLive)return this.stats.balked+=1,null;const r=[this.rng.pick(Hu)];this.rng.chance(Xe.secondItemChance)&&r.push(this.rng.pick(Hu));const o=r.map(d=>{if(!this.rng.chance(Xe.modifierChance))return null;const f=Ny.filter(m=>Wi[d].sequence.includes(yl[m].dupe));return f.length?this.rng.pick(f):null}),a=[],c=[];let l=0;r.forEach((d,f)=>{const m=[...Wi[d].sequence],_=o[f]?yl[o[f]]:null;if(_){const p=m.indexOf(_.dupe);m.splice(p+1,0,_.dupe)}a.push(...m),c.push(Wi[d].label+(_?` +${_.label}`:"")),l+=Wi[d].value+((_==null?void 0:_.value)??0)});const h=[];this.rng.chance(Xe.friesChance)&&h.push({id:"fries",done:!1}),this.rng.chance(Xe.drinkChance)&&h.push({id:Ml[this.rng.int(0,Ml.length-1)],done:!1});for(const d of h)l+=Xi[d.id].value;const u={id:this._nextId++,source:s,items:r,mods:o,itemLabels:c,sides:h,value:l,sequence:a,step:0,state:s==="counter"?"queued":s==="drivethru"?"driveup":"active",house:s==="delivery"?this.rng.int(0,Xe.deliveryHouses-1):null,look:this.rng.int(0,7),service:s==="drivethru"?"takeaway":this.rng.chance(Xe.dineInChance)?"dinein":"takeaway",carrier:null,offeredAt:t,takenAt:null,takenBy:null,servedBy:null,baggedBy:null,builtAt:null,wrappedAt:null,readyAt:null,baggedAt:null,carriedAt:null,servedAt:null,orderBy:null,serveBy:null,dueBy:null,lostAt:null,tip:0};return s==="counter"?u.orderBy=this._fuse(t,Xe.queuePatienceMin):s==="drivethru"?u.orderBy=this._fuse(t,Xe.dtOrderPatienceMin):s==="kiosk"?u.serveBy=this._fuse(t,Xe.servePatienceMin):u.dueBy=this._fuse(t,Xe.deliveryDueMin),this.orders.set(u.id,u),this.stats.offered+=1,this.stats.bySource[s]=(this.stats.bySource[s]||0)+1,this.emit(ie.ORDER_OFFERED,{id:u.id,source:s,items:[...r],sequence:[...a]}),u}takeOrder(t,e="player"){if(this.ordering())return{ok:!1,reason:"already_taking"};const n=this.counterQueue()[0];return n?(n.state="ordering",n.takenBy=e,this.emit(ie.COUNTER_TAKEN,{id:n.id,items:[...n.items],total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_queued"}}takePayment(t,e="player"){const n=this.ordering();return n?(n.state="active",n.takenAt=t,n.orderBy=null,n.serveBy=this._fuse(t,Xe.servePatienceMin),this.emit(ie.COUNTER_PAID,{id:n.id,total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_pay"}}serve(t,e,n="player",s=["ready"]){return!t||!s.includes(t.state)?!1:(t.state="served",t.servedAt=e,t.servedBy=n,t.tip=this._tipFor(t,e),this.stats.served+=1,this.stats.takings=+(this.stats.takings+t.value).toFixed(2),this.stats.tips=+(this.stats.tips+t.tip).toFixed(2),this.emit(ie.ORDER_SERVED,{id:t.id,ageMin:+(e-(t.takenAt??t.offeredAt)).toFixed(2),value:t.value,tip:t.tip,by:n}),!0)}_tipFor(t,e){let n;if(t.source==="delivery"){const s=t.dueBy-t.offeredAt||1;n=Math.max(0,Math.min(1,(t.dueBy-e)/(s*.5)))}else if(t.serveBy==null)n=1;else{const s=t.takenAt??t.offeredAt;n=Math.max(0,Math.min(1,(t.serveBy-e)/(t.serveBy-s||1)))}return+(t.value*Xe.tipMax*n).toFixed(2)}patienceFrac(t,e){const n=r=>Math.max(0,Math.min(1,r));if(!t||t.state==="served"||t.state==="lost"||t.state==="ordering")return null;if(t.source==="delivery")return{phase:"due",frac:n((t.dueBy-e)/(t.dueBy-t.offeredAt||1))};if(t.state==="queued"||t.state==="driveup")return{phase:"queue",frac:n((t.orderBy-e)/(t.orderBy-t.offeredAt||1))};if(t.serveBy==null)return null;const s=t.takenAt??t.offeredAt;return{phase:"serve",frac:n((t.serveBy-e)/(t.serveBy-s||1))}}_lose(t,e,n){t.state="lost",t.lostAt=e,t.carrier=null,this.stats.lost+=1,this.stats.lostValue=+(this.stats.lostValue+t.value).toFixed(2),this.emit(ie.ORDER_LOST,{id:t.id,source:t.source,reason:n,value:t.value})}bagOrder(t,e="player"){const n=this.readyFor("takeaway")[0];return n?(n.state="bagged",n.baggedAt=t,n.baggedBy=e,this.emit(ie.ORDER_BAGGED,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_bag"}}collect(t,e,n="customer"){const s=this.orders.get(t);return!s||s.state!=="bagged"?{ok:!1,reason:"not_bagged"}:(this.serve(s,e,s.baggedBy||n,["bagged"]),{ok:!0,id:s.id})}trayUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.readyFor("dinein")[0];return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(ie.ORDER_TRAY,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_tray"}}deliver(t,e="player"){const n=this.carriedBy(e);return n?(this.serve(n,t,e,["carried"]),{ok:!0,id:n.id}):{ok:!1,reason:"not_carrying"}}dtTakeOrder(t,e="player"){const n=this.carQueue()[0];return n?(n.state="active",n.takenAt=t,n.takenBy=e,n.orderBy=null,n.serveBy=this._fuse(t,Xe.dtServePatienceMin),this.emit(ie.DT_TAKEN,{id:n.id,items:[...n.items],total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"no_car_waiting"}}dtBagUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.ready().find(s=>s.source==="drivethru");return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(ie.DT_BAGGED,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_for_the_window"}}dlvBagUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.ready().find(s=>s.source==="delivery");return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(ie.DLV_BAGGED,{id:n.id,house:n.house,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_run"}}_interval(){const t=1+this.rng.range(-.35,Xe.intervalJitter);return Xe.intervalMin*t}tick(t){this.now=t,this._nextOfferAt===null&&(this._nextOfferAt=t+this._interval());let e=0;for(;t>=this._nextOfferAt&&e++<16;)this.offer(this._nextOfferAt),this._nextOfferAt+=this._interval();for(const n of this.orders.values())n.state==="served"||n.state==="lost"||n.source==="delivery"||((n.state==="queued"||n.state==="driveup")&&t>n.orderBy?this._lose(n,t,"gave_up_waiting"):n.serveBy!=null&&n.state!=="ordering"&&n.state!=="queued"&&n.state!=="driveup"&&t>n.serveBy&&this._lose(n,t,"too_slow"));for(const n of this.orders.values())n.state==="served"&&t-n.servedAt>10?this.orders.delete(n.id):n.state==="lost"&&t-n.lostAt>10&&this.orders.delete(n.id)}serialize(){return{nextId:this._nextId,nextOfferAt:this._nextOfferAt,stats:{...this.stats,bySource:{...this.stats.bySource}},orders:[...this.orders.values()]}}load(t){var e;t&&(this._nextId=t.nextId,this._nextOfferAt=t.nextOfferAt??null,this.stats={...t.stats,bySource:{...((e=t.stats)==null?void 0:e.bySource)||{}}},this.orders=new Map(t.orders.map(n=>[n.id,{...n}])))}}const ze={NO_ORDER:"no_order",NOT_NEXT:"not_next",NOT_AT_UHC:"not_at_uhc",ALREADY_BUILT:"already_built",NOT_BUILT:"not_built",NOT_WRAPPED:"not_wrapped",OUT_OF_STOCK:"out_of_stock"};class zy{constructor({queue:t,supply:e,emit:n}){this.queue=t,this.supply=e,this.emit=n}nextToken(){const t=this.queue.active();return!t||t.step>=t.sequence.length?null:t.sequence[t.step]}_refuse(t,e=null){return this.emit(ie.POD_REFUSED,{reason:t,token:e,next:this.nextToken()}),{ok:!1,reason:t}}addToken(t,e,n="player"){var a;const s=this.queue.active();if(!s)return this._refuse(ze.NO_ORDER,t);if(s.state==="built"||s.state==="wrapped")return this._refuse(ze.ALREADY_BUILT,t);const r=s.sequence[s.step];if(t!==r)return this._refuse(ze.NOT_NEXT,t);const o=(a=zn[t])==null?void 0:a.station;return o==="toaster"&&!this.supply.takeBun().ok?this._refuse(ze.OUT_OF_STOCK,t):o==="bins"&&!this.supply.takeBin(t).ok?this._refuse(ze.OUT_OF_STOCK,t):o==="uhc"&&!this.supply.takeHold(t).ok?this._refuse(ze.OUT_OF_STOCK,t):(s.step+=1,s.state==="active"&&(s.state="building",this.emit(ie.ORDER_STARTED,{id:s.id})),this.emit(ie.ORDER_STEP,{id:s.id,added:t,next:s.sequence[s.step]??null,step:s.step}),s.step>=s.sequence.length&&(s.state="built",s.builtAt=e,this.emit(ie.ORDER_BUILT,{id:s.id})),{ok:!0,added:t})}pullFromUHC(t,e="player"){var s;const n=this.nextToken();if(n===null){const r=this.queue.active();return this._refuse(r?ze.ALREADY_BUILT:ze.NO_ORDER)}return((s=zn[n])==null?void 0:s.station)!=="uhc"?this._refuse(ze.NOT_AT_UHC):this.addToken(n,t,e)}wrap(t,e="player"){const n=this.queue.active();return n?n.state!=="built"?this._refuse(n.state==="wrapped"?ze.ALREADY_BUILT:ze.NOT_BUILT):(n.state="wrapped",n.wrappedAt=t,this.emit(ie.ORDER_WRAPPED,{id:n.id,by:e}),{ok:!0}):this._refuse(ze.NO_ORDER)}send(t,e="player"){const n=this.queue.active();if(!n)return this._refuse(ze.NO_ORDER);if(n.state!=="wrapped")return this._refuse(ze.NOT_WRAPPED);const s=(n.sides||[]).filter(r=>!r.done).map(r=>r.id);return s.length?(n.state="landed",this.emit(ie.ORDER_LANDED,{id:n.id,needs:s})):(n.state="ready",n.readyAt=t,this.emit(ie.ORDER_READY,{id:n.id})),{ok:!0}}}class Fy{constructor({emit:t,supply:e}){this.emit=t,this.supply=e,this.cooks=[],this._nextId=1,this.stats={started:0,pulled:0,burnt:0}}busySlots(t){return this.cooks.filter(e=>e.station===t).length}freeSlots(t){return Math.max(0,(ky[t]??1)-this.busySlots(t))}batchOf(t){return this.cooks.find(e=>e.item===t)||null}readyBatch(t){return this.cooks.find(e=>e.item===t&&e.state==="ready")||null}start(t,e,n="player"){const s=Vo[t];if(!s)return{ok:!1,reason:"not_cookable"};if(s.station==="grill"&&this.batchOf(t))return{ok:!1,reason:"already_on"};if(this.freeSlots(s.station)<=0)return{ok:!1,reason:"station_full"};const r=e+s.cookMin,o={id:this._nextId++,station:s.station,item:t,actor:n,batch:s.batch,startedAt:e,readyAt:r,burnsAt:r+s.pullWindowMin+s.graceMin,state:"cooking"};return this.cooks.push(o),this.stats.started+=1,this.emit(ie.COOK_STARTED,{station:s.station,item:t,readyAt:r,burnsAt:o.burnsAt}),{ok:!0}}pull(t,e,n="player"){const s=this.readyBatch(t)||this.batchOf(t);if(!s)return{ok:!1,reason:"nothing_on"};if(s.state!=="ready")return{ok:!1,reason:"not_cooked"};this.cooks.splice(this.cooks.indexOf(s),1),this.stats.pulled+=1;const r=this.supply.deposit(t,s.batch,e);return this.emit(ie.COOK_PULLED,{station:s.station,item:t,added:r,by:n}),{ok:!0,added:r}}tick(t){for(const e of this.cooks)e.state==="cooking"&&t>=e.readyAt&&(e.state="ready",this.emit(ie.COOK_READY,{station:e.station,item:e.item}));for(let e=this.cooks.length-1;e>=0;e--){const n=this.cooks[e];t>=n.burnsAt&&(this.cooks.splice(e,1),this.stats.burnt+=1,this.emit(ie.COOK_BURNT,{station:n.station,item:n.item}))}}serialize(){return{cooks:this.cooks.map(t=>({...t})),nextId:this._nextId,stats:{...this.stats}}}load(t){t&&(this.cooks=(t.cooks||[]).map(e=>({...e})),this._nextId=t.nextId||1,this.stats={started:0,pulled:0,burnt:0,...t.stats||{}})}}class By{constructor({emit:t}){this.emit=t,this.bins={};for(const e of sn.boxes.produce)this.bins[e]=sn.bins.start;this.buns=sn.buns.start,this.hold={};for(const[e,n]of Object.entries(sn.hold))this.hold[e]=Array.from({length:n.start},(s,r)=>({expiresAt:n.expiryMin*(.6+.1*r)}));this.hands={},this.stats={expired:0,overflowed:0,restocks:0}}held(t){return this.hands[t]||null}holdCount(t){return(this.hold[t]||[]).length}binCount(t){return this.bins[t]??1/0}boxNeeded(t){return t==="buns"?this.buns<sn.buns.cap:sn.boxes.produce.some(e=>this.bins[e]<sn.bins.cap)}takeBun(){return this.buns<=0?{ok:!1}:(this.buns-=1,{ok:!0})}takeBin(t){return t in this.bins?this.bins[t]<=0?{ok:!1}:(this.bins[t]-=1,{ok:!0}):{ok:!0}}takeHold(t){const e=this.hold[t];return!e||!e.length?{ok:!1}:(e.shift(),{ok:!0})}deposit(t,e,n){const s=sn.hold[t],r=this.hold[t];let o=0;for(let a=0;a<e;a++){if(r.length>=s.cap){this.stats.overflowed+=1;continue}r.push({expiresAt:n+s.expiryMin}),o+=1}return o}giveSide(t,e){return this.hands[t]?{ok:!1,reason:"hands_full"}:(this.hands[t]={type:"side",id:e},{ok:!0})}takeBox(t,e){return sn.boxes[t]?this.hands[e]?{ok:!1,reason:"hands_full"}:this.boxNeeded(t)?(this.hands[e]={type:"box",box:t},{ok:!0}):{ok:!1,reason:"not_needed"}:{ok:!1,reason:"no_such_box"}}restock(t){const e=this.hands[t];if(!e||e.type!=="box")return{ok:!1,reason:"nothing_held"};if(e.box==="buns")this.buns=sn.buns.cap;else for(const n of sn.boxes.produce)this.bins[n]=sn.bins.cap;return this.hands[t]=null,this.stats.restocks+=1,this.emit(ie.RESTOCKED,{box:e.box,by:t}),{ok:!0,box:e.box}}dropHeld(t){return this.hands[t]?(this.hands[t]=null,{ok:!0}):{ok:!1,reason:"nothing_held"}}tick(t){for(const[e,n]of Object.entries(this.hold))for(;n.length&&t>=n[0].expiresAt;)n.shift(),this.stats.expired+=1,this.emit(ie.HOLD_EXPIRED,{item:e})}serialize(){return{bins:{...this.bins},buns:this.buns,hold:Object.fromEntries(Object.entries(this.hold).map(([t,e])=>[t,e.map(n=>({...n}))])),hands:Object.fromEntries(Object.entries(this.hands).filter(([,t])=>t).map(([t,e])=>[t,{...e}])),stats:{...this.stats}}}load(t){if(t){if(this.bins={...this.bins,...t.bins||{}},this.buns=t.buns??this.buns,t.hold)for(const[e,n]of Object.entries(t.hold))this.hold[e]=(n||[]).map(s=>({...s}));this.hands={};for(const[e,n]of Object.entries(t.hands||{}))this.hands[e]={...n};this.stats={expired:0,overflowed:0,restocks:0,...t.stats||{}}}}}const Ys=class Ys{constructor({rng:t,bus:e=null}){this.bus=e,this.minute=0,this.log=[],this.logSeq=0,this.rev=0,this.netRole="solo";const n=(s,r)=>this._emit(s,r);this.orders=new Oy({emit:n,rng:t.child("orders")}),this.supply=new By({emit:n}),this.kitchen=new Fy({emit:n,supply:this.supply}),this.pod=new zy({queue:this.orders,supply:this.supply,emit:n})}_emit(t,e={}){this.logSeq+=1,this.rev+=1,this.log.push({type:t,payload:e,minute:+this.minute.toFixed(3),seq:this.logSeq}),this.log.length>600&&this.log.shift(),this.bus&&this.bus.emit(t,e)}tick(t){this.netRole!=="guest"&&(t<=0||(this.minute+=t,this.orders.tick(this.minute),this.kitchen.tick(this.minute),this.supply.tick(this.minute)))}addToken(t,e="player"){return this.pod.addToken(t,this.minute,e)}pullFromUHC(t="player"){return this.pod.pullFromUHC(this.minute,t)}wrap(t="player"){return this.pod.wrap(this.minute,t)}send(t="player"){return this.pod.send(this.minute,t)}takeOrder(t="player"){return this.orders.takeOrder(this.minute,t)}takePayment(t="player"){return this.orders.takePayment(this.minute,t)}bagOrder(t="player"){return this.orders.bagOrder(this.minute,t)}_handsFull(t){return this.supply.held(t)?{ok:!1,reason:"hands_full"}:null}trayUp(t="player"){return this._handsFull(t)||this.orders.trayUp(this.minute,t)}deliver(t="player"){return this.orders.deliver(this.minute,t)}collect(t,e="customer"){return this.orders.collect(t,this.minute,e)}dtTakeOrder(t="player"){return this.orders.dtTakeOrder(this.minute,t)}dtBagUp(t="player"){return this._handsFull(t)||this.orders.dtBagUp(this.minute,t)}dlvBagUp(t="player"){return this._handsFull(t)||this.orders.dlvBagUp(this.minute,t)}grillOn(t,e="player"){return t!=="patty"&&t!=="fillet"?{ok:!1,reason:"not_cookable"}:this.kitchen.start(t,this.minute,e)}grillPull(t,e="player"){return this.kitchen.pull(t,this.minute,e)}fryOn(t="player"){return this.kitchen.start("fries",this.minute,t)}fryPull(t="player"){return this.kitchen.pull("fries",this.minute,t)}takeFries(t="player"){return this.supply.held(t)?{ok:!1,reason:"hands_full"}:(this.supply.holdCount("fries")===0&&this.kitchen.readyBatch("fries")&&this.kitchen.pull("fries",this.minute,t),this.supply.takeHold("fries").ok?this.supply.giveSide(t,"fries"):{ok:!1,reason:"out_of_stock"})}fillDrink(t,e="player"){return Ml.includes(t)?this.supply.giveSide(e,t):{ok:!1,reason:"no_such_drink"}}addSide(t="player"){const e=this.supply.held(t);if(!e||e.type!=="side")return{ok:!1,reason:"nothing_held"};const n=this.orders.addSide(e.id,this.minute,t);return n.ok&&this.supply.dropHeld(t),n}dropHeld(t="player"){return this.supply.dropHeld(t)}takeBox(t,e="player"){return this.supply.takeBox(t,e)}restock(t="player"){return this.supply.restock(t)}abandonActor(t){for(const e of this.orders.orders.values())e.state==="carried"&&e.carrier===t&&(e.state="ready",e.carrier=null,e.carriedAt=null,this._emit("order:dropped",{id:e.id,by:t}));this.supply.dropHeld(t)}applyNet(t,e=[],n="guest"){if(!Object.hasOwn(Ys.NET_COMMANDS,t))return{ok:!1,reason:"unknown_command"};const s=Ys.NET_COMMANDS[t];return!Array.isArray(e)||e.length<s.n?{ok:!1,reason:"bad_args"}:Ys.prototype[s.m].apply(this,[...e.slice(0,s.n),n])}snapshot(){var t;return{minute:this.minute,board:this.orders.live(),queue:this.orders.counterQueue(),ordering:this.orders.ordering(),activeId:((t=this.orders.active())==null?void 0:t.id)??null,nextToken:this.pod.nextToken(),readyCount:this.orders.ready().length,supply:{bins:{...this.supply.bins},buns:this.supply.buns,hold:Object.fromEntries(Object.keys(this.supply.hold).map(e=>[e,this.supply.holdCount(e)]))},hands:this.supply.held("player"),cooks:this.kitchen.cooks.map(e=>({...e})),stats:{...this.orders.stats}}}serialize(){return{minute:this.minute,orders:this.orders.serialize(),kitchen:this.kitchen.serialize(),supply:this.supply.serialize()}}load(t){t&&(this.minute=t.minute||0,this.orders.load(t.orders),this.kitchen.load(t.kitchen),this.supply.load(t.supply))}};ch(Ys,"NET_COMMANDS",{token:{m:"addToken",n:1},uhc:{m:"pullFromUHC",n:0},wrap:{m:"wrap",n:0},send:{m:"send",n:0},take_order:{m:"takeOrder",n:0},take_payment:{m:"takePayment",n:0},bag:{m:"bagOrder",n:0},tray:{m:"trayUp",n:0},deliver:{m:"deliver",n:0},collect:{m:"collect",n:1},dt_take:{m:"dtTakeOrder",n:0},dt_bag:{m:"dtBagUp",n:0},dlv_bag:{m:"dlvBagUp",n:0},grill_on:{m:"grillOn",n:1},grill_pull:{m:"grillPull",n:1},fry_on:{m:"fryOn",n:0},fry_pull:{m:"fryPull",n:0},take_fries:{m:"takeFries",n:0},fill_drink:{m:"fillDrink",n:1},add_side:{m:"addSide",n:0},drop_held:{m:"dropHeld",n:0},take_box:{m:"takeBox",n:1},restock:{m:"restock",n:0}});let Sl=Ys;const zs=560,Gu=340,hc=68,uc=4,Vu="#f1ece1",Eo="#9aa3ad",To="#c9a961",Ao="#0d1116",Hy="#141a21",Gy="#1d2733",dc="#7fb069",Vy="#cf5b45";class Wy{constructor(t,e,n,s){this.scene=t,this.canvas=typeof document<"u"?document.createElement("canvas"):null,this.canvas&&(this.canvas.width=zs,this.canvas.height=Gu,this.ctx=this.canvas.getContext("2d"),this.tex=new Qn(this.canvas),this.tex.colorSpace=qe,this.tex.anisotropy=4,this.mesh=new et(new be(s.w,s.h),new Ye({map:this.tex})),this.mesh.position.set(e.x,e.y,e.z),this.mesh.rotation.x=n,t.add(this.mesh),this._sig=null,this.paint([],null,null,{},{},0))}paint(t,e,n,s,r,o){if(!this.ctx)return;const a=t.slice(0,uc),c=u=>u.takenAt??u.offeredAt,l=`${e}|${n}|`+a.map(u=>`${u.id}:${u.state}:${u.step}:${u.source}:${(u.sides||[]).filter(d=>d.done).length}:${Math.floor(o-c(u))}`).join(",");if(l===this._sig)return;this._sig=l;const h=this.ctx;if(h.fillStyle=Ao,h.fillRect(0,0,zs,Gu),h.fillStyle=To,h.font="bold 32px Segoe UI, system-ui, sans-serif",h.fillText("ORDERS",16,36),t.length>uc&&(h.fillStyle=Eo,h.font="22px Segoe UI, system-ui, sans-serif",h.textAlign="right",h.fillText(`+${t.length-uc} more`,zs-16,34),h.textAlign="left"),!a.length){h.fillStyle=Eo,h.font="28px Segoe UI, system-ui, sans-serif",h.fillText("Nothing on.",16,100),this.tex.needsUpdate=!0;return}a.forEach((u,d)=>{var b;const f=48+d*hc,m=u.id===e;h.fillStyle=m?Gy:Hy,h.fillRect(10,f,zs-20,hc-8),m&&(h.fillStyle=To,h.fillRect(10,f,6,hc-8)),h.fillStyle=m?Vu:Eo,h.font="bold 31px Segoe UI, system-ui, sans-serif",h.fillText(`#${u.id}`,22,f+30);let _=92;u.source==="drivethru"?(h.fillStyle=Vy,h.fillRect(_,f+8,50,26),h.fillStyle=Ao,h.font="bold 20px Segoe UI, system-ui, sans-serif",h.fillText("DT",_+12,f+28),_+=60):u.source==="delivery"?(h.fillStyle="#4a7dc9",h.fillRect(_,f+8,52,26),h.fillStyle=Ao,h.font="bold 20px Segoe UI, system-ui, sans-serif",h.fillText("DLV",_+8,f+28),_+=62):u.service==="dinein"&&(h.fillStyle=dc,h.fillRect(_,f+8,62,26),h.fillStyle=Ao,h.font="bold 20px Segoe UI, system-ui, sans-serif",h.fillText("DINE",_+8,f+28),_+=72),h.fillStyle=m?Vu:Eo,h.font="25px Segoe UI, system-ui, sans-serif";const p=(u.sides||[]).map(E=>{var P;return" · "+(((P=Xi[E.id])==null?void 0:P.label)||E.id)}).join(""),g=(u.source==="drivethru"?24:28)-p.length,v=(u.itemLabels||(u.items||[]).map(E=>{var P;return((P=r[E])==null?void 0:P.label)||E})).join(", ");if(h.fillText(v.slice(0,Math.max(8,g))+p,_,f+30),h.font="23px Segoe UI, system-ui, sans-serif",m){h.fillStyle=dc;const E=u.state==="built"?"wrap it":u.state==="wrapped"?"send it down":n?`next: ${((b=s[n])==null?void 0:b.label)||n}`:"…";h.fillText(E,92,f+57)}else{h.fillStyle=u.state==="ready"||u.state==="bagged"||u.state==="carried"?To:u.state==="landed"?"#d9a441":"#5d6570";const E=Math.floor(o-c(u)),P=u.state==="landed"?(u.sides||[]).filter(D=>!D.done).map(D=>{var y;return((y=Xi[D.id])==null?void 0:y.label)||D.id}).join(" + "):null;h.fillText(u.state==="landed"?`needs ${P}`:u.state==="ready"?"at the landing":u.state==="bagged"?"on the counter":u.state==="carried"?u.source==="drivethru"?"going to the window":u.source==="delivery"?"out for delivery":"going to the table":E<1?"just in":`waiting ${E}m`,92,f+57)}const x=(u.sequence||[]).length||1,M=u.state==="ready"||u.state==="wrapped"||u.state==="built"||u.state==="bagged"||u.state==="carried"||u.state==="landed",A=M?1:Math.min(1,(u.step||0)/x);h.fillStyle="#2a333d",h.fillRect(zs-104,f+20,84,10),h.fillStyle=M&&u.state!=="built"?To:dc,h.fillRect(zs-104,f+20,84*A,10)}),this.tex.needsUpdate=!0}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.material.dispose(),this.mesh=null)}}const wl="#f1ece1",ia="#9aa3ad",Wo="#c9a961",Sf="#0d1116",fc="#7fb069";function wf(i,t,e,n,s){const r=document.createElement("canvas");r.width=n,r.height=s;const o=new Qn(r);o.colorSpace=qe,o.anisotropy=4;const a=new et(new be(e.w,e.h),new Ye({map:o}));return a.position.set(t.x,t.y,t.z),a.rotation.y=t.rotY||0,i.add(a),{canvas:r,tex:o,mesh:a,ctx:r.getContext("2d")}}class Xy{constructor(t,e){typeof document>"u"||(this.face=wf(t,e,{w:e.w,h:e.h},320,235),this._sig=null)}paint(t,e,n,s,r,o=null){if(!this.face)return;const a=n&&s-n.atMin<2,c=t?`t${t.id}:${(t.itemLabels||t.items).join("+")}`:a?`p${n.id}`:`q${e}:${o?`${o.takings}:${o.tips}:${o.lostValue}`:""}`;if(c===this._sig)return;this._sig=c;const l=this.face.ctx,h=320,u=235;if(l.fillStyle=Sf,l.fillRect(0,0,h,u),l.fillStyle=Wo,l.font="bold 26px Segoe UI, system-ui, sans-serif",l.fillText("TILL",14,32),t){l.fillStyle=wl,l.font="bold 28px Segoe UI, system-ui, sans-serif",l.fillText(`#${t.id}`,240,32),l.font="24px Segoe UI, system-ui, sans-serif";let d=70;t.items.forEach((f,m)=>{var p;const _=r[f];l.fillStyle=wl,l.fillText((((p=t.itemLabels)==null?void 0:p[m])||(_==null?void 0:_.label)||f).slice(0,24),14,d),d+=34}),l.strokeStyle="#2a333d",l.beginPath(),l.moveTo(14,d-12),l.lineTo(h-14,d-12),l.stroke(),l.fillStyle=Wo,l.font="bold 28px Segoe UI, system-ui, sans-serif",l.fillText("TOTAL",14,d+18),l.textAlign="right",l.fillText(`$${t.value.toFixed(2)}`,h-14,d+18),l.textAlign="left",l.fillStyle=fc,l.font="24px Segoe UI, system-ui, sans-serif",l.fillText("take payment",14,u-14)}else a?(l.fillStyle=fc,l.font="bold 42px Segoe UI, system-ui, sans-serif",l.fillText("PAID",14,104),l.fillText(`$${n.total.toFixed(2)}`,14,140),l.fillStyle=ia,l.font="24px Segoe UI, system-ui, sans-serif",l.fillText(`#${n.id} to the kitchen`,14,184)):(l.fillStyle=ia,l.font="28px Segoe UI, system-ui, sans-serif",l.fillText(e===0?"No one waiting.":e===1?"1 in line.":`${e} in line.`,14,100),o&&(l.fillStyle=fc,l.font="bold 26px Segoe UI, system-ui, sans-serif",l.fillText(`Takings $${o.takings.toFixed(2)}`,14,152),l.fillStyle=Wo,l.fillText(`Tips $${o.tips.toFixed(2)}`,14,184),o.lostValue>0&&(l.fillStyle="#c0605a",l.fillText(`Walked $${o.lostValue.toFixed(2)}`,14,216))));this.face.tex.needsUpdate=!0}}class qy{constructor(t,e){typeof document>"u"||(this.face=wf(t,e,{w:e.w,h:e.h},500,275),this._sig=null)}paint(t){if(!this.face)return;const e=t.filter(h=>h.source!=="drivethru"&&h.source!=="delivery"),n=e.filter(h=>h.state!=="bagged"&&h.state!=="carried").map(h=>h.id),s=e.filter(h=>h.state==="bagged").map(h=>h.id),r=n.join(",")+"|"+s.join(",");if(r===this._sig)return;this._sig=r;const o=this.face.ctx,a=500,c=275;o.fillStyle=Sf,o.fillRect(0,0,a,c),o.strokeStyle="#2a333d",o.beginPath(),o.moveTo(a/2,12),o.lineTo(a/2,c-12),o.stroke(),o.font="bold 30px Segoe UI, system-ui, sans-serif",o.fillStyle=ia,o.fillText("PREPARING",24,38),o.fillStyle=Wo,o.fillText("READY",a/2+24,38),o.font="bold 58px Segoe UI, system-ui, sans-serif";const l=(h,u,d)=>{o.fillStyle=d,h.slice(0,6).forEach((f,m)=>{o.fillText(`${f}`,u+m%2*118,104+Math.floor(m/2)*72)})};l(n,34,ia),l(s,a/2+34,wl),this.face.tex.needsUpdate=!0}}const Yy=2.6,jy=4;class $y{constructor(t){var n;this.game=t,this.rules=new Sl({rng:t.rng.child("shift"),bus:t.bus}),this.station=null;const e=t.renderer.scene;this.screen=new Wy(e,xo,xo.tilt,{w:xo.w,h:xo.h}),this.till=new Xy(e,{x:Lu.x,...Lu.screen}),this.readyBoard=new qy(e,cy),this._lastPaid=null,t.bus.on(ie.COUNTER_PAID,({id:s,total:r})=>{this._lastPaid={id:s,total:r,atMin:this.rules.minute}}),this._buildLandingPool(e),this._buildBagPool(e),this._wireToasts();for(const s of t.world.activeInteractables()){const r=(n=s.data)==null?void 0:n.token;r&&!zn[r]&&console.error("ShiftSystem: interactable",s.id,"dispenses a token the menu does not know:",r)}}available(t,e={}){var s,r,o,a,c,l,h;const n=this.rules.orders;switch(t){case"dt_order":{const u=n.carQueue()[0];return!!u&&(((s=this.game.cars)==null?void 0:s.atOrderWindow(u.id))??!1)}case"dt_bag_ready":return!this.game.player.isBusy&&!n.carriedBy("player")&&!this.rules.supply.held("player")&&n.ready().some(u=>u.source==="drivethru");case"window_handout":{const u=n.carriedBy("player");return!!u&&u.source==="drivethru"&&(((r=this.game.cars)==null?void 0:r.atPickup(u.id))??!1)}case"dlv_bag_ready":return!this.game.player.isBusy&&!n.carriedBy("player")&&!this.rules.supply.held("player")&&n.ready().some(u=>u.source==="delivery");case"at_house":{const u=n.carriedBy("player");return!!u&&u.source==="delivery"&&u.house===e.house}case"queue_head":{if(this.station!=="counter"||n.ordering())return!1;const u=n.counterQueue()[0];return!!u&&(((o=this.game.customers)==null?void 0:o.atTill(u.id))??!0)}case"payment_due":return this.station==="counter"&&!!n.ordering();case"bag_ready":return n.readyFor("takeaway").length>0;case"tray_ready":{if(this.game.player.isBusy||n.carriedBy("player")||this.rules.supply.held("player"))return!1;const u=n.readyFor("dinein")[0];return!!u&&((a=this.game.customers)==null?void 0:a.seatedTable(u.id))!=null}case"carrying_for":{const u=n.carriedBy("player");return!!u&&((c=this.game.customers)==null?void 0:c.tableOf(u.id))===e.table}case"grill_free_patty":return!this.rules.kitchen.batchOf("patty")&&this.rules.kitchen.freeSlots("grill")>0;case"grill_ready_patty":return!!this.rules.kitchen.readyBatch("patty");case"grill_free_fillet":return!this.rules.kitchen.batchOf("fillet")&&this.rules.kitchen.freeSlots("grill")>0;case"grill_ready_fillet":return!!this.rules.kitchen.readyBatch("fillet");case"fry_free":return this.rules.kitchen.freeSlots("fryer")>0&&!this.rules.kitchen.readyBatch("fries");case"fry_ready":return!!this.rules.kitchen.readyBatch("fries");case"fries_takeable":return!this.rules.supply.held("player")&&!n.carriedBy("player")&&!!n.needingSide("fries")&&(this.rules.supply.holdCount("fries")>0||!!this.rules.kitchen.readyBatch("fries"));case"drink_wanted":return!this.rules.supply.held("player")&&!n.carriedBy("player")&&!!n.nextSideWanted("drinks");case"side_addable":{const u=this.rules.supply.held("player");return(u==null?void 0:u.type)==="side"&&!!n.needingSide(u.id)}case"held_unwanted":{const u=this.rules.supply.held("player");return!u||u.type==="box"?!1:!n.needingSide(u.id)}case"box_buns_avail":return!this.rules.supply.held("player")&&!n.carriedBy("player")&&this.rules.supply.boxNeeded("buns");case"box_produce_avail":return!this.rules.supply.held("player")&&!n.carriedBy("player")&&this.rules.supply.boxNeeded("produce");case"held_box_buns":return((l=this.rules.supply.held("player"))==null?void 0:l.box)==="buns";case"held_box_produce":return((h=this.rules.supply.held("player"))==null?void 0:h.box)==="produce";default:return!1}}kitchenPress(t){var s,r;const e=this.game.ui,n=t.op==="grill_on"?this.rules.grillOn(t.item):t.op==="grill_pull"?this.rules.grillPull(t.item):t.op==="fry_on"?this.rules.fryOn():t.op==="fry_pull"?this.rules.fryPull():t.op==="take_fries"?this.rules.takeFries():t.op==="fill"?this.rules.fillDrink(t.flavour):t.op==="add_side"?this.rules.addSide():t.op==="drop_held"?this.rules.dropHeld():t.op==="take_box"?this.rules.takeBox(t.box):t.op==="restock"?this.rules.restock():{ok:!1,reason:"unknown_op"};if(n.ok){if(t.op==="add_side"){const o=((s=this.rules.orders.get(n.id))==null?void 0:s.state)==="ready";e.toast((r=n.remaining)!=null&&r.length?`Set down for #${n.id} — still needs ${n.remaining.map(a=>Xi[a].label).join(" + ")}.`:o?`#${n.id} complete.`:`Sides in for #${n.id} — the burger is still coming.`)}else t.op==="restock"&&e.toast(n.box==="buns"?"Hopper full.":"Bins full.");return}if(t.op==="add_side"&&n.reason==="nobody_wants"){const o=this.rules.orders.nextSideWanted("drinks");e.toast(o?`Nobody wants that — the next drink is a ${Xi[o.side.id].label}.`:"Nobody wants that. Bin it.",4200)}else n.reason==="out_of_stock"?e.toast("Nothing there to take."):n.reason!=="unknown_op"?e.toast("Not right now."):console.warn("[shift] unknown kitchen op:",t)}servicePress(t){var n,s,r;const e=this.game.ui;if(t.op==="tray"){const o=this.rules.trayUp();if(o.ok){const a=(n=this.game.customers)==null?void 0:n.tableOf(o.id);e.toast(`#${o.id} on the tray — table ${a??"?"}.`,4200)}else e.toast("Nothing ready for a tray.")}else if(t.op==="bag"){const o=this.rules.bagOrder();o.ok?e.toast(`#${o.id} bagged — their number is up.`):e.toast("Nothing ready to bag.")}else if(t.op==="dt_take"){const o=this.rules.dtTakeOrder();o.ok?e.toast(`#${o.id} — drive-thru order on the board.`):e.toast("No car at the window.")}else if(t.op==="dt_bag"){const o=this.rules.dtBagUp();o.ok?e.toast(`#${o.id} in the bag — pickup window.`,4200):e.toast("Nothing for the window.")}else if(t.op==="dlv_bag"){const o=this.rules.dlvBagUp();if(o.ok){const a=((r=ps[(s=this.rules.orders.get(o.id))==null?void 0:s.house])==null?void 0:r.name)??"the address";e.toast(`#${o.id} for ${a} — the van's at the goods door.`,5200)}else e.toast("No deliveries waiting.")}else t.op==="deliver"&&(this.rules.deliver().ok||e.toast("You are not carrying anything."))}lockIn(t){var n,s;const e=(n=this.game.room)==null?void 0:n.heldByAnother(`station_${t}`);if(e){this.game.ui.toast(`${this.game.room.nameOf(e.by)} is on that station.`,2600);return}if(t==="pod")this._lockPod();else if(t==="counter")this._lockCounter();else{this.game.ui.toast("Nothing to work there yet.");return}this.station===t&&((s=this.game.room)==null||s.take(`station_${t}`))}_lockPod(){const t=this.game.player;t.position.z<Yn.z-.75||(this.station="pod",t.setState("busy"),t.position.x=vn.clamp(t.position.x,Yn.x0,Yn.x1),t.position.z=Yn.z,t.position.y=0,t.velocity.set(0,0,0),t.facing=Yn.facing,this.game.camera.yaw=Yn.facing,this.game.ui.toast("On the pod. A/D to slide along, S to step off.",5200),this.game.bus.emit("shift:station",{station:"pod"}))}_lockCounter(){const t=this.game.player;t.position.z>ss.z+.75||(this.station="counter",t.setState("busy"),t.position.x=ss.x,t.position.z=ss.z,t.position.y=0,t.velocity.set(0,0,0),t.facing=ss.facing,this.game.camera.yaw=ss.facing,this.game.ui.toast("On the till. S to step off.",5200),this.game.bus.emit("shift:station",{station:"counter"}))}release(){var t;this.station&&((t=this.game.room)==null||t.release(`station_${this.station}`),this.station=null,this.game.player.setState("normal"),this.game.bus.emit("shift:station",{station:null}))}podPress(t){this.station==="pod"&&(t.op==="uhc"?this.rules.pullFromUHC():t.op==="wrap"?this.rules.wrap():t.op==="send"?this.rules.send():this.rules.addToken(t.token))}counterPress(t){if(this.station!=="counter")return;(t.op==="take_payment"?this.rules.takePayment():this.rules.takeOrder()).ok||this.game.ui.toast("Not right now.")}update(t){var h,u,d,f;const e=this.game;e.mode===$e.PLAY&&(this.rules.tick(t*e.clock.scale),this.station==="pod"?this._slide(t):this.station==="counter"&&this._pin(t),this.station&&this.game.room&&(!this._claimAt||Date.now()-this._claimAt>8e3)&&(this._claimAt=Date.now(),this.game.room.take(`station_${this.station}`)));const n=this.rules.orders,s=n.live();(u=this.screen)==null||u.paint(s,((h=n.active())==null?void 0:h.id)??null,this.rules.pod.nextToken(),zn,Wi,this.rules.minute),(d=this.till)==null||d.paint(n.ordering(),n.counterQueue().length,this._lastPaid,this.rules.minute,Wi,{takings:n.stats.takings||0,tips:n.stats.tips||0,lostValue:n.stats.lostValue||0}),(f=this.readyBoard)==null||f.paint(s),this._syncLanding(),this._syncBags();const r=n.carriedBy("player"),o=r&&r.source!=="kiosk"&&r.source!=="counter"?r.source:null,a=!!this.game.player.vehicle,c=this.rules.supply.held("player"),l=r&&!a?[{id:(o?"bag":"tray")+r.id,shape:o?"bag":"tray",colour:o?14272934:11026479}]:c&&!a?[{id:c.type==="box"?"box"+c.box:"side"+c.id,shape:c.type==="box"?"box":c.id==="fries"?"carton":"cup",colour:c.type==="box"?11898974:Xi[c.id].colour}]:[];this.game.player.avatar.setHeld(l),this._syncReceipt(r&&!a?r:null)}_syncReceipt(t){var r,o,a,c;if(!t){(r=this._receipt)!=null&&r.mesh.parent&&this._receipt.mesh.parent.remove(this._receipt.mesh);return}if(!this._receipt){const l=document.createElement("canvas");l.width=80,l.height=64;const h=new Qn(l);h.colorSpace=qe;const u=new et(new be(.085,.068),new Ye({map:h,transparent:!0,side:$n}));u.position.set(-.1,.05,-.06),u.rotation.y=Math.PI,u.rotation.x=.28,this._receipt={canvas:l,tex:h,mesh:u,sig:null}}const e=(o=this.game.customers)==null?void 0:o.tableOf(t.id),n=`${t.id}:${e}`;if(n!==this._receipt.sig){this._receipt.sig=n;const l=this._receipt.canvas.getContext("2d");l.clearRect(0,0,80,64),l.fillStyle="#f4efe4",l.fillRect(2,2,76,60),l.fillStyle="#20262e",l.textAlign="center",l.font="bold 26px Segoe UI, system-ui, sans-serif",l.fillText("#"+t.id,40,28),l.font="bold 20px Segoe UI, system-ui, sans-serif";const h=t.source==="drivethru"?"WINDOW":t.source==="delivery"?(((a=ps[t.house])==null?void 0:a.name)??"DELIVERY").toUpperCase().slice(0,14):e!=null?"TABLE "+e:"";l.font=t.source==="delivery"?"bold 13px Segoe UI, system-ui, sans-serif":"bold 20px Segoe UI, system-ui, sans-serif",l.fillText(h,40,52),this._receipt.tex.needsUpdate=!0}const s=(c=this.game.player.avatar._held)==null?void 0:c[0];s&&this._receipt.mesh.parent!==s&&s.add(this._receipt.mesh)}_buildBagPool(t){this._bags=[];const e=new un({color:14272934}),n=new un({color:11026479});for(let s=0;s<3;s++){const r=new Wt,o=new et(new It(.16,.21,.1),e);o.castShadow=!0;const a=new et(new It(.165,.035,.05),e);a.position.y=.12;const c=new et(new It(.162,.03,.102),n);c.position.y=.02,r.add(o,a,c),r.position.set(-5.85+s*.65,1.075+.105,1.95),r.rotation.y=(s%2?-1:1)*.18,r.visible=!1,t.add(r),this._bags.push(r)}}_syncBags(){const t=this.rules.orders.bagged();for(let e=0;e<this._bags.length;e++)this._bags[e].visible=e<t.length}_pin(){const t=this.game.player;t.position.x=ss.x,t.position.z=ss.z,t.position.y=0,this.game.input.axis().y<-.5&&this.release()}_slide(t){const e=this.game.player;e.position.x=vn.clamp(e.position.x,Yn.x0,Yn.x1),e.position.z=Yn.z,e.position.y=0;const s=this.game.input.axis();if(s.y<-.5){this.release();return}if(s.x!==0){const r=this.game.camera.basis().right,o=Math.sign(r.x)||1;e.position.x=vn.clamp(e.position.x+s.x*o*Yy*t,Yn.x0,Yn.x1)}}_buildLandingPool(t){this._landing=[];const e=new un({color:15262418}),n=new It(.115,.055,.115),s=new It(.118,.016,.05),r=new Ge(.032,.026,.09,10),o=new Ge(.036,.024,.08,4);for(let a=0;a<jy;a++){const c=new Wt,l=new et(n,e);l.castShadow=!0;const h=new un({color:11026479}),u=new et(s,h);u.position.y=.02;const d=new et(o,new un({color:14726213}));d.rotation.y=Math.PI/4,d.position.set(-.115,.04,.02),d.visible=!1;const f=new et(r,new un({color:13620957}));f.position.set(.115,.045,-.02),f.visible=!1,c.add(l,u,d,f);const m=document.createElement("canvas");m.width=64,m.height=32;const _=new Qn(m);_.colorSpace=qe;const p=new et(new be(.075,.0375),new Ye({map:_,transparent:!0}));p.rotation.x=-Math.PI/2+.35,p.position.set(0,.032,.035),c.add(p);const g=Js.x0+.22+a*.42;c.position.set(g,Js.y+.03,Js.z),c.rotation.y=(a%2?-1:1)*.22,c.visible=!1,t.add(c),this._landing.push({g:c,canvas:m,tex:_,shownId:null,stripe:u,carton:d,cup:f})}}_stencil(t,e){if(t.shownId===e)return;t.shownId=e;const n=t.canvas.getContext("2d");n.clearRect(0,0,64,32),n.fillStyle="#3a3126",n.font="bold 24px Segoe UI, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("#"+e,32,17),t.tex.needsUpdate=!0}_syncLanding(){var n,s,r,o;(n=this.game.buildBoard)==null||n.detectSend();const t=this.rules.orders.live().filter(a=>a.state==="landed"||a.state==="ready"),e=((s=this.game.buildBoard)==null?void 0:s.slidingId)??null;for(let a=0;a<this._landing.length;a++){const c=this._landing[a],l=t[a];if(c.g.visible=!!l&&l.id!==e,!l)continue;this._stencil(c,l.id),c.stripe.material.color.set(l.state==="ready"?11026479:14263361);const h=(r=l.sides)==null?void 0:r.find(d=>d.id==="fries"),u=(o=l.sides)==null?void 0:o.find(d=>d.id!=="fries");c.carton.visible=!!(h!=null&&h.done),c.cup.visible=!!(u!=null&&u.done),u!=null&&u.done&&c.cup.material.color.set(Xi[u.id].colour)}}_wireToasts(){const t=this.game.bus,e={toast:s=>{var r;return(r=this.game.ui)==null?void 0:r.toast(s)}},n=s=>{const r=zn[s];return r?r.station==="toaster"||r.station==="uhc"?"a "+r.label:r.label:s};t.on(ie.POD_REFUSED,({reason:s,token:r,next:o})=>{var a,c,l;switch(s){case ze.NO_ORDER:return e.toast("Nothing on the board.");case ze.NOT_NEXT:case ze.NOT_AT_UHC:return e.toast(`It wants ${n(o)} next.`);case ze.ALREADY_BUILT:return e.toast("It has everything it needs.");case ze.NOT_BUILT:return e.toast("It is not built yet.");case ze.NOT_WRAPPED:return e.toast("Wrap it before it goes down.");case ze.OUT_OF_STOCK:{const h=(a=zn[r])==null?void 0:a.station;return(l=this.game.ui)==null?void 0:l.toast(h==="uhc"?`The cabinet is out of ${zn[r].label} — the grill feeds it.`:h==="toaster"?"Out of buns — restock from the dry store.":`Out of ${((c=zn[r])==null?void 0:c.label)??r} — restock from the dry store.`,4200)}default:return e.toast("Not now.")}}),t.on(ie.ORDER_SERVED,({id:s,value:r,tip:o})=>{const a=r!=null?` $${r.toFixed(2)}${o>0?` +$${o.toFixed(2)} tip`:""}`:"";e.toast(`#${s} away.${a}`)}),t.on(ie.ORDER_LOST,({id:s,value:r,reason:o})=>{e.toast(o==="gave_up_waiting"?`#${s} gave up waiting — $${r.toFixed(2)} walked out.`:`#${s} walked out — $${r.toFixed(2)} lost.`),this.game.audio.play("wrong_item",{at:{x:0,y:1.4,z:2},rate:.7})})}}const pc={};function ge(i,t){return pc[i]||(pc[i]=t())}const _e=(i,t={})=>new un({color:i,...t});function Ky(i){const t=new Wt,e=new et(ge("cup",()=>new Ge(.043,.032,.135,10)),_e(i));e.castShadow=!0;const n=new et(ge("cupLid",()=>new Ge(.047,.047,.016,10)),_e(14173231));n.position.y=.075;const s=new et(ge("straw",()=>new Ge(.005,.005,.1,5)),_e(15790836));return s.position.set(.012,.13,0),s.rotation.z=.18,t.add(e,n,s),t}function Zy(i){const t=new et(ge("bun",()=>new ji(.056,10,6,0,Math.PI*2,0,Math.PI/2)),_e(i));return t.scale.y=.62,t.castShadow=!0,t}function Jy(i){const t=new et(ge("heel",()=>new Ge(.054,.05,.02,12)),_e(i));return t.castShadow=!0,t}function Qy(i){const t=new et(ge("chip",()=>new Ge(.021,.021,.008,8)),_e(i));return t.castShadow=!0,t}function t2(i){const t=new et(ge("disc",()=>new Ge(.052,.052,.018,12)),_e(i));return t.castShadow=!0,t}function e2(i){const t=new et(ge("flat",()=>new It(.082,.006,.082)),_e(i));return t.castShadow=!0,t}function n2(i){const t=new et(ge("blob",()=>new pa(.036,0)),_e(i));return t.castShadow=!0,t}function i2(i){const t=new Wt,e=new et(ge("bottle",()=>new Ge(.024,.028,.105,8)),_e(i));e.castShadow=!0;const n=new et(ge("bottleCap",()=>new da(.017,.036,8)),_e(2896184));return n.position.y=.068,t.add(e,n),t}function s2(i){const t=new Wt,e=new et(ge("carton",()=>new Ge(.04,.026,.09,4)),_e(14173231));e.rotation.y=Math.PI/4,e.castShadow=!0;const n=new et(ge("chipTop",()=>new Ge(.03,.03,.05,6)),_e(i));return n.position.y=.055,t.add(e,n),t}function r2(i){const t=new Wt,e=new et(ge("bag",()=>new It(.1,.135,.062)),_e(i));e.castShadow=!0;const n=new et(ge("bagFold",()=>new It(.104,.022,.03)),_e(i));return n.position.y=.076,t.add(e,n),t}function o2(i){const t=new Wt,e=new et(ge("box",()=>new It(.125,.075,.105)),_e(i));e.castShadow=!0;const n=new et(ge("boxTape",()=>new It(.128,.004,.022)),_e(15262418));return n.position.y=.039,t.add(e,n),t}function a2(i){const t=new Wt,e=new et(ge("trayBase",()=>new It(.34,.014,.25)),_e(i));e.castShadow=!0;const n=new et(ge("trayRim",()=>new It(.36,.022,.27)),_e(i));n.position.y=.004;const s=new et(ge("trayParcel",()=>new It(.115,.055,.115)),_e(15262418));s.position.set(.04,.045,.01),s.rotation.y=.3,s.castShadow=!0;const r=new et(ge("trayBand",()=>new It(.118,.016,.05)),_e(11026479));return r.position.set(.04,.062,.01),r.rotation.y=.3,t.add(e,n,s,r),t}function c2(i){const t=new Wt,e=new et(ge("shaft",()=>new Ge(.016,.016,1.15,6)),_e(i));e.castShadow=!0;const n=new et(ge("mopHead",()=>new It(.115,.1,.055)),_e(14341056));return n.position.y=-.6,t.add(e,n),t}function l2(i){const t=new Wt,e=new et(ge("sprayBody",()=>new It(.055,.115,.045)),_e(i));e.castShadow=!0;const n=new et(ge("sprayNeck",()=>new It(.028,.05,.028)),_e(2896184));n.position.y=.082;const s=new et(ge("sprayTrigger",()=>new It(.05,.022,.022)),_e(2896184));s.position.set(.032,.068,0);const r=new et(ge("cloth",()=>new It(.075,.018,.06)),_e(7317704));return r.position.y=-.075,t.add(e,n,s,r),t}const h2={cup:Ky,bun:Zy,heel:Jy,chip:Qy,disc:t2,flat:e2,blob:n2,bottle:i2,carton:s2,bag:r2,box:o2,tray:a2,mop:c2,spray:l2};function u2(i){const t=new et(ge("fallback",()=>new It(.075,.055,.075)),_e(i));return t.castShadow=!0,t}function ri(i,t=13421772){return(h2[i]||u2)(t)}function d2(i){return i==="mop"}const Tn=(i,t,e,n)=>{const s=new et(new It(i,t,e),Se(n));return s.castShadow=!0,s.receiveShadow=!0,s};class Fr{constructor(t={}){const{skin:e=qt.skinTones[0],hair:n=qt.hairTones[0],height:s=1,build:r=1,hairStyle:o="short"}=t;this.group=new Wt,this.scale=s,this.opts={skin:e,hair:n,height:s,build:r,hairStyle:o};const a=s,c=.44*r,l=.24*r;this.hips=new Wt,this.hips.position.y=.84*a,this.group.add(this.hips),this.torso=Tn(c,.58*a,l,14209734),this.torso.position.y=.29*a,this.hips.add(this.torso),this.neck=Tn(.14*a,.08*a,.14*a,e),this.neck.position.y=.62*a,this.hips.add(this.neck),this.head=new Wt,this.head.position.y=.66*a,this.hips.add(this.head);const h=Tn(.26*a,.3*a,.25*a,e);h.position.y=.15*a,this.head.add(h),this.skull=h,this.hair=new Wt;const u=o==="long"?.2:.1,d=Tn(.28*a,u*a,.27*a,n);if(d.position.y=(.3-u/2+.005)*a,this.hair.add(d),o==="long"){const f=Tn(.26*a,.26*a,.1*a,n);f.position.set(0,.12*a,-.14*a),this.hair.add(f)}if(o==="bun"){const f=new et(new ji(.08*a,8,6),Se(n));f.position.set(0,.3*a,-.14*a),f.castShadow=!0,this.hair.add(f)}this.head.add(this.hair);for(const f of[-.06,.06]){const m=Tn(.045*a,.045*a,.02*a,1973016);m.position.set(f*a,.17*a,.13*a),this.head.add(m)}this.arms={};for(const f of["left","right"]){const m=new Wt;m.position.set((f==="left"?-1:1)*(c/2+.055*a),.54*a,0);const _=Tn(.11*a,.5*a,.12*a,14209734);_.position.y=-.25*a,m.add(_);const p=Tn(.1*a,.1*a,.11*a,e);p.position.y=-.54*a,m.add(p);const g=new Wt;g.position.y=-.6*a,m.add(g),this.hips.add(m),this.arms[f]={pivot:m,upper:_,hand:p,grip:g}}this.legs={};for(const f of["left","right"]){const m=new Wt;m.position.set((f==="left"?-1:1)*.11*a,0,0);const _=Tn(.15*a,.78*a,.16*a,3884626);_.position.y=-.39*a,m.add(_);const p=Tn(.17*a,.1*a,.24*a,2764083);p.position.set(0,-.82*a,.03*a),m.add(p),this.hips.add(m),this.legs[f]={pivot:m,leg:_,shoe:p}}this.bag=null,this.hat=null,this.phase=0,this.leaning=0,this.firstPerson=!1,this._held=[],this._heldSig=""}applyOutfit(t={}){var o,a,c;const e=(l,h)=>{l.material=Se(h)},n=((o=t.top)==null?void 0:o.colour)??14209734;e(this.torso,n),e(this.arms.left.upper,n),e(this.arms.right.upper,n);const s=((a=t.bottom)==null?void 0:a.colour)??3884626;e(this.legs.left.leg,s),e(this.legs.right.leg,s);const r=((c=t.shoes)==null?void 0:c.colour)??2764083;if(e(this.legs.left.shoe,r),e(this.legs.right.shoe,r),this.hat&&(this.head.remove(this.hat),this.hat=null),t.head){const l=this.scale;if(this.hat=Tn(.3*l,.08*l,.3*l,t.head.colour),this.hat.position.y=.33*l,t.head.id==="cap"){const h=Tn(.28*l,.03*l,.14*l,t.head.colour);h.position.set(0,-.03*l,.2*l),this.hat.add(h)}this.head.add(this.hat)}if(this.bag&&(this.hips.remove(this.bag),this.bag=null),t.bag){const l=this.scale;this.bag=Tn(.32*l,.4*l,.16*l,t.bag.colour),this.bag.position.set(0,.3*l,-.2*l),this.hips.add(this.bag)}}setFirstPerson(t){this.firstPerson=t,this.head.visible=!t,this.neck.visible=!t,this.torso.visible=!t,this.arms.left.pivot.visible=!t,this.arms.right.pivot.visible=!t,this.legs.left.pivot.visible=!t,this.legs.right.pivot.visible=!t,this.bag&&(this.bag.visible=!t),this._applyHeldVisibility()}setHeld(t=[]){var r;const e=Array.isArray(t)?t.slice(0,4):[],n=e.map(o=>`${o.id}:${o.colour}:${o.shape||""}`).join("|");if(n===this._heldSig)return;this._heldSig=n;for(const o of this._held)(r=o.parent)==null||r.remove(o);this._held=[];const s=this.scale;e.forEach((o,a)=>{const c=a===1?"left":"right",l=this.arms[c].grip,h=d2(o.shape)||!!o.big,u=ri(o.shape,o.colour??13421772);u.scale.setScalar(s),u.position.set(0,h?-.16*s:-.02*s-(a>>1)*.11*s,h?.05*s:.075*s),h&&(u.rotation.x=.24),l.add(u),this._held.push(u)}),this._applyHeldVisibility()}_applyHeldVisibility(){for(const t of["left","right"]){const e=this.arms[t].grip;e.visible=!0,this.firstPerson?(e.parent!==this.hips&&this.hips.add(e),e.position.set((t==="left"?-1:1)*.22*this.scale,.34*this.scale,.34*this.scale)):e.parent!==this.arms[t].pivot&&(this.arms[t].pivot.add(e),e.position.set(0,-.6*this.scale,0))}}update(t,e=0,n={}){const s=e>.2;if(this.phase+=t*(s?4.2+e*1.1:2.2),n.sitting){this.legs.left.pivot.rotation.x=-1.4,this.legs.right.pivot.rotation.x=-1.4,this.arms.left.pivot.rotation.x=-.5,this.arms.right.pivot.rotation.x=-.5,this.hips.position.y=.5*this.scale;return}if(n.sleeping){this.group.rotation.z=Math.PI/2*.98,this.hips.position.y=.3*this.scale;return}this.group.rotation.z=0,this.hips.position.y=.84*this.scale+(s?Math.abs(Math.sin(this.phase))*.02:0);const r=s?Math.sin(this.phase)*Math.min(.85,.28+e*.14):Math.sin(this.phase)*.03;this.legs.left.pivot.rotation.x=r,this.legs.right.pivot.rotation.x=-r,this.arms.left.pivot.rotation.x=-r*.75,this.arms.right.pivot.rotation.x=r*.75,this.arms.left.pivot.rotation.z=.06,this.arms.right.pivot.rotation.z=-.06;const o=n.tired?.16:0;this.torso.rotation.x=o,this.head.rotation.x=o*.6}fidget(t){this.arms.left.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.arms.right.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.head.rotation.y=(Math.random()-.5)*t*.4}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}}const Wu=1.5,Ro=[{x:-32,z:30.3},{x:26,z:30.3},{x:-41.8,z:16},{x:39.8,z:12}],f2=.3,Xu=.3,p2=.34,m2=4.5,g2={queue_1:Math.PI,queue_2:Math.PI,queue_3:Math.PI,queue_4:Math.PI,collect_wait:Math.PI,collect_pickup:Math.PI,kiosk_1:-Math.PI/2,kiosk_2:-Math.PI/2,seat_1:-Math.PI/2,seat_2:-Math.PI/2,seat_3:-Math.PI/2,seat_4:-Math.PI/2,seat_5:-Math.PI/2,seat_6:-Math.PI/2,seat_7:-Math.PI/2},mc=7,_2=14;class x2{constructor(t){this.game=t,this.scene=t.renderer.scene,this._bodies=new Map,this._doorList=[],this._tables=new Map,this._buildLocators(),t.slice=this}tableOf(t){for(const[e,n]of this._tables)if(n===t)return e;return null}seatedTable(t){const e=this.tableOf(t);if(e==null)return null;const n=this._bodies.get(t);return n&&n.sitting?e:null}_freeTable(){for(let t=1;t<=mc;t++)if(!this._tables.has(t))return t;return null}_buildLocators(){this._locators=[];for(let t=1;t<=mc;t++){const e=new Wt,n=new et(new It(.035,.115,.022),new un({color:11026479}));n.position.y=.058,n.castShadow=!0,e.add(n);const s=document.createElement("canvas");s.width=64,s.height=40;const r=new Qn(s);r.colorSpace=qe;const o=new Ye({map:r,transparent:!0});for(const a of[0,Math.PI]){const c=new et(new be(.07,.044),o);c.position.set(0,.075,a===0?.013:-.013),c.rotation.y=a,e.add(c)}e.visible=!1,this.scene.add(e),this._locators.push({g:e,canvas:s,tex:r,shownId:null})}}_syncLocators(){const t=this.game.shift.rules.orders;for(let e=1;e<=mc;e++){const n=this._locators[e-1],s=this._tables.get(e),r=s!=null?t.get(s):null,o=!!r&&r.state!=="served";if(n.g.visible=o,!o)continue;const a=this.spot(`table_${e}`);if(n.g.position.set(a.x-.24,.745,a.z-.2),n.shownId!==s){n.shownId=s;const c=n.canvas.getContext("2d");c.clearRect(0,0,64,40),c.fillStyle="#f4efe4",c.font="bold 26px Segoe UI, system-ui, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("#"+s,32,21),n.tex.needsUpdate=!0}}}bodies(){return this._doorList}atTill(t){const e=this._bodies.get(t);return!!e&&e.goalName==="queue_1"&&e.path.length===0}spot(t){return this.game.world.spots[t]}update(t){if(t>0&&this.game.mode===$e.PLAY){this._sync(t);for(const e of this._bodies.values())this._move(e,t);this._separate(),this._syncLocators(),this._doorList.length=0;for(const e of this._bodies.values())this._doorList.push(e),e.avatar.update(t,e.speed,{sitting:!!e.sitting}),this._syncBar(e)}}_syncBar(t){const e=this.game.shift.rules.orders.get(t.id),n=e&&!t.leaving&&t.phase!=="approach"?this.game.shift.rules.orders.patienceFrac(e,this.game.shift.rules.minute):null;if(!n||n.frac>=.98){t.bar&&(t.bar.visible=!1);return}if(!t.bar){const r=new Wt,o=new et(new be(.56,.075),new Ye({color:1316636,transparent:!0,opacity:.85,depthWrite:!1})),a=new et(new be(.52,.045),new Ye({color:3653722,depthWrite:!1}));a.position.z=.002,r.add(o,a),r.position.y=2.1,t.avatar.group.add(r),t.bar=r,t.barFill=a}t.bar.visible=!0;const s=n.frac;t.barFill.scale.x=Math.max(.02,s),t.barFill.position.x=-.26*(1-Math.max(.02,s)),t.barFill.material.color.set(s>.5?3653722:s>.25?16098851:14826286),t.bar.rotation.y=this.game.camera.yaw+Math.PI-t.avatar.group.rotation.y}_sync(t){const e=this.game.shift.rules.orders;for(const n of e.all()){if(n.source==="drivethru"||n.source==="delivery")continue;let s=this._bodies.get(n.id);if(n.state==="lost"){s&&this._leave(s);continue}if(n.state==="served"){if(!s||s.table!=null&&!s.leaving&&(s.sitting=!0,s.eat??(s.eat=_2+n.id%7*4),s.eat-=t,s.eat>0))continue;this._leave(s);continue}if(s||(s=this._spawn(n)),!s.leaving){if(s.phase==="approach"){if(s.path.length)continue;s.phase="arrive"}n.source==="counter"?this._counterChoreo(s,n,e):this._kioskChoreo(s,n,t)}}for(const n of this._bodies.values())e.get(n.id)||this._leave(n)}_counterChoreo(t,e,n){if(e.state==="queued"){const s=n.counterQueue().indexOf(e),r=Math.min(s+1+(n.ordering()?1:0),4);this._stand(t,`queue_${r}`)}else e.state==="ordering"?this._stand(t,"queue_1"):this._waitChoreo(t,e)}_kioskChoreo(t,e,n){t.phase==="arrive"?(this._stand(t,t.kioskSpot),!t.path.length&&t.goalName===t.kioskSpot&&(t.phase="ordering",t.dwell=m2)):t.phase==="ordering"?(t.dwell-=n,t.dwell<=0&&(t.phase="waiting")):this._waitChoreo(t,e)}_waitChoreo(t,e){if(e.state==="bagged"){if(t.sitting=!1,this._stand(t,"collect_pickup"),!t.path.length&&t.goalName==="collect_pickup"&&!t.collected){t.collected=!0;const n=this.game.shift.rules;n.netRole!=="guest"&&n.applyNet("collect",[e.id],"customer"),t.avatar.setHeld([{id:"bag",shape:"bag",colour:14272934}])}return}if(e.service==="dinein"){if(t.table==null){const n=this._freeTable();if(n==null){this._stand(t,"collect_wait");return}t.table=n,this._tables.set(n,e.id)}this._stand(t,`seat_${t.table}`),t.sitting=!t.path.length&&t.goalName===`seat_${t.table}`;return}this._stand(t,"collect_wait")}_spawn(t){const e=$i[t.look%$i.length],n=new Fr({skin:qt.skinTones[e.skin%qt.skinTones.length],hair:qt.hairTones[e.hair%qt.hairTones.length],hairStyle:e.hairStyle,height:e.height,build:e.build});n.applyOutfit({top:{colour:e.top},bottom:{colour:e.bottom},shoes:{colour:2764083}});const s=this.spot("entry_out"),r=Ro[t.id%Ro.length];n.group.position.set(r.x,0,r.z),this.scene.add(n.group);const o={id:t.id,avatar:n,pos:n.group.position,facing:Math.PI,speed:0,path:[{x:s.x,z:27},{x:s.x,z:13},{x:s.x,z:s.z}],goalName:null,leaving:!1,phase:"approach",dwell:0,kioskSpot:t.id%2?"kiosk_1":"kiosk_2"};return this._bodies.set(t.id,o),o}_despawn(t){this._freeUp(t),this.scene.remove(t.avatar.group),t.bar&&(t.bar.children.forEach(e=>{var n,s;return(s=(n=e.material)==null?void 0:n.dispose)==null?void 0:s.call(n)}),t.bar=null),t.avatar.dispose(),this._bodies.delete(t.id)}_freeUp(t){t.table!=null&&(this._tables.delete(t.table),t.table=null),t.sitting=!1}_stand(t,e){t.goalName!==e&&(t.goalName=e,t.path=this._route(t,e))}_leave(t){if(t.leaving)return;this._freeUp(t),t.leaving=!0,t.goalName="entry_out",t.path=this._route(t,"entry_out");const e=this.spot("entry_out"),n=Ro[(t.id*5+2)%Ro.length];t.path.push({x:e.x,z:13},{x:e.x,z:27},{x:n.x,z:n.z})}_route(t,e){const n=this.spot(e),s=[],r=t.pos,o=r.x<-8.3&&r.z>3.5,a=r.z<3.5;return e==="entry_out"?(o&&s.push(this.spot("kiosk_gate")),(o||a)&&s.push(this.spot("aisle")),s.push(this.spot("entry"))):e.startsWith("kiosk")?(!a&&!o&&s.push(this.spot("aisle")),s.push(this.spot("kiosk_gate"))):n.z<3.5&&o?s.push(this.spot("kiosk_gate")):n.z<3.5&&!a&&s.push(this.spot("aisle")),s.push(n),s}_move(t,e){const n=t.path[0];if(!n){const c=t.goalName&&this.spot(t.goalName);if(c){const h=Math.hypot(c.x-t.pos.x,c.z-t.pos.z),u=this.game.player.position,d=Math.hypot(c.x-u.x,c.z-u.z)<.6;if(h>.55&&!d){t.path=[c];return}}t.speed=0;const l=g2[t.goalName];l!==void 0&&(t.facing=l),t.avatar.group.rotation.y=t.facing;return}const s=n.x-t.pos.x,r=n.z-t.pos.z,o=Math.hypot(s,r);if(o<f2){t.path.shift(),!t.path.length&&t.leaving&&this._despawn(t);return}const a=Math.min(o,Wu*e);t.pos.x+=s/o*a,t.pos.z+=r/o*a,t.facing=Math.atan2(s,r),t.avatar.group.rotation.y=t.facing,t.speed=Wu}_separate(){const t=[...this._bodies.values()];for(let e=0;e<t.length;e++){if(t[e].sitting)continue;for(let l=e+1;l<t.length;l++){const h=t[e],u=t[l];if(u.sitting)continue;let d=u.pos.x-h.pos.x,f=u.pos.z-h.pos.z,m=Math.hypot(d,f);const _=Xu*2;if(m>=_)continue;m<1e-4&&(d=1,f=0,m=1);const p=(_-m)/2;h.pos.x-=d/m*p,h.pos.z-=f/m*p,u.pos.x+=d/m*p,u.pos.z+=f/m*p}const n=this.game.player.position,s=t[e];let r=s.pos.x-n.x,o=s.pos.z-n.z,a=Math.hypot(r,o);const c=Xu+p2;a<c&&(a<1e-4&&(r=1,o=0,a=1),s.pos.x+=r/a*(c-a),s.pos.z+=o/a*(c-a))}}}const v2=5.5,y2=4.5,gc=.35,qu=-.5,M2=-1,S2=20;class w2{constructor(t){this.game=t,this.scene=t.renderer.scene,this._cars=new Map,this._path=this._buildPath(),this._sOrder=this._sNear(-15,qu),this._sPickup=this._sNear(12.15,M2),this._sExit=this._length-.5,this._lightStops=[{s:this._sNear(-46,33)-5.5},{s:this._sNear(44,33)-5.5}].filter(e=>e.s>6)}_buildPath(){const t=[],e=(h,u)=>t.push({x:h,z:u}),n=Jl.lane.legs,s=n[0],r=n[1],o=n[2];e(-40,33),e(-19,33),e(-15.6,30.5),e(-15,26),e(s.from.x,s.from.z),e(s.to.x,s.to.z);const a=(h,u,d,f)=>{for(let _=1;_<=7;_++){const p=d+(f-d)*(_/7);e(h+Math.cos(p)*6,u+Math.sin(p)*6)}};a(-9,-6.5,Math.PI,Math.PI*1.5),e(r.to.x,r.to.z),a(6.15,-6.5,Math.PI*1.5,Math.PI*2),e(o.to.x,S2),e(12.9,26.5),e(14.4,30.5),e(18,33),e(48,33);let c=0;const l=t.map((h,u)=>(u>0&&(c+=Math.hypot(h.x-t[u-1].x,h.z-t[u-1].z)),{...h,s:c}));return this._length=c,l}_sNear(t,e){let n=null;for(let s=1;s<this._path.length;s++){const r=this._path[s-1],o=this._path[s],a=o.x-r.x,c=o.z-r.z,l=a*a+c*c||1,h=Math.max(0,Math.min(1,((t-r.x)*a+(e-r.z)*c)/l)),u=r.x+a*h,d=r.z+c*h,f=Math.hypot(t-u,e-d);(!n||f<n.d)&&(n={d:f,s:r.s+Math.sqrt(l)*h})}return n.s}_at(t){const e=this._path;let n=1;for(;n<e.length-1&&e[n].s<t;)n++;const s=e[n-1],r=e[n],o=r.s-s.s||1,a=Math.min(1,Math.max(0,(t-s.s)/o));return{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a,yaw:Math.atan2(r.x-s.x,r.z-s.z)}}atOrderWindow(t){const e=this._cars.get(t);return!!e&&Math.abs(e.s-this._sOrder)<gc}atPickup(t){const e=this._cars.get(t);return!!e&&Math.abs(e.s-this._sPickup)<gc}update(t){var r;if(!(t>0)||this.game.mode!==$e.PLAY)return;const e=this.game.shift.rules.orders;for(const o of e.all()){if(o.source!=="drivethru")continue;let a=this._cars.get(o.id);!a&&o.state!=="served"&&(a=this._spawn(o)),a&&(a.order=o)}for(const[o,a]of this._cars)e.get(o)||(a.order={state:"served"});const n=[...this._cars.values()].sort((o,a)=>a.s-o.s);let s=1/0;for(const o of n){const a=o.order,c=a.state==="driveup"?this._sOrder:a.state==="served"||a.state==="lost"?this._sExit:this._sPickup;let l=Math.min(c,s-v2);for(const d of this._lightStops){const f=d.s-o.s;f>-.3&&f<12&&((r=this.game.traffic)==null?void 0:r._phase("ew"))!=="green"&&(l=Math.min(l,d.s))}const h=l-o.s;if(h>.001){const d=Math.min(y2,.8+h*1.4);o.s+=Math.min(h,d*t)}s=o.s;const u=this._at(o.s);o.mesh.position.set(u.x,0,u.z),o.mesh.rotation.y=u.yaw,!o.chimed&&a.state==="driveup"&&Math.abs(o.s-this._sOrder)<gc&&(o.chimed=!0,this.game.audio.play("kiosk_order",{at:{x:-10,y:1.3,z:qu},rate:.8})),(a.state==="served"||a.state==="lost")&&o.s>=this._sExit-.1&&this._despawn(o),this._syncBar(o,a)}}_syncBar(t,e){const n=this.game.shift.rules.orders.get(t.id),s=n?this.game.shift.rules.orders.patienceFrac(n,this.game.shift.rules.minute):null;if(!s||s.frac>=.98){t.bar&&(t.bar.visible=!1);return}if(!t.bar){const o=new Wt,a=new et(new be(.9,.1),new Ye({color:1316636,transparent:!0,opacity:.85,depthWrite:!1})),c=new et(new be(.84,.06),new Ye({color:3653722,depthWrite:!1}));c.position.z=.002,o.add(a,c),o.position.y=2.25,t.mesh.add(o),t.bar=o,t.barFill=c}t.bar.visible=!0;const r=s.frac;t.barFill.scale.x=Math.max(.02,r),t.barFill.position.x=-.42*(1-Math.max(.02,r)),t.barFill.material.color.set(r>.5?3653722:r>.25?16098851:14826286),t.bar.rotation.y=this.game.camera.yaw+Math.PI-t.mesh.rotation.y}_spawn(t){const e=this.game.rng.child("car"+t.id),n=ga(e);mf(n),this.scene.add(n);const s={id:t.id,order:t,mesh:n,s:0,chimed:!1};return this._cars.set(t.id,s),s}_despawn(t){this.scene.remove(t.mesh),t.mesh.traverse(e=>{var n,s,r,o,a;(s=(n=e.geometry)==null?void 0:n.dispose)==null||s.call(n),e.material&&!((r=e.userData)!=null&&r.shared)&&((a=(o=e.material).dispose)==null||a.call(o))}),this._cars.delete(t.id)}}const Un={topSpeed:12,accel:4.5,brake:7,coastDrag:1.2,turnRateAtSpeed:1,turnRateAtCrawl:2.2,mountRange:2.2},b2=1.2,_c={x:-7.9,z:-18.7,heading:Math.PI};class E2{constructor(t){this.game=t,this.mesh=iy(),t.renderer.scene.add(this.mesh),this.parked=new I(_c.x,0,_c.z),this.heading=_c.heading,this.lean=0,this.speed=0,this.rider=null,this._syncMesh(),this.point=t.world.addInteractable({id:"delivery_van",label:"take the delivery van",pos:this.parked,action:"vehicle",data:{},radius:Un.mountRange}),this._collider=null,this._addParkedCollider()}get isRidden(){return this.rider!==null}_addParkedCollider(){const t=Math.abs(Math.sin(this.heading))>.5,e=(t?4.2:2)/2,n=(t?2:4.2)/2;this._collider={min:new I(this.parked.x-e,0,this.parked.z-n),max:new I(this.parked.x+e,2.2,this.parked.z+n),walkable:!1},this.game.world.colliders.push(this._collider),this.game.world._rebuildSpatialHash()}_removeParkedCollider(){const t=this.game.world.colliders,e=t.indexOf(this._collider);e>=0&&t.splice(e,1),this._collider=null,this.game.world._rebuildSpatialHash()}_syncMesh(){const t=this.rider?this.rider.position:this.parked;this.mesh.position.set(t.x,0,t.z),this.mesh.rotation.y=this.heading,this.mesh.rotation.z=this.lean*.4}setRemote(t){t?(this._remote||this._removeParkedCollider(),this._remote=t,this.parked.set(t.x,0,t.z),this.heading=t.yaw,this._syncMesh()):this._remote&&(this._remote=null,this._addParkedCollider(),this._syncMesh())}mount(){var n,s,r,o,a;const t=this.game.player;if(this.isRidden||!t||t.isBusy)return!1;if(this._remote||(n=this.game.room)!=null&&n.heldByAnother("van"))return this.game.ui.toast(`${((o=this.game.room)==null?void 0:o.nameOf((r=(s=this.game.room)==null?void 0:s.heldByAnother("van"))==null?void 0:r.by))||"Someone"} has the van.`,2600),!1;(a=this.game.room)==null||a.take("van"),this.rider=t,t.vehicle=this,this._removeParkedCollider(),t.position.set(this.parked.x,0,this.parked.z),t.velocity.set(0,0,0),t.facing=this.heading,this.speed=0;const e=this.game.camera;return e.setMode("ride"),e.yaw=this.heading,e.pitch=-.14,this.game.ui.toast("W/S drive, A/D steer, Space brakes. E to get out.",5200),this.game.bus.emit("van:mounted",{}),!0}dismount(){var s;if(!this.isRidden)return!1;const t=this.rider;this.parked.set(t.position.x,0,t.position.z);const e={x:Math.cos(this.heading),z:-Math.sin(this.heading)},n=t.position.clone();return t.position.x+=e.x*1.35,t.position.z+=e.z*1.35,t.position.y=t._floorUnder(),t._insideSolid()&&t.position.copy(n),t.velocity.set(0,0,0),t.vehicle=null,this.rider=null,this.speed=0,this.game.camera.fovBoost=0,this.game.camera.setMode("first"),this._addParkedCollider(),this._syncMesh(),(s=this.game.room)==null||s.release("van"),this.game.bus.emit("van:dismounted",{}),!0}ride(t){const e=this.rider;if(!e)return;const n=this.game.input,s=n.axis(),r=s.y,o=s.x;if(r>.01)this.speed+=Un.accel*r*t;else if(r<-.01)this.speed>.15?this.speed-=Un.brake*t:this.speed-=Un.accel*.6*t;else{const g=Un.coastDrag*t;this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),g)}if(n.isDown("jump")){const g=Un.brake*1.3*t;this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),g)}this.speed=vn.clamp(this.speed,-2.5,Un.topSpeed);const a=Math.min(1,Math.abs(this.speed)/Un.topSpeed),c=Un.turnRateAtCrawl+(Un.turnRateAtSpeed-Un.turnRateAtCrawl)*a,l=Math.min(1,Math.abs(this.speed)/b2),h=-o*c*l*Math.sign(this.speed||1)*t;this.heading+=h;const u=vn.clamp(-h/Math.max(t,1e-4)*.22*a,-.42,.42);this.lean+=(u-this.lean)*Math.min(1,t*6);const d=Math.sin(this.heading),f=Math.cos(this.heading);e.velocity.x=d*this.speed,e.velocity.z=f*this.speed,e._applyGravity(t),e._collide(t);const m=e._floorUnder();e.position.y<m&&(e.position.y=m,e.velocity.y=0,e.onGround=!0),this.speed=e.velocity.x*d+e.velocity.z*f,e.facing=this.heading,e.horizontalSpeed=0;const _=this.game.camera,p=this.heading-_.yaw;_.yaw+=Math.atan2(Math.sin(p),Math.cos(p))*Math.min(1,t*2.2*a),this.game.camera.fovBoost=7*Math.max(0,this.speed)/Un.topSpeed,this._syncMesh(),this.game.room&&(!this._claimAt||Date.now()-this._claimAt>8e3)&&(this._claimAt=Date.now(),this.game.room.take("van"))}}const Yu=1.5,Co=4.5,ju=6,T2=3,A2=8,R2=6.5,C2=14,Qs={green:11,amber:2.5,allRed:1.5},xc=Qs.green+Qs.amber+Qs.allRed;class P2{constructor(t){this.game=t;const e=t.renderer.scene;this._t=0,this._lightSig=null,this._lights=[{x:nn.west,z:nn.front},{x:nn.east,z:nn.front},{x:nn.west,z:nn.back},{x:nn.east,z:nn.back}],this._buildPoles(e),this._routes=[];const n={x0:nn.west,z0:nn.back,x1:nn.east,z1:nn.front},s={x0:hi.west,z0:hi.back,x1:hi.east,z1:hi.front};this._addRing(n,"out",3),this._addRing(n,"in",2),this._addRing(s,"out",3),this._addRing(s,"in",2);const r=t.world.rng.child("traffic");for(const o of this._routes)for(let a=0;a<o.carCount;a++){const c=ga(r);mf(c),e.add(c),o.cars.push({mesh:c,s:o.length/o.carCount*a+r.range(0,5),v:ju*.6})}}_addRing(t,e,n){const s=e==="out"?Yu:-Yu,r=t.x0-s,o=t.z0-s,a=t.x1+s,c=t.z1+s,l=e==="out"?[[a,c],[r,c],[r,o],[a,o]]:[[r,c],[a,c],[a,o],[r,o]],h=[];for(let m=0;m<4;m++){const _=l[(m+3)%4],p=l[m],g=l[(m+1)%4],v=$u(p[0]-_[0],p[1]-_[1]),x=$u(g[0]-p[0],g[1]-p[1]),M=[p[0]-v[0]*Co,p[1]-v[1]*Co],A=[p[0]+x[0]*Co,p[1]+x[1]*Co],b=[(M[0]+A[0])/2*.45+p[0]*.55,(M[1]+A[1])/2*.45+p[1]*.55];h.push(M,b,A)}h.push([...h[0]]);let u=0;const d=h.map((m,_)=>(_>0&&(u+=Math.hypot(m[0]-h[_-1][0],m[1]-h[_-1][1])),{x:m[0],z:m[1],s:u})),f=[];for(const m of this._lights){let _=null;for(let p=1;p<d.length;p++){const g=L2(d[p-1],d[p],m);(!_||g.d<_.d)&&(_=g)}if(_&&_.d<8){const p=this._at(d,u,(_.s-3+u)%u),g=Math.abs(Math.sin(p.yaw))>.5?"ew":"ns";f.push({s:(_.s-R2+u)%u,axis:g})}}this._routes.push({way:d,length:u,stops:f,carCount:n,cars:[]})}_at(t,e,n){n=(n%e+e)%e;let s=1;for(;s<t.length-1&&t[s].s<n;)s++;const r=t[s-1],o=t[s],a=o.s-r.s||1,c=Math.min(1,Math.max(0,(n-r.s)/a));return{x:r.x+(o.x-r.x)*c,z:r.z+(o.z-r.z)*c,yaw:Math.atan2(o.x-r.x,o.z-r.z)}}_phase(t){const e=this._t%(xc*2),n=e<xc?"ns":"ew";if(t!==n)return"red";const s=e%xc;return s<Qs.green?"green":s<Qs.green+Qs.amber?"amber":"red"}_buildPoles(t){const e=o=>new Ye({color:o}),n=o=>Se(o);this._lampMats={red:[n(3806482),e(14826286)],amber:[n(3812368),e(16098851)],green:[n(1126427),e(3653722)]},this._heads=[];const s=Se(qt.metalDark),r=Se(2237995);for(const o of this._lights)for(const[a,c]of[[1,1],[-1,-1]]){const l=o.x+a*4.4,h=o.z+c*4.4,u=new et(new It(.14,3.4,.14),s);u.position.set(l,1.7,h),u.castShadow=!0,t.add(u),this._head(t,r,l,h,c>0?0:Math.PI,"ns",3.05),this._head(t,r,l,h,a>0?Math.PI/2:-Math.PI/2,"ew",2.35)}}_head(t,e,n,s,r,o,a){const c=new Wt,l=new et(new It(.26,.72,.18),e);l.position.z=.16,l.castShadow=!0,c.add(l);const h={},u=[["red",.22],["amber",0],["green",-.22]];for(const[d,f]of u){const m=new et(new It(.15,.15,.03),this._lampMats[d][0]);m.position.set(0,f,.16+.095),c.add(m),h[d]=m}c.position.set(n,a,s),c.rotation.y=r,t.add(c),this._heads.push({axis:o,lamps:h})}_paintLights(){const t=`${this._phase("ns")}|${this._phase("ew")}`;if(t!==this._lightSig){this._lightSig=t;for(const e of this._heads){const n=this._phase(e.axis);e.lamps.red.material=this._lampMats.red[n==="red"?1:0],e.lamps.amber.material=this._lampMats.amber[n==="amber"?1:0],e.lamps.green.material=this._lampMats.green[n==="green"?1:0]}}}update(t){this._t+=t,this._paintLights();const e=this.game.player.position;for(const n of this._routes){const{cars:s,length:r,way:o}=n;for(const a of s){let c=ju,l=1/0;for(const m of s){if(m===a)continue;const _=(m.s-a.s+r)%r;_>.01&&_<l&&(l=_)}l<A2&&(c=Math.min(c,Math.max(0,(l-4.6)*1.2)));for(const m of n.stops){const _=(m.s-a.s+r)%r;_<C2&&this._phase(m.axis)!=="green"&&(c=Math.min(c,Math.max(0,(_-.5)*1.3)))}const h=this._at(o,r,a.s+2.6),u=e.x-h.x,d=e.z-h.z;u*u+d*d<3.4*3.4&&(c=0),a.v+=vn.clamp(c-a.v,-6.5*t,T2*t),a.s=(a.s+a.v*t)%r;const f=this._at(o,r,a.s);a.mesh.position.set(f.x,0,f.z),a.mesh.rotation.y=f.yaw}}}}function $u(i,t){const e=Math.hypot(i,t)||1;return[i/e,t/e]}function L2(i,t,e){const n=t.x-i.x,s=t.z-i.z,r=n*n+s*s||1,o=Math.max(0,Math.min(1,((e.x-i.x)*n+(e.z-i.z)*s)/r)),a=i.x+n*o,c=i.z+s*o;return{d:Math.hypot(e.x-a,e.z-c),s:i.s+Math.sqrt(r)*o}}const Ku=2,Zu=[14,40],I2=[2,4.5];class D2{constructor(t){this.game=t;const e=t.renderer.scene,n=t.world.rng.child("pedestrians");this._loops=[];const s={x0:nn.west,z0:nn.back,x1:nn.east,z1:nn.front},r={x0:hi.west,z0:hi.back,x1:hi.east,z1:hi.front};this._addLoop(s,+qs,3),this._addLoop(s,-qs,3),this._addLoop(r,+qs,2),this._addLoop(r,-qs,2),this._walkers=[];for(const o of this._loops)for(let a=0;a<o.count;a++){const c=$i[n.int(0,$i.length-1)],l=new Fr({skin:qt.skinTones[c.skin%qt.skinTones.length],hair:qt.hairTones[c.hair%qt.hairTones.length],hairStyle:c.hairStyle,height:c.height,build:c.build});l.applyOutfit({top:{colour:c.top},bottom:{colour:c.bottom},shoes:{colour:2764083}}),e.add(l.group),this._walkers.push({avatar:l,loop:o,s:o.length/o.count*a+n.range(0,8),dir:n.range(0,1)<.5?1:-1,speed:n.range(1.05,1.5),pause:n.range(...Zu),paused:0})}}_addLoop(t,e,n){const s=t.x0-e,r=t.z0-e,o=t.x1+e,a=t.z1+e,c=[[o,a],[s,a],[s,r],[o,r]],l=[];for(let d=0;d<4;d++){const f=c[(d+3)%4],m=c[d],_=c[(d+1)%4],p=Ju(m,f,Ku),g=Ju(m,_,Ku);l.push(p,g)}l.push([...l[0]]);let h=0;const u=l.map((d,f)=>(f>0&&(h+=Math.hypot(d[0]-l[f-1][0],d[1]-l[f-1][1])),{x:d[0],z:d[1],s:h}));this._loops.push({way:u,length:h,count:n})}_at(t,e){e=(e%t.length+t.length)%t.length;const n=t.way;let s=1;for(;s<n.length-1&&n[s].s<e;)s++;const r=n[s-1],o=n[s],a=o.s-r.s||1,c=Math.min(1,Math.max(0,(e-r.s)/a));return{x:r.x+(o.x-r.x)*c,z:r.z+(o.z-r.z)*c,dx:(o.x-r.x)/a,dz:(o.z-r.z)/a}}update(t){if(!(t>0)||this.game.mode!==$e.PLAY)return;const e=this.game.player.position;for(const n of this._walkers){let s=n.speed;n.paused>0?(n.paused-=t,s=0):(n.pause-=t,n.pause<=0&&(n.paused=Qu(...I2),n.pause=Qu(...Zu)));const r=this._at(n.loop,n.s),o=e.x-r.x,a=e.z-r.z;o*o+a*a<1.4*1.4&&(s=0),n.s+=s*n.dir*t;const c=this._at(n.loop,n.s);n.avatar.group.position.set(c.x,0,c.z),s>.01&&(n.avatar.group.rotation.y=Math.atan2(c.dx*n.dir,c.dz*n.dir)),n.avatar.update(t,s,{})}}}function Ju(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s)||1;return[i[0]+n/r*e,i[1]+s/r*e]}function Qu(i,t){return i+Math.random()*(t-i)}const U2=1.75,wr=.5,bl=.7,N2=1.8,El=.6,Bs=.5,Mr=wr+bl+N2+El+Bs;class k2{constructor(t){this.game=t,this._moments=new Map,t.bus.on(ie.ORDER_SERVED,({id:e})=>{const n=t.shift.rules.orders.get(e);!n||n.source!=="delivery"||n.house==null||this._answer(n.house)})}_answer(t){if(this._moments.has(t))return;const e=ps[t],n=Mf[t];if(!e||!n)return;const s=$i[t%$i.length],r=new Fr({skin:qt.skinTones[s.skin%qt.skinTones.length],hair:qt.hairTones[s.hair%qt.hairTones.length],hairStyle:s.hairStyle,height:s.height,build:s.build});r.applyOutfit({top:{colour:s.top},bottom:{colour:s.bottom},shoes:{colour:3354668}});const o={x:Math.sin(n.rotY),z:Math.cos(n.rotY)},a={x:e.door.x-o.x*1.6,z:e.door.z-o.z*1.6},c={x:e.door.x-o.x*.7,z:e.door.z-o.z*.7};r.group.position.set(a.x,0,a.z),r.group.rotation.y=n.rotY,this.game.renderer.scene.add(r.group),this.game.audio.play("order_taken",{at:{x:e.door.x,y:1.4,z:e.door.z}}),this._moments.set(t,{t:0,hinge:n.hinge,avatar:r,from:a,to:c})}update(t){if(t>0)for(const[e,n]of this._moments){n.t+=t;const s=n.t;let r;s<wr?r=Po(s/wr):s<Mr-Bs?r=1:r=1-Po((s-(Mr-Bs))/Bs),n.hinge.rotation.y=U2*Math.max(0,Math.min(1,r));const o=wr,a=wr+bl,c=Mr-Bs-El,l=Mr-Bs;let h=0,u=0;s<o?h=0:s<a?(h=Po((s-o)/bl),u=1):s<c?h=1:s<l&&(h=1-Po((s-c)/El),u=1),n.avatar.group.position.set(n.from.x+(n.to.x-n.from.x)*h,0,n.from.z+(n.to.z-n.from.z)*h),n.avatar.update(t,u,{}),s>=Mr&&(n.hinge.rotation.y=0,this.game.renderer.scene.remove(n.avatar.group),n.avatar.dispose(),this._moments.delete(e))}}}function Po(i){return i*i*(3-2*i)}class O2{constructor(t){this.game=t,this._bodies=new Map}get room(){return this.game.room}update(t){var o;const e=this.room;if(!e){this._clear();return}const n=Date.now(),s=new Set;let r=null;for(const a of e.roster){if(a.me)continue;s.add(a.id);let c=this._bodies.get(a.id);c||(c=this._spawn(a));const l=e.poseFor(a.id,n);if(!l){c.avatar.group.visible=!1;continue}l.vehicle==="van"?(c.avatar.group.visible=!1,r={x:l.x,z:l.z,yaw:l.yaw}):(c.avatar.group.visible=!0,c.avatar.group.position.set(l.x,l.y,l.z),c.avatar.group.rotation.y=l.yaw),c.avatar.update(t,l.speed,{})}for(const[a,c]of this._bodies)s.has(a)||this._despawn(a,c);(o=this.game.deliveryCar)==null||o.setRemote(r)}_spawn(t){const e=$i[(t.look??0)%$i.length],n=new Fr({skin:qt.skinTones[e.skin%qt.skinTones.length],hair:qt.hairTones[e.hair%qt.hairTones.length],hairStyle:e.hairStyle,height:e.height,build:e.build});n.applyOutfit({top:{colour:11026479},bottom:{colour:2303531},shoes:{colour:1842722}}),n.group.visible=!1,this.game.renderer.scene.add(n.group);const s={avatar:n,name:t.name};return this._bodies.set(t.id,s),s}_despawn(t,e){this.game.renderer.scene.remove(e.avatar.group),e.avatar.dispose(),this._bodies.delete(t)}_clear(){var t;for(const[e,n]of this._bodies)this._despawn(e,n);(t=this.game.deliveryCar)==null||t.setRemote(null)}}const gn={x:Ws.x,y:vt.benchH+.045,z:Ws.z},td={z:vt.z1-.15,y:vt.benchH+.002},z2=1.1,F2={heel:.02,smear:.005,chips:.01,leaf:.014,slice:.011,flat:.006,disc:.018,crown:.036},B2=.72;class H2{constructor(t){this.game=t;const e=t.renderer.scene;this.group=new Wt,this.group.name="build-board",e.add(this.group),this._sig=null,this._mats=[],this._piles=[],this._pilePos=[],this._pileOrderId=null,this._parcel=new Wt;const n=new et(new It(.115,.055,.115),new un({color:15262418}));n.castShadow=!0;const s=new et(new It(.118,.016,.05),new un({color:11026479}));s.position.y=.02,this._parcel.add(n,s),this._parcel.visible=!1,e.add(this._parcel),this.slidingId=null,this._slide=null,this._fixturePos={};for(const r of t.world.activeInteractables())r.id==="pod_toaster"?this._fixturePos.bun=r.pos:r.id==="pod_uhc"?(this._fixturePos.patty=r.pos,this._fixturePos.fillet=r.pos):r.id.startsWith("pod_gun_")?this._fixturePos[r.id.slice(8)]=r.pos:r.id.startsWith("pod_bin_")?this._fixturePos[r.id.slice(8)]=r.pos:r.id==="landing_handover"?this._landingPos=r.pos:r.id==="till_order"&&(this._tillPos=r.pos);this._pulses=[];for(let r=0;r<6;r++){const o=new et(new be(.16,.16),new Ye({color:16777215,transparent:!0,opacity:0,blending:Yo,depthWrite:!1}));o.visible=!1,o.rotation.x=-.4,e.add(o),this._pulses.push({mesh:o,life:0})}this._bunHalf=ri("bun",zn.bun.colour),this._bunHalf.visible=!1,e.add(this._bunHalf),this._eject=null,this._wire()}_wire(){const t=this.game.bus,e=this.game.audio,n=s=>s?{at:{x:s.x,y:s.y,z:s.z}}:{};t.on(ie.ORDER_STEP,({added:s})=>{const r=this._fixturePos[s],o=zn[s];r&&o&&this._pulse(r,o.colour),s==="bun"&&(this._eject={t:0}),e.play("item_place",{...n(r),rate:.94+Math.random()*.12})}),t.on(ie.POD_REFUSED,()=>{e.play("wrong_item",n({x:vt.cx,y:1.2,z:vt.cz}))}),t.on(ie.ORDER_BUILT,()=>{e.play("item_pickup",n({x:gn.x,y:1,z:gn.z}))}),t.on(ie.ORDER_WRAPPED,()=>{e.play("item_place",{...n({x:gn.x,y:1,z:gn.z}),rate:.8})}),this._sendOff=()=>{e.play("item_drop",{...n({x:ve.x0,y:1,z:ve.z0}),rate:1.15})},t.on(ie.ORDER_SERVED,({id:s})=>{const r=this.game.shift.rules.orders.get(s),o=(r==null?void 0:r.source)==="drivethru"?{x:9.9,y:1.2,z:-1}:this._landingPos;e.play("order_complete",n(o))}),t.on(ie.COUNTER_TAKEN,()=>e.play("order_taken",n(this._tillPos))),t.on(ie.COUNTER_PAID,()=>e.play("purchase",n(this._tillPos))),t.on(ie.ORDER_OFFERED,({source:s})=>{var r;if(s==="kiosk"){const o=(r=this.game.world.spots)==null?void 0:r.kiosk_1;e.play("kiosk_order",n(o&&{x:o.x,y:1.4,z:o.z}))}})}_pulse(t,e){const n=this._pulses.find(s=>s.life<=0)||this._pulses[0];n.life=.35,n.mesh.material.color.set(e),n.mesh.position.set(t.x,t.y+.06,t.z+.02),n.mesh.visible=!0}detectSend(){if(this._wrappedId==null)return;const t=this.game.shift.rules.orders.get(this._wrappedId);(!t||t.state!=="wrapped")&&(t&&(t.state==="ready"||t.state==="landed")&&this.slidingId===null&&(this.slidingId=this._wrappedId,this._slide={t:0},this._sendOff()),this._wrappedId=null)}update(t){this.detectSend(),this._syncStack(),this._animate(t)}_syncStack(){var o;const t=this.game.shift.rules.orders.active(),e=t?`${t.id}:${t.step}:${t.state}`:null;if(e===this._sig)return;this._sig=e;for(const a of[...this.group.children])this.group.remove(a);for(const a of this._mats)a.dispose();if(this._mats=[],this._piles=[],this._parcel.visible=this._slide!==null,(!t||this._pileOrderId!==t.id)&&(this._pilePos=[],this._pileOrderId=(t==null?void 0:t.id)??null),!t||t.state==="ready")return;if(t.state==="wrapped"){this._wrappedId=t.id,this._parcel.visible=!0,this._parcel.position.set(gn.x,gn.y+.028,gn.z),this._parcel.rotation.set(0,.12,0);return}const n=t.items.map((a,c)=>{var l;return Wi[a].sequence.length+((l=t.mods)!=null&&l[c]?1:0)});let s=0,r=0;for(let a=0;a<n.length&&s<t.step;a++){const c=s,l=Math.min(t.step-c,n[a]);if(s+=n[a],l<=0)break;const h=l===n[a],u=new Wt,d=(p,g)=>((t.id*7+(c+p)*13)%5-2)*.003*g;let f=0;for(let p=0;p<l;p++){const g=zn[t.sequence[c+p]];if(!g)continue;const v=F2[g.shape]??.012;this._layer(u,g,f+v/2,d(p,1),d(p,-1)),f+=v}if(h){const p=ri("bun",zn.bun.colour);this._own(p),p.position.y=f,u.add(p)}let m;if(h)m=new I(gn.x+(r%2?.075:-.075)*(n.length>1?1:0),gn.y,gn.z),r++;else{const p=t.sequence[c+l-1],g=((o=this._fixturePos[p])==null?void 0:o.x)??gn.x;m=new I(g,td.y,td.z)}const _=this._pilePos[a];u.position.copy(_||m),this.group.add(u),this._piles.push({group:u,target:m,item:a})}}_layer(t,e,n,s,r){const o=(a,c=1,l=1,h=1,u=0,d=0)=>{this._own(a),a.scale.multiply(new I(c,l,h)),a.position.set(s+u,n,r+d),t.add(a)};switch(e.shape){case"smear":o(ri("flat",e.colour),.62,.5,.62);break;case"chips":o(ri("chip",e.colour),1,1,1,-.018,-.008),o(ri("chip",e.colour),1,1,1,.016,-.014),o(ri("chip",e.colour),1,1,1,.004,.019);break;case"leaf":o(ri("blob",e.colour),1.5,.38,1.5);break;case"slice":o(ri("disc",e.colour),.92,.6,.92);break;default:o(ri(e.shape,e.colour))}}_own(t){t.traverse(e=>{e.material&&this._mats.push(e.material)})}_animate(t){var e,n;for(const s of this._piles){const r=s.group,o=s.target,a=o.x-r.position.x,c=o.y-r.position.y,l=o.z-r.position.z,h=Math.hypot(a,c,l);if(h>5e-4){const u=Math.min(h,z2*t);r.position.x+=a/h*u,r.position.y+=c/h*u,r.position.z+=l/h*u}((e=this._pilePos)[n=s.item]||(e[n]=new I)).copy(r.position)}for(const s of this._pulses)s.life<=0||(s.life-=t,s.mesh.material.opacity=Math.max(0,s.life/.35)*.9,s.life<=0&&(s.mesh.visible=!1));if(this._eject){const s=this._fixturePos.bun;this._eject.t+=t/.35;const r=Math.min(1,this._eject.t);s&&(this._bunHalf.visible=!0,this._bunHalf.position.set(s.x,vt.benchH+.3-.27*r*r,vt.cz+.24+.16*r),this._bunHalf.rotation.x=.3*(1-r)),r>=1&&(this._eject=null,this._bunHalf.visible=!1)}if(this._slide){this._slide.t+=t/B2;const s=Math.min(1,this._slide.t),r=this.game.shift.rules.orders.live().filter(_=>_.state==="landed"||_.state==="ready"),o=Math.max(0,Math.min(r.findIndex(_=>_.id===this.slidingId),3)),a={x:Js.x0+.22+o*.42,y:Js.y+.03,z:Js.z},c=[{x:gn.x,y:gn.y+.03,z:gn.z},{x:ve.x0,y:1,z:ve.z0},{x:ve.x1,y:.93,z:ve.z1},a],l=[.18,.62,1];let h=0;for(;h<2&&s>l[h];)h++;const u=h===0?0:l[h-1],d=(s-u)/(l[h]-u),f=c[h],m=c[h+1];this._parcel.visible=!0,this._parcel.scale.setScalar(1.25-.25*s),this._parcel.position.set(f.x+(m.x-f.x)*d,f.y+(m.y-f.y)*d,f.z+(m.z-f.z)*d),this._parcel.rotation.y+=t*2.2,s>=1&&(this._slide=null,this.slidingId=null,this._parcel.visible=!1,this._parcel.rotation.set(0,0,0),this._parcel.scale.setScalar(1))}}}const Lo=.58,ed=.075;function G2(i,t,e,n){if(i.set(t),n>0)return i.lerp(new kt(1314572),Math.min(1,n)),i;const s=new kt(t).lerp(new kt(14197900),.45);return i.copy(s.lerp(new kt(t),Math.min(1,e))),i}const V2={patty:7031349,fillet:13216097,fries:14726213};class W2{constructor(t){this.game=t;const e=t.renderer.scene;this._markers=[];const n=(a,c,l,h,u)=>{const d=new Wt,f=new un({color:7031349}),m=new It(1,1,1),_=[];for(let x=0;x<u;x++){const M=new et(m,f),A=h?.2:.17,b=h?.045:.115;M.scale.set(A,b,A),M.position.set(x%2*.24-.12,l+b/2,Math.floor(x/2)*.22-.11),M.castShadow=!0,_.push(M),d.add(M)}const p=new Wt,g=new et(new be(Lo,ed),new Ye({color:1053722,transparent:!0,opacity:.72,depthWrite:!1}));g.renderOrder=3;const v=new et(new be(1,1),new Ye({color:7317596,depthWrite:!1}));return v.renderOrder=4,p.add(g,v),p.position.set(0,l+.3,.32),d.add(p),d.position.set(a,0,c),d.visible=!1,e.add(d),{g:d,mat:f,bar:p,fill:v,pieces:_}};this._markers.push({key:"patty",...n(Oe.grill.plates.patty,Oe.grill.z,Oe.grill.top,!0,Vo.patty.batch)}),this._markers.push({key:"fillet",...n(Oe.grill.plates.fillet,Oe.grill.z,Oe.grill.top,!0,Vo.fillet.batch)}),this._markers.push({key:"fry0",...n(Oe.fryer.wells[0],Oe.fryer.z,Oe.fryer.top,!1,1)}),this._markers.push({key:"fry1",...n(Oe.fryer.wells[1],Oe.fryer.z,Oe.fryer.top,!1,1)}),this._pips={patty:[],fillet:[]};const s=new be(.055,.03);for(const a of["patty","fillet"]){const c=sn.hold[a].cap;for(let l=0;l<c;l++){const h=new et(s,new Ye({color:14263361}));h.position.set(Ln.uhc.x-.24+l*.082,Ln.uhc.rows[a],Ln.uhc.z),this.game.renderer.scene.add(h),this._pips[a].push(h)}}this._heaps={};const r=sn.boxes.produce,o={pickle:8030778,onion:15261904,lettuce:5208634,tomato:10236968,cheese:13210159};r.forEach((a,c)=>{const l=new et(new It(.12,1,.44),new un({color:o[a]}));l.position.set(Ln.bins.x0+c*Ln.bins.pitch,Ln.bins.y,Ln.bins.z),e.add(l),this._heaps[a]=l}),this._bunStack=new et(new It(.34,1,.34),new un({color:13210159})),this._bunStack.position.set(Ln.buns.x,Ln.buns.y,Ln.buns.z),e.add(this._bunStack),this._chipHeap=new et(new It(.3,1,.3),new un({color:14726213})),this._chipHeap.position.set(Oe.dump.x,Oe.dump.y,Oe.dump.z),this._chipHeap.castShadow=!0,e.add(this._chipHeap),this._col=new kt}update(){const t=this.game.shift.rules,e=t.minute,n=this.game.camera.active,s=t.kitchen.cooks.filter(a=>a.item==="fries");this._fryBind||(this._fryBind=[null,null]);for(let a=0;a<2;a++)this._fryBind[a]!=null&&!s.some(c=>c.id===this._fryBind[a])&&(this._fryBind[a]=null);for(const a of s){if(this._fryBind.includes(a.id))continue;const c=this._fryBind.indexOf(null);c>=0&&(this._fryBind[c]=a.id)}for(const a of this._markers){const c=a.key==="patty"?t.kitchen.batchOf("patty"):a.key==="fillet"?t.kitchen.batchOf("fillet"):s.find(m=>m.id===this._fryBind[a.key==="fry0"?0:1])||null;if(a.g.visible=!!c,!c)continue;const l=Vo[c.item],h=Math.min(1,Math.max(0,(e-c.startedAt)/l.cookMin)),u=e>c.readyAt+l.pullWindowMin?Math.min(1,(e-c.readyAt-l.pullWindowMin)/l.graceMin):0;a.mat.color.copy(G2(this._col,V2[c.item],h,u));const d=c.state==="ready",f=d?1:h;a.fill.scale.set(Math.max(.001,Lo*f),ed,1),a.fill.position.x=-Lo/2+Lo*f/2,a.fill.material.color.set(u>0?13589317:d?14263361:7317596),n&&a.bar.quaternion.copy(n.quaternion)}for(const a of["patty","fillet"]){const c=t.supply.holdCount(a);this._pips[a].forEach((l,h)=>{l.visible=h<c})}for(const[a,c]of Object.entries(this._heaps)){const l=t.supply.binCount(a)/sn.bins.cap;c.visible=l>0,c.scale.y=Math.max(.012,l*.075),c.position.y=Ln.bins.y+c.scale.y/2}const r=t.supply.buns/sn.buns.cap;this._bunStack.visible=r>0,this._bunStack.scale.y=Math.max(.02,r*.34),this._bunStack.position.y=Ln.buns.y+this._bunStack.scale.y/2;const o=t.supply.holdCount("fries")/sn.hold.fries.cap;this._chipHeap.visible=o>0,this._chipHeap.scale.y=Math.max(.02,o*.14),this._chipHeap.position.y=Oe.dump.y+this._chipHeap.scale.y/2}}const Io=[{id:"trainee",label:"Trainee",need:{}},{id:"fry_cook",label:"Fry Cook",need:{cooks:6}},{id:"runner",label:"Runner",need:{trays:8,cooks:6}},{id:"counter_crew",label:"Counter Crew",need:{till:12,trays:8}},{id:"assembler",label:"Assembler",need:{built:30,till:12}},{id:"grill_master",label:"Grill Master",need:{built:30,cooks:25}},{id:"window_ace",label:"Window Ace",need:{dt:20,cooks:25}},{id:"all_star",label:"All-Star",need:{served:120,dt:20,built:60}}],X2=["order:served","order:lost","order:wrapped","counter:paid","order:bagged","order:tray","dt:bagged","dlv:bagged","cook:pulled","side:added","supply:restocked"];class q2{constructor(){this.totals={served:0,lost:0,takings:0,tips:0,built:0,till:0,bags:0,trays:0,dt:0,deliveries:0,cooks:0,sides:0,restocks:0}}onEvent(t,e={}){if(e.by&&e.by!=="player")return;const n=this.totals;switch(t){case"order:served":n.served+=1,n.takings+=e.value||0,n.tips+=e.tip||0;break;case"order:lost":n.lost+=1;break;case"order:wrapped":n.built+=1;break;case"counter:paid":n.till+=1;break;case"order:bagged":n.bags+=1;break;case"order:tray":n.trays+=1;break;case"dt:bagged":n.dt+=1;break;case"dlv:bagged":n.deliveries+=1;break;case"cook:pulled":n.cooks+=1;break;case"side:added":n.sides+=1;break;case"supply:restocked":n.restocks+=1;break}}rank(){let t=Io[0];for(const e of Io)Object.entries(e.need).every(([s,r])=>(this.totals[s]||0)>=r)&&(t=e);return t}nextRank(){const t=Io.indexOf(this.rank()),e=Io[t+1];if(!e)return null;const n=Object.entries(e.need).filter(([s,r])=>(this.totals[s]||0)<r).map(([s,r])=>({what:s,have:this.totals[s]||0,need:r}));return{rank:e,short:n}}serialize(){return{totals:{...this.totals}}}load(t){if(t!=null&&t.totals)for(const e of Object.keys(this.totals)){const n=Number(t.totals[e]);Number.isFinite(n)&&n>=0&&(this.totals[e]=n)}}merge(t){if(t!=null&&t.totals)for(const e of Object.keys(this.totals)){const n=Number(t.totals[e]);Number.isFinite(n)&&n>this.totals[e]&&(this.totals[e]=n)}}}const Ql="bb_save",sa=1;function th(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}function ra(){return{v:sa,rev:0,updatedAt:0,systems:{}}}function bf(i){return!i||typeof i!="object"||(Number(i.v)||0)>sa?ra():{v:sa,rev:Number.isFinite(i.rev)?Math.max(0,Math.floor(i.rev)):0,updatedAt:Number.isFinite(i.updatedAt)?i.updatedAt:0,systems:i.systems&&typeof i.systems=="object"?i.systems:{}}}function nd(){const i=th();if(!i)return ra();try{return bf(JSON.parse(i.getItem(Ql)||"null"))}catch{return ra()}}function Y2(){const i=th();if(!i)return!1;try{const t=JSON.parse(i.getItem(Ql)||"null");return!!t&&Number(t.v)>sa}catch{return!1}}function j2(i){var e;const t={...bf(i),rev:(Number(i==null?void 0:i.rev)||0)+1,updatedAt:Date.now()};try{(e=th())==null||e.setItem(Ql,JSON.stringify(t))}catch{}return t}const $2=4e3;class K2{constructor(t){this.game=t,this.providers=new Map,this._dirty=!1,this._lastWrite=0,this._save=nd(),this._readOnly=Y2(),this._readOnly&&console.warn("[save] bb_save was written by a newer build — this session will not write it"),typeof document<"u"&&(document.addEventListener("visibilitychange",()=>{document.hidden&&this.flush()}),window.addEventListener("pagehide",()=>this.flush()))}register(t,e){var s;this.providers.set(t,e);const n=(s=this._save.systems)==null?void 0:s[t];if(n!==void 0)try{e.load(n)}catch(r){console.error("[save] load failed for",t,r)}return e}wire(t){for(const e of X2)this.game.bus.on(e,n=>{this.game.room&&!this.game.room.isHost||(t.onEvent(e,n),this._dirty=!0)})}touch(){this._dirty=!0}update(){this._dirty&&(Date.now()-this._lastWrite<$2||this.flush())}flush(){var n,s;if(!this._dirty||this._readOnly)return;const t=nd(),e={...t.systems};for(const[r,o]of this.providers)try{(s=o.merge)==null||s.call(o,(n=t.systems)==null?void 0:n[r]),e[r]=o.serialize()}catch(a){console.error("[save] serialize failed for",r,a)}this._save=j2({...t,systems:e}),this._dirty=!1,this._lastWrite=Date.now()}}const An=.34,id=1.75,Z2=1.62,J2=22,vc=.42,Q2={top:{colour:3817286},bottom:{colour:2303531},shoes:{colour:2764083},head:{id:"cap",colour:11026479}};class tM{constructor(t){var n,s,r;this.game=t,this.position=new I(0,0,0),this.velocity=new I,this.facing=0,this.onGround=!0,this.state="normal",this.eyeHeight=Z2,this.horizontalSpeed=0,this.avatar=new Fr({skin:(n=qt.skinTones)==null?void 0:n[1],hair:(s=qt.hairTones)==null?void 0:s[1],hairStyle:"short",height:1,build:1}),this.avatar.applyOutfit(Q2),t.renderer.scene.add(this.avatar.group);const e=(r=t.world.spots)==null?void 0:r.spawn;this.teleport(e?e.clone():new I(0,0,14)),this.walkSpeed=4.6,this.runSpeed=9}teleport(t){this.position.copy(t),this.velocity.set(0,0,0),this.avatar.group.position.copy(t)}get isBusy(){return this.state!=="normal"}update(t){if(this.vehicle){this.game.mode===$e.PLAY&&this.vehicle.ride(t),this.avatar.group.position.copy(this.position),this.avatar.group.rotation.y=this.facing,this.avatar.update(t,0,{sitting:!0});return}this.state==="normal"&&this.game.mode===$e.PLAY?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this.state==="normal"&&this._applyGravity(t)),this.avatar.group.position.copy(this.position),this.avatar.group.rotation.y=this.facing,this.avatar.update(t,this.horizontalSpeed,{sitting:!1,sleeping:!1,tired:!1})}_move(t){const e=this.game.input,n=e.axis(),{forward:s,right:r}=this.game.camera.basis(),o=e.isDown("sprint"),a=o?this.runSpeed:this.walkSpeed,c=new I().addScaledVector(s,n.y).addScaledVector(r,n.x);c.lengthSq()>0?(c.normalize(),this.facing=Math.atan2(c.x,c.z),this.game.camera.fovBoost=o?5:0):this.game.camera.fovBoost=0;const l=c.multiplyScalar(a),h=this.onGround?14:3;this.velocity.x+=(l.x-this.velocity.x)*Math.min(1,h*t),this.velocity.z+=(l.z-this.velocity.z)*Math.min(1,h*t),e.wasPressed("jump")&&this.onGround&&(this.velocity.y=6.2,this.onGround=!1),this._applyGravity(t),this._collide(t);const u=this._floorUnder();this.position.y<u&&(this.position.y=u,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_floorUnder(){const t=this.game.world,{x:e,z:n,y:s}=this.position;let r=t.groundHeight(e,n);for(const o of t.query(this.position,An+.5))o.walkable&&(e<o.min.x-An||e>o.max.x+An||n<o.min.z-An||n>o.max.z+An||o.max.y<=s+vc&&o.max.y>r&&(r=o.max.y));return r}_insideSolid(){const t=this.game.world,e=An-.06;for(const n of t.query(this.position,An+.3)){if(this.position.y+id<n.min.y||this.position.y>n.max.y||n.max.y<=this.position.y+vc)continue;const s=Math.max(n.min.x,Math.min(this.position.x,n.max.x)),r=Math.max(n.min.z,Math.min(this.position.z,n.max.z)),o=this.position.x-s,a=this.position.z-r;if(o*o+a*a<e*e)return!0}return!1}_applyGravity(t){this.velocity.y-=J2*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder();this.position.y<=e&&(this.position.y=e,this.velocity.y=0,this.onGround=!0)}_collide(t){const e=this.game.world;this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let s=0;s<4;s++){let r=!1;for(const o of e.query(this.position,An+.6)){if(this.position.y+id<o.min.y||this.position.y>o.max.y||o.max.y<=this.position.y+vc)continue;const a=Math.max(o.min.x,Math.min(this.position.x,o.max.x)),c=Math.max(o.min.z,Math.min(this.position.z,o.max.z));let l=this.position.x-a,h=this.position.z-c;const u=l*l+h*h;if(u>=An*An)continue;if(u>1e-8){const f=Math.sqrt(u),m=An-f;l/=f,h/=f,this.position.x+=l*m,this.position.z+=h*m}else{const f=[[this.position.x-o.min.x,-1,0],[o.max.x-this.position.x,1,0],[this.position.z-o.min.z,0,-1],[o.max.z-this.position.z,0,1]].sort((m,_)=>m[0]-_[0])[0];l=f[1],h=f[2],this.position.x+=l*(f[0]+An),this.position.z+=h*(f[0]+An)}const d=this.velocity.x*l+this.velocity.z*h;d<0&&(this.velocity.x-=l*d,this.velocity.z-=h*d),r=!0}if(!r)break}this._insideSolid()?(this._lastSafe&&this.position.copy(this._lastSafe),this.velocity.x=0,this.velocity.z=0):(this._lastSafe||(this._lastSafe=new I)).copy(this.position);const n=180;this.position.x=vn.clamp(this.position.x,-n,n),this.position.z=vn.clamp(this.position.z,-n,n)}setState(t){this.state=t,this.game.bus.emit("player:state",{state:t})}serialize(){return{position:this.position.toArray(),facing:this.facing}}load(t){t&&(this.teleport(new I().fromArray(t.position)),this.position.y=Math.max(this.position.y,this._floorUnder()),this.avatar.group.position.copy(this.position),this.facing=t.facing||0)}}const eM="modulepreload",nM=function(i){return"/burgerbarn/"+i},sd={},iM=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=nM(c),c in sd)return;sd[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":eM,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Do=210,yc=330,Uo=2,Ee={x:10,y:34,w:190,h:218};class sM{constructor(t){this.game=t,this._repaint=0;const e=document.createElement("canvas");e.id="gps",e.width=Do*Uo,e.height=yc*Uo,document.getElementById("ui").appendChild(e),this.el=e,this.ctx=e.getContext("2d"),this._visible=!1,this._buildGraph()}_buildGraph(){const t=nn,e=hi,n=this._nodes=[{x:t.west,z:t.front},{x:t.east,z:t.front},{x:t.west,z:t.back},{x:t.east,z:t.back},{x:t.west,z:e.front},{x:t.east,z:e.front},{x:t.west,z:e.back},{x:t.east,z:e.back},{x:e.west,z:t.front},{x:e.east,z:t.front},{x:e.west,z:t.back},{x:e.east,z:t.back},{x:e.west,z:e.front},{x:e.east,z:e.front},{x:e.west,z:e.back},{x:e.east,z:e.back}];this._edges=[[0,1],[2,3],[0,2],[1,3],[0,4],[1,5],[2,6],[3,7],[0,8],[1,9],[2,10],[3,11],[12,4],[4,5],[5,13],[14,6],[6,7],[7,15],[12,8],[8,10],[10,14],[13,9],[9,11],[11,15]].map(([s,r])=>({a:s,b:r,len:Math.hypot(n[s].x-n[r].x,n[s].z-n[r].z)})),this._decor=[[[-14.4,31.5],[-14.4,26]],[[12.15,31.5],[12.15,26]],[[-21,31.5],[-21,-19.2]],[[-21,-19.2],[-5.5,-19.2]],[[-5.5,-19.2],[-5.5,-31]]]}_snap(t,e){let n=null;const s=this._nodes;return this._edges.forEach((r,o)=>{const a=s[r.a],c=s[r.b],l=c.x-a.x,h=c.z-a.z,u=Math.max(0,Math.min(1,((t-a.x)*l+(e-a.z)*h)/(l*l+h*h))),d=a.x+l*u,f=a.z+h*u,m=Math.hypot(t-d,e-f);(!n||m<n.d)&&(n={i:o,t:u,px:d,pz:f,d:m})}),n}_route(t,e){if(t.i===e.i){const _=Math.abs(e.t-t.t)*this._edges[t.i].len;return{pts:[t,e].map(p=>({x:p.px,z:p.pz})),len:_}}const n=this._nodes.length,s=new Array(n).fill(1/0),r=new Array(n).fill(-1),o=this._edges[t.i],a=this._edges[e.i];s[o.a]=t.t*o.len,s[o.b]=(1-t.t)*o.len;const c=new Array(n).fill(!1);for(let _=0;_<n;_++){let p=-1;for(let g=0;g<n;g++)!c[g]&&(p<0||s[g]<s[p])&&(p=g);if(p<0||s[p]===1/0)break;c[p]=!0;for(let g=0;g<this._edges.length;g++){const v=this._edges[g],x=v.a===p?v.b:v.b===p?v.a:-1;if(x<0)continue;const M=s[p]+v.len;M<s[x]&&(s[x]=M,r[x]=p)}}const l=s[a.a]+e.t*a.len,h=s[a.b]+(1-e.t)*a.len;let u=l<=h?a.a:a.b;const d=Math.min(l,h),f=[];for(;u>=0;)f.unshift(u),u=r[u];const m=[{x:t.px,z:t.pz}];for(const _ of f)m.push({x:this._nodes[_].x,z:this._nodes[_].z});return m.push({x:e.px,z:e.pz}),{pts:m,len:d}}update(t){const e=!!this.game.player.vehicle;e!==this._visible&&(this._visible=e,this.el.classList.toggle("on",e)),e&&(this._repaint-=t,!(this._repaint>0)&&(this._repaint=.12,this._paint()))}_paint(){const t=this.game,e=this.ctx;e.setTransform(Uo,0,0,Uo,0,0);const n=t.shift.rules.orders.carriedBy("player"),s=n&&n.source==="delivery"?n:null,o=s?ps[s.house].door:{x:-5.5,z:-19},a=s?ps[s.house].name:"back to the Barn",c=t.player.position,l=this._route(this._snap(c.x,c.z),this._snap(o.x,o.z));e.clearRect(0,0,Do,yc),rd(e,0,0,Do,yc,18),e.fillStyle="rgba(16, 19, 24, 0.94)",e.fill(),e.strokeStyle="rgba(241, 236, 225, 0.18)",e.lineWidth=1.5,e.stroke(),e.fillStyle="#c9a961",e.font="bold 13px Segoe UI, system-ui, sans-serif",e.fillText("BARN MAPS",12,22),e.fillStyle="#9aa3ad",e.font="11px Segoe UI, system-ui, sans-serif",e.textAlign="right",e.fillText(t.clock.timeLabel,Do-12,22),e.textAlign="left",rd(e,Ee.x,Ee.y,Ee.w,Ee.h,8),e.save(),e.clip(),e.fillStyle="#151b14",e.fillRect(Ee.x,Ee.y,Ee.w,Ee.h);const h=Math.min(Ee.w/215,Ee.h/195),u=v=>Ee.x+Ee.w/2+v*h,d=v=>Ee.y+Ee.h/2+v*h;e.strokeStyle="#3b4451",e.lineWidth=4,e.lineCap="round";for(const v of this._edges){const x=this._nodes[v.a],M=this._nodes[v.b];e.beginPath(),e.moveTo(u(x.x),d(x.z)),e.lineTo(u(M.x),d(M.z)),e.stroke()}e.lineWidth=2.5;for(const[v,x]of this._decor)e.beginPath(),e.moveTo(u(v[0]),d(v[1])),e.lineTo(u(x[0]),d(x[1])),e.stroke();e.fillStyle="#a8402f",e.fillRect(u(-2)-4,d(-1)-3.5,8,7),e.strokeStyle="#c9a961",e.lineWidth=2.5,e.beginPath(),l.pts.forEach((v,x)=>x?e.lineTo(u(v.x),d(v.z)):e.moveTo(u(v.x),d(v.z))),e.stroke();const f=u(o.x),m=d(o.z);e.strokeStyle="#e2543e",e.lineWidth=2,e.beginPath(),e.moveTo(f,m),e.lineTo(f,m-9),e.stroke(),e.fillStyle="#e2543e",e.beginPath(),e.arc(f,m-11,3.5,0,Math.PI*2),e.fill();const _=t.deliveryCar.heading;e.save(),e.translate(u(c.x),d(c.z)),e.rotate(Math.PI-_),e.fillStyle="#f1ece1",e.beginPath(),e.moveTo(0,-6),e.lineTo(4.5,5),e.lineTo(0,2.4),e.lineTo(-4.5,5),e.closePath(),e.fill(),e.restore(),e.restore(),e.fillStyle="#f1ece1",e.font="bold 15px Segoe UI, system-ui, sans-serif",e.fillText(a,12,Ee.y+Ee.h+26),e.fillStyle="#9aa3ad",e.font="12px Segoe UI, system-ui, sans-serif";let g=`${Math.round((l.len+5)/5)*5} m by road`;if(s){g+=` · #${s.id}`;const v=(s.dueBy??0)-t.shift.rules.minute;e.fillText(g,12,Ee.y+Ee.h+44),e.font="bold 13px Segoe UI, system-ui, sans-serif",v>0?(e.fillStyle=v>8?"#7fb069":"#f5a623",e.fillText(`due in ${Math.ceil(v)} min`,12,Ee.y+Ee.h+62)):(e.fillStyle="#e2543e",e.fillText("OVERDUE — no tip",12,Ee.y+Ee.h+62));return}e.fillText(g,12,Ee.y+Ee.h+44)}}function rd(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const Xo="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Ef=5,od="bb_player_id",Tf="bb_player_name";function Af(i){const t=[],e=256-256%Xo.length,n=typeof globalThis<"u"?globalThis.crypto:null;for(;t.length<i;){let s;if(n!=null&&n.getRandomValues)s=n.getRandomValues(new Uint8Array(i*2));else{s=new Uint8Array(i*2);for(let r=0;r<s.length;r++)s[r]=Math.floor(Math.random()*256)}for(const r of s)if(!(r>=e)&&(t.push(Xo[r%Xo.length]),t.length===i))break}return t.join("")}function rM(){return Af(Ef)}function ad(i){if(!i)return null;const t=String(i).trim().toUpperCase().replace(/[^A-Z0-9]/g,"");if(t.length!==Ef)return null;for(const e of t)if(!Xo.includes(e))return null;return t}function eh(){try{return typeof sessionStorage<"u"?sessionStorage:null}catch{return null}}function oM(){const i=eh();let t=i==null?void 0:i.getItem(od);return t||(t="p_"+Af(10).toLowerCase(),i==null||i.setItem(od,t)),t}function cd(i="Crew"){const t=eh();return(t==null?void 0:t.getItem(Tf))||i}function aM(i){var e;const t=String(i).trim().slice(0,16);return t?((e=eh())==null||e.setItem(Tf,t),t):null}function cM(i){if(typeof location>"u")return`?room=${i}`;const t=new URL(location.href);return t.searchParams.set("room",i),t.toString()}class lM{constructor(t){this.game=t;const e=document.getElementById("ui");e.innerHTML=`
      <div id="crosshair"></div>
      <div id="prompt"><span class="key">E</span><span id="prompt-label"></span></div>
      <div id="toast"></div>
      <div id="pause">
        <h1>BURGER BARN</h1>
        <p>Click to walk in &middot; WASD to move &middot; E to use &middot; Shift to run &middot; V for camera</p>
        <div id="career"></div>
        <div id="coop">
          <div id="coop-solo">
            <button class="coop-btn" id="coop-host">Host a co-op shift</button>
            <button class="coop-btn" id="coop-join">Join with a code</button>
          </div>
          <div id="coop-room" style="display:none">
            <div id="coop-code"></div>
            <div id="roster"></div>
            <button class="coop-btn" id="coop-copy">Copy invite link</button>
            <button class="coop-btn" id="coop-leave">Leave the room</button>
          </div>
        </div>
      </div>
      <div id="nethud"></div>`,this.prompt=document.getElementById("prompt"),this.promptLabel=document.getElementById("prompt-label"),this.toastEl=document.getElementById("toast"),this.pauseEl=document.getElementById("pause"),this._toastTimer=null,this.pauseEl.addEventListener("click",n=>{n.target.closest("#coop")||t.setMode($e.PLAY,"resume")}),this._wireCoop(),t.bus.on("game:mode",({mode:n})=>{this.pauseEl.classList.toggle("hidden",n===$e.PLAY),n!==$e.PLAY&&this._renderCareer()}),t.bus.on("interaction:target",({label:n})=>this.showPrompt(n)),this.gps=new sM(t)}showPrompt(t){if(!t){this.prompt.style.display="none";return}this.promptLabel.textContent=t,this.prompt.style.display="block"}toast(t,e=2600){this.toastEl.textContent=t,this.toastEl.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this.toastEl.style.opacity="0"},e)}update(t){this.gps.update(t)}_renderCareer(){const t=document.getElementById("career"),e=this.game.career;if(!t||!e)return;const n=e.totals;if(!n.served&&!n.cooks&&!n.till){t.innerHTML='<span class="career-rank">Trainee</span> — your first shift starts when you do.';return}const s=e.nextRank(),r=s?` · next: ${s.rank.label} (${s.short.map(o=>`${o.have}/${o.need} ${o.what}`).join(", ")})`:" · top of the ladder";t.innerHTML=`<span class="career-rank">${e.rank().label}</span> — ${n.served} served · $${n.takings.toFixed(2)} taken · $${n.tips.toFixed(2)} tips${r}`}_wireCoop(){const t=n=>document.getElementById(n);t("coop-host").addEventListener("click",()=>this._startCoop(rM())),t("coop-join").addEventListener("click",()=>{const n=ad(window.prompt("Room code?")||"");if(!n){this.toast("That does not look like a room code.");return}this._startCoop(n)}),t("coop-copy").addEventListener("click",()=>{var s,r;const n=(s=this.game.room)==null?void 0:s.code;n&&((r=navigator.clipboard)==null||r.writeText(cM(n)),this.toast("Invite link copied."))}),t("coop-leave").addEventListener("click",async()=>{var n;await((n=this.game.room)==null?void 0:n.leave()),this.game.room=null}),t("roster").addEventListener("click",n=>{var o;const s=n.target.closest("[data-assign]");if(!s)return;const r=s.dataset.assign==="-"?null:s.dataset.assign;(o=this.game.room)==null||o.setAssignment(s.dataset.pid,r)}),this.game.bus.on("net:room",n=>this._renderCoop(n));const e=ad(new URLSearchParams(location.search).get("room")||"");e&&setTimeout(()=>this._startCoop(e,{quiet:!0}),100)}async _startCoop(t,{quiet:e=!1}={}){if(this.game.room)return;if(!e){const o=window.prompt("Your crew name?",cd("Crew"));if(o===null)return;aM(o||"Crew")}this.toast("Connecting…",8e3);const{createRoom:n}=await iM(async()=>{const{createRoom:o}=await import("./Room-Bce__efJ.js");return{createRoom:o}},[]),s=[...oM()].reduce((o,a)=>o*31+a.charCodeAt(0)>>>0,0)%8,r=await n(this.game,t,{name:cd("Crew"),look:s});if(!r){this.toast("Could not reach the room server.");return}if(r.error){this.toast(r.error);return}this.game.room=r,r.attach(this.game.shift.rules),this.toast(`In room ${t} — ${r.isHost?"hosting":"joined"}.`,4e3)}_renderCoop(t){const e=a=>document.getElementById(a),n=!!(t!=null&&t.code);if(e("coop-solo").style.display=n?"none":"",e("coop-room").style.display=n?"":"none",!n){e("nethud").textContent="";return}e("coop-code").textContent=`Room ${t.code}${t.stale?" — host quiet…":""}`;const s=t.role==="host",r=["pod","counter","window","runs"];e("roster").innerHTML=t.players.map(a=>{const c=`${a.host?"★ ":""}${a.me?"You":ld(a.name)}`,l=a.station?`<span class="badge">${ld(a.station)}</span>`:"",h=s&&!a.me?r.map(u=>`<button class="assign${a.station===u?" on":""}" data-assign="${u}" data-pid="${a.id}">${u}</button>`).join("")+`<button class="assign" data-assign="-" data-pid="${a.id}">–</button>`:"";return`<div class="crew-row"><span class="crew-name">${c}</span>${l}${h}</div>`}).join("");const o=t.myStation?` · you: ${t.myStation.toUpperCase()}`:"";e("nethud").textContent=`${t.code} · ${t.players.length} crew${t.connected?"":" · reconnecting…"}${o}`}}function ld(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const $e={PLAY:"play",MENU:"menu"};class hM{constructor(t,e={}){this.canvas=t,this.seed=e.seed||"burgerbarn",this.bus=new kf,this.rng=new oa(this.seed),this.clock=new Of(this.bus),this.input=new Bf(this.bus,t),this.audio=new jf(this),this.mode=$e.MENU,this.running=!1,this._accum=0,this._last=0,this.fixedStep=1/60}build(){return this.renderer=new uv(this.canvas,this),this.world=new Iy(this),this.world.generate(),this.player=new tM(this),this.camera=new fv(this),this.interaction=new Uy(this),this.shift=new $y(this),this.customers=new x2(this),this.cars=new w2(this),this.deliveryCar=new E2(this),this.traffic=new P2(this),this.pedestrians=new D2(this),this.houseLife=new k2(this),this.room=null,this.peers=new O2(this),this.buildBoard=new H2(this),this.kitchenBoard=new W2(this),this.career=new q2,this.saves=new K2(this),this.saves.register("career",this.career),this.saves.wire(this.career),this.ui=new lM(this),this.camera.setMode("first"),this.camera.yaw=Math.PI,this._wireGlobalInput(),this.input.enabled=!1,this.bus.emit("game:ready",{game:this}),this}_wireGlobalInput(){this.bus.on("action:camera",()=>{this.mode===$e.PLAY&&this.camera.cycle()}),this.bus.on("input:pointerlock",({locked:t})=>{!t&&this.mode===$e.PLAY&&this.setMode($e.MENU,"pause")})}setMode(t,e=""){if(this.mode===t)return;const n=this.mode;this.mode=t,this.clock.paused=t===$e.MENU,this.input.enabled=t===$e.PLAY,t===$e.PLAY?this.input.requestLock():n===$e.PLAY&&this.input.locked&&this.input.releaseLock(),this.bus.emit("game:mode",{mode:t,prev:n,reason:e})}start(){this.running=!0,this._last=performance.now();const t=e=>{if(!this.running)return;requestAnimationFrame(t);let n=(e-this._last)/1e3;this._last=e,n>.25&&(n=.25),this.update(n),this.render(n)};requestAnimationFrame(t)}update(t){this.mode===$e.PLAY&&this.clock.update(t),this._accum+=t;let e=0;for(;this._accum>=this.fixedStep&&e++<5;)this._accum-=this.fixedStep,this.player.update(this.fixedStep);if(this.camera.update(t),this.world.update(t),this.interaction.update(t),this.shift.update(t),this.buildBoard.update(t),this.kitchenBoard.update(t),this.saves.update(),this.customers.update(t),this.cars.update(t),this.traffic.update(t),this.pedestrians.update(t),this.houseLife.update(t),this.peers.update(t),this._netAccum=(this._netAccum||0)+t,this.room&&this._netAccum>=.1){this._netAccum=0;try{this.room._tick()}catch{}}this.ui.update(t),this.audio.update(t),this.input.endFrame()}render(t){this.renderer.render(this.camera.active,t)}}const qo=document.getElementById("scene"),_n=new hM(qo,{seed:new URLSearchParams(location.search).get("seed")||"burgerbarn"});_n.build();_n.start();window.game=_n;window.shot=async function(t="shot",e=null){if(e){if(e.pos){const c=_n.player.position.clone();c.set(e.pos[0],e.pos[1]??0,e.pos[2]),_n.player.teleport(c)}e.mode&&_n.camera.setMode(e.mode),e.yaw!==void 0&&(_n.camera.yaw=e.yaw),e.pitch!==void 0&&(_n.camera.pitch=e.pitch)}const n=1280,s=720;(qo.width!==n||qo.height!==s)&&(_n.renderer.renderer.setSize(n,s,!1),_n.camera.active.aspect=n/s,_n.camera.active.updateProjectionMatrix());const r=Math.max(1,(e==null?void 0:e.settle)??90);for(let c=0;c<r;c++)_n.update(1/60);if(e!=null&&e.free){const c=_n.camera.active;c.position.set(...e.free.pos),c.lookAt(...e.free.look)}_n.render(0);const o=qo.toDataURL("image/png");return(await fetch("http://localhost:5199/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:o})})).json()};export{Sl as S,iM as _,cd as a,oM as p};
