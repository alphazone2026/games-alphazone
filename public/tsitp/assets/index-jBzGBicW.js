import{i as Te,e as M,k as Ee,p as se,s as Ye,b as ot,W as st,o as ct}from"./layers-LBLJEXAs.js";import{a as lt,s as dt,p as pt}from"./index-DVs3ZGzr.js";const ht=`
.cb-ui {
  --ink: #fbf6ec; --ink-dim: #d9d2c4; --plate: rgba(10, 16, 24, .66); --plate-hi: rgba(10, 16, 24, .82);
  --sea: #6cc3cf; --sea-deep: #2c7c8c; --coral: #f2906f; --sun: #f6cf73; --dusk: #141c27; --dusk-2: #1f2a38;
  --ts: 1;
  --body: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  --serif: "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
  position: fixed; inset: 0; z-index: 20; pointer-events: none;
  font-family: var(--body); color: var(--ink); -webkit-font-smoothing: antialiased;
}
.cb-ui * { box-sizing: border-box; }
.cb-ui button { font: inherit; color: inherit; }
.cb-hidden { display: none !important; }

/* ---------------------------------------------------------- the objective and notices */
.cb-top { position: absolute; left: 28px; top: 24px; display: flex; flex-direction: column; gap: 10px; align-items: flex-start; max-width: min(46ch, 60vw); }
.cb-obj {
  font-size: calc(15px * var(--ts)); line-height: 1.35; letter-spacing: .01em; color: var(--ink);
  background: var(--plate); padding: 7px 14px 7px 12px; border-radius: 8px; border-left: 3px solid var(--sun);
  transition: opacity .4s;
}
.cb-obj:empty { opacity: 0; }
.cb-notice {
  display: flex; align-items: center; gap: 10px; font-size: calc(16px * var(--ts)); font-weight: 600;
  background: var(--plate-hi); padding: 9px 16px 9px 12px; border-radius: 8px;
  animation: cb-notice-in .45s ease-out both;
}
.cb-notice svg { width: 22px; height: 22px; flex: none; color: var(--sun); }
.cb-notice.cb-out { animation: cb-notice-out .6s ease-in both; }
@keyframes cb-notice-in { from { opacity: 0; transform: translateX(-14px); } to { opacity: 1; transform: none; } }
@keyframes cb-notice-out { to { opacity: 0; transform: translateX(-10px); } }

/* ---------------------------------------------------------- subtitles */
.cb-sub {
  position: absolute; left: 50%; bottom: 8vh; transform: translateX(-50%); width: min(62ch, 90vw);
  text-align: center; transition: bottom .3s ease;
}
.cb-ui.cb-choosing .cb-sub { bottom: calc(max(5vh, 72px) + var(--choice-h, 180px)); }
.cb-ui.cb-big .cb-obj { opacity: 0; }   /* the moment is the choice's alone */
.cb-name {
  display: inline-block; margin-bottom: 6px; padding: 3px 10px; border-radius: 5px; background: var(--plate-hi);
  font-size: calc(14px * var(--ts)); font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
}
.cb-line { font-size: calc(clamp(19px, 2vw, 28px) * var(--ts)); line-height: 1.5; font-weight: 500; }
.cb-line span {
  background: var(--plate); padding: .12em .5em; border-radius: 6px;
  -webkit-box-decoration-break: clone; box-decoration-break: clone;
}
.cb-sub.cb-thought .cb-line { font-style: italic; color: #ece6f6; }
.cb-sub.cb-thought .cb-line span { background: rgba(28, 22, 44, .62); }
.cb-sub.cb-in { animation: cb-sub-in .22s ease-out both; }
@keyframes cb-sub-in { from { opacity: 0; transform: translate(-50%, 6px); } to { opacity: 1; transform: translateX(-50%); } }
.cb-more {
  display: inline-block; margin-left: .5em; width: .55em; height: .55em; vertical-align: middle; opacity: .8;
  border-right: 2px solid var(--ink); border-bottom: 2px solid var(--ink); transform: rotate(45deg) translateY(-3px);
  animation: cb-bob 1.2s ease-in-out infinite;
}
@keyframes cb-bob { 50% { transform: rotate(45deg) translate(2px, -1px); } }

/* A CARD: a caption on its own ("Tuesday. The breakfast shift."), centred, serif. */
.cb-card {
  position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none;
  background: radial-gradient(ellipse 60% 40% at center, rgba(8, 12, 18, .78), rgba(8, 12, 18, .35) 70%, rgba(8, 12, 18, .2));
  animation: cb-fade .5s ease-out both;
}
.cb-card p {
  margin: 0; max-width: 24ch; text-align: center; font-family: var(--serif);
  font-size: calc(clamp(28px, 3.6vw, 52px) * var(--ts)); line-height: 1.25; text-shadow: 0 2px 24px rgba(0, 0, 0, .55);
}
@keyframes cb-fade { from { opacity: 0; } to { opacity: 1; } }

/* ---------------------------------------------------------- choices (SMALL) */
/* Never lower than 72px: the data credits (the licences ask for them) live in the bottom-right corner. */
.cb-choices {
  position: absolute; left: 50%; bottom: max(5vh, 72px); transform: translateX(-50%); width: min(1040px, 94vw);
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px 14px; pointer-events: auto;
}
.cb-choices.cb-one { grid-template-columns: 1fr; width: min(560px, 94vw); }
.cb-opt {
  display: flex; align-items: center; gap: 12px; min-height: 54px; padding: 10px 16px 10px 10px; text-align: left;
  background: var(--plate-hi); border: 2px solid rgba(251, 246, 236, .14); border-radius: 12px; cursor: pointer;
  font-size: calc(clamp(16px, 1.55vw, 21px) * var(--ts)); line-height: 1.35;
  transition: border-color .12s, background .12s, transform .12s;
}
.cb-opt:hover, .cb-opt.cb-focus { border-color: var(--sea); background: rgba(20, 44, 56, .9); }
.cb-opt:active { transform: scale(.985); }
.cb-key {
  flex: none; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px;
  background: rgba(251, 246, 236, .12); font-size: 15px; font-weight: 700; color: var(--sun);
}
.cb-opt.cb-silence .cb-text { font-style: italic; color: var(--ink-dim); }
.cb-canon-tag {
  flex: none; margin-left: auto; display: inline-flex; align-items: center; gap: 6px; padding: 4px 9px 4px 7px; border-radius: 6px;
  background: rgba(108, 195, 207, .16); border: 1px solid rgba(108, 195, 207, .55); color: var(--sea);
  font-size: 12px; font-weight: 800; letter-spacing: .14em; font-style: normal;
}
.cb-canon-tag svg { width: 20px; height: 13px; }
.cb-canon-mini { margin-left: 4px; font-size: 10px; font-weight: 800; letter-spacing: .12em; color: var(--sea); }
.cb-timer { grid-column: 1 / -1; height: 5px; border-radius: 3px; background: rgba(251, 246, 236, .16); overflow: hidden; }
.cb-timer i { display: block; height: 100%; width: 100%; background: linear-gradient(90deg, var(--coral), var(--sun)); transform-origin: left; }
.cb-choices.cb-in .cb-opt { animation: cb-opt-in .25s ease-out both; }
.cb-choices.cb-in .cb-opt:nth-child(3) { animation-delay: .04s; } .cb-choices.cb-in .cb-opt:nth-child(4) { animation-delay: .08s; }
.cb-choices.cb-in .cb-opt:nth-child(5) { animation-delay: .12s; }
@keyframes cb-opt-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

/* ---------------------------------------------------------- BIG: the picture holds */
.cb-hold {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .5s;
  -webkit-backdrop-filter: saturate(.3) brightness(.62) contrast(1.08); backdrop-filter: saturate(.3) brightness(.62) contrast(1.08);
  background: radial-gradient(ellipse at 50% 42%, transparent 35%, rgba(4, 7, 11, .55));
}
.cb-bar { position: absolute; left: 0; right: 0; height: 0; background: #05080c; transition: height .5s cubic-bezier(.2, .8, .2, 1); }
.cb-bar.cb-t { top: 0; } .cb-bar.cb-b { bottom: 0; }
.cb-ui.cb-big .cb-hold { opacity: 1; }
.cb-ui.cb-big .cb-bar { height: 9vh; }
.cb-ui.cb-big .cb-choices {
  bottom: 12vh; width: min(1240px, 94vw); grid-template-columns: repeat(var(--n, 3), 1fr); gap: 14px;
}
.cb-ui.cb-big .cb-opt {
  flex-direction: column; align-items: flex-start; justify-content: flex-start; min-height: 116px; padding: 16px 18px;
  font-size: calc(clamp(18px, 1.75vw, 24px) * var(--ts)); font-weight: 600; border-width: 2px;
  background: rgba(12, 20, 30, .88);
}
.cb-ui.cb-big .cb-opt .cb-canon-tag { margin: auto 0 0 0; }
.cb-ui.cb-big .cb-timer { height: 7px; order: 99; }
.cb-ui.cb-big .cb-sub { bottom: calc(12vh + var(--choice-h, 180px)); }
.cb-ui.cb-big .cb-line { font-size: calc(clamp(21px, 2.3vw, 32px) * var(--ts)); }

/* ---------------------------------------------------------- panels: pause, journal, save */
.cb-modal {
  position: absolute; inset: 0; pointer-events: auto; display: grid; grid-template-columns: minmax(220px, 300px) 1fr;
  background: rgba(8, 12, 18, .74); -webkit-backdrop-filter: blur(10px) saturate(.8); backdrop-filter: blur(10px) saturate(.8);
  animation: cb-fade .2s ease-out both;
}
.cb-nav { display: flex; flex-direction: column; gap: 4px; padding: 11vh 18px 40px 40px; border-right: 1px solid rgba(251, 246, 236, .1); }
.cb-nav h2 { margin: 0 0 22px 10px; font: 600 13px/1 var(--body); letter-spacing: .22em; text-transform: uppercase; color: var(--sun); }
.cb-nav button {
  text-align: left; padding: 11px 14px; border: 0; border-radius: 9px; background: transparent; cursor: pointer;
  font-size: 19px; font-weight: 500; color: var(--ink-dim);
}
.cb-nav button:hover, .cb-nav button.cb-focus { background: rgba(251, 246, 236, .08); color: var(--ink); }
.cb-nav button.cb-on { background: rgba(108, 195, 207, .16); color: var(--ink); box-shadow: inset 3px 0 0 var(--sea); }
.cb-pane { padding: 11vh 6vw 40px 4vw; overflow: auto; }
.cb-pane h3 { margin: 0 0 6px; font: 400 clamp(26px, 2.6vw, 38px)/1.15 var(--serif); }
.cb-pane .cb-sub-h { margin: 0 0 26px; color: var(--ink-dim); font-size: 15px; }
.cb-small { font-size: 13px; color: var(--ink-dim); }

.cb-slots { display: grid; gap: 12px; max-width: 640px; }
.cb-slot {
  display: grid; grid-template-columns: 54px 1fr auto; align-items: center; gap: 16px; padding: 16px 18px; text-align: left;
  background: rgba(251, 246, 236, .06); border: 2px solid rgba(251, 246, 236, .1); border-radius: 12px; cursor: pointer;
}
.cb-slot:hover, .cb-slot.cf-focus { border-color: var(--sea); }
.cb-slot[disabled] { cursor: default; opacity: .55; } .cb-slot[disabled]:hover { border-color: rgba(251, 246, 236, .1); }
.cb-slot b { font: 400 30px/1 var(--serif); color: var(--sun); text-align: center; }
.cb-slot .cb-slot-t { font-size: 18px; font-weight: 600; } .cb-slot .cb-slot-s { font-size: 14px; color: var(--ink-dim); margin-top: 3px; }
.cb-toast { position: absolute; left: 50%; top: 5vh; transform: translateX(-50%); padding: 10px 18px; border-radius: 9px; background: var(--plate-hi); font-weight: 600; animation: cb-fade .2s both; }

.cb-rows { display: grid; gap: 10px; max-width: 700px; }
.cb-row { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 18px; padding: 14px 18px; border-radius: 12px; background: rgba(251, 246, 236, .06); }
.cb-row .cb-row-t { font-size: 18px; font-weight: 600; } .cb-row .cb-row-s { font-size: 14px; color: var(--ink-dim); margin-top: 3px; }
.cb-seg { display: inline-flex; border-radius: 9px; background: rgba(0, 0, 0, .3); padding: 3px; }
.cb-seg button { border: 0; background: transparent; padding: 7px 13px; border-radius: 7px; cursor: pointer; font-size: 15px; color: var(--ink-dim); }
.cb-seg button.cb-on { background: var(--sea-deep); color: var(--ink); }
.cb-list { display: grid; gap: 8px; max-width: 640px; }
.cb-list button {
  text-align: left; padding: 13px 16px; border-radius: 10px; border: 2px solid rgba(251, 246, 236, .1); background: rgba(251, 246, 236, .05);
  cursor: pointer; font-size: 17px;
}
.cb-list button:hover, .cb-list button.cf-focus { border-color: var(--sea); }
.cb-list button span { color: var(--ink-dim); font-size: 14px; margin-left: 8px; }

/* ---------------------------------------------------------- the journal */
.cb-people { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 14px; }
.cb-person { padding: 16px 18px 18px; border-radius: 14px; background: rgba(251, 246, 236, .06); border: 1px solid rgba(251, 246, 236, .08); }
.cb-person-h { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.cb-face { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; font: 400 22px/1 var(--serif); color: #10161f; flex: none; }
.cb-person-n { font-size: 20px; font-weight: 700; } .cb-person-w { font-size: 14px; color: var(--ink-dim); }
.cb-meter { display: grid; grid-template-columns: repeat(11, 1fr); gap: 3px; margin: 4px 0 10px; }
.cb-meter i { height: 9px; border-radius: 2px; background: rgba(251, 246, 236, .12); }
.cb-meter i.cb-zero { background: rgba(251, 246, 236, .32); }
.cb-meter i.cb-pos { background: var(--sea); } .cb-meter i.cb-neg { background: var(--coral); }
.cb-why { font-size: 14px; color: var(--ink-dim); } .cb-why b { color: var(--ink); font-weight: 600; }
.cb-standing { display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 24px; }
.cb-chip { padding: 7px 12px; border-radius: 8px; background: rgba(251, 246, 236, .07); font-size: 14px; }
.cb-chip b { color: var(--sun); margin-right: 6px; }

/* ---------------------------------------------------------- full screens: select, previously, end */
.cb-screen {
  position: absolute; inset: 0; pointer-events: auto; overflow: auto; animation: cb-fade .35s ease-out both;
  background:
    radial-gradient(circle at 78% 30%, rgba(246, 207, 115, .55), rgba(246, 207, 115, 0) 18%),
    linear-gradient(180deg, #243650 0%, #3d5a78 34%, #e59a7c 58%, #2e6f82 60%, #173b4d 100%);
}
.cb-screen.cb-dark { background: radial-gradient(ellipse at 50% 30%, #1d2938, #0a0f16 75%); }
.cb-screen-in { max-width: 1180px; margin: 0 auto; padding: 5vh 5vw 40px; }
.cb-kicker { font: 600 13px/1 var(--body); letter-spacing: .28em; text-transform: uppercase; color: var(--sun); }
.cb-title { margin: 10px 0 22px; font: 400 clamp(38px, 5vw, 72px)/1.05 var(--serif); text-shadow: 0 2px 30px rgba(0, 0, 0, .35); }
.cb-eps { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 18px; }
.cb-ep {
  position: relative; min-height: 230px; padding: 20px; border-radius: 16px; text-align: left; cursor: pointer; overflow: hidden;
  border: 2px solid rgba(251, 246, 236, .18); background: linear-gradient(160deg, rgba(20, 30, 44, .82), rgba(12, 18, 28, .92));
  display: flex; flex-direction: column; transition: transform .15s, border-color .15s;
}
.cb-ep:hover { transform: translateY(-3px); border-color: var(--sea); }
.cb-ep[disabled] { cursor: default; opacity: .62; } .cb-ep[disabled]:hover { transform: none; border-color: rgba(251, 246, 236, .18); }
.cb-ep-n { font: 400 64px/1 var(--serif); color: rgba(246, 207, 115, .9); }
.cb-ep-t { margin-top: auto; font-size: 22px; font-weight: 700; } .cb-ep-s { margin-top: 6px; font-size: 14px; color: var(--ink-dim); }
.cb-ep-bar { height: 4px; margin-top: 12px; border-radius: 2px; background: rgba(251, 246, 236, .15); overflow: hidden; }
.cb-ep-bar i { display: block; height: 100%; background: var(--sea); }

.cb-prev { max-width: 780px; margin: 0 auto; padding: 14vh 6vw 60px; }
.cb-prev .cb-title { font-style: italic; }
.cb-recap { list-style: none; margin: 0 0 34px; padding: 0; display: grid; gap: 16px; }
.cb-recap li { font-size: clamp(19px, 1.9vw, 25px); line-height: 1.45; padding-left: 22px; border-left: 3px solid var(--sea); animation: cb-opt-in .5s ease-out both; }
.cb-recap li:nth-child(2) { animation-delay: .5s; } .cb-recap li:nth-child(3) { animation-delay: 1s; } .cb-recap li:nth-child(4) { animation-delay: 1.5s; }
.cb-builder { margin: 10px 0 34px; padding: 20px; border-radius: 14px; background: rgba(251, 246, 236, .05); }
.cb-builder h4 { margin: 0 0 4px; font-size: 18px; } .cb-builder > p { margin: 0 0 16px; }
.cb-bq { display: grid; gap: 8px; margin-bottom: 16px; } .cb-bq > div { font-size: 16px; font-weight: 600; }

.cb-go {
  display: inline-flex; align-items: center; gap: 10px; padding: 14px 26px; border-radius: 12px; border: 0; cursor: pointer;
  background: var(--sun); color: #1a1408 !important; font-size: 18px; font-weight: 700;
}
.cb-go.cb-quiet { background: rgba(251, 246, 236, .1); color: var(--ink) !important; }
.cb-name-in {
  width: min(420px, 90%); padding: 14px 18px; border-radius: 12px; border: 2px solid rgba(251, 246, 236, .25);
  background: rgba(251, 246, 236, .06); color: var(--ink); font: 500 26px/1.2 var(--body); outline: none;
}
.cb-name-in:focus { border-color: var(--sea); } .cb-name-in.cb-want { border-color: var(--coral); }
.cb-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
/* On a short window the buttons stay in reach while the page scrolls under them. */
.cb-screen .cb-actions { position: sticky; bottom: 0; padding: 14px 0 18px; margin-bottom: -18px;
  background: linear-gradient(to top, rgba(14, 40, 52, .92) 55%, rgba(14, 40, 52, 0)); }

.cb-end-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 34px; align-items: start; }
/* Dark enough to hold white text over the brightest band of the sunset behind. */
.cb-card-s {
  padding: 20px 22px; border-radius: 16px; background: rgba(12, 18, 28, .7); border: 1px solid rgba(251, 246, 236, .1);
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
}
.cb-card-s h4 { margin: 0 0 14px; font: 600 13px/1 var(--body); letter-spacing: .2em; text-transform: uppercase; color: var(--sun); }
.cb-stat { margin-bottom: 22px; } .cb-stat:last-child { margin-bottom: 0; }
.cb-stat-q { font-size: 19px; font-weight: 700; margin-bottom: 10px; }
.cb-bar-row { display: grid; grid-template-columns: 1fr 52px; align-items: center; gap: 12px; margin-bottom: 7px; }
.cb-bar-l { position: relative; display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 8px; overflow: hidden; background: rgba(251, 246, 236, .07); font-size: 15px; }
.cb-bar-l i { position: absolute; inset: 0 auto 0 0; background: rgba(108, 195, 207, .28); }
.cb-bar-l span { position: relative; }
.cb-bar-row.cb-mine .cb-bar-l { box-shadow: inset 0 0 0 2px var(--sun); font-weight: 700; }
.cb-bar-row.cb-mine .cb-bar-l i { background: rgba(246, 207, 115, .35); }
.cb-bar-p { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
.cb-map { display: grid; gap: 16px; }
.cb-map-q { font-size: 14px; color: var(--ink-dim); margin-bottom: 7px; }
.cb-map-row { display: flex; flex-wrap: wrap; gap: 8px; }
.cb-node { display: inline-flex; align-items: center; gap: 7px; padding: 8px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; background: rgba(108, 195, 207, .2); border: 1px solid rgba(108, 195, 207, .5); }
.cb-node.cb-mine { background: rgba(246, 207, 115, .25); border-color: var(--sun); }
.cb-node.cb-ghost { color: transparent; background: rgba(251, 246, 236, .08); border: 1px dashed rgba(251, 246, 236, .3); min-width: 88px; position: relative; }
.cb-node.cb-ghost::after { content: '?'; position: absolute; inset: 0; display: grid; place-items: center; color: rgba(251, 246, 236, .45); font-weight: 700; }
.cb-canon { display: flex; align-items: center; gap: 16px; }
.cb-canon-n { font: 400 54px/1 var(--serif); color: var(--sea); min-width: 1.2ch; }
.cb-waves { display: flex; gap: 5px; margin-top: 8px; } .cb-waves svg { width: 30px; height: 18px; color: var(--sea); }
.cb-waves svg.cb-off { color: rgba(251, 246, 236, .22); }

/* ---------------------------------------------------------- the dev strip (never in a shot) */
.cb-dev {
  position: absolute; right: 12px; top: 12px; max-width: 320px; pointer-events: auto; padding: 10px 12px; border-radius: 10px;
  background: rgba(0, 0, 0, .7); font: 12px/1.45 ui-monospace, Menlo, monospace; color: #cfe;
}
.cb-dev button { margin: 4px 4px 0 0; padding: 3px 8px; border-radius: 5px; border: 1px solid #5aa; background: #123; cursor: pointer; font: inherit; }

@media (max-width: 760px) {
  .cb-choices, .cb-ui.cb-big .cb-choices { grid-template-columns: 1fr; }
  .cb-modal { grid-template-columns: 1fr; } .cb-nav { padding: 24px 18px 8px; border: 0; flex-direction: row; flex-wrap: wrap; }
  .cb-end-grid { grid-template-columns: 1fr; }
}
`;let He=!1;function Yt(t=document){if(He)return;He=!0;const a=t.createElement("style");a.id="cb-story-style",a.textContent=ht,t.head.appendChild(a)}const Gt='<svg viewBox="0 0 26 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M1 10c3-5 6-5 8 0s5 5 8 0 6-5 8 0"/><path d="M5 15c2-2 4-2 6 0" opacity=".55"/></svg>',Kt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5h16v10H9l-5 4z" stroke-linejoin="round"/><circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="12" cy="10" r="1.2" fill="currentColor"/><circle cx="15" cy="10" r="1.2" fill="currentColor"/></svg>',Ne=["#f6cf73","#6cc3cf","#f2906f","#b7e08a","#e7a6d8","#9fb6ff","#ffb37a","#8fe0c4"];function Qt(t){let a=0;for(const c of String(t))a=a*31+c.charCodeAt(0)>>>0;return Ne[a%Ne.length]}const Jt=t=>String(t??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),Ge=120;function ft(){let t="closed",a=0,c=!1;return{get state(){return t},get open(){return t==="typing"||t==="unclear"},get tries(){return a},start({pad:l=!1}={}){return l?(t="closed",{action:"options",why:"pad"}):(t="typing",a=0,c=!1,{action:"typing"})},send(l,s){if(!this.open)return{action:"ignore",why:"closed"};const f=String(l??"").replace(/\s+/g," ").trim().slice(0,Ge);if(!f)return c?(c=!1,t="closed",{action:"silence"}):(c=!0,{action:"confirm-silence"});c=!1;let u;try{u=s(f)}catch(k){return{action:"ignore",why:`say threw: ${k?.message??k}`}}return!u||u.intent==="unclear"?(t="unclear",a++,{action:"retry",line:u?.line??null,text:f}):(t="closed",{action:"done",result:u,text:f})},options(){return this.open?(t="closed",{action:"options"}):{action:"ignore",why:"closed"}},silence(){return this.open?(t="closed",c=!1,{action:"silence"}):{action:"ignore",why:"closed"}},typed(){c=!1},get armed(){return c},close(){t="closed",c=!1}}}function ut(t,a){return a?Math.max(0,Math.round(t-a.height-a.offsetTop)):0}const bt=`
/* ONE PLATE for all of it: the label, the hint and the link are read over sand
   at noon as much as the field is (docs/UI-STYLE.md: no line relies on the
   picture; the first shots, ua-*-box, had them on the bare picture). */
