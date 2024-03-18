import { useState } from "react";
import CreateProblemTestsNav from "./create-problem-tests-nav/create-problem-tests-nav";
import { useCreateProblem } from "../create-problem.provider";
import CreateProblemTestsEdit from "./create-problem-tests-edit/create-problem-tests-edit";

const CreateProblemTests = () => {
  const [currentTest, setCurrentTest] = useState<number>(0);
  const { createTests } = useCreateProblem();
  console.log(createTests);
  return (
    <div className="flex flex-col gap-3">
      <CreateProblemTestsNav
        currentTest={currentTest}
        setCurrentTest={setCurrentTest}
      />
      {createTests[currentTest] ? (
        <CreateProblemTestsEdit test={createTests[currentTest]} />
      ) : null}
    </div>
  );
};

export default CreateProblemTests;
