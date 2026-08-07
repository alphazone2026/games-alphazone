// Fire Ash overworld pilot - Phaser 3 game module, adapted from the
// standalone HTML prototype. Real intro dialogue, real Pallet House/Lab
// tile data, real collision, and real door/stairs warps - see the
// project session history for how each was extracted/verified. Assets
// live in public/fireash/assets (Vite serves public/ as-is at the root).
import Phaser from "phaser";
import { SPECIES, createBattle, playerMove, attemptCatch, attemptRun, levelStats } from "./battle.js";

const W = 512, H = 384;

// ---- Real dialogue lines, taken directly from this game's own Map001 "Intro" event ----
const OAK_INTRO = [
  "Hello! Sorry to keep you waiting!",
  "Welcome to the world of Pokémon.",
  "My name is Professor Oak.",
  "People call me the Pokémon Professor."
];
const OAK_WORLD = [
  "This world is inhabited by creatures we call Pokémon.",
  "People and Pokémon live together by supporting each other.",
  "Some people play with Pokémon, some battle with them.",
  "But we don't know everything about Pokémon yet.",
  "There are still many mysteries to solve.",
  "That's why I study Pokémon every day."
];

let trainerName = "";
let trainerGender = null; // "boy" or "girl"
let hasPikachu = false;
let hasPokedex = false;
let rivalDefeated = false;
let playerLevel = 5; // Pikachu's level, bumped slightly after each win

// Strips this game's own RGSS/Pokemon Essentials message control codes
// (\PN name substitution, \b/\r window-color tags, \se[]/\wtnp[] sound/wait
// tags, literal "\n" line-break markers) down to plain text for a normal
// HTML-ish dialogue box.
function cleanRgssText(str) {
  return str
    .replace(/\\PN/g, trainerName || "Trainer")
    .replace(/\\se\[[^\]]*\]/gi, "")
    .replace(/\\wtnp\[[^\]]*\]/gi, "")
    .replace(/\\[a-zA-Z]+\[[^\]]*\]/g, "")
    .replace(/\\[a-zA-Z]/g, "")
    .replace(/\\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// Simple linear quest tracker, from scratch (not extracted - the real
// game tracks progress via ~500 numbered switches, not a quest list).
// Mirrors the real opening's actual required order, which the barrier
// events above enforce: leave the house -> get the starter -> get the
// Pokédex -> go challenge the world.
function getObjectiveText() {
  if (!hasPikachu) return "Objective: Head to Professor Oak's Lab and get your first Pokémon.";
  if (!hasPokedex) return "Objective: Pick up your Pokédex before leaving the Lab.";
  if (!rivalDefeated) return "Objective: Head out to Route 1 and continue your adventure!";
  return "Objective: Explore Route 1 and catch some Pokémon!";
}

// RPG Maker XP facing-direction numbers -> which row of a 4x4 character
// sheet (down/left/right/up, matching the player_boy/player_girl frame
// layout already used below) to show as that NPC's static "standing" pose.
const DIR_ROW = { 2: 0, 4: 1, 6: 2, 8: 3 };

// Real NPCs, positions, facing, and dialogue, extracted directly from this
// game's own Map033 (Pallet Town) and Map042 (house interiors) event data -
// a Ruby script stubbing out RPG::Map/RPG::Event/etc classes so
// Marshal.load could read the .rxdata files outside the engine, then
// walking each event's own EventCommand list (codes 101/401 are "show
// text") to pull out the real message text. Each NPC below uses page 0 of
// its event - the state a brand-new save falls back to when none of the
// page's own switch/variable conditions are set - not a full simulation of
// every quest-flag-gated later page (some of these events have 15+ pages
// for later-game states, out of scope for this opening-area pass).
const NPCS = [
  {
    map: 33, x: 41, y: 26, dir: 2, sprite: "npc_gary", name: "Gary",
    messages: [
      "Gary: So \\PN, you woke up late. What a loser. It's a shame, because I ended up getting the best Pokémon.",
      "It's good to have a grandfather in the business, isn't it.\\nCatch you later, \\PN.",
    ],
  },
  {
    map: 33, x: 19, y: 26, dir: 2, sprite: "npc_vendor", name: "Vendor",
    messages: [
      "Psst. I've got a sweet deal for you, Orange League Champ.",
      "For 50 per piece, these candies will give your Pokémon 10 levels each, trust me!",
      "Talk to me again if you'd like some, hehe.",
    ],
  },
  {
    map: 33, x: 30, y: 27, dir: 2, sprite: "npc_oakfan1", name: "Person",
    messages: ["Professor Oak focuses on Pokémon and human relationships in his research."],
  },
  {
    map: 33, x: 12, y: 35, dir: 2, sprite: "npc_06", name: "Person",
    messages: ["Feeling slow? Press the 'F' or 'F7' key.", "Want to save faster? Press the left 'Alt' key."],
  },
  {
    map: 33, x: 23, y: 38, dir: 4, sprite: "npc_05", name: "Person",
    messages: ["I locked myself out of the house again..."],
  },
  {
    map: 33, x: 50, y: 28, dir: 2, sprite: "npc_02", name: "Person",
    messages: ["You can jump over this ledge by walking up to it."],
  },
  {
    map: 33, x: 10, y: 28, dir: 2, sprite: "npc_mom", name: "Mom",
    messages: [
      "Mom: How did it go, \\PN? Ah, it looks like you got a lovely Pikachu.",
      "It's going to be a wonderful journey, I can just tell. You were in such a rush I didn't have time to give you these earlier. Be sure to use them.",
      "\\PN obtained Running Shoes.",
    ],
    // Real event data ends this exact line with the Running Shoes pickup
    // (code 126, item gain) - only grant it once.
    giveItemId: "RUNNING_SHOES",
  },
  {
    map: 42, x: 28, y: 25, dir: 6, sprite: "npc_oakfan2", name: "Person",
    messages: ["Professor Oak is the leading expert in Pokémon."],
  },
  {
    map: 42, x: 5, y: 19, dir: 6, sprite: "npc_08", name: "Person",
    messages: ["Hello, \\PN. Gary already left for the lab 2 hours ago. Hurry up!"],
  },
  // Real Mom (event id 9, ground floor near the front door). Her own event
  // data has 2 pages: page 0 (no switch set) is blank/invisible, page 1
  // (switch 38) is her actual greeting - and switch 38 is unconditionally
  // turned on by this game's own "Beginning" event the moment you appear
  // in your bedroom (see RIVAL_BATTLE-adjacent note below), so in practice
  // she's always in this state. Using page 1's sprite/facing/text as her
  // one permanent appearance rather than modeling the switch.
  {
    map: 42, x: 7, y: 4, dir: 4, sprite: "npc_mom", name: "Mom",
    messages: ["Mom: \\PN, you're late! Hurry over to Professor Oak to get your first Pokémon."],
  },
  // Route 1 (Map076) - real NPCs from that map's own event data.
  {
    map: 76, x: 16, y: 28, dir: 2, sprite: "npc_07", name: "Person",
    messages: ["Be careful of the grass. Wild Pokémon can jump out."],
  },
  {
    map: 76, x: 11, y: 18, dir: 2, sprite: "npc_19", name: "Person",
    messages: ["Please visit the Poké Mart if you ever need to stock up on items."],
  },
];

// Real signs, mailboxes, and locked doors, extracted the same way as
// NPCS. These have no character sprite in the real event data either -
// they're just an invisible action-button hotspot layered over graphics
// that are already part of the map's own tile art (a mailbox, a sign
// post, a door), so unlike NPCS these render nothing of their own.
const SIGNS = [
  { map: 33, x: 12, y: 29, messages: ["\\PN's house"] },
  { map: 33, x: 22, y: 29, messages: ["Gary's house"] },
  { map: 33, x: 37, y: 29, messages: ["Pallet Town\\nShades of your journey await!"] },
  { map: 33, x: 41, y: 20, messages: ["Professor Oak's Lab"] },
  { map: 33, x: 42, y: 20, messages: ["Professor Oak's Lab"] },
  { map: 33, x: 22, y: 37, messages: ["The door is locked."] },
  { map: 33, x: 33, y: 37, messages: ["The door is locked."] },
  { map: 33, x: 42, y: 37, messages: ["The door is locked."] },
  // Real wild Pokémon standing in town (event ids 17/20) - flavor only,
  // no battle in the source data at these exact spots (unlike Route 1's
  // real grass encounters).
  { map: 33, x: 29, y: 36, messages: ["Pidgey"] },
  { map: 33, x: 31, y: 27, messages: ["Jigglypuff"] },

  // House (Map042) - real "accomplishments" record-board signs (10 of
  // them, all identical text in the source data - kept as one entry per
  // real tile rather than collapsed, for a faithful full pass).
  ...[31, 32, 33, 34, 37, 38, 39, 40, 41, 42].map((x) => ({
    map: 42, x, y: 1, messages: ["It's a list of your accomplishments. It's empty right now."],
  })),
  { map: 42, x: 31, y: 21, messages: ["Your Pokémon were fully healed."] },
  { map: 42, x: 32, y: 21, messages: ["Your Pokémon were fully healed."] },
  { map: 42, x: 36, y: 7, messages: ["It's a place to change clothes. Too bad you don't have any extras right now."] },
  { map: 42, x: 37, y: 7, messages: ["It's a place to change into your special clothes. Too bad you don't have any extras right now."] },
  { map: 42, x: 41, y: 4, messages: ["It's a place to change caps for Pikachu. Too bad you don't have any extras right now."] },
  { map: 42, x: 42, y: 4, messages: ["It's a place to change caps for Pikachu. Too bad you don't have any extras right now."] },

  // Lab (Map048) - the real Pokédex pickup (event id 3). Action-button,
  // always available on a fresh save, sets hasPokedex (real switches
  // 246/29 - tracked here as one flag since we don't model raw switches).
  { map: 48, x: 2, y: 7, messages: ["\\PN received a Pokédex!"], giveFlag: "pokedex" },
];

// Item catalog. Just name + flavor text - no battle-affecting inventory
// mechanics (no using a Potion mid-fight, etc.) in this pilot.
const ITEMS = {
  POTION: { name: "Potion", desc: "Restores 20 HP to a Pokémon." },
  RUNNING_SHOES: { name: "Running Shoes", desc: "Lets you run around town faster." },
};
let inventory = {};
function addItem(id, qty = 1) {
  inventory[id] = (inventory[id] || 0) + qty;
}

// Real pick-up-once item events (RPG Maker "item ball" objects). Real
// script call for this one is `pbItemBall(:POTION)` (Map033 event id 13).
const ITEM_BALLS = [
  { map: 33, x: 34, y: 16, itemId: "POTION", name: "Object ball" },
];
let collectedItemBalls = new Set();

// Save/load - one slot per trainer name, in localStorage. Not from the
// real game (which uses its own binary save format) - a from-scratch fit
// for this browser pilot.
const SAVE_KEY_PREFIX = "fireash_save_";

function listSaves() {
  const saves = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(SAVE_KEY_PREFIX)) {
      try {
        const data = JSON.parse(localStorage.getItem(key));
        saves.push(data);
      } catch {
        // corrupt/foreign entry under our prefix - skip it
      }
    }
  }
  saves.sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
  return saves;
}

