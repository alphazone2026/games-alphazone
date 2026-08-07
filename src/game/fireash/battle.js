// Simplified single-Pokémon battle engine for the Fire Ash pilot. Real
// species/types/movepools (from this game's own Graphics/Pokemon front and
// back battler sprites + the real Route 1 encounter table), but a
// deliberately simplified damage/stat formula - not the actual Gen
// mechanics (no natures/IVs/EVs/accuracy/critical hits/status moves) and
// only a small hand-picked type chart covering the types actually in play
// here, not the full 18-type grid. Good enough for a real-feeling battle,
// not a faithful engine port.

export const SPECIES = {
  PIKACHU: {
    name: "Pikachu", type: "electric", baseHp: 35, baseAtk: 55, baseDef: 40, baseSpd: 90,
    moves: [
      { name: "Thunder Shock", power: 40, type: "electric" },
      { name: "Quick Attack", power: 40, type: "normal" },
      { name: "Tackle", power: 40, type: "normal" },
    ],
  },
  PIDGEY: {
    name: "Pidgey", type: "flying", baseHp: 40, baseAtk: 45, baseDef: 40, baseSpd: 56,
    moves: [
      { name: "Tackle", power: 40, type: "normal" },
      { name: "Gust", power: 40, type: "flying" },
    ],
  },
  SPEAROW: {
    name: "Spearow", type: "flying", baseHp: 40, baseAtk: 60, baseDef: 30, baseSpd: 70,
    moves: [
      { name: "Peck", power: 35, type: "flying" },
      { name: "Growl", power: 0, type: "normal" },
    ],
  },
  MANKEY: {
    name: "Mankey", type: "fighting", baseHp: 40, baseAtk: 80, baseDef: 35, baseSpd: 70,
    moves: [
      { name: "Scratch", power: 40, type: "normal" },
      { name: "Low Kick", power: 50, type: "fighting" },
    ],
  },
  POLIWAG: {
    name: "Poliwag", type: "water", baseHp: 40, baseAtk: 50, baseDef: 40, baseSpd: 90,
    moves: [
      { name: "Bubble", power: 40, type: "water" },
      { name: "Water Gun", power: 40, type: "water" },
    ],
  },
  RATTATA: {
    name: "Rattata", type: "normal", baseHp: 30, baseAtk: 56, baseDef: 35, baseSpd: 72,
    moves: [
      { name: "Tackle", power: 40, type: "normal" },
      { name: "Quick Attack", power: 40, type: "normal" },
    ],
  },
  SANDSHREW: {
    name: "Sandshrew", type: "ground", baseHp: 50, baseAtk: 75, baseDef: 85, baseSpd: 40,
    moves: [
      { name: "Scratch", power: 40, type: "normal" },
      { name: "Sand Attack", power: 0, type: "ground" },
    ],
  },
  EEVEE: {
    name: "Eevee", type: "normal", baseHp: 55, baseAtk: 55, baseDef: 50, baseSpd: 55,
    moves: [
      { name: "Tackle", power: 40, type: "normal" },
      { name: "Sand Attack", power: 0, type: "ground" },
    ],
  },
};

// Small hand-picked type chart - only the matchups that actually come up
// between Pikachu and this route's real encounter table, not a full 18x18
// grid. Missing entries default to neutral (1x).
const TYPE_CHART = {
  electric: { water: 2, flying: 2, ground: 0 },
  water: { ground: 2, electric: 0.5 },
  fighting: { normal: 2 },
  ground: { electric: 2 },
  flying: { fighting: 2 },
};

function typeMultiplier(moveType, defType) {
  return TYPE_CHART[moveType]?.[defType] ?? 1;
}

export function levelStats(speciesId, level) {
  const s = SPECIES[speciesId];
  return {
    speciesId,
    name: s.name,
    type: s.type,
    level,
    maxHp: Math.floor((s.baseHp * level) / 50) + level + 10,
    hp: Math.floor((s.baseHp * level) / 50) + level + 10,
    atk: Math.floor((s.baseAtk * level) / 50) + 5,
    def: Math.floor((s.baseDef * level) / 50) + 5,
    spd: Math.floor((s.baseSpd * level) / 50) + 5,
    moves: s.moves,
  };
}

