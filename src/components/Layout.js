import React, { useState } from 'react';

import { Grid, Stack, Flex } from '@chakra-ui/core';
import SkillCaps from './SkillCaps';
import Header from './Header';
import Footer from './Footer';
import JobSelection from './JobSelection';

import { JobContextProvider } from '../data/JobContext';

function Layout() {
  const [mainJob, setMainJob] = useState();
  const [mainJobLevel, setMainJobLevel] = useState(1);
  const [subJob, setSubJob] = useState();
  const [subJobLevel, setSubJobLevel] = useState();
  const [keepSubJobLeveled, setKeepSubJobLeveled] = useState(true);

  const jobContext = {
    mainJob,
    mainJobLevel,
    subJob,
    subJobLevel
  };

  return (
    <JobContextProvider value={jobContext}>
      <Flex justifyContent="center">
        <Grid
          id="App"
          backgroundColor="#FFFFFF"
          opacity="0.84"
          width="80%"
          marginTop="20px"
          fontFamily="Arial, Helvetica, sans-serif"
          templateColumns="110px 110px auto"
          templateRows="6em auto 10px"
          templateAreas={`'header header header'
          'main-job sub-job content'
          'footer footer footer'`}
        >
          <Header />

          {/* Main Job Selection */}
          <Stack gridArea="main-job">
            <JobSelection
              jobType="main"
              onChange={job => {
                if (job === subJob) {
                  setSubJob(mainJob);
                }
                setMainJob(job);
              }}
              onLevelChange={level => {
                setMainJobLevel(level);

                if (
                  subJobLevel > level / 2 ||
                  (keepSubJobLeveled && subJobLevel < Math.floor(level / 2))
                ) {
                  setSubJobLevel(Math.max(Math.floor(level / 2), 1));
                }
              }}
            />
          </Stack>

          {/* Sub Job Selection */}
          <Stack gridArea="sub-job">
            <JobSelection
              visibility={mainJob || 'hidden'}
              jobType="sub"
              disableLevelInput={keepSubJobLeveled}
              onChange={job => {
                if (job === mainJob) {
                  setMainJob(subJob);
                }

                if (!subJob) {
                  setSubJobLevel(
                    keepSubJobLeveled
                      ? Math.max(Math.floor(mainJobLevel / 2), 1)
                      : 1
                  );
                }

                setSubJob(job);
              }}
              onLevelChange={level => setSubJobLevel(level)}
              onRemoveSubJob={() => {
                setSubJob();
                setSubJobLevel();
              }}
              onToggleSubJobLink={() => {
                if (!keepSubJobLeveled) {
                  setSubJobLevel(Math.floor(mainJobLevel / 2));
                }

                setKeepSubJobLeveled(!keepSubJobLeveled);
              }}
            />
          </Stack>

          {mainJob && (<SkillCaps id="content" gridArea="content" />)}
          <Footer id="footer" gridArea="footer" />
        </Grid>
      </Flex>
    </JobContextProvider>
  );
}

export default Layout;
