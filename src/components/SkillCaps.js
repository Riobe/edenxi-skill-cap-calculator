import React from 'react';

import { Flex, Stack, Box } from '@chakra-ui/core';
import SkillListing from './SkillListing';

import {
  weaponSkills,
  rangedSkills,
  defensiveSkills,
  magicSkills
} from '../data/skills';

function SkillCaps() {
  return (
    <Flex padding="15px" direction="column">
      <Stack isInline>
        <Box fontWeight="600" flexBasis="150px">
          Skill
        </Box>
        <Box fontWeight="600" flexBasis="45px">
          From
        </Box>
        <Box fontWeight="600" flexBasis="45px">
          Rating
        </Box>
        <Box fontWeight="600" flex="1">
          Skill Cap
        </Box>
      </Stack>
      <SkillListing skillSet={weaponSkills} header={'Weapon Skills:'} />
      <SkillListing skillSet={rangedSkills} header={'Ranged Skills:'} />
      <SkillListing skillSet={defensiveSkills} header={'Defensive Skills:'} />
      <SkillListing skillSet={magicSkills} header={'Magic Skills:'} />
    </Flex>
  );
}

export default SkillCaps;