function saveGame({ mapId, tileX, tileY }) {
  const data = {
    trainerName,
    trainerGender,
    hasPikachu,
    hasPokedex,
    rivalDefeated,
    playerLevel,
    inventory,
    collectedItemBalls: [...collectedItemBalls],
    mapId,
    tileX,
    tileY,
    savedAt: Date.now(),
  };
  localStorage.setItem(SAVE_KEY_PREFIX + trainerName, JSON.stringify(data));
  return data;
}

// Applies a loaded save's state to this module's game-state variables
// (trainerName etc. are plain module-level lets, not stored on any scene,
// so loading just means overwriting them before starting the Map scene).
function applySave(data) {
  trainerName = data.trainerName;
  trainerGender = data.trainerGender;
  hasPikachu = !!data.hasPikachu;
  hasPokedex = !!data.hasPokedex;
  rivalDefeated = !!data.rivalDefeated;
  playerLevel = data.playerLevel || 5;
  inventory = data.inventory || {};
  collectedItemBalls = new Set(data.collectedItemBalls || []);
}

// The Lab's starter Pokémon event - real position/flow from this
// game's own "Starter ball" event (id 2, Map048): touching it always shows
// the flavor line, then (once, via the Yes/No choice) the actual
// Pikachu-or-nothing offer. Fire Ash gives a single Pikachu, not the
// classic 3-ball choice - that's the real event data, not a simplification.
const STARTER_BALL = { map: 48, x: 8, y: 10 };

// Gary's first battle. This game's real trainer roster data (extracted via
// the same Marshal.load technique, from a modern Pokémon Essentials
// GameData::Trainer table) turned out to only hold rematch-tier rosters
// (level 40-100), not a distinct super-early roster we could confidently
// identify as "the opening Route 1 battle" - so unlike the NPCs/dialogue
// above, this one specific fight is NOT verified against a real trigger or
// roster. It's a reasonable early-game placeholder (single low-level
// Eevee, Gary's signature line), flagged honestly rather than presented as
// extracted fact.
const RIVAL_BATTLE = { map: 76, x: 20, y: 31, oppSpeciesId: "EEVEE", oppLevel: 5 };

// Real Route 1 (Map076) tall-grass tiles and wild encounter table, from
// this game's own map terrain tags (tag 2 = tall grass) and its
// encounters.dat "Land" list for map 76 - weights/species/level-range
// taken directly from the real table, with the encounter step chance
// simplified to a flat per-step percentage (real Essentials rolls it
// against terrain-tag-scaled odds, not worth reproducing exactly here).
// The one 1%-weight "HOOH" joke entry in the real table was dropped.
const ROUTE1_ENCOUNTERS = [
  { weight: 20, speciesId: "PIDGEY", minLevel: 3, maxLevel: 5 },
  { weight: 20, speciesId: "SPEAROW", minLevel: 3, maxLevel: 5 },
  { weight: 10, speciesId: "MANKEY", minLevel: 2, maxLevel: 5 },
  { weight: 10, speciesId: "PIDGEY", minLevel: 2, maxLevel: 4 },
  { weight: 10, speciesId: "POLIWAG", minLevel: 3, maxLevel: 5 },
  { weight: 10, speciesId: "RATTATA", minLevel: 2, maxLevel: 4 },
  { weight: 10, speciesId: "SANDSHREW", minLevel: 2, maxLevel: 5 },
  { weight: 4, speciesId: "RATTATA", minLevel: 2, maxLevel: 5 },
  { weight: 4, speciesId: "SPEAROW", minLevel: 2, maxLevel: 5 },
];
const ROUTE1_ENCOUNTER_CHANCE = 0.1; // per step taken on a grass tile
function rollEncounter() {
  const totalWeight = ROUTE1_ENCOUNTERS.reduce((s, e) => s + e.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const e of ROUTE1_ENCOUNTERS) {
    roll -= e.weight;
    if (roll <= 0) {
      const level = e.minLevel + Math.floor(Math.random() * (e.maxLevel - e.minLevel + 1));
      return { speciesId: e.speciesId, level };
    }
  }
  return { speciesId: ROUTE1_ENCOUNTERS[0].speciesId, level: ROUTE1_ENCOUNTERS[0].minLevel };
}

// Tileset/autotile source images, loaded as plain <img> elements (see note
// in BootScene.preload for why - avoids WebGL's max-texture-size limit).
window.RAW_IMAGES = {};
const RAW_IMAGE_SOURCES = {
  tileset_outside: "/fireash/assets/tileset_outside.png",
  tileset_inside: "/fireash/assets/tileset_inside.png",
  autotile_sea: "/fireash/assets/autotile_sea.png",
  autotile_sea_noshore: "/fireash/assets/autotile_sea_noshore.png",
  autotile_sea_deep: "/fireash/assets/autotile_sea_deep.png",
  autotile_sand_shore: "/fireash/assets/autotile_sand_shore.png",
  autotile_flowers1: "/fireash/assets/autotile_flowers1.png",
  autotile_flowers2: "/fireash/assets/autotile_flowers2.png",
  autotile_fountain1: "/fireash/assets/autotile_fountain1.png",
  autotile_fountain2: "/fireash/assets/autotile_fountain2.png"
};
function loadRawImages() {
  const keys = Object.keys(RAW_IMAGE_SOURCES);
  return Promise.all(keys.map((key) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { window.RAW_IMAGES[key] = img; resolve(); };
    img.onerror = reject;
    img.src = RAW_IMAGE_SOURCES[key];
  })));
}