// players: { playerSpeciesId, playerLevel, oppSpeciesId, oppLevel, isTrainer, trainerName }
export function createBattle({ playerSpeciesId, playerLevel, oppSpeciesId, oppLevel, isTrainer, trainerName }) {
  return {
    player: levelStats(playerSpeciesId, playerLevel),
    opponent: levelStats(oppSpeciesId, oppLevel),
    isTrainer: !!isTrainer,
    trainerName: trainerName || null,
    status: "active", // active | won | lost | fled | caught
    log: [isTrainer ? `${trainerName} sent out ${SPECIES[oppSpeciesId].name}!` : `A wild ${SPECIES[oppSpeciesId].name} appeared!`],
  };
}

function dealDamage(attacker, defender, move, rng) {
  if (move.power <= 0) return { dmg: 0, effectiveness: 1 };
  const mult = typeMultiplier(move.type, defender.type);
  const base = (((2 * attacker.level) / 5 + 2) * move.power * (attacker.atk / Math.max(1, defender.def))) / 50 + 2;
  const variance = 0.85 + rng() * 0.15;
  const dmg = Math.max(mult === 0 ? 0 : 1, Math.floor(base * mult * variance));
  return { dmg, effectiveness: mult };
}

function effMessage(mult) {
  if (mult === 0) return "It doesn't affect the opponent...";
  if (mult >= 2) return "It's super effective!";
  if (mult > 0 && mult < 1) return "It's not very effective...";
  return null;
}

// Runs one full turn: player's chosen move, then (if both still standing)
// the opponent's random move, in speed order. Returns a NEW battle object
// (never mutates the one passed in) plus the list of log lines added this
// turn, so the UI can reveal them one at a time.
export function playerMove(battle, moveIndex, rng = Math.random) {
  const b = structuredClone(battle);
  const added = [];
  const move = b.player.moves[moveIndex];

  const order = b.player.spd >= b.opponent.spd ? ["player", "opponent"] : ["opponent", "player"];
  for (const who of order) {
    if (b.status !== "active") break;
    const attacker = who === "player" ? b.player : b.opponent;
    const defender = who === "player" ? b.opponent : b.player;
    const usedMove = who === "player" ? move : defender_move(b.opponent, rng);

    added.push(`${attacker.name} used ${usedMove.name}!`);
    const { dmg, effectiveness } = dealDamage(attacker, defender, usedMove, rng);
    defender.hp = Math.max(0, defender.hp - dmg);
    const msg = effMessage(effectiveness);
    if (msg) added.push(msg);

    if (defender.hp <= 0) {
      if (who === "player") {
        added.push(`${defender.name} fainted!`);
        b.status = "won";
      } else {
        added.push(`${defender.name} fainted!`);
        b.status = "lost";
      }
      break;
    }
  }

  b.log = [...b.log, ...added];
  return { battle: b, added };
}

function defender_move(opponent, rng) {
  return opponent.moves[Math.floor(rng() * opponent.moves.length)];
}

// Wild-only: catch chance improves as the wild Pokémon's HP drops.
export function attemptCatch(battle, rng = Math.random) {
  const b = structuredClone(battle);
  const hpFrac = b.opponent.hp / b.opponent.maxHp;
  const chance = Math.min(0.9, 0.95 - hpFrac * 0.75);
  const added = [`${b.trainerName || "You"} threw a Poké Ball!`];
  if (rng() < chance) {
    added.push(`Gotcha! ${b.opponent.name} was caught!`);
    b.status = "caught";
  } else {
    added.push(`${b.opponent.name} broke free!`);
    // A failed throw costs you the turn - the wild Pokémon gets a free hit.
    const move = defender_move(b.opponent, rng);
    added.push(`${b.opponent.name} used ${move.name}!`);
    const { dmg, effectiveness } = dealDamage(b.opponent, b.player, move, rng);
    b.player.hp = Math.max(0, b.player.hp - dmg);
    const msg = effMessage(effectiveness);
    if (msg) added.push(msg);
    if (b.player.hp <= 0) {
      added.push(`${b.player.name} fainted!`);
      b.status = "lost";
    }
  }
  b.log = [...b.log, ...added];
  return { battle: b, added };
}

// Wild-only: always succeeds (real games roll a speed-based chance to
// flee - simplified here so running never feels unfair/random).
export function attemptRun(battle) {
  const b = structuredClone(battle);
  b.status = "fled";
  b.log = [...b.log, "Got away safely!"];
  return { battle: b, added: ["Got away safely!"] };
}
