var sf=Object.defineProperty;var rf=(i,t,e)=>t in i?sf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Gl=(i,t,e)=>rf(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function of(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function af(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Ho{constructor(t="lifesim"){this.seed=String(t),this._next=af(of(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new Ho(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}class cf{constructor(){this._handlers=new Map,this._log=[]}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this.off(t,e)}once(t,e){const n=this.on(t,s=>{n(),e(s)});return n}off(t,e){var n;(n=this._handlers.get(t))==null||n.delete(e)}emit(t,e={}){this._log.push({type:t,payload:e,at:performance.now()}),this._log.length>400&&this._log.shift();const n=this._handlers.get(t);if(n)for(const a of[...n])a(e,t);const s=t.split(":")[0]+":*",r=this._handlers.get(s);if(r)for(const a of[...r])a(e,t);const o=this._handlers.get("*");if(o)for(const a of[...o])a(e,t)}recent(t=40){return this._log.slice(-t)}}class lf{constructor(t,e={}){this.bus=t,this.minuteOfDay=e.minuteOfDay??10*60+30,this.dayIndex=e.dayIndex??0,this.scale=e.scale??.3,this.paused=!1,this.playtimeSeconds=0,this._lastHour=Math.floor(this.minuteOfDay/60)}get hour(){return Math.floor(this.minuteOfDay/60)}get minute(){return Math.floor(this.minuteOfDay%60)}get dayFraction(){return this.minuteOfDay/1440}get dayOfYear(){return this.dayIndex%364}get timeLabel(){const t=this.hour,e=this.minute,n=t<12?"am":"pm";return(t%12===0?12:t%12)+":"+String(e).padStart(2,"0")+n}update(t){this.paused||(this.playtimeSeconds+=t,this.advance(t*this.scale))}advance(t){if(t<=0)return;let e=t;for(;e>0;){const n=60-this.minuteOfDay%60,s=Math.min(e,n);this.minuteOfDay+=s,e-=s,this.minuteOfDay>=1440&&(this.minuteOfDay-=1440,this.dayIndex++,this.bus.emit("time:day",{dayIndex:this.dayIndex,clock:this}));const r=Math.floor(this.minuteOfDay/60)%24;r!==this._lastHour&&(this._lastHour=r,this.bus.emit("time:hour",{hour:r,clock:this}))}this.bus.emit("time:minute",{clock:this})}skipTo(t,e=0){const n=t*60+e,s=n>this.minuteOfDay?n-this.minuteOfDay:1440-this.minuteOfDay+n;return this.advance(s),s}serialize(){return{minuteOfDay:this.minuteOfDay,dayIndex:this.dayIndex,playtimeSeconds:this.playtimeSeconds}}load(t){t&&(this.minuteOfDay=t.minuteOfDay,this.dayIndex=t.dayIndex,this.playtimeSeconds=t.playtimeSeconds||0,this._lastHour=this.hour)}}const hf={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],cancel:["Escape"]},uf=2e3;class df{constructor(t,e){this.bus=t,this.dom=e,this.bindings={...hf},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",t=>{if(t.repeat)return;Object.values(this.bindings).some(n=>n.includes(t.code))&&t.code!=="Escape"&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code),this.bus.emit("input:key",{code:t.code});for(const[n,s]of Object.entries(this.bindings))s.includes(t.code)&&this.bus.emit("action:"+n,{})}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",t=>this._failLock(t)),window.addEventListener("mousemove",t=>{this.locked&&(this.mouse.dx+=t.movementX,this.mouse.dy+=t.movementY)}),window.addEventListener("mousedown",t=>{this.pressed.add("Mouse"+t.button),this.down.add("Mouse"+t.button)}),window.addEventListener("mouseup",t=>this.down.delete("Mouse"+t.button)),window.addEventListener("wheel",t=>{this.bus.emit("input:wheel",{delta:Math.sign(t.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this.lockPending;this._settleLock(),e&&(this.locked=!1,console.warn("[input] pointer lock request refused",t||""),this.bus.emit("input:pointerlockfailed",{error:t||null}))}requestLock(){var e,n;if(this.locked||this.lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},uf);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(n=t==null?void 0:t.catch)==null||n.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this.locked=!1,(t=document.exitPointerLock)==null||t.call(document)}isDown(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.down.has(e)):!1}wasPressed(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.pressed.has(e)):!1}axis(){let t=0,e=0;this.isDown("forward")&&(e+=1),this.isDown("back")&&(e-=1),this.isDown("right")&&(t+=1),this.isDown("left")&&(t-=1);const n=Math.hypot(t,e);return n>1?{x:t/n,y:e/n}:{x:t,y:e}}consumeMouse(){const t={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,t}endFrame(){this.pressed.clear()}}const ff={ui:{gain:.8,duckable:!0},world:{gain:.9,duckable:!0},ambient:{gain:.45,duckable:!0},warn:{gain:1,duckable:!1}},pf={ref:2,max:26,panWidth:.8,panNear:1.6},mf={volume:.5,muted:!1},Vl={preshift:{bus:"ui",gain:.45,layers:[{src:"tone",wave:"sine",freq:440,at:0,dur:.5,a:.08,d:.1,s:.6,r:.28,peak:.7},{src:"tone",wave:"sine",freq:660,at:.18,dur:.55,a:.08,d:.1,s:.6,r:.32,peak:.5}]},clock_on:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"square",freq:1760,at:0,dur:.05,a:.002,d:.02,s:0,r:.02,peak:.25,filter:{type:"lowpass",freq:4e3,q:.7}},{src:"tone",wave:"sine",freq:523.25,at:.1,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:659.25,at:.21,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:783.99,at:.32,dur:.42,a:.006,d:.08,s:.5,r:.3,peak:.8}]},clock_off:{bus:"ui",gain:.55,layers:[{src:"tone",wave:"sine",freq:783.99,at:0,dur:.24,a:.008,d:.08,s:.5,r:.14,peak:.7},{src:"tone",wave:"sine",freq:523.25,at:.16,dur:.6,a:.01,d:.12,s:.4,r:.44,peak:.7},{src:"tone",wave:"triangle",freq:261.63,at:.16,dur:.62,a:.01,d:.12,s:.4,r:.46,peak:.25}]},door_chime:{bus:"ui",gain:.55,spot:"queue",minGain:.35,layers:[{src:"tone",wave:"sine",freq:587.33,at:0,dur:.85,a:.004,d:.2,s:.3,r:.55,peak:.75},{src:"tone",wave:"sine",freq:783.99,at:.16,dur:1.05,a:.004,d:.22,s:.3,r:.7,peak:.7},{src:"tone",wave:"sine",freq:1567.98,at:.16,dur:.6,a:.004,d:.18,s:.1,r:.36,peak:.1}]},ticket_print:{bus:"world",gain:.8,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.34,a:.004,d:.02,s:.9,r:.05,peak:.55,filter:{type:"bandpass",freq:2600,q:3},lfo:{rate:26,depth:.9,target:"gain"}},{src:"tone",wave:"square",freq:1318.5,at:.34,dur:.07,a:.003,d:.03,s:0,r:.03,peak:.16}]},kiosk_order:{bus:"ui",gain:.75,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.06,a:.002,d:.03,s:0,r:.02,peak:.36,filter:{type:"lowpass",freq:3200,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.09,dur:.1,a:.002,d:.04,s:0,r:.05,peak:.33,filter:{type:"lowpass",freq:3200,q:.7}}]},order_taken:{bus:"world",gain:.6,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.01,s:0,r:.015,peak:.3,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"triangle",freq:659.25,to:987.77,at:.02,dur:.14,a:.004,d:.05,s:.4,r:.08,peak:.45}]},item_place:{bus:"world",gain:.7,layers:[{src:"noise",noise:"brown",at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.3,filter:{type:"lowpass",freq:900,to:320,q:.9}},{src:"tone",wave:"sine",freq:190,to:130,at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.22,jitter:.06}]},item_pickup:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:620,to:880,at:0,dur:.09,a:.003,d:.04,s:.2,r:.04,peak:.4,jitter:.04},{src:"noise",noise:"white",at:0,dur:.05,a:.002,d:.03,s:0,r:.02,peak:.14,filter:{type:"highpass",freq:1800,q:.8}}]},item_drop:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:520,to:330,at:0,dur:.11,a:.003,d:.05,s:.2,r:.05,peak:.36,jitter:.04}]},wrong_item:{bus:"warn",gain:.62,layers:[{src:"tone",wave:"sawtooth",freq:146.83,at:0,dur:.22,a:.004,d:.04,s:.7,r:.1,peak:.35,filter:{type:"lowpass",freq:900,to:500,q:1.2},lfo:{rate:22,depth:.5,target:"gain"}}]},order_complete:{bus:"ui",gain:.85,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.28,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"square",freq:1567.98,at:.08,dur:.07,a:.002,d:.03,s:0,r:.04,peak:.24,filter:{type:"lowpass",freq:4200,q:.7}},{src:"noise",noise:"brown",at:.17,dur:.2,a:.004,d:.09,s:.15,r:.1,peak:.4,filter:{type:"lowpass",freq:1400,to:380,q:.9}},{src:"tone",wave:"sine",freq:140,to:78,at:.17,dur:.22,a:.003,d:.1,s:.1,r:.1,peak:.35}]},order_lost:{bus:"warn",gain:.55,layers:[{src:"tone",wave:"triangle",freq:392,to:293.66,at:0,dur:.55,a:.008,d:.12,s:.5,r:.36,peak:.55,filter:{type:"lowpass",freq:1600,to:700,q:.9}},{src:"tone",wave:"sine",freq:196,to:146.83,at:0,dur:.58,a:.01,d:.14,s:.5,r:.38,peak:.3}]},grill_lay:{bus:"world",gain:.6,spot:"grill",layers:[{src:"noise",noise:"white",at:0,dur:.9,a:.03,d:.22,s:.35,r:.55,peak:.55,filter:{type:"bandpass",freq:3400,to:1500,q:.8}},{src:"noise",noise:"brown",at:0,dur:.35,a:.004,d:.12,s:.1,r:.18,peak:.3,filter:{type:"lowpass",freq:700,q:1}}]},fryer_drop:{bus:"world",gain:.65,spot:"fryer",layers:[{src:"noise",noise:"brown",at:0,dur:.14,a:.002,d:.06,s:.1,r:.07,peak:.45,filter:{type:"lowpass",freq:1100,to:300,q:1.4}},{src:"tone",wave:"sine",freq:130,to:82,at:0,dur:.16,a:.002,d:.07,s:.1,r:.08,peak:.3},{src:"noise",noise:"white",at:.05,dur:1.2,a:.1,d:.3,s:.4,r:.7,peak:.55,filter:{type:"bandpass",freq:1400,to:3e3,q:.7}}]},fryer_bed:{bus:"ambient",gain:.9,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"pink",a:1.6,d:0,s:1,r:1.2,peak:.9,filter:{type:"bandpass",freq:1900,q:.55}},{src:"noise",noise:"brown",a:2,d:0,s:1,r:1.2,peak:.5,filter:{type:"lowpass",freq:420,q:.7}}]},fryer_active:{bus:"ambient",gain:.85,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"white",a:.7,d:0,s:1,r:.6,peak:.62,filter:{type:"bandpass",freq:2900,q:.8},lfo:{rate:5.5,depth:.35,target:"gain"}}]},grill_bed:{bus:"ambient",gain:.7,spot:"grill",loop:!0,layers:[{src:"noise",noise:"brown",a:1.8,d:0,s:1,r:1.4,peak:.85,filter:{type:"lowpass",freq:300,q:.8}},{src:"tone",wave:"sine",freq:96,a:2,d:0,s:1,r:1.4,peak:.16}]},grill_active:{bus:"ambient",gain:.75,spot:"grill",loop:!0,layers:[{src:"noise",noise:"white",a:.6,d:0,s:1,r:.55,peak:.5,filter:{type:"bandpass",freq:3600,q:.7},lfo:{rate:8.5,depth:.45,target:"gain"}}]},cook_ready:{bus:"world",gain:.7,minGain:.28,layers:[{src:"tone",wave:"sine",freq:2093,at:0,dur:.28,a:.002,d:.09,s:.1,r:.18,peak:.45},{src:"tone",wave:"sine",freq:3136,at:0,dur:.18,a:.002,d:.07,s:.05,r:.1,peak:.16},{src:"tone",wave:"sine",freq:2093,at:.19,dur:.42,a:.002,d:.11,s:.1,r:.3,peak:.45},{src:"tone",wave:"sine",freq:3136,at:.19,dur:.24,a:.002,d:.08,s:.05,r:.14,peak:.16}]},cook_burnt:{bus:"warn",gain:.85,minGain:.7,ducks:{depth:.35,hold:1.1},layers:[{src:"tone",wave:"square",freq:466.16,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.34,filter:{type:"bandpass",freq:1500,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"tone",wave:"square",freq:311.13,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.22,filter:{type:"bandpass",freq:900,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.2,a:.04,d:.3,s:.45,r:.55,peak:.28,filter:{type:"bandpass",freq:5200,to:2600,q:.6}}]},warmer_expired:{bus:"warn",gain:.4,minGain:.22,layers:[{src:"tone",wave:"sine",freq:116,to:92,at:0,dur:.4,a:.006,d:.14,s:.3,r:.24,peak:.45},{src:"noise",noise:"brown",at:0,dur:.3,a:.006,d:.12,s:.1,r:.16,peak:.22,filter:{type:"lowpass",freq:500,to:200,q:1}}]},mop_swish:{bus:"world",gain:.9,layers:[{src:"noise",noise:"pink",at:0,dur:.42,a:.05,d:.1,s:.55,r:.24,peak:.72,filter:{type:"bandpass",freq:1200,to:380,q:.9}},{src:"noise",noise:"pink",at:.4,dur:.44,a:.06,d:.1,s:.55,r:.26,peak:.64,filter:{type:"bandpass",freq:420,to:1100,q:.9}}]},wipe_down:{bus:"world",gain:.8,layers:[{src:"noise",noise:"white",at:0,dur:.26,a:.03,d:.08,s:.5,r:.14,peak:.5,filter:{type:"bandpass",freq:2600,to:1200,q:1.1}},{src:"noise",noise:"white",at:.24,dur:.24,a:.03,d:.08,s:.5,r:.13,peak:.42,filter:{type:"bandpass",freq:1300,to:2400,q:1.1}}]},mess_made:{bus:"world",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.04,s:.1,r:.05,peak:.55,filter:{type:"lowpass",freq:640,to:240,q:1}}]},delivery_call:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.14,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:880,at:.32,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.46,dur:.18,a:.004,d:.02,s:.9,r:.08,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}}]},delivery_taken:{bus:"world",gain:.55,spot:"delivery_desk",layers:[{src:"noise",noise:"white",at:0,dur:.38,a:.02,d:.08,s:.6,r:.22,peak:.34,filter:{type:"highpass",freq:1600,q:.8},lfo:{rate:17,depth:.75,target:"gain"}},{src:"tone",wave:"triangle",freq:740,to:988,at:.3,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.3}]},delivery_done:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"triangle",freq:523.25,at:0,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:659.25,at:.12,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:880,at:.24,dur:.42,a:.005,d:.09,s:.4,r:.3,peak:.6},{src:"tone",wave:"sine",freq:1760,at:.24,dur:.3,a:.005,d:.08,s:.2,r:.2,peak:.12}]},violation:{bus:"warn",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:110,at:0,dur:.28,a:.004,d:.04,s:.8,r:.12,peak:.38,filter:{type:"lowpass",freq:700,q:1.4},lfo:{rate:14,depth:.6,target:"gain"}}]},scooter_start:{bus:"world",gain:.55,layers:[{src:"noise",noise:"white",at:0,dur:.3,a:.01,d:.1,s:.3,r:.16,peak:.3,filter:{type:"bandpass",freq:1800,to:700,q:1.2}},{src:"tone",wave:"sawtooth",freq:52,to:128,at:.05,dur:.85,a:.06,d:.1,s:.75,r:.35,peak:.34,filter:{type:"lowpass",freq:620,to:1100,q:1},lfo:{rate:9,depth:.3,target:"gain"}}]},scooter_stop:{bus:"world",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:122,to:44,at:0,dur:.55,a:.006,d:.1,s:.6,r:.34,peak:.34,filter:{type:"lowpass",freq:900,to:300,q:1},lfo:{rate:7,depth:.35,target:"gain"}}]},promoted:{bus:"ui",gain:.7,layers:[{src:"tone",wave:"square",freq:523.25,at:0,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:659.25,at:.11,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:783.99,at:.22,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:1046.5,at:.33,dur:.6,a:.004,d:.12,s:.4,r:.42,peak:.3,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"sine",freq:261.63,at:.33,dur:.65,a:.006,d:.14,s:.4,r:.46,peak:.28}]},purchase:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.26,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"triangle",freq:2093,at:.12,dur:.16,a:.002,d:.06,s:.1,r:.1,peak:.22},{src:"tone",wave:"triangle",freq:2637,at:.19,dur:.2,a:.002,d:.07,s:.1,r:.13,peak:.18}]},mute_off:{bus:"ui",gain:.5,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.5},{src:"tone",wave:"sine",freq:990,at:.1,dur:.22,a:.004,d:.07,s:.3,r:.14,peak:.42}]}},Wl=["fryer_bed","grill_bed"],Vi=1e-4;class gf{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const c=r.float()*2-1;o=(o+.02*c)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,c=0,l=0,h=0,u=0,d=0;for(let f=0;f<e;f++){const m=r.float()*2-1;o=.99886*o+m*.0555179,a=.99332*a+m*.0750759,c=.969*c+m*.153852,l=.8665*l+m*.3104856,h=.55*h+m*.5329522,u=-.7616*u-m*.016898,s[f]=(o+a+c+l+h+u+d+m*.5362)*.11,d=m*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function _f(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),d=e.s??1,f=Math.max(.005,e.r??.05),m=i.createGain();m.gain.value=Vi,m.connect(n);let _,p=null;const g=r.rate??1;if(e.src==="noise")_=i.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=g;else{_=i.createOscillator(),_.type=e.wave||"sine";const D=e.jitter||0,v=D?1+(r.jitterRoll??0)*D:1,w=Math.max(8,(e.freq??440)*v*g);if(p=_.frequency,p.setValueAtTime(w,a),e.to!=null&&!o){const U=Math.max(8,e.to*v*g),N=a+c;e.glide==="lin"?p.linearRampToValueAtTime(U,N):p.exponentialRampToValueAtTime(U,N)}}let y=_,x=null;if(e.filter){const D=i.createBiquadFilter();D.type=e.filter.type||"lowpass",D.Q.value=e.filter.q??1;const v=Math.max(20,e.filter.freq??1e3);D.frequency.setValueAtTime(v,a),e.filter.to!=null&&!o&&D.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),x=D.frequency,y.connect(D),y=D}let M=null,R=null;if(e.lfo&&e.lfo.rate>0){M=i.createOscillator(),M.type="sine",M.frequency.value=e.lfo.rate;const D=i.createGain();if(e.lfo.target==="gain"){const v=Math.min(1,Math.max(0,e.lfo.depth??.5));R=i.createGain(),R.gain.value=1-v*.5,D.gain.value=v*.5,M.connect(D),D.connect(R.gain),y.connect(R),y=R}else e.lfo.target==="filter"&&x?(D.gain.value=e.lfo.depth??200,M.connect(D),D.connect(x)):p&&(D.gain.value=e.lfo.depth??20,M.connect(D),D.connect(p));M.start(a)}y.connect(m);const E=m.gain;E.setValueAtTime(Vi,a),E.linearRampToValueAtTime(l,a+h);const b=Math.max(Vi,l*d);u>0&&E.linearRampToValueAtTime(b,a+h+u);let P=1/0;if(o)_.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const D=Math.max(a+h+u,a+c-f);E.setValueAtTime(Math.max(Vi,u>0?b:l),D),E.linearRampToValueAtTime(Vi,a+c),P=a+c+.02,_.start(a,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(P),M&&M.stop(P)}return{endsAt:P,stop(D){const v=Math.max(D,i.currentTime);try{E.cancelScheduledValues(v),E.setValueAtTime(Math.max(Vi,E.value),v),E.linearRampToValueAtTime(Vi,v+f),_.stop(v+f+.02),M&&M.stop(v+f+.02)}catch{}}}}function ql(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const h=_f(i,t,l,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>c&&h.endsAt!==1/0&&(c=h.endsAt))}return{endsAt:o?1/0:c,stop(l=i.currentTime){for(const h of a)h.stop(l)}}}const Xl="lifesim.audio",xf=28,vf="KeyN";class yf{constructor(t){var n,s,r,o;this.game=t,this.bus=(t==null?void 0:t.bus)||null,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this.rng=(n=t==null?void 0:t.rng)!=null&&n.child?t.rng.child("audio"):null,this._voices=[],this._loops=new Map,this._duckUntil=0,this._duckDepth=0,this._paused=!1,this._replaceAccum=0,this._told=!1;const e=this._loadPrefs();this.volume=e.volume,this.muted=e.muted,this._Ctx&&(this._wireUnlock(),this._wireKey()),(o=(r=(s=this.game)==null?void 0:s.slice)==null?void 0:r.bindSounds)==null||o.call(r,this)}get available(){return!!this.ctx}_loadPrefs(){const t={...mf};try{const e=localStorage.getItem(Xl);if(e){const n=JSON.parse(e);typeof n.volume=="number"&&(t.volume=Math.min(1,Math.max(0,n.volume))),typeof n.muted=="boolean"&&(t.muted=n.muted)}}catch{}return t}_savePrefs(){try{localStorage.setItem(Xl,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx)for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,n;document.hidden||(n=(e=this.ctx)==null?void 0:e.resume)==null||n.call(e).catch(()=>{})})}unlock(){var e,n;if(this.ctx||!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=new gf(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this.muted?1e-4:this.volume*(this._paused?.2:1),this.master.connect(t.destination);for(const[s,r]of Object.entries(ff)){const o=t.createGain();o.gain.value=r.gain,o.connect(this.master),this.buses[s]={node:o,base:r.gain,duckable:r.duckable!==!1}}(e=t.resume)==null||e.call(t).catch(()=>{}),this.announce(),(n=this.bus)==null||n.emit("audio:ready",{muted:this.muted,volume:this.volume})}announce(){var e,n;if(this._told||!this.ctx)return;const t=(n=(e=this.game)==null?void 0:e.ui)==null?void 0:n.toast;t&&(this._told=!0,t.call(this.game.ui,this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==vf||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e,n,s,r,o,a,c;this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(s=(n=(e=this.game)==null?void 0:e.ui)==null?void 0:n.toast)==null||s.call(n,this.muted?"Sound muted.":"Sound on."),(r=this.bus)==null||r.emit("audio:muted",{muted:this.muted}),this.muted||(this.play("mute_off"),(c=(a=(o=this.game)==null?void 0:o.slice)==null?void 0:a.isWorking)!=null&&c.call(a)&&this.startShiftBeds())}toggleMute(){this.setMuted(!this.muted)}setPaused(t){this._paused=!!t,this._applyMaster(.08)}_applyMaster(t=.08){if(!this.master)return;const e=this.ctx.currentTime,n=this.muted?1e-4:this.volume*(this._paused?.2:1);this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(Math.max(1e-4,n),e+t)}setVolume(t){var e;this.volume=Math.min(1,Math.max(0,t)),this._savePrefs(),this._applyMaster(),(e=this.bus)==null||e.emit("audio:volume",{volume:this.volume})}play(t,e={}){const n=Vl[t];if(!n||!this.ctx||this.muted)return null;if(n.loop)return this.startLoop(t,t,e);if(this._voices.length>=xf)return null;const s=this._destFor(n,e);if(!s)return null;const r=ql(this.ctx,this.bank,n,s.node,{gain:(n.gain??1)*(e.gain??1),rate:e.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()});return this._voices.push({v:r,endsAt:r.endsAt,chain:s.chain}),n.ducks&&this.duck(n.ducks.depth??.3,n.ducks.hold??.8),r}startLoop(t,e=t,n={}){const s=Vl[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._destFor(s,n);if(!r)return null;const a={v:ql(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(n.gain??1),rate:n.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:n.spot??s.spot??null,at:n.at??null,gain:(s.gain??1)*(n.gain??1)};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);!e||!this.ctx||(this._loops.delete(t),e.v.stop(this.ctx.currentTime))}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t)}startShiftBeds(){for(const t of Wl)this.startLoop(t)}stopShiftBeds(){for(const t of Wl)this.stopLoop(t)}duck(t=.3,e=.8){if(!this.ctx)return;const n=this.ctx.currentTime;this._duckDepth=Math.max(this._duckDepth,t),this._duckUntil=Math.max(this._duckUntil,n+e);for(const s of Object.values(this.buses))s.duckable&&(s.node.gain.cancelScheduledValues(n),s.node.gain.setTargetAtTime(s.base*this._duckDepth,n,.04))}_unduck(){const t=this.ctx.currentTime;this._duckDepth=0;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_destFor(t,e){const n=this.buses[t.bus]||this.buses.world||this.buses.ui;if(!n)return null;const s=this._resolve(e.at??null,e.spot??t.spot??null);if(!s)return{node:n.node,chain:null};const{gain:r,pan:o}=this._place(s,t.minGain??0);if(r<=.004&&!t.loop)return null;let a=n.node,c=null;this.ctx.createStereoPanner&&(c=this.ctx.createStereoPanner(),c.pan.value=o,c.connect(a),a=c);const l=this.ctx.createGain();return l.gain.value=r,l.connect(a),{node:l,chain:{pan:c,dist:l}}}_resolve(t,e){var s,r,o;if(t&&typeof t.x=="number")return t;if(!e)return null;const n=(o=(r=(s=this.game)==null?void 0:s.shift)==null?void 0:r.spot)==null?void 0:o.call(r,e);return n&&typeof n.x=="number"?n:null}_listener(){var s,r;const t=(s=this.game)==null?void 0:s.camera,e=(r=t==null?void 0:t.active)==null?void 0:r.position;if(!e)return null;const n=t.yaw??0;return{x:e.x,y:e.y,z:e.z,rx:-Math.cos(n),rz:Math.sin(n)}}_place(t,e){const n=this._listener();if(!n)return{gain:1,pan:0};const s=t.x-n.x,r=t.z-n.z,o=(t.y??n.y)-n.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,panWidth:h,panNear:u}=pf;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));a>l-4&&(d*=(l-a)/4),d=Math.max(d,e);const f=Math.sqrt(s*s+r*r)||1,m=Math.min(1,f/u),_=(s*n.rx+r*n.rz)/f*h*m;return{gain:d,pan:Math.max(-1,Math.min(1,_))}}update(t){if(!this.ctx)return;const e=this.ctx.currentTime;for(let n=this._voices.length-1;n>=0;n--)this._voices[n].endsAt<=e&&this._voices.splice(n,1);if(this._duckDepth>0&&e>=this._duckUntil&&this._unduck(),this._replaceAccum=(this._replaceAccum||0)+t,!(this._replaceAccum<.1)){this._replaceAccum=0;for(const n of this._loops.values()){const s=this._resolve(n.at,n.spot);if(!s||!n.chain)continue;const{gain:r,pan:o}=this._place(s,n.recipe.minGain??0);n.chain.dist.gain.setTargetAtTime(r,e,.06),n.chain.pan&&n.chain.pan.pan.setTargetAtTime(o,e,.08)}}}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,1.8):0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="169",Mf=0,Yl=1,Sf=2,Fu=1,ku=2,mi=3,si=0,rn=1,Hn=2,ki=0,ks=1,Io=2,jl=3,ec=4,wf=5,ts=100,Ef=101,bf=102,Tf=103,Af=104,Rf=200,Cf=201,Pf=202,Lf=203,nc=204,ic=205,If=206,Df=207,Uf=208,Nf=209,Of=210,zf=211,Ff=212,kf=213,Bf=214,sc=0,rc=1,oc=2,qs=3,ac=4,cc=5,lc=6,hc=7,al=0,Hf=1,Gf=2,Bi=0,Vf=1,Wf=2,qf=3,Bu=4,Xf=5,Yf=6,jf=7,Hu=300,Xs=301,Ys=302,uc=303,dc=304,Go=306,Do=1e3,Di=1001,fc=1002,In=1003,Kf=1004,Dr=1005,Ln=1006,na=1007,Ui=1008,yi=1009,Gu=1010,Vu=1011,Sr=1012,cl=1013,is=1014,_i=1015,Tr=1016,ll=1017,hl=1018,js=1020,Wu=35902,qu=1021,Xu=1022,Vn=1023,Yu=1024,ju=1025,Bs=1026,Ks=1027,Ku=1028,ul=1029,$u=1030,dl=1031,fl=1033,wo=33776,Eo=33777,bo=33778,To=33779,pc=35840,mc=35841,gc=35842,_c=35843,xc=36196,vc=37492,yc=37496,Mc=37808,Sc=37809,wc=37810,Ec=37811,bc=37812,Tc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Lc=37818,Ic=37819,Dc=37820,Uc=37821,Ao=36492,Nc=36494,Oc=36495,Zu=36283,zc=36284,Fc=36285,kc=36286,$f=3200,Zf=3201,pl=0,Jf=1,Ii="",ze="srgb",Gi="srgb-linear",ml="display-p3",Vo="display-p3-linear",Uo="linear",ve="srgb",No="rec709",Oo="p3",us=7680,Kl=519,Qf=512,t0=513,e0=514,Ju=515,n0=516,i0=517,s0=518,r0=519,$l=35044,Zl="300 es",xi=2e3,zo=2001;class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const gr=Math.PI/180,$s=180/Math.PI;function as(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function gl(i,t){return(i%t+t)%t}function o0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function a0(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function c0(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function l0(i,t=1){return t-Math.abs(gl(i,t*2)-t)}function h0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function u0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function d0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function f0(i,t){return i+Math.random()*(t-i)}function p0(i){return i*(.5-Math.random())}function m0(i){i!==void 0&&(Jl=i);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g0(i){return i*gr}function _0(i){return i*$s}function x0(i){return(i&i-1)===0&&i!==0}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:gr,RAD2DEG:$s,generateUUID:as,clamp:Je,euclideanModulo:gl,mapLinear:o0,inverseLerp:a0,lerp:_r,damp:c0,pingpong:l0,smoothstep:h0,smootherstep:u0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:_0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:M0,normalize:nn,denormalize:Ps};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,o,a,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],y=s[1],x=s[4],M=s[7],R=s[2],E=s[5],b=s[8];return r[0]=o*_+a*y+c*R,r[3]=o*p+a*x+c*E,r[6]=o*g+a*M+c*b,r[1]=l*_+h*y+u*R,r[4]=l*p+h*x+u*E,r[7]=l*g+h*M+u*b,r[2]=d*_+f*y+m*R,r[5]=d*p+f*x+m*E,r[8]=d*g+f*M+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new te;function Qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S0(){const i=Fo("canvas");return i.style.display="block",i}const Ql={};function Ro(i){i in Ql||(Ql[i]=!0,console.warn(i))}function w0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function E0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function b0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const th=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[Gi]:{transfer:Uo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ze]:{transfer:ve,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vo]:{transfer:Uo,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(eh),fromReference:i=>i.applyMatrix3(th)},[ml]:{transfer:ve,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(eh),fromReference:i=>i.applyMatrix3(th).convertLinearToSRGB()}},T0=new Set([Gi,Vo]),le={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!T0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=rr[t].toReference,s=rr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return rr[i].primaries},getTransfer:function(i){return i===Ii?Uo:rr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(rr[t].luminanceCoefficients)}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class A0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Fo("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hs(e[n]/255)*255):e[n]=Hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R0=0;class td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?A0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;class on extends tr{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Di,s=Di,r=Ln,o=Ui,a=Vn,c=yi,l=on.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=as(),this.name="",this.source=new td(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Hu;on.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(f+1)/2,R=(g+1)/2,E=(h+d)/4,b=(u+_)/4,P=(m+p)/4;return x>M&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=b/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new td(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends P0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ed extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let p=1-a;const g=c*d+l*f+h*m+u*_,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const R=Math.sqrt(x),E=Math.atan2(R,g*y);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const M=a*y;if(c=c*p+d*M,l=l*p+f*M,h=h*p+m*M,u=u*p+_*M,p===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new I,nh=new er;class Mi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Nr.subVectors(this.max,or),fs.subVectors(t.a,or),ps.subVectors(t.b,or),ms.subVectors(t.c,or),Ei.subVectors(ps,fs),bi.subVectors(ms,ps),Wi.subVectors(fs,ms);let e=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-Wi.z,Wi.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,Wi.z,0,-Wi.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-Wi.y,Wi.x,0];return!aa(e,fs,ps,ms,Nr)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,fs,ps,ms,Nr))?!1:(Or.crossVectors(Ei,bi),e=[Or.x,Or.y,Or.z],aa(e,fs,ps,ms,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,Ur=new Mi,fs=new I,ps=new I,ms=new I,Ei=new I,bi=new I,Wi=new I,or=new I,Nr=new I,Or=new I,qi=new I;function aa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=t.dot(qi),l=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const I0=new Mi,ar=new I,ca=new I;class Wo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):I0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(ca)),this.expandByPoint(ar.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new I,la=new I,zr=new I,Ti=new I,ha=new I,Fr=new I,ua=new I;class _l{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(la);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=Ti.dot(this.direction),c=-Ti.dot(zr),l=Ti.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(zr,d),f}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){ha.subVectors(e,t),Fr.subVectors(n,t),ua.crossVectors(ha,Fr);let o=this.direction.dot(ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const c=a*this.direction.dot(Fr.crossVectors(Ti,Fr));if(c<0)return null;const l=a*this.direction.dot(ha.cross(Ti));if(l<0||c+l>o)return null;const h=-a*Ti.dot(ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,p){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D0,t,U0)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ai.crossVectors(n,gn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ai.crossVectors(n,gn)),Ai.normalize(),kr.crossVectors(gn,Ai),s[0]=Ai.x,s[4]=kr.x,s[8]=gn.x,s[1]=Ai.y,s[5]=kr.y,s[9]=gn.y,s[2]=Ai.z,s[6]=kr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],x=n[7],M=n[11],R=n[15],E=s[0],b=s[4],P=s[8],D=s[12],v=s[1],w=s[5],U=s[9],N=s[13],X=s[2],q=s[6],G=s[10],j=s[14],z=s[3],pt=s[7],mt=s[11],lt=s[15];return r[0]=o*E+a*v+c*X+l*z,r[4]=o*b+a*w+c*q+l*pt,r[8]=o*P+a*U+c*G+l*mt,r[12]=o*D+a*N+c*j+l*lt,r[1]=h*E+u*v+d*X+f*z,r[5]=h*b+u*w+d*q+f*pt,r[9]=h*P+u*U+d*G+f*mt,r[13]=h*D+u*N+d*j+f*lt,r[2]=m*E+_*v+p*X+g*z,r[6]=m*b+_*w+p*q+g*pt,r[10]=m*P+_*U+p*G+g*mt,r[14]=m*D+_*N+p*j+g*lt,r[3]=y*E+x*v+M*X+R*z,r[7]=y*b+x*w+M*q+R*pt,r[11]=y*P+x*U+M*G+R*mt,r[15]=y*D+x*N+M*j+R*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+g*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=u*p*l-_*d*l+_*c*f-a*p*f-u*c*g+a*d*g,x=m*d*l-h*p*l-m*c*f+o*p*f+h*c*g-o*d*g,M=h*_*l-m*u*l+m*a*f-o*_*f-h*a*g+o*u*g,R=m*u*c-h*_*c-m*a*d+o*_*d+h*a*p-o*u*p,E=e*y+n*x+s*M+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=y*b,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*g-n*d*g)*b,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*g+n*c*g)*b,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,t[4]=x*b,t[5]=(h*p*r-m*d*r+m*s*f-e*p*f-h*s*g+e*d*g)*b,t[6]=(m*c*r-o*p*r-m*s*l+e*p*l+o*s*g-e*c*g)*b,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*b,t[8]=M*b,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*g-e*u*g)*b,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*g+e*a*g)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=R*b,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*p+e*u*p)*b,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*p-e*a*p)*b,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,p=o*u,g=a*u,y=c*l,x=c*h,M=c*u,R=n.x,E=n.y,b=n.z;return s[0]=(1-(_+g))*R,s[1]=(f+M)*R,s[2]=(m-x)*R,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+g))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(m+x)*b,s[9]=(p-y)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);const l=1/r,h=1/o,u=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xi){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===xi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===zo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xi){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let m,_;if(a===xi)m=(o+r)*u,_=-2*u;else if(a===zo)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new I,On=new ye,D0=new I(0,0,0),U0=new I(1,1,1),Ai=new I,kr=new I,gn=new I,ih=new ye,sh=new er;class Wn{constructor(t=0,e=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N0=0;const rh=new I,_s=new er,ui=new ye,Br=new I,cr=new I,O0=new I,z0=new er,oh=new I(1,0,0),ah=new I(0,1,0),ch=new I(0,0,1),lh={type:"added"},F0={type:"removed"},xs={type:"childadded",child:null},da={type:"childremoved",child:null};class Ne extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new I,e=new Wn,n=new er,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new te}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(cr,Br,this.up):ui.lookAt(Br,cr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ui),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(F0),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,O0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new I(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new I,di=new I,fa=new I,fi=new I,vs=new I,ys=new I,hh=new I,pa=new I,ma=new I,ga=new I,_a=new fe,xa=new fe,va=new fe;class Gn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),di.subVectors(n,e),fa.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(di),c=zn.dot(fa),l=di.dot(di),h=di.dot(fa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return _a.setScalar(0),xa.setScalar(0),va.setScalar(0),_a.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(va,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),di.subVectors(t,e),zn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,n),ys.subVectors(r,n),pa.subVectors(t,n);const c=vs.dot(pa),l=ys.dot(pa);if(c<=0&&l<=0)return e.copy(n);ma.subVectors(t,s);const h=vs.dot(ma),u=ys.dot(ma);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(vs,o);ga.subVectors(t,r);const f=vs.dot(ga),m=ys.dot(ga);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ys,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return hh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(hh,a);const g=1/(p+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=gl(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return le.fromWorkingColorSpace(en.copy(this),t),Math.round(Je(en.r*255,0,255))*65536+Math.round(Je(en.g*255,0,255))*256+Math.round(Je(en.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=ze){le.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Hr);const n=_r(Ri.h,Hr.h,e),s=_r(Ri.s,Hr.s,e),r=_r(Ri.l,Hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Gt;Gt.NAMES=id;let k0=0;class cs extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=as(),this.name="",this.type="Material",this.blending=ks,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mn extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new I,Gr=new St;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$l,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}}class sd extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rd extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let B0=0;const En=new ye,Ma=new Ne,Ms=new I,_n=new Mi,lr=new Mi,He=new I;class Qe extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?rd:sd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(_n.min,lr.min),_n.expandByPoint(He),He.addVectors(_n.max,lr.max),_n.expandByPoint(He)):(_n.expandByPoint(lr.min),_n.expandByPoint(lr.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)He.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(t,l),He.add(Ms)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new St,f=new St,m=new St,_=new I,p=new I;function g(P,D,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),a[P].add(_),a[D].add(_),a[v].add(_),c[P].add(p),c[D].add(p),c[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,D=y.length;P<D;++P){const v=y[P],w=v.start,U=v.count;for(let N=w,X=w+U;N<X;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new I,M=new I,R=new I,E=new I;function b(P){R.fromBufferAttribute(s,P),E.copy(R);const D=a[P];x.copy(D),x.sub(R.multiplyScalar(R.dot(D))).normalize(),M.crossVectors(E,D);const w=M.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,D=y.length;P<D;++P){const v=y[P],w=v.start,U=v.count;for(let N=w,X=w+U;N<X;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)d[m++]=l[f++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new ye,Xi=new _l,Vr=new Wo,dh=new I,Wr=new I,qr=new I,Xr=new I,Sa=new I,Yr=new I,fh=new I,jr=new I;class st extends Ne{constructor(t=new Qe,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,t),o?Yr.addScaledVector(Sa,h):Yr.addScaledVector(Sa.sub(e),h))}e.add(Yr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Vr.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Vr,dh)===null||Xi.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){const E=a.getX(M),b=a.getX(M+1),P=a.getX(M+2);s=Kr(this,g,t,n,l,h,u,E,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=Kr(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){const E=M,b=M+1,P=M+2;s=Kr(this,g,t,n,l,h,u,E,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const y=p,x=p+1,M=p+2;s=Kr(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function H0(i,t,e,n,s,r,o,a){let c;if(t.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===si,a),c===null)return null;jr.copy(a),jr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(jr);return l<e.near||l>e.far?null:{distance:l,point:jr.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Wr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Xr);const h=H0(i,t,e,n,Wr,qr,Xr,fh);if(h){const u=new I;Gn.getBarycoord(fh,Wr,qr,Xr,u),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,c,l,u,new St)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,c,l,u,new St)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Gn.getNormal(Wr,qr,Xr,d.normal),h.face=d,h.barycoord=u}return h}class Ot extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function m(_,p,g,y,x,M,R,E,b,P,D){const v=M/b,w=R/P,U=M/2,N=R/2,X=E/2,q=b+1,G=P+1;let j=0,z=0;const pt=new I;for(let mt=0;mt<G;mt++){const lt=mt*w-N;for(let kt=0;kt<q;kt++){const Kt=kt*v-U;pt[_]=Kt*y,pt[p]=lt*x,pt[g]=X,l.push(pt.x,pt.y,pt.z),pt[_]=0,pt[p]=0,pt[g]=E>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(kt/b),u.push(1-mt/P),j+=1}}for(let mt=0;mt<P;mt++)for(let lt=0;lt<b;lt++){const kt=d+lt+q*mt,Kt=d+lt+q*(mt+1),Q=d+(lt+1)+q*(mt+1),F=d+(lt+1)+q*mt;c.push(kt,Kt,F),c.push(Kt,Q,F),z+=6}a.addGroup(f,z,D),f+=z,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=Zs(i[e]);for(const s in n)t[s]=n[s]}return t}function G0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function od(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const V0={clone:Zs,merge:sn};var W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ad extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new I,ph=new St,mh=new St;class un extends ad{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,ws=1;class X0 extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Ss,ws,t,e);s.layers=this.layers,this.add(s);const r=new un(Ss,ws,t,e);r.layers=this.layers,this.add(r);const o=new un(Ss,ws,t,e);o.layers=this.layers,this.add(o);const a=new un(Ss,ws,t,e);a.layers=this.layers,this.add(a);const c=new un(Ss,ws,t,e);c.layers=this.layers,this.add(c);const l=new un(Ss,ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class cd extends on{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Y0 extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ki});r.uniforms.tEquirect.value=e;const o=new st(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Ln),new X0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const wa=new I,j0=new I,K0=new te;class Ji{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wa.subVectors(n,e).cross(j0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||K0.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Wo,$r=new I;class xl{constructor(t=new Ji,e=new Ji,n=new Ji,s=new Ji,r=new Ji,o=new Ji){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],p=s[11],g=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,p-f,M-g).normalize(),n[1].setComponents(c+r,d+l,p+f,M+g).normalize(),n[2].setComponents(c+o,d+h,p+m,M+y).normalize(),n[3].setComponents(c-o,d-h,p-m,M-y).normalize(),n[4].setComponents(c-a,d-u,p-_,M-x).normalize(),e===xi)n[5].setComponents(c+a,d+u,p+_,M+x).normalize();else if(e===zo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $0(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Xe extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const y=g*d-o;for(let x=0;x<l;x++){const M=x*u-r;m.push(M,-y,0),_.push(0,0,1),p.push(x/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){const x=y+l*g,M=y+l*(g+1),R=y+1+l*(g+1),E=y+1+l*g;f.push(x,M,E),f.push(M,R,E)}this.setIndex(f),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`
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
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Kp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:xp,color_vertex:vp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:wp,displacementmap_vertex:Ep,emissivemap_fragment:bp,emissivemap_pars_fragment:Tp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Op,fog_pars_fragment:zp,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:kp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Wp,lights_toon_pars_fragment:qp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:jp,lights_physical_pars_fragment:Kp,lights_fragment_begin:$p,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:cm,morphinstance_vertex:lm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:xm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:wm,opaque_fragment:Em,packing:bm,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Om,skinning_pars_vertex:zm,skinning_vertex:Fm,skinnormal_vertex:km,specularmap_fragment:Bm,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:qm,uv_pars_fragment:Xm,uv_pars_vertex:Ym,uv_vertex:jm,worldpos_vertex:Km,background_vert:$m,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:wg,points_vert:Eg,points_frag:bg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},Tt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ti={basic:{uniforms:sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:sn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:sn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:sn([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:sn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:sn([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:sn([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:sn([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:sn([Tt.lights,Tt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ti.physical={uniforms:sn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Zr={r:0,b:0,g:0},ji=new Wn,Pg=new ye;function Lg(i,t,e,n,s,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const M=m(y);M===null?g(a,c):M&&M.isColor&&(g(M,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===Go)?(h===void 0&&(h=new st(new Ot(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ji.copy(x.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ji)),h.material.toneMapped=le.getTransfer(M.colorSpace)!==ve,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new st(new Xe(2,2),new Si({name:"BackgroundMaterial",uniforms:Zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=le.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,x){y.getRGB(Zr,od(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,g(a,c)},render:_,addToRenderList:p}}function Ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,w,U,N,X){let q=!1;const G=u(N,U,w);r!==G&&(r=G,l(r.object)),q=f(v,N,U,X),q&&m(v,N,U,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(v,w,U,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,U){const N=U.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let q=X[w.id];q===void 0&&(q={},X[w.id]=q);let G=q[N];return G===void 0&&(G=d(c()),q[N]=G),G}function d(v){const w=[],U=[],N=[];for(let X=0;X<e;X++)w[X]=0,U[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,w,U,N){const X=r.attributes,q=w.attributes;let G=0;const j=U.getAttributes();for(const z in j)if(j[z].location>=0){const mt=X[z];let lt=q[z];if(lt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),mt===void 0||mt.attribute!==lt||lt&&mt.data!==lt.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function m(v,w,U,N){const X={},q=w.attributes;let G=0;const j=U.getAttributes();for(const z in j)if(j[z].location>=0){let mt=q[z];mt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));const lt={};lt.attribute=mt,mt&&mt.data&&(lt.data=mt.data),X[z]=lt,G++}r.attributes=X,r.attributesNum=G,r.index=N}function _(){const v=r.newAttributes;for(let w=0,U=v.length;w<U;w++)v[w]=0}function p(v){g(v,0)}function g(v,w){const U=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;U[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),X[v]!==w&&(i.vertexAttribDivisor(v,w),X[v]=w)}function y(){const v=r.newAttributes,w=r.enabledAttributes;for(let U=0,N=w.length;U<N;U++)w[U]!==v[U]&&(i.disableVertexAttribArray(U),w[U]=0)}function x(v,w,U,N,X,q,G){G===!0?i.vertexAttribIPointer(v,w,U,X,q):i.vertexAttribPointer(v,w,U,N,X,q)}function M(v,w,U,N){_();const X=N.attributes,q=U.getAttributes(),G=w.defaultAttributeValues;for(const j in q){const z=q[j];if(z.location>=0){let pt=X[j];if(pt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){const mt=pt.normalized,lt=pt.itemSize,kt=t.get(pt);if(kt===void 0)continue;const Kt=kt.buffer,Q=kt.type,F=kt.bytesPerElement,dt=Q===i.INT||Q===i.UNSIGNED_INT||pt.gpuType===cl;if(pt.isInterleavedBufferAttribute){const nt=pt.data,vt=nt.stride,_t=pt.offset;if(nt.isInstancedInterleavedBuffer){for(let Et=0;Et<z.locationSize;Et++)g(z.location+Et,nt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Et=0;Et<z.locationSize;Et++)p(z.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Et=0;Et<z.locationSize;Et++)x(z.location+Et,lt/z.locationSize,Q,mt,vt*F,(_t+lt/z.locationSize*Et)*F,dt)}else{if(pt.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)g(z.location+nt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let nt=0;nt<z.locationSize;nt++)x(z.location+nt,lt/z.locationSize,Q,mt,lt*F,lt/z.locationSize*nt*F,dt)}}else if(G!==void 0){const mt=G[j];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(z.location,mt);break;case 3:i.vertexAttrib3fv(z.location,mt);break;case 4:i.vertexAttrib4fv(z.location,mt);break;default:i.vertexAttrib1fv(z.location,mt)}}}}y()}function R(){P();for(const v in n){const w=n[v];for(const U in w){const N=w[U];for(const X in N)h(N[X].object),delete N[X];delete w[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const U in w){const N=w[U];for(const X in N)h(N[X].object),delete N[X];delete w[U]}delete n[v.id]}function b(v){for(const w in n){const U=n[w];if(U[v.id]===void 0)continue;const N=U[v.id];for(const X in N)h(N[X].object),delete N[X];delete U[v.id]}}function P(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Dg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<d.length;_++)e.update(m,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Vn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==yi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==_i&&!P)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:E}}function Ng(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ji,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,x=y*4;let M=g.clippingState||null;c.value=M,M=h(m,d,x,f);for(let R=0;R!==x;++R)M[R]=e[R];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Og(i){let t=new WeakMap;function e(o,a){return a===uc?o.mapping=Xs:a===dc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===dc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Y0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class hd extends ad{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Is=4,gh=[.125,.215,.35,.446,.526,.582],es=20,Ea=new hd,_h=new Gt;let ba=null,Ta=0,Aa=0,Ra=!1;const Qi=(1+Math.sqrt(5))/2,Es=1/Qi,xh=[new I(-Qi,Es,0),new I(Qi,Es,0),new I(-Es,0,Qi),new I(Es,0,Qi),new I(0,Qi,-Es),new I(0,Qi,Es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Ta,Aa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Tr,format:Vn,colorSpace:Gi,depthBuffer:!1},s=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Fg(r,t,e)}return s}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_h),h.toneMapping=Bi,h.autoClear=!1;const f=new Mn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new st(new Ot,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(_h),_=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):y===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;Jr(s,y*x,g>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Jr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(s-r-1)%xh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):es;p>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${es}`);const g=[];let y=0;for(let b=0;b<es;++b){const P=b/_,D=Math.exp(-P*P/2);g.push(D),b===0?y+=D:b<p&&(y+=2*D)}for(let b=0;b<g.length;b++)g[b]=g[b]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const M=this._sizeLods[s],R=3*M*(s>x-Is?s-x+Is:0),E=4*(this._cubeSize-M);Jr(e,R,E,3*M,2*M),c.setRenderTarget(e),c.render(u,Ea)}}function zg(i){const t=[],e=[],n=[];let s=i;const r=i-Is+1+gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Is?c=gh[o-i+Is-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*f),x=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,P=E>2?0:-1,D=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(D,_*m*E),x.set(d,p*m*E);const v=[E,E,E,E,E,E];M.set(v,g*m*E)}const R=new Qe;R.setAttribute("position",new De(y,_)),R.setAttribute("uv",new De(x,p)),R.setAttribute("faceIndex",new De(M,g)),t.push(R),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(i,t,e){const n=new ss(i,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fg(i,t,e){const n=new Float32Array(es),s=new I(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Mh(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Sh(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function kg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===uc||c===dc,h=c===Xs||c===Ys;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new vh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new vh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Bg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ro("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let p=0,g=_.length;p<g;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const R=y[x+0],E=y[x+1],b=y[x+2];d.push(R,E,E,b,b,R)}}else if(m!==void 0){const y=m.array;_=m.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const R=x+0,E=x+1,b=x+2;d.push(R,E,E,b,b,R)}}else return;const p=new(Qu(d)?rd:sd)(d,1);p.version=_;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)l(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let y=0;y<m;y++)g+=f[y];for(let y=0;y<_.length;y++)e.update(g,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let R=a.attributes.position.count*M,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*E*4*u),P=new ed(b,R,E,u);P.type=_i,P.needsUpdate=!0;const D=M*4;for(let w=0;w<u;w++){const U=g[w],N=y[w],X=x[w],q=R*E*4*w;for(let G=0;G<U.count;G++){const j=G*D;m===!0&&(s.fromBufferAttribute(U,G),b[q+j+0]=s.x,b[q+j+1]=s.y,b[q+j+2]=s.z,b[q+j+3]=0),_===!0&&(s.fromBufferAttribute(N,G),b[q+j+4]=s.x,b[q+j+5]=s.y,b[q+j+6]=s.z,b[q+j+7]=0),p===!0&&(s.fromBufferAttribute(X,G),b[q+j+8]=s.x,b[q+j+9]=s.y,b[q+j+10]=s.z,b[q+j+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new St(R,E)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ud extends on{constructor(t,e,n,s,r,o,a,c,l,h=Bs){if(h!==Bs&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=is),n===void 0&&h===Ks&&(n=js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dd=new on,wh=new ud(1,1),fd=new ed,pd=new L0,md=new cd,Eh=[],bh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qo(i,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),Be(e,n)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),Be(e,n)}}function Jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),Be(e,n)}}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function i_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function r_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function o_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function a_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wh.compareFunction=Ju,r=wh):r=dd,e.setTexture2D(t||r,s)}function c_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function l_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||md,s)}function h_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function u_(i){switch(i){case 5126:return Xg;case 35664:return Yg;case 35665:return jg;case 35666:return Kg;case 35674:return $g;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}function d_(i,t){i.uniform1fv(this.addr,t)}function f_(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function p_(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function m_(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function g_(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function __(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x_(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function v_(i,t){i.uniform1iv(this.addr,t)}function y_(i,t){i.uniform2iv(this.addr,t)}function M_(i,t){i.uniform3iv(this.addr,t)}function S_(i,t){i.uniform4iv(this.addr,t)}function w_(i,t){i.uniform1uiv(this.addr,t)}function E_(i,t){i.uniform2uiv(this.addr,t)}function b_(i,t){i.uniform3uiv(this.addr,t)}function T_(i,t){i.uniform4uiv(this.addr,t)}function A_(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dd,r[o])}function R_(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pd,r[o])}function C_(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||md,r[o])}function P_(i,t,e){const n=this.cache,s=t.length,r=qo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fd,r[o])}function L_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return E_;case 36295:return b_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class I_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u_(e.type)}}class D_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L_(e.type)}}class U_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Ch(i,t){i.seq.push(t),i.map[t.id]=t}function N_(i,t,e){const n=i.name,s=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ch(e,l===void 0?new I_(a,i,t):new D_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new U_(a),Ch(e,u)),e=u}}}class Co{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);N_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ph(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const O_=37297;let z_=0;function F_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function k_(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===Oo&&e===No?n="LinearDisplayP3ToLinearSRGB":t===No&&e===Oo&&(n="LinearSRGBToLinearDisplayP3"),i){case Gi:case Vo:return[n,"LinearTransferOETF"];case ze:case ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+F_(i.getShaderSource(t),o)}else return s}function B_(i,t){const e=k_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function H_(i,t){let e;switch(t){case Vf:e="Linear";break;case Wf:e="Reinhard";break;case qf:e="Cineon";break;case Bu:e="ACESFilmic";break;case Yf:e="AgX";break;case jf:e="Neutral";break;case Xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qr=new I;function G_(){le.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function W_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function Ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(X_,j_)}const Y_=new Map;function j_(i,t){let e=Qt[t];if(e===void 0){const n=Y_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(K_,$_)}function $_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Z_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function J_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function tx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:t="ENVMAP_BLENDING_MULTIPLY";break;case Hf:t="ENVMAP_BLENDING_MIX";break;case Gf:t="ENVMAP_BLENDING_ADD";break}return t}function ex(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Z_(e),l=J_(e),h=Q_(e),u=tx(e),d=ex(e),f=V_(e),m=W_(r),_=s.createProgram();let p,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(p=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,B_("linearToOutputTexel",e.outputColorSpace),G_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=Bc(o),o=Ih(o,e),o=Dh(o,e),a=Bc(a),a=Ih(a,e),a=Dh(a,e),o=Uh(o),a=Uh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+p+o,M=y+g+a,R=Ph(s,s.VERTEX_SHADER,x),E=Ph(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(w){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(R).trim(),X=s.getShaderInfoLog(E).trim();let q=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,E);else{const j=Lh(s,R,"vertex"),z=Lh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+j+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||X==="")&&(G=!1);G&&(w.diagnostics={runnable:q,programLog:U,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:g}})}s.deleteShader(R),s.deleteShader(E),P=new Co(s,_),D=q_(s,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let D;this.getAttributes=function(){return D===void 0&&b(this),D};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,O_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let ix=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rx(t),e.set(t,n)),n}}class rx{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}}function ox(i,t,e,n,s,r,o){const a=new nd,c=new sx,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,w,U,N,X){const q=N.fog,G=X.geometry,j=v.isMeshStandardMaterial?N.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||j),pt=z&&z.mapping===Go?z.image.height:null,mt=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,kt=lt!==void 0?lt.length:0;let Kt=0;G.morphAttributes.position!==void 0&&(Kt=1),G.morphAttributes.normal!==void 0&&(Kt=2),G.morphAttributes.color!==void 0&&(Kt=3);let Q,F,dt,nt;if(mt){const Ye=ti[mt];Q=Ye.vertexShader,F=Ye.fragmentShader}else Q=v.vertexShader,F=v.fragmentShader,c.update(v),dt=c.getVertexShaderID(v),nt=c.getFragmentShaderID(v);const vt=i.getRenderTarget(),_t=X.isInstancedMesh===!0,Et=X.isBatchedMesh===!0,At=!!v.map,Z=!!v.matcap,T=!!z,ft=!!v.aoMap,rt=!!v.lightMap,it=!!v.bumpMap,at=!!v.normalMap,Pt=!!v.displacementMap,ot=!!v.emissiveMap,C=!!v.metalnessMap,S=!!v.roughnessMap,B=v.anisotropy>0,J=v.clearcoat>0,et=v.dispersion>0,tt=v.iridescence>0,Lt=v.sheen>0,ht=v.transmission>0,Mt=B&&!!v.anisotropyMap,$t=J&&!!v.clearcoatMap,ut=J&&!!v.clearcoatNormalMap,Rt=J&&!!v.clearcoatRoughnessMap,Bt=tt&&!!v.iridescenceMap,Ht=tt&&!!v.iridescenceThicknessMap,bt=Lt&&!!v.sheenColorMap,ee=Lt&&!!v.sheenRoughnessMap,qt=!!v.specularMap,re=!!v.specularColorMap,k=!!v.specularIntensityMap,L=ht&&!!v.transmissionMap,O=ht&&!!v.thicknessMap,Y=!!v.gradientMap,ct=!!v.alphaMap,wt=v.alphaTest>0,Jt=!!v.alphaHash,Ee=!!v.extensions;let Se=Bi;v.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Se=i.toneMapping);const ne={shaderID:mt,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:F,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Et,batchingColor:Et&&X._colorsTexture!==null,instancing:_t,instancingColor:_t&&X.instanceColor!==null,instancingMorph:_t&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Gi,alphaToCoverage:!!v.alphaToCoverage,map:At,matcap:Z,envMap:T,envMapMode:T&&z.mapping,envMapCubeUVHeight:pt,aoMap:ft,lightMap:rt,bumpMap:it,normalMap:at,displacementMap:f&&Pt,emissiveMap:ot,normalMapObjectSpace:at&&v.normalMapType===Jf,normalMapTangentSpace:at&&v.normalMapType===pl,metalnessMap:C,roughnessMap:S,anisotropy:B,anisotropyMap:Mt,clearcoat:J,clearcoatMap:$t,clearcoatNormalMap:ut,clearcoatRoughnessMap:Rt,dispersion:et,iridescence:tt,iridescenceMap:Bt,iridescenceThicknessMap:Ht,sheen:Lt,sheenColorMap:bt,sheenRoughnessMap:ee,specularMap:qt,specularColorMap:re,specularIntensityMap:k,transmission:ht,transmissionMap:L,thicknessMap:O,gradientMap:Y,opaque:v.transparent===!1&&v.blending===ks&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:wt,alphaHash:Jt,combine:v.combine,mapUv:At&&p(v.map.channel),aoMapUv:ft&&p(v.aoMap.channel),lightMapUv:rt&&p(v.lightMap.channel),bumpMapUv:it&&p(v.bumpMap.channel),normalMapUv:at&&p(v.normalMap.channel),displacementMapUv:Pt&&p(v.displacementMap.channel),emissiveMapUv:ot&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:Mt&&p(v.anisotropyMap.channel),clearcoatMapUv:$t&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(v.sheenRoughnessMap.channel),specularMapUv:qt&&p(v.specularMap.channel),specularColorMapUv:re&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:L&&p(v.transmissionMap.channel),thicknessMapUv:O&&p(v.thicknessMap.channel),alphaMapUv:ct&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(at||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(At||ct),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Kt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function y(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const w=_[v.type];let U;if(w){const N=ti[w];U=V0.clone(N.uniforms)}else U=v.uniforms;return U}function E(v,w){let U;for(let N=0,X=h.length;N<X;N++){const q=h[N];if(q.cacheKey===w){U=q,++U.usedTimes;break}}return U===void 0&&(U=new nx(i,w,v,r),h.push(U)),U}function b(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function P(v){c.remove(v)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:R,acquireProgram:E,releaseProgram:b,releaseShaderCache:P,programs:h,dispose:D}}function ax(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=_,g.group=p),t++,g}function a(u,d,f,m,_,p){const g=o(u,d,f,m,_,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function c(u,d,f,m,_,p){const g=o(u,d,f,m,_,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||cx),n.length>1&&n.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function lx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new zh,i.set(n,[o])):s>=r.length?(o=new zh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function ux(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dx=0;function fx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function px(i){const t=new hx,e=ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ye,o=new ye;function a(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,x=0,M=0,R=0,E=0,b=0;l.sort(fx);for(let D=0,v=l.length;D<v;D++){const w=l[D],U=w.color,N=w.intensity,X=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=U.r*N,u+=U.g*N,d+=U.b*N;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],N);b++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,z=e.get(w);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=G,f++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(U).multiplyScalar(N),G.distance=X,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[_]=G;const j=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,j.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[_]=j.matrix,w.castShadow){const z=e.get(w);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,M++}_++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(U).multiplyScalar(N),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=G,p++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const j=w.shadow,z=e.get(w);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=w.shadow.matrix,x++}n.point[m]=G,m++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(N),G.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[g]=G,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==g||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=g,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=b,n.version=dx++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){const x=l[g];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Fh(i){const t=new px(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function mx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Fh(i),t.set(s,[a])):r>=o.length?(a=new Fh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class gx extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _x extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`;function yx(i,t,e){let n=new xl;const s=new St,r=new St,o=new fe,a=new gx({depthPacking:Zf}),c=new _x,l={},h=e.maxTextureSize,u={[si]:rn,[rn]:si,[Hn]:Hn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:xx,fragmentShader:vx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Qe;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let g=this.type;this.render=function(E,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const D=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ki),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=g!==mi&&this.type===mi,X=g===mi&&this.type!==mi;for(let q=0,G=E.length;q<G;q++){const j=E[q],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const pt=z.getFrameExtents();if(s.multiply(pt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,z.mapSize.y=r.y)),z.map===null||N===!0||X===!0){const lt=this.type!==mi?{minFilter:In,magFilter:In}:{};z.map!==null&&z.map.dispose(),z.map=new ss(s.x,s.y,lt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const mt=z.getViewportCount();for(let lt=0;lt<mt;lt++){const kt=z.getViewport(lt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),U.viewport(o),z.updateMatrices(j,lt),n=z.getFrustum(),M(b,P,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&y(z,P),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(D,v,w)};function y(E,b){const P=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,P,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,P,f,_,null)}function x(E,b,P,D){let v=null;const w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,N=b.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let q=X[N];q===void 0&&(q=v.clone(),X[N]=q,b.addEventListener("dispose",R)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,D===mi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:u[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=P}return v}function M(E,b,P,D,v){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const N=t.update(E),X=E.material;if(Array.isArray(X)){const q=N.groups;for(let G=0,j=q.length;G<j;G++){const z=q[G],pt=X[z.materialIndex];if(pt&&pt.visible){const mt=x(E,pt,D,v);E.onBeforeShadow(i,E,b,P,N,mt,z),i.renderBufferDirect(P,null,N,mt,E,z),E.onAfterShadow(i,E,b,P,N,mt,z)}}}else if(X.visible){const q=x(E,X,D,v);E.onBeforeShadow(i,E,b,P,N,q,null),i.renderBufferDirect(P,null,N,q,E,null),E.onAfterShadow(i,E,b,P,N,q,null)}}const U=E.children;for(let N=0,X=U.length;N<X;N++)M(U[N],b,P,D,v)}function R(E){E.target.removeEventListener("dispose",R);for(const P in l){const D=l[P],v=E.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}const Mx={[sc]:rc,[oc]:lc,[ac]:hc,[qs]:cc,[rc]:sc,[lc]:oc,[hc]:ac,[cc]:qs};function Sx(i){function t(){let k=!1;const L=new fe;let O=null;const Y=new fe(0,0,0,0);return{setMask:function(ct){O!==ct&&!k&&(i.colorMask(ct,ct,ct,ct),O=ct)},setLocked:function(ct){k=ct},setClear:function(ct,wt,Jt,Ee,Se){Se===!0&&(ct*=Ee,wt*=Ee,Jt*=Ee),L.set(ct,wt,Jt,Ee),Y.equals(L)===!1&&(i.clearColor(ct,wt,Jt,Ee),Y.copy(L))},reset:function(){k=!1,O=null,Y.set(-1,0,0,0)}}}function e(){let k=!1,L=!1,O=null,Y=null,ct=null;return{setReversed:function(wt){L=wt},setTest:function(wt){wt?dt(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(wt){O!==wt&&!k&&(i.depthMask(wt),O=wt)},setFunc:function(wt){if(L&&(wt=Mx[wt]),Y!==wt){switch(wt){case sc:i.depthFunc(i.NEVER);break;case rc:i.depthFunc(i.ALWAYS);break;case oc:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case ac:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=wt}},setLocked:function(wt){k=wt},setClear:function(wt){ct!==wt&&(i.clearDepth(wt),ct=wt)},reset:function(){k=!1,O=null,Y=null,ct=null}}}function n(){let k=!1,L=null,O=null,Y=null,ct=null,wt=null,Jt=null,Ee=null,Se=null;return{setTest:function(ne){k||(ne?dt(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ne){L!==ne&&!k&&(i.stencilMask(ne),L=ne)},setFunc:function(ne,Ye,Sn){(O!==ne||Y!==Ye||ct!==Sn)&&(i.stencilFunc(ne,Ye,Sn),O=ne,Y=Ye,ct=Sn)},setOp:function(ne,Ye,Sn){(wt!==ne||Jt!==Ye||Ee!==Sn)&&(i.stencilOp(ne,Ye,Sn),wt=ne,Jt=Ye,Ee=Sn)},setLocked:function(ne){k=ne},setClear:function(ne){Se!==ne&&(i.clearStencil(ne),Se=ne)},reset:function(){k=!1,L=null,O=null,Y=null,ct=null,wt=null,Jt=null,Ee=null,Se=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,y=null,x=null,M=null,R=null,E=new Gt(0,0,0),b=0,P=!1,D=null,v=null,w=null,U=null,N=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=G>=2);let z=null,pt={};const mt=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),kt=new fe().fromArray(mt),Kt=new fe().fromArray(lt);function Q(k,L,O,Y){const ct=new Uint8Array(4),wt=i.createTexture();i.bindTexture(k,wt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<O;Jt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(L+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return wt}const F={};F[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),r.setFunc(qs),rt(!1),it(Yl),dt(i.CULL_FACE),T(ki);function dt(k){l[k]!==!0&&(i.enable(k),l[k]=!0)}function nt(k){l[k]!==!1&&(i.disable(k),l[k]=!1)}function vt(k,L){return h[k]!==L?(i.bindFramebuffer(k,L),h[k]=L,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=L),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=L),!0):!1}function _t(k,L){let O=d,Y=!1;if(k){O=u.get(L),O===void 0&&(O=[],u.set(L,O));const ct=k.textures;if(O.length!==ct.length||O[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Jt=ct.length;wt<Jt;wt++)O[wt]=i.COLOR_ATTACHMENT0+wt;O.length=ct.length,Y=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,Y=!0);Y&&i.drawBuffers(O)}function Et(k){return f!==k?(i.useProgram(k),f=k,!0):!1}const At={[ts]:i.FUNC_ADD,[Ef]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};At[Tf]=i.MIN,At[Af]=i.MAX;const Z={[Rf]:i.ZERO,[Cf]:i.ONE,[Pf]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[Uf]:i.DST_COLOR,[If]:i.DST_ALPHA,[Lf]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[zf]:i.CONSTANT_COLOR,[Ff]:i.ONE_MINUS_CONSTANT_COLOR,[kf]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function T(k,L,O,Y,ct,wt,Jt,Ee,Se,ne){if(k===ki){m===!0&&(nt(i.BLEND),m=!1);return}if(m===!1&&(dt(i.BLEND),m=!0),k!==wf){if(k!==_||ne!==P){if((p!==ts||x!==ts)&&(i.blendEquation(i.FUNC_ADD),p=ts,x=ts),ne)switch(k){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,y=null,M=null,R=null,E.set(0,0,0),b=0,_=k,P=ne}return}ct=ct||L,wt=wt||O,Jt=Jt||Y,(L!==p||ct!==x)&&(i.blendEquationSeparate(At[L],At[ct]),p=L,x=ct),(O!==g||Y!==y||wt!==M||Jt!==R)&&(i.blendFuncSeparate(Z[O],Z[Y],Z[wt],Z[Jt]),g=O,y=Y,M=wt,R=Jt),(Ee.equals(E)===!1||Se!==b)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Se),E.copy(Ee),b=Se),_=k,P=!1}function ft(k,L){k.side===Hn?nt(i.CULL_FACE):dt(i.CULL_FACE);let O=k.side===rn;L&&(O=!O),rt(O),k.blending===ks&&k.transparent===!1?T(ki):T(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const Y=k.stencilWrite;o.setTest(Y),Y&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){D!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),D=k)}function it(k){k!==Mf?(dt(i.CULL_FACE),k!==v&&(k===Yl?i.cullFace(i.BACK):k===Sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),v=k}function at(k){k!==w&&(q&&i.lineWidth(k),w=k)}function Pt(k,L,O){k?(dt(i.POLYGON_OFFSET_FILL),(U!==L||N!==O)&&(i.polygonOffset(L,O),U=L,N=O)):nt(i.POLYGON_OFFSET_FILL)}function ot(k){k?dt(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function C(k){k===void 0&&(k=i.TEXTURE0+X-1),z!==k&&(i.activeTexture(k),z=k)}function S(k,L,O){O===void 0&&(z===null?O=i.TEXTURE0+X-1:O=z);let Y=pt[O];Y===void 0&&(Y={type:void 0,texture:void 0},pt[O]=Y),(Y.type!==k||Y.texture!==L)&&(z!==O&&(i.activeTexture(O),z=O),i.bindTexture(k,L||F[k]),Y.type=k,Y.texture=L)}function B(){const k=pt[z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(k){kt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),kt.copy(k))}function bt(k){Kt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Kt.copy(k))}function ee(k,L){let O=c.get(L);O===void 0&&(O=new WeakMap,c.set(L,O));let Y=O.get(k);Y===void 0&&(Y=i.getUniformBlockIndex(L,k.name),O.set(k,Y))}function qt(k,L){const Y=c.get(L).get(k);a.get(L)!==Y&&(i.uniformBlockBinding(L,Y,k.__bindingPointIndex),a.set(L,Y))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},z=null,pt={},h={},u=new WeakMap,d=[],f=null,m=!1,_=null,p=null,g=null,y=null,x=null,M=null,R=null,E=new Gt(0,0,0),b=0,P=!1,D=null,v=null,w=null,U=null,N=null,kt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:dt,disable:nt,bindFramebuffer:vt,drawBuffers:_t,useProgram:Et,setBlending:T,setMaterial:ft,setFlipSided:rt,setCullFace:it,setLineWidth:at,setPolygonOffset:Pt,setScissorTest:ot,activeTexture:C,bindTexture:S,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:Rt,texImage3D:Bt,updateUBOMapping:ee,uniformBlockBinding:qt,texStorage2D:$t,texStorage3D:ut,texSubImage2D:tt,texSubImage3D:Lt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Mt,scissor:Ht,viewport:bt,reset:re}}function kh(i,t,e,n){const s=wx(n);switch(e){case qu:return i*t;case Yu:return i*t;case ju:return i*t*2;case Ku:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case $u:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case Xu:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:case _c:return Math.max(i,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(i,8)*Math.max(t,8)/2;case xc:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ao:case Nc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zu:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wx(i){switch(i){case yi:case Gu:return{byteLength:1,components:1};case Sr:case Vu:case Tr:return{byteLength:2,components:1};case ll:case hl:return{byteLength:2,components:4};case is:case cl:case _i:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ex(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return f?new OffscreenCanvas(C,S):Fo("canvas")}function _(C,S,B){let J=1;const et=ot(C);if((et.width>B||et.height>B)&&(J=B/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(J*et.width),Lt=Math.floor(J*et.height);u===void 0&&(u=m(tt,Lt));const ht=S?m(tt,Lt):u;return ht.width=tt,ht.height=Lt,ht.getContext("2d").drawImage(C,0,0,tt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+tt+"x"+Lt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==In&&C.minFilter!==Ln}function g(C){i.generateMipmap(C)}function y(C,S,B,J,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=S;if(S===i.RED&&(B===i.FLOAT&&(tt=i.R32F),B===i.HALF_FLOAT&&(tt=i.R16F),B===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.R8UI),B===i.UNSIGNED_SHORT&&(tt=i.R16UI),B===i.UNSIGNED_INT&&(tt=i.R32UI),B===i.BYTE&&(tt=i.R8I),B===i.SHORT&&(tt=i.R16I),B===i.INT&&(tt=i.R32I)),S===i.RG&&(B===i.FLOAT&&(tt=i.RG32F),B===i.HALF_FLOAT&&(tt=i.RG16F),B===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.RG8UI),B===i.UNSIGNED_SHORT&&(tt=i.RG16UI),B===i.UNSIGNED_INT&&(tt=i.RG32UI),B===i.BYTE&&(tt=i.RG8I),B===i.SHORT&&(tt=i.RG16I),B===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),B===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),B===i.UNSIGNED_INT&&(tt=i.RGB32UI),B===i.BYTE&&(tt=i.RGB8I),B===i.SHORT&&(tt=i.RGB16I),B===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),B===i.UNSIGNED_INT&&(tt=i.RGBA32UI),B===i.BYTE&&(tt=i.RGBA8I),B===i.SHORT&&(tt=i.RGBA16I),B===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){const Lt=et?Uo:le.getTransfer(J);B===i.FLOAT&&(tt=i.RGBA32F),B===i.HALF_FLOAT&&(tt=i.RGBA16F),B===i.UNSIGNED_BYTE&&(tt=Lt===ve?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(C,S){let B;return C?S===null||S===is||S===js?B=i.DEPTH24_STENCIL8:S===_i?B=i.DEPTH32F_STENCIL8:S===Sr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===js?B=i.DEPTH_COMPONENT24:S===_i?B=i.DEPTH_COMPONENT32F:S===Sr&&(B=i.DEPTH_COMPONENT16),B}function M(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==In&&C.minFilter!==Ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&h.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),D(S)}function b(C){const S=n.get(C);if(S.__webglInit===void 0)return;const B=C.source,J=d.get(B);if(J){const et=J[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(C),Object.keys(J).length===0&&d.delete(B)}n.remove(C)}function P(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const B=C.source,J=d.get(B);delete J[S.__cacheKey],o.memory.textures--}function D(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let et=0;et<S.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[J][et]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let J=0,et=B.length;J<et;J++){const tt=n.get(B[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(C)}let v=0;function w(){v=0}function U(){const C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const B=n.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(B,C,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function q(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Kt(B,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function G(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Kt(B,C,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function j(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Q(B,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const z={[Do]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},pt={[In]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},mt={[Qf]:i.NEVER,[r0]:i.ALWAYS,[t0]:i.LESS,[Ju]:i.LEQUAL,[e0]:i.EQUAL,[s0]:i.GEQUAL,[n0]:i.GREATER,[i0]:i.NOTEQUAL};function lt(C,S){if(S.type===_i&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ln||S.magFilter===na||S.magFilter===Dr||S.magFilter===Ui||S.minFilter===Ln||S.minFilter===na||S.minFilter===Dr||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,z[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,z[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,z[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===In||S.minFilter!==Dr&&S.minFilter!==Ui||S.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const J=S.source;let et=d.get(J);et===void 0&&(et={},d.set(J,et));const tt=N(S);if(tt!==C.__cacheKey){et[tt]===void 0&&(et[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[tt].usedTimes++;const Lt=et[C.__cacheKey];Lt!==void 0&&(et[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&P(S)),C.__cacheKey=tt,C.__webglTexture=et[tt].texture}return B}function Kt(C,S,B){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const et=kt(C,S),tt=S.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+B);const Lt=n.get(tt);if(tt.version!==Lt.__version||et===!0){e.activeTexture(i.TEXTURE0+B);const ht=le.getPrimaries(le.workingColorSpace),Mt=S.colorSpace===Ii?null:le.getPrimaries(S.colorSpace),$t=S.colorSpace===Ii||ht===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ut=_(S.image,!1,s.maxTextureSize);ut=Pt(S,ut);const Rt=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type);let Ht=y(S.internalFormat,Rt,Bt,S.colorSpace,S.isVideoTexture);lt(J,S);let bt;const ee=S.mipmaps,qt=S.isVideoTexture!==!0,re=Lt.__version===void 0||et===!0,k=tt.dataReady,L=M(S,ut);if(S.isDepthTexture)Ht=x(S.format===Ks,S.type),re&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ht,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ht,ut.width,ut.height,0,Rt,Bt,null));else if(S.isDataTexture)if(ee.length>0){qt&&re&&e.texStorage2D(i.TEXTURE_2D,L,Ht,ee[0].width,ee[0].height);for(let O=0,Y=ee.length;O<Y;O++)bt=ee[O],qt?k&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,bt.width,bt.height,Rt,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,O,Ht,bt.width,bt.height,0,Rt,Bt,bt.data);S.generateMipmaps=!1}else qt?(re&&e.texStorage2D(i.TEXTURE_2D,L,Ht,ut.width,ut.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Rt,Bt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,ut.width,ut.height,0,Rt,Bt,ut.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Ht,ee[0].width,ee[0].height,ut.depth);for(let O=0,Y=ee.length;O<Y;O++)if(bt=ee[O],S.format!==Vn)if(Rt!==null)if(qt){if(k)if(S.layerUpdates.size>0){const ct=kh(bt.width,bt.height,S.format,S.type);for(const wt of S.layerUpdates){const Jt=bt.data.subarray(wt*ct/bt.data.BYTES_PER_ELEMENT,(wt+1)*ct/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,wt,bt.width,bt.height,1,Rt,Jt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,bt.width,bt.height,ut.depth,Rt,bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Ht,bt.width,bt.height,ut.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,bt.width,bt.height,ut.depth,Rt,Bt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,Ht,bt.width,bt.height,ut.depth,0,Rt,Bt,bt.data)}else{qt&&re&&e.texStorage2D(i.TEXTURE_2D,L,Ht,ee[0].width,ee[0].height);for(let O=0,Y=ee.length;O<Y;O++)bt=ee[O],S.format!==Vn?Rt!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,O,Ht,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,bt.width,bt.height,Rt,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,O,Ht,bt.width,bt.height,0,Rt,Bt,bt.data)}else if(S.isDataArrayTexture)if(qt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Ht,ut.width,ut.height,ut.depth),k)if(S.layerUpdates.size>0){const O=kh(ut.width,ut.height,S.format,S.type);for(const Y of S.layerUpdates){const ct=ut.data.subarray(Y*O/ut.data.BYTES_PER_ELEMENT,(Y+1)*O/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ut.width,ut.height,1,Rt,Bt,ct)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Rt,Bt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,ut.width,ut.height,ut.depth,0,Rt,Bt,ut.data);else if(S.isData3DTexture)qt?(re&&e.texStorage3D(i.TEXTURE_3D,L,Ht,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Rt,Bt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,ut.width,ut.height,ut.depth,0,Rt,Bt,ut.data);else if(S.isFramebufferTexture){if(re)if(qt)e.texStorage2D(i.TEXTURE_2D,L,Ht,ut.width,ut.height);else{let O=ut.width,Y=ut.height;for(let ct=0;ct<L;ct++)e.texImage2D(i.TEXTURE_2D,ct,Ht,O,Y,0,Rt,Bt,null),O>>=1,Y>>=1}}else if(ee.length>0){if(qt&&re){const O=ot(ee[0]);e.texStorage2D(i.TEXTURE_2D,L,Ht,O.width,O.height)}for(let O=0,Y=ee.length;O<Y;O++)bt=ee[O],qt?k&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Rt,Bt,bt):e.texImage2D(i.TEXTURE_2D,O,Ht,Rt,Bt,bt);S.generateMipmaps=!1}else if(qt){if(re){const O=ot(ut);e.texStorage2D(i.TEXTURE_2D,L,Ht,O.width,O.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Bt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Rt,Bt,ut);p(S)&&g(J),Lt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,B){if(S.image.length!==6)return;const J=kt(C,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const tt=n.get(et);if(et.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+B);const Lt=le.getPrimaries(le.workingColorSpace),ht=S.colorSpace===Ii?null:le.getPrimaries(S.colorSpace),Mt=S.colorSpace===Ii||Lt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const $t=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let Y=0;Y<6;Y++)!$t&&!ut?Rt[Y]=_(S.image[Y],!0,s.maxCubemapSize):Rt[Y]=ut?S.image[Y].image:S.image[Y],Rt[Y]=Pt(S,Rt[Y]);const Bt=Rt[0],Ht=r.convert(S.format,S.colorSpace),bt=r.convert(S.type),ee=y(S.internalFormat,Ht,bt,S.colorSpace),qt=S.isVideoTexture!==!0,re=tt.__version===void 0||J===!0,k=et.dataReady;let L=M(S,Bt);lt(i.TEXTURE_CUBE_MAP,S);let O;if($t){qt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,ee,Bt.width,Bt.height);for(let Y=0;Y<6;Y++){O=Rt[Y].mipmaps;for(let ct=0;ct<O.length;ct++){const wt=O[ct];S.format!==Vn?Ht!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,wt.width,wt.height,Ht,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,ee,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,wt.width,wt.height,Ht,bt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,ee,wt.width,wt.height,0,Ht,bt,wt.data)}}}else{if(O=S.mipmaps,qt&&re){O.length>0&&L++;const Y=ot(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,ee,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ut){qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Rt[Y].width,Rt[Y].height,Ht,bt,Rt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ee,Rt[Y].width,Rt[Y].height,0,Ht,bt,Rt[Y].data);for(let ct=0;ct<O.length;ct++){const Jt=O[ct].image[Y].image;qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,Jt.width,Jt.height,Ht,bt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,ee,Jt.width,Jt.height,0,Ht,bt,Jt.data)}}else{qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ht,bt,Rt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ee,Ht,bt,Rt[Y]);for(let ct=0;ct<O.length;ct++){const wt=O[ct];qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,Ht,bt,wt.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,ee,Ht,bt,wt.image[Y])}}}p(S)&&g(i.TEXTURE_CUBE_MAP),tt.__version=et.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function F(C,S,B,J,et,tt){const Lt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),Mt=y(B.internalFormat,Lt,ht,B.colorSpace);if(!n.get(S).__hasExternalTextures){const ut=Math.max(1,S.width>>tt),Rt=Math.max(1,S.height>>tt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,tt,Mt,ut,Rt,S.depth,0,Lt,ht,null):e.texImage2D(et,tt,Mt,ut,Rt,0,Lt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,n.get(B).__webglTexture,0,rt(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,n.get(B).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(C,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const J=S.depthTexture,et=J&&J.isDepthTexture?J.type:null,tt=x(S.stencilBuffer,et),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=rt(S);it(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,tt,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,C)}else{const J=S.textures;for(let et=0;et<J.length;et++){const tt=J[et],Lt=r.convert(tt.format,tt.colorSpace),ht=r.convert(tt.type),Mt=y(tt.internalFormat,Lt,ht,tt.colorSpace),$t=rt(S);B&&it(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Mt,S.width,S.height):it(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,et=rt(S);if(S.depthTexture.format===Bs)it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===Ks)it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function vt(C){const S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),dt(S.__webglDepthbuffer[J],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),dt(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(C,S,B){const J=n.get(C);S!==void 0&&F(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&vt(C)}function Et(C){const S=C.texture,B=n.get(C),J=n.get(S);C.addEventListener("dispose",E);const et=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Lt=et.length>1;if(Lt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),tt){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)B.__webglFramebuffer[ht][Mt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let ht=0,Mt=et.length;ht<Mt;ht++){const $t=n.get(et[ht]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&it(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const Mt=et[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const $t=r.convert(Mt.format,Mt.colorSpace),ut=r.convert(Mt.type),Rt=y(Mt.internalFormat,$t,ut,Mt.colorSpace,C.isXRRenderTarget===!0),Bt=rt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)F(B.__webglFramebuffer[ht][Mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt);else F(B.__webglFramebuffer[ht],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(S)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ht=0,Mt=et.length;ht<Mt;ht++){const $t=et[ht],ut=n.get($t);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),lt(i.TEXTURE_2D,$t),F(B.__webglFramebuffer,C,$t,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p($t)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),lt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)F(B.__webglFramebuffer[Mt],C,S,i.COLOR_ATTACHMENT0,ht,Mt);else F(B.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ht,0);p(S)&&g(ht),e.unbindTexture()}C.depthBuffer&&vt(C)}function At(C){const S=C.textures;for(let B=0,J=S.length;B<J;B++){const et=S[B];if(p(et)){const tt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(et).__webglTexture;e.bindTexture(tt,Lt),g(tt),e.unbindTexture()}}}const Z=[],T=[];function ft(C){if(C.samples>0){if(it(C)===!1){const S=C.textures,B=C.width,J=C.height;let et=i.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(C),ht=S.length>1;if(ht)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Mt]);const $t=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,et,i.NEAREST),c===!0&&(Z.length=0,T.length=0,Z.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Z.push(tt),T.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Mt]);const $t=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function rt(C){return Math.min(s.maxSamples,C.samples)}function it(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Pt(C,S){const B=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Gi&&B!==Ii&&(le.getTransfer(B)===ve?(J!==Vn||et!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=_t,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=it}function bx(i,t){function e(n,s=Ii){let r;const o=le.getTransfer(s);if(n===yi)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.BYTE;if(n===Vu)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Tr)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===Xu)return i.RGB;if(n===Vn)return i.RGBA;if(n===Yu)return i.LUMINANCE;if(n===ju)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===Ku)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===$u)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===wo||n===Eo||n===bo||n===To)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===vc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Sc||n===wc||n===Ec||n===bc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Nc||n===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===zc||n===Fc||n===kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Tx extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ax={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
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

}`;class Px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Si({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lx extends tr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new Px,p=e.getContextAttributes();let g=null,y=null;const x=[],M=[],R=new St;let E=null;const b=new un;b.layers.enable(1),b.viewport=new fe;const P=new un;P.layers.enable(2),P.viewport=new fe;const D=[b,P],v=new Tx;v.layers.enable(1),v.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let F=x[Q];return F===void 0&&(F=new Pa,x[Q]=F),F.getTargetRaySpace()},this.getControllerGrip=function(Q){let F=x[Q];return F===void 0&&(F=new Pa,x[Q]=F),F.getGripSpace()},this.getHand=function(Q){let F=x[Q];return F===void 0&&(F=new Pa,x[Q]=F),F.getHandSpace()};function N(Q){const F=M.indexOf(Q.inputSource);if(F===-1)return;const dt=x[F];dt!==void 0&&(dt.update(Q.inputSource,Q.frame,l||o),dt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let Q=0;Q<x.length;Q++){const F=M[Q];F!==null&&(M[Q]=null,x[Q].disconnect(F))}w=null,U=null,_.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ss(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let F=null,dt=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=p.stencil?Ks:Bs,dt=p.stencil?js:is);const vt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ss(d.textureWidth,d.textureHeight,{format:Vn,type:yi,depthTexture:new ud(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Q){for(let F=0;F<Q.removed.length;F++){const dt=Q.removed[F],nt=M.indexOf(dt);nt>=0&&(M[nt]=null,x[nt].disconnect(dt))}for(let F=0;F<Q.added.length;F++){const dt=Q.added[F];let nt=M.indexOf(dt);if(nt===-1){for(let _t=0;_t<x.length;_t++)if(_t>=M.length){M.push(dt),nt=_t;break}else if(M[_t]===null){M[_t]=dt,nt=_t;break}if(nt===-1)break}const vt=x[nt];vt&&vt.connect(dt)}}const G=new I,j=new I;function z(Q,F,dt){G.setFromMatrixPosition(F.matrixWorld),j.setFromMatrixPosition(dt.matrixWorld);const nt=G.distanceTo(j),vt=F.projectionMatrix.elements,_t=dt.projectionMatrix.elements,Et=vt[14]/(vt[10]-1),At=vt[14]/(vt[10]+1),Z=(vt[9]+1)/vt[5],T=(vt[9]-1)/vt[5],ft=(vt[8]-1)/vt[0],rt=(_t[8]+1)/_t[0],it=Et*ft,at=Et*rt,Pt=nt/(-ft+rt),ot=Pt*-ft;if(F.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(Pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),vt[10]===-1)Q.projectionMatrix.copy(F.projectionMatrix),Q.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const C=Et+Pt,S=At+Pt,B=it-ot,J=at+(nt-ot),et=Z*At/S*C,tt=T*At/S*C;Q.projectionMatrix.makePerspective(B,J,et,tt,C,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,F){F===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(F.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let F=Q.near,dt=Q.far;_.texture!==null&&(_.depthNear>0&&(F=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),v.near=P.near=b.near=F,v.far=P.far=b.far=dt,(w!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,U=v.far);const nt=Q.parent,vt=v.cameras;pt(v,nt);for(let _t=0;_t<vt.length;_t++)pt(vt[_t],nt);vt.length===2?z(v,b,P):v.projectionMatrix.copy(b.projectionMatrix),mt(Q,v,nt)};function mt(Q,F,dt){dt===null?Q.matrix.copy(F.matrixWorld):(Q.matrix.copy(dt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(F.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(F.projectionMatrix),Q.projectionMatrixInverse.copy(F.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$s*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let lt=null;function kt(Q,F){if(h=F.getViewerPose(l||o),m=F,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let nt=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let _t=0;_t<dt.length;_t++){const Et=dt[_t];let At=null;if(f!==null)At=f.getViewport(Et);else{const T=u.getViewSubImage(d,Et);At=T.viewport,_t===0&&(t.setRenderTargetTextures(y,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(y))}let Z=D[_t];Z===void 0&&(Z=new un,Z.layers.enable(_t),Z.viewport=new fe,D[_t]=Z),Z.matrix.fromArray(Et.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Et.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(At.x,At.y,At.width,At.height),_t===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(Z)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const _t=u.getDepthInformation(dt[0]);_t&&_t.isValid&&_t.texture&&_.init(t,_t,s.renderState)}}for(let dt=0;dt<x.length;dt++){const nt=M[dt],vt=x[dt];nt!==null&&vt!==void 0&&vt.update(nt,F,l||o)}lt&&lt(Q,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),m=null}const Kt=new ld;Kt.setAnimationLoop(kt),this.setAnimationLoop=function(Q){lt=Q},this.dispose=function(){}}}const Ki=new Wn,Ix=new ye;function Dx(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,od(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,x,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,y,x):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===rn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===rn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=t.get(g),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,Ki.copy(M),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),p.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(Ki)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,y,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=x*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(m(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(y,R);const E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const x=u();y.__bindingPointIndex=x;const M=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,b=M.length;E<b;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let D=0,v=P.length;D<v;D++){const w=P[D];if(f(w,E,D,R)===!0){const U=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let q=0;q<N.length;q++){const G=N[q],j=_(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+X,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,M,R){const E=y.value,b=x+"_"+M;if(R[b]===void 0)return typeof E=="number"||typeof E=="boolean"?R[b]=E:R[b]=E.clone(),!0;{const P=R[b];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[b]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(y){const x=y.uniforms;let M=0;const R=16;for(let b=0,P=x.length;b<P;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,w=D.length;v<w;v++){const U=D[v],N=Array.isArray(U.value)?U.value:[U.value];for(let X=0,q=N.length;X<q;X++){const G=N[X],j=_(G),z=M%R,pt=z%j.boundary,mt=z+pt;M+=pt,mt!==0&&R-mt<j.storage&&(M+=R-mt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=j.storage}}}const E=M%R;return E>0&&(M+=R-E),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Nx{constructor(t={}){const{canvas:e=S0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Bi,this.toneMappingExposure=1;const x=this;let M=!1,R=0,E=0,b=null,P=-1,D=null;const v=new fe,w=new fe;let U=null;const N=new Gt(0);let X=0,q=e.width,G=e.height,j=1,z=null,pt=null;const mt=new fe(0,0,q,G),lt=new fe(0,0,q,G);let kt=!1;const Kt=new xl;let Q=!1,F=!1;const dt=new ye,nt=new ye,vt=new I,_t=new fe,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Z(){return b===null?j:1}let T=n;function ft(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ol}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",wt,!1),T===null){const H="webgl2";if(T=ft(H,A),T===null)throw ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,it,at,Pt,ot,C,S,B,J,et,tt,Lt,ht,Mt,$t,ut,Rt,Bt,Ht,bt,ee,qt,re,k;function L(){rt=new Bg(T),rt.init(),qt=new bx(T,rt),it=new Ug(T,rt,t,qt),at=new Sx(T),it.reverseDepthBuffer&&at.buffers.depth.setReversed(!0),Pt=new Vg(T),ot=new ax,C=new Ex(T,rt,at,ot,it,qt,Pt),S=new Og(x),B=new kg(x),J=new $0(T),re=new Ig(T,J),et=new Hg(T,J,Pt,re),tt=new qg(T,et,J,Pt),Ht=new Wg(T,it,C),ut=new Ng(ot),Lt=new ox(x,S,B,rt,it,re,ut),ht=new Dx(x,ot),Mt=new lx,$t=new mx(rt),Bt=new Lg(x,S,B,at,tt,d,c),Rt=new yx(x,tt,it),k=new Ux(T,Pt,it,at),bt=new Dg(T,rt,Pt),ee=new Gg(T,rt,Pt),Pt.programs=Lt.programs,x.capabilities=it,x.extensions=rt,x.properties=ot,x.renderLists=Mt,x.shadowMap=Rt,x.state=at,x.info=Pt}L();const O=new Lx(x,T);this.xr=O,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(q,G,!1))},this.getSize=function(A){return A.set(q,G)},this.setSize=function(A,H,K=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,G=H,e.width=Math.floor(A*j),e.height=Math.floor(H*j),K===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(q*j,G*j).floor()},this.setDrawingBufferSize=function(A,H,K){q=A,G=H,j=K,e.width=Math.floor(A*K),e.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(mt)},this.setViewport=function(A,H,K,$){A.isVector4?mt.set(A.x,A.y,A.z,A.w):mt.set(A,H,K,$),at.viewport(v.copy(mt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,H,K,$){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,H,K,$),at.scissor(w.copy(lt).multiplyScalar(j).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(A){at.setScissorTest(kt=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(A=!0,H=!0,K=!0){let $=0;if(A){let V=!1;if(b!==null){const xt=b.texture.format;V=xt===fl||xt===dl||xt===ul}if(V){const xt=b.texture.type,Ct=xt===yi||xt===is||xt===Sr||xt===js||xt===ll||xt===hl,Dt=Bt.getClearColor(),Nt=Bt.getClearAlpha(),Wt=Dt.r,Xt=Dt.g,zt=Dt.b;Ct?(f[0]=Wt,f[1]=Xt,f[2]=zt,f[3]=Nt,T.clearBufferuiv(T.COLOR,0,f)):(m[0]=Wt,m[1]=Xt,m[2]=zt,m[3]=Nt,T.clearBufferiv(T.COLOR,0,m))}else $|=T.COLOR_BUFFER_BIT}H&&($|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Mt.dispose(),$t.dispose(),ot.dispose(),S.dispose(),B.dispose(),tt.dispose(),re.dispose(),k.dispose(),Lt.dispose(),O.dispose(),O.removeEventListener("sessionstart",ir),O.removeEventListener("sessionend",sr),jn.stop()};function Y(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Pt.autoReset,H=Rt.enabled,K=Rt.autoUpdate,$=Rt.needsUpdate,V=Rt.type;L(),Pt.autoReset=A,Rt.enabled=H,Rt.autoUpdate=K,Rt.needsUpdate=$,Rt.type=V}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const H=A.target;H.removeEventListener("dispose",Jt),Ee(H)}function Ee(A){Se(A),ot.remove(A)}function Se(A){const H=ot.get(A).programs;H!==void 0&&(H.forEach(function(K){Lt.releaseProgram(K)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,$,V,xt){H===null&&(H=Et);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Dt=Qd(A,H,K,$,V);at.setMaterial($,Ct);let Nt=K.index,Wt=1;if($.wireframe===!0){if(Nt=et.getWireframeAttribute(K),Nt===void 0)return;Wt=2}const Xt=K.drawRange,zt=K.attributes.position;let he=Xt.start*Wt,xe=(Xt.start+Xt.count)*Wt;xt!==null&&(he=Math.max(he,xt.start*Wt),xe=Math.min(xe,(xt.start+xt.count)*Wt)),Nt!==null?(he=Math.max(he,0),xe=Math.min(xe,Nt.count)):zt!=null&&(he=Math.max(he,0),xe=Math.min(xe,zt.count));const be=xe-he;if(be<0||be===1/0)return;re.setup(V,$,Dt,K,Nt);let pn,oe=bt;if(Nt!==null&&(pn=J.get(Nt),oe=ee,oe.setIndex(pn)),V.isMesh)$.wireframe===!0?(at.setLineWidth($.wireframeLinewidth*Z()),oe.setMode(T.LINES)):oe.setMode(T.TRIANGLES);else if(V.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),at.setLineWidth(Ft*Z()),V.isLineSegments?oe.setMode(T.LINES):V.isLineLoop?oe.setMode(T.LINE_LOOP):oe.setMode(T.LINE_STRIP)}else V.isPoints?oe.setMode(T.POINTS):V.isSprite&&oe.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ft=V._multiDrawStarts,je=V._multiDrawCounts,ae=V._multiDrawCount,Un=Nt?J.get(Nt).bytesPerElement:1,hs=ot.get($).currentProgram.getUniforms();for(let mn=0;mn<ae;mn++)hs.setValue(T,"_gl_DrawID",mn),oe.render(Ft[mn]/Un,je[mn])}else if(V.isInstancedMesh)oe.renderInstances(he,be,V.count);else if(K.isInstancedBufferGeometry){const Ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,je=Math.min(K.instanceCount,Ft);oe.renderInstances(he,be,je)}else oe.render(he,be)};function ne(A,H,K){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Ir(A,H,K),A.side=si,A.needsUpdate=!0,Ir(A,H,K),A.side=Hn):Ir(A,H,K)}this.compile=function(A,H,K=null){K===null&&(K=A),p=$t.get(K),p.init(H),y.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xt=V.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const Dt=xt[Ct];ne(Dt,K,V),$.add(Dt)}else ne(xt,K,V),$.add(xt)}),y.pop(),p=null,$},this.compileAsync=function(A,H,K=null){const $=this.compile(A,H,K);return new Promise(V=>{function xt(){if($.forEach(function(Ct){ot.get(Ct).currentProgram.isReady()&&$.delete(Ct)}),$.size===0){V(A);return}setTimeout(xt,10)}rt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ye=null;function Sn(A){Ye&&Ye(A)}function ir(){jn.stop()}function sr(){jn.start()}const jn=new ld;jn.setAnimationLoop(Sn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(A){Ye=A,O.setAnimationLoop(A),A===null?jn.stop():jn.start()},O.addEventListener("sessionstart",ir),O.addEventListener("sessionend",sr),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(H),H=O.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,H,b),p=$t.get(A,y.length),p.init(H),y.push(p),nt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Kt.setFromProjectionMatrix(nt),F=this.localClippingEnabled,Q=ut.init(this.clippingPlanes,F),_=Mt.get(A,g.length),_.init(),g.push(_),O.enabled===!0&&O.isPresenting===!0){const xt=x.xr.getDepthSensingMesh();xt!==null&&Jo(xt,H,-1/0,x.sortObjects)}Jo(A,H,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(z,pt),At=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,At&&Bt.addToRenderList(_,A),this.info.render.frame++,Q===!0&&ut.beginShadows();const K=p.state.shadowsArray;Rt.render(K,A,H),Q===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,V=_.transmissive;if(p.setupLights(),H.isArrayCamera){const xt=H.cameras;if(V.length>0)for(let Ct=0,Dt=xt.length;Ct<Dt;Ct++){const Nt=xt[Ct];zl($,V,A,Nt)}At&&Bt.render(A);for(let Ct=0,Dt=xt.length;Ct<Dt;Ct++){const Nt=xt[Ct];Ol(_,A,Nt,Nt.viewport)}}else V.length>0&&zl($,V,A,H),At&&Bt.render(A),Ol(_,A,H);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(x,A,H),re.resetDefaultState(),P=-1,D=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Jo(A,H,K,$){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Kt.intersectsSprite(A)){$&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);const Ct=tt.update(A),Dt=A.material;Dt.visible&&_.push(A,Ct,Dt,K,_t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Kt.intersectsObject(A))){const Ct=tt.update(A),Dt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),_t.copy(Ct.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(Dt)){const Nt=Ct.groups;for(let Wt=0,Xt=Nt.length;Wt<Xt;Wt++){const zt=Nt[Wt],he=Dt[zt.materialIndex];he&&he.visible&&_.push(A,Ct,he,K,_t.z,zt)}}else Dt.visible&&_.push(A,Ct,Dt,K,_t.z,null)}}const xt=A.children;for(let Ct=0,Dt=xt.length;Ct<Dt;Ct++)Jo(xt[Ct],H,K,$)}function Ol(A,H,K,$){const V=A.opaque,xt=A.transmissive,Ct=A.transparent;p.setupLightsView(K),Q===!0&&ut.setGlobalState(x.clippingPlanes,K),$&&at.viewport(v.copy($)),V.length>0&&Lr(V,H,K),xt.length>0&&Lr(xt,H,K),Ct.length>0&&Lr(Ct,H,K),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function zl(A,H,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ss(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Tr:yi,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const xt=p.state.transmissionRenderTarget[$.id],Ct=$.viewport||v;xt.setSize(Ct.z,Ct.w);const Dt=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(N),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),At&&Bt.render(K);const Nt=x.toneMapping;x.toneMapping=Bi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Q===!0&&ut.setGlobalState(x.clippingPlanes,$),Lr(A,K,$),C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let zt=0,he=H.length;zt<he;zt++){const xe=H[zt],be=xe.object,pn=xe.geometry,oe=xe.material,Ft=xe.group;if(oe.side===Hn&&be.layers.test($.layers)){const je=oe.side;oe.side=rn,oe.needsUpdate=!0,Fl(be,K,$,pn,oe,Ft),oe.side=je,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt))}x.setRenderTarget(Dt),x.setClearColor(N,X),Wt!==void 0&&($.viewport=Wt),x.toneMapping=Nt}function Lr(A,H,K){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,xt=A.length;V<xt;V++){const Ct=A[V],Dt=Ct.object,Nt=Ct.geometry,Wt=$===null?Ct.material:$,Xt=Ct.group;Dt.layers.test(K.layers)&&Fl(Dt,H,K,Nt,Wt,Xt)}}function Fl(A,H,K,$,V,xt){A.onBeforeRender(x,H,K,$,V,xt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,H,K,$,A,xt),V.transparent===!0&&V.side===Hn&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,x.renderBufferDirect(K,H,$,V,A,xt),V.side=si,V.needsUpdate=!0,x.renderBufferDirect(K,H,$,V,A,xt),V.side=Hn):x.renderBufferDirect(K,H,$,V,A,xt),A.onAfterRender(x,H,K,$,V,xt)}function Ir(A,H,K){H.isScene!==!0&&(H=Et);const $=ot.get(A),V=p.state.lights,xt=p.state.shadowsArray,Ct=V.state.version,Dt=Lt.getParameters(A,V.state,xt,H,K),Nt=Lt.getProgramCacheKey(Dt);let Wt=$.programs;$.environment=A.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Jt),Wt=new Map,$.programs=Wt);let Xt=Wt.get(Nt);if(Xt!==void 0){if($.currentProgram===Xt&&$.lightsStateVersion===Ct)return Bl(A,Dt),Xt}else Dt.uniforms=Lt.getUniforms(A),A.onBeforeCompile(Dt,x),Xt=Lt.acquireProgram(Dt,Nt),Wt.set(Nt,Xt),$.uniforms=Dt.uniforms;const zt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=ut.uniform),Bl(A,Dt),$.needsLights=ef(A),$.lightsStateVersion=Ct,$.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Xt,$.uniformsList=null,Xt}function kl(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Co.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Bl(A,H){const K=ot.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Qd(A,H,K,$,V){H.isScene!==!0&&(H=Et),C.resetTextureUnits();const xt=H.fog,Ct=$.isMeshStandardMaterial?H.environment:null,Dt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Gi,Nt=($.isMeshStandardMaterial?B:S).get($.envMap||Ct),Wt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xt=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),zt=!!K.morphAttributes.position,he=!!K.morphAttributes.normal,xe=!!K.morphAttributes.color;let be=Bi;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(be=x.toneMapping);const pn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=pn!==void 0?pn.length:0,Ft=ot.get($),je=p.state.lights;if(Q===!0&&(F===!0||A!==D)){const wn=A===D&&$.id===P;ut.setState($,A,wn)}let ae=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==je.state.version||Ft.outputColorSpace!==Dt||V.isBatchedMesh&&Ft.batching===!1||!V.isBatchedMesh&&Ft.batching===!0||V.isBatchedMesh&&Ft.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ft.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||V.isInstancedMesh&&Ft.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ft.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ft.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ft.instancingMorph===!1&&V.morphTexture!==null||Ft.envMap!==Nt||$.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ut.numPlanes||Ft.numIntersection!==ut.numIntersection)||Ft.vertexAlphas!==Wt||Ft.vertexTangents!==Xt||Ft.morphTargets!==zt||Ft.morphNormals!==he||Ft.morphColors!==xe||Ft.toneMapping!==be||Ft.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ft.__version=$.version);let Un=Ft.currentProgram;ae===!0&&(Un=Ir($,H,V));let hs=!1,mn=!1,Qo=!1;const Ce=Un.getUniforms(),wi=Ft.uniforms;if(at.useProgram(Un.program)&&(hs=!0,mn=!0,Qo=!0),$.id!==P&&(P=$.id,mn=!0),hs||D!==A){it.reverseDepthBuffer?(dt.copy(A.projectionMatrix),E0(dt),b0(dt),Ce.setValue(T,"projectionMatrix",dt)):Ce.setValue(T,"projectionMatrix",A.projectionMatrix),Ce.setValue(T,"viewMatrix",A.matrixWorldInverse);const wn=Ce.map.cameraPosition;wn!==void 0&&wn.setValue(T,vt.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&Ce.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ce.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,mn=!0,Qo=!0)}if(V.isSkinnedMesh){Ce.setOptional(T,V,"bindMatrix"),Ce.setOptional(T,V,"bindMatrixInverse");const wn=V.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ce.setValue(T,"boneTexture",wn.boneTexture,C))}V.isBatchedMesh&&(Ce.setOptional(T,V,"batchingTexture"),Ce.setValue(T,"batchingTexture",V._matricesTexture,C),Ce.setOptional(T,V,"batchingIdTexture"),Ce.setValue(T,"batchingIdTexture",V._indirectTexture,C),Ce.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&Ce.setValue(T,"batchingColorTexture",V._colorsTexture,C));const ta=K.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&Ht.update(V,K,Un),(mn||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,Ce.setValue(T,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(wi.envMap.value=Nt,wi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(wi.envMapIntensity.value=H.environmentIntensity),mn&&(Ce.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&tf(wi,Qo),xt&&$.fog===!0&&ht.refreshFogUniforms(wi,xt),ht.refreshMaterialUniforms(wi,$,j,G,p.state.transmissionRenderTarget[A.id]),Co.upload(T,kl(Ft),wi,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Co.upload(T,kl(Ft),wi,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ce.setValue(T,"center",V.center),Ce.setValue(T,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(T,"normalMatrix",V.normalMatrix),Ce.setValue(T,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const wn=$.uniformsGroups;for(let ea=0,nf=wn.length;ea<nf;ea++){const Hl=wn[ea];k.update(Hl,Un),k.bind(Hl,Un)}}return Un}function tf(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function ef(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,H,K){ot.get(A.texture).__webglTexture=H,ot.get(A.depthTexture).__webglTexture=K;const $=ot.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const K=ot.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,K=0){b=A,R=H,E=K;let $=!0,V=null,xt=!1,Ct=!1;if(A){const Nt=ot.get(A);if(Nt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Nt.__hasExternalTextures)C.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&ot.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);const Xt=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?V=Xt[H][K]:V=Xt[H],xt=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?V=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[K]:V=Xt,v.copy(A.viewport),w.copy(A.scissor),U=A.scissorTest}else v.copy(mt).multiplyScalar(j).floor(),w.copy(lt).multiplyScalar(j).floor(),U=kt;if(at.bindFramebuffer(T.FRAMEBUFFER,V)&&$&&at.drawBuffers(A,V),at.viewport(v),at.scissor(w),at.setScissorTest(U),xt){const Nt=ot.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Nt.__webglTexture,K)}else if(Ct){const Nt=ot.get(A.texture),Wt=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nt.__webglTexture,K||0,Wt)}P=-1},this.readRenderTargetPixels=function(A,H,K,$,V,xt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){at.bindFramebuffer(T.FRAMEBUFFER,Dt);try{const Nt=A.texture,Wt=Nt.format,Xt=Nt.type;if(!it.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-$&&K>=0&&K<=A.height-V&&T.readPixels(H,K,$,V,qt.convert(Wt),qt.convert(Xt),xt)}finally{const Nt=b!==null?ot.get(b).__webglFramebuffer:null;at.bindFramebuffer(T.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,$,V,xt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){const Nt=A.texture,Wt=Nt.format,Xt=Nt.type;if(!it.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-$&&K>=0&&K<=A.height-V){at.bindFramebuffer(T.FRAMEBUFFER,Dt);const zt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,zt),T.bufferData(T.PIXEL_PACK_BUFFER,xt.byteLength,T.STREAM_READ),T.readPixels(H,K,$,V,qt.convert(Wt),qt.convert(Xt),0);const he=b!==null?ot.get(b).__webglFramebuffer:null;at.bindFramebuffer(T.FRAMEBUFFER,he);const xe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await w0(T,xe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,zt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xt),T.deleteBuffer(zt),T.deleteSync(xe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,K=0){A.isTexture!==!0&&(Ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-K),V=Math.floor(A.image.width*$),xt=Math.floor(A.image.height*$),Ct=H!==null?H.x:0,Dt=H!==null?H.y:0;C.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,Ct,Dt,V,xt),at.unbindTexture()},this.copyTextureToTexture=function(A,H,K=null,$=null,V=0){A.isTexture!==!0&&(Ro("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,K=null);let xt,Ct,Dt,Nt,Wt,Xt;K!==null?(xt=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Dt=K.min.x,Nt=K.min.y):(xt=A.image.width,Ct=A.image.height,Dt=0,Nt=0),$!==null?(Wt=$.x,Xt=$.y):(Wt=0,Xt=0);const zt=qt.convert(H.format),he=qt.convert(H.type);C.setTexture2D(H,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const xe=T.getParameter(T.UNPACK_ROW_LENGTH),be=T.getParameter(T.UNPACK_IMAGE_HEIGHT),pn=T.getParameter(T.UNPACK_SKIP_PIXELS),oe=T.getParameter(T.UNPACK_SKIP_ROWS),Ft=T.getParameter(T.UNPACK_SKIP_IMAGES),je=A.isCompressedTexture?A.mipmaps[V]:A.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,je.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,je.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nt),A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,Wt,Xt,xt,Ct,zt,he,je.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,Wt,Xt,je.width,je.height,zt,je.data):T.texSubImage2D(T.TEXTURE_2D,V,Wt,Xt,xt,Ct,zt,he,je),T.pixelStorei(T.UNPACK_ROW_LENGTH,xe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,be),T.pixelStorei(T.UNPACK_SKIP_PIXELS,pn),T.pixelStorei(T.UNPACK_SKIP_ROWS,oe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ft),V===0&&H.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(A,H,K=null,$=null,V=0){A.isTexture!==!0&&(Ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0);let xt,Ct,Dt,Nt,Wt,Xt,zt,he,xe;const be=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(xt=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Dt=K.max.z-K.min.z,Nt=K.min.x,Wt=K.min.y,Xt=K.min.z):(xt=be.width,Ct=be.height,Dt=be.depth,Nt=0,Wt=0,Xt=0),$!==null?(zt=$.x,he=$.y,xe=$.z):(zt=0,he=0,xe=0);const pn=qt.convert(H.format),oe=qt.convert(H.type);let Ft;if(H.isData3DTexture)C.setTexture3D(H,0),Ft=T.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)C.setTexture2DArray(H,0),Ft=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const je=T.getParameter(T.UNPACK_ROW_LENGTH),ae=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Un=T.getParameter(T.UNPACK_SKIP_PIXELS),hs=T.getParameter(T.UNPACK_SKIP_ROWS),mn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,be.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,be.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Nt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xt),A.isDataTexture||A.isData3DTexture?T.texSubImage3D(Ft,V,zt,he,xe,xt,Ct,Dt,pn,oe,be.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Ft,V,zt,he,xe,xt,Ct,Dt,pn,be.data):T.texSubImage3D(Ft,V,zt,he,xe,xt,Ct,Dt,pn,oe,be),T.pixelStorei(T.UNPACK_ROW_LENGTH,je),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ae),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Un),T.pixelStorei(T.UNPACK_SKIP_ROWS,hs),T.pixelStorei(T.UNPACK_SKIP_IMAGES,mn),V===0&&H.generateMipmaps&&T.generateMipmap(Ft),at.unbindTexture()},this.initRenderTarget=function(A){ot.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),at.unbindTexture()},this.resetState=function(){R=0,E=0,b=null,at.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ml?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Vo?"display-p3":"srgb"}}class yl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ox extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gd extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bh=new ye,Hc=new _l,to=new Wo,eo=new I;class zx extends Ne{constructor(t=new Qe,e=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;Bh.copy(s).invert(),Hc.copy(t.ray).applyMatrix4(Bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=l.getX(m);eo.fromBufferAttribute(u,p),Hh(eo,p,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)eo.fromBufferAttribute(u,m),Hh(eo,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hh(i,t,e,n,s,r,o){const a=Hc.distanceSqToPoint(i);if(a<e){const c=new I;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class qn extends on{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new St:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new ye;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ml extends oi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fx extends Ml{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const no=new I,La=new Sl,Ia=new Sl,Da=new Sl;class kx extends oi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(no.subVectors(s[0],s[1]).add(s[0]),l=no);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(no.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),La.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,p),Ia.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,p),Da.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(La.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ia.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Da.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(La.calc(c),Ia.calc(c),Da.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bx(i,t){const e=1-i;return e*e*t}function Hx(i,t){return 2*(1-i)*i*t}function Gx(i,t){return i*i*t}function xr(i,t,e,n){return Bx(i,t)+Hx(i,e)+Gx(i,n)}function Vx(i,t){const e=1-i;return e*e*e*t}function Wx(i,t){const e=1-i;return 3*e*e*i*t}function qx(i,t){return 3*(1-i)*i*i*t}function Xx(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Vx(i,t)+Wx(i,e)+qx(i,n)+Xx(i,s)}class _d extends oi{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yx extends oi{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xd extends oi{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jx extends oi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends oi{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kx extends oi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y),xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yd extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gh(a,c.x,l.x,h.x,u.x),Gh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var Gc=Object.freeze({__proto__:null,ArcCurve:Fx,CatmullRomCurve3:kx,CubicBezierCurve:_d,CubicBezierCurve3:Yx,EllipseCurve:Ml,LineCurve:xd,LineCurve3:jx,QuadraticBezierCurve:vd,QuadraticBezierCurve3:Kx,SplineCurve:yd});class $x extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Gc[s.type]().fromJSON(s))}return this}}class Vh extends $x{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xd(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vd(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new _d(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ml(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wl extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function y(){const M=new I,R=new I;let E=0;const b=(e-t)/n;for(let P=0;P<=r;P++){const D=[],v=P/r,w=v*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,X=N*c+a,q=Math.sin(X),G=Math.cos(X);R.x=w*q,R.y=-v*n+p,R.z=w*G,u.push(R.x,R.y,R.z),M.set(q,b,G).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-v),D.push(m++)}_.push(D)}for(let P=0;P<s;P++)for(let D=0;D<r;D++){const v=_[D][P],w=_[D+1][P],U=_[D+1][P+1],N=_[D][P+1];t>0&&(h.push(v,w,N),E+=3),e>0&&(h.push(w,U,N),E+=3)}l.addGroup(g,E,0),g+=E}function x(M){const R=m,E=new St,b=new I;let P=0;const D=M===!0?t:e,v=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),m++;const w=m;for(let U=0;U<=s;U++){const X=U/s*c+a,q=Math.cos(X),G=Math.sin(X);b.x=D*G,b.y=p*v,b.z=D*q,u.push(b.x,b.y,b.z),d.push(0,v,0),E.x=q*.5+.5,E.y=G*.5*v+.5,f.push(E.x,E.y),m++}for(let U=0;U<s;U++){const N=R+U,X=w+U;M===!0?h.push(X,X+1,N):h.push(X+1,X,N),P+=3}l.addGroup(g,P,M===!0?1:2),g+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends Fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class El extends Qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new I,M=new I,R=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],M),f(e[E+2],R),c(x,M,R,y)}function c(y,x,M,R){const E=R+1,b=[];for(let P=0;P<=E;P++){b[P]=[];const D=y.clone().lerp(M,P/E),v=x.clone().lerp(M,P/E),w=E-P;for(let U=0;U<=w;U++)U===0&&P===E?b[P][U]=D:b[P][U]=D.clone().lerp(v,U/w)}for(let P=0;P<E;P++)for(let D=0;D<2*(E-P)-1;D++){const v=Math.floor(D/2);D%2===0?(d(b[P][v+1]),d(b[P+1][v]),d(b[P][v])):(d(b[P][v+1]),d(b[P+1][v+1]),d(b[P+1][v]))}}function l(y){const x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const M=p(y)/2/Math.PI+.5,R=g(y)/Math.PI+.5;o.push(M,1-R)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],M=o[y+2],R=o[y+4],E=Math.max(x,M,R),b=Math.min(x,M,R);E>.9&&b<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function m(){const y=new I,x=new I,M=new I,R=new I,E=new St,b=new St,P=new St;for(let D=0,v=0;D<r.length;D+=9,v+=6){y.set(r[D+0],r[D+1],r[D+2]),x.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),E.set(o[v+0],o[v+1]),b.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),R.copy(y).add(x).add(M).divideScalar(3);const w=p(R);_(E,v+0,y,w),_(b,v+2,x,w),_(P,v+4,M,w)}}function _(y,x,M,R){R<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.vertices,t.indices,t.radius,t.details)}}class Md extends Vh{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Vh().fromJSON(s))}return this}}const Zx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Sd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=nv(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return wr(r,o,e,a,c,f,0),o}};function Sd(i,t,e,n,s){let r,o;if(s===fv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Wh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Wh(r,i[r],i[r+1],o);return o&&Yo(o,o.next)&&(br(o),o=o.next),o}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yo(e,e.next)||we(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&av(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Qx(i,n,s,r):Jx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),br(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=tv(rs(i),t,e),wr(i,t,e,n,s,r,2)):o===2&&ev(i,t,e,n,s,r):wr(rs(i),t,e,n,s,r,1);break}}}function Jx(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ds(s,a,r,c,o,l,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,g=Vc(f,m,t,e,n),y=Vc(_,p,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=g&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ds(a,h,c,u,l,d,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Ds(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ds(a,h,c,u,l,d,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==o&&Ds(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Yo(s,r)&&wd(s,n,n.next,r)&&Er(s,r)&&Er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function ev(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hv(o,a)){let c=Ed(o,a);o=rs(o,o.next),c=rs(c,c.next),wr(o,t,e,n,s,r,0),wr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nv(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Sd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(lv(l));for(s.sort(iv),r=0;r<s.length;r++)e=sv(s[r],e);return e}function iv(i,t){return i.x-t.x}function sv(i,t){const e=rv(i,t);if(!e)return t;const n=Ed(e,i);return rs(n,n.next),rs(e,e.next)}function rv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ds(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ov(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ov(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function av(i,t,e,n){let s=i;do s.z===0&&(s.z=Vc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cv(s)}function cv(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Vc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uv(i,t)&&(Er(i,t)&&Er(t,i)&&dv(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Yo(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yo(i,t){return i.x===t.x&&i.y===t.y}function wd(i,t,e,n){const s=so(we(i,t,e)),r=so(we(i,t,n)),o=so(we(e,n,i)),a=so(we(e,n,t));return!!(s!==r&&o!==a||s===0&&io(i,e,t)||r===0&&io(i,n,t)||o===0&&io(e,i,n)||a===0&&io(e,t,n))}function io(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function so(i){return i>0?1:i<0?-1:0}function uv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function dv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ed(i,t){const e=new Wc(i.i,i.x,i.y),n=new Wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(i,t,e,n){const s=new Wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class yr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];qh(t),Xh(n,t);let o=t.length;e.forEach(qh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Xh(n,e[c]);const a=Zx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function qh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bl extends Qe{constructor(t=new Md([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:pv;let x,M=!1,R,E,b,P;g&&(x=g.getSpacedPoints(h),M=!0,d=!1,R=g.computeFrenetFrames(h,!1),E=new I,b=new I,P=new I),d||(p=0,f=0,m=0,_=0);const D=a.extractPoints(l);let v=D.shape;const w=D.holes;if(!yr.isClockWise(v)){v=v.reverse();for(let Z=0,T=w.length;Z<T;Z++){const ft=w[Z];yr.isClockWise(ft)&&(w[Z]=ft.reverse())}}const N=yr.triangulateShape(v,w),X=v;for(let Z=0,T=w.length;Z<T;Z++){const ft=w[Z];v=v.concat(ft)}function q(Z,T,ft){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(T,ft)}const G=v.length,j=N.length;function z(Z,T,ft){let rt,it,at;const Pt=Z.x-T.x,ot=Z.y-T.y,C=ft.x-Z.x,S=ft.y-Z.y,B=Pt*Pt+ot*ot,J=Pt*S-ot*C;if(Math.abs(J)>Number.EPSILON){const et=Math.sqrt(B),tt=Math.sqrt(C*C+S*S),Lt=T.x-ot/et,ht=T.y+Pt/et,Mt=ft.x-S/tt,$t=ft.y+C/tt,ut=((Mt-Lt)*S-($t-ht)*C)/(Pt*S-ot*C);rt=Lt+Pt*ut-Z.x,it=ht+ot*ut-Z.y;const Rt=rt*rt+it*it;if(Rt<=2)return new St(rt,it);at=Math.sqrt(Rt/2)}else{let et=!1;Pt>Number.EPSILON?C>Number.EPSILON&&(et=!0):Pt<-Number.EPSILON?C<-Number.EPSILON&&(et=!0):Math.sign(ot)===Math.sign(S)&&(et=!0),et?(rt=-ot,it=Pt,at=Math.sqrt(B)):(rt=Pt,it=ot,at=Math.sqrt(B/2))}return new St(rt/at,it/at)}const pt=[];for(let Z=0,T=X.length,ft=T-1,rt=Z+1;Z<T;Z++,ft++,rt++)ft===T&&(ft=0),rt===T&&(rt=0),pt[Z]=z(X[Z],X[ft],X[rt]);const mt=[];let lt,kt=pt.concat();for(let Z=0,T=w.length;Z<T;Z++){const ft=w[Z];lt=[];for(let rt=0,it=ft.length,at=it-1,Pt=rt+1;rt<it;rt++,at++,Pt++)at===it&&(at=0),Pt===it&&(Pt=0),lt[rt]=z(ft[rt],ft[at],ft[Pt]);mt.push(lt),kt=kt.concat(lt)}for(let Z=0;Z<p;Z++){const T=Z/p,ft=f*Math.cos(T*Math.PI/2),rt=m*Math.sin(T*Math.PI/2)+_;for(let it=0,at=X.length;it<at;it++){const Pt=q(X[it],pt[it],rt);nt(Pt.x,Pt.y,-ft)}for(let it=0,at=w.length;it<at;it++){const Pt=w[it];lt=mt[it];for(let ot=0,C=Pt.length;ot<C;ot++){const S=q(Pt[ot],lt[ot],rt);nt(S.x,S.y,-ft)}}}const Kt=m+_;for(let Z=0;Z<G;Z++){const T=d?q(v[Z],kt[Z],Kt):v[Z];M?(b.copy(R.normals[0]).multiplyScalar(T.x),E.copy(R.binormals[0]).multiplyScalar(T.y),P.copy(x[0]).add(b).add(E),nt(P.x,P.y,P.z)):nt(T.x,T.y,0)}for(let Z=1;Z<=h;Z++)for(let T=0;T<G;T++){const ft=d?q(v[T],kt[T],Kt):v[T];M?(b.copy(R.normals[Z]).multiplyScalar(ft.x),E.copy(R.binormals[Z]).multiplyScalar(ft.y),P.copy(x[Z]).add(b).add(E),nt(P.x,P.y,P.z)):nt(ft.x,ft.y,u/h*Z)}for(let Z=p-1;Z>=0;Z--){const T=Z/p,ft=f*Math.cos(T*Math.PI/2),rt=m*Math.sin(T*Math.PI/2)+_;for(let it=0,at=X.length;it<at;it++){const Pt=q(X[it],pt[it],rt);nt(Pt.x,Pt.y,u+ft)}for(let it=0,at=w.length;it<at;it++){const Pt=w[it];lt=mt[it];for(let ot=0,C=Pt.length;ot<C;ot++){const S=q(Pt[ot],lt[ot],rt);M?nt(S.x,S.y+x[h-1].y,x[h-1].x+ft):nt(S.x,S.y,u+ft)}}}Q(),F();function Q(){const Z=s.length/3;if(d){let T=0,ft=G*T;for(let rt=0;rt<j;rt++){const it=N[rt];vt(it[2]+ft,it[1]+ft,it[0]+ft)}T=h+p*2,ft=G*T;for(let rt=0;rt<j;rt++){const it=N[rt];vt(it[0]+ft,it[1]+ft,it[2]+ft)}}else{for(let T=0;T<j;T++){const ft=N[T];vt(ft[2],ft[1],ft[0])}for(let T=0;T<j;T++){const ft=N[T];vt(ft[0]+G*h,ft[1]+G*h,ft[2]+G*h)}}n.addGroup(Z,s.length/3-Z,0)}function F(){const Z=s.length/3;let T=0;dt(X,T),T+=X.length;for(let ft=0,rt=w.length;ft<rt;ft++){const it=w[ft];dt(it,T),T+=it.length}n.addGroup(Z,s.length/3-Z,1)}function dt(Z,T){let ft=Z.length;for(;--ft>=0;){const rt=ft;let it=ft-1;it<0&&(it=Z.length-1);for(let at=0,Pt=h+p*2;at<Pt;at++){const ot=G*at,C=G*(at+1),S=T+rt+ot,B=T+it+ot,J=T+it+C,et=T+rt+C;_t(S,B,J,et)}}}function nt(Z,T,ft){c.push(Z),c.push(T),c.push(ft)}function vt(Z,T,ft){Et(Z),Et(T),Et(ft);const rt=s.length/3,it=y.generateTopUV(n,s,rt-3,rt-2,rt-1);At(it[0]),At(it[1]),At(it[2])}function _t(Z,T,ft,rt){Et(Z),Et(T),Et(rt),Et(T),Et(ft),Et(rt);const it=s.length/3,at=y.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);At(at[0]),At(at[1]),At(at[3]),At(at[1]),At(at[2]),At(at[3])}function Et(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function At(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gc[s.type]().fromJSON(s)),new bl(n,t.options)}}const pv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new St(r,o),new St(a,c),new St(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new St(o,1-c),new St(l,1-u),new St(d,1-m),new St(_,1-g)]:[new St(a,1-c),new St(h,1-u),new St(f,1-m),new St(p,1-g)]}};function mv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jo extends El{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jo(t.radius,t.detail)}}class Tl extends Qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,m=new St;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const g=r+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let g=0;g<n;g++){const y=g+p,x=y,M=y+n+1,R=y+n+2,E=y+1;a.push(x,M,E),a.push(M,R,E)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hi extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const y=[],x=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(E+M,1-x),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const x=h[g][y+1],M=h[g][y],R=h[g+1][y],E=h[g+1][y+1];(g!==0||o>0)&&f.push(x,M,E),(g!==n-1||c<Math.PI)&&f.push(M,R,E)}this.setIndex(f),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fn extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ni extends cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ar extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gv extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ua=new ye,Yh=new I,jh=new I;class Al{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jh),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _v extends Al{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$s*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class xv extends Ar{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _v}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Kh=new ye,hr=new I,Na=new I;class vv extends Al{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),Na.copy(n.position),Na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Na),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class yv extends Ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mv extends Al{constructor(){super(new hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Mv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sv extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);const wv={clear:0,overcast:.88,rain:1,storm:1},Ev=i=>wv[i==null?void 0:i.condition]??0,Zn={hemi:.44,ambient:.48,bounce:.34,exposure:.15,fov:-6,shadowSpan:18,shadowBias:-25e-5,shadowNormalBias:.01,rate:2.6},ro={shadowSpan:55,shadowBias:-4e-4,shadowNormalBias:.035},Zh=.45,bv=6;class Tv{constructor(t){this.spot=new xv(16767392,0,9,1.15,.7,2),this.spot.castShadow=!0,this.spot.shadow.mapSize.set(1024,1024),this.spot.shadow.camera.near=.3,this.spot.shadow.camera.far=9,this.spot.shadow.bias=-8e-4,this.spot.shadow.normalBias=.012,this.spot.shadow.autoUpdate=!1,this.spot.target=new Ne,t.add(this.spot,this.spot.target),this._base=new WeakMap,this._roomLights=new WeakMap,this._tmp=new I}base(t){let e=this._base.get(t);return e===void 0&&(e=t.intensity,this._base.set(t,e)),e}lightsFor(t,e){var o;const n=this._roomLights.get(e);if(n!==void 0)return n;let s=e.lights;if(!s){const a=(o=t.buildings)==null?void 0:o.find(c=>c.lights&&Math.abs(c.x-e.x)<.01&&Math.abs(c.z-e.z)<.01&&Math.abs(c.rotY-e.rotY)<.01);s=a==null?void 0:a.lights}if(!s||!s.length)return this._roomLights.set(e,null),null;const r=e.interiorBounds;if(r){const a=Math.cos(e.rotY),c=Math.sin(e.rotY),l=s.filter(h=>{h.updateWorldMatrix(!0,!1),h.getWorldPosition(this._tmp);const u=this._tmp.x-e.x,d=this._tmp.z-e.z,f=u*a-d*c,m=u*c+d*a;return f>r.minX&&f<r.maxX&&m>r.minZ&&m<r.maxZ});l.length&&(s=l)}return this._roomLights.set(e,s),s}update(t,e,n){const s=t.currentBuilding,r=s?this.lightsFor(t,s):null;let o=null,a=bv;if(r&&e>.02&&n)for(const c of r){const l=c.getWorldPosition(this._tmp).distanceTo(n.position);l<a&&(o=c,a=l)}for(const c of t.enterable){const l=c===s?r:this.lightsFor(t,c);if(!l)continue;const h=c===s?e:0;for(const u of l){const d=h*this.base(u)*(u===o?1-Zh:1);u.intensity!==d&&(u.intensity=d)}}o?(o.getWorldPosition(this._tmp),this.spot.position.copy(this._tmp),this.spot.target.position.set(this._tmp.x,this._floorY(s,n),this._tmp.z),this.spot.target.updateMatrixWorld(),this.spot.color.copy(o.color),this.spot.intensity=e*this.base(o)*Zh,this.spot.shadow.autoUpdate=!0):(this.spot.intensity!==0||this.spot.shadow.autoUpdate)&&(this.spot.intensity=0,this.spot.shadow.autoUpdate=!1)}_floorY(t,e){const n=e.position.y,s=(t==null?void 0:t.padY)??n;return n-s>.5?n:s}}const Zt={grass:7311194,glass:6453644,trunk:6047282,foliage:5208645,foliageLight:6984789,foliageDeep:4154168,metal:9146777,metalDark:4870231,concrete:12039083,skinTones:[15914685,15253915,13803636,11104575,8014374,5517852],hairTones:[2825494,4861726,8014374,12159818,14270346,9276813,2763310,8141370],carBodies:[11680571,3104140,14737632,2764083,5929546,14263361,9080726,7031418]},gt={ceiling:15525851,wall:13814974,trim:16249834,joineryDark:7034951,joineryLight:9073760,floorTimber:9072722,benchtop:12168342,tileFloor:12104358,metalDull:9146777,shadowDark:2764339},Gs=new Map,Av=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function Re(i,t={}){let e=String(i);for(const s of Av)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(Gs.has(e))return Gs.get(e);const n=new fn({color:i,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??si,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return Gs.set(e,n),n}function Yn(i,t){if(Gs.has(i))return Gs.get(i);const e=t();return Gs.set(i,e),e}const Rv=i=>{i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function Rl(i){return i.onBeforeCompile=Rv,i}function Ko(){return Yn("window",()=>Rl(new fn({color:Zt.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new Gt(16767392),emissiveIntensity:0})))}function Cv(){return Yn("windowinner",()=>Rl(new fn({color:Zt.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function Pv(){return Yn("bulb",()=>new fn({color:16774365,emissive:new Gt(16770744),emissiveIntensity:1.6}))}function bd(){return Yn("carglass",()=>new fn({color:2831680,roughness:.2,metalness:.3}))}function Cl(){return Yn("headlight",()=>new fn({color:15787727,emissive:new Gt(16771512),emissiveIntensity:0}))}function Td(){return Yn("taillight",()=>new fn({color:9186091,emissive:new Gt(16726843),emissiveIntensity:.2}))}function Ad(){return Yn("headlight-driving",()=>new fn({color:15787727,emissive:new Gt(16771512),emissiveIntensity:0}))}function Rd(){return Yn("streetlamp",()=>new fn({color:15262932,emissive:new Gt(16769702),emissiveIntensity:0}))}function Cd(){return Yn("lamppool",()=>new Mn({color:16768926,transparent:!0,opacity:0,blending:Io,depthWrite:!1}))}function Lv(){return Yn("troffer",()=>new fn({color:16185074,roughness:.5,emissive:new Gt(14477567),emissiveIntensity:.9}))}function Iv(){return Yn("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgb(140,140,140)"),n.addColorStop(.55,"rgb(196,196,196)"),n.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new qn(t);s.colorSpace=ze;const r=new Mn({map:s,blending:ec,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new Ot(1,1,1),new Xe(1,1),new Fe(.5,.5,1,10),new Xo(.5,1,8),new Hi(.5,12,10);const Dv=new Set;function Rr(i){Dv.add(i)}const Uv=`
  varying vec3 vWorld;
  void main() {
    vWorld = normalize((modelMatrix * vec4(position, 1.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Nv=`
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
`,Pi=[{t:0,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05},{t:.22,top:1779520,mid:5329002,bot:10123890,sun:16751964,amb:4868704,int:.3},{t:.27,top:5208752,mid:10466511,bot:15778714,sun:16761479,amb:9082024,int:.75},{t:.4,top:4884168,mid:10339044,bot:14214898,sun:16774109,amb:11058384,int:1},{t:.52,top:4161476,mid:9682402,bot:13886450,sun:16777215,amb:11453142,int:1.05},{t:.72,top:4882360,mid:11058388,bot:14734013,sun:16771524,amb:10530496,int:.85},{t:.8,top:2902642,mid:9072512,bot:14256732,sun:16747082,amb:6969960,int:.42},{t:.86,top:1186350,mid:2962768,bot:5917272,sun:9067114,amb:2764872,int:.14},{t:1,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05}];function Ov(i){let t=Pi[0],e=Pi[Pi.length-1];for(let o=0;o<Pi.length-1;o++)if(i>=Pi[o].t&&i<=Pi[o+1].t){t=Pi[o],e=Pi[o+1];break}const n=e.t-t.t||1,s=(i-t.t)/n,r=(o,a)=>new Gt(o).lerp(new Gt(a),s);return{top:r(t.top,e.top),mid:r(t.mid,e.mid),bot:r(t.bot,e.bot),sun:r(t.sun,e.sun),amb:r(t.amb,e.amb),int:t.int+(e.int-t.int)*s}}class zv{constructor(t,e){this.game=e,this.canvas=t,this.renderer=new Nx({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ku,this.renderer.outputColorSpace=ze,this.renderer.toneMapping=Bu,this.renderer.toneMappingExposure=1.05,this.scene=new Ox,this.scene.fog=new yl(11059416,60,340),this._buildSky(),this._buildLights(),this.indoorFactor=0,this.interiorLights=new Tv(this.scene),this.quality={shadows:!0,drawDistance:340},addEventListener("resize",()=>this.resize())}_buildSky(){this.skyUniforms={uTop:{value:new Gt(4884168)},uMid:{value:new Gt(10339044)},uBottom:{value:new Gt(14214898)},uSunY:{value:.6},uSunDir:{value:new I(0,1,0)},uSunColour:{value:new Gt(16777215)},uExposure:{value:1.05}};const t=new st(new Hi(900,32,20),new Si({uniforms:this.skyUniforms,vertexShader:Uv,fragmentShader:Nv,side:rn,depthWrite:!1,fog:!1}));t.frustumCulled=!1,this.scene.add(t),this.sky=t;const e=900,n=new Float32Array(e*3);for(let r=0;r<e;r++){const o=new I().randomDirection().multiplyScalar(850);o.y<40&&(o.y=Math.abs(o.y)+40),n.set([o.x,o.y,o.z],r*3)}const s=new Qe;s.setAttribute("position",new De(n,3)),this.stars=new zx(s,new gd({color:16777215,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.moon=new st(new Hi(18,16,12),new Mn({color:14673648,fog:!1})),this.scene.add(this.moon)}_buildLights(){this.hemi=new gv(12374760,5918784,.9),this.scene.add(this.hemi),this.sun=new $h(16774109,2.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=420,this.shadowSpan=ro.shadowSpan,this._applyShadowSpan(0),this.scene.add(this.sun),this.scene.add(this.sun.target),this.bounce=new $h(10467020,.35),this.scene.add(this.bounce),this.scene.add(this.bounce.target),this.ambient=new Sv(11058384,.35),this.scene.add(this.ambient)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}_applyShadowSpan(t){const e=dn.lerp(ro.shadowSpan,Zn.shadowSpan,t);if(Math.abs(e-this.shadowSpan)>1e-4||!this._spanApplied){this.shadowSpan=e;const n=this.sun.shadow.camera;n.left=-e,n.right=e,n.top=e,n.bottom=-e,n.updateProjectionMatrix(),this._spanApplied=!0}this.sun.shadow.bias=dn.lerp(ro.shadowBias,Zn.shadowBias,t),this.sun.shadow.normalBias=dn.lerp(ro.shadowNormalBias,Zn.shadowNormalBias,t)}_skyDelta(t){const e=performance.now(),n=(e-(this._lastSky??e))/1e3;return this._lastSky=e,t>0?Math.min(t,.25):n>.001?Math.min(n,.25):this.game.fixedStep||1/60}updateSky(t,e,n=0,s=0){var U,N;const r=this._skyDelta(s),o=(U=this.game.world)==null?void 0:U.weather,a=Ev(o),c=(N=this.game.world)!=null&&N.isIndoors?1:0;this.indoorFactor+=(c-this.indoorFactor)*Math.min(1,r*Zn.rate);const l=this.indoorFactor;this._applyShadowSpan(l);const h=Ov(t);this.skyUniforms.uTop.value.copy(h.top),this.skyUniforms.uMid.value.copy(h.mid),this.skyUniforms.uBottom.value.copy(h.bot),this.skyUniforms.uSunColour.value.copy(h.sun);const u=(t-.25)*Math.PI*2,d=Math.sin(n/364*Math.PI*2)*.3,f=new I(Math.cos(u),Math.sin(u)+d,-.35).normalize();this.skyUniforms.uSunDir.value.copy(f),this.skyUniforms.uSunY.value=f.y;const m=(e==null?void 0:e.x)||0,_=(e==null?void 0:e.z)||0,p=(e==null?void 0:e.y)||0,g=this.shadowSpan*2/this.sun.shadow.mapSize.x,y=Math.round(m/g)*g,x=Math.round(_/g)*g;this.sun.position.set(y+f.x*160,p+Math.max(f.y,.08)*160,x+f.z*160),this.sun.target.position.set(y,p,x),this.sun.target.updateMatrixWorld();const M=Math.max(0,f.y),R=dn.smoothstep(f.y,-.005,.03);this.sun.intensity=Math.pow(M,.65)*3*(1-a)*R,this.sun.color.copy(h.sun).lerp(new Gt(15265524),a),this.sun.shadow.autoUpdate=this.sun.intensity>.01,this.bounce.position.set(y-f.x*90,p+40,x-f.z*90),this.bounce.target.position.set(y,p,x),this.bounce.target.updateMatrixWorld(),this.bounce.intensity=.15+h.int*.4,this.bounce.color.copy(h.mid),this.moon.position.set(m-f.x*600,-f.y*600,_-f.z*600),this.moon.visible=f.y<.08;const E=dn.clamp((.06-f.y)*6,0,1),b=o!=null&&o.wetness?1:0;this.hemi.intensity=.25+h.int*.8+E*.5+a*.5*(1-b*.5),this.hemi.color.copy(h.mid).lerp(new Gt(5992332),E*.7).lerp(new Gt(13161180),a*.6),this.ambient.intensity=.12+h.int*.3+E*.38+a*.05,this.ambient.color.copy(h.amb).lerp(new Gt(6978201),E*.8),this.stars.material.opacity=E*.9,this.hemi.intensity*=Math.pow(Zn.hemi,l),this.ambient.intensity*=Math.pow(Zn.ambient,l),this.bounce.intensity*=Math.pow(Zn.bounce,l),this.scene.fog.color.copy(h.mid).lerp(h.bot,.45);const P=o!=null&&o.wetness?.45:0,D=o&&["overcast","rain","storm"].includes(o.condition)?.25:0;this.scene.fog.near=60-(P+D)*40,this.scene.fog.far=this.quality.drawDistance*(1-P*.35-D*.15-E*.3);const v=1+E*.45+(1-Math.min(1,h.int))*.2+a*.12+b*.03+l*Zn.exposure;this.renderer.toneMappingExposure+=(v-this.renderer.toneMappingExposure)*Math.min(1,r*Zn.rate),this.skyUniforms.uExposure.value=this.renderer.toneMappingExposure,this.nightFactor=E,Rd().emissiveIntensity=E*2.6,Cd().opacity=E*.32,Ad().emissiveIntensity=E*2.2;const w=this.game.world;if(w!=null&&w.enterable){const X=.34+a*.26;this.interiorLights.update(w,Math.max(X,E),this.game.player)}this.sky&&this.sky.position.set(m,0,_),this.stars.position.set(m,0,_)}resize(){var e;this.renderer.setSize(innerWidth,innerHeight,!1);const t=(e=this.game.camera)==null?void 0:e.active;t&&(t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix())}render(t){this.sky.position.copy(t.position),this.renderer.render(this.scene,t)}}const bs=[{id:"first",label:"First person",distance:0,height:0,fov:64},{id:"third",label:"Third person",distance:3.6,height:.35,shoulder:.55,fov:52},{id:"thirdFar",label:"Third person (wide)",distance:6.5,height:.9,shoulder:0,fov:50},{id:"ride",label:"Behind the van",distance:7,height:1.7,shoulder:0,fov:54,hidden:!0}],Fv=Zn.fov;class kv{constructor(t){this.game=t,this.modeIndex=1,this.active=new un(bs[1].fov,innerWidth/innerHeight,.25,1e3),this.yaw=0,this.pitch=-.05,this.distance=bs[1].distance,this._targetDistance=this.distance,this._pos=new I,this._look=new I,this._ray2=new _l,this._box=new Mi,this._hit=new I,this.shakeAmount=0,this.bob=0,this.fovBoost=0}get mode(){return bs[this.modeIndex]}get isFirstPerson(){return this.mode.id==="first"}cycle(){do this.modeIndex=(this.modeIndex+1)%bs.length;while(bs[this.modeIndex].hidden);return this.game.bus.emit("camera:mode",{mode:this.mode}),this.mode}setMode(t){const e=bs.findIndex(n=>n.id===t);e>=0&&(this.modeIndex=e)}addShake(t){this.shakeAmount=Math.min(1.2,this.shakeAmount+t)}update(t){const{input:e,player:n}=this.game;if(e.locked&&e.enabled){const c=e.consumeMouse();this.yaw-=c.dx*e.mouse.sensitivity,this.pitch-=(e.mouse.invertY?-c.dy:c.dy)*e.mouse.sensitivity;const l=Math.PI/2-.05;this.pitch=dn.clamp(this.pitch,-l,l)}else e.consumeMouse();const s=this.mode,r=n.position.clone();r.y+=n.eyeHeight;const o=n.horizontalSpeed;if(o>.3){this.bob+=t*o*1.9;const c=this.isFirstPerson?.035:.012;r.y+=Math.sin(this.bob*2)*c,r.x+=Math.cos(this.bob)*c*.4}else this.bob+=t*1.1,r.y+=Math.sin(this.bob)*.006;const a=new I(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch));if(s.distance===0)this._pos.copy(r),this._look.copy(r).addScaledVector(a,10);else{const c=n.position.clone();c.y+=n.eyeHeight*.92+s.height;const l=new I(-Math.cos(this.yaw),0,Math.sin(this.yaw));c.addScaledVector(l,s.shoulder||0);const h=this.game.world,u=h.isIndoors,d=u?.35:.7;let f=u?Math.min(s.distance,2.2):s.distance;const m=a.clone().negate();this._ray2.set(c,m);const _=c.clone().addScaledVector(m,f*.5);let p=f+.45;for(const g of h.query(_,f+1.5)){this._box.set(g.min,g.max);const y=this._ray2.intersectBox(this._box,this._hit);if(!y)continue;const x=c.distanceTo(y);x<p&&(p=x)}if(f=Math.max(d,Math.min(f,p-.45)),f<.65){this._pos.copy(r),this._look.copy(r).addScaledVector(a,10),this.distance=0,this._targetDistance=f,this._applyShake(t),this._commit(t,s,n);return}if(this._targetDistance+=(f-this._targetDistance)*(f<this._targetDistance?1:Math.min(1,t*5)),this.distance=this._targetDistance,this._pos.copy(c).addScaledVector(m,this.distance),this._look.copy(c).addScaledVector(a,4),u){const g=h.currentBuilding,y=g.interiorBounds;this._pos.y=Math.min(this._pos.y,g.padY+y.maxY-.2),this._pos.y=Math.max(this._pos.y,g.padY+.3)}}this._applyShake(t),this._commit(t,s,n)}_applyShake(t){if(this.shakeAmount<=.001)return;const e=this.shakeAmount;this._pos.x+=(Math.random()-.5)*.06*e,this._pos.y+=(Math.random()-.5)*.06*e,this._look.x+=(Math.random()-.5)*.5*e,this._look.y+=(Math.random()-.5)*.5*e,this.shakeAmount*=Math.pow(.06,t)}_commit(t,e,n){var o;this.active.position.copy(this._pos),this.active.lookAt(this._look);const s=(o=this.game.world)!=null&&o.isIndoors?1:0,r=e.fov+this.fovBoost+s*Fv;this.active.fov+=(r-this.active.fov)*Math.min(1,t*6),this.active.updateProjectionMatrix(),n.avatar&&n.avatar.setFirstPerson(this.isFirstPerson||this.distance===0)}basis(){const t=new I(Math.sin(this.yaw),0,Math.cos(this.yaw)).normalize(),e=new I(-t.z,0,t.x);return{forward:t,right:e}}}function Bv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Qe;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Jh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const m=Jh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Jh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new De(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Hv=new Set(["position","normal","uv","color"]);function Pd(i,t={}){var o,a;i.updateMatrixWorld(!0);const e=new Map,n=[];i.traverse(c=>{var f,m;if(c===i)return;if(c.isInstancedMesh||c.userData.isSign||c.isLight){n.push(c);return}if(!c.isMesh||!((m=(f=c.geometry)==null?void 0:f.attributes)!=null&&m.position))return;const l=c.material.uuid;e.has(l)||e.set(l,{material:c.material,geos:[],cast:!1});const h=c.geometry.clone();h.applyMatrix4(c.matrixWorld);for(const _ of Object.keys(h.attributes))Hv.has(_)||h.deleteAttribute(_);const u=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new De(new Float32Array(u*2),2)),h.attributes.color||h.setAttribute("color",new De(new Float32Array(u*3).fill(1),3));const d=e.get(l);d.geos.push(h.index?h.toNonIndexed():h),d.cast=d.cast||c.castShadow});const s=t.colliders?new qc(t.colliders,1):null,r=new jt;for(const{material:c,geos:l,cast:h}of e.values()){if(!l.length)continue;const u=l.length===1?l[0]:Bv(l,!1);if(!u){console.error("bakeGroup: merge returned null (mismatched attributes)",c);continue}const d=((o=c.userData)==null?void 0:o.decal)===!0,f=(a=c.userData)==null?void 0:a.uvScale;f&&!d&&Gv(u,f[0],f[1]),s&&!d&&Yv(u,s);const m=new st(u,c);m.castShadow=d?!1:h,m.receiveShadow=!d,d&&(m.renderOrder=2),r.add(m)}for(const c of n)r.add(c);return r}function Gv(i,t,e=t){const n=i.attributes.position.count,s=i.attributes.position.array,r=i.attributes.normal.array,o=new Float32Array(n*2);for(let a=0;a<n;a++){const c=a*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let d,f;h>=l&&h>=u?(d=s[c],f=s[c+2]):l>=u?(d=s[c+2],f=s[c+1]):(d=s[c],f=s[c+1]),o[a*2]=d/t,o[a*2+1]=f/e}i.setAttribute("uv",new De(o,2))}const Oa=512,Qh=1024;function tu(i,t,e){return((i+Oa)*Qh+(t+Oa))*Qh+(e+Oa)}class qc{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let n=0;n<t.length;n++){const s=t[n],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),h=Math.floor(s.max.z/e);for(let u=r;u<=o;u++)for(let d=a;d<=c;d++)for(let f=l;f<=h;f++){const m=tu(u,d,f);let _=this.bins.get(m);_||(_=[],this.bins.set(m,_)),_.push(n)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,n,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),h=Math.floor((e-s)/r),u=Math.floor((e+s)/r),d=Math.floor((n-s)/r),f=Math.floor((n+s)/r);for(let m=c;m<=l;m++)for(let _=h;_<=u;_++)for(let p=d;p<=f;p++){const g=this.bins.get(tu(m,_,p));if(g)for(let y=0;y<g.length;y++){const x=g[y];this._stamp[x]!==a&&(this._stamp[x]=a,o.push(this.boxes[x]))}}return o}}const Vv=.18,Wv=.55,eu=.75,qv=.3,nu=.55,Xv=1.2;function Yv(i,t){const e=t instanceof qc?t:new qc(t,1),n=Array.isArray(i)?i:[i];for(const s of n)jv(s,e)}function jv(i,t){const e=i.attributes.color;if(!e||e.itemSize!==3||e.normalized||!i.attributes.normal)return;const n=i.attributes.position.array,s=i.attributes.normal.array,r=e.array,o=i.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],h=s[c+1],u=s[c+2],d=n[c]+l*.01,f=n[c+1]+h*.01,m=n[c+2]+u*.01;let _=0;const p=t.near(d,f,m,Xv);for(let y=0;y<p.length;y++){const x=p[y],M=Math.max(x.min.x-d,0,d-x.max.x),R=Math.max(x.min.y-f,0,f-x.max.y),E=Math.max(x.min.z-m,0,m-x.max.z),b=Math.sqrt(M*M+R*R+E*E);if(b>eu*3)continue;const P=(x.min.x+x.max.x)/2-d,D=(x.min.y+x.max.y)/2-f,v=(x.min.z+x.max.z)/2-m;l*P+h*D+u*v<=0||(_+=Wv*Math.exp(-b/Vv)+qv*Math.exp(-b/eu))}const g=Math.max(nu,1-Math.min(1-nu,_));r[c]*=g,r[c+1]*=g,r[c+2]*=g}e.needsUpdate=!0}let Kv=8,$v=i=>{const t=document.createElement("canvas");return t.width=t.height=i,t};const Ld=(i,t=i)=>{const e=$v(i);return e.width=i,e.height=t,e};let Id=0;function Pl(i,t){return t&&(i.colorSpace=ze),i.wrapS=i.wrapT=Do,i.anisotropy=Kv,i.generateMipmaps=!0,i.minFilter=Ui,i.magFilter=Ln,Id+=i.image.width*i.image.height*4*4/3,i}function ai(i){return Pl(new qn(Zv(i)),!0)}function Xc(i){return i.wrapS=i.wrapT=Di,i}function Zv(i){const t=Ld(i.w,i.h),e=t.getContext("2d"),n=e.createImageData(i.w,i.h),s=n.data,r=i.d,o=i.w*i.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const h=r[c],u=r[c+1],d=r[c+2];s[l]=(h<0?0:h>1?1:h)*255+.5,s[l+1]=(u<0?0:u>1?1:u)*255+.5,s[l+2]=(d<0?0:d>1?1:d)*255+.5,s[l+3]=255}return e.putImageData(n,0,0),t}const Ue=i=>i<0?0:i>1?1:i,ri=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255];function Jv(i){const[t,e,n]=i,s=Math.max(t,e,n),r=Math.min(t,e,n),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-n)/a+(e<n?6:0))/6:s===e?l=((n-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function Qv(i,t,e){if(t===0)return[e,e,e];const n=e<.5?e*(1+t):e+t-e*t,s=2*e-n,r=o=>(o=(o%1+1)%1,o<1/6?s+(n-s)*6*o:o<1/2?n:o<2/3?s+(n-s)*(2/3-o)*6:s);return[r(i+1/3),r(i),r(i-1/3)]}function ni(i,t=1,e=0,n=1){const[s,r,o]=Jv(Array.isArray(i)?i:ri(i));return Qv(s+e/360,Ue(r*n),Ue(o*t))}function ci(i,t){return{w:i,h:t,d:new Float32Array(i*t*3)}}function ls(i,t){const e=Array.isArray(t)?t:ri(t),n=i.d;for(let s=0;s<n.length;s+=3)n[s]=e[0],n[s+1]=e[1],n[s+2]=e[2]}function Ll(i,t,e,n,s){if(s<=0)return;const r=i.w,o=i.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,h=i.d,u=1-s;h[l]=h[l]*u+n[0]*s,h[l+1]=h[l+1]*u+n[1]*s,h[l+2]=h[l+2]*u+n[2]*s}function Rn(i,t,e,n,s,r,o=1){const a=Array.isArray(r)?r:ri(r),c=Math.round(t),l=Math.round(n),h=Math.round(e),u=Math.round(s);if(o<1){for(let _=h;_<u;_++)for(let p=c;p<l;p++)Ll(i,p,_,a,o);return}const d=i.w,f=i.h,m=i.d;for(let _=h;_<u;_++){let p=_;(p<0||p>=f)&&(p=(p%f+f)%f);const g=p*d;for(let y=c;y<l;y++){let x=y;(x<0||x>=d)&&(x=(x%d+d)%d);const M=(g+x)*3;m[M]=a[0],m[M+1]=a[1],m[M+2]=a[2]}}}function Cr(i,t,e,n,s,r=1){const o=n+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,h=a+.5-e,u=Ue(n-Math.sqrt(l*l+h*h)+.5);u>0&&Ll(i,c,a,s,r*u)}}function Yc(i,t,e,n,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,h]=t[o],u=Math.hypot(l-a,h-c),d=Math.max(1,Math.ceil(u));for(let f=0;f<=d;f++){const m=f/d;Cr(i,a+(l-a)*m,c+(h-c)*m,r,n,s)}}}function Dd(i,t,e,n,s,r,o,a){const c=i.w,l=i.h,h=i.d,u=r/2,d=o[0],f=o[1],m=o[2],_=Math.PI*2/n;for(let p=0;p<l;p++){const g=p*c,y=t+e*Math.sin(p*_+s),x=y-u,M=y+u,R=Math.floor(x),E=Math.ceil(M);for(let b=R;b<=E;b++){const P=Ue(Math.min(b+1,M)-Math.max(b,x));if(P<=0)continue;const D=a*P,v=1-D;let w=b;(w<0||w>=c)&&(w=(w%c+c)%c);const U=(g+w)*3;h[U]=h[U]*v+d*D,h[U+1]=h[U+1]*v+f*D,h[U+2]=h[U+2]*v+m*D}}}const iu=i=>i*i*(3-2*i);function t1(i,t,e){const n=new Float32Array(t*e);for(let s=0;s<n.length;s++)n[s]=i.float();return n}const su=256;function Xn(i,t,e={}){const{p0:n=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??n,l=e.p0y??n,h=new Float32Array(t*a),u=[];let d=1,f=0;for(let R=0;R<s;R++){const E=Math.min(su,Math.max(1,Math.round(c*o**R))),b=Math.min(su,Math.max(1,Math.round(l*o**R)));u.push({lat:t1(i,E,b),px:E,py:b,amp:d}),f+=d,d*=r}const m=new Float64Array(t*a),_=new Int32Array(t),p=new Int32Array(t),g=new Float64Array(t);for(let R=0;R<u.length;R++){const E=u[R],b=E.lat,P=E.px,D=E.py,v=E.amp,w=P/t,U=D/a;for(let N=0;N<t;N++){const X=N*w,q=X|0,G=q>=P?q%P:q;_[N]=G,p[N]=G+1>=P?0:G+1,g[N]=iu(X-q)}for(let N=0;N<a;N++){const X=N*U,q=X|0,G=iu(X-q),j=1-G,z=q>=D?q%D:q,pt=z*P,mt=(z+1>=D?0:z+1)*P,lt=N*t;for(let kt=0;kt<t;kt++){const Kt=_[kt],Q=p[kt],F=g[kt],dt=b[pt+Kt],nt=b[pt+Q],vt=b[mt+Kt],_t=b[mt+Q];m[lt+kt]+=v*((dt+(nt-dt)*F)*j+(vt+(_t-vt)*F)*G)}}}let y=1/0,x=-1/0;for(let R=0;R<h.length;R++){h[R]=m[R]/f;const E=h[R];E<y&&(y=E),E>x&&(x=E)}const M=x-y||1;for(let R=0;R<h.length;R++)h[R]=(h[R]-y)/M;return h}function Ud(i,t,e,n){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*n+1,a=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)a[u]=((u-n)%t+t)%t,c[u]=(u+n+1)%t;for(let u=0;u<e;u++){const d=u*t;let f=0;for(let m=-n;m<=n;m++)f+=i[d+(m%t+t)%t];for(let m=0;m<t;m++)s[d+m]=f/o,f-=i[d+a[m]],f+=i[d+c[m]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-n)%e+e)%e*t,h[u]=(u+n+1)%e*t;for(let u=0;u<t;u++){let d=0;for(let f=-n;f<=n;f++)d+=s[(f%e+e)%e*t+u];for(let f=0;f<e;f++)r[f*t+u]=d/o,d-=s[l[f]+u],d+=s[h[f]+u]}return r}function e1(i,t,e=1.5,n=null){const s=n??i.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const h=(l-1+s)%s*t,u=l*t,d=(l+1)%s*t;let f=u*4;for(let m=0;m<t;m++,f+=4){const _=a[m],p=c[m],g=i[h+_],y=i[h+m],x=i[h+p],M=i[u+_],R=i[u+p],E=i[d+_],b=i[d+m],P=i[d+p],D=x+2*R+P-(g+2*M+E),v=E+2*b+P-(g+2*y+x),w=-D*o,U=v*o,N=1/Math.sqrt(w*w+U*U+1);r[f]=(w*N*.5+.5)*255+.5,r[f+1]=(U*N*.5+.5)*255+.5,r[f+2]=(N*.5+.5)*255+.5,r[f+3]=255}}return r}function Pr(i,t,e=1.5,n=null){const s=n??i.length/t;return Pl(new qn(Nd(e1(i,t,e,s),t,s)),!1)}function Nd(i,t,e){const n=Ld(t,e),s=n.getContext("2d"),r=s.createImageData(t,e);return r.data.set(i),s.putImageData(r,0,0),n}function n1(i,t,e,n,s=null){const o=i*(s??i),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,d=n?n[c]:0;a[l]=(h<0?0:h>1?1:h)*255+.5,a[l+1]=(u<0?0:u>1?1:u)*255+.5,a[l+2]=(d<0?0:d>1?1:d)*255+.5,a[l+3]=255}return a}function Dn(i,t,e,n,s=null){const r=s??i;return Pl(new qn(Nd(n1(i,t,e,n,r),i,r)),!1)}const Il={},Mr=new Map;let Od=null;function an(i,t){Il[i]=t}const i1=i=>{const t=Object.keys(i).sort();return t.length?t.map(e=>e+"="+JSON.stringify(i[e])).join(","):""};function s1(i,t=null,e={}){const n=Il[i];if(!n)throw new Error(`Textures: no recipe named '${i}'`);const s=i1(e),r=s?i+"#"+s:i;if(Mr.has(r))return Mr.get(r);const o=t||(Od||new Ho("textures")).child("tex."+r),a=n(o,e);return a.name=i,Mr.set(r,a),a}function r1(){var i,t;for(const e of Mr.values()){for(const n of["map","normalMap","ormMap"])(t=(i=e[n])==null?void 0:i.dispose)==null||t.call(i);if(e.maps)for(const n of e.maps)n.dispose()}Mr.clear(),Id=0,Od=null}Rr(r1);const za={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};an("timberFloor",(i,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),h=t.species||i.pick(Object.keys(za)),u=za[h]||za.blackbutt,d=ci(1024,1024);ls(d,ni(u.dark,.72));const f=ri(u.dark),m=ni(u.base,1.25),_=[];for(let E=0;E<15;E++){const b=E*c+l/2,P=(E+1)*c-l/2,D=ni(u.base,1+i.range(-.06,.06),i.range(-3,3));Rn(d,b,0,P,1024,D);const v=Math.round(i.range(.15,.85)*1024);_.push(v),Rn(d,b,v,P,v+2,ni(u.dark,.8),.85),Rn(d,b,v-2,P,v,m,.25);const w=i.int(28,60);for(let U=0;U<w;U++){const N=i.range(b+1,P-1),X=i.range(1.5,4),q=1024/i.int(2,5),G=i.range(0,Math.PI*2),j=i.range(2,3),z=i.range(.04,.12),pt=i.chance(.25)?m:f;Dd(d,N,X,q,G,j,pt,z)}if(i.chance(.2)){const U=i.range(204.8,819.2),N=i.range(60,160),X=i.range(b+4,P-4);for(let q=0;q<i.int(2,4);q++){const G=(q+1)*i.range(3,7),j=[];for(let z=0;z<=16;z++){const pt=z/16;j.push([X+(pt-.5)*2*G,U-N*(1-(pt-.5)**2*4)])}Yc(d,j,2,f,.06)}}}const p=Xn(i,512,{p0:64,octaves:3}),g=new Float32Array(512*512),y=new Float32Array(512*512),x=new Float32Array(512*512),M=512/15,R=l*512/1024;for(let E=0;E<512;E++)for(let b=0;b<512;b++){const P=E*512+b,D=Math.floor(b/M),v=b-D*M,w=v<R/2||v>M-R/2,U=E*1024/512,N=_[D],X=U>=N-1&&U<=N+2,q=w||X;y[P]=q?.15:.75,g[P]=Ue(u.rough+(q?.1:0)+(p[P]-.5)*.1),x[P]=q?.72:1}return{map:ai(d),normalMap:Pr(Ud(y,512,512,1),512,1.2),ormMap:Dn(512,x,g,null),uvScale:[o,o],normalScale:.5,species:h,tinted:!1}});an("plasterWall",(i,t={})=>{const s=t.rough??.88,r=Xn(i,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=s+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/a*Math.PI*2)*.02),o[h]=Ue(u)}return{ormMap:Dn(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});an("plasterCeiling",i=>Il.plasterWall(i,{rough:.93,ceiling:!0}));an("paintedJoinery",i=>{const n=Xn(i,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Ue(.42+(n[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Dn(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});an("carpetPile",i=>{const n=ci(512,512);ls(n,[1,1,1]);const s=Xn(i,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=n.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,d=Ue(.9+(s[h]-.5)*.16+u);r[h*3]=d,r[h*3+1]=d,r[h*3+2]=d}for(let c=0;c<1200;c++){const l=i.pick([[1.1,0],[.78,8],[.92,-10]]),h=ni(16777215,l[0],l[1],1);if(l[1]!==0){const u=i.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}Cr(n,i.range(0,512),i.range(0,512),i.range(1,2),h,.25)}const o=Xn(i,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Ue(.92+(o[c]-.5)*.06);return{map:ai(n),normalMap:Pr(o,512,.6),ormMap:Dn(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});an("ceramicTile",(i,t={})=>{const n=t.tile??.3,s=2,r=n*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=ri(12104358),h=[];for(let p=0;p<s*s;p++)h.push({c:ni(14473423,1+i.range(-.03,.03),i.range(-2,2)),g:i.range(-1,1)});const u=ci(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),m=new Float32Array(512*512),_=o/2;for(let p=0;p<512;p++)for(let g=0;g<512;g++){const y=p*512+g,x=Math.floor(g/c),M=Math.floor(p/c),R=g-x*c,E=p-M*c,b=Math.min(R,c-R,E,c-E);if(b<_){u.d[y*3]=l[0],u.d[y*3+1]=l[1],u.d[y*3+2]=l[2],d[y]=.85,f[y]=.25,m[y]=.62;continue}const P=h[M*s+x],D=(R/c+E/c)/2,v=1.03-.06*(P.g>0?D:1-D);u.d[y*3]=Ue(P.c[0]*v),u.d[y*3+1]=Ue(P.c[1]*v),u.d[y*3+2]=Ue(P.c[2]*v),d[y]=.08;const w=Ue((b-_)/a);f[y]=.25+.75*w,m[y]=.62+.38*w}return{map:ai(u),normalMap:Pr(f,512,2),ormMap:Dn(512,m,d,null),uvScale:[r,r],normalScale:.8,tinted:!1}});an("fabricWeave",i=>{const n=ci(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let h=0;h<a.length;h++)a[h]=i.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=i.range(-.035,.035);const l=Xn(i,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const d=h*256+u,f=(u>>1&1^h>>1&1)===0,m=u>>1,_=h>>1,p=f?a[(m*8+(h>>5&7))%a.length]:c[(_*8+(u>>5&7))%c.length],g=Ue((f?1.06:.94)+p+(l[d]-.5)*.06);n.d[d*3]=g,n.d[d*3+1]=g,n.d[d*3+2]=g,s[d]=f?.66:.8,r[d]=f?1:.3}return{map:ai(n),normalMap:Pr(Ud(r,256,256,1),256,.8),ormMap:Dn(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});an("joineryTimber",i=>{const n=ci(512,512);ls(n,[1,1,1]);const s=Xn(i,512,{p0x:48,p0y:8,octaves:4}),r=n.d;for(let c=0;c<512*512;c++){const l=Ue(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=ni(16777215,.72);for(let c=0;c<220;c++){const l=i.range(0,512),h=i.range(2,6),u=512/i.int(1,2),d=i.range(0,Math.PI*2);Dd(n,l,h,u,d,i.range(2,3.5),o,i.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Ue(.55+(s[c]-.5)*.08);return{map:ai(n),ormMap:Dn(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});an("vinylSheet",i=>{const n=ci(512,512);ls(n,14209732);const s=[13222578,15131093,11906460,14472902].map(ri);for(let c=0;c<3e3;c++)Cr(n,i.range(0,512),i.range(0,512),i.range(1,3),i.pick(s),.35);const r=Xn(i,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Ue(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=i.range(0,512),h=i.range(0,512),u=i.range(40,120),d=i.range(0,Math.PI*2),f=i.range(.6,2.2),m=[];for(let _=0;_<=24;_++){const p=d+f*(_/24);m.push([l+Math.cos(p)*u,h+Math.sin(p)*u])}Yc(n,m,i.range(2,4),ni(14209732,.88),.3),Yc(a,m,i.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Ue(o[c]+a.d[c*3]*.15);return{map:ai(n),ormMap:Dn(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});an("laminateBench",i=>{const s=ci(512,512);ls(s,gt.benchtop);const r=[9274743,14077886,7235417].map(ri);for(let l=0;l<2e3;l++)Cr(s,i.range(0,512),i.range(0,512),i.range(1,2.5),i.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=ni(gt.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let u=0;u<512;u++)Ll(s,u,l,c,.85),o[l*512+u]=.45;return{map:ai(s),ormMap:Dn(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});an("ceilingGrid",i=>{const s=ci(512,512);ls(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=ri(14210509),c=ri(12434098),l=Xn(i,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let d=0;d<512;d++){const f=u*512+d,m=Math.min(d,512-d),_=Math.min(u,512-u);if(m<r/2||_<o/2){const y=m>=r/2-2&&m<r/2||_>=o/2-2&&_<o/2?c:a;s.d[f*3]=y[0],s.d[f*3+1]=y[1],s.d[f*3+2]=y[2],h[f]=.55}else{const g=1+(l[f]-.5)*.04;s.d[f*3]*=g,s.d[f*3+1]*=g,s.d[f*3+2]*=g,h[f]=.9}}return{map:ai(s),ormMap:Dn(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});an("applianceEnamel",i=>{const n=Xn(i,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Ue(.3+(n[r]-.5)*.04);return{ormMap:Dn(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});an("metalBrushed",i=>{const n=new Float32Array(65536),s=new Float32Array(256*256),r=Xn(i,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=i.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;n[l]=Ue(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:Dn(256,null,n,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});an("quiltFolds",i=>{const n=[],s=i.int(5,9);for(let d=0;d<s;d++)n.push({a:i.range(.4,1),c:i.range(.05,.95),w:i.range(.06,.14)});const r=d=>{let f=0;for(const m of n)f+=m.a*Math.exp(-(((d-m.c)/m.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let o=1/0,a=-1/0;for(let d=0;d<=256;d++){const f=r(d/256);f<o&&(o=f),f>a&&(a=f)}const c=a-o||1,l=d=>(r(Ue(d))-o)/c,h=ci(512,256),u=new Float32Array(512*256);for(let d=0;d<512;d++){const f=l(d/511),m=.9+.1*f;for(let _=0;_<256;_++){const p=_*512+d;h.d[p*3]=m,h.d[p*3+1]=m,h.d[p*3+2]=m,u[p]=f}}return{map:Xc(ai(h)),normalMap:Xc(Pr(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:n,tinted:!0}});an("pictureArt",i=>{const n=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=n[r].map(ri),a=ci(256,256);ls(a,o[i.int(0,3)]);const c=i.int(0,2);if(c===0){let h=0;for(;h<256;){const u=i.int(12,48);Rn(a,0,h,256,Math.min(256,h+u),o[i.int(0,3)],i.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<i.int(5,11);h++){const u=i.range(0,179.2),d=i.range(0,256*.7);Rn(a,u,d,u+i.range(30,110),d+i.range(30,110),o[i.int(0,3)],i.range(.55,.95))}else{const h=i.range(115.2,174.08);Rn(a,0,0,256,h,o[0],1),Rn(a,0,h,256,256,o[2],1);for(let u=0;u<i.int(3,7);u++){const d=i.range(h-40,h+40);Rn(a,0,d,256,d+i.range(3,10),o[i.int(0,3)],i.range(.3,.7))}Cr(a,i.range(256*.2,256*.8),i.range(20,h-20),i.range(12,26),o[3],.9)}const l=ni(16777215,.97);Rn(a,0,0,256,6,l),Rn(a,0,250,256,256,l),Rn(a,0,0,6,256,l),Rn(a,250,0,256,256,l),s.push(Xc(ai(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const o1={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},Us=new Map;function Dl(i,t=16777215,e=null,n={}){const s=o1[i];if(!s)throw new Error(`Surfaces: no surface named '${i}'`);const r=Object.keys(n).sort().map(h=>h+"="+JSON.stringify(n[h])).join(","),o=i+"|"+t+"|"+r;if(Us.has(o))return Us.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=h=>s.alpha!==void 0?Rl(h):h;if(s.recipe){const{print:h,...u}=n,d=Object.keys(u).sort().map(g=>g+"="+JSON.stringify(u[g])).join(","),f=e?e.child("tex."+s.recipe+(d?"#"+d:"")):null,m=s1(s.recipe,f,u),_=m.maps?m.maps[Math.min(m.maps.length-1,h??0)]:m.map;if(_&&(a.map=_),m.normalMap){a.normalMap=m.normalMap;const g=m.normalScale??1;a.normalScale=new St(g,g)}m.ormMap?(a.aoMap=m.ormMap,a.roughnessMap=m.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=m.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const p=c(new fn(a));return m.uvScale&&(p.userData.uvScale=m.uvScale),p.userData.cast=s.cast,p.userData.surface=i,Us.set(o,p),p}const l=c(new fn(a));return l.userData.cast=s.cast,l.userData.surface=i,Us.set(o,l),l}function a1(){for(const i of Us.values())i.dispose();Us.clear()}Rr(a1);const Ut={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,intWall:.11,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,headDatum:2.1,benchH:.9,toeKickH:.15,toeKickD:.05,cabinetModules:[.3,.45,.6,.75,.9,1,1.2],handleH:1,switchH:1.05,gpoH:.3},Ae={thin:.002,furniture:.003,joinery:.005},ru=new Set;function jc(i,t,e={}){if(e.material)return e.material;try{return Dl(i,t,null,e.recipe||{})}catch(n){ru.has(i)||(ru.add(i),console.error(`RoomKit: surface '${i}' unavailable, falling back to flat colour`,n))}return Re(t,e)}function se(i,t,e,n,s,r={}){var l;const o=jc(i,s,r),a=r.chamfer?kd(t,e,n,r.chamfer):r.graded?c1(t,e,n,r.gradeEdge):new Ot(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),c=new st(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const Js=new Map,Oi=i=>Math.round(i*1e3);function zd(i,t,e){const n=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(n[s*2]=i[r],n[s*2+1]=i[r+2]):o>=c?(n[s*2]=i[r+2],n[s*2+1]=i[r+1]):(n[s*2]=i[r],n[s*2+1]=i[r+1])}return n}function Fd(i){const t=i.length*3,e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const o of i){const[a,c,l]=o;let h=c[0]-a[0],u=c[1]-a[1],d=c[2]-a[2],f=l[0]-a[0],m=l[1]-a[1],_=l[2]-a[2],p=u*_-d*m,g=d*f-h*_,y=h*m-u*f;const x=(a[0]+c[0]+l[0])/3,M=(a[1]+c[1]+l[1])/3,R=(a[2]+c[2]+l[2])/3;let E=c,b=l;p*x+g*M+y*R<0&&(E=l,b=c,p=-p,g=-g,y=-y);const P=Math.hypot(p,g,y)||1;p/=P,g/=P,y/=P;for(const D of[a,E,b])e[s*3]=D[0],e[s*3+1]=D[1],e[s*3+2]=D[2],n[s*3]=p,n[s*3+1]=g,n[s*3+2]=y,s++}const r=new Qe;return r.setAttribute("position",new De(e,3)),r.setAttribute("normal",new De(n,3)),r.setAttribute("uv",new De(zd(e,n,t),2)),r.setAttribute("color",new De(new Float32Array(t*3).fill(1),3)),r}function kd(i,t,e,n=Ae.furniture){i=Math.max(i,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(n,Math.min(i,t,e)/2-5e-4);if(!(s>2e-4))return new Ot(i,t,e);const r=`c${Oi(i)},${Oi(t)},${Oi(e)},${Oi(s)}`,o=Js.get(r);if(o)return o;const a=i/2,c=t/2,l=e/2,h=[a-s,c-s,l-s],u=[a,c,l],d=(g,y)=>[(y===0?u[0]:h[0])*g[0],(y===1?u[1]:h[1])*g[1],(y===2?u[2]:h[2])*g[2]],f=[];for(const g of[-1,1])for(const y of[-1,1])for(const x of[-1,1])f.push([g,y,x]);const m=[],_=(g,y,x,M)=>{m.push([g,y,x]),m.push([g,x,M])};for(let g=0;g<3;g++){const y=(g+1)%3,x=(g+2)%3;for(const M of[-1,1]){const R=(E,b)=>{const P=[0,0,0];return P[g]=M,P[y]=E,P[x]=b,d(P,g)};_(R(-1,-1),R(1,-1),R(1,1),R(-1,1))}}for(let g=0;g<3;g++)for(let y=g+1;y<3;y++){const x=3-g-y;for(const M of[-1,1])for(const R of[-1,1]){const E=[0,0,0];E[g]=M,E[y]=R,E[x]=-1;const b=[0,0,0];b[g]=M,b[y]=R,b[x]=1,_(d(E,g),d(E,y),d(b,y),d(b,g))}}for(const g of f)m.push([d(g,0),d(g,1),d(g,2)]);const p=Fd(m);return Js.set(r,p),p}const oo=[0,.05,.18,.55];function ou(i,t=.12){const e=t/.12,n=[0];for(let s=1;s<oo.length;s++){const r=oo[s]*e;r<i/2-1e-4&&n.push(r)}n.push(i/2);for(let s=oo.length-1;s>=1;s--){const r=i-oo[s]*e;r>i/2+1e-4&&n.push(r)}return n.push(i),n}function au(i,t,e,n,s,r){const o=(a,c)=>[t[0]+e[0]*a+n[0]*c,t[1]+e[1]*a+n[1]*c,t[2]+e[2]*a+n[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),h=o(s[a+1],r[c]),u=o(s[a+1],r[c+1]),d=o(s[a],r[c+1]);i.push([l,h,u]),i.push([l,u,d])}}function c1(i,t,e,n=.12){const s=`g${Oi(i)},${Oi(t)},${Oi(e)},${Oi(n)}`,r=Js.get(s);if(r)return r;const o=e<=i&&e<=t?2:t<=i?1:0,[a,c,l]=o===2?[i,t,e]:o===1?[i,e,t]:[e,t,i],h=a/2,u=c/2,d=l/2,f=ou(a,n),m=ou(c,n),_=[];au(_,[-h,-u,d],[1,0,0],[0,1,0],f,m),au(_,[-h,-u,-d],[1,0,0],[0,1,0],f,m);const p=(y,x,M,R)=>{_.push([y,x,M]),_.push([y,M,R])};p([h,-u,-d],[h,u,-d],[h,u,d],[h,-u,d]),p([-h,-u,-d],[-h,u,-d],[-h,u,d],[-h,-u,d]),p([-h,u,-d],[h,u,-d],[h,u,d],[-h,u,d]),p([-h,-u,-d],[h,-u,-d],[h,-u,d],[-h,-u,d]);const g=Fd(_);if(o===1?g.rotateX(-Math.PI/2):o===0&&g.rotateY(Math.PI/2),o!==2){const y=g.attributes.position.array,x=g.attributes.normal.array;g.setAttribute("uv",new De(zd(y,x,g.attributes.position.count),2))}return Js.set(s,g),g}Rr(()=>{for(const i of Js.values())i.dispose();Js.clear()});class l1{constructor(){this.group=new jt,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,n,s,r,o,a=!1){this.colliders.push({min:new I(t-s/2,e,n-o/2),max:new I(t+s/2,e+r,n+o/2),walkable:a})}spot(t,e,n,s){return this.spots[t]=new I(e,n,s),this.spots[t]}interact(t,e,n,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new I(n,s,r),action:o,data:a,radius:c})}light(t,e,n,s=16770756,r=9,o=13){const a=new yv(s,r,o,2);return a.position.set(t,e,n),this.group.add(a),this.lights.push(a),a}}function h1(i,t,e,n,s,r,o=gt.floorTimber,a={}){const c=a.thickness??.16,l=se(a.surface??"floorTimber",n,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),i.add(l),i.solid(t,r-c,e,n,c,s,!0),l}function cu(i,t,e,n,s,r,o=gt.ceiling,a={}){const c=a.thickness??Ut.cornice,l=se(a.surface??"ceiling",n,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),i.add(l),l}function u1(i,t,e,n,s=0,r={}){const o=se("trim",.075,.115,.01,r.colour??gt.trim,{});o.position.set(t,e,n),o.rotation.y=s,i.add(o);const a=se("trim",.03,.055,.004,r.colour??gt.trim,{});return a.rotation.y=s,a.position.set(t,e,n),a.translateZ(.007),i.add(a),o}function d1(i,t,e,n,s=0,r={}){const o=se("trim",.115,.075,.01,r.colour??gt.trim,{});return o.position.set(t,e,n),o.rotation.y=s,i.add(o),o}function Qn(i,t,e,n,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,h=e-r/2-a,u=e+r/2+a;const d=t-s/2,f=t+s/2,m=e-r/2,_=e+r/2;for(const x of i.decals){if(l<=x.x0||c>=x.x1||u<=x.z0||h>=x.z1)continue;const M=Math.min(l-x.x0,x.x1-c),R=Math.min(u-x.z0,x.z1-h);if(M<=R?t<(x.x0+x.x1)/2?l=Math.max(f,Math.min(l,x.x0)):c=Math.min(d,Math.max(c,x.x1)):e<(x.z0+x.z1)/2?u=Math.max(_,Math.min(u,x.z0)):h=Math.min(m,Math.max(h,x.z1)),l>x.x0+1e-4&&c<x.x1-1e-4&&u>x.z0+1e-4&&h<x.z1-1e-4)return null}const p=l-c,g=u-h;if(p<.05||g<.05)return null;const y=new st(new Xe(p,g),Iv());return y.rotation.x=-Math.PI/2,y.position.set((c+l)/2,n+.006,(h+u)/2),i.add(y),i.decals.push({x0:c,x1:l,z0:h,z1:u}),y}const pi=new Mi;function Bd(i,t,e,n){pi.setFromObject(t);const s=pi.max.x-pi.min.x,r=pi.max.z-pi.min.z;return i.solid((pi.min.x+pi.max.x)/2,e,(pi.min.z+pi.max.z)/2,s,n,r),[s,r]}function f1(i,t,e,n){if(i.door===!1||i.leaf===!1||i.door===void 0&&i.leaf===void 0&&t<=1.005)return null;const s=i.door||{},r=t>=1.25,o=s.style??(i.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??n,colour:s.colour??i.leaf??(o==="glazed"?Zt.metal:e),surfaceName:s.surface??i.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function ns(i,t,e,n,s,r={}){const{y0:o=0,height:a=Ut.storey,thickness:c=Ut.wallThick,colour:l=gt.wall,innerColour:h=null,outerColour:u=null,openings:d=[],skirting:f=!0,skirtStyle:m="timber",cornice:_=!0,corniceStyle:p="cove",autoServices:g=!0,inner:y=null,surface:x="wall",trimColour:M=gt.trim,graded:R=!0,name:E=null}=r,b=h??u,P=n-t,D=s-e,v=Math.hypot(P,D);if(v<.01)return;const w=P/v,U=D/v,N=Math.atan2(-U,w),X=-U,q=w,G=c/2,j=(F,dt,nt,vt=0,_t=0)=>(F.position.set(t+w*dt+X*vt,nt,e+U*dt+q*vt),F.rotation.y=N+_t,i.add(F),F),z=(F,dt,nt,vt={})=>se("trim",F,dt,nt,vt.colour??M,vt),pt=y===null?[-1,1]:[y],mt=(F,dt,nt,vt)=>{const _t=dt-F,Et=vt-nt;if(_t<=.005||Et<=.005)return;const At=(F+dt)/2,Z=_&&p==="shadowline"&&Math.abs(vt-(o+a))<.02,T=Z?Et-.01:Et,ft=_t>=1.2&&T>=1.2,rt=se(x,_t,T,c,l,{graded:R&&ft,cast:!0});if(j(rt,At,nt+T/2),Z){const C=se(x,_t,.01,c-.02,l,{});j(C,At,vt-.005)}const it=Math.abs(w)*_t+Math.abs(U)*c,at=Math.abs(U)*_t+Math.abs(w)*c,Pt=t+w*At,ot=e+U*At;if(i.solid(Pt,nt,ot,it,Et,at),b)for(const C of pt){const S=se(x,_t,T,.02,b,{graded:R&&ft});j(S,At,nt+T/2,C*(G+.01))}if(f&&m&&nt-o<.02)if(m==="commercial"){const C=z(_t,Ut.skirtCommercial,c+.04,{colour:gt.tileFloor,chamfer:Ae.thin});j(C,At,nt+Ut.skirtCommercial/2)}else{const C=[[.112,Ut.skirtProud,0,Ae.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[S,B,J,et]of C){const tt=z(_t,S,c+B*2,{chamfer:et});j(tt,At,nt+J+S/2)}}if(_&&p==="cove"&&Math.abs(vt-(o+a))<.02){const C=Ut.corniceGirth/Math.SQRT2;for(const S of pt){const B=z(_t,Ut.corniceGirth,.008,{chamfer:0});j(B,At,vt-C/2,S*(G+C/2)),B.rotation.order="YXZ",B.rotation.set(-S*Math.PI/4,N,0)}}},lt=(F,dt,nt,vt)=>{const _t=vt-nt;for(const At of[-1,1]){const Z=z(Ut.reveal,_t,c,{});j(Z,F+At*(dt/2-Ut.reveal/2),nt+_t/2)}const Et=z(dt,Ut.reveal,c,{});j(Et,F,vt-Ut.reveal/2)},kt=(F,dt,nt,vt)=>{const _t=dt-2*Ut.reveal,Et=_t/2+Ut.archQuirk,At=vt+Ut.archQuirk;for(const Z of[-1,1])for(const T of[-1,1]){const ft=z(Ut.archW,At-nt+.002,Ut.archProud,{chamfer:Ae.joinery});if(j(ft,F+Z*(Et+Ut.archW/2),nt+(At-nt)/2,T*(G+Ut.archProud/2)),nt-o<.02){const rt=z(Ut.archW+.02,.15,.032,{});j(rt,F+Z*(Et+Ut.archW/2),nt+.075,T*(G+.016))}}for(const Z of[-1,1]){const T=z(_t+2*(Ut.archW+Ut.archQuirk),Ut.archW,Ut.archProud,{chamfer:Ae.joinery});j(T,F,At+Ut.archW/2,Z*(G+Ut.archProud/2))}},Kt=[...d].sort((F,dt)=>F.at-dt.at);let Q=0;for(const F of Kt){const dt=F.width/2,nt=Math.max(0,F.at-dt),vt=Math.min(v,F.at+dt),_t=F.kind==="window"?F.sill??Ut.winSill:0,Et=F.kind==="window"?F.head??Ut.winHead:F.head??(F.kind==="arch"?2.25:Ut.doorH);if(mt(Q,nt,o,o+a),_t>0&&mt(nt,vt,o,o+_t),mt(nt,vt,o+Et,o+a),Q=vt,F.kind==="window"){const At=Et-_t,Z=o+(_t+Et)/2,T=y===null?1:-y,ft=new st(new Ot(F.width-2*Ut.reveal-.002,At-.002,.006),Ko());ft.castShadow=!1,ft.receiveShadow=!0,j(ft,F.at,Z,T*.015);const rt=new st(new Ot(F.width-2*Ut.reveal-.002,At-.002,.006),Cv());rt.castShadow=!1,rt.receiveShadow=!0,j(rt,F.at,Z,-T*.015),lt(F.at,F.width,o+_t,o+Et),kt(F.at,F.width,o+_t,o+Et);const it=Math.max(1,Math.round((F.width-2*Ut.reveal)/.9)),at=F.width-2*Ut.reveal;for(let ot=1;ot<it;ot++){const C=z(.04,At,.05,{chamfer:Ae.joinery});j(C,F.at-at/2+at/it*ot,Z)}const Pt=F.restrictor?Math.min(o+1.7,o+Et-.1):o+_t+At/3;if(At>.55){const ot=z(at,.04,.05,{chamfer:Ae.joinery});j(ot,F.at,Pt)}if(F.restrictor){const ot=z(.06,.02,.03,{colour:gt.metalDull,chamfer:Ae.thin});j(ot,F.at+at/4,o+_t+.02,0)}for(const ot of pt){const C=z(F.width+.09,.025,c/2+.03,{chamfer:Ae.joinery});j(C,F.at,o+_t-.0125,ot*(c/4+.015))}if(y!==null){const ot=z(F.width+.12,.04,.09,{chamfer:Ae.joinery});j(ot,F.at,o+_t-.02,-y*(G+.045)),ot.rotation.order="YXZ",ot.rotation.set(y*.1,N,0)}if(F.curtains){p1(i,t+w*F.at,o+Et+.15,e+U*F.at,N,F.width+.4,{offset:(y??1)*(G+.09)});const ot=[.3,.22],C=y??1;for(const B of[-1,1]){const J=ot[B<0?0:1],et=F.width*J,tt=6;for(let Lt=0;Lt<tt;Lt++){const ht=et/tt,Mt=se("fabric",ht*1.35,At+.35,.045,F.curtains,{cast:!0}),$t=F.at+B*(F.width/2-et+(Lt+.5)*ht);j(Mt,$t,Z+.1,C*(G+.075),Lt%2?.175:-.175)}}const S=z(F.width+.44,.12,.09,{chamfer:Ae.joinery});j(S,F.at,o+Et+.21,C*(G+.055))}}else if((F.kind==="door"||F.kind==="arch")&&(lt(F.at,F.width,o,o+Et),kt(F.at,F.width,o,o+Et),F.kind==="door")){const At=F.swing??1,Z=F.width/2-Ut.reveal,T=G-.045;for(const it of[-1,1]){const at=z(.013,Et-.02,.03,{});j(at,F.at+it*(Z-.0055),o+(Et-.02)/2,At*T)}const ft=z(F.width-2*Ut.reveal,.014,.03,{});j(ft,F.at,o+Et-.025,At*T);const rt=f1(F,F.width,M,At);if(rt){const it=T+.015+Ut.leafT,at=Et-Ut.reveal-.02,Pt=rt.pair?Z-.006:2*Z-.006,ot=rt.face,C=rt.pair?[1,-1]:[ot];for(const S of C){const B=F.at+S*(Z-.003),J=ot*it;rt.leaves.push({hx:t+w*B+X*J,hz:e+U*B+q*J,y:o,baseRot:N,phiOpen:S*ot*Math.PI/2,leafRot:S>0?0:Math.PI,dx:-S*Pt/2,dz:-ot*Ut.leafT/2,lw:Pt,lh:at});for(const et of[.15,1.02,1.89]){if(et>at-.1)continue;const tt=se("chrome",.016,.1,.016,Zt.metal,{chamfer:.001,cast:!1});j(tt,B,o+.015+et,J)}}rt.centre={x:t+w*F.at,z:e+U*F.at},rt.y0=o,i.doors.push(rt)}}if(g&&F.kind==="door"){const At=-(F.swing??1);for(const Z of[-1,1])u1(i,t+w*(F.at+At*(F.width/2+Ut.archW+.15))+X*Z*(G+.006),o+Ut.switchH,e+U*(F.at+At*(F.width/2+Ut.archW+.15))+q*Z*(G+.006),N+(Z<0?Math.PI:0))}}if(mt(Q,v,o,o+a),g&&y!==null&&o+Ut.gpoH<o+a){const F=Math.max(1,Math.floor(v/3.5));for(let dt=0;dt<F;dt++){const nt=(dt+.5)*(v/F);Kt.some(vt=>Math.abs(vt.at-nt)<vt.width/2+.25)||d1(i,t+w*nt+X*y*(G+.006),o+Ut.gpoH,e+U*nt+q*y*(G+.006),N+(y<0?Math.PI:0))}}E&&(i.faces[E]={a:{x:t,z:e},b:{x:n,z:s},u:{x:w,z:U},n:{x:X,z:q},angle:N,thickness:c,y0:o,height:a,length:v,face:F=>({x:(t+n)/2+X*F*(c/2),z:(e+s)/2+q*F*(c/2),nx:X*F,nz:q*F,rotY:N+(F<0?Math.PI:0)})})}function p1(i,t,e,n,s=0,r=1.6,o={}){const a=new jt,c=new st(new Fe(.0125,.0125,r,8),jc("chrome",o.colour??Zt.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const h=new st(new Hi(.0175,8,6),jc("chrome",o.colour??Zt.metalDark));h.position.x=l*r/2,a.add(h)}return a.rotation.y=s,a.position.set(t,e,n),a.translateZ(o.offset??0),i.add(a),a}function m1(i,t,e,n,s=!0){const r=se("chrome",s?.128:.018,s?.018:.128,.018,Zt.metal,{chamfer:.001,cast:!1});r.position.set(t,e,n+.032),i.add(r);for(const o of[-1,1]){const a=se("chrome",.01,.01,.032,Zt.metal,{cast:!1});a.position.set(t+(s?o*.064:0),e+(s?0:o*.064),n+.016),i.add(a)}return r}function Kc(i,t,e,n,s=0,r=gt.joineryLight){const o=typeof r=="object"&&r!==null?r:{colour:r},{colour:a=gt.joineryLight,frame:c=gt.joineryDark,collide:l=!0,seatH:h=.45}=o,u=new jt,d=.44,f=se("joinery",d,.018,d,a,{chamfer:.02,cast:!0});f.position.y=h-.009,u.add(f);const m=.42,_=se("joinery",d,m,.018,a,{chamfer:Ae.furniture});_.position.set(0,h+.04+m/2,-d/2+.02),_.rotation.x=.14,u.add(_);for(const p of[-1,1]){const g=se("joinery",.03,m+.07,.03,c,{chamfer:Ae.furniture});g.position.set(p*(d/2-.02),h+.02+(m+.07)/2,-d/2+.02),g.rotation.x=.14,u.add(g)}for(const p of[-1,1])for(const g of[-1,1]){const y=se("joinery",.032,h-.018,.032,c,{chamfer:Ae.furniture});y.position.set(p*(d/2-.024),(h-.018)/2,g*(d/2-.024)),g<0&&(y.rotation.x=-.105),u.add(y)}for(const p of[-1,1]){const g=se("joinery",d-.07,.045,.016,c,{chamfer:Ae.thin});g.position.set(0,h-.045,p*(d/2-.026)),u.add(g);const y=se("joinery",d-.07,.02,.02,c,{chamfer:Ae.thin});y.position.set(0,.18,p*(d/2-.026)),u.add(y)}return u.position.set(t,n,e),u.rotation.y=s,i.add(u),l&&i.solid(t,n,e,.45,.45,.45),u}function g1(i,t,e,n,s,r,o=0,a=gt.benchtop,c=gt.joineryLight,l={}){const{shadow:h=!0,handle:u=!0}=l,d=new jt,f=Ut.toeKickH,m=Ut.toeKickD,_=.72,p=.038,g=se("joinery",s-.1,f,r-m,gt.shadowDark,{});g.position.set(0,f/2,-m/2),d.add(g);const y=se("joinery",s,_,r,c,{chamfer:Ae.furniture,cast:!0});y.position.set(0,f+_/2,0),d.add(y);const x=se("bench",s+.04,p,r+.02,a,{chamfer:Ae.joinery,cast:!0});x.position.set(0,Ut.benchH-p/2,.01),d.add(x);const M=[];let R=s;for(;R>.02;){let D=Ut.cabinetModules[0];for(const v of Ut.cabinetModules)v<=R+.001&&(D=v);(R-D<.02||M.length>12)&&(D=R),M.push(D),R-=D}let E=-s/2;for(const D of M){const v=se("joinery",D-.003,_-.006,.018,c,{chamfer:Ae.thin,cast:!1});v.position.set(E+D/2,f+_/2,r/2+.009),d.add(v),u&&m1(d,E+D/2,f+_-.05,r/2+.018),E+=D}d.position.set(t,n,e),d.rotation.y=o,i.add(d);const[b,P]=Bd(i,d,n,Ut.benchH);return h&&Qn(i,t,e,n,b,P),d}function Hd(i,t,e,n,s,r,o=0,a=gt.joineryLight,c={}){const{frame:l=gt.joineryDark,height:h=.74,shadow:u=!0}=c,d=new jt,f=.03,m=se("joinery",s,f,r,a,{chamfer:Ae.joinery,cast:!0});m.position.y=h-f/2,d.add(m);for(const g of[-1,1])for(const y of[-1,1]){const x=se("joinery",.06,h-f,.06,l,{chamfer:Ae.furniture});x.position.set(g*(s/2-.09),(h-f)/2,y*(r/2-.09)),d.add(x)}for(const[g,y,x,M]of[[s-.24,.02,0,r/2-.09],[s-.24,.02,0,-r/2+.09],[.02,r-.24,s/2-.09,0],[.02,r-.24,-s/2+.09,0]]){const R=se("joinery",g,.07,y,l,{chamfer:Ae.furniture});R.position.set(x,h-f-.035,M),d.add(R)}d.position.set(t,n,e),d.rotation.y=o,i.add(d);const[_,p]=Bd(i,d,n,h);return u&&Qn(i,t,e,n,_,p),d}function _1(i,t,e,n,s,r,o={}){const{tileW:a=1.2,tileD:c=.6,colour:l=gt.ceiling,tee:h=gt.metalDull}=o,u=new jt,d=Math.max(1,Math.round(n/a)),f=Math.max(1,Math.round(s/c)),m=n/d,_=s/f;for(let p=0;p<d;p++)for(let g=0;g<f;g++){const y=se("ceilingGrid",m-.02,.014,_-.02,l,{cast:!1});y.position.set(-n/2+(p+.5)*m,-.007,-s/2+(g+.5)*_),u.add(y)}for(let p=0;p<=d;p++){const g=se("chrome",.024,.024,s,h,{chamfer:.001});g.position.set(-n/2+p*m,-.012,0),u.add(g)}for(let p=0;p<=f;p++){const g=se("chrome",n,.024,.024,h,{chamfer:.001});g.position.set(0,-.012,-s/2+p*_),u.add(g)}return u.position.set(t,r,e),i.add(u),u}const x1=.38,v1=.44,y1=2.4,M1=1.8,S1=.95,w1=2.4,lu=70,ao=.38,hu=i=>i<0?0:i>1?1:i,E1=i=>i*i*(3-2*i);function b1(i,t,e,n="doorLeaf"){const s=new jt,r=Ut.leafT,o=.105,a=.175,c=.105,l=.14,h=Math.min(Ut.handleH+.01,t-c-l),u=(g,y,x,M,R=r,E=.005)=>{const b=se(n,g,y,R,e,{chamfer:E,cast:!0});return b.position.set(x,M,0),s.add(b),b};u(o,t,i/2-o/2,0),u(o,t,-i/2+o/2,0);const d=i-2*o;u(d,a,0,-t/2+a/2),u(d,c,0,t/2-c/2),u(d,l,0,-t/2+h);const f=a,m=h-l/2,_=h+l/2,p=t-c;m-f>.05&&u(d-.004,m-f-.004,0,-t/2+(f+m)/2,r-.016,.002),p-_>.05&&u(d-.004,p-_-.004,0,-t/2+(_+p)/2,r-.016,.002);for(const g of[-1,1]){const y=se("chrome",.052,.052,.01,Zt.metal,{chamfer:.002,cast:!1});y.position.set(-i/2+.06,-t/2+Ut.handleH,g*(r/2+.005)),s.add(y);const x=se("chrome",.02,.02,.045,Zt.metal,{chamfer:.001,cast:!1});x.position.set(-i/2+.06,-t/2+Ut.handleH,g*(r/2+.0275)),s.add(x);const M=se("chrome",.11,.02,.02,Zt.metal,{chamfer:.001,cast:!1});M.position.set(-i/2+.115,-t/2+Ut.handleH,g*(r/2+.05)),s.add(M)}return s}function T1(i,t,e=Zt.metal){const n=new jt,s=.048,r=.085,o=.07,a=.21,c=.07,l=Math.min(1.02,t-o-c-.2),h=(f,m,_,p,g=s,y=.003)=>{const x=se("chrome",f,m,g,e,{chamfer:y,cast:!0});return x.position.set(_,p,0),n.add(x),x};h(r,t,i/2-r/2,0),h(r,t,-i/2+r/2,0);const u=i-2*r;h(u,a,0,-t/2+a/2),h(u,o,0,t/2-o/2),h(u,c,0,-t/2+l);const d=[[-t/2+a,-t/2+l-c/2],[-t/2+l+c/2,t/2-o]];for(const[f,m]of d){const _=m-f;if(_<.08)continue;const p=new st(new Ot(u-.004,_-.004,.008),Ko());p.castShadow=!1,p.receiveShadow=!0,p.position.set(0,(f+m)/2,0),n.add(p)}for(const f of[-1,1]){const m=se("chrome",u,a-.03,.004,e,{chamfer:.001,cast:!1});m.position.set(0,-t/2+a/2,f*(s/2+.003)),n.add(m);const _=-t/2+1.05,p=se("chrome",i-.17,.038,.038,e,{chamfer:.002,cast:!1});p.position.set(0,_,f*(s/2+.062)),n.add(p);for(const g of[-1,1]){const y=se("chrome",.026,.026,.062,e,{chamfer:.001,cast:!1});y.position.set(g*(i/2-.115),_,f*(s/2+.031)),n.add(y)}}return n}class A1{constructor(t,e,n,s){this.system=t,this.id=s,this.name=e.label||"door",this.auto=!!e.auto,this.triggerR=e.triggerR??(this.auto?y1:S1),this.dwell=e.dwell??(this.auto?M1:w1),this.openTime=e.openTime??x1,this.closeTime=e.closeTime??v1,this.state=e.startsShut===!1?"open":"shut",this.phase=this.state==="open"?1:0,this._hold=0,this.isDoor=!0,this.action="door",this.data={door:this},this.radius=2,this.leaves=[];for(const c of e.leaves){const l=new jt;l.position.set(c.hx,c.y,c.hz),l.rotation.y=c.baseRot;const h=e.style==="glazed"?T1(c.lw,c.lh,e.colour):b1(c.lw,c.lh,e.colour,e.surfaceName),u=Pd(h);u.position.set(c.dx,c.lh/2+.015,c.dz),u.rotation.y=c.leafRot,l.add(u),n.add(l),this.leaves.push({pivot:l,baked:u,baseRot:c.baseRot,phiOpen:c.phiOpen})}for(const c of this.leaves)c.pivot.rotation.y=c.baseRot;n.updateMatrixWorld(!0);const r=new Mi,o=new Mi;for(const c of this.leaves)r.union(o.setFromObject(c.baked));r.min.y-=.05,this.collider={min:r.min.clone(),max:r.max.clone(),walkable:!1,door:this};const a=new I(e.centre.x,e.y0+1,e.centre.z);n.localToWorld(a),this.pos=a,this._trigger2=this.triggerR*this.triggerR,this._apply()}get open(){return this.state==="open"}get blocking(){return this.state==="shut"}get label(){return this.state==="shut"||this.state==="closing"?`Open the ${this.name}`:`Close the ${this.name}`}requestOpen(){if(this.state==="open"||this.state==="opening"){this._hold=this.dwell;return}this.state="opening",this.system._dirty=!0}requestClose(){return this.state==="shut"||this.state==="closing"?!0:this._occupied()?!1:(this.state="closing",!0)}toggle(){return this.state==="shut"||this.state==="closing"?(this.requestOpen(),!0):this.requestClose()}_occupied(t=null){var o;const e=this.collider,n=a=>a.x>e.min.x-ao&&a.x<e.max.x+ao&&a.z>e.min.z-ao&&a.z<e.max.z+ao,s=(o=this.system.game.player)==null?void 0:o.position;if(s&&n(s))return!0;const r=t||this.system._movers();for(const a of r)if(n(a))return!0;return!1}update(t,e,n){let s=!1;if(this.auto&&n){const r=n.x-this.pos.x,o=n.z-this.pos.z;s=r*r+o*o<this._trigger2}if(!s)for(const r of e){const o=r.x-this.pos.x,a=r.z-this.pos.z;if(o*o+a*a<this._trigger2){s=!0;break}}switch(s&&(this._hold=this.dwell,(this.state==="shut"||this.state==="closing")&&(this.state="opening",this.system._dirty=!0)),this.state){case"opening":this.phase=hu(this.phase+t/this.openTime),this.phase>=1&&(this.phase=1,this.state="open");break;case"open":this._hold>0&&(this._hold-=t,this._hold<=0&&!this._occupied(e)&&(this.state="closing"));break;case"closing":if(this._occupied(e)){this.state="opening",this._hold=this.dwell;break}this.phase=hu(this.phase-t/this.closeTime),this.phase<=0&&(this.phase=0,this.state="shut",this.system._dirty=!0);break}this._apply()}_apply(){const t=E1(this.phase);for(const e of this.leaves)e.pivot.rotation.y=e.baseRot+e.phiOpen*t}setVisible(t){for(const e of this.leaves)e.pivot.visible!==t&&(e.pivot.visible=t)}dispose(){var t;for(const e of this.leaves)(t=e.pivot.parent)==null||t.remove(e.pivot),e.baked.traverse(n=>{n.isMesh&&n.geometry.dispose()});this.leaves.length=0}}class R1{constructor(t){this.game=t,this.list=[],this._blocking=[],this._dirty=!0,this._moverBuf=[],this._moverFrame=-1,this._frame=0,this.scanned=0}install(t,e){if(!t||!t.length)return[];const n=[];for(const s of t){const r=new A1(this,s,e,this.list.length);this.list.push(r),n.push(r)}return this._dirty=!0,n}get count(){return this.list.length}_movers(){var r,o,a;if(this._moverFrame===this._frame)return this._moverBuf;this._moverFrame=this._frame;const t=this._moverBuf;t.length=0;const e=this.game,n=(o=(r=e.slice)==null?void 0:r.bodies)==null?void 0:o.call(r);if(n)for(const c of n)t.push(c.pos);const s=(a=e.npcs)==null?void 0:a.list;if(s)for(const c of s)c.visible&&t.push(c.position);return t}update(t){var r;if(!this.list.length)return;this._frame++;const e=this._movers(),n=(r=this.game.player)==null?void 0:r.position,s=lu*lu;for(const o of this.list)if(o.update(t,e,n),n){const a=n.x-o.pos.x,c=n.z-o.pos.z;o.setVisible(a*a+c*c<s)}}collect(t,e,n){if(this._dirty){this._blocking.length=0;for(const l of this.list)l.blocking&&this._blocking.push(l.collider);this._dirty=!1}const s=this._blocking.length;if(!s)return n;this.scanned+=s;const r=t.x-e,o=t.x+e,a=t.z-e,c=t.z+e;for(let l=0;l<s;l++){const h=this._blocking[l];h.max.x<r||h.min.x>o||h.max.z<a||h.min.z>c||n.push(h)}return n}nearest(t,e=2){let n=null,s=e;for(const r of this.list){if(r.auto)continue;const o=r.pos.distanceTo(t);o<s&&(s=o,n=r)}return n}clear(){for(const t of this.list)t.dispose();this.list.length=0,this._blocking.length=0,this._dirty=!0}}const qe=(i,t,e,n,s={})=>{const r=new st(new Ot(i,t,e),s.material||Re(n,s));return r.castShadow=s.cast!==!1,r.receiveShadow=!0,r};function Gd(i,t={}){var f;const{width:e=3,height:n=.8,bg:s="#1f2933",fg:r="#f4efe4",font:o="bold 64px Georgia, serif",pad:a=24}=t,c=document.createElement("canvas");c.width=512,c.height=Math.max(32,Math.round(512*(n/e)));const l=c.getContext("2d");l.fillStyle=s,l.fillRect(0,0,c.width,c.height),t.border&&(l.strokeStyle=t.border,l.lineWidth=8,l.strokeRect(6,6,c.width-12,c.height-12)),l.fillStyle=r,l.font=o,l.textAlign="center",l.textBaseline="middle";let h=parseInt(((f=o.match(/(\d+)px/))==null?void 0:f[1])||"64",10);for(;l.measureText(i).width>c.width-a*2&&h>12;)h-=2,l.font=o.replace(/\d+px/,h+"px");l.fillText(i,c.width/2,c.height/2);const u=new qn(c);u.colorSpace=ze,u.anisotropy=4;const d=new st(new Xe(e,n),new Mn({map:u,transparent:!0,side:Hn}));return d.userData.isSign=!0,d}function Vd(i,t=1){const e=new jt,n=i.range(2.6,4.4)*t,s=new st(new Fe(.2*t,.3*t,n,6),Re(Zt.trunk,{flat:!0}));s.position.y=n/2,s.castShadow=!0,e.add(s);const r=i.weighted([{value:Zt.foliage,weight:4},{value:Zt.foliageLight,weight:3},{value:Zt.foliageDeep,weight:2}]).value,o=i.int(2,4);for(let a=0;a<o;a++){const c=i.range(1.3,2.2)*t,l=new st(new jo(c,0),Re(r,{flat:!0}));l.position.set(i.range(-.7,.7)*t,n+i.range(-.2,.9)*t,i.range(-.7,.7)*t),l.rotation.set(i.range(0,3),i.range(0,3),i.range(0,3)),l.castShadow=!0,l.receiveShadow=!0,e.add(l)}return e}function Ul(i,t){const e=new jt,n=i.pick(Zt.carBodies),s=qe(1.9,.72,4.3,n);s.position.y=.78,e.add(s);const r=qe(1.72,.62,2.2,0,{material:bd()});r.position.set(0,1.4,-.15),e.add(r);const o=qe(1.78,.09,2,n);o.position.set(0,1.75,-.15),e.add(o);for(const l of[-1,1]){const h=qe(.09,.12,.24,n);h.position.set(l,1.26,.88),e.add(h)}const a=qe(1.95,.34,4.35,Zt.metalDark);a.position.y=.45,e.add(a);for(const l of[-.86,.86])for(const h of[1.42,-1.42]){const u=new st(new Fe(.34,.34,.26,10),Re(1579292));u.rotation.z=Math.PI/2,u.position.set(l,.34,h),u.castShadow=!0,e.add(u)}const c=Cl();for(const l of[-.62,.62]){const h=new st(new Ot(.34,.16,.08),c);h.position.set(l,.86,2.16),e.add(h);const u=new st(new Ot(.3,.14,.08),Td());u.position.set(l,.86,-2.16),e.add(u)}return e.userData.headlights=c,e}function C1(){const i=new jt;i.rotation.order="YXZ";const t=qe(1.9,.72,4.1,15262418);t.position.y=.78,i.add(t);const e=qe(1.86,1.15,2.3,15262418);e.position.set(0,1.62,-.85),i.add(e);const n=qe(1.92,.28,2.32,11026479);n.position.set(0,1.55,-.85),i.add(n);const s=qe(1.72,.62,1.3,0,{material:bd()});s.position.set(0,1.4,.9),i.add(s);const r=qe(1.95,.34,4.15,Zt.metalDark);r.position.y=.45,i.add(r);for(const a of[-.86,.86])for(const c of[1.3,-1.3]){const l=new st(new Fe(.36,.36,.26,10),Re(1579292));l.rotation.z=Math.PI/2,l.position.set(a,.36,c),l.castShadow=!0,i.add(l)}const o=Cl();for(const a of[-.62,.62]){const c=new st(new Ot(.34,.16,.08),o);c.position.set(a,.86,2.06),i.add(c);const l=new st(new Ot(.3,.14,.08),Td());l.position.set(a,.86,-2.06),i.add(l)}return i}function P1(i){const t=new jt,e=i.pick([13616564,12109001,13220004,11187616]),n=i.pick([7035472,5266020,7626571]),s=7,r=5.6,o=2.9,a=qe(s,o,r,e);a.position.y=o/2,t.add(a);for(const _ of[-1,1]){const p=qe(s+.7,.12,r*.62,n);p.position.set(0,o+.62,_*r*.235),p.rotation.x=_*.42,t.add(p)}const c=qe(s+.8,.14,.3,n);c.position.y=o+1.2,t.add(c);const l=new Md;l.moveTo(-r/2,0),l.lineTo(r/2,0),l.lineTo(0,1.12),l.closePath();const h=new bl(l,{depth:.16,bevelEnabled:!1});for(const _ of[-1,1]){const p=new st(h,Re(e));p.rotation.y=Math.PI/2,p.position.set(_===1?s/2-.16:-s/2,o,0),p.castShadow=!0,t.add(p)}const u=qe(.5,1.3,.5,9072736);u.position.set(s*.28,o+.8,-.6),t.add(u);const d=new jt;d.position.set(-.475,0,r/2+.04);const f=qe(.95,2,.1,5916210);f.position.set(.475,1,0),d.add(f),t.add(d);const m=qe(1.4,.16,.7,Zt.concrete);m.position.set(0,.08,r/2+.4),t.add(m);for(const _ of[-2.1,2.1]){const p=qe(1.15,1.1,.08,0,{material:Ko(),cast:!1});p.position.set(_,1.5,r/2+.03),t.add(p);const g=qe(1.3,1.25,.05,16777215);g.position.set(_,1.5,r/2+.01),t.add(g)}return{group:t,size:{w:s,d:r,h:o},door:d}}function Wd(i){const t=Cl(),e=Ad();i.traverse(n=>{n.material===t&&(n.material=e)})}const L1=.42,I1=.34,vi=I1+.03,$c=.7,Zc=.6,cn=.55,Ke=11026479,ur=3.2,Fn=2.8,yt={x0:-5.4,x1:-1.8,z0:-3.65,z1:-2.35,cx:-3.6,cz:-3,w:3.6,d:1.3,benchH:.9},ge={x0:-1.72,z0:-2.45,x1:-.9,z1:-.55,w:.36},Ns={x:-1.93,z:-2.51},co={x:yt.cx,y:1.78,z:yt.z0+.176,tilt:-.16,w:.48,h:.28},Vs={x0:-1.7,y:.97,z:0},kn={x0:yt.x0+.35,x1:-2.3,z:yt.z1+.55,facing:Math.PI},uu={x:-8,screen:{y:1.22,z:1.721,w:.3,h:.22,rotY:Math.PI}},D1={x:-5.2,y:2.3,z:1.934,w:.62,h:.34,rotY:0},$i={x:-8,z:.85,facing:0},U1=.04,N1=.004,O1=.012,z1=(i,t,e)=>{const n=Math.min(i,t,e);return n<U1?0:Math.min(O1,Math.max(N1,n/12))},F1=[["tile",16777215,"kitchen floor overlay, splashbacks, partition linings"],["metal",gt.metalDull,"all stainless: pod, benches, pass, hood, shelving"],["bench",gt.benchtop,"front counter top (RoomKit counter())"],["joinery",gt.joineryLight,"tables, chairs, booths, gate, door leaves"],["joinery",gt.joineryDark,"chair frames, bins, kiosk plinths"],["joinery",gt.shadowDark,"toe kicks, recesses, coved skirting, screens off"],["trim",Ke,"counter fascia, kiosk pedestals, menu board, signage"],["(basic)","signAtlas","ONE canvas atlas: every label in the shop"],["(shared)","troffer emissive","luminaire faces — one material town-wide"],["(shared)","contact shadow","fixture footprint decals — one town-wide"],["trim",5208634,"cold bin: lettuce (legibility is a design requirement)"],["trim",10236968,"cold bin: tomato"],["trim",13210159,"cold bin: cheese + UHC hold slots"],["trim",8030778,"cold bin: pickle"],["trim",15261904,"cold bin: onion + mayo gun band"]],du=new Set;function qd(i,t,e={}){if(e.material)return e.material;try{return Dl(i,t,null,e.recipe||{})}catch(n){return du.has(i)||(du.add(i),console.error(`Fitout: surface '${i}' unavailable, flat colour instead`,n)),Re(t,e)}}function k1(i,t,e,n,s,r={}){var h;const o=qd(i,s,r),a=r.chamfer??z1(t,e,n),c=a>0?kd(t,e,n,a):new Ot(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),l=new st(c,o);return l.castShadow=r.cast??((h=o.userData)==null?void 0:h.cast)??!1,l.receiveShadow=!0,l}function W(i,t,e,n,s,r,o,a,c,l={}){const h=k1(t,o,a,c,e,l);return h.position.set(n,s,r),l.rotY&&(h.rotation.y=l.rotY),i.add(h),h}const Xd=i=>({x:Math.sin(i),z:Math.cos(i)});function dr(i,t,e,n,s){const r=(t+n)/2,o=(e+s)/2;W(i,"joinery",gt.shadowDark,r,.0375,o,Math.max(Math.abs(n-t),.024),.075,Math.max(Math.abs(s-e),.024))}function lo(i,t,e,n,s,r,o,a){const c=n-t,l=s-e;for(let h=0;h<o;h++)for(let u=0;u<a;u++){const d=t+(h+.5)*(c/o),f=e+(u+.5)*(l/a);W(i,"metal",gt.metalDull,d,r+.035,f,1.2,.07,.6);const m=new st(new Ot(1.16,.012,.56),Lv());m.position.set(d,r-.006,f),i.add(m)}}function B1(i,t,e,n=0,s=.62,r=.48){const a=Xd(n);W(i,"joinery",gt.joineryDark,t,.9/2,e,s,.9,r,{rotY:n,cast:!0}),W(i,"joinery",gt.shadowDark,t,.075,e,s-.06,.15,r-.06,{rotY:n}),W(i,"joinery",gt.shadowDark,t+a.x*(r/2-.03),.6,e+a.z*(r/2-.03),s-.16,.34,.04,{rotY:n});const c=W(i,"joinery",gt.joineryLight,t+a.x*(r/2+.01),.64,e+a.z*(r/2+.01),s-.2,.26,.016,{rotY:n,cast:!0});c.rotation.x=-.22,W(i,"metal",gt.metalDull,t,.9+.02,e,s+.06,.04,r+.06,{rotY:n,cast:!0}),W(i,"trim",Ke,t,.9-.07,e,s+.005,.09,r+.005,{rotY:n}),i.solid(t,0,e,Math.abs(a.z)*s+Math.abs(a.x)*r,.9+.05,Math.abs(a.z)*r+Math.abs(a.x)*s)}function fu(i,t,e,n,s=0){const r={rotY:s};W(i,"joinery",gt.joineryDark,t,n+.021,e,.17,.042,.115,r),W(i,"trim",Ke,t-.045,n+.1,e,.052,.15,.052,{...r,cast:!0}),W(i,"joinery",gt.shadowDark,t+.03,n+.075,e-.02,.038,.1,.038,{...r,cast:!0}),W(i,"joinery",gt.joineryLight,t+.038,n+.058,e+.028,.055,.065,.055,r)}function pu(i,t,e,n,s=7,r=.4,o=.3,a=0){for(let c=0;c<s;c++)W(i,"trim",Ke,t,e+.01+c*.014,n,r,.012,o,{rotY:a,cast:c===s-1});W(i,"joinery",gt.shadowDark,t,e+.004,n,r+.03,.008,o+.03,{rotY:a})}const Jc=4,Qc=8;function Ts(){return"#"+Ke.toString(16).padStart(6,"0")}const Yd={fries:[0,0,"FRIES","#20262e"],grill:[1,0,"GRILL","#20262e"],pod:[2,0,"BUILD","#20262e"],pack:[3,0,"PACK-OUT","#20262e"],drivethru:[0,1,"DRIVE-THRU",Ts()],staff:[1,1,"STAFF ONLY","#20262e"],collect:[2,1,"COLLECT",Ts()],order:[3,1,"ORDER HERE",Ts()],drinks:[0,2,"DRINKS","#20262e"],mccafe:[1,2,"McCAFE","#4b2e22"],barn:[2,2,"BURGER BARN",Ts()],uhc:[3,2,"UHC","#20262e"],lettuce:[0,3,"LETTUCE","#4f7a3a"],tomato:[1,3,"TOMATO","#9c3428"],cheese:[2,3,"CHEESE","#c9922f"],pickle:[3,3,"PICKLE","#7a8a3a"],onion:[0,4,"ONION","#8f9784","#20262e"],ketchup:[1,4,"KETCHUP","#9c2b1f"],mustard:[2,4,"MUSTARD","#c9922f"],mayo:[3,4,"MAYO","#e6dcc4","#20262e"],bbq:[0,5,"BBQ","#5a3a26"],buns:[1,5,"BUNS","#a8763f"],wrap:[2,5,"WRAP","#20262e"],dry:[3,5,"DRY STORE","#2f5d6b"],pay:[0,6,"PAY",Ts()],present:[1,6,"PRESENT",Ts()],toaster:[2,6,"TOASTER","#20262e"],sauce:[3,6,"SAUCE","#20262e"]};let Bn=null;function jd(){if(Bn!==null)return Bn||null;if(typeof document>"u"||!document.createElement)return Bn=!1,null;const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d");if(!t)return Bn=!1,null;const e=i.width/Jc,n=i.height/Qc;t.clearRect(0,0,i.width,i.height);for(const[,r]of Object.entries(Yd)){const[o,a,c,l,h="#f4efe4"]=r,u=o*e,d=a*n;t.fillStyle=l,t.fillRect(u+3,d+3,e-6,n-6),t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=3,t.strokeRect(u+3,d+3,e-6,n-6),t.fillStyle=h,t.textAlign="center",t.textBaseline="middle";let f=44;for(t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.measureText(c).width>e-34&&f>12;)f-=2,t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.fillText(c,u+e/2,d+n/2)}const s=new qn(i);return s.colorSpace=ze,s.anisotropy=4,Bn=new fn({map:s,roughness:.9,metalness:0,emissive:2763306,emissiveMap:s,side:si,transparent:!1}),Bn}Rr(()=>{var i;Bn&&Bn.dispose&&((i=Bn.map)==null||i.dispose(),Bn.dispose()),Bn=null});let gi=null;function ho(){return gi||(gi=new fn({color:856342,roughness:.3,metalness:0,emissive:1454666,emissiveIntensity:.55})),gi}Rr(()=>{var i;(i=gi==null?void 0:gi.dispose)==null||i.call(gi),gi=null});function _e(i,t,e,n,s,r,o,a=0){const c=jd(),l=Yd[t];if(!c||!l)return null;const[h,u]=l,d=new Xe(r,o),f=h/Jc,m=(h+1)/Jc,_=1-(u+1)/Qc,p=1-u/Qc;d.setAttribute("uv",new De(new Float32Array([f,p,m,p,f,_,m,_]),2));const g=new st(d,c);return g.position.set(e,n,s),g.rotation.y=a,i.add(g),g}const ko=i=>!i.walkable&&i.max.y>L1&&i.min.y<1.7;function H1(i,t,e){let n=t,s=e,r=0;for(let o=0;o<4;o++){let a=!1;for(const c of i){if(!ko(c))continue;const l=c.min.x-vi,h=c.max.x+vi,u=c.min.z-vi,d=c.max.z+vi;if(n<=l||n>=h||s<=u||s>=d)continue;const f=[[n-l,-1,0],[h-n,1,0],[s-u,0,-1],[d-s,0,1]];f.sort((g,y)=>g[0]-y[0]);const[m,_,p]=f[0];n+=_*m,s+=p*m,r+=m,a=!0}if(!a)break}return{x:n,z:s,moved:r}}function G1(i,t,e){let n=1/0;for(const s of i){if(!ko(s))continue;const r=Math.max(s.min.x-t,0,t-s.max.x),o=Math.max(s.min.z-e,0,e-s.max.z),a=r===0&&o===0?-Math.min(t-s.min.x,s.max.x-t,e-s.min.z,s.max.z-e):Math.hypot(r,o);a<n&&(n=a)}return n===1/0?99:n}function V1(i,t){const e=[],n=[];for(const s of t){const r=[];for(const m of i)ko(m)&&s.x>m.min.x-vi&&s.x<m.max.x+vi&&s.z>m.min.z-vi&&s.z<m.max.z+vi&&r.push([+m.min.x.toFixed(2),+m.min.z.toFixed(2),+m.max.x.toFixed(2),+m.max.z.toFixed(2)]);if(r.length&&e.push({id:s.id,why:"point inside a blocking collider",boxes:r}),n.push({id:s.id,clear:+G1(i,s.x,s.z).toFixed(3)}),s.facing==null||s.standoff==null)continue;const o=Xd(s.facing),a=[s.standoff-.01,s.standoff-Zc],c=[s.x+o.x*a[0],s.x+o.x*a[1]],l=[s.z+o.z*a[0],s.z+o.z*a[1]],h=$c/2,u=[Math.min(...c)-Math.abs(o.z)*h,Math.max(...c)+Math.abs(o.z)*h],d=[Math.min(...l)-Math.abs(o.x)*h,Math.max(...l)+Math.abs(o.x)*h],f=[];for(const m of i)ko(m)&&(m.max.x<=u[0]+1e-6||m.min.x>=u[1]-1e-6||m.max.z<=d[0]+1e-6||m.min.z>=d[1]-1e-6||f.push([+m.min.x.toFixed(2),+m.min.z.toFixed(2),+m.max.x.toFixed(2),+m.max.z.toFixed(2)]));f.length&&e.push({id:s.id,why:`clear floor ${$c} x ${Zc} obstructed`,rect:[+u[0].toFixed(2),+d[0].toFixed(2),+u[1].toFixed(2),+d[1].toFixed(2)],boxes:f})}return n.sort((s,r)=>s.clear-r.clear),{failures:e,tightest:n.slice(0,8)}}function W1(i,t={}){const e=t.width??20,n=t.depth??14,s=e/2,r=n/2,o=s-Ut.wallThick/2,a=r-Ut.wallThick/2,c=gt.metalDull,l=gt.joineryLight,h=gt.joineryDark,u=gt.shadowDark,d=[],f=(L,O,Y,ct=null,wt=null,Jt={})=>{d.push({name:L,x:O,z:Y,facing:ct,standoff:wt,noClamp:!!Jt.noClamp})},m=1.4;W(i,"tile",16777215,(-o+7.9)/2,.003,(-a+m)/2,o+7.9,.006,m+a,{cast:!1,chamfer:0}),W(i,"tile",16777215,(7.9+o)/2,.003,(-5+m)/2,o-7.9,.006,m+5,{cast:!1,chamfer:0}),dr(i,-o+.02,-a+.04,-6.35,-a+.04),dr(i,-4.45,-a+.04,3.25,-a+.04),dr(i,-o+.04,-a,-o+.04,m),dr(i,o-.04,-5,o-.04,m);const _=-a+.375,p=-a+.75,g=-9.6,y=-6.7,x=(g+y)/2,M=y-g;W(i,"metal",c,x,.45,_,M,.9,.75,{cast:!0}),W(i,"joinery",u,x,.075,_+.02,M-.1,.15,.66),i.solid(x,0,_,M,.9,.75);const R=1.12;W(i,"tile",16777215,x,1.5,-a+.02,M+.4,1.2,.02,{cast:!1,chamfer:0}),W(i,"metal",c,x,1.01,_,2.1,.22,.62,{cast:!0});for(const L of[-.7,-.23,.24])W(i,"joinery",u,x+L,R,_,.32,.03,.42),W(i,"trim",13210159,x+L,R-.03,_,.28,.01,.38,{chamfer:0}),W(i,"metal",c,x+L,R+.16,_-.26,.03,.3,.03),W(i,"metal",c,x+L,R+.3,_-.2,.03,.03,.16);W(i,"metal",c,x+.95,1.06,_,.75,.1,.62,{cast:!0}),W(i,"metal",c,x+.95,1.24,_-.26,.7,.04,.04),W(i,"trim",Ke,x+.95,1.14,_+.1,.3,.06,.22),_e(i,"fries",x,1.62,-a+.05,.9,.26,0),W(i,"metal",c,x,2.24,_+.15,M+.3,.42,1,{cast:!0});const E=1.06,b=-4.3,P=-.3,D=(b+P)/2,v=P-b;W(i,"metal",c,D,.45,_,v,.9,.75,{cast:!0}),W(i,"joinery",u,D,.075,_+.02,v-.1,.15,.66),i.solid(D,0,_,v,.9,.75),W(i,"tile",16777215,D,1.5,-a+.02,v+.4,1.2,.02,{cast:!1,chamfer:0}),W(i,"metal",c,D,.98,_,2.6,.16,.62,{cast:!0});for(const L of[-.65,.65])W(i,"joinery",u,D+L,E,_,1.1,.02,.5);W(i,"metal",c,D,E+.1,_-.3,2.6,.2,.03,{cast:!0}),W(i,"metal",c,D+1.35,E+.02,_+.16,.1,.02,.16),W(i,"joinery",u,D+1.35,E+.06,_+.24,.03,.07,.1),_e(i,"grill",D,1.62,-a+.05,.9,.26,0),W(i,"metal",c,D,2.24,_+.15,v+.4,.42,1,{cast:!0}),W(i,"metal",c,D,2.62,_+.15,.34,.36,.34),W(i,"metal",c,1.35,1,_+.02,1.6,2,.7,{cast:!0}),i.solid(1.35,0,_+.02,1.6,2,.7);for(const L of[-.4,.4])W(i,"joinery",u,1.35+L,1,_+.38,.72,1.86,.02),W(i,"metal",c,1.35+L-.3,1.05,_+.4,.04,.6,.04);const w=Ut.intWall,U=3.3,N=-4.55,X={height:Fn,surface:"tile",colour:16777215,thickness:w,skirting:!1,cornice:!1,trimColour:gt.trim};ns(i,U,-a,U,N,{...X,inner:-1,autoServices:!1,name:"dryWest"}),ns(i,U,N,o,N,{...X,inner:1,autoServices:!1,openings:[{at:.95,width:1,kind:"door",head:Ut.headDatum,door:{startsShut:!1,style:"panel",label:"dry store",swing:-1}}],name:"drySouth"}),_e(i,"staff",U+.006+w/2,1.85,-5.7,.7,.22,Math.PI/2),_e(i,"dry",U+1.85,2.3,N+w/2+.006,.9,.26,0);const q={x0:5.55,x1:7.85,z0:-a+.05,z1:-5.35},G=(q.x0+q.x1)/2,j=(q.z0+q.z1)/2;W(i,"metal",c,G,1.2,j,q.x1-q.x0,2.4,q.z1-q.z0,{cast:!0}),i.solid(G,0,j,q.x1-q.x0,2.4,q.z1-q.z0);for(const L of[-.5,.28])W(i,"joinery",u,q.x0-.008,1.2,j+L,.012,2.3,.014,{chamfer:0});for(const L of[-.75,0,.75])W(i,"joinery",u,G+L,1.2,q.z1+.008,.014,2.3,.012,{chamfer:0});W(i,"metal",c,q.x0-.03,1.02,j+.3,.04,1.84,.78,{cast:!0});for(const[L,O,Y,ct]of[[.3,1.94,.8,.02],[.3,.1,.8,.02],[-.09,1.02,.02,1.86],[.69,1.02,.02,1.86]])W(i,"joinery",u,q.x0-.052,O,j+L,.008,ct,Y,{chamfer:0});W(i,"metal",c,q.x0-.07,1.05,j+.62,.05,.34,.06,{cast:!0}),W(i,"joinery",u,q.x0-.045,.35,j-.25,.01,.26,.44,{chamfer:0});for(let L=0;L<4;L++)W(i,"metal",c,q.x0-.052,.26+L*.055,j-.25,.006,.018,.4,{chamfer:0});W(i,"metal",c,G,2.55,j,.9,.3,.7,{cast:!0});for(let L=0;L<4;L++)W(i,"metal",c,4.45,.15+L*.44,-a+.25,1.7,.03,.45),L>0&&(W(i,"joinery",l,4.1,.29+L*.44,-a+.25,.55,.24,.38,{cast:!0}),W(i,"joinery",h,4.9,.27+L*.44,-a+.25,.55,.21,.36));i.solid(4.45,0,-a+.25,1.7,1.6,.45),W(i,"joinery",l,6.95,.16,-4.95,.55,.32,.42,{cast:!0}),W(i,"joinery",h,6.85,.44,-4.98,.42,.24,.36,{cast:!0}),dr(i,U+w/2,-a,U+w/2,N),lo(i,U,-a,o-1,N,Fn,2,1);const z={cx:4.7,cz:-2.5,w:3,d:.75};W(i,"metal",c,z.cx,.45,z.cz,z.w,.9,z.d,{cast:!0}),W(i,"joinery",u,z.cx,.075,z.cz,z.w-.1,.15,z.d-.08),i.solid(z.cx,0,z.cz,z.w,.9,z.d),Qn(i,z.cx,z.cz,0,z.w,z.d);for(let L=0;L<3;L++)W(i,"trim",Ke,z.cx-1.05,.98+L*.09,z.cz,.34,.08,.26);pu(i,z.cx-.3,.9,z.cz,7);for(let L=0;L<4;L++)W(i,"joinery",l,z.cx+.6,.96+L*.11,z.cz,.42,.1,.42,{cast:L===3});W(i,"joinery",l,z.cx+1.2,.97,z.cz,.36,.14,.36,{cast:!0}),_e(i,"pack",z.cx,1.6,z.cz-z.d/2-.02,.9,.26,Math.PI);const pt=o-.375;W(i,"metal",c,pt,.45,-2.7,.75,.9,4.5,{cast:!0}),W(i,"joinery",u,pt,.075,-2.7,.66,.15,4.4),i.solid(pt,0,-2.7,.75,.9,4.5),Qn(i,pt,-2.7,0,.75,4.5),W(i,"joinery",u,pt-.05,1.02,-4.2,.3,.2,.36,{cast:!0}),W(i,"joinery",u,pt-.11,1.22,-4.2,.03,.24,.32,{cast:!0}),W(i,"metal",c,pt,.94,-1,.6,.04,.8),W(i,"metal",c,o-.06,1.55,-2.7,.05,.22,.05,{cast:!0}),W(i,"joinery",u,o-.1,1.62,-2.7,.14,.14,.1,{cast:!0}),W(i,"joinery",u,o-.05,1.75,-2.7,.05,.4,.6,{cast:!0});{const L=new st(new Xe(.52,.32),ho());L.position.set(o-.07,1.75,-2.7),L.rotation.y=-Math.PI/2,i.add(L)}W(i,"metal",c,o-.25,1.25,-2.7,.45,.03,1.1),W(i,"trim",Ke,o-.25,1.32,-2.35,.3,.1,.22,{cast:!0}),W(i,"joinery",l,o-.25,1.34,-3,.28,.14,.3,{cast:!0}),_e(i,"pay",o-.02,2.3,-4.2,.6,.2,-Math.PI/2),_e(i,"present",o-.02,2.3,-1,.75,.2,-Math.PI/2),_e(i,"drivethru",o-.02,2.58,-2.6,1.1,.26,-Math.PI/2),i.interact("dt_window_out","hand the bag out",o-.25,1.1,-1,"service",{op:"deliver",when:"window_handout"},1.8);const mt=-.5;W(i,"metal",c,-o+.35,.45,mt,.7,.9,1.7,{cast:!0}),W(i,"joinery",u,-o+.35,.075,mt,.62,.15,1.6),i.solid(-o+.35,0,mt,.7,.9,1.7),Qn(i,-o+.35,mt,0,.7,1.7),W(i,"joinery",u,-o+.32,1.02,mt-.45,.3,.2,.36,{cast:!0}),W(i,"joinery",u,-o+.26,1.22,mt-.45,.03,.24,.32,{cast:!0}),W(i,"metal",c,-o+.06,1.55,mt+.55,.05,.22,.05,{cast:!0}),W(i,"joinery",u,-o+.1,1.62,mt+.55,.1,.14,.14,{cast:!0}),W(i,"joinery",u,-o+.03,1.45,mt,.03,.14,.14),_e(i,"drivethru",-o+.02,2.35,mt,1.1,.26,Math.PI/2),_e(i,"order",-o+.02,2.05,mt,.8,.22,Math.PI/2),i.interact("dt_window_take","take the drive-thru order",-o+.3,1.1,mt,"service",{op:"dt_take",when:"dt_order"},1.8);const lt=yt.benchH;W(i,"metal",c,yt.cx,.45,yt.cz,yt.w,.9,yt.d,{cast:!0}),W(i,"joinery",u,yt.cx,.075,yt.cz,yt.w-.1,.15,yt.d-.1),i.solid(yt.cx,0,yt.cz,yt.w,.9,yt.d),Qn(i,yt.cx,yt.cz,0,yt.w,yt.d);for(const[L,O]of[[0,Ke],[1,13210159],[2,5208634],[3,l]]){const Y=yt.x0+.55+L*.85;for(let ct=0;ct<4;ct++)W(i,"trim",O,Y,.24+ct*.13,yt.z1-.16,.4,.11,.26,{chamfer:0})}const kt=-4.9;W(i,"metal",c,kt,lt+.31,yt.cz-.1,.85,.62,.62,{cast:!0}),W(i,"joinery",u,kt,lt+.63,yt.cz-.1,.6,.03,.3),W(i,"joinery",u,kt,lt+.18,yt.cz+.215,.52,.09,.02),W(i,"metal",c,kt,lt+.12,yt.cz+.26,.56,.025,.1,{cast:!0}),W(i,"trim",Ke,kt,lt+.5,yt.cz+.22,.6,.08,.02),_e(i,"toaster",kt,lt+.36,yt.cz+.225,.44,.14,0),W(i,"metal",c,yt.x0-.55,.6,yt.cz,.7,1.2,.9,{cast:!0}),i.solid(yt.x0-.55,0,yt.cz,.7,1.2,.9);for(let L=0;L<3;L++)W(i,"joinery",l,yt.x0-.55,.35+L*.32,yt.cz,.62,.16,.8);_e(i,"buns",yt.x0-.55,1.32,yt.cz+.46,.5,.16,0);const Kt=-4;W(i,"metal",c,Kt,lt+.1,yt.cz-.25,.7,.2,.45,{cast:!0});const Q=[["ketchup",10236968],["mustard",13210159],["mayo",15261904],["bbq",8030778]];Q.forEach(([L,O],Y)=>{const ct=Kt-.255+Y*.17;W(i,"metal",c,ct,lt+.3,yt.cz-.25,.06,.22,.06,{cast:!0}),W(i,"trim",O,ct,lt+.43,yt.cz-.25,.05,.05,.05,{chamfer:0}),_e(i,L,ct,lt+.135,yt.cz-.02,.15,.06,0)});const F=-3.58;W(i,"joinery",u,-3.1,lt+.015,yt.cz-.08,1,.05,.6);const dt=[["pickle",8030778],["onion",15261904],["lettuce",5208634],["tomato",10236968],["cheese",13210159]];dt.forEach(([L,O],Y)=>{const ct=F+.1+Y*.19;W(i,"metal",c,ct,lt+.045,yt.cz-.08,.165,.09,.54),W(i,"trim",O,ct,lt+.075,yt.cz-.08,.13,.05,.48,{chamfer:0}),_e(i,L,ct,lt-.1,yt.z1+.006,.17,.075,0)});const nt=-2.2;W(i,"metal",c,nt,lt+.38,yt.cz,.78,.76,.68,{cast:!0});for(let L=0;L<3;L++)for(const O of[1,-1])W(i,"joinery",u,nt,lt+.14+L*.24,yt.cz+O*.345,.64,.16,.02),W(i,"trim",13210159,nt,lt+.11+L*.24,yt.cz+O*.3,.56,.03,.06,{chamfer:0});_e(i,"uhc",nt,lt+.86,yt.cz+.01,.4,.16,0),W(i,"joinery",l,Ns.x,lt+.02,Ns.z,.3,.04,.34,{cast:!0}),_e(i,"wrap",-1.95,lt-.1,yt.z1+.006,.3,.1,0);{const L=ge.x1-ge.x0,O=ge.z1-ge.z0,Y=Math.hypot(L,O),ct=Math.atan2(-O,L)+Math.PI/2,wt=(ge.x0+ge.x1)/2,Jt=(ge.z0+ge.z1)/2,Ee=W(i,"metal",c,wt,.965,Jt,ge.w,.03,Y,{rotY:ct,cast:!0});Ee.rotation.x=-.045;for(const Se of[-1,1]){const ne=W(i,"metal",c,wt,.995,Jt,.03,.06,Y,{rotY:ct});ne.translateX(Se*(ge.w/2-.015)),ne.rotation.x=-.045}for(const[Se,ne]of[[ge.x0+.1,ge.z0+.22],[ge.x1-.1,ge.z1-.25]])W(i,"metal",c,Se,.47,ne,.05,.94,.05);for(let Se=0;Se<3;Se++){const ne=Se/3,Ye=(Se+1)/3,Sn=ge.x0+L*ne,ir=ge.x0+L*Ye,sr=ge.z0+O*ne,jn=ge.z0+O*Ye;i.solid((Sn+ir)/2,.6,(sr+jn)/2,Math.abs(ir-Sn)+ge.w,.5,Math.abs(jn-sr)+.06)}}W(i,"metal",c,yt.cx,1.28,yt.z0+.06,.05,.8,.05,{cast:!0}),W(i,"metal",c,yt.cx,1.66,yt.z0+.09,.06,.05,.1);{const L=W(i,"joinery",u,yt.cx,1.78,yt.z0+.14,.56,.36,.035,{cast:!0});L.rotation.x=-.16;const O=W(i,"joinery",u,yt.cx,1.78,yt.z0+.165,.5,.3,.008,{chamfer:0});O.rotation.x=-.16;const Y=new st(new Xe(.48,.28),ho());Y.position.set(yt.cx,1.78,yt.z0+.172),Y.rotation.x=-.16,i.add(Y)}_e(i,"pod",yt.cx,2.05,yt.z0+.1,.6,.2,0);const vt=.6,_t=2.45,Et=3.55,At=-2.65,Z=-1.95;for(const[L,O]of[[-o,At],[Z,_t],[Et,o]]){const Y=(L+O)/2,ct=O-L;W(i,"metal",c,Y,.45,0,ct,.9,vt,{cast:!0}),W(i,"joinery",u,Y,.075,0,ct-.1,.15,vt-.08),i.solid(Y,0,0,ct,.9,vt)}Qn(i,(-o+At)/2,0,0,At+o,vt);{const L=W(i,"metal",c,At+.03,1.24,0,.05,Z-At,vt-.04,{cast:!0});L.rotation.z=.2}W(i,"metal",c,-.9,.945,0,1.6,.05,vt+.06,{cast:!0});for(const L of[-.7,.7])W(i,"metal",c,-.9+L,1.22,0,.04,.5,.04);W(i,"metal",c,-.9,1.44,0,1.56,.04,.05);for(const L of[-.4,.2]){W(i,"trim",Ke,-.9+L,1.38,0,.28,.1,.2,{cast:!0});const O=new st(new Ot(.2,.02,.14),Pv());O.position.set(-.9+L,1.325,0),i.add(O)}i.doors.push({label:"staff gate",style:"panel",pair:!1,auto:!0,startsShut:!0,face:-1,colour:l,surfaceName:"joinery",triggerR:1.2,dwell:1,leaves:[{hx:Et-.003,hz:0,y:0,baseRot:0,phiOpen:-Math.PI/2,leafRot:0,dx:-1.0939999999999996/2,dz:Ut.leafT/2,lw:Et-_t-.006,lh:1}],centre:{x:(_t+Et)/2,z:0},y0:0});const T={z:1.8,d:.8,x0:-o,x1:_t},ft=(T.x0+T.x1)/2,rt=T.x1-T.x0;g1(i,ft,T.z,0,rt,T.d,0,gt.benchtop,l,{handle:!1}),W(i,"trim",Ke,ft,.52,T.z+T.d/2+.03,rt,.6,.02),_e(i,"barn",T.x0+1.6,.62,T.z+T.d/2+.05,1.4,.34,0);const it=-8;W(i,"joinery",u,it,1.02,T.z,.36,.2,.3,{cast:!0}),W(i,"joinery",u,it,1.22,T.z-.06,.32,.24,.03,{cast:!0}),W(i,"metal",c,it,.98,T.z+.3,.14,.16,.1),_e(i,"order",it,1.42,T.z+T.d/2+.01,.8,.22,0);const at=-5.2;W(i,"metal",c,at,1.06,T.z,1.6,.04,T.d+.1);for(const L of[-.72,.72])W(i,"metal",c,at+L,.98,T.z,.05,.16,.05);_e(i,"collect",at,1.28,T.z+.12,.9,.24,0),W(i,"metal",c,at,2.62,T.z+.1,.05,.36,.05),W(i,"joinery",u,at,2.3,T.z+.1,.72,.44,.05,{cast:!0});{const L=new st(new Xe(.64,.36),ho());L.position.set(at,2.3,T.z+.13),i.add(L)}_e(i,"collect",at,2.62,T.z+.135,.6,.2,0);const Pt=.2;W(i,"metal",c,Pt,1.12,T.z-.1,.72,.44,.5,{cast:!0}),W(i,"joinery",u,Pt,1.1,T.z+.16,.6,.24,.04);for(const L of[-.18,.1])W(i,"metal",c,Pt+L,.96,T.z+.12,.05,.12,.05);W(i,"joinery",l,Pt+.55,.99,T.z-.15,.28,.18,.28);const ot=1.55;W(i,"joinery",h,ot,.96,T.z,1.2,.1,.7,{cast:!0}),W(i,"metal",c,ot,1.46,T.z,1.2,.05,.7,{cast:!0});for(const L of[-1,1])W(i,"metal",c,ot+L*.575,1.21,T.z,.05,.45,.66);const C=new st(new Ot(1.1,.42,.62),qd("glass",13623528));C.position.set(ot,1.215,T.z),i.add(C),W(i,"joinery",l,ot,1.19,T.z,1.06,.02,.56);for(const[L,O,Y]of[[-.35,-.12,Ke],[0,.1,13210159],[.33,-.08,l]])W(i,"trim",Y,ot+L,1.06+.035,T.z+O,.16,.07,.16,{chamfer:0}),W(i,"trim",Y,ot+L*.7,1.23,T.z-O,.14,.06,.14,{chamfer:0});_e(i,"mccafe",Pt+1.15,.62,T.z+T.d/2+.05,.9,.26,0),W(i,"trim",Ke,-3.6,2.44,T.z-.55,5.8,.58,.06,{cast:!0}),_e(i,"barn",-5.6,2.44,T.z-.51,1.6,.4,0),_e(i,"order",-1.8,2.44,T.z-.51,1.5,.36,0);const S={x:o-.35,z0:.9,z1:2.5},B=(S.z0+S.z1)/2;W(i,"metal",c,S.x,.45,B,.7,.9,S.z1-S.z0,{cast:!0}),i.solid(S.x,0,B,.7,.9,S.z1-S.z0),Qn(i,S.x,B,0,.7,S.z1-S.z0),W(i,"metal",c,S.x+.1,1.24,B-.25,.3,.68,.86,{cast:!0}),W(i,"joinery",u,S.x-.075,1.34,B-.25,.02,.4,.74);for(let L=0;L<3;L++){const O=B-.51+L*.26;W(i,"trim",[10236968,8030778,13210159][L],S.x-.085,1.34,O,.01,.3,.19,{chamfer:0}),W(i,"metal",c,S.x-.1,1.02,O,.05,.14,.05,{cast:!0}),W(i,"metal",c,S.x-.15,1.11,O,.1,.03,.03)}W(i,"metal",c,S.x-.11,.925,B-.25,.24,.02,.8),W(i,"joinery",u,S.x-.11,.935,B-.25,.18,.01,.74);for(const[L,O]of[[B+.42,6],[B+.6,5]])for(let Y=0;Y<O;Y++)W(i,"joinery",13620957,S.x,.95+Y*.055,L,.115,.055,.115,{cast:Y===O-1,chamfer:0});_e(i,"drinks",o-.02,1.85,B,.9,.26,-Math.PI/2),B1(i,o-.42,3.3,-Math.PI/2);const J=-9.55;for(const L of[4.3,5.45]){W(i,"metal",c,J,.05,L,.44,.1,.38),W(i,"trim",Ke,J,.62,L,.38,1.04,.3,{cast:!0}),W(i,"metal",c,J,1.16,L,.42,.05,.34);const O=W(i,"joinery",u,J+.13,1.42,L,.035,.56,.44,{cast:!0});O.rotation.z=.26;const Y=new st(new Ot(.02,.48,.37),ho());Y.position.set(J+.165,1.42,L),Y.rotation.z=.26,i.add(Y),W(i,"metal",c,J+.1,1.08,L+.22,.11,.13,.09),i.solid(J,0,L,.44,1.7,.42),Qn(i,J,L,0,.48,.44)}_e(i,"order",-o+.02,1.62,4.88,.6,.2,Math.PI/2);const tt=a-.03-.03,Lt=[{x:-6.9,z:3.8},{x:-4.3,z:3.8},{x:-6.9,z:5.55},{x:-4.3,z:5.55},{x:2.9,z:3.8},{x:5.7,z:3.8},{x:8.3,z:3.8}];Lt.forEach((L,O)=>{const Y=O+1;Hd(i,L.x,L.z,0,.8,.8),Kc(i,L.x-.72,L.z,0,Math.PI/2),Kc(i,L.x+.72,L.z,0,-Math.PI/2),W(i,"metal",c,L.x,.86,L.z,.035,.24,.035),fu(i,L.x+.22,L.z+.16,.74),f(`table_${Y}`,L.x,L.z,null,null,{noClamp:!0}),f(`seat_${Y}`,L.x+.72,L.z,null,null,{noClamp:!0}),i.interact(`table_serve_${Y}`,"set the tray down",L.x,.85,L.z,"service",{op:"deliver",table:Y,when:"carrying_for"},1.7)});const ht=tt,Mt=ht-1.7,$t=2.6,ut=9.4,Rt=2,Bt=(ut-$t)/Rt;for(let L=0;L<Rt;L++){const O=$t+(L+.5)*Bt;for(const[Y,ct,wt]of[[Mt+.265,Mt+.06,.95],[ht-.265,ht-.06,.55]])W(i,"joinery",l,O,.23,Y,Bt-.1,.46,.53,{cast:!0}),W(i,"joinery",u,O,.075,Y,Bt-.2,.15,.43),W(i,"joinery",l,O,wt/2,ct,Bt-.1,wt,.12,{cast:!0});W(i,"joinery",l,O,.725,(Mt+ht)/2,Bt-.2,.03,.7,{cast:!0}),W(i,"joinery",h,O,.36,(Mt+ht)/2,.09,.71,.09),fu(i,O+.28,(Mt+ht)/2,.74),i.solid(O,0,(Mt+ht)/2,Bt,.95,ht-Mt)}for(const L of[0,Bt,Bt*Rt]){const O=$t+L;W(i,"joinery",l,O,.675,(Mt+ht)/2,.07,1.35,ht-Mt-.06,{cast:!0}),W(i,"trim",Ke,O,1.32,(Mt+ht)/2,.086,.06,ht-Mt-.06)}Qn(i,($t+ut)/2,(Mt+ht)/2,0,ut-$t,ht-Mt,{margin:.028});const Ht=tt-.35;W(i,"joinery",l,-6.3,1.03,Ht,6.2,.05,.64,{cast:!0});for(const L of[-2.6,0,2.6])W(i,"metal",c,-6.3+L,.5,Ht+.2,.06,1,.06);i.solid(-6.3,0,Ht,6.2,1.05,.64);for(const L of[-8.5,-7.2,-5.9,-4.6])W(i,"joinery",l,L,.72,Ht-.75,.36,.04,.36,{cast:!0}),W(i,"metal",c,L,.36,Ht-.75,.07,.68,.07),W(i,"metal",c,L,.02,Ht-.75,.34,.04,.34),i.solid(L,0,Ht-.75,.4,.75,.4);const bt=16772056;i.light(-6.5,ur-.15,4.2,bt,10,13),i.light(-2,ur-.15,4.6,bt,10,13),i.light(2.5,ur-.15,4.2,bt,10,13),i.light(7,ur-.15,4.4,bt,10,13),i.light(-3.7,Fn-.15,1,bt,10,12),i.light(-7.5,Fn-.15,-4.8,bt,10,12),i.light(-.5,Fn-.15,-5,bt,10,12),i.light(-3.6,Fn-.15,-2.6,bt,12,12),i.light(4.9,Fn-.3,-5.15,bt,8,9),i.light(8.8,Fn-.15,-2.6,bt,9,10),i.light(5,Fn-.15,-1.6,bt,8,10);for(const[L,O,Y,ct,wt]of[[-1.5,1.9,-3.2,2.4,15],[-3,2.1,4.2,3.4,16],[5.5,2.1,4,2.8,13],[-7.6,2,4.9,2.2,11],[-4,1.9,1,1.6,12]]){const Jt=i.light(L,O,Y,15260876,ct,wt);Jt.decay=1}lo(i,-9.4,-6.6,3.1,.2,Fn,4,3),lo(i,3.6,-4.3,9.6,-.2,Fn,2,2),lo(i,-9,2.4,9.4,6.4,ur,4,2),f("spawn",-1,12.6,null,null,{noClamp:!0}),f("station_pod",yt.cx,yt.z1+cn,Math.PI,cn),f("station_fries",x,p+cn,Math.PI,cn),f("station_grill",D,p+cn,Math.PI,cn),f("station_counter",it,T.z-T.d/2-cn,0,cn),f("station_runner",at,T.z-T.d/2-cn,0,cn),f("station_drivethru",pt-.375-cn,-2.7,Math.PI/2,cn),f("restock",4.45,-5.65,Math.PI,cn),f("gate",(_t+Et)/2,0,null,null,{noClamp:!0}),f("entry_out",-1,8.3,null,null,{noClamp:!0}),f("entry",-1,6),f("aisle",-2,2.9),f("queue_1",-8,2.8),f("queue_2",-7.25,2.95),f("queue_3",-6.5,3),f("queue_4",-5.9,3.15),f("collect_wait",-5.2,3.1),f("collect_pickup",-5.2,2.65),f("kiosk_gate",-8.9,2.9),f("kiosk_1",-8.78,4.3),f("kiosk_2",-8.85,5.15),i.interact("station_pod","work the pod",yt.cx,.95,yt.z1,"station",{station:"pod",zone:{minZ:yt.z1}},2),i.interact("pod_toaster","toast a bun",kt,1.25,yt.cz+.21,"pod",{op:"token",token:"bun",podOnly:!0},1.8),Q.forEach(([L],O)=>{const Y=Kt-.255+O*.17;i.interact("pod_gun_"+L,L==="bbq"?"dose BBQ":"dose "+L,Y,1.25,yt.cz-.25,"pod",{op:"token",token:L,podOnly:!0},1.7)}),dt.forEach(([L],O)=>{const Y=F+.1+O*.19;i.interact("pod_bin_"+L,"add "+L,Y,.98,yt.cz-.08,"pod",{op:"token",token:L,podOnly:!0},1.7)}),i.interact("pod_uhc","pull from the cabinet",nt,1.28,yt.cz+.345,"pod",{op:"uhc",podOnly:!0},1.6),i.interact("pod_wrap","wrap the order",Ns.x,.95,Ns.z,"pod",{op:"wrap",podOnly:!0},1.4),i.interact("pod_chute","send it down",ge.x0+.05,1.05,ge.z0,"pod",{op:"send",podOnly:!0},1.4),pu(i,.42,.94,0,6);for(let L=0;L<3;L++)W(i,"joinery",14272934,1.08+L*.13,.975,-.04+L%2*.08,.11,.15,.065,{cast:L===0,chamfer:0}),W(i,"joinery",14272934,1.08+L*.13,1.06,-.04+L%2*.08,.115,.022,.03,{chamfer:0});for(let L=0;L<3;L++)W(i,"joinery",14272934,1.62+L*.13,.975,-.02+L%2*.07,.11,.15,.065,{cast:!1,chamfer:0}),W(i,"trim",Ke,1.62+L*.13,.955,-.02+L%2*.07,.112,.03,.067,{chamfer:0});i.interact("counter_tray","take a tray for table service",.42,1.02,0,"service",{op:"tray",when:"tray_ready"},1.6),i.interact("counter_bag","bag the next takeaway",1.18,1.02,0,"service",{op:"bag",when:"bag_ready"},1.6),i.interact("dt_bag","bag the drive-thru order",1.68,1.02,0,"service",{op:"dt_bag",when:"dt_bag_ready"},1.6),i.interact("dlv_bag","bag the delivery",1.18,1.02,-.28,"service",{op:"dlv_bag",when:"dlv_bag_ready"},1.6),i.interact("station_counter","work the counter",it,.95,T.z-T.d/2,"station",{station:"counter",zone:{maxZ:T.z-T.d/2}},1.8),i.interact("till_order","take their order",it,1.3,T.z+.95,"counter",{op:"take_order",when:"queue_head"},2.4),i.interact("till_payment","take payment",it,1,T.z+.3,"counter",{op:"take_payment",when:"payment_due"},1.6);const ee=[];for(const L of d){const O=L.noClamp?{x:L.x,z:L.z,moved:0}:H1(i.colliders,L.x,L.z);i.spot(L.name,O.x,0,O.z),O.moved>.005&&ee.push({name:L.name,from:[L.x,L.z],to:[+O.x.toFixed(3),+O.z.toFixed(3)],moved:+O.moved.toFixed(3)})}const qt=V1(i.colliders,d.filter(L=>!L.noClamp).map(L=>({id:L.name,x:L.x,z:L.z,facing:L.facing,standoff:L.standoff}))),re={rule:`spot = fixture face + normal * standoff; clear floor ${$c} x ${Zc}; hard floor ${vi}`,checked:d.length,failures:qt.failures,clamped:ee,tightest:qt.tightest,ok:qt.failures.length===0&&ee.length===0};re.ok||console.error("Fitout: CLEARANCE FAILURES — a published point is unreachable",re.failures,ee);const k=[{where:"pod face to the pass",m:+(-vt/2-yt.z1).toFixed(2)},{where:"pod back to the grill front",m:+(yt.z0-p).toFixed(2)},{where:"pod east end to the pack-out",m:+(z.cx-z.w/2-yt.x1).toFixed(2)},{where:"crew aisle, pass to counter",m:+(T.z-T.d/2-vt/2).toFixed(2)},{where:"staff gate",m:+(Et-_t).toFixed(2)},{where:"pass flap by the landing",m:+(Z-At).toFixed(2)},{where:"counter face to dining tables",m:+(Lt[0].z-.4-(T.z+T.d/2)).toFixed(2)},{where:"restock straight line, pod spot to dry store door",m:+Math.hypot(4.15-yt.cx,-4.55-(yt.z1+cn)).toFixed(2)},{where:"front door opening",m:1.8}];return{workplace:"burger_barn",clearance:re,walkways:k,spots:i.spots,materials:F1.map(L=>typeof L[1]=="number"?`${L[0]}@${L[1].toString(16)}`:`${L[0]}:${L[1]}`),labels:jd()!==null}}const Cn={width:20,depth:14,height:4.2},Yt=Cn.width/2,Vt=Cn.depth/2,Kn=Cn.height,$o=Ut.wallThick,Li=Yt-$o/2,As=Vt-$o/2,bn=2,Fa=4.9,uo=.15,mu=6.4,ka=3.2,fo=2.8,q1=.45,X1=2.7,Te=-1,Zi=1.8,gu=2.6,Ba=.9,Ha=.85,Ga=2.05,_u=-4.2,xu=-1,Va=-5.4,Y1=1.8,Pn=11026479,Os=13224902,vu=new Set;function Kd(i,t,e={}){if(e.material)return e.material;try{return Dl(i,t,null,e.recipe||{})}catch(n){return vu.has(i)||(vu.add(i),console.error(`Shell: surface '${i}' unavailable, flat colour instead`,n)),Re(t,e)}}function It(i,t,e,n,s,r,o,a,c,l={}){var d;const h=Kd(t,e,l),u=new st(new Ot(Math.max(o,.001),Math.max(a,.001),Math.max(c,.001)),h);return u.castShadow=l.cast??((d=h.userData)==null?void 0:d.cast)??!1,u.receiveShadow=!0,u.position.set(n,s,r),l.rotY&&(u.rotation.y=l.rotY),i.add(u),u}const ei=()=>Re(Zt.concrete);function xn(i,t,e,n,s,r=0){const o=(t+n)/2,a=(e+s)/2,c=Math.abs(n-t),l=Math.abs(s-e);It(i,"(concrete)",0,o,r-.06,a,c,.12,l,{material:ei(),cast:!1}),i.solid(o,r-1.2,a,c,1.2,l,!0)}function yu(i,t,e,n,s,r,o){const a=new Tl(n,s,28,2,r,Math.PI/2);a.rotateX(-Math.PI/2);const c=new st(a,ei());return c.receiveShadow=!0,c.position.set(t,o,e),i.add(c),c}function Tn(i,t,e,n,s,r=0,o=.15){const a=(t+n)/2,c=(e+s)/2;It(i,"(concrete)",0,a,r+o/2,c,Math.max(Math.abs(n-t),.15),o,Math.max(Math.abs(s-e),.15),{material:ei()})}function po(i,t,e,n,s,r,o=0,a=.15){for(let l=0;l<8;l++){const h=s+(r-s)*(l/8),u=s+(r-s)*((l+1)/8),d=t+Math.cos(h)*n,f=e+Math.sin(h)*n,m=t+Math.cos(u)*n,_=e+Math.sin(u)*n,p=Math.hypot(m-d,_-f)+.04;It(i,"(concrete)",0,(d+m)/2,o+a/2,(f+_)/2,p,a,.16,{material:ei(),rotY:Math.atan2(-(_-f),m-d)})}}function Ge(i,t,e,n,s,r=0){const o=(t+n)/2,a=(e+s)/2;It(i,"trim",gt.trim,o,r+.008,a,Math.max(Math.abs(n-t),.1),.012,Math.max(Math.abs(s-e),.1))}function Po(i,t,e,n=0,s=1){const r=new st(new Fe(.07,.07,s,8),Kd("metal",gt.metalDull));r.castShadow=!0,r.position.set(t,n+s/2,e),i.add(r)}function mo(i,t,e,n,s,r,o=0){const a=n-t,c=s-e,l=Math.hypot(a,c);if(l<.5)return;const h=a/l,u=c/l,d=-u,f=h,m=Math.atan2(-u,h),_=$o/2+.006;for(let p=1.2;p<r-.2;p+=1.2)It(i,"joinery",gt.shadowDark,t+h*(l/2)+d*_,o+p,e+u*(l/2)+f*_,l,.02,.012,{rotY:m});for(let p=1.2;p<l-.3;p+=1.2)It(i,"joinery",gt.shadowDark,t+h*p+d*_,o+r/2,e+u*p+f*_,.02,r,.012,{rotY:m})}const Nl={lane:{width:3.5,surface:0,legs:[{name:"entry",from:{x:-15,z:15.9},to:{x:-15,z:-6.5},forward:{x:0,z:-1}},{name:"rear",from:{x:-9,z:-12.5},to:{x:6.15,z:-12.5},forward:{x:1,z:0}},{name:"service",from:{x:12.15,z:-6.5},to:{x:12.15,z:29.5},forward:{x:0,z:1}}]}},ue=Nl.lane.surface,Rs=Nl.lane.width/2;function j1(i,t){xn(i,-Yt,Vt,Yt,10.5),xn(i,-11,10.5,10.4,27.5),xn(i,-17.75,15.9,-11,29.5),xn(i,9.65,27.5,14.65,29.5),xn(i,-13.25,-6.5,-10,Vt),xn(i,-12.9,-Vt,-10,-6.5),xn(i,-7,-10.75,1.5,-8.6),xn(i,-6.9,-10,-3.9,-Vt),xn(i,2,-10.2,5,-8.2),xn(i,-15-Rs,-6.5,-15+Rs,15.9,ue),xn(i,-9,-12.5-Rs,6.15,-12.5+Rs,ue),xn(i,12.15-Rs,-6.5,12.15+Rs,29.5,ue),yu(i,-9,-6.5,4.25,7.75,Math.PI/2,ue),yu(i,6.15,-6.5,4.25,7.75,0,ue),Tn(i,-16.75,-6.5,-16.75,15.9,ue),Tn(i,-13.25,-6.5,-13.25,15.9,ue),Tn(i,-9,-14.25,6.15,-14.25,ue),Tn(i,-9,-10.75,.5,-10.75,ue),Tn(i,13.9,-6.5,13.9,29.5,ue),Tn(i,10.4,-6.5,10.4,-5.6,ue),Tn(i,10.4,.6,10.4,29.5,ue),Tn(i,10.4,-5.2,10.4,.2,ue,.1),po(i,-9,-6.5,4.25,Math.PI,Math.PI*1.5,ue),po(i,-9,-6.5,7.75,Math.PI,Math.PI*1.5,ue),po(i,6.15,-6.5,4.25,Math.PI*1.5,Math.PI*2,ue),po(i,6.15,-6.5,7.75,Math.PI*1.5,Math.PI*2,ue);for(const r of[-16.6,-13.4])Ge(i,r,-6.5,r,15,ue);for(const r of[-14.1,-10.9])Ge(i,-9,r,.4,r,ue);Ge(i,13.75,-6.5,13.75,27.5,ue),Ge(i,.5,-14.25,.5,-10.75,ue);for(let r=1;r<6.4;r+=.8)Ge(i,r,-14.25,r+.4,-14.25,ue);for(const[r,o]of[[-11.2,-8.6],[-10.2,-9.4],[8.6,-8.8],[9.4,-7.8]])Po(i,r,o);for(let r=0;r<=2;r++)Ge(i,-11+r*2.6,10.5,-11+r*2.6,15.9);for(let r=0;r<=3;r++)Ge(i,1.4+r*2.6,10.5,1.4+r*2.6,15.9);for(let r=0;r<=8;r++)Ge(i,-11+r*2.6,22.1,-11+r*2.6,27.5);for(let r=0;r<2;r++)It(i,"(concrete)",0,-11+(r+.5)*2.6,.06,11.4,1.65,.12,.18,{material:ei()});for(let r=0;r<3;r++)It(i,"(concrete)",0,1.4+(r+.5)*2.6,.06,11.4,1.65,.12,.18,{material:ei()});for(let r=0;r<8;r++)It(i,"(concrete)",0,-11+(r+.5)*2.6,.06,26.6,1.65,.12,.18,{material:ei()});for(const r of[Te-2.4,Te,Te+2.4])Ge(i,r,10.5,r,15.9);for(let r=11;r<15.9;r+=.7)Ge(i,Te-2.4,r,Te,r+.24);Po(i,Te-1.2,13.2,0,1.3),Ge(i,Te,13.2,Te+2.4,13.44);for(let r=11;r<15.6;r+=.8)Ge(i,-5.6,r,-3.6,r+.3);Tn(i,-Yt,10.5,Yt,10.5),Tn(i,-11,10.5,-11,27.5),Tn(i,-11,27.5,9.8,27.5);for(let r=16.1;r<22.1;r+=.8)Ge(i,-5.2,r,-3.2,r+.3);Ge(i,-11.25,15.9,-11.25,22.1);for(let r=10.6;r<13.9;r+=.8)Ge(i,r,18,r+.3,20,ue);for(let r=-9.2;r<=9.2;r+=1.5)r>Te-1.7&&r<Te+1.7||Po(i,r,Vt+.6);It(i,"metal",gt.metalDull,Te,3.07,Vt+1.5,6,.14,3,{cast:!0});for(const r of[-2.7,2.7])It(i,"metal",gt.metalDull,Te+r,1.5,Vt+2.8,.12,3,.12,{cast:!0});for(const r of[3.4,6.6]){Hd(i,r,9.3,0,.9,.9);for(const[o,a,c]of[[-.78,0,Math.PI/2],[.78,0,-Math.PI/2],[0,-.78,0],[0,.78,Math.PI]])Kc(i,r+o,9.3+a,0,c)}Ge(i,-9.8,8.2,-9.8,10.4),Ge(i,-8.6,8.2,-8.6,10.4),Ge(i,-7.4,8.2,-7.4,10.4);for(const r of[-9.2,-8])It(i,"metal",gt.metalDull,r-.35,.38,10.1,.06,.76,.06,{cast:!0}),It(i,"metal",gt.metalDull,r+.35,.38,10.1,.06,.76,.06,{cast:!0}),It(i,"metal",gt.metalDull,r,.74,10.1,.76,.06,.06,{cast:!0});It(i,"metal",gt.metalDull,-6,.55,-10.1,.1,1.1,.1,{cast:!0}),It(i,"trim",Pn,-6,1.6,-10.1,.9,1.4,.1,{cast:!0,rotY:-.6});const e=.209;It(i,"(concrete)",0,-1.5,.12,-10.15,2.1,.25,.6,{material:ei(),rotY:e}),It(i,"trim",Pn,-1.5,1.7,-10.15,1.96,1.66,.16,{cast:!0,rotY:e}),It(i,"trim",gt.trim,-1.5,1.7,-10.22,1.8,1.5,.06,{rotY:e});const n=(r,o,a,c,l,h,u=0)=>{It(i,r,o,-1.5+a*Math.cos(e),c,-10.26-u-a*Math.sin(e),l,h,.02,{rotY:e})};n("trim",Pn,0,2.28,1.64,.22);for(let r=0;r<5;r++)for(const o of[-.42,.44])n("joinery",gt.shadowDark,o,2.02-r*.14,.68,.035);for(const r of[-.55,0,.55])n("trim",Pn,r,1.18,.4,.3),n("joinery",gt.joineryLight,r,1.12,.28,.12,.01);It(i,"metal",gt.metalDull,.5,.9,-10.4,.25,1.8,.25,{cast:!0}),It(i,"joinery",gt.shadowDark,.5,1.35,-10.54,.2,.2,.04),It(i,"joinery",gt.shadowDark,.5,1.62,-10.54,.55,.35,.04),It(i,"metal",gt.metalDull,-1,2.92,-12,3,.14,3.2,{cast:!0});for(const r of[-2.3,.3])It(i,"metal",gt.metalDull,r,1.4,-10.45,.12,2.8,.12,{cast:!0});for(const r of[-17.05,-12.95])It(i,"metal",gt.metalDull,r,ue+1.3,14,.09,2.6,.09,{cast:!0});It(i,"trim",Pn,-15,ue+2.5,14,4.3,.2,.12,{cast:!0}),It(i,"wall",Os,1.7,1,-9.2,.14,2,2,{cast:!0}),i.solid(1.7,0,-9.2,.14,2,2);for(const r of[-9.6,-8.7])It(i,"metal",gt.metalDull,3.5,.45,r,1.2,.9,.7,{cast:!0}),i.solid(3.5,0,r,1.2,.9,.7);const s={x0:-12.8,x1:-10.2,z0:-Vt,z1:-5};for(const[r,o,a,c]of[[s.x0,s.z0,s.x1,s.z0+.2],[s.x0,s.z0,s.x0+.2,s.z1],[s.x1-.2,s.z0,s.x1,s.z1]]){const l=(r+a)/2,h=(o+c)/2;It(i,"wall",Os,l,.9,h,a-r,1.8,c-o,{cast:!0}),i.solid(l,0,h,a-r,1.8,c-o)}It(i,"metal",gt.metalDull,(s.x0+s.x1)/2,1.2,s.z1,2.4,2.4,.08,{cast:!0}),It(i,"metal",gt.metalDull,(s.x0+s.x1)/2,1.94,(s.z0+s.z1)/2,s.x1-s.x0+.2,.1,s.z1-s.z0+.1,{cast:!0});for(const[r,o,a]of[[-12.1,-6.2,1.2],[-10.85,-6.2,1.2],[-12.1,-5.55,1.2],[-10.9,-5.55,.6]])It(i,"joinery",gt.joineryDark,r,.55,o,a,1.1,.55,{cast:!0}),It(i,"joinery",gt.shadowDark,r,1.13,o,a+.04,.06,.59),i.solid(r,0,o,a,1.16,.55);xn(i,-13,-4.8,-11.5,-3.3);for(const[r,o,a,c]of[[-13,-4.8,-11.5,-4.68],[-13,-3.42,-11.5,-3.3],[-13,-4.8,-12.88,-3.3],[-11.62,-4.8,-11.5,-3.3]])Tn(i,r,o,a,c,0,.2);for(const[r,o]of[[-12.55,-4.1],[-11.95,-4.1]])It(i,"metal",gt.metalDull,r,.42,o,.5,.84,.5,{cast:!0});if(It(i,"(concrete)",0,-10.6,.1,28.3,1.1,.2,1.1,{material:ei()}),It(i,"trim",Pn,-10.6,3,28.3,.55,6,.55,{cast:!0}),i.solid(-10.6,0,28.3,.7,6,.7),t){const r=t.clone();r.scale.set(.62,1.9,1),r.position.set(-10.6,4.3,28.62),i.add(r);const o=t.clone();o.scale.set(.62,1.9,1),o.position.set(-10.6,4.3,27.98),o.rotation.y=Math.PI,i.add(o)}}function K1(i,t={}){const e=new l1;h1(e,0,0,Cn.width,Cn.depth,0,gt.tileFloor,{surface:"vinyl"});const n={height:Kn,colour:Os,surface:"wall",skirting:!1,cornice:!1,autoServices:!1,inner:-1},s=[],r=(_,p)=>{const g=p-_,y=Math.max(1,Math.round(g/1.565)),x=g/y;for(let M=0;M<y;M++)s.push({at:_+(M+.5)*x+Yt,width:Math.min(1.375,x-.19),kind:"window",sill:q1,head:X1})};r(-Li,Te-Zi/2-.15),r(Te+Zi/2+.15,9.6),s.push({at:Te+Yt,width:Zi,kind:"door",head:gu,door:{pair:!0,style:"glazed",auto:!0,startsShut:!0,swing:1,label:"entrance"}}),ns(e,-Yt,Vt,Yt,Vt,{...n,openings:s,name:"front"}),ns(e,Yt,Vt,Yt,-Vt+bn,{...n,openings:[{at:Vt-4,width:1.2,kind:"window",sill:1.8,head:2.7},{at:Vt-xu,width:Ba,kind:"window",sill:Ha,head:Ga},{at:Vt-_u,width:Ba,kind:"window",sill:Ha,head:Ga}],name:"east"}),ns(e,Yt,-Vt+bn,Yt-bn,-Vt,{...n,name:"splay"}),ns(e,Yt-bn,-Vt,-Yt,-Vt,{...n,openings:[{at:Vt-Va,width:Y1,kind:"door",head:gu,door:{style:"panel",pair:!1,startsShut:!1,swing:1,colour:gt.metalDull,label:"goods door"}}],name:"rear"}),ns(e,-Yt,-Vt,-Yt,Vt,{...n,openings:[{at:Vt-.5,width:Ba,kind:"window",sill:Ha,head:Ga}],name:"west"});const o=1.4;_1(e,0,(o+As)/2,Li*2,As-o,ka),cu(e,0,(o-5)/2,Li*2,o+5,fo),cu(e,(-Li+7.9)/2,(-As-5)/2,Li+7.9,As-5,fo),It(e,"wall",Os,0,(fo+ka+.12)/2,o,Li*2,ka-fo+.16,.12,{cast:!0}),It(e,"wall",Os,0,Kn+.1,0,Cn.width,.2,Cn.depth,{cast:!0});const a=[[-Yt,Vt,Yt,Vt],[Yt,Vt,Yt,-Vt+bn],[Yt,-Vt+bn,Yt-bn,-Vt],[Yt-bn,-Vt,-Yt,-Vt],[-Yt,-Vt,-Yt,Vt]];for(const[_,p,g,y]of a){const x=Math.hypot(g-_,y-p)+.36,M=Math.atan2(-(y-p),g-_),R=(_+g)/2,E=(p+y)/2;It(e,"wall",Os,R,(Kn+Fa-uo)/2,E,x,Fa-uo-Kn,.35,{rotY:M,cast:!0}),It(e,"trim",gt.trim,R,Fa-uo/2,E,x+.06,uo,.47,{rotY:M,cast:!0})}const c=Vt+$o/2;It(e,"trim",Pn,0,3.475,c+.05,Cn.width,.85,.1,{cast:!0});const l=3.2,h=Te-1.2,u=h+l;for(const[_,p]of[[(-Yt+h)/2,h+Yt],[(u+Yt)/2,Yt-u]])It(e,"metal",gt.metalDull,_,2.93,c+.6,p,.16,1.2,{cast:!0}),It(e,"trim",Pn,_,2.79,c+1.18,p,.14,.06);const d=(h+u)/2;It(e,"trim",Pn,d,(2.4+mu)/2,c+.2,l,mu-2.4,.4,{cast:!0});for(const[_,p]of[[(h+Te-Zi/2)/2,Te-Zi/2-h],[(Te+Zi/2+u)/2,u-Te-Zi/2]])It(e,"trim",Pn,_,1.2,c+.2,p,2.4,.4,{cast:!0});It(e,"joinery",gt.shadowDark,d,4.3,c+.41,l,3.4,.02);for(let _=0;_<18;_++)It(e,"joinery",gt.joineryLight,h+.0875+_*.175,4.3,c+.44,.15,3.4,.04,{cast:!0});let f=null;typeof document<"u"&&document.createElement&&(f=Gd(t.name||"BURGER BARN",{width:7.2,height:.62,bg:"rgba(0,0,0,0)",fg:t.signFg??"#f6efe0",font:"bold 84px Georgia, serif"}),f.position.set(4.9,3.46,c+.12),e.add(f));for(const _ of[_u,xu]){It(e,"metal",gt.metalDull,Yt+.53,ue+2.66,_,.9,.12,1.6,{cast:!0});for(const p of[-.75,.75])Po(e,Yt+.6,_+p,ue)}It(e,"metal",gt.metalDull,-Yt-.53,ue+2.66,-.5,.9,.12,1.6,{cast:!0}),It(e,"trim",Pn,-Yt-.1,2.35,-.5,.1,.45,1.7,{cast:!0}),It(e,"(concrete)",0,-12.85,.12,-1.9,1.3,.25,.45,{material:ei()}),It(e,"trim",Pn,-12.85,1.55,-1.9,1.24,1.3,.14,{cast:!0}),It(e,"trim",gt.trim,-12.85,1.55,-1.97,1.1,1.16,.05);for(let _=0;_<4;_++)It(e,"joinery",gt.shadowDark,-12.85,1.86-_*.17,-2,.88,.032,.02);It(e,"metal",gt.metalDull,-12.85,.85,-.95,.2,1.7,.2,{cast:!0}),It(e,"joinery",gt.shadowDark,-12.85,1.3,-1.06,.16,.16,.04),It(e,"metal",gt.metalDull,6.2,2.3,-Vt-.4,.8,4.2,.6,{cast:!0}),It(e,"metal",gt.metalDull,6.2,4.55,-Vt-.4,1,.35,.8,{cast:!0});for(const _ of[-1,.5]){It(e,"metal",gt.metalDull,_,2.6,-Vt-.06,.6,.6,.06);for(let p=0;p<5;p++)It(e,"joinery",gt.shadowDark,_,2.36+p*.12,-Vt-.1,.54,.05,.04)}It(e,"metal",gt.metalDull,Va,2.86,-Vt-1,3,.14,2,{cast:!0});for(const _ of[-1.3,1.3])It(e,"metal",gt.metalDull,Va+_,1.43,-Vt-1.85,.12,2.86,.12,{cast:!0});mo(e,Yt,Vt,Yt,-Vt+bn,Kn),mo(e,Yt,-Vt+bn,Yt-bn,-Vt,Kn),mo(e,Yt-bn,-Vt,-Yt,-Vt,Kn),mo(e,-Yt,-Vt,-Yt,Vt,Kn),j1(e,f);const m=W1(e,{width:Cn.width,depth:Cn.depth});return{group:Pd(e.group),colliders:e.colliders,doorSpecs:e.doors,interactables:e.interactables,spots:e.spots,lights:e.lights,report:m,width:Cn.width,depth:Cn.depth,height:Kn,door:{x:Te,z:Vt+1.6},doors:[{x:Te,z:Vt+1.6}],interiorBounds:{minX:-Li,maxX:Li,minZ:-As,maxZ:As,maxY:Kn}}}const ie=6,ce=34.5,Pe=-34,Le=-46,Ie=44,$e={front:ce,back:Pe,west:Le,east:Ie},ii={front:78,back:-78,west:-90,east:88},os=[],$d=[],zs=ie/2+1.2;function $1(i){const t=i.root,e=i.rng.child("town"),n=i.colliders,s=()=>Re(Zt.concrete),r=(M,R,E,b)=>{const P=(M+E)/2,D=(R+b)/2,v=new st(new Ot(Math.abs(E-M),.1,Math.abs(b-R)),s());v.position.set(P,-.045,D),v.receiveShadow=!0,t.add(v)},o=(M,R,E,b)=>{const P=Math.abs(E-M)>Math.abs(b-R)?"x":"z",D=Math.abs(P==="x"?E-M:b-R);for(let v=0;v<D;v+=4){const w=v/D,U=new st(new Ot(P==="x"?1.6:.12,.02,P==="x"?.12:1.6),Re(gt.trim));U.position.set(M+(E-M)*w,.012,R+(b-R)*w),t.add(U)}};r(Le-ie/2,ce-ie/2,Ie+ie/2,ce+ie/2),r(Le-ie/2,Pe-ie/2,Ie+ie/2,Pe+ie/2),r(Le-ie/2,Pe-ie/2,Le+ie/2,ce+ie/2),r(Ie-ie/2,Pe-ie/2,Ie+ie/2,ce+ie/2),o(Le+4,ce,Ie-4,ce),o(Le+4,Pe,Ie-4,Pe),o(Le,Pe+4,Le,ce-4),o(Ie,Pe+4,Ie,ce-4),r(-17.75,29.5,-11,ce-ie/2),r(9.65,29.5,14.65,ce-ie/2);const{front:a,back:c,west:l,east:h}=ii;r(l-ie/2,a-ie/2,h+ie/2,a+ie/2),r(l-ie/2,c-ie/2,h+ie/2,c+ie/2),r(l-ie/2,c-ie/2,l+ie/2,a+ie/2),r(h-ie/2,c-ie/2,h+ie/2,a+ie/2),o(l+4,a,h-4,a),o(l+4,c,h-4,c),o(l,c+4,l,a-4),o(h,c+4,h,a-4);for(const M of[Le,Ie])r(M-3,ce+3,M+3,a-3),r(M-3,c+3,M+3,Pe-3),o(M,ce+5,M,a-5),o(M,c+5,M,Pe-5);for(const M of[ce,Pe])r(l+3,M-3,Le-3,M+3),r(Ie+3,M-3,h-3,M+3),o(l+5,M,Le-5,M),o(Ie+5,M,h-5,M);r(-10,-16,-1,-22.5),r(-8,-22.5,-3,Pe+ie/2),r(-23,-22.5,-19,ce-ie/2),r(-23,-16,-10,-22.5);const u=(M,R,E,b)=>{const P=new st(new Ot(Math.max(.12,Math.abs(E-M)),.02,Math.max(.12,Math.abs(b-R))),Re(gt.trim));P.position.set((M+E)/2,.012,(R+b)/2),t.add(P)};u(-9.4,-16.4,-9.4,-21.2),u(-6.4,-16.4,-6.4,-21.2),u(-1.6,-16.4,-1.6,-21.2),u(-9.4,-16.4,-1.6,-16.4);const d=Gd("DELIVERIES",{width:2.4,height:.55,bg:"#a8402f"});d.position.set(-5.5,2.15,-15.95),d.rotation.y=Math.PI,t.add(d);for(const M of[-6.5,-4.5]){const R=new st(new Ot(.12,2.1,.12),Re(Zt.metalDark));R.position.set(M,1.05,-15.95),R.castShadow=!0,t.add(R)}const f=(M,R,E,b)=>{const{group:P,size:D,door:v}=P1(e);P.position.set(R,0,E),P.rotation.y=b,t.add(P);const w=Math.abs(Math.sin(b))>.5,U=(w?D.d:D.w)/2+.1,N=(w?D.w:D.d)/2+.1;n.push({min:new I(R-U,0,E-N),max:new I(R+U,D.h+1.2,E+N),walkable:!1});const X=new er().setFromAxisAngle(new I(0,1,0),b),q=new I(0,0,D.d/2+1).applyQuaternion(X),G={x:R+q.x,z:E+q.z};$d.push({hinge:v,rotY:b,at:G});const j=new st(new Ot(1.1,.06,2.6),s()),z=new I(0,0,D.d/2+1.6).applyQuaternion(X);j.position.set(R+z.x,-.02,E+z.z),j.rotation.y=b,j.receiveShadow=!0,t.add(j),os.push({name:M,x:R,z:E,rotY:b,door:G})};f("1 Barn Road",-34,ce+8.5,Math.PI),f("2 Barn Road",-8,ce+8.5,Math.PI),f("3 Barn Road",18,ce+8.5,Math.PI),f("4 Barn Road",38,ce+8.5,Math.PI),f("1 Millet Street",Le-8.5,8,Math.PI/2),f("2 Millet Street",Le-8.5,-18,Math.PI/2),f("1 Sunset Avenue",Ie+8.5,4,-Math.PI/2),f("2 Sunset Avenue",Ie+8.5,-22,-Math.PI/2),f("5 Barn Road",-70,ce+8.5,Math.PI),f("6 Barn Road",64,ce+8.5,Math.PI),f("3 Millet Street",Le-8.5,54,Math.PI/2),f("4 Millet Street",Le-8.5,-52,Math.PI/2),f("3 Sunset Avenue",Ie+8.5,52,-Math.PI/2),f("4 Sunset Avenue",Ie+8.5,-54,-Math.PI/2),f("1 Kookaburra Drive",-24,c-8.5,0),f("2 Kookaburra Drive",20,c-8.5,0),f("3 Kookaburra Drive",-30,a+8.5,Math.PI),f("4 Kookaburra Drive",26,a+8.5,Math.PI);const m=(M,R,E,b)=>{const P=new st(new Ot(Math.max(1.2,Math.abs(E-M)),.07,Math.max(1.2,Math.abs(b-R))),s());P.position.set((M+E)/2,-.036,(R+b)/2),P.receiveShadow=!0,t.add(P)};for(const M of[{w:Le,e:Ie,n:Pe,f:ce},{w:l,e:h,n:c,f:a}])for(const R of[zs,-zs])m(M.w-Math.abs(R),M.f+R-.6,M.e+Math.abs(R),M.f+R+.6),m(M.w-Math.abs(R),M.n-R-.6,M.e+Math.abs(R),M.n-R+.6),m(M.w+R-.6,M.n-Math.abs(R),M.w+R+.6,M.f+Math.abs(R)),m(M.e-R-.6,M.n-Math.abs(R),M.e-R+.6,M.f+Math.abs(R));const _=Rd(),p=Cd(),g=Re(Zt.metalDark),y=(M,R,E)=>{const b=new jt,P=new st(new Ot(.16,4.6,.16),g);P.position.y=2.3,P.castShadow=!0,b.add(P);const D=new st(new Ot(.12,.12,1.3),g);D.position.set(0,4.5,.62),b.add(D);const v=new st(new Ot(.3,.14,.62),_);v.position.set(0,4.38,1.1),b.add(v);const w=new st(new wl(2.6,14),p);w.rotation.x=-Math.PI/2,w.position.set(0,.02,1.1),b.add(w),b.position.set(M,0,R),b.rotation.y=E,t.add(b)};for(const[M,R,E]of[[-1,ce+4.2,Math.PI],[-30,ce-4.2,0],[22,ce-4.2,0],[-1,Pe-4.2,0],[-30,Pe+4.2,Math.PI],[22,Pe+4.2,Math.PI],[Le+4.2,12,-Math.PI/2],[Le-4.2,-14,Math.PI/2],[Ie-4.2,8,Math.PI/2],[Ie+4.2,-18,-Math.PI/2],[-42,ce+4.2,Math.PI],[40,ce+4.2,Math.PI],[-42,Pe-4.2,0],[40,Pe-4.2,0],[-1,a-4.2,0],[-1,c+4.2,Math.PI],[l+4.2,-1,-Math.PI/2],[h-4.2,-1,Math.PI/2]])y(M,R,E);const x=[[-30,ce-8],[8,ce-8.5],[30,ce-8],[Le+8,20],[Le+8,-8],[Ie-8,16],[Ie-8,-14],[-24,Pe+8],[12,Pe+8],[-62,20],[-60,-24],[56,24],[58,-30],[-20,60],[30,58],[-16,-56],[26,-58]];for(const[M,R]of x){const E=Vd(e,e.range(.9,1.4));E.position.set(M,0,R),t.add(E)}}class Z1{constructor(t){this.game=t,this.rng=t.rng.child("world"),this.scene=t.renderer.scene,this.root=new jt,this.scene.add(this.root),this.colliders=[],this.interactables=[],this.buildings=[],this.enterable=[],this.currentBuilding=null,this.spots={},this.doors=new R1(t),this._grid=new Map,this.cellSize=5,this.weather={condition:"clear",wetness:0,temp:24,wind:.3},this._nightState=!1}generate(){this._ground(),this._shop(),this._dressing(),$1(this),os.forEach((t,e)=>{this.addInteractable({id:`house_${e}`,label:"hand over the delivery",pos:new I(t.door.x,1,t.door.z),action:"service",data:{op:"deliver",house:e,when:"at_house"},radius:2.2})}),this._rebuildSpatialHash(),this.game.bus.emit("world:generated",{world:this})}_ground(){const t=new st(new Xe(400,400,1,1),Re(Zt.grass));t.rotation.x=-Math.PI/2,t.position.y=-.06,t.receiveShadow=!0,this.root.add(t)}_shop(){var n;const t=K1(this.rng.child("shop"));this.report=t.report,t.group.position.set(0,0,0),this.root.add(t.group);for(const s of t.interactables||[])this.interactables.push(s);this.spots=t.spots||{};for(const s of t.colliders)this.colliders.push(s);(n=t.doorSpecs)!=null&&n.length&&(t.group.updateMatrixWorld(!0),this.doors.install(t.doorSpecs,t.group));const e={x:0,z:0,rotY:0,padY:0,shopId:"fastfood",built:t,lights:t.lights,interiorBounds:t.interiorBounds};this.buildings.push(e),this.enterable.push(e)}_dressing(){const t=this.rng.child("dressing"),e=[[-16.5,25],[-16.8,8],[-16.2,-2],[16.5,12],[16.8,-4],[15.8,24],[-6,32.5],[4,32.8],[12,32]];for(const[s,r]of e){const o=Vd(t,t.range(.9,1.3));o.position.set(s,0,r),this.root.add(o)}const n=[{x:-9.7,z:24.8,rotY:0},{x:-2,z:24.8,rotY:0},{x:5.8,z:24.8,rotY:0},{x:5.3,z:13.2,rotY:Math.PI}];for(const s of n){const r=Ul(t);r.position.set(s.x,0,s.z),r.rotation.y=s.rotY,this.root.add(r),this.colliders.push({min:new I(s.x-1,0,s.z-2.2),max:new I(s.x+1,1.5,s.z+2.2),walkable:!1})}}_rebuildSpatialHash(){this._grid.clear(),this.colliders.forEach((t,e)=>{const n=Math.floor(t.min.x/this.cellSize),s=Math.floor(t.max.x/this.cellSize),r=Math.floor(t.min.z/this.cellSize),o=Math.floor(t.max.z/this.cellSize);for(let a=n;a<=s;a++)for(let c=r;c<=o;c++){const l=a+","+c;this._grid.has(l)||this._grid.set(l,[]),this._grid.get(l).push(e)}})}query(t,e){const n=[],s=Math.floor((t.x-e)/this.cellSize),r=Math.floor((t.x+e)/this.cellSize),o=Math.floor((t.z-e)/this.cellSize),a=Math.floor((t.z+e)/this.cellSize),c=new Set;for(let l=s;l<=r;l++)for(let h=o;h<=a;h++){const u=this._grid.get(l+","+h);if(u)for(const d of u)c.has(d)||(c.add(d),n.push(this.colliders[d]))}return this.doors.collect(t,e,n),n}sightBlocked(t,e,{eye:n=1.15,backOff:s=.45}={}){const r=t.x,o=t.z,a=(t.y??0)+n;let c=e.x-r,l=e.z-o;const h=Math.hypot(c,l);if(h<.05)return!1;const u=Math.max(0,h-s);if(u<.05)return!1;c/=h,l/=h;const d=r+c*u/2,f=o+l*u/2;for(const m of this.query({x:d,z:f},u/2+1)){if(m.walkable||a<m.min.y||a>m.max.y||r>=m.min.x&&r<=m.max.x&&o>=m.min.z&&o<=m.max.z)continue;let _=0,p=u,g=!0;for(const[y,x,M,R]of[[r,c,m.min.x,m.max.x],[o,l,m.min.z,m.max.z]]){if(Math.abs(x)<1e-9){if(y<M||y>R){g=!1;break}continue}let E=(M-y)/x,b=(R-y)/x;if(E>b){const P=E;E=b,b=P}if(E>_&&(_=E),b<p&&(p=b),_>p){g=!1;break}}if(g)return!0}return!1}groundHeight(){return 0}addInteractable(t){return this.interactables.push(t),t}activeInteractables(){return this.interactables}get isIndoors(){return this.currentBuilding!==null}_updateOccupancy(){var n;const t=(n=this.game.player)==null?void 0:n.position;if(!t)return;let e=null;for(const s of this.enterable){const r=s.interiorBounds;if(r&&t.x>r.minX&&t.x<r.maxX&&t.z>r.minZ&&t.z<r.maxZ&&t.y>s.padY-1.5&&t.y<s.padY+r.maxY){e=s;break}}e!==this.currentBuilding&&(this.currentBuilding=e,this.game.bus.emit("world:occupancy",{building:e}))}update(t){var s;this._updateOccupancy(),this.doors.update(t);const e=this.game.clock;this.game.renderer.updateSky(e.dayFraction,(s=this.game.player)==null?void 0:s.position,e.dayOfYear,t);const n=this.game.renderer.nightFactor>.25;n!==this._nightState&&(this._nightState=n,Ko().emissiveIntensity=n?.45:0,this.game.bus.emit("world:daynight",{night:n}))}}const J1=.72;class Q1{constructor(t){this.game=t,this.target=null,this._label=null,this._fwd=new I(0,0,-1)}update(){var h,u,d,f,m,_;const t=this.game;if(t.mode!==We.PLAY){this._setTarget(null);return}if(t.player.vehicle){this._setTarget({label:"get out",action:"vehicle_exit",pos:t.player.position}),t.input.wasPressed("interact")&&t.player.vehicle.dismount();return}const e=t.player.position,n=t.camera.active,s=n.position;n.getWorldDirection(this._fwd);const r=((h=t.shift)==null?void 0:h.station)||null;let o=null,a=1/0;const c=(p,g)=>{var U,N;const y=p.pos.x-e.x,x=p.pos.z-e.z,M=Math.hypot(y,x);if(M>=(p.radius||1.8))return;const R=p.pos.x-s.x,E=p.pos.y-s.y,b=p.pos.z-s.z,P=Math.hypot(R,E,b)||1,D=(R*this._fwd.x+E*this._fwd.y+b*this._fwd.z)/P,v=Math.acos(Math.min(1,Math.max(-1,D)));if(v>J1)return;const w=v+M*.1;w>=a||(N=(U=t.world).sightBlocked)!=null&&N.call(U,e,p.pos,g)||(a=w,o=p)};for(const p of t.world.activeInteractables()){const g=(u=p.data)==null?void 0:u.zone;g&&(g.minZ!==void 0&&e.z<g.minZ||g.maxZ!==void 0&&e.z>g.maxZ||g.minX!==void 0&&e.x<g.minX||g.maxX!==void 0&&e.x>g.maxX)||p.action==="station"&&r||(d=p.data)!=null&&d.podOnly&&r!=="pod"||(f=p.data)!=null&&f.when&&!((m=t.shift)!=null&&m.available(p.data.when,p.data))||c(p,void 0)}const l=(_=t.world.doors)==null?void 0:_.nearest(e,2);l&&!r&&c(l,{backOff:.7}),this._setTarget(o),t.input.wasPressed("interact")&&this.activate()}_setTarget(t){const e=t?t.label:null;this.target===t&&this._label===e||(this.target=t,this._label=e,this.game.bus.emit("interaction:target",{label:e,interactable:t}))}activate(){this.target&&this.run(this.target.action,this.target.data||{})}run(t,e){var s;const n=this.game;switch(t){case"door":{e.door.toggle()||n.ui.toast("You are standing in the doorway.");return}case"station":return void n.shift.lockIn(e.station);case"pod":return void n.shift.podPress(e);case"counter":return void n.shift.counterPress(e);case"service":return void n.shift.servicePress(e);case"vehicle":return void((s=n.deliveryCar)==null?void 0:s.mount());case"note":return void n.ui.toast(e.text);default:console.warn("[interaction] no handler for action:",t,e),n.ui.toast("Nothing happens.")}}}const de={ORDER_OFFERED:"order:offered",ORDER_STARTED:"order:started",ORDER_STEP:"order:step",ORDER_BUILT:"order:built",ORDER_WRAPPED:"order:wrapped",ORDER_READY:"order:ready",ORDER_BAGGED:"order:bagged",ORDER_TRAY:"order:tray",ORDER_SERVED:"order:served",COUNTER_TAKEN:"counter:order_taken",COUNTER_PAID:"counter:paid",DT_TAKEN:"dt:order_taken",DT_BAGGED:"dt:bagged",DLV_BAGGED:"dlv:bagged",POD_REFUSED:"pod:refused"},zi={bun:{label:"toasted bun",station:"toaster",colour:13210159,shape:"heel"},ketchup:{label:"ketchup",station:"guns",colour:10236968,shape:"smear"},mustard:{label:"mustard",station:"guns",colour:13210159,shape:"smear"},mayo:{label:"mayo",station:"guns",colour:15261904,shape:"smear"},bbq:{label:"BBQ sauce",station:"guns",colour:5913126,shape:"smear"},pickle:{label:"pickles",station:"bins",colour:8030778,shape:"chips"},onion:{label:"onion",station:"bins",colour:15261904,shape:"chips"},lettuce:{label:"lettuce",station:"bins",colour:5208634,shape:"leaf"},tomato:{label:"tomato",station:"bins",colour:10236968,shape:"slice"},cheese:{label:"cheese",station:"bins",colour:13210159,shape:"flat"},patty:{label:"beef patty",station:"uhc",colour:7031349,shape:"disc"},fillet:{label:"chicken fillet",station:"uhc",colour:13216097,shape:"disc"}},Fi={classic:{label:"Barn Classic",value:7.5,sequence:["bun","ketchup","mustard","pickle","onion","patty"]},cheese:{label:"Cheese Barn",value:8,sequence:["bun","ketchup","pickle","cheese","patty"]},smokehouse:{label:"Smokehouse",value:9,sequence:["bun","bbq","onion","cheese","patty"]},garden_chook:{label:"Garden Chook",value:8.5,sequence:["bun","mayo","lettuce","tomato","fillet"]}},Mu=Object.keys(Fi),tl={double_patty:{label:"double beef",dupe:"patty",value:2.5},double_fillet:{label:"double chook",dupe:"fillet",value:2.5},extra_cheese:{label:"extra cheese",dupe:"cheese",value:1},extra_pickles:{label:"extra pickles",dupe:"pickle",value:.5},extra_onion:{label:"extra onion",dupe:"onion",value:.5},extra_sauce_bbq:{label:"extra BBQ",dupe:"bbq",value:.5}},ty=Object.keys(tl),$n={intervalMin:7,intervalJitter:.35,maxLive:4,queueCapacity:3,secondItemChance:.25,sourceMix:{kiosk:.34,counter:.3,drivethru:.21},deliveryHouses:18,laneCapacity:3,modifierChance:.3,dineInChance:.45},Qs=[{skin:0,hair:0,height:1,build:1,hairStyle:"short",top:4877194,bottom:3884626},{skin:1,hair:2,height:.94,build:.92,hairStyle:"long",top:9067115,bottom:3027256},{skin:2,hair:4,height:1.05,build:1.12,hairStyle:"short",top:5929554,bottom:4866619},{skin:3,hair:1,height:.98,build:1,hairStyle:"bun",top:11569738,bottom:3884626},{skin:4,hair:6,height:1.02,build:.95,hairStyle:"short",top:7035530,bottom:3027256},{skin:5,hair:3,height:.9,build:.9,hairStyle:"long",top:9071434,bottom:5392702},{skin:1,hair:5,height:1.07,build:1.05,hairStyle:"short",top:4885123,bottom:3884626},{skin:3,hair:7,height:.96,build:1.08,hairStyle:"bun",top:10242626,bottom:3027256}];class ey{constructor({emit:t,rng:e,now:n=0}){this.emit=t,this.rng=e,this.now=n,this.orders=new Map,this._nextId=11,this._nextOfferAt=null,this.stats={offered:0,served:0,balked:0,bySource:{}}}live(){return[...this.orders.values()].filter(t=>t.state!=="served"&&t.state!=="queued"&&t.state!=="ordering"&&t.state!=="driveup").sort((t,e)=>t.id-e.id)}carQueue(){return[...this.orders.values()].filter(t=>t.state==="driveup").sort((t,e)=>t.id-e.id)}all(){return[...this.orders.values()].sort((t,e)=>t.id-e.id)}counterQueue(){return[...this.orders.values()].filter(t=>t.state==="queued").sort((t,e)=>t.id-e.id)}ordering(){return[...this.orders.values()].find(t=>t.state==="ordering")||null}active(){return this.live().find(t=>t.state==="active"||t.state==="building"||t.state==="built"||t.state==="wrapped")||null}ready(){return this.live().filter(t=>t.state==="ready")}readyFor(t){return this.ready().filter(e=>e.service===t&&e.source!=="drivethru")}bagged(){return this.live().filter(t=>t.state==="bagged")}carriedBy(t){return this.live().find(e=>e.state==="carried"&&e.carrier===t)||null}get(t){return this.orders.get(t)||null}offer(t){const e=this.rng.float(),n=$n.sourceMix,s=e<n.kiosk?"kiosk":e<n.kiosk+n.counter?"counter":e<n.kiosk+n.counter+n.drivethru?"drivethru":"delivery";if(s==="counter"&&this.counterQueue().length>=$n.queueCapacity)return this.stats.balked+=1,null;if(s==="drivethru"&&this.carQueue().length>=$n.laneCapacity)return this.stats.balked+=1,null;if((s==="kiosk"||s==="delivery")&&this.live().length>=$n.maxLive)return this.stats.balked+=1,null;const r=[this.rng.pick(Mu)];this.rng.chance($n.secondItemChance)&&r.push(this.rng.pick(Mu));const o=r.map(u=>{if(!this.rng.chance($n.modifierChance))return null;const d=ty.filter(f=>Fi[u].sequence.includes(tl[f].dupe));return d.length?this.rng.pick(d):null}),a=[],c=[];let l=0;r.forEach((u,d)=>{const f=[...Fi[u].sequence],m=o[d]?tl[o[d]]:null;if(m){const _=f.indexOf(m.dupe);f.splice(_+1,0,m.dupe)}a.push(...f),c.push(Fi[u].label+(m?` +${m.label}`:"")),l+=Fi[u].value+((m==null?void 0:m.value)??0)});const h={id:this._nextId++,source:s,items:r,mods:o,itemLabels:c,value:l,sequence:a,step:0,state:s==="counter"?"queued":s==="drivethru"?"driveup":"active",house:s==="delivery"?this.rng.int(0,$n.deliveryHouses-1):null,look:this.rng.int(0,7),service:s==="drivethru"?"takeaway":this.rng.chance($n.dineInChance)?"dinein":"takeaway",carrier:null,offeredAt:t,takenAt:null,takenBy:null,servedBy:null,builtAt:null,wrappedAt:null,readyAt:null,baggedAt:null,carriedAt:null,servedAt:null};return this.orders.set(h.id,h),this.stats.offered+=1,this.stats.bySource[s]=(this.stats.bySource[s]||0)+1,this.emit(de.ORDER_OFFERED,{id:h.id,source:s,items:[...r],sequence:[...a]}),h}takeOrder(t,e="player"){if(this.ordering())return{ok:!1,reason:"already_taking"};const n=this.counterQueue()[0];return n?(n.state="ordering",n.takenBy=e,this.emit(de.COUNTER_TAKEN,{id:n.id,items:[...n.items],total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_queued"}}takePayment(t,e="player"){const n=this.ordering();return n?(n.state="active",n.takenAt=t,this.emit(de.COUNTER_PAID,{id:n.id,total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_pay"}}serve(t,e,n="player",s=["ready"]){return!t||!s.includes(t.state)?!1:(t.state="served",t.servedAt=e,t.servedBy=n,this.stats.served+=1,this.emit(de.ORDER_SERVED,{id:t.id,ageMin:+(e-(t.takenAt??t.offeredAt)).toFixed(2)}),!0)}bagOrder(t,e="player"){const n=this.readyFor("takeaway")[0];return n?(n.state="bagged",n.baggedAt=t,this.emit(de.ORDER_BAGGED,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_bag"}}collect(t,e,n="customer"){const s=this.orders.get(t);return!s||s.state!=="bagged"?{ok:!1,reason:"not_bagged"}:(this.serve(s,e,n,["bagged"]),{ok:!0,id:s.id})}trayUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.readyFor("dinein")[0];return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(de.ORDER_TRAY,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_tray"}}deliver(t,e="player"){const n=this.carriedBy(e);return n?(this.serve(n,t,e,["carried"]),{ok:!0,id:n.id}):{ok:!1,reason:"not_carrying"}}dtTakeOrder(t,e="player"){const n=this.carQueue()[0];return n?(n.state="active",n.takenAt=t,n.takenBy=e,this.emit(de.DT_TAKEN,{id:n.id,items:[...n.items],total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"no_car_waiting"}}dtBagUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.ready().find(s=>s.source==="drivethru");return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(de.DT_BAGGED,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_for_the_window"}}dlvBagUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.ready().find(s=>s.source==="delivery");return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(de.DLV_BAGGED,{id:n.id,house:n.house,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_run"}}_interval(){const t=1+this.rng.range(-.35,$n.intervalJitter);return $n.intervalMin*t}tick(t){this.now=t,this._nextOfferAt===null&&(this._nextOfferAt=t+this._interval());let e=0;for(;t>=this._nextOfferAt&&e++<16;)this.offer(this._nextOfferAt),this._nextOfferAt+=this._interval();for(const n of this.orders.values())n.state==="served"&&t-n.servedAt>10&&this.orders.delete(n.id)}serialize(){return{nextId:this._nextId,nextOfferAt:this._nextOfferAt,stats:{...this.stats,bySource:{...this.stats.bySource}},orders:[...this.orders.values()]}}load(t){var e;t&&(this._nextId=t.nextId,this._nextOfferAt=t.nextOfferAt??null,this.stats={...t.stats,bySource:{...((e=t.stats)==null?void 0:e.bySource)||{}}},this.orders=new Map(t.orders.map(n=>[n.id,{...n}])))}}const Ze={NO_ORDER:"no_order",NOT_NEXT:"not_next",NOT_AT_UHC:"not_at_uhc",ALREADY_BUILT:"already_built",NOT_BUILT:"not_built",NOT_WRAPPED:"not_wrapped"};class ny{constructor({queue:t,emit:e}){this.queue=t,this.emit=e}nextToken(){const t=this.queue.active();return!t||t.step>=t.sequence.length?null:t.sequence[t.step]}_refuse(t,e=null){return this.emit(de.POD_REFUSED,{reason:t,token:e,next:this.nextToken()}),{ok:!1,reason:t}}addToken(t,e,n="player"){const s=this.queue.active();if(!s)return this._refuse(Ze.NO_ORDER,t);if(s.state==="built"||s.state==="wrapped")return this._refuse(Ze.ALREADY_BUILT,t);const r=s.sequence[s.step];return t!==r?this._refuse(Ze.NOT_NEXT,t):(s.step+=1,s.state==="active"&&(s.state="building",this.emit(de.ORDER_STARTED,{id:s.id})),this.emit(de.ORDER_STEP,{id:s.id,added:t,next:s.sequence[s.step]??null,step:s.step}),s.step>=s.sequence.length&&(s.state="built",s.builtAt=e,this.emit(de.ORDER_BUILT,{id:s.id})),{ok:!0,added:t})}pullFromUHC(t,e="player"){var s;const n=this.nextToken();if(n===null){const r=this.queue.active();return this._refuse(r?Ze.ALREADY_BUILT:Ze.NO_ORDER)}return((s=zi[n])==null?void 0:s.station)!=="uhc"?this._refuse(Ze.NOT_AT_UHC):this.addToken(n,t,e)}wrap(t,e="player"){const n=this.queue.active();return n?n.state!=="built"?this._refuse(n.state==="wrapped"?Ze.ALREADY_BUILT:Ze.NOT_BUILT):(n.state="wrapped",n.wrappedAt=t,this.emit(de.ORDER_WRAPPED,{id:n.id}),{ok:!0}):this._refuse(Ze.NO_ORDER)}send(t,e="player"){const n=this.queue.active();return n?n.state!=="wrapped"?this._refuse(Ze.NOT_WRAPPED):(n.state="ready",n.readyAt=t,this.emit(de.ORDER_READY,{id:n.id}),{ok:!0}):this._refuse(Ze.NO_ORDER)}}const Fs=class Fs{constructor({rng:t,bus:e=null}){this.bus=e,this.minute=0,this.log=[],this.logSeq=0,this.rev=0,this.netRole="solo";const n=(s,r)=>this._emit(s,r);this.orders=new ey({emit:n,rng:t.child("orders")}),this.pod=new ny({queue:this.orders,emit:n})}_emit(t,e={}){this.logSeq+=1,this.rev+=1,this.log.push({type:t,payload:e,minute:+this.minute.toFixed(3),seq:this.logSeq}),this.log.length>600&&this.log.shift(),this.bus&&this.bus.emit(t,e)}tick(t){this.netRole!=="guest"&&(t<=0||(this.minute+=t,this.orders.tick(this.minute)))}addToken(t,e="player"){return this.pod.addToken(t,this.minute,e)}pullFromUHC(t="player"){return this.pod.pullFromUHC(this.minute,t)}wrap(t="player"){return this.pod.wrap(this.minute,t)}send(t="player"){return this.pod.send(this.minute,t)}takeOrder(t="player"){return this.orders.takeOrder(this.minute,t)}takePayment(t="player"){return this.orders.takePayment(this.minute,t)}bagOrder(t="player"){return this.orders.bagOrder(this.minute,t)}trayUp(t="player"){return this.orders.trayUp(this.minute,t)}deliver(t="player"){return this.orders.deliver(this.minute,t)}collect(t,e="customer"){return this.orders.collect(t,this.minute,e)}dtTakeOrder(t="player"){return this.orders.dtTakeOrder(this.minute,t)}dtBagUp(t="player"){return this.orders.dtBagUp(this.minute,t)}dlvBagUp(t="player"){return this.orders.dlvBagUp(this.minute,t)}applyNet(t,e=[],n="guest"){if(!Object.hasOwn(Fs.NET_COMMANDS,t))return{ok:!1,reason:"unknown_command"};const s=Fs.NET_COMMANDS[t];return!Array.isArray(e)||e.length<s.n?{ok:!1,reason:"bad_args"}:Fs.prototype[s.m].apply(this,[...e.slice(0,s.n),n])}snapshot(){var t;return{minute:this.minute,board:this.orders.live(),queue:this.orders.counterQueue(),ordering:this.orders.ordering(),activeId:((t=this.orders.active())==null?void 0:t.id)??null,nextToken:this.pod.nextToken(),readyCount:this.orders.ready().length,stats:{...this.orders.stats}}}serialize(){return{minute:this.minute,orders:this.orders.serialize()}}load(t){t&&(this.minute=t.minute||0,this.orders.load(t.orders))}};Gl(Fs,"NET_COMMANDS",{token:{m:"addToken",n:1},uhc:{m:"pullFromUHC",n:0},wrap:{m:"wrap",n:0},send:{m:"send",n:0},take_order:{m:"takeOrder",n:0},take_payment:{m:"takePayment",n:0},bag:{m:"bagOrder",n:0},tray:{m:"trayUp",n:0},deliver:{m:"deliver",n:0},collect:{m:"collect",n:1},dt_take:{m:"dtTakeOrder",n:0},dt_bag:{m:"dtBagUp",n:0},dlv_bag:{m:"dlvBagUp",n:0}});let el=Fs;const Cs=560,Su=340,Wa=68,qa=4,wu="#f1ece1",go="#9aa3ad",_o="#c9a961",xo="#0d1116",iy="#141a21",sy="#1d2733",Xa="#7fb069",ry="#cf5b45";class oy{constructor(t,e,n,s){this.scene=t,this.canvas=typeof document<"u"?document.createElement("canvas"):null,this.canvas&&(this.canvas.width=Cs,this.canvas.height=Su,this.ctx=this.canvas.getContext("2d"),this.tex=new qn(this.canvas),this.tex.colorSpace=ze,this.tex.anisotropy=4,this.mesh=new st(new Xe(s.w,s.h),new Mn({map:this.tex})),this.mesh.position.set(e.x,e.y,e.z),this.mesh.rotation.x=n,t.add(this.mesh),this._sig=null,this.paint([],null,null,{},{},0))}paint(t,e,n,s,r,o){if(!this.ctx)return;const a=t.slice(0,qa),c=u=>u.takenAt??u.offeredAt,l=`${e}|${n}|`+a.map(u=>`${u.id}:${u.state}:${u.step}:${u.source}:${Math.floor(o-c(u))}`).join(",");if(l===this._sig)return;this._sig=l;const h=this.ctx;if(h.fillStyle=xo,h.fillRect(0,0,Cs,Su),h.fillStyle=_o,h.font="bold 32px Segoe UI, system-ui, sans-serif",h.fillText("ORDERS",16,36),t.length>qa&&(h.fillStyle=go,h.font="22px Segoe UI, system-ui, sans-serif",h.textAlign="right",h.fillText(`+${t.length-qa} more`,Cs-16,34),h.textAlign="left"),!a.length){h.fillStyle=go,h.font="28px Segoe UI, system-ui, sans-serif",h.fillText("Nothing on.",16,100),this.tex.needsUpdate=!0;return}a.forEach((u,d)=>{var M;const f=48+d*Wa,m=u.id===e;h.fillStyle=m?sy:iy,h.fillRect(10,f,Cs-20,Wa-8),m&&(h.fillStyle=_o,h.fillRect(10,f,6,Wa-8)),h.fillStyle=m?wu:go,h.font="bold 31px Segoe UI, system-ui, sans-serif",h.fillText(`#${u.id}`,22,f+30);let _=92;u.source==="drivethru"?(h.fillStyle=ry,h.fillRect(_,f+8,50,26),h.fillStyle=xo,h.font="bold 20px Segoe UI, system-ui, sans-serif",h.fillText("DT",_+12,f+28),_+=60):u.source==="delivery"?(h.fillStyle="#4a7dc9",h.fillRect(_,f+8,52,26),h.fillStyle=xo,h.font="bold 20px Segoe UI, system-ui, sans-serif",h.fillText("DLV",_+8,f+28),_+=62):u.service==="dinein"&&(h.fillStyle=Xa,h.fillRect(_,f+8,62,26),h.fillStyle=xo,h.font="bold 20px Segoe UI, system-ui, sans-serif",h.fillText("DINE",_+8,f+28),_+=72),h.fillStyle=m?wu:go,h.font="25px Segoe UI, system-ui, sans-serif";const p=(u.itemLabels||(u.items||[]).map(R=>{var E;return((E=r[R])==null?void 0:E.label)||R})).join(", ");if(h.fillText(p.slice(0,u.source==="drivethru"?24:28),_,f+30),h.font="23px Segoe UI, system-ui, sans-serif",m){h.fillStyle=Xa;const R=u.state==="built"?"wrap it":u.state==="wrapped"?"send it down":n?`next: ${((M=s[n])==null?void 0:M.label)||n}`:"…";h.fillText(R,92,f+57)}else{h.fillStyle=u.state==="ready"||u.state==="bagged"||u.state==="carried"?_o:"#5d6570";const R=Math.floor(o-c(u));h.fillText(u.state==="ready"?"at the landing":u.state==="bagged"?"on the counter":u.state==="carried"?u.source==="drivethru"?"going to the window":u.source==="delivery"?"out for delivery":"going to the table":R<1?"just in":`waiting ${R}m`,92,f+57)}const g=(u.sequence||[]).length||1,y=u.state==="ready"||u.state==="wrapped"||u.state==="built"||u.state==="bagged"||u.state==="carried",x=y?1:Math.min(1,(u.step||0)/g);h.fillStyle="#2a333d",h.fillRect(Cs-104,f+20,84,10),h.fillStyle=y&&u.state!=="built"?_o:Xa,h.fillRect(Cs-104,f+20,84*x,10)}),this.tex.needsUpdate=!0}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.material.dispose(),this.mesh=null)}}const nl="#f1ece1",Bo="#9aa3ad",il="#c9a961",Zd="#0d1116",Eu="#7fb069";function Jd(i,t,e,n,s){const r=document.createElement("canvas");r.width=n,r.height=s;const o=new qn(r);o.colorSpace=ze,o.anisotropy=4;const a=new st(new Xe(e.w,e.h),new Mn({map:o}));return a.position.set(t.x,t.y,t.z),a.rotation.y=t.rotY||0,i.add(a),{canvas:r,tex:o,mesh:a,ctx:r.getContext("2d")}}class ay{constructor(t,e){typeof document>"u"||(this.face=Jd(t,e,{w:e.w,h:e.h},320,235),this._sig=null)}paint(t,e,n,s,r){if(!this.face)return;const o=n&&s-n.atMin<2,a=t?`t${t.id}:${(t.itemLabels||t.items).join("+")}`:o?`p${n.id}`:`q${e}`;if(a===this._sig)return;this._sig=a;const c=this.face.ctx,l=320,h=235;if(c.fillStyle=Zd,c.fillRect(0,0,l,h),c.fillStyle=il,c.font="bold 26px Segoe UI, system-ui, sans-serif",c.fillText("TILL",14,32),t){c.fillStyle=nl,c.font="bold 28px Segoe UI, system-ui, sans-serif",c.fillText(`#${t.id}`,240,32),c.font="24px Segoe UI, system-ui, sans-serif";let u=70;t.items.forEach((d,f)=>{var _;const m=r[d];c.fillStyle=nl,c.fillText((((_=t.itemLabels)==null?void 0:_[f])||(m==null?void 0:m.label)||d).slice(0,24),14,u),u+=34}),c.strokeStyle="#2a333d",c.beginPath(),c.moveTo(14,u-12),c.lineTo(l-14,u-12),c.stroke(),c.fillStyle=il,c.font="bold 28px Segoe UI, system-ui, sans-serif",c.fillText("TOTAL",14,u+18),c.textAlign="right",c.fillText(`$${t.value.toFixed(2)}`,l-14,u+18),c.textAlign="left",c.fillStyle=Eu,c.font="24px Segoe UI, system-ui, sans-serif",c.fillText("take payment",14,h-14)}else o?(c.fillStyle=Eu,c.font="bold 42px Segoe UI, system-ui, sans-serif",c.fillText("PAID",14,104),c.fillText(`$${n.total.toFixed(2)}`,14,140),c.fillStyle=Bo,c.font="24px Segoe UI, system-ui, sans-serif",c.fillText(`#${n.id} to the kitchen`,14,184)):(c.fillStyle=Bo,c.font="28px Segoe UI, system-ui, sans-serif",c.fillText(e===0?"No one waiting.":e===1?"1 in line.":`${e} in line.`,14,100));this.face.tex.needsUpdate=!0}}class cy{constructor(t,e){typeof document>"u"||(this.face=Jd(t,e,{w:e.w,h:e.h},500,275),this._sig=null)}paint(t){if(!this.face)return;const e=t.filter(h=>h.source!=="drivethru"&&h.source!=="delivery"),n=e.filter(h=>h.state!=="bagged"&&h.state!=="carried").map(h=>h.id),s=e.filter(h=>h.state==="bagged").map(h=>h.id),r=n.join(",")+"|"+s.join(",");if(r===this._sig)return;this._sig=r;const o=this.face.ctx,a=500,c=275;o.fillStyle=Zd,o.fillRect(0,0,a,c),o.strokeStyle="#2a333d",o.beginPath(),o.moveTo(a/2,12),o.lineTo(a/2,c-12),o.stroke(),o.font="bold 30px Segoe UI, system-ui, sans-serif",o.fillStyle=Bo,o.fillText("PREPARING",24,38),o.fillStyle=il,o.fillText("READY",a/2+24,38),o.font="bold 58px Segoe UI, system-ui, sans-serif";const l=(h,u,d)=>{o.fillStyle=d,h.slice(0,6).forEach((f,m)=>{o.fillText(`${f}`,u+m%2*118,104+Math.floor(m/2)*72)})};l(n,34,Bo),l(s,a/2+34,nl),this.face.tex.needsUpdate=!0}}const ly=2.6,hy=4;class uy{constructor(t){var n;this.game=t,this.rules=new el({rng:t.rng.child("shift"),bus:t.bus}),this.station=null;const e=t.renderer.scene;this.screen=new oy(e,co,co.tilt,{w:co.w,h:co.h}),this.till=new ay(e,{x:uu.x,...uu.screen}),this.readyBoard=new cy(e,D1),this._lastPaid=null,t.bus.on(de.COUNTER_PAID,({id:s,total:r})=>{this._lastPaid={id:s,total:r,atMin:this.rules.minute}}),this._buildLandingPool(e),this._buildBagPool(e),this._wireToasts();for(const s of t.world.activeInteractables()){const r=(n=s.data)==null?void 0:n.token;r&&!zi[r]&&console.error("ShiftSystem: interactable",s.id,"dispenses a token the menu does not know:",r)}}available(t,e={}){var s,r,o,a,c;const n=this.rules.orders;switch(t){case"dt_order":{const l=n.carQueue()[0];return!!l&&(((s=this.game.cars)==null?void 0:s.atOrderWindow(l.id))??!1)}case"dt_bag_ready":return!this.game.player.isBusy&&!n.carriedBy("player")&&n.ready().some(l=>l.source==="drivethru");case"window_handout":{const l=n.carriedBy("player");return!!l&&l.source==="drivethru"&&(((r=this.game.cars)==null?void 0:r.atPickup(l.id))??!1)}case"dlv_bag_ready":return!this.game.player.isBusy&&!n.carriedBy("player")&&n.ready().some(l=>l.source==="delivery");case"at_house":{const l=n.carriedBy("player");return!!l&&l.source==="delivery"&&l.house===e.house}case"queue_head":{if(this.station!=="counter"||n.ordering())return!1;const l=n.counterQueue()[0];return!!l&&(((o=this.game.customers)==null?void 0:o.atTill(l.id))??!0)}case"payment_due":return this.station==="counter"&&!!n.ordering();case"bag_ready":return n.readyFor("takeaway").length>0;case"tray_ready":{if(this.game.player.isBusy||n.carriedBy("player"))return!1;const l=n.readyFor("dinein")[0];return!!l&&((a=this.game.customers)==null?void 0:a.seatedTable(l.id))!=null}case"carrying_for":{const l=n.carriedBy("player");return!!l&&((c=this.game.customers)==null?void 0:c.tableOf(l.id))===e.table}default:return!1}}servicePress(t){var n,s,r;const e=this.game.ui;if(t.op==="tray"){const o=this.rules.trayUp();if(o.ok){const a=(n=this.game.customers)==null?void 0:n.tableOf(o.id);e.toast(`#${o.id} on the tray — table ${a??"?"}.`,4200)}else e.toast("Nothing ready for a tray.")}else if(t.op==="bag"){const o=this.rules.bagOrder();o.ok?e.toast(`#${o.id} bagged — their number is up.`):e.toast("Nothing ready to bag.")}else if(t.op==="dt_take"){const o=this.rules.dtTakeOrder();o.ok?e.toast(`#${o.id} — drive-thru order on the board.`):e.toast("No car at the window.")}else if(t.op==="dt_bag"){const o=this.rules.dtBagUp();o.ok?e.toast(`#${o.id} in the bag — pickup window.`,4200):e.toast("Nothing for the window.")}else if(t.op==="dlv_bag"){const o=this.rules.dlvBagUp();if(o.ok){const a=((r=os[(s=this.rules.orders.get(o.id))==null?void 0:s.house])==null?void 0:r.name)??"the address";e.toast(`#${o.id} for ${a} — the van's at the goods door.`,5200)}else e.toast("No deliveries waiting.")}else t.op==="deliver"&&(this.rules.deliver().ok||e.toast("You are not carrying anything."))}lockIn(t){if(t==="pod")return this._lockPod();if(t==="counter")return this._lockCounter();this.game.ui.toast("Nothing to work there yet.")}_lockPod(){const t=this.game.player;t.position.z<kn.z-.75||(this.station="pod",t.setState("busy"),t.position.x=dn.clamp(t.position.x,kn.x0,kn.x1),t.position.z=kn.z,t.position.y=0,t.velocity.set(0,0,0),t.facing=kn.facing,this.game.camera.yaw=kn.facing,this.game.ui.toast("On the pod. A/D to slide along, S to step off.",5200),this.game.bus.emit("shift:station",{station:"pod"}))}_lockCounter(){const t=this.game.player;t.position.z>$i.z+.75||(this.station="counter",t.setState("busy"),t.position.x=$i.x,t.position.z=$i.z,t.position.y=0,t.velocity.set(0,0,0),t.facing=$i.facing,this.game.camera.yaw=$i.facing,this.game.ui.toast("On the till. S to step off.",5200),this.game.bus.emit("shift:station",{station:"counter"}))}release(){this.station&&(this.station=null,this.game.player.setState("normal"),this.game.bus.emit("shift:station",{station:null}))}podPress(t){this.station==="pod"&&(t.op==="uhc"?this.rules.pullFromUHC():t.op==="wrap"?this.rules.wrap():t.op==="send"?this.rules.send():this.rules.addToken(t.token))}counterPress(t){if(this.station!=="counter")return;(t.op==="take_payment"?this.rules.takePayment():this.rules.takeOrder()).ok||this.game.ui.toast("Not right now.")}update(t){var c,l,h,u;const e=this.game;e.mode===We.PLAY&&(this.rules.tick(t*e.clock.scale),this.station==="pod"?this._slide(t):this.station==="counter"&&this._pin(t));const n=this.rules.orders,s=n.live();(l=this.screen)==null||l.paint(s,((c=n.active())==null?void 0:c.id)??null,this.rules.pod.nextToken(),zi,Fi,this.rules.minute),(h=this.till)==null||h.paint(n.ordering(),n.counterQueue().length,this._lastPaid,this.rules.minute,Fi),(u=this.readyBoard)==null||u.paint(s),this._syncLanding(),this._syncBags();const r=n.carriedBy("player"),o=r&&r.source!=="kiosk"&&r.source!=="counter"?r.source:null,a=!!this.game.player.vehicle;this.game.player.avatar.setHeld(r&&!a?[{id:(o?"bag":"tray")+r.id,shape:o?"bag":"tray",colour:o?14272934:11026479}]:[]),this._syncReceipt(r&&!a?r:null)}_syncReceipt(t){var r,o,a,c;if(!t){(r=this._receipt)!=null&&r.mesh.parent&&this._receipt.mesh.parent.remove(this._receipt.mesh);return}if(!this._receipt){const l=document.createElement("canvas");l.width=80,l.height=64;const h=new qn(l);h.colorSpace=ze;const u=new st(new Xe(.085,.068),new Mn({map:h,transparent:!0,side:Hn}));u.position.set(-.1,.05,-.06),u.rotation.y=Math.PI,u.rotation.x=.28,this._receipt={canvas:l,tex:h,mesh:u,sig:null}}const e=(o=this.game.customers)==null?void 0:o.tableOf(t.id),n=`${t.id}:${e}`;if(n!==this._receipt.sig){this._receipt.sig=n;const l=this._receipt.canvas.getContext("2d");l.clearRect(0,0,80,64),l.fillStyle="#f4efe4",l.fillRect(2,2,76,60),l.fillStyle="#20262e",l.textAlign="center",l.font="bold 26px Segoe UI, system-ui, sans-serif",l.fillText("#"+t.id,40,28),l.font="bold 20px Segoe UI, system-ui, sans-serif";const h=t.source==="drivethru"?"WINDOW":t.source==="delivery"?(((a=os[t.house])==null?void 0:a.name)??"DELIVERY").toUpperCase().slice(0,14):e!=null?"TABLE "+e:"";l.font=t.source==="delivery"?"bold 13px Segoe UI, system-ui, sans-serif":"bold 20px Segoe UI, system-ui, sans-serif",l.fillText(h,40,52),this._receipt.tex.needsUpdate=!0}const s=(c=this.game.player.avatar._held)==null?void 0:c[0];s&&this._receipt.mesh.parent!==s&&s.add(this._receipt.mesh)}_buildBagPool(t){this._bags=[];const e=new Ni({color:14272934}),n=new Ni({color:11026479});for(let s=0;s<3;s++){const r=new jt,o=new st(new Ot(.16,.21,.1),e);o.castShadow=!0;const a=new st(new Ot(.165,.035,.05),e);a.position.y=.12;const c=new st(new Ot(.162,.03,.102),n);c.position.y=.02,r.add(o,a,c),r.position.set(-5.85+s*.65,1.075+.105,1.95),r.rotation.y=(s%2?-1:1)*.18,r.visible=!1,t.add(r),this._bags.push(r)}}_syncBags(){const t=this.rules.orders.bagged();for(let e=0;e<this._bags.length;e++)this._bags[e].visible=e<t.length}_pin(){const t=this.game.player;t.position.x=$i.x,t.position.z=$i.z,t.position.y=0,this.game.input.axis().y<-.5&&this.release()}_slide(t){const e=this.game.player;e.position.x=dn.clamp(e.position.x,kn.x0,kn.x1),e.position.z=kn.z,e.position.y=0;const s=this.game.input.axis();if(s.y<-.5){this.release();return}if(s.x!==0){const r=this.game.camera.basis().right,o=Math.sign(r.x)||1;e.position.x=dn.clamp(e.position.x+s.x*o*ly*t,kn.x0,kn.x1)}}_buildLandingPool(t){this._landing=[];const e=new Ni({color:15262418}),n=new Ni({color:11026479}),s=new Ot(.115,.055,.115),r=new Ot(.118,.016,.05);for(let o=0;o<hy;o++){const a=new jt,c=new st(s,e);c.castShadow=!0;const l=new st(r,n);l.position.y=.02,a.add(c,l);const h=document.createElement("canvas");h.width=64,h.height=32;const u=new qn(h);u.colorSpace=ze;const d=new st(new Xe(.075,.0375),new Mn({map:u,transparent:!0}));d.rotation.x=-Math.PI/2+.35,d.position.set(0,.032,.035),a.add(d);const f=Vs.x0+.22+o*.42;a.position.set(f,Vs.y+.03,Vs.z),a.rotation.y=(o%2?-1:1)*.22,a.visible=!1,t.add(a),this._landing.push({g:a,canvas:h,tex:u,shownId:null})}}_stencil(t,e){if(t.shownId===e)return;t.shownId=e;const n=t.canvas.getContext("2d");n.clearRect(0,0,64,32),n.fillStyle="#3a3126",n.font="bold 24px Segoe UI, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("#"+e,32,17),t.tex.needsUpdate=!0}_syncLanding(){var n;const t=this.rules.orders.ready(),e=((n=this.game.buildBoard)==null?void 0:n.slidingId)??null;for(let s=0;s<this._landing.length;s++){const r=this._landing[s],o=t[s];r.g.visible=!!o&&o.id!==e,o&&this._stencil(r,o.id)}}_wireToasts(){const t=this.game.bus,e={toast:s=>{var r;return(r=this.game.ui)==null?void 0:r.toast(s)}},n=s=>{const r=zi[s];return r?r.station==="toaster"||r.station==="uhc"?"a "+r.label:r.label:s};t.on(de.POD_REFUSED,({reason:s,next:r})=>{switch(s){case Ze.NO_ORDER:return e.toast("Nothing on the board.");case Ze.NOT_NEXT:case Ze.NOT_AT_UHC:return e.toast(`It wants ${n(r)} next.`);case Ze.ALREADY_BUILT:return e.toast("It has everything it needs.");case Ze.NOT_BUILT:return e.toast("It is not built yet.");case Ze.NOT_WRAPPED:return e.toast("Wrap it before it goes down.");default:return e.toast("Not now.")}}),t.on(de.ORDER_SERVED,({id:s})=>e.toast(`#${s} away.`))}}const Ya={};function pe(i,t){return Ya[i]||(Ya[i]=t())}const me=(i,t={})=>new Ni({color:i,...t});function dy(i){const t=new jt,e=new st(pe("cup",()=>new Fe(.043,.032,.135,10)),me(i));e.castShadow=!0;const n=new st(pe("cupLid",()=>new Fe(.047,.047,.016,10)),me(14173231));n.position.y=.075;const s=new st(pe("straw",()=>new Fe(.005,.005,.1,5)),me(15790836));return s.position.set(.012,.13,0),s.rotation.z=.18,t.add(e,n,s),t}function fy(i){const t=new st(pe("bun",()=>new Hi(.056,10,6,0,Math.PI*2,0,Math.PI/2)),me(i));return t.scale.y=.62,t.castShadow=!0,t}function py(i){const t=new st(pe("heel",()=>new Fe(.054,.05,.02,12)),me(i));return t.castShadow=!0,t}function my(i){const t=new st(pe("chip",()=>new Fe(.021,.021,.008,8)),me(i));return t.castShadow=!0,t}function gy(i){const t=new st(pe("disc",()=>new Fe(.052,.052,.018,12)),me(i));return t.castShadow=!0,t}function _y(i){const t=new st(pe("flat",()=>new Ot(.082,.006,.082)),me(i));return t.castShadow=!0,t}function xy(i){const t=new st(pe("blob",()=>new jo(.036,0)),me(i));return t.castShadow=!0,t}function vy(i){const t=new jt,e=new st(pe("bottle",()=>new Fe(.024,.028,.105,8)),me(i));e.castShadow=!0;const n=new st(pe("bottleCap",()=>new Xo(.017,.036,8)),me(2896184));return n.position.y=.068,t.add(e,n),t}function yy(i){const t=new jt,e=new st(pe("carton",()=>new Fe(.04,.026,.09,4)),me(14173231));e.rotation.y=Math.PI/4,e.castShadow=!0;const n=new st(pe("chipTop",()=>new Fe(.03,.03,.05,6)),me(i));return n.position.y=.055,t.add(e,n),t}function My(i){const t=new jt,e=new st(pe("bag",()=>new Ot(.1,.135,.062)),me(i));e.castShadow=!0;const n=new st(pe("bagFold",()=>new Ot(.104,.022,.03)),me(i));return n.position.y=.076,t.add(e,n),t}function Sy(i){const t=new jt,e=new st(pe("box",()=>new Ot(.125,.075,.105)),me(i));e.castShadow=!0;const n=new st(pe("boxTape",()=>new Ot(.128,.004,.022)),me(15262418));return n.position.y=.039,t.add(e,n),t}function wy(i){const t=new jt,e=new st(pe("trayBase",()=>new Ot(.34,.014,.25)),me(i));e.castShadow=!0;const n=new st(pe("trayRim",()=>new Ot(.36,.022,.27)),me(i));n.position.y=.004;const s=new st(pe("trayParcel",()=>new Ot(.115,.055,.115)),me(15262418));s.position.set(.04,.045,.01),s.rotation.y=.3,s.castShadow=!0;const r=new st(pe("trayBand",()=>new Ot(.118,.016,.05)),me(11026479));return r.position.set(.04,.062,.01),r.rotation.y=.3,t.add(e,n,s,r),t}function Ey(i){const t=new jt,e=new st(pe("shaft",()=>new Fe(.016,.016,1.15,6)),me(i));e.castShadow=!0;const n=new st(pe("mopHead",()=>new Ot(.115,.1,.055)),me(14341056));return n.position.y=-.6,t.add(e,n),t}function by(i){const t=new jt,e=new st(pe("sprayBody",()=>new Ot(.055,.115,.045)),me(i));e.castShadow=!0;const n=new st(pe("sprayNeck",()=>new Ot(.028,.05,.028)),me(2896184));n.position.y=.082;const s=new st(pe("sprayTrigger",()=>new Ot(.05,.022,.022)),me(2896184));s.position.set(.032,.068,0);const r=new st(pe("cloth",()=>new Ot(.075,.018,.06)),me(7317704));return r.position.y=-.075,t.add(e,n,s,r),t}const Ty={cup:dy,bun:fy,heel:py,chip:my,disc:gy,flat:_y,blob:xy,bottle:vy,carton:yy,bag:My,box:Sy,tray:wy,mop:Ey,spray:by};function Ay(i){const t=new st(pe("fallback",()=>new Ot(.075,.055,.075)),me(i));return t.castShadow=!0,t}function Jn(i,t=13421772){return(Ty[i]||Ay)(t)}function Ry(i){return i==="mop"}const vn=(i,t,e,n)=>{const s=new st(new Ot(i,t,e),Re(n));return s.castShadow=!0,s.receiveShadow=!0,s};class Zo{constructor(t={}){const{skin:e=Zt.skinTones[0],hair:n=Zt.hairTones[0],height:s=1,build:r=1,hairStyle:o="short"}=t;this.group=new jt,this.scale=s,this.opts={skin:e,hair:n,height:s,build:r,hairStyle:o};const a=s,c=.44*r,l=.24*r;this.hips=new jt,this.hips.position.y=.84*a,this.group.add(this.hips),this.torso=vn(c,.58*a,l,14209734),this.torso.position.y=.29*a,this.hips.add(this.torso),this.neck=vn(.14*a,.08*a,.14*a,e),this.neck.position.y=.62*a,this.hips.add(this.neck),this.head=new jt,this.head.position.y=.66*a,this.hips.add(this.head);const h=vn(.26*a,.3*a,.25*a,e);h.position.y=.15*a,this.head.add(h),this.skull=h,this.hair=new jt;const u=o==="long"?.2:.1,d=vn(.28*a,u*a,.27*a,n);if(d.position.y=(.3-u/2+.005)*a,this.hair.add(d),o==="long"){const f=vn(.26*a,.26*a,.1*a,n);f.position.set(0,.12*a,-.14*a),this.hair.add(f)}if(o==="bun"){const f=new st(new Hi(.08*a,8,6),Re(n));f.position.set(0,.3*a,-.14*a),f.castShadow=!0,this.hair.add(f)}this.head.add(this.hair);for(const f of[-.06,.06]){const m=vn(.045*a,.045*a,.02*a,1973016);m.position.set(f*a,.17*a,.13*a),this.head.add(m)}this.arms={};for(const f of["left","right"]){const m=new jt;m.position.set((f==="left"?-1:1)*(c/2+.055*a),.54*a,0);const _=vn(.11*a,.5*a,.12*a,14209734);_.position.y=-.25*a,m.add(_);const p=vn(.1*a,.1*a,.11*a,e);p.position.y=-.54*a,m.add(p);const g=new jt;g.position.y=-.6*a,m.add(g),this.hips.add(m),this.arms[f]={pivot:m,upper:_,hand:p,grip:g}}this.legs={};for(const f of["left","right"]){const m=new jt;m.position.set((f==="left"?-1:1)*.11*a,0,0);const _=vn(.15*a,.78*a,.16*a,3884626);_.position.y=-.39*a,m.add(_);const p=vn(.17*a,.1*a,.24*a,2764083);p.position.set(0,-.82*a,.03*a),m.add(p),this.hips.add(m),this.legs[f]={pivot:m,leg:_,shoe:p}}this.bag=null,this.hat=null,this.phase=0,this.leaning=0,this.firstPerson=!1,this._held=[],this._heldSig=""}applyOutfit(t={}){var o,a,c;const e=(l,h)=>{l.material=Re(h)},n=((o=t.top)==null?void 0:o.colour)??14209734;e(this.torso,n),e(this.arms.left.upper,n),e(this.arms.right.upper,n);const s=((a=t.bottom)==null?void 0:a.colour)??3884626;e(this.legs.left.leg,s),e(this.legs.right.leg,s);const r=((c=t.shoes)==null?void 0:c.colour)??2764083;if(e(this.legs.left.shoe,r),e(this.legs.right.shoe,r),this.hat&&(this.head.remove(this.hat),this.hat=null),t.head){const l=this.scale;if(this.hat=vn(.3*l,.08*l,.3*l,t.head.colour),this.hat.position.y=.33*l,t.head.id==="cap"){const h=vn(.28*l,.03*l,.14*l,t.head.colour);h.position.set(0,-.03*l,.2*l),this.hat.add(h)}this.head.add(this.hat)}if(this.bag&&(this.hips.remove(this.bag),this.bag=null),t.bag){const l=this.scale;this.bag=vn(.32*l,.4*l,.16*l,t.bag.colour),this.bag.position.set(0,.3*l,-.2*l),this.hips.add(this.bag)}}setFirstPerson(t){this.firstPerson=t,this.head.visible=!t,this.neck.visible=!t,this.torso.visible=!t,this.arms.left.pivot.visible=!t,this.arms.right.pivot.visible=!t,this.legs.left.pivot.visible=!t,this.legs.right.pivot.visible=!t,this.bag&&(this.bag.visible=!t),this._applyHeldVisibility()}setHeld(t=[]){var r;const e=Array.isArray(t)?t.slice(0,4):[],n=e.map(o=>`${o.id}:${o.colour}:${o.shape||""}`).join("|");if(n===this._heldSig)return;this._heldSig=n;for(const o of this._held)(r=o.parent)==null||r.remove(o);this._held=[];const s=this.scale;e.forEach((o,a)=>{const c=a===1?"left":"right",l=this.arms[c].grip,h=Ry(o.shape)||!!o.big,u=Jn(o.shape,o.colour??13421772);u.scale.setScalar(s),u.position.set(0,h?-.16*s:-.02*s-(a>>1)*.11*s,h?.05*s:.075*s),h&&(u.rotation.x=.24),l.add(u),this._held.push(u)}),this._applyHeldVisibility()}_applyHeldVisibility(){for(const t of["left","right"]){const e=this.arms[t].grip;e.visible=!0,this.firstPerson?(e.parent!==this.hips&&this.hips.add(e),e.position.set((t==="left"?-1:1)*.22*this.scale,.34*this.scale,.34*this.scale)):e.parent!==this.arms[t].pivot&&(this.arms[t].pivot.add(e),e.position.set(0,-.6*this.scale,0))}}update(t,e=0,n={}){const s=e>.2;if(this.phase+=t*(s?4.2+e*1.1:2.2),n.sitting){this.legs.left.pivot.rotation.x=-1.4,this.legs.right.pivot.rotation.x=-1.4,this.arms.left.pivot.rotation.x=-.5,this.arms.right.pivot.rotation.x=-.5,this.hips.position.y=.5*this.scale;return}if(n.sleeping){this.group.rotation.z=Math.PI/2*.98,this.hips.position.y=.3*this.scale;return}this.group.rotation.z=0,this.hips.position.y=.84*this.scale+(s?Math.abs(Math.sin(this.phase))*.02:0);const r=s?Math.sin(this.phase)*Math.min(.85,.28+e*.14):Math.sin(this.phase)*.03;this.legs.left.pivot.rotation.x=r,this.legs.right.pivot.rotation.x=-r,this.arms.left.pivot.rotation.x=-r*.75,this.arms.right.pivot.rotation.x=r*.75,this.arms.left.pivot.rotation.z=.06,this.arms.right.pivot.rotation.z=-.06;const o=n.tired?.16:0;this.torso.rotation.x=o,this.head.rotation.x=o*.6}fidget(t){this.arms.left.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.arms.right.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.head.rotation.y=(Math.random()-.5)*t*.4}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}}const bu=1.5,Cy=.3,Tu=.3,Py=.34,Ly=4.5,Iy={queue_1:Math.PI,queue_2:Math.PI,queue_3:Math.PI,queue_4:Math.PI,collect_wait:Math.PI,collect_pickup:Math.PI,kiosk_1:-Math.PI/2,kiosk_2:-Math.PI/2,seat_1:-Math.PI/2,seat_2:-Math.PI/2,seat_3:-Math.PI/2,seat_4:-Math.PI/2,seat_5:-Math.PI/2,seat_6:-Math.PI/2,seat_7:-Math.PI/2},ja=7,Dy=14;class Uy{constructor(t){this.game=t,this.scene=t.renderer.scene,this._bodies=new Map,this._doorList=[],this._tables=new Map,this._buildLocators(),t.slice=this}tableOf(t){for(const[e,n]of this._tables)if(n===t)return e;return null}seatedTable(t){const e=this.tableOf(t);if(e==null)return null;const n=this._bodies.get(t);return n&&n.sitting?e:null}_freeTable(){for(let t=1;t<=ja;t++)if(!this._tables.has(t))return t;return null}_buildLocators(){this._locators=[];for(let t=1;t<=ja;t++){const e=new jt,n=new st(new Ot(.035,.115,.022),new Ni({color:11026479}));n.position.y=.058,n.castShadow=!0,e.add(n);const s=document.createElement("canvas");s.width=64,s.height=40;const r=new qn(s);r.colorSpace=ze;const o=new Mn({map:r,transparent:!0});for(const a of[0,Math.PI]){const c=new st(new Xe(.07,.044),o);c.position.set(0,.075,a===0?.013:-.013),c.rotation.y=a,e.add(c)}e.visible=!1,this.scene.add(e),this._locators.push({g:e,canvas:s,tex:r,shownId:null})}}_syncLocators(){const t=this.game.shift.rules.orders;for(let e=1;e<=ja;e++){const n=this._locators[e-1],s=this._tables.get(e),r=s!=null?t.get(s):null,o=!!r&&r.state!=="served";if(n.g.visible=o,!o)continue;const a=this.spot(`table_${e}`);if(n.g.position.set(a.x-.24,.745,a.z-.2),n.shownId!==s){n.shownId=s;const c=n.canvas.getContext("2d");c.clearRect(0,0,64,40),c.fillStyle="#f4efe4",c.font="bold 26px Segoe UI, system-ui, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("#"+s,32,21),n.tex.needsUpdate=!0}}}bodies(){return this._doorList}atTill(t){const e=this._bodies.get(t);return!!e&&e.goalName==="queue_1"&&e.path.length===0}spot(t){return this.game.world.spots[t]}update(t){if(t>0&&this.game.mode===We.PLAY){this._sync(t);for(const e of this._bodies.values())this._move(e,t);this._separate(),this._syncLocators(),this._doorList.length=0;for(const e of this._bodies.values())this._doorList.push(e),e.avatar.update(t,e.speed,{sitting:!!e.sitting})}}_sync(t){const e=this.game.shift.rules.orders;for(const n of e.all()){if(n.source==="drivethru"||n.source==="delivery")continue;let s=this._bodies.get(n.id);if(n.state==="served"){if(!s||s.table!=null&&!s.leaving&&(s.sitting=!0,s.eat??(s.eat=Dy+n.id%7*4),s.eat-=t,s.eat>0))continue;this._leave(s);continue}s||(s=this._spawn(n)),!s.leaving&&(n.source==="counter"?this._counterChoreo(s,n,e):this._kioskChoreo(s,n,t))}for(const n of this._bodies.values())e.get(n.id)||this._leave(n)}_counterChoreo(t,e,n){if(e.state==="queued"){const s=n.counterQueue().indexOf(e),r=Math.min(s+1+(n.ordering()?1:0),4);this._stand(t,`queue_${r}`)}else e.state==="ordering"?this._stand(t,"queue_1"):this._waitChoreo(t,e)}_kioskChoreo(t,e,n){t.phase==="arrive"?(this._stand(t,t.kioskSpot),!t.path.length&&t.goalName===t.kioskSpot&&(t.phase="ordering",t.dwell=Ly)):t.phase==="ordering"?(t.dwell-=n,t.dwell<=0&&(t.phase="waiting")):this._waitChoreo(t,e)}_waitChoreo(t,e){if(e.state==="bagged"){t.sitting=!1,this._stand(t,"collect_pickup"),!t.path.length&&t.goalName==="collect_pickup"&&!t.collected&&(t.collected=!0,this.game.shift.rules.collect(e.id,"customer"),t.avatar.setHeld([{id:"bag",shape:"bag",colour:14272934}]));return}if(e.service==="dinein"){if(t.table==null){const n=this._freeTable();if(n==null){this._stand(t,"collect_wait");return}t.table=n,this._tables.set(n,e.id)}this._stand(t,`seat_${t.table}`),t.sitting=!t.path.length&&t.goalName===`seat_${t.table}`;return}this._stand(t,"collect_wait")}_spawn(t){const e=Qs[t.look%Qs.length],n=new Zo({skin:Zt.skinTones[e.skin%Zt.skinTones.length],hair:Zt.hairTones[e.hair%Zt.hairTones.length],hairStyle:e.hairStyle,height:e.height,build:e.build});n.applyOutfit({top:{colour:e.top},bottom:{colour:e.bottom},shoes:{colour:2764083}});const s=this.spot("entry_out");n.group.position.set(s.x,0,s.z),this.scene.add(n.group);const r={id:t.id,avatar:n,pos:n.group.position,facing:Math.PI,speed:0,path:[],goalName:null,leaving:!1,phase:"arrive",dwell:0,kioskSpot:t.id%2?"kiosk_1":"kiosk_2"};return this._bodies.set(t.id,r),r}_despawn(t){this._freeUp(t),this.scene.remove(t.avatar.group),t.avatar.dispose(),this._bodies.delete(t.id)}_freeUp(t){t.table!=null&&(this._tables.delete(t.table),t.table=null),t.sitting=!1}_stand(t,e){t.goalName!==e&&(t.goalName=e,t.path=this._route(t,e))}_leave(t){t.leaving||(this._freeUp(t),t.leaving=!0,t.goalName="entry_out",t.path=this._route(t,"entry_out"))}_route(t,e){const n=this.spot(e),s=[],r=t.pos,o=r.x<-8.3&&r.z>3.5,a=r.z<3.5;return e==="entry_out"?(o&&s.push(this.spot("kiosk_gate")),(o||a)&&s.push(this.spot("aisle")),s.push(this.spot("entry"))):e.startsWith("kiosk")?(!a&&!o&&s.push(this.spot("aisle")),s.push(this.spot("kiosk_gate"))):n.z<3.5&&o?s.push(this.spot("kiosk_gate")):n.z<3.5&&!a&&s.push(this.spot("aisle")),s.push(n),s}_move(t,e){const n=t.path[0];if(!n){const c=t.goalName&&this.spot(t.goalName);if(c){const h=Math.hypot(c.x-t.pos.x,c.z-t.pos.z),u=this.game.player.position,d=Math.hypot(c.x-u.x,c.z-u.z)<.6;if(h>.55&&!d){t.path=[c];return}}t.speed=0;const l=Iy[t.goalName];l!==void 0&&(t.facing=l),t.avatar.group.rotation.y=t.facing;return}const s=n.x-t.pos.x,r=n.z-t.pos.z,o=Math.hypot(s,r);if(o<Cy){t.path.shift(),!t.path.length&&t.leaving&&this._despawn(t);return}const a=Math.min(o,bu*e);t.pos.x+=s/o*a,t.pos.z+=r/o*a,t.facing=Math.atan2(s,r),t.avatar.group.rotation.y=t.facing,t.speed=bu}_separate(){const t=[...this._bodies.values()];for(let e=0;e<t.length;e++){if(t[e].sitting)continue;for(let l=e+1;l<t.length;l++){const h=t[e],u=t[l];if(u.sitting)continue;let d=u.pos.x-h.pos.x,f=u.pos.z-h.pos.z,m=Math.hypot(d,f);const _=Tu*2;if(m>=_)continue;m<1e-4&&(d=1,f=0,m=1);const p=(_-m)/2;h.pos.x-=d/m*p,h.pos.z-=f/m*p,u.pos.x+=d/m*p,u.pos.z+=f/m*p}const n=this.game.player.position,s=t[e];let r=s.pos.x-n.x,o=s.pos.z-n.z,a=Math.hypot(r,o);const c=Tu+Py;a<c&&(a<1e-4&&(r=1,o=0,a=1),s.pos.x+=r/a*(c-a),s.pos.z+=o/a*(c-a))}}}const Ny=5.5,Oy=4.5,Ka=.35,Au=-.5,zy=-1,$a=20;class Fy{constructor(t){this.game=t,this.scene=t.renderer.scene,this._cars=new Map,this._path=this._buildPath(),this._sOrder=15.9-Au,this._sPickup=this._sAtServiceZ(zy),this._sExit=this._sAtServiceZ($a)}_buildPath(){const t=[],e=(h,u)=>t.push({x:h,z:u}),n=Nl.lane.legs,s=n[0],r=n[1],o=n[2];e(s.from.x,s.from.z),e(s.to.x,s.to.z);const a=(h,u,d,f)=>{for(let _=1;_<=7;_++){const p=d+(f-d)*(_/7);e(h+Math.cos(p)*6,u+Math.sin(p)*6)}};a(-9,-6.5,Math.PI,Math.PI*1.5),e(r.to.x,r.to.z),a(6.15,-6.5,Math.PI*1.5,Math.PI*2),e(o.to.x,$a);let c=0;const l=t.map((h,u)=>(u>0&&(c+=Math.hypot(h.x-t[u-1].x,h.z-t[u-1].z)),{...h,s:c}));return this._length=c,l}_sAtServiceZ(t){return this._path[this._path.length-1].s-($a-t)}_at(t){const e=this._path;let n=1;for(;n<e.length-1&&e[n].s<t;)n++;const s=e[n-1],r=e[n],o=r.s-s.s||1,a=Math.min(1,Math.max(0,(t-s.s)/o));return{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a,yaw:Math.atan2(r.x-s.x,r.z-s.z)}}atOrderWindow(t){const e=this._cars.get(t);return!!e&&Math.abs(e.s-this._sOrder)<Ka}atPickup(t){const e=this._cars.get(t);return!!e&&Math.abs(e.s-this._sPickup)<Ka}update(t){if(!(t>0)||this.game.mode!==We.PLAY)return;const e=this.game.shift.rules.orders;for(const r of e.all()){if(r.source!=="drivethru")continue;let o=this._cars.get(r.id);!o&&r.state!=="served"&&(o=this._spawn(r)),o&&(o.order=r)}for(const[r,o]of this._cars)e.get(r)||(o.order={state:"served"});const n=[...this._cars.values()].sort((r,o)=>o.s-r.s);let s=1/0;for(const r of n){const o=r.order,a=o.state==="driveup"?this._sOrder:o.state==="served"?this._sExit:this._sPickup,l=Math.min(a,s-Ny)-r.s;if(l>.001){const u=Math.min(Oy,.8+l*1.4);r.s+=Math.min(l,u*t)}s=r.s;const h=this._at(r.s);r.mesh.position.set(h.x,0,h.z),r.mesh.rotation.y=h.yaw,!r.chimed&&o.state==="driveup"&&Math.abs(r.s-this._sOrder)<Ka&&(r.chimed=!0,this.game.audio.play("kiosk_order",{at:{x:-10,y:1.3,z:Au},rate:.8})),o.state==="served"&&r.s>=this._sExit-.1&&this._despawn(r)}}_spawn(t){const e=this.game.rng.child("car"+t.id),n=Ul(e);Wd(n),this.scene.add(n);const s={id:t.id,order:t,mesh:n,s:0,chimed:!1};return this._cars.set(t.id,s),s}_despawn(t){this.scene.remove(t.mesh),t.mesh.traverse(e=>{var n,s,r,o,a;(s=(n=e.geometry)==null?void 0:n.dispose)==null||s.call(n),e.material&&!((r=e.userData)!=null&&r.shared)&&((a=(o=e.material).dispose)==null||a.call(o))}),this._cars.delete(t.id)}}const An={topSpeed:12,accel:4.5,brake:7,coastDrag:1.2,turnRateAtSpeed:1,turnRateAtCrawl:2.2,mountRange:2.2},ky=1.2,Za={x:-7.9,z:-18.7,heading:Math.PI};class By{constructor(t){this.game=t,this.mesh=C1(),t.renderer.scene.add(this.mesh),this.parked=new I(Za.x,0,Za.z),this.heading=Za.heading,this.lean=0,this.speed=0,this.rider=null,this._syncMesh(),this.point=t.world.addInteractable({id:"delivery_van",label:"take the delivery van",pos:this.parked,action:"vehicle",data:{},radius:An.mountRange}),this._collider=null,this._addParkedCollider()}get isRidden(){return this.rider!==null}_addParkedCollider(){const t=Math.abs(Math.sin(this.heading))>.5,e=(t?4.2:2)/2,n=(t?2:4.2)/2;this._collider={min:new I(this.parked.x-e,0,this.parked.z-n),max:new I(this.parked.x+e,2.2,this.parked.z+n),walkable:!1},this.game.world.colliders.push(this._collider),this.game.world._rebuildSpatialHash()}_removeParkedCollider(){const t=this.game.world.colliders,e=t.indexOf(this._collider);e>=0&&t.splice(e,1),this._collider=null,this.game.world._rebuildSpatialHash()}_syncMesh(){const t=this.rider?this.rider.position:this.parked;this.mesh.position.set(t.x,0,t.z),this.mesh.rotation.y=this.heading,this.mesh.rotation.z=this.lean*.4}mount(){const t=this.game.player;if(this.isRidden||!t||t.isBusy)return!1;this.rider=t,t.vehicle=this,this._removeParkedCollider(),t.position.set(this.parked.x,0,this.parked.z),t.velocity.set(0,0,0),t.facing=this.heading,this.speed=0;const e=this.game.camera;return e.setMode("ride"),e.yaw=this.heading,e.pitch=-.14,this.game.ui.toast("W/S drive, A/D steer, Space brakes. E to get out.",5200),this.game.bus.emit("van:mounted",{}),!0}dismount(){if(!this.isRidden)return!1;const t=this.rider;this.parked.set(t.position.x,0,t.position.z);const e={x:Math.cos(this.heading),z:-Math.sin(this.heading)},n=t.position.clone();return t.position.x+=e.x*1.35,t.position.z+=e.z*1.35,t.position.y=t._floorUnder(),t._insideSolid()&&t.position.copy(n),t.velocity.set(0,0,0),t.vehicle=null,this.rider=null,this.speed=0,this.game.camera.fovBoost=0,this.game.camera.setMode("first"),this._addParkedCollider(),this._syncMesh(),this.game.bus.emit("van:dismounted",{}),!0}ride(t){const e=this.rider;if(!e)return;const n=this.game.input,s=n.axis(),r=s.y,o=s.x;if(r>.01)this.speed+=An.accel*r*t;else if(r<-.01)this.speed>.15?this.speed-=An.brake*t:this.speed-=An.accel*.6*t;else{const g=An.coastDrag*t;this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),g)}if(n.isDown("jump")){const g=An.brake*1.3*t;this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),g)}this.speed=dn.clamp(this.speed,-2.5,An.topSpeed);const a=Math.min(1,Math.abs(this.speed)/An.topSpeed),c=An.turnRateAtCrawl+(An.turnRateAtSpeed-An.turnRateAtCrawl)*a,l=Math.min(1,Math.abs(this.speed)/ky),h=-o*c*l*Math.sign(this.speed||1)*t;this.heading+=h;const u=dn.clamp(-h/Math.max(t,1e-4)*.22*a,-.42,.42);this.lean+=(u-this.lean)*Math.min(1,t*6);const d=Math.sin(this.heading),f=Math.cos(this.heading);e.velocity.x=d*this.speed,e.velocity.z=f*this.speed,e._applyGravity(t),e._collide(t);const m=e._floorUnder();e.position.y<m&&(e.position.y=m,e.velocity.y=0,e.onGround=!0),this.speed=e.velocity.x*d+e.velocity.z*f,e.facing=this.heading,e.horizontalSpeed=0;const _=this.game.camera,p=this.heading-_.yaw;_.yaw+=Math.atan2(Math.sin(p),Math.cos(p))*Math.min(1,t*2.2*a),this.game.camera.fovBoost=7*Math.max(0,this.speed)/An.topSpeed,this._syncMesh()}}const Ru=1.5,vo=4.5,Cu=6,Hy=3,Gy=8,Vy=6.5,Wy=14,Ws={green:11,amber:2.5,allRed:1.5},Ja=Ws.green+Ws.amber+Ws.allRed;class qy{constructor(t){this.game=t;const e=t.renderer.scene;this._t=0,this._lightSig=null,this._lights=[{x:$e.west,z:$e.front},{x:$e.east,z:$e.front},{x:$e.west,z:$e.back},{x:$e.east,z:$e.back}],this._buildPoles(e),this._routes=[];const n={x0:$e.west,z0:$e.back,x1:$e.east,z1:$e.front},s={x0:ii.west,z0:ii.back,x1:ii.east,z1:ii.front};this._addRing(n,"out",3),this._addRing(n,"in",2),this._addRing(s,"out",3),this._addRing(s,"in",2);const r=t.world.rng.child("traffic");for(const o of this._routes)for(let a=0;a<o.carCount;a++){const c=Ul(r);Wd(c),e.add(c),o.cars.push({mesh:c,s:o.length/o.carCount*a+r.range(0,5),v:Cu*.6})}}_addRing(t,e,n){const s=e==="out"?Ru:-Ru,r=t.x0-s,o=t.z0-s,a=t.x1+s,c=t.z1+s,l=e==="out"?[[a,c],[r,c],[r,o],[a,o]]:[[r,c],[a,c],[a,o],[r,o]],h=[];for(let m=0;m<4;m++){const _=l[(m+3)%4],p=l[m],g=l[(m+1)%4],y=Pu(p[0]-_[0],p[1]-_[1]),x=Pu(g[0]-p[0],g[1]-p[1]),M=[p[0]-y[0]*vo,p[1]-y[1]*vo],R=[p[0]+x[0]*vo,p[1]+x[1]*vo],E=[(M[0]+R[0])/2*.45+p[0]*.55,(M[1]+R[1])/2*.45+p[1]*.55];h.push(M,E,R)}h.push([...h[0]]);let u=0;const d=h.map((m,_)=>(_>0&&(u+=Math.hypot(m[0]-h[_-1][0],m[1]-h[_-1][1])),{x:m[0],z:m[1],s:u})),f=[];for(const m of this._lights){let _=null;for(let p=1;p<d.length;p++){const g=Xy(d[p-1],d[p],m);(!_||g.d<_.d)&&(_=g)}if(_&&_.d<8){const p=this._at(d,u,(_.s-3+u)%u),g=Math.abs(Math.sin(p.yaw))>.5?"ew":"ns";f.push({s:(_.s-Vy+u)%u,axis:g})}}this._routes.push({way:d,length:u,stops:f,carCount:n,cars:[]})}_at(t,e,n){n=(n%e+e)%e;let s=1;for(;s<t.length-1&&t[s].s<n;)s++;const r=t[s-1],o=t[s],a=o.s-r.s||1,c=Math.min(1,Math.max(0,(n-r.s)/a));return{x:r.x+(o.x-r.x)*c,z:r.z+(o.z-r.z)*c,yaw:Math.atan2(o.x-r.x,o.z-r.z)}}_phase(t){const e=this._t%(Ja*2),n=e<Ja?"ns":"ew";if(t!==n)return"red";const s=e%Ja;return s<Ws.green?"green":s<Ws.green+Ws.amber?"amber":"red"}_buildPoles(t){const e=o=>new Mn({color:o}),n=o=>Re(o);this._lampMats={red:[n(3806482),e(14826286)],amber:[n(3812368),e(16098851)],green:[n(1126427),e(3653722)]},this._heads=[];const s=Re(Zt.metalDark),r=Re(2237995);for(const o of this._lights)for(const[a,c]of[[1,1],[-1,-1]]){const l=o.x+a*4.4,h=o.z+c*4.4,u=new st(new Ot(.14,3.4,.14),s);u.position.set(l,1.7,h),u.castShadow=!0,t.add(u),this._head(t,r,l,h,c>0?0:Math.PI,"ns",3.05),this._head(t,r,l,h,a>0?Math.PI/2:-Math.PI/2,"ew",2.35)}}_head(t,e,n,s,r,o,a){const c=new jt,l=new st(new Ot(.26,.72,.18),e);l.position.z=.16,l.castShadow=!0,c.add(l);const h={},u=[["red",.22],["amber",0],["green",-.22]];for(const[d,f]of u){const m=new st(new Ot(.15,.15,.03),this._lampMats[d][0]);m.position.set(0,f,.16+.095),c.add(m),h[d]=m}c.position.set(n,a,s),c.rotation.y=r,t.add(c),this._heads.push({axis:o,lamps:h})}_paintLights(){const t=`${this._phase("ns")}|${this._phase("ew")}`;if(t!==this._lightSig){this._lightSig=t;for(const e of this._heads){const n=this._phase(e.axis);e.lamps.red.material=this._lampMats.red[n==="red"?1:0],e.lamps.amber.material=this._lampMats.amber[n==="amber"?1:0],e.lamps.green.material=this._lampMats.green[n==="green"?1:0]}}}update(t){this._t+=t,this._paintLights();const e=this.game.player.position;for(const n of this._routes){const{cars:s,length:r,way:o}=n;for(const a of s){let c=Cu,l=1/0;for(const m of s){if(m===a)continue;const _=(m.s-a.s+r)%r;_>.01&&_<l&&(l=_)}l<Gy&&(c=Math.min(c,Math.max(0,(l-4.6)*1.2)));for(const m of n.stops){const _=(m.s-a.s+r)%r;_<Wy&&this._phase(m.axis)!=="green"&&(c=Math.min(c,Math.max(0,(_-.5)*1.3)))}const h=this._at(o,r,a.s+2.6),u=e.x-h.x,d=e.z-h.z;u*u+d*d<3.4*3.4&&(c=0),a.v+=dn.clamp(c-a.v,-6.5*t,Hy*t),a.s=(a.s+a.v*t)%r;const f=this._at(o,r,a.s);a.mesh.position.set(f.x,0,f.z),a.mesh.rotation.y=f.yaw}}}}function Pu(i,t){const e=Math.hypot(i,t)||1;return[i/e,t/e]}function Xy(i,t,e){const n=t.x-i.x,s=t.z-i.z,r=n*n+s*s||1,o=Math.max(0,Math.min(1,((e.x-i.x)*n+(e.z-i.z)*s)/r)),a=i.x+n*o,c=i.z+s*o;return{d:Math.hypot(e.x-a,e.z-c),s:i.s+Math.sqrt(r)*o}}const Lu=2,Iu=[14,40],Yy=[2,4.5];class jy{constructor(t){this.game=t;const e=t.renderer.scene,n=t.world.rng.child("pedestrians");this._loops=[];const s={x0:$e.west,z0:$e.back,x1:$e.east,z1:$e.front},r={x0:ii.west,z0:ii.back,x1:ii.east,z1:ii.front};this._addLoop(s,+zs,3),this._addLoop(s,-zs,3),this._addLoop(r,+zs,2),this._addLoop(r,-zs,2),this._walkers=[];for(const o of this._loops)for(let a=0;a<o.count;a++){const c=Qs[n.int(0,Qs.length-1)],l=new Zo({skin:Zt.skinTones[c.skin%Zt.skinTones.length],hair:Zt.hairTones[c.hair%Zt.hairTones.length],hairStyle:c.hairStyle,height:c.height,build:c.build});l.applyOutfit({top:{colour:c.top},bottom:{colour:c.bottom},shoes:{colour:2764083}}),e.add(l.group),this._walkers.push({avatar:l,loop:o,s:o.length/o.count*a+n.range(0,8),dir:n.range(0,1)<.5?1:-1,speed:n.range(1.05,1.5),pause:n.range(...Iu),paused:0})}}_addLoop(t,e,n){const s=t.x0-e,r=t.z0-e,o=t.x1+e,a=t.z1+e,c=[[o,a],[s,a],[s,r],[o,r]],l=[];for(let d=0;d<4;d++){const f=c[(d+3)%4],m=c[d],_=c[(d+1)%4],p=Du(m,f,Lu),g=Du(m,_,Lu);l.push(p,g)}l.push([...l[0]]);let h=0;const u=l.map((d,f)=>(f>0&&(h+=Math.hypot(d[0]-l[f-1][0],d[1]-l[f-1][1])),{x:d[0],z:d[1],s:h}));this._loops.push({way:u,length:h,count:n})}_at(t,e){e=(e%t.length+t.length)%t.length;const n=t.way;let s=1;for(;s<n.length-1&&n[s].s<e;)s++;const r=n[s-1],o=n[s],a=o.s-r.s||1,c=Math.min(1,Math.max(0,(e-r.s)/a));return{x:r.x+(o.x-r.x)*c,z:r.z+(o.z-r.z)*c,dx:(o.x-r.x)/a,dz:(o.z-r.z)/a}}update(t){if(!(t>0)||this.game.mode!==We.PLAY)return;const e=this.game.player.position;for(const n of this._walkers){let s=n.speed;n.paused>0?(n.paused-=t,s=0):(n.pause-=t,n.pause<=0&&(n.paused=Uu(...Yy),n.pause=Uu(...Iu)));const r=this._at(n.loop,n.s),o=e.x-r.x,a=e.z-r.z;o*o+a*a<1.4*1.4&&(s=0),n.s+=s*n.dir*t;const c=this._at(n.loop,n.s);n.avatar.group.position.set(c.x,0,c.z),s>.01&&(n.avatar.group.rotation.y=Math.atan2(c.dx*n.dir,c.dz*n.dir)),n.avatar.update(t,s,{})}}}function Du(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s)||1;return[i[0]+n/r*e,i[1]+s/r*e]}function Uu(i,t){return i+Math.random()*(t-i)}const Ky=1.75,mr=.5,sl=.7,$y=1.8,rl=.6,Ls=.5,fr=mr+sl+$y+rl+Ls;class Zy{constructor(t){this.game=t,this._moments=new Map,t.bus.on(de.ORDER_SERVED,({id:e})=>{const n=t.shift.rules.orders.get(e);!n||n.source!=="delivery"||n.house==null||this._answer(n.house)})}_answer(t){if(this._moments.has(t))return;const e=os[t],n=$d[t];if(!e||!n)return;const s=Qs[t%Qs.length],r=new Zo({skin:Zt.skinTones[s.skin%Zt.skinTones.length],hair:Zt.hairTones[s.hair%Zt.hairTones.length],hairStyle:s.hairStyle,height:s.height,build:s.build});r.applyOutfit({top:{colour:s.top},bottom:{colour:s.bottom},shoes:{colour:3354668}});const o={x:Math.sin(n.rotY),z:Math.cos(n.rotY)},a={x:e.door.x-o.x*1.6,z:e.door.z-o.z*1.6},c={x:e.door.x-o.x*.7,z:e.door.z-o.z*.7};r.group.position.set(a.x,0,a.z),r.group.rotation.y=n.rotY,this.game.renderer.scene.add(r.group),this.game.audio.play("order_taken",{at:{x:e.door.x,y:1.4,z:e.door.z}}),this._moments.set(t,{t:0,hinge:n.hinge,avatar:r,from:a,to:c})}update(t){if(t>0)for(const[e,n]of this._moments){n.t+=t;const s=n.t;let r;s<mr?r=yo(s/mr):s<fr-Ls?r=1:r=1-yo((s-(fr-Ls))/Ls),n.hinge.rotation.y=Ky*Math.max(0,Math.min(1,r));const o=mr,a=mr+sl,c=fr-Ls-rl,l=fr-Ls;let h=0,u=0;s<o?h=0:s<a?(h=yo((s-o)/sl),u=1):s<c?h=1:s<l&&(h=1-yo((s-c)/rl),u=1),n.avatar.group.position.set(n.from.x+(n.to.x-n.from.x)*h,0,n.from.z+(n.to.z-n.from.z)*h),n.avatar.update(t,u,{}),s>=fr&&(n.hinge.rotation.y=0,this.game.renderer.scene.remove(n.avatar.group),n.avatar.dispose(),this._moments.delete(e))}}}function yo(i){return i*i*(3-2*i)}const ln={x:Ns.x,y:yt.benchH+.045,z:Ns.z},Nu={z:yt.z1-.15,y:yt.benchH+.002},Jy=1.1,Qy={heel:.02,smear:.005,chips:.01,leaf:.014,slice:.011,flat:.006,disc:.018,crown:.036},tM=.72;class eM{constructor(t){this.game=t;const e=t.renderer.scene;this.group=new jt,this.group.name="build-board",e.add(this.group),this._sig=null,this._mats=[],this._piles=[],this._pilePos=[],this._pileOrderId=null,this._parcel=new jt;const n=new st(new Ot(.115,.055,.115),new Ni({color:15262418}));n.castShadow=!0;const s=new st(new Ot(.118,.016,.05),new Ni({color:11026479}));s.position.y=.02,this._parcel.add(n,s),this._parcel.visible=!1,e.add(this._parcel),this.slidingId=null,this._slide=null,this._fixturePos={};for(const r of t.world.activeInteractables())r.id==="pod_toaster"?this._fixturePos.bun=r.pos:r.id==="pod_uhc"?(this._fixturePos.patty=r.pos,this._fixturePos.fillet=r.pos):r.id.startsWith("pod_gun_")?this._fixturePos[r.id.slice(8)]=r.pos:r.id.startsWith("pod_bin_")?this._fixturePos[r.id.slice(8)]=r.pos:r.id==="landing_handover"?this._landingPos=r.pos:r.id==="till_order"&&(this._tillPos=r.pos);this._pulses=[];for(let r=0;r<6;r++){const o=new st(new Xe(.16,.16),new Mn({color:16777215,transparent:!0,opacity:0,blending:Io,depthWrite:!1}));o.visible=!1,o.rotation.x=-.4,e.add(o),this._pulses.push({mesh:o,life:0})}this._bunHalf=Jn("bun",zi.bun.colour),this._bunHalf.visible=!1,e.add(this._bunHalf),this._eject=null,this._wire()}_wire(){const t=this.game.bus,e=this.game.audio,n=s=>s?{at:{x:s.x,y:s.y,z:s.z}}:{};t.on(de.ORDER_STEP,({added:s})=>{const r=this._fixturePos[s],o=zi[s];r&&o&&this._pulse(r,o.colour),s==="bun"&&(this._eject={t:0}),e.play("item_place",{...n(r),rate:.94+Math.random()*.12})}),t.on(de.POD_REFUSED,()=>{e.play("wrong_item",n({x:yt.cx,y:1.2,z:yt.cz}))}),t.on(de.ORDER_BUILT,()=>{e.play("item_pickup",n({x:ln.x,y:1,z:ln.z}))}),t.on(de.ORDER_WRAPPED,()=>{e.play("item_place",{...n({x:ln.x,y:1,z:ln.z}),rate:.8})}),t.on(de.ORDER_READY,({id:s})=>{this.slidingId=s,this._slide={t:0},e.play("item_drop",{...n({x:ge.x0,y:1,z:ge.z0}),rate:1.15})}),t.on(de.ORDER_SERVED,({id:s})=>{const r=this.game.shift.rules.orders.get(s),o=(r==null?void 0:r.source)==="drivethru"?{x:9.9,y:1.2,z:-1}:this._landingPos;e.play("order_complete",n(o))}),t.on(de.COUNTER_TAKEN,()=>e.play("order_taken",n(this._tillPos))),t.on(de.COUNTER_PAID,()=>e.play("purchase",n(this._tillPos))),t.on(de.ORDER_OFFERED,({source:s})=>{var r;if(s==="kiosk"){const o=(r=this.game.world.spots)==null?void 0:r.kiosk_1;e.play("kiosk_order",n(o&&{x:o.x,y:1.4,z:o.z}))}})}_pulse(t,e){const n=this._pulses.find(s=>s.life<=0)||this._pulses[0];n.life=.35,n.mesh.material.color.set(e),n.mesh.position.set(t.x,t.y+.06,t.z+.02),n.mesh.visible=!0}update(t){this._syncStack(),this._animate(t)}_syncStack(){var o;const t=this.game.shift.rules.orders.active(),e=t?`${t.id}:${t.step}:${t.state}`:null;if(e===this._sig)return;this._sig=e;for(const a of[...this.group.children])this.group.remove(a);for(const a of this._mats)a.dispose();if(this._mats=[],this._piles=[],this._parcel.visible=this._slide!==null,(!t||this._pileOrderId!==t.id)&&(this._pilePos=[],this._pileOrderId=(t==null?void 0:t.id)??null),!t||t.state==="ready")return;if(t.state==="wrapped"){this._parcel.visible=!0,this._parcel.position.set(ln.x,ln.y+.028,ln.z),this._parcel.rotation.set(0,.12,0);return}const n=t.items.map((a,c)=>{var l;return Fi[a].sequence.length+((l=t.mods)!=null&&l[c]?1:0)});let s=0,r=0;for(let a=0;a<n.length&&s<t.step;a++){const c=s,l=Math.min(t.step-c,n[a]);if(s+=n[a],l<=0)break;const h=l===n[a],u=new jt,d=(p,g)=>((t.id*7+(c+p)*13)%5-2)*.003*g;let f=0;for(let p=0;p<l;p++){const g=zi[t.sequence[c+p]];if(!g)continue;const y=Qy[g.shape]??.012;this._layer(u,g,f+y/2,d(p,1),d(p,-1)),f+=y}if(h){const p=Jn("bun",zi.bun.colour);this._own(p),p.position.y=f,u.add(p)}let m;if(h)m=new I(ln.x+(r%2?.075:-.075)*(n.length>1?1:0),ln.y,ln.z),r++;else{const p=t.sequence[c+l-1],g=((o=this._fixturePos[p])==null?void 0:o.x)??ln.x;m=new I(g,Nu.y,Nu.z)}const _=this._pilePos[a];u.position.copy(_||m),this.group.add(u),this._piles.push({group:u,target:m,item:a})}}_layer(t,e,n,s,r){const o=(a,c=1,l=1,h=1,u=0,d=0)=>{this._own(a),a.scale.multiply(new I(c,l,h)),a.position.set(s+u,n,r+d),t.add(a)};switch(e.shape){case"smear":o(Jn("flat",e.colour),.62,.5,.62);break;case"chips":o(Jn("chip",e.colour),1,1,1,-.018,-.008),o(Jn("chip",e.colour),1,1,1,.016,-.014),o(Jn("chip",e.colour),1,1,1,.004,.019);break;case"leaf":o(Jn("blob",e.colour),1.5,.38,1.5);break;case"slice":o(Jn("disc",e.colour),.92,.6,.92);break;default:o(Jn(e.shape,e.colour))}}_own(t){t.traverse(e=>{e.material&&this._mats.push(e.material)})}_animate(t){var e,n;for(const s of this._piles){const r=s.group,o=s.target,a=o.x-r.position.x,c=o.y-r.position.y,l=o.z-r.position.z,h=Math.hypot(a,c,l);if(h>5e-4){const u=Math.min(h,Jy*t);r.position.x+=a/h*u,r.position.y+=c/h*u,r.position.z+=l/h*u}((e=this._pilePos)[n=s.item]||(e[n]=new I)).copy(r.position)}for(const s of this._pulses)s.life<=0||(s.life-=t,s.mesh.material.opacity=Math.max(0,s.life/.35)*.9,s.life<=0&&(s.mesh.visible=!1));if(this._eject){const s=this._fixturePos.bun;this._eject.t+=t/.35;const r=Math.min(1,this._eject.t);s&&(this._bunHalf.visible=!0,this._bunHalf.position.set(s.x,yt.benchH+.3-.27*r*r,yt.cz+.24+.16*r),this._bunHalf.rotation.x=.3*(1-r)),r>=1&&(this._eject=null,this._bunHalf.visible=!1)}if(this._slide){this._slide.t+=t/tM;const s=Math.min(1,this._slide.t),r=this.game.shift.rules.orders.ready(),o=Math.max(0,Math.min(r.findIndex(_=>_.id===this.slidingId),3)),a={x:Vs.x0+.22+o*.42,y:Vs.y+.03,z:Vs.z},c=[{x:ln.x,y:ln.y+.03,z:ln.z},{x:ge.x0,y:1,z:ge.z0},{x:ge.x1,y:.93,z:ge.z1},a],l=[.18,.62,1];let h=0;for(;h<2&&s>l[h];)h++;const u=h===0?0:l[h-1],d=(s-u)/(l[h]-u),f=c[h],m=c[h+1];this._parcel.visible=!0,this._parcel.scale.setScalar(1.25-.25*s),this._parcel.position.set(f.x+(m.x-f.x)*d,f.y+(m.y-f.y)*d,f.z+(m.z-f.z)*d),this._parcel.rotation.y+=t*2.2,s>=1&&(this._slide=null,this.slidingId=null,this._parcel.visible=!1,this._parcel.rotation.set(0,0,0),this._parcel.scale.setScalar(1))}}}const yn=.34,Ou=1.75,nM=1.62,iM=22,Qa=.42,sM={top:{colour:3817286},bottom:{colour:2303531},shoes:{colour:2764083},head:{id:"cap",colour:11026479}};class rM{constructor(t){var n,s,r;this.game=t,this.position=new I(0,0,0),this.velocity=new I,this.facing=0,this.onGround=!0,this.state="normal",this.eyeHeight=nM,this.horizontalSpeed=0,this.avatar=new Zo({skin:(n=Zt.skinTones)==null?void 0:n[1],hair:(s=Zt.hairTones)==null?void 0:s[1],hairStyle:"short",height:1,build:1}),this.avatar.applyOutfit(sM),t.renderer.scene.add(this.avatar.group);const e=(r=t.world.spots)==null?void 0:r.spawn;this.teleport(e?e.clone():new I(0,0,14)),this.walkSpeed=4.6,this.runSpeed=9}teleport(t){this.position.copy(t),this.velocity.set(0,0,0),this.avatar.group.position.copy(t)}get isBusy(){return this.state!=="normal"}update(t){if(this.vehicle){this.game.mode===We.PLAY&&this.vehicle.ride(t),this.avatar.group.position.copy(this.position),this.avatar.group.rotation.y=this.facing,this.avatar.update(t,0,{sitting:!0});return}this.state==="normal"&&this.game.mode===We.PLAY?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this.state==="normal"&&this._applyGravity(t)),this.avatar.group.position.copy(this.position),this.avatar.group.rotation.y=this.facing,this.avatar.update(t,this.horizontalSpeed,{sitting:!1,sleeping:!1,tired:!1})}_move(t){const e=this.game.input,n=e.axis(),{forward:s,right:r}=this.game.camera.basis(),o=e.isDown("sprint"),a=o?this.runSpeed:this.walkSpeed,c=new I().addScaledVector(s,n.y).addScaledVector(r,n.x);c.lengthSq()>0?(c.normalize(),this.facing=Math.atan2(c.x,c.z),this.game.camera.fovBoost=o?5:0):this.game.camera.fovBoost=0;const l=c.multiplyScalar(a),h=this.onGround?14:3;this.velocity.x+=(l.x-this.velocity.x)*Math.min(1,h*t),this.velocity.z+=(l.z-this.velocity.z)*Math.min(1,h*t),e.wasPressed("jump")&&this.onGround&&(this.velocity.y=6.2,this.onGround=!1),this._applyGravity(t),this._collide(t);const u=this._floorUnder();this.position.y<u&&(this.position.y=u,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_floorUnder(){const t=this.game.world,{x:e,z:n,y:s}=this.position;let r=t.groundHeight(e,n);for(const o of t.query(this.position,yn+.5))o.walkable&&(e<o.min.x-yn||e>o.max.x+yn||n<o.min.z-yn||n>o.max.z+yn||o.max.y<=s+Qa&&o.max.y>r&&(r=o.max.y));return r}_insideSolid(){const t=this.game.world,e=yn-.06;for(const n of t.query(this.position,yn+.3)){if(this.position.y+Ou<n.min.y||this.position.y>n.max.y||n.max.y<=this.position.y+Qa)continue;const s=Math.max(n.min.x,Math.min(this.position.x,n.max.x)),r=Math.max(n.min.z,Math.min(this.position.z,n.max.z)),o=this.position.x-s,a=this.position.z-r;if(o*o+a*a<e*e)return!0}return!1}_applyGravity(t){this.velocity.y-=iM*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder();this.position.y<=e&&(this.position.y=e,this.velocity.y=0,this.onGround=!0)}_collide(t){const e=this.game.world;this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let s=0;s<4;s++){let r=!1;for(const o of e.query(this.position,yn+.6)){if(this.position.y+Ou<o.min.y||this.position.y>o.max.y||o.max.y<=this.position.y+Qa)continue;const a=Math.max(o.min.x,Math.min(this.position.x,o.max.x)),c=Math.max(o.min.z,Math.min(this.position.z,o.max.z));let l=this.position.x-a,h=this.position.z-c;const u=l*l+h*h;if(u>=yn*yn)continue;if(u>1e-8){const f=Math.sqrt(u),m=yn-f;l/=f,h/=f,this.position.x+=l*m,this.position.z+=h*m}else{const f=[[this.position.x-o.min.x,-1,0],[o.max.x-this.position.x,1,0],[this.position.z-o.min.z,0,-1],[o.max.z-this.position.z,0,1]].sort((m,_)=>m[0]-_[0])[0];l=f[1],h=f[2],this.position.x+=l*(f[0]+yn),this.position.z+=h*(f[0]+yn)}const d=this.velocity.x*l+this.velocity.z*h;d<0&&(this.velocity.x-=l*d,this.velocity.z-=h*d),r=!0}if(!r)break}this._insideSolid()?(this._lastSafe&&this.position.copy(this._lastSafe),this.velocity.x=0,this.velocity.z=0):(this._lastSafe||(this._lastSafe=new I)).copy(this.position);const n=180;this.position.x=dn.clamp(this.position.x,-n,n),this.position.z=dn.clamp(this.position.z,-n,n)}setState(t){this.state=t,this.game.bus.emit("player:state",{state:t})}serialize(){return{position:this.position.toArray(),facing:this.facing}}load(t){t&&(this.teleport(new I().fromArray(t.position)),this.position.y=Math.max(this.position.y,this._floorUnder()),this.avatar.group.position.copy(this.position),this.facing=t.facing||0)}}const Mo=210,tc=330,So=2,Ve={x:10,y:34,w:190,h:218};class oM{constructor(t){this.game=t,this._repaint=0;const e=document.createElement("canvas");e.id="gps",e.width=Mo*So,e.height=tc*So,document.getElementById("ui").appendChild(e),this.el=e,this.ctx=e.getContext("2d"),this._visible=!1,this._buildGraph()}_buildGraph(){const t=$e,e=ii,n=this._nodes=[{x:t.west,z:t.front},{x:t.east,z:t.front},{x:t.west,z:t.back},{x:t.east,z:t.back},{x:t.west,z:e.front},{x:t.east,z:e.front},{x:t.west,z:e.back},{x:t.east,z:e.back},{x:e.west,z:t.front},{x:e.east,z:t.front},{x:e.west,z:t.back},{x:e.east,z:t.back},{x:e.west,z:e.front},{x:e.east,z:e.front},{x:e.west,z:e.back},{x:e.east,z:e.back}];this._edges=[[0,1],[2,3],[0,2],[1,3],[0,4],[1,5],[2,6],[3,7],[0,8],[1,9],[2,10],[3,11],[12,4],[4,5],[5,13],[14,6],[6,7],[7,15],[12,8],[8,10],[10,14],[13,9],[9,11],[11,15]].map(([s,r])=>({a:s,b:r,len:Math.hypot(n[s].x-n[r].x,n[s].z-n[r].z)})),this._decor=[[[-14.4,31.5],[-14.4,26]],[[12.15,31.5],[12.15,26]],[[-21,31.5],[-21,-19.2]],[[-21,-19.2],[-5.5,-19.2]],[[-5.5,-19.2],[-5.5,-31]]]}_snap(t,e){let n=null;const s=this._nodes;return this._edges.forEach((r,o)=>{const a=s[r.a],c=s[r.b],l=c.x-a.x,h=c.z-a.z,u=Math.max(0,Math.min(1,((t-a.x)*l+(e-a.z)*h)/(l*l+h*h))),d=a.x+l*u,f=a.z+h*u,m=Math.hypot(t-d,e-f);(!n||m<n.d)&&(n={i:o,t:u,px:d,pz:f,d:m})}),n}_route(t,e){if(t.i===e.i){const _=Math.abs(e.t-t.t)*this._edges[t.i].len;return{pts:[t,e].map(p=>({x:p.px,z:p.pz})),len:_}}const n=this._nodes.length,s=new Array(n).fill(1/0),r=new Array(n).fill(-1),o=this._edges[t.i],a=this._edges[e.i];s[o.a]=t.t*o.len,s[o.b]=(1-t.t)*o.len;const c=new Array(n).fill(!1);for(let _=0;_<n;_++){let p=-1;for(let g=0;g<n;g++)!c[g]&&(p<0||s[g]<s[p])&&(p=g);if(p<0||s[p]===1/0)break;c[p]=!0;for(let g=0;g<this._edges.length;g++){const y=this._edges[g],x=y.a===p?y.b:y.b===p?y.a:-1;if(x<0)continue;const M=s[p]+y.len;M<s[x]&&(s[x]=M,r[x]=p)}}const l=s[a.a]+e.t*a.len,h=s[a.b]+(1-e.t)*a.len;let u=l<=h?a.a:a.b;const d=Math.min(l,h),f=[];for(;u>=0;)f.unshift(u),u=r[u];const m=[{x:t.px,z:t.pz}];for(const _ of f)m.push({x:this._nodes[_].x,z:this._nodes[_].z});return m.push({x:e.px,z:e.pz}),{pts:m,len:d}}update(t){const e=!!this.game.player.vehicle;e!==this._visible&&(this._visible=e,this.el.classList.toggle("on",e)),e&&(this._repaint-=t,!(this._repaint>0)&&(this._repaint=.12,this._paint()))}_paint(){const t=this.game,e=this.ctx;e.setTransform(So,0,0,So,0,0);const n=t.shift.rules.orders.carriedBy("player"),s=n&&n.source==="delivery"?n:null,o=s?os[s.house].door:{x:-5.5,z:-19},a=s?os[s.house].name:"back to the Barn",c=t.player.position,l=this._route(this._snap(c.x,c.z),this._snap(o.x,o.z));e.clearRect(0,0,Mo,tc),zu(e,0,0,Mo,tc,18),e.fillStyle="rgba(16, 19, 24, 0.94)",e.fill(),e.strokeStyle="rgba(241, 236, 225, 0.18)",e.lineWidth=1.5,e.stroke(),e.fillStyle="#c9a961",e.font="bold 13px Segoe UI, system-ui, sans-serif",e.fillText("BARN MAPS",12,22),e.fillStyle="#9aa3ad",e.font="11px Segoe UI, system-ui, sans-serif",e.textAlign="right",e.fillText(t.clock.timeLabel,Mo-12,22),e.textAlign="left",zu(e,Ve.x,Ve.y,Ve.w,Ve.h,8),e.save(),e.clip(),e.fillStyle="#151b14",e.fillRect(Ve.x,Ve.y,Ve.w,Ve.h);const h=Math.min(Ve.w/215,Ve.h/195),u=g=>Ve.x+Ve.w/2+g*h,d=g=>Ve.y+Ve.h/2+g*h;e.strokeStyle="#3b4451",e.lineWidth=4,e.lineCap="round";for(const g of this._edges){const y=this._nodes[g.a],x=this._nodes[g.b];e.beginPath(),e.moveTo(u(y.x),d(y.z)),e.lineTo(u(x.x),d(x.z)),e.stroke()}e.lineWidth=2.5;for(const[g,y]of this._decor)e.beginPath(),e.moveTo(u(g[0]),d(g[1])),e.lineTo(u(y[0]),d(y[1])),e.stroke();e.fillStyle="#a8402f",e.fillRect(u(-2)-4,d(-1)-3.5,8,7),e.strokeStyle="#c9a961",e.lineWidth=2.5,e.beginPath(),l.pts.forEach((g,y)=>y?e.lineTo(u(g.x),d(g.z)):e.moveTo(u(g.x),d(g.z))),e.stroke();const f=u(o.x),m=d(o.z);e.strokeStyle="#e2543e",e.lineWidth=2,e.beginPath(),e.moveTo(f,m),e.lineTo(f,m-9),e.stroke(),e.fillStyle="#e2543e",e.beginPath(),e.arc(f,m-11,3.5,0,Math.PI*2),e.fill();const _=t.deliveryCar.heading;e.save(),e.translate(u(c.x),d(c.z)),e.rotate(Math.PI-_),e.fillStyle="#f1ece1",e.beginPath(),e.moveTo(0,-6),e.lineTo(4.5,5),e.lineTo(0,2.4),e.lineTo(-4.5,5),e.closePath(),e.fill(),e.restore(),e.restore(),e.fillStyle="#f1ece1",e.font="bold 15px Segoe UI, system-ui, sans-serif",e.fillText(a,12,Ve.y+Ve.h+26),e.fillStyle="#9aa3ad",e.font="12px Segoe UI, system-ui, sans-serif";const p=Math.round((l.len+5)/5)*5;e.fillText(s?`${p} m by road · #${s.id}`:`${p} m by road`,12,Ve.y+Ve.h+44)}}function zu(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}class aM{constructor(t){this.game=t;const e=document.getElementById("ui");e.innerHTML=`
      <div id="crosshair"></div>
      <div id="prompt"><span class="key">E</span><span id="prompt-label"></span></div>
      <div id="toast"></div>
      <div id="pause">
        <h1>BURGER BARN</h1>
        <p>Click to walk in &middot; WASD to move &middot; E to use &middot; Shift to run &middot; V for camera</p>
      </div>`,this.prompt=document.getElementById("prompt"),this.promptLabel=document.getElementById("prompt-label"),this.toastEl=document.getElementById("toast"),this.pauseEl=document.getElementById("pause"),this._toastTimer=null,this.pauseEl.addEventListener("click",()=>t.setMode(We.PLAY,"resume")),t.bus.on("game:mode",({mode:n})=>{this.pauseEl.classList.toggle("hidden",n===We.PLAY)}),t.bus.on("interaction:target",({label:n})=>this.showPrompt(n)),this.gps=new oM(t)}showPrompt(t){if(!t){this.prompt.style.display="none";return}this.promptLabel.textContent=t,this.prompt.style.display="block"}toast(t,e=2600){this.toastEl.textContent=t,this.toastEl.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this.toastEl.style.opacity="0"},e)}update(t){this.gps.update(t)}}const We={PLAY:"play",MENU:"menu"};class cM{constructor(t,e={}){this.canvas=t,this.seed=e.seed||"burgerbarn",this.bus=new cf,this.rng=new Ho(this.seed),this.clock=new lf(this.bus),this.input=new df(this.bus,t),this.audio=new yf(this),this.mode=We.MENU,this.running=!1,this._accum=0,this._last=0,this.fixedStep=1/60}build(){return this.renderer=new zv(this.canvas,this),this.world=new Z1(this),this.world.generate(),this.player=new rM(this),this.camera=new kv(this),this.interaction=new Q1(this),this.shift=new uy(this),this.customers=new Uy(this),this.cars=new Fy(this),this.deliveryCar=new By(this),this.traffic=new qy(this),this.pedestrians=new jy(this),this.houseLife=new Zy(this),this.buildBoard=new eM(this),this.ui=new aM(this),this.camera.setMode("first"),this.camera.yaw=Math.PI,this._wireGlobalInput(),this.input.enabled=!1,this.bus.emit("game:ready",{game:this}),this}_wireGlobalInput(){this.bus.on("action:camera",()=>{this.mode===We.PLAY&&this.camera.cycle()}),this.bus.on("input:pointerlock",({locked:t})=>{!t&&this.mode===We.PLAY&&this.setMode(We.MENU,"pause")})}setMode(t,e=""){if(this.mode===t)return;const n=this.mode;this.mode=t,this.clock.paused=t===We.MENU,this.input.enabled=t===We.PLAY,t===We.PLAY?this.input.requestLock():n===We.PLAY&&this.input.locked&&this.input.releaseLock(),this.bus.emit("game:mode",{mode:t,prev:n,reason:e})}start(){this.running=!0,this._last=performance.now();const t=e=>{if(!this.running)return;requestAnimationFrame(t);let n=(e-this._last)/1e3;this._last=e,n>.25&&(n=.25),this.update(n),this.render(n)};requestAnimationFrame(t)}update(t){this.mode===We.PLAY&&this.clock.update(t),this._accum+=t;let e=0;for(;this._accum>=this.fixedStep&&e++<5;)this._accum-=this.fixedStep,this.player.update(this.fixedStep);this.camera.update(t),this.world.update(t),this.interaction.update(t),this.shift.update(t),this.buildBoard.update(t),this.customers.update(t),this.cars.update(t),this.traffic.update(t),this.pedestrians.update(t),this.houseLife.update(t),this.ui.update(t),this.audio.update(t),this.input.endFrame()}render(t){this.renderer.render(this.camera.active,t)}}const Lo=document.getElementById("scene"),hn=new cM(Lo,{seed:new URLSearchParams(location.search).get("seed")||"burgerbarn"});hn.build();hn.start();window.game=hn;window.shot=async function(t="shot",e=null){if(e){if(e.pos){const c=hn.player.position.clone();c.set(e.pos[0],e.pos[1]??0,e.pos[2]),hn.player.teleport(c)}e.mode&&hn.camera.setMode(e.mode),e.yaw!==void 0&&(hn.camera.yaw=e.yaw),e.pitch!==void 0&&(hn.camera.pitch=e.pitch)}const n=1280,s=720;(Lo.width!==n||Lo.height!==s)&&(hn.renderer.renderer.setSize(n,s,!1),hn.camera.active.aspect=n/s,hn.camera.active.updateProjectionMatrix());const r=Math.max(1,(e==null?void 0:e.settle)??90);for(let c=0;c<r;c++)hn.update(1/60);if(e!=null&&e.free){const c=hn.camera.active;c.position.set(...e.free.pos),c.lookAt(...e.free.look)}hn.render(0);const o=Lo.toDataURL("image/png");return(await fetch("http://localhost:5199/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:o})})).json()};