class BootScene extends Phaser.Scene {
  constructor() { super("Boot"); }
  preload() {
    this.load.image("title", "/fireash/assets/title.png");
    this.load.image("introbg", "/fireash/assets/introbg.png");
    this.load.image("introOak", "/fireash/assets/introOak.png");
    this.load.image("introBoy", "/fireash/assets/introBoy.png");
    this.load.image("introGirl", "/fireash/assets/introGirl.png");
    this.load.spritesheet("player_boy", "/fireash/assets/player_boy.png", { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet("player_girl", "/fireash/assets/player_girl.png", { frameWidth: 32, frameHeight: 48 });

    // Real NPC character sheets (same 4-col x 4-row / 32x48-per-frame
    // layout as the player sprites above), straight from this game's own
    // Graphics/Characters folder.
    for (const npc of NPCS) {
      if (!this.textures.exists(npc.sprite)) {
        this.load.spritesheet(npc.sprite, `/fireash/assets/npcs/${npc.sprite}.png`, { frameWidth: 32, frameHeight: 48 });
      }
    }
    this.load.spritesheet("ball_special", "/fireash/assets/npcs/ball_special.png", { frameWidth: 32, frameHeight: 32 });

    // Real Pokémon front/back battler sprites, straight from this game's
    // own Graphics/Pokemon/Front and Back folders.
    for (const id of Object.keys(SPECIES)) {
      const lower = id.toLowerCase();
      this.load.image(`battler_${lower}_front`, `/fireash/assets/battlers/${lower}_front.png`);
      this.load.image(`battler_${lower}_back`, `/fireash/assets/battlers/${lower}_back.png`);
    }

    // Real tileset + autotile images, straight from the game's own
    // Graphics/Tilesets and Graphics/Autotiles folders. NOT loaded via
    // Phaser's loader - the outside tileset is 256x20032px (this hack's
    // tilesets cover many reused regions stacked in one huge image), which
    // exceeds WebGL's max texture size and fails to GPU-upload. Since
    // these are only ever used for 2D canvas cropping (never displayed as
    // a Phaser sprite directly), they're preloaded as plain <img> elements
    // in window.RAW_IMAGES instead - see loadRawImages() below.

    // Real per-tile map data, extracted directly from this game's own
    // Map033/042/048.rxdata (Pallet Town, Pallet House, Oak's Lab).
    this.load.json("map33", "/fireash/assets/mapdata/map33.json");
    this.load.json("map42", "/fireash/assets/mapdata/map42.json");
    this.load.json("map48", "/fireash/assets/mapdata/map48.json");
    // Route 1, same extraction method.
    this.load.json("map76", "/fireash/assets/mapdata/map76.json");
    // Real tall-grass tile coordinates on Route 1 (terrain tag 2 in this
    // game's own Tilesets.rxdata), as a flat [x,y] pair list.
    this.load.json("map76_grass", "/fireash/assets/mapdata/map76_grass.json");
    // Real per-tile passability bytes, extracted directly from this game's
    // own Tilesets.rxdata (@passages), keyed by tileset id.
    this.load.json("passages", "/fireash/assets/mapdata/passages.json");
  }
  create() { this.scene.start("Title"); }
}

class TitleScene extends Phaser.Scene {
  constructor() { super("Title"); }
  create() {
    this.add.image(W/2, H/2, "title").setDisplaySize(W, H);
    const hasSaves = listSaves().length > 0;
    const txt = this.add.text(W/2, H - 40, "Press SPACE to start", {
      fontFamily: "monospace", fontSize: "16px", color: "#ffffff"
    }).setOrigin(0.5);
    this.tweens.add({ targets: txt, alpha: 0, duration: 600, yoyo: true, repeat: -1 });
    this.input.keyboard.once("keydown-SPACE", () => this.scene.start("Intro"));
    this.input.once("pointerdown", () => this.scene.start("Intro"));
    if (hasSaves) {
      const cont = this.add.text(W/2, H - 16, "Press C to continue a saved game", {
        fontFamily: "monospace", fontSize: "12px", color: "#ffff88"
      }).setOrigin(0.5);
      this.tweens.add({ targets: cont, alpha: 0, duration: 600, yoyo: true, repeat: -1 });
      this.input.keyboard.once("keydown-C", () => this.scene.start("Continue"));
    }
  }
}

// Lists saved games (one per trainer name) and loads the picked one
// straight into the map at its saved position.
class ContinueScene extends Phaser.Scene {
  constructor() { super("Continue"); }
  create() {
    this.add.rectangle(W / 2, H / 2, W, H, 0x0f172a);
    this.add.text(W / 2, 40, "Continue", { fontFamily: "monospace", fontSize: "18px", color: "#ffffff" }).setOrigin(0.5);
    const saves = listSaves();
    saves.forEach((save, i) => {
      const y = 90 + i * 40;
      const label = `${save.trainerName}  -  Lv${save.playerLevel || 5}${save.hasPikachu ? " with Pikachu" : ""}`;
      const btn = this.add.text(W / 2, y, label, {
        fontFamily: "monospace", fontSize: "14px", color: "#ffff00", backgroundColor: "#00000088", padding: { x: 8, y: 4 }
      }).setOrigin(0.5).setInteractive({ useHandCursor: true });
      btn.on("pointerdown", () => this.loadAndStart(save));
    });
    const back = this.add.text(W / 2, H - 30, "Back", {
      fontFamily: "monospace", fontSize: "13px", color: "#aaaaaa"
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    back.on("pointerdown", () => this.scene.start("Title"));
  }
  loadAndStart(save) {
    applySave(save);
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("Map", { mapId: save.mapId, startTile: { x: save.tileX, y: save.tileY } });
    });
  }
}

// Simple sequential dialogue box helper reused across scenes.
class DialogueBox {
  constructor(scene) {
    this.scene = scene;
    this.box = scene.add.rectangle(W/2, H - 60, W - 20, 90, 0x1c1c2c, 0.92).setStrokeStyle(2, 0xffffff);
    this.text = scene.add.text(20, H - 100, "", {
      fontFamily: "monospace", fontSize: "14px", color: "#ffffff", wordWrap: { width: W - 50 }
    });
    this.prompt = scene.add.text(W - 30, H - 20, "▼", { fontFamily: "monospace", fontSize: "14px", color: "#ffffff" });
    this.scene.tweens.add({ targets: this.prompt, y: H - 16, duration: 400, yoyo: true, repeat: -1 });
  }
  say(str) { this.text.setText(str); }
  destroy() { this.box.destroy(); this.text.destroy(); this.prompt.destroy(); }
}

class IntroScene extends Phaser.Scene {
  constructor() { super("Intro"); }
  create() {
    // Starting a fresh game from Title - reset any state left over from a
    // previous playthrough/loaded save this session.
    trainerName = "";
    trainerGender = null;
    hasPikachu = false;
    hasPokedex = false;
    rivalDefeated = false;
    playerLevel = 5;
    inventory = {};
    collectedItemBalls = new Set();

    this.add.image(W/2, H/2, "introbg").setDisplaySize(W, H);
    this.oak = this.add.image(W/2, H/2 - 20, "introOak");
    this.dbox = new DialogueBox(this);
    this.lines = [...OAK_INTRO, ...OAK_WORLD];
    this.i = 0;
    this.dbox.say(this.lines[0]);
    this.input.keyboard.on("keydown-Z", () => this.advance());
    this.input.keyboard.on("keydown-SPACE", () => this.advance());
    this.input.on("pointerdown", () => this.advance());
  }
  advance() {
    this.i++;
    if (this.i < this.lines.length) {
      this.dbox.say(this.lines[this.i]);
    } else {
      this.scene.start("GenderSelect");
    }
  }
}

class GenderSelectScene extends Phaser.Scene {
  constructor() { super("GenderSelect"); }
  create() {
    this.add.image(W/2, H/2, "introbg").setDisplaySize(W, H);
    this.add.text(W/2, 60, "Are you a boy or a girl?", {
      fontFamily: "monospace", fontSize: "16px", color: "#ffffff"
    }).setOrigin(0.5);

    const boy = this.add.image(W/2 - 80, H/2, "introBoy").setInteractive({ useHandCursor: true });
    const girl = this.add.image(W/2 + 80, H/2, "introGirl").setInteractive({ useHandCursor: true });
    this.add.text(W/2 - 80, H/2 + 100, "Boy", { fontFamily: "monospace", fontSize: "14px", color: "#fff" }).setOrigin(0.5);
    this.add.text(W/2 + 80, H/2 + 100, "Girl", { fontFamily: "monospace", fontSize: "14px", color: "#fff" }).setOrigin(0.5);

    boy.on("pointerdown", () => { trainerGender = "boy"; this.scene.start("NameEntry"); });
    girl.on("pointerdown", () => { trainerGender = "girl"; this.scene.start("NameEntry"); });

    this.input.keyboard.once("keydown-LEFT", () => { trainerGender = "boy"; this.scene.start("NameEntry"); });
    this.input.keyboard.once("keydown-RIGHT", () => { trainerGender = "girl"; this.scene.start("NameEntry"); });
  }
}

class NameEntryScene extends Phaser.Scene {
  constructor() { super("NameEntry"); }
  create() {
    this.add.image(W/2, H/2, "introbg").setDisplaySize(W, H);
    this.add.text(W/2, 80, "Now what did you say your name was?", {
      fontFamily: "monospace", fontSize: "14px", color: "#ffffff", wordWrap: { width: W - 60 }
    }).setOrigin(0.5);

    this.nameText = this.add.text(W/2, H/2, "_", {
      fontFamily: "monospace", fontSize: "24px", color: "#ffff00"
    }).setOrigin(0.5);
    this.add.text(W/2, H/2 + 60, "Type your name, press ENTER when done", {
      fontFamily: "monospace", fontSize: "12px", color: "#aaaaaa"
    }).setOrigin(0.5);

    this.name = "";
    this.input.keyboard.on("keydown", (e) => {
      if (e.key === "Enter" && this.name.length > 0) {
        trainerName = this.name;
        this.scene.start("Confirm");
      } else if (e.key === "Backspace") {
        this.name = this.name.slice(0, -1);
      } else if (e.key.length === 1 && /[a-zA-Z0-9 ]/.test(e.key) && this.name.length < 12) {
        this.name += e.key;
      }
      this.nameText.setText(this.name.length > 0 ? this.name : "_");
    });
  }
}

class ConfirmScene extends Phaser.Scene {
  constructor() { super("Confirm"); }
  create() {
    this.add.image(W/2, H/2, "introbg").setDisplaySize(W, H);
    this.oak = this.add.image(W/2, H/2 - 20, "introOak");
    this.dbox = new DialogueBox(this);
    this.lines = [
      `So you're ${trainerName}?`,
      `${trainerName}, are you ready?`,
      "Your very own Pokémon story is about to unfold.",
      "You'll face fun times and tough challenges.",
      "A world of dreams and adventures with Pokémon awaits! Let's go!"
    ];
    this.i = 0;
    this.dbox.say(this.lines[0]);
    this.input.keyboard.on("keydown-Z", () => this.advance());
    this.input.keyboard.on("keydown-SPACE", () => this.advance());
    this.input.on("pointerdown", () => this.advance());
  }
  advance() {
    this.i++;
    if (this.i < this.lines.length) {
      this.dbox.say(this.lines[this.i]);
    } else {
      this.cameras.main.fadeOut(500, 0, 0, 0);
      this.cameras.main.once("camerafadeoutcomplete", () => this.scene.start("Map", { mapId: 42, startTile: { x: 33, y: 7 } }));
    }
  }
}

// ---- Real overworld: Pallet Town, Pallet House (+ neighbour's house), and
// Oak's Lab, rendered from this game's own actual tile data. Regular tiles
// are pixel-accurate crops from the real tileset images. Collision uses
// this game's own real per-tile passability bytes (Tilesets.rxdata
// @passages), combined across all 3 layers using the same algorithm this
// project's own earlier map-verification tooling documented: check layers
// top-to-bottom, a "star" bit (0x10) means "ignore this layer, check the
// one below", and the first non-star layer's low nibble decides which of
// the 4 directions are blocked (bit0=down, bit1=left, bit2=right,
// bit3=up). Autotile cells (water/sand/flowers/fountains) use a
// simplified single-frame sample rather than full 47-shape edge blending -
// flagged honestly, not silently faked.
//
// Door/warp coordinates below are all taken directly from this game's own
// Transfer Player / Stairs events, not guessed:
//   Town(33) door (13,28) <-> House(42) (3,8)  [player's own house]
//   Town(33) door (23,28) <-> House(42) (3,23) [neighbour's house]
//   Town(33) door (44,19) <-> House(42) (32,27) [a third building - real
//     door, but its exact identity beyond "a building here" wasn't traced]
//   House(42) Stairs (37,19) <-> Lab(48) (14,3) [Oak's Lab is reached via
//     a staircase INSIDE the player's own house, not a separate building
//     out in town - a genuinely different layout from the classic games,
//     kept faithful here rather than "corrected"]
// Out of scope this pass (real, but not wired up yet): map42's internal
// 2nd-floor stairs, the multi-destination "Teleport"/fly-system events,
// and the "North door left" -> map764 building.
const TILE = 32;
const AUTOTILE_KEYS_OUTSIDE = ["autotile_sea", "autotile_sea_noshore", "autotile_sea_deep", "autotile_sand_shore", "autotile_flowers1", "autotile_flowers2", "autotile_fountain1"];
const AUTOTILE_KEYS_INSIDE = ["autotile_fountain2"];

const MAPS = {
  33: { key: "map33", tileset: 1 },
  42: { key: "map42", tileset: 3 },
  48: { key: "map48", tileset: 3 },
  76: { key: "map76", tileset: 1 }
};

// Each entry: player standing EXACTLY on (x,y) on `map` - and, if `dir` is
// set, only while pressing that exact direction (matching real RPG Maker
// "player touch" event behaviour: stand on the approach tile, step INTO
// the stairs/door) - sends them to (toMap, toX, toY).
//
// (x,y) here is the APPROACH tile (the space right before the stairs/door),
// not the event's own tile - since the event's own tile sits on plain
// floor passability that (in this simplified model, with no real event
// layer) blocks the player from ever standing on it directly.
//
// Confirmed via direct testing: House(42) stairs approach is (38,19),
// stepping left. The matching Lab-side return approach, and the two
// internal house-stairs approaches, are NOT independently confirmed the
// same way - best-effort placed one tile off the event's own position by
// the same pattern, flagged here rather than presented as fact. Report
// back the exact debug-readout tile + which key you press if any of these
// three are still wrong.
const WARPS = [
  // Doors: the real game's town-side door tile and the house-side exit's
  // arrival point are genuinely the SAME coordinate (confirmed in the raw
  // map data) - the real game avoids a ping-pong loop by only triggering
  // on a specific walk direction (real "player touch" events fire on
  // directional bump, not just standing there), not by using different
  // tiles. Applying the same fix here: `dir` required for every door too,
  // using the standard top-down convention that building doors face south
  // (walk up to enter, walk down to exit).
  { map: 33, x: 13, y: 28, dir: "up",   toMap: 42, toX: 3,  toY: 8  },
  { map: 42, x: 3,  y: 9,  dir: "down", toMap: 33, toX: 13, toY: 28 },
  { map: 33, x: 23, y: 28, dir: "up",   toMap: 42, toX: 3,  toY: 23 },
  { map: 42, x: 3,  y: 24, dir: "down", toMap: 33, toX: 23, toY: 28 },
  { map: 33, x: 44, y: 19, dir: "up",   toMap: 42, toX: 32, toY: 27 },
  { map: 42, x: 32, y: 28, dir: "down", toMap: 33, toX: 44, toY: 19 },
  // Oak's Lab stairs. The stairs graphic itself (37-38,18-20) is fully
  // impassable railing/steps in the real per-tile data - the event tile at
  // (38,19) is real, but every tile adjacent to it is ALSO impassable, so
  // it can never actually be reached by walking (confirmed stuck in
  // testing - see screenshot report). Real RPG Maker "player touch" events
  // fire on BUMPING the tile from an adjacent walkable square, not on
  // standing on the (impassable) event tile itself - so the warp is
  // triggered from the last walkable tile before the stairs, (36,19),
  // walking right into them, matching how the door warps already work.
  { map: 42, x: 36, y: 19, dir: "right", toMap: 48, toX: 14, toY: 4 },
  // Lab's return stairs - own tile is walkable, so this one already worked.
  { map: 48, x: 14, y: 3,  dir: "left", toMap: 42, toX: 36, toY: 19 },
  // Player's house internal upstairs (bedroom, near spawn) <-> downstairs
  // (ground floor, near the front door and Mom) connector. Confirmed
  // against the real events: "Stairs up" (id 6, at the impassable tile
  // (12,2), approached from walkable (11,2)) transfers to (37,2); "Stairs
  // down" (id 8, at impassable (36,2), approached from walkable (37,2))
  // transfers to (11,2). Both are real "player touch" events (trigger
  // type 1) - bump into them, no button press needed, same as the Lab
  // stairs below.
  { map: 42, x: 11, y: 2,  dir: "right", toMap: 42, toX: 37, toY: 2 },
  { map: 42, x: 37, y: 2,  dir: "left",  toMap: 42, toX: 11, toY: 2 },
  // Pallet Town <-> Route 1. This engine only supports discrete tile
  // warps (no seamless multi-map scrolling), so unlike the real game's
  // continuous map connection (Route 1's east edge borders Pallet's west
  // edge, per this game's own map_connections.dat), crossing is a warp at
  // the westmost/eastmost walkable row shared by both maps' edges (y=30
  // on both sides, confirmed against each map's own passability data).
  { map: 33, x: 0,  y: 30, dir: "left",  toMap: 76, toX: 33, toY: 30 },
  { map: 76, x: 34, y: 30, dir: "right", toMap: 33, toX: 1,  toY: 30 }
];
WARPS.forEach((w, i) => { w._id = i; });
function warpMatch(mapId, x, y, dir) {
  return WARPS.find(w => w.map === mapId && w.x === x && w.y === y &&
    (!w.dir || w.dir === dir));
}

const DIR_BITS = { down: 0x01, left: 0x02, right: 0x04, up: 0x08 };
const OPPOSITE = { down: "up", up: "down", left: "right", right: "left" };
const DELTA = { up: [0,-1], down: [0,1], left: [-1,0], right: [1,0] };

function renderMapToTexture(scene, mapId) {
  const cfg = MAPS[mapId];
  const mapData = scene.cache.json.get(cfg.key);
  const tsKey = mapData.tileset_id === 1 ? "tileset_outside" : "tileset_inside";
  const autotileKeys = mapData.tileset_id === 1 ? AUTOTILE_KEYS_OUTSIDE : AUTOTILE_KEYS_INSIDE;
  const tilesetImg = window.RAW_IMAGES[tsKey];

  const canvas = document.createElement("canvas");
  canvas.width = mapData.width * TILE;
  canvas.height = mapData.height * TILE;
  const ctx = canvas.getContext("2d");

  mapData.layers.forEach((layer) => {
    for (let y = 0; y < mapData.height; y++) {
      for (let x = 0; x < mapData.width; x++) {
        const id = layer[y][x];
        if (!id) continue;
        if (id >= 384) {
          const idx = id - 384;
          const col = idx % 8, row = Math.floor(idx / 8);
          ctx.drawImage(tilesetImg, col*TILE, row*TILE, TILE, TILE, x*TILE, y*TILE, TILE, TILE);
        } else {
          const autoIdx = Math.floor((id - 1) / 48);
          const key = autotileKeys[autoIdx];
          const img = key && window.RAW_IMAGES[key];
          if (img) {
            ctx.drawImage(img, 32, 0, TILE, TILE, x*TILE, y*TILE, TILE, TILE);
          }
        }
      }
    }
  });

  const texKey = cfg.key + "_tex";
  if (scene.textures.exists(texKey)) scene.textures.remove(texKey);
  scene.textures.addCanvas(texKey, canvas);
  return { texKey, mapData };
}

// Real collision check: can the player move from (x,y) one tile in `dir`?
function canMove(passages, mapData, x, y, dir) {
  const [dx, dy] = DELTA[dir];
  const tx = x + dx, ty = y + dy;
  if (tx < 0 || ty < 0 || tx >= mapData.width || ty >= mapData.height) return false;
  if (tileBlocked(passages, mapData, x, y, dir)) return false;
  if (tileBlocked(passages, mapData, tx, ty, OPPOSITE[dir])) return false;
  return true;
}

function tileBlocked(passages, mapData, x, y, dir) {
  for (let li = mapData.layers.length - 1; li >= 0; li--) {
    const id = mapData.layers[li][y][x];
    if (!id) continue; // no tile here, check layer below
    const b = passages[id] || 0;
    if (b & 0x10) continue; // "star" bit - ignore, check layer below
    return (b & DIR_BITS[dir]) !== 0;
  }
  return false; // nothing found on any layer = passable
}

class MapScene extends Phaser.Scene {
  constructor() { super("Map"); }
  init(data) {
    this.mapId = data.mapId;
    this.startTile = data.startTile;
  }
  create() {
    const passagesAll = this.cache.json.get("passages");
    this.passages = passagesAll[MAPS[this.mapId].tileset];

    const rendered = renderMapToTexture(this, this.mapId);
    this.mapData = rendered.mapData;
    this.add.image(0, 0, rendered.texKey).setOrigin(0, 0);

    const worldW = this.mapData.width * TILE, worldH = this.mapData.height * TILE;
    this.cameras.main.setBounds(0, 0, worldW, worldH);
    this.worldW = worldW; this.worldH = worldH;

    const spriteKey = trainerGender === "girl" ? "player_girl" : "player_boy";
    this.tileX = this.startTile.x;
    this.tileY = this.startTile.y;
    this.player = this.add.sprite(this.tileX*TILE + TILE/2, this.tileY*TILE + TILE/2, spriteKey, 0).setDepth(10);

    if (!this.anims.exists(spriteKey + "_down")) {
      this.anims.create({ key: spriteKey + "_down",  frames: this.anims.generateFrameNumbers(spriteKey, { start: 0, end: 3 }), frameRate: 8, repeat: -1 });
      this.anims.create({ key: spriteKey + "_left",  frames: this.anims.generateFrameNumbers(spriteKey, { start: 4, end: 7 }), frameRate: 8, repeat: -1 });
      this.anims.create({ key: spriteKey + "_right", frames: this.anims.generateFrameNumbers(spriteKey, { start: 8, end: 11 }), frameRate: 8, repeat: -1 });
      this.anims.create({ key: spriteKey + "_up",    frames: this.anims.generateFrameNumbers(spriteKey, { start: 12, end: 15 }), frameRate: 8, repeat: -1 });
    }
    this.spriteKey = spriteKey;

    this.cursors = this.input.keyboard.createCursorKeys();
    this.nameLabel = this.add.text(this.player.x, this.player.y - 30, trainerName, {
      fontFamily: "monospace", fontSize: "10px", color: "#ffffff"
    }).setOrigin(0.5).setDepth(11);

    this.cameras.main.startFollow(this.player, true, 0.2, 0.2);
    // Zoom removed - it was interacting badly with scrollFactor(0) UI text
    // (debug readout / location label), pushing them off their intended
    // fixed screen position and making them invisible.

    this.moving = false;
    this.warping = false;
    this.facing = "down";
    this.talking = null;
    this.dbox = null;

    // Real NPCs for this map (see NPCS above) - static standing sprites,
    // block movement onto their tile, and open a dialogue box on
    // interact (walk up to them, face them, press Z or Space).
    this.npcs = NPCS.filter((n) => n.map === this.mapId).map((n) => {
      const row = DIR_ROW[n.dir] ?? 0;
      const sprite = this.add.sprite(n.x * TILE + TILE / 2, n.y * TILE + TILE / 2, n.sprite, row * 4).setDepth(9);
      return { ...n, sprite };
    });
    this.starterBall = null;
    if (this.mapId === STARTER_BALL.map) {
      this.starterBall = this.add.sprite(
        STARTER_BALL.x * TILE + TILE / 2, STARTER_BALL.y * TILE + TILE / 2, "ball_special", 2
      ).setDepth(9);
    }

    this.rivalSprite = null;
    if (this.mapId === RIVAL_BATTLE.map && !rivalDefeated) {
      this.rivalSprite = this.add.sprite(
        RIVAL_BATTLE.x * TILE + TILE / 2, RIVAL_BATTLE.y * TILE + TILE / 2, "npc_gary", 0
      ).setDepth(9);
    }

    this.signs = SIGNS.filter((s) => s.map === this.mapId);
    this.itemBalls = ITEM_BALLS.filter((b) => b.map === this.mapId && !collectedItemBalls.has(`${b.map},${b.x},${b.y}`));

    // Real Route 1 tall-grass tiles (see ROUTE1_ENCOUNTERS above) - stepping
    // onto one has a chance per step to start a wild battle.
    this.grassTiles = null;
    if (this.mapId === 76) {
      const grassList = this.cache.json.get("map76_grass");
      this.grassTiles = new Set(grassList.map(([x, y]) => `${x},${y}`));
    }

    // MapScene restarts itself (scene.start("Map", ...)) on every warp,
    // which re-runs create() - without clearing old listeners first, each
    // warp stacked another Z/Space handler, so after a couple of warps one
    // key press fired handleActionKey() multiple times in a row (the 2nd+
    // call would see this.talking already set from the 1st and instantly
    // advance/close a dialogue box before it could be read). This is the
    // real cause behind "interactions don't work."
    this.input.keyboard.off("keydown-Z");
    this.input.keyboard.off("keydown-SPACE");
    this.input.keyboard.off("keydown-ENTER");
    this.input.keyboard.on("keydown-Z", () => this.handleActionKey());
    this.input.keyboard.on("keydown-SPACE", () => this.handleActionKey());
    this.input.keyboard.on("keydown-ENTER", () => this.openMenu());
    // Menu can close itself (Save/Close) and needs to hand control back -
    // it does that by re-emitting this event on the game's global emitter.
    this.game.events.off("fireash-menu-closed");
    this.game.events.on("fireash-menu-closed", () => this.scene.resume());

    const label = { 33: "Pallet Town", 42: "Inside a house", 48: "Professor Oak's Lab", 76: "Route 1" }[this.mapId] || "";
    this.add.text(10, 10, label + " - arrow keys to move, Z/Space to talk, Enter for menu", {
      fontFamily: "monospace", fontSize: "10px", color: "#ffffff", backgroundColor: "#000000aa"
    }).setScrollFactor(0).setDepth(100);

    this.objectiveText = this.add.text(10, 26, getObjectiveText(), {
      fontFamily: "monospace", fontSize: "10px", color: "#ffff88", backgroundColor: "#000000aa"
    }).setScrollFactor(0).setDepth(100);

    // Temporary debug readout - remove once door/stairs coordinates are
    // all confirmed correct.
    this.debugText = this.add.text(10, 42, "", {
      fontFamily: "monospace", fontSize: "10px", color: "#00ff00", backgroundColor: "#000000aa"
    }).setScrollFactor(0).setDepth(100);

    // Real autorun cutscene (event id 4 "Controlling event", Map048,
    // trigger type 3 = autorun): Oak greets you the moment you walk into
    // the Lab, before you've picked up the starter ball - no button press,
    // matches the source data exactly.
    if (this.mapId === STARTER_BALL.map && !hasPikachu) {
      this.startTalk([
        "Oak: \\PN, you're late. All of the starter Pokémon have been taken. ...Well there is one left, but it's a bit of an unusual choice.",
      ]);
    }
  }
  handleActionKey() {
    if (this.talking) this.advanceTalk();
    else this.tryInteract();
  }
  openMenu() {
    if (this.talking || this.warping) return;
    this.scene.launch("Menu", { mapId: this.mapId, tileX: this.tileX, tileY: this.tileY });
    this.scene.pause();
  }
  // Real "player touch"-style interact. Checks the tile in front of the
  // player (their last-faced direction) first, then falls back to the
  // other three adjacent tiles - a strict facing-only check turned out to
  // be too fragile in practice (release the direction key a moment before
  // pressing Z, e.g. right after bumping into an NPC, and this.facing can
  // end up not matching where you actually walked from, making a
  // perfectly adjacent NPC seem unresponsive).
  tryInteract() {
    if (this.warping || this.moving) return;
    const dirsToCheck = [this.facing, ...Object.keys(DELTA).filter((d) => d !== this.facing)];
    for (const dir of dirsToCheck) {
      const [dx, dy] = DELTA[dir];
      if (this.handleInteractionAt(this.tileX + dx, this.tileY + dy)) return;
    }
  }
  // Shared by tryInteract (Z/Space press) and the blocked-movement bump
  // below (walking into an NPC also just talks to them - waiting for
  // this.facing to line up with a separate button press turned out to be
  // an unnecessary extra step players kept getting stuck on). Returns
  // true if something at (tx,ty) handled the interaction.
  handleInteractionAt(tx, ty) {
    const npc = this.npcs.find((n) => n.x === tx && n.y === ty);
    if (npc) {
      if (npc.giveItemId && !inventory[npc.giveItemId]) {
        addItem(npc.giveItemId, 1);
      }
      this.startTalk(npc.messages);
      return true;
    }
    if (this.starterBall && STARTER_BALL.x === tx && STARTER_BALL.y === ty) {
      this.startBallInteraction();
      return true;
    }
    if (this.rivalSprite && RIVAL_BATTLE.x === tx && RIVAL_BATTLE.y === ty) {
      if (rivalDefeated) {
        this.startTalk(["Gary: Hmph. Get stronger before you challenge me again."]);
      } else {
        this.startRivalBattle();
      }
      return true;
    }
    const sign = this.signs.find((s) => s.x === tx && s.y === ty);
    if (sign) {
      if (sign.giveFlag === "pokedex") {
        if (hasPokedex) {
          this.startTalk(["You already have a Pokédex."]);
        } else {
          hasPokedex = true;
          this.startTalk(sign.messages);
        }
      } else {
        this.startTalk(sign.messages);
      }
      return true;
    }
    const ball = this.itemBalls.find((b) => b.x === tx && b.y === ty);
    if (ball) {
      this.collectItemBall(ball);
      return true;
    }
    return false;
  }
  collectItemBall(ball) {
    addItem(ball.itemId, 1);
    collectedItemBalls.add(`${ball.map},${ball.x},${ball.y}`);
    this.itemBalls = this.itemBalls.filter((b) => b !== ball);
    this.startTalk([`\\PN found a ${ITEMS[ball.itemId].name}!`]);
  }
  startRivalBattle() {
    this.warping = true;
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("Battle", {
        playerSpeciesId: "PIKACHU",
        playerLevel,
        oppSpeciesId: RIVAL_BATTLE.oppSpeciesId,
        oppLevel: RIVAL_BATTLE.oppLevel,
        isTrainer: true,
        trainerName: "Gary",
        returnTo: { mapId: this.mapId, tileX: this.tileX, tileY: this.tileY },
      });
    });
  }
  startTalk(rawMessages, onLastLine) {
    this.talking = { messages: rawMessages.map(cleanRgssText), index: 0, onLastLine: onLastLine || null };
    if (!this.dbox) this.dbox = new DialogueBox(this);
    this.dbox.say(this.talking.messages[0]);
  }
  advanceTalk() {
    if (!this.talking || this.talking.awaitingChoice) return;
    this.talking.index++;
    if (this.talking.index < this.talking.messages.length) {
      this.dbox.say(this.talking.messages[this.talking.index]);
      return;
    }
    if (this.talking.onLastLine) {
      const fn = this.talking.onLastLine;
      this.talking.onLastLine = null;
      this.talking.awaitingChoice = true;
      fn();
      return;
    }
    this.dbox.destroy();
    this.dbox = null;
    this.talking = null;
  }
  // The Lab's starter Pokémon offer, from this game's own "Starter ball"
  // event: flavor line, then (once) Oak's Yes/No offer of Pikachu. Real
  // Fire Ash gives exactly one Pikachu, not a 3-ball choice.
  startBallInteraction() {
    if (this.talking) return;
    if (hasPikachu) {
      this.startTalk(["Pikachu: Pika pika!"]);
      return;
    }
    this.startTalk(
      [
        "This ball contains a Pokémon caught by the Professor.",
        "Oak: So, you want Pikachu, the Electric mouse Pokémon?",
      ],
      () => this.showBallChoice()
    );
  }
  showBallChoice() {
    const makeBtn = (x, label) =>
      this.add.text(x, H - 30, label, {
        fontFamily: "monospace", fontSize: "14px", color: "#ffff00", backgroundColor: "#000000aa", padding: { x: 6, y: 2 }
      }).setOrigin(0.5).setDepth(101).setInteractive({ useHandCursor: true });

    const yesBtn = makeBtn(W / 2 - 40, "Yes");
    const noBtn = makeBtn(W / 2 + 40, "No");
    const cleanup = () => { yesBtn.destroy(); noBtn.destroy(); };

    yesBtn.on("pointerdown", () => {
      cleanup();
      hasPikachu = true;
      this.startTalk(["Pikachu started to follow you!"]);
    });
    noBtn.on("pointerdown", () => {
      cleanup();
      this.startTalk(["Oak: Unfortunately, it is the only one left, so I suggest you take it."]);
    });
  }
  // Only fires when standing EXACTLY on a warp's approach tile AND (if the
  // warp specifies one) pressing exactly the required direction - matches
  // real RPG Maker "player touch" event behaviour: walk up to the
  // stairs/door and step into it, not just wander near it.
  tryWarp(dir) {
    const w = warpMatch(this.mapId, this.tileX, this.tileY, dir);
    if (!w) return false;
    // Forced stop, no button press needed - matches how these openings
    // always block you from wandering off before you've got your first
    // Pokémon. Not from a specific extracted event (out of scope for this
    // pass), but a reasonable real-feeling gate rather than letting you
    // wander Route 1 with no team at all.
    if (w.map === 33 && w.toMap === 76 && !hasPikachu) {
      if (!this.talking) {
        this.startTalk(["I should go see Professor Oak and get my first Pokémon before heading out."]);
      }
      return true;
    }
    // Real barrier event (id 5 "Turn back", Map048) blocking the Lab exit
    // until you've picked up both the starter and the Pokédex - real Oak
    // reminder lines for each missing piece.
    if (w.map === STARTER_BALL.map && w.toMap === 42 && !(hasPikachu && hasPokedex)) {
      if (!this.talking) {
        this.startTalk([
          !hasPikachu
            ? "Oak: Wait, don't forget your starter Pokémon!"
            : "Oak: Come here and get your Pokédex, \\PN.",
        ]);
      }
      return true;
    }
    this.warping = true;
    this.cameras.main.fadeOut(250, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("Map", { mapId: w.toMap, startTile: { x: w.toX, y: w.toY } });
    });
    return true;
  }
  update() {
    if (this.objectiveText) {
      this.objectiveText.setText(getObjectiveText());
    }
    if (this.debugText) {
      const nearWarp = WARPS.find(w => w.map === this.mapId && Math.abs(w.x - this.tileX) <= 3 && Math.abs(w.y - this.tileY) <= 3);
      this.debugText.setText(
        "tile=(" + this.tileX + "," + this.tileY + ")" +
        (nearWarp ? "  nearest warp=(" + nearWarp.x + "," + nearWarp.y + (nearWarp.dir ? "," + nearWarp.dir : "") + ")" : "")
      );
    }
    if (this.warping) return;
    if (this.talking) return;
    if (this.moving) return;

    let dir = null;
    if (this.cursors.left.isDown) dir = "left";
    else if (this.cursors.right.isDown) dir = "right";
    else if (this.cursors.up.isDown) dir = "up";
    else if (this.cursors.down.isDown) dir = "down";

    if (!dir) { this.player.anims.stop(); return; }
    this.facing = dir;

    this.player.anims.play(this.spriteKey + "_" + dir, true);

    // Pressing INTO a warp's approach tile from the correct side triggers
    // it immediately, whether or not the underlying floor tile would
    // normally allow stepping onto it - matches how the real event
    // (which we don't simulate) would take over movement itself.
    if (this.tryWarp(dir)) return;

    const [dx, dy] = DELTA[dir];
    const targetX = this.tileX + dx, targetY = this.tileY + dy;
    // Stepping ONTO a warp's approach tile (from any direction) always
    // succeeds, even if the plain floor tile there would normally be
    // marked blocked - it's a real, walkable space in the actual game,
    // just one our simplified model (no real event layer) can't always
    // read correctly from raw tile passability alone.
    const targetIsApproachTile = WARPS.some(w => w.map === this.mapId && w.x === targetX && w.y === targetY);
    // NPCs (and the Lab's starter ball) occupy their tile solidly, same as
    // a real RPG Maker event with "through" off - can't walk through them.
    const targetHasNpc =
      this.npcs.some((n) => n.x === targetX && n.y === targetY) ||
      (this.starterBall && STARTER_BALL.x === targetX && STARTER_BALL.y === targetY) ||
      (this.rivalSprite && RIVAL_BATTLE.x === targetX && RIVAL_BATTLE.y === targetY) ||
      this.itemBalls.some((b) => b.x === targetX && b.y === targetY) ||
      this.signs.some((s) => s.x === targetX && s.y === targetY);
    if (targetHasNpc || (!targetIsApproachTile && !canMove(this.passages, this.mapData, this.tileX, this.tileY, dir))) {
      if (this.debugText) {
        this.debugText.setText(this.debugText.text + "  BLOCKED trying (" + targetX + "," + targetY + ") dir=" + dir);
      }
      // Walking straight into an NPC/sign/ball also just interacts with
      // it directly - don't make bumping into Gary a dead end that then
      // requires a separate, precisely-aimed Z press to do anything.
      if (targetHasNpc && !this.talking) this.handleInteractionAt(targetX, targetY);
      return; // blocked - face the direction but don't move (matches real game feel)
    }

    this.tileX = targetX; this.tileY = targetY;
    this.moving = true;
    this.tweens.add({
      targets: this.player,
      x: this.tileX*TILE + TILE/2,
      y: this.tileY*TILE + TILE/2,
      duration: 140,
      onComplete: () => {
        this.moving = false;
        this.nameLabel.setPosition(this.player.x, this.player.y - 30);
        this.maybeTriggerEncounter();
      }
    });
    this.nameLabel.setPosition(this.player.x, this.player.y - 30);
  }
  // Real Route 1 tall-grass tiles - each step taken while standing on one
  // has a flat chance (see ROUTE1_ENCOUNTER_CHANCE) to start a wild battle,
  // using the real per-species weights/level-ranges from this game's own
  // encounters.dat "Land" table for Map076.
  maybeTriggerEncounter() {
    if (!this.grassTiles || this.talking) return;
    if (!this.grassTiles.has(`${this.tileX},${this.tileY}`)) return;
    if (Math.random() > ROUTE1_ENCOUNTER_CHANCE) return;
    const { speciesId, level } = rollEncounter();
    this.warping = true;
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("Battle", {
        playerSpeciesId: "PIKACHU",
        playerLevel,
        oppSpeciesId: speciesId,
        oppLevel: level,
        isTrainer: false,
        returnTo: { mapId: this.mapId, tileX: this.tileX, tileY: this.tileY },
      });
    });
  }
}

