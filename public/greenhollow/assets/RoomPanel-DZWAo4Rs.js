const f="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",e={card:"min-width:340px;max-width:420px",h:"margin:0 0 .6rem;font-size:1.15rem",row:"display:flex;gap:.5rem;align-items:center;margin:.55rem 0",label:"flex:0 0 5.5rem;opacity:.7;font-size:.85rem",input:"flex:1;padding:.45rem .55rem;border-radius:6px;border:1px solid rgba(255,255,255,.22);background:rgba(0,0,0,.3);color:inherit;font:inherit",code:"font:700 1.5rem/1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.22em",note:"margin:.7rem 0 0;opacity:.65;font-size:.82rem;line-height:1.4",list:"margin:.4rem 0 0;padding:0;list-style:none;font-size:.9rem",item:"display:flex;gap:.4rem;align-items:center;padding:.15rem 0",dot:"width:.5rem;height:.5rem;border-radius:50%;display:inline-block",actions:"display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.9rem"};class b{constructor(t={}){this.hooks=t,this.el=null,this.state={phase:"solo",code:null,players:[],role:"solo",name:"",error:null,busy:!1},this._autoShown=!1}destroy(){this.hide()}set(t){Object.assign(this.state,t),this.el&&this._render()}autoShow(){this._autoShown||(this._autoShown=!0,this.show())}toggle(){this.el?this.hide():this.show()}show(){if(this.el||typeof document>"u")return;const t=document.createElement("div");t.className="slice-end",t.style.pointerEvents="auto",document.body.appendChild(t),this.el=t,this._render()}hide(){var t;(t=this.el)==null||t.remove(),this.el=null}_render(){const o=this.state.phase==="room"?this._room():this._solo();this.el.innerHTML=`<div class="slice-card" style="${e.card}">${o}</div>`,this._bind()}_solo(){const t=this.state;return`
      <h2 style="${e.h}">Working alone</h2>
      <div style="${e.row}">
        <span style="${e.label}">Your name</span>
        <input id="gh-name" style="${e.input}" maxlength="16" value="${l(t.name)}" placeholder="Ben">
      </div>
      <div style="${e.row}">
        <span style="${e.label}">Shift code</span>
        <input id="gh-code" style="${e.input};${e.code};font-size:1rem" maxlength="5"
               placeholder="K7QX3" autocomplete="off" spellcheck="false">
      </div>
      ${t.error?`<p style="${e.note};color:#f0a08a">${l(t.error)}</p>`:""}
      <div class="slice-actions" style="${e.actions}">
        <button data-act="host"${t.busy?" disabled":""}>Start a shift with mates</button>
        <button data-act="join"${t.busy?" disabled":""}>Join with a code</button>
        <button data-act="close">Close</button>
      </div>
      <p style="${e.note}">Private and invitation only — nobody can find this room
      without the code. Press <b>C</b> at any time to open this again.</p>`}_room(){const t=this.state,o=t.players.find(n=>n.host),s=t.players.find(n=>n.me),i=t.players.map(n=>`
      <li style="${e.item}">
        <i style="${e.dot};background:${n.on?"#8fd3a6":"rgba(255,255,255,.28)"}"></i>
        <span>${l(n.name)}${n.me?" (you)":""}${n.host?" — host":""}</span>
        <span style="opacity:.5;font-size:.8rem">${n.on?"on shift":"in the carpark"}</span>
      </li>`).join(""),a=!(s!=null&&s.host)&&!t.started;return`
      <h2 style="${e.h}">Shift code <span style="${e.code}">${l(t.code||"")}</span></h2>
      <div style="${e.row}">
        <span style="${e.label}">On shift</span>
        <ul style="${e.list};flex:1">${i||'<li style="opacity:.6">Just you, so far.</li>'}</ul>
      </div>
      ${t.stale?`<p style="${e.note};color:#f0c08a">Reconnecting to the shift room…</p>`:""}
      <p style="${e.note}">${s!=null&&s.host?"Send the code to a mate. Clock on with Kev when you are ready.":a?`Waiting for ${l((o==null?void 0:o.name)||"the host")} to clock on.`:"Clock on with Kev when you are ready."}</p>
      <div class="slice-actions" style="${e.actions}">
        <button data-act="copy">Copy link</button>
        <button data-act="close">Close</button>
        <button data-act="leave">Work alone</button>
      </div>`}_bind(){const t=this.el.querySelector("#gh-name");t&&(t.oninput=()=>{this.state.name=t.value},t.onchange=()=>{var s,i;return(i=(s=this.hooks).onName)==null?void 0:i.call(s,t.value)});const o=this.el.querySelector("#gh-code");o&&(o.oninput=()=>{o.value=o.value.toUpperCase().split("").filter(s=>f.includes(s)).join("").slice(0,5)}),this.el.onclick=s=>{var n,h,c,d,u,p,m,y;const i=s.target.closest("[data-act]");if(!i)return;const a=i.dataset.act;if(a==="close")return this.hide();if(a==="leave")return(h=(n=this.hooks).onLeave)==null||h.call(n),this.hide();if(a==="copy")return this._copy();t!=null&&t.value&&((d=(c=this.hooks).onName)==null||d.call(c,t.value)),this.set({busy:!0,error:null}),a==="host"&&((p=(u=this.hooks).onHost)==null||p.call(u)),a==="join"&&((y=(m=this.hooks).onJoin)==null||y.call(m,(o==null?void 0:o.value)||""))}}_copy(){var o,s,i,a;const t=((s=(o=this.hooks).link)==null?void 0:s.call(o))||"";t&&((a=(i=navigator.clipboard)==null?void 0:i.writeText)==null||a.call(i,t).catch(()=>{window.prompt("Send this to your mate:",t)}))}}function l(r){return String(r??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}export{b as RoomPanel,b as default};
