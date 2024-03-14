import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemCodeEditor from "@/features/problem/problem-code-editor/ProblemCodeEditor";
import ProblemInfo from "@/features/problem/problem-info/ProblemInfo";
import NavbarSolid from "@/layout/navbar/navbar-solid/NavbarSolid";
import { useProblemPage } from "./ProblemPage.hooks";
import ErrorAlertFixed from "@/errors/error-alert-fixed/ErrorAlertFixed";
import ProblemResult from "@/features/problem/problem-result/ProblemResult";
import PageLoader from "@/components/loader/page-loader/PageLoader";

const ProblemPage = () => {
  const { problem, setup, isLoading, error, submitCode, submissionResult } =
    useProblemPage();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <ErrorAlertFixed error={error} />
      <div className="flex flex-col h-screen">
        <header>
          <NavbarSolid />
        </header>
        <section className="grow">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={46}>
              <ProblemCodeEditor initialCode={setup?.code ?? ""} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={54}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel
                  defaultSize={70}
                  className="overflow-y-scroll h-full"
                >
                  {problem ? <ProblemInfo problem={problem} /> : null}
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={30}>
                  <ProblemResult submission={submissionResult} setup={setup} />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </section>
        <div className="border-t shadow-sm flex items-center p-5">
          <ul className="ml-auto">
            <li>
              <Button disabled={isLoading} onClick={submitCode}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProblemPage;