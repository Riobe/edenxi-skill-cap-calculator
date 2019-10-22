import {
  weaponSkills,
  rangedSkills,
  defensiveSkills,
  magicSkills
} from './skills';

const jobs = {
  BRD: { abbreviation: 'BRD', name: 'Bard' },
  BST: { abbreviation: 'BST', name: 'Beastmaster' },
  BLM: { abbreviation: 'BLM', name: 'Black Mage' },
  BLU: { abbreviation: 'BLU', name: 'Blue Mage' },
  COR: { abbreviation: 'COR', name: 'Corsair' },
  DRK: { abbreviation: 'DRK', name: 'Dark Knight' },
  DRG: { abbreviation: 'DRG', name: 'Dragoon' },
  MNK: { abbreviation: 'MNK', name: 'Monk' },
  NIN: { abbreviation: 'NIN', name: 'Ninja' },
  PLD: { abbreviation: 'PLD', name: 'Paladin' },
  PUP: { abbreviation: 'PUP', name: 'Puppetmaster' },
  RNG: { abbreviation: 'RNG', name: 'Ranger' },
  RDM: { abbreviation: 'RDM', name: 'Red Mage' },
  SAM: { abbreviation: 'SAM', name: 'Samurai' },
  SMN: { abbreviation: 'SMN', name: 'Summoner' },
  THF: { abbreviation: 'THF', name: 'Thief' },
  WAR: { abbreviation: 'WAR', name: 'Warrior' },
  WHM: { abbreviation: 'WHM', name: 'White Mage' }
};

function addSkillToJobCategory({ skill, job, category }) {
  if (skill[job.abbreviation]) {
    category[skill.name] = skill[job.abbreviation];
  }
}

Object.values(jobs).forEach(job => {
  job.weaponSkills = {};
  job.rangedSkills = {};
  job.defensiveSkills = {};
  job.magicSkills = {};

  weaponSkills.map(skill =>
    addSkillToJobCategory({
      skill,
      job,
      category: job.weaponSkills
    })
  );

  rangedSkills.map(skill =>
    addSkillToJobCategory({
      skill,
      job,
      category: job.rangedSkills
    })
  );

  defensiveSkills.map(skill =>
    addSkillToJobCategory({
      skill,
      job,
      category: job.defensiveSkills
    })
  );

  magicSkills.map(skill =>
    addSkillToJobCategory({
      skill,
      job,
      category: job.magicSkills
    })
  );
});

const jobsAsList = Object.values(jobs);

export { jobsAsList };
export default jobs;