.ca {
  position: fixed; left: 50%; bottom: max(5vh, 72px); transform: translateX(-50%); width: min(720px, 94vw); z-index: 21;
  font-family: var(--body); color: var(--ink); -webkit-font-smoothing: antialiased;
  display: grid; gap: 8px; padding: 10px 12px 8px; border-radius: 16px; background: var(--plate-hi);
  box-shadow: 0 12px 34px rgba(0, 0, 0, .35); animation: ca-in var(--mid) var(--ease) both;
}
.ca-gone { display: none !important; }
@keyframes ca-in { from { opacity: 0; transform: translate(-50%, var(--rise)); } to { opacity: 1; transform: translateX(-50%); } }
.ca label { font: 400 calc(20px * var(--ts))/1 var(--hand); color: var(--sun); padding: 2px 4px 0; }
:root.ts-nohand .ca label { font: 700 calc(12px * var(--ts))/1 var(--body); letter-spacing: .16em; text-transform: uppercase; }
.ca-row {
  display: flex; align-items: center; gap: 10px; padding: 6px 6px 6px 14px; border-radius: 12px;
  background: rgba(251, 246, 236, .06); border: 2px solid var(--sea);
}
.ca input {
  flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--ink); caret-color: var(--sun);
  font: 500 calc(clamp(17px, 1.6vw, 22px) * var(--ts))/1.3 var(--body); padding: 8px 0;
}
.ca input::placeholder { color: var(--ink-faint); font-style: italic; }
.ca-send {
  flex: none; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 10px; border: 0; cursor: pointer;
  background: var(--sun); color: var(--on-sun);
}
.ca-send svg { width: 20px; height: 20px; }
.ca-send:disabled { opacity: .35; cursor: default; }
/* The hint and the link in full ink, not ink-dim: read against the plate over
   the brightest scene they are well past WCAG AA (front harness computes it). */
