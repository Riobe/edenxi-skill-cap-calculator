import React, { useContext } from "react";

const JobContext = React.createContext({
  mainJob: undefined,
  mainJobLevel: 1,
  subJob: undefined,
  subJobLevel: undefined
});

const useJobContext = () => {
  const context = useContext(JobContext);
  return context;
};

const JobContextConsumer = JobContext.Consumer;
const JobContextProvider = JobContext.Provider;

export { JobContextConsumer, JobContextProvider, useJobContext };
export default JobContext;
