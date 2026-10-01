import{i as we,e as $,k as ye,p as ae,s as De,b as Qe,W as Je,o as Ze}from"./layers-LBLJEXAs.js";import{a as et,s as tt,p as at}from"./index-DVs3ZGzr.js";const nt=`
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
`;let Ce=!1;function Nt(e=document){if(Ce)return;Ce=!0;const r=e.createElement("style");r.id="cb-story-style",r.textContent=nt,e.head.appendChild(r)}const Rt='<svg viewBox="0 0 26 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M1 10c3-5 6-5 8 0s5 5 8 0 6-5 8 0"/><path d="M5 15c2-2 4-2 6 0" opacity=".55"/></svg>',Dt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5h16v10H9l-5 4z" stroke-linejoin="round"/><circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="12" cy="10" r="1.2" fill="currentColor"/><circle cx="15" cy="10" r="1.2" fill="currentColor"/></svg>',Ae=["#f6cf73","#6cc3cf","#f2906f","#b7e08a","#e7a6d8","#9fb6ff","#ffb37a","#8fe0c4"];function _t(e){let r=0;for(const s of String(e))r=r*31+s.charCodeAt(0)>>>0;return Ae[r%Ae.length]}const Bt=e=>String(e??"").replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r]),_e=120;function it(){let e="closed",r=0,s=!1;return{get state(){return e},get open(){return e==="typing"||e==="unclear"},get tries(){return r},start({pad:d=!1}={}){return d?(e="closed",{action:"options",why:"pad"}):(e="typing",r=0,s=!1,{action:"typing"})},send(d,l){if(!this.open)return{action:"ignore",why:"closed"};const f=String(d??"").replace(/\s+/g," ").trim().slice(0,_e);if(!f)return s?(s=!1,e="closed",{action:"silence"}):(s=!0,{action:"confirm-silence"});s=!1;let u;try{u=l(f)}catch(M){return{action:"ignore",why:`say threw: ${M?.message??M}`}}return!u||u.intent==="unclear"?(e="unclear",r++,{action:"retry",line:u?.line??null,text:f}):(e="closed",{action:"done",result:u,text:f})},options(){return this.open?(e="closed",{action:"options"}):{action:"ignore",why:"closed"}},silence(){return this.open?(e="closed",s=!1,{action:"silence"}):{action:"ignore",why:"closed"}},typed(){s=!1},get armed(){return s},close(){e="closed",s=!1}}}function rt(e,r){return r?Math.max(0,Math.round(e-r.height-r.offsetTop)):0}const ot=`
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
`,st='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';function ct(e=document.body,{game:r=null,placeholder:s="Say something…"}={}){const d=e.ownerDocument;we("ts-answer-css",ot,d);const l=d.createElement("div");l.className="ca ca-gone",l.setAttribute("role","group"),l.setAttribute("aria-label","Your reply");const f=`ca-in-${Math.random().toString(36).slice(2,8)}`;l.innerHTML=`
    <label for="${f}">your reply</label>
    <div class="ca-row">
      <input id="${f}" type="text" autocomplete="off" autocorrect="on" spellcheck="true" enterkeyhint="send" maxlength="${_e}" placeholder="${$(s)}" aria-describedby="${f}-hint">
      <button class="ca-send" type="button" aria-label="Send" disabled>${st}</button>
    </div>
    <div class="ca-foot"><span class="ca-hint" id="${f}-hint" aria-live="polite">Enter to send</span>
      <button class="ca-opts ca-quiet" type="button">Say nothing</button>
      <button class="ca-opts ca-show" type="button">Show options <kbd>Esc</kbd></button></div>`,e.appendChild(l);const u=l.querySelector("input"),M=l.querySelector(".ca-send"),z=l.querySelector(".ca-hint"),E=l.querySelector(".ca-show"),a=l.querySelector(".ca-quiet"),n=it();let b=null;function m(){const g=rt(globalThis.innerHeight,globalThis.visualViewport);l.style.bottom=g>0?`${g+12}px`:""}function c(){n.close(),l.classList.add("ca-gone"),l.classList.remove("ca-unclear"),globalThis.visualViewport?.removeEventListener("resize",m),globalThis.visualViewport?.removeEventListener("scroll",m),d.activeElement===u&&u.blur()}function p(){const g=n.send(u.value,P=>b.onSay(P));return g.action==="ignore"?g:g.action==="confirm-silence"?(z.textContent="Press Enter again to say nothing.",g):g.action==="silence"?(c(),b.onSilence?.(),g):g.action==="done"?(u.value="",c(),g):(u.value="",M.disabled=!0,l.classList.remove("ca-unclear"),l.offsetWidth,l.classList.add("ca-unclear"),z.textContent="Try saying it another way, or show the options.",u.focus({preventScroll:!0}),g)}function v(){const g=n.silence();return g.action!=="silence"||(c(),b.onSilence?.()),g}function w(){const g=n.options();return g.action!=="options"||(c(),b.onOptions?.()),g}u.addEventListener("input",()=>{M.disabled=!u.value.trim(),n.armed&&(n.typed(),z.textContent=n.tries?"Try saying it another way, or show the options.":"Enter to send")}),M.addEventListener("click",p),E.addEventListener("click",w),a.addEventListener("click",v);const y=ye({prio:95,modal:()=>n.open,text(g){return!n.open||g.target!==u?!1:g.key==="Enter"&&!g.isComposing?(g.preventDefault(),p(),!0):(g.key==="Escape"&&(g.preventDefault(),w()),!0)},key(g){return n.open?g.key==="Escape"?(w(),!0):(g.key.length===1&&!g.metaKey&&!g.ctrlKey&&!g.altKey&&u.focus({preventScroll:!0}),!0):!1},intent(g){return n.open?(g&&w(),!0):!1}},r);return{el:l,get isOpen(){return n.open},get state(){return n.state},get tries(){return n.tries},get height(){return Math.round(l.getBoundingClientRect().height)+18},open(g){b=g;const P=n.start({pad:g.pad??ae()});return P.action==="options"?(g.onOptions?.(),P):(r&&De(r),d.pointerLockElement&&d.exitPointerLock?.(),u.value="",M.disabled=!0,u.placeholder=g.placeholder??s,z.textContent=g.hint??"Enter to send",l.classList.remove("ca-gone","ca-unclear"),m(),globalThis.visualViewport?.addEventListener("resize",m),globalThis.visualViewport?.addEventListener("scroll",m),u.focus({preventScroll:!0}),P)},close:c,type(g){return u.value=g,M.disabled=!g.trim(),p()},options:w,silence:v,enter:()=>p(),destroy(){c(),y(),l.remove()}}}const Xt=Object.freeze(Object.defineProperty({__proto__:null,makeAnswerBox:ct},Symbol.toStringTag,{value:"Module"})),lt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',Be=`
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
`,Xe=`
@media (max-width: 640px), (max-height: 640px) {
  .cb-choices { max-height: calc(100dvh - max(5vh, 72px) - 200px); overflow-y: auto; overscroll-behavior: contain; align-content: start; }
  .cb-opt { min-height: 44px; padding-top: 7px; padding-bottom: 7px; gap: 10px; }
  .cb-opt .cb-key { width: 26px; height: 26px; }
  .cb-choices .cb-timer { position: sticky; bottom: 0; }
  .cb-why { font-size: calc(12px * var(--ts)); }
}
`;function dt(e=document){we("ts-locks-css",Be+Xe,e)}const pt=e=>e?.locks===!0,Wt=Object.freeze(Object.defineProperty({__proto__:null,LOCKED_CSS:Be,LOCK_ICON:lt,TALL_LIST_CSS:Xe,injectLockStyle:dt,showLocks:pt},Symbol.toStringTag,{value:"Module"})),ht=`
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
`,qe=Math.PI*2,ft=e=>e-qe*Math.floor((e+Math.PI)/qe),bt=(e,r,s,d)=>Math.atan2(s-e,d-r),ut=55*Math.PI/180,gt=1.2;function mt(e,r){let s=null,d=1/0;for(const l of e){if(l.when&&!l.when())continue;const f=Math.hypot(l.x-r.x,l.y-r.y);f>(l.r??2)||l.z!=null&&r.z!=null&&Math.abs(l.z-r.z)>2.5||f>gt&&Math.abs(ft(bt(r.x,r.y,l.x,l.y)-r.yaw))>ut||f<d&&(s=l,d=f)}return s}function xt(e){return e.mode==="walk"&&!e.controller&&!e.ride?.journey?.active&&!e.cam?.showing}function pe(e){return e<10?`${Math.round(e)} m`:e<1e3?`${Math.round(e/10)*10} m`:`${(e/1e3).toFixed(1)} km`}function fe(e){const r=(e%24+24)%24;let s=Math.floor(r),d=Math.round((r-s)*60);return d===60&&(d=0,s=(s+1)%24),`${s%12===0?12:s%12}:${String(d).padStart(2,"0")} ${s<12?"am":"pm"}`}function vt(e,r=null,s=null){if(e==null)return"";const d=typeof e=="number"?e:e.hour,l=typeof e=="number"?null:e.day,f=fe(d);return l==null||r==null||l===r?f:l===r-1?`Yesterday ${f}`:`${s?.(l)??`Day ${l}`} ${f}`}const yt=Object.freeze([[-5,"Frosty"],[-4,"Frosty"],[-3,"Cold"],[-2,"Cold"],[-1,"Cold"],[0,"Stranger"],[1,"Acquaintance"],[2,"Acquaintance"],[3,"Friend"],[4,"Friend"],[5,"Close friend"]]);function Pe(e){const r=Math.max(-5,Math.min(5,Math.round(e??0)));return yt.find(([s])=>s===r)[1]}function xe(e,r=!1){const s=Math.round((e??0)*100)/100,d=Math.abs(s),l=Number.isInteger(d)?String(d):d.toFixed(2);return`${s<0?"-":r&&s>0?"+":""}$${l}`}const ve={sea:"#86c7d2",lake:"#9dd3d9",sand:"#f1e3c2",dune:"#e6d6ab",grass:"#bdd79f",marsh:"#a9c9a0",woods:"#94b985",rough:"#b8d196",fairway:"#acd88f",green:"#a2d48a",bunker:"#ecdfb3",paved:"#dcd6ca"},je={primary:[1,"#fbf1d8"],primary_link:[1,"#fbf1d8"],tertiary:[.9,"#fdf8ee"],residential:[.8,"#fdf8ee"],unclassified:[.8,"#fdf8ee"],living_street:[.8,"#fdf8ee"],service:[.6,"#fdf8ee"],track:[.5,"#efe4cc"]},Ie=new Set(["footway","path","steps","pedestrian"]),ue={main:"#f6cf73",side:"#f2906f",home:"#2c7c8c",place:"#5a6571"};function wt(e){const{grid:r,features:s}=e;let d=null;const l=s.roads.map(a=>({...a,box:u(a.p)})),f=s.buildings.map(a=>({p:a.p,box:u(a.p)}));function u(a){let n=1/0,b=1/0,m=-1/0,c=-1/0;for(const[p,v]of a)p<n&&(n=p),p>m&&(m=p),v<b&&(b=v),v>c&&(c=v);return[n,b,m,c]}function M(){const a=document.createElement("canvas");a.width=r.nx,a.height=r.ny;const n=a.getContext("2d"),b=n.createImageData(r.nx,r.ny),c=r.meta.surfaces.map(p=>{const v=ve[p]??ve.grass;return[parseInt(v.slice(1,3),16),parseInt(v.slice(3,5),16),parseInt(v.slice(5,7),16)]});for(let p=0;p<r.ny;p++){const v=(r.ny-1-p)*r.nx;for(let w=0;w<r.nx;w++){const[y,T,g]=c[r.surface[p*r.nx+w]]??c[0],P=(v+w)*4;b.data[P]=y,b.data[P+1]=T,b.data[P+2]=g,b.data[P+3]=255}}return n.putImageData(b,0,0),a}function z(a,n,b,m,c={}){d??=M();const{cx:p,cy:v,mpp:w}=m,y=k=>(k-p)/w+n/2,T=k=>b/2-(k-v)/w,g=p-n/2*w,P=p+n/2*w,R=v-b/2*w,q=v+b/2*w,Y=k=>k[2]>=g&&k[0]<=P&&k[3]>=R&&k[1]<=q;a.fillStyle=ve.sea,a.fillRect(0,0,n,b),a.imageSmoothingEnabled=!0,a.drawImage(d,y(r.x0),T(r.y1),r.nx*r.step/w,r.ny*r.step/w),a.fillStyle="#e3d6c0",a.strokeStyle="rgba(120, 100, 80, .35)",a.lineWidth=1;for(const k of f)Y(k.box)&&(a.beginPath(),k.p.forEach(([C,B],D)=>D?a.lineTo(y(C),T(B)):a.moveTo(y(C),T(B))),a.closePath(),a.fill(),w<1.6&&a.stroke());a.lineCap="round",a.lineJoin="round";const x=k=>{a.beginPath(),k.p.forEach(([C,B],D)=>D?a.lineTo(y(C),T(B)):a.moveTo(y(C),T(B)))};for(const k of["casing","fill"])for(const C of l){if(Ie.has(C.k)||!Y(C.box))continue;const[B,D]=je[C.k]??je.service,j=Math.max(1.4,(C.w||6)*B/w);x(C),a.strokeStyle=k==="casing"?"rgba(150, 128, 100, .55)":D,a.lineWidth=k==="casing"?j+2:j,a.stroke()}if(w<3){a.setLineDash([2,3]),a.strokeStyle="rgba(120, 100, 80, .6)",a.lineWidth=1.2;for(const k of l)Ie.has(k.k)&&Y(k.box)&&(x(k),a.stroke());a.setLineDash([])}if(c.route?.length>1)for(const[k,C]of[["#ffffff",7],["#e8a33c",4]])a.beginPath(),c.route.forEach(([B,D],j)=>j?a.lineTo(y(B),T(D)):a.moveTo(y(B),T(D))),a.strokeStyle=k,a.lineWidth=C,a.stroke();for(const k of c.markers??[]){if((k.kind==="main"||k.kind==="side")&&c.showStory===!1)continue;const C=y(k.x),B=T(k.y),D=C<0||C>n||B<0||B>b,j=Math.min(n-12,Math.max(12,C)),H=Math.min(b-12,Math.max(12,B)),J=k.kind==="main"?10:8;c.selected===k.id&&(a.beginPath(),a.arc(j,H,J+7,0,Math.PI*2),a.fillStyle="rgba(246, 207, 115, .35)",a.fill()),a.beginPath(),k.kind==="main"?E(a,j,H,J):a.arc(j,H,J,0,Math.PI*2),a.fillStyle=ue[k.kind]??ue.place,a.globalAlpha=D?.7:1,a.fill(),a.lineWidth=2,a.strokeStyle="#fff",a.stroke(),a.globalAlpha=1,k.kind==="home"&&(a.fillStyle="#fff",a.fillRect(j-3,H-1,6,4),a.beginPath(),a.moveTo(j-4.5,H-.5),a.lineTo(j,H-5),a.lineTo(j+4.5,H-.5),a.fill())}if(c.player){const{x:k,y:C,yaw:B}=c.player,D=y(k),j=T(C);a.save(),a.translate(D,j),a.beginPath(),a.arc(0,0,13,0,Math.PI*2),a.fillStyle="rgba(44, 124, 140, .18)",a.fill(),a.rotate(B),a.beginPath(),a.moveTo(0,-9),a.lineTo(7,7),a.lineTo(0,3.5),a.lineTo(-7,7),a.closePath(),a.fillStyle="#2c7c8c",a.fill(),a.lineWidth=2,a.strokeStyle="#fff",a.stroke(),a.restore()}const I=n/5*w,L=[10,20,50,100,200,500,1e3,2e3].reduce((k,C)=>Math.abs(C-I)<Math.abs(k-I)?C:k),O=L/w;a.fillStyle="rgba(255, 255, 255, .8)",a.fillRect(10,b-22,O+8,14),a.fillStyle="#1b2530",a.fillRect(14,b-12,O,2),a.font="600 10px ui-sans-serif, system-ui, sans-serif",a.fillText(L>=1e3?`${L/1e3} km`:`${L} m`,16,b-14.5)}function E(a,n,b,m){for(let c=0;c<10;c++){const p=-Math.PI/2+c*Math.PI/5,v=c%2?m*.48:m*1.15,w=n+Math.cos(p)*v,y=b+Math.sin(p)*v;c?a.lineTo(w,y):a.moveTo(w,y)}a.closePath()}return{draw:z}}const kt=new Set(["footway","path","steps","pedestrian"]),$t=(e,r)=>`${Math.round(e*10)},${Math.round(r*10)}`;function Mt(e){const r=new Map,s=[],d=[],l=[],f=(n,b)=>{const m=$t(n,b);let c=r.get(m);return c==null&&(c=s.length,r.set(m,c),s.push(n),d.push(b),l.push([])),c};for(const n of e){const b=kt.has(n.k);for(let m=1;m<n.p.length;m++){const c=f(n.p[m-1][0],n.p[m-1][1]),p=f(n.p[m][0],n.p[m][1]);if(c===p)continue;const v=Math.hypot(s[c]-s[p],d[c]-d[p]);l[c].push({to:p,len:v,footOnly:b}),l[p].push({to:c,len:v,footOnly:b})}}const u=50,M=new Map;for(let n=0;n<s.length;n++){const b=`${Math.floor(s[n]/u)},${Math.floor(d[n]/u)}`;M.has(b)||M.set(b,[]),M.get(b).push(n)}const z=new Int32Array(s.length).fill(-1),E=[];for(let n=0;n<s.length;n++){if(z[n]>=0)continue;const b=[n];z[n]=E.length;let m=0;for(;b.length;){const c=b.pop();m++;for(const p of l[c])z[p.to]<0&&(z[p.to]=E.length,b.push(p.to))}E.push(m)}const a=E.indexOf(Math.max(...E));return{xs:s,ys:d,adj:l,buckets:M,CELL:u,size:s.length,comp:z,main:a,pieces:E.length}}function he(e,r,s,d="foot",l=400,f=null){let u=-1,M=1/0;const z=Math.floor(r/e.CELL),E=Math.floor(s/e.CELL),a=Math.ceil(l/e.CELL);for(let n=0;n<=a;n++){for(let b=z-n;b<=z+n;b++)for(let m=E-n;m<=E+n;m++)if(Math.max(Math.abs(b-z),Math.abs(m-E))===n)for(const c of e.buckets.get(`${b},${m}`)??[]){if(d!=="foot"&&e.adj[c].every(v=>v.footOnly)||f!=null&&e.comp[c]!==f)continue;const p=Math.hypot(e.xs[c]-r,e.ys[c]-s);p<M&&(M=p,u=c)}if(u>=0&&M<(n-.5)*e.CELL)break}return u>=0&&M<=l?u:-1}function St(){const e=[];return{get size(){return e.length},push(r,s){e.push([s,r]);let d=e.length-1;for(;d>0;){const l=d-1>>1;if(e[l][0]<=e[d][0])break;[e[l],e[d]]=[e[d],e[l]],d=l}},pop(){const r=e[0],s=e.pop();if(e.length){e[0]=s;let d=0;for(;;){const l=2*d+1,f=l+1;let u=d;if(l<e.length&&e[l][0]<e[u][0]&&(u=l),f<e.length&&e[f][0]<e[u][0]&&(u=f),u===d)break;[e[u],e[d]]=[e[d],e[u]],d=u}}return r[1]}}}function Oe(e,r,s,d="foot"){const l=()=>({points:[[r.x,r.y],[s.x,s.y]],length:Math.hypot(s.x-r.x,s.y-r.y),straight:!0});let f=he(e,r.x,r.y,d),u=he(e,s.x,s.y,d);if(f<0||u<0)return l();if(e.comp[f]!==e.comp[u]){const M=he(e,r.x,r.y,d,400,e.main),z=he(e,s.x,s.y,d,400,e.main);if(M<0||z<0)return l();f=M,u=z}return zt(e,f,u,r,s,d)??l()}function zt(e,r,s,d,l,f){const u=e.size,M=new Float64Array(u).fill(1/0),z=new Int32Array(u).fill(-1),E=new Uint8Array(u),a=c=>Math.hypot(e.xs[c]-e.xs[s],e.ys[c]-e.ys[s]),n=St();for(M[r]=0,n.push(r,a(r));n.size;){const c=n.pop();if(!E[c]){if(E[c]=1,c===s)break;for(const p of e.adj[c]){if(f!=="foot"&&p.footOnly)continue;const v=M[c]+p.len;v<M[p.to]&&(M[p.to]=v,z[p.to]=c,n.push(p.to,v+a(p.to)))}}}if(!E[s])return null;const b=[];for(let c=s;c>=0;c=z[c])b.push([e.xs[c],e.ys[c]]);b.reverse(),b.unshift([d.x,d.y]),b.push([l.x,l.y]);let m=0;for(let c=1;c<b.length;c++)m+=Math.hypot(b[c][0]-b[c-1][0],b[c][1]-b[c-1][1]);return{points:b,length:m,straight:!1}}const Lt=35,Et=12;function Tt(e,r,s){let d={i:0,t:0,off:1/0,px:e[0][0],py:e[0][1]};for(let f=1;f<e.length;f++){const[u,M]=e[f-1],[z,E]=e[f],a=z-u,n=E-M,b=a*a+n*n||1,m=Math.max(0,Math.min(1,((r-u)*a+(s-M)*n)/b)),c=u+a*m,p=M+n*m,v=Math.hypot(r-c,s-p);v<d.off&&(d={i:f,t:m,off:v,px:c,py:p})}let l=Math.hypot(e[d.i][0]-d.px,e[d.i][1]-d.py);for(let f=d.i+1;f<e.length;f++)l+=Math.hypot(e[f][0]-e[f-1][0],e[f][1]-e[f-1][1]);return{...d,left:l}}const be=3.2,We=70,He=Math.ceil(We/be)+2;function Ct(e){const r=e.THREE,s=new r.Shape;s.moveTo(0,.45),s.lineTo(.45,-.05),s.lineTo(.3,-.2),s.lineTo(0,.1),s.lineTo(-.3,-.2),s.lineTo(-.45,-.05),s.closePath();const d=new r.ShapeGeometry(s);d.rotateX(-Math.PI/2);const l=new r.MeshBasicMaterial({color:16174963,transparent:!0,opacity:.88,depthWrite:!1,fog:!1}),f=new r.InstancedMesh(d,l,He);f.name="gps-guide",f.frustumCulled=!1,f.renderOrder=2,f.count=0,e.scene.add(f);const u=new r.Matrix4,M=new r.Quaternion,z=new r.Vector3(0,1,0),E=new r.Vector3(1,1,1),a=new r.Vector3;let n=null;const b=(c,p,v)=>e.walkable?.floorAt?e.walkable.floorAt(c,p,v+1.5):e.grid.heightAt(c,p);function m(c){const p=n.points;let v=c.i,w=c.px,y=c.py,T=be*.6,g=0,P=c.z??b(w,y,0);for(;v<p.length&&g<He;){const[R,q]=p[v],Y=Math.hypot(R-w,q-y);if(T<=Y&&Y>0){const x=T/Y,I=w+(R-w)*x,X=y+(q-y)*x;if(w=I,y=X,T=be,P=b(I,X,P),M.setFromAxisAngle(z,-Math.atan2(R-I,q-X)),a.set(I,P+.06,-X),u.compose(a,M,E),f.setMatrixAt(g++,u),g*be>We)break}else T-=Y,w=R,y=q,v++}f.count=g,f.instanceMatrix.needsUpdate=!0}return{get on(){return!!n},get route(){return n},set(c,{onArrive:p=()=>{},onStray:v=()=>{}}={}){n={points:c,onArrive:p,onStray:v}},clear(){n=null,f.count=0},update(c,p,v){if(!n)return null;const w=Tt(n.points,c,p);if(w.left<Et){const y=n;return this.clear(),y.onArrive(),0}return w.off>Lt?(n.onStray(),w.left):(m({...w,z:v}),w.left)},dispose(){e.scene.remove(f),d.dispose(),l.dispose()}}}const U=(e,r=!1)=>`<svg viewBox="0 0 24 24" ${r?'fill="currentColor"':'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'} aria-hidden="true">${e}</svg>`,K={map:U('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>'),msg:U('<path d="M12 3.5c-5 0-9 3.3-9 7.4 0 2.3 1.3 4.4 3.3 5.8-.2 1.3-.9 2.6-1.9 3.6 2 0 3.8-.7 5.1-1.8.8.2 1.6.3 2.5.3 5 0 9-3.3 9-7.4S17 3.5 12 3.5z"/>',!0),tel:U('<path d="M6.6 3.5 9.3 4l1.2 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.2.5 2.7c-.2 1.6-1.6 2.6-3.2 2.4A16.5 16.5 0 0 1 4.1 6.7c-.2-1.6.8-3 2.5-3.2z"/>',!0),people:U('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.5-3.4 3-5.4 6-5.4s5.5 2 6 5.4"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 13.8c2.4.2 4 1.9 4.5 4.6"/>'),wallet:U('<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9.5h13a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2H3"/><circle cx="15.5" cy="12.3" r="1" fill="currentColor"/>'),cam:U('<path d="M3.5 8.5h3l1.7-2.5h7.6l1.7 2.5h3v10.5h-17z"/><circle cx="12" cy="13.2" r="3.6"/>'),pics:U('<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M4 17l5-5 4 4 3-3 4 4"/><circle cx="16" cy="9" r="1.6" fill="currentColor"/>'),set:U('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.2 7.5l2.1 1.2M17.7 15.3l2.1 1.2M4.2 16.5l2.1-1.2M17.7 8.7l2.1-1.2M5 12H2.8M21.2 12H19"/>'),save:U('<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'),load:U('<path d="M4 7h6l2 2h8v10H4z"/><path d="M12 12v5M9.5 14.5 12 17l2.5-2.5"/>'),other:U('<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>'),call:U('<path d="M6.6 3.5 9.3 4l1.2 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.2.5 2.7c-.2 1.6-1.6 2.6-3.2 2.4A16.5 16.5 0 0 1 4.1 6.7c-.2-1.6.8-3 2.5-3.2z"/>',!0),end:U('<path d="M3 13.5c5-4.5 13-4.5 18 0l-1.6 2.6-3.6-1.2v-2.6a10 10 0 0 0-5.6 0v2.6l-3.6 1.2z"/>',!0),bars:'<svg viewBox="0 0 18 11" fill="currentColor" aria-hidden="true"><rect x="0" y="7" width="3" height="4" rx=".6"/><rect x="5" y="5" width="3" height="6" rx=".6"/><rect x="10" y="2.5" width="3" height="8.5" rx=".6"/><rect x="15" y="0" width="3" height="11" rx=".6" opacity=".45"/></svg>',battery:'<svg viewBox="0 0 26 12" fill="none" aria-hidden="true"><rect x=".75" y=".75" width="21.5" height="10.5" rx="3" stroke="currentColor" stroke-width="1.5" opacity=".6"/><rect x="2.6" y="2.6" width="14" height="6.8" rx="1.6" fill="currentColor"/><rect x="23.4" y="4" width="1.8" height="4" rx=".8" fill="currentColor" opacity=".6"/></svg>'},At=`<svg viewBox="0 0 130 205" aria-hidden="true"><g class="ch-skin">
  <ellipse cx="26" cy="200" rx="30" ry="26"/>
  <rect x="5" y="104" width="22" height="14" rx="7"/><rect x="3" y="121" width="24" height="14" rx="7"/>
  <rect x="4" y="138" width="23" height="14" rx="7"/><rect x="7" y="155" width="20" height="13" rx="6.5"/></g>
  <g class="ch-shade"><rect x="5" y="113" width="10" height="5" rx="2.5"/><rect x="3" y="130" width="10" height="5" rx="2.5"/><rect x="4" y="147" width="10" height="5" rx="2.5"/></g></svg>`,qt=`<svg viewBox="0 0 130 205" aria-hidden="true"><g class="ch-skin"><rect x="110" y="128" width="17" height="30" rx="8.5" transform="rotate(14 118 143)"/></g>
  <rect class="ch-shade" x="111" y="148" width="15" height="6" rx="3" transform="rotate(14 118 143)"/></svg>`,Ne=["#e5a44f","#3f9fb0","#e07a5f","#6aa76a","#c47bb4","#6f86d6","#e0895a","#4fae94"],ee=e=>{let r=0;for(const s of String(e))r=r*31+s.charCodeAt(0)>>>0;return Ne[r%Ne.length]},Re=e=>`<div class="ch-meter">${Array.from({length:11},(r,s)=>{const d=s-5;return`<i class="${d===0?"ch-zero":e>0&&d>0&&d<=e?"ch-pos":e<0&&d<0&&d>=e?"ch-neg":""}"></i>`}).join("")}</div>`,Pt=15;function jt(e,r,{prefs:s,notify:d=()=>{},still:l=()=>{},onChange:f=()=>{},objective:u=()=>null}={}){const M=r.ownerDocument,z=M.createElement("div");z.className="ch-held ch-away",z.innerHTML=`<div class="ch-hand">${At}</div>
    <div class="ch-phone"><div class="ch-screen"><div class="ch-island"></div>
      <div class="ch-status"><span class="ch-time"></span><span>${K.bars}${K.battery}</span></div>
      <div class="ch-body"></div><div class="ch-bar"></div></div></div>
    <div class="ch-hand ch-front">${qt}</div>`,r.appendChild(z);const E=M.createElement("div");E.className="ch-finder ch-gone",E.innerHTML='<i></i><i></i><i></i><i></i><div class="ch-thirds"></div><div class="ch-shutter"><u></u><span><b>Space</b> take a photo · <b>Esc</b> back</span></div><div class="ch-flash"></div>',r.appendChild(E);const a=z.querySelector(".ch-screen"),n=z.querySelector(".ch-body"),b=z.querySelector(".ch-time"),m=et(z);let c={},p=[],v=null,w="",y=!1,T=[],g=null,P=[],R=null,q=null,Y=-1,x=null,I=null,X=null,L=null,O=null,k=null,C=!0;const B=tt(s),D=()=>e.sky?.hour??12,j=(t,...o)=>{try{return c[t]?.(...o)}catch(i){console.warn(`phone source ${t}:`,i);return}},H=t=>{const o=j(t);return Array.isArray(o)?o:[]},J=t=>vt(t,j("today")??null,c.dayName?.bind(c)),ne=()=>({x:e.walker.x,y:e.walker.y,yaw:e.walker.yaw}),F=()=>T[T.length-1]??{app:"home"};function Fe(){const t=H("threads").reduce((i,h)=>i+(h.unread??0),0),o=H("calls").filter(i=>i.state==="missed"&&!i.seen).length;return[{id:"map",label:"Map",icon:"map"},{id:"messages",label:"Messages",icon:"msg",dot:t},{id:"calls",label:"Phone",icon:"tel",dot:o},{id:"contacts",label:"Contacts",icon:"people"},{id:"wallet",label:"Wallet",icon:"wallet"},{id:"camera",label:"Camera",icon:"cam"},{id:"photos",label:"Photos",icon:"pics"},{id:"settings",label:"Settings",icon:"set"},...p.map(i=>({id:`page:${i.id}`,label:i.label,icon:K[i.icon]?i.icon:i.id==="save"?"save":i.id==="load"?"load":"other"}))]}const Q=(t,o="Home",i="")=>`<div class="ch-appbar"><button data-back>‹ ${$(o)}</button><span>${$(t)}</span>${i}</div>`,oe={home(){a.classList.remove("ch-on-light");const t=H("markers").find(S=>S.kind==="main"),o=t?.sub??u()??t?.label,i=L?`<span>GPS on · ${$(L.label)} · ${pe(L.left??0)}</span>`:"";n.innerHTML=`<div class="ch-home"><div class="ch-bigtime">${fe(D()).replace(/ [ap]m$/,"")}</div>
        ${w?`<div class="ch-day">${$(w)}</div>`:""}
        ${o?`<div class="ch-widget"><small>next</small><b>${$(o)}</b>${i}</div>`:i?`<div class="ch-widget">${i}</div>`:""}
        <div class="ch-grid">${Fe().map(S=>`<button class="ch-app" data-app="${$(S.id)}"><span class="ch-app-i ch-${S.icon}">${K[S.icon]}</span>${$(S.label)}${S.dot?`<span class="ch-dot">${S.dot}</span>`:""}</button>`).join("")}</div></div>`;const h=[...n.querySelectorAll(".ch-app")];for(const S of h)S.addEventListener("click",()=>ie(S.dataset.app));return{items:h,grid:4}},map(){a.classList.add("ch-on-light");const t=ne(),o=H("markers"),i=s.get("markers")!==!1,h=o.filter(A=>i||A.kind!=="main"&&A.kind!=="side");O??={cx:t.x,cy:t.y,mpp:1.6},n.innerHTML=`<div class="ch-mapapp"><div class="ch-mapwrap"><canvas></canvas><div class="ch-mapzoom"><span>+</span><span>−</span></div></div>
        <div class="ch-mapsheet"><div class="ch-grab"></div>
        ${L?`<div class="ch-list"><button data-stop><span class="ch-mk" style="background:#e8a33c"></span><span><div class="ch-n">Stop the route</div><div class="ch-s">${$(L.label)} · ${pe(L.left??0)} to go</div></span><span></span></button></div>`:""}
        <div class="ch-list">${h.map(A=>`<button data-m="${$(A.id)}" class="${L?.id===A.id?"ch-routed":""}"><span class="ch-mk" style="background:${ue[A.kind]??ue.place}"></span>
          <span><div class="ch-n">${$(A.label)}</div><div class="ch-s">${$(A.sub??(A.kind==="main"?"Main story":A.kind==="side"?"Side story":""))}</div></span>
          <span class="ch-t">${pe(Math.hypot(A.x-t.x,A.y-t.y))}${L?.id===A.id?'<div class="ch-go-chip">GPS</div>':""}</span></button>`).join("")}
        ${h.length?"":`<div class="ch-empty">${i?"Nowhere marked yet.":"Story markers are hidden (Settings, Story)."}</div>`}</div></div></div>`;const S=n.querySelector("canvas"),N=n.querySelector(".ch-mapwrap"),Z=[...n.querySelectorAll(".ch-mapsheet button")];for(const A of Z)A.dataset.stop!=null?A.addEventListener("click",()=>{ze(),W()}):A.addEventListener("click",()=>{const de=h.find(Ke=>Ke.id===A.dataset.m);de&&Me(de)});const[me,Ge]=n.querySelectorAll(".ch-mapzoom span");me.addEventListener("click",()=>re(-1)),Ge.addEventListener("click",()=>re(1));let te=null;return N.addEventListener("pointerdown",A=>{te=[A.clientX,A.clientY],N.setPointerCapture?.(A.pointerId)}),N.addEventListener("pointermove",A=>{te&&(O.cx-=(A.clientX-te[0])*O.mpp,O.cy+=(A.clientY-te[1])*O.mpp,te=[A.clientX,A.clientY],C=!0)}),N.addEventListener("pointerup",()=>{te=null}),N.addEventListener("wheel",A=>{A.preventDefault(),re(Math.sign(A.deltaY))},{passive:!1}),x??=wt(e),C=!0,{items:Z,after:()=>{const A=h.find(de=>de.id===m.el?.dataset?.m);A&&(k=A.id,O.cx=(A.x+t.x)/2,O.cy=(A.y+t.y)/2,Ve(A,t),C=!0)},canvas:S,marks:h,showStory:i}},messages(){a.classList.add("ch-on-light");const t=H("threads");n.innerHTML=`<div class="ch-sheetapp">${Q("Messages")}<div class="ch-scroll"><div class="ch-list">${t.map(i=>{const h=i.texts?.[i.texts.length-1];return`<button data-t="${$(i.id)}"><span class="ch-av" style="background:${ee(i.who)}">${$((i.name??"?").charAt(0))}</span>
          <span><div class="ch-n">${$(i.name)}</div><div class="ch-s">${$(i.replies?.length?"Waiting for your reply":h?.from==="me"?`You: ${h.text}`:h?.text??"")}</div></span>
          <span class="ch-t">${$(J(h?.at))}${i.unread?`<div style="margin-top:.3em"><span class="ch-dot">${i.unread}</span></div>`:""}</span></button>`}).join("")}</div>${t.length?"":'<div class="ch-empty">No messages yet.</div>'}</div></div>`;const o=[...n.querySelectorAll("[data-back], .ch-list button")];n.querySelector("[data-back]").addEventListener("click",V);for(const i of n.querySelectorAll(".ch-list button"))i.addEventListener("click",()=>ie("thread",i.dataset.t));return{items:o,first:o.length>1?1:0}},thread(t){a.classList.add("ch-on-light");const o=H("threads").find(N=>N.id===t);if(!o)return oe.messages();j("read",t);let i=null;n.innerHTML=`<div class="ch-sheetapp">${Q(o.name,"Messages")}
        <div class="ch-scroll"><div class="ch-thread">${(o.texts??[]).map(N=>{const Z=J(N.at),me=Z&&Z!==i?`<div class="ch-bub-t">${$(Z)}</div>`:"";return i=Z,`${me}<div class="ch-bub${N.from==="me"?" ch-me":""}">${$(N.text)}</div>`}).join("")}</div></div>
        ${o.replies?.length?`<div class="ch-replies"><small>Reply</small>${o.replies.map(N=>`<button class="ch-reply" data-r="${$(N.id)}"><span>${$(N.text)}</span>${N.canon?`<span class="ch-canon" title="What happened in the show">${Je}CANON</span>`:""}${N.cost?`<span class="ch-cost">${xe(N.cost)}</span>`:""}</button>`).join("")}</div>`:""}</div>`;const h=n.querySelector(".ch-scroll");h.scrollTop=h.scrollHeight,n.querySelector("[data-back]").addEventListener("click",V);const S=[...n.querySelectorAll(".ch-reply")];for(const N of S)N.addEventListener("click",()=>{j("reply",t,N.dataset.r),W()});return f(),{items:[n.querySelector("[data-back]"),...S],first:S.length?1:0}},calls(){a.classList.add("ch-on-light");const t=H("calls");for(const h of t)h.state==="missed"&&(h.seen=!0);const o=H("contacts").filter(h=>h.canCall);n.innerHTML=`<div class="ch-sheetapp">${Q("Phone")}<div class="ch-scroll">
        ${o.length?`<div class="ch-sec">Call</div><div class="ch-list">${o.map(h=>`<button data-call="${$(h.id)}"><span class="ch-av" style="background:${ee(h.id)}">${$(h.name.charAt(0))}</span><span><div class="ch-n">${$(h.name)}</div></span><span class="ch-t">${K.call.replace("<svg",'<svg style="width:1.4em;color:#3fa56d"')}</span></button>`).join("")}</div>`:""}
        <div class="ch-sec">Recent</div><div class="ch-list">${t.map(h=>`<div class="ch-row"><span class="ch-av" style="background:${ee(h.who)}">${$((h.name??"?").charAt(0))}</span>
          <span><div class="ch-n" style="${h.state==="missed"?"color:#c05a3c":""}">${$(h.name)}</div><div class="ch-s">${$({missed:"Missed",answered:h.dir==="out"?"Outgoing":"Incoming",ignored:"Declined","no-answer":"No answer"}[h.state]??"")}</div></span>
          <span class="ch-t">${$(J(h.at))}</span></div>`).join("")}</div>${t.length?"":'<div class="ch-empty">No calls yet.</div>'}</div></div>`,n.querySelector("[data-back]").addEventListener("click",V);const i=[...n.querySelectorAll("[data-call]")];for(const h of i)h.addEventListener("click",()=>Le(h.dataset.call));return f(),{items:[n.querySelector("[data-back]"),...i],first:i.length?1:0}},contacts(){a.classList.add("ch-on-light");const t=H("contacts");n.innerHTML=`<div class="ch-sheetapp">${Q("Contacts")}<div class="ch-scroll"><div class="ch-list">${t.map(i=>`<button data-p="${$(i.id)}">
        <span class="ch-av" style="background:${ee(i.id)}">${$(i.name.charAt(0))}</span><span><div class="ch-n">${$(i.name)}</div><div class="ch-s">${$(i.why??"")}</div></span>
        <span>${Re(i.bond??0)}<div class="ch-word">${Pe(i.bond)}</div></span></button>`).join("")}</div>
        ${t.length?"":'<div class="ch-empty">Nobody yet. The people you meet this summer will be here.</div>'}</div></div>`,n.querySelector("[data-back]").addEventListener("click",V);const o=[...n.querySelectorAll(".ch-list button")];for(const i of o)i.addEventListener("click",()=>ie("contact",i.dataset.p));return{items:[n.querySelector("[data-back]"),...o],first:o.length?1:0}},contact(t){a.classList.add("ch-on-light");const o=H("contacts").find(S=>S.id===t);if(!o)return oe.contacts();const i=H("threads").find(S=>S.who===t);n.innerHTML=`<div class="ch-sheetapp">${Q("","Contacts")}<div class="ch-scroll">
        <div class="ch-card"><span class="ch-av" style="background:${ee(o.id)}">${$(o.name.charAt(0))}</span><h3>${$(o.name)}</h3>
          <div class="ch-label">${Pe(o.bond)}</div>${Re(o.bond??0)}${o.why?`<div class="ch-why">${$(o.why)}</div>`:""}</div>
        <div class="ch-acts">${o.canCall?`<button class="ch-act" data-a="call"><span>${K.call}</span>Call</button>`:""}${i?`<button class="ch-act" data-a="msg"><span>${K.msg}</span>Message</button>`:""}</div></div></div>`,n.querySelector("[data-back]").addEventListener("click",V);const h=[...n.querySelectorAll(".ch-act")];for(const S of h)S.addEventListener("click",()=>S.dataset.a==="call"?Le(t):ie("thread",i.id));return{items:[n.querySelector("[data-back]"),...h],first:h.length?1:0}},wallet(){a.classList.add("ch-on-light");const t=j("wallet")??{money:0,ledger:[]},o=[...t.ledger??[]].reverse();return n.innerHTML=`<div class="ch-sheetapp">${Q("Wallet")}<div class="ch-scroll">
        <div class="ch-balance"><small>Balance</small><b>${xe(t.money)}</b></div>
        <div class="ch-sec">Recent</div><div class="ch-list">${o.map(i=>`<div class="ch-row"><span class="ch-av" style="background:${i.amount>=0?"#3fa56d":"#e0895a"}">${i.amount>=0?"+":"−"}</span>
          <span><div class="ch-n">${$(i.what)}</div><div class="ch-s">${$([i.for?`for ${i.for}`:"",J(i.at)].filter(Boolean).join(" · "))}</div></span>
          <span class="ch-amt ${i.amount>=0?"ch-plus":"ch-minus"}">${xe(i.amount,!0)}</span></div>`).join("")}</div>
        ${o.length?"":'<div class="ch-empty">Nothing earned or spent yet.</div>'}</div></div>`,n.querySelector("[data-back]").addEventListener("click",V),{items:[n.querySelector("[data-back]")]}},photos(){a.classList.add("ch-on-light"),n.innerHTML=`<div class="ch-sheetapp">${Q("Photos")}<div class="ch-scroll">${P.length?`<div class="ch-pics">${P.map((o,i)=>`<button data-i="${i}"><img alt="Photo ${i+1}" src="${o.url}"></button>`).join("")}</div>`:'<div class="ch-empty">No photos yet. Open the camera and press Space.</div>'}</div></div>`,n.querySelector("[data-back]").addEventListener("click",V);const t=[...n.querySelectorAll(".ch-pics button")];for(const o of t)o.addEventListener("click",()=>ie("photo",Number(o.dataset.i)));return{items:[n.querySelector("[data-back]"),...t],first:t.length}},photo(t){return n.innerHTML=`<div class="ch-sheetapp">${Q("","Photos")}<div class="ch-scroll ch-big"><img alt="Photo" src="${P[t].url}"></div></div>`,n.querySelector("[data-back]").addEventListener("click",V),{items:[n.querySelector("[data-back]")]}},settings(){return ke(B,"Settings",!0)},incoming(){a.classList.remove("ch-on-light");const t=R;n.innerHTML=`<div class="ch-callscreen ch-ringing"><span class="ch-av" style="background:${ee(t.who)}">${$(t.name.charAt(0))}</span><h3>${$(t.name)}</h3><p>Incoming call</p>
        <div class="ch-callbtns"><button class="ch-no" data-a="no"><span>${K.end}</span>Decline</button><button class="ch-go" data-a="go"><span>${K.call}</span>Answer</button></div></div>`;const[o,i]=n.querySelectorAll(".ch-callbtns button");return o.addEventListener("click",()=>ce("ignore")),i.addEventListener("click",()=>ce("answer")),{items:[o,i],first:1,row:!0}},oncall(){a.classList.remove("ch-on-light");const t=q,o=Math.floor(t.t??0);n.innerHTML=`<div class="ch-callscreen"><span class="ch-av" style="background:${ee(t.who)}">${$(t.name.charAt(0))}</span><h3>${$(t.name)}</h3>
        <p class="ch-calltime">${t.state==="dialling"?"Calling…":t.state==="no-answer"?"No answer":`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")}`}</p>
        <div class="ch-callbtns"><button class="ch-no"><span>${K.end}</span>End</button></div></div>`;const i=n.querySelector(".ch-no");return i.addEventListener("click",Ee),{items:[i]}}};function ke(t,o,i=!1){a.classList.add("ch-on-light"),n.innerHTML=`<div class="ch-sheetapp">${Q(o)}<div class="ch-scroll"><div class="ch-page"></div>${i&&v?'<div class="ch-page" style="padding-top:0"><button class="cf-btn" data-quit style="width:100%">Quit to title</button></div>':""}</div></div>`,n.querySelector("[data-back]").addEventListener("click",V);const h=n.querySelector(".ch-page");g=t.mount(h,{store:s.store,settings:s.settings,close:G.close,toast:N=>d({kind:"info",text:N}),back:V})??null;const S=n.querySelector("[data-quit]");return S?.addEventListener("click",()=>{G.close(),v()}),{items:[],page:!0,quitBtn:S}}let _=null;function W(){g?.destroy?.(),g=null;const t=F();if(t.app==="camera"){z.classList.add("ch-away"),E.classList.remove("ch-gone"),f();return}E.classList.add("ch-gone"),z.classList.remove("ch-away"),b.textContent=fe(D()),Y=Math.round(D()*60);const o=t.app.startsWith("page:")?"page":t.app;_=o==="page"?ke(p.find(i=>`page:${i.id}`===t.app),p.find(i=>`page:${i.id}`===t.app)?.label??""):(oe[o]??oe.home)(t.arg),_.items.length?(m.bind(_.items),m.set(Math.min(_.first??0,_.items.length-1)),_.after?.()):m.clear(),f()}function ie(t,o){if(t==="camera"){T.push({app:t}),W();return}T.push({app:t,arg:o}),W()}function V(){T.pop(),W()}function re(t){O&&(O.mpp=Math.min(12,Math.max(.35,O.mpp*(t>0?1.5:1/1.5))),C=!0)}function Ve(t,o){const i=Math.hypot(t.x-o.x,t.y-o.y),h=n.querySelector(".ch-mapwrap canvas"),S=Math.max(80,Math.min(h?.clientWidth??280,h?.clientHeight??300)-60);O.mpp=Math.min(12,Math.max(.6,i/S))}function $e(){if(!y||F().app!=="map"||!_?.canvas||!C)return;const t=_.canvas,o=t.clientWidth,i=t.clientHeight;if(!o||!i)return;const h=Math.min(2,globalThis.devicePixelRatio||1);t.width!==Math.round(o*h)&&(t.width=Math.round(o*h),t.height=Math.round(i*h));const S=t.getContext("2d");S.setTransform(h,0,0,h,0,0),x.draw(S,o,i,O,{player:ne(),markers:_.marks,route:L?.points,selected:k,showStory:_.showStory}),C=!1}function Me(t){I??=Mt(e.features.roads),X??=Ct(e);const o=ne(),i=e.controller?"bike":"foot",h=Oe(I,o,t,i);L={id:t.id,label:t.label,points:h.points,left:h.length,mode:i,straight:h.straight,m:t},X.set(h.points,{onArrive:()=>{const S=L;L=null,d({kind:"info",text:`You’re there: ${S.label}`}),dispatchEvent(new CustomEvent("ts:arrived",{detail:{id:S.id}}))},onStray:()=>Se()}),d({kind:"info",text:`Route to ${t.label}: ${pe(h.length)}${h.straight?" (no road: straight line)":""}`}),G.close()}let se=0;function Se(){if(!L||se>0)return;se=1;const t=ne(),o=Oe(I,t,L.m,L.mode);L.points=o.points,L.left=o.length,X.set(o.points,{onArrive:()=>{const i=L;L=null,d({kind:"info",text:`You’re there: ${i.label}`}),dispatchEvent(new CustomEvent("ts:arrived",{detail:{id:i.id}}))},onStray:()=>Se()})}function ze(){L=null,X?.clear()}function ce(t){const o=R;o&&(R=null,T=T.filter(i=>i.app!=="incoming"),t==="answer"?(j("answer",o.id),q={...o,t:0,state:"on"},T.push({app:"oncall"})):j("ignore",o.id),y&&W())}async function Le(t){const o=H("contacts").find(S=>S.id===t);q={id:null,who:t,name:o?.name??t,t:0,state:"dialling"},T.push({app:"oncall"}),W();const i=q;let h;try{h=await Promise.resolve(j("call",t))}catch{h=null}setTimeout(()=>{q===i&&(h?.answered?(q.state="on",q.id=h.id??null):(q.state="no-answer",setTimeout(()=>{q===i&&Ee()},1500)),y&&F().app==="oncall"&&W())},1600)}function Ee(){q?.state==="on"&&j("hangUp",q.id),q=null,T=T.filter(t=>t.app!=="oncall"),y&&W()}function ge(){const t=e.renderer.domElement;if(!t.width||!t.height)return null;let o=j("shutter",{game:e});if(!o){e.render();const h=M.createElement("canvas");h.width=480,h.height=Math.round(480*t.height/t.width),h.getContext("2d").drawImage(t,0,0,h.width,h.height),o=h.toDataURL("image/jpeg",.86)}P.push({url:o,at:D()}),P.length>24&&P.shift();const i=E.querySelector(".ch-flash");return i.classList.remove("ch-on"),i.offsetWidth,i.classList.add("ch-on"),dispatchEvent(new CustomEvent("ts:photo",{detail:{at:D()}})),o}function le(t,o){const i=_.items.length,h=_.grid;let S=m.index+t+o*h;(S<0||S>=i)&&(S=Math.max(0,Math.min(i-1,S))),m.set(S)}function Te(t){if(!y)return!1;const o=F().app;return o==="camera"?t==="ok"||t==="x"?(ge(),!0):t==="back"||t==="view"?(V(),!0):!1:t==="view"||t==="start"?(G.close(),!0):g?.intent?.(t)?!0:_?.page?t==="down"&&_.quitBtn?(m.bind([_.quitBtn]),!0):t==="ok"&&m.el===_.quitBtn?(_.quitBtn.click(),!0):(t==="back"&&V(),!0):(_?.grid?t==="left"?le(-1,0):t==="right"?le(1,0):t==="up"?le(0,-1):t==="down"&&le(0,1):_?.row&&(t==="left"||t==="right")?m.move(t==="left"?-1:1):(t==="up"||t==="down")&&(m.move(t==="up"?-1:1),_?.after?.()),o==="map"&&(t==="tabPrev"?re(1):t==="tabNext"?re(-1):(t==="left"||t==="right")&&(O.cx+=(t==="left"?-60:60)*O.mpp,C=!0)),t==="ok"?m.el?.click():t==="back"&&(o==="home"?G.close():o==="incoming"?ce("ignore"):V()),!0)}function Ye(t){const o=t.key;if(!y)return o==="Tab"||o==="Escape"?(t.preventDefault(),G.open(),!0):o==="m"||o==="M"?(G.open("map"),!0):!1;if(o==="Tab")return t.preventDefault(),F().app==="camera"?V():G.close(),!0;if(F().app==="camera"&&o===" ")return t.preventDefault(),ge(),!0;const i=Qe(o);return F().app==="camera"&&!["ok","back"].includes(i)||!i?!1:(t.preventDefault(),Te(i))}function Ue(t){if(se=Math.max(0,se-t),R&&(R.t+=t,R.t>Pt&&(d({kind:"call",from:R.name,text:"Missed call",missed:!0}),ce("ignore"))),q?.state==="on"){const o=Math.floor(q.t);if(q.t+=t,y&&F().app==="oncall"&&Math.floor(q.t)!==o){const i=n.querySelector(".ch-calltime"),h=Math.floor(q.t);i&&(i.textContent=`${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}`)}}if(X&&L&&(e.mode==="walk"||e.controller)){const i=X.update(e.walker.x,e.walker.y,e.walker.z);L&&i!=null&&(L.left=i)}y&&F().app==="map"&&(C=!0,$e()),y&&F().app!=="camera"&&Math.round(D()*60)!==Y&&(b.textContent=fe(D()),Y=Math.round(D()*60),F().app==="home"&&W())}const G={get isOpen(){return y},get app(){return y?F().app:null},get photos(){return P.slice()},get route(){return L?{id:L.id,label:L.label,left:L.left,points:L.points.length,straight:L.straight}:null},get ringing(){return R?{...R}:null},get inCall(){return q?{...q}:null},open(t="home",o){y||(y=!0,l()),T=[],R?T.push({app:"incoming"}):q?T.push({app:"oncall"}):t!=="home"&&T.push({app:t,arg:o}),W()},close(){y=!1,g?.destroy?.(),g=null,z.classList.add("ch-away"),E.classList.add("ch-gone"),m.clear(),_=null,f()},toggle(){y?G.close():G.open()},setSource(t){c=t??{},y&&W(),f()},setPages(t){p=t??[],y&&W()},setQuit(t){v=t??null},setDay(t){w=t??"",y&&F().app==="home"&&W()},setSkin(t){z.style.setProperty("--skin",t)},refresh(){y&&F().app!=="camera"&&W(),f()},ring(t){if(R||q){j("ignore",t.id);return}R={...t,t:0},d({kind:"call",from:t.name,text:"Incoming call",ring:!0}),y&&(T.push({app:"incoming"}),W())},notify(t){d(t),f()},guideTo(t){const o=H("markers").find(i=>i.id===t);o&&Me(o)},stopRoute:ze,shoot:ge,unread(){return H("threads").reduce((t,o)=>t+(o.unread??0),0)},tick:Ue,intent:Te,key:Ye,view(t){O={...O??{},...t},C=!0,$e()}};return G}function Ft(e,{store:r=globalThis.localStorage,parent:s=document.body}={}){const d=s.ownerDocument;we("ts-hud-css",ht,d);const l=d.createElement("div");l.className="ch",l.id="ts-hud",l.innerHTML='<div class="ch-prompt-slot"></div><div class="ch-banners"></div><div class="ch-foothint ch-gone"></div>',s.appendChild(l);const f=l.querySelector(".ch-prompt-slot"),u=l.querySelector(".ch-banners"),M=l.querySelector(".ch-foothint"),z=at(e,r),E=[];let a=null,n="",b=!0,m=null,c=null,p=null;const v={text:["msg","Message"],call:["tel","Call"],money:["wallet","Wallet"],info:["map",""]};function w(x){const[I,X]=v[x.kind]??v.info,L=B=>`<span class="ch-key${ae()?" ch-pad":""}">${B}</span>`,O=x.ring?`<span class="ch-hint">${L(ae()?"View":"Tab")}Answer</span>`:"",k=d.createElement("div");k.className=`ch-banner${x.ring?" ch-ring":""}`;const C=String(x.text??"");k.innerHTML=`<span class="ch-app-i ch-${I}">${K[I]}</span><div><b>${$(x.from??X)}</b><p>${$(C.length>80?`${C.slice(0,78)}…`:C)}</p></div>${O}`,p?.isOpen||u.replaceChildren(k),clearTimeout(m),x.ring||(m=setTimeout(()=>{k.classList.add("ch-out"),setTimeout(()=>k.remove(),400)},4200)),dispatchEvent(new CustomEvent(x.kind==="call"?"ts:call":x.kind==="text"?"ts:text":"ts:notice",{detail:{...x}}))}p=jt(e,l,{prefs:z,notify:w,objective:()=>c,still:()=>De(e),onChange:()=>{p?.isOpen?u.replaceChildren():p?.ringing||u.querySelector(".ch-ring")?.remove(),y()}});function y(){if(!p?.isOpen||p.app==="camera"){M.classList.add("ch-gone");return}const x=ae(),I=L=>`<span class="ch-key${x?" ch-pad":""}">${L}</span>`,X=[[x?"↕":"↑↓","Choose"],[x?"A":"Enter","Open"],[x?"B":"Esc","Back"],[x?"View":"Tab","Put away"]];p.app==="map"&&X.splice(2,0,[x?"LB RB":"Q E","Zoom"]),M.innerHTML=X.map(([L,O])=>`<span>${I(L)}${O}</span>`).join(""),M.classList.remove("ch-gone")}const T=Ze(()=>{y(),n=""});function g(){return a?(a.act?.(),n="",!0):!1}function P(){const x=a?ae()?"X":(a.key??"e").toUpperCase():"",I=a?`${x}|${a.label}`:"";I!==n&&(n=I,f.innerHTML=a?`<div class="ch-prompt"><span class="ch-key${ae()?" ch-pad":""}">${$(x)}</span>${$(a.label)}</div>`:"")}const R=e.onUpdate(x=>{if(p.tick(x),!b)return;a=xt(e)&&!p.isOpen?mt(E,{x:e.walker.x,y:e.walker.y,z:e.walker.z,yaw:e.walker.yaw}):null,P()}),q=[ye({prio:80,modal:()=>p.isOpen&&p.app!=="camera",busy:()=>p.isOpen,key:x=>x.metaKey||x.ctrlKey||x.altKey?!1:p.key(x),intent:x=>(x==="view"||x==="start")&&!p.isOpen?(p.open(),!0):p.intent(x)},e),ye({prio:70,key:x=>(x.key==="e"||x.key==="E"||a?.key&&x.key===a.key)&&!x.repeat?g():!1,intent:x=>x==="x"?g():!1},e)];return{root:l,phone:p,notify:w,objective(x){c=x||null},get objectiveText(){return c},interact:{add(x){return E.push(x),()=>{const I=E.indexOf(x);I>=0&&E.splice(I,1)}},get current(){return a},get list(){return E.slice()}},show(x){b=x,l.classList.toggle("ch-gone",!x),x||(f.innerHTML="",n="")},destroy(){R(),T(),q.forEach(x=>x()),l.remove()}}}export{lt as L,Dt as R,Rt as W,Xt as _,ct as a,dt as b,bt as c,Wt as d,Bt as e,_t as f,Nt as i,Ft as m};
