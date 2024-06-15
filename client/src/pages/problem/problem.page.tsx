import PageLoader from "@/components/loader/page-loader/page-loader";
import ProblemEditor from "@/features/problem/problem-editor/problem-editor";
import ProblemEditorFooter from "@/features/problem/problem-editor/problem-editor-footer/problem-editor-footer";
import { ProblemEditorProvider } from "@/features/problem/problem-editor/problem-editor.provider";
import { ProblemService } from "@/features/problem/services/problem.service";
import LayoutProblem from "@/layout/layout-problem/layout-problem";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProblemPage = () => {
  const { slug } = useParams();
  const {
    data: problemAggregate,
    isPending,
    error,
  } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      if (slug) {
        return ProblemService.getInstance().findProblemAggregateBySlug(slug);
      }
      return null;
    },
  });

  useEffect(() => {
    if (error?.message) {
      toast.error(`Error getting the problem "${slug}"`, {
        description: error.message,
      });
    }
  }, [error?.message, slug]);

  if (isPending) {
    return <PageLoader />;
  }

  return (
    <LayoutProblem>
      {problemAggregate ? (
        <div className="flex flex-col h-full">
          <ProblemEditorProvider>
            <div className="grow pb-5">
              <ProblemEditor problemAggregate={problemAggregate} />
            </div>

            <ProblemEditorFooter />
          </ProblemEditorProvider>
        </div>
      ) : null}
    </LayoutProblem>
  );
};

export default ProblemPage;
