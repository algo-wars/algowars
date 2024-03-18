import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { problemService } from "../services/problem.service";
import { Card } from "@/components/ui/card";
import MarkdownViewer from "@/components/markdown-viewer/markdown-viewer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const ProblemRandom = () => {
  const [disallowedIds, setDisallowedIds] = useState<number[]>([]);

  const {
    data: problem,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["random-problem", disallowedIds],
    queryFn: async () => {
      return problemService.getRandomProblem(disallowedIds);
    },
  });

  const skipProblem = () => {
    if (problem) {
      setDisallowedIds((curr) => [...curr, problem.id]);
    }
  };

  return problem ? (
    <Card className="p-5 flex flex-col gap-5">
      <h3 className="font-semibold text-xl">{problem.title}</h3>
      <MarkdownViewer
        markdown={problem.question}
        className="max-h-[10rem] overflow-auto"
      />
      <div className="flex gap-5 items-center">
        <Link
          to={`/problems/${problem.slug}`}
          className={cn(buttonVariants({ variant: "default" }), "w-24")}
        >
          Train
        </Link>
        <Button variant="outline" className="w-24" onClick={skipProblem}>
          Skip
        </Button>
      </div>
    </Card>
  ) : (
    <Card className="p-5">
      <h3 className="font-semibold text-xl">No Problems Available</h3>
    </Card>
  );
};

export default ProblemRandom;
