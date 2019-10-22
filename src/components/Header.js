import React from 'react';

import { Box, Heading } from '@chakra-ui/core';

import { useJobContext } from '../data/JobContext';

function Header() {
  const { mainJob, subJob } = useJobContext();

  return (
    <Box
      id="header"
      gridArea="header"
      textAlign="center"
      backgroundColor="#99caf9"
    >
      <Heading>Skill Cap Calculator</Heading>
      {/*<Heading size="xs">Being worked on, expect reloads</Heading>*/}
      {mainJob && (
        <Heading id="job-header" size="xs" as="h5">
          <span>{mainJob.abbreviation}</span>
          {subJob && <span>/{subJob.abbreviation}</span>}
        </Heading>
      )}
    </Box>
  );
}

export default Header;
