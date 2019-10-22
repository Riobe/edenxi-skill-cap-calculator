// All data collected from: https://ffxiclopedia.fandom.com/wiki/Category:Combat_Skills?oldid=362588
// Weapon Skills
const axe = {
  name: 'Axe',
  BST: 'A-',
  DRK: 'B-',
  RNG: 'B-',
  WAR: 'A-'
};

const greatAxe = {
  name: 'Great Axe',
  DRK: 'B-',
  WAR: 'A+'
};

const club = {
  name: 'Club',
  BRD: 'D',
  BST: 'D',
  BLM: 'C+',
  BLU: 'B-',
  DRK: 'C-',
  DRG: 'E',
  MNK: 'C+',
  NIN: 'E',
  PLD: 'A-',
  PUP: 'D',
  RNG: 'E',
  RDM: 'D',
  SAM: 'E',
  SMN: 'C+',
  THF: 'E',
  WAR: 'B-',
  WHM: 'B+'
};

const dagger = {
  name: 'Dagger',
  BRD: 'B-',
  BST: 'C+',
  BLM: 'D',
  COR: 'B+',
  DRK: 'C',
  DRG: 'E',
  NIN: 'C+',
  PLD: 'C-',
  PUP: 'C-',

  RNG: 'B-',
  RDM: 'B',
  SAM: 'E',
  SMN: 'E',
  THF: 'A-',
  WAR: 'B-'
};

const handToHand = {
  name: 'Hand to Hand',
  MNK: 'A+',
  NIN: 'E',
  PUP: 'C',
  THF: 'E',
  WAR: 'D'
};

const katana = {
  name: 'Katana',
  NIN: 'A-'
};

const greatKatana = {
  name: 'Great Katana',
  NIN: 'C-',
  SAM: 'A+'
};

const polearm = {
  name: 'Polearm',
  DRG: 'A+',
  PLD: 'E',
  SAM: 'B-',
  WAR: 'B-'
};

const scythe = {
  name: 'Scythe',
  BST: 'B-',
  BLM: 'E',
  DRK: 'A+',
  WAR: 'B+'
};

const staff = {
  name: 'Staff',
  BRD: 'C+',
  BLM: 'B-',
  DRG: 'B-',
  MNK: 'B',
  PLD: 'A-',
  SMN: 'B',
  WAR: 'B',
  WHM: 'C+'
};

const sword = {
  name: 'Sword',
  BRD: 'C-',
  BST: 'E',
  BLU: 'A-',
  COR: 'B-',
  DRK: 'B-',
  DRG: 'C-',
  NIN: 'C',
  PLD: 'A+',
  RNG: 'D',
  RDM: 'B',
  SAM: 'C+',
  THF: 'D',
  WAR: 'B'
};

const greatSword = {
  name: 'Great Sword',
  DRK: 'A-',
  PLD: 'B',
  WAR: 'B+'
};

const weaponSkills = [
  axe,
  greatAxe,
  club,
  dagger,
  handToHand,
  katana,
  greatKatana,
  polearm,
  scythe,
  staff,
  sword,
  greatSword
];

// Ranged Weapon Skills
const archery = {
  name: 'Archery',
  NIN: 'E',
  RNG: 'A-',
  RDM: 'D',
  SAM: 'C+',
  THF: 'C-',
  WAR: 'D'
};

const marksmanship = {
  name: 'Marksmanship',
  COR: 'B',
  DRK: 'E',
  NIN: 'C',
  RNG: 'A-',
  THF: 'C+',
  WAR: 'D'
};

const throwing = {
  name: 'Throwing',
  BRD: 'E',
  BLM: 'D',
  COR: 'C+',
  MNK: 'E',
  NIN: 'A-',
  PUP: 'C+',
  RNG: 'C-',
  RDM: 'F',
  SAM: 'C',
  THF: 'D',
  WAR: 'D',
  WHM: 'E'
};

const rangedSkills = [archery, marksmanship, throwing];

// Defensive Skills

const evasion = {
  name: 'Evasion',
  BRD: 'D',
  BST: 'C',
  BLM: 'E',
  BLU: 'C-',
  COR: 'D',
  DRK: 'C',
  DRG: 'C-',
  MNK: 'B+',
  NIN: 'A-',
  PLD: 'C',
  PUP: 'B',
  RNG: 'E',
  RDM: 'D',
  SAM: 'B+',
  SMN: 'E',
  THF: 'A+',
  WAR: 'C',
  WHM: 'E'
};

const guarding = {
  name: 'Guarding',
  MNK: 'A-',
  PUP: 'B-'
};

const parrying = {
  name: 'Parrying',
  BRD: 'E',
  BST: 'C',
  BLU: 'D',
  COR: 'A-',
  DRK: 'E',
  DRG: 'C',
  MNK: 'E',
  NIN: 'A-',
  PLD: 'C',
  PUP: 'D',
  RDM: 'E',
  SAM: 'A-',
  THF: 'A-',
  WAR: 'C-'
};

const shield = {
  name: 'Shield',
  BST: 'E',
  PLD: 'A+',
  RDM: 'F',
  THF: 'F',
  WAR: 'C+',
  WHM: 'D'
};

const defensiveSkills = [evasion, guarding, parrying, shield];

// Magic Skills

const blue = {
  name: 'Blue',
  BLU: 'A+'
};

const dark = {
  name: 'Dark',
  BLM: 'A-',
  DRK: 'A-',
  RDM: 'E'
};

const divine = {
  name: 'Divine',
  PLD: 'B+',
  RDM: 'E',
  WHM: 'A-'
};

const elemental = {
  name: 'Elemental',
  BLM: 'A+',
  DRK: 'B+',
  RDM: 'C+'
};

const enfeebling = {
  name: 'Enfeebling',
  BLM: 'C+',
  DRK: 'C',
  RDM: 'A+',
  WHM: 'C'
};

const enhancing = {
  name: 'Enhancing',
  BLM: 'E',
  PLD: 'D',
  RDM: 'B+',
  WHM: 'C+'
};

const healing = {
  name: 'Healing',
  PLD: 'C',
  RDM: 'C-',
  WHM: 'A+'
};

const summoning = {
  name: 'Summoning',
  SMN: 'A-'
};

const ninjutsu = {
  name: 'Ninjutsu',
  NIN: 'A-'
};

const singing = {
  name: 'Singing',
  BRD: 'C'
};

const string = {
  name: 'String',
  BRD: 'C'
};

const wind = {
  name: 'Wind',
  BRD: 'C'
};

const magicSkills = [
  blue,
  dark,
  divine,
  elemental,
  enfeebling,
  enhancing,
  healing,
  summoning,
  ninjutsu,
  singing,
  string,
  wind
];

export { weaponSkills, rangedSkills, defensiveSkills, magicSkills };
