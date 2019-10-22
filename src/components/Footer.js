import React from 'react';
import { Box, Link } from '@chakra-ui/core';

function Footer(props) {
  return (
    <Box fontSize="7px" width="100%" {...props}>
      <span>Data from</span>
      <Link
        fontSize="7px"
        marginTop="-30px"
        marginLeft="5px"
        href="https://ffxiclopedia.fandom.com/wiki/Category:Combat_Skills?oldid=362588"
        isExternal
      >
        https://ffxiclopedia.fandom.com/wiki/Category:Combat_Skills?oldid=362588
      </Link>
    </Box>
  );
}

export default Footer;
