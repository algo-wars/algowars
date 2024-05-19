import Countdown from "@/components/countdown/countdown";
import PageLoader from "@/components/loader/page-loader/page-loader";
import ErrorAlertFixed from "@/errors/error-alert-fixed/error-alert-fixed";
import { codeRushService } from "@/features/code-rush/services/code-rush.service";
import ProblemPlay from "@/features/problem/problem-play/problem-play";
import { ProblemPlayProvider } from "@/features/problem/problem-play/problem-play.provider";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CodeRushPlayStart = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { rushId } = useParams();

  const {
    data: game,
    error,
    isPending,
  } = useQuery({
    queryKey: ["get-game"],
    queryFn: async () => {
      if (rushId) {
        const accessToken = await getAccessTokenSilently();
        return codeRushService.getGameById(accessToken, rushId);
      }

      return null;
    },
  });

  if (isPending) {
    return <PageLoader />;
  }

  const startTime: Date = new Date(game?.startedAt) ?? null;

  return (
    <>
      <ErrorAlertFixed error={error} />
      {startTime ? <Countdown startTime={startTime} /> : null}
      {game?.currentProblemSlug ? (
        <ProblemPlayProvider slug={game.currentProblemSlug}>
          <ProblemPlay />
        </ProblemPlayProvider>
      ) : null}
    </>
  );
};

export default CodeRushPlayStart;