.ca-foot { display: flex; align-items: center; gap: 14px; padding: 0 4px; font-size: calc(14px * var(--ts)); font-weight: 500; color: var(--ink); min-height: 22px; }
.ca-foot .ca-hint { flex: 1; }
.ca-opts {
  border: 0; background: none; color: var(--ink); font: 600 calc(13px * var(--ts))/1 var(--body); cursor: pointer;
  text-decoration: underline; text-underline-offset: 3px; padding: 4px 2px; border-radius: 6px; display: inline-flex; gap: 6px; align-items: center;
}
.ca-opts kbd { font: 700 11px/1 var(--body); padding: 3px 5px; border-radius: 5px; background: rgba(251, 246, 236, .14); text-decoration: none; }
.ca.ca-unclear .ca-row { border-color: var(--coral); animation: ca-nudge .35s ease; }
.ca.ca-unclear .ca-opts { color: var(--sun); }
@keyframes ca-nudge { 25% { transform: translateX(-5px); } 60% { transform: translateX(4px); } }
:root.ts-still .ca.ca-unclear .ca-row { animation: none; }
@media (max-width: 640px) { .ca-foot { flex-wrap: wrap; } }
`,gt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';function mt(t=document.body,{game:a=null,placeholder:c="Say something…"}={}){const l=t.ownerDocument;Te("ts-answer-css",bt,l);const s=l.createElement("div");s.className="ca ca-gone",s.setAttribute("role","group"),s.setAttribute("aria-label","Your reply");const f=`ca-in-${Math.random().toString(36).slice(2,8)}`;s.innerHTML=`
    <label for="${f}">your reply</label>
    <div class="ca-row">
      <input id="${f}" type="text" autocomplete="off" autocorrect="on" spellcheck="true" enterkeyhint="send" maxlength="${Ge}" placeholder="${M(c)}" aria-describedby="${f}-hint">
      <button class="ca-send" type="button" aria-label="Send" disabled>${gt}</button>
    </div>
    <div class="ca-foot"><span class="ca-hint" id="${f}-hint" aria-live="polite">Enter to send</span>
      <button class="ca-opts ca-quiet" type="button">Say nothing</button>
      <button class="ca-opts ca-show" type="button">Show options <kbd>Esc</kbd></button></div>`,t.appendChild(s);const u=s.querySelector("input"),k=s.querySelector(".ca-send"),z=s.querySelector(".ca-hint"),A=s.querySelector(".ca-show"),n=s.querySelector(".ca-quiet"),i=ft();let b=null;function x(){const g=ut(globalThis.innerHeight,globalThis.visualViewport);s.style.bottom=g>0?`${g+12}px`:""}function d(){i.close(),s.classList.add("ca-gone"),s.classList.remove("ca-unclear"),globalThis.visualViewport?.removeEventListener("resize",x),globalThis.visualViewport?.removeEventListener("scroll",x),l.activeElement===u&&u.blur()}function h(){const g=i.send(u.value,I=>b.onSay(I));return g.action==="ignore"?g:g.action==="confirm-silence"?(z.textContent="Press Enter again to say nothing.",g):g.action==="silence"?(d(),b.onSilence?.(),g):g.action==="done"?(u.value="",d(),g):(u.value="",k.disabled=!0,s.classList.remove("ca-unclear"),s.offsetWidth,s.classList.add("ca-unclear"),z.textContent="Try saying it another way, or show the options.",u.focus({preventScroll:!0}),g)}function y(){const g=i.silence();return g.action!=="silence"||(d(),b.onSilence?.()),g}function w(){const g=i.options();return g.action!=="options"||(d(),b.onOptions?.()),g}u.addEventListener("input",()=>{k.disabled=!u.value.trim(),i.armed&&(i.typed(),z.textContent=i.tries?"Try saying it another way, or show the options.":"Enter to send")}),k.addEventListener("click",h),A.addEventListener("click",w),n.addEventListener("click",y);const v=Ee({prio:95,modal:()=>i.open,text(g){return!i.open||g.target!==u?!1:g.key==="Enter"&&!g.isComposing?(g.preventDefault(),h(),!0):(g.key==="Escape"&&(g.preventDefault(),w()),!0)},key(g){return i.open?g.key==="Escape"?(w(),!0):(g.key.length===1&&!g.metaKey&&!g.ctrlKey&&!g.altKey&&u.focus({preventScroll:!0}),!0):!1},intent(g){return i.open?(g&&w(),!0):!1}},a);return{el:s,get isOpen(){return i.open},get state(){return i.state},get tries(){return i.tries},get height(){return Math.round(s.getBoundingClientRect().height)+18},open(g){b=g;const I=i.start({pad:g.pad??se()});return I.action==="options"?(g.onOptions?.(),I):(a&&Ye(a),l.pointerLockElement&&l.exitPointerLock?.(),u.value="",k.disabled=!0,u.placeholder=g.placeholder??c,z.textContent=g.hint??"Enter to send",s.classList.remove("ca-gone","ca-unclear"),x(),globalThis.visualViewport?.addEventListener("resize",x),globalThis.visualViewport?.addEventListener("scroll",x),u.focus({preventScroll:!0}),I)},close:d,type(g){return u.value=g,k.disabled=!g.trim(),h()},options:w,silence:y,enter:()=>h(),destroy(){d(),v(),s.remove()}}}const Zt=Object.freeze(Object.defineProperty({__proto__:null,makeAnswerBox:mt},Symbol.toStringTag,{value:"Module"})),xt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',Ke=`
.cb-opt.cb-locked {
  cursor: default; opacity: .62; border-style: dashed !important; border-color: rgba(251, 246, 236, .22) !important;
  background: rgba(10, 16, 24, .58) !important; transform: none !important;
}
.cb-opt.cb-locked .cb-key { background: transparent; color: var(--ink-dim); }
.cb-opt.cb-locked .cb-key svg { width: 18px; height: 18px; }
.cb-opt.cb-locked .cb-text { color: var(--ink-dim); }
.cb-why {
  display: block; margin-top: 3px; font-size: calc(13px * var(--ts)); font-weight: 600; letter-spacing: .01em;
  color: var(--sun); opacity: .9;
}
`,Qe=`
@media (max-width: 640px), (max-height: 640px) {
  .cb-choices { max-height: calc(100dvh - max(5vh, 72px) - 200px); overflow-y: auto; overscroll-behavior: contain; align-content: start; }
  .cb-opt { min-height: 44px; padding-top: 7px; padding-bottom: 7px; gap: 10px; }
  .cb-opt .cb-key { width: 26px; height: 26px; }
  .cb-choices .cb-timer { position: sticky; bottom: 0; }
  .cb-why { font-size: calc(12px * var(--ts)); }
}
`;function vt(t=document){Te("ts-locks-css",Ke+Qe,t)}const yt=t=>t?.locks===!0,ea=Object.freeze(Object.defineProperty({__proto__:null,LOCKED_CSS:Ke,LOCK_ICON:xt,TALL_LIST_CSS:Qe,injectLockStyle:vt,showLocks:yt},Symbol.toStringTag,{value:"Module"})),wt=`
.ch { position: fixed; inset: 0; z-index: 15; pointer-events: none; font-family: var(--body); color: var(--ink); -webkit-font-smoothing: antialiased; }
.ch * { box-sizing: border-box; }
.ch :where(button) { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; text-align: left; }
.ch-gone { display: none !important; }

/* ------------------------------------------------------------ the prompt */
.ch-prompt {
  position: absolute; left: 50%; top: 64%; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 10px;
  padding: 6px 15px 6px 6px; border-radius: 999px; background: var(--plate-hi);
  font-size: calc(16px * var(--ts)); font-weight: 600; white-space: nowrap;
  animation: ch-pop var(--mid) var(--ease) both;
}
@keyframes ch-pop { from { opacity: 0; transform: translate(-50%, var(--rise)); } to { opacity: 1; transform: translateX(-50%); } }
.ch-key {
  display: inline-grid; place-items: center; min-width: 28px; height: 28px; padding: 0 8px; border-radius: 8px;
  background: var(--ink); color: var(--dusk); font: 800 14px/1 var(--body); box-shadow: inset 0 -3px 0 rgba(0, 0, 0, .18);
}
.ch-key.ch-pad { border-radius: 50%; padding: 0; width: 28px; }

/* ------------------------------------------------------------ a notice: a text, a call, money */
.ch-banner {
  position: absolute; left: 50%; top: 18px; transform: translateX(-50%); width: min(420px, 90vw);
  display: grid; grid-template-columns: 36px 1fr auto; gap: 12px; align-items: center;
  padding: 10px 14px 10px 10px; border-radius: 18px; background: rgba(24, 32, 44, .9); border: 1px solid var(--line);
  box-shadow: 0 12px 30px rgba(0, 0, 0, .35); animation: ch-drop var(--mid) var(--ease) both;
}
.ch-banner.ch-ring { animation: ch-drop var(--mid) var(--ease) both, ch-buzz 1.1s ease-in-out .3s infinite; }
.ch-banner.ch-out { animation: ch-lift var(--mid) ease both; }
@keyframes ch-drop { from { opacity: 0; transform: translate(-50%, calc(var(--rise) * -2)); } to { opacity: 1; transform: translateX(-50%); } }
@keyframes ch-lift { to { opacity: 0; transform: translate(-50%, calc(var(--rise) * -2)); } }
@keyframes ch-buzz { 0%, 60%, 100% { transform: translateX(-50%); } 64% { transform: translateX(calc(-50% - 3px)); } 68% { transform: translateX(calc(-50% + 3px)); } 72% { transform: translateX(calc(-50% - 2px)); } 76% { transform: translateX(-50%); } }
:root.ts-still .ch-banner.ch-ring { animation: ch-drop var(--mid) both; }
.ch-banner b { display: block; font-size: calc(14px * var(--ts)); } .ch-banner p { margin: 2px 0 0; font-size: calc(14px * var(--ts)); color: var(--ink-dim); line-height: 1.35; }
.ch-banner .ch-key { min-width: 36px; height: 24px; font-size: 11px; }
.ch-banner .ch-hint { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--ink-dim); }

/* ------------------------------------------------------------ a live call: the chip (UI-PH)
   The phone itself is in the hand in 3D (Cousins Play's); on screen, only who,
   how long, and the two keys. Top centre, where a notice would be. */
