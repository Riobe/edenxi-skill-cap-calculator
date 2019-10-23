import {
  weaponSkills,
  rangedSkills,
  defensiveSkills,
  magicSkills
} from './skills';

const jobs = {
  BRD: { abbreviation: 'BRD', name: 'Bard', url: 'https://ffxiclopedia.fandom.com/wiki/Bard?oldid=328625' },
  BST: { abbreviation: 'BST', name: 'Beastmaster', url: 'https://ffxiclopedia.fandom.com/wiki/Beastmaster?oldid=333828' },
  BLM: { abbreviation: 'BLM', name: 'Black Mage', url: 'https://ffxiclopedia.fandom.com/wiki/Black_Mage?oldid=328578' },
  BLU: { abbreviation: 'BLU', name: 'Blue Mage', url: 'https://ffxiclopedia.fandom.com/wiki/Blue_Mage?oldid=329378' },
  COR: { abbreviation: 'COR', name: 'Corsair', url: 'https://ffxiclopedia.fandom.com/wiki/Corsair?oldid=331129' },
  DRK: { abbreviation: 'DRK', name: 'Dark Knight', url: 'https://ffxiclopedia.fandom.com/wiki/Dark_Knight?oldid=328601' },
  DRG: { abbreviation: 'DRG', name: 'Dragoon', url: 'https://ffxiclopedia.fandom.com/wiki/Dragoon?oldid=335407' },
  MNK: { abbreviation: 'MNK', name: 'Monk', url: 'https://ffxiclopedia.fandom.com/wiki/Monk?oldid=328568' },
  NIN: { abbreviation: 'NIN', name: 'Ninja', url: 'https://ffxiclopedia.fandom.com/wiki/Ninja?oldid=329200' },
  PLD: { abbreviation: 'PLD', name: 'Paladin', url: 'https://ffxiclopedia.fandom.com/wiki/Paladin?oldid=328600' },
  PUP: { abbreviation: 'PUP', name: 'Puppetmaster', url: 'https://ffxiclopedia.fandom.com/wiki/Puppetmaster?oldid=337647' },
  RNG: { abbreviation: 'RNG', name: 'Ranger', url: 'https://ffxiclopedia.fandom.com/wiki/Ranger?oldid=328605' },
  RDM: { abbreviation: 'RDM', name: 'Red Mage', url: 'https://ffxiclopedia.fandom.com/wiki/Red_Mage?oldid=338539' },
  SAM: { abbreviation: 'SAM', name: 'Samurai', url: 'https://ffxiclopedia.fandom.com/wiki/Samurai?oldid=328607' },
  SMN: { abbreviation: 'SMN', name: 'Summoner', url: 'https://ffxiclopedia.fandom.com/wiki/Summoner?oldid=328613' },
  THF: { abbreviation: 'THF', name: 'Thief', url: 'https://ffxiclopedia.fandom.com/wiki/Thief?oldid=328581' },
  WAR: { abbreviation: 'WAR', name: 'Warrior', url: 'https://ffxiclopedia.fandom.com/wiki/Warrior?oldid=328566' },
  WHM: { abbreviation: 'WHM', name: 'White Mage', url: 'https://ffxiclopedia.fandom.com/wiki/White_Mage?oldid=328569' }
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