// Pause menu, launched as a scene overlay on top of a paused MapScene
// (see MapScene.openMenu). Pokémon / Bag / Save / Close - no in-battle
// item use, no party beyond the one Pokémon, no options menu; this is a
// from-scratch fit for the browser pilot, not extracted from the real
// game (which has its own native save format and full menu system).
class MenuScene extends Phaser.Scene {
  constructor() { super("Menu"); }
  init(data) { this.mapInfo = data; }
  create() {
    this.add.rectangle(W / 2, H / 2, W - 40, H - 60, 0x1c1c2c, 0.95).setStrokeStyle(2, 0xffffff);
    this.add.text(W / 2, 44, "Menu", { fontFamily: "monospace", fontSize: "18px", color: "#ffffff" }).setOrigin(0.5);
    this.body = this.add.text(40, 80, "", {
      fontFamily: "monospace", fontSize: "13px", color: "#ffffff", wordWrap: { width: W - 100 }
    });
    this.buttons = [];
    this.input.keyboard.off("keydown-ESC");
    this.input.keyboard.on("keydown-ESC", () => this.close());
    this.showRoot();
  }
  clearButtons() {
    this.buttons.forEach((b) => b.destroy());
    this.buttons = [];
  }
  makeButton(x, y, label, onClick) {
    const btn = this.add.text(x, y, label, {
      fontFamily: "monospace", fontSize: "14px", color: "#ffff00", backgroundColor: "#00000088", padding: { x: 8, y: 4 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    btn.on("pointerdown", onClick);
    this.buttons.push(btn);
    return btn;
  }
  showRoot() {
    this.clearButtons();
    this.body.setText("");
    this.makeButton(W / 2, 130, "Pokémon", () => this.showPokemon());
    this.makeButton(W / 2, 170, "Bag", () => this.showBag());
    this.makeButton(W / 2, 210, "Save", () => this.doSave());
    this.makeButton(W / 2, 250, "Close", () => this.close());
  }
  showPokemon() {
    this.clearButtons();
    if (!hasPikachu) {
      this.body.setText("You don't have a Pokémon yet.\n\nGet one from Professor Oak's Lab.");
    } else {
      const stats = levelStats("PIKACHU", playerLevel);
      this.body.setText(
        `${stats.name}  Lv${stats.level}\nType: ${stats.type}\nHP: ${stats.maxHp}  Atk: ${stats.atk}  Def: ${stats.def}  Spd: ${stats.spd}\n\nMoves: ${stats.moves.map((m) => m.name).join(", ")}`
      );
    }
    this.makeButton(W / 2, H - 40, "Back", () => this.showRoot());
  }
  showBag() {
    this.clearButtons();
    const entries = Object.entries(inventory).filter(([, qty]) => qty > 0);
    if (entries.length === 0) {
      this.body.setText("Bag is empty.");
    } else {
      this.body.setText(entries.map(([id, qty]) => `${ITEMS[id]?.name || id} x${qty}`).join("\n"));
    }
    this.makeButton(W / 2, H - 40, "Back", () => this.showRoot());
  }
  doSave() {
    this.clearButtons();
    saveGame(this.mapInfo);
    this.body.setText(`Saved!\n\n${trainerName}'s game has been saved.`);
    this.makeButton(W / 2, H - 40, "Back", () => this.showRoot());
  }
  close() {
    this.scene.stop();
    this.game.events.emit("fireash-menu-closed");
  }
}

function hpBarColor(frac) {
  if (frac > 0.5) return 0x4ade80;
  if (frac > 0.2) return 0xfacc15;
  return 0xef4444;
}

class HpBar {
  constructor(scene, x, y, width) {
    this.scene = scene;
    this.x = x; this.y = y; this.width = width;
    this.bg = scene.add.rectangle(x, y, width, 8, 0x1e293b).setOrigin(0, 0.5);
    this.fill = scene.add.rectangle(x, y, width, 8, 0x4ade80).setOrigin(0, 0.5);
  }
  update(hp, maxHp) {
    const frac = Math.max(0, hp / maxHp);
    this.fill.width = this.width * frac;
    this.fill.fillColor = hpBarColor(frac);
  }
  destroy() { this.bg.destroy(); this.fill.destroy(); }
}

// Simplified single-Pokémon battle scene - see battle.js for the engine.
// Turn resolution/messages are revealed one line at a time (Z/Space/click
// to advance), matching the overworld DialogueBox pacing.
class BattleScene extends Phaser.Scene {
  constructor() { super("Battle"); }
  init(data) { this.battleInit = data; }
  create() {
    const d = this.battleInit;
    this.returnTo = d.returnTo;

    this.add.rectangle(W / 2, H * 0.35, W, H * 0.7, 0x87ceeb);
    this.add.rectangle(W / 2, H * 0.78, W, H * 0.44, 0x4a7c3f);

    this.battle = createBattle({
      playerSpeciesId: d.playerSpeciesId,
      playerLevel: d.playerLevel,
      oppSpeciesId: d.oppSpeciesId,
      oppLevel: d.oppLevel,
      isTrainer: d.isTrainer,
      trainerName: d.trainerName,
    });

    const oppLower = d.oppSpeciesId.toLowerCase();
    const playerLower = d.playerSpeciesId.toLowerCase();
    this.add.image(W * 0.72, H * 0.32, `battler_${oppLower}_front`).setScale(1.4);
    this.add.image(W * 0.22, H * 0.62, `battler_${playerLower}_back`).setScale(1.8);

    this.add.rectangle(W * 0.26, 40, 220, 54, 0xfdf6e3).setStrokeStyle(2, 0x1e293b);
    this.oppNameText = this.add.text(W * 0.26 - 100, 24, "", { fontFamily: "monospace", fontSize: "13px", color: "#1e293b" });
    this.oppHpBar = new HpBar(this, W * 0.26 - 100, 48, 180);

    this.add.rectangle(W * 0.76, H - 90, 220, 54, 0xfdf6e3).setStrokeStyle(2, 0x1e293b);
    this.playerNameText = this.add.text(W * 0.76 - 100, H - 106, "", { fontFamily: "monospace", fontSize: "13px", color: "#1e293b" });
    this.playerHpBar = new HpBar(this, W * 0.76 - 100, H - 82, 180);
    this.playerHpNumText = this.add.text(W * 0.76 - 100, H - 74, "", { fontFamily: "monospace", fontSize: "11px", color: "#1e293b" });

    this.msgBox = this.add.rectangle(W / 2, H - 30, W - 20, 56, 0x1c1c2c, 0.92).setStrokeStyle(2, 0xffffff);
    this.msgText = this.add.text(20, H - 50, "", { fontFamily: "monospace", fontSize: "13px", color: "#ffffff", wordWrap: { width: W - 50 } });
    this.prompt = this.add.text(W - 30, H - 12, "▼", { fontFamily: "monospace", fontSize: "14px", color: "#ffffff" });
    this.tweens.add({ targets: this.prompt, y: H - 8, duration: 400, yoyo: true, repeat: -1 });

    this.menuButtons = [];
    this.pendingLines = [];
    this.mode = "menu";

    this.input.keyboard.off("keydown-Z");
    this.input.keyboard.off("keydown-SPACE");
    this.input.keyboard.on("keydown-Z", () => this.handleKey());
    this.input.keyboard.on("keydown-SPACE", () => this.handleKey());

    this.refreshStats();
    this.showMainMenu();
  }
  refreshStats() {
    const { player, opponent } = this.battle;
    this.oppNameText.setText(`${opponent.name}  Lv${opponent.level}`);
    this.oppHpBar.update(opponent.hp, opponent.maxHp);
    this.playerNameText.setText(`${player.name}  Lv${player.level}`);
    this.playerHpBar.update(player.hp, player.maxHp);
    this.playerHpNumText.setText(`${player.hp}/${player.maxHp}`);
  }
  clearButtons() {
    this.menuButtons.forEach((b) => b.destroy());
    this.menuButtons = [];
  }
  makeButton(x, y, label, onClick) {
    const btn = this.add.text(x, y, label, {
      fontFamily: "monospace", fontSize: "13px", color: "#ffff00", backgroundColor: "#00000088", padding: { x: 8, y: 4 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    btn.on("pointerdown", onClick);
    this.menuButtons.push(btn);
    return btn;
  }
  showMainMenu() {
    this.mode = "menu";
    this.clearButtons();
    this.msgText.setText(`What will ${this.battle.player.name} do?`);
    if (this.battle.isTrainer) {
      this.makeButton(W / 2, H - 30, "FIGHT", () => this.showMoveMenu());
    } else {
      this.makeButton(W / 2 - 90, H - 30, "FIGHT", () => this.showMoveMenu());
      this.makeButton(W / 2, H - 30, "CATCH", () => this.doCatch());
      this.makeButton(W / 2 + 90, H - 30, "RUN", () => this.doRun());
    }
  }
  showMoveMenu() {
    this.mode = "moves";
    this.clearButtons();
    this.msgText.setText("Choose a move:");
    const moves = this.battle.player.moves;
    moves.forEach((m, i) => {
      const x = W / 2 + (i - (moves.length - 1) / 2) * 110;
      this.makeButton(x, H - 30, m.name, () => this.doMove(i));
    });
  }
  doMove(i) {
    const { battle, added } = playerMove(this.battle, i);
    this.battle = battle;
    this.revealLines(added);
  }
  doCatch() {
    const { battle, added } = attemptCatch(this.battle);
    this.battle = battle;
    this.revealLines(added);
  }
  doRun() {
    const { battle, added } = attemptRun(this.battle);
    this.battle = battle;
    this.revealLines(added);
  }
  revealLines(lines) {
    this.clearButtons();
    this.pendingLines = lines.slice();
    this.mode = "message";
    this.nextLine();
  }
  nextLine() {
    if (this.pendingLines.length === 0) {
      this.refreshStats();
      if (this.battle.status !== "active") {
        this.endBattle();
      } else {
        this.showMainMenu();
      }
      return;
    }
    this.msgText.setText(this.pendingLines.shift());
    this.refreshStats();
  }
  handleKey() {
    if (this.mode === "message") this.nextLine();
  }
  endBattle() {
    this.mode = "end";
    const status = this.battle.status;
    if (status === "won" && this.battleInit.isTrainer) rivalDefeated = true;
    if (status === "won") playerLevel = Math.min(30, playerLevel + 1);
    const summary =
      status === "won" ? "You won!" :
      status === "lost" ? `${this.battle.player.name} has no energy left to battle!` :
      status === "caught" ? `${this.battle.opponent.name} was added to your party!` :
      "You got away.";
    this.msgText.setText(summary + "  (press Z/Space to continue)");
    this.input.keyboard.once("keydown-Z", () => this.returnToMap());
    this.input.keyboard.once("keydown-SPACE", () => this.returnToMap());
  }
  returnToMap() {
    this.cameras.main.fadeOut(300, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("Map", { mapId: this.returnTo.mapId, startTile: { x: this.returnTo.tileX, y: this.returnTo.tileY } });
    });
  }
}

export function startFireAshGame(parentEl) {
  const config = {
    type: Phaser.AUTO,
    width: W,
    height: H,
    parent: parentEl,
    pixelArt: true,
    scene: [BootScene, TitleScene, IntroScene, GenderSelectScene, NameEntryScene, ConfirmScene, MapScene, BattleScene, MenuScene, ContinueScene]
  };
  return loadRawImages().then(() => new Phaser.Game(config));
}

export function stopFireAshGame(game) {
  if (game) game.destroy(true);
}
