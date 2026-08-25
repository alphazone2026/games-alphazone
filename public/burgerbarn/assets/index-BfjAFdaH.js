(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function ru(n){let t=1779033703^n.length;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function au(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class $r{constructor(t="lifesim"){this.seed=String(t),this._next=au(ru(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new $r(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const i=this.shuffle([...t]);return i.slice(0,Math.min(e,i.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(this._next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,a])=>({value:r,weight:a}));let i=0;for(const r of e)i+=Math.max(0,r.weight??1);if(i<=0)return e[0];let s=this._next()*i;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(t,e,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(t,e))))}}class ou{constructor(){this._handlers=new Map,this._log=[]}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this.off(t,e)}once(t,e){const i=this.on(t,s=>{i(),e(s)});return i}off(t,e){var i;(i=this._handlers.get(t))==null||i.delete(e)}emit(t,e={}){this._log.push({type:t,payload:e,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(t);if(i)for(const o of[...i])o(e,t);const s=t.split(":")[0]+":*",r=this._handlers.get(s);if(r)for(const o of[...r])o(e,t);const a=this._handlers.get("*");if(a)for(const o of[...a])o(e,t)}recent(t=40){return this._log.slice(-t)}}class cu{constructor(t,e={}){this.bus=t,this.minuteOfDay=e.minuteOfDay??10*60+30,this.dayIndex=e.dayIndex??0,this.scale=e.scale??.3,this.paused=!1,this.playtimeSeconds=0,this._lastHour=Math.floor(this.minuteOfDay/60)}get hour(){return Math.floor(this.minuteOfDay/60)}get minute(){return Math.floor(this.minuteOfDay%60)}get dayFraction(){return this.minuteOfDay/1440}get dayOfYear(){return this.dayIndex%364}get timeLabel(){const t=this.hour,e=this.minute,i=t<12?"am":"pm";return(t%12===0?12:t%12)+":"+String(e).padStart(2,"0")+i}update(t){this.paused||(this.playtimeSeconds+=t,this.advance(t*this.scale))}advance(t){if(t<=0)return;let e=t;for(;e>0;){const i=60-this.minuteOfDay%60,s=Math.min(e,i);this.minuteOfDay+=s,e-=s,this.minuteOfDay>=1440&&(this.minuteOfDay-=1440,this.dayIndex++,this.bus.emit("time:day",{dayIndex:this.dayIndex,clock:this}));const r=Math.floor(this.minuteOfDay/60)%24;r!==this._lastHour&&(this._lastHour=r,this.bus.emit("time:hour",{hour:r,clock:this}))}this.bus.emit("time:minute",{clock:this})}skipTo(t,e=0){const i=t*60+e,s=i>this.minuteOfDay?i-this.minuteOfDay:1440-this.minuteOfDay+i;return this.advance(s),s}serialize(){return{minuteOfDay:this.minuteOfDay,dayIndex:this.dayIndex,playtimeSeconds:this.playtimeSeconds}}load(t){t&&(this.minuteOfDay=t.minuteOfDay,this.dayIndex=t.dayIndex,this.playtimeSeconds=t.playtimeSeconds||0,this._lastHour=this.hour)}}const lu={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],cancel:["Escape"]},hu=2e3;class uu{constructor(t,e){this.bus=t,this.dom=e,this.bindings={...lu},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",t=>{if(t.repeat)return;Object.values(this.bindings).some(i=>i.includes(t.code))&&t.code!=="Escape"&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code),this.bus.emit("input:key",{code:t.code});for(const[i,s]of Object.entries(this.bindings))s.includes(t.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",t=>this._failLock(t)),window.addEventListener("mousemove",t=>{this.locked&&(this.mouse.dx+=t.movementX,this.mouse.dy+=t.movementY)}),window.addEventListener("mousedown",t=>{this.pressed.add("Mouse"+t.button),this.down.add("Mouse"+t.button)}),window.addEventListener("mouseup",t=>this.down.delete("Mouse"+t.button)),window.addEventListener("wheel",t=>{this.bus.emit("input:wheel",{delta:Math.sign(t.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this.lockPending;this._settleLock(),e&&(this.locked=!1,console.warn("[input] pointer lock request refused",t||""),this.bus.emit("input:pointerlockfailed",{error:t||null}))}requestLock(){var e,i;if(this.locked||this.lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},hu);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=t==null?void 0:t.catch)==null||i.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this.locked=!1,(t=document.exitPointerLock)==null||t.call(document)}isDown(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.down.has(e)):!1}wasPressed(t){return this.enabled?(this.bindings[t]||[]).some(e=>this.pressed.has(e)):!1}axis(){let t=0,e=0;this.isDown("forward")&&(e+=1),this.isDown("back")&&(e-=1),this.isDown("right")&&(t+=1),this.isDown("left")&&(t-=1);const i=Math.hypot(t,e);return i>1?{x:t/i,y:e/i}:{x:t,y:e}}consumeMouse(){const t={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,t}endFrame(){this.pressed.clear()}}const du={ui:{gain:.8,duckable:!0},world:{gain:.9,duckable:!0},ambient:{gain:.45,duckable:!0},warn:{gain:1,duckable:!1}},fu={ref:2,max:26,panWidth:.8,panNear:1.6},pu={volume:.5,muted:!1},Ec={preshift:{bus:"ui",gain:.45,layers:[{src:"tone",wave:"sine",freq:440,at:0,dur:.5,a:.08,d:.1,s:.6,r:.28,peak:.7},{src:"tone",wave:"sine",freq:660,at:.18,dur:.55,a:.08,d:.1,s:.6,r:.32,peak:.5}]},clock_on:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"square",freq:1760,at:0,dur:.05,a:.002,d:.02,s:0,r:.02,peak:.25,filter:{type:"lowpass",freq:4e3,q:.7}},{src:"tone",wave:"sine",freq:523.25,at:.1,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:659.25,at:.21,dur:.2,a:.006,d:.06,s:.5,r:.12,peak:.7},{src:"tone",wave:"sine",freq:783.99,at:.32,dur:.42,a:.006,d:.08,s:.5,r:.3,peak:.8}]},clock_off:{bus:"ui",gain:.55,layers:[{src:"tone",wave:"sine",freq:783.99,at:0,dur:.24,a:.008,d:.08,s:.5,r:.14,peak:.7},{src:"tone",wave:"sine",freq:523.25,at:.16,dur:.6,a:.01,d:.12,s:.4,r:.44,peak:.7},{src:"tone",wave:"triangle",freq:261.63,at:.16,dur:.62,a:.01,d:.12,s:.4,r:.46,peak:.25}]},door_chime:{bus:"ui",gain:.55,spot:"queue",minGain:.35,layers:[{src:"tone",wave:"sine",freq:587.33,at:0,dur:.85,a:.004,d:.2,s:.3,r:.55,peak:.75},{src:"tone",wave:"sine",freq:783.99,at:.16,dur:1.05,a:.004,d:.22,s:.3,r:.7,peak:.7},{src:"tone",wave:"sine",freq:1567.98,at:.16,dur:.6,a:.004,d:.18,s:.1,r:.36,peak:.1}]},ticket_print:{bus:"world",gain:.8,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.34,a:.004,d:.02,s:.9,r:.05,peak:.55,filter:{type:"bandpass",freq:2600,q:3},lfo:{rate:26,depth:.9,target:"gain"}},{src:"tone",wave:"square",freq:1318.5,at:.34,dur:.07,a:.003,d:.03,s:0,r:.03,peak:.16}]},kiosk_order:{bus:"ui",gain:.75,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.06,a:.002,d:.03,s:0,r:.02,peak:.36,filter:{type:"lowpass",freq:3200,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.09,dur:.1,a:.002,d:.04,s:0,r:.05,peak:.33,filter:{type:"lowpass",freq:3200,q:.7}}]},order_taken:{bus:"world",gain:.6,spot:"counter",layers:[{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.01,s:0,r:.015,peak:.3,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"triangle",freq:659.25,to:987.77,at:.02,dur:.14,a:.004,d:.05,s:.4,r:.08,peak:.45}]},item_place:{bus:"world",gain:.7,layers:[{src:"noise",noise:"brown",at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.3,filter:{type:"lowpass",freq:900,to:320,q:.9}},{src:"tone",wave:"sine",freq:190,to:130,at:0,dur:.1,a:.002,d:.05,s:.1,r:.05,peak:.22,jitter:.06}]},item_pickup:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:620,to:880,at:0,dur:.09,a:.003,d:.04,s:.2,r:.04,peak:.4,jitter:.04},{src:"noise",noise:"white",at:0,dur:.05,a:.002,d:.03,s:0,r:.02,peak:.14,filter:{type:"highpass",freq:1800,q:.8}}]},item_drop:{bus:"world",gain:.45,layers:[{src:"tone",wave:"triangle",freq:520,to:330,at:0,dur:.11,a:.003,d:.05,s:.2,r:.05,peak:.36,jitter:.04}]},wrong_item:{bus:"warn",gain:.62,layers:[{src:"tone",wave:"sawtooth",freq:146.83,at:0,dur:.22,a:.004,d:.04,s:.7,r:.1,peak:.35,filter:{type:"lowpass",freq:900,to:500,q:1.2},lfo:{rate:22,depth:.5,target:"gain"}}]},order_complete:{bus:"ui",gain:.85,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.28,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"square",freq:1567.98,at:.08,dur:.07,a:.002,d:.03,s:0,r:.04,peak:.24,filter:{type:"lowpass",freq:4200,q:.7}},{src:"noise",noise:"brown",at:.17,dur:.2,a:.004,d:.09,s:.15,r:.1,peak:.4,filter:{type:"lowpass",freq:1400,to:380,q:.9}},{src:"tone",wave:"sine",freq:140,to:78,at:.17,dur:.22,a:.003,d:.1,s:.1,r:.1,peak:.35}]},order_lost:{bus:"warn",gain:.55,layers:[{src:"tone",wave:"triangle",freq:392,to:293.66,at:0,dur:.55,a:.008,d:.12,s:.5,r:.36,peak:.55,filter:{type:"lowpass",freq:1600,to:700,q:.9}},{src:"tone",wave:"sine",freq:196,to:146.83,at:0,dur:.58,a:.01,d:.14,s:.5,r:.38,peak:.3}]},grill_lay:{bus:"world",gain:.6,spot:"grill",layers:[{src:"noise",noise:"white",at:0,dur:.9,a:.03,d:.22,s:.35,r:.55,peak:.55,filter:{type:"bandpass",freq:3400,to:1500,q:.8}},{src:"noise",noise:"brown",at:0,dur:.35,a:.004,d:.12,s:.1,r:.18,peak:.3,filter:{type:"lowpass",freq:700,q:1}}]},fryer_drop:{bus:"world",gain:.65,spot:"fryer",layers:[{src:"noise",noise:"brown",at:0,dur:.14,a:.002,d:.06,s:.1,r:.07,peak:.45,filter:{type:"lowpass",freq:1100,to:300,q:1.4}},{src:"tone",wave:"sine",freq:130,to:82,at:0,dur:.16,a:.002,d:.07,s:.1,r:.08,peak:.3},{src:"noise",noise:"white",at:.05,dur:1.2,a:.1,d:.3,s:.4,r:.7,peak:.55,filter:{type:"bandpass",freq:1400,to:3e3,q:.7}}]},fryer_bed:{bus:"ambient",gain:.9,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"pink",a:1.6,d:0,s:1,r:1.2,peak:.9,filter:{type:"bandpass",freq:1900,q:.55}},{src:"noise",noise:"brown",a:2,d:0,s:1,r:1.2,peak:.5,filter:{type:"lowpass",freq:420,q:.7}}]},fryer_active:{bus:"ambient",gain:.85,spot:"fryer",loop:!0,layers:[{src:"noise",noise:"white",a:.7,d:0,s:1,r:.6,peak:.62,filter:{type:"bandpass",freq:2900,q:.8},lfo:{rate:5.5,depth:.35,target:"gain"}}]},grill_bed:{bus:"ambient",gain:.7,spot:"grill",loop:!0,layers:[{src:"noise",noise:"brown",a:1.8,d:0,s:1,r:1.4,peak:.85,filter:{type:"lowpass",freq:300,q:.8}},{src:"tone",wave:"sine",freq:96,a:2,d:0,s:1,r:1.4,peak:.16}]},grill_active:{bus:"ambient",gain:.75,spot:"grill",loop:!0,layers:[{src:"noise",noise:"white",a:.6,d:0,s:1,r:.55,peak:.5,filter:{type:"bandpass",freq:3600,q:.7},lfo:{rate:8.5,depth:.45,target:"gain"}}]},cook_ready:{bus:"world",gain:.7,minGain:.28,layers:[{src:"tone",wave:"sine",freq:2093,at:0,dur:.28,a:.002,d:.09,s:.1,r:.18,peak:.45},{src:"tone",wave:"sine",freq:3136,at:0,dur:.18,a:.002,d:.07,s:.05,r:.1,peak:.16},{src:"tone",wave:"sine",freq:2093,at:.19,dur:.42,a:.002,d:.11,s:.1,r:.3,peak:.45},{src:"tone",wave:"sine",freq:3136,at:.19,dur:.24,a:.002,d:.08,s:.05,r:.14,peak:.16}]},cook_burnt:{bus:"warn",gain:.85,minGain:.7,ducks:{depth:.35,hold:1.1},layers:[{src:"tone",wave:"square",freq:466.16,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.34,filter:{type:"bandpass",freq:1500,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"tone",wave:"square",freq:311.13,at:0,dur:1.1,a:.006,d:.05,s:.85,r:.22,peak:.22,filter:{type:"bandpass",freq:900,q:1.6},lfo:{rate:8.5,depth:.95,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.2,a:.04,d:.3,s:.45,r:.55,peak:.28,filter:{type:"bandpass",freq:5200,to:2600,q:.6}}]},warmer_expired:{bus:"warn",gain:.4,minGain:.22,layers:[{src:"tone",wave:"sine",freq:116,to:92,at:0,dur:.4,a:.006,d:.14,s:.3,r:.24,peak:.45},{src:"noise",noise:"brown",at:0,dur:.3,a:.006,d:.12,s:.1,r:.16,peak:.22,filter:{type:"lowpass",freq:500,to:200,q:1}}]},mop_swish:{bus:"world",gain:.9,layers:[{src:"noise",noise:"pink",at:0,dur:.42,a:.05,d:.1,s:.55,r:.24,peak:.72,filter:{type:"bandpass",freq:1200,to:380,q:.9}},{src:"noise",noise:"pink",at:.4,dur:.44,a:.06,d:.1,s:.55,r:.26,peak:.64,filter:{type:"bandpass",freq:420,to:1100,q:.9}}]},wipe_down:{bus:"world",gain:.8,layers:[{src:"noise",noise:"white",at:0,dur:.26,a:.03,d:.08,s:.5,r:.14,peak:.5,filter:{type:"bandpass",freq:2600,to:1200,q:1.1}},{src:"noise",noise:"white",at:.24,dur:.24,a:.03,d:.08,s:.5,r:.13,peak:.42,filter:{type:"bandpass",freq:1300,to:2400,q:1.1}}]},mess_made:{bus:"world",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.04,s:.1,r:.05,peak:.55,filter:{type:"lowpass",freq:640,to:240,q:1}}]},delivery_call:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:880,at:0,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.14,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:880,at:.32,dur:.13,a:.004,d:.02,s:.9,r:.03,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}},{src:"tone",wave:"square",freq:1174.66,at:.46,dur:.18,a:.004,d:.02,s:.9,r:.08,peak:.24,filter:{type:"lowpass",freq:2600,q:.7}}]},delivery_taken:{bus:"world",gain:.55,spot:"delivery_desk",layers:[{src:"noise",noise:"white",at:0,dur:.38,a:.02,d:.08,s:.6,r:.22,peak:.34,filter:{type:"highpass",freq:1600,q:.8},lfo:{rate:17,depth:.75,target:"gain"}},{src:"tone",wave:"triangle",freq:740,to:988,at:.3,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.3}]},delivery_done:{bus:"ui",gain:.6,layers:[{src:"tone",wave:"triangle",freq:523.25,at:0,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:659.25,at:.12,dur:.14,a:.005,d:.05,s:.4,r:.08,peak:.55},{src:"tone",wave:"triangle",freq:880,at:.24,dur:.42,a:.005,d:.09,s:.4,r:.3,peak:.6},{src:"tone",wave:"sine",freq:1760,at:.24,dur:.3,a:.005,d:.08,s:.2,r:.2,peak:.12}]},violation:{bus:"warn",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:110,at:0,dur:.28,a:.004,d:.04,s:.8,r:.12,peak:.38,filter:{type:"lowpass",freq:700,q:1.4},lfo:{rate:14,depth:.6,target:"gain"}}]},scooter_start:{bus:"world",gain:.55,layers:[{src:"noise",noise:"white",at:0,dur:.3,a:.01,d:.1,s:.3,r:.16,peak:.3,filter:{type:"bandpass",freq:1800,to:700,q:1.2}},{src:"tone",wave:"sawtooth",freq:52,to:128,at:.05,dur:.85,a:.06,d:.1,s:.75,r:.35,peak:.34,filter:{type:"lowpass",freq:620,to:1100,q:1},lfo:{rate:9,depth:.3,target:"gain"}}]},scooter_stop:{bus:"world",gain:.5,layers:[{src:"tone",wave:"sawtooth",freq:122,to:44,at:0,dur:.55,a:.006,d:.1,s:.6,r:.34,peak:.34,filter:{type:"lowpass",freq:900,to:300,q:1},lfo:{rate:7,depth:.35,target:"gain"}}]},promoted:{bus:"ui",gain:.7,layers:[{src:"tone",wave:"square",freq:523.25,at:0,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:659.25,at:.11,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:783.99,at:.22,dur:.12,a:.004,d:.05,s:.4,r:.06,peak:.28,filter:{type:"lowpass",freq:3e3,q:.7}},{src:"tone",wave:"square",freq:1046.5,at:.33,dur:.6,a:.004,d:.12,s:.4,r:.42,peak:.3,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"sine",freq:261.63,at:.33,dur:.65,a:.006,d:.14,s:.4,r:.46,peak:.28}]},purchase:{bus:"ui",gain:.8,layers:[{src:"tone",wave:"square",freq:1046.5,at:0,dur:.06,a:.002,d:.03,s:0,r:.03,peak:.26,filter:{type:"lowpass",freq:3600,q:.7}},{src:"tone",wave:"triangle",freq:2093,at:.12,dur:.16,a:.002,d:.06,s:.1,r:.1,peak:.22},{src:"tone",wave:"triangle",freq:2637,at:.19,dur:.2,a:.002,d:.07,s:.1,r:.13,peak:.18}]},mute_off:{bus:"ui",gain:.5,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.14,a:.004,d:.05,s:.3,r:.08,peak:.5},{src:"tone",wave:"sine",freq:990,at:.1,dur:.22,a:.004,d:.07,s:.3,r:.14,peak:.42}]}},wc=["fryer_bed","grill_bed"],yi=1e-4;class mu{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0),r=this.rng;if(t==="brown"){let a=0;for(let o=0;o<e;o++){const c=r.float()*2-1;a=(a+.02*c)/1.02,s[o]=a*3.5}}else if(t==="pink"){let a=0,o=0,c=0,l=0,h=0,u=0,d=0;for(let f=0;f<e;f++){const g=r.float()*2-1;a=.99886*a+g*.0555179,o=.99332*o+g*.0750759,c=.969*c+g*.153852,l=.8665*l+g*.3104856,h=.55*h+g*.5329522,u=-.7616*u-g*.016898,s[f]=(a+o+c+l+h+u+d+g*.5362)*.11,d=g*.115926}}else for(let a=0;a<e;a++)s[a]=r.float()*2-1;return this.cache.set(t,i),i}}function gu(n,t,e,i,s,r){const a=!!r.loop,o=s+(e.at||0),c=a?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),d=e.s??1,f=Math.max(.005,e.r??.05),g=n.createGain();g.gain.value=yi,g.connect(i);let _,p=null;const m=r.rate??1;if(e.src==="noise")_=n.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=m;else{_=n.createOscillator(),_.type=e.wave||"sine";const D=e.jitter||0,x=D?1+(r.jitterRoll??0)*D:1,y=Math.max(8,(e.freq??440)*x*m);if(p=_.frequency,p.setValueAtTime(y,o),e.to!=null&&!a){const U=Math.max(8,e.to*x*m),F=o+c;e.glide==="lin"?p.linearRampToValueAtTime(U,F):p.exponentialRampToValueAtTime(U,F)}}let M=_,v=null;if(e.filter){const D=n.createBiquadFilter();D.type=e.filter.type||"lowpass",D.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);D.frequency.setValueAtTime(x,o),e.filter.to!=null&&!a&&D.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),o+c),v=D.frequency,M.connect(D),M=D}let E=null,C=null;if(e.lfo&&e.lfo.rate>0){E=n.createOscillator(),E.type="sine",E.frequency.value=e.lfo.rate;const D=n.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));C=n.createGain(),C.gain.value=1-x*.5,D.gain.value=x*.5,E.connect(D),D.connect(C.gain),M.connect(C),M=C}else e.lfo.target==="filter"&&v?(D.gain.value=e.lfo.depth??200,E.connect(D),D.connect(v)):p&&(D.gain.value=e.lfo.depth??20,E.connect(D),D.connect(p));E.start(o)}M.connect(g);const b=g.gain;b.setValueAtTime(yi,o),b.linearRampToValueAtTime(l,o+h);const T=Math.max(yi,l*d);u>0&&b.linearRampToValueAtTime(T,o+h+u);let P=1/0;if(a)_.start(o,e.src==="noise"?r.noiseOffset??0:void 0);else{const D=Math.max(o+h+u,o+c-f);b.setValueAtTime(Math.max(yi,u>0?T:l),D),b.linearRampToValueAtTime(yi,o+c),P=o+c+.02,_.start(o,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(P),E&&E.stop(P)}return{endsAt:P,stop(D){const x=Math.max(D,n.currentTime);try{b.cancelScheduledValues(x),b.setValueAtTime(Math.max(yi,b.value),x),b.linearRampToValueAtTime(yi,x+f),_.stop(x+f+.02),E&&E.stop(x+f+.02)}catch{}}}}function Tc(n,t,e,i,s={}){const r=Math.max(s.when??n.currentTime,n.currentTime),a=!!e.loop,o=[];let c=r;for(const l of e.layers||[]){const h=gu(n,t,l,i,r,{...s,loop:a});h&&(o.push(h),h.endsAt>c&&h.endsAt!==1/0&&(c=h.endsAt))}return{endsAt:a?1/0:c,stop(l=n.currentTime){for(const h of o)h.stop(l)}}}const bc="lifesim.audio",_u=28,xu="KeyN";class vu{constructor(t){var i,s,r,a;this.game=t,this.bus=(t==null?void 0:t.bus)||null,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this.rng=(i=t==null?void 0:t.rng)!=null&&i.child?t.rng.child("audio"):null,this._voices=[],this._loops=new Map,this._duckUntil=0,this._duckDepth=0,this._paused=!1,this._replaceAccum=0,this._told=!1;const e=this._loadPrefs();this.volume=e.volume,this.muted=e.muted,this._Ctx&&(this._wireUnlock(),this._wireKey()),(a=(r=(s=this.game)==null?void 0:s.slice)==null?void 0:r.bindSounds)==null||a.call(r,this)}get available(){return!!this.ctx}_loadPrefs(){const t={...pu};try{const e=localStorage.getItem(bc);if(e){const i=JSON.parse(e);typeof i.volume=="number"&&(t.volume=Math.min(1,Math.max(0,i.volume))),typeof i.muted=="boolean"&&(t.muted=i.muted)}}catch{}return t}_savePrefs(){try{localStorage.setItem(bc,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx)for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,i;document.hidden||(i=(e=this.ctx)==null?void 0:e.resume)==null||i.call(e).catch(()=>{})})}unlock(){var e,i;if(this.ctx||!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=new mu(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this.muted?1e-4:this.volume*(this._paused?.2:1),this.master.connect(t.destination);for(const[s,r]of Object.entries(du)){const a=t.createGain();a.gain.value=r.gain,a.connect(this.master),this.buses[s]={node:a,base:r.gain,duckable:r.duckable!==!1}}(e=t.resume)==null||e.call(t).catch(()=>{}),this.announce(),(i=this.bus)==null||i.emit("audio:ready",{muted:this.muted,volume:this.volume})}announce(){var e,i;if(this._told||!this.ctx)return;const t=(i=(e=this.game)==null?void 0:e.ui)==null?void 0:i.toast;t&&(this._told=!0,t.call(this.game.ui,this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==xu||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e,i,s,r,a,o,c;this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(s=(i=(e=this.game)==null?void 0:e.ui)==null?void 0:i.toast)==null||s.call(i,this.muted?"Sound muted.":"Sound on."),(r=this.bus)==null||r.emit("audio:muted",{muted:this.muted}),this.muted||(this.play("mute_off"),(c=(o=(a=this.game)==null?void 0:a.slice)==null?void 0:o.isWorking)!=null&&c.call(o)&&this.startShiftBeds())}toggleMute(){this.setMuted(!this.muted)}setPaused(t){this._paused=!!t,this._applyMaster(.08)}_applyMaster(t=.08){if(!this.master)return;const e=this.ctx.currentTime,i=this.muted?1e-4:this.volume*(this._paused?.2:1);this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(Math.max(1e-4,i),e+t)}setVolume(t){var e;this.volume=Math.min(1,Math.max(0,t)),this._savePrefs(),this._applyMaster(),(e=this.bus)==null||e.emit("audio:volume",{volume:this.volume})}play(t,e={}){const i=Ec[t];if(!i||!this.ctx||this.muted)return null;if(i.loop)return this.startLoop(t,t,e);if(this._voices.length>=_u)return null;const s=this._destFor(i,e);if(!s)return null;const r=Tc(this.ctx,this.bank,i,s.node,{gain:(i.gain??1)*(e.gain??1),rate:e.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()});return this._voices.push({v:r,endsAt:r.endsAt,chain:s.chain}),i.ducks&&this.duck(i.ducks.depth??.3,i.ducks.hold??.8),r}startLoop(t,e=t,i={}){const s=Ec[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._destFor(s,i);if(!r)return null;const o={v:Tc(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(i.gain??1),rate:i.rate??1,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:i.spot??s.spot??null,at:i.at??null,gain:(s.gain??1)*(i.gain??1)};return this._loops.set(e,o),o}stopLoop(t){const e=this._loops.get(t);!e||!this.ctx||(this._loops.delete(t),e.v.stop(this.ctx.currentTime))}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t)}startShiftBeds(){for(const t of wc)this.startLoop(t)}stopShiftBeds(){for(const t of wc)this.stopLoop(t)}duck(t=.3,e=.8){if(!this.ctx)return;const i=this.ctx.currentTime;this._duckDepth=Math.max(this._duckDepth,t),this._duckUntil=Math.max(this._duckUntil,i+e);for(const s of Object.values(this.buses))s.duckable&&(s.node.gain.cancelScheduledValues(i),s.node.gain.setTargetAtTime(s.base*this._duckDepth,i,.04))}_unduck(){const t=this.ctx.currentTime;this._duckDepth=0;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_destFor(t,e){const i=this.buses[t.bus]||this.buses.world||this.buses.ui;if(!i)return null;const s=this._resolve(e.at??null,e.spot??t.spot??null);if(!s)return{node:i.node,chain:null};const{gain:r,pan:a}=this._place(s,t.minGain??0);if(r<=.004&&!t.loop)return null;let o=i.node,c=null;this.ctx.createStereoPanner&&(c=this.ctx.createStereoPanner(),c.pan.value=a,c.connect(o),o=c);const l=this.ctx.createGain();return l.gain.value=r,l.connect(o),{node:l,chain:{pan:c,dist:l}}}_resolve(t,e){var s,r,a;if(t&&typeof t.x=="number")return t;if(!e)return null;const i=(a=(r=(s=this.game)==null?void 0:s.shift)==null?void 0:r.spot)==null?void 0:a.call(r,e);return i&&typeof i.x=="number"?i:null}_listener(){var s,r;const t=(s=this.game)==null?void 0:s.camera,e=(r=t==null?void 0:t.active)==null?void 0:r.position;if(!e)return null;const i=t.yaw??0;return{x:e.x,y:e.y,z:e.z,rx:-Math.cos(i),rz:Math.sin(i)}}_place(t,e){const i=this._listener();if(!i)return{gain:1,pan:0};const s=t.x-i.x,r=t.z-i.z,a=(t.y??i.y)-i.y,o=Math.sqrt(s*s+a*a+r*r),{ref:c,max:l,panWidth:h,panNear:u}=fu;if(o>=l)return{gain:e,pan:0};let d=o<=c?1:c/(c+(o-c));o>l-4&&(d*=(l-o)/4),d=Math.max(d,e);const f=Math.sqrt(s*s+r*r)||1,g=Math.min(1,f/u),_=(s*i.rx+r*i.rz)/f*h*g;return{gain:d,pan:Math.max(-1,Math.min(1,_))}}update(t){if(!this.ctx)return;const e=this.ctx.currentTime;for(let i=this._voices.length-1;i>=0;i--)this._voices[i].endsAt<=e&&this._voices.splice(i,1);if(this._duckDepth>0&&e>=this._duckUntil&&this._unduck(),this._replaceAccum=(this._replaceAccum||0)+t,!(this._replaceAccum<.1)){this._replaceAccum=0;for(const i of this._loops.values()){const s=this._resolve(i.at,i.spot);if(!s||!i.chain)continue;const{gain:r,pan:a}=this._place(s,i.recipe.minGain??0);i.chain.dist.gain.setTargetAtTime(r,e,.06),i.chain.pan&&i.chain.pan.pan.setTargetAtTime(a,e,.08)}}}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,1.8):0}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="169",Mu=0,Ac=1,Su=2,sh=1,rh=2,jn=3,zn=0,Ve=1,On=2,_i=0,us=1,Rc=2,Cc=3,Ka=4,yu=5,Di=100,Eu=101,wu=102,Tu=103,bu=104,Au=200,Ru=201,Cu=202,Pu=203,$a=204,Za=205,Lu=206,Du=207,Iu=208,Uu=209,Nu=210,Ou=211,Fu=212,zu=213,Bu=214,Ja=0,Qa=1,to=2,ms=3,eo=4,no=5,io=6,so=7,jo=0,ku=1,Hu=2,xi=0,Gu=1,Vu=2,Wu=3,ah=4,qu=5,Xu=6,Yu=7,oh=300,gs=301,_s=302,ro=303,ao=304,Zr=306,Gr=1e3,pi=1001,oo=1002,pn=1003,ju=1004,$s=1005,fn=1006,oa=1007,mi=1008,ei=1009,ch=1010,lh=1011,Hs=1012,Ko=1013,Ni=1014,Jn=1015,Gs=1016,$o=1017,Zo=1018,xs=1020,hh=35902,uh=1021,dh=1022,An=1023,fh=1024,ph=1025,ds=1026,vs=1027,mh=1028,Jo=1029,gh=1030,Qo=1031,tc=1033,Dr=33776,Ir=33777,Ur=33778,Nr=33779,co=35840,lo=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37808,_o=37809,xo=37810,vo=37811,Mo=37812,So=37813,yo=37814,Eo=37815,wo=37816,To=37817,bo=37818,Ao=37819,Ro=37820,Co=37821,Or=36492,Po=36494,Lo=36495,_h=36283,Do=36284,Io=36285,Uo=36286,Ku=3200,$u=3201,ec=0,Zu=1,fi="",ze="srgb",Mi="srgb-linear",nc="display-p3",Jr="display-p3-linear",Vr="linear",de="srgb",Wr="rec709",qr="p3",Gi=7680,Pc=519,Ju=512,Qu=513,td=514,xh=515,ed=516,nd=517,id=518,sd=519,Lc=35044,Dc="300 es",Qn=2e3,Xr=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ic=1234567;const zs=Math.PI/180,Ms=180/Math.PI;function ws(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function ic(n,t){return(n%t+t)%t}function rd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ad(n,t,e){return n!==t?(e-n)/(t-n):0}function Bs(n,t,e){return(1-e)*n+e*t}function od(n,t,e,i){return Bs(n,t,1-Math.exp(-e*i))}function cd(n,t=1){return t-Math.abs(ic(n,t*2)-t)}function ld(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function hd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ud(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dd(n,t){return n+Math.random()*(t-n)}function fd(n){return n*(.5-Math.random())}function pd(n){n!==void 0&&(Ic=n);let t=Ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(n){return n*zs}function gd(n){return n*Ms}function _d(n){return(n&n-1)===0&&n!==0}function xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Md(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tn={DEG2RAD:zs,RAD2DEG:Ms,generateUUID:ws,clamp:Ge,euclideanModulo:ic,mapLinear:rd,inverseLerp:ad,lerp:Bs,damp:od,pingpong:cd,smoothstep:ld,smootherstep:hd,randInt:ud,randFloat:dd,randFloatSpread:fd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:_d,ceilPowerOfTwo:xd,floorPowerOfTwo:vd,setQuaternionFromProperEuler:Md,normalize:ke,denormalize:os};class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,a,o,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],M=s[1],v=s[4],E=s[7],C=s[2],b=s[5],T=s[8];return r[0]=a*_+o*M+c*C,r[3]=a*p+o*v+c*b,r[6]=a*m+o*E+c*T,r[1]=l*_+h*M+u*C,r[4]=l*p+h*v+u*b,r[7]=l*m+h*E+u*T,r[2]=d*_+f*M+g*C,r[5]=d*p+f*v+g*b,r[8]=d*m+f*E+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Zt;function vh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sd(){const n=Yr("canvas");return n.style.display="block",n}const Uc={};function Fr(n){n in Uc||(Uc[n]=!0,console.warn(n))}function yd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ed(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Nc=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oc=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[Mi]:{transfer:Vr,primaries:Wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ze]:{transfer:de,primaries:Wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jr]:{transfer:Vr,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Oc),fromReference:n=>n.applyMatrix3(Nc)},[nc]:{transfer:de,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Oc),fromReference:n=>n.applyMatrix3(Nc).convertLinearToSRGB()}},Td=new Set([Mi,Jr]),ae={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Td.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Cs[t].toReference,s=Cs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Cs[n].primaries},getTransfer:function(n){return n===fi?Vr:Cs[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Cs[t].luminanceCoefficients)}};function fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class bd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=Yr("canvas")),Vi.width=t.width,Vi.height=t.height;const i=Vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fs(e[i]/255)*255):e[i]=fs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ad=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class We extends Es{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=pi,s=pi,r=fn,a=mi,o=An,c=ei,l=We.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ws(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=oh;We.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,E=(f+1)/2,C=(m+1)/2,b=(h+d)/4,T=(u+_)/4,P=(g+p)/4;return v>E&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=b/i,r=T/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=b/s,r=P/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=P/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends Es{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Cd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sh extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let p=1-o;const m=c*d+l*f+h*g+u*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,m*M);p=Math.sin(p*b)/C,o=Math.sin(o*b)/C}const E=o*M;if(c=c*p+d*E,l=l*p+f*E,h=h*p+g*E,u=u*p+_*E,p===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new I,Fc=new Vs;class ni{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),Js.subVectors(this.max,Ps),Wi.subVectors(t.a,Ps),qi.subVectors(t.b,Ps),Xi.subVectors(t.c,Ps),ri.subVectors(qi,Wi),ai.subVectors(Xi,qi),Ei.subVectors(Wi,Xi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ei.y,Ei.x,0];return!da(e,Wi,qi,Xi,Js)||(e=[1,0,0,0,1,0,0,0,1],!da(e,Wi,qi,Xi,Js))?!1:(Qs.crossVectors(ri,ai),e=[Qs.x,Qs.y,Qs.z],da(e,Wi,qi,Xi,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,Zs=new ni,Wi=new I,qi=new I,Xi=new I,ri=new I,ai=new I,Ei=new I,Ps=new I,Js=new I,Qs=new I,wi=new I;function da(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){wi.fromArray(n,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ld=new ni,Ls=new I,fa=new I;class Qr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ld.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(fa)),this.expandByPoint(Ls.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new I,pa=new I,tr=new I,oi=new I,ma=new I,er=new I,ga=new I;class sc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pa.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=oi.dot(this.direction),c=-oi.dot(tr),l=oi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(tr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,s,r){ma.subVectors(e,t),er.subVectors(i,t),ga.crossVectors(ma,er);let a=this.direction.dot(ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const c=o*this.direction.dot(er.crossVectors(oi,er));if(c<0)return null;const l=o*this.direction.dot(ma.cross(oi));if(l<0||c+l>a)return null;const h=-o*oi.dot(ga);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,s,r,a,o,c,l,h,u,d,f,g,_,p){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,d,f,g,_,p)}set(t,e,i,s,r,a,o,c,l,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),a=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Id)}lookAt(t,e,i){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ci.crossVectors(i,Qe),ci.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ci.crossVectors(i,Qe)),ci.normalize(),nr.crossVectors(Qe,ci),s[0]=ci.x,s[4]=nr.x,s[8]=Qe.x,s[1]=ci.y,s[5]=nr.y,s[9]=Qe.y,s[2]=ci.z,s[6]=nr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],v=i[7],E=i[11],C=i[15],b=s[0],T=s[4],P=s[8],D=s[12],x=s[1],y=s[5],U=s[9],F=s[13],j=s[2],q=s[6],V=s[10],K=s[14],B=s[3],ct=s[7],nt=s[11],xt=s[15];return r[0]=a*b+o*x+c*j+l*B,r[4]=a*T+o*y+c*q+l*ct,r[8]=a*P+o*U+c*V+l*nt,r[12]=a*D+o*F+c*K+l*xt,r[1]=h*b+u*x+d*j+f*B,r[5]=h*T+u*y+d*q+f*ct,r[9]=h*P+u*U+d*V+f*nt,r[13]=h*D+u*F+d*K+f*xt,r[2]=g*b+_*x+p*j+m*B,r[6]=g*T+_*y+p*q+m*ct,r[10]=g*P+_*U+p*V+m*nt,r[14]=g*D+_*F+p*K+m*xt,r[3]=M*b+v*x+E*j+C*B,r[7]=M*T+v*y+E*q+C*ct,r[11]=M*P+v*U+E*V+C*nt,r[15]=M*D+v*F+E*K+C*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+p*(+e*l*u-e*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+m*(-s*o*h-e*c*u+e*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*l-_*d*l+_*c*f-o*p*f-u*c*m+o*d*m,v=g*d*l-h*p*l-g*c*f+a*p*f+h*c*m-a*d*m,E=h*_*l-g*u*l+g*o*f-a*_*f-h*o*m+a*u*m,C=g*u*c-h*_*c-g*o*d+a*_*d+h*o*p-a*u*p,b=e*M+i*v+s*E+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=M*T,t[1]=(_*d*r-u*p*r-_*s*f+i*p*f+u*s*m-i*d*m)*T,t[2]=(o*p*r-_*c*r+_*s*l-i*p*l-o*s*m+i*c*m)*T,t[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*T,t[4]=v*T,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*T,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*m-e*c*m)*T,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*T,t[8]=E*T,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*m-e*u*m)*T,t[10]=(a*_*r-g*o*r+g*i*l-e*_*l-a*i*m+e*o*m)*T,t[11]=(h*o*r-a*u*r-h*i*l+e*u*l+a*i*f-e*o*f)*T,t[12]=C*T,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*p+e*u*p)*T,t[14]=(g*o*s-a*_*s-g*i*c+e*_*c+a*i*p-e*o*p)*T,t[15]=(a*u*s-h*o*s+h*i*c-e*u*c-a*i*d+e*o*d)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,p=a*u,m=o*u,M=c*l,v=c*h,E=c*u,C=i.x,b=i.y,T=i.z;return s[0]=(1-(_+m))*C,s[1]=(f+E)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-E)*b,s[5]=(1-(d+m))*b,s[6]=(p+M)*b,s[7]=0,s[8]=(g+v)*T,s[9]=(p-M)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const a=Yi.set(s[4],s[5],s[6]).length(),o=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const l=1/r,h=1/a,u=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Qn){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(o===Qn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Qn){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*l,f=(i+s)*h;let g,_;if(o===Qn)g=(a+r)*u,_=-2*u;else if(o===Xr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yi=new I,Mn=new me,Dd=new I(0,0,0),Id=new I(1,1,1),ci=new I,nr=new I,Qe=new I,zc=new me,Bc=new Vs;class Rn{constructor(t=0,e=0,i=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const kc=new I,ji=new Vs,Wn=new me,ir=new I,Ds=new I,Nd=new I,Od=new Vs,Hc=new I(1,0,0),Gc=new I(0,1,0),Vc=new I(0,0,1),Wc={type:"added"},Fd={type:"removed"},Ki={type:"childadded",child:null},_a={type:"childremoved",child:null};class Te extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new I,e=new Rn,i=new Vs,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Gc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Gc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ds,ir,this.up):Wn.lookAt(ir,Ds,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new I(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,qn=new I,xa=new I,Xn=new I,$i=new I,Zi=new I,qc=new I,va=new I,Ma=new I,Sa=new I,ya=new ce,Ea=new ce,wa=new ce;class bn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),qn.subVectors(i,e),xa.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(qn),c=Sn.dot(xa),l=qn.dot(qn),h=qn.dot(xa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return ya.setScalar(0),Ea.setScalar(0),wa.setScalar(0),ya.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,i),wa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ya,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(wa,r.z),a}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),qn.subVectors(t,e),Sn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;$i.subVectors(s,i),Zi.subVectors(r,i),va.subVectors(t,i);const c=$i.dot(va),l=Zi.dot(va);if(c<=0&&l<=0)return e.copy(i);Ma.subVectors(t,s);const h=$i.dot(Ma),u=Zi.dot(Ma);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector($i,a);Sa.subVectors(t,r);const f=$i.dot(Sa),g=Zi.dot(Sa);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Zi,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return qc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(qc,o);const m=1/(p+_+d);return a=_*m,o=d*m,e.copy(i).addScaledVector($i,a).addScaledVector(Zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=ic(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ta(a,r,t+1/3),this.g=Ta(a,r,t),this.b=Ta(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=Eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ae.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ge(Oe.r*255,0,255))*65536+Math.round(Ge(Oe.g*255,0,255))*256+Math.round(Ge(Oe.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ze){ae.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(sr);const i=Bs(li.h,sr.h,e),s=Bs(li.s,sr.s,e),r=Bs(li.l,sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ot;Ot.NAMES=Eh;let zd=0;class Fi extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=us,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Za,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$a&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ts extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new I,rr=new Qt;class Ee{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=os(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class wh extends Ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Th extends Ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Ee{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Bd=0;const cn=new me,ba=new Te,Ji=new I,tn=new ni,Is=new ni,Pe=new I;class qe extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Th:wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(tn.min,Is.min),tn.expandByPoint(Pe),Pe.addVectors(tn.max,Is.max),tn.expandByPoint(Pe)):(tn.expandByPoint(Is.min),tn.expandByPoint(Is.max))}tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(t,l),Pe.add(Ji)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new Qt,f=new Qt,g=new Qt,_=new I,p=new I;function m(P,D,x){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const y=1/(f.x*g.y-g.x*f.y);isFinite(y)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(y),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(y),o[P].add(_),o[D].add(_),o[x].add(_),c[P].add(p),c[D].add(p),c[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,D=M.length;P<D;++P){const x=M[P],y=x.start,U=x.count;for(let F=y,j=y+U;F<j;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const v=new I,E=new I,C=new I,b=new I;function T(P){C.fromBufferAttribute(s,P),b.copy(C);const D=o[P];v.copy(D),v.sub(C.multiplyScalar(C.dot(D))).normalize(),E.crossVectors(b,D);const y=E.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,y)}for(let P=0,D=M.length;P<D;++P){const x=M[P],y=x.start,U=x.count;for(let F=y,j=y+U;F<j;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new me,Ti=new sc,ar=new Qr,Yc=new I,or=new I,cr=new I,lr=new I,Aa=new I,hr=new I,jc=new I,ur=new I;class yt extends Te{constructor(t=new qe,e=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Aa.fromBufferAttribute(u,t),a?hr.addScaledVector(Aa,h):hr.addScaledVector(Aa.sub(e),h))}e.add(hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(ar.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(ar,Yc)===null||Ti.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(Xc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Xc),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,C=v;E<C;E+=3){const b=o.getX(E),T=o.getX(E+1),P=o.getX(E+2);s=dr(this,m,t,i,l,h,u,b,T,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);s=dr(this,a,t,i,l,h,u,M,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,C=v;E<C;E+=3){const b=E,T=E+1,P=E+2;s=dr(this,m,t,i,l,h,u,b,T,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=p,v=p+1,E=p+2;s=dr(this,a,t,i,l,h,u,M,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function kd(n,t,e,i,s,r,a,o){let c;if(t.side===Ve?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===zn,o),c===null)return null;ur.copy(o),ur.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:n}}function dr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,or),n.getVertexPosition(c,cr),n.getVertexPosition(l,lr);const h=kd(n,t,e,i,or,cr,lr,jc);if(h){const u=new I;bn.getBarycoord(jc,or,cr,lr,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,c,l,u,new Qt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,c,l,u,new Qt)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};bn.getNormal(or,cr,lr,d.normal),h.face=d,h.barycoord=u}return h}class ee extends qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(_,p,m,M,v,E,C,b,T,P,D){const x=E/T,y=C/P,U=E/2,F=C/2,j=b/2,q=T+1,V=P+1;let K=0,B=0;const ct=new I;for(let nt=0;nt<V;nt++){const xt=nt*y-F;for(let qt=0;qt<q;qt++){const Jt=qt*x-U;ct[_]=Jt*M,ct[p]=xt*v,ct[m]=j,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[p]=0,ct[m]=b>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(qt/T),u.push(1-nt/P),K+=1}}for(let nt=0;nt<P;nt++)for(let xt=0;xt<T;xt++){const qt=d+xt+q*nt,Jt=d+xt+q*(nt+1),Z=d+(xt+1)+q*(nt+1),O=d+(xt+1)+q*nt;c.push(qt,Jt,O),c.push(Jt,Z,O),B+=6}o.addGroup(f,B,D),f+=B,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=Ss(n[e]);for(const s in i)t[s]=i[s]}return t}function Hd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Gd={clone:Ss,merge:He};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ah extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new I,Kc=new Qt,$c=new Qt;class $e extends Ah{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Kc,$c),e.subVectors($c,Kc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class qd extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Qi,ts,t,e);s.layers=this.layers,this.add(s);const r=new $e(Qi,ts,t,e);r.layers=this.layers,this.add(r);const a=new $e(Qi,ts,t,e);a.layers=this.layers,this.add(a);const o=new $e(Qi,ts,t,e);o.layers=this.layers,this.add(o);const c=new $e(Qi,ts,t,e);c.layers=this.layers,this.add(c);const l=new $e(Qi,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rh extends We{constructor(t,e,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ee(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:_i});r.uniforms.tEquirect.value=e;const a=new yt(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=fn),new qd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Ra=new I,Yd=new I,jd=new Zt;class Pi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ra.subVectors(i,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ra),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jd.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Qr,fr=new I;class rc{constructor(t=new Pi,e=new Pi,i=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],v=s[14],E=s[15];if(i[0].setComponents(c-r,d-l,p-f,E-m).normalize(),i[1].setComponents(c+r,d+l,p+f,E+m).normalize(),i[2].setComponents(c+a,d+h,p+g,E+M).normalize(),i[3].setComponents(c-a,d-h,p-g,E-M).normalize(),i[4].setComponents(c-o,d-u,p-_,E-v).normalize(),e===Qn)i[5].setComponents(c+o,d+u,p+_,E+v).normalize();else if(e===Xr)i[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Kd(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class rn extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const M=m*d-a;for(let v=0;v<l;v++){const E=v*u-r;g.push(E,-M,0),_.push(0,0,1),p.push(v/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){const v=M+l*m,E=M+l*(m+1),C=M+1+l*(m+1),b=M+1+l*m;f.push(v,E,b),f.push(E,C,b)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nf=`#ifdef USE_AOMAP
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
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`
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
}`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
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
#endif`,Kf=`struct PhysicalMaterial {
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
}`,$f=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
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
}`,ip=`#if DEPTH_PACKING == 3200
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
}`,sp=`#define DISTANCE
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
}`,rp=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,lp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define MATCAP
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
}`,mp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,xp=`#define PHONG
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
}`,vp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,yp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,bp=`#include <common>
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
}`,Ap=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:$d,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:tf,alphatest_pars_fragment:ef,aomap_fragment:nf,aomap_pars_fragment:sf,batching_pars_vertex:rf,batching_vertex:af,begin_vertex:of,beginnormal_vertex:cf,bsdfs:lf,iridescence_fragment:hf,bumpmap_pars_fragment:uf,clipping_planes_fragment:df,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:pf,clipping_planes_vertex:mf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:xf,color_vertex:vf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Tf,emissivemap_pars_fragment:bf,colorspace_fragment:Af,colorspace_pars_fragment:Rf,envmap_fragment:Cf,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Vf,envmap_vertex:If,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Of,fog_pars_fragment:Ff,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Bf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Gf,lights_toon_fragment:Wf,lights_toon_pars_fragment:qf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:jf,lights_physical_pars_fragment:Kf,lights_fragment_begin:$f,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:c0,morphinstance_vertex:l0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:E0,opaque_fragment:w0,packing:T0,premultiplied_alpha_fragment:b0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:I0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:z0,skinnormal_vertex:B0,specularmap_fragment:k0,specularmap_pars_fragment:H0,tonemapping_fragment:G0,tonemapping_pars_fragment:V0,transmission_fragment:W0,transmission_pars_fragment:q0,uv_pars_fragment:X0,uv_pars_vertex:Y0,uv_vertex:j0,worldpos_vertex:K0,background_vert:$0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distanceRGBA_vert:sp,distanceRGBA_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:cp,linedashed_frag:lp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:xp,meshphong_frag:vp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:yp,meshtoon_frag:Ep,points_vert:wp,points_frag:Tp,shadow_vert:bp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},In={basic:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:He([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:He([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:He([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:He([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:He([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:He([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:He([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:He([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:He([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:He([pt.lights,pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};In.physical={uniforms:He([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const pr={r:0,b:0,g:0},Ai=new Rn,Pp=new me;function Lp(n,t,e,i,s,r,a){const o=new Ot(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const E=g(M);E===null?m(o,c):E&&E.isColor&&(m(E,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Zr)?(h===void 0&&(h=new yt(new ee(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ss(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Ai)),h.material.toneMapped=ae.getTransfer(E.colorSpace)!==de,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new yt(new rn(2,2),new ii({name:"BackgroundMaterial",uniforms:Ss(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(E.colorSpace)!==de,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(pr,bh(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(o,c)},render:_,addToRenderList:p}}function Dp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(x,y,U,F,j){let q=!1;const V=u(F,U,y);r!==V&&(r=V,l(r.object)),q=f(x,F,U,j),q&&g(x,F,U,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(x,y,U,F),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,y,U){const F=U.wireframe===!0;let j=i[x.id];j===void 0&&(j={},i[x.id]=j);let q=j[y.id];q===void 0&&(q={},j[y.id]=q);let V=q[F];return V===void 0&&(V=d(c()),q[F]=V),V}function d(x){const y=[],U=[],F=[];for(let j=0;j<e;j++)y[j]=0,U[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:U,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,y,U,F){const j=r.attributes,q=y.attributes;let V=0;const K=U.getAttributes();for(const B in K)if(K[B].location>=0){const nt=j[B];let xt=q[B];if(xt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),nt===void 0||nt.attribute!==xt||xt&&nt.data!==xt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(x,y,U,F){const j={},q=y.attributes;let V=0;const K=U.getAttributes();for(const B in K)if(K[B].location>=0){let nt=q[B];nt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor));const xt={};xt.attribute=nt,nt&&nt.data&&(xt.data=nt.data),j[B]=xt,V++}r.attributes=j,r.attributesNum=V,r.index=F}function _(){const x=r.newAttributes;for(let y=0,U=x.length;y<U;y++)x[y]=0}function p(x){m(x,0)}function m(x,y){const U=r.newAttributes,F=r.enabledAttributes,j=r.attributeDivisors;U[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),j[x]!==y&&(n.vertexAttribDivisor(x,y),j[x]=y)}function M(){const x=r.newAttributes,y=r.enabledAttributes;for(let U=0,F=y.length;U<F;U++)y[U]!==x[U]&&(n.disableVertexAttribArray(U),y[U]=0)}function v(x,y,U,F,j,q,V){V===!0?n.vertexAttribIPointer(x,y,U,j,q):n.vertexAttribPointer(x,y,U,F,j,q)}function E(x,y,U,F){_();const j=F.attributes,q=U.getAttributes(),V=y.defaultAttributeValues;for(const K in q){const B=q[K];if(B.location>=0){let ct=j[K];if(ct===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),ct!==void 0){const nt=ct.normalized,xt=ct.itemSize,qt=t.get(ct);if(qt===void 0)continue;const Jt=qt.buffer,Z=qt.type,O=qt.bytesPerElement,at=Z===n.INT||Z===n.UNSIGNED_INT||ct.gpuType===Ko;if(ct.isInterleavedBufferAttribute){const et=ct.data,st=et.stride,ot=ct.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<B.locationSize;Et++)m(B.location+Et,et.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<B.locationSize;Et++)p(B.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Et=0;Et<B.locationSize;Et++)v(B.location+Et,xt/B.locationSize,Z,nt,st*O,(ot+xt/B.locationSize*Et)*O,at)}else{if(ct.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)m(B.location+et,ct.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let et=0;et<B.locationSize;et++)p(B.location+et);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let et=0;et<B.locationSize;et++)v(B.location+et,xt/B.locationSize,Z,nt,xt*O,xt/B.locationSize*et*O,at)}}else if(V!==void 0){const nt=V[K];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(B.location,nt);break;case 3:n.vertexAttrib3fv(B.location,nt);break;case 4:n.vertexAttrib4fv(B.location,nt);break;default:n.vertexAttrib1fv(B.location,nt)}}}}M()}function C(){P();for(const x in i){const y=i[x];for(const U in y){const F=y[U];for(const j in F)h(F[j].object),delete F[j];delete y[U]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const y=i[x.id];for(const U in y){const F=y[U];for(const j in F)h(F[j].object),delete F[j];delete y[U]}delete i[x.id]}function T(x){for(const y in i){const U=i[y];if(U[x.id]===void 0)continue;const F=U[x.id];for(const j in F)h(F[j].object),delete F[j];delete U[x.id]}}function P(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Ip(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Up(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==An&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ei&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jn&&!P)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:b}}function Np(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Pi,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const M=r?0:i,v=M*4;let E=m.clippingState||null;c.value=E,E=h(g,d,v,f);for(let C=0;C!==v;++C)E[C]=e[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=f;v!==_;++v,E+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Op(n){let t=new WeakMap;function e(a,o){return o===ro?a.mapping=gs:o===ao&&(a.mapping=_s),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ro||o===ao)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Xd(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ph extends Ah{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,Zc=[.125,.215,.35,.446,.526,.582],Ii=20,Ca=new Ph,Jc=new Ot;let Pa=null,La=0,Da=0,Ia=!1;const Li=(1+Math.sqrt(5))/2,es=1/Li,Qc=[new I(-Li,es,0),new I(Li,es,0),new I(-es,0,Li),new I(es,0,Li),new I(0,Li,-es),new I(0,Li,es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,La,Da),this._renderer.xr.enabled=Ia,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Gs,format:An,colorSpace:Mi,depthBuffer:!1},s=el(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=zp(r,t,e)}return s}_compileMaterial(t){const e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,i,s){const o=new $e(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jc),h.toneMapping=xi,h.autoClear=!1;const f=new Ts({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new yt(new ee,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Jc),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):M===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const v=this._cubeSize;mr(s,M*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;mr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ca)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qc[(s-r-1)%Qc.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const m=[];let M=0;for(let T=0;T<Ii;++T){const P=T/_,D=Math.exp(-P*P/2);m.push(D),T===0?M+=D:T<p&&(M+=2*D)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const E=this._sizeLods[s],C=3*E*(s>v-cs?s-v+cs:0),b=4*(this._cubeSize-E);mr(e,C,b,3*E,2*E),c.setRenderTarget(e),c.render(u,Ca)}}function Fp(n){const t=[],e=[],i=[];let s=n;const r=n-cs+1+Zc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-cs?c=Zc[a-n+cs-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),v=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,P=b>2?0:-1,D=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(D,_*g*b),v.set(d,p*g*b);const x=[b,b,b,b,b,b];E.set(x,m*g*b)}const C=new qe;C.setAttribute("position",new Ee(M,_)),C.setAttribute("uv",new Ee(v,p)),C.setAttribute("faceIndex",new Ee(E,m)),t.push(C),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function el(n,t,e){const i=new Oi(n,t,e);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zp(n,t,e){const i=new Float32Array(Ii),s=new I(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function nl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function il(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Bp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ro||c===ao,h=c===gs||c===_s;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new tl(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new tl(n)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function kp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Hp(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,E=M.length;v<E;v+=3){const C=M[v+0],b=M[v+1],T=M[v+2];d.push(C,b,b,T,T,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const C=v+0,b=v+1,T=v+2;d.push(C,b,b,T,T,C)}}else return;const p=new(vh(d)?Th:wh)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Gp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,i,_[M])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Wp(n,t,e){const i=new WeakMap,s=new ce;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let C=o.attributes.position.count*E,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*b*4*u),P=new Sh(T,C,b,u);P.type=Jn,P.needsUpdate=!0;const D=E*4;for(let y=0;y<u;y++){const U=m[y],F=M[y],j=v[y],q=C*b*4*y;for(let V=0;V<U.count;V++){const K=V*D;g===!0&&(s.fromBufferAttribute(U,V),T[q+K+0]=s.x,T[q+K+1]=s.y,T[q+K+2]=s.z,T[q+K+3]=0),_===!0&&(s.fromBufferAttribute(F,V),T[q+K+4]=s.x,T[q+K+5]=s.y,T[q+K+6]=s.z,T[q+K+7]=0),p===!0&&(s.fromBufferAttribute(j,V),T[q+K+8]=s.x,T[q+K+9]=s.y,T[q+K+10]=s.z,T[q+K+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Qt(C,b)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function qp(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Lh extends We{constructor(t,e,i,s,r,a,o,c,l,h=ds){if(h!==ds&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ds&&(i=Ni),i===void 0&&h===vs&&(i=xs),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dh=new We,sl=new Lh(1,1),Ih=new Sh,Uh=new Pd,Nh=new Rh,rl=[],al=[],ol=new Float32Array(16),cl=new Float32Array(9),ll=new Float32Array(4);function bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ta(n,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function jp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function Kp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function $p(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;ll.set(i),n.uniformMatrix2fv(this.addr,!1,ll),Ce(e,i)}}function Zp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;cl.set(i),n.uniformMatrix3fv(this.addr,!1,cl),Ce(e,i)}}function Jp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;ol.set(i),n.uniformMatrix4fv(this.addr,!1,ol),Ce(e,i)}}function Qp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function im(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function om(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sl.compareFunction=xh,r=sl):r=Dh,e.setTexture2D(t||r,s)}function cm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Uh,s)}function lm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nh,s)}function hm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ih,s)}function um(n){switch(n){case 5126:return Xp;case 35664:return Yp;case 35665:return jp;case 35666:return Kp;case 35674:return $p;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(n,t){n.uniform1fv(this.addr,t)}function fm(n,t){const e=bs(t,this.size,2);n.uniform2fv(this.addr,e)}function pm(n,t){const e=bs(t,this.size,3);n.uniform3fv(this.addr,e)}function mm(n,t){const e=bs(t,this.size,4);n.uniform4fv(this.addr,e)}function gm(n,t){const e=bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _m(n,t){const e=bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function xm(n,t){const e=bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vm(n,t){n.uniform1iv(this.addr,t)}function Mm(n,t){n.uniform2iv(this.addr,t)}function Sm(n,t){n.uniform3iv(this.addr,t)}function ym(n,t){n.uniform4iv(this.addr,t)}function Em(n,t){n.uniform1uiv(this.addr,t)}function wm(n,t){n.uniform2uiv(this.addr,t)}function Tm(n,t){n.uniform3uiv(this.addr,t)}function bm(n,t){n.uniform4uiv(this.addr,t)}function Am(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Dh,r[a])}function Rm(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uh,r[a])}function Cm(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nh,r[a])}function Pm(n,t,e){const i=this.cache,s=t.length,r=ta(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ih,r[a])}function Lm(n){switch(n){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return ym;case 5125:return Em;case 36294:return wm;case 36295:return Tm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Dm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=um(e.type)}}class Im{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}}class Um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function hl(n,t){n.seq.push(t),n.map[t.id]=t}function Nm(n,t,e){const i=n.name,s=i.length;for(Ua.lastIndex=0;;){const r=Ua.exec(i),a=Ua.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hl(e,l===void 0?new Dm(o,n,t):new Im(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Um(o),hl(e,u)),e=u}}}class zr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Nm(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function ul(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Om=37297;let Fm=0;function zm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Bm(n){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n);let i;switch(t===e?i="":t===qr&&e===Wr?i="LinearDisplayP3ToLinearSRGB":t===Wr&&e===qr&&(i="LinearSRGBToLinearDisplayP3"),n){case Mi:case Jr:return[i,"LinearTransferOETF"];case ze:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zm(n.getShaderSource(t),a)}else return s}function km(n,t){const e=Bm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hm(n,t){let e;switch(t){case Gu:e="Linear";break;case Vu:e="Reinhard";break;case Wu:e="Cineon";break;case ah:e="ACESFilmic";break;case Xu:e="AgX";break;case Yu:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new I;function Gm(){ae.getLuminanceCoefficients(gr);const n=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Wm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Fs(n){return n!==""}function fl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(Xm,jm)}const Ym=new Map;function jm(n,t){let e=$t[t];if(e===void 0){const i=Ym.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return No(e)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(n){return n.replace(Km,$m)}function $m(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gl(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function tg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function eg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ng(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Zm(e),l=Jm(e),h=Qm(e),u=tg(e),d=eg(e),f=Vm(e),g=Wm(r),_=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(p=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?$t.tonemapping_pars_fragment:"",e.toneMapping!==xi?Hm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,km("linearToOutputTexel",e.outputColorSpace),Gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=No(a),a=fl(a,e),a=pl(a,e),o=No(o),o=fl(o,e),o=pl(o,e),a=ml(a),o=ml(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+a,E=M+m+o,C=ul(s,s.VERTEX_SHADER,v),b=ul(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(y){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(C).trim(),j=s.getShaderInfoLog(b).trim();let q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,b);else{const K=dl(s,C,"vertex"),B=dl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+U+`
`+K+`
`+B)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||j==="")&&(V=!1);V&&(y.diagnostics={runnable:q,programLog:U,vertexShader:{log:F,prefix:p},fragmentShader:{log:j,prefix:m}})}s.deleteShader(C),s.deleteShader(b),P=new zr(s,_),D=qm(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Om)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let ig=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rg(t),e.set(t,i)),i}}class rg{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}}function ag(n,t,e,i,s,r,a){const o=new yh,c=new sg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,U,F,j){const q=F.fog,V=j.geometry,K=x.isMeshStandardMaterial?F.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||K),ct=B&&B.mapping===Zr?B.image.height:null,nt=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qt=xt!==void 0?xt.length:0;let Jt=0;V.morphAttributes.position!==void 0&&(Jt=1),V.morphAttributes.normal!==void 0&&(Jt=2),V.morphAttributes.color!==void 0&&(Jt=3);let Z,O,at,et;if(nt){const ge=In[nt];Z=ge.vertexShader,O=ge.fragmentShader}else Z=x.vertexShader,O=x.fragmentShader,c.update(x),at=c.getVertexShaderID(x),et=c.getFragmentShaderID(x);const st=n.getRenderTarget(),ot=j.isInstancedMesh===!0,Et=j.isBatchedMesh===!0,wt=!!x.map,Tt=!!x.matcap,L=!!B,mt=!!x.aoMap,Ut=!!x.lightMap,Wt=!!x.bumpMap,At=!!x.normalMap,Yt=!!x.displacementMap,gt=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,z=x.anisotropy>0,$=x.clearcoat>0,Q=x.dispersion>0,J=x.iridescence>0,bt=x.sheen>0,dt=x.transmission>0,ht=z&&!!x.anisotropyMap,Bt=$&&!!x.clearcoatMap,rt=$&&!!x.clearcoatNormalMap,St=$&&!!x.clearcoatRoughnessMap,zt=J&&!!x.iridescenceMap,Nt=J&&!!x.iridescenceThicknessMap,_t=bt&&!!x.sheenColorMap,Gt=bt&&!!x.sheenRoughnessMap,kt=!!x.specularMap,ie=!!x.specularColorMap,N=!!x.specularIntensityMap,vt=dt&&!!x.transmissionMap,R=dt&&!!x.thicknessMap,G=!!x.gradientMap,tt=!!x.alphaMap,it=x.alphaTest>0,Xt=!!x.alphaHash,le=!!x.extensions;let Ue=xi;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const Kt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:O,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Et,batchingColor:Et&&j._colorsTexture!==null,instancing:ot,instancingColor:ot&&j.instanceColor!==null,instancingMorph:ot&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Mi,alphaToCoverage:!!x.alphaToCoverage,map:wt,matcap:Tt,envMap:L,envMapMode:L&&B.mapping,envMapCubeUVHeight:ct,aoMap:mt,lightMap:Ut,bumpMap:Wt,normalMap:At,displacementMap:f&&Yt,emissiveMap:gt,normalMapObjectSpace:At&&x.normalMapType===Zu,normalMapTangentSpace:At&&x.normalMapType===ec,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:ht,clearcoat:$,clearcoatMap:Bt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:Q,iridescence:J,iridescenceMap:zt,iridescenceThicknessMap:Nt,sheen:bt,sheenColorMap:_t,sheenRoughnessMap:Gt,specularMap:kt,specularColorMap:ie,specularIntensityMap:N,transmission:dt,transmissionMap:vt,thicknessMap:R,gradientMap:G,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:it,alphaHash:Xt,combine:x.combine,mapUv:wt&&p(x.map.channel),aoMapUv:mt&&p(x.aoMap.channel),lightMapUv:Ut&&p(x.lightMap.channel),bumpMapUv:Wt&&p(x.bumpMap.channel),normalMapUv:At&&p(x.normalMap.channel),displacementMapUv:Yt&&p(x.displacementMap.channel),emissiveMapUv:gt&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:ht&&p(x.anisotropyMap.channel),clearcoatMapUv:Bt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&p(x.sheenRoughnessMap.channel),specularMapUv:kt&&p(x.specularMap.channel),specularColorMapUv:ie&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:vt&&p(x.transmissionMap.channel),thicknessMapUv:R&&p(x.thicknessMap.channel),alphaMapUv:tt&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(At||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(wt||tt),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Jt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:wt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||Et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function M(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)y.push(U),y.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(y,x),E(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)}function C(x){const y=_[x.type];let U;if(y){const F=In[y];U=Gd.clone(F.uniforms)}else U=x.uniforms;return U}function b(x,y){let U;for(let F=0,j=h.length;F<j;F++){const q=h[F];if(q.cacheKey===y){U=q,++U.usedTimes;break}}return U===void 0&&(U=new ng(n,y,x,r),h.push(U)),U}function T(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function P(x){c.remove(x)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:D}}function og(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _l(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,f,g,_,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function o(u,d,f,g,_,p){const m=a(u,d,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,_,p){const m=a(u,d,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||cg),i.length>1&&i.sort(d||_l),s.length>1&&s.sort(d||_l)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function lg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new xl,n.set(i,[a])):s>=r.length?(a=new xl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function hg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ot};break;case"SpotLight":e={position:new I,direction:new I,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function ug(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let dg=0;function fg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pg(n){const t=new hg,e=ug(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new me,a=new me;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,v=0,E=0,C=0,b=0,T=0;l.sort(fg);for(let D=0,x=l.length;D<x;D++){const y=l[D],U=y.color,F=y.intensity,j=y.distance,q=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=U.r*F,u+=U.g*F,d+=U.b*F;else if(y.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(y.sh.coefficients[V],F);T++}else if(y.isDirectionalLight){const V=t.get(y);if(V.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const K=y.shadow,B=e.get(y);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=y.shadow.matrix,M++}i.directional[f]=V,f++}else if(y.isSpotLight){const V=t.get(y);V.position.setFromMatrixPosition(y.matrixWorld),V.color.copy(U).multiplyScalar(F),V.distance=j,V.coneCos=Math.cos(y.angle),V.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),V.decay=y.decay,i.spot[_]=V;const K=y.shadow;if(y.map&&(i.spotLightMap[C]=y.map,C++,K.updateMatrices(y),y.castShadow&&b++),i.spotLightMatrix[_]=K.matrix,y.castShadow){const B=e.get(y);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=q,E++}_++}else if(y.isRectAreaLight){const V=t.get(y);V.color.copy(U).multiplyScalar(F),V.halfWidth.set(y.width*.5,0,0),V.halfHeight.set(0,y.height*.5,0),i.rectArea[p]=V,p++}else if(y.isPointLight){const V=t.get(y);if(V.color.copy(y.color).multiplyScalar(y.intensity),V.distance=y.distance,V.decay=y.decay,y.castShadow){const K=y.shadow,B=e.get(y);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=y.shadow.matrix,v++}i.point[g]=V,g++}else if(y.isHemisphereLight){const V=t.get(y);V.skyColor.copy(y.color).multiplyScalar(F),V.groundColor.copy(y.groundColor).multiplyScalar(F),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==E||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=E,P.numSpotMaps=C,P.numLightProbes=T,i.version=dg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const v=l[m];if(v.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function vl(n){const t=new pg(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function mg(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new vl(n),t.set(s,[o])):r>=a.length?(o=new vl(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class gg extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _g extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`;function Mg(n,t,e){let i=new rc;const s=new Qt,r=new Qt,a=new ce,o=new gg({depthPacking:$u}),c=new _g,l={},h=e.maxTextureSize,u={[zn]:Ve,[Ve]:zn,[On]:On},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:xg,fragmentShader:vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let m=this.type;this.render=function(b,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const D=n.getRenderTarget(),x=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),U=n.state;U.setBlending(_i),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=m!==jn&&this.type===jn,j=m===jn&&this.type!==jn;for(let q=0,V=b.length;q<V;q++){const K=b[q],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ct=B.getFrameExtents();if(s.multiply(ct),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,B.mapSize.y=r.y)),B.map===null||F===!0||j===!0){const xt=this.type!==jn?{minFilter:pn,magFilter:pn}:{};B.map!==null&&B.map.dispose(),B.map=new Oi(s.x,s.y,xt),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const nt=B.getViewportCount();for(let xt=0;xt<nt;xt++){const qt=B.getViewport(xt);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),U.viewport(a),B.updateMatrices(K,xt),i=B.getFrustum(),E(T,P,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===jn&&M(B,P),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(D,x,y)};function M(b,T){const P=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Oi(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,P,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,P,f,_,null)}function v(b,T,P,D){let x=null;const y=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(y!==void 0)x=y;else if(x=P.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,F=T.uuid;let j=l[U];j===void 0&&(j={},l[U]=j);let q=j[F];q===void 0&&(q=x.clone(),j[F]=q,T.addEventListener("dispose",C)),x=q}if(x.visible=T.visible,x.wireframe=T.wireframe,D===jn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=n.properties.get(x);U.light=P}return x}function E(b,T,P,D,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===jn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const F=t.update(b),j=b.material;if(Array.isArray(j)){const q=F.groups;for(let V=0,K=q.length;V<K;V++){const B=q[V],ct=j[B.materialIndex];if(ct&&ct.visible){const nt=v(b,ct,D,x);b.onBeforeShadow(n,b,T,P,F,nt,B),n.renderBufferDirect(P,null,F,nt,b,B),b.onAfterShadow(n,b,T,P,F,nt,B)}}}else if(j.visible){const q=v(b,j,D,x);b.onBeforeShadow(n,b,T,P,F,q,null),n.renderBufferDirect(P,null,F,q,b,null),b.onAfterShadow(n,b,T,P,F,q,null)}}const U=b.children;for(let F=0,j=U.length;F<j;F++)E(U[F],T,P,D,x)}function C(b){b.target.removeEventListener("dispose",C);for(const P in l){const D=l[P],x=b.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}const Sg={[Ja]:Qa,[to]:io,[eo]:so,[ms]:no,[Qa]:Ja,[io]:to,[so]:eo,[no]:ms};function yg(n){function t(){let N=!1;const vt=new ce;let R=null;const G=new ce(0,0,0,0);return{setMask:function(tt){R!==tt&&!N&&(n.colorMask(tt,tt,tt,tt),R=tt)},setLocked:function(tt){N=tt},setClear:function(tt,it,Xt,le,Ue){Ue===!0&&(tt*=le,it*=le,Xt*=le),vt.set(tt,it,Xt,le),G.equals(vt)===!1&&(n.clearColor(tt,it,Xt,le),G.copy(vt))},reset:function(){N=!1,R=null,G.set(-1,0,0,0)}}}function e(){let N=!1,vt=!1,R=null,G=null,tt=null;return{setReversed:function(it){vt=it},setTest:function(it){it?at(n.DEPTH_TEST):et(n.DEPTH_TEST)},setMask:function(it){R!==it&&!N&&(n.depthMask(it),R=it)},setFunc:function(it){if(vt&&(it=Sg[it]),G!==it){switch(it){case Ja:n.depthFunc(n.NEVER);break;case Qa:n.depthFunc(n.ALWAYS);break;case to:n.depthFunc(n.LESS);break;case ms:n.depthFunc(n.LEQUAL);break;case eo:n.depthFunc(n.EQUAL);break;case no:n.depthFunc(n.GEQUAL);break;case io:n.depthFunc(n.GREATER);break;case so:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}G=it}},setLocked:function(it){N=it},setClear:function(it){tt!==it&&(n.clearDepth(it),tt=it)},reset:function(){N=!1,R=null,G=null,tt=null}}}function i(){let N=!1,vt=null,R=null,G=null,tt=null,it=null,Xt=null,le=null,Ue=null;return{setTest:function(Kt){N||(Kt?at(n.STENCIL_TEST):et(n.STENCIL_TEST))},setMask:function(Kt){vt!==Kt&&!N&&(n.stencilMask(Kt),vt=Kt)},setFunc:function(Kt,ge,an){(R!==Kt||G!==ge||tt!==an)&&(n.stencilFunc(Kt,ge,an),R=Kt,G=ge,tt=an)},setOp:function(Kt,ge,an){(it!==Kt||Xt!==ge||le!==an)&&(n.stencilOp(Kt,ge,an),it=Kt,Xt=ge,le=an)},setLocked:function(Kt){N=Kt},setClear:function(Kt){Ue!==Kt&&(n.clearStencil(Kt),Ue=Kt)},reset:function(){N=!1,vt=null,R=null,G=null,tt=null,it=null,Xt=null,le=null,Ue=null}}}const s=new t,r=new e,a=new i,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,v=null,E=null,C=null,b=new Ot(0,0,0),T=0,P=!1,D=null,x=null,y=null,U=null,F=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=V>=2);let B=null,ct={};const nt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),qt=new ce().fromArray(nt),Jt=new ce().fromArray(xt);function Z(N,vt,R,G){const tt=new Uint8Array(4),it=n.createTexture();n.bindTexture(N,it),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<R;Xt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,G,0,n.RGBA,n.UNSIGNED_BYTE,tt):n.texImage2D(vt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tt);return it}const O={};O[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),O[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),O[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(n.DEPTH_TEST),r.setFunc(ms),Ut(!1),Wt(Ac),at(n.CULL_FACE),L(_i);function at(N){l[N]!==!0&&(n.enable(N),l[N]=!0)}function et(N){l[N]!==!1&&(n.disable(N),l[N]=!1)}function st(N,vt){return h[N]!==vt?(n.bindFramebuffer(N,vt),h[N]=vt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ot(N,vt){let R=d,G=!1;if(N){R=u.get(vt),R===void 0&&(R=[],u.set(vt,R));const tt=N.textures;if(R.length!==tt.length||R[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Xt=tt.length;it<Xt;it++)R[it]=n.COLOR_ATTACHMENT0+it;R.length=tt.length,G=!0}}else R[0]!==n.BACK&&(R[0]=n.BACK,G=!0);G&&n.drawBuffers(R)}function Et(N){return f!==N?(n.useProgram(N),f=N,!0):!1}const wt={[Di]:n.FUNC_ADD,[Eu]:n.FUNC_SUBTRACT,[wu]:n.FUNC_REVERSE_SUBTRACT};wt[Tu]=n.MIN,wt[bu]=n.MAX;const Tt={[Au]:n.ZERO,[Ru]:n.ONE,[Cu]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[Nu]:n.SRC_ALPHA_SATURATE,[Iu]:n.DST_COLOR,[Lu]:n.DST_ALPHA,[Pu]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[Uu]:n.ONE_MINUS_DST_COLOR,[Du]:n.ONE_MINUS_DST_ALPHA,[Ou]:n.CONSTANT_COLOR,[Fu]:n.ONE_MINUS_CONSTANT_COLOR,[zu]:n.CONSTANT_ALPHA,[Bu]:n.ONE_MINUS_CONSTANT_ALPHA};function L(N,vt,R,G,tt,it,Xt,le,Ue,Kt){if(N===_i){g===!0&&(et(n.BLEND),g=!1);return}if(g===!1&&(at(n.BLEND),g=!0),N!==yu){if(N!==_||Kt!==P){if((p!==Di||v!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,v=Di),Kt)switch(N){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rc:n.blendFunc(n.ONE,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,M=null,E=null,C=null,b.set(0,0,0),T=0,_=N,P=Kt}return}tt=tt||vt,it=it||R,Xt=Xt||G,(vt!==p||tt!==v)&&(n.blendEquationSeparate(wt[vt],wt[tt]),p=vt,v=tt),(R!==m||G!==M||it!==E||Xt!==C)&&(n.blendFuncSeparate(Tt[R],Tt[G],Tt[it],Tt[Xt]),m=R,M=G,E=it,C=Xt),(le.equals(b)===!1||Ue!==T)&&(n.blendColor(le.r,le.g,le.b,Ue),b.copy(le),T=Ue),_=N,P=!1}function mt(N,vt){N.side===On?et(n.CULL_FACE):at(n.CULL_FACE);let R=N.side===Ve;vt&&(R=!R),Ut(R),N.blending===us&&N.transparent===!1?L(_i):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const G=N.stencilWrite;a.setTest(G),G&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function Wt(N){N!==Mu?(at(n.CULL_FACE),N!==x&&(N===Ac?n.cullFace(n.BACK):N===Su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):et(n.CULL_FACE),x=N}function At(N){N!==y&&(q&&n.lineWidth(N),y=N)}function Yt(N,vt,R){N?(at(n.POLYGON_OFFSET_FILL),(U!==vt||F!==R)&&(n.polygonOffset(vt,R),U=vt,F=R)):et(n.POLYGON_OFFSET_FILL)}function gt(N){N?at(n.SCISSOR_TEST):et(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+j-1),B!==N&&(n.activeTexture(N),B=N)}function S(N,vt,R){R===void 0&&(B===null?R=n.TEXTURE0+j-1:R=B);let G=ct[R];G===void 0&&(G={type:void 0,texture:void 0},ct[R]=G),(G.type!==N||G.texture!==vt)&&(B!==R&&(n.activeTexture(R),B=R),n.bindTexture(N,vt||O[N]),G.type=N,G.texture=vt)}function z(){const N=ct[B];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(N){qt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function _t(N){Jt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Jt.copy(N))}function Gt(N,vt){let R=c.get(vt);R===void 0&&(R=new WeakMap,c.set(vt,R));let G=R.get(N);G===void 0&&(G=n.getUniformBlockIndex(vt,N.name),R.set(N,G))}function kt(N,vt){const G=c.get(vt).get(N);o.get(vt)!==G&&(n.uniformBlockBinding(vt,G,N.__bindingPointIndex),o.set(vt,G))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},B=null,ct={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,v=null,E=null,C=null,b=new Ot(0,0,0),T=0,P=!1,D=null,x=null,y=null,U=null,F=null,qt.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:at,disable:et,bindFramebuffer:st,drawBuffers:ot,useProgram:Et,setBlending:L,setMaterial:mt,setFlipSided:Ut,setCullFace:Wt,setLineWidth:At,setPolygonOffset:Yt,setScissorTest:gt,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:St,texImage3D:zt,updateUBOMapping:Gt,uniformBlockBinding:kt,texStorage2D:Bt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:dt,compressedTexSubImage3D:ht,scissor:Nt,viewport:_t,reset:ie}}function Ml(n,t,e,i){const s=Eg(i);switch(e){case uh:return n*t;case fh:return n*t;case ph:return n*t*2;case mh:return n*t/s.components*s.byteLength;case Jo:return n*t/s.components*s.byteLength;case gh:return n*t*2/s.components*s.byteLength;case Qo:return n*t*2/s.components*s.byteLength;case dh:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case tc:return n*t*4/s.components*s.byteLength;case Dr:case Ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lo:case uo:return Math.max(n,16)*Math.max(t,8)/4;case co:case ho:return Math.max(n,8)*Math.max(t,8)/2;case fo:case po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Or:case Po:case Lo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _h:case Do:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Io:case Uo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eg(n){switch(n){case ei:case ch:return{byteLength:1,components:1};case Hs:case lh:case Gs:return{byteLength:2,components:1};case $o:case Zo:return{byteLength:2,components:4};case Ni:case Ko:case Jn:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wg(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):Yr("canvas")}function _(A,S,z){let $=1;const Q=gt(A);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor($*Q.width),bt=Math.floor($*Q.height);u===void 0&&(u=g(J,bt));const dt=S?g(J,bt):u;return dt.width=J,dt.height=bt,dt.getContext("2d").drawImage(A,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+bt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==pn&&A.minFilter!==fn}function m(A){n.generateMipmap(A)}function M(A,S,z,$,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),S===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const bt=Q?Vr:ae.getTransfer($);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=bt===de?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,S){let z;return A?S===null||S===Ni||S===xs?z=n.DEPTH24_STENCIL8:S===Jn?z=n.DEPTH32F_STENCIL8:S===Hs&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===xs?z=n.DEPTH_COMPONENT24:S===Jn?z=n.DEPTH_COMPONENT32F:S===Hs&&(z=n.DEPTH_COMPONENT16),z}function E(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==pn&&A.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&h.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),D(S)}function T(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,$=d.get(z);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(A),Object.keys($).length===0&&d.delete(z)}i.remove(A)}function P(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const z=A.source,$=d.get(z);delete $[S.__cacheKey],a.memory.textures--}function D(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let $=0,Q=z.length;$<Q;$++){const J=i.get(z[$]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[$])}i.remove(A)}let x=0;function y(){x=0}function U(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){const z=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(z,A,S);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function q(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Jt(z,A,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function V(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Jt(z,A,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function K(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Z(z,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const B={[Gr]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},ct={[pn]:n.NEAREST,[ju]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[oa]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},nt={[Ju]:n.NEVER,[sd]:n.ALWAYS,[Qu]:n.LESS,[xh]:n.LEQUAL,[td]:n.EQUAL,[id]:n.GEQUAL,[ed]:n.GREATER,[nd]:n.NOTEQUAL};function xt(A,S){if(S.type===Jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===oa||S.magFilter===$s||S.magFilter===mi||S.minFilter===fn||S.minFilter===oa||S.minFilter===$s||S.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,B[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,B[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,B[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ct[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==$s&&S.minFilter!==mi||S.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function qt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const J=F(S);if(J!==A.__cacheKey){Q[J]===void 0&&(Q[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[J].usedTimes++;const bt=Q[A.__cacheKey];bt!==void 0&&(Q[A.__cacheKey].usedTimes--,bt.usedTimes===0&&P(S)),A.__cacheKey=J,A.__webglTexture=Q[J].texture}return z}function Jt(A,S,z){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const Q=qt(A,S),J=S.source;e.bindTexture($,A.__webglTexture,n.TEXTURE0+z);const bt=i.get(J);if(J.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);const dt=ae.getPrimaries(ae.workingColorSpace),ht=S.colorSpace===fi?null:ae.getPrimaries(S.colorSpace),Bt=S.colorSpace===fi||dt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let rt=_(S.image,!1,s.maxTextureSize);rt=Yt(S,rt);const St=r.convert(S.format,S.colorSpace),zt=r.convert(S.type);let Nt=M(S.internalFormat,St,zt,S.colorSpace,S.isVideoTexture);xt($,S);let _t;const Gt=S.mipmaps,kt=S.isVideoTexture!==!0,ie=bt.__version===void 0||Q===!0,N=J.dataReady,vt=E(S,rt);if(S.isDepthTexture)Nt=v(S.format===vs,S.type),ie&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,zt,null));else if(S.isDataTexture)if(Gt.length>0){kt&&ie&&e.texStorage2D(n.TEXTURE_2D,vt,Nt,Gt[0].width,Gt[0].height);for(let R=0,G=Gt.length;R<G;R++)_t=Gt[R],kt?N&&e.texSubImage2D(n.TEXTURE_2D,R,0,0,_t.width,_t.height,St,zt,_t.data):e.texImage2D(n.TEXTURE_2D,R,Nt,_t.width,_t.height,0,St,zt,_t.data);S.generateMipmaps=!1}else kt?(ie&&e.texStorage2D(n.TEXTURE_2D,vt,Nt,rt.width,rt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,St,zt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,zt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Nt,Gt[0].width,Gt[0].height,rt.depth);for(let R=0,G=Gt.length;R<G;R++)if(_t=Gt[R],S.format!==An)if(St!==null)if(kt){if(N)if(S.layerUpdates.size>0){const tt=Ml(_t.width,_t.height,S.format,S.type);for(const it of S.layerUpdates){const Xt=_t.data.subarray(it*tt/_t.data.BYTES_PER_ELEMENT,(it+1)*tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,it,_t.width,_t.height,1,St,Xt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,_t.width,_t.height,rt.depth,St,_t.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,R,Nt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,R,0,0,0,_t.width,_t.height,rt.depth,St,zt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,R,Nt,_t.width,_t.height,rt.depth,0,St,zt,_t.data)}else{kt&&ie&&e.texStorage2D(n.TEXTURE_2D,vt,Nt,Gt[0].width,Gt[0].height);for(let R=0,G=Gt.length;R<G;R++)_t=Gt[R],S.format!==An?St!==null?kt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,R,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,R,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?N&&e.texSubImage2D(n.TEXTURE_2D,R,0,0,_t.width,_t.height,St,zt,_t.data):e.texImage2D(n.TEXTURE_2D,R,Nt,_t.width,_t.height,0,St,zt,_t.data)}else if(S.isDataArrayTexture)if(kt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Nt,rt.width,rt.height,rt.depth),N)if(S.layerUpdates.size>0){const R=Ml(rt.width,rt.height,S.format,S.type);for(const G of S.layerUpdates){const tt=rt.data.subarray(G*R/rt.data.BYTES_PER_ELEMENT,(G+1)*R/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,G,rt.width,rt.height,1,St,zt,tt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,zt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,St,zt,rt.data);else if(S.isData3DTexture)kt?(ie&&e.texStorage3D(n.TEXTURE_3D,vt,Nt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,zt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,St,zt,rt.data);else if(S.isFramebufferTexture){if(ie)if(kt)e.texStorage2D(n.TEXTURE_2D,vt,Nt,rt.width,rt.height);else{let R=rt.width,G=rt.height;for(let tt=0;tt<vt;tt++)e.texImage2D(n.TEXTURE_2D,tt,Nt,R,G,0,St,zt,null),R>>=1,G>>=1}}else if(Gt.length>0){if(kt&&ie){const R=gt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Nt,R.width,R.height)}for(let R=0,G=Gt.length;R<G;R++)_t=Gt[R],kt?N&&e.texSubImage2D(n.TEXTURE_2D,R,0,0,St,zt,_t):e.texImage2D(n.TEXTURE_2D,R,Nt,St,zt,_t);S.generateMipmaps=!1}else if(kt){if(ie){const R=gt(rt);e.texStorage2D(n.TEXTURE_2D,vt,Nt,R.width,R.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,zt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Nt,St,zt,rt);p(S)&&m($),bt.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Z(A,S,z){if(S.image.length!==6)return;const $=qt(A,S),Q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const J=i.get(Q);if(Q.version!==J.__version||$===!0){e.activeTexture(n.TEXTURE0+z);const bt=ae.getPrimaries(ae.workingColorSpace),dt=S.colorSpace===fi?null:ae.getPrimaries(S.colorSpace),ht=S.colorSpace===fi||bt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Bt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let G=0;G<6;G++)!Bt&&!rt?St[G]=_(S.image[G],!0,s.maxCubemapSize):St[G]=rt?S.image[G].image:S.image[G],St[G]=Yt(S,St[G]);const zt=St[0],Nt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Gt=M(S.internalFormat,Nt,_t,S.colorSpace),kt=S.isVideoTexture!==!0,ie=J.__version===void 0||$===!0,N=Q.dataReady;let vt=E(S,zt);xt(n.TEXTURE_CUBE_MAP,S);let R;if(Bt){kt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Gt,zt.width,zt.height);for(let G=0;G<6;G++){R=St[G].mipmaps;for(let tt=0;tt<R.length;tt++){const it=R[tt];S.format!==An?Nt!==null?kt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,0,0,it.width,it.height,Nt,it.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,Gt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,0,0,it.width,it.height,Nt,_t,it.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,Gt,it.width,it.height,0,Nt,_t,it.data)}}}else{if(R=S.mipmaps,kt&&ie){R.length>0&&vt++;const G=gt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Gt,G.width,G.height)}for(let G=0;G<6;G++)if(rt){kt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,St[G].width,St[G].height,Nt,_t,St[G].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Gt,St[G].width,St[G].height,0,Nt,_t,St[G].data);for(let tt=0;tt<R.length;tt++){const Xt=R[tt].image[G].image;kt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,0,0,Xt.width,Xt.height,Nt,_t,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,Gt,Xt.width,Xt.height,0,Nt,_t,Xt.data)}}else{kt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Nt,_t,St[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Gt,Nt,_t,St[G]);for(let tt=0;tt<R.length;tt++){const it=R[tt];kt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,0,0,Nt,_t,it.image[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,Gt,Nt,_t,it.image[G])}}}p(S)&&m(n.TEXTURE_CUBE_MAP),J.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function O(A,S,z,$,Q,J){const bt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),ht=M(z.internalFormat,bt,dt,z.colorSpace);if(!i.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>J),St=Math.max(1,S.height>>J);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,ht,rt,St,S.depth,0,bt,dt,null):e.texImage2D(Q,J,ht,rt,St,0,bt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Wt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,i.get(z).__webglTexture,0,Ut(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,i.get(z).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(A,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,J=v(S.stencilBuffer,Q),bt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=Ut(S);Wt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,J,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,A)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const J=$[Q],bt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),ht=M(J.internalFormat,bt,dt,J.colorSpace),Bt=Ut(S);z&&Wt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,ht,S.width,S.height):Wt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,ht,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ht,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function et(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const $=i.get(S.depthTexture).__webglTexture,Q=Ut(S);if(S.depthTexture.format===ds)Wt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(S.depthTexture.format===vs)Wt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function st(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");et(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),at(S.__webglDepthbuffer[$],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),at(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(A,S,z){const $=i.get(A);S!==void 0&&O($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&st(A)}function Et(A){const S=A.texture,z=i.get(A),$=i.get(S);A.addEventListener("dispose",b);const Q=A.textures,J=A.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let ht=0;ht<S.mipmaps.length;ht++)z.__webglFramebuffer[dt][ht]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(bt)for(let dt=0,ht=Q.length;dt<ht;dt++){const Bt=i.get(Q[dt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const ht=Q[dt];z.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const Bt=r.convert(ht.format,ht.colorSpace),rt=r.convert(ht.type),St=M(ht.internalFormat,Bt,rt,ht.colorSpace,A.isXRRenderTarget===!0),zt=Ut(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,St,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),at(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),xt(n.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)O(z.__webglFramebuffer[dt][ht],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,ht);else O(z.__webglFramebuffer[dt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let dt=0,ht=Q.length;dt<ht;dt++){const Bt=Q[dt],rt=i.get(Bt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),xt(n.TEXTURE_2D,Bt),O(z.__webglFramebuffer,A,Bt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),p(Bt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),xt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)O(z.__webglFramebuffer[ht],A,S,n.COLOR_ATTACHMENT0,dt,ht);else O(z.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,dt,0);p(S)&&m(dt),e.unbindTexture()}A.depthBuffer&&st(A)}function wt(A){const S=A.textures;for(let z=0,$=S.length;z<$;z++){const Q=S[z];if(p(Q)){const J=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,bt=i.get(Q).__webglTexture;e.bindTexture(J,bt),m(J),e.unbindTexture()}}}const Tt=[],L=[];function mt(A){if(A.samples>0){if(Wt(A)===!1){const S=A.textures,z=A.width,$=A.height;let Q=n.COLOR_BUFFER_BIT;const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(A),dt=S.length>1;if(dt)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[ht]);const Bt=i.get(S[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,Q,n.NEAREST),c===!0&&(Tt.length=0,L.length=0,Tt.push(n.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(J),L.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,bt.__webglColorRenderbuffer[ht]);const Bt=i.get(S[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ut(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Yt(A,S){const z=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Mi&&z!==fi&&(ae.getTransfer(z)===de?($!==An||Q!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=y,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=ot,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=O,this.useMultisampledRTT=Wt}function Tg(n,t){function e(i,s=fi){let r;const a=ae.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===$o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.BYTE;if(i===lh)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===Ko)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Gs)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===dh)return n.RGB;if(i===An)return n.RGBA;if(i===fh)return n.LUMINANCE;if(i===ph)return n.LUMINANCE_ALPHA;if(i===ds)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===mh)return n.RED;if(i===Jo)return n.RED_INTEGER;if(i===gh)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===Dr||i===Ir||i===Ur||i===Nr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===co||i===lo||i===ho||i===uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fo||i===po||i===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fo||i===po)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===go||i===_o||i===xo||i===vo||i===Mo||i===So||i===yo||i===Eo||i===wo||i===To||i===bo||i===Ao||i===Ro||i===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===So)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===To)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Or||i===Po||i===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Or)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_h||i===Do||i===Io||i===Uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Or)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class bg extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends Es{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Pg,p=e.getContextAttributes();let m=null,M=null;const v=[],E=[],C=new Qt;let b=null;const T=new $e;T.layers.enable(1),T.viewport=new ce;const P=new $e;P.layers.enable(2),P.viewport=new ce;const D=[T,P],x=new bg;x.layers.enable(1),x.layers.enable(2);let y=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let O=v[Z];return O===void 0&&(O=new Na,v[Z]=O),O.getTargetRaySpace()},this.getControllerGrip=function(Z){let O=v[Z];return O===void 0&&(O=new Na,v[Z]=O),O.getGripSpace()},this.getHand=function(Z){let O=v[Z];return O===void 0&&(O=new Na,v[Z]=O),O.getHandSpace()};function F(Z){const O=E.indexOf(Z.inputSource);if(O===-1)return;const at=v[O];at!==void 0&&(at.update(Z.inputSource,Z.frame,l||a),at.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<v.length;Z++){const O=E[Z];O!==null&&(E[Z]=null,v[Z].disconnect(O))}y=null,U=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",j),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,O),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Oi(f.framebufferWidth,f.framebufferHeight,{format:An,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,at=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=p.stencil?vs:ds,at=p.stencil?xs:Ni);const st={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(st),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Oi(d.textureWidth,d.textureHeight,{format:An,type:ei,depthTexture:new Lh(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let O=0;O<Z.removed.length;O++){const at=Z.removed[O],et=E.indexOf(at);et>=0&&(E[et]=null,v[et].disconnect(at))}for(let O=0;O<Z.added.length;O++){const at=Z.added[O];let et=E.indexOf(at);if(et===-1){for(let ot=0;ot<v.length;ot++)if(ot>=E.length){E.push(at),et=ot;break}else if(E[ot]===null){E[ot]=at,et=ot;break}if(et===-1)break}const st=v[et];st&&st.connect(at)}}const V=new I,K=new I;function B(Z,O,at){V.setFromMatrixPosition(O.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);const et=V.distanceTo(K),st=O.projectionMatrix.elements,ot=at.projectionMatrix.elements,Et=st[14]/(st[10]-1),wt=st[14]/(st[10]+1),Tt=(st[9]+1)/st[5],L=(st[9]-1)/st[5],mt=(st[8]-1)/st[0],Ut=(ot[8]+1)/ot[0],Wt=Et*mt,At=Et*Ut,Yt=et/(-mt+Ut),gt=Yt*-mt;if(O.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(gt),Z.translateZ(Yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),st[10]===-1)Z.projectionMatrix.copy(O.projectionMatrix),Z.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const A=Et+Yt,S=wt+Yt,z=Wt-gt,$=At+(et-gt),Q=Tt*wt/S*A,J=L*wt/S*A;Z.projectionMatrix.makePerspective(z,$,Q,J,A,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,O){O===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(O.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let O=Z.near,at=Z.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(at=_.depthFar)),x.near=P.near=T.near=O,x.far=P.far=T.far=at,(y!==x.near||U!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,U=x.far);const et=Z.parent,st=x.cameras;ct(x,et);for(let ot=0;ot<st.length;ot++)ct(st[ot],et);st.length===2?B(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),nt(Z,x,et)};function nt(Z,O,at){at===null?Z.matrix.copy(O.matrixWorld):(Z.matrix.copy(at.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(O.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(O.projectionMatrix),Z.projectionMatrixInverse.copy(O.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function qt(Z,O){if(h=O.getViewerPose(l||a),g=O,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let et=!1;at.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let ot=0;ot<at.length;ot++){const Et=at[ot];let wt=null;if(f!==null)wt=f.getViewport(Et);else{const L=u.getViewSubImage(d,Et);wt=L.viewport,ot===0&&(t.setRenderTargetTextures(M,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let Tt=D[ot];Tt===void 0&&(Tt=new $e,Tt.layers.enable(ot),Tt.viewport=new ce,D[ot]=Tt),Tt.matrix.fromArray(Et.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Et.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(wt.x,wt.y,wt.width,wt.height),ot===0&&(x.matrix.copy(Tt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(Tt)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")){const ot=u.getDepthInformation(at[0]);ot&&ot.isValid&&ot.texture&&_.init(t,ot,s.renderState)}}for(let at=0;at<v.length;at++){const et=E[at],st=v[at];et!==null&&st!==void 0&&st.update(et,O,l||a)}xt&&xt(Z,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const Jt=new Ch;Jt.setAnimationLoop(qt),this.setAnimationLoop=function(Z){xt=Z},this.dispose=function(){}}}const Ri=new Rn,Dg=new me;function Ig(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,bh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ve&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ve&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,E=M.envMapRotation;v&&(p.envMap.value=v,Ri.copy(E),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(Ri)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ug(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const E=v.program;i.uniformBlockBinding(M,E)}function l(M,v){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(M,C);const b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function h(M){const v=u();M.__bindingPointIndex=v;const E=n.createBuffer(),C=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],E=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,T=E.length;b<T;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let D=0,x=P.length;D<x;D++){const y=P[D];if(f(y,b,D,C)===!0){const U=y.__offset,F=Array.isArray(y.value)?y.value:[y.value];let j=0;for(let q=0;q<F.length;q++){const V=F[q],K=_(V);typeof V=="number"||typeof V=="boolean"?(y.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,U+j,y.__data)):V.isMatrix3?(y.__data[0]=V.elements[0],y.__data[1]=V.elements[1],y.__data[2]=V.elements[2],y.__data[3]=0,y.__data[4]=V.elements[3],y.__data[5]=V.elements[4],y.__data[6]=V.elements[5],y.__data[7]=0,y.__data[8]=V.elements[6],y.__data[9]=V.elements[7],y.__data[10]=V.elements[8],y.__data[11]=0):(V.toArray(y.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,v,E,C){const b=M.value,T=v+"_"+E;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{const P=C[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){const v=M.uniforms;let E=0;const C=16;for(let T=0,P=v.length;T<P;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=D.length;x<y;x++){const U=D[x],F=Array.isArray(U.value)?U.value:[U.value];for(let j=0,q=F.length;j<q;j++){const V=F[j],K=_(V),B=E%C,ct=B%K.boundary,nt=B+ct;E+=ct,nt!==0&&C-nt<K.storage&&(E+=C-nt),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=K.storage}}}const b=E%C;return b>0&&(E+=C-b),M.__size=E,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Ng{constructor(t={}){const{canvas:e=Sd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=xi,this.toneMappingExposure=1;const v=this;let E=!1,C=0,b=0,T=null,P=-1,D=null;const x=new ce,y=new ce;let U=null;const F=new Ot(0);let j=0,q=e.width,V=e.height,K=1,B=null,ct=null;const nt=new ce(0,0,q,V),xt=new ce(0,0,q,V);let qt=!1;const Jt=new rc;let Z=!1,O=!1;const at=new me,et=new me,st=new I,ot=new ce,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Tt(){return T===null?K:1}let L=i;function mt(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",it,!1),L===null){const k="webgl2";if(L=mt(k,w),L===null)throw mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ut,Wt,At,Yt,gt,A,S,z,$,Q,J,bt,dt,ht,Bt,rt,St,zt,Nt,_t,Gt,kt,ie,N;function vt(){Ut=new kp(L),Ut.init(),kt=new Tg(L,Ut),Wt=new Up(L,Ut,t,kt),At=new yg(L),Wt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),Yt=new Vp(L),gt=new og,A=new wg(L,Ut,At,gt,Wt,kt,Yt),S=new Op(v),z=new Bp(v),$=new Kd(L),ie=new Dp(L,$),Q=new Hp(L,$,Yt,ie),J=new qp(L,Q,$,Yt),Nt=new Wp(L,Wt,A),rt=new Np(gt),bt=new ag(v,S,z,Ut,Wt,ie,rt),dt=new Ig(v,gt),ht=new lg,Bt=new mg(Ut),zt=new Lp(v,S,z,At,J,d,c),St=new Mg(v,J,Wt),N=new Ug(L,Yt,Wt,At),_t=new Ip(L,Ut,Yt),Gt=new Gp(L,Ut,Yt),Yt.programs=bt.programs,v.capabilities=Wt,v.extensions=Ut,v.properties=gt,v.renderLists=ht,v.shadowMap=St,v.state=At,v.info=Yt}vt();const R=new Lg(v,L);this.xr=R,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(q,V,!1))},this.getSize=function(w){return w.set(q,V)},this.setSize=function(w,k,W=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,V=k,e.width=Math.floor(w*K),e.height=Math.floor(k*K),W===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(q*K,V*K).floor()},this.setDrawingBufferSize=function(w,k,W){q=w,V=k,K=W,e.width=Math.floor(w*W),e.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,k,W,Y){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,k,W,Y),At.viewport(x.copy(nt).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,k,W,Y){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,k,W,Y),At.scissor(y.copy(xt).multiplyScalar(K).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(w){At.setScissorTest(qt=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,k=!0,W=!0){let Y=0;if(w){let H=!1;if(T!==null){const lt=T.texture.format;H=lt===tc||lt===Qo||lt===Jo}if(H){const lt=T.texture.type,Mt=lt===ei||lt===Ni||lt===Hs||lt===xs||lt===$o||lt===Zo,Rt=zt.getClearColor(),Pt=zt.getClearAlpha(),Ht=Rt.r,Vt=Rt.g,Lt=Rt.b;Mt?(f[0]=Ht,f[1]=Vt,f[2]=Lt,f[3]=Pt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ht,g[1]=Vt,g[2]=Lt,g[3]=Pt,L.clearBufferiv(L.COLOR,0,g))}else Y|=L.COLOR_BUFFER_BIT}k&&(Y|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ht.dispose(),Bt.dispose(),gt.dispose(),S.dispose(),z.dispose(),J.dispose(),ie.dispose(),N.dispose(),bt.dispose(),R.dispose(),R.removeEventListener("sessionstart",As),R.removeEventListener("sessionend",Rs),Pn.stop()};function G(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Yt.autoReset,k=St.enabled,W=St.autoUpdate,Y=St.needsUpdate,H=St.type;vt(),Yt.autoReset=w,St.enabled=k,St.autoUpdate=W,St.needsUpdate=Y,St.type=H}function it(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){const k=w.target;k.removeEventListener("dispose",Xt),le(k)}function le(w){Ue(w),gt.remove(w)}function Ue(w){const k=gt.get(w).programs;k!==void 0&&(k.forEach(function(W){bt.releaseProgram(W)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,Y,H,lt){k===null&&(k=Et);const Mt=H.isMesh&&H.matrixWorld.determinant()<0,Rt=eu(w,k,W,Y,H);At.setMaterial(Y,Mt);let Pt=W.index,Ht=1;if(Y.wireframe===!0){if(Pt=Q.getWireframeAttribute(W),Pt===void 0)return;Ht=2}const Vt=W.drawRange,Lt=W.attributes.position;let oe=Vt.start*Ht,ue=(Vt.start+Vt.count)*Ht;lt!==null&&(oe=Math.max(oe,lt.start*Ht),ue=Math.min(ue,(lt.start+lt.count)*Ht)),Pt!==null?(oe=Math.max(oe,0),ue=Math.min(ue,Pt.count)):Lt!=null&&(oe=Math.max(oe,0),ue=Math.min(ue,Lt.count));const _e=ue-oe;if(_e<0||_e===1/0)return;ie.setup(H,Y,Rt,W,Pt);let Ze,se=_t;if(Pt!==null&&(Ze=$.get(Pt),se=Gt,se.setIndex(Ze)),H.isMesh)Y.wireframe===!0?(At.setLineWidth(Y.wireframeLinewidth*Tt()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(H.isLine){let Dt=Y.linewidth;Dt===void 0&&(Dt=1),At.setLineWidth(Dt*Tt()),H.isLineSegments?se.setMode(L.LINES):H.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else H.isPoints?se.setMode(L.POINTS):H.isSprite&&se.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Dt=H._multiDrawStarts,De=H._multiDrawCounts,re=H._multiDrawCount,xn=Pt?$.get(Pt).bytesPerElement:1,Hi=gt.get(Y).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)Hi.setValue(L,"_gl_DrawID",Je),se.render(Dt[Je]/xn,De[Je])}else if(H.isInstancedMesh)se.renderInstances(oe,_e,H.count);else if(W.isInstancedBufferGeometry){const Dt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,De=Math.min(W.instanceCount,Dt);se.renderInstances(oe,_e,De)}else se.render(oe,_e)};function Kt(w,k,W){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,Ks(w,k,W),w.side=zn,w.needsUpdate=!0,Ks(w,k,W),w.side=On):Ks(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),p=Bt.get(W),p.init(k),M.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const lt=H.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){const Rt=lt[Mt];Kt(Rt,W,H),Y.add(Rt)}else Kt(lt,W,H),Y.add(lt)}),M.pop(),p=null,Y},this.compileAsync=function(w,k,W=null){const Y=this.compile(w,k,W);return new Promise(H=>{function lt(){if(Y.forEach(function(Mt){gt.get(Mt).currentProgram.isReady()&&Y.delete(Mt)}),Y.size===0){H(w);return}setTimeout(lt,10)}Ut.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ge=null;function an(w){ge&&ge(w)}function As(){Pn.stop()}function Rs(){Pn.start()}const Pn=new Ch;Pn.setAnimationLoop(an),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(w){ge=w,R.setAnimationLoop(w),w===null?Pn.stop():Pn.start()},R.addEventListener("sessionstart",As),R.addEventListener("sessionend",Rs),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(k),k=R.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,T),p=Bt.get(w,M.length),p.init(k),M.push(p),et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Jt.setFromProjectionMatrix(et),O=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,O),_=ht.get(w,m.length),_.init(),m.push(_),R.enabled===!0&&R.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&ki(lt,k,-1/0,v.sortObjects)}ki(w,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(B,ct),wt=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,wt&&zt.addToRenderList(_,w),this.info.render.frame++,Z===!0&&rt.beginShadows();const W=p.state.shadowsArray;St.render(W,w,k),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,H=_.transmissive;if(p.setupLights(),k.isArrayCamera){const lt=k.cameras;if(H.length>0)for(let Mt=0,Rt=lt.length;Mt<Rt;Mt++){const Pt=lt[Mt];xc(Y,H,w,Pt)}wt&&zt.render(w);for(let Mt=0,Rt=lt.length;Mt<Rt;Mt++){const Pt=lt[Mt];_c(_,w,Pt,Pt.viewport)}}else H.length>0&&xc(Y,H,w,k),wt&&zt.render(w),_c(_,w,k);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,k),ie.resetDefaultState(),P=-1,D=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ki(w,k,W,Y){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Jt.intersectsSprite(w)){Y&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Mt=J.update(w),Rt=w.material;Rt.visible&&_.push(w,Mt,Rt,W,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Jt.intersectsObject(w))){const Mt=J.update(w),Rt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ot.copy(Mt.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(Rt)){const Pt=Mt.groups;for(let Ht=0,Vt=Pt.length;Ht<Vt;Ht++){const Lt=Pt[Ht],oe=Rt[Lt.materialIndex];oe&&oe.visible&&_.push(w,Mt,oe,W,ot.z,Lt)}}else Rt.visible&&_.push(w,Mt,Rt,W,ot.z,null)}}const lt=w.children;for(let Mt=0,Rt=lt.length;Mt<Rt;Mt++)ki(lt[Mt],k,W,Y)}function _c(w,k,W,Y){const H=w.opaque,lt=w.transmissive,Mt=w.transparent;p.setupLightsView(W),Z===!0&&rt.setGlobalState(v.clippingPlanes,W),Y&&At.viewport(x.copy(Y)),H.length>0&&js(H,k,W),lt.length>0&&js(lt,k,W),Mt.length>0&&js(Mt,k,W),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function xc(w,k,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Oi(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Gs:ei,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const lt=p.state.transmissionRenderTarget[Y.id],Mt=Y.viewport||x;lt.setSize(Mt.z,Mt.w);const Rt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(F),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),wt&&zt.render(W);const Pt=v.toneMapping;v.toneMapping=xi;const Ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Z===!0&&rt.setGlobalState(v.clippingPlanes,Y),js(w,W,Y),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Lt=0,oe=k.length;Lt<oe;Lt++){const ue=k[Lt],_e=ue.object,Ze=ue.geometry,se=ue.material,Dt=ue.group;if(se.side===On&&_e.layers.test(Y.layers)){const De=se.side;se.side=Ve,se.needsUpdate=!0,vc(_e,W,Y,Ze,se,Dt),se.side=De,se.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}v.setRenderTarget(Rt),v.setClearColor(F,j),Ht!==void 0&&(Y.viewport=Ht),v.toneMapping=Pt}function js(w,k,W){const Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,lt=w.length;H<lt;H++){const Mt=w[H],Rt=Mt.object,Pt=Mt.geometry,Ht=Y===null?Mt.material:Y,Vt=Mt.group;Rt.layers.test(W.layers)&&vc(Rt,k,W,Pt,Ht,Vt)}}function vc(w,k,W,Y,H,lt){w.onBeforeRender(v,k,W,Y,H,lt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(v,k,W,Y,w,lt),H.transparent===!0&&H.side===On&&H.forceSinglePass===!1?(H.side=Ve,H.needsUpdate=!0,v.renderBufferDirect(W,k,Y,H,w,lt),H.side=zn,H.needsUpdate=!0,v.renderBufferDirect(W,k,Y,H,w,lt),H.side=On):v.renderBufferDirect(W,k,Y,H,w,lt),w.onAfterRender(v,k,W,Y,H,lt)}function Ks(w,k,W){k.isScene!==!0&&(k=Et);const Y=gt.get(w),H=p.state.lights,lt=p.state.shadowsArray,Mt=H.state.version,Rt=bt.getParameters(w,H.state,lt,k,W),Pt=bt.getProgramCacheKey(Rt);let Ht=Y.programs;Y.environment=w.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",Xt),Ht=new Map,Y.programs=Ht);let Vt=Ht.get(Pt);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===Mt)return Sc(w,Rt),Vt}else Rt.uniforms=bt.getUniforms(w),w.onBeforeCompile(Rt,v),Vt=bt.acquireProgram(Rt,Pt),Ht.set(Pt,Vt),Y.uniforms=Rt.uniforms;const Lt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),Sc(w,Rt),Y.needsLights=iu(w),Y.lightsStateVersion=Mt,Y.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function Mc(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=zr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Sc(w,k){const W=gt.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function eu(w,k,W,Y,H){k.isScene!==!0&&(k=Et),A.resetTextureUnits();const lt=k.fog,Mt=Y.isMeshStandardMaterial?k.environment:null,Rt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Mi,Pt=(Y.isMeshStandardMaterial?z:S).get(Y.envMap||Mt),Ht=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let _e=xi;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_e=v.toneMapping);const Ze=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=Ze!==void 0?Ze.length:0,Dt=gt.get(Y),De=p.state.lights;if(Z===!0&&(O===!0||w!==D)){const on=w===D&&Y.id===P;rt.setState(Y,w,on)}let re=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==De.state.version||Dt.outputColorSpace!==Rt||H.isBatchedMesh&&Dt.batching===!1||!H.isBatchedMesh&&Dt.batching===!0||H.isBatchedMesh&&Dt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Dt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Dt.instancing===!1||!H.isInstancedMesh&&Dt.instancing===!0||H.isSkinnedMesh&&Dt.skinning===!1||!H.isSkinnedMesh&&Dt.skinning===!0||H.isInstancedMesh&&Dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Dt.instancingMorph===!1&&H.morphTexture!==null||Dt.envMap!==Pt||Y.fog===!0&&Dt.fog!==lt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Ht||Dt.vertexTangents!==Vt||Dt.morphTargets!==Lt||Dt.morphNormals!==oe||Dt.morphColors!==ue||Dt.toneMapping!==_e||Dt.morphTargetsCount!==se)&&(re=!0):(re=!0,Dt.__version=Y.version);let xn=Dt.currentProgram;re===!0&&(xn=Ks(Y,k,H));let Hi=!1,Je=!1,sa=!1;const ye=xn.getUniforms(),si=Dt.uniforms;if(At.useProgram(xn.program)&&(Hi=!0,Je=!0,sa=!0),Y.id!==P&&(P=Y.id,Je=!0),Hi||D!==w){Wt.reverseDepthBuffer?(at.copy(w.projectionMatrix),Ed(at),wd(at),ye.setValue(L,"projectionMatrix",at)):ye.setValue(L,"projectionMatrix",w.projectionMatrix),ye.setValue(L,"viewMatrix",w.matrixWorldInverse);const on=ye.map.cameraPosition;on!==void 0&&on.setValue(L,st.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&ye.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ye.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Je=!0,sa=!0)}if(H.isSkinnedMesh){ye.setOptional(L,H,"bindMatrix"),ye.setOptional(L,H,"bindMatrixInverse");const on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ye.setValue(L,"boneTexture",on.boneTexture,A))}H.isBatchedMesh&&(ye.setOptional(L,H,"batchingTexture"),ye.setValue(L,"batchingTexture",H._matricesTexture,A),ye.setOptional(L,H,"batchingIdTexture"),ye.setValue(L,"batchingIdTexture",H._indirectTexture,A),ye.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ye.setValue(L,"batchingColorTexture",H._colorsTexture,A));const ra=W.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&Nt.update(H,W,xn),(Je||Dt.receiveShadow!==H.receiveShadow)&&(Dt.receiveShadow=H.receiveShadow,ye.setValue(L,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(si.envMap.value=Pt,si.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(si.envMapIntensity.value=k.environmentIntensity),Je&&(ye.setValue(L,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&nu(si,sa),lt&&Y.fog===!0&&dt.refreshFogUniforms(si,lt),dt.refreshMaterialUniforms(si,Y,K,V,p.state.transmissionRenderTarget[w.id]),zr.upload(L,Mc(Dt),si,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(zr.upload(L,Mc(Dt),si,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ye.setValue(L,"center",H.center),ye.setValue(L,"modelViewMatrix",H.modelViewMatrix),ye.setValue(L,"normalMatrix",H.normalMatrix),ye.setValue(L,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const on=Y.uniformsGroups;for(let aa=0,su=on.length;aa<su;aa++){const yc=on[aa];N.update(yc,xn),N.bind(yc,xn)}}return xn}function nu(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function iu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,k,W){gt.get(w.texture).__webglTexture=k,gt.get(w.depthTexture).__webglTexture=W;const Y=gt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const W=gt.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,W=0){T=w,C=k,b=W;let Y=!0,H=null,lt=!1,Mt=!1;if(w){const Pt=gt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Pt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Pt.__hasExternalTextures)A.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Lt=w.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&gt.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);const Vt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?H=Vt[k][W]:H=Vt[k],lt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?H=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[W]:H=Vt,x.copy(w.viewport),y.copy(w.scissor),U=w.scissorTest}else x.copy(nt).multiplyScalar(K).floor(),y.copy(xt).multiplyScalar(K).floor(),U=qt;if(At.bindFramebuffer(L.FRAMEBUFFER,H)&&Y&&At.drawBuffers(w,H),At.viewport(x),At.scissor(y),At.setScissorTest(U),lt){const Pt=gt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,W)}else if(Mt){const Pt=gt.get(w.texture),Ht=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,W||0,Ht)}P=-1},this.readRenderTargetPixels=function(w,k,W,Y,H,lt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){At.bindFramebuffer(L.FRAMEBUFFER,Rt);try{const Pt=w.texture,Ht=Pt.format,Vt=Pt.type;if(!Wt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Y&&W>=0&&W<=w.height-H&&L.readPixels(k,W,Y,H,kt.convert(Ht),kt.convert(Vt),lt)}finally{const Pt=T!==null?gt.get(T).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,Y,H,lt,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){const Pt=w.texture,Ht=Pt.format,Vt=Pt.type;if(!Wt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-Y&&W>=0&&W<=w.height-H){At.bindFramebuffer(L.FRAMEBUFFER,Rt);const Lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.bufferData(L.PIXEL_PACK_BUFFER,lt.byteLength,L.STREAM_READ),L.readPixels(k,W,Y,H,kt.convert(Ht),kt.convert(Vt),0);const oe=T!==null?gt.get(T).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,oe);const ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yd(L,ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,lt),L.deleteBuffer(Lt),L.deleteSync(ue),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,W=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-W),H=Math.floor(w.image.width*Y),lt=Math.floor(w.image.height*Y),Mt=k!==null?k.x:0,Rt=k!==null?k.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Mt,Rt,H,lt),At.unbindTexture()},this.copyTextureToTexture=function(w,k,W=null,Y=null,H=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],k=arguments[2],H=arguments[3]||0,W=null);let lt,Mt,Rt,Pt,Ht,Vt;W!==null?(lt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Rt=W.min.x,Pt=W.min.y):(lt=w.image.width,Mt=w.image.height,Rt=0,Pt=0),Y!==null?(Ht=Y.x,Vt=Y.y):(Ht=0,Vt=0);const Lt=kt.convert(k.format),oe=kt.convert(k.type);A.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const ue=L.getParameter(L.UNPACK_ROW_LENGTH),_e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),se=L.getParameter(L.UNPACK_SKIP_ROWS),Dt=L.getParameter(L.UNPACK_SKIP_IMAGES),De=w.isCompressedTexture?w.mipmaps[H]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,Ht,Vt,lt,Mt,Lt,oe,De.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,Ht,Vt,De.width,De.height,Lt,De.data):L.texSubImage2D(L.TEXTURE_2D,H,Ht,Vt,lt,Mt,Lt,oe,De),L.pixelStorei(L.UNPACK_ROW_LENGTH,ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),H===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(w,k,W=null,Y=null,H=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],k=arguments[3],H=arguments[4]||0);let lt,Mt,Rt,Pt,Ht,Vt,Lt,oe,ue;const _e=w.isCompressedTexture?w.mipmaps[H]:w.image;W!==null?(lt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Rt=W.max.z-W.min.z,Pt=W.min.x,Ht=W.min.y,Vt=W.min.z):(lt=_e.width,Mt=_e.height,Rt=_e.depth,Pt=0,Ht=0,Vt=0),Y!==null?(Lt=Y.x,oe=Y.y,ue=Y.z):(Lt=0,oe=0,ue=0);const Ze=kt.convert(k.format),se=kt.convert(k.type);let Dt;if(k.isData3DTexture)A.setTexture3D(k,0),Dt=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),Dt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const De=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xn=L.getParameter(L.UNPACK_SKIP_PIXELS),Hi=L.getParameter(L.UNPACK_SKIP_ROWS),Je=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Dt,H,Lt,oe,ue,lt,Mt,Rt,Ze,se,_e.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Dt,H,Lt,oe,ue,lt,Mt,Rt,Ze,_e.data):L.texSubImage3D(Dt,H,Lt,oe,ue,lt,Mt,Rt,Ze,se,_e),L.pixelStorei(L.UNPACK_ROW_LENGTH,De),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Hi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Je),H===0&&k.generateMipmaps&&L.generateMipmap(Dt),At.unbindTexture()},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){C=0,b=0,T=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===nc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Jr?"display-p3":"srgb"}}class oc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Og extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oh extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sl=new me,Oo=new sc,_r=new Qr,xr=new I;class Fg extends Te{constructor(t=new qe,e=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;Sl.copy(s).invert(),Oo.copy(t.ray).applyMatrix4(Sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);xr.fromBufferAttribute(u,p),yl(xr,p,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)xr.fromBufferAttribute(u,g),yl(xr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yl(n,t,e,i,s,r,a){const o=Oo.distanceSqToPoint(n);if(o<e){const c=new I;Oo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zi extends We{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Be extends qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=i/2;let m=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(f,2));function M(){const E=new I,C=new I;let b=0;const T=(e-t)/i;for(let P=0;P<=r;P++){const D=[],x=P/r,y=x*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,j=F*c+o,q=Math.sin(j),V=Math.cos(j);C.x=y*q,C.y=-x*i+p,C.z=y*V,u.push(C.x,C.y,C.z),E.set(q,T,V).normalize(),d.push(E.x,E.y,E.z),f.push(F,1-x),D.push(g++)}_.push(D)}for(let P=0;P<s;P++)for(let D=0;D<r;D++){const x=_[D][P],y=_[D+1][P],U=_[D+1][P+1],F=_[D][P+1];t>0&&(h.push(x,y,F),b+=3),e>0&&(h.push(y,U,F),b+=3)}l.addGroup(m,b,0),m+=b}function v(E){const C=g,b=new Qt,T=new I;let P=0;const D=E===!0?t:e,x=E===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const y=g;for(let U=0;U<=s;U++){const j=U/s*c+o,q=Math.cos(j),V=Math.sin(j);T.x=D*V,T.y=p*x,T.z=D*q,u.push(T.x,T.y,T.z),d.push(0,x,0),b.x=q*.5+.5,b.y=V*.5*x+.5,f.push(b.x,b.y),g++}for(let U=0;U<s;U++){const F=C+U,j=y+U;E===!0?h.push(j,j+1,F):h.push(j+1,j,F),P+=3}l.addGroup(m,P,E===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ea extends Be{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ea(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cc extends qe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new I,E=new I,C=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],E),f(e[b+2],C),c(v,E,C,M)}function c(M,v,E,C){const b=C+1,T=[];for(let P=0;P<=b;P++){T[P]=[];const D=M.clone().lerp(E,P/b),x=v.clone().lerp(E,P/b),y=b-P;for(let U=0;U<=y;U++)U===0&&P===b?T[P][U]=D:T[P][U]=D.clone().lerp(x,U/y)}for(let P=0;P<b;P++)for(let D=0;D<2*(b-P)-1;D++){const x=Math.floor(D/2);D%2===0?(d(T[P][x+1]),d(T[P+1][x]),d(T[P][x])):(d(T[P][x+1]),d(T[P+1][x+1]),d(T[P+1][x]))}}function l(M){const v=new I;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(M),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function h(){const M=new I;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const E=p(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;a.push(E,1-C)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const v=a[M+0],E=a[M+2],C=a[M+4],b=Math.max(v,E,C),T=Math.min(v,E,C);b>.9&&T<.1&&(v<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){const E=M*3;v.x=t[E+0],v.y=t[E+1],v.z=t[E+2]}function g(){const M=new I,v=new I,E=new I,C=new I,b=new Qt,T=new Qt,P=new Qt;for(let D=0,x=0;D<r.length;D+=9,x+=6){M.set(r[D+0],r[D+1],r[D+2]),v.set(r[D+3],r[D+4],r[D+5]),E.set(r[D+6],r[D+7],r[D+8]),b.set(a[x+0],a[x+1]),T.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),C.copy(M).add(v).add(E).divideScalar(3);const y=p(C);_(b,x+0,M,y),_(T,x+2,v,y),_(P,x+4,E,y)}}function _(M,v,E,C){C<0&&M.x===1&&(a[v]=M.x-1),E.x===0&&E.z===0&&(a[v]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.vertices,t.indices,t.radius,t.details)}}class na extends cc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new na(t.radius,t.detail)}}class lc extends qe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,g=new Qt;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=r+p/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const M=m+p,v=M,E=M+i+1,C=M+i+2,b=M+1;o.push(v,E,b),o.push(E,C,b)}}this.setIndex(o),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vi extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const M=[],v=m/i;let E=0;m===0&&a===0?E=.5/e:m===i&&c===Math.PI&&(E=-.5/e);for(let C=0;C<=e;C++){const b=C/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(b+E,1-v),M.push(l++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){const v=h[m][M+1],E=h[m][M],C=h[m+1][M],b=h[m+1][M+1];(m!==0||a>0)&&f.push(v,E,b),(m!==i-1||c<Math.PI)&&f.push(E,C,b)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mn extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fo extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ws extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zg extends Ws{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oa=new me,El=new I,wl=new I;class hc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wl),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bg extends hc{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Ms*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kg extends Ws{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Tl=new me,Us=new I,Fa=new I;class Hg extends hc{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),i.position.copy(Us),Fa.copy(i.position),Fa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Fa),i.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),Tl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class Gg extends Ws{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vg extends hc{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bl extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wg extends Ws{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);const qg={clear:0,overcast:.88,rain:1,storm:1},Xg=n=>qg[n==null?void 0:n.condition]??0,Dn={hemi:.44,ambient:.48,bounce:.34,exposure:.15,fov:-6,shadowSpan:18,shadowBias:-25e-5,shadowNormalBias:.01,rate:2.6},vr={shadowSpan:55,shadowBias:-4e-4,shadowNormalBias:.035},Al=.45,Yg=6;class jg{constructor(t){this.spot=new kg(16767392,0,9,1.15,.7,2),this.spot.castShadow=!0,this.spot.shadow.mapSize.set(1024,1024),this.spot.shadow.camera.near=.3,this.spot.shadow.camera.far=9,this.spot.shadow.bias=-8e-4,this.spot.shadow.normalBias=.012,this.spot.shadow.autoUpdate=!1,this.spot.target=new Te,t.add(this.spot,this.spot.target),this._base=new WeakMap,this._roomLights=new WeakMap,this._tmp=new I}base(t){let e=this._base.get(t);return e===void 0&&(e=t.intensity,this._base.set(t,e)),e}lightsFor(t,e){var a;const i=this._roomLights.get(e);if(i!==void 0)return i;let s=e.lights;if(!s){const o=(a=t.buildings)==null?void 0:a.find(c=>c.lights&&Math.abs(c.x-e.x)<.01&&Math.abs(c.z-e.z)<.01&&Math.abs(c.rotY-e.rotY)<.01);s=o==null?void 0:o.lights}if(!s||!s.length)return this._roomLights.set(e,null),null;const r=e.interiorBounds;if(r){const o=Math.cos(e.rotY),c=Math.sin(e.rotY),l=s.filter(h=>{h.updateWorldMatrix(!0,!1),h.getWorldPosition(this._tmp);const u=this._tmp.x-e.x,d=this._tmp.z-e.z,f=u*o-d*c,g=u*c+d*o;return f>r.minX&&f<r.maxX&&g>r.minZ&&g<r.maxZ});l.length&&(s=l)}return this._roomLights.set(e,s),s}update(t,e,i){const s=t.currentBuilding,r=s?this.lightsFor(t,s):null;let a=null,o=Yg;if(r&&e>.02&&i)for(const c of r){const l=c.getWorldPosition(this._tmp).distanceTo(i.position);l<o&&(a=c,o=l)}for(const c of t.enterable){const l=c===s?r:this.lightsFor(t,c);if(!l)continue;const h=c===s?e:0;for(const u of l){const d=h*this.base(u)*(u===a?1-Al:1);u.intensity!==d&&(u.intensity=d)}}a?(a.getWorldPosition(this._tmp),this.spot.position.copy(this._tmp),this.spot.target.position.set(this._tmp.x,this._floorY(s,i),this._tmp.z),this.spot.target.updateMatrixWorld(),this.spot.color.copy(a.color),this.spot.intensity=e*this.base(a)*Al,this.spot.shadow.autoUpdate=!0):(this.spot.intensity!==0||this.spot.shadow.autoUpdate)&&(this.spot.intensity=0,this.spot.shadow.autoUpdate=!1)}_floorY(t,e){const i=e.position.y,s=(t==null?void 0:t.padY)??i;return i-s>.5?i:s}}const Kg=`
  varying vec3 vWorld;
  void main() {
    vWorld = normalize((modelMatrix * vec4(position, 1.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,$g=`
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
`,ui=[{t:0,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05},{t:.22,top:1779520,mid:5329002,bot:10123890,sun:16751964,amb:4868704,int:.3},{t:.27,top:5208752,mid:10466511,bot:15778714,sun:16761479,amb:9082024,int:.75},{t:.4,top:4884168,mid:10339044,bot:14214898,sun:16774109,amb:11058384,int:1},{t:.52,top:4161476,mid:9682402,bot:13886450,sun:16777215,amb:11453142,int:1.05},{t:.72,top:4882360,mid:11058388,bot:14734013,sun:16771524,amb:10530496,int:.85},{t:.8,top:2902642,mid:9072512,bot:14256732,sun:16747082,amb:6969960,int:.42},{t:.86,top:1186350,mid:2962768,bot:5917272,sun:9067114,amb:2764872,int:.14},{t:1,top:329487,mid:658970,bot:1317414,sun:2766160,amb:1712176,int:.05}];function Zg(n){let t=ui[0],e=ui[ui.length-1];for(let a=0;a<ui.length-1;a++)if(n>=ui[a].t&&n<=ui[a+1].t){t=ui[a],e=ui[a+1];break}const i=e.t-t.t||1,s=(n-t.t)/i,r=(a,o)=>new Ot(a).lerp(new Ot(o),s);return{top:r(t.top,e.top),mid:r(t.mid,e.mid),bot:r(t.bot,e.bot),sun:r(t.sun,e.sun),amb:r(t.amb,e.amb),int:t.int+(e.int-t.int)*s}}class Jg{constructor(t,e){this.game=e,this.canvas=t,this.renderer=new Ng({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rh,this.renderer.outputColorSpace=ze,this.renderer.toneMapping=ah,this.renderer.toneMappingExposure=1.05,this.scene=new Og,this.scene.fog=new oc(11059416,60,340),this._buildSky(),this._buildLights(),this.indoorFactor=0,this.interiorLights=new jg(this.scene),this.quality={shadows:!0,drawDistance:340},addEventListener("resize",()=>this.resize())}_buildSky(){this.skyUniforms={uTop:{value:new Ot(4884168)},uMid:{value:new Ot(10339044)},uBottom:{value:new Ot(14214898)},uSunY:{value:.6},uSunDir:{value:new I(0,1,0)},uSunColour:{value:new Ot(16777215)},uExposure:{value:1.05}};const t=new yt(new vi(900,32,20),new ii({uniforms:this.skyUniforms,vertexShader:Kg,fragmentShader:$g,side:Ve,depthWrite:!1,fog:!1}));t.frustumCulled=!1,this.scene.add(t),this.sky=t;const e=900,i=new Float32Array(e*3);for(let r=0;r<e;r++){const a=new I().randomDirection().multiplyScalar(850);a.y<40&&(a.y=Math.abs(a.y)+40),i.set([a.x,a.y,a.z],r*3)}const s=new qe;s.setAttribute("position",new Ee(i,3)),this.stars=new Fg(s,new Oh({color:16777215,size:3.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.moon=new yt(new vi(18,16,12),new Ts({color:14673648,fog:!1})),this.scene.add(this.moon)}_buildLights(){this.hemi=new zg(12374760,5918784,.9),this.scene.add(this.hemi),this.sun=new bl(16774109,2.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=420,this.shadowSpan=vr.shadowSpan,this._applyShadowSpan(0),this.scene.add(this.sun),this.scene.add(this.sun.target),this.bounce=new bl(10467020,.35),this.scene.add(this.bounce),this.scene.add(this.bounce.target),this.ambient=new Wg(11058384,.35),this.scene.add(this.ambient)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}_applyShadowSpan(t){const e=Tn.lerp(vr.shadowSpan,Dn.shadowSpan,t);if(Math.abs(e-this.shadowSpan)>1e-4||!this._spanApplied){this.shadowSpan=e;const i=this.sun.shadow.camera;i.left=-e,i.right=e,i.top=e,i.bottom=-e,i.updateProjectionMatrix(),this._spanApplied=!0}this.sun.shadow.bias=Tn.lerp(vr.shadowBias,Dn.shadowBias,t),this.sun.shadow.normalBias=Tn.lerp(vr.shadowNormalBias,Dn.shadowNormalBias,t)}_skyDelta(t){const e=performance.now(),i=(e-(this._lastSky??e))/1e3;return this._lastSky=e,t>0?Math.min(t,.25):i>.001?Math.min(i,.25):this.game.fixedStep||1/60}updateSky(t,e,i=0,s=0){var U,F;const r=this._skyDelta(s),a=(U=this.game.world)==null?void 0:U.weather,o=Xg(a),c=(F=this.game.world)!=null&&F.isIndoors?1:0;this.indoorFactor+=(c-this.indoorFactor)*Math.min(1,r*Dn.rate);const l=this.indoorFactor;this._applyShadowSpan(l);const h=Zg(t);this.skyUniforms.uTop.value.copy(h.top),this.skyUniforms.uMid.value.copy(h.mid),this.skyUniforms.uBottom.value.copy(h.bot),this.skyUniforms.uSunColour.value.copy(h.sun);const u=(t-.25)*Math.PI*2,d=Math.sin(i/364*Math.PI*2)*.3,f=new I(Math.cos(u),Math.sin(u)+d,-.35).normalize();this.skyUniforms.uSunDir.value.copy(f),this.skyUniforms.uSunY.value=f.y;const g=(e==null?void 0:e.x)||0,_=(e==null?void 0:e.z)||0,p=(e==null?void 0:e.y)||0,m=this.shadowSpan*2/this.sun.shadow.mapSize.x,M=Math.round(g/m)*m,v=Math.round(_/m)*m;this.sun.position.set(M+f.x*160,p+Math.max(f.y,.08)*160,v+f.z*160),this.sun.target.position.set(M,p,v),this.sun.target.updateMatrixWorld();const E=Math.max(0,f.y),C=Tn.smoothstep(f.y,-.005,.03);this.sun.intensity=Math.pow(E,.65)*3*(1-o)*C,this.sun.color.copy(h.sun).lerp(new Ot(15265524),o),this.sun.shadow.autoUpdate=this.sun.intensity>.01,this.bounce.position.set(M-f.x*90,p+40,v-f.z*90),this.bounce.target.position.set(M,p,v),this.bounce.target.updateMatrixWorld(),this.bounce.intensity=.15+h.int*.4,this.bounce.color.copy(h.mid),this.moon.position.set(g-f.x*600,-f.y*600,_-f.z*600),this.moon.visible=f.y<.08;const b=Tn.clamp((.06-f.y)*6,0,1),T=a!=null&&a.wetness?1:0;this.hemi.intensity=.25+h.int*.8+b*.5+o*.5*(1-T*.5),this.hemi.color.copy(h.mid).lerp(new Ot(5992332),b*.7).lerp(new Ot(13161180),o*.6),this.ambient.intensity=.12+h.int*.3+b*.38+o*.05,this.ambient.color.copy(h.amb).lerp(new Ot(6978201),b*.8),this.stars.material.opacity=b*.9,this.hemi.intensity*=Math.pow(Dn.hemi,l),this.ambient.intensity*=Math.pow(Dn.ambient,l),this.bounce.intensity*=Math.pow(Dn.bounce,l),this.scene.fog.color.copy(h.mid).lerp(h.bot,.45);const P=a!=null&&a.wetness?.45:0,D=a&&["overcast","rain","storm"].includes(a.condition)?.25:0;this.scene.fog.near=60-(P+D)*40,this.scene.fog.far=this.quality.drawDistance*(1-P*.35-D*.15-b*.3);const x=1+b*.45+(1-Math.min(1,h.int))*.2+o*.12+T*.03+l*Dn.exposure;this.renderer.toneMappingExposure+=(x-this.renderer.toneMappingExposure)*Math.min(1,r*Dn.rate),this.skyUniforms.uExposure.value=this.renderer.toneMappingExposure,this.nightFactor=b;const y=this.game.world;if(y!=null&&y.enterable){const j=.34+o*.26;this.interiorLights.update(y,Math.max(j,b),this.game.player)}this.sky&&this.sky.position.set(g,0,_),this.stars.position.set(g,0,_)}resize(){var e;this.renderer.setSize(innerWidth,innerHeight,!1);const t=(e=this.game.camera)==null?void 0:e.active;t&&(t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix())}render(t){this.renderer.render(this.scene,t)}}const Ns=[{id:"first",label:"First person",distance:0,height:0,fov:64},{id:"third",label:"Third person",distance:3.6,height:.35,shoulder:.55,fov:52},{id:"thirdFar",label:"Third person (wide)",distance:6.5,height:.9,shoulder:0,fov:50}],Qg=Dn.fov;class t_{constructor(t){this.game=t,this.modeIndex=1,this.active=new $e(Ns[1].fov,innerWidth/innerHeight,.25,1e3),this.yaw=0,this.pitch=-.05,this.distance=Ns[1].distance,this._targetDistance=this.distance,this._pos=new I,this._look=new I,this._ray2=new sc,this._box=new ni,this._hit=new I,this.shakeAmount=0,this.bob=0,this.fovBoost=0}get mode(){return Ns[this.modeIndex]}get isFirstPerson(){return this.mode.id==="first"}cycle(){return this.modeIndex=(this.modeIndex+1)%Ns.length,this.game.bus.emit("camera:mode",{mode:this.mode}),this.mode}setMode(t){const e=Ns.findIndex(i=>i.id===t);e>=0&&(this.modeIndex=e)}addShake(t){this.shakeAmount=Math.min(1.2,this.shakeAmount+t)}update(t){const{input:e,player:i}=this.game;if(e.locked&&e.enabled){const c=e.consumeMouse();this.yaw-=c.dx*e.mouse.sensitivity,this.pitch-=(e.mouse.invertY?-c.dy:c.dy)*e.mouse.sensitivity;const l=Math.PI/2-.05;this.pitch=Tn.clamp(this.pitch,-l,l)}else e.consumeMouse();const s=this.mode,r=i.position.clone();r.y+=i.eyeHeight;const a=i.horizontalSpeed;if(a>.3){this.bob+=t*a*1.9;const c=this.isFirstPerson?.035:.012;r.y+=Math.sin(this.bob*2)*c,r.x+=Math.cos(this.bob)*c*.4}else this.bob+=t*1.1,r.y+=Math.sin(this.bob)*.006;const o=new I(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch));if(s.distance===0)this._pos.copy(r),this._look.copy(r).addScaledVector(o,10);else{const c=i.position.clone();c.y+=i.eyeHeight*.92+s.height;const l=new I(-Math.cos(this.yaw),0,Math.sin(this.yaw));c.addScaledVector(l,s.shoulder||0);const h=this.game.world,u=h.isIndoors,d=u?.35:.7;let f=u?Math.min(s.distance,2.2):s.distance;const g=o.clone().negate();this._ray2.set(c,g);const _=c.clone().addScaledVector(g,f*.5);let p=f+.45;for(const m of h.query(_,f+1.5)){this._box.set(m.min,m.max);const M=this._ray2.intersectBox(this._box,this._hit);if(!M)continue;const v=c.distanceTo(M);v<p&&(p=v)}if(f=Math.max(d,Math.min(f,p-.45)),f<.65){this._pos.copy(r),this._look.copy(r).addScaledVector(o,10),this.distance=0,this._targetDistance=f,this._applyShake(t),this._commit(t,s,i);return}if(this._targetDistance+=(f-this._targetDistance)*(f<this._targetDistance?1:Math.min(1,t*5)),this.distance=this._targetDistance,this._pos.copy(c).addScaledVector(g,this.distance),this._look.copy(c).addScaledVector(o,4),u){const m=h.currentBuilding,M=m.interiorBounds;this._pos.y=Math.min(this._pos.y,m.padY+M.maxY-.2),this._pos.y=Math.max(this._pos.y,m.padY+.3)}}this._applyShake(t),this._commit(t,s,i)}_applyShake(t){if(this.shakeAmount<=.001)return;const e=this.shakeAmount;this._pos.x+=(Math.random()-.5)*.06*e,this._pos.y+=(Math.random()-.5)*.06*e,this._look.x+=(Math.random()-.5)*.5*e,this._look.y+=(Math.random()-.5)*.5*e,this.shakeAmount*=Math.pow(.06,t)}_commit(t,e,i){var a;this.active.position.copy(this._pos),this.active.lookAt(this._look);const s=(a=this.game.world)!=null&&a.isIndoors?1:0,r=e.fov+this.fovBoost+s*Qg;this.active.fov+=(r-this.active.fov)*Math.min(1,t*6),this.active.updateProjectionMatrix(),i.avatar&&i.avatar.setFirstPerson(this.isFirstPerson||this.distance===0)}basis(){const t=new I(Math.sin(this.yaw),0,Math.cos(this.yaw)).normalize(),e=new I(-t.z,0,t.x);return{forward:t,right:e}}}const pe={grass:7311194,glass:6453644,trunk:6047282,foliage:5208645,foliageLight:6984789,foliageDeep:4154168,metal:9146777,metalDark:4870231,concrete:12039083,skinTones:[15914685,15253915,13803636,11104575,8014374,5517852],hairTones:[2825494,4861726,8014374,12159818,14270346,9276813,2763310,8141370],carBodies:[11680571,3104140,14737632,2764083,5929546,14263361,9080726,7031418]},ut={ceiling:15525851,wall:13814974,trim:16249834,joineryDark:7034951,joineryLight:9073760,floorTimber:9072722,benchtop:12168342,tileFloor:12104358,metalDull:9146777,shadowDark:2764339},ps=new Map,e_=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function gn(n,t={}){let e=String(n);for(const s of e_)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(ps.has(e))return ps.get(e);const i=new mn({color:n,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??zn,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return ps.set(e,i),i}function Si(n,t){if(ps.has(n))return ps.get(n);const e=t();return ps.set(n,e),e}const n_=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function uc(n){return n.onBeforeCompile=n_,n}function dc(){return Si("window",()=>uc(new mn({color:pe.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new Ot(16767392),emissiveIntensity:0})))}function i_(){return Si("windowinner",()=>uc(new mn({color:pe.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function s_(){return Si("bulb",()=>new mn({color:16774365,emissive:new Ot(16770744),emissiveIntensity:1.6}))}function r_(){return Si("carglass",()=>new mn({color:2831680,roughness:.2,metalness:.3}))}function a_(){return Si("headlight",()=>new mn({color:15787727,emissive:new Ot(16771512),emissiveIntensity:0}))}function o_(){return Si("taillight",()=>new mn({color:9186091,emissive:new Ot(16726843),emissiveIntensity:.2}))}function c_(){return Si("troffer",()=>new mn({color:16185074,roughness:.5,emissive:new Ot(14477567),emissiveIntensity:.9}))}function l_(){return Si("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgb(140,140,140)"),i.addColorStop(.55,"rgb(196,196,196)"),i.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new zi(t);s.colorSpace=ze;const r=new Ts({map:s,blending:Ka,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new ee(1,1,1),new rn(1,1),new Be(.5,.5,1,10),new ea(.5,1,8),new vi(.5,12,10);const h_=new Set;function qs(n){h_.add(n)}function u_(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new qe;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Rl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=Rl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Rl(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ee(a,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const d_=new Set(["position","normal","uv","color"]);function Fh(n,t={}){var a,o;n.updateMatrixWorld(!0);const e=new Map,i=[];n.traverse(c=>{var f,g;if(c===n)return;if(c.isInstancedMesh||c.userData.isSign||c.isLight){i.push(c);return}if(!c.isMesh||!((g=(f=c.geometry)==null?void 0:f.attributes)!=null&&g.position))return;const l=c.material.uuid;e.has(l)||e.set(l,{material:c.material,geos:[],cast:!1});const h=c.geometry.clone();h.applyMatrix4(c.matrixWorld);for(const _ of Object.keys(h.attributes))d_.has(_)||h.deleteAttribute(_);const u=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new Ee(new Float32Array(u*2),2)),h.attributes.color||h.setAttribute("color",new Ee(new Float32Array(u*3).fill(1),3));const d=e.get(l);d.geos.push(h.index?h.toNonIndexed():h),d.cast=d.cast||c.castShadow});const s=t.colliders?new zo(t.colliders,1):null,r=new ne;for(const{material:c,geos:l,cast:h}of e.values()){if(!l.length)continue;const u=l.length===1?l[0]:u_(l,!1);if(!u){console.error("bakeGroup: merge returned null (mismatched attributes)",c);continue}const d=((a=c.userData)==null?void 0:a.decal)===!0,f=(o=c.userData)==null?void 0:o.uvScale;f&&!d&&f_(u,f[0],f[1]),s&&!d&&x_(u,s);const g=new yt(u,c);g.castShadow=d?!1:h,g.receiveShadow=!d,d&&(g.renderOrder=2),r.add(g)}for(const c of i)r.add(c);return r}function f_(n,t,e=t){const i=n.attributes.position.count,s=n.attributes.position.array,r=n.attributes.normal.array,a=new Float32Array(i*2);for(let o=0;o<i;o++){const c=o*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let d,f;h>=l&&h>=u?(d=s[c],f=s[c+2]):l>=u?(d=s[c+2],f=s[c+1]):(d=s[c],f=s[c+1]),a[o*2]=d/t,a[o*2+1]=f/e}n.setAttribute("uv",new Ee(a,2))}const za=512,Cl=1024;function Pl(n,t,e){return((n+za)*Cl+(t+za))*Cl+(e+za)}class zo{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let i=0;i<t.length;i++){const s=t[i],r=Math.floor(s.min.x/e),a=Math.floor(s.max.x/e),o=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),h=Math.floor(s.max.z/e);for(let u=r;u<=a;u++)for(let d=o;d<=c;d++)for(let f=l;f<=h;f++){const g=Pl(u,d,f);let _=this.bins.get(g);_||(_=[],this.bins.set(g,_)),_.push(i)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,i,s){const r=this.cell,a=this._out;a.length=0;const o=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),h=Math.floor((e-s)/r),u=Math.floor((e+s)/r),d=Math.floor((i-s)/r),f=Math.floor((i+s)/r);for(let g=c;g<=l;g++)for(let _=h;_<=u;_++)for(let p=d;p<=f;p++){const m=this.bins.get(Pl(g,_,p));if(m)for(let M=0;M<m.length;M++){const v=m[M];this._stamp[v]!==o&&(this._stamp[v]=o,a.push(this.boxes[v]))}}return a}}const p_=.18,m_=.55,Ll=.75,g_=.3,Dl=.55,__=1.2;function x_(n,t){const e=t instanceof zo?t:new zo(t,1),i=Array.isArray(n)?n:[n];for(const s of i)v_(s,e)}function v_(n,t){const e=n.attributes.color;if(!e||e.itemSize!==3||e.normalized||!n.attributes.normal)return;const i=n.attributes.position.array,s=n.attributes.normal.array,r=e.array,a=n.attributes.position.count;for(let o=0;o<a;o++){const c=o*3,l=s[c],h=s[c+1],u=s[c+2],d=i[c]+l*.01,f=i[c+1]+h*.01,g=i[c+2]+u*.01;let _=0;const p=t.near(d,f,g,__);for(let M=0;M<p.length;M++){const v=p[M],E=Math.max(v.min.x-d,0,d-v.max.x),C=Math.max(v.min.y-f,0,f-v.max.y),b=Math.max(v.min.z-g,0,g-v.max.z),T=Math.sqrt(E*E+C*C+b*b);if(T>Ll*3)continue;const P=(v.min.x+v.max.x)/2-d,D=(v.min.y+v.max.y)/2-f,x=(v.min.z+v.max.z)/2-g;l*P+h*D+u*x<=0||(_+=m_*Math.exp(-T/p_)+g_*Math.exp(-T/Ll))}const m=Math.max(Dl,1-Math.min(1-Dl,_));r[c]*=m,r[c+1]*=m,r[c+2]*=m}e.needsUpdate=!0}let M_=8,S_=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};const zh=(n,t=n)=>{const e=S_(n);return e.width=n,e.height=t,e};let Bh=0;function fc(n,t){return t&&(n.colorSpace=ze),n.wrapS=n.wrapT=Gr,n.anisotropy=M_,n.generateMipmaps=!0,n.minFilter=mi,n.magFilter=fn,Bh+=n.image.width*n.image.height*4*4/3,n}function kn(n){return fc(new zi(y_(n)),!0)}function Bo(n){return n.wrapS=n.wrapT=pi,n}function y_(n){const t=zh(n.w,n.h),e=t.getContext("2d"),i=e.createImageData(n.w,n.h),s=i.data,r=n.d,a=n.w*n.h;for(let o=0,c=0,l=0;o<a;o++,c+=3,l+=4){const h=r[c],u=r[c+1],d=r[c+2];s[l]=(h<0?0:h>1?1:h)*255+.5,s[l+1]=(u<0?0:u>1?1:u)*255+.5,s[l+2]=(d<0?0:d>1?1:d)*255+.5,s[l+3]=255}return e.putImageData(i,0,0),t}const we=n=>n<0?0:n>1?1:n,Bn=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function E_(n){const[t,e,i]=n,s=Math.max(t,e,i),r=Math.min(t,e,i),a=(s+r)/2;if(s===r)return[0,0,a];const o=s-r,c=a>.5?o/(2-s-r):o/(s+r);let l;return s===t?l=((e-i)/o+(e<i?6:0))/6:s===e?l=((i-t)/o+2)/6:l=((t-e)/o+4)/6,[l,c,a]}function w_(n,t,e){if(t===0)return[e,e,e];const i=e<.5?e*(1+t):e+t-e*t,s=2*e-i,r=a=>(a=(a%1+1)%1,a<1/6?s+(i-s)*6*a:a<1/2?i:a<2/3?s+(i-s)*(2/3-a)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function Fn(n,t=1,e=0,i=1){const[s,r,a]=E_(Array.isArray(n)?n:Bn(n));return w_(s+e/360,we(r*i),we(a*t))}function Hn(n,t){return{w:n,h:t,d:new Float32Array(n*t*3)}}function Bi(n,t){const e=Array.isArray(t)?t:Bn(t),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=e[0],i[s+1]=e[1],i[s+2]=e[2]}function pc(n,t,e,i,s){if(s<=0)return;const r=n.w,a=n.h;let o=t,c=e;(o<0||o>=r)&&(o=(o%r+r)%r),(c<0||c>=a)&&(c=(c%a+a)%a);const l=(c*r+o)*3,h=n.d,u=1-s;h[l]=h[l]*u+i[0]*s,h[l+1]=h[l+1]*u+i[1]*s,h[l+2]=h[l+2]*u+i[2]*s}function un(n,t,e,i,s,r,a=1){const o=Array.isArray(r)?r:Bn(r),c=Math.round(t),l=Math.round(i),h=Math.round(e),u=Math.round(s);if(a<1){for(let _=h;_<u;_++)for(let p=c;p<l;p++)pc(n,p,_,o,a);return}const d=n.w,f=n.h,g=n.d;for(let _=h;_<u;_++){let p=_;(p<0||p>=f)&&(p=(p%f+f)%f);const m=p*d;for(let M=c;M<l;M++){let v=M;(v<0||v>=d)&&(v=(v%d+d)%d);const E=(m+v)*3;g[E]=o[0],g[E+1]=o[1],g[E+2]=o[2]}}}function Xs(n,t,e,i,s,r=1){const a=i+1;for(let o=Math.floor(e-a);o<=Math.ceil(e+a);o++)for(let c=Math.floor(t-a);c<=Math.ceil(t+a);c++){const l=c+.5-t,h=o+.5-e,u=we(i-Math.sqrt(l*l+h*h)+.5);u>0&&pc(n,c,o,s,r*u)}}function ko(n,t,e,i,s=1){const r=Math.max(1,e)/2;for(let a=1;a<t.length;a++){const[o,c]=t[a-1],[l,h]=t[a],u=Math.hypot(l-o,h-c),d=Math.max(1,Math.ceil(u));for(let f=0;f<=d;f++){const g=f/d;Xs(n,o+(l-o)*g,c+(h-c)*g,r,i,s)}}}function kh(n,t,e,i,s,r,a,o){const c=n.w,l=n.h,h=n.d,u=r/2,d=a[0],f=a[1],g=a[2],_=Math.PI*2/i;for(let p=0;p<l;p++){const m=p*c,M=t+e*Math.sin(p*_+s),v=M-u,E=M+u,C=Math.floor(v),b=Math.ceil(E);for(let T=C;T<=b;T++){const P=we(Math.min(T+1,E)-Math.max(T,v));if(P<=0)continue;const D=o*P,x=1-D;let y=T;(y<0||y>=c)&&(y=(y%c+c)%c);const U=(m+y)*3;h[U]=h[U]*x+d*D,h[U+1]=h[U+1]*x+f*D,h[U+2]=h[U+2]*x+g*D}}}const Il=n=>n*n*(3-2*n);function T_(n,t,e){const i=new Float32Array(t*e);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const Ul=256;function Cn(n,t,e={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:a=2,h:o=t}=e,c=e.p0x??i,l=e.p0y??i,h=new Float32Array(t*o),u=[];let d=1,f=0;for(let C=0;C<s;C++){const b=Math.min(Ul,Math.max(1,Math.round(c*a**C))),T=Math.min(Ul,Math.max(1,Math.round(l*a**C)));u.push({lat:T_(n,b,T),px:b,py:T,amp:d}),f+=d,d*=r}const g=new Float64Array(t*o),_=new Int32Array(t),p=new Int32Array(t),m=new Float64Array(t);for(let C=0;C<u.length;C++){const b=u[C],T=b.lat,P=b.px,D=b.py,x=b.amp,y=P/t,U=D/o;for(let F=0;F<t;F++){const j=F*y,q=j|0,V=q>=P?q%P:q;_[F]=V,p[F]=V+1>=P?0:V+1,m[F]=Il(j-q)}for(let F=0;F<o;F++){const j=F*U,q=j|0,V=Il(j-q),K=1-V,B=q>=D?q%D:q,ct=B*P,nt=(B+1>=D?0:B+1)*P,xt=F*t;for(let qt=0;qt<t;qt++){const Jt=_[qt],Z=p[qt],O=m[qt],at=T[ct+Jt],et=T[ct+Z],st=T[nt+Jt],ot=T[nt+Z];g[xt+qt]+=x*((at+(et-at)*O)*K+(st+(ot-st)*O)*V)}}}let M=1/0,v=-1/0;for(let C=0;C<h.length;C++){h[C]=g[C]/f;const b=h[C];b<M&&(M=b),b>v&&(v=b)}const E=v-M||1;for(let C=0;C<h.length;C++)h[C]=(h[C]-M)/E;return h}function Hh(n,t,e,i){const s=new Float32Array(t*e),r=new Float32Array(t*e),a=2*i+1,o=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)o[u]=((u-i)%t+t)%t,c[u]=(u+i+1)%t;for(let u=0;u<e;u++){const d=u*t;let f=0;for(let g=-i;g<=i;g++)f+=n[d+(g%t+t)%t];for(let g=0;g<t;g++)s[d+g]=f/a,f-=n[d+o[g]],f+=n[d+c[g]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-i)%e+e)%e*t,h[u]=(u+i+1)%e*t;for(let u=0;u<t;u++){let d=0;for(let f=-i;f<=i;f++)d+=s[(f%e+e)%e*t+u];for(let f=0;f<e;f++)r[f*t+u]=d/a,d-=s[l[f]+u],d+=s[h[f]+u]}return r}function b_(n,t,e=1.5,i=null){const s=i??n.length/t,r=new Uint8Array(t*s*4),a=e/8,o=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)o[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const h=(l-1+s)%s*t,u=l*t,d=(l+1)%s*t;let f=u*4;for(let g=0;g<t;g++,f+=4){const _=o[g],p=c[g],m=n[h+_],M=n[h+g],v=n[h+p],E=n[u+_],C=n[u+p],b=n[d+_],T=n[d+g],P=n[d+p],D=v+2*C+P-(m+2*E+b),x=b+2*T+P-(m+2*M+v),y=-D*a,U=x*a,F=1/Math.sqrt(y*y+U*U+1);r[f]=(y*F*.5+.5)*255+.5,r[f+1]=(U*F*.5+.5)*255+.5,r[f+2]=(F*.5+.5)*255+.5,r[f+3]=255}}return r}function Ys(n,t,e=1.5,i=null){const s=i??n.length/t;return fc(new zi(Gh(b_(n,t,e,s),t,s)),!1)}function Gh(n,t,e){const i=zh(t,e),s=i.getContext("2d"),r=s.createImageData(t,e);return r.data.set(n),s.putImageData(r,0,0),i}function A_(n,t,e,i,s=null){const a=n*(s??n),o=new Uint8Array(a*4);for(let c=0,l=0;c<a;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,d=i?i[c]:0;o[l]=(h<0?0:h>1?1:h)*255+.5,o[l+1]=(u<0?0:u>1?1:u)*255+.5,o[l+2]=(d<0?0:d>1?1:d)*255+.5,o[l+3]=255}return o}function _n(n,t,e,i,s=null){const r=s??n;return fc(new zi(Gh(A_(n,t,e,i,r),n,r)),!1)}const mc={},ks=new Map;let Vh=null;function Xe(n,t){mc[n]=t}const R_=n=>{const t=Object.keys(n).sort();return t.length?t.map(e=>e+"="+JSON.stringify(n[e])).join(","):""};function C_(n,t=null,e={}){const i=mc[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=R_(e),r=s?n+"#"+s:n;if(ks.has(r))return ks.get(r);const a=t||(Vh||new $r("textures")).child("tex."+r),o=i(a,e);return o.name=n,ks.set(r,o),o}function P_(){var n,t;for(const e of ks.values()){for(const i of["map","normalMap","ormMap"])(t=(n=e[i])==null?void 0:n.dispose)==null||t.call(n);if(e.maps)for(const i of e.maps)i.dispose()}ks.clear(),Bh=0,Vh=null}qs(P_);const Ba={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Xe("timberFloor",(n,t={})=>{const a=1.9500000000000002,o=1024/a,c=1024/15,l=Math.max(2,Math.round(.004*o)),h=t.species||n.pick(Object.keys(Ba)),u=Ba[h]||Ba.blackbutt,d=Hn(1024,1024);Bi(d,Fn(u.dark,.72));const f=Bn(u.dark),g=Fn(u.base,1.25),_=[];for(let b=0;b<15;b++){const T=b*c+l/2,P=(b+1)*c-l/2,D=Fn(u.base,1+n.range(-.06,.06),n.range(-3,3));un(d,T,0,P,1024,D);const x=Math.round(n.range(.15,.85)*1024);_.push(x),un(d,T,x,P,x+2,Fn(u.dark,.8),.85),un(d,T,x-2,P,x,g,.25);const y=n.int(28,60);for(let U=0;U<y;U++){const F=n.range(T+1,P-1),j=n.range(1.5,4),q=1024/n.int(2,5),V=n.range(0,Math.PI*2),K=n.range(2,3),B=n.range(.04,.12),ct=n.chance(.25)?g:f;kh(d,F,j,q,V,K,ct,B)}if(n.chance(.2)){const U=n.range(204.8,819.2),F=n.range(60,160),j=n.range(T+4,P-4);for(let q=0;q<n.int(2,4);q++){const V=(q+1)*n.range(3,7),K=[];for(let B=0;B<=16;B++){const ct=B/16;K.push([j+(ct-.5)*2*V,U-F*(1-(ct-.5)**2*4)])}ko(d,K,2,f,.06)}}}const p=Cn(n,512,{p0:64,octaves:3}),m=new Float32Array(512*512),M=new Float32Array(512*512),v=new Float32Array(512*512),E=512/15,C=l*512/1024;for(let b=0;b<512;b++)for(let T=0;T<512;T++){const P=b*512+T,D=Math.floor(T/E),x=T-D*E,y=x<C/2||x>E-C/2,U=b*1024/512,F=_[D],j=U>=F-1&&U<=F+2,q=y||j;M[P]=q?.15:.75,m[P]=we(u.rough+(q?.1:0)+(p[P]-.5)*.1),v[P]=q?.72:1}return{map:kn(d),normalMap:Ys(Hh(M,512,512,1),512,1.2),ormMap:_n(512,v,m,null),uvScale:[a,a],normalScale:.5,species:h,tinted:!1}});Xe("plasterWall",(n,t={})=>{const s=t.rough??.88,r=Cn(n,256,{p0:64,octaves:3,gain:.45}),a=new Float32Array(256*256),o=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=s+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/o*Math.PI*2)*.02),a[h]=we(u)}return{ormMap:_n(256,null,a,null),uvScale:[2,2],normalScale:0,tinted:!0}});Xe("plasterCeiling",n=>mc.plasterWall(n,{rough:.93,ceiling:!0}));Xe("paintedJoinery",n=>{const i=Cn(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){const o=r*256+a;s[o]=we(.42+(i[o]-.5)*.06+Math.sin(a/256*Math.PI*2*12)*.015)}return{ormMap:_n(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Xe("carpetPile",n=>{const i=Hn(512,512);Bi(i,[1,1,1]);const s=Cn(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,d=we(.9+(s[h]-.5)*.16+u);r[h*3]=d,r[h*3+1]=d,r[h*3+2]=d}for(let c=0;c<1200;c++){const l=n.pick([[1.1,0],[.78,8],[.92,-10]]),h=Fn(16777215,l[0],l[1],1);if(l[1]!==0){const u=n.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}Xs(i,n.range(0,512),n.range(0,512),n.range(1,2),h,.25)}const a=Cn(n,512,{p0x:43,p0y:128,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=we(.92+(a[c]-.5)*.06);return{map:kn(i),normalMap:Ys(a,512,.6),ormMap:_n(512,null,o,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Xe("ceramicTile",(n,t={})=>{const i=t.tile??.3,s=2,r=i*s,a=Math.max(2,Math.round(.003*512/r)),o=3,c=512/s,l=Bn(12104358),h=[];for(let p=0;p<s*s;p++)h.push({c:Fn(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const u=Hn(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),g=new Float32Array(512*512),_=a/2;for(let p=0;p<512;p++)for(let m=0;m<512;m++){const M=p*512+m,v=Math.floor(m/c),E=Math.floor(p/c),C=m-v*c,b=p-E*c,T=Math.min(C,c-C,b,c-b);if(T<_){u.d[M*3]=l[0],u.d[M*3+1]=l[1],u.d[M*3+2]=l[2],d[M]=.85,f[M]=.25,g[M]=.62;continue}const P=h[E*s+v],D=(C/c+b/c)/2,x=1.03-.06*(P.g>0?D:1-D);u.d[M*3]=we(P.c[0]*x),u.d[M*3+1]=we(P.c[1]*x),u.d[M*3+2]=we(P.c[2]*x),d[M]=.08;const y=we((T-_)/o);f[M]=.25+.75*y,g[M]=.62+.38*y}return{map:kn(u),normalMap:Ys(f,512,2),ormMap:_n(512,g,d,null),uvScale:[r,r],normalScale:.8,tinted:!1}});Xe("fabricWeave",n=>{const i=Hn(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),a=128,o=new Float32Array(a*8),c=new Float32Array(a*8);for(let h=0;h<o.length;h++)o[h]=n.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=n.range(-.035,.035);const l=Cn(n,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const d=h*256+u,f=(u>>1&1^h>>1&1)===0,g=u>>1,_=h>>1,p=f?o[(g*8+(h>>5&7))%o.length]:c[(_*8+(u>>5&7))%c.length],m=we((f?1.06:.94)+p+(l[d]-.5)*.06);i.d[d*3]=m,i.d[d*3+1]=m,i.d[d*3+2]=m,s[d]=f?.66:.8,r[d]=f?1:.3}return{map:kn(i),normalMap:Ys(Hh(r,256,256,1),256,.8),ormMap:_n(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Xe("joineryTimber",n=>{const i=Hn(512,512);Bi(i,[1,1,1]);const s=Cn(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let c=0;c<512*512;c++){const l=we(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const a=Fn(16777215,.72);for(let c=0;c<220;c++){const l=n.range(0,512),h=n.range(2,6),u=512/n.int(1,2),d=n.range(0,Math.PI*2);kh(i,l,h,u,d,n.range(2,3.5),a,n.range(.03,.09))}const o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=we(.55+(s[c]-.5)*.08);return{map:kn(i),ormMap:_n(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!0}});Xe("vinylSheet",n=>{const i=Hn(512,512);Bi(i,14209732);const s=[13222578,15131093,11906460,14472902].map(Bn);for(let c=0;c<3e3;c++)Xs(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=Cn(n,512,{p0:32,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=we(.28+(r[c]-.5)*.12);const o={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=n.range(0,512),h=n.range(0,512),u=n.range(40,120),d=n.range(0,Math.PI*2),f=n.range(.6,2.2),g=[];for(let _=0;_<=24;_++){const p=d+f*(_/24);g.push([l+Math.cos(p)*u,h+Math.sin(p)*u])}ko(i,g,n.range(2,4),Fn(14209732,.88),.3),ko(o,g,n.range(2,4),[1,1,1],1)}for(let c=0;c<a.length;c++)a[c]=we(a[c]+o.d[c*3]*.15);return{map:kn(i),ormMap:_n(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!1}});Xe("laminateBench",n=>{const s=Hn(512,512);Bi(s,ut.benchtop);const r=[9274743,14077886,7235417].map(Bn);for(let l=0;l<2e3;l++)Xs(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=.28;const o=Math.max(2,Math.round(.006*512/.6)),c=Fn(ut.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<o)for(let u=0;u<512;u++)pc(s,u,l,c,.85),a[l*512+u]=.45;return{map:kn(s),ormMap:_n(512,null,a,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Xe("ceilingGrid",n=>{const s=Hn(512,512);Bi(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),a=Math.max(2,Math.round(.015*512/.6)),o=Bn(14210509),c=Bn(12434098),l=Cn(n,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let d=0;d<512;d++){const f=u*512+d,g=Math.min(d,512-d),_=Math.min(u,512-u);if(g<r/2||_<a/2){const M=g>=r/2-2&&g<r/2||_>=a/2-2&&_<a/2?c:o;s.d[f*3]=M[0],s.d[f*3+1]=M[1],s.d[f*3+2]=M[2],h[f]=.55}else{const m=1+(l[f]-.5)*.04;s.d[f*3]*=m,s.d[f*3+1]*=m,s.d[f*3+2]*=m,h[f]=.9}}return{map:kn(s),ormMap:_n(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Xe("applianceEnamel",n=>{const i=Cn(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=we(.3+(i[r]-.5)*.04);return{ormMap:_n(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Xe("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=Cn(n,256,{p0x:8,p0y:256,octaves:2});for(let a=0;a<256;a++){const o=n.range(-.1,.1);for(let c=0;c<256;c++){const l=a*256+c;i[l]=we(.35+o*.6+(r[l]-.5)*.1)}}return{ormMap:_n(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});Xe("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let d=0;d<s;d++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=d=>{let f=0;for(const g of i)f+=g.a*Math.exp(-(((d-g.c)/g.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let a=1/0,o=-1/0;for(let d=0;d<=256;d++){const f=r(d/256);f<a&&(a=f),f>o&&(o=f)}const c=o-a||1,l=d=>(r(we(d))-a)/c,h=Hn(512,256),u=new Float32Array(512*256);for(let d=0;d<512;d++){const f=l(d/511),g=.9+.1*f;for(let _=0;_<256;_++){const p=_*512+d;h.d[p*3]=g,h.d[p*3+1]=g,h.d[p*3+2]=g,u[p]=f}}return{map:Bo(kn(h)),normalMap:Bo(Ys(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:i,tinted:!0}});Xe("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const a=i[r].map(Bn),o=Hn(256,256);Bi(o,a[n.int(0,3)]);const c=n.int(0,2);if(c===0){let h=0;for(;h<256;){const u=n.int(12,48);un(o,0,h,256,Math.min(256,h+u),a[n.int(0,3)],n.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<n.int(5,11);h++){const u=n.range(0,179.2),d=n.range(0,256*.7);un(o,u,d,u+n.range(30,110),d+n.range(30,110),a[n.int(0,3)],n.range(.55,.95))}else{const h=n.range(115.2,174.08);un(o,0,0,256,h,a[0],1),un(o,0,h,256,256,a[2],1);for(let u=0;u<n.int(3,7);u++){const d=n.range(h-40,h+40);un(o,0,d,256,d+n.range(3,10),a[n.int(0,3)],n.range(.3,.7))}Xs(o,n.range(256*.2,256*.8),n.range(20,h-20),n.range(12,26),a[3],.9)}const l=Fn(16777215,.97);un(o,0,0,256,6,l),un(o,0,250,256,256,l),un(o,0,0,6,256,l),un(o,250,0,256,256,l),s.push(Bo(kn(o)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const L_={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},ls=new Map;function gc(n,t=16777215,e=null,i={}){const s=L_[n];if(!s)throw new Error(`Surfaces: no surface named '${n}'`);const r=Object.keys(i).sort().map(h=>h+"="+JSON.stringify(i[h])).join(","),a=n+"|"+t+"|"+r;if(ls.has(a))return ls.get(a);const o={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(o.transparent=!0,o.opacity=s.alpha,o.depthWrite=!1);const c=h=>s.alpha!==void 0?uc(h):h;if(s.recipe){const{print:h,...u}=i,d=Object.keys(u).sort().map(m=>m+"="+JSON.stringify(u[m])).join(","),f=e?e.child("tex."+s.recipe+(d?"#"+d:"")):null,g=C_(s.recipe,f,u),_=g.maps?g.maps[Math.min(g.maps.length-1,h??0)]:g.map;if(_&&(o.map=_),g.normalMap){o.normalMap=g.normalMap;const m=g.normalScale??1;o.normalScale=new Qt(m,m)}g.ormMap?(o.aoMap=g.ormMap,o.roughnessMap=g.ormMap,o.aoMapIntensity=1,o.roughness=1,s.m===1&&(o.metalnessMap=g.ormMap,o.metalness=1)):o.roughness=s.r===1?.85:s.r;const p=c(new mn(o));return g.uvScale&&(p.userData.uvScale=g.uvScale),p.userData.cast=s.cast,p.userData.surface=n,ls.set(a,p),p}const l=c(new mn(o));return l.userData.cast=s.cast,l.userData.surface=n,ls.set(a,l),l}function D_(){for(const n of ls.values())n.dispose();ls.clear()}qs(D_);const Ct={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,intWall:.11,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,headDatum:2.1,benchH:.9,toeKickH:.15,toeKickD:.05,cabinetModules:[.3,.45,.6,.75,.9,1,1.2],handleH:1,switchH:1.05,gpoH:.3},ve={thin:.002,furniture:.003,joinery:.005},Nl=new Set;function Ho(n,t,e={}){if(e.material)return e.material;try{return gc(n,t,null,e.recipe||{})}catch(i){Nl.has(n)||(Nl.add(n),console.error(`RoomKit: surface '${n}' unavailable, falling back to flat colour`,i))}return gn(t,e)}function te(n,t,e,i,s,r={}){var l;const a=Ho(n,s,r),o=r.chamfer?Xh(t,e,i,r.chamfer):r.graded?I_(t,e,i,r.gradeEdge):new ee(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),c=new yt(o,a);return c.castShadow=r.cast??((l=a.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const ys=new Map,gi=n=>Math.round(n*1e3);function Wh(n,t,e){const i=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,a=Math.abs(t[r]),o=Math.abs(t[r+1]),c=Math.abs(t[r+2]);o>=a&&o>=c?(i[s*2]=n[r],i[s*2+1]=n[r+2]):a>=c?(i[s*2]=n[r+2],i[s*2+1]=n[r+1]):(i[s*2]=n[r],i[s*2+1]=n[r+1])}return i}function qh(n){const t=n.length*3,e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const a of n){const[o,c,l]=a;let h=c[0]-o[0],u=c[1]-o[1],d=c[2]-o[2],f=l[0]-o[0],g=l[1]-o[1],_=l[2]-o[2],p=u*_-d*g,m=d*f-h*_,M=h*g-u*f;const v=(o[0]+c[0]+l[0])/3,E=(o[1]+c[1]+l[1])/3,C=(o[2]+c[2]+l[2])/3;let b=c,T=l;p*v+m*E+M*C<0&&(b=l,T=c,p=-p,m=-m,M=-M);const P=Math.hypot(p,m,M)||1;p/=P,m/=P,M/=P;for(const D of[o,b,T])e[s*3]=D[0],e[s*3+1]=D[1],e[s*3+2]=D[2],i[s*3]=p,i[s*3+1]=m,i[s*3+2]=M,s++}const r=new qe;return r.setAttribute("position",new Ee(e,3)),r.setAttribute("normal",new Ee(i,3)),r.setAttribute("uv",new Ee(Wh(e,i,t),2)),r.setAttribute("color",new Ee(new Float32Array(t*3).fill(1),3)),r}function Xh(n,t,e,i=ve.furniture){n=Math.max(n,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(i,Math.min(n,t,e)/2-5e-4);if(!(s>2e-4))return new ee(n,t,e);const r=`c${gi(n)},${gi(t)},${gi(e)},${gi(s)}`,a=ys.get(r);if(a)return a;const o=n/2,c=t/2,l=e/2,h=[o-s,c-s,l-s],u=[o,c,l],d=(m,M)=>[(M===0?u[0]:h[0])*m[0],(M===1?u[1]:h[1])*m[1],(M===2?u[2]:h[2])*m[2]],f=[];for(const m of[-1,1])for(const M of[-1,1])for(const v of[-1,1])f.push([m,M,v]);const g=[],_=(m,M,v,E)=>{g.push([m,M,v]),g.push([m,v,E])};for(let m=0;m<3;m++){const M=(m+1)%3,v=(m+2)%3;for(const E of[-1,1]){const C=(b,T)=>{const P=[0,0,0];return P[m]=E,P[M]=b,P[v]=T,d(P,m)};_(C(-1,-1),C(1,-1),C(1,1),C(-1,1))}}for(let m=0;m<3;m++)for(let M=m+1;M<3;M++){const v=3-m-M;for(const E of[-1,1])for(const C of[-1,1]){const b=[0,0,0];b[m]=E,b[M]=C,b[v]=-1;const T=[0,0,0];T[m]=E,T[M]=C,T[v]=1,_(d(b,m),d(b,M),d(T,M),d(T,m))}}for(const m of f)g.push([d(m,0),d(m,1),d(m,2)]);const p=qh(g);return ys.set(r,p),p}const Mr=[0,.05,.18,.55];function Ol(n,t=.12){const e=t/.12,i=[0];for(let s=1;s<Mr.length;s++){const r=Mr[s]*e;r<n/2-1e-4&&i.push(r)}i.push(n/2);for(let s=Mr.length-1;s>=1;s--){const r=n-Mr[s]*e;r>n/2+1e-4&&i.push(r)}return i.push(n),i}function Fl(n,t,e,i,s,r){const a=(o,c)=>[t[0]+e[0]*o+i[0]*c,t[1]+e[1]*o+i[1]*c,t[2]+e[2]*o+i[2]*c];for(let o=0;o<s.length-1;o++)for(let c=0;c<r.length-1;c++){const l=a(s[o],r[c]),h=a(s[o+1],r[c]),u=a(s[o+1],r[c+1]),d=a(s[o],r[c+1]);n.push([l,h,u]),n.push([l,u,d])}}function I_(n,t,e,i=.12){const s=`g${gi(n)},${gi(t)},${gi(e)},${gi(i)}`,r=ys.get(s);if(r)return r;const a=e<=n&&e<=t?2:t<=n?1:0,[o,c,l]=a===2?[n,t,e]:a===1?[n,e,t]:[e,t,n],h=o/2,u=c/2,d=l/2,f=Ol(o,i),g=Ol(c,i),_=[];Fl(_,[-h,-u,d],[1,0,0],[0,1,0],f,g),Fl(_,[-h,-u,-d],[1,0,0],[0,1,0],f,g);const p=(M,v,E,C)=>{_.push([M,v,E]),_.push([M,E,C])};p([h,-u,-d],[h,u,-d],[h,u,d],[h,-u,d]),p([-h,-u,-d],[-h,u,-d],[-h,u,d],[-h,-u,d]),p([-h,u,-d],[h,u,-d],[h,u,d],[-h,u,d]),p([-h,-u,-d],[h,-u,-d],[h,-u,d],[-h,-u,d]);const m=qh(_);if(a===1?m.rotateX(-Math.PI/2):a===0&&m.rotateY(Math.PI/2),a!==2){const M=m.attributes.position.array,v=m.attributes.normal.array;m.setAttribute("uv",new Ee(Wh(M,v,m.attributes.position.count),2))}return ys.set(s,m),m}qs(()=>{for(const n of ys.values())n.dispose();ys.clear()});class U_{constructor(){this.group=new ne,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,i,s,r,a,o=!1){this.colliders.push({min:new I(t-s/2,e,i-a/2),max:new I(t+s/2,e+r,i+a/2),walkable:o})}spot(t,e,i,s){return this.spots[t]=new I(e,i,s),this.spots[t]}interact(t,e,i,s,r,a,o={},c=1.8){this.interactables.push({id:t,label:e,pos:new I(i,s,r),action:a,data:o,radius:c})}light(t,e,i,s=16770756,r=9,a=13){const o=new Gg(s,r,a,2);return o.position.set(t,e,i),this.group.add(o),this.lights.push(o),o}}function N_(n,t,e,i,s,r,a=ut.floorTimber,o={}){const c=o.thickness??.16,l=te(o.surface??"floorTimber",i,c,s,a,{graded:!0,gradeEdge:o.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),n.add(l),n.solid(t,r-c,e,i,c,s,!0),l}function zl(n,t,e,i,s,r,a=ut.ceiling,o={}){const c=o.thickness??Ct.cornice,l=te(o.surface??"ceiling",i,c,s,a,{graded:!0,gradeEdge:o.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),n.add(l),l}function O_(n,t,e,i,s=0,r={}){const a=te("trim",.075,.115,.01,r.colour??ut.trim,{});a.position.set(t,e,i),a.rotation.y=s,n.add(a);const o=te("trim",.03,.055,.004,r.colour??ut.trim,{});return o.rotation.y=s,o.position.set(t,e,i),o.translateZ(.007),n.add(o),a}function F_(n,t,e,i,s=0,r={}){const a=te("trim",.115,.075,.01,r.colour??ut.trim,{});return a.position.set(t,e,i),a.rotation.y=s,n.add(a),a}function Kn(n,t,e,i,s,r,a={}){const o=a.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-o,l=t+s/2+o,h=e-r/2-o,u=e+r/2+o;const d=t-s/2,f=t+s/2,g=e-r/2,_=e+r/2;for(const v of n.decals){if(l<=v.x0||c>=v.x1||u<=v.z0||h>=v.z1)continue;const E=Math.min(l-v.x0,v.x1-c),C=Math.min(u-v.z0,v.z1-h);if(E<=C?t<(v.x0+v.x1)/2?l=Math.max(f,Math.min(l,v.x0)):c=Math.min(d,Math.max(c,v.x1)):e<(v.z0+v.z1)/2?u=Math.max(_,Math.min(u,v.z0)):h=Math.min(g,Math.max(h,v.z1)),l>v.x0+1e-4&&c<v.x1-1e-4&&u>v.z0+1e-4&&h<v.z1-1e-4)return null}const p=l-c,m=u-h;if(p<.05||m<.05)return null;const M=new yt(new rn(p,m),l_());return M.rotation.x=-Math.PI/2,M.position.set((c+l)/2,i+.006,(h+u)/2),n.add(M),n.decals.push({x0:c,x1:l,z0:h,z1:u}),M}const Yn=new ni;function Yh(n,t,e,i){Yn.setFromObject(t);const s=Yn.max.x-Yn.min.x,r=Yn.max.z-Yn.min.z;return n.solid((Yn.min.x+Yn.max.x)/2,e,(Yn.min.z+Yn.max.z)/2,s,i,r),[s,r]}function z_(n,t,e,i){if(n.door===!1||n.leaf===!1||n.door===void 0&&n.leaf===void 0&&t<=1.005)return null;const s=n.door||{},r=t>=1.25,a=s.style??(n.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:a,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??i,colour:s.colour??n.leaf??(a==="glazed"?pe.metal:e),surfaceName:s.surface??n.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function Ui(n,t,e,i,s,r={}){const{y0:a=0,height:o=Ct.storey,thickness:c=Ct.wallThick,colour:l=ut.wall,innerColour:h=null,outerColour:u=null,openings:d=[],skirting:f=!0,skirtStyle:g="timber",cornice:_=!0,corniceStyle:p="cove",autoServices:m=!0,inner:M=null,surface:v="wall",trimColour:E=ut.trim,graded:C=!0,name:b=null}=r,T=h??u,P=i-t,D=s-e,x=Math.hypot(P,D);if(x<.01)return;const y=P/x,U=D/x,F=Math.atan2(-U,y),j=-U,q=y,V=c/2,K=(O,at,et,st=0,ot=0)=>(O.position.set(t+y*at+j*st,et,e+U*at+q*st),O.rotation.y=F+ot,n.add(O),O),B=(O,at,et,st={})=>te("trim",O,at,et,st.colour??E,st),ct=M===null?[-1,1]:[M],nt=(O,at,et,st)=>{const ot=at-O,Et=st-et;if(ot<=.005||Et<=.005)return;const wt=(O+at)/2,Tt=_&&p==="shadowline"&&Math.abs(st-(a+o))<.02,L=Tt?Et-.01:Et,mt=ot>=1.2&&L>=1.2,Ut=te(v,ot,L,c,l,{graded:C&&mt,cast:!0});if(K(Ut,wt,et+L/2),Tt){const A=te(v,ot,.01,c-.02,l,{});K(A,wt,st-.005)}const Wt=Math.abs(y)*ot+Math.abs(U)*c,At=Math.abs(U)*ot+Math.abs(y)*c,Yt=t+y*wt,gt=e+U*wt;if(n.solid(Yt,et,gt,Wt,Et,At),T)for(const A of ct){const S=te(v,ot,L,.02,T,{graded:C&&mt});K(S,wt,et+L/2,A*(V+.01))}if(f&&g&&et-a<.02)if(g==="commercial"){const A=B(ot,Ct.skirtCommercial,c+.04,{colour:ut.tileFloor,chamfer:ve.thin});K(A,wt,et+Ct.skirtCommercial/2)}else{const A=[[.112,Ct.skirtProud,0,ve.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[S,z,$,Q]of A){const J=B(ot,S,c+z*2,{chamfer:Q});K(J,wt,et+$+S/2)}}if(_&&p==="cove"&&Math.abs(st-(a+o))<.02){const A=Ct.corniceGirth/Math.SQRT2;for(const S of ct){const z=B(ot,Ct.corniceGirth,.008,{chamfer:0});K(z,wt,st-A/2,S*(V+A/2)),z.rotation.order="YXZ",z.rotation.set(-S*Math.PI/4,F,0)}}},xt=(O,at,et,st)=>{const ot=st-et;for(const wt of[-1,1]){const Tt=B(Ct.reveal,ot,c,{});K(Tt,O+wt*(at/2-Ct.reveal/2),et+ot/2)}const Et=B(at,Ct.reveal,c,{});K(Et,O,st-Ct.reveal/2)},qt=(O,at,et,st)=>{const ot=at-2*Ct.reveal,Et=ot/2+Ct.archQuirk,wt=st+Ct.archQuirk;for(const Tt of[-1,1])for(const L of[-1,1]){const mt=B(Ct.archW,wt-et+.002,Ct.archProud,{chamfer:ve.joinery});if(K(mt,O+Tt*(Et+Ct.archW/2),et+(wt-et)/2,L*(V+Ct.archProud/2)),et-a<.02){const Ut=B(Ct.archW+.02,.15,.032,{});K(Ut,O+Tt*(Et+Ct.archW/2),et+.075,L*(V+.016))}}for(const Tt of[-1,1]){const L=B(ot+2*(Ct.archW+Ct.archQuirk),Ct.archW,Ct.archProud,{chamfer:ve.joinery});K(L,O,wt+Ct.archW/2,Tt*(V+Ct.archProud/2))}},Jt=[...d].sort((O,at)=>O.at-at.at);let Z=0;for(const O of Jt){const at=O.width/2,et=Math.max(0,O.at-at),st=Math.min(x,O.at+at),ot=O.kind==="window"?O.sill??Ct.winSill:0,Et=O.kind==="window"?O.head??Ct.winHead:O.head??(O.kind==="arch"?2.25:Ct.doorH);if(nt(Z,et,a,a+o),ot>0&&nt(et,st,a,a+ot),nt(et,st,a+Et,a+o),Z=st,O.kind==="window"){const wt=Et-ot,Tt=a+(ot+Et)/2,L=M===null?1:-M,mt=new yt(new ee(O.width-2*Ct.reveal-.002,wt-.002,.006),dc());mt.castShadow=!1,mt.receiveShadow=!0,K(mt,O.at,Tt,L*.015);const Ut=new yt(new ee(O.width-2*Ct.reveal-.002,wt-.002,.006),i_());Ut.castShadow=!1,Ut.receiveShadow=!0,K(Ut,O.at,Tt,-L*.015),xt(O.at,O.width,a+ot,a+Et),qt(O.at,O.width,a+ot,a+Et);const Wt=Math.max(1,Math.round((O.width-2*Ct.reveal)/.9)),At=O.width-2*Ct.reveal;for(let gt=1;gt<Wt;gt++){const A=B(.04,wt,.05,{chamfer:ve.joinery});K(A,O.at-At/2+At/Wt*gt,Tt)}const Yt=O.restrictor?Math.min(a+1.7,a+Et-.1):a+ot+wt/3;if(wt>.55){const gt=B(At,.04,.05,{chamfer:ve.joinery});K(gt,O.at,Yt)}if(O.restrictor){const gt=B(.06,.02,.03,{colour:ut.metalDull,chamfer:ve.thin});K(gt,O.at+At/4,a+ot+.02,0)}for(const gt of ct){const A=B(O.width+.09,.025,c/2+.03,{chamfer:ve.joinery});K(A,O.at,a+ot-.0125,gt*(c/4+.015))}if(M!==null){const gt=B(O.width+.12,.04,.09,{chamfer:ve.joinery});K(gt,O.at,a+ot-.02,-M*(V+.045)),gt.rotation.order="YXZ",gt.rotation.set(M*.1,F,0)}if(O.curtains){B_(n,t+y*O.at,a+Et+.15,e+U*O.at,F,O.width+.4,{offset:(M??1)*(V+.09)});const gt=[.3,.22],A=M??1;for(const z of[-1,1]){const $=gt[z<0?0:1],Q=O.width*$,J=6;for(let bt=0;bt<J;bt++){const dt=Q/J,ht=te("fabric",dt*1.35,wt+.35,.045,O.curtains,{cast:!0}),Bt=O.at+z*(O.width/2-Q+(bt+.5)*dt);K(ht,Bt,Tt+.1,A*(V+.075),bt%2?.175:-.175)}}const S=B(O.width+.44,.12,.09,{chamfer:ve.joinery});K(S,O.at,a+Et+.21,A*(V+.055))}}else if((O.kind==="door"||O.kind==="arch")&&(xt(O.at,O.width,a,a+Et),qt(O.at,O.width,a,a+Et),O.kind==="door")){const wt=O.swing??1,Tt=O.width/2-Ct.reveal,L=V-.045;for(const Wt of[-1,1]){const At=B(.013,Et-.02,.03,{});K(At,O.at+Wt*(Tt-.0055),a+(Et-.02)/2,wt*L)}const mt=B(O.width-2*Ct.reveal,.014,.03,{});K(mt,O.at,a+Et-.025,wt*L);const Ut=z_(O,O.width,E,wt);if(Ut){const Wt=L+.015+Ct.leafT,At=Et-Ct.reveal-.02,Yt=Ut.pair?Tt-.006:2*Tt-.006,gt=Ut.face,A=Ut.pair?[1,-1]:[gt];for(const S of A){const z=O.at+S*(Tt-.003),$=gt*Wt;Ut.leaves.push({hx:t+y*z+j*$,hz:e+U*z+q*$,y:a,baseRot:F,phiOpen:S*gt*Math.PI/2,leafRot:S>0?0:Math.PI,dx:-S*Yt/2,dz:-gt*Ct.leafT/2,lw:Yt,lh:At});for(const Q of[.15,1.02,1.89]){if(Q>At-.1)continue;const J=te("chrome",.016,.1,.016,pe.metal,{chamfer:.001,cast:!1});K(J,z,a+.015+Q,$)}}Ut.centre={x:t+y*O.at,z:e+U*O.at},Ut.y0=a,n.doors.push(Ut)}}if(m&&O.kind==="door"){const wt=-(O.swing??1);for(const Tt of[-1,1])O_(n,t+y*(O.at+wt*(O.width/2+Ct.archW+.15))+j*Tt*(V+.006),a+Ct.switchH,e+U*(O.at+wt*(O.width/2+Ct.archW+.15))+q*Tt*(V+.006),F+(Tt<0?Math.PI:0))}}if(nt(Z,x,a,a+o),m&&M!==null&&a+Ct.gpoH<a+o){const O=Math.max(1,Math.floor(x/3.5));for(let at=0;at<O;at++){const et=(at+.5)*(x/O);Jt.some(st=>Math.abs(st.at-et)<st.width/2+.25)||F_(n,t+y*et+j*M*(V+.006),a+Ct.gpoH,e+U*et+q*M*(V+.006),F+(M<0?Math.PI:0))}}b&&(n.faces[b]={a:{x:t,z:e},b:{x:i,z:s},u:{x:y,z:U},n:{x:j,z:q},angle:F,thickness:c,y0:a,height:o,length:x,face:O=>({x:(t+i)/2+j*O*(c/2),z:(e+s)/2+q*O*(c/2),nx:j*O,nz:q*O,rotY:F+(O<0?Math.PI:0)})})}function B_(n,t,e,i,s=0,r=1.6,a={}){const o=new ne,c=new yt(new Be(.0125,.0125,r,8),Ho("chrome",a.colour??pe.metalDark));c.rotation.z=Math.PI/2,o.add(c);for(const l of[-1,1]){const h=new yt(new vi(.0175,8,6),Ho("chrome",a.colour??pe.metalDark));h.position.x=l*r/2,o.add(h)}return o.rotation.y=s,o.position.set(t,e,i),o.translateZ(a.offset??0),n.add(o),o}function k_(n,t,e,i,s=!0){const r=te("chrome",s?.128:.018,s?.018:.128,.018,pe.metal,{chamfer:.001,cast:!1});r.position.set(t,e,i+.032),n.add(r);for(const a of[-1,1]){const o=te("chrome",.01,.01,.032,pe.metal,{cast:!1});o.position.set(t+(s?a*.064:0),e+(s?0:a*.064),i+.016),n.add(o)}return r}function Go(n,t,e,i,s=0,r=ut.joineryLight){const a=typeof r=="object"&&r!==null?r:{colour:r},{colour:o=ut.joineryLight,frame:c=ut.joineryDark,collide:l=!0,seatH:h=.45}=a,u=new ne,d=.44,f=te("joinery",d,.018,d,o,{chamfer:.02,cast:!0});f.position.y=h-.009,u.add(f);const g=.42,_=te("joinery",d,g,.018,o,{chamfer:ve.furniture});_.position.set(0,h+.04+g/2,-d/2+.02),_.rotation.x=.14,u.add(_);for(const p of[-1,1]){const m=te("joinery",.03,g+.07,.03,c,{chamfer:ve.furniture});m.position.set(p*(d/2-.02),h+.02+(g+.07)/2,-d/2+.02),m.rotation.x=.14,u.add(m)}for(const p of[-1,1])for(const m of[-1,1]){const M=te("joinery",.032,h-.018,.032,c,{chamfer:ve.furniture});M.position.set(p*(d/2-.024),(h-.018)/2,m*(d/2-.024)),m<0&&(M.rotation.x=-.105),u.add(M)}for(const p of[-1,1]){const m=te("joinery",d-.07,.045,.016,c,{chamfer:ve.thin});m.position.set(0,h-.045,p*(d/2-.026)),u.add(m);const M=te("joinery",d-.07,.02,.02,c,{chamfer:ve.thin});M.position.set(0,.18,p*(d/2-.026)),u.add(M)}return u.position.set(t,i,e),u.rotation.y=s,n.add(u),l&&n.solid(t,i,e,.45,.45,.45),u}function H_(n,t,e,i,s,r,a=0,o=ut.benchtop,c=ut.joineryLight,l={}){const{shadow:h=!0,handle:u=!0}=l,d=new ne,f=Ct.toeKickH,g=Ct.toeKickD,_=.72,p=.038,m=te("joinery",s-.1,f,r-g,ut.shadowDark,{});m.position.set(0,f/2,-g/2),d.add(m);const M=te("joinery",s,_,r,c,{chamfer:ve.furniture,cast:!0});M.position.set(0,f+_/2,0),d.add(M);const v=te("bench",s+.04,p,r+.02,o,{chamfer:ve.joinery,cast:!0});v.position.set(0,Ct.benchH-p/2,.01),d.add(v);const E=[];let C=s;for(;C>.02;){let D=Ct.cabinetModules[0];for(const x of Ct.cabinetModules)x<=C+.001&&(D=x);(C-D<.02||E.length>12)&&(D=C),E.push(D),C-=D}let b=-s/2;for(const D of E){const x=te("joinery",D-.003,_-.006,.018,c,{chamfer:ve.thin,cast:!1});x.position.set(b+D/2,f+_/2,r/2+.009),d.add(x),u&&k_(d,b+D/2,f+_-.05,r/2+.018),b+=D}d.position.set(t,i,e),d.rotation.y=a,n.add(d);const[T,P]=Yh(n,d,i,Ct.benchH);return h&&Kn(n,t,e,i,T,P),d}function jh(n,t,e,i,s,r,a=0,o=ut.joineryLight,c={}){const{frame:l=ut.joineryDark,height:h=.74,shadow:u=!0}=c,d=new ne,f=.03,g=te("joinery",s,f,r,o,{chamfer:ve.joinery,cast:!0});g.position.y=h-f/2,d.add(g);for(const m of[-1,1])for(const M of[-1,1]){const v=te("joinery",.06,h-f,.06,l,{chamfer:ve.furniture});v.position.set(m*(s/2-.09),(h-f)/2,M*(r/2-.09)),d.add(v)}for(const[m,M,v,E]of[[s-.24,.02,0,r/2-.09],[s-.24,.02,0,-r/2+.09],[.02,r-.24,s/2-.09,0],[.02,r-.24,-s/2+.09,0]]){const C=te("joinery",m,.07,M,l,{chamfer:ve.furniture});C.position.set(v,h-f-.035,E),d.add(C)}d.position.set(t,i,e),d.rotation.y=a,n.add(d);const[_,p]=Yh(n,d,i,h);return u&&Kn(n,t,e,i,_,p),d}function G_(n,t,e,i,s,r,a={}){const{tileW:o=1.2,tileD:c=.6,colour:l=ut.ceiling,tee:h=ut.metalDull}=a,u=new ne,d=Math.max(1,Math.round(i/o)),f=Math.max(1,Math.round(s/c)),g=i/d,_=s/f;for(let p=0;p<d;p++)for(let m=0;m<f;m++){const M=te("ceilingGrid",g-.02,.014,_-.02,l,{cast:!1});M.position.set(-i/2+(p+.5)*g,-.007,-s/2+(m+.5)*_),u.add(M)}for(let p=0;p<=d;p++){const m=te("chrome",.024,.024,s,h,{chamfer:.001});m.position.set(-i/2+p*g,-.012,0),u.add(m)}for(let p=0;p<=f;p++){const m=te("chrome",i,.024,.024,h,{chamfer:.001});m.position.set(0,-.012,-s/2+p*_),u.add(m)}return u.position.set(t,r,e),n.add(u),u}const V_=.38,W_=.44,q_=2.4,X_=1.8,Y_=.95,j_=2.4,Bl=70,Sr=.38,kl=n=>n<0?0:n>1?1:n,K_=n=>n*n*(3-2*n);function $_(n,t,e,i="doorLeaf"){const s=new ne,r=Ct.leafT,a=.105,o=.175,c=.105,l=.14,h=Math.min(Ct.handleH+.01,t-c-l),u=(m,M,v,E,C=r,b=.005)=>{const T=te(i,m,M,C,e,{chamfer:b,cast:!0});return T.position.set(v,E,0),s.add(T),T};u(a,t,n/2-a/2,0),u(a,t,-n/2+a/2,0);const d=n-2*a;u(d,o,0,-t/2+o/2),u(d,c,0,t/2-c/2),u(d,l,0,-t/2+h);const f=o,g=h-l/2,_=h+l/2,p=t-c;g-f>.05&&u(d-.004,g-f-.004,0,-t/2+(f+g)/2,r-.016,.002),p-_>.05&&u(d-.004,p-_-.004,0,-t/2+(_+p)/2,r-.016,.002);for(const m of[-1,1]){const M=te("chrome",.052,.052,.01,pe.metal,{chamfer:.002,cast:!1});M.position.set(-n/2+.06,-t/2+Ct.handleH,m*(r/2+.005)),s.add(M);const v=te("chrome",.02,.02,.045,pe.metal,{chamfer:.001,cast:!1});v.position.set(-n/2+.06,-t/2+Ct.handleH,m*(r/2+.0275)),s.add(v);const E=te("chrome",.11,.02,.02,pe.metal,{chamfer:.001,cast:!1});E.position.set(-n/2+.115,-t/2+Ct.handleH,m*(r/2+.05)),s.add(E)}return s}function Z_(n,t,e=pe.metal){const i=new ne,s=.048,r=.085,a=.07,o=.21,c=.07,l=Math.min(1.02,t-a-c-.2),h=(f,g,_,p,m=s,M=.003)=>{const v=te("chrome",f,g,m,e,{chamfer:M,cast:!0});return v.position.set(_,p,0),i.add(v),v};h(r,t,n/2-r/2,0),h(r,t,-n/2+r/2,0);const u=n-2*r;h(u,o,0,-t/2+o/2),h(u,a,0,t/2-a/2),h(u,c,0,-t/2+l);const d=[[-t/2+o,-t/2+l-c/2],[-t/2+l+c/2,t/2-a]];for(const[f,g]of d){const _=g-f;if(_<.08)continue;const p=new yt(new ee(u-.004,_-.004,.008),dc());p.castShadow=!1,p.receiveShadow=!0,p.position.set(0,(f+g)/2,0),i.add(p)}for(const f of[-1,1]){const g=te("chrome",u,o-.03,.004,e,{chamfer:.001,cast:!1});g.position.set(0,-t/2+o/2,f*(s/2+.003)),i.add(g);const _=-t/2+1.05,p=te("chrome",n-.17,.038,.038,e,{chamfer:.002,cast:!1});p.position.set(0,_,f*(s/2+.062)),i.add(p);for(const m of[-1,1]){const M=te("chrome",.026,.026,.062,e,{chamfer:.001,cast:!1});M.position.set(m*(n/2-.115),_,f*(s/2+.031)),i.add(M)}}return i}class J_{constructor(t,e,i,s){this.system=t,this.id=s,this.name=e.label||"door",this.auto=!!e.auto,this.triggerR=e.triggerR??(this.auto?q_:Y_),this.dwell=e.dwell??(this.auto?X_:j_),this.openTime=e.openTime??V_,this.closeTime=e.closeTime??W_,this.state=e.startsShut===!1?"open":"shut",this.phase=this.state==="open"?1:0,this._hold=0,this.isDoor=!0,this.action="door",this.data={door:this},this.radius=2,this.leaves=[];for(const c of e.leaves){const l=new ne;l.position.set(c.hx,c.y,c.hz),l.rotation.y=c.baseRot;const h=e.style==="glazed"?Z_(c.lw,c.lh,e.colour):$_(c.lw,c.lh,e.colour,e.surfaceName),u=Fh(h);u.position.set(c.dx,c.lh/2+.015,c.dz),u.rotation.y=c.leafRot,l.add(u),i.add(l),this.leaves.push({pivot:l,baked:u,baseRot:c.baseRot,phiOpen:c.phiOpen})}for(const c of this.leaves)c.pivot.rotation.y=c.baseRot;i.updateMatrixWorld(!0);const r=new ni,a=new ni;for(const c of this.leaves)r.union(a.setFromObject(c.baked));r.min.y-=.05,this.collider={min:r.min.clone(),max:r.max.clone(),walkable:!1,door:this};const o=new I(e.centre.x,e.y0+1,e.centre.z);i.localToWorld(o),this.pos=o,this._trigger2=this.triggerR*this.triggerR,this._apply()}get open(){return this.state==="open"}get blocking(){return this.state==="shut"}get label(){return this.state==="shut"||this.state==="closing"?`Open the ${this.name}`:`Close the ${this.name}`}requestOpen(){if(this.state==="open"||this.state==="opening"){this._hold=this.dwell;return}this.state="opening",this.system._dirty=!0}requestClose(){return this.state==="shut"||this.state==="closing"?!0:this._occupied()?!1:(this.state="closing",!0)}toggle(){return this.state==="shut"||this.state==="closing"?(this.requestOpen(),!0):this.requestClose()}_occupied(t=null){var a;const e=this.collider,i=o=>o.x>e.min.x-Sr&&o.x<e.max.x+Sr&&o.z>e.min.z-Sr&&o.z<e.max.z+Sr,s=(a=this.system.game.player)==null?void 0:a.position;if(s&&i(s))return!0;const r=t||this.system._movers();for(const o of r)if(i(o))return!0;return!1}update(t,e,i){let s=!1;if(this.auto&&i){const r=i.x-this.pos.x,a=i.z-this.pos.z;s=r*r+a*a<this._trigger2}if(!s)for(const r of e){const a=r.x-this.pos.x,o=r.z-this.pos.z;if(a*a+o*o<this._trigger2){s=!0;break}}switch(s&&(this._hold=this.dwell,(this.state==="shut"||this.state==="closing")&&(this.state="opening",this.system._dirty=!0)),this.state){case"opening":this.phase=kl(this.phase+t/this.openTime),this.phase>=1&&(this.phase=1,this.state="open");break;case"open":this._hold>0&&(this._hold-=t,this._hold<=0&&!this._occupied(e)&&(this.state="closing"));break;case"closing":if(this._occupied(e)){this.state="opening",this._hold=this.dwell;break}this.phase=kl(this.phase-t/this.closeTime),this.phase<=0&&(this.phase=0,this.state="shut",this.system._dirty=!0);break}this._apply()}_apply(){const t=K_(this.phase);for(const e of this.leaves)e.pivot.rotation.y=e.baseRot+e.phiOpen*t}setVisible(t){for(const e of this.leaves)e.pivot.visible!==t&&(e.pivot.visible=t)}dispose(){var t;for(const e of this.leaves)(t=e.pivot.parent)==null||t.remove(e.pivot),e.baked.traverse(i=>{i.isMesh&&i.geometry.dispose()});this.leaves.length=0}}class Q_{constructor(t){this.game=t,this.list=[],this._blocking=[],this._dirty=!0,this._moverBuf=[],this._moverFrame=-1,this._frame=0,this.scanned=0}install(t,e){if(!t||!t.length)return[];const i=[];for(const s of t){const r=new J_(this,s,e,this.list.length);this.list.push(r),i.push(r)}return this._dirty=!0,i}get count(){return this.list.length}_movers(){var r,a,o;if(this._moverFrame===this._frame)return this._moverBuf;this._moverFrame=this._frame;const t=this._moverBuf;t.length=0;const e=this.game,i=(a=(r=e.slice)==null?void 0:r.bodies)==null?void 0:a.call(r);if(i)for(const c of i)t.push(c.pos);const s=(o=e.npcs)==null?void 0:o.list;if(s)for(const c of s)c.visible&&t.push(c.position);return t}update(t){var r;if(!this.list.length)return;this._frame++;const e=this._movers(),i=(r=this.game.player)==null?void 0:r.position,s=Bl*Bl;for(const a of this.list)if(a.update(t,e,i),i){const o=i.x-a.pos.x,c=i.z-a.pos.z;a.setVisible(o*o+c*c<s)}}collect(t,e,i){if(this._dirty){this._blocking.length=0;for(const l of this.list)l.blocking&&this._blocking.push(l.collider);this._dirty=!1}const s=this._blocking.length;if(!s)return i;this.scanned+=s;const r=t.x-e,a=t.x+e,o=t.z-e,c=t.z+e;for(let l=0;l<s;l++){const h=this._blocking[l];h.max.x<r||h.min.x>a||h.max.z<o||h.min.z>c||i.push(h)}return i}nearest(t,e=2){let i=null,s=e;for(const r of this.list){if(r.auto)continue;const a=r.pos.distanceTo(t);a<s&&(s=a,i=r)}return i}clear(){for(const t of this.list)t.dispose();this.list.length=0,this._blocking.length=0,this._dirty=!0}}const ka=(n,t,e,i,s={})=>{const r=new yt(new ee(n,t,e),s.material||gn(i,s));return r.castShadow=s.cast!==!1,r.receiveShadow=!0,r};function tx(n,t={}){var f;const{width:e=3,height:i=.8,bg:s="#1f2933",fg:r="#f4efe4",font:a="bold 64px Georgia, serif",pad:o=24}=t,c=document.createElement("canvas");c.width=512,c.height=Math.max(32,Math.round(512*(i/e)));const l=c.getContext("2d");l.fillStyle=s,l.fillRect(0,0,c.width,c.height),t.border&&(l.strokeStyle=t.border,l.lineWidth=8,l.strokeRect(6,6,c.width-12,c.height-12)),l.fillStyle=r,l.font=a,l.textAlign="center",l.textBaseline="middle";let h=parseInt(((f=a.match(/(\d+)px/))==null?void 0:f[1])||"64",10);for(;l.measureText(n).width>c.width-o*2&&h>12;)h-=2,l.font=a.replace(/\d+px/,h+"px");l.fillText(n,c.width/2,c.height/2);const u=new zi(c);u.colorSpace=ze,u.anisotropy=4;const d=new yt(new rn(e,i),new Ts({map:u,transparent:!0,side:On}));return d.userData.isSign=!0,d}function ex(n,t=1){const e=new ne,i=n.range(2.6,4.4)*t,s=new yt(new Be(.2*t,.3*t,i,6),gn(pe.trunk,{flat:!0}));s.position.y=i/2,s.castShadow=!0,e.add(s);const r=n.weighted([{value:pe.foliage,weight:4},{value:pe.foliageLight,weight:3},{value:pe.foliageDeep,weight:2}]).value,a=n.int(2,4);for(let o=0;o<a;o++){const c=n.range(1.3,2.2)*t,l=new yt(new na(c,0),gn(r,{flat:!0}));l.position.set(n.range(-.7,.7)*t,i+n.range(-.2,.9)*t,n.range(-.7,.7)*t),l.rotation.set(n.range(0,3),n.range(0,3),n.range(0,3)),l.castShadow=!0,l.receiveShadow=!0,e.add(l)}return e}function nx(n,t){const e=new ne,i=ka(1.9,.72,4.3,n.pick(pe.carBodies));i.position.y=.78,e.add(i);const s=ka(1.72,.62,2.2,0,{material:r_()});s.position.set(0,1.4,-.15),e.add(s);const r=ka(1.95,.34,4.35,pe.metalDark);r.position.y=.45,e.add(r);for(const o of[-.86,.86])for(const c of[1.42,-1.42]){const l=new yt(new Be(.34,.34,.26,10),gn(1579292));l.rotation.z=Math.PI/2,l.position.set(o,.34,c),l.castShadow=!0,e.add(l)}const a=a_();for(const o of[-.62,.62]){const c=new yt(new ee(.34,.16,.08),a);c.position.set(o,.86,2.16),e.add(c);const l=new yt(new ee(.3,.14,.08),o_());l.position.set(o,.86,-2.16),e.add(l)}return e.userData.headlights=a,e}const ix=.42,sx=.34,ti=sx+.03,Vo=.7,Wo=.6,Ye=.55,Fe=11026479,Os=3.2,yn=2.8,ft={x0:-5.4,x1:-1.8,z0:-3.65,z1:-2.35,cx:-3.6,cz:-3,w:3.6,d:1.3,benchH:.9},yr={x:ft.cx,y:1.78,z:ft.z0+.176,tilt:-.16,w:.48,h:.28},Ha={x0:-1.7,y:.97,z:0},En={x0:ft.x0+.35,x1:-2.3,z:ft.z1+.55,facing:Math.PI},rx=.04,ax=.004,ox=.012,cx=(n,t,e)=>{const i=Math.min(n,t,e);return i<rx?0:Math.min(ox,Math.max(ax,i/12))},lx=[["tile",16777215,"kitchen floor overlay, splashbacks, partition linings"],["metal",ut.metalDull,"all stainless: pod, benches, pass, hood, shelving"],["bench",ut.benchtop,"front counter top (RoomKit counter())"],["joinery",ut.joineryLight,"tables, chairs, booths, gate, door leaves"],["joinery",ut.joineryDark,"chair frames, bins, kiosk plinths"],["joinery",ut.shadowDark,"toe kicks, recesses, coved skirting, screens off"],["trim",Fe,"counter fascia, kiosk pedestals, menu board, signage"],["(basic)","signAtlas","ONE canvas atlas: every label in the shop"],["(shared)","troffer emissive","luminaire faces — one material town-wide"],["(shared)","contact shadow","fixture footprint decals — one town-wide"],["trim",5208634,"cold bin: lettuce (legibility is a design requirement)"],["trim",10236968,"cold bin: tomato"],["trim",13210159,"cold bin: cheese + UHC hold slots"],["trim",8030778,"cold bin: pickle"],["trim",15261904,"cold bin: onion + mayo gun band"]],Hl=new Set;function Kh(n,t,e={}){if(e.material)return e.material;try{return gc(n,t,null,e.recipe||{})}catch(i){return Hl.has(n)||(Hl.add(n),console.error(`Fitout: surface '${n}' unavailable, flat colour instead`,i)),gn(t,e)}}function hx(n,t,e,i,s,r={}){var h;const a=Kh(n,s,r),o=r.chamfer??cx(t,e,i),c=o>0?Xh(t,e,i,o):new ee(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),l=new yt(c,a);return l.castShadow=r.cast??((h=a.userData)==null?void 0:h.cast)??!1,l.receiveShadow=!0,l}function X(n,t,e,i,s,r,a,o,c,l={}){const h=hx(t,a,o,c,e,l);return h.position.set(i,s,r),l.rotY&&(h.rotation.y=l.rotY),n.add(h),h}const $h=n=>({x:Math.sin(n),z:Math.cos(n)});function Er(n,t,e,i,s){const r=(t+i)/2,a=(e+s)/2;X(n,"joinery",ut.shadowDark,r,.0375,a,Math.max(Math.abs(i-t),.024),.075,Math.max(Math.abs(s-e),.024))}function wr(n,t,e,i,s,r,a,o){const c=i-t,l=s-e;for(let h=0;h<a;h++)for(let u=0;u<o;u++){const d=t+(h+.5)*(c/a),f=e+(u+.5)*(l/o);X(n,"metal",ut.metalDull,d,r+.035,f,1.2,.07,.6);const g=new yt(new ee(1.16,.012,.56),c_());g.position.set(d,r-.006,f),n.add(g)}}function ux(n,t,e,i=0,s=.62,r=.48){const o=$h(i);X(n,"joinery",ut.joineryDark,t,.9/2,e,s,.9,r,{rotY:i,cast:!0}),X(n,"joinery",ut.shadowDark,t,.075,e,s-.06,.15,r-.06,{rotY:i}),X(n,"joinery",ut.shadowDark,t+o.x*(r/2-.03),.6,e+o.z*(r/2-.03),s-.16,.34,.04,{rotY:i});const c=X(n,"joinery",ut.joineryLight,t+o.x*(r/2+.01),.64,e+o.z*(r/2+.01),s-.2,.26,.016,{rotY:i,cast:!0});c.rotation.x=-.22,X(n,"metal",ut.metalDull,t,.9+.02,e,s+.06,.04,r+.06,{rotY:i,cast:!0}),X(n,"trim",Fe,t,.9-.07,e,s+.005,.09,r+.005,{rotY:i}),n.solid(t,0,e,Math.abs(o.z)*s+Math.abs(o.x)*r,.9+.05,Math.abs(o.z)*r+Math.abs(o.x)*s)}function Gl(n,t,e,i,s=0){const r={rotY:s};X(n,"joinery",ut.joineryDark,t,i+.021,e,.17,.042,.115,r),X(n,"trim",Fe,t-.045,i+.1,e,.052,.15,.052,{...r,cast:!0}),X(n,"joinery",ut.shadowDark,t+.03,i+.075,e-.02,.038,.1,.038,{...r,cast:!0}),X(n,"joinery",ut.joineryLight,t+.038,i+.058,e+.028,.055,.065,.055,r)}function dx(n,t,e,i,s=7,r=.4,a=.3,o=0){for(let c=0;c<s;c++)X(n,"trim",Fe,t,e+.01+c*.014,i,r,.012,a,{rotY:o,cast:c===s-1});X(n,"joinery",ut.shadowDark,t,e+.004,i,r+.03,.008,a+.03,{rotY:o})}const qo=4,Xo=8;function ns(){return"#"+Fe.toString(16).padStart(6,"0")}const Zh={fries:[0,0,"FRIES","#20262e"],grill:[1,0,"GRILL","#20262e"],pod:[2,0,"BUILD","#20262e"],pack:[3,0,"PACK-OUT","#20262e"],drivethru:[0,1,"DRIVE-THRU",ns()],staff:[1,1,"STAFF ONLY","#20262e"],collect:[2,1,"COLLECT",ns()],order:[3,1,"ORDER HERE",ns()],drinks:[0,2,"DRINKS","#20262e"],mccafe:[1,2,"McCAFE","#4b2e22"],barn:[2,2,"BURGER BARN",ns()],uhc:[3,2,"UHC","#20262e"],lettuce:[0,3,"LETTUCE","#4f7a3a"],tomato:[1,3,"TOMATO","#9c3428"],cheese:[2,3,"CHEESE","#c9922f"],pickle:[3,3,"PICKLE","#7a8a3a"],onion:[0,4,"ONION","#8f9784","#20262e"],ketchup:[1,4,"KETCHUP","#9c2b1f"],mustard:[2,4,"MUSTARD","#c9922f"],mayo:[3,4,"MAYO","#e6dcc4","#20262e"],bbq:[0,5,"BBQ","#5a3a26"],buns:[1,5,"BUNS","#a8763f"],wrap:[2,5,"WRAP","#20262e"],dry:[3,5,"DRY STORE","#2f5d6b"],pay:[0,6,"PAY",ns()],present:[1,6,"PRESENT",ns()],toaster:[2,6,"TOASTER","#20262e"],sauce:[3,6,"SAUCE","#20262e"]};let wn=null;function Jh(){if(wn!==null)return wn||null;if(typeof document>"u"||!document.createElement)return wn=!1,null;const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d");if(!t)return wn=!1,null;const e=n.width/qo,i=n.height/Xo;t.clearRect(0,0,n.width,n.height);for(const[,r]of Object.entries(Zh)){const[a,o,c,l,h="#f4efe4"]=r,u=a*e,d=o*i;t.fillStyle=l,t.fillRect(u+3,d+3,e-6,i-6),t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=3,t.strokeRect(u+3,d+3,e-6,i-6),t.fillStyle=h,t.textAlign="center",t.textBaseline="middle";let f=44;for(t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.measureText(c).width>e-34&&f>12;)f-=2,t.font=`bold ${f}px Helvetica, Arial, sans-serif`;t.fillText(c,u+e/2,d+i/2)}const s=new zi(n);return s.colorSpace=ze,s.anisotropy=4,wn=new mn({map:s,roughness:.9,metalness:0,emissive:2763306,emissiveMap:s,side:zn,transparent:!1}),wn}qs(()=>{var n;wn&&wn.dispose&&((n=wn.map)==null||n.dispose(),wn.dispose()),wn=null});let $n=null;function Tr(){return $n||($n=new mn({color:856342,roughness:.3,metalness:0,emissive:1454666,emissiveIntensity:.55})),$n}qs(()=>{var n;(n=$n==null?void 0:$n.dispose)==null||n.call($n),$n=null});function fe(n,t,e,i,s,r,a,o=0){const c=Jh(),l=Zh[t];if(!c||!l)return null;const[h,u]=l,d=new rn(r,a),f=h/qo,g=(h+1)/qo,_=1-(u+1)/Xo,p=1-u/Xo;d.setAttribute("uv",new Ee(new Float32Array([f,p,g,p,f,_,g,_]),2));const m=new yt(d,c);return m.position.set(e,i,s),m.rotation.y=o,n.add(m),m}const jr=n=>!n.walkable&&n.max.y>ix&&n.min.y<1.7;function fx(n,t,e){let i=t,s=e,r=0;for(let a=0;a<4;a++){let o=!1;for(const c of n){if(!jr(c))continue;const l=c.min.x-ti,h=c.max.x+ti,u=c.min.z-ti,d=c.max.z+ti;if(i<=l||i>=h||s<=u||s>=d)continue;const f=[[i-l,-1,0],[h-i,1,0],[s-u,0,-1],[d-s,0,1]];f.sort((m,M)=>m[0]-M[0]);const[g,_,p]=f[0];i+=_*g,s+=p*g,r+=g,o=!0}if(!o)break}return{x:i,z:s,moved:r}}function px(n,t,e){let i=1/0;for(const s of n){if(!jr(s))continue;const r=Math.max(s.min.x-t,0,t-s.max.x),a=Math.max(s.min.z-e,0,e-s.max.z),o=r===0&&a===0?-Math.min(t-s.min.x,s.max.x-t,e-s.min.z,s.max.z-e):Math.hypot(r,a);o<i&&(i=o)}return i===1/0?99:i}function mx(n,t){const e=[],i=[];for(const s of t){const r=[];for(const g of n)jr(g)&&s.x>g.min.x-ti&&s.x<g.max.x+ti&&s.z>g.min.z-ti&&s.z<g.max.z+ti&&r.push([+g.min.x.toFixed(2),+g.min.z.toFixed(2),+g.max.x.toFixed(2),+g.max.z.toFixed(2)]);if(r.length&&e.push({id:s.id,why:"point inside a blocking collider",boxes:r}),i.push({id:s.id,clear:+px(n,s.x,s.z).toFixed(3)}),s.facing==null||s.standoff==null)continue;const a=$h(s.facing),o=[s.standoff-.01,s.standoff-Wo],c=[s.x+a.x*o[0],s.x+a.x*o[1]],l=[s.z+a.z*o[0],s.z+a.z*o[1]],h=Vo/2,u=[Math.min(...c)-Math.abs(a.z)*h,Math.max(...c)+Math.abs(a.z)*h],d=[Math.min(...l)-Math.abs(a.x)*h,Math.max(...l)+Math.abs(a.x)*h],f=[];for(const g of n)jr(g)&&(g.max.x<=u[0]+1e-6||g.min.x>=u[1]-1e-6||g.max.z<=d[0]+1e-6||g.min.z>=d[1]-1e-6||f.push([+g.min.x.toFixed(2),+g.min.z.toFixed(2),+g.max.x.toFixed(2),+g.max.z.toFixed(2)]));f.length&&e.push({id:s.id,why:`clear floor ${Vo} x ${Wo} obstructed`,rect:[+u[0].toFixed(2),+d[0].toFixed(2),+u[1].toFixed(2),+d[1].toFixed(2)],boxes:f})}return i.sort((s,r)=>s.clear-r.clear),{failures:e,tightest:i.slice(0,8)}}function gx(n,t={}){const e=t.width??20,i=t.depth??14,s=e/2,r=i/2,a=s-Ct.wallThick/2,o=r-Ct.wallThick/2,c=ut.metalDull,l=ut.joineryLight,h=ut.joineryDark,u=ut.shadowDark,d=[],f=(R,G,tt,it=null,Xt=null,le={})=>{d.push({name:R,x:G,z:tt,facing:it,standoff:Xt,noClamp:!!le.noClamp})},g=1.4;X(n,"tile",16777215,(-a+7.9)/2,.003,(-o+g)/2,a+7.9,.006,g+o,{cast:!1,chamfer:0}),X(n,"tile",16777215,(7.9+a)/2,.003,(-5+g)/2,a-7.9,.006,g+5,{cast:!1,chamfer:0}),Er(n,-a+.02,-o+.04,3.25,-o+.04),Er(n,-a+.04,-o,-a+.04,g),Er(n,a-.04,-5,a-.04,g);const _=-o+.375,p=-o+.75,m=-9.6,M=-6.7,v=(m+M)/2,E=M-m;X(n,"metal",c,v,.45,_,E,.9,.75,{cast:!0}),X(n,"joinery",u,v,.075,_+.02,E-.1,.15,.66),n.solid(v,0,_,E,.9,.75);const C=1.12;X(n,"tile",16777215,v,1.5,-o+.02,E+.4,1.2,.02,{cast:!1,chamfer:0}),X(n,"metal",c,v,1.01,_,2.1,.22,.62,{cast:!0});for(const R of[-.7,-.23,.24])X(n,"joinery",u,v+R,C,_,.32,.03,.42),X(n,"trim",13210159,v+R,C-.03,_,.28,.01,.38,{chamfer:0}),X(n,"metal",c,v+R,C+.16,_-.26,.03,.3,.03),X(n,"metal",c,v+R,C+.3,_-.2,.03,.03,.16);X(n,"metal",c,v+.95,1.06,_,.75,.1,.62,{cast:!0}),X(n,"metal",c,v+.95,1.24,_-.26,.7,.04,.04),X(n,"trim",Fe,v+.95,1.14,_+.1,.3,.06,.22),fe(n,"fries",v,1.62,-o+.05,.9,.26,0),X(n,"metal",c,v,2.24,_+.15,E+.3,.42,1,{cast:!0});const b=1.06,T=-4.3,P=-.3,D=(T+P)/2,x=P-T;X(n,"metal",c,D,.45,_,x,.9,.75,{cast:!0}),X(n,"joinery",u,D,.075,_+.02,x-.1,.15,.66),n.solid(D,0,_,x,.9,.75),X(n,"tile",16777215,D,1.5,-o+.02,x+.4,1.2,.02,{cast:!1,chamfer:0}),X(n,"metal",c,D,.98,_,2.6,.16,.62,{cast:!0});for(const R of[-.65,.65])X(n,"joinery",u,D+R,b,_,1.1,.02,.5);X(n,"metal",c,D,b+.1,_-.3,2.6,.2,.03,{cast:!0}),X(n,"metal",c,D+1.35,b+.02,_+.16,.1,.02,.16),X(n,"joinery",u,D+1.35,b+.06,_+.24,.03,.07,.1),fe(n,"grill",D,1.62,-o+.05,.9,.26,0),X(n,"metal",c,D,2.24,_+.15,x+.4,.42,1,{cast:!0}),X(n,"metal",c,D,2.62,_+.15,.34,.36,.34),X(n,"metal",c,1.35,1,_+.02,1.6,2,.7,{cast:!0}),n.solid(1.35,0,_+.02,1.6,2,.7);for(const R of[-.4,.4])X(n,"joinery",u,1.35+R,1,_+.38,.72,1.86,.02),X(n,"metal",c,1.35+R-.3,1.05,_+.4,.04,.6,.04);const y=Ct.intWall,U=3.3,F=-4.55,j={height:yn,surface:"tile",colour:16777215,thickness:y,skirting:!1,cornice:!1,trimColour:ut.trim};Ui(n,U,-o,U,F,{...j,inner:-1,autoServices:!1,name:"dryWest"}),Ui(n,U,F,a,F,{...j,inner:1,autoServices:!1,openings:[{at:.95,width:1,kind:"door",head:Ct.headDatum,door:{startsShut:!1,style:"panel",label:"dry store"}}],name:"drySouth"}),fe(n,"staff",U+.006+y/2,1.85,-5.7,.7,.22,Math.PI/2),fe(n,"dry",U+1.85,2.3,F+y/2+.006,.9,.26,0);const q={x0:3.75,x1:6.05,z0:-o+.05,z1:-5.35},V=(q.x0+q.x1)/2,K=(q.z0+q.z1)/2;X(n,"metal",c,V,1.2,K,q.x1-q.x0,2.4,q.z1-q.z0,{cast:!0}),n.solid(V,0,K,q.x1-q.x0,2.4,q.z1-q.z0),X(n,"joinery",u,V+.4,1.05,q.z1+.012,.8,1.9,.03),X(n,"metal",c,V+.72,1.05,q.z1+.03,.05,.3,.05),X(n,"metal",c,V,2.55,K,.9,.3,.7,{cast:!0});for(let R=0;R<4;R++)X(n,"metal",c,7.15,.15+R*.44,-o+.25,1.7,.03,.45),R>0&&(X(n,"joinery",l,6.8,.29+R*.44,-o+.25,.55,.24,.38,{cast:!0}),X(n,"joinery",h,7.6,.27+R*.44,-o+.25,.55,.21,.36));n.solid(7.15,0,-o+.25,1.7,1.6,.45),X(n,"joinery",l,7.9,.16,-6.1,.55,.32,.45,{cast:!0}),X(n,"joinery",h,7.8,.44,-6.05,.42,.24,.38,{cast:!0}),Er(n,U+y/2,-o,U+y/2,F),wr(n,U,-o,a-1,F,yn,2,1);const B={cx:4.7,cz:-2.5,w:3,d:.75};X(n,"metal",c,B.cx,.45,B.cz,B.w,.9,B.d,{cast:!0}),X(n,"joinery",u,B.cx,.075,B.cz,B.w-.1,.15,B.d-.08),n.solid(B.cx,0,B.cz,B.w,.9,B.d),Kn(n,B.cx,B.cz,0,B.w,B.d);for(let R=0;R<3;R++)X(n,"trim",Fe,B.cx-1.05,.98+R*.09,B.cz,.34,.08,.26);dx(n,B.cx-.3,.9,B.cz,7);for(let R=0;R<4;R++)X(n,"joinery",l,B.cx+.6,.96+R*.11,B.cz,.42,.1,.42,{cast:R===3});X(n,"joinery",l,B.cx+1.2,.97,B.cz,.36,.14,.36,{cast:!0}),fe(n,"pack",B.cx,1.6,B.cz-B.d/2-.02,.9,.26,Math.PI);const ct=a-.375;X(n,"metal",c,ct,.45,-2.7,.75,.9,4.5,{cast:!0}),X(n,"joinery",u,ct,.075,-2.7,.66,.15,4.4),n.solid(ct,0,-2.7,.75,.9,4.5),Kn(n,ct,-2.7,0,.75,4.5),X(n,"joinery",u,ct-.05,1.02,-4.2,.3,.2,.36,{cast:!0}),X(n,"joinery",u,ct-.11,1.22,-4.2,.03,.24,.32,{cast:!0}),X(n,"metal",c,ct,.94,-1,.6,.04,.8),X(n,"metal",c,a-.06,1.55,-2.7,.05,.22,.05,{cast:!0}),X(n,"joinery",u,a-.1,1.62,-2.7,.14,.14,.1,{cast:!0}),X(n,"joinery",u,a-.05,1.75,-2.7,.05,.4,.6,{cast:!0});{const R=new yt(new rn(.52,.32),Tr());R.position.set(a-.07,1.75,-2.7),R.rotation.y=-Math.PI/2,n.add(R)}X(n,"metal",c,a-.25,1.25,-2.7,.45,.03,1.1),X(n,"trim",Fe,a-.25,1.32,-2.35,.3,.1,.22,{cast:!0}),X(n,"joinery",l,a-.25,1.34,-3,.28,.14,.3,{cast:!0}),fe(n,"pay",a-.02,2.3,-4.2,.6,.2,-Math.PI/2),fe(n,"present",a-.02,2.3,-1,.75,.2,-Math.PI/2),fe(n,"drivethru",a-.02,2.58,-2.6,1.1,.26,-Math.PI/2);const nt=ft.benchH;X(n,"metal",c,ft.cx,.45,ft.cz,ft.w,.9,ft.d,{cast:!0}),X(n,"joinery",u,ft.cx,.075,ft.cz,ft.w-.1,.15,ft.d-.1),n.solid(ft.cx,0,ft.cz,ft.w,.9,ft.d),Kn(n,ft.cx,ft.cz,0,ft.w,ft.d);for(const[R,G]of[[0,Fe],[1,13210159],[2,5208634],[3,l]]){const tt=ft.x0+.55+R*.85;for(let it=0;it<4;it++)X(n,"trim",G,tt,.24+it*.13,ft.z1-.16,.4,.11,.26,{chamfer:0})}const xt=-4.9;X(n,"metal",c,xt,nt+.31,ft.cz-.1,.85,.62,.62,{cast:!0}),X(n,"joinery",u,xt,nt+.63,ft.cz-.1,.6,.03,.3);const qt=X(n,"metal",c,xt,nt+.16,ft.cz+.38,.6,.02,.42,{cast:!0});qt.rotation.x=.42,X(n,"trim",Fe,xt,nt+.5,ft.cz+.22,.6,.08,.02),fe(n,"toaster",xt,nt+.36,ft.cz+.225,.44,.14,0),X(n,"metal",c,ft.x0-.55,.6,ft.cz,.7,1.2,.9,{cast:!0}),n.solid(ft.x0-.55,0,ft.cz,.7,1.2,.9);for(let R=0;R<3;R++)X(n,"joinery",l,ft.x0-.55,.35+R*.32,ft.cz,.62,.16,.8);fe(n,"buns",ft.x0-.55,1.32,ft.cz+.46,.5,.16,0);const Jt=-4;X(n,"metal",c,Jt,nt+.1,ft.cz-.25,.7,.2,.45,{cast:!0});const Z=[["ketchup",10236968],["mustard",13210159],["mayo",15261904],["bbq",8030778]];Z.forEach(([R,G],tt)=>{const it=Jt-.255+tt*.17;X(n,"metal",c,it,nt+.3,ft.cz-.25,.06,.22,.06,{cast:!0}),X(n,"trim",G,it,nt+.43,ft.cz-.25,.05,.05,.05,{chamfer:0}),fe(n,R,it,nt+.135,ft.cz-.02,.15,.06,0)});const O=-3.58;X(n,"joinery",u,-3.1,nt+.015,ft.cz-.08,1,.05,.6);const at=[["pickle",8030778],["onion",15261904],["lettuce",5208634],["tomato",10236968],["cheese",13210159]];at.forEach(([R,G],tt)=>{const it=O+.1+tt*.19;X(n,"metal",c,it,nt+.045,ft.cz-.08,.165,.09,.54),X(n,"trim",G,it,nt+.075,ft.cz-.08,.13,.05,.48,{chamfer:0}),fe(n,R,it,nt-.1,ft.z1+.006,.17,.075,0)});const et=-2.2;X(n,"metal",c,et,nt+.38,ft.cz,.78,.76,.68,{cast:!0});for(let R=0;R<3;R++)for(const G of[1,-1])X(n,"joinery",u,et,nt+.14+R*.24,ft.cz+G*.345,.64,.16,.02),X(n,"trim",13210159,et,nt+.11+R*.24,ft.cz+G*.3,.56,.03,.06,{chamfer:0});fe(n,"uhc",et,nt+.86,ft.cz+.01,.4,.16,0),X(n,"joinery",l,-1.95,nt+.02,ft.cz+.3,.3,.04,.34,{cast:!0}),fe(n,"wrap",-1.95,nt-.1,ft.z1+.006,.3,.1,0);const st={x0:-1.72,z0:-2.45,x1:-.9,z1:-.55,w:.36};{const R=st.x1-st.x0,G=st.z1-st.z0,tt=Math.hypot(R,G),it=Math.atan2(-G,R)+Math.PI/2,Xt=(st.x0+st.x1)/2,le=(st.z0+st.z1)/2,Ue=X(n,"metal",c,Xt,.965,le,st.w,.03,tt,{rotY:it,cast:!0});Ue.rotation.x=-.045;for(const Kt of[-1,1]){const ge=X(n,"metal",c,Xt,1.03,le,.03,.1,tt,{rotY:it});ge.translateX(Kt*(st.w/2-.015)),ge.rotation.x=-.045}for(const[Kt,ge]of[[st.x0+.1,st.z0+.22],[st.x1-.1,st.z1-.25]])X(n,"metal",c,Kt,.47,ge,.05,.94,.05);for(let Kt=0;Kt<3;Kt++){const ge=Kt/3,an=(Kt+1)/3,As=st.x0+R*ge,Rs=st.x0+R*an,Pn=st.z0+G*ge,ki=st.z0+G*an;n.solid((As+Rs)/2,.6,(Pn+ki)/2,Math.abs(Rs-As)+st.w,.5,Math.abs(ki-Pn)+.06)}}X(n,"metal",c,ft.cx,1.28,ft.z0+.06,.05,.8,.05,{cast:!0}),X(n,"metal",c,ft.cx,1.66,ft.z0+.09,.06,.05,.1);{const R=X(n,"joinery",u,ft.cx,1.78,ft.z0+.14,.56,.36,.035,{cast:!0});R.rotation.x=-.16;const G=X(n,"joinery",u,ft.cx,1.78,ft.z0+.165,.5,.3,.008,{chamfer:0});G.rotation.x=-.16;const tt=new yt(new rn(.48,.28),Tr());tt.position.set(ft.cx,1.78,ft.z0+.172),tt.rotation.x=-.16,n.add(tt)}fe(n,"pod",ft.cx,2.05,ft.z0+.1,.6,.2,0);const ot=.6,Et=2.45,wt=3.55,Tt=-2.65,L=-1.95;for(const[R,G]of[[-a,Tt],[L,Et],[wt,a]]){const tt=(R+G)/2,it=G-R;X(n,"metal",c,tt,.45,0,it,.9,ot,{cast:!0}),X(n,"joinery",u,tt,.075,0,it-.1,.15,ot-.08),n.solid(tt,0,0,it,.9,ot)}Kn(n,(-a+Tt)/2,0,0,Tt+a,ot);{const R=X(n,"metal",c,Tt+.03,1.24,0,.05,L-Tt,ot-.04,{cast:!0});R.rotation.z=.2}X(n,"metal",c,-.9,.945,0,1.6,.05,ot+.06,{cast:!0});for(const R of[-.7,.7])X(n,"metal",c,-.9+R,1.22,0,.04,.5,.04);X(n,"metal",c,-.9,1.44,0,1.56,.04,.05);for(const R of[-.4,.2]){X(n,"trim",Fe,-.9+R,1.38,0,.28,.1,.2,{cast:!0});const G=new yt(new ee(.2,.02,.14),s_());G.position.set(-.9+R,1.325,0),n.add(G)}n.doors.push({label:"staff gate",style:"panel",pair:!1,auto:!0,startsShut:!0,face:-1,colour:l,surfaceName:"joinery",triggerR:1.2,dwell:1,leaves:[{hx:wt-.003,hz:0,y:0,baseRot:0,phiOpen:-Math.PI/2,leafRot:0,dx:-1.0939999999999996/2,dz:Ct.leafT/2,lw:wt-Et-.006,lh:1}],centre:{x:(Et+wt)/2,z:0},y0:0});const mt={z:1.8,d:.8,x0:-a,x1:Et},Ut=(mt.x0+mt.x1)/2,Wt=mt.x1-mt.x0;H_(n,Ut,mt.z,0,Wt,mt.d,0,ut.benchtop,l,{handle:!1}),X(n,"trim",Fe,Ut,.52,mt.z+mt.d/2+.03,Wt,.6,.02),fe(n,"barn",mt.x0+1.6,.62,mt.z+mt.d/2+.05,1.4,.34,0);const At=-8;X(n,"joinery",u,At,1.02,mt.z,.36,.2,.3,{cast:!0}),X(n,"joinery",u,At,1.22,mt.z-.06,.32,.24,.03,{cast:!0}),X(n,"metal",c,At,.98,mt.z+.3,.14,.16,.1),fe(n,"order",At,1.42,mt.z+mt.d/2+.01,.8,.22,0);const Yt=-5.2;X(n,"metal",c,Yt,1.06,mt.z,1.6,.04,mt.d+.1);for(const R of[-.72,.72])X(n,"metal",c,Yt+R,.98,mt.z,.05,.16,.05);fe(n,"collect",Yt,1.28,mt.z+.12,.9,.24,0),X(n,"metal",c,Yt,2.62,mt.z+.1,.05,.36,.05),X(n,"joinery",u,Yt,2.3,mt.z+.1,.72,.44,.05,{cast:!0});{const R=new yt(new rn(.64,.36),Tr());R.position.set(Yt,2.3,mt.z+.13),n.add(R)}fe(n,"collect",Yt,2.62,mt.z+.135,.6,.2,0);const gt=.2;X(n,"metal",c,gt,1.12,mt.z-.1,.72,.44,.5,{cast:!0}),X(n,"joinery",u,gt,1.1,mt.z+.16,.6,.24,.04);for(const R of[-.18,.1])X(n,"metal",c,gt+R,.96,mt.z+.12,.05,.12,.05);X(n,"joinery",l,gt+.55,.99,mt.z-.15,.28,.18,.28);const A=1.55;X(n,"joinery",h,A,.96,mt.z,1.2,.1,.7,{cast:!0}),X(n,"metal",c,A,1.46,mt.z,1.2,.05,.7,{cast:!0});for(const R of[-1,1])X(n,"metal",c,A+R*.575,1.21,mt.z,.05,.45,.66);const S=new yt(new ee(1.1,.42,.62),Kh("glass",13623528));S.position.set(A,1.215,mt.z),n.add(S),X(n,"joinery",l,A,1.19,mt.z,1.06,.02,.56);for(const[R,G,tt]of[[-.35,-.12,Fe],[0,.1,13210159],[.33,-.08,l]])X(n,"trim",tt,A+R,1.06+.035,mt.z+G,.16,.07,.16,{chamfer:0}),X(n,"trim",tt,A+R*.7,1.23,mt.z-G,.14,.06,.14,{chamfer:0});fe(n,"mccafe",gt+1.15,.62,mt.z+mt.d/2+.05,.9,.26,0),X(n,"trim",Fe,-3.6,2.44,mt.z-.55,5.8,.58,.06,{cast:!0}),fe(n,"barn",-5.6,2.44,mt.z-.51,1.6,.4,0),fe(n,"order",-1.8,2.44,mt.z-.51,1.5,.36,0);const z={x:a-.35,z0:.9,z1:2.5},$=(z.z0+z.z1)/2;X(n,"metal",c,z.x,.45,$,.7,.9,z.z1-z.z0,{cast:!0}),n.solid(z.x,0,$,.7,.9,z.z1-z.z0),Kn(n,z.x,$,0,.7,z.z1-z.z0),X(n,"metal",c,z.x+.1,1.24,$-.25,.3,.68,.86,{cast:!0}),X(n,"joinery",u,z.x-.075,1.34,$-.25,.02,.4,.74);for(let R=0;R<3;R++){const G=$-.51+R*.26;X(n,"trim",[10236968,8030778,13210159][R],z.x-.085,1.34,G,.01,.3,.19,{chamfer:0}),X(n,"metal",c,z.x-.1,1.02,G,.05,.14,.05,{cast:!0}),X(n,"metal",c,z.x-.15,1.11,G,.1,.03,.03)}X(n,"metal",c,z.x-.11,.925,$-.25,.24,.02,.8),X(n,"joinery",u,z.x-.11,.935,$-.25,.18,.01,.74);for(const[R,G]of[[$+.42,6],[$+.6,5]])for(let tt=0;tt<G;tt++)X(n,"joinery",13620957,z.x,.95+tt*.055,R,.115,.055,.115,{cast:tt===G-1,chamfer:0});fe(n,"drinks",a-.02,1.85,$,.9,.26,-Math.PI/2),ux(n,a-.42,3.3,-Math.PI/2);const Q=-9.55;for(const R of[4.3,5.45]){X(n,"metal",c,Q,.05,R,.44,.1,.38),X(n,"trim",Fe,Q,.62,R,.38,1.04,.3,{cast:!0}),X(n,"metal",c,Q,1.16,R,.42,.05,.34);const G=X(n,"joinery",u,Q+.13,1.42,R,.035,.56,.44,{cast:!0});G.rotation.z=.26;const tt=new yt(new ee(.02,.48,.37),Tr());tt.position.set(Q+.165,1.42,R),tt.rotation.z=.26,n.add(tt),X(n,"metal",c,Q+.1,1.08,R+.22,.11,.13,.09),n.solid(Q,0,R,.44,1.7,.42),Kn(n,Q,R,0,.48,.44)}fe(n,"order",-a+.02,1.62,4.88,.6,.2,Math.PI/2);const bt=o-.03-.03,dt=[{x:-6.9,z:3.8},{x:-4.3,z:3.8},{x:-6.9,z:5.55},{x:-4.3,z:5.55},{x:2.9,z:3.8},{x:5.7,z:3.8},{x:8.3,z:3.8}];dt.forEach((R,G)=>{const tt=G+1;jh(n,R.x,R.z,0,.8,.8),Go(n,R.x-.72,R.z,0,Math.PI/2),Go(n,R.x+.72,R.z,0,-Math.PI/2),X(n,"metal",c,R.x,.86,R.z,.035,.24,.035),Gl(n,R.x+.22,R.z+.16,.74),f(`table_${tt}`,R.x,R.z,null,null,{noClamp:!0})});const ht=bt,Bt=ht-1.7,rt=2.6,St=9.4,zt=2,Nt=(St-rt)/zt;for(let R=0;R<zt;R++){const G=rt+(R+.5)*Nt;for(const[tt,it,Xt]of[[Bt+.265,Bt+.06,.95],[ht-.265,ht-.06,.55]])X(n,"joinery",l,G,.23,tt,Nt-.1,.46,.53,{cast:!0}),X(n,"joinery",u,G,.075,tt,Nt-.2,.15,.43),X(n,"joinery",l,G,Xt/2,it,Nt-.1,Xt,.12,{cast:!0});X(n,"joinery",l,G,.725,(Bt+ht)/2,Nt-.2,.03,.7,{cast:!0}),X(n,"joinery",h,G,.36,(Bt+ht)/2,.09,.71,.09),Gl(n,G+.28,(Bt+ht)/2,.74),n.solid(G,0,(Bt+ht)/2,Nt,.95,ht-Bt)}for(const R of[0,Nt,Nt*zt]){const G=rt+R;X(n,"joinery",l,G,.675,(Bt+ht)/2,.07,1.35,ht-Bt-.06,{cast:!0}),X(n,"trim",Fe,G,1.32,(Bt+ht)/2,.086,.06,ht-Bt-.06)}Kn(n,(rt+St)/2,(Bt+ht)/2,0,St-rt,ht-Bt,{margin:.028});const _t=bt-.35;X(n,"joinery",l,-6.3,1.03,_t,6.2,.05,.64,{cast:!0});for(const R of[-2.6,0,2.6])X(n,"metal",c,-6.3+R,.5,_t+.2,.06,1,.06);n.solid(-6.3,0,_t,6.2,1.05,.64);for(const R of[-8.5,-7.2,-5.9,-4.6])X(n,"joinery",l,R,.72,_t-.75,.36,.04,.36,{cast:!0}),X(n,"metal",c,R,.36,_t-.75,.07,.68,.07),X(n,"metal",c,R,.02,_t-.75,.34,.04,.34),n.solid(R,0,_t-.75,.4,.75,.4);const Gt=16772056;n.light(-6.5,Os-.15,4.2,Gt,10,13),n.light(-2,Os-.15,4.6,Gt,10,13),n.light(2.5,Os-.15,4.2,Gt,10,13),n.light(7,Os-.15,4.4,Gt,10,13),n.light(-3.7,yn-.15,1,Gt,10,12),n.light(-7.5,yn-.15,-4.8,Gt,10,12),n.light(-.5,yn-.15,-5,Gt,10,12),n.light(-3.6,yn-.15,-2.6,Gt,12,12),n.light(6.8,yn-.3,-5.5,Gt,8,9),n.light(8.8,yn-.15,-2.6,Gt,9,10),n.light(5,yn-.15,-1.6,Gt,8,10);for(const[R,G,tt,it,Xt]of[[-1.5,1.9,-3.2,2.4,15],[-3,2.1,4.2,3.4,16],[5.5,2.1,4,2.8,13],[-7.6,2,4.9,2.2,11],[-4,1.9,1,1.6,12]]){const le=n.light(R,G,tt,15260876,it,Xt);le.decay=1}wr(n,-9.4,-6.6,3.1,.2,yn,4,3),wr(n,3.6,-4.3,9.6,-.2,yn,2,2),wr(n,-9,2.4,9.4,6.4,Os,4,2),f("spawn",-1,12.6,null,null,{noClamp:!0}),f("station_pod",ft.cx,ft.z1+Ye,Math.PI,Ye),f("station_fries",v,p+Ye,Math.PI,Ye),f("station_grill",D,p+Ye,Math.PI,Ye),f("station_counter",At,mt.z-mt.d/2-Ye,0,Ye),f("station_runner",Yt,mt.z-mt.d/2-Ye,0,Ye),f("station_drivethru",ct-.375-Ye,-2.7,Math.PI/2,Ye),f("restock",7,-5.7,Math.PI,Ye),f("gate",(Et+wt)/2,0,null,null,{noClamp:!0}),n.interact("station_pod","work the pod",ft.cx,.95,ft.z1,"station",{station:"pod",zone:{minZ:ft.z1}},2),n.interact("pod_toaster","toast a bun",xt,1.25,ft.cz+.21,"pod",{op:"token",token:"bun",podOnly:!0},1.8),Z.forEach(([R],G)=>{const tt=Jt-.255+G*.17;n.interact("pod_gun_"+R,R==="bbq"?"dose BBQ":"dose "+R,tt,1.25,ft.cz-.25,"pod",{op:"token",token:R,podOnly:!0},1.7)}),at.forEach(([R],G)=>{const tt=O+.1+G*.19;n.interact("pod_bin_"+R,"add "+R,tt,.98,ft.cz-.08,"pod",{op:"token",token:R,podOnly:!0},1.7)}),n.interact("pod_uhc","pull from the cabinet",et,1.28,ft.cz+.345,"pod",{op:"uhc",podOnly:!0},1.6),n.interact("pod_wrap","wrap the order",-1.95,.95,ft.cz+.3,"pod",{op:"wrap",podOnly:!0},1.4),n.interact("pod_chute","send it down",st.x0+.05,1.05,st.z0,"pod",{op:"send",podOnly:!0},1.4),n.interact("landing_handover","hand the order over",-.9,1,0,"landing",{},1.25);const kt=[];for(const R of d){const G=R.noClamp?{x:R.x,z:R.z,moved:0}:fx(n.colliders,R.x,R.z);n.spot(R.name,G.x,0,G.z),G.moved>.005&&kt.push({name:R.name,from:[R.x,R.z],to:[+G.x.toFixed(3),+G.z.toFixed(3)],moved:+G.moved.toFixed(3)})}const ie=mx(n.colliders,d.filter(R=>!R.noClamp).map(R=>({id:R.name,x:R.x,z:R.z,facing:R.facing,standoff:R.standoff}))),N={rule:`spot = fixture face + normal * standoff; clear floor ${Vo} x ${Wo}; hard floor ${ti}`,checked:d.length,failures:ie.failures,clamped:kt,tightest:ie.tightest,ok:ie.failures.length===0&&kt.length===0};N.ok||console.error("Fitout: CLEARANCE FAILURES — a published point is unreachable",N.failures,kt);const vt=[{where:"pod face to the pass",m:+(-ot/2-ft.z1).toFixed(2)},{where:"pod back to the grill front",m:+(ft.z0-p).toFixed(2)},{where:"pod east end to the pack-out",m:+(B.cx-B.w/2-ft.x1).toFixed(2)},{where:"crew aisle, pass to counter",m:+(mt.z-mt.d/2-ot/2).toFixed(2)},{where:"staff gate",m:+(wt-Et).toFixed(2)},{where:"pass flap by the landing",m:+(L-Tt).toFixed(2)},{where:"counter face to dining tables",m:+(dt[0].z-.4-(mt.z+mt.d/2)).toFixed(2)},{where:"restock straight line, pod spot to dry store door",m:+Math.hypot(4.15-ft.cx,-4.55-(ft.z1+Ye)).toFixed(2)},{where:"front door opening",m:1.8}];return{workplace:"burger_barn",clearance:N,walkways:vt,spots:n.spots,materials:lx.map(R=>typeof R[1]=="number"?`${R[0]}@${R[1].toString(16)}`:`${R[0]}:${R[1]}`),labels:Jh()!==null}}const dn={width:20,depth:14,height:4.2},jt=dn.width/2,Ft=dn.depth/2,Ln=dn.height,ia=Ct.wallThick,di=jt-ia/2,is=Ft-ia/2,ln=2,Ga=4.9,br=.15,Vl=6.4,Va=3.2,Ar=2.8,_x=.45,xx=2.7,xe=-1,Ci=1.8,Wl=2.6,ql=.9,Xl=.85,Yl=2.05,jl=-4.2,Kl=-1,Wa=-5.4,vx=1.8,Un=11026479,hs=13224902,$l=new Set;function Qh(n,t,e={}){if(e.material)return e.material;try{return gc(n,t,null,e.recipe||{})}catch(i){return $l.has(n)||($l.add(n),console.error(`Shell: surface '${n}' unavailable, flat colour instead`,i)),gn(t,e)}}function It(n,t,e,i,s,r,a,o,c,l={}){var d;const h=Qh(t,e,l),u=new yt(new ee(Math.max(a,.001),Math.max(o,.001),Math.max(c,.001)),h);return u.castShadow=l.cast??((d=h.userData)==null?void 0:d.cast)??!1,u.receiveShadow=!0,u.position.set(i,s,r),l.rotY&&(u.rotation.y=l.rotY),n.add(u),u}const Zn=()=>gn(pe.concrete);function en(n,t,e,i,s,r=0){const a=(t+i)/2,o=(e+s)/2,c=Math.abs(i-t),l=Math.abs(s-e);It(n,"(concrete)",0,a,r-.06,o,c,.12,l,{material:Zn(),cast:!1}),n.solid(a,r-1.2,o,c,1.2,l,!0)}function Zl(n,t,e,i,s,r,a){const o=new lc(i,s,28,2,r,Math.PI/2);o.rotateX(-Math.PI/2);const c=new yt(o,Zn());return c.receiveShadow=!0,c.position.set(t,a,e),n.add(c),c}function hn(n,t,e,i,s,r=0,a=.15){const o=(t+i)/2,c=(e+s)/2;It(n,"(concrete)",0,o,r+a/2,c,Math.max(Math.abs(i-t),.15),a,Math.max(Math.abs(s-e),.15),{material:Zn()})}function Rr(n,t,e,i,s,r,a=0,o=.15){for(let l=0;l<8;l++){const h=s+(r-s)*(l/8),u=s+(r-s)*((l+1)/8),d=t+Math.cos(h)*i,f=e+Math.sin(h)*i,g=t+Math.cos(u)*i,_=e+Math.sin(u)*i,p=Math.hypot(g-d,_-f)+.04;It(n,"(concrete)",0,(d+g)/2,a+o/2,(f+_)/2,p,o,.16,{material:Zn(),rotY:Math.atan2(-(_-f),g-d)})}}function Le(n,t,e,i,s,r=0){const a=(t+i)/2,o=(e+s)/2;It(n,"trim",ut.trim,a,r+.008,o,Math.max(Math.abs(i-t),.1),.012,Math.max(Math.abs(s-e),.1))}function Br(n,t,e,i=0,s=1){const r=new yt(new Be(.07,.07,s,8),Qh("metal",ut.metalDull));r.castShadow=!0,r.position.set(t,i+s/2,e),n.add(r)}function Cr(n,t,e,i,s,r,a=0){const o=i-t,c=s-e,l=Math.hypot(o,c);if(l<.5)return;const h=o/l,u=c/l,d=-u,f=h,g=Math.atan2(-u,h),_=ia/2+.006;for(let p=1.2;p<r-.2;p+=1.2)It(n,"joinery",ut.shadowDark,t+h*(l/2)+d*_,a+p,e+u*(l/2)+f*_,l,.02,.012,{rotY:g});for(let p=1.2;p<l-.3;p+=1.2)It(n,"joinery",ut.shadowDark,t+h*p+d*_,a+r/2,e+u*p+f*_,.02,r,.012,{rotY:g})}const tu={lane:{width:3.5,surface:0}},he=tu.lane.surface,ss=tu.lane.width/2;function Mx(n,t){en(n,-jt,Ft,jt,10.5),en(n,-11,10.5,10.4,27.5),en(n,-17.75,15.9,-11,29.5),en(n,9.65,27.5,14.65,29.5),en(n,-13.25,-6.5,-10,Ft),en(n,-12.9,-Ft,-10,-6.5),en(n,-7,-10.75,1.5,-8.6),en(n,-6.9,-10,-3.9,-Ft),en(n,2,-10.2,5,-8.2),en(n,-15-ss,-6.5,-15+ss,15.9,he),en(n,-9,-12.5-ss,6.15,-12.5+ss,he),en(n,12.15-ss,-6.5,12.15+ss,29.5,he),Zl(n,-9,-6.5,4.25,7.75,Math.PI/2,he),Zl(n,6.15,-6.5,4.25,7.75,0,he),hn(n,-16.75,-6.5,-16.75,15.9,he),hn(n,-13.25,-6.5,-13.25,15.9,he),hn(n,-9,-14.25,6.15,-14.25,he),hn(n,-9,-10.75,.5,-10.75,he),hn(n,13.9,-6.5,13.9,29.5,he),hn(n,10.4,-6.5,10.4,-5.6,he),hn(n,10.4,.6,10.4,29.5,he),hn(n,10.4,-5.2,10.4,.2,he,.1),Rr(n,-9,-6.5,4.25,Math.PI,Math.PI*1.5,he),Rr(n,-9,-6.5,7.75,Math.PI,Math.PI*1.5,he),Rr(n,6.15,-6.5,4.25,Math.PI*1.5,Math.PI*2,he),Rr(n,6.15,-6.5,7.75,Math.PI*1.5,Math.PI*2,he);for(const r of[-16.6,-13.4])Le(n,r,-6.5,r,15,he);for(const r of[-14.1,-10.9])Le(n,-9,r,.4,r,he);Le(n,13.75,-6.5,13.75,27.5,he),Le(n,.5,-14.25,.5,-10.75,he);for(let r=1;r<6.4;r+=.8)Le(n,r,-14.25,r+.4,-14.25,he);for(const[r,a]of[[-11.2,-8.6],[-10.2,-9.4],[8.6,-8.8],[9.4,-7.8]])Br(n,r,a);for(let r=0;r<=2;r++)Le(n,-11+r*2.6,10.5,-11+r*2.6,15.9);for(let r=0;r<=3;r++)Le(n,1.4+r*2.6,10.5,1.4+r*2.6,15.9);for(let r=0;r<=8;r++)Le(n,-11+r*2.6,22.1,-11+r*2.6,27.5);for(let r=0;r<2;r++)It(n,"(concrete)",0,-11+(r+.5)*2.6,.06,11.4,1.65,.12,.18,{material:Zn()});for(let r=0;r<3;r++)It(n,"(concrete)",0,1.4+(r+.5)*2.6,.06,11.4,1.65,.12,.18,{material:Zn()});for(let r=0;r<8;r++)It(n,"(concrete)",0,-11+(r+.5)*2.6,.06,26.6,1.65,.12,.18,{material:Zn()});for(const r of[xe-2.4,xe,xe+2.4])Le(n,r,10.5,r,15.9);for(let r=11;r<15.9;r+=.7)Le(n,xe-2.4,r,xe,r+.24);Br(n,xe-1.2,13.2,0,1.3),Le(n,xe,13.2,xe+2.4,13.44);for(let r=11;r<15.6;r+=.8)Le(n,-5.6,r,-3.6,r+.3);hn(n,-jt,10.5,jt,10.5),hn(n,-11,10.5,-11,27.5),hn(n,-11,27.5,9.8,27.5);for(let r=16.1;r<22.1;r+=.8)Le(n,-5.2,r,-3.2,r+.3);Le(n,-11.25,15.9,-11.25,22.1);for(let r=10.6;r<13.9;r+=.8)Le(n,r,18,r+.3,20,he);for(let r=-9.2;r<=9.2;r+=1.5)r>xe-1.7&&r<xe+1.7||Br(n,r,Ft+.6);It(n,"metal",ut.metalDull,xe,3.07,Ft+1.5,6,.14,3,{cast:!0});for(const r of[-2.7,2.7])It(n,"metal",ut.metalDull,xe+r,1.5,Ft+2.8,.12,3,.12,{cast:!0});for(const r of[3.4,6.6]){jh(n,r,9.3,0,.9,.9);for(const[a,o,c]of[[-.78,0,Math.PI/2],[.78,0,-Math.PI/2],[0,-.78,0],[0,.78,Math.PI]])Go(n,r+a,9.3+o,0,c)}Le(n,-9.8,8.2,-9.8,10.4),Le(n,-8.6,8.2,-8.6,10.4),Le(n,-7.4,8.2,-7.4,10.4);for(const r of[-9.2,-8])It(n,"metal",ut.metalDull,r-.35,.38,10.1,.06,.76,.06,{cast:!0}),It(n,"metal",ut.metalDull,r+.35,.38,10.1,.06,.76,.06,{cast:!0}),It(n,"metal",ut.metalDull,r,.74,10.1,.76,.06,.06,{cast:!0});It(n,"metal",ut.metalDull,-6,.55,-10.1,.1,1.1,.1,{cast:!0}),It(n,"trim",Un,-6,1.6,-10.1,.9,1.4,.1,{cast:!0,rotY:-.6});const e=.209;It(n,"(concrete)",0,-1.5,.12,-10.15,2.1,.25,.6,{material:Zn(),rotY:e}),It(n,"trim",Un,-1.5,1.7,-10.15,1.96,1.66,.16,{cast:!0,rotY:e}),It(n,"trim",ut.trim,-1.5,1.7,-10.22,1.8,1.5,.06,{rotY:e});const i=(r,a,o,c,l,h,u=0)=>{It(n,r,a,-1.5+o*Math.cos(e),c,-10.26-u-o*Math.sin(e),l,h,.02,{rotY:e})};i("trim",Un,0,2.28,1.64,.22);for(let r=0;r<5;r++)for(const a of[-.42,.44])i("joinery",ut.shadowDark,a,2.02-r*.14,.68,.035);for(const r of[-.55,0,.55])i("trim",Un,r,1.18,.4,.3),i("joinery",ut.joineryLight,r,1.12,.28,.12,.01);It(n,"metal",ut.metalDull,.5,.9,-10.4,.25,1.8,.25,{cast:!0}),It(n,"joinery",ut.shadowDark,.5,1.35,-10.54,.2,.2,.04),It(n,"joinery",ut.shadowDark,.5,1.62,-10.54,.55,.35,.04),It(n,"metal",ut.metalDull,-1,2.92,-12,3,.14,3.2,{cast:!0});for(const r of[-2.3,.3])It(n,"metal",ut.metalDull,r,1.4,-10.45,.12,2.8,.12,{cast:!0});for(const r of[-17.05,-12.95])It(n,"metal",ut.metalDull,r,he+1.3,14,.09,2.6,.09,{cast:!0});It(n,"trim",Un,-15,he+2.5,14,4.3,.2,.12,{cast:!0}),It(n,"wall",hs,1.7,1,-9.2,.14,2,2,{cast:!0}),n.solid(1.7,0,-9.2,.14,2,2);for(const r of[-9.6,-8.7])It(n,"metal",ut.metalDull,3.5,.45,r,1.2,.9,.7,{cast:!0}),n.solid(3.5,0,r,1.2,.9,.7);const s={x0:-12.8,x1:-10.2,z0:-Ft,z1:-5};for(const[r,a,o,c]of[[s.x0,s.z0,s.x1,s.z0+.2],[s.x0,s.z0,s.x0+.2,s.z1],[s.x1-.2,s.z0,s.x1,s.z1]]){const l=(r+o)/2,h=(a+c)/2;It(n,"wall",hs,l,.9,h,o-r,1.8,c-a,{cast:!0}),n.solid(l,0,h,o-r,1.8,c-a)}It(n,"metal",ut.metalDull,(s.x0+s.x1)/2,1.2,s.z1,2.4,2.4,.08,{cast:!0}),It(n,"metal",ut.metalDull,(s.x0+s.x1)/2,1.94,(s.z0+s.z1)/2,s.x1-s.x0+.2,.1,s.z1-s.z0+.1,{cast:!0});for(const[r,a,o]of[[-12.1,-6.2,1.2],[-10.85,-6.2,1.2],[-12.1,-5.55,1.2],[-10.9,-5.55,.6]])It(n,"joinery",ut.joineryDark,r,.55,a,o,1.1,.55,{cast:!0}),It(n,"joinery",ut.shadowDark,r,1.13,a,o+.04,.06,.59),n.solid(r,0,a,o,1.16,.55);en(n,-13,-4.8,-11.5,-3.3);for(const[r,a,o,c]of[[-13,-4.8,-11.5,-4.68],[-13,-3.42,-11.5,-3.3],[-13,-4.8,-12.88,-3.3],[-11.62,-4.8,-11.5,-3.3]])hn(n,r,a,o,c,0,.2);for(const[r,a]of[[-12.55,-4.1],[-11.95,-4.1]])It(n,"metal",ut.metalDull,r,.42,a,.5,.84,.5,{cast:!0});if(It(n,"(concrete)",0,-10.6,.1,28.3,1.1,.2,1.1,{material:Zn()}),It(n,"trim",Un,-10.6,3,28.3,.55,6,.55,{cast:!0}),n.solid(-10.6,0,28.3,.7,6,.7),t){const r=t.clone();r.scale.set(.62,1.9,1),r.position.set(-10.6,4.3,28.62),n.add(r);const a=t.clone();a.scale.set(.62,1.9,1),a.position.set(-10.6,4.3,27.98),a.rotation.y=Math.PI,n.add(a)}}function Sx(n,t={}){const e=new U_;N_(e,0,0,dn.width,dn.depth,0,ut.tileFloor,{surface:"vinyl"});const i={height:Ln,colour:hs,surface:"wall",skirting:!1,cornice:!1,autoServices:!1,inner:-1},s=[],r=(_,p)=>{const m=p-_,M=Math.max(1,Math.round(m/1.565)),v=m/M;for(let E=0;E<M;E++)s.push({at:_+(E+.5)*v+jt,width:Math.min(1.375,v-.19),kind:"window",sill:_x,head:xx})};r(-di,xe-Ci/2-.15),r(xe+Ci/2+.15,9.6),s.push({at:xe+jt,width:Ci,kind:"door",head:Wl,door:{pair:!0,style:"glazed",auto:!0,startsShut:!0,swing:1,label:"entrance"}}),Ui(e,-jt,Ft,jt,Ft,{...i,openings:s,name:"front"}),Ui(e,jt,Ft,jt,-Ft+ln,{...i,openings:[{at:Ft-4,width:1.2,kind:"window",sill:1.8,head:2.7},{at:Ft-Kl,width:ql,kind:"window",sill:Xl,head:Yl},{at:Ft-jl,width:ql,kind:"window",sill:Xl,head:Yl}],name:"east"}),Ui(e,jt,-Ft+ln,jt-ln,-Ft,{...i,name:"splay"}),Ui(e,jt-ln,-Ft,-jt,-Ft,{...i,openings:[{at:Ft-Wa,width:vx,kind:"door",head:Wl,door:{style:"panel",pair:!1,startsShut:!1,swing:1,colour:ut.metalDull,label:"goods door"}}],name:"rear"}),Ui(e,-jt,-Ft,-jt,Ft,{...i,name:"west"});const a=1.4;G_(e,0,(a+is)/2,di*2,is-a,Va),zl(e,0,(a-5)/2,di*2,a+5,Ar),zl(e,(-di+7.9)/2,(-is-5)/2,di+7.9,is-5,Ar),It(e,"wall",hs,0,(Ar+Va+.12)/2,a,di*2,Va-Ar+.16,.12,{cast:!0}),It(e,"wall",hs,0,Ln+.1,0,dn.width,.2,dn.depth,{cast:!0});const o=[[-jt,Ft,jt,Ft],[jt,Ft,jt,-Ft+ln],[jt,-Ft+ln,jt-ln,-Ft],[jt-ln,-Ft,-jt,-Ft],[-jt,-Ft,-jt,Ft]];for(const[_,p,m,M]of o){const v=Math.hypot(m-_,M-p)+.36,E=Math.atan2(-(M-p),m-_),C=(_+m)/2,b=(p+M)/2;It(e,"wall",hs,C,(Ln+Ga-br)/2,b,v,Ga-br-Ln,.35,{rotY:E,cast:!0}),It(e,"trim",ut.trim,C,Ga-br/2,b,v+.06,br,.47,{rotY:E,cast:!0})}const c=Ft+ia/2;It(e,"trim",Un,0,3.475,c+.05,dn.width,.85,.1,{cast:!0});const l=3.2,h=xe-1.2,u=h+l;for(const[_,p]of[[(-jt+h)/2,h+jt],[(u+jt)/2,jt-u]])It(e,"metal",ut.metalDull,_,2.93,c+.6,p,.16,1.2,{cast:!0}),It(e,"trim",Un,_,2.79,c+1.18,p,.14,.06);const d=(h+u)/2;It(e,"trim",Un,d,(2.4+Vl)/2,c+.2,l,Vl-2.4,.4,{cast:!0});for(const[_,p]of[[(h+xe-Ci/2)/2,xe-Ci/2-h],[(xe+Ci/2+u)/2,u-xe-Ci/2]])It(e,"trim",Un,_,1.2,c+.2,p,2.4,.4,{cast:!0});It(e,"joinery",ut.shadowDark,d,4.3,c+.41,l,3.4,.02);for(let _=0;_<18;_++)It(e,"joinery",ut.joineryLight,h+.0875+_*.175,4.3,c+.44,.15,3.4,.04,{cast:!0});let f=null;typeof document<"u"&&document.createElement&&(f=tx(t.name||"BURGER BARN",{width:7.2,height:.62,bg:"rgba(0,0,0,0)",fg:t.signFg??"#f6efe0",font:"bold 84px Georgia, serif"}),f.position.set(4.9,3.46,c+.12),e.add(f));for(const _ of[jl,Kl]){It(e,"metal",ut.metalDull,jt+.53,he+2.66,_,.9,.12,1.6,{cast:!0});for(const p of[-.75,.75])Br(e,jt+.6,_+p,he)}It(e,"metal",ut.metalDull,6.2,2.3,-Ft-.4,.8,4.2,.6,{cast:!0}),It(e,"metal",ut.metalDull,6.2,4.55,-Ft-.4,1,.35,.8,{cast:!0});for(const _ of[-1,.5]){It(e,"metal",ut.metalDull,_,2.6,-Ft-.06,.6,.6,.06);for(let p=0;p<5;p++)It(e,"joinery",ut.shadowDark,_,2.36+p*.12,-Ft-.1,.54,.05,.04)}It(e,"metal",ut.metalDull,Wa,2.86,-Ft-1,3,.14,2,{cast:!0});for(const _ of[-1.3,1.3])It(e,"metal",ut.metalDull,Wa+_,1.43,-Ft-1.85,.12,2.86,.12,{cast:!0});Cr(e,jt,Ft,jt,-Ft+ln,Ln),Cr(e,jt,-Ft+ln,jt-ln,-Ft,Ln),Cr(e,jt-ln,-Ft,-jt,-Ft,Ln),Cr(e,-jt,-Ft,-jt,Ft,Ln),Mx(e,f);const g=gx(e,{width:dn.width,depth:dn.depth});return{group:Fh(e.group),colliders:e.colliders,doorSpecs:e.doors,interactables:e.interactables,spots:e.spots,lights:e.lights,report:g,width:dn.width,depth:dn.depth,height:Ln,door:{x:xe,z:Ft+1.6},doors:[{x:xe,z:Ft+1.6}],interiorBounds:{minX:-di,maxX:di,minZ:-is,maxZ:is,maxY:Ln}}}class yx{constructor(t){this.game=t,this.rng=t.rng.child("world"),this.scene=t.renderer.scene,this.root=new ne,this.scene.add(this.root),this.colliders=[],this.interactables=[],this.buildings=[],this.enterable=[],this.currentBuilding=null,this.spots={},this.doors=new Q_(t),this._grid=new Map,this.cellSize=5,this.weather={condition:"clear",wetness:0,temp:24,wind:.3},this._nightState=!1}generate(){this._ground(),this._shop(),this._dressing(),this._rebuildSpatialHash(),this.game.bus.emit("world:generated",{world:this})}_ground(){const t=new yt(new rn(400,400,1,1),gn(pe.grass));t.rotation.x=-Math.PI/2,t.position.y=-.06,t.receiveShadow=!0,this.root.add(t)}_shop(){var i;const t=Sx(this.rng.child("shop"));this.report=t.report,t.group.position.set(0,0,0),this.root.add(t.group);for(const s of t.interactables||[])this.interactables.push(s);this.spots=t.spots||{};for(const s of t.colliders)this.colliders.push(s);(i=t.doorSpecs)!=null&&i.length&&(t.group.updateMatrixWorld(!0),this.doors.install(t.doorSpecs,t.group));const e={x:0,z:0,rotY:0,padY:0,shopId:"fastfood",built:t,lights:t.lights,interiorBounds:t.interiorBounds};this.buildings.push(e),this.enterable.push(e)}_dressing(){const t=this.rng.child("dressing"),e=[[-16.5,25],[-16.8,8],[-16.2,-2],[16.5,12],[16.8,-4],[15.8,24],[-6,32.5],[4,32.8],[12,32]];for(const[s,r]of e){const a=ex(t,t.range(.9,1.3));a.position.set(s,0,r),this.root.add(a)}const i=[{x:-9.7,z:24.8,rotY:0},{x:-2,z:24.8,rotY:0},{x:5.8,z:24.8,rotY:0},{x:5.3,z:13.2,rotY:Math.PI}];for(const s of i){const r=nx(t);r.position.set(s.x,0,s.z),r.rotation.y=s.rotY,this.root.add(r),this.colliders.push({min:new I(s.x-1,0,s.z-2.2),max:new I(s.x+1,1.5,s.z+2.2),walkable:!1})}}_rebuildSpatialHash(){this._grid.clear(),this.colliders.forEach((t,e)=>{const i=Math.floor(t.min.x/this.cellSize),s=Math.floor(t.max.x/this.cellSize),r=Math.floor(t.min.z/this.cellSize),a=Math.floor(t.max.z/this.cellSize);for(let o=i;o<=s;o++)for(let c=r;c<=a;c++){const l=o+","+c;this._grid.has(l)||this._grid.set(l,[]),this._grid.get(l).push(e)}})}query(t,e){const i=[],s=Math.floor((t.x-e)/this.cellSize),r=Math.floor((t.x+e)/this.cellSize),a=Math.floor((t.z-e)/this.cellSize),o=Math.floor((t.z+e)/this.cellSize),c=new Set;for(let l=s;l<=r;l++)for(let h=a;h<=o;h++){const u=this._grid.get(l+","+h);if(u)for(const d of u)c.has(d)||(c.add(d),i.push(this.colliders[d]))}return this.doors.collect(t,e,i),i}sightBlocked(t,e,{eye:i=1.15,backOff:s=.45}={}){const r=t.x,a=t.z,o=(t.y??0)+i;let c=e.x-r,l=e.z-a;const h=Math.hypot(c,l);if(h<.05)return!1;const u=Math.max(0,h-s);if(u<.05)return!1;c/=h,l/=h;const d=r+c*u/2,f=a+l*u/2;for(const g of this.query({x:d,z:f},u/2+1)){if(g.walkable||o<g.min.y||o>g.max.y||r>=g.min.x&&r<=g.max.x&&a>=g.min.z&&a<=g.max.z)continue;let _=0,p=u,m=!0;for(const[M,v,E,C]of[[r,c,g.min.x,g.max.x],[a,l,g.min.z,g.max.z]]){if(Math.abs(v)<1e-9){if(M<E||M>C){m=!1;break}continue}let b=(E-M)/v,T=(C-M)/v;if(b>T){const P=b;b=T,T=P}if(b>_&&(_=b),T<p&&(p=T),_>p){m=!1;break}}if(m)return!0}return!1}groundHeight(){return 0}addInteractable(t){return this.interactables.push(t),t}activeInteractables(){return this.interactables}get isIndoors(){return this.currentBuilding!==null}_updateOccupancy(){var i;const t=(i=this.game.player)==null?void 0:i.position;if(!t)return;let e=null;for(const s of this.enterable){const r=s.interiorBounds;if(r&&t.x>r.minX&&t.x<r.maxX&&t.z>r.minZ&&t.z<r.maxZ&&t.y>s.padY-1.5&&t.y<s.padY+r.maxY){e=s;break}}e!==this.currentBuilding&&(this.currentBuilding=e,this.game.bus.emit("world:occupancy",{building:e}))}update(t){var s;this._updateOccupancy(),this.doors.update(t);const e=this.game.clock;this.game.renderer.updateSky(e.dayFraction,(s=this.game.player)==null?void 0:s.position,e.dayOfYear,t);const i=this.game.renderer.nightFactor>.25;i!==this._nightState&&(this._nightState=i,dc().emissiveIntensity=i?.45:0,this.game.bus.emit("world:daynight",{night:i}))}}const Ex=.72;class wx{constructor(t){this.game=t,this.target=null,this._label=null,this._fwd=new I(0,0,-1)}update(){var h,u,d,f,g;const t=this.game;if(t.mode!==Ke.PLAY){this._setTarget(null);return}const e=t.player.position,i=t.camera.active,s=i.position;i.getWorldDirection(this._fwd);const r=((h=t.shift)==null?void 0:h.station)||null;let a=null,o=1/0;const c=(_,p)=>{var y,U;const m=_.pos.x-e.x,M=_.pos.z-e.z,v=Math.hypot(m,M);if(v>=(_.radius||1.8))return;const E=_.pos.x-s.x,C=_.pos.y-s.y,b=_.pos.z-s.z,T=Math.hypot(E,C,b)||1,P=(E*this._fwd.x+C*this._fwd.y+b*this._fwd.z)/T,D=Math.acos(Math.min(1,Math.max(-1,P)));if(D>Ex)return;const x=D+v*.1;x>=o||(U=(y=t.world).sightBlocked)!=null&&U.call(y,e,_.pos,p)||(o=x,a=_)};for(const _ of t.world.activeInteractables()){const p=(u=_.data)==null?void 0:u.zone;p&&(p.minZ!==void 0&&e.z<p.minZ||p.maxZ!==void 0&&e.z>p.maxZ||p.minX!==void 0&&e.x<p.minX||p.maxX!==void 0&&e.x>p.maxX)||_.action==="station"&&r||(d=_.data)!=null&&d.podOnly&&r!=="pod"||_.action==="landing"&&!((f=t.shift)!=null&&f.hasReady())||c(_,void 0)}const l=(g=t.world.doors)==null?void 0:g.nearest(e,2);l&&!r&&c(l,{backOff:.7}),this._setTarget(a),t.input.wasPressed("interact")&&this.activate()}_setTarget(t){const e=t?t.label:null;this.target===t&&this._label===e||(this.target=t,this._label=e,this.game.bus.emit("interaction:target",{label:e,interactable:t}))}activate(){this.target&&this.run(this.target.action,this.target.data||{})}run(t,e){const i=this.game;switch(t){case"door":{e.door.toggle()||i.ui.toast("You are standing in the doorway.");return}case"station":return void i.shift.lockIn(e.station);case"pod":return void i.shift.podPress(e);case"landing":return void i.shift.handOver();case"note":return void i.ui.toast(e.text);default:console.warn("[interaction] no handler for action:",t,e),i.ui.toast("Nothing happens.")}}}const Nn={ORDER_OFFERED:"order:offered",ORDER_STARTED:"order:started",ORDER_STEP:"order:step",ORDER_BUILT:"order:built",ORDER_WRAPPED:"order:wrapped",ORDER_READY:"order:ready",ORDER_SERVED:"order:served",POD_REFUSED:"pod:refused"},kr={bun:{label:"toasted bun",station:"toaster",colour:13210159},ketchup:{label:"ketchup",station:"guns",colour:10236968},mustard:{label:"mustard",station:"guns",colour:13210159},mayo:{label:"mayo",station:"guns",colour:15261904},bbq:{label:"BBQ sauce",station:"guns",colour:8030778},pickle:{label:"pickles",station:"bins",colour:8030778},onion:{label:"onion",station:"bins",colour:15261904},lettuce:{label:"lettuce",station:"bins",colour:5208634},tomato:{label:"tomato",station:"bins",colour:10236968},cheese:{label:"cheese",station:"bins",colour:13210159},patty:{label:"beef patty",station:"uhc",colour:7031349},fillet:{label:"chicken fillet",station:"uhc",colour:13216097}},Kr={classic:{label:"Barn Classic",value:7.5,sequence:["bun","ketchup","mustard","pickle","onion","patty"]},cheese:{label:"Cheese Barn",value:8,sequence:["bun","ketchup","pickle","cheese","patty"]},smokehouse:{label:"Smokehouse",value:9,sequence:["bun","bbq","onion","cheese","patty"]},garden_chook:{label:"Garden Chook",value:8.5,sequence:["bun","mayo","lettuce","tomato","fillet"]}},Jl=Object.keys(Kr),rs={intervalMin:7,intervalJitter:.35,maxLive:4,secondItemChance:.25,sourceMix:{drivethru:.45}};class Tx{constructor({emit:t,rng:e,now:i=0}){this.emit=t,this.rng=e,this.now=i,this.orders=new Map,this._nextId=11,this._nextOfferAt=null,this.stats={offered:0,served:0,bySource:{}}}live(){return[...this.orders.values()].filter(t=>t.state!=="served").sort((t,e)=>t.id-e.id)}active(){return this.live().find(t=>t.state==="active"||t.state==="building"||t.state==="built"||t.state==="wrapped")||null}ready(){return this.live().filter(t=>t.state==="ready")}get(t){return this.orders.get(t)||null}offer(t){const e=this.rng.chance(rs.sourceMix.drivethru)?"drivethru":"kiosk",i=[this.rng.pick(Jl)];this.rng.chance(rs.secondItemChance)&&i.push(this.rng.pick(Jl));const s=[];for(const a of i)s.push(...Kr[a].sequence);const r={id:this._nextId++,source:e,items:i,value:i.reduce((a,o)=>a+Kr[o].value,0),sequence:s,step:0,state:"active",offeredAt:t,builtAt:null,wrappedAt:null,readyAt:null,servedAt:null};return this.orders.set(r.id,r),this.stats.offered+=1,this.stats.bySource[e]=(this.stats.bySource[e]||0)+1,this.emit(Nn.ORDER_OFFERED,{id:r.id,source:e,items:[...i],sequence:[...s]}),r}serve(t,e){return!t||t.state!=="ready"?!1:(t.state="served",t.servedAt=e,this.stats.served+=1,this.emit(Nn.ORDER_SERVED,{id:t.id,ageMin:+(e-t.offeredAt).toFixed(2)}),!0)}_interval(){const t=1+this.rng.range(-.35,rs.intervalJitter);return rs.intervalMin*t}tick(t){if(this.now=t,this.live().length>=rs.maxLive){this._nextOfferAt=null;return}this._nextOfferAt===null&&(this._nextOfferAt=t+this._interval());let e=0;for(;t>=this._nextOfferAt&&e++<16;){if(this.offer(this._nextOfferAt),this.live().length>=rs.maxLive){this._nextOfferAt=null;break}this._nextOfferAt+=this._interval()}}serialize(){return{nextId:this._nextId,nextOfferAt:this._nextOfferAt,stats:{...this.stats,bySource:{...this.stats.bySource}},orders:[...this.orders.values()]}}load(t){var e;t&&(this._nextId=t.nextId,this._nextOfferAt=t.nextOfferAt??null,this.stats={...t.stats,bySource:{...((e=t.stats)==null?void 0:e.bySource)||{}}},this.orders=new Map(t.orders.map(i=>[i.id,{...i}])))}}const Ie={NO_ORDER:"no_order",NOT_NEXT:"not_next",NOT_AT_UHC:"not_at_uhc",ALREADY_BUILT:"already_built",NOT_BUILT:"not_built",NOT_WRAPPED:"not_wrapped"};class bx{constructor({queue:t,emit:e}){this.queue=t,this.emit=e}nextToken(){const t=this.queue.active();return!t||t.step>=t.sequence.length?null:t.sequence[t.step]}_refuse(t,e=null){return this.emit(Nn.POD_REFUSED,{reason:t,token:e,next:this.nextToken()}),{ok:!1,reason:t}}addToken(t,e){const i=this.queue.active();if(!i)return this._refuse(Ie.NO_ORDER,t);if(i.state==="built"||i.state==="wrapped")return this._refuse(Ie.ALREADY_BUILT,t);const s=i.sequence[i.step];return t!==s?this._refuse(Ie.NOT_NEXT,t):(i.step+=1,i.state==="active"&&(i.state="building",this.emit(Nn.ORDER_STARTED,{id:i.id})),this.emit(Nn.ORDER_STEP,{id:i.id,added:t,next:i.sequence[i.step]??null,step:i.step}),i.step>=i.sequence.length&&(i.state="built",i.builtAt=e,this.emit(Nn.ORDER_BUILT,{id:i.id})),{ok:!0,added:t})}pullFromUHC(t){var i;const e=this.nextToken();if(e===null){const s=this.queue.active();return this._refuse(s?Ie.ALREADY_BUILT:Ie.NO_ORDER)}return((i=kr[e])==null?void 0:i.station)!=="uhc"?this._refuse(Ie.NOT_AT_UHC):this.addToken(e,t)}wrap(t){const e=this.queue.active();return e?e.state!=="built"?this._refuse(e.state==="wrapped"?Ie.ALREADY_BUILT:Ie.NOT_BUILT):(e.state="wrapped",e.wrappedAt=t,this.emit(Nn.ORDER_WRAPPED,{id:e.id}),{ok:!0}):this._refuse(Ie.NO_ORDER)}send(t){const e=this.queue.active();return e?e.state!=="wrapped"?this._refuse(Ie.NOT_WRAPPED):(e.state="ready",e.readyAt=t,this.emit(Nn.ORDER_READY,{id:e.id}),{ok:!0}):this._refuse(Ie.NO_ORDER)}}class Ax{constructor({rng:t,bus:e=null}){this.bus=e,this.minute=0,this.log=[],this.logSeq=0;const i=(s,r)=>this._emit(s,r);this.orders=new Tx({emit:i,rng:t.child("orders")}),this.pod=new bx({queue:this.orders,emit:i})}_emit(t,e={}){this.logSeq+=1,this.log.push({type:t,payload:e,minute:+this.minute.toFixed(3),seq:this.logSeq}),this.log.length>600&&this.log.shift(),this.bus&&this.bus.emit(t,e)}tick(t){t<=0||(this.minute+=t,this.orders.tick(this.minute))}addToken(t){return this.pod.addToken(t,this.minute)}pullFromUHC(){return this.pod.pullFromUHC(this.minute)}wrap(){return this.pod.wrap(this.minute)}send(){return this.pod.send(this.minute)}handOver(){const t=this.orders.ready()[0]||null;return t?(this.orders.serve(t,this.minute),{ok:!0,id:t.id}):{ok:!1,reason:"nothing_ready"}}snapshot(){var t;return{minute:this.minute,board:this.orders.live(),activeId:((t=this.orders.active())==null?void 0:t.id)??null,nextToken:this.pod.nextToken(),readyCount:this.orders.ready().length,stats:{...this.orders.stats}}}serialize(){return{minute:this.minute,orders:this.orders.serialize()}}load(t){t&&(this.minute=t.minute||0,this.orders.load(t.orders))}}const as=560,Ql=340,qa=68,Xa=4,th="#f1ece1",Pr="#9aa3ad",Lr="#c9a961",eh="#0d1116",Rx="#141a21",Cx="#1d2733",nh="#7fb069",Px="#cf5b45";class Lx{constructor(t,e,i,s){this.scene=t,this.canvas=typeof document<"u"?document.createElement("canvas"):null,this.canvas&&(this.canvas.width=as,this.canvas.height=Ql,this.ctx=this.canvas.getContext("2d"),this.tex=new zi(this.canvas),this.tex.colorSpace=ze,this.tex.anisotropy=4,this.mesh=new yt(new rn(s.w,s.h),new Ts({map:this.tex})),this.mesh.position.set(e.x,e.y,e.z),this.mesh.rotation.x=i,t.add(this.mesh),this._sig=null,this.paint([],null,null,{},{},0))}paint(t,e,i,s,r,a){if(!this.ctx)return;const o=t.slice(0,Xa),c=`${e}|${i}|`+o.map(h=>`${h.id}:${h.state}:${h.step}:${h.source}:${Math.floor(a-h.offeredAt)}`).join(",");if(c===this._sig)return;this._sig=c;const l=this.ctx;if(l.fillStyle=eh,l.fillRect(0,0,as,Ql),l.fillStyle=Lr,l.font="bold 28px Segoe UI, system-ui, sans-serif",l.fillText("ORDERS",16,34),t.length>Xa&&(l.fillStyle=Pr,l.font="22px Segoe UI, system-ui, sans-serif",l.textAlign="right",l.fillText(`+${t.length-Xa} more`,as-16,34),l.textAlign="left"),!o.length){l.fillStyle=Pr,l.font="28px Segoe UI, system-ui, sans-serif",l.fillText("Nothing on.",16,100),this.tex.needsUpdate=!0;return}o.forEach((h,u)=>{var M;const d=48+u*qa,f=h.id===e;l.fillStyle=f?Cx:Rx,l.fillRect(10,d,as-20,qa-8),f&&(l.fillStyle=Lr,l.fillRect(10,d,6,qa-8)),l.fillStyle=f?th:Pr,l.font="bold 26px Segoe UI, system-ui, sans-serif",l.fillText(`#${h.id}`,24,d+28);let g=86;h.source==="drivethru"&&(l.fillStyle=Px,l.fillRect(g,d+10,44,22),l.fillStyle=eh,l.font="bold 17px Segoe UI, system-ui, sans-serif",l.fillText("DT",g+11,d+27),g+=54),l.fillStyle=f?th:Pr,l.font="22px Segoe UI, system-ui, sans-serif";const _=(h.items||[]).map(v=>{var E;return((E=r[v])==null?void 0:E.label)||v}).join(", ");if(l.fillText(_.slice(0,h.source==="drivethru"?26:30),g,d+28),l.font="20px Segoe UI, system-ui, sans-serif",f){l.fillStyle=nh;const v=h.state==="built"?"wrap it":h.state==="wrapped"?"send it down":i?`next: ${((M=s[i])==null?void 0:M.label)||i}`:"…";l.fillText(v,86,d+52)}else{l.fillStyle=h.state==="ready"?Lr:"#5d6570";const v=Math.floor(a-h.offeredAt);l.fillText(h.state==="ready"?"at the landing":v<1?"just in":`waiting ${v}m`,86,d+52)}const p=(h.sequence||[]).length||1,m=h.state==="ready"||h.state==="wrapped"||h.state==="built"?1:Math.min(1,(h.step||0)/p);l.fillStyle="#2a333d",l.fillRect(as-104,d+20,84,10),l.fillStyle=h.state==="ready"?Lr:nh,l.fillRect(as-104,d+20,84*m,10)}),this.tex.needsUpdate=!0}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.material.dispose(),this.mesh=null)}}const Dx=2.6,Ix=4;class Ux{constructor(t){var i;this.game=t,this.rules=new Ax({rng:t.rng.child("shift"),bus:t.bus}),this.station=null;const e=t.renderer.scene;this.screen=new Lx(e,yr,yr.tilt,{w:yr.w,h:yr.h}),this._buildLandingPool(e),this._wireToasts();for(const s of t.world.activeInteractables()){const r=(i=s.data)==null?void 0:i.token;r&&!kr[r]&&console.error("ShiftSystem: interactable",s.id,"dispenses a token the menu does not know:",r)}}hasReady(){return this.rules.orders.ready().length>0}lockIn(t){if(t!=="pod"){this.game.ui.toast("Nothing to work there yet.");return}const e=this.game.player;e.position.z<En.z-.75||(this.station="pod",e.setState("busy"),e.position.x=Tn.clamp(e.position.x,En.x0,En.x1),e.position.z=En.z,e.position.y=0,e.velocity.set(0,0,0),e.facing=En.facing,this.game.camera.yaw=En.facing,this.game.ui.toast("On the pod. A/D to slide along, S to step off.",5200),this.game.bus.emit("shift:station",{station:"pod"}))}release(){this.station&&(this.station=null,this.game.player.setState("normal"),this.game.bus.emit("shift:station",{station:null}))}podPress(t){this.station==="pod"&&(t.op==="uhc"?this.rules.pullFromUHC():t.op==="wrap"?this.rules.wrap():t.op==="send"?this.rules.send():this.rules.addToken(t.token))}handOver(){this.rules.handOver().ok||this.game.ui.toast("Nothing waiting on the landing.")}update(t){var s,r;const e=this.game;e.mode===Ke.PLAY&&(this.rules.tick(t*e.clock.scale),this.station==="pod"&&this._slide(t));const i=this.rules.orders.live();(r=this.screen)==null||r.paint(i,((s=this.rules.orders.active())==null?void 0:s.id)??null,this.rules.pod.nextToken(),kr,Kr,this.rules.minute),this._syncLanding()}_slide(t){const e=this.game.player;e.position.x=Tn.clamp(e.position.x,En.x0,En.x1),e.position.z=En.z,e.position.y=0;const s=this.game.input.axis();if(s.y<-.5){this.release();return}if(s.x!==0){const r=this.game.camera.basis().right,a=Math.sign(r.x)||1;e.position.x=Tn.clamp(e.position.x+s.x*a*Dx*t,En.x0,En.x1)}}_buildLandingPool(t){this._landing=[];const e=new Fo({color:15262418}),i=new Fo({color:11026479}),s=new ee(.115,.055,.115),r=new ee(.118,.016,.05);for(let a=0;a<Ix;a++){const o=new ne,c=new yt(s,e);c.castShadow=!0;const l=new yt(r,i);l.position.y=.02,o.add(c,l);const h=Ha.x0+.22+a*.42;o.position.set(h,Ha.y+.03,Ha.z),o.rotation.y=(a%2?-1:1)*.22,o.visible=!1,t.add(o),this._landing.push(o)}}_syncLanding(){const t=this.rules.orders.ready();for(let e=0;e<this._landing.length;e++)this._landing[e].visible=e<t.length}_wireToasts(){const t=this.game.bus,e={toast:s=>{var r;return(r=this.game.ui)==null?void 0:r.toast(s)}},i=s=>{const r=kr[s];return r?r.station==="toaster"||r.station==="uhc"?"a "+r.label:r.label:s};t.on(Nn.POD_REFUSED,({reason:s,next:r})=>{switch(s){case Ie.NO_ORDER:return e.toast("Nothing on the board.");case Ie.NOT_NEXT:case Ie.NOT_AT_UHC:return e.toast(`It wants ${i(r)} next.`);case Ie.ALREADY_BUILT:return e.toast("It has everything it needs.");case Ie.NOT_BUILT:return e.toast("It is not built yet.");case Ie.NOT_WRAPPED:return e.toast("Wrap it before it goes down.");default:return e.toast("Not now.")}}),t.on(Nn.ORDER_SERVED,({id:s})=>e.toast(`#${s} away.`))}}const Ya={};function Me(n,t){return Ya[n]||(Ya[n]=t())}const Se=(n,t={})=>new Fo({color:n,...t});function Nx(n){const t=new ne,e=new yt(Me("cup",()=>new Be(.043,.032,.135,10)),Se(n));e.castShadow=!0;const i=new yt(Me("cupLid",()=>new Be(.047,.047,.016,10)),Se(14173231));i.position.y=.075;const s=new yt(Me("straw",()=>new Be(.005,.005,.1,5)),Se(15790836));return s.position.set(.012,.13,0),s.rotation.z=.18,t.add(e,i,s),t}function Ox(n){const t=new yt(Me("bun",()=>new vi(.056,10,6,0,Math.PI*2,0,Math.PI/2)),Se(n));return t.scale.y=.62,t.castShadow=!0,t}function Fx(n){const t=new yt(Me("disc",()=>new Be(.052,.052,.018,12)),Se(n));return t.castShadow=!0,t}function zx(n){const t=new yt(Me("flat",()=>new ee(.082,.006,.082)),Se(n));return t.castShadow=!0,t}function Bx(n){const t=new yt(Me("blob",()=>new na(.036,0)),Se(n));return t.castShadow=!0,t}function kx(n){const t=new ne,e=new yt(Me("bottle",()=>new Be(.024,.028,.105,8)),Se(n));e.castShadow=!0;const i=new yt(Me("bottleCap",()=>new ea(.017,.036,8)),Se(2896184));return i.position.y=.068,t.add(e,i),t}function Hx(n){const t=new ne,e=new yt(Me("carton",()=>new Be(.04,.026,.09,4)),Se(14173231));e.rotation.y=Math.PI/4,e.castShadow=!0;const i=new yt(Me("chipTop",()=>new Be(.03,.03,.05,6)),Se(n));return i.position.y=.055,t.add(e,i),t}function Gx(n){const t=new ne,e=new yt(Me("bag",()=>new ee(.1,.135,.062)),Se(n));e.castShadow=!0;const i=new yt(Me("bagFold",()=>new ee(.104,.022,.03)),Se(n));return i.position.y=.076,t.add(e,i),t}function Vx(n){const t=new ne,e=new yt(Me("box",()=>new ee(.125,.075,.105)),Se(n));e.castShadow=!0;const i=new yt(Me("boxTape",()=>new ee(.128,.004,.022)),Se(15262418));return i.position.y=.039,t.add(e,i),t}function Wx(n){const t=new ne,e=new yt(Me("shaft",()=>new Be(.016,.016,1.15,6)),Se(n));e.castShadow=!0;const i=new yt(Me("mopHead",()=>new ee(.115,.1,.055)),Se(14341056));return i.position.y=-.6,t.add(e,i),t}function qx(n){const t=new ne,e=new yt(Me("sprayBody",()=>new ee(.055,.115,.045)),Se(n));e.castShadow=!0;const i=new yt(Me("sprayNeck",()=>new ee(.028,.05,.028)),Se(2896184));i.position.y=.082;const s=new yt(Me("sprayTrigger",()=>new ee(.05,.022,.022)),Se(2896184));s.position.set(.032,.068,0);const r=new yt(Me("cloth",()=>new ee(.075,.018,.06)),Se(7317704));return r.position.y=-.075,t.add(e,i,s,r),t}const Xx={cup:Nx,bun:Ox,disc:Fx,flat:zx,blob:Bx,bottle:kx,carton:Hx,bag:Gx,box:Vx,mop:Wx,spray:qx};function Yx(n){const t=new yt(Me("fallback",()=>new ee(.075,.055,.075)),Se(n));return t.castShadow=!0,t}function jx(n,t=13421772){return(Xx[n]||Yx)(t)}function Kx(n){return n==="mop"}const nn=(n,t,e,i)=>{const s=new yt(new ee(n,t,e),gn(i));return s.castShadow=!0,s.receiveShadow=!0,s};class $x{constructor(t={}){const{skin:e=pe.skinTones[0],hair:i=pe.hairTones[0],height:s=1,build:r=1,hairStyle:a="short"}=t;this.group=new ne,this.scale=s,this.opts={skin:e,hair:i,height:s,build:r,hairStyle:a};const o=s,c=.44*r,l=.24*r;this.hips=new ne,this.hips.position.y=.84*o,this.group.add(this.hips),this.torso=nn(c,.58*o,l,14209734),this.torso.position.y=.29*o,this.hips.add(this.torso),this.neck=nn(.14*o,.08*o,.14*o,e),this.neck.position.y=.62*o,this.hips.add(this.neck),this.head=new ne,this.head.position.y=.66*o,this.hips.add(this.head);const h=nn(.26*o,.3*o,.25*o,e);h.position.y=.15*o,this.head.add(h),this.skull=h,this.hair=new ne;const u=a==="long"?.2:.1,d=nn(.28*o,u*o,.27*o,i);if(d.position.y=(.3-u/2+.005)*o,this.hair.add(d),a==="long"){const f=nn(.26*o,.26*o,.1*o,i);f.position.set(0,.12*o,-.14*o),this.hair.add(f)}if(a==="bun"){const f=new yt(new vi(.08*o,8,6),gn(i));f.position.set(0,.3*o,-.14*o),f.castShadow=!0,this.hair.add(f)}this.head.add(this.hair);for(const f of[-.06,.06]){const g=nn(.045*o,.045*o,.02*o,1973016);g.position.set(f*o,.17*o,.13*o),this.head.add(g)}this.arms={};for(const f of["left","right"]){const g=new ne;g.position.set((f==="left"?-1:1)*(c/2+.055*o),.54*o,0);const _=nn(.11*o,.5*o,.12*o,14209734);_.position.y=-.25*o,g.add(_);const p=nn(.1*o,.1*o,.11*o,e);p.position.y=-.54*o,g.add(p);const m=new ne;m.position.y=-.6*o,g.add(m),this.hips.add(g),this.arms[f]={pivot:g,upper:_,hand:p,grip:m}}this.legs={};for(const f of["left","right"]){const g=new ne;g.position.set((f==="left"?-1:1)*.11*o,0,0);const _=nn(.15*o,.78*o,.16*o,3884626);_.position.y=-.39*o,g.add(_);const p=nn(.17*o,.1*o,.24*o,2764083);p.position.set(0,-.82*o,.03*o),g.add(p),this.hips.add(g),this.legs[f]={pivot:g,leg:_,shoe:p}}this.bag=null,this.hat=null,this.phase=0,this.leaning=0,this.firstPerson=!1,this._held=[],this._heldSig=""}applyOutfit(t={}){var a,o,c;const e=(l,h)=>{l.material=gn(h)},i=((a=t.top)==null?void 0:a.colour)??14209734;e(this.torso,i),e(this.arms.left.upper,i),e(this.arms.right.upper,i);const s=((o=t.bottom)==null?void 0:o.colour)??3884626;e(this.legs.left.leg,s),e(this.legs.right.leg,s);const r=((c=t.shoes)==null?void 0:c.colour)??2764083;if(e(this.legs.left.shoe,r),e(this.legs.right.shoe,r),this.hat&&(this.head.remove(this.hat),this.hat=null),t.head){const l=this.scale;if(this.hat=nn(.3*l,.08*l,.3*l,t.head.colour),this.hat.position.y=.33*l,t.head.id==="cap"){const h=nn(.28*l,.03*l,.14*l,t.head.colour);h.position.set(0,-.03*l,.2*l),this.hat.add(h)}this.head.add(this.hat)}if(this.bag&&(this.hips.remove(this.bag),this.bag=null),t.bag){const l=this.scale;this.bag=nn(.32*l,.4*l,.16*l,t.bag.colour),this.bag.position.set(0,.3*l,-.2*l),this.hips.add(this.bag)}}setFirstPerson(t){this.firstPerson=t,this.head.visible=!t,this.neck.visible=!t,this.torso.visible=!t,this.arms.left.pivot.visible=!t,this.arms.right.pivot.visible=!t,this.legs.left.pivot.visible=!t,this.legs.right.pivot.visible=!t,this.bag&&(this.bag.visible=!t),this._applyHeldVisibility()}setHeld(t=[]){var r;const e=Array.isArray(t)?t.slice(0,4):[],i=e.map(a=>`${a.id}:${a.colour}:${a.shape||""}`).join("|");if(i===this._heldSig)return;this._heldSig=i;for(const a of this._held)(r=a.parent)==null||r.remove(a);this._held=[];const s=this.scale;e.forEach((a,o)=>{const c=o===1?"left":"right",l=this.arms[c].grip,h=Kx(a.shape)||!!a.big,u=jx(a.shape,a.colour??13421772);u.scale.setScalar(s),u.position.set(0,h?-.16*s:-.02*s-(o>>1)*.11*s,h?.05*s:.075*s),h&&(u.rotation.x=.24),l.add(u),this._held.push(u)}),this._applyHeldVisibility()}_applyHeldVisibility(){for(const t of["left","right"]){const e=this.arms[t].grip;e.visible=!0,this.firstPerson?(e.parent!==this.hips&&this.hips.add(e),e.position.set((t==="left"?-1:1)*.22*this.scale,.34*this.scale,.34*this.scale)):e.parent!==this.arms[t].pivot&&(this.arms[t].pivot.add(e),e.position.set(0,-.6*this.scale,0))}}update(t,e=0,i={}){const s=e>.2;if(this.phase+=t*(s?4.2+e*1.1:2.2),i.sitting){this.legs.left.pivot.rotation.x=-1.4,this.legs.right.pivot.rotation.x=-1.4,this.arms.left.pivot.rotation.x=-.5,this.arms.right.pivot.rotation.x=-.5,this.hips.position.y=.5*this.scale;return}if(i.sleeping){this.group.rotation.z=Math.PI/2*.98,this.hips.position.y=.3*this.scale;return}this.group.rotation.z=0,this.hips.position.y=.84*this.scale+(s?Math.abs(Math.sin(this.phase))*.02:0);const r=s?Math.sin(this.phase)*Math.min(.85,.28+e*.14):Math.sin(this.phase)*.03;this.legs.left.pivot.rotation.x=r,this.legs.right.pivot.rotation.x=-r,this.arms.left.pivot.rotation.x=-r*.75,this.arms.right.pivot.rotation.x=r*.75,this.arms.left.pivot.rotation.z=.06,this.arms.right.pivot.rotation.z=-.06;const a=i.tired?.16:0;this.torso.rotation.x=a,this.head.rotation.x=a*.6}fidget(t){this.arms.left.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.arms.right.pivot.rotation.x+=(Math.random()-.5)*t*.3,this.head.rotation.y=(Math.random()-.5)*t*.4}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}}const sn=.34,ih=1.75,Zx=1.62,Jx=22,ja=.42,Qx={top:{colour:3817286},bottom:{colour:2303531},shoes:{colour:2764083},head:{id:"cap",colour:11026479}};class tv{constructor(t){var i,s,r;this.game=t,this.position=new I(0,0,0),this.velocity=new I,this.facing=0,this.onGround=!0,this.state="normal",this.eyeHeight=Zx,this.horizontalSpeed=0,this.avatar=new $x({skin:(i=pe.skinTones)==null?void 0:i[1],hair:(s=pe.hairTones)==null?void 0:s[1],hairStyle:"short",height:1,build:1}),this.avatar.applyOutfit(Qx),t.renderer.scene.add(this.avatar.group);const e=(r=t.world.spots)==null?void 0:r.spawn;this.teleport(e?e.clone():new I(0,0,14)),this.walkSpeed=4.6,this.runSpeed=9}teleport(t){this.position.copy(t),this.velocity.set(0,0,0),this.avatar.group.position.copy(t)}get isBusy(){return this.state!=="normal"}update(t){this.state==="normal"&&this.game.mode===Ke.PLAY?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this.state==="normal"&&this._applyGravity(t)),this.avatar.group.position.copy(this.position),this.avatar.group.rotation.y=this.facing,this.avatar.update(t,this.horizontalSpeed,{sitting:!1,sleeping:!1,tired:!1})}_move(t){const e=this.game.input,i=e.axis(),{forward:s,right:r}=this.game.camera.basis(),a=e.isDown("sprint"),o=a?this.runSpeed:this.walkSpeed,c=new I().addScaledVector(s,i.y).addScaledVector(r,i.x);c.lengthSq()>0?(c.normalize(),this.facing=Math.atan2(c.x,c.z),this.game.camera.fovBoost=a?5:0):this.game.camera.fovBoost=0;const l=c.multiplyScalar(o),h=this.onGround?14:3;this.velocity.x+=(l.x-this.velocity.x)*Math.min(1,h*t),this.velocity.z+=(l.z-this.velocity.z)*Math.min(1,h*t),e.wasPressed("jump")&&this.onGround&&(this.velocity.y=6.2,this.onGround=!1),this._applyGravity(t),this._collide(t);const u=this._floorUnder();this.position.y<u&&(this.position.y=u,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_floorUnder(){const t=this.game.world,{x:e,z:i,y:s}=this.position;let r=t.groundHeight(e,i);for(const a of t.query(this.position,sn+.5))a.walkable&&(e<a.min.x-sn||e>a.max.x+sn||i<a.min.z-sn||i>a.max.z+sn||a.max.y<=s+ja&&a.max.y>r&&(r=a.max.y));return r}_insideSolid(){const t=this.game.world,e=sn-.06;for(const i of t.query(this.position,sn+.3)){if(this.position.y+ih<i.min.y||this.position.y>i.max.y||i.max.y<=this.position.y+ja)continue;const s=Math.max(i.min.x,Math.min(this.position.x,i.max.x)),r=Math.max(i.min.z,Math.min(this.position.z,i.max.z)),a=this.position.x-s,o=this.position.z-r;if(a*a+o*o<e*e)return!0}return!1}_applyGravity(t){this.velocity.y-=Jx*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder();this.position.y<=e&&(this.position.y=e,this.velocity.y=0,this.onGround=!0)}_collide(t){const e=this.game.world;this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let s=0;s<4;s++){let r=!1;for(const a of e.query(this.position,sn+.6)){if(this.position.y+ih<a.min.y||this.position.y>a.max.y||a.max.y<=this.position.y+ja)continue;const o=Math.max(a.min.x,Math.min(this.position.x,a.max.x)),c=Math.max(a.min.z,Math.min(this.position.z,a.max.z));let l=this.position.x-o,h=this.position.z-c;const u=l*l+h*h;if(u>=sn*sn)continue;if(u>1e-8){const f=Math.sqrt(u),g=sn-f;l/=f,h/=f,this.position.x+=l*g,this.position.z+=h*g}else{const f=[[this.position.x-a.min.x,-1,0],[a.max.x-this.position.x,1,0],[this.position.z-a.min.z,0,-1],[a.max.z-this.position.z,0,1]].sort((g,_)=>g[0]-_[0])[0];l=f[1],h=f[2],this.position.x+=l*(f[0]+sn),this.position.z+=h*(f[0]+sn)}const d=this.velocity.x*l+this.velocity.z*h;d<0&&(this.velocity.x-=l*d,this.velocity.z-=h*d),r=!0}if(!r)break}this._insideSolid()?(this._lastSafe&&this.position.copy(this._lastSafe),this.velocity.x=0,this.velocity.z=0):(this._lastSafe||(this._lastSafe=new I)).copy(this.position);const i=180;this.position.x=Tn.clamp(this.position.x,-i,i),this.position.z=Tn.clamp(this.position.z,-i,i)}setState(t){this.state=t,this.game.bus.emit("player:state",{state:t})}serialize(){return{position:this.position.toArray(),facing:this.facing}}load(t){t&&(this.teleport(new I().fromArray(t.position)),this.position.y=Math.max(this.position.y,this._floorUnder()),this.avatar.group.position.copy(this.position),this.facing=t.facing||0)}}class ev{constructor(t){this.game=t;const e=document.getElementById("ui");e.innerHTML=`
      <div id="crosshair"></div>
      <div id="prompt"><span class="key">E</span><span id="prompt-label"></span></div>
      <div id="toast"></div>
      <div id="pause">
        <h1>BURGER BARN</h1>
        <p>Click to walk in &middot; WASD to move &middot; E to use &middot; Shift to run &middot; V for camera</p>
      </div>`,this.prompt=document.getElementById("prompt"),this.promptLabel=document.getElementById("prompt-label"),this.toastEl=document.getElementById("toast"),this.pauseEl=document.getElementById("pause"),this._toastTimer=null,this.pauseEl.addEventListener("click",()=>t.setMode(Ke.PLAY,"resume")),t.bus.on("game:mode",({mode:i})=>{this.pauseEl.classList.toggle("hidden",i===Ke.PLAY)}),t.bus.on("interaction:target",({label:i})=>this.showPrompt(i))}showPrompt(t){if(!t){this.prompt.style.display="none";return}this.promptLabel.textContent=t,this.prompt.style.display="block"}toast(t,e=2600){this.toastEl.textContent=t,this.toastEl.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{this.toastEl.style.opacity="0"},e)}update(){}}const Ke={PLAY:"play",MENU:"menu"};class nv{constructor(t,e={}){this.canvas=t,this.seed=e.seed||"burgerbarn",this.bus=new ou,this.rng=new $r(this.seed),this.clock=new cu(this.bus),this.input=new uu(this.bus,t),this.audio=new vu(this),this.mode=Ke.MENU,this.running=!1,this._accum=0,this._last=0,this.fixedStep=1/60}build(){return this.renderer=new Jg(this.canvas,this),this.world=new yx(this),this.world.generate(),this.player=new tv(this),this.camera=new t_(this),this.interaction=new wx(this),this.shift=new Ux(this),this.ui=new ev(this),this.camera.setMode("first"),this.camera.yaw=Math.PI,this._wireGlobalInput(),this.input.enabled=!1,this.bus.emit("game:ready",{game:this}),this}_wireGlobalInput(){this.bus.on("action:camera",()=>{this.mode===Ke.PLAY&&this.camera.cycle()}),this.bus.on("input:pointerlock",({locked:t})=>{!t&&this.mode===Ke.PLAY&&this.setMode(Ke.MENU,"pause")})}setMode(t,e=""){if(this.mode===t)return;const i=this.mode;this.mode=t,this.clock.paused=t===Ke.MENU,this.input.enabled=t===Ke.PLAY,t===Ke.PLAY?this.input.requestLock():i===Ke.PLAY&&this.input.locked&&this.input.releaseLock(),this.bus.emit("game:mode",{mode:t,prev:i,reason:e})}start(){this.running=!0,this._last=performance.now();const t=e=>{if(!this.running)return;requestAnimationFrame(t);let i=(e-this._last)/1e3;this._last=e,i>.25&&(i=.25),this.update(i),this.render(i)};requestAnimationFrame(t)}update(t){this.mode===Ke.PLAY&&this.clock.update(t),this._accum+=t;let e=0;for(;this._accum>=this.fixedStep&&e++<5;)this._accum-=this.fixedStep,this.player.update(this.fixedStep);this.camera.update(t),this.world.update(t),this.interaction.update(t),this.shift.update(t),this.ui.update(t),this.audio.update(t),this.input.endFrame()}render(t){this.renderer.render(this.camera.active,t)}}const Hr=document.getElementById("scene"),je=new nv(Hr,{seed:new URLSearchParams(location.search).get("seed")||"burgerbarn"});je.build();je.start();window.game=je;window.shot=async function(t="shot",e=null){if(e){if(e.pos){const o=je.player.position.clone();o.set(e.pos[0],e.pos[1]??0,e.pos[2]),je.player.teleport(o)}e.mode&&je.camera.setMode(e.mode),e.yaw!==void 0&&(je.camera.yaw=e.yaw),e.pitch!==void 0&&(je.camera.pitch=e.pitch)}const i=1280,s=720;(Hr.width!==i||Hr.height!==s)&&(je.renderer.renderer.setSize(i,s,!1),je.camera.active.aspect=i/s,je.camera.active.updateProjectionMatrix());for(let o=0;o<90;o++)je.update(1/60);if(e!=null&&e.free){const o=je.camera.active;o.position.set(...e.free.pos),o.lookAt(...e.free.look)}je.render(0);const r=Hr.toDataURL("image/png");return(await fetch("http://localhost:5199/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:r})})).json()};