.ch-callchip {
  position: absolute; left: 50%; top: 16px; transform: translateX(-50%); pointer-events: auto;
  display: flex; align-items: center; gap: 10px; padding: 6px 8px 6px 6px; border-radius: 999px;
  background: var(--plate-hi); border: 1px solid var(--line); box-shadow: 0 8px 22px rgba(0, 0, 0, .3);
  font-size: calc(14px * var(--ts)); white-space: nowrap; animation: ch-drop var(--mid) var(--ease) both;
}
.ch-callchip .ch-av { width: 28px; height: 28px; font-size: 13px; color: #fff; }
.ch-callchip .ch-cn { font-weight: 700; }
.ch-callchip .ch-ct { color: var(--ink-dim); font-variant-numeric: tabular-nums; min-width: 3.2ch; }
.ch-callchip.ch-speaker .ch-ct::after { content: ' · speaker'; }
.ch-cb {
  display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px 4px 4px; border-radius: 999px;
  background: rgba(251, 246, 236, .08); font-size: calc(13px * var(--ts)); font-weight: 600; color: var(--ink) !important;
}
.ch-cb .ch-key { min-width: 22px; height: 22px; font-size: 11px; border-radius: 6px; padding: 0 5px; }
.ch-cb.ch-cend { background: rgba(224, 90, 79, .85); }
@media (max-width: 520px) { .ch-callchip { gap: 6px; } .ch-cb .ch-key { display: none; } .ch-cb { padding: 6px 10px; } }

/* ------------------------------------------------------------ the phone, held */
.ch-held {
  --pw: clamp(240px, min(43vh, 88vw), 420px);
  position: absolute; right: max(16px, 9vw); bottom: calc(var(--pw) * -0.03); width: var(--pw); height: calc(var(--pw) * 2.05);
  font-size: calc(var(--pw) / 21); pointer-events: auto;
  transform: rotate(-3deg); transform-origin: 50% 100%;
  animation: ch-lift-up var(--mid) var(--ease) both;
}
@keyframes ch-lift-up { from { opacity: 0; transform: translateY(18%) rotate(-3deg); } to { opacity: 1; transform: rotate(-3deg); } }
:root.ts-still .ch-held { transform: none; animation: ch-fade var(--mid) both; }
@keyframes ch-fade { from { opacity: 0; } }
@media (max-width: 640px) { .ch-held { right: 50%; margin-right: calc(var(--pw) / -2); } }
.ch-held.ch-away { display: none; }

/* the hand: fingers round the left edge behind, a thumb on the right, the palm below */
.ch-hand { position: absolute; inset: 0; pointer-events: none; }
.ch-hand svg { position: absolute; left: -15%; top: 0; width: 130%; height: 100%; overflow: visible; }
.ch-hand .ch-skin { fill: var(--skin, #c68b67); }
.ch-hand .ch-shade { fill: rgba(60, 30, 20, .22); }
.ch-hand.ch-front svg { z-index: 3; }

.ch-phone {
  position: absolute; inset: 0; padding: .55em; border-radius: 2.4em;
  background: linear-gradient(145deg, #3a4452, #10151c 60%); box-shadow: 0 1.6em 3.2em rgba(0, 0, 0, .5), inset 0 0 0 .12em rgba(255, 255, 255, .08);
}
.ch-screen {
  position: relative; height: 100%; overflow: hidden; border-radius: 1.9em; display: flex; flex-direction: column;
  background: linear-gradient(180deg, #f3b58a 0%, #e98f7d 30%, #8b6f9a 62%, #2c3f63 100%);
  container-type: inline-size;
}
.ch-island { position: absolute; left: 50%; top: .5em; transform: translateX(-50%); width: 5.2em; height: 1.4em; border-radius: .8em; background: #07090c; z-index: 5; }
.ch-status { display: flex; justify-content: space-between; align-items: center; padding: .7em 1.4em .3em; font-size: .78em; font-weight: 700; position: relative; z-index: 4; }
.ch-status svg { height: .78em; margin-left: .35em; vertical-align: -.05em; }
.ch-on-light .ch-status { color: #1b2530; }
.ch-body { flex: 1; min-height: 0; display: flex; flex-direction: column; position: relative; }
.ch-bar { height: .3em; width: 36%; margin: .35em auto .45em; border-radius: .2em; background: rgba(255, 255, 255, .7); flex: none; }
.ch-on-light .ch-bar { background: rgba(27, 37, 48, .35); }

/* the home screen */
.ch-home { flex: 1; display: flex; flex-direction: column; padding: 1.2em 1.1em .6em; min-height: 0; }
.ch-bigtime { text-align: center; font: 300 3.6em/1 var(--body); letter-spacing: -.02em; text-shadow: 0 1px 10px rgba(40, 20, 30, .3); }
.ch-day { text-align: center; margin-top: .3em; font-size: .92em; font-weight: 600; opacity: .95; }
.ch-widget { margin-top: 1em; padding: .75em .9em; border-radius: 1.1em; background: rgba(255, 255, 255, .2); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
.ch-widget small { display: block; font: 400 1.05em/1.1 var(--hand); color: #fff6e0; }
:root.ts-nohand .ch-widget small { font: 700 .7em/1.2 var(--body); letter-spacing: .14em; text-transform: uppercase; }
.ch-widget b { display: block; margin-top: .2em; font-size: calc(.95em * var(--ts)); line-height: 1.3; }
.ch-widget span { display: block; margin-top: .2em; font-size: .78em; opacity: .9; }
.ch-grid { margin-top: auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: .9em .4em; padding: .9em .3em .4em; }
.ch-app { position: relative; display: grid; justify-items: center; gap: .35em; font-size: .72em; font-weight: 600; text-shadow: 0 1px 4px rgba(0, 0, 0, .35); }
.ch-app .ch-app-i { width: 3.9em; height: 3.9em; border-radius: 1.05em; }
.ch-app .ch-app-i svg { width: 2.1em; height: 2.1em; }
.ch-app.cf-focus .ch-app-i { box-shadow: 0 0 0 .22em var(--sun), 0 0 0 .5em rgba(246, 207, 115, .3); }
.ch-dot { min-width: 1.5em; height: 1.5em; padding: 0 .4em; border-radius: .75em; background: var(--coral); color: #fff; font: 800 .82em/1.5em var(--body); text-align: center; }
.ch-app .ch-dot { position: absolute; right: .1em; top: -.4em; font-size: 1em; }
.ch-app-i { display: grid; place-items: center; width: 2.4em; height: 2.4em; border-radius: .7em; color: #fff; flex: none; }
.ch-app-i svg { width: 1.4em; height: 1.4em; }

/* an app: a light sheet with a bar */
.ch-sheetapp { flex: 1; min-height: 0; display: flex; flex-direction: column; background: #f6f0e6; color: #1b2530; margin-top: -2.2em; padding-top: 2.2em; }
.ch-appbar { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: .4em .9em .6em; font-weight: 700; font-size: 1em; border-bottom: 1px solid rgba(27, 37, 48, .08); }
.ch-appbar button { justify-self: start; font-size: .9em; font-weight: 600; color: #2c7c8c !important; padding: .2em .1em; border-radius: .4em; }
.ch-appbar .ch-end { justify-self: end; }
.ch-appbar button.cf-focus { box-shadow: 0 0 0 .15em var(--sun); }
.ch-scroll { flex: 1; min-height: 0; overflow: auto; }
.ch-list > button, .ch-list > div.ch-row { width: 100%; display: grid; grid-template-columns: 2.5em 1fr auto; gap: .7em; align-items: center; padding: .7em 1em; border-bottom: 1px solid rgba(27, 37, 48, .07); }
.ch-list > button.cf-focus { background: rgba(246, 207, 115, .4); }
.ch-list > * > span:nth-child(2) { min-width: 0; }
.ch-av { width: 2.5em; height: 2.5em; border-radius: 50%; display: grid; place-items: center; font: 700 1.05em/1 var(--body); color: #fff; }
.ch-n { font-weight: 700; font-size: calc(.95em * var(--ts)); } .ch-s { font-size: calc(.8em * var(--ts)); color: #5a6571; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ch-list .ch-t { font-size: .72em; color: #7a8591; font-weight: 600; text-align: right; }
.ch-empty { padding: 2em 1.4em; text-align: center; color: #5a6571; font-size: .9em; line-height: 1.45; }
.ch-sec { padding: .9em 1em .3em; font-size: .7em; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #8a7a5c; }

/* messages */
.ch-thread { display: flex; flex-direction: column; gap: .4em; padding: .9em .8em; }
.ch-bub { max-width: 84%; padding: .5em .75em; border-radius: 1em; font-size: calc(.92em * var(--ts)); line-height: 1.35; background: #fff; box-shadow: 0 1px 1px rgba(0, 0, 0, .06); }
.ch-bub.ch-me { align-self: flex-end; background: #2c7c8c; color: #fff; }
.ch-bub-t { align-self: center; margin: .4em 0 .1em; font-size: .68em; color: #7a8591; font-weight: 600; }
.ch-replies { flex: none; display: grid; gap: .4em; padding: .6em .7em .7em; background: #efe6d6; border-top: 1px solid rgba(27, 37, 48, .08); }
.ch-replies > small { font-size: .68em; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #8a7a5c; }
.ch-reply { display: flex; align-items: center; gap: .5em; padding: .55em .75em; border-radius: .9em; background: #fff; border: .12em solid transparent !important; font-size: calc(.9em * var(--ts)); line-height: 1.3; }
.ch-reply.cf-focus { border-color: var(--sun) !important; }
.ch-reply .ch-canon { margin-left: auto; display: inline-flex; align-items: center; gap: .3em; padding: .15em .45em; border-radius: .4em; background: rgba(44, 124, 140, .12); color: #2c7c8c; font-size: .7em; font-weight: 800; letter-spacing: .12em; }
.ch-reply .ch-canon svg { width: 1.3em; height: .8em; }
.ch-reply .ch-cost { margin-left: auto; font-size: .78em; font-weight: 700; color: #b06a3c; }

/* contacts and the friendship meter */
.ch-meter { display: grid; grid-template-columns: repeat(11, 1fr); gap: .12em; width: 100%; }
.ch-meter i { height: .45em; border-radius: .1em; background: rgba(27, 37, 48, .12); }
.ch-meter i.ch-zero { background: rgba(27, 37, 48, .3); }
.ch-meter i.ch-pos { background: #3f9fb0; } .ch-meter i.ch-neg { background: #e07a5f; }
.ch-list .ch-meter { width: 5em; }
.ch-word { font-size: .72em; font-weight: 700; color: #5a6571; text-align: right; margin-top: .2em; }
.ch-card { padding: 1.3em 1.1em 1em; display: grid; justify-items: center; gap: .4em; text-align: center; }
.ch-card .ch-av { width: 4.4em; height: 4.4em; font-size: 1.2em; }
.ch-card h3 { margin: .2em 0 0; font-size: 1.3em; }
.ch-card .ch-meter { width: 80%; margin-top: .4em; } .ch-card .ch-meter i { height: .6em; }
.ch-card .ch-label { font: 400 1.25em/1.1 var(--hand); color: #2c7c8c; }
:root.ts-nohand .ch-card .ch-label { font: 700 .95em/1.2 var(--body); }
.ch-card .ch-why { font-size: calc(.85em * var(--ts)); color: #5a6571; line-height: 1.4; max-width: 20em; }
.ch-acts { display: flex; gap: .6em; justify-content: center; padding: .4em 1em 1em; }
.ch-act { display: grid; justify-items: center; gap: .3em; font-size: .75em; font-weight: 700; color: #2c7c8c !important; }
.ch-act span { display: grid; place-items: center; width: 3.1em; height: 3.1em; border-radius: 50%; background: rgba(44, 124, 140, .12); }
.ch-act svg { width: 1.5em; height: 1.5em; }
.ch-act.cf-focus span { box-shadow: 0 0 0 .2em var(--sun); }

/* calls */
.ch-callscreen { flex: 1; display: flex; flex-direction: column; align-items: center; padding: 3.2em 1.2em 2em; text-align: center;
  background: linear-gradient(180deg, #2c3f63, #1b2530 70%); margin-top: -2.2em; }
.ch-callscreen .ch-av { width: 5.2em; height: 5.2em; font-size: 1.3em; margin-bottom: .8em; box-shadow: 0 0 0 .5em rgba(255, 255, 255, .08); }
.ch-callscreen.ch-ringing .ch-av { animation: ch-ringpulse 1.2s ease-out infinite; }
@keyframes ch-ringpulse { from { box-shadow: 0 0 0 0 rgba(246, 207, 115, .55); } to { box-shadow: 0 0 0 1.4em rgba(246, 207, 115, 0); } }
:root.ts-still .ch-callscreen.ch-ringing .ch-av { animation: none; }
.ch-callscreen h3 { margin: 0; font-size: 1.5em; font-weight: 600; } .ch-callscreen p { margin: .4em 0 0; color: var(--ink-dim); font-size: .9em; }
.ch-callbtns { margin-top: auto; display: flex; gap: 3.2em; }
.ch-callbtns button { display: grid; justify-items: center; gap: .45em; font-size: .8em; font-weight: 600; }
.ch-callbtns button span { display: grid; place-items: center; width: 3.6em; height: 3.6em; border-radius: 50%; color: #fff; }
.ch-callbtns button svg { width: 1.6em; height: 1.6em; }
.ch-callbtns .ch-go span { background: #3fa56d; } .ch-callbtns .ch-no span { background: #e05a4f; }
.ch-callbtns button.cf-focus span { box-shadow: 0 0 0 .22em var(--sun); }

/* the map */
.ch-mapapp { flex: 1; min-height: 0; display: flex; flex-direction: column; margin-top: -2.2em; background: #86c7d2; }
.ch-mapwrap { position: relative; flex: 1; min-height: 0; touch-action: none; cursor: grab; }
.ch-mapwrap canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.ch-mapzoom { position: absolute; right: .6em; top: 2.6em; display: grid; gap: .3em; }
.ch-mapzoom span { display: grid; place-items: center; width: 1.9em; height: 1.9em; border-radius: .5em; background: rgba(255, 255, 255, .9); color: #1b2530; font: 800 .8em/1 var(--body); box-shadow: 0 1px 3px rgba(0, 0, 0, .2); }
.ch-mapsheet { flex: none; max-height: 44%; overflow: auto; background: #f6f0e6; color: #1b2530; border-radius: 1.1em 1.1em 0 0; margin-top: -1em; position: relative; box-shadow: 0 -.3em 1em rgba(0, 0, 0, .12); }
.ch-mapsheet .ch-grab { width: 2.6em; height: .28em; border-radius: .2em; background: rgba(27, 37, 48, .2); margin: .5em auto .1em; }
.ch-mk { width: 1.3em; height: 1.3em; border-radius: 50%; border: .15em solid #fff; box-shadow: 0 1px 2px rgba(0, 0, 0, .25); margin: 0 auto; }
.ch-list > button.ch-routed { background: rgba(246, 207, 115, .28); }
.ch-go-chip { font-size: .7em; font-weight: 800; color: #b07a1c; text-align: right; }

/* the wallet */
.ch-balance { padding: 1.3em 1.1em .9em; text-align: center; }
.ch-balance small { display: block; font-size: .72em; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #8a7a5c; }
.ch-balance b { display: block; margin-top: .15em; font: 400 2.7em/1 var(--serif); }
.ch-amt { font-weight: 800; font-size: .88em; text-align: right; } .ch-amt.ch-plus { color: #2f8a5c; } .ch-amt.ch-minus { color: #c05a3c; }

/* photos */
.ch-pics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; padding: 2px; }
.ch-pics button { aspect-ratio: 1; overflow: hidden; }
.ch-pics img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ch-pics button.cf-focus { outline: .2em solid var(--sun); outline-offset: -.2em; }
.ch-big { display: grid; place-items: center; height: 100%; background: #0b0f14; } .ch-big img { max-width: 100%; }

/* pages from other sessions (settings, save, load): a light sheet; rows fold for the phone's width */
.ch-page { padding: .6em .8em 1.2em; color: #1b2530; --ink: #1b2530; --ink-dim: #5a6571; --ink-faint: rgba(27, 37, 48, .45); --wash: rgba(27, 37, 48, .05); --line: rgba(27, 37, 48, .12); --plate: rgba(10, 16, 24, .7); font-size: .9em; }
.ch-page .cf-tabs { flex-wrap: wrap; gap: .2em; padding: 0; border: 0; }
.ch-page .cf-tab { padding: .45em .6em; font-size: .85em; border-radius: .6em; }
.ch-page .cf-tab::after { display: none; } .ch-page .cf-tab.cf-on { background: #2c7c8c; color: #fff !important; }
.ch-page .cf-tab-keys { display: none; }
.ch-page .cf-rows { padding-top: .6em; gap: .4em; }
.ch-page .cf-sample { color: var(--ink); }
.ch-page .cf-sample span { color: #fbf6ec; }
.ch-page .cf-keys { font-size: .85em; gap: .3em .8em; }
.ch-page .cf-seg { background: rgba(27, 37, 48, .08); } .ch-page .cf-seg button { color: #5a6571 !important; }
.ch-page .cf-seg button.cf-on { color: #fff !important; }
.ch-page .cf-range input { background: linear-gradient(90deg, #2c7c8c var(--p, 50%), rgba(27, 37, 48, .15) var(--p, 50%)); }
.ch-page .cf-range input::-webkit-slider-thumb { background: #fff; box-shadow: 0 1px 4px rgba(0, 0, 0, .35); }
.ch-page .cf-btn { color: #1b2530; } .ch-page .cf-btn.cf-go { color: var(--on-sun) !important; }
@container (max-width: 560px) {
  .cf-row { grid-template-columns: 1fr !important; gap: .5em !important; padding: .7em .8em !important; }
  .cf-row-t { font-size: 1em !important; } .cf-row-s { font-size: .82em !important; }
  .cf-range input { width: 100% !important; } .cf-range { width: 100%; }
  .cf-seg { flex-wrap: wrap; } .cf-seg button { padding: .4em .6em !important; font-size: .85em !important; }
  .cf-sample { font-size: 1em !important; } .cf-sample-bg { padding: .8em .5em !important; }
  .cf-keys { grid-template-columns: 1fr auto !important; } .cf-keys > div:nth-child(3n) { display: none; }
  .cf-slot { grid-template-columns: 2.2em 1fr !important; gap: .6em !important; padding: .7em .8em !important; }
  .cf-slot b { font-size: 1.6em !important; } .cf-slot-who { grid-column: 2; text-align: left !important; }
}

/* the camera: the phone steps aside and the screen is the viewfinder */
.ch-finder { position: absolute; inset: 0; pointer-events: none; }
.ch-finder i { position: absolute; width: 38px; height: 38px; border: 3px solid rgba(255, 255, 255, .9); }
.ch-finder i:nth-child(1) { left: 6vw; top: 8vh; border-right: 0; border-bottom: 0; border-top-left-radius: 10px; }
.ch-finder i:nth-child(2) { right: 6vw; top: 8vh; border-left: 0; border-bottom: 0; border-top-right-radius: 10px; }
.ch-finder i:nth-child(3) { left: 6vw; bottom: 8vh; border-right: 0; border-top: 0; border-bottom-left-radius: 10px; }
.ch-finder i:nth-child(4) { right: 6vw; bottom: 8vh; border-left: 0; border-top: 0; border-bottom-right-radius: 10px; }
.ch-thirds { position: absolute; left: 6vw; right: 6vw; top: 8vh; bottom: 8vh;
  background: linear-gradient(90deg, transparent calc(33.3% - .5px), rgba(255,255,255,.22) 33.3%, transparent calc(33.3% + .5px), transparent calc(66.6% - .5px), rgba(255,255,255,.22) 66.6%, transparent calc(66.6% + .5px)),
              linear-gradient(0deg, transparent calc(33.3% - .5px), rgba(255,255,255,.22) 33.3%, transparent calc(33.3% + .5px), transparent calc(66.6% - .5px), rgba(255,255,255,.22) 66.6%, transparent calc(66.6% + .5px)); }
.ch-shutter { position: absolute; left: 50%; bottom: 4vh; transform: translateX(-50%); display: flex; align-items: center; gap: 16px; padding: 8px 18px 8px 8px; border-radius: 999px; background: var(--plate); font-size: 14px; }
.ch-shutter u { width: 44px; height: 44px; border-radius: 50%; border: 4px solid #fff; box-shadow: inset 0 0 0 3px rgba(0,0,0,.35); background: #fff; }
.ch-flash { position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; }
.ch-flash.ch-on { animation: ch-flash .45s ease-out; }
@keyframes ch-flash { from { opacity: .85; } to { opacity: 0; } }
:root.ts-still .ch-flash.ch-on { animation-duration: .12s; }

/* the phone's keys, beside it, clear of the fingers (they reach 15% of --pw out) */
.ch-foothint { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); display: flex; gap: 14px; font-size: 12px; color: var(--ink); white-space: nowrap; text-shadow: 0 1px 6px rgba(0, 0, 0, .6); pointer-events: none; }
.ch-foothint span { display: inline-flex; gap: 6px; align-items: center; }
.ch-foothint .ch-key { min-width: 24px; height: 22px; font-size: 11px; border-radius: 6px; }
@media (min-width: 900px) { .ch-foothint { left: auto; right: calc(max(16px, 9vw) + clamp(240px, min(43vh, 88vw), 420px) * 1.2 + 16px); transform: none; bottom: 30px; flex-direction: column; align-items: flex-end; gap: 8px; } }

/* the app tiles' colours */
.ch-app-i.ch-map { background: linear-gradient(160deg, #9ed3c6, #3f9fb0); }
.ch-app-i.ch-msg { background: linear-gradient(160deg, #7fd3a0, #3fa56d); }
.ch-app-i.ch-tel { background: linear-gradient(160deg, #8fdc8a, #45a852); }
.ch-app-i.ch-people { background: linear-gradient(160deg, #f5b98a, #e07a5f); }
.ch-app-i.ch-wallet { background: linear-gradient(160deg, #3b4a5e, #1b2530); }
.ch-app-i.ch-cam { background: linear-gradient(160deg, #6a7686, #394350); }
.ch-app-i.ch-pics { background: linear-gradient(160deg, #f6cf73, #f2906f); }
.ch-app-i.ch-set { background: linear-gradient(160deg, #a8b3bf, #6c7885); }
.ch-app-i.ch-save { background: linear-gradient(160deg, #9fb6ff, #6f86d6); }
.ch-app-i.ch-load { background: linear-gradient(160deg, #c79be0, #9a6bbf); }
.ch-app-i.ch-other { background: linear-gradient(160deg, #e7a6d8, #c47bb4); }
`,Re=Math.PI*2,kt=t=>t-Re*Math.floor((t+Math.PI)/Re),$t=(t,a,c,l)=>Math.atan2(c-t,l-a),Mt=55*Math.PI/180,St=1.2;function zt(t,a){let c=null,l=1/0;for(const s of t){if(s.when&&!s.when())continue;const f=Math.hypot(s.x-a.x,s.y-a.y);f>(s.r??2)||s.z!=null&&a.z!=null&&Math.abs(s.z-a.z)>2.5||f>St&&Math.abs(kt($t(a.x,a.y,s.x,s.y)-a.yaw))>Mt||f<l&&(c=s,l=f)}return c}function Lt(t){return t.mode==="walk"&&!t.controller&&!t.ride?.journey?.active&&!t.cam?.showing}function me(t){return t<10?`${Math.round(t)} m`:t<1e3?`${Math.round(t/10)*10} m`:`${(t/1e3).toFixed(1)} km`}function ve(t){const a=(t%24+24)%24;let c=Math.floor(a),l=Math.round((a-c)*60);return l===60&&(l=0,c=(c+1)%24),`${c%12===0?12:c%12}:${String(l).padStart(2,"0")} ${c<12?"am":"pm"}`}function Et(t,a=null,c=null){if(t==null)return"";const l=typeof t=="number"?t:t.hour,s=typeof t=="number"?null:t.day,f=ve(l);return s==null||a==null||s===a?f:s===a-1?`Yesterday ${f}`:`${c?.(s)??`Day ${s}`} ${f}`}const Tt=Object.freeze([[-5,"Frosty"],[-4,"Frosty"],[-3,"Cold"],[-2,"Cold"],[-1,"Cold"],[0,"Stranger"],[1,"Acquaintance"],[2,"Acquaintance"],[3,"Friend"],[4,"Friend"],[5,"Close friend"]]);function De(t){const a=Math.max(-5,Math.min(5,Math.round(t??0)));return Tt.find(([c])=>c===a)[1]}function Me(t,a=!1){const c=Math.round((t??0)*100)/100,l=Math.abs(c),s=Number.isInteger(l)?String(l):l.toFixed(2);return`${c<0?"-":a&&c>0?"+":""}$${s}`}const Se={sea:"#86c7d2",lake:"#9dd3d9",sand:"#f1e3c2",dune:"#e6d6ab",grass:"#bdd79f",marsh:"#a9c9a0",woods:"#94b985",rough:"#b8d196",fairway:"#acd88f",green:"#a2d48a",bunker:"#ecdfb3",paved:"#dcd6ca"},_e={primary:[1,"#fbf1d8"],primary_link:[1,"#fbf1d8"],tertiary:[.9,"#fdf8ee"],residential:[.8,"#fdf8ee"],unclassified:[.8,"#fdf8ee"],living_street:[.8,"#fdf8ee"],service:[.6,"#fdf8ee"],track:[.5,"#efe4cc"]},Be=new Set(["footway","path","steps","pedestrian"]),we={main:"#f6cf73",side:"#f2906f",home:"#2c7c8c",place:"#5a6571"};function Ct(t){const{grid:a,features:c}=t;let l=null;const s=c.roads.map(n=>({...n,box:u(n.p)})),f=c.buildings.map(n=>({p:n.p,box:u(n.p)}));function u(n){let i=1/0,b=1/0,x=-1/0,d=-1/0;for(const[h,y]of n)h<i&&(i=h),h>x&&(x=h),y<b&&(b=y),y>d&&(d=y);return[i,b,x,d]}function k(){const n=document.createElement("canvas");n.width=a.nx,n.height=a.ny;const i=n.getContext("2d"),b=i.createImageData(a.nx,a.ny),d=a.meta.surfaces.map(h=>{const y=Se[h]??Se.grass;return[parseInt(y.slice(1,3),16),parseInt(y.slice(3,5),16),parseInt(y.slice(5,7),16)]});for(let h=0;h<a.ny;h++){const y=(a.ny-1-h)*a.nx;for(let w=0;w<a.nx;w++){const[v,L,g]=d[a.surface[h*a.nx+w]]??d[0],I=(y+w)*4;b.data[I]=v,b.data[I+1]=L,b.data[I+2]=g,b.data[I+3]=255}}return i.putImageData(b,0,0),n}function z(n,i,b,x,d={}){l??=k();const{cx:h,cy:y,mpp:w}=x,v=S=>(S-h)/w+i/2,L=S=>b/2-(S-y)/w,g=h-i/2*w,I=h+i/2*w,N=y-b/2*w,q=y+b/2*w,X=S=>S[2]>=g&&S[0]<=I&&S[3]>=N&&S[1]<=q;n.fillStyle=Se.sea,n.fillRect(0,0,i,b),n.imageSmoothingEnabled=!0,n.drawImage(l,v(a.x0),L(a.y1),a.nx*a.step/w,a.ny*a.step/w),n.fillStyle="#e3d6c0",n.strokeStyle="rgba(120, 100, 80, .35)",n.lineWidth=1;for(const S of f)X(S.box)&&(n.beginPath(),S.p.forEach(([C,R],j)=>j?n.lineTo(v(C),L(R)):n.moveTo(v(C),L(R))),n.closePath(),n.fill(),w<1.6&&n.stroke());n.lineCap="round",n.lineJoin="round";const J=S=>{n.beginPath(),S.p.forEach(([C,R],j)=>j?n.lineTo(v(C),L(R)):n.moveTo(v(C),L(R)))};for(const S of["casing","fill"])for(const C of s){if(Be.has(C.k)||!X(C.box))continue;const[R,j]=_e[C.k]??_e.service,T=Math.max(1.4,(C.w||6)*R/w);J(C),n.strokeStyle=S==="casing"?"rgba(150, 128, 100, .55)":j,n.lineWidth=S==="casing"?T+2:T,n.stroke()}if(w<3){n.setLineDash([2,3]),n.strokeStyle="rgba(120, 100, 80, .6)",n.lineWidth=1.2;for(const S of s)Be.has(S.k)&&X(S.box)&&(J(S),n.stroke());n.setLineDash([])}if(d.route?.length>1)for(const[S,C]of[["#ffffff",7],["#e8a33c",4]])n.beginPath(),d.route.forEach(([R,j],T)=>T?n.lineTo(v(R),L(j)):n.moveTo(v(R),L(j))),n.strokeStyle=S,n.lineWidth=C,n.stroke();for(const S of d.markers??[]){if((S.kind==="main"||S.kind==="side")&&d.showStory===!1)continue;const C=v(S.x),R=L(S.y),j=C<0||C>i||R<0||R>b,T=Math.min(i-12,Math.max(12,C)),G=Math.min(b-12,Math.max(12,R)),ne=S.kind==="main"?10:8;d.selected===S.id&&(n.beginPath(),n.arc(T,G,ne+7,0,Math.PI*2),n.fillStyle="rgba(246, 207, 115, .35)",n.fill()),n.beginPath(),S.kind==="main"?A(n,T,G,ne):n.arc(T,G,ne,0,Math.PI*2),n.fillStyle=we[S.kind]??we.place,n.globalAlpha=j?.7:1,n.fill(),n.lineWidth=2,n.strokeStyle="#fff",n.stroke(),n.globalAlpha=1,S.kind==="home"&&(n.fillStyle="#fff",n.fillRect(T-3,G-1,6,4),n.beginPath(),n.moveTo(T-4.5,G-.5),n.lineTo(T,G-5),n.lineTo(T+4.5,G-.5),n.fill())}if(d.player){const{x:S,y:C,yaw:R}=d.player,j=v(S),T=L(C);n.save(),n.translate(j,T),n.beginPath(),n.arc(0,0,13,0,Math.PI*2),n.fillStyle="rgba(44, 124, 140, .18)",n.fill(),n.rotate(R),n.beginPath(),n.moveTo(0,-9),n.lineTo(7,7),n.lineTo(0,3.5),n.lineTo(-7,7),n.closePath(),n.fillStyle="#2c7c8c",n.fill(),n.lineWidth=2,n.strokeStyle="#fff",n.stroke(),n.restore()}const m=i/5*w,E=[10,20,50,100,200,500,1e3,2e3].reduce((S,C)=>Math.abs(C-m)<Math.abs(S-m)?C:S),O=E/w;n.fillStyle="rgba(255, 255, 255, .8)",n.fillRect(10,b-22,O+8,14),n.fillStyle="#1b2530",n.fillRect(14,b-12,O,2),n.font="600 10px ui-sans-serif, system-ui, sans-serif",n.fillText(E>=1e3?`${E/1e3} km`:`${E} m`,16,b-14.5)}function A(n,i,b,x){for(let d=0;d<10;d++){const h=-Math.PI/2+d*Math.PI/5,y=d%2?x*.48:x*1.15,w=i+Math.cos(h)*y,v=b+Math.sin(h)*y;d?n.lineTo(w,v):n.moveTo(w,v)}n.closePath()}return{draw:z}}const At=new Set(["footway","path","steps","pedestrian"]),qt=(t,a)=>`${Math.round(t*10)},${Math.round(a*10)}`;function Pt(t){const a=new Map,c=[],l=[],s=[],f=(i,b)=>{const x=qt(i,b);let d=a.get(x);return d==null&&(d=c.length,a.set(x,d),c.push(i),l.push(b),s.push([])),d};for(const i of t){const b=At.has(i.k);for(let x=1;x<i.p.length;x++){const d=f(i.p[x-1][0],i.p[x-1][1]),h=f(i.p[x][0],i.p[x][1]);if(d===h)continue;const y=Math.hypot(c[d]-c[h],l[d]-l[h]);s[d].push({to:h,len:y,footOnly:b}),s[h].push({to:d,len:y,footOnly:b})}}const u=50,k=new Map;for(let i=0;i<c.length;i++){const b=`${Math.floor(c[i]/u)},${Math.floor(l[i]/u)}`;k.has(b)||k.set(b,[]),k.get(b).push(i)}const z=new Int32Array(c.length).fill(-1),A=[];for(let i=0;i<c.length;i++){if(z[i]>=0)continue;const b=[i];z[i]=A.length;let x=0;for(;b.length;){const d=b.pop();x++;for(const h of s[d])z[h.to]<0&&(z[h.to]=A.length,b.push(h.to))}A.push(x)}const n=A.indexOf(Math.max(...A));return{xs:c,ys:l,adj:s,buckets:k,CELL:u,size:c.length,comp:z,main:n,pieces:A.length}}function xe(t,a,c,l="foot",s=400,f=null){let u=-1,k=1/0;const z=Math.floor(a/t.CELL),A=Math.floor(c/t.CELL),n=Math.ceil(s/t.CELL);for(let i=0;i<=n;i++){for(let b=z-i;b<=z+i;b++)for(let x=A-i;x<=A+i;x++)if(Math.max(Math.abs(b-z),Math.abs(x-A))===i)for(const d of t.buckets.get(`${b},${x}`)??[]){if(l!=="foot"&&t.adj[d].every(y=>y.footOnly)||f!=null&&t.comp[d]!==f)continue;const h=Math.hypot(t.xs[d]-a,t.ys[d]-c);h<k&&(k=h,u=d)}if(u>=0&&k<(i-.5)*t.CELL)break}return u>=0&&k<=s?u:-1}function jt(){const t=[];return{get size(){return t.length},push(a,c){t.push([c,a]);let l=t.length-1;for(;l>0;){const s=l-1>>1;if(t[s][0]<=t[l][0])break;[t[s],t[l]]=[t[l],t[s]],l=s}},pop(){const a=t[0],c=t.pop();if(t.length){t[0]=c;let l=0;for(;;){const s=2*l+1,f=s+1;let u=l;if(s<t.length&&t[s][0]<t[u][0]&&(u=s),f<t.length&&t[f][0]<t[u][0]&&(u=f),u===l)break;[t[u],t[l]]=[t[l],t[u]],l=u}}return a[1]}}}function Xe(t,a,c,l="foot"){const s=()=>({points:[[a.x,a.y],[c.x,c.y]],length:Math.hypot(c.x-a.x,c.y-a.y),straight:!0});let f=xe(t,a.x,a.y,l),u=xe(t,c.x,c.y,l);if(f<0||u<0)return s();if(t.comp[f]!==t.comp[u]){const k=xe(t,a.x,a.y,l,400,t.main),z=xe(t,c.x,c.y,l,400,t.main);if(k<0||z<0)return s();f=k,u=z}return It(t,f,u,a,c,l)??s()}function It(t,a,c,l,s,f){const u=t.size,k=new Float64Array(u).fill(1/0),z=new Int32Array(u).fill(-1),A=new Uint8Array(u),n=d=>Math.hypot(t.xs[d]-t.xs[c],t.ys[d]-t.ys[c]),i=jt();for(k[a]=0,i.push(a,n(a));i.size;){const d=i.pop();if(!A[d]){if(A[d]=1,d===c)break;for(const h of t.adj[d]){if(f!=="foot"&&h.footOnly)continue;const y=k[d]+h.len;y<k[h.to]&&(k[h.to]=y,z[h.to]=d,i.push(h.to,y+n(h.to)))}}}if(!A[c])return null;const b=[];for(let d=c;d>=0;d=z[d])b.push([t.xs[d],t.ys[d]]);b.reverse(),b.unshift([l.x,l.y]),b.push([s.x,s.y]);let x=0;for(let d=1;d<b.length;d++)x+=Math.hypot(b[d][0]-b[d-1][0],b[d][1]-b[d-1][1]);return{points:b,length:x,straight:!1}}const Ot=35,Ht=12;function Nt(t,a,c){let l={i:0,t:0,off:1/0,px:t[0][0],py:t[0][1]};for(let f=1;f<t.length;f++){const[u,k]=t[f-1],[z,A]=t[f],n=z-u,i=A-k,b=n*n+i*i||1,x=Math.max(0,Math.min(1,((a-u)*n+(c-k)*i)/b)),d=u+n*x,h=k+i*x,y=Math.hypot(a-d,c-h);y<l.off&&(l={i:f,t:x,off:y,px:d,py:h})}let s=Math.hypot(t[l.i][0]-l.px,t[l.i][1]-l.py);for(let f=l.i+1;f<t.length;f++)s+=Math.hypot(t[f][0]-t[f-1][0],t[f][1]-t[f-1][1]);return{...l,left:s}}const ye=3.2,Je=70,Ue=Math.ceil(Je/ye)+2;function Rt(t){const a=t.THREE,c=new a.Shape;c.moveTo(0,.45),c.lineTo(.45,-.05),c.lineTo(.3,-.2),c.lineTo(0,.1),c.lineTo(-.3,-.2),c.lineTo(-.45,-.05),c.closePath();const l=new a.ShapeGeometry(c);l.rotateX(-Math.PI/2);const s=new a.MeshBasicMaterial({color:16174963,transparent:!0,opacity:.88,depthWrite:!1,fog:!1}),f=new a.InstancedMesh(l,s,Ue);f.name="gps-guide",f.frustumCulled=!1,f.renderOrder=2,f.count=0,t.scene.add(f);const u=new a.Matrix4,k=new a.Quaternion,z=new a.Vector3(0,1,0),A=new a.Vector3(1,1,1),n=new a.Vector3;let i=null;const b=(d,h,y)=>t.walkable?.floorAt?t.walkable.floorAt(d,h,y+1.5):t.grid.heightAt(d,h);function x(d){const h=i.points;let y=d.i,w=d.px,v=d.py,L=ye*.6,g=0,I=d.z??b(w,v,0);for(;y<h.length&&g<Ue;){const[N,q]=h[y],X=Math.hypot(N-w,q-v);if(L<=X&&X>0){const J=L/X,m=w+(N-w)*J,H=v+(q-v)*J;if(w=m,v=H,L=ye,I=b(m,H,I),k.setFromAxisAngle(z,-Math.atan2(N-m,q-H)),n.set(m,I+.06,-H),u.compose(n,k,A),f.setMatrixAt(g++,u),g*ye>Je)break}else L-=X,w=N,v=q,y++}f.count=g,f.instanceMatrix.needsUpdate=!0}return{get on(){return!!i},get route(){return i},set(d,{onArrive:h=()=>{},onStray:y=()=>{}}={}){i={points:d,onArrive:h,onStray:y}},clear(){i=null,f.count=0},update(d,h,y){if(!i)return null;const w=Nt(i.points,d,h);if(w.left<Ht){const v=i;return this.clear(),v.onArrive(),0}return w.off>Ot?(i.onStray(),w.left):(x({...w,z:y}),w.left)},dispose(){t.scene.remove(f),l.dispose(),s.dispose()}}}const ze=t=>t==="speaker"?"speaker":"ear";function Dt({emit:t=()=>{}}={}){let a=null;const c=()=>a?{id:a.id,who:a.who,name:a.name,mode:a.mode,state:a.state,dir:a.dir,talk:a.talk}:null,l=()=>t({state:a.state,mode:a.mode,who:a.who,id:a.id,dir:a.dir,talk:a.talk});return{get call(){return c()},get state(){return a?.state??null},get mode(){return a?.mode??null},get live(){return a?.state==="live"},get ringing(){return a?.state==="ringing"},get canHangUp(){return a?.state==="ringing"||a?.state==="live"&&!a.talk},get t(){return a?.state==="live"?a.t:0},ring({id:s,who:f,name:u,mode:k,talk:z=!1}){return a={id:s,who:f,name:u,mode:ze(k),state:"ringing",dir:"in",t:0,talk:!!z},l(),c()},dial({who:s,name:f,mode:u}){return a={id:null,who:s,name:f,mode:ze(u),state:"ringing",dir:"out",t:0,talk:!1},l(),c()},answer({id:s=null,mode:f=null,talk:u=null}={}){return!a||a.state!=="ringing"?!1:(s!=null&&(a.id=s),u!=null&&(a.talk=!!u),f!=null&&(a.mode=ze(f)),a.state="live",a.t=0,l(),!0)},toggle(){return a?.state!=="live"?!1:(a.mode=a.mode==="ear"?"speaker":"ear",l(),!0)},end(s=null){return!a||a.state==="ended"?!1:(a.state="ended",a.why=s,l(),!0)},tick(s){a?.state==="live"&&(a.t+=s)}}}function We(t,a){return t==="live"?{overlay:!1,chip:!0}:t==="ringing"?{overlay:a,chip:!1}:{overlay:a,chip:!1}}const Le=Object.freeze({toggle:"v",hangUp:"h"}),Y=(t,a=!1)=>`<svg viewBox="0 0 24 24" ${a?'fill="currentColor"':'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'} aria-hidden="true">${t}</svg>`,Q={map:Y('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>'),msg:Y('<path d="M12 3.5c-5 0-9 3.3-9 7.4 0 2.3 1.3 4.4 3.3 5.8-.2 1.3-.9 2.6-1.9 3.6 2 0 3.8-.7 5.1-1.8.8.2 1.6.3 2.5.3 5 0 9-3.3 9-7.4S17 3.5 12 3.5z"/>',!0),tel:Y('<path d="M6.6 3.5 9.3 4l1.2 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.2.5 2.7c-.2 1.6-1.6 2.6-3.2 2.4A16.5 16.5 0 0 1 4.1 6.7c-.2-1.6.8-3 2.5-3.2z"/>',!0),people:Y('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.5-3.4 3-5.4 6-5.4s5.5 2 6 5.4"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 13.8c2.4.2 4 1.9 4.5 4.6"/>'),wallet:Y('<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9.5h13a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2H3"/><circle cx="15.5" cy="12.3" r="1" fill="currentColor"/>'),cam:Y('<path d="M3.5 8.5h3l1.7-2.5h7.6l1.7 2.5h3v10.5h-17z"/><circle cx="12" cy="13.2" r="3.6"/>'),pics:Y('<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M4 17l5-5 4 4 3-3 4 4"/><circle cx="16" cy="9" r="1.6" fill="currentColor"/>'),set:Y('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.2 7.5l2.1 1.2M17.7 15.3l2.1 1.2M4.2 16.5l2.1-1.2M17.7 8.7l2.1-1.2M5 12H2.8M21.2 12H19"/>'),save:Y('<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'),load:Y('<path d="M4 7h6l2 2h8v10H4z"/><path d="M12 12v5M9.5 14.5 12 17l2.5-2.5"/>'),other:Y('<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>'),call:Y('<path d="M6.6 3.5 9.3 4l1.2 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.2.5 2.7c-.2 1.6-1.6 2.6-3.2 2.4A16.5 16.5 0 0 1 4.1 6.7c-.2-1.6.8-3 2.5-3.2z"/>',!0),end:Y('<path d="M3 13.5c5-4.5 13-4.5 18 0l-1.6 2.6-3.6-1.2v-2.6a10 10 0 0 0-5.6 0v2.6l-3.6 1.2z"/>',!0),bars:'<svg viewBox="0 0 18 11" fill="currentColor" aria-hidden="true"><rect x="0" y="7" width="3" height="4" rx=".6"/><rect x="5" y="5" width="3" height="6" rx=".6"/><rect x="10" y="2.5" width="3" height="8.5" rx=".6"/><rect x="15" y="0" width="3" height="11" rx=".6" opacity=".45"/></svg>',battery:'<svg viewBox="0 0 26 12" fill="none" aria-hidden="true"><rect x=".75" y=".75" width="21.5" height="10.5" rx="3" stroke="currentColor" stroke-width="1.5" opacity=".6"/><rect x="2.6" y="2.6" width="14" height="6.8" rx="1.6" fill="currentColor"/><rect x="23.4" y="4" width="1.8" height="4" rx=".8" fill="currentColor" opacity=".6"/></svg>'},_t=`<svg viewBox="0 0 130 205" aria-hidden="true"><g class="ch-skin">
  <ellipse cx="26" cy="200" rx="30" ry="26"/>
  <rect x="5" y="104" width="22" height="14" rx="7"/><rect x="3" y="121" width="24" height="14" rx="7"/>
  <rect x="4" y="138" width="23" height="14" rx="7"/><rect x="7" y="155" width="20" height="13" rx="6.5"/></g>
  <g class="ch-shade"><rect x="5" y="113" width="10" height="5" rx="2.5"/><rect x="3" y="130" width="10" height="5" rx="2.5"/><rect x="4" y="147" width="10" height="5" rx="2.5"/></g></svg>`,Bt=`<svg viewBox="0 0 130 205" aria-hidden="true"><g class="ch-skin"><rect x="110" y="128" width="17" height="30" rx="8.5" transform="rotate(14 118 143)"/></g>
  <rect class="ch-shade" x="111" y="148" width="15" height="6" rx="3" transform="rotate(14 118 143)"/></svg>`,Fe=["#e5a44f","#3f9fb0","#e07a5f","#6aa76a","#c47bb4","#6f86d6","#e0895a","#4fae94"],te=t=>{let a=0;for(const c of String(t))a=a*31+c.charCodeAt(0)>>>0;return Fe[a%Fe.length]},Ve=t=>`<div class="ch-meter">${Array.from({length:11},(a,c)=>{const l=c-5;return`<i class="${l===0?"ch-zero":t>0&&l>0&&l<=t?"ch-pos":t<0&&l<0&&l>=t?"ch-neg":""}"></i>`}).join("")}</div>`,Xt=15;function Ut(t,a,{prefs:c,notify:l=()=>{},still:s=()=>{},onChange:f=()=>{},objective:u=()=>null}={}){const k=a.ownerDocument,z=k.createElement("div");z.className="ch-held ch-away",z.innerHTML=`<div class="ch-hand">${_t}</div>
    <div class="ch-phone"><div class="ch-screen"><div class="ch-island"></div>
      <div class="ch-status"><span class="ch-time"></span><span>${Q.bars}${Q.battery}</span></div>
      <div class="ch-body"></div><div class="ch-bar"></div></div></div>
    <div class="ch-hand ch-front">${Bt}</div>`,a.appendChild(z);const A=k.createElement("div");A.className="ch-finder ch-gone",A.innerHTML='<i></i><i></i><i></i><i></i><div class="ch-thirds"></div><div class="ch-shutter"><u></u><span><b>Space</b> take a photo · <b>Esc</b> back</span></div><div class="ch-flash"></div>',a.appendChild(A);const n=z.querySelector(".ch-screen"),i=z.querySelector(".ch-body"),b=z.querySelector(".ch-time"),x=lt(z);let d={},h=[],y=null,w="",v=!1,L=[],g=null,I=[],N=null,q=null,X=-1,J=null,m=null,H=null,E=null,O=null,S=null,C=!0;const R=dt(c),j=k.createElement("div");j.className="ch-callchip ch-gone",j.setAttribute("role","status"),j.innerHTML=`<span class="ch-av"></span><span class="ch-cn"></span><span class="ch-ct">0:00</span>
    <button class="ch-cb" data-a="mode" type="button"><span class="ch-key">V</span><span class="ch-ml"></span></button>
    <button class="ch-cb ch-cend" data-a="end" type="button"><span class="ch-key">H</span>Hang up</button>`,a.appendChild(j),j.querySelector('[data-a="mode"]').addEventListener("click",()=>ce()),j.querySelector('[data-a="end"]').addEventListener("click",()=>re());const T=Dt({emit:e=>{G(),dispatchEvent(new CustomEvent("ts:phone",{detail:e}))}});function G(){const e=We(T.state,v).chip;if(j.classList.toggle("ch-gone",!e),!e)return;const r=T.call;j.querySelector(".ch-av").style.background=te(r.who),j.querySelector(".ch-av").textContent=(r.name??"?").charAt(0),j.querySelector(".ch-cn").textContent=r.name??"",j.querySelector(".ch-ml").textContent=r.mode==="ear"?"Speaker":"To your ear",j.querySelector('[data-a="end"]').classList.toggle("ch-gone",!T.canHangUp),j.classList.toggle("ch-speaker",r.mode==="speaker"),ne()}function ne(){const e=Math.floor(T.t);j.querySelector(".ch-ct").textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function ce(){return T.toggle()}const ee=()=>t.sky?.hour??12,K=(e,...r)=>{try{return d[e]?.(...r)}catch(o){console.warn(`phone source ${e}:`,o);return}},U=e=>{const r=K(e);return Array.isArray(r)?r:[]},pe=e=>Et(e,K("today")??null,d.dayName?.bind(d)),he=()=>({x:t.walker.x,y:t.walker.y,yaw:t.walker.yaw}),W=()=>L[L.length-1]??{app:"home"};function Ze(){const e=U("threads").reduce((o,p)=>o+(p.unread??0),0),r=U("calls").filter(o=>o.state==="missed"&&!o.seen).length;return[{id:"map",label:"Map",icon:"map"},{id:"messages",label:"Messages",icon:"msg",dot:e},{id:"calls",label:"Phone",icon:"tel",dot:r},{id:"contacts",label:"Contacts",icon:"people"},{id:"wallet",label:"Wallet",icon:"wallet"},{id:"camera",label:"Camera",icon:"cam"},{id:"photos",label:"Photos",icon:"pics"},{id:"settings",label:"Settings",icon:"set"},...h.map(o=>({id:`page:${o.id}`,label:o.label,icon:Q[o.icon]?o.icon:o.id==="save"?"save":o.id==="load"?"load":"other"}))]}const Z=(e,r="Home",o="")=>`<div class="ch-appbar"><button data-back>‹ ${M(r)}</button><span>${M(e)}</span>${o}</div>`,fe={home(){n.classList.remove("ch-on-light");const e=U("markers").find($=>$.kind==="main"),r=e?.sub??u()??e?.label,o=E?`<span>GPS on · ${M(E.label)} · ${me(E.left??0)}</span>`:"";i.innerHTML=`<div class="ch-home"><div class="ch-bigtime">${ve(ee()).replace(/ [ap]m$/,"")}</div>
        ${w?`<div class="ch-day">${M(w)}</div>`:""}
        ${r?`<div class="ch-widget"><small>next</small><b>${M(r)}</b>${o}</div>`:o?`<div class="ch-widget">${o}</div>`:""}
        <div class="ch-grid">${Ze().map($=>`<button class="ch-app" data-app="${M($.id)}"><span class="ch-app-i ch-${$.icon}">${Q[$.icon]}</span>${M($.label)}${$.dot?`<span class="ch-dot">${$.dot}</span>`:""}</button>`).join("")}</div></div>`;const p=[...i.querySelectorAll(".ch-app")];for(const $ of p)$.addEventListener("click",()=>le($.dataset.app));return{items:p,grid:4}},map(){n.classList.add("ch-on-light");const e=he(),r=U("markers"),o=c.get("markers")!==!1,p=r.filter(P=>o||P.kind!=="main"&&P.kind!=="side");O??={cx:e.x,cy:e.y,mpp:1.6},i.innerHTML=`<div class="ch-mapapp"><div class="ch-mapwrap"><canvas></canvas><div class="ch-mapzoom"><span>+</span><span>−</span></div></div>
        <div class="ch-mapsheet"><div class="ch-grab"></div>
        ${E?`<div class="ch-list"><button data-stop><span class="ch-mk" style="background:#e8a33c"></span><span><div class="ch-n">Stop the route</div><div class="ch-s">${M(E.label)} · ${me(E.left??0)} to go</div></span><span></span></button></div>`:""}
        <div class="ch-list">${p.map(P=>`<button data-m="${M(P.id)}" class="${E?.id===P.id?"ch-routed":""}"><span class="ch-mk" style="background:${we[P.kind]??we.place}"></span>
          <span><div class="ch-n">${M(P.label)}</div><div class="ch-s">${M(P.sub??(P.kind==="main"?"Main story":P.kind==="side"?"Side story":""))}</div></span>
          <span class="ch-t">${me(Math.hypot(P.x-e.x,P.y-e.y))}${E?.id===P.id?'<div class="ch-go-chip">GPS</div>':""}</span></button>`).join("")}
        ${p.length?"":`<div class="ch-empty">${o?"Nowhere marked yet.":"Story markers are hidden (Settings, Story)."}</div>`}</div></div></div>`;const $=i.querySelector("canvas"),D=i.querySelector(".ch-mapwrap"),ae=[...i.querySelectorAll(".ch-mapsheet button")];for(const P of ae)P.dataset.stop!=null?P.addEventListener("click",()=>{je(),B()}):P.addEventListener("click",()=>{const ge=p.find(rt=>rt.id===P.dataset.m);ge&&qe(ge)});const[$e,it]=i.querySelectorAll(".ch-mapzoom span");$e.addEventListener("click",()=>de(-1)),it.addEventListener("click",()=>de(1));let oe=null;return D.addEventListener("pointerdown",P=>{oe=[P.clientX,P.clientY],D.setPointerCapture?.(P.pointerId)}),D.addEventListener("pointermove",P=>{oe&&(O.cx-=(P.clientX-oe[0])*O.mpp,O.cy+=(P.clientY-oe[1])*O.mpp,oe=[P.clientX,P.clientY],C=!0)}),D.addEventListener("pointerup",()=>{oe=null}),D.addEventListener("wheel",P=>{P.preventDefault(),de(Math.sign(P.deltaY))},{passive:!1}),J??=Ct(t),C=!0,{items:ae,after:()=>{const P=p.find(ge=>ge.id===x.el?.dataset?.m);P&&(S=P.id,O.cx=(P.x+e.x)/2,O.cy=(P.y+e.y)/2,et(P,e),C=!0)},canvas:$,marks:p,showStory:o}},messages(){n.classList.add("ch-on-light");const e=U("threads");i.innerHTML=`<div class="ch-sheetapp">${Z("Messages")}<div class="ch-scroll"><div class="ch-list">${e.map(o=>{const p=o.texts?.[o.texts.length-1];return`<button data-t="${M(o.id)}"><span class="ch-av" style="background:${te(o.who)}">${M((o.name??"?").charAt(0))}</span>
          <span><div class="ch-n">${M(o.name)}</div><div class="ch-s">${M(o.replies?.length?"Waiting for your reply":p?.from==="me"?`You: ${p.text}`:p?.text??"")}</div></span>
          <span class="ch-t">${M(pe(p?.at))}${o.unread?`<div style="margin-top:.3em"><span class="ch-dot">${o.unread}</span></div>`:""}</span></button>`}).join("")}</div>${e.length?"":'<div class="ch-empty">No messages yet.</div>'}</div></div>`;const r=[...i.querySelectorAll("[data-back], .ch-list button")];i.querySelector("[data-back]").addEventListener("click",F);for(const o of i.querySelectorAll(".ch-list button"))o.addEventListener("click",()=>le("thread",o.dataset.t));return{items:r,first:r.length>1?1:0}},thread(e){n.classList.add("ch-on-light");const r=U("threads").find(D=>D.id===e);if(!r)return fe.messages();K("read",e);let o=null;i.innerHTML=`<div class="ch-sheetapp">${Z(r.name,"Messages")}
        <div class="ch-scroll"><div class="ch-thread">${(r.texts??[]).map(D=>{const ae=pe(D.at),$e=ae&&ae!==o?`<div class="ch-bub-t">${M(ae)}</div>`:"";return o=ae,`${$e}<div class="ch-bub${D.from==="me"?" ch-me":""}">${M(D.text)}</div>`}).join("")}</div></div>
        ${r.replies?.length?`<div class="ch-replies"><small>Reply</small>${r.replies.map(D=>`<button class="ch-reply" data-r="${M(D.id)}"><span>${M(D.text)}</span>${D.canon?`<span class="ch-canon" title="What happened in the show">${st}CANON</span>`:""}${D.cost?`<span class="ch-cost">${Me(D.cost)}</span>`:""}</button>`).join("")}</div>`:""}</div>`;const p=i.querySelector(".ch-scroll");p.scrollTop=p.scrollHeight,i.querySelector("[data-back]").addEventListener("click",F);const $=[...i.querySelectorAll(".ch-reply")];for(const D of $)D.addEventListener("click",()=>{K("reply",e,D.dataset.r),B()});return f(),{items:[i.querySelector("[data-back]"),...$],first:$.length?1:0}},calls(){n.classList.add("ch-on-light");const e=U("calls");for(const p of e)p.state==="missed"&&(p.seen=!0);const r=U("contacts").filter(p=>p.canCall);i.innerHTML=`<div class="ch-sheetapp">${Z("Phone")}<div class="ch-scroll">
        ${r.length?`<div class="ch-sec">Call</div><div class="ch-list">${r.map(p=>`<button data-call="${M(p.id)}"><span class="ch-av" style="background:${te(p.id)}">${M(p.name.charAt(0))}</span><span><div class="ch-n">${M(p.name)}</div></span><span class="ch-t">${Q.call.replace("<svg",'<svg style="width:1.4em;color:#3fa56d"')}</span></button>`).join("")}</div>`:""}
        <div class="ch-sec">Recent</div><div class="ch-list">${e.map(p=>`<div class="ch-row"><span class="ch-av" style="background:${te(p.who)}">${M((p.name??"?").charAt(0))}</span>
          <span><div class="ch-n" style="${p.state==="missed"?"color:#c05a3c":""}">${M(p.name)}</div><div class="ch-s">${M({missed:"Missed",answered:p.dir==="out"?"Outgoing":"Incoming",ignored:"Declined","no-answer":"No answer"}[p.state]??"")}</div></span>
          <span class="ch-t">${M(pe(p.at))}</span></div>`).join("")}</div>${e.length?"":'<div class="ch-empty">No calls yet.</div>'}</div></div>`,i.querySelector("[data-back]").addEventListener("click",F);const o=[...i.querySelectorAll("[data-call]")];for(const p of o)p.addEventListener("click",()=>Ie(p.dataset.call));return f(),{items:[i.querySelector("[data-back]"),...o],first:o.length?1:0}},contacts(){n.classList.add("ch-on-light");const e=U("contacts");i.innerHTML=`<div class="ch-sheetapp">${Z("Contacts")}<div class="ch-scroll"><div class="ch-list">${e.map(o=>`<button data-p="${M(o.id)}">
        <span class="ch-av" style="background:${te(o.id)}">${M(o.name.charAt(0))}</span><span><div class="ch-n">${M(o.name)}</div><div class="ch-s">${M(o.why??"")}</div></span>
        <span>${Ve(o.bond??0)}<div class="ch-word">${De(o.bond)}</div></span></button>`).join("")}</div>
        ${e.length?"":'<div class="ch-empty">Nobody yet. The people you meet this summer will be here.</div>'}</div></div>`,i.querySelector("[data-back]").addEventListener("click",F);const r=[...i.querySelectorAll(".ch-list button")];for(const o of r)o.addEventListener("click",()=>le("contact",o.dataset.p));return{items:[i.querySelector("[data-back]"),...r],first:r.length?1:0}},contact(e){n.classList.add("ch-on-light");const r=U("contacts").find($=>$.id===e);if(!r)return fe.contacts();const o=U("threads").find($=>$.who===e);i.innerHTML=`<div class="ch-sheetapp">${Z("","Contacts")}<div class="ch-scroll">
        <div class="ch-card"><span class="ch-av" style="background:${te(r.id)}">${M(r.name.charAt(0))}</span><h3>${M(r.name)}</h3>
          <div class="ch-label">${De(r.bond)}</div>${Ve(r.bond??0)}${r.why?`<div class="ch-why">${M(r.why)}</div>`:""}</div>
        <div class="ch-acts">${r.canCall?`<button class="ch-act" data-a="call"><span>${Q.call}</span>Call</button>`:""}${o?`<button class="ch-act" data-a="msg"><span>${Q.msg}</span>Message</button>`:""}</div></div></div>`,i.querySelector("[data-back]").addEventListener("click",F);const p=[...i.querySelectorAll(".ch-act")];for(const $ of p)$.addEventListener("click",()=>$.dataset.a==="call"?Ie(e):le("thread",o.id));return{items:[i.querySelector("[data-back]"),...p],first:p.length?1:0}},wallet(){n.classList.add("ch-on-light");const e=K("wallet")??{money:0,ledger:[]},r=[...e.ledger??[]].reverse();return i.innerHTML=`<div class="ch-sheetapp">${Z("Wallet")}<div class="ch-scroll">
        <div class="ch-balance"><small>Balance</small><b>${Me(e.money)}</b></div>
        <div class="ch-sec">Recent</div><div class="ch-list">${r.map(o=>`<div class="ch-row"><span class="ch-av" style="background:${o.amount>=0?"#3fa56d":"#e0895a"}">${o.amount>=0?"+":"−"}</span>
          <span><div class="ch-n">${M(o.what)}</div><div class="ch-s">${M([o.for?`for ${o.for}`:"",pe(o.at)].filter(Boolean).join(" · "))}</div></span>
          <span class="ch-amt ${o.amount>=0?"ch-plus":"ch-minus"}">${Me(o.amount,!0)}</span></div>`).join("")}</div>
        ${r.length?"":'<div class="ch-empty">Nothing earned or spent yet.</div>'}</div></div>`,i.querySelector("[data-back]").addEventListener("click",F),{items:[i.querySelector("[data-back]")]}},photos(){n.classList.add("ch-on-light"),i.innerHTML=`<div class="ch-sheetapp">${Z("Photos")}<div class="ch-scroll">${I.length?`<div class="ch-pics">${I.map((r,o)=>`<button data-i="${o}"><img alt="Photo ${o+1}" src="${r.url}"></button>`).join("")}</div>`:'<div class="ch-empty">No photos yet. Open the camera and press Space.</div>'}</div></div>`,i.querySelector("[data-back]").addEventListener("click",F);const e=[...i.querySelectorAll(".ch-pics button")];for(const r of e)r.addEventListener("click",()=>le("photo",Number(r.dataset.i)));return{items:[i.querySelector("[data-back]"),...e],first:e.length}},photo(e){return i.innerHTML=`<div class="ch-sheetapp">${Z("","Photos")}<div class="ch-scroll ch-big"><img alt="Photo" src="${I[e].url}"></div></div>`,i.querySelector("[data-back]").addEventListener("click",F),{items:[i.querySelector("[data-back]")]}},settings(){return Ce(R,"Settings",!0)},incoming(){n.classList.remove("ch-on-light");const e=N;i.innerHTML=`<div class="ch-callscreen ch-ringing"><span class="ch-av" style="background:${te(e.who)}">${M(e.name.charAt(0))}</span><h3>${M(e.name)}</h3><p>Incoming call</p>
        <div class="ch-callbtns"><button class="ch-no" data-a="no"><span>${Q.end}</span>Decline</button><button class="ch-go" data-a="go"><span>${Q.call}</span>Answer</button></div></div>`;const[r,o]=i.querySelectorAll(".ch-callbtns button");return r.addEventListener("click",()=>ie("ignore")),o.addEventListener("click",()=>ie("answer")),{items:[r,o],first:1,row:!0}},oncall(){n.classList.remove("ch-on-light");const e=q,r=Math.floor(e.t??0);i.innerHTML=`<div class="ch-callscreen"><span class="ch-av" style="background:${te(e.who)}">${M(e.name.charAt(0))}</span><h3>${M(e.name)}</h3>
        <p class="ch-calltime">${e.state==="dialling"?"Calling…":e.state==="no-answer"?"No answer":`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`}</p>
        <div class="ch-callbtns"><button class="ch-no"><span>${Q.end}</span>End</button></div></div>`;const o=i.querySelector(".ch-no");return o.addEventListener("click",re),{items:[o]}}};function Ce(e,r,o=!1){n.classList.add("ch-on-light"),i.innerHTML=`<div class="ch-sheetapp">${Z(r)}<div class="ch-scroll"><div class="ch-page"></div>${o&&y?'<div class="ch-page" style="padding-top:0"><button class="cf-btn" data-quit style="width:100%">Quit to title</button></div>':""}</div></div>`,i.querySelector("[data-back]").addEventListener("click",F);const p=i.querySelector(".ch-page");g=e.mount(p,{store:c.store,settings:c.settings,close:V.close,toast:D=>l({kind:"info",text:D}),back:F})??null;const $=i.querySelector("[data-quit]");return $?.addEventListener("click",()=>{V.close(),y()}),{items:[],page:!0,quitBtn:$}}let _=null;function B(){g?.destroy?.(),g=null;const e=W();if(e.app==="camera"){z.classList.add("ch-away"),A.classList.remove("ch-gone"),f();return}A.classList.add("ch-gone"),z.classList.remove("ch-away"),b.textContent=ve(ee()),X=Math.round(ee()*60);const r=e.app.startsWith("page:")?"page":e.app;_=r==="page"?Ce(h.find(o=>`page:${o.id}`===e.app),h.find(o=>`page:${o.id}`===e.app)?.label??""):(fe[r]??fe.home)(e.arg),_.items.length?(x.bind(_.items),x.set(Math.min(_.first??0,_.items.length-1)),_.after?.()):x.clear(),f()}function le(e,r){if(e==="camera"){L.push({app:e}),B();return}L.push({app:e,arg:r}),B()}function F(){L.pop(),B()}function de(e){O&&(O.mpp=Math.min(12,Math.max(.35,O.mpp*(e>0?1.5:1/1.5))),C=!0)}function et(e,r){const o=Math.hypot(e.x-r.x,e.y-r.y),p=i.querySelector(".ch-mapwrap canvas"),$=Math.max(80,Math.min(p?.clientWidth??280,p?.clientHeight??300)-60);O.mpp=Math.min(12,Math.max(.6,o/$))}function Ae(){if(!v||W().app!=="map"||!_?.canvas||!C)return;const e=_.canvas,r=e.clientWidth,o=e.clientHeight;if(!r||!o)return;const p=Math.min(2,globalThis.devicePixelRatio||1);e.width!==Math.round(r*p)&&(e.width=Math.round(r*p),e.height=Math.round(o*p));const $=e.getContext("2d");$.setTransform(p,0,0,p,0,0),J.draw($,r,o,O,{player:he(),markers:_.marks,route:E?.points,selected:S,showStory:_.showStory}),C=!1}function qe(e){m??=Pt(t.features.roads),H??=Rt(t);const r=he(),o=t.controller?"bike":"foot",p=Xe(m,r,e,o);E={id:e.id,label:e.label,points:p.points,left:p.length,mode:o,straight:p.straight,m:e},H.set(p.points,{onArrive:()=>{const $=E;E=null,l({kind:"info",text:`You’re there: ${$.label}`}),dispatchEvent(new CustomEvent("ts:arrived",{detail:{id:$.id}}))},onStray:()=>Pe()}),l({kind:"info",text:`Route to ${e.label}: ${me(p.length)}${p.straight?" (no road: straight line)":""}`}),V.close()}let ue=0;function Pe(){if(!E||ue>0)return;ue=1;const e=he(),r=Xe(m,e,E.m,E.mode);E.points=r.points,E.left=r.length,H.set(r.points,{onArrive:()=>{const o=E;E=null,l({kind:"info",text:`You’re there: ${o.label}`}),dispatchEvent(new CustomEvent("ts:arrived",{detail:{id:o.id}}))},onStray:()=>Pe()})}function je(){E=null,H?.clear()}function ie(e){const r=N;if(r){if(N=null,L=L.filter(o=>o.app!=="incoming"),e==="answer"){K("answer",r.id),q={...r,t:0,state:"on"},T.answer({mode:r.mode,talk:r.talk}),v?V.close():G();return}K("ignore",r.id),T.end(e==="missed"?"missed":"declined"),v&&B()}}async function Ie(e){const r=U("contacts").find($=>$.id===e);q={id:null,who:e,name:r?.name??e,t:0,state:"dialling"},T.dial({who:e,name:q.name}),L.push({app:"oncall"}),B();const o=q;let p;try{p=await Promise.resolve(K("call",e))}catch{p=null}setTimeout(()=>{if(q===o){if(p?.answered){q.state="on",q.id=p.id??null,T.answer({id:q.id,mode:p.mode,talk:p.talk}),L=L.filter($=>$.app!=="oncall"),v?V.close():G();return}q.state="no-answer",setTimeout(()=>{q===o&&re("no-answer")},1500),v&&W().app==="oncall"&&B()}},1600)}function re(e="hung-up"){if(e==="hung-up"&&T.live&&!T.canHangUp)return!1;q?.state==="on"&&K("hangUp",q.id),q=null,T.end(e),L=L.filter(r=>r.app!=="oncall"),v&&B()}function tt(e=null){return!q||e!=null&&q.id!=null&&q.id!==e?!1:(q=null,T.end("over"),L=L.filter(r=>r.app!=="oncall"),v&&B(),!0)}function ke(){const e=t.renderer.domElement;if(!e.width||!e.height)return null;let r=K("shutter",{game:t});if(!r){t.render();const p=k.createElement("canvas");p.width=480,p.height=Math.round(480*e.height/e.width),p.getContext("2d").drawImage(e,0,0,p.width,p.height),r=p.toDataURL("image/jpeg",.86)}I.push({url:r,at:ee()}),I.length>24&&I.shift();const o=A.querySelector(".ch-flash");return o.classList.remove("ch-on"),o.offsetWidth,o.classList.add("ch-on"),dispatchEvent(new CustomEvent("ts:photo",{detail:{at:ee()}})),r}function be(e,r){const o=_.items.length,p=_.grid;let $=x.index+e+r*p;($<0||$>=o)&&($=Math.max(0,Math.min(o-1,$))),x.set($)}function Oe(e){if(T.live&&!v)return e==="y"?(ce(),!0):e==="back"?(re(),!0):e==="view"||e==="start";if(!v)return!1;const r=W().app;return r==="camera"?e==="ok"||e==="x"?(ke(),!0):e==="back"||e==="view"?(F(),!0):!1:e==="view"||e==="start"?(V.close(),!0):g?.intent?.(e)?!0:_?.page?e==="down"&&_.quitBtn?(x.bind([_.quitBtn]),!0):e==="ok"&&x.el===_.quitBtn?(_.quitBtn.click(),!0):(e==="back"&&F(),!0):(_?.grid?e==="left"?be(-1,0):e==="right"?be(1,0):e==="up"?be(0,-1):e==="down"&&be(0,1):_?.row&&(e==="left"||e==="right")?x.move(e==="left"?-1:1):(e==="up"||e==="down")&&(x.move(e==="up"?-1:1),_?.after?.()),r==="map"&&(e==="tabPrev"?de(1):e==="tabNext"?de(-1):(e==="left"||e==="right")&&(O.cx+=(e==="left"?-60:60)*O.mpp,C=!0)),e==="ok"?x.el?.click():e==="back"&&(r==="home"?V.close():r==="incoming"?ie("ignore"):F()),!0)}function at(e){const r=e.key;if(T.live&&!v){const p=r.toLowerCase();return p===Le.toggle&&!e.repeat?(ce(),!0):p===Le.hangUp?(e.repeat||re(),!0):r==="Tab"||r==="Escape"||p==="m"?(e.preventDefault(),!0):!1}if(T.ringing&&N&&!v&&r.toLowerCase()===Le.hangUp&&!e.repeat)return ie("ignore"),!0;if(!v)return r==="Tab"||r==="Escape"?(e.preventDefault(),V.open(),!0):r==="m"||r==="M"?(V.open("map"),!0):!1;if(r==="Tab")return e.preventDefault(),W().app==="camera"?F():V.close(),!0;if(W().app==="camera"&&r===" ")return e.preventDefault(),ke(),!0;const o=ot(r);return W().app==="camera"&&!["ok","back"].includes(o)||!o?!1:(e.preventDefault(),Oe(o))}function nt(e){if(ue=Math.max(0,ue-e),N&&(N.t+=e,N.t>Xt&&(l({kind:"call",from:N.name,text:"Missed call",missed:!0}),ie("missed"))),T.live){const r=Math.floor(T.t);T.tick(e),Math.floor(T.t)!==r&&ne()}if(q?.state==="on"){const r=Math.floor(q.t);if(q.t+=e,v&&W().app==="oncall"&&Math.floor(q.t)!==r){const o=i.querySelector(".ch-calltime"),p=Math.floor(q.t);o&&(o.textContent=`${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`)}}if(H&&E&&(t.mode==="walk"||t.controller)){const o=H.update(t.walker.x,t.walker.y,t.walker.z);E&&o!=null&&(E.left=o)}v&&W().app==="map"&&(C=!0,Ae()),v&&W().app!=="camera"&&Math.round(ee()*60)!==X&&(b.textContent=ve(ee()),X=Math.round(ee()*60),W().app==="home"&&B())}const V={get isOpen(){return v},get app(){return v?W().app:null},get photos(){return I.slice()},get route(){return E?{id:E.id,label:E.label,left:E.left,points:E.points.length,straight:E.straight}:null},get ringing(){return N?{...N}:null},get inCall(){return q?{...q}:null},get call(){return T.call},answer(){ie("answer")},toggleMode:ce,hangUp:()=>re(),endCall:tt,get screenShown(){return v&&We(T.state,v).overlay},open(e="home",r){if(T.live)return!1;v||(v=!0,s()),L=[],N?L.push({app:"incoming"}):q?L.push({app:"oncall"}):e!=="home"&&L.push({app:e,arg:r}),B()},close(){v=!1,g?.destroy?.(),g=null,z.classList.add("ch-away"),A.classList.add("ch-gone"),x.clear(),_=null,G(),f()},toggle(){v?V.close():V.open()},setSource(e){d=e??{},v&&B(),f()},setPages(e){h=e??[],v&&B()},setQuit(e){y=e??null},setDay(e){w=e??"",v&&W().app==="home"&&B()},setSkin(e){z.style.setProperty("--skin",e)},refresh(){v&&W().app!=="camera"&&B(),f()},ring(e){if(N||q){K("ignore",e.id);return}N={...e,t:0},T.ring(e),l({kind:"call",from:e.name,text:"Incoming call",ring:!0}),v&&(L.push({app:"incoming"}),B())},notify(e){l(e),f()},guideTo(e){const r=U("markers").find(o=>o.id===e);r&&qe(r)},stopRoute:je,shoot:ke,unread(){return U("threads").reduce((e,r)=>e+(r.unread??0),0)},tick:nt,intent:Oe,key:at,view(e){O={...O??{},...e},C=!0,Ae()}};return V}function ta(t,{store:a=globalThis.localStorage,parent:c=document.body}={}){const l=c.ownerDocument;Te("ts-hud-css",wt,l);const s=l.createElement("div");s.className="ch",s.id="ts-hud",s.innerHTML='<div class="ch-prompt-slot"></div><div class="ch-banners"></div><div class="ch-foothint ch-gone"></div>',c.appendChild(s);const f=s.querySelector(".ch-prompt-slot"),u=s.querySelector(".ch-banners"),k=s.querySelector(".ch-foothint"),z=pt(t,a),A=[];let n=null,i="",b=!0,x=null,d=null,h=null;const y={text:["msg","Message"],call:["tel","Call"],money:["wallet","Wallet"],info:["map",""]};function w(m){const[H,E]=y[m.kind]??y.info,O=j=>`<span class="ch-key${se()?" ch-pad":""}">${j}</span>`,S=m.ring?`<span class="ch-hint">${O(se()?"View":"Tab")}Answer</span>`:"",C=l.createElement("div");C.className=`ch-banner${m.ring?" ch-ring":""}`;const R=String(m.text??"");C.innerHTML=`<span class="ch-app-i ch-${H}">${Q[H]}</span><div><b>${M(m.from??E)}</b><p>${M(R.length>80?`${R.slice(0,78)}…`:R)}</p></div>${S}`,h?.isOpen||u.replaceChildren(C),clearTimeout(x),m.ring||(x=setTimeout(()=>{C.classList.add("ch-out"),setTimeout(()=>C.remove(),400)},4200)),dispatchEvent(new CustomEvent(m.kind==="call"?"ts:call":m.kind==="text"?"ts:text":"ts:notice",{detail:{...m}}))}h=Ut(t,s,{prefs:z,notify:w,objective:()=>d,still:()=>Ye(t),onChange:()=>{h?.isOpen?u.replaceChildren():h?.ringing||u.querySelector(".ch-ring")?.remove(),v()}});function v(){if(!h?.isOpen||h.app==="camera"){k.classList.add("ch-gone");return}const m=se(),H=O=>`<span class="ch-key${m?" ch-pad":""}">${O}</span>`,E=[[m?"↕":"↑↓","Choose"],[m?"A":"Enter","Open"],[m?"B":"Esc","Back"],[m?"View":"Tab","Put away"]];h.app==="map"&&E.splice(2,0,[m?"LB RB":"Q E","Zoom"]),k.innerHTML=E.map(([O,S])=>`<span>${H(O)}${S}</span>`).join(""),k.classList.remove("ch-gone")}const L=ct(()=>{v(),i=null});function g(){return n?(n.act?.(),i=null,!0):!1}function I(){const m=n?se()?"X":(n.key??"e").toUpperCase():"",H=n?`${m}|${n.label}`:"";H!==i&&(i=H,f.innerHTML=n?`<div class="ch-prompt"><span class="ch-key${se()?" ch-pad":""}">${M(m)}</span>${M(n.label)}</div>`:"")}const N=t.onUpdate(m=>{if(h.tick(m),!b)return;n=Lt(t)&&!h.isOpen?zt(A,{x:t.walker.x,y:t.walker.y,z:t.walker.z,yaw:t.walker.yaw}):null,I()}),q=[Ee({prio:80,modal:()=>h.isOpen&&h.app!=="camera",busy:()=>h.isOpen,key:m=>m.metaKey||m.ctrlKey||m.altKey?!1:h.key(m),intent:m=>(m==="view"||m==="start")&&!h.isOpen?(h.open(),!0):h.intent(m)},t),Ee({prio:70,key:m=>(m.key==="e"||m.key==="E"||n?.key&&m.key===n.key)&&!m.repeat?g():!1,intent:m=>m==="x"?g():!1},t)],X=t.phone??(t.phone={});return Object.defineProperty(X,"call",{get:()=>h.call,configurable:!0,enumerable:!0}),{root:s,phone:h,notify:w,objective(m){d=m||null},get objectiveText(){return d},interact:{add(m){return A.push(m),()=>{const H=A.indexOf(m);H>=0&&A.splice(H,1)}},get current(){return n},get list(){return A.slice()}},show(m){b=m,s.classList.toggle("ch-gone",!m),m||(f.innerHTML="",i="")},destroy(){N(),L(),q.forEach(m=>m()),s.remove()}}}export{xt as L,Kt as R,Gt as W,Zt as _,mt as a,vt as b,$t as c,ea as d,Jt as e,Qt as f,Yt as i,ta as m};
