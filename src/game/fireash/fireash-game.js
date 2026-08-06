// Fire Ash overworld pilot - Phaser 3 game module, adapted from the
// standalone HTML prototype. Real intro dialogue, real Pallet House/Lab
// tile data, real collision, and real door/stairs warps - see the
// project session history for how each was extracted/verified. Assets
// live in public/fireash/assets (Vite serves public/ as-is at the root).
import Phaser from "phaser";

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
    const txt = this.add.text(W/2, H - 40, "Press SPACE to start", {
      fontFamily: "monospace", fontSize: "16px", color: "#ffffff"
    }).setOrigin(0.5);
    this.tweens.add({ targets: txt, alpha: 0, duration: 600, yoyo: true, repeat: -1 });
    this.input.keyboard.once("keydown-SPACE", () => this.scene.start("Intro"));
    this.input.once("pointerdown", () => this.scene.start("Intro"));
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
  48: { key: "map48", tileset: 3 }
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
  // Player's house internal 2nd floor connector - NOT independently
  // confirmed; approach tiles guessed one step off the real event
  // positions (12,2) and (36,2).
  { map: 42, x: 11, y: 2,  dir: "right", toMap: 42, toX: 37, toY: 2 },
  { map: 42, x: 37, y: 2,  dir: "left",  toMap: 42, toX: 11, toY: 2 }
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
    const label = { 33: "Pallet Town", 42: "Inside a house", 48: "Professor Oak's Lab" }[this.mapId] || "";
    this.add.text(10, 10, label + " - arrow keys to move", {
      fontFamily: "monospace", fontSize: "10px", color: "#ffffff", backgroundColor: "#000000aa"
    }).setScrollFactor(0).setDepth(100);

    // Temporary debug readout - remove once door/stairs coordinates are
    // all confirmed correct.
    this.debugText = this.add.text(10, 26, "", {
      fontFamily: "monospace", fontSize: "10px", color: "#00ff00", backgroundColor: "#000000aa"
    }).setScrollFactor(0).setDepth(100);
  }
  // Only fires when standing EXACTLY on a warp's approach tile AND (if the
  // warp specifies one) pressing exactly the required direction - matches
  // real RPG Maker "player touch" event behaviour: walk up to the
  // stairs/door and step into it, not just wander near it.
  tryWarp(dir) {
    const w = warpMatch(this.mapId, this.tileX, this.tileY, dir);
    if (!w) return false;
    this.warping = true;
    this.cameras.main.fadeOut(250, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("Map", { mapId: w.toMap, startTile: { x: w.toX, y: w.toY } });
    });
    return true;
  }
  update() {
    if (this.debugText) {
      const nearWarp = WARPS.find(w => w.map === this.mapId && Math.abs(w.x - this.tileX) <= 3 && Math.abs(w.y - this.tileY) <= 3);
      this.debugText.setText(
        "tile=(" + this.tileX + "," + this.tileY + ")" +
        (nearWarp ? "  nearest warp=(" + nearWarp.x + "," + nearWarp.y + (nearWarp.dir ? "," + nearWarp.dir : "") + ")" : "")
      );
    }
    if (this.warping) return;
    if (this.moving) return;

    let dir = null;
    if (this.cursors.left.isDown) dir = "left";
    else if (this.cursors.right.isDown) dir = "right";
    else if (this.cursors.up.isDown) dir = "up";
    else if (this.cursors.down.isDown) dir = "down";

    if (!dir) { this.player.anims.stop(); return; }

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
    if (!targetIsApproachTile && !canMove(this.passages, this.mapData, this.tileX, this.tileY, dir)) {
      if (this.debugText) {
        this.debugText.setText(this.debugText.text + "  BLOCKED trying (" + targetX + "," + targetY + ") dir=" + dir);
      }
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
      }
    });
    this.nameLabel.setPosition(this.player.x, this.player.y - 30);
  }
}


export function startFireAshGame(parentEl) {
  const config = {
    type: Phaser.AUTO,
    width: W,
    height: H,
    parent: parentEl,
    pixelArt: true,
    scene: [BootScene, TitleScene, IntroScene, GenderSelectScene, NameEntryScene, ConfirmScene, MapScene]
  };
  return loadRawImages().then(() => new Phaser.Game(config));
}

export function stopFireAshGame(game) {
  if (game) game.destroy(true);
}
