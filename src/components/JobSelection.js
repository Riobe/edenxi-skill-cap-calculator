import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Radio,
  Icon,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/core';
import { jobsAsList } from '../data/jobs';
import { useJobContext } from '../data/JobContext';
import clamp from '../util/clamp';

function JobSelection({
  jobType,
  disableLevelInput,
  onChange,
  onLevelChange,
  onRemoveSubJob,
  onToggleSubJobLink,
  ...props
}) {
  const { mainJob, mainJobLevel, subJob, subJobLevel } = useJobContext();

  const selectedJob = jobType === 'main' ? mainJob : subJob;
  const jobLevel = jobType === 'main' ? mainJobLevel : subJobLevel;
  const minLevel = 1;
  const maxLevel =
    jobType === 'main' ? 75 : clamp(Math.floor(mainJobLevel / 2), minLevel, 37);

  return (
    <Stack spacing={0} marginLeft="15px" {...props}>
      <Box as="label">
        <span>{jobType === 'main' ? 'Main Job' : 'Sub Job'}</span>
      </Box>

      <Flex
        justifyContent="flex-end"
        marginTop="4px"
        marginBottom="4px"
        minHeight="15px"
      >
        {jobType === 'sub' &&
          subJob &&
          (disableLevelInput ? (
            <IconButton
              variant="outline"
              variantColor="teal"
              aria-label="Remove sub job"
              icon={() => <Icon name="link" size="10px" />}
              size="xs"
              height="15px"
              onClick={onToggleSubJobLink}
            />
          ) : (
            <IconButton
              variant="outline"
              variantColor="teal"
              aria-label="Remove sub job"
              icon={() => <Icon name="unlock" size="10px" />}
              size="xs"
              height="15px"
              onClick={onToggleSubJobLink}
            />
          ))}
        {jobType === 'sub' && subJob && (
          <IconButton
            variant="outline"
            variantColor="red"
            aria-label="Remove sub job"
            size="xs"
            height="15px"
            marginLeft="10px"
            icon={() => <Icon name="close" size="10px" />}
            onClick={onRemoveSubJob}
          />
        )}
      </Flex>

      {/* Level Input */}
      <NumberInput
        size="sm"
        marginTop="10px"
        min={minLevel}
        max={maxLevel}
        value={jobLevel}
        isDisabled={
          !selectedJob || disableLevelInput || (jobType === 'sub' && !subJob)
        }
        visibility={jobType === 'main' || subJob ? 'visible' : 'hidden'}
        onChange={value => {
          onLevelChange(value);
        }}
      >
        {/*
          On subjob, the value doesn't come down from the NumberInput correctly unless
          I directly set it on the NumberInputField. Otherwise I wouldn't need to pull in
          any of these subfields. A bug in Chakra as far as I can guess.
        */}
        <NumberInputField value={jobLevel} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      {/* Level Slider */}
      <Box paddingX="7px">
        <Slider
          flex="1"
          value={jobLevel}
          size="sm"
          min={minLevel}
          max={maxLevel}
          isDisabled={
            !selectedJob || disableLevelInput || (jobType === 'sub' && !subJob)
          }
          visibility={jobType === 'main' || subJob ? 'visible' : 'hidden'}
          onChange={position =>
            onLevelChange(clamp(position, minLevel, maxLevel))
          }
        >
          <SliderTrack />

          {/*
            The "width" prop is supposed to be done by Chakra, but there appears to be a bug.
            For some reason, just reimplementing what I saw as their logic makes it
            work for both subjob and mainjob. It only worked for mainjob previously.
          */}
          <SliderFilledTrack
            width={((jobLevel - minLevel) * 100) / (maxLevel - minLevel) + '%'}
          />

          {/*
            The "left" prop is supposed to be done by Chakra, but there appears to be a bug.
            For some reason, just reimplementing what I saw as their logic makes it
            work for both subjob and mainjob. It only worked for mainjob previously.
          */}
          <SliderThumb
            fontSize="sm"
            width="22px"
            height="15px"
            children={jobLevel}
            left={`calc(${((jobLevel - minLevel) * 100) /
              (maxLevel - minLevel)}% - 10px / 2)`}
          />
        </Slider>
      </Box>

      {/* Radio Buttons */}
      {jobsAsList.map(job => (
        <Radio
          key={job.abbreviation + '-' + job}
          name={jobType + '-job-change'}
          value={job.abbreviation}
          isChecked={selectedJob === job}
          isDisabled={
            jobType === 'sub' && mainJob && !subJob && job === mainJob
          }
          onChange={() => onChange(job)}
          isFullWidth={true}
        >
          {job.abbreviation}
        </Radio>
      ))}
    </Stack>
  );
}

export default JobSelection;
