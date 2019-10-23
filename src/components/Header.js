import React from 'react';

import { Box, Heading, Link } from '@chakra-ui/core';

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
          <Link href={mainJob.url} isExternal>{mainJob.abbreviation}</Link>
          {subJob && <Link href={subJob.url} isExternal>/{subJob.abbreviation}</Link>}
        </Heading>
      )}
    </Box>
  );
}

export default Header;
