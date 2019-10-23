/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Box, Stack } from '@chakra-ui/core';
import { useJobContext } from '../data/JobContext';
import rankings from '../data/rankings';

function SkillListing({ skillSet, header }) {
  const { mainJob, mainJobLevel, subJob, subJobLevel } = useJobContext();

  if (!mainJob || !skillSet) {
    if (!skillSet) {
      console.error('no skillset');
    }
    return null;
  }

  return (
    <Box>
      <Box as="header" marginTop="15px" fontWeight="700">
        {header}
      </Box>

      {skillSet.map((skill, index) => {
        const mainJobRating = mainJob && skill[mainJob.abbreviation];
        const mainJobCap =
          (mainJobRating || 0) &&
          rankings[mainJobRating].byLevel[mainJobLevel - 1];

        const subJobRating = subJob && skill[subJob.abbreviation];
        const subJobCap =
          (subJobRating || 0) &&
          rankings[subJobRating].byLevel[subJobLevel - 1];

        if (!mainJobRating && !subJobRating) {
          return null;
        }

        let fromJob = mainJobCap ? mainJob.abbreviation : subJob && subJob.abbreviation;
        if (!fromJob) {
          return null;
        }

        let skillCap = Math.max(mainJobCap, isNaN(subJobCap) ? 0 : subJobCap);
        if (isNaN(skillCap)) {
          skillCap = 0;
        }

        return (
          <Box
            key={index}
            css={css`
              :nth-child(odd) {
                background-color: rgba(200, 200, 200, 0.25);
              }
            `}
          >
            <Stack isInline>
              <Box flexBasis="150px">{skill.name}</Box>
              <Box flexBasis="45px">{fromJob + '\t'}</Box>
              <Box flexBasis="45px">
                {mainJobCap > subJobCap ? mainJobRating : subJobRating}
              </Box>
              <Box flex="1">{skillCap}</Box>
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
}

export default SkillListing;
