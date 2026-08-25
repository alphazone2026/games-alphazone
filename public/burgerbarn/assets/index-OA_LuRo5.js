var Au=Object.defineProperty;var Ru=(i,t,e)=>t in i?Au(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Fc=(i,t,e)=>Ru(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Cu(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function Pu(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class so{constructor(t="lifesim"){this.seed=String(t),this._next=Pu(Cu(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new so(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}class Lu{constructor(){this._handlers=new Map,this._log=[]}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this.off(t,e)}once(t,e){const n=this.on(t,s=>{n(),e(s)});return n}off(t,e){var n;(n=this._handlers.get(t))==null||n.delete(e)}emit(t,e={}){this._log.push({type:t,payload:e,at:performance.now()}),this._log.length>400&&this._log.shift();const n=this._handlers.get(t);if(n)for(const a of[...n])a(e,t);const s=t.split(":")[0]+":*",r=this._handlers.get(s);if(r)for(const a of[...r])a(e,t);const o=this._handlers.get("*");if(o)for(const a of[...o])a(e,t)}recent(t=40){return this._log.slice(-t)}}class Du{constructor(t,e={}){this.bus=t,this.minuteOfDay=e.minuteOfDay??10*60+30,this.dayIndex=e.dayIndex??0,this.scale=e.scale??.3,this.paused=!1,this.playtimeSeconds=0,this._lastHour=Math.floor(this.minuteOfDay/60)}get hour(){return Math.floor(this.minuteOfDay/60)}get minute(){return Math.floor(this.minuteOfDay%60)}get dayFraction(){return this.minuteOfDay/1440}get dayOfYear(){return this.dayIndex%364}get timeLabel(){const t=this.hour,e=this.minute,n=t<12?"am":"pm";return(t%12===0?12:t%12)+":"+String(e).padStart(2,"0")+n}update(t){this.paused||(this.playtimeSeconds+=t,this.advance(t*this.scale))}advance(t){if(t<=0)return;let e=t;for(;e>0;){const n=60-this.minuteOfDay%60,s=Math.min(e,n);this.minuteOfDay+=s,e-=s,this.minuteOfDay>=1440&&(this.minuteOfDay-=1440,this.dayIndex++,this.bus.emit("time:day",{dayIndex:this.dayIndex,clock:this}));const r=Math.floor(this.minuteOfDay/60)%24;r!==this._lastHour&&(this._lastHour=r,this.bus.emit("time:hour",{hour:r,clock:this}))}this.bus.emit("time:minute",{clock:this})}skipTo(t,e=0){const n=t*60+e,s=n>this.minuteOfDay?n-this.minuteOfDay:1440-this.minuteOfDay+n;return this.advance(s),s}serialize(){return{minuteOfDay:this.minuteOfDay,dayIndex:this.dayIndex,playtimeSeconds:this.playtimeSeconds}}load(t){t&&(this.minuteOfDay=t.minuteOfDay,this.dayIndex=t.dayIndex,this.playtimeSeconds=t.playtimeSeconds||0,this._lastHour=this.hour)}}const Iu={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],cancel:["Escape"]},Uu=2e3;class Nu{constructor(t,e){this.bus=t,this.dom=e,this.bindings={...Iu},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",t=>{if(t.repeat)return;Object.values(this.bindings).some(n=>n.includes(t.code))&&t.code!=="Escape"&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code),this.bus.emit("input:key",{code:t.code});for(const[n,s]of Object.entries(this.bindings))s.includes(t.code)&&this.bus.emit("action:"+n,{})}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",t=>this._failLock(t)),window.addEventListener("mousemove",t=>{this.locked&&(this.mouse.dx+=t.movementX,this.mouse.dy+=t.movementY)}),window.addEventListener("mousedown",t=>{this.pressed.add("Mouse"+t.button),this.down.add("Mouse"+t.button)}),window.addEventListener("mouseup",t=>this.down.delete("Mouse"+t.button)),window.addEventListener("wheel",t=>{this.bus.emit("input:wheel",{delta:Math.sign(t.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this.lockPending;this._settleLock(),e&&(this.locked=!1,console.warn("[input] pointer lock request refused",t||""),this.bus.emit("input:pointerlockfailed",{error:t||null}))}requestLock(){var e,n;if(this.locked||this.lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},Uu);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(n=t==null?void 0:t.catch)==null||n.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this.locked=!1,(t=document.exitPointerLock)==null||t.call(document)}isDown(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.down.has(e)):!1}wasPressed(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.pressed.has(e)):!1}axis(){let t=0,e=0;this.isDown("forward")&&(e+=1),this.isDown("back")&&(e-=1),this.isDown("right")&&(t+=1),this.isDown("left")&&(t-=1);const n=Math.hypot(t,e);return n>1?{x:t/n,y:e/n}:{x:t,y:e}}consumeMouse(){const t={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,t}endFrame(){this.pressed.clear()}}const Ou={ui:{gain:.8,duckable:!0},world:{gain:.9,duckable:!0},ambient:{gain:.45,duckable:!0},warn:{gain:1,duckable:!1}},Fu={ref:2,max:26,panWidth:.8,panNear:1.6},zu={volume:.5,muted:!1},zc={preshift:{bus:"ui",gain:.45,layers:[{src:"tone",wave:"sine",freq:440,at:0,dur:.5,a:.08,d:.1,s:.6,r:.28,peak:.7},{src:"tone",wave:"sine",freq:660,at:.18,dur:.55,a:.08,d:.1,s:.6,r:.32,peak:.5}]},clock_on:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"square",freq:1760,at:0,dur:.05,a:.002,d:.02,s:0,r:.02,peak:.25,filter:{type:"lowpass",freq:4e3,q:.7}},{src:"tone",wave:"sine",freq:523.25,at:.1,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:659.25,at:.21,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:783.99,at:.32,dur:.42,a:.006,d:.08,s:.5,r:.3,peak:.8}]},clock_off:{bus:"ui",gain:.55,layers:[{src:"tone",wave:"sine",freq:783.99,at:0,dur:.24,a:.008,d:.08,s:.5,r:.14,peak:.7},{src:"tone",wave:"sine",freq:523.25,at:.16,dur:.6,a:.01,d:.12,s:.4,r:.44,peak:.7},{src:"tone",wave:"triangle",freq:261.63,at:.16,dur:.62,a:.01,d:.12,s:.4,r:.46,peak:.25}]},door_chime:{bus:"ui",gain:.55,spot:"queue",minGain:.35,layers:[{src:"tone",wave:"sine",freq:587.33,at:0,dur:.85,a:.004,d:.2,s:.3,r:.55,peak:.75},{src:"tone",wave:"sine",freq:783.99,at:.16,dur:1.05,a:.004,d:.22,s:.3,r:.7,peak:.7},{src:"tone",wave:"sine",freq:1567.98,at:.16,dur:.6,a:.004,d:.18,s:.1,r:.36,peak:.1}]},ticket_print:{bus:"world",gain:.8,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.34,a:.004,d:.02,s:.9,r:.05,peak:.55,filter:{type:"bandpass",freq:2600,q:3},lfo:{rate:26,depth:.9,target:"gain"}},{src:"tone",wave:"square",freq:1318.5,at:.34,dur:.07,a:.003,d:.03,s:0,r:.03,peak:.16}]},kiosk_order:{bus:"ui",gain:.75,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.06,a:.002,d:.03,s:0,r:.02,peak:.36,filter:{type:"lowpass",freq:3200,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.09,dur:.1,a:.002,d:.04,s:0,r:.05,peak:.33,filter:{type:"lowpass",freq:3200,q:.7}}]},order_taken:{bus:"world",gain:.6,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.01,s:0,r:.015,peak:.3,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"triangle",freq:659.25,to:987.77,at:.02,dur:.14,a:.004,d:.05,s:.4,r:.08,peak:.45}]},item_place:{bus:"world",gain:.7,layers:[{src:"noise",noise:"brown",at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.3,filter:{type:"lowpass",freq:900,to:320,q:.9}},{src:"tone",wave:"sine",freq:190,to:130,at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.22,jitter:.06}]},item_pickup:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:620,to:880,at:0,dur:.09,a:.003,d:.04,s:.2,r:.04,peak:.4,jitter:.04},{src:"noise",noise:"white",at:0,dur:.05,a:.002,d:.03,s:0,r:.02,peak:.14,filter:{type:"highpass",freq:1800,q:.8}}]},item_drop:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:520,to:330,at:0,dur:.11,a:.003,d:.05,s:.2,r:.05,peak:.36,jitter:.04}]},wrong_item:{bus:"warn",gain:.62,layers:[{src:"tone",wave:"sawtooth",freq:146.83,at:0,dur:.22,a:.004,d:.04,s:.7,r:.1,peak:.35,filter:{type:"lowpass",freq:900,to:500,q:1.2},lfo:{rate:22,depth:.5,target:"gain"}}]},order_complete:{bus:"ui",gain:.85,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.28,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"square",freq:1567.98,at:.08,dur:.07,a:.002,d:.03,s:0,r:.04,peak:.24,filter:{type:"lowpass",freq:4200,q:.7}},{src:"noise",noise:"brown",at:.17,dur:.2,a:.004,d:.09,s:.15,r:.1,peak:.4,filter:{type:"lowpass",freq:1400,to:380,q:.9}},{src:"tone",wave:"sine",freq:140,to:78,at:.17,dur:.22,a:.003,d:.1,s:.1,r:.1,peak:.35}]},order_lost:{bus:"warn",gain:.55,layers:[{src:"tone",wave:"triangle",freq:392,to:293.66,at:0,dur:.55,a:.008,d:.12,s:.5,r:.36,peak:.55,filter:{type:"lowpass",freq:1600,to:700,q:.9}},{src:"tone",wave:"sine",freq:196,to:146.83,at:0,dur:.58,a:.01,d:.14,s:.5,r:.38,peak:.3}]},grill_lay:{bus:"world",gain:.6,spot:"grill",layers:[{src:"noise",noise:"white",at:0,dur:.9,a:.03,d:.22,s:.35,r:.55,peak:.55,filter:{type:"bandpass",freq:3400,to:1500,q:.8}},{src:"noise",noise:"brown",at:0,dur:.35,a:.004,d:.12,s:.1,r:.18,peak:.3,filter:{type:"lowpass",freq:700,q:1}}]},fryer_drop:{bus:"world",gain:.65,spot:"fryer",layers:[{src:"noise",noise:"brown",at:0,dur:.14,a:.002,d:.06,s:.1,r:.07,peak:.45,filter:{type:"lowpass",freq:1100,to:300,q:1.4}},{src:"tone",wave:"sine",freq:130,to:82,at:0,dur:.16,a:.002,d:.07,s:.1,r:.08,peak:.3},{src:"noise",noise:"white",at:.05,dur:1.2,a:.1,d:.3,s:.4,r:.7,peak:.55,filter:{type:"bandpass",freq:1400,to:3e3,q:.7}}]},fryer_bed:{bus:"ambient",gain:.9,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"pink",a:1.6,d:0,s:1,r:1.2,peak:.9,filter:{type:"bandpass",freq:1900,q:.55}},{src:"noise",noise:"brown",a:2,d:0,s:1,r:1.2,peak:.5,filter:{type:"lowpass",freq:420,q:.7}}]},fryer_active:{bus:"ambient",gain:.85,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"white",a:.7,d:0,s:1,r:.6,peak:.62,filter:{type:"bandpass",freq:2900,q:.8},lfo:{rate:5.5,depth:.35,target:"gain"}}]},grill_bed:{bus:"ambient",gain:.7,spot:"grill",loop:!0,layers:[{src:"noise",noise:"brown",a:1.8,d:0,s:1,r:1.4,peak:.85,filter:{type:"lowpass",freq:300,q:.8}},{src:"tone",wave:"sine",freq:96,a:2,d:0,s:1,r:1.4,peak:.16}]},grill_active:{bus:"ambient",gain:.75,spot:"grill",loop:!0,layers:[{src:"noise",noise:"white",a:.6,d:0,s:1,r:.55,peak:.5,filter:{type:"bandpass",freq:3600,q:.7},lfo:{rate:8.5,depth:.45,target:"gain"}}]},cook_ready:{bus:"world",gain:.7,minGain:.28,layers:[{src:"tone",wave:"sine",freq:2093,at:0,dur:.28,a:.002,d:.09,s:.1,r:.18,peak:.45},{src:"tone",wave:"sine",freq:3136,at:0,dur:.18,a:.002,d:.07,s:.05,r:.1,peak:.16},{src:"tone",wave:"sine",freq:2093,at:.19,dur:.42,a:.002,d:.11,s:.1,r:.3,peak:.45},{src:"tone",wave:"sine",freq:3136,at:.19,dur:.24,a:.002,d:.08,s:.05,r:.14,peak:.16}]},cook_burnt:{bus:"warn",gain:.85,minGain:.7,ducks:{depth:.35,hold:1.1},layers:[{src:"tone",wave:"square",freq:466.16,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.34,filter:{type:"bandpass",freq:1500,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"tone",wave:"square",freq:311.13,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.22,filter:{type:"bandpass",freq:900,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.2,a:.04,d:.3,s:.45,r:.55,peak:.28,filter:{type:"bandpass",freq:5200,to:2600,q:.6}}]},warmer_expired:{bus:"warn",gain:.4,minGain:.22,layers:[{src:"tone",wave:"sine",freq:116,to:92,at:0,dur:.4,a:.006,d:.14,s:.3,r:.24,peak:.45},{src:"noise",noise:"brown",at:0,dur:.3,a:.006,d:.12,s:.1,r:.16,peak:.22,filter:{type:"lowpass",freq:500,to:200,q:1}}]},mop_swish:{bus:"world",gain:.9,layers:[{src:"noise",noise:"pink",at:0,dur:.42,a:.05,d:.1,s:.55,r:.24,peak:.72,filter:{type:"bandpass",freq:1200,to:380,q:.9}},{src:"noise",noise:"pink",at:.4,dur:.44,a:.06,d:.1,s:.55,r:.26,peak:.64,filter:{type:"bandpass",freq:420,to:1100,q:.9}}]},wipe_down:{bus:"world",gain:.8,layers:[{src:"noise",noise:"white",at:0,dur:.26,a:.03,d:.08,s:.5,r:.14,peak:.5,filter:{type:"bandpass",freq:2600,to:1200,q:1.1}},{src:"noise",noise:"white",at:.24,dur:.24,a:.03,d:.08,s:.5,r:.13,peak:.42,filter:{type:"bandpass",freq:1300,to:2400,q:1.1}}]},mess_made:{bus:"world",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.04,s:.1,r:.05,peak:.55,filter:{type:"lowpass",freq:640,to:240,q:1}}]},delivery_call:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.14,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:880,at:.32,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.46,dur:.18,a:.004,d:.02,s:.9,r:.08,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}}]},delivery_taken:{bus:"world",gain:.55,spot:"delivery_desk",layers:[{src:"noise",noise:"white",at:0,dur:.38,a:.02,d:.08,s:.6,r:.22,peak:.34,filter:{type:"highpass",freq:1600,q:.8},lfo:{rate:17,depth:.75,target:"gain"}},{src:"tone",wave:"triangle",freq:740,to:988,at:.3,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.3}]},delivery_done:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"triangle",freq:523.25,at:0,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:659.25,at:.12,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:880,at:.24,dur:.42,a:.005,d:.09,s:.4,r:.3,peak:.6},{src:"tone",wave:"sine",freq:1760,at:.24,dur:.3,a:.005,d:.08,s:.2,r:.2,peak:.12}]},violation:{bus:"warn",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:110,at:0,dur:.28,a:.004,d:.04,s:.8,r:.12,peak:.38,filter:{type:"lowpass",freq:700,q:1.4},lfo:{rate:14,depth:.6,target:"gain"}}]},scooter_start:{bus:"world",gain:.55,layers:[{src:"noise",noise:"white",at:0,dur:.3,a:.01,d:.1,s:.3,r:.16,peak:.3,filter:{type:"bandpass",freq:1800,to:700,q:1.2}},{src:"tone",wave:"sawtooth",freq:52,to:128,at:.05,dur:.85,a:.06,d:.1,s:.75,r:.35,peak:.34,filter:{type:"lowpass",freq:620,to:1100,q:1},lfo:{rate:9,depth:.3,target:"gain"}}]},scooter_stop:{bus:"world",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:122,to:44,at:0,dur:.55,a:.006,d:.1,s:.6,r:.34,peak:.34,filter:{type:"lowpass",freq:900,to:300,q:1},lfo:{rate:7,depth:.35,target:"gain"}}]},promoted:{bus:"ui",gain:.7,layers:[{src:"tone",wave:"square",freq:523.25,at:0,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:659.25,at:.11,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:783.99,at:.22,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:1046.5,at:.33,dur:.6,a:.004,d:.12,s:.4,r:.42,peak:.3,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"sine",freq:261.63,at:.33,dur:.65,a:.006,d:.14,s:.4,r:.46,peak:.28}]},purchase:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.26,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"triangle",freq:2093,at:.12,dur:.16,a:.002,d:.06,s:.1,r:.1,peak:.22},{src:"tone",wave:"triangle",freq:2637,at:.19,dur:.2,a:.002,d:.07,s:.1,r:.13,peak:.18}]},mute_off:{bus:"ui",gain:.5,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.5},{src:"tone",wave:"sine",freq:990,at:.1,dur:.22,a:.004,d:.07,s:.3,r:.14,peak:.42}]}},kc=["fryer_bed","grill_bed"],Ci=1e-4;class ku{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const c=r.float()*2-1;o=(o+.02*c)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,c=0,l=0,h=0,u=0,d=0;for(let f=0;f<e;f++){const g=r.float()*2-1;o=.99886*o+g*.0555179,a=.99332*a+g*.0750759,c=.969*c+g*.153852,l=.8665*l+g*.3104856,h=.55*h+g*.5329522,u=-.7616*u-g*.016898,s[f]=(o+a+c+l+h+u+d+g*.5362)*.11,d=g*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function Bu(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),d=e.s??1,f=Math.max(.005,e.r??.05),g=i.createGain();g.gain.value=Ci,g.connect(n);let _,p=null;const m=r.rate??1;if(e.src==="noise")_=i.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=m;else{_=i.createOscillator(),_.type=e.wave||"sine";const I=e.jitter||0,x=I?1+(r.jitterRoll??0)*I:1,S=Math.max(8,(e.freq??440)*x*m);if(p=_.frequency,p.setValueAtTime(S,a),e.to!=null&&!o){const U=Math.max(8,e.to*x*m),O=a+c;e.glide==="lin"?p.linearRampToValueAtTime(U,O):p.exponentialRampToValueAtTime(U,O)}}let y=_,v=null;if(e.filter){const I=i.createBiquadFilter();I.type=e.filter.type||"lowpass",I.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);I.frequency.setValueAtTime(x,a),e.filter.to!=null&&!o&&I.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),v=I.frequency,y.connect(I),y=I}let E=null,C=null;if(e.lfo&&e.lfo.rate>0){E=i.createOscillator(),E.type="sine",E.frequency.value=e.lfo.rate;const I=i.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));C=i.createGain(),C.gain.value=1-x*.5,I.gain.value=x*.5,E.connect(I),I.connect(C.gain),y.connect(C),y=C}else e.lfo.target==="filter"&&v?(I.gain.value=e.lfo.depth??200,E.connect(I),I.connect(v)):p&&(I.gain.value=e.lfo.depth??20,E.connect(I),I.connect(p));E.start(a)}y.connect(g);const b=g.gain;b.setValueAtTime(Ci,a),b.linearRampToValueAtTime(l,a+h);const T=Math.max(Ci,l*d);u>0&&b.linearRampToValueAtTime(T,a+h+u);let P=1/0;if(o)_.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const I=Math.max(a+h+u,a+c-f);b.setValueAtTime(Math.max(Ci,u>0?T:l),I),b.linearRampToValueAtTime(Ci,a+c),P=a+c+.02,_.start(a,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(P),E&&E.stop(P)}return{endsAt:P,stop(I){const x=Math.max(I,i.currentTime);try{b.cancelScheduledValues(x),b.setValueAtTime(Math.max(Ci,b.value),x),b.linearRampToValueAtTime(Ci,x+f),_.stop(x+f+.02),E&&E.stop(x+f+.02)}catch{}}}}function Bc(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const h=Bu(i,t,l,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>c&&h.endsAt!==1/0&&(c=h.endsAt))}return{endsAt:o?1/0:c,stop(l=i.currentTime){for(const h of a)h.stop(l)}}}const Hc="lifesim.audio",Hu=28,Gu="KeyN";class Vu{constructor(t){var n,s,r,o;this.game=t,this.bus=(t==null?void 0:t.bus)||null,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this.rng=(n=t==null?void 0:t.rng)!=null&&n.child?t.rng.child("audio"):null,this._voices=[],this._loops=new Map,this._duckUntil=0,this._duckDepth=0,this._paused=!1,this._replaceAccum=0,this._told=!1;const e=this._loadPrefs();this.volume=e.volume,this.muted=e.muted,this._Ctx&&(this._wireUnlock(),this._wireKey()),(o=(r=(s=this.game)==null?void 0:s.slice)==null?void 0:r.bindSounds)==null||o.call(r,this)}get available(){return!!this.ctx}_loadPrefs(){const t={...zu};try{const e=localStorage.getItem(Hc);if(e){const n=JSON.parse(e);typeof n.volume=="number"&&(t.volume=Math.min(1,Math.max(0,n.volume))),typeof n.muted=="boolean"&&(t.muted=n.muted)}}catch{}return t}_savePrefs(){try{localStorage.setItem(Hc,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx)for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,n;document.hidden||(n=(e=this.ctx)==null?void 0:e.resume)==null||n.call(e).catch(()=>{})})}unlock(){var e,n;if(this.ctx||!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=new ku(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this.muted?1e-4:this.volume*(this._paused?.2:1),this.master.connect(t.destination);for(const[s,r]of Object.entries(Ou)){const o=t.createGain();o.gain.value=r.gain,o.connect(this.master),this.buses[s]={node:o,base:r.gain,duckable:r.duckable!==!1}}(e=t.resume)==null||e.call(t).catch(()=>{}),this.announce(),(n=this.bus)==null||n.emit("audio:ready",{muted:this.muted,volume:this.volume})}announce(){var e,n;if(this._told||!this.ctx)return;const t=(n=(e=this.game)==null?void 0:e.ui)==null?void 0:n.toast;t&&(this._told=!0,t.call(this.game.ui,this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==Gu||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e,n,s,r,o,a,c;this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(s=(n=(e=this.game)==null?void 0:e.ui)==null?void 0:n.toast)==null||s.call(n,this.muted?"Sound muted.":"Sound on."),(r=this.bus)==null||r.emit("audio:muted",{muted:this.muted}),this.muted||(this.play("mute_off"),(c=(a=(o=this.game)==null?void 0:o.slice)==null?void 0:a.isWorking)!=null&&c.call(a)&&this.startShiftBeds())}toggleMute(){this.setMuted(!this.muted)}setPaused(t){this._paused=!!t,this._applyMaster(.08)}_applyMaster(t=.08){if(!this.master)return;const e=this.ctx.currentTime,n=this.muted?1e-4:this.volume*(this._paused?.2:1);this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(Math.max(1e-4,n),e+t)}setVolume(t){var e;this.volume=Math.min(1,Math.max(0,t)),this._savePrefs(),this._applyMaster(),(e=this.bus)==null||e.emit("audio:volume",{volume:this.volume})}play(t,e={}){const n=zc[t];if(!n||!this.ctx||this.muted)return null;if(n.loop)return this.startLoop(t,t,e);if(this._voices.length>=Hu)return null;const s=this._destFor(n,e);if(!s)return null;const r=Bc(this.ctx,this.bank,n,s.node,{gain:(n.gain??1)*(e.gain??1),rate:e.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()});return this._voices.push({v:r,endsAt:r.endsAt,chain:s.chain}),n.ducks&&this.duck(n.ducks.depth??.3,n.ducks.hold??.8),r}startLoop(t,e=t,n={}){const s=zc[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._destFor(s,n);if(!r)return null;const a={v:Bc(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(n.gain??1),rate:n.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:n.spot??s.spot??null,at:n.at??null,gain:(s.gain??1)*(n.gain??1)};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);!e||!this.ctx||(this._loops.delete(t),e.v.stop(this.ctx.currentTime))}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t)}startShiftBeds(){for(const t of kc)this.startLoop(t)}stopShiftBeds(){for(const t of kc)this.stopLoop(t)}duck(t=.3,e=.8){if(!this.ctx)return;const n=this.ctx.currentTime;this._duckDepth=Math.max(this._duckDepth,t),this._duckUntil=Math.max(this._duckUntil,n+e);for(const s of Object.values(this.buses))s.duckable&&(s.node.gain.cancelScheduledValues(n),s.node.gain.setTargetAtTime(s.base*this._duckDepth,n,.04))}_unduck(){const t=this.ctx.currentTime;this._duckDepth=0;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_destFor(t,e){const n=this.buses[t.bus]||this.buses.world||this.buses.ui;if(!n)return null;const s=this._resolve(e.at??null,e.spot??t.spot??null);if(!s)return{node:n.node,chain:null};const{gain:r,pan:o}=this._place(s,t.minGain??0);if(r<=.004&&!t.loop)return null;let a=n.node,c=null;this.ctx.createStereoPanner&&(c=this.ctx.createStereoPanner(),c.pan.value=o,c.connect(a),a=c);const l=this.ctx.createGain();return l.gain.value=r,l.connect(a),{node:l,chain:{pan:c,dist:l}}}_resolve(t,e){var s,r,o;if(t&&typeof t.x=="number")return t;if(!e)return null;const n=(o=(r=(s=this.game)==null?void 0:s.shift)==null?void 0:r.spot)==null?void 0:o.call(r,e);return n&&typeof n.x=="number"?n:null}_listener(){var s,r;const t=(s=this.game)==null?void 0:s.camera,e=(r=t==null?void 0:t.active)==null?void 0:r.position;if(!e)return null;const n=t.yaw??0;return{x:e.x,y:e.y,z:e.z,rx:-Math.cos(n),rz:Math.sin(n)}}_place(t,e){const n=this._listener();if(!n)return{gain:1,pan:0};const s=t.x-n.x,r=t.z-n.z,o=(t.y??n.y)-n.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,panWidth:h,panNear:u}=Fu;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));a>l-4&&(d*=(l-a)/4),d=Math.max(d,e);const f=Math.sqrt(s*s+r*r)||1,g=Math.min(1,f/u),_=(s*n.rx+r*n.rz)/f*h*g;return{gain:d,pan:Math.max(-1,Math.min(1,_))}}update(t){if(!this.ctx)return;const e=this.ctx.currentTime;for(let n=this._voices.length-1;n>=0;n--)this._voices[n].endsAt<=e&&this._voices.splice(n,1);if(this._duckDepth>0&&e>=this._duckUntil&&this._unduck(),this._replaceAccum=(this._replaceAccum||0)+t,!(this._replaceAccum<.1)){this._replaceAccum=0;for(const n of this._loops.values()){const s=this._resolve(n.at,n.spot);if(!s||!n.chain)continue;const{gain:r,pan:o}=this._place(s,n.recipe.minGain??0);n.chain.dist.gain.setTargetAtTime(r,e,.06),n.chain.pan&&n.chain.pan.pan.setTargetAtTime(o,e,.08)}}}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,1.8):0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="169",Wu=0,Gc=1,qu=2,Eh=1,wh=2,Qn=3,Hn=0,Ye=1,kn=2,wi=0,vs=1,aa=2,Vc=3,ca=4,Xu=5,Hi=100,Yu=101,ju=102,Ku=103,$u=104,Zu=200,Ju=201,Qu=202,td=203,la=204,ha=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,cd=213,ld=214,ua=0,da=1,fa=2,ws=3,pa=4,ma=5,ga=6,_a=7,cc=0,hd=1,ud=2,bi=0,dd=1,fd=2,pd=3,bh=4,md=5,gd=6,_d=7,Th=300,bs=301,Ts=302,xa=303,va=304,ro=306,$r=1e3,vi=1001,ya=1002,_n=1003,xd=1004,rr=1005,gn=1006,_o=1007,yi=1008,oi=1009,Ah=1010,Rh=1011,$s=1012,lc=1013,Wi=1014,ii=1015,Zs=1016,hc=1017,uc=1018,As=1020,Ch=35902,Ph=1021,Lh=1022,Pn=1023,Dh=1024,Ih=1025,ys=1026,Rs=1027,Uh=1028,dc=1029,Nh=1030,fc=1031,pc=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,Ma=35840,Sa=35841,Ea=35842,wa=35843,ba=36196,Ta=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Oa=37816,Fa=37817,za=37818,ka=37819,Ba=37820,Ha=37821,qr=36492,Ga=36494,Va=36495,Oh=36283,Wa=36284,qa=36285,Xa=36286,vd=3200,yd=3201,mc=0,Md=1,xi="",Ce="srgb",Ai="srgb-linear",gc="display-p3",oo="display-p3-linear",Zr="linear",me="srgb",Jr="rec709",Qr="p3",Ki=7680,Wc=519,Sd=512,Ed=513,wd=514,Fh=515,bd=516,Td=517,Ad=518,Rd=519,qc=35044,Xc="300 es",si=2e3,to=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const Ys=Math.PI/180,Cs=180/Math.PI;function Us(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function _c(i,t){return(i%t+t)%t}function Cd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pd(i,t,e){return i!==t?(e-i)/(t-i):0}function js(i,t,e){return(1-e)*i+e*t}function Ld(i,t,e,n){return js(i,t,1-Math.exp(-e*n))}function Dd(i,t=1){return t-Math.abs(_c(i,t*2)-t)}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Od(i,t){return i+Math.random()*(t-i)}function Fd(i){return i*(.5-Math.random())}function zd(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kd(i){return i*Ys}function Bd(i){return i*Cs}function Hd(i){return(i&i-1)===0&&i!==0}function Gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:Ys,RAD2DEG:Cs,generateUUID:Us,clamp:Xe,euclideanModulo:_c,mapLinear:Cd,inverseLerp:Pd,lerp:js,damp:Ld,pingpong:Dd,smoothstep:Id,smootherstep:Ud,randInt:Nd,randFloat:Od,randFloatSpread:Fd,seededRandom:zd,degToRad:kd,radToDeg:Bd,isPowerOfTwo:Hd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Wd,normalize:Ve,denormalize:fs};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],y=s[1],v=s[4],E=s[7],C=s[2],b=s[5],T=s[8];return r[0]=o*_+a*y+c*C,r[3]=o*p+a*v+c*b,r[6]=o*m+a*E+c*T,r[1]=l*_+h*y+u*C,r[4]=l*p+h*v+u*b,r[7]=l*m+h*E+u*T,r[2]=d*_+f*y+g*C,r[5]=d*p+f*v+g*b,r[8]=d*m+f*E+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new jt;function zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qd(){const i=eo("canvas");return i.style.display="block",i}const jc={};function Xr(i){i in jc||(jc[i]=!0,console.warn(i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kc=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[Ai]:{transfer:Zr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ce]:{transfer:me,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oo]:{transfer:Zr,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($c),fromReference:i=>i.applyMatrix3(Kc)},[gc]:{transfer:me,primaries:Qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($c),fromReference:i=>i.applyMatrix3(Kc).convertLinearToSRGB()}},Kd=new Set([Ai,oo]),re={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=zs[t].toReference,s=zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zs[i].primaries},getTransfer:function(i){return i===xi?Zr:zs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(zs[t].luminanceCoefficients)}};function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class $d{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=eo("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ms(e[n]/255)*255):e[n]=Ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zd=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jd=0;class je extends Is{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=vi,s=vi,r=gn,o=yi,a=Pn,c=oi,l=je.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Us(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $r:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $r:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Th;je.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,E=(f+1)/2,C=(m+1)/2,b=(h+d)/4,T=(u+_)/4,P=(g+p)/4;return v>E&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=T/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=b/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bh extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tf extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let p=1-a;const m=c*d+l*f+h*g+u*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,m*y);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const E=a*y;if(c=c*p+d*E,l=l*p+f*E,h=h*p+g*E,u=u*p+_*E,p===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new D,Zc=new Js;class ai{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),ar.subVectors(this.max,ks),Zi.subVectors(t.a,ks),Ji.subVectors(t.b,ks),Qi.subVectors(t.c,ks),hi.subVectors(Ji,Zi),ui.subVectors(Qi,Ji),Pi.subVectors(Zi,Qi);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Pi.z,Pi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Pi.z,0,-Pi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Pi.y,Pi.x,0];return!So(e,Zi,Ji,Qi,ar)||(e=[1,0,0,0,1,0,0,0,1],!So(e,Zi,Ji,Qi,ar))?!1:(cr.crossVectors(hi,ui),e=[cr.x,cr.y,cr.z],So(e,Zi,Ji,Qi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new D,new D,new D,new D,new D,new D,new D,new D],Sn=new D,or=new ai,Zi=new D,Ji=new D,Qi=new D,hi=new D,ui=new D,Pi=new D,ks=new D,ar=new D,cr=new D,Li=new D;function So(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ef=new ai,Bs=new D,Eo=new D;class ao{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ef.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Eo)),this.expandByPoint(Bs.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new D,wo=new D,lr=new D,di=new D,bo=new D,hr=new D,To=new D;class xc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(wo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=di.dot(this.direction),c=-di.dot(lr),l=di.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wo).addScaledVector(lr,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),hr.subVectors(n,t),To.crossVectors(bo,hr);let o=this.direction.dot(To),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);const c=a*this.direction.dot(hr.crossVectors(di,hr));if(c<0)return null;const l=a*this.direction.dot(bo.cross(di));if(l<0||c+l>o)return null;const h=-a*di.dot(To);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,p){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nf,t,sf)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),fi.crossVectors(n,sn),fi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),fi.crossVectors(n,sn)),fi.normalize(),ur.crossVectors(sn,fi),s[0]=fi.x,s[4]=ur.x,s[8]=sn.x,s[1]=fi.y,s[5]=ur.y,s[9]=sn.y,s[2]=fi.z,s[6]=ur.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],E=n[11],C=n[15],b=s[0],T=s[4],P=s[8],I=s[12],x=s[1],S=s[5],U=s[9],O=s[13],K=s[2],Y=s[6],V=s[10],$=s[14],k=s[3],at=s[7],it=s[11],yt=s[15];return r[0]=o*b+a*x+c*K+l*k,r[4]=o*T+a*S+c*Y+l*at,r[8]=o*P+a*U+c*V+l*it,r[12]=o*I+a*O+c*$+l*yt,r[1]=h*b+u*x+d*K+f*k,r[5]=h*T+u*S+d*Y+f*at,r[9]=h*P+u*U+d*V+f*it,r[13]=h*I+u*O+d*$+f*yt,r[2]=g*b+_*x+p*K+m*k,r[6]=g*T+_*S+p*Y+m*at,r[10]=g*P+_*U+p*V+m*it,r[14]=g*I+_*O+p*$+m*yt,r[3]=y*b+v*x+E*K+C*k,r[7]=y*T+v*S+E*Y+C*at,r[11]=y*P+v*U+E*V+C*it,r[15]=y*I+v*O+E*$+C*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=u*p*l-_*d*l+_*c*f-a*p*f-u*c*m+a*d*m,v=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,E=h*_*l-g*u*l+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,b=e*y+n*v+s*E+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=y*T,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*T,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*T,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=v*T,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*T,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=E*T,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=C*T,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*p-e*a*p)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,y=c*l,v=c*h,E=c*u,C=n.x,b=n.y,T=n.z;return s[0]=(1-(_+m))*C,s[1]=(f+E)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-E)*b,s[5]=(1-(d+m))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+v)*T,s[9]=(p-y)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===to)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===si)g=(o+r)*u,_=-2*u;else if(a===to)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new D,En=new xe,nf=new D(0,0,0),sf=new D(1,1,1),fi=new D,ur=new D,sn=new D,Jc=new xe,Qc=new Js;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rf=0;const tl=new D,es=new Js,Kn=new xe,dr=new D,Hs=new D,of=new D,af=new Js,el=new D(1,0,0),nl=new D(0,1,0),il=new D(0,0,1),sl={type:"added"},cf={type:"removed"},ns={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Ae extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new D,e=new Ln,n=new Js,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Hs,dr,this.up):Kn.lookAt(dr,Hs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Kn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cf),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new D(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new D,$n=new D,Ro=new D,Zn=new D,is=new D,ss=new D,rl=new D,Co=new D,Po=new D,Lo=new D,Do=new ae,Io=new ae,Uo=new ae;class Cn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),$n.subVectors(n,e),Ro.subVectors(t,e);const o=wn.dot(wn),a=wn.dot($n),c=wn.dot(Ro),l=$n.dot($n),h=$n.dot(Ro),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Do.setScalar(0),Io.setScalar(0),Uo.setScalar(0),Do.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Do,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),$n.subVectors(t,e),wn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),Co.subVectors(t,n);const c=is.dot(Co),l=ss.dot(Co);if(c<=0&&l<=0)return e.copy(n);Po.subVectors(t,s);const h=is.dot(Po),u=ss.dot(Po);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(is,o);Lo.subVectors(t,r);const f=is.dot(Lo),g=ss.dot(Lo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ss,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return rl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(rl,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},fr={h:0,s:0,l:0};function No(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=_c(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return re.fromWorkingColorSpace(He.copy(this),t),Math.round(Xe(He.r*255,0,255))*65536+Math.round(Xe(He.g*255,0,255))*256+Math.round(Xe(He.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ce){re.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(fr);const n=js(pi.h,fr.h,e),s=js(pi.s,fr.s,e),r=js(pi.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ot;Ot.NAMES=Gh;let lf=0;class Xi extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=vs,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vn extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new D,pr=new te;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}}class Vh extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hf=0;const un=new xe,Oo=new Ae,rs=new D,rn=new ai,Gs=new ai,Ie=new D;class Ke extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Wh:Vh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(rn.min,Gs.min),rn.expandByPoint(Ie),Ie.addVectors(rn.max,Gs.max),rn.expandByPoint(Ie)):(rn.expandByPoint(Gs.min),rn.expandByPoint(Gs.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(rs.fromBufferAttribute(t,l),Ie.add(rs)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;const l=new D,h=new D,u=new D,d=new te,f=new te,g=new te,_=new D,p=new D;function m(P,I,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[P].add(_),a[I].add(_),a[x].add(_),c[P].add(p),c[I].add(p),c[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,I=y.length;P<I;++P){const x=y[P],S=x.start,U=x.count;for(let O=S,K=S+U;O<K;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const v=new D,E=new D,C=new D,b=new D;function T(P){C.fromBufferAttribute(s,P),b.copy(C);const I=a[P];v.copy(I),v.sub(C.multiplyScalar(C.dot(I))).normalize(),E.crossVectors(b,I);const S=E.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,S)}for(let P=0,I=y.length;P<I;++P){const x=y[P],S=x.start,U=x.count;for(let O=S,K=S+U;O<K;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new xe,Di=new xc,mr=new ao,al=new D,gr=new D,_r=new D,xr=new D,Fo=new D,vr=new D,cl=new D,yr=new D;class ht extends Ae{constructor(t=new Ke,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Fo.fromBufferAttribute(u,t),o?vr.addScaledVector(Fo,h):vr.addScaledVector(Fo.sub(e),h))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(mr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(mr,al)===null||Di.origin.distanceToSquared(al)>(t.far-t.near)**2))&&(ol.copy(r).invert(),Di.copy(t.ray).applyMatrix4(ol),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=y,C=v;E<C;E+=3){const b=a.getX(E),T=a.getX(E+1),P=a.getX(E+2);s=Mr(this,m,t,n,l,h,u,b,T,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=Mr(this,o,t,n,l,h,u,y,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let E=y,C=v;E<C;E+=3){const b=E,T=E+1,P=E+2;s=Mr(this,m,t,n,l,h,u,b,T,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,E=p+2;s=Mr(this,o,t,n,l,h,u,y,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function uf(i,t,e,n,s,r,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hn,a),c===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(yr);return l<e.near||l>e.far?null:{distance:l,point:yr.clone(),object:i}}function Mr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,gr),i.getVertexPosition(c,_r),i.getVertexPosition(l,xr);const h=uf(i,t,e,n,gr,_r,xr,cl);if(h){const u=new D;Cn.getBarycoord(cl,gr,_r,xr,u),s&&(h.uv=Cn.getInterpolatedAttribute(s,a,c,l,u,new te)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,c,l,u,new te)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};Cn.getNormal(gr,_r,xr,d.normal),h.face=d,h.barycoord=u}return h}class Gt extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function g(_,p,m,y,v,E,C,b,T,P,I){const x=E/T,S=C/P,U=E/2,O=C/2,K=b/2,Y=T+1,V=P+1;let $=0,k=0;const at=new D;for(let it=0;it<V;it++){const yt=it*S-O;for(let Vt=0;Vt<Y;Vt++){const Kt=Vt*x-U;at[_]=Kt*y,at[p]=yt*v,at[m]=K,l.push(at.x,at.y,at.z),at[_]=0,at[p]=0,at[m]=b>0?1:-1,h.push(at.x,at.y,at.z),u.push(Vt/T),u.push(1-it/P),$+=1}}for(let it=0;it<P;it++)for(let yt=0;yt<T;yt++){const Vt=d+yt+Y*it,Kt=d+yt+Y*(it+1),J=d+(yt+1)+Y*(it+1),F=d+(yt+1)+Y*it;c.push(Vt,Kt,F),c.push(Kt,J,F),k+=6}a.addGroup(f,k,I),f+=k,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ps(i[e]);for(const s in n)t[s]=n[s]}return t}function df(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const ff={clone:Ps,merge:We};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new D,ll=new te,hl=new te;class tn extends Xh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,ll,hl),e.subVectors(hl,ll)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class gf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(os,as,t,e);s.layers=this.layers,this.add(s);const r=new tn(os,as,t,e);r.layers=this.layers,this.add(r);const o=new tn(os,as,t,e);o.layers=this.layers,this.add(o);const a=new tn(os,as,t,e);a.layers=this.layers,this.add(a);const c=new tn(os,as,t,e);c.layers=this.layers,this.add(c);const l=new tn(os,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _f extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:wi});r.uniforms.tEquirect.value=e;const o=new ht(s,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=gn),new gf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const zo=new D,xf=new D,vf=new jt;class ki{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=zo.subVectors(n,e).cross(xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vf.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new ao,Sr=new D;class vc{constructor(t=new ki,e=new ki,n=new ki,s=new ki,r=new ki,o=new ki){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],y=s[13],v=s[14],E=s[15];if(n[0].setComponents(c-r,d-l,p-f,E-m).normalize(),n[1].setComponents(c+r,d+l,p+f,E+m).normalize(),n[2].setComponents(c+o,d+h,p+g,E+y).normalize(),n[3].setComponents(c-o,d-h,p-g,E-y).normalize(),n[4].setComponents(c-a,d-u,p-_,E-v).normalize(),e===si)n[5].setComponents(c+a,d+u,p+_,E+v).normalize();else if(e===to)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ke extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let v=0;v<l;v++){const E=v*u-r;g.push(E,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const v=y+l*m,E=y+l*(m+1),C=y+1+l*(m+1),b=y+1+l*m;f.push(v,E,b),f.push(E,C,b)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`
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
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,v0=`struct PhysicalMaterial {
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
}`,y0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,zp=`#define MATCAP
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
}`,kp=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Wp=`#define STANDARD
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
}`,qp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,jp=`uniform float size;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Zp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:Ef,alphamap_pars_fragment:wf,alphatest_fragment:bf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Rf,batching_pars_vertex:Cf,batching_vertex:Pf,begin_vertex:Lf,beginnormal_vertex:Df,bsdfs:If,iridescence_fragment:Uf,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:zf,clipping_planes_vertex:kf,color_fragment:Bf,color_pars_fragment:Hf,color_pars_vertex:Gf,color_vertex:Vf,common:Wf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:Yf,displacementmap_vertex:jf,emissivemap_fragment:Kf,emissivemap_pars_fragment:$f,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:Qf,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:l0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:M0,lights_fragment_end:S0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:D0,morphinstance_vertex:I0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:O0,morphtarget_vertex:F0,normal_fragment_begin:z0,normal_fragment_maps:k0,normal_pars_fragment:B0,normal_pars_vertex:H0,normal_vertex:G0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:Y0,opaque_fragment:j0,packing:K0,premultiplied_alpha_fragment:$0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:tp,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:op,skinning_pars_vertex:ap,skinning_vertex:cp,skinnormal_vertex:lp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:vp,background_vert:yp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:Ep,cube_vert:wp,cube_frag:bp,depth_vert:Tp,depth_frag:Ap,distanceRGBA_vert:Rp,distanceRGBA_frag:Cp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Dp,linedashed_frag:Ip,meshbasic_vert:Up,meshbasic_frag:Np,meshlambert_vert:Op,meshlambert_frag:Fp,meshmatcap_vert:zp,meshmatcap_frag:kp,meshnormal_vert:Bp,meshnormal_frag:Hp,meshphong_vert:Gp,meshphong_frag:Vp,meshphysical_vert:Wp,meshphysical_frag:qp,meshtoon_vert:Xp,meshtoon_frag:Yp,points_vert:jp,points_frag:Kp,shadow_vert:$p,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:Qp},xt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Fn={basic:{uniforms:We([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:We([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:We([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:We([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:We([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:We([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:We([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:We([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:We([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:We([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:We([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:We([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:We([xt.lights,xt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Fn.physical={uniforms:We([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Er={r:0,b:0,g:0},Ui=new Ln,tm=new xe;function em(i,t,e,n,s,r,o){const a=new Ot(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const E=g(y);E===null?m(a,c):E&&E.isColor&&(m(E,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===ro)?(h===void 0&&(h=new ht(new Gt(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ps(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(v.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Ui)),h.material.toneMapped=re.getTransfer(E.colorSpace)!==me,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ht(new ke(2,2),new ci({name:"BackgroundMaterial",uniforms:Ps(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=re.getTransfer(E.colorSpace)!==me,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(Er,qh(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:_,addToRenderList:p}}function nm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,S,U,O,K){let Y=!1;const V=u(O,U,S);r!==V&&(r=V,l(r.object)),Y=f(x,O,U,K),Y&&g(x,O,U,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(x,S,U,O),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,S,U){const O=U.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let Y=K[S.id];Y===void 0&&(Y={},K[S.id]=Y);let V=Y[O];return V===void 0&&(V=d(c()),Y[O]=V),V}function d(x){const S=[],U=[],O=[];for(let K=0;K<e;K++)S[K]=0,U[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:U,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,S,U,O){const K=r.attributes,Y=S.attributes;let V=0;const $=U.getAttributes();for(const k in $)if($[k].location>=0){const it=K[k];let yt=Y[k];if(yt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),it===void 0||it.attribute!==yt||yt&&it.data!==yt.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(x,S,U,O){const K={},Y=S.attributes;let V=0;const $=U.getAttributes();for(const k in $)if($[k].location>=0){let it=Y[k];it===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(it=x.instanceColor));const yt={};yt.attribute=it,it&&it.data&&(yt.data=it.data),K[k]=yt,V++}r.attributes=K,r.attributesNum=V,r.index=O}function _(){const x=r.newAttributes;for(let S=0,U=x.length;S<U;S++)x[S]=0}function p(x){m(x,0)}function m(x,S){const U=r.newAttributes,O=r.enabledAttributes,K=r.attributeDivisors;U[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),K[x]!==S&&(i.vertexAttribDivisor(x,S),K[x]=S)}function y(){const x=r.newAttributes,S=r.enabledAttributes;for(let U=0,O=S.length;U<O;U++)S[U]!==x[U]&&(i.disableVertexAttribArray(U),S[U]=0)}function v(x,S,U,O,K,Y,V){V===!0?i.vertexAttribIPointer(x,S,U,K,Y):i.vertexAttribPointer(x,S,U,O,K,Y)}function E(x,S,U,O){_();const K=O.attributes,Y=U.getAttributes(),V=S.defaultAttributeValues;for(const $ in Y){const k=Y[$];if(k.location>=0){let at=K[$];if(at===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){const it=at.normalized,yt=at.itemSize,Vt=t.get(at);if(Vt===void 0)continue;const Kt=Vt.buffer,J=Vt.type,F=Vt.bytesPerElement,ot=J===i.INT||J===i.UNSIGNED_INT||at.gpuType===lc;if(at.isInterleavedBufferAttribute){const et=at.data,pt=et.stride,ct=at.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)m(k.location+Et,et.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<k.locationSize;Et++)p(k.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Et=0;Et<k.locationSize;Et++)v(k.location+Et,yt/k.locationSize,J,it,pt*F,(ct+yt/k.locationSize*Et)*F,ot)}else{if(at.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)m(k.location+et,at.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<k.locationSize;et++)p(k.location+et);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let et=0;et<k.locationSize;et++)v(k.location+et,yt/k.locationSize,J,it,yt*F,yt/k.locationSize*et*F,ot)}}else if(V!==void 0){const it=V[$];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(k.location,it);break;case 3:i.vertexAttrib3fv(k.location,it);break;case 4:i.vertexAttrib4fv(k.location,it);break;default:i.vertexAttrib1fv(k.location,it)}}}}y()}function C(){P();for(const x in n){const S=n[x];for(const U in S){const O=S[U];for(const K in O)h(O[K].object),delete O[K];delete S[U]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const U in S){const O=S[U];for(const K in O)h(O[K].object),delete O[K];delete S[U]}delete n[x.id]}function T(x){for(const S in n){const U=n[S];if(U[x.id]===void 0)continue;const O=U[x.id];for(const K in O)h(O[K].object),delete O[K];delete U[x.id]}}function P(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function im(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==oi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:b}}function rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ki,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,v=y*4;let E=m.clippingState||null;c.value=E,E=h(g,d,v,f);for(let C=0;C!==v;++C)E[C]=e[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=f;v!==_;++v,E+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function om(i){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=bs:a===va&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===va)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _f(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Kh extends Xh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,ul=[.125,.215,.35,.446,.526,.582],Gi=20,ko=new Kh,dl=new Ot;let Bo=null,Ho=0,Go=0,Vo=!1;const Bi=(1+Math.sqrt(5))/2,cs=1/Bi,fl=[new D(-Bi,cs,0),new D(Bi,cs,0),new D(-cs,0,Bi),new D(cs,0,Bi),new D(0,Bi,-cs),new D(0,Bi,cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,Ho,Go),this._renderer.xr.enabled=Vo,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Zs,format:Pn,colorSpace:Ai,depthBuffer:!1},s=ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(r)),this._blurMaterial=cm(r,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dl),h.toneMapping=bi,h.autoClear=!1;const f=new Vn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new ht(new Gt,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(dl),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;wr(s,y*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bs||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fl[(s-r-1)%fl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Gi;p>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);const m=[];let y=0;for(let T=0;T<Gi;++T){const P=T/_,I=Math.exp(-P*P/2);m.push(I),T===0?y+=I:T<p&&(y+=2*I)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[s],C=3*E*(s>v-ps?s-v+ps:0),b=4*(this._cubeSize-E);wr(e,C,b,3*E,2*E),c.setRenderTarget(e),c.render(u,ko)}}function am(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+ul.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ps?c=ul[o-i+ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),v=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,P=b>2?0:-1,I=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(I,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];E.set(x,m*g*b)}const C=new Ke;C.setAttribute("position",new be(y,_)),C.setAttribute("uv",new be(v,p)),C.setAttribute("faceIndex",new be(E,m)),t.push(C),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ml(i,t,e){const n=new qi(i,t,e);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cm(i,t,e){const n=new Float32Array(Gi),s=new D(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function gl(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function _l(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function lm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xa||c===va,h=c===bs||c===Ts;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new pl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new pl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function um(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,E=y.length;v<E;v+=3){const C=y[v+0],b=y[v+1],T=y[v+2];d.push(C,b,b,T,T,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const C=v+0,b=v+1,T=v+2;d.push(C,b,b,T,T,C)}}else return;const p=new(zh(d)?Wh:Vh)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function dm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pm(i,t,e){const n=new WeakMap,s=new ae;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*b*4*u),P=new Bh(T,C,b,u);P.type=ii,P.needsUpdate=!0;const I=E*4;for(let S=0;S<u;S++){const U=m[S],O=y[S],K=v[S],Y=C*b*4*S;for(let V=0;V<U.count;V++){const $=V*I;g===!0&&(s.fromBufferAttribute(U,V),T[Y+$+0]=s.x,T[Y+$+1]=s.y,T[Y+$+2]=s.z,T[Y+$+3]=0),_===!0&&(s.fromBufferAttribute(O,V),T[Y+$+4]=s.x,T[Y+$+5]=s.y,T[Y+$+6]=s.z,T[Y+$+7]=0),p===!0&&(s.fromBufferAttribute(K,V),T[Y+$+8]=s.x,T[Y+$+9]=s.y,T[Y+$+10]=s.z,T[Y+$+11]=K.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new te(C,b)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class $h extends je{constructor(t,e,n,s,r,o,a,c,l,h=ys){if(h!==ys&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Wi),n===void 0&&h===Rs&&(n=As),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new je,xl=new $h(1,1),Jh=new Bh,Qh=new tf,tu=new Yh,vl=[],yl=[],Ml=new Float32Array(16),Sl=new Float32Array(9),El=new Float32Array(4);function Ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=vl[s];if(r===void 0&&(r=new Float32Array(s),vl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),De(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Sl.set(n),i.uniformMatrix3fv(this.addr,!1,Sl),De(e,n)}}function Sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ml.set(n),i.uniformMatrix4fv(this.addr,!1,Ml),De(e,n)}}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xl.compareFunction=Fh,r=xl):r=Zh,e.setTexture2D(t||r,s)}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function Im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tu,s)}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jh,s)}function Nm(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return xm;case 35666:return vm;case 35674:return ym;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return wm;case 35668:case 35672:return bm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Um}}function Om(i,t){i.uniform1fv(this.addr,t)}function Fm(i,t){const e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function zm(i,t){const e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function km(i,t){const e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Bm(i,t){const e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hm(i,t){const e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gm(i,t){const e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vm(i,t){i.uniform1iv(this.addr,t)}function Wm(i,t){i.uniform2iv(this.addr,t)}function qm(i,t){i.uniform3iv(this.addr,t)}function Xm(i,t){i.uniform4iv(this.addr,t)}function Ym(i,t){i.uniform1uiv(this.addr,t)}function jm(i,t){i.uniform2uiv(this.addr,t)}function Km(i,t){i.uniform3uiv(this.addr,t)}function $m(i,t){i.uniform4uiv(this.addr,t)}function Zm(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zh,r[o])}function Jm(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function Qm(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tu,r[o])}function tg(i,t,e){const n=this.cache,s=t.length,r=co(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jh,r[o])}function eg(i){switch(i){case 5126:return Om;case 35664:return Fm;case 35665:return zm;case 35666:return km;case 35674:return Bm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return qm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return jm;case 36295:return Km;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return tg}}class ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nm(e.type)}}class ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eg(e.type)}}class sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function wl(i,t){i.seq.push(t),i.map[t.id]=t}function rg(i,t,e){const n=i.name,s=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),o=Wo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){wl(e,l===void 0?new ng(a,i,t):new ig(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new sg(a),wl(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);rg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function bl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const og=37297;let ag=0;function cg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function lg(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===Qr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===Qr&&(n="LinearSRGBToLinearDisplayP3"),i){case Ai:case oo:return[n,"LinearTransferOETF"];case Ce:case gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cg(i.getShaderSource(t),o)}else return s}function hg(i,t){const e=lg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ug(i,t){let e;switch(t){case dd:e="Linear";break;case fd:e="Reinhard";break;case pd:e="Cineon";break;case bh:e="ACESFilmic";break;case gd:e="AgX";break;case _d:e="Neutral";break;case md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new D;function dg(){re.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function pg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xs(i){return i!==""}function Al(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(gg,xg)}const _g=new Map;function xg(i,t){let e=Yt[t];if(e===void 0){const n=_g.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(vg,yg)}function yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Mg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ts:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Eg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function bg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Mg(e),l=Sg(e),h=Eg(e),u=wg(e),d=bg(e),f=fg(e),g=pg(r),_=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(p=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==bi?ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,hg("linearToOutputTexel",e.outputColorSpace),dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Ya(o),o=Al(o,e),o=Rl(o,e),a=Ya(a),a=Al(a,e),a=Rl(a,e),o=Cl(o),a=Cl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,E=y+m+a,C=bl(s,s.VERTEX_SHADER,v),b=bl(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(S){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(C).trim(),K=s.getShaderInfoLog(b).trim();let Y=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,b);else{const $=Tl(s,C,"vertex"),k=Tl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+U+`
`+$+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||K==="")&&(V=!1);V&&(S.diagnostics={runnable:Y,programLog:U,vertexShader:{log:O,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(C),s.deleteShader(b),P=new Yr(s,_),I=mg(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,og)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ag++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let Ag=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cg(t),e.set(t,n)),n}}class Cg{constructor(t){this.id=Ag++,this.code=t,this.usedTimes=0}}function Pg(i,t,e,n,s,r,o){const a=new Hh,c=new Rg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,U,O,K){const Y=O.fog,V=K.geometry,$=x.isMeshStandardMaterial?O.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),at=k&&k.mapping===ro?k.image.height:null,it=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Vt=yt!==void 0?yt.length:0;let Kt=0;V.morphAttributes.position!==void 0&&(Kt=1),V.morphAttributes.normal!==void 0&&(Kt=2),V.morphAttributes.color!==void 0&&(Kt=3);let J,F,ot,et;if(it){const Oe=Fn[it];J=Oe.vertexShader,F=Oe.fragmentShader}else J=x.vertexShader,F=x.fragmentShader,c.update(x),ot=c.getVertexShaderID(x),et=c.getFragmentShaderID(x);const pt=i.getRenderTarget(),ct=K.isInstancedMesh===!0,Et=K.isBatchedMesh===!0,wt=!!x.map,Tt=!!x.matcap,R=!!k,ue=!!x.aoMap,It=!!x.lightMap,Ft=!!x.bumpMap,vt=!!x.normalMap,Jt=!!x.displacementMap,gt=!!x.emissiveMap,A=!!x.metalnessMap,M=!!x.roughnessMap,H=x.anisotropy>0,Z=x.clearcoat>0,tt=x.dispersion>0,Q=x.iridescence>0,bt=x.sheen>0,st=x.transmission>0,ft=H&&!!x.anisotropyMap,qt=Z&&!!x.clearcoatMap,rt=Z&&!!x.clearcoatNormalMap,St=Z&&!!x.clearcoatRoughnessMap,Ut=Q&&!!x.iridescenceMap,Nt=Q&&!!x.iridescenceThicknessMap,_t=bt&&!!x.sheenColorMap,$t=bt&&!!x.sheenRoughnessMap,Bt=!!x.specularMap,ne=!!x.specularColorMap,z=!!x.specularIntensityMap,L=st&&!!x.transmissionMap,N=st&&!!x.thicknessMap,W=!!x.gradientMap,nt=!!x.alphaMap,mt=x.alphaTest>0,Xt=!!x.alphaHash,ye=!!x.extensions;let ve=bi;x.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Zt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:F,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Et,batchingColor:Et&&K._colorsTexture!==null,instancing:ct,instancingColor:ct&&K.instanceColor!==null,instancingMorph:ct&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ai,alphaToCoverage:!!x.alphaToCoverage,map:wt,matcap:Tt,envMap:R,envMapMode:R&&k.mapping,envMapCubeUVHeight:at,aoMap:ue,lightMap:It,bumpMap:Ft,normalMap:vt,displacementMap:f&&Jt,emissiveMap:gt,normalMapObjectSpace:vt&&x.normalMapType===Md,normalMapTangentSpace:vt&&x.normalMapType===mc,metalnessMap:A,roughnessMap:M,anisotropy:H,anisotropyMap:ft,clearcoat:Z,clearcoatMap:qt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:tt,iridescence:Q,iridescenceMap:Ut,iridescenceThicknessMap:Nt,sheen:bt,sheenColorMap:_t,sheenRoughnessMap:$t,specularMap:Bt,specularColorMap:ne,specularIntensityMap:z,transmission:st,transmissionMap:L,thicknessMap:N,gradientMap:W,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:mt,alphaHash:Xt,combine:x.combine,mapUv:wt&&p(x.map.channel),aoMapUv:ue&&p(x.aoMap.channel),lightMapUv:It&&p(x.lightMap.channel),bumpMapUv:Ft&&p(x.bumpMap.channel),normalMapUv:vt&&p(x.normalMap.channel),displacementMapUv:Jt&&p(x.displacementMap.channel),emissiveMapUv:gt&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:M&&p(x.roughnessMap.channel),anisotropyMapUv:ft&&p(x.anisotropyMap.channel),clearcoatMapUv:qt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:$t&&p(x.sheenRoughnessMap.channel),specularMapUv:Bt&&p(x.specularMap.channel),specularColorMapUv:ne&&p(x.specularColorMap.channel),specularIntensityMapUv:z&&p(x.specularIntensityMap.channel),transmissionMapUv:L&&p(x.transmissionMap.channel),thicknessMapUv:N&&p(x.thicknessMap.channel),alphaMapUv:nt&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(vt||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!V.attributes.uv&&(wt||nt),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:wt&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function y(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)S.push(U),S.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(S,x),E(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const S=_[x.type];let U;if(S){const O=Fn[S];U=ff.clone(O.uniforms)}else U=x.uniforms;return U}function b(x,S){let U;for(let O=0,K=h.length;O<K;O++){const Y=h[O];if(Y.cacheKey===S){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new Tg(i,S,x,r),h.push(U)),U}function T(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function P(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:I}}function Lg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Dg),n.length>1&&n.sort(d||Ll),s.length>1&&s.sort(d||Ll)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ig(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dl,i.set(n,[o])):s>=r.length?(o=new Dl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ot};break;case"SpotLight":e={position:new D,direction:new D,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Og=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zg(i){const t=new Ug,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new xe,o=new xe;function a(l){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,v=0,E=0,C=0,b=0,T=0;l.sort(Fg);for(let I=0,x=l.length;I<x;I++){const S=l[I],U=S.color,O=S.intensity,K=S.distance,Y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(S.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(S.sh.coefficients[V],O);T++}else if(S.isDirectionalLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,k=e.get(S);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=S.shadow.matrix,y++}n.directional[f]=V,f++}else if(S.isSpotLight){const V=t.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(U).multiplyScalar(O),V.distance=K,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,n.spot[_]=V;const $=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,$.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[_]=$.matrix,S.castShadow){const k=e.get(S);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=Y,E++}_++}else if(S.isRectAreaLight){const V=t.get(S);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=V,p++}else if(S.isPointLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const $=S.shadow,k=e.get(S);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=V,g++}else if(S.isHemisphereLight){const V=t.get(S);V.skyColor.copy(S.color).multiplyScalar(O),V.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==E||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=E,P.numSpotMaps=C,P.numLightProbes=T,n.version=Og++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const v=l[m];if(v.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Il(i){const t=new zg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Il(i),t.set(s,[a])):r>=o.length?(a=new Il(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bg extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hg extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gg=`void main() {
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
}`;function Wg(i,t,e){let n=new vc;const s=new te,r=new te,o=new ae,a=new Bg({depthPacking:yd}),c=new Hg,l={},h=e.maxTextureSize,u={[Hn]:Ye,[Ye]:Hn,[kn]:kn},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Gg,fragmentShader:Vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ht(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let m=this.type;this.render=function(b,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),U=i.state;U.setBlending(wi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=m!==Qn&&this.type===Qn,K=m===Qn&&this.type!==Qn;for(let Y=0,V=b.length;Y<V;Y++){const $=b[Y],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const at=k.getFrameExtents();if(s.multiply(at),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,k.mapSize.y=r.y)),k.map===null||O===!0||K===!0){const yt=this.type!==Qn?{minFilter:_n,magFilter:_n}:{};k.map!==null&&k.map.dispose(),k.map=new qi(s.x,s.y,yt),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const it=k.getViewportCount();for(let yt=0;yt<it;yt++){const Vt=k.getViewport(yt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),U.viewport(o),k.updateMatrices($,yt),n=k.getFrustum(),E(T,P,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===Qn&&y(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,x,S)};function y(b,T){const P=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qi(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,P,f,_,null)}function v(b,T,P,I){let x=null;const S=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)x=S;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,O=T.uuid;let K=l[U];K===void 0&&(K={},l[U]=K);let Y=K[O];Y===void 0&&(Y=x.clone(),K[O]=Y,T.addEventListener("dispose",C)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,I===Qn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=P}return x}function E(b,T,P,I,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Qn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const O=t.update(b),K=b.material;if(Array.isArray(K)){const Y=O.groups;for(let V=0,$=Y.length;V<$;V++){const k=Y[V],at=K[k.materialIndex];if(at&&at.visible){const it=v(b,at,I,x);b.onBeforeShadow(i,b,T,P,O,it,k),i.renderBufferDirect(P,null,O,it,b,k),b.onAfterShadow(i,b,T,P,O,it,k)}}}else if(K.visible){const Y=v(b,K,I,x);b.onBeforeShadow(i,b,T,P,O,Y,null),i.renderBufferDirect(P,null,O,Y,b,null),b.onAfterShadow(i,b,T,P,O,Y,null)}}const U=b.children;for(let O=0,K=U.length;O<K;O++)E(U[O],T,P,I,x)}function C(b){b.target.removeEventListener("dispose",C);for(const P in l){const I=l[P],x=b.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}const qg={[ua]:da,[fa]:ga,[pa]:_a,[ws]:ma,[da]:ua,[ga]:fa,[_a]:pa,[ma]:ws};function Xg(i){function t(){let z=!1;const L=new ae;let N=null;const W=new ae(0,0,0,0);return{setMask:function(nt){N!==nt&&!z&&(i.colorMask(nt,nt,nt,nt),N=nt)},setLocked:function(nt){z=nt},setClear:function(nt,mt,Xt,ye,ve){ve===!0&&(nt*=ye,mt*=ye,Xt*=ye),L.set(nt,mt,Xt,ye),W.equals(L)===!1&&(i.clearColor(nt,mt,Xt,ye),W.copy(L))},reset:function(){z=!1,N=null,W.set(-1,0,0,0)}}}function e(){let z=!1,L=!1,N=null,W=null,nt=null;return{setReversed:function(mt){L=mt},setTest:function(mt){mt?ot(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(mt){N!==mt&&!z&&(i.depthMask(mt),N=mt)},setFunc:function(mt){if(L&&(mt=qg[mt]),W!==mt){switch(mt){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=mt}},setLocked:function(mt){z=mt},setClear:function(mt){nt!==mt&&(i.clearDepth(mt),nt=mt)},reset:function(){z=!1,N=null,W=null,nt=null}}}function n(){let z=!1,L=null,N=null,W=null,nt=null,mt=null,Xt=null,ye=null,ve=null;return{setTest:function(Zt){z||(Zt?ot(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Zt){L!==Zt&&!z&&(i.stencilMask(Zt),L=Zt)},setFunc:function(Zt,Oe,ln){(N!==Zt||W!==Oe||nt!==ln)&&(i.stencilFunc(Zt,Oe,ln),N=Zt,W=Oe,nt=ln)},setOp:function(Zt,Oe,ln){(mt!==Zt||Xt!==Oe||ye!==ln)&&(i.stencilOp(Zt,Oe,ln),mt=Zt,Xt=Oe,ye=ln)},setLocked:function(Zt){z=Zt},setClear:function(Zt){ve!==Zt&&(i.clearStencil(Zt),ve=Zt)},reset:function(){z=!1,L=null,N=null,W=null,nt=null,mt=null,Xt=null,ye=null,ve=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,y=null,v=null,E=null,C=null,b=new Ot(0,0,0),T=0,P=!1,I=null,x=null,S=null,U=null,O=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=V>=2);let k=null,at={};const it=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Vt=new ae().fromArray(it),Kt=new ae().fromArray(yt);function J(z,L,N,W){const nt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(z,mt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<N;Xt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(L+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return mt}const F={};F[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),r.setFunc(ws),It(!1),Ft(Gc),ot(i.CULL_FACE),R(wi);function ot(z){l[z]!==!0&&(i.enable(z),l[z]=!0)}function et(z){l[z]!==!1&&(i.disable(z),l[z]=!1)}function pt(z,L){return h[z]!==L?(i.bindFramebuffer(z,L),h[z]=L,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=L),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=L),!0):!1}function ct(z,L){let N=d,W=!1;if(z){N=u.get(L),N===void 0&&(N=[],u.set(L,N));const nt=z.textures;if(N.length!==nt.length||N[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Xt=nt.length;mt<Xt;mt++)N[mt]=i.COLOR_ATTACHMENT0+mt;N.length=nt.length,W=!0}}else N[0]!==i.BACK&&(N[0]=i.BACK,W=!0);W&&i.drawBuffers(N)}function Et(z){return f!==z?(i.useProgram(z),f=z,!0):!1}const wt={[Hi]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};wt[Ku]=i.MIN,wt[$u]=i.MAX;const Tt={[Zu]:i.ZERO,[Ju]:i.ONE,[Qu]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[ed]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[ld]:i.ONE_MINUS_CONSTANT_ALPHA};function R(z,L,N,W,nt,mt,Xt,ye,ve,Zt){if(z===wi){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),z!==Xu){if(z!==_||Zt!==P){if((p!==Hi||v!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,v=Hi),Zt)switch(z){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,y=null,E=null,C=null,b.set(0,0,0),T=0,_=z,P=Zt}return}nt=nt||L,mt=mt||N,Xt=Xt||W,(L!==p||nt!==v)&&(i.blendEquationSeparate(wt[L],wt[nt]),p=L,v=nt),(N!==m||W!==y||mt!==E||Xt!==C)&&(i.blendFuncSeparate(Tt[N],Tt[W],Tt[mt],Tt[Xt]),m=N,y=W,E=mt,C=Xt),(ye.equals(b)===!1||ve!==T)&&(i.blendColor(ye.r,ye.g,ye.b,ve),b.copy(ye),T=ve),_=z,P=!1}function ue(z,L){z.side===kn?et(i.CULL_FACE):ot(i.CULL_FACE);let N=z.side===Ye;L&&(N=!N),It(N),z.blending===vs&&z.transparent===!1?R(wi):R(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const W=z.stencilWrite;o.setTest(W),W&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Jt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(z){I!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),I=z)}function Ft(z){z!==Wu?(ot(i.CULL_FACE),z!==x&&(z===Gc?i.cullFace(i.BACK):z===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),x=z}function vt(z){z!==S&&(Y&&i.lineWidth(z),S=z)}function Jt(z,L,N){z?(ot(i.POLYGON_OFFSET_FILL),(U!==L||O!==N)&&(i.polygonOffset(L,N),U=L,O=N)):et(i.POLYGON_OFFSET_FILL)}function gt(z){z?ot(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function A(z){z===void 0&&(z=i.TEXTURE0+K-1),k!==z&&(i.activeTexture(z),k=z)}function M(z,L,N){N===void 0&&(k===null?N=i.TEXTURE0+K-1:N=k);let W=at[N];W===void 0&&(W={type:void 0,texture:void 0},at[N]=W),(W.type!==z||W.texture!==L)&&(k!==N&&(i.activeTexture(N),k=N),i.bindTexture(z,L||F[z]),W.type=z,W.texture=L)}function H(){const z=at[k];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(z){Vt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Vt.copy(z))}function _t(z){Kt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Kt.copy(z))}function $t(z,L){let N=c.get(L);N===void 0&&(N=new WeakMap,c.set(L,N));let W=N.get(z);W===void 0&&(W=i.getUniformBlockIndex(L,z.name),N.set(z,W))}function Bt(z,L){const W=c.get(L).get(z);a.get(L)!==W&&(i.uniformBlockBinding(L,W,z.__bindingPointIndex),a.set(L,W))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},k=null,at={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,y=null,v=null,E=null,C=null,b=new Ot(0,0,0),T=0,P=!1,I=null,x=null,S=null,U=null,O=null,Vt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ot,disable:et,bindFramebuffer:pt,drawBuffers:ct,useProgram:Et,setBlending:R,setMaterial:ue,setFlipSided:It,setCullFace:Ft,setLineWidth:vt,setPolygonOffset:Jt,setScissorTest:gt,activeTexture:A,bindTexture:M,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:St,texImage3D:Ut,updateUBOMapping:$t,uniformBlockBinding:Bt,texStorage2D:qt,texStorage3D:rt,texSubImage2D:Q,texSubImage3D:bt,compressedTexSubImage2D:st,compressedTexSubImage3D:ft,scissor:Nt,viewport:_t,reset:ne}}function Ul(i,t,e,n){const s=Yg(n);switch(e){case Ph:return i*t;case Dh:return i*t;case Ih:return i*t*2;case Uh:return i*t/s.components*s.byteLength;case dc:return i*t/s.components*s.byteLength;case Nh:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case Ga:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oh:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(i){switch(i){case oi:case Ah:return{byteLength:1,components:1};case $s:case Rh:case Zs:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Wi:case lc:case ii:return{byteLength:4,components:1};case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):eo("canvas")}function _(A,M,H){let Z=1;const tt=gt(A);if((tt.width>H||tt.height>H)&&(Z=H/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(Z*tt.width),bt=Math.floor(Z*tt.height);u===void 0&&(u=g(Q,bt));const st=M?g(Q,bt):u;return st.width=Q,st.height=bt,st.getContext("2d").drawImage(A,0,0,Q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Q+"x"+bt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==_n&&A.minFilter!==gn}function m(A){i.generateMipmap(A)}function y(A,M,H,Z,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=M;if(M===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),M===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),M===i.RGBA){const bt=tt?Zr:re.getTransfer(Z);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=bt===me?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(A,M){let H;return A?M===null||M===Wi||M===As?H=i.DEPTH24_STENCIL8:M===ii?H=i.DEPTH32F_STENCIL8:M===$s&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===As?H=i.DEPTH_COMPONENT24:M===ii?H=i.DEPTH_COMPONENT32F:M===$s&&(H=i.DEPTH_COMPONENT16),H}function E(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==_n&&A.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),I(M)}function T(A){const M=n.get(A);if(M.__webglInit===void 0)return;const H=A.source,Z=d.get(H);if(Z){const tt=Z[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(A),Object.keys(Z).length===0&&d.delete(H)}n.remove(A)}function P(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const H=A.source,Z=d.get(H);delete Z[M.__cacheKey],o.memory.textures--}function I(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let tt=0;tt<M.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=A.textures;for(let Z=0,tt=H.length;Z<tt;Z++){const Q=n.get(H[Z]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(A)}let x=0;function S(){x=0}function U(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const H=n.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(H,A,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function Y(A,M){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Kt(H,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function V(A,M){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Kt(H,A,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function $(A,M){const H=n.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const k={[$r]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},at={[_n]:i.NEAREST,[xd]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},it={[Sd]:i.NEVER,[Rd]:i.ALWAYS,[Ed]:i.LESS,[Fh]:i.LEQUAL,[wd]:i.EQUAL,[Ad]:i.GEQUAL,[bd]:i.GREATER,[Td]:i.NOTEQUAL};function yt(A,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===_o||M.magFilter===rr||M.magFilter===yi||M.minFilter===gn||M.minFilter===_o||M.minFilter===rr||M.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,k[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,k[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,k[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==rr&&M.minFilter!==yi||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Vt(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const Q=O(M);if(Q!==A.__cacheKey){tt[Q]===void 0&&(tt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[Q].usedTimes++;const bt=tt[A.__cacheKey];bt!==void 0&&(tt[A.__cacheKey].usedTimes--,bt.usedTimes===0&&P(M)),A.__cacheKey=Q,A.__webglTexture=tt[Q].texture}return H}function Kt(A,M,H){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Vt(A,M),Q=M.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+H);const bt=n.get(Q);if(Q.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);const st=re.getPrimaries(re.workingColorSpace),ft=M.colorSpace===xi?null:re.getPrimaries(M.colorSpace),qt=M.colorSpace===xi||st===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let rt=_(M.image,!1,s.maxTextureSize);rt=Jt(M,rt);const St=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type);let Nt=y(M.internalFormat,St,Ut,M.colorSpace,M.isVideoTexture);yt(Z,M);let _t;const $t=M.mipmaps,Bt=M.isVideoTexture!==!0,ne=bt.__version===void 0||tt===!0,z=Q.dataReady,L=E(M,rt);if(M.isDepthTexture)Nt=v(M.format===Rs,M.type),ne&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Ut,null));else if(M.isDataTexture)if($t.length>0){Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,L,Nt,$t[0].width,$t[0].height);for(let N=0,W=$t.length;N<W;N++)_t=$t[N],Bt?z&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,_t.width,_t.height,St,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,N,Nt,_t.width,_t.height,0,St,Ut,_t.data);M.generateMipmaps=!1}else Bt?(ne&&e.texStorage2D(i.TEXTURE_2D,L,Nt,rt.width,rt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Ut,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Ut,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Nt,$t[0].width,$t[0].height,rt.depth);for(let N=0,W=$t.length;N<W;N++)if(_t=$t[N],M.format!==Pn)if(St!==null)if(Bt){if(z)if(M.layerUpdates.size>0){const nt=Ul(_t.width,_t.height,M.format,M.type);for(const mt of M.layerUpdates){const Xt=_t.data.subarray(mt*nt/_t.data.BYTES_PER_ELEMENT,(mt+1)*nt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,mt,_t.width,_t.height,1,St,Xt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,_t.width,_t.height,rt.depth,St,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Nt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,_t.width,_t.height,rt.depth,St,Ut,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,N,Nt,_t.width,_t.height,rt.depth,0,St,Ut,_t.data)}else{Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,L,Nt,$t[0].width,$t[0].height);for(let N=0,W=$t.length;N<W;N++)_t=$t[N],M.format!==Pn?St!==null?Bt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,N,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?z&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,_t.width,_t.height,St,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,N,Nt,_t.width,_t.height,0,St,Ut,_t.data)}else if(M.isDataArrayTexture)if(Bt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,L,Nt,rt.width,rt.height,rt.depth),z)if(M.layerUpdates.size>0){const N=Ul(rt.width,rt.height,M.format,M.type);for(const W of M.layerUpdates){const nt=rt.data.subarray(W*N/rt.data.BYTES_PER_ELEMENT,(W+1)*N/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,rt.width,rt.height,1,St,Ut,nt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,St,Ut,rt.data);else if(M.isData3DTexture)Bt?(ne&&e.texStorage3D(i.TEXTURE_3D,L,Nt,rt.width,rt.height,rt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,St,Ut,rt.data);else if(M.isFramebufferTexture){if(ne)if(Bt)e.texStorage2D(i.TEXTURE_2D,L,Nt,rt.width,rt.height);else{let N=rt.width,W=rt.height;for(let nt=0;nt<L;nt++)e.texImage2D(i.TEXTURE_2D,nt,Nt,N,W,0,St,Ut,null),N>>=1,W>>=1}}else if($t.length>0){if(Bt&&ne){const N=gt($t[0]);e.texStorage2D(i.TEXTURE_2D,L,Nt,N.width,N.height)}for(let N=0,W=$t.length;N<W;N++)_t=$t[N],Bt?z&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,St,Ut,_t):e.texImage2D(i.TEXTURE_2D,N,Nt,St,Ut,_t);M.generateMipmaps=!1}else if(Bt){if(ne){const N=gt(rt);e.texStorage2D(i.TEXTURE_2D,L,Nt,N.width,N.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,St,Ut,rt);p(M)&&m(Z),bt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,H){if(M.image.length!==6)return;const Z=Vt(A,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const Q=n.get(tt);if(tt.version!==Q.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const bt=re.getPrimaries(re.workingColorSpace),st=M.colorSpace===xi?null:re.getPrimaries(M.colorSpace),ft=M.colorSpace===xi||bt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,St=[];for(let W=0;W<6;W++)!qt&&!rt?St[W]=_(M.image[W],!0,s.maxCubemapSize):St[W]=rt?M.image[W].image:M.image[W],St[W]=Jt(M,St[W]);const Ut=St[0],Nt=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),$t=y(M.internalFormat,Nt,_t,M.colorSpace),Bt=M.isVideoTexture!==!0,ne=Q.__version===void 0||Z===!0,z=tt.dataReady;let L=E(M,Ut);yt(i.TEXTURE_CUBE_MAP,M);let N;if(qt){Bt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,$t,Ut.width,Ut.height);for(let W=0;W<6;W++){N=St[W].mipmaps;for(let nt=0;nt<N.length;nt++){const mt=N[nt];M.format!==Pn?Nt!==null?Bt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,0,0,mt.width,mt.height,Nt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,$t,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,0,0,mt.width,mt.height,Nt,_t,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt,$t,mt.width,mt.height,0,Nt,_t,mt.data)}}}else{if(N=M.mipmaps,Bt&&ne){N.length>0&&L++;const W=gt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,$t,W.width,W.height)}for(let W=0;W<6;W++)if(rt){Bt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,St[W].width,St[W].height,Nt,_t,St[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,$t,St[W].width,St[W].height,0,Nt,_t,St[W].data);for(let nt=0;nt<N.length;nt++){const Xt=N[nt].image[W].image;Bt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,0,0,Xt.width,Xt.height,Nt,_t,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,$t,Xt.width,Xt.height,0,Nt,_t,Xt.data)}}else{Bt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Nt,_t,St[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,$t,Nt,_t,St[W]);for(let nt=0;nt<N.length;nt++){const mt=N[nt];Bt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,0,0,Nt,_t,mt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt+1,$t,Nt,_t,mt.image[W])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),Q.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function F(A,M,H,Z,tt,Q){const bt=r.convert(H.format,H.colorSpace),st=r.convert(H.type),ft=y(H.internalFormat,bt,st,H.colorSpace);if(!n.get(M).__hasExternalTextures){const rt=Math.max(1,M.width>>Q),St=Math.max(1,M.height>>Q);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Q,ft,rt,St,M.depth,0,bt,st,null):e.texImage2D(tt,Q,ft,rt,St,0,bt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,n.get(H).__webglTexture,0,It(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,n.get(H).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,Q=v(M.stencilBuffer,tt),bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=It(M);Ft(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Q,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,A)}else{const Z=M.textures;for(let tt=0;tt<Z.length;tt++){const Q=Z[tt],bt=r.convert(Q.format,Q.colorSpace),st=r.convert(Q.type),ft=y(Q.internalFormat,bt,st,Q.colorSpace),qt=It(M);H&&Ft(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ft,M.width,M.height):Ft(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,tt=It(M);if(M.depthTexture.format===ys)Ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Rs)Ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function pt(A){const M=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");et(M.__webglFramebuffer,A)}else if(H){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),ot(M.__webglDepthbuffer[Z],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ot(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,M,H){const Z=n.get(A);M!==void 0&&F(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&pt(A)}function Et(A){const M=A.texture,H=n.get(A),Z=n.get(M);A.addEventListener("dispose",b);const tt=A.textures,Q=A.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[st]=[];for(let ft=0;ft<M.mipmaps.length;ft++)H.__webglFramebuffer[st][ft]=i.createFramebuffer()}else H.__webglFramebuffer[st]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)H.__webglFramebuffer[st]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(bt)for(let st=0,ft=tt.length;st<ft;st++){const qt=n.get(tt[st]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ft(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let st=0;st<tt.length;st++){const ft=tt[st];H.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[st]);const qt=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),St=y(ft.internalFormat,qt,rt,ft.colorSpace,A.isXRRenderTarget===!0),Ut=It(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,H.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),yt(i.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)F(H.__webglFramebuffer[st][ft],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft);else F(H.__webglFramebuffer[st],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,ft=tt.length;st<ft;st++){const qt=tt[st],rt=n.get(qt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),yt(i.TEXTURE_2D,qt),F(H.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),yt(st,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)F(H.__webglFramebuffer[ft],A,M,i.COLOR_ATTACHMENT0,st,ft);else F(H.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,st,0);p(M)&&m(st),e.unbindTexture()}A.depthBuffer&&pt(A)}function wt(A){const M=A.textures;for(let H=0,Z=M.length;H<Z;H++){const tt=M[H];if(p(tt)){const Q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(tt).__webglTexture;e.bindTexture(Q,bt),m(Q),e.unbindTexture()}}}const Tt=[],R=[];function ue(A){if(A.samples>0){if(Ft(A)===!1){const M=A.textures,H=A.width,Z=A.height;let tt=i.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(A),st=M.length>1;if(st)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const qt=n.get(M[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,tt,i.NEAREST),c===!0&&(Tt.length=0,R.length=0,Tt.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(Q),R.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const qt=n.get(M[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function It(A){return Math.min(s.maxSamples,A.samples)}function Ft(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Jt(A,M){const H=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Ai&&H!==xi&&(re.getTransfer(H)===me?(Z!==Pn||tt!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=S,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=ct,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Ft}function Kg(i,t){function e(n,s=xi){let r;const o=re.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.BYTE;if(n===Rh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Lh)return i.RGB;if(n===Pn)return i.RGBA;if(n===Dh)return i.LUMINANCE;if(n===Ih)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===Uh)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Nh)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===Ea||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Ta)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Oa||n===Fa||n===za||n===ka||n===Ba||n===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Ga||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Wa||n===qa||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class $g extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zg={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jg=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends Is{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new t_,p=e.getContextAttributes();let m=null,y=null;const v=[],E=[],C=new te;let b=null;const T=new tn;T.layers.enable(1),T.viewport=new ae;const P=new tn;P.layers.enable(2),P.viewport=new ae;const I=[T,P],x=new $g;x.layers.enable(1),x.layers.enable(2);let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let F=v[J];return F===void 0&&(F=new qo,v[J]=F),F.getTargetRaySpace()},this.getControllerGrip=function(J){let F=v[J];return F===void 0&&(F=new qo,v[J]=F),F.getGripSpace()},this.getHand=function(J){let F=v[J];return F===void 0&&(F=new qo,v[J]=F),F.getHandSpace()};function O(J){const F=E.indexOf(J.inputSource);if(F===-1)return;const ot=v[F];ot!==void 0&&(ot.update(J.inputSource,J.frame,l||o),ot.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<v.length;J++){const F=E[J];F!==null&&(E[J]=null,v[J].disconnect(F))}S=null,U=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qi(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let F=null,ot=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=p.stencil?Rs:ys,ot=p.stencil?As:Wi);const pt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new qi(d.textureWidth,d.textureHeight,{format:Pn,type:oi,depthTexture:new $h(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(J){for(let F=0;F<J.removed.length;F++){const ot=J.removed[F],et=E.indexOf(ot);et>=0&&(E[et]=null,v[et].disconnect(ot))}for(let F=0;F<J.added.length;F++){const ot=J.added[F];let et=E.indexOf(ot);if(et===-1){for(let ct=0;ct<v.length;ct++)if(ct>=E.length){E.push(ot),et=ct;break}else if(E[ct]===null){E[ct]=ot,et=ct;break}if(et===-1)break}const pt=v[et];pt&&pt.connect(ot)}}const V=new D,$=new D;function k(J,F,ot){V.setFromMatrixPosition(F.matrixWorld),$.setFromMatrixPosition(ot.matrixWorld);const et=V.distanceTo($),pt=F.projectionMatrix.elements,ct=ot.projectionMatrix.elements,Et=pt[14]/(pt[10]-1),wt=pt[14]/(pt[10]+1),Tt=(pt[9]+1)/pt[5],R=(pt[9]-1)/pt[5],ue=(pt[8]-1)/pt[0],It=(ct[8]+1)/ct[0],Ft=Et*ue,vt=Et*It,Jt=et/(-ue+It),gt=Jt*-ue;if(F.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(gt),J.translateZ(Jt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pt[10]===-1)J.projectionMatrix.copy(F.projectionMatrix),J.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const A=Et+Jt,M=wt+Jt,H=Ft-gt,Z=vt+(et-gt),tt=Tt*wt/M*A,Q=R*wt/M*A;J.projectionMatrix.makePerspective(H,Z,tt,Q,A,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,F){F===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(F.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let F=J.near,ot=J.far;_.texture!==null&&(_.depthNear>0&&(F=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),x.near=P.near=T.near=F,x.far=P.far=T.far=ot,(S!==x.near||U!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,U=x.far);const et=J.parent,pt=x.cameras;at(x,et);for(let ct=0;ct<pt.length;ct++)at(pt[ct],et);pt.length===2?k(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),it(J,x,et)};function it(J,F,ot){ot===null?J.matrix.copy(F.matrixWorld):(J.matrix.copy(ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(F.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(F.projectionMatrix),J.projectionMatrixInverse.copy(F.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Cs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let yt=null;function Vt(J,F){if(h=F.getViewerPose(l||o),g=F,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let et=!1;ot.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let ct=0;ct<ot.length;ct++){const Et=ot[ct];let wt=null;if(f!==null)wt=f.getViewport(Et);else{const R=u.getViewSubImage(d,Et);wt=R.viewport,ct===0&&(t.setRenderTargetTextures(y,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(y))}let Tt=I[ct];Tt===void 0&&(Tt=new tn,Tt.layers.enable(ct),Tt.viewport=new ae,I[ct]=Tt),Tt.matrix.fromArray(Et.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Et.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(wt.x,wt.y,wt.width,wt.height),ct===0&&(x.matrix.copy(Tt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(Tt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const ct=u.getDepthInformation(ot[0]);ct&&ct.isValid&&ct.texture&&_.init(t,ct,s.renderState)}}for(let ot=0;ot<v.length;ot++){const et=E[ot],pt=v[ot];et!==null&&pt!==void 0&&pt.update(et,F,l||o)}yt&&yt(J,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}const Kt=new jh;Kt.setAnimationLoop(Vt),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const Ni=new Ln,n_=new xe;function i_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ye&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ye&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,E=y.envMapRotation;v&&(p.envMap.value=v,Ni.copy(E),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(Ni)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function l(y,v){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(y,C);const b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function h(y){const v=u();y.__bindingPointIndex=v;const E=i.createBuffer(),C=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,T=E.length;b<T;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let I=0,x=P.length;I<x;I++){const S=P[I];if(f(S,b,I,C)===!0){const U=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let K=0;for(let Y=0;Y<O.length;Y++){const V=O[Y],$=_(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+K,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,E,C){const b=y.value,T=v+"_"+E;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{const P=C[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){const v=y.uniforms;let E=0;const C=16;for(let T=0,P=v.length;T<P;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,S=I.length;x<S;x++){const U=I[x],O=Array.isArray(U.value)?U.value:[U.value];for(let K=0,Y=O.length;K<Y;K++){const V=O[K],$=_(V),k=E%C,at=k%$.boundary,it=k+at;E+=at,it!==0&&C-it<$.storage&&(E+=C-it),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=$.storage}}}const b=E%C;return b>0&&(E+=C-b),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class r_{constructor(t={}){const{canvas:e=qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=bi,this.toneMappingExposure=1;const v=this;let E=!1,C=0,b=0,T=null,P=-1,I=null;const x=new ae,S=new ae;let U=null;const O=new Ot(0);let K=0,Y=e.width,V=e.height,$=1,k=null,at=null;const it=new ae(0,0,Y,V),yt=new ae(0,0,Y,V);let Vt=!1;const Kt=new vc;let J=!1,F=!1;const ot=new xe,et=new xe,pt=new D,ct=new ae,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Tt(){return T===null?$:1}let R=n;function ue(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),R===null){const B="webgl2";if(R=ue(B,w),R===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let It,Ft,vt,Jt,gt,A,M,H,Z,tt,Q,bt,st,ft,qt,rt,St,Ut,Nt,_t,$t,Bt,ne,z;function L(){It=new hm(R),It.init(),Bt=new Kg(R,It),Ft=new sm(R,It,t,Bt),vt=new Xg(R),Ft.reverseDepthBuffer&&vt.buffers.depth.setReversed(!0),Jt=new fm(R),gt=new Lg,A=new jg(R,It,vt,gt,Ft,Bt,Jt),M=new om(v),H=new lm(v),Z=new yf(R),ne=new nm(R,Z),tt=new um(R,Z,Jt,ne),Q=new mm(R,tt,Z,Jt),Nt=new pm(R,Ft,A),rt=new rm(gt),bt=new Pg(v,M,H,It,Ft,ne,rt),st=new i_(v,gt),ft=new Ig,qt=new kg(It),Ut=new em(v,M,H,vt,Q,d,c),St=new Wg(v,Q,Ft),z=new s_(R,Jt,Ft,vt),_t=new im(R,It,Jt),$t=new dm(R,It,Jt),Jt.programs=bt.programs,v.capabilities=Ft,v.extensions=It,v.properties=gt,v.renderLists=ft,v.shadowMap=St,v.state=vt,v.info=Jt}L();const N=new e_(v,R);this.xr=N,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=It.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=It.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(Y,V,!1))},this.getSize=function(w){return w.set(Y,V)},this.setSize=function(w,B,X=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,V=B,e.width=Math.floor(w*$),e.height=Math.floor(B*$),X===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Y*$,V*$).floor()},this.setDrawingBufferSize=function(w,B,X){Y=w,V=B,$=X,e.width=Math.floor(w*X),e.height=Math.floor(B*X),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,B,X,j){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,B,X,j),vt.viewport(x.copy(it).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,B,X,j){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,B,X,j),vt.scissor(S.copy(yt).multiplyScalar($).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){vt.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,B=!0,X=!0){let j=0;if(w){let G=!1;if(T!==null){const lt=T.texture.format;G=lt===pc||lt===fc||lt===dc}if(G){const lt=T.texture.type,Mt=lt===oi||lt===Wi||lt===$s||lt===As||lt===hc||lt===uc,At=Ut.getClearColor(),Ct=Ut.getClearAlpha(),kt=At.r,Ht=At.g,Pt=At.b;Mt?(f[0]=kt,f[1]=Ht,f[2]=Pt,f[3]=Ct,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=kt,g[1]=Ht,g[2]=Pt,g[3]=Ct,R.clearBufferiv(R.COLOR,0,g))}else j|=R.COLOR_BUFFER_BIT}B&&(j|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(j|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),ft.dispose(),qt.dispose(),gt.dispose(),M.dispose(),H.dispose(),Q.dispose(),ne.dispose(),z.dispose(),bt.dispose(),N.dispose(),N.removeEventListener("sessionstart",Os),N.removeEventListener("sessionend",Fs),In.stop()};function W(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Jt.autoReset,B=St.enabled,X=St.autoUpdate,j=St.needsUpdate,G=St.type;L(),Jt.autoReset=w,St.enabled=B,St.autoUpdate=X,St.needsUpdate=j,St.type=G}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){const B=w.target;B.removeEventListener("dispose",Xt),ye(B)}function ye(w){ve(w),gt.remove(w)}function ve(w){const B=gt.get(w).programs;B!==void 0&&(B.forEach(function(X){bt.releaseProgram(X)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,X,j,G,lt){B===null&&(B=Et);const Mt=G.isMesh&&G.matrixWorld.determinant()<0,At=Eu(w,B,X,j,G);vt.setMaterial(j,Mt);let Ct=X.index,kt=1;if(j.wireframe===!0){if(Ct=tt.getWireframeAttribute(X),Ct===void 0)return;kt=2}const Ht=X.drawRange,Pt=X.attributes.position;let oe=Ht.start*kt,pe=(Ht.start+Ht.count)*kt;lt!==null&&(oe=Math.max(oe,lt.start*kt),pe=Math.min(pe,(lt.start+lt.count)*kt)),Ct!==null?(oe=Math.max(oe,0),pe=Math.min(pe,Ct.count)):Pt!=null&&(oe=Math.max(oe,0),pe=Math.min(pe,Pt.count));const Me=pe-oe;if(Me<0||Me===1/0)return;ne.setup(G,j,At,X,Ct);let en,ie=_t;if(Ct!==null&&(en=Z.get(Ct),ie=$t,ie.setIndex(en)),G.isMesh)j.wireframe===!0?(vt.setLineWidth(j.wireframeLinewidth*Tt()),ie.setMode(R.LINES)):ie.setMode(R.TRIANGLES);else if(G.isLine){let Lt=j.linewidth;Lt===void 0&&(Lt=1),vt.setLineWidth(Lt*Tt()),G.isLineSegments?ie.setMode(R.LINES):G.isLineLoop?ie.setMode(R.LINE_LOOP):ie.setMode(R.LINE_STRIP)}else G.isPoints?ie.setMode(R.POINTS):G.isSprite&&ie.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ie.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,Fe=G._multiDrawCounts,se=G._multiDrawCount,Mn=Ct?Z.get(Ct).bytesPerElement:1,ji=gt.get(j).currentProgram.getUniforms();for(let nn=0;nn<se;nn++)ji.setValue(R,"_gl_DrawID",nn),ie.render(Lt[nn]/Mn,Fe[nn])}else if(G.isInstancedMesh)ie.renderInstances(oe,Me,G.count);else if(X.isInstancedBufferGeometry){const Lt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fe=Math.min(X.instanceCount,Lt);ie.renderInstances(oe,Me,Fe)}else ie.render(oe,Me)};function Zt(w,B,X){w.transparent===!0&&w.side===kn&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,sr(w,B,X),w.side=Hn,w.needsUpdate=!0,sr(w,B,X),w.side=kn):sr(w,B,X)}this.compile=function(w,B,X=null){X===null&&(X=w),p=qt.get(X),p.init(B),y.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==X&&w.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const j=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const lt=G.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){const At=lt[Mt];Zt(At,X,G),j.add(At)}else Zt(lt,X,G),j.add(lt)}),y.pop(),p=null,j},this.compileAsync=function(w,B,X=null){const j=this.compile(w,B,X);return new Promise(G=>{function lt(){if(j.forEach(function(Mt){gt.get(Mt).currentProgram.isReady()&&j.delete(Mt)}),j.size===0){G(w);return}setTimeout(lt,10)}It.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Oe=null;function ln(w){Oe&&Oe(w)}function Os(){In.stop()}function Fs(){In.start()}const In=new jh;In.setAnimationLoop(ln),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(w){Oe=w,N.setAnimationLoop(w),w===null?In.stop():In.start()},N.addEventListener("sessionstart",Os),N.addEventListener("sessionend",Fs),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(B),B=N.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,T),p=qt.get(w,y.length),p.init(B),y.push(p),et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Kt.setFromProjectionMatrix(et),F=this.localClippingEnabled,J=rt.init(this.clippingPlanes,F),_=ft.get(w,m.length),_.init(),m.push(_),N.enabled===!0&&N.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&fo(lt,B,-1/0,v.sortObjects)}fo(w,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(k,at),wt=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,wt&&Ut.addToRenderList(_,w),this.info.render.frame++,J===!0&&rt.beginShadows();const X=p.state.shadowsArray;St.render(X,w,B),J===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,G=_.transmissive;if(p.setupLights(),B.isArrayCamera){const lt=B.cameras;if(G.length>0)for(let Mt=0,At=lt.length;Mt<At;Mt++){const Ct=lt[Mt];Dc(j,G,w,Ct)}wt&&Ut.render(w);for(let Mt=0,At=lt.length;Mt<At;Mt++){const Ct=lt[Mt];Lc(_,w,Ct,Ct.viewport)}}else G.length>0&&Dc(j,G,w,B),wt&&Ut.render(w),Lc(_,w,B);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,B),ne.resetDefaultState(),P=-1,I=null,y.pop(),y.length>0?(p=y[y.length-1],J===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function fo(w,B,X,j){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Kt.intersectsSprite(w)){j&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Mt=Q.update(w),At=w.material;At.visible&&_.push(w,Mt,At,X,ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Kt.intersectsObject(w))){const Mt=Q.update(w),At=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ct.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ct.copy(Mt.boundingSphere.center)),ct.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(At)){const Ct=Mt.groups;for(let kt=0,Ht=Ct.length;kt<Ht;kt++){const Pt=Ct[kt],oe=At[Pt.materialIndex];oe&&oe.visible&&_.push(w,Mt,oe,X,ct.z,Pt)}}else At.visible&&_.push(w,Mt,At,X,ct.z,null)}}const lt=w.children;for(let Mt=0,At=lt.length;Mt<At;Mt++)fo(lt[Mt],B,X,j)}function Lc(w,B,X,j){const G=w.opaque,lt=w.transmissive,Mt=w.transparent;p.setupLightsView(X),J===!0&&rt.setGlobalState(v.clippingPlanes,X),j&&vt.viewport(x.copy(j)),G.length>0&&ir(G,B,X),lt.length>0&&ir(lt,B,X),Mt.length>0&&ir(Mt,B,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Dc(w,B,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new qi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Zs:oi,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const lt=p.state.transmissionRenderTarget[j.id],Mt=j.viewport||x;lt.setSize(Mt.z,Mt.w);const At=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(O),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),wt&&Ut.render(X);const Ct=v.toneMapping;v.toneMapping=bi;const kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),J===!0&&rt.setGlobalState(v.clippingPlanes,j),ir(w,X,j),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Pt=0,oe=B.length;Pt<oe;Pt++){const pe=B[Pt],Me=pe.object,en=pe.geometry,ie=pe.material,Lt=pe.group;if(ie.side===kn&&Me.layers.test(j.layers)){const Fe=ie.side;ie.side=Ye,ie.needsUpdate=!0,Ic(Me,X,j,en,ie,Lt),ie.side=Fe,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}v.setRenderTarget(At),v.setClearColor(O,K),kt!==void 0&&(j.viewport=kt),v.toneMapping=Ct}function ir(w,B,X){const j=B.isScene===!0?B.overrideMaterial:null;for(let G=0,lt=w.length;G<lt;G++){const Mt=w[G],At=Mt.object,Ct=Mt.geometry,kt=j===null?Mt.material:j,Ht=Mt.group;At.layers.test(X.layers)&&Ic(At,B,X,Ct,kt,Ht)}}function Ic(w,B,X,j,G,lt){w.onBeforeRender(v,B,X,j,G,lt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,B,X,j,w,lt),G.transparent===!0&&G.side===kn&&G.forceSinglePass===!1?(G.side=Ye,G.needsUpdate=!0,v.renderBufferDirect(X,B,j,G,w,lt),G.side=Hn,G.needsUpdate=!0,v.renderBufferDirect(X,B,j,G,w,lt),G.side=kn):v.renderBufferDirect(X,B,j,G,w,lt),w.onAfterRender(v,B,X,j,G,lt)}function sr(w,B,X){B.isScene!==!0&&(B=Et);const j=gt.get(w),G=p.state.lights,lt=p.state.shadowsArray,Mt=G.state.version,At=bt.getParameters(w,G.state,lt,B,X),Ct=bt.getProgramCacheKey(At);let kt=j.programs;j.environment=w.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",Xt),kt=new Map,j.programs=kt);let Ht=kt.get(Ct);if(Ht!==void 0){if(j.currentProgram===Ht&&j.lightsStateVersion===Mt)return Nc(w,At),Ht}else At.uniforms=bt.getUniforms(w),w.onBeforeCompile(At,v),Ht=bt.acquireProgram(At,Ct),kt.set(Ct,Ht),j.uniforms=At.uniforms;const Pt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),Nc(w,At),j.needsLights=bu(w),j.lightsStateVersion=Mt,j.needsLights&&(Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.directionalShadowMap.value=G.state.directionalShadowMap,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotShadowMap.value=G.state.spotShadowMap,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMap.value=G.state.pointShadowMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Ht,j.uniformsList=null,Ht}function Uc(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Yr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Nc(w,B){const X=gt.get(w);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Eu(w,B,X,j,G){B.isScene!==!0&&(B=Et),A.resetTextureUnits();const lt=B.fog,Mt=j.isMeshStandardMaterial?B.environment:null,At=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ai,Ct=(j.isMeshStandardMaterial?H:M).get(j.envMap||Mt),kt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pt=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,pe=!!X.morphAttributes.color;let Me=bi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Me=v.toneMapping);const en=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=en!==void 0?en.length:0,Lt=gt.get(j),Fe=p.state.lights;if(J===!0&&(F===!0||w!==I)){const hn=w===I&&j.id===P;rt.setState(j,w,hn)}let se=!1;j.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Fe.state.version||Lt.outputColorSpace!==At||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isBatchedMesh&&Lt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Lt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null||Lt.envMap!==Ct||j.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==kt||Lt.vertexTangents!==Ht||Lt.morphTargets!==Pt||Lt.morphNormals!==oe||Lt.morphColors!==pe||Lt.toneMapping!==Me||Lt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Lt.__version=j.version);let Mn=Lt.currentProgram;se===!0&&(Mn=sr(j,B,G));let ji=!1,nn=!1,po=!1;const we=Mn.getUniforms(),li=Lt.uniforms;if(vt.useProgram(Mn.program)&&(ji=!0,nn=!0,po=!0),j.id!==P&&(P=j.id,nn=!0),ji||I!==w){Ft.reverseDepthBuffer?(ot.copy(w.projectionMatrix),Yd(ot),jd(ot),we.setValue(R,"projectionMatrix",ot)):we.setValue(R,"projectionMatrix",w.projectionMatrix),we.setValue(R,"viewMatrix",w.matrixWorldInverse);const hn=we.map.cameraPosition;hn!==void 0&&hn.setValue(R,pt.setFromMatrixPosition(w.matrixWorld)),Ft.logarithmicDepthBuffer&&we.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&we.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,nn=!0,po=!0)}if(G.isSkinnedMesh){we.setOptional(R,G,"bindMatrix"),we.setOptional(R,G,"bindMatrixInverse");const hn=G.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),we.setValue(R,"boneTexture",hn.boneTexture,A))}G.isBatchedMesh&&(we.setOptional(R,G,"batchingTexture"),we.setValue(R,"batchingTexture",G._matricesTexture,A),we.setOptional(R,G,"batchingIdTexture"),we.setValue(R,"batchingIdTexture",G._indirectTexture,A),we.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&we.setValue(R,"batchingColorTexture",G._colorsTexture,A));const mo=X.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&Nt.update(G,X,Mn),(nn||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,we.setValue(R,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(li.envMap.value=Ct,li.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(li.envMapIntensity.value=B.environmentIntensity),nn&&(we.setValue(R,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&wu(li,po),lt&&j.fog===!0&&st.refreshFogUniforms(li,lt),st.refreshMaterialUniforms(li,j,$,V,p.state.transmissionRenderTarget[w.id]),Yr.upload(R,Uc(Lt),li,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Yr.upload(R,Uc(Lt),li,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&we.setValue(R,"center",G.center),we.setValue(R,"modelViewMatrix",G.modelViewMatrix),we.setValue(R,"normalMatrix",G.normalMatrix),we.setValue(R,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hn=j.uniformsGroups;for(let go=0,Tu=hn.length;go<Tu;go++){const Oc=hn[go];z.update(Oc,Mn),z.bind(Oc,Mn)}}return Mn}function wu(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function bu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,B,X){gt.get(w.texture).__webglTexture=B,gt.get(w.depthTexture).__webglTexture=X;const j=gt.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const X=gt.get(w);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,X=0){T=w,C=B,b=X;let j=!0,G=null,lt=!1,Mt=!1;if(w){const Ct=gt.get(w);if(Ct.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(R.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Ct.__hasExternalTextures)A.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&gt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Ht=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?G=Ht[B][X]:G=Ht[B],lt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?G=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[X]:G=Ht,x.copy(w.viewport),S.copy(w.scissor),U=w.scissorTest}else x.copy(it).multiplyScalar($).floor(),S.copy(yt).multiplyScalar($).floor(),U=Vt;if(vt.bindFramebuffer(R.FRAMEBUFFER,G)&&j&&vt.drawBuffers(w,G),vt.viewport(x),vt.scissor(S),vt.setScissorTest(U),lt){const Ct=gt.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,X)}else if(Mt){const Ct=gt.get(w.texture),kt=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,X||0,kt)}P=-1},this.readRenderTargetPixels=function(w,B,X,j,G,lt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){vt.bindFramebuffer(R.FRAMEBUFFER,At);try{const Ct=w.texture,kt=Ct.format,Ht=Ct.type;if(!Ft.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-j&&X>=0&&X<=w.height-G&&R.readPixels(B,X,j,G,Bt.convert(kt),Bt.convert(Ht),lt)}finally{const Ct=T!==null?gt.get(T).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,B,X,j,G,lt,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){const Ct=w.texture,kt=Ct.format,Ht=Ct.type;if(!Ft.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-j&&X>=0&&X<=w.height-G){vt.bindFramebuffer(R.FRAMEBUFFER,At);const Pt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Pt),R.bufferData(R.PIXEL_PACK_BUFFER,lt.byteLength,R.STREAM_READ),R.readPixels(B,X,j,G,Bt.convert(kt),Bt.convert(Ht),0);const oe=T!==null?gt.get(T).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,oe);const pe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Xd(R,pe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Pt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,lt),R.deleteBuffer(Pt),R.deleteSync(pe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,X=0){w.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-X),G=Math.floor(w.image.width*j),lt=Math.floor(w.image.height*j),Mt=B!==null?B.x:0,At=B!==null?B.y:0;A.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,Mt,At,G,lt),vt.unbindTexture()},this.copyTextureToTexture=function(w,B,X=null,j=null,G=0){w.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],B=arguments[2],G=arguments[3]||0,X=null);let lt,Mt,At,Ct,kt,Ht;X!==null?(lt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,At=X.min.x,Ct=X.min.y):(lt=w.image.width,Mt=w.image.height,At=0,Ct=0),j!==null?(kt=j.x,Ht=j.y):(kt=0,Ht=0);const Pt=Bt.convert(B.format),oe=Bt.convert(B.type);A.setTexture2D(B,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const pe=R.getParameter(R.UNPACK_ROW_LENGTH),Me=R.getParameter(R.UNPACK_IMAGE_HEIGHT),en=R.getParameter(R.UNPACK_SKIP_PIXELS),ie=R.getParameter(R.UNPACK_SKIP_ROWS),Lt=R.getParameter(R.UNPACK_SKIP_IMAGES),Fe=w.isCompressedTexture?w.mipmaps[G]:w.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Fe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Fe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ct),w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,kt,Ht,lt,Mt,Pt,oe,Fe.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,kt,Ht,Fe.width,Fe.height,Pt,Fe.data):R.texSubImage2D(R.TEXTURE_2D,G,kt,Ht,lt,Mt,Pt,oe,Fe),R.pixelStorei(R.UNPACK_ROW_LENGTH,pe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me),R.pixelStorei(R.UNPACK_SKIP_PIXELS,en),R.pixelStorei(R.UNPACK_SKIP_ROWS,ie),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Lt),G===0&&B.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,X=null,j=null,G=0){w.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,w=arguments[2],B=arguments[3],G=arguments[4]||0);let lt,Mt,At,Ct,kt,Ht,Pt,oe,pe;const Me=w.isCompressedTexture?w.mipmaps[G]:w.image;X!==null?(lt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,At=X.max.z-X.min.z,Ct=X.min.x,kt=X.min.y,Ht=X.min.z):(lt=Me.width,Mt=Me.height,At=Me.depth,Ct=0,kt=0,Ht=0),j!==null?(Pt=j.x,oe=j.y,pe=j.z):(Pt=0,oe=0,pe=0);const en=Bt.convert(B.format),ie=Bt.convert(B.type);let Lt;if(B.isData3DTexture)A.setTexture3D(B,0),Lt=R.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)A.setTexture2DArray(B,0),Lt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=R.getParameter(R.UNPACK_ROW_LENGTH),se=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Mn=R.getParameter(R.UNPACK_SKIP_PIXELS),ji=R.getParameter(R.UNPACK_SKIP_ROWS),nn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ht),w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Lt,G,Pt,oe,pe,lt,Mt,At,en,ie,Me.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Lt,G,Pt,oe,pe,lt,Mt,At,en,Me.data):R.texSubImage3D(Lt,G,Pt,oe,pe,lt,Mt,At,en,ie,Me),R.pixelStorei(R.UNPACK_ROW_LENGTH,Fe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,se),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Mn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ji),R.pixelStorei(R.UNPACK_SKIP_IMAGES,nn),G===0&&B.generateMipmaps&&R.generateMipmap(Lt),vt.unbindTexture()},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){C=0,b=0,T=null,vt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===oo?"display-p3":"srgb"}}class Mc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class o_ extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eu extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nl=new xe,ja=new xc,Tr=new ao,Ar=new D;class a_ extends Ae{constructor(t=new Ke,e=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;Nl.copy(s).invert(),ja.copy(t.ray).applyMatrix4(Nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);Ar.fromBufferAttribute(u,p),Ol(Ar,p,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ar.fromBufferAttribute(u,g),Ol(Ar,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ol(i,t,e,n,s,r,o){const a=ja.distanceSqToPoint(i);if(a<e){const c=new D;ja.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wn extends je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ne extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function y(){const E=new D,C=new D;let b=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const I=[],x=P/r,S=x*(e-t)+t;for(let U=0;U<=s;U++){const O=U/s,K=O*c+a,Y=Math.sin(K),V=Math.cos(K);C.x=S*Y,C.y=-x*n+p,C.z=S*V,u.push(C.x,C.y,C.z),E.set(Y,T,V).normalize(),d.push(E.x,E.y,E.z),f.push(O,1-x),I.push(g++)}_.push(I)}for(let P=0;P<s;P++)for(let I=0;I<r;I++){const x=_[I][P],S=_[I+1][P],U=_[I+1][P+1],O=_[I][P+1];t>0&&(h.push(x,S,O),b+=3),e>0&&(h.push(S,U,O),b+=3)}l.addGroup(m,b,0),m+=b}function v(E){const C=g,b=new te,T=new D;let P=0;const I=E===!0?t:e,x=E===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const S=g;for(let U=0;U<=s;U++){const K=U/s*c+a,Y=Math.cos(K),V=Math.sin(K);T.x=I*V,T.y=p*x,T.z=I*Y,u.push(T.x,T.y,T.z),d.push(0,x,0),b.x=Y*.5+.5,b.y=V*.5*x+.5,f.push(b.x,b.y),g++}for(let U=0;U<s;U++){const O=C+U,K=S+U;E===!0?h.push(K,K+1,O):h.push(K+1,K,O),P+=3}l.addGroup(m,P,E===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends Ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new lo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sc extends Ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new D,E=new D,C=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],E),f(e[b+2],C),c(v,E,C,y)}function c(y,v,E,C){const b=C+1,T=[];for(let P=0;P<=b;P++){T[P]=[];const I=y.clone().lerp(E,P/b),x=v.clone().lerp(E,P/b),S=b-P;for(let U=0;U<=S;U++)U===0&&P===b?T[P][U]=I:T[P][U]=I.clone().lerp(x,U/S)}for(let P=0;P<b;P++)for(let I=0;I<2*(b-P)-1;I++){const x=Math.floor(I/2);I%2===0?(d(T[P][x+1]),d(T[P+1][x]),d(T[P][x])):(d(T[P][x+1]),d(T[P+1][x+1]),d(T[P+1][x]))}}function l(y){const v=new D;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(y),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function h(){const y=new D;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const E=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(E,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],E=o[y+2],C=o[y+4],b=Math.max(v,E,C),T=Math.min(v,E,C);b>.9&&T<.1&&(v<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){const E=y*3;v.x=t[E+0],v.y=t[E+1],v.z=t[E+2]}function g(){const y=new D,v=new D,E=new D,C=new D,b=new te,T=new te,P=new te;for(let I=0,x=0;I<r.length;I+=9,x+=6){y.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),E.set(r[I+6],r[I+7],r[I+8]),b.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),C.copy(y).add(v).add(E).divideScalar(3);const S=p(C);_(b,x+0,y,S),_(T,x+2,v,S),_(P,x+4,E,S)}}function _(y,v,E,C){C<0&&y.x===1&&(o[v]=y.x-1),E.x===0&&E.z===0&&(o[v]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.vertices,t.indices,t.radius,t.details)}}class ho extends Sc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ho(t.radius,t.detail)}}class Ec extends Ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new D,g=new te;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const y=m+p,v=y,E=y+n+1,C=y+n+2,b=y+1;a.push(v,E,b),a.push(E,C,b)}}this.setIndex(a),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ti extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let E=0;m===0&&o===0?E=.5/e:m===n&&c===Math.PI&&(E=-.5/e);for(let C=0;C<=e;C++){const b=C/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(b+E,1-v),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const v=h[m][y+1],E=h[m][y],C=h[m+1][y],b=h[m+1][y+1];(m!==0||o>0)&&f.push(v,E,b),(m!==n-1||c<Math.PI)&&f.push(E,C,b)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xn extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mi extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qs extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class c_ extends Qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xo=new xe,Fl=new D,zl=new D;class wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fl),zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zl),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class l_ extends wc{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class h_ extends Qs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new l_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const kl=new xe,Vs=new D,Yo=new D;class u_ extends wc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),Yo.copy(n.position),Yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yo),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}}class d_ extends Qs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new u_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class f_ extends wc{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bl extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new f_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class p_ extends Qs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);const m_={clear:0,overcast:.88,rain:1,storm:1},g_=i=>m_[i==null?void 0:i.condition]??0,Nn={hemi:.44,ambient:.48,bounce:.34,exposure:.15,fov:-6,shadowSpan:18,shadowBias:-25e-5,shadowNormalBias:.01,rate:2.6},Rr={shadowSpan:55,shadowBias:-4e-4,shadowNormalBias:.035},Hl=.45,__=6;class x_{constructor(t){this.spot=new h_(16767392,0,9,1.15,.7,2),this.spot.castShadow=!0,this.spot.shadow.mapSize.set(1024,1024),this.spot.shadow.camera.near=.3,this.spot.shadow.camera.far=9,this.spot.shadow.bias=-8e-4,this.spot.shadow.normalBias=.012,this.spot.shadow.autoUpdate=!1,this.spot.target=new Ae,t.add(this.spot,this.spot.target),this._base=new WeakMap,this._roomLights=new WeakMap,this._tmp=new D}base(t){let e=this._base.get(t);return e===void 0&&(e=t.intensity,this._base.set(t,e)),e}lightsFor(t,e){var o;const n=this._roomLights.get(e);if(n!==void 0)return n;let s=e.lights;if(!s){const a=(o=t.buildings)==null?void 0:o.find(c=>c.lights&&Math.abs(c.x-e.x)<.01&&Math.abs(c.z-e.z)<.01&&Math.abs(c.rotY-e.rotY)<.01);s=a==null?void 0:a.lights}if(!s||!s.length)return this._roomLights.set(e,null),null;const r=e.interiorBounds;if(r){const a=Math.cos(e.rotY),c=Math.sin(e.rotY),l=s.filter(h=>{h.updateWorldMatrix(!0,!1),h.getWorldPosition(this._tmp);const u=this._tmp.x-e.x,d=this._tmp.z-e.z,f=u*a-d*c,g=u*c+d*a;return f>r.minX&&f<r.maxX&&g>r.minZ&&g<r.maxZ});l.length&&(s=l)}return this._roomLights.set(e,s),s}update(t,e,n){const s=t.currentBuilding,r=s?this.lightsFor(t,s):null;let o=null,a=__;if(r&&e>.02&&n)for(const c of r){const l=c.getWorldPosition(this._tmp).distanceTo(n.position);l<a&&(o=c,a=l)}for(const c of t.enterable){const l=c===s?r:this.lightsFor(t,c);if(!l)continue;const h=c===s?e:0;for(const u of l){const d=h*this.base(u)*(u===o?1-Hl:1);u.intensity!==d&&(u.intensity=d)}}o?(o.getWorldPosition(this._tmp),this.spot.position.copy(this._tmp),this.spot.target.position.set(this._tmp.x,this._floorY(s,n),this._tmp.z),this.spot.target.updateMatrixWorld(),this.spot.color.copy(o.color),this.spot.intensity=e*this.base(o)*Hl,this.spot.shadow.autoUpdate=!0):(this.spot.intensity!==0||this.spot.shadow.autoUpdate)&&(this.spot.intensity=0,this.spot.shadow.autoUpdate=!1)}_floorY(t,e){const n=e.position.y,s=(t==null?void 0:t.padY)??n;return n-s>.5?n:s}}const v_=`
  varying vec3 vWorld;
  void main() {
    vWorld = normalize((modelMatrix * vec4(position, 1.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,y_=`
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
`,gi=[{t:0,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05},{t:.22,top:1779520,mid:5329002,bot:10123890,sun:16751964,amb:4868704,int:.3},{t:.27,top:5208752,mid:10466511,bot:15778714,sun:16761479,amb:9082024,int:.75},{t:.4,top:4884168,mid:10339044,bot:14214898,sun:16774109,amb:11058384,int:1},{t:.52,top:4161476,mid:9682402,bot:13886450,sun:16777215,amb:11453142,int:1.05},{t:.72,top:4882360,mid:11058388,bot:14734013,sun:16771524,amb:10530496,int:.85},{t:.8,top:2902642,mid:9072512,bot:14256732,sun:16747082,amb:6969960,int:.42},{t:.86,top:1186350,mid:2962768,bot:5917272,sun:9067114,amb:2764872,int:.14},{t:1,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05}];function M_(i){let t=gi[0],e=gi[gi.length-1];for(let o=0;o<gi.length-1;o++)if(i>=gi[o].t&&i<=gi[o+1].t){t=gi[o],e=gi[o+1];break}const n=e.t-t.t||1,s=(i-t.t)/n,r=(o,a)=>new Ot(o).lerp(new Ot(a),s);return{top:r(t.top,e.top),mid:r(t.mid,e.mid),bot:r(t.bot,e.bot),sun:r(t.sun,e.sun),amb:r(t.amb,e.amb),int:t.int+(e.int-t.int)*s}}class S_{constructor(t,e){this.game=e,this.canvas=t,this.renderer=new r_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wh,this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=bh,this.renderer.toneMappingExposure=1.05,this.scene=new o_,this.scene.fog=new Mc(11059416,60,340),this._buildSky(),this._buildLights(),this.indoorFactor=0,this.interiorLights=new x_(this.scene),this.quality={shadows:!0,drawDistance:340},addEventListener("resize",()=>this.resize())}_buildSky(){this.skyUniforms={uTop:{value:new Ot(4884168)},uMid:{value:new Ot(10339044)},uBottom:{value:new Ot(14214898)},uSunY:{value:.6},uSunDir:{value:new D(0,1,0)},uSunColour:{value:new Ot(16777215)},uExposure:{value:1.05}};const t=new ht(new Ti(900,32,20),new ci({uniforms:this.skyUniforms,vertexShader:v_,fragmentShader:y_,side:Ye,depthWrite:!1,fog:!1}));t.frustumCulled=!1,this.scene.add(t),this.sky=t;const e=900,n=new Float32Array(e*3);for(let r=0;r<e;r++){const o=new D().randomDirection().multiplyScalar(850);o.y<40&&(o.y=Math.abs(o.y)+40),n.set([o.x,o.y,o.z],r*3)}const s=new Ke;s.setAttribute("position",new be(n,3)),this.stars=new a_(s,new eu({color:16777215,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.moon=new ht(new Ti(18,16,12),new Vn({color:14673648,fog:!1})),this.scene.add(this.moon)}_buildLights(){this.hemi=new c_(12374760,5918784,.9),this.scene.add(this.hemi),this.sun=new Bl(16774109,2.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=420,this.shadowSpan=Rr.shadowSpan,this._applyShadowSpan(0),this.scene.add(this.sun),this.scene.add(this.sun.target),this.bounce=new Bl(10467020,.35),this.scene.add(this.bounce),this.scene.add(this.bounce.target),this.ambient=new p_(11058384,.35),this.scene.add(this.ambient)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}_applyShadowSpan(t){const e=Rn.lerp(Rr.shadowSpan,Nn.shadowSpan,t);if(Math.abs(e-this.shadowSpan)>1e-4||!this._spanApplied){this.shadowSpan=e;const n=this.sun.shadow.camera;n.left=-e,n.right=e,n.top=e,n.bottom=-e,n.updateProjectionMatrix(),this._spanApplied=!0}this.sun.shadow.bias=Rn.lerp(Rr.shadowBias,Nn.shadowBias,t),this.sun.shadow.normalBias=Rn.lerp(Rr.shadowNormalBias,Nn.shadowNormalBias,t)}_skyDelta(t){const e=performance.now(),n=(e-(this._lastSky??e))/1e3;return this._lastSky=e,t>0?Math.min(t,.25):n>.001?Math.min(n,.25):this.game.fixedStep||1/60}updateSky(t,e,n=0,s=0){var U,O;const r=this._skyDelta(s),o=(U=this.game.world)==null?void 0:U.weather,a=g_(o),c=(O=this.game.world)!=null&&O.isIndoors?1:0;this.indoorFactor+=(c-this.indoorFactor)*Math.min(1,r*Nn.rate);const l=this.indoorFactor;this._applyShadowSpan(l);const h=M_(t);this.skyUniforms.uTop.value.copy(h.top),this.skyUniforms.uMid.value.copy(h.mid),this.skyUniforms.uBottom.value.copy(h.bot),this.skyUniforms.uSunColour.value.copy(h.sun);const u=(t-.25)*Math.PI*2,d=Math.sin(n/364*Math.PI*2)*.3,f=new D(Math.cos(u),Math.sin(u)+d,-.35).normalize();this.skyUniforms.uSunDir.value.copy(f),this.skyUniforms.uSunY.value=f.y;const g=(e==null?void 0:e.x)||0,_=(e==null?void 0:e.z)||0,p=(e==null?void 0:e.y)||0,m=this.shadowSpan*2/this.sun.shadow.mapSize.x,y=Math.round(g/m)*m,v=Math.round(_/m)*m;this.sun.position.set(y+f.x*160,p+Math.max(f.y,.08)*160,v+f.z*160),this.sun.target.position.set(y,p,v),this.sun.target.updateMatrixWorld();const E=Math.max(0,f.y),C=Rn.smoothstep(f.y,-.005,.03);this.sun.intensity=Math.pow(E,.65)*3*(1-a)*C,this.sun.color.copy(h.sun).lerp(new Ot(15265524),a),this.sun.shadow.autoUpdate=this.sun.intensity>.01,this.bounce.position.set(y-f.x*90,p+40,v-f.z*90),this.bounce.target.position.set(y,p,v),this.bounce.target.updateMatrixWorld(),this.bounce.intensity=.15+h.int*.4,this.bounce.color.copy(h.mid),this.moon.position.set(g-f.x*600,-f.y*600,_-f.z*600),this.moon.visible=f.y<.08;const b=Rn.clamp((.06-f.y)*6,0,1),T=o!=null&&o.wetness?1:0;this.hemi.intensity=.25+h.int*.8+b*.5+a*.5*(1-T*.5),this.hemi.color.copy(h.mid).lerp(new Ot(5992332),b*.7).lerp(new Ot(13161180),a*.6),this.ambient.intensity=.12+h.int*.3+b*.38+a*.05,this.ambient.color.copy(h.amb).lerp(new Ot(6978201),b*.8),this.stars.material.opacity=b*.9,this.hemi.intensity*=Math.pow(Nn.hemi,l),this.ambient.intensity*=Math.pow(Nn.ambient,l),this.bounce.intensity*=Math.pow(Nn.bounce,l),this.scene.fog.color.copy(h.mid).lerp(h.bot,.45);const P=o!=null&&o.wetness?.45:0,I=o&&["overcast","rain","storm"].includes(o.condition)?.25:0;this.scene.fog.near=60-(P+I)*40,this.scene.fog.far=this.quality.drawDistance*(1-P*.35-I*.15-b*.3);const x=1+b*.45+(1-Math.min(1,h.int))*.2+a*.12+T*.03+l*Nn.exposure;this.renderer.toneMappingExposure+=(x-this.renderer.toneMappingExposure)*Math.min(1,r*Nn.rate),this.skyUniforms.uExposure.value=this.renderer.toneMappingExposure,this.nightFactor=b;const S=this.game.world;if(S!=null&&S.enterable){const K=.34+a*.26;this.interiorLights.update(S,Math.max(K,b),this.game.player)}this.sky&&this.sky.position.set(g,0,_),this.stars.position.set(g,0,_)}resize(){var e;this.renderer.setSize(innerWidth,innerHeight,!1);const t=(e=this.game.camera)==null?void 0:e.active;t&&(t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix())}render(t){this.renderer.render(this.scene,t)}}const Ws=[{id:"first",label:"First person",distance:0,height:0,fov:64},{id:"third",label:"Third person",distance:3.6,height:.35,shoulder:.55,fov:52},{id:"thirdFar",label:"Third person (wide)",distance:6.5,height:.9,shoulder:0,fov:50}],E_=Nn.fov;class w_{constructor(t){this.game=t,this.modeIndex=1,this.active=new tn(Ws[1].fov,innerWidth/innerHeight,.25,1e3),this.yaw=0,this.pitch=-.05,this.distance=Ws[1].distance,this._targetDistance=this.distance,this._pos=new D,this._look=new D,this._ray2=new xc,this._box=new ai,this._hit=new D,this.shakeAmount=0,this.bob=0,this.fovBoost=0}get mode(){return Ws[this.modeIndex]}get isFirstPerson(){return this.mode.id==="first"}cycle(){return this.modeIndex=(this.modeIndex+1)%Ws.length,this.game.bus.emit("camera:mode",{mode:this.mode}),this.mode}setMode(t){const e=Ws.findIndex(n=>n.id===t);e>=0&&(this.modeIndex=e)}addShake(t){this.shakeAmount=Math.min(1.2,this.shakeAmount+t)}update(t){const{input:e,player:n}=this.game;if(e.locked&&e.enabled){const c=e.consumeMouse();this.yaw-=c.dx*e.mouse.sensitivity,this.pitch-=(e.mouse.invertY?-c.dy:c.dy)*e.mouse.sensitivity;const l=Math.PI/2-.05;this.pitch=Rn.clamp(this.pitch,-l,l)}else e.consumeMouse();const s=this.mode,r=n.position.clone();r.y+=n.eyeHeight;const o=n.horizontalSpeed;if(o>.3){this.bob+=t*o*1.9;const c=this.isFirstPerson?.035:.012;r.y+=Math.sin(this.bob*2)*c,r.x+=Math.cos(this.bob)*c*.4}else this.bob+=t*1.1,r.y+=Math.sin(this.bob)*.006;const a=new D(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch));if(s.distance===0)this._pos.copy(r),this._look.copy(r).addScaledVector(a,10);else{const c=n.position.clone();c.y+=n.eyeHeight*.92+s.height;const l=new D(-Math.cos(this.yaw),0,Math.sin(this.yaw));c.addScaledVector(l,s.shoulder||0);const h=this.game.world,u=h.isIndoors,d=u?.35:.7;let f=u?Math.min(s.distance,2.2):s.distance;const g=a.clone().negate();this._ray2.set(c,g);const _=c.clone().addScaledVector(g,f*.5);let p=f+.45;for(const m of h.query(_,f+1.5)){this._box.set(m.min,m.max);const y=this._ray2.intersectBox(this._box,this._hit);if(!y)continue;const v=c.distanceTo(y);v<p&&(p=v)}if(f=Math.max(d,Math.min(f,p-.45)),f<.65){this._pos.copy(r),this._look.copy(r).addScaledVector(a,10),this.distance=0,this._targetDistance=f,this._applyShake(t),this._commit(t,s,n);return}if(this._targetDistance+=(f-this._targetDistance)*(f<this._targetDistance?1:Math.min(1,t*5)),this.distance=this._targetDistance,this._pos.copy(c).addScaledVector(g,this.distance),this._look.copy(c).addScaledVector(a,4),u){const m=h.currentBuilding,y=m.interiorBounds;this._pos.y=Math.min(this._pos.y,m.padY+y.maxY-.2),this._pos.y=Math.max(this._pos.y,m.padY+.3)}}this._applyShake(t),this._commit(t,s,n)}_applyShake(t){if(this.shakeAmount<=.001)return;const e=this.shakeAmount;this._pos.x+=(Math.random()-.5)*.06*e,this._pos.y+=(Math.random()-.5)*.06*e,this._look.x+=(Math.random()-.5)*.5*e,this._look.y+=(Math.random()-.5)*.5*e,this.shakeAmount*=Math.pow(.06,t)}_commit(t,e,n){var o;this.active.position.copy(this._pos),this.active.lookAt(this._look);const s=(o=this.game.world)!=null&&o.isIndoors?1:0,r=e.fov+this.fovBoost+s*E_;this.active.fov+=(r-this.active.fov)*Math.min(1,t*6),this.active.updateProjectionMatrix(),n.avatar&&n.avatar.setFirstPerson(this.isFirstPerson||this.distance===0)}basis(){const t=new D(Math.sin(this.yaw),0,Math.cos(this.yaw)).normalize(),e=new D(-t.z,0,t.x);return{forward:t,right:e}}}const ce={grass:7311194,glass:6453644,trunk:6047282,foliage:5208645,foliageLight:6984789,foliageDeep:4154168,metal:9146777,metalDark:4870231,concrete:12039083,skinTones:[15914685,15253915,13803636,11104575,8014374,5517852],hairTones:[2825494,4861726,8014374,12159818,14270346,9276813,2763310,8141370],carBodies:[11680571,3104140,14737632,2764083,5929546,14263361,9080726,7031418]},dt={ceiling:15525851,wall:13814974,trim:16249834,joineryDark:7034951,joineryLight:9073760,floorTimber:9072722,benchtop:12168342,tileFloor:12104358,metalDull:9146777,shadowDark:2764339},Ss=new Map,b_=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function vn(i,t={}){let e=String(i);for(const s of b_)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(Ss.has(e))return Ss.get(e);const n=new xn({color:i,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Hn,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return Ss.set(e,n),n}function Ri(i,t){if(Ss.has(i))return Ss.get(i);const e=t();return Ss.set(i,e),e}const T_=i=>{i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function bc(i){return i.onBeforeCompile=T_,i}function Tc(){return Ri("window",()=>bc(new xn({color:ce.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new Ot(16767392),emissiveIntensity:0})))}function A_(){return Ri("windowinner",()=>bc(new xn({color:ce.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function R_(){return Ri("bulb",()=>new xn({color:16774365,emissive:new Ot(16770744),emissiveIntensity:1.6}))}function C_(){return Ri("carglass",()=>new xn({color:2831680,roughness:.2,metalness:.3}))}function P_(){return Ri("headlight",()=>new xn({color:15787727,emissive:new Ot(16771512),emissiveIntensity:0}))}function L_(){return Ri("taillight",()=>new xn({color:9186091,emissive:new Ot(16726843),emissiveIntensity:.2}))}function D_(){return Ri("troffer",()=>new xn({color:16185074,roughness:.5,emissive:new Ot(14477567),emissiveIntensity:.9}))}function I_(){return Ri("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgb(140,140,140)"),n.addColorStop(.55,"rgb(196,196,196)"),n.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=n,e.fillRect(0,0,128,128);const s=new Wn(t);s.colorSpace=Ce;const r=new Vn({map:s,blending:ca,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new Gt(1,1,1),new ke(1,1),new Ne(.5,.5,1,10),new lo(.5,1,8),new Ti(.5,12,10);const U_=new Set;function tr(i){U_.add(i)}function N_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ke;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Gl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Gl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Gl(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new be(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const O_=new Set(["position","normal","uv","color"]);function nu(i,t={}){var o,a;i.updateMatrixWorld(!0);const e=new Map,n=[];i.traverse(c=>{var f,g;if(c===i)return;if(c.isInstancedMesh||c.userData.isSign||c.isLight){n.push(c);return}if(!c.isMesh||!((g=(f=c.geometry)==null?void 0:f.attributes)!=null&&g.position))return;const l=c.material.uuid;e.has(l)||e.set(l,{material:c.material,geos:[],cast:!1});const h=c.geometry.clone();h.applyMatrix4(c.matrixWorld);for(const _ of Object.keys(h.attributes))O_.has(_)||h.deleteAttribute(_);const u=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new be(new Float32Array(u*2),2)),h.attributes.color||h.setAttribute("color",new be(new Float32Array(u*3).fill(1),3));const d=e.get(l);d.geos.push(h.index?h.toNonIndexed():h),d.cast=d.cast||c.castShadow});const s=t.colliders?new Ka(t.colliders,1):null,r=new Qt;for(const{material:c,geos:l,cast:h}of e.values()){if(!l.length)continue;const u=l.length===1?l[0]:N_(l,!1);if(!u){console.error("bakeGroup: merge returned null (mismatched attributes)",c);continue}const d=((o=c.userData)==null?void 0:o.decal)===!0,f=(a=c.userData)==null?void 0:a.uvScale;f&&!d&&F_(u,f[0],f[1]),s&&!d&&G_(u,s);const g=new ht(u,c);g.castShadow=d?!1:h,g.receiveShadow=!d,d&&(g.renderOrder=2),r.add(g)}for(const c of n)r.add(c);return r}function F_(i,t,e=t){const n=i.attributes.position.count,s=i.attributes.position.array,r=i.attributes.normal.array,o=new Float32Array(n*2);for(let a=0;a<n;a++){const c=a*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let d,f;h>=l&&h>=u?(d=s[c],f=s[c+2]):l>=u?(d=s[c+2],f=s[c+1]):(d=s[c],f=s[c+1]),o[a*2]=d/t,o[a*2+1]=f/e}i.setAttribute("uv",new be(o,2))}const jo=512,Vl=1024;function Wl(i,t,e){return((i+jo)*Vl+(t+jo))*Vl+(e+jo)}class Ka{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let n=0;n<t.length;n++){const s=t[n],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),h=Math.floor(s.max.z/e);for(let u=r;u<=o;u++)for(let d=a;d<=c;d++)for(let f=l;f<=h;f++){const g=Wl(u,d,f);let _=this.bins.get(g);_||(_=[],this.bins.set(g,_)),_.push(n)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,n,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),h=Math.floor((e-s)/r),u=Math.floor((e+s)/r),d=Math.floor((n-s)/r),f=Math.floor((n+s)/r);for(let g=c;g<=l;g++)for(let _=h;_<=u;_++)for(let p=d;p<=f;p++){const m=this.bins.get(Wl(g,_,p));if(m)for(let y=0;y<m.length;y++){const v=m[y];this._stamp[v]!==a&&(this._stamp[v]=a,o.push(this.boxes[v]))}}return o}}const z_=.18,k_=.55,ql=.75,B_=.3,Xl=.55,H_=1.2;function G_(i,t){const e=t instanceof Ka?t:new Ka(t,1),n=Array.isArray(i)?i:[i];for(const s of n)V_(s,e)}function V_(i,t){const e=i.attributes.color;if(!e||e.itemSize!==3||e.normalized||!i.attributes.normal)return;const n=i.attributes.position.array,s=i.attributes.normal.array,r=e.array,o=i.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],h=s[c+1],u=s[c+2],d=n[c]+l*.01,f=n[c+1]+h*.01,g=n[c+2]+u*.01;let _=0;const p=t.near(d,f,g,H_);for(let y=0;y<p.length;y++){const v=p[y],E=Math.max(v.min.x-d,0,d-v.max.x),C=Math.max(v.min.y-f,0,f-v.max.y),b=Math.max(v.min.z-g,0,g-v.max.z),T=Math.sqrt(E*E+C*C+b*b);if(T>ql*3)continue;const P=(v.min.x+v.max.x)/2-d,I=(v.min.y+v.max.y)/2-f,x=(v.min.z+v.max.z)/2-g;l*P+h*I+u*x<=0||(_+=k_*Math.exp(-T/z_)+B_*Math.exp(-T/ql))}const m=Math.max(Xl,1-Math.min(1-Xl,_));r[c]*=m,r[c+1]*=m,r[c+2]*=m}e.needsUpdate=!0}let W_=8,q_=i=>{const t=document.createElement("canvas");return t.width=t.height=i,t};const iu=(i,t=i)=>{const e=q_(i);return e.width=i,e.height=t,e};let su=0;function Ac(i,t){return t&&(i.colorSpace=Ce),i.wrapS=i.wrapT=$r,i.anisotropy=W_,i.generateMipmaps=!0,i.minFilter=yi,i.magFilter=gn,su+=i.image.width*i.image.height*4*4/3,i}function qn(i){return Ac(new Wn(X_(i)),!0)}function $a(i){return i.wrapS=i.wrapT=vi,i}function X_(i){const t=iu(i.w,i.h),e=t.getContext("2d"),n=e.createImageData(i.w,i.h),s=n.data,r=i.d,o=i.w*i.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const h=r[c],u=r[c+1],d=r[c+2];s[l]=(h<0?0:h>1?1:h)*255+.5,s[l+1]=(u<0?0:u>1?1:u)*255+.5,s[l+2]=(d<0?0:d>1?1:d)*255+.5,s[l+3]=255}return e.putImageData(n,0,0),t}const Te=i=>i<0?0:i>1?1:i,Gn=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255];function Y_(i){const[t,e,n]=i,s=Math.max(t,e,n),r=Math.min(t,e,n),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-n)/a+(e<n?6:0))/6:s===e?l=((n-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function j_(i,t,e){if(t===0)return[e,e,e];const n=e<.5?e*(1+t):e+t-e*t,s=2*e-n,r=o=>(o=(o%1+1)%1,o<1/6?s+(n-s)*6*o:o<1/2?n:o<2/3?s+(n-s)*(2/3-o)*6:s);return[r(i+1/3),r(i),r(i-1/3)]}function Bn(i,t=1,e=0,n=1){const[s,r,o]=Y_(Array.isArray(i)?i:Gn(i));return j_(s+e/360,Te(r*n),Te(o*t))}function Xn(i,t){return{w:i,h:t,d:new Float32Array(i*t*3)}}function Yi(i,t){const e=Array.isArray(t)?t:Gn(t),n=i.d;for(let s=0;s<n.length;s+=3)n[s]=e[0],n[s+1]=e[1],n[s+2]=e[2]}function Rc(i,t,e,n,s){if(s<=0)return;const r=i.w,o=i.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,h=i.d,u=1-s;h[l]=h[l]*u+n[0]*s,h[l+1]=h[l+1]*u+n[1]*s,h[l+2]=h[l+2]*u+n[2]*s}function pn(i,t,e,n,s,r,o=1){const a=Array.isArray(r)?r:Gn(r),c=Math.round(t),l=Math.round(n),h=Math.round(e),u=Math.round(s);if(o<1){for(let _=h;_<u;_++)for(let p=c;p<l;p++)Rc(i,p,_,a,o);return}const d=i.w,f=i.h,g=i.d;for(let _=h;_<u;_++){let p=_;(p<0||p>=f)&&(p=(p%f+f)%f);const m=p*d;for(let y=c;y<l;y++){let v=y;(v<0||v>=d)&&(v=(v%d+d)%d);const E=(m+v)*3;g[E]=a[0],g[E+1]=a[1],g[E+2]=a[2]}}}function er(i,t,e,n,s,r=1){const o=n+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,h=a+.5-e,u=Te(n-Math.sqrt(l*l+h*h)+.5);u>0&&Rc(i,c,a,s,r*u)}}function Za(i,t,e,n,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,h]=t[o],u=Math.hypot(l-a,h-c),d=Math.max(1,Math.ceil(u));for(let f=0;f<=d;f++){const g=f/d;er(i,a+(l-a)*g,c+(h-c)*g,r,n,s)}}}function ru(i,t,e,n,s,r,o,a){const c=i.w,l=i.h,h=i.d,u=r/2,d=o[0],f=o[1],g=o[2],_=Math.PI*2/n;for(let p=0;p<l;p++){const m=p*c,y=t+e*Math.sin(p*_+s),v=y-u,E=y+u,C=Math.floor(v),b=Math.ceil(E);for(let T=C;T<=b;T++){const P=Te(Math.min(T+1,E)-Math.max(T,v));if(P<=0)continue;const I=a*P,x=1-I;let S=T;(S<0||S>=c)&&(S=(S%c+c)%c);const U=(m+S)*3;h[U]=h[U]*x+d*I,h[U+1]=h[U+1]*x+f*I,h[U+2]=h[U+2]*x+g*I}}}const Yl=i=>i*i*(3-2*i);function K_(i,t,e){const n=new Float32Array(t*e);for(let s=0;s<n.length;s++)n[s]=i.float();return n}const jl=256;function Dn(i,t,e={}){const{p0:n=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??n,l=e.p0y??n,h=new Float32Array(t*a),u=[];let d=1,f=0;for(let C=0;C<s;C++){const b=Math.min(jl,Math.max(1,Math.round(c*o**C))),T=Math.min(jl,Math.max(1,Math.round(l*o**C)));u.push({lat:K_(i,b,T),px:b,py:T,amp:d}),f+=d,d*=r}const g=new Float64Array(t*a),_=new Int32Array(t),p=new Int32Array(t),m=new Float64Array(t);for(let C=0;C<u.length;C++){const b=u[C],T=b.lat,P=b.px,I=b.py,x=b.amp,S=P/t,U=I/a;for(let O=0;O<t;O++){const K=O*S,Y=K|0,V=Y>=P?Y%P:Y;_[O]=V,p[O]=V+1>=P?0:V+1,m[O]=Yl(K-Y)}for(let O=0;O<a;O++){const K=O*U,Y=K|0,V=Yl(K-Y),$=1-V,k=Y>=I?Y%I:Y,at=k*P,it=(k+1>=I?0:k+1)*P,yt=O*t;for(let Vt=0;Vt<t;Vt++){const Kt=_[Vt],J=p[Vt],F=m[Vt],ot=T[at+Kt],et=T[at+J],pt=T[it+Kt],ct=T[it+J];g[yt+Vt]+=x*((ot+(et-ot)*F)*$+(pt+(ct-pt)*F)*V)}}}let y=1/0,v=-1/0;for(let C=0;C<h.length;C++){h[C]=g[C]/f;const b=h[C];b<y&&(y=b),b>v&&(v=b)}const E=v-y||1;for(let C=0;C<h.length;C++)h[C]=(h[C]-y)/E;return h}function ou(i,t,e,n){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*n+1,a=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)a[u]=((u-n)%t+t)%t,c[u]=(u+n+1)%t;for(let u=0;u<e;u++){const d=u*t;let f=0;for(let g=-n;g<=n;g++)f+=i[d+(g%t+t)%t];for(let g=0;g<t;g++)s[d+g]=f/o,f-=i[d+a[g]],f+=i[d+c[g]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-n)%e+e)%e*t,h[u]=(u+n+1)%e*t;for(let u=0;u<t;u++){let d=0;for(let f=-n;f<=n;f++)d+=s[(f%e+e)%e*t+u];for(let f=0;f<e;f++)r[f*t+u]=d/o,d-=s[l[f]+u],d+=s[h[f]+u]}return r}function $_(i,t,e=1.5,n=null){const s=n??i.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const h=(l-1+s)%s*t,u=l*t,d=(l+1)%s*t;let f=u*4;for(let g=0;g<t;g++,f+=4){const _=a[g],p=c[g],m=i[h+_],y=i[h+g],v=i[h+p],E=i[u+_],C=i[u+p],b=i[d+_],T=i[d+g],P=i[d+p],I=v+2*C+P-(m+2*E+b),x=b+2*T+P-(m+2*y+v),S=-I*o,U=x*o,O=1/Math.sqrt(S*S+U*U+1);r[f]=(S*O*.5+.5)*255+.5,r[f+1]=(U*O*.5+.5)*255+.5,r[f+2]=(O*.5+.5)*255+.5,r[f+3]=255}}return r}function nr(i,t,e=1.5,n=null){const s=n??i.length/t;return Ac(new Wn(au($_(i,t,e,s),t,s)),!1)}function au(i,t,e){const n=iu(t,e),s=n.getContext("2d"),r=s.createImageData(t,e);return r.data.set(i),s.putImageData(r,0,0),n}function Z_(i,t,e,n,s=null){const o=i*(s??i),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,d=n?n[c]:0;a[l]=(h<0?0:h>1?1:h)*255+.5,a[l+1]=(u<0?0:u>1?1:u)*255+.5,a[l+2]=(d<0?0:d>1?1:d)*255+.5,a[l+3]=255}return a}function yn(i,t,e,n,s=null){const r=s??i;return Ac(new Wn(au(Z_(i,t,e,n,r),i,r)),!1)}const Cc={},Ks=new Map;let cu=null;function $e(i,t){Cc[i]=t}const J_=i=>{const t=Object.keys(i).sort();return t.length?t.map(e=>e+"="+JSON.stringify(i[e])).join(","):""};function Q_(i,t=null,e={}){const n=Cc[i];if(!n)throw new Error(`Textures: no recipe named '${i}'`);const s=J_(e),r=s?i+"#"+s:i;if(Ks.has(r))return Ks.get(r);const o=t||(cu||new so("textures")).child("tex."+r),a=n(o,e);return a.name=i,Ks.set(r,a),a}function tx(){var i,t;for(const e of Ks.values()){for(const n of["map","normalMap","ormMap"])(t=(i=e[n])==null?void 0:i.dispose)==null||t.call(i);if(e.maps)for(const n of e.maps)n.dispose()}Ks.clear(),su=0,cu=null}tr(tx);const Ko={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};$e("timberFloor",(i,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),h=t.species||i.pick(Object.keys(Ko)),u=Ko[h]||Ko.blackbutt,d=Xn(1024,1024);Yi(d,Bn(u.dark,.72));const f=Gn(u.dark),g=Bn(u.base,1.25),_=[];for(let b=0;b<15;b++){const T=b*c+l/2,P=(b+1)*c-l/2,I=Bn(u.base,1+i.range(-.06,.06),i.range(-3,3));pn(d,T,0,P,1024,I);const x=Math.round(i.range(.15,.85)*1024);_.push(x),pn(d,T,x,P,x+2,Bn(u.dark,.8),.85),pn(d,T,x-2,P,x,g,.25);const S=i.int(28,60);for(let U=0;U<S;U++){const O=i.range(T+1,P-1),K=i.range(1.5,4),Y=1024/i.int(2,5),V=i.range(0,Math.PI*2),$=i.range(2,3),k=i.range(.04,.12),at=i.chance(.25)?g:f;ru(d,O,K,Y,V,$,at,k)}if(i.chance(.2)){const U=i.range(204.8,819.2),O=i.range(60,160),K=i.range(T+4,P-4);for(let Y=0;Y<i.int(2,4);Y++){const V=(Y+1)*i.range(3,7),$=[];for(let k=0;k<=16;k++){const at=k/16;$.push([K+(at-.5)*2*V,U-O*(1-(at-.5)**2*4)])}Za(d,$,2,f,.06)}}}const p=Dn(i,512,{p0:64,octaves:3}),m=new Float32Array(512*512),y=new Float32Array(512*512),v=new Float32Array(512*512),E=512/15,C=l*512/1024;for(let b=0;b<512;b++)for(let T=0;T<512;T++){const P=b*512+T,I=Math.floor(T/E),x=T-I*E,S=x<C/2||x>E-C/2,U=b*1024/512,O=_[I],K=U>=O-1&&U<=O+2,Y=S||K;y[P]=Y?.15:.75,m[P]=Te(u.rough+(Y?.1:0)+(p[P]-.5)*.1),v[P]=Y?.72:1}return{map:qn(d),normalMap:nr(ou(y,512,512,1),512,1.2),ormMap:yn(512,v,m,null),uvScale:[o,o],normalScale:.5,species:h,tinted:!1}});$e("plasterWall",(i,t={})=>{const s=t.rough??.88,r=Dn(i,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=s+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/a*Math.PI*2)*.02),o[h]=Te(u)}return{ormMap:yn(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});$e("plasterCeiling",i=>Cc.plasterWall(i,{rough:.93,ceiling:!0}));$e("paintedJoinery",i=>{const n=Dn(i,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Te(.42+(n[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:yn(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});$e("carpetPile",i=>{const n=Xn(512,512);Yi(n,[1,1,1]);const s=Dn(i,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=n.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,d=Te(.9+(s[h]-.5)*.16+u);r[h*3]=d,r[h*3+1]=d,r[h*3+2]=d}for(let c=0;c<1200;c++){const l=i.pick([[1.1,0],[.78,8],[.92,-10]]),h=Bn(16777215,l[0],l[1],1);if(l[1]!==0){const u=i.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}er(n,i.range(0,512),i.range(0,512),i.range(1,2),h,.25)}const o=Dn(i,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Te(.92+(o[c]-.5)*.06);return{map:qn(n),normalMap:nr(o,512,.6),ormMap:yn(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});$e("ceramicTile",(i,t={})=>{const n=t.tile??.3,s=2,r=n*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=Gn(12104358),h=[];for(let p=0;p<s*s;p++)h.push({c:Bn(14473423,1+i.range(-.03,.03),i.range(-2,2)),g:i.range(-1,1)});const u=Xn(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),g=new Float32Array(512*512),_=o/2;for(let p=0;p<512;p++)for(let m=0;m<512;m++){const y=p*512+m,v=Math.floor(m/c),E=Math.floor(p/c),C=m-v*c,b=p-E*c,T=Math.min(C,c-C,b,c-b);if(T<_){u.d[y*3]=l[0],u.d[y*3+1]=l[1],u.d[y*3+2]=l[2],d[y]=.85,f[y]=.25,g[y]=.62;continue}const P=h[E*s+v],I=(C/c+b/c)/2,x=1.03-.06*(P.g>0?I:1-I);u.d[y*3]=Te(P.c[0]*x),u.d[y*3+1]=Te(P.c[1]*x),u.d[y*3+2]=Te(P.c[2]*x),d[y]=.08;const S=Te((T-_)/a);f[y]=.25+.75*S,g[y]=.62+.38*S}return{map:qn(u),normalMap:nr(f,512,2),ormMap:yn(512,g,d,null),uvScale:[r,r],normalScale:.8,tinted:!1}});$e("fabricWeave",i=>{const n=Xn(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let h=0;h<a.length;h++)a[h]=i.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=i.range(-.035,.035);const l=Dn(i,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const d=h*256+u,f=(u>>1&1^h>>1&1)===0,g=u>>1,_=h>>1,p=f?a[(g*8+(h>>5&7))%a.length]:c[(_*8+(u>>5&7))%c.length],m=Te((f?1.06:.94)+p+(l[d]-.5)*.06);n.d[d*3]=m,n.d[d*3+1]=m,n.d[d*3+2]=m,s[d]=f?.66:.8,r[d]=f?1:.3}return{map:qn(n),normalMap:nr(ou(r,256,256,1),256,.8),ormMap:yn(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});$e("joineryTimber",i=>{const n=Xn(512,512);Yi(n,[1,1,1]);const s=Dn(i,512,{p0x:48,p0y:8,octaves:4}),r=n.d;for(let c=0;c<512*512;c++){const l=Te(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=Bn(16777215,.72);for(let c=0;c<220;c++){const l=i.range(0,512),h=i.range(2,6),u=512/i.int(1,2),d=i.range(0,Math.PI*2);ru(n,l,h,u,d,i.range(2,3.5),o,i.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Te(.55+(s[c]-.5)*.08);return{map:qn(n),ormMap:yn(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});$e("vinylSheet",i=>{const n=Xn(512,512);Yi(n,14209732);const s=[13222578,15131093,11906460,14472902].map(Gn);for(let c=0;c<3e3;c++)er(n,i.range(0,512),i.range(0,512),i.range(1,3),i.pick(s),.35);const r=Dn(i,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Te(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=i.range(0,512),h=i.range(0,512),u=i.range(40,120),d=i.range(0,Math.PI*2),f=i.range(.6,2.2),g=[];for(let _=0;_<=24;_++){const p=d+f*(_/24);g.push([l+Math.cos(p)*u,h+Math.sin(p)*u])}Za(n,g,i.range(2,4),Bn(14209732,.88),.3),Za(a,g,i.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Te(o[c]+a.d[c*3]*.15);return{map:qn(n),ormMap:yn(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});$e("laminateBench",i=>{const s=Xn(512,512);Yi(s,dt.benchtop);const r=[9274743,14077886,7235417].map(Gn);for(let l=0;l<2e3;l++)er(s,i.range(0,512),i.range(0,512),i.range(1,2.5),i.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=Bn(dt.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let u=0;u<512;u++)Rc(s,u,l,c,.85),o[l*512+u]=.45;return{map:qn(s),ormMap:yn(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});$e("ceilingGrid",i=>{const s=Xn(512,512);Yi(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=Gn(14210509),c=Gn(12434098),l=Dn(i,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let d=0;d<512;d++){const f=u*512+d,g=Math.min(d,512-d),_=Math.min(u,512-u);if(g<r/2||_<o/2){const y=g>=r/2-2&&g<r/2||_>=o/2-2&&_<o/2?c:a;s.d[f*3]=y[0],s.d[f*3+1]=y[1],s.d[f*3+2]=y[2],h[f]=.55}else{const m=1+(l[f]-.5)*.04;s.d[f*3]*=m,s.d[f*3+1]*=m,s.d[f*3+2]*=m,h[f]=.9}}return{map:qn(s),ormMap:yn(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});$e("applianceEnamel",i=>{const n=Dn(i,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Te(.3+(n[r]-.5)*.04);return{ormMap:yn(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});$e("metalBrushed",i=>{const n=new Float32Array(65536),s=new Float32Array(256*256),r=Dn(i,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=i.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;n[l]=Te(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:yn(256,null,n,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});$e("quiltFolds",i=>{const n=[],s=i.int(5,9);for(let d=0;d<s;d++)n.push({a:i.range(.4,1),c:i.range(.05,.95),w:i.range(.06,.14)});const r=d=>{let f=0;for(const g of n)f+=g.a*Math.exp(-(((d-g.c)/g.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let o=1/0,a=-1/0;for(let d=0;d<=256;d++){const f=r(d/256);f<o&&(o=f),f>a&&(a=f)}const c=a-o||1,l=d=>(r(Te(d))-o)/c,h=Xn(512,256),u=new Float32Array(512*256);for(let d=0;d<512;d++){const f=l(d/511),g=.9+.1*f;for(let _=0;_<256;_++){const p=_*512+d;h.d[p*3]=g,h.d[p*3+1]=g,h.d[p*3+2]=g,u[p]=f}}return{map:$a(qn(h)),normalMap:$a(nr(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:n,tinted:!0}});$e("pictureArt",i=>{const n=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=n[r].map(Gn),a=Xn(256,256);Yi(a,o[i.int(0,3)]);const c=i.int(0,2);if(c===0){let h=0;for(;h<256;){const u=i.int(12,48);pn(a,0,h,256,Math.min(256,h+u),o[i.int(0,3)],i.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<i.int(5,11);h++){const u=i.range(0,179.2),d=i.range(0,256*.7);pn(a,u,d,u+i.range(30,110),d+i.range(30,110),o[i.int(0,3)],i.range(.55,.95))}else{const h=i.range(115.2,174.08);pn(a,0,0,256,h,o[0],1),pn(a,0,h,256,256,o[2],1);for(let u=0;u<i.int(3,7);u++){const d=i.range(h-40,h+40);pn(a,0,d,256,d+i.range(3,10),o[i.int(0,3)],i.range(.3,.7))}er(a,i.range(256*.2,256*.8),i.range(20,h-20),i.range(12,26),o[3],.9)}const l=Bn(16777215,.97);pn(a,0,0,256,6,l),pn(a,0,250,256,256,l),pn(a,0,0,6,256,l),pn(a,250,0,256,256,l),s.push($a(qn(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const ex={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},ms=new Map;function Pc(i,t=16777215,e=null,n={}){const s=ex[i];if(!s)throw new Error(`Surfaces: no surface named '${i}'`);const r=Object.keys(n).sort().map(h=>h+"="+JSON.stringify(n[h])).join(","),o=i+"|"+t+"|"+r;if(ms.has(o))return ms.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=h=>s.alpha!==void 0?bc(h):h;if(s.recipe){const{print:h,...u}=n,d=Object.keys(u).sort().map(m=>m+"="+JSON.stringify(u[m])).join(","),f=e?e.child("tex."+s.recipe+(d?"#"+d:"")):null,g=Q_(s.recipe,f,u),_=g.maps?g.maps[Math.min(g.maps.length-1,h??0)]:g.map;if(_&&(a.map=_),g.normalMap){a.normalMap=g.normalMap;const m=g.normalScale??1;a.normalScale=new te(m,m)}g.ormMap?(a.aoMap=g.ormMap,a.roughnessMap=g.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=g.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const p=c(new xn(a));return g.uvScale&&(p.userData.uvScale=g.uvScale),p.userData.cast=s.cast,p.userData.surface=i,ms.set(o,p),p}const l=c(new xn(a));return l.userData.cast=s.cast,l.userData.surface=i,ms.set(o,l),l}function nx(){for(const i of ms.values())i.dispose();ms.clear()}tr(nx);const Rt={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,intWall:.11,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,headDatum:2.1,benchH:.9,toeKickH:.15,toeKickD:.05,cabinetModules:[.3,.45,.6,.75,.9,1,1.2],handleH:1,switchH:1.05,gpoH:.3},Ee={thin:.002,furniture:.003,joinery:.005},Kl=new Set;function Ja(i,t,e={}){if(e.material)return e.material;try{return Pc(i,t,null,e.recipe||{})}catch(n){Kl.has(i)||(Kl.add(i),console.error(`RoomKit: surface '${i}' unavailable, falling back to flat colour`,n))}return vn(t,e)}function ee(i,t,e,n,s,r={}){var l;const o=Ja(i,s,r),a=r.chamfer?uu(t,e,n,r.chamfer):r.graded?ix(t,e,n,r.gradeEdge):new Gt(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),c=new ht(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const Ls=new Map,Si=i=>Math.round(i*1e3);function lu(i,t,e){const n=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(n[s*2]=i[r],n[s*2+1]=i[r+2]):o>=c?(n[s*2]=i[r+2],n[s*2+1]=i[r+1]):(n[s*2]=i[r],n[s*2+1]=i[r+1])}return n}function hu(i){const t=i.length*3,e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const o of i){const[a,c,l]=o;let h=c[0]-a[0],u=c[1]-a[1],d=c[2]-a[2],f=l[0]-a[0],g=l[1]-a[1],_=l[2]-a[2],p=u*_-d*g,m=d*f-h*_,y=h*g-u*f;const v=(a[0]+c[0]+l[0])/3,E=(a[1]+c[1]+l[1])/3,C=(a[2]+c[2]+l[2])/3;let b=c,T=l;p*v+m*E+y*C<0&&(b=l,T=c,p=-p,m=-m,y=-y);const P=Math.hypot(p,m,y)||1;p/=P,m/=P,y/=P;for(const I of[a,b,T])e[s*3]=I[0],e[s*3+1]=I[1],e[s*3+2]=I[2],n[s*3]=p,n[s*3+1]=m,n[s*3+2]=y,s++}const r=new Ke;return r.setAttribute("position",new be(e,3)),r.setAttribute("normal",new be(n,3)),r.setAttribute("uv",new be(lu(e,n,t),2)),r.setAttribute("color",new be(new Float32Array(t*3).fill(1),3)),r}function uu(i,t,e,n=Ee.furniture){i=Math.max(i,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(n,Math.min(i,t,e)/2-5e-4);if(!(s>2e-4))return new Gt(i,t,e);const r=`c${Si(i)},${Si(t)},${Si(e)},${Si(s)}`,o=Ls.get(r);if(o)return o;const a=i/2,c=t/2,l=e/2,h=[a-s,c-s,l-s],u=[a,c,l],d=(m,y)=>[(y===0?u[0]:h[0])*m[0],(y===1?u[1]:h[1])*m[1],(y===2?u[2]:h[2])*m[2]],f=[];for(const m of[-1,1])for(const y of[-1,1])for(const v of[-1,1])f.push([m,y,v]);const g=[],_=(m,y,v,E)=>{g.push([m,y,v]),g.push([m,v,E])};for(let m=0;m<3;m++){const y=(m+1)%3,v=(m+2)%3;for(const E of[-1,1]){const C=(b,T)=>{const P=[0,0,0];return P[m]=E,P[y]=b,P[v]=T,d(P,m)};_(C(-1,-1),C(1,-1),C(1,1),C(-1,1))}}for(let m=0;m<3;m++)for(let y=m+1;y<3;y++){const v=3-m-y;for(const E of[-1,1])for(const C of[-1,1]){const b=[0,0,0];b[m]=E,b[y]=C,b[v]=-1;const T=[0,0,0];T[m]=E,T[y]=C,T[v]=1,_(d(b,m),d(b,y),d(T,y),d(T,m))}}for(const m of f)g.push([d(m,0),d(m,1),d(m,2)]);const p=hu(g);return Ls.set(r,p),p}const Cr=[0,.05,.18,.55];function $l(i,t=.12){const e=t/.12,n=[0];for(let s=1;s<Cr.length;s++){const r=Cr[s]*e;r<i/2-1e-4&&n.push(r)}n.push(i/2);for(let s=Cr.length-1;s>=1;s--){const r=i-Cr[s]*e;r>i/2+1e-4&&n.push(r)}return n.push(i),n}function Zl(i,t,e,n,s,r){const o=(a,c)=>[t[0]+e[0]*a+n[0]*c,t[1]+e[1]*a+n[1]*c,t[2]+e[2]*a+n[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),h=o(s[a+1],r[c]),u=o(s[a+1],r[c+1]),d=o(s[a],r[c+1]);i.push([l,h,u]),i.push([l,u,d])}}function ix(i,t,e,n=.12){const s=`g${Si(i)},${Si(t)},${Si(e)},${Si(n)}`,r=Ls.get(s);if(r)return r;const o=e<=i&&e<=t?2:t<=i?1:0,[a,c,l]=o===2?[i,t,e]:o===1?[i,e,t]:[e,t,i],h=a/2,u=c/2,d=l/2,f=$l(a,n),g=$l(c,n),_=[];Zl(_,[-h,-u,d],[1,0,0],[0,1,0],f,g),Zl(_,[-h,-u,-d],[1,0,0],[0,1,0],f,g);const p=(y,v,E,C)=>{_.push([y,v,E]),_.push([y,E,C])};p([h,-u,-d],[h,u,-d],[h,u,d],[h,-u,d]),p([-h,-u,-d],[-h,u,-d],[-h,u,d],[-h,-u,d]),p([-h,u,-d],[h,u,-d],[h,u,d],[-h,u,d]),p([-h,-u,-d],[h,-u,-d],[h,-u,d],[-h,-u,d]);const m=hu(_);if(o===1?m.rotateX(-Math.PI/2):o===0&&m.rotateY(Math.PI/2),o!==2){const y=m.attributes.position.array,v=m.attributes.normal.array;m.setAttribute("uv",new be(lu(y,v,m.attributes.position.count),2))}return Ls.set(s,m),m}tr(()=>{for(const i of Ls.values())i.dispose();Ls.clear()});class sx{constructor(){this.group=new Qt,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,n,s,r,o,a=!1){this.colliders.push({min:new D(t-s/2,e,n-o/2),max:new D(t+s/2,e+r,n+o/2),walkable:a})}spot(t,e,n,s){return this.spots[t]=new D(e,n,s),this.spots[t]}interact(t,e,n,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new D(n,s,r),action:o,data:a,radius:c})}light(t,e,n,s=16770756,r=9,o=13){const a=new d_(s,r,o,2);return a.position.set(t,e,n),this.group.add(a),this.lights.push(a),a}}function rx(i,t,e,n,s,r,o=dt.floorTimber,a={}){const c=a.thickness??.16,l=ee(a.surface??"floorTimber",n,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),i.add(l),i.solid(t,r-c,e,n,c,s,!0),l}function Jl(i,t,e,n,s,r,o=dt.ceiling,a={}){const c=a.thickness??Rt.cornice,l=ee(a.surface??"ceiling",n,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),i.add(l),l}function ox(i,t,e,n,s=0,r={}){const o=ee("trim",.075,.115,.01,r.colour??dt.trim,{});o.position.set(t,e,n),o.rotation.y=s,i.add(o);const a=ee("trim",.03,.055,.004,r.colour??dt.trim,{});return a.rotation.y=s,a.position.set(t,e,n),a.translateZ(.007),i.add(a),o}function ax(i,t,e,n,s=0,r={}){const o=ee("trim",.115,.075,.01,r.colour??dt.trim,{});return o.position.set(t,e,n),o.rotation.y=s,i.add(o),o}function ti(i,t,e,n,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,h=e-r/2-a,u=e+r/2+a;const d=t-s/2,f=t+s/2,g=e-r/2,_=e+r/2;for(const v of i.decals){if(l<=v.x0||c>=v.x1||u<=v.z0||h>=v.z1)continue;const E=Math.min(l-v.x0,v.x1-c),C=Math.min(u-v.z0,v.z1-h);if(E<=C?t<(v.x0+v.x1)/2?l=Math.max(f,Math.min(l,v.x0)):c=Math.min(d,Math.max(c,v.x1)):e<(v.z0+v.z1)/2?u=Math.max(_,Math.min(u,v.z0)):h=Math.min(g,Math.max(h,v.z1)),l>v.x0+1e-4&&c<v.x1-1e-4&&u>v.z0+1e-4&&h<v.z1-1e-4)return null}const p=l-c,m=u-h;if(p<.05||m<.05)return null;const y=new ht(new ke(p,m),I_());return y.rotation.x=-Math.PI/2,y.position.set((c+l)/2,n+.006,(h+u)/2),i.add(y),i.decals.push({x0:c,x1:l,z0:h,z1:u}),y}const Jn=new ai;function du(i,t,e,n){Jn.setFromObject(t);const s=Jn.max.x-Jn.min.x,r=Jn.max.z-Jn.min.z;return i.solid((Jn.min.x+Jn.max.x)/2,e,(Jn.min.z+Jn.max.z)/2,s,n,r),[s,r]}function cx(i,t,e,n){if(i.door===!1||i.leaf===!1||i.door===void 0&&i.leaf===void 0&&t<=1.005)return null;const s=i.door||{},r=t>=1.25,o=s.style??(i.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??n,colour:s.colour??i.leaf??(o==="glazed"?ce.metal:e),surfaceName:s.surface??i.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function Vi(i,t,e,n,s,r={}){const{y0:o=0,height:a=Rt.storey,thickness:c=Rt.wallThick,colour:l=dt.wall,innerColour:h=null,outerColour:u=null,openings:d=[],skirting:f=!0,skirtStyle:g="timber",cornice:_=!0,corniceStyle:p="cove",autoServices:m=!0,inner:y=null,surface:v="wall",trimColour:E=dt.trim,graded:C=!0,name:b=null}=r,T=h??u,P=n-t,I=s-e,x=Math.hypot(P,I);if(x<.01)return;const S=P/x,U=I/x,O=Math.atan2(-U,S),K=-U,Y=S,V=c/2,$=(F,ot,et,pt=0,ct=0)=>(F.position.set(t+S*ot+K*pt,et,e+U*ot+Y*pt),F.rotation.y=O+ct,i.add(F),F),k=(F,ot,et,pt={})=>ee("trim",F,ot,et,pt.colour??E,pt),at=y===null?[-1,1]:[y],it=(F,ot,et,pt)=>{const ct=ot-F,Et=pt-et;if(ct<=.005||Et<=.005)return;const wt=(F+ot)/2,Tt=_&&p==="shadowline"&&Math.abs(pt-(o+a))<.02,R=Tt?Et-.01:Et,ue=ct>=1.2&&R>=1.2,It=ee(v,ct,R,c,l,{graded:C&&ue,cast:!0});if($(It,wt,et+R/2),Tt){const A=ee(v,ct,.01,c-.02,l,{});$(A,wt,pt-.005)}const Ft=Math.abs(S)*ct+Math.abs(U)*c,vt=Math.abs(U)*ct+Math.abs(S)*c,Jt=t+S*wt,gt=e+U*wt;if(i.solid(Jt,et,gt,Ft,Et,vt),T)for(const A of at){const M=ee(v,ct,R,.02,T,{graded:C&&ue});$(M,wt,et+R/2,A*(V+.01))}if(f&&g&&et-o<.02)if(g==="commercial"){const A=k(ct,Rt.skirtCommercial,c+.04,{colour:dt.tileFloor,chamfer:Ee.thin});$(A,wt,et+Rt.skirtCommercial/2)}else{const A=[[.112,Rt.skirtProud,0,Ee.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[M,H,Z,tt]of A){const Q=k(ct,M,c+H*2,{chamfer:tt});$(Q,wt,et+Z+M/2)}}if(_&&p==="cove"&&Math.abs(pt-(o+a))<.02){const A=Rt.corniceGirth/Math.SQRT2;for(const M of at){const H=k(ct,Rt.corniceGirth,.008,{chamfer:0});$(H,wt,pt-A/2,M*(V+A/2)),H.rotation.order="YXZ",H.rotation.set(-M*Math.PI/4,O,0)}}},yt=(F,ot,et,pt)=>{const ct=pt-et;for(const wt of[-1,1]){const Tt=k(Rt.reveal,ct,c,{});$(Tt,F+wt*(ot/2-Rt.reveal/2),et+ct/2)}const Et=k(ot,Rt.reveal,c,{});$(Et,F,pt-Rt.reveal/2)},Vt=(F,ot,et,pt)=>{const ct=ot-2*Rt.reveal,Et=ct/2+Rt.archQuirk,wt=pt+Rt.archQuirk;for(const Tt of[-1,1])for(const R of[-1,1]){const ue=k(Rt.archW,wt-et+.002,Rt.archProud,{chamfer:Ee.joinery});if($(ue,F+Tt*(Et+Rt.archW/2),et+(wt-et)/2,R*(V+Rt.archProud/2)),et-o<.02){const It=k(Rt.archW+.02,.15,.032,{});$(It,F+Tt*(Et+Rt.archW/2),et+.075,R*(V+.016))}}for(const Tt of[-1,1]){const R=k(ct+2*(Rt.archW+Rt.archQuirk),Rt.archW,Rt.archProud,{chamfer:Ee.joinery});$(R,F,wt+Rt.archW/2,Tt*(V+Rt.archProud/2))}},Kt=[...d].sort((F,ot)=>F.at-ot.at);let J=0;for(const F of Kt){const ot=F.width/2,et=Math.max(0,F.at-ot),pt=Math.min(x,F.at+ot),ct=F.kind==="window"?F.sill??Rt.winSill:0,Et=F.kind==="window"?F.head??Rt.winHead:F.head??(F.kind==="arch"?2.25:Rt.doorH);if(it(J,et,o,o+a),ct>0&&it(et,pt,o,o+ct),it(et,pt,o+Et,o+a),J=pt,F.kind==="window"){const wt=Et-ct,Tt=o+(ct+Et)/2,R=y===null?1:-y,ue=new ht(new Gt(F.width-2*Rt.reveal-.002,wt-.002,.006),Tc());ue.castShadow=!1,ue.receiveShadow=!0,$(ue,F.at,Tt,R*.015);const It=new ht(new Gt(F.width-2*Rt.reveal-.002,wt-.002,.006),A_());It.castShadow=!1,It.receiveShadow=!0,$(It,F.at,Tt,-R*.015),yt(F.at,F.width,o+ct,o+Et),Vt(F.at,F.width,o+ct,o+Et);const Ft=Math.max(1,Math.round((F.width-2*Rt.reveal)/.9)),vt=F.width-2*Rt.reveal;for(let gt=1;gt<Ft;gt++){const A=k(.04,wt,.05,{chamfer:Ee.joinery});$(A,F.at-vt/2+vt/Ft*gt,Tt)}const Jt=F.restrictor?Math.min(o+1.7,o+Et-.1):o+ct+wt/3;if(wt>.55){const gt=k(vt,.04,.05,{chamfer:Ee.joinery});$(gt,F.at,Jt)}if(F.restrictor){const gt=k(.06,.02,.03,{colour:dt.metalDull,chamfer:Ee.thin});$(gt,F.at+vt/4,o+ct+.02,0)}for(const gt of at){const A=k(F.width+.09,.025,c/2+.03,{chamfer:Ee.joinery});$(A,F.at,o+ct-.0125,gt*(c/4+.015))}if(y!==null){const gt=k(F.width+.12,.04,.09,{chamfer:Ee.joinery});$(gt,F.at,o+ct-.02,-y*(V+.045)),gt.rotation.order="YXZ",gt.rotation.set(y*.1,O,0)}if(F.curtains){lx(i,t+S*F.at,o+Et+.15,e+U*F.at,O,F.width+.4,{offset:(y??1)*(V+.09)});const gt=[.3,.22],A=y??1;for(const H of[-1,1]){const Z=gt[H<0?0:1],tt=F.width*Z,Q=6;for(let bt=0;bt<Q;bt++){const st=tt/Q,ft=ee("fabric",st*1.35,wt+.35,.045,F.curtains,{cast:!0}),qt=F.at+H*(F.width/2-tt+(bt+.5)*st);$(ft,qt,Tt+.1,A*(V+.075),bt%2?.175:-.175)}}const M=k(F.width+.44,.12,.09,{chamfer:Ee.joinery});$(M,F.at,o+Et+.21,A*(V+.055))}}else if((F.kind==="door"||F.kind==="arch")&&(yt(F.at,F.width,o,o+Et),Vt(F.at,F.width,o,o+Et),F.kind==="door")){const wt=F.swing??1,Tt=F.width/2-Rt.reveal,R=V-.045;for(const Ft of[-1,1]){const vt=k(.013,Et-.02,.03,{});$(vt,F.at+Ft*(Tt-.0055),o+(Et-.02)/2,wt*R)}const ue=k(F.width-2*Rt.reveal,.014,.03,{});$(ue,F.at,o+Et-.025,wt*R);const It=cx(F,F.width,E,wt);if(It){const Ft=R+.015+Rt.leafT,vt=Et-Rt.reveal-.02,Jt=It.pair?Tt-.006:2*Tt-.006,gt=It.face,A=It.pair?[1,-1]:[gt];for(const M of A){const H=F.at+M*(Tt-.003),Z=gt*Ft;It.leaves.push({hx:t+S*H+K*Z,hz:e+U*H+Y*Z,y:o,baseRot:O,phiOpen:M*gt*Math.PI/2,leafRot:M>0?0:Math.PI,dx:-M*Jt/2,dz:-gt*Rt.leafT/2,lw:Jt,lh:vt});for(const tt of[.15,1.02,1.89]){if(tt>vt-.1)continue;const Q=ee("chrome",.016,.1,.016,ce.metal,{chamfer:.001,cast:!1});$(Q,H,o+.015+tt,Z)}}It.centre={x:t+S*F.at,z:e+U*F.at},It.y0=o,i.doors.push(It)}}if(m&&F.kind==="door"){const wt=-(F.swing??1);for(const Tt of[-1,1])ox(i,t+S*(F.at+wt*(F.width/2+Rt.archW+.15))+K*Tt*(V+.006),o+Rt.switchH,e+U*(F.at+wt*(F.width/2+Rt.archW+.15))+Y*Tt*(V+.006),O+(Tt<0?Math.PI:0))}}if(it(J,x,o,o+a),m&&y!==null&&o+Rt.gpoH<o+a){const F=Math.max(1,Math.floor(x/3.5));for(let ot=0;ot<F;ot++){const et=(ot+.5)*(x/F);Kt.some(pt=>Math.abs(pt.at-et)<pt.width/2+.25)||ax(i,t+S*et+K*y*(V+.006),o+Rt.gpoH,e+U*et+Y*y*(V+.006),O+(y<0?Math.PI:0))}}b&&(i.faces[b]={a:{x:t,z:e},b:{x:n,z:s},u:{x:S,z:U},n:{x:K,z:Y},angle:O,thickness:c,y0:o,height:a,length:x,face:F=>({x:(t+n)/2+K*F*(c/2),z:(e+s)/2+Y*F*(c/2),nx:K*F,nz:Y*F,rotY:O+(F<0?Math.PI:0)})})}function lx(i,t,e,n,s=0,r=1.6,o={}){const a=new Qt,c=new ht(new Ne(.0125,.0125,r,8),Ja("chrome",o.colour??ce.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const h=new ht(new Ti(.0175,8,6),Ja("chrome",o.colour??ce.metalDark));h.position.x=l*r/2,a.add(h)}return a.rotation.y=s,a.position.set(t,e,n),a.translateZ(o.offset??0),i.add(a),a}function hx(i,t,e,n,s=!0){const r=ee("chrome",s?.128:.018,s?.018:.128,.018,ce.metal,{chamfer:.001,cast:!1});r.position.set(t,e,n+.032),i.add(r);for(const o of[-1,1]){const a=ee("chrome",.01,.01,.032,ce.metal,{cast:!1});a.position.set(t+(s?o*.064:0),e+(s?0:o*.064),n+.016),i.add(a)}return r}function Qa(i,t,e,n,s=0,r=dt.joineryLight){const o=typeof r=="object"&&r!==null?r:{colour:r},{colour:a=dt.joineryLight,frame:c=dt.joineryDark,collide:l=!0,seatH:h=.45}=o,u=new Qt,d=.44,f=ee("joinery",d,.018,d,a,{chamfer:.02,cast:!0});f.position.y=h-.009,u.add(f);const g=.42,_=ee("joinery",d,g,.018,a,{chamfer:Ee.furniture});_.position.set(0,h+.04+g/2,-d/2+.02),_.rotation.x=.14,u.add(_);for(const p of[-1,1]){const m=ee("joinery",.03,g+.07,.03,c,{chamfer:Ee.furniture});m.position.set(p*(d/2-.02),h+.02+(g+.07)/2,-d/2+.02),m.rotation.x=.14,u.add(m)}for(const p of[-1,1])for(const m of[-1,1]){const y=ee("joinery",.032,h-.018,.032,c,{chamfer:Ee.furniture});y.position.set(p*(d/2-.024),(h-.018)/2,m*(d/2-.024)),m<0&&(y.rotation.x=-.105),u.add(y)}for(const p of[-1,1]){const m=ee("joinery",d-.07,.045,.016,c,{chamfer:Ee.thin});m.position.set(0,h-.045,p*(d/2-.026)),u.add(m);const y=ee("joinery",d-.07,.02,.02,c,{chamfer:Ee.thin});y.position.set(0,.18,p*(d/2-.026)),u.add(y)}return u.position.set(t,n,e),u.rotation.y=s,i.add(u),l&&i.solid(t,n,e,.45,.45,.45),u}function ux(i,t,e,n,s,r,o=0,a=dt.benchtop,c=dt.joineryLight,l={}){const{shadow:h=!0,handle:u=!0}=l,d=new Qt,f=Rt.toeKickH,g=Rt.toeKickD,_=.72,p=.038,m=ee("joinery",s-.1,f,r-g,dt.shadowDark,{});m.position.set(0,f/2,-g/2),d.add(m);const y=ee("joinery",s,_,r,c,{chamfer:Ee.furniture,cast:!0});y.position.set(0,f+_/2,0),d.add(y);const v=ee("bench",s+.04,p,r+.02,a,{chamfer:Ee.joinery,cast:!0});v.position.set(0,Rt.benchH-p/2,.01),d.add(v);const E=[];let C=s;for(;C>.02;){let I=Rt.cabinetModules[0];for(const x of Rt.cabinetModules)x<=C+.001&&(I=x);(C-I<.02||E.length>12)&&(I=C),E.push(I),C-=I}let b=-s/2;for(const I of E){const x=ee("joinery",I-.003,_-.006,.018,c,{chamfer:Ee.thin,cast:!1});x.position.set(b+I/2,f+_/2,r/2+.009),d.add(x),u&&hx(d,b+I/2,f+_-.05,r/2+.018),b+=I}d.position.set(t,n,e),d.rotation.y=o,i.add(d);const[T,P]=du(i,d,n,Rt.benchH);return h&&ti(i,t,e,n,T,P),d}function fu(i,t,e,n,s,r,o=0,a=dt.joineryLight,c={}){const{frame:l=dt.joineryDark,height:h=.74,shadow:u=!0}=c,d=new Qt,f=.03,g=ee("joinery",s,f,r,a,{chamfer:Ee.joinery,cast:!0});g.position.y=h-f/2,d.add(g);for(const m of[-1,1])for(const y of[-1,1]){const v=ee("joinery",.06,h-f,.06,l,{chamfer:Ee.furniture});v.position.set(m*(s/2-.09),(h-f)/2,y*(r/2-.09)),d.add(v)}for(const[m,y,v,E]of[[s-.24,.02,0,r/2-.09],[s-.24,.02,0,-r/2+.09],[.02,r-.24,s/2-.09,0],[.02,r-.24,-s/2+.09,0]]){const C=ee("joinery",m,.07,y,l,{chamfer:Ee.furniture});C.position.set(v,h-f-.035,E),d.add(C)}d.position.set(t,n,e),d.rotation.y=o,i.add(d);const[_,p]=du(i,d,n,h);return u&&ti(i,t,e,n,_,p),d}function dx(i,t,e,n,s,r,o={}){const{tileW:a=1.2,tileD:c=.6,colour:l=dt.ceiling,tee:h=dt.metalDull}=o,u=new Qt,d=Math.max(1,Math.round(n/a)),f=Math.max(1,Math.round(s/c)),g=n/d,_=s/f;for(let p=0;p<d;p++)for(let m=0;m<f;m++){const y=ee("ceilingGrid",g-.02,.014,_-.02,l,{cast:!1});y.position.set(-n/2+(p+.5)*g,-.007,-s/2+(m+.5)*_),u.add(y)}for(let p=0;p<=d;p++){const m=ee("chrome",.024,.024,s,h,{chamfer:.001});m.position.set(-n/2+p*g,-.012,0),u.add(m)}for(let p=0;p<=f;p++){const m=ee("chrome",n,.024,.024,h,{chamfer:.001});m.position.set(0,-.012,-s/2+p*_),u.add(m)}return u.position.set(t,r,e),i.add(u),u}const fx=.38,px=.44,mx=2.4,gx=1.8,_x=.95,xx=2.4,Ql=70,Pr=.38,th=i=>i<0?0:i>1?1:i,vx=i=>i*i*(3-2*i);function yx(i,t,e,n="doorLeaf"){const s=new Qt,r=Rt.leafT,o=.105,a=.175,c=.105,l=.14,h=Math.min(Rt.handleH+.01,t-c-l),u=(m,y,v,E,C=r,b=.005)=>{const T=ee(n,m,y,C,e,{chamfer:b,cast:!0});return T.position.set(v,E,0),s.add(T),T};u(o,t,i/2-o/2,0),u(o,t,-i/2+o/2,0);const d=i-2*o;u(d,a,0,-t/2+a/2),u(d,c,0,t/2-c/2),u(d,l,0,-t/2+h);const f=a,g=h-l/2,_=h+l/2,p=t-c;g-f>.05&&u(d-.004,g-f-.004,0,-t/2+(f+g)/2,r-.016,.002),p-_>.05&&u(d-.004,p-_-.004,0,-t/2+(_+p)/2,r-.016,.002);for(const m of[-1,1]){const y=ee("chrome",.052,.052,.01,ce.metal,{chamfer:.002,cast:!1});y.position.set(-i/2+.06,-t/2+Rt.handleH,m*(r/2+.005)),s.add(y);const v=ee("chrome",.02,.02,.045,ce.metal,{chamfer:.001,cast:!1});v.position.set(-i/2+.06,-t/2+Rt.handleH,m*(r/2+.0275)),s.add(v);const E=ee("chrome",.11,.02,.02,ce.metal,{chamfer:.001,cast:!1});E.position.set(-i/2+.115,-t/2+Rt.handleH,m*(r/2+.05)),s.add(E)}return s}function Mx(i,t,e=ce.metal){const n=new Qt,s=.048,r=.085,o=.07,a=.21,c=.07,l=Math.min(1.02,t-o-c-.2),h=(f,g,_,p,m=s,y=.003)=>{const v=ee("chrome",f,g,m,e,{chamfer:y,cast:!0});return v.position.set(_,p,0),n.add(v),v};h(r,t,i/2-r/2,0),h(r,t,-i/2+r/2,0);const u=i-2*r;h(u,a,0,-t/2+a/2),h(u,o,0,t/2-o/2),h(u,c,0,-t/2+l);const d=[[-t/2+a,-t/2+l-c/2],[-t/2+l+c/2,t/2-o]];for(const[f,g]of d){const _=g-f;if(_<.08)continue;const p=new ht(new Gt(u-.004,_-.004,.008),Tc());p.castShadow=!1,p.receiveShadow=!0,p.position.set(0,(f+g)/2,0),n.add(p)}for(const f of[-1,1]){const g=ee("chrome",u,a-.03,.004,e,{chamfer:.001,cast:!1});g.position.set(0,-t/2+a/2,f*(s/2+.003)),n.add(g);const _=-t/2+1.05,p=ee("chrome",i-.17,.038,.038,e,{chamfer:.002,cast:!1});p.position.set(0,_,f*(s/2+.062)),n.add(p);for(const m of[-1,1]){const y=ee("chrome",.026,.026,.062,e,{chamfer:.001,cast:!1});y.position.set(m*(i/2-.115),_,f*(s/2+.031)),n.add(y)}}return n}class Sx{constructor(t,e,n,s){this.system=t,this.id=s,this.name=e.label||"door",this.auto=!!e.auto,this.triggerR=e.triggerR??(this.auto?mx:_x),this.dwell=e.dwell??(this.auto?gx:xx),this.openTime=e.openTime??fx,this.closeTime=e.closeTime??px,this.state=e.startsShut===!1?"open":"shut",this.phase=this.state==="open"?1:0,this._hold=0,this.isDoor=!0,this.action="door",this.data={door:this},this.radius=2,this.leaves=[];for(const c of e.leaves){const l=new Qt;l.position.set(c.hx,c.y,c.hz),l.rotation.y=c.baseRot;const h=e.style==="glazed"?Mx(c.lw,c.lh,e.colour):yx(c.lw,c.lh,e.colour,e.surfaceName),u=nu(h);u.position.set(c.dx,c.lh/2+.015,c.dz),u.rotation.y=c.leafRot,l.add(u),n.add(l),this.leaves.push({pivot:l,baked:u,baseRot:c.baseRot,phiOpen:c.phiOpen})}for(const c of this.leaves)c.pivot.rotation.y=c.baseRot;n.updateMatrixWorld(!0);const r=new ai,o=new ai;for(const c of this.leaves)r.union(o.setFromObject(c.baked));r.min.y-=.05,this.collider={min:r.min.clone(),max:r.max.clone(),walkable:!1,door:this};const a=new D(e.centre.x,e.y0+1,e.centre.z);n.localToWorld(a),this.pos=a,this._trigger2=this.triggerR*this.triggerR,this._apply()}get open(){return this.state==="open"}get blocking(){return this.state==="shut"}get label(){return this.state==="shut"||this.state==="closing"?`Open the ${this.name}`:`Close the ${this.name}`}requestOpen(){if(this.state==="open"||this.state==="opening"){this._hold=this.dwell;return}this.state="opening",this.system._dirty=!0}requestClose(){return this.state==="shut"||this.state==="closing"?!0:this._occupied()?!1:(this.state="closing",!0)}toggle(){return this.state==="shut"||this.state==="closing"?(this.requestOpen(),!0):this.requestClose()}_occupied(t=null){var o;const e=this.collider,n=a=>a.x>e.min.x-Pr&&a.x<e.max.x+Pr&&a.z>e.min.z-Pr&&a.z<e.max.z+Pr,s=(o=this.system.game.player)==null?void 0:o.position;if(s&&n(s))return!0;const r=t||this.system._movers();for(const a of r)if(n(a))return!0;return!1}update(t,e,n){let s=!1;if(this.auto&&n){const r=n.x-this.pos.x,o=n.z-this.pos.z;s=r*r+o*o<this._trigger2}if(!s)for(const r of e){const o=r.x-this.pos.x,a=r.z-this.pos.z;if(o*o+a*a<this._trigger2){s=!0;break}}switch(s&&(this._hold=this.dwell,(this.state==="shut"||this.state==="closing")&&(this.state="opening",this.system._dirty=!0)),this.state){case"opening":this.phase=th(this.phase+t/this.openTime),this.phase>=1&&(this.phase=1,this.state="open");break;case"open":this._hold>0&&(this._hold-=t,this._hold<=0&&!this._occupied(e)&&(this.state="closing"));break;case"closing":if(this._occupied(e)){this.state="opening",this._hold=this.dwell;break}this.phase=th(this.phase-t/this.closeTime),this.phase<=0&&(this.phase=0,this.state="shut",this.system._dirty=!0);break}this._apply()}_apply(){const t=vx(this.phase);for(const e of this.leaves)e.pivot.rotation.y=e.baseRot+e.phiOpen*t}setVisible(t){for(const e of this.leaves)e.pivot.visible!==t&&(e.pivot.visible=t)}dispose(){var t;for(const e of this.leaves)(t=e.pivot.parent)==null||t.remove(e.pivot),e.baked.traverse(n=>{n.isMesh&&n.geometry.dispose()});this.leaves.length=0}}class Ex{constructor(t){this.game=t,this.list=[],this._blocking=[],this._dirty=!0,this._moverBuf=[],this._moverFrame=-1,this._frame=0,this.scanned=0}install(t,e){if(!t||!t.length)return[];const n=[];for(const s of t){const r=new Sx(this,s,e,this.list.length);this.list.push(r),n.push(r)}return this._dirty=!0,n}get count(){return this.list.length}_movers(){var r,o,a;if(this._moverFrame===this._frame)return this._moverBuf;this._moverFrame=this._frame;const t=this._moverBuf;t.length=0;const e=this.game,n=(o=(r=e.slice)==null?void 0:r.bodies)==null?void 0:o.call(r);if(n)for(const c of n)t.push(c.pos);const s=(a=e.npcs)==null?void 0:a.list;if(s)for(const c of s)c.visible&&t.push(c.position);return t}update(t){var r;if(!this.list.length)return;this._frame++;const e=this._movers(),n=(r=this.game.player)==null?void 0:r.position,s=Ql*Ql;for(const o of this.list)if(o.update(t,e,n),n){const a=n.x-o.pos.x,c=n.z-o.pos.z;o.setVisible(a*a+c*c<s)}}collect(t,e,n){if(this._dirty){this._blocking.length=0;for(const l of this.list)l.blocking&&this._blocking.push(l.collider);this._dirty=!1}const s=this._blocking.length;if(!s)return n;this.scanned+=s;const r=t.x-e,o=t.x+e,a=t.z-e,c=t.z+e;for(let l=0;l<s;l++){const h=this._blocking[l];h.max.x<r||h.min.x>o||h.max.z<a||h.min.z>c||n.push(h)}return n}nearest(t,e=2){let n=null,s=e;for(const r of this.list){if(r.auto)continue;const o=r.pos.distanceTo(t);o<s&&(s=o,n=r)}return n}clear(){for(const t of this.list)t.dispose();this.list.length=0,this._blocking.length=0,this._dirty=!0}}const $o=(i,t,e,n,s={})=>{const r=new ht(new Gt(i,t,e),s.material||vn(n,s));return r.castShadow=s.cast!==!1,r.receiveShadow=!0,r};function wx(i,t={}){var f;const{width:e=3,height:n=.8,bg:s="#1f2933",fg:r="#f4efe4",font:o="bold 64px Georgia, serif",pad:a=24}=t,c=document.createElement("canvas");c.width=512,c.height=Math.max(32,Math.round(512*(n/e)));const l=c.getContext("2d");l.fillStyle=s,l.fillRect(0,0,c.width,c.height),t.border&&(l.strokeStyle=t.border,l.lineWidth=8,l.strokeRect(6,6,c.width-12,c.height-12)),l.fillStyle=r,l.font=o,l.textAlign="center",l.textBaseline="middle";let h=parseInt(((f=o.match(/(\d+)px/))==null?void 0:f[1])||"64",10);for(;l.measureText(i).width>c.width-a*2&&h>12;)h-=2,l.font=o.replace(/\d+px/,h+"px");l.fillText(i,c.width/2,c.height/2);const u=new Wn(c);u.colorSpace=Ce,u.anisotropy=4;const d=new ht(new ke(e,n),new Vn({map:u,transparent:!0,side:kn}));return d.userData.isSign=!0,d}function bx(i,t=1){const e=new Qt,n=i.range(2.6,4.4)*t,s=new ht(new Ne(.2*t,.3*t,n,6),vn(ce.trunk,{flat:!0}));s.position.y=n/2,s.castShadow=!0,e.add(s);const r=i.weighted([{value:ce.foliage,weight:4},{value:ce.foliageLight,weight:3},{value:ce.foliageDeep,weight:2}]).value,o=i.int(2,4);for(let a=0;a<o;a++){const c=i.range(1.3,2.2)*t,l=new ht(new ho(c,0),vn(r,{flat:!0}));l.position.set(i.range(-.7,.7)*t,n+i.range(-.2,.9)*t,i.range(-.7,.7)*t),l.rotation.set(i.range(0,3),i.range(0,3),i.range(0,3)),l.castShadow=!0,l.receiveShadow=!0,e.add(l)}return e}function Tx(i,t){const e=new Qt,n=$o(1.9,.72,4.3,i.pick(ce.carBodies));n.position.y=.78,e.add(n);const s=$o(1.72,.62,2.2,0,{material:C_()});s.position.set(0,1.4,-.15),e.add(s);const r=$o(1.95,.34,4.35,ce.metalDark);r.position.y=.45,e.add(r);for(const a of[-.86,.86])for(const c of[1.42,-1.42]){const l=new ht(new Ne(.34,.34,.26,10),vn(1579292));l.rotation.z=Math.PI/2,l.position.set(a,.34,c),l.castShadow=!0,e.add(l)}const o=P_();for(const a of[-.62,.62]){const c=new ht(new Gt(.34,.16,.08),o);c.position.set(a,.86,2.16),e.add(c);const l=new ht(new Gt(.3,.14,.08),L_());l.position.set(a,.86,-2.16),e.add(l)}return e.userData.headlights=o,e}const Ax=.42,Rx=.34,ri=Rx+.03,tc=.7,ec=.6,Ze=.55,Ge=11026479,qs=3.2,bn=2.8,ut={x0:-5.4,x1:-1.8,z0:-3.65,z1:-2.35,cx:-3.6,cz:-3,w:3.6,d:1.3,benchH:.9},fe={x0:-1.72,z0:-2.45,x1:-.9,z1:-.55,w:.36},gs={x:-1.93,z:-2.51},Lr={x:ut.cx,y:1.78,z:ut.z0+.176,tilt:-.16,w:.48,h:.28},Es={x0:-1.7,y:.97,z:0},Tn={x0:ut.x0+.35,x1:-2.3,z:ut.z1+.55,facing:Math.PI},eh={x:-8,screen:{y:1.22,z:1.721,w:.3,h:.22,rotY:Math.PI}},Cx={x:-5.2,y:2.3,z:1.934,w:.62,h:.34,rotY:0},Oi={x:-8,z:.85,facing:0},Px=.04,Lx=.004,Dx=.012,Ix=(i,t,e)=>{const n=Math.min(i,t,e);return n<Px?0:Math.min(Dx,Math.max(Lx,n/12))},Ux=[["tile",16777215,"kitchen floor overlay, splashbacks, partition linings"],["metal",dt.metalDull,"all stainless: pod, benches, pass, hood, shelving"],["bench",dt.benchtop,"front counter top (RoomKit counter())"],["joinery",dt.joineryLight,"tables, chairs, booths, gate, door leaves"],["joinery",dt.joineryDark,"chair frames, bins, kiosk plinths"],["joinery",dt.shadowDark,"toe kicks, recesses, coved skirting, screens off"],["trim",Ge,"counter fascia, kiosk pedestals, menu board, signage"],["(basic)","signAtlas","ONE canvas atlas: every label in the shop"],["(shared)","troffer emissive","luminaire faces — one material town-wide"],["(shared)","contact shadow","fixture footprint decals — one town-wide"],["trim",5208634,"cold bin: lettuce (legibility is a design requirement)"],["trim",10236968,"cold bin: tomato"],["trim",13210159,"cold bin: cheese + UHC hold slots"],["trim",8030778,"cold bin: pickle"],["trim",15261904,"cold bin: onion + mayo gun band"]],nh=new Set;function pu(i,t,e={}){if(e.material)return e.material;try{return Pc(i,t,null,e.recipe||{})}catch(n){return nh.has(i)||(nh.add(i),console.error(`Fitout: surface '${i}' unavailable, flat colour instead`,n)),vn(t,e)}}function Nx(i,t,e,n,s,r={}){var h;const o=pu(i,s,r),a=r.chamfer??Ix(t,e,n),c=a>0?uu(t,e,n,a):new Gt(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),l=new ht(c,o);return l.castShadow=r.cast??((h=o.userData)==null?void 0:h.cast)??!1,l.receiveShadow=!0,l}function q(i,t,e,n,s,r,o,a,c,l={}){const h=Nx(t,o,a,c,e,l);return h.position.set(n,s,r),l.rotY&&(h.rotation.y=l.rotY),i.add(h),h}const mu=i=>({x:Math.sin(i),z:Math.cos(i)});function Dr(i,t,e,n,s){const r=(t+n)/2,o=(e+s)/2;q(i,"joinery",dt.shadowDark,r,.0375,o,Math.max(Math.abs(n-t),.024),.075,Math.max(Math.abs(s-e),.024))}function Ir(i,t,e,n,s,r,o,a){const c=n-t,l=s-e;for(let h=0;h<o;h++)for(let u=0;u<a;u++){const d=t+(h+.5)*(c/o),f=e+(u+.5)*(l/a);q(i,"metal",dt.metalDull,d,r+.035,f,1.2,.07,.6);const g=new ht(new Gt(1.16,.012,.56),D_());g.position.set(d,r-.006,f),i.add(g)}}function Ox(i,t,e,n=0,s=.62,r=.48){const a=mu(n);q(i,"joinery",dt.joineryDark,t,.9/2,e,s,.9,r,{rotY:n,cast:!0}),q(i,"joinery",dt.shadowDark,t,.075,e,s-.06,.15,r-.06,{rotY:n}),q(i,"joinery",dt.shadowDark,t+a.x*(r/2-.03),.6,e+a.z*(r/2-.03),s-.16,.34,.04,{rotY:n});const c=q(i,"joinery",dt.joineryLight,t+a.x*(r/2+.01),.64,e+a.z*(r/2+.01),s-.2,.26,.016,{rotY:n,cast:!0});c.rotation.x=-.22,q(i,"metal",dt.metalDull,t,.9+.02,e,s+.06,.04,r+.06,{rotY:n,cast:!0}),q(i,"trim",Ge,t,.9-.07,e,s+.005,.09,r+.005,{rotY:n}),i.solid(t,0,e,Math.abs(a.z)*s+Math.abs(a.x)*r,.9+.05,Math.abs(a.z)*r+Math.abs(a.x)*s)}function ih(i,t,e,n,s=0){const r={rotY:s};q(i,"joinery",dt.joineryDark,t,n+.021,e,.17,.042,.115,r),q(i,"trim",Ge,t-.045,n+.1,e,.052,.15,.052,{...r,cast:!0}),q(i,"joinery",dt.shadowDark,t+.03,n+.075,e-.02,.038,.1,.038,{...r,cast:!0}),q(i,"joinery",dt.joineryLight,t+.038,n+.058,e+.028,.055,.065,.055,r)}function sh(i,t,e,n,s=7,r=.4,o=.3,a=0){for(let c=0;c<s;c++)q(i,"trim",Ge,t,e+.01+c*.014,n,r,.012,o,{rotY:a,cast:c===s-1});q(i,"joinery",dt.shadowDark,t,e+.004,n,r+.03,.008,o+.03,{rotY:a})}const nc=4,ic=8;function ls(){return"#"+Ge.toString(16).padStart(6,"0")}const gu={fries:[0,0,"FRIES","#20262e"],grill:[1,0,"GRILL","#20262e"],pod:[2,0,"BUILD","#20262e"],pack:[3,0,"PACK-OUT","#20262e"],drivethru:[0,1,"DRIVE-THRU",ls()],staff:[1,1,"STAFF ONLY","#20262e"],collect:[2,1,"COLLECT",ls()],order:[3,1,"ORDER HERE",ls()],drinks:[0,2,"DRINKS","#20262e"],mccafe:[1,2,"McCAFE","#4b2e22"],barn:[2,2,"BURGER BARN",ls()],uhc:[3,2,"UHC","#20262e"],lettuce:[0,3,"LETTUCE","#4f7a3a"],tomato:[1,3,"TOMATO","#9c3428"],cheese:[2,3,"CHEESE","#c9922f"],pickle:[3,3,"PICKLE","#7a8a3a"],onion:[0,4,"ONION","#8f9784","#20262e"],ketchup:[1,4,"KETCHUP","#9c2b1f"],mustard:[2,4,"MUSTARD","#c9922f"],mayo:[3,4,"MAYO","#e6dcc4","#20262e"],bbq:[0,5,"BBQ","#5a3a26"],buns:[1,5,"BUNS","#a8763f"],wrap:[2,5,"WRAP","#20262e"],dry:[3,5,"DRY STORE","#2f5d6b"],pay:[0,6,"PAY",ls()],present:[1,6,"PRESENT",ls()],toaster:[2,6,"TOASTER","#20262e"],sauce:[3,6,"SAUCE","#20262e"]};let An=null;function _u(){if(An!==null)return An||null;if(typeof document>"u"||!document.createElement)return An=!1,null;const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d");if(!t)return An=!1,null;const e=i.width/nc,n=i.height/ic;t.clearRect(0,0,i.width,i.height);for(const[,r]of Object.entries(gu)){const[o,a,c,l,h="#f4efe4"]=r,u=o*e,d=a*n;t.fillStyle=l,t.fillRect(u+3,d+3,e-6,n-6),t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=3,t.strokeRect(u+3,d+3,e-6,n-6),t.fillStyle=h,t.textAlign="center",t.textBaseline="middle";let f=44;for(t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.measureText(c).width>e-34&&f>12;)f-=2,t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.fillText(c,u+e/2,d+n/2)}const s=new Wn(i);return s.colorSpace=Ce,s.anisotropy=4,An=new xn({map:s,roughness:.9,metalness:0,emissive:2763306,emissiveMap:s,side:Hn,transparent:!1}),An}tr(()=>{var i;An&&An.dispose&&((i=An.map)==null||i.dispose(),An.dispose()),An=null});let ei=null;function Ur(){return ei||(ei=new xn({color:856342,roughness:.3,metalness:0,emissive:1454666,emissiveIntensity:.55})),ei}tr(()=>{var i;(i=ei==null?void 0:ei.dispose)==null||i.call(ei),ei=null});function ge(i,t,e,n,s,r,o,a=0){const c=_u(),l=gu[t];if(!c||!l)return null;const[h,u]=l,d=new ke(r,o),f=h/nc,g=(h+1)/nc,_=1-(u+1)/ic,p=1-u/ic;d.setAttribute("uv",new be(new Float32Array([f,p,g,p,f,_,g,_]),2));const m=new ht(d,c);return m.position.set(e,n,s),m.rotation.y=a,i.add(m),m}const no=i=>!i.walkable&&i.max.y>Ax&&i.min.y<1.7;function Fx(i,t,e){let n=t,s=e,r=0;for(let o=0;o<4;o++){let a=!1;for(const c of i){if(!no(c))continue;const l=c.min.x-ri,h=c.max.x+ri,u=c.min.z-ri,d=c.max.z+ri;if(n<=l||n>=h||s<=u||s>=d)continue;const f=[[n-l,-1,0],[h-n,1,0],[s-u,0,-1],[d-s,0,1]];f.sort((m,y)=>m[0]-y[0]);const[g,_,p]=f[0];n+=_*g,s+=p*g,r+=g,a=!0}if(!a)break}return{x:n,z:s,moved:r}}function zx(i,t,e){let n=1/0;for(const s of i){if(!no(s))continue;const r=Math.max(s.min.x-t,0,t-s.max.x),o=Math.max(s.min.z-e,0,e-s.max.z),a=r===0&&o===0?-Math.min(t-s.min.x,s.max.x-t,e-s.min.z,s.max.z-e):Math.hypot(r,o);a<n&&(n=a)}return n===1/0?99:n}function kx(i,t){const e=[],n=[];for(const s of t){const r=[];for(const g of i)no(g)&&s.x>g.min.x-ri&&s.x<g.max.x+ri&&s.z>g.min.z-ri&&s.z<g.max.z+ri&&r.push([+g.min.x.toFixed(2),+g.min.z.toFixed(2),+g.max.x.toFixed(2),+g.max.z.toFixed(2)]);if(r.length&&e.push({id:s.id,why:"point inside a blocking collider",boxes:r}),n.push({id:s.id,clear:+zx(i,s.x,s.z).toFixed(3)}),s.facing==null||s.standoff==null)continue;const o=mu(s.facing),a=[s.standoff-.01,s.standoff-ec],c=[s.x+o.x*a[0],s.x+o.x*a[1]],l=[s.z+o.z*a[0],s.z+o.z*a[1]],h=tc/2,u=[Math.min(...c)-Math.abs(o.z)*h,Math.max(...c)+Math.abs(o.z)*h],d=[Math.min(...l)-Math.abs(o.x)*h,Math.max(...l)+Math.abs(o.x)*h],f=[];for(const g of i)no(g)&&(g.max.x<=u[0]+1e-6||g.min.x>=u[1]-1e-6||g.max.z<=d[0]+1e-6||g.min.z>=d[1]-1e-6||f.push([+g.min.x.toFixed(2),+g.min.z.toFixed(2),+g.max.x.toFixed(2),+g.max.z.toFixed(2)]));f.length&&e.push({id:s.id,why:`clear floor ${tc} x ${ec} obstructed`,rect:[+u[0].toFixed(2),+d[0].toFixed(2),+u[1].toFixed(2),+d[1].toFixed(2)],boxes:f})}return n.sort((s,r)=>s.clear-r.clear),{failures:e,tightest:n.slice(0,8)}}function Bx(i,t={}){const e=t.width??20,n=t.depth??14,s=e/2,r=n/2,o=s-Rt.wallThick/2,a=r-Rt.wallThick/2,c=dt.metalDull,l=dt.joineryLight,h=dt.joineryDark,u=dt.shadowDark,d=[],f=(L,N,W,nt=null,mt=null,Xt={})=>{d.push({name:L,x:N,z:W,facing:nt,standoff:mt,noClamp:!!Xt.noClamp})},g=1.4;q(i,"tile",16777215,(-o+7.9)/2,.003,(-a+g)/2,o+7.9,.006,g+a,{cast:!1,chamfer:0}),q(i,"tile",16777215,(7.9+o)/2,.003,(-5+g)/2,o-7.9,.006,g+5,{cast:!1,chamfer:0}),Dr(i,-o+.02,-a+.04,3.25,-a+.04),Dr(i,-o+.04,-a,-o+.04,g),Dr(i,o-.04,-5,o-.04,g);const _=-a+.375,p=-a+.75,m=-9.6,y=-6.7,v=(m+y)/2,E=y-m;q(i,"metal",c,v,.45,_,E,.9,.75,{cast:!0}),q(i,"joinery",u,v,.075,_+.02,E-.1,.15,.66),i.solid(v,0,_,E,.9,.75);const C=1.12;q(i,"tile",16777215,v,1.5,-a+.02,E+.4,1.2,.02,{cast:!1,chamfer:0}),q(i,"metal",c,v,1.01,_,2.1,.22,.62,{cast:!0});for(const L of[-.7,-.23,.24])q(i,"joinery",u,v+L,C,_,.32,.03,.42),q(i,"trim",13210159,v+L,C-.03,_,.28,.01,.38,{chamfer:0}),q(i,"metal",c,v+L,C+.16,_-.26,.03,.3,.03),q(i,"metal",c,v+L,C+.3,_-.2,.03,.03,.16);q(i,"metal",c,v+.95,1.06,_,.75,.1,.62,{cast:!0}),q(i,"metal",c,v+.95,1.24,_-.26,.7,.04,.04),q(i,"trim",Ge,v+.95,1.14,_+.1,.3,.06,.22),ge(i,"fries",v,1.62,-a+.05,.9,.26,0),q(i,"metal",c,v,2.24,_+.15,E+.3,.42,1,{cast:!0});const b=1.06,T=-4.3,P=-.3,I=(T+P)/2,x=P-T;q(i,"metal",c,I,.45,_,x,.9,.75,{cast:!0}),q(i,"joinery",u,I,.075,_+.02,x-.1,.15,.66),i.solid(I,0,_,x,.9,.75),q(i,"tile",16777215,I,1.5,-a+.02,x+.4,1.2,.02,{cast:!1,chamfer:0}),q(i,"metal",c,I,.98,_,2.6,.16,.62,{cast:!0});for(const L of[-.65,.65])q(i,"joinery",u,I+L,b,_,1.1,.02,.5);q(i,"metal",c,I,b+.1,_-.3,2.6,.2,.03,{cast:!0}),q(i,"metal",c,I+1.35,b+.02,_+.16,.1,.02,.16),q(i,"joinery",u,I+1.35,b+.06,_+.24,.03,.07,.1),ge(i,"grill",I,1.62,-a+.05,.9,.26,0),q(i,"metal",c,I,2.24,_+.15,x+.4,.42,1,{cast:!0}),q(i,"metal",c,I,2.62,_+.15,.34,.36,.34),q(i,"metal",c,1.35,1,_+.02,1.6,2,.7,{cast:!0}),i.solid(1.35,0,_+.02,1.6,2,.7);for(const L of[-.4,.4])q(i,"joinery",u,1.35+L,1,_+.38,.72,1.86,.02),q(i,"metal",c,1.35+L-.3,1.05,_+.4,.04,.6,.04);const S=Rt.intWall,U=3.3,O=-4.55,K={height:bn,surface:"tile",colour:16777215,thickness:S,skirting:!1,cornice:!1,trimColour:dt.trim};Vi(i,U,-a,U,O,{...K,inner:-1,autoServices:!1,name:"dryWest"}),Vi(i,U,O,o,O,{...K,inner:1,autoServices:!1,openings:[{at:.95,width:1,kind:"door",head:Rt.headDatum,door:{startsShut:!1,style:"panel",label:"dry store"}}],name:"drySouth"}),ge(i,"staff",U+.006+S/2,1.85,-5.7,.7,.22,Math.PI/2),ge(i,"dry",U+1.85,2.3,O+S/2+.006,.9,.26,0);const Y={x0:3.75,x1:6.05,z0:-a+.05,z1:-5.35},V=(Y.x0+Y.x1)/2,$=(Y.z0+Y.z1)/2;q(i,"metal",c,V,1.2,$,Y.x1-Y.x0,2.4,Y.z1-Y.z0,{cast:!0}),i.solid(V,0,$,Y.x1-Y.x0,2.4,Y.z1-Y.z0),q(i,"joinery",u,V+.4,1.05,Y.z1+.012,.8,1.9,.03),q(i,"metal",c,V+.72,1.05,Y.z1+.03,.05,.3,.05),q(i,"metal",c,V,2.55,$,.9,.3,.7,{cast:!0});for(let L=0;L<4;L++)q(i,"metal",c,7.15,.15+L*.44,-a+.25,1.7,.03,.45),L>0&&(q(i,"joinery",l,6.8,.29+L*.44,-a+.25,.55,.24,.38,{cast:!0}),q(i,"joinery",h,7.6,.27+L*.44,-a+.25,.55,.21,.36));i.solid(7.15,0,-a+.25,1.7,1.6,.45),q(i,"joinery",l,7.9,.16,-6.1,.55,.32,.45,{cast:!0}),q(i,"joinery",h,7.8,.44,-6.05,.42,.24,.38,{cast:!0}),Dr(i,U+S/2,-a,U+S/2,O),Ir(i,U,-a,o-1,O,bn,2,1);const k={cx:4.7,cz:-2.5,w:3,d:.75};q(i,"metal",c,k.cx,.45,k.cz,k.w,.9,k.d,{cast:!0}),q(i,"joinery",u,k.cx,.075,k.cz,k.w-.1,.15,k.d-.08),i.solid(k.cx,0,k.cz,k.w,.9,k.d),ti(i,k.cx,k.cz,0,k.w,k.d);for(let L=0;L<3;L++)q(i,"trim",Ge,k.cx-1.05,.98+L*.09,k.cz,.34,.08,.26);sh(i,k.cx-.3,.9,k.cz,7);for(let L=0;L<4;L++)q(i,"joinery",l,k.cx+.6,.96+L*.11,k.cz,.42,.1,.42,{cast:L===3});q(i,"joinery",l,k.cx+1.2,.97,k.cz,.36,.14,.36,{cast:!0}),ge(i,"pack",k.cx,1.6,k.cz-k.d/2-.02,.9,.26,Math.PI);const at=o-.375;q(i,"metal",c,at,.45,-2.7,.75,.9,4.5,{cast:!0}),q(i,"joinery",u,at,.075,-2.7,.66,.15,4.4),i.solid(at,0,-2.7,.75,.9,4.5),ti(i,at,-2.7,0,.75,4.5),q(i,"joinery",u,at-.05,1.02,-4.2,.3,.2,.36,{cast:!0}),q(i,"joinery",u,at-.11,1.22,-4.2,.03,.24,.32,{cast:!0}),q(i,"metal",c,at,.94,-1,.6,.04,.8),q(i,"metal",c,o-.06,1.55,-2.7,.05,.22,.05,{cast:!0}),q(i,"joinery",u,o-.1,1.62,-2.7,.14,.14,.1,{cast:!0}),q(i,"joinery",u,o-.05,1.75,-2.7,.05,.4,.6,{cast:!0});{const L=new ht(new ke(.52,.32),Ur());L.position.set(o-.07,1.75,-2.7),L.rotation.y=-Math.PI/2,i.add(L)}q(i,"metal",c,o-.25,1.25,-2.7,.45,.03,1.1),q(i,"trim",Ge,o-.25,1.32,-2.35,.3,.1,.22,{cast:!0}),q(i,"joinery",l,o-.25,1.34,-3,.28,.14,.3,{cast:!0}),ge(i,"pay",o-.02,2.3,-4.2,.6,.2,-Math.PI/2),ge(i,"present",o-.02,2.3,-1,.75,.2,-Math.PI/2),ge(i,"drivethru",o-.02,2.58,-2.6,1.1,.26,-Math.PI/2);const it=ut.benchH;q(i,"metal",c,ut.cx,.45,ut.cz,ut.w,.9,ut.d,{cast:!0}),q(i,"joinery",u,ut.cx,.075,ut.cz,ut.w-.1,.15,ut.d-.1),i.solid(ut.cx,0,ut.cz,ut.w,.9,ut.d),ti(i,ut.cx,ut.cz,0,ut.w,ut.d);for(const[L,N]of[[0,Ge],[1,13210159],[2,5208634],[3,l]]){const W=ut.x0+.55+L*.85;for(let nt=0;nt<4;nt++)q(i,"trim",N,W,.24+nt*.13,ut.z1-.16,.4,.11,.26,{chamfer:0})}const yt=-4.9;q(i,"metal",c,yt,it+.31,ut.cz-.1,.85,.62,.62,{cast:!0}),q(i,"joinery",u,yt,it+.63,ut.cz-.1,.6,.03,.3);const Vt=q(i,"metal",c,yt,it+.16,ut.cz+.38,.6,.02,.42,{cast:!0});Vt.rotation.x=.42,q(i,"trim",Ge,yt,it+.5,ut.cz+.22,.6,.08,.02),ge(i,"toaster",yt,it+.36,ut.cz+.225,.44,.14,0),q(i,"metal",c,ut.x0-.55,.6,ut.cz,.7,1.2,.9,{cast:!0}),i.solid(ut.x0-.55,0,ut.cz,.7,1.2,.9);for(let L=0;L<3;L++)q(i,"joinery",l,ut.x0-.55,.35+L*.32,ut.cz,.62,.16,.8);ge(i,"buns",ut.x0-.55,1.32,ut.cz+.46,.5,.16,0);const Kt=-4;q(i,"metal",c,Kt,it+.1,ut.cz-.25,.7,.2,.45,{cast:!0});const J=[["ketchup",10236968],["mustard",13210159],["mayo",15261904],["bbq",8030778]];J.forEach(([L,N],W)=>{const nt=Kt-.255+W*.17;q(i,"metal",c,nt,it+.3,ut.cz-.25,.06,.22,.06,{cast:!0}),q(i,"trim",N,nt,it+.43,ut.cz-.25,.05,.05,.05,{chamfer:0}),ge(i,L,nt,it+.135,ut.cz-.02,.15,.06,0)});const F=-3.58;q(i,"joinery",u,-3.1,it+.015,ut.cz-.08,1,.05,.6);const ot=[["pickle",8030778],["onion",15261904],["lettuce",5208634],["tomato",10236968],["cheese",13210159]];ot.forEach(([L,N],W)=>{const nt=F+.1+W*.19;q(i,"metal",c,nt,it+.045,ut.cz-.08,.165,.09,.54),q(i,"trim",N,nt,it+.075,ut.cz-.08,.13,.05,.48,{chamfer:0}),ge(i,L,nt,it-.1,ut.z1+.006,.17,.075,0)});const et=-2.2;q(i,"metal",c,et,it+.38,ut.cz,.78,.76,.68,{cast:!0});for(let L=0;L<3;L++)for(const N of[1,-1])q(i,"joinery",u,et,it+.14+L*.24,ut.cz+N*.345,.64,.16,.02),q(i,"trim",13210159,et,it+.11+L*.24,ut.cz+N*.3,.56,.03,.06,{chamfer:0});ge(i,"uhc",et,it+.86,ut.cz+.01,.4,.16,0),q(i,"joinery",l,gs.x,it+.02,gs.z,.3,.04,.34,{cast:!0}),ge(i,"wrap",-1.95,it-.1,ut.z1+.006,.3,.1,0);{const L=fe.x1-fe.x0,N=fe.z1-fe.z0,W=Math.hypot(L,N),nt=Math.atan2(-N,L)+Math.PI/2,mt=(fe.x0+fe.x1)/2,Xt=(fe.z0+fe.z1)/2,ye=q(i,"metal",c,mt,.965,Xt,fe.w,.03,W,{rotY:nt,cast:!0});ye.rotation.x=-.045;for(const ve of[-1,1]){const Zt=q(i,"metal",c,mt,.995,Xt,.03,.06,W,{rotY:nt});Zt.translateX(ve*(fe.w/2-.015)),Zt.rotation.x=-.045}for(const[ve,Zt]of[[fe.x0+.1,fe.z0+.22],[fe.x1-.1,fe.z1-.25]])q(i,"metal",c,ve,.47,Zt,.05,.94,.05);for(let ve=0;ve<3;ve++){const Zt=ve/3,Oe=(ve+1)/3,ln=fe.x0+L*Zt,Os=fe.x0+L*Oe,Fs=fe.z0+N*Zt,In=fe.z0+N*Oe;i.solid((ln+Os)/2,.6,(Fs+In)/2,Math.abs(Os-ln)+fe.w,.5,Math.abs(In-Fs)+.06)}}q(i,"metal",c,ut.cx,1.28,ut.z0+.06,.05,.8,.05,{cast:!0}),q(i,"metal",c,ut.cx,1.66,ut.z0+.09,.06,.05,.1);{const L=q(i,"joinery",u,ut.cx,1.78,ut.z0+.14,.56,.36,.035,{cast:!0});L.rotation.x=-.16;const N=q(i,"joinery",u,ut.cx,1.78,ut.z0+.165,.5,.3,.008,{chamfer:0});N.rotation.x=-.16;const W=new ht(new ke(.48,.28),Ur());W.position.set(ut.cx,1.78,ut.z0+.172),W.rotation.x=-.16,i.add(W)}ge(i,"pod",ut.cx,2.05,ut.z0+.1,.6,.2,0);const pt=.6,ct=2.45,Et=3.55,wt=-2.65,Tt=-1.95;for(const[L,N]of[[-o,wt],[Tt,ct],[Et,o]]){const W=(L+N)/2,nt=N-L;q(i,"metal",c,W,.45,0,nt,.9,pt,{cast:!0}),q(i,"joinery",u,W,.075,0,nt-.1,.15,pt-.08),i.solid(W,0,0,nt,.9,pt)}ti(i,(-o+wt)/2,0,0,wt+o,pt);{const L=q(i,"metal",c,wt+.03,1.24,0,.05,Tt-wt,pt-.04,{cast:!0});L.rotation.z=.2}q(i,"metal",c,-.9,.945,0,1.6,.05,pt+.06,{cast:!0});for(const L of[-.7,.7])q(i,"metal",c,-.9+L,1.22,0,.04,.5,.04);q(i,"metal",c,-.9,1.44,0,1.56,.04,.05);for(const L of[-.4,.2]){q(i,"trim",Ge,-.9+L,1.38,0,.28,.1,.2,{cast:!0});const N=new ht(new Gt(.2,.02,.14),R_());N.position.set(-.9+L,1.325,0),i.add(N)}i.doors.push({label:"staff gate",style:"panel",pair:!1,auto:!0,startsShut:!0,face:-1,colour:l,surfaceName:"joinery",triggerR:1.2,dwell:1,leaves:[{hx:Et-.003,hz:0,y:0,baseRot:0,phiOpen:-Math.PI/2,leafRot:0,dx:-1.0939999999999996/2,dz:Rt.leafT/2,lw:Et-ct-.006,lh:1}],centre:{x:(ct+Et)/2,z:0},y0:0});const R={z:1.8,d:.8,x0:-o,x1:ct},ue=(R.x0+R.x1)/2,It=R.x1-R.x0;ux(i,ue,R.z,0,It,R.d,0,dt.benchtop,l,{handle:!1}),q(i,"trim",Ge,ue,.52,R.z+R.d/2+.03,It,.6,.02),ge(i,"barn",R.x0+1.6,.62,R.z+R.d/2+.05,1.4,.34,0);const Ft=-8;q(i,"joinery",u,Ft,1.02,R.z,.36,.2,.3,{cast:!0}),q(i,"joinery",u,Ft,1.22,R.z-.06,.32,.24,.03,{cast:!0}),q(i,"metal",c,Ft,.98,R.z+.3,.14,.16,.1),ge(i,"order",Ft,1.42,R.z+R.d/2+.01,.8,.22,0);const vt=-5.2;sh(i,vt-1.15,.94,R.z-.05,6);for(let L=0;L<3;L++)q(i,"joinery",14272934,vt+1.15+L*.13,1.01,R.z-.05+L%2*.05,.11,.15,.065,{cast:L===0,chamfer:0}),q(i,"joinery",14272934,vt+1.15+L*.13,1.095,R.z-.05+L%2*.05,.115,.022,.03,{chamfer:0});i.interact("counter_tray","take a tray for table service",vt-1.15,1.05,R.z-.05,"service",{op:"tray",when:"tray_ready",zone:{maxZ:R.z-R.d/2}},1.7),i.interact("counter_bag","bag the next takeaway",vt+1.25,1.05,R.z-.05,"service",{op:"bag",when:"bag_ready",zone:{maxZ:R.z-R.d/2}},1.7),q(i,"metal",c,vt,1.06,R.z,1.6,.04,R.d+.1);for(const L of[-.72,.72])q(i,"metal",c,vt+L,.98,R.z,.05,.16,.05);ge(i,"collect",vt,1.28,R.z+.12,.9,.24,0),q(i,"metal",c,vt,2.62,R.z+.1,.05,.36,.05),q(i,"joinery",u,vt,2.3,R.z+.1,.72,.44,.05,{cast:!0});{const L=new ht(new ke(.64,.36),Ur());L.position.set(vt,2.3,R.z+.13),i.add(L)}ge(i,"collect",vt,2.62,R.z+.135,.6,.2,0);const Jt=.2;q(i,"metal",c,Jt,1.12,R.z-.1,.72,.44,.5,{cast:!0}),q(i,"joinery",u,Jt,1.1,R.z+.16,.6,.24,.04);for(const L of[-.18,.1])q(i,"metal",c,Jt+L,.96,R.z+.12,.05,.12,.05);q(i,"joinery",l,Jt+.55,.99,R.z-.15,.28,.18,.28);const gt=1.55;q(i,"joinery",h,gt,.96,R.z,1.2,.1,.7,{cast:!0}),q(i,"metal",c,gt,1.46,R.z,1.2,.05,.7,{cast:!0});for(const L of[-1,1])q(i,"metal",c,gt+L*.575,1.21,R.z,.05,.45,.66);const A=new ht(new Gt(1.1,.42,.62),pu("glass",13623528));A.position.set(gt,1.215,R.z),i.add(A),q(i,"joinery",l,gt,1.19,R.z,1.06,.02,.56);for(const[L,N,W]of[[-.35,-.12,Ge],[0,.1,13210159],[.33,-.08,l]])q(i,"trim",W,gt+L,1.06+.035,R.z+N,.16,.07,.16,{chamfer:0}),q(i,"trim",W,gt+L*.7,1.23,R.z-N,.14,.06,.14,{chamfer:0});ge(i,"mccafe",Jt+1.15,.62,R.z+R.d/2+.05,.9,.26,0),q(i,"trim",Ge,-3.6,2.44,R.z-.55,5.8,.58,.06,{cast:!0}),ge(i,"barn",-5.6,2.44,R.z-.51,1.6,.4,0),ge(i,"order",-1.8,2.44,R.z-.51,1.5,.36,0);const M={x:o-.35,z0:.9,z1:2.5},H=(M.z0+M.z1)/2;q(i,"metal",c,M.x,.45,H,.7,.9,M.z1-M.z0,{cast:!0}),i.solid(M.x,0,H,.7,.9,M.z1-M.z0),ti(i,M.x,H,0,.7,M.z1-M.z0),q(i,"metal",c,M.x+.1,1.24,H-.25,.3,.68,.86,{cast:!0}),q(i,"joinery",u,M.x-.075,1.34,H-.25,.02,.4,.74);for(let L=0;L<3;L++){const N=H-.51+L*.26;q(i,"trim",[10236968,8030778,13210159][L],M.x-.085,1.34,N,.01,.3,.19,{chamfer:0}),q(i,"metal",c,M.x-.1,1.02,N,.05,.14,.05,{cast:!0}),q(i,"metal",c,M.x-.15,1.11,N,.1,.03,.03)}q(i,"metal",c,M.x-.11,.925,H-.25,.24,.02,.8),q(i,"joinery",u,M.x-.11,.935,H-.25,.18,.01,.74);for(const[L,N]of[[H+.42,6],[H+.6,5]])for(let W=0;W<N;W++)q(i,"joinery",13620957,M.x,.95+W*.055,L,.115,.055,.115,{cast:W===N-1,chamfer:0});ge(i,"drinks",o-.02,1.85,H,.9,.26,-Math.PI/2),Ox(i,o-.42,3.3,-Math.PI/2);const Z=-9.55;for(const L of[4.3,5.45]){q(i,"metal",c,Z,.05,L,.44,.1,.38),q(i,"trim",Ge,Z,.62,L,.38,1.04,.3,{cast:!0}),q(i,"metal",c,Z,1.16,L,.42,.05,.34);const N=q(i,"joinery",u,Z+.13,1.42,L,.035,.56,.44,{cast:!0});N.rotation.z=.26;const W=new ht(new Gt(.02,.48,.37),Ur());W.position.set(Z+.165,1.42,L),W.rotation.z=.26,i.add(W),q(i,"metal",c,Z+.1,1.08,L+.22,.11,.13,.09),i.solid(Z,0,L,.44,1.7,.42),ti(i,Z,L,0,.48,.44)}ge(i,"order",-o+.02,1.62,4.88,.6,.2,Math.PI/2);const Q=a-.03-.03,bt=[{x:-6.9,z:3.8},{x:-4.3,z:3.8},{x:-6.9,z:5.55},{x:-4.3,z:5.55},{x:2.9,z:3.8},{x:5.7,z:3.8},{x:8.3,z:3.8}];bt.forEach((L,N)=>{const W=N+1;fu(i,L.x,L.z,0,.8,.8),Qa(i,L.x-.72,L.z,0,Math.PI/2),Qa(i,L.x+.72,L.z,0,-Math.PI/2),q(i,"metal",c,L.x,.86,L.z,.035,.24,.035),ih(i,L.x+.22,L.z+.16,.74),f(`table_${W}`,L.x,L.z,null,null,{noClamp:!0}),f(`seat_${W}`,L.x+.72,L.z,null,null,{noClamp:!0}),i.interact(`table_serve_${W}`,"set the tray down",L.x,.85,L.z,"service",{op:"deliver",table:W,when:"carrying_for"},1.7)});const st=Q,ft=st-1.7,qt=2.6,rt=9.4,St=2,Ut=(rt-qt)/St;for(let L=0;L<St;L++){const N=qt+(L+.5)*Ut;for(const[W,nt,mt]of[[ft+.265,ft+.06,.95],[st-.265,st-.06,.55]])q(i,"joinery",l,N,.23,W,Ut-.1,.46,.53,{cast:!0}),q(i,"joinery",u,N,.075,W,Ut-.2,.15,.43),q(i,"joinery",l,N,mt/2,nt,Ut-.1,mt,.12,{cast:!0});q(i,"joinery",l,N,.725,(ft+st)/2,Ut-.2,.03,.7,{cast:!0}),q(i,"joinery",h,N,.36,(ft+st)/2,.09,.71,.09),ih(i,N+.28,(ft+st)/2,.74),i.solid(N,0,(ft+st)/2,Ut,.95,st-ft)}for(const L of[0,Ut,Ut*St]){const N=qt+L;q(i,"joinery",l,N,.675,(ft+st)/2,.07,1.35,st-ft-.06,{cast:!0}),q(i,"trim",Ge,N,1.32,(ft+st)/2,.086,.06,st-ft-.06)}ti(i,(qt+rt)/2,(ft+st)/2,0,rt-qt,st-ft,{margin:.028});const Nt=Q-.35;q(i,"joinery",l,-6.3,1.03,Nt,6.2,.05,.64,{cast:!0});for(const L of[-2.6,0,2.6])q(i,"metal",c,-6.3+L,.5,Nt+.2,.06,1,.06);i.solid(-6.3,0,Nt,6.2,1.05,.64);for(const L of[-8.5,-7.2,-5.9,-4.6])q(i,"joinery",l,L,.72,Nt-.75,.36,.04,.36,{cast:!0}),q(i,"metal",c,L,.36,Nt-.75,.07,.68,.07),q(i,"metal",c,L,.02,Nt-.75,.34,.04,.34),i.solid(L,0,Nt-.75,.4,.75,.4);const _t=16772056;i.light(-6.5,qs-.15,4.2,_t,10,13),i.light(-2,qs-.15,4.6,_t,10,13),i.light(2.5,qs-.15,4.2,_t,10,13),i.light(7,qs-.15,4.4,_t,10,13),i.light(-3.7,bn-.15,1,_t,10,12),i.light(-7.5,bn-.15,-4.8,_t,10,12),i.light(-.5,bn-.15,-5,_t,10,12),i.light(-3.6,bn-.15,-2.6,_t,12,12),i.light(6.8,bn-.3,-5.5,_t,8,9),i.light(8.8,bn-.15,-2.6,_t,9,10),i.light(5,bn-.15,-1.6,_t,8,10);for(const[L,N,W,nt,mt]of[[-1.5,1.9,-3.2,2.4,15],[-3,2.1,4.2,3.4,16],[5.5,2.1,4,2.8,13],[-7.6,2,4.9,2.2,11],[-4,1.9,1,1.6,12]]){const Xt=i.light(L,N,W,15260876,nt,mt);Xt.decay=1}Ir(i,-9.4,-6.6,3.1,.2,bn,4,3),Ir(i,3.6,-4.3,9.6,-.2,bn,2,2),Ir(i,-9,2.4,9.4,6.4,qs,4,2),f("spawn",-1,12.6,null,null,{noClamp:!0}),f("station_pod",ut.cx,ut.z1+Ze,Math.PI,Ze),f("station_fries",v,p+Ze,Math.PI,Ze),f("station_grill",I,p+Ze,Math.PI,Ze),f("station_counter",Ft,R.z-R.d/2-Ze,0,Ze),f("station_runner",vt,R.z-R.d/2-Ze,0,Ze),f("station_drivethru",at-.375-Ze,-2.7,Math.PI/2,Ze),f("restock",7,-5.7,Math.PI,Ze),f("gate",(ct+Et)/2,0,null,null,{noClamp:!0}),f("entry_out",-1,8.3,null,null,{noClamp:!0}),f("entry",-1,6),f("aisle",-2,2.9),f("queue_1",-8,2.8),f("queue_2",-7.25,2.95),f("queue_3",-6.5,3),f("queue_4",-5.9,3.15),f("collect_wait",-5.2,3.1),f("collect_pickup",-5.2,2.65),f("kiosk_gate",-8.9,2.9),f("kiosk_1",-8.78,4.3),f("kiosk_2",-8.85,5.15),i.interact("station_pod","work the pod",ut.cx,.95,ut.z1,"station",{station:"pod",zone:{minZ:ut.z1}},2),i.interact("pod_toaster","toast a bun",yt,1.25,ut.cz+.21,"pod",{op:"token",token:"bun",podOnly:!0},1.8),J.forEach(([L],N)=>{const W=Kt-.255+N*.17;i.interact("pod_gun_"+L,L==="bbq"?"dose BBQ":"dose "+L,W,1.25,ut.cz-.25,"pod",{op:"token",token:L,podOnly:!0},1.7)}),ot.forEach(([L],N)=>{const W=F+.1+N*.19;i.interact("pod_bin_"+L,"add "+L,W,.98,ut.cz-.08,"pod",{op:"token",token:L,podOnly:!0},1.7)}),i.interact("pod_uhc","pull from the cabinet",et,1.28,ut.cz+.345,"pod",{op:"uhc",podOnly:!0},1.6),i.interact("pod_wrap","wrap the order",gs.x,.95,gs.z,"pod",{op:"wrap",podOnly:!0},1.4),i.interact("pod_chute","send it down",fe.x0+.05,1.05,fe.z0,"pod",{op:"send",podOnly:!0},1.4),i.interact("landing_handover","hand out the drive-thru order",-.9,1,0,"landing",{when:"landing_ready"},1.25),i.interact("station_counter","work the counter",Ft,.95,R.z-R.d/2,"station",{station:"counter",zone:{maxZ:R.z-R.d/2}},1.8),i.interact("till_order","take their order",Ft,1.3,R.z+.95,"counter",{op:"take_order",when:"queue_head"},2.4),i.interact("till_payment","take payment",Ft,1,R.z+.3,"counter",{op:"take_payment",when:"payment_due"},1.6);const $t=[];for(const L of d){const N=L.noClamp?{x:L.x,z:L.z,moved:0}:Fx(i.colliders,L.x,L.z);i.spot(L.name,N.x,0,N.z),N.moved>.005&&$t.push({name:L.name,from:[L.x,L.z],to:[+N.x.toFixed(3),+N.z.toFixed(3)],moved:+N.moved.toFixed(3)})}const Bt=kx(i.colliders,d.filter(L=>!L.noClamp).map(L=>({id:L.name,x:L.x,z:L.z,facing:L.facing,standoff:L.standoff}))),ne={rule:`spot = fixture face + normal * standoff; clear floor ${tc} x ${ec}; hard floor ${ri}`,checked:d.length,failures:Bt.failures,clamped:$t,tightest:Bt.tightest,ok:Bt.failures.length===0&&$t.length===0};ne.ok||console.error("Fitout: CLEARANCE FAILURES — a published point is unreachable",ne.failures,$t);const z=[{where:"pod face to the pass",m:+(-pt/2-ut.z1).toFixed(2)},{where:"pod back to the grill front",m:+(ut.z0-p).toFixed(2)},{where:"pod east end to the pack-out",m:+(k.cx-k.w/2-ut.x1).toFixed(2)},{where:"crew aisle, pass to counter",m:+(R.z-R.d/2-pt/2).toFixed(2)},{where:"staff gate",m:+(Et-ct).toFixed(2)},{where:"pass flap by the landing",m:+(Tt-wt).toFixed(2)},{where:"counter face to dining tables",m:+(bt[0].z-.4-(R.z+R.d/2)).toFixed(2)},{where:"restock straight line, pod spot to dry store door",m:+Math.hypot(4.15-ut.cx,-4.55-(ut.z1+Ze)).toFixed(2)},{where:"front door opening",m:1.8}];return{workplace:"burger_barn",clearance:ne,walkways:z,spots:i.spots,materials:Ux.map(L=>typeof L[1]=="number"?`${L[0]}@${L[1].toString(16)}`:`${L[0]}:${L[1]}`),labels:_u()!==null}}const mn={width:20,depth:14,height:4.2},Wt=mn.width/2,zt=mn.depth/2,Un=mn.height,uo=Rt.wallThick,_i=Wt-uo/2,hs=zt-uo/2,dn=2,Zo=4.9,Nr=.15,rh=6.4,Jo=3.2,Or=2.8,Hx=.45,Gx=2.7,Se=-1,Fi=1.8,oh=2.6,ah=.9,ch=.85,lh=2.05,hh=-4.2,uh=-1,Qo=-5.4,Vx=1.8,zn=11026479,_s=13224902,dh=new Set;function xu(i,t,e={}){if(e.material)return e.material;try{return Pc(i,t,null,e.recipe||{})}catch(n){return dh.has(i)||(dh.add(i),console.error(`Shell: surface '${i}' unavailable, flat colour instead`,n)),vn(t,e)}}function Dt(i,t,e,n,s,r,o,a,c,l={}){var d;const h=xu(t,e,l),u=new ht(new Gt(Math.max(o,.001),Math.max(a,.001),Math.max(c,.001)),h);return u.castShadow=l.cast??((d=h.userData)==null?void 0:d.cast)??!1,u.receiveShadow=!0,u.position.set(n,s,r),l.rotY&&(u.rotation.y=l.rotY),i.add(u),u}const ni=()=>vn(ce.concrete);function on(i,t,e,n,s,r=0){const o=(t+n)/2,a=(e+s)/2,c=Math.abs(n-t),l=Math.abs(s-e);Dt(i,"(concrete)",0,o,r-.06,a,c,.12,l,{material:ni(),cast:!1}),i.solid(o,r-1.2,a,c,1.2,l,!0)}function fh(i,t,e,n,s,r,o){const a=new Ec(n,s,28,2,r,Math.PI/2);a.rotateX(-Math.PI/2);const c=new ht(a,ni());return c.receiveShadow=!0,c.position.set(t,o,e),i.add(c),c}function fn(i,t,e,n,s,r=0,o=.15){const a=(t+n)/2,c=(e+s)/2;Dt(i,"(concrete)",0,a,r+o/2,c,Math.max(Math.abs(n-t),.15),o,Math.max(Math.abs(s-e),.15),{material:ni()})}function Fr(i,t,e,n,s,r,o=0,a=.15){for(let l=0;l<8;l++){const h=s+(r-s)*(l/8),u=s+(r-s)*((l+1)/8),d=t+Math.cos(h)*n,f=e+Math.sin(h)*n,g=t+Math.cos(u)*n,_=e+Math.sin(u)*n,p=Math.hypot(g-d,_-f)+.04;Dt(i,"(concrete)",0,(d+g)/2,o+a/2,(f+_)/2,p,a,.16,{material:ni(),rotY:Math.atan2(-(_-f),g-d)})}}function Ue(i,t,e,n,s,r=0){const o=(t+n)/2,a=(e+s)/2;Dt(i,"trim",dt.trim,o,r+.008,a,Math.max(Math.abs(n-t),.1),.012,Math.max(Math.abs(s-e),.1))}function jr(i,t,e,n=0,s=1){const r=new ht(new Ne(.07,.07,s,8),xu("metal",dt.metalDull));r.castShadow=!0,r.position.set(t,n+s/2,e),i.add(r)}function zr(i,t,e,n,s,r,o=0){const a=n-t,c=s-e,l=Math.hypot(a,c);if(l<.5)return;const h=a/l,u=c/l,d=-u,f=h,g=Math.atan2(-u,h),_=uo/2+.006;for(let p=1.2;p<r-.2;p+=1.2)Dt(i,"joinery",dt.shadowDark,t+h*(l/2)+d*_,o+p,e+u*(l/2)+f*_,l,.02,.012,{rotY:g});for(let p=1.2;p<l-.3;p+=1.2)Dt(i,"joinery",dt.shadowDark,t+h*p+d*_,o+r/2,e+u*p+f*_,.02,r,.012,{rotY:g})}const vu={lane:{width:3.5,surface:0}},de=vu.lane.surface,us=vu.lane.width/2;function Wx(i,t){on(i,-Wt,zt,Wt,10.5),on(i,-11,10.5,10.4,27.5),on(i,-17.75,15.9,-11,29.5),on(i,9.65,27.5,14.65,29.5),on(i,-13.25,-6.5,-10,zt),on(i,-12.9,-zt,-10,-6.5),on(i,-7,-10.75,1.5,-8.6),on(i,-6.9,-10,-3.9,-zt),on(i,2,-10.2,5,-8.2),on(i,-15-us,-6.5,-15+us,15.9,de),on(i,-9,-12.5-us,6.15,-12.5+us,de),on(i,12.15-us,-6.5,12.15+us,29.5,de),fh(i,-9,-6.5,4.25,7.75,Math.PI/2,de),fh(i,6.15,-6.5,4.25,7.75,0,de),fn(i,-16.75,-6.5,-16.75,15.9,de),fn(i,-13.25,-6.5,-13.25,15.9,de),fn(i,-9,-14.25,6.15,-14.25,de),fn(i,-9,-10.75,.5,-10.75,de),fn(i,13.9,-6.5,13.9,29.5,de),fn(i,10.4,-6.5,10.4,-5.6,de),fn(i,10.4,.6,10.4,29.5,de),fn(i,10.4,-5.2,10.4,.2,de,.1),Fr(i,-9,-6.5,4.25,Math.PI,Math.PI*1.5,de),Fr(i,-9,-6.5,7.75,Math.PI,Math.PI*1.5,de),Fr(i,6.15,-6.5,4.25,Math.PI*1.5,Math.PI*2,de),Fr(i,6.15,-6.5,7.75,Math.PI*1.5,Math.PI*2,de);for(const r of[-16.6,-13.4])Ue(i,r,-6.5,r,15,de);for(const r of[-14.1,-10.9])Ue(i,-9,r,.4,r,de);Ue(i,13.75,-6.5,13.75,27.5,de),Ue(i,.5,-14.25,.5,-10.75,de);for(let r=1;r<6.4;r+=.8)Ue(i,r,-14.25,r+.4,-14.25,de);for(const[r,o]of[[-11.2,-8.6],[-10.2,-9.4],[8.6,-8.8],[9.4,-7.8]])jr(i,r,o);for(let r=0;r<=2;r++)Ue(i,-11+r*2.6,10.5,-11+r*2.6,15.9);for(let r=0;r<=3;r++)Ue(i,1.4+r*2.6,10.5,1.4+r*2.6,15.9);for(let r=0;r<=8;r++)Ue(i,-11+r*2.6,22.1,-11+r*2.6,27.5);for(let r=0;r<2;r++)Dt(i,"(concrete)",0,-11+(r+.5)*2.6,.06,11.4,1.65,.12,.18,{material:ni()});for(let r=0;r<3;r++)Dt(i,"(concrete)",0,1.4+(r+.5)*2.6,.06,11.4,1.65,.12,.18,{material:ni()});for(let r=0;r<8;r++)Dt(i,"(concrete)",0,-11+(r+.5)*2.6,.06,26.6,1.65,.12,.18,{material:ni()});for(const r of[Se-2.4,Se,Se+2.4])Ue(i,r,10.5,r,15.9);for(let r=11;r<15.9;r+=.7)Ue(i,Se-2.4,r,Se,r+.24);jr(i,Se-1.2,13.2,0,1.3),Ue(i,Se,13.2,Se+2.4,13.44);for(let r=11;r<15.6;r+=.8)Ue(i,-5.6,r,-3.6,r+.3);fn(i,-Wt,10.5,Wt,10.5),fn(i,-11,10.5,-11,27.5),fn(i,-11,27.5,9.8,27.5);for(let r=16.1;r<22.1;r+=.8)Ue(i,-5.2,r,-3.2,r+.3);Ue(i,-11.25,15.9,-11.25,22.1);for(let r=10.6;r<13.9;r+=.8)Ue(i,r,18,r+.3,20,de);for(let r=-9.2;r<=9.2;r+=1.5)r>Se-1.7&&r<Se+1.7||jr(i,r,zt+.6);Dt(i,"metal",dt.metalDull,Se,3.07,zt+1.5,6,.14,3,{cast:!0});for(const r of[-2.7,2.7])Dt(i,"metal",dt.metalDull,Se+r,1.5,zt+2.8,.12,3,.12,{cast:!0});for(const r of[3.4,6.6]){fu(i,r,9.3,0,.9,.9);for(const[o,a,c]of[[-.78,0,Math.PI/2],[.78,0,-Math.PI/2],[0,-.78,0],[0,.78,Math.PI]])Qa(i,r+o,9.3+a,0,c)}Ue(i,-9.8,8.2,-9.8,10.4),Ue(i,-8.6,8.2,-8.6,10.4),Ue(i,-7.4,8.2,-7.4,10.4);for(const r of[-9.2,-8])Dt(i,"metal",dt.metalDull,r-.35,.38,10.1,.06,.76,.06,{cast:!0}),Dt(i,"metal",dt.metalDull,r+.35,.38,10.1,.06,.76,.06,{cast:!0}),Dt(i,"metal",dt.metalDull,r,.74,10.1,.76,.06,.06,{cast:!0});Dt(i,"metal",dt.metalDull,-6,.55,-10.1,.1,1.1,.1,{cast:!0}),Dt(i,"trim",zn,-6,1.6,-10.1,.9,1.4,.1,{cast:!0,rotY:-.6});const e=.209;Dt(i,"(concrete)",0,-1.5,.12,-10.15,2.1,.25,.6,{material:ni(),rotY:e}),Dt(i,"trim",zn,-1.5,1.7,-10.15,1.96,1.66,.16,{cast:!0,rotY:e}),Dt(i,"trim",dt.trim,-1.5,1.7,-10.22,1.8,1.5,.06,{rotY:e});const n=(r,o,a,c,l,h,u=0)=>{Dt(i,r,o,-1.5+a*Math.cos(e),c,-10.26-u-a*Math.sin(e),l,h,.02,{rotY:e})};n("trim",zn,0,2.28,1.64,.22);for(let r=0;r<5;r++)for(const o of[-.42,.44])n("joinery",dt.shadowDark,o,2.02-r*.14,.68,.035);for(const r of[-.55,0,.55])n("trim",zn,r,1.18,.4,.3),n("joinery",dt.joineryLight,r,1.12,.28,.12,.01);Dt(i,"metal",dt.metalDull,.5,.9,-10.4,.25,1.8,.25,{cast:!0}),Dt(i,"joinery",dt.shadowDark,.5,1.35,-10.54,.2,.2,.04),Dt(i,"joinery",dt.shadowDark,.5,1.62,-10.54,.55,.35,.04),Dt(i,"metal",dt.metalDull,-1,2.92,-12,3,.14,3.2,{cast:!0});for(const r of[-2.3,.3])Dt(i,"metal",dt.metalDull,r,1.4,-10.45,.12,2.8,.12,{cast:!0});for(const r of[-17.05,-12.95])Dt(i,"metal",dt.metalDull,r,de+1.3,14,.09,2.6,.09,{cast:!0});Dt(i,"trim",zn,-15,de+2.5,14,4.3,.2,.12,{cast:!0}),Dt(i,"wall",_s,1.7,1,-9.2,.14,2,2,{cast:!0}),i.solid(1.7,0,-9.2,.14,2,2);for(const r of[-9.6,-8.7])Dt(i,"metal",dt.metalDull,3.5,.45,r,1.2,.9,.7,{cast:!0}),i.solid(3.5,0,r,1.2,.9,.7);const s={x0:-12.8,x1:-10.2,z0:-zt,z1:-5};for(const[r,o,a,c]of[[s.x0,s.z0,s.x1,s.z0+.2],[s.x0,s.z0,s.x0+.2,s.z1],[s.x1-.2,s.z0,s.x1,s.z1]]){const l=(r+a)/2,h=(o+c)/2;Dt(i,"wall",_s,l,.9,h,a-r,1.8,c-o,{cast:!0}),i.solid(l,0,h,a-r,1.8,c-o)}Dt(i,"metal",dt.metalDull,(s.x0+s.x1)/2,1.2,s.z1,2.4,2.4,.08,{cast:!0}),Dt(i,"metal",dt.metalDull,(s.x0+s.x1)/2,1.94,(s.z0+s.z1)/2,s.x1-s.x0+.2,.1,s.z1-s.z0+.1,{cast:!0});for(const[r,o,a]of[[-12.1,-6.2,1.2],[-10.85,-6.2,1.2],[-12.1,-5.55,1.2],[-10.9,-5.55,.6]])Dt(i,"joinery",dt.joineryDark,r,.55,o,a,1.1,.55,{cast:!0}),Dt(i,"joinery",dt.shadowDark,r,1.13,o,a+.04,.06,.59),i.solid(r,0,o,a,1.16,.55);on(i,-13,-4.8,-11.5,-3.3);for(const[r,o,a,c]of[[-13,-4.8,-11.5,-4.68],[-13,-3.42,-11.5,-3.3],[-13,-4.8,-12.88,-3.3],[-11.62,-4.8,-11.5,-3.3]])fn(i,r,o,a,c,0,.2);for(const[r,o]of[[-12.55,-4.1],[-11.95,-4.1]])Dt(i,"metal",dt.metalDull,r,.42,o,.5,.84,.5,{cast:!0});if(Dt(i,"(concrete)",0,-10.6,.1,28.3,1.1,.2,1.1,{material:ni()}),Dt(i,"trim",zn,-10.6,3,28.3,.55,6,.55,{cast:!0}),i.solid(-10.6,0,28.3,.7,6,.7),t){const r=t.clone();r.scale.set(.62,1.9,1),r.position.set(-10.6,4.3,28.62),i.add(r);const o=t.clone();o.scale.set(.62,1.9,1),o.position.set(-10.6,4.3,27.98),o.rotation.y=Math.PI,i.add(o)}}function qx(i,t={}){const e=new sx;rx(e,0,0,mn.width,mn.depth,0,dt.tileFloor,{surface:"vinyl"});const n={height:Un,colour:_s,surface:"wall",skirting:!1,cornice:!1,autoServices:!1,inner:-1},s=[],r=(_,p)=>{const m=p-_,y=Math.max(1,Math.round(m/1.565)),v=m/y;for(let E=0;E<y;E++)s.push({at:_+(E+.5)*v+Wt,width:Math.min(1.375,v-.19),kind:"window",sill:Hx,head:Gx})};r(-_i,Se-Fi/2-.15),r(Se+Fi/2+.15,9.6),s.push({at:Se+Wt,width:Fi,kind:"door",head:oh,door:{pair:!0,style:"glazed",auto:!0,startsShut:!0,swing:1,label:"entrance"}}),Vi(e,-Wt,zt,Wt,zt,{...n,openings:s,name:"front"}),Vi(e,Wt,zt,Wt,-zt+dn,{...n,openings:[{at:zt-4,width:1.2,kind:"window",sill:1.8,head:2.7},{at:zt-uh,width:ah,kind:"window",sill:ch,head:lh},{at:zt-hh,width:ah,kind:"window",sill:ch,head:lh}],name:"east"}),Vi(e,Wt,-zt+dn,Wt-dn,-zt,{...n,name:"splay"}),Vi(e,Wt-dn,-zt,-Wt,-zt,{...n,openings:[{at:zt-Qo,width:Vx,kind:"door",head:oh,door:{style:"panel",pair:!1,startsShut:!1,swing:1,colour:dt.metalDull,label:"goods door"}}],name:"rear"}),Vi(e,-Wt,-zt,-Wt,zt,{...n,name:"west"});const o=1.4;dx(e,0,(o+hs)/2,_i*2,hs-o,Jo),Jl(e,0,(o-5)/2,_i*2,o+5,Or),Jl(e,(-_i+7.9)/2,(-hs-5)/2,_i+7.9,hs-5,Or),Dt(e,"wall",_s,0,(Or+Jo+.12)/2,o,_i*2,Jo-Or+.16,.12,{cast:!0}),Dt(e,"wall",_s,0,Un+.1,0,mn.width,.2,mn.depth,{cast:!0});const a=[[-Wt,zt,Wt,zt],[Wt,zt,Wt,-zt+dn],[Wt,-zt+dn,Wt-dn,-zt],[Wt-dn,-zt,-Wt,-zt],[-Wt,-zt,-Wt,zt]];for(const[_,p,m,y]of a){const v=Math.hypot(m-_,y-p)+.36,E=Math.atan2(-(y-p),m-_),C=(_+m)/2,b=(p+y)/2;Dt(e,"wall",_s,C,(Un+Zo-Nr)/2,b,v,Zo-Nr-Un,.35,{rotY:E,cast:!0}),Dt(e,"trim",dt.trim,C,Zo-Nr/2,b,v+.06,Nr,.47,{rotY:E,cast:!0})}const c=zt+uo/2;Dt(e,"trim",zn,0,3.475,c+.05,mn.width,.85,.1,{cast:!0});const l=3.2,h=Se-1.2,u=h+l;for(const[_,p]of[[(-Wt+h)/2,h+Wt],[(u+Wt)/2,Wt-u]])Dt(e,"metal",dt.metalDull,_,2.93,c+.6,p,.16,1.2,{cast:!0}),Dt(e,"trim",zn,_,2.79,c+1.18,p,.14,.06);const d=(h+u)/2;Dt(e,"trim",zn,d,(2.4+rh)/2,c+.2,l,rh-2.4,.4,{cast:!0});for(const[_,p]of[[(h+Se-Fi/2)/2,Se-Fi/2-h],[(Se+Fi/2+u)/2,u-Se-Fi/2]])Dt(e,"trim",zn,_,1.2,c+.2,p,2.4,.4,{cast:!0});Dt(e,"joinery",dt.shadowDark,d,4.3,c+.41,l,3.4,.02);for(let _=0;_<18;_++)Dt(e,"joinery",dt.joineryLight,h+.0875+_*.175,4.3,c+.44,.15,3.4,.04,{cast:!0});let f=null;typeof document<"u"&&document.createElement&&(f=wx(t.name||"BURGER BARN",{width:7.2,height:.62,bg:"rgba(0,0,0,0)",fg:t.signFg??"#f6efe0",font:"bold 84px Georgia, serif"}),f.position.set(4.9,3.46,c+.12),e.add(f));for(const _ of[hh,uh]){Dt(e,"metal",dt.metalDull,Wt+.53,de+2.66,_,.9,.12,1.6,{cast:!0});for(const p of[-.75,.75])jr(e,Wt+.6,_+p,de)}Dt(e,"metal",dt.metalDull,6.2,2.3,-zt-.4,.8,4.2,.6,{cast:!0}),Dt(e,"metal",dt.metalDull,6.2,4.55,-zt-.4,1,.35,.8,{cast:!0});for(const _ of[-1,.5]){Dt(e,"metal",dt.metalDull,_,2.6,-zt-.06,.6,.6,.06);for(let p=0;p<5;p++)Dt(e,"joinery",dt.shadowDark,_,2.36+p*.12,-zt-.1,.54,.05,.04)}Dt(e,"metal",dt.metalDull,Qo,2.86,-zt-1,3,.14,2,{cast:!0});for(const _ of[-1.3,1.3])Dt(e,"metal",dt.metalDull,Qo+_,1.43,-zt-1.85,.12,2.86,.12,{cast:!0});zr(e,Wt,zt,Wt,-zt+dn,Un),zr(e,Wt,-zt+dn,Wt-dn,-zt,Un),zr(e,Wt-dn,-zt,-Wt,-zt,Un),zr(e,-Wt,-zt,-Wt,zt,Un),Wx(e,f);const g=Bx(e,{width:mn.width,depth:mn.depth});return{group:nu(e.group),colliders:e.colliders,doorSpecs:e.doors,interactables:e.interactables,spots:e.spots,lights:e.lights,report:g,width:mn.width,depth:mn.depth,height:Un,door:{x:Se,z:zt+1.6},doors:[{x:Se,z:zt+1.6}],interiorBounds:{minX:-_i,maxX:_i,minZ:-hs,maxZ:hs,maxY:Un}}}class Xx{constructor(t){this.game=t,this.rng=t.rng.child("world"),this.scene=t.renderer.scene,this.root=new Qt,this.scene.add(this.root),this.colliders=[],this.interactables=[],this.buildings=[],this.enterable=[],this.currentBuilding=null,this.spots={},this.doors=new Ex(t),this._grid=new Map,this.cellSize=5,this.weather={condition:"clear",wetness:0,temp:24,wind:.3},this._nightState=!1}generate(){this._ground(),this._shop(),this._dressing(),this._rebuildSpatialHash(),this.game.bus.emit("world:generated",{world:this})}_ground(){const t=new ht(new ke(400,400,1,1),vn(ce.grass));t.rotation.x=-Math.PI/2,t.position.y=-.06,t.receiveShadow=!0,this.root.add(t)}_shop(){var n;const t=qx(this.rng.child("shop"));this.report=t.report,t.group.position.set(0,0,0),this.root.add(t.group);for(const s of t.interactables||[])this.interactables.push(s);this.spots=t.spots||{};for(const s of t.colliders)this.colliders.push(s);(n=t.doorSpecs)!=null&&n.length&&(t.group.updateMatrixWorld(!0),this.doors.install(t.doorSpecs,t.group));const e={x:0,z:0,rotY:0,padY:0,shopId:"fastfood",built:t,lights:t.lights,interiorBounds:t.interiorBounds};this.buildings.push(e),this.enterable.push(e)}_dressing(){const t=this.rng.child("dressing"),e=[[-16.5,25],[-16.8,8],[-16.2,-2],[16.5,12],[16.8,-4],[15.8,24],[-6,32.5],[4,32.8],[12,32]];for(const[s,r]of e){const o=bx(t,t.range(.9,1.3));o.position.set(s,0,r),this.root.add(o)}const n=[{x:-9.7,z:24.8,rotY:0},{x:-2,z:24.8,rotY:0},{x:5.8,z:24.8,rotY:0},{x:5.3,z:13.2,rotY:Math.PI}];for(const s of n){const r=Tx(t);r.position.set(s.x,0,s.z),r.rotation.y=s.rotY,this.root.add(r),this.colliders.push({min:new D(s.x-1,0,s.z-2.2),max:new D(s.x+1,1.5,s.z+2.2),walkable:!1})}}_rebuildSpatialHash(){this._grid.clear(),this.colliders.forEach((t,e)=>{const n=Math.floor(t.min.x/this.cellSize),s=Math.floor(t.max.x/this.cellSize),r=Math.floor(t.min.z/this.cellSize),o=Math.floor(t.max.z/this.cellSize);for(let a=n;a<=s;a++)for(let c=r;c<=o;c++){const l=a+","+c;this._grid.has(l)||this._grid.set(l,[]),this._grid.get(l).push(e)}})}query(t,e){const n=[],s=Math.floor((t.x-e)/this.cellSize),r=Math.floor((t.x+e)/this.cellSize),o=Math.floor((t.z-e)/this.cellSize),a=Math.floor((t.z+e)/this.cellSize),c=new Set;for(let l=s;l<=r;l++)for(let h=o;h<=a;h++){const u=this._grid.get(l+","+h);if(u)for(const d of u)c.has(d)||(c.add(d),n.push(this.colliders[d]))}return this.doors.collect(t,e,n),n}sightBlocked(t,e,{eye:n=1.15,backOff:s=.45}={}){const r=t.x,o=t.z,a=(t.y??0)+n;let c=e.x-r,l=e.z-o;const h=Math.hypot(c,l);if(h<.05)return!1;const u=Math.max(0,h-s);if(u<.05)return!1;c/=h,l/=h;const d=r+c*u/2,f=o+l*u/2;for(const g of this.query({x:d,z:f},u/2+1)){if(g.walkable||a<g.min.y||a>g.max.y||r>=g.min.x&&r<=g.max.x&&o>=g.min.z&&o<=g.max.z)continue;let _=0,p=u,m=!0;for(const[y,v,E,C]of[[r,c,g.min.x,g.max.x],[o,l,g.min.z,g.max.z]]){if(Math.abs(v)<1e-9){if(y<E||y>C){m=!1;break}continue}let b=(E-y)/v,T=(C-y)/v;if(b>T){const P=b;b=T,T=P}if(b>_&&(_=b),T<p&&(p=T),_>p){m=!1;break}}if(m)return!0}return!1}groundHeight(){return 0}addInteractable(t){return this.interactables.push(t),t}activeInteractables(){return this.interactables}get isIndoors(){return this.currentBuilding!==null}_updateOccupancy(){var n;const t=(n=this.game.player)==null?void 0:n.position;if(!t)return;let e=null;for(const s of this.enterable){const r=s.interiorBounds;if(r&&t.x>r.minX&&t.x<r.maxX&&t.z>r.minZ&&t.z<r.maxZ&&t.y>s.padY-1.5&&t.y<s.padY+r.maxY){e=s;break}}e!==this.currentBuilding&&(this.currentBuilding=e,this.game.bus.emit("world:occupancy",{building:e}))}update(t){var s;this._updateOccupancy(),this.doors.update(t);const e=this.game.clock;this.game.renderer.updateSky(e.dayFraction,(s=this.game.player)==null?void 0:s.position,e.dayOfYear,t);const n=this.game.renderer.nightFactor>.25;n!==this._nightState&&(this._nightState=n,Tc().emissiveIntensity=n?.45:0,this.game.bus.emit("world:daynight",{night:n}))}}const Yx=.72;class jx{constructor(t){this.game=t,this.target=null,this._label=null,this._fwd=new D(0,0,-1)}update(){var h,u,d,f,g,_;const t=this.game;if(t.mode!==qe.PLAY){this._setTarget(null);return}const e=t.player.position,n=t.camera.active,s=n.position;n.getWorldDirection(this._fwd);const r=((h=t.shift)==null?void 0:h.station)||null;let o=null,a=1/0;const c=(p,m)=>{var U,O;const y=p.pos.x-e.x,v=p.pos.z-e.z,E=Math.hypot(y,v);if(E>=(p.radius||1.8))return;const C=p.pos.x-s.x,b=p.pos.y-s.y,T=p.pos.z-s.z,P=Math.hypot(C,b,T)||1,I=(C*this._fwd.x+b*this._fwd.y+T*this._fwd.z)/P,x=Math.acos(Math.min(1,Math.max(-1,I)));if(x>Yx)return;const S=x+E*.1;S>=a||(O=(U=t.world).sightBlocked)!=null&&O.call(U,e,p.pos,m)||(a=S,o=p)};for(const p of t.world.activeInteractables()){const m=(u=p.data)==null?void 0:u.zone;m&&(m.minZ!==void 0&&e.z<m.minZ||m.maxZ!==void 0&&e.z>m.maxZ||m.minX!==void 0&&e.x<m.minX||m.maxX!==void 0&&e.x>m.maxX)||p.action==="station"&&r||(d=p.data)!=null&&d.podOnly&&r!=="pod"||(f=p.data)!=null&&f.when&&!((g=t.shift)!=null&&g.available(p.data.when,p.data))||c(p,void 0)}const l=(_=t.world.doors)==null?void 0:_.nearest(e,2);l&&!r&&c(l,{backOff:.7}),this._setTarget(o),t.input.wasPressed("interact")&&this.activate()}_setTarget(t){const e=t?t.label:null;this.target===t&&this._label===e||(this.target=t,this._label=e,this.game.bus.emit("interaction:target",{label:e,interactable:t}))}activate(){this.target&&this.run(this.target.action,this.target.data||{})}run(t,e){const n=this.game;switch(t){case"door":{e.door.toggle()||n.ui.toast("You are standing in the doorway.");return}case"station":return void n.shift.lockIn(e.station);case"pod":return void n.shift.podPress(e);case"counter":return void n.shift.counterPress(e);case"service":return void n.shift.servicePress(e);case"landing":return void n.shift.handOver();case"note":return void n.ui.toast(e.text);default:console.warn("[interaction] no handler for action:",t,e),n.ui.toast("Nothing happens.")}}}const _e={ORDER_OFFERED:"order:offered",ORDER_STARTED:"order:started",ORDER_STEP:"order:step",ORDER_BUILT:"order:built",ORDER_WRAPPED:"order:wrapped",ORDER_READY:"order:ready",ORDER_BAGGED:"order:bagged",ORDER_TRAY:"order:tray",ORDER_SERVED:"order:served",COUNTER_TAKEN:"counter:order_taken",COUNTER_PAID:"counter:paid",POD_REFUSED:"pod:refused"},Ei={bun:{label:"toasted bun",station:"toaster",colour:13210159,shape:"heel"},ketchup:{label:"ketchup",station:"guns",colour:10236968,shape:"smear"},mustard:{label:"mustard",station:"guns",colour:13210159,shape:"smear"},mayo:{label:"mayo",station:"guns",colour:15261904,shape:"smear"},bbq:{label:"BBQ sauce",station:"guns",colour:5913126,shape:"smear"},pickle:{label:"pickles",station:"bins",colour:8030778,shape:"chips"},onion:{label:"onion",station:"bins",colour:15261904,shape:"chips"},lettuce:{label:"lettuce",station:"bins",colour:5208634,shape:"leaf"},tomato:{label:"tomato",station:"bins",colour:10236968,shape:"slice"},cheese:{label:"cheese",station:"bins",colour:13210159,shape:"flat"},patty:{label:"beef patty",station:"uhc",colour:7031349,shape:"disc"},fillet:{label:"chicken fillet",station:"uhc",colour:13216097,shape:"disc"}},Ds={classic:{label:"Barn Classic",value:7.5,sequence:["bun","ketchup","mustard","pickle","onion","patty"]},cheese:{label:"Cheese Barn",value:8,sequence:["bun","ketchup","pickle","cheese","patty"]},smokehouse:{label:"Smokehouse",value:9,sequence:["bun","bbq","onion","cheese","patty"]},garden_chook:{label:"Garden Chook",value:8.5,sequence:["bun","mayo","lettuce","tomato","fillet"]}},ph=Object.keys(Ds),zi={intervalMin:7,intervalJitter:.35,maxLive:4,queueCapacity:3,secondItemChance:.25,sourceMix:{kiosk:.4,counter:.35},dineInChance:.45},mh=[{skin:0,hair:0,height:1,build:1,hairStyle:"short",top:4877194,bottom:3884626},{skin:1,hair:2,height:.94,build:.92,hairStyle:"long",top:9067115,bottom:3027256},{skin:2,hair:4,height:1.05,build:1.12,hairStyle:"short",top:5929554,bottom:4866619},{skin:3,hair:1,height:.98,build:1,hairStyle:"bun",top:11569738,bottom:3884626},{skin:4,hair:6,height:1.02,build:.95,hairStyle:"short",top:7035530,bottom:3027256},{skin:5,hair:3,height:.9,build:.9,hairStyle:"long",top:9071434,bottom:5392702},{skin:1,hair:5,height:1.07,build:1.05,hairStyle:"short",top:4885123,bottom:3884626},{skin:3,hair:7,height:.96,build:1.08,hairStyle:"bun",top:10242626,bottom:3027256}];class Kx{constructor({emit:t,rng:e,now:n=0}){this.emit=t,this.rng=e,this.now=n,this.orders=new Map,this._nextId=11,this._nextOfferAt=null,this.stats={offered:0,served:0,balked:0,bySource:{}}}live(){return[...this.orders.values()].filter(t=>t.state!=="served"&&t.state!=="queued"&&t.state!=="ordering").sort((t,e)=>t.id-e.id)}all(){return[...this.orders.values()].sort((t,e)=>t.id-e.id)}counterQueue(){return[...this.orders.values()].filter(t=>t.state==="queued").sort((t,e)=>t.id-e.id)}ordering(){return[...this.orders.values()].find(t=>t.state==="ordering")||null}active(){return this.live().find(t=>t.state==="active"||t.state==="building"||t.state==="built"||t.state==="wrapped")||null}ready(){return this.live().filter(t=>t.state==="ready")}readyFor(t){return this.ready().filter(e=>e.service===t&&e.source!=="drivethru")}bagged(){return this.live().filter(t=>t.state==="bagged")}carriedBy(t){return this.live().find(e=>e.state==="carried"&&e.carrier===t)||null}get(t){return this.orders.get(t)||null}offer(t){const e=this.rng.float(),n=zi.sourceMix,s=e<n.kiosk?"kiosk":e<n.kiosk+n.counter?"counter":"drivethru";if(s==="counter"&&this.counterQueue().length>=zi.queueCapacity)return this.stats.balked+=1,null;if(s!=="counter"&&this.live().length>=zi.maxLive)return this.stats.balked+=1,null;const r=[this.rng.pick(ph)];this.rng.chance(zi.secondItemChance)&&r.push(this.rng.pick(ph));const o=[];for(const c of r)o.push(...Ds[c].sequence);const a={id:this._nextId++,source:s,items:r,value:r.reduce((c,l)=>c+Ds[l].value,0),sequence:o,step:0,state:s==="counter"?"queued":"active",look:this.rng.int(0,7),service:s==="drivethru"?"takeaway":this.rng.chance(zi.dineInChance)?"dinein":"takeaway",carrier:null,offeredAt:t,takenAt:null,takenBy:null,servedBy:null,builtAt:null,wrappedAt:null,readyAt:null,baggedAt:null,carriedAt:null,servedAt:null};return this.orders.set(a.id,a),this.stats.offered+=1,this.stats.bySource[s]=(this.stats.bySource[s]||0)+1,this.emit(_e.ORDER_OFFERED,{id:a.id,source:s,items:[...r],sequence:[...o]}),a}takeOrder(t,e="player"){if(this.ordering())return{ok:!1,reason:"already_taking"};const n=this.counterQueue()[0];return n?(n.state="ordering",n.takenBy=e,this.emit(_e.COUNTER_TAKEN,{id:n.id,items:[...n.items],total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_queued"}}takePayment(t,e="player"){const n=this.ordering();return n?(n.state="active",n.takenAt=t,this.emit(_e.COUNTER_PAID,{id:n.id,total:n.value,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_pay"}}serve(t,e,n="player",s=["ready"]){return!t||!s.includes(t.state)?!1:(t.state="served",t.servedAt=e,t.servedBy=n,this.stats.served+=1,this.emit(_e.ORDER_SERVED,{id:t.id,ageMin:+(e-(t.takenAt??t.offeredAt)).toFixed(2)}),!0)}bagOrder(t,e="player"){const n=this.readyFor("takeaway")[0];return n?(n.state="bagged",n.baggedAt=t,this.emit(_e.ORDER_BAGGED,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_bag"}}collect(t,e,n="customer"){const s=this.orders.get(t);return!s||s.state!=="bagged"?{ok:!1,reason:"not_bagged"}:(this.serve(s,e,n,["bagged"]),{ok:!0,id:s.id})}trayUp(t,e="player"){if(this.carriedBy(e))return{ok:!1,reason:"already_carrying"};const n=this.readyFor("dinein")[0];return n?(n.state="carried",n.carrier=e,n.carriedAt=t,this.emit(_e.ORDER_TRAY,{id:n.id,by:e}),{ok:!0,id:n.id}):{ok:!1,reason:"nothing_to_tray"}}deliver(t,e="player"){const n=this.carriedBy(e);return n?(this.serve(n,t,e,["carried"]),{ok:!0,id:n.id}):{ok:!1,reason:"not_carrying"}}_interval(){const t=1+this.rng.range(-.35,zi.intervalJitter);return zi.intervalMin*t}tick(t){this.now=t,this._nextOfferAt===null&&(this._nextOfferAt=t+this._interval());let e=0;for(;t>=this._nextOfferAt&&e++<16;)this.offer(this._nextOfferAt),this._nextOfferAt+=this._interval();for(const n of this.orders.values())n.state==="served"&&t-n.servedAt>10&&this.orders.delete(n.id)}serialize(){return{nextId:this._nextId,nextOfferAt:this._nextOfferAt,stats:{...this.stats,bySource:{...this.stats.bySource}},orders:[...this.orders.values()]}}load(t){var e;t&&(this._nextId=t.nextId,this._nextOfferAt=t.nextOfferAt??null,this.stats={...t.stats,bySource:{...((e=t.stats)==null?void 0:e.bySource)||{}}},this.orders=new Map(t.orders.map(n=>[n.id,{...n}])))}}const ze={NO_ORDER:"no_order",NOT_NEXT:"not_next",NOT_AT_UHC:"not_at_uhc",ALREADY_BUILT:"already_built",NOT_BUILT:"not_built",NOT_WRAPPED:"not_wrapped"};class $x{constructor({queue:t,emit:e}){this.queue=t,this.emit=e}nextToken(){const t=this.queue.active();return!t||t.step>=t.sequence.length?null:t.sequence[t.step]}_refuse(t,e=null){return this.emit(_e.POD_REFUSED,{reason:t,token:e,next:this.nextToken()}),{ok:!1,reason:t}}addToken(t,e,n="player"){const s=this.queue.active();if(!s)return this._refuse(ze.NO_ORDER,t);if(s.state==="built"||s.state==="wrapped")return this._refuse(ze.ALREADY_BUILT,t);const r=s.sequence[s.step];return t!==r?this._refuse(ze.NOT_NEXT,t):(s.step+=1,s.state==="active"&&(s.state="building",this.emit(_e.ORDER_STARTED,{id:s.id})),this.emit(_e.ORDER_STEP,{id:s.id,added:t,next:s.sequence[s.step]??null,step:s.step}),s.step>=s.sequence.length&&(s.state="built",s.builtAt=e,this.emit(_e.ORDER_BUILT,{id:s.id})),{ok:!0,added:t})}pullFromUHC(t,e="player"){var s;const n=this.nextToken();if(n===null){const r=this.queue.active();return this._refuse(r?ze.ALREADY_BUILT:ze.NO_ORDER)}return((s=Ei[n])==null?void 0:s.station)!=="uhc"?this._refuse(ze.NOT_AT_UHC):this.addToken(n,t,e)}wrap(t,e="player"){const n=this.queue.active();return n?n.state!=="built"?this._refuse(n.state==="wrapped"?ze.ALREADY_BUILT:ze.NOT_BUILT):(n.state="wrapped",n.wrappedAt=t,this.emit(_e.ORDER_WRAPPED,{id:n.id}),{ok:!0}):this._refuse(ze.NO_ORDER)}send(t,e="player"){const n=this.queue.active();return n?n.state!=="wrapped"?this._refuse(ze.NOT_WRAPPED):(n.state="ready",n.readyAt=t,this.emit(_e.ORDER_READY,{id:n.id}),{ok:!0}):this._refuse(ze.NO_ORDER)}}const xs=class xs{constructor({rng:t,bus:e=null}){this.bus=e,this.minute=0,this.log=[],this.logSeq=0,this.rev=0,this.netRole="solo";const n=(s,r)=>this._emit(s,r);this.orders=new Kx({emit:n,rng:t.child("orders")}),this.pod=new $x({queue:this.orders,emit:n})}_emit(t,e={}){this.logSeq+=1,this.rev+=1,this.log.push({type:t,payload:e,minute:+this.minute.toFixed(3),seq:this.logSeq}),this.log.length>600&&this.log.shift(),this.bus&&this.bus.emit(t,e)}tick(t){this.netRole!=="guest"&&(t<=0||(this.minute+=t,this.orders.tick(this.minute)))}addToken(t,e="player"){return this.pod.addToken(t,this.minute,e)}pullFromUHC(t="player"){return this.pod.pullFromUHC(this.minute,t)}wrap(t="player"){return this.pod.wrap(this.minute,t)}send(t="player"){return this.pod.send(this.minute,t)}takeOrder(t="player"){return this.orders.takeOrder(this.minute,t)}takePayment(t="player"){return this.orders.takePayment(this.minute,t)}bagOrder(t="player"){return this.orders.bagOrder(this.minute,t)}trayUp(t="player"){return this.orders.trayUp(this.minute,t)}deliver(t="player"){return this.orders.deliver(this.minute,t)}collect(t,e="customer"){return this.orders.collect(t,this.minute,e)}handOver(t="player"){const e=this.orders.ready().find(n=>n.source==="drivethru")||null;return e?(this.orders.serve(e,this.minute,t),{ok:!0,id:e.id}):{ok:!1,reason:"nothing_ready"}}applyNet(t,e=[],n="guest"){if(!Object.hasOwn(xs.NET_COMMANDS,t))return{ok:!1,reason:"unknown_command"};const s=xs.NET_COMMANDS[t];return!Array.isArray(e)||e.length<s.n?{ok:!1,reason:"bad_args"}:xs.prototype[s.m].apply(this,[...e.slice(0,s.n),n])}snapshot(){var t;return{minute:this.minute,board:this.orders.live(),queue:this.orders.counterQueue(),ordering:this.orders.ordering(),activeId:((t=this.orders.active())==null?void 0:t.id)??null,nextToken:this.pod.nextToken(),readyCount:this.orders.ready().length,stats:{...this.orders.stats}}}serialize(){return{minute:this.minute,orders:this.orders.serialize()}}load(t){t&&(this.minute=t.minute||0,this.orders.load(t.orders))}};Fc(xs,"NET_COMMANDS",{token:{m:"addToken",n:1},uhc:{m:"pullFromUHC",n:0},wrap:{m:"wrap",n:0},send:{m:"send",n:0},handover:{m:"handOver",n:0},take_order:{m:"takeOrder",n:0},take_payment:{m:"takePayment",n:0},bag:{m:"bagOrder",n:0},tray:{m:"trayUp",n:0},deliver:{m:"deliver",n:0},collect:{m:"collect",n:1}});let sc=xs;const ds=560,gh=340,ta=68,ea=4,_h="#f1ece1",kr="#9aa3ad",Br="#c9a961",na="#0d1116",Zx="#141a21",Jx="#1d2733",ia="#7fb069",Qx="#cf5b45";class tv{constructor(t,e,n,s){this.scene=t,this.canvas=typeof document<"u"?document.createElement("canvas"):null,this.canvas&&(this.canvas.width=ds,this.canvas.height=gh,this.ctx=this.canvas.getContext("2d"),this.tex=new Wn(this.canvas),this.tex.colorSpace=Ce,this.tex.anisotropy=4,this.mesh=new ht(new ke(s.w,s.h),new Vn({map:this.tex})),this.mesh.position.set(e.x,e.y,e.z),this.mesh.rotation.x=n,t.add(this.mesh),this._sig=null,this.paint([],null,null,{},{},0))}paint(t,e,n,s,r,o){if(!this.ctx)return;const a=t.slice(0,ea),c=u=>u.takenAt??u.offeredAt,l=`${e}|${n}|`+a.map(u=>`${u.id}:${u.state}:${u.step}:${u.source}:${Math.floor(o-c(u))}`).join(",");if(l===this._sig)return;this._sig=l;const h=this.ctx;if(h.fillStyle=na,h.fillRect(0,0,ds,gh),h.fillStyle=Br,h.font="bold 28px Segoe UI, system-ui, sans-serif",h.fillText("ORDERS",16,34),t.length>ea&&(h.fillStyle=kr,h.font="22px Segoe UI, system-ui, sans-serif",h.textAlign="right",h.fillText(`+${t.length-ea} more`,ds-16,34),h.textAlign="left"),!a.length){h.fillStyle=kr,h.font="28px Segoe UI, system-ui, sans-serif",h.fillText("Nothing on.",16,100),this.tex.needsUpdate=!0;return}a.forEach((u,d)=>{var E;const f=48+d*ta,g=u.id===e;h.fillStyle=g?Jx:Zx,h.fillRect(10,f,ds-20,ta-8),g&&(h.fillStyle=Br,h.fillRect(10,f,6,ta-8)),h.fillStyle=g?_h:kr,h.font="bold 26px Segoe UI, system-ui, sans-serif",h.fillText(`#${u.id}`,24,f+28);let _=86;u.source==="drivethru"?(h.fillStyle=Qx,h.fillRect(_,f+10,44,22),h.fillStyle=na,h.font="bold 17px Segoe UI, system-ui, sans-serif",h.fillText("DT",_+11,f+27),_+=54):u.service==="dinein"&&(h.fillStyle=ia,h.fillRect(_,f+10,56,22),h.fillStyle=na,h.font="bold 17px Segoe UI, system-ui, sans-serif",h.fillText("DINE",_+8,f+27),_+=66),h.fillStyle=g?_h:kr,h.font="22px Segoe UI, system-ui, sans-serif";const p=(u.items||[]).map(C=>{var b;return((b=r[C])==null?void 0:b.label)||C}).join(", ");if(h.fillText(p.slice(0,u.source==="drivethru"?26:30),_,f+28),h.font="20px Segoe UI, system-ui, sans-serif",g){h.fillStyle=ia;const C=u.state==="built"?"wrap it":u.state==="wrapped"?"send it down":n?`next: ${((E=s[n])==null?void 0:E.label)||n}`:"…";h.fillText(C,86,f+52)}else{h.fillStyle=u.state==="ready"||u.state==="bagged"||u.state==="carried"?Br:"#5d6570";const C=Math.floor(o-c(u));h.fillText(u.state==="ready"?"at the landing":u.state==="bagged"?"on the counter":u.state==="carried"?"going to the table":C<1?"just in":`waiting ${C}m`,86,f+52)}const m=(u.sequence||[]).length||1,y=u.state==="ready"||u.state==="wrapped"||u.state==="built"||u.state==="bagged"||u.state==="carried",v=y?1:Math.min(1,(u.step||0)/m);h.fillStyle="#2a333d",h.fillRect(ds-104,f+20,84,10),h.fillStyle=y&&u.state!=="built"?Br:ia,h.fillRect(ds-104,f+20,84*v,10)}),this.tex.needsUpdate=!0}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.material.dispose(),this.mesh=null)}}const rc="#f1ece1",io="#9aa3ad",oc="#c9a961",yu="#0d1116",xh="#7fb069";function Mu(i,t,e,n,s){const r=document.createElement("canvas");r.width=n,r.height=s;const o=new Wn(r);o.colorSpace=Ce,o.anisotropy=4;const a=new ht(new ke(e.w,e.h),new Vn({map:o}));return a.position.set(t.x,t.y,t.z),a.rotation.y=t.rotY||0,i.add(a),{canvas:r,tex:o,mesh:a,ctx:r.getContext("2d")}}class ev{constructor(t,e){typeof document>"u"||(this.face=Mu(t,e,{w:e.w,h:e.h},320,235),this._sig=null)}paint(t,e,n,s,r){if(!this.face)return;const o=n&&s-n.atMin<2,a=t?`t${t.id}:${t.items.join("+")}`:o?`p${n.id}`:`q${e}`;if(a===this._sig)return;this._sig=a;const c=this.face.ctx,l=320,h=235;if(c.fillStyle=yu,c.fillRect(0,0,l,h),c.fillStyle=oc,c.font="bold 22px Segoe UI, system-ui, sans-serif",c.fillText("TILL",14,30),t){c.fillStyle=rc,c.font="bold 24px Segoe UI, system-ui, sans-serif",c.fillText(`#${t.id}`,250,30),c.font="22px Segoe UI, system-ui, sans-serif";let u=66;for(const d of t.items){const f=r[d];c.fillStyle=rc,c.fillText((f==null?void 0:f.label)||d,14,u),c.textAlign="right",c.fillText(`$${((f==null?void 0:f.value)??0).toFixed(2)}`,l-14,u),c.textAlign="left",u+=30}c.strokeStyle="#2a333d",c.beginPath(),c.moveTo(14,u-12),c.lineTo(l-14,u-12),c.stroke(),c.fillStyle=oc,c.font="bold 24px Segoe UI, system-ui, sans-serif",c.fillText("TOTAL",14,u+18),c.textAlign="right",c.fillText(`$${t.value.toFixed(2)}`,l-14,u+18),c.textAlign="left",c.fillStyle=xh,c.font="20px Segoe UI, system-ui, sans-serif",c.fillText("take payment",14,h-16)}else o?(c.fillStyle=xh,c.font="bold 34px Segoe UI, system-ui, sans-serif",c.fillText("PAID",14,100),c.fillText(`$${n.total.toFixed(2)}`,14,140),c.fillStyle=io,c.font="20px Segoe UI, system-ui, sans-serif",c.fillText(`#${n.id} to the kitchen`,14,180)):(c.fillStyle=io,c.font="24px Segoe UI, system-ui, sans-serif",c.fillText(e===0?"No one waiting.":e===1?"1 in line.":`${e} in line.`,14,100));this.face.tex.needsUpdate=!0}}class nv{constructor(t,e){typeof document>"u"||(this.face=Mu(t,e,{w:e.w,h:e.h},500,275),this._sig=null)}paint(t){if(!this.face)return;const e=t.filter(h=>h.source!=="drivethru"),n=e.filter(h=>h.state!=="bagged"&&h.state!=="carried").map(h=>h.id),s=e.filter(h=>h.state==="bagged").map(h=>h.id),r=n.join(",")+"|"+s.join(",");if(r===this._sig)return;this._sig=r;const o=this.face.ctx,a=500,c=275;o.fillStyle=yu,o.fillRect(0,0,a,c),o.strokeStyle="#2a333d",o.beginPath(),o.moveTo(a/2,12),o.lineTo(a/2,c-12),o.stroke(),o.font="bold 24px Segoe UI, system-ui, sans-serif",o.fillStyle=io,o.fillText("PREPARING",24,38),o.fillStyle=oc,o.fillText("READY",a/2+24,38),o.font="bold 44px Segoe UI, system-ui, sans-serif";const l=(h,u,d)=>{o.fillStyle=d,h.slice(0,6).forEach((f,g)=>{o.fillText(`${f}`,u+g%2*110,96+Math.floor(g/2)*62)})};l(n,34,io),l(s,a/2+34,rc),this.face.tex.needsUpdate=!0}}const iv=2.6,sv=4;class rv{constructor(t){var n;this.game=t,this.rules=new sc({rng:t.rng.child("shift"),bus:t.bus}),this.station=null;const e=t.renderer.scene;this.screen=new tv(e,Lr,Lr.tilt,{w:Lr.w,h:Lr.h}),this.till=new ev(e,{x:eh.x,...eh.screen}),this.readyBoard=new nv(e,Cx),this._lastPaid=null,t.bus.on(_e.COUNTER_PAID,({id:s,total:r})=>{this._lastPaid={id:s,total:r,atMin:this.rules.minute}}),this._buildLandingPool(e),this._buildBagPool(e),this._wireToasts();for(const s of t.world.activeInteractables()){const r=(n=s.data)==null?void 0:n.token;r&&!Ei[r]&&console.error("ShiftSystem: interactable",s.id,"dispenses a token the menu does not know:",r)}}available(t,e={}){var s,r,o;const n=this.rules.orders;switch(t){case"landing_ready":return n.ready().some(a=>a.source==="drivethru");case"queue_head":{if(this.station!=="counter"||n.ordering())return!1;const a=n.counterQueue()[0];return!!a&&(((s=this.game.customers)==null?void 0:s.atTill(a.id))??!0)}case"payment_due":return this.station==="counter"&&!!n.ordering();case"bag_ready":return n.readyFor("takeaway").length>0;case"tray_ready":{if(this.game.player.isBusy||n.carriedBy("player"))return!1;const a=n.readyFor("dinein")[0];return!!a&&((r=this.game.customers)==null?void 0:r.seatedTable(a.id))!=null}case"carrying_for":{const a=n.carriedBy("player");return!!a&&((o=this.game.customers)==null?void 0:o.tableOf(a.id))===e.table}default:return!1}}servicePress(t){var n;const e=this.game.ui;if(t.op==="tray"){const s=this.rules.trayUp();if(s.ok){const r=(n=this.game.customers)==null?void 0:n.tableOf(s.id);e.toast(`#${s.id} on the tray — table ${r??"?"}.`,4200)}else e.toast("Nothing ready for a tray.")}else if(t.op==="bag"){const s=this.rules.bagOrder();s.ok?e.toast(`#${s.id} bagged — their number is up.`):e.toast("Nothing ready to bag.")}else t.op==="deliver"&&(this.rules.deliver().ok||e.toast("You are not carrying anything."))}lockIn(t){if(t==="pod")return this._lockPod();if(t==="counter")return this._lockCounter();this.game.ui.toast("Nothing to work there yet.")}_lockPod(){const t=this.game.player;t.position.z<Tn.z-.75||(this.station="pod",t.setState("busy"),t.position.x=Rn.clamp(t.position.x,Tn.x0,Tn.x1),t.position.z=Tn.z,t.position.y=0,t.velocity.set(0,0,0),t.facing=Tn.facing,this.game.camera.yaw=Tn.facing,this.game.ui.toast("On the pod. A/D to slide along, S to step off.",5200),this.game.bus.emit("shift:station",{station:"pod"}))}_lockCounter(){const t=this.game.player;t.position.z>Oi.z+.75||(this.station="counter",t.setState("busy"),t.position.x=Oi.x,t.position.z=Oi.z,t.position.y=0,t.velocity.set(0,0,0),t.facing=Oi.facing,this.game.camera.yaw=Oi.facing,this.game.ui.toast("On the till. S to step off.",5200),this.game.bus.emit("shift:station",{station:"counter"}))}release(){this.station&&(this.station=null,this.game.player.setState("normal"),this.game.bus.emit("shift:station",{station:null}))}podPress(t){this.station==="pod"&&(t.op==="uhc"?this.rules.pullFromUHC():t.op==="wrap"?this.rules.wrap():t.op==="send"?this.rules.send():this.rules.addToken(t.token))}counterPress(t){if(this.station!=="counter")return;(t.op==="take_payment"?this.rules.takePayment():this.rules.takeOrder()).ok||this.game.ui.toast("Not right now.")}handOver(){this.rules.handOver().ok||this.game.ui.toast("Nothing waiting on the landing.")}update(t){var o,a,c,l;const e=this.game;e.mode===qe.PLAY&&(this.rules.tick(t*e.clock.scale),this.station==="pod"?this._slide(t):this.station==="counter"&&this._pin(t));const n=this.rules.orders,s=n.live();(a=this.screen)==null||a.paint(s,((o=n.active())==null?void 0:o.id)??null,this.rules.pod.nextToken(),Ei,Ds,this.rules.minute),(c=this.till)==null||c.paint(n.ordering(),n.counterQueue().length,this._lastPaid,this.rules.minute,Ds),(l=this.readyBoard)==null||l.paint(s),this._syncLanding(),this._syncBags();const r=n.carriedBy("player");this.game.player.avatar.setHeld(r?[{id:"tray"+r.id,shape:"tray",colour:11026479}]:[])}_buildBagPool(t){this._bags=[];const e=new Mi({color:14272934}),n=new Mi({color:11026479});for(let s=0;s<3;s++){const r=new Qt,o=new ht(new Gt(.16,.21,.1),e);o.castShadow=!0;const a=new ht(new Gt(.165,.035,.05),e);a.position.y=.12;const c=new ht(new Gt(.162,.03,.102),n);c.position.y=.02,r.add(o,a,c),r.position.set(-5.85+s*.65,1.075+.105,1.95),r.rotation.y=(s%2?-1:1)*.18,r.visible=!1,t.add(r),this._bags.push(r)}}_syncBags(){const t=this.rules.orders.bagged();for(let e=0;e<this._bags.length;e++)this._bags[e].visible=e<t.length}_pin(){const t=this.game.player;t.position.x=Oi.x,t.position.z=Oi.z,t.position.y=0,this.game.input.axis().y<-.5&&this.release()}_slide(t){const e=this.game.player;e.position.x=Rn.clamp(e.position.x,Tn.x0,Tn.x1),e.position.z=Tn.z,e.position.y=0;const s=this.game.input.axis();if(s.y<-.5){this.release();return}if(s.x!==0){const r=this.game.camera.basis().right,o=Math.sign(r.x)||1;e.position.x=Rn.clamp(e.position.x+s.x*o*iv*t,Tn.x0,Tn.x1)}}_buildLandingPool(t){this._landing=[];const e=new Mi({color:15262418}),n=new Mi({color:11026479}),s=new Gt(.115,.055,.115),r=new Gt(.118,.016,.05);for(let o=0;o<sv;o++){const a=new Qt,c=new ht(s,e);c.castShadow=!0;const l=new ht(r,n);l.position.y=.02,a.add(c,l);const h=document.createElement("canvas");h.width=64,h.height=32;const u=new Wn(h);u.colorSpace=Ce;const d=new ht(new ke(.075,.0375),new Vn({map:u,transparent:!0}));d.rotation.x=-Math.PI/2+.35,d.position.set(0,.032,.035),a.add(d);const f=Es.x0+.22+o*.42;a.position.set(f,Es.y+.03,Es.z),a.rotation.y=(o%2?-1:1)*.22,a.visible=!1,t.add(a),this._landing.push({g:a,canvas:h,tex:u,shownId:null})}}_stencil(t,e){if(t.shownId===e)return;t.shownId=e;const n=t.canvas.getContext("2d");n.clearRect(0,0,64,32),n.fillStyle="#3a3126",n.font="bold 24px Segoe UI, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("#"+e,32,17),t.tex.needsUpdate=!0}_syncLanding(){var n;const t=this.rules.orders.ready(),e=((n=this.game.buildBoard)==null?void 0:n.slidingId)??null;for(let s=0;s<this._landing.length;s++){const r=this._landing[s],o=t[s];r.g.visible=!!o&&o.id!==e,o&&this._stencil(r,o.id)}}_wireToasts(){const t=this.game.bus,e={toast:s=>{var r;return(r=this.game.ui)==null?void 0:r.toast(s)}},n=s=>{const r=Ei[s];return r?r.station==="toaster"||r.station==="uhc"?"a "+r.label:r.label:s};t.on(_e.POD_REFUSED,({reason:s,next:r})=>{switch(s){case ze.NO_ORDER:return e.toast("Nothing on the board.");case ze.NOT_NEXT:case ze.NOT_AT_UHC:return e.toast(`It wants ${n(r)} next.`);case ze.ALREADY_BUILT:return e.toast("It has everything it needs.");case ze.NOT_BUILT:return e.toast("It is not built yet.");case ze.NOT_WRAPPED:return e.toast("Wrap it before it goes down.");default:return e.toast("Not now.")}}),t.on(_e.ORDER_SERVED,({id:s})=>e.toast(`#${s} away.`))}}const sa={};function le(i,t){return sa[i]||(sa[i]=t())}const he=(i,t={})=>new Mi({color:i,...t});function ov(i){const t=new Qt,e=new ht(le("cup",()=>new Ne(.043,.032,.135,10)),he(i));e.castShadow=!0;const n=new ht(le("cupLid",()=>new Ne(.047,.047,.016,10)),he(14173231));n.position.y=.075;const s=new ht(le("straw",()=>new Ne(.005,.005,.1,5)),he(15790836));return s.position.set(.012,.13,0),s.rotation.z=.18,t.add(e,n,s),t}function av(i){const t=new ht(le("bun",()=>new Ti(.056,10,6,0,Math.PI*2,0,Math.PI/2)),he(i));return t.scale.y=.62,t.castShadow=!0,t}function cv(i){const t=new ht(le("heel",()=>new Ne(.054,.05,.02,12)),he(i));return t.castShadow=!0,t}function lv(i){const t=new ht(le("chip",()=>new Ne(.021,.021,.008,8)),he(i));return t.castShadow=!0,t}function hv(i){const t=new ht(le("disc",()=>new Ne(.052,.052,.018,12)),he(i));return t.castShadow=!0,t}function uv(i){const t=new ht(le("flat",()=>new Gt(.082,.006,.082)),he(i));return t.castShadow=!0,t}function dv(i){const t=new ht(le("blob",()=>new ho(.036,0)),he(i));return t.castShadow=!0,t}function fv(i){const t=new Qt,e=new ht(le("bottle",()=>new Ne(.024,.028,.105,8)),he(i));e.castShadow=!0;const n=new ht(le("bottleCap",()=>new lo(.017,.036,8)),he(2896184));return n.position.y=.068,t.add(e,n),t}function pv(i){const t=new Qt,e=new ht(le("carton",()=>new Ne(.04,.026,.09,4)),he(14173231));e.rotation.y=Math.PI/4,e.castShadow=!0;const n=new ht(le("chipTop",()=>new Ne(.03,.03,.05,6)),he(i));return n.position.y=.055,t.add(e,n),t}function mv(i){const t=new Qt,e=new ht(le("bag",()=>new Gt(.1,.135,.062)),he(i));e.castShadow=!0;const n=new ht(le("bagFold",()=>new Gt(.104,.022,.03)),he(i));return n.position.y=.076,t.add(e,n),t}function gv(i){const t=new Qt,e=new ht(le("box",()=>new Gt(.125,.075,.105)),he(i));e.castShadow=!0;const n=new ht(le("boxTape",()=>new Gt(.128,.004,.022)),he(15262418));return n.position.y=.039,t.add(e,n),t}function _v(i){const t=new Qt,e=new ht(le("trayBase",()=>new Gt(.34,.014,.25)),he(i));e.castShadow=!0;const n=new ht(le("trayRim",()=>new Gt(.36,.022,.27)),he(i));n.position.y=.004;const s=new ht(le("trayParcel",()=>new Gt(.115,.055,.115)),he(15262418));s.position.set(.04,.045,.01),s.rotation.y=.3,s.castShadow=!0;const r=new ht(le("trayBand",()=>new Gt(.118,.016,.05)),he(11026479));return r.position.set(.04,.062,.01),r.rotation.y=.3,t.add(e,n,s,r),t}function xv(i){const t=new Qt,e=new ht(le("shaft",()=>new Ne(.016,.016,1.15,6)),he(i));e.castShadow=!0;const n=new ht(le("mopHead",()=>new Gt(.115,.1,.055)),he(14341056));return n.position.y=-.6,t.add(e,n),t}function vv(i){const t=new Qt,e=new ht(le("sprayBody",()=>new Gt(.055,.115,.045)),he(i));e.castShadow=!0;const n=new ht(le("sprayNeck",()=>new Gt(.028,.05,.028)),he(2896184));n.position.y=.082;const s=new ht(le("sprayTrigger",()=>new Gt(.05,.022,.022)),he(2896184));s.position.set(.032,.068,0);const r=new ht(le("cloth",()=>new Gt(.075,.018,.06)),he(7317704));return r.position.y=-.075,t.add(e,n,s,r),t}const yv={cup:ov,bun:av,heel:cv,chip:lv,disc:hv,flat:uv,blob:dv,bottle:fv,carton:pv,bag:mv,box:gv,tray:_v,mop:xv,spray:vv};function Mv(i){const t=new ht(le("fallback",()=>new Gt(.075,.055,.075)),he(i));return t.castShadow=!0,t}function On(i,t=13421772){return(yv[i]||Mv)(t)}function Sv(i){return i==="mop"}const an=(i,t,e,n)=>{const s=new ht(new Gt(i,t,e),vn(n));return s.castShadow=!0,s.receiveShadow=!0,s};class Su{constructor(t={}){const{skin:e=ce.skinTones[0],hair:n=ce.hairTones[0],height:s=1,build:r=1,hairStyle:o="short"}=t;this.group=new Qt,this.scale=s,this.opts={skin:e,hair:n,height:s,build:r,hairStyle:o};const a=s,c=.44*r,l=.24*r;this.hips=new Qt,this.hips.position.y=.84*a,this.group.add(this.hips),this.torso=an(c,.58*a,l,14209734),this.torso.position.y=.29*a,this.hips.add(this.torso),this.neck=an(.14*a,.08*a,.14*a,e),this.neck.position.y=.62*a,this.hips.add(this.neck),this.head=new Qt,this.head.position.y=.66*a,this.hips.add(this.head);const h=an(.26*a,.3*a,.25*a,e);h.position.y=.15*a,this.head.add(h),this.skull=h,this.hair=new Qt;const u=o==="long"?.2:.1,d=an(.28*a,u*a,.27*a,n);if(d.position.y=(.3-u/2+.005)*a,this.hair.add(d),o==="long"){const f=an(.26*a,.26*a,.1*a,n);f.position.set(0,.12*a,-.14*a),this.hair.add(f)}if(o==="bun"){const f=new ht(new Ti(.08*a,8,6),vn(n));f.position.set(0,.3*a,-.14*a),f.castShadow=!0,this.hair.add(f)}this.head.add(this.hair);for(const f of[-.06,.06]){const g=an(.045*a,.045*a,.02*a,1973016);g.position.set(f*a,.17*a,.13*a),this.head.add(g)}this.arms={};for(const f of["left","right"]){const g=new Qt;g.position.set((f==="left"?-1:1)*(c/2+.055*a),.54*a,0);const _=an(.11*a,.5*a,.12*a,14209734);_.position.y=-.25*a,g.add(_);const p=an(.1*a,.1*a,.11*a,e);p.position.y=-.54*a,g.add(p);const m=new Qt;m.position.y=-.6*a,g.add(m),this.hips.add(g),this.arms[f]={pivot:g,upper:_,hand:p,grip:m}}this.legs={};for(const f of["left","right"]){const g=new Qt;g.position.set((f==="left"?-1:1)*.11*a,0,0);const _=an(.15*a,.78*a,.16*a,3884626);_.position.y=-.39*a,g.add(_);const p=an(.17*a,.1*a,.24*a,2764083);p.position.set(0,-.82*a,.03*a),g.add(p),this.hips.add(g),this.legs[f]={pivot:g,leg:_,shoe:p}}this.bag=null,this.hat=null,this.phase=0,this.leaning=0,this.firstPerson=!1,this._held=[],this._heldSig=""}applyOutfit(t={}){var o,a,c;const e=(l,h)=>{l.material=vn(h)},n=((o=t.top)==null?void 0:o.colour)??14209734;e(this.torso,n),e(this.arms.left.upper,n),e(this.arms.right.upper,n);const s=((a=t.bottom)==null?void 0:a.colour)??3884626;e(this.legs.left.leg,s),e(this.legs.right.leg,s);const r=((c=t.shoes)==null?void 0:c.colour)??2764083;if(e(this.legs.left.shoe,r),e(this.legs.right.shoe,r),this.hat&&(this.head.remove(this.hat),this.hat=null),t.head){const l=this.scale;if(this.hat=an(.3*l,.08*l,.3*l,t.head.colour),this.hat.position.y=.33*l,t.head.id==="cap"){const h=an(.28*l,.03*l,.14*l,t.head.colour);h.position.set(0,-.03*l,.2*l),this.hat.add(h)}this.head.add(this.hat)}if(this.bag&&(this.hips.remove(this.bag),this.bag=null),t.bag){const l=this.scale;this.bag=an(.32*l,.4*l,.16*l,t.bag.colour),this.bag.position.set(0,.3*l,-.2*l),this.hips.add(this.bag)}}setFirstPerson(t){this.firstPerson=t,this.head.visible=!t,this.neck.visible=!t,this.torso.visible=!t,this.arms.left.pivot.visible=!t,this.arms.right.pivot.visible=!t,this.legs.left.pivot.visible=!t,this.legs.right.pivot.visible=!t,this.bag&&(this.bag.visible=!t),this._applyHeldVisibility()}setHeld(t=[]){var r;const e=Array.isArray(t)?t.slice(0,4):[],n=e.map(o=>`${o.id}:${o.colour}:${o.shape||""}`).join("|");if(n===this._heldSig)return;this._heldSig=n;for(const o of this._held)(r=o.parent)==null||r.remove(o);this._held=[];const s=this.scale;e.forEach((o,a)=>{const c=a===1?"left":"right",l=this.arms[c].grip,h=Sv(o.shape)||!!o.big,u=On(o.shape,o.colour??13421772);u.scale.setScalar(s),u.position.set(0,h?-.16*s:-.02*s-(a>>1)*.11*s,h?.05*s:.075*s),h&&(u.rotation.x=.24),l.add(u),this._held.push(u)}),this._applyHeldVisibility()}_applyHeldVisibility(){for(const t of["left","right"]){const e=this.arms[t].grip;e.visible=!0,this.firstPerson?(e.parent!==this.hips&&this.hips.add(e),e.position.set((t==="left"?-1:1)*.22*this.scale,.34*this.scale,.34*this.scale)):e.parent!==this.arms[t].pivot&&(this.arms[t].pivot.add(e),e.position.set(0,-.6*this.scale,0))}}update(t,e=0,n={}){const s=e>.2;if(this.phase+=t*(s?4.2+e*1.1:2.2),n.sitting){this.legs.left.pivot.rotation.x=-1.4,this.legs.right.pivot.rotation.x=-1.4,this.arms.left.pivot.rotation.x=-.5,this.arms.right.pivot.rotation.x=-.5,this.hips.position.y=.5*this.scale;return}if(n.sleeping){this.group.rotation.z=Math.PI/2*.98,this.hips.position.y=.3*this.scale;return}this.group.rotation.z=0,this.hips.position.y=.84*this.scale+(s?Math.abs(Math.sin(this.phase))*.02:0);const r=s?Math.sin(this.phase)*Math.min(.85,.28+e*.14):Math.sin(this.phase)*.03;this.legs.left.pivot.rotation.x=r,this.legs.right.pivot.rotation.x=-r,this.arms.left.pivot.rotation.x=-r*.75,this.arms.right.pivot.rotation.x=r*.75,this.arms.left.pivot.rotation.z=.06,this.arms.right.pivot.rotation.z=-.06;const o=n.tired?.16:0;this.torso.rotation.x=o,this.head.rotation.x=o*.6}fidget(t){this.arms.left.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.arms.right.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.head.rotation.y=(Math.random()-.5)*t*.4}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}}const vh=1.5,Ev=.3,yh=.3,wv=.34,bv=4.5,Tv={queue_1:Math.PI,queue_2:Math.PI,queue_3:Math.PI,queue_4:Math.PI,collect_wait:Math.PI,collect_pickup:Math.PI,kiosk_1:-Math.PI/2,kiosk_2:-Math.PI/2,seat_1:-Math.PI/2,seat_2:-Math.PI/2,seat_3:-Math.PI/2,seat_4:-Math.PI/2,seat_5:-Math.PI/2,seat_6:-Math.PI/2,seat_7:-Math.PI/2},ra=7,Av=14;class Rv{constructor(t){this.game=t,this.scene=t.renderer.scene,this._bodies=new Map,this._doorList=[],this._tables=new Map,this._buildLocators(),t.slice=this}tableOf(t){for(const[e,n]of this._tables)if(n===t)return e;return null}seatedTable(t){const e=this.tableOf(t);if(e==null)return null;const n=this._bodies.get(t);return n&&n.sitting?e:null}_freeTable(){for(let t=1;t<=ra;t++)if(!this._tables.has(t))return t;return null}_buildLocators(){this._locators=[];for(let t=1;t<=ra;t++){const e=new Qt,n=new ht(new Gt(.035,.115,.022),new Mi({color:11026479}));n.position.y=.058,n.castShadow=!0,e.add(n);const s=document.createElement("canvas");s.width=64,s.height=40;const r=new Wn(s);r.colorSpace=Ce;const o=new Vn({map:r,transparent:!0});for(const a of[0,Math.PI]){const c=new ht(new ke(.07,.044),o);c.position.set(0,.075,a===0?.013:-.013),c.rotation.y=a,e.add(c)}e.visible=!1,this.scene.add(e),this._locators.push({g:e,canvas:s,tex:r,shownId:null})}}_syncLocators(){const t=this.game.shift.rules.orders;for(let e=1;e<=ra;e++){const n=this._locators[e-1],s=this._tables.get(e),r=s!=null?t.get(s):null,o=!!r&&r.state!=="served";if(n.g.visible=o,!o)continue;const a=this.spot(`table_${e}`);if(n.g.position.set(a.x-.24,.745,a.z-.2),n.shownId!==s){n.shownId=s;const c=n.canvas.getContext("2d");c.clearRect(0,0,64,40),c.fillStyle="#f4efe4",c.font="bold 26px Segoe UI, system-ui, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("#"+s,32,21),n.tex.needsUpdate=!0}}}bodies(){return this._doorList}atTill(t){const e=this._bodies.get(t);return!!e&&e.goalName==="queue_1"&&e.path.length===0}spot(t){return this.game.world.spots[t]}update(t){if(t>0&&this.game.mode===qe.PLAY){this._sync(t);for(const e of this._bodies.values())this._move(e,t);this._separate(),this._syncLocators(),this._doorList.length=0;for(const e of this._bodies.values())this._doorList.push(e),e.avatar.update(t,e.speed,{sitting:!!e.sitting})}}_sync(t){const e=this.game.shift.rules.orders;for(const n of e.all()){if(n.source==="drivethru")continue;let s=this._bodies.get(n.id);if(n.state==="served"){if(!s||s.table!=null&&!s.leaving&&(s.sitting=!0,s.eat??(s.eat=Av+n.id%7*4),s.eat-=t,s.eat>0))continue;this._leave(s);continue}s||(s=this._spawn(n)),!s.leaving&&(n.source==="counter"?this._counterChoreo(s,n,e):this._kioskChoreo(s,n,t))}for(const n of this._bodies.values())e.get(n.id)||this._leave(n)}_counterChoreo(t,e,n){if(e.state==="queued"){const s=n.counterQueue().indexOf(e),r=Math.min(s+1+(n.ordering()?1:0),4);this._stand(t,`queue_${r}`)}else e.state==="ordering"?this._stand(t,"queue_1"):this._waitChoreo(t,e)}_kioskChoreo(t,e,n){t.phase==="arrive"?(this._stand(t,t.kioskSpot),!t.path.length&&t.goalName===t.kioskSpot&&(t.phase="ordering",t.dwell=bv)):t.phase==="ordering"?(t.dwell-=n,t.dwell<=0&&(t.phase="waiting")):this._waitChoreo(t,e)}_waitChoreo(t,e){if(e.state==="bagged"){t.sitting=!1,this._stand(t,"collect_pickup"),!t.path.length&&t.goalName==="collect_pickup"&&!t.collected&&(t.collected=!0,this.game.shift.rules.collect(e.id,"customer"),t.avatar.setHeld([{id:"bag",shape:"bag",colour:14272934}]));return}if(e.service==="dinein"){if(t.table==null){const n=this._freeTable();if(n==null){this._stand(t,"collect_wait");return}t.table=n,this._tables.set(n,e.id)}this._stand(t,`seat_${t.table}`),t.sitting=!t.path.length&&t.goalName===`seat_${t.table}`;return}this._stand(t,"collect_wait")}_spawn(t){const e=mh[t.look%mh.length],n=new Su({skin:ce.skinTones[e.skin%ce.skinTones.length],hair:ce.hairTones[e.hair%ce.hairTones.length],hairStyle:e.hairStyle,height:e.height,build:e.build});n.applyOutfit({top:{colour:e.top},bottom:{colour:e.bottom},shoes:{colour:2764083}});const s=this.spot("entry_out");n.group.position.set(s.x,0,s.z),this.scene.add(n.group);const r={id:t.id,avatar:n,pos:n.group.position,facing:Math.PI,speed:0,path:[],goalName:null,leaving:!1,phase:"arrive",dwell:0,kioskSpot:t.id%2?"kiosk_1":"kiosk_2"};return this._bodies.set(t.id,r),r}_despawn(t){this._freeUp(t),this.scene.remove(t.avatar.group),t.avatar.dispose(),this._bodies.delete(t.id)}_freeUp(t){t.table!=null&&(this._tables.delete(t.table),t.table=null),t.sitting=!1}_stand(t,e){t.goalName!==e&&(t.goalName=e,t.path=this._route(t,e))}_leave(t){t.leaving||(this._freeUp(t),t.leaving=!0,t.goalName="entry_out",t.path=this._route(t,"entry_out"))}_route(t,e){const n=this.spot(e),s=[],r=t.pos,o=r.x<-8.3&&r.z>3.5,a=r.z<3.5;return e==="entry_out"?(o&&s.push(this.spot("kiosk_gate")),(o||a)&&s.push(this.spot("aisle")),s.push(this.spot("entry"))):e.startsWith("kiosk")?(!a&&!o&&s.push(this.spot("aisle")),s.push(this.spot("kiosk_gate"))):n.z<3.5&&o?s.push(this.spot("kiosk_gate")):n.z<3.5&&!a&&s.push(this.spot("aisle")),s.push(n),s}_move(t,e){const n=t.path[0];if(!n){const c=t.goalName&&this.spot(t.goalName);if(c){const h=Math.hypot(c.x-t.pos.x,c.z-t.pos.z),u=this.game.player.position,d=Math.hypot(c.x-u.x,c.z-u.z)<.6;if(h>.55&&!d){t.path=[c];return}}t.speed=0;const l=Tv[t.goalName];l!==void 0&&(t.facing=l),t.avatar.group.rotation.y=t.facing;return}const s=n.x-t.pos.x,r=n.z-t.pos.z,o=Math.hypot(s,r);if(o<Ev){t.path.shift(),!t.path.length&&t.leaving&&this._despawn(t);return}const a=Math.min(o,vh*e);t.pos.x+=s/o*a,t.pos.z+=r/o*a,t.facing=Math.atan2(s,r),t.avatar.group.rotation.y=t.facing,t.speed=vh}_separate(){const t=[...this._bodies.values()];for(let e=0;e<t.length;e++){if(t[e].sitting)continue;for(let l=e+1;l<t.length;l++){const h=t[e],u=t[l];if(u.sitting)continue;let d=u.pos.x-h.pos.x,f=u.pos.z-h.pos.z,g=Math.hypot(d,f);const _=yh*2;if(g>=_)continue;g<1e-4&&(d=1,f=0,g=1);const p=(_-g)/2;h.pos.x-=d/g*p,h.pos.z-=f/g*p,u.pos.x+=d/g*p,u.pos.z+=f/g*p}const n=this.game.player.position,s=t[e];let r=s.pos.x-n.x,o=s.pos.z-n.z,a=Math.hypot(r,o);const c=yh+wv;a<c&&(a<1e-4&&(r=1,o=0,a=1),s.pos.x+=r/a*(c-a),s.pos.z+=o/a*(c-a))}}}const Je={x:gs.x,y:ut.benchH+.045,z:gs.z},Mh={z:ut.z1-.15,y:ut.benchH+.002},Cv=1.1,Pv={heel:.02,smear:.005,chips:.01,leaf:.014,slice:.011,flat:.006,disc:.018,crown:.036},Lv=.72;class Dv{constructor(t){this.game=t;const e=t.renderer.scene;this.group=new Qt,this.group.name="build-board",e.add(this.group),this._sig=null,this._mats=[],this._piles=[],this._pilePos=[],this._pileOrderId=null,this._parcel=new Qt;const n=new ht(new Gt(.115,.055,.115),new Mi({color:15262418}));n.castShadow=!0;const s=new ht(new Gt(.118,.016,.05),new Mi({color:11026479}));s.position.y=.02,this._parcel.add(n,s),this._parcel.visible=!1,e.add(this._parcel),this.slidingId=null,this._slide=null,this._fixturePos={};for(const r of t.world.activeInteractables())r.id==="pod_toaster"?this._fixturePos.bun=r.pos:r.id==="pod_uhc"?(this._fixturePos.patty=r.pos,this._fixturePos.fillet=r.pos):r.id.startsWith("pod_gun_")?this._fixturePos[r.id.slice(8)]=r.pos:r.id.startsWith("pod_bin_")?this._fixturePos[r.id.slice(8)]=r.pos:r.id==="landing_handover"?this._landingPos=r.pos:r.id==="till_order"&&(this._tillPos=r.pos);this._pulses=[];for(let r=0;r<6;r++){const o=new ht(new ke(.16,.16),new Vn({color:16777215,transparent:!0,opacity:0,blending:aa,depthWrite:!1}));o.visible=!1,o.rotation.x=-.4,e.add(o),this._pulses.push({mesh:o,life:0})}this._bunHalf=On("bun",Ei.bun.colour),this._bunHalf.visible=!1,e.add(this._bunHalf),this._eject=null,this._wire()}_wire(){const t=this.game.bus,e=this.game.audio,n=s=>s?{at:{x:s.x,y:s.y,z:s.z}}:{};t.on(_e.ORDER_STEP,({added:s})=>{const r=this._fixturePos[s],o=Ei[s];r&&o&&this._pulse(r,o.colour),s==="bun"&&(this._eject={t:0}),e.play("item_place",{...n(r),rate:.94+Math.random()*.12})}),t.on(_e.POD_REFUSED,()=>{e.play("wrong_item",n({x:ut.cx,y:1.2,z:ut.cz}))}),t.on(_e.ORDER_BUILT,()=>{e.play("item_pickup",n({x:Je.x,y:1,z:Je.z}))}),t.on(_e.ORDER_WRAPPED,()=>{e.play("item_place",{...n({x:Je.x,y:1,z:Je.z}),rate:.8})}),t.on(_e.ORDER_READY,({id:s})=>{this.slidingId=s,this._slide={t:0},e.play("item_drop",{...n({x:fe.x0,y:1,z:fe.z0}),rate:1.15})}),t.on(_e.ORDER_SERVED,()=>{e.play("order_complete",n(this._landingPos))}),t.on(_e.COUNTER_TAKEN,()=>e.play("order_taken",n(this._tillPos))),t.on(_e.COUNTER_PAID,()=>e.play("purchase",n(this._tillPos))),t.on(_e.ORDER_OFFERED,({source:s})=>{var r;if(s==="kiosk"){const o=(r=this.game.world.spots)==null?void 0:r.kiosk_1;e.play("kiosk_order",n(o&&{x:o.x,y:1.4,z:o.z}))}})}_pulse(t,e){const n=this._pulses.find(s=>s.life<=0)||this._pulses[0];n.life=.35,n.mesh.material.color.set(e),n.mesh.position.set(t.x,t.y+.06,t.z+.02),n.mesh.visible=!0}update(t){this._syncStack(),this._animate(t)}_syncStack(){var o;const t=this.game.shift.rules.orders.active(),e=t?`${t.id}:${t.step}:${t.state}`:null;if(e===this._sig)return;this._sig=e;for(const a of[...this.group.children])this.group.remove(a);for(const a of this._mats)a.dispose();if(this._mats=[],this._piles=[],this._parcel.visible=this._slide!==null,(!t||this._pileOrderId!==t.id)&&(this._pilePos=[],this._pileOrderId=(t==null?void 0:t.id)??null),!t||t.state==="ready")return;if(t.state==="wrapped"){this._parcel.visible=!0,this._parcel.position.set(Je.x,Je.y+.028,Je.z),this._parcel.rotation.set(0,.12,0);return}const n=t.items.map(a=>Ds[a].sequence.length);let s=0,r=0;for(let a=0;a<n.length&&s<t.step;a++){const c=s,l=Math.min(t.step-c,n[a]);if(s+=n[a],l<=0)break;const h=l===n[a],u=new Qt,d=(p,m)=>((t.id*7+(c+p)*13)%5-2)*.003*m;let f=0;for(let p=0;p<l;p++){const m=Ei[t.sequence[c+p]];if(!m)continue;const y=Pv[m.shape]??.012;this._layer(u,m,f+y/2,d(p,1),d(p,-1)),f+=y}if(h){const p=On("bun",Ei.bun.colour);this._own(p),p.position.y=f,u.add(p)}let g;if(h)g=new D(Je.x+(r%2?.075:-.075)*(n.length>1?1:0),Je.y,Je.z),r++;else{const p=t.sequence[c+l-1],m=((o=this._fixturePos[p])==null?void 0:o.x)??Je.x;g=new D(m,Mh.y,Mh.z)}const _=this._pilePos[a];u.position.copy(_||g),this.group.add(u),this._piles.push({group:u,target:g,item:a})}}_layer(t,e,n,s,r){const o=(a,c=1,l=1,h=1,u=0,d=0)=>{this._own(a),a.scale.multiply(new D(c,l,h)),a.position.set(s+u,n,r+d),t.add(a)};switch(e.shape){case"smear":o(On("flat",e.colour),.62,.5,.62);break;case"chips":o(On("chip",e.colour),1,1,1,-.018,-.008),o(On("chip",e.colour),1,1,1,.016,-.014),o(On("chip",e.colour),1,1,1,.004,.019);break;case"leaf":o(On("blob",e.colour),1.5,.38,1.5);break;case"slice":o(On("disc",e.colour),.92,.6,.92);break;default:o(On(e.shape,e.colour))}}_own(t){t.traverse(e=>{e.material&&this._mats.push(e.material)})}_animate(t){var e,n;for(const s of this._piles){const r=s.group,o=s.target,a=o.x-r.position.x,c=o.y-r.position.y,l=o.z-r.position.z,h=Math.hypot(a,c,l);if(h>5e-4){const u=Math.min(h,Cv*t);r.position.x+=a/h*u,r.position.y+=c/h*u,r.position.z+=l/h*u}((e=this._pilePos)[n=s.item]||(e[n]=new D)).copy(r.position)}for(const s of this._pulses)s.life<=0||(s.life-=t,s.mesh.material.opacity=Math.max(0,s.life/.35)*.9,s.life<=0&&(s.mesh.visible=!1));if(this._eject){const s=this._fixturePos.bun;this._eject.t+=t/.45;const r=Math.min(1,this._eject.t);s&&(this._bunHalf.visible=!0,this._bunHalf.position.set(s.x,1.46-.5*r*r,ut.cz-.05+.48*r),this._bunHalf.rotation.x=.42*(1-r)),r>=1&&(this._eject=null,this._bunHalf.visible=!1)}if(this._slide){this._slide.t+=t/Lv;const s=Math.min(1,this._slide.t),r=this.game.shift.rules.orders.ready(),o=Math.max(0,Math.min(r.findIndex(_=>_.id===this.slidingId),3)),a={x:Es.x0+.22+o*.42,y:Es.y+.03,z:Es.z},c=[{x:Je.x,y:Je.y+.03,z:Je.z},{x:fe.x0,y:1,z:fe.z0},{x:fe.x1,y:.93,z:fe.z1},a],l=[.18,.62,1];let h=0;for(;h<2&&s>l[h];)h++;const u=h===0?0:l[h-1],d=(s-u)/(l[h]-u),f=c[h],g=c[h+1];this._parcel.visible=!0,this._parcel.scale.setScalar(1.25-.25*s),this._parcel.position.set(f.x+(g.x-f.x)*d,f.y+(g.y-f.y)*d,f.z+(g.z-f.z)*d),this._parcel.rotation.y+=t*2.2,s>=1&&(this._slide=null,this.slidingId=null,this._parcel.visible=!1,this._parcel.rotation.set(0,0,0),this._parcel.scale.setScalar(1))}}}const cn=.34,Sh=1.75,Iv=1.62,Uv=22,oa=.42,Nv={top:{colour:3817286},bottom:{colour:2303531},shoes:{colour:2764083},head:{id:"cap",colour:11026479}};class Ov{constructor(t){var n,s,r;this.game=t,this.position=new D(0,0,0),this.velocity=new D,this.facing=0,this.onGround=!0,this.state="normal",this.eyeHeight=Iv,this.horizontalSpeed=0,this.avatar=new Su({skin:(n=ce.skinTones)==null?void 0:n[1],hair:(s=ce.hairTones)==null?void 0:s[1],hairStyle:"short",height:1,build:1}),this.avatar.applyOutfit(Nv),t.renderer.scene.add(this.avatar.group);const e=(r=t.world.spots)==null?void 0:r.spawn;this.teleport(e?e.clone():new D(0,0,14)),this.walkSpeed=4.6,this.runSpeed=9}teleport(t){this.position.copy(t),this.velocity.set(0,0,0),this.avatar.group.position.copy(t)}get isBusy(){return this.state!=="normal"}update(t){this.state==="normal"&&this.game.mode===qe.PLAY?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this.state==="normal"&&this._applyGravity(t)),this.avatar.group.position.copy(this.position),this.avatar.group.rotation.y=this.facing,this.avatar.update(t,this.horizontalSpeed,{sitting:!1,sleeping:!1,tired:!1})}_move(t){const e=this.game.input,n=e.axis(),{forward:s,right:r}=this.game.camera.basis(),o=e.isDown("sprint"),a=o?this.runSpeed:this.walkSpeed,c=new D().addScaledVector(s,n.y).addScaledVector(r,n.x);c.lengthSq()>0?(c.normalize(),this.facing=Math.atan2(c.x,c.z),this.game.camera.fovBoost=o?5:0):this.game.camera.fovBoost=0;const l=c.multiplyScalar(a),h=this.onGround?14:3;this.velocity.x+=(l.x-this.velocity.x)*Math.min(1,h*t),this.velocity.z+=(l.z-this.velocity.z)*Math.min(1,h*t),e.wasPressed("jump")&&this.onGround&&(this.velocity.y=6.2,this.onGround=!1),this._applyGravity(t),this._collide(t);const u=this._floorUnder();this.position.y<u&&(this.position.y=u,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_floorUnder(){const t=this.game.world,{x:e,z:n,y:s}=this.position;let r=t.groundHeight(e,n);for(const o of t.query(this.position,cn+.5))o.walkable&&(e<o.min.x-cn||e>o.max.x+cn||n<o.min.z-cn||n>o.max.z+cn||o.max.y<=s+oa&&o.max.y>r&&(r=o.max.y));return r}_insideSolid(){const t=this.game.world,e=cn-.06;for(const n of t.query(this.position,cn+.3)){if(this.position.y+Sh<n.min.y||this.position.y>n.max.y||n.max.y<=this.position.y+oa)continue;const s=Math.max(n.min.x,Math.min(this.position.x,n.max.x)),r=Math.max(n.min.z,Math.min(this.position.z,n.max.z)),o=this.position.x-s,a=this.position.z-r;if(o*o+a*a<e*e)return!0}return!1}_applyGravity(t){this.velocity.y-=Uv*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder();this.position.y<=e&&(this.position.y=e,this.velocity.y=0,this.onGround=!0)}_collide(t){const e=this.game.world;this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let s=0;s<4;s++){let r=!1;for(const o of e.query(this.position,cn+.6)){if(this.position.y+Sh<o.min.y||this.position.y>o.max.y||o.max.y<=this.position.y+oa)continue;const a=Math.max(o.min.x,Math.min(this.position.x,o.max.x)),c=Math.max(o.min.z,Math.min(this.position.z,o.max.z));let l=this.position.x-a,h=this.position.z-c;const u=l*l+h*h;if(u>=cn*cn)continue;if(u>1e-8){const f=Math.sqrt(u),g=cn-f;l/=f,h/=f,this.position.x+=l*g,this.position.z+=h*g}else{const f=[[this.position.x-o.min.x,-1,0],[o.max.x-this.position.x,1,0],[this.position.z-o.min.z,0,-1],[o.max.z-this.position.z,0,1]].sort((g,_)=>g[0]-_[0])[0];l=f[1],h=f[2],this.position.x+=l*(f[0]+cn),this.position.z+=h*(f[0]+cn)}const d=this.velocity.x*l+this.velocity.z*h;d<0&&(this.velocity.x-=l*d,this.velocity.z-=h*d),r=!0}if(!r)break}this._insideSolid()?(this._lastSafe&&this.position.copy(this._lastSafe),this.velocity.x=0,this.velocity.z=0):(this._lastSafe||(this._lastSafe=new D)).copy(this.position);const n=180;this.position.x=Rn.clamp(this.position.x,-n,n),this.position.z=Rn.clamp(this.position.z,-n,n)}setState(t){this.state=t,this.game.bus.emit("player:state",{state:t})}serialize(){return{position:this.position.toArray(),facing:this.facing}}load(t){t&&(this.teleport(new D().fromArray(t.position)),this.position.y=Math.max(this.position.y,this._floorUnder()),this.avatar.group.position.copy(this.position),this.facing=t.facing||0)}}class Fv{constructor(t){this.game=t;const e=document.getElementById("ui");e.innerHTML=`
      <div id="crosshair"></div>
      <div id="prompt"><span class="key">E</span><span id="prompt-label"></span></div>
      <div id="toast"></div>
      <div id="pause">
        <h1>BURGER BARN</h1>
        <p>Click to walk in &middot; WASD to move &middot; E to use &middot; Shift to run &middot; V for camera</p>
      </div>`,this.prompt=document.getElementById("prompt"),this.promptLabel=document.getElementById("prompt-label"),this.toastEl=document.getElementById("toast"),this.pauseEl=document.getElementById("pause"),this._toastTimer=null,this.pauseEl.addEventListener("click",()=>t.setMode(qe.PLAY,"resume")),t.bus.on("game:mode",({mode:n})=>{this.pauseEl.classList.toggle("hidden",n===qe.PLAY)}),t.bus.on("interaction:target",({label:n})=>this.showPrompt(n))}showPrompt(t){if(!t){this.prompt.style.display="none";return}this.promptLabel.textContent=t,this.prompt.style.display="block"}toast(t,e=2600){this.toastEl.textContent=t,this.toastEl.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this.toastEl.style.opacity="0"},e)}update(){}}const qe={PLAY:"play",MENU:"menu"};class zv{constructor(t,e={}){this.canvas=t,this.seed=e.seed||"burgerbarn",this.bus=new Lu,this.rng=new so(this.seed),this.clock=new Du(this.bus),this.input=new Nu(this.bus,t),this.audio=new Vu(this),this.mode=qe.MENU,this.running=!1,this._accum=0,this._last=0,this.fixedStep=1/60}build(){return this.renderer=new S_(this.canvas,this),this.world=new Xx(this),this.world.generate(),this.player=new Ov(this),this.camera=new w_(this),this.interaction=new jx(this),this.shift=new rv(this),this.customers=new Rv(this),this.buildBoard=new Dv(this),this.ui=new Fv(this),this.camera.setMode("first"),this.camera.yaw=Math.PI,this._wireGlobalInput(),this.input.enabled=!1,this.bus.emit("game:ready",{game:this}),this}_wireGlobalInput(){this.bus.on("action:camera",()=>{this.mode===qe.PLAY&&this.camera.cycle()}),this.bus.on("input:pointerlock",({locked:t})=>{!t&&this.mode===qe.PLAY&&this.setMode(qe.MENU,"pause")})}setMode(t,e=""){if(this.mode===t)return;const n=this.mode;this.mode=t,this.clock.paused=t===qe.MENU,this.input.enabled=t===qe.PLAY,t===qe.PLAY?this.input.requestLock():n===qe.PLAY&&this.input.locked&&this.input.releaseLock(),this.bus.emit("game:mode",{mode:t,prev:n,reason:e})}start(){this.running=!0,this._last=performance.now();const t=e=>{if(!this.running)return;requestAnimationFrame(t);let n=(e-this._last)/1e3;this._last=e,n>.25&&(n=.25),this.update(n),this.render(n)};requestAnimationFrame(t)}update(t){this.mode===qe.PLAY&&this.clock.update(t),this._accum+=t;let e=0;for(;this._accum>=this.fixedStep&&e++<5;)this._accum-=this.fixedStep,this.player.update(this.fixedStep);this.camera.update(t),this.world.update(t),this.interaction.update(t),this.shift.update(t),this.buildBoard.update(t),this.customers.update(t),this.ui.update(t),this.audio.update(t),this.input.endFrame()}render(t){this.renderer.render(this.camera.active,t)}}const Kr=document.getElementById("scene"),Qe=new zv(Kr,{seed:new URLSearchParams(location.search).get("seed")||"burgerbarn"});Qe.build();Qe.start();window.game=Qe;window.shot=async function(t="shot",e=null){if(e){if(e.pos){const c=Qe.player.position.clone();c.set(e.pos[0],e.pos[1]??0,e.pos[2]),Qe.player.teleport(c)}e.mode&&Qe.camera.setMode(e.mode),e.yaw!==void 0&&(Qe.camera.yaw=e.yaw),e.pitch!==void 0&&(Qe.camera.pitch=e.pitch)}const n=1280,s=720;(Kr.width!==n||Kr.height!==s)&&(Qe.renderer.renderer.setSize(n,s,!1),Qe.camera.active.aspect=n/s,Qe.camera.active.updateProjectionMatrix());const r=Math.max(1,(e==null?void 0:e.settle)??90);for(let c=0;c<r;c++)Qe.update(1/60);if(e!=null&&e.free){const c=Qe.camera.active;c.position.set(...e.free.pos),c.lookAt(...e.free.look)}Qe.render(0);const o=Kr.toDataURL("image/png");return(await fetch("http://localhost:5199/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:o})})).json()};
